import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $7 as t,
    A8 as n,
    Aat as r,
    Dat as i,
    SK as a,
    V1 as o,
    X7 as s,
    frt as c,
    grt as l,
    hat as u,
    j8 as d,
    jat as f,
    pat as p,
    q1 as m,
    urt as h,
    xK as g
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    H as _,
    s as v
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Gwn as y,
    LTn as b,
    RTn as x,
    Wwn as S
} from "./conversation-small-m7dgsxtvvivh3e6t.js";

function C() {
    return h(T, {
        disableExposureLog: !0
    })
}

function w() {
    return h(T)
}
var T, E = e((() => {
    l(), T = `4121343460`
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
    return await y({
        operation: `workspace_permissions`,
        transport: `sheep`,
        workspaceId: t,
        signal: n,
        request: async a => {
            k(`sheep`, t, n), M ??= new s({
                baseUrl: r.replace(/\/$/, ``),
                targetRoutesAreCanonical: !0
            });
            let o = await M.safeGet(`/v2/connectors/{connector_id}/workspace_permissions`, {
                ...a,
                authOption: i.Required,
                preserveAccountIdOnRetry: !0,
                signal: n,
                additionalHeaders: {
                    ...g(t),
                    [p]: b.ADMIN_SETTING,
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
            return k(`sheep`, t, n), o
        }
    })
}
var M, N, P = e((() => {
    S(), a(), v(), x(), n(), m(), f(), u(), t(), l(), E(), N = d(O, e => {
        let t = c();
        return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
    }, {
        name: `adminPluginPermissionReadTransport`
    })
}));
export {
    P as a, j as i, k as n, O as o, A as r, N as t
};
//# sourceMappingURL=832dbd3a-hc12khdxyuev5zkr.js.map