import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $8 as n,
    At as r,
    Lnt as i,
    Qy as a,
    Zy as o,
    _F as s,
    cn as c,
    e5 as l,
    fJ as u,
    gJ as d,
    l7 as f,
    u7 as p,
    vF as m,
    znt as h
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    Bn as g,
    Ln as _,
    Nn as v,
    Rn as y,
    Vn as b
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Bmn as x,
    Lmn as S,
    cgn as C,
    sgn as w
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    hy as T,
    my as E
} from "./30901919-k5uqyx4vyplt9toa.js";
import {
    o as D
} from "./2ea88c7a-lxyla91xs6iv7odf.js";
import {
    t as O
} from "./8d846022-bvik3sltoydb2o43.js";
import {
    n as k,
    r as A
} from "./a4ef304b-jsook38kgo9pau05.js";
import {
    a as j,
    c as M
} from "./31cec8d8-ejzahhq8v425zkie.js";
import {
    t as N
} from "./4c0f1f8e-o4zbuwgknf8ay6gx.js";

function P(e) {
    return e.includes(`'react'`) || e.includes(`"react"`)
}

function F(e, t) {
    switch (e) {
        case S.CODE_HTML:
        case S.CODE_REACT:
            return !0;
        case S.CODE_JAVASCRIPT:
        case S.CODE_TYPESCRIPT:
            return P(t);
        default:
            return !1
    }
}

function I(e) {
    return n([S.CODE_PYTHON], e)
}

function L(e, t) {
    let n = k(e) ?? null;
    return (P(t) || e === S.CODE_REACT) && (n = `react`), n && D(n) ? n : null
}
var R = e((() => {
        l(), A(), x(), O()
    })),
    z, B = e((() => {
        d(), z = u({
            name: `play-sm-fill-light-16`,
            canvas: {
                width: 16,
                height: 16,
                viewBox: `0 0 16 16`,
                frame: {
                    x: 0,
                    y: 0,
                    width: 16,
                    height: 16
                },
                inkBounds: {
                    x: 5.058105,
                    y: 3.731934,
                    width: 7.038086,
                    height: 8.535645
                },
                visualBounds: {
                    x: 5.058105,
                    y: 3.731934,
                    width: 7.038086,
                    height: 8.535645
                }
            },
            paint: {
                kind: `monochrome`
            },
            optical: {
                shape: `non-circular`,
                bounds: {
                    x: 5.058105,
                    y: 3.731934,
                    width: 7.038086,
                    height: 8.535645
                },
                center: {
                    x: 8.577148,
                    y: 7.999757
                },
                insets: {
                    top: 3.731934,
                    right: 3.903809,
                    bottom: 3.732421,
                    left: 5.058105
                },
                anchors: {
                    frame: {
                        x: 8,
                        y: 8
                    },
                    ink: {
                        x: 8.577148,
                        y: 7.999757
                    },
                    foreground: {
                        x: 8.577148,
                        y: 7.999757
                    }
                }
            },
            capabilities: [`icon`],
            body: `<path d="M5.05811 4.68954C5.05869 3.97963 5.79615 3.53383 6.4126 3.81942L6.53369 3.88681L11.6587 7.19638C12.2422 7.57321 12.242 8.42688 11.6587 8.8038L6.53369 12.1134C5.8972 12.5241 5.05821 12.0672 5.05811 11.3097V4.68954Z" fill="currentColor"/>`
        })
    })),
    V, H = e((() => {
        d(), V = u({
            name: `play-sm-fill-light-20`,
            canvas: {
                width: 20,
                height: 20,
                viewBox: `0 0 20 20`,
                frame: {
                    x: 0,
                    y: 0,
                    width: 20,
                    height: 20
                },
                inkBounds: {
                    x: 6.327148,
                    y: 4.669922,
                    width: 8.78894,
                    height: 10.661133
                },
                visualBounds: {
                    x: 6.327148,
                    y: 4.669922,
                    width: 8.78894,
                    height: 10.661133
                }
            },
            paint: {
                kind: `monochrome`
            },
            optical: {
                shape: `non-circular`,
                bounds: {
                    x: 6.327148,
                    y: 4.669922,
                    width: 8.78894,
                    height: 10.661133
                },
                center: {
                    x: 10.721618,
                    y: 10.000489
                },
                insets: {
                    top: 4.669922,
                    right: 4.883912,
                    bottom: 4.668945,
                    left: 6.327148
                },
                anchors: {
                    frame: {
                        x: 10,
                        y: 10
                    },
                    ink: {
                        x: 10.721618,
                        y: 10.000489
                    },
                    foreground: {
                        x: 10.721618,
                        y: 10.000489
                    }
                }
            },
            capabilities: [`icon`],
            body: `<path d="M6.32715 5.8633C6.32717 4.9197 7.37234 4.35054 8.16504 4.86232L14.5713 9.00001C15.2977 9.46938 15.2978 10.5317 14.5713 11.001L8.16504 15.1387C7.3724 15.6503 6.32728 15.0812 6.32715 14.1377V5.8633Z" fill="currentColor"/>`
        })
    })),
    U, W, G = e((() => {
        w(), B(), H(), U = C({
            id: `canvas-play`,
            icons: {
                play: {
                    normal: V,
                    small: z
                }
            }
        }), W = U.Play
    }));

