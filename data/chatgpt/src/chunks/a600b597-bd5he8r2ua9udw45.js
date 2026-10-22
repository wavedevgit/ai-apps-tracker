const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/a8077c3c-c6bh0qlo3olxtd84.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-itnrgnth03y1sm9d.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-i79e9c315w50am5f.js", "assets/30901919-ikyi1r55w2i02fom.js", "assets/c470f5ab-lpy67c9in1skobas.js", "assets/0e5afe53-jfvcgv06snw44wce.js", "assets/conversation-small-dl8qqd6x.css"]))) => i.map(i => d[i]);
import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as r,
    AE as i,
    At as a,
    Aw as o,
    BO as s,
    D2 as c,
    GO as ee,
    Int as l,
    JO as u,
    JV as d,
    Mw as f,
    ND as p,
    Ow as m,
    Pnt as h,
    Qat as g,
    RD as _,
    VO as v,
    VV as y,
    XX as b,
    ZX as x,
    _D as te,
    a2 as ne,
    c2 as re,
    c7 as S,
    cn as ie,
    d2 as ae,
    dD as C,
    eE as oe,
    jw as se,
    k2 as ce,
    k8 as le,
    kE as w,
    l7 as ue,
    o2 as de,
    prt as fe,
    q1 as pe,
    q5 as T,
    s0 as me,
    sct as E,
    srt as D,
    tot as he,
    vct as ge
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    Bn as O,
    Ln as _e,
    Nn as k,
    Nt as ve,
    O as A,
    Q as ye,
    Rn as be,
    Vn as xe,
    cn as Se,
    it as j,
    ln as Ce,
    s as we,
    zn as Te
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Cdn as Ee,
    Fh as De,
    Hh as Oe,
    Izt as ke,
    Kh as Ae,
    Lzt as je,
    Nh as Me,
    Ph as Ne,
    Uh as Pe,
    _h as Fe,
    eUn as Ie,
    iMt as Le,
    kh as Re,
    nUn as ze,
    qh as Be,
    rMt as Ve,
    vh as He,
    wdn as Ue,
    yh as We
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    $v as M,
    Ax as Ge,
    Jy as Ke,
    Qv as qe,
    Tv as Je,
    Yy as Ye,
    dS as Xe,
    kx as Ze,
    uS as N,
    wv as Qe
} from "./30901919-ikyi1r55w2i02fom.js";
import {
    Fn as $e,
    Iv as et,
    Ln as tt,
    Mn as nt,
    Pn as rt,
    Rn as it,
    Rv as at,
    zn as ot
} from "./8b34dbc2-m4883pai3e8fx8q6.js";

