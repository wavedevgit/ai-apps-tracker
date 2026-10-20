import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $st as t,
    Ew as n,
    Nst as r,
    Tw as i
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Bn as a,
    Pn as o,
    Tn as s,
    Vn as c,
    zn as l
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    Dy as u,
    Ty as d,
    ny as f,
    ry as p
} from "./c2675c8c-nxl2ic2ofk2vw70s.js";
import {
    L as m,
    cn as h,
    in as g
} from "./1c919af1-md3slc2ht6it8c1k.js";
import {
    d as _,
    t as v
} from "./707eab0c-hquix1of0ixypvkq.js";
import {
    t as y
} from "./a35abcd6-kcua9d3wne9fesqf.js";
var b, x = e((() => {
        p(), b = async ({
            queryClient: e,
            workspaceId: t,
            connectorId: n
        }) => {
            t === `` || n === `` || await Promise.all([e.invalidateQueries({
                queryKey: f(`app-configuration`, t),
                predicate: ({
                    queryKey: t
                }) => t[3] === n || e.getQueryData(t)?.primaryConnector.id === n,
                refetchType: `all`
            }), e.invalidateQueries({
                queryKey: f(`app-role-policy`, t),
                refetchType: `active`
            })])
        }
    })),
    S, C, w, T, E = e((() => {
        t(), d(), S = new Set([`ADMIN_MODE`, `USER_MODE`]), C = e => e.type === r.GDRIVE_ACTION_CONNECTOR || e.type === r.OUTLOOK_EMAIL_CONNECTOR || e.type === r.TEAMS_CONNECTOR || e.sync_metadata?.supports_admin_sync === !0, w = ({
            app: e,
            permissions: t
        }) => t?.sync_mode != null && S.has(t.sync_mode) && e.primaryConnector.sync_metadata?.sync_status?.ks_status !== `deleting` && e.primaryConnector.sync_metadata?.sync_status?.ks_status !== `deleted` || e.knowledgeConfig.some(e => e.connections.some(e => e.connection_status !== `deleting` && e.connection_status !== `deleted`)), T = ({
            app: e,
            permissions: t
        }) => e.knowledgeConfig.length > 0 && u(e) && (w({
            app: e,
            permissions: t
        }) || C(e.primaryConnector))
    }));

