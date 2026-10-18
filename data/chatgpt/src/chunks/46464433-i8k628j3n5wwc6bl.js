import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ait as t,
    B6 as n,
    Nit as r,
    Pit as i,
    QG as a,
    V6 as o,
    ZG as s,
    git as c,
    hnt as l,
    i1 as u,
    l7 as d,
    o7 as f,
    pnt as p,
    u1 as m,
    vit as h,
    ynt as g
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    H as _,
    s as v
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Gwn as y,
    QCn as b,
    Wwn as x,
    XCn as S
} from "./conversation-small-fym1zmu9zimymmm1.js";

function C() {
    return p(T, {
        disableExposureLog: !0
    })
}

function w() {
    return p(T)
}
var T, E = e((() => {
    g(), T = `369036728`
}));

function D() {
    if (typeof window > `u`) return !1;
    let e = new URL(r, window.location.href);
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
    return I ??= new f({
        baseUrl: r.replace(/\/$/, ``),
        targetRoutesAreCanonical: !0
    }), I
}

function N(e, n) {
    return {
        authOption: t.Required,
        preserveAccountIdOnRetry: !0,
        signal: n,
        additionalHeaders: {
            ...s(e),
            [c]: x.ADMIN_SETTING,
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
    S(), n(), g(), a(), y(), m(), i(), h(), d(), v(), E(), L = o(O, e => {
        let t = l();
        return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
    }, {
        name: `adminPluginConnectorReadTransport`
    })
}));
export {
    P as a, O as c, A as i, j as n, F as o, k as r, R as s, L as t
};
//# sourceMappingURL=46464433-i8k628j3n5wwc6bl.js.map