import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $D as r,
    $b as i,
    BU as a,
    Cw as o,
    JT as s,
    Mz as c,
    Nz as l,
    Pz as u,
    R1 as d,
    Tw as f,
    X5 as p,
    Y5 as m,
    YT as h,
    Z1 as g,
    eO as ee,
    jz as _,
    tx as v,
    zU as y
} from "./4813494d-lxa3wniynbx9ka2a.js";
import {
    Bn as b,
    N as x,
    Nn as S,
    Rn as te,
    Vn as C,
    s as w,
    zn as T
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    E6t as E,
    Hst as ne,
    LHn as D,
    Nmn as re,
    RHn as O,
    Syt as ie,
    T6t as k,
    Vmn as ae,
    Wst as A,
    b6t as j,
    byt as oe,
    fyt as M,
    g$ as se,
    h$ as ce,
    hyt as N,
    l$ as le,
    lyt as P,
    myt as F,
    u$ as I,
    v$ as ue,
    y$ as L,
    zmn as de
} from "./conversation-small-kzsalymynzuddxee.js";
import {
    $x as R,
    FS as z,
    IS as fe,
    Mv as B,
    Nv as V,
    Qx as H,
    Rv as U,
    zv as pe
} from "./30901919-i8ip8r0znvgcym38.js";
import {
    i as W,
    r as G
} from "./daf50f1d-i22ikvovjzsfk2ed.js";
var K = t({
    ShareSkillModal: () => q
});

