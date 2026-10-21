import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $b as n,
    At as r,
    Fnt as i,
    Int as a,
    Iy as o,
    Jt as s,
    LN as c,
    Ly as l,
    Ow as u,
    P5 as d,
    RN as f,
    S5 as p,
    X5 as m,
    Xy as h,
    Y5 as g,
    Zy as _,
    b8 as v,
    cn as ee,
    g8 as y,
    kw as b,
    tx as x
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    Bn as S,
    Kt as C,
    Ln as w,
    Rn as T,
    Vn as E,
    wn as D,
    zn as te
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $Gn as O,
    Blt as ne,
    Glt as re,
    Hlt as ie,
    Ult as ae,
    Wlt as oe,
    XGn as k
} from "./conversation-small-nmt18uiom3b14vca.js";
import {
    a_ as se,
    i_ as ce,
    n_ as A,
    r_ as j
} from "./30901919-niqyapppecmq5jkn.js";
var le, ue, M = e((() => {
    le = ({
        availableWidth: e,
        minimumMainWidth: t,
        minimumSidePaneWidth: n
    }) => e >= t + n, ue = ({
        availableWidth: e,
        minimumMainWidth: t,
        minimumSidePaneWidth: n,
        width: r
    }) => Math.min(Math.max(r, n), Math.max(n, e - t))
}));

function de(e) {
    "use forget";
    let t = (0, fe.c)(39),
        {
            availableWidth: n,
            minimumMainWidth: r,
            minimumSidePaneWidth: i,
            onResizeChange: a,
            onWidthCommit: o,
            onWidthChange: s,
            width: c
        } = e,
        l = te(),
        u = (0, pe.useRef)(null),
        d;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (d = {
        cursor: ``,
        userSelect: ``
    }, t[0] = d) : d = t[0];
    let f = (0, pe.useRef)(d),
        p;
    t[1] === a ? p = t[2] : (p = () => {
        let e = u.current;
        e != null && (u.current = null, e.ownerDocument.documentElement.style.cursor = f.current.cursor, e.ownerDocument.documentElement.style.userSelect = f.current.userSelect, e.handle.hasPointerCapture(e.pointerId) && e.handle.releasePointerCapture(e.pointerId), a(!1))
    }, t[1] = a, t[2] = p);
    let m = p,
        h, g;
    t[3] === m ? (h = t[4], g = t[5]) : (h = () => {
        let e = () => {
            document.visibilityState !== `visible` && m()
        };
        return window.addEventListener(`blur`, m), document.addEventListener(`visibilitychange`, e), () => {
            window.removeEventListener(`blur`, m), document.removeEventListener(`visibilitychange`, e), m()
        }
    }, g = [m], t[3] = m, t[4] = h, t[5] = g), (0, pe.useEffect)(h, g);
    let _;
    t[6] !== a || t[7] !== c ? (_ = e => {
        if (e.button !== 0 || !e.isPrimary || u.current != null) return;
        e.preventDefault();
        let t = e.currentTarget.parentElement,
            n = t != null && getComputedStyle(t).direction === `rtl` ? `rtl` : `ltr`;
        u.current = {
            direction: n,
            handle: e.currentTarget,
            ownerDocument: e.currentTarget.ownerDocument,
            pointerId: e.pointerId,
            startClientX: e.clientX,
            startWidth: c,
            width: c
        }, e.currentTarget.setPointerCapture(e.pointerId);
        let r = e.currentTarget.ownerDocument.documentElement;
        f.current = {
            cursor: r.style.cursor,
            userSelect: r.style.userSelect
        }, r.style.cursor = `ew-resize`, r.style.userSelect = `none`, a(!0)
    }, t[6] = a, t[7] = c, t[8] = _) : _ = t[8];
    let v = _,
        ee;
    t[9] !== n || t[10] !== r || t[11] !== i || t[12] !== s ? (ee = e => {
        let t = u.current;
        if (t == null || t.pointerId !== e.pointerId) return;
        let a = e.clientX - t.startClientX,
            o = t.startWidth + (t.direction === `rtl` ? a : -a),
            c = ue({
                availableWidth: n,
                minimumMainWidth: r,
                minimumSidePaneWidth: i,
                width: o
            });
        t.width = c, s(c)
    }, t[9] = n, t[10] = r, t[11] = i, t[12] = s, t[13] = ee) : ee = t[13];
    let y = ee,
        b;
    t[14] !== m || t[15] !== o ? (b = e => {
        let t = u.current;
        t?.pointerId === e.pointerId && (o?.(t.width), m())
    }, t[14] = m, t[15] = o, t[16] = b) : b = t[16];
    let x = b,
        S = Math.max(i, n - r),
        C;
    t[17] !== n || t[18] !== S || t[19] !== r || t[20] !== i || t[21] !== s || t[22] !== o || t[23] !== c ? (C = e => {
        let t = getComputedStyle(e.currentTarget.parentElement ?? e.currentTarget).direction === `rtl` ? `rtl` : `ltr`,
            a = e.shiftKey ? 64 : 16,
            l;
        bb70: switch (e.key) {
            case `ArrowLeft`:
                l = c + (t === `rtl` ? -a : a);
                break bb70;
            case `ArrowRight`:
                l = c + (t === `rtl` ? a : -a);
                break bb70;
            case `Home`:
                l = i;
                break bb70;
            case `End`:
                l = S;
                break bb70;
            default:
                return
        }
        e.preventDefault();
        let u = ue({
            availableWidth: n,
            minimumMainWidth: r,
            minimumSidePaneWidth: i,
            width: l
        });
        s(u), o?.(u)
    }, t[17] = n, t[18] = S, t[19] = r, t[20] = i, t[21] = s, t[22] = o, t[23] = c, t[24] = C) : C = t[24];
    let w = C,
        T;
    t[25] === l ? T = t[26] : (T = l.formatMessage(me.resizeHandle), t[25] = l, t[26] = T);
    let E;
    t[27] === c ? E = t[28] : (E = Math.round(c), t[27] = c, t[28] = E);
    let D;
    t[29] === Symbol.for(`react.memo_cache_sentinel`) ? (D = (0, N.jsx)(`div`, {
        className: `bg-token-border-light absolute inset-y-0 start-0 w-px opacity-0 transition-opacity group-hover/resize-handle:opacity-100 group-focus-visible/resize-handle:opacity-100`
    }), t[29] = D) : D = t[29];
    let O;
    return t[30] !== x || t[31] !== w || t[32] !== v || t[33] !== y || t[34] !== S || t[35] !== i || t[36] !== E || t[37] !== T ? (O = (0, N.jsx)(`div`, {
        "aria-label": T,
        "aria-orientation": `vertical`,
        "aria-valuemax": S,
        "aria-valuemin": i,
        "aria-valuenow": E,
        className: `group/resize-handle absolute inset-y-0 start-0 z-10 w-3 cursor-ew-resize touch-none outline-none`,
        "data-side-pane-shell-resize-handle": !0,
        role: `separator`,
        tabIndex: 0,
        onLostPointerCapture: x,
        onKeyDown: w,
        onPointerCancel: x,
        onPointerDown: v,
        onPointerMove: y,
        onPointerUp: x,
        children: D
    }), t[30] = x, t[31] = w, t[32] = v, t[33] = y, t[34] = S, t[35] = i, t[36] = E, t[37] = T, t[38] = O) : O = t[38], O
}
var fe, pe, N, me, he = e((() => {
    fe = D(), pe = t(E()), T(), M(), N = S(), me = w({
        resizeHandle: {
            id: `SidePaneShell.resizeHandle`,
            defaultMessage: `Resize side pane`
        }
    })
}));

