import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as r,
    C1 as i,
    FD as a,
    Ib as o,
    PD as s,
    Pb as c,
    b5 as l,
    dz as u,
    fU as d,
    fz as f,
    iw as p,
    kT as m,
    mz as h,
    ow as g,
    pU as _,
    pz as ee,
    u1 as v,
    y5 as y
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as b,
    N as te,
    Nn as x,
    Rn as S,
    Vn as C,
    s as w,
    zn as T
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    A6t as E,
    Cmn as ne,
    Fst as re,
    Lst as D,
    T6t as O,
    THn as k,
    a$ as A,
    d$ as ie,
    fyt as ae,
    hmn as j,
    i$ as oe,
    iyt as M,
    j6t as N,
    m$ as se,
    myt as ce,
    oyt as P,
    p$ as le,
    syt as F,
    tyt as I,
    u$ as ue,
    wHn as L,
    xmn as de
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    $x as R,
    FS as z,
    Fv as B,
    Hv as V,
    IS as fe,
    Iv as H,
    Qx as U,
    Vv as W
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    i as G,
    r as K
} from "./daf50f1d-3jb74ywop5yrlbqs.js";
var q = t({
    ShareSkillModal: () => J
});

function pe({
    hazelnutId: e,
    subjects: t,
    setSubjects: n,
    adminMode: r = !1
}) {
    "use no forget";
    let i = te(),
        [a, o] = (0, X.useState)(!1),
        s = T(),
        c = d();
    return {
        handleAddPrincipals: async () => {
            o(!0);
            try {
                await Y({
                    hazelnutId: e,
                    subjects: t,
                    intl: s,
                    toaster: c,
                    queryClient: i,
                    adminMode: r
                }) && n([])
            } finally {
                o(!1)
            }
        },
        handleWorkspaceRoleChange: (0, X.useCallback)(async t => {
            o(!0);
            try {
                return r ? await P(e, t, i, {
                    admin: !0
                }) : await P(e, t, i), !0
            } catch {
                return c.danger(s.formatMessage({
                    id: `zGJe2u`,
                    defaultMessage: `Failed to update workspace access`
                })), !1
            } finally {
                o(!1)
            }
        }, [r, e, s, i, c]),
        handleRemovePrincipal: async t => {
            o(!0);
            try {
                r ? await M(e, {
                    principal_type: t.principal_type,
                    principal_id: t.principal_id
                }, i, {
                    admin: !0
                }) : await M(e, {
                    principal_type: t.principal_type,
                    principal_id: t.principal_id
                }, i)
            } catch {
                c.danger(s.formatMessage({
                    id: `hKBI+n`,
                    defaultMessage: `Failed to remove access`
                }))
            } finally {
                o(!1)
            }
        },
        isSubmitting: a
    }
}

