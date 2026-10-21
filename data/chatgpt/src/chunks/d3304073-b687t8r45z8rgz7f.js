import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    At as n,
    B8 as r,
    Cw as i,
    Dw as a,
    Ew as o,
    F7 as s,
    Gt as c,
    JT as l,
    Kot as u,
    LN as d,
    MP as f,
    Mh as p,
    N7 as m,
    Nz as h,
    Ow as g,
    P5 as _,
    Pz as v,
    RN as y,
    TE as b,
    Tc as x,
    Tw as ee,
    VZ as S,
    X5 as C,
    Xy as w,
    Y5 as T,
    YT as te,
    Zy as E,
    cn as D,
    e5 as O,
    fx as ne,
    g8 as k,
    hn as re,
    jh as A,
    kw as ie,
    n1 as ae,
    oq as oe,
    pq as se,
    qot as ce,
    t1 as le,
    tQ as ue,
    wE as j,
    wc as de,
    xP as fe,
    yx as pe,
    z7 as me,
    z8 as he,
    zZ as ge
} from "./4813494d-lxa3wniynbx9ka2a.js";
import {
    Bn as M,
    Ln as _e,
    Nn as N,
    O as ve,
    Rn as P,
    Vn as F,
    kn as ye,
    s as be,
    wn as xe,
    zn as Se
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    APn as Ce,
    RHn as we,
    cmn as I,
    dKn as Te,
    e5t as Ee,
    gUn as De,
    hUn as Oe,
    i5t as ke,
    ifn as Ae,
    jPn as je,
    n5t as Me,
    o5t as Ne,
    pmn as Pe,
    r5t as Fe,
    rfn as Ie,
    umn as Le
} from "./conversation-small-kzsalymynzuddxee.js";
import {
    CC as Re,
    Fx as ze,
    Ix as Be,
    Jy as Ve,
    SC as He,
    Yy as Ue,
    vv as We,
    yv as Ge
} from "./30901919-i8ip8r0znvgcym38.js";
import {
    Am as Ke,
    km as qe
} from "./8b34dbc2-ba6wt3zxvh7jce7p.js";
import {
    n as Je,
    r as L
} from "./2ea88c7a-lxyla91xs6iv7odf.js";
import {
    t as Ye
} from "./8d846022-bvik3sltoydb2o43.js";
import {
    n as Xe,
    t as Ze
} from "./c8f38d6c-f6gsa78nq62adwjn.js";
import {
    c as Qe,
    l as $e,
    o as et,
    s as tt
} from "./cc445a0e-o27nl1fy4xrj5bch.js";
import {
    i as nt,
    r as rt
} from "./dced7e81-cp8j0ikyzhb32tdz.js";
import {
    n as it,
    t as at
} from "./5422a199-ohc0ujx944q7esd3.js";
import {
    n as ot,
    t as st
} from "./e1a66d2b-dyg4p50wzzz24lxp.js";
import {
    C as ct,
    E as lt,
    S as ut,
    T as dt,
    b as ft
} from "./df59e297-mwifg1b5yqvvfc6o.js";
import {
    a as pt,
    i as mt,
    o as ht,
    r as gt,
    t as _t
} from "./e74608d1-lvc2vtxr0tjpdcl6.js";
var R, vt, yt, bt = e((() => {
        te(), v(), E(), C(), R = M(), {
            Cross: vt
        } = h, yt = ({
            onClose: e,
            title: t,
            actions: n,
            showBorder: r = !1
        }) => (0, R.jsxs)(`div`, {
            className: T(`bg-token-bg-primary flex items-center justify-between border-b py-2 ps-2 pe-2.5`, {
                "border-token-border-light": r,
                "border-transparent": !r
            }),
            children: [(0, R.jsx)(`div`, {
                className: `text-token-text-primary flex items-center gap-2 ps-4 text-sm select-none`,
                children: t
            }), (0, R.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [n.map(({
                    tooltip: e,
                    icon: t,
                    onClick: n
                }, r) => {
                    let i = (0, R.jsx)(l, {
                        size: `small`,
                        color: `ghost`,
                        as: `button`,
                        className: `text-token-text-primary aspect-square p-1!`,
                        icon: t,
                        onClick: n
                    }, r);
                    return e ? (0, R.jsx)(w, {
                        label: e,
                        children: i
                    }, r) : i
                }), (0, R.jsx)(l, {
                    size: `small`,
                    color: `ghost`,
                    as: `button`,
                    className: `text-token-text-primary aspect-square p-1!`,
                    onClick: e,
                    icon: vt
                })]
            })]
        })
    })),
    xt, St = e((() => {
        r(), Ye(), xt = e => he([L.ERROR, L.LOG, L.OUTPUT], e.type)
    })),
    Ct, wt, Tt = e((() => {
        at(), Ye(), Ct = e => e.type === L.OUTPUT && wt(e.output), wt = e => it(e)
    })),
    Et, Dt, Ot = e((() => {
        C(), n(), Et = M(), Dt = ({
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
            return (0, Et.jsxs)(e === `div` ? D.div : D.li, {
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
                className: T(`bg-token-bg-primary flex items-start justify-between py-1.5 ps-6 pe-4 font-mono text-sm whitespace-pre`, a && `border-token-border-xlight border-b`, s && `sticky top-0 z-10`, u && `cursor-pointer`, u && i && `hover:bg-red-500/10`, u && !i && `hover:bg-gray-50 dark:hover:bg-gray-700`, i && o && `bg-red-500/10`),
                onClick: u ? c : void 0,
                children: [t && (0, Et.jsx)(`div`, {
                    className: `me-3 flex h-6 w-5 items-start`,
                    children: t
                }), (0, Et.jsx)(`div`, {
                    className: `flex min-h-6 min-w-0 flex-1 items-start justify-start gap-2 leading-6`,
                    children: l
                }), n && (0, Et.jsx)(`div`, {
                    className: `ms-3 flex min-h-6 items-start leading-6`,
                    children: n
                })]
            })
        }
    })),
    kt, z, B, At, jt = e((() => {
        lt(), ct(), Ue(), Ne(), n(), kt = t(F()), P(), z = M(), B = function(e) {
            return e.LOADING = `loading`, e.READY = `ready`, e.RESOLVED = `resolved`, e
        }({}), At = ({
            hint: e,
            onClickFix: t,
            isOpen: n,
            onOpenChange: r
        }) => {
            let i = (0, kt.useRef)(null),
                a = Se();
            return e ? (0, z.jsx)(`div`, {
                className: `relative flex items-center font-sans`,
                onClick: e => e.stopPropagation(),
                children: (0, z.jsxs)(Fe, {
                    open: n,
                    onOpenChange: r,
                    children: [(0, z.jsx)(ke, {
                        asChild: !0,
                        ref: i,
                        children: e.status === `resolved` ? (0, z.jsx)(`div`, {
                            className: `flex h-5 w-5 items-center`,
                            children: (0, z.jsx)(Ve, {
                                className: `text-token-text-tertiary`,
                                size: 16
                            })
                        }) : (0, z.jsx)(`button`, {
                            className: `h-5 w-5`,
                            disabled: e.status === `loading`,
                            children: e.status === `loading` ? (0, z.jsx)(dt, {}) : (0, z.jsx)(ft, {
                                position: `static`,
                                isError: !0,
                                count: 1,
                                offsetY: 0
                            })
                        })
                    }), (0, z.jsx)(re, {
                        children: n && (0, z.jsx)(Me, {
                            forceMount: !0,
                            container: i.current?.ownerDocument.body,
                            children: (0, z.jsx)(Ee, {
                                side: `top`,
                                align: `start`,
                                alignOffset: -4,
                                sideOffset: 10,
                                children: (0, z.jsx)(ut, {
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
            }) : (0, z.jsx)(`div`, {
                className: `w-5`
            })
        }
    })),
    Mt, Nt, Pt, Ft = e((() => {
        Mt = M(), Nt = `module:`, Pt = ({
            log: e,
            isDisabled: t = !1,
            onClick: n
        }) => (0, Mt.jsx)(`div`, {
            className: `flex items-center`,
            children: `line` in e && e.line != null && (0, Mt.jsxs)(`button`, {
                onClick: () => e.line != null && n?.(e.line),
                className: `text-token-text-tertiary select-none enabled:hover:underline`,
                disabled: t,
                children: [Nt, e.line]
            })
        })
    })),
    It, V, Lt, Rt, zt, Bt, Vt, Ht, Ut = e((() => {
        r(), Tt(), Ot(), jt(), Xe(), Ft(), Ye(), C(), It = t(F()), P(), V = M(), Lt = ({
            isPreview: e = !1,
            log: t,
            level: n
        }) => (0, V.jsxs)(`span`, {
            className: T(`text-token-text-primary flex min-w-0 flex-wrap gap-1`, e ? `shrink truncate` : `whitespace-pre-wrap`, n === `warn` && `text-yellow-600`),
            children: [n === `warn` && `[warn]: `, typeof t == `string` ? t : t.map((t, n) => (0, V.jsx)(Ze, {
                isPreview: e,
                value: t
            }, n))]
        }), Rt = ({
            error: e,
            isPreview: t = !1,
            isResolved: n = !1
        }) => {
            let r = e.name + `:`;
            return (0, V.jsxs)(`span`, {
                className: T(`whitespace-pre-wrap`, n ? `text-token-text-primary` : `text-red-500`),
                children: [(0, V.jsx)(`span`, {
                    className: `font-semibold`,
                    children: r
                }), ` `, e.message, (0, V.jsx)(`div`, {
                    children: e.stack.length > 0 && !t ? e.stack.join(`
`) : ``
                })]
            })
        }, zt = ({
            output: e,
            isPreview: t = !1
        }) => {
            let n = Se();
            return e == null ? null : wt(e) ? (0, V.jsx)(`img`, {
                alt: n.formatMessage(Ht.imgAlt),
                className: T(t && `border-token-border-xlight h-6 rounded-lg border`),
                src: e
            }) : (0, V.jsx)(`span`, {
                className: `flex items-center gap-2`,
                children: O(e)
            })
        }, Bt = ({
            log: e,
            isHintResolved: t,
            isPreview: n = !1
        }) => {
            switch (e.type) {
                case L.LOG:
                    return (0, V.jsx)(Lt, {
                        isPreview: n,
                        ...e
                    });
                case L.ERROR:
                    return (0, V.jsx)(Rt, {
                        isPreview: n,
                        isResolved: t,
                        ...e
                    });
                case L.OUTPUT:
                    return (0, V.jsx)(zt, {
                        isPreview: n,
                        ...e
                    });
                default:
                    return null
            }
        }, Vt = ({
            log: e,
            isStale: t = !1,
            onClickFix: n,
            onClickLineNumber: r,
            hint: i
        }) => {
            let [a, o] = (0, It.useState)(!1);
            if (e.type === L.RUN_COMPLETE) return null;
            let s = i?.status === B.RESOLVED;
            return (0, V.jsx)(Dt, {
                hasHint: e.type === L.ERROR && i?.status === B.READY,
                isHintOpen: a,
                bottomBorder: !0,
                onClick: i && !s && (() => o(!0)),
                contentBefore: (0, V.jsx)(At, {
                    hint: i,
                    isOpen: a,
                    onOpenChange: o,
                    onClickFix: t => e.type === L.ERROR && i && n?.(t, i.id, e.error)
                }),
                contentAfter: (0, V.jsx)(Pt, {
                    log: e,
                    isDisabled: t,
                    onClick: r
                }),
                children: (0, V.jsx)(Bt, {
                    log: e,
                    isHintResolved: s
                })
            })
        }, Ht = _e({
            imgAlt: {
                id: `L6t7Yb`,
                defaultMessage: `Plot`
            }
        })
    })),
    Wt, H, Gt, Kt, qt = e((() => {
        ot(), E(), Wt = t(F()), P(), H = M(), Gt = ({
            timestamp: e,
            duration: t
        }) => {
            let [, n] = (0, Wt.useState)(0);
            (0, Wt.useEffect)(() => {
                setInterval(() => {
                    n(e => e + 1)
                }, 5e3)
            }, []);
            let r = Math.round((Date.now() - e) / 1e3);
            return (0, H.jsx)(w, {
                label: (0, H.jsx)(N, {
                    id: `bFO21A`,
                    defaultMessage: `Code ran {count, plural, =0 {instantly} one {in # second} other {in # seconds}}`,
                    values: {
                        count: Math.floor(t / 1e3)
                    }
                }),
                children: (0, H.jsx)(`span`, {
                    className: `text-token-text-tertiary`,
                    children: r >= 60 ? (0, H.jsx)(ye, {
                        value: -r,
                        updateIntervalInSeconds: 60,
                        numeric: `auto`
                    }) : (0, H.jsx)(N, {
                        id: `bRCEFN`,
                        defaultMessage: `Just now`
                    })
                })
            })
        }, Kt = ({
            isComplete: e,
            timestamp: t,
            duration: n
        }) => e && t != null && n != null ? (0, H.jsx)(Gt, {
            timestamp: t,
            duration: n
        }) : e && n == null ? (0, H.jsx)(`span`, {
            className: `text-token-text-tertiary`,
            children: (0, H.jsx)(N, {
                id: `EMebM9`,
                defaultMessage: `Stopped`
            })
        }) : (0, H.jsx)(st, {
            gap: 2
        })
    })),
    Jt, Yt, U, Xt, Zt, Qt, $t, en, tn = e((() => {
        Jt = xe(), St(), Tt(), Ut(), Ot(), jt(), Ft(), qt(), ot(), Re(), Ye(), C(), le(), n(), Yt = t(F()), P(), U = M(), Xt = e => {
            switch (e) {
                case Je.INITIALIZING:
                    return (0, U.jsx)(N, {
                        id: `J183Z0`,
                        defaultMessage: `initializing environment`
                    });
                case Je.INSTALLING_PACKAGES:
                    return (0, U.jsx)(N, {
                        id: `21sQ8o`,
                        defaultMessage: `installing packages`
                    });
                case Je.RUNNING_CODE:
                    return (0, U.jsx)(N, {
                        id: `nHITHk`,
                        defaultMessage: `running code`
                    })
            }
        }, Zt = e => {
            "use forget";
            let t = (0, Jt.c)(6),
                {
                    message: n,
                    isComplete: r,
                    statusLogs: i
                } = e,
                a;
            if (t[0] !== r || t[1] !== n || t[2] !== i) {
                let e = ae(i),
                    o;
                t[4] === n ? o = t[5] : (o = (0, U.jsx)(`span`, {
                    className: `text-token-text-secondary font-semibold`,
                    children: (0, U.jsx)(N, {
                        ...n
                    })
                }), t[4] = n, t[5] = o), a = (0, U.jsxs)(`span`, {
                    className: `flex items-center`,
                    children: [o, !r && e && (0, U.jsxs)(D.span, {
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
                        children: [Xt(e.status), (0, U.jsx)(st, {
                            gap: 2,
                            size: 2
                        })]
                    })]
                }), t[0] = r, t[1] = n, t[2] = i, t[3] = a
            } else a = t[3];
            return a
        }, Qt = ({
            children: e,
            firstLog: t,
            lastLog: n,
            isHintResolved: r,
            duration: i,
            isComplete: a = !1,
            isLast: o = !1,
            statusLogs: s
        }) => {
            let [c, l] = (0, Yt.useState)(!0), [u, d] = (0, Yt.useState)(!1), f = () => {
                l(!c)
            };
            return (0, U.jsxs)(`li`, {
                className: `relative flex flex-col`,
                children: [(0, U.jsx)(`div`, {
                    "aria-hidden": `true`,
                    className: `pointer-events-none absolute h-[1px] bg-transparent`,
                    ref: (0, Yt.useCallback)(e => {
                        if (!e) return;
                        let t = new IntersectionObserver(e => {
                            d(e[0].intersectionRatio === 0)
                        }, {
                            threshold: 0
                        });
                        return t.observe(e), () => {
                            t.disconnect()
                        }
                    }, [])
                }), (0, U.jsxs)(Dt, {
                    as: `div`,
                    disableEntryAnimation: !0,
                    isSticky: !0,
                    bottomBorder: u || !o && !c,
                    contentAfter: (0, U.jsx)(Kt, {
                        isComplete: a,
                        duration: i,
                        timestamp: t?.timestamp
                    }),
                    contentBefore: (0, U.jsx)(`button`, {
                        className: `text-token-text-tertiary`,
                        onClick: () => f(),
                        children: (0, U.jsx)(He, {
                            className: T(`icon transition-transform`, c && `rotate-90`)
                        })
                    }),
                    onClick: () => f(),
                    children: [(0, U.jsx)(Zt, {
                        isComplete: a,
                        message: en.run,
                        statusLogs: s
                    }), !c && n && (0, U.jsx)(Bt, {
                        isPreview: !0,
                        isHintResolved: r,
                        log: n
                    })]
                }), c && e]
            })
        }, $t = ({
            runMessages: e,
            onClickFix: t,
            onClickLineNumber: n,
            hints: r,
            isLast: i,
            includeContentBefore: a = !1
        }) => {
            let [o, s] = (0, Yt.useState)(!1), c = e.filter(e => e.type === L.ENVIRONMENT_STATUS), l = e.filter(xt), u = ae(e), d = u?.type === L.RUN_COMPLETE, f = d ? u.duration : null, p = l[0];
            if (d) {
                if (l.length === 0) return (0, U.jsx)(Dt, {
                    isHintOpen: o,
                    bottomBorder: !0,
                    contentBefore: a,
                    contentAfter: (0, U.jsx)(Kt, {
                        isComplete: d,
                        duration: f,
                        timestamp: p?.timestamp
                    }),
                    children: (0, U.jsx)(Zt, {
                        isComplete: d,
                        message: en.success,
                        statusLogs: c
                    })
                });
                if (l.length === 1 && p?.type === L.ERROR) {
                    let e = r.get(p.id);
                    return (0, U.jsxs)(Dt, {
                        hasHint: !!e,
                        isHintOpen: o,
                        bottomBorder: !0,
                        contentBefore: (a || !!e) && (0, U.jsx)(At, {
                            hint: e,
                            isOpen: o,
                            onOpenChange: s,
                            onClickFix: e => t?.(e, p.id, p.error)
                        }),
                        contentAfter: (0, U.jsx)(Pt, {
                            log: p,
                            onClick: n
                        }),
                        onClick: e && e.status !== B.RESOLVED && (() => s(!0)),
                        children: [(0, U.jsx)(Zt, {
                            isComplete: d,
                            message: en.run,
                            statusLogs: c
                        }), (0, U.jsx)(Rt, {
                            isResolved: e?.status === B.RESOLVED,
                            ...p
                        })]
                    })
                } else if (l.length === 1 && p && !Ct(l[0])) return (0, U.jsxs)(Dt, {
                    bottomBorder: !0,
                    contentBefore: a,
                    contentAfter: (0, U.jsx)(Pt, {
                        log: p,
                        onClick: n
                    }),
                    children: [(0, U.jsx)(Zt, {
                        isComplete: d,
                        message: en.run,
                        statusLogs: c
                    }), (0, U.jsx)(Bt, {
                        log: p
                    })]
                })
            }
            let m = ae(l.filter(e => e.type !== L.RUN_COMPLETE)),
                h = (m && r.get(m.id))?.status === B.RESOLVED;
            return (0, U.jsx)(Qt, {
                statusLogs: c,
                firstLog: e[0] ?? null,
                lastLog: m ?? null,
                duration: f,
                isComplete: d,
                isHintResolved: h,
                isLast: i,
                children: (0, U.jsx)(`ol`, {
                    children: l.map(e => (0, U.jsx)(Vt, {
                        log: e,
                        onClickLineNumber: n,
                        onClickFix: t,
                        hint: r.get(e.id)
                    }, e.id))
                })
            })
        }, en = _e({
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
    nn, W, rn, an = e((() => {
        bt(), tn(), St(), Tt(), je(), n(), nn = t(F()), W = M(), rn = ({
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
                u = (0, nn.useMemo)(() => Object.entries(Ce(e, `runId`)), [e]),
                d = u.some(([, e]) => {
                    let t = e.filter(xt);
                    return t.length > 1 || t.length === 1 && Ct(t[0])
                });
            return (0, W.jsxs)(W.Fragment, {
                children: [(0, W.jsx)(yt, {
                    title: a,
                    actions: o,
                    onClose: n,
                    showBorder: e.length > 0
                }), (0, W.jsx)(`div`, {
                    ref: t,
                    className: `bg-token-bg-primary flex flex-1 flex-col-reverse overflow-auto`,
                    children: (0, W.jsx)(`ol`, {
                        className: `flex flex-1 flex-col justify-start pb-4`,
                        style: {
                            paddingBottom: c
                        },
                        children: (0, W.jsx)(re, {
                            children: u.map(([e, t], n) => (0, W.jsx)($t, {
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
    on, sn, cn = e((() => {
        n(), on = M(), sn = ({
            onDrag: e,
            onDragEnd: t,
            onDoubleClick: n
        }) => (0, on.jsx)(D.div, {
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
    G, ln, un = e((() => {
        te(), ie(), n(), P(), G = M(), ln = ({
            textdocTitle: e,
            onClickViewConsole: t,
            onClickFix: n,
            onDismiss: r
        }) => (0, G.jsxs)(D.div, {
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
            children: [(0, G.jsxs)(`div`, {
                className: `flex items-start`,
                children: [(0, G.jsxs)(`div`, {
                    className: `flex flex-col gap-1`,
                    children: [(0, G.jsx)(`div`, {
                        className: `text-sm font-semibold`,
                        children: (0, G.jsx)(N, {
                            id: `ObCQBq`,
                            defaultMessage: `Cannot preview your code`
                        })
                    }), (0, G.jsx)(`div`, {
                        className: `text-sm`,
                        children: (0, G.jsx)(N, {
                            id: `3ZeoP8`,
                            defaultMessage: `An error occured while trying to run {name}`,
                            values: {
                                name: e
                            }
                        })
                    })]
                }), (0, G.jsx)(l, {
                    size: `small`,
                    color: `ghost`,
                    as: `button`,
                    className: `text-token-text-tertiary -m-1! aspect-square p-0!`,
                    onClick: r,
                    icon: g
                })]
            }), (0, G.jsxs)(`div`, {
                className: `flex items-center justify-end gap-2`,
                children: [(0, G.jsx)(l, {
                    size: `small`,
                    color: `secondary`,
                    onClick: t,
                    children: (0, G.jsx)(N, {
                        id: `Fch32I`,
                        defaultMessage: `View console`
                    })
                }), (0, G.jsx)(l, {
                    size: `small`,
                    color: `primary`,
                    onClick: n,
                    children: (0, G.jsx)(N, {
                        id: `HRfYX0`,
                        defaultMessage: `Fix bug`
                    })
                })]
            })]
        })
    })),
    dn, fn = e((() => {
        dn = (e, {
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
    pn, mn, hn = e((() => {
        r(), fn(), Ae(), me(), pn = new Ie({
            capacity: 5
        }), mn = async (e, t, n) => {
            let r = dn(t, n.error),
                i = O(pn.get(r));
            if (pn.get(r)) return i;
            let {
                hint: a
            } = await s.safePost(`/textdoc/{textdoc_id}/code/hint`, {
                parameters: {
                    path: {
                        textdoc_id: e
                    }
                },
                requestBody: {
                    error: r,
                    line: n.error.line ?? -1
                }
            });
            return pn.set(r, a), a
        }
    })),
    gn, _n, vn = e((() => {
        fn(), gn = `You're a professional developer highly skilled in debugging. The user ran the textdoc's code, and an error was thrown.
Please think carefully about how to fix the error`, _n = (e, t, n) => {
            let r = dn(e, n);
            return `
${gn}, and then rewrite the textdoc to fix it.

- NEVER change existing test cases unless they're clearly wrong.
- ALWAYS add more test cases if there aren't any yet.
- ALWAYS ask the user what the expected behavior is in the chat if the code is not clear.

${t?`# Hint\n\n${t}\n\n`:``}
# Error

${r}`.trim()
        }
    })),
    K, q, yn, bn = e((() => {
        tt(), nt(), an(), cn(), un(), hn(), jt(), vn(), Le(), A(), We(), u(), Ye(), n(), K = t(F()), P(), q = M(), yn = ({
            sandboxRef: e,
            textdocContent: t,
            textdocTitle: n,
            textdocId: r,
            isOpen: i,
            isTextdocAttachedPending: a,
            headerActions: o = [],
            highlightLine: s,
            createTextdocTurn: c,
            onOpenChange: l,
            ref: u
        }) => {
            "use no forget";
            let [d, f] = (0, K.useState)(!1), [m, h] = (0, K.useState)(!1), [g, _] = (0, K.useState)([]), [v, y] = (0, K.useState)(0), [b, x] = (0, K.useState)(null), [ee, S] = (0, K.useState)(null), [C, w] = (0, K.useState)(() => new Map), [T, te] = (0, K.useState)(320), E = (0, K.useRef)(null), O = Se();
            (0, K.useEffect)(() => S(null), [t]);
            let ne = g.filter(e => [L.LOG, L.ERROR, L.OUTPUT].includes(e.type)).length,
                k = (0, K.useEffectEvent)(() => {
                    y(ne)
                });
            (0, K.useEffect)(() => {
                i && k()
            }, [i]);
            let A = (0, K.useMemo)(() => {
                    for (let e = g.length - 1; e >= 0; e--) {
                        let t = g[e];
                        if (t.runId !== ee) return null;
                        if (t.type === L.ERROR) return t
                    }
                    return null
                }, [g, ee]),
                ie = (e, n, r) => {
                    let i = C.get(n);
                    if (i) {
                        let {
                            id: e,
                            content: t
                        } = i;
                        w(n => {
                            let r = new Map(n);
                            return r.set(e, {
                                id: e,
                                content: t,
                                status: B.RESOLVED
                            }), r
                        })
                    }
                    x(n), c({
                        sourceEvent: e,
                        action: rt.EDIT,
                        userMessageType: I.CONSOLE,
                        content: _n(t, i?.content ?? null, r)
                    })
                },
                ae = async (e, n) => {
                    if (!a) {
                        w(t => {
                            let n = new Map(t);
                            return n.set(e, {
                                id: e,
                                status: B.LOADING,
                                content: ``
                            }), n
                        });
                        try {
                            let i = await mn(r, t, n);
                            w(t => {
                                let n = new Map(t);
                                return n.set(e, {
                                    id: e,
                                    status: B.READY,
                                    content: i
                                }), n
                            })
                        } catch {
                            w(t => {
                                let n = new Map(t);
                                return n.delete(e), n
                            })
                        }
                    }
                }, oe = async (t, n) => {
                    let r = et(t, n),
                        i = $e(t, n),
                        a = Qe(t);
                    if (!r || !a && !i) return;
                    a && l?.(!0), h(!0), _(e => e.map(e => ({
                        ...e,
                        isStale: !0
                    })));
                    let o = !1,
                        c = ce(e.current).evalAsync({
                            code: n,
                            language: r
                        });
                    for await (let e of c) {
                        if (e.type === L.RUN_START && requestAnimationFrame(() => {
                                E.current?.scrollTo({
                                    top: 0,
                                    behavior: `smooth`
                                })
                            }), e.type === L.ERROR) {
                            if (e.line != null) {
                                let {
                                    line: t
                                } = e;
                                requestAnimationFrame(() => s(t))
                            }
                            o = !0, ae(e.id, e)
                        }
                        S(e.runId), _(t => [...t, {
                            ...e,
                            isStale: !1
                        }])
                    }
                    o && l?.(!0), h(!1)
                };
            (0, K.useImperativeHandle)(u, () => ({
                runCode: oe,
                stopCode: () => e.current?.stop()
            }));
            let se = !i && m,
                le = se && A && A.id !== b;
            return (0, q.jsxs)(re, {
                children: [d && (0, q.jsx)(`div`, {
                    className: `pointer-events-auto absolute inset-0 bg-transparent`
                }, `drag-overlay`), !le && se && ne > v && (0, q.jsx)(D.button, {
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
                    onClick: () => l?.(!0),
                    children: (0, q.jsxs)(`span`, {
                        className: `text-token-text-secondary flex items-center gap-1 text-sm`,
                        children: [(0, q.jsx)(p, {
                            className: `icon-sm`
                        }), (0, q.jsx)(N, {
                            id: `etzFTa`,
                            defaultMessage: `{numLogs, plural, one {{numLogs} message} other {{numLogs} messages}}`,
                            values: {
                                numLogs: ne
                            }
                        })]
                    })
                }, `view-console`), le && (0, q.jsx)(ln, {
                    textdocTitle: n,
                    onClickViewConsole: () => l?.(!0),
                    onDismiss: () => x(A.id),
                    onClickFix: e => {
                        ie(e, A.id, A.error)
                    }
                }, `error-modal`), i && (0, q.jsxs)(D.div, {
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
                    children: [(0, q.jsx)(sn, {
                        onDragEnd: () => f(!1),
                        onDrag: ({
                            delta: {
                                y: e
                            }
                        }) => {
                            f(!0), te(t => t - e)
                        }
                    }), (0, q.jsx)(`div`, {
                        className: `flex flex-col`,
                        style: {
                            height: T
                        },
                        children: (0, q.jsx)(rn, {
                            scrollRef: E,
                            messages: g,
                            onClose: () => l?.(!1),
                            onClickLineNumber: s,
                            onClickFix: ie,
                            title: O.formatMessage({
                                id: `P9VJDk`,
                                defaultMessage: `Console`
                            }),
                            headerActions: [...o, {
                                tooltip: O.formatMessage({
                                    id: `gAICYK`,
                                    defaultMessage: `Clear console`
                                }),
                                icon: Ge,
                                onClick: () => {
                                    y(0), _([]), w(new Map)
                                }
                            }],
                            hints: C
                        })
                    })]
                }, `console`)]
            })
        }
    }));

function xn(e, t) {
    let n = e.indexOf(t);
    return n !== -1 && e.indexOf(t, n + t.length) === -1
}

function J(e, t) {
    return Tn.test(e[t])
}

function Sn(e, t, n = !1) {
    if (t === 0 || n && J(e, t - 1)) return t;
    for (; t > 0 && J(e, t - 1);) t--;
    for (; t > 0 && !J(e, t - 1);) t--;
    return J(e, t) && t++, t
}

function Cn(e, t, n = !1) {
    if (t === e.length || n && J(e, t)) return t;
    for (; t < e.length && J(e, t);) t++;
    for (; t < e.length && !J(e, t);) t++;
    return J(e, t - 1) && t--, t
}

function wn(e, t, n = !0, r = En) {
    if (e.start < 0 || e.end > t.length || e.start > e.end) throw Error(`Invalid commentSourceRange provided.`);
    let i = t.substring(e.start, e.end),
        a = e.start,
        o = e.end;
    n && (a = Sn(t, a, !0), o = Cn(t, o, !0));
    let s = t.substring(a, e.start),
        c = t.substring(e.end, o),
        l = `${s}${i}${c}`;
    if (xn(t, l) && (r == null || l.length >= r)) return {
        before: s,
        after: c,
        allSurrounding: l
    };
    let u = a,
        d = o,
        f = !0;
    for (; f && (r == null || l.length < r);) {
        let n = !1,
            a = u > 0 ? Sn(t, u) : u;
        a < u && (u = a, n = !0);
        let o = d < t.length ? Cn(t, d) : d;
        if (o > d && (d = o, n = !0), n) {
            let n = t.substring(u, e.start),
                a = t.substring(e.end, d),
                o = `${n}${i}${a}`;
            if (xn(t, o) && (r == null || o.length >= r)) return {
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
var Tn, En, Dn = e((() => {
    Tn = /\s/, En = 30
}));

function On(e, t, n) {
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

function kn(e, t) {
    return e == null || t == null ? `entire document` : e === t.allSurrounding ? `selected text` : `surrounding context`
}

function An(e) {
    return `For the update pattern, create a regex which exactly matches \
the ${e}. Edit just this string in order to fullfill the user's request. NEVER rewrite the entire document. \
Instead, ALWAYS edit ONLY the ${e}. The only exception to this rule is if the ${e} includes markdown \
lists or tables. In that case, fully rewrite the document using ".*" as the regex update pattern.`.trim()
}

function jn(e, t, n, r) {
    if (!Pe(t) && n && r) {
        let t = kn(n, r);
        return `
${Ln}
The user requests that you directly edit the document.

${On(e,n,r)}

${Rn}
Use the update_textdoc tool to make this edit. ${An(t)}`.trim()
    }
    return `
${Ln}
The user requests that you directly edit the document.

${On(e,n,r)}

${Rn}
Use the update_textdoc tool to make this edit. You MUST fully rewrite the entire document \
by using ".*" as the update regex pattern.`.trim()
}

function Mn(e, t, n) {
    return `
${Ln}
The user requests that you add comments about some text.

${On(e,t,n)}

${Rn}
Do not respond to the user's question directly, just leave comments.`.trim()
}

function Nn(e, t) {
    return Pe(e) ? t === `entire document` ? ` If you choose to update the ${t}, you MUST fully rewrite the ${t} by using ".*" as the update regex pattern.` : ` If you choose to update the ${t}, you MUST fully rewrite the \
entire document by using ".*" as the update regex pattern. When you do so, ONLY modify the ${t} and rewrite \
other sections exactly as is, except for parts that must change based on this update` : t === `entire document` ? `` : ` If you choose to update the ${t}, follow these instructions: ${An(t)}`
}

function Pn(e, t, n, r) {
    let i = kn(n, r),
        a = Nn(t, i);
    return `
${Ln}
${On(e,n,r)}

${Rn}
The user would like you perform one of the following actions:
- Update the ${i} via the \`update_textdoc\` tool.${a}
- Explain the selected text via chat, or answer a general question about the selected text (no tool call required).
- Comment on the ${i} with feedback via the \`comment_textdoc\` tool. This should only be used if the user \
very explicitly asks for feedback, critique, or comments.

Based on the user's request, choose the appropriate action.
`.trim()
}

function Fn(e, t, n) {
    return `
${Ln}
${On(e,t,n)}

${Rn}
The user would like you to create a new textdoc.
`.trim()
}

function In(e, t, n, r = null, i = null) {
    switch (n) {
        case rt.ASK:
            return Pn(e, t, r, i);
        case rt.CREATE_TEXTDOC:
            return Fn(e, r, i);
        case rt.EDIT:
            return jn(e, t, r, i);
        case rt.COMMENT:
            return Mn(e, r, i)
    }
}
var Ln, Rn, zn = e((() => {
    nt(), Le(), Ln = `# Context`, Rn = `# Instructions`
}));

function Bn(e) {
    switch (e) {
        case I.ACCELERATOR:
        case I.CONSOLE:
        case I.ACCEPT_COMMENT:
        case I.HIVE_SPEAKER_EDIT:
            return !0;
        case I.ASK_CHATGPT:
        case I.FULL_SCREEN_SUBMIT:
            return !1
    }
}

function Vn(e, t) {
    switch (t) {
        case I.ASK_CHATGPT:
        case I.ACCEPT_COMMENT:
        case I.FULL_SCREEN_SUBMIT:
            return e.formatMessage(Wn.askChatGPT);
        case I.ACCELERATOR:
        case I.CONSOLE:
        case I.HIVE_SPEAKER_EDIT:
            return
    }
}
var Hn, Un, Wn, Gn = e((() => {
        Dn(), zn(), Le(), qe(), x(), k(), fe(), ue(), Hn = t(F()), P(), Un = (e, t) => {
            let n = Se(),
                r = _(() => de(e)),
                i = f();
            return (0, Hn.useCallback)(async ({
                content: a,
                sourceRange: o,
                action: s,
                userMessageType: c,
                acceleratorMetadata: l,
                selectionMetadata: u,
                sourceEvent: d
            }) => {
                if (t?.versionInt == null || i) return;
                let {
                    textdocId: f,
                    type: p,
                    versionInt: m,
                    content: h
                } = t, g, _ = null;
                o && o.start !== o.end && (g = h.slice(o.start, o.end), _ = wn(o, h));
                let v = ge(In(f, p, s, g, _), {
                    exclude_after_next_user_message: !0
                });
                Ke({
                    callsiteId: `request_completion.canvas.textdoc.use_create_textdoc_turn.1`,
                    conversation: e,
                    sourceEvent: d,
                    promptMessage: S(a, {
                        canvas: {
                            textdoc_id: f,
                            textdoc_type: p,
                            version: m,
                            textdoc_content_length: h.length,
                            user_message_type: c,
                            accelerator_metadata: l,
                            selection_metadata: u
                        },
                        is_visually_hidden_from_conversation: Bn(c),
                        targeted_reply: g,
                        targeted_reply_label: Vn(n, c),
                        open_in_canvas_view: {
                            type: `canvas_textdoc`,
                            id: f
                        }
                    }),
                    completionMetadata: r ? {
                        conversationMode: r
                    } : void 0,
                    appendMessages: [v]
                })
            }, [t, i, e, r, n])
        }, Wn = _e({
            askChatGPT: {
                id: `h5ANdM`,
                defaultMessage: `Asked ChatGPT`
            }
        })
    })),
    Y, X, Kn, qn, Jn, Yn, Xn, Zn, Qn, $n, er, tr, nr = e((() => {
        ze(), gt(), d(), C(), n(), Y = t(F(), 1), b(), pt(), X = M(), Kn = (e, t, n = 1) => {
            c(e.scrollTop, t, {
                duration: n,
                ease: `easeInOut`,
                onUpdate: t => {
                    e.scrollTop = t
                }
            })
        }, qn = j.div`flex w-full grow flex-col gap-1 rounded-xl p-2 pe-5 text-sm`, Jn = j.input`ms-[-2px] w-auto rounded-none border-none bg-[#E5F3FF] p-0 px-0.5 text-sm font-semibold outline-none focus:outline-none`, Yn = j(D.span)`start border-token-text-tertiary absolute -bottom-0.5 w-full origin-start border-b border-solid`, Xn = j(D.span)`start border-token-text-tertiary absolute -bottom-0.5 w-full border-b border-dashed`, Zn = j.div`w-full loading-results-shimmer bg-token-bg-secondary h-2 rounded-full`, Qn = () => (0, X.jsxs)(qn, {
            className: `gap-2`,
            children: [` `, (0, X.jsx)(Zn, {
                className: `w-[48px]`
            }), ` `, (0, X.jsx)(Zn, {}), ` `, (0, X.jsx)(Zn, {}), ` `, (0, X.jsx)(Zn, {
                className: `w-1/2`
            })]
        }), $n = {
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
        }, er = {
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
        }, j.div`ms-2 rounded-full px-2 py-0.5 text-xs font-medium`, tr = ({
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
            let l = (0, Y.useRef)(null),
                {
                    setSpeakers: u,
                    setEditingSpeaker: d,
                    hoveringSpeakerId: f,
                    setHoveringSpeakerId: p,
                    speakers: m,
                    editingSpeaker: h,
                    enableDebugger: g
                } = ht.getState(),
                _ = ht(e => e.currentTime),
                v = n.max == null ? _ === n.min : _ >= n.min && _ <= n.max;
            (0, Y.useEffect)(() => {
                if (v && l.current && o.current) {
                    let e = o.current,
                        t = l.current,
                        n = e.getBoundingClientRect().top,
                        r = t.getBoundingClientRect().top - n + e.scrollTop - 20;
                    Kn(e, r, .3)
                }
            }, [n.min, n.max, v, o]);
            let b = m.get(e),
                x = !!b?.storedName && b.storedName !== b?.placeholderName || (b?.isEdited ?? !1),
                ee = b?.name ?? b?.storedName ?? b?.placeholderName ?? `Unidentified Speaker`,
                S = (0, Y.useRef)(null),
                C = e === h?.id,
                w = e === f,
                [te, E] = (0, Y.useState)(!1),
                [D, O] = (0, Y.useState)(!1);
            (0, Y.useEffect)(() => {
                S.current && (!C || !D || (S.current?.focus(), x && (S.current.value = ee)))
            }, [x, C, D, ee]), y(() => {
                if (s?.current && S.current) {
                    let e = s.current.offsetWidth;
                    S.current.style.width = `${e}px`
                }
            }, [h?.name]);
            let ne = (0, Y.useCallback)(() => {
                    if (!h || !b) return;
                    d(null), O(!1), E(!1), p(null);
                    let t = m.set(e, {
                        ...b,
                        name: h.name ? h.name : b.placeholderName,
                        isEdited: !!h.name
                    });
                    u(t)
                }, [h, b, d, p, m, e, u]),
                k = !i || a;
            return (0, X.jsxs)(qn, {
                ref: l,
                className: T(v && `animate-[hive-log-fadeout_0.3s_1.5s_forwards] bg-blue-500/10`, !1, !1),
                children: [!1, (0, X.jsxs)(`div`, {
                    className: `mb-[1px] flex w-full items-center justify-between`,
                    children: [c && (C ? (0, X.jsx)(Jn, {
                        ref: S,
                        disabled: !D,
                        onBlur: ne,
                        className: T(!C && `hidden w-0`),
                        placeholder: b?.isEdited ? void 0 : b?.placeholderName,
                        value: h?.name,
                        onKeyDown: e => {
                            e.key === `Enter` && ne()
                        },
                        onChange: t => d({
                            id: e,
                            name: t.target.value
                        })
                    }) : (0, X.jsxs)(`div`, {
                        className: `flex items-center gap-1`,
                        children: [(0, X.jsxs)(`div`, {
                            onClick: () => {
                                k || (d({
                                    id: e,
                                    name: x ? ee : ``
                                }), O(!0))
                            },
                            onMouseEnter: () => {
                                k || (p(e), E(!0))
                            },
                            onMouseLeave: () => {
                                k || (p(null), E(!1))
                            },
                            className: T(`relative flex font-semibold transition-colors`, {
                                "text-blue-400!": w && !k
                            }, {
                                "cursor-pointer": !k
                            }, {
                                "text-token-text-tertiary": !k && !x
                            }),
                            children: [ee, !k && !x && (0, X.jsxs)(X.Fragment, {
                                children: [(0, X.jsx)(Yn, {
                                    ...$n
                                }), (0, X.jsx)(Xn, {
                                    ...er,
                                    className: T(w && !k && `border-blue-400!`)
                                })]
                            })]
                        }), te && !k && (0, X.jsx)(Be, {
                            className: `h-4 w-4 text-blue-400`
                        }), !1]
                    })), (0, X.jsx)(`div`, {
                        className: `text-xs text-[#5D5D5D]`,
                        children: _t(n.min)
                    })]
                }), (0, X.jsx)(`div`, {
                    className: `flex`,
                    children: t
                })]
            })
        }
    })),
    Z, Q, rr, ir, ar, or, sr, cr, lr, ur, dr, fr, pr, mr, hr, gr, _r, vr, yr, br, xr, Sr, $, Cr = e((() => {
        te(), nt(), Le(), Gn(), Te(), a(), we(), ze(), v(), pe(), ee(), E(), De(), k(), oe(), me(), be(), C(), n(), Z = t(F(), 1), P(), b(), gt(), nr(), pt(), Q = M(), rr = e => ve({
            queryKey: [`sharedHiveLog`, e],
            queryFn: () => s.safeGet(`/hive/textdoc/shared/{shared_textdoc_id}/transcript`, {
                parameters: {
                    path: {
                        shared_textdoc_id: e
                    }
                }
            }),
            select: mt
        }), ir = (e, t = !0) => ve({
            queryKey: [`hiveLog`, e],
            queryFn: () => s.safeGet(`/hive/{hive_id}/transcript`, {
                parameters: {
                    path: {
                        hive_id: e
                    }
                }
            }),
            enabled: !!e && t,
            select: mt
        }), ar = `openai-voice-transcript-with-meeting-speaker-names`, or = e => e.length === 0 ? null : e.find(e => e.id === ar) ?? e[0], sr = e => {
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
        }, cr = e => ve({
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
                    n = or(t.feeds ?? []);
                return n ? sr(n) : null
            },
            enabled: !!e
        }), lr = () => ve({
            queryKey: [`hiveLogPrompts`],
            queryFn: () => s.safeGet(`/hive/prompts`, {}),
            enabled: !0
        }), ur = (e, t) => s.safePost(`/hive/{hive_id}/speakers`, {
            parameters: {
                path: {
                    hive_id: e
                }
            },
            requestBody: {
                speakers: t
            }
        }), dr = j.div`invisible absolute start-0 top-0 rounded-md border px-0.5 text-sm font-semibold whitespace-pre`, fr = (e, t) => !t || !e ? `` : t.isEdited || e.name && e.name !== t.placeholderName ? e.name : t.placeholderName, pr = () => (0, Q.jsx)(ne, {
            children: (0, Q.jsx)(N, {
                ...$.researchPreview
            })
        }), mr = j.div`flex h-full w-full max-w-[360px] min-w-[240px] flex-col border-s border-gray-200`, hr = j.div`flex w-full max-w-[360px] min-w-[240px] flex-col border-s border-gray-200`, gr = j.div`bg-token-bg-primary mt-[0.5px] flex h-18 w-full items-center justify-between border-b-[0.5px] border-gray-200 p-4`, _r = j.div`flex h-full w-full flex-col gap-2 overflow-y-auto p-2`, vr = j(D.div)`flex items-center gap-2`, yr = {
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
        }, br = ({
            sharedTextDocId: e
        }) => {
            let t = rr(e),
                n = (0, Z.useRef)(null),
                r = _(se),
                {
                    selectedFilters: a,
                    isOpen: s,
                    currentTime: c,
                    closeSidebar: l
                } = ht(),
                u = (0, Z.useMemo)(() => t.data?.filter(({
                    filterDecision: e
                }) => !e || a?.includes(e)), [t.data, a]);
            if (t.isError) return null;
            let d = (0, Q.jsxs)(`div`, {
                    className: `text-token-text-secondary flex items-center gap-1.5 px-2 py-2 text-base font-medium md:px-0`,
                    children: [(0, Q.jsx)(N, {
                        ...$.transcript
                    }), (0, Q.jsx)(pr, {})]
                }),
                f = (0, Q.jsxs)(Q.Fragment, {
                    children: [t.isLoading && Array.from({
                        length: 16
                    }).map((e, t) => (0, Q.jsx)(Qn, {}, `loading-${t}`)), u?.map(e => (0, Q.jsx)(tr, {
                        isEditingEnabled: !1,
                        containerRef: n,
                        ...e
                    }, Sr(e)))]
                });
            return !s || typeof c != `number` ? null : r ? (0, Q.jsxs)(hr, {
                children: [(0, Q.jsxs)(gr, {
                    children: [d, (0, Q.jsx)(o, {
                        onClick: l
                    })]
                }), (0, Q.jsx)(_r, {
                    ref: n,
                    children: f
                })]
            }) : (0, Q.jsx)(i, {
                contentRef: n,
                testId: `modal-shared-canvas-transcript-modal`,
                isOpen: s,
                title: d,
                contentClassName: `overflow-y-auto gap-2 p-2 flex flex-col`,
                showCloseButton: !0,
                onClose: l,
                children: f
            })
        }, xr = ({
            hiveId: e,
            conversation: t,
            ts: n,
            textdocVersion: r
        }) => {
            let i = r.metadata?.record_meeting_id ?? void 0,
                a = cr(i),
                o = i == null || a.isError || !a.isLoading && a.data == null,
                s = ir(e, o),
                c = lr(),
                u = Se(),
                [d, f] = (0, Z.useState)(!1),
                p = (0, Z.useRef)(null),
                {
                    isOpen: m,
                    closeSidebar: g,
                    openSidebar: _,
                    setCurrentTime: v,
                    speakers: y,
                    setSpeakers: b,
                    editingSpeaker: x,
                    enableDebugger: ee,
                    setEnableDebugger: S,
                    selectedFilters: C,
                    setSelectedFilters: te
                } = ht();
            (0, Z.useEffect)(() => {
                n !== void 0 && (_(), v(n))
            }, [n, _, v]);
            let E = (0, Z.useRef)(null),
                [D, O] = (0, Z.useState)(!1),
                ne = Un(t, r),
                k = a.data ?? null,
                A = k != null;
            if ((0, Z.useEffect)(() => {
                    A && d && f(!1)
                }, [d, A]), (0, Z.useEffect)(() => {
                    k && b(new Map(k.speakers))
                }, [k, b]), a.isLoading && !k || !A && (s.isLoading || c.isLoading || s.isError || c.isError || !s.data || !c.data)) return null;
            let ie = x ? y.get(x.id) : null,
                ae = Array.from(y.values()).some(({
                    isEdited: e
                }) => e),
                oe = () => {
                    let e = new Map(Array.from(y.entries()).map(([e, t]) => [e, {
                        ...t,
                        name: void 0,
                        isEdited: !1
                    }]));
                    b(e), f(!1)
                },
                se = e => {
                    let t = c.data?.speaker_edits;
                    if (!t) return;
                    let n = t.replace(`{speakers}`, JSON.stringify(Array.from(y.entries())));
                    return ne({
                        sourceEvent: e,
                        action: rt.EDIT,
                        content: n,
                        userMessageType: I.HIVE_SPEAKER_EDIT,
                        selectionMetadata: void 0
                    })
                },
                ce = async t => {
                    if (ae) {
                        O(!0);
                        try {
                            let n = [];
                            Array.from(y.entries()).forEach(([e, t]) => {
                                !t.isEdited || !t.name || n.push({
                                    id: e,
                                    updated_name: t.name
                                })
                            });
                            let r = await ur(e, n);
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
                            await se(t), b(i), f(!1)
                        } catch {} finally {
                            O(!1)
                        }
                    }
                }, le = s.data ?? [], ue = A ? k.rows : le.filter(({
                    filterDecision: e
                }) => !e || C?.includes(e));
            return (0, Q.jsxs)(mr, {
                className: T(m ? `visible` : `invisible hidden`),
                children: [(0, Q.jsxs)(`div`, {
                    className: `flex h-14 w-full items-center justify-between border-b border-gray-200 p-4`,
                    children: [(0, Q.jsxs)(`div`, {
                        className: `text-token-text-secondary group/debug flex items-center gap-1.5 py-2 text-base font-medium`,
                        children: [(0, Q.jsx)(N, {
                            ...$[d ? `edit` : `transcript`]
                        }), (0, Q.jsx)(pr, {}), !1]
                    }), (0, Q.jsx)(`div`, {
                        className: `flex h-10 items-center gap-2`,
                        children: A ? (0, Q.jsx)(Oe, {
                            icon: h.Cross,
                            onClick: () => g()
                        }) : (0, Q.jsx)(re, {
                            mode: `wait`,
                            children: d ? (0, Q.jsxs)(vr, {
                                ...yr,
                                children: [(0, Q.jsx)(l, {
                                    onClick: oe,
                                    color: `secondary`,
                                    disabled: D,
                                    children: (0, Q.jsx)(N, {
                                        ...$.cancelButton
                                    })
                                }), (0, Q.jsx)(l, {
                                    color: `primary`,
                                    onClick: ce,
                                    disabled: !ae,
                                    loading: D,
                                    children: (0, Q.jsx)(N, {
                                        ...$.saveButton
                                    })
                                })]
                            }, `edit-buttons`) : (0, Q.jsxs)(vr, {
                                ...yr,
                                children: [(0, Q.jsx)(w, {
                                    className: `h-10`,
                                    label: u.formatMessage($.editButtonTooltip),
                                    children: (0, Q.jsx)(Oe, {
                                        icon: Be,
                                        onClick: () => f(!0)
                                    })
                                }), (0, Q.jsx)(Oe, {
                                    icon: h.Cross,
                                    onClick: () => g()
                                })]
                            }, `non-edit-buttons`)
                        })
                    })]
                }), !1, (0, Q.jsxs)(_r, {
                    ref: p,
                    children: [x && (0, Q.jsx)(dr, {
                        ref: E,
                        children: fr(x, ie)
                    }), ue.map(e => (0, Q.jsx)(tr, {
                        isEditingEnabled: !0,
                        measuredTextContainerRef: E,
                        containerRef: p,
                        isEditing: !A && d,
                        isSaving: !A && D,
                        ...e
                    }, Sr(e)))]
                })]
            })
        }, Sr = e => {
            let {
                speakerId: t,
                content: n,
                range: r
            } = e;
            return `${t}-${r.min}-${r.max}-${n.slice(0,2)}`
        }, $ = _e({
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
    Un as a, Gn as i, xr as n, yn as o, Cr as r, bn as s, br as t
};
//# sourceMappingURL=d3304073-b687t8r45z8rgz7f.js.map