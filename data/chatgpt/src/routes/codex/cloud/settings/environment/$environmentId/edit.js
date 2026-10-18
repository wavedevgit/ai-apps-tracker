import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $c as t,
    Jc as n,
    Kc as r,
    Xc as i,
    Yc as a,
    dz as o,
    fz as s,
    hU as c,
    nl as l,
    pU as u,
    pnt as d,
    tl as ee,
    ynt as f
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as p,
    Bn as m,
    In as h,
    N as g,
    Nn as _,
    Pt as te,
    Rn as v,
    Rt as y,
    Ut as b,
    lt as x,
    p as S,
    s as C,
    wn as w,
    zn as ne
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Fln as re,
    Pln as T,
    Rln as ie,
    oun as ae
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    c as E,
    o as D,
    r as O,
    t as k
} from "./3e72bb91-l4ijhasz7arxe6nl.js";
import {
    r as A,
    t as j
} from "./ab92372e-glzrgn0c7jblr8e0.js";
import {
    n as M,
    t as N
} from "./f507a508-dv1rfyxvpkroj0s1.js";
import {
    i as P,
    n as F,
    r as I,
    t as L
} from "./d6dc6b5e-cabcd7qi6gdh7h4a.js";
import {
    n as R,
    t as z
} from "./66a75a18-fvntj6g93ffxtpuo.js";
import {
    n as B,
    t as V
} from "./77909f2c-hzge4gwb750bns8n.js";
import {
    i as H,
    n as U,
    r as W,
    t as G
} from "./88c1aa5b-fdhmrx84634yjg4w.js";

function K() {
    let {
        environmentId: e
    } = y();
    return e ? (0, J.jsx)(q, {
        environmentId: e
    }) : (0, J.jsx)(N, {})
}

