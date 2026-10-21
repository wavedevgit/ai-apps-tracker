const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/a05edf66-b5n6xno381hs9jmk.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-lxa3wniynbx9ka2a.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-kzsalymynzuddxee.js", "assets/30901919-i8ip8r0znvgcym38.js", "assets/c470f5ab-poh7ivjvb3j2jlfz.js", "assets/0e5afe53-dz59mkfveu52getp.js", "assets/conversation-small-bwtqiuwj.css", "assets/8742b478-oww4twhg6yjbetn8.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $0 as n,
    $8 as r,
    $tt as i,
    At as a,
    B8 as o,
    BU as s,
    C5 as c,
    Cw as l,
    Fnt as u,
    HU as d,
    Int as f,
    Iw as ee,
    JT as te,
    K8 as ne,
    Kot as re,
    LN as p,
    Oz as ie,
    Pnt as m,
    Pw as h,
    RN as ae,
    Tw as oe,
    X0 as se,
    X5 as g,
    X8 as ce,
    Xy as le,
    Y5 as _,
    YT as ue,
    Z0 as v,
    Zy as de,
    aB as y,
    cn as b,
    cnt as x,
    dat as fe,
    e5 as S,
    ent as C,
    g8 as w,
    grt as T,
    hn as pe,
    hrt as E,
    int as D,
    kz as O,
    lat as k,
    mrt as A,
    n2 as me,
    nrt as he,
    oB as j,
    qot as ge,
    tnt as M,
    trt as N,
    w8 as _e,
    xnt as ve,
    ynt as ye
} from "./4813494d-lxa3wniynbx9ka2a.js";
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
    Cgn as Ce,
    cUn as we,
    lUn as Te,
    mUn as Ee,
    pUn as De,
    wgn as Oe
} from "./conversation-small-kzsalymynzuddxee.js";
import {
    $g as ke,
    Mv as V,
    Nv as H,
    Qg as Ae
} from "./30901919-i8ip8r0znvgcym38.js";
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
} from "./e1a66d2b-dyg4p50wzzz24lxp.js";
import {
    t as Pe
} from "./4c0f1f8e-o4zbuwgknf8ay6gx.js";
import {
    n as Fe,
    t as Ie
} from "./3509739a-g3cqqs3jncaimd89.js";
import {
    i as Le,
    o as Re,
    t as ze
} from "./25a66342-kiy8nj5a5phqlewo.js";
import {
    n as Be,
    t as Ve
} from "./84983163-hmcoxorkyjc82jy4.js";
import {
    a as He,
    o as Ue,
    t as We
} from "./7517017f-oib49vii1rbf9vcq.js";
var G, K, Ge, Ke = e((() => {
        Oe(), g(), G = t(L()), K = P(), Ge = ({
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
                className: _(o == null && `text-primary`, o === `dark` && `text-back`, o === `light` && `text-white`),
                thickness: t,
                backgroundStrokeClassName: _(o == null && `stroke-[rgba(0,0,0,0.1)] dark:stroke-[rgba(0,0,0,0.32)]`, o === `dark` && `stroke-[rgba(0,0,0,0.32)]`, o === `light` && `stroke-[rgba(0,0,0,0.1)] `),
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
        Ke(), g(), a(), qe = t(L()), q = P(), Je = `https://persistent.oaistatic.com/canvas/loop-swirl.mp4`, Ye = `https://persistent.oaistatic.com/canvas/loop-swirl-poster.jpg`, Xe = ({
            title: e,
            checkpoints: t,
            activeCheckpointId: n,
            isComplete: r,
            onTransitionComplete: i
        }) => {
            let [a, o] = (0, qe.useState)(!1), s = t[t.findIndex(e => e.id === n)];
            return (0, q.jsx)(b.div, {
                className: `relative flex h-full w-full items-center justify-center`,
                transition: {
                    type: `spring`,
                    bounce: 0
                },
                children: (0, q.jsxs)(b.div, {
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
                    children: [(0, q.jsxs)(b.div, {
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
                            className: _(`absolute inset-0 z-0 h-full w-full object-cover transition-opacity duration-200`)
                        }), (0, q.jsx)(`div`, {
                            className: _(`relative z-10 flex h-full w-full items-center justify-center`, a ? `opacity-0` : `opacity-100`),
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
                    }), (0, q.jsxs)(b.div, {
                        className: _(`flex flex-col items-center transition-opacity duration-200`, r ? `opacity-0` : `opacity-100`),
                        style: {
                            translateY: 110
                        },
                        children: [(0, q.jsx)(`span`, {
                            className: `text-token-text-primary font-semibold`,
                            children: e
                        }), s && (0, q.jsx)(b.span, {
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
        ue(), Ee(), Te(), H(), ke(), j(), ee(), oe(), de(), $e = t(L()), I(), et = t(Pe()), J = P(), tt = ({
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
                    children: t ? (0, J.jsx)(Ae, {
                        className: `icon text-red-500`
                    }) : (0, J.jsx)(V, {
                        className: `icon text-green-500`
                    })
                }), (0, J.jsx)(tt, {
                    ...e
                })]
            })
        }, rt = ({
            title: e,
            requests: t,
            onConfirm: n
        }) => {
            let r = Se(),
                [i, a] = (0, $e.useState)(() => new Set),
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
                u = t.length - i.size;
            return (0, J.jsx)(l, {
                testId: `modal-confirm-fetch-request`,
                isOpen: !0,
                shouldIgnoreClickOutside: !0,
                onClose: o,
                type: `success`,
                title: (0, J.jsxs)(`div`, {
                    className: `flex justify-between`,
                    children: [(0, J.jsx)(`span`, {
                        className: `text-xl`,
                        children: (0, J.jsx)(F, {
                            id: `VmMpF1`,
                            defaultMessage: `Allow network access?`
                        })
                    }), (0, J.jsx)(le, {
                        side: `top`,
                        contentClassName: `max-w-2xs!`,
                        label: (0, J.jsx)(F, {
                            id: `WT7tgj`,
                            defaultMessage: `Learn more about network requests in canvas`
                        }),
                        children: (0, J.jsx)(te, {
                            icon: y,
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
                                        isDenied: i.has(t),
                                        onClick: () => c(t)
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
                primaryButton: (0, J.jsx)(h.Button, {
                    disabled: u === 0,
                    title: t.length > 1 ? r.formatMessage({
                        id: `xpKkWv`,
                        defaultMessage: `Allow selected ({count})`
                    }, {
                        count: u
                    }) : r.formatMessage({
                        id: `ZeMrpd`,
                        defaultMessage: `Allow`
                    }),
                    color: `primary`,
                    onClick: o
                }),
                secondaryButton: (0, J.jsx)(h.Button, {
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
    Y, X, at, ot = e((() => {
        Ke(), Me(), Oe(), a(), Y = t(L()), I(), X = P(), at = ({
            checkpoints: e,
            activeCheckpointId: t,
            isIndeterminate: n = !1,
            isComplete: r
        }) => {
            let [i, a] = (0, Y.useState)(r);
            return (0, Y.useEffect)(() => {
                a(r)
            }, [t]), (0, X.jsx)(pe, {
                children: (t != null && !i || n) && (0, X.jsxs)(b.div, {
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
                    }) : t && (0, X.jsx)(Ge, {
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
                        }), (0, X.jsx)(Ne, {
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
        ze()
    })),
    ct, Z, lt, ut, dt, ft = e((() => {
        o(), Ue(), s(), fe(), f(), A(), ze(), ct = t(L()), I(), R(), Z = () => ne(m.getItem(u.CODE_EXECUTION_DOMAIN_ALLOW_LIST), e => r(e, {
            origin: S,
            expiresAt: ce
        }), []).filter(({
            expiresAt: e
        }) => e >= Date.now()), lt = () => {
            m.removeItem(u.CODE_EXECUTION_DOMAIN_ALLOW_LIST)
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
            let n = d(),
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
                        E.count(T.WEB_SANDBOX, `network_access_requested`);
                        let i = Le(o);
                        if (i == null) {
                            E.count(T.WEB_SANDBOX, `network_access_request.deny`);
                            return
                        }
                        let s = e => {
                                E.count(T.WEB_SANDBOX, `network_access_request.${e?`allow`:`deny`}`), a(e => e.filter(e => !ut(e.url, !t) && e.url !== o))
                            },
                            c = () => {
                                m.setItem(u.CODE_EXECUTION_DOMAIN_ALLOW_LIST, [...Z(), {
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
                        k.addError(e)
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
        Qe(), it(), Fe(), ot(), st(), Be(), ft(), n(), w(), O(), fe(), re(), A(), N(), p(), i(), je(), v(), g(), a(), Q = t(L()), I(), R(), Ue(), $ = P(), B(), ht = se(() => z(() => import(`./a05edf66-b5n6xno381hs9jmk.js`).then(e => e.SafeLinkWarningModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))), gt = () => `?` + [``, ``].filter(Boolean).join(`&`), _t = be({
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
        }], St = () => x() ? `ios` : ve() ? `windows` : C() ? `android` : ye() ? `safari` : D() || M() ? `chrome` : `unknown`, Ct = e => {
            E.count(T.WEB_SANDBOX, `${e}.eval`), he(`chatgpt_web_sandbox_code_run`, `${e}`)
        }, wt = e => {
            he(`chatgpt_web_sandbox_environment_error`, `${e.error.name}: ${e.error.message}`), k.addError(`Code execution environment error`, {
                ...e.error,
                errorMessage: `${e.error.name}: ${e.error.message}`
            }), e.error.name === `ServiceWorker` && E.count(T.WEB_SANDBOX, `service_worker_connection_failure`, [{
                key: `agent`,
                value: St()
            }, {
                key: `is_shared_surface`,
                value: String(e.isSharedSurface)
            }]), e.activeRun?.runId != null && e.activeRun.runId === e.activeRun?.runId && E.count(T.WEB_SANDBOX, `${e.activeRun.language}.environment_error`)
        }, Tt = ({
            ref: e,
            id: t,
            isSharedSurface: n = !1,
            title: r,
            visuallyHidden: i,
            disablePermissions: a,
            isCodeUpdating: o,
            onCodeRunComplete: s,
            onAppBlockMessage: l,
            networkPolicy: u = `deps-and-user-approved`,
            disableExternalNavigation: d = !1,
            networkAccessDeniedMessage: f,
            unsafeAllowAllNetworkRequests: ee,
            additionalResourceDomains: te,
            sandboxPermissions: ne,
            sandboxOriginId: re,
            enableTransition: p,
            enableAnimation: m = !0,
            onRetryCodeRun: h,
            showInlineLoadingState: oe = !1,
            transparentBackground: se = !1,
            useIntrinsicHeight: g = !1,
            intrinsicHeightFallback: ce,
            iframeTabIndex: le = -1,
            enableLinkConfirmationModal: ue = !0
        }) => {
            let v = `${He(re)}${gt()}`,
                [de, y] = (0, Q.useState)(0),
                [x] = (0, Q.useState)(() => _e(null)),
                fe = Se(),
                S = (0, Q.useRef)(null),
                C = (0, Q.useRef)(!1),
                w = (0, Q.useRef)(null),
                pe = (0, Q.useRef)(!1),
                [D, O] = (0, Q.useState)(null),
                [k, A] = (0, Q.useState)(!1),
                [he, j] = (0, Q.useState)(null),
                M = u !== `none`,
                N = u === `deps-and-user-approved`,
                ve = n || d,
                ye = ne ?? (ve ? bt : yt),
                {
                    onViolation: P,
                    pendingFetchRequests: be
                } = dt({
                    disableNetworkRequests: !N,
                    networkAccessDeniedMessage: f
                }),
                F = (0, Q.useRef)(P);
            F.current = P;
            let I = (0, Q.useRef)(l);
            ae(() => {
                I.current = l
            }, [l]);
            let L = (0, Q.useRef)(M);
            L.current = M;
            let R = (0, Q.useRef)(N);
            R.current = N;
            let z = (0, Q.useRef)(d);
            ae(() => {
                z.current = d
            }, [d]);
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
                    me(ht, {
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
                        E.count(T.WEB_SANDBOX, `external_navigation_blocked`);
                        return
                    }
                    let n = t.href;
                    if (!R.current) {
                        E.count(T.WEB_SANDBOX, `external_navigation_blocked`);
                        return
                    }
                    E.count(T.WEB_SANDBOX, `external_navigation_request.shown`), we(n)
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
                    me(ht, {
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
                            E.count(T.WEB_SANDBOX, `external_form_blocked`);
                            return
                        }
                        if (!R.current) {
                            E.count(T.WEB_SANDBOX, `external_form_blocked`);
                            return
                        }
                        E.count(T.WEB_SANDBOX, `external_form_request.shown`), Oe(e, De(e, t))
                    }
                };
            ae(() => {
                let e = w.current;
                if (!e) return;
                pe.current = !0;
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
                        g && j(Math.ceil(e))
                    },
                    notifySecurityPolicyViolation: e => {
                        F.current(e)
                    },
                    notifyAppBlockMessage: e => {
                        I.current?.(e)
                    }
                };
                return ue && (t.openExternal = ({
                    href: e
                }) => {
                    Te(e)
                }, t.openExternalForm = e => {
                    ke(e)
                }), Ve(e, t, [`runUserCode`]).then(e => {
                    x.set(e)
                }), () => {
                    x.set(null), pe.current = !1
                }
            }, [de, v]);
            let V = async () => (await c(() => x() != null), ge(x())), H = ({
                preservePreview: e = !1
            } = {}) => {
                S.current = null, C.current = e, e || (O(null), A(!1), j(null)), s?.()
            }, Ae = (0, Q.useRef)(u);
            (0, Q.useEffect)(() => {
                let e = mt({
                    previousNetworkPolicy: Ae.current,
                    networkPolicy: u,
                    hasActiveRun: S.current != null || C.current
                });
                Ae.current = u, e && (x()?.stop(), y(e => e + 1), S.current = null, C.current = !1, O(null), A(!1), j(null), s?.(), h != null && setTimeout(() => {
                    h()
                }))
            }, [x, u, s, h]);
            let je = async function*({
                code: e,
                language: n,
                additionalGlobals: r,
                expectReadySignal: i,
                frameColorScheme: a,
                previewDiagnostics: o,
                shouldPreservePreviewOnFatalError: s
            }) {
                C.current && (A(!1), j(null)), O(U.INITIALIZING), Ct(n);
                let c = await V(),
                    l = xe(),
                    u = !1;
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
                    enableExternalNavigationGating: ue,
                    disableExternalNavigation: d,
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
                            E.count(T.WEB_SANDBOX, `${n}.error`), yield {
                                ...f,
                                ...e
                            };
                            break;
                        case W.ENVIRONMENT_STATUS:
                            f.status === U.RUNNING_CODE && (u = !0), O(f.status), p || A(f.status === U.RUNNING_CODE), yield {
                                ...f,
                                ...e
                            };
                            break;
                        case W.RUN_COMPLETE:
                            if (f.type === W.RUN_COMPLETE && f.wasFatalError && E.count(T.WEB_SANDBOX, `${n}.fatal_runtime_error`), yield {
                                    ...f,
                                    ...e
                                }, S.current?.runId === l) {
                                let e = n === `html` && u && f.wasFatalError === !0 && f.wasCancelled !== !0 && s?.() === !0;
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
                await c(() => x() != null), x()?.stop(), C.current && H()
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
            let Be = m ? k && p ? {
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
                We = (oe || S.current?.language === `recharts` || S.current?.language === `threejs`) && !i && !p && !k,
                G = S.current?.language === `threejs`,
                K = pt({
                    useIntrinsicHeight: g,
                    intrinsicHeight: he,
                    intrinsicHeightFallback: ce
                });
            return (0, $.jsxs)(ie, {
                children: [(0, $.jsxs)(`div`, {
                    className: _(`relative flex`, i ? `fixed h-0 w-0` : `h-full w-full`),
                    style: K == null ? void 0 : {
                        height: K
                    },
                    children: [!i && D != null && p && (0, $.jsx)(Xe, {
                        isComplete: D === U.RUNNING_CODE,
                        onTransitionComplete: () => A(!0),
                        activeCheckpointId: D,
                        title: r,
                        checkpoints: xt
                    }), (0, $.jsx)(b.div, {
                        className: _(`absolute inset-0 m-auto origin-center overflow-hidden`, se ? `bg-transparent` : `bg-token-main-surface-primary`, G && `corner-superellipse/1.1 rounded-3xl`, k ? `pointer-events-auto` : `pointer-events-none`),
                        animate: {
                            opacity: +!!k,
                            ...k ? {
                                scale: 1
                            } : {
                                scale: .95
                            }
                        },
                        transition: Be,
                        children: (0, $.jsx)(b.iframe, {
                            title: r,
                            className: `h-full w-full overflow-hidden`,
                            transition: Be,
                            "aria-hidden": i ? `true` : void 0,
                            allow: Ue,
                            src: v,
                            sandbox: ye,
                            ref: w,
                            tabIndex: le
                        }, `${v}:${de}`)
                    }), We && (0, $.jsx)(`div`, {
                        "aria-live": `polite`,
                        className: `pointer-events-none absolute inset-0 z-10 h-full min-h-0 w-full bg-transparent`,
                        role: `status`,
                        children: (0, $.jsx)(`div`, {
                            className: `max-w-[70%] space-y-0.5`,
                            children: (0, $.jsx)(`p`, {
                                className: `loading-shimmer text-base font-medium select-none`,
                                children: fe.formatMessage(_t.creatingVisualization)
                            })
                        })
                    }), k && (0, $.jsx)(at, {
                        isIndeterminate: o,
                        isComplete: D === U.RUNNING_CODE,
                        activeCheckpointId: D,
                        checkpoints: xt
                    })]
                }), be.length > 0 && (0, $.jsx)(rt, {
                    title: r,
                    requests: be,
                    onConfirm: () => {
                        y(e => e + 1), O(null), A(!1), setTimeout(() => {
                            h?.()
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
//# sourceMappingURL=4d271a7b-clqs0x0ur1ck9e5p.js.map