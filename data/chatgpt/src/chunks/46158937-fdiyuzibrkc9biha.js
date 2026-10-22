import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as r,
    Aw as i,
    Bz as a,
    IU as o,
    LU as s,
    Ow as c,
    Rz as l,
    Vz as u,
    aO as d,
    c7 as f,
    eE as p,
    ex as m,
    iO as h,
    l7 as g,
    nx as _,
    o0 as v,
    q1 as y,
    zz as b
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Bn as x,
    N as ee,
    Nn as S,
    Rn as te,
    Vn as C,
    s as w,
    zn as T
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    A6t as E,
    Ist as D,
    Rst as ne,
    _hn as re,
    cyt as O,
    dhn as k,
    g$ as ie,
    gyt as ae,
    h$ as oe,
    k6t as A,
    l$ as se,
    lyt as j,
    myt as ce,
    oyt as M,
    ryt as N,
    u$ as le,
    v$ as ue,
    vUn as P,
    w6t as F,
    y$ as I,
    yUn as de,
    yhn as fe
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    $x as L,
    FS as R,
    IS as pe,
    Mv as z,
    Nv as B,
    Qx as V,
    Rv as H,
    zv as U
} from "./30901919-lgbmg5s09xld40kt.js";
import {
    i as W,
    r as G
} from "./daf50f1d-hjseghp0kxbcycxs.js";
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
    let i = ee(),
        [a, s] = (0, Y.useState)(!1),
        c = T(),
        l = o();
    return {
        handleAddPrincipals: async () => {
            s(!0);
            try {
                await J({
                    hazelnutId: e,
                    subjects: t,
                    intl: c,
                    toaster: l,
                    queryClient: i,
                    adminMode: r
                }) && n([])
            } finally {
                s(!1)
            }
        },
        handleWorkspaceRoleChange: (0, Y.useCallback)(async t => {
            s(!0);
            try {
                return r ? await O(e, t, i, {
                    admin: !0
                }) : await O(e, t, i), !0
            } catch {
                return l.danger(c.formatMessage({
                    id: `zGJe2u`,
                    defaultMessage: `Failed to update workspace access`
                })), !1
            } finally {
                s(!1)
            }
        }, [r, e, c, i, l]),
        handleRemovePrincipal: async t => {
            s(!0);
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
                l.danger(c.formatMessage({
                    id: `hKBI+n`,
                    defaultMessage: `Failed to remove access`
                }))
            } finally {
                s(!1)
            }
        },
        isSubmitting: a
    }
}