function q({
    environmentId: e
}) {
    let a = ne(),
        s = c(),
        l = te(),
        u = g(),
        {
            data: f,
            isLoading: p,
            isError: m
        } = ae(e),
        v = d(`1437685011`) && ee(f) === `gitlab`,
        y = f,
        b = e => {
            let t = e.split(`::`);
            if (t.length >= 2) {
                let [n, ...r] = t;
                return {
                    domain: n || null,
                    name: r.join(`::`) || e
                }
            }
            return {
                domain: null,
                name: e
            }
        },
        C = (y?.secrets_with_domains ?? []).filter(Y),
        w = (() => {
            if (C.length) {
                let e = {};
                for (let t of C) {
                    let n = t.redacted ?? ``;
                    e[t.name] = n
                }
                return e
            }
            if (y?.secrets) {
                let e = {};
                for (let [t, n] of Object.entries(y.secrets)) {
                    if (typeof n != `string`) continue;
                    let {
                        name: r
                    } = b(t);
                    r && (e[r] = n)
                }
                return e
            }
            return {}
        })(),
        T = C.map(e => ({
            name: e.name,
            domain: e.domain ?? null
        })),
        E = y?.secrets && !y.secrets_with_domains ? Object.keys(y.secrets).map(e => {
            let t = b(e);
            return {
                name: t.name,
                domain: t.domain
            }
        }) : [],
        O = B() ? `workspace` : `private`,
        {
            mutate: A,
            isPending: M
        } = S({
            mutationFn: t => n.updateEnvironment(e, t),
            onSuccess: async t => {
                await re(u, e), ie(u, e, t), s.success(a.formatMessage({
                    id: `wham.editEnvironment.environmentUpdatedSuccessfully`,
                    defaultMessage: `Environment updated successfully`
                })), l(`/codex/cloud/settings/environment/${e}`)
            },
            onError: t => {
                if (t instanceof r) {
                    i(t, `wham_edit_environment_${e}`, a, s, {
                        repositoryProvider: v ? `gitlab` : `github`
                    });
                    return
                }
                s.danger(h({
                    id: `wham.editEnvironment.failedToUpdateEnvironment`,
                    defaultMessage: `Failed to update environment`
                }), {
                    toastId: `wham_edit_environment_failed_to_update_environment`
                })
            }
        });

    function N(e) {
        let t = W(e.secrets, w, T),
            n = e.envVars.reduce((e, t) => (e[t.key] = t.value, e), {}),
            r = e.share_targets?.map(e => e.trim())?.filter(Boolean),
            i = e.share_settings === `private` ? [] : r?.map(e => ({
                email: e,
                permission: `editor`,
                type: `user`
            })),
            a = {
                etag: f?.etag,
                label: e.label,
                repos: [e.repositoryId],
                machine_id: e.machine,
                devcontainer: e.devcontainer ?? null,
                setup: e.setupCommands,
                maintenance_setup: e.maintenanceSetupCommands,
                workspace_dir: e.workspaceDirectory,
                agent_network_access: e.agentNetworkAccess,
                description: e.description,
                share_settings: e.share_settings,
                share_targets: i,
                ...Array.isArray(t) ? {
                    secrets_with_domains: t
                } : {
                    secrets: t
                },
                env_vars: n,
                auto_setup_settings: e.autoSetupSettings,
                cache_settings: e.cacheSettings,
                ...e.enableAuthtranslator === void 0 ? {} : {
                    enable_authtranslator: e.enableAuthtranslator
                },
                ...v && !f?.enable_gitlab_webhooks && e.enableGitLabWebhooks ? {
                    enable_gitlab_webhooks: !0
                } : {}
            };
        A(a)
    }
    return (0, J.jsx)(k, {
        flex: !0,
        hideBorder: !0,
        showSidebar: !1,
        maxWidth: `w-full`,
        connectionAlert: f != null && v ? (0, J.jsx)(z, {
            connectorId: f.github_connector_id ?? j,
            redirectAfter: `/codex/cloud/settings/environment/` + e + `/edit`
        }) : f == null ? void 0 : (0, J.jsx)(D, {}),
        children: p ? (0, J.jsx)(`div`, {
            className: `flex h-full items-center justify-center`,
            children: (0, J.jsx)(o, {})
        }) : m ? (0, J.jsx)(`div`, {
            className: `flex h-full items-center justify-center`,
            children: (0, J.jsx)(_, {
                id: `wham.editEnvironment.errorLoadingEnvironment`,
                defaultMessage: `Error loading environment`
            })
        }) : f ? f.permissions?.can_write ?? !1 ? (0, J.jsxs)(J.Fragment, {
            children: [(0, J.jsxs)(F, {
                className: `sticky top-0 px-4`,
                children: [(0, J.jsx)(L, {
                    label: a.formatMessage({
                        id: `wham.editEnvironment.environments`,
                        defaultMessage: `Environments`
                    }),
                    url: v ? `/codex/cloud/settings/environments?provider=gitlab` : `/codex/cloud/settings/environments`,
                    className: `text-token-text-tertiary`
                }), (0, J.jsx)(I, {}), (0, J.jsx)(L, {
                    label: f.label,
                    url: `/codex/cloud/settings/environment/${e}`,
                    className: `font-medium`
                }), (0, J.jsx)(I, {}), (0, J.jsx)(L, {
                    label: a.formatMessage({
                        id: `wham.editEnvironment.edit`,
                        defaultMessage: `edit`
                    }),
                    className: `text-token-text-tertiary`
                })]
            }), (0, J.jsx)(G, {
                initialEnvironmentId: e,
                existingEnvironment: f,
                initialValues: {
                    label: f?.label,
                    description: f?.description ?? ``,
                    share_settings: f?.share_settings ?? O,
                    share_targets: f?.share_targets?.map(e => e.email) ?? [],
                    machine: f?.machine_id,
                    repositoryId: f?.repos[0],
                    githubConnectorId: f?.github_connector_id,
                    enableGitLabWebhooks: f?.enable_gitlab_webhooks ?? !1,
                    workspaceDirectory: f?.workspace_dir ?? ``,
                    agentNetworkAccess: f?.agent_network_access,
                    setupCommands: f?.setup ? Array.isArray(f?.setup) ? f.setup.join(`
`) : f.setup : ``,
                    maintenanceSetupCommands: f?.maintenance_setup ? Array.isArray(f?.maintenance_setup) ? f.maintenance_setup.join(`
`) : f.maintenance_setup : ``,
                    envVars: Object.entries(f?.env_vars ?? {}).map(([e, t]) => ({
                        key: e,
                        value: t
                    })),
                    devcontainer: f?.devcontainer ?? null,
                    enableAuthtranslator: y?.enable_authtranslator ?? !1,
                    secrets: C.length ? C.map(e => ({
                        key: e.name,
                        value: t,
                        isEditing: !1,
                        domain: e.domain ?? null,
                        previousDomain: e.domain ?? null,
                        previousKey: e.name
                    })) : (E.length ? E : Object.keys(w).map(e => ({
                        name: e,
                        domain: null
                    }))).map(e => ({
                        key: e.name,
                        value: t,
                        isEditing: !1,
                        domain: e.domain ?? null,
                        previousDomain: e.domain ?? null,
                        previousKey: e.name
                    })),
                    autoSetupSettings: f?.auto_setup_settings,
                    cacheSettings: f?.cache_settings
                },
                primaryButtonText: a.formatMessage({
                    id: `wham.editEnvironment.saveEnvironment`,
                    defaultMessage: `Save environment`
                }),
                onSubmit: N,
                isPending: M
            })]
        }) : (0, J.jsx)(x, {
            to: `/codex/cloud/settings/environment/${e}`,
            replace: !0
        }) : (0, J.jsx)(`div`, {
            className: `flex h-full items-center justify-center`,
            children: (0, J.jsx)(_, {
                id: `wham.editEnvironment.environmentNotFound`,
                defaultMessage: `Environment not found`
            })
        })
    })
}
var J, Y, oe = e((() => {
        M(), s(), u(), f(), A(), O(), P(), E(), R(), U(), V(), H(), l(), T(), a(), C(), v(), p(), J = m(), Y = e => typeof e?.name == `string` && e.name.length > 0
    })),
    X, Z, Q, $, se = e((() => {
        p(), X = w(), oe(), Z = m(), Q = () => [{
            title: `Codex`
        }], $ = b(function() {
            "use forget";
            let e = (0, X.c)(1),
                t;
            return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Z.jsx)(K, {}), e[0] = t) : t = e[0], t
        })
    }));
e((() => {
    se()
}))();
export {
    $ as
    default, Q as meta
};
//# sourceMappingURL=codex.cloud.settings.environment._environmentId.edit-o2rkt8ty.js.map