function ge(e) {
    return typeof e == `number` && Number.isFinite(e) && e > 0 ? Math.round(e) : null
}

function _e(e) {
    let t = ge(e);
    t != null && p(() => P()) !== t && P.set(t)
}
var P, ve = e((() => {
    y(), a(), P = v(i.SidePaneShellWidth, () => null, {
        coerceStoredValue: ge
    })
}));

function ye(e) {
    let t = e.createElement(`div`);
    return t.className = `contents`, t.setAttribute(`data-side-pane-shell-content-mount`, ``), t
}

function F(e) {
    "use forget";
    let t = (0, De.c)(237),
        {
            accessibleTitle: r,
            animateInitialFullscreenEntrance: i,
            animateToPresentation: a,
            animateToPresentationDuration: o,
            animateToPresentationEase: c,
            children: u,
            className: p,
            contentParkingContainer: m,
            defaultSidePaneWidth: h,
            focusOnClose: _,
            focusOnOpen: v,
            initialPresentation: y,
            minimumMainWidth: b,
            minimumSidePaneWidth: x,
            onSidePaneWidthCommit: S,
            onEscapeKeyDown: C,
            onOpenChange: w,
            open: T,
            overlayMainDuringFullscreenTransition: E,
            ownerKind: D,
            paneId: te,
            persistSidePaneWidth: ie,
            preserveSidebar: ae,
            preferredSidePaneWidth: k
        } = e,
        se = i !== void 0 && i,
        ce = y === void 0 ? `side-pane` : y,
        A = b === void 0 ? 400 : b,
        j = x === void 0 ? 400 : x,
        M = E !== void 0 && E,
        fe = ie === void 0 || ie,
        pe = ae !== void 0 && ae,
        N = O(),
        me;
    t[0] === N ? me = t[1] : (me = () => N?.activeOwnerId$() ?? null, t[0] = N, t[1] = me);
    let he = d(me),
        ge;
    t[2] === N ? ge = t[3] : (ge = () => N?.connection$() ?? null, t[2] = N, t[3] = ge);
    let P = d(ge),
        ve = N?.claim,
        F = l(),
        I = s(),
        Ce = d(Se),
        we = (0, R.useRef)(a),
        Te = (0, R.useRef)(ce),
        [L, Ee] = (0, R.useState)(a == null ? ce : `side-pane`),
        Pe = (0, R.useRef)(L),
        [B, V] = (0, R.useState)(a == null ? ce : `side-pane`),
        [H, Fe] = (0, R.useState)(null),
        [Ie, Le] = (0, R.useState)(!1),
        [Re, ze] = (0, R.useState)(null),
        [Be, Ve] = (0, R.useState)(!1),
        [U, He] = (0, R.useState)(null),
        Ue = (0, R.useId)(),
        We = te ?? `side-pane-shell:${Ue}`,
        Ge = (0, R.useRef)(0),
        Ke = (0, R.useRef)(null),
        W = (0, R.useRef)(null),
        G = (0, R.useRef)(null),
        qe = (0, R.useRef)(null),
        Je = (0, R.useRef)(`dismissed`),
        Ye = (0, R.useRef)(w),
        Xe = (0, R.useRef)(v),
        Ze = (0, R.useRef)(_),
        Qe = (0, R.useRef)(k),
        $e = (0, R.useRef)(k),
        et = (0, R.useRef)(!1),
        tt = (0, R.useRef)(null),
        nt = (0, R.useRef)(null),
        rt = (0, R.useRef)(null),
        [K, it] = (0, R.useState)(null),
        at = (0, R.useRef)(null),
        ot = (0, R.useRef)(null),
        [st, ct] = (0, R.useState)(null),
        q = P?.availableWidth ?? 0,
        lt = P?.id,
        J = P?.overlayContainer,
        Y = P?.railElement,
        ut = m != null,
        dt;
    t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (dt = e => {
        let t = Xe.current;
        e == null || t == null || (t(), e.contains(e.ownerDocument.activeElement) || e.focus(), e.ownerDocument.defaultView?.requestAnimationFrame(() => {
            e.isConnected && (Xe.current?.(), e.contains(e.ownerDocument.activeElement) || e.focus())
        }))
    }, t[4] = dt) : dt = t[4];
    let ft = dt,
        pt, mt;
    t[5] !== _ || t[6] !== v || t[7] !== w || t[8] !== k ? (pt = () => {
        Ye.current = w, Xe.current = v, Ze.current = _, Qe.current = k
    }, mt = [_, v, w, k], t[5] = _, t[6] = v, t[7] = w, t[8] = k, t[9] = pt, t[10] = mt) : (pt = t[9], mt = t[10]), f(pt, mt);
    let ht, gt;
    t[11] === m ? (ht = t[12], gt = t[13]) : (ht = () => {
        ot.current = m ?? null
    }, gt = [m], t[11] = m, t[12] = ht, t[13] = gt), f(ht, gt);
    let _t;
    t[14] === Symbol.for(`react.memo_cache_sentinel`) ? (_t = () => {
        let e = at.current,
            t = ot.current;
        e == null || t == null || e.parentElement === t || !e.isConnected || !t.isConnected || (`moveBefore` in Element.prototype ? t.moveBefore(e, null) : t.append(e))
    }, t[14] = _t) : _t = t[14];
    let vt = _t,
        yt, bt;
    t[15] !== ut || t[16] !== Y ? (yt = () => {
        if (ut) {
            if (Y == null) return;
            let e = at.current,
                t = e?.ownerDocument === Y.ownerDocument ? e : ye(Y.ownerDocument);
            t !== e && (e?.remove(), at.current = t), it(t);
            return
        }
        if (Y == null) {
            it(null);
            return
        }
        let e = ye(Y.ownerDocument);
        return it(e), () => e.remove()
    }, bt = [ut, Y], t[15] = ut, t[16] = Y, t[17] = yt, t[18] = bt) : (yt = t[17], bt = t[18]), f(yt, bt);
    let xt, St;
    t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (xt = () => () => {
        at.current?.remove(), at.current = null
    }, St = [], t[19] = xt, t[20] = St) : (xt = t[19], St = t[20]), (0, R.useEffect)(xt, St);
    let Ct, wt;
    t[21] === L ? (Ct = t[22], wt = t[23]) : (Ct = () => {
        Pe.current = L
    }, wt = [L], t[21] = L, t[22] = Ct, t[23] = wt), f(Ct, wt);
    let Tt, Et;
    t[24] !== ve || t[25] !== lt || t[26] !== T || t[27] !== D || t[28] !== pe || t[29] !== We ? (Tt = () => {
        if (!T || ve == null || lt == null) return;
        let e = ve(lt, We, () => {
            Je.current = `replaced`, queueMicrotask(() => {
                Ye.current(!1, {
                    reason: `replaced`
                })
            })
        }, Pe.current, D, vt, pe);
        if (e != null) return e.continuesActivePane && Qe.current != null ? ze(Qe.current) : e.initialSidePaneWidth != null && ze(e.initialSidePaneWidth), Ge.current += 1, W.current = null, G.current?.skipTransition(), Ke.current = null, Fe(null), Ee(e.initialRequestedPresentation), V(e.initialRequestedPresentation), He(e), () => {
            e.detach(), He(t => t?.id === e.id ? null : t)
        }
    }, Et = [ve, lt, T, D, vt, pe, We], t[24] = ve, t[25] = lt, t[26] = T, t[27] = D, t[28] = pe, t[29] = We, t[30] = Tt, t[31] = Et) : (Tt = t[30], Et = t[31]), f(Tt, Et);
    let Dt, Ot;
    t[32] !== U || t[33] !== k ? (Dt = () => {
        let e = $e.current;
        $e.current = k, U != null && k != null && k !== e && ze(k)
    }, Ot = [U, k], t[32] = U, t[33] = k, t[34] = Dt, t[35] = Ot) : (Dt = t[34], Ot = t[35]), f(Dt, Ot);
    let kt, At;
    t[36] !== T || t[37] !== U ? (kt = () => {
        !T && U != null && (U.close(), He(null))
    }, At = [T, U], t[36] = T, t[37] = U, t[38] = kt, t[39] = At) : (kt = t[38], At = t[39]), f(kt, At);
    let jt, Mt;
    t[40] === T ? (jt = t[41], Mt = t[42]) : (jt = () => {
        T || (Ge.current += 1, W.current = null, G.current?.skipTransition(), Ee(we.current == null ? Te.current : `side-pane`), ze(null))
    }, Mt = [T], t[40] = T, t[41] = jt, t[42] = Mt), (0, R.useEffect)(jt, Mt);
    let Nt, Pt;
    t[43] === Symbol.for(`react.memo_cache_sentinel`) ? (Nt = () => () => {
        Ge.current += 1, W.current = null, G.current?.skipTransition()
    }, Pt = [], t[43] = Nt, t[44] = Pt) : (Nt = t[43], Pt = t[44]), (0, R.useEffect)(Nt, Pt);
    let Ft = U?.id === he,
        It;
    t[45] !== q || t[46] !== A || t[47] !== j ? (It = le({
        availableWidth: q,
        minimumMainWidth: A,
        minimumSidePaneWidth: j
    }), t[45] = q, t[46] = A, t[47] = j, t[48] = It) : It = t[48];
    let Lt = It,
        X = L === `fullscreen` || !Lt ? `fullscreen` : `side-pane`,
        Rt = Re ?? (fe && S == null ? Ce ?? h : h) ?? q * .5,
        zt;
    t[49] !== q || t[50] !== A || t[51] !== j || t[52] !== Rt ? (zt = ue({
        availableWidth: q,
        minimumMainWidth: A,
        minimumSidePaneWidth: j,
        width: Rt
    }), t[49] = q, t[50] = A, t[51] = j, t[52] = Rt, t[53] = zt) : zt = t[53];
    let Z = zt,
        Q = T && Ft && P != null && q > 0,
        Bt = Q && B === `fullscreen`,
        Vt, Ht;
    t[54] !== Q || t[55] !== I || t[56] !== X || t[57] !== H || t[58] !== B ? (Vt = () => {
        if (!Q || I) {
            Ke.current = null, W.current = null, Fe(null), V(X);
            return
        }
        if (H != null && H.target !== X) {
            Ke.current = null, W.current = null, Fe(null), V(X);
            return
        }
        H == null && B !== X && V(X)
    }, Ht = [Q, I, X, H, B], t[54] = Q, t[55] = I, t[56] = X, t[57] = H, t[58] = B, t[59] = Vt, t[60] = Ht) : (Vt = t[59], Ht = t[60]), f(Vt, Ht);
    let Ut, Wt;
    t[61] !== Q || t[62] !== U || t[63] !== B ? (Ut = () => {
        !Q || U == null || tt.current?.ownerSessionId === U.id && tt.current.presentation === B || (ft(B === `side-pane` ? nt.current : rt.current), tt.current = {
            ownerSessionId: U.id,
            presentation: B
        })
    }, Wt = [ft, Q, U, B], t[61] = Q, t[62] = U, t[63] = B, t[64] = Ut, t[65] = Wt) : (Ut = t[64], Wt = t[65]), f(Ut, Wt);
    let Gt;
    t[66] === Q ? Gt = t[67] : (Gt = () => {
        !Q && et.current && (Je.current !== `replaced` && Ze.current?.(), Je.current = `dismissed`, tt.current = null), et.current = Q
    }, t[66] = Q, t[67] = Gt);
    let Kt;
    t[68] !== Q || t[69] !== B ? (Kt = [Q, B], t[68] = Q, t[69] = B, t[70] = Kt) : Kt = t[70], f(Gt, Kt);
    let qt, Jt;
    t[71] !== Z || t[72] !== Ie || t[73] !== Be || t[74] !== Q || t[75] !== M || t[76] !== U || t[77] !== X || t[78] !== H || t[79] !== L ? (qt = () => {
        if (U == null) return;
        let e = M && H?.target === `fullscreen`;
        U.updateState({
            railLayout: {
                animateWidth: !Be && H == null && !Ie,
                width: Q && !e && (X === `side-pane` || H != null) ? H?.sidePaneWidth ?? Z : 0
            },
            requestedPresentation: L
        })
    }, Jt = [Z, Be, Q, Ie, U, M, X, H, L], t[71] = Z, t[72] = Ie, t[73] = Be, t[74] = Q, t[75] = M, t[76] = U, t[77] = X, t[78] = H, t[79] = L, t[80] = qt, t[81] = Jt) : (qt = t[80], Jt = t[81]), f(qt, Jt);
    let Yt;
    t[82] === Symbol.for(`react.memo_cache_sentinel`) ? (Yt = () => {
        Je.current = `dismissed`, Ye.current(!1, {
            reason: `dismissed`
        })
    }, t[82] = Yt) : Yt = t[82];
    let Xt = Yt,
        Zt;
    t[83] !== C || t[84] !== B ? (Zt = e => {
        if (B !== `side-pane` || e.key !== `Escape`) return;
        let t = e.nativeEvent;
        queueMicrotask(() => {
            t.defaultPrevented || (C?.(t), t.defaultPrevented || Xt())
        })
    }, t[83] = C, t[84] = B, t[85] = Zt) : Zt = t[85];
    let Qt = Zt,
        $t;
    t[86] === Symbol.for(`react.memo_cache_sentinel`) ? ($t = e => {
        Ve(e)
    }, t[86] = $t) : $t = t[86];
    let en = $t,
        tn;
    t[87] !== q || t[88] !== Z || t[89] !== Q || t[90] !== A || t[91] !== j || t[92] !== M || t[93] !== U || t[94] !== I ? (tn = (e, t, n, r, i, a) => {
        if (Ge.current !== t) return;
        let o = e === `side-pane` && Qe.current != null ? ue({
            availableWidth: q,
            minimumMainWidth: A,
            minimumSidePaneWidth: j,
            width: Qe.current
        }) : Z;
        if (e === `side-pane` && Qe.current != null && ze(o), !I && U != null) {
            let t = M && e === `fullscreen`;
            U.updateState({
                railLayout: {
                    animateWidth: !1,
                    width: Q && !t && (r || e === `side-pane`) ? o : 0
                },
                requestedPresentation: e
            })
        }
        if (Ee(e), I || !r) {
            Ke.current = null, W.current = null, Fe(null), V(e);
            return
        }
        let s = nt.current?.closest(`[data-side-pane-shell-rail]`)?.getBoundingClientRect().width ?? 0,
            c = {
                duration: i,
                ease: a,
                generation: t,
                sidePaneWidth: e === `fullscreen` && s > 0 ? s : o,
                target: e,
                usesViewTransition: n
            };
        Ke.current = c, Le(!0), Fe(c), e === `fullscreen` && V(`fullscreen`)
    }, t[87] = q, t[88] = Z, t[89] = Q, t[90] = A, t[91] = j, t[92] = M, t[93] = U, t[94] = I, t[95] = tn) : tn = t[95];
    let nn = tn,
        rn;
    t[96] !== nn || t[97] !== I || t[98] !== X || t[99] !== L || t[100] !== B ? (rn = (e, t, n, r, i) => {
        let a = n === void 0 || n,
            o = r === void 0 ? ke.duration : r,
            s = i === void 0 ? ke.ease : i;
        if ((W.current ?? L) === e) return;
        let c = Ge.current + 1;
        Ge.current = c, W.current = e, (async () => {
            let n = t,
                r = a && n != null && !I && typeof document < `u` && document.visibilityState !== `hidden` && `startViewTransition` in document;
            if (r && n?.prepare != null && (r = await n.prepare().catch(xe)), Ge.current !== c) return;
            let i = G.current;
            if (i != null && (i.skipTransition(), await re(i), G.current === i && (G.current = null)), Ge.current !== c) return;
            if (e === X && e === B) {
                Ee(e), W.current = null;
                return
            }
            if (!r || n == null) {
                nn(e, c, !1, a, o, s);
                return
            }
            let l = oe({
                forceFlushSync: !0,
                className: [n.className, e === `fullscreen` ? je : Me],
                update: () => {
                    nn(e, c, !0, a, o, s)
                }
            });
            G.current = l, re(l).then(() => {
                G.current === l && (G.current = null)
            })
        })()
    }, t[96] = nn, t[97] = I, t[98] = X, t[99] = L, t[100] = B, t[101] = rn) : rn = t[101];
    let an = rn,
        on;
    t[102] !== an || t[103] !== L ? (on = (e, t) => {
        let n = t === void 0 || t,
            r = W.current ?? L;
        an(r === `side-pane` ? `fullscreen` : `side-pane`, e, n)
    }, t[102] = an, t[103] = L, t[104] = on) : on = t[104];
    let sn = on,
        cn;
    t[105] !== a || t[106] !== o || t[107] !== c || t[108] !== K || t[109] !== Q || t[110] !== M || t[111] !== U || t[112] !== Y?.ownerDocument || t[113] !== an ? (cn = () => {
        if (a == null || !Q || U == null || K == null || qe.current?.ownerSessionId === U.id && qe.current.presentation === a) return;
        let e = Y?.ownerDocument.defaultView;
        if (e == null) return;
        let t = () => {
            qe.current = {
                ownerSessionId: U.id,
                presentation: a
            }, an(a, void 0, !0, o, c)
        };
        if (M && a === `fullscreen`) {
            t();
            return
        }
        let n = e.requestAnimationFrame(t);
        return () => e.cancelAnimationFrame(n)
    }, t[105] = a, t[106] = o, t[107] = c, t[108] = K, t[109] = Q, t[110] = M, t[111] = U, t[112] = Y?.ownerDocument, t[113] = an, t[114] = cn) : cn = t[114];
    let ln;
    t[115] !== a || t[116] !== o || t[117] !== c || t[118] !== K || t[119] !== Q || t[120] !== M || t[121] !== U || t[122] !== Y || t[123] !== an ? (ln = [a, o, c, K, Q, M, U, Y, an], t[115] = a, t[116] = o, t[117] = c, t[118] = K, t[119] = Q, t[120] = M, t[121] = U, t[122] = Y, t[123] = an, t[124] = ln) : ln = t[124], f(cn, ln);
    let un;
    t[125] === Symbol.for(`react.memo_cache_sentinel`) ? (un = e => {
        let t = Ke.current;
        if (t == null || t.generation !== e) return;
        V(t.target), Ke.current = null, W.current = null, Fe(null);
        let n = rt.current?.ownerDocument.defaultView;
        if (n == null) {
            Le(!1);
            return
        }
        n.requestAnimationFrame(() => {
            n.requestAnimationFrame(() => {
                Ge.current === e && Ke.current == null && Le(!1)
            })
        })
    }, t[125] = un) : un = t[125];
    let dn = un,
        fn;
    t[126] !== K || t[127] !== m || t[128] !== J ? (fn = e => {
        if (K == null || e == null) return;
        let t = `moveBefore` in Element.prototype;
        return K.parentElement !== e && t && e.isConnected && K.isConnected ? e.moveBefore(K, null) : K.parentElement !== e && e.append(K), () => {
            let n = m ?? J;
            K.parentElement !== e || !t || n == null || !n.isConnected || !K.isConnected || n.moveBefore(K, null)
        }
    }, t[126] = K, t[127] = m, t[128] = J, t[129] = fn) : fn = t[129];
    let pn = fn;
    if (ve == null) return null;
    let mn = H != null,
        hn = H?.usesViewTransition === !0,
        gn;
    t[130] !== Lt || t[131] !== X || t[132] !== B || t[133] !== mn || t[134] !== hn || t[135] !== sn ? (gn = {
        canUseSidePane: Lt,
        isPresentationTransitioning: mn,
        presentation: B,
        presentationTransitionUsesViewTransition: hn,
        requestClose: Xt,
        targetPresentation: X,
        togglePresentation: sn
    }, t[130] = Lt, t[131] = X, t[132] = B, t[133] = mn, t[134] = hn, t[135] = sn, t[136] = gn) : gn = t[136];
    let _n = gn,
        vn;
    t[137] !== u || t[138] !== K || t[139] !== _n || t[140] !== st || t[141] !== Qt || t[142] !== Q || t[143] !== T || t[144] !== ut || t[145] !== Y?.ownerDocument || t[146] !== B ? (vn = K != null && (Q || ut && T) ? (0, Oe.createPortal)((0, z.jsx)(n, {
        value: () => B === `fullscreen` ? st : Y?.ownerDocument.body ?? null,
        children: (0, z.jsx)(`div`, {
            className: `contents`,
            role: `presentation`,
            onKeyDown: Qt,
            children: (0, z.jsx)(Ne, {
                value: _n,
                children: u
            })
        })
    }), K, `side-pane-shell-content`) : null, t[137] = u, t[138] = K, t[139] = _n, t[140] = st, t[141] = Qt, t[142] = Q, t[143] = T, t[144] = ut, t[145] = Y?.ownerDocument, t[146] = B, t[147] = vn) : vn = t[147];
    let yn = vn,
        bn = H?.target === `side-pane` ? `collapsing` : H?.target === `fullscreen` ? `expanding` : void 0,
        xn;
    t[148] !== bn || t[149] !== Bt || t[150] !== J ? (xn = Bt && J != null ? (0, Oe.createPortal)((0, z.jsx)(`div`, {
        className: `pointer-events-none fixed inset-0 z-[121]`,
        "data-side-pane-shell-fullscreen-portal-layer": !0,
        "data-side-pane-shell-transition": bn,
        children: (0, z.jsx)(`div`, {
            ref: ct,
            className: `pointer-events-auto contents`
        })
    }), J, `side-pane-shell-fullscreen-portal`) : null, t[148] = bn, t[149] = Bt, t[150] = J, t[151] = xn) : xn = t[151];
    let Sn = xn,
        Cn;
    t[152] !== r || t[153] !== Ue || t[154] !== pn || t[155] !== q || t[156] !== Z || t[157] !== p || t[158] !== Qt || t[159] !== Q || t[160] !== A || t[161] !== j || t[162] !== S || t[163] !== fe || t[164] !== Y || t[165] !== B ? (Cn = Q && B === `side-pane` && Y != null ? (0, Oe.createPortal)((0, z.jsxs)(`aside`, {
        ref: nt,
        "aria-label": typeof r == `string` ? r : void 0,
        "aria-labelledby": typeof r == `string` ? void 0 : Ue,
        className: g(`bg-token-bg-primary relative flex h-full w-full min-w-0 flex-col overflow-hidden rounded-s-3xl border-s border-token-border-light outline-none`, p),
        "data-side-pane-shell-content": !0,
        "data-side-pane-shell-presentation": `side-pane`,
        onKeyDown: Qt,
        tabIndex: -1,
        children: [typeof r == `string` ? null : (0, z.jsx)(`h2`, {
            id: Ue,
            className: `sr-only`,
            children: r
        }), (0, z.jsx)(de, {
            availableWidth: q,
            minimumMainWidth: A,
            minimumSidePaneWidth: j,
            onResizeChange: en,
            onWidthCommit: S ?? (fe ? _e : void 0),
            onWidthChange: ze,
            width: Z
        }), (0, z.jsx)(`div`, {
            ref: pn,
            className: `contents`
        })]
    }), Y) : null, t[152] = r, t[153] = Ue, t[154] = pn, t[155] = q, t[156] = Z, t[157] = p, t[158] = Qt, t[159] = Q, t[160] = A, t[161] = j, t[162] = S, t[163] = fe, t[164] = Y, t[165] = B, t[166] = Cn) : Cn = t[166];
    let wn = Cn,
        Tn = F === `rtl` ? `0 24px 24px 0` : `24px 0 0 24px`,
        En = H?.sidePaneWidth ?? Z,
        Dn = Math.max(0, q - En),
        $ = F === `rtl` ? -Dn : Dn,
        On = H?.target ?? `fullscreen`,
        kn;
    t[167] !== F || t[168] !== $ || t[169] !== On || t[170] !== Tn ? (kn = On === `side-pane` ? {
        borderLeftWidth: +(F === `ltr`),
        borderRadius: Tn,
        borderRightWidth: +(F === `rtl`),
        x: $
    } : {
        borderLeftWidth: 0,
        borderRadius: `0px`,
        borderRightWidth: 0,
        x: 0
    }, t[167] = F, t[168] = $, t[169] = On, t[170] = Tn, t[171] = kn) : kn = t[171];
    let An = kn,
        jn = se && I !== !0 && H == null && B === `fullscreen`,
        Mn;
    t[172] !== F || t[173] !== $ || t[174] !== H?.target || t[175] !== jn || t[176] !== Tn ? (Mn = H?.target === `fullscreen` ? {
        borderLeftWidth: +(F === `ltr`),
        borderRadius: Tn,
        borderRightWidth: +(F === `rtl`),
        x: $
    } : jn ? {
        borderRadius: `16px`,
        opacity: .45,
        scale: .965,
        y: 6
    } : !1, t[172] = F, t[173] = $, t[174] = H?.target, t[175] = jn, t[176] = Tn, t[177] = Mn) : Mn = t[177];
    let Nn = Mn,
        Pn;
    t[178] !== $ || t[179] !== On ? (Pn = On === `side-pane` ? {
        x: -$ / 2
    } : {
        x: 0
    }, t[178] = $, t[179] = On, t[180] = Pn) : Pn = t[180];
    let Fn = Pn,
        In;
    t[181] !== $ || t[182] !== H?.target ? (In = H?.target === `fullscreen` && {
        x: -$ / 2
    }, t[181] = $, t[182] = H?.target, t[183] = In) : In = t[183];
    let Ln = In,
        Rn = On === `side-pane` ? En : q,
        zn;
    t[184] === Symbol.for(`react.memo_cache_sentinel`) ? (zn = e => {
        e || Xt()
    }, t[184] = zn) : zn = t[184];
    let Bn;
    t[185] === U ? Bn = t[186] : (Bn = e => {
        Xe.current != null && (e.preventDefault(), ft(rt.current)), U != null && (tt.current = {
            ownerSessionId: U.id,
            presentation: `fullscreen`
        })
    }, t[185] = U, t[186] = Bn);
    let Vn;
    t[187] === jn ? Vn = t[188] : (Vn = jn ? {
        opacity: 1,
        scale: 1,
        y: 0
    } : {}, t[187] = jn, t[188] = Vn);
    let Hn;
    t[189] !== An || t[190] !== Vn ? (Hn = {
        ...An,
        ...Vn
    }, t[189] = An, t[190] = Vn, t[191] = Hn) : Hn = t[191];
    let Un;
    t[192] !== H || t[193] !== jn ? (Un = H == null ? jn ? Ae : {
        duration: 0
    } : {
        ...ke,
        duration: H.duration,
        ease: H.ease
    }, t[192] = H, t[193] = jn, t[194] = Un) : Un = t[194];
    let Wn;
    t[195] === p ? Wn = t[196] : (Wn = g(`bg-token-bg-primary absolute inset-y-0 end-0 z-[120] flex min-h-0 flex-col overflow-hidden border-solid border-token-border-light outline-none`, p), t[195] = p, t[196] = Wn);
    let Gn;
    t[197] === H ? Gn = t[198] : (Gn = () => {
        H != null && dn(H.generation)
    }, t[197] = H, t[198] = Gn);
    let Kn;
    t[199] === q ? Kn = t[200] : (Kn = {
        insetInlineStart: `auto`,
        width: q
    }, t[199] = q, t[200] = Kn);
    let qn;
    t[201] === H ? qn = t[202] : (qn = H == null ? {
        duration: 0
    } : {
        ...ke,
        duration: H.duration,
        ease: H.ease
    }, t[201] = H, t[202] = qn);
    let Jn = On === `side-pane` && `border-s border-transparent`,
        Yn;
    t[203] === Jn ? Yn = t[204] : (Yn = g(`mx-auto flex h-full min-h-0 shrink-0 flex-col`, Jn), t[203] = Jn, t[204] = Yn);
    let Xn;
    t[205] === Rn ? Xn = t[206] : (Xn = {
        width: Rn
    }, t[205] = Rn, t[206] = Xn);
    let Zn;
    t[207] === pn ? Zn = t[208] : (Zn = (0, z.jsx)(`div`, {
        ref: pn,
        className: `contents`
    }), t[207] = pn, t[208] = Zn);
    let Qn;
    t[209] !== Fn || t[210] !== Ln || t[211] !== qn || t[212] !== Yn || t[213] !== Xn || t[214] !== Zn ? (Qn = (0, z.jsx)(ee.div, {
        initial: Ln,
        animate: Fn,
        transition: qn,
        className: Yn,
        style: Xn,
        children: Zn
    }), t[209] = Fn, t[210] = Ln, t[211] = qn, t[212] = Yn, t[213] = Xn, t[214] = Zn, t[215] = Qn) : Qn = t[215];
    let $n;
    t[216] !== Nn || t[217] !== bn || t[218] !== Hn || t[219] !== Un || t[220] !== Wn || t[221] !== Gn || t[222] !== Kn || t[223] !== Qn ? ($n = (0, z.jsx)(ee.div, {
        ref: rt,
        initial: Nn,
        animate: Hn,
        transition: Un,
        className: Wn,
        "data-side-pane-shell-content": !0,
        "data-side-pane-shell-presentation": `fullscreen`,
        "data-side-pane-shell-transition": bn,
        onAnimationComplete: Gn,
        style: Kn,
        tabIndex: -1,
        children: Qn
    }), t[216] = Nn, t[217] = bn, t[218] = Hn, t[219] = Un, t[220] = Wn, t[221] = Gn, t[222] = Kn, t[223] = Qn, t[224] = $n) : $n = t[224];
    let er;
    t[225] !== r || t[226] !== Bt || t[227] !== C || t[228] !== J || t[229] !== Bn || t[230] !== $n ? (er = (0, z.jsx)(ne, {
        asChild: !0,
        accessibleTitle: r,
        open: Bt,
        preserveSidebar: !0,
        onOpenChange: zn,
        onCloseAutoFocus: be,
        onEscapeKeyDown: C,
        onOpenAutoFocus: Bn,
        portalContainer: J,
        children: $n
    }), t[225] = r, t[226] = Bt, t[227] = C, t[228] = J, t[229] = Bn, t[230] = $n, t[231] = er) : er = t[231];
    let tr;
    return t[232] !== yn || t[233] !== Sn || t[234] !== wn || t[235] !== er ? (tr = (0, z.jsxs)(z.Fragment, {
        children: [yn, Sn, wn, er]
    }), t[232] = yn, t[233] = Sn, t[234] = wn, t[235] = er, t[236] = tr) : tr = t[236], tr
}

