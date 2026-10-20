import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $z as t,
    Cy as n,
    by as r,
    eB as i,
    fy as a
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bb as o,
    zb as s
} from "./c2675c8c-9bs3zsr3vq259es7.js";
import {
    o as c,
    r as l
} from "./36c55589-lu21lqcu8haoixhk.js";
var u, d, f, p, m, h, g, _ = e((() => {
    l(), o(), n(), i(), u = {
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
        enableMultiLinks: o
    }) => {
        if (c({
                url: e,
                connectorId: t,
                linkId: n
            }), e.pathname.startsWith(`/admin/plugins/`) && e.searchParams.get(`workspace_connection`) === `pending` && e.searchParams.set(`workspace_connection`, n), r(e.hash) === a.Plugins && o === !0) {
            s({
                url: e,
                link: {
                    id: n,
                    connector_id: t
                }
            });
            let [r, a] = e.hash.split(`?`), o = new URLSearchParams(a);
            o.set(f, n), o.get(p) === h && (o.set(p, n), i ? o.set(m, i) : o.delete(m)), e.hash = `${r}?${o.toString()}`
        }
        return e
    }
}));
export {
    d as n, _ as r, g as t
};
//# sourceMappingURL=d6a45810-v4fjigbzy7i8bukc.js.map