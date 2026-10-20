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
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    In as l,
    N as u,
    Rn as d,
    p as f,
    s as p,
    zn as m
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Jln as h,
    Qln as g,
    Yln as _,
    qln as v
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    r as y,
    t as b
} from "./ab92372e-g9d37bir33ofc9lb.js";

function x({
    onSuccess: e,
    showSuccessToast: n = !0
}) {
    let a = u(),
        c = s(),
        d = t(),
        p = m();
    return f({
        mutationFn: e => i.createEnvironment(e),
        onSuccess: async (t, r) => {
            t && g(a, t, {
                id: c?.id ?? ``,
                email: c?.email ?? ``,
                name: c?.name ?? ``
            }, {
                connectorId: r.githubConnectorId ?? t.github_connector_id ?? null
            }), await Promise.all([_(a), h(a, t?.id)]), n && d.success(p.formatMessage({
                id: `wham.whamMutations.environmentCreatedSuccessfully`,
                defaultMessage: `Environment created successfully`
            })), e?.(t)
        },
        onError: (e, t) => {
            let n = e instanceof o && e.type === r.GITLAB_WEBHOOK_PERMISSION_REQUIRED,
                i = n && (t.githubConnectorId == null || t.githubConnectorId === b) ? l({
                    id: `wham.whamMutations.gitlabWebhookPermissionRequired.canonical`,
                    defaultMessage: `Creating a project webhook requires Maintainer or Owner access, administrator access, or a custom role with permission to administer webhooks. Ask someone with that access to create an environment with GitLab activity enabled.`
                }) : n ? l({
                    id: `wham.whamMutations.gitlabWebhookPermissionRequired`,
                    defaultMessage: `You can still create this environment without GitLab-triggered activity. Turn off “Enable Codex activity from GitLab” and try again. Creating a project webhook requires Maintainer or Owner access, administrator access, or a custom role with permission to administer webhooks.`
                }) : e instanceof o && e.type === r.GITLAB_WEBHOOK_SIGNING_UNSUPPORTED ? S : l({
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
    n(), c(), y(), v(), a(), p(), d(), S = l({
        id: `wham.whamMutations.gitlabWebhookSigningUnsupported`,
        defaultMessage: `Signed webhooks require GitLab 19.0 or newer; on GitLab 19.0, enable the webhook_signing_token feature flag.`
    })
}));
export {
    C as n, x as r, S as t
};
//# sourceMappingURL=82d09521-kzo1w974bbv3j7hg.js.map