function J({
    hazelnutId: e,
    creatorId: t,
    skill: n,
    adminMode: r = !1,
    isOpen: i,
    onClose: o
}) {
    "use no forget";
    let s = T(),
        l = d(),
        u = (0, X.use)(c)(),
        f = a().trim() || s.formatMessage({
            id: `8Vf8nl`,
            defaultMessage: `workspace`
        }),
        {
            canShare: h,
            canShareWorkspace: g,
            canEnableShare: _,
            isLoading: ee
        } = ne(),
        v = de(),
        [y, b] = (0, X.useState)([]),
        {
            skillData: te,
            isLoadingSkill: S
        } = ae({
            hazelnutId: n == null ? e : ``
        }),
        C = n ?? te,
        w = C?.permissions,
        E = w?.can_share,
        re = w?.can_share_workspace,
        D = w?.can_enable_share,
        O = ee,
        k = h && (r || !!E) && (r || v),
        A = g && (r || !!re),
        j = _ && (r || !!D),
        M = k || A || j,
        {
            data: N,
            isLoading: se,
            isError: P
        } = ce({
            hazelnutId: e,
            isEnabled: i,
            admin: r
        }),
        F = !!(O || S),
        I = (0, X.useMemo)(() => {
            if (typeof window > `u`) return ``;
            let t = new URL(`/skills`, window.location.origin);
            return t.searchParams.set(`skill_id`, e), t.toString()
        }, [e]),
        L = (0, X.useCallback)(async () => {
            try {
                await navigator.clipboard.writeText(I), l.success(s.formatMessage({
                    id: `UCtYU9`,
                    defaultMessage: `Share link copied`
                }))
            } catch {
                l.danger(s.formatMessage({
                    id: `L/J4Xm`,
                    defaultMessage: `Failed to copy share link`
                }))
            }
        }, [I, l, s]),
        R = (0, X.useCallback)(e => e === `workspace` ? s.formatMessage({
            id: `WnngXG`,
            defaultMessage: `Workspace`
        }) : e === `group` ? s.formatMessage({
            id: `278ksX`,
            defaultMessage: `Group`
        }) : e === `user` ? s.formatMessage({
            id: `C7hcK3`,
            defaultMessage: `User`
        }) : e, [s]);
    (0, X.useEffect)(() => {
        !P || !i || l.danger(s.formatMessage({
            id: `6mNnYG`,
            defaultMessage: `Failed to load current shares`
        }))
    }, [s, i, P, l]);
    let {
        otherPrincipals: z,
        ownerPrincipal: B
    } = (0, X.useMemo)(() => {
        let e = (N?.principals ?? []).filter(e => [`workspace`, `user`, `group`].includes(e.principal_type)),
            n = e.find(e => e.principal_type === `user` && e.principal_id === t),
            r = e.filter(e => [`workspace`, `user`, `group`].includes(e.principal_type) && e.principal_type !== `workspace` && !(e.principal_type === `user` && e.principal_id === t));
        return {
            ownerPrincipal: n ?? null,
            otherPrincipals: r ?? []
        }
    }, [t, N?.principals]), V = r && C?.creator_active === !1 ? s.formatMessage({
        id: `shareSkillModal.owner.unassigned`,
        defaultMessage: `Unassigned`
    }) : B?.name ?? C?.creator_name ?? t, H = oe(C?.iconography), U = le(C), W = ie(C), G = N?.workspace_access_state ?? `restricted`, K = (0, X.useMemo)(() => G === `discoverable` ? `discoverable` : G === `enabled` ? `workspace_enabled` : `limited`, [G]), [q, J] = (0, X.useState)(K);
    (0, X.useEffect)(() => {
        J(K)
    }, [K]);
    let Y = q === `limited`,
        {
            handleAddPrincipals: ve,
            handleWorkspaceRoleChange: ye,
            handleRemovePrincipal: be,
            isSubmitting: Q
        } = pe({
            hazelnutId: e,
            subjects: y,
            setSubjects: b,
            adminMode: r
        }),
        xe = y.length !== 0,
        Se = y.length === 0 || !Y || Q || F || !k,
        $ = Q || F || !M;
    return i ? (0, Z.jsx)(p, {
        isOpen: !0,
        onClose: o,
        title: s.formatMessage(r ? {
            id: `shareSkillModal.adminTitle`,
            defaultMessage: `Manage skill access`,
            description: `Title for the admin modal that lets workspace admins change who can access a skill. The modal appears from the admin skills governance page. Sentence case, no placeholders.`
        } : {
            id: `shareSkillModal.title`,
            defaultMessage: `Share skill`,
            description: `Title for the modal that lets end users manage sharing settings for a skill. The modal appears when a user chooses to share a skill. Sentence case, no placeholders.`
        }),
        testId: `modal-share-skill`,
        className: `max-w-[520px]`,
        portalContainer: u,
        footerContent: xe ? (0, Z.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [(0, Z.jsx)(m, {
                type: `button`,
                color: `secondary`,
                onClick: () => b([]),
                disabled: Q,
                children: (0, Z.jsx)(x, {
                    id: `iXxXsy`,
                    defaultMessage: `Cancel`
                })
            }), (0, Z.jsx)(m, {
                type: `button`,
                color: `blue`,
                onClick: ve,
                disabled: Se,
                loading: Q,
                children: (0, Z.jsx)(x, {
                    id: `mmV0/E`,
                    defaultMessage: `Invite`
                })
            })]
        }) : r ? null : (0, Z.jsx)(`div`, {
            className: `flex items-center gap-2`,
            children: (0, Z.jsx)(m, {
                type: `button`,
                onClick: L,
                disabled: !I,
                icon: fe,
                children: (0, Z.jsx)(x, {
                    id: `ywb85D`,
                    defaultMessage: `Copy link`
                })
            })
        }),
        footerClassName: `mt-5`,
        showCloseButton: !0,
        size: `custom`,
        allowVerticalContentToOverflow: !0,
        children: (0, Z.jsxs)(`div`, {
            className: `flex flex-col gap-4`,
            children: [(0, Z.jsxs)(`div`, {
                className: `bg-token-bg-secondary/40 flex items-start gap-4 rounded-2xl px-4 py-3`,
                children: [(0, Z.jsx)(`div`, {
                    className: `flex h-[42px] w-[42px] items-center justify-center overflow-hidden rounded-full`,
                    style: U == null ? void 0 : ue(C),
                    children: U == null ? (0, Z.jsx)(H, {
                        className: `text-token-text-primary h-[42px] w-[42px]`
                    }) : (0, Z.jsx)(`img`, {
                        src: U,
                        alt: ``,
                        className: `h-full w-full object-cover`
                    })
                }), (0, Z.jsxs)(`div`, {
                    className: `flex min-w-0 flex-1 flex-col gap-1`,
                    children: [(0, Z.jsx)(`p`, {
                        className: `text-token-text-primary truncate text-sm font-normal`,
                        children: C?.name ?? e
                    }), (0, Z.jsx)(`p`, {
                        className: `text-token-text-tertiary truncate text-xs`,
                        children: (0, Z.jsx)(x, {
                            id: `EEyRI5`,
                            defaultMessage: `By: {name}`,
                            values: {
                                name: V
                            }
                        })
                    }), (0, Z.jsx)(`p`, {
                        className: `text-token-text-secondary line-clamp-2 text-sm`,
                        children: W ?? s.formatMessage({
                            id: `rckTKD`,
                            defaultMessage: `This skill doesn’t include a description.`
                        })
                    })]
                })]
            }), (0, Z.jsxs)(`div`, {
                className: `flex flex-col gap-2`,
                children: [(v || r) && (0, Z.jsx)(he, {
                    subjects: y,
                    setSubjects: b,
                    disabled: !Y || $ || !k
                }), (0, Z.jsxs)(`div`, {
                    className: `flex flex-col gap-3`,
                    children: [(0, Z.jsx)(`p`, {
                        className: `text-token-text-secondary text-sm font-medium`,
                        children: (0, Z.jsx)(x, {
                            id: `dTcssu`,
                            defaultMessage: `Who has access`
                        })
                    }), (0, Z.jsx)(me, {
                        value: q,
                        onChange: e => {
                            let t = e === `limited` ? `restricted` : e === `discoverable` ? `discoverable` : `enabled`,
                                n = () => {
                                    J(e), e !== `limited` && y.length > 0 && b([])
                                };
                            if (t === G) {
                                n();
                                return
                            }
                            ye(t).then(e => {
                                e && n()
                            })
                        },
                        disabled: $,
                        isLoading: Q,
                        disableLimited: !A && q !== `limited`,
                        disableDiscoverable: !A,
                        hideWorkspaceEnable: !j,
                        triggerId: `share-skill-access-scope`,
                        workspaceName: f
                    }), !M && !F && (0, Z.jsx)(`p`, {
                        className: `text-token-text-tertiary text-xs`,
                        children: (0, Z.jsx)(x, {
                            id: `Yqkaox`,
                            defaultMessage: `Sharing is disabled by workspace settings.`
                        })
                    })]
                })]
            }), (0, Z.jsx)(`div`, {
                className: `flex flex-col gap-3`,
                children: (0, Z.jsx)(`div`, {
                    className: `flex max-h-[240px] flex-col gap-2 overflow-y-auto`,
                    children: se ? (0, Z.jsx)(`span`, {
                        className: `text-token-text-secondary text-sm`,
                        children: (0, Z.jsx)(x, {
                            id: `2L49KZ`,
                            defaultMessage: `Loading…`
                        })
                    }) : (0, Z.jsxs)(Z.Fragment, {
                        children: [(0, Z.jsx)(ge, {
                            icon: (0, Z.jsx)(_e, {
                                label: V
                            }),
                            title: V,
                            subtitle: s.formatMessage({
                                id: `DndUOE`,
                                defaultMessage: `Owner`
                            })
                        }), v || r ? z.map(e => {
                            let t = `${e.principal_type}:${e.principal_id}`;
                            return (0, Z.jsx)(ge, {
                                icon: (0, Z.jsx)(_e, {
                                    label: e.name
                                }),
                                title: e.name,
                                subtitle: R(e.principal_type),
                                trailing: k && (0, Z.jsx)(m, {
                                    color: `secondary`,
                                    onClick: () => be(e),
                                    disabled: $ || Q,
                                    children: (0, Z.jsx)(x, {
                                        id: `/aumnh`,
                                        defaultMessage: `Remove`
                                    })
                                })
                            }, t)
                        }) : null]
                    })
                })
            })]
        })
    }) : null
}
async function Y(e) {
    "use no forget";
    let {
        hazelnutId: t,
        subjects: n,
        intl: r,
        toaster: i,
        queryClient: a,
        adminMode: o
    } = e;
    if (!t) return !1;
    try {
        let e = [];
        for (let t of n)(t.kind === `user` || t.kind === `group`) && e.push({
            principal_type: t.kind,
            principal_id: t.id
        });
        if ((o ? await F(t, e, a, {
                admin: !0
            }) : await F(t, e, a)).attempts?.some(e => !e.success)) throw Error(`Failed to share with every target`);
        return i.success(r.formatMessage({
            id: `6+kH7g`,
            defaultMessage: `Share success`
        })), !0
    } catch {
        return i.danger(r.formatMessage({
            id: `O2Fw5N`,
            defaultMessage: `Failed to share skill`
        })), !1
    }
}

