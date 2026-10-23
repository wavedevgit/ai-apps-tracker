import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    Iv as r,
    K5 as i,
    U1 as a,
    ZG as o,
    eE as s,
    eK as c,
    jv as l,
    q1 as u,
    q5 as d
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as f,
    Ln as p,
    Nn as m,
    Rn as h,
    Vn as g,
    wn as _,
    zn as v
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Hun as y,
    mun as b
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Uh as x,
    Wh as S,
    vy as C,
    yy as w
} from "./30901919-s8bko9nrkqwv6i4f.js";
import {
    Mb as ee,
    Nb as te,
    Yb as ne,
    qb as re
} from "./c2675c8c-oz03twoan08d72ud.js";
import {
    g_ as T,
    h_ as E
} from "./8b34dbc2-lmwubajnld74ksfm.js";
import {
    i as D,
    n as O,
    t as ie
} from "./5f4d7fa0-c53njl56by21uf8z.js";
import {
    n as k,
    r as A,
    t as j
} from "./8d846022-o5c98v3vbp34xelf.js";
import {
    i as M,
    o as N
} from "./9c8fc5a3-g5uvb4ae98xjm28x.js";

function P() {
    "use forget";
    let e = (0, F.c)(5),
        {
            connectorId: t,
            isLoading: n,
            error: r
        } = D(),
        i = y(t, !n),
        a = i.error ?? r,
        o = n || i.isLoading,
        s;
    return e[0] !== t || e[1] !== i || e[2] !== a || e[3] !== o ? (s = {
        connectorId: t,
        ...i,
        error: a,
        isLoading: o
    }, e[0] = t, e[1] = i, e[2] = a, e[3] = o, e[4] = s) : s = e[4], s
}
var F, I = e((() => {
    F = _(), O(), b()
}));

function L({
    appInstallationUrl: e,
    connectorId: t
}) {
    return e ?? (t === ie ? l(`installations/select_target`) : void 0)
}
var R = e((() => {
    r(), O()
}));

function z({
    className: e,
    githubInstallations: t,
    githubInstallationsLoading: n,
    selectedInstallationId: r,
    handleValueChange: i,
    githubAppInstallationUrl: a
}) {
    return (0, B.jsx)(M, {
        className: e,
        selectedInstallationId: r,
        githubInstallationsLoading: n,
        handleValueChange: i,
        githubAppInstallationUrl: a,
        children: t.length > 0 ? t.map(e => (0, B.jsx)(E.Item, {
            value: e.id.toString(),
            children: e.account_login
        }, e.id)) : (0, B.jsxs)(`div`, {
            className: `p-4 text-center`,
            children: [(0, B.jsx)(`p`, {
                className: `text-token-text-primary text-sm`,
                children: (0, B.jsx)(m, {
                    id: `wham.accountSelect.noGitHubAccounts`,
                    defaultMessage: `No GitHub accounts`
                })
            }), (0, B.jsx)(`p`, {
                className: `text-token-text-secondary text-xs`,
                children: (0, B.jsx)(m, {
                    id: `wham.accountSelect.noGitHubAccountsDescription`,
                    defaultMessage: `Codex requires a GitHub account to work`
                })
            })]
        })
    })
}
var B, V = e((() => {
    T(), I(), R(), g(), h(), N(), B = f()
}));

