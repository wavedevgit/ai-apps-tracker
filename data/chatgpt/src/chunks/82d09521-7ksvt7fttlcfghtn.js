import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    VU as t,
    _R as n,
    dl as r,
    fl as i,
    pl as a,
    ul as o,
    yR as s,
    zU as c
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Bn as l,
    Ln as u,
    N as d,
    p as f,
    s as p,
    zn as m
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    $ln as h,
    Jln as g,
    Xln as _,
    Yln as v
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    r as y,
    t as b
} from "./ab92372e-dodnn2y0eo4rnnj7.js";

function x({
    onSuccess: e,
    showSuccessToast: n = !0
}) {
    let a = d(),
        c = s(),
        p = t(),
        m = l();
    return f({
        mutationFn: e => i.createEnvironment(e),
        onSuccess: async (t, r) => {
            t && h(a, t, {
                id: c?.id ?? ``,
                email: c?.email ?? ``,
                name: c?.name ?? ``
            }, {
                connectorId: r.githubConnectorId ?? t.github_connector_id ?? null
            }), await Promise.all([_(a), v(a, t?.id)]), n && p.success(m.formatMessage({
                id: `wham.whamMutations.environmentCreatedSuccessfully`,
                defaultMessage: `Environment created successfully`
            })), e?.(t)
        },
        onError: (e, t) => {
            let n = e instanceof o && e.type === r.GITLAB_WEBHOOK_PERMISSION_REQUIRED,
                i = n && (t.githubConnectorId == null || t.githubConnectorId === b) ? u({
                    id: `wham.whamMutations.gitlabWebhookPermissionRequired.canonical`,
                    defaultMessage: `Creating a project webhook requires Maintainer or Owner access, administrator access, or a custom role with permission to administer webhooks. Ask someone with that access to create an environment with GitLab activity enabled.`
                }) : n ? u({
                    id: `wham.whamMutations.gitlabWebhookPermissionRequired`,
                    defaultMessage: `You can still create this environment without GitLab-triggered activity. Turn off “Enable Codex activity from GitLab” and try again. Creating a project webhook requires Maintainer or Owner access, administrator access, or a custom role with permission to administer webhooks.`
                }) : e instanceof o && e.type === r.GITLAB_WEBHOOK_SIGNING_UNSUPPORTED ? S : u({
                    id: `wham.whamMutations.failedToCreateEnvironment`,
                    defaultMessage: `Failed to create environment`
                });
            p.danger(i, {
                toastId: `wham_mutations_failed_to_create_environment`
            })
        }
    })
}
var S, C = e((() => {
    n(), c(), y(), g(), a(), p(), m(), S = u({
        id: `wham.whamMutations.gitlabWebhookSigningUnsupported`,
        defaultMessage: `Signed webhooks require GitLab 19.0 or newer; on GitLab 19.0, enable the webhook_signing_token feature flag.`
    })
}));
export {
    C as n, x as r, S as t
};
//# sourceMappingURL=82d09521-7ksvt7fttlcfghtn.js.map