function me({
    value: e,
    onChange: t,
    disabled: n,
    isLoading: r = !1,
    disableLimited: i = !1,
    disableDiscoverable: a = !1,
    hideWorkspaceEnable: o = !1,
    triggerId: s,
    workspaceName: c
}) {
    "use no forget";
    let l = T(),
        d = l.formatMessage({
            id: `fUpzop`,
            defaultMessage: `Only those invited`
        }),
        f = l.formatMessage({
            id: `LUpQ4d`,
            defaultMessage: `Anyone at {workspaceName}`
        }, {
            workspaceName: c
        }),
        p = l.formatMessage({
            id: `c6CGLs`,
            defaultMessage: `Installed for everyone at {workspaceName}`
        }, {
            workspaceName: c
        }),
        m = l.formatMessage({
            id: `chatgpt.share_skill.access_scope.dropdown.option.install_for_workspace`,
            defaultMessage: `Install for everyone at {workspaceName}`
        }, {
            workspaceName: c
        }),
        h = l.formatMessage({
            id: `V5GpwS`,
            defaultMessage: `Updating access scope`
        }),
        g = e === `limited` ? d : e === `discoverable` ? f : p,
        _ = e === `limited` ? R : e === `discoverable` ? W : B;
    return (0, Z.jsxs)(L.Root, {
        children: [(0, Z.jsxs)(L.Trigger, {
            id: s,
            color: `secondary`,
            disabled: n,
            "aria-busy": r || void 0,
            className: `radix-state-open:bg-token-interactive-bg-secondary-press text-token-text-primary hover:bg-token-interactive-bg-secondary-hover w-full min-w-0 items-center justify-between gap-2 overflow-hidden px-3 py-2 text-start whitespace-nowrap`,
            children: [(0, Z.jsxs)(`span`, {
                className: `flex min-w-0 items-center gap-2`,
                children: [(0, Z.jsx)(_, {
                    className: `icon-sm shrink-0`
                }), (0, Z.jsx)(`span`, {
                    className: `truncate`,
                    children: g
                })]
            }), r ? (0, Z.jsx)(`span`, {
                className: `flex shrink-0 items-center`,
                role: `status`,
                "aria-label": h,
                children: (0, Z.jsx)(u, {
                    className: `icon-sm shrink-0`
                })
            }) : (0, Z.jsx)(ee.ChevronDownSm, {
                className: `icon-sm shrink-0`
            })]
        }), (0, Z.jsx)(L.Portal, {
            children: (0, Z.jsx)(L.Content, {
                className: `box-border w-[var(--radix-dropdown-menu-trigger-width)] max-w-[var(--radix-dropdown-menu-trigger-width)] min-w-[var(--radix-dropdown-menu-trigger-width)]`,
                children: (0, Z.jsxs)(L.RadioGroup, {
                    value: e,
                    onValueChange: e => {
                        if (e === `limited` || e === `discoverable` || e === `workspace_enabled`) {
                            if (e === `limited` && i || e === `workspace_enabled` && o || e === `discoverable` && a) return;
                            t(e)
                        }
                    },
                    children: [(0, Z.jsx)(L.RadioItem, {
                        value: `limited`,
                        icon: R,
                        trailing: (0, Z.jsx)(L.RadioItemCheck, {}),
                        label: d,
                        disabled: i
                    }, `limited`), (0, Z.jsx)(L.RadioItem, {
                        value: `discoverable`,
                        icon: W,
                        trailing: (0, Z.jsx)(L.RadioItemCheck, {}),
                        label: f,
                        disabled: a
                    }, `discoverable`), !o && (0, Z.jsx)(L.RadioItem, {
                        value: `workspace_enabled`,
                        icon: B,
                        trailing: (0, Z.jsx)(L.RadioItemCheck, {}),
                        label: m
                    }, `workspace_enabled`)]
                })
            })
        })]
    })
}

