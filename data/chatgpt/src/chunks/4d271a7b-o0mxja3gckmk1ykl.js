const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/a05edf66-ih7uzopt7zad60du.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-qsuygr73qjc6rh65.js", "assets/2340486e-komxp8tzs51ny4jj.js", "assets/root-lelxp0l2.css", "assets/conversation-small-cawdu7il3ha6y70c.js", "assets/30901919-jory365vq6ym5crx.js", "assets/c470f5ab-in0lllrdrzeo67gs.js", "assets/0e5afe53-f9gmgfmgrr83ziw3.js", "assets/conversation-small-czggvj2v.css", "assets/8742b478-n9ctg1vxa2pdnusu.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    At as n,
    Bot as r,
    Dnt as i,
    Dz as a,
    Fw as o,
    IN as s,
    J0 as c,
    J5 as l,
    J8 as u,
    JT as d,
    Jnt as f,
    Jtt as ee,
    Ktt as te,
    LN as ne,
    Nw as re,
    Ont as p,
    Oz as ie,
    Q8 as m,
    R8 as ae,
    S8 as oe,
    Sw as h,
    VU as se,
    W8 as ce,
    Xy as le,
    Y0 as ue,
    Ynt as g,
    Yy as de,
    Z0 as _,
    Z8 as fe,
    Ztt as v,
    aB as y,
    cn as b,
    crt as x,
    e2 as pe,
    fnt as me,
    hn as S,
    iB as C,
    iat as w,
    knt as he,
    lrt as T,
    m8 as E,
    mnt as D,
    nat as O,
    q5 as k,
    qT as A,
    qtt as ge,
    srt as j,
    tnt as M,
    ww as N,
    x5 as _e,
    zU as ve,
    zot as ye
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Bn as be,
    Hn as P,
    Pn as F,
    Qt as I,
    Rn as xe,
    Vn as L,
    in as Se,
    ln as R,
    un as z,
    zn as B
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    bgn as Ce,
    hUn as we,
    lUn as Te,
    mUn as Ee,
    uUn as De,
    ygn as Oe
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    $g as ke,
    Mv as V,
    Nv as H,
    Qg as Ae
} from "./30901919-jory365vq6ym5crx.js";
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
} from "./e1a66d2b-iktyf2mausmi8n5g.js";
import {
    t as Pe
} from "./4c0f1f8e-lcllh9m5rwe6l2ew.js";
import {
    n as Fe,
    t as Ie
} from "./3509739a-kuauye74m5ek47rc.js";
import {
    i as Le,
    o as Re,
    t as ze
} from "./25a66342-cnfcsfdh2ydiex1n.js";
import {
    n as Be,
    t as Ve
} from "./84983163-ci4xm9sq2rcig1sd.js";
import {
    a as He,
    o as Ue,
    t as We
} from "./7517017f-mzovnixx0oznxrxh.js";
var G, K, Ge, Ke = e((() => {
        Ce(), l(), G = t(P()), K = L(), Ge = ({
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
            }, [l, i]), (0, K.jsx)(Oe, {
                sizeOverride: e,
                className: k(o == null && `text-primary`, o === `dark` && `text-back`, o === `light` && `text-white`),
                thickness: t,
                backgroundStrokeClassName: k(o == null && `stroke-[rgba(0,0,0,0.1)] dark:stroke-[rgba(0,0,0,0.32)]`, o === `dark` && `stroke-[rgba(0,0,0,0.32)]`, o === `light` && `stroke-[rgba(0,0,0,0.1)] `),
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
        Ke(), l(), n(), qe = t(P()), q = L(), Je = `https://persistent.oaistatic.com/canvas/loop-swirl.mp4`, Ye = `https://persistent.oaistatic.com/canvas/loop-swirl-poster.jpg`, Xe = ({
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
                            className: k(`absolute inset-0 z-0 h-full w-full object-cover transition-opacity duration-200`)
                        }), (0, q.jsx)(`div`, {
                            className: k(`relative z-10 flex h-full w-full items-center justify-center`, a ? `opacity-0` : `opacity-100`),
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
                        className: k(`flex flex-col items-center transition-opacity duration-200`, r ? `opacity-0` : `opacity-100`),
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
        d(), we(), De(), H(), ke(), y(), o(), N(), le(), $e = t(P()), B(), et = t(Pe()), J = L(), tt = ({
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
            let r = be(),
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
                l = t.length - i.size;
            return (0, J.jsx)(h, {
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
                    }), (0, J.jsx)(de, {
                        side: `top`,
                        contentClassName: `max-w-2xs!`,
                        label: (0, J.jsx)(F, {
                            id: `WT7tgj`,
                            defaultMessage: `Learn more about network requests in canvas`
                        }),
                        children: (0, J.jsx)(A, {
                            icon: C,
                            openNewTab: !0,
                            onClick: () => Te.logButtonClick(Ee.LEARN_MODE_ABOUT_NETWORK_REQUESTS),
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
                primaryButton: (0, J.jsx)(re.Button, {
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
                secondaryButton: (0, J.jsx)(re.Button, {
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
    at, Y, ot, st = e((() => {
        Ke(), Me(), Ce(), n(), at = t(P()), B(), Y = L(), ot = ({
            checkpoints: e,
            activeCheckpointId: t,
            isIndeterminate: n = !1,
            isComplete: r
        }) => {
            let [i, a] = (0, at.useState)(r);
            return (0, at.useEffect)(() => {
                a(r)
            }, [t]), (0, Y.jsx)(S, {
                children: (t != null && !i || n) && (0, Y.jsxs)(b.div, {
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
                    children: [n ? (0, Y.jsx)(Oe, {
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
        ae(), Ue(), ve(), w(), he(), j(), ze(), X = t(P()), B(), I(), Z = () => ce(i.getItem(p.CODE_EXECUTION_DOMAIN_ALLOW_LIST), e => fe(e, {
            origin: m,
            expiresAt: u
        }), []).filter(({
            expiresAt: e
        }) => e >= Date.now()), lt = () => {
            i.removeItem(p.CODE_EXECUTION_DOMAIN_ALLOW_LIST)
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
            let n = se(),
                r = be(),
                [a, o] = (0, X.useState)([]);
            return {
                onViolation: (0, X.useCallback)(a => {
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
                        x.count(T.WEB_SANDBOX, `network_access_requested`);
                        let a = Le(s);
                        if (a == null) {
                            x.count(T.WEB_SANDBOX, `network_access_request.deny`);
                            return
                        }
                        let c = e => {
                                x.count(T.WEB_SANDBOX, `network_access_request.${e?`allow`:`deny`}`), o(e => e.filter(e => !ut(e.url, !t) && e.url !== s))
                            },
                            l = () => {
                                i.setItem(p.CODE_EXECUTION_DOMAIN_ALLOW_LIST, [...Z(), {
                                    origin: a,
                                    expiresAt: Date.now() + 2160 * 60 * 60 * 1e3
                                }]), c(!0)
                            };
                        o(e => [...e, {
                            requestId: Se(),
                            url: s,
                            origin: a,
                            approve: l,
                            deny: () => c(!1)
                        }])
                    } catch (e) {
                        O.addError(e)
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
        Qe(), it(), Fe(), st(), ct(), Be(), ft(), _(), E(), ie(), w(), ye(), j(), f(), s(), te(), je(), ue(), l(), n(), Q = t(P()), B(), I(), Ue(), $ = L(), z(), ht = c(() => R(() => import(`./a05edf66-ih7uzopt7zad60du.js`).then(e => e.SafeLinkWarningModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))), gt = () => `?` + [``, ``].filter(Boolean).join(`&`), _t = xe({
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
        }], St = () => M() ? `ios` : D() ? `windows` : ge() ? `android` : me() ? `safari` : v() || ee() ? `chrome` : `unknown`, Ct = e => {
            x.count(T.WEB_SANDBOX, `${e}.eval`), g(`chatgpt_web_sandbox_code_run`, `${e}`)
        }, wt = e => {
            g(`chatgpt_web_sandbox_environment_error`, `${e.error.name}: ${e.error.message}`), O.addError(`Code execution environment error`, {
                ...e.error,
                errorMessage: `${e.error.name}: ${e.error.message}`
            }), e.error.name === `ServiceWorker` && x.count(T.WEB_SANDBOX, `service_worker_connection_failure`, [{
                key: `agent`,
                value: St()
            }, {
                key: `is_shared_surface`,
                value: String(e.isSharedSurface)
            }]), e.activeRun?.runId != null && e.activeRun.runId === e.activeRun?.runId && x.count(T.WEB_SANDBOX, `${e.activeRun.language}.environment_error`)
        }, Tt = ({
            ref: e,
            id: t,
            isSharedSurface: n = !1,
            title: i,
            visuallyHidden: o,
            disablePermissions: s,
            isCodeUpdating: c,
            onCodeRunComplete: l,
            onAppBlockMessage: u,
            networkPolicy: d = `deps-and-user-approved`,
            disableExternalNavigation: f = !1,
            networkAccessDeniedMessage: ee,
            unsafeAllowAllNetworkRequests: te,
            additionalResourceDomains: re,
            sandboxPermissions: p,
            sandboxOriginId: ie,
            enableTransition: m,
            enableAnimation: ae = !0,
            onRetryCodeRun: h,
            showInlineLoadingState: se = !1,
            transparentBackground: ce = !1,
            useIntrinsicHeight: le = !1,
            intrinsicHeightFallback: ue,
            iframeTabIndex: g = -1,
            enableLinkConfirmationModal: de = !0
        }) => {
            let _ = `${He(ie)}${gt()}`,
                [fe, v] = (0, Q.useState)(0),
                [y] = (0, Q.useState)(() => oe(null)),
                me = be(),
                S = (0, Q.useRef)(null),
                C = (0, Q.useRef)(!1),
                w = (0, Q.useRef)(null),
                he = (0, Q.useRef)(!1),
                [E, D] = (0, Q.useState)(null),
                [O, A] = (0, Q.useState)(!1),
                [ge, j] = (0, Q.useState)(null),
                M = d !== `none`,
                N = d === `deps-and-user-approved`,
                ve = n || f,
                ye = p ?? (ve ? bt : yt),
                {
                    onViolation: P,
                    pendingFetchRequests: F
                } = dt({
                    disableNetworkRequests: !N,
                    networkAccessDeniedMessage: ee
                }),
                I = (0, Q.useRef)(P);
            I.current = P;
            let xe = (0, Q.useRef)(u);
            ne(() => {
                xe.current = u
            }, [u]);
            let L = (0, Q.useRef)(M);
            L.current = M;
            let R = (0, Q.useRef)(N);
            R.current = N;
            let z = (0, Q.useRef)(f);
            ne(() => {
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
                    pe(ht, {
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
                        x.count(T.WEB_SANDBOX, `external_navigation_blocked`);
                        return
                    }
                    let n = t.href;
                    if (!R.current) {
                        x.count(T.WEB_SANDBOX, `external_navigation_blocked`);
                        return
                    }
                    x.count(T.WEB_SANDBOX, `external_navigation_request.shown`), we(n)
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
                    pe(ht, {
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
                            x.count(T.WEB_SANDBOX, `external_form_blocked`);
                            return
                        }
                        if (!R.current) {
                            x.count(T.WEB_SANDBOX, `external_form_blocked`);
                            return
                        }
                        x.count(T.WEB_SANDBOX, `external_form_request.shown`), Oe(e, De(e, t))
                    }
                };
            ne(() => {
                let e = w.current;
                if (!e) return;
                he.current = !0;
                let t = {
                    sendInstrument: Ie,
                    notifyEnvironmentError: e => {
                        wt({
                            error: e,
                            isSharedSurface: n,
                            activeRun: S.current
                        }), lt(), v(e => e + 1), H()
                    },
                    notifyBackgroundColor: () => {},
                    notifyIntrinsicHeight: e => {
                        le && j(Math.ceil(e))
                    },
                    notifySecurityPolicyViolation: e => {
                        I.current(e)
                    },
                    notifyAppBlockMessage: e => {
                        xe.current?.(e)
                    }
                };
                return de && (t.openExternal = ({
                    href: e
                }) => {
                    Te(e)
                }, t.openExternalForm = e => {
                    ke(e)
                }), Ve(e, t, [`runUserCode`]).then(e => {
                    y.set(e)
                }), () => {
                    y.set(null), he.current = !1
                }
            }, [fe, _]);
            let V = async () => (await _e(() => y() != null), r(y())), H = ({
                preservePreview: e = !1
            } = {}) => {
                S.current = null, C.current = e, e || (D(null), A(!1), j(null)), l?.()
            }, Ae = (0, Q.useRef)(d);
            (0, Q.useEffect)(() => {
                let e = mt({
                    previousNetworkPolicy: Ae.current,
                    networkPolicy: d,
                    hasActiveRun: S.current != null || C.current
                });
                Ae.current = d, e && (y()?.stop(), v(e => e + 1), S.current = null, C.current = !1, D(null), A(!1), j(null), l?.(), h != null && setTimeout(() => {
                    h()
                }))
            }, [y, d, l, h]);
            let je = async function*({
                code: e,
                language: n,
                additionalGlobals: r,
                expectReadySignal: i,
                frameColorScheme: a,
                previewDiagnostics: o,
                shouldPreservePreviewOnFatalError: s
            }) {
                C.current && (A(!1), j(null)), D(U.INITIALIZING), Ct(n);
                let c = await V(),
                    l = Se(),
                    u = !1;
                S.current = {
                    runId: l,
                    language: n
                }, C.current = !1;
                let d = N ? Z().map(({
                        origin: e
                    }) => e) : [],
                    ee = Re({
                        disableNetworkRequests: !M,
                        domains: d,
                        additionalResourceDomains: re,
                        unsafeAllowAllNetworkRequests: N && te
                    });
                for await (let d of await c.runUserCode({
                    previewDiagnostics: o,
                    code: e,
                    id: t,
                    language: n,
                    csp: ee,
                    additionalGlobals: r,
                    expectReadySignal: i,
                    frameColorScheme: a,
                    enableExternalNavigationGating: de,
                    disableExternalNavigation: f,
                    allowPopups: !ve
                })) {
                    let e = {
                        timestamp: Date.now(),
                        id: Se(),
                        runId: l
                    };
                    switch (d.type) {
                        case W.RUN_START:
                            yield {
                                ...d, ...e
                            };
                            break;
                        case W.OUTPUT:
                            yield {
                                ...d, ...e
                            };
                            break;
                        case W.ERROR:
                            x.count(T.WEB_SANDBOX, `${n}.error`), yield {
                                ...d,
                                ...e
                            };
                            break;
                        case W.ENVIRONMENT_STATUS:
                            d.status === U.RUNNING_CODE && (u = !0), D(d.status), m || A(d.status === U.RUNNING_CODE), yield {
                                ...d,
                                ...e
                            };
                            break;
                        case W.RUN_COMPLETE:
                            if (d.type === W.RUN_COMPLETE && d.wasFatalError && x.count(T.WEB_SANDBOX, `${n}.fatal_runtime_error`), yield {
                                    ...d,
                                    ...e
                                }, S.current?.runId === l) {
                                let e = n === `html` && u && d.wasFatalError === !0 && d.wasCancelled !== !0 && s?.() === !0;
                                H({
                                    preservePreview: e
                                })
                            }
                            break;
                        case W.LOG:
                            yield {
                                ...d, ...e
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
                await _e(() => y() != null), y()?.stop(), C.current && H()
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
            let Be = ae ? O && m ? {
                    type: `spring`,
                    bounce: 0,
                    delay: .12
                } : {
                    type: `spring`,
                    bounce: 0
                } : {
                    duration: 0
                },
                Ue = s ? `` : `midi`,
                We = (se || S.current?.language === `recharts` || S.current?.language === `threejs`) && !o && !m && !O,
                G = S.current?.language === `threejs`,
                K = pt({
                    useIntrinsicHeight: le,
                    intrinsicHeight: ge,
                    intrinsicHeightFallback: ue
                });
            return (0, $.jsxs)(a, {
                children: [(0, $.jsxs)(`div`, {
                    className: k(`relative flex`, o ? `fixed h-0 w-0` : `h-full w-full`),
                    style: K == null ? void 0 : {
                        height: K
                    },
                    children: [!o && E != null && m && (0, $.jsx)(Xe, {
                        isComplete: E === U.RUNNING_CODE,
                        onTransitionComplete: () => A(!0),
                        activeCheckpointId: E,
                        title: i,
                        checkpoints: xt
                    }), (0, $.jsx)(b.div, {
                        className: k(`absolute inset-0 m-auto origin-center overflow-hidden`, ce ? `bg-transparent` : `bg-token-main-surface-primary`, G && `corner-superellipse/1.1 rounded-3xl`, O ? `pointer-events-auto` : `pointer-events-none`),
                        animate: {
                            opacity: +!!O,
                            ...O ? {
                                scale: 1
                            } : {
                                scale: .95
                            }
                        },
                        transition: Be,
                        children: (0, $.jsx)(b.iframe, {
                            title: i,
                            className: `h-full w-full overflow-hidden`,
                            transition: Be,
                            "aria-hidden": o ? `true` : void 0,
                            allow: Ue,
                            src: _,
                            sandbox: ye,
                            ref: w,
                            tabIndex: g
                        }, `${_}:${fe}`)
                    }), We && (0, $.jsx)(`div`, {
                        "aria-live": `polite`,
                        className: `pointer-events-none absolute inset-0 z-10 h-full min-h-0 w-full bg-transparent`,
                        role: `status`,
                        children: (0, $.jsx)(`div`, {
                            className: `max-w-[70%] space-y-0.5`,
                            children: (0, $.jsx)(`p`, {
                                className: `loading-shimmer text-base font-medium select-none`,
                                children: me.formatMessage(_t.creatingVisualization)
                            })
                        })
                    }), O && (0, $.jsx)(ot, {
                        isIndeterminate: c,
                        isComplete: E === U.RUNNING_CODE,
                        activeCheckpointId: E,
                        checkpoints: xt
                    })]
                }), F.length > 0 && (0, $.jsx)(rt, {
                    title: i,
                    requests: F,
                    onConfirm: () => {
                        v(e => e + 1), D(null), A(!1), setTimeout(() => {
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
//# sourceMappingURL=4d271a7b-o0mxja3gckmk1ykl.js.map