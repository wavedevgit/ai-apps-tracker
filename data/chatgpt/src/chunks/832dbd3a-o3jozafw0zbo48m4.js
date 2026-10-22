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
    u(), T = `4121343460`
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
    signal: n
}) {
    return await b({
        operation: `workspace_permissions`,
        transport: `sheep`,
        workspaceId: t,
        signal: n,
        request: async i => {
            k(`sheep`, t, n), M ??= new s({
                baseUrl: f.replace(/\/$/, ``),
                targetRoutesAreCanonical: !0
            });
            let a = await M.safeGet(`/v2/connectors/{connector_id}/workspace_permissions`, {
                ...i,
                authOption: r.Required,
                preserveAccountIdOnRetry: !0,
                signal: n,
                additionalHeaders: {
                    ...g(t),
                    [l]: x.ADMIN_SETTING,
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
            return k(`sheep`, t, n), a
        }
    })
}
var M, N, P = e((() => {
    S(), a(), v(), y(), d(), h(), n(), m(), i(), u(), E(), N = t(O, e => {
        let t = c();
        return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
    }, {
        name: `adminPluginPermissionReadTransport`
    })
}));
export {
    P as a, j as i, k as n, O as o, A as r, N as t
};
//# sourceMappingURL=832dbd3a-o3jozafw0zbo48m4.js.map