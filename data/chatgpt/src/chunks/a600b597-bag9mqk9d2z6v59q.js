const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/a8077c3c-fcilxu5cibjnyv31.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-cb22y2w19zwyshmt.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/conversation-small-fym1zmu9zimymmm1.js", "assets/30901919-e33mbl5u1y88w5wu.js", "assets/c470f5ab-m68dth1hatzjj8yh.js", "assets/0e5afe53-dl0nq2u2siu8c8q5.js", "assets/conversation-small-iha453gv.css"]))) => i.map(i => d[i]);
import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as r,
    At as i,
    B6 as a,
    Btt as o,
    C0 as s,
    DX as c,
    EX as l,
    Htt as u,
    K0 as d,
    O0 as ee,
    S0 as f,
    T0 as p,
    VE as m,
    W0 as h,
    _O as g,
    aE as _,
    b5 as v,
    cn as y,
    cw as b,
    gO as x,
    i5 as S,
    iat as C,
    iw as te,
    kT as w,
    lD as ne,
    mD as re,
    mV as ie,
    oE as ae,
    ow as oe,
    pnt as T,
    pst as E,
    qE as se,
    sat as ce,
    sw as le,
    u1 as ue,
    w1 as de,
    wO as fe,
    wst as pe,
    xO as me,
    xV as he,
    y5 as D,
    ynt as ge
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as _e,
    Bn as O,
    Ln as ve,
    Nn as k,
    O as A,
    Pt as ye,
    Rn as be,
    Vn as xe,
    at as j,
    cn as Se,
    ln as Ce,
    s as we,
    zn as Te
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    CHn as Ee,
    Gh as De,
    Hh as Oe,
    Kh as ke,
    Lzt as Ae,
    Mh as je,
    Nh as Me,
    Oh as Ne,
    Ph as Pe,
    Rzt as Fe,
    THn as Ie,
    Vh as Le,
    _h as Re,
    gh as ze,
    ldn as Be,
    nMt as Ve,
    rMt as He,
    udn as Ue,
    vh as We
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Ax as Ge,
    Dv as Ke,
    Ov as qe,
    Qy as Je,
    Zy as Ye,
    dS as Xe,
    kx as Ze,
    ny as M,
    ty as Qe,
    uS as N
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    Fn as $e,
    Fv as et,
    Ln as tt,
    Mn as nt,
    Nv as rt,
    Pn as it,
    Rn as at,
    zn as ot
} from "./8b34dbc2-gf9wnwcahty27ylx.js";

function P({
    resource: e,
    grayedOut: t,
    className: n
}) {
    let r = e.gizmo.vanity_metrics?.num_conversations_str;
    return (0, F.jsxs)(`div`, {
        className: D(`flex w-full grow items-center gap-4 overflow-hidden`, n),
        children: [(0, F.jsx)(Ve, {
            isFirstParty: !!e.gizmo.tags?.includes(ie.FirstParty),
            src: e.gizmo.display.profile_picture_url ?? void 0,
            className: D(`h-12 w-12 shrink-0`, t && `grayscale group-hover:grayscale-0`)
        }), (0, F.jsxs)(`div`, {
            className: `overflow-hidden break-words text-ellipsis`,
            children: [(0, F.jsx)(`span`, {
                className: `line-clamp-2 text-sm leading-tight font-semibold`,
                children: e.gizmo.display.name
            }), (0, F.jsx)(`span`, {
                className: `line-clamp-3 text-xs`,
                children: e.gizmo.display.description
            }), (0, F.jsxs)(`div`, {
                className: `text-token-text-tertiary mt-1 flex items-center gap-1 pe-1 text-xs text-ellipsis whitespace-nowrap`,
                children: [(0, F.jsx)(De, {
                    gizmo: e,
                    className: `text-xs`,
                    hideLink: !0
                }), r && (0, F.jsxs)(F.Fragment, {
                    children: [(0, F.jsx)(`span`, {
                        className: `text-[8px]`,
                        children: `•`
                    }), (0, F.jsx)(Ke, {
                        className: `h-3 w-3`
                    }), r]
                })]
            })]
        })]
    })
}
var F, I = e((() => {
        qe(), v(), ke(), He(), he(), F = O()
    })),
    st = t({
        GizmoAboutModal: () => X,
        GizmoDetailsModal: () => ht,
        GizmoStartChatButton: () => Q
    });

