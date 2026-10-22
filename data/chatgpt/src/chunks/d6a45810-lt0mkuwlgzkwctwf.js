import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    cB as t,
    py as n,
    sB as r,
    wy as i,
    xy as a
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    Xb as o,
    Zb as s
} from "./c2675c8c-f8x469cgefxzeo6l.js";
import {
    o as c,
    r as l
} from "./36c55589-kl6hwvf4qnhzdy7r.js";
var u, d, f, p, m, h, g, _ = e((() => {
    l(), s(), i(), t(), u = {
        USER_CANCEL: r.OAUTH_FAILED_USER_CANCEL,
        OAUTH_SCOPES_MISMATCH: r.OAUTH_FAILED_SCOPE_MISMATCH,
        SLACK_WORKSPACE_INSTALL_REQUIRED: r.OAUTH_FAILED_SLACK_WORKSPACE_REQUIRED,
        AGENT_DEPLOYMENT_SLACK_WORKSPACE_REQUIRED: r.OAUTH_FAILED_AGENT_DEPLOYMENT_SLACK_WORKSPACE_REQUIRED,
        EMAIL_DOMAIN_CLAIMED_BY_ANOTHER_WORKSPACE: r.OAUTH_FAILED_EMAIL_DOMAIN_ENFORCEMENT,
        OAUTH_DOMAIN_NOT_ALLOWED: r.OAUTH_FAILED_DOMAIN_NOT_ALLOWED,
        MICROSOFT_OAUTH_ACCOUNT_CHANGED: r.OAUTH_FAILED_MICROSOFT_ACCOUNT_CHANGED,
        MICROSOFT_OAUTH_WORK_ACCOUNT_REQUIRED: r.OAUTH_FAILED_MICROSOFT_WORK_ACCOUNT_REQUIRED,
        OAUTH_ACCOUNT_MISMATCH: r.OAUTH_FAILED_ACCOUNT_MISMATCH,
        OAUTH_ACCOUNT_ALREADY_CONNECTED: r.OAUTH_FAILED_ACCOUNT_ALREADY_CONNECTED,
        OAUTH_ACCOUNT_LIMIT_REACHED: r.OAUTH_FAILED_ACCOUNT_LIMIT_REACHED,
        OAUTH_OWNER_PROFILE_ID_MISSING: r.OAUTH_FAILED_OWNER_PROFILE_ID_MISSING,
        CUSTOM_ERROR: r.CUSTOM_ERROR
    }, d = (e, t) => e === `OAUTH_ACCOUNT_MISMATCH` && t === !0 ? r.OAUTH_FAILED_ACCOUNT_MISMATCH_MULTI_LINK : e == null ? r.OAUTH_FAILED_GENERIC : u[e] ?? r.OAUTH_FAILED_GENERIC, f = `selectedLinkId`, p = `renameAccountAfterConnect`, m = `suggestedAccountName`, h = `pending`, g = ({
        url: e,
        connectorId: t,
        linkId: r,
        suggestedAccountName: i,
        enableMultiLinks: s
    }) => {
        if (c({
                url: e,
                connectorId: t,
                linkId: r
            }), e.pathname.startsWith(`/admin/plugins/`) && e.searchParams.get(`workspace_connection`) === `pending` && e.searchParams.set(`workspace_connection`, r), a(e.hash) === n.Plugins && s === !0) {
            o({
                url: e,
                link: {
                    id: r,
                    connector_id: t
                }
            });
            let [n, a] = e.hash.split(`?`), s = new URLSearchParams(a);
            s.set(f, r), s.get(p) === h && (s.set(p, r), i ? s.set(m, i) : s.delete(m)), e.hash = `${n}?${s.toString()}`
        }
        return e
    }
}));
export {
    d as n, _ as r, g as t
};
//# sourceMappingURL=d6a45810-lt0mkuwlgzkwctwf.js.map