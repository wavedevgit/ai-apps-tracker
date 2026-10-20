const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/a8077c3c-b6fnvmvytp8zkdag.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-ed29bs6yiwucn7st.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/conversation-small-l6tnsr2xfn2d55kk.js", "assets/30901919-om7b3qf5hp4j9x4l.js", "assets/c470f5ab-d0jxi6yggehv1yt2.js", "assets/0e5afe53-goyw8fd3qndq8rq5.js", "assets/conversation-small-ixfdle4i.css"]))) => i.map(i => d[i]);
import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $X as r,
    A5 as i,
    At as a,
    BV as o,
    Bnt as s,
    Bst as c,
    CE as l,
    DD as u,
    Ew as d,
    FO as f,
    G5 as p,
    HO as m,
    I1 as h,
    J0 as g,
    JT as _,
    K5 as v,
    Knt as y,
    MD as b,
    NV as x,
    PO as S,
    Pat as ee,
    QX as C,
    Sw as w,
    Tw as te,
    X1 as ne,
    Y0 as re,
    Z0 as ie,
    Zst as ae,
    aD as T,
    cn as oe,
    dD as se,
    e2 as ce,
    f8 as le,
    g2 as E,
    hnt as ue,
    jat as de,
    pnt as D,
    qT as O,
    v2 as fe,
    wE as pe,
    ww as me,
    zO as he
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    $ as ge,
    Bn as k,
    Ln as _e,
    Nn as A,
    O as j,
    Pt as ve,
    Rn as ye,
    Vn as be,
    at as M,
    cn as xe,
    ln as Se,
    s as Ce,
    zn as we
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Cdn as Te,
    Gh as Ee,
    Hh as De,
    IHn as Oe,
    Kh as ke,
    Lzt as Ae,
    Mh as je,
    Nh as Me,
    Oh as Ne,
    Ph as Pe,
    RHn as Fe,
    Rzt as Ie,
    Sdn as Le,
    Vh as Re,
    _h as ze,
    aMt as Be,
    gh as Ve,
    iMt as He,
    vh as Ue
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    $v as N,
    Ax as We,
    Jy as Ge,
    Qv as Ke,
    Tv as qe,
    Yy as Je,
    dS as Ye,
    kx as Xe,
    uS as P,
    wv as Ze
} from "./30901919-om7b3qf5hp4j9x4l.js";
import {
    Fn as Qe,
    Fv as $e,
    Ln as et,
    Mn as tt,
    Nv as nt,
    Pn as rt,
    Rn as it,
    zn as at
} from "./8b34dbc2-j8rcexxiltkm8ucr.js";

function F({
    resource: e,
    grayedOut: t,
    className: n
}) {
    let r = e.gizmo.vanity_metrics?.num_conversations_str;
    return (0, I.jsxs)(`div`, {
        className: p(`flex w-full grow items-center gap-4 overflow-hidden`, n),
        children: [(0, I.jsx)(He, {
            isFirstParty: !!e.gizmo.tags?.includes(x.FirstParty),
            src: e.gizmo.display.profile_picture_url ?? void 0,
            className: p(`h-12 w-12 shrink-0`, t && `grayscale group-hover:grayscale-0`)
        }), (0, I.jsxs)(`div`, {
            className: `overflow-hidden break-words text-ellipsis`,
            children: [(0, I.jsx)(`span`, {
                className: `line-clamp-2 text-sm leading-tight font-semibold`,
                children: e.gizmo.display.name
            }), (0, I.jsx)(`span`, {
                className: `line-clamp-3 text-xs`,
                children: e.gizmo.display.description
            }), (0, I.jsxs)(`div`, {
                className: `text-token-text-tertiary mt-1 flex items-center gap-1 pe-1 text-xs text-ellipsis whitespace-nowrap`,
                children: [(0, I.jsx)(Ee, {
                    gizmo: e,
                    className: `text-xs`,
                    hideLink: !0
                }), r && (0, I.jsxs)(I.Fragment, {
                    children: [(0, I.jsx)(`span`, {
                        className: `text-[8px]`,
                        children: `•`
                    }), (0, I.jsx)(Ze, {
                        className: `h-3 w-3`
                    }), r]
                })]
            })]
        })]
    })
}
var I, L = e((() => {
        qe(), v(), ke(), Be(), o(), I = k()
    })),
    ot = t({
        GizmoAboutModal: () => Z,
        GizmoDetailsModal: () => mt,
        GizmoStartChatButton: () => Q
    });

