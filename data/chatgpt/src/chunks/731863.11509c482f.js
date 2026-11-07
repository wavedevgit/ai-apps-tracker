export const __rspack_esm_ids = [731863];
export const __webpack_modules__ = {
    M8lA: (function(t, r, e) {
        let a;
        var o = e("PDOq"),
            s = e("Y94G");
        let n = new WeakMap;
        e.d(r, {}, {
            a: function() {
                return a?.deploymentTrack
            },
            b: function(t) {
                let r = n.get(t);
                if (null == r) throw Error("Statsig bootstrap data is unavailable for this document.");
                return r
            },
            getClientBootstrap: function() {
                let t;
                if (null != a) return a;
                (0, s.c)("bootstrap.read.start");
                let r = document.getElementById("client-bootstrap")?.textContent;
                if (!r) throw Error("Client bootstrap is unavailable in the current document.");
                let e = JSON.parse(r),
                    l = e.statsigPayload;
                if ("columns-v1" === e.statsigPayloadEncoding) {
                    let r;
                    if (JSON.parse(e.statsigPayload, (t, e) => ("" === t && (r = structuredClone(e)), e)), !Array.isArray(r) || "statsig-columns-v1" !== r[0]) throw Error("Statsig bootstrap column format is unsupported.");
                    l = JSON.stringify(t = (0, o.a)(r))
                } else t = JSON.parse(e.statsigPayload);
                return n.set(t, l), a = {
                    ...e,
                    statsigPayload: t
                }, (0, s.c)("bootstrap.read.end"), a
            }
        })
    })
};