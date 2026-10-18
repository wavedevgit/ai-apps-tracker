import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as n,
    C1 as r,
    Fst as i,
    Ist as a,
    Jc as o,
    My as s,
    Yc as c,
    b5 as l,
    dz as u,
    fz as d,
    hU as f,
    jy as p,
    kT as ee,
    o1 as m,
    pU as h,
    pnt as g,
    sE as _,
    u1 as v,
    y5 as y,
    ynt as b
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as x,
    Bn as S,
    Ht as te,
    N as ne,
    Nn as C,
    Pt as re,
    Rn as w,
    Tn as ie,
    Ut as T,
    Vn as E,
    l as ae,
    p as oe,
    s as D,
    wn as O,
    zn as se
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Aln as ce,
    Bst as k,
    Iln as le,
    Pln as A,
    bun as ue,
    cX as de,
    kln as fe,
    lX as j,
    zst as pe
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Gh as me,
    Kh as he,
    Rx as ge,
    Xv as M,
    Xx as N,
    Yv as P,
    Zx as _e,
    zx as F
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    Xv as I,
    Zv as ve
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    i as ye,
    n as be
} from "./5f4d7fa0-h884rob3aq4wlepb.js";
import {
    c as L,
    o as xe,
    r as Se,
    t as Ce
} from "./3e72bb91-l4ijhasz7arxe6nl.js";
import {
    i as we,
    n as Te,
    r as Ee
} from "./ab92372e-glzrgn0c7jblr8e0.js";
import {
    n as De,
    t as Oe
} from "./3a774aaf-jtilbrgvl6xaoa8n.js";
import {
    n as R,
    t as ke
} from "./66a75a18-fvntj6g93ffxtpuo.js";
import {
    n as Ae,
    t as je
} from "./77909f2c-hzge4gwb750bns8n.js";
import {
    n as Me,
    t as Ne
} from "./6eb96464-fd6h9ku78mgbefg1.js";
import {
    r as Pe,
    t as Fe
} from "./139cb2d0-igzjge95hvas5us3.js";

function Ie({
    showBottomBorder: e = !0
}) {
    return (0, z.jsx)(`div`, {
        className: e ? `border-token-border-heavy flex items-center border-b` : `flex items-center`,
        children: (0, z.jsx)(`div`, {
            className: `py-2 text-xl leading-7 font-medium`,
            children: (0, z.jsx)(C, {
                id: `wham.environmentsHeader.message`,
                defaultMessage: `Environments`
            })
        })
    })
}
var z, B = e((() => {
    w(), z = S()
}));

function Le(e) {
    return (0, H.jsxs)(`a`, {
        href: `https://developers.openai.com/codex/third-party/gitlab`,
        target: `_blank`,
        rel: `noreferrer`,
        className: `text-token-text-accent hover:text-token-text-accent/80 inline-flex items-center gap-1 font-medium`,
        children: [e, (0, H.jsx)(P, {
            "aria-hidden": !0,
            className: `icon-xs`
        })]
    })
}
var V, H, Re, U = e((() => {
    V = O(), n(), M(), s(), v(), Pe(), w(), x(), H = S(), Re = e => {
        "use forget";
        let t = (0, V.c)(18),
            {
                isConnected: n
            } = e,
            i = se(),
            a = re(),
            o = r(),
            s;
        t[0] === o ? s = t[1] : (s = o?.isAdminOfAccount() || o?.isOwnerOfAccount(), t[0] = o, t[1] = s);
        let c = !!s,
            l;
        t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (l = (0, H.jsx)(`h2`, {
            className: `text-base leading-6 font-semibold`,
            children: (0, H.jsx)(C, {
                id: `wham.environments.gitlab_activity.summary.title`,
                defaultMessage: `GitLab activity`
            })
        }), t[2] = l) : l = t[2];
        let u;
        t[3] !== c || t[4] !== i ? (u = c ? void 0 : i.formatMessage({
            id: `wham.environments.gitlab_activity.summary.tooltip.workspace_admin_required`,
            defaultMessage: `Only workspace admins can manage GitLab group activity.`
        }), t[3] = c, t[4] = i, t[5] = u) : u = t[5];
        let d = !n || !c,
            f;
        t[6] === a ? f = t[7] : (f = () => a(Fe), t[6] = a, t[7] = f);
        let m;
        t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (m = (0, H.jsx)(C, {
            id: `wham.environments.gitlab_activity.summary.button.manage_groups`,
            defaultMessage: `Manage groups`
        }), t[8] = m) : m = t[8];
        let h;
        t[9] !== d || t[10] !== f ? (h = (0, H.jsx)(`span`, {
            className: `inline-flex`,
            children: (0, H.jsx)(ee, {
                type: `button`,
                color: `secondary`,
                disabled: d,
                onClick: f,
                children: m
            })
        }), t[9] = d, t[10] = f, t[11] = h) : h = t[11];
        let g;
        t[12] !== u || t[13] !== h ? (g = (0, H.jsxs)(`div`, {
            className: `flex items-center justify-between gap-4`,
            children: [l, (0, H.jsx)(p, {
                label: u,
                children: h
            })]
        }), t[12] = u, t[13] = h, t[14] = g) : g = t[14];
        let _;
        t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = (0, H.jsx)(`p`, {
            className: `text-token-text-tertiary text-sm`,
            children: (0, H.jsx)(C, {
                id: `wham.environments.gitlab_activity.summary.code_review_description_with_learn_more`,
                defaultMessage: `Enable code reviews across projects in your GitLab groups, or enable reviews for individual projects below. <learnMore>Learn more</learnMore>`,
                values: {
                    learnMore: Le
                }
            })
        }), t[15] = _) : _ = t[15];
        let v;
        return t[16] === g ? v = t[17] : (v = (0, H.jsxs)(`section`, {
            className: `flex flex-col gap-1`,
            children: [g, _]
        }), t[16] = g, t[17] = v), v
    }
}));

