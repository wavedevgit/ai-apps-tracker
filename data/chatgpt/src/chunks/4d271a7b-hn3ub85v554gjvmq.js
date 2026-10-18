const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/a05edf66-hhqkq5ff44o43iar.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-cb22y2w19zwyshmt.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/conversation-small-fym1zmu9zimymmm1.js", "assets/30901919-e33mbl5u1y88w5wu.js", "assets/c470f5ab-m68dth1hatzjj8yh.js", "assets/0e5afe53-dl0nq2u2siu8c8q5.js", "assets/conversation-small-iha453gv.css", "assets/8742b478-ja0nh126im8iybw2.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $tt as n,
    AT as r,
    At as i,
    B6 as a,
    Bz as o,
    C0 as s,
    C8 as c,
    Dit as l,
    Ett as u,
    J6 as d,
    Ltt as f,
    Mnt as ee,
    My as te,
    Nnt as p,
    O0 as ne,
    Pnt as m,
    Qtt as h,
    S0 as re,
    Stt as g,
    T0 as ie,
    _tt as _,
    _w as ae,
    b5 as v,
    b8 as oe,
    bnt as se,
    cn as y,
    cz as ce,
    dot as le,
    ent as ue,
    g8 as de,
    hU as b,
    hn as fe,
    hw as x,
    iw as S,
    jy as pe,
    kT as C,
    kit as w,
    lz as T,
    ow as E,
    pU as D,
    q8 as me,
    u8 as O,
    uot as k,
    vN as A,
    vtt as he,
    w8 as j,
    y5 as M,
    yN as ge,
    ynt as N,
    ytt as P,
    ztt as _e,
    zz as ve
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as F,
    Ln as ye,
    Nn as I,
    Rn as L,
    Vn as R,
    Zt as z,
    cn as B,
    ln as V,
    rn as be,
    zn as xe
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    XHn as Se,
    YHn as Ce,
    agn as we,
    eUn as Te,
    ogn as Ee,
    tUn as De
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    $g as Oe,
    Fv as H,
    Iv as U,
    Qg as ke
} from "./30901919-e33mbl5u1y88w5wu.js";
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
} from "./e1a66d2b-dob1j28wge0fmdz8.js";
import {
    t as Ne
} from "./4c0f1f8e-go23ccluwcn7b4ji.js";
import {
    n as Pe,
    t as Fe
} from "./3509739a-idv5k1vy1anms3w0.js";
import {
    i as Ie,
    o as Le,
    t as Re
} from "./25a66342-dd6xm32a19d6mzzc.js";
import {
    n as ze,
    t as Be
} from "./84983163-orsf8gtwr7u5m8c9.js";
import {
    a as Ve,
    o as He,
    t as Ue
} from "./7517017f-jp4wwufska9j7a9v.js";
var K, q, We, Ge = e((() => {
        Ee(), v(), K = t(R()), q = F(), We = ({
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
            }, [l, i]), (0, q.jsx)(we, {
                sizeOverride: e,
                className: M(o == null && `text-primary`, o === `dark` && `text-back`, o === `light` && `text-white`),
                thickness: t,
                backgroundStrokeClassName: M(o == null && `stroke-[rgba(0,0,0,0.1)] dark:stroke-[rgba(0,0,0,0.32)]`, o === `dark` && `stroke-[rgba(0,0,0,0.32)]`, o === `light` && `stroke-[rgba(0,0,0,0.1)] `),
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
        Ge(), v(), i(), Ke = t(R()), J = F(), qe = `https://persistent.oaistatic.com/canvas/loop-swirl.mp4`, Je = `https://persistent.oaistatic.com/canvas/loop-swirl-poster.jpg`, Ye = ({
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
                            className: M(`absolute inset-0 z-0 h-full w-full object-cover transition-opacity duration-200`)
                        }), (0, J.jsx)(`div`, {
                            className: M(`relative z-10 flex h-full w-full items-center justify-center`, a ? `opacity-0` : `opacity-100`),
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
                        className: M(`flex flex-col items-center transition-opacity duration-200`, r ? `opacity-0` : `opacity-100`),
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
        r(), De(), Se(), U(), Oe(), o(), ae(), E(), te(), Qe = t(R()), L(), $e = t(Ne()), Y = F(), et = ({
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
                    children: t ? (0, Y.jsx)(ke, {
                        className: `icon text-red-500`
                    }) : (0, Y.jsx)(H, {
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
            let r = xe(),
                [i, a] = (0, Qe.useState)(() => new Set),
                o = () => {
                    for (let {
                            requestId: e,
                            approve: n,
                            deny: r
                        }
                        of t) i.has(e) ? r() : n();
                    n?.()
                },
                s = () => {
                    for (let e of t) e.deny()
                },
                c = e => {
                    a(t => {
                        let n = new Set(t);
                        return n.has(e) ? n.delete(e) : n.add(e), n
                    })
                },
                l = t.length - i.size;
            return (0, Y.jsx)(S, {
                testId: `modal-confirm-fetch-request`,
                isOpen: !0,
                shouldIgnoreClickOutside: !0,
                onClose: o,
                type: `success`,
                title: (0, Y.jsxs)(`div`, {
                    className: `flex justify-between`,
                    children: [(0, Y.jsx)(`span`, {
                        className: `text-xl`,
                        children: (0, Y.jsx)(I, {
                            id: `VmMpF1`,
                            defaultMessage: `Allow network access?`
                        })
                    }), (0, Y.jsx)(pe, {
                        side: `top`,
                        contentClassName: `max-w-2xs!`,
                        label: (0, Y.jsx)(I, {
                            id: `WT7tgj`,
                            defaultMessage: `Learn more about network requests in canvas`
                        }),
                        children: (0, Y.jsx)(C, {
                            icon: ve,
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
                        children: (0, Y.jsx)(I, {
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
                                        isDenied: i.has(t),
                                        onClick: () => c(t)
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
                primaryButton: (0, Y.jsx)(x.Button, {
                    disabled: l === 0,
                    title: t.length > 1 ? r.formatMessage({
                        id: `xpKkWv`,
                        defaultMessage: `Allow selected ({count})`
                    }, {
                        count: l
                    }) : r.formatMessage({
                        id: `ZeMrpd`,
                        defaultMessage: `Allow`
                    }),
                    color: `primary`,
                    onClick: o
                }),
                secondaryButton: (0, Y.jsx)(x.Button, {
                    title: r.formatMessage({
                        id: `TjJzqR`,
                        defaultMessage: `{count, plural, one {Deny} other {Deny all}}`
                    }, {
                        count: t.length
                    }),
                    color: `secondary`,
                    onClick: s
                })
            })
        }
    })),
    it, X, at, ot = e((() => {
        Ge(), je(), Ee(), i(), it = t(R()), L(), X = F(), at = ({
            checkpoints: e,
            activeCheckpointId: t,
            isIndeterminate: n = !1,
            isComplete: r
        }) => {
            let [i, a] = (0, it.useState)(r);
            return (0, it.useEffect)(() => {
                a(r)
            }, [t]), (0, X.jsx)(fe, {
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
                    children: [n ? (0, X.jsx)(we, {
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
                        children: [(0, X.jsx)(I, {
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
        O(), He(), D(), w(), ue(), ee(), Re(), ct = t(R()), L(), z(), Z = () => de(h.getItem(n.CODE_EXECUTION_DOMAIN_ALLOW_LIST), e => c(e, {
            origin: j,
            expiresAt: oe
        }), []).filter(({
            expiresAt: e
        }) => e >= Date.now()), lt = () => {
            h.removeItem(n.CODE_EXECUTION_DOMAIN_ALLOW_LIST)
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
            let r = b(),
                i = xe(),
                [a, o] = (0, ct.useState)([]);
            return {
                onViolation: (0, ct.useCallback)(a => {
                    let {
                        blockedURI: s
                    } = a;
                    try {
                        if (t) return r.danger(e ?? i.formatMessage({
                            id: `Lp7cKY`,
                            defaultMessage: `Network access is disabled.`
                        }), {
                            loggingTitle: `Network access is disabled.`,
                            toastId: `network_access_denied`
                        });
                        p.count(m.WEB_SANDBOX, `network_access_requested`);
                        let a = Ie(s);
                        if (a == null) {
                            p.count(m.WEB_SANDBOX, `network_access_request.deny`);
                            return
                        }
                        let c = e => {
                                p.count(m.WEB_SANDBOX, `network_access_request.${e?`allow`:`deny`}`), o(e => e.filter(e => !ut(e.url, !t) && e.url !== s))
                            },
                            l = () => {
                                h.setItem(n.CODE_EXECUTION_DOMAIN_ALLOW_LIST, [...Z(), {
                                    origin: a,
                                    expiresAt: Date.now() + 2160 * 60 * 60 * 1e3
                                }]), c(!0)
                            };
                        o(e => [...e, {
                            requestId: be(),
                            url: s,
                            origin: a,
                            approve: l,
                            deny: () => c(!1)
                        }])
                    } catch (e) {
                        l.addError(e)
                    }
                }, [t, r, e, i]),
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
        Ze(), rt(), Pe(), ot(), st(), ze(), ft(), ie(), a(), T(), w(), k(), ee(), N(), A(), _(), Ae(), s(), v(), i(), Q = t(R()), L(), z(), He(), $ = F(), V(), ht = re(() => B(() => import(`./a05edf66-hhqkq5ff44o43iar.js`).then(e => e.SafeLinkWarningModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))), gt = () => `?` + [``, ``].filter(Boolean).join(`&`), _t = ye({
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
        }], St = () => u() ? `ios` : _e() ? `windows` : he() ? `android` : f() ? `safari` : g() || P() ? `chrome` : `unknown`, Ct = e => {
            p.count(m.WEB_SANDBOX, `${e}.eval`), se(`chatgpt_web_sandbox_code_run`, `${e}`)
        }, wt = e => {
            se(`chatgpt_web_sandbox_environment_error`, `${e.error.name}: ${e.error.message}`), l.addError(`Code execution environment error`, {
                ...e.error,
                errorMessage: `${e.error.name}: ${e.error.message}`
            }), e.error.name === `ServiceWorker` && p.count(m.WEB_SANDBOX, `service_worker_connection_failure`, [{
                key: `agent`,
                value: St()
            }, {
                key: `is_shared_surface`,
                value: String(e.isSharedSurface)
            }]), e.activeRun?.runId != null && e.activeRun.runId === e.activeRun?.runId && p.count(m.WEB_SANDBOX, `${e.activeRun.language}.environment_error`)
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
            networkAccessDeniedMessage: f,
            unsafeAllowAllNetworkRequests: ee,
            additionalResourceDomains: te,
            sandboxPermissions: h,
            sandboxOriginId: re,
            enableTransition: g,
            enableAnimation: ie = !0,
            onRetryCodeRun: _,
            showInlineLoadingState: ae = !1,
            transparentBackground: v = !1,
            useIntrinsicHeight: oe = !1,
            intrinsicHeightFallback: se,
            iframeTabIndex: ue = -1,
            enableLinkConfirmationModal: de = !0
        }) => {
            let b = `${Ve(re)}${gt()}`,
                [fe, x] = (0, Q.useState)(0),
                [S] = (0, Q.useState)(() => d(null)),
                pe = xe(),
                C = (0, Q.useRef)(null),
                w = (0, Q.useRef)(!1),
                T = (0, Q.useRef)(null),
                E = (0, Q.useRef)(!1),
                [D, O] = (0, Q.useState)(null),
                [k, A] = (0, Q.useState)(!1),
                [he, j] = (0, Q.useState)(null),
                N = l !== `none`,
                P = l === `deps-and-user-approved`,
                _e = n || u,
                ve = h ?? (_e ? bt : yt),
                {
                    onViolation: F,
                    pendingFetchRequests: ye
                } = dt({
                    disableNetworkRequests: !P,
                    networkAccessDeniedMessage: f
                }),
                I = (0, Q.useRef)(F);
            I.current = F;
            let L = (0, Q.useRef)(c);
            ge(() => {
                L.current = c
            }, [c]);
            let R = (0, Q.useRef)(N);
            R.current = N;
            let z = (0, Q.useRef)(P);
            z.current = P;
            let B = (0, Q.useRef)(u);
            ge(() => {
                B.current = u
            }, [u]);
            let V = e => {
                    let t = window.open(e, `_blank`, `noopener,noreferrer`);
                    if (t) try {
                        t.opener = null
                    } catch {}
                    return t
                },
                Se = () => {
                    let e = window.open(`about:blank`, `_blank`);
                    if (!e) return null;
                    try {
                        e.opener = null
                    } catch {}
                    return e
                },
                Ce = e => {
                    ne(ht, {
                        urls: e,
                        displayUrls: e
                    })
                },
                we = e => {
                    let t;
                    try {
                        t = new URL(e)
                    } catch {
                        return
                    }
                    if (t.protocol !== `http:` && t.protocol !== `https:`) return;
                    if (B.current || !R.current) {
                        p.count(m.WEB_SANDBOX, `external_navigation_blocked`);
                        return
                    }
                    let n = t.href;
                    if (!z.current) {
                        p.count(m.WEB_SANDBOX, `external_navigation_blocked`);
                        return
                    }
                    p.count(m.WEB_SANDBOX, `external_navigation_request.shown`), Ce(n)
                },
                Te = e => {
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
                        V(n.href);
                        return
                    }
                    if (n !== `post`) {
                        V(t.href);
                        return
                    }
                    if (e.hasFiles) {
                        V(t.href);
                        return
                    }
                    let r = Se();
                    if (!r) {
                        V(t.href);
                        return
                    }
                    let i = null;
                    try {
                        i = r.document
                    } catch {
                        V(t.href);
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
                Ee = (e, t) => {
                    if (e.method.trim().toLowerCase() !== `get`) return t.href;
                    let n = new URL(t.href);
                    for (let {
                            name: t,
                            value: r
                        }
                        of e.entries) n.searchParams.append(t, r);
                    return n.href
                },
                De = (e, t) => {
                    ne(ht, {
                        urls: t,
                        displayUrls: t,
                        suppressNavigation: !0,
                        onAction: t => {
                            t === `open` && Te(e)
                        }
                    })
                },
                Oe = e => {
                    let t;
                    try {
                        t = new URL(e.action)
                    } catch {
                        return
                    }
                    if (!(t.protocol !== `http:` && t.protocol !== `https:`)) {
                        if (B.current || !R.current) {
                            p.count(m.WEB_SANDBOX, `external_form_blocked`);
                            return
                        }
                        if (!z.current) {
                            p.count(m.WEB_SANDBOX, `external_form_blocked`);
                            return
                        }
                        p.count(m.WEB_SANDBOX, `external_form_request.shown`), De(e, Ee(e, t))
                    }
                };
            ge(() => {
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
                        }), lt(), x(e => e + 1), U()
                    },
                    notifyBackgroundColor: () => {},
                    notifyIntrinsicHeight: e => {
                        oe && j(Math.ceil(e))
                    },
                    notifySecurityPolicyViolation: e => {
                        I.current(e)
                    },
                    notifyAppBlockMessage: e => {
                        L.current?.(e)
                    }
                };
                return de && (t.openExternal = ({
                    href: e
                }) => {
                    we(e)
                }, t.openExternalForm = e => {
                    Oe(e)
                }), Be(e, t, [`runUserCode`]).then(e => {
                    S.set(e)
                }), () => {
                    S.set(null), E.current = !1
                }
            }, [fe, b]);
            let H = async () => (await me(() => S() != null), le(S())), U = ({
                preservePreview: e = !1
            } = {}) => {
                C.current = null, w.current = e, e || (O(null), A(!1), j(null)), s?.()
            }, ke = (0, Q.useRef)(l);
            (0, Q.useEffect)(() => {
                let e = mt({
                    previousNetworkPolicy: ke.current,
                    networkPolicy: l,
                    hasActiveRun: C.current != null || w.current
                });
                ke.current = l, e && (S()?.stop(), x(e => e + 1), C.current = null, w.current = !1, O(null), A(!1), j(null), s?.(), _ != null && setTimeout(() => {
                    _()
                }))
            }, [S, l, s, _]);
            let Ae = async function*({
                code: e,
                language: n,
                additionalGlobals: r,
                expectReadySignal: i,
                frameColorScheme: a,
                previewDiagnostics: o,
                shouldPreservePreviewOnFatalError: s
            }) {
                w.current && (A(!1), j(null)), O(W.INITIALIZING), Ct(n);
                let c = await H(),
                    l = be(),
                    d = !1;
                C.current = {
                    runId: l,
                    language: n
                }, w.current = !1;
                let f = P ? Z().map(({
                        origin: e
                    }) => e) : [],
                    ne = Le({
                        disableNetworkRequests: !N,
                        domains: f,
                        additionalResourceDomains: te,
                        unsafeAllowAllNetworkRequests: P && ee
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
                    enableExternalNavigationGating: de,
                    disableExternalNavigation: u,
                    allowPopups: !_e
                })) {
                    let e = {
                        timestamp: Date.now(),
                        id: be(),
                        runId: l
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
                            p.count(m.WEB_SANDBOX, `${n}.error`), yield {
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
                            if (f.type === G.RUN_COMPLETE && f.wasFatalError && p.count(m.WEB_SANDBOX, `${n}.fatal_runtime_error`), yield {
                                    ...f,
                                    ...e
                                }, C.current?.runId === l) {
                                let e = n === `html` && d && f.wasFatalError === !0 && f.wasCancelled !== !0 && s?.() === !0;
                                U({
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
                (await H()).prepareEnvironment({
                    code: e,
                    language: n,
                    id: t
                })
            }, Me = async e => {
                await (await H()).setAdditionalGlobals({
                    additionalGlobals: {
                        __appBlockStream: e
                    }
                })
            }, Ne = async e => {
                await (await H()).setAdditionalGlobals({
                    additionalGlobals: {
                        __appBlockSurface: e
                    }
                })
            }, Pe = async () => {
                await me(() => S() != null), S()?.stop(), w.current && U()
            }, Ie = async () => (await H()).screenshot(), Re = () => {
                T.current?.focus()
            };
            (0, Q.useImperativeHandle)(e, () => ({
                stop: Pe,
                evalAsync: Ae,
                prepareEnvironment: je,
                updateAppBlockStream: Me,
                updateAppBlockSurface: Ne,
                updateAppBlockMessenger: async e => {
                    await (await H()).setAdditionalGlobals({
                        additionalGlobals: {
                            __appBlockMessenger: e
                        }
                    })
                },
                screenshot: Ie,
                focus: Re
            }));
            let ze = ie ? k && g ? {
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
                Ue = (ae || C.current?.language === `recharts` || C.current?.language === `threejs`) && !i && !g && !k,
                K = C.current?.language === `threejs`,
                q = pt({
                    useIntrinsicHeight: oe,
                    intrinsicHeight: he,
                    intrinsicHeightFallback: se
                });
            return (0, $.jsxs)(ce, {
                children: [(0, $.jsxs)(`div`, {
                    className: M(`relative flex`, i ? `fixed h-0 w-0` : `h-full w-full`),
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
                        className: M(`absolute inset-0 m-auto origin-center overflow-hidden`, v ? `bg-transparent` : `bg-token-main-surface-primary`, K && `corner-superellipse/1.1 rounded-3xl`, k ? `pointer-events-auto` : `pointer-events-none`),
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
                            sandbox: ve,
                            ref: T,
                            tabIndex: ue
                        }, `${b}:${fe}`)
                    }), Ue && (0, $.jsx)(`div`, {
                        "aria-live": `polite`,
                        className: `pointer-events-none absolute inset-0 z-10 h-full min-h-0 w-full bg-transparent`,
                        role: `status`,
                        children: (0, $.jsx)(`div`, {
                            className: `max-w-[70%] space-y-0.5`,
                            children: (0, $.jsx)(`p`, {
                                className: `loading-shimmer text-base font-medium select-none`,
                                children: pe.formatMessage(_t.creatingVisualization)
                            })
                        })
                    }), k && (0, $.jsx)(at, {
                        isIndeterminate: o,
                        isComplete: D === W.RUNNING_CODE,
                        activeCheckpointId: D,
                        checkpoints: xt
                    })]
                }), ye.length > 0 && (0, $.jsx)(nt, {
                    title: r,
                    requests: ye,
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
//# sourceMappingURL=4d271a7b-hn3ub85v554gjvmq.js.map