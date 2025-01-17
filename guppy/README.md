# guppy

[![guppy on crates.io](https://img.shields.io/crates/v/guppy)](https://crates.io/crates/guppy) [![Documentation (latest release)](https://docs.rs/guppy/badge.svg)](https://docs.rs/guppy/) [![Documentation (master)](https://img.shields.io/badge/docs-master-brightgreen)](https://facebookincubator.github.io/cargo-guppy/rustdoc/guppy/) [![License](https://img.shields.io/badge/license-Apache-green.svg)](../LICENSE-APACHE) [![License](https://img.shields.io/badge/license-MIT-green.svg)](../LICENSE-MIT)

Track and query Cargo dependency graphs.

`guppy` provides a Rust interface to run queries over Cargo dependency graphs. `guppy` parses
the output of  [`cargo metadata`](https://doc.rust-lang.org/cargo/commands/cargo-metadata.html),
then presents a graph interface over it.

## Types and lifetimes

The central structure exposed by `guppy` is [`PackageGraph`](crate::graph::PackageGraph). This
represents a directed (though [not necessarily acyclic](crate::graph::Cycles)) graph where every
node is a package and every edge represents a dependency.

Other types borrow data from a `PackageGraph` and have a `'g` lifetime parameter indicating
that. A lifetime parameter named `'g` always indicates that data is borrowed from a
`PackageGraph`.

[`PackageMetadata`](crate::graph::PackageMetadata) contains information about individual
packages, such as the data in
[the `[package]` section](https://doc.rust-lang.org/cargo/reference/manifest.html#the-package-section).

For traversing the graph, `guppy` provides a few types:
* [`PackageLink`](crate::graph::PackageLink) represents both ends of a dependency edge, along
  with details about the dependency (whether it is dev-only, platform-specific, and so on).
* [`PackageQuery`](crate::graph::PackageQuery) represents the input parameters to a dependency
  traversal: a set of packages and a direction. A traversal is performed with
  [`PackageQuery::resolve`](crate::graph::PackageQuery::resolve), and fine-grained control over
  the traversal is achieved with
  [`PackageQuery::resolve_with_fn`](crate::graph::PackageQuery::resolve_with_fn).
* [`PackageSet`](crate::graph::PackageSet) represents the result of a graph traversal. This
  struct provides several methods to iterate over packages.

For some operations, `guppy` builds an auxiliary [`FeatureGraph`](crate::graph::feature::FeatureGraph)
the first time it is required. Every node in a `FeatureGraph` is a combination of a package and
a feature declared in it, and every edge is a feature dependency.

For traversing the feature graph, `guppy` provides the analogous [`FeatureQuery`](crate::graph::feature::FeatureQuery) and
[`FeatureSet`](crate::graph::feature::FeatureSet) types.

`FeatureSet` also has an [`into_cargo_set`](crate::graph::feature::FeatureSet::into_cargo_set)
method, to simulate Cargo builds. This method produces a [`CargoSet`](crate::graph::cargo::CargoSet),
which is essentially two `FeatureSet`s along with some more useful information.

`guppy`'s data structures are immutable, with some internal caches. All of `guppy`'s types are
`Send + Sync`, and all lifetime parameters are [covariant](https://github.com/sunshowers/lifetime-variance-example/).

## Optional features

* `proptest010`: Support for [property-based testing](https://jessitron.com/2013/04/25/property-based-testing-what-is-it/)
  using the [`proptest`](https://altsysrq.github.io/proptest-book/intro.html) framework.
* `rayon1`: Support for parallel iterators through [Rayon](docs.rs/rayon/1) (preliminary work
  so far, more parallel iterators to be added in the future).
* `summaries`: Support for writing out [build summaries](https://github.com/facebookincubator/cargo-guppy/tree/master/guppy-summaries).

## Examples

Print out all direct dependencies of a package:

```rust
use guppy::{CargoMetadata, PackageId};

// `guppy` accepts `cargo metadata` JSON output. Use a pre-existing fixture for these examples.
let metadata = CargoMetadata::parse_json(include_str!("../../fixtures/small/metadata1.json")).unwrap();
let package_graph = metadata.build_graph().unwrap();

// `guppy` provides several ways to get hold of package IDs. Use a pre-defined one for this
// example.
let package_id = PackageId::new("testcrate 0.1.0 (path+file:///fakepath/testcrate)");

// The `metadata` method returns information about the package, or `None` if the package ID
// wasn't recognized.
let package = package_graph.metadata(&package_id).unwrap();

// `direct_links` returns all direct dependencies of a package.
for link in package.direct_links() {
    // A dependency link contains `from()`, `to()` and information about the specifics of the
    // dependency.
    println!("direct dependency: {}", link.to().id());
}
```

For more examples, see
[the `examples` directory](https://github.com/facebookincubator/cargo-guppy/tree/master/guppy/examples).

## Contributing

See the [CONTRIBUTING](../CONTRIBUTING.md) file for how to help out.

## License

This project is available under the terms of either the [Apache 2.0 license](../LICENSE-APACHE) or the [MIT
license](../LICENSE-MIT).

<!--
README.md is generated from README.tpl by cargo readme. To regenerate:

cargo install cargo-readme
cargo readme > README.md
-->