function ze({
    isPinned: e,
    onToggle: t,
    intl: n,
    isCreator: r
}) {
    return (0, q.jsx)(I.Cell, {
        className: `content-center pe-1!`,
        children: (0, q.jsx)(p, {
            side: `bottom`,
            align: `center`,
            className: `block w-full`,
            alignOffset: 0,
            label: r ? e ? (0, q.jsx)(C, {
                id: `wham.environmentsList.unpin`,
                defaultMessage: `Unpin environment for everyone in your workspace`
            }) : (0, q.jsx)(C, {
                id: `wham.environmentsList.pin`,
                defaultMessage: `Pin environment to the top for everyone in your workspace`
            }) : (0, q.jsx)(C, {
                id: `wham.environmentsList.pin.notCreator`,
                defaultMessage: `You can only pin and unpin environments you created.`
            }),
            children: (0, q.jsxs)(`button`, {
                disabled: !r,
                onClick: t,
                className: y(`group/cell relative flex h-10 w-full items-center px-4 group-hover/row:opacity-100`, !e && `opacity-0`, e && !r && `opacity-50`),
                "aria-label": e ? n.formatMessage({
                    id: `wham.environmentsList.unpinEnvironment`,
                    defaultMessage: `Unpin environment`
                }) : n.formatMessage({
                    id: `wham.environmentsList.pinEnvironment`,
                    defaultMessage: `Pin environment`
                }),
                children: [e && (0, q.jsx)(F, {
                    className: `icon absolute opacity-0 group-hover/cell:opacity-100`
                }), (0, q.jsx)(_e, {
                    className: y(`icon absolute`, e && `opacity-100 group-hover/cell:opacity-0`)
                })]
            })
        })
    })
}

function Be(e = {}) {
    return g(`1437685011`) ? (0, q.jsx)(Ve, {
        ...e
    }) : (0, q.jsx)(W, {
        ...e
    })
}

function Ve(e) {
    let t = we({
        redirectAfter: `/codex/cloud/settings/environments?provider=gitlab`
    });
    return (0, q.jsx)(W, {
        ...e,
        gitLabConnector: t
    })
}