function he({
    subjects: e,
    setSubjects: t,
    disabled: n
}) {
    "use no forget";
    let r = T(),
        [a, o] = (0, X.useState)(``),
        [s] = re(a, 150),
        c = i()?.getWorkspaceId(),
        l = N(c, 0, s, 10),
        d = E(c, s, 20, 0),
        f = d.data,
        p = a.trim() !== `` && (l.isFetching || d.isFetching),
        m = (0, X.useMemo)(() => l.data?.items?.map(e => ({
            kind: `user`,
            id: e.account_user_id,
            label: e.name ?? `Unknown User`,
            sublabel: e.email ?? ``
        })) ?? [], [l.data?.items]),
        h = (0, X.useMemo)(() => f?.items.slice(0, 10).map(e => ({
            kind: `group`,
            id: e.id,
            label: e.name,
            sublabel: r.formatMessage({
                id: `em0BXH`,
                defaultMessage: `{count, number} members`
            }, {
                count: e.num_members ?? 0
            })
        })) ?? [], [f, r]),
        g = (0, X.useMemo)(() => {
            let t = new Set(e.map(e => `${e.kind}:${e.id}`));
            return [...m, ...h].filter(e => !t.has(`${e.kind}:${e.id}`))
        }, [m, h, e]),
        _ = (0, X.useCallback)(e => {
            o(e)
        }, []);
    return (0, Z.jsx)(`div`, {
        children: (0, Z.jsx)(K, {
            value: e,
            disabled: n,
            onChange: e => t([...e]),
            onSearch: n ? () => void 0 : _,
            options: g,
            placeholder: r.formatMessage({
                id: `Ug0S3P`,
                defaultMessage: `Add people or groups`
            }),
            menuIsOpen: !n && a.trim() !== ``,
            menuPlacement: `auto`,
            isLoading: p,
            trailingComponent: p ? (0, Z.jsx)(u, {
                className: `icon-sm text-token-text-tertiary me-1`
            }) : void 0,
            classNames: {
                control: () => `h-auto! min-h-[40px]! max-h-[180px] items-start overflow-y-auto p-1! cursor-text!`,
                menu: () => `z-[80]`,
                menuList: () => `bg-token-bg-primary`
            }
        })
    })
}

