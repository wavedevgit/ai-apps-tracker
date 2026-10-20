import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $8 as n,
    At as r,
    BZ as i,
    CE as a,
    Dw as o,
    Ew as s,
    Gt as c,
    Hot as l,
    IN as u,
    J5 as d,
    JT as f,
    LN as p,
    M7 as m,
    Mh as h,
    Mz as g,
    N5 as _,
    Nz as v,
    Ow as y,
    P7 as b,
    R7 as x,
    R8 as S,
    RZ as C,
    Sw as w,
    Tc as T,
    Tw as E,
    Vot as ee,
    Xy as te,
    Y5 as D,
    Zy as O,
    aq as k,
    bP as A,
    cn as j,
    e1 as M,
    eQ as ne,
    fq as re,
    fx as ie,
    h8 as ae,
    hn as oe,
    jP as se,
    jh as ce,
    qT as N,
    t1 as le,
    wE as ue,
    wc as de,
    ww as fe,
    yx as pe,
    z8 as me
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as P,
    Ln as he,
    Nn as F,
    O as ge,
    Rn as I,
    Vn as L,
    kn as _e,
    s as ve,
    wn as ye,
    zn as be
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $8t as xe,
    DPn as Se,
    EPn as Ce,
    PHn as we,
    Z8t as Te,
    amn as R,
    dUn as Ee,
    e5t as De,
    efn as Oe,
    fUn as ke,
    r5t as Ae,
    sKn as je,
    smn as Me,
    t5t as Ne,
    tfn as Pe,
    umn as Fe
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    CC as Ie,
    Fx as Le,
    Ix as Re,
    Jy as ze,
    SC as Be,
    Yy as Ve,
    vv as He,
    yv as Ue
} from "./30901919-7dzdc1ou0jtwkwpt.js";
import {
    Am as We,
    km as Ge
} from "./8b34dbc2-k1zgxrtsww83602u.js";
import {
    n as Ke,
    r as z
} from "./2ea88c7a-lxyla91xs6iv7odf.js";
import {
    t as qe
} from "./8d846022-bvik3sltoydb2o43.js";
import {
    n as Je,
    t as Ye
} from "./c8f38d6c-f086204c30ywrrvg.js";
import {
    c as Xe,
    l as Ze,
    o as Qe,
    s as $e
} from "./cc445a0e-m1kzqcssvaixirdf.js";
import {
    i as et,
    r as tt
} from "./dced7e81-o26y44gdi7rsf4sp.js";
import {
    n as nt,
    t as rt
} from "./5422a199-ohc0ujx944q7esd3.js";
import {
    n as it,
    t as at
} from "./e1a66d2b-ji1c4uge7itb4rbv.js";
import {
    C as ot,
    E as st,
    S as ct,
    T as lt,
    b as ut
} from "./df59e297-w0ht82ye6tsyroqp.js";
import {
    a as dt,
    i as ft,
    o as pt,
    r as mt,
    t as ht
} from "./e74608d1-luisszm3x34qlhhj.js";
var gt, _t, vt, yt = e((() => {
        f(), v(), O(), D(), gt = P(), {
            Cross: _t
        } = g, vt = ({
            onClose: e,
            title: t,
            actions: n,
            showBorder: r = !1
        }) => (0, gt.jsxs)(`div`, {
            className: d(`bg-token-bg-primary flex items-center justify-between border-b py-2 ps-2 pe-2.5`, {
                "border-token-border-light": r,
                "border-transparent": !r
            }),
            children: [(0, gt.jsx)(`div`, {
                className: `text-token-text-primary flex items-center gap-2 ps-4 text-sm select-none`,
                children: t
            }), (0, gt.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [n.map(({
                    tooltip: e,
                    icon: t,
                    onClick: n
                }, r) => {
                    let i = (0, gt.jsx)(N, {
                        size: `small`,
                        color: `ghost`,
                        as: `button`,
                        className: `text-token-text-primary aspect-square p-1!`,
                        icon: t,
                        onClick: n
                    }, r);
                    return e ? (0, gt.jsx)(te, {
                        label: e,
                        children: i
                    }, r) : i
                }), (0, gt.jsx)(N, {
                    size: `small`,
                    color: `ghost`,
                    as: `button`,
                    className: `text-token-text-primary aspect-square p-1!`,
                    onClick: e,
                    icon: _t
                })]
            })]
        })
    })),
    bt, xt = e((() => {
        me(), qe(), bt = e => S([z.ERROR, z.LOG, z.OUTPUT], e.type)
    })),
    St, Ct, wt = e((() => {
        rt(), qe(), St = e => e.type === z.OUTPUT && Ct(e.output), Ct = e => nt(e)
    })),
    Tt, Et, Dt = e((() => {
        D(), r(), Tt = P(), Et = ({
            as: e = `li`,
            contentBefore: t,
            contentAfter: n,
            disableEntryAnimation: r = !1,
            hasHint: i = !1,
            bottomBorder: a = !1,
            isHintOpen: o = !1,
            isSticky: s = !1,
            onClick: c,
            children: l
        }) => {
            let u = !!c;
            return (0, Tt.jsxs)(e === `div` ? j.div : j.li, {
                initial: !r && {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    duration: .32
                },
                role: u ? `button` : void 0,
                className: d(`bg-token-bg-primary flex items-start justify-between py-1.5 ps-6 pe-4 font-mono text-sm whitespace-pre`, a && `border-token-border-xlight border-b`, s && `sticky top-0 z-10`, u && `cursor-pointer`, u && i && `hover:bg-red-500/10`, u && !i && `hover:bg-gray-50 dark:hover:bg-gray-700`, i && o && `bg-red-500/10`),
                onClick: u ? c : void 0,
                children: [t && (0, Tt.jsx)(`div`, {
                    className: `me-3 flex h-6 w-5 items-start`,
                    children: t
                }), (0, Tt.jsx)(`div`, {
                    className: `flex min-h-6 min-w-0 flex-1 items-start justify-start gap-2 leading-6`,
                    children: l
                }), n && (0, Tt.jsx)(`div`, {
                    className: `ms-3 flex min-h-6 items-start leading-6`,
                    children: n
                })]
            })
        }
    })),
    Ot, B, V, kt, At = e((() => {
        st(), ot(), Ve(), Ae(), r(), Ot = t(L()), I(), B = P(), V = function(e) {
            return e.LOADING = `loading`, e.READY = `ready`, e.RESOLVED = `resolved`, e
        }({}), kt = ({
            hint: e,
            onClickFix: t,
            isOpen: n,
            onOpenChange: r
        }) => {
            let i = (0, Ot.useRef)(null),
                a = be();
            return e ? (0, B.jsx)(`div`, {
                className: `relative flex items-center font-sans`,
                onClick: e => e.stopPropagation(),
                children: (0, B.jsxs)(De, {
                    open: n,
                    onOpenChange: r,
                    children: [(0, B.jsx)(Ne, {
                        asChild: !0,
                        ref: i,
                        children: e.status === `resolved` ? (0, B.jsx)(`div`, {
                            className: `flex h-5 w-5 items-center`,
                            children: (0, B.jsx)(ze, {
                                className: `text-token-text-tertiary`,
                                size: 16
                            })
                        }) : (0, B.jsx)(`button`, {
                            className: `h-5 w-5`,
                            disabled: e.status === `loading`,
                            children: e.status === `loading` ? (0, B.jsx)(lt, {}) : (0, B.jsx)(ut, {
                                position: `static`,
                                isError: !0,
                                count: 1,
                                offsetY: 0
                            })
                        })
                    }), (0, B.jsx)(oe, {
                        children: n && (0, B.jsx)(xe, {
                            forceMount: !0,
                            container: i.current?.ownerDocument.body,
                            children: (0, B.jsx)(Te, {
                                side: `top`,
                                align: `start`,
                                alignOffset: -4,
                                sideOffset: 10,
                                children: (0, B.jsx)(ct, {
                                    position: `static`,
                                    translateY: 0,
                                    right: 0,
                                    isFocused: !0,
                                    onDismiss: () => r?.(!1),
                                    onAccept: e => {
                                        r?.(!1), t?.(e)
                                    },
                                    comment: e,
                                    acceptButtonLabel: a.formatMessage({
                                        id: `Dl9vBh`,
                                        defaultMessage: `Fix bug`
                                    })
                                })
                            })
                        })
                    })]
                })
            }) : (0, B.jsx)(`div`, {
                className: `w-5`
            })
        }
    })),
    jt, Mt, Nt, Pt = e((() => {
        jt = P(), Mt = `module:`, Nt = ({
            log: e,
            isDisabled: t = !1,
            onClick: n
        }) => (0, jt.jsx)(`div`, {
            className: `flex items-center`,
            children: `line` in e && e.line != null && (0, jt.jsxs)(`button`, {
                onClick: () => e.line != null && n?.(e.line),
                className: `text-token-text-tertiary select-none enabled:hover:underline`,
                disabled: t,
                children: [Mt, e.line]
            })
        })
    })),
    Ft, H, It, Lt, Rt, zt, Bt, Vt, Ht = e((() => {
        me(), wt(), Dt(), At(), Je(), Pt(), qe(), D(), Ft = t(L()), I(), H = P(), It = ({
            isPreview: e = !1,
            log: t,
            level: n
        }) => (0, H.jsxs)(`span`, {
            className: d(`text-token-text-primary flex min-w-0 flex-wrap gap-1`, e ? `shrink truncate` : `whitespace-pre-wrap`, n === `warn` && `text-yellow-600`),
            children: [n === `warn` && `[warn]: `, typeof t == `string` ? t : t.map((t, n) => (0, H.jsx)(Ye, {
                isPreview: e,
                value: t
            }, n))]
        }), Lt = ({
            error: e,
            isPreview: t = !1,
            isResolved: n = !1
        }) => {
            let r = e.name + `:`;
            return (0, H.jsxs)(`span`, {
                className: d(`whitespace-pre-wrap`, n ? `text-token-text-primary` : `text-red-500`),
                children: [(0, H.jsx)(`span`, {
                    className: `font-semibold`,
                    children: r
                }), ` `, e.message, (0, H.jsx)(`div`, {
                    children: e.stack.length > 0 && !t ? e.stack.join(`
`) : ``
                })]
            })
        }, Rt = ({
            output: e,
            isPreview: t = !1
        }) => {
            let r = be();
            return e == null ? null : Ct(e) ? (0, H.jsx)(`img`, {
                alt: r.formatMessage(Vt.imgAlt),
                className: d(t && `border-token-border-xlight h-6 rounded-lg border`),
                src: e
            }) : (0, H.jsx)(`span`, {
                className: `flex items-center gap-2`,
                children: n(e)
            })
        }, zt = ({
            log: e,
            isHintResolved: t,
            isPreview: n = !1
        }) => {
            switch (e.type) {
                case z.LOG:
                    return (0, H.jsx)(It, {
                        isPreview: n,
                        ...e
                    });
                case z.ERROR:
                    return (0, H.jsx)(Lt, {
                        isPreview: n,
                        isResolved: t,
                        ...e
                    });
                case z.OUTPUT:
                    return (0, H.jsx)(Rt, {
                        isPreview: n,
                        ...e
                    });
                default:
                    return null
            }
        }, Bt = ({
            log: e,
            isStale: t = !1,
            onClickFix: n,
            onClickLineNumber: r,
            hint: i
        }) => {
            let [a, o] = (0, Ft.useState)(!1);
            if (e.type === z.RUN_COMPLETE) return null;
            let s = i?.status === V.RESOLVED;
            return (0, H.jsx)(Et, {
                hasHint: e.type === z.ERROR && i?.status === V.READY,
                isHintOpen: a,
                bottomBorder: !0,
                onClick: i && !s && (() => o(!0)),
                contentBefore: (0, H.jsx)(kt, {
                    hint: i,
                    isOpen: a,
                    onOpenChange: o,
                    onClickFix: t => e.type === z.ERROR && i && n?.(t, i.id, e.error)
                }),
                contentAfter: (0, H.jsx)(Nt, {
                    log: e,
                    isDisabled: t,
                    onClick: r
                }),
                children: (0, H.jsx)(zt, {
                    log: e,
                    isHintResolved: s
                })
            })
        }, Vt = he({
            imgAlt: {
                id: `L6t7Yb`,
                defaultMessage: `Plot`
            }
        })
    })),
    Ut, U, Wt, Gt, Kt = e((() => {
        it(), O(), Ut = t(L()), I(), U = P(), Wt = ({
            timestamp: e,
            duration: t
        }) => {
            let [, n] = (0, Ut.useState)(0);
            (0, Ut.useEffect)(() => {
                setInterval(() => {
                    n(e => e + 1)
                }, 5e3)
            }, []);
            let r = Math.round((Date.now() - e) / 1e3);
            return (0, U.jsx)(te, {
                label: (0, U.jsx)(F, {
                    id: `bFO21A`,
                    defaultMessage: `Code ran {count, plural, =0 {instantly} one {in # second} other {in # seconds}}`,
                    values: {
                        count: Math.floor(t / 1e3)
                    }
                }),
                children: (0, U.jsx)(`span`, {
                    className: `text-token-text-tertiary`,
                    children: r >= 60 ? (0, U.jsx)(_e, {
                        value: -r,
                        updateIntervalInSeconds: 60,
                        numeric: `auto`
                    }) : (0, U.jsx)(F, {
                        id: `bRCEFN`,
                        defaultMessage: `Just now`
                    })
                })
            })
        }, Gt = ({
            isComplete: e,
            timestamp: t,
            duration: n
        }) => e && t != null && n != null ? (0, U.jsx)(Wt, {
            timestamp: t,
            duration: n
        }) : e && n == null ? (0, U.jsx)(`span`, {
            className: `text-token-text-tertiary`,
            children: (0, U.jsx)(F, {
                id: `EMebM9`,
                defaultMessage: `Stopped`
            })
        }) : (0, U.jsx)(at, {
            gap: 2
        })
    })),
    qt, Jt, W, Yt, Xt, Zt, Qt, $t, en = e((() => {
        qt = ye(), xt(), wt(), Ht(), Dt(), At(), Pt(), Kt(), it(), Ie(), qe(), D(), M(), r(), Jt = t(L()), I(), W = P(), Yt = e => {
            switch (e) {
                case Ke.INITIALIZING:
                    return (0, W.jsx)(F, {
                        id: `J183Z0`,
                        defaultMessage: `initializing environment`
                    });
                case Ke.INSTALLING_PACKAGES:
                    return (0, W.jsx)(F, {
                        id: `21sQ8o`,
                        defaultMessage: `installing packages`
                    });
                case Ke.RUNNING_CODE:
                    return (0, W.jsx)(F, {
                        id: `nHITHk`,
                        defaultMessage: `running code`
                    })
            }
        }, Xt = e => {
            "use forget";
            let t = (0, qt.c)(6),
                {
                    message: n,
                    isComplete: r,
                    statusLogs: i
                } = e,
                a;
            if (t[0] !== r || t[1] !== n || t[2] !== i) {
                let e = le(i),
                    o;
                t[4] === n ? o = t[5] : (o = (0, W.jsx)(`span`, {
                    className: `text-token-text-secondary font-semibold`,
                    children: (0, W.jsx)(F, {
                        ...n
                    })
                }), t[4] = n, t[5] = o), a = (0, W.jsxs)(`span`, {
                    className: `flex items-center`,
                    children: [o, !r && e && (0, W.jsxs)(j.span, {
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
                            delay: .3,
                            duration: .1
                        },
                        className: `text-token-text-tertiary ms-2 flex items-baseline`,
                        children: [Yt(e.status), (0, W.jsx)(at, {
                            gap: 2,
                            size: 2
                        })]
                    })]
                }), t[0] = r, t[1] = n, t[2] = i, t[3] = a
            } else a = t[3];
            return a
        }, Zt = ({
            children: e,
            firstLog: t,
            lastLog: n,
            isHintResolved: r,
            duration: i,
            isComplete: a = !1,
            isLast: o = !1,
            statusLogs: s
        }) => {
            let [c, l] = (0, Jt.useState)(!0), [u, f] = (0, Jt.useState)(!1), p = () => {
                l(!c)
            };
            return (0, W.jsxs)(`li`, {
                className: `relative flex flex-col`,
                children: [(0, W.jsx)(`div`, {
                    "aria-hidden": `true`,
                    className: `pointer-events-none absolute h-[1px] bg-transparent`,
                    ref: (0, Jt.useCallback)(e => {
                        if (!e) return;
                        let t = new IntersectionObserver(e => {
                            f(e[0].intersectionRatio === 0)
                        }, {
                            threshold: 0
                        });
                        return t.observe(e), () => {
                            t.disconnect()
                        }
                    }, [])
                }), (0, W.jsxs)(Et, {
                    as: `div`,
                    disableEntryAnimation: !0,
                    isSticky: !0,
                    bottomBorder: u || !o && !c,
                    contentAfter: (0, W.jsx)(Gt, {
                        isComplete: a,
                        duration: i,
                        timestamp: t?.timestamp
                    }),
                    contentBefore: (0, W.jsx)(`button`, {
                        className: `text-token-text-tertiary`,
                        onClick: () => p(),
                        children: (0, W.jsx)(Be, {
                            className: d(`icon transition-transform`, c && `rotate-90`)
                        })
                    }),
                    onClick: () => p(),
                    children: [(0, W.jsx)(Xt, {
                        isComplete: a,
                        message: $t.run,
                        statusLogs: s
                    }), !c && n && (0, W.jsx)(zt, {
                        isPreview: !0,
                        isHintResolved: r,
                        log: n
                    })]
                }), c && e]
            })
        }, Qt = ({
            runMessages: e,
            onClickFix: t,
            onClickLineNumber: n,
            hints: r,
            isLast: i,
            includeContentBefore: a = !1
        }) => {
            let [o, s] = (0, Jt.useState)(!1), c = e.filter(e => e.type === z.ENVIRONMENT_STATUS), l = e.filter(bt), u = le(e), d = u?.type === z.RUN_COMPLETE, f = d ? u.duration : null, p = l[0];
            if (d) {
                if (l.length === 0) return (0, W.jsx)(Et, {
                    isHintOpen: o,
                    bottomBorder: !0,
                    contentBefore: a,
                    contentAfter: (0, W.jsx)(Gt, {
                        isComplete: d,
                        duration: f,
                        timestamp: p?.timestamp
                    }),
                    children: (0, W.jsx)(Xt, {
                        isComplete: d,
                        message: $t.success,
                        statusLogs: c
                    })
                });
                if (l.length === 1 && p?.type === z.ERROR) {
                    let e = r.get(p.id);
                    return (0, W.jsxs)(Et, {
                        hasHint: !!e,
                        isHintOpen: o,
                        bottomBorder: !0,
                        contentBefore: (a || !!e) && (0, W.jsx)(kt, {
                            hint: e,
                            isOpen: o,
                            onOpenChange: s,
                            onClickFix: e => t?.(e, p.id, p.error)
                        }),
                        contentAfter: (0, W.jsx)(Nt, {
                            log: p,
                            onClick: n
                        }),
                        onClick: e && e.status !== V.RESOLVED && (() => s(!0)),
                        children: [(0, W.jsx)(Xt, {
                            isComplete: d,
                            message: $t.run,
                            statusLogs: c
                        }), (0, W.jsx)(Lt, {
                            isResolved: e?.status === V.RESOLVED,
                            ...p
                        })]
                    })
                } else if (l.length === 1 && p && !St(l[0])) return (0, W.jsxs)(Et, {
                    bottomBorder: !0,
                    contentBefore: a,
                    contentAfter: (0, W.jsx)(Nt, {
                        log: p,
                        onClick: n
                    }),
                    children: [(0, W.jsx)(Xt, {
                        isComplete: d,
                        message: $t.run,
                        statusLogs: c
                    }), (0, W.jsx)(zt, {
                        log: p
                    })]
                })
            }
            let m = le(l.filter(e => e.type !== z.RUN_COMPLETE)),
                h = (m && r.get(m.id))?.status === V.RESOLVED;
            return (0, W.jsx)(Zt, {
                statusLogs: c,
                firstLog: e[0] ?? null,
                lastLog: m ?? null,
                duration: f,
                isComplete: d,
                isHintResolved: h,
                isLast: i,
                children: (0, W.jsx)(`ol`, {
                    children: l.map(e => (0, W.jsx)(Bt, {
                        log: e,
                        onClickLineNumber: n,
                        onClickFix: t,
                        hint: r.get(e.id)
                    }, e.id))
                })
            })
        }, $t = he({
            success: {
                id: `laZI5H`,
                defaultMessage: `Run successfully`
            },
            run: {
                id: `o7dgBT`,
                defaultMessage: `Run`
            }
        })
    })),
    tn, G, nn, rn = e((() => {
        yt(), en(), xt(), wt(), Se(), r(), tn = t(L()), G = P(), nn = ({
            messages: e,
            scrollRef: t,
            onClose: n,
            onClickLineNumber: r,
            onClickFix: i,
            title: a,
            headerActions: o,
            hints: s,
            paddingBottom: c
        }) => {
            let l = s.size > 0,
                u = (0, tn.useMemo)(() => Object.entries(Ce(e, `runId`)), [e]),
                d = u.some(([, e]) => {
                    let t = e.filter(bt);
                    return t.length > 1 || t.length === 1 && St(t[0])
                });
            return (0, G.jsxs)(G.Fragment, {
                children: [(0, G.jsx)(vt, {
                    title: a,
                    actions: o,
                    onClose: n,
                    showBorder: e.length > 0
                }), (0, G.jsx)(`div`, {
                    ref: t,
                    className: `bg-token-bg-primary flex flex-1 flex-col-reverse overflow-auto`,
                    children: (0, G.jsx)(`ol`, {
                        className: `flex flex-1 flex-col justify-start pb-4`,
                        style: {
                            paddingBottom: c
                        },
                        children: (0, G.jsx)(oe, {
                            children: u.map(([e, t], n) => (0, G.jsx)(Qt, {
                                runMessages: t,
                                includeContentBefore: d || l,
                                onClickFix: i,
                                onClickLineNumber: r,
                                hints: s,
                                isLast: n === u.length - 1
                            }, e))
                        })
                    })
                })]
            })
        }
    })),
    an, on, sn = e((() => {
        r(), an = P(), on = ({
            onDrag: e,
            onDragEnd: t,
            onDoubleClick: n
        }) => (0, an.jsx)(j.div, {
            drag: `y`,
            className: `bg-token-text-quaternary absolute top-[-2px] z-10 h-[4px] w-full cursor-ns-resize opacity-0`,
            whileHover: {
                opacity: .5
            },
            whileDrag: {
                opacity: .75,
                height: `8px`,
                top: `-4px`
            },
            transition: {
                type: `tween`,
                duration: .1
            },
            style: {
                x: 0,
                y: 0,
                transform: `translateY(0px)`
            },
            dragMomentum: !1,
            dragSnapToOrigin: !1,
            dragElastic: !1,
            dragConstraints: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            },
            onDrag: (t, n) => {
                e?.(n)
            },
            onDragEnd: t,
            onDoubleClick: n
        })
    })),
    K, cn, ln = e((() => {
        f(), y(), r(), I(), K = P(), cn = ({
            textdocTitle: e,
            onClickViewConsole: t,
            onClickFix: n,
            onDismiss: r
        }) => (0, K.jsxs)(j.div, {
            initial: {
                scale: .95,
                opacity: 0
            },
            exit: {
                scale: .95,
                opacity: 0
            },
            animate: {
                scale: 1,
                opacity: 1
            },
            transition: {
                type: `spring`,
                bounce: .12,
                duration: .3
            },
            className: `border-token-border-default bg-token-bg-primary absolute end-2 bottom-2 flex w-fit max-w-80 flex-col gap-4 rounded-xl border px-4 py-4 shadow-xl`,
            children: [(0, K.jsxs)(`div`, {
                className: `flex items-start`,
                children: [(0, K.jsxs)(`div`, {
                    className: `flex flex-col gap-1`,
                    children: [(0, K.jsx)(`div`, {
                        className: `text-sm font-semibold`,
                        children: (0, K.jsx)(F, {
                            id: `ObCQBq`,
                            defaultMessage: `Cannot preview your code`
                        })
                    }), (0, K.jsx)(`div`, {
                        className: `text-sm`,
                        children: (0, K.jsx)(F, {
                            id: `3ZeoP8`,
                            defaultMessage: `An error occured while trying to run {name}`,
                            values: {
                                name: e
                            }
                        })
                    })]
                }), (0, K.jsx)(N, {
                    size: `small`,
                    color: `ghost`,
                    as: `button`,
                    className: `text-token-text-tertiary -m-1! aspect-square p-0!`,
                    onClick: r,
                    icon: o
                })]
            }), (0, K.jsxs)(`div`, {
                className: `flex items-center justify-end gap-2`,
                children: [(0, K.jsx)(N, {
                    size: `small`,
                    color: `secondary`,
                    onClick: t,
                    children: (0, K.jsx)(F, {
                        id: `Fch32I`,
                        defaultMessage: `View console`
                    })
                }), (0, K.jsx)(N, {
                    size: `small`,
                    color: `primary`,
                    onClick: n,
                    children: (0, K.jsx)(F, {
                        id: `HRfYX0`,
                        defaultMessage: `Fix bug`
                    })
                })]
            })]
        })
    })),
    un, dn = e((() => {
        un = (e, {
            name: t,
            message: n,
            line: r,
            stack: i
        }) => {
            let a = r == null ? `` : `\n\nError occurred in:\n${e.split(`
`).slice(r-1,r+1).join(`
`)}`;
            return `${t}: ${n}\n\nStack:\n${i.join(``)}${a}`
        }
    })),
    fn, pn, mn = e((() => {
        me(), dn(), Pe(), x(), fn = new Oe({
            capacity: 5
        }), pn = async (e, t, r) => {
            let i = un(t, r.error),
                a = n(fn.get(i));
            if (fn.get(i)) return a;
            let {
                hint: o
            } = await b.safePost(`/textdoc/{textdoc_id}/code/hint`, {
                parameters: {
                    path: {
                        textdoc_id: e
                    }
                },
                requestBody: {
                    error: i,
                    line: r.error.line ?? -1
                }
            });
            return fn.set(i, o), o
        }
    })),
    hn, gn, _n = e((() => {
        dn(), hn = `You're a professional developer highly skilled in debugging. The user ran the textdoc's code, and an error was thrown.
Please think carefully about how to fix the error`, gn = (e, t, n) => {
            let r = un(e, n);
            return `
${hn}, and then rewrite the textdoc to fix it.

- NEVER change existing test cases unless they're clearly wrong.
- ALWAYS add more test cases if there aren't any yet.
- ALWAYS ask the user what the expected behavior is in the chat if the code is not clear.

${t?`# Hint\n\n${t}\n\n`:``}
# Error

${r}`.trim()
        }
    })),
    q, J, vn, yn = e((() => {
        $e(), et(), rn(), sn(), ln(), mn(), At(), _n(), Me(), ce(), He(), ee(), qe(), r(), q = t(L()), I(), J = P(), vn = ({
            sandboxRef: e,
            textdocContent: t,
            textdocTitle: n,
            textdocId: r,
            isOpen: i,
            isTextdocAttachedPending: a,
            headerActions: o = [],
            highlightLine: s,
            createTextdocTurn: c,
            onOpenChange: u,
            ref: d
        }) => {
            "use no forget";
            let [f, p] = (0, q.useState)(!1), [m, g] = (0, q.useState)(!1), [_, v] = (0, q.useState)([]), [y, b] = (0, q.useState)(0), [x, S] = (0, q.useState)(null), [C, w] = (0, q.useState)(null), [T, E] = (0, q.useState)(() => new Map), [ee, te] = (0, q.useState)(320), D = (0, q.useRef)(null), O = be();
            (0, q.useEffect)(() => w(null), [t]);
            let k = _.filter(e => [z.LOG, z.ERROR, z.OUTPUT].includes(e.type)).length,
                A = (0, q.useEffectEvent)(() => {
                    b(k)
                });
            (0, q.useEffect)(() => {
                i && A()
            }, [i]);
            let M = (0, q.useMemo)(() => {
                    for (let e = _.length - 1; e >= 0; e--) {
                        let t = _[e];
                        if (t.runId !== C) return null;
                        if (t.type === z.ERROR) return t
                    }
                    return null
                }, [_, C]),
                ne = (e, n, r) => {
                    let i = T.get(n);
                    if (i) {
                        let {
                            id: e,
                            content: t
                        } = i;
                        E(n => {
                            let r = new Map(n);
                            return r.set(e, {
                                id: e,
                                content: t,
                                status: V.RESOLVED
                            }), r
                        })
                    }
                    S(n), c({
                        sourceEvent: e,
                        action: tt.EDIT,
                        userMessageType: R.CONSOLE,
                        content: gn(t, i?.content ?? null, r)
                    })
                },
                re = async (e, n) => {
                    if (!a) {
                        E(t => {
                            let n = new Map(t);
                            return n.set(e, {
                                id: e,
                                status: V.LOADING,
                                content: ``
                            }), n
                        });
                        try {
                            let i = await pn(r, t, n);
                            E(t => {
                                let n = new Map(t);
                                return n.set(e, {
                                    id: e,
                                    status: V.READY,
                                    content: i
                                }), n
                            })
                        } catch {
                            E(t => {
                                let n = new Map(t);
                                return n.delete(e), n
                            })
                        }
                    }
                }, ie = async (t, n) => {
                    let r = Qe(t, n),
                        i = Ze(t, n),
                        a = Xe(t);
                    if (!r || !a && !i) return;
                    a && u?.(!0), g(!0), v(e => e.map(e => ({
                        ...e,
                        isStale: !0
                    })));
                    let o = !1,
                        c = l(e.current).evalAsync({
                            code: n,
                            language: r
                        });
                    for await (let e of c) {
                        if (e.type === z.RUN_START && requestAnimationFrame(() => {
                                D.current?.scrollTo({
                                    top: 0,
                                    behavior: `smooth`
                                })
                            }), e.type === z.ERROR) {
                            if (e.line != null) {
                                let {
                                    line: t
                                } = e;
                                requestAnimationFrame(() => s(t))
                            }
                            o = !0, re(e.id, e)
                        }
                        w(e.runId), v(t => [...t, {
                            ...e,
                            isStale: !1
                        }])
                    }
                    o && u?.(!0), g(!1)
                };
            (0, q.useImperativeHandle)(d, () => ({
                runCode: ie,
                stopCode: () => e.current?.stop()
            }));
            let ae = !i && m,
                se = ae && M && M.id !== x;
            return (0, J.jsxs)(oe, {
                children: [f && (0, J.jsx)(`div`, {
                    className: `pointer-events-auto absolute inset-0 bg-transparent`
                }, `drag-overlay`), !se && ae && k > y && (0, J.jsx)(j.button, {
                    initial: {
                        scale: .95,
                        opacity: 0
                    },
                    exit: {
                        scale: .95,
                        opacity: 0
                    },
                    animate: {
                        scale: 1,
                        opacity: 1
                    },
                    transition: {
                        type: `spring`,
                        bounce: .12,
                        duration: .3
                    },
                    className: `bg-token-bg-primary hover:bg-token-bg-secondary absolute end-2 bottom-2 flex items-center gap-2 rounded-full px-3 py-1.5 shadow-lg`,
                    onClick: () => u?.(!0),
                    children: (0, J.jsxs)(`span`, {
                        className: `text-token-text-secondary flex items-center gap-1 text-sm`,
                        children: [(0, J.jsx)(h, {
                            className: `icon-sm`
                        }), (0, J.jsx)(F, {
                            id: `etzFTa`,
                            defaultMessage: `{numLogs, plural, one {{numLogs} message} other {{numLogs} messages}}`,
                            values: {
                                numLogs: k
                            }
                        })]
                    })
                }, `view-console`), se && (0, J.jsx)(cn, {
                    textdocTitle: n,
                    onClickViewConsole: () => u?.(!0),
                    onDismiss: () => S(M.id),
                    onClickFix: e => {
                        ne(e, M.id, M.error)
                    }
                }, `error-modal`), i && (0, J.jsxs)(j.div, {
                    initial: {
                        translateY: `100%`,
                        opacity: 0
                    },
                    animate: {
                        translateY: `0%`,
                        opacity: 1
                    },
                    exit: {
                        translateY: `100%`,
                        opacity: 0
                    },
                    transition: {
                        type: `spring`,
                        bounce: 0,
                        duration: .48
                    },
                    className: `border-token-border-default relative z-10 w-full border-t shadow-[0px_0px_32px_rgba(0,0,0,0.08)]`,
                    children: [(0, J.jsx)(on, {
                        onDragEnd: () => p(!1),
                        onDrag: ({
                            delta: {
                                y: e
                            }
                        }) => {
                            p(!0), te(t => t - e)
                        }
                    }), (0, J.jsx)(`div`, {
                        className: `flex flex-col`,
                        style: {
                            height: ee
                        },
                        children: (0, J.jsx)(nn, {
                            scrollRef: D,
                            messages: _,
                            onClose: () => u?.(!1),
                            onClickLineNumber: s,
                            onClickFix: ne,
                            title: O.formatMessage({
                                id: `P9VJDk`,
                                defaultMessage: `Console`
                            }),
                            headerActions: [...o, {
                                tooltip: O.formatMessage({
                                    id: `gAICYK`,
                                    defaultMessage: `Clear console`
                                }),
                                icon: Ue,
                                onClick: () => {
                                    b(0), v([]), E(new Map)
                                }
                            }],
                            hints: T
                        })
                    })]
                }, `console`)]
            })
        }
    }));

function bn(e, t) {
    let n = e.indexOf(t);
    return n !== -1 && e.indexOf(t, n + t.length) === -1
}

function Y(e, t) {
    return wn.test(e[t])
}

function xn(e, t, n = !1) {
    if (t === 0 || n && Y(e, t - 1)) return t;
    for (; t > 0 && Y(e, t - 1);) t--;
    for (; t > 0 && !Y(e, t - 1);) t--;
    return Y(e, t) && t++, t
}

function Sn(e, t, n = !1) {
    if (t === e.length || n && Y(e, t)) return t;
    for (; t < e.length && Y(e, t);) t++;
    for (; t < e.length && !Y(e, t);) t++;
    return Y(e, t - 1) && t--, t
}

function Cn(e, t, n = !0, r = Tn) {
    if (e.start < 0 || e.end > t.length || e.start > e.end) throw Error(`Invalid commentSourceRange provided.`);
    let i = t.substring(e.start, e.end),
        a = e.start,
        o = e.end;
    n && (a = xn(t, a, !0), o = Sn(t, o, !0));
    let s = t.substring(a, e.start),
        c = t.substring(e.end, o),
        l = `${s}${i}${c}`;
    if (bn(t, l) && (r == null || l.length >= r)) return {
        before: s,
        after: c,
        allSurrounding: l
    };
    let u = a,
        d = o,
        f = !0;
    for (; f && (r == null || l.length < r);) {
        let n = !1,
            a = u > 0 ? xn(t, u) : u;
        a < u && (u = a, n = !0);
        let o = d < t.length ? Sn(t, d) : d;
        if (o > d && (d = o, n = !0), n) {
            let n = t.substring(u, e.start),
                a = t.substring(e.end, d),
                o = `${n}${i}${a}`;
            if (bn(t, o) && (r == null || o.length >= r)) return {
                before: n,
                after: a,
                allSurrounding: o
            };
            s = n, c = a, l = o
        } else f = !1
    }
    return {
        before: s,
        after: c,
        allSurrounding: l
    }
}
var wn, Tn, En = e((() => {
    wn = /\s/, Tn = 30
}));

function Dn(e, t, n) {
    if (t == null || n == null) return `The user is referring to the entire text of "${e}".`;
    let r = `
## Selected Text
The user has selected this text in "${e}" in particular:
${t}
`.trim();
    return n.allSurrounding === t ? r : `
${r}

## Surrounding Context
Here is the surrounding context:
${n.allSurrounding}
`.trim()
}

function On(e, t) {
    return e == null || t == null ? `entire document` : e === t.allSurrounding ? `selected text` : `surrounding context`
}

function kn(e) {
    return `For the update pattern, create a regex which exactly matches \
the ${e}. Edit just this string in order to fullfill the user's request. NEVER rewrite the entire document. \
Instead, ALWAYS edit ONLY the ${e}. The only exception to this rule is if the ${e} includes markdown \
lists or tables. In that case, fully rewrite the document using ".*" as the regex update pattern.`.trim()
}

function An(e, t, n, r) {
    if (!Fe(t) && n && r) {
        let t = On(n, r);
        return `
${In}
The user requests that you directly edit the document.

${Dn(e,n,r)}

${Ln}
Use the update_textdoc tool to make this edit. ${kn(t)}`.trim()
    }
    return `
${In}
The user requests that you directly edit the document.

${Dn(e,n,r)}

${Ln}
Use the update_textdoc tool to make this edit. You MUST fully rewrite the entire document \
by using ".*" as the update regex pattern.`.trim()
}

function jn(e, t, n) {
    return `
${In}
The user requests that you add comments about some text.

${Dn(e,t,n)}

${Ln}
Do not respond to the user's question directly, just leave comments.`.trim()
}

function Mn(e, t) {
    return Fe(e) ? t === `entire document` ? ` If you choose to update the ${t}, you MUST fully rewrite the ${t} by using ".*" as the update regex pattern.` : ` If you choose to update the ${t}, you MUST fully rewrite the \
entire document by using ".*" as the update regex pattern. When you do so, ONLY modify the ${t} and rewrite \
other sections exactly as is, except for parts that must change based on this update` : t === `entire document` ? `` : ` If you choose to update the ${t}, follow these instructions: ${kn(t)}`
}

function Nn(e, t, n, r) {
    let i = On(n, r),
        a = Mn(t, i);
    return `
${In}
${Dn(e,n,r)}

${Ln}
The user would like you perform one of the following actions:
- Update the ${i} via the \`update_textdoc\` tool.${a}
- Explain the selected text via chat, or answer a general question about the selected text (no tool call required).
- Comment on the ${i} with feedback via the \`comment_textdoc\` tool. This should only be used if the user \
very explicitly asks for feedback, critique, or comments.

Based on the user's request, choose the appropriate action.
`.trim()
}

function Pn(e, t, n) {
    return `
${In}
${Dn(e,t,n)}

${Ln}
The user would like you to create a new textdoc.
`.trim()
}

function Fn(e, t, n, r = null, i = null) {
    switch (n) {
        case tt.ASK:
            return Nn(e, t, r, i);
        case tt.CREATE_TEXTDOC:
            return Pn(e, r, i);
        case tt.EDIT:
            return An(e, t, r, i);
        case tt.COMMENT:
            return jn(e, r, i)
    }
}
var In, Ln, Rn = e((() => {
    et(), Me(), In = `# Context`, Ln = `# Instructions`
}));

function zn(e) {
    switch (e) {
        case R.ACCELERATOR:
        case R.CONSOLE:
        case R.ACCEPT_COMMENT:
        case R.HIVE_SPEAKER_EDIT:
            return !0;
        case R.ASK_CHATGPT:
        case R.FULL_SCREEN_SUBMIT:
            return !1
    }
}

function Bn(e, t) {
    switch (t) {
        case R.ASK_CHATGPT:
        case R.ACCEPT_COMMENT:
        case R.FULL_SCREEN_SUBMIT:
            return e.formatMessage(Un.askChatGPT);
        case R.ACCELERATOR:
        case R.CONSOLE:
        case R.HIVE_SPEAKER_EDIT:
            return
    }
}
var Vn, Hn, Un, Wn = e((() => {
        En(), Rn(), Me(), Ge(), T(), ae(), A(), ne(), Vn = t(L()), I(), Hn = (e, t) => {
            let n = be(),
                r = _(() => de(e)),
                a = se();
            return (0, Vn.useCallback)(async ({
                content: o,
                sourceRange: s,
                action: c,
                userMessageType: l,
                acceleratorMetadata: u,
                selectionMetadata: d,
                sourceEvent: f
            }) => {
                if (t?.versionInt == null || a) return;
                let {
                    textdocId: p,
                    type: m,
                    versionInt: h,
                    content: g
                } = t, _, v = null;
                s && s.start !== s.end && (_ = g.slice(s.start, s.end), v = Cn(s, g));
                let y = C(Fn(p, m, c, _, v), {
                    exclude_after_next_user_message: !0
                });
                We({
                    callsiteId: `request_completion.canvas.textdoc.use_create_textdoc_turn.1`,
                    conversation: e,
                    sourceEvent: f,
                    promptMessage: i(o, {
                        canvas: {
                            textdoc_id: p,
                            textdoc_type: m,
                            version: h,
                            textdoc_content_length: g.length,
                            user_message_type: l,
                            accelerator_metadata: u,
                            selection_metadata: d
                        },
                        is_visually_hidden_from_conversation: zn(l),
                        targeted_reply: _,
                        targeted_reply_label: Bn(n, l),
                        open_in_canvas_view: {
                            type: `canvas_textdoc`,
                            id: p
                        }
                    }),
                    completionMetadata: r ? {
                        conversationMode: r
                    } : void 0,
                    appendMessages: [y]
                })
            }, [t, a, e, r, n])
        }, Un = he({
            askChatGPT: {
                id: `h5ANdM`,
                defaultMessage: `Asked ChatGPT`
            }
        })
    })),
    X, Z, Gn, Kn, qn, Jn, Yn, Xn, Zn, Qn, $n, er, tr = e((() => {
        Le(), mt(), u(), D(), r(), X = t(L(), 1), ue(), dt(), Z = P(), Gn = (e, t, n = 1) => {
            c(e.scrollTop, t, {
                duration: n,
                ease: `easeInOut`,
                onUpdate: t => {
                    e.scrollTop = t
                }
            })
        }, Kn = a.div`flex w-full grow flex-col gap-1 rounded-xl p-2 pe-5 text-sm`, qn = a.input`ms-[-2px] w-auto rounded-none border-none bg-[#E5F3FF] p-0 px-0.5 text-sm font-semibold outline-none focus:outline-none`, Jn = a(j.span)`start border-token-text-tertiary absolute -bottom-0.5 w-full origin-start border-b border-solid`, Yn = a(j.span)`start border-token-text-tertiary absolute -bottom-0.5 w-full border-b border-dashed`, Xn = a.div`w-full loading-results-shimmer bg-token-bg-secondary h-2 rounded-full`, Zn = () => (0, Z.jsxs)(Kn, {
            className: `gap-2`,
            children: [` `, (0, Z.jsx)(Xn, {
                className: `w-[48px]`
            }), ` `, (0, Z.jsx)(Xn, {}), ` `, (0, Z.jsx)(Xn, {}), ` `, (0, Z.jsx)(Xn, {
                className: `w-1/2`
            })]
        }), Qn = {
            initial: {
                scaleX: 0,
                opacity: 1
            },
            animate: {
                scaleX: 1,
                opacity: 0,
                transition: {
                    scaleX: {
                        duration: .85,
                        ease: [.65, 0, .35, 1]
                    },
                    opacity: {
                        delay: .85,
                        duration: .1
                    }
                }
            }
        }, $n = {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1,
                transition: {
                    delay: .85,
                    duration: .1
                }
            }
        }, a.div`ms-2 rounded-full px-2 py-0.5 text-xs font-medium`, er = ({
            speakerId: e,
            content: t,
            range: n,
            filterDecision: r,
            isEditing: i,
            isSaving: a,
            containerRef: o,
            measuredTextContainerRef: s,
            isEditingEnabled: c
        }) => {
            let l = (0, X.useRef)(null),
                {
                    setSpeakers: u,
                    setEditingSpeaker: f,
                    hoveringSpeakerId: m,
                    setHoveringSpeakerId: h,
                    speakers: g,
                    editingSpeaker: _,
                    enableDebugger: v
                } = pt.getState(),
                y = pt(e => e.currentTime),
                b = n.max == null ? y === n.min : y >= n.min && y <= n.max;
            (0, X.useEffect)(() => {
                if (b && l.current && o.current) {
                    let e = o.current,
                        t = l.current,
                        n = e.getBoundingClientRect().top,
                        r = t.getBoundingClientRect().top - n + e.scrollTop - 20;
                    Gn(e, r, .3)
                }
            }, [n.min, n.max, b, o]);
            let x = g.get(e),
                S = !!x?.storedName && x.storedName !== x?.placeholderName || (x?.isEdited ?? !1),
                C = x?.name ?? x?.storedName ?? x?.placeholderName ?? `Unidentified Speaker`,
                w = (0, X.useRef)(null),
                T = e === _?.id,
                E = e === m,
                [ee, te] = (0, X.useState)(!1),
                [D, O] = (0, X.useState)(!1);
            (0, X.useEffect)(() => {
                w.current && (!T || !D || (w.current?.focus(), S && (w.current.value = C)))
            }, [S, T, D, C]), p(() => {
                if (s?.current && w.current) {
                    let e = s.current.offsetWidth;
                    w.current.style.width = `${e}px`
                }
            }, [_?.name]);
            let k = (0, X.useCallback)(() => {
                    if (!_ || !x) return;
                    f(null), O(!1), te(!1), h(null);
                    let t = g.set(e, {
                        ...x,
                        name: _.name ? _.name : x.placeholderName,
                        isEdited: !!_.name
                    });
                    u(t)
                }, [_, x, f, h, g, e, u]),
                A = !i || a;
            return (0, Z.jsxs)(Kn, {
                ref: l,
                className: d(b && `animate-[hive-log-fadeout_0.3s_1.5s_forwards] bg-blue-500/10`, !1, !1),
                children: [!1, (0, Z.jsxs)(`div`, {
                    className: `mb-[1px] flex w-full items-center justify-between`,
                    children: [c && (T ? (0, Z.jsx)(qn, {
                        ref: w,
                        disabled: !D,
                        onBlur: k,
                        className: d(!T && `hidden w-0`),
                        placeholder: x?.isEdited ? void 0 : x?.placeholderName,
                        value: _?.name,
                        onKeyDown: e => {
                            e.key === `Enter` && k()
                        },
                        onChange: t => f({
                            id: e,
                            name: t.target.value
                        })
                    }) : (0, Z.jsxs)(`div`, {
                        className: `flex items-center gap-1`,
                        children: [(0, Z.jsxs)(`div`, {
                            onClick: () => {
                                A || (f({
                                    id: e,
                                    name: S ? C : ``
                                }), O(!0))
                            },
                            onMouseEnter: () => {
                                A || (h(e), te(!0))
                            },
                            onMouseLeave: () => {
                                A || (h(null), te(!1))
                            },
                            className: d(`relative flex font-semibold transition-colors`, {
                                "text-blue-400!": E && !A
                            }, {
                                "cursor-pointer": !A
                            }, {
                                "text-token-text-tertiary": !A && !S
                            }),
                            children: [C, !A && !S && (0, Z.jsxs)(Z.Fragment, {
                                children: [(0, Z.jsx)(Jn, {
                                    ...Qn
                                }), (0, Z.jsx)(Yn, {
                                    ...$n,
                                    className: d(E && !A && `border-blue-400!`)
                                })]
                            })]
                        }), ee && !A && (0, Z.jsx)(Re, {
                            className: `h-4 w-4 text-blue-400`
                        }), !1]
                    })), (0, Z.jsx)(`div`, {
                        className: `text-xs text-[#5D5D5D]`,
                        children: ht(n.min)
                    })]
                }), (0, Z.jsx)(`div`, {
                    className: `flex`,
                    children: t
                })]
            })
        }
    })),
    Q, $, nr, rr, ir, ar, or, sr, cr, lr, ur, dr, fr, pr, mr, hr, gr, _r, vr, yr, br, xr, Sr, Cr = e((() => {
        f(), et(), Me(), Wn(), je(), s(), we(), Le(), v(), pe(), fe(), O(), ke(), ae(), k(), x(), ve(), D(), r(), Q = t(L(), 1), I(), ue(), mt(), tr(), dt(), $ = P(), nr = e => ge({
            queryKey: [`sharedHiveLog`, e],
            queryFn: () => b.safeGet(`/hive/textdoc/shared/{shared_textdoc_id}/transcript`, {
                parameters: {
                    path: {
                        shared_textdoc_id: e
                    }
                }
            }),
            select: ft
        }), rr = (e, t = !0) => ge({
            queryKey: [`hiveLog`, e],
            queryFn: () => b.safeGet(`/hive/{hive_id}/transcript`, {
                parameters: {
                    path: {
                        hive_id: e
                    }
                }
            }),
            enabled: !!e && t,
            select: ft
        }), ir = `openai-voice-transcript-with-meeting-speaker-names`, ar = e => e.length === 0 ? null : e.find(e => e.id === ir) ?? e[0], or = e => {
            let t = [],
                n = new Map,
                r = new Map,
                i = 0,
                a = 0;
            for (let o of e.entries ?? []) {
                let e = typeof o.message == `string` ? o.message.trim() : o.message == null ? `` : String(o.message).trim();
                if (e.length === 0) continue;
                let s = o.offsetSeconds,
                    c = Math.max(0, typeof s == `number` && Number.isFinite(s) ? s : a);
                a = c;
                let l = typeof o.speaker == `string` ? o.speaker.trim() : ``,
                    u = l.length > 0 ? l : `Speaker ${++i}`,
                    d = u.toLocaleLowerCase(),
                    f = r.get(d);
                f || (f = `record-speaker-${r.size+1}`, r.set(d, f), n.set(f, {
                    name: void 0,
                    storedName: u,
                    placeholderName: u,
                    isEdited: !1
                })), t.push({
                    speakerId: f,
                    content: e,
                    range: {
                        min: c,
                        max: null
                    },
                    filterDecision: null
                })
            }
            for (let e = 0; e < t.length; e += 1) {
                let n = t[e];
                if (!n) continue;
                let r = t[e + 1];
                n.range.max = r ? r.range.min : null
            }
            return t.length === 0 ? null : {
                rows: t,
                speakers: n
            }
        }, sr = e => ge({
            queryKey: [`recordMeetingTranscriptsForCanvas`, e],
            queryFn: async () => {
                if (!e) return null;
                let t = await m.safeGet(`/record/meetings/{meeting_id}/transcripts`, {
                        parameters: {
                            path: {
                                meeting_id: e
                            }
                        }
                    }),
                    n = ar(t.feeds ?? []);
                return n ? or(n) : null
            },
            enabled: !!e
        }), cr = () => ge({
            queryKey: [`hiveLogPrompts`],
            queryFn: () => b.safeGet(`/hive/prompts`, {}),
            enabled: !0
        }), lr = (e, t) => b.safePost(`/hive/{hive_id}/speakers`, {
            parameters: {
                path: {
                    hive_id: e
                }
            },
            requestBody: {
                speakers: t
            }
        }), ur = a.div`invisible absolute start-0 top-0 rounded-md border px-0.5 text-sm font-semibold whitespace-pre`, dr = (e, t) => !t || !e ? `` : t.isEdited || e.name && e.name !== t.placeholderName ? e.name : t.placeholderName, fr = () => (0, $.jsx)(ie, {
            children: (0, $.jsx)(F, {
                ...Sr.researchPreview
            })
        }), pr = a.div`flex h-full w-full max-w-[360px] min-w-[240px] flex-col border-s border-gray-200`, mr = a.div`flex w-full max-w-[360px] min-w-[240px] flex-col border-s border-gray-200`, hr = a.div`bg-token-bg-primary mt-[0.5px] flex h-18 w-full items-center justify-between border-b-[0.5px] border-gray-200 p-4`, gr = a.div`flex h-full w-full flex-col gap-2 overflow-y-auto p-2`, _r = a(j.div)`flex items-center gap-2`, vr = {
            initial: {
                opacity: 0,
                y: -4
            },
            animate: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: .2
                }
            },
            exit: {
                opacity: 0,
                y: -4,
                transition: {
                    duration: .2
                }
            }
        }, yr = ({
            sharedTextDocId: e
        }) => {
            let t = nr(e),
                n = (0, Q.useRef)(null),
                r = _(re),
                {
                    selectedFilters: i,
                    isOpen: a,
                    currentTime: o,
                    closeSidebar: s
                } = pt(),
                c = (0, Q.useMemo)(() => t.data?.filter(({
                    filterDecision: e
                }) => !e || i?.includes(e)), [t.data, i]);
            if (t.isError) return null;
            let l = (0, $.jsxs)(`div`, {
                    className: `text-token-text-secondary flex items-center gap-1.5 px-2 py-2 text-base font-medium md:px-0`,
                    children: [(0, $.jsx)(F, {
                        ...Sr.transcript
                    }), (0, $.jsx)(fr, {})]
                }),
                u = (0, $.jsxs)($.Fragment, {
                    children: [t.isLoading && Array.from({
                        length: 16
                    }).map((e, t) => (0, $.jsx)(Zn, {}, `loading-${t}`)), c?.map(e => (0, $.jsx)(er, {
                        isEditingEnabled: !1,
                        containerRef: n,
                        ...e
                    }, xr(e)))]
                });
            return !a || typeof o != `number` ? null : r ? (0, $.jsxs)(mr, {
                children: [(0, $.jsxs)(hr, {
                    children: [l, (0, $.jsx)(E, {
                        onClick: s
                    })]
                }), (0, $.jsx)(gr, {
                    ref: n,
                    children: u
                })]
            }) : (0, $.jsx)(w, {
                contentRef: n,
                testId: `modal-shared-canvas-transcript-modal`,
                isOpen: a,
                title: l,
                contentClassName: `overflow-y-auto gap-2 p-2 flex flex-col`,
                showCloseButton: !0,
                onClose: s,
                children: u
            })
        }, br = ({
            hiveId: e,
            conversation: t,
            ts: n,
            textdocVersion: r
        }) => {
            let i = r.metadata?.record_meeting_id ?? void 0,
                a = sr(i),
                o = i == null || a.isError || !a.isLoading && a.data == null,
                s = rr(e, o),
                c = cr(),
                l = be(),
                [u, f] = (0, Q.useState)(!1),
                p = (0, Q.useRef)(null),
                {
                    isOpen: m,
                    closeSidebar: h,
                    openSidebar: _,
                    setCurrentTime: v,
                    speakers: y,
                    setSpeakers: b,
                    editingSpeaker: x,
                    enableDebugger: S,
                    setEnableDebugger: C,
                    selectedFilters: w,
                    setSelectedFilters: T
                } = pt();
            (0, Q.useEffect)(() => {
                n !== void 0 && (_(), v(n))
            }, [n, _, v]);
            let E = (0, Q.useRef)(null),
                [ee, D] = (0, Q.useState)(!1),
                O = Hn(t, r),
                k = a.data ?? null,
                A = k != null;
            if ((0, Q.useEffect)(() => {
                    A && u && f(!1)
                }, [u, A]), (0, Q.useEffect)(() => {
                    k && b(new Map(k.speakers))
                }, [k, b]), a.isLoading && !k || !A && (s.isLoading || c.isLoading || s.isError || c.isError || !s.data || !c.data)) return null;
            let j = x ? y.get(x.id) : null,
                M = Array.from(y.values()).some(({
                    isEdited: e
                }) => e),
                ne = () => {
                    let e = new Map(Array.from(y.entries()).map(([e, t]) => [e, {
                        ...t,
                        name: void 0,
                        isEdited: !1
                    }]));
                    b(e), f(!1)
                },
                re = e => {
                    let t = c.data?.speaker_edits;
                    if (!t) return;
                    let n = t.replace(`{speakers}`, JSON.stringify(Array.from(y.entries())));
                    return O({
                        sourceEvent: e,
                        action: tt.EDIT,
                        content: n,
                        userMessageType: R.HIVE_SPEAKER_EDIT,
                        selectionMetadata: void 0
                    })
                },
                ie = async t => {
                    if (M) {
                        D(!0);
                        try {
                            let n = [];
                            Array.from(y.entries()).forEach(([e, t]) => {
                                !t.isEdited || !t.name || n.push({
                                    id: e,
                                    updated_name: t.name
                                })
                            });
                            let r = await lr(e, n);
                            if (!r) throw Error(`Failed to update hive content`);
                            let i = new Map(y);
                            for (let e of r.updated_speakers) {
                                if (!i.has(e.id)) continue;
                                let t = i.get(e.id);
                                t && i.set(e.id, {
                                    ...t,
                                    storedName: e.updated_name,
                                    isEdited: !1
                                })
                            }
                            await re(t), b(i), f(!1)
                        } catch {} finally {
                            D(!1)
                        }
                    }
                }, ae = s.data ?? [], se = A ? k.rows : ae.filter(({
                    filterDecision: e
                }) => !e || w?.includes(e));
            return (0, $.jsxs)(pr, {
                className: d(m ? `visible` : `invisible hidden`),
                children: [(0, $.jsxs)(`div`, {
                    className: `flex h-14 w-full items-center justify-between border-b border-gray-200 p-4`,
                    children: [(0, $.jsxs)(`div`, {
                        className: `text-token-text-secondary group/debug flex items-center gap-1.5 py-2 text-base font-medium`,
                        children: [(0, $.jsx)(F, {
                            ...Sr[u ? `edit` : `transcript`]
                        }), (0, $.jsx)(fr, {}), !1]
                    }), (0, $.jsx)(`div`, {
                        className: `flex h-10 items-center gap-2`,
                        children: A ? (0, $.jsx)(Ee, {
                            icon: g.Cross,
                            onClick: () => h()
                        }) : (0, $.jsx)(oe, {
                            mode: `wait`,
                            children: u ? (0, $.jsxs)(_r, {
                                ...vr,
                                children: [(0, $.jsx)(N, {
                                    onClick: ne,
                                    color: `secondary`,
                                    disabled: ee,
                                    children: (0, $.jsx)(F, {
                                        ...Sr.cancelButton
                                    })
                                }), (0, $.jsx)(N, {
                                    color: `primary`,
                                    onClick: ie,
                                    disabled: !M,
                                    loading: ee,
                                    children: (0, $.jsx)(F, {
                                        ...Sr.saveButton
                                    })
                                })]
                            }, `edit-buttons`) : (0, $.jsxs)(_r, {
                                ...vr,
                                children: [(0, $.jsx)(te, {
                                    className: `h-10`,
                                    label: l.formatMessage(Sr.editButtonTooltip),
                                    children: (0, $.jsx)(Ee, {
                                        icon: Re,
                                        onClick: () => f(!0)
                                    })
                                }), (0, $.jsx)(Ee, {
                                    icon: g.Cross,
                                    onClick: () => h()
                                })]
                            }, `non-edit-buttons`)
                        })
                    })]
                }), !1, (0, $.jsxs)(gr, {
                    ref: p,
                    children: [x && (0, $.jsx)(ur, {
                        ref: E,
                        children: dr(x, j)
                    }), se.map(e => (0, $.jsx)(er, {
                        isEditingEnabled: !0,
                        measuredTextContainerRef: E,
                        containerRef: p,
                        isEditing: !A && u,
                        isSaving: !A && ee,
                        ...e
                    }, xr(e)))]
                })]
            })
        }, xr = e => {
            let {
                speakerId: t,
                content: n,
                range: r
            } = e;
            return `${t}-${r.min}-${r.max}-${n.slice(0,2)}`
        }, Sr = he({
            researchPreview: {
                id: `HiveLogSidebar.researchPreview`,
                defaultMessage: `Research Preview`
            },
            edit: {
                id: `HiveLogSidebar.edit`,
                defaultMessage: `Edit`
            },
            transcript: {
                id: `HiveLogSidebar.transcript`,
                defaultMessage: `Transcript`
            },
            editButtonTooltip: {
                id: `HiveLogSidebar.editButtonTooltip`,
                defaultMessage: `Edit speakers`
            },
            cancelButton: {
                id: `HiveLogSidebar.cancelButton`,
                defaultMessage: `Cancel`
            },
            saveButton: {
                id: `HiveLogSidebar.saveButton`,
                defaultMessage: `Save`
            }
        })
    }));
export {
    Hn as a, Wn as i, br as n, vn as o, Cr as r, yn as s, yr as t
};
//# sourceMappingURL=d3304073-gnbj26zwlqmhu5v6.js.map