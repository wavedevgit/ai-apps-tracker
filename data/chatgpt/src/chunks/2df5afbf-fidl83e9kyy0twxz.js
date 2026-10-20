import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    At as n,
    J5 as r,
    N5 as i,
    SN as a,
    Xy as o,
    Y5 as s,
    Zy as c,
    aq as l,
    cn as u,
    h8 as d,
    hn as f,
    n5 as p,
    nn as m,
    on as h,
    oq as g,
    r5 as _,
    vn as v,
    yN as y
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as b,
    Ln as x,
    Rn as S,
    Vn as C,
    zn as w
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    BVt as T,
    aUn as E,
    iUn as ee,
    lUn as te,
    uUn as D,
    xgn as O,
    ygn as ne,
    zVt as k
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    Dg as A,
    Og as j,
    _y as re,
    gy as M
} from "./30901919-7dzdc1ou0jtwkwpt.js";
import {
    At as N,
    U as P,
    W as F,
    kt as ie
} from "./82782bc9-mb60yg1xlggwvqri.js";
import {
    c as ae,
    s as oe
} from "./31cec8d8-ejzahhq8v425zkie.js";
import {
    n as I,
    t as se
} from "./b4b33d24-cwrvallq73uwsqng.js";
import {
    f as ce,
    r as le
} from "./bcae0416-jhuttfvj8pru009f.js";
import {
    _ as ue,
    g as L,
    i as R,
    m as de,
    o as fe,
    p as pe,
    u as z
} from "./df59e297-w0ht82ye6tsyroqp.js";

function me(e) {
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
            sourceFrom: ue(t, r),
            sourceTo: L(t, i),
            from: a,
            to: o,
            selectedText: s
        }
    } catch (e) {
        ee.logError(`Getting source selection`, e)
    }
    return {
        selectedText: s,
        from: a,
        to: o
    }
}
var B = e((() => {
        E(), de()
    })),
    V, H = e((() => {
        V = {
            type: `spring`,
            bounce: .2,
            duration: .5
        }
    }));

function he(e) {
    return e instanceof P
}

function ge(e) {
    return e instanceof le
}
var U = e((() => {
    ce(), F()
}));

function _e() {
    let e = fe(),
        t = pe();
    return (0, W.useMemo)(() => () => e() ?? t(), [e, t])
}
var W, ve = e((() => {
    z(), R(), W = t(C())
}));

function ye({
    accelerator: e,
    size: t,
    opacity: n,
    onClick: a,
    onSubmit: o,
    disableHeightAnimation: s = !1,
    disableLabel: c = !1,
    isCancelledScrubber: l = !1,
    isSmall: d = !1,
    isConfirming: f
}) {
    let {
        title: p,
        icon: m
    } = e, h = i(g), _ = w();
    return (0, K.jsxs)(`div`, {
        className: `relative`,
        children: [!h && !c && (0, K.jsx)(u.div, {
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
            children: _.formatMessage(p)
        }), (0, K.jsx)(be, {
            size: t,
            onClick: a,
            opacity: n,
            initialHeight: l || s ? `auto` : 0,
            initialScale: l ? .88 : .5,
            title: p,
            isSmall: d,
            isConfirming: f,
            onSubmit: o,
            icon: (0, K.jsx)(m, {
                className: r(`text-token-primary m-auto`, d ? `icon` : `icon-lg`)
            })
        })]
    })
}
var G, K, be, q = e((() => {
    A(), c(), d(), l(), s(), n(), G = t(C()), S(), H(), K = b(), be = ({
        title: e,
        icon: t,
        size: n,
        opacity: a,
        initialHeight: s = n,
        initialScale: c = 1,
        onClick: l,
        isConfirming: d,
        isSmall: f,
        onSubmit: p
    }) => {
        let m = w(),
            h = v(),
            [_, y] = (0, G.useState)(!1),
            b = i(g),
            x = (0, K.jsx)(u.div, {
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
                transition: V,
                children: (0, K.jsx)(u.div, {
                    className: `flex cursor-pointer items-start overflow-hidden`,
                    initial: {
                        width: n,
                        height: n
                    },
                    animate: {
                        width: n,
                        height: n
                    },
                    transition: V,
                    onMouseEnter: () => {
                        y(!0)
                    },
                    onMouseLeave: () => {
                        y(!1)
                    },
                    children: d ? (0, K.jsx)(u.button, {
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
                        children: (0, K.jsx)(j, {
                            className: r(`animate-pulsing text-white dark:text-black`, f ? `icon` : `icon-lg`)
                        })
                    }) : t
                })
            });
        return (0, K.jsx)(u.div, {
            role: `button`,
            onClick: l,
            initial: {
                height: s
            },
            animate: {
                height: n,
                opacity: d ? 1 : a ?? .52
            },
            exit: {
                height: 0
            },
            whileHover: {
                opacity: 1
            },
            transition: V,
            children: b ? (0, K.jsx)(o, {
                open: h ? !!(d || _) : !1,
                label: m.formatMessage(e),
                side: `left`,
                contentClassName: `pointer-events-none`,
                children: x
            }) : x
        })
    }
}));

