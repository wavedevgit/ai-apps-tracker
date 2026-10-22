const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/a05edf66-hlw97uwss7e2zzdv.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-itnrgnth03y1sm9d.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-i79e9c315w50am5f.js", "assets/30901919-ikyi1r55w2i02fom.js", "assets/c470f5ab-lpy67c9in1skobas.js", "assets/0e5afe53-jfvcgv06snw44wce.js", "assets/conversation-small-dl8qqd6x.css", "assets/8742b478-koa121s644rz34gp.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $8 as n,
    $T as r,
    At as i,
    Aw as a,
    Cat as o,
    Drt as s,
    Ert as c,
    Fz as l,
    HN as u,
    I5 as d,
    Iz as f,
    Jnt as p,
    Knt as m,
    L8 as ee,
    LU as te,
    Nnt as ne,
    Ort as h,
    Ow as re,
    Qy as ie,
    UN as ae,
    Vw as g,
    Zy as oe,
    a2 as _,
    a5 as se,
    ast as ce,
    bnt as le,
    c2 as ue,
    c7 as v,
    cn as y,
    d2 as de,
    dnt as fe,
    eE as pe,
    f5 as me,
    fB as b,
    fnt as he,
    gnt as x,
    hn as S,
    ist as ge,
    jnt as C,
    k8 as w,
    l5 as T,
    l7 as E,
    mrt as D,
    o2 as O,
    p5 as k,
    pB as A,
    pnt as _e,
    prt as j,
    qnt as M,
    xat as N,
    zU as ve,
    zw as ye
} from "./4813494d-itnrgnth03y1sm9d.js";
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
    DUn as Ce,
    EUn as we,
    MUn as Te,
    Rgn as Ee,
    jUn as De,
    zgn as Oe
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    $g as ke,
    Mv as V,
    Nv as H,
    Qg as U
} from "./30901919-ikyi1r55w2i02fom.js";
import {
    n as W,
    r as G
} from "./2ea88c7a-lxyla91xs6iv7odf.js";
import {
    t as Ae
} from "./8d846022-bvik3sltoydb2o43.js";
import {
    n as je,
    t as Me
} from "./e1a66d2b-dh8paz0enwodur5r.js";
import {
    t as Ne
} from "./4c0f1f8e-o4zbuwgknf8ay6gx.js";
import {
    n as Pe,
    t as Fe
} from "./3509739a-nllzwnpkad0qhvlw.js";
import {
    i as Ie,
    o as Le,
    t as Re
} from "./25a66342-g3hzpau130damt8s.js";
import {
    n as ze,
    t as Be
} from "./84983163-of6zo3zx62g3fkm0.js";
import {
    a as Ve,
    o as He,
    t as Ue
} from "./7517017f-n5ndih81sgq67qr5.js";
var K, q, We, Ge = e((() => {
        Oe(), E(), K = t(L()), q = P(), We = ({
            size: e = 60,
            thickness: t = 1 / 16,
            checkpoints: n,
            activeCheckpointId: r,
            isComplete: i = !1,
            onTransitionComplete: a,
            color: o
        }) => {
            let [s, c] = (0, K.useState)(0), l = n.findIndex(e => e.id === r), u = (0, K.useRef)(null), d = n[l];
            return (0, K.useEffect)(() => {
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
            }, [l, i]), (0, q.jsx)(Ee, {
                sizeOverride: e,
                className: v(o == null && `text-primary`, o === `dark` && `text-back`, o === `light` && `text-white`),
                thickness: t,
                backgroundStrokeClassName: v(o == null && `stroke-[rgba(0,0,0,0.1)] dark:stroke-[rgba(0,0,0,0.32)]`, o === `dark` && `stroke-[rgba(0,0,0,0.32)]`, o === `light` && `stroke-[rgba(0,0,0,0.1)] `),
                percentage: i ? 100 : s,
                onTransitionEnd: () => {
                    i && a?.()
                },
                transitionDuration: `50ms`,
                transitionTimingFunction: `cubic-bezier(0.55, 0, 1, 1)`
            })
        }
    })),
    Ke, J, qe, Je, Ye, Xe = e((() => {
        Ge(), E(), i(), Ke = t(L()), J = P(), qe = `https://persistent.oaistatic.com/canvas/loop-swirl.mp4`, Je = `https://persistent.oaistatic.com/canvas/loop-swirl-poster.jpg`, Ye = ({
            title: e,
            checkpoints: t,
            activeCheckpointId: n,
            isComplete: r,
            onTransitionComplete: i
        }) => {
            let [a, o] = (0, Ke.useState)(!1), s = t[t.findIndex(e => e.id === n)];
            return (0, J.jsx)(y.div, {
                className: `relative flex h-full w-full items-center justify-center`,
                transition: {
                    type: `spring`,
                    bounce: 0
                },
                children: (0, J.jsxs)(y.div, {
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
                    children: [(0, J.jsxs)(y.div, {
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
                        children: [(0, J.jsx)(`video`, {
                            muted: !0,
                            loop: !0,
                            autoPlay: !0,
                            playsInline: !0,
                            src: qe,
                            poster: Je,
                            className: v(`absolute inset-0 z-0 h-full w-full object-cover transition-opacity duration-200`)
                        }), (0, J.jsx)(`div`, {
                            className: v(`relative z-10 flex h-full w-full items-center justify-center`, a ? `opacity-0` : `opacity-100`),
                            children: (0, J.jsx)(We, {
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
                    }), (0, J.jsxs)(y.div, {
                        className: v(`flex flex-col items-center transition-opacity duration-200`, r ? `opacity-0` : `opacity-100`),
                        style: {
                            translateY: 110
                        },
                        children: [(0, J.jsx)(`span`, {
                            className: `text-token-text-primary font-semibold`,
                            children: e
                        }), s && (0, J.jsx)(y.span, {
                            className: `text-token-text-secondary flex items-baseline`,
                            children: (0, J.jsx)(`span`, {
                                className: `loading-shimmer`,
                                children: s.label
                            })
                        })]
                    })]
                })
            })
        }
    })),
    Ze = e((() => {
        Xe()
    })),
    Qe, $e, Y, et, tt, nt, rt = e((() => {
        pe(), Te(), Ce(), H(), ke(), A(), g(), a(), ie(), Qe = t(L()), I(), $e = t(Ne()), Y = P(), et = ({
            origin: e,
            url: t
        }) => (0, Y.jsxs)(`div`, {
            "aria-label": t,
            className: `w-full min-w-0 pe-4 text-start whitespace-nowrap`,
            children: [(0, Y.jsx)(`span`, {
                "aria-hidden": !0,
                className: `text-token-text-primary`,
                children: e
            }), (0, Y.jsx)(`span`, {
                "aria-hidden": !0,
                className: `text-token-text-tertiary`,
                children: t.replace(e, ``)
            })]
        }), tt = ({
            request: e,
            isDenied: t = !1,
            onClick: n
        }) => {
            let [{
                width: r
            }, i] = (0, $e.default)();
            return (0, Y.jsxs)(`button`, {
                ref: i,
                className: `group relative z-0 my-1 flex w-full items-center`,
                onClick: n,
                children: [(0, Y.jsx)(`div`, {
                    className: `sticky start-0 z-[-1] w-0`,
                    children: (0, Y.jsx)(`div`, {
                        className: `absolute top-0 hidden h-8 -translate-y-1/2 bg-gray-100 group-hover:block`,
                        style: {
                            width: r
                        }
                    })
                }), (0, Y.jsx)(`div`, {
                    className: `bg-token-main-surface-primary text-token-text-secondary sticky start-0 z-10 flex h-8 shrink-0 items-center px-2 group-hover:bg-gray-100`,
                    children: t ? (0, Y.jsx)(U, {
                        className: `icon text-red-500`
                    }) : (0, Y.jsx)(V, {
                        className: `icon text-green-500`
                    })
                }), (0, Y.jsx)(et, {
                    ...e
                })]
            })
        }, nt = ({
            title: e,
            requests: t,
            onConfirm: n
        }) => {
            let i = Se(),
                [a, o] = (0, Qe.useState)(() => new Set),
                s = () => {
                    for (let {
                            requestId: e,
                            approve: n,
                            deny: r
                        }
                        of t) a.has(e) ? r() : n();
                    n?.()
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
            return (0, Y.jsx)(re, {
                testId: `modal-confirm-fetch-request`,
                isOpen: !0,
                shouldIgnoreClickOutside: !0,
                onClose: s,
                type: `success`,
                title: (0, Y.jsxs)(`div`, {
                    className: `flex justify-between`,
                    children: [(0, Y.jsx)(`span`, {
                        className: `text-xl`,
                        children: (0, Y.jsx)(F, {
                            id: `VmMpF1`,
                            defaultMessage: `Allow network access?`
                        })
                    }), (0, Y.jsx)(oe, {
                        side: `top`,
                        contentClassName: `max-w-2xs!`,
                        label: (0, Y.jsx)(F, {
                            id: `WT7tgj`,
                            defaultMessage: `Learn more about network requests in canvas`
                        }),
                        children: (0, Y.jsx)(r, {
                            icon: b,
                            openNewTab: !0,
                            onClick: () => we.logButtonClick(De.LEARN_MODE_ABOUT_NETWORK_REQUESTS),
                            as: `a`,
                            color: `ghost`,
                            size: `small`,
                            className: `text-token-text-secondary aspect-square p-1!`,
                            to: `https://help.openai.com/en/articles/9930697-what-is-the-canvas-feature-in-chatgpt-and-how-do-i-use-it#h_cd52fdbc16`
                        })
                    })]
                }),
                description: (0, Y.jsxs)(`div`, {
                    className: `mt-3 flex flex-col gap-3`,
                    children: [(0, Y.jsx)(`span`, {
                        className: `text-token-text-primary block`,
                        children: (0, Y.jsx)(F, {
                            id: `qk11AX`,
                            defaultMessage: `{title} is trying to connect to the network. If you don’t recognize {numRequests, plural, one {this request} other {any of these requests}}, don’t allow this app access to the network.`,
                            values: {
                                title: `"${e}"`,
                                numRequests: t.length
                            }
                        })
                    }), (0, Y.jsx)(`div`, {
                        className: `flex max-w-full flex-col`,
                        children: t.length > 1 ? (0, Y.jsx)(`ul`, {
                            className: `border-token-border-default relative flex max-h-48 flex-col overflow-x-auto overflow-y-auto rounded-lg border`,
                            children: t.map(e => {
                                let {
                                    requestId: t
                                } = e;
                                return (0, Y.jsx)(`li`, {
                                    children: (0, Y.jsx)(tt, {
                                        request: e,
                                        isDenied: a.has(t),
                                        onClick: () => l(t)
                                    })
                                }, t)
                            })
                        }) : (0, Y.jsx)(`div`, {
                            className: `no-scrollbar bg-token-main-surface-secondary overflow-x-auto rounded-lg p-2`,
                            children: (0, Y.jsx)(et, {
                                ...t[0]
                            })
                        })
                    })]
                }),
                primaryButton: (0, Y.jsx)(ye.Button, {
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
                secondaryButton: (0, Y.jsx)(ye.Button, {
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
    it, X, at, ot = e((() => {
        Ge(), je(), Oe(), i(), it = t(L()), I(), X = P(), at = ({
            checkpoints: e,
            activeCheckpointId: t,
            isIndeterminate: n = !1,
            isComplete: r
        }) => {
            let [i, a] = (0, it.useState)(r);
            return (0, it.useEffect)(() => {
                a(r)
            }, [t]), (0, X.jsx)(S, {
                children: (t != null && !i || n) && (0, X.jsxs)(y.div, {
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
                    children: [n ? (0, X.jsx)(Ee, {
                        percentage: 30,
                        thickness: 1 / 12,
                        className: `text-primary animate-spin`,
                        backgroundStrokeClassName: `dark:stroke-[rgba(255,255,255,0.4)] stroke-[rgba(0,0,0,0.1)]`,
                        sizeOverride: 12
                    }) : t && (0, X.jsx)(We, {
                        size: 12,
                        thickness: 1 / 12,
                        checkpoints: e,
                        activeCheckpointId: t,
                        isComplete: r,
                        onTransitionComplete: () => a(!0)
                    }), (0, X.jsxs)(`span`, {
                        className: `text-token-text-secondary flex items-baseline text-sm`,
                        children: [(0, X.jsx)(F, {
                            id: `zfcWbe`,
                            defaultMessage: `Updating`
                        }), (0, X.jsx)(Me, {
                            gap: 1.5,
                            padding: 2,
                            size: 2
                        })]
                    })]
                })
            })
        }
    })),
    st = e((() => {
        Re()
    })),
    ct, Z, lt, ut, dt, ft = e((() => {
        n(), He(), te(), o(), p(), c(), Re(), ct = t(L()), I(), R(), Z = () => se(m.getItem(M.CODE_EXECUTION_DOMAIN_ALLOW_LIST), e => me(e, {
            origin: k,
            expiresAt: T
        }), []).filter(({
            expiresAt: e
        }) => e >= Date.now()), lt = () => {
            m.removeItem(M.CODE_EXECUTION_DOMAIN_ALLOW_LIST)
        }, ut = (e, t) => {
            let {
                origin: n
            } = new URL(e), r = [...Ue], i = Z().map(({
                origin: e
            }) => e);
            return t && (r = r.concat(i)), r.includes(n)
        }, dt = ({
            networkAccessDeniedMessage: e,
            disableNetworkRequests: t
        }) => {
            let n = ve(),
                r = Se(),
                [i, a] = (0, ct.useState)([]);
            return {
                onViolation: (0, ct.useCallback)(i => {
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
                        s.count(h.WEB_SANDBOX, `network_access_requested`);
                        let i = Ie(o);
                        if (i == null) {
                            s.count(h.WEB_SANDBOX, `network_access_request.deny`);
                            return
                        }
                        let c = e => {
                                s.count(h.WEB_SANDBOX, `network_access_request.${e?`allow`:`deny`}`), a(e => e.filter(e => !ut(e.url, !t) && e.url !== o))
                            },
                            l = () => {
                                m.setItem(M.CODE_EXECUTION_DOMAIN_ALLOW_LIST, [...Z(), {
                                    origin: i,
                                    expiresAt: Date.now() + 2160 * 60 * 60 * 1e3
                                }]), c(!0)
                            };
                        a(e => [...e, {
                            requestId: xe(),
                            url: o,
                            origin: i,
                            approve: l,
                            deny: () => c(!1)
                        }])
                    } catch (e) {
                        N.addError(e)
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
        Ze(), rt(), Pe(), ot(), st(), ze(), ft(), ue(), w(), f(), o(), ge(), c(), j(), u(), fe(), Ae(), O(), E(), i(), Q = t(L()), I(), R(), He(), $ = P(), B(), ht = _(() => z(() => import(`./a05edf66-hlw97uwss7e2zzdv.js`).then(e => e.SafeLinkWarningModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))), gt = () => `?` + [``, ``].filter(Boolean).join(`&`), _t = be({
            creatingVisualization: {
                id: `CodeExecutionSandbox.creatingVisualization`,
                defaultMessage: `Creating visualization`
            }
        }), vt = {
            none: 0,
            "deps-only": 1,
            "deps-and-user-approved": 2
        }, yt = `allow-scripts allow-same-origin allow-forms`, bt = `allow-scripts allow-same-origin`, xt = [{
            id: W.INITIALIZING,
            label: `Initializing environment`,
            estimatedTime: 1e3
        }, {
            id: W.INSTALLING_PACKAGES,
            label: `Installing packages`,
            estimatedTime: 2e3
        }, {
            id: W.RUNNING_CODE,
            label: `Ready`,
            estimatedTime: 1
        }], St = () => le() ? `ios` : ne() ? `windows` : he() ? `android` : C() ? `safari` : x() || _e() ? `chrome` : `unknown`, Ct = e => {
            s.count(h.WEB_SANDBOX, `${e}.eval`), D(`chatgpt_web_sandbox_code_run`, `${e}`)
        }, wt = e => {
            D(`chatgpt_web_sandbox_environment_error`, `${e.error.name}: ${e.error.message}`), N.addError(`Code execution environment error`, {
                ...e.error,
                errorMessage: `${e.error.name}: ${e.error.message}`
            }), e.error.name === `ServiceWorker` && s.count(h.WEB_SANDBOX, `service_worker_connection_failure`, [{
                key: `agent`,
                value: St()
            }, {
                key: `is_shared_surface`,
                value: String(e.isSharedSurface)
            }]), e.activeRun?.runId != null && e.activeRun.runId === e.activeRun?.runId && s.count(h.WEB_SANDBOX, `${e.activeRun.language}.environment_error`)
        }, Tt = ({
            ref: e,
            id: t,
            isSharedSurface: n = !1,
            title: r,
            visuallyHidden: i,
            disablePermissions: a,
            isCodeUpdating: o,
            onCodeRunComplete: c,
            onAppBlockMessage: u,
            networkPolicy: f = `deps-and-user-approved`,
            disableExternalNavigation: p = !1,
            networkAccessDeniedMessage: m,
            unsafeAllowAllNetworkRequests: te,
            additionalResourceDomains: ne,
            sandboxPermissions: re,
            sandboxOriginId: ie,
            enableTransition: g,
            enableAnimation: oe = !0,
            onRetryCodeRun: _,
            showInlineLoadingState: se = !1,
            transparentBackground: le = !1,
            useIntrinsicHeight: ue = !1,
            intrinsicHeightFallback: fe,
            iframeTabIndex: pe = -1,
            enableLinkConfirmationModal: me = !0
        }) => {
            let b = `${Ve(ie)}${gt()}`,
                [he, x] = (0, Q.useState)(0),
                [S] = (0, Q.useState)(() => ee(null)),
                ge = Se(),
                C = (0, Q.useRef)(null),
                w = (0, Q.useRef)(!1),
                T = (0, Q.useRef)(null),
                E = (0, Q.useRef)(!1),
                [D, O] = (0, Q.useState)(null),
                [k, A] = (0, Q.useState)(!1),
                [_e, j] = (0, Q.useState)(null),
                M = f !== `none`,
                N = f === `deps-and-user-approved`,
                ve = n || p,
                ye = re ?? (ve ? bt : yt),
                {
                    onViolation: P,
                    pendingFetchRequests: be
                } = dt({
                    disableNetworkRequests: !N,
                    networkAccessDeniedMessage: m
                }),
                F = (0, Q.useRef)(P);
            F.current = P;
            let I = (0, Q.useRef)(u);
            ae(() => {
                I.current = u
            }, [u]);
            let L = (0, Q.useRef)(M);
            L.current = M;
            let R = (0, Q.useRef)(N);
            R.current = N;
            let z = (0, Q.useRef)(p);
            ae(() => {
                z.current = p
            }, [p]);
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
                    de(ht, {
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
                        s.count(h.WEB_SANDBOX, `external_navigation_blocked`);
                        return
                    }
                    let n = t.href;
                    if (!R.current) {
                        s.count(h.WEB_SANDBOX, `external_navigation_blocked`);
                        return
                    }
                    s.count(h.WEB_SANDBOX, `external_navigation_request.shown`), we(n)
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
                    de(ht, {
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
                            s.count(h.WEB_SANDBOX, `external_form_blocked`);
                            return
                        }
                        if (!R.current) {
                            s.count(h.WEB_SANDBOX, `external_form_blocked`);
                            return
                        }
                        s.count(h.WEB_SANDBOX, `external_form_request.shown`), Oe(e, De(e, t))
                    }
                };
            ae(() => {
                let e = T.current;
                if (!e) return;
                E.current = !0;
                let t = {
                    sendInstrument: Fe,
                    notifyEnvironmentError: e => {
                        wt({
                            error: e,
                            isSharedSurface: n,
                            activeRun: C.current
                        }), lt(), x(e => e + 1), H()
                    },
                    notifyBackgroundColor: () => {},
                    notifyIntrinsicHeight: e => {
                        ue && j(Math.ceil(e))
                    },
                    notifySecurityPolicyViolation: e => {
                        F.current(e)
                    },
                    notifyAppBlockMessage: e => {
                        I.current?.(e)
                    }
                };
                return me && (t.openExternal = ({
                    href: e
                }) => {
                    Te(e)
                }, t.openExternalForm = e => {
                    ke(e)
                }), Be(e, t, [`runUserCode`]).then(e => {
                    S.set(e)
                }), () => {
                    S.set(null), E.current = !1
                }
            }, [he, b]);
            let V = async () => (await d(() => S() != null), ce(S())), H = ({
                preservePreview: e = !1
            } = {}) => {
                C.current = null, w.current = e, e || (O(null), A(!1), j(null)), c?.()
            }, U = (0, Q.useRef)(f);
            (0, Q.useEffect)(() => {
                let e = mt({
                    previousNetworkPolicy: U.current,
                    networkPolicy: f,
                    hasActiveRun: C.current != null || w.current
                });
                U.current = f, e && (S()?.stop(), x(e => e + 1), C.current = null, w.current = !1, O(null), A(!1), j(null), c?.(), _ != null && setTimeout(() => {
                    _()
                }))
            }, [S, f, c, _]);
            let Ae = async function*({
                code: e,
                language: n,
                additionalGlobals: r,
                expectReadySignal: i,
                frameColorScheme: a,
                previewDiagnostics: o,
                shouldPreservePreviewOnFatalError: c
            }) {
                w.current && (A(!1), j(null)), O(W.INITIALIZING), Ct(n);
                let l = await V(),
                    u = xe(),
                    d = !1;
                C.current = {
                    runId: u,
                    language: n
                }, w.current = !1;
                let f = N ? Z().map(({
                        origin: e
                    }) => e) : [],
                    m = Le({
                        disableNetworkRequests: !M,
                        domains: f,
                        additionalResourceDomains: ne,
                        unsafeAllowAllNetworkRequests: N && te
                    });
                for await (let f of await l.runUserCode({
                    previewDiagnostics: o,
                    code: e,
                    id: t,
                    language: n,
                    csp: m,
                    additionalGlobals: r,
                    expectReadySignal: i,
                    frameColorScheme: a,
                    enableExternalNavigationGating: me,
                    disableExternalNavigation: p,
                    allowPopups: !ve
                })) {
                    let e = {
                        timestamp: Date.now(),
                        id: xe(),
                        runId: u
                    };
                    switch (f.type) {
                        case G.RUN_START:
                            yield {
                                ...f, ...e
                            };
                            break;
                        case G.OUTPUT:
                            yield {
                                ...f, ...e
                            };
                            break;
                        case G.ERROR:
                            s.count(h.WEB_SANDBOX, `${n}.error`), yield {
                                ...f,
                                ...e
                            };
                            break;
                        case G.ENVIRONMENT_STATUS:
                            f.status === W.RUNNING_CODE && (d = !0), O(f.status), g || A(f.status === W.RUNNING_CODE), yield {
                                ...f,
                                ...e
                            };
                            break;
                        case G.RUN_COMPLETE:
                            if (f.type === G.RUN_COMPLETE && f.wasFatalError && s.count(h.WEB_SANDBOX, `${n}.fatal_runtime_error`), yield {
                                    ...f,
                                    ...e
                                }, C.current?.runId === u) {
                                let e = n === `html` && d && f.wasFatalError === !0 && f.wasCancelled !== !0 && c?.() === !0;
                                H({
                                    preservePreview: e
                                })
                            }
                            break;
                        case G.LOG:
                            yield {
                                ...f, ...e
                            };
                            break;
                        default:
                            continue
                    }
                }
            }, je = async (e, n) => {
                (await V()).prepareEnvironment({
                    code: e,
                    language: n,
                    id: t
                })
            }, Me = async e => {
                await (await V()).setAdditionalGlobals({
                    additionalGlobals: {
                        __appBlockStream: e
                    }
                })
            }, Ne = async e => {
                await (await V()).setAdditionalGlobals({
                    additionalGlobals: {
                        __appBlockSurface: e
                    }
                })
            }, Pe = async () => {
                await d(() => S() != null), S()?.stop(), w.current && H()
            }, Ie = async () => (await V()).screenshot(), Re = () => {
                T.current?.focus()
            };
            (0, Q.useImperativeHandle)(e, () => ({
                stop: Pe,
                evalAsync: Ae,
                prepareEnvironment: je,
                updateAppBlockStream: Me,
                updateAppBlockSurface: Ne,
                updateAppBlockMessenger: async e => {
                    await (await V()).setAdditionalGlobals({
                        additionalGlobals: {
                            __appBlockMessenger: e
                        }
                    })
                },
                screenshot: Ie,
                focus: Re
            }));
            let ze = oe ? k && g ? {
                    type: `spring`,
                    bounce: 0,
                    delay: .12
                } : {
                    type: `spring`,
                    bounce: 0
                } : {
                    duration: 0
                },
                He = a ? `` : `midi`,
                Ue = (se || C.current?.language === `recharts` || C.current?.language === `threejs`) && !i && !g && !k,
                K = C.current?.language === `threejs`,
                q = pt({
                    useIntrinsicHeight: ue,
                    intrinsicHeight: _e,
                    intrinsicHeightFallback: fe
                });
            return (0, $.jsxs)(l, {
                children: [(0, $.jsxs)(`div`, {
                    className: v(`relative flex`, i ? `fixed h-0 w-0` : `h-full w-full`),
                    style: q == null ? void 0 : {
                        height: q
                    },
                    children: [!i && D != null && g && (0, $.jsx)(Ye, {
                        isComplete: D === W.RUNNING_CODE,
                        onTransitionComplete: () => A(!0),
                        activeCheckpointId: D,
                        title: r,
                        checkpoints: xt
                    }), (0, $.jsx)(y.div, {
                        className: v(`absolute inset-0 m-auto origin-center overflow-hidden`, le ? `bg-transparent` : `bg-token-main-surface-primary`, K && `corner-superellipse/1.1 rounded-3xl`, k ? `pointer-events-auto` : `pointer-events-none`),
                        animate: {
                            opacity: +!!k,
                            ...k ? {
                                scale: 1
                            } : {
                                scale: .95
                            }
                        },
                        transition: ze,
                        children: (0, $.jsx)(y.iframe, {
                            title: r,
                            className: `h-full w-full overflow-hidden`,
                            transition: ze,
                            "aria-hidden": i ? `true` : void 0,
                            allow: He,
                            src: b,
                            sandbox: ye,
                            ref: T,
                            tabIndex: pe
                        }, `${b}:${he}`)
                    }), Ue && (0, $.jsx)(`div`, {
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
                    }), k && (0, $.jsx)(at, {
                        isIndeterminate: o,
                        isComplete: D === W.RUNNING_CODE,
                        activeCheckpointId: D,
                        checkpoints: xt
                    })]
                }), be.length > 0 && (0, $.jsx)(nt, {
                    title: r,
                    requests: be,
                    onConfirm: () => {
                        x(e => e + 1), O(null), A(!1), setTimeout(() => {
                            _?.()
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
//# sourceMappingURL=4d271a7b-lmfmc5j4g60hegal.js.map