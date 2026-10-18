import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Jc as t,
    Kc as n,
    QL as r,
    Yc as i,
    eR as a,
    hU as o,
    pU as s,
    qc as c
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    In as l,
    N as u,
    Rn as d,
    p as f,
    s as p,
    zn as m
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Fln as h,
    Iln as g,
    Pln as _,
    zln as v
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    r as y,
    t as b
} from "./ab92372e-glzrgn0c7jblr8e0.js";

function x({
    onSuccess: e,
    showSuccessToast: r = !0
}) {
    let i = u(),
        s = a(),
        d = o(),
        p = m();
    return f({
        mutationFn: e => t.createEnvironment(e),
        onSuccess: async (t, n) => {
            t && v(i, t, {
                id: s?.id ?? ``,
                email: s?.email ?? ``,
                name: s?.name ?? ``
            }, {
                connectorId: n.githubConnectorId ?? t.github_connector_id ?? null
            }), await Promise.all([g(i), h(i, t?.id)]), r && d.success(p.formatMessage({
                id: `wham.whamMutations.environmentCreatedSuccessfully`,
                defaultMessage: `Environment created successfully`
            })), e?.(t)
        },
        onError: (e, t) => {
            let r = e instanceof n && e.type === c.GITLAB_WEBHOOK_PERMISSION_REQUIRED,
                i = r && (t.githubConnectorId == null || t.githubConnectorId === b) ? l({
                    id: `wham.whamMutations.gitlabWebhookPermissionRequired.canonical`,
                    defaultMessage: `Creating a project webhook requires Maintainer or Owner access, administrator access, or a custom role with permission to administer webhooks. Ask someone with that access to create an environment with GitLab activity enabled.`
                }) : r ? l({
                    id: `wham.whamMutations.gitlabWebhookPermissionRequired`,
                    defaultMessage: `You can still create this environment without GitLab-triggered activity. Turn off “Enable Codex activity from GitLab” and try again. Creating a project webhook requires Maintainer or Owner access, administrator access, or a custom role with permission to administer webhooks.`
                }) : e instanceof n && e.type === c.GITLAB_WEBHOOK_SIGNING_UNSUPPORTED ? S : l({
                    id: `wham.whamMutations.failedToCreateEnvironment`,
                    defaultMessage: `Failed to create environment`
                });
            d.danger(i, {
                toastId: `wham_mutations_failed_to_create_environment`
            })
        }
    })
}
var S, C = e((() => {
    r(), s(), y(), _(), i(), p(), d(), S = l({
        id: `wham.whamMutations.gitlabWebhookSigningUnsupported`,
        defaultMessage: `Signed webhooks require GitLab 19.0 or newer; on GitLab 19.0, enable the webhook_signing_token feature flag.`
    })
}));
export {
    C as n, x as r, S as t
};
//# sourceMappingURL=82d09521-e4s1atz8rfooze7z.js.map