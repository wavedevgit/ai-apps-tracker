import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as n,
    Bz as r,
    C1 as i,
    Jc as a,
    My as o,
    QL as s,
    Yc as c,
    _w as l,
    b5 as u,
    dz as d,
    eR as ee,
    fz as f,
    hU as p,
    hw as m,
    iw as h,
    jy as g,
    kT as _,
    nl as v,
    ow as y,
    pU as b,
    pnt as te,
    tl as x,
    u1 as S,
    y5 as C,
    ynt as w,
    zz as ne
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as T,
    Bn as E,
    N as D,
    Nn as O,
    Pt as k,
    Rn as A,
    Rt as j,
    Tn as re,
    Ut as ie,
    Vn as M,
    p as N,
    s as P,
    wn as F,
    zn as I
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Bln as L,
    DJ as R,
    Dun as z,
    EJ as ae,
    Eun as B,
    Iln as V,
    Pln as H,
    oun as oe
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Db as U,
    Eb as se,
    Xv as W,
    Yv as ce
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    c as le,
    o as ue,
    r as de,
    t as fe
} from "./3e72bb91-l4ijhasz7arxe6nl.js";
import {
    r as pe,
    t as me
} from "./ab92372e-glzrgn0c7jblr8e0.js";
import {
    n as he,
    t as ge
} from "./f507a508-dv1rfyxvpkroj0s1.js";
import {
    r as _e
} from "./8d846022-o5c98v3vbp34xelf.js";
import {
    i as ve,
    n as ye,
    r as be,
    t as G
} from "./d6dc6b5e-cabcd7qi6gdh7h4a.js";
import {
    n as xe,
    t as Se
} from "./66a75a18-fvntj6g93ffxtpuo.js";
import {
    n as Ce,
    t as we
} from "./77909f2c-hzge4gwb750bns8n.js";
import {
    n as Te,
    t as Ee
} from "./6eb96464-fd6h9ku78mgbefg1.js";
import {
    n as De,
    t as Oe
} from "./45054cb2-imlbea5aqf7axqeg.js";

function ke({
    environmentId: e,
    redirectAfterDelete: t = `/codex/cloud/settings/environments`,
    onClose: n
}) {
    let r = I(),
        i = p(),
        o = D(),
        s = k(),
        c = z(e => e.setEnvironmentId),
        l = z(e => e.setBranch),
        {
            mutate: u,
            isPending: d
        } = N({
            mutationFn: () => a.deleteEnvironment(e),
            onSuccess: async () => {
                L(o, e), await V(o), z.getState().environmentId === e && (c(null), l(null)), i.success(r.formatMessage({
                    id: `wham.deleteEnvironmentModal.environmentDeletedSuccessfully`,
                    defaultMessage: `Environment deleted successfully`
                })), n(), s(t)
            },
            onError: () => {
                i.danger(r.formatMessage({
                    id: `wham.deleteEnvironmentModal.failedToDeleteEnvironment`,
                    defaultMessage: `Failed to delete environment`
                }))
            }
        });
    return (0, K.jsx)(h, {
        testId: `modal-wham-delete-environment`,
        isOpen: !0,
        type: `danger`,
        title: (0, K.jsx)(O, {
            id: `wham.deleteEnvironmentModal.title`,
            defaultMessage: `Delete environment`
        }),
        onClose: n,
        primaryButton: (0, K.jsx)(m.Button, {
            title: r.formatMessage({
                id: `wham.deleteEnvironmentModal.delete`,
                defaultMessage: `Delete`
            }),
            color: `danger`,
            loading: d,
            onClick: () => {
                u()
            }
        }),
        secondaryButton: (0, K.jsx)(m.Button, {
            title: r.formatMessage({
                id: `wham.deleteEnvironmentModal.cancel`,
                defaultMessage: `Cancel`
            }),
            color: `secondary`,
            onClick: n
        }),
        children: (0, K.jsx)(`div`, {
            className: `text-sm`,
            children: (0, K.jsx)(O, {
                id: `wham.deleteEnvironmentModal.message`,
                defaultMessage: `Tasks that use it will remain, but users won’t be able to create follow-up tasks.`
            })
        })
    })
}
var K, Ae = e((() => {
    l(), y(), b(), H(), c(), B(), P(), A(), T(), K = E()
}));

