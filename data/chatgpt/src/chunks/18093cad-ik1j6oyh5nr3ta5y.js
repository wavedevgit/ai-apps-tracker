import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    b5 as n,
    y5 as r
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as i,
    Kt as a,
    Vn as o
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    G_t as s,
    J_t as c,
    L_t as l,
    M_t as u,
    U_t as d,
    V_t as f,
    __t as p,
    evt as ee,
    tvt as m
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    g as h,
    l as g,
    u as te,
    y as ne
} from "./707eab0c-joqgzfzs0dn7ukcc.js";
import {
    G as re,
    J as _,
    K as v,
    U as y,
    W as b,
    Y as ie,
    q as x,
    t as S
} from "./bcae0416-eho3k65xd82h5dgh.js";
import {
    n as ae,
    t as C
} from "./d4c740a3-grm4mqv12ru1q0ee.js";
import {
    n as w,
    t as oe
} from "./ed64284d-fixeeaz368mtjcxk.js";
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
        N = t(o()), P = t(a()), f(), M(), F = () => {
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
                }), c(() => e(!0))
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
        n(), S(), B = t(o()), m(), oe(), g(), C(), se(), f(), h(), p(), T(), M(), z(), V = i(), H = ({
            open: e,
            defaultOpen: t = !1,
            onOpenChange: n,
            children: r
        }) => {
            let [i, a] = (0, B.useState)(t), [o, s] = (0, B.useState)(!1), c = (0, B.useRef)(new Set), l = e ?? i, u = ae(n), d = (0, B.useCallback)(t => {
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
                children: (0, V.jsx)(y, {
                    open: l,
                    onOpenChange: d,
                    modal: !1,
                    children: r
                })
            })
        }, U = ({
            children: e,
            ref: t
        }) => (0, V.jsx)(ie, {
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
            maxWidth: n,
            scroll: i = `inside`,
            backdrop: a = ee.backdropStyle
        }) => {
            let o = !w(`md`),
                {
                    open: c,
                    setOpen: f,
                    shake: p,
                    checkAllowClose: m
                } = j(),
                h = o ? `inside` : i,
                [g, _] = (0, B.useState)(null),
                v = ne();
            te(c, () => {
                for (let e of m.current)
                    if (e() === `deny`) return;
                f(!1)
            });
            let y = e => {
                if (g && e.target === g && e.key === `Tab` && e.shiftKey) {
                    e.preventDefault(), e.stopPropagation();
                    let t = l(g);
                    t[t.length - 1]?.focus()
                }
            };
            (0, B.useEffect)(() => {
                g && (g?.contains(document.activeElement) || g.focus({
                    preventScroll: !0
                }))
            }, [g]);
            let b = (0, B.useCallback)(e => {
                if (W(e.target)) {
                    e.preventDefault();
                    return
                }
                if (e.type === `dismissableLayer.focusOutside` || e.type === `dismissableLayer.blurOutside`) {
                    e.preventDefault();
                    return
                }
                for (let t of m.current)
                    if (t() === `deny`) {
                        e.preventDefault();
                        return
                    }
            }, [m]);
            return (0, V.jsx)(x, {
                forceMount: !0,
                container: v,
                children: (0, V.jsx)(u, {
                    enterDuration: 600,
                    exitDuration: 300,
                    className: E.ModalPortal,
                    children: c && (0, V.jsxs)(`div`, {
                        className: E.ModalPortalInner,
                        "data-backdrop": a,
                        children: [(0, V.jsx)(`div`, {
                            className: E.ModalBackdrop
                        }, `overlay`), (0, V.jsx)(`div`, {
                            className: E.ModalContainer,
                            "data-modal-scroll": h,
                            children: (0, V.jsx)(`div`, {
                                className: E.ModalContainerInner,
                                children: (0, V.jsx)(re, {
                                    forceMount: !0,
                                    ref: _,
                                    className: r(E.Modal, t),
                                    style: s({
                                        "modal-max-width": n
                                    }),
                                    "data-animate": p ? `shake` : void 0,
                                    onOpenAutoFocus: d,
                                    onEscapeKeyDown: d,
                                    onKeyDown: y,
                                    onPointerDownOutside: b,
                                    onInteractOutside: b,
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
            ...n
        }) => (0, V.jsx)(`form`, {
            className: r(E.Form, t),
            ...n,
            children: e
        }), q = ({
            children: e
        }) => (0, V.jsx)(`div`, {
            className: E.Header,
            children: e
        }), J = ({
            children: e,
            className: t,
            ...n
        }) => {
            let i = (0, B.useRef)(null),
                {
                    isScrollable: a,
                    isAtStart: o
                } = O(i);
            return (0, V.jsx)(`div`, {
                ref: i,
                className: r(E.Body, t),
                "data-scrollable": a,
                "data-scroll-at-top": o,
                ...n,
                children: e
            })
        }, Y = ({
            children: e,
            className: t,
            ...n
        }) => (0, V.jsx)(`div`, {
            className: r(E.Footer, t),
            ...n,
            children: e
        }), X = ({
            visuallyHidden: e = !1,
            children: t,
            className: n
        }) => (0, V.jsx)(v, {
            className: r(E.Description, n),
            "data-visually-hidden": e ? `` : void 0,
            children: t
        }), Z = ({
            children: e,
            className: t,
            ...n
        }) => (0, V.jsx)(_, {
            className: r(E.Title, t),
            ...n,
            children: e
        }), Q = ({
            children: e
        }) => {
            let t = F();
            return typeof e == `function` ? (0, V.jsx)(V.Fragment, {
                children: e({
                    close: t
                })
            }) : (0, V.jsx)(b, {
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
//# sourceMappingURL=18093cad-ik1j6oyh5nr3ta5y.js.map