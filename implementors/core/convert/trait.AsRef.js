(function() {var implementors = {};
implementors["anyhow"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> + 'static + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt; for <a class=\"struct\" href=\"anyhow/struct.Error.html\" title=\"struct anyhow::Error\">Error</a>","synthetic":false,"types":["anyhow::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> + 'static&gt; for <a class=\"struct\" href=\"anyhow/struct.Error.html\" title=\"struct anyhow::Error\">Error</a>","synthetic":false,"types":["anyhow::Error"]}];
implementors["bstr"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"bstr/struct.BString.html\" title=\"struct bstr::BString\">BString</a>","synthetic":false,"types":["bstr::bstring::BString"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"bstr/struct.BStr.html\" title=\"struct bstr::BStr\">BStr</a>&gt; for <a class=\"struct\" href=\"bstr/struct.BString.html\" title=\"struct bstr::BString\">BString</a>","synthetic":false,"types":["bstr::bstring::BString"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"bstr/struct.BStr.html\" title=\"struct bstr::BStr\">BStr</a>","synthetic":false,"types":["bstr::bstr::BStr"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"bstr/struct.BStr.html\" title=\"struct bstr::BStr\">BStr</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>","synthetic":false,"types":[]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"bstr/struct.BStr.html\" title=\"struct bstr::BStr\">BStr</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>","synthetic":false,"types":[]}];
implementors["cargo"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"cargo/core/struct.InternedString.html\" title=\"struct cargo::core::InternedString\">InternedString</a>","synthetic":false,"types":["cargo::core::interning::InternedString"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/ffi/os_str/struct.OsStr.html\" title=\"struct std::ffi::os_str::OsStr\">OsStr</a>&gt; for <a class=\"struct\" href=\"cargo/core/struct.InternedString.html\" title=\"struct cargo::core::InternedString\">InternedString</a>","synthetic":false,"types":["cargo::core::interning::InternedString"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt; for <a class=\"struct\" href=\"cargo/core/struct.InternedString.html\" title=\"struct cargo::core::InternedString\">InternedString</a>","synthetic":false,"types":["cargo::core::interning::InternedString"]}];
implementors["either"] = [{"text":"impl&lt;L, R, Target&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;Target&gt; for <a class=\"enum\" href=\"either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;Target&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;Target&gt;,&nbsp;</span>","synthetic":false,"types":["either::Either"]},{"text":"impl&lt;L, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;str&gt; for <a class=\"enum\" href=\"either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;str&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;str&gt;,&nbsp;</span>","synthetic":false,"types":["either::Either"]},{"text":"impl&lt;L, R, Target&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[Target]&gt; for <a class=\"enum\" href=\"either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[Target]&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[Target]&gt;,&nbsp;</span>","synthetic":false,"types":["either::Either"]}];
implementors["git2"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"git2/struct.Oid.html\" title=\"struct git2::Oid\">Oid</a>","synthetic":false,"types":["git2::oid::Oid"]}];
implementors["humantime"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/time/struct.Duration.html\" title=\"struct core::time::Duration\">Duration</a>&gt; for <a class=\"struct\" href=\"humantime/struct.Duration.html\" title=\"struct humantime::Duration\">Duration</a>","synthetic":false,"types":["humantime::wrapper::Duration"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/time/struct.SystemTime.html\" title=\"struct std::time::SystemTime\">SystemTime</a>&gt; for <a class=\"struct\" href=\"humantime/struct.Timestamp.html\" title=\"struct humantime::Timestamp\">Timestamp</a>","synthetic":false,"types":["humantime::wrapper::Timestamp"]}];
implementors["im_rc"] = [{"text":"impl&lt;K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"im_rc/struct.OrdMap.html\" title=\"struct im_rc::OrdMap\">OrdMap</a>&lt;K, V&gt;&gt; for <a class=\"struct\" href=\"im_rc/struct.OrdMap.html\" title=\"struct im_rc::OrdMap\">OrdMap</a>&lt;K, V&gt;","synthetic":false,"types":["im_rc::ord::map::OrdMap"]},{"text":"impl&lt;K, V, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"im_rc/struct.HashMap.html\" title=\"struct im_rc::HashMap\">HashMap</a>&lt;K, V, S&gt;&gt; for <a class=\"struct\" href=\"im_rc/struct.HashMap.html\" title=\"struct im_rc::HashMap\">HashMap</a>&lt;K, V, S&gt;","synthetic":false,"types":["im_rc::hash::map::HashMap"]}];
implementors["openssl"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"openssl/asn1/struct.Asn1GeneralizedTimeRef.html\" title=\"struct openssl::asn1::Asn1GeneralizedTimeRef\">Asn1GeneralizedTimeRef</a>&gt; for <a class=\"struct\" href=\"openssl/asn1/struct.Asn1GeneralizedTime.html\" title=\"struct openssl::asn1::Asn1GeneralizedTime\">Asn1GeneralizedTime</a>","synthetic":false,"types":["openssl::asn1::Asn1GeneralizedTime"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"openssl/asn1/struct.Asn1TimeRef.html\" title=\"struct openssl::asn1::Asn1TimeRef\">Asn1TimeRef</a>&gt; for <a class=\"struct\" href=\"openssl/asn1/struct.Asn1Time.html\" title=\"struct openssl::asn1::Asn1Time\">Asn1Time</a>","synthetic":false,"types":["openssl::asn1::Asn1Time"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"openssl/asn1/struct.Asn1StringRef.html\" title=\"struct openssl::asn1::Asn1StringRef\">Asn1StringRef</a>&gt; for <a class=\"struct\" href=\"openssl/asn1/struct.Asn1String.html\" title=\"struct openssl::asn1::Asn1String\">Asn1String</a>","synthetic":false,"types":["openssl::asn1::Asn1String"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"openssl/asn1/struct.Asn1IntegerRef.html\" title=\"struct openssl::asn1::Asn1IntegerRef\">Asn1IntegerRef</a>&gt; for <a class=\"struct\" href=\"openssl/asn1/struct.Asn1Integer.html\" title=\"struct openssl::asn1::Asn1Integer\">Asn1Integer</a>","synthetic":false,"types":["openssl::asn1::Asn1Integer"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"openssl/asn1/struct.Asn1BitStringRef.html\" title=\"struct openssl::asn1::Asn1BitStringRef\">Asn1BitStringRef</a>&gt; for <a class=\"struct\" href=\"openssl/asn1/struct.Asn1BitString.html\" title=\"struct openssl::asn1::Asn1BitString\">Asn1BitString</a>","synthetic":false,"types":["openssl::asn1::Asn1BitString"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"openssl/asn1/struct.Asn1ObjectRef.html\" title=\"struct openssl::asn1::Asn1ObjectRef\">Asn1ObjectRef</a>&gt; for <a class=\"struct\" href=\"openssl/asn1/struct.Asn1Object.html\" title=\"struct openssl::asn1::Asn1Object\">Asn1Object</a>","synthetic":false,"types":["openssl::asn1::Asn1Object"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"openssl/bn/struct.BigNumContextRef.html\" title=\"struct openssl::bn::BigNumContextRef\">BigNumContextRef</a>&gt; for <a class=\"struct\" href=\"openssl/bn/struct.BigNumContext.html\" title=\"struct openssl::bn::BigNumContext\">BigNumContext</a>","synthetic":false,"types":["openssl::bn::BigNumContext"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"openssl/bn/struct.BigNumRef.html\" title=\"struct openssl::bn::BigNumRef\">BigNumRef</a>&gt; for <a class=\"struct\" href=\"openssl/bn/struct.BigNum.html\" title=\"struct openssl::bn::BigNum\">BigNum</a>","synthetic":false,"types":["openssl::bn::BigNum"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"openssl/cms/struct.CmsContentInfoRef.html\" title=\"struct openssl::cms::CmsContentInfoRef\">CmsContentInfoRef</a>&gt; for <a class=\"struct\" href=\"openssl/cms/struct.CmsContentInfo.html\" title=\"struct openssl::cms::CmsContentInfo\">CmsContentInfo</a>","synthetic":false,"types":["openssl::cms::CmsContentInfo"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"openssl/conf/struct.ConfRef.html\" title=\"struct openssl::conf::ConfRef\">ConfRef</a>&gt; for <a class=\"struct\" href=\"openssl/conf/struct.Conf.html\" title=\"struct openssl::conf::Conf\">Conf</a>","synthetic":false,"types":["openssl::conf::Conf"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"openssl/dh/struct.DhRef.html\" title=\"struct openssl::dh::DhRef\">DhRef</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"openssl/dh/struct.Dh.html\" title=\"struct openssl::dh::Dh\">Dh</a>&lt;T&gt;","synthetic":false,"types":["openssl::dh::Dh"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"openssl/dsa/struct.DsaRef.html\" title=\"struct openssl::dsa::DsaRef\">DsaRef</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"openssl/dsa/struct.Dsa.html\" title=\"struct openssl::dsa::Dsa\">Dsa</a>&lt;T&gt;","synthetic":false,"types":["openssl::dsa::Dsa"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"openssl/ec/struct.EcGroupRef.html\" title=\"struct openssl::ec::EcGroupRef\">EcGroupRef</a>&gt; for <a class=\"struct\" href=\"openssl/ec/struct.EcGroup.html\" title=\"struct openssl::ec::EcGroup\">EcGroup</a>","synthetic":false,"types":["openssl::ec::EcGroup"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"openssl/ec/struct.EcPointRef.html\" title=\"struct openssl::ec::EcPointRef\">EcPointRef</a>&gt; for <a class=\"struct\" href=\"openssl/ec/struct.EcPoint.html\" title=\"struct openssl::ec::EcPoint\">EcPoint</a>","synthetic":false,"types":["openssl::ec::EcPoint"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"openssl/ec/struct.EcKeyRef.html\" title=\"struct openssl::ec::EcKeyRef\">EcKeyRef</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"openssl/ec/struct.EcKey.html\" title=\"struct openssl::ec::EcKey\">EcKey</a>&lt;T&gt;","synthetic":false,"types":["openssl::ec::EcKey"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"openssl/ecdsa/struct.EcdsaSigRef.html\" title=\"struct openssl::ecdsa::EcdsaSigRef\">EcdsaSigRef</a>&gt; for <a class=\"struct\" href=\"openssl/ecdsa/struct.EcdsaSig.html\" title=\"struct openssl::ecdsa::EcdsaSig\">EcdsaSig</a>","synthetic":false,"types":["openssl::ecdsa::EcdsaSig"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"openssl/hash/struct.DigestBytes.html\" title=\"struct openssl::hash::DigestBytes\">DigestBytes</a>","synthetic":false,"types":["openssl::hash::DigestBytes"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"openssl/ocsp/struct.OcspBasicResponseRef.html\" title=\"struct openssl::ocsp::OcspBasicResponseRef\">OcspBasicResponseRef</a>&gt; for <a class=\"struct\" href=\"openssl/ocsp/struct.OcspBasicResponse.html\" title=\"struct openssl::ocsp::OcspBasicResponse\">OcspBasicResponse</a>","synthetic":false,"types":["openssl::ocsp::OcspBasicResponse"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"openssl/ocsp/struct.OcspCertIdRef.html\" title=\"struct openssl::ocsp::OcspCertIdRef\">OcspCertIdRef</a>&gt; for <a class=\"struct\" href=\"openssl/ocsp/struct.OcspCertId.html\" title=\"struct openssl::ocsp::OcspCertId\">OcspCertId</a>","synthetic":false,"types":["openssl::ocsp::OcspCertId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"openssl/ocsp/struct.OcspResponseRef.html\" title=\"struct openssl::ocsp::OcspResponseRef\">OcspResponseRef</a>&gt; for <a class=\"struct\" href=\"openssl/ocsp/struct.OcspResponse.html\" title=\"struct openssl::ocsp::OcspResponse\">OcspResponse</a>","synthetic":false,"types":["openssl::ocsp::OcspResponse"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"openssl/ocsp/struct.OcspRequestRef.html\" title=\"struct openssl::ocsp::OcspRequestRef\">OcspRequestRef</a>&gt; for <a class=\"struct\" href=\"openssl/ocsp/struct.OcspRequest.html\" title=\"struct openssl::ocsp::OcspRequest\">OcspRequest</a>","synthetic":false,"types":["openssl::ocsp::OcspRequest"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"openssl/ocsp/struct.OcspOneReqRef.html\" title=\"struct openssl::ocsp::OcspOneReqRef\">OcspOneReqRef</a>&gt; for <a class=\"struct\" href=\"openssl/ocsp/struct.OcspOneReq.html\" title=\"struct openssl::ocsp::OcspOneReq\">OcspOneReq</a>","synthetic":false,"types":["openssl::ocsp::OcspOneReq"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"openssl/pkcs12/struct.Pkcs12Ref.html\" title=\"struct openssl::pkcs12::Pkcs12Ref\">Pkcs12Ref</a>&gt; for <a class=\"struct\" href=\"openssl/pkcs12/struct.Pkcs12.html\" title=\"struct openssl::pkcs12::Pkcs12\">Pkcs12</a>","synthetic":false,"types":["openssl::pkcs12::Pkcs12"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"openssl/pkcs7/struct.Pkcs7Ref.html\" title=\"struct openssl::pkcs7::Pkcs7Ref\">Pkcs7Ref</a>&gt; for <a class=\"struct\" href=\"openssl/pkcs7/struct.Pkcs7.html\" title=\"struct openssl::pkcs7::Pkcs7\">Pkcs7</a>","synthetic":false,"types":["openssl::pkcs7::Pkcs7"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"openssl/pkey/struct.PKeyRef.html\" title=\"struct openssl::pkey::PKeyRef\">PKeyRef</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"openssl/pkey/struct.PKey.html\" title=\"struct openssl::pkey::PKey\">PKey</a>&lt;T&gt;","synthetic":false,"types":["openssl::pkey::PKey"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"openssl/rsa/struct.RsaRef.html\" title=\"struct openssl::rsa::RsaRef\">RsaRef</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"openssl/rsa/struct.Rsa.html\" title=\"struct openssl::rsa::Rsa\">Rsa</a>&lt;T&gt;","synthetic":false,"types":["openssl::rsa::Rsa"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"openssl/srtp/struct.SrtpProtectionProfileRef.html\" title=\"struct openssl::srtp::SrtpProtectionProfileRef\">SrtpProtectionProfileRef</a>&gt; for <a class=\"struct\" href=\"openssl/srtp/struct.SrtpProtectionProfile.html\" title=\"struct openssl::srtp::SrtpProtectionProfile\">SrtpProtectionProfile</a>","synthetic":false,"types":["openssl::srtp::SrtpProtectionProfile"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"openssl/ssl/struct.SslContextRef.html\" title=\"struct openssl::ssl::SslContextRef\">SslContextRef</a>&gt; for <a class=\"struct\" href=\"openssl/ssl/struct.SslContext.html\" title=\"struct openssl::ssl::SslContext\">SslContext</a>","synthetic":false,"types":["openssl::ssl::SslContext"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"openssl/ssl/struct.SslSessionRef.html\" title=\"struct openssl::ssl::SslSessionRef\">SslSessionRef</a>&gt; for <a class=\"struct\" href=\"openssl/ssl/struct.SslSession.html\" title=\"struct openssl::ssl::SslSession\">SslSession</a>","synthetic":false,"types":["openssl::ssl::SslSession"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"openssl/ssl/struct.SslRef.html\" title=\"struct openssl::ssl::SslRef\">SslRef</a>&gt; for <a class=\"struct\" href=\"openssl/ssl/struct.Ssl.html\" title=\"struct openssl::ssl::Ssl\">Ssl</a>","synthetic":false,"types":["openssl::ssl::Ssl"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"openssl/stack/trait.Stackable.html\" title=\"trait openssl::stack::Stackable\">Stackable</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"openssl/stack/struct.StackRef.html\" title=\"struct openssl::stack::StackRef\">StackRef</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"openssl/stack/struct.Stack.html\" title=\"struct openssl::stack::Stack\">Stack</a>&lt;T&gt;","synthetic":false,"types":["openssl::stack::Stack"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"openssl/string/struct.OpensslStringRef.html\" title=\"struct openssl::string::OpensslStringRef\">OpensslStringRef</a>&gt; for <a class=\"struct\" href=\"openssl/string/struct.OpensslString.html\" title=\"struct openssl::string::OpensslString\">OpensslString</a>","synthetic":false,"types":["openssl::string::OpensslString"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"openssl/string/struct.OpensslString.html\" title=\"struct openssl::string::OpensslString\">OpensslString</a>","synthetic":false,"types":["openssl::string::OpensslString"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"openssl/string/struct.OpensslString.html\" title=\"struct openssl::string::OpensslString\">OpensslString</a>","synthetic":false,"types":["openssl::string::OpensslString"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"openssl/string/struct.OpensslStringRef.html\" title=\"struct openssl::string::OpensslStringRef\">OpensslStringRef</a>","synthetic":false,"types":["openssl::string::OpensslStringRef"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"openssl/string/struct.OpensslStringRef.html\" title=\"struct openssl::string::OpensslStringRef\">OpensslStringRef</a>","synthetic":false,"types":["openssl::string::OpensslStringRef"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"openssl/x509/verify/struct.X509VerifyParamRef.html\" title=\"struct openssl::x509::verify::X509VerifyParamRef\">X509VerifyParamRef</a>&gt; for <a class=\"struct\" href=\"openssl/x509/verify/struct.X509VerifyParam.html\" title=\"struct openssl::x509::verify::X509VerifyParam\">X509VerifyParam</a>","synthetic":false,"types":["openssl::x509::verify::X509VerifyParam"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"openssl/x509/store/struct.X509StoreBuilderRef.html\" title=\"struct openssl::x509::store::X509StoreBuilderRef\">X509StoreBuilderRef</a>&gt; for <a class=\"struct\" href=\"openssl/x509/store/struct.X509StoreBuilder.html\" title=\"struct openssl::x509::store::X509StoreBuilder\">X509StoreBuilder</a>","synthetic":false,"types":["openssl::x509::store::X509StoreBuilder"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"openssl/x509/store/struct.X509StoreRef.html\" title=\"struct openssl::x509::store::X509StoreRef\">X509StoreRef</a>&gt; for <a class=\"struct\" href=\"openssl/x509/store/struct.X509Store.html\" title=\"struct openssl::x509::store::X509Store\">X509Store</a>","synthetic":false,"types":["openssl::x509::store::X509Store"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"openssl/x509/struct.X509StoreContextRef.html\" title=\"struct openssl::x509::X509StoreContextRef\">X509StoreContextRef</a>&gt; for <a class=\"struct\" href=\"openssl/x509/struct.X509StoreContext.html\" title=\"struct openssl::x509::X509StoreContext\">X509StoreContext</a>","synthetic":false,"types":["openssl::x509::X509StoreContext"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"openssl/x509/struct.X509Ref.html\" title=\"struct openssl::x509::X509Ref\">X509Ref</a>&gt; for <a class=\"struct\" href=\"openssl/x509/struct.X509.html\" title=\"struct openssl::x509::X509\">X509</a>","synthetic":false,"types":["openssl::x509::X509"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"openssl/x509/struct.X509Ref.html\" title=\"struct openssl::x509::X509Ref\">X509Ref</a>&gt; for <a class=\"struct\" href=\"openssl/x509/struct.X509Ref.html\" title=\"struct openssl::x509::X509Ref\">X509Ref</a>","synthetic":false,"types":["openssl::x509::X509Ref"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"openssl/x509/struct.X509ExtensionRef.html\" title=\"struct openssl::x509::X509ExtensionRef\">X509ExtensionRef</a>&gt; for <a class=\"struct\" href=\"openssl/x509/struct.X509Extension.html\" title=\"struct openssl::x509::X509Extension\">X509Extension</a>","synthetic":false,"types":["openssl::x509::X509Extension"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"openssl/x509/struct.X509NameRef.html\" title=\"struct openssl::x509::X509NameRef\">X509NameRef</a>&gt; for <a class=\"struct\" href=\"openssl/x509/struct.X509Name.html\" title=\"struct openssl::x509::X509Name\">X509Name</a>","synthetic":false,"types":["openssl::x509::X509Name"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"openssl/x509/struct.X509NameEntryRef.html\" title=\"struct openssl::x509::X509NameEntryRef\">X509NameEntryRef</a>&gt; for <a class=\"struct\" href=\"openssl/x509/struct.X509NameEntry.html\" title=\"struct openssl::x509::X509NameEntry\">X509NameEntry</a>","synthetic":false,"types":["openssl::x509::X509NameEntry"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"openssl/x509/struct.X509ReqRef.html\" title=\"struct openssl::x509::X509ReqRef\">X509ReqRef</a>&gt; for <a class=\"struct\" href=\"openssl/x509/struct.X509Req.html\" title=\"struct openssl::x509::X509Req\">X509Req</a>","synthetic":false,"types":["openssl::x509::X509Req"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"openssl/x509/struct.GeneralNameRef.html\" title=\"struct openssl::x509::GeneralNameRef\">GeneralNameRef</a>&gt; for <a class=\"struct\" href=\"openssl/x509/struct.GeneralName.html\" title=\"struct openssl::x509::GeneralName\">GeneralName</a>","synthetic":false,"types":["openssl::x509::GeneralName"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"openssl/x509/struct.X509AlgorithmRef.html\" title=\"struct openssl::x509::X509AlgorithmRef\">X509AlgorithmRef</a>&gt; for <a class=\"struct\" href=\"openssl/x509/struct.X509Algorithm.html\" title=\"struct openssl::x509::X509Algorithm\">X509Algorithm</a>","synthetic":false,"types":["openssl::x509::X509Algorithm"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"openssl/x509/struct.X509ObjectRef.html\" title=\"struct openssl::x509::X509ObjectRef\">X509ObjectRef</a>&gt; for <a class=\"struct\" href=\"openssl/x509/struct.X509Object.html\" title=\"struct openssl::x509::X509Object\">X509Object</a>","synthetic":false,"types":["openssl::x509::X509Object"]}];
implementors["regex_syntax"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"regex_syntax/hir/literal/struct.Literal.html\" title=\"struct regex_syntax::hir::literal::Literal\">Literal</a>","synthetic":false,"types":["regex_syntax::hir::literal::Literal"]}];
implementors["sized_chunks"] = [{"text":"impl&lt;A, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a>A<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"sized_chunks/inline_array/struct.InlineArray.html\" title=\"struct sized_chunks::inline_array::InlineArray\">InlineArray</a>&lt;A, T&gt;","synthetic":false,"types":["sized_chunks::inline_array::InlineArray"]},{"text":"impl&lt;A, N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a>A<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"sized_chunks/sized_chunk/struct.Chunk.html\" title=\"struct sized_chunks::sized_chunk::Chunk\">Chunk</a>&lt;A, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: <a class=\"trait\" href=\"sized_chunks/types/trait.ChunkLength.html\" title=\"trait sized_chunks::types::ChunkLength\">ChunkLength</a>&lt;A&gt;,&nbsp;</span>","synthetic":false,"types":["sized_chunks::sized_chunk::Chunk"]}];
implementors["smallvec"] = [{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"smallvec/trait.Array.html\" title=\"trait smallvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[&lt;A as <a class=\"trait\" href=\"smallvec/trait.Array.html\" title=\"trait smallvec::Array\">Array</a>&gt;::<a class=\"type\" href=\"smallvec/trait.Array.html#associatedtype.Item\" title=\"type smallvec::Array::Item\">Item</a>]&gt; for <a class=\"struct\" href=\"smallvec/struct.SmallVec.html\" title=\"struct smallvec::SmallVec\">SmallVec</a>&lt;A&gt;","synthetic":false,"types":["smallvec::SmallVec"]}];
implementors["tempfile"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt; for <a class=\"struct\" href=\"tempfile/struct.TempDir.html\" title=\"struct tempfile::TempDir\">TempDir</a>","synthetic":false,"types":["tempfile::dir::TempDir"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt; for <a class=\"struct\" href=\"tempfile/struct.TempPath.html\" title=\"struct tempfile::TempPath\">TempPath</a>","synthetic":false,"types":["tempfile::file::TempPath"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/ffi/os_str/struct.OsStr.html\" title=\"struct std::ffi::os_str::OsStr\">OsStr</a>&gt; for <a class=\"struct\" href=\"tempfile/struct.TempPath.html\" title=\"struct tempfile::TempPath\">TempPath</a>","synthetic":false,"types":["tempfile::file::TempPath"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt; for <a class=\"struct\" href=\"tempfile/struct.NamedTempFile.html\" title=\"struct tempfile::NamedTempFile\">NamedTempFile</a>","synthetic":false,"types":["tempfile::file::NamedTempFile"]}];
implementors["url"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"url/struct.Url.html\" title=\"struct url::Url\">Url</a>","synthetic":false,"types":["url::Url"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()