function q({
    label: e,
    children: t,
    className: n
}) {
    return (0, J.jsxs)(`div`, {
        className: C(`flex flex-col gap-1`, n),
        children: [(0, J.jsx)(`dt`, {
            className: `text-token-text-primary text-sm font-medium`,
            children: e
        }), (0, J.jsx)(`dd`, {
            className: `text-token-text-primary text-sm font-normal`,
            children: t
        })]
    })
}
var J, je = e((() => {
    u(), J = E()
}));

function Me({
    environmentId: e,
    onClose: t
}) {
    let n = I(),
        r = p(),
        {
            mutate: i,
            isPending: o
        } = N({
            mutationFn: () => a.invalidateEnvironmentCache(e),
            onSuccess: () => {
                r.success(n.formatMessage({
                    id: `wham.resetCacheModal.cacheResetSuccessfully`,
                    defaultMessage: `Cache reset successfully`
                })), t()
            },
            onError: () => {
                r.danger(n.formatMessage({
                    id: `wham.resetCacheModal.failedToResetCache`,
                    defaultMessage: `Failed to reset cache`
                }))
            }
        });
    return (0, Y.jsx)(h, {
        testId: `modal-wham-delete-environment`,
        isOpen: !0,
        type: `danger`,
        title: (0, Y.jsx)(O, {
            id: `wham.resetEnvironmentCacheModal.title`,
            defaultMessage: `Reset cache`
        }),
        onClose: t,
        primaryButton: (0, Y.jsx)(m.Button, {
            title: n.formatMessage({
                id: `wham.resetEnvironmentCacheModal.delete`,
                defaultMessage: `Reset`
            }),
            color: `danger`,
            loading: o,
            onClick: () => {
                i()
            }
        }),
        secondaryButton: (0, Y.jsx)(m.Button, {
            title: n.formatMessage({
                id: `wham.resetEnvironmentCacheModal.cancel`,
                defaultMessage: `Cancel`
            }),
            color: `secondary`,
            onClick: t
        }),
        children: (0, Y.jsx)(`div`, {
            className: `text-sm`,
            children: (0, Y.jsx)(O, {
                id: `wham.resetEnvironmentCacheModal.message`,
                defaultMessage: `All currently cached containers will be invalidated. The cache will be cleared for all users.`
            })
        })
    })
}
var Y, Ne = e((() => {
    l(), y(), b(), c(), P(), A(), Y = E()
}));

function Pe() {
    "use forget";
    let e = (0, Z.c)(3),
        {
            environmentId: t
        } = j();
    if (!t) {
        let t;
        return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, $.jsx)(ge, {}), e[0] = t) : t = e[0], t
    }
    let n;
    return e[1] === t ? n = e[2] : (n = (0, $.jsx)(ze, {
        environmentId: t
    }), e[1] = t, e[2] = n), n
}

function Fe(e) {
    "use forget";
    let t = (0, Z.c)(2);
    if (e == null || e.setup == null) return !1;
    if (Array.isArray(e.setup)) {
        let n;
        return t[0] === e.setup ? n = t[1] : (n = e.setup.length > 0 && e.setup.every(Ie), t[0] = e.setup, t[1] = n), n
    } else return e.setup !== ``
}

function Ie(e) {
    return e !== ``
}

function Le(e, t, n) {
    return e ? !!((e.permissions?.can_write ?? !1) || n?.isAdminOfAccount() || n?.isOwnerOfAccount() || t?.email === e.creator.email) : !1
}

