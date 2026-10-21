import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    At as n,
    CN as r,
    P5 as i,
    X5 as a,
    Xy as o,
    Y5 as s,
    Zy as c,
    bN as l,
    cn as u,
    g8 as d,
    hn as f,
    i5 as p,
    nn as m,
    on as h,
    oq as g,
    r5 as ee,
    sq as _,
    vn as v
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    Bn as y,
    Ln as b,
    Rn as x,
    Vn as S,
    zn as C
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    HVt as w,
    Sgn as te,
    UVt as T,
    cUn as ne,
    lUn as E,
    mUn as D,
    pUn as re,
    wgn as O
} from "./conversation-small-nmt18uiom3b14vca.js";
import {
    Dg as k,
    Og as A,
    _y as ie,
    gy as j
} from "./30901919-niqyapppecmq5jkn.js";
import {
    At as M,
    U as N,
    W as P,
    kt as ae
} from "./82782bc9-g3liom11amtlr9kq.js";
import {
    c as oe,
    s as se
} from "./31cec8d8-ejzahhq8v425zkie.js";
import {
    n as F,
    t as ce
} from "./b4b33d24-j9462a6z33lycynx.js";
import {
    f as le,
    r as ue
} from "./bcae0416-n9zc39fxwv52vcjk.js";
import {
    _ as de,
    g as I,
    i as L,
    m as fe,
    o as pe,
    p as me,
    u as R
} from "./df59e297-j50c8ovzl1iye534.js";

function he(e) {
    let {
        doc: t,
        selection: n
    } = e, {
        $from: r,
        $to: i
    } = n, {
        pos: a
    } = r, {
        pos: o
    } = i, s = t.textBetween(a, o);
    try {
        return {
            sourceFrom: de(t, r),
            sourceTo: I(t, i),
            from: a,
            to: o,
            selectedText: s
        }
    } catch (e) {
        ne.logError(`Getting source selection`, e)
    }
    return {
        selectedText: s,
        from: a,
        to: o
    }
}
var z = e((() => {
        E(), fe()
    })),
    B, V = e((() => {
        B = {
            type: `spring`,
            bounce: .2,
            duration: .5
        }
    }));

function ge(e) {
    return e instanceof N
}

function _e(e) {
    return e instanceof ue
}
var H = e((() => {
    le(), P()
}));

function ve() {
    let e = pe(),
        t = me();
    return (0, U.useMemo)(() => () => e() ?? t(), [e, t])
}
var U, ye = e((() => {
    R(), L(), U = t(S())
}));

function be({
    accelerator: e,
    size: t,
    opacity: n,
    onClick: r,
    onSubmit: a,
    disableHeightAnimation: o = !1,
    disableLabel: c = !1,
    isCancelledScrubber: l = !1,
    isSmall: d = !1,
    isConfirming: f
}) {
    let {
        title: p,
        icon: m
    } = e, h = i(_), g = C();
    return (0, G.jsxs)(`div`, {
        className: `relative`,
        children: [!h && !c && (0, G.jsx)(u.div, {
            className: `text-token-text-secondary absolute end-full top-1/2 w-[160px] -translate-y-1/2 transform pe-4 text-end text-sm`,
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
                duration: .2
            },
            children: g.formatMessage(p)
        }), (0, G.jsx)(xe, {
            size: t,
            onClick: r,
            opacity: n,
            initialHeight: l || o ? `auto` : 0,
            initialScale: l ? .88 : .5,
            title: p,
            isSmall: d,
            isConfirming: f,
            onSubmit: a,
            icon: (0, G.jsx)(m, {
                className: s(`text-token-primary m-auto`, d ? `icon` : `icon-lg`)
            })
        })]
    })
}
var W, G, xe, K = e((() => {
    k(), c(), d(), g(), a(), n(), W = t(S()), x(), V(), G = y(), xe = ({
        title: e,
        icon: t,
        size: n,
        opacity: r,
        initialHeight: a = n,
        initialScale: c = 1,
        onClick: l,
        isConfirming: d,
        isSmall: f,
        onSubmit: p
    }) => {
        let m = C(),
            h = v(),
            [g, ee] = (0, W.useState)(!1),
            y = i(_),
            b = (0, G.jsx)(u.div, {
                initial: {
                    scale: c,
                    opacity: 0
                },
                animate: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                        type: `spring`,
                        bounce: .24,
                        duration: .52
                    }
                },
                exit: {
                    scale: .5,
                    opacity: 0,
                    transition: {
                        type: `spring`,
                        bounce: .24,
                        duration: .52,
                        opacity: {
                            duration: .1
                        }
                    }
                },
                whileHover: {
                    scale: 1.15
                },
                transition: B,
                children: (0, G.jsx)(u.div, {
                    className: `flex cursor-pointer items-start overflow-hidden`,
                    initial: {
                        width: n,
                        height: n
                    },
                    animate: {
                        width: n,
                        height: n
                    },
                    transition: B,
                    onMouseEnter: () => {
                        ee(!0)
                    },
                    onMouseLeave: () => {
                        ee(!1)
                    },
                    children: d ? (0, G.jsx)(u.button, {
                        className: `m-auto flex h-8 w-8 items-center justify-center rounded-full bg-black text-center dark:bg-white`,
                        initial: {
                            opacity: 0,
                            scale: .64
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        exit: {
                            opacity: 0,
                            scale: .64
                        },
                        transition: {
                            type: `spring`,
                            duration: .32,
                            bounce: .14
                        },
                        onClick: p,
                        children: (0, G.jsx)(A, {
                            className: s(`animate-pulsing text-white dark:text-black`, f ? `icon` : `icon-lg`)
                        })
                    }) : t
                })
            });
        return (0, G.jsx)(u.div, {
            role: `button`,
            onClick: l,
            initial: {
                height: a
            },
            animate: {
                height: n,
                opacity: d ? 1 : r ?? .52
            },
            exit: {
                height: 0
            },
            whileHover: {
                opacity: 1
            },
            transition: B,
            children: y ? (0, G.jsx)(o, {
                open: h ? !!(d || g) : !1,
                label: m.formatMessage(e),
                side: `left`,
                contentClassName: `pointer-events-none`,
                children: b
            }) : b
        })
    }
}));

