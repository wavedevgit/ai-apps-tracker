import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    At as n,
    Btt as r,
    Hq as i,
    Htt as a,
    JP as o,
    Kq as s,
    My as c,
    b5 as l,
    cn as u,
    jy as d,
    l8 as f,
    qP as p,
    u8 as m,
    y5 as h
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as g,
    Ln as _,
    Nn as v,
    Rn as y,
    Vn as b
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Kpn as x,
    Upn as S,
    dhn as C,
    fhn as w
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    by as T,
    yy as E
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    o as D
} from "./2ea88c7a-lxyla91xs6iv7odf.js";
import {
    t as O
} from "./8d846022-bvik3sltoydb2o43.js";
import {
    n as k,
    r as A
} from "./a4ef304b-mdfguhztje8zepfd.js";
import {
    a as j,
    c as M
} from "./31cec8d8-ejzahhq8v425zkie.js";
import {
    t as N
} from "./4c0f1f8e-go23ccluwcn7b4ji.js";

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
    return f([S.CODE_PYTHON], e)
}

function L(e, t) {
    let n = k(e) ?? null;
    return (P(t) || e === S.CODE_REACT) && (n = `react`), n && D(n) ? n : null
}
var R = e((() => {
        m(), A(), x(), O()
    })),
    z, B = e((() => {
        s(), z = i({
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
                    width: 7.038147,
                    height: 8.535889
                },
                visualBounds: {
                    x: 5.058105,
                    y: 3.731934,
                    width: 7.038147,
                    height: 8.535889
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
                    width: 7.038147,
                    height: 8.535889
                },
                center: {
                    x: 8.577179,
                    y: 7.999878
                },
                insets: {
                    top: 3.731934,
                    right: 3.903748,
                    bottom: 3.732177,
                    left: 5.058105
                },
                anchors: {
                    frame: {
                        x: 8,
                        y: 8
                    },
                    ink: {
                        x: 8.577179,
                        y: 7.999878
                    },
                    foreground: {
                        x: 8.577179,
                        y: 7.999878
                    }
                }
            },
            capabilities: [`icon`],
            body: `<path d="M5.05811 4.68948C5.05869 3.97957 5.79615 3.53377 6.4126 3.81936L6.53369 3.88675L11.6587 7.19632C12.2422 7.57315 12.242 8.42682 11.6587 8.80374L6.53369 12.1133C5.8972 12.524 5.05821 12.0672 5.05811 11.3096V4.68948Z" fill="currentColor"/>`
        })
    })),
    V, H = e((() => {
        s(), V = i({
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
                    width: 8.788967,
                    height: 10.661133
                },
                visualBounds: {
                    x: 6.327148,
                    y: 4.669922,
                    width: 8.788967,
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
                    width: 8.788967,
                    height: 10.661133
                },
                center: {
                    x: 10.721632,
                    y: 10.000489
                },
                insets: {
                    top: 4.669922,
                    right: 4.883885,
                    bottom: 4.668945,
                    left: 6.327148
                },
                anchors: {
                    frame: {
                        x: 10,
                        y: 10
                    },
                    ink: {
                        x: 10.721632,
                        y: 10.000489
                    },
                    foreground: {
                        x: 10.721632,
                        y: 10.000489
                    }
                }
            },
            capabilities: [`icon`],
            body: `<path d="M6.32715 5.8633C6.32717 4.9197 7.37234 4.35054 8.16504 4.86232L14.5713 9.00001C15.2977 9.46938 15.2978 10.5317 14.5713 11.001L8.16504 15.1387C7.3724 15.6503 6.32728 15.0812 6.32715 14.1377V5.8633Z" fill="currentColor"/>`
        })
    })),
    U, W, G = e((() => {
        C(), B(), H(), U = w({
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
    disabledTooltip: i,
    conversation: a,
    onClick: o
}) {
    let [s, c] = (0, q.useState)(n), [{
        width: l
    }, f] = (0, J.default)();
    (0, q.useEffect)(() => {
        let e = null;
        return !n || t ? c(n) : (e = setTimeout(() => {
            c(n)
        }, 200), () => clearTimeout(e))
    }, [n, t]);
    let m = () => ({
            conversation_id: a ? p(a) : void 0
        }),
        g = (0, Y.jsx)(u.button, {
            disabled: e || n && !s,
            onClick: () => {
                r.logEventWithStatsig(`Canvas Run Code Button Clicked`, `chatgpt_canvas_run_code_button_clicked`, m()), setTimeout(() => o?.())
            },
            className: h(`btn btn-primary ms-1 rounded-full sm:min-w-28`, s ? h(j, `border-transparent`) : `hover:bg-opacity-90`),
            animate: {
                width: l ?? 0
            },
            initial: {
                width: l ?? 0
            },
            transition: {
                type: `spring`,
                bounce: .24,
                duration: .4
            },
            children: (0, Y.jsx)(`div`, {
                ref: f,
                children: s ? (0, Y.jsxs)(u.div, {
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
                }) : (0, Y.jsxs)(u.div, {
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
        _ = e && i ? i : n ? null : (0, Y.jsx)(v, {
            ...t ? X.previewCodeTooltip : X.runCodeTooltip
        });
    return _ ? (0, Y.jsx)(d, {
        label: _,
        children: g
    }) : g
}
var q, J, Y, X, Z = e((() => {
    G(), M(), o(), E(), c(), a(), l(), n(), q = t(b()), y(), J = t(N()), Y = g(), X = _({
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
//# sourceMappingURL=cc445a0e-jju75u42jeqwnklg.js.map