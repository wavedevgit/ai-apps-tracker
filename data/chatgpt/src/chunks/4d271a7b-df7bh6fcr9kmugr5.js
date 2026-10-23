const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/a05edf66-f6ebinxrpvpwcliw.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-mdvd4786a87166cc.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-bcbq46iub1p0ca1t.js", "assets/30901919-s8bko9nrkqwv6i4f.js", "assets/c470f5ab-jwd0o7jx9i9say9k.js", "assets/0e5afe53-hxm3yzzjqriayom4.js", "assets/conversation-small-ep6mlz5m.css", "assets/8742b478-bmafmljnkmm000be.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    A8 as r,
    Ant as i,
    At as a,
    Att as o,
    Aw as s,
    Btt as c,
    Cnt as l,
    Crt as u,
    Ent as d,
    Fz as f,
    HN as ee,
    Irt as te,
    Itt as ne,
    Iz as re,
    K5 as p,
    LU as m,
    Lrt as h,
    Nat as ie,
    Ow as g,
    Qy as ae,
    R8 as oe,
    Rrt as _,
    Snt as se,
    UN as ce,
    Unt as le,
    Utt as ue,
    Vnt as de,
    Vw as fe,
    Wtt as v,
    Zy as pe,
    a2 as y,
    b5 as me,
    c2 as b,
    cn as x,
    d2 as he,
    eE as ge,
    fB as S,
    hn as C,
    hst as _e,
    irt as w,
    jat as T,
    mst as E,
    nrt as D,
    o2 as O,
    pB as k,
    q5 as A,
    rrt as j,
    wrt as M,
    xnt as N,
    zU as ve,
    zw as ye
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as P,
    Ln as be,
    Nn as F,
    Rn as I,
    Vn as L,
    Zt as R,
    cn as z,
    ln as B,
    rn as xe,
    zn as Se
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    a_n as Ce,
    cWn as we,
    nWn as Te,
    o_n as Ee,
    rWn as De,
    sWn as Oe
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Av as ke,
    Xg as V,
    Zg as H,
    jv as Ae
} from "./30901919-s8bko9nrkqwv6i4f.js";
import {
    n as U,
    r as W
} from "./2ea88c7a-lxyla91xs6iv7odf.js";
import {
    t as je
} from "./8d846022-bvik3sltoydb2o43.js";
import {
    n as Me,
    t as Ne
} from "./e1a66d2b-j2ykv8vl373si05j.js";
import {
    t as Pe
} from "./4c0f1f8e-o4zbuwgknf8ay6gx.js";
import {
    n as Fe,
    t as Ie
} from "./3509739a-odxqjytudqj358zb.js";
import {
    i as Le,
    o as Re,
    t as ze
} from "./25a66342-babsu7zrrg2k0adu.js";
import {
    n as Be,
    t as Ve
} from "./84983163-lwaa0ii6szlumu0s.js";
import {
    a as He,
    o as Ue,
    t as We
} from "./7517017f-k7dpvey5diskpxg5.js";
var G, K, Ge, Ke = e((() => {
        Ee(), A(), G = t(L()), K = P(), Ge = ({
            size: e = 60,
            thickness: t = 1 / 16,
            checkpoints: n,
            activeCheckpointId: r,
            isComplete: i = !1,
            onTransitionComplete: a,
            color: o
        }) => {
            let [s, c] = (0, G.useState)(0), l = n.findIndex(e => e.id === r), u = (0, G.useRef)(null), d = n[l];
            return (0, G.useEffect)(() => {
                if (!d || i) return;
                let e = n.length,
                    t = l * 100 / e,
                    r = (l + 1) * 100 / e;
                c(t);
                let a = null,
                    o = null,
                    s = 5 / d.estimatedTime,
                    f = e => {
                        o ??= e;
                        let n = e - o;
                        if (n !== 0) {
                            let e = r - t,
                                i = t + e * (1 - Math.exp(-s * n));
                            c(Math.min(i, r - 1e-4))
                        }
                        a = window.setTimeout(() => {
                            u.current = requestAnimationFrame(f)
                        }, 16)
                    };
                return u.current = requestAnimationFrame(f), () => {
                    a != null && window.clearTimeout(a), u.current != null && cancelAnimationFrame(u.current)
                }
            }, [l, i]), (0, K.jsx)(Ce, {
                sizeOverride: e,
                className: p(o == null && `text-primary`, o === `dark` && `text-back`, o === `light` && `text-white`),
                thickness: t,
                backgroundStrokeClassName: p(o == null && `stroke-[rgba(0,0,0,0.1)] dark:stroke-[rgba(0,0,0,0.32)]`, o === `dark` && `stroke-[rgba(0,0,0,0.32)]`, o === `light` && `stroke-[rgba(0,0,0,0.1)] `),
                percentage: i ? 100 : s,
                onTransitionEnd: () => {
                    i && a?.()
                },
                transitionDuration: `50ms`,
                transitionTimingFunction: `cubic-bezier(0.55, 0, 1, 1)`
            })
        }
    })),
    qe, q, Je, Ye, Xe, Ze = e((() => {
        Ke(), A(), a(), qe = t(L()), q = P(), Je = `https://persistent.oaistatic.com/canvas/loop-swirl.mp4`, Ye = `https://persistent.oaistatic.com/canvas/loop-swirl-poster.jpg`, Xe = ({
            title: e,
            checkpoints: t,
            activeCheckpointId: n,
            isComplete: r,
            onTransitionComplete: i
        }) => {
            let [a, o] = (0, qe.useState)(!1), s = t[t.findIndex(e => e.id === n)];
            return (0, q.jsx)(x.div, {
                className: `relative flex h-full w-full items-center justify-center`,
                transition: {
                    type: `spring`,
                    bounce: 0
                },
                children: (0, q.jsxs)(x.div, {
                    className: `flex -translate-y-12 flex-col items-center gap-3`,
                    style: {
                        minWidth: 90,
                        height: 90
                    },
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        type: `spring`,
                        duration: .5,
                        bounce: 0
                    },
                    children: [(0, q.jsxs)(x.div, {
                        className: `bg-token-bg-primary absolute overflow-hidden rounded-3xl shadow-2xl`,
                        initial: !1,
                        animate: {
                            width: 90,
                            height: 90,
                            opacity: +!a
                        },
                        transition: {
                            type: `spring`,
                            duration: .56,
                            bounce: 0
                        },
                        children: [(0, q.jsx)(`video`, {
                            muted: !0,
                            loop: !0,
                            autoPlay: !0,
                            playsInline: !0,
                            src: Je,
                            poster: Ye,
                            className: p(`absolute inset-0 z-0 h-full w-full object-cover transition-opacity duration-200`)
                        }), (0, q.jsx)(`div`, {
                            className: p(`relative z-10 flex h-full w-full items-center justify-center`, a ? `opacity-0` : `opacity-100`),
                            children: (0, q.jsx)(Ge, {
                                color: `light`,
                                checkpoints: t,
                                activeCheckpointId: n,
                                isComplete: r,
                                onTransitionComplete: () => {
                                    i?.(), o(!0)
                                },
                                thickness: 1 / 12
                            })
                        })]
                    }), (0, q.jsxs)(x.div, {
                        className: p(`flex flex-col items-center transition-opacity duration-200`, r ? `opacity-0` : `opacity-100`),
                        style: {
                            translateY: 110
                        },
                        children: [(0, q.jsx)(`span`, {
                            className: `text-token-text-primary font-semibold`,
                            children: e
                        }), s && (0, q.jsx)(x.span, {
                            className: `text-token-text-secondary flex items-baseline`,
                            children: (0, q.jsx)(`span`, {
                                className: `loading-shimmer`,
                                children: s.label
                            })
                        })]
                    })]
                })
            })
        }
    })),
    Qe = e((() => {
        Ze()
    })),
    $e, et, J, tt, nt, rt, it = e((() => {
        ge(), we(), De(), Ae(), H(), k(), fe(), s(), ae(), $e = t(L()), I(), et = t(Pe()), J = P(), tt = ({
            origin: e,
            url: t
        }) => (0, J.jsxs)(`div`, {
            "aria-label": t,
            className: `w-full min-w-0 pe-4 text-start whitespace-nowrap`,
            children: [(0, J.jsx)(`span`, {
                "aria-hidden": !0,
                className: `text-token-text-primary`,
                children: e
            }), (0, J.jsx)(`span`, {
                "aria-hidden": !0,
                className: `text-token-text-tertiary`,
                children: t.replace(e, ``)
            })]
        }), nt = ({
            request: e,
            isDenied: t = !1,
            onClick: n
        }) => {
            let [{
                width: r
            }, i] = (0, et.default)();
            return (0, J.jsxs)(`button`, {
                ref: i,
                className: `group relative z-0 my-1 flex w-full items-center`,
                onClick: n,
                children: [(0, J.jsx)(`div`, {
                    className: `sticky start-0 z-[-1] w-0`,
                    children: (0, J.jsx)(`div`, {
                        className: `absolute top-0 hidden h-8 -translate-y-1/2 bg-gray-100 group-hover:block`,
                        style: {
                            width: r
                        }
                    })
                }), (0, J.jsx)(`div`, {
                    className: `bg-token-main-surface-primary text-token-text-secondary sticky start-0 z-10 flex h-8 shrink-0 items-center px-2 group-hover:bg-gray-100`,
                    children: t ? (0, J.jsx)(V, {
                        className: `icon text-red-500`
                    }) : (0, J.jsx)(ke, {
                        className: `icon text-green-500`
                    })
                }), (0, J.jsx)(tt, {
                    ...e
                })]
            })
        }, rt = ({
            title: e,
            requests: t,
            onConfirm: r
        }) => {
            let i = Se(),
                [a, o] = (0, $e.useState)(() => new Set),
                s = () => {
                    for (let {
                            requestId: e,
                            approve: n,
                            deny: r
                        }
                        of t) a.has(e) ? r() : n();
                    r?.()
                },
                c = () => {
                    for (let e of t) e.deny()
                },
                l = e => {
                    o(t => {
                        let n = new Set(t);
                        return n.has(e) ? n.delete(e) : n.add(e), n
                    })
                },
                u = t.length - a.size;
            return (0, J.jsx)(g, {
                testId: `modal-confirm-fetch-request`,
                isOpen: !0,
                shouldIgnoreClickOutside: !0,
                onClose: s,
                type: `success`,
                title: (0, J.jsxs)(`div`, {
                    className: `flex justify-between`,
                    children: [(0, J.jsx)(`span`, {
                        className: `text-xl`,
                        children: (0, J.jsx)(F, {
                            id: `VmMpF1`,
                            defaultMessage: `Allow network access?`
                        })
                    }), (0, J.jsx)(pe, {
                        side: `top`,
                        contentClassName: `max-w-2xs!`,
                        label: (0, J.jsx)(F, {
                            id: `WT7tgj`,
                            defaultMessage: `Learn more about network requests in canvas`
                        }),
                        children: (0, J.jsx)(n, {
                            icon: S,
                            openNewTab: !0,
                            onClick: () => Te.logButtonClick(Oe.LEARN_MODE_ABOUT_NETWORK_REQUESTS),
                            as: `a`,
                            color: `ghost`,
                            size: `small`,
                            className: `text-token-text-secondary aspect-square p-1!`,
                            to: `https://help.openai.com/en/articles/9930697-what-is-the-canvas-feature-in-chatgpt-and-how-do-i-use-it#h_cd52fdbc16`
                        })
                    })]
                }),
                description: (0, J.jsxs)(`div`, {
                    className: `mt-3 flex flex-col gap-3`,
                    children: [(0, J.jsx)(`span`, {
                        className: `text-token-text-primary block`,
                        children: (0, J.jsx)(F, {
                            id: `qk11AX`,
                            defaultMessage: `{title} is trying to connect to the network. If you don’t recognize {numRequests, plural, one {this request} other {any of these requests}}, don’t allow this app access to the network.`,
                            values: {
                                title: `"${e}"`,
                                numRequests: t.length
                            }
                        })
                    }), (0, J.jsx)(`div`, {
                        className: `flex max-w-full flex-col`,
                        children: t.length > 1 ? (0, J.jsx)(`ul`, {
                            className: `border-token-border-default relative flex max-h-48 flex-col overflow-x-auto overflow-y-auto rounded-lg border`,
                            children: t.map(e => {
                                let {
                                    requestId: t
                                } = e;
                                return (0, J.jsx)(`li`, {
                                    children: (0, J.jsx)(nt, {
                                        request: e,
                                        isDenied: a.has(t),
                                        onClick: () => l(t)
                                    })
                                }, t)
                            })
                        }) : (0, J.jsx)(`div`, {
                            className: `no-scrollbar bg-token-main-surface-secondary overflow-x-auto rounded-lg p-2`,
                            children: (0, J.jsx)(tt, {
                                ...t[0]
                            })
                        })
                    })]
                }),
                primaryButton: (0, J.jsx)(ye.Button, {
                    disabled: u === 0,
                    title: t.length > 1 ? i.formatMessage({
                        id: `xpKkWv`,
                        defaultMessage: `Allow selected ({count})`
                    }, {
                        count: u
                    }) : i.formatMessage({
                        id: `ZeMrpd`,
                        defaultMessage: `Allow`
                    }),
                    color: `primary`,
                    onClick: s
                }),
                secondaryButton: (0, J.jsx)(ye.Button, {
                    title: i.formatMessage({
                        id: `TjJzqR`,
                        defaultMessage: `{count, plural, one {Deny} other {Deny all}}`
                    }, {
                        count: t.length
                    }),
                    color: `secondary`,
                    onClick: c
                })
            })
        }
    })),
    at, Y, ot, st = e((() => {
        Ke(), Me(), Ee(), a(), at = t(L()), I(), Y = P(), ot = ({
            checkpoints: e,
            activeCheckpointId: t,
            isIndeterminate: n = !1,
            isComplete: r
        }) => {
            let [i, a] = (0, at.useState)(r);
            return (0, at.useEffect)(() => {
                a(r)
            }, [t]), (0, Y.jsx)(C, {
                children: (t != null && !i || n) && (0, Y.jsxs)(x.div, {
                    initial: {
                        opacity: 0
                    },
                    exit: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    className: `bg-token-bg-primary absolute end-2 bottom-2 flex items-center gap-2 rounded-full px-3 py-1.5 shadow-lg`,
                    children: [n ? (0, Y.jsx)(Ce, {
                        percentage: 30,
                        thickness: 1 / 12,
                        className: `text-primary animate-spin`,
                        backgroundStrokeClassName: `dark:stroke-[rgba(255,255,255,0.4)] stroke-[rgba(0,0,0,0.1)]`,
                        sizeOverride: 12
                    }) : t && (0, Y.jsx)(Ge, {
                        size: 12,
                        thickness: 1 / 12,
                        checkpoints: e,
                        activeCheckpointId: t,
                        isComplete: r,
                        onTransitionComplete: () => a(!0)
                    }), (0, Y.jsxs)(`span`, {
                        className: `text-token-text-secondary flex items-baseline text-sm`,
                        children: [(0, Y.jsx)(F, {
                            id: `zfcWbe`,
                            defaultMessage: `Updating`
                        }), (0, Y.jsx)(Ne, {
                            gap: 1.5,
                            padding: 2,
                            size: 2
                        })]
                    })]
                })
            })
        }
    })),
    ct = e((() => {
        ze()
    })),
    X, Z, lt, ut, dt, ft = e((() => {
        o(), Ue(), m(), ie(), w(), te(), ze(), X = t(L()), I(), R(), Z = () => ne(D.getItem(j.CODE_EXECUTION_DOMAIN_ALLOW_LIST), e => ue(e, {
            origin: v,
            expiresAt: c
        }), []).filter(({
            expiresAt: e
        }) => e >= Date.now()), lt = () => {
            D.removeItem(j.CODE_EXECUTION_DOMAIN_ALLOW_LIST)
        }, ut = (e, t) => {
            let {
                origin: n
            } = new URL(e), r = [...We], i = Z().map(({
                origin: e
            }) => e);
            return t && (r = r.concat(i)), r.includes(n)
        }, dt = ({
            networkAccessDeniedMessage: e,
            disableNetworkRequests: t
        }) => {
            let n = ve(),
                r = Se(),
                [i, a] = (0, X.useState)([]);
            return {
                onViolation: (0, X.useCallback)(i => {
                    let {
                        blockedURI: o
                    } = i;
                    try {
                        if (t) return n.danger(e ?? r.formatMessage({
                            id: `Lp7cKY`,
                            defaultMessage: `Network access is disabled.`
                        }), {
                            loggingTitle: `Network access is disabled.`,
                            toastId: `network_access_denied`
                        });
                        h.count(_.WEB_SANDBOX, `network_access_requested`);
                        let i = Le(o);
                        if (i == null) {
                            h.count(_.WEB_SANDBOX, `network_access_request.deny`);
                            return
                        }
                        let s = e => {
                                h.count(_.WEB_SANDBOX, `network_access_request.${e?`allow`:`deny`}`), a(e => e.filter(e => !ut(e.url, !t) && e.url !== o))
                            },
                            c = () => {
                                D.setItem(j.CODE_EXECUTION_DOMAIN_ALLOW_LIST, [...Z(), {
                                    origin: i,
                                    expiresAt: Date.now() + 2160 * 60 * 60 * 1e3
                                }]), s(!0)
                            };
                        a(e => [...e, {
                            requestId: xe(),
                            url: o,
                            origin: i,
                            approve: c,
                            deny: () => s(!1)
                        }])
                    } catch (e) {
                        T.addError(e)
                    }
                }, [t, n, e, r]),
                pendingFetchRequests: i
            }
        }
    }));

