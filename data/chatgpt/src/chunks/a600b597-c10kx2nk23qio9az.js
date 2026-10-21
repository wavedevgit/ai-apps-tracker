const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/a8077c3c-njcmd2v0evwo6rqc.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-bo7e0c29ngt4zgx0.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-ikg0dwuw782klweb.js", "assets/30901919-e8h11sw136qen6v0.js", "assets/c470f5ab-ab47eubabs8jspdc.js", "assets/0e5afe53-esm68l11os61djoy.js", "assets/conversation-small-oilgsqfa.css"]))) => i.map(i => d[i]);
import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $0 as r,
    $X as i,
    At as a,
    BO as o,
    Cw as s,
    Dw as c,
    Ew as ee,
    FO as l,
    Gnt as u,
    Gst as d,
    IO as f,
    Iat as p,
    JT as m,
    ND as h,
    OD as g,
    P5 as _,
    PV as v,
    Q1 as y,
    R1 as b,
    TE as x,
    Tw as S,
    UO as C,
    VV as w,
    X0 as te,
    X5 as T,
    Y5 as E,
    YT as ne,
    Z0 as re,
    Znt as ie,
    b2 as ae,
    bnt as oe,
    cn as se,
    eZ as ce,
    fD as le,
    g8 as ue,
    n2 as de,
    nct as fe,
    oD as D,
    v2 as O,
    vnt as k,
    wE as A,
    zat as pe
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Bn as j,
    Ln as me,
    Nn as M,
    Nt as he,
    O as N,
    Q as ge,
    Rn as _e,
    Vn as ve,
    cn as ye,
    it as P,
    ln as be,
    s as xe,
    zn as Se
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Ddn as Ce,
    FHn as we,
    Fh as Te,
    Hh as Ee,
    Kh as De,
    LHn as Oe,
    Nh as ke,
    Odn as Ae,
    Ph as je,
    Uh as Me,
    Uzt as Ne,
    Wzt as Pe,
    _h as Fe,
    dMt as Ie,
    kh as Le,
    qh as Re,
    uMt as ze,
    vh as Be,
    yh as Ve
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    $v as F,
    Ax as He,
    Jy as Ue,
    Qv as We,
    Tv as Ge,
    Yy as Ke,
    dS as qe,
    kx as Je,
    uS as I,
    wv as Ye
} from "./30901919-e8h11sw136qen6v0.js";
import {
    Fn as Xe,
    Iv as Ze,
    Ln as Qe,
    Mn as $e,
    Pn as et,
    Pv as tt,
    Rn as nt,
    zn as rt
} from "./8b34dbc2-dtawqv9t1aqckqj4.js";

function L({
    resource: e,
    grayedOut: t,
    className: n
}) {
    let r = e.gizmo.vanity_metrics?.num_conversations_str;
    return (0, R.jsxs)(`div`, {
        className: E(`flex w-full grow items-center gap-4 overflow-hidden`, n),
        children: [(0, R.jsx)(ze, {
            isFirstParty: !!e.gizmo.tags?.includes(v.FirstParty),
            src: e.gizmo.display.profile_picture_url ?? void 0,
            className: E(`h-12 w-12 shrink-0`, t && `grayscale group-hover:grayscale-0`)
        }), (0, R.jsxs)(`div`, {
            className: `overflow-hidden break-words text-ellipsis`,
            children: [(0, R.jsx)(`span`, {
                className: `line-clamp-2 text-sm leading-tight font-semibold`,
                children: e.gizmo.display.name
            }), (0, R.jsx)(`span`, {
                className: `line-clamp-3 text-xs`,
                children: e.gizmo.display.description
            }), (0, R.jsxs)(`div`, {
                className: `text-token-text-tertiary mt-1 flex items-center gap-1 pe-1 text-xs text-ellipsis whitespace-nowrap`,
                children: [(0, R.jsx)(De, {
                    gizmo: e,
                    className: `text-xs`,
                    hideLink: !0
                }), r && (0, R.jsxs)(R.Fragment, {
                    children: [(0, R.jsx)(`span`, {
                        className: `text-[8px]`,
                        children: `•`
                    }), (0, R.jsx)(Ye, {
                        className: `h-3 w-3`
                    }), r]
                })]
            })]
        })]
    })
}
var R, z = e((() => {
        Ge(), T(), Re(), Ie(), w(), R = j()
    })),
    it = t({
        GizmoAboutModal: () => X,
        GizmoDetailsModal: () => ht,
        GizmoStartChatButton: () => Q
    });

