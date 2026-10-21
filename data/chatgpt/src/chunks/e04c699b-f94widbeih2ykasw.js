import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bat as n,
    Ea as r,
    Fat as i,
    Hp as a,
    Ta as o,
    _tt as s,
    att as c,
    dat as l,
    fY as u,
    lat as d,
    nm as f,
    rY as p
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    O as m,
    Vn as h,
    s as g
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    BBn as _,
    Dxn as v,
    Exn as y,
    cdt as b,
    sdt as x,
    zBn as S
} from "./conversation-small-nmt18uiom3b14vca.js";

function C(e, t, n, r, a, s) {
    let l = (0, w.useContext)(o)?.serverSharedThreadId,
        p = b(n),
        h = (0, w.useMemo)(() => ({
            asset_pointer: p,
            content_type: c.ArbitraryAssetPointer
        }), [p]),
        g = v(),
        _ = u(t),
        y = S.makeQueryOptions({
            asset: h,
            sharedThreadId: l,
            postId: g,
            gizmoId: void 0,
            conversationId: l ? void 0 : _,
            downloadIntent: s?.downloadIntent ?? !0
        }),
        x = f(),
        C = !!(e && (_ || l || g) && p && y.enabled),
        D = y.queryFn;
    if (typeof D == `symbol`) throw Error(`Unexpected symbol query fn...`);
    return m({
        queryKey: y.queryKey,
        queryFn: async e => {
            try {
                let t = await D(e);
                return r?.(t.url), {
                    status: `success`,
                    download_url: t.url
                }
            } catch (e) {
                d.addError(e);
                let t = x(`default_download_link_error`, {
                    fileName: p
                });
                throw e instanceof i && e.code != null && (t = x(e.code)), a?.(t), e
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
    s(), a(), x(), y(), p(), r(), l(), n(), _(), g(), w = t(h()), T = 300 * 1e3, E = 30 * 1e3
}));
export {
    C as n, D as t
};
//# sourceMappingURL=e04c699b-f94widbeih2ykasw.js.map