function xe({
    title: e,
    onSubmit: t,
    icon: n
}) {
    let r = w(),
        i = n;
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
        className: `text-token-text-secondary hover:text-token-text-primary flex aspect-square w-20 max-w-20 min-w-20 cursor-pointer flex-col items-center rounded-2xl p-3 transition-colors hover:bg-gray-100/75 dark:hover:bg-gray-700`,
        children: [(0, J.jsx)(i, {
            className: `icon-2xl m-auto`
        }), (0, J.jsx)(`div`, {
            className: `line-clamp-1 w-16 max-w-16 overflow-hidden text-center text-xs`,
            children: r.formatMessage(e)
        })]
    })
}

function Se({
    grid: e,
    onSubmit: t,
    title: n
}) {
    let r = w();
    return (0, J.jsxs)(`div`, {
        className: `flex h-full flex-col content-center gap-y-4 overflow-x-hidden px-3 py-4`,
        children: [(0, J.jsx)(`div`, {
            className: `text-token-primary mt-1 text-center font-medium`,
            children: n
        }), (0, J.jsx)(`div`, {
            className: `flex-auto`,
            children: (0, J.jsx)(`div`, {
                className: `grid grid-cols-2 gap-1`,
                children: e.map((n, i) => (0, J.jsx)(xe, {
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
var J, Ce = e((() => {
    n(), S(), J = b()
}));

function we({
    title: e,
    onClick: t,
    isConfirming: n,
    onSubmit: i,
    isAnyItemConfirmed: a
}) {
    let o = w();
    return (0, Y.jsxs)(u.div, {
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
        className: r(`flex-item my-1 flex min-w-40 cursor-pointer items-center overflow-hidden rounded-2xl py-2 ps-4 pe-2 font-medium text-clip whitespace-nowrap transition-colors hover:bg-gray-100/75 dark:hover:bg-gray-700`, {
            "bg-gray-100/50 dark:bg-gray-700/50": n,
            "text-token-text-secondary hover:text-token-text-primary": !n && a
        }),
        children: [(0, Y.jsx)(`div`, {
            className: `flex-auto`,
            children: o.formatMessage(e)
        }), (0, Y.jsx)(u.button, {
            className: r(`ms-3 h-6 w-6 rounded-full bg-black text-center dark:bg-white`, {
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
            onClick: i,
            children: (0, Y.jsx)(j, {
                className: `icon-lg text-white dark:text-black`
            })
        })]
    })
}

function Te({
    menu: e,
    onConfirm: t,
    onSubmit: n
}) {
    let [r, i] = (0, Ee.useState)(!1), a = w();
    return (0, Y.jsx)(`div`, {
        className: `h-full flex-col content-center overflow-x-hidden px-3`,
        children: e.map((o, s) => (0, Y.jsx)(we, {
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
var Ee, Y, De = e((() => {
        A(), s(), n(), Ee = t(C()), S(), Y = b()
    })),
    Oe, ke = e((() => {
        Oe = e => `isCancel` in e && e.isCancel
    }));

function Ae(e, t, n) {
    return n === t ? 1 : k((e - t) / (n - t), 0, 1)
}

function je({
    size: e,
    acceleratorScrubber: t,
    onConfirm: n,
    onCancel: i,
    onSubmit: a,
    onDragStart: s,
    isConfirming: c
}) {
    let {
        icon: l
    } = t, d = `scrub` in t ? t.scrub : [], f = e - 12, p = w(), g = (0, Me.useRef)(null), _ = (0, Me.useRef)(null), [v, y] = (0, Me.useState)(d ? Math.floor(d.length / 2) : 0), b = Math.round(v), x = (0, Me.useRef)(v), S = d ? p.formatMessage(d[b].title) : null, C = m(0);
    return h(C, `change`, e => {
        let t = Ae(e, -274 / 2 + f / 2, (Ne - 6) / 2 - f / 2) * (d ? d.length - 1 : 0);
        x.current = t, y(t)
    }), (0, X.jsx)(u.div, {
        ref: g,
        className: `start-items relative z-20 flex w-full`,
        style: {
            top: 6,
            height: Ne - 12
        },
        children: (0, X.jsx)(u.div, {
            drag: `y`,
            ref: _,
            dragConstraints: g,
            dragMomentum: !1,
            dragElastic: 0,
            className: r(`border-token-border-default m-auto rounded-full border shadow-md transition-colors`, c ? `cursor-pointer bg-black dark:bg-white` : `bg-token-main-surface-primary cursor-grab`),
            style: {
                y: C,
                width: f,
                height: f
            },
            onDragStart: s,
            onDragEnd: () => {
                if (!d || Oe(d[b]) || c) return i?.();
                d && n?.()
            },
            children: (0, X.jsx)(o, {
                open: !0,
                label: S,
                side: `right`,
                children: (0, X.jsx)(`div`, {
                    className: `flex h-full w-full items-center justify-center overflow-hidden`,
                    children: c ? (0, X.jsx)(j, {
                        onClick: e => {
                            e.preventDefault(), !(!d || !c || !(`prompt` in d[b])) && a?.(e, p.formatMessage(d[b].prompt))
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
var Me, X, Ne, Pe = e((() => {
    ke(), A(), c(), s(), T(), n(), Me = t(C()), S(), X = b(), Ne = 280
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
    disableHint: o = !1,
    disableOverlay: s = !1,
    onCancel: c,
    onExpandedChange: l,
    onSubmit: d,
    isRequestActive: m = !1,
    isVisuallyHidden: h = !1,
    actions: _
}) {
    let [v, y] = (0, Z.useState)(!1), [b, x] = (0, Z.useState)(!o && !m), [S, C] = (0, Z.useState)(!0), [T, E] = (0, Z.useState)(null), [D, O] = (0, Z.useState)(!1), [k, A] = (0, Z.useState)(!1), [j, M] = (0, Z.useState)(!1), [N, P] = (0, Z.useState)(null), [F, ae] = (0, Z.useState)(null), [I, ce] = (0, Z.useState)(null), le = !S, ue = a(), L = n && !b, R = L ? Be : ze, de = w(), fe = i(g), pe = _e(), z = (0, Z.useRef)(null), B = m || v, H = m && !b && S;
    (0, Z.useEffect)(() => {
        b && !k && A(!0), l?.(b)
    }, [b, k]), (0, Z.useEffect)(() => {
        D && !B && !N && (z.current != null && clearTimeout(z.current), x(!0)), !D && !B && !N && (z.current != null && clearTimeout(z.current), z.current = window.setTimeout(() => {
            x(!1), E(null), M(!1)
        }, Re))
    }, [D, B, N, b]), (0, Z.useEffect)(() => {
        if (m) {
            E(null);
            return
        }
        y(!1), !k && !o && (A(!0), x(!0), z.current != null && clearTimeout(z.current), z.current = window.setTimeout(() => {
            x(!1), E(null), M(!1), A(!0)
        }, Re))
    }, [m, o, k]);
    let ge = e => {
            E(e)
        },
        U = (e, t, n) => {
            O(!1), y(!0), x(!1), E(null), M(!1), P(null), ae(null), ce(null);
            let r = pe(),
                i = (e, r) => {
                    ee.logButtonClick(te.ACCELERATOR, {
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
            if (r && he(r)) {
                let {
                    state: a
                } = r, {
                    sourceFrom: o,
                    sourceTo: s
                } = me(a);
                if (i(o, s), o == null || s == null) {
                    d?.(e, null, t, n);
                    return
                }
                d?.(e, {
                    start: o,
                    end: s
                }, t, n);
                let c = a.tr.setSelection(ie.create(a.doc, a.selection.anchor));
                r.dispatch(c);
                return
            }
            i(), d?.(e, null, t, n)
        },
        W = _[0],
        ve = _.slice(1),
        G = !!N && _.find(({
            id: e
        }) => e === N),
        K = !!F && _.find(({
            id: e
        }) => e === F),
        q = !!I && _.find(({
            id: e
        }) => e === I),
        xe = (e, t) => {
            if (le) return;
            if (!D) {
                O(!0);
                return
            }
            let {
                id: n
            } = t;
            if (`scrub` in t) return P(n);
            if (`menu` in t) return ae(n);
            if (`grid` in t) return ce(n);
            ge(n)
        },
        J = (e, t) => {
            le || `prompt` in t && U(e, de.formatMessage(t.prompt), t)
        },
        Ce = ve.map(e => {
            if (!b) return null;
            let {
                id: t
            } = e;
            return (0, Q.jsx)(ye, {
                accelerator: e,
                isConfirming: t === T,
                isCancelledScrubber: j,
                size: R,
                onClick: t => xe(t, e),
                onSubmit: t => J(t, e)
            }, t)
        }),
        we = (0, Z.useRef)(null);
    (0, Z.useEffect)(() => {
        let {
            current: e
        } = we;
        if (e) return p(document, {
            mousedown: ({
                target: t
            }) => {
                t instanceof HTMLElement && !e.contains(t) && (x(!1), E(null), M(!1), O(!1), P(null), ae(null), ce(null))
            }
        })
    }, [N, F, I]);
    let Ee = Math.round($ / R) * 2,
        Y = [],
        De = 0;
    for (let e = 0; e < Ee - 1; e++) De += $ / Ee, Y.push((0, Q.jsx)(Fe, {
        top: De
    }));
    let Oe = (0, Q.jsx)(u.div, {
        ref: we,
        initial: {
            opacity: 0,
            scale: .85,
            borderRadius: R / 2
        },
        exit: {
            opacity: 0,
            borderRadius: R / 2
        },
        className: r(`border-token-border-default absolute overflow-visible border transition-colors select-none`, oe.accelerators, {
            "pointer-events-none": h,
            "bg-token-main-surface-primary shadow-xl": b && !N && !m,
            "bg-token-main-surface-primary shadow-lg": !b && !N && !m && !n,
            "bg-token-main-surface-primary border-transparent shadow-sm": !b && !N && !m && n,
            "bg-token-main-surface-secondary border-transparent": N && !m,
            "bg-token-main-surface-primary": m && !H,
            "bg-black! text-white!": !ue && H,
            "bg-white! text-black!": ue && H
        }),
        style: {
            right: t,
            bottom: e
        },
        animate: {
            scale: B || H || v ? .85 : 1,
            opacity: +!h,
            borderRadius: F && K && !B || I && q && !B ? Ve : R / 2
        },
        onHoverStart: () => {
            z.current != null && clearTimeout(z.current), O(!0)
        },
        onHoverEnd: () => O(!1),
        children: (0, Q.jsx)(f, {
            children: F && K && `menu` in K && !B ? (0, Q.jsx)(u.div, {
                initial: {
                    height: R,
                    width: R
                },
                transition: V,
                animate: {
                    height: $,
                    width: `auto`
                },
                exit: {
                    height: R,
                    width: R
                },
                children: (0, Q.jsx)(Te, {
                    isConfirming: T === K.id,
                    onConfirm: () => ge(K.id),
                    onSubmit: (e, t) => U(e, t, K),
                    menu: K.menu
                })
            }) : I && q && `grid` in q && !B ? (0, Q.jsx)(u.div, {
                initial: {
                    height: R,
                    width: R
                },
                transition: V,
                animate: {
                    height: Le,
                    width: `auto`
                },
                exit: {
                    height: R,
                    width: R
                },
                children: (0, Q.jsx)(Se, {
                    title: de.formatMessage(q.title),
                    onSubmit: (e, t) => U(e, t, q),
                    grid: q.grid
                })
            }) : N && G && !B ? (0, Q.jsxs)(u.div, {
                initial: {
                    height: R,
                    width: R
                },
                transition: V,
                animate: {
                    height: $,
                    width: R
                },
                exit: {
                    height: R,
                    width: R
                },
                onClick: () => {
                    E(null)
                },
                children: [(0, Q.jsx)(je, {
                    onDragStart: () => E(null),
                    isConfirming: T === G.id,
                    onConfirm: () => ge(G.id),
                    onSubmit: (e, t) => U(e, t, G),
                    onCancel: () => {
                        P(null), M(!0)
                    },
                    size: R,
                    acceleratorScrubber: G
                }), Y]
            }) : (0, Q.jsxs)(u.div, {
                className: `flex flex-col`,
                initial: !n && {
                    height: R,
                    width: R
                },
                transition: V,
                animate: {
                    height: b ? R * _.length : R,
                    width: R
                },
                exit: {
                    height: R,
                    width: R
                },
                onAnimationComplete: () => C(!0),
                onAnimationStart: () => C(!1),
                children: [(0, Q.jsx)(f, {
                    children: Ce
                }), (0, Q.jsx)(`div`, {
                    className: `flex items-center`,
                    style: {
                        width: R,
                        height: R
                    },
                    children: B ? H ? (0, Q.jsx)(be, {
                        title: He.cancel,
                        icon: (0, Q.jsx)(re, {
                            className: r(`animate-pulsing m-auto shrink-0`, L ? `h-6 w-6` : `h-10 w-10`)
                        }),
                        isSmall: L,
                        opacity: 1,
                        size: R,
                        onClick: () => {
                            E(null), c?.()
                        }
                    }) : (0, Q.jsx)(ne, {
                        size: 20,
                        className: `text-token-text-secondary m-auto`
                    }) : (0, Q.jsx)(ye, {
                        disableHeightAnimation: n,
                        disableLabel: fe || !b,
                        isCancelledScrubber: j,
                        accelerator: W,
                        isConfirming: T === W.id,
                        opacity: b ? void 0 : 1,
                        isSmall: L,
                        size: R,
                        onSubmit: e => J(e, W),
                        onClick: e => xe(e, W)
                    })
                })]
            })
        })
    });
    return s || fe ? Oe : (0, Q.jsxs)(Q.Fragment, {
        children: [b && (0, Q.jsx)(se, {
            zIndexKey: `acceleratorsOverlay`,
            className: `bg-white/95 dark:bg-black/85`
        }), Oe]
    })
}
var Z, Q, $, Le, Re, ze, Be, Ve, He, Ue = e((() => {
    D(), E(), I(), B(), H(), ae(), U(), ve(), O(), M(), d(), _(), l(), y(), s(), n(), N(), Z = t(C()), S(), q(), Ce(), De(), Pe(), Q = b(), $ = 280, Le = 235, Re = 1250, ze = 56, Be = 32, Ve = 28, He = x({
        cancel: {
            id: `Hov840`,
            defaultMessage: `Cancel`
        }
    })
}));
export {
    U as a, me as c, _e as i, B as l, Ue as n, ge as o, ve as r, he as s, Ie as t
};
//# sourceMappingURL=2df5afbf-fidl83e9kyy0twxz.js.map