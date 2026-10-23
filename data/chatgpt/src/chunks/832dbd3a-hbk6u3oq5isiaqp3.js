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
    n(), T = `4121343460`
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
    if (n?.throwIfAborted(), u()?.getWorkspaceId() !== t || e !== O()) throw new _({
        revert: !0
    })
}

function A(e, t, n, r) {
    return !r || t === `` || n == null || n === `` || u()?.getWorkspaceId() !== t || e !== O() ? !1 : !D() || (w() ? `sheep` : `legacy`) === e
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
        request: async r => {
            k(`sheep`, t, n), M ??= new a({
                baseUrl: i.replace(/\/$/, ``),
                targetRoutesAreCanonical: !0
            });
            let s = await M.safeGet(`/v2/connectors/{connector_id}/workspace_permissions`, {
                ...r,
                authOption: o.Required,
                preserveAccountIdOnRetry: !0,
                signal: n,
                additionalHeaders: {
                    ...h(t),
                    [f]: x.ADMIN_SETTING,
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
            return k(`sheep`, t, n), s
        }
    })
}
var M, N, P = e((() => {
    y(), c(), v(), S(), t(), m(), s(), l(), r(), n(), E(), N = p(O, e => {
        let t = g();
        return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
    }, {
        name: `adminPluginPermissionReadTransport`
    })
}));
export {
    P as a, j as i, k as n, O as o, A as r, N as t
};
//# sourceMappingURL=832dbd3a-hbk6u3oq5isiaqp3.js.map