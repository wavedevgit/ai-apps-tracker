import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Gnt as t,
    I7 as n,
    Jit as r,
    M1 as i,
    R1 as a,
    TK as o,
    Xit as s,
    Znt as c,
    _8 as l,
    cat as u,
    dat as d,
    fat as f,
    g8 as p,
    qnt as m,
    wK as h,
    z7 as g
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    H as _,
    s as v
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    dwn as y,
    iTn as b,
    rTn as x,
    uwn as S
} from "./conversation-small-ikg0dwuw782klweb.js";

function C() {
    return t(T, {
        disableExposureLog: !0
    })
}

function w() {
    return t(T)
}
var T, E = e((() => {
    c(), T = `4121343460`
}));

function D() {
    if (typeof window > `u`) return !1;
    let e = new URL(d, window.location.href);
    return e.origin === window.location.origin && e.pathname.replace(/\/$/, ``) === `/backend-api` && e.search === `` && e.hash === ``
}

function O() {
    return D() && C() ? `sheep` : `legacy`
}

function k(e, t, n) {
    if (n?.throwIfAborted(), i()?.getWorkspaceId() !== t || e !== O()) throw new _({
        revert: !0
    })
}

function A(e, t, n, r) {
    return !r || t === `` || n == null || n === `` || i()?.getWorkspaceId() !== t || e !== O() ? !1 : !D() || (w() ? `sheep` : `legacy`) === e
}
async function j({
    connectorId: e,
    workspaceId: t,
    signal: i
}) {
    return await y({
        operation: `workspace_permissions`,
        transport: `sheep`,
        workspaceId: t,
        signal: i,
        request: async a => {
            k(`sheep`, t, i), M ??= new n({
                baseUrl: d.replace(/\/$/, ``),
                targetRoutesAreCanonical: !0
            });
            let o = await M.safeGet(`/v2/connectors/{connector_id}/workspace_permissions`, {
                ...a,
                authOption: u.Required,
                preserveAccountIdOnRetry: !0,
                signal: i,
                additionalHeaders: {
                    ...h(t),
                    [r]: x.ADMIN_SETTING,
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
            return k(`sheep`, t, i), o
        }
    })
}
var M, N, P = e((() => {
    S(), o(), v(), b(), p(), a(), f(), s(), g(), c(), E(), N = l(O, e => {
        let t = m();
        return t.on(`values_updated`, e), () => t.off(`values_updated`, e)
    }, {
        name: `adminPluginPermissionReadTransport`
    })
}));
export {
    P as a, j as i, k as n, O as o, A as r, N as t
};
//# sourceMappingURL=832dbd3a-dohn0zqex223lohz.js.map