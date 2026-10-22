import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    c7 as n,
    l7 as r
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    Bn as i,
    Kt as a,
    Vn as o
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    H_t as s,
    K_t as c,
    N_t as l,
    R_t as u,
    W_t as d,
    nvt as f,
    tvt as p,
    v_t as m
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    g as h,
    l as g,
    u as _,
    y as v
} from "./707eab0c-eqm4zmw552znkezy.js";
import {
    G as y,
    J as b,
    K as x,
    U as S,
    W as C,
    Y as w,
    q as T,
    t as E
} from "./bcae0416-frx726h3ax995aos.js";
import {
    n as D,
    t as O
} from "./d4c740a3-m98a0dejurzr8grq.js";
import {
    n as k,
    t as A
} from "./100d0792-hy7hder3ht3mgxwm.js";
var j, M, N, P = e((() => {
        j = t(o()), M = (0, j.createContext)(null), N = () => {
            let e = (0, j.use)(M);
            if (!e) throw Error(`Dialog components or hooks must be wrapped in <Dialog />`);
            return e
        }
    })),
    F, I, L = e((() => {
        F = t(o()), a(), P(), I = () => {
            let {
                setOpen: e
            } = N();
            return (0, F.useCallback)(() => e(!1), [e])
        }
    })),
    R, z, B, V, H, U, W, G, K, q, J, Y, X, Z = e((() => {
        r(), E(), R = t(o()), f(), g(), O(), s(), h(), m(), k(), P(), L(), z = i(), B = ({
            open: e,
            defaultOpen: t = !1,
            onOpenChange: n,
            children: r
        }) => {
            let [i, a] = (0, R.useState)(t), [o, s] = (0, R.useState)(!1), c = (0, R.useRef)(new Set), l = e ?? i, u = D(n), d = (0, R.useCallback)(t => {
                l !== t && (t || s(!1), u.current?.(t), typeof e != `boolean` && a(t))
            }, [l, e, u]);
            return (0, z.jsx)(M, {
                value: (0, R.useMemo)(() => ({
                    open: l,
                    setOpen: d,
                    shake: o,
                    setShake: s,
                    checkAllowClose: c
                }), [l, d, o, s]),
                children: (0, z.jsx)(S, {
                    open: l,
                    onOpenChange: d,
                    modal: !1,
                    children: r
                })
            })
        }, V = ({
            children: e,
            ref: t
        }) => (0, z.jsx)(w, {
            asChild: !0,
            ref: t,
            children: e
        }), H = e => {
            if (!(e instanceof Element)) return !1;
            let t = e.hasAttribute(`data-grammarly-shadow-root`),
                n = e.tagName === `COM-1PASSWORD-BUTTON`,
                r = e.closest(`[data-sonner-toast], [data-sonner-toaster]`) != null;
            return t || n || r
        }, U = ({
            children: e,
            className: t,
            maxWidth: r,
            backdrop: i = p.backdropStyle
        }) => {
            let {
                open: a,
                setOpen: o,
                shake: s,
                checkAllowClose: f
            } = N(), [m, h] = (0, R.useState)(null), g = v();
            _(a, () => {
                for (let e of f.current)
                    if (e() === `deny`) return;
                o(!1)
            });
            let b = e => {
                if (m && e.target === m && e.key === `Tab` && e.shiftKey) {
                    e.preventDefault(), e.stopPropagation();
                    let t = u(m);
                    t[t.length - 1]?.focus()
                }
            };
            (0, R.useEffect)(() => {
                m && (m?.contains(document.activeElement) || m.focus({
                    preventScroll: !0
                }))
            }, [m]);
            let x = (0, R.useCallback)(e => {
                if (H(e.target)) {
                    e.preventDefault();
                    return
                }
                if (e.type === `dismissableLayer.focusOutside` || e.type === `dismissableLayer.blurOutside`) {
                    e.preventDefault();
                    return
                }
                for (let t of f.current)
                    if (t() === `deny`) {
                        e.preventDefault();
                        return
                    }
            }, [f]);
            return (0, z.jsx)(T, {
                forceMount: !0,
                container: g,
                children: (0, z.jsx)(l, {
                    enterDuration: 600,
                    exitDuration: 300,
                    className: A.DialogPortal,
                    children: a && (0, z.jsxs)(`div`, {
                        className: A.DialogPortalInner,
                        "data-backdrop": i,
                        "data-puik-ignore-outside-interaction": !0,
                        children: [(0, z.jsx)(`div`, {
                            className: A.DialogBackdrop
                        }, `overlay`), (0, z.jsx)(`div`, {
                            className: A.DialogContainer,
                            children: (0, z.jsx)(`div`, {
                                className: A.DialogContainerInner,
                                children: (0, z.jsx)(y, {
                                    forceMount: !0,
                                    ref: h,
                                    className: n(A.Dialog, t),
                                    style: c({
                                        "dialog-max-width": r
                                    }),
                                    "data-animate": s ? `shake` : void 0,
                                    onOpenAutoFocus: d,
                                    onEscapeKeyDown: d,
                                    onKeyDown: b,
                                    onPointerDownOutside: x,
                                    onInteractOutside: x,
                                    children: e
                                })
                            })
                        })]
                    }, `dialog`)
                })
            })
        }, W = ({
            children: e,
            className: t,
            ...r
        }) => (0, z.jsx)(`form`, {
            className: n(A.Form, t),
            ...r,
            children: e
        }), G = ({
            children: e
        }) => (0, z.jsx)(`div`, {
            className: A.Header,
            children: e
        }), K = ({
            children: e,
            className: t,
            ...r
        }) => (0, z.jsx)(`div`, {
            ref: (0, R.useRef)(null),
            className: n(A.Body, t),
            ...r,
            children: e
        }), q = ({
            children: e
        }) => (0, z.jsx)(`div`, {
            className: A.Footer,
            children: e
        }), J = ({
            visuallyHidden: e = !1,
            children: t,
            className: r
        }) => (0, z.jsx)(x, {
            className: n(A.Description, r),
            "data-visually-hidden": e ? `` : void 0,
            children: t
        }), Y = ({
            children: e,
            className: t
        }) => (0, z.jsx)(b, {
            className: n(A.Title, t),
            children: e
        }), X = ({
            children: e
        }) => {
            let t = I();
            return typeof e == `function` ? (0, z.jsx)(z.Fragment, {
                children: e({
                    close: t
                })
            }) : (0, z.jsx)(C, {
                asChild: !0,
                children: e
            })
        }, B.Trigger = V, B.Content = U, B.Form = W, B.Header = G, B.Body = K, B.Footer = q, B.Title = Y, B.Description = J, B.Close = X
    })),
    Q = e((() => {
        Z(), L()
    }));
export {
    B as n, Z as r, Q as t
};
//# sourceMappingURL=69b51517-nlui308j6kml56ww.js.map