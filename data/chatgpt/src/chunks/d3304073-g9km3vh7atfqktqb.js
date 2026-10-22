import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $8 as n,
    $T as r,
    AE as i,
    At as a,
    Aw as o,
    Bz as s,
    EP as c,
    Ec as l,
    Gt as u,
    HN as d,
    IZ as f,
    J7 as p,
    K7 as m,
    LP as h,
    Mh as g,
    Mw as _,
    Nh as v,
    Nw as y,
    Ow as b,
    Pw as x,
    Q7 as S,
    Q8 as C,
    QZ as ee,
    Qy as w,
    RZ as T,
    Tc as E,
    UN as te,
    Vz as ne,
    Zy as D,
    bx as O,
    c7 as k,
    cn as A,
    d1 as re,
    eE as ie,
    hn as ae,
    jw as oe,
    k8 as se,
    kE as j,
    l7 as M,
    ost as ce,
    p5 as le,
    px as ue,
    q5 as de,
    rq as fe,
    sst as pe,
    u1 as me,
    uq as he
} from "./4813494d-nxpmzchfjvwqts17.js";
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
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Bmn as Se,
    KKn as Ce,
    Rmn as L,
    Umn as we,
    XUn as Te,
    ZUn as Ee,
    _fn as De,
    c5t as Oe,
    dFn as ke,
    fFn as Ae,
    gfn as je,
    i5t as Me,
    o5t as Ne,
    s5t as Pe,
    u5t as Fe,
    yUn as Ie
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    CC as Le,
    Fx as Re,
    Ix as ze,
    Jy as Be,
    SC as Ve,
    Yy as He,
    vv as Ue,
    yv as We
} from "./30901919-lgbmg5s09xld40kt.js";
import {
    Mm as Ge,
    jm as Ke
} from "./8b34dbc2-n194ohawifys3bko.js";
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
} from "./c8f38d6c-lau4ptvqfkiklec0.js";
import {
    c as Ze,
    l as Qe,
    o as $e,
    s as et
} from "./cc445a0e-nx8w9lgszhecm1mp.js";
import {
    i as tt,
    r as nt
} from "./dced7e81-jvrrcxnvz22x23ei.js";
import {
    n as rt,
    t as it
} from "./5422a199-ohc0ujx944q7esd3.js";
import {
    n as at,
    t as ot
} from "./e1a66d2b-ost0qyl4eh9wemvy.js";
import {
    C as st,
    E as ct,
    S as lt,
    T as ut,
    b as dt
} from "./df59e297-f1sm3fg7boxjg94x.js";
import {
    a as ft,
    i as pt,
    o as mt,
    r as ht,
    t as gt
} from "./e74608d1-jih3a0juvbpl232y.js";
var z, _t, vt, yt = e((() => {
        ie(), ne(), w(), M(), z = N(), {
            Cross: _t
        } = s, vt = ({
            onClose: e,
            title: t,
            actions: n,
            showBorder: i = !1
        }) => (0, z.jsxs)(`div`, {
            className: k(`bg-token-bg-primary flex items-center justify-between border-b py-2 ps-2 pe-2.5`, {
                "border-token-border-light": i,
                "border-transparent": !i
            }),
            children: [(0, z.jsx)(`div`, {
                className: `text-token-text-primary flex items-center gap-2 ps-4 text-sm select-none`,
                children: t
            }), (0, z.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [n.map(({
                    tooltip: e,
                    icon: t,
                    onClick: n
                }, i) => {
                    let a = (0, z.jsx)(r, {
                        size: `small`,
                        color: `ghost`,
                        as: `button`,
                        className: `text-token-text-primary aspect-square p-1!`,
                        icon: t,
                        onClick: n
                    }, i);
                    return e ? (0, z.jsx)(D, {
                        label: e,
                        children: a
                    }, i) : a
                }), (0, z.jsx)(r, {
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
        n(), Je(), bt = e => C([R.ERROR, R.LOG, R.OUTPUT], e.type)
    })),
    St, Ct, wt = e((() => {
        it(), Je(), St = e => e.type === R.OUTPUT && Ct(e.output), Ct = e => rt(e)
    })),
    Tt, Et, Dt = e((() => {
        M(), a(), Tt = N(), Et = ({
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
            return (0, Tt.jsxs)(e === `div` ? A.div : A.li, {
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
                className: k(`bg-token-bg-primary flex items-start justify-between py-1.5 ps-6 pe-4 font-mono text-sm whitespace-pre`, a && `border-token-border-xlight border-b`, s && `sticky top-0 z-10`, u && `cursor-pointer`, u && i && `hover:bg-red-500/10`, u && !i && `hover:bg-gray-50 dark:hover:bg-gray-700`, i && o && `bg-red-500/10`),
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
        ct(), st(), He(), Fe(), a(), Ot = t(I()), F(), B = N(), V = function(e) {
            return e.LOADING = `loading`, e.READY = `ready`, e.RESOLVED = `resolved`, e
        }({}), kt = ({
            hint: e,
            onClickFix: t,
            isOpen: n,
            onOpenChange: r
        }) => {
            let i = (0, Ot.useRef)(null),
                a = xe();
            return e ? (0, B.jsx)(`div`, {
                className: `relative flex items-center font-sans`,
                onClick: e => e.stopPropagation(),
                children: (0, B.jsxs)(Pe, {
                    open: n,
                    onOpenChange: r,
                    children: [(0, B.jsx)(Oe, {
                        asChild: !0,
                        ref: i,
                        children: e.status === `resolved` ? (0, B.jsx)(`div`, {
                            className: `flex h-5 w-5 items-center`,
                            children: (0, B.jsx)(Be, {
                                className: `text-token-text-tertiary`,
                                size: 16
                            })
                        }) : (0, B.jsx)(`button`, {
                            className: `h-5 w-5`,
                            disabled: e.status === `loading`,
                            children: e.status === `loading` ? (0, B.jsx)(ut, {}) : (0, B.jsx)(dt, {
                                position: `static`,
                                isError: !0,
                                count: 1,
                                offsetY: 0
                            })
                        })
                    }), (0, B.jsx)(ae, {
                        children: n && (0, B.jsx)(Ne, {
                            forceMount: !0,
                            container: i.current?.ownerDocument.body,
                            children: (0, B.jsx)(Me, {
                                side: `top`,
                                align: `start`,
                                alignOffset: -4,
                                sideOffset: 10,
                                children: (0, B.jsx)(lt, {
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
        jt = N(), Mt = `module:`, Nt = ({
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
        n(), wt(), Dt(), At(), Ye(), Pt(), Je(), M(), Ft = t(I()), F(), H = N(), It = ({
            isPreview: e = !1,
            log: t,
            level: n
        }) => (0, H.jsxs)(`span`, {
            className: k(`text-token-text-primary flex min-w-0 flex-wrap gap-1`, e ? `shrink truncate` : `whitespace-pre-wrap`, n === `warn` && `text-yellow-600`),
            children: [n === `warn` && `[warn]: `, typeof t == `string` ? t : t.map((t, n) => (0, H.jsx)(Xe, {
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
                className: k(`whitespace-pre-wrap`, n ? `text-token-text-primary` : `text-red-500`),
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
            let n = xe();
            return e == null ? null : Ct(e) ? (0, H.jsx)(`img`, {
                alt: n.formatMessage(Vt.imgAlt),
                className: k(t && `border-token-border-xlight h-6 rounded-lg border`),
                src: e
            }) : (0, H.jsx)(`span`, {
                className: `flex items-center gap-2`,
                children: le(e)
            })
        }, zt = ({
            log: e,
            isHintResolved: t,
            isPreview: n = !1
        }) => {
            switch (e.type) {
                case R.LOG:
                    return (0, H.jsx)(It, {
                        isPreview: n,
                        ...e
                    });
                case R.ERROR:
                    return (0, H.jsx)(Lt, {
                        isPreview: n,
                        isResolved: t,
                        ...e
                    });
                case R.OUTPUT:
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
            if (e.type === R.RUN_COMPLETE) return null;
            let s = i?.status === V.RESOLVED;
            return (0, H.jsx)(Et, {
                hasHint: e.type === R.ERROR && i?.status === V.READY,
                isHintOpen: a,
                bottomBorder: !0,
                onClick: i && !s && (() => o(!0)),
                contentBefore: (0, H.jsx)(kt, {
                    hint: i,
                    isOpen: a,
                    onOpenChange: o,
                    onClickFix: t => e.type === R.ERROR && i && n?.(t, i.id, e.error)
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
        }, Vt = ge({
            imgAlt: {
                id: `L6t7Yb`,
                defaultMessage: `Plot`
            }
        })
    })),
    Ut, U, Wt, Gt, Kt = e((() => {
        at(), w(), Ut = t(I()), F(), U = N(), Wt = ({
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
            return (0, U.jsx)(D, {
                label: (0, U.jsx)(P, {
                    id: `bFO21A`,
                    defaultMessage: `Code ran {count, plural, =0 {instantly} one {in # second} other {in # seconds}}`,
                    values: {
                        count: Math.floor(t / 1e3)
                    }
                }),
                children: (0, U.jsx)(`span`, {
                    className: `text-token-text-tertiary`,
                    children: r >= 60 ? (0, U.jsx)(ve, {
                        value: -r,
                        updateIntervalInSeconds: 60,
                        numeric: `auto`
                    }) : (0, U.jsx)(P, {
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
            children: (0, U.jsx)(P, {
                id: `EMebM9`,
                defaultMessage: `Stopped`
            })
        }) : (0, U.jsx)(ot, {
            gap: 2
        })
    })),
    qt, Jt, W, Yt, Xt, Zt, Qt, $t, en = e((() => {
        qt = be(), xt(), wt(), Ht(), Dt(), At(), Pt(), Kt(), at(), Le(), Je(), M(), me(), a(), Jt = t(I()), F(), W = N(), Yt = e => {
            switch (e) {
                case qe.INITIALIZING:
                    return (0, W.jsx)(P, {
                        id: `J183Z0`,
                        defaultMessage: `initializing environment`
                    });
                case qe.INSTALLING_PACKAGES:
                    return (0, W.jsx)(P, {
                        id: `21sQ8o`,
                        defaultMessage: `installing packages`
                    });
                case qe.RUNNING_CODE:
                    return (0, W.jsx)(P, {
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
                let e = re(i),
                    o;
                t[4] === n ? o = t[5] : (o = (0, W.jsx)(`span`, {
                    className: `text-token-text-secondary font-semibold`,
                    children: (0, W.jsx)(P, {
                        ...n
                    })
                }), t[4] = n, t[5] = o), a = (0, W.jsxs)(`span`, {
                    className: `flex items-center`,
                    children: [o, !r && e && (0, W.jsxs)(A.span, {
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
                        children: [Yt(e.status), (0, W.jsx)(ot, {
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
            let [c, l] = (0, Jt.useState)(!0), [u, d] = (0, Jt.useState)(!1), f = () => {
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
                            d(e[0].intersectionRatio === 0)
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
                        onClick: () => f(),
                        children: (0, W.jsx)(Ve, {
                            className: k(`icon transition-transform`, c && `rotate-90`)
                        })
                    }),
                    onClick: () => f(),
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
            let [o, s] = (0, Jt.useState)(!1), c = e.filter(e => e.type === R.ENVIRONMENT_STATUS), l = e.filter(bt), u = re(e), d = u?.type === R.RUN_COMPLETE, f = d ? u.duration : null, p = l[0];
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
                if (l.length === 1 && p?.type === R.ERROR) {
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
            let m = re(l.filter(e => e.type !== R.RUN_COMPLETE)),
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
        }, $t = ge({
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
        yt(), en(), xt(), wt(), Ae(), a(), tn = t(I()), G = N(), nn = ({
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
                u = (0, tn.useMemo)(() => Object.entries(ke(e, `runId`)), [e]),
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
                        children: (0, G.jsx)(ae, {
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
        a(), an = N(), on = ({
            onDrag: e,
            onDragEnd: t,
            onDoubleClick: n
        }) => (0, an.jsx)(A.div, {
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
        ie(), x(), a(), F(), K = N(), cn = ({
            textdocTitle: e,
            onClickViewConsole: t,
            onClickFix: n,
            onDismiss: i
        }) => (0, K.jsxs)(A.div, {
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
                        children: (0, K.jsx)(P, {
                            id: `ObCQBq`,
                            defaultMessage: `Cannot preview your code`
                        })
                    }), (0, K.jsx)(`div`, {
                        className: `text-sm`,
                        children: (0, K.jsx)(P, {
                            id: `3ZeoP8`,
                            defaultMessage: `An error occured while trying to run {name}`,
                            values: {
                                name: e
                            }
                        })
                    })]
                }), (0, K.jsx)(r, {
                    size: `small`,
                    color: `ghost`,
                    as: `button`,
                    className: `text-token-text-tertiary -m-1! aspect-square p-0!`,
                    onClick: i,
                    icon: y
                })]
            }), (0, K.jsxs)(`div`, {
                className: `flex items-center justify-end gap-2`,
                children: [(0, K.jsx)(r, {
                    size: `small`,
                    color: `secondary`,
                    onClick: t,
                    children: (0, K.jsx)(P, {
                        id: `Fch32I`,
                        defaultMessage: `View console`
                    })
                }), (0, K.jsx)(r, {
                    size: `small`,
                    color: `primary`,
                    onClick: n,
                    children: (0, K.jsx)(P, {
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
        n(), dn(), De(), S(), fn = new je({
            capacity: 5
        }), pn = async (e, t, n) => {
            let r = un(t, n.error),
                i = le(fn.get(r));
            if (fn.get(r)) return i;
            let {
                hint: a
            } = await p.safePost(`/textdoc/{textdoc_id}/code/hint`, {
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
            return fn.set(r, a), a
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
        et(), tt(), rn(), sn(), ln(), mn(), At(), _n(), Se(), g(), Ue(), ce(), Je(), a(), q = t(I()), F(), J = N(), vn = ({
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
            let [d, f] = (0, q.useState)(!1), [p, m] = (0, q.useState)(!1), [h, g] = (0, q.useState)([]), [_, y] = (0, q.useState)(0), [b, x] = (0, q.useState)(null), [S, C] = (0, q.useState)(null), [ee, w] = (0, q.useState)(() => new Map), [T, E] = (0, q.useState)(320), te = (0, q.useRef)(null), ne = xe();
            (0, q.useEffect)(() => C(null), [t]);
            let D = h.filter(e => [R.LOG, R.ERROR, R.OUTPUT].includes(e.type)).length,
                O = (0, q.useEffectEvent)(() => {
                    y(D)
                });
            (0, q.useEffect)(() => {
                i && O()
            }, [i]);
            let k = (0, q.useMemo)(() => {
                    for (let e = h.length - 1; e >= 0; e--) {
                        let t = h[e];
                        if (t.runId !== S) return null;
                        if (t.type === R.ERROR) return t
                    }
                    return null
                }, [h, S]),
                re = (e, n, r) => {
                    let i = ee.get(n);
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
                                status: V.RESOLVED
                            }), r
                        })
                    }
                    x(n), c({
                        sourceEvent: e,
                        action: nt.EDIT,
                        userMessageType: L.CONSOLE,
                        content: gn(t, i?.content ?? null, r)
                    })
                },
                ie = async (e, n) => {
                    if (!a) {
                        w(t => {
                            let n = new Map(t);
                            return n.set(e, {
                                id: e,
                                status: V.LOADING,
                                content: ``
                            }), n
                        });
                        try {
                            let i = await pn(r, t, n);
                            w(t => {
                                let n = new Map(t);
                                return n.set(e, {
                                    id: e,
                                    status: V.READY,
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
                    let r = $e(t, n),
                        i = Qe(t, n),
                        a = Ze(t);
                    if (!r || !a && !i) return;
                    a && l?.(!0), m(!0), g(e => e.map(e => ({
                        ...e,
                        isStale: !0
                    })));
                    let o = !1,
                        c = pe(e.current).evalAsync({
                            code: n,
                            language: r
                        });
                    for await (let e of c) {
                        if (e.type === R.RUN_START && requestAnimationFrame(() => {
                                te.current?.scrollTo({
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
                            o = !0, ie(e.id, e)
                        }
                        C(e.runId), g(t => [...t, {
                            ...e,
                            isStale: !1
                        }])
                    }
                    o && l?.(!0), m(!1)
                };
            (0, q.useImperativeHandle)(u, () => ({
                runCode: oe,
                stopCode: () => e.current?.stop()
            }));
            let se = !i && p,
                j = se && k && k.id !== b;
            return (0, J.jsxs)(ae, {
                children: [d && (0, J.jsx)(`div`, {
                    className: `pointer-events-auto absolute inset-0 bg-transparent`
                }, `drag-overlay`), !j && se && D > _ && (0, J.jsx)(A.button, {
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
                    children: (0, J.jsxs)(`span`, {
                        className: `text-token-text-secondary flex items-center gap-1 text-sm`,
                        children: [(0, J.jsx)(v, {
                            className: `icon-sm`
                        }), (0, J.jsx)(P, {
                            id: `etzFTa`,
                            defaultMessage: `{numLogs, plural, one {{numLogs} message} other {{numLogs} messages}}`,
                            values: {
                                numLogs: D
                            }
                        })]
                    })
                }, `view-console`), j && (0, J.jsx)(cn, {
                    textdocTitle: n,
                    onClickViewConsole: () => l?.(!0),
                    onDismiss: () => x(k.id),
                    onClickFix: e => {
                        re(e, k.id, k.error)
                    }
                }, `error-modal`), i && (0, J.jsxs)(A.div, {
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
                        onDragEnd: () => f(!1),
                        onDrag: ({
                            delta: {
                                y: e
                            }
                        }) => {
                            f(!0), E(t => t - e)
                        }
                    }), (0, J.jsx)(`div`, {
                        className: `flex flex-col`,
                        style: {
                            height: T
                        },
                        children: (0, J.jsx)(nn, {
                            scrollRef: te,
                            messages: h,
                            onClose: () => l?.(!1),
                            onClickLineNumber: s,
                            onClickFix: re,
                            title: ne.formatMessage({
                                id: `P9VJDk`,
                                defaultMessage: `Console`
                            }),
                            headerActions: [...o, {
                                tooltip: ne.formatMessage({
                                    id: `gAICYK`,
                                    defaultMessage: `Clear console`
                                }),
                                icon: We,
                                onClick: () => {
                                    y(0), g([]), w(new Map)
                                }
                            }],
                            hints: ee
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
    if (!we(t) && n && r) {
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
    return we(e) ? t === `entire document` ? ` If you choose to update the ${t}, you MUST fully rewrite the ${t} by using ".*" as the update regex pattern.` : ` If you choose to update the ${t}, you MUST fully rewrite the \
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
        case nt.ASK:
            return Nn(e, t, r, i);
        case nt.CREATE_TEXTDOC:
            return Pn(e, r, i);
        case nt.EDIT:
            return An(e, t, r, i);
        case nt.COMMENT:
            return jn(e, r, i)
    }
}
var In, Ln, Rn = e((() => {
    tt(), Se(), In = `# Context`, Ln = `# Instructions`
}));

function zn(e) {
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

function Bn(e, t) {
    switch (t) {
        case L.ASK_CHATGPT:
        case L.ACCEPT_COMMENT:
        case L.FULL_SCREEN_SUBMIT:
            return e.formatMessage(Un.askChatGPT);
        case L.ACCELERATOR:
        case L.CONSOLE:
        case L.HIVE_SPEAKER_EDIT:
            return
    }
}
var Vn, Hn, Un, Wn = e((() => {
        En(), Rn(), Se(), Ke(), l(), se(), c(), ee(), Vn = t(I()), F(), Hn = (e, t) => {
            let n = xe(),
                r = de(() => E(e)),
                i = h();
            return (0, Vn.useCallback)(async ({
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
                    textdocId: p,
                    type: m,
                    versionInt: h,
                    content: g
                } = t, _, v = null;
                o && o.start !== o.end && (_ = g.slice(o.start, o.end), v = Cn(o, g));
                let y = f(Fn(p, m, s, _, v), {
                    exclude_after_next_user_message: !0
                });
                Ge({
                    callsiteId: `request_completion.canvas.textdoc.use_create_textdoc_turn.1`,
                    conversation: e,
                    sourceEvent: d,
                    promptMessage: T(a, {
                        canvas: {
                            textdoc_id: p,
                            textdoc_type: m,
                            version: h,
                            textdoc_content_length: g.length,
                            user_message_type: c,
                            accelerator_metadata: l,
                            selection_metadata: u
                        },
                        is_visually_hidden_from_conversation: zn(c),
                        targeted_reply: _,
                        targeted_reply_label: Bn(n, c),
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
            }, [t, i, e, r, n])
        }, Un = ge({
            askChatGPT: {
                id: `h5ANdM`,
                defaultMessage: `Asked ChatGPT`
            }
        })
    })),
    X, Z, Gn, Kn, qn, Jn, Yn, Xn, Zn, Qn, $n, er, tr = e((() => {
        Re(), ht(), d(), M(), a(), X = t(I(), 1), i(), ft(), Z = N(), Gn = (e, t, n = 1) => {
            u(e.scrollTop, t, {
                duration: n,
                ease: `easeInOut`,
                onUpdate: t => {
                    e.scrollTop = t
                }
            })
        }, Kn = j.div`flex w-full grow flex-col gap-1 rounded-xl p-2 pe-5 text-sm`, qn = j.input`ms-[-2px] w-auto rounded-none border-none bg-[#E5F3FF] p-0 px-0.5 text-sm font-semibold outline-none focus:outline-none`, Jn = j(A.span)`start border-token-text-tertiary absolute -bottom-0.5 w-full origin-start border-b border-solid`, Yn = j(A.span)`start border-token-text-tertiary absolute -bottom-0.5 w-full border-b border-dashed`, Xn = j.div`w-full loading-results-shimmer bg-token-bg-secondary h-2 rounded-full`, Zn = () => (0, Z.jsxs)(Kn, {
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
        }, j.div`ms-2 rounded-full px-2 py-0.5 text-xs font-medium`, er = ({
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
                    setEditingSpeaker: d,
                    hoveringSpeakerId: f,
                    setHoveringSpeakerId: p,
                    speakers: m,
                    editingSpeaker: h,
                    enableDebugger: g
                } = mt.getState(),
                _ = mt(e => e.currentTime),
                v = n.max == null ? _ === n.min : _ >= n.min && _ <= n.max;
            (0, X.useEffect)(() => {
                if (v && l.current && o.current) {
                    let e = o.current,
                        t = l.current,
                        n = e.getBoundingClientRect().top,
                        r = t.getBoundingClientRect().top - n + e.scrollTop - 20;
                    Gn(e, r, .3)
                }
            }, [n.min, n.max, v, o]);
            let y = m.get(e),
                b = !!y?.storedName && y.storedName !== y?.placeholderName || (y?.isEdited ?? !1),
                x = y?.name ?? y?.storedName ?? y?.placeholderName ?? `Unidentified Speaker`,
                S = (0, X.useRef)(null),
                C = e === h?.id,
                ee = e === f,
                [w, T] = (0, X.useState)(!1),
                [E, ne] = (0, X.useState)(!1);
            (0, X.useEffect)(() => {
                S.current && (!C || !E || (S.current?.focus(), b && (S.current.value = x)))
            }, [b, C, E, x]), te(() => {
                if (s?.current && S.current) {
                    let e = s.current.offsetWidth;
                    S.current.style.width = `${e}px`
                }
            }, [h?.name]);
            let D = (0, X.useCallback)(() => {
                    if (!h || !y) return;
                    d(null), ne(!1), T(!1), p(null);
                    let t = m.set(e, {
                        ...y,
                        name: h.name ? h.name : y.placeholderName,
                        isEdited: !!h.name
                    });
                    u(t)
                }, [h, y, d, p, m, e, u]),
                O = !i || a;
            return (0, Z.jsxs)(Kn, {
                ref: l,
                className: k(v && `animate-[hive-log-fadeout_0.3s_1.5s_forwards] bg-blue-500/10`, !1, !1),
                children: [!1, (0, Z.jsxs)(`div`, {
                    className: `mb-[1px] flex w-full items-center justify-between`,
                    children: [c && (C ? (0, Z.jsx)(qn, {
                        ref: S,
                        disabled: !E,
                        onBlur: D,
                        className: k(!C && `hidden w-0`),
                        placeholder: y?.isEdited ? void 0 : y?.placeholderName,
                        value: h?.name,
                        onKeyDown: e => {
                            e.key === `Enter` && D()
                        },
                        onChange: t => d({
                            id: e,
                            name: t.target.value
                        })
                    }) : (0, Z.jsxs)(`div`, {
                        className: `flex items-center gap-1`,
                        children: [(0, Z.jsxs)(`div`, {
                            onClick: () => {
                                O || (d({
                                    id: e,
                                    name: b ? x : ``
                                }), ne(!0))
                            },
                            onMouseEnter: () => {
                                O || (p(e), T(!0))
                            },
                            onMouseLeave: () => {
                                O || (p(null), T(!1))
                            },
                            className: k(`relative flex font-semibold transition-colors`, {
                                "text-blue-400!": ee && !O
                            }, {
                                "cursor-pointer": !O
                            }, {
                                "text-token-text-tertiary": !O && !b
                            }),
                            children: [x, !O && !b && (0, Z.jsxs)(Z.Fragment, {
                                children: [(0, Z.jsx)(Jn, {
                                    ...Qn
                                }), (0, Z.jsx)(Yn, {
                                    ...$n,
                                    className: k(ee && !O && `border-blue-400!`)
                                })]
                            })]
                        }), w && !O && (0, Z.jsx)(ze, {
                            className: `h-4 w-4 text-blue-400`
                        }), !1]
                    })), (0, Z.jsx)(`div`, {
                        className: `text-xs text-[#5D5D5D]`,
                        children: gt(n.min)
                    })]
                }), (0, Z.jsx)(`div`, {
                    className: `flex`,
                    children: t
                })]
            })
        }
    })),
    Q, $, nr, rr, ir, ar, or, sr, cr, lr, ur, dr, fr, pr, mr, hr, gr, _r, vr, yr, br, xr, Sr, Cr = e((() => {
        ie(), tt(), Se(), Wn(), Ce(), _(), Ie(), Re(), ne(), O(), o(), w(), Ee(), se(), fe(), S(), ye(), M(), a(), Q = t(I(), 1), F(), i(), ht(), tr(), ft(), $ = N(), nr = e => _e({
            queryKey: [`sharedHiveLog`, e],
            queryFn: () => p.safeGet(`/hive/textdoc/shared/{shared_textdoc_id}/transcript`, {
                parameters: {
                    path: {
                        shared_textdoc_id: e
                    }
                }
            }),
            select: pt
        }), rr = (e, t = !0) => _e({
            queryKey: [`hiveLog`, e],
            queryFn: () => p.safeGet(`/hive/{hive_id}/transcript`, {
                parameters: {
                    path: {
                        hive_id: e
                    }
                }
            }),
            enabled: !!e && t,
            select: pt
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
        }, sr = e => _e({
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
        }), cr = () => _e({
            queryKey: [`hiveLogPrompts`],
            queryFn: () => p.safeGet(`/hive/prompts`, {}),
            enabled: !0
        }), lr = (e, t) => p.safePost(`/hive/{hive_id}/speakers`, {
            parameters: {
                path: {
                    hive_id: e
                }
            },
            requestBody: {
                speakers: t
            }
        }), ur = j.div`invisible absolute start-0 top-0 rounded-md border px-0.5 text-sm font-semibold whitespace-pre`, dr = (e, t) => !t || !e ? `` : t.isEdited || e.name && e.name !== t.placeholderName ? e.name : t.placeholderName, fr = () => (0, $.jsx)(ue, {
            children: (0, $.jsx)(P, {
                ...Sr.researchPreview
            })
        }), pr = j.div`flex h-full w-full max-w-[360px] min-w-[240px] flex-col border-s border-gray-200`, mr = j.div`flex w-full max-w-[360px] min-w-[240px] flex-col border-s border-gray-200`, hr = j.div`bg-token-bg-primary mt-[0.5px] flex h-18 w-full items-center justify-between border-b-[0.5px] border-gray-200 p-4`, gr = j.div`flex h-full w-full flex-col gap-2 overflow-y-auto p-2`, _r = j(A.div)`flex items-center gap-2`, vr = {
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
                r = de(he),
                {
                    selectedFilters: i,
                    isOpen: a,
                    currentTime: o,
                    closeSidebar: s
                } = mt(),
                c = (0, Q.useMemo)(() => t.data?.filter(({
                    filterDecision: e
                }) => !e || i?.includes(e)), [t.data, i]);
            if (t.isError) return null;
            let l = (0, $.jsxs)(`div`, {
                    className: `text-token-text-secondary flex items-center gap-1.5 px-2 py-2 text-base font-medium md:px-0`,
                    children: [(0, $.jsx)(P, {
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
                    children: [l, (0, $.jsx)(oe, {
                        onClick: s
                    })]
                }), (0, $.jsx)(gr, {
                    ref: n,
                    children: u
                })]
            }) : (0, $.jsx)(b, {
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
            textdocVersion: i
        }) => {
            let a = i.metadata?.record_meeting_id ?? void 0,
                o = sr(a),
                c = a == null || o.isError || !o.isLoading && o.data == null,
                l = rr(e, c),
                u = cr(),
                d = xe(),
                [f, p] = (0, Q.useState)(!1),
                m = (0, Q.useRef)(null),
                {
                    isOpen: h,
                    closeSidebar: g,
                    openSidebar: _,
                    setCurrentTime: v,
                    speakers: y,
                    setSpeakers: b,
                    editingSpeaker: x,
                    enableDebugger: S,
                    setEnableDebugger: C,
                    selectedFilters: ee,
                    setSelectedFilters: w
                } = mt();
            (0, Q.useEffect)(() => {
                n !== void 0 && (_(), v(n))
            }, [n, _, v]);
            let T = (0, Q.useRef)(null),
                [E, te] = (0, Q.useState)(!1),
                ne = Hn(t, i),
                O = o.data ?? null,
                A = O != null;
            if ((0, Q.useEffect)(() => {
                    A && f && p(!1)
                }, [f, A]), (0, Q.useEffect)(() => {
                    O && b(new Map(O.speakers))
                }, [O, b]), o.isLoading && !O || !A && (l.isLoading || u.isLoading || l.isError || u.isError || !l.data || !u.data)) return null;
            let re = x ? y.get(x.id) : null,
                ie = Array.from(y.values()).some(({
                    isEdited: e
                }) => e),
                oe = () => {
                    let e = new Map(Array.from(y.entries()).map(([e, t]) => [e, {
                        ...t,
                        name: void 0,
                        isEdited: !1
                    }]));
                    b(e), p(!1)
                },
                se = e => {
                    let t = u.data?.speaker_edits;
                    if (!t) return;
                    let n = t.replace(`{speakers}`, JSON.stringify(Array.from(y.entries())));
                    return ne({
                        sourceEvent: e,
                        action: nt.EDIT,
                        content: n,
                        userMessageType: L.HIVE_SPEAKER_EDIT,
                        selectionMetadata: void 0
                    })
                },
                j = async t => {
                    if (ie) {
                        te(!0);
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
                            await se(t), b(i), p(!1)
                        } catch {} finally {
                            te(!1)
                        }
                    }
                }, M = l.data ?? [], ce = A ? O.rows : M.filter(({
                    filterDecision: e
                }) => !e || ee?.includes(e));
            return (0, $.jsxs)(pr, {
                className: k(h ? `visible` : `invisible hidden`),
                children: [(0, $.jsxs)(`div`, {
                    className: `flex h-14 w-full items-center justify-between border-b border-gray-200 p-4`,
                    children: [(0, $.jsxs)(`div`, {
                        className: `text-token-text-secondary group/debug flex items-center gap-1.5 py-2 text-base font-medium`,
                        children: [(0, $.jsx)(P, {
                            ...Sr[f ? `edit` : `transcript`]
                        }), (0, $.jsx)(fr, {}), !1]
                    }), (0, $.jsx)(`div`, {
                        className: `flex h-10 items-center gap-2`,
                        children: A ? (0, $.jsx)(Te, {
                            icon: s.Cross,
                            onClick: () => g()
                        }) : (0, $.jsx)(ae, {
                            mode: `wait`,
                            children: f ? (0, $.jsxs)(_r, {
                                ...vr,
                                children: [(0, $.jsx)(r, {
                                    onClick: oe,
                                    color: `secondary`,
                                    disabled: E,
                                    children: (0, $.jsx)(P, {
                                        ...Sr.cancelButton
                                    })
                                }), (0, $.jsx)(r, {
                                    color: `primary`,
                                    onClick: j,
                                    disabled: !ie,
                                    loading: E,
                                    children: (0, $.jsx)(P, {
                                        ...Sr.saveButton
                                    })
                                })]
                            }, `edit-buttons`) : (0, $.jsxs)(_r, {
                                ...vr,
                                children: [(0, $.jsx)(D, {
                                    className: `h-10`,
                                    label: d.formatMessage(Sr.editButtonTooltip),
                                    children: (0, $.jsx)(Te, {
                                        icon: ze,
                                        onClick: () => p(!0)
                                    })
                                }), (0, $.jsx)(Te, {
                                    icon: s.Cross,
                                    onClick: () => g()
                                })]
                            }, `non-edit-buttons`)
                        })
                    })]
                }), !1, (0, $.jsxs)(gr, {
                    ref: m,
                    children: [x && (0, $.jsx)(ur, {
                        ref: T,
                        children: dr(x, re)
                    }), ce.map(e => (0, $.jsx)(er, {
                        isEditingEnabled: !0,
                        measuredTextContainerRef: T,
                        containerRef: m,
                        isEditing: !A && f,
                        isSaving: !A && E,
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
        }, Sr = ge({
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
//# sourceMappingURL=d3304073-g9km3vh7atfqktqb.js.map