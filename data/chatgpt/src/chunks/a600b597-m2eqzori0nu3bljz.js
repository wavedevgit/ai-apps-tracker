const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/a8077c3c-k0wjic5n1yr12vni.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-mdvd4786a87166cc.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-bcbq46iub1p0ca1t.js", "assets/30901919-s8bko9nrkqwv6i4f.js", "assets/c470f5ab-jwd0o7jx9i9say9k.js", "assets/0e5afe53-hxm3yzzjqriayom4.js", "assets/conversation-small-ep6mlz5m.css"]))) => i.map(i => d[i]);
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
    Crt as l,
    D2 as u,
    GO as ee,
    JO as d,
    JV as f,
    K5 as p,
    Knt as m,
    Mw as h,
    ND as g,
    Oct as _,
    Ow as v,
    RD as y,
    VO as b,
    VV as x,
    Wnt as S,
    XX as te,
    ZX as ne,
    _D as re,
    _ct as C,
    _rt as w,
    a2 as ie,
    c2 as ae,
    cn as oe,
    cot as se,
    d2 as ce,
    dD as T,
    dot as le,
    eE as ue,
    j5 as E,
    jw as de,
    k2 as fe,
    kE as D,
    o2 as pe,
    q1 as me,
    q5 as O,
    s0 as he
} from "./4813494d-mdvd4786a87166cc.js";
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
    AUn as Te,
    Fh as Ee,
    Gdn as De,
    Hh as Oe,
    Kh as ke,
    MUn as Ae,
    Nh as je,
    Nzt as Me,
    Ph as Ne,
    Pzt as Pe,
    Uh as Fe,
    Wdn as Ie,
    _h as Le,
    eMt as Re,
    kh as ze,
    qh as Be,
    tMt as Ve,
    vh as He,
    yh as Ue
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Cv as We,
    Dx as Ge,
    Ky as Ke,
    Ox as qe,
    Sv as Je,
    Xv as Ye,
    Zv as N,
    cS as P,
    lS as Xe,
    qy as Ze
} from "./30901919-s8bko9nrkqwv6i4f.js";
import {
    Fn as Qe,
    Ln as $e,
    Lv as et,
    Mn as tt,
    Pn as nt,
    Rn as rt,
    zn as it,
    zv as at
} from "./8b34dbc2-lmwubajnld74ksfm.js";