function H({
    className: e,
    selectedInstallationId: t,
    setSelectedInstallation: n,
    setSelectedConnectorId: r
}) {
    let {
        connectorId: i,
        data: a,
        isLoading: o
    } = P(), s = (0, U.useMemo)(() => [...a?.memberships ?? [], ...a?.other ?? []], [a]), c = a?.memberships ?? [], l = a?.other ?? [], u = L({
        appInstallationUrl: a?.app_installation_url,
        connectorId: i
    }), d = s?.find(e => e.id === t);
    (0, U.useEffect)(() => {
        r?.(i ?? null)
    }, [i, r]), (0, U.useEffect)(() => {
        o || (t && !d ? n(null) : !t && s?.length && n(s[0]))
    }, [t, d, s, o, n]);
    let f = (0, U.useCallback)(e => {
        n(s?.find(t => t.id === parseInt(e)) ?? null)
    }, [s, n]);
    return a?.likely_on_old_access_token ? (0, W.jsx)(z, {
        className: e,
        githubInstallations: s,
        githubInstallationsLoading: o,
        selectedInstallationId: t,
        handleValueChange: f,
        githubAppInstallationUrl: u
    }) : (0, W.jsx)(M, {
        className: e,
        selectedInstallationId: t,
        githubInstallationsLoading: o,
        handleValueChange: f,
        githubAppInstallationUrl: u,
        children: (0, W.jsx)(W.Fragment, {
            children: s.length > 0 ? (0, W.jsxs)(W.Fragment, {
                children: [c.length > 0 && (0, W.jsxs)(E.Group, {
                    children: [(0, W.jsx)(E.Label, {
                        className: `text-token-text-tertiary px-2!`,
                        children: (0, W.jsx)(m, {
                            id: `OMOdyv`,
                            defaultMessage: `Member`
                        })
                    }), c.map(e => (0, W.jsx)(E.Item, {
                        value: e.id.toString(),
                        children: e.account_login
                    }, `member-${e.id}`))]
                }), c.length > 0 && l.length > 0 && (0, W.jsx)(E.Separator, {
                    className: `mx-3!`
                }), l.length > 0 && (0, W.jsxs)(E.Group, {
                    children: [(0, W.jsx)(E.Label, {
                        className: `text-token-text-tertiary px-2!`,
                        children: (0, W.jsx)(m, {
                            id: `w/PT1a`,
                            defaultMessage: `Other`
                        })
                    }), l.map(e => (0, W.jsx)(E.Item, {
                        value: e.id.toString(),
                        children: e.account_login
                    }, `other-${e.id}`))]
                })]
            }) : (0, W.jsxs)(`div`, {
                className: `p-4 text-center`,
                children: [(0, W.jsx)(`p`, {
                    className: `text-token-text-primary text-sm`,
                    children: (0, W.jsx)(m, {
                        id: `wham.accountSelect.noGitHubAccounts`,
                        defaultMessage: `No GitHub accounts`
                    })
                }), (0, W.jsx)(`p`, {
                    className: `text-token-text-secondary text-xs`,
                    children: (0, W.jsx)(m, {
                        id: `wham.accountSelect.noGitHubAccountsDescription`,
                        defaultMessage: `Codex requires a GitHub account to work`
                    })
                })]
            })
        })
    })
}
var U, W, G = e((() => {
    T(), I(), V(), N(), R(), U = t(g()), h(), W = f()
}));

function K({
    className: e,
    selectedInstallationId: t,
    setSelectedInstallation: n,
    setSelectedConnectorId: r
}) {
    return (0, q.jsx)(H, {
        className: e,
        selectedInstallationId: t,
        setSelectedInstallation: n,
        setSelectedConnectorId: r
    })
}
var q, J = e((() => {
    G(), q = f()
}));

function ae() {
    let {
        data: e,
        isLoading: t
    } = c(a()?.getWorkspaceId());
    return t ? null : e != null && !e.beta_settings.codex_agent_network_access
}

function oe({
    className: e
}) {
    return (0, X.jsxs)(`div`, {
        className: i(`border-token-border-light flex flex-col items-start justify-start gap-1 self-stretch rounded-lg border bg-orange-600/10 p-3`, e),
        children: [(0, X.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [(0, X.jsx)(ee, {
                href: Q
            }), (0, X.jsx)(`div`, {
                className: `text-token-text-status-warning justify-start self-stretch text-xs leading-none font-medium`,
                children: (0, X.jsx)(m, {
                    id: `wham.createEnvironments.networkAccessAlert.title`,
                    defaultMessage: `Enabling internet access exposes your environment to security risks`
                })
            })]
        }), (0, X.jsx)(`div`, {
            className: `text-token-text-primary justify-start self-stretch text-xs`,
            children: (0, X.jsx)(m, {
                id: `wham.createEnvironments.networkAccessAlert.description`,
                defaultMessage: `These include prompt injection, exfiltration of code or secrets, inclusion of malware or vulnerabilities, or use of content with license restrictions. <docsLink>See the docs</docsLink> for an example exfiltration attack.{br}{br}To mitigate risks, only allow necessary domains and methods, and always review Codex's outputs and work log.`,
                values: {
                    br: (0, X.jsx)(`br`, {}),
                    docsLink: e => (0, X.jsx)(`a`, {
                        href: Q,
                        target: `_blank`,
                        rel: `noopener noreferrer`,
                        className: `underline`,
                        children: e
                    })
                }
            })
        })]
    })
}

