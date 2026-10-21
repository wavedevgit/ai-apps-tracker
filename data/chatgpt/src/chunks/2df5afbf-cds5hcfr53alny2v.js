import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    At as n,
    ON as r,
    Qy as i,
    TN as a,
    Zy as o,
    _5 as s,
    c7 as c,
    cn as l,
    g5 as u,
    hn as d,
    iq as f,
    k8 as p,
    l7 as m,
    nn as h,
    on as g,
    q5 as ee,
    rq as _,
    vn as te
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    Bn as v,
    Ln as y,
    Rn as b,
    Vn as x,
    zn as S
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    AUn as C,
    FVt as w,
    Fgn as ne,
    IVt as T,
    Lgn as E,
    TUn as D,
    kUn as re,
    wUn as ie
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    Dg as O,
    Og as k,
    _y as ae,
    gy as A
} from "./30901919-r9pahacmzqudnt4f.js";
import {
    At as j,
    U as M,
    W as N,
    kt as oe
} from "./82782bc9-dyzlhaxotei12n1t.js";
import {
    c as se,
    s as ce
} from "./31cec8d8-ejzahhq8v425zkie.js";
import {
    n as P,
    t as le
} from "./b4b33d24-bwywbuzet5qe5371.js";
import {
    f as ue,
    r as de
} from "./bcae0416-gjfzfseqa7tg5loj.js";
import {
    _ as fe,
    g as F,
    i as I,
    m as pe,
    o as me,
    p as he,
    u as L
} from "./df59e297-pb8jlylvdcnud02h.js";

function ge(e) {
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
            sourceFrom: fe(t, r),
            sourceTo: F(t, i),
            from: a,
            to: o,
            selectedText: s
        }
    } catch (e) {
        ie.logError(`Getting source selection`, e)
    }
    return {
        selectedText: s,
        from: a,
        to: o
    }
}
var R = e((() => {
        D(), pe()
    })),
    z, B = e((() => {
        z = {
            type: `spring`,
            bounce: .2,
            duration: .5
        }
    }));

function _e(e) {
    return e instanceof M
}

function V(e) {
    return e instanceof de
}
var H = e((() => {
    ue(), N()
}));

function ve() {
    let e = me(),
        t = he();
    return (0, U.useMemo)(() => () => e() ?? t(), [e, t])
}
var U, ye = e((() => {
    L(), I(), U = t(x())
}));

function be({
    accelerator: e,
    size: t,
    opacity: n,
    onClick: r,
    onSubmit: i,
    disableHeightAnimation: a = !1,
    disableLabel: o = !1,
    isCancelledScrubber: s = !1,
    isSmall: u = !1,
    isConfirming: d
}) {
    let {
        title: p,
        icon: m
    } = e, h = ee(f), g = S();
    return (0, G.jsxs)(`div`, {
        className: `relative`,
        children: [!h && !o && (0, G.jsx)(l.div, {
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
            initialHeight: s || a ? `auto` : 0,
            initialScale: s ? .88 : .5,
            title: p,
            isSmall: u,
            isConfirming: d,
            onSubmit: i,
            icon: (0, G.jsx)(m, {
                className: c(`text-token-primary m-auto`, u ? `icon` : `icon-lg`)
            })
        })]
    })
}
var W, G, xe, K = e((() => {
    O(), i(), p(), _(), m(), n(), W = t(x()), b(), B(), G = v(), xe = ({
        title: e,
        icon: t,
        size: n,
        opacity: r,
        initialHeight: i = n,
        initialScale: a = 1,
        onClick: s,
        isConfirming: u,
        isSmall: d,
        onSubmit: p
    }) => {
        let m = S(),
            h = te(),
            [g, _] = (0, W.useState)(!1),
            v = ee(f),
            y = (0, G.jsx)(l.div, {
                initial: {
                    scale: a,
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
                transition: z,
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
                    transition: z,
                    onMouseEnter: () => {
                        _(!0)
                    },
                    onMouseLeave: () => {
                        _(!1)
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
                        onClick: p,
                        children: (0, G.jsx)(k, {
                            className: c(`animate-pulsing text-white dark:text-black`, d ? `icon` : `icon-lg`)
                        })
                    }) : t
                })
            });
        return (0, G.jsx)(l.div, {
            role: `button`,
            onClick: s,
            initial: {
                height: i
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
            transition: z,
            children: v ? (0, G.jsx)(o, {
                open: h ? !!(u || g) : !1,
                label: m.formatMessage(e),
                side: `left`,
                contentClassName: `pointer-events-none`,
                children: y
            }) : y
        })
    }
}));

