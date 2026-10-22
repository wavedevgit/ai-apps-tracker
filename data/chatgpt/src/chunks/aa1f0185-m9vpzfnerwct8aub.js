import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Aat as t,
    Q7 as n,
    Y7 as r,
    kat as i
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    GCn as a,
    WCn as o,
    awn as s,
    iwn as c
} from "./conversation-small-m08q51xmfe7gjq3d.js";
async function l(e, t, n, r, i) {
    let a = n == null && i != null,
        o = e === `/codex/spo/dashboard/jobs/{job_id}/chart`,
        s = await d.safeGet(e, {
            parameters: {
                path: {
                    job_id: t
                },
                ...o ? {
                    query: {
                        latest_page: a
                    }
                } : {}
            },
            ...n?.complete ? {
                additionalHeaders: {
                    "If-None-Match": `"${n.revision}"`
                }
            } : {},
            signal: r,
            skipJsonTransform: !0
        });
    if (s.status === 304) {
        if (!n?.complete) throw Error(`Chart returned not modified without a cached projection`);
        return n
    }
    let c = await s.json();
    return a && !c.complete ? (r?.throwIfAborted(), i(c), l(e, t, void 0, r)) : c
}
async function u(e, t) {
    let n = await d.safeGet(`/codex/spo/dashboard/jobs/{job_id}/sessions/{session_id}/artifact`, {
            parameters: {
                path: {
                    job_id: e,
                    session_id: t
                }
            },
            skipJsonTransform: !0
        }),
        r = o(n.headers.get(`content-disposition`)) ?? `session-${t}.txt`;
    c(await n.blob(), r)
}
var d, f = e((() => {
    t(), s(), a(), n(), d = new r({
        baseUrl: i,
        targetRoutesAreCanonical: !0
    })
}));
export {
    d as i, l as n, f as r, u as t
};
//# sourceMappingURL=aa1f0185-m9vpzfnerwct8aub.js.map