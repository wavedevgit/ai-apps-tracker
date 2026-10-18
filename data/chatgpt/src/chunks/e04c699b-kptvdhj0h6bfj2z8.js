import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $it as n,
    AJ as r,
    Cp as i,
    Det as a,
    Dit as o,
    Ea as s,
    Lp as c,
    Ta as l,
    iat as u,
    kit as d,
    zJ as f,
    zet as p
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    O as m,
    Vn as h,
    s as g
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    CBn as _,
    cxn as v,
    edt as y,
    lxn as b,
    tdt as x,
    wBn as S
} from "./conversation-small-fym1zmu9zimymmm1.js";

function C(e, t, r, i, s, u) {
    let d = (0, w.useContext)(l)?.serverSharedThreadId,
        p = x(r),
        h = (0, w.useMemo)(() => ({
            asset_pointer: p,
            content_type: a.ArbitraryAssetPointer
        }), [p]),
        g = b(),
        v = f(t),
        y = _.makeQueryOptions({
            asset: h,
            sharedThreadId: d,
            postId: g,
            gizmoId: void 0,
            conversationId: d ? void 0 : v,
            downloadIntent: u?.downloadIntent ?? !0
        }),
        S = c(),
        C = !!(e && (v || d || g) && p && y.enabled),
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
                o.addError(e);
                let t = S(`default_download_link_error`, {
                    fileName: p
                });
                throw e instanceof n && e.code != null && (t = S(e.code)), s?.(t), e
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
    p(), i(), y(), v(), r(), s(), d(), u(), S(), g(), w = t(h()), T = 300 * 1e3, E = 30 * 1e3
}));
export {
    C as n, D as t
};
//# sourceMappingURL=e04c699b-kptvdhj0h6bfj2z8.js.map