function se({
    className: e
}) {
    return (0, X.jsxs)(`div`, {
        className: i(`border-token-border-light flex flex-col items-start justify-start gap-1 self-stretch rounded-lg border bg-orange-600/10 p-3`, e),
        children: [(0, X.jsx)(`div`, {
            className: `text-token-text-status-warning justify-start self-stretch text-xs leading-none font-medium`,
            children: (0, X.jsx)(m, {
                id: `wham.createEnvironments.internalNetworkAccessAlert.title`,
                defaultMessage: `[OpenAI internal] Internet access settings may not be honored`
            })
        }), (0, X.jsx)(`div`, {
            className: `text-token-text-primary justify-start self-stretch text-xs`,
            children: (0, X.jsx)(m, {
                id: `wham.createEnvironments.internalNetworkAccessAlert.description`,
                defaultMessage: `Internet access settings are currently overridden for repos owned by the openai GitHub organization. Repos not owned by openai are not affected.`
            })
        })]
    })
}

function ce({
    accessSettings: e,
    onAccessSettingsChange: t,
    disabled: n
}) {
    let r = v();
    return (0, X.jsx)(re, {
        className: i(`max-w-32`, n && `pointer-events-none opacity-50`),
        ariaLabel: r.formatMessage({
            id: `wham.networkAccessToggle.label`,
            defaultMessage: `Internet access`
        }),
        value: e?.mode ?? `off`,
        onChange: e => {
            t(e === `off` ? {
                mode: `off`
            } : {
                mode: `on`,
                preset_allowlist: j
            })
        },
        leftItem: {
            ariaLabel: r.formatMessage(Z.toggleOffAriaLabel),
            label: r.formatMessage(Z.toggleOffLabel),
            value: `off`
        },
        rightItem: {
            ariaLabel: r.formatMessage(Z.toggleOnAriaLabel),
            label: r.formatMessage(Z.toggleOnLabel),
            value: `on`
        }
    })
}

function le({
    value: e,
    onValueChange: t
}) {
    let n = v();
    return (0, X.jsxs)(E.Root, {
        value: e,
        onValueChange: e => {
            e && t(e)
        },
        children: [(0, X.jsx)(E.Trigger, {
            className: `border-token-border-default! bg-token-bg-primary! w-fit min-w-64 rounded-md! border`,
            "aria-label": n.formatMessage({
                id: `wham.presetAllowlistSelectorPopover.openPresetAllowlist`,
                defaultMessage: `Open preset allowlist menu`
            }),
            children: (0, X.jsxs)(`div`, {
                className: `flex w-full items-center justify-between`,
                children: [(0, X.jsx)(E.Value, {
                    placeholder: n.formatMessage({
                        id: `wham.presetAllowlistSelectorPopover.selectPresetAllowlist`,
                        defaultMessage: `Select preset allowlist option`
                    })
                }), (0, X.jsx)(E.Icon, {})]
            })
        }), (0, X.jsx)(E.Portal, {
            children: (0, X.jsxs)(E.Content, {
                align: `start`,
                className: `bg-token-bg-primary min-w-64`,
                children: [(0, X.jsx)(E.Item, {
                    value: k,
                    children: (0, X.jsx)(`div`, {
                        className: `flex w-full justify-start pe-2 text-start`,
                        children: (0, X.jsx)(m, {
                            id: `wham.presetAllowlistSelectorPopover.none`,
                            defaultMessage: `None`
                        })
                    })
                }), (0, X.jsx)(E.Item, {
                    value: j,
                    children: (0, X.jsx)(`div`, {
                        className: `flex w-full justify-start pe-2 text-start`,
                        children: (0, X.jsx)(m, {
                            id: `wham.presetAllowlistSelectorPopover.codex`,
                            defaultMessage: `Common dependencies`
                        })
                    })
                }), (0, X.jsx)(E.Item, {
                    value: `all`,
                    children: (0, X.jsx)(`div`, {
                        className: `flex w-full justify-start pe-2 text-start`,
                        children: (0, X.jsx)(m, {
                            id: `wham.presetAllowlistSelectorPopover.all`,
                            defaultMessage: `All (unrestricted)`
                        })
                    })
                })]
            })
        })]
    })
}

