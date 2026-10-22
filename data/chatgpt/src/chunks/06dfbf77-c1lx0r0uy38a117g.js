import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J7 as n,
    Q7 as r,
    fat as i,
    uat as a
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    Bn as o,
    O as s,
    Vn as c,
    s as l
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    aFn as u,
    fFn as d,
    iFn as f,
    nrt as p,
    rrt as m
} from "./conversation-small-i79e9c315w50am5f.js";
var h, g, _, v, y, b, x, S, C = e((() => {
    l(), h = t(c()), d(), i(), r(), m(), g = o(), _ = (0, h.createContext)(null), v = (e, t, {
        enabled: n = !0,
        useGoogleOAuthBundleCopy: r = !1
    } = {}) => s({
        queryKey: u(e, t, r),
        queryFn: () => {
            if (!e) throw Error(`connectorId is required to fetch connector TOS`);
            return p(e, t, r)
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
            [a]: t
        } : void 0
    }), b = (e, t, {
        enabled: n = !0
    } = {}) => s({
        queryKey: f(e, t),
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
//# sourceMappingURL=06dfbf77-c1lx0r0uy38a117g.js.map