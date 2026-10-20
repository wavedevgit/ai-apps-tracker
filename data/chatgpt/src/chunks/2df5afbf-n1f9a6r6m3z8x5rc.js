import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    At as n,
    J5 as r,
    M5 as i,
    SN as a,
    Xy as o,
    Yy as s,
    aq as c,
    cn as l,
    hn as u,
    m8 as d,
    n5 as f,
    nn as p,
    on as m,
    oq as h,
    q5 as g,
    t5 as ee,
    vn as _,
    yN as v
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Bn as y,
    Hn as b,
    Rn as x,
    Vn as S,
    zn as C
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    IVt as w,
    LVt as T,
    bgn as E,
    hUn as D,
    lUn as te,
    mUn as ne,
    uUn as O,
    vgn as re
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    Dg as k,
    Og as A,
    _y as ie,
    gy as j
} from "./30901919-jory365vq6ym5crx.js";
import {
    At as M,
    U as N,
    W as P,
    kt as ae
} from "./82782bc9-jj605vonxg0iyc7p.js";
import {
    c as oe,
    s as se
} from "./31cec8d8-ejzahhq8v425zkie.js";
import {
    n as F,
    t as ce
} from "./b4b33d24-gd0r1cmrommij9va.js";
import {
    f as le,
    r as ue
} from "./bcae0416-gpoh40wq8xybesjx.js";
import {
    _ as de,
    g as I,
    i as L,
    m as fe,
    o as pe,
    p as me,
    u as R
} from "./df59e297-hhsu9fndczbcvp55.js";

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
        te.logError(`Getting source selection`, e)
    }
    return {
        selectedText: s,
        from: a,
        to: o
    }
}
var z = e((() => {
        O(), fe()
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
    R(), L(), U = t(b())
}));

function be({
    accelerator: e,
    size: t,
    opacity: n,
    onClick: r,
    onSubmit: a,
    disableHeightAnimation: o = !1,
    disableLabel: s = !1,
    isCancelledScrubber: c = !1,
    isSmall: u = !1,
    isConfirming: d
}) {
    let {
        title: f,
        icon: p
    } = e, m = i(h), ee = y();
    return (0, G.jsxs)(`div`, {
        className: `relative`,
        children: [!m && !s && (0, G.jsx)(l.div, {
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
            children: ee.formatMessage(f)
        }), (0, G.jsx)(xe, {
            size: t,
            onClick: r,
            opacity: n,
            initialHeight: c || o ? `auto` : 0,
            initialScale: c ? .88 : .5,
            title: f,
            isSmall: u,
            isConfirming: d,
            onSubmit: a,
            icon: (0, G.jsx)(p, {
                className: g(`text-token-primary m-auto`, u ? `icon` : `icon-lg`)
            })
        })]
    })
}
var W, G, xe, K = e((() => {
    k(), o(), d(), c(), r(), n(), W = t(b()), C(), V(), G = S(), xe = ({
        title: e,
        icon: t,
        size: n,
        opacity: r,
        initialHeight: a = n,
        initialScale: o = 1,
        onClick: c,
        isConfirming: u,
        isSmall: d,
        onSubmit: f
    }) => {
        let p = y(),
            m = _(),
            [ee, v] = (0, W.useState)(!1),
            b = i(h),
            x = (0, G.jsx)(l.div, {
                initial: {
                    scale: o,
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
                children: (0, G.jsx)(l.div, {
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
                        v(!0)
                    },
                    onMouseLeave: () => {
                        v(!1)
                    },
                    children: u ? (0, G.jsx)(l.button, {
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
                        onClick: f,
                        children: (0, G.jsx)(A, {
                            className: g(`animate-pulsing text-white dark:text-black`, d ? `icon` : `icon-lg`)
                        })
                    }) : t
                })
            });
        return (0, G.jsx)(l.div, {
            role: `button`,
            onClick: c,
            initial: {
                height: a
            },
            animate: {
                height: n,
                opacity: u ? 1 : r ?? .52
            },
            exit: {
                height: 0
            },
            whileHover: {
                opacity: 1
            },
            transition: B,
            children: b ? (0, G.jsx)(s, {
                open: m ? !!(u || ee) : !1,
                label: p.formatMessage(e),
                side: `left`,
                contentClassName: `pointer-events-none`,
                children: x
            }) : x
        })
    }
}));

function Se({
    title: e,
    onSubmit: t,
    icon: n
}) {
    let r = y(),
        i = n;
    return (0, q.jsxs)(l.div, {
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
    let r = y();
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
    n(), C(), q = S()
}));

