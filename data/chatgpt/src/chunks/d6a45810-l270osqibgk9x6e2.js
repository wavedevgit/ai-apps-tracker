import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $z as t,
    Sy as n,
    dy as r,
    eB as i,
    yy as a
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    vx as o,
    yx as s
} from "./c2675c8c-fpv9s4kvd412dyap.js";
import {
    o as c,
    r as l
} from "./36c55589-l16bba5hc4cnu3fq.js";
var u, d, f, p, m, h, g, _ = e((() => {
    l(), s(), n(), i(), u = {
        USER_CANCEL: t.OAUTH_FAILED_USER_CANCEL,
        OAUTH_SCOPES_MISMATCH: t.OAUTH_FAILED_SCOPE_MISMATCH,
        SLACK_WORKSPACE_INSTALL_REQUIRED: t.OAUTH_FAILED_SLACK_WORKSPACE_REQUIRED,
        AGENT_DEPLOYMENT_SLACK_WORKSPACE_REQUIRED: t.OAUTH_FAILED_AGENT_DEPLOYMENT_SLACK_WORKSPACE_REQUIRED,
        EMAIL_DOMAIN_CLAIMED_BY_ANOTHER_WORKSPACE: t.OAUTH_FAILED_EMAIL_DOMAIN_ENFORCEMENT,
        OAUTH_DOMAIN_NOT_ALLOWED: t.OAUTH_FAILED_DOMAIN_NOT_ALLOWED,
        MICROSOFT_OAUTH_ACCOUNT_CHANGED: t.OAUTH_FAILED_MICROSOFT_ACCOUNT_CHANGED,
        MICROSOFT_OAUTH_WORK_ACCOUNT_REQUIRED: t.OAUTH_FAILED_MICROSOFT_WORK_ACCOUNT_REQUIRED,
        OAUTH_ACCOUNT_MISMATCH: t.OAUTH_FAILED_ACCOUNT_MISMATCH,
        OAUTH_ACCOUNT_ALREADY_CONNECTED: t.OAUTH_FAILED_ACCOUNT_ALREADY_CONNECTED,
        OAUTH_ACCOUNT_LIMIT_REACHED: t.OAUTH_FAILED_ACCOUNT_LIMIT_REACHED,
        OAUTH_OWNER_PROFILE_ID_MISSING: t.OAUTH_FAILED_OWNER_PROFILE_ID_MISSING,
        CUSTOM_ERROR: t.CUSTOM_ERROR
    }, d = (e, n) => e === `OAUTH_ACCOUNT_MISMATCH` && n === !0 ? t.OAUTH_FAILED_ACCOUNT_MISMATCH_MULTI_LINK : e == null ? t.OAUTH_FAILED_GENERIC : u[e] ?? t.OAUTH_FAILED_GENERIC, f = `selectedLinkId`, p = `renameAccountAfterConnect`, m = `suggestedAccountName`, h = `pending`, g = ({
        url: e,
        connectorId: t,
        linkId: n,
        suggestedAccountName: i,
        enableMultiLinks: s
    }) => {
        if (c({
                url: e,
                connectorId: t,
                linkId: n
            }), e.pathname.startsWith(`/admin/plugins/`) && e.searchParams.get(`workspace_connection`) === `pending` && e.searchParams.set(`workspace_connection`, n), a(e.hash) === r.Plugins && s === !0) {
            o({
                url: e,
                link: {
                    id: n,
                    connector_id: t
                }
            });
            let [r, a] = e.hash.split(`?`), s = new URLSearchParams(a);
            s.set(f, n), s.get(p) === h && (s.set(p, n), i ? s.set(m, i) : s.delete(m)), e.hash = `${r}?${s.toString()}`
        }
        return e
    }
}));
export {
    d as n, _ as r, g as t
};
//# sourceMappingURL=d6a45810-l270osqibgk9x6e2.js.map