import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Aat as n,
    Ea as r,
    Fat as i,
    Hp as a,
    Ta as o,
    dY as s,
    gtt as c,
    iat as l,
    itt as u,
    nY as d,
    nm as f,
    oat as p
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    O as m,
    Vn as h,
    s as g
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Cxn as _,
    FBn as v,
    IBn as y,
    adt as b,
    idt as x,
    wxn as S
} from "./conversation-small-cy5f8pl0g26s86so.js";

function C(e, t, r, i, a, c) {
    let d = (0, w.useContext)(o)?.serverSharedThreadId,
        p = b(r),
        h = (0, w.useMemo)(() => ({
            asset_pointer: p,
            content_type: u.ArbitraryAssetPointer
        }), [p]),
        g = S(),
        _ = s(t),
        y = v.makeQueryOptions({
            asset: h,
            sharedThreadId: d,
            postId: g,
            gizmoId: void 0,
            conversationId: d ? void 0 : _,
            downloadIntent: c?.downloadIntent ?? !0
        }),
        x = f(),
        C = !!(e && (_ || d || g) && p && y.enabled),
        D = y.queryFn;
    if (typeof D == `symbol`) throw Error(`Unexpected symbol query fn...`);
    return m({
        queryKey: y.queryKey,
        queryFn: async e => {
            try {
                let t = await D(e);
                return i?.(t.url), {
                    status: `success`,
                    download_url: t.url
                }
            } catch (e) {
                l.addError(e);
                let t = x(`default_download_link_error`, {
                    fileName: p
                });
                throw e instanceof n && e.code != null && (t = x(e.code)), a?.(t), e
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
    c(), a(), x(), _(), d(), r(), p(), i(), y(), g(), w = t(h()), T = 300 * 1e3, E = 30 * 1e3
}));
export {
    C as n, D as t
};
//# sourceMappingURL=e04c699b-hfh24xk2dx95ayya.js.map