function P({
    resource: e,
    grayedOut: t,
    className: n
}) {
    let r = e.gizmo.vanity_metrics?.num_conversations_str;
    return (0, F.jsxs)(`div`, {
        className: S(`flex w-full grow items-center gap-4 overflow-hidden`, n),
        children: [(0, F.jsx)(Ve, {
            isFirstParty: !!e.gizmo.tags?.includes(y.FirstParty),
            src: e.gizmo.display.profile_picture_url ?? void 0,
            className: S(`h-12 w-12 shrink-0`, t && `grayscale group-hover:grayscale-0`)
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
                children: [(0, F.jsx)(Ae, {
                    gizmo: e,
                    className: `text-xs`,
                    hideLink: !0
                }), r && (0, F.jsxs)(F.Fragment, {
                    children: [(0, F.jsx)(`span`, {
                        className: `text-[8px]`,
                        children: `•`
                    }), (0, F.jsx)(Qe, {
                        className: `h-3 w-3`
                    }), r]
                })]
            })]
        })]
    })
}
var F, I = e((() => {
        Je(), ue(), Be(), Le(), d(), F = O()
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
    let r = _(e, t);
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
            className: S(`no-scrollbar group flex min-h-[104px] items-center space-x-2 overflow-x-auto overflow-y-hidden`),
            children: e?.map(e => (0, R.jsx)(`a`, {
                onClick: () => {
                    h.logEvent(`Detail Click Gizmo`, {
                        gizmo_id: e.gizmo.id
                    })
                },
                href: C(e),
                className: `bg-token-bg-primary h-fit min-w-fit rounded-xl px-1 py-4 md:px-3 md:py-4 lg:px-3`,
                children: (0, R.jsx)(P, {
                    resource: e
                })
            }, e.gizmo.id))
        })]
    })
}
var L, R, z, B, V, H, U, W, G, K, q, J, ut, dt, Y, ft, pt, mt, ht, X, Z, Q, $, gt = e((() => {
    ge(), oe(), ze(), f(), Xe(), Ye(), Ge(), qe(), o(), re(), Pe(), tt(), Ne(), We(), u(), at(), le(), pe(), ce(), l(), g(), fe(), de(), we(), ue(), x(), ke(), a(), L = n(xe()), be(), ye(), i(), I(), te(), ot(), v(), Ue(), R = O(), Ce(), z = ne(() => Se(() => import(`./a8077c3c-c6bh0qlo3olxtd84.js`).then(e => e.GizmoKeepInSidebarMenuItem), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))), B = 4, V = w.div`font-bold mt-6`, H = e => A({
        queryFn: async () => s.getAbout(e),
        queryKey: [`gizmo`, `about`, {
            gizmoId: e
        }]
    }), U = e => A({
        queryFn: async () => s.getCreatorSlice({
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
        let t = me(),
            n = t?.includes(c.SearchTool) && !t?.includes(c.SearchToolHoldout),
            r = je(b(e?.map(W)), e => e.title.id);
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
                children: [(0, R.jsx)(Ke, {
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
    }, K = w.div`flex flex-col justify-center items-center gap-2 border-s border-token-border-heavy first:border-0 w-48 mt-4 px-2`, q = w.div`flex flex-row items-center gap-1.5 pt-1 text-xl font-semibold text-center leading-none`, J = w.div`text-xs text-token-text-tertiary`, ut = ({
        gizmoResource: e
    }) => (0, R.jsxs)(Ie, {
        contentAlign: `end`,
        sideOffset: 4,
        triggerButton: (0, R.jsx)(r, {
            color: `ghost`,
            icon: Ze
        }),
        children: [(0, R.jsx)(z, {
            gizmoResource: e,
            location: `about_modal`
        }), (0, R.jsx)(Ee, {
            gizmoResource: e
        })]
    }), dt = ({
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
    }, Y = ({
        blocks: e
    }) => (0, R.jsx)(`div`, {
        className: `flex justify-center`,
        children: e.map(e => (0, R.jsx)(dt, {
            aboutBlock: e
        }, e.type))
    }), ft = ({
        href: e,
        onClick: t,
        children: n
    }) => (0, R.jsx)(ie.div, {
        whileTap: {
            scale: .98
        },
        className: `flex`,
        children: (0, R.jsxs)(j, {
            to: e,
            reloadDocument: !0,
            onClick: t,
            className: S(`group border-token-border-heavy bg-token-bg-primary hover:bg-token-bg-tertiary relative ms-2 h-14 min-w-full grow rounded-xl border px-4 focus:outline-hidden`),
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
        let n = D(`1825130190`),
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
    }) => D(`1825130190`) ? (0, R.jsxs)(`div`, {
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
        let a = p(e),
            o = H(e),
            s = U(t);
        return (0, L.useEffect)(() => {
            h.logEvent(`Detail Show Modal`, {
                gizmo_id: e
            })
        }, [e]), (0, R.jsx)(m, {
            testId: `modal-gizmo-about`,
            isOpen: !0,
            onClose: n,
            type: `success`,
            hideSeparator: !0,
            noPadding: !0,
            className: `flex h-[calc(100vh-25rem)] min-h-[40vh] max-w-xl flex-col`,
            children: (0, R.jsx)(Z, {
                aboutQuery: o,
                gizmoQuery: a,
                creatorSliceQuery: s,
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
            s = ve(),
            c = t.data,
            l = e.data?.about_blocks,
            u = e.data?.review_stats,
            d = n.data,
            f = T(() => a && D(`2160578039`)),
            p = T(() => f ? Me(c) : void 0),
            m = T(() => f && Re(c) === `migrate` && p == null),
            h = T(ee),
            g = o.formatDate(h, {
                month: `long`,
                day: `numeric`,
                timeZone: `UTC`
            }),
            _ = T(() => f && De(c)),
            v = T(() => Fe(_ ? void 0 : p)),
            y = T(() => He(_ ? void 0 : p)),
            b = p != null || m || _,
            x = t.error;
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
        }) : x || !c ? (0, R.jsx)(`div`, {
            className: `flex h-40 items-center justify-center pb-10`,
            children: (0, R.jsx)(`div`, {
                className: `px-4 text-sm text-red-500`,
                children: he(x) || o.formatMessage({
                    id: `I3v3Oj`,
                    defaultMessage: `An error occurred loading this GPT.`
                })
            })
        }) : (0, R.jsxs)(`div`, {
            className: S(`flex h-full px-2 py-4`, f ? `bg-token-bg-primary flex-col` : `bg-token-bg-secondary`),
            children: [(0, R.jsxs)(`div`, {
                className: S(`relative flex grow flex-col gap-4 overflow-y-auto px-8 pt-16`, f && `min-h-0`, b ? `pb-4` : `pb-20`),
                children: [(0, R.jsx)(`div`, {
                    className: `absolute top-0`,
                    children: (0, R.jsxs)(`div`, {
                        className: S(`fixed start-4 end-4 z-10 flex items-center justify-end bg-linear-to-b to-transparent pb-2`, f ? `from-token-bg-primary` : `from-token-bg-secondary`),
                        children: [(0, R.jsx)(ut, {
                            gizmoResource: c
                        }), (0, R.jsx)(se, {
                            onClick: i
                        })]
                    })
                }), !b && (0, R.jsx)(`div`, {
                    className: `absolute bottom-[64px]`,
                    children: (0, R.jsx)(`div`, {
                        className: S(`fixed start-4 end-4 z-10 flex min-h-[64px] items-end bg-linear-to-t to-transparent px-2`, f ? `from-token-bg-primary` : `from-token-bg-secondary`),
                        children: f ? (0, R.jsx)(Q, {
                            as: `link`,
                            to: C(c),
                            onClick: i
                        }) : r
                    })
                }), (0, R.jsx)(it, {
                    gizmo: c,
                    className: `h-fit! bg-transparent dark:bg-transparent`,
                    avatarClassName: `h-20! w-20!`
                }), l && (0, R.jsx)(Y, {
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
            }), b && (0, R.jsxs)(`div`, {
                className: `flex shrink-0 flex-col gap-2 px-4 pt-2 pb-4`,
                children: [_ && (0, R.jsx)(nt, {
                    surface: p ? `migrated` : `gpt`,
                    onKeepUsingGpt: p ? () => {
                        i(), s(C(c))
                    } : void 0
                }), m && (0, R.jsx)($e, {
                    deadline: h,
                    migrateCurrentGpt: !0,
                    stackedAction: !0,
                    title: (0, R.jsx)(k, {
                        id: `gizmo.about.pluginMigration.notice.title`,
                        defaultMessage: `Migrate this GPT to a plugin by {deadline}`,
                        values: {
                            deadline: g
                        }
                    }),
                    description: (0, R.jsx)(k, {
                        id: `gizmo.about.pluginMigration.notice.description.editing_locked`,
                        defaultMessage: `Migrate to a plugin so people can keep using it after {deadline}. Once migrated, the original GPT can no longer be edited. You can make future updates to the plugin.`,
                        values: {
                            deadline: g
                        }
                    }),
                    onMigrate: () => {
                        i(), ae(Oe, {
                            gizmoId: c.gizmo.id,
                            gizmoName: c.gizmo.display.name,
                            gizmoTools: c.tools
                        })
                    }
                }), p && !_ && (0, R.jsx)(rt, {
                    gptName: c.gizmo.display.name,
                    pluginId: p,
                    adminUrl: y,
                    canAccessPlugin: v === `allowed`,
                    isPluginAccessPending: v === `pending`,
                    stackedAction: !0,
                    onUsePlugin: i,
                    onExplore: () => {
                        i(), s(et())
                    }
                }), _ && p ? null : _ ? (0, R.jsx)(Q, {
                    as: `link`,
                    to: C(c),
                    onClick: i
                }) : (0, R.jsx)(j, {
                    to: C(c),
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
        children: (0, R.jsxs)(r, {
            color: `primary`,
            className: `h-12 w-full`,
            icon: N,
            ...e,
            children: [(0, R.jsx)(k, {
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
    P as a, gt as i, st as n, I as o, Q as r, X as t
};
//# sourceMappingURL=a600b597-bd5he8r2ua9udw45.js.map