function W({
    onConnectionAlertVisibilityChange: e,
    gitLabConnector: t
}) {
    let n = re(),
        [r, i] = te(),
        s = ne(),
        c = se(),
        l = f(),
        d = m(),
        p = !!d?.isWorkspaceAccount(),
        h = Ae(),
        _ = t != null,
        [v, y] = (0, K.useState)(r.get(`search`) ?? ``),
        [b, x] = (0, K.useState)(null),
        {
            connectorId: S,
            isConnected: w,
            isLoading: T
        } = ye({
            redirectAfter: `/codex/cloud/settings/environments`
        }),
        E = t?.connectorId,
        D = t?.isConnected ?? !1,
        O = t?.isLoading ?? !1,
        k = t?.error ?? null,
        A = t?.gitlabConnectorCandidates.length ?? 0,
        j = E || void 0,
        me = t?.platformConnector?.template_id === Te,
        ge = r.get(`provider`),
        M = _ && ge === `gitlab` && (O || k != null || A > 0) ? `gitlab` : b === `github` && w ? `github` : null,
        N = M ?? (_ && D && !w ? `gitlab` : `github`),
        P = N === `gitlab` && me && g(`2587295706`),
        _e = _ && (w && D || M != null && (N === `gitlab` ? w : D)),
        F = N === `gitlab` ? D : w,
        ve = N === `gitlab` ? `/codex/cloud/settings/environment/create?provider=gitlab` : `/codex/cloud/settings/environment/create`;
    (0, K.useEffect)(() => {
        if (!_ || O || k != null || A > 0 || r.get(`provider`) !== `gitlab`) return;
        let e = new URLSearchParams(r);
        e.delete(`provider`), i(e, {
            replace: !0
        })
    }, [A, k, O, _, r, i]);
    let {
        data: be,
        isLoading: L,
        error: Se,
        fetchNextPage: Ce,
        hasNextPage: we,
        isFetchingNextPage: Ee
    } = ae({
        queryKey: ue({
            pageSize: J,
            enforceRepoAccess: !1,
            connectorId: S
        }),
        initialPageParam: Y,
        enabled: N === `github` && !T,
        queryFn: ({
            pageParam: e
        }) => o.getEnvironmentWithCreators(e ? Ue : J, e, !1, S),
        getNextPageParam: e => e.cursor ?? null
    }), {
        data: De,
        isLoading: R,
        error: je,
        fetchNextPage: Me,
        hasNextPage: Pe,
        isFetchingNextPage: Fe
    } = ae({
        queryKey: ue({
            pageSize: J,
            enforceRepoAccess: !1,
            connectorId: j
        }),
        initialPageParam: Y,
        enabled: N === `gitlab` && _ && j != null && !O,
        queryFn: ({
            pageParam: e
        }) => o.getEnvironmentWithCreators(e ? Ue : J, e, !1, j),
        getNextPageParam: e => e.cursor ?? null
    }), {
        mutate: z
    } = oe({
        mutationFn: ({
            environmentId: e,
            isPinned: t
        }) => (s.setQueriesData({
            queryKey: fe
        }, t => t && a(t, t => {
            for (let n of t.pages)
                for (let t of n.items)
                    if (t.id === e) {
                        t.is_pinned = !t.is_pinned;
                        break
                    }
        })), s.setQueryData([`wham`, `environments`], n => n && n.map(n => n.id === e ? {
            ...n,
            is_pinned: t
        } : n)), s.setQueryData(ce, n => n?.map(n => n.id === e ? {
            ...n,
            is_pinned: t
        } : n)), o.updateEnvironment(e, {
            is_pinned: t
        })),
        onSettled: () => {
            le(s)
        },
        onError: () => {
            l.danger(c.formatMessage({
                id: `wham.environmentsList.failedToPinEnvironment`,
                defaultMessage: `Failed to pin environment`
            }))
        }
    }), B = be?.pages.flatMap(e => e.items) ?? [], Le = _ ? De?.pages.flatMap(e => e.items) ?? [] : [], V = N === `gitlab` ? Le : B, H = N === `gitlab` && _ && !O && !D, U = N === `github` && !T && !w, Be = N === `gitlab` ? O || R : T || L, Ve = N === `gitlab` ? O : T, W = N === `gitlab` ? je : Se, G = N === `gitlab` ? Pe : we, We = N === `gitlab` ? Fe : Ee, Ge = N === `gitlab` ? Me : Ce, X = v.trim().toLowerCase(), Z = V.filter(e => e.label.toLowerCase().includes(X)), Q = e => {
        let t = e.toLowerCase();
        return t === X ? 0 : t.startsWith(X) ? 1 : 2
    }, $ = Z.slice().sort((e, t) => {
        if (e.is_pinned !== t.is_pinned) return e.is_pinned ? -1 : 1;
        let n = Q(e.label) - Q(t.label);
        return n === 0 ? e.label.localeCompare(t.label) : n
    });
    return (0, K.useEffect)(() => {
        e?.({
            showGitLab: H,
            showGitHub: U
        })
    }, [e, U, H]), (0, q.jsxs)(q.Fragment, {
        children: [e == null && H && (0, q.jsx)(ke, {
            redirectAfter: `/codex/cloud/settings/environments?provider=gitlab`
        }), e == null && U && (0, q.jsx)(xe, {}), _ && (0, q.jsxs)(`div`, {
            className: `border-token-border-light flex flex-col border-b`,
            children: [(0, q.jsx)(Ie, {
                showBottomBorder: !1
            }), _e && (0, q.jsx)(Oe, {
                className: `mt-3`,
                value: N,
                onChange: e => {
                    x(e === `github` ? `github` : null);
                    let t = new URLSearchParams(r);
                    e === `gitlab` ? t.set(`provider`, e) : t.delete(`provider`), i(t, {
                        replace: !0
                    })
                }
            })]
        }), P && j && (0, q.jsx)(Re, {
            isConnected: D
        }), (0, q.jsxs)(`div`, {
            className: `flex flex-col gap-2`,
            children: [P && (0, q.jsxs)(`div`, {
                className: `flex flex-col gap-1 pb-3`,
                children: [(0, q.jsx)(`h2`, {
                    className: `text-base leading-6 font-semibold`,
                    children: (0, q.jsx)(C, {
                        id: `wham.environments.gitlab_activity.project_environments.title`,
                        defaultMessage: `Project environments`
                    })
                }), (0, q.jsx)(`p`, {
                    className: `text-token-text-tertiary text-sm`,
                    children: (0, q.jsx)(C, {
                        id: `wham.environments.gitlab_activity.project_environments.description`,
                        defaultMessage: `Set up environments for coding tasks or reviews, with project-specific secrets and network access.`
                    })
                })]
            }), (0, q.jsxs)(`div`, {
                className: `flex flex-row justify-between pb-4`,
                children: [(0, q.jsx)(`div`, {
                    className: `flex flex-row gap-2`,
                    children: (0, q.jsx)(pe, {
                        name: `search-environments`,
                        color: `search`,
                        containerInputClassName: `w-full`,
                        className: `text-token-text-primary flex h-8 w-full items-center rounded-md!`,
                        value: v,
                        disabled: Ve || W != null || !F,
                        onChange: e => {
                            let t = e.target.value;
                            y(t);
                            let n = new URLSearchParams(r);
                            t ? n.set(`search`, t) : n.delete(`search`), N === `gitlab` ? n.set(`provider`, `gitlab`) : n.delete(`provider`), i(n, {
                                replace: !0
                            })
                        },
                        placeholder: c.formatMessage({
                            id: `wham.environmentsList.searchEnvironmentsPlaceholder`,
                            defaultMessage: `Search environments`
                        }),
                        ariaLabel: c.formatMessage({
                            id: `wham.environmentsList.searchEnvironmentsAria`,
                            defaultMessage: `Search environments`
                        })
                    })
                }), (0, q.jsx)(ee, {
                    onClick: () => n(ve),
                    disabled: !F,
                    color: `primary`,
                    icon: he,
                    className: `h-8`,
                    "aria-label": c.formatMessage({
                        id: `wham.environmentsList.createEnvironmentAriaLabel`,
                        defaultMessage: `Link to create a new environment`
                    }),
                    children: (0, q.jsx)(`span`, {
                        className: `hidden md:inline`,
                        children: (0, q.jsx)(C, {
                            id: `wham.environmentsList.createEnvironment`,
                            defaultMessage: `Create environment`
                        })
                    })
                })]
            }), Be ? (0, q.jsx)(`div`, {
                className: `flex h-full items-center justify-center pt-5`,
                children: (0, q.jsx)(u, {})
            }) : W ? (0, q.jsx)(Ne, {
                title: c.formatMessage({
                    id: `wham.environmentsList.error`,
                    defaultMessage: `Failed to load environments`
                }),
                description: (0, q.jsx)(C, {
                    id: `wham.environmentsList.errorDescriptionWithHelpCenter`,
                    defaultMessage: `Please refresh the page and try again. If the problem continues, start a chat in the <helpCenter>Help Center</helpCenter>.`,
                    values: {
                        helpCenter: e => (0, q.jsx)(`a`, {
                            href: `https://help.openai.com/en/articles/6614161-how-can-i-contact-support`,
                            target: `_blank`,
                            rel: `noopener noreferrer`,
                            className: `underline`,
                            children: e
                        })
                    }
                })
            }) : V.length === 0 ? (0, q.jsx)(Ne, {
                title: c.formatMessage({
                    id: `wham.environmentsList.noEnvironments`,
                    defaultMessage: `No environments`
                }),
                description: c.formatMessage({
                    id: `wham.environmentsList.noEnvironmentsDescription`,
                    defaultMessage: `Create an environment for Codex to work in`
                })
            }) : (0, q.jsxs)(q.Fragment, {
                children: [(0, q.jsxs)(I.Root, {
                    className: `overflow-x-auto overflow-y-clip`,
                    disableScroll: !0,
                    children: [(0, q.jsxs)(I.Header, {
                        children: [(0, q.jsx)(I.HeaderCell, {
                            className: `ps-2 text-sm`,
                            children: (0, q.jsx)(C, {
                                id: `wham.environmentsList.name`,
                                defaultMessage: `Name`
                            })
                        }), (0, q.jsx)(I.HeaderCell, {
                            className: `text-sm`,
                            children: (0, q.jsx)(C, {
                                id: `wham.environmentsList.repo`,
                                defaultMessage: `Repo`
                            })
                        }), (0, q.jsx)(I.HeaderCell, {
                            className: `text-sm`,
                            children: (0, q.jsx)(C, {
                                id: `wham.environmentsList.numberOfTasks`,
                                defaultMessage: `Number of tasks`
                            })
                        }), h && (0, q.jsx)(I.HeaderCell, {
                            className: `text-sm`,
                            children: (0, q.jsx)(C, {
                                id: `wham.environmentsList.sharing`,
                                defaultMessage: `Sharing`
                            })
                        }), (0, q.jsx)(I.HeaderCell, {
                            className: `text-sm`,
                            children: (0, q.jsx)(C, {
                                id: `wham.environmentsList.creator`,
                                defaultMessage: `Creator`
                            })
                        }), (0, q.jsx)(I.HeaderCell, {
                            className: `text-sm`,
                            children: (0, q.jsx)(C, {
                                id: `wham.environmentsList.createdAt`,
                                defaultMessage: `Created at`
                            })
                        }), p && (0, q.jsx)(I.HeaderCell, {}), (0, q.jsx)(I.HeaderCell, {})]
                    }), (0, q.jsx)(I.Body, {
                        children: $.length === 0 && !G ? (0, q.jsx)(I.Row, {
                            children: (0, q.jsx)(I.Cell, {
                                colSpan: 100,
                                children: (0, q.jsx)(Ne, {
                                    title: c.formatMessage({
                                        id: `wham.environmentsList.search.noEnvironments`,
                                        defaultMessage: `No matches for {search}`
                                    }, {
                                        search: v
                                    }),
                                    description: c.formatMessage({
                                        id: `wham.environmentsList.search.noEnvironmentsDescription`,
                                        defaultMessage: `Create an environment for Codex to work in`
                                    })
                                })
                            })
                        }) : $.map(({
                            id: e,
                            label: t,
                            is_pinned: r,
                            repos: i,
                            repo_map: a,
                            creator: o,
                            created_at: s,
                            task_count: l,
                            share_settings: u
                        }) => {
                            let f = !!d?.authUserId && o.id.includes(d?.authUserId);
                            return (0, q.jsxs)(I.Row, {
                                role: `row`,
                                className: `group/row hover:bg-token-bg-tertiary h-14 px-2 text-sm hover:cursor-pointer`,
                                onClick: () => n(`/codex/cloud/settings/environment/${e}`),
                                tabIndex: 0,
                                "aria-label": c.formatMessage({
                                    id: `wham.environmentsList.environmentAriaLabel`,
                                    defaultMessage: `View environment {label}`
                                }, {
                                    label: t
                                }),
                                children: [(0, q.jsx)(I.Cell, {
                                    divClassName: `flex h-14 items-center group-hover/row:underline ps-2`,
                                    children: t
                                }), (0, q.jsx)(I.Cell, {
                                    divClassName: `flex h-14 items-center`,
                                    children: i.map(e => (0, q.jsx)(`div`, {
                                        children: a?.[e]?.repository_full_name ?? e
                                    }, e))
                                }), (0, q.jsx)(I.Cell, {
                                    divClassName: `flex h-14 items-center`,
                                    children: l
                                }), h && (0, q.jsx)(I.Cell, {
                                    divClassName: `flex h-14 items-center`,
                                    children: He(c, u)
                                }), (0, q.jsx)(I.Cell, {
                                    divClassName: `flex h-14 items-center`,
                                    children: o.email
                                }), (0, q.jsx)(I.Cell, {
                                    divClassName: `flex h-14 items-center`,
                                    children: s ? (0, q.jsx)(ie, {
                                        value: new Date(s * 1e3),
                                        year: `numeric`,
                                        month: `long`,
                                        day: `numeric`
                                    }) : (0, q.jsx)(C, {
                                        id: `wham.environmentsList.na`,
                                        defaultMessage: `N/A`
                                    })
                                }), p && (0, q.jsx)(ze, {
                                    isPinned: r,
                                    isCreator: f,
                                    onToggle: t => {
                                        t.stopPropagation(), z({
                                            environmentId: e,
                                            isPinned: !r
                                        })
                                    },
                                    intl: c
                                })]
                            }, e)
                        })
                    })]
                }), (0, q.jsx)(de, {
                    isFetchingNextPage: We,
                    hasNextPage: G ?? !1,
                    fetchNextPage: Ge
                })]
            })]
        })]
    })
}