function F({
    resource: e,
    grayedOut: t,
    className: n
}) {
    let r = e.gizmo.vanity_metrics?.num_conversations_str;
    return (0, I.jsxs)(`div`, {
        className: p(`flex w-full grow items-center gap-4 overflow-hidden`, n),
        children: [(0, I.jsx)(Re, {
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
                children: [(0, I.jsx)(ke, {
                    gizmo: e,
                    className: `text-xs`,
                    hideLink: !0
                }), r && (0, I.jsxs)(I.Fragment, {
                    children: [(0, I.jsx)(`span`, {
                        className: `text-[8px]`,
                        children: `•`
                    }), (0, I.jsx)(Je, {
                        className: `h-3 w-3`
                    }), r]
                })]
            })]
        })]
    })
}
var I, L = e((() => {
        We(), O(), Be(), Ve(), f(), I = k()
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
    let r = y(e, t);
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
            className: p(`no-scrollbar group flex min-h-[104px] items-center space-x-2 overflow-x-auto overflow-y-hidden`),
            children: e?.map(e => (0, z.jsx)(`a`, {
                onClick: () => {
                    S.logEvent(`Detail Click Gizmo`, {
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
var R, z, B, V, H, U, W, G, K, q, J, Y, lt, ut, dt, ft, pt, mt, ht, X, Z, Q, $, gt = e((() => {
    _(), ue(), Ae(), h(), Xe(), Ze(), qe(), Ye(), s(), ae(), Fe(), $e(), Ne(), Ue(), d(), at(), i(), me(), fe(), m(), se(), l(), pe(), Ce(), O(), ne(), Me(), o(), R = n(be()), ye(), ve(), a(), L(), re(), it(), b(), De(), z = k(), Se(), B = ie(() => xe(() => import(`./a8077c3c-k0wjic5n1yr12vni.js`).then(e => e.GizmoKeepInSidebarMenuItem), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))), V = 4, H = D.div`font-bold mt-6`, U = e => j({
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
        let t = he(),
            n = t?.includes(u.SearchTool) && !t?.includes(u.SearchToolHoldout),
            r = Pe(te(e?.map(G)), e => e.title.id);
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
                children: [(0, z.jsx)(Ke, {
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
    }, q = D.div`flex flex-col justify-center items-center gap-2 border-s border-token-border-heavy first:border-0 w-48 mt-4 px-2`, J = D.div`flex flex-row items-center gap-1.5 pt-1 text-xl font-semibold text-center leading-none`, Y = D.div`text-xs text-token-text-tertiary`, lt = ({
        gizmoResource: e
    }) => (0, z.jsxs)(Te, {
        contentAlign: `end`,
        sideOffset: 4,
        triggerButton: (0, z.jsx)(r, {
            color: `ghost`,
            icon: Ge
        }),
        children: [(0, z.jsx)(B, {
            gizmoResource: e,
            location: `about_modal`
        }), (0, z.jsx)(Ie, {
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
    }), pt = ({
        gizmo: e,
        onClose: t
    }) => {
        let n = w(`1825130190`),
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
    }) => w(`1825130190`) ? (0, z.jsxs)(`div`, {
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
        let a = g(e),
            o = U(e),
            s = W(t);
        return (0, R.useEffect)(() => {
            S.logEvent(`Detail Show Modal`, {
                gizmo_id: e
            })
        }, [e]), (0, z.jsx)(v, {
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
            u = e.data?.review_stats,
            d = n.data,
            f = E(() => a && w(`2160578039`)),
            m = E(() => f ? je(c) : void 0),
            h = E(() => f && ze(c) === `migrate` && m == null),
            g = E(ee),
            _ = o.formatDate(g, {
                month: `long`,
                day: `numeric`,
                timeZone: `UTC`
            }),
            v = E(() => f && Ee(c)),
            y = E(() => Le(v ? void 0 : m)),
            b = E(() => He(v ? void 0 : m)),
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
                children: le(S) || o.formatMessage({
                    id: `I3v3Oj`,
                    defaultMessage: `An error occurred loading this GPT.`
                })
            })
        }) : (0, z.jsxs)(`div`, {
            className: p(`flex h-full px-2 py-4`, f ? `bg-token-bg-primary flex-col` : `bg-token-bg-secondary`),
            children: [(0, z.jsxs)(`div`, {
                className: p(`relative flex grow flex-col gap-4 overflow-y-auto px-8 pt-16`, f && `min-h-0`, x ? `pb-4` : `pb-20`),
                children: [(0, z.jsx)(`div`, {
                    className: `absolute top-0`,
                    children: (0, z.jsxs)(`div`, {
                        className: p(`fixed start-4 end-4 z-10 flex items-center justify-end bg-linear-to-b to-transparent pb-2`, f ? `from-token-bg-primary` : `from-token-bg-secondary`),
                        children: [(0, z.jsx)(lt, {
                            gizmoResource: c
                        }), (0, z.jsx)(de, {
                            onClick: i
                        })]
                    })
                }), !x && (0, z.jsx)(`div`, {
                    className: `absolute bottom-[64px]`,
                    children: (0, z.jsx)(`div`, {
                        className: p(`fixed start-4 end-4 z-10 flex min-h-[64px] items-end bg-linear-to-t to-transparent px-2`, f ? `from-token-bg-primary` : `from-token-bg-secondary`),
                        children: f ? (0, z.jsx)(Q, {
                            as: `link`,
                            to: T(c),
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
                }), !m && u && (0, z.jsx)(mt, {
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
            }), x && (0, z.jsxs)(`div`, {
                className: `flex shrink-0 flex-col gap-2 px-4 pt-2 pb-4`,
                children: [v && (0, z.jsx)(tt, {
                    surface: m ? `migrated` : `gpt`,
                    onKeepUsingGpt: m ? () => {
                        i(), s(T(c))
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
                        i(), ce(Oe, {
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
                    to: T(c),
                    onClick: i
                }) : (0, z.jsx)(M, {
                    to: T(c),
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
//# sourceMappingURL=a600b597-m2eqzori0nu3bljz.js.map