function at({
    gizmo: e,
    prompt: t,
    onClick: n
}) {
    let r = h(e, t);
    return (0, V.jsx)(ft, {
        href: r?.toString() ?? `#`,
        onClick: n,
        children: t
    })
}

function ot({
    gizmos: e
}) {
    return e.length === 0 ? null : (0, V.jsxs)(`div`, {
        className: `flex flex-col`,
        children: [(0, V.jsx)(`div`, {
            className: `mb-2`,
            children: (0, V.jsx)(W, {
                children: (0, V.jsx)(M, {
                    id: `gizmo.about.moreByHeader`,
                    defaultMessage: `More by {creatorName}`,
                    values: {
                        creatorName: e[0].gizmo.author.display_name
                    }
                })
            })
        }), (0, V.jsx)(`div`, {
            className: E(`no-scrollbar group flex min-h-[104px] items-center space-x-2 overflow-x-auto overflow-y-hidden`),
            children: e?.map(e => (0, V.jsx)(`a`, {
                onClick: () => {
                    k.logEvent(`Detail Click Gizmo`, {
                        gizmo_id: e.gizmo.id
                    })
                },
                href: D(e),
                className: `bg-token-bg-primary h-fit min-w-fit rounded-xl px-1 py-4 md:px-3 md:py-4 lg:px-3`,
                children: (0, V.jsx)(L, {
                    resource: e
                })
            }, e.gizmo.id))
        })]
    })
}
var B, V, H, U, W, G, st, ct, lt, K, q, J, ut, dt, Y, ft, pt, mt, ht, X, Z, Q, $, gt = e((() => {
    fe(), ne(), Oe(), c(), qe(), Ke(), He(), We(), S(), r(), Me(), Qe(), je(), Ve(), C(), Ze(), ue(), b(), ae(), oe(), p(), ie(), re(), xe(), T(), ce(), Ne(), a(), B = n(ve()), _e(), ge(), x(), z(), le(), rt(), f(), Ae(), V = j(), be(), H = te(() => ye(() => import(`./a8077c3c-njcmd2v0evwo6rqc.js`).then(e => e.GizmoKeepInSidebarMenuItem), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))), U = 4, W = A.div`font-bold mt-6`, G = e => N({
        queryFn: async () => l.getAbout(e),
        queryKey: [`gizmo`, `about`, {
            gizmoId: e
        }]
    }), st = e => N({
        queryFn: async () => l.getCreatorSlice({
            creatorId: e
        }),
        queryKey: [`gizmo`, `creator`, {
            creatorId: e
        }],
        enabled: e != null
    }), ct = e => {
        switch (e.type) {
            case d.BROWSER:
                return {
                    title: $.browsing
                };
            case d.CANVAS:
                return {
                    title: $.canvas
                };
            case d.PYTHON:
                return {
                    title: $.dataAnalysis
                };
            case d.DALLE:
            case d.IMAGE_GEN:
                return {
                    title: $.imageGeneration
                };
            case d.MEMORY:
                return {
                    title: $.memory, description: $.memoryDescription
                };
            case d.JIT_PLUGIN:
                return {
                    title: $.actions, description: $.actionsDescription
                };
            case d.CONNECTOR:
                return {
                    title: $.apps
                };
            default:
                return null
        }
    }, lt = ({
        tools: e
    }) => {
        let t = y(),
            n = t?.includes(O.SearchTool) && !t?.includes(O.SearchToolHoldout),
            r = Pe(i(e?.map(ct)), e => e.title.id);
        return r.length === 0 ? null : (n && (r = r.map(e => e.title === $.browsing ? {
            title: $.search
        } : e)), (0, V.jsxs)(`div`, {
            className: `flex flex-col`,
            children: [(0, V.jsx)(W, {
                className: `mb-2`,
                children: (0, V.jsx)(M, {
                    id: `gizmo.about.capabilitiesHeader`,
                    defaultMessage: `Capabilities`
                })
            }), r.map(e => (0, V.jsxs)(`div`, {
                className: `flex flex-row items-start gap-2 py-1 text-sm`,
                children: [(0, V.jsx)(Ue, {
                    className: `icon-sm mt-0.5 text-green-600`
                }), (0, V.jsxs)(`div`, {
                    children: [(0, V.jsx)(M, {
                        ...e.title
                    }), e.description != null && (0, V.jsx)(`div`, {
                        className: `text-token-text-tertiary text-xs`,
                        children: (0, V.jsx)(M, {
                            ...e.description
                        })
                    })]
                })]
            }, e.title.id))]
        }))
    }, K = A.div`flex flex-col justify-center items-center gap-2 border-s border-token-border-heavy first:border-0 w-48 mt-4 px-2`, q = A.div`flex flex-row items-center gap-1.5 pt-1 text-xl font-semibold text-center leading-none`, J = A.div`text-xs text-token-text-tertiary`, ut = ({
        gizmoResource: e
    }) => (0, V.jsxs)(we, {
        contentAlign: `end`,
        sideOffset: 4,
        triggerButton: (0, V.jsx)(m, {
            color: `ghost`,
            icon: Je
        }),
        children: [(0, V.jsx)(H, {
            gizmoResource: e,
            location: `about_modal`
        }), (0, V.jsx)(Ce, {
            gizmoResource: e
        })]
    }), dt = ({
        aboutBlock: e
    }) => {
        switch (e.type) {
            case `generic_title_subtitle`:
                return (0, V.jsxs)(K, {
                    children: [(0, V.jsx)(q, {
                        children: e.title
                    }), (0, V.jsx)(J, {
                        children: e.subtitle
                    })]
                });
            case `rating`:
                return (0, V.jsxs)(K, {
                    children: [(0, V.jsxs)(q, {
                        children: [(0, V.jsx)(F, {
                            className: `icon-sm`
                        }), e.avg]
                    }), (0, V.jsx)(J, {
                        children: e.count_str
                    })]
                });
            case `category`:
                return e.category_ranking == null ? (0, V.jsxs)(K, {
                    children: [(0, V.jsx)(q, {
                        children: e.category_str
                    }), (0, V.jsx)(J, {
                        children: (0, V.jsx)(M, {
                            id: `gizmo.about.category`,
                            defaultMessage: `Category`
                        })
                    })]
                }) : (0, V.jsxs)(K, {
                    children: [(0, V.jsx)(q, {
                        children: (0, V.jsx)(M, {
                            id: `gizmo.about.trendingRank`,
                            defaultMessage: `#{rank}`,
                            values: {
                                rank: e.category_ranking
                            }
                        })
                    }), (0, V.jsx)(J, {
                        children: (0, V.jsx)(M, {
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
    }, Y = ({
        blocks: e
    }) => (0, V.jsx)(`div`, {
        className: `flex justify-center`,
        children: e.map(e => (0, V.jsx)(dt, {
            aboutBlock: e
        }, e.type))
    }), ft = ({
        href: e,
        onClick: t,
        children: n
    }) => (0, V.jsx)(se.div, {
        whileTap: {
            scale: .98
        },
        className: `flex`,
        children: (0, V.jsxs)(P, {
            to: e,
            reloadDocument: !0,
            onClick: t,
            className: E(`group border-token-border-heavy bg-token-bg-primary hover:bg-token-bg-tertiary relative ms-2 h-14 min-w-full grow rounded-xl border px-4 focus:outline-hidden`),
            children: [(0, V.jsx)(`div`, {
                className: `flex h-full items-center`,
                children: (0, V.jsx)(`div`, {
                    className: `line-clamp-2 text-sm break-all`,
                    children: n
                })
            }), (0, V.jsx)(`div`, {
                className: `border-token-border-heavy bg-token-bg-primary group-hover:bg-token-bg-tertiary absolute -start-2 -bottom-px h-3 w-4 border-b`,
                children: (0, V.jsx)(`div`, {
                    className: `border-token-border-heavy bg-token-bg-primary h-3 w-2 rounded-ee-full border-e border-b`
                })
            }), (0, V.jsx)(`div`, {
                className: `absolute end-2 top-0 bottom-0 hidden items-center group-hover:flex`,
                children: (0, V.jsx)(`div`, {
                    className: `bg-token-bg-secondary flex h-8 w-8 items-center justify-center rounded-lg`,
                    children: (0, V.jsx)(I, {
                        className: `icon text-token-text-primary`
                    })
                })
            })]
        })
    }), pt = ({
        gizmo: e,
        onClose: t
    }) => {
        let n = u(`1825130190`),
            r = e.gizmo.display.prompt_starters?.slice(0, U);
        return r == null || r.length === 0 || !n ? null : (0, V.jsxs)(`div`, {
            className: `flex flex-col`,
            children: [(0, V.jsx)(W, {
                children: (0, V.jsx)(M, {
                    id: `gizmo.about.conversationStartersHeader`,
                    defaultMessage: `Conversation Starters`
                })
            }), (0, V.jsx)(`div`, {
                className: `mt-4 grid grid-cols-2 gap-x-1.5 gap-y-2`,
                children: r.map((n, r) => (0, V.jsx)(at, {
                    gizmo: e,
                    prompt: n,
                    onClick: t
                }, r))
            })]
        })
    }, mt = ({
        reviewStats: e
    }) => u(`1825130190`) ? (0, V.jsxs)(`div`, {
        className: `flex flex-col`,
        children: [(0, V.jsx)(`div`, {
            className: `mb-2`,
            children: (0, V.jsx)(W, {
                children: (0, V.jsx)(M, {
                    id: `gizmo.about.ratingsHeader`,
                    defaultMessage: `Ratings`
                })
            })
        }), e == null ? (0, V.jsx)(`div`, {
            className: `text-token-text-tertiary text-sm`,
            children: (0, V.jsx)(M, {
                id: `gizmo.about.ratings.notEnoughRatings`,
                defaultMessage: `Not enough ratings yet`
            })
        }) : [5, 4, 3, 2, 1].map(t => (0, V.jsxs)(`div`, {
            className: `flex flex-row items-center gap-2 py-1 text-xl font-semibold`,
            children: [(0, V.jsxs)(`div`, {
                className: `icon-lg relative`,
                children: [(0, V.jsx)(F, {
                    className: `icon-lg text-green-500`
                }), (0, V.jsx)(`div`, {
                    className: `absolute inset-0 flex items-center justify-center text-[11px] text-white`,
                    children: t
                })]
            }), (0, V.jsx)(`div`, {
                className: `bg-token-bg-tertiary h-2.5 grow overflow-hidden rounded-full`,
                children: (0, V.jsx)(`div`, {
                    className: `h-full bg-green-500`,
                    style: {
                        width: `${(e?.by_rating[t-1]??0)*100}%`
                    }
                })
            })]
        }, t))]
    }) : null, ht = ({
        gizmoId: e,
        creatorId: t,
        onClose: n
    }) => (0, V.jsx)(X, {
        gizmoId: e,
        creatorId: t,
        onClose: n
    }), X = ({
        gizmoId: e,
        creatorId: t,
        onClose: n,
        children: r,
        showDirectoryActions: i = !1
    }) => {
        let a = g(e),
            o = G(e),
            c = st(t);
        return (0, B.useEffect)(() => {
            k.logEvent(`Detail Show Modal`, {
                gizmo_id: e
            })
        }, [e]), (0, V.jsx)(s, {
            testId: `modal-gizmo-about`,
            isOpen: !0,
            onClose: n,
            type: `success`,
            hideSeparator: !0,
            noPadding: !0,
            className: `flex h-[calc(100vh-25rem)] min-h-[40vh] max-w-xl flex-col`,
            children: (0, V.jsx)(Z, {
                aboutQuery: o,
                gizmoQuery: a,
                creatorSliceQuery: c,
                onClose: n,
                showDirectoryActions: i,
                children: r
            })
        })
    }, Z = ({
        aboutQuery: e,
        gizmoQuery: t,
        creatorSliceQuery: n,
        children: r,
        onClose: i,
        showDirectoryActions: a
    }) => {
        let s = Se(),
            c = he(),
            l = t.data,
            d = e.data?.about_blocks,
            f = e.data?.review_stats,
            p = n.data,
            m = _(() => a && u(`2160578039`)),
            h = _(() => m ? ke(l) : void 0),
            g = _(() => m && Le(l) === `migrate` && h == null),
            v = _(o),
            y = s.formatDate(v, {
                month: `long`,
                day: `numeric`,
                timeZone: `UTC`
            }),
            b = _(() => m && Te(l)),
            x = _(() => Fe(b ? void 0 : h)),
            S = _(() => Be(b ? void 0 : h)),
            C = h != null || g || b,
            w = t.error;
        return t.isLoading ? (0, V.jsx)(`div`, {
            className: `flex h-full items-center justify-center pb-10`,
            children: (0, V.jsxs)(`div`, {
                className: `animate-pulse space-y-4 text-center`,
                children: [(0, V.jsx)(`div`, {
                    className: `mx-auto h-20 w-20 rounded-xl bg-gray-200 dark:bg-gray-700`
                }), (0, V.jsx)(`div`, {
                    className: `mx-auto h-6 w-40 rounded bg-gray-200 dark:bg-gray-700`
                }), (0, V.jsx)(`div`, {
                    className: `mx-auto h-4 w-64 rounded bg-gray-200 dark:bg-gray-700`
                })]
            })
        }) : w || !l ? (0, V.jsx)(`div`, {
            className: `flex h-40 items-center justify-center pb-10`,
            children: (0, V.jsx)(`div`, {
                className: `px-4 text-sm text-red-500`,
                children: pe(w) || s.formatMessage({
                    id: `I3v3Oj`,
                    defaultMessage: `An error occurred loading this GPT.`
                })
            })
        }) : (0, V.jsxs)(`div`, {
            className: E(`flex h-full px-2 py-4`, m ? `bg-token-bg-primary flex-col` : `bg-token-bg-secondary`),
            children: [(0, V.jsxs)(`div`, {
                className: E(`relative flex grow flex-col gap-4 overflow-y-auto px-8 pt-16`, m && `min-h-0`, C ? `pb-4` : `pb-20`),
                children: [(0, V.jsx)(`div`, {
                    className: `absolute top-0`,
                    children: (0, V.jsxs)(`div`, {
                        className: E(`fixed start-4 end-4 z-10 flex items-center justify-end bg-linear-to-b to-transparent pb-2`, m ? `from-token-bg-primary` : `from-token-bg-secondary`),
                        children: [(0, V.jsx)(ut, {
                            gizmoResource: l
                        }), (0, V.jsx)(ee, {
                            onClick: i
                        })]
                    })
                }), !C && (0, V.jsx)(`div`, {
                    className: `absolute bottom-[64px]`,
                    children: (0, V.jsx)(`div`, {
                        className: E(`fixed start-4 end-4 z-10 flex min-h-[64px] items-end bg-linear-to-t to-transparent px-2`, m ? `from-token-bg-primary` : `from-token-bg-secondary`),
                        children: m ? (0, V.jsx)(Q, {
                            as: `link`,
                            to: D(l),
                            onClick: i
                        }) : r
                    })
                }), (0, V.jsx)(nt, {
                    gizmo: l,
                    className: `h-fit! bg-transparent dark:bg-transparent`,
                    avatarClassName: `h-20! w-20!`
                }), d && (0, V.jsx)(Y, {
                    blocks: d
                }), !d && e.isLoading && (0, V.jsx)(`div`, {
                    className: `flex justify-center gap-4`,
                    children: [...[, , , ]].map((e, t) => (0, V.jsx)(`div`, {
                        className: `bg-token-bg-tertiary h-16 w-32 animate-pulse rounded-xl`
                    }, t))
                }), (0, V.jsx)(pt, {
                    gizmo: l,
                    onClose: i
                }), !h && (0, V.jsx)(lt, {
                    tools: l.tools
                }), !h && f && (0, V.jsx)(mt, {
                    reviewStats: f
                }), !h && !f && e.isLoading && (0, V.jsx)(`div`, {
                    className: `space-y-2`,
                    children: [...[, , , ]].map((e, t) => (0, V.jsx)(`div`, {
                        className: `bg-token-bg-tertiary h-4 w-full animate-pulse rounded`
                    }, t))
                }), !h && p && (0, V.jsx)(ot, {
                    gizmos: p.items
                }), !h && !p && n.isLoading && (0, V.jsx)(`div`, {
                    className: `flex gap-2`,
                    children: [...[, , , , ]].map((e, t) => (0, V.jsx)(`div`, {
                        className: `bg-token-bg-tertiary h-24 w-24 animate-pulse rounded-xl`
                    }, t))
                })]
            }), C && (0, V.jsxs)(`div`, {
                className: `flex shrink-0 flex-col gap-2 px-4 pt-2 pb-4`,
                children: [b && (0, V.jsx)($e, {
                    surface: h ? `migrated` : `gpt`,
                    onKeepUsingGpt: h ? () => {
                        i(), c(D(l))
                    } : void 0
                }), g && (0, V.jsx)(Xe, {
                    deadline: v,
                    migrateCurrentGpt: !0,
                    stackedAction: !0,
                    title: (0, V.jsx)(M, {
                        id: `gizmo.about.pluginMigration.notice.title`,
                        defaultMessage: `Migrate this GPT to a plugin by {deadline}`,
                        values: {
                            deadline: y
                        }
                    }),
                    description: (0, V.jsx)(M, {
                        id: `gizmo.about.pluginMigration.notice.description.editing_locked`,
                        defaultMessage: `Migrate to a plugin so people can keep using it after {deadline}. Once migrated, the original GPT can no longer be edited. You can make future updates to the plugin.`,
                        values: {
                            deadline: y
                        }
                    }),
                    onMigrate: () => {
                        i(), de(Ee, {
                            gizmoId: l.gizmo.id,
                            gizmoName: l.gizmo.display.name,
                            gizmoTools: l.tools
                        })
                    }
                }), h && !b && (0, V.jsx)(et, {
                    gptName: l.gizmo.display.name,
                    pluginId: h,
                    adminUrl: S,
                    canAccessPlugin: x === `allowed`,
                    isPluginAccessPending: x === `pending`,
                    stackedAction: !0,
                    onUsePlugin: i,
                    onExplore: () => {
                        i(), c(tt())
                    }
                }), b && h ? null : b ? (0, V.jsx)(Q, {
                    as: `link`,
                    to: D(l),
                    onClick: i
                }) : (0, V.jsx)(P, {
                    to: D(l),
                    onClick: i,
                    className: `text-token-text-primary self-center py-2 text-sm underline underline-offset-4`,
                    children: (0, V.jsx)(M, {
                        id: `gizmo.about.pluginMigration.start_chat.label`,
                        defaultMessage: `Start chat`
                    })
                })]
            })]
        })
    }, Q = e => (0, V.jsx)(`div`, {
        className: `flex grow flex-col items-center`,
        children: (0, V.jsxs)(m, {
            color: `primary`,
            className: `h-12 w-full`,
            icon: I,
            ...e,
            children: [(0, V.jsx)(M, {
                id: `gizmo.about.startChat`,
                defaultMessage: `Start Chat`
            }), e.children]
        })
    }), $ = me({
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
    L as a, gt as i, it as n, z as o, Q as r, X as t
};
//# sourceMappingURL=a600b597-c10kx2nk23qio9az.js.map