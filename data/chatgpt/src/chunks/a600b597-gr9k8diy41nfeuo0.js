const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/a8077c3c-j165j6y2dz9e00iy.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-d7xm9wsvhdfbag9a.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-m7dgsxtvvivh3e6t.js", "assets/30901919-lc79rizhhepnsl3q.js", "assets/c470f5ab-lnsrbaizit3lulwq.js", "assets/0e5afe53-lar0ol3v36kqq3ou.js", "assets/conversation-small-ertg9659.css"]))) => i.map(i => d[i]);
import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as r,
    A8 as i,
    AE as a,
    At as o,
    Aw as s,
    BO as c,
    D2 as l,
    GO as ee,
    J5 as u,
    JO as d,
    JV as f,
    Lnt as p,
    Mw as m,
    ND as h,
    Ow as g,
    RD as _,
    VO as v,
    VV as y,
    XX as b,
    ZX as x,
    _D as S,
    a2 as te,
    c2 as ne,
    cn as re,
    d2 as ie,
    dD as C,
    eE as ae,
    grt as oe,
    iot as se,
    jw as ce,
    k2 as le,
    kE as w,
    l7 as T,
    o2 as ue,
    q1 as de,
    s0 as fe,
    tot as pe,
    u7 as E,
    uct as D,
    urt as O,
    xct as me,
    znt as he
} from "./4813494d-d7xm9wsvhdfbag9a.js";
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
    Fh as Ee,
    Hh as De,
    Kh as Oe,
    Nh as ke,
    Ph as Ae,
    SUn as je,
    Udn as Me,
    Uh as Ne,
    Vzt as Pe,
    Wdn as Fe,
    _h as Ie,
    bUn as Le,
    kh as Re,
    oMt as ze,
    qh as Be,
    sMt as Ve,
    vh as He,
    yh as Ue
} from "./conversation-small-m7dgsxtvvivh3e6t.js";
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
} from "./30901919-lc79rizhhepnsl3q.js";
import {
    Fn as Qe,
    Ln as $e,
    Lv as et,
    Mn as tt,
    Pn as nt,
    Rn as rt,
    zn as it,
    zv as at
} from "./8b34dbc2-ik628tlti8ozm9vq.js";