function D(e, t) {
    return (0, k.jsxs)(`div`, {
        className: `flex min-h-[76px] items-center gap-4 px-4 py-4 ${t>0?`border-token-border-default border-t`:``}`,
        children: [(0, k.jsxs)(`div`, {
            className: `flex min-w-0 flex-1 flex-col gap-2`,
            children: [(0, k.jsx)(A, {
                className: `h-5 w-28 max-w-full`
            }), (0, k.jsx)(A, {
                className: `h-4 w-[240px] max-w-full`
            })]
        }), (0, k.jsx)(A, {
            className: `h-6 w-10 shrink-0`
        })]
    }, e)
}
var O, k, A, j, M, N, P, F, I = e((() => {
    O = s(), n(), v(), y(), l(), k = c(), A = e => {
        "use forget";
        let t = (0, O.c)(2),
            {
                className: n
            } = e,
            r = `bg-token-bg-secondary animate-pulse rounded-full ${n}`,
            i;
        return t[0] === r ? i = t[1] : (i = (0, k.jsx)(`div`, {
            "aria-hidden": !0,
            className: r
        }), t[0] = r, t[1] = i), i
    }, j = e => {
        "use forget";
        let t = (0, O.c)(6),
            {
                hideIcon: n
            } = e,
            r = `size-8 shrink-0 rounded-[10px] ${n!==void 0&&n?`opacity-0`:``}`,
            i;
        t[0] === r ? i = t[1] : (i = (0, k.jsx)(A, {
            className: r
        }), t[0] = r, t[1] = i);
        let a, o;
        t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, k.jsxs)(`div`, {
            className: `flex min-w-0 flex-1 flex-col gap-1.5`,
            children: [(0, k.jsx)(A, {
                className: `h-6 w-[200px] max-w-full`
            }), (0, k.jsx)(A, {
                className: `h-[18px] w-[320px] max-w-full`
            }), (0, k.jsx)(A, {
                className: `h-[18px] w-[240px] max-w-full`
            })]
        }), o = (0, k.jsx)(h, {
            "aria-hidden": !0,
            className: `icon-sm shrink-0`
        }), t[2] = a, t[3] = o) : (a = t[2], o = t[3]);
        let s;
        return t[4] === i ? s = t[5] : (s = (0, k.jsxs)(`div`, {
            className: `flex h-[104px] items-center gap-4 p-4`,
            children: [i, a, o]
        }), t[4] = i, t[5] = s), s
    }, M = () => {
        "use forget";
        let e = (0, O.c)(1),
            t;
        return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, k.jsxs)(`div`, {
            className: `flex shrink-0 gap-3 p-6`,
            "aria-hidden": !0,
            children: [(0, k.jsx)(`div`, {
                className: `border-token-border-default h-9 flex-1 rounded-full border`
            }), (0, k.jsx)(`div`, {
                className: `bg-token-text-primary h-9 flex-1 rounded-full`
            })]
        }), e[0] = t) : t = e[0], t
    }, N = e => {
        "use forget";
        let t = (0, O.c)(7),
            {
                label: n,
                readOnly: r
            } = e,
            i;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, k.jsxs)(`div`, {
            "aria-hidden": !0,
            className: `border-token-border-default flex h-9 shrink-0 items-center gap-2 rounded-full border px-3`,
            children: [(0, k.jsx)(m, {
                "aria-hidden": !0,
                className: `text-token-text-tertiary size-5`
            }), (0, k.jsx)(A, {
                className: `h-4 w-16`
            })]
        }), t[0] = i) : i = t[0];
        let a;
        t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (a = [`read`, `write`], t[1] = a) : a = t[1];
        let o;
        t[2] === r ? o = t[3] : (o = (0, k.jsx)(`div`, {
            "aria-hidden": !0,
            className: `border-token-border-default h-[min(600px,calc(100vh-188px))] min-h-0 overflow-hidden rounded-lg border`,
            children: a.map((e, t) => (0, k.jsxs)(`div`, {
                children: [(0, k.jsxs)(`div`, {
                    className: `border-token-border-default flex h-[52px] items-center gap-2 px-4 ${t>0?`border-t`:``}`,
                    children: [(0, k.jsx)(A, {
                        className: `size-4 shrink-0`
                    }), (0, k.jsx)(A, {
                        className: `size-5 shrink-0`
                    }), (0, k.jsx)(A, {
                        className: `h-4 w-24`
                    }), (0, k.jsx)(A, {
                        className: `h-4 w-5`
                    }), r ? null : (0, k.jsx)(A, {
                        className: `ms-auto h-6 w-10 shrink-0`
                    })]
                }), [0, 1].map(e => (0, k.jsxs)(`div`, {
                    className: `border-token-border-default flex min-h-[88px] items-center gap-4 border-t p-4`,
                    children: [(0, k.jsxs)(`div`, {
                        className: `flex min-w-0 flex-1 flex-col gap-2`,
                        children: [(0, k.jsx)(A, {
                            className: `h-4 max-w-full ${e===0?`w-36`:`w-44`}`
                        }), (0, k.jsx)(A, {
                            className: `h-4 w-[240px] max-w-full`
                        })]
                    }), r ? null : (0, k.jsxs)(`div`, {
                        className: `flex shrink-0 items-center gap-2`,
                        children: [(0, k.jsx)(A, {
                            className: `size-8`
                        }), (0, k.jsx)(A, {
                            className: `h-6 w-10`
                        })]
                    })]
                }, e))]
            }, e))
        }), t[2] = r, t[3] = o);
        let s;
        return t[4] !== n || t[5] !== o ? (s = (0, k.jsxs)(`div`, {
            "aria-label": n,
            "aria-busy": !0,
            className: `bg-token-bg-primary flex min-h-0 flex-1 flex-col gap-4 px-4 pb-4`,
            role: `status`,
            children: [i, o]
        }), t[4] = n, t[5] = o, t[6] = s) : s = t[6], s
    }, P = e => {
        "use forget";
        let t = (0, O.c)(11),
            {
                appName: n,
                label: r
            } = e,
            i;
        t[0] === n ? i = t[1] : (i = (0, k.jsx)(`h2`, {
            className: `text-token-text-primary text-xl leading-[25px] font-medium tracking-[-0.45px]`,
            children: (0, k.jsx)(o, {
                id: `admin.plugins.app_configuration.roles.title`,
                defaultMessage: `Choose which roles can use {app}`,
                values: {
                    app: n
                }
            })
        }), t[0] = n, t[1] = i);
        let a;
        t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, k.jsx)(A, {
            className: `mt-2 h-5 w-[320px] max-w-full`
        }), t[2] = a) : a = t[2];
        let s;
        t[3] === i ? s = t[4] : (s = (0, k.jsxs)(`div`, {
            className: `pb-2`,
            children: [i, a]
        }), t[3] = i, t[4] = s);
        let c;
        t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, k.jsx)(A, {
            className: `h-9 w-full`
        }), t[5] = c) : c = t[5];
        let l;
        t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (l = (0, k.jsx)(`div`, {
            className: `flex h-[38px] justify-end`,
            children: (0, k.jsx)(A, {
                className: `h-8 w-24`
            })
        }), t[6] = l) : l = t[6];
        let u;
        t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (u = (0, k.jsxs)(`div`, {
            className: `flex min-h-0 flex-1 flex-col gap-1`,
            children: [l, (0, k.jsx)(`div`, {
                className: `border-token-border-default overflow-hidden rounded-2xl border`,
                children: [`workspace`, `custom`].map(D)
            })]
        }), t[7] = u) : u = t[7];
        let d;
        return t[8] !== r || t[9] !== s ? (d = (0, k.jsxs)(`div`, {
            "aria-label": r,
            "aria-busy": !0,
            className: `bg-token-bg-primary flex min-h-0 flex-1 flex-col gap-4 overflow-hidden p-6`,
            role: `status`,
            children: [s, c, u]
        }), t[8] = r, t[9] = s, t[10] = d) : d = t[10], d
    }, F = e => {
        "use forget";
        let t = (0, O.c)(10),
            {
                appName: n,
                onClose: r,
                readOnlyActions: s,
                view: c
            } = e,
            l = s !== void 0 && s,
            u = c === void 0 ? `main` : c,
            d = a(),
            f;
        t[0] !== d || t[1] !== u ? (f = u === `actions` ? d.formatMessage({
            id: `admin.plugins.app_configuration.actions.loading.label`,
            defaultMessage: `Loading app tools`
        }) : u === `roles` ? d.formatMessage({
            id: `admin.plugins.app_configuration.roles.loading.label`,
            defaultMessage: `Loading app roles`
        }) : d.formatMessage({
            id: `admin.plugins.v2.detail.app.configuration.loading.label`,
            defaultMessage: `Loading app configuration`
        }), t[0] = d, t[1] = u, t[2] = f) : f = t[2];
        let p = f,
            m;
        return t[3] !== n || t[4] !== d || t[5] !== p || t[6] !== r || t[7] !== l || t[8] !== u ? (m = (0, k.jsx)(k.Fragment, {
            children: u === `actions` ? (0, k.jsxs)(k.Fragment, {
                children: [(0, k.jsxs)(`div`, {
                    className: `flex h-[52px] shrink-0 items-center justify-between px-3`,
                    children: [(0, k.jsx)(`h2`, {
                        "aria-hidden": !0,
                        className: `text-token-text-primary px-1 text-lg leading-5 font-medium`,
                        children: (0, k.jsx)(o, {
                            id: `admin.plugins.app_configuration.actions.dialog.title`,
                            defaultMessage: `Tools`
                        })
                    }), (0, k.jsx)(_, {
                        "aria-label": d.formatMessage({
                            id: `admin.plugins.app_configuration.actions.button.close`,
                            defaultMessage: `Close`
                        }),
                        color: `secondary`,
                        variant: `ghost`,
                        size: `lg`,
                        uniform: !0,
                        pill: !0,
                        onClick: r,
                        children: (0, k.jsx)(g, {
                            "aria-hidden": !0,
                            className: `size-5`
                        })
                    })]
                }), (0, k.jsx)(N, {
                    label: p,
                    readOnly: l
                }), l ? null : (0, k.jsx)(`div`, {
                    "aria-hidden": !0,
                    className: `flex shrink-0 justify-end px-4 pb-4`,
                    children: (0, k.jsx)(_, {
                        color: `primary`,
                        size: `lg`,
                        pill: !0,
                        disabled: !0,
                        children: (0, k.jsx)(o, {
                            id: `admin.plugins.app_configuration.actions.button.save_changes`,
                            defaultMessage: `Save changes`
                        })
                    })
                })]
            }) : u === `roles` ? (0, k.jsxs)(k.Fragment, {
                children: [(0, k.jsx)(`div`, {
                    className: `flex h-[52px] shrink-0 items-end justify-end px-6`,
                    children: (0, k.jsx)(i, {
                        className: `size-7!`,
                        iconSize: `sm`,
                        radius: `full`,
                        onClick: r
                    })
                }), (0, k.jsx)(P, {
                    appName: n,
                    label: p
                }), (0, k.jsx)(M, {})]
            }) : (0, k.jsxs)(k.Fragment, {
                children: [(0, k.jsx)(`div`, {
                    className: `flex h-[52px] shrink-0 items-end justify-end px-6`,
                    children: (0, k.jsx)(i, {
                        className: `size-7!`,
                        iconSize: `sm`,
                        radius: `full`,
                        onClick: r
                    })
                }), (0, k.jsxs)(`div`, {
                    "aria-label": p,
                    "aria-busy": !0,
                    className: `min-h-0 flex-1 overflow-y-auto px-6`,
                    role: `status`,
                    children: [(0, k.jsxs)(`div`, {
                        className: `flex flex-col items-center`,
                        children: [(0, k.jsx)(A, {
                            className: `size-12 rounded-xl`
                        }), (0, k.jsx)(A, {
                            className: `mt-4 h-[26px] w-40`
                        }), (0, k.jsx)(A, {
                            className: `mt-2 h-6 w-60`
                        }), (0, k.jsx)(A, {
                            className: `mt-4 h-5 w-[200px]`
                        })]
                    }), (0, k.jsxs)(`div`, {
                        className: `mt-6 flex flex-col gap-4`,
                        children: [(0, k.jsx)(`div`, {
                            className: `border-token-border-default overflow-hidden rounded-xl border`,
                            children: (0, k.jsxs)(`div`, {
                                className: `flex h-20 items-center gap-4 p-4`,
                                children: [(0, k.jsx)(A, {
                                    className: `size-8 shrink-0 rounded-[10px]`
                                }), (0, k.jsxs)(`div`, {
                                    className: `flex min-w-0 flex-1 flex-col gap-1.5`,
                                    children: [(0, k.jsx)(A, {
                                        className: `h-6 w-[200px] max-w-full`
                                    }), (0, k.jsx)(A, {
                                        className: `h-[18px] w-[320px] max-w-full`
                                    })]
                                }), (0, k.jsx)(h, {
                                    "aria-hidden": !0,
                                    className: `icon-sm shrink-0`
                                })]
                            })
                        }), (0, k.jsxs)(`div`, {
                            className: `border-token-border-default overflow-hidden rounded-xl border`,
                            children: [(0, k.jsx)(j, {}), (0, k.jsx)(`div`, {
                                className: `border-token-border-default ms-16 me-4 border-t`
                            }), (0, k.jsx)(j, {
                                hideIcon: !0
                            })]
                        })]
                    })]
                }), (0, k.jsx)(M, {})]
            })
        }), t[3] = n, t[4] = d, t[5] = p, t[6] = r, t[7] = l, t[8] = u, t[9] = m) : m = t[9], m
    }
}));
export {
    T as a, E as i, I as n, x as o, w as r, b as s, F as t
};
//# sourceMappingURL=e9be1454-c2txv00hs7bee9pl.js.map