function Se({
    title: e,
    onSubmit: t,
    icon: n
}) {
    let r = S(),
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
    let r = S();
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
    n(), b(), q = v()
}));

function Te({
    title: e,
    onClick: t,
    isConfirming: n,
    onSubmit: r,
    isAnyItemConfirmed: i
}) {
    let a = S();
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
        className: c(`flex-item my-1 flex min-w-40 cursor-pointer items-center overflow-hidden rounded-2xl py-2 ps-4 pe-2 font-medium text-clip whitespace-nowrap transition-colors hover:bg-gray-100/75 dark:hover:bg-gray-700`, {
            "bg-gray-100/50 dark:bg-gray-700/50": n,
            "text-token-text-secondary hover:text-token-text-primary": !n && i
        }),
        children: [(0, J.jsx)(`div`, {
            className: `flex-auto`,
            children: a.formatMessage(e)
        }), (0, J.jsx)(l.button, {
            className: c(`ms-3 h-6 w-6 rounded-full bg-black text-center dark:bg-white`, {
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
            children: (0, J.jsx)(k, {
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
    let [r, i] = (0, De.useState)(!1), a = S();
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
        O(), m(), n(), De = t(x()), b(), J = v()
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
    isConfirming: s
}) {
    let {
        icon: u
    } = t, d = `scrub` in t ? t.scrub : [], f = e - 12, p = S(), m = (0, Y.useRef)(null), ee = (0, Y.useRef)(null), [_, te] = (0, Y.useState)(d ? Math.floor(d.length / 2) : 0), v = Math.round(_), y = (0, Y.useRef)(_), b = d ? p.formatMessage(d[v].title) : null, x = h(0);
    return g(x, `change`, e => {
        let t = je(e, -274 / 2 + f / 2, (Ne - 6) / 2 - f / 2) * (d ? d.length - 1 : 0);
        y.current = t, te(t)
    }), (0, X.jsx)(l.div, {
        ref: m,
        className: `start-items relative z-20 flex w-full`,
        style: {
            top: 6,
            height: Ne - 12
        },
        children: (0, X.jsx)(l.div, {
            drag: `y`,
            ref: ee,
            dragConstraints: m,
            dragMomentum: !1,
            dragElastic: 0,
            className: c(`border-token-border-default m-auto rounded-full border shadow-md transition-colors`, s ? `cursor-pointer bg-black dark:bg-white` : `bg-token-main-surface-primary cursor-grab`),
            style: {
                y: x,
                width: f,
                height: f
            },
            onDragStart: a,
            onDragEnd: () => {
                if (!d || ke(d[v]) || s) return r?.();
                d && n?.()
            },
            children: (0, X.jsx)(o, {
                open: !0,
                label: b,
                side: `right`,
                children: (0, X.jsx)(`div`, {
                    className: `flex h-full w-full items-center justify-center overflow-hidden`,
                    children: s ? (0, X.jsx)(k, {
                        onClick: e => {
                            e.preventDefault(), !(!d || !s || !(`prompt` in d[v])) && i?.(e, p.formatMessage(d[v].prompt))
                        },
                        className: `icon-xl animate-pulsing text-white dark:text-black`
                    }) : (0, X.jsx)(u, {
                        className: `text-token-primary icon-lg m-auto`
                    })
                })
            })
        })
    })
}
var Y, X, Ne, Pe = e((() => {
    Ae(), O(), i(), m(), T(), n(), Y = t(x()), b(), X = v(), Ne = 280
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
    disableHint: i = !1,
    disableOverlay: a = !1,
    onCancel: o,
    onExpandedChange: s,
    onSubmit: p,
    isRequestActive: m = !1,
    isVisuallyHidden: h = !1,
    actions: g
}) {
    let [_, te] = (0, Z.useState)(!1), [v, y] = (0, Z.useState)(!i && !m), [b, x] = (0, Z.useState)(!0), [C, w] = (0, Z.useState)(null), [T, E] = (0, Z.useState)(!1), [D, O] = (0, Z.useState)(!1), [k, A] = (0, Z.useState)(!1), [j, M] = (0, Z.useState)(null), [N, se] = (0, Z.useState)(null), [P, ue] = (0, Z.useState)(null), de = !b, fe = r(), F = n && !v, I = F ? Be : ze, pe = S(), me = ee(f), he = ve(), L = (0, Z.useRef)(null), R = m || _, B = m && !v && b;
    (0, Z.useEffect)(() => {
        v && !D && O(!0), s?.(v)
    }, [v, D]), (0, Z.useEffect)(() => {
        T && !R && !j && (L.current != null && clearTimeout(L.current), y(!0)), !T && !R && !j && (L.current != null && clearTimeout(L.current), L.current = window.setTimeout(() => {
            y(!1), w(null), A(!1)
        }, Re))
    }, [T, R, j, v]), (0, Z.useEffect)(() => {
        if (m) {
            w(null);
            return
        }
        te(!1), !D && !i && (O(!0), y(!0), L.current != null && clearTimeout(L.current), L.current = window.setTimeout(() => {
            y(!1), w(null), A(!1), O(!0)
        }, Re))
    }, [m, i, D]);
    let V = e => {
            w(e)
        },
        H = (e, t, n) => {
            E(!1), te(!0), y(!1), w(null), A(!1), M(null), se(null), ue(null);
            let r = he(),
                i = (e, r) => {
                    ie.logButtonClick(re.ACCELERATOR, {
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
            if (r && _e(r)) {
                let {
                    state: a
                } = r, {
                    sourceFrom: o,
                    sourceTo: s
                } = ge(a);
                if (i(o, s), o == null || s == null) {
                    p?.(e, null, t, n);
                    return
                }
                p?.(e, {
                    start: o,
                    end: s
                }, t, n);
                let c = a.tr.setSelection(oe.create(a.doc, a.selection.anchor));
                r.dispatch(c);
                return
            }
            i(), p?.(e, null, t, n)
        },
        U = g[0],
        ye = g.slice(1),
        W = !!j && g.find(({
            id: e
        }) => e === j),
        G = !!N && g.find(({
            id: e
        }) => e === N),
        K = !!P && g.find(({
            id: e
        }) => e === P),
        Se = (e, t) => {
            if (de) return;
            if (!T) {
                E(!0);
                return
            }
            let {
                id: n
            } = t;
            if (`scrub` in t) return M(n);
            if (`menu` in t) return se(n);
            if (`grid` in t) return ue(n);
            V(n)
        },
        q = (e, t) => {
            de || `prompt` in t && H(e, pe.formatMessage(t.prompt), t)
        },
        we = ye.map(e => {
            if (!v) return null;
            let {
                id: t
            } = e;
            return (0, Q.jsx)(be, {
                accelerator: e,
                isConfirming: t === C,
                isCancelledScrubber: k,
                size: I,
                onClick: t => Se(t, e),
                onSubmit: t => q(t, e)
            }, t)
        }),
        Te = (0, Z.useRef)(null);
    (0, Z.useEffect)(() => {
        let {
            current: e
        } = Te;
        if (e) return u(document, {
            mousedown: ({
                target: t
            }) => {
                t instanceof HTMLElement && !e.contains(t) && (y(!1), w(null), A(!1), E(!1), M(null), se(null), ue(null))
            }
        })
    }, [j, N, P]);
    let De = Math.round($ / I) * 2,
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
            borderRadius: I / 2
        },
        exit: {
            opacity: 0,
            borderRadius: I / 2
        },
        className: c(`border-token-border-default absolute overflow-visible border transition-colors select-none`, ce.accelerators, {
            "pointer-events-none": h,
            "bg-token-main-surface-primary shadow-xl": v && !j && !m,
            "bg-token-main-surface-primary shadow-lg": !v && !j && !m && !n,
            "bg-token-main-surface-primary border-transparent shadow-sm": !v && !j && !m && n,
            "bg-token-main-surface-secondary border-transparent": j && !m,
            "bg-token-main-surface-primary": m && !B,
            "bg-black! text-white!": !fe && B,
            "bg-white! text-black!": fe && B
        }),
        style: {
            right: t,
            bottom: e
        },
        animate: {
            scale: R || B || _ ? .85 : 1,
            opacity: +!h,
            borderRadius: N && G && !R || P && K && !R ? Ve : I / 2
        },
        onHoverStart: () => {
            L.current != null && clearTimeout(L.current), E(!0)
        },
        onHoverEnd: () => E(!1),
        children: (0, Q.jsx)(d, {
            children: N && G && `menu` in G && !R ? (0, Q.jsx)(l.div, {
                initial: {
                    height: I,
                    width: I
                },
                transition: z,
                animate: {
                    height: $,
                    width: `auto`
                },
                exit: {
                    height: I,
                    width: I
                },
                children: (0, Q.jsx)(Ee, {
                    isConfirming: C === G.id,
                    onConfirm: () => V(G.id),
                    onSubmit: (e, t) => H(e, t, G),
                    menu: G.menu
                })
            }) : P && K && `grid` in K && !R ? (0, Q.jsx)(l.div, {
                initial: {
                    height: I,
                    width: I
                },
                transition: z,
                animate: {
                    height: Le,
                    width: `auto`
                },
                exit: {
                    height: I,
                    width: I
                },
                children: (0, Q.jsx)(Ce, {
                    title: pe.formatMessage(K.title),
                    onSubmit: (e, t) => H(e, t, K),
                    grid: K.grid
                })
            }) : j && W && !R ? (0, Q.jsxs)(l.div, {
                initial: {
                    height: I,
                    width: I
                },
                transition: z,
                animate: {
                    height: $,
                    width: I
                },
                exit: {
                    height: I,
                    width: I
                },
                onClick: () => {
                    w(null)
                },
                children: [(0, Q.jsx)(Me, {
                    onDragStart: () => w(null),
                    isConfirming: C === W.id,
                    onConfirm: () => V(W.id),
                    onSubmit: (e, t) => H(e, t, W),
                    onCancel: () => {
                        M(null), A(!0)
                    },
                    size: I,
                    acceleratorScrubber: W
                }), J]
            }) : (0, Q.jsxs)(l.div, {
                className: `flex flex-col`,
                initial: !n && {
                    height: I,
                    width: I
                },
                transition: z,
                animate: {
                    height: v ? I * g.length : I,
                    width: I
                },
                exit: {
                    height: I,
                    width: I
                },
                onAnimationComplete: () => x(!0),
                onAnimationStart: () => x(!1),
                children: [(0, Q.jsx)(d, {
                    children: we
                }), (0, Q.jsx)(`div`, {
                    className: `flex items-center`,
                    style: {
                        width: I,
                        height: I
                    },
                    children: R ? B ? (0, Q.jsx)(xe, {
                        title: He.cancel,
                        icon: (0, Q.jsx)(ae, {
                            className: c(`animate-pulsing m-auto shrink-0`, F ? `h-6 w-6` : `h-10 w-10`)
                        }),
                        isSmall: F,
                        opacity: 1,
                        size: I,
                        onClick: () => {
                            w(null), o?.()
                        }
                    }) : (0, Q.jsx)(ne, {
                        size: 20,
                        className: `text-token-text-secondary m-auto`
                    }) : (0, Q.jsx)(be, {
                        disableHeightAnimation: n,
                        disableLabel: me || !v,
                        isCancelledScrubber: k,
                        accelerator: U,
                        isConfirming: C === U.id,
                        opacity: v ? void 0 : 1,
                        isSmall: F,
                        size: I,
                        onSubmit: e => q(e, U),
                        onClick: e => Se(e, U)
                    })
                })]
            })
        })
    });
    return a || me ? ke : (0, Q.jsxs)(Q.Fragment, {
        children: [v && (0, Q.jsx)(le, {
            zIndexKey: `acceleratorsOverlay`,
            className: `bg-white/95 dark:bg-black/85`
        }), ke]
    })
}
var Z, Q, $, Le, Re, ze, Be, Ve, He, Ue = e((() => {
    C(), D(), P(), R(), B(), se(), H(), ye(), E(), A(), p(), s(), _(), a(), m(), n(), j(), Z = t(x()), b(), K(), we(), Oe(), Pe(), Q = v(), $ = 280, Le = 235, Re = 1250, ze = 56, Be = 32, Ve = 28, He = y({
        cancel: {
            id: `Hov840`,
            defaultMessage: `Cancel`
        }
    })
}));
export {
    H as a, ge as c, ve as i, R as l, Ue as n, V as o, ye as r, _e as s, Ie as t
};
//# sourceMappingURL=2df5afbf-cds5hcfr53alny2v.js.map