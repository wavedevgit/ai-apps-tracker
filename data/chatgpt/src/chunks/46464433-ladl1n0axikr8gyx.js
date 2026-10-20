import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as t,
    Bnt as n,
    CK as r,
    F7 as i,
    Git as a,
    Hnt as o,
    I1 as s,
    Knt as c,
    M7 as l,
    Uit as u,
    f8 as d,
    oat as f,
    p8 as p,
    rat as m,
    sat as h,
    wK as g
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    H as _,
    s as v
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    dwn as y,
    iTn as b,
    lwn as x,
    rTn as S
} from "./conversation-small-l6tnsr2xfn2d55kk.js";

function C() {
    return n(T, {
        disableExposureLog: !0
    })
}

function w() {
    return n(T)
}
var T, E = e((() => {
    c(), T = `369036728`
}));

function D() {
    if (typeof window > `u`) return !1;
    let e = new URL(f, window.location.href);
    return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
}

function O() {
    return D() && C() ? `sheep` : `legacy`
}

function k(e, n, r) {
    if (j(e, n, r), !(!D() || t()?.getWorkspaceId() !== n) && (w() ? `sheep` : `legacy`) !== e) throw new _({
        revert: !0
    })
}

function A(e, n) {
    return t()?.getWorkspaceId() !== n || e !== O() ? !1 : !D() || (w() ? `sheep` : `legacy`) === e
}

function j(e, n, r) {
    if (r.throwIfAborted(), e !== O() || e === `sheep` && t()?.getWorkspaceId() !== n) throw new _({
        revert: !0
    })
}

function M() {
    return I ??= new l({
        baseUrl: f.replace(/\/$/, ``),
        targetRoutesAreCanonical: !0
    }), I
}

function N(e, t) {
    return {
        authOption: m.Required,
        preserveAccountIdOnRetry: !0,
        signal: t,
        additionalHeaders: {
            ...r(e),
            [u]: S.ADMIN_SETTING,
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
    x(), d(), c(), g(), b(), s(), h(), a(), i(), v(), E(), L = p(O, e => {
        let t = o();
        return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
    }, {
        name: `adminPluginConnectorReadTransport`
    })
}));
export {
    P as a, O as c, A as i, j as n, F as o, k as r, R as s, L as t
};
//# sourceMappingURL=46464433-ladl1n0axikr8gyx.js.map