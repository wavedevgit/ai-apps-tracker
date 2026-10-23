import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Da as n,
    Ea as r,
    Nat as i,
    Up as a,
    cot as o,
    eY as s,
    gtt as c,
    itt as l,
    jat as u,
    lY as d,
    rm as f,
    rot as p
} from "./4813494d-mdvd4786a87166cc.js";
import {
    O as m,
    Vn as h,
    s as g
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $ut as _,
    NVn as v,
    PVn as y,
    Qut as b,
    cSn as x,
    lSn as S
} from "./conversation-small-bcbq46iub1p0ca1t.js";

function C(e, t, n, i, a, o) {
    let s = (0, w.useContext)(r)?.serverSharedThreadId,
        c = _(n),
        h = (0, w.useMemo)(() => ({
            asset_pointer: c,
            content_type: l.ArbitraryAssetPointer
        }), [c]),
        g = S(),
        y = d(t),
        b = v.makeQueryOptions({
            asset: h,
            sharedThreadId: s,
            postId: g,
            gizmoId: void 0,
            conversationId: s ? void 0 : y,
            downloadIntent: o?.downloadIntent ?? !0
        }),
        x = f(),
        C = !!(e && (y || s || g) && c && b.enabled),
        D = b.queryFn;
    if (typeof D == `symbol`) throw Error(`Unexpected symbol query fn...`);
    return m({
        queryKey: b.queryKey,
        queryFn: async e => {
            try {
                let t = await D(e);
                return i?.(t.url), {
                    status: `success`,
                    download_url: t.url
                }
            } catch (e) {
                u.addError(e);
                let t = x(`default_download_link_error`, {
                    fileName: c
                });
                throw e instanceof p && e.code != null && (t = x(e.code)), a?.(t), e
            }
        },
        enabled: C,
        staleTime: T,
        gcTime: E,
        refetchInterval: T,
        refetchOnWindowFocus: !0
    })
}
var w, T, E, D = e((() => {
    c(), a(), b(), x(), s(), n(), i(), o(), y(), g(), w = t(h()), T = 300 * 1e3, E = 30 * 1e3
}));
export {
    C as n, D as t
};
//# sourceMappingURL=e04c699b-j1ykaemxnw8eqsrw.js.map