function Se({
    title: e,
    onSubmit: t,
    icon: n
}) {
    let r = C(),
        i = n;
    return (0, q.jsxs)(u.div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        onClick: t,
        className: `text-token-text-secondary hover:text-token-text-primary flex aspect-square w-20 max-w-20 min-w-20 cursor-pointer flex-col items-center rounded-2xl p-3 transition-colors hover:bg-gray-100/75 dark:hover:bg-gray-700`,
        children: [(0, q.jsx)(i, {
            className: `icon-2xl m-auto`
        }), (0, q.jsx)(`div`, {
            className: `line-clamp-1 w-16 max-w-16 overflow-hidden text-center text-xs`,
            children: r.formatMessage(e)
        })]
    })
}

function Ce({
    grid: e,
    onSubmit: t,
    title: n
}) {
    let r = C();
    return (0, q.jsxs)(`div`, {
        className: `flex h-full flex-col content-center gap-y-4 overflow-x-hidden px-3 py-4`,
        children: [(0, q.jsx)(`div`, {
            className: `text-token-primary mt-1 text-center font-medium`,
            children: n
        }), (0, q.jsx)(`div`, {
            className: `flex-auto`,
            children: (0, q.jsx)(`div`, {
                className: `grid grid-cols-2 gap-1`,
                children: e.map((n, i) => (0, q.jsx)(Se, {
                    title: n.title,
                    icon: n.icon,
                    onSubmit: n => {
                        let a = e[i];
                        `prompt` in a && t?.(n, r.formatMessage(a.prompt))
                    }
                }, i))
            })
        })]
    })
}
var q, we = e((() => {
    n(), x(), q = y()
}));

function Te({
    title: e,
    onClick: t,
    isConfirming: n,
    onSubmit: r,
    isAnyItemConfirmed: i
}) {
    let a = C();
    return (0, J.jsxs)(u.div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        onClick: t,
        className: s(`flex-item my-1 flex min-w-40 cursor-pointer items-center overflow-hidden rounded-2xl py-2 ps-4 pe-2 font-medium text-clip whitespace-nowrap transition-colors hover:bg-gray-100/75 dark:hover:bg-gray-700`, {
            "bg-gray-100/50 dark:bg-gray-700/50": n,
            "text-token-text-secondary hover:text-token-text-primary": !n && i
        }),
        children: [(0, J.jsx)(`div`, {
            className: `flex-auto`,
            children: a.formatMessage(e)
        }), (0, J.jsx)(u.button, {
            className: s(`ms-3 h-6 w-6 rounded-full bg-black text-center dark:bg-white`, {
                "pointer-events-none invisible": !n
            }),
            initial: {
                opacity: 0,
                scale: .64
            },
            animate: {
                opacity: +!!n,
                scale: n ? 1 : .64
            },
            transition: {
                type: `spring`,
                duration: .32,
                bounce: .14
            },
            onClick: r,
            children: (0, J.jsx)(A, {
                className: `icon-lg text-white dark:text-black`
            })
        })]
    })
}

