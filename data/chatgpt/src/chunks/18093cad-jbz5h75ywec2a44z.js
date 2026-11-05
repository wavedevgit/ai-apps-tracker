import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    l7 as n,
    u7 as r
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    Bn as i,
    Kt as a,
    Vn as o
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $_t as s,
    B_t as c,
    H_t as l,
    I_t as u,
    W_t as d,
    evt as f,
    g_t as p,
    j_t as m,
    q_t as h
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    g,
    l as _,
    u as ee,
    y as te
} from "./707eab0c-95zghyijkjk8qk3x.js";
import {
    G as ne,
    J as v,
    K as y,
    U as b,
    W as x,
    Y as S,
    q as re,
    t as C
} from "./bcae0416-ev52j8m1ypn87lda.js";
import {
    n as ie,
    t as w
} from "./d4c740a3-m98a0dejurzr8grq.js";
import {
    n as ae,
    t as oe
} from "./ed64284d-igp7j7ug678yx5td.js";
import {
    n as T,
    t as E
} from "./d357429d-oc0vsmdkjdpsjb7n.js";
var D, O, se = e((() => {
        D = t(o()), O = e => {
            let [t, n] = (0, D.useState)(!1), [r, i] = (0, D.useState)(!0), [a, o] = (0, D.useState)(!1);
            return (0, D.useEffect)(() => {
                let t = e.current;
                if (!t) return;
                let r = () => {
                    let {
                        scrollHeight: e,
                        clientHeight: r,
                        scrollTop: a
                    } = t;
                    n(e > r), i(a === 0), o(a + r >= e)
                };
                r(), t.addEventListener(`scroll`, r, {
                    passive: !0
                });
                let a = new ResizeObserver(r);
                a.observe(t);
                let s = t.ownerDocument.fonts;
                return s?.addEventListener(`loadingdone`, r), () => {
                    t.removeEventListener(`scroll`, r), a.disconnect(), s?.removeEventListener(`loadingdone`, r)
                }
            }, [e]), {
                isScrollable: t,
                isAtStart: r,
                isAtEnd: a
            }
        }
    })),
    k, A, j, M = e((() => {
        k = t(o()), A = (0, k.createContext)(null), j = () => {
            let e = (0, k.use)(A);
            if (!e) throw Error(`Modal components or hooks must be wrapped in <Modal />`);
            return e
        }
    })),
    N, P, F, I, L, R, z = e((() => {
        N = t(o()), P = t(a()), c(), M(), F = () => {
            let {
                setOpen: e
            } = j();
            return (0, N.useCallback)(() => e(!1), [e])
        }, I = () => {
            let {
                setShake: e
            } = j();
            return (0, N.useCallback)(() => {
                (0, P.flushSync)(() => {
                    e(!1)
                }), h(() => e(!0))
            }, [e])
        }, L = e => {
            let t = j();
            (0, N.useEffect)(() => {
                if (e) return t.checkAllowClose.current.add(e), () => {
                    t.checkAllowClose.current.delete(e)
                }
            }, [e, t.checkAllowClose])
        }, R = ({
            onRequestClose: e
        } = {}) => {
            let t = I(),
                n = F();
            return L(e), {
                close: n,
                shake: t
            }
        }
    })),
    B, V, H, U, W, G, K, q, J, Y, X, Z, Q, $ = e((() => {
        r(), C(), B = t(o()), f(), oe(), _(), w(), se(), c(), g(), p(), T(), M(), z(), V = i(), H = ({
            open: e,
            defaultOpen: t = !1,
            onOpenChange: n,
            children: r
        }) => {
            let [i, a] = (0, B.useState)(t), [o, s] = (0, B.useState)(!1), c = (0, B.useRef)(new Set), l = e ?? i, u = ie(n), d = (0, B.useCallback)(t => {
                l !== t && (t || s(!1), u.current?.(t), typeof e != `boolean` && a(t))
            }, [l, e, u]);
            return (0, V.jsx)(A, {
                value: (0, B.useMemo)(() => ({
                    open: l,
                    setOpen: d,
                    shake: o,
                    setShake: s,
                    checkAllowClose: c
                }), [l, d, o, s]),
                children: (0, V.jsx)(b, {
                    open: l,
                    onOpenChange: d,
                    modal: !1,
                    children: r
                })
            })
        }, U = ({
            children: e,
            ref: t
        }) => (0, V.jsx)(S, {
            asChild: !0,
            ref: t,
            children: e
        }), W = e => {
            if (!(e instanceof Element)) return !1;
            let t = e.hasAttribute(`data-grammarly-shadow-root`),
                n = e.tagName === `COM-1PASSWORD-BUTTON`,
                r = e.closest(`[data-sonner-toast], [data-sonner-toaster]`) != null,
                i = e.closest(`[data-puik-ignore-outside-interaction]`) != null;
            return t || n || r || i
        }, G = ({
            children: e,
            className: t,
            maxWidth: r,
            scroll: i = `inside`,
            backdrop: a = s.backdropStyle,
            onCloseAutoFocus: o,
            onOpenAutoFocus: c
        }) => {
            let f = !ae(`md`),
                {
                    open: p,
                    setOpen: h,
                    shake: g,
                    checkAllowClose: _
                } = j(),
                v = f ? `inside` : i,
                [y, b] = (0, B.useState)(null),
                x = te();
            ee(p, () => {
                for (let e of _.current)
                    if (e() === `deny`) return;
                h(!1)
            });
            let S = e => {
                if (y && e.target === y && e.key === `Tab` && e.shiftKey) {
                    e.preventDefault(), e.stopPropagation();
                    let t = u(y);
                    t[t.length - 1]?.focus()
                }
            };
            (0, B.useEffect)(() => {
                y && (y?.contains(document.activeElement) || y.focus({
                    preventScroll: !0
                }))
            }, [y]);
            let C = (0, B.useCallback)(e => {
                if (W(e.target)) {
                    e.preventDefault();
                    return
                }
                if (e.type === `dismissableLayer.focusOutside` || e.type === `dismissableLayer.blurOutside`) {
                    e.preventDefault();
                    return
                }
                for (let t of _.current)
                    if (t() === `deny`) {
                        e.preventDefault();
                        return
                    }
            }, [_]);
            return (0, V.jsx)(re, {
                forceMount: !0,
                container: x,
                children: (0, V.jsx)(m, {
                    enterDuration: 600,
                    exitDuration: 300,
                    className: E.ModalPortal,
                    children: p && (0, V.jsxs)(`div`, {
                        className: E.ModalPortalInner,
                        "data-backdrop": a,
                        children: [(0, V.jsx)(`div`, {
                            className: E.ModalBackdrop
                        }, `overlay`), (0, V.jsx)(`div`, {
                            className: E.ModalContainer,
                            "data-modal-scroll": v,
                            children: (0, V.jsx)(`div`, {
                                className: E.ModalContainerInner,
                                children: (0, V.jsx)(ne, {
                                    forceMount: !0,
                                    ref: b,
                                    className: n(E.Modal, t),
                                    style: d({
                                        "modal-max-width": r
                                    }),
                                    "data-animate": g ? `shake` : void 0,
                                    onOpenAutoFocus: e => {
                                        e.preventDefault(), c?.(e)
                                    },
                                    onCloseAutoFocus: o,
                                    onEscapeKeyDown: l,
                                    onKeyDown: S,
                                    onPointerDownOutside: C,
                                    onInteractOutside: C,
                                    children: e
                                })
                            })
                        })]
                    }, `modal`)
                })
            })
        }, K = ({
            children: e,
            className: t,
            ...r
        }) => (0, V.jsx)(`form`, {
            className: n(E.Form, t),
            ...r,
            children: e
        }), q = ({
            children: e
        }) => (0, V.jsx)(`div`, {
            className: E.Header,
            children: e
        }), J = ({
            children: e,
            className: t,
            ...r
        }) => {
            let i = (0, B.useRef)(null),
                {
                    isScrollable: a,
                    isAtStart: o
                } = O(i);
            return (0, V.jsx)(`div`, {
                ref: i,
                className: n(E.Body, t),
                "data-scrollable": a,
                "data-scroll-at-top": o,
                ...r,
                children: e
            })
        }, Y = ({
            children: e,
            className: t,
            ...r
        }) => (0, V.jsx)(`div`, {
            className: n(E.Footer, t),
            ...r,
            children: e
        }), X = ({
            visuallyHidden: e = !1,
            children: t,
            className: r
        }) => (0, V.jsx)(y, {
            className: n(E.Description, r),
            "data-visually-hidden": e ? `` : void 0,
            children: t
        }), Z = ({
            children: e,
            className: t,
            ...r
        }) => (0, V.jsx)(v, {
            className: n(E.Title, t),
            ...r,
            children: e
        }), Q = ({
            children: e
        }) => {
            let t = F();
            return typeof e == `function` ? (0, V.jsx)(V.Fragment, {
                children: e({
                    close: t
                })
            }) : (0, V.jsx)(x, {
                asChild: !0,
                children: e
            })
        }, H.Trigger = U, H.Content = G, H.Form = K, H.Header = q, H.Body = J, H.Footer = Y, H.Title = Z, H.Description = X, H.Close = Q
    })),
    ce = e((() => {
        $(), z()
    }));
export {
    R as a, z as i, H as n, $ as r, ce as t
};
//# sourceMappingURL=18093cad-jbz5h75ywec2a44z.js.map