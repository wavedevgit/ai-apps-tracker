import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    LN as n,
    P1 as r,
    R1 as i,
    RN as ee,
    X5 as a,
    Y5 as o,
    Ytt as s,
    mnt as c
} from "./4813494d-bo7e0c29ngt4zgx0.js";
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
    AUn as g,
    M5 as _,
    O5 as ne,
    OUn as v,
    Sv as re,
    Tv as y,
    kUn as b
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    fc as x,
    pc as S
} from "./30901919-e8h11sw136qen6v0.js";
import {
    t as C
} from "./4c0f1f8e-o4zbuwgknf8ay6gx.js";
import {
    n as w,
    t as ie
} from "./b9e74381-h0z6cp6y2ptcf91m.js";
import {
    i as ae,
    n as T,
    r as oe,
    t as se
} from "./86793a97-ongmaxxxm7ura7r1.js";
var E, ce = e((() => {
        b(), E = v(null)
    })),
    D, O = e((() => {
        D = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M10 2.25171C14.473 2.25171 18.1649 5.68532 18.165 9.99976C18.165 14.3143 14.4731 17.7488 10 17.7488C8.47948 17.7488 7.19622 17.2958 5.94043 16.7087L3.73633 17.281C3.13492 17.4369 2.58124 16.9022 2.71582 16.2957L3.17871 14.2068C2.53737 12.9533 1.83496 11.7287 1.83496 9.99976C1.83515 5.68532 5.52703 2.25171 10 2.25171Z"
    fill="currentColor"
  />
</svg>
`
    }));

function k(e) {
    "use forget";
    let t = (0, he.c)(3),
        {
            children: n,
            value: r
        } = e,
        i;
    return t[0] !== n || t[1] !== r ? (i = (0, j.jsx)(E.Provider, {
        value: r,
        children: n
    }), t[0] = n, t[1] = r, t[2] = i) : i = t[2], i
}

function le(e) {
    "use forget";
    let t = (0, he.c)(86),
        {
            image: n,
            imageLabel: i,
            autoFocus: a,
            rounded: s,
            viewport: l,
            cancelInteractionRef: u,
            annotations: d,
            pendingAnnotation: f,
            onCreateAnnotationAt: p,
            onEditAnnotation: m,
            onMoveAnnotation: h,
            onSubmitAnnotation: g,
            onDeleteAnnotation: _,
            onCancelAnnotation: v
        } = e,
        y = a === void 0 || a,
        b = s !== void 0 && s,
        S = te(),
        C = r(),
        w;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (w = c(), t[0] = w) : w = t[0];
    let T = w,
        oe = (0, A.useRef)(null),
        E = (0, A.useRef)(null),
        ce = (0, A.useRef)(null),
        D = (0, A.useRef)(null),
        O = (0, A.useRef)(null),
        k = (0, A.useRef)(null),
        le = (0, A.useRef)(null),
        de = (0, A.useRef)(null),
        [fe, pe] = (0, ge.default)(),
        [me, _e] = (0, ge.default)(),
        [M, xe] = (0, A.useState)(null),
        Ie;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (Ie = {
        key: null,
        offset: 0
    }, t[1] = Ie) : Ie = t[1];
    let [Le, Re] = (0, A.useState)(Ie), [ze, I] = (0, A.useState)(null), [L, Be] = (0, A.useState)(null), [Ve, R] = (0, A.useState)(null), He = (0, A.useId)(), Ue = (0, A.useId)(), [We, z] = (0, A.useState)(!1), Ge;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (Ge = {
        x: .5,
        y: .5
    }, t[2] = Ge) : Ge = t[2];
    let [B, Ke] = (0, A.useState)(Ge), [qe, Je] = (0, A.useState)(``), V = l?.isInteracting ?? !1, Ye;
    t[3] !== i || t[4] !== S ? (Ye = i == null ? S.formatMessage(F.surfaceLabel) : S.formatMessage(F.surfaceLabelWithImage, {
        image: i
    }), t[3] = i, t[4] = S, t[5] = Ye) : Ye = t[5];
    let Xe = Ye,
        Ze;
    t[6] === S ? Ze = t[7] : (Ze = S.formatMessage(F.instructions), t[6] = S, t[7] = Ze);
    let Qe = Ze,
        $e;
    t[8] === S ? $e = t[9] : ($e = e => S.formatMessage(F.cursorMoved, e), t[8] = S, t[9] = $e);
    let et = $e,
        tt;
    t[10] === S ? tt = t[11] : (tt = e => S.formatMessage(F.placed, e), t[10] = S, t[11] = tt);
    let nt = tt,
        rt;
    t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (rt = () => {
        O.current != null && (clearTimeout(O.current), O.current = null)
    }, t[12] = rt) : rt = t[12];
    let H = rt,
        it;
    t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (it = e => {
        e != null && R(null), le.current = e, Be(e)
    }, t[13] = it) : it = t[13];
    let U = it,
        at, ot;
    t[14] === Symbol.for(`react.memo_cache_sentinel`) ? (at = () => () => {
        H()
    }, ot = [H], t[14] = at, t[15] = ot) : (at = t[14], ot = t[15]), (0, A.useEffect)(at, ot);
    let st, ct;
    t[16] === Symbol.for(`react.memo_cache_sentinel`) ? (st = () => () => {
        let e = E.current,
            t = e?.ownerDocument.activeElement;
        t != null && t !== e && e?.contains(t) && e.focus({
            preventScroll: !0
        }), z(!1), D.current = null, k.current = null, H(), U(null), I(null), R(null)
    }, ct = [H, U], t[16] = st, t[17] = ct) : (st = t[16], ct = t[17]), (0, A.useImperativeHandle)(u, st, ct);
    let lt, ut;
    t[18] === Symbol.for(`react.memo_cache_sentinel`) ? (lt = () => {
        let e = oe.current;
        if (!e) return;
        let t = () => {
            let {
                width: t,
                height: n
            } = e.getBoundingClientRect();
            xe(e => e?.width === t && e?.height === n ? e : {
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
    }, ut = [], t[18] = lt, t[19] = ut) : (lt = t[18], ut = t[19]), (0, A.useEffect)(lt, ut);
    let dt, ft;
    t[20] === y ? (dt = t[21], ft = t[22]) : (dt = () => {
        if (T || !y) return;
        let e = window.requestAnimationFrame(() => {
            E.current?.focus()
        });
        return () => {
            window.cancelAnimationFrame(e)
        }
    }, ft = [y, T], t[20] = y, t[21] = dt, t[22] = ft), (0, A.useEffect)(dt, ft);
    let pt;
    t[23] !== M || t[24] !== n.height || t[25] !== n.width || t[26] !== l?.imageRect ? (pt = l?.imageRect ?? (M == null ? void 0 : ie({
        mediaWidth: n.width,
        mediaHeight: n.height,
        containerWidth: M.width,
        containerHeight: M.height
    })), t[23] = M, t[24] = n.height, t[25] = n.width, t[26] = l?.imageRect, t[27] = pt) : pt = t[27];
    let W = pt,
        mt;
    t[28] === Symbol.for(`react.memo_cache_sentinel`) ? (mt = e => {
        let t = E.current;
        if (!t) return null;
        let n = t.getBoundingClientRect();
        return n.width === 0 || n.height === 0 || !Number.isFinite(e.clientX) || !Number.isFinite(e.clientY) ? null : {
            x: ve((e.clientX - n.left) / n.width),
            y: ve((e.clientY - n.top) / n.height)
        }
    }, t[28] = mt) : mt = t[28];
    let G = mt,
        ht;
    t[29] === V ? ht = t[30] : (ht = e => {
        z(!1);
        let t = D.current;
        if (t != null && Math.hypot(e.clientX - t.clientX, e.clientY - t.clientY) > be && (D.current = null), T || e.pointerType === `touch` || V) {
            I(null);
            return
        }
        if (Fe(e.target)) {
            I(null);
            return
        }
        let n = G(e);
        n != null && (R(null), Ke(n), I(n))
    }, t[29] = V, t[30] = ht);
    let gt = ht,
        _t;
    t[31] !== n.height || t[32] !== n.width ? (_t = e => ({
        x: Math.round(e.x * n.width),
        y: Math.round(e.y * n.height)
    }), t[31] = n.height, t[32] = n.width, t[33] = _t) : _t = t[33];
    let K = _t,
        vt;
    t[34] !== et || t[35] !== K || t[36] !== B ? (vt = (e, t) => {
        z(!0);
        let n = E.current;
        if (!n) return;
        let r = n.getBoundingClientRect();
        if (r.width === 0 || r.height === 0) return;
        let i = {
            x: ve(B.x + e / r.width),
            y: ve(B.y + t / r.height)
        };
        i.x === B.x && i.y === B.y || (Ke(i), I(null), R(null), Je(et(K(i))))
    }, t[34] = et, t[35] = K, t[36] = B, t[37] = vt) : vt = t[37];
    let q = vt,
        yt;
    t[38] !== K || t[39] !== nt || t[40] !== B || t[41] !== p ? (yt = () => {
        p(B), I(null), R(null), Je(nt(K(B)))
    }, t[38] = K, t[39] = nt, t[40] = B, t[41] = p, t[42] = yt) : yt = t[42];
    let bt = yt,
        xt;
    t[43] !== bt || t[44] !== V || t[45] !== q || t[46] !== f ? (xt = e => {
        if (e.altKey || e.ctrlKey || e.metaKey || V || f || Fe(e.target)) return;
        let t = e.shiftKey ? Pe : Ne;
        switch (e.key) {
            case `ArrowUp`:
                e.preventDefault(), q(0, -t);
                return;
            case `ArrowDown`:
                e.preventDefault(), q(0, t);
                return;
            case `ArrowLeft`:
                e.preventDefault(), q(-t, 0);
                return;
            case `ArrowRight`:
                e.preventDefault(), q(t, 0);
                return;
            case `Enter`:
                e.preventDefault(), bt();
                return;
            default:
                return
        }
    }, t[43] = bt, t[44] = V, t[45] = q, t[46] = f, t[47] = xt) : xt = t[47];
    let St = xt,
        Ct;
    t[48] === V ? Ct = t[49] : (Ct = (e, t) => {
        if (e.defaultPrevented || e.button > 0 || V) return;
        let n = G(e);
        if (n == null) return;
        e.preventDefault(), e.stopPropagation(), I(null), H();
        let r = e.pointerId,
            i = {
                id: t.id,
                pointerId: r,
                point: n
            };
        k.current = i, e.currentTarget.setPointerCapture?.(r), O.current = setTimeout(() => {
            let e = k.current;
            O.current = null, !(e?.id !== t.id || e.pointerId !== r) && U(e)
        }, ye)
    }, t[48] = V, t[49] = Ct);
    let wt = Ct,
        Tt;
    t[50] === Symbol.for(`react.memo_cache_sentinel`) ? (Tt = e => {
        let t = k.current;
        if (t == null || t.pointerId !== e.pointerId) return;
        let n = G(e);
        if (n == null) return;
        let r = {
            ...t,
            point: n
        };
        k.current = r;
        let i = le.current;
        i?.id === t.id && i.pointerId === e.pointerId && U(r)
    }, t[50] = Tt) : Tt = t[50];
    let Et = Tt,
        Dt;
    t[51] !== m || t[52] !== h ? (Dt = (e, t) => {
        let n = k.current;
        if (n == null || n.id !== t.id || n.pointerId !== e.pointerId) return;
        e.preventDefault(), e.stopPropagation(), H(), k.current = null, e.currentTarget.releasePointerCapture?.(e.pointerId);
        let r = le.current;
        if (r?.id === t.id && r.pointerId === e.pointerId) {
            let n = G(e) ?? r.point;
            U(null), de.current = t.id, h(t.id, n);
            return
        }
        m(t.id)
    }, t[51] = m, t[52] = h, t[53] = Dt) : Dt = t[53];
    let Ot = Dt,
        kt;
    t[54] === Symbol.for(`react.memo_cache_sentinel`) ? (kt = e => {
        let t = k.current;
        t == null || t.pointerId !== e.pointerId || (H(), k.current = null, e.currentTarget.releasePointerCapture?.(e.pointerId), U(null))
    }, t[54] = kt) : kt = t[54];
    let At = kt,
        jt;
    t[55] !== V || t[56] !== p || t[57] !== l ? (jt = e => {
        if (z(!1), e.defaultPrevented || V || Fe(e.target) || e.button > 0) return;
        let t = G(e);
        if (t != null) {
            if (e.preventDefault(), R(null), l != null) {
                D.current = e.pointerType === `touch` && !e.isPrimary ? null : {
                    pointerId: e.pointerId,
                    clientX: e.clientX,
                    clientY: e.clientY
                };
                return
            }
            p(t)
        }
    }, t[55] = V, t[56] = p, t[57] = l, t[58] = jt) : jt = t[58];
    let Mt = jt,
        Nt;
    t[59] !== V || t[60] !== p ? (Nt = e => {
        let t = D.current;
        if (D.current = null, t == null || t.pointerId !== e.pointerId || e.defaultPrevented || V || Fe(e.target) || Math.hypot(e.clientX - t.clientX, e.clientY - t.clientY) > be) return;
        let n = G(e);
        n != null && (e.preventDefault(), p(n))
    }, t[59] = V, t[60] = p, t[61] = Nt) : Nt = t[61];
    let Pt = Nt,
        Ft;
    t[62] === f ? Ft = t[63] : (Ft = f == null ? null : [f.id ?? `new`, f.x.toFixed(4), f.y.toFixed(4), f.text ?? ``].join(`:`), t[62] = f, t[63] = Ft);
    let It = Ft,
        Lt = f != null && f.id == null ? d.length + 1 : null,
        Rt = fe.height || Me,
        zt;
    t[64] !== d || t[65] !== L || t[66] !== V || t[67] !== f || t[68] !== Ve ? (zt = f == null && L == null && !V && Ve != null ? d.find(e => e.id === Ve) : null, t[64] = d, t[65] = L, t[66] = V, t[67] = f, t[68] = Ve, t[69] = zt) : zt = t[69];
    let Bt = zt,
        J = f ?? Bt,
        Vt = f != null,
        Y = typeof W?.width == `number` ? W.width : M?.width ?? 0,
        X = typeof W?.height == `number` ? W.height : M?.height ?? 0,
        Ht = me.width > 0 ? Math.min(Math.ceil(me.width), ke) : null,
        Ut = (Vt ? De : Ht ?? ke) + Oe,
        Wt = Math.min(P, Y / 2),
        Gt = Bt != null || f?.id != null ? Ee : Te,
        Kt = (J?.x ?? 0) * Y,
        qt = Kt + Gt,
        Z = M?.width ?? Y,
        Jt = M?.height ?? X,
        Yt = (l?.imageRect.left ?? 0) + (J?.x ?? 0) * Y,
        Xt = (l?.imageRect.top ?? 0) + (J?.y ?? 0) * X,
        Zt = l != null && M != null && (Yt < 0 || Yt > Z || Xt < 0 || Xt > Jt),
        Qt = f != null && Zt,
        $t, en;
    t[70] === Qt ? ($t = t[71], en = t[72]) : ($t = () => {
        Qt && ce.current?.()
    }, en = [Qt], t[70] = Qt, t[71] = $t, t[72] = en), ee($t, en);
    let tn;
    t[73] !== X || t[74] !== Y || t[75] !== l || t[76] !== Jt || t[77] !== Z ? (tn = e => {
        let t = {
            left: `${e.x*100}%`,
            top: `${e.y*100}%`
        };
        if (l == null) return t;
        let n = l.imageRect.left + e.x * Y,
            r = l.imageRect.top + e.y * X;
        return n < 0 || n > Z || r < 0 || r > Jt ? t : {
            ...t,
            marginLeft: Math.min(0, Z - n - N),
            marginTop: Math.max(0, N - r)
        }
    }, t[73] = X, t[74] = Y, t[75] = l, t[76] = Jt, t[77] = Z, t[78] = tn) : tn = t[78];
    let nn = tn,
        rn = l == null ? T ? Math.min(Ut, Math.max(0, Y - 2 * Wt)) : Ut : Math.min(Ut, Math.max(0, Z - 2 * P)),
        an = T ? Math.max(Wt, Math.min((J?.x ?? 0) < .5 ? Kt : qt, Y - rn - Wt)) : qt,
        on = T ? Ae : -(Rt / 2 + N / 2),
        sn = l == null || M == null || J == null ? null : f == null ? `preview:${Bt?.id}` : `edit:${It}`,
        cn = Math.max(P, Math.min(Xt + on, Jt - Rt - P)) - Xt;
    Le.key !== sn && Re({
        key: sn,
        offset: cn
    });
    let ln = (J?.y ?? 0) * X + (sn == null ? on : Le.key === sn ? Le.offset : cn),
        un = Yt + Gt + rn > Z - P ? Math.min(Yt, Z - N) - rn - (Gt - N) : Yt + Gt,
        dn = l == null ? an : Math.max(P, Math.min(un, Z - rn - P)) - l.imageRect.left,
        fn = l == null && !T && !V && f == null && L == null && ze != null,
        pn = !V && f == null && L == null && We,
        mn = l != null && `isolate overflow-clip`,
        Q;
    t[79] === mn ? Q = t[80] : (Q = o(`relative h-full w-full`, mn), t[79] = mn, t[80] = Q);
    let $;
    t[81] === Symbol.for(`react.memo_cache_sentinel`) ? ($ = e => {
        e.pointerType === `touch` && !e.isPrimary && (D.current = null)
    }, t[81] = $) : $ = t[81];
    let hn = W && (0, j.jsxs)(`div`, {
            "data-testid": `contained-annotation-surface`,
            className: o(`absolute overflow-visible`, b ? `rounded-xl` : `rounded-none`),
            style: W,
            children: [l == null ? (0, j.jsx)(`div`, {
                className: o(`absolute inset-0 overflow-hidden bg-neutral-100`, b ? `rounded-xl` : `border-token-border-light shadow-elevation-03 rounded-none border`),
                children: (0, j.jsx)(`img`, {
                    src: ne(n, !C?.hasPaidSubscription()),
                    alt: i == null ? n.title ?? `` : ``,
                    className: `block h-full w-full object-contain`,
                    fetchPriority: `high`,
                    loading: `eager`,
                    decoding: `async`
                })
            }) : null, (0, j.jsxs)(`div`, {
                ref: E,
                "data-testid": `annotation-hit-surface`,
                className: o(`absolute inset-0 z-[60]`, fn && `cursor-none`, L != null && `cursor-grabbing`),
                style: l != null && !T ? {
                    cursor: l.isDragging || L != null ? `grabbing` : V ? `grab` : pn ? `none` : Se
                } : void 0,
                tabIndex: 0,
                "aria-label": Xe,
                "aria-describedby": He,
                onPointerDown: Mt,
                onPointerMove: gt,
                onPointerUp: Pt,
                onPointerCancel: () => {
                    D.current = null
                },
                onPointerLeave: () => {
                    D.current = null, I(null), R(null)
                },
                onFocus: e => {
                    e.currentTarget === e.target && (z(!0), I(null), R(null))
                },
                onBlur: () => z(!1),
                onKeyDown: St,
                children: [d.map((e, t) => {
                    let n = L?.id === e.id,
                        r = f?.id === e.id,
                        i = n ? L.point : e;
                    return (0, j.jsxs)(`button`, {
                        type: `button`,
                        "data-annotation-control": !0,
                        "aria-label": S.formatMessage(ae.edit, {
                            number: t + 1
                        }),
                        "aria-describedby": `${Ue}-${e.id}`,
                        className: o(Ce, n ? `z-[95] scale-105 cursor-grabbing` : f?.id === e.id ? `z-[90]` : `z-[70]`, `focus-visible:ring-token-border-brand group/annotation-marker cursor-pointer touch-none hover:scale-105 focus-visible:ring-2 focus-visible:outline-none`),
                        style: nn(i),
                        onPointerEnter: () => {
                            I(null), R(e.id)
                        },
                        onPointerLeave: () => {
                            R(t => t === e.id ? null : t)
                        },
                        onFocus: () => {
                            I(null), R(e.id)
                        },
                        onBlur: () => {
                            R(t => t === e.id ? null : t)
                        },
                        onPointerDown: t => wt(t, e),
                        onPointerMove: Et,
                        onPointerUp: t => Ot(t, e),
                        onPointerCancel: At,
                        onClick: t => {
                            if (t.stopPropagation(), de.current === e.id) {
                                de.current = null;
                                return
                            }
                            t.detail === 0 && m(e.id)
                        },
                        children: [(0, j.jsx)(`span`, {
                            "aria-hidden": `true`,
                            className: o(we, r && `h-6 w-6 text-xs`),
                            children: t + 1
                        }), (0, j.jsx)(`span`, {
                            id: `${Ue}-${e.id}`,
                            className: `sr-only`,
                            children: e.text
                        })]
                    }, e.id)
                }), f != null && f.id == null ? (0, j.jsx)(`div`, {
                    "data-testid": `pending-annotation-marker`,
                    "aria-hidden": `true`,
                    className: o(Ce, `pointer-events-none z-[90]`),
                    style: nn(f),
                    children: (0, j.jsx)(`span`, {
                        className: we,
                        children: Lt
                    })
                }) : null, Bt == null ? null : (0, j.jsx)(`span`, {
                    ref: _e,
                    "aria-hidden": `true`,
                    className: o(je, `pointer-events-none invisible fixed -start-[9999px] top-0`),
                    children: Bt.text
                }), fn ? (0, j.jsxs)(`div`, {
                    "data-testid": `annotation-placement-cursor`,
                    "aria-hidden": `true`,
                    className: `pointer-events-none absolute z-[65] h-6 w-6 drop-shadow-sm`,
                    style: {
                        left: `${ze.x*100}%`,
                        top: `${ze.y*100}%`,
                        transform: `translateY(-100%)`
                    },
                    children: [(0, j.jsx)(x, {
                        className: `absolute inset-0 h-6 w-6 scale-115 text-white dark:text-black`
                    }), (0, j.jsx)(x, {
                        className: `absolute inset-0 h-6 w-6 text-black dark:text-white`
                    })]
                }) : null, pn ? (0, j.jsxs)(`div`, {
                    "data-testid": `annotation-keyboard-cursor`,
                    "aria-hidden": `true`,
                    className: `pointer-events-none absolute z-[65] h-6 w-6 drop-shadow-sm`,
                    style: {
                        left: `${B.x*100}%`,
                        top: `${B.y*100}%`,
                        transform: `translateY(-100%)`
                    },
                    children: [(0, j.jsx)(x, {
                        className: `absolute inset-0 h-6 w-6 scale-115 text-white dark:text-black`
                    }), (0, j.jsx)(x, {
                        className: `absolute inset-0 h-6 w-6 text-black dark:text-white`
                    })]
                }) : null, J == null ? null : (0, j.jsx)(`div`, {
                    ref: pe,
                    "data-testid": Vt ? `annotation-edit-composer` : `annotation-preview-composer`,
                    "data-annotation-control": !0,
                    "aria-hidden": Vt ? void 0 : `true`,
                    className: o(`absolute z-[80] cursor-auto [&>[role=toolbar]]:w-full [&>[role=toolbar]]:rounded-full`, Zt && `invisible`, !Vt && `pointer-events-none`),
                    style: {
                        left: dn,
                        top: ln,
                        width: rn
                    },
                    onPointerDown: ue,
                    children: f == null ? (0, j.jsx)(re, {
                        children: (0, j.jsx)(`div`, {
                            className: `flex w-full min-w-0 items-center overflow-hidden`,
                            children: (0, j.jsx)(`span`, {
                                className: je,
                                children: J.text
                            })
                        })
                    }) : (0, j.jsx)(se, {
                        initialText: f.text,
                        commitRef: ce,
                        preventFocusScroll: l != null,
                        onSubmit: e => g({
                            ...f,
                            text: e
                        }),
                        onCancel: v,
                        onDelete: f.id == null ? void 0 : () => {
                            f.id != null && _(f.id)
                        }
                    }, It)
                }), (0, j.jsx)(`p`, {
                    id: He,
                    className: `sr-only`,
                    children: Qe
                }), (0, j.jsx)(`p`, {
                    className: `sr-only`,
                    role: `status`,
                    "aria-live": `polite`,
                    children: qe
                })]
            })]
        }),
        gn;
    return t[82] !== Q || t[83] !== $ || t[84] !== hn ? (gn = (0, j.jsx)(`div`, {
        ref: oe,
        className: Q,
        onPointerDownCapture: $,
        children: hn
    }), t[82] = Q, t[83] = $, t[84] = hn, t[85] = gn) : gn = t[85], gn
}

function ue(e) {
    return e.stopPropagation()
}

function de(e) {
    return e?.setPendingAnnotation
}

function fe(e) {
    return e?.setAnnotationsByImageId
}

function pe(e) {
    return e?.attachImage
}

function me(e) {
    return e?.removeImage
}
var he, A, ge, j, _e, M, ve, ye, be, xe, Se, Ce, we, Te, Ee, N, De, Oe, ke, P, Ae, je, Me, Ne, Pe, Fe, F, Ie = e((() => {
    he = h(), S(), O(), w(), _(), y(), i(), s(), n(), a(), A = t(f()), d(), b(), ge = t(C()), p(), ce(), T(), oe(), j = l(), _e = [], M = (0, A.memo)(function(e) {
        "use forget";
        let t = (0, he.c)(42),
            {
                image: n,
                imageLabel: r
            } = e,
            i = n.assetPointer ?? n.id,
            ee;
        t[0] === i ? ee = t[1] : (ee = e => e?.attachmentIds.has(i) ? e.annotationsByImageId[i] ?? _e : _e, t[0] = i, t[1] = ee);
        let a = g(E, ee),
            o;
        t[2] === i ? o = t[3] : (o = e => e?.pendingAnnotation?.imageId === i ? e.pendingAnnotation : null, t[2] = i, t[3] = o);
        let s = g(E, o),
            c = g(E, de),
            l = g(E, fe),
            u = g(E, pe),
            d = g(E, me);
        if (c == null || l == null || u == null || d == null) throw Error(`CanvasImageGenLightboxAnnotationStage requires an annotation provider`);
        let f;
        t[4] !== i || t[5] !== l ? (f = e => {
            l(t => ({
                ...t,
                [i]: e(t[i] ?? _e)
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
            _;
        t[11] !== a || t[12] !== i || t[13] !== c ? (_ = e => {
            let t = a.find(t => t.id === e);
            t && c({
                ...t,
                imageId: i
            })
        }, t[11] = a, t[12] = i, t[13] = c, t[14] = _) : _ = t[14];
        let ne = _,
            v;
        t[15] !== c || t[16] !== p ? (v = (e, t) => {
            p(n => n.map(n => n.id === e ? {
                ...n,
                ...t
            } : n)), c(n => n?.id === e ? {
                ...n,
                ...t
            } : n)
        }, t[15] = c, t[16] = p, t[17] = v) : v = t[17];
        let re = v,
            y;
        t[18] !== u || t[19] !== n || t[20] !== c || t[21] !== p ? (y = e => {
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
        }, t[18] = u, t[19] = n, t[20] = c, t[21] = p, t[22] = y) : y = t[22];
        let b = y,
            x;
        t[23] !== a || t[24] !== n || t[25] !== d || t[26] !== c || t[27] !== p ? (x = e => {
            let t = a.filter(t => t.id !== e);
            t.length > 0 ? p(() => t) : d(n), c(null)
        }, t[23] = a, t[24] = n, t[25] = d, t[26] = c, t[27] = p, t[28] = x) : x = t[28];
        let S = x,
            C;
        t[29] === c ? C = t[30] : (C = () => {
            c(null)
        }, t[29] = c, t[30] = C);
        let w = C,
            ie;
        return t[31] !== a || t[32] !== w || t[33] !== te || t[34] !== S || t[35] !== ne || t[36] !== re || t[37] !== b || t[38] !== n || t[39] !== r || t[40] !== s ? (ie = (0, j.jsx)(le, {
            image: n,
            imageLabel: r,
            autoFocus: !1,
            rounded: !0,
            annotations: a,
            pendingAnnotation: s,
            onCreateAnnotationAt: te,
            onEditAnnotation: ne,
            onMoveAnnotation: re,
            onSubmitAnnotation: b,
            onDeleteAnnotation: S,
            onCancelAnnotation: w
        }), t[31] = a, t[32] = w, t[33] = te, t[34] = S, t[35] = ne, t[36] = re, t[37] = b, t[38] = n, t[39] = r, t[40] = s, t[41] = ie) : ie = t[41], ie
    }), ve = e => Math.min(Math.max(e, 0), 1), ye = 300, be = 8, xe = D.replace(`width="20" height="20"`, `width="24" height="24"`).replace(`fill="currentColor"`, `fill="black" stroke="white" stroke-width="1.5"`), Se = `url("data:image/svg+xml,${encodeURIComponent(xe)}") 3 21, crosshair`, Ce = `absolute flex h-6 w-6 -translate-y-full cursor-pointer! items-center justify-center rounded-full transition-transform duration-150 ease-out motion-reduce:transition-none`, we = `flex h-5 w-5 cursor-pointer! items-center justify-center rounded-full bg-black text-[11px] leading-none font-semibold text-white shadow-md ring-2 ring-white transition-[height,width,font-size] duration-150 ease-out group-hover/annotation-marker:h-6 group-hover/annotation-marker:w-6 group-hover/annotation-marker:text-xs group-focus-visible/annotation-marker:h-6 group-focus-visible/annotation-marker:w-6 group-focus-visible/annotation-marker:text-xs motion-reduce:transition-none dark:bg-white dark:text-black dark:ring-black`, Te = 30, Ee = 32, N = 24, De = 301, Oe = 8, ke = 260, P = 8, Ae = 10, je = `text-token-text-primary flex h-7 w-max max-w-[260px] items-center truncate px-2.5 text-sm whitespace-nowrap`, Me = 36, Ne = 12, Pe = 48, Fe = e => e instanceof Element && e.closest(`[data-annotation-control]`), F = u({
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
    E as a, Ie as i, M as n, ce as o, le as r, k as t
};
//# sourceMappingURL=971592ec-mffthpbxok58crpy.js.map