function ue({
    value: e,
    onValueChange: t
}) {
    let n = v();
    return (0, X.jsxs)(E.Root, {
        value: e ? `on` : `off`,
        onValueChange: e => t(e === `on`),
        children: [(0, X.jsx)(E.Trigger, {
            className: `border-token-border-default! bg-token-bg-primary! w-fit min-w-64 rounded-md! border`,
            "aria-label": n.formatMessage({
                id: `wham.networkAccess.safeMethodsMenu.openSafeMethodsMenu`,
                defaultMessage: `Open safe HTTP methods menu`
            }),
            children: (0, X.jsxs)(`div`, {
                className: `flex w-full items-center justify-between`,
                children: [(0, X.jsx)(E.Value, {
                    placeholder: n.formatMessage({
                        id: `wham.networkAccess.safeMethodsMenu.selectSafeMethodsOption`,
                        defaultMessage: `Select safe HTTP methods option`
                    })
                }), (0, X.jsx)(E.Icon, {})]
            })
        }), (0, X.jsx)(E.Portal, {
            children: (0, X.jsxs)(E.Content, {
                align: `start`,
                className: `bg-token-bg-primary`,
                children: [(0, X.jsx)(E.Item, {
                    value: `off`,
                    children: (0, X.jsx)(`div`, {
                        className: `flex w-full justify-start pe-2 text-start`,
                        children: (0, X.jsx)(m, {
                            id: `wham.networkAccess.safeMethodsMenu.off`,
                            defaultMessage: `All methods`
                        })
                    })
                }), (0, X.jsx)(E.Item, {
                    value: `on`,
                    children: (0, X.jsx)(`div`, {
                        className: `flex w-full justify-start pe-2 text-start`,
                        children: (0, X.jsx)(m, {
                            id: `wham.networkAccess.safeMethodsMenu.on`,
                            defaultMessage: `GET, HEAD, and OPTIONS`
                        })
                    })
                })]
            })
        })]
    })
}

function de({
    value: e,
    onChange: t,
    preset: r
}) {
    let i = v(),
        [a, o] = (0, Y.useState)(r !== `none` && e.length === 0);
    return a && r !== `none` ? (0, X.jsx)(n, {
        icon: S,
        color: `secondary`,
        size: `medium`,
        type: `button`,
        className: `ms-auto`,
        onClick: () => o(!1),
        children: (0, X.jsx)(m, {
            id: `wham.networkAccess.additionalAllowedDomainsButton`,
            defaultMessage: `Add domains`
        })
    }) : (0, X.jsxs)(X.Fragment, {
        children: [(0, X.jsx)(`textarea`, {
            name: `allowlistDomains`,
            className: `border-token-border-default focus-within:border-token-border-heavy focus-within:ring-token-text-secondary bg-token-bg-primary w-full resize-y rounded-md border px-3 py-2 font-mono text-xs shadow-none focus-within:ring-1`,
            value: e,
            rows: 3,
            onChange: e => {
                t(e.target.value)
            },
            placeholder: i.formatMessage({
                id: `wham.networkAccess.allowlistAdditionalDomainsPlaceholder`,
                defaultMessage: `domain1, domain2, domain3`
            }),
            "aria-label": i.formatMessage({
                id: `wham.networkAccess.allowlistDomains`,
                defaultMessage: `Additional allowed domains`
            })
        }), (0, X.jsx)(`p`, {
            className: `text-token-text-tertiary text-xs`,
            children: (0, X.jsx)(m, {
                id: `wham.networkAccess.allowlistDomainsDescription`,
                defaultMessage: `Enter domains, separated by commas`
            })
        })]
    })
}