function Re(e, t, n) {
    return e ? !!((e?.permissions?.can_delete ?? !1) || n?.isAdminOfAccount() || n?.isOwnerOfAccount() || t?.email === e.creator.email) : !1
}

function X(e, t, n = !0) {
    let r = e.indexOf(`::`);
    if (r === -1) return e;
    let i = e.slice(0, r),
        a = e.slice(r + 2) || e;
    if (!i || !n) return a;
    let o = i === `*` ? t.formatMessage({
        id: `wham.environmentDetailsPage.secrets.globalDomainLabel`,
        defaultMessage: `any domain`
    }) : i;
    return t.formatMessage({
        id: `wham.environmentDetailsPage.secrets.formatted`,
        defaultMessage: `{name} ({domainLabel})`
    }, {
        name: a,
        domainLabel: o
    })
}

function ze(e) {
    "use forget";
    let t = (0, Z.c)(29),
        {
            environmentId: n
        } = e,
        r = I(),
        a = k(),
        [o, s] = (0, Q.useState)(!1),
        [c, l] = (0, Q.useState)(!1),
        u = z(We),
        {
            data: f,
            isLoading: p,
            isError: m
        } = oe(n),
        h;
    t[0] === f ? h = t[1] : (h = te(`1437685011`) && x(f) === `gitlab`, t[0] = f, t[1] = h);
    let v = h,
        y = v ? `/codex/cloud/settings/environments?provider=gitlab` : `/codex/cloud/settings/environments`,
        b = ee(),
        S = i(),
        C = f,
        w = (C?.secrets_with_domains ?? []).filter(Ue),
        T = De(),
        E;
    t[2] !== S || t[3] !== f || t[4] !== b ? (E = Le(f, b, S), t[2] = S, t[3] = f, t[4] = b, t[5] = E) : E = t[5];
    let D = E,
        A;
    t[6] !== S || t[7] !== f || t[8] !== b ? (A = Re(f, b, S), t[6] = S, t[7] = f, t[8] = b, t[9] = A) : A = t[9];
    let j = A,
        ie = Ce(),
        M = S?.name ?? r.formatMessage({
            id: `wham.environmentDetailsPage.workspace`,
            defaultMessage: `Workspace`
        }),
        N = !Fe(f) && f?.auto_setup_settings == null,
        P = f?.auto_setup_settings?.use_auto_setup ?? N,
        F = w.length ? w.map(e => X(e.domain && e.name ? `${e.domain}::${e.name}` : e.name, r, T)) : Object.keys(C?.secrets ?? {}).map(e => X(e, r, T)),
        L = fe,
        R;
    t[10] !== n || t[11] !== f || t[12] !== v ? (R = f != null && v ? (0, $.jsx)(Se, {
        connectorId: f.github_connector_id ?? me,
        redirectAfter: `/codex/cloud/settings/environment/` + n
    }) : f == null ? void 0 : (0, $.jsx)(ue, {}), t[10] = n, t[11] = f, t[12] = v, t[13] = R) : R = t[13];
    let B = p ? (0, $.jsx)(`div`, {
            className: `flex h-full items-center justify-center`,
            children: (0, $.jsx)(d, {})
        }) : m ? (0, $.jsx)(Ee, {
            title: r.formatMessage({
                id: `wham.environmentDetailsPage.errorLoadingEnvironment`,
                defaultMessage: `Error loading environment`
            }),
            description: r.formatMessage({
                id: `wham.environmentDetailsPage.errorLoadingEnvironmentDescription`,
                defaultMessage: `Error loading environment description`
            })
        }) : f ? (0, $.jsxs)($.Fragment, {
            children: [(0, $.jsx)(`div`, {
                className: `border-token-border-default flex flex-col justify-between gap-2 border-b pb-4`,
                children: (0, $.jsxs)(`div`, {
                    className: `flex flex-row items-center justify-between`,
                    children: [(0, $.jsxs)(ye, {
                        className: `text-token-text-secondary bg-transparent! font-medium`,
                        children: [(0, $.jsx)(G, {
                            label: r.formatMessage({
                                id: `wham.environmentDetailsPage.environments`,
                                defaultMessage: `Environments`
                            }),
                            url: y
                        }), (0, $.jsx)(be, {}), (0, $.jsx)(G, {
                            label: f.label,
                            url: `/codex/cloud/settings/environment/${n}`
                        })]
                    }), (0, $.jsxs)(`div`, {
                        className: `flex flex-row gap-2`,
                        children: [(0, $.jsx)(g, {
                            label: j ? void 0 : r.formatMessage({
                                id: `wham.environmentDetailsPage.deleteEnvironmentTooltip`,
                                defaultMessage: `Only the environment creator, users explicitly added as editors, or the workspace owner or workspace admin can delete an environment`
                            }),
                            children: (0, $.jsx)(_, {
                                color: `danger-outline`,
                                onClick: () => s(!0),
                                disabled: !j,
                                "aria-label": r.formatMessage({
                                    id: `wham.environmentDetailsPage.deleteEnvironmentAriaLabel`,
                                    defaultMessage: `Button to delete {environmentName}`
                                }, {
                                    environmentName: f.label
                                }),
                                children: (0, $.jsx)(O, {
                                    id: `wham.environmentDetailsPage.deleteEnvironment`,
                                    defaultMessage: `Delete`
                                })
                            })
                        }), (0, $.jsx)(g, {
                            label: D ? void 0 : r.formatMessage({
                                id: `wham.environmentDetailsPage.editEnvironmentTooltip`,
                                defaultMessage: `Only the environment creator, users explicitly added as editors, or the workspace owner or workspace admin can edit an environment`
                            }),
                            children: (0, $.jsx)(_, {
                                icon: se,
                                onClick: () => {
                                    a(`/codex/cloud/settings/environment/${n}/edit`)
                                },
                                color: `secondary`,
                                disabled: !D,
                                "aria-label": r.formatMessage({
                                    id: `wham.environmentDetailsPage.editEnvironmentAriaLabel`,
                                    defaultMessage: `Button to edit {environmentName}`
                                }, {
                                    environmentName: f.label
                                }),
                                children: (0, $.jsx)(O, {
                                    id: `wham.environmentDetailsPage.editEnvironment`,
                                    defaultMessage: `Edit`
                                })
                            })
                        }), (0, $.jsx)(_, {
                            size: `small`,
                            color: `secondary`,
                            onClick: () => {
                                u(n, x(f)), ae.recordClickEnv(), a(`/codex/cloud`)
                            },
                            "aria-label": r.formatMessage({
                                id: `wham.environmentDetailsPage.useEnvironmentAriaLabel`,
                                defaultMessage: `Button to use environment {environmentName} in a codex task`
                            }, {
                                environmentName: f.label
                            }),
                            children: (0, $.jsxs)(`div`, {
                                className: `flex items-center gap-0.5`,
                                children: [(0, $.jsx)(O, {
                                    id: `wham.turnInfoRow.useEnvironment`,
                                    defaultMessage: `Use this`
                                }), (0, $.jsx)(ce, {
                                    className: `icon-sm`
                                })]
                            })
                        })]
                    })]
                })
            }), (0, $.jsx)(`div`, {
                className: `text-token-text-primary py-8 text-xl`,
                children: f.label
            }), (0, $.jsxs)(`div`, {
                className: `grid gap-x-12 gap-y-6 md:grid-cols-2`,
                children: [(0, $.jsx)(q, {
                    label: r.formatMessage({
                        id: `wham.environmentDetailsPage.creator`,
                        defaultMessage: `Creator`
                    }),
                    children: f.creator.email
                }), (0, $.jsx)(q, {
                    label: r.formatMessage({
                        id: `wham.environmentDetailsPage.image`,
                        defaultMessage: `Image`
                    }),
                    children: f.machine.label || (0, $.jsx)(O, {
                        id: `wham.environmentDetailsPage.noImage`,
                        defaultMessage: `No image`
                    })
                }), (0, $.jsx)(q, {
                    label: r.formatMessage({
                        id: `wham.environmentDetailsPage.description`,
                        defaultMessage: `Description`
                    }),
                    children: f.description ?? (0, $.jsx)(O, {
                        id: `wham.environmentDetailsPage.noDescription`,
                        defaultMessage: `N/A`
                    })
                }), (0, $.jsx)(q, {
                    label: r.formatMessage({
                        id: `wham.environmentDetailsPage.agentNetworkAccess`,
                        defaultMessage: `Agent internet access`
                    }),
                    children: f.agent_network_access?.mode === `on` ? f.agent_network_access.preset_allowlist === `all` ? (0, $.jsx)(O, {
                        id: `wham.environmentDetailsPage.agentNetworkAccess.unrestricted`,
                        defaultMessage: `On: unrestricted`
                    }) : f.agent_network_access.preset_allowlist === `codex` ? (0, $.jsx)(O, {
                        id: `wham.environmentDetailsPage.agentNetworkAccess.codex`,
                        defaultMessage: `On: common dependencies`
                    }) : (0, $.jsx)(O, {
                        id: `wham.environmentDetailsPage.agentNetworkAccess.custom`,
                        defaultMessage: `On: custom domains`
                    }) : f.agent_network_access == null || f.agent_network_access.mode === `off` ? (0, $.jsx)(O, {
                        id: `wham.environmentDetailsPage.agentNetworkAccess.off`,
                        defaultMessage: `Off`
                    }) : null
                }), T && (0, $.jsx)(q, {
                    label: (0, $.jsxs)(`div`, {
                        className: `flex items-center gap-1`,
                        children: [(0, $.jsx)(O, {
                            id: `wham.environmentDetailsPage.enableAuthtranslator`,
                            defaultMessage: `Domain scoped secrets`
                        }), (0, $.jsx)(g, {
                            label: r.formatMessage({
                                id: `wham.environmentDetailsPage.enableAuthtranslator.tooltip`,
                                defaultMessage: `Advanced prompt-injection protection: secrets never reach the model and are only sent to their domain.`
                            }),
                            children: (0, $.jsx)(ne, {
                                className: `icon text-token-text-tertiary`
                            })
                        })]
                    }),
                    children: C?.enable_authtranslator ? (0, $.jsx)(O, {
                        id: `wham.environmentDetailsPage.enableAuthtranslator.enabled`,
                        defaultMessage: `Enabled`
                    }) : (0, $.jsx)(O, {
                        id: `wham.environmentDetailsPage.enableAuthtranslator.disabled`,
                        defaultMessage: `Disabled`
                    })
                }), (0, $.jsx)(q, {
                    label: r.formatMessage({
                        id: `wham.environmentDetailsPage.postSetupCaching`,
                        defaultMessage: `Post setup caching`
                    }),
                    children: (0, $.jsxs)(`div`, {
                        className: `flex items-center gap-2`,
                        children: [f.cache_settings?.post_setup_cache_enabled === !0 ? (0, $.jsx)(O, {
                            id: `wham.environmentDetailsPage.postSetupCaching.on`,
                            defaultMessage: `On`
                        }) : (0, $.jsx)(O, {
                            id: `wham.environmentDetailsPage.postSetupCaching.off`,
                            defaultMessage: `Off`
                        }), f.cache_settings?.post_setup_cache_enabled && (0, $.jsx)(g, {
                            label: r.formatMessage({
                                id: `wham.environmentDetailsPage.resetCacheTooltip`,
                                defaultMessage: `Invalidate any currently cached containers`
                            }),
                            children: (0, $.jsx)(_, {
                                size: `small`,
                                onClick: () => l(!0),
                                color: `secondary`,
                                "aria-label": r.formatMessage({
                                    id: `wham.environmentDetailsPage.resetCacheAriaLabel`,
                                    defaultMessage: `Button to invalidate cache for {environmentName}`
                                }, {
                                    environmentName: f.label
                                }),
                                children: (0, $.jsx)(O, {
                                    id: `wham.environmentDetailsPage.resetCache`,
                                    defaultMessage: `Reset cache`
                                })
                            })
                        })]
                    })
                }), f.cache_settings?.post_setup_cache_enabled && (0, $.jsx)(q, {
                    label: r.formatMessage({
                        id: `wham.environmentDetailsPage.maintenanceSetupScript`,
                        defaultMessage: `Maintenance setup script`
                    }),
                    children: (0, $.jsx)(`pre`, {
                        className: `mono text-xs leading-5 break-all whitespace-pre-wrap`,
                        children: (Array.isArray(f.maintenance_setup) ? f.maintenance_setup : [f.maintenance_setup]).filter(Boolean).join(`
`)
                    })
                }), (0, $.jsx)(q, {
                    label: r.formatMessage({
                        id: `wham.environmentDetailsPage.environmentVariables`,
                        defaultMessage: `Environment variables`
                    }),
                    children: (0, $.jsx)(`pre`, {
                        className: `mono text-xs leading-5 break-all whitespace-pre-wrap`,
                        children: Object.keys(f.env_vars ?? {}).filter(He).join(`
`)
                    })
                }), (0, $.jsx)(q, {
                    label: r.formatMessage({
                        id: `wham.environmentDetailsPage.secrets`,
                        defaultMessage: `Secrets`
                    }),
                    children: (0, $.jsx)(`pre`, {
                        className: `mono text-xs leading-5 break-all whitespace-pre-wrap`,
                        children: F.join(`
`)
                    })
                }), (0, $.jsx)(q, {
                    label: r.formatMessage({
                        id: `wham.environmentDetailsPage.createdAt`,
                        defaultMessage: `Created at`
                    }),
                    children: f.created_at ? (0, $.jsx)(re, {
                        value: new Date(f.created_at * 1e3),
                        year: `numeric`,
                        month: `long`,
                        day: `numeric`
                    }) : (0, $.jsx)(O, {
                        id: `wham.environmentDetailsPage.noCreationDate`,
                        defaultMessage: `No creation date`
                    })
                }), (0, $.jsx)(q, {
                    label: r.formatMessage({
                        id: `wham.environmentDetailsPage.setupScript`,
                        defaultMessage: `Setup script`
                    }),
                    children: P ? (0, $.jsx)(O, {
                        id: `wham.environmentDetailsPage.autoSetup.automatic`,
                        defaultMessage: `Automatic`
                    }) : (0, $.jsx)(`pre`, {
                        className: `mono text-xs leading-5 break-all whitespace-pre-wrap`,
                        children: (Array.isArray(f.setup) ? f.setup : [f.setup]).filter(Boolean).join(`
`)
                    })
                }), (0, $.jsx)(q, {
                    label: r.formatMessage({
                        id: `wham.environmentDetailsPage.repository`,
                        defaultMessage: `Repository`
                    }),
                    children: f.repo_map ? Object.values(f.repo_map).map(Ve) : (0, $.jsx)(O, {
                        id: `wham.environmentDetailsPage.noRepository`,
                        defaultMessage: `No repository`
                    })
                }), (0, $.jsx)(q, {
                    label: r.formatMessage({
                        id: `wham.environmentDetailsPage.numTasks`,
                        defaultMessage: `No. of tasks`
                    }),
                    children: f.task_count ?? 0
                }), ie && (0, $.jsxs)($.Fragment, {
                    children: [(0, $.jsx)(q, {
                        label: r.formatMessage({
                            id: `94ZVks`,
                            defaultMessage: `Share`
                        }),
                        children: f.share_settings === `workspace` ? r.formatMessage({
                            id: `wham.environmentDetailsPage.sharedWithWorkspace`,
                            defaultMessage: `Shared with {workspaceName}`
                        }, {
                            workspaceName: M
                        }) : r.formatMessage({
                            id: `wham.environmentDetailsPage.private`,
                            defaultMessage: `Private`
                        })
                    }), f.share_settings !== `private` && (0, $.jsx)(q, {
                        label: r.formatMessage({
                            id: `wham.environmentDetailsPage.shareTargets`,
                            defaultMessage: `Additional editors`
                        }),
                        children: f.share_targets && f.share_targets.length > 0 ? (0, $.jsx)(`div`, {
                            className: `flex flex-col gap-1`,
                            children: f.share_targets.map(Be)
                        }) : (0, $.jsx)(O, {
                            id: `wham.environmentDetailsPage.shareTargetsNone`,
                            defaultMessage: `None`
                        })
                    })]
                })]
            })]
        }) : (0, $.jsx)(`div`, {
            className: `flex h-full items-center justify-center`,
            children: (0, $.jsx)(O, {
                id: `wham.environmentDetailsPage.environmentNotFound`,
                defaultMessage: `Environment not found`
            })
        }),
        V;
    t[14] === B ? V = t[15] : (V = (0, $.jsx)(`div`, {
        className: `flex flex-col px-8 md:px-16`,
        children: B
    }), t[14] = B, t[15] = V);
    let H;
    t[16] !== n || t[17] !== y || t[18] !== o ? (H = o && (0, $.jsx)(ke, {
        environmentId: n,
        redirectAfterDelete: y,
        onClose: () => s(!1)
    }), t[16] = n, t[17] = y, t[18] = o, t[19] = H) : H = t[19];
    let U;
    t[20] !== n || t[21] !== c ? (U = c && (0, $.jsx)(Me, {
        environmentId: n,
        onClose: () => l(!1)
    }), t[20] = n, t[21] = c, t[22] = U) : U = t[22];
    let W;
    return t[23] !== L || t[24] !== H || t[25] !== U || t[26] !== R || t[27] !== V ? (W = (0, $.jsxs)(L, {
        topPadding: !0,
        showSidebar: !1,
        connectionAlert: R,
        children: [V, H, U]
    }), t[23] = L, t[24] = H, t[25] = U, t[26] = R, t[27] = V, t[28] = W) : W = t[28], W
}

