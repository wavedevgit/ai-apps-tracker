import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    IN as n,
    J5 as r,
    Jtt as i,
    L1 as a,
    LN as o,
    N1 as ee,
    Y5 as s,
    pnt as c
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as l,
    Ln as u,
    Rn as d,
    Vn as f,
    Zt as p,
    rn as te,
    wn as m,
    zn as ne
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    DUn as h,
    EUn as g,
    T5 as re,
    TUn as _,
    k5 as v,
    wv as y,
    xv as ie
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    fc as b,
    pc as x
} from "./30901919-7dzdc1ou0jtwkwpt.js";
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
} from "./86793a97-ccs27yu2q9acouqd.js";
var T, le = e((() => {
        g(), T = _(null)
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
            image: n,
            imageLabel: i,
            autoFocus: a,
            rounded: s,
            viewport: l,
            cancelInteractionRef: u,
            annotations: d,
            pendingAnnotation: f,
            onCreateAnnotationAt: p,
            onEditAnnotation: te,
            onMoveAnnotation: m,
            onSubmitAnnotation: h,
            onDeleteAnnotation: g,
            onCancelAnnotation: _
        } = e,
        v = a === void 0 || a,
        y = s !== void 0 && s,
        x = ne(),
        S = ee(),
        C;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (C = c(), t[0] = C) : C = t[0];
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
        Ie;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (Ie = {
        key: null,
        offset: 0
    }, t[1] = Ie) : Ie = t[1];
    let [Le, Re] = (0, k.useState)(Ie), [ze, I] = (0, k.useState)(null), [L, Be] = (0, k.useState)(null), [Ve, R] = (0, k.useState)(null), He = (0, k.useId)(), Ue = (0, k.useId)(), [We, z] = (0, k.useState)(!1), Ge;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (Ge = {
        x: .5,
        y: .5
    }, t[2] = Ge) : Ge = t[2];
    let [B, Ke] = (0, k.useState)(Ge), [qe, Je] = (0, k.useState)(``), V = l?.isInteracting ?? !1, Ye;
    t[3] !== i || t[4] !== x ? (Ye = i == null ? x.formatMessage(F.surfaceLabel) : x.formatMessage(F.surfaceLabelWithImage, {
        image: i
    }), t[3] = i, t[4] = x, t[5] = Ye) : Ye = t[5];
    let Xe = Ye,
        Ze;
    t[6] === x ? Ze = t[7] : (Ze = x.formatMessage(F.instructions), t[6] = x, t[7] = Ze);
    let Qe = Ze,
        $e;
    t[8] === x ? $e = t[9] : ($e = e => x.formatMessage(F.cursorMoved, e), t[8] = x, t[9] = $e);
    let et = $e,
        tt;
    t[10] === x ? tt = t[11] : (tt = e => x.formatMessage(F.placed, e), t[10] = x, t[11] = tt);
    let nt = tt,
        rt;
    t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (rt = () => {
        D.current != null && (clearTimeout(D.current), D.current = null)
    }, t[12] = rt) : rt = t[12];
    let H = rt,
        it;
    t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (it = e => {
        e != null && R(null), ue.current = e, Be(e)
    }, t[13] = it) : it = t[13];
    let U = it,
        at, ot;
    t[14] === Symbol.for(`react.memo_cache_sentinel`) ? (at = () => () => {
        H()
    }, ot = [H], t[14] = at, t[15] = ot) : (at = t[14], ot = t[15]), (0, k.useEffect)(at, ot);
    let st, ct;
    t[16] === Symbol.for(`react.memo_cache_sentinel`) ? (st = () => () => {
        let e = T.current,
            t = e?.ownerDocument.activeElement;
        t != null && t !== e && e?.contains(t) && e.focus({
            preventScroll: !0
        }), z(!1), E.current = null, O.current = null, H(), U(null), I(null), R(null)
    }, ct = [H, U], t[16] = st, t[17] = ct) : (st = t[16], ct = t[17]), (0, k.useImperativeHandle)(u, st, ct);
    let lt, ut;
    t[18] === Symbol.for(`react.memo_cache_sentinel`) ? (lt = () => {
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
    }, ut = [], t[18] = lt, t[19] = ut) : (lt = t[18], ut = t[19]), (0, k.useEffect)(lt, ut);
    let dt, ft;
    t[20] === v ? (dt = t[21], ft = t[22]) : (dt = () => {
        if (w || !v) return;
        let e = window.requestAnimationFrame(() => {
            T.current?.focus()
        });
        return () => {
            window.cancelAnimationFrame(e)
        }
    }, ft = [v, w], t[20] = v, t[21] = dt, t[22] = ft), (0, k.useEffect)(dt, ft);
    let pt;
    t[23] !== j || t[24] !== n.height || t[25] !== n.width || t[26] !== l?.imageRect ? (pt = l?.imageRect ?? (j == null ? void 0 : ae({
        mediaWidth: n.width,
        mediaHeight: n.height,
        containerWidth: j.width,
        containerHeight: j.height
    })), t[23] = j, t[24] = n.height, t[25] = n.width, t[26] = l?.imageRect, t[27] = pt) : pt = t[27];
    let W = pt,
        mt;
    t[28] === Symbol.for(`react.memo_cache_sentinel`) ? (mt = e => {
        let t = T.current;
        if (!t) return null;
        let n = t.getBoundingClientRect();
        return n.width === 0 || n.height === 0 || !Number.isFinite(e.clientX) || !Number.isFinite(e.clientY) ? null : {
            x: ye((e.clientX - n.left) / n.width),
            y: ye((e.clientY - n.top) / n.height)
        }
    }, t[28] = mt) : mt = t[28];
    let G = mt,
        ht;
    t[29] === V ? ht = t[30] : (ht = e => {
        z(!1);
        let t = E.current;
        if (t != null && Math.hypot(e.clientX - t.clientX, e.clientY - t.clientY) > xe && (E.current = null), w || e.pointerType === `touch` || V) {
            I(null);
            return
        }
        if (P(e.target)) {
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
        let n = T.current;
        if (!n) return;
        let r = n.getBoundingClientRect();
        if (r.width === 0 || r.height === 0) return;
        let i = {
            x: ye(B.x + e / r.width),
            y: ye(B.y + t / r.height)
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
        if (e.altKey || e.ctrlKey || e.metaKey || V || f || P(e.target)) return;
        let t = e.shiftKey ? Fe : Pe;
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
        O.current = i, e.currentTarget.setPointerCapture?.(r), D.current = setTimeout(() => {
            let e = O.current;
            D.current = null, !(e?.id !== t.id || e.pointerId !== r) && U(e)
        }, be)
    }, t[48] = V, t[49] = Ct);
    let wt = Ct,
        Tt;
    t[50] === Symbol.for(`react.memo_cache_sentinel`) ? (Tt = e => {
        let t = O.current;
        if (t == null || t.pointerId !== e.pointerId) return;
        let n = G(e);
        if (n == null) return;
        let r = {
            ...t,
            point: n
        };
        O.current = r;
        let i = ue.current;
        i?.id === t.id && i.pointerId === e.pointerId && U(r)
    }, t[50] = Tt) : Tt = t[50];
    let Et = Tt,
        Dt;
    t[51] !== te || t[52] !== m ? (Dt = (e, t) => {
        let n = O.current;
        if (n == null || n.id !== t.id || n.pointerId !== e.pointerId) return;
        e.preventDefault(), e.stopPropagation(), H(), O.current = null, e.currentTarget.releasePointerCapture?.(e.pointerId);
        let r = ue.current;
        if (r?.id === t.id && r.pointerId === e.pointerId) {
            let n = G(e) ?? r.point;
            U(null), fe.current = t.id, m(t.id, n);
            return
        }
        te(t.id)
    }, t[51] = te, t[52] = m, t[53] = Dt) : Dt = t[53];
    let Ot = Dt,
        kt;
    t[54] === Symbol.for(`react.memo_cache_sentinel`) ? (kt = e => {
        let t = O.current;
        t == null || t.pointerId !== e.pointerId || (H(), O.current = null, e.currentTarget.releasePointerCapture?.(e.pointerId), U(null))
    }, t[54] = kt) : kt = t[54];
    let At = kt,
        jt;
    t[55] !== V || t[56] !== p || t[57] !== l ? (jt = e => {
        if (z(!1), e.defaultPrevented || V || P(e.target) || e.button > 0) return;
        let t = G(e);
        if (t != null) {
            if (e.preventDefault(), R(null), l != null) {
                E.current = e.pointerType === `touch` && !e.isPrimary ? null : {
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
        let t = E.current;
        if (E.current = null, t == null || t.pointerId !== e.pointerId || e.defaultPrevented || V || P(e.target) || Math.hypot(e.clientX - t.clientX, e.clientY - t.clientY) > xe) return;
        let n = G(e);
        n != null && (e.preventDefault(), p(n))
    }, t[59] = V, t[60] = p, t[61] = Nt) : Nt = t[61];
    let Pt = Nt,
        Ft;
    t[62] === f ? Ft = t[63] : (Ft = f == null ? null : [f.id ?? `new`, f.x.toFixed(4), f.y.toFixed(4), f.text ?? ``].join(`:`), t[62] = f, t[63] = Ft);
    let It = Ft,
        Lt = f != null && f.id == null ? d.length + 1 : null,
        Rt = pe.height || Ne,
        zt;
    t[64] !== d || t[65] !== L || t[66] !== V || t[67] !== f || t[68] !== Ve ? (zt = f == null && L == null && !V && Ve != null ? d.find(e => e.id === Ve) : null, t[64] = d, t[65] = L, t[66] = V, t[67] = f, t[68] = Ve, t[69] = zt) : zt = t[69];
    let Bt = zt,
        J = f ?? Bt,
        Vt = f != null,
        Y = typeof W?.width == `number` ? W.width : j?.width ?? 0,
        X = typeof W?.height == `number` ? W.height : j?.height ?? 0,
        Ht = he.width > 0 ? Math.min(Math.ceil(he.width), Ae) : null,
        Ut = (Vt ? Oe : Ht ?? Ae) + ke,
        Wt = Math.min(N, Y / 2),
        Gt = Bt != null || f?.id != null ? De : Ee,
        Kt = (J?.x ?? 0) * Y,
        qt = Kt + Gt,
        Z = j?.width ?? Y,
        Jt = j?.height ?? X,
        Yt = (l?.imageRect.left ?? 0) + (J?.x ?? 0) * Y,
        Xt = (l?.imageRect.top ?? 0) + (J?.y ?? 0) * X,
        Zt = l != null && j != null && (Yt < 0 || Yt > Z || Xt < 0 || Xt > Jt),
        Qt = f != null && Zt,
        $t, en;
    t[70] === Qt ? ($t = t[71], en = t[72]) : ($t = () => {
        Qt && le.current?.()
    }, en = [Qt], t[70] = Qt, t[71] = $t, t[72] = en), o($t, en);
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
            marginLeft: Math.min(0, Z - n - M),
            marginTop: Math.max(0, M - r)
        }
    }, t[73] = X, t[74] = Y, t[75] = l, t[76] = Jt, t[77] = Z, t[78] = tn) : tn = t[78];
    let nn = tn,
        rn = l == null ? w ? Math.min(Ut, Math.max(0, Y - 2 * Wt)) : Ut : Math.min(Ut, Math.max(0, Z - 2 * N)),
        an = w ? Math.max(Wt, Math.min((J?.x ?? 0) < .5 ? Kt : qt, Y - rn - Wt)) : qt,
        on = w ? je : -(Rt / 2 + M / 2),
        sn = l == null || j == null || J == null ? null : f == null ? `preview:${Bt?.id}` : `edit:${It}`,
        cn = Math.max(N, Math.min(Xt + on, Jt - Rt - N)) - Xt;
    Le.key !== sn && Re({
        key: sn,
        offset: cn
    });
    let ln = (J?.y ?? 0) * X + (sn == null ? on : Le.key === sn ? Le.offset : cn),
        un = Yt + Gt + rn > Z - N ? Math.min(Yt, Z - M) - rn - (Gt - M) : Yt + Gt,
        dn = l == null ? an : Math.max(N, Math.min(un, Z - rn - N)) - l.imageRect.left,
        fn = l == null && !w && !V && f == null && L == null && ze != null,
        pn = !V && f == null && L == null && We,
        mn = l != null && `isolate overflow-clip`,
        Q;
    t[79] === mn ? Q = t[80] : (Q = r(`relative h-full w-full`, mn), t[79] = mn, t[80] = Q);
    let $;
    t[81] === Symbol.for(`react.memo_cache_sentinel`) ? ($ = e => {
        e.pointerType === `touch` && !e.isPrimary && (E.current = null)
    }, t[81] = $) : $ = t[81];
    let hn = W && (0, A.jsxs)(`div`, {
            "data-testid": `contained-annotation-surface`,
            className: r(`absolute overflow-visible`, y ? `rounded-xl` : `rounded-none`),
            style: W,
            children: [l == null ? (0, A.jsx)(`div`, {
                className: r(`absolute inset-0 overflow-hidden bg-neutral-100`, y ? `rounded-xl` : `border-token-border-light shadow-elevation-03 rounded-none border`),
                children: (0, A.jsx)(`img`, {
                    src: re(n, !S?.hasPaidSubscription()),
                    alt: i == null ? n.title ?? `` : ``,
                    className: `block h-full w-full object-contain`,
                    fetchPriority: `high`,
                    loading: `eager`,
                    decoding: `async`
                })
            }) : null, (0, A.jsxs)(`div`, {
                ref: T,
                "data-testid": `annotation-hit-surface`,
                className: r(`absolute inset-0 z-[60]`, fn && `cursor-none`, L != null && `cursor-grabbing`),
                style: l != null && !w ? {
                    cursor: l.isDragging || L != null ? `grabbing` : V ? `grab` : pn ? `none` : Ce
                } : void 0,
                tabIndex: 0,
                "aria-label": Xe,
                "aria-describedby": He,
                onPointerDown: Mt,
                onPointerMove: gt,
                onPointerUp: Pt,
                onPointerCancel: () => {
                    E.current = null
                },
                onPointerLeave: () => {
                    E.current = null, I(null), R(null)
                },
                onFocus: e => {
                    e.currentTarget === e.target && (z(!0), I(null), R(null))
                },
                onBlur: () => z(!1),
                onKeyDown: St,
                children: [d.map((e, t) => {
                    let n = L?.id === e.id,
                        i = f?.id === e.id,
                        a = n ? L.point : e;
                    return (0, A.jsxs)(`button`, {
                        type: `button`,
                        "data-annotation-control": !0,
                        "aria-label": x.formatMessage(oe.edit, {
                            number: t + 1
                        }),
                        "aria-describedby": `${Ue}-${e.id}`,
                        className: r(we, n ? `z-[95] scale-105 cursor-grabbing` : f?.id === e.id ? `z-[90]` : `z-[70]`, `focus-visible:ring-token-border-brand group/annotation-marker cursor-pointer touch-none hover:scale-105 focus-visible:ring-2 focus-visible:outline-none`),
                        style: nn(a),
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
                            if (t.stopPropagation(), fe.current === e.id) {
                                fe.current = null;
                                return
                            }
                            t.detail === 0 && te(e.id)
                        },
                        children: [(0, A.jsx)(`span`, {
                            "aria-hidden": `true`,
                            className: r(Te, i && `h-6 w-6 text-xs`),
                            children: t + 1
                        }), (0, A.jsx)(`span`, {
                            id: `${Ue}-${e.id}`,
                            className: `sr-only`,
                            children: e.text
                        })]
                    }, e.id)
                }), f != null && f.id == null ? (0, A.jsx)(`div`, {
                    "data-testid": `pending-annotation-marker`,
                    "aria-hidden": `true`,
                    className: r(we, `pointer-events-none z-[90]`),
                    style: nn(f),
                    children: (0, A.jsx)(`span`, {
                        className: Te,
                        children: Lt
                    })
                }) : null, Bt == null ? null : (0, A.jsx)(`span`, {
                    ref: ve,
                    "aria-hidden": `true`,
                    className: r(Me, `pointer-events-none invisible fixed -start-[9999px] top-0`),
                    children: Bt.text
                }), fn ? (0, A.jsxs)(`div`, {
                    "data-testid": `annotation-placement-cursor`,
                    "aria-hidden": `true`,
                    className: `pointer-events-none absolute z-[65] h-6 w-6 drop-shadow-sm`,
                    style: {
                        left: `${ze.x*100}%`,
                        top: `${ze.y*100}%`,
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
                        left: `${B.x*100}%`,
                        top: `${B.y*100}%`,
                        transform: `translateY(-100%)`
                    },
                    children: [(0, A.jsx)(b, {
                        className: `absolute inset-0 h-6 w-6 scale-115 text-white dark:text-black`
                    }), (0, A.jsx)(b, {
                        className: `absolute inset-0 h-6 w-6 text-black dark:text-white`
                    })]
                }) : null, J == null ? null : (0, A.jsx)(`div`, {
                    ref: me,
                    "data-testid": Vt ? `annotation-edit-composer` : `annotation-preview-composer`,
                    "data-annotation-control": !0,
                    "aria-hidden": Vt ? void 0 : `true`,
                    className: r(`absolute z-[80] cursor-auto [&>[role=toolbar]]:w-full [&>[role=toolbar]]:rounded-full`, Zt && `invisible`, !Vt && `pointer-events-none`),
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
                                children: J.text
                            })
                        })
                    }) : (0, A.jsx)(ce, {
                        initialText: f.text,
                        commitRef: le,
                        preventFocusScroll: l != null,
                        onSubmit: e => h({
                            ...f,
                            text: e
                        }),
                        onCancel: _,
                        onDelete: f.id == null ? void 0 : () => {
                            f.id != null && g(f.id)
                        }
                    }, It)
                }), (0, A.jsx)(`p`, {
                    id: He,
                    className: `sr-only`,
                    children: Qe
                }), (0, A.jsx)(`p`, {
                    className: `sr-only`,
                    role: `status`,
                    "aria-live": `polite`,
                    children: qe
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
var ge, k, _e, A, ve, j, ye, be, xe, Se, Ce, we, Te, Ee, De, M, Oe, ke, Ae, N, je, Me, Ne, Pe, Fe, P, F, Ie = e((() => {
    ge = m(), x(), D(), C(), v(), y(), a(), i(), n(), s(), k = t(f()), d(), g(), _e = t(S()), p(), le(), w(), se(), A = l(), ve = [], j = (0, k.memo)(function(e) {
        "use forget";
        let t = (0, ge.c)(42),
            {
                image: n,
                imageLabel: r
            } = e,
            i = n.assetPointer ?? n.id,
            a;
        t[0] === i ? a = t[1] : (a = e => e?.attachmentIds.has(i) ? e.annotationsByImageId[i] ?? ve : ve, t[0] = i, t[1] = a);
        let o = h(T, a),
            ee;
        t[2] === i ? ee = t[3] : (ee = e => e?.pendingAnnotation?.imageId === i ? e.pendingAnnotation : null, t[2] = i, t[3] = ee);
        let s = h(T, ee),
            c = h(T, fe),
            l = h(T, pe),
            u = h(T, me),
            d = h(T, he);
        if (c == null || l == null || u == null || d == null) throw Error(`CanvasImageGenLightboxAnnotationStage requires an annotation provider`);
        let f;
        t[4] !== i || t[5] !== l ? (f = e => {
            l(t => ({
                ...t,
                [i]: e(t[i] ?? ve)
            }))
        }, t[4] = i, t[5] = l, t[6] = f) : f = t[6];
        let p = f,
            m;
        t[7] !== n.assetPointer || t[8] !== i || t[9] !== c ? (m = e => {
            n.assetPointer && c({
                ...e,
                imageId: i
            })
        }, t[7] = n.assetPointer, t[8] = i, t[9] = c, t[10] = m) : m = t[10];
        let ne = m,
            g;
        t[11] !== o || t[12] !== i || t[13] !== c ? (g = e => {
            let t = o.find(t => t.id === e);
            t && c({
                ...t,
                imageId: i
            })
        }, t[11] = o, t[12] = i, t[13] = c, t[14] = g) : g = t[14];
        let re = g,
            _;
        t[15] !== c || t[16] !== p ? (_ = (e, t) => {
            p(n => n.map(n => n.id === e ? {
                ...n,
                ...t
            } : n)), c(n => n?.id === e ? {
                ...n,
                ...t
            } : n)
        }, t[15] = c, t[16] = p, t[17] = _) : _ = t[17];
        let v = _,
            y;
        t[18] !== u || t[19] !== n || t[20] !== c || t[21] !== p ? (y = e => {
            let t = e.text?.trim();
            t && u(n) && p(n => e.id ? n.map(n => n.id === e.id ? {
                ...e,
                id: n.id,
                text: t
            } : n) : [...n, {
                ...e,
                id: te(),
                text: t
            }]), c(null)
        }, t[18] = u, t[19] = n, t[20] = c, t[21] = p, t[22] = y) : y = t[22];
        let ie = y,
            b;
        t[23] !== o || t[24] !== n || t[25] !== d || t[26] !== c || t[27] !== p ? (b = e => {
            let t = o.filter(t => t.id !== e);
            t.length > 0 ? p(() => t) : d(n), c(null)
        }, t[23] = o, t[24] = n, t[25] = d, t[26] = c, t[27] = p, t[28] = b) : b = t[28];
        let x = b,
            S;
        t[29] === c ? S = t[30] : (S = () => {
            c(null)
        }, t[29] = c, t[30] = S);
        let C = S,
            ae;
        return t[31] !== o || t[32] !== C || t[33] !== ne || t[34] !== x || t[35] !== re || t[36] !== v || t[37] !== ie || t[38] !== n || t[39] !== r || t[40] !== s ? (ae = (0, A.jsx)(ue, {
            image: n,
            imageLabel: r,
            autoFocus: !1,
            rounded: !0,
            annotations: o,
            pendingAnnotation: s,
            onCreateAnnotationAt: ne,
            onEditAnnotation: re,
            onMoveAnnotation: v,
            onSubmitAnnotation: ie,
            onDeleteAnnotation: x,
            onCancelAnnotation: C
        }), t[31] = o, t[32] = C, t[33] = ne, t[34] = x, t[35] = re, t[36] = v, t[37] = ie, t[38] = n, t[39] = r, t[40] = s, t[41] = ae) : ae = t[41], ae
    }), ye = e => Math.min(Math.max(e, 0), 1), be = 300, xe = 8, Se = E.replace(`width="20" height="20"`, `width="24" height="24"`).replace(`fill="currentColor"`, `fill="black" stroke="white" stroke-width="1.5"`), Ce = `url("data:image/svg+xml,${encodeURIComponent(Se)}") 3 21, crosshair`, we = `absolute flex h-6 w-6 -translate-y-full cursor-pointer! items-center justify-center rounded-full transition-transform duration-150 ease-out motion-reduce:transition-none`, Te = `flex h-5 w-5 cursor-pointer! items-center justify-center rounded-full bg-black text-[11px] leading-none font-semibold text-white shadow-md ring-2 ring-white transition-[height,width,font-size] duration-150 ease-out group-hover/annotation-marker:h-6 group-hover/annotation-marker:w-6 group-hover/annotation-marker:text-xs group-focus-visible/annotation-marker:h-6 group-focus-visible/annotation-marker:w-6 group-focus-visible/annotation-marker:text-xs motion-reduce:transition-none dark:bg-white dark:text-black dark:ring-black`, Ee = 30, De = 32, M = 24, Oe = 301, ke = 8, Ae = 260, N = 8, je = 10, Me = `text-token-text-primary flex h-7 w-max max-w-[260px] items-center truncate px-2.5 text-sm whitespace-nowrap`, Ne = 36, Pe = 12, Fe = 48, P = e => e instanceof Element && e.closest(`[data-annotation-control]`), F = u({
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
    T as a, Ie as i, j as n, le as o, ue as r, O as t
};
//# sourceMappingURL=971592ec-hqvmq8adqrj5i8rm.js.map