function be(e) {
    return e.preventDefault()
}

function xe() {
    return !1
}

function Se() {
    return P()
}

function I(e) {
    "use forget";
    let t = (0, De.c)(16),
        n, r, i, a, o;
    t[0] === e ? (n = t[1], r = t[2], i = t[3], a = t[4], o = t[5]) : ({
        children: n,
        className: r,
        closeButton: i,
        showModeToggle: o,
        ...a
    } = e, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a, t[5] = o);
    let s = o === void 0 || o,
        c;
    t[6] === r ? c = t[7] : (c = g(`flex h-14 shrink-0 items-center gap-2 border-b border-token-border-light px-4`, r), t[6] = r, t[7] = c);
    let l;
    t[8] !== i || t[9] !== s ? (l = (0, z.jsx)(`div`, {
        className: `ms-auto flex items-center gap-2`,
        children: (0, z.jsx)(L, {
            closeButton: i,
            showModeToggle: s
        })
    }), t[8] = i, t[9] = s, t[10] = l) : l = t[10];
    let u;
    return t[11] !== n || t[12] !== a || t[13] !== c || t[14] !== l ? (u = (0, z.jsxs)(`header`, {
        className: c,
        ...a,
        children: [n, l]
    }), t[11] = n, t[12] = a, t[13] = c, t[14] = l, t[15] = u) : u = t[15], u
}

