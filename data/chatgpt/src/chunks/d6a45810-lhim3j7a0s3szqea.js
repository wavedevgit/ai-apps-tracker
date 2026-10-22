import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Cy as t,
    by as n,
    eB as r,
    fy as i,
    tB as a
} from "./4813494d-lxa3wniynbx9ka2a.js";
import {
    Bb as o,
    zb as s
} from "./c2675c8c-ossqum2x3eut0sh8.js";
import {
    o as c,
    r as l
} from "./36c55589-k74a5utxuxbxar7l.js";
var u, d, f, p, m, h, g, _ = e((() => {
    l(), o(), t(), a(), u = {
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
        suggestedAccountName: a,
        enableMultiLinks: o
    }) => {
        if (c({
                url: e,
                connectorId: t,
                linkId: r
            }), e.pathname.startsWith(`/admin/plugins/`) && e.searchParams.get(`workspace_connection`) === `pending` && e.searchParams.set(`workspace_connection`, r), n(e.hash) === i.Plugins && o === !0) {
            s({
                url: e,
                link: {
                    id: r,
                    connector_id: t
                }
            });
            let [n, i] = e.hash.split(`?`), o = new URLSearchParams(i);
            o.set(f, r), o.get(p) === h && (o.set(p, r), a ? o.set(m, a) : o.delete(m)), e.hash = `${n}?${o.toString()}`
        }
        return e
    }
}));
export {
    d as n, _ as r, g as t
};
//# sourceMappingURL=d6a45810-lhim3j7a0s3szqea.js.map