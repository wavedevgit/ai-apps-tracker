import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as r,
    At as i,
    Aw as a,
    Cat as o,
    Dit as s,
    GJ as c,
    Ow as l,
    QJ as u,
    Vw as d,
    Zot as f,
    _W as p,
    cn as m,
    dY as ee,
    eE as te,
    eY as h,
    gF as g,
    hn as _,
    ktt as v,
    oW as y,
    sW as b,
    utt as x,
    vF as S,
    vW as C,
    xat as w,
    zw as T
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    Bn as E,
    Ln as D,
    Nn as O,
    Rn as k,
    Vn as A,
    zn as j
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    DA as ne,
    JGt as M,
    KGt as N,
    TA as P,
    YGt as F
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    _l as I,
    mi as re,
    pi as ie,
    vl as ae
} from "./8b34dbc2-m4883pai3e8fx8q6.js";
import {
    n as oe,
    t as se
} from "./af004db9-opqchae2bgeq185w.js";
import {
    a as ce,
    i as le,
    n as ue,
    r as L
} from "./9a292b8a-0d1imxsvw1jaxgbb.js";

function de(e) {
    let t = f();
    (0, R.useEffect)(() => {
        F(e, t?.accessToken ?? null)
    }, [e, t?.accessToken])
}
var R, fe = e((() => {
        s(), R = n(A()), N()
    })),
    z, B, V, pe = e((() => {
        k(), te(), z = E(), B = ({
            handleEndControl: e,
            isConnecting: t
        }) => {
            let n = j(),
                i = V.controlModeTitle,
                a = t ? V.connectingDescription : V.controlModeDescription;
            return (0, z.jsxs)(`div`, {
                className: `border-token-border-default relative z-10 flex w-full items-center justify-between gap-3 border-t px-7 py-6`,
                style: {
                    boxShadow: `0px -2px 8px 0px rgba(0, 0, 0, 0.05)`
                },
                children: [(0, z.jsxs)(`div`, {
                    className: `flex flex-col`,
                    children: [(0, z.jsx)(`span`, {
                        className: `text-token-text-primary font-medium`,
                        children: n.formatMessage(i)
                    }), (0, z.jsx)(`span`, {
                        className: `text-token-text-secondary text-sm`,
                        children: n.formatMessage(a)
                    })]
                }), (0, z.jsx)(r, {
                    onClick: e,
                    color: `primary`,
                    children: n.formatMessage(V.endControlButton)
                })]
            })
        }, V = D({
            connectingDescription: {
                id: `takeoverControlPanel.connectingDescription`,
                defaultMessage: `Connecting…`
            },
            controlModeTitle: {
                id: `takeoverControlPanel.controlModeTitle`,
                defaultMessage: `You’re controlling the browser`
            },
            controlModeDescription: {
                id: `takeoverControlPanel.controlModeDescription`,
                defaultMessage: `ChatGPT won’t see or store anything you do while you’re here.`
            },
            endControlButton: {
                id: `vnc.endControlButton`,
                defaultMessage: `Finish controlling`
            }
        })
    }));

function me(e) {
    let [t, n] = (0, H.useState)({
        status: e ? `loading` : `error`,
        src: ``
    });
    return (0, H.useEffect)(() => {
        if (!e) {
            n({
                status: `error`,
                src: ``
            });
            return
        }
        let t = !1;
        return (async () => {
            n({
                status: `loading`,
                src: ``
            });
            try {
                await new Promise((t, n) => {
                    let r = new Image;
                    r.onload = () => t(), r.onerror = () => n(Error(`failed`)), r.src = e
                }), t || n({
                    status: `loaded`,
                    src: e
                })
            } catch (e) {
                t || n({
                    status: `error`,
                    src: ``
                }), t || w.addError(e)
            }
        })(), () => {
            t = !0
        }
    }, [e]), {
        status: t.status,
        src: t.src,
        isLoaded: t.status === `loaded`,
        isError: t.status === `error`
    }
}
var H, he = e((() => {
    o(), H = n(A())
}));

function ge(e, t) {
    return `https://realtime.chatgpt.com/v1/cua?cid=${e}`
}

