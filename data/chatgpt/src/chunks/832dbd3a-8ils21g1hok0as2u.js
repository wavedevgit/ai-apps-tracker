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
    g(), T = `4121343460`
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
    if (n?.throwIfAborted(), u()?.getWorkspaceId() !== t || e !== O()) throw new _({
        revert: !0
    })
}

function A(e, t, n, r) {
    return !r || t === `` || n == null || n === `` || u()?.getWorkspaceId() !== t || e !== O() ? !1 : !D() || (w() ? `sheep` : `legacy`) === e
}
async function j({
    connectorId: e,
    workspaceId: n,
    signal: i
}) {
    return await b({
        operation: `workspace_permissions`,
        transport: `sheep`,
        workspaceId: n,
        signal: i,
        request: async a => {
            k(`sheep`, n, i), M ??= new f({
                baseUrl: r.replace(/\/$/, ``),
                targetRoutesAreCanonical: !0
            });
            let o = await M.safeGet(`/v2/connectors/{connector_id}/workspace_permissions`, {
                ...a,
                authOption: t.Required,
                preserveAccountIdOnRetry: !0,
                signal: i,
                additionalHeaders: {
                    ...s(n),
                    [c]: x.ADMIN_SETTING,
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
            return k(`sheep`, n, i), o
        }
    })
}
var M, N, P = e((() => {
    S(), a(), v(), y(), n(), m(), i(), h(), d(), g(), E(), N = o(O, e => {
        let t = l();
        return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
    }, {
        name: `adminPluginPermissionReadTransport`
    })
}));
export {
    P as a, j as i, k as n, O as o, A as r, N as t
};
//# sourceMappingURL=832dbd3a-8ils21g1hok0as2u.js.map