function Ce(e) {
    "use forget";
    let t = (0, De.c)(8),
        n, r;
    t[0] === e ? (n = t[1], r = t[2]) : ({
        className: n,
        ...r
    } = e, t[0] = e, t[1] = n, t[2] = r);
    let i;
    t[3] === n ? i = t[4] : (i = g(`min-h-0 min-w-0 flex-1 overflow-auto`, n), t[3] = n, t[4] = i);
    let a;
    return t[5] !== r || t[6] !== i ? (a = (0, z.jsx)(`div`, {
        className: i,
        ...r
    }), t[5] = r, t[6] = i, t[7] = a) : a = t[7], a
}

function we(e) {
    "use forget";
    let t = (0, De.c)(19),
        n, r, i, a;
    t[0] === e ? (n = t[1], r = t[2], i = t[3], a = t[4]) : ({
        "aria-label": n,
        className: r,
        onClick: i,
        ...a
    } = e, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a);
    let o = te(),
        s = (0, R.use)(Ne);
    if (s == null) throw Error(`SidePaneShell compound components require SidePaneShell.Content`);
    let {
        requestClose: c
    } = s, l;
    t[5] !== n || t[6] !== o ? (l = n ?? o.formatMessage({
        id: `side_pane_shell.close`,
        defaultMessage: `Close`
    }), t[5] = n, t[6] = o, t[7] = l) : l = t[7];
    let d = l,
        f;
    t[8] === r ? f = t[9] : (f = g(`hover:bg-token-bg-tertiary flex size-9 items-center justify-center rounded-full`, r), t[8] = r, t[9] = f);
    let p;
    t[10] !== i || t[11] !== c ? (p = e => {
        i?.(e), e.defaultPrevented || c()
    }, t[10] = i, t[11] = c, t[12] = p) : p = t[12];
    let m;
    t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (m = (0, z.jsx)(u, {
        className: `icon`
    }), t[13] = m) : m = t[13];
    let h;
    return t[14] !== d || t[15] !== a || t[16] !== f || t[17] !== p ? (h = (0, z.jsx)(`button`, {
        type: `button`,
        "aria-label": d,
        className: f,
        onClick: p,
        ...a,
        children: m
    }), t[14] = d, t[15] = a, t[16] = f, t[17] = p, t[18] = h) : h = t[18], h
}