function _e({
    size: e = 48,
    strokeWidth: t = 2,
    duration: n = 30,
    endPercent: r = .9
}) {
    let i = j(),
        a = (e - t) / 2,
        o = 2 * Math.PI * a,
        s = o,
        c = o,
        l = o * (1 - r);
    return (0, W.jsxs)(`div`, {
        className: `relative flex flex-col items-center justify-center gap-2`,
        role: `progressbar`,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": r * 100,
        "aria-label": i.formatMessage(q.restoringComputer),
        children: [(0, W.jsxs)(`svg`, {
            width: e,
            height: e,
            viewBox: `0 0 ${e} ${e}`,
            className: `rotate-[-90deg]`,
            children: [(0, W.jsx)(`circle`, {
                cx: e / 2,
                cy: e / 2,
                r: a,
                fill: `transparent`,
                strokeWidth: t,
                className: `text-[var(--sidebar-surface-secondary)]`,
                stroke: `currentColor`
            }), (0, W.jsx)(m.circle, {
                cx: e / 2,
                cy: e / 2,
                r: a,
                fill: `transparent`,
                strokeWidth: t,
                className: `text-[var(--main-surface-primary-inverse)]`,
                stroke: `currentColor`,
                strokeDasharray: s,
                strokeDashoffset: c,
                animate: {
                    strokeDashoffset: l
                },
                transition: {
                    duration: n,
                    ease: `linear`
                }
            })]
        }), (0, W.jsx)(`div`, {
            className: `absolute -bottom-8 flex items-center justify-center whitespace-nowrap`,
            children: i.formatMessage(q.restoringComputer)
        })]
    })
}
var U, W, G, K, q, ve = e((() => {
        v(), oe(), y(), d(), a(), pe(), h(), o(), ce(), i(), U = n(A()), k(), ue(), P(), he(), W = E(), G = ({
            isOpen: e,
            onClose: t,
            onRetry: n,
            errorMessage: r
        }) => {
            let i = j(),
                a = i.formatMessage(q.connectionErrorDescription);
            return (0, W.jsx)(l, {
                testId: `modal-takeover-connection-error`,
                isOpen: e,
                onClose: t,
                icon: b,
                title: i.formatMessage(q.connectionErrorTitle),
                description: a,
                type: `warning`,
                rootClassName: `z-50`,
                onEscapeKeyDown: e => {
                    e.stopPropagation(), e.preventDefault()
                },
                shouldIgnoreClickOutside: !0,
                secondaryButton: (0, W.jsx)(T.Button, {
                    onClick: t,
                    title: i.formatMessage(q.okButton)
                }),
                primaryButton: (0, W.jsx)(T.Button, {
                    onClick: n,
                    title: i.formatMessage(q.retryButton)
                })
            })
        }, K = ({
            clientThreadId: e,
            serverThreadId: t,
            token: n,
            isResuming: r,
            vmId: i,
            onClose: a
        }) => {
            let o = (0, U.useRef)(null),
                [s, l] = (0, U.useState)(!0),
                [u, d] = (0, U.useState)(!1),
                [f, p] = (0, U.useState)(!1),
                [m, te] = (0, U.useState)(!1),
                [h, g] = (0, U.useState)(!1),
                [_, v] = (0, U.useState)(null),
                y = ee(e, e => c.findMessage(e, e => e.content.content_type === x.ComputerOutput)),
                b = y?.content.content_type === x.ComputerOutput ? y?.content.screenshot : void 0,
                S = ge(t, i),
                C = (0, U.useCallback)(e => {
                    w.addError(e), v(e.message), g(!0), d(!0)
                }, []),
                T = (0, U.useCallback)(async e => {
                    l(!0), d(!1);
                    try {
                        o.current && S && await L.init({
                            conversationId: t,
                            onError: C,
                            onStreaming: () => {
                                p(!0)
                            },
                            peerUrl: S,
                            startMode: le.CONTROL,
                            token: e,
                            videoElement: o.current
                        })
                    } catch (e) {
                        e instanceof Error ? (w.addError(e), v(e.message)) : (w.addError(Error(`Unknown error`)), v(`An unknown error occurred`)), g(!0), d(!0)
                    } finally {
                        l(!1)
                    }
                }, [C, t, S]);
            (0, U.useEffect)(() => {
                n && (r || T(n))
            }, [n, T, r]), (0, U.useEffect)(() => {
                let e = o.current;
                if (!e) return;
                let t = () => {
                    te(!0)
                };
                return e.addEventListener(`playing`, t), () => {
                    e.removeEventListener(`playing`, t)
                }
            }, []), (0, U.useEffect)(() => {
                let e = e => {
                    e.preventDefault()
                };
                if (f) return window.addEventListener(`beforeunload`, e), () => window.removeEventListener(`beforeunload`, e)
            }, [f]);

            function E() {
                L.disconnect(), a({
                    startNewTurn: !0
                })
            }

            function D() {
                g(!1), v(null), n && T(n)
            }

            function O() {
                g(!1), v(null), a({
                    startNewTurn: !1
                })
            }
            let k = !u && !m && !r,
                {
                    isLoaded: A,
                    src: j
                } = me(ne(b, t)),
                M = `64px`,
                {
                    bar: N,
                    ratio: P,
                    vw: F,
                    vh: I
                } = {
                    bar: `93px`,
                    ratio: `4/3`,
                    vw: `calc(100vw - ${M} * 2)`,
                    vh: `calc(100dvh - ${M} * 2)`
                };
            return (0, W.jsxs)(`div`, {
                className: `flex h-full w-full flex-col items-center justify-center p-[${M}]`,
                children: [(0, W.jsxs)(`div`, {
                    className: `bg-token-bg-primary flex flex-col items-center justify-center overflow-hidden rounded-lg shadow-lg`,
                    style: {
                        width: `min(${F}, calc((${I} - ${N}) * ${P}))`
                    },
                    children: [(0, W.jsxs)(`div`, {
                        className: `group bg-token-bg-tertiary relative aspect-[4/3] w-full flex-shrink-0 overflow-hidden`,
                        children: [A && j && (0, W.jsx)(`img`, {
                            src: j,
                            alt: ``,
                            className: `absolute inset-0 h-full w-full opacity-20 blur`
                        }), (0, W.jsx)(`video`, {
                            ref: o,
                            className: `absolute inset-0 h-full w-full object-contain`,
                            autoPlay: !0,
                            playsInline: !0,
                            muted: !0
                        }), r && (0, W.jsx)(`div`, {
                            className: `absolute inset-0 flex items-center justify-center`,
                            children: (0, W.jsx)(_e, {
                                size: 36
                            })
                        }), k && (0, W.jsx)(`div`, {
                            className: `absolute inset-0 flex items-center justify-center`,
                            children: (0, W.jsx)(se, {
                                size: 36
                            })
                        })]
                    }), (0, W.jsx)(B, {
                        handleEndControl: E,
                        isConnecting: s
                    })]
                }), !1, (0, W.jsx)(G, {
                    isOpen: h,
                    onClose: O,
                    onRetry: D,
                    errorMessage: _
                })]
            })
        }, q = D({
            retryButton: {
                id: `vnc.retryButton`,
                defaultMessage: `Retry`
            },
            okButton: {
                id: `vnc.okButton`,
                defaultMessage: `OK`
            },
            connectionErrorTitle: {
                id: `vnc.connectionErrorTitle`,
                defaultMessage: `Could not connect to virtual browser`
            },
            connectionErrorDescription: {
                id: `vnc.connectionErrorDescription`,
                defaultMessage: `There was a problem connecting to the remote browser. Try again later.`
            },
            restoringComputer: {
                id: `vnc.restoringComputer`,
                defaultMessage: `Restoring computer...`
            }
        })
    })),
    J, Y, ye = e((() => {
        a(), ve(), k(), J = E(), Y = ({
            clientThreadId: e,
            serverThreadId: t,
            token: n,
            isOpen: r,
            isResuming: i,
            vmId: a,
            onClose: o
        }) => (0, J.jsx)(l, {
            testId: `modal-vnc-viewer-content`,
            type: `success`,
            size: `fullscreen`,
            isOpen: r,
            onClose: () => o({
                startNewTurn: !1
            }),
            title: (0, J.jsx)(O, {
                id: `vnc.message.contentModalTitle`,
                defaultMessage: `Virtual browser`
            }),
            shouldIgnoreClickOutside: !0,
            onEscapeKeyDown: e => {
                e.stopPropagation(), e.preventDefault()
            },
            visuallyHiddenHeader: !0,
            className: `bg-token-bg-primary/40! backdrop-blur-sm`,
            children: t && n && (0, J.jsx)(K, {
                clientThreadId: e,
                serverThreadId: t,
                token: n,
                isResuming: i,
                vmId: a,
                onClose: e => o(e)
            })
        })
    })),
    be = t({
        VNCFocusedViewManager: () => $
    }),
    X, Z, Q, $, xe = e((() => {
        S(), I(), h(), o(), C(), i(), X = n(A()), fe(), ie(), N(), ye(), Z = E(), Q = ({
            clientThreadId: e
        }) => {
            de(e);
            let {
                isOpen: t,
                token: n,
                isResuming: r,
                vmId: i,
                close: a
            } = re(), {
                selectedSources: o
            } = ae(g(e)), s = u(e);
            return (0, Z.jsx)(_, {
                children: t ? (0, Z.jsx)(Y, {
                    clientThreadId: e,
                    serverThreadId: s,
                    token: n,
                    isOpen: t,
                    isResuming: r,
                    vmId: i,
                    onClose: e => a(o, e)
                }) : null
            }, e)
        }, $ = e => {
            let t = (0, X.useRef)(null);
            return (0, Z.jsx)(p, {
                ref: t,
                onError: (e, n) => {
                    M(), setTimeout(() => {
                        t.current?.resetErrorBoundary()
                    }), w.addError(e, {
                        componentStack: n
                    })
                },
                name: `vnc-focused-view`,
                children: (0, Z.jsx)(Q, {
                    ...e
                })
            })
        }
    }));
export {
    xe as n, be as r, $ as t
};
//# sourceMappingURL=2d4fbc67-g2ewcv564davp6v2.js.map