function fe({
    agentNetworkAccess: e,
    onChange: t,
    disabledByWorkspaceSettings: n
}) {
    let [r, i] = (0, Y.useState)(() => ({
        [e?.preset_allowlist ?? `none`]: e?.allowlist_domains ?? ``
    }));
    return n && (e = {
        mode: `off`
    }), (0, X.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [(0, X.jsx)(`p`, {
            className: `text-token-text-primary text-sm font-medium`,
            children: (0, X.jsx)(m, {
                id: `wham.createEnvironments.internetAccessSection.label`,
                defaultMessage: `Agent internet access`
            })
        }), (0, X.jsx)(ce, {
            accessSettings: e,
            onAccessSettingsChange: t,
            disabled: n
        }), n && (0, X.jsx)(`p`, {
            className: `text-token-text-tertiary text-xs`,
            children: (0, X.jsx)(m, {
                id: `wham.createEnvironments.networkAccessSection.disabledByWorkspaceSettings`,
                defaultMessage: `Agent internet access is not permitted by your workspace settings.`
            })
        }), e == null || e.mode === `off` ? (0, X.jsx)(`p`, {
            className: `text-token-text-tertiary mb-2 text-xs`,
            children: (0, X.jsx)(m, {
                id: `wham.networkAccess.offDescription`,
                defaultMessage: `Internet access will be disabled after setup. Codex will only be able to use dependencies installed by the setup script.`
            })
        }) : (0, X.jsx)(X.Fragment, {
            children: (0, X.jsx)(`div`, {
                className: `py-2`,
                children: (0, X.jsxs)(`div`, {
                    className: `flex flex-col gap-4 border-s-3 ps-4`,
                    children: [(0, X.jsxs)(`div`, {
                        className: `space-y-2`,
                        children: [(0, X.jsx)(`p`, {
                            className: `text-token-text-primary text-sm font-medium`,
                            children: (0, X.jsx)(m, {
                                id: `wham.networkAccess.allowlist`,
                                defaultMessage: `Domain allowlist`
                            })
                        }), (0, X.jsxs)(`div`, {
                            className: `flex flex-row items-center gap-3`,
                            children: [(0, X.jsx)(le, {
                                value: e.preset_allowlist ?? `none`,
                                onValueChange: n => {
                                    let a = e.preset_allowlist ?? `none`,
                                        o = {
                                            ...r,
                                            [a]: e.allowlist_domains ?? ``
                                        };
                                    i(o), t({
                                        ...e,
                                        preset_allowlist: n,
                                        allowlist_domains: o[n] ?? ``
                                    })
                                }
                            }), (0, X.jsxs)(`a`, {
                                href: `https://platform.openai.com/docs/codex/agent-network#preset-domain-lists`,
                                target: `_blank`,
                                rel: `noopener noreferrer`,
                                className: `text-token-text-tertiary flex items-center gap-1 text-xs`,
                                children: [(0, X.jsx)(w, {
                                    className: `icon-sm`
                                }), (0, X.jsx)(m, {
                                    id: `wham.networkTab.allowlist.readList`,
                                    defaultMessage: `Domain details`
                                })]
                            })]
                        })]
                    }), e.preset_allowlist !== `all` && (0, X.jsxs)(`div`, {
                        children: [(0, X.jsx)(`p`, {
                            className: `text-token-text-primary pb-2 text-sm font-medium`,
                            children: (0, X.jsx)(m, {
                                id: `wham.networkAccess.additionalAllowedDomains`,
                                defaultMessage: `Additional allowed domains`
                            })
                        }), (0, X.jsx)(de, {
                            value: e.allowlist_domains ?? ``,
                            onChange: n => {
                                let r = e.preset_allowlist ?? `none`;
                                i(e => ({
                                    ...e,
                                    [r]: n
                                })), t({
                                    ...e,
                                    allowlist_domains: n
                                })
                            },
                            preset: e.preset_allowlist ?? `none`
                        })]
                    }), (0, X.jsxs)(`div`, {
                        className: `space-y-2`,
                        children: [(0, X.jsx)(`p`, {
                            className: `text-token-text-primary text-sm font-medium`,
                            children: (0, X.jsx)(m, {
                                id: `wham.networkAccess.allowedHttpMethods`,
                                defaultMessage: `Allowed HTTP Methods`
                            })
                        }), (0, X.jsx)(ue, {
                            value: !!e.safe_methods_only,
                            onValueChange: n => t({
                                ...e,
                                safe_methods_only: n
                            })
                        })]
                    })]
                })
            })
        })]
    })
}
var Y, X, Z, Q, $, pe = e((() => {
    s(), x(), C(), T(), te(), o(), ne(), u(), A(), d(), Y = t(g()), h(), X = f(), Z = p({
        toggleOffLabel: {
            id: `wham.networkAccessToggle.off`,
            defaultMessage: `Off`
        },
        toggleOnLabel: {
            id: `wham.networkAccessToggle.on`,
            defaultMessage: `On`
        },
        toggleOffAriaLabel: {
            id: `wham.networkAccessToggle.offAriaLabel`,
            defaultMessage: `Toggle to turn off internet access`
        },
        toggleOnAriaLabel: {
            id: `wham.networkAccessToggle.onAriaLabel`,
            defaultMessage: `Toggle to turn on internet access`
        }
    }), Q = `https://developers.openai.com/codex/cloud/internet-access#risks-of-agent-internet-access`, $ = (0, Y.memo)(fe)
}));
export {
    ae as a, L as c, P as d, pe as i, R as l, oe as n, K as o, $ as r, J as s, se as t, I as u
};
//# sourceMappingURL=bc28bb09-elieo9jmv022dxe3.js.map