const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/a8077c3c-ctlfp8cti06sv8cg.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-dfpv67hlp00pbohr.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-cy5f8pl0g26s86so.js", "assets/30901919-7dzdc1ou0jtwkwpt.js", "assets/c470f5ab-d4g7lc53n1e1ao7o.js", "assets/0e5afe53-o2mcfq1ky1uaktz5.js", "assets/conversation-small-j5v9ogf2.css"]))) => i.map(i => d[i]);
import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $X as r,
    At as i,
    BV as a,
    CE as o,
    DD as s,
    Ew as c,
    FO as l,
    Fat as u,
    HO as d,
    J5 as f,
    JT as p,
    L1 as m,
    MD as h,
    N5 as g,
    NV as _,
    PO as v,
    Q0 as y,
    QX as b,
    Rat as ee,
    Sw as x,
    Tw as te,
    Wnt as S,
    Wst as C,
    X0 as w,
    Xnt as ne,
    Y0 as re,
    Y5 as T,
    Z1 as ie,
    _2 as E,
    _nt as ae,
    aD as D,
    cn as oe,
    dD as se,
    h8 as ce,
    qT as O,
    t2 as le,
    tct as ue,
    wE as de,
    ww as fe,
    y2 as pe,
    ynt as me,
    zO as he
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as k,
    Ln as ge,
    Nn as A,
    Nt as _e,
    O as j,
    Q as ve,
    Rn as ye,
    Vn as be,
    cn as xe,
    it as M,
    ln as Se,
    s as Ce,
    zn as we
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Bzt as Te,
    Gh as Ee,
    Hh as De,
    Kh as Oe,
    MHn as ke,
    Mh as Ae,
    Nh as je,
    Oh as Me,
    PHn as Ne,
    Ph as Pe,
    Tdn as Fe,
    Vh as Ie,
    Vzt as Le,
    _h as Re,
    cMt as ze,
    gh as Be,
    sMt as Ve,
    vh as He,
    wdn as Ue
} from "./conversation-small-cy5f8pl0g26s86so.js";
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
} from "./30901919-7dzdc1ou0jtwkwpt.js";
import {
    Fn as Qe,
    Iv as $e,
    Ln as et,
    Mn as tt,
    Pn as nt,
    Pv as rt,
    Rn as it,
    zn as at
} from "./8b34dbc2-k1zgxrtsww83602u.js";