function Te({
    title: e,
    onClick: t,
    isConfirming: n,
    onSubmit: r,
    isAnyItemConfirmed: i
}) {
    let a = y();
    return (0, J.jsxs)(l.div, {
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
        className: g(`flex-item my-1 flex min-w-40 cursor-pointer items-center overflow-hidden rounded-2xl py-2 ps-4 pe-2 font-medium text-clip whitespace-nowrap transition-colors hover:bg-gray-100/75 dark:hover:bg-gray-700`, {
            "bg-gray-100/50 dark:bg-gray-700/50": n,
            "text-token-text-secondary hover:text-token-text-primary": !n && i
        }),
        children: [(0, J.jsx)(`div`, {
            className: `flex-auto`,
            children: a.formatMessage(e)
        }), (0, J.jsx)(l.button, {
            className: g(`ms-3 h-6 w-6 rounded-full bg-black text-center dark:bg-white`, {
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
    let [r, i] = (0, De.useState)(!1), a = y();
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
        k(), r(), n(), De = t(b()), C(), J = S()
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
    isConfirming: o
}) {
    let {
        icon: c
    } = t, u = `scrub` in t ? t.scrub : [], d = e - 12, f = y(), h = (0, Y.useRef)(null), ee = (0, Y.useRef)(null), [_, v] = (0, Y.useState)(u ? Math.floor(u.length / 2) : 0), b = Math.round(_), x = (0, Y.useRef)(_), S = u ? f.formatMessage(u[b].title) : null, C = p(0);
    return m(C, `change`, e => {
        let t = je(e, -274 / 2 + d / 2, (Ne - 6) / 2 - d / 2) * (u ? u.length - 1 : 0);
        x.current = t, v(t)
    }), (0, X.jsx)(l.div, {
        ref: h,
        className: `start-items relative z-20 flex w-full`,
        style: {
            top: 6,
            height: Ne - 12
        },
        children: (0, X.jsx)(l.div, {
            drag: `y`,
            ref: ee,
            dragConstraints: h,
            dragMomentum: !1,
            dragElastic: 0,
            className: g(`border-token-border-default m-auto rounded-full border shadow-md transition-colors`, o ? `cursor-pointer bg-black dark:bg-white` : `bg-token-main-surface-primary cursor-grab`),
            style: {
                y: C,
                width: d,
                height: d
            },
            onDragStart: a,
            onDragEnd: () => {
                if (!u || ke(u[b]) || o) return r?.();
                u && n?.()
            },
            children: (0, X.jsx)(s, {
                open: !0,
                label: S,
                side: `right`,
                children: (0, X.jsx)(`div`, {
                    className: `flex h-full w-full items-center justify-center overflow-hidden`,
                    children: o ? (0, X.jsx)(A, {
                        onClick: e => {
                            e.preventDefault(), !(!u || !o || !(`prompt` in u[b])) && i?.(e, f.formatMessage(u[b].prompt))
                        },
                        className: `icon-xl animate-pulsing text-white dark:text-black`
                    }) : (0, X.jsx)(c, {
                        className: `text-token-primary icon-lg m-auto`
                    })
                })
            })
        })
    })
}
var Y, X, Ne, Pe = e((() => {
    Ae(), k(), o(), r(), T(), n(), Y = t(b()), C(), X = S(), Ne = 280
}));

function Fe({
    top: e
}) {
    return (0, Q.jsx)(l.div, {
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
    disableHint: r = !1,
    disableOverlay: o = !1,
    onCancel: s,
    onExpandedChange: c,
    onSubmit: d,
    isRequestActive: f = !1,
    isVisuallyHidden: p = !1,
    actions: m
}) {
    let [_, v] = (0, Z.useState)(!1), [b, x] = (0, Z.useState)(!r && !f), [S, C] = (0, Z.useState)(!0), [w, T] = (0, Z.useState)(null), [E, D] = (0, Z.useState)(!1), [O, k] = (0, Z.useState)(!1), [A, j] = (0, Z.useState)(!1), [M, N] = (0, Z.useState)(null), [P, oe] = (0, Z.useState)(null), [F, le] = (0, Z.useState)(null), ue = !S, de = a(), I = n && !b, L = I ? Be : ze, fe = y(), pe = i(h), me = ve(), R = (0, Z.useRef)(null), z = f || _, V = f && !b && S;
    (0, Z.useEffect)(() => {
        b && !O && k(!0), c?.(b)
    }, [b, O]), (0, Z.useEffect)(() => {
        E && !z && !M && (R.current != null && clearTimeout(R.current), x(!0)), !E && !z && !M && (R.current != null && clearTimeout(R.current), R.current = window.setTimeout(() => {
            x(!1), T(null), j(!1)
        }, Re))
    }, [E, z, M, b]), (0, Z.useEffect)(() => {
        if (f) {
            T(null);
            return
        }
        v(!1), !O && !r && (k(!0), x(!0), R.current != null && clearTimeout(R.current), R.current = window.setTimeout(() => {
            x(!1), T(null), j(!1), k(!0)
        }, Re))
    }, [f, r, O]);
    let _e = e => {
            T(e)
        },
        H = (e, t, n) => {
            D(!1), v(!0), x(!1), T(null), j(!1), N(null), oe(null), le(null);
            let r = me(),
                i = (e, r) => {
                    te.logButtonClick(ne.ACCELERATOR, {
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
        U = m[0],
        ye = m.slice(1),
        W = !!M && m.find(({
            id: e
        }) => e === M),
        G = !!P && m.find(({
            id: e
        }) => e === P),
        K = !!F && m.find(({
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
            if (!b) return null;
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
                t instanceof HTMLElement && !e.contains(t) && (x(!1), T(null), j(!1), D(!1), N(null), oe(null), le(null))
            }
        })
    }, [M, P, F]);
    let De = Math.round($ / L) * 2,
        J = [],
        Oe = 0;
    for (let e = 0; e < De - 1; e++) Oe += $ / De, J.push((0, Q.jsx)(Fe, {
        top: Oe
    }));
    let ke = (0, Q.jsx)(l.div, {
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
        className: g(`border-token-border-default absolute overflow-visible border transition-colors select-none`, se.accelerators, {
            "pointer-events-none": p,
            "bg-token-main-surface-primary shadow-xl": b && !M && !f,
            "bg-token-main-surface-primary shadow-lg": !b && !M && !f && !n,
            "bg-token-main-surface-primary border-transparent shadow-sm": !b && !M && !f && n,
            "bg-token-main-surface-secondary border-transparent": M && !f,
            "bg-token-main-surface-primary": f && !V,
            "bg-black! text-white!": !de && V,
            "bg-white! text-black!": de && V
        }),
        style: {
            right: t,
            bottom: e
        },
        animate: {
            scale: z || V || _ ? .85 : 1,
            opacity: +!p,
            borderRadius: P && G && !z || F && K && !z ? Ve : L / 2
        },
        onHoverStart: () => {
            R.current != null && clearTimeout(R.current), D(!0)
        },
        onHoverEnd: () => D(!1),
        children: (0, Q.jsx)(u, {
            children: P && G && `menu` in G && !z ? (0, Q.jsx)(l.div, {
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
            }) : F && K && `grid` in K && !z ? (0, Q.jsx)(l.div, {
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
            }) : M && W && !z ? (0, Q.jsxs)(l.div, {
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
            }) : (0, Q.jsxs)(l.div, {
                className: `flex flex-col`,
                initial: !n && {
                    height: L,
                    width: L
                },
                transition: B,
                animate: {
                    height: b ? L * m.length : L,
                    width: L
                },
                exit: {
                    height: L,
                    width: L
                },
                onAnimationComplete: () => C(!0),
                onAnimationStart: () => C(!1),
                children: [(0, Q.jsx)(u, {
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
                            className: g(`animate-pulsing m-auto shrink-0`, I ? `h-6 w-6` : `h-10 w-10`)
                        }),
                        isSmall: I,
                        opacity: 1,
                        size: L,
                        onClick: () => {
                            T(null), s?.()
                        }
                    }) : (0, Q.jsx)(re, {
                        size: 20,
                        className: `text-token-text-secondary m-auto`
                    }) : (0, Q.jsx)(be, {
                        disableHeightAnimation: n,
                        disableLabel: pe || !b,
                        isCancelledScrubber: A,
                        accelerator: U,
                        isConfirming: w === U.id,
                        opacity: b ? void 0 : 1,
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
        children: [b && (0, Q.jsx)(ce, {
            zIndexKey: `acceleratorsOverlay`,
            className: `bg-white/95 dark:bg-black/85`
        }), ke]
    })
}
var Z, Q, $, Le, Re, ze, Be, Ve, He, Ue = e((() => {
    D(), O(), F(), z(), V(), oe(), H(), ye(), E(), j(), d(), f(), c(), v(), r(), n(), M(), Z = t(b()), C(), K(), we(), Oe(), Pe(), Q = S(), $ = 280, Le = 235, Re = 1250, ze = 56, Be = 32, Ve = 28, He = x({
        cancel: {
            id: `Hov840`,
            defaultMessage: `Cancel`
        }
    })
}));
export {
    H as a, he as c, ve as i, z as l, Ue as n, _e as o, ye as r, ge as s, Ie as t
};
//# sourceMappingURL=2df5afbf-n1f9a6r6m3z8x5rc.js.map