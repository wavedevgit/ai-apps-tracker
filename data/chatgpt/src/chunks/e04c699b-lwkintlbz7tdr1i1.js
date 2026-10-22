import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Da as n,
    Ea as r,
    Eat as i,
    Mtt as a,
    Up as o,
    Xat as s,
    btt as c,
    eY as l,
    lY as u,
    rm as d,
    tot as f,
    wat as p
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    O as m,
    Vn as h,
    s as g
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $ut as _,
    Qut as v,
    aSn as y,
    bVn as b,
    iSn as x,
    xVn as S
} from "./conversation-small-dwpaie1hln28efxb.js";

function C(e, t, n, i, a, o) {
    let l = (0, w.useContext)(r)?.serverSharedThreadId,
        f = _(n),
        h = (0, w.useMemo)(() => ({
            asset_pointer: f,
            content_type: c.ArbitraryAssetPointer
        }), [f]),
        g = y(),
        v = u(t),
        x = b.makeQueryOptions({
            asset: h,
            sharedThreadId: l,
            postId: g,
            gizmoId: void 0,
            conversationId: l ? void 0 : v,
            downloadIntent: o?.downloadIntent ?? !0
        }),
        S = d(),
        C = !!(e && (v || l || g) && f && x.enabled),
        D = x.queryFn;
    if (typeof D == `symbol`) throw Error(`Unexpected symbol query fn...`);
    return m({
        queryKey: x.queryKey,
        queryFn: async e => {
            try {
                let t = await D(e);
                return i?.(t.url), {
                    status: `success`,
                    download_url: t.url
                }
            } catch (e) {
                p.addError(e);
                let t = S(`default_download_link_error`, {
                    fileName: f
                });
                throw e instanceof s && e.code != null && (t = S(e.code)), a?.(t), e
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
    a(), o(), v(), x(), l(), n(), i(), f(), S(), g(), w = t(h()), T = 300 * 1e3, E = 30 * 1e3
}));
export {
    C as n, D as t
};
//# sourceMappingURL=e04c699b-lwkintlbz7tdr1i1.js.map