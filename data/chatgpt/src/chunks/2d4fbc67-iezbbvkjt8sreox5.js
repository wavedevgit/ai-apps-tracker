import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as r,
    At as i,
    Aw as a,
    GJ as o,
    Lit as s,
    Nat as c,
    Ow as l,
    QJ as u,
    Vw as d,
    Zet as f,
    _W as p,
    cn as m,
    dY as ee,
    eE as h,
    eY as g,
    gF as _,
    gtt as v,
    hn as y,
    jat as b,
    oW as x,
    sW as S,
    sst as C,
    vF as w,
    vW as T,
    zw as E
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as D,
    Ln as O,
    Nn as k,
    Rn as A,
    Vn as j,
    zn as M
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    EA as N,
    GGt as P,
    HGt as F,
    OA as te,
    WGt as I
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    mi as L,
    pi as ne,
    vl as re,
    yl as ie
} from "./8b34dbc2-lmwubajnld74ksfm.js";
import {
    n as ae,
    t as oe
} from "./af004db9-ncue41w0x271s8a6.js";
import {
    a as se,
    i as ce,
    n as le,
    r as R
} from "./9a292b8a-b2btosesikhribqo.js";

function ue(e) {
    let t = C();
    (0, z.useEffect)(() => {
        P(e, t?.accessToken ?? null)
    }, [e, t?.accessToken])
}
var z, de = e((() => {
        s(), z = n(j()), F()
    })),
    B, fe, V, pe = e((() => {
        A(), h(), B = D(), fe = ({
            handleEndControl: e,
            isConnecting: t
        }) => {
            let n = M(),
                i = V.controlModeTitle,
                a = t ? V.connectingDescription : V.controlModeDescription;
            return (0, B.jsxs)(`div`, {
                className: `border-token-border-default relative z-10 flex w-full items-center justify-between gap-3 border-t px-7 py-6`,
                style: {
                    boxShadow: `0px -2px 8px 0px rgba(0, 0, 0, 0.05)`
                },
                children: [(0, B.jsxs)(`div`, {
                    className: `flex flex-col`,
                    children: [(0, B.jsx)(`span`, {
                        className: `text-token-text-primary font-medium`,
                        children: n.formatMessage(i)
                    }), (0, B.jsx)(`span`, {
                        className: `text-token-text-secondary text-sm`,
                        children: n.formatMessage(a)
                    })]
                }), (0, B.jsx)(r, {
                    onClick: e,
                    color: `primary`,
                    children: n.formatMessage(V.endControlButton)
                })]
            })
        }, V = O({
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
                }), t || b.addError(e)
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
    c(), H = n(j())
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
    let i = M(),
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
        v(), ae(), x(), d(), a(), pe(), g(), c(), se(), i(), U = n(j()), A(), le(), N(), he(), W = D(), G = ({
            isOpen: e,
            onClose: t,
            onRetry: n,
            errorMessage: r
        }) => {
            let i = M(),
                a = i.formatMessage(q.connectionErrorDescription);
            return (0, W.jsx)(l, {
                testId: `modal-takeover-connection-error`,
                isOpen: e,
                onClose: t,
                icon: S,
                title: i.formatMessage(q.connectionErrorTitle),
                description: a,
                type: `warning`,
                rootClassName: `z-50`,
                onEscapeKeyDown: e => {
                    e.stopPropagation(), e.preventDefault()
                },
                shouldIgnoreClickOutside: !0,
                secondaryButton: (0, W.jsx)(E.Button, {
                    onClick: t,
                    title: i.formatMessage(q.okButton)
                }),
                primaryButton: (0, W.jsx)(E.Button, {
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
                [p, m] = (0, U.useState)(!1),
                [h, g] = (0, U.useState)(!1),
                [_, v] = (0, U.useState)(!1),
                [y, x] = (0, U.useState)(null),
                S = ee(e, e => o.findMessage(e, e => e.content.content_type === f.ComputerOutput)),
                C = S?.content.content_type === f.ComputerOutput ? S?.content.screenshot : void 0,
                w = ge(t, i),
                T = (0, U.useCallback)(e => {
                    b.addError(e), x(e.message), v(!0), d(!0)
                }, []),
                E = (0, U.useCallback)(async e => {
                    l(!0), d(!1);
                    try {
                        s.current && w && await R.init({
                            conversationId: t,
                            onError: T,
                            onStreaming: () => {
                                m(!0)
                            },
                            peerUrl: w,
                            startMode: ce.CONTROL,
                            token: e,
                            videoElement: s.current
                        })
                    } catch (e) {
                        e instanceof Error ? (b.addError(e), x(e.message)) : (b.addError(Error(`Unknown error`)), x(`An unknown error occurred`)), v(!0), d(!0)
                    } finally {
                        l(!1)
                    }
                }, [T, t, w]);
            (0, U.useEffect)(() => {
                n && (r || E(n))
            }, [n, E, r]), (0, U.useEffect)(() => {
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
                if (p) return window.addEventListener(`beforeunload`, e), () => window.removeEventListener(`beforeunload`, e)
            }, [p]);

            function D() {
                R.disconnect(), a({
                    startNewTurn: !0
                })
            }

            function O() {
                v(!1), x(null), n && E(n)
            }

            function k() {
                v(!1), x(null), a({
                    startNewTurn: !1
                })
            }
            let A = !u && !h && !r,
                {
                    isLoaded: j,
                    src: M
                } = me(te(C, t)),
                N = `64px`,
                {
                    bar: P,
                    ratio: F,
                    vw: I,
                    vh: L
                } = {
                    bar: `93px`,
                    ratio: `4/3`,
                    vw: `calc(100vw - ${N} * 2)`,
                    vh: `calc(100dvh - ${N} * 2)`
                };
            return (0, W.jsxs)(`div`, {
                className: `flex h-full w-full flex-col items-center justify-center p-[${N}]`,
                children: [(0, W.jsxs)(`div`, {
                    className: `bg-token-bg-primary flex flex-col items-center justify-center overflow-hidden rounded-lg shadow-lg`,
                    style: {
                        width: `min(${I}, calc((${L} - ${P}) * ${F}))`
                    },
                    children: [(0, W.jsxs)(`div`, {
                        className: `group bg-token-bg-tertiary relative aspect-[4/3] w-full flex-shrink-0 overflow-hidden`,
                        children: [j && M && (0, W.jsx)(`img`, {
                            src: M,
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
                        }), A && (0, W.jsx)(`div`, {
                            className: `absolute inset-0 flex items-center justify-center`,
                            children: (0, W.jsx)(oe, {
                                size: 36
                            })
                        })]
                    }), (0, W.jsx)(fe, {
                        handleEndControl: D,
                        isConnecting: c
                    })]
                }), !1, (0, W.jsx)(G, {
                    isOpen: _,
                    onClose: k,
                    onRetry: O,
                    errorMessage: y
                })]
            })
        }, q = O({
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
        a(), ve(), A(), J = D(), Y = ({
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
            title: (0, J.jsx)(k, {
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
        w(), re(), g(), c(), T(), i(), X = n(j()), de(), ne(), F(), ye(), Z = D(), Q = ({
            clientThreadId: e
        }) => {
            ue(e);
            let {
                isOpen: t,
                token: n,
                isResuming: r,
                vmId: i,
                close: a
            } = L(), {
                selectedSources: o
            } = ie(_(e)), s = u(e);
            return (0, Z.jsx)(y, {
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
                    I(), setTimeout(() => {
                        t.current?.resetErrorBoundary()
                    }), b.addError(e, {
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
//# sourceMappingURL=2d4fbc67-iezbbvkjt8sreox5.js.map