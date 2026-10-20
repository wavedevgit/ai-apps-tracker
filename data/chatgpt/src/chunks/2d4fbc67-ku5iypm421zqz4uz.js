import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    At as r,
    Fw as i,
    JT as a,
    Nw as o,
    Pot as s,
    Sw as c,
    Zet as l,
    bW as u,
    cW as d,
    cn as f,
    eY as p,
    fF as m,
    gtt as h,
    hn as g,
    iat as _,
    lW as v,
    nY as y,
    oat as b,
    pY as ee,
    qJ as te,
    qT as x,
    uF as S,
    uit as C,
    ww as w,
    yW as T
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as E,
    Ln as D,
    Nn as O,
    Rn as k,
    Vn as A,
    zn as j
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $Gt as M,
    QGt as N,
    SA as P,
    XGt as F,
    wA as ne
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    _l as I,
    mi as re,
    pi as ie,
    vl as ae
} from "./8b34dbc2-k1zgxrtsww83602u.js";
import {
    n as oe,
    t as se
} from "./af004db9-jdoi5p0ftep3sdlx.js";
import {
    a as ce,
    i as le,
    n as ue,
    r as L
} from "./9a292b8a-dc10q48c5m30b21c.js";

function de(e) {
    let t = s();
    (0, R.useEffect)(() => {
        M(e, t?.accessToken ?? null)
    }, [e, t?.accessToken])
}
var R, fe = e((() => {
        C(), R = n(A()), F()
    })),
    z, B, V, pe = e((() => {
        k(), a(), z = E(), B = ({
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
                }), (0, z.jsx)(x, {
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
                }), t || _.addError(e)
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
    b(), H = n(A())
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
            }), (0, W.jsx)(f.circle, {
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
        h(), oe(), d(), i(), w(), pe(), y(), b(), ce(), r(), U = n(A()), k(), ue(), P(), he(), W = E(), G = ({
            isOpen: e,
            onClose: t,
            onRetry: n,
            errorMessage: r
        }) => {
            let i = j(),
                a = i.formatMessage(q.connectionErrorDescription);
            return (0, W.jsx)(c, {
                testId: `modal-takeover-connection-error`,
                isOpen: e,
                onClose: t,
                icon: v,
                title: i.formatMessage(q.connectionErrorTitle),
                description: a,
                type: `warning`,
                rootClassName: `z-50`,
                onEscapeKeyDown: e => {
                    e.stopPropagation(), e.preventDefault()
                },
                shouldIgnoreClickOutside: !0,
                secondaryButton: (0, W.jsx)(o.Button, {
                    onClick: t,
                    title: i.formatMessage(q.okButton)
                }),
                primaryButton: (0, W.jsx)(o.Button, {
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
                [s, c] = (0, U.useState)(!0),
                [u, d] = (0, U.useState)(!1),
                [f, p] = (0, U.useState)(!1),
                [m, h] = (0, U.useState)(!1),
                [g, v] = (0, U.useState)(!1),
                [y, b] = (0, U.useState)(null),
                x = ee(e, e => te.findMessage(e, e => e.content.content_type === l.ComputerOutput)),
                S = x?.content.content_type === l.ComputerOutput ? x?.content.screenshot : void 0,
                C = ge(t, i),
                w = (0, U.useCallback)(e => {
                    _.addError(e), b(e.message), v(!0), d(!0)
                }, []),
                T = (0, U.useCallback)(async e => {
                    c(!0), d(!1);
                    try {
                        o.current && C && await L.init({
                            conversationId: t,
                            onError: w,
                            onStreaming: () => {
                                p(!0)
                            },
                            peerUrl: C,
                            startMode: le.CONTROL,
                            token: e,
                            videoElement: o.current
                        })
                    } catch (e) {
                        e instanceof Error ? (_.addError(e), b(e.message)) : (_.addError(Error(`Unknown error`)), b(`An unknown error occurred`)), v(!0), d(!0)
                    } finally {
                        c(!1)
                    }
                }, [w, t, C]);
            (0, U.useEffect)(() => {
                n && (r || T(n))
            }, [n, T, r]), (0, U.useEffect)(() => {
                let e = o.current;
                if (!e) return;
                let t = () => {
                    h(!0)
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
                    isOpen: g,
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
        w(), ve(), k(), J = E(), Y = ({
            clientThreadId: e,
            serverThreadId: t,
            token: n,
            isOpen: r,
            isResuming: i,
            vmId: a,
            onClose: o
        }) => (0, J.jsx)(c, {
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
        m(), I(), y(), b(), u(), r(), X = n(A()), fe(), ie(), F(), ye(), Z = E(), Q = ({
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
            } = ae(S(e)), s = p(e);
            return (0, Z.jsx)(g, {
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
            return (0, Z.jsx)(T, {
                ref: t,
                onError: (e, n) => {
                    N(), setTimeout(() => {
                        t.current?.resetErrorBoundary()
                    }), _.addError(e, {
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
//# sourceMappingURL=2d4fbc67-ku5iypm421zqz4uz.js.map