function ct({
    gizmo: e,
    prompt: t,
    onClick: n
}) {
    let r = re(e, t);
    return (0, R.jsx)(ft, {
        href: r?.toString() ?? `#`,
        onClick: n,
        children: t
    })
}

function lt({
    gizmos: e
}) {
    return e.length === 0 ? null : (0, R.jsxs)(`div`, {
        className: `flex flex-col`,
        children: [(0, R.jsx)(`div`, {
            className: `mb-2`,
            children: (0, R.jsx)(V, {
                children: (0, R.jsx)(k, {
                    id: `gizmo.about.moreByHeader`,
                    defaultMessage: `More by {creatorName}`,
                    values: {
                        creatorName: e[0].gizmo.author.display_name
                    }
                })
            })
        }), (0, R.jsx)(`div`, {
            className: D(`no-scrollbar group flex min-h-[104px] items-center space-x-2 overflow-x-auto overflow-y-hidden`),
            children: e?.map(e => (0, R.jsx)(`a`, {
                onClick: () => {
                    o.logEvent(`Detail Click Gizmo`, {
                        gizmo_id: e.gizmo.id
                    })
                },
                href: m(e),
                className: `bg-token-bg-primary h-fit min-w-fit rounded-xl px-1 py-4 md:px-3 md:py-4 lg:px-3`,
                children: (0, R.jsx)(P, {
                    resource: e
                })
            }, e.gizmo.id))
        })]
    })
}
var L, R, z, B, V, H, U, W, G, K, q, J, Y, ut, dt, ft, pt, mt, ht, X, Z, Q, $, gt = e((() => {
    pe(), r(), Ie(), b(), Xe(), Je(), Ge(), Qe(), oe(), p(), Oe(), tt(), Me(), We(), fe(), et(), a(), ue(), d(), u(), C(), ge(), s(), we(), v(), c(), Ae(), i(), L = n(xe()), be(), _e(), ae(), I(), se(), ot(), g(), Ue(), R = O(), Ce(), z = f(() => Se(() => import(`./a8077c3c-fcilxu5cibjnyv31.js`).then(e => e.GizmoKeepInSidebarMenuItem), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))), B = 4, V = _.div`font-bold mt-6`, H = e => A({
        queryFn: async () => x.getAbout(e),
        queryKey: [`gizmo`, `about`, {
            gizmoId: e
        }]
    }), U = e => A({
        queryFn: async () => x.getCreatorSlice({
            creatorId: e
        }),
        queryKey: [`gizmo`, `creator`, {
            creatorId: e
        }],
        enabled: e != null
    }), W = e => {
        switch (e.type) {
            case E.BROWSER:
                return {
                    title: $.browsing
                };
            case E.CANVAS:
                return {
                    title: $.canvas
                };
            case E.PYTHON:
                return {
                    title: $.dataAnalysis
                };
            case E.DALLE:
            case E.IMAGE_GEN:
                return {
                    title: $.imageGeneration
                };
            case E.MEMORY:
                return {
                    title: $.memory, description: $.memoryDescription
                };
            case E.JIT_PLUGIN:
                return {
                    title: $.actions, description: $.actionsDescription
                };
            case E.CONNECTOR:
                return {
                    title: $.apps
                };
            default:
                return null
        }
    }, G = ({
        tools: e
    }) => {
        let t = de(),
            n = t?.includes(h.SearchTool) && !t?.includes(h.SearchToolHoldout),
            r = Fe(l(e?.map(W)), e => e.title.id);
        return r.length === 0 ? null : (n && (r = r.map(e => e.title === $.browsing ? {
            title: $.search
        } : e)), (0, R.jsxs)(`div`, {
            className: `flex flex-col`,
            children: [(0, R.jsx)(V, {
                className: `mb-2`,
                children: (0, R.jsx)(k, {
                    id: `gizmo.about.capabilitiesHeader`,
                    defaultMessage: `Capabilities`
                })
            }), r.map(e => (0, R.jsxs)(`div`, {
                className: `flex flex-row items-start gap-2 py-1 text-sm`,
                children: [(0, R.jsx)(Ye, {
                    className: `icon-sm mt-0.5 text-green-600`
                }), (0, R.jsxs)(`div`, {
                    children: [(0, R.jsx)(k, {
                        ...e.title
                    }), e.description != null && (0, R.jsx)(`div`, {
                        className: `text-token-text-tertiary text-xs`,
                        children: (0, R.jsx)(k, {
                            ...e.description
                        })
                    })]
                })]
            }, e.title.id))]
        }))
    }, K = _.div`flex flex-col justify-center items-center gap-2 border-s border-token-border-heavy first:border-0 w-48 mt-4 px-2`, q = _.div`flex flex-row items-center gap-1.5 pt-1 text-xl font-semibold text-center leading-none`, J = _.div`text-xs text-token-text-tertiary`, Y = ({
        gizmoResource: e
    }) => (0, R.jsxs)(Ee, {
        contentAlign: `end`,
        sideOffset: 4,
        triggerButton: (0, R.jsx)(w, {
            color: `ghost`,
            icon: Ze
        }),
        children: [(0, R.jsx)(z, {
            gizmoResource: e,
            location: `about_modal`
        }), (0, R.jsx)(Be, {
            gizmoResource: e
        })]
    }), ut = ({
        aboutBlock: e
    }) => {
        switch (e.type) {
            case `generic_title_subtitle`:
                return (0, R.jsxs)(K, {
                    children: [(0, R.jsx)(q, {
                        children: e.title
                    }), (0, R.jsx)(J, {
                        children: e.subtitle
                    })]
                });
            case `rating`:
                return (0, R.jsxs)(K, {
                    children: [(0, R.jsxs)(q, {
                        children: [(0, R.jsx)(M, {
                            className: `icon-sm`
                        }), e.avg]
                    }), (0, R.jsx)(J, {
                        children: e.count_str
                    })]
                });
            case `category`:
                return e.category_ranking == null ? (0, R.jsxs)(K, {
                    children: [(0, R.jsx)(q, {
                        children: e.category_str
                    }), (0, R.jsx)(J, {
                        children: (0, R.jsx)(k, {
                            id: `gizmo.about.category`,
                            defaultMessage: `Category`
                        })
                    })]
                }) : (0, R.jsxs)(K, {
                    children: [(0, R.jsx)(q, {
                        children: (0, R.jsx)(k, {
                            id: `gizmo.about.trendingRank`,
                            defaultMessage: `#{rank}`,
                            values: {
                                rank: e.category_ranking
                            }
                        })
                    }), (0, R.jsx)(J, {
                        children: (0, R.jsx)(k, {
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
    }, dt = ({
        blocks: e
    }) => (0, R.jsx)(`div`, {
        className: `flex justify-center`,
        children: e.map(e => (0, R.jsx)(ut, {
            aboutBlock: e
        }, e.type))
    }), ft = ({
        href: e,
        onClick: t,
        children: n
    }) => (0, R.jsx)(y.div, {
        whileTap: {
            scale: .98
        },
        className: `flex`,
        children: (0, R.jsxs)(j, {
            to: e,
            reloadDocument: !0,
            onClick: t,
            className: D(`group border-token-border-heavy bg-token-bg-primary hover:bg-token-bg-tertiary relative ms-2 h-14 min-w-full grow rounded-xl border px-4 focus:outline-hidden`),
            children: [(0, R.jsx)(`div`, {
                className: `flex h-full items-center`,
                children: (0, R.jsx)(`div`, {
                    className: `line-clamp-2 text-sm break-all`,
                    children: n
                })
            }), (0, R.jsx)(`div`, {
                className: `border-token-border-heavy bg-token-bg-primary group-hover:bg-token-bg-tertiary absolute -start-2 -bottom-px h-3 w-4 border-b`,
                children: (0, R.jsx)(`div`, {
                    className: `border-token-border-heavy bg-token-bg-primary h-3 w-2 rounded-ee-full border-e border-b`
                })
            }), (0, R.jsx)(`div`, {
                className: `absolute end-2 top-0 bottom-0 hidden items-center group-hover:flex`,
                children: (0, R.jsx)(`div`, {
                    className: `bg-token-bg-secondary flex h-8 w-8 items-center justify-center rounded-lg`,
                    children: (0, R.jsx)(N, {
                        className: `icon text-token-text-primary`
                    })
                })
            })]
        })
    }), pt = ({
        gizmo: e,
        onClose: t
    }) => {
        let n = T(`1825130190`),
            r = e.gizmo.display.prompt_starters?.slice(0, B);
        return r == null || r.length === 0 || !n ? null : (0, R.jsxs)(`div`, {
            className: `flex flex-col`,
            children: [(0, R.jsx)(V, {
                children: (0, R.jsx)(k, {
                    id: `gizmo.about.conversationStartersHeader`,
                    defaultMessage: `Conversation Starters`
                })
            }), (0, R.jsx)(`div`, {
                className: `mt-4 grid grid-cols-2 gap-x-1.5 gap-y-2`,
                children: r.map((n, r) => (0, R.jsx)(ct, {
                    gizmo: e,
                    prompt: n,
                    onClick: t
                }, r))
            })]
        })
    }, mt = ({
        reviewStats: e
    }) => T(`1825130190`) ? (0, R.jsxs)(`div`, {
        className: `flex flex-col`,
        children: [(0, R.jsx)(`div`, {
            className: `mb-2`,
            children: (0, R.jsx)(V, {
                children: (0, R.jsx)(k, {
                    id: `gizmo.about.ratingsHeader`,
                    defaultMessage: `Ratings`
                })
            })
        }), e == null ? (0, R.jsx)(`div`, {
            className: `text-token-text-tertiary text-sm`,
            children: (0, R.jsx)(k, {
                id: `gizmo.about.ratings.notEnoughRatings`,
                defaultMessage: `Not enough ratings yet`
            })
        }) : [5, 4, 3, 2, 1].map(t => (0, R.jsxs)(`div`, {
            className: `flex flex-row items-center gap-2 py-1 text-xl font-semibold`,
            children: [(0, R.jsxs)(`div`, {
                className: `icon-lg relative`,
                children: [(0, R.jsx)(M, {
                    className: `icon-lg text-green-500`
                }), (0, R.jsx)(`div`, {
                    className: `absolute inset-0 flex items-center justify-center text-[11px] text-white`,
                    children: t
                })]
            }), (0, R.jsx)(`div`, {
                className: `bg-token-bg-tertiary h-2.5 grow overflow-hidden rounded-full`,
                children: (0, R.jsx)(`div`, {
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
    }) => (0, R.jsx)(X, {
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
        let a = ne(e),
            s = H(e),
            c = U(t);
        return (0, L.useEffect)(() => {
            o.logEvent(`Detail Show Modal`, {
                gizmo_id: e
            })
        }, [e]), (0, R.jsx)(te, {
            testId: `modal-gizmo-about`,
            isOpen: !0,
            onClose: n,
            type: `success`,
            hideSeparator: !0,
            noPadding: !0,
            className: `flex h-[calc(100vh-25rem)] min-h-[40vh] max-w-xl flex-col`,
            children: (0, R.jsx)(Z, {
                aboutQuery: s,
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
        let o = Te(),
            s = ye(),
            c = t.data,
            l = e.data?.about_blocks,
            u = e.data?.review_stats,
            d = n.data,
            f = S(() => a && T(`2160578039`)),
            p = S(() => f ? je(c) : void 0),
            h = S(() => f && Ne(c) === `migrate` && p == null),
            g = S(me),
            _ = o.formatDate(g, {
                month: `long`,
                day: `numeric`,
                timeZone: `UTC`
            }),
            v = S(() => f && Pe(c)),
            y = S(() => ze(v ? void 0 : p)),
            b = S(() => Re(v ? void 0 : p)),
            x = p != null || h || v,
            C = t.error;
        return t.isLoading ? (0, R.jsx)(`div`, {
            className: `flex h-full items-center justify-center pb-10`,
            children: (0, R.jsxs)(`div`, {
                className: `animate-pulse space-y-4 text-center`,
                children: [(0, R.jsx)(`div`, {
                    className: `mx-auto h-20 w-20 rounded-xl bg-gray-200 dark:bg-gray-700`
                }), (0, R.jsx)(`div`, {
                    className: `mx-auto h-6 w-40 rounded bg-gray-200 dark:bg-gray-700`
                }), (0, R.jsx)(`div`, {
                    className: `mx-auto h-4 w-64 rounded bg-gray-200 dark:bg-gray-700`
                })]
            })
        }) : C || !c ? (0, R.jsx)(`div`, {
            className: `flex h-40 items-center justify-center pb-10`,
            children: (0, R.jsx)(`div`, {
                className: `px-4 text-sm text-red-500`,
                children: ce(C) || o.formatMessage({
                    id: `I3v3Oj`,
                    defaultMessage: `An error occurred loading this GPT.`
                })
            })
        }) : (0, R.jsxs)(`div`, {
            className: D(`flex h-full px-2 py-4`, f ? `bg-token-bg-primary flex-col` : `bg-token-bg-secondary`),
            children: [(0, R.jsxs)(`div`, {
                className: D(`relative flex grow flex-col gap-4 overflow-y-auto px-8 pt-16`, f && `min-h-0`, x ? `pb-4` : `pb-20`),
                children: [(0, R.jsx)(`div`, {
                    className: `absolute top-0`,
                    children: (0, R.jsxs)(`div`, {
                        className: D(`fixed start-4 end-4 z-10 flex items-center justify-end bg-linear-to-b to-transparent pb-2`, f ? `from-token-bg-primary` : `from-token-bg-secondary`),
                        children: [(0, R.jsx)(Y, {
                            gizmoResource: c
                        }), (0, R.jsx)(le, {
                            onClick: i
                        })]
                    })
                }), !x && (0, R.jsx)(`div`, {
                    className: `absolute bottom-[64px]`,
                    children: (0, R.jsx)(`div`, {
                        className: D(`fixed start-4 end-4 z-10 flex min-h-[64px] items-end bg-linear-to-t to-transparent px-2`, f ? `from-token-bg-primary` : `from-token-bg-secondary`),
                        children: f ? (0, R.jsx)(Q, {
                            as: `link`,
                            to: m(c),
                            onClick: i
                        }) : r
                    })
                }), (0, R.jsx)(at, {
                    gizmo: c,
                    className: `h-fit! bg-transparent dark:bg-transparent`,
                    avatarClassName: `h-20! w-20!`
                }), l && (0, R.jsx)(dt, {
                    blocks: l
                }), !l && e.isLoading && (0, R.jsx)(`div`, {
                    className: `flex justify-center gap-4`,
                    children: [...[, , , ]].map((e, t) => (0, R.jsx)(`div`, {
                        className: `bg-token-bg-tertiary h-16 w-32 animate-pulse rounded-xl`
                    }, t))
                }), (0, R.jsx)(pt, {
                    gizmo: c,
                    onClose: i
                }), !p && (0, R.jsx)(G, {
                    tools: c.tools
                }), !p && u && (0, R.jsx)(mt, {
                    reviewStats: u
                }), !p && !u && e.isLoading && (0, R.jsx)(`div`, {
                    className: `space-y-2`,
                    children: [...[, , , ]].map((e, t) => (0, R.jsx)(`div`, {
                        className: `bg-token-bg-tertiary h-4 w-full animate-pulse rounded`
                    }, t))
                }), !p && d && (0, R.jsx)(lt, {
                    gizmos: d.items
                }), !p && !d && n.isLoading && (0, R.jsx)(`div`, {
                    className: `flex gap-2`,
                    children: [...[, , , , ]].map((e, t) => (0, R.jsx)(`div`, {
                        className: `bg-token-bg-tertiary h-24 w-24 animate-pulse rounded-xl`
                    }, t))
                })]
            }), x && (0, R.jsxs)(`div`, {
                className: `flex shrink-0 flex-col gap-2 px-4 pt-2 pb-4`,
                children: [v && (0, R.jsx)(nt, {
                    surface: p ? `migrated` : `gpt`,
                    onKeepUsingGpt: p ? () => {
                        i(), s(m(c))
                    } : void 0
                }), h && (0, R.jsx)($e, {
                    deadline: g,
                    migrateCurrentGpt: !0,
                    stackedAction: !0,
                    title: (0, R.jsx)(k, {
                        id: `gizmo.about.pluginMigration.notice.title`,
                        defaultMessage: `Migrate this GPT to a plugin by {deadline}`,
                        values: {
                            deadline: _
                        }
                    }),
                    description: (0, R.jsx)(k, {
                        id: `gizmo.about.pluginMigration.notice.description.editing_locked`,
                        defaultMessage: `Migrate to a plugin so people can keep using it after {deadline}. Once migrated, the original GPT can no longer be edited. You can make future updates to the plugin.`,
                        values: {
                            deadline: _
                        }
                    }),
                    onMigrate: () => {
                        i(), ee(Le, {
                            gizmoId: c.gizmo.id,
                            gizmoName: c.gizmo.display.name,
                            gizmoTools: c.tools
                        })
                    }
                }), p && !v && (0, R.jsx)(it, {
                    gptName: c.gizmo.display.name,
                    pluginId: p,
                    adminUrl: b,
                    canAccessPlugin: y === `allowed`,
                    isPluginAccessPending: y === `pending`,
                    stackedAction: !0,
                    onUsePlugin: i,
                    onExplore: () => {
                        i(), s(rt())
                    }
                }), v && p ? null : v ? (0, R.jsx)(Q, {
                    as: `link`,
                    to: m(c),
                    onClick: i
                }) : (0, R.jsx)(j, {
                    to: m(c),
                    onClick: i,
                    className: `text-token-text-primary self-center py-2 text-sm underline underline-offset-4`,
                    children: (0, R.jsx)(k, {
                        id: `gizmo.about.pluginMigration.start_chat.label`,
                        defaultMessage: `Start chat`
                    })
                })]
            })]
        })
    }, Q = e => (0, R.jsx)(`div`, {
        className: `flex grow flex-col items-center`,
        children: (0, R.jsxs)(w, {
            color: `primary`,
            className: `h-12 w-full`,
            icon: N,
            ...e,
            children: [(0, R.jsx)(k, {
                id: `gizmo.about.startChat`,
                defaultMessage: `Start Chat`
            }), e.children]
        })
    }), $ = ve({
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
    P as a, gt as i, st as n, I as o, Q as r, X as t
};
//# sourceMappingURL=a600b597-bag9mqk9d2z6v59q.js.map