function Ee({
    menu: e,
    onConfirm: t,
    onSubmit: n
}) {
    let [r, i] = (0, De.useState)(!1), a = C();
    return (0, J.jsx)(`div`, {
        className: `h-full flex-col content-center overflow-x-hidden px-3`,
        children: e.map((o, s) => (0, J.jsx)(Te, {
            title: o.title,
            isConfirming: r === s,
            isAnyItemConfirmed: r !== !1,
            onClick: () => {
                i(s), t?.()
            },
            onSubmit: t => {
                let r = e[s];
                `prompt` in r && n?.(t, a.formatMessage(r.prompt))
            }
        }, `menu-item-${o.title}`))
    })
}
var De, J, Oe = e((() => {
        k(), a(), n(), De = t(S()), x(), J = y()
    })),
    ke, Ae = e((() => {
        ke = e => `isCancel` in e && e.isCancel
    }));

function je(e, t, n) {
    return n === t ? 1 : w((e - t) / (n - t), 0, 1)
}

function Me({
    size: e,
    acceleratorScrubber: t,
    onConfirm: n,
    onCancel: r,
    onSubmit: i,
    onDragStart: a,
    isConfirming: c
}) {
    let {
        icon: l
    } = t, d = `scrub` in t ? t.scrub : [], f = e - 12, p = C(), g = (0, Y.useRef)(null), ee = (0, Y.useRef)(null), [_, v] = (0, Y.useState)(d ? Math.floor(d.length / 2) : 0), y = Math.round(_), b = (0, Y.useRef)(_), x = d ? p.formatMessage(d[y].title) : null, S = m(0);
    return h(S, `change`, e => {
        let t = je(e, -274 / 2 + f / 2, (Ne - 6) / 2 - f / 2) * (d ? d.length - 1 : 0);
        b.current = t, v(t)
    }), (0, X.jsx)(u.div, {
        ref: g,
        className: `start-items relative z-20 flex w-full`,
        style: {
            top: 6,
            height: Ne - 12
        },
        children: (0, X.jsx)(u.div, {
            drag: `y`,
            ref: ee,
            dragConstraints: g,
            dragMomentum: !1,
            dragElastic: 0,
            className: s(`border-token-border-default m-auto rounded-full border shadow-md transition-colors`, c ? `cursor-pointer bg-black dark:bg-white` : `bg-token-main-surface-primary cursor-grab`),
            style: {
                y: S,
                width: f,
                height: f
            },
            onDragStart: a,
            onDragEnd: () => {
                if (!d || ke(d[y]) || c) return r?.();
                d && n?.()
            },
            children: (0, X.jsx)(o, {
                open: !0,
                label: x,
                side: `right`,
                children: (0, X.jsx)(`div`, {
                    className: `flex h-full w-full items-center justify-center overflow-hidden`,
                    children: c ? (0, X.jsx)(A, {
                        onClick: e => {
                            e.preventDefault(), !(!d || !c || !(`prompt` in d[y])) && i?.(e, p.formatMessage(d[y].prompt))
                        },
                        className: `icon-xl animate-pulsing text-white dark:text-black`
                    }) : (0, X.jsx)(l, {
                        className: `text-token-primary icon-lg m-auto`
                    })
                })
            })
        })
    })
}
var Y, X, Ne, Pe = e((() => {
    Ae(), k(), c(), a(), T(), n(), Y = t(S()), x(), X = y(), Ne = 280
}));

function Fe({
    top: e
}) {
    return (0, Q.jsx)(u.div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        className: `absolute start-1/2 m-auto h-1 w-1 -translate-x-1/2 rounded-full bg-gray-300`,
        style: {
            top: e
        }
    })
}

