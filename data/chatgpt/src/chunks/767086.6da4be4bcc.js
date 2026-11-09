export const __rspack_esm_ids = [767086];
export const __webpack_modules__ = {
    M8lA: (function(t, e, r) {
        let o;
        var a = r("PDOq"),
            n = r("Y94G");
        let s = new WeakMap;
        r.d(e, {}, {
            a: function() {
                return o?.deploymentTrack
            },
            b: function() {
                if (null != o) return !0 === o.isFedrampCompliantWorkspace
            },
            c: function(t) {
                let e = s.get(t);
                if (null == e) throw Error("Statsig bootstrap data is unavailable for this document.");
                return e
            },
            getClientBootstrap: function() {
                let t;
                if (null != o) return o;
                (0, n.c)("bootstrap.read.start");
                let e = document.getElementById("client-bootstrap")?.textContent;
                if (!e) throw Error("Client bootstrap is unavailable in the current document.");
                let r = JSON.parse(e),
                    i = r.statsigPayload;
                if ("columns-v1" === r.statsigPayloadEncoding) {
                    let e;
                    if (JSON.parse(r.statsigPayload, (t, r) => ("" === t && (e = structuredClone(r)), r)), !Array.isArray(e) || "statsig-columns-v1" !== e[0]) throw Error("Statsig bootstrap column format is unsupported.");
                    i = JSON.stringify(t = (0, a.a)(e))
                } else t = JSON.parse(r.statsigPayload);
                return s.set(t, i), o = {
                    ...r,
                    statsigPayload: t
                }, (0, n.c)("bootstrap.read.end"), o
            }
        })
    }),
    unIO: (function(t, e, r) {
        let o = "u" > typeof document && document.documentElement.dataset.clientBuildRevision?.trim() || void 0;
        r.d(e, {}, {
            a: function() {
                return o
            }
        })
    })
};