function ge({
    icon: e,
    title: t,
    subtitle: n,
    hideLeading: r,
    trailing: i,
    disabled: a
}) {
    "use no forget";
    let o = !!e;
    return (0, Z.jsxs)(`div`, {
        className: `flex items-center justify-between gap-3 rounded-xl text-sm`,
        "data-disabled": a ? `true` : void 0,
        children: [!r && (0, Z.jsxs)(`div`, {
            className: y(`flex min-w-0 items-center`, o && `gap-3`),
            children: [o && (0, Z.jsx)(`div`, {
                className: `shrink-0`,
                children: e
            }), (0, Z.jsxs)(`div`, {
                className: `flex min-w-0 flex-col`,
                children: [(0, Z.jsx)(`span`, {
                    className: `truncate font-medium`,
                    children: t
                }), (0, Z.jsx)(`span`, {
                    className: `text-token-text-secondary truncate text-xs`,
                    children: n
                })]
            })]
        }), i && (0, Z.jsx)(`div`, {
            children: i
        })]
    })
}

function _e({
    label: e
}) {
    "use no forget";
    return (0, Z.jsx)(`div`, {
        className: `border-token-border-light bg-token-bg-tertiary text-token-text-secondary flex h-8 w-8 items-center justify-center rounded-full border text-xs font-semibold uppercase`,
        children: e.slice(0, 1).toUpperCase()
    })
}
var X, Z, ve = e((() => {
    s(), O(), r(), k(), V(), H(), h(), z(), U(), g(), o(), se(), A(), I(), j(), f(), v(), G(), _(), w(), l(), X = n(C()), S(), D(), Z = b()
}));
export {
    ve as n, q as r, J as t
};
//# sourceMappingURL=46158937-pbog3nne63shqdhv.js.map