function Ie({
    bottom: e = 20,
    right: t = 20,
    isEmbeddedInPromptArea: n = !1,
    disableHint: a = !1,
    disableOverlay: o = !1,
    onCancel: c,
    onExpandedChange: l,
    onSubmit: d,
    isRequestActive: p = !1,
    isVisuallyHidden: m = !1,
    actions: h
}) {
    let [g, v] = (0, Z.useState)(!1), [y, b] = (0, Z.useState)(!a && !p), [x, S] = (0, Z.useState)(!0), [w, T] = (0, Z.useState)(null), [E, D] = (0, Z.useState)(!1), [O, k] = (0, Z.useState)(!1), [A, j] = (0, Z.useState)(!1), [M, N] = (0, Z.useState)(null), [P, oe] = (0, Z.useState)(null), [F, le] = (0, Z.useState)(null), ue = !x, de = r(), I = n && !y, L = I ? Be : ze, fe = C(), pe = i(_), me = ve(), R = (0, Z.useRef)(null), z = p || g, V = p && !y && x;
    (0, Z.useEffect)(() => {
        y && !O && k(!0), l?.(y)
    }, [y, O]), (0, Z.useEffect)(() => {
        E && !z && !M && (R.current != null && clearTimeout(R.current), b(!0)), !E && !z && !M && (R.current != null && clearTimeout(R.current), R.current = window.setTimeout(() => {
            b(!1), T(null), j(!1)
        }, Re))
    }, [E, z, M, y]), (0, Z.useEffect)(() => {
        if (p) {
            T(null);
            return
        }
        v(!1), !O && !a && (k(!0), b(!0), R.current != null && clearTimeout(R.current), R.current = window.setTimeout(() => {
            b(!1), T(null), j(!1), k(!0)
        }, Re))
    }, [p, a, O]);
    let _e = e => {
            T(e)
        },
        H = (e, t, n) => {
            D(!1), v(!0), b(!1), T(null), j(!1), N(null), oe(null), le(null);
            let r = me(),
                i = (e, r) => {
                    ne.logButtonClick(re.ACCELERATOR, {
                        action: {
                            action: n.action,
                            id: n.id,
                            title: n.title
                        },
                        prompt: t,
                        sourceFrom: e,
                        sourceTo: r
                    })
                };
            if (r && ge(r)) {
                let {
                    state: a
                } = r, {
                    sourceFrom: o,
                    sourceTo: s
                } = he(a);
                if (i(o, s), o == null || s == null) {
                    d?.(e, null, t, n);
                    return
                }
                d?.(e, {
                    start: o,
                    end: s
                }, t, n);
                let c = a.tr.setSelection(ae.create(a.doc, a.selection.anchor));
                r.dispatch(c);
                return
            }
            i(), d?.(e, null, t, n)
        },
        U = h[0],
        ye = h.slice(1),
        W = !!M && h.find(({
            id: e
        }) => e === M),
        G = !!P && h.find(({
            id: e
        }) => e === P),
        K = !!F && h.find(({
            id: e
        }) => e === F),
        Se = (e, t) => {
            if (ue) return;
            if (!E) {
                D(!0);
                return
            }
            let {
                id: n
            } = t;
            if (`scrub` in t) return N(n);
            if (`menu` in t) return oe(n);
            if (`grid` in t) return le(n);
            _e(n)
        },
        q = (e, t) => {
            ue || `prompt` in t && H(e, fe.formatMessage(t.prompt), t)
        },
        we = ye.map(e => {
            if (!y) return null;
            let {
                id: t
            } = e;
            return (0, Q.jsx)(be, {
                accelerator: e,
                isConfirming: t === w,
                isCancelledScrubber: A,
                size: L,
                onClick: t => Se(t, e),
                onSubmit: t => q(t, e)
            }, t)
        }),
        Te = (0, Z.useRef)(null);
    (0, Z.useEffect)(() => {
        let {
            current: e
        } = Te;
        if (e) return ee(document, {
            mousedown: ({
                target: t
            }) => {
                t instanceof HTMLElement && !e.contains(t) && (b(!1), T(null), j(!1), D(!1), N(null), oe(null), le(null))
            }
        })
    }, [M, P, F]);
    let De = Math.round($ / L) * 2,
        J = [],
        Oe = 0;
    for (let e = 0; e < De - 1; e++) Oe += $ / De, J.push((0, Q.jsx)(Fe, {
        top: Oe
    }));
    let ke = (0, Q.jsx)(u.div, {
        ref: Te,
        initial: {
            opacity: 0,
            scale: .85,
            borderRadius: L / 2
        },
        exit: {
            opacity: 0,
            borderRadius: L / 2
        },
        className: s(`border-token-border-default absolute overflow-visible border transition-colors select-none`, se.accelerators, {
            "pointer-events-none": m,
            "bg-token-main-surface-primary shadow-xl": y && !M && !p,
            "bg-token-main-surface-primary shadow-lg": !y && !M && !p && !n,
            "bg-token-main-surface-primary border-transparent shadow-sm": !y && !M && !p && n,
            "bg-token-main-surface-secondary border-transparent": M && !p,
            "bg-token-main-surface-primary": p && !V,
            "bg-black! text-white!": !de && V,
            "bg-white! text-black!": de && V
        }),
        style: {
            right: t,
            bottom: e
        },
        animate: {
            scale: z || V || g ? .85 : 1,
            opacity: +!m,
            borderRadius: P && G && !z || F && K && !z ? Ve : L / 2
        },
        onHoverStart: () => {
            R.current != null && clearTimeout(R.current), D(!0)
        },
        onHoverEnd: () => D(!1),
        children: (0, Q.jsx)(f, {
            children: P && G && `menu` in G && !z ? (0, Q.jsx)(u.div, {
                initial: {
                    height: L,
                    width: L
                },
                transition: B,
                animate: {
                    height: $,
                    width: `auto`
                },
                exit: {
                    height: L,
                    width: L
                },
                children: (0, Q.jsx)(Ee, {
                    isConfirming: w === G.id,
                    onConfirm: () => _e(G.id),
                    onSubmit: (e, t) => H(e, t, G),
                    menu: G.menu
                })
            }) : F && K && `grid` in K && !z ? (0, Q.jsx)(u.div, {
                initial: {
                    height: L,
                    width: L
                },
                transition: B,
                animate: {
                    height: Le,
                    width: `auto`
                },
                exit: {
                    height: L,
                    width: L
                },
                children: (0, Q.jsx)(Ce, {
                    title: fe.formatMessage(K.title),
                    onSubmit: (e, t) => H(e, t, K),
                    grid: K.grid
                })
            }) : M && W && !z ? (0, Q.jsxs)(u.div, {
                initial: {
                    height: L,
                    width: L
                },
                transition: B,
                animate: {
                    height: $,
                    width: L
                },
                exit: {
                    height: L,
                    width: L
                },
                onClick: () => {
                    T(null)
                },
                children: [(0, Q.jsx)(Me, {
                    onDragStart: () => T(null),
                    isConfirming: w === W.id,
                    onConfirm: () => _e(W.id),
                    onSubmit: (e, t) => H(e, t, W),
                    onCancel: () => {
                        N(null), j(!0)
                    },
                    size: L,
                    acceleratorScrubber: W
                }), J]
            }) : (0, Q.jsxs)(u.div, {
                className: `flex flex-col`,
                initial: !n && {
                    height: L,
                    width: L
                },
                transition: B,
                animate: {
                    height: y ? L * h.length : L,
                    width: L
                },
                exit: {
                    height: L,
                    width: L
                },
                onAnimationComplete: () => S(!0),
                onAnimationStart: () => S(!1),
                children: [(0, Q.jsx)(f, {
                    children: we
                }), (0, Q.jsx)(`div`, {
                    className: `flex items-center`,
                    style: {
                        width: L,
                        height: L
                    },
                    children: z ? V ? (0, Q.jsx)(xe, {
                        title: He.cancel,
                        icon: (0, Q.jsx)(ie, {
                            className: s(`animate-pulsing m-auto shrink-0`, I ? `h-6 w-6` : `h-10 w-10`)
                        }),
                        isSmall: I,
                        opacity: 1,
                        size: L,
                        onClick: () => {
                            T(null), c?.()
                        }
                    }) : (0, Q.jsx)(te, {
                        size: 20,
                        className: `text-token-text-secondary m-auto`
                    }) : (0, Q.jsx)(be, {
                        disableHeightAnimation: n,
                        disableLabel: pe || !y,
                        isCancelledScrubber: A,
                        accelerator: U,
                        isConfirming: w === U.id,
                        opacity: y ? void 0 : 1,
                        isSmall: I,
                        size: L,
                        onSubmit: e => q(e, U),
                        onClick: e => Se(e, U)
                    })
                })]
            })
        })
    });
    return o || pe ? ke : (0, Q.jsxs)(Q.Fragment, {
        children: [y && (0, Q.jsx)(ce, {
            zIndexKey: `acceleratorsOverlay`,
            className: `bg-white/95 dark:bg-black/85`
        }), ke]
    })
}
var Z, Q, $, Le, Re, ze, Be, Ve, He, Ue = e((() => {
    D(), E(), F(), z(), V(), oe(), H(), ye(), O(), j(), d(), p(), g(), l(), a(), n(), M(), Z = t(S()), x(), K(), we(), Oe(), Pe(), Q = y(), $ = 280, Le = 235, Re = 1250, ze = 56, Be = 32, Ve = 28, He = b({
        cancel: {
            id: `Hov840`,
            defaultMessage: `Cancel`
        }
    })
}));
export {
    H as a, he as c, ve as i, z as l, Ue as n, _e as o, ye as r, ge as s, Ie as t
};
//# sourceMappingURL=2df5afbf-nb9ero6e5b5znwec.js.map