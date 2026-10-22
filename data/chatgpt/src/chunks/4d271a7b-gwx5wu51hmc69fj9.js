const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/a05edf66-lnrm8oucy4udax7b.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-dfpv67hlp00pbohr.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-cy5f8pl0g26s86so.js", "assets/30901919-7dzdc1ou0jtwkwpt.js", "assets/c470f5ab-d4g7lc53n1e1ao7o.js", "assets/0e5afe53-o2mcfq1ky1uaktz5.js", "assets/conversation-small-j5v9ogf2.css", "assets/8742b478-hr3b0wxygp6ofdug.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $8 as n,
    $tt as r,
    Ant as i,
    At as a,
    C8 as o,
    Dz as s,
    Fw as c,
    G8 as l,
    Hot as u,
    IN as d,
    J5 as f,
    JT as p,
    Jtt as m,
    LN as ee,
    Nw as te,
    Oz as ne,
    Q0 as re,
    Q8 as ie,
    S5 as ae,
    Sw as oe,
    VU as h,
    Vot as se,
    X0 as g,
    Xnt as ce,
    Xtt as le,
    Xy as ue,
    Y0 as de,
    Y5 as _,
    Y8 as fe,
    Ytt as v,
    Znt as y,
    Zy as b,
    aB as x,
    cn as S,
    drt as C,
    gnt as pe,
    h8 as w,
    hn as T,
    iB as E,
    iat as D,
    jnt as O,
    knt as k,
    lrt as A,
    mnt as j,
    oat as me,
    qT as M,
    rnt as he,
    t2 as ge,
    urt as N,
    ww as P,
    z8 as _e,
    zU as ve
} from "./4813494d-dfpv67hlp00pbohr.js";
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
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    aUn as Se,
    bgn as Ce,
    iUn as we,
    lUn as Te,
    uUn as Ee,
    xgn as De
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    $g as Oe,
    Mv as H,
    Nv as U,
    Qg as ke
} from "./30901919-7dzdc1ou0jtwkwpt.js";
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
} from "./e1a66d2b-ji1c4uge7itb4rbv.js";
import {
    t as Ne
} from "./4c0f1f8e-o4zbuwgknf8ay6gx.js";
import {
    n as Pe,
    t as Fe
} from "./3509739a-ihw9f9g3txrbht3s.js";
import {
    i as Ie,
    o as Le,
    t as Re
} from "./25a66342-m7l5n4a5w24tz8pa.js";
import {
    n as ze,
    t as Be
} from "./84983163-dfsde0ga5pqj424h.js";
import {
    a as Ve,
    o as He,
    t as Ue
} from "./7517017f-d3t3zzf5aj62jaaf.js";
var K, q, We, Ge = e((() => {
        De(), _(), K = t(R()), q = F(), We = ({
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
            }, [l, i]), (0, q.jsx)(Ce, {
                sizeOverride: e,
                className: f(o == null && `text-primary`, o === `dark` && `text-back`, o === `light` && `text-white`),
                thickness: t,
                backgroundStrokeClassName: f(o == null && `stroke-[rgba(0,0,0,0.1)] dark:stroke-[rgba(0,0,0,0.32)]`, o === `dark` && `stroke-[rgba(0,0,0,0.32)]`, o === `light` && `stroke-[rgba(0,0,0,0.1)] `),
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
        Ge(), _(), a(), Ke = t(R()), J = F(), qe = `https://persistent.oaistatic.com/canvas/loop-swirl.mp4`, Je = `https://persistent.oaistatic.com/canvas/loop-swirl-poster.jpg`, Ye = ({
            title: e,
            checkpoints: t,
            activeCheckpointId: n,
            isComplete: r,
            onTransitionComplete: i
        }) => {
            let [a, o] = (0, Ke.useState)(!1), s = t[t.findIndex(e => e.id === n)];
            return (0, J.jsx)(S.div, {
                className: `relative flex h-full w-full items-center justify-center`,
                transition: {
                    type: `spring`,
                    bounce: 0
                },
                children: (0, J.jsxs)(S.div, {
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
                    children: [(0, J.jsxs)(S.div, {
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
                            className: f(`absolute inset-0 z-0 h-full w-full object-cover transition-opacity duration-200`)
                        }), (0, J.jsx)(`div`, {
                            className: f(`relative z-10 flex h-full w-full items-center justify-center`, a ? `opacity-0` : `opacity-100`),
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
                    }), (0, J.jsxs)(S.div, {
                        className: f(`flex flex-col items-center transition-opacity duration-200`, r ? `opacity-0` : `opacity-100`),
                        style: {
                            translateY: 110
                        },
                        children: [(0, J.jsx)(`span`, {
                            className: `text-token-text-primary font-semibold`,
                            children: e
                        }), s && (0, J.jsx)(S.span, {
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
        p(), Ee(), Se(), U(), Oe(), x(), c(), P(), b(), Qe = t(R()), L(), $e = t(Ne()), Y = F(), et = ({
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
            return (0, Y.jsx)(oe, {
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
                    }), (0, Y.jsx)(ue, {
                        side: `top`,
                        contentClassName: `max-w-2xs!`,
                        label: (0, Y.jsx)(I, {
                            id: `WT7tgj`,
                            defaultMessage: `Learn more about network requests in canvas`
                        }),
                        children: (0, Y.jsx)(M, {
                            icon: E,
                            openNewTab: !0,
                            onClick: () => we.logButtonClick(Te.LEARN_MODE_ABOUT_NETWORK_REQUESTS),
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
                primaryButton: (0, Y.jsx)(te.Button, {
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
                secondaryButton: (0, Y.jsx)(te.Button, {
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
        Ge(), je(), De(), a(), it = t(R()), L(), X = F(), at = ({
            checkpoints: e,
            activeCheckpointId: t,
            isIndeterminate: n = !1,
            isComplete: r
        }) => {
            let [i, a] = (0, it.useState)(r);
            return (0, it.useEffect)(() => {
                a(r)
            }, [t]), (0, X.jsx)(T, {
                children: (t != null && !i || n) && (0, X.jsxs)(S.div, {
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
                    children: [n ? (0, X.jsx)(Ce, {
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
        _e(), He(), ve(), me(), O(), A(), Re(), ct = t(R()), L(), z(), Z = () => l(k.getItem(i.CODE_EXECUTION_DOMAIN_ALLOW_LIST), e => ie(e, {
            origin: n,
            expiresAt: fe
        }), []).filter(({
            expiresAt: e
        }) => e >= Date.now()), lt = () => {
            k.removeItem(i.CODE_EXECUTION_DOMAIN_ALLOW_LIST)
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
            let n = h(),
                r = xe(),
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
                        N.count(C.WEB_SANDBOX, `network_access_requested`);
                        let a = Ie(s);
                        if (a == null) {
                            N.count(C.WEB_SANDBOX, `network_access_request.deny`);
                            return
                        }
                        let c = e => {
                                N.count(C.WEB_SANDBOX, `network_access_request.${e?`allow`:`deny`}`), o(e => e.filter(e => !ut(e.url, !t) && e.url !== s))
                            },
                            l = () => {
                                k.setItem(i.CODE_EXECUTION_DOMAIN_ALLOW_LIST, [...Z(), {
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
                        D.addError(e)
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
        Ze(), rt(), Pe(), ot(), st(), ze(), ft(), re(), w(), ne(), me(), se(), A(), ce(), d(), m(), Ae(), g(), _(), a(), Q = t(R()), L(), z(), He(), $ = F(), V(), ht = de(() => B(() => import(`./a05edf66-lnrm8oucy4udax7b.js`).then(e => e.SafeLinkWarningModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))), gt = () => `?` + [``, ``].filter(Boolean).join(`&`), _t = ye({
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
        }], St = () => he() ? `ios` : pe() ? `windows` : v() ? `android` : j() ? `safari` : r() || le() ? `chrome` : `unknown`, Ct = e => {
            N.count(C.WEB_SANDBOX, `${e}.eval`), y(`chatgpt_web_sandbox_code_run`, `${e}`)
        }, wt = e => {
            y(`chatgpt_web_sandbox_environment_error`, `${e.error.name}: ${e.error.message}`), D.addError(`Code execution environment error`, {
                ...e.error,
                errorMessage: `${e.error.name}: ${e.error.message}`
            }), e.error.name === `ServiceWorker` && N.count(C.WEB_SANDBOX, `service_worker_connection_failure`, [{
                key: `agent`,
                value: St()
            }, {
                key: `is_shared_surface`,
                value: String(e.isSharedSurface)
            }]), e.activeRun?.runId != null && e.activeRun.runId === e.activeRun?.runId && N.count(C.WEB_SANDBOX, `${e.activeRun.language}.environment_error`)
        }, Tt = ({
            ref: e,
            id: t,
            isSharedSurface: n = !1,
            title: r,
            visuallyHidden: i,
            disablePermissions: a,
            isCodeUpdating: c,
            onCodeRunComplete: l,
            onAppBlockMessage: d,
            networkPolicy: p = `deps-and-user-approved`,
            disableExternalNavigation: m = !1,
            networkAccessDeniedMessage: te,
            unsafeAllowAllNetworkRequests: ne,
            additionalResourceDomains: re,
            sandboxPermissions: ie,
            sandboxOriginId: oe,
            enableTransition: h,
            enableAnimation: se = !0,
            onRetryCodeRun: g,
            showInlineLoadingState: ce = !1,
            transparentBackground: le = !1,
            useIntrinsicHeight: ue = !1,
            intrinsicHeightFallback: de,
            iframeTabIndex: _ = -1,
            enableLinkConfirmationModal: fe = !0
        }) => {
            let v = `${Ve(oe)}${gt()}`,
                [y, b] = (0, Q.useState)(0),
                [x] = (0, Q.useState)(() => o(null)),
                pe = xe(),
                w = (0, Q.useRef)(null),
                T = (0, Q.useRef)(!1),
                E = (0, Q.useRef)(null),
                D = (0, Q.useRef)(!1),
                [O, k] = (0, Q.useState)(null),
                [A, j] = (0, Q.useState)(!1),
                [me, M] = (0, Q.useState)(null),
                he = p !== `none`,
                P = p === `deps-and-user-approved`,
                _e = n || m,
                ve = ie ?? (_e ? bt : yt),
                {
                    onViolation: F,
                    pendingFetchRequests: ye
                } = dt({
                    disableNetworkRequests: !P,
                    networkAccessDeniedMessage: te
                }),
                I = (0, Q.useRef)(F);
            I.current = F;
            let L = (0, Q.useRef)(d);
            ee(() => {
                L.current = d
            }, [d]);
            let R = (0, Q.useRef)(he);
            R.current = he;
            let z = (0, Q.useRef)(P);
            z.current = P;
            let B = (0, Q.useRef)(m);
            ee(() => {
                B.current = m
            }, [m]);
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
                    ge(ht, {
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
                        N.count(C.WEB_SANDBOX, `external_navigation_blocked`);
                        return
                    }
                    let n = t.href;
                    if (!z.current) {
                        N.count(C.WEB_SANDBOX, `external_navigation_blocked`);
                        return
                    }
                    N.count(C.WEB_SANDBOX, `external_navigation_request.shown`), Ce(n)
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
                    ge(ht, {
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
                            N.count(C.WEB_SANDBOX, `external_form_blocked`);
                            return
                        }
                        if (!z.current) {
                            N.count(C.WEB_SANDBOX, `external_form_blocked`);
                            return
                        }
                        N.count(C.WEB_SANDBOX, `external_form_request.shown`), De(e, Ee(e, t))
                    }
                };
            ee(() => {
                let e = E.current;
                if (!e) return;
                D.current = !0;
                let t = {
                    sendInstrument: Fe,
                    notifyEnvironmentError: e => {
                        wt({
                            error: e,
                            isSharedSurface: n,
                            activeRun: w.current
                        }), lt(), b(e => e + 1), U()
                    },
                    notifyBackgroundColor: () => {},
                    notifyIntrinsicHeight: e => {
                        ue && M(Math.ceil(e))
                    },
                    notifySecurityPolicyViolation: e => {
                        I.current(e)
                    },
                    notifyAppBlockMessage: e => {
                        L.current?.(e)
                    }
                };
                return fe && (t.openExternal = ({
                    href: e
                }) => {
                    we(e)
                }, t.openExternalForm = e => {
                    Oe(e)
                }), Be(e, t, [`runUserCode`]).then(e => {
                    x.set(e)
                }), () => {
                    x.set(null), D.current = !1
                }
            }, [y, v]);
            let H = async () => (await ae(() => x() != null), u(x())), U = ({
                preservePreview: e = !1
            } = {}) => {
                w.current = null, T.current = e, e || (k(null), j(!1), M(null)), l?.()
            }, ke = (0, Q.useRef)(p);
            (0, Q.useEffect)(() => {
                let e = mt({
                    previousNetworkPolicy: ke.current,
                    networkPolicy: p,
                    hasActiveRun: w.current != null || T.current
                });
                ke.current = p, e && (x()?.stop(), b(e => e + 1), w.current = null, T.current = !1, k(null), j(!1), M(null), l?.(), g != null && setTimeout(() => {
                    g()
                }))
            }, [x, p, l, g]);
            let Ae = async function*({
                code: e,
                language: n,
                additionalGlobals: r,
                expectReadySignal: i,
                frameColorScheme: a,
                previewDiagnostics: o,
                shouldPreservePreviewOnFatalError: s
            }) {
                T.current && (j(!1), M(null)), k(W.INITIALIZING), Ct(n);
                let c = await H(),
                    l = be(),
                    u = !1;
                w.current = {
                    runId: l,
                    language: n
                }, T.current = !1;
                let d = P ? Z().map(({
                        origin: e
                    }) => e) : [],
                    f = Le({
                        disableNetworkRequests: !he,
                        domains: d,
                        additionalResourceDomains: re,
                        unsafeAllowAllNetworkRequests: P && ne
                    });
                for await (let d of await c.runUserCode({
                    previewDiagnostics: o,
                    code: e,
                    id: t,
                    language: n,
                    csp: f,
                    additionalGlobals: r,
                    expectReadySignal: i,
                    frameColorScheme: a,
                    enableExternalNavigationGating: fe,
                    disableExternalNavigation: m,
                    allowPopups: !_e
                })) {
                    let e = {
                        timestamp: Date.now(),
                        id: be(),
                        runId: l
                    };
                    switch (d.type) {
                        case G.RUN_START:
                            yield {
                                ...d, ...e
                            };
                            break;
                        case G.OUTPUT:
                            yield {
                                ...d, ...e
                            };
                            break;
                        case G.ERROR:
                            N.count(C.WEB_SANDBOX, `${n}.error`), yield {
                                ...d,
                                ...e
                            };
                            break;
                        case G.ENVIRONMENT_STATUS:
                            d.status === W.RUNNING_CODE && (u = !0), k(d.status), h || j(d.status === W.RUNNING_CODE), yield {
                                ...d,
                                ...e
                            };
                            break;
                        case G.RUN_COMPLETE:
                            if (d.type === G.RUN_COMPLETE && d.wasFatalError && N.count(C.WEB_SANDBOX, `${n}.fatal_runtime_error`), yield {
                                    ...d,
                                    ...e
                                }, w.current?.runId === l) {
                                let e = n === `html` && u && d.wasFatalError === !0 && d.wasCancelled !== !0 && s?.() === !0;
                                U({
                                    preservePreview: e
                                })
                            }
                            break;
                        case G.LOG:
                            yield {
                                ...d, ...e
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
                await ae(() => x() != null), x()?.stop(), T.current && U()
            }, Ie = async () => (await H()).screenshot(), Re = () => {
                E.current?.focus()
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
            let ze = se ? A && h ? {
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
                Ue = (ce || w.current?.language === `recharts` || w.current?.language === `threejs`) && !i && !h && !A,
                K = w.current?.language === `threejs`,
                q = pt({
                    useIntrinsicHeight: ue,
                    intrinsicHeight: me,
                    intrinsicHeightFallback: de
                });
            return (0, $.jsxs)(s, {
                children: [(0, $.jsxs)(`div`, {
                    className: f(`relative flex`, i ? `fixed h-0 w-0` : `h-full w-full`),
                    style: q == null ? void 0 : {
                        height: q
                    },
                    children: [!i && O != null && h && (0, $.jsx)(Ye, {
                        isComplete: O === W.RUNNING_CODE,
                        onTransitionComplete: () => j(!0),
                        activeCheckpointId: O,
                        title: r,
                        checkpoints: xt
                    }), (0, $.jsx)(S.div, {
                        className: f(`absolute inset-0 m-auto origin-center overflow-hidden`, le ? `bg-transparent` : `bg-token-main-surface-primary`, K && `corner-superellipse/1.1 rounded-3xl`, A ? `pointer-events-auto` : `pointer-events-none`),
                        animate: {
                            opacity: +!!A,
                            ...A ? {
                                scale: 1
                            } : {
                                scale: .95
                            }
                        },
                        transition: ze,
                        children: (0, $.jsx)(S.iframe, {
                            title: r,
                            className: `h-full w-full overflow-hidden`,
                            transition: ze,
                            "aria-hidden": i ? `true` : void 0,
                            allow: He,
                            src: v,
                            sandbox: ve,
                            ref: E,
                            tabIndex: _
                        }, `${v}:${y}`)
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
                    }), A && (0, $.jsx)(at, {
                        isIndeterminate: c,
                        isComplete: O === W.RUNNING_CODE,
                        activeCheckpointId: O,
                        checkpoints: xt
                    })]
                }), ye.length > 0 && (0, $.jsx)(nt, {
                    title: r,
                    requests: ye,
                    onConfirm: () => {
                        b(e => e + 1), k(null), j(!1), setTimeout(() => {
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
//# sourceMappingURL=4d271a7b-gwx5wu51hmc69fj9.js.map