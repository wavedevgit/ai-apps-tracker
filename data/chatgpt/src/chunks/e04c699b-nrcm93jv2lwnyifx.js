import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Cat as n,
    Da as r,
    Ea as i,
    Tat as a,
    Up as o,
    Yat as s,
    eY as c,
    eot as l,
    jtt as u,
    lY as d,
    rm as f,
    ytt as p
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    O as m,
    Vn as h,
    s as g
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    aSn as _,
    bVn as v,
    iSn as y,
    ndt as b,
    tdt as x,
    xVn as S
} from "./conversation-small-m08q51xmfe7gjq3d.js";

function C(e, t, r, a, o, c) {
    let l = (0, w.useContext)(i)?.serverSharedThreadId,
        u = b(r),
        h = (0, w.useMemo)(() => ({
            asset_pointer: u,
            content_type: p.ArbitraryAssetPointer
        }), [u]),
        g = _(),
        y = d(t),
        x = v.makeQueryOptions({
            asset: h,
            sharedThreadId: l,
            postId: g,
            gizmoId: void 0,
            conversationId: l ? void 0 : y,
            downloadIntent: c?.downloadIntent ?? !0
        }),
        S = f(),
        C = !!(e && (y || l || g) && u && x.enabled),
        D = x.queryFn;
    if (typeof D == `symbol`) throw Error(`Unexpected symbol query fn...`);
    return m({
        queryKey: x.queryKey,
        queryFn: async e => {
            try {
                let t = await D(e);
                return a?.(t.url), {
                    status: `success`,
                    download_url: t.url
                }
            } catch (e) {
                n.addError(e);
                let t = S(`default_download_link_error`, {
                    fileName: u
                });
                throw e instanceof s && e.code != null && (t = S(e.code)), o?.(t), e
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
    u(), o(), x(), y(), c(), r(), a(), l(), S(), g(), w = t(h()), T = 300 * 1e3, E = 30 * 1e3
}));
export {
    C as n, D as t
};
//# sourceMappingURL=e04c699b-nrcm93jv2lwnyifx.js.map