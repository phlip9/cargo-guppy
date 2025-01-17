// Copyright (c) The cargo-guppy Contributors
// SPDX-License-Identifier: MIT OR Apache-2.0

use crate::{HakariBuilder, UnifyTargetHost};
use guppy::{
    graph::{cargo::CargoResolverVersion, PackageGraph},
    PackageId, Platform, TargetFeatures,
};
use proptest::{
    collection::{hash_set, vec},
    prelude::*,
};

/// ## Helpers for property testing
///
/// The methods in this section allow random instances of a `HakariBuilder` to be generated, for use
/// in property-based testing scenarios.
///
/// Requires the `proptest010` feature to be enabled.
impl<'g> HakariBuilder<'g, 'static> {
    /// Returns a `Strategy` that generates random `HakariBuilder` instances based on this graph.
    ///
    /// Requires the `proptest010` feature to be enabled.
    ///
    /// ## Panics
    ///
    /// Panics if:
    /// * there are no packages in this `PackageGraph`, or
    /// * `hakari_id` is specified but it isn't known to the graph, or isn't in the workspace.
    pub fn prop010_strategy(
        graph: &'g PackageGraph,
        hakari_id: Option<&'g PackageId>,
    ) -> impl Strategy<Value = HakariBuilder<'g, 'static>> + 'g {
        (
            vec(Platform::strategy(any::<TargetFeatures>()), 0..4),
            any::<CargoResolverVersion>(),
            any::<bool>(),
            hash_set(graph.prop010_id_strategy(), 0..8),
            any::<UnifyTargetHost>(),
            any::<bool>(),
        )
            .prop_map(
                move |(
                    platforms,
                    version,
                    verify_mode,
                    omitted_packages,
                    unify_target_host,
                    unify_all,
                )| {
                    let mut builder = HakariBuilder::new(graph, hakari_id)
                        .expect("HakariBuilder::new returned an error");
                    builder
                        .set_platforms(platforms)
                        .set_resolver_version(version)
                        .set_verify_mode(verify_mode)
                        .add_omitted_packages(omitted_packages)
                        .expect("omitted packages obtained from PackageGraph should work")
                        .set_unify_target_host(unify_target_host)
                        .set_unify_all(unify_all);
                    builder
                },
            )
    }
}

#[cfg(all(test, feature = "summaries"))]
mod test {
    use super::*;
    use fixtures::json::JsonFixture;

    /// Ensure that HakariBuilder roundtrips to its summary format.
    #[test]
    fn builder_summary_roundtrip() {
        for (&name, fixture) in JsonFixture::all_fixtures() {
            let graph = fixture.graph();
            let strategy = HakariBuilder::prop010_strategy(graph, None);
            proptest!(|(builder in strategy)| {
                let summary = builder.to_summary().unwrap_or_else(|err| {
                    panic!("for fixture {}, builder -> summary conversion failed: {}", name, err);
                });
                let builder2 = summary.to_hakari_builder(graph).unwrap_or_else(|err| {
                    panic!("for fixture {}, summary -> builder conversion failed: {}", name, err);
                });
                let summary2 = builder2.to_summary().unwrap_or_else(|err| {
                    panic!("for fixture {}, second builder -> summary conversion failed: {}", name, err);
                });
                assert_eq!(builder, builder2, "builder roundtripped correctly");
                assert_eq!(summary, summary2, "summary roundtripped correctly");
            });
        }
    }
}