function Te(e) {
    "use forget";
    let t = (0, De.c)(48),
        n, r, i, a, o, s, c, l, u, d, f;
    t[0] === e ? (n = t[1], r = t[2], i = t[3], a = t[4], o = t[5], s = t[6], c = t[7], l = t[8], u = t[9], d = t[10], f = t[11]) : ({
        "aria-label": n,
        className: r,
        disabled: i,
        onClick: a,
        onFocus: o,
        onPointerEnter: s,
        preparePresentation: c,
        presentationViewTransition: l,
        tooltipClassName: f,
        type: d,
        ...u
    } = e, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a, t[5] = o, t[6] = s, t[7] = c, t[8] = l, t[9] = u, t[10] = d, t[11] = f);
    let p = d === void 0 ? `button` : d,
        m = te(),
        _ = (0, R.use)(Ne);
    if (_ == null) throw Error(`SidePaneShell compound components require SidePaneShell.Content`);
    let {
        canUseSidePane: v,
        isPresentationTransitioning: ee,
        targetPresentation: y,
        togglePresentation: b
    } = _;
    if (!v) return null;
    let x = i || ee,
        S;
    t[12] !== n || t[13] !== m || t[14] !== y ? (S = n ?? (y === `side-pane` ? m.formatMessage({
        id: `side_pane_shell.open_fullscreen`,
        defaultMessage: `Open fullscreen`
    }) : m.formatMessage({
        id: `side_pane_shell.open_side_pane`,
        defaultMessage: `Open side pane`
    })), t[12] = n, t[13] = m, t[14] = y, t[15] = S) : S = t[15];
    let C = S,
        w = x || void 0,
        T;
    t[16] === r ? T = t[17] : (T = g(`hover:bg-token-bg-tertiary flex size-9 items-center justify-center rounded-full aria-disabled:opacity-50`, r), t[16] = r, t[17] = T);
    let E;
    t[18] !== x || t[19] !== o || t[20] !== c ? (E = e => {
        o?.(e), x || c?.()
    }, t[18] = x, t[19] = o, t[20] = c, t[21] = E) : E = t[21];
    let D;
    t[22] !== x || t[23] !== s || t[24] !== c ? (D = e => {
        s?.(e), x || c?.()
    }, t[22] = x, t[23] = s, t[24] = c, t[25] = D) : D = t[25];
    let O;
    t[26] !== x || t[27] !== a || t[28] !== c || t[29] !== l || t[30] !== b ? (O = e => {
        if (x) {
            e.preventDefault();
            return
        }
        if (a?.(e), !e.defaultPrevented) {
            if (c == null) {
                b(l);
                return
            }
            c().then(e => b(l, e), () => b(l, !1))
        }
    }, t[26] = x, t[27] = a, t[28] = c, t[29] = l, t[30] = b, t[31] = O) : O = t[31];
    let ne;
    t[32] === y ? ne = t[33] : (ne = y === `side-pane` ? (0, z.jsx)(A, {
        className: `icon-md`
    }) : (0, z.jsx)(ce, {
        className: `icon-md`
    }), t[32] = y, t[33] = ne);
    let re;
    t[34] !== C || t[35] !== u || t[36] !== w || t[37] !== T || t[38] !== E || t[39] !== D || t[40] !== O || t[41] !== ne || t[42] !== p ? (re = (0, z.jsx)(`button`, {
        ...u,
        type: p,
        "aria-disabled": w,
        "aria-label": C,
        className: T,
        onFocus: E,
        onPointerEnter: D,
        onClick: O,
        children: ne
    }), t[34] = C, t[35] = u, t[36] = w, t[37] = T, t[38] = E, t[39] = D, t[40] = O, t[41] = ne, t[42] = p, t[43] = re) : re = t[43];
    let ie;
    return t[44] !== C || t[45] !== re || t[46] !== f ? (ie = (0, z.jsx)(h, {
        label: C,
        className: f,
        children: re
    }), t[44] = C, t[45] = re, t[46] = f, t[47] = ie) : ie = t[47], ie
}

