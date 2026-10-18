import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Nit as t,
    Pit as n,
    l7 as r,
    o7 as i
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    JSn as a,
    YSn as o,
    cCn as s,
    lCn as c
} from "./conversation-small-fym1zmu9zimymmm1.js";
async function l(e, t, n, r) {
    let i = await d.safeGet(e, {
        parameters: {
            path: {
                job_id: t
            }
        },
        ...n == null ? {} : {
            additionalHeaders: {
                "If-None-Match": `"${n.revision}"`
            }
        },
        signal: r,
        skipJsonTransform: !0
    });
    if (i.status === 304) {
        if (n == null) throw Error(`Chart returned not modified without a cached projection`);
        return n
    }
    return await i.json()
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
        r = a(n.headers.get(`content-disposition`)) ?? `session-${t}.txt`;
    s(await n.blob(), r)
}
var d, f = e((() => {
    n(), c(), o(), r(), d = new i({
        baseUrl: t,
        targetRoutesAreCanonical: !0
    })
}));
export {
    d as i, l as n, f as r, u as t
};
//# sourceMappingURL=aa1f0185-dvqvuymp3s8ycjwc.js.map