function q({
    hazelnutId: e,
    creatorId: t,
    skill: n,
    adminMode: i = !1,
    isOpen: a,
    onClose: s
}) {
    "use no forget";
    let l = T(),
        u = o(),
        f = (0, Y.use)(m)(),
        p = d().trim() || l.formatMessage({
            id: `8Vf8nl`,
            defaultMessage: `workspace`
        }),
        {
            canShare: h,
            canShareWorkspace: g,
            canEnableShare: _,
            isLoading: v
        } = fe(),
        y = re(),
        [b, x] = (0, Y.useState)([]),
        {
            skillData: ee,
            isLoadingSkill: te
        } = ce({
            hazelnutId: n == null ? e : ``
        }),
        C = n ?? ee,
        w = C?.permissions,
        E = w?.can_share,
        D = w?.can_share_workspace,
        ne = w?.can_enable_share,
        O = v,
        k = h && (i || !!E) && (i || y),
        A = g && (i || !!D),
        j = _ && (i || !!ne),
        M = k || A || j,
        {
            data: N,
            isLoading: le,
            isError: P
        } = ae({
            hazelnutId: e,
            isEnabled: a,
            admin: i
        }),
        F = !!(O || te),
        I = (0, Y.useMemo)(() => {
            if (typeof window > `u`) return ``;
            let t = new URL(`/skills`, window.location.origin);
            return t.searchParams.set(`skill_id`, e), t.toString()
        }, [e]),
        de = (0, Y.useCallback)(async () => {
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
        L = (0, Y.useCallback)(e => e === `workspace` ? l.formatMessage({
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
        otherPrincipals: R,
        ownerPrincipal: z
    } = (0, Y.useMemo)(() => {
        let e = (N?.principals ?? []).filter(e => [`workspace`, `user`, `group`].includes(e.principal_type)),
            n = e.find(e => e.principal_type === `user` && e.principal_id === t),
            r = e.filter(e => [`workspace`, `user`, `group`].includes(e.principal_type) && e.principal_type !== `workspace` && !(e.principal_type === `user` && e.principal_id === t));
        return {
            ownerPrincipal: n ?? null,
            otherPrincipals: r ?? []
        }
    }, [t, N?.principals]), B = i && C?.creator_active === !1 ? l.formatMessage({
        id: `shareSkillModal.owner.unassigned`,
        defaultMessage: `Unassigned`
    }) : z?.name ?? C?.creator_name ?? t, V = se(C?.iconography), H = ue(C), U = ie(C), W = N?.workspace_access_state ?? `restricted`, G = (0, Y.useMemo)(() => W === `discoverable` ? `discoverable` : W === `enabled` ? `workspace_enabled` : `limited`, [W]), [K, q] = (0, Y.useState)(G);
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
            subjects: b,
            setSubjects: x,
            adminMode: i
        }),
        xe = b.length !== 0,
        Se = b.length === 0 || !J || Q || F || !k,
        $ = Q || F || !M;
    return a ? (0, X.jsx)(c, {
        isOpen: !0,
        onClose: s,
        title: l.formatMessage(i ? {
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
        portalContainer: f,
        footerContent: xe ? (0, X.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [(0, X.jsx)(r, {
                type: `button`,
                color: `secondary`,
                onClick: () => x([]),
                disabled: Q,
                children: (0, X.jsx)(S, {
                    id: `iXxXsy`,
                    defaultMessage: `Cancel`
                })
            }), (0, X.jsx)(r, {
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
        }) : i ? null : (0, X.jsx)(`div`, {
            className: `flex items-center gap-2`,
            children: (0, X.jsx)(r, {
                type: `button`,
                onClick: de,
                disabled: !I,
                icon: pe,
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
                    style: H == null ? void 0 : oe(C),
                    children: H == null ? (0, X.jsx)(V, {
                        className: `text-token-text-primary h-[42px] w-[42px]`
                    }) : (0, X.jsx)(`img`, {
                        src: H,
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
                                name: B
                            }
                        })
                    }), (0, X.jsx)(`p`, {
                        className: `text-token-text-secondary line-clamp-2 text-sm`,
                        children: U ?? l.formatMessage({
                            id: `rckTKD`,
                            defaultMessage: `This skill doesn’t include a description.`
                        })
                    })]
                })]
            }), (0, X.jsxs)(`div`, {
                className: `flex flex-col gap-2`,
                children: [(y || i) && (0, X.jsx)(ge, {
                    subjects: b,
                    setSubjects: x,
                    disabled: !J || $ || !k
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
                                    q(e), e !== `limited` && b.length > 0 && x([])
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
                        disableLimited: !A && K !== `limited`,
                        disableDiscoverable: !A,
                        hideWorkspaceEnable: !j,
                        triggerId: `share-skill-access-scope`,
                        workspaceName: p
                    }), !M && !F && (0, X.jsx)(`p`, {
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
                    children: le ? (0, X.jsx)(`span`, {
                        className: `text-token-text-secondary text-sm`,
                        children: (0, X.jsx)(S, {
                            id: `2L49KZ`,
                            defaultMessage: `Loading…`
                        })
                    }) : (0, X.jsxs)(X.Fragment, {
                        children: [(0, X.jsx)(_e, {
                            icon: (0, X.jsx)(ve, {
                                label: B
                            }),
                            title: B,
                            subtitle: l.formatMessage({
                                id: `DndUOE`,
                                defaultMessage: `Owner`
                            })
                        }), y || i ? R.map(e => {
                            let t = `${e.principal_type}:${e.principal_id}`;
                            return (0, X.jsx)(_e, {
                                icon: (0, X.jsx)(ve, {
                                    label: e.name
                                }),
                                title: e.name,
                                subtitle: L(e.principal_type),
                                trailing: k && (0, X.jsx)(r, {
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
        if ((o ? await j(t, e, a, {
                admin: !0
            }) : await j(t, e, a)).attempts?.some(e => !e.success)) throw Error(`Failed to share with every target`);
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
    disableDiscoverable: o = !1,
    hideWorkspaceEnable: s = !1,
    triggerId: c,
    workspaceName: u
}) {
    "use no forget";
    let d = T(),
        f = d.formatMessage({
            id: `fUpzop`,
            defaultMessage: `Only those invited`
        }),
        p = d.formatMessage({
            id: `LUpQ4d`,
            defaultMessage: `Anyone at {workspaceName}`
        }, {
            workspaceName: u
        }),
        m = d.formatMessage({
            id: `c6CGLs`,
            defaultMessage: `Installed for everyone at {workspaceName}`
        }, {
            workspaceName: u
        }),
        h = d.formatMessage({
            id: `chatgpt.share_skill.access_scope.dropdown.option.install_for_workspace`,
            defaultMessage: `Install for everyone at {workspaceName}`
        }, {
            workspaceName: u
        }),
        g = d.formatMessage({
            id: `V5GpwS`,
            defaultMessage: `Updating access scope`
        }),
        _ = e === `limited` ? f : e === `discoverable` ? p : m,
        v = e === `limited` ? L : e === `discoverable` ? H : z;
    return (0, X.jsxs)(P.Root, {
        children: [(0, X.jsxs)(P.Trigger, {
            id: c,
            color: `secondary`,
            disabled: n,
            "aria-busy": r || void 0,
            className: `radix-state-open:bg-token-interactive-bg-secondary-press text-token-text-primary hover:bg-token-interactive-bg-secondary-hover w-full min-w-0 items-center justify-between gap-2 overflow-hidden px-3 py-2 text-start whitespace-nowrap`,
            children: [(0, X.jsxs)(`span`, {
                className: `flex min-w-0 items-center gap-2`,
                children: [(0, X.jsx)(v, {
                    className: `icon-sm shrink-0`
                }), (0, X.jsx)(`span`, {
                    className: `truncate`,
                    children: _
                })]
            }), r ? (0, X.jsx)(`span`, {
                className: `flex shrink-0 items-center`,
                role: `status`,
                "aria-label": g,
                children: (0, X.jsx)(l, {
                    className: `icon-sm shrink-0`
                })
            }) : (0, X.jsx)(a.ChevronDownSm, {
                className: `icon-sm shrink-0`
            })]
        }), (0, X.jsx)(P.Portal, {
            children: (0, X.jsx)(P.Content, {
                className: `box-border w-[var(--radix-dropdown-menu-trigger-width)] max-w-[var(--radix-dropdown-menu-trigger-width)] min-w-[var(--radix-dropdown-menu-trigger-width)]`,
                children: (0, X.jsxs)(P.RadioGroup, {
                    value: e,
                    onValueChange: e => {
                        if (e === `limited` || e === `discoverable` || e === `workspace_enabled`) {
                            if (e === `limited` && i || e === `workspace_enabled` && s || e === `discoverable` && o) return;
                            t(e)
                        }
                    },
                    children: [(0, X.jsx)(P.RadioItem, {
                        value: `limited`,
                        icon: L,
                        trailing: (0, X.jsx)(P.RadioItemCheck, {}),
                        label: f,
                        disabled: i
                    }, `limited`), (0, X.jsx)(P.RadioItem, {
                        value: `discoverable`,
                        icon: H,
                        trailing: (0, X.jsx)(P.RadioItemCheck, {}),
                        label: p,
                        disabled: o
                    }, `discoverable`), !s && (0, X.jsx)(P.RadioItem, {
                        value: `workspace_enabled`,
                        icon: z,
                        trailing: (0, X.jsx)(P.RadioItemCheck, {}),
                        label: h
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
        [o] = D(i, 150),
        s = v()?.getWorkspaceId(),
        c = E(s, 0, o, 10),
        u = A(s, o, 20, 0),
        d = u.data,
        f = i.trim() !== `` && (c.isFetching || u.isFetching),
        p = (0, Y.useMemo)(() => c.data?.items?.map(e => ({
            kind: `user`,
            id: e.account_user_id,
            label: e.name ?? `Unknown User`,
            sublabel: e.email ?? ``
        })) ?? [], [c.data?.items]),
        m = (0, Y.useMemo)(() => d?.items.slice(0, 10).map(e => ({
            kind: `group`,
            id: e.id,
            label: e.name,
            sublabel: r.formatMessage({
                id: `em0BXH`,
                defaultMessage: `{count, number} members`
            }, {
                count: e.num_members ?? 0
            })
        })) ?? [], [d, r]),
        h = (0, Y.useMemo)(() => {
            let t = new Set(e.map(e => `${e.kind}:${e.id}`));
            return [...p, ...m].filter(e => !t.has(`${e.kind}:${e.id}`))
        }, [p, m, e]),
        g = (0, Y.useCallback)(e => {
            a(e)
        }, []);
    return (0, X.jsx)(`div`, {
        children: (0, X.jsx)(G, {
            value: e,
            disabled: n,
            onChange: e => t([...e]),
            onSearch: n ? () => void 0 : g,
            options: h,
            placeholder: r.formatMessage({
                id: `Ug0S3P`,
                defaultMessage: `Add people or groups`
            }),
            menuIsOpen: !n && i.trim() !== ``,
            menuPlacement: `auto`,
            isLoading: f,
            trailingComponent: f ? (0, X.jsx)(l, {
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
            className: f(`flex min-w-0 items-center`, o && `gap-3`),
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
    h(), F(), p(), de(), U(), B(), u(), R(), V(), i(), _(), I(), le(), N(), k(), b(), y(), W(), s(), w(), g(), Y = n(C()), te(), ne(), X = x()
}));
export {
    Z as n, K as r, q as t
};
//# sourceMappingURL=46158937-fdiyuzibrkc9biha.js.map