function L(e) {
    "use forget";
    let t = (0, De.c)(9),
        {
            closeButton: n,
            preparePresentation: r,
            presentationViewTransition: i,
            showModeToggle: a
        } = e,
        o = a === void 0 || a,
        s;
    t[0] !== r || t[1] !== i || t[2] !== o ? (s = o ? (0, z.jsx)(Te, {
        preparePresentation: r,
        presentationViewTransition: i
    }) : null, t[0] = r, t[1] = i, t[2] = o, t[3] = s) : s = t[3];
    let c;
    t[4] === n ? c = t[5] : (c = n ?? (0, z.jsx)(we, {}), t[4] = n, t[5] = c);
    let l;
    return t[6] !== s || t[7] !== c ? (l = (0, z.jsxs)(z.Fragment, {
        children: [s, c]
    }), t[6] = s, t[7] = c, t[8] = l) : l = t[8], l
}

function Ee(e) {
    "use forget";
    let {
        children: t
    } = e, n = (0, R.use)(Ne);
    if (n == null) throw Error(`SidePaneShell compound components require SidePaneShell.Content`);
    let {
        isPresentationTransitioning: r,
        presentation: i
    } = n;
    return i === `fullscreen` && !r ? t : null
}
var De, R, Oe, z, ke, Ae, je, Me, Ne, Pe, B, V, H = e((() => {
    De = D(), b(), se(), j(), _(), x(), ie(), y(), ae(), c(), o(), m(), r(), R = t(E()), Oe = t(C()), T(), M(), k(), he(), ve(), z = S(), ke = {
        type: `tween`,
        duration: .3,
        ease: [0, 0, .2, 1]
    }, Ae = {
        type: `tween`,
        duration: .16,
        ease: [.16, 1, .3, 1]
    }, je = `side-pane-shell-presentation-expanding`, Me = `side-pane-shell-presentation-collapsing`, Ne = (0, R.createContext)(null), Pe = () => {
        "use forget";
        return (0, R.use)(Ne)?.presentation ?? null
    }, B = () => {
        "use forget";
        let e = (0, De.c)(5),
            t = (0, R.use)(Ne),
            n = t?.isPresentationTransitioning ?? !1,
            r = t?.presentation ?? null,
            i = t?.targetPresentation ?? null,
            a = t?.isPresentationTransitioning === !0 && t.presentationTransitionUsesViewTransition,
            o;
        return e[0] !== n || e[1] !== r || e[2] !== i || e[3] !== a ? (o = {
            isTransitioning: n,
            presentation: r,
            targetPresentation: i,
            usesViewTransition: a
        }, e[0] = n, e[1] = r, e[2] = i, e[3] = a, e[4] = o) : o = e[4], o
    }, V = {
        Body: Ce,
        CloseButton: we,
        Content: F,
        FullscreenOnly: Ee,
        Header: I,
        HeaderActions: L,
        ModeToggleButton: Te
    }
}));
export {
    B as i, H as n, Pe as r, V as t
};
//# sourceMappingURL=cc79834b-bcc825v20lapjjv3.js.map