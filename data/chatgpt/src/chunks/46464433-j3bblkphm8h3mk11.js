import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as t,
    Crt as n,
    I7 as r,
    Lat as i,
    N7 as a,
    Pat as o,
    Rat as s,
    SK as c,
    Sat as l,
    V1 as u,
    _rt as d,
    bat as f,
    j8 as p,
    q1 as m,
    xK as h,
    yrt as g
} from "./4813494d-mdvd4786a87166cc.js";
import {
    H as _,
    s as v
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Gwn as y,
    Kwn as b,
    RTn as x,
    zTn as S
} from "./conversation-small-bcbq46iub1p0ca1t.js";

function C() {
    return d(T, {
        disableExposureLog: !0
    })
}

function w() {
    return d(T)
}
var T, E = e((() => {
    n(), T = `369036728`
}));

function D() {
    if (typeof window > `u`) return !1;
    let e = new URL(i, window.location.href);
    return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
}

function O() {
    return D() && C() ? `sheep` : `legacy`
}

function k(e, t, n) {
    if (j(e, t, n), !(!D() || u()?.getWorkspaceId() !== t) && (w() ? `sheep` : `legacy`) !== e) throw new _({
        revert: !0
    })
}

function A(e, t) {
    return u()?.getWorkspaceId() !== t || e !== O() ? !1 : !D() || (w() ? `sheep` : `legacy`) === e
}

function j(e, t, n) {
    if (n.throwIfAborted(), e !== O() || e === `sheep` && u()?.getWorkspaceId() !== t) throw new _({
        revert: !0
    })
}

function M() {
    return I ??= new a({
        baseUrl: i.replace(/\/$/, ``),
        targetRoutesAreCanonical: !0
    }), I
}

function N(e, t) {
    return {
        authOption: o.Required,
        preserveAccountIdOnRetry: !0,
        signal: t,
        additionalHeaders: {
            ...h(e),
            [f]: x.ADMIN_SETTING,
            "x-openai-use-sheep": `1`
        }
    }
}
async function P({
    connectorId: e,
    workspaceId: t,
    includeActions: n,
    signal: r
}) {
    return await b({
        operation: `connector_detail`,
        transport: `sheep`,
        workspaceId: t,
        signal: r,
        request: async i => {
            j(`sheep`, t, r);
            let a = await M().safeGet(`/v2/connectors/{connector_id}`, {
                ...i,
                ...N(t, r),
                parameters: {
                    path: {
                        connector_id: e
                    },
                    query: {
                        include_actions: n
                    }
                }
            });
            return j(`sheep`, t, r), a
        }
    })
}
async function F({
    connectorId: e,
    workspaceId: t,
    signal: n
}) {
    return await b({
        operation: `connector_actions`,
        transport: `sheep`,
        workspaceId: t,
        signal: n,
        request: async r => {
            j(`sheep`, t, n);
            let i = await M().safeGet(`/v2/connectors/{connector_id}/actions`, {
                ...r,
                ...N(t, n),
                parameters: {
                    path: {
                        connector_id: e
                    }
                }
            });
            return j(`sheep`, t, n), i
        }
    })
}
var I, L, R = e((() => {
    y(), t(), n(), c(), S(), m(), s(), l(), r(), v(), E(), L = p(O, e => {
        let t = g();
        return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
    }, {
        name: `adminPluginConnectorReadTransport`
    })
}));
export {
    P as a, O as c, A as i, j as n, F as o, k as r, R as s, L as t
};
//# sourceMappingURL=46464433-j3bblkphm8h3mk11.js.map