function F({
    resource: e,
    grayedOut: t,
    className: n
}) {
    let r = e.gizmo.vanity_metrics?.num_conversations_str;
    return (0, I.jsxs)(`div`, {
        className: f(`flex w-full grow items-center gap-4 overflow-hidden`, n),
        children: [(0, I.jsx)(Ve, {
            isFirstParty: !!e.gizmo.tags?.includes(_.FirstParty),
            src: e.gizmo.display.profile_picture_url ?? void 0,
            className: f(`h-12 w-12 shrink-0`, t && `grayscale group-hover:grayscale-0`)
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
        qe(), T(), Oe(), ze(), a(), I = k()
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
    let r = h(e, t);
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
            className: f(`no-scrollbar group flex min-h-[104px] items-center space-x-2 overflow-x-auto overflow-y-hidden`),
            children: e?.map(e => (0, z.jsx)(`a`, {
                onClick: () => {
                    ae.logEvent(`Detail Click Gizmo`, {
                        gizmo_id: e.gizmo.id
                    })
                },
                href: D(e),
                className: `bg-token-bg-primary h-fit min-w-fit rounded-xl px-1 py-4 md:px-3 md:py-4 lg:px-3`,
                children: (0, z.jsx)(F, {
                    resource: e
                })
            }, e.gizmo.id))
        })]
    })
}
var R, z, B, V, H, U, W, G, K, q, J, Y, X, lt, ut, dt, ft, pt, mt, Z, ht, Q, $, gt = e((() => {
    ue(), p(), Ne(), c(), Ye(), Je(), We(), Ke(), fe(), y(), De(), et(), je(), He(), d(), $e(), ce(), m(), pe(), me(), u(), ne(), w(), Ce(), T(), r(), Te(), i(), R = n(be()), ye(), ve(), de(), L(), se(), at(), l(), Fe(), z = k(), Se(), B = re(() => xe(() => import(`./a8077c3c-ctlfp8cti06sv8cg.js`).then(e => e.GizmoKeepInSidebarMenuItem), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))), V = 4, H = o.div`font-bold mt-6`, U = e => j({
        queryFn: async () => v.getAbout(e),
        queryKey: [`gizmo`, `about`, {
            gizmoId: e
        }]
    }), W = e => j({
        queryFn: async () => v.getCreatorSlice({
            creatorId: e
        }),
        queryKey: [`gizmo`, `creator`, {
            creatorId: e
        }],
        enabled: e != null
    }), G = e => {
        switch (e.type) {
            case C.BROWSER:
                return {
                    title: $.browsing
                };
            case C.CANVAS:
                return {
                    title: $.canvas
                };
            case C.PYTHON:
                return {
                    title: $.dataAnalysis
                };
            case C.DALLE:
            case C.IMAGE_GEN:
                return {
                    title: $.imageGeneration
                };
            case C.MEMORY:
                return {
                    title: $.memory, description: $.memoryDescription
                };
            case C.JIT_PLUGIN:
                return {
                    title: $.actions, description: $.actionsDescription
                };
            case C.CONNECTOR:
                return {
                    title: $.apps
                };
            default:
                return null
        }
    }, K = ({
        tools: e
    }) => {
        let t = ie(),
            n = t?.includes(E.SearchTool) && !t?.includes(E.SearchToolHoldout),
            r = Le(b(e?.map(G)), e => e.title.id);
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
    }, q = o.div`flex flex-col justify-center items-center gap-2 border-s border-token-border-heavy first:border-0 w-48 mt-4 px-2`, J = o.div`flex flex-row items-center gap-1.5 pt-1 text-xl font-semibold text-center leading-none`, Y = o.div`text-xs text-token-text-tertiary`, X = ({
        gizmoResource: e
    }) => (0, z.jsxs)(ke, {
        contentAlign: `end`,
        sideOffset: 4,
        triggerButton: (0, z.jsx)(O, {
            color: `ghost`,
            icon: Xe
        }),
        children: [(0, z.jsx)(B, {
            gizmoResource: e,
            location: `about_modal`
        }), (0, z.jsx)(Ue, {
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
            className: f(`group border-token-border-heavy bg-token-bg-primary hover:bg-token-bg-tertiary relative ms-2 h-14 min-w-full grow rounded-xl border px-4 focus:outline-hidden`),
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
        let n = S(`1825130190`),
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
    }) => S(`1825130190`) ? (0, z.jsxs)(`div`, {
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
        let a = s(e),
            o = U(e),
            c = W(t);
        return (0, R.useEffect)(() => {
            ae.logEvent(`Detail Show Modal`, {
                gizmo_id: e
            })
        }, [e]), (0, z.jsx)(x, {
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
                creatorSliceQuery: c,
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
        onClose: i,
        showDirectoryActions: a
    }) => {
        let o = we(),
            s = _e(),
            c = t.data,
            l = e.data?.about_blocks,
            u = e.data?.review_stats,
            d = n.data,
            p = g(() => a && S(`2160578039`)),
            m = g(() => p ? Ae(c) : void 0),
            h = g(() => p && Me(c) === `migrate` && m == null),
            _ = g(he),
            v = o.formatDate(_, {
                month: `long`,
                day: `numeric`,
                timeZone: `UTC`
            }),
            y = g(() => p && Pe(c)),
            b = g(() => Be(y ? void 0 : m)),
            x = g(() => Re(y ? void 0 : m)),
            C = m != null || h || y,
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
        }) : w || !c ? (0, z.jsx)(`div`, {
            className: `flex h-40 items-center justify-center pb-10`,
            children: (0, z.jsx)(`div`, {
                className: `px-4 text-sm text-red-500`,
                children: ee(w) || o.formatMessage({
                    id: `I3v3Oj`,
                    defaultMessage: `An error occurred loading this GPT.`
                })
            })
        }) : (0, z.jsxs)(`div`, {
            className: f(`flex h-full px-2 py-4`, p ? `bg-token-bg-primary flex-col` : `bg-token-bg-secondary`),
            children: [(0, z.jsxs)(`div`, {
                className: f(`relative flex grow flex-col gap-4 overflow-y-auto px-8 pt-16`, p && `min-h-0`, C ? `pb-4` : `pb-20`),
                children: [(0, z.jsx)(`div`, {
                    className: `absolute top-0`,
                    children: (0, z.jsxs)(`div`, {
                        className: f(`fixed start-4 end-4 z-10 flex items-center justify-end bg-linear-to-b to-transparent pb-2`, p ? `from-token-bg-primary` : `from-token-bg-secondary`),
                        children: [(0, z.jsx)(X, {
                            gizmoResource: c
                        }), (0, z.jsx)(te, {
                            onClick: i
                        })]
                    })
                }), !C && (0, z.jsx)(`div`, {
                    className: `absolute bottom-[64px]`,
                    children: (0, z.jsx)(`div`, {
                        className: f(`fixed start-4 end-4 z-10 flex min-h-[64px] items-end bg-linear-to-t to-transparent px-2`, p ? `from-token-bg-primary` : `from-token-bg-secondary`),
                        children: p ? (0, z.jsx)(Q, {
                            as: `link`,
                            to: D(c),
                            onClick: i
                        }) : r
                    })
                }), (0, z.jsx)(it, {
                    gizmo: c,
                    className: `h-fit! bg-transparent dark:bg-transparent`,
                    avatarClassName: `h-20! w-20!`
                }), l && (0, z.jsx)(ut, {
                    blocks: l
                }), !l && e.isLoading && (0, z.jsx)(`div`, {
                    className: `flex justify-center gap-4`,
                    children: [...[, , , ]].map((e, t) => (0, z.jsx)(`div`, {
                        className: `bg-token-bg-tertiary h-16 w-32 animate-pulse rounded-xl`
                    }, t))
                }), (0, z.jsx)(ft, {
                    gizmo: c,
                    onClose: i
                }), !m && (0, z.jsx)(K, {
                    tools: c.tools
                }), !m && u && (0, z.jsx)(pt, {
                    reviewStats: u
                }), !m && !u && e.isLoading && (0, z.jsx)(`div`, {
                    className: `space-y-2`,
                    children: [...[, , , ]].map((e, t) => (0, z.jsx)(`div`, {
                        className: `bg-token-bg-tertiary h-4 w-full animate-pulse rounded`
                    }, t))
                }), !m && d && (0, z.jsx)(ct, {
                    gizmos: d.items
                }), !m && !d && n.isLoading && (0, z.jsx)(`div`, {
                    className: `flex gap-2`,
                    children: [...[, , , , ]].map((e, t) => (0, z.jsx)(`div`, {
                        className: `bg-token-bg-tertiary h-24 w-24 animate-pulse rounded-xl`
                    }, t))
                })]
            }), C && (0, z.jsxs)(`div`, {
                className: `flex shrink-0 flex-col gap-2 px-4 pt-2 pb-4`,
                children: [y && (0, z.jsx)(tt, {
                    surface: m ? `migrated` : `gpt`,
                    onKeepUsingGpt: m ? () => {
                        i(), s(D(c))
                    } : void 0
                }), h && (0, z.jsx)(Qe, {
                    deadline: _,
                    migrateCurrentGpt: !0,
                    stackedAction: !0,
                    title: (0, z.jsx)(A, {
                        id: `gizmo.about.pluginMigration.notice.title`,
                        defaultMessage: `Migrate this GPT to a plugin by {deadline}`,
                        values: {
                            deadline: v
                        }
                    }),
                    description: (0, z.jsx)(A, {
                        id: `gizmo.about.pluginMigration.notice.description.editing_locked`,
                        defaultMessage: `Migrate to a plugin so people can keep using it after {deadline}. Once migrated, the original GPT can no longer be edited. You can make future updates to the plugin.`,
                        values: {
                            deadline: v
                        }
                    }),
                    onMigrate: () => {
                        i(), le(Ie, {
                            gizmoId: c.gizmo.id,
                            gizmoName: c.gizmo.display.name,
                            gizmoTools: c.tools
                        })
                    }
                }), m && !y && (0, z.jsx)(nt, {
                    gptName: c.gizmo.display.name,
                    pluginId: m,
                    adminUrl: x,
                    canAccessPlugin: b === `allowed`,
                    isPluginAccessPending: b === `pending`,
                    stackedAction: !0,
                    onUsePlugin: i,
                    onExplore: () => {
                        i(), s(rt())
                    }
                }), y && m ? null : y ? (0, z.jsx)(Q, {
                    as: `link`,
                    to: D(c),
                    onClick: i
                }) : (0, z.jsx)(M, {
                    to: D(c),
                    onClick: i,
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
    }), $ = ge({
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
//# sourceMappingURL=a600b597-mkszoatxmwwger2a.js.map