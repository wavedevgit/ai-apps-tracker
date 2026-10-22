import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    CR as t,
    LU as n,
    TR as r,
    fl as i,
    hl as a,
    ml as o,
    pl as s,
    zU as c
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    In as l,
    N as u,
    Rn as d,
    p as f,
    s as p,
    zn as m
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    gun as h,
    hun as g,
    mun as _,
    yun as v
} from "./conversation-small-fh0oqifngkf5rvl1.js";
import {
    r as y,
    t as b
} from "./ab92372e-jb2vjro7gykvju5j.js";

function x({
    onSuccess: e,
    showSuccessToast: t = !0
}) {
    let n = u(),
        a = r(),
        d = c(),
        p = m();
    return f({
        mutationFn: e => o.createEnvironment(e),
        onSuccess: async (r, i) => {
            r && v(n, r, {
                id: a?.id ?? ``,
                email: a?.email ?? ``,
                name: a?.name ?? ``
            }, {
                connectorId: i.githubConnectorId ?? r.github_connector_id ?? null
            }), await Promise.all([h(n), g(n, r?.id)]), t && d.success(p.formatMessage({
                id: `wham.whamMutations.environmentCreatedSuccessfully`,
                defaultMessage: `Environment created successfully`
            })), e?.(r)
        },
        onError: (e, t) => {
            let n = e instanceof i && e.type === s.GITLAB_WEBHOOK_PERMISSION_REQUIRED,
                r = n && (t.githubConnectorId == null || t.githubConnectorId === b) ? l({
                    id: `wham.whamMutations.gitlabWebhookPermissionRequired.canonical`,
                    defaultMessage: `Creating a project webhook requires Maintainer or Owner access, administrator access, or a custom role with permission to administer webhooks. Ask someone with that access to create an environment with GitLab activity enabled.`
                }) : n ? l({
                    id: `wham.whamMutations.gitlabWebhookPermissionRequired`,
                    defaultMessage: `You can still create this environment without GitLab-triggered activity. Turn off “Enable Codex activity from GitLab” and try again. Creating a project webhook requires Maintainer or Owner access, administrator access, or a custom role with permission to administer webhooks.`
                }) : e instanceof i && e.type === s.GITLAB_WEBHOOK_SIGNING_UNSUPPORTED ? S : l({
                    id: `wham.whamMutations.failedToCreateEnvironment`,
                    defaultMessage: `Failed to create environment`
                });
            d.danger(r, {
                toastId: `wham_mutations_failed_to_create_environment`
            })
        }
    })
}
var S, C = e((() => {
    t(), n(), y(), _(), a(), p(), d(), S = l({
        id: `wham.whamMutations.gitlabWebhookSigningUnsupported`,
        defaultMessage: `Signed webhooks require GitLab 19.0 or newer; on GitLab 19.0, enable the webhook_signing_token feature flag.`
    })
}));
export {
    C as n, x as r, S as t
};
//# sourceMappingURL=82d09521-nbjsf61jyzu0lgyk.js.map