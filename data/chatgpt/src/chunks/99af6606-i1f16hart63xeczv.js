import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    X5 as n,
    Y5 as r
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    Bn as i,
    Vn as a
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $_t as o,
    B_t as s,
    T_t as c,
    Y_t as l,
    Z_t as u
} from "./conversation-small-nmt18uiom3b14vca.js";
import {
    i as d,
    r as f
} from "./4b68ab38-hqs0yc0b0yhvv7p6.js";
import {
    n as p,
    t as m
} from "./9d60841e-e49t3yx590vsf159.js";
import {
    d as h,
    g,
    l as _,
    t as ee,
    u as v,
    v as y,
    y as b
} from "./707eab0c-fwyop6b3ijt0i6j7.js";
import {
    A as x,
    D as S,
    E as C,
    F as w,
    I as te,
    L as T,
    M as E,
    N as ne,
    O as D,
    P as re,
    R as ie,
    j as ae,
    k as O,
    t as oe
} from "./bcae0416-kg7dr2sbww6cg1yo.js";
import {
    n as k,
    t as A
} from "./d4c740a3-m98a0dejurzr8grq.js";
import {
    n as j,
    t as M
} from "./d2cf4d37-gxba24340175abl7.js";
var N, P, F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q, $ = e((() => {
        oe(), N = t(a()), n(), _(), A(), l(), ee(), p(), d(), g(), c(), j(), P = i(), F = (0, N.createContext)(null), I = () => {
            let e = (0, N.useContext)(F);
            if (!e) throw Error(`Menu components must be wrapped in <Menu />`);
            return e
        }, L = ({
            children: e,
            forceOpen: t,
            onOpen: n,
            onClose: r,
            modal: i = !1
        }) => {
            let [a, o] = (0, N.useState)(!1), s = t ?? a, c = k(n), l = k(r), u = (0, N.useCallback)(e => {
                o(e), e ? c.current?.() : l.current?.()
            }, [c, l]);
            v(a, () => {
                u(!1)
            });
            let d = (0, N.useMemo)(() => ({
                open: s,
                setOpen: u
            }), [s, u]);
            return (0, P.jsx)(F.Provider, {
                value: d,
                children: (0, P.jsx)(ne, {
                    open: s,
                    onOpenChange: u,
                    modal: i,
                    children: e
                })
            })
        }, R = ({
            className: e,
            children: t,
            disabled: n,
            onSelect: i,
            color: a,
            onClick: o
        }) => {
            let {
                open: s
            } = I(), c = e => {
                s || e.preventDefault()
            };
            return i ? (0, P.jsx)(D, {
                className: r(M.MenuItem, e),
                "data-color": a,
                onSelect: i,
                onClick: o,
                disabled: n,
                onPointerMove: c,
                onPointerLeave: c,
                children: (0, P.jsx)(`div`, {
                    className: M.PressableInner,
                    children: t
                })
            }) : (0, P.jsx)(`div`, {
                className: r(M.MenuItemContent, e),
                children: t
            })
        }, z = ({
            className: e,
            children: t
        }) => (0, P.jsx)(`div`, {
            className: r(M.ItemActions, e),
            children: t
        }), B = ({
            children: e,
            onClick: t
        }) => {
            let {
                setOpen: n
            } = I();
            return (0, P.jsx)(h, {
                className: `rounded-sm`,
                color: `secondary`,
                size: `xs`,
                uniform: !0,
                iconSize: `sm`,
                variant: `ghost`,
                onClick: e => {
                    e.stopPropagation(), n(!1), t(e)
                },
                children: e
            })
        }, V = (e => {
            let {
                className: t,
                children: n,
                href: i,
                to: a,
                disabled: o,
                as: s,
                ...c
            } = e, {
                open: l
            } = I(), u = i || a, d = !u || /^https?:\/\//.test(u), f = y(), p = s || (d ? `a` : f), m = e => {
                l || e.preventDefault()
            }, h = d ? {
                target: `_blank`,
                rel: `noopener noreferrer`,
                href: i ?? a
            } : {
                href: i,
                to: a
            };
            return (0, P.jsx)(D, {
                asChild: !0,
                className: r(M.MenuItem, t),
                disabled: o,
                onPointerMove: d ? void 0 : m,
                onPointerLeave: d ? void 0 : m,
                children: (0, P.jsx)(p, {
                    ...h,
                    ...c,
                    children: (0, P.jsx)(`span`, {
                        className: M.PressableInner,
                        children: n
                    })
                })
            })
        }), H = ({
            className: e
        }) => (0, P.jsx)(re, {
            className: r(M.Separator, e),
            role: `separator`
        }), U = ({
            children: e,
            className: t,
            container: n,
            side: i,
            sideOffset: a = 5,
            align: c,
            alignOffset: l,
            width: d,
            minWidth: f,
            maxHeight: p,
            onCloseAutoFocus: m
        }) => {
            let {
                open: h
            } = I(), g = b();
            return (0, P.jsx)(x, {
                forceMount: !0,
                container: n ?? g,
                children: (0, P.jsx)(s, {
                    className: M.Menu,
                    enterDuration: 350,
                    exitDuration: 200,
                    children: h && (0, P.jsx)(S, {
                        forceMount: !0,
                        className: r(M.MenuList, t),
                        side: i,
                        sideOffset: a,
                        align: c,
                        alignOffset: l ?? (c === `center` ? 0 : -5),
                        avoidCollisions: !0,
                        collisionPadding: {
                            bottom: 30,
                            top: 30,
                            left: 12,
                            right: 12
                        },
                        onEscapeKeyDown: u,
                        onCloseAutoFocus: m,
                        style: o({
                            "menu-width": d,
                            "menu-min-width": f,
                            "menu-max-height": p
                        }),
                        children: e
                    }, `dropdown`)
                })
            })
        }, W = ({
            children: e,
            disabled: t
        }) => (0, P.jsx)(ie, {
            asChild: !0,
            disabled: t,
            children: e
        }), G = (0, N.createContext)(null), K = () => {
            let e = (0, N.useContext)(G);
            if (!e) throw Error(`Submenu components must be wrapped in <Sub />`);
            return e
        }, q = ({
            children: e,
            forceOpen: t,
            onOpen: n,
            onClose: r
        }) => {
            let [i, a] = (0, N.useState)(!1), o = (0, N.useRef)(null), s = t ?? i, c = k(n), l = k(r), u = (0, N.useCallback)(e => {
                a(e), e ? c.current?.() : l.current?.()
            }, [c, l]);
            v(i, () => {
                u(!1), o.current?.focus()
            });
            let d = (0, N.useMemo)(() => ({
                open: s,
                setOpen: u,
                triggerRef: o
            }), [s, u]);
            return (0, P.jsx)(G.Provider, {
                value: d,
                children: (0, P.jsx)(w, {
                    open: s,
                    onOpenChange: u,
                    children: e
                })
            })
        }, J = ({
            className: e,
            children: t,
            disabled: n
        }) => {
            let {
                open: i
            } = I(), {
                triggerRef: a
            } = K(), o = e => {
                i || e.preventDefault()
            };
            return (0, P.jsx)(T, {
                ref: a,
                className: r(M.MenuItem, M.SubMenuItem, e),
                disabled: n,
                onPointerMove: o,
                onPointerLeave: o,
                children: (0, P.jsxs)(`div`, {
                    className: M.PressableInner,
                    children: [t, (0, P.jsx)(f, {
                        width: `16`,
                        height: `16`,
                        className: M.SubTriggerIcon
                    })]
                })
            })
        }, Y = ({
            children: e,
            sideOffset: t = 4,
            alignOffset: n = -6,
            width: r = `auto`,
            minWidth: i = `auto`,
            maxHeight: a
        }) => {
            let {
                open: c
            } = K(), l = b();
            return (0, P.jsx)(x, {
                forceMount: !0,
                container: l,
                children: (0, P.jsx)(s, {
                    className: M.Menu,
                    enterDuration: 350,
                    exitDuration: 200,
                    children: c && (0, P.jsx)(te, {
                        className: M.MenuList,
                        sideOffset: t,
                        alignOffset: n,
                        avoidCollisions: !0,
                        collisionPadding: {
                            bottom: 30,
                            top: 30,
                            left: 12,
                            right: 12
                        },
                        onEscapeKeyDown: u,
                        style: o({
                            "menu-width": r,
                            "menu-min-width": i,
                            "menu-max-height": a
                        }),
                        children: e
                    }, `submenu`)
                })
            })
        }, X = ({
            children: e,
            value: t,
            onChange: n,
            indicatorPosition: r = `end`,
            ...i
        }) => (0, P.jsx)(ae, {
            ...i,
            value: t,
            onValueChange: e => n(e),
            "data-indicator-position": r,
            children: e
        }), Z = ({
            className: e,
            children: t,
            ...n
        }) => (0, P.jsx)(E, {
            className: r(M.MenuItem, M.RadioItem, e),
            ...n,
            children: (0, P.jsxs)(`div`, {
                className: M.PressableInner,
                children: [(0, P.jsx)(`div`, {
                    className: M.RadioIndicator,
                    children: (0, P.jsx)(O, {
                        className: M.RadioIndicatorActive
                    })
                }), t]
            })
        }), Q = ({
            className: e,
            children: t,
            indicatorPosition: n = `end`,
            indicatorVariant: i = `solid`,
            ...a
        }) => (0, P.jsx)(C, {
            className: r(M.MenuItem, M.CheckboxItem, e),
            ...a,
            "data-indicator-position": n,
            "data-indicator-variant": i,
            children: (0, P.jsxs)(`div`, {
                className: M.PressableInner,
                children: [(0, P.jsx)(`div`, {
                    className: M.CheckboxIndicator,
                    children: (0, P.jsx)(O, {
                        children: i === `ghost` ? (0, P.jsx)(m, {
                            className: `size-4`
                        }) : (0, P.jsx)(`div`, {
                            className: M.CheckboxCircle,
                            children: (0, P.jsx)(m, {
                                className: `size-4`
                            })
                        })
                    })
                }), t]
            })
        }), L.Content = U, L.Item = R, L.ItemActions = z, L.ItemAction = B, L.Link = V, L.Separator = H, L.Trigger = W, L.Sub = q, L.SubTrigger = J, L.SubContent = Y, L.CheckboxItem = Q, L.RadioGroup = X, L.RadioItem = Z
    })),
    se = e((() => {
        $()
    }));
export {
    L as n, $ as r, se as t
};
//# sourceMappingURL=99af6606-i1f16hart63xeczv.js.map