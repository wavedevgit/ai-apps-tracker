import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AJ as r,
    AT as i,
    At as a,
    Dit as o,
    IU as s,
    JP as c,
    JU as l,
    KP as u,
    LU as d,
    Nrt as f,
    OJ as p,
    VJ as ee,
    _w as m,
    bet as h,
    cn as g,
    hn as _,
    hw as v,
    iw as y,
    kT as b,
    kit as x,
    ow as S,
    qU as C,
    rot as w,
    xJ as te,
    zet as T
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as E,
    Ln as D,
    Nn as O,
    Rn as k,
    Vn as A,
    zn as j
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    KGt as M,
    SA as ne,
    WGt as N,
    bA as P,
    qGt as F
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    _l as I,
    mi as re,
    pi as ie,
    vl as ae
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    n as oe,
    t as se
} from "./af004db9-6w68dbz1fjui3k0e.js";
import {
    a as ce,
    i as le,
    n as ue,
    r as L
} from "./9a292b8a-j7ihzdbtqlmlc40t.js";

function de(e) {
    let t = w();
    (0, R.useEffect)(() => {
        F(e, t?.accessToken ?? null)
    }, [e, t?.accessToken])
}
var R, fe = e((() => {
        f(), R = n(A()), N()
    })),
    z, B, V, pe = e((() => {
        k(), i(), z = E(), B = ({
            handleEndControl: e,
            isConnecting: t
        }) => {
            let n = j(),
                r = V.controlModeTitle,
                i = t ? V.connectingDescription : V.controlModeDescription;
            return (0, z.jsxs)(`div`, {
                className: `border-token-border-default relative z-10 flex w-full items-center justify-between gap-3 border-t px-7 py-6`,
                style: {
                    boxShadow: `0px -2px 8px 0px rgba(0, 0, 0, 0.05)`
                },
                children: [(0, z.jsxs)(`div`, {
                    className: `flex flex-col`,
                    children: [(0, z.jsx)(`span`, {
                        className: `text-token-text-primary font-medium`,
                        children: n.formatMessage(r)
                    }), (0, z.jsx)(`span`, {
                        className: `text-token-text-secondary text-sm`,
                        children: n.formatMessage(i)
                    })]
                }), (0, z.jsx)(b, {
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
                }), t || o.addError(e)
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
    x(), H = n(A())
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
            }), (0, W.jsx)(g.circle, {
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
        T(), oe(), s(), m(), S(), pe(), r(), x(), ce(), a(), U = n(A()), k(), ue(), P(), he(), W = E(), G = ({
            isOpen: e,
            onClose: t,
            onRetry: n,
            errorMessage: r
        }) => {
            let i = j(),
                a = i.formatMessage(q.connectionErrorDescription);
            return (0, W.jsx)(y, {
                testId: `modal-takeover-connection-error`,
                isOpen: e,
                onClose: t,
                icon: d,
                title: i.formatMessage(q.connectionErrorTitle),
                description: a,
                type: `warning`,
                rootClassName: `z-50`,
                onEscapeKeyDown: e => {
                    e.stopPropagation(), e.preventDefault()
                },
                shouldIgnoreClickOutside: !0,
                secondaryButton: (0, W.jsx)(v.Button, {
                    onClick: t,
                    title: i.formatMessage(q.okButton)
                }),
                primaryButton: (0, W.jsx)(v.Button, {
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
            let s = (0, U.useRef)(null),
                [c, l] = (0, U.useState)(!0),
                [u, d] = (0, U.useState)(!1),
                [f, p] = (0, U.useState)(!1),
                [m, g] = (0, U.useState)(!1),
                [_, v] = (0, U.useState)(!1),
                [y, b] = (0, U.useState)(null),
                x = ee(e, e => te.findMessage(e, e => e.content.content_type === h.ComputerOutput)),
                S = x?.content.content_type === h.ComputerOutput ? x?.content.screenshot : void 0,
                C = ge(t, i),
                w = (0, U.useCallback)(e => {
                    o.addError(e), b(e.message), v(!0), d(!0)
                }, []),
                T = (0, U.useCallback)(async e => {
                    l(!0), d(!1);
                    try {
                        s.current && C && await L.init({
                            conversationId: t,
                            onError: w,
                            onStreaming: () => {
                                p(!0)
                            },
                            peerUrl: C,
                            startMode: le.CONTROL,
                            token: e,
                            videoElement: s.current
                        })
                    } catch (e) {
                        e instanceof Error ? (o.addError(e), b(e.message)) : (o.addError(Error(`Unknown error`)), b(`An unknown error occurred`)), v(!0), d(!0)
                    } finally {
                        l(!1)
                    }
                }, [w, t, C]);
            (0, U.useEffect)(() => {
                n && (r || T(n))
            }, [n, T, r]), (0, U.useEffect)(() => {
                let e = s.current;
                if (!e) return;
                let t = () => {
                    g(!0)
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
                v(!1), b(null), n && T(n)
            }

            function O() {
                v(!1), b(null), a({
                    startNewTurn: !1
                })
            }
            let k = !u && !m && !r,
                {
                    isLoaded: A,
                    src: j
                } = me(ne(S, t)),
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
                            ref: s,
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
                        isConnecting: c
                    })]
                }), !1, (0, W.jsx)(G, {
                    isOpen: _,
                    onClose: O,
                    onRetry: D,
                    errorMessage: y
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
        S(), ve(), k(), J = E(), Y = ({
            clientThreadId: e,
            serverThreadId: t,
            token: n,
            isOpen: r,
            isResuming: i,
            vmId: a,
            onClose: o
        }) => (0, J.jsx)(y, {
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
        c(), I(), r(), x(), l(), a(), X = n(A()), fe(), ie(), N(), ye(), Z = E(), Q = ({
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
            } = ae(u(e)), s = p(e);
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
            return (0, Z.jsx)(C, {
                ref: t,
                onError: (e, n) => {
                    M(), setTimeout(() => {
                        t.current?.resetErrorBoundary()
                    }), o.addError(e, {
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
//# sourceMappingURL=2d4fbc67-dajgm8a8ebbuw8q0.js.map