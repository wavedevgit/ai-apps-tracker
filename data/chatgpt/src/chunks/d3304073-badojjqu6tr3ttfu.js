import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as n,
    At as r,
    B6 as i,
    BK as a,
    Cc as o,
    Gt as s,
    My as c,
    NK as l,
    O$ as u,
    OZ as d,
    a7 as f,
    aE as p,
    b5 as m,
    cn as h,
    cw as g,
    dot as _,
    ex as v,
    fZ as y,
    fh as b,
    hn as x,
    i5 as S,
    iw as C,
    jy as w,
    k$ as ee,
    kT as T,
    l7 as E,
    l8 as D,
    lw as te,
    mZ as O,
    mz as k,
    nP as A,
    oE as ne,
    ow as j,
    pP as re,
    ph as ie,
    pz as ae,
    qb as oe,
    r7 as se,
    sw as ce,
    u8 as le,
    uot as ue,
    uw as de,
    vN as fe,
    w8 as pe,
    wc as me,
    y5 as M,
    yN as he
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as N,
    Ln as ge,
    Nn as P,
    O as _e,
    Rn as F,
    Vn as I,
    kn as ve,
    s as ye,
    wn as be,
    zn as xe
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Bdn as Se,
    C0t as Ce,
    Kpn as we,
    QGn as Te,
    S0t as Ee,
    T0t as De,
    THn as Oe,
    Wpn as L,
    Ypn as ke,
    mPn as Ae,
    nUn as je,
    pPn as Me,
    rUn as Ne,
    x0t as Pe,
    y0t as Fe,
    zdn as Ie
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    CC as Le,
    Fx as Re,
    Ix as ze,
    Qy as Be,
    SC as Ve,
    Sv as He,
    Zy as Ue,
    xv as We
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    Om as Ge,
    km as Ke
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    n as qe,
    r as R
} from "./2ea88c7a-lxyla91xs6iv7odf.js";
import {
    t as Je
} from "./8d846022-bvik3sltoydb2o43.js";
import {
    n as Ye,
    t as Xe
} from "./c8f38d6c-bvzrbm7q7ua6zic8.js";
import {
    c as Ze,
    l as Qe,
    o as $e,
    s as et
} from "./cc445a0e-jju75u42jeqwnklg.js";
import {
    i as tt,
    r as nt
} from "./dced7e81-jzt06wdzz118ufvf.js";
import {
    n as rt,
    t as it
} from "./5422a199-ohc0ujx944q7esd3.js";
import {
    n as at,
    t as ot
} from "./e1a66d2b-dob1j28wge0fmdz8.js";
import {
    C as st,
    E as ct,
    S as lt,
    T as ut,
    b as dt
} from "./df59e297-cim8xjtcq0aw73x8.js";
import {
    a as ft,
    i as pt,
    o as mt,
    r as ht,
    t as gt
} from "./e74608d1-dt01dghzxq7a4jy8.js";
var _t, vt, yt, bt = e((() => {
        n(), k(), c(), m(), _t = N(), {
            Cross: vt
        } = ae, yt = ({
            onClose: e,
            title: t,
            actions: n,
            showBorder: r = !1
        }) => (0, _t.jsxs)(`div`, {
            className: M(`bg-token-bg-primary flex items-center justify-between border-b py-2 ps-2 pe-2.5`, {
                "border-token-border-light": r,
                "border-transparent": !r
            }),
            children: [(0, _t.jsx)(`div`, {
                className: `text-token-text-primary flex items-center gap-2 ps-4 text-sm select-none`,
                children: t
            }), (0, _t.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [n.map(({
                    tooltip: e,
                    icon: t,
                    onClick: n
                }, r) => {
                    let i = (0, _t.jsx)(T, {
                        size: `small`,
                        color: `ghost`,
                        as: `button`,
                        className: `text-token-text-primary aspect-square p-1!`,
                        icon: t,
                        onClick: n
                    }, r);
                    return e ? (0, _t.jsx)(w, {
                        label: e,
                        children: i
                    }, r) : i
                }), (0, _t.jsx)(T, {
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
        le(), Je(), xt = e => D([R.ERROR, R.LOG, R.OUTPUT], e.type)
    })),
    Ct, wt, Tt = e((() => {
        it(), Je(), Ct = e => e.type === R.OUTPUT && wt(e.output), wt = e => rt(e)
    })),
    Et, Dt, Ot = e((() => {
        m(), r(), Et = N(), Dt = ({
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
            return (0, Et.jsxs)(e === `div` ? h.div : h.li, {
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
                className: M(`bg-token-bg-primary flex items-start justify-between py-1.5 ps-6 pe-4 font-mono text-sm whitespace-pre`, a && `border-token-border-xlight border-b`, s && `sticky top-0 z-10`, u && `cursor-pointer`, u && i && `hover:bg-red-500/10`, u && !i && `hover:bg-gray-50 dark:hover:bg-gray-700`, i && o && `bg-red-500/10`),
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
        ct(), st(), Be(), De(), r(), kt = t(I()), F(), z = N(), B = function(e) {
            return e.LOADING = `loading`, e.READY = `ready`, e.RESOLVED = `resolved`, e
        }({}), At = ({
            hint: e,
            onClickFix: t,
            isOpen: n,
            onOpenChange: r
        }) => {
            let i = (0, kt.useRef)(null),
                a = xe();
            return e ? (0, z.jsx)(`div`, {
                className: `relative flex items-center font-sans`,
                onClick: e => e.stopPropagation(),
                children: (0, z.jsxs)(Ee, {
                    open: n,
                    onOpenChange: r,
                    children: [(0, z.jsx)(Ce, {
                        asChild: !0,
                        ref: i,
                        children: e.status === `resolved` ? (0, z.jsx)(`div`, {
                            className: `flex h-5 w-5 items-center`,
                            children: (0, z.jsx)(Ue, {
                                className: `text-token-text-tertiary`,
                                size: 16
                            })
                        }) : (0, z.jsx)(`button`, {
                            className: `h-5 w-5`,
                            disabled: e.status === `loading`,
                            children: e.status === `loading` ? (0, z.jsx)(ut, {}) : (0, z.jsx)(dt, {
                                position: `static`,
                                isError: !0,
                                count: 1,
                                offsetY: 0
                            })
                        })
                    }), (0, z.jsx)(x, {
                        children: n && (0, z.jsx)(Pe, {
                            forceMount: !0,
                            container: i.current?.ownerDocument.body,
                            children: (0, z.jsx)(Fe, {
                                side: `top`,
                                align: `start`,
                                alignOffset: -4,
                                sideOffset: 10,
                                children: (0, z.jsx)(lt, {
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
        Mt = N(), Nt = `module:`, Pt = ({
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
        le(), Tt(), Ot(), jt(), Ye(), Ft(), Je(), m(), It = t(I()), F(), V = N(), Lt = ({
            isPreview: e = !1,
            log: t,
            level: n
        }) => (0, V.jsxs)(`span`, {
            className: M(`text-token-text-primary flex min-w-0 flex-wrap gap-1`, e ? `shrink truncate` : `whitespace-pre-wrap`, n === `warn` && `text-yellow-600`),
            children: [n === `warn` && `[warn]: `, typeof t == `string` ? t : t.map((t, n) => (0, V.jsx)(Xe, {
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
                className: M(`whitespace-pre-wrap`, n ? `text-token-text-primary` : `text-red-500`),
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
            let n = xe();
            return e == null ? null : wt(e) ? (0, V.jsx)(`img`, {
                alt: n.formatMessage(Ht.imgAlt),
                className: M(t && `border-token-border-xlight h-6 rounded-lg border`),
                src: e
            }) : (0, V.jsx)(`span`, {
                className: `flex items-center gap-2`,
                children: pe(e)
            })
        }, Bt = ({
            log: e,
            isHintResolved: t,
            isPreview: n = !1
        }) => {
            switch (e.type) {
                case R.LOG:
                    return (0, V.jsx)(Lt, {
                        isPreview: n,
                        ...e
                    });
                case R.ERROR:
                    return (0, V.jsx)(Rt, {
                        isPreview: n,
                        isResolved: t,
                        ...e
                    });
                case R.OUTPUT:
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
            if (e.type === R.RUN_COMPLETE) return null;
            let s = i?.status === B.RESOLVED;
            return (0, V.jsx)(Dt, {
                hasHint: e.type === R.ERROR && i?.status === B.READY,
                isHintOpen: a,
                bottomBorder: !0,
                onClick: i && !s && (() => o(!0)),
                contentBefore: (0, V.jsx)(At, {
                    hint: i,
                    isOpen: a,
                    onOpenChange: o,
                    onClickFix: t => e.type === R.ERROR && i && n?.(t, i.id, e.error)
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
        }, Ht = ge({
            imgAlt: {
                id: `L6t7Yb`,
                defaultMessage: `Plot`
            }
        })
    })),
    Wt, H, Gt, Kt, qt = e((() => {
        at(), c(), Wt = t(I()), F(), H = N(), Gt = ({
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
                label: (0, H.jsx)(P, {
                    id: `bFO21A`,
                    defaultMessage: `Code ran {count, plural, =0 {instantly} one {in # second} other {in # seconds}}`,
                    values: {
                        count: Math.floor(t / 1e3)
                    }
                }),
                children: (0, H.jsx)(`span`, {
                    className: `text-token-text-tertiary`,
                    children: r >= 60 ? (0, H.jsx)(ve, {
                        value: -r,
                        updateIntervalInSeconds: 60,
                        numeric: `auto`
                    }) : (0, H.jsx)(P, {
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
            children: (0, H.jsx)(P, {
                id: `EMebM9`,
                defaultMessage: `Stopped`
            })
        }) : (0, H.jsx)(ot, {
            gap: 2
        })
    })),
    Jt, Yt, U, Xt, Zt, Qt, $t, en, tn = e((() => {
        Jt = be(), St(), Tt(), Ut(), Ot(), jt(), Ft(), qt(), at(), Le(), Je(), m(), u(), r(), Yt = t(I()), F(), U = N(), Xt = e => {
            switch (e) {
                case qe.INITIALIZING:
                    return (0, U.jsx)(P, {
                        id: `J183Z0`,
                        defaultMessage: `initializing environment`
                    });
                case qe.INSTALLING_PACKAGES:
                    return (0, U.jsx)(P, {
                        id: `21sQ8o`,
                        defaultMessage: `installing packages`
                    });
                case qe.RUNNING_CODE:
                    return (0, U.jsx)(P, {
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
                let e = ee(i),
                    o;
                t[4] === n ? o = t[5] : (o = (0, U.jsx)(`span`, {
                    className: `text-token-text-secondary font-semibold`,
                    children: (0, U.jsx)(P, {
                        ...n
                    })
                }), t[4] = n, t[5] = o), a = (0, U.jsxs)(`span`, {
                    className: `flex items-center`,
                    children: [o, !r && e && (0, U.jsxs)(h.span, {
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
                        children: [Xt(e.status), (0, U.jsx)(ot, {
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
                        children: (0, U.jsx)(Ve, {
                            className: M(`icon transition-transform`, c && `rotate-90`)
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
            let [o, s] = (0, Yt.useState)(!1), c = e.filter(e => e.type === R.ENVIRONMENT_STATUS), l = e.filter(xt), u = ee(e), d = u?.type === R.RUN_COMPLETE, f = d ? u.duration : null, p = l[0];
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
                if (l.length === 1 && p?.type === R.ERROR) {
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
            let m = ee(l.filter(e => e.type !== R.RUN_COMPLETE)),
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
        }, en = ge({
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
        bt(), tn(), St(), Tt(), Ae(), r(), nn = t(I()), W = N(), rn = ({
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
                u = (0, nn.useMemo)(() => Object.entries(Me(e, `runId`)), [e]),
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
                        children: (0, W.jsx)(x, {
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
        r(), on = N(), sn = ({
            onDrag: e,
            onDragEnd: t,
            onDoubleClick: n
        }) => (0, on.jsx)(h.div, {
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
        n(), de(), r(), F(), G = N(), ln = ({
            textdocTitle: e,
            onClickViewConsole: t,
            onClickFix: n,
            onDismiss: r
        }) => (0, G.jsxs)(h.div, {
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
                        children: (0, G.jsx)(P, {
                            id: `ObCQBq`,
                            defaultMessage: `Cannot preview your code`
                        })
                    }), (0, G.jsx)(`div`, {
                        className: `text-sm`,
                        children: (0, G.jsx)(P, {
                            id: `3ZeoP8`,
                            defaultMessage: `An error occured while trying to run {name}`,
                            values: {
                                name: e
                            }
                        })
                    })]
                }), (0, G.jsx)(T, {
                    size: `small`,
                    color: `ghost`,
                    as: `button`,
                    className: `text-token-text-tertiary -m-1! aspect-square p-0!`,
                    onClick: r,
                    icon: te
                })]
            }), (0, G.jsxs)(`div`, {
                className: `flex items-center justify-end gap-2`,
                children: [(0, G.jsx)(T, {
                    size: `small`,
                    color: `secondary`,
                    onClick: t,
                    children: (0, G.jsx)(P, {
                        id: `Fch32I`,
                        defaultMessage: `View console`
                    })
                }), (0, G.jsx)(T, {
                    size: `small`,
                    color: `primary`,
                    onClick: n,
                    children: (0, G.jsx)(P, {
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
        le(), fn(), Se(), E(), pn = new Ie({
            capacity: 5
        }), mn = async (e, t, n) => {
            let r = dn(t, n.error),
                i = pe(pn.get(r));
            if (pn.get(r)) return i;
            let {
                hint: a
            } = await f.safePost(`/textdoc/{textdoc_id}/code/hint`, {
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
        et(), tt(), an(), cn(), un(), hn(), jt(), vn(), we(), b(), We(), ue(), Je(), r(), K = t(I()), F(), q = N(), yn = ({
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
            let [d, f] = (0, K.useState)(!1), [p, m] = (0, K.useState)(!1), [g, v] = (0, K.useState)([]), [y, b] = (0, K.useState)(0), [S, C] = (0, K.useState)(null), [w, ee] = (0, K.useState)(null), [T, E] = (0, K.useState)(() => new Map), [D, te] = (0, K.useState)(320), O = (0, K.useRef)(null), k = xe();
            (0, K.useEffect)(() => ee(null), [t]);
            let A = g.filter(e => [R.LOG, R.ERROR, R.OUTPUT].includes(e.type)).length,
                ne = (0, K.useEffectEvent)(() => {
                    b(A)
                });
            (0, K.useEffect)(() => {
                i && ne()
            }, [i]);
            let j = (0, K.useMemo)(() => {
                    for (let e = g.length - 1; e >= 0; e--) {
                        let t = g[e];
                        if (t.runId !== w) return null;
                        if (t.type === R.ERROR) return t
                    }
                    return null
                }, [g, w]),
                re = (e, n, r) => {
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
                                status: B.RESOLVED
                            }), r
                        })
                    }
                    C(n), c({
                        sourceEvent: e,
                        action: nt.EDIT,
                        userMessageType: L.CONSOLE,
                        content: _n(t, i?.content ?? null, r)
                    })
                },
                ae = async (e, n) => {
                    if (!a) {
                        E(t => {
                            let n = new Map(t);
                            return n.set(e, {
                                id: e,
                                status: B.LOADING,
                                content: ``
                            }), n
                        });
                        try {
                            let i = await mn(r, t, n);
                            E(t => {
                                let n = new Map(t);
                                return n.set(e, {
                                    id: e,
                                    status: B.READY,
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
                }, oe = async (t, n) => {
                    let r = $e(t, n),
                        i = Qe(t, n),
                        a = Ze(t);
                    if (!r || !a && !i) return;
                    a && l?.(!0), m(!0), v(e => e.map(e => ({
                        ...e,
                        isStale: !0
                    })));
                    let o = !1,
                        c = _(e.current).evalAsync({
                            code: n,
                            language: r
                        });
                    for await (let e of c) {
                        if (e.type === R.RUN_START && requestAnimationFrame(() => {
                                O.current?.scrollTo({
                                    top: 0,
                                    behavior: `smooth`
                                })
                            }), e.type === R.ERROR) {
                            if (e.line != null) {
                                let {
                                    line: t
                                } = e;
                                requestAnimationFrame(() => s(t))
                            }
                            o = !0, ae(e.id, e)
                        }
                        ee(e.runId), v(t => [...t, {
                            ...e,
                            isStale: !1
                        }])
                    }
                    o && l?.(!0), m(!1)
                };
            (0, K.useImperativeHandle)(u, () => ({
                runCode: oe,
                stopCode: () => e.current?.stop()
            }));
            let se = !i && p,
                ce = se && j && j.id !== S;
            return (0, q.jsxs)(x, {
                children: [d && (0, q.jsx)(`div`, {
                    className: `pointer-events-auto absolute inset-0 bg-transparent`
                }, `drag-overlay`), !ce && se && A > y && (0, q.jsx)(h.button, {
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
                        children: [(0, q.jsx)(ie, {
                            className: `icon-sm`
                        }), (0, q.jsx)(P, {
                            id: `etzFTa`,
                            defaultMessage: `{numLogs, plural, one {{numLogs} message} other {{numLogs} messages}}`,
                            values: {
                                numLogs: A
                            }
                        })]
                    })
                }, `view-console`), ce && (0, q.jsx)(ln, {
                    textdocTitle: n,
                    onClickViewConsole: () => l?.(!0),
                    onDismiss: () => C(j.id),
                    onClickFix: e => {
                        re(e, j.id, j.error)
                    }
                }, `error-modal`), i && (0, q.jsxs)(h.div, {
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
                            height: D
                        },
                        children: (0, q.jsx)(rn, {
                            scrollRef: O,
                            messages: g,
                            onClose: () => l?.(!1),
                            onClickLineNumber: s,
                            onClickFix: re,
                            title: k.formatMessage({
                                id: `P9VJDk`,
                                defaultMessage: `Console`
                            }),
                            headerActions: [...o, {
                                tooltip: k.formatMessage({
                                    id: `gAICYK`,
                                    defaultMessage: `Clear console`
                                }),
                                icon: He,
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
    if (!ke(t) && n && r) {
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
    return ke(e) ? t === `entire document` ? ` If you choose to update the ${t}, you MUST fully rewrite the ${t} by using ".*" as the update regex pattern.` : ` If you choose to update the ${t}, you MUST fully rewrite the \
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
        case nt.ASK:
            return Pn(e, t, r, i);
        case nt.CREATE_TEXTDOC:
            return Fn(e, r, i);
        case nt.EDIT:
            return jn(e, t, r, i);
        case nt.COMMENT:
            return Mn(e, r, i)
    }
}
var Ln, Rn, zn = e((() => {
    tt(), we(), Ln = `# Context`, Rn = `# Instructions`
}));

function Bn(e) {
    switch (e) {
        case L.ACCELERATOR:
        case L.CONSOLE:
        case L.ACCEPT_COMMENT:
        case L.HIVE_SPEAKER_EDIT:
            return !0;
        case L.ASK_CHATGPT:
        case L.FULL_SCREEN_SUBMIT:
            return !1
    }
}

function Vn(e, t) {
    switch (t) {
        case L.ASK_CHATGPT:
        case L.ACCEPT_COMMENT:
        case L.FULL_SCREEN_SUBMIT:
            return e.formatMessage(Wn.askChatGPT);
        case L.ACCELERATOR:
        case L.CONSOLE:
        case L.HIVE_SPEAKER_EDIT:
            return
    }
}
var Hn, Un, Wn, Gn = e((() => {
        Dn(), zn(), we(), Ge(), me(), i(), A(), d(), Hn = t(I()), F(), Un = (e, t) => {
            let n = xe(),
                r = S(() => o(e)),
                i = re();
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
                let v = y(In(f, p, s, g, _), {
                    exclude_after_next_user_message: !0
                });
                Ke({
                    callsiteId: `request_completion.canvas.textdoc.use_create_textdoc_turn.1`,
                    conversation: e,
                    sourceEvent: d,
                    promptMessage: O(a, {
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
        }, Wn = ge({
            askChatGPT: {
                id: `h5ANdM`,
                defaultMessage: `Asked ChatGPT`
            }
        })
    })),
    Y, X, Kn, qn, Jn, Yn, Xn, Zn, Qn, $n, er, tr, nr = e((() => {
        Re(), ht(), fe(), m(), r(), Y = t(I(), 1), ne(), ft(), X = N(), Kn = (e, t, n = 1) => {
            s(e.scrollTop, t, {
                duration: n,
                ease: `easeInOut`,
                onUpdate: t => {
                    e.scrollTop = t
                }
            })
        }, qn = p.div`flex w-full grow flex-col gap-1 rounded-xl p-2 pe-5 text-sm`, Jn = p.input`ms-[-2px] w-auto rounded-none border-none bg-[#E5F3FF] p-0 px-0.5 text-sm font-semibold outline-none focus:outline-none`, Yn = p(h.span)`start border-token-text-tertiary absolute -bottom-0.5 w-full origin-start border-b border-solid`, Xn = p(h.span)`start border-token-text-tertiary absolute -bottom-0.5 w-full border-b border-dashed`, Zn = p.div`w-full loading-results-shimmer bg-token-bg-secondary h-2 rounded-full`, Qn = () => (0, X.jsxs)(qn, {
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
        }, p.div`ms-2 rounded-full px-2 py-0.5 text-xs font-medium`, tr = ({
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
                } = mt.getState(),
                _ = mt(e => e.currentTime),
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
            let y = m.get(e),
                b = !!y?.storedName && y.storedName !== y?.placeholderName || (y?.isEdited ?? !1),
                x = y?.name ?? y?.storedName ?? y?.placeholderName ?? `Unidentified Speaker`,
                S = (0, Y.useRef)(null),
                C = e === h?.id,
                w = e === f,
                [ee, T] = (0, Y.useState)(!1),
                [E, D] = (0, Y.useState)(!1);
            (0, Y.useEffect)(() => {
                S.current && (!C || !E || (S.current?.focus(), b && (S.current.value = x)))
            }, [b, C, E, x]), he(() => {
                if (s?.current && S.current) {
                    let e = s.current.offsetWidth;
                    S.current.style.width = `${e}px`
                }
            }, [h?.name]);
            let te = (0, Y.useCallback)(() => {
                    if (!h || !y) return;
                    d(null), D(!1), T(!1), p(null);
                    let t = m.set(e, {
                        ...y,
                        name: h.name ? h.name : y.placeholderName,
                        isEdited: !!h.name
                    });
                    u(t)
                }, [h, y, d, p, m, e, u]),
                O = !i || a;
            return (0, X.jsxs)(qn, {
                ref: l,
                className: M(v && `animate-[hive-log-fadeout_0.3s_1.5s_forwards] bg-blue-500/10`, !1, !1),
                children: [!1, (0, X.jsxs)(`div`, {
                    className: `mb-[1px] flex w-full items-center justify-between`,
                    children: [c && (C ? (0, X.jsx)(Jn, {
                        ref: S,
                        disabled: !E,
                        onBlur: te,
                        className: M(!C && `hidden w-0`),
                        placeholder: y?.isEdited ? void 0 : y?.placeholderName,
                        value: h?.name,
                        onKeyDown: e => {
                            e.key === `Enter` && te()
                        },
                        onChange: t => d({
                            id: e,
                            name: t.target.value
                        })
                    }) : (0, X.jsxs)(`div`, {
                        className: `flex items-center gap-1`,
                        children: [(0, X.jsxs)(`div`, {
                            onClick: () => {
                                O || (d({
                                    id: e,
                                    name: b ? x : ``
                                }), D(!0))
                            },
                            onMouseEnter: () => {
                                O || (p(e), T(!0))
                            },
                            onMouseLeave: () => {
                                O || (p(null), T(!1))
                            },
                            className: M(`relative flex font-semibold transition-colors`, {
                                "text-blue-400!": w && !O
                            }, {
                                "cursor-pointer": !O
                            }, {
                                "text-token-text-tertiary": !O && !b
                            }),
                            children: [x, !O && !b && (0, X.jsxs)(X.Fragment, {
                                children: [(0, X.jsx)(Yn, {
                                    ...$n
                                }), (0, X.jsx)(Xn, {
                                    ...er,
                                    className: M(w && !O && `border-blue-400!`)
                                })]
                            })]
                        }), ee && !O && (0, X.jsx)(ze, {
                            className: `h-4 w-4 text-blue-400`
                        }), !1]
                    })), (0, X.jsx)(`div`, {
                        className: `text-xs text-[#5D5D5D]`,
                        children: gt(n.min)
                    })]
                }), (0, X.jsx)(`div`, {
                    className: `flex`,
                    children: t
                })]
            })
        }
    })),
    Z, Q, rr, ir, ar, or, sr, cr, lr, ur, dr, fr, pr, mr, hr, gr, _r, vr, yr, br, xr, Sr, $, Cr = e((() => {
        n(), tt(), we(), Gn(), Te(), g(), Oe(), Re(), k(), v(), j(), c(), Ne(), i(), l(), E(), ye(), m(), r(), Z = t(I(), 1), F(), ne(), ht(), nr(), ft(), Q = N(), rr = e => _e({
            queryKey: [`sharedHiveLog`, e],
            queryFn: () => f.safeGet(`/hive/textdoc/shared/{shared_textdoc_id}/transcript`, {
                parameters: {
                    path: {
                        shared_textdoc_id: e
                    }
                }
            }),
            select: pt
        }), ir = (e, t = !0) => _e({
            queryKey: [`hiveLog`, e],
            queryFn: () => f.safeGet(`/hive/{hive_id}/transcript`, {
                parameters: {
                    path: {
                        hive_id: e
                    }
                }
            }),
            enabled: !!e && t,
            select: pt
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
        }, cr = e => _e({
            queryKey: [`recordMeetingTranscriptsForCanvas`, e],
            queryFn: async () => {
                if (!e) return null;
                let t = await se.safeGet(`/record/meetings/{meeting_id}/transcripts`, {
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
        }), lr = () => _e({
            queryKey: [`hiveLogPrompts`],
            queryFn: () => f.safeGet(`/hive/prompts`, {}),
            enabled: !0
        }), ur = (e, t) => f.safePost(`/hive/{hive_id}/speakers`, {
            parameters: {
                path: {
                    hive_id: e
                }
            },
            requestBody: {
                speakers: t
            }
        }), dr = p.div`invisible absolute start-0 top-0 rounded-md border px-0.5 text-sm font-semibold whitespace-pre`, fr = (e, t) => !t || !e ? `` : t.isEdited || e.name && e.name !== t.placeholderName ? e.name : t.placeholderName, pr = () => (0, Q.jsx)(oe, {
            children: (0, Q.jsx)(P, {
                ...$.researchPreview
            })
        }), mr = p.div`flex h-full w-full max-w-[360px] min-w-[240px] flex-col border-s border-gray-200`, hr = p.div`flex w-full max-w-[360px] min-w-[240px] flex-col border-s border-gray-200`, gr = p.div`bg-token-bg-primary mt-[0.5px] flex h-18 w-full items-center justify-between border-b-[0.5px] border-gray-200 p-4`, _r = p.div`flex h-full w-full flex-col gap-2 overflow-y-auto p-2`, vr = p(h.div)`flex items-center gap-2`, yr = {
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
                r = S(a),
                {
                    selectedFilters: i,
                    isOpen: o,
                    currentTime: s,
                    closeSidebar: c
                } = mt(),
                l = (0, Z.useMemo)(() => t.data?.filter(({
                    filterDecision: e
                }) => !e || i?.includes(e)), [t.data, i]);
            if (t.isError) return null;
            let u = (0, Q.jsxs)(`div`, {
                    className: `text-token-text-secondary flex items-center gap-1.5 px-2 py-2 text-base font-medium md:px-0`,
                    children: [(0, Q.jsx)(P, {
                        ...$.transcript
                    }), (0, Q.jsx)(pr, {})]
                }),
                d = (0, Q.jsxs)(Q.Fragment, {
                    children: [t.isLoading && Array.from({
                        length: 16
                    }).map((e, t) => (0, Q.jsx)(Qn, {}, `loading-${t}`)), l?.map(e => (0, Q.jsx)(tr, {
                        isEditingEnabled: !1,
                        containerRef: n,
                        ...e
                    }, Sr(e)))]
                });
            return !o || typeof s != `number` ? null : r ? (0, Q.jsxs)(hr, {
                children: [(0, Q.jsxs)(gr, {
                    children: [u, (0, Q.jsx)(ce, {
                        onClick: c
                    })]
                }), (0, Q.jsx)(_r, {
                    ref: n,
                    children: d
                })]
            }) : (0, Q.jsx)(C, {
                contentRef: n,
                testId: `modal-shared-canvas-transcript-modal`,
                isOpen: o,
                title: u,
                contentClassName: `overflow-y-auto gap-2 p-2 flex flex-col`,
                showCloseButton: !0,
                onClose: c,
                children: d
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
                l = xe(),
                [u, d] = (0, Z.useState)(!1),
                f = (0, Z.useRef)(null),
                {
                    isOpen: p,
                    closeSidebar: m,
                    openSidebar: h,
                    setCurrentTime: g,
                    speakers: _,
                    setSpeakers: v,
                    editingSpeaker: y,
                    enableDebugger: b,
                    setEnableDebugger: S,
                    selectedFilters: C,
                    setSelectedFilters: ee
                } = mt();
            (0, Z.useEffect)(() => {
                n !== void 0 && (h(), g(n))
            }, [n, h, g]);
            let E = (0, Z.useRef)(null),
                [D, te] = (0, Z.useState)(!1),
                O = Un(t, r),
                k = a.data ?? null,
                A = k != null;
            if ((0, Z.useEffect)(() => {
                    A && u && d(!1)
                }, [u, A]), (0, Z.useEffect)(() => {
                    k && v(new Map(k.speakers))
                }, [k, v]), a.isLoading && !k || !A && (s.isLoading || c.isLoading || s.isError || c.isError || !s.data || !c.data)) return null;
            let ne = y ? _.get(y.id) : null,
                j = Array.from(_.values()).some(({
                    isEdited: e
                }) => e),
                re = () => {
                    let e = new Map(Array.from(_.entries()).map(([e, t]) => [e, {
                        ...t,
                        name: void 0,
                        isEdited: !1
                    }]));
                    v(e), d(!1)
                },
                ie = e => {
                    let t = c.data?.speaker_edits;
                    if (!t) return;
                    let n = t.replace(`{speakers}`, JSON.stringify(Array.from(_.entries())));
                    return O({
                        sourceEvent: e,
                        action: nt.EDIT,
                        content: n,
                        userMessageType: L.HIVE_SPEAKER_EDIT,
                        selectionMetadata: void 0
                    })
                },
                oe = async t => {
                    if (j) {
                        te(!0);
                        try {
                            let n = [];
                            Array.from(_.entries()).forEach(([e, t]) => {
                                !t.isEdited || !t.name || n.push({
                                    id: e,
                                    updated_name: t.name
                                })
                            });
                            let r = await ur(e, n);
                            if (!r) throw Error(`Failed to update hive content`);
                            let i = new Map(_);
                            for (let e of r.updated_speakers) {
                                if (!i.has(e.id)) continue;
                                let t = i.get(e.id);
                                t && i.set(e.id, {
                                    ...t,
                                    storedName: e.updated_name,
                                    isEdited: !1
                                })
                            }
                            await ie(t), v(i), d(!1)
                        } catch {} finally {
                            te(!1)
                        }
                    }
                }, se = s.data ?? [], ce = A ? k.rows : se.filter(({
                    filterDecision: e
                }) => !e || C?.includes(e));
            return (0, Q.jsxs)(mr, {
                className: M(p ? `visible` : `invisible hidden`),
                children: [(0, Q.jsxs)(`div`, {
                    className: `flex h-14 w-full items-center justify-between border-b border-gray-200 p-4`,
                    children: [(0, Q.jsxs)(`div`, {
                        className: `text-token-text-secondary group/debug flex items-center gap-1.5 py-2 text-base font-medium`,
                        children: [(0, Q.jsx)(P, {
                            ...$[u ? `edit` : `transcript`]
                        }), (0, Q.jsx)(pr, {}), !1]
                    }), (0, Q.jsx)(`div`, {
                        className: `flex h-10 items-center gap-2`,
                        children: A ? (0, Q.jsx)(je, {
                            icon: ae.Cross,
                            onClick: () => m()
                        }) : (0, Q.jsx)(x, {
                            mode: `wait`,
                            children: u ? (0, Q.jsxs)(vr, {
                                ...yr,
                                children: [(0, Q.jsx)(T, {
                                    onClick: re,
                                    color: `secondary`,
                                    disabled: D,
                                    children: (0, Q.jsx)(P, {
                                        ...$.cancelButton
                                    })
                                }), (0, Q.jsx)(T, {
                                    color: `primary`,
                                    onClick: oe,
                                    disabled: !j,
                                    loading: D,
                                    children: (0, Q.jsx)(P, {
                                        ...$.saveButton
                                    })
                                })]
                            }, `edit-buttons`) : (0, Q.jsxs)(vr, {
                                ...yr,
                                children: [(0, Q.jsx)(w, {
                                    className: `h-10`,
                                    label: l.formatMessage($.editButtonTooltip),
                                    children: (0, Q.jsx)(je, {
                                        icon: ze,
                                        onClick: () => d(!0)
                                    })
                                }), (0, Q.jsx)(je, {
                                    icon: ae.Cross,
                                    onClick: () => m()
                                })]
                            }, `non-edit-buttons`)
                        })
                    })]
                }), !1, (0, Q.jsxs)(_r, {
                    ref: f,
                    children: [y && (0, Q.jsx)(dr, {
                        ref: E,
                        children: fr(y, ne)
                    }), ce.map(e => (0, Q.jsx)(tr, {
                        isEditingEnabled: !0,
                        measuredTextContainerRef: E,
                        containerRef: f,
                        isEditing: !A && u,
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
        }, $ = ge({
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
//# sourceMappingURL=d3304073-badojjqu6tr3ttfu.js.map