function F({
    resource: e,
    grayedOut: t,
    className: n
}) {
    let r = e.gizmo.vanity_metrics?.num_conversations_str;
    return (0, I.jsxs)(`div`, {
        className: T(`flex w-full grow items-center gap-4 overflow-hidden`, n),
        children: [(0, I.jsx)(ze, {
            isFirstParty: !!e.gizmo.tags?.includes(y.FirstParty),
            src: e.gizmo.display.profile_picture_url ?? void 0,
            className: T(`h-12 w-12 shrink-0`, t && `grayscale group-hover:grayscale-0`)
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
                children: [(0, I.jsx)(Oe, {
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
        qe(), E(), Be(), Ve(), f(), I = k()
    })),
    ot = t({
        GizmoAboutModal: () => X,
        GizmoDetailsModal: () => ht,
        GizmoStartChatButton: () => Q
    });

function st({
    gizmo: e,
    prompt: t,
    onClick: n
}) {
    let r = _(e, t);
    return (0, z.jsx)(ft, {
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
            className: T(`no-scrollbar group flex min-h-[104px] items-center space-x-2 overflow-x-auto overflow-y-hidden`),
            children: e?.map(e => (0, z.jsx)(`a`, {
                onClick: () => {
                    p.logEvent(`Detail Click Gizmo`, {
                        gizmo_id: e.gizmo.id
                    })
                },
                href: C(e),
                className: `bg-token-bg-primary h-fit min-w-fit rounded-xl px-1 py-4 md:px-3 md:py-4 lg:px-3`,
                children: (0, z.jsx)(F, {
                    resource: e
                })
            }, e.gizmo.id))
        })]
    })
}
var R, z, B, V, H, U, W, G, K, q, J, Y, lt, ut, dt, ft, pt, mt, ht, X, Z, Q, $, gt = e((() => {
    me(), ae(), je(), m(), Ye(), Je(), We(), Ke(), s(), ne(), Ne(), $e(), Ae(), Ue(), d(), at(), i(), de(), le(), he(), pe(), oe(), ue(), Ce(), E(), x(), Te(), o(), R = n(be()), ye(), ve(), a(), L(), S(), it(), v(), Fe(), z = k(), Se(), B = te(() => xe(() => import(`./a8077c3c-j165j6y2dz9e00iy.js`).then(e => e.GizmoKeepInSidebarMenuItem), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))), V = 4, H = w.div`font-bold mt-6`, U = e => j({
        queryFn: async () => c.getAbout(e),
        queryKey: [`gizmo`, `about`, {
            gizmoId: e
        }]
    }), W = e => j({
        queryFn: async () => c.getCreatorSlice({
            creatorId: e
        }),
        queryKey: [`gizmo`, `creator`, {
            creatorId: e
        }],
        enabled: e != null
    }), G = e => {
        switch (e.type) {
            case D.BROWSER:
                return {
                    title: $.browsing
                };
            case D.CANVAS:
                return {
                    title: $.canvas
                };
            case D.PYTHON:
                return {
                    title: $.dataAnalysis
                };
            case D.DALLE:
            case D.IMAGE_GEN:
                return {
                    title: $.imageGeneration
                };
            case D.MEMORY:
                return {
                    title: $.memory, description: $.memoryDescription
                };
            case D.JIT_PLUGIN:
                return {
                    title: $.actions, description: $.actionsDescription
                };
            case D.CONNECTOR:
                return {
                    title: $.apps
                };
            default:
                return null
        }
    }, K = ({
        tools: e
    }) => {
        let t = fe(),
            n = t?.includes(l.SearchTool) && !t?.includes(l.SearchToolHoldout),
            r = Pe(b(e?.map(G)), e => e.title.id);
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
    }, q = w.div`flex flex-col justify-center items-center gap-2 border-s border-token-border-heavy first:border-0 w-48 mt-4 px-2`, J = w.div`flex flex-row items-center gap-1.5 pt-1 text-xl font-semibold text-center leading-none`, Y = w.div`text-xs text-token-text-tertiary`, lt = ({
        gizmoResource: e
    }) => (0, z.jsxs)(Le, {
        contentAlign: `end`,
        sideOffset: 4,
        triggerButton: (0, z.jsx)(r, {
            color: `ghost`,
            icon: Xe
        }),
        children: [(0, z.jsx)(B, {
            gizmoResource: e,
            location: `about_modal`
        }), (0, z.jsx)(Me, {
            gizmoResource: e
        })]
    }), ut = ({
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
    }, dt = ({
        blocks: e
    }) => (0, z.jsx)(`div`, {
        className: `flex justify-center`,
        children: e.map(e => (0, z.jsx)(ut, {
            aboutBlock: e
        }, e.type))
    }), ft = ({
        href: e,
        onClick: t,
        children: n
    }) => (0, z.jsx)(re.div, {
        whileTap: {
            scale: .98
        },
        className: `flex`,
        children: (0, z.jsxs)(M, {
            to: e,
            reloadDocument: !0,
            onClick: t,
            className: T(`group border-token-border-heavy bg-token-bg-primary hover:bg-token-bg-tertiary relative ms-2 h-14 min-w-full grow rounded-xl border px-4 focus:outline-hidden`),
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
    }), pt = ({
        gizmo: e,
        onClose: t
    }) => {
        let n = O(`1825130190`),
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
    }, mt = ({
        reviewStats: e
    }) => O(`1825130190`) ? (0, z.jsxs)(`div`, {
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
    }) : null, ht = ({
        gizmoId: e,
        creatorId: t,
        onClose: n
    }) => (0, z.jsx)(X, {
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
        let a = h(e),
            o = U(e),
            s = W(t);
        return (0, R.useEffect)(() => {
            p.logEvent(`Detail Show Modal`, {
                gizmo_id: e
            })
        }, [e]), (0, z.jsx)(g, {
            testId: `modal-gizmo-about`,
            isOpen: !0,
            onClose: n,
            type: `success`,
            hideSeparator: !0,
            noPadding: !0,
            className: `flex h-[calc(100vh-25rem)] min-h-[40vh] max-w-xl flex-col`,
            children: (0, z.jsx)(Z, {
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
        let o = we(),
            s = _e(),
            c = t.data,
            l = e.data?.about_blocks,
            d = e.data?.review_stats,
            f = n.data,
            p = u(() => a && O(`2160578039`)),
            m = u(() => p ? ke(c) : void 0),
            h = u(() => p && Re(c) === `migrate` && m == null),
            g = u(ee),
            _ = o.formatDate(g, {
                month: `long`,
                day: `numeric`,
                timeZone: `UTC`
            }),
            v = u(() => p && Ee(c)),
            y = u(() => Ie(v ? void 0 : m)),
            b = u(() => He(v ? void 0 : m)),
            x = m != null || h || v,
            S = t.error;
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
        }) : S || !c ? (0, z.jsx)(`div`, {
            className: `flex h-40 items-center justify-center pb-10`,
            children: (0, z.jsx)(`div`, {
                className: `px-4 text-sm text-red-500`,
                children: se(S) || o.formatMessage({
                    id: `I3v3Oj`,
                    defaultMessage: `An error occurred loading this GPT.`
                })
            })
        }) : (0, z.jsxs)(`div`, {
            className: T(`flex h-full px-2 py-4`, p ? `bg-token-bg-primary flex-col` : `bg-token-bg-secondary`),
            children: [(0, z.jsxs)(`div`, {
                className: T(`relative flex grow flex-col gap-4 overflow-y-auto px-8 pt-16`, p && `min-h-0`, x ? `pb-4` : `pb-20`),
                children: [(0, z.jsx)(`div`, {
                    className: `absolute top-0`,
                    children: (0, z.jsxs)(`div`, {
                        className: T(`fixed start-4 end-4 z-10 flex items-center justify-end bg-linear-to-b to-transparent pb-2`, p ? `from-token-bg-primary` : `from-token-bg-secondary`),
                        children: [(0, z.jsx)(lt, {
                            gizmoResource: c
                        }), (0, z.jsx)(ce, {
                            onClick: i
                        })]
                    })
                }), !x && (0, z.jsx)(`div`, {
                    className: `absolute bottom-[64px]`,
                    children: (0, z.jsx)(`div`, {
                        className: T(`fixed start-4 end-4 z-10 flex min-h-[64px] items-end bg-linear-to-t to-transparent px-2`, p ? `from-token-bg-primary` : `from-token-bg-secondary`),
                        children: p ? (0, z.jsx)(Q, {
                            as: `link`,
                            to: C(c),
                            onClick: i
                        }) : r
                    })
                }), (0, z.jsx)(rt, {
                    gizmo: c,
                    className: `h-fit! bg-transparent dark:bg-transparent`,
                    avatarClassName: `h-20! w-20!`
                }), l && (0, z.jsx)(dt, {
                    blocks: l
                }), !l && e.isLoading && (0, z.jsx)(`div`, {
                    className: `flex justify-center gap-4`,
                    children: [...[, , , ]].map((e, t) => (0, z.jsx)(`div`, {
                        className: `bg-token-bg-tertiary h-16 w-32 animate-pulse rounded-xl`
                    }, t))
                }), (0, z.jsx)(pt, {
                    gizmo: c,
                    onClose: i
                }), !m && (0, z.jsx)(K, {
                    tools: c.tools
                }), !m && d && (0, z.jsx)(mt, {
                    reviewStats: d
                }), !m && !d && e.isLoading && (0, z.jsx)(`div`, {
                    className: `space-y-2`,
                    children: [...[, , , ]].map((e, t) => (0, z.jsx)(`div`, {
                        className: `bg-token-bg-tertiary h-4 w-full animate-pulse rounded`
                    }, t))
                }), !m && f && (0, z.jsx)(ct, {
                    gizmos: f.items
                }), !m && !f && n.isLoading && (0, z.jsx)(`div`, {
                    className: `flex gap-2`,
                    children: [...[, , , , ]].map((e, t) => (0, z.jsx)(`div`, {
                        className: `bg-token-bg-tertiary h-24 w-24 animate-pulse rounded-xl`
                    }, t))
                })]
            }), x && (0, z.jsxs)(`div`, {
                className: `flex shrink-0 flex-col gap-2 px-4 pt-2 pb-4`,
                children: [v && (0, z.jsx)(tt, {
                    surface: m ? `migrated` : `gpt`,
                    onKeepUsingGpt: m ? () => {
                        i(), s(C(c))
                    } : void 0
                }), h && (0, z.jsx)(Qe, {
                    deadline: g,
                    migrateCurrentGpt: !0,
                    stackedAction: !0,
                    title: (0, z.jsx)(A, {
                        id: `gizmo.about.pluginMigration.notice.title`,
                        defaultMessage: `Migrate this GPT to a plugin by {deadline}`,
                        values: {
                            deadline: _
                        }
                    }),
                    description: (0, z.jsx)(A, {
                        id: `gizmo.about.pluginMigration.notice.description.editing_locked`,
                        defaultMessage: `Migrate to a plugin so people can keep using it after {deadline}. Once migrated, the original GPT can no longer be edited. You can make future updates to the plugin.`,
                        values: {
                            deadline: _
                        }
                    }),
                    onMigrate: () => {
                        i(), ie(De, {
                            gizmoId: c.gizmo.id,
                            gizmoName: c.gizmo.display.name,
                            gizmoTools: c.tools
                        })
                    }
                }), m && !v && (0, z.jsx)(nt, {
                    gptName: c.gizmo.display.name,
                    pluginId: m,
                    adminUrl: b,
                    canAccessPlugin: y === `allowed`,
                    isPluginAccessPending: y === `pending`,
                    stackedAction: !0,
                    onUsePlugin: i,
                    onExplore: () => {
                        i(), s(et())
                    }
                }), v && m ? null : v ? (0, z.jsx)(Q, {
                    as: `link`,
                    to: C(c),
                    onClick: i
                }) : (0, z.jsx)(M, {
                    to: C(c),
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
        children: (0, z.jsxs)(r, {
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
    F as a, gt as i, ot as n, L as o, Q as r, X as t
};
//# sourceMappingURL=a600b597-gr9k8diy41nfeuo0.js.map