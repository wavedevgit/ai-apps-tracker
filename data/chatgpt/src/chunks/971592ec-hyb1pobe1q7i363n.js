import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ant as n,
    HN as r,
    U1 as i,
    UN as ee,
    c7 as a,
    dnt as o,
    l7 as s,
    q1 as c
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    Bn as l,
    Ln as u,
    Rn as d,
    Vn as f,
    Zt as p,
    rn as m,
    wn as h,
    zn as te
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    JUn as g,
    Lfn as ne,
    Nfn as re,
    Sv as ie,
    Tv as _,
    YUn as v,
    qUn as y
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    fc as b,
    pc as x
} from "./30901919-ikyi1r55w2i02fom.js";
import {
    t as S
} from "./4c0f1f8e-o4zbuwgknf8ay6gx.js";
import {
    n as C,
    t as ae
} from "./b9e74381-h0z6cp6y2ptcf91m.js";
import {
    i as oe,
    n as w,
    r as se,
    t as ce
} from "./86793a97-kzzymwkn9dxdbhdq.js";
var T, le = e((() => {
        g(), T = y(null)
    })),
    E, D = e((() => {
        E = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M10 2.25171C14.473 2.25171 18.1649 5.68532 18.165 9.99976C18.165 14.3143 14.4731 17.7488 10 17.7488C8.47948 17.7488 7.19622 17.2958 5.94043 16.7087L3.73633 17.281C3.13492 17.4369 2.58124 16.9022 2.71582 16.2957L3.17871 14.2068C2.53737 12.9533 1.83496 11.7287 1.83496 9.99976C1.83515 5.68532 5.52703 2.25171 10 2.25171Z"
    fill="currentColor"
  />
</svg>
`
    }));

function O(e) {
    "use forget";
    let t = (0, ge.c)(3),
        {
            children: n,
            value: r
        } = e,
        i;
    return t[0] !== n || t[1] !== r ? (i = (0, A.jsx)(T.Provider, {
        value: r,
        children: n
    }), t[0] = n, t[1] = r, t[2] = i) : i = t[2], i
}

function ue(e) {
    "use forget";
    let t = (0, ge.c)(86),
        {
            image: r,
            imageLabel: o,
            autoFocus: s,
            rounded: c,
            viewport: l,
            cancelInteractionRef: u,
            annotations: d,
            pendingAnnotation: f,
            onCreateAnnotationAt: p,
            onEditAnnotation: m,
            onMoveAnnotation: h,
            onSubmitAnnotation: g,
            onDeleteAnnotation: ne,
            onCancelAnnotation: _
        } = e,
        v = s === void 0 || s,
        y = c !== void 0 && c,
        x = te(),
        S = i(),
        C;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (C = n(), t[0] = C) : C = t[0];
    let w = C,
        se = (0, k.useRef)(null),
        T = (0, k.useRef)(null),
        le = (0, k.useRef)(null),
        E = (0, k.useRef)(null),
        D = (0, k.useRef)(null),
        O = (0, k.useRef)(null),
        ue = (0, k.useRef)(null),
        fe = (0, k.useRef)(null),
        [pe, me] = (0, _e.default)(),
        [he, ve] = (0, _e.default)(),
        [j, Se] = (0, k.useState)(null),
        Le;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (Le = {
        key: null,
        offset: 0
    }, t[1] = Le) : Le = t[1];
    let [Re, ze] = (0, k.useState)(Le), [Be, F] = (0, k.useState)(null), [I, Ve] = (0, k.useState)(null), [He, L] = (0, k.useState)(null), Ue = (0, k.useId)(), We = (0, k.useId)(), [Ge, R] = (0, k.useState)(!1), Ke;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (Ke = {
        x: .5,
        y: .5
    }, t[2] = Ke) : Ke = t[2];
    let [z, qe] = (0, k.useState)(Ke), [Je, Ye] = (0, k.useState)(``), B = l?.isInteracting ?? !1, Xe;
    t[3] !== o || t[4] !== x ? (Xe = o == null ? x.formatMessage(P.surfaceLabel) : x.formatMessage(P.surfaceLabelWithImage, {
        image: o
    }), t[3] = o, t[4] = x, t[5] = Xe) : Xe = t[5];
    let Ze = Xe,
        Qe;
    t[6] === x ? Qe = t[7] : (Qe = x.formatMessage(P.instructions), t[6] = x, t[7] = Qe);
    let $e = Qe,
        et;
    t[8] === x ? et = t[9] : (et = e => x.formatMessage(P.cursorMoved, e), t[8] = x, t[9] = et);
    let tt = et,
        nt;
    t[10] === x ? nt = t[11] : (nt = e => x.formatMessage(P.placed, e), t[10] = x, t[11] = nt);
    let rt = nt,
        it;
    t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (it = () => {
        D.current != null && (clearTimeout(D.current), D.current = null)
    }, t[12] = it) : it = t[12];
    let V = it,
        at;
    t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (at = e => {
        e != null && L(null), ue.current = e, Ve(e)
    }, t[13] = at) : at = t[13];
    let H = at,
        ot, st;
    t[14] === Symbol.for(`react.memo_cache_sentinel`) ? (ot = () => () => {
        V()
    }, st = [V], t[14] = ot, t[15] = st) : (ot = t[14], st = t[15]), (0, k.useEffect)(ot, st);
    let ct, lt;
    t[16] === Symbol.for(`react.memo_cache_sentinel`) ? (ct = () => () => {
        let e = T.current,
            t = e?.ownerDocument.activeElement;
        t != null && t !== e && e?.contains(t) && e.focus({
            preventScroll: !0
        }), R(!1), E.current = null, O.current = null, V(), H(null), F(null), L(null)
    }, lt = [V, H], t[16] = ct, t[17] = lt) : (ct = t[16], lt = t[17]), (0, k.useImperativeHandle)(u, ct, lt);
    let ut, dt;
    t[18] === Symbol.for(`react.memo_cache_sentinel`) ? (ut = () => {
        let e = se.current;
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
    }, dt = [], t[18] = ut, t[19] = dt) : (ut = t[18], dt = t[19]), (0, k.useEffect)(ut, dt);
    let ft, pt;
    t[20] === v ? (ft = t[21], pt = t[22]) : (ft = () => {
        if (w || !v) return;
        let e = window.requestAnimationFrame(() => {
            T.current?.focus()
        });
        return () => {
            window.cancelAnimationFrame(e)
        }
    }, pt = [v, w], t[20] = v, t[21] = ft, t[22] = pt), (0, k.useEffect)(ft, pt);
    let mt;
    t[23] !== j || t[24] !== r.height || t[25] !== r.width || t[26] !== l?.imageRect ? (mt = l?.imageRect ?? (j == null ? void 0 : ae({
        mediaWidth: r.width,
        mediaHeight: r.height,
        containerWidth: j.width,
        containerHeight: j.height
    })), t[23] = j, t[24] = r.height, t[25] = r.width, t[26] = l?.imageRect, t[27] = mt) : mt = t[27];
    let U = mt,
        ht;
    t[28] === Symbol.for(`react.memo_cache_sentinel`) ? (ht = e => {
        let t = T.current;
        if (!t) return null;
        let n = t.getBoundingClientRect();
        return n.width === 0 || n.height === 0 || !Number.isFinite(e.clientX) || !Number.isFinite(e.clientY) ? null : {
            x: ye((e.clientX - n.left) / n.width),
            y: ye((e.clientY - n.top) / n.height)
        }
    }, t[28] = ht) : ht = t[28];
    let W = ht,
        gt;
    t[29] === B ? gt = t[30] : (gt = e => {
        R(!1);
        let t = E.current;
        if (t != null && Math.hypot(e.clientX - t.clientX, e.clientY - t.clientY) > xe && (E.current = null), w || e.pointerType === `touch` || B) {
            F(null);
            return
        }
        if (Ie(e.target)) {
            F(null);
            return
        }
        let n = W(e);
        n != null && (L(null), qe(n), F(n))
    }, t[29] = B, t[30] = gt);
    let _t = gt,
        vt;
    t[31] !== r.height || t[32] !== r.width ? (vt = e => ({
        x: Math.round(e.x * r.width),
        y: Math.round(e.y * r.height)
    }), t[31] = r.height, t[32] = r.width, t[33] = vt) : vt = t[33];
    let G = vt,
        yt;
    t[34] !== tt || t[35] !== G || t[36] !== z ? (yt = (e, t) => {
        R(!0);
        let n = T.current;
        if (!n) return;
        let r = n.getBoundingClientRect();
        if (r.width === 0 || r.height === 0) return;
        let i = {
            x: ye(z.x + e / r.width),
            y: ye(z.y + t / r.height)
        };
        i.x === z.x && i.y === z.y || (qe(i), F(null), L(null), Ye(tt(G(i))))
    }, t[34] = tt, t[35] = G, t[36] = z, t[37] = yt) : yt = t[37];
    let K = yt,
        bt;
    t[38] !== G || t[39] !== rt || t[40] !== z || t[41] !== p ? (bt = () => {
        p(z), F(null), L(null), Ye(rt(G(z)))
    }, t[38] = G, t[39] = rt, t[40] = z, t[41] = p, t[42] = bt) : bt = t[42];
    let xt = bt,
        St;
    t[43] !== xt || t[44] !== B || t[45] !== K || t[46] !== f ? (St = e => {
        if (e.altKey || e.ctrlKey || e.metaKey || B || f || Ie(e.target)) return;
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
                e.preventDefault(), xt();
                return;
            default:
                return
        }
    }, t[43] = xt, t[44] = B, t[45] = K, t[46] = f, t[47] = St) : St = t[47];
    let Ct = St,
        wt;
    t[48] === B ? wt = t[49] : (wt = (e, t) => {
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
        O.current = i, e.currentTarget.setPointerCapture?.(r), D.current = setTimeout(() => {
            let e = O.current;
            D.current = null, !(e?.id !== t.id || e.pointerId !== r) && H(e)
        }, be)
    }, t[48] = B, t[49] = wt);
    let Tt = wt,
        Et;
    t[50] === Symbol.for(`react.memo_cache_sentinel`) ? (Et = e => {
        let t = O.current;
        if (t == null || t.pointerId !== e.pointerId) return;
        let n = W(e);
        if (n == null) return;
        let r = {
            ...t,
            point: n
        };
        O.current = r;
        let i = ue.current;
        i?.id === t.id && i.pointerId === e.pointerId && H(r)
    }, t[50] = Et) : Et = t[50];
    let Dt = Et,
        Ot;
    t[51] !== m || t[52] !== h ? (Ot = (e, t) => {
        let n = O.current;
        if (n == null || n.id !== t.id || n.pointerId !== e.pointerId) return;
        e.preventDefault(), e.stopPropagation(), V(), O.current = null, e.currentTarget.releasePointerCapture?.(e.pointerId);
        let r = ue.current;
        if (r?.id === t.id && r.pointerId === e.pointerId) {
            let n = W(e) ?? r.point;
            H(null), fe.current = t.id, h(t.id, n);
            return
        }
        m(t.id)
    }, t[51] = m, t[52] = h, t[53] = Ot) : Ot = t[53];
    let kt = Ot,
        At;
    t[54] === Symbol.for(`react.memo_cache_sentinel`) ? (At = e => {
        let t = O.current;
        t == null || t.pointerId !== e.pointerId || (V(), O.current = null, e.currentTarget.releasePointerCapture?.(e.pointerId), H(null))
    }, t[54] = At) : At = t[54];
    let jt = At,
        Mt;
    t[55] !== B || t[56] !== p || t[57] !== l ? (Mt = e => {
        if (R(!1), e.defaultPrevented || B || Ie(e.target) || e.button > 0) return;
        let t = W(e);
        if (t != null) {
            if (e.preventDefault(), L(null), l != null) {
                E.current = e.pointerType === `touch` && !e.isPrimary ? null : {
                    pointerId: e.pointerId,
                    clientX: e.clientX,
                    clientY: e.clientY
                };
                return
            }
            p(t)
        }
    }, t[55] = B, t[56] = p, t[57] = l, t[58] = Mt) : Mt = t[58];
    let Nt = Mt,
        Pt;
    t[59] !== B || t[60] !== p ? (Pt = e => {
        let t = E.current;
        if (E.current = null, t == null || t.pointerId !== e.pointerId || e.defaultPrevented || B || Ie(e.target) || Math.hypot(e.clientX - t.clientX, e.clientY - t.clientY) > xe) return;
        let n = W(e);
        n != null && (e.preventDefault(), p(n))
    }, t[59] = B, t[60] = p, t[61] = Pt) : Pt = t[61];
    let Ft = Pt,
        It;
    t[62] === f ? It = t[63] : (It = f == null ? null : [f.id ?? `new`, f.x.toFixed(4), f.y.toFixed(4), f.text ?? ``].join(`:`), t[62] = f, t[63] = It);
    let Lt = It,
        Rt = f != null && f.id == null ? d.length + 1 : null,
        zt = pe.height || Ne,
        Bt;
    t[64] !== d || t[65] !== I || t[66] !== B || t[67] !== f || t[68] !== He ? (Bt = f == null && I == null && !B && He != null ? d.find(e => e.id === He) : null, t[64] = d, t[65] = I, t[66] = B, t[67] = f, t[68] = He, t[69] = Bt) : Bt = t[69];
    let Vt = Bt,
        q = f ?? Vt,
        Ht = f != null,
        J = typeof U?.width == `number` ? U.width : j?.width ?? 0,
        Y = typeof U?.height == `number` ? U.height : j?.height ?? 0,
        Ut = he.width > 0 ? Math.min(Math.ceil(he.width), Ae) : null,
        Wt = (Ht ? Oe : Ut ?? Ae) + ke,
        Gt = Math.min(N, J / 2),
        Kt = Vt != null || f?.id != null ? De : Ee,
        qt = (q?.x ?? 0) * J,
        Jt = qt + Kt,
        X = j?.width ?? J,
        Z = j?.height ?? Y,
        Yt = (l?.imageRect.left ?? 0) + (q?.x ?? 0) * J,
        Xt = (l?.imageRect.top ?? 0) + (q?.y ?? 0) * Y,
        Zt = l != null && j != null && (Yt < 0 || Yt > X || Xt < 0 || Xt > Z),
        Qt = f != null && Zt,
        $t, en;
    t[70] === Qt ? ($t = t[71], en = t[72]) : ($t = () => {
        Qt && le.current?.()
    }, en = [Qt], t[70] = Qt, t[71] = $t, t[72] = en), ee($t, en);
    let tn;
    t[73] !== Y || t[74] !== J || t[75] !== l || t[76] !== Z || t[77] !== X ? (tn = e => {
        let t = {
            left: `${e.x*100}%`,
            top: `${e.y*100}%`
        };
        if (l == null) return t;
        let n = l.imageRect.left + e.x * J,
            r = l.imageRect.top + e.y * Y;
        return n < 0 || n > X || r < 0 || r > Z ? t : {
            ...t,
            marginLeft: Math.min(0, X - n - M),
            marginTop: Math.max(0, M - r)
        }
    }, t[73] = Y, t[74] = J, t[75] = l, t[76] = Z, t[77] = X, t[78] = tn) : tn = t[78];
    let nn = tn,
        rn = l == null ? w ? Math.min(Wt, Math.max(0, J - 2 * Gt)) : Wt : Math.min(Wt, Math.max(0, X - 2 * N)),
        an = w ? Math.max(Gt, Math.min((q?.x ?? 0) < .5 ? qt : Jt, J - rn - Gt)) : Jt,
        on = w ? je : -(zt / 2 + M / 2),
        sn = l == null || j == null || q == null ? null : f == null ? `preview:${Vt?.id}` : `edit:${Lt}`,
        cn = Math.max(N, Math.min(Xt + on, Z - zt - N)) - Xt;
    Re.key !== sn && ze({
        key: sn,
        offset: cn
    });
    let ln = (q?.y ?? 0) * Y + (sn == null ? on : Re.key === sn ? Re.offset : cn),
        un = Yt + Kt + rn > X - N ? Math.min(Yt, X - M) - rn - (Kt - M) : Yt + Kt,
        dn = l == null ? an : Math.max(N, Math.min(un, X - rn - N)) - l.imageRect.left,
        fn = l == null && !w && !B && f == null && I == null && Be != null,
        pn = !B && f == null && I == null && Ge,
        mn = l != null && `isolate overflow-clip`,
        Q;
    t[79] === mn ? Q = t[80] : (Q = a(`relative h-full w-full`, mn), t[79] = mn, t[80] = Q);
    let $;
    t[81] === Symbol.for(`react.memo_cache_sentinel`) ? ($ = e => {
        e.pointerType === `touch` && !e.isPrimary && (E.current = null)
    }, t[81] = $) : $ = t[81];
    let hn = U && (0, A.jsxs)(`div`, {
            "data-testid": `contained-annotation-surface`,
            className: a(`absolute overflow-visible`, y ? `rounded-xl` : `rounded-none`),
            style: U,
            children: [l == null ? (0, A.jsx)(`div`, {
                className: a(`absolute inset-0 overflow-hidden bg-neutral-100`, y ? `rounded-xl` : `border-token-border-light shadow-elevation-03 rounded-none border`),
                children: (0, A.jsx)(`img`, {
                    src: re(r, !S?.hasPaidSubscription()),
                    alt: o == null ? r.title ?? `` : ``,
                    className: `block h-full w-full object-contain`,
                    fetchPriority: `high`,
                    loading: `eager`,
                    decoding: `async`
                })
            }) : null, (0, A.jsxs)(`div`, {
                ref: T,
                "data-testid": `annotation-hit-surface`,
                className: a(`absolute inset-0 z-[60]`, fn && `cursor-none`, I != null && `cursor-grabbing`),
                style: l != null && !w ? {
                    cursor: l.isDragging || I != null ? `grabbing` : B ? `grab` : pn ? `none` : Ce
                } : void 0,
                tabIndex: 0,
                "aria-label": Ze,
                "aria-describedby": Ue,
                onPointerDown: Nt,
                onPointerMove: _t,
                onPointerUp: Ft,
                onPointerCancel: () => {
                    E.current = null
                },
                onPointerLeave: () => {
                    E.current = null, F(null), L(null)
                },
                onFocus: e => {
                    e.currentTarget === e.target && (R(!0), F(null), L(null))
                },
                onBlur: () => R(!1),
                onKeyDown: Ct,
                children: [d.map((e, t) => {
                    let n = I?.id === e.id,
                        r = f?.id === e.id,
                        i = n ? I.point : e;
                    return (0, A.jsxs)(`button`, {
                        type: `button`,
                        "data-annotation-control": !0,
                        "aria-label": x.formatMessage(oe.edit, {
                            number: t + 1
                        }),
                        "aria-describedby": `${We}-${e.id}`,
                        className: a(we, n ? `z-[95] scale-105 cursor-grabbing` : f?.id === e.id ? `z-[90]` : `z-[70]`, `focus-visible:ring-token-border-brand group/annotation-marker cursor-pointer touch-none hover:scale-105 focus-visible:ring-2 focus-visible:outline-none`),
                        style: nn(i),
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
                        onPointerDown: t => Tt(t, e),
                        onPointerMove: Dt,
                        onPointerUp: t => kt(t, e),
                        onPointerCancel: jt,
                        onClick: t => {
                            if (t.stopPropagation(), fe.current === e.id) {
                                fe.current = null;
                                return
                            }
                            t.detail === 0 && m(e.id)
                        },
                        children: [(0, A.jsx)(`span`, {
                            "aria-hidden": `true`,
                            className: a(Te, r && `h-6 w-6 text-xs`),
                            children: t + 1
                        }), (0, A.jsx)(`span`, {
                            id: `${We}-${e.id}`,
                            className: `sr-only`,
                            children: e.text
                        })]
                    }, e.id)
                }), f != null && f.id == null ? (0, A.jsx)(`div`, {
                    "data-testid": `pending-annotation-marker`,
                    "aria-hidden": `true`,
                    className: a(we, `pointer-events-none z-[90]`),
                    style: nn(f),
                    children: (0, A.jsx)(`span`, {
                        className: Te,
                        children: Rt
                    })
                }) : null, Vt == null ? null : (0, A.jsx)(`span`, {
                    ref: ve,
                    "aria-hidden": `true`,
                    className: a(Me, `pointer-events-none invisible fixed -start-[9999px] top-0`),
                    children: Vt.text
                }), fn ? (0, A.jsxs)(`div`, {
                    "data-testid": `annotation-placement-cursor`,
                    "aria-hidden": `true`,
                    className: `pointer-events-none absolute z-[65] h-6 w-6 drop-shadow-sm`,
                    style: {
                        left: `${Be.x*100}%`,
                        top: `${Be.y*100}%`,
                        transform: `translateY(-100%)`
                    },
                    children: [(0, A.jsx)(b, {
                        className: `absolute inset-0 h-6 w-6 scale-115 text-white dark:text-black`
                    }), (0, A.jsx)(b, {
                        className: `absolute inset-0 h-6 w-6 text-black dark:text-white`
                    })]
                }) : null, pn ? (0, A.jsxs)(`div`, {
                    "data-testid": `annotation-keyboard-cursor`,
                    "aria-hidden": `true`,
                    className: `pointer-events-none absolute z-[65] h-6 w-6 drop-shadow-sm`,
                    style: {
                        left: `${z.x*100}%`,
                        top: `${z.y*100}%`,
                        transform: `translateY(-100%)`
                    },
                    children: [(0, A.jsx)(b, {
                        className: `absolute inset-0 h-6 w-6 scale-115 text-white dark:text-black`
                    }), (0, A.jsx)(b, {
                        className: `absolute inset-0 h-6 w-6 text-black dark:text-white`
                    })]
                }) : null, q == null ? null : (0, A.jsx)(`div`, {
                    ref: me,
                    "data-testid": Ht ? `annotation-edit-composer` : `annotation-preview-composer`,
                    "data-annotation-control": !0,
                    "aria-hidden": Ht ? void 0 : `true`,
                    className: a(`absolute z-[80] cursor-auto [&>[role=toolbar]]:w-full [&>[role=toolbar]]:rounded-full`, Zt && `invisible`, !Ht && `pointer-events-none`),
                    style: {
                        left: dn,
                        top: ln,
                        width: rn
                    },
                    onPointerDown: de,
                    children: f == null ? (0, A.jsx)(ie, {
                        children: (0, A.jsx)(`div`, {
                            className: `flex w-full min-w-0 items-center overflow-hidden`,
                            children: (0, A.jsx)(`span`, {
                                className: Me,
                                children: q.text
                            })
                        })
                    }) : (0, A.jsx)(ce, {
                        initialText: f.text,
                        commitRef: le,
                        preventFocusScroll: l != null,
                        onSubmit: e => g({
                            ...f,
                            text: e
                        }),
                        onCancel: _,
                        onDelete: f.id == null ? void 0 : () => {
                            f.id != null && ne(f.id)
                        }
                    }, Lt)
                }), (0, A.jsx)(`p`, {
                    id: Ue,
                    className: `sr-only`,
                    children: $e
                }), (0, A.jsx)(`p`, {
                    className: `sr-only`,
                    role: `status`,
                    "aria-live": `polite`,
                    children: Je
                })]
            })]
        }),
        gn;
    return t[82] !== Q || t[83] !== $ || t[84] !== hn ? (gn = (0, A.jsx)(`div`, {
        ref: se,
        className: Q,
        onPointerDownCapture: $,
        children: hn
    }), t[82] = Q, t[83] = $, t[84] = hn, t[85] = gn) : gn = t[85], gn
}

function de(e) {
    return e.stopPropagation()
}

function fe(e) {
    return e?.setPendingAnnotation
}

function pe(e) {
    return e?.setAnnotationsByImageId
}

function me(e) {
    return e?.attachImage
}

function he(e) {
    return e?.removeImage
}
var ge, k, _e, A, ve, j, ye, be, xe, Se, Ce, we, Te, Ee, De, M, Oe, ke, Ae, N, je, Me, Ne, Pe, Fe, Ie, P, Le = e((() => {
    ge = h(), x(), D(), C(), ne(), _(), c(), o(), r(), s(), k = t(f()), d(), g(), _e = t(S()), p(), le(), w(), se(), A = l(), ve = [], j = (0, k.memo)(function(e) {
        "use forget";
        let t = (0, ge.c)(42),
            {
                image: n,
                imageLabel: r
            } = e,
            i = n.assetPointer ?? n.id,
            ee;
        t[0] === i ? ee = t[1] : (ee = e => e?.attachmentIds.has(i) ? e.annotationsByImageId[i] ?? ve : ve, t[0] = i, t[1] = ee);
        let a = v(T, ee),
            o;
        t[2] === i ? o = t[3] : (o = e => e?.pendingAnnotation?.imageId === i ? e.pendingAnnotation : null, t[2] = i, t[3] = o);
        let s = v(T, o),
            c = v(T, fe),
            l = v(T, pe),
            u = v(T, me),
            d = v(T, he);
        if (c == null || l == null || u == null || d == null) throw Error(`CanvasImageGenLightboxAnnotationStage requires an annotation provider`);
        let f;
        t[4] !== i || t[5] !== l ? (f = e => {
            l(t => ({
                ...t,
                [i]: e(t[i] ?? ve)
            }))
        }, t[4] = i, t[5] = l, t[6] = f) : f = t[6];
        let p = f,
            h;
        t[7] !== n.assetPointer || t[8] !== i || t[9] !== c ? (h = e => {
            n.assetPointer && c({
                ...e,
                imageId: i
            })
        }, t[7] = n.assetPointer, t[8] = i, t[9] = c, t[10] = h) : h = t[10];
        let te = h,
            g;
        t[11] !== a || t[12] !== i || t[13] !== c ? (g = e => {
            let t = a.find(t => t.id === e);
            t && c({
                ...t,
                imageId: i
            })
        }, t[11] = a, t[12] = i, t[13] = c, t[14] = g) : g = t[14];
        let ne = g,
            re;
        t[15] !== c || t[16] !== p ? (re = (e, t) => {
            p(n => n.map(n => n.id === e ? {
                ...n,
                ...t
            } : n)), c(n => n?.id === e ? {
                ...n,
                ...t
            } : n)
        }, t[15] = c, t[16] = p, t[17] = re) : re = t[17];
        let ie = re,
            _;
        t[18] !== u || t[19] !== n || t[20] !== c || t[21] !== p ? (_ = e => {
            let t = e.text?.trim();
            t && u(n) && p(n => e.id ? n.map(n => n.id === e.id ? {
                ...e,
                id: n.id,
                text: t
            } : n) : [...n, {
                ...e,
                id: m(),
                text: t
            }]), c(null)
        }, t[18] = u, t[19] = n, t[20] = c, t[21] = p, t[22] = _) : _ = t[22];
        let y = _,
            b;
        t[23] !== a || t[24] !== n || t[25] !== d || t[26] !== c || t[27] !== p ? (b = e => {
            let t = a.filter(t => t.id !== e);
            t.length > 0 ? p(() => t) : d(n), c(null)
        }, t[23] = a, t[24] = n, t[25] = d, t[26] = c, t[27] = p, t[28] = b) : b = t[28];
        let x = b,
            S;
        t[29] === c ? S = t[30] : (S = () => {
            c(null)
        }, t[29] = c, t[30] = S);
        let C = S,
            ae;
        return t[31] !== a || t[32] !== C || t[33] !== te || t[34] !== x || t[35] !== ne || t[36] !== ie || t[37] !== y || t[38] !== n || t[39] !== r || t[40] !== s ? (ae = (0, A.jsx)(ue, {
            image: n,
            imageLabel: r,
            autoFocus: !1,
            rounded: !0,
            annotations: a,
            pendingAnnotation: s,
            onCreateAnnotationAt: te,
            onEditAnnotation: ne,
            onMoveAnnotation: ie,
            onSubmitAnnotation: y,
            onDeleteAnnotation: x,
            onCancelAnnotation: C
        }), t[31] = a, t[32] = C, t[33] = te, t[34] = x, t[35] = ne, t[36] = ie, t[37] = y, t[38] = n, t[39] = r, t[40] = s, t[41] = ae) : ae = t[41], ae
    }), ye = e => Math.min(Math.max(e, 0), 1), be = 300, xe = 8, Se = E.replace(`width="20" height="20"`, `width="24" height="24"`).replace(`fill="currentColor"`, `fill="black" stroke="white" stroke-width="1.5"`), Ce = `url("data:image/svg+xml,${encodeURIComponent(Se)}") 3 21, crosshair`, we = `absolute flex h-6 w-6 -translate-y-full cursor-pointer! items-center justify-center rounded-full transition-transform duration-150 ease-out motion-reduce:transition-none`, Te = `flex h-5 w-5 cursor-pointer! items-center justify-center rounded-full bg-black text-[11px] leading-none font-semibold text-white shadow-md ring-2 ring-white transition-[height,width,font-size] duration-150 ease-out group-hover/annotation-marker:h-6 group-hover/annotation-marker:w-6 group-hover/annotation-marker:text-xs group-focus-visible/annotation-marker:h-6 group-focus-visible/annotation-marker:w-6 group-focus-visible/annotation-marker:text-xs motion-reduce:transition-none dark:bg-white dark:text-black dark:ring-black`, Ee = 30, De = 32, M = 24, Oe = 301, ke = 8, Ae = 260, N = 8, je = 10, Me = `text-token-text-primary flex h-7 w-max max-w-[260px] items-center truncate px-2.5 text-sm whitespace-nowrap`, Ne = 36, Pe = 12, Fe = 48, Ie = e => e instanceof Element && e.closest(`[data-annotation-control]`), P = u({
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
    T as a, Le as i, j as n, le as o, ue as r, O as t
};
//# sourceMappingURL=971592ec-hyb1pobe1q7i363n.js.map