function me({
    hazelnutId: e,
    subjects: t,
    setSubjects: n,
    adminMode: r = !1
}) {
    "use no forget";
    let i = x(),
        [a, o] = (0, Y.useState)(!1),
        s = T(),
        c = y();
    return {
        handleAddPrincipals: async () => {
            o(!0);
            try {
                await J({
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
        handleWorkspaceRoleChange: (0, Y.useCallback)(async t => {
            o(!0);
            try {
                return r ? await F(e, t, i, {
                    admin: !0
                }) : await F(e, t, i), !0
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

function q({
    hazelnutId: e,
    creatorId: t,
    skill: n,
    adminMode: r = !1,
    isOpen: a,
    onClose: c
}) {
    "use no forget";
    let l = T(),
        u = y(),
        d = (0, Y.use)(i)(),
        f = ee().trim() || l.formatMessage({
            id: `8Vf8nl`,
            defaultMessage: `workspace`
        }),
        {
            canShare: p,
            canShareWorkspace: m,
            canEnableShare: h,
            isLoading: g
        } = ae(),
        _ = de(),
        [v, b] = (0, Y.useState)([]),
        {
            skillData: x,
            isLoadingSkill: te
        } = oe({
            hazelnutId: n == null ? e : ``
        }),
        C = n ?? x,
        w = C?.permissions,
        E = w?.can_share,
        ne = w?.can_share_workspace,
        D = w?.can_enable_share,
        re = g,
        O = p && (r || !!E) && (r || _),
        k = m && (r || !!ne),
        A = h && (r || !!D),
        j = O || k || A,
        {
            data: M,
            isLoading: N,
            isError: P
        } = ie({
            hazelnutId: e,
            isEnabled: a,
            admin: r
        }),
        F = !!(re || te),
        I = (0, Y.useMemo)(() => {
            if (typeof window > `u`) return ``;
            let t = new URL(`/skills`, window.location.origin);
            return t.searchParams.set(`skill_id`, e), t.toString()
        }, [e]),
        L = (0, Y.useCallback)(async () => {
            try {
                await navigator.clipboard.writeText(I), u.success(l.formatMessage({
                    id: `UCtYU9`,
                    defaultMessage: `Share link copied`
                }))
            } catch {
                u.danger(l.formatMessage({
                    id: `L/J4Xm`,
                    defaultMessage: `Failed to copy share link`
                }))
            }
        }, [I, u, l]),
        R = (0, Y.useCallback)(e => e === `workspace` ? l.formatMessage({
            id: `WnngXG`,
            defaultMessage: `Workspace`
        }) : e === `group` ? l.formatMessage({
            id: `278ksX`,
            defaultMessage: `Group`
        }) : e === `user` ? l.formatMessage({
            id: `C7hcK3`,
            defaultMessage: `User`
        }) : e, [l]);
    (0, Y.useEffect)(() => {
        !P || !a || u.danger(l.formatMessage({
            id: `6mNnYG`,
            defaultMessage: `Failed to load current shares`
        }))
    }, [l, a, P, u]);
    let {
        otherPrincipals: z,
        ownerPrincipal: B
    } = (0, Y.useMemo)(() => {
        let e = (M?.principals ?? []).filter(e => [`workspace`, `user`, `group`].includes(e.principal_type)),
            n = e.find(e => e.principal_type === `user` && e.principal_id === t),
            r = e.filter(e => [`workspace`, `user`, `group`].includes(e.principal_type) && e.principal_type !== `workspace` && !(e.principal_type === `user` && e.principal_id === t));
        return {
            ownerPrincipal: n ?? null,
            otherPrincipals: r ?? []
        }
    }, [t, M?.principals]), V = r && C?.creator_active === !1 ? l.formatMessage({
        id: `shareSkillModal.owner.unassigned`,
        defaultMessage: `Unassigned`
    }) : B?.name ?? C?.creator_name ?? t, H = le(C?.iconography), U = ue(C), pe = se(C), W = M?.workspace_access_state ?? `restricted`, G = (0, Y.useMemo)(() => W === `discoverable` ? `discoverable` : W === `enabled` ? `workspace_enabled` : `limited`, [W]), [K, q] = (0, Y.useState)(G);
    (0, Y.useEffect)(() => {
        q(G)
    }, [G]);
    let J = K === `limited`,
        {
            handleAddPrincipals: Z,
            handleWorkspaceRoleChange: ye,
            handleRemovePrincipal: be,
            isSubmitting: Q
        } = me({
            hazelnutId: e,
            subjects: v,
            setSubjects: b,
            adminMode: r
        }),
        xe = v.length !== 0,
        Se = v.length === 0 || !J || Q || F || !O,
        $ = Q || F || !j;
    return a ? (0, X.jsx)(o, {
        isOpen: !0,
        onClose: c,
        title: l.formatMessage(r ? {
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
        portalContainer: d,
        footerContent: xe ? (0, X.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [(0, X.jsx)(s, {
                type: `button`,
                color: `secondary`,
                onClick: () => b([]),
                disabled: Q,
                children: (0, X.jsx)(S, {
                    id: `iXxXsy`,
                    defaultMessage: `Cancel`
                })
            }), (0, X.jsx)(s, {
                type: `button`,
                color: `blue`,
                onClick: Z,
                disabled: Se,
                loading: Q,
                children: (0, X.jsx)(S, {
                    id: `mmV0/E`,
                    defaultMessage: `Invite`
                })
            })]
        }) : r ? null : (0, X.jsx)(`div`, {
            className: `flex items-center gap-2`,
            children: (0, X.jsx)(s, {
                type: `button`,
                onClick: L,
                disabled: !I,
                icon: fe,
                children: (0, X.jsx)(S, {
                    id: `ywb85D`,
                    defaultMessage: `Copy link`
                })
            })
        }),
        footerClassName: `mt-5`,
        showCloseButton: !0,
        size: `custom`,
        allowVerticalContentToOverflow: !0,
        children: (0, X.jsxs)(`div`, {
            className: `flex flex-col gap-4`,
            children: [(0, X.jsxs)(`div`, {
                className: `bg-token-bg-secondary/40 flex items-start gap-4 rounded-2xl px-4 py-3`,
                children: [(0, X.jsx)(`div`, {
                    className: `flex h-[42px] w-[42px] items-center justify-center overflow-hidden rounded-full`,
                    style: U == null ? void 0 : ce(C),
                    children: U == null ? (0, X.jsx)(H, {
                        className: `text-token-text-primary h-[42px] w-[42px]`
                    }) : (0, X.jsx)(`img`, {
                        src: U,
                        alt: ``,
                        className: `h-full w-full object-cover`
                    })
                }), (0, X.jsxs)(`div`, {
                    className: `flex min-w-0 flex-1 flex-col gap-1`,
                    children: [(0, X.jsx)(`p`, {
                        className: `text-token-text-primary truncate text-sm font-normal`,
                        children: C?.name ?? e
                    }), (0, X.jsx)(`p`, {
                        className: `text-token-text-tertiary truncate text-xs`,
                        children: (0, X.jsx)(S, {
                            id: `EEyRI5`,
                            defaultMessage: `By: {name}`,
                            values: {
                                name: V
                            }
                        })
                    }), (0, X.jsx)(`p`, {
                        className: `text-token-text-secondary line-clamp-2 text-sm`,
                        children: pe ?? l.formatMessage({
                            id: `rckTKD`,
                            defaultMessage: `This skill doesn’t include a description.`
                        })
                    })]
                })]
            }), (0, X.jsxs)(`div`, {
                className: `flex flex-col gap-2`,
                children: [(_ || r) && (0, X.jsx)(ge, {
                    subjects: v,
                    setSubjects: b,
                    disabled: !J || $ || !O
                }), (0, X.jsxs)(`div`, {
                    className: `flex flex-col gap-3`,
                    children: [(0, X.jsx)(`p`, {
                        className: `text-token-text-secondary text-sm font-medium`,
                        children: (0, X.jsx)(S, {
                            id: `dTcssu`,
                            defaultMessage: `Who has access`
                        })
                    }), (0, X.jsx)(he, {
                        value: K,
                        onChange: e => {
                            let t = e === `limited` ? `restricted` : e === `discoverable` ? `discoverable` : `enabled`,
                                n = () => {
                                    q(e), e !== `limited` && v.length > 0 && b([])
                                };
                            if (t === W) {
                                n();
                                return
                            }
                            ye(t).then(e => {
                                e && n()
                            })
                        },
                        disabled: $,
                        isLoading: Q,
                        disableLimited: !k && K !== `limited`,
                        disableDiscoverable: !k,
                        hideWorkspaceEnable: !A,
                        triggerId: `share-skill-access-scope`,
                        workspaceName: f
                    }), !j && !F && (0, X.jsx)(`p`, {
                        className: `text-token-text-tertiary text-xs`,
                        children: (0, X.jsx)(S, {
                            id: `Yqkaox`,
                            defaultMessage: `Sharing is disabled by workspace settings.`
                        })
                    })]
                })]
            }), (0, X.jsx)(`div`, {
                className: `flex flex-col gap-3`,
                children: (0, X.jsx)(`div`, {
                    className: `flex max-h-[240px] flex-col gap-2 overflow-y-auto`,
                    children: N ? (0, X.jsx)(`span`, {
                        className: `text-token-text-secondary text-sm`,
                        children: (0, X.jsx)(S, {
                            id: `2L49KZ`,
                            defaultMessage: `Loading…`
                        })
                    }) : (0, X.jsxs)(X.Fragment, {
                        children: [(0, X.jsx)(_e, {
                            icon: (0, X.jsx)(ve, {
                                label: V
                            }),
                            title: V,
                            subtitle: l.formatMessage({
                                id: `DndUOE`,
                                defaultMessage: `Owner`
                            })
                        }), _ || r ? z.map(e => {
                            let t = `${e.principal_type}:${e.principal_id}`;
                            return (0, X.jsx)(_e, {
                                icon: (0, X.jsx)(ve, {
                                    label: e.name
                                }),
                                title: e.name,
                                subtitle: R(e.principal_type),
                                trailing: O && (0, X.jsx)(s, {
                                    color: `secondary`,
                                    onClick: () => be(e),
                                    disabled: $ || Q,
                                    children: (0, X.jsx)(S, {
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
async function J(e) {
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
        if ((o ? await N(t, e, a, {
                admin: !0
            }) : await N(t, e, a)).attempts?.some(e => !e.success)) throw Error(`Failed to share with every target`);
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

function he({
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
    let u = T(),
        d = u.formatMessage({
            id: `fUpzop`,
            defaultMessage: `Only those invited`
        }),
        f = u.formatMessage({
            id: `LUpQ4d`,
            defaultMessage: `Anyone at {workspaceName}`
        }, {
            workspaceName: c
        }),
        p = u.formatMessage({
            id: `c6CGLs`,
            defaultMessage: `Installed for everyone at {workspaceName}`
        }, {
            workspaceName: c
        }),
        m = u.formatMessage({
            id: `chatgpt.share_skill.access_scope.dropdown.option.install_for_workspace`,
            defaultMessage: `Install for everyone at {workspaceName}`
        }, {
            workspaceName: c
        }),
        h = u.formatMessage({
            id: `V5GpwS`,
            defaultMessage: `Updating access scope`
        }),
        g = e === `limited` ? d : e === `discoverable` ? f : p,
        ee = e === `limited` ? R : e === `discoverable` ? U : B;
    return (0, X.jsxs)(D.Root, {
        children: [(0, X.jsxs)(D.Trigger, {
            id: s,
            color: `secondary`,
            disabled: n,
            "aria-busy": r || void 0,
            className: `radix-state-open:bg-token-interactive-bg-secondary-press text-token-text-primary hover:bg-token-interactive-bg-secondary-hover w-full min-w-0 items-center justify-between gap-2 overflow-hidden px-3 py-2 text-start whitespace-nowrap`,
            children: [(0, X.jsxs)(`span`, {
                className: `flex min-w-0 items-center gap-2`,
                children: [(0, X.jsx)(ee, {
                    className: `icon-sm shrink-0`
                }), (0, X.jsx)(`span`, {
                    className: `truncate`,
                    children: g
                })]
            }), r ? (0, X.jsx)(`span`, {
                className: `flex shrink-0 items-center`,
                role: `status`,
                "aria-label": h,
                children: (0, X.jsx)(_, {
                    className: `icon-sm shrink-0`
                })
            }) : (0, X.jsx)(l.ChevronDownSm, {
                className: `icon-sm shrink-0`
            })]
        }), (0, X.jsx)(D.Portal, {
            children: (0, X.jsx)(D.Content, {
                className: `box-border w-[var(--radix-dropdown-menu-trigger-width)] max-w-[var(--radix-dropdown-menu-trigger-width)] min-w-[var(--radix-dropdown-menu-trigger-width)]`,
                children: (0, X.jsxs)(D.RadioGroup, {
                    value: e,
                    onValueChange: e => {
                        if (e === `limited` || e === `discoverable` || e === `workspace_enabled`) {
                            if (e === `limited` && i || e === `workspace_enabled` && o || e === `discoverable` && a) return;
                            t(e)
                        }
                    },
                    children: [(0, X.jsx)(D.RadioItem, {
                        value: `limited`,
                        icon: R,
                        trailing: (0, X.jsx)(D.RadioItemCheck, {}),
                        label: d,
                        disabled: i
                    }, `limited`), (0, X.jsx)(D.RadioItem, {
                        value: `discoverable`,
                        icon: U,
                        trailing: (0, X.jsx)(D.RadioItemCheck, {}),
                        label: f,
                        disabled: a
                    }, `discoverable`), !o && (0, X.jsx)(D.RadioItem, {
                        value: `workspace_enabled`,
                        icon: B,
                        trailing: (0, X.jsx)(D.RadioItemCheck, {}),
                        label: m
                    }, `workspace_enabled`)]
                })
            })
        })]
    })
}

function ge({
    subjects: e,
    setSubjects: t,
    disabled: n
}) {
    "use no forget";
    let r = T(),
        [i, a] = (0, Y.useState)(``),
        [o] = ne(i, 150),
        s = g()?.getWorkspaceId(),
        c = E(s, 0, o, 10),
        l = k(s, o, 20, 0),
        u = l.data,
        d = i.trim() !== `` && (c.isFetching || l.isFetching),
        f = (0, Y.useMemo)(() => c.data?.items?.map(e => ({
            kind: `user`,
            id: e.account_user_id,
            label: e.name ?? `Unknown User`,
            sublabel: e.email ?? ``
        })) ?? [], [c.data?.items]),
        p = (0, Y.useMemo)(() => u?.items.slice(0, 10).map(e => ({
            kind: `group`,
            id: e.id,
            label: e.name,
            sublabel: r.formatMessage({
                id: `em0BXH`,
                defaultMessage: `{count, number} members`
            }, {
                count: e.num_members ?? 0
            })
        })) ?? [], [u, r]),
        m = (0, Y.useMemo)(() => {
            let t = new Set(e.map(e => `${e.kind}:${e.id}`));
            return [...f, ...p].filter(e => !t.has(`${e.kind}:${e.id}`))
        }, [f, p, e]),
        h = (0, Y.useCallback)(e => {
            a(e)
        }, []);
    return (0, X.jsx)(`div`, {
        children: (0, X.jsx)(G, {
            value: e,
            disabled: n,
            onChange: e => t([...e]),
            onSearch: n ? () => void 0 : h,
            options: m,
            placeholder: r.formatMessage({
                id: `Ug0S3P`,
                defaultMessage: `Add people or groups`
            }),
            menuIsOpen: !n && i.trim() !== ``,
            menuPlacement: `auto`,
            isLoading: d,
            trailingComponent: d ? (0, X.jsx)(_, {
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

function _e({
    icon: e,
    title: t,
    subtitle: n,
    hideLeading: r,
    trailing: i,
    disabled: a
}) {
    "use no forget";
    let o = !!e;
    return (0, X.jsxs)(`div`, {
        className: `flex items-center justify-between gap-3 rounded-xl text-sm`,
        "data-disabled": a ? `true` : void 0,
        children: [!r && (0, X.jsxs)(`div`, {
            className: m(`flex min-w-0 items-center`, o && `gap-3`),
            children: [o && (0, X.jsx)(`div`, {
                className: `shrink-0`,
                children: e
            }), (0, X.jsxs)(`div`, {
                className: `flex min-w-0 flex-col`,
                children: [(0, X.jsx)(`span`, {
                    className: `truncate font-medium`,
                    children: t
                }), (0, X.jsx)(`span`, {
                    className: `text-token-text-secondary truncate text-xs`,
                    children: n
                })]
            })]
        }), i && (0, X.jsx)(`div`, {
            children: i
        })]
    })
}

function ve({
    label: e
}) {
    "use no forget";
    return (0, X.jsx)(`div`, {
        className: `border-token-border-light bg-token-bg-tertiary text-token-text-secondary flex h-8 w-8 items-center justify-center rounded-full border text-xs font-semibold uppercase`,
        children: e.slice(0, 1).toUpperCase()
    })
}
var Y, X, Z = e((() => {
    r(), j(), h(), O(), pe(), V(), u(), z(), H(), f(), v(), L(), I(), P(), re(), c(), d(), W(), a(), w(), p(), Y = n(C()), te(), A(), X = b()
}));
export {
    Z as n, K as r, q as t
};
//# sourceMappingURL=46158937-e8ta3fsku9jyta3j.js.map