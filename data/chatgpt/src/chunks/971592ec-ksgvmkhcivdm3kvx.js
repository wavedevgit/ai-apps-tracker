import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    I1 as n,
    IN as r,
    J5 as i,
    Ktt as a,
    LN as o,
    M1 as ee,
    dnt as te,
    q5 as s
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Bn as ne,
    Hn as c,
    Qt as l,
    Rn as u,
    Tn as d,
    Vn as f,
    in as re,
    zn as p
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    AUn as m,
    MUn as h,
    T5 as ie,
    jUn as g,
    k5 as _,
    wv as v,
    xv as ae
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    fc as y,
    pc as b
} from "./30901919-jory365vq6ym5crx.js";
import {
    t as x
} from "./4c0f1f8e-lcllh9m5rwe6l2ew.js";
import {
    n as S,
    t as oe
} from "./b9e74381-h0z6cp6y2ptcf91m.js";
import {
    i as se,
    n as C,
    r as ce,
    t as le
} from "./86793a97-l54v6wfhgq5jzt0p.js";
var w, ue = e((() => {
        g(), w = m(null)
    })),
    T, E = e((() => {
        T = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M10 2.25171C14.473 2.25171 18.1649 5.68532 18.165 9.99976C18.165 14.3143 14.4731 17.7488 10 17.7488C8.47948 17.7488 7.19622 17.2958 5.94043 16.7087L3.73633 17.281C3.13492 17.4369 2.58124 16.9022 2.71582 16.2957L3.17871 14.2068C2.53737 12.9533 1.83496 11.7287 1.83496 9.99976C1.83515 5.68532 5.52703 2.25171 10 2.25171Z"
    fill="currentColor"
  />
</svg>
`
    }));

function D(e) {
    "use forget";
    let t = (0, _e.c)(3),
        {
            children: n,
            value: r
        } = e,
        i;
    return t[0] !== n || t[1] !== r ? (i = (0, k.jsx)(w.Provider, {
        value: r,
        children: n
    }), t[0] = n, t[1] = r, t[2] = i) : i = t[2], i
}

function de(e) {
    "use forget";
    let t = (0, _e.c)(86),
        {
            image: n,
            imageLabel: r,
            autoFocus: i,
            rounded: a,
            viewport: c,
            cancelInteractionRef: l,
            annotations: u,
            pendingAnnotation: d,
            onCreateAnnotationAt: f,
            onEditAnnotation: re,
            onMoveAnnotation: p,
            onSubmitAnnotation: m,
            onDeleteAnnotation: h,
            onCancelAnnotation: g
        } = e,
        _ = i === void 0 || i,
        v = a !== void 0 && a,
        b = ne(),
        x = ee(),
        S;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (S = te(), t[0] = S) : S = t[0];
    let C = S,
        ce = (0, O.useRef)(null),
        w = (0, O.useRef)(null),
        ue = (0, O.useRef)(null),
        T = (0, O.useRef)(null),
        E = (0, O.useRef)(null),
        D = (0, O.useRef)(null),
        de = (0, O.useRef)(null),
        pe = (0, O.useRef)(null),
        [me, he] = (0, ve.default)(),
        [ge, ye] = (0, ve.default)(),
        [A, Se] = (0, O.useState)(null),
        Le;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (Le = {
        key: null,
        offset: 0
    }, t[1] = Le) : Le = t[1];
    let [Re, ze] = (0, O.useState)(Le), [Be, F] = (0, O.useState)(null), [I, Ve] = (0, O.useState)(null), [He, L] = (0, O.useState)(null), Ue = (0, O.useId)(), [We, R] = (0, O.useState)(!1), Ge;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (Ge = {
        x: .5,
        y: .5
    }, t[2] = Ge) : Ge = t[2];
    let [z, Ke] = (0, O.useState)(Ge), [qe, Je] = (0, O.useState)(``), B = c?.isInteracting ?? !1, Ye;
    t[3] !== r || t[4] !== b ? (Ye = r == null ? b.formatMessage(P.surfaceLabel) : b.formatMessage(P.surfaceLabelWithImage, {
        image: r
    }), t[3] = r, t[4] = b, t[5] = Ye) : Ye = t[5];
    let Xe = Ye,
        Ze;
    t[6] === b ? Ze = t[7] : (Ze = b.formatMessage(P.instructions), t[6] = b, t[7] = Ze);
    let Qe = Ze,
        $e;
    t[8] === b ? $e = t[9] : ($e = e => b.formatMessage(P.cursorMoved, e), t[8] = b, t[9] = $e);
    let et = $e,
        tt;
    t[10] === b ? tt = t[11] : (tt = e => b.formatMessage(P.placed, e), t[10] = b, t[11] = tt);
    let nt = tt,
        rt;
    t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (rt = () => {
        E.current != null && (clearTimeout(E.current), E.current = null)
    }, t[12] = rt) : rt = t[12];
    let V = rt,
        it;
    t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (it = e => {
        e != null && L(null), de.current = e, Ve(e)
    }, t[13] = it) : it = t[13];
    let H = it,
        at, ot;
    t[14] === Symbol.for(`react.memo_cache_sentinel`) ? (at = () => () => {
        V()
    }, ot = [V], t[14] = at, t[15] = ot) : (at = t[14], ot = t[15]), (0, O.useEffect)(at, ot);
    let st, ct;
    t[16] === Symbol.for(`react.memo_cache_sentinel`) ? (st = () => () => {
        let e = w.current,
            t = e?.ownerDocument.activeElement;
        t != null && t !== e && e?.contains(t) && e.focus({
            preventScroll: !0
        }), R(!1), T.current = null, D.current = null, V(), H(null), F(null), L(null)
    }, ct = [V, H], t[16] = st, t[17] = ct) : (st = t[16], ct = t[17]), (0, O.useImperativeHandle)(l, st, ct);
    let lt, ut;
    t[18] === Symbol.for(`react.memo_cache_sentinel`) ? (lt = () => {
        let e = ce.current;
        if (!e) return;
        let t = () => {
            let {
                width: t,
                height: n
            } = e.getBoundingClientRect();
            Se(e => e?.width === t && e?.height === n ? e : {
                width: t,
                height: n
            })
        };
        if (t(), typeof ResizeObserver > `u`) return;
        let n = new ResizeObserver(() => {
            t()
        });
        return n.observe(e), () => {
            n.disconnect()
        }
    }, ut = [], t[18] = lt, t[19] = ut) : (lt = t[18], ut = t[19]), (0, O.useEffect)(lt, ut);
    let dt, ft;
    t[20] === _ ? (dt = t[21], ft = t[22]) : (dt = () => {
        if (C || !_) return;
        let e = window.requestAnimationFrame(() => {
            w.current?.focus()
        });
        return () => {
            window.cancelAnimationFrame(e)
        }
    }, ft = [_, C], t[20] = _, t[21] = dt, t[22] = ft), (0, O.useEffect)(dt, ft);
    let pt;
    t[23] !== A || t[24] !== n.height || t[25] !== n.width || t[26] !== c?.imageRect ? (pt = c?.imageRect ?? (A == null ? void 0 : oe({
        mediaWidth: n.width,
        mediaHeight: n.height,
        containerWidth: A.width,
        containerHeight: A.height
    })), t[23] = A, t[24] = n.height, t[25] = n.width, t[26] = c?.imageRect, t[27] = pt) : pt = t[27];
    let U = pt,
        mt;
    t[28] === Symbol.for(`react.memo_cache_sentinel`) ? (mt = e => {
        let t = w.current;
        if (!t) return null;
        let n = t.getBoundingClientRect();
        return n.width === 0 || n.height === 0 || !Number.isFinite(e.clientX) || !Number.isFinite(e.clientY) ? null : {
            x: j((e.clientX - n.left) / n.width),
            y: j((e.clientY - n.top) / n.height)
        }
    }, t[28] = mt) : mt = t[28];
    let W = mt,
        ht;
    t[29] === B ? ht = t[30] : (ht = e => {
        R(!1);
        let t = T.current;
        if (t != null && Math.hypot(e.clientX - t.clientX, e.clientY - t.clientY) > xe && (T.current = null), C || e.pointerType === `touch` || B) {
            F(null);
            return
        }
        if (Ie(e.target)) {
            F(null);
            return
        }
        let n = W(e);
        n != null && (L(null), Ke(n), F(n))
    }, t[29] = B, t[30] = ht);
    let gt = ht,
        _t;
    t[31] !== n.height || t[32] !== n.width ? (_t = e => ({
        x: Math.round(e.x * n.width),
        y: Math.round(e.y * n.height)
    }), t[31] = n.height, t[32] = n.width, t[33] = _t) : _t = t[33];
    let G = _t,
        vt;
    t[34] !== et || t[35] !== G || t[36] !== z ? (vt = (e, t) => {
        R(!0);
        let n = w.current;
        if (!n) return;
        let r = n.getBoundingClientRect();
        if (r.width === 0 || r.height === 0) return;
        let i = {
            x: j(z.x + e / r.width),
            y: j(z.y + t / r.height)
        };
        i.x === z.x && i.y === z.y || (Ke(i), F(null), L(null), Je(et(G(i))))
    }, t[34] = et, t[35] = G, t[36] = z, t[37] = vt) : vt = t[37];
    let K = vt,
        yt;
    t[38] !== G || t[39] !== nt || t[40] !== z || t[41] !== f ? (yt = () => {
        f(z), F(null), L(null), Je(nt(G(z)))
    }, t[38] = G, t[39] = nt, t[40] = z, t[41] = f, t[42] = yt) : yt = t[42];
    let bt = yt,
        xt;
    t[43] !== bt || t[44] !== B || t[45] !== K || t[46] !== d ? (xt = e => {
        if (e.altKey || e.ctrlKey || e.metaKey || B || d || Ie(e.target)) return;
        let t = e.shiftKey ? Fe : Pe;
        switch (e.key) {
            case `ArrowUp`:
                e.preventDefault(), K(0, -t);
                return;
            case `ArrowDown`:
                e.preventDefault(), K(0, t);
                return;
            case `ArrowLeft`:
                e.preventDefault(), K(-t, 0);
                return;
            case `ArrowRight`:
                e.preventDefault(), K(t, 0);
                return;
            case `Enter`:
                e.preventDefault(), bt();
                return;
            default:
                return
        }
    }, t[43] = bt, t[44] = B, t[45] = K, t[46] = d, t[47] = xt) : xt = t[47];
    let St = xt,
        Ct;
    t[48] === B ? Ct = t[49] : (Ct = (e, t) => {
        if (e.defaultPrevented || e.button > 0 || B) return;
        let n = W(e);
        if (n == null) return;
        e.preventDefault(), e.stopPropagation(), F(null), V();
        let r = e.pointerId,
            i = {
                id: t.id,
                pointerId: r,
                point: n
            };
        D.current = i, e.currentTarget.setPointerCapture?.(r), E.current = setTimeout(() => {
            let e = D.current;
            E.current = null, !(e?.id !== t.id || e.pointerId !== r) && H(e)
        }, be)
    }, t[48] = B, t[49] = Ct);
    let wt = Ct,
        Tt;
    t[50] === Symbol.for(`react.memo_cache_sentinel`) ? (Tt = e => {
        let t = D.current;
        if (t == null || t.pointerId !== e.pointerId) return;
        let n = W(e);
        if (n == null) return;
        let r = {
            ...t,
            point: n
        };
        D.current = r;
        let i = de.current;
        i?.id === t.id && i.pointerId === e.pointerId && H(r)
    }, t[50] = Tt) : Tt = t[50];
    let Et = Tt,
        Dt;
    t[51] !== re || t[52] !== p ? (Dt = (e, t) => {
        let n = D.current;
        if (n == null || n.id !== t.id || n.pointerId !== e.pointerId) return;
        e.preventDefault(), e.stopPropagation(), V(), D.current = null, e.currentTarget.releasePointerCapture?.(e.pointerId);
        let r = de.current;
        if (r?.id === t.id && r.pointerId === e.pointerId) {
            let n = W(e) ?? r.point;
            H(null), pe.current = t.id, p(t.id, n);
            return
        }
        re(t.id)
    }, t[51] = re, t[52] = p, t[53] = Dt) : Dt = t[53];
    let Ot = Dt,
        kt;
    t[54] === Symbol.for(`react.memo_cache_sentinel`) ? (kt = e => {
        let t = D.current;
        t == null || t.pointerId !== e.pointerId || (V(), D.current = null, e.currentTarget.releasePointerCapture?.(e.pointerId), H(null))
    }, t[54] = kt) : kt = t[54];
    let At = kt,
        jt;
    t[55] !== B || t[56] !== f || t[57] !== c ? (jt = e => {
        if (R(!1), e.defaultPrevented || B || Ie(e.target) || e.button > 0) return;
        let t = W(e);
        if (t != null) {
            if (e.preventDefault(), L(null), c != null) {
                T.current = e.pointerType === `touch` && !e.isPrimary ? null : {
                    pointerId: e.pointerId,
                    clientX: e.clientX,
                    clientY: e.clientY
                };
                return
            }
            f(t)
        }
    }, t[55] = B, t[56] = f, t[57] = c, t[58] = jt) : jt = t[58];
    let Mt = jt,
        Nt;
    t[59] !== B || t[60] !== f ? (Nt = e => {
        let t = T.current;
        if (T.current = null, t == null || t.pointerId !== e.pointerId || e.defaultPrevented || B || Ie(e.target) || Math.hypot(e.clientX - t.clientX, e.clientY - t.clientY) > xe) return;
        let n = W(e);
        n != null && (e.preventDefault(), f(n))
    }, t[59] = B, t[60] = f, t[61] = Nt) : Nt = t[61];
    let Pt = Nt,
        Ft;
    t[62] === d ? Ft = t[63] : (Ft = d == null ? null : [d.id ?? `new`, d.x.toFixed(4), d.y.toFixed(4), d.text ?? ``].join(`:`), t[62] = d, t[63] = Ft);
    let It = Ft,
        Lt = d != null && d.id == null ? u.length + 1 : null,
        Rt = me.height || Ne,
        zt;
    t[64] !== u || t[65] !== I || t[66] !== B || t[67] !== d || t[68] !== He ? (zt = d == null && I == null && !B && He != null ? u.find(e => e.id === He) : null, t[64] = u, t[65] = I, t[66] = B, t[67] = d, t[68] = He, t[69] = zt) : zt = t[69];
    let Bt = zt,
        q = d ?? Bt,
        Vt = d != null,
        J = typeof U?.width == `number` ? U.width : A?.width ?? 0,
        Y = typeof U?.height == `number` ? U.height : A?.height ?? 0,
        Ht = ge.width > 0 ? Math.min(Math.ceil(ge.width), Ae) : null,
        Ut = (Vt ? Oe : Ht ?? Ae) + ke,
        Wt = Math.min(N, J / 2),
        Gt = Bt != null || d?.id != null ? De : Ee,
        Kt = (q?.x ?? 0) * J,
        qt = Kt + Gt,
        X = A?.width ?? J,
        Jt = A?.height ?? Y,
        Z = (c?.imageRect.left ?? 0) + (q?.x ?? 0) * J,
        Yt = (c?.imageRect.top ?? 0) + (q?.y ?? 0) * Y,
        Xt = c != null && A != null && (Z < 0 || Z > X || Yt < 0 || Yt > Jt),
        Zt = d != null && Xt,
        Qt, $t;
    t[70] === Zt ? (Qt = t[71], $t = t[72]) : (Qt = () => {
        Zt && ue.current?.()
    }, $t = [Zt], t[70] = Zt, t[71] = Qt, t[72] = $t), o(Qt, $t);
    let en;
    t[73] !== Y || t[74] !== J || t[75] !== c || t[76] !== Jt || t[77] !== X ? (en = e => {
        let t = {
            left: `${e.x*100}%`,
            top: `${e.y*100}%`
        };
        if (c == null) return t;
        let n = c.imageRect.left + e.x * J,
            r = c.imageRect.top + e.y * Y;
        return n < 0 || n > X || r < 0 || r > Jt ? t : {
            ...t,
            marginLeft: Math.min(0, X - n - M),
            marginTop: Math.max(0, M - r)
        }
    }, t[73] = Y, t[74] = J, t[75] = c, t[76] = Jt, t[77] = X, t[78] = en) : en = t[78];
    let tn = en,
        nn = c == null ? C ? Math.min(Ut, Math.max(0, J - 2 * Wt)) : Ut : Math.min(Ut, Math.max(0, X - 2 * N)),
        rn = C ? Math.max(Wt, Math.min((q?.x ?? 0) < .5 ? Kt : qt, J - nn - Wt)) : qt,
        an = C ? je : -(Rt / 2 + M / 2),
        on = c == null || A == null || q == null ? null : d == null ? `preview:${Bt?.id}` : `edit:${It}`,
        sn = Math.max(N, Math.min(Yt + an, Jt - Rt - N)) - Yt;
    Re.key !== on && ze({
        key: on,
        offset: sn
    });
    let cn = (q?.y ?? 0) * Y + (on == null ? an : Re.key === on ? Re.offset : sn),
        ln = Z + Gt + nn > X - N ? Math.min(Z, X - M) - nn - (Gt - M) : Z + Gt,
        un = c == null ? rn : Math.max(N, Math.min(ln, X - nn - N)) - c.imageRect.left,
        dn = c == null && !C && !B && d == null && I == null && Be != null,
        fn = !B && d == null && I == null && We,
        pn = c != null && `isolate overflow-clip`,
        Q;
    t[79] === pn ? Q = t[80] : (Q = s(`relative h-full w-full`, pn), t[79] = pn, t[80] = Q);
    let $;
    t[81] === Symbol.for(`react.memo_cache_sentinel`) ? ($ = e => {
        e.pointerType === `touch` && !e.isPrimary && (T.current = null)
    }, t[81] = $) : $ = t[81];
    let mn = U && (0, k.jsxs)(`div`, {
            "data-testid": `contained-annotation-surface`,
            className: s(`absolute overflow-visible`, v ? `rounded-xl` : `rounded-none`),
            style: U,
            children: [c == null ? (0, k.jsx)(`div`, {
                className: s(`absolute inset-0 overflow-hidden bg-neutral-100`, v ? `rounded-xl` : `border-token-border-light shadow-elevation-03 rounded-none border`),
                children: (0, k.jsx)(`img`, {
                    src: ie(n, !x?.hasPaidSubscription()),
                    alt: r == null ? n.title ?? `` : ``,
                    className: `block h-full w-full object-contain`,
                    fetchPriority: `high`,
                    loading: `eager`,
                    decoding: `async`
                })
            }) : null, (0, k.jsxs)(`div`, {
                ref: w,
                "data-testid": `annotation-hit-surface`,
                className: s(`absolute inset-0 z-[60]`, dn && `cursor-none`, I != null && `cursor-grabbing`),
                style: c != null && !C ? {
                    cursor: c.isDragging || I != null ? `grabbing` : B ? `grab` : fn ? `none` : Ce
                } : void 0,
                tabIndex: 0,
                "aria-label": Xe,
                "aria-describedby": Ue,
                onPointerDown: Mt,
                onPointerMove: gt,
                onPointerUp: Pt,
                onPointerCancel: () => {
                    T.current = null
                },
                onPointerLeave: () => {
                    T.current = null, F(null), L(null)
                },
                onFocus: e => {
                    e.currentTarget === e.target && (R(!0), F(null), L(null))
                },
                onBlur: () => R(!1),
                onKeyDown: St,
                children: [u.map((e, t) => {
                    let n = I?.id === e.id,
                        r = d?.id === e.id,
                        i = n ? I.point : e;
                    return (0, k.jsx)(`button`, {
                        type: `button`,
                        "data-annotation-control": !0,
                        "aria-label": b.formatMessage(se.edit, {
                            number: t + 1
                        }),
                        className: s(we, n ? `z-[95] scale-105 cursor-grabbing` : d?.id === e.id ? `z-[90]` : `z-[70]`, `focus-visible:ring-token-border-brand group/annotation-marker cursor-pointer touch-none hover:scale-105 focus-visible:ring-2 focus-visible:outline-none`),
                        style: tn(i),
                        onPointerEnter: () => {
                            F(null), L(e.id)
                        },
                        onPointerLeave: () => {
                            L(t => t === e.id ? null : t)
                        },
                        onFocus: () => {
                            F(null), L(e.id)
                        },
                        onBlur: () => {
                            L(t => t === e.id ? null : t)
                        },
                        onPointerDown: t => wt(t, e),
                        onPointerMove: Et,
                        onPointerUp: t => Ot(t, e),
                        onPointerCancel: At,
                        onClick: t => {
                            if (t.stopPropagation(), pe.current === e.id) {
                                pe.current = null;
                                return
                            }
                            t.detail === 0 && re(e.id)
                        },
                        children: (0, k.jsx)(`span`, {
                            "aria-hidden": `true`,
                            className: s(Te, r && `h-6 w-6 text-xs`),
                            children: t + 1
                        })
                    }, e.id)
                }), d != null && d.id == null ? (0, k.jsx)(`div`, {
                    "data-testid": `pending-annotation-marker`,
                    "aria-hidden": `true`,
                    className: s(we, `pointer-events-none z-[90]`),
                    style: tn(d),
                    children: (0, k.jsx)(`span`, {
                        className: Te,
                        children: Lt
                    })
                }) : null, Bt == null ? null : (0, k.jsx)(`span`, {
                    ref: ye,
                    "aria-hidden": `true`,
                    className: s(Me, `pointer-events-none invisible fixed -start-[9999px] top-0`),
                    children: Bt.text
                }), dn ? (0, k.jsxs)(`div`, {
                    "data-testid": `annotation-placement-cursor`,
                    "aria-hidden": `true`,
                    className: `pointer-events-none absolute z-[65] h-6 w-6 drop-shadow-sm`,
                    style: {
                        left: `${Be.x*100}%`,
                        top: `${Be.y*100}%`,
                        transform: `translateY(-100%)`
                    },
                    children: [(0, k.jsx)(y, {
                        className: `absolute inset-0 h-6 w-6 scale-115 text-white dark:text-black`
                    }), (0, k.jsx)(y, {
                        className: `absolute inset-0 h-6 w-6 text-black dark:text-white`
                    })]
                }) : null, fn ? (0, k.jsxs)(`div`, {
                    "data-testid": `annotation-keyboard-cursor`,
                    "aria-hidden": `true`,
                    className: `pointer-events-none absolute z-[65] h-6 w-6 drop-shadow-sm`,
                    style: {
                        left: `${z.x*100}%`,
                        top: `${z.y*100}%`,
                        transform: `translateY(-100%)`
                    },
                    children: [(0, k.jsx)(y, {
                        className: `absolute inset-0 h-6 w-6 scale-115 text-white dark:text-black`
                    }), (0, k.jsx)(y, {
                        className: `absolute inset-0 h-6 w-6 text-black dark:text-white`
                    })]
                }) : null, q == null ? null : (0, k.jsx)(`div`, {
                    ref: he,
                    "data-testid": Vt ? `annotation-edit-composer` : `annotation-preview-composer`,
                    "data-annotation-control": !0,
                    "aria-hidden": Vt ? void 0 : `true`,
                    className: s(`absolute z-[80] cursor-auto [&>[role=toolbar]]:w-full [&>[role=toolbar]]:rounded-full`, Xt && `invisible`, !Vt && `pointer-events-none`),
                    style: {
                        left: un,
                        top: cn,
                        width: nn
                    },
                    onPointerDown: fe,
                    children: d == null ? (0, k.jsx)(ae, {
                        children: (0, k.jsx)(`div`, {
                            className: `flex w-full min-w-0 items-center overflow-hidden`,
                            children: (0, k.jsx)(`span`, {
                                className: Me,
                                children: q.text
                            })
                        })
                    }) : (0, k.jsx)(le, {
                        initialText: d.text,
                        commitRef: ue,
                        preventFocusScroll: c != null,
                        onSubmit: e => m({
                            ...d,
                            text: e
                        }),
                        onCancel: g,
                        onDelete: d.id == null ? void 0 : () => {
                            d.id != null && h(d.id)
                        }
                    }, It)
                }), (0, k.jsx)(`p`, {
                    id: Ue,
                    className: `sr-only`,
                    children: Qe
                }), (0, k.jsx)(`p`, {
                    className: `sr-only`,
                    role: `status`,
                    "aria-live": `polite`,
                    children: qe
                })]
            })]
        }),
        hn;
    return t[82] !== Q || t[83] !== $ || t[84] !== mn ? (hn = (0, k.jsx)(`div`, {
        ref: ce,
        className: Q,
        onPointerDownCapture: $,
        children: mn
    }), t[82] = Q, t[83] = $, t[84] = mn, t[85] = hn) : hn = t[85], hn
}

function fe(e) {
    return e.stopPropagation()
}

function pe(e) {
    return e?.setPendingAnnotation
}

function me(e) {
    return e?.setAnnotationsByImageId
}

function he(e) {
    return e?.attachImage
}

function ge(e) {
    return e?.removeImage
}
var _e, O, ve, k, ye, A, j, be, xe, Se, Ce, we, Te, Ee, De, M, Oe, ke, Ae, N, je, Me, Ne, Pe, Fe, Ie, P, Le = e((() => {
    _e = d(), b(), E(), S(), _(), v(), n(), a(), r(), i(), O = t(c()), p(), g(), ve = t(x()), l(), ue(), C(), ce(), k = f(), ye = [], A = (0, O.memo)(function(e) {
        "use forget";
        let t = (0, _e.c)(42),
            {
                image: n,
                imageLabel: r
            } = e,
            i = n.assetPointer ?? n.id,
            a;
        t[0] === i ? a = t[1] : (a = e => e?.attachmentIds.has(i) ? e.annotationsByImageId[i] ?? ye : ye, t[0] = i, t[1] = a);
        let o = h(w, a),
            ee;
        t[2] === i ? ee = t[3] : (ee = e => e?.pendingAnnotation?.imageId === i ? e.pendingAnnotation : null, t[2] = i, t[3] = ee);
        let te = h(w, ee),
            s = h(w, pe),
            ne = h(w, me),
            c = h(w, he),
            l = h(w, ge);
        if (s == null || ne == null || c == null || l == null) throw Error(`CanvasImageGenLightboxAnnotationStage requires an annotation provider`);
        let u;
        t[4] !== i || t[5] !== ne ? (u = e => {
            ne(t => ({
                ...t,
                [i]: e(t[i] ?? ye)
            }))
        }, t[4] = i, t[5] = ne, t[6] = u) : u = t[6];
        let d = u,
            f;
        t[7] !== n.assetPointer || t[8] !== i || t[9] !== s ? (f = e => {
            n.assetPointer && s({
                ...e,
                imageId: i
            })
        }, t[7] = n.assetPointer, t[8] = i, t[9] = s, t[10] = f) : f = t[10];
        let p = f,
            m;
        t[11] !== o || t[12] !== i || t[13] !== s ? (m = e => {
            let t = o.find(t => t.id === e);
            t && s({
                ...t,
                imageId: i
            })
        }, t[11] = o, t[12] = i, t[13] = s, t[14] = m) : m = t[14];
        let ie = m,
            g;
        t[15] !== s || t[16] !== d ? (g = (e, t) => {
            d(n => n.map(n => n.id === e ? {
                ...n,
                ...t
            } : n)), s(n => n?.id === e ? {
                ...n,
                ...t
            } : n)
        }, t[15] = s, t[16] = d, t[17] = g) : g = t[17];
        let _ = g,
            v;
        t[18] !== c || t[19] !== n || t[20] !== s || t[21] !== d ? (v = e => {
            let t = e.text?.trim();
            t && c(n) && d(n => e.id ? n.map(n => n.id === e.id ? {
                ...e,
                id: n.id,
                text: t
            } : n) : [...n, {
                ...e,
                id: re(),
                text: t
            }]), s(null)
        }, t[18] = c, t[19] = n, t[20] = s, t[21] = d, t[22] = v) : v = t[22];
        let ae = v,
            y;
        t[23] !== o || t[24] !== n || t[25] !== l || t[26] !== s || t[27] !== d ? (y = e => {
            let t = o.filter(t => t.id !== e);
            t.length > 0 ? d(() => t) : l(n), s(null)
        }, t[23] = o, t[24] = n, t[25] = l, t[26] = s, t[27] = d, t[28] = y) : y = t[28];
        let b = y,
            x;
        t[29] === s ? x = t[30] : (x = () => {
            s(null)
        }, t[29] = s, t[30] = x);
        let S = x,
            oe;
        return t[31] !== o || t[32] !== S || t[33] !== p || t[34] !== b || t[35] !== ie || t[36] !== _ || t[37] !== ae || t[38] !== n || t[39] !== r || t[40] !== te ? (oe = (0, k.jsx)(de, {
            image: n,
            imageLabel: r,
            autoFocus: !1,
            rounded: !0,
            annotations: o,
            pendingAnnotation: te,
            onCreateAnnotationAt: p,
            onEditAnnotation: ie,
            onMoveAnnotation: _,
            onSubmitAnnotation: ae,
            onDeleteAnnotation: b,
            onCancelAnnotation: S
        }), t[31] = o, t[32] = S, t[33] = p, t[34] = b, t[35] = ie, t[36] = _, t[37] = ae, t[38] = n, t[39] = r, t[40] = te, t[41] = oe) : oe = t[41], oe
    }), j = e => Math.min(Math.max(e, 0), 1), be = 300, xe = 8, Se = T.replace(`width="20" height="20"`, `width="24" height="24"`).replace(`fill="currentColor"`, `fill="black" stroke="white" stroke-width="1.5"`), Ce = `url("data:image/svg+xml,${encodeURIComponent(Se)}") 3 21, crosshair`, we = `absolute flex h-6 w-6 -translate-y-full cursor-pointer! items-center justify-center rounded-full transition-transform duration-150 ease-out motion-reduce:transition-none`, Te = `flex h-5 w-5 cursor-pointer! items-center justify-center rounded-full bg-black text-[11px] leading-none font-semibold text-white shadow-md ring-2 ring-white transition-[height,width,font-size] duration-150 ease-out group-hover/annotation-marker:h-6 group-hover/annotation-marker:w-6 group-hover/annotation-marker:text-xs group-focus-visible/annotation-marker:h-6 group-focus-visible/annotation-marker:w-6 group-focus-visible/annotation-marker:text-xs motion-reduce:transition-none dark:bg-white dark:text-black dark:ring-black`, Ee = 30, De = 32, M = 24, Oe = 301, ke = 8, Ae = 260, N = 8, je = 10, Me = `text-token-text-primary flex h-7 w-max max-w-[260px] items-center truncate px-2.5 text-sm whitespace-nowrap`, Ne = 36, Pe = 12, Fe = 48, Ie = e => e instanceof Element && e.closest(`[data-annotation-control]`), P = u({
        cursorMoved: {
            id: `imageGenLightbox.annotationKeyboard.cursorMoved`,
            defaultMessage: `Cursor at X {x}, Y {y}.`
        },
        instructions: {
            id: `imageGenLightbox.annotationKeyboard.instructions`,
            defaultMessage: `Use arrow keys to move the comment cursor. Hold Shift for larger moves. Press Enter to add a comment at the current location.`
        },
        placed: {
            id: `imageGenLightbox.annotationKeyboard.placed`,
            defaultMessage: `Comment placed at X {x}, Y {y}.`
        },
        surfaceLabel: {
            id: `imageGenLightbox.annotationKeyboard.surfaceLabel`,
            defaultMessage: `Image comment surface`
        },
        surfaceLabelWithImage: {
            id: `imageGenLightbox.annotationKeyboard.surfaceLabelWithImage`,
            defaultMessage: `Image comment surface: {image}`
        }
    })
}));
export {
    w as a, Le as i, A as n, ue as o, de as r, D as t
};
//# sourceMappingURL=971592ec-ksgvmkhcivdm3kvx.js.map