import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Fz as t,
    Pz as n,
    iy as r,
    qv as i,
    ty as a
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Ax as o,
    kx as s
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    o as c,
    r as l
} from "./36c55589-elhee23yhxoai9sp.js";
var u, d, f, p, m, h, g, _ = e((() => {
    l(), o(), r(), t(), u = {
        USER_CANCEL: n.OAUTH_FAILED_USER_CANCEL,
        OAUTH_SCOPES_MISMATCH: n.OAUTH_FAILED_SCOPE_MISMATCH,
        SLACK_WORKSPACE_INSTALL_REQUIRED: n.OAUTH_FAILED_SLACK_WORKSPACE_REQUIRED,
        AGENT_DEPLOYMENT_SLACK_WORKSPACE_REQUIRED: n.OAUTH_FAILED_AGENT_DEPLOYMENT_SLACK_WORKSPACE_REQUIRED,
        EMAIL_DOMAIN_CLAIMED_BY_ANOTHER_WORKSPACE: n.OAUTH_FAILED_EMAIL_DOMAIN_ENFORCEMENT,
        OAUTH_DOMAIN_NOT_ALLOWED: n.OAUTH_FAILED_DOMAIN_NOT_ALLOWED,
        MICROSOFT_OAUTH_ACCOUNT_CHANGED: n.OAUTH_FAILED_MICROSOFT_ACCOUNT_CHANGED,
        MICROSOFT_OAUTH_WORK_ACCOUNT_REQUIRED: n.OAUTH_FAILED_MICROSOFT_WORK_ACCOUNT_REQUIRED,
        OAUTH_ACCOUNT_MISMATCH: n.OAUTH_FAILED_ACCOUNT_MISMATCH,
        OAUTH_ACCOUNT_ALREADY_CONNECTED: n.OAUTH_FAILED_ACCOUNT_ALREADY_CONNECTED,
        OAUTH_ACCOUNT_LIMIT_REACHED: n.OAUTH_FAILED_ACCOUNT_LIMIT_REACHED,
        OAUTH_OWNER_PROFILE_ID_MISSING: n.OAUTH_FAILED_OWNER_PROFILE_ID_MISSING,
        CUSTOM_ERROR: n.CUSTOM_ERROR
    }, d = (e, t) => e === `OAUTH_ACCOUNT_MISMATCH` && t === !0 ? n.OAUTH_FAILED_ACCOUNT_MISMATCH_MULTI_LINK : e == null ? n.OAUTH_FAILED_GENERIC : u[e] ?? n.OAUTH_FAILED_GENERIC, f = `selectedLinkId`, p = `renameAccountAfterConnect`, m = `suggestedAccountName`, h = `pending`, g = ({
        url: e,
        connectorId: t,
        linkId: n,
        suggestedAccountName: r,
        enableMultiLinks: o
    }) => {
        if (c({
                url: e,
                connectorId: t,
                linkId: n
            }), e.pathname.startsWith(`/admin/plugins/`) && e.searchParams.get(`workspace_connection`) === `pending` && e.searchParams.set(`workspace_connection`, n), a(e.hash) === i.Plugins && o === !0) {
            s({
                url: e,
                link: {
                    id: n,
                    connector_id: t
                }
            });
            let [i, a] = e.hash.split(`?`), o = new URLSearchParams(a);
            o.set(f, n), o.get(p) === h && (o.set(p, n), r ? o.set(m, r) : o.delete(m)), e.hash = `${i}?${o.toString()}`
        }
        return e
    }
}));
export {
    d as n, _ as r, g as t
};
//# sourceMappingURL=d6a45810-j9a4snk8fe6cmgrg.js.map