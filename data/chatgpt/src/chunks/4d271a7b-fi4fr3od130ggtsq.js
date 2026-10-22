const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/a05edf66-ltuy6phlj4pcbp54.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-i89nb6zlze66idsz.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-fh0oqifngkf5rvl1.js", "assets/30901919-cmi3nh547dwrqkxv.js", "assets/c470f5ab-ctk9cdujw17c2exz.js", "assets/0e5afe53-fofrudqqfgiodxgc.js", "assets/conversation-small-7l2sfhqg.css", "assets/8742b478-7hkg2e7cshsfqk3k.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    A8 as r,
    Art as i,
    At as a,
    Aw as o,
    Cnt as s,
    Eat as c,
    Fz as l,
    HN as u,
    Int as d,
    Iz as f,
    L5 as p,
    LU as ee,
    Ow as te,
    Pnt as ne,
    Qy as re,
    R8 as ie,
    UN as ae,
    Vw as oe,
    Xnt as m,
    Ynt as h,
    Znt as g,
    Zy as se,
    _rt as ce,
    a2 as le,
    c2 as ue,
    cn as _,
    cst as de,
    d2 as fe,
    e5 as pe,
    eE as me,
    fB as v,
    gnt as he,
    grt as y,
    hn as b,
    hnt as ge,
    jrt as x,
    krt as S,
    l7 as C,
    m5 as w,
    mnt as T,
    o2 as _e,
    o5 as E,
    p5 as D,
    pB as O,
    sst as k,
    u5 as ve,
    u7 as A,
    wat as j,
    ynt as M,
    zU as ye,
    zw as N
} from "./4813494d-i89nb6zlze66idsz.js";
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
    KUn as Ce,
    QUn as we,
    ZUn as Te,
    a_n as Ee,
    i_n as De,
    qUn as Oe
} from "./conversation-small-fh0oqifngkf5rvl1.js";
import {
    $g as ke,
    Mv as V,
    Nv as H,
    Qg as U
} from "./30901919-cmi3nh547dwrqkxv.js";
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
} from "./e1a66d2b-f28t2ltvntpr6whe.js";
import {
    t as Ne
} from "./4c0f1f8e-o4zbuwgknf8ay6gx.js";
import {
    n as Pe,
    t as Fe
} from "./3509739a-nm2jjbifef1ykx15.js";
import {
    i as Ie,
    o as Le,
    t as Re
} from "./25a66342-f9uronhqmx1bvgyc.js";
import {
    n as ze,
    t as Be
} from "./84983163-ikoi2pwu3rfszg6y.js";
import {
    a as Ve,
    o as He,
    t as Ue
} from "./7517017f-kzh17ckitg7nmvec.js";
var K, q, We, Ge = e((() => {
        Ee(), A(), K = t(L()), q = P(), We = ({
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
            }, [l, i]), (0, q.jsx)(De, {
                sizeOverride: e,
                className: C(o == null && `text-primary`, o === `dark` && `text-back`, o === `light` && `text-white`),
                thickness: t,
                backgroundStrokeClassName: C(o == null && `stroke-[rgba(0,0,0,0.1)] dark:stroke-[rgba(0,0,0,0.32)]`, o === `dark` && `stroke-[rgba(0,0,0,0.32)]`, o === `light` && `stroke-[rgba(0,0,0,0.1)] `),
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
        Ge(), A(), a(), Ke = t(L()), J = P(), qe = `https://persistent.oaistatic.com/canvas/loop-swirl.mp4`, Je = `https://persistent.oaistatic.com/canvas/loop-swirl-poster.jpg`, Ye = ({
            title: e,
            checkpoints: t,
            activeCheckpointId: n,
            isComplete: r,
            onTransitionComplete: i
        }) => {
            let [a, o] = (0, Ke.useState)(!1), s = t[t.findIndex(e => e.id === n)];
            return (0, J.jsx)(_.div, {
                className: `relative flex h-full w-full items-center justify-center`,
                transition: {
                    type: `spring`,
                    bounce: 0
                },
                children: (0, J.jsxs)(_.div, {
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
                    children: [(0, J.jsxs)(_.div, {
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
                            className: C(`absolute inset-0 z-0 h-full w-full object-cover transition-opacity duration-200`)
                        }), (0, J.jsx)(`div`, {
                            className: C(`relative z-10 flex h-full w-full items-center justify-center`, a ? `opacity-0` : `opacity-100`),
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
                    }), (0, J.jsxs)(_.div, {
                        className: C(`flex flex-col items-center transition-opacity duration-200`, r ? `opacity-0` : `opacity-100`),
                        style: {
                            translateY: 110
                        },
                        children: [(0, J.jsx)(`span`, {
                            className: `text-token-text-primary font-semibold`,
                            children: e
                        }), s && (0, J.jsx)(_.span, {
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
        me(), we(), Oe(), H(), ke(), O(), oe(), o(), re(), Qe = t(L()), I(), $e = t(Ne()), Y = P(), et = ({
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
            onConfirm: r
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
            return (0, Y.jsx)(te, {
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
                    }), (0, Y.jsx)(se, {
                        side: `top`,
                        contentClassName: `max-w-2xs!`,
                        label: (0, Y.jsx)(F, {
                            id: `WT7tgj`,
                            defaultMessage: `Learn more about network requests in canvas`
                        }),
                        children: (0, Y.jsx)(n, {
                            icon: v,
                            openNewTab: !0,
                            onClick: () => Ce.logButtonClick(Te.LEARN_MODE_ABOUT_NETWORK_REQUESTS),
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
                primaryButton: (0, Y.jsx)(N.Button, {
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
                secondaryButton: (0, Y.jsx)(N.Button, {
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
        Ge(), je(), Ee(), a(), it = t(L()), I(), X = P(), at = ({
            checkpoints: e,
            activeCheckpointId: t,
            isIndeterminate: n = !1,
            isComplete: r
        }) => {
            let [i, a] = (0, it.useState)(r);
            return (0, it.useEffect)(() => {
                a(r)
            }, [t]), (0, X.jsx)(b, {
                children: (t != null && !i || n) && (0, X.jsxs)(_.div, {
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
                    children: [n ? (0, X.jsx)(De, {
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
        pe(), He(), ee(), c(), g(), S(), Re(), ct = t(L()), I(), R(), Z = () => E(h.getItem(m.CODE_EXECUTION_DOMAIN_ALLOW_LIST), e => D(e, {
            origin: w,
            expiresAt: ve
        }), []).filter(({
            expiresAt: e
        }) => e >= Date.now()), lt = () => {
            h.removeItem(m.CODE_EXECUTION_DOMAIN_ALLOW_LIST)
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
            let n = ye(),
                r = Se(),
                [a, o] = (0, ct.useState)([]);
            return {
                onViolation: (0, ct.useCallback)(a => {
                    let {
                        blockedURI: s
                    } = a;
                    try {
                        if (t) return n.danger(e ?? r.formatMessage({
                            id: `Lp7cKY`,
                            defaultMessage: `Network access is disabled.`
                        }), {
                            loggingTitle: `Network access is disabled.`,
                            toastId: `network_access_denied`
                        });
                        i.count(x.WEB_SANDBOX, `network_access_requested`);
                        let a = Ie(s);
                        if (a == null) {
                            i.count(x.WEB_SANDBOX, `network_access_request.deny`);
                            return
                        }
                        let c = e => {
                                i.count(x.WEB_SANDBOX, `network_access_request.${e?`allow`:`deny`}`), o(e => e.filter(e => !ut(e.url, !t) && e.url !== s))
                            },
                            l = () => {
                                h.setItem(m.CODE_EXECUTION_DOMAIN_ALLOW_LIST, [...Z(), {
                                    origin: a,
                                    expiresAt: Date.now() + 2160 * 60 * 60 * 1e3
                                }]), c(!0)
                            };
                        o(e => [...e, {
                            requestId: xe(),
                            url: s,
                            origin: a,
                            approve: l,
                            deny: () => c(!1)
                        }])
                    } catch (e) {
                        j.addError(e)
                    }
                }, [t, n, e, r]),
                pendingFetchRequests: a
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
        Ze(), rt(), Pe(), ot(), st(), ze(), ft(), ue(), r(), f(), c(), k(), S(), y(), u(), T(), Ae(), _e(), A(), a(), Q = t(L()), I(), R(), He(), $ = P(), B(), ht = le(() => z(() => import(`./a05edf66-ltuy6phlj4pcbp54.js`).then(e => e.SafeLinkWarningModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))), gt = () => `?` + [``, ``].filter(Boolean).join(`&`), _t = be({
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
        }], St = () => s() ? `ios` : d() ? `windows` : ge() ? `android` : ne() ? `safari` : M() || he() ? `chrome` : `unknown`, Ct = e => {
            i.count(x.WEB_SANDBOX, `${e}.eval`), ce(`chatgpt_web_sandbox_code_run`, `${e}`)
        }, wt = e => {
            ce(`chatgpt_web_sandbox_environment_error`, `${e.error.name}: ${e.error.message}`), j.addError(`Code execution environment error`, {
                ...e.error,
                errorMessage: `${e.error.name}: ${e.error.message}`
            }), e.error.name === `ServiceWorker` && i.count(x.WEB_SANDBOX, `service_worker_connection_failure`, [{
                key: `agent`,
                value: St()
            }, {
                key: `is_shared_surface`,
                value: String(e.isSharedSurface)
            }]), e.activeRun?.runId != null && e.activeRun.runId === e.activeRun?.runId && i.count(x.WEB_SANDBOX, `${e.activeRun.language}.environment_error`)
        }, Tt = ({
            ref: e,
            id: t,
            isSharedSurface: n = !1,
            title: r,
            visuallyHidden: a,
            disablePermissions: o,
            isCodeUpdating: s,
            onCodeRunComplete: c,
            onAppBlockMessage: u,
            networkPolicy: d = `deps-and-user-approved`,
            disableExternalNavigation: f = !1,
            networkAccessDeniedMessage: ee,
            unsafeAllowAllNetworkRequests: te,
            additionalResourceDomains: ne,
            sandboxPermissions: re,
            sandboxOriginId: oe,
            enableTransition: m,
            enableAnimation: h = !0,
            onRetryCodeRun: g,
            showInlineLoadingState: se = !1,
            transparentBackground: ce = !1,
            useIntrinsicHeight: le = !1,
            intrinsicHeightFallback: ue,
            iframeTabIndex: pe = -1,
            enableLinkConfirmationModal: me = !0
        }) => {
            let v = `${Ve(oe)}${gt()}`,
                [he, y] = (0, Q.useState)(0),
                [b] = (0, Q.useState)(() => ie(null)),
                ge = Se(),
                S = (0, Q.useRef)(null),
                w = (0, Q.useRef)(!1),
                T = (0, Q.useRef)(null),
                _e = (0, Q.useRef)(!1),
                [E, D] = (0, Q.useState)(null),
                [O, k] = (0, Q.useState)(!1),
                [ve, A] = (0, Q.useState)(null),
                j = d !== `none`,
                M = d === `deps-and-user-approved`,
                ye = n || f,
                N = re ?? (ye ? bt : yt),
                {
                    onViolation: P,
                    pendingFetchRequests: be
                } = dt({
                    disableNetworkRequests: !M,
                    networkAccessDeniedMessage: ee
                }),
                F = (0, Q.useRef)(P);
            F.current = P;
            let I = (0, Q.useRef)(u);
            ae(() => {
                I.current = u
            }, [u]);
            let L = (0, Q.useRef)(j);
            L.current = j;
            let R = (0, Q.useRef)(M);
            R.current = M;
            let z = (0, Q.useRef)(f);
            ae(() => {
                z.current = f
            }, [f]);
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
                    fe(ht, {
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
                        i.count(x.WEB_SANDBOX, `external_navigation_blocked`);
                        return
                    }
                    let n = t.href;
                    if (!R.current) {
                        i.count(x.WEB_SANDBOX, `external_navigation_blocked`);
                        return
                    }
                    i.count(x.WEB_SANDBOX, `external_navigation_request.shown`), we(n)
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
                    fe(ht, {
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
                            i.count(x.WEB_SANDBOX, `external_form_blocked`);
                            return
                        }
                        if (!R.current) {
                            i.count(x.WEB_SANDBOX, `external_form_blocked`);
                            return
                        }
                        i.count(x.WEB_SANDBOX, `external_form_request.shown`), Oe(e, De(e, t))
                    }
                };
            ae(() => {
                let e = T.current;
                if (!e) return;
                _e.current = !0;
                let t = {
                    sendInstrument: Fe,
                    notifyEnvironmentError: e => {
                        wt({
                            error: e,
                            isSharedSurface: n,
                            activeRun: S.current
                        }), lt(), y(e => e + 1), H()
                    },
                    notifyBackgroundColor: () => {},
                    notifyIntrinsicHeight: e => {
                        le && A(Math.ceil(e))
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
                    b.set(e)
                }), () => {
                    b.set(null), _e.current = !1
                }
            }, [he, v]);
            let V = async () => (await p(() => b() != null), de(b())), H = ({
                preservePreview: e = !1
            } = {}) => {
                S.current = null, w.current = e, e || (D(null), k(!1), A(null)), c?.()
            }, U = (0, Q.useRef)(d);
            (0, Q.useEffect)(() => {
                let e = mt({
                    previousNetworkPolicy: U.current,
                    networkPolicy: d,
                    hasActiveRun: S.current != null || w.current
                });
                U.current = d, e && (b()?.stop(), y(e => e + 1), S.current = null, w.current = !1, D(null), k(!1), A(null), c?.(), g != null && setTimeout(() => {
                    g()
                }))
            }, [b, d, c, g]);
            let Ae = async function*({
                code: e,
                language: n,
                additionalGlobals: r,
                expectReadySignal: a,
                frameColorScheme: o,
                previewDiagnostics: s,
                shouldPreservePreviewOnFatalError: c
            }) {
                w.current && (k(!1), A(null)), D(W.INITIALIZING), Ct(n);
                let l = await V(),
                    u = xe(),
                    d = !1;
                S.current = {
                    runId: u,
                    language: n
                }, w.current = !1;
                let p = M ? Z().map(({
                        origin: e
                    }) => e) : [],
                    ee = Le({
                        disableNetworkRequests: !j,
                        domains: p,
                        additionalResourceDomains: ne,
                        unsafeAllowAllNetworkRequests: M && te
                    });
                for await (let p of await l.runUserCode({
                    previewDiagnostics: s,
                    code: e,
                    id: t,
                    language: n,
                    csp: ee,
                    additionalGlobals: r,
                    expectReadySignal: a,
                    frameColorScheme: o,
                    enableExternalNavigationGating: me,
                    disableExternalNavigation: f,
                    allowPopups: !ye
                })) {
                    let e = {
                        timestamp: Date.now(),
                        id: xe(),
                        runId: u
                    };
                    switch (p.type) {
                        case G.RUN_START:
                            yield {
                                ...p, ...e
                            };
                            break;
                        case G.OUTPUT:
                            yield {
                                ...p, ...e
                            };
                            break;
                        case G.ERROR:
                            i.count(x.WEB_SANDBOX, `${n}.error`), yield {
                                ...p,
                                ...e
                            };
                            break;
                        case G.ENVIRONMENT_STATUS:
                            p.status === W.RUNNING_CODE && (d = !0), D(p.status), m || k(p.status === W.RUNNING_CODE), yield {
                                ...p,
                                ...e
                            };
                            break;
                        case G.RUN_COMPLETE:
                            if (p.type === G.RUN_COMPLETE && p.wasFatalError && i.count(x.WEB_SANDBOX, `${n}.fatal_runtime_error`), yield {
                                    ...p,
                                    ...e
                                }, S.current?.runId === u) {
                                let e = n === `html` && d && p.wasFatalError === !0 && p.wasCancelled !== !0 && c?.() === !0;
                                H({
                                    preservePreview: e
                                })
                            }
                            break;
                        case G.LOG:
                            yield {
                                ...p, ...e
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
                await p(() => b() != null), b()?.stop(), w.current && H()
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
            let ze = h ? O && m ? {
                    type: `spring`,
                    bounce: 0,
                    delay: .12
                } : {
                    type: `spring`,
                    bounce: 0
                } : {
                    duration: 0
                },
                He = o ? `` : `midi`,
                Ue = (se || S.current?.language === `recharts` || S.current?.language === `threejs`) && !a && !m && !O,
                K = S.current?.language === `threejs`,
                q = pt({
                    useIntrinsicHeight: le,
                    intrinsicHeight: ve,
                    intrinsicHeightFallback: ue
                });
            return (0, $.jsxs)(l, {
                children: [(0, $.jsxs)(`div`, {
                    className: C(`relative flex`, a ? `fixed h-0 w-0` : `h-full w-full`),
                    style: q == null ? void 0 : {
                        height: q
                    },
                    children: [!a && E != null && m && (0, $.jsx)(Ye, {
                        isComplete: E === W.RUNNING_CODE,
                        onTransitionComplete: () => k(!0),
                        activeCheckpointId: E,
                        title: r,
                        checkpoints: xt
                    }), (0, $.jsx)(_.div, {
                        className: C(`absolute inset-0 m-auto origin-center overflow-hidden`, ce ? `bg-transparent` : `bg-token-main-surface-primary`, K && `corner-superellipse/1.1 rounded-3xl`, O ? `pointer-events-auto` : `pointer-events-none`),
                        animate: {
                            opacity: +!!O,
                            ...O ? {
                                scale: 1
                            } : {
                                scale: .95
                            }
                        },
                        transition: ze,
                        children: (0, $.jsx)(_.iframe, {
                            title: r,
                            className: `h-full w-full overflow-hidden`,
                            transition: ze,
                            "aria-hidden": a ? `true` : void 0,
                            allow: He,
                            src: v,
                            sandbox: N,
                            ref: T,
                            tabIndex: pe
                        }, `${v}:${he}`)
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
                    }), O && (0, $.jsx)(at, {
                        isIndeterminate: s,
                        isComplete: E === W.RUNNING_CODE,
                        activeCheckpointId: E,
                        checkpoints: xt
                    })]
                }), be.length > 0 && (0, $.jsx)(nt, {
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
//# sourceMappingURL=4d271a7b-fi4fr3od130ggtsq.js.map