function Be(e, t) {
    return (0, $.jsx)(`span`, {
        children: e.email
    }, `${e.type??`user`}-${e.email}-${t}`)
}

function Ve(e) {
    return e.repository_full_name
}

function He(e) {
    return !e.startsWith(`CODEX_ENV_`)
}

function Ue(e) {
    return !!(e?.name && e.name.length > 0)
}

function We(e) {
    return e.setEnvironmentId
}
var Z, Q, $, Ge = e((() => {
        Z = F(), n(), W(), U(), r(), o(), he(), f(), S(), s(), w(), pe(), de(), R(), ve(), le(), xe(), we(), Ae(), Te(), je(), Ne(), v(), Oe(), _e(), H(), B(), Q = t(M()), A(), T(), $ = E()
    })),
    Ke, qe, Je, Ye, Xe = e((() => {
        T(), Ke = F(), Ge(), qe = E(), Je = () => [{
            title: `Codex`
        }], Ye = ie(function() {
            "use forget";
            let e = (0, Ke.c)(1),
                t;
            return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, qe.jsx)(Pe, {}), e[0] = t) : t = e[0], t
        })
    }));
e((() => {
    Xe()
}))();
export {
    Ye as
    default, Je as meta
};
//# sourceMappingURL=codex.cloud.settings.environment._environmentId._index-ha0nfvva.js.map