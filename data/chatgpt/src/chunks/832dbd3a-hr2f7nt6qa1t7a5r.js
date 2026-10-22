import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as t,
    Dat as n,
    Oat as r,
    Q7 as i,
    SK as a,
    V1 as o,
    Y7 as s,
    fat as c,
    k8 as l,
    lrt as u,
    prt as d,
    q1 as f,
    srt as p,
    uat as m,
    wat as h,
    xK as g
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    H as _,
    s as v
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Twn as y,
    _Tn as b,
    vTn as x,
    wwn as S
} from "./conversation-small-i79e9c315w50am5f.js";

function C() {
    return p(T, {
        disableExposureLog: !0
    })
}

function w() {
    return p(T)
}
var T, E = e((() => {
    d(), T = `4121343460`
}));

function D() {
    if (typeof window > `u`) return !1;
    let e = new URL(n, window.location.href);
    return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
}

function O() {
    return D() && C() ? `sheep` : `legacy`
}

function k(e, t, n) {
    if (n?.throwIfAborted(), o()?.getWorkspaceId() !== t || e !== O()) throw new _({
        revert: !0
    })
}

function A(e, t, n, r) {
    return !r || t === `` || n == null || n === `` || o()?.getWorkspaceId() !== t || e !== O() ? !1 : !D() || (w() ? `sheep` : `legacy`) === e
}
async function j({
    connectorId: e,
    workspaceId: t,
    signal: r
}) {
    return await y({
        operation: `workspace_permissions`,
        transport: `sheep`,
        workspaceId: t,
        signal: r,
        request: async i => {
            k(`sheep`, t, r), M ??= new s({
                baseUrl: n.replace(/\/$/, ``),
                targetRoutesAreCanonical: !0
            });
            let a = await M.safeGet(`/v2/connectors/{connector_id}/workspace_permissions`, {
                ...i,
                authOption: h.Required,
                preserveAccountIdOnRetry: !0,
                signal: r,
                additionalHeaders: {
                    ...g(t),
                    [m]: b.ADMIN_SETTING,
                    "x-openai-use-sheep": `1`
                },
                parameters: {
                    path: {
                        connector_id: e
                    },
                    query: {
                        include_admin_only: !0,
                        include_extended_permission_fields: !0
                    }
                }
            });
            return k(`sheep`, t, r), a
        }
    })
}
var M, N, P = e((() => {
    S(), a(), v(), x(), l(), f(), r(), c(), i(), d(), E(), N = t(O, e => {
        let t = u();
        return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
    }, {
        name: `adminPluginPermissionReadTransport`
    })
}));
export {
    P as a, j as i, k as n, O as o, A as r, N as t
};
//# sourceMappingURL=832dbd3a-hr2f7nt6qa1t7a5r.js.map