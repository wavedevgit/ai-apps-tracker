import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    CK as t,
    F7 as n,
    Knt as r,
    L1 as i,
    R7 as a,
    Wnt as o,
    Xnt as s,
    Yit as c,
    dat as l,
    g8 as u,
    h8 as d,
    j1 as f,
    qit as p,
    sat as m,
    uat as h,
    wK as g
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    H as _,
    s as v
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    cwn as y,
    eTn as b,
    swn as x,
    tTn as S
} from "./conversation-small-cy5f8pl0g26s86so.js";

function C() {
    return o(T, {
        disableExposureLog: !0
    })
}

function w() {
    return o(T)
}
var T, E = e((() => {
    s(), T = `369036728`
}));

function D() {
    if (typeof window > `u`) return !1;
    let e = new URL(h, window.location.href);
    return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
}

function O() {
    return D() && C() ? `sheep` : `legacy`
}

function k(e, t, n) {
    if (j(e, t, n), !(!D() || f()?.getWorkspaceId() !== t) && (w() ? `sheep` : `legacy`) !== e) throw new _({
        revert: !0
    })
}

function A(e, t) {
    return f()?.getWorkspaceId() !== t || e !== O() ? !1 : !D() || (w() ? `sheep` : `legacy`) === e
}

function j(e, t, n) {
    if (n.throwIfAborted(), e !== O() || e === `sheep` && f()?.getWorkspaceId() !== t) throw new _({
        revert: !0
    })
}

function M() {
    return I ??= new n({
        baseUrl: h.replace(/\/$/, ``),
        targetRoutesAreCanonical: !0
    }), I
}

function N(e, n) {
    return {
        authOption: m.Required,
        preserveAccountIdOnRetry: !0,
        signal: n,
        additionalHeaders: {
            ...t(e),
            [p]: b.ADMIN_SETTING,
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
    return await y({
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
    return await y({
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
    x(), d(), s(), g(), S(), i(), l(), c(), a(), v(), E(), L = u(O, e => {
        let t = r();
        return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
    }, {
        name: `adminPluginConnectorReadTransport`
    })
}));
export {
    P as a, O as c, A as i, j as n, F as o, k as r, R as s, L as t
};
//# sourceMappingURL=46464433-g946xnvlgzfys2yo.js.map