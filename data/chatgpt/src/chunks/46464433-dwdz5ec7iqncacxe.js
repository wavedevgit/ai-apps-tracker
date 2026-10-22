import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as t,
    Aat as n,
    Eat as r,
    Q7 as i,
    SK as a,
    V1 as o,
    Y7 as s,
    drt as c,
    fat as l,
    hrt as u,
    k8 as d,
    kat as f,
    lrt as p,
    mat as m,
    q1 as h,
    xK as g
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    H as _,
    s as v
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    FTn as y,
    Hwn as b,
    PTn as x,
    Vwn as S
} from "./conversation-small-m08q51xmfe7gjq3d.js";

function C() {
    return p(T, {
        disableExposureLog: !0
    })
}

function w() {
    return p(T)
}
var T, E = e((() => {
    u(), T = `369036728`
}));

function D() {
    if (typeof window > `u`) return !1;
    let e = new URL(f, window.location.href);
    return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
}

function O() {
    return D() && C() ? `sheep` : `legacy`
}

function k(e, t, n) {
    if (j(e, t, n), !(!D() || o()?.getWorkspaceId() !== t) && (w() ? `sheep` : `legacy`) !== e) throw new _({
        revert: !0
    })
}

function A(e, t) {
    return o()?.getWorkspaceId() !== t || e !== O() ? !1 : !D() || (w() ? `sheep` : `legacy`) === e
}

function j(e, t, n) {
    if (n.throwIfAborted(), e !== O() || e === `sheep` && o()?.getWorkspaceId() !== t) throw new _({
        revert: !0
    })
}

function M() {
    return I ??= new s({
        baseUrl: f.replace(/\/$/, ``),
        targetRoutesAreCanonical: !0
    }), I
}

function N(e, t) {
    return {
        authOption: r.Required,
        preserveAccountIdOnRetry: !0,
        signal: t,
        additionalHeaders: {
            ...g(e),
            [l]: x.ADMIN_SETTING,
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
    S(), d(), u(), a(), y(), h(), n(), m(), i(), v(), E(), L = t(O, e => {
        let t = c();
        return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
    }, {
        name: `adminPluginConnectorReadTransport`
    })
}));
export {
    P as a, O as c, A as i, j as n, F as o, k as r, R as s, L as t
};
//# sourceMappingURL=46464433-dwdz5ec7iqncacxe.js.map