function K({
    isDisabled: e = !1,
    isCodePreviewable: t = !1,
    isCodeRunning: n,
    disabledTooltip: r,
    conversation: a,
    onClick: l
}) {
    let [u, d] = (0, q.useState)(n), [{
        width: p
    }, m] = (0, J.default)();
    (0, q.useEffect)(() => {
        let e = null;
        return !n || t ? d(n) : (e = setTimeout(() => {
            d(n)
        }, 200), () => clearTimeout(e))
    }, [n, t]);
    let h = () => ({
            conversation_id: a ? s(a) : void 0
        }),
        g = (0, Y.jsx)(c.button, {
            disabled: e || n && !u,
            onClick: () => {
                i.logEventWithStatsig(`Canvas Run Code Button Clicked`, `chatgpt_canvas_run_code_button_clicked`, h()), setTimeout(() => l?.())
            },
            className: f(`btn btn-primary ms-1 rounded-full sm:min-w-28`, u ? f(j, `border-transparent`) : `hover:bg-opacity-90`),
            animate: {
                width: p ?? 0
            },
            initial: {
                width: p ?? 0
            },
            transition: {
                type: `spring`,
                bounce: .24,
                duration: .4
            },
            children: (0, Y.jsx)(`div`, {
                ref: m,
                children: u ? (0, Y.jsxs)(c.div, {
                    className: `flex items-center gap-1.5 ps-1 pe-1 sm:ps-2 sm:pe-2`,
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: .3
                    },
                    children: [(0, Y.jsx)(T, {
                        className: `icon`
                    }), (0, Y.jsx)(`span`, {
                        className: `hidden sm:inline`,
                        children: (0, Y.jsx)(v, {
                            ...X.stopCode
                        })
                    })]
                }) : (0, Y.jsxs)(c.div, {
                    className: `flex items-center gap-1.5 ps-1 pe-1 sm:ps-2 sm:pe-2`,
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: .3
                    },
                    children: [(0, Y.jsx)(W, {
                        className: `icon`
                    }), (0, Y.jsx)(`span`, {
                        className: `hidden whitespace-nowrap sm:inline`,
                        children: (0, Y.jsx)(v, {
                            ...t ? X.previewCode : X.runCode
                        })
                    })]
                })
            })
        }),
        _ = e && r ? r : n ? null : (0, Y.jsx)(v, {
            ...t ? X.previewCodeTooltip : X.runCodeTooltip
        });
    return _ ? (0, Y.jsx)(o, {
        label: _,
        children: g
    }) : g
}
var q, J, Y, X, Z = e((() => {
    G(), M(), m(), E(), a(), h(), p(), r(), q = t(b()), y(), J = t(N()), Y = g(), X = _({
        previewCode: {
            id: `M1TBxe`,
            defaultMessage: `Preview`
        },
        runCode: {
            id: `LiKr5n`,
            defaultMessage: `Run code`
        },
        stopCode: {
            id: `nCwG4+`,
            defaultMessage: `Stop`
        },
        runCodeTooltip: {
            id: `UeNB/S`,
            defaultMessage: `See output and debug`
        },
        previewCodeTooltip: {
            id: `/qJKMH`,
            defaultMessage: `Preview in canvas`
        }
    })
}));
export {
    G as a, I as c, W as i, F as l, Z as n, L as o, X as r, R as s, K as t
};
//# sourceMappingURL=cc445a0e-pdmzxmdzvdcfzbvv.js.map