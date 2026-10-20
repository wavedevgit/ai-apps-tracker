import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $D as r,
    Az as i,
    I1 as a,
    J5 as o,
    JT as s,
    Mz as c,
    Nz as l,
    QD as u,
    Qb as d,
    RU as f,
    Sw as p,
    Y1 as m,
    ex as h,
    jz as g,
    q5 as _,
    qT as v,
    ww as y,
    zU as b
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Bn as x,
    Hn as S,
    N as C,
    Pn as w,
    Vn as ee,
    s as T,
    zn as E
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    Fmn as te,
    Lmn as ne,
    Lst as D,
    RHn as O,
    S6t as k,
    cyt as A,
    f$ as re,
    g$ as j,
    g6t as M,
    gyt as ie,
    h$ as ae,
    kmn as N,
    lyt as P,
    myt as oe,
    o$ as se,
    oyt as F,
    p$ as ce,
    ryt as I,
    s$ as L,
    x6t as R,
    zHn as z,
    zst as B
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    $x as V,
    FS as le,
    IS as ue,
    Mv as H,
    Nv as U,
    Qx as de,
    Rv as W,
    zv as fe
} from "./30901919-jory365vq6ym5crx.js";
import {
    i as G,
    r as K
} from "./daf50f1d-jetqaibdx6o2c5s1.js";
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
    let i = C(),
        [a, o] = (0, X.useState)(!1),
        s = x(),
        c = f();
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
                return r ? await A(e, t, i, {
                    admin: !0
                }) : await A(e, t, i), !0
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
                r ? await F(e, {
                    principal_type: t.principal_type,
                    principal_id: t.principal_id
                }, i, {
                    admin: !0
                }) : await F(e, {
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
    adminMode: i = !1,
    isOpen: a,
    onClose: o
}) {
    "use no forget";
    let s = x(),
        c = f(),
        l = (0, X.use)(d)(),
        u = r().trim() || s.formatMessage({
            id: `8Vf8nl`,
            defaultMessage: `workspace`
        }),
        {
            canShare: m,
            canShareWorkspace: h,
            canEnableShare: g,
            isLoading: _
        } = ne(),
        y = te(),
        [b, S] = (0, X.useState)([]),
        {
            skillData: C,
            isLoadingSkill: ee
        } = oe({
            hazelnutId: n == null ? e : ``
        }),
        T = n ?? C,
        E = T?.permissions,
        D = E?.can_share,
        O = E?.can_share_workspace,
        k = E?.can_enable_share,
        A = _,
        j = m && (i || !!D) && (i || y),
        M = h && (i || !!O),
        N = g && (i || !!k),
        P = j || M || N,
        {
            data: F,
            isLoading: I,
            isError: L
        } = ie({
            hazelnutId: e,
            isEnabled: a,
            admin: i
        }),
        R = !!(A || ee),
        z = (0, X.useMemo)(() => {
            if (typeof window > `u`) return ``;
            let t = new URL(`/skills`, window.location.origin);
            return t.searchParams.set(`skill_id`, e), t.toString()
        }, [e]),
        B = (0, X.useCallback)(async () => {
            try {
                await navigator.clipboard.writeText(z), c.success(s.formatMessage({
                    id: `UCtYU9`,
                    defaultMessage: `Share link copied`
                }))
            } catch {
                c.danger(s.formatMessage({
                    id: `L/J4Xm`,
                    defaultMessage: `Failed to copy share link`
                }))
            }
        }, [z, c, s]),
        V = (0, X.useCallback)(e => e === `workspace` ? s.formatMessage({
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
        !L || !a || c.danger(s.formatMessage({
            id: `6mNnYG`,
            defaultMessage: `Failed to load current shares`
        }))
    }, [s, a, L, c]);
    let {
        otherPrincipals: le,
        ownerPrincipal: H
    } = (0, X.useMemo)(() => {
        let e = (F?.principals ?? []).filter(e => [`workspace`, `user`, `group`].includes(e.principal_type)),
            n = e.find(e => e.principal_type === `user` && e.principal_id === t),
            r = e.filter(e => [`workspace`, `user`, `group`].includes(e.principal_type) && e.principal_type !== `workspace` && !(e.principal_type === `user` && e.principal_id === t));
        return {
            ownerPrincipal: n ?? null,
            otherPrincipals: r ?? []
        }
    }, [t, F?.principals]), U = i && T?.creator_active === !1 ? s.formatMessage({
        id: `shareSkillModal.owner.unassigned`,
        defaultMessage: `Unassigned`
    }) : H?.name ?? T?.creator_name ?? t, de = se(T?.iconography), W = ae(T), fe = ce(T), G = F?.workspace_access_state ?? `restricted`, K = (0, X.useMemo)(() => G === `discoverable` ? `discoverable` : G === `enabled` ? `workspace_enabled` : `limited`, [G]), [q, J] = (0, X.useState)(K);
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
            subjects: b,
            setSubjects: S,
            adminMode: i
        }),
        xe = b.length !== 0,
        Se = b.length === 0 || !Y || Q || R || !j,
        $ = Q || R || !P;
    return a ? (0, Z.jsx)(p, {
        isOpen: !0,
        onClose: o,
        title: s.formatMessage(i ? {
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
        portalContainer: l,
        footerContent: xe ? (0, Z.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [(0, Z.jsx)(v, {
                type: `button`,
                color: `secondary`,
                onClick: () => S([]),
                disabled: Q,
                children: (0, Z.jsx)(w, {
                    id: `iXxXsy`,
                    defaultMessage: `Cancel`
                })
            }), (0, Z.jsx)(v, {
                type: `button`,
                color: `blue`,
                onClick: ve,
                disabled: Se,
                loading: Q,
                children: (0, Z.jsx)(w, {
                    id: `mmV0/E`,
                    defaultMessage: `Invite`
                })
            })]
        }) : i ? null : (0, Z.jsx)(`div`, {
            className: `flex items-center gap-2`,
            children: (0, Z.jsx)(v, {
                type: `button`,
                onClick: B,
                disabled: !z,
                icon: ue,
                children: (0, Z.jsx)(w, {
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
                    style: W == null ? void 0 : re(T),
                    children: W == null ? (0, Z.jsx)(de, {
                        className: `text-token-text-primary h-[42px] w-[42px]`
                    }) : (0, Z.jsx)(`img`, {
                        src: W,
                        alt: ``,
                        className: `h-full w-full object-cover`
                    })
                }), (0, Z.jsxs)(`div`, {
                    className: `flex min-w-0 flex-1 flex-col gap-1`,
                    children: [(0, Z.jsx)(`p`, {
                        className: `text-token-text-primary truncate text-sm font-normal`,
                        children: T?.name ?? e
                    }), (0, Z.jsx)(`p`, {
                        className: `text-token-text-tertiary truncate text-xs`,
                        children: (0, Z.jsx)(w, {
                            id: `EEyRI5`,
                            defaultMessage: `By: {name}`,
                            values: {
                                name: U
                            }
                        })
                    }), (0, Z.jsx)(`p`, {
                        className: `text-token-text-secondary line-clamp-2 text-sm`,
                        children: fe ?? s.formatMessage({
                            id: `rckTKD`,
                            defaultMessage: `This skill doesn’t include a description.`
                        })
                    })]
                })]
            }), (0, Z.jsxs)(`div`, {
                className: `flex flex-col gap-2`,
                children: [(y || i) && (0, Z.jsx)(he, {
                    subjects: b,
                    setSubjects: S,
                    disabled: !Y || $ || !j
                }), (0, Z.jsxs)(`div`, {
                    className: `flex flex-col gap-3`,
                    children: [(0, Z.jsx)(`p`, {
                        className: `text-token-text-secondary text-sm font-medium`,
                        children: (0, Z.jsx)(w, {
                            id: `dTcssu`,
                            defaultMessage: `Who has access`
                        })
                    }), (0, Z.jsx)(me, {
                        value: q,
                        onChange: e => {
                            let t = e === `limited` ? `restricted` : e === `discoverable` ? `discoverable` : `enabled`,
                                n = () => {
                                    J(e), e !== `limited` && b.length > 0 && S([])
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
                        disableLimited: !M && q !== `limited`,
                        disableDiscoverable: !M,
                        hideWorkspaceEnable: !N,
                        triggerId: `share-skill-access-scope`,
                        workspaceName: u
                    }), !P && !R && (0, Z.jsx)(`p`, {
                        className: `text-token-text-tertiary text-xs`,
                        children: (0, Z.jsx)(w, {
                            id: `Yqkaox`,
                            defaultMessage: `Sharing is disabled by workspace settings.`
                        })
                    })]
                })]
            }), (0, Z.jsx)(`div`, {
                className: `flex flex-col gap-3`,
                children: (0, Z.jsx)(`div`, {
                    className: `flex max-h-[240px] flex-col gap-2 overflow-y-auto`,
                    children: I ? (0, Z.jsx)(`span`, {
                        className: `text-token-text-secondary text-sm`,
                        children: (0, Z.jsx)(w, {
                            id: `2L49KZ`,
                            defaultMessage: `Loading…`
                        })
                    }) : (0, Z.jsxs)(Z.Fragment, {
                        children: [(0, Z.jsx)(ge, {
                            icon: (0, Z.jsx)(_e, {
                                label: U
                            }),
                            title: U,
                            subtitle: s.formatMessage({
                                id: `DndUOE`,
                                defaultMessage: `Owner`
                            })
                        }), y || i ? le.map(e => {
                            let t = `${e.principal_type}:${e.principal_id}`;
                            return (0, Z.jsx)(ge, {
                                icon: (0, Z.jsx)(_e, {
                                    label: e.name
                                }),
                                title: e.name,
                                subtitle: V(e.principal_type),
                                trailing: j && (0, Z.jsx)(v, {
                                    color: `secondary`,
                                    onClick: () => be(e),
                                    disabled: $ || Q,
                                    children: (0, Z.jsx)(w, {
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
        if ((o ? await P(t, e, a, {
                admin: !0
            }) : await P(t, e, a)).attempts?.some(e => !e.success)) throw Error(`Failed to share with every target`);
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
    disableLimited: a = !1,
    disableDiscoverable: o = !1,
    hideWorkspaceEnable: s = !1,
    triggerId: l,
    workspaceName: u
}) {
    "use no forget";
    let d = x(),
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
        v = e === `limited` ? V : e === `discoverable` ? W : H;
    return (0, Z.jsxs)(O.Root, {
        children: [(0, Z.jsxs)(O.Trigger, {
            id: l,
            color: `secondary`,
            disabled: n,
            "aria-busy": r || void 0,
            className: `radix-state-open:bg-token-interactive-bg-secondary-press text-token-text-primary hover:bg-token-interactive-bg-secondary-hover w-full min-w-0 items-center justify-between gap-2 overflow-hidden px-3 py-2 text-start whitespace-nowrap`,
            children: [(0, Z.jsxs)(`span`, {
                className: `flex min-w-0 items-center gap-2`,
                children: [(0, Z.jsx)(v, {
                    className: `icon-sm shrink-0`
                }), (0, Z.jsx)(`span`, {
                    className: `truncate`,
                    children: _
                })]
            }), r ? (0, Z.jsx)(`span`, {
                className: `flex shrink-0 items-center`,
                role: `status`,
                "aria-label": g,
                children: (0, Z.jsx)(i, {
                    className: `icon-sm shrink-0`
                })
            }) : (0, Z.jsx)(c.ChevronDownSm, {
                className: `icon-sm shrink-0`
            })]
        }), (0, Z.jsx)(O.Portal, {
            children: (0, Z.jsx)(O.Content, {
                className: `box-border w-[var(--radix-dropdown-menu-trigger-width)] max-w-[var(--radix-dropdown-menu-trigger-width)] min-w-[var(--radix-dropdown-menu-trigger-width)]`,
                children: (0, Z.jsxs)(O.RadioGroup, {
                    value: e,
                    onValueChange: e => {
                        if (e === `limited` || e === `discoverable` || e === `workspace_enabled`) {
                            if (e === `limited` && a || e === `workspace_enabled` && s || e === `discoverable` && o) return;
                            t(e)
                        }
                    },
                    children: [(0, Z.jsx)(O.RadioItem, {
                        value: `limited`,
                        icon: V,
                        trailing: (0, Z.jsx)(O.RadioItemCheck, {}),
                        label: f,
                        disabled: a
                    }, `limited`), (0, Z.jsx)(O.RadioItem, {
                        value: `discoverable`,
                        icon: W,
                        trailing: (0, Z.jsx)(O.RadioItemCheck, {}),
                        label: p,
                        disabled: o
                    }, `discoverable`), !s && (0, Z.jsx)(O.RadioItem, {
                        value: `workspace_enabled`,
                        icon: H,
                        trailing: (0, Z.jsx)(O.RadioItemCheck, {}),
                        label: h
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
    let r = x(),
        [a, o] = (0, X.useState)(``),
        [s] = D(a, 150),
        c = m()?.getWorkspaceId(),
        l = k(c, 0, s, 10),
        u = R(c, s, 20, 0),
        d = u.data,
        f = a.trim() !== `` && (l.isFetching || u.isFetching),
        p = (0, X.useMemo)(() => l.data?.items?.map(e => ({
            kind: `user`,
            id: e.account_user_id,
            label: e.name ?? `Unknown User`,
            sublabel: e.email ?? ``
        })) ?? [], [l.data?.items]),
        h = (0, X.useMemo)(() => d?.items.slice(0, 10).map(e => ({
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
        g = (0, X.useMemo)(() => {
            let t = new Set(e.map(e => `${e.kind}:${e.id}`));
            return [...p, ...h].filter(e => !t.has(`${e.kind}:${e.id}`))
        }, [p, h, e]),
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
            isLoading: f,
            trailingComponent: f ? (0, Z.jsx)(i, {
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
            className: _(`flex min-w-0 items-center`, o && `gap-3`),
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
    u(), M(), s(), z(), fe(), U(), l(), le(), de(), y(), h(), j(), L(), I(), N(), g(), a(), G(), b(), T(), o(), X = n(S()), E(), B(), Z = ee()
}));
export {
    ve as n, q as r, J as t
};
//# sourceMappingURL=46158937-gunkyvqb0dm01sx2.js.map