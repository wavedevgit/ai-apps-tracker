import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    a7 as n,
    git as r,
    l7 as i,
    vit as a
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as o,
    O as s,
    Vn as c,
    s as l
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    CPn as u,
    MPn as d,
    nrt as f,
    rrt as p,
    wPn as m
} from "./conversation-small-fym1zmu9zimymmm1.js";
var h, g, _, v, y, b, x, S, C = e((() => {
    l(), h = t(c()), d(), a(), i(), p(), g = o(), _ = (0, h.createContext)(null), v = (e, t, {
        enabled: n = !0,
        useGoogleOAuthBundleCopy: r = !1
    } = {}) => s({
        queryKey: m(e, t, r),
        queryFn: () => {
            if (!e) throw Error(`connectorId is required to fetch connector TOS`);
            return f(e, t, r)
        },
        staleTime: 300 * 1e3,
        placeholderData: (t, n) => n?.queryKey[1] === e ? t : void 0,
        enabled: n && !!e
    }), y = async (e, t) => await n.safeGet(`/aip/connectors/{connector_id}/siwc`, {
        parameters: {
            path: {
                connector_id: e
            }
        },
        additionalHeaders: t ? {
            [r]: t
        } : void 0
    }), b = (e, t, {
        enabled: n = !0
    } = {}) => s({
        queryKey: u(e, t),
        queryFn: () => {
            if (!e) throw Error(`connectorId is required to fetch connector SIWC status`);
            return y(e, t)
        },
        staleTime: 120 * 1e3,
        refetchOnMount: !0,
        retry: !1,
        enabled: n && !!e
    }), x = ({
        connectorId: e,
        productSku: t,
        children: n,
        enabled: r = !0,
        useGoogleOAuthBundleCopy: i = !1
    }) => {
        let a = v(e, t, {
                enabled: r,
                useGoogleOAuthBundleCopy: i
            }),
            o = (0, h.useMemo)(() => ({
                query: a
            }), [a]);
        return (0, g.jsx)(_.Provider, {
            value: o,
            children: n
        })
    }, S = () => {
        let e = (0, h.useContext)(_);
        if (!e) throw Error(`useRedirectTos must be used within a RedirectTosProvider`);
        return e.query
    }
}));
export {
    S as a, v as i, C as n, b as r, x as t
};
//# sourceMappingURL=06dfbf77-ccpm2eo5a4df2zww.js.map