function pt({
    useIntrinsicHeight: e,
    intrinsicHeight: t,
    intrinsicHeightFallback: n
}) {
    return e ? t != null && t > 0 ? t : n ?? null : null
}

function mt({
    previousNetworkPolicy: e,
    networkPolicy: t,
    hasActiveRun: n
}) {
    return n && vt[t] < vt[e]
}
var Q, $, ht, gt, _t, vt, yt, bt, xt, St, Ct, wt, Tt, Et = e((() => {
        Qe(), it(), Fe(), st(), ct(), Be(), ft(), b(), r(), re(), ie(), E(), te(), u(), ee(), N(), je(), O(), A(), a(), Q = t(L()), I(), R(), Ue(), $ = P(), B(), ht = y(() => z(() => import(`./a05edf66-f6ebinxrpvpwcliw.js`).then(e => e.SafeLinkWarningModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))), gt = () => `?` + [``, ``].filter(Boolean).join(`&`), _t = be({
            creatingVisualization: {
                id: `CodeExecutionSandbox.creatingVisualization`,
                defaultMessage: `Creating visualization`
            }
        }), vt = {
            none: 0,
            "deps-only": 1,
            "deps-and-user-approved": 2
        }, yt = `allow-scripts allow-same-origin allow-forms`, bt = `allow-scripts allow-same-origin`, xt = [{
            id: U.INITIALIZING,
            label: `Initializing environment`,
            estimatedTime: 1e3
        }, {
            id: U.INSTALLING_PACKAGES,
            label: `Installing packages`,
            estimatedTime: 2e3
        }, {
            id: U.RUNNING_CODE,
            label: `Ready`,
            estimatedTime: 1
        }], St = () => i() ? `ios` : le() ? `windows` : se() ? `android` : de() ? `safari` : d() || l() ? `chrome` : `unknown`, Ct = e => {
            h.count(_.WEB_SANDBOX, `${e}.eval`), M(`chatgpt_web_sandbox_code_run`, `${e}`)
        }, wt = e => {
            M(`chatgpt_web_sandbox_environment_error`, `${e.error.name}: ${e.error.message}`), T.addError(`Code execution environment error`, {
                ...e.error,
                errorMessage: `${e.error.name}: ${e.error.message}`
            }), e.error.name === `ServiceWorker` && h.count(_.WEB_SANDBOX, `service_worker_connection_failure`, [{
                key: `agent`,
                value: St()
            }, {
                key: `is_shared_surface`,
                value: String(e.isSharedSurface)
            }]), e.activeRun?.runId != null && e.activeRun.runId === e.activeRun?.runId && h.count(_.WEB_SANDBOX, `${e.activeRun.language}.environment_error`)
        }, Tt = ({
            ref: e,
            id: t,
            isSharedSurface: n = !1,
            title: r,
            visuallyHidden: i,
            disablePermissions: a,
            isCodeUpdating: o,
            onCodeRunComplete: s,
            onAppBlockMessage: c,
            networkPolicy: l = `deps-and-user-approved`,
            disableExternalNavigation: u = !1,
            networkAccessDeniedMessage: d,
            unsafeAllowAllNetworkRequests: ee,
            additionalResourceDomains: te,
            sandboxPermissions: ne,
            sandboxOriginId: re,
            enableTransition: m,
            enableAnimation: ie = !0,
            onRetryCodeRun: g,
            showInlineLoadingState: ae = !1,
            transparentBackground: se = !1,
            useIntrinsicHeight: le = !1,
            intrinsicHeightFallback: ue,
            iframeTabIndex: de = -1,
            enableLinkConfirmationModal: fe = !0
        }) => {
            let v = `${He(re)}${gt()}`,
                [pe, y] = (0, Q.useState)(0),
                [b] = (0, Q.useState)(() => oe(null)),
                ge = Se(),
                S = (0, Q.useRef)(null),
                C = (0, Q.useRef)(!1),
                w = (0, Q.useRef)(null),
                T = (0, Q.useRef)(!1),
                [E, D] = (0, Q.useState)(null),
                [O, k] = (0, Q.useState)(!1),
                [A, j] = (0, Q.useState)(null),
                M = l !== `none`,
                N = l === `deps-and-user-approved`,
                ve = n || u,
                ye = ne ?? (ve ? bt : yt),
                {
                    onViolation: P,
                    pendingFetchRequests: be
                } = dt({
                    disableNetworkRequests: !N,
                    networkAccessDeniedMessage: d
                }),
                F = (0, Q.useRef)(P);
            F.current = P;
            let I = (0, Q.useRef)(c);
            ce(() => {
                I.current = c
            }, [c]);
            let L = (0, Q.useRef)(M);
            L.current = M;
            let R = (0, Q.useRef)(N);
            R.current = N;
            let z = (0, Q.useRef)(u);
            ce(() => {
                z.current = u
            }, [u]);
            let B = e => {
                    let t = window.open(e, `_blank`, `noopener,noreferrer`);
                    if (t) try {
                        t.opener = null
                    } catch {}
                    return t
                },
                Ce = () => {
                    let e = window.open(`about:blank`, `_blank`);
                    if (!e) return null;
                    try {
                        e.opener = null
                    } catch {}
                    return e
                },
                we = e => {
                    he(ht, {
                        urls: e,
                        displayUrls: e
                    })
                },
                Te = e => {
                    let t;
                    try {
                        t = new URL(e)
                    } catch {
                        return
                    }
                    if (t.protocol !== `http:` && t.protocol !== `https:`) return;
                    if (z.current || !L.current) {
                        h.count(_.WEB_SANDBOX, `external_navigation_blocked`);
                        return
                    }
                    let n = t.href;
                    if (!R.current) {
                        h.count(_.WEB_SANDBOX, `external_navigation_blocked`);
                        return
                    }
                    h.count(_.WEB_SANDBOX, `external_navigation_request.shown`), we(n)
                },
                Ee = e => {
                    let t;
                    try {
                        t = new URL(e.action)
                    } catch {
                        return
                    }
                    if (t.protocol !== `http:` && t.protocol !== `https:`) return;
                    let n = e.method.trim().toLowerCase();
                    if (n === `get`) {
                        let n = new URL(t.href);
                        for (let {
                                name: t,
                                value: r
                            }
                            of e.entries) n.searchParams.append(t, r);
                        B(n.href);
                        return
                    }
                    if (n !== `post`) {
                        B(t.href);
                        return
                    }
                    if (e.hasFiles) {
                        B(t.href);
                        return
                    }
                    let r = Ce();
                    if (!r) {
                        B(t.href);
                        return
                    }
                    let i = null;
                    try {
                        i = r.document
                    } catch {
                        B(t.href);
                        return
                    }
                    i.open(), i.write(`<!doctype html><html><head><title>Redirecting</title></head><body></body></html>`), i.close();
                    let a = i.createElement(`form`);
                    a.method = `post`, a.action = t.href, e.enctype && (a.enctype = e.enctype);
                    for (let {
                            name: t,
                            value: n
                        }
                        of e.entries) {
                        let e = i.createElement(`input`);
                        e.type = `hidden`, e.name = t, e.value = n, a.appendChild(e)
                    }
                    i.body.appendChild(a), a.submit()
                },
                De = (e, t) => {
                    if (e.method.trim().toLowerCase() !== `get`) return t.href;
                    let n = new URL(t.href);
                    for (let {
                            name: t,
                            value: r
                        }
                        of e.entries) n.searchParams.append(t, r);
                    return n.href
                },
                Oe = (e, t) => {
                    he(ht, {
                        urls: t,
                        displayUrls: t,
                        suppressNavigation: !0,
                        onAction: t => {
                            t === `open` && Ee(e)
                        }
                    })
                },
                ke = e => {
                    let t;
                    try {
                        t = new URL(e.action)
                    } catch {
                        return
                    }
                    if (!(t.protocol !== `http:` && t.protocol !== `https:`)) {
                        if (z.current || !L.current) {
                            h.count(_.WEB_SANDBOX, `external_form_blocked`);
                            return
                        }
                        if (!R.current) {
                            h.count(_.WEB_SANDBOX, `external_form_blocked`);
                            return
                        }
                        h.count(_.WEB_SANDBOX, `external_form_request.shown`), Oe(e, De(e, t))
                    }
                };
            ce(() => {
                let e = w.current;
                if (!e) return;
                T.current = !0;
                let t = {
                    sendInstrument: Ie,
                    notifyEnvironmentError: e => {
                        wt({
                            error: e,
                            isSharedSurface: n,
                            activeRun: S.current
                        }), lt(), y(e => e + 1), H()
                    },
                    notifyBackgroundColor: () => {},
                    notifyIntrinsicHeight: e => {
                        le && j(Math.ceil(e))
                    },
                    notifySecurityPolicyViolation: e => {
                        F.current(e)
                    },
                    notifyAppBlockMessage: e => {
                        I.current?.(e)
                    }
                };
                return fe && (t.openExternal = ({
                    href: e
                }) => {
                    Te(e)
                }, t.openExternalForm = e => {
                    ke(e)
                }), Ve(e, t, [`runUserCode`]).then(e => {
                    b.set(e)
                }), () => {
                    b.set(null), T.current = !1
                }
            }, [pe, v]);
            let V = async () => (await me(() => b() != null), _e(b())), H = ({
                preservePreview: e = !1
            } = {}) => {
                S.current = null, C.current = e, e || (D(null), k(!1), j(null)), s?.()
            }, Ae = (0, Q.useRef)(l);
            (0, Q.useEffect)(() => {
                let e = mt({
                    previousNetworkPolicy: Ae.current,
                    networkPolicy: l,
                    hasActiveRun: S.current != null || C.current
                });
                Ae.current = l, e && (b()?.stop(), y(e => e + 1), S.current = null, C.current = !1, D(null), k(!1), j(null), s?.(), g != null && setTimeout(() => {
                    g()
                }))
            }, [b, l, s, g]);
            let je = async function*({
                code: e,
                language: n,
                additionalGlobals: r,
                expectReadySignal: i,
                frameColorScheme: a,
                previewDiagnostics: o,
                shouldPreservePreviewOnFatalError: s
            }) {
                C.current && (k(!1), j(null)), D(U.INITIALIZING), Ct(n);
                let c = await V(),
                    l = xe(),
                    d = !1;
                S.current = {
                    runId: l,
                    language: n
                }, C.current = !1;
                let f = N ? Z().map(({
                        origin: e
                    }) => e) : [],
                    ne = Re({
                        disableNetworkRequests: !M,
                        domains: f,
                        additionalResourceDomains: te,
                        unsafeAllowAllNetworkRequests: N && ee
                    });
                for await (let f of await c.runUserCode({
                    previewDiagnostics: o,
                    code: e,
                    id: t,
                    language: n,
                    csp: ne,
                    additionalGlobals: r,
                    expectReadySignal: i,
                    frameColorScheme: a,
                    enableExternalNavigationGating: fe,
                    disableExternalNavigation: u,
                    allowPopups: !ve
                })) {
                    let e = {
                        timestamp: Date.now(),
                        id: xe(),
                        runId: l
                    };
                    switch (f.type) {
                        case W.RUN_START:
                            yield {
                                ...f, ...e
                            };
                            break;
                        case W.OUTPUT:
                            yield {
                                ...f, ...e
                            };
                            break;
                        case W.ERROR:
                            h.count(_.WEB_SANDBOX, `${n}.error`), yield {
                                ...f,
                                ...e
                            };
                            break;
                        case W.ENVIRONMENT_STATUS:
                            f.status === U.RUNNING_CODE && (d = !0), D(f.status), m || k(f.status === U.RUNNING_CODE), yield {
                                ...f,
                                ...e
                            };
                            break;
                        case W.RUN_COMPLETE:
                            if (f.type === W.RUN_COMPLETE && f.wasFatalError && h.count(_.WEB_SANDBOX, `${n}.fatal_runtime_error`), yield {
                                    ...f,
                                    ...e
                                }, S.current?.runId === l) {
                                let e = n === `html` && d && f.wasFatalError === !0 && f.wasCancelled !== !0 && s?.() === !0;
                                H({
                                    preservePreview: e
                                })
                            }
                            break;
                        case W.LOG:
                            yield {
                                ...f, ...e
                            };
                            break;
                        default:
                            continue
                    }
                }
            }, Me = async (e, n) => {
                (await V()).prepareEnvironment({
                    code: e,
                    language: n,
                    id: t
                })
            }, Ne = async e => {
                await (await V()).setAdditionalGlobals({
                    additionalGlobals: {
                        __appBlockStream: e
                    }
                })
            }, Pe = async e => {
                await (await V()).setAdditionalGlobals({
                    additionalGlobals: {
                        __appBlockSurface: e
                    }
                })
            }, Fe = async () => {
                await me(() => b() != null), b()?.stop(), C.current && H()
            }, Le = async () => (await V()).screenshot(), ze = () => {
                w.current?.focus()
            };
            (0, Q.useImperativeHandle)(e, () => ({
                stop: Fe,
                evalAsync: je,
                prepareEnvironment: Me,
                updateAppBlockStream: Ne,
                updateAppBlockSurface: Pe,
                updateAppBlockMessenger: async e => {
                    await (await V()).setAdditionalGlobals({
                        additionalGlobals: {
                            __appBlockMessenger: e
                        }
                    })
                },
                screenshot: Le,
                focus: ze
            }));
            let Be = ie ? O && m ? {
                    type: `spring`,
                    bounce: 0,
                    delay: .12
                } : {
                    type: `spring`,
                    bounce: 0
                } : {
                    duration: 0
                },
                Ue = a ? `` : `midi`,
                We = (ae || S.current?.language === `recharts` || S.current?.language === `threejs`) && !i && !m && !O,
                G = S.current?.language === `threejs`,
                K = pt({
                    useIntrinsicHeight: le,
                    intrinsicHeight: A,
                    intrinsicHeightFallback: ue
                });
            return (0, $.jsxs)(f, {
                children: [(0, $.jsxs)(`div`, {
                    className: p(`relative flex`, i ? `fixed h-0 w-0` : `h-full w-full`),
                    style: K == null ? void 0 : {
                        height: K
                    },
                    children: [!i && E != null && m && (0, $.jsx)(Xe, {
                        isComplete: E === U.RUNNING_CODE,
                        onTransitionComplete: () => k(!0),
                        activeCheckpointId: E,
                        title: r,
                        checkpoints: xt
                    }), (0, $.jsx)(x.div, {
                        className: p(`absolute inset-0 m-auto origin-center overflow-hidden`, se ? `bg-transparent` : `bg-token-main-surface-primary`, G && `corner-superellipse/1.1 rounded-3xl`, O ? `pointer-events-auto` : `pointer-events-none`),
                        animate: {
                            opacity: +!!O,
                            ...O ? {
                                scale: 1
                            } : {
                                scale: .95
                            }
                        },
                        transition: Be,
                        children: (0, $.jsx)(x.iframe, {
                            title: r,
                            className: `h-full w-full overflow-hidden`,
                            transition: Be,
                            "aria-hidden": i ? `true` : void 0,
                            allow: Ue,
                            src: v,
                            sandbox: ye,
                            ref: w,
                            tabIndex: de
                        }, `${v}:${pe}`)
                    }), We && (0, $.jsx)(`div`, {
                        "aria-live": `polite`,
                        className: `pointer-events-none absolute inset-0 z-10 h-full min-h-0 w-full bg-transparent`,
                        role: `status`,
                        children: (0, $.jsx)(`div`, {
                            className: `max-w-[70%] space-y-0.5`,
                            children: (0, $.jsx)(`p`, {
                                className: `loading-shimmer text-base font-medium select-none`,
                                children: ge.formatMessage(_t.creatingVisualization)
                            })
                        })
                    }), O && (0, $.jsx)(ot, {
                        isIndeterminate: o,
                        isComplete: E === U.RUNNING_CODE,
                        activeCheckpointId: E,
                        checkpoints: xt
                    })]
                }), be.length > 0 && (0, $.jsx)(rt, {
                    title: r,
                    requests: be,
                    onConfirm: () => {
                        y(e => e + 1), D(null), k(!1), setTimeout(() => {
                            g?.()
                        })
                    }
                })]
            })
        }
    })),
    Dt = e((() => {
        Et()
    }));
export {
    Tt as n, Et as r, Dt as t
};
//# sourceMappingURL=4d271a7b-df7bh6fcr9kmugr5.js.map