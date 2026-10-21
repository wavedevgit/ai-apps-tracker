import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ea as n,
    Hp as r,
    Iat as i,
    Ta as a,
    _tt as o,
    aat as s,
    att as c,
    fY as l,
    jat as u,
    nm as d,
    rY as f,
    sat as p
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    O as m,
    Vn as h,
    s as g
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Dxn as _,
    Exn as v,
    RBn as y,
    cdt as b,
    sdt as x,
    zBn as S
} from "./conversation-small-ikg0dwuw782klweb.js";

function C(e, t, n, r, i, o) {
    let f = (0, w.useContext)(a)?.serverSharedThreadId,
        p = b(n),
        h = (0, w.useMemo)(() => ({
            asset_pointer: p,
            content_type: c.ArbitraryAssetPointer
        }), [p]),
        g = _(),
        v = l(t),
        x = y.makeQueryOptions({
            asset: h,
            sharedThreadId: f,
            postId: g,
            gizmoId: void 0,
            conversationId: f ? void 0 : v,
            downloadIntent: o?.downloadIntent ?? !0
        }),
        S = d(),
        C = !!(e && (v || f || g) && p && x.enabled),
        D = x.queryFn;
    if (typeof D == `symbol`) throw Error(`Unexpected symbol query fn...`);
    return m({
        queryKey: x.queryKey,
        queryFn: async e => {
            try {
                let t = await D(e);
                return r?.(t.url), {
                    status: `success`,
                    download_url: t.url
                }
            } catch (e) {
                s.addError(e);
                let t = S(`default_download_link_error`, {
                    fileName: p
                });
                throw e instanceof u && e.code != null && (t = S(e.code)), i?.(t), e
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
    o(), r(), x(), v(), f(), n(), p(), i(), S(), g(), w = t(h()), T = 300 * 1e3, E = 30 * 1e3
}));
export {
    C as n, D as t
};
//# sourceMappingURL=e04c699b-hw2e417f7do01h4h.js.map