function st({
    gizmo: e,
    prompt: t,
    onClick: n
}) {
    let r = b(e, t);
    return (0, z.jsx)(dt, {
        href: r?.toString() ?? `#`,
        onClick: n,
        children: t
    })
}

function ct({
    gizmos: e
}) {
    return e.length === 0 ? null : (0, z.jsxs)(`div`, {
        className: `flex flex-col`,
        children: [(0, z.jsx)(`div`, {
            className: `mb-2`,
            children: (0, z.jsx)(H, {
                children: (0, z.jsx)(A, {
                    id: `gizmo.about.moreByHeader`,
                    defaultMessage: `More by {creatorName}`,
                    values: {
                        creatorName: e[0].gizmo.author.display_name
                    }
                })
            })
        }), (0, z.jsx)(`div`, {
            className: p(`no-scrollbar group flex min-h-[104px] items-center space-x-2 overflow-x-auto overflow-y-hidden`),
            children: e?.map(e => (0, z.jsx)(`a`, {
                onClick: () => {
                    D.logEvent(`Detail Click Gizmo`, {
                        gizmo_id: e.gizmo.id
                    })
                },
                href: T(e),
                className: `bg-token-bg-primary h-fit min-w-fit rounded-xl px-1 py-4 md:px-3 md:py-4 lg:px-3`,
                children: (0, z.jsx)(F, {
                    resource: e
                })
            }, e.gizmo.id))
        })]
    })
}
var R, z, B, V, H, U, W, G, K, q, J, Y, X, lt, ut, dt, ft, pt, mt, Z, ht, Q, $, gt = e((() => {
    ae(), _(), Fe(), d(), Ye(), Je(), We(), Ke(), me(), ie(), De(), et(), Me(), Ue(), m(), $e(), le(), h(), fe(), ue(), de(), y(), re(), Ce(), v(), r(), Ae(), a(), R = n(be()), ye(), ge(), pe(), L(), se(), at(), f(), Te(), z = k(), Se(), B = g(() => xe(() => import(`./a8077c3c-b6fnvmvytp8zkdag.js`).then(e => e.GizmoKeepInSidebarMenuItem), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))), V = 4, H = l.div`font-bold mt-6`, U = e => j({
        queryFn: async () => S.getAbout(e),
        queryKey: [`gizmo`, `about`, {
            gizmoId: e
        }]
    }), W = e => j({
        queryFn: async () => S.getCreatorSlice({
            creatorId: e
        }),
        queryKey: [`gizmo`, `creator`, {
            creatorId: e
        }],
        enabled: e != null
    }), G = e => {
        switch (e.type) {
            case c.BROWSER:
                return {
                    title: $.browsing
                };
            case c.CANVAS:
                return {
                    title: $.canvas
                };
            case c.PYTHON:
                return {
                    title: $.dataAnalysis
                };
            case c.DALLE:
            case c.IMAGE_GEN:
                return {
                    title: $.imageGeneration
                };
            case c.MEMORY:
                return {
                    title: $.memory, description: $.memoryDescription
                };
            case c.JIT_PLUGIN:
                return {
                    title: $.actions, description: $.actionsDescription
                };
            case c.CONNECTOR:
                return {
                    title: $.apps
                };
            default:
                return null
        }
    }, K = ({
        tools: e
    }) => {
        let t = ne(),
            n = t?.includes(E.SearchTool) && !t?.includes(E.SearchToolHoldout),
            r = Ie(C(e?.map(G)), e => e.title.id);
        return r.length === 0 ? null : (n && (r = r.map(e => e.title === $.browsing ? {
            title: $.search
        } : e)), (0, z.jsxs)(`div`, {
            className: `flex flex-col`,
            children: [(0, z.jsx)(H, {
                className: `mb-2`,
                children: (0, z.jsx)(A, {
                    id: `gizmo.about.capabilitiesHeader`,
                    defaultMessage: `Capabilities`
                })
            }), r.map(e => (0, z.jsxs)(`div`, {
                className: `flex flex-row items-start gap-2 py-1 text-sm`,
                children: [(0, z.jsx)(Ge, {
                    className: `icon-sm mt-0.5 text-green-600`
                }), (0, z.jsxs)(`div`, {
                    children: [(0, z.jsx)(A, {
                        ...e.title
                    }), e.description != null && (0, z.jsx)(`div`, {
                        className: `text-token-text-tertiary text-xs`,
                        children: (0, z.jsx)(A, {
                            ...e.description
                        })
                    })]
                })]
            }, e.title.id))]
        }))
    }, q = l.div`flex flex-col justify-center items-center gap-2 border-s border-token-border-heavy first:border-0 w-48 mt-4 px-2`, J = l.div`flex flex-row items-center gap-1.5 pt-1 text-xl font-semibold text-center leading-none`, Y = l.div`text-xs text-token-text-tertiary`, X = ({
        gizmoResource: e
    }) => (0, z.jsxs)(Oe, {
        contentAlign: `end`,
        sideOffset: 4,
        triggerButton: (0, z.jsx)(O, {
            color: `ghost`,
            icon: Xe
        }),
        children: [(0, z.jsx)(B, {
            gizmoResource: e,
            location: `about_modal`
        }), (0, z.jsx)(Le, {
            gizmoResource: e
        })]
    }), lt = ({
        aboutBlock: e
    }) => {
        switch (e.type) {
            case `generic_title_subtitle`:
                return (0, z.jsxs)(q, {
                    children: [(0, z.jsx)(J, {
                        children: e.title
                    }), (0, z.jsx)(Y, {
                        children: e.subtitle
                    })]
                });
            case `rating`:
                return (0, z.jsxs)(q, {
                    children: [(0, z.jsxs)(J, {
                        children: [(0, z.jsx)(N, {
                            className: `icon-sm`
                        }), e.avg]
                    }), (0, z.jsx)(Y, {
                        children: e.count_str
                    })]
                });
            case `category`:
                return e.category_ranking == null ? (0, z.jsxs)(q, {
                    children: [(0, z.jsx)(J, {
                        children: e.category_str
                    }), (0, z.jsx)(Y, {
                        children: (0, z.jsx)(A, {
                            id: `gizmo.about.category`,
                            defaultMessage: `Category`
                        })
                    })]
                }) : (0, z.jsxs)(q, {
                    children: [(0, z.jsx)(J, {
                        children: (0, z.jsx)(A, {
                            id: `gizmo.about.trendingRank`,
                            defaultMessage: `#{rank}`,
                            values: {
                                rank: e.category_ranking
                            }
                        })
                    }), (0, z.jsx)(Y, {
                        children: (0, z.jsx)(A, {
                            id: `gizmo.about.inCategory`,
                            defaultMessage: `in {category} {locale}`,
                            values: {
                                category: e.category_str,
                                locale: e.category_locale_str ?? ``
                            }
                        })
                    })]
                })
        }
    }, ut = ({
        blocks: e
    }) => (0, z.jsx)(`div`, {
        className: `flex justify-center`,
        children: e.map(e => (0, z.jsx)(lt, {
            aboutBlock: e
        }, e.type))
    }), dt = ({
        href: e,
        onClick: t,
        children: n
    }) => (0, z.jsx)(oe.div, {
        whileTap: {
            scale: .98
        },
        className: `flex`,
        children: (0, z.jsxs)(M, {
            to: e,
            reloadDocument: !0,
            onClick: t,
            className: p(`group border-token-border-heavy bg-token-bg-primary hover:bg-token-bg-tertiary relative ms-2 h-14 min-w-full grow rounded-xl border px-4 focus:outline-hidden`),
            children: [(0, z.jsx)(`div`, {
                className: `flex h-full items-center`,
                children: (0, z.jsx)(`div`, {
                    className: `line-clamp-2 text-sm break-all`,
                    children: n
                })
            }), (0, z.jsx)(`div`, {
                className: `border-token-border-heavy bg-token-bg-primary group-hover:bg-token-bg-tertiary absolute -start-2 -bottom-px h-3 w-4 border-b`,
                children: (0, z.jsx)(`div`, {
                    className: `border-token-border-heavy bg-token-bg-primary h-3 w-2 rounded-ee-full border-e border-b`
                })
            }), (0, z.jsx)(`div`, {
                className: `absolute end-2 top-0 bottom-0 hidden items-center group-hover:flex`,
                children: (0, z.jsx)(`div`, {
                    className: `bg-token-bg-secondary flex h-8 w-8 items-center justify-center rounded-lg`,
                    children: (0, z.jsx)(P, {
                        className: `icon text-token-text-primary`
                    })
                })
            })]
        })
    }), ft = ({
        gizmo: e,
        onClose: t
    }) => {
        let n = s(`1825130190`),
            r = e.gizmo.display.prompt_starters?.slice(0, V);
        return r == null || r.length === 0 || !n ? null : (0, z.jsxs)(`div`, {
            className: `flex flex-col`,
            children: [(0, z.jsx)(H, {
                children: (0, z.jsx)(A, {
                    id: `gizmo.about.conversationStartersHeader`,
                    defaultMessage: `Conversation Starters`
                })
            }), (0, z.jsx)(`div`, {
                className: `mt-4 grid grid-cols-2 gap-x-1.5 gap-y-2`,
                children: r.map((n, r) => (0, z.jsx)(st, {
                    gizmo: e,
                    prompt: n,
                    onClick: t
                }, r))
            })]
        })
    }, pt = ({
        reviewStats: e
    }) => s(`1825130190`) ? (0, z.jsxs)(`div`, {
        className: `flex flex-col`,
        children: [(0, z.jsx)(`div`, {
            className: `mb-2`,
            children: (0, z.jsx)(H, {
                children: (0, z.jsx)(A, {
                    id: `gizmo.about.ratingsHeader`,
                    defaultMessage: `Ratings`
                })
            })
        }), e == null ? (0, z.jsx)(`div`, {
            className: `text-token-text-tertiary text-sm`,
            children: (0, z.jsx)(A, {
                id: `gizmo.about.ratings.notEnoughRatings`,
                defaultMessage: `Not enough ratings yet`
            })
        }) : [5, 4, 3, 2, 1].map(t => (0, z.jsxs)(`div`, {
            className: `flex flex-row items-center gap-2 py-1 text-xl font-semibold`,
            children: [(0, z.jsxs)(`div`, {
                className: `icon-lg relative`,
                children: [(0, z.jsx)(N, {
                    className: `icon-lg text-green-500`
                }), (0, z.jsx)(`div`, {
                    className: `absolute inset-0 flex items-center justify-center text-[11px] text-white`,
                    children: t
                })]
            }), (0, z.jsx)(`div`, {
                className: `bg-token-bg-tertiary h-2.5 grow overflow-hidden rounded-full`,
                children: (0, z.jsx)(`div`, {
                    className: `h-full bg-green-500`,
                    style: {
                        width: `${(e?.by_rating[t-1]??0)*100}%`
                    }
                })
            })]
        }, t))]
    }) : null, mt = ({
        gizmoId: e,
        creatorId: t,
        onClose: n
    }) => (0, z.jsx)(Z, {
        gizmoId: e,
        creatorId: t,
        onClose: n
    }), Z = ({
        gizmoId: e,
        creatorId: t,
        onClose: n,
        children: r,
        showDirectoryActions: i = !1
    }) => {
        let a = u(e),
            o = U(e),
            s = W(t);
        return (0, R.useEffect)(() => {
            D.logEvent(`Detail Show Modal`, {
                gizmo_id: e
            })
        }, [e]), (0, z.jsx)(w, {
            testId: `modal-gizmo-about`,
            isOpen: !0,
            onClose: n,
            type: `success`,
            hideSeparator: !0,
            noPadding: !0,
            className: `flex h-[calc(100vh-25rem)] min-h-[40vh] max-w-xl flex-col`,
            children: (0, z.jsx)(ht, {
                aboutQuery: o,
                gizmoQuery: a,
                creatorSliceQuery: s,
                onClose: n,
                showDirectoryActions: i,
                children: r
            })
        })
    }, ht = ({
        aboutQuery: e,
        gizmoQuery: t,
        creatorSliceQuery: n,
        children: r,
        onClose: a,
        showDirectoryActions: o
    }) => {
        let c = we(),
            l = ve(),
            u = t.data,
            d = e.data?.about_blocks,
            f = e.data?.review_stats,
            m = n.data,
            h = i(() => o && s(`2160578039`)),
            g = i(() => h ? je(u) : void 0),
            _ = i(() => h && Ne(u) === `migrate` && g == null),
            v = i(he),
            y = c.formatDate(v, {
                month: `long`,
                day: `numeric`,
                timeZone: `UTC`
            }),
            b = i(() => h && Pe(u)),
            x = i(() => Ve(b ? void 0 : g)),
            S = i(() => ze(b ? void 0 : g)),
            C = g != null || _ || b,
            w = t.error;
        return t.isLoading ? (0, z.jsx)(`div`, {
            className: `flex h-full items-center justify-center pb-10`,
            children: (0, z.jsxs)(`div`, {
                className: `animate-pulse space-y-4 text-center`,
                children: [(0, z.jsx)(`div`, {
                    className: `mx-auto h-20 w-20 rounded-xl bg-gray-200 dark:bg-gray-700`
                }), (0, z.jsx)(`div`, {
                    className: `mx-auto h-6 w-40 rounded bg-gray-200 dark:bg-gray-700`
                }), (0, z.jsx)(`div`, {
                    className: `mx-auto h-4 w-64 rounded bg-gray-200 dark:bg-gray-700`
                })]
            })
        }) : w || !u ? (0, z.jsx)(`div`, {
            className: `flex h-40 items-center justify-center pb-10`,
            children: (0, z.jsx)(`div`, {
                className: `px-4 text-sm text-red-500`,
                children: ee(w) || c.formatMessage({
                    id: `I3v3Oj`,
                    defaultMessage: `An error occurred loading this GPT.`
                })
            })
        }) : (0, z.jsxs)(`div`, {
            className: p(`flex h-full px-2 py-4`, h ? `bg-token-bg-primary flex-col` : `bg-token-bg-secondary`),
            children: [(0, z.jsxs)(`div`, {
                className: p(`relative flex grow flex-col gap-4 overflow-y-auto px-8 pt-16`, h && `min-h-0`, C ? `pb-4` : `pb-20`),
                children: [(0, z.jsx)(`div`, {
                    className: `absolute top-0`,
                    children: (0, z.jsxs)(`div`, {
                        className: p(`fixed start-4 end-4 z-10 flex items-center justify-end bg-linear-to-b to-transparent pb-2`, h ? `from-token-bg-primary` : `from-token-bg-secondary`),
                        children: [(0, z.jsx)(X, {
                            gizmoResource: u
                        }), (0, z.jsx)(te, {
                            onClick: a
                        })]
                    })
                }), !C && (0, z.jsx)(`div`, {
                    className: `absolute bottom-[64px]`,
                    children: (0, z.jsx)(`div`, {
                        className: p(`fixed start-4 end-4 z-10 flex min-h-[64px] items-end bg-linear-to-t to-transparent px-2`, h ? `from-token-bg-primary` : `from-token-bg-secondary`),
                        children: h ? (0, z.jsx)(Q, {
                            as: `link`,
                            to: T(u),
                            onClick: a
                        }) : r
                    })
                }), (0, z.jsx)(it, {
                    gizmo: u,
                    className: `h-fit! bg-transparent dark:bg-transparent`,
                    avatarClassName: `h-20! w-20!`
                }), d && (0, z.jsx)(ut, {
                    blocks: d
                }), !d && e.isLoading && (0, z.jsx)(`div`, {
                    className: `flex justify-center gap-4`,
                    children: [...[, , , ]].map((e, t) => (0, z.jsx)(`div`, {
                        className: `bg-token-bg-tertiary h-16 w-32 animate-pulse rounded-xl`
                    }, t))
                }), (0, z.jsx)(ft, {
                    gizmo: u,
                    onClose: a
                }), !g && (0, z.jsx)(K, {
                    tools: u.tools
                }), !g && f && (0, z.jsx)(pt, {
                    reviewStats: f
                }), !g && !f && e.isLoading && (0, z.jsx)(`div`, {
                    className: `space-y-2`,
                    children: [...[, , , ]].map((e, t) => (0, z.jsx)(`div`, {
                        className: `bg-token-bg-tertiary h-4 w-full animate-pulse rounded`
                    }, t))
                }), !g && m && (0, z.jsx)(ct, {
                    gizmos: m.items
                }), !g && !m && n.isLoading && (0, z.jsx)(`div`, {
                    className: `flex gap-2`,
                    children: [...[, , , , ]].map((e, t) => (0, z.jsx)(`div`, {
                        className: `bg-token-bg-tertiary h-24 w-24 animate-pulse rounded-xl`
                    }, t))
                })]
            }), C && (0, z.jsxs)(`div`, {
                className: `flex shrink-0 flex-col gap-2 px-4 pt-2 pb-4`,
                children: [b && (0, z.jsx)(tt, {
                    surface: g ? `migrated` : `gpt`,
                    onKeepUsingGpt: g ? () => {
                        a(), l(T(u))
                    } : void 0
                }), _ && (0, z.jsx)(Qe, {
                    deadline: v,
                    migrateCurrentGpt: !0,
                    stackedAction: !0,
                    title: (0, z.jsx)(A, {
                        id: `gizmo.about.pluginMigration.notice.title`,
                        defaultMessage: `Migrate this GPT to a plugin by {deadline}`,
                        values: {
                            deadline: y
                        }
                    }),
                    description: (0, z.jsx)(A, {
                        id: `gizmo.about.pluginMigration.notice.description.editing_locked`,
                        defaultMessage: `Migrate to a plugin so people can keep using it after {deadline}. Once migrated, the original GPT can no longer be edited. You can make future updates to the plugin.`,
                        values: {
                            deadline: y
                        }
                    }),
                    onMigrate: () => {
                        a(), ce(Re, {
                            gizmoId: u.gizmo.id,
                            gizmoName: u.gizmo.display.name,
                            gizmoTools: u.tools
                        })
                    }
                }), g && !b && (0, z.jsx)(rt, {
                    gptName: u.gizmo.display.name,
                    pluginId: g,
                    adminUrl: S,
                    canAccessPlugin: x === `allowed`,
                    isPluginAccessPending: x === `pending`,
                    stackedAction: !0,
                    onUsePlugin: a,
                    onExplore: () => {
                        a(), l(nt())
                    }
                }), b && g ? null : b ? (0, z.jsx)(Q, {
                    as: `link`,
                    to: T(u),
                    onClick: a
                }) : (0, z.jsx)(M, {
                    to: T(u),
                    onClick: a,
                    className: `text-token-text-primary self-center py-2 text-sm underline underline-offset-4`,
                    children: (0, z.jsx)(A, {
                        id: `gizmo.about.pluginMigration.start_chat.label`,
                        defaultMessage: `Start chat`
                    })
                })]
            })]
        })
    }, Q = e => (0, z.jsx)(`div`, {
        className: `flex grow flex-col items-center`,
        children: (0, z.jsxs)(O, {
            color: `primary`,
            className: `h-12 w-full`,
            icon: P,
            ...e,
            children: [(0, z.jsx)(A, {
                id: `gizmo.about.startChat`,
                defaultMessage: `Start Chat`
            }), e.children]
        })
    }), $ = _e({
        browsing: {
            id: `gizmo.about.tools.browsing`,
            defaultMessage: `Browsing`
        },
        canvas: {
            id: `gizmo.about.tools.canvas`,
            defaultMessage: `Canvas`
        },
        search: {
            id: `gizmo.about.tools.search`,
            defaultMessage: `Web Search`
        },
        dataAnalysis: {
            id: `gizmo.about.tools.dataAnalysis`,
            defaultMessage: `Code Interpreter & Data Analysis`
        },
        apps: {
            id: `gizmo.about.tools.apps`,
            defaultMessage: `Apps`
        },
        imageGeneration: {
            id: `gizmo.about.tools.imageGeneration`,
            defaultMessage: `Image Generation`
        },
        memory: {
            id: `gizmo.about.tools.memory`,
            defaultMessage: `Memory`
        },
        actions: {
            id: `gizmo.about.tools.actions`,
            defaultMessage: `Actions`
        },
        actionsDescription: {
            id: `gizmo.about.tools.actionsDescription`,
            defaultMessage: `Retrieves or takes actions outside of ChatGPT`
        },
        memoryDescription: {
            id: `gizmo.about.tools.memoryDescription`,
            defaultMessage: `Learns from previous chats to improve future conversations`
        }
    })
}));
export {
    F as a, gt as i, ot as n, L as o, Q as r, Z as t
};
//# sourceMappingURL=a600b597-ikiv8y5lvegedalr.js.map