function He(e, t) {
    switch (t) {
        case `public`:
            return e.formatMessage({
                id: `wham.environmentsList.public`,
                defaultMessage: `Public`
            });
        case `private`:
            return e.formatMessage({
                id: `wham.environmentsList.private`,
                defaultMessage: `Private`
            });
        case `workspace`:
            return e.formatMessage({
                id: `wham.environmentsList.workspace`,
                defaultMessage: `Workspace`
            });
        default:
            (0, G.assertNever)(t)
    }
}
var G, K, q, J, Ue, Y, We = e((() => {
    n(), N(), me(), ge(), j(), ve(), s(), k(), d(), v(), h(), b(), De(), be(), Ee(), je(), R(), L(), Me(), B(), U(), A(), c(), D(), G = t(_()), l(), i(), K = t(E()), w(), x(), q = S(), J = 25, Ue = 100, Y = null
}));

function Ge() {
    let e = g(`1437685011`),
        [t, n] = (0, X.useState)({
            showGitLab: !1,
            showGitHub: !1
        });
    return (0, Z.jsx)(Ce, {
        topPadding: !0,
        connectionAlert: e ? (0, Z.jsxs)(Z.Fragment, {
            children: [t.showGitLab && (0, Z.jsx)(ke, {
                redirectAfter: `/codex/cloud/settings/environments?provider=gitlab`
            }), t.showGitHub && (0, Z.jsx)(xe, {})]
        }) : void 0,
        children: (0, Z.jsxs)(`div`, {
            className: e ? `mx-auto flex h-full max-w-screen-xl flex-1 flex-col gap-8 ps-4 pe-4 md:pe-12` : `mx-auto flex h-full max-w-screen-xl flex-1 flex-col gap-4 ps-4 pe-4 md:pe-12`,
            children: [!e && (0, Z.jsx)(Ie, {}), (0, Z.jsx)(Be, {
                onConnectionAlertVisibilityChange: n
            })]
        })
    })
}
var X, Z, Q = e((() => {
        b(), Se(), R(), L(), B(), We(), X = t(E()), Z = S()
    })),
    $, Ke, qe, Je, Ye = e((() => {
        x(), $ = O(), Q(), Ke = S(), qe = () => [{
            title: `Codex`
        }], Je = T(function() {
            "use forget";
            let e = (0, $.c)(1),
                t;
            return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Ke.jsx)(Ge, {}), e[0] = t) : t = e[0], t
        })
    }));
e((() => {
    Ye()
}))();
export {
    Je as
    default, qe as meta
};
//# sourceMappingURL=codex.cloud.settings.environments-j5t4uhp2.js.map