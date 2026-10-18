import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $tt as n,
    At as r,
    B6 as i,
    Ib as a,
    Jt as o,
    K8 as s,
    My as c,
    Pb as l,
    W6 as u,
    _y as d,
    b5 as f,
    cn as p,
    ent as m,
    i5 as h,
    jy as g,
    lw as ee,
    uw as te,
    vN as _,
    vy as ne,
    y5 as v,
    yN as y
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as b,
    Kt as x,
    Ln as S,
    Rn as C,
    Vn as w,
    wn as T,
    zn as re
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    BGn as E,
    Flt as D,
    Ilt as O,
    LGn as k,
    Llt as ie,
    Nlt as ae,
    Rlt as oe
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    a_ as se,
    i_ as ce,
    n_ as A,
    r_ as j
} from "./30901919-e33mbl5u1y88w5wu.js";
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
        l = re(),
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
    let ee;
    t[6] !== a || t[7] !== c ? (ee = e => {
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
    }, t[6] = a, t[7] = c, t[8] = ee) : ee = t[8];
    let te = ee,
        _;
    t[9] !== n || t[10] !== r || t[11] !== i || t[12] !== s ? (_ = e => {
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
    }, t[9] = n, t[10] = r, t[11] = i, t[12] = s, t[13] = _) : _ = t[13];
    let ne = _,
        v;
    t[14] !== m || t[15] !== o ? (v = e => {
        let t = u.current;
        t?.pointerId === e.pointerId && (o?.(t.width), m())
    }, t[14] = m, t[15] = o, t[16] = v) : v = t[16];
    let y = v,
        b = Math.max(i, n - r),
        x;
    t[17] !== n || t[18] !== b || t[19] !== r || t[20] !== i || t[21] !== s || t[22] !== o || t[23] !== c ? (x = e => {
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
                l = b;
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
    }, t[17] = n, t[18] = b, t[19] = r, t[20] = i, t[21] = s, t[22] = o, t[23] = c, t[24] = x) : x = t[24];
    let S = x,
        C;
    t[25] === l ? C = t[26] : (C = l.formatMessage(me.resizeHandle), t[25] = l, t[26] = C);
    let w;
    t[27] === c ? w = t[28] : (w = Math.round(c), t[27] = c, t[28] = w);
    let T;
    t[29] === Symbol.for(`react.memo_cache_sentinel`) ? (T = (0, N.jsx)(`div`, {
        className: `bg-token-border-light absolute inset-y-0 start-0 w-px opacity-0 transition-opacity group-hover/resize-handle:opacity-100 group-focus-visible/resize-handle:opacity-100`
    }), t[29] = T) : T = t[29];
    let E;
    return t[30] !== y || t[31] !== S || t[32] !== te || t[33] !== ne || t[34] !== b || t[35] !== i || t[36] !== w || t[37] !== C ? (E = (0, N.jsx)(`div`, {
        "aria-label": C,
        "aria-orientation": `vertical`,
        "aria-valuemax": b,
        "aria-valuemin": i,
        "aria-valuenow": w,
        className: `group/resize-handle absolute inset-y-0 start-0 z-10 w-3 cursor-ew-resize touch-none outline-none`,
        "data-side-pane-shell-resize-handle": !0,
        role: `separator`,
        tabIndex: 0,
        onLostPointerCapture: y,
        onKeyDown: S,
        onPointerCancel: y,
        onPointerDown: te,
        onPointerMove: ne,
        onPointerUp: y,
        children: T
    }), t[30] = y, t[31] = S, t[32] = te, t[33] = ne, t[34] = b, t[35] = i, t[36] = w, t[37] = C, t[38] = E) : E = t[38], E
}
var fe, pe, N, me, he = e((() => {
    fe = T(), pe = t(w()), C(), M(), N = b(), me = S({
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
    t != null && s(() => ve()) !== t && ve.set(t)
}
var ve, ye = e((() => {
    i(), m(), ve = u(n.SidePaneShellWidth, () => null, {
        coerceStoredValue: ge
    })
}));

function be(e) {
    let t = e.createElement(`div`);
    return t.className = `contents`, t.setAttribute(`data-side-pane-shell-content-mount`, ``), t
}

function P(e) {
    "use forget";
    let t = (0, Oe.c)(237),
        {
            accessibleTitle: n,
            animateInitialFullscreenEntrance: r,
            animateToPresentation: i,
            animateToPresentationDuration: a,
            animateToPresentationEase: s,
            children: c,
            className: u,
            contentParkingContainer: d,
            defaultSidePaneWidth: f,
            focusOnClose: m,
            focusOnOpen: g,
            initialPresentation: ee,
            minimumMainWidth: te,
            minimumSidePaneWidth: _,
            onSidePaneWidthCommit: b,
            onEscapeKeyDown: x,
            onOpenChange: S,
            open: C,
            overlayMainDuringFullscreenTransition: w,
            ownerKind: T,
            paneId: re,
            persistSidePaneWidth: D,
            preserveSidebar: O,
            preferredSidePaneWidth: k
        } = e,
        se = r !== void 0 && r,
        ce = ee === void 0 ? `side-pane` : ee,
        A = te === void 0 ? 400 : te,
        j = _ === void 0 ? 400 : _,
        M = w !== void 0 && w,
        fe = D === void 0 || D,
        pe = O !== void 0 && O,
        N = E(),
        me;
    t[0] === N ? me = t[1] : (me = () => N?.activeOwnerId$() ?? null, t[0] = N, t[1] = me);
    let he = h(me),
        ge;
    t[2] === N ? ge = t[3] : (ge = () => N?.connection$() ?? null, t[2] = N, t[3] = ge);
    let ve = h(ge),
        ye = N?.claim,
        P = ne(),
        F = o(),
        we = h(Ce),
        Te = (0, L.useRef)(i),
        Ee = (0, L.useRef)(ce),
        [I, De] = (0, L.useState)(i == null ? ce : `side-pane`),
        Fe = (0, L.useRef)(I),
        [z, B] = (0, L.useState)(i == null ? ce : `side-pane`),
        [V, Ie] = (0, L.useState)(null),
        [Le, Re] = (0, L.useState)(!1),
        [ze, Be] = (0, L.useState)(null),
        [Ve, He] = (0, L.useState)(!1),
        [H, Ue] = (0, L.useState)(null),
        We = (0, L.useId)(),
        Ge = re ?? `side-pane-shell:${We}`,
        U = (0, L.useRef)(0),
        Ke = (0, L.useRef)(null),
        W = (0, L.useRef)(null),
        G = (0, L.useRef)(null),
        qe = (0, L.useRef)(null),
        Je = (0, L.useRef)(`dismissed`),
        Ye = (0, L.useRef)(S),
        Xe = (0, L.useRef)(g),
        Ze = (0, L.useRef)(m),
        Qe = (0, L.useRef)(k),
        $e = (0, L.useRef)(k),
        et = (0, L.useRef)(!1),
        tt = (0, L.useRef)(null),
        nt = (0, L.useRef)(null),
        rt = (0, L.useRef)(null),
        [K, it] = (0, L.useState)(null),
        at = (0, L.useRef)(null),
        ot = (0, L.useRef)(null),
        [st, ct] = (0, L.useState)(null),
        q = ve?.availableWidth ?? 0,
        lt = ve?.id,
        J = ve?.overlayContainer,
        Y = ve?.railElement,
        ut = d != null,
        dt;
    t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (dt = e => {
        let t = Xe.current;
        e == null || t == null || (t(), e.contains(e.ownerDocument.activeElement) || e.focus(), e.ownerDocument.defaultView?.requestAnimationFrame(() => {
            e.isConnected && (Xe.current?.(), e.contains(e.ownerDocument.activeElement) || e.focus())
        }))
    }, t[4] = dt) : dt = t[4];
    let ft = dt,
        pt, mt;
    t[5] !== m || t[6] !== g || t[7] !== S || t[8] !== k ? (pt = () => {
        Ye.current = S, Xe.current = g, Ze.current = m, Qe.current = k
    }, mt = [m, g, S, k], t[5] = m, t[6] = g, t[7] = S, t[8] = k, t[9] = pt, t[10] = mt) : (pt = t[9], mt = t[10]), y(pt, mt);
    let ht, gt;
    t[11] === d ? (ht = t[12], gt = t[13]) : (ht = () => {
        ot.current = d ?? null
    }, gt = [d], t[11] = d, t[12] = ht, t[13] = gt), y(ht, gt);
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
                t = e?.ownerDocument === Y.ownerDocument ? e : be(Y.ownerDocument);
            t !== e && (e?.remove(), at.current = t), it(t);
            return
        }
        if (Y == null) {
            it(null);
            return
        }
        let e = be(Y.ownerDocument);
        return it(e), () => e.remove()
    }, bt = [ut, Y], t[15] = ut, t[16] = Y, t[17] = yt, t[18] = bt) : (yt = t[17], bt = t[18]), y(yt, bt);
    let xt, St;
    t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (xt = () => () => {
        at.current?.remove(), at.current = null
    }, St = [], t[19] = xt, t[20] = St) : (xt = t[19], St = t[20]), (0, L.useEffect)(xt, St);
    let Ct, wt;
    t[21] === I ? (Ct = t[22], wt = t[23]) : (Ct = () => {
        Fe.current = I
    }, wt = [I], t[21] = I, t[22] = Ct, t[23] = wt), y(Ct, wt);
    let Tt, Et;
    t[24] !== ye || t[25] !== lt || t[26] !== C || t[27] !== T || t[28] !== pe || t[29] !== Ge ? (Tt = () => {
        if (!C || ye == null || lt == null) return;
        let e = ye(lt, Ge, () => {
            Je.current = `replaced`, queueMicrotask(() => {
                Ye.current(!1, {
                    reason: `replaced`
                })
            })
        }, Fe.current, T, vt, pe);
        if (e != null) return e.continuesActivePane && Qe.current != null ? Be(Qe.current) : e.initialSidePaneWidth != null && Be(e.initialSidePaneWidth), U.current += 1, W.current = null, G.current?.skipTransition(), Ke.current = null, Ie(null), De(e.initialRequestedPresentation), B(e.initialRequestedPresentation), Ue(e), () => {
            e.detach(), Ue(t => t?.id === e.id ? null : t)
        }
    }, Et = [ye, lt, C, T, vt, pe, Ge], t[24] = ye, t[25] = lt, t[26] = C, t[27] = T, t[28] = pe, t[29] = Ge, t[30] = Tt, t[31] = Et) : (Tt = t[30], Et = t[31]), y(Tt, Et);
    let Dt, Ot;
    t[32] !== H || t[33] !== k ? (Dt = () => {
        let e = $e.current;
        $e.current = k, H != null && k != null && k !== e && Be(k)
    }, Ot = [H, k], t[32] = H, t[33] = k, t[34] = Dt, t[35] = Ot) : (Dt = t[34], Ot = t[35]), y(Dt, Ot);
    let kt, At;
    t[36] !== C || t[37] !== H ? (kt = () => {
        !C && H != null && (H.close(), Ue(null))
    }, At = [C, H], t[36] = C, t[37] = H, t[38] = kt, t[39] = At) : (kt = t[38], At = t[39]), y(kt, At);
    let jt, Mt;
    t[40] === C ? (jt = t[41], Mt = t[42]) : (jt = () => {
        C || (U.current += 1, W.current = null, G.current?.skipTransition(), De(Te.current == null ? Ee.current : `side-pane`), Be(null))
    }, Mt = [C], t[40] = C, t[41] = jt, t[42] = Mt), (0, L.useEffect)(jt, Mt);
    let Nt, Pt;
    t[43] === Symbol.for(`react.memo_cache_sentinel`) ? (Nt = () => () => {
        U.current += 1, W.current = null, G.current?.skipTransition()
    }, Pt = [], t[43] = Nt, t[44] = Pt) : (Nt = t[43], Pt = t[44]), (0, L.useEffect)(Nt, Pt);
    let Ft = H?.id === he,
        It;
    t[45] !== q || t[46] !== A || t[47] !== j ? (It = le({
        availableWidth: q,
        minimumMainWidth: A,
        minimumSidePaneWidth: j
    }), t[45] = q, t[46] = A, t[47] = j, t[48] = It) : It = t[48];
    let Lt = It,
        X = I === `fullscreen` || !Lt ? `fullscreen` : `side-pane`,
        Rt = ze ?? (fe && b == null ? we ?? f : f) ?? q * .5,
        zt;
    t[49] !== q || t[50] !== A || t[51] !== j || t[52] !== Rt ? (zt = ue({
        availableWidth: q,
        minimumMainWidth: A,
        minimumSidePaneWidth: j,
        width: Rt
    }), t[49] = q, t[50] = A, t[51] = j, t[52] = Rt, t[53] = zt) : zt = t[53];
    let Z = zt,
        Q = C && Ft && ve != null && q > 0,
        Bt = Q && z === `fullscreen`,
        Vt, Ht;
    t[54] !== Q || t[55] !== F || t[56] !== X || t[57] !== V || t[58] !== z ? (Vt = () => {
        if (!Q || F) {
            Ke.current = null, W.current = null, Ie(null), B(X);
            return
        }
        if (V != null && V.target !== X) {
            Ke.current = null, W.current = null, Ie(null), B(X);
            return
        }
        V == null && z !== X && B(X)
    }, Ht = [Q, F, X, V, z], t[54] = Q, t[55] = F, t[56] = X, t[57] = V, t[58] = z, t[59] = Vt, t[60] = Ht) : (Vt = t[59], Ht = t[60]), y(Vt, Ht);
    let Ut, Wt;
    t[61] !== Q || t[62] !== H || t[63] !== z ? (Ut = () => {
        !Q || H == null || tt.current?.ownerSessionId === H.id && tt.current.presentation === z || (ft(z === `side-pane` ? nt.current : rt.current), tt.current = {
            ownerSessionId: H.id,
            presentation: z
        })
    }, Wt = [ft, Q, H, z], t[61] = Q, t[62] = H, t[63] = z, t[64] = Ut, t[65] = Wt) : (Ut = t[64], Wt = t[65]), y(Ut, Wt);
    let Gt;
    t[66] === Q ? Gt = t[67] : (Gt = () => {
        !Q && et.current && (Je.current !== `replaced` && Ze.current?.(), Je.current = `dismissed`, tt.current = null), et.current = Q
    }, t[66] = Q, t[67] = Gt);
    let Kt;
    t[68] !== Q || t[69] !== z ? (Kt = [Q, z], t[68] = Q, t[69] = z, t[70] = Kt) : Kt = t[70], y(Gt, Kt);
    let qt, Jt;
    t[71] !== Z || t[72] !== Le || t[73] !== Ve || t[74] !== Q || t[75] !== M || t[76] !== H || t[77] !== X || t[78] !== V || t[79] !== I ? (qt = () => {
        if (H == null) return;
        let e = M && V?.target === `fullscreen`;
        H.updateState({
            railLayout: {
                animateWidth: !Ve && V == null && !Le,
                width: Q && !e && (X === `side-pane` || V != null) ? V?.sidePaneWidth ?? Z : 0
            },
            requestedPresentation: I
        })
    }, Jt = [Z, Ve, Q, Le, H, M, X, V, I], t[71] = Z, t[72] = Le, t[73] = Ve, t[74] = Q, t[75] = M, t[76] = H, t[77] = X, t[78] = V, t[79] = I, t[80] = qt, t[81] = Jt) : (qt = t[80], Jt = t[81]), y(qt, Jt);
    let Yt;
    t[82] === Symbol.for(`react.memo_cache_sentinel`) ? (Yt = () => {
        Je.current = `dismissed`, Ye.current(!1, {
            reason: `dismissed`
        })
    }, t[82] = Yt) : Yt = t[82];
    let Xt = Yt,
        Zt;
    t[83] !== x || t[84] !== z ? (Zt = e => {
        if (z !== `side-pane` || e.key !== `Escape`) return;
        let t = e.nativeEvent;
        queueMicrotask(() => {
            t.defaultPrevented || (x?.(t), t.defaultPrevented || Xt())
        })
    }, t[83] = x, t[84] = z, t[85] = Zt) : Zt = t[85];
    let Qt = Zt,
        $t;
    t[86] === Symbol.for(`react.memo_cache_sentinel`) ? ($t = e => {
        He(e)
    }, t[86] = $t) : $t = t[86];
    let en = $t,
        tn;
    t[87] !== q || t[88] !== Z || t[89] !== Q || t[90] !== A || t[91] !== j || t[92] !== M || t[93] !== H || t[94] !== F ? (tn = (e, t, n, r, i, a) => {
        if (U.current !== t) return;
        let o = e === `side-pane` && Qe.current != null ? ue({
            availableWidth: q,
            minimumMainWidth: A,
            minimumSidePaneWidth: j,
            width: Qe.current
        }) : Z;
        if (e === `side-pane` && Qe.current != null && Be(o), !F && H != null) {
            let t = M && e === `fullscreen`;
            H.updateState({
                railLayout: {
                    animateWidth: !1,
                    width: Q && !t && (r || e === `side-pane`) ? o : 0
                },
                requestedPresentation: e
            })
        }
        if (De(e), F || !r) {
            Ke.current = null, W.current = null, Ie(null), B(e);
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
        Ke.current = c, Re(!0), Ie(c), e === `fullscreen` && B(`fullscreen`)
    }, t[87] = q, t[88] = Z, t[89] = Q, t[90] = A, t[91] = j, t[92] = M, t[93] = H, t[94] = F, t[95] = tn) : tn = t[95];
    let nn = tn,
        rn;
    t[96] !== nn || t[97] !== F || t[98] !== X || t[99] !== I || t[100] !== z ? (rn = (e, t, n, r, i) => {
        let a = n === void 0 || n,
            o = r === void 0 ? Ae.duration : r,
            s = i === void 0 ? Ae.ease : i;
        if ((W.current ?? I) === e) return;
        let c = U.current + 1;
        U.current = c, W.current = e, (async () => {
            let n = t,
                r = a && n != null && !F && typeof document < `u` && document.visibilityState !== `hidden` && `startViewTransition` in document;
            if (r && n?.prepare != null && (r = await n.prepare().catch(Se)), U.current !== c) return;
            let i = G.current;
            if (i != null && (i.skipTransition(), await oe(i), G.current === i && (G.current = null)), U.current !== c) return;
            if (e === X && e === z) {
                De(e), W.current = null;
                return
            }
            if (!r || n == null) {
                nn(e, c, !1, a, o, s);
                return
            }
            let l = ie({
                forceFlushSync: !0,
                className: [n.className, e === `fullscreen` ? Me : Ne],
                update: () => {
                    nn(e, c, !0, a, o, s)
                }
            });
            G.current = l, oe(l).then(() => {
                G.current === l && (G.current = null)
            })
        })()
    }, t[96] = nn, t[97] = F, t[98] = X, t[99] = I, t[100] = z, t[101] = rn) : rn = t[101];
    let an = rn,
        on;
    t[102] !== an || t[103] !== I ? (on = (e, t) => {
        let n = t === void 0 || t,
            r = W.current ?? I;
        an(r === `side-pane` ? `fullscreen` : `side-pane`, e, n)
    }, t[102] = an, t[103] = I, t[104] = on) : on = t[104];
    let sn = on,
        cn;
    t[105] !== i || t[106] !== a || t[107] !== s || t[108] !== K || t[109] !== Q || t[110] !== M || t[111] !== H || t[112] !== Y?.ownerDocument || t[113] !== an ? (cn = () => {
        if (i == null || !Q || H == null || K == null || qe.current?.ownerSessionId === H.id && qe.current.presentation === i) return;
        let e = Y?.ownerDocument.defaultView;
        if (e == null) return;
        let t = () => {
            qe.current = {
                ownerSessionId: H.id,
                presentation: i
            }, an(i, void 0, !0, a, s)
        };
        if (M && i === `fullscreen`) {
            t();
            return
        }
        let n = e.requestAnimationFrame(t);
        return () => e.cancelAnimationFrame(n)
    }, t[105] = i, t[106] = a, t[107] = s, t[108] = K, t[109] = Q, t[110] = M, t[111] = H, t[112] = Y?.ownerDocument, t[113] = an, t[114] = cn) : cn = t[114];
    let ln;
    t[115] !== i || t[116] !== a || t[117] !== s || t[118] !== K || t[119] !== Q || t[120] !== M || t[121] !== H || t[122] !== Y || t[123] !== an ? (ln = [i, a, s, K, Q, M, H, Y, an], t[115] = i, t[116] = a, t[117] = s, t[118] = K, t[119] = Q, t[120] = M, t[121] = H, t[122] = Y, t[123] = an, t[124] = ln) : ln = t[124], y(cn, ln);
    let un;
    t[125] === Symbol.for(`react.memo_cache_sentinel`) ? (un = e => {
        let t = Ke.current;
        if (t == null || t.generation !== e) return;
        B(t.target), Ke.current = null, W.current = null, Ie(null);
        let n = rt.current?.ownerDocument.defaultView;
        if (n == null) {
            Re(!1);
            return
        }
        n.requestAnimationFrame(() => {
            n.requestAnimationFrame(() => {
                U.current === e && Ke.current == null && Re(!1)
            })
        })
    }, t[125] = un) : un = t[125];
    let dn = un,
        fn;
    t[126] !== K || t[127] !== d || t[128] !== J ? (fn = e => {
        if (K == null || e == null) return;
        let t = `moveBefore` in Element.prototype;
        return K.parentElement !== e && t && e.isConnected && K.isConnected ? e.moveBefore(K, null) : K.parentElement !== e && e.append(K), () => {
            let n = d ?? J;
            K.parentElement !== e || !t || n == null || !n.isConnected || !K.isConnected || n.moveBefore(K, null)
        }
    }, t[126] = K, t[127] = d, t[128] = J, t[129] = fn) : fn = t[129];
    let pn = fn;
    if (ye == null) return null;
    let mn = V != null,
        hn = V?.usesViewTransition === !0,
        gn;
    t[130] !== Lt || t[131] !== X || t[132] !== z || t[133] !== mn || t[134] !== hn || t[135] !== sn ? (gn = {
        canUseSidePane: Lt,
        isPresentationTransitioning: mn,
        presentation: z,
        presentationTransitionUsesViewTransition: hn,
        requestClose: Xt,
        targetPresentation: X,
        togglePresentation: sn
    }, t[130] = Lt, t[131] = X, t[132] = z, t[133] = mn, t[134] = hn, t[135] = sn, t[136] = gn) : gn = t[136];
    let _n = gn,
        vn;
    t[137] !== c || t[138] !== K || t[139] !== _n || t[140] !== st || t[141] !== Qt || t[142] !== Q || t[143] !== C || t[144] !== ut || t[145] !== Y?.ownerDocument || t[146] !== z ? (vn = K != null && (Q || ut && C) ? (0, ke.createPortal)((0, R.jsx)(l, {
        value: () => z === `fullscreen` ? st : Y?.ownerDocument.body ?? null,
        children: (0, R.jsx)(`div`, {
            className: `contents`,
            role: `presentation`,
            onKeyDown: Qt,
            children: (0, R.jsx)(Pe, {
                value: _n,
                children: c
            })
        })
    }), K, `side-pane-shell-content`) : null, t[137] = c, t[138] = K, t[139] = _n, t[140] = st, t[141] = Qt, t[142] = Q, t[143] = C, t[144] = ut, t[145] = Y?.ownerDocument, t[146] = z, t[147] = vn) : vn = t[147];
    let yn = vn,
        bn = V?.target === `side-pane` ? `collapsing` : V?.target === `fullscreen` ? `expanding` : void 0,
        xn;
    t[148] !== bn || t[149] !== Bt || t[150] !== J ? (xn = Bt && J != null ? (0, ke.createPortal)((0, R.jsx)(`div`, {
        className: `pointer-events-none fixed inset-0 z-[121]`,
        "data-side-pane-shell-fullscreen-portal-layer": !0,
        "data-side-pane-shell-transition": bn,
        children: (0, R.jsx)(`div`, {
            ref: ct,
            className: `pointer-events-auto contents`
        })
    }), J, `side-pane-shell-fullscreen-portal`) : null, t[148] = bn, t[149] = Bt, t[150] = J, t[151] = xn) : xn = t[151];
    let Sn = xn,
        Cn;
    t[152] !== n || t[153] !== We || t[154] !== pn || t[155] !== q || t[156] !== Z || t[157] !== u || t[158] !== Qt || t[159] !== Q || t[160] !== A || t[161] !== j || t[162] !== b || t[163] !== fe || t[164] !== Y || t[165] !== z ? (Cn = Q && z === `side-pane` && Y != null ? (0, ke.createPortal)((0, R.jsxs)(`aside`, {
        ref: nt,
        "aria-label": typeof n == `string` ? n : void 0,
        "aria-labelledby": typeof n == `string` ? void 0 : We,
        className: v(`bg-token-bg-primary relative flex h-full w-full min-w-0 flex-col overflow-hidden rounded-s-3xl border-s border-token-border-light outline-none`, u),
        "data-side-pane-shell-content": !0,
        "data-side-pane-shell-presentation": `side-pane`,
        onKeyDown: Qt,
        tabIndex: -1,
        children: [typeof n == `string` ? null : (0, R.jsx)(`h2`, {
            id: We,
            className: `sr-only`,
            children: n
        }), (0, R.jsx)(de, {
            availableWidth: q,
            minimumMainWidth: A,
            minimumSidePaneWidth: j,
            onResizeChange: en,
            onWidthCommit: b ?? (fe ? _e : void 0),
            onWidthChange: Be,
            width: Z
        }), (0, R.jsx)(`div`, {
            ref: pn,
            className: `contents`
        })]
    }), Y) : null, t[152] = n, t[153] = We, t[154] = pn, t[155] = q, t[156] = Z, t[157] = u, t[158] = Qt, t[159] = Q, t[160] = A, t[161] = j, t[162] = b, t[163] = fe, t[164] = Y, t[165] = z, t[166] = Cn) : Cn = t[166];
    let wn = Cn,
        Tn = P === `rtl` ? `0 24px 24px 0` : `24px 0 0 24px`,
        En = V?.sidePaneWidth ?? Z,
        Dn = Math.max(0, q - En),
        $ = P === `rtl` ? -Dn : Dn,
        On = V?.target ?? `fullscreen`,
        kn;
    t[167] !== P || t[168] !== $ || t[169] !== On || t[170] !== Tn ? (kn = On === `side-pane` ? {
        borderLeftWidth: +(P === `ltr`),
        borderRadius: Tn,
        borderRightWidth: +(P === `rtl`),
        x: $
    } : {
        borderLeftWidth: 0,
        borderRadius: `0px`,
        borderRightWidth: 0,
        x: 0
    }, t[167] = P, t[168] = $, t[169] = On, t[170] = Tn, t[171] = kn) : kn = t[171];
    let An = kn,
        jn = se && F !== !0 && V == null && z === `fullscreen`,
        Mn;
    t[172] !== P || t[173] !== $ || t[174] !== V?.target || t[175] !== jn || t[176] !== Tn ? (Mn = V?.target === `fullscreen` ? {
        borderLeftWidth: +(P === `ltr`),
        borderRadius: Tn,
        borderRightWidth: +(P === `rtl`),
        x: $
    } : jn ? {
        borderRadius: `16px`,
        opacity: .45,
        scale: .965,
        y: 6
    } : !1, t[172] = P, t[173] = $, t[174] = V?.target, t[175] = jn, t[176] = Tn, t[177] = Mn) : Mn = t[177];
    let Nn = Mn,
        Pn;
    t[178] !== $ || t[179] !== On ? (Pn = On === `side-pane` ? {
        x: -$ / 2
    } : {
        x: 0
    }, t[178] = $, t[179] = On, t[180] = Pn) : Pn = t[180];
    let Fn = Pn,
        In;
    t[181] !== $ || t[182] !== V?.target ? (In = V?.target === `fullscreen` && {
        x: -$ / 2
    }, t[181] = $, t[182] = V?.target, t[183] = In) : In = t[183];
    let Ln = In,
        Rn = On === `side-pane` ? En : q,
        zn;
    t[184] === Symbol.for(`react.memo_cache_sentinel`) ? (zn = e => {
        e || Xt()
    }, t[184] = zn) : zn = t[184];
    let Bn;
    t[185] === H ? Bn = t[186] : (Bn = e => {
        Xe.current != null && (e.preventDefault(), ft(rt.current)), H != null && (tt.current = {
            ownerSessionId: H.id,
            presentation: `fullscreen`
        })
    }, t[185] = H, t[186] = Bn);
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
    t[192] !== V || t[193] !== jn ? (Un = V == null ? jn ? je : {
        duration: 0
    } : {
        ...Ae,
        duration: V.duration,
        ease: V.ease
    }, t[192] = V, t[193] = jn, t[194] = Un) : Un = t[194];
    let Wn;
    t[195] === u ? Wn = t[196] : (Wn = v(`bg-token-bg-primary absolute inset-y-0 end-0 z-[120] flex min-h-0 flex-col overflow-hidden border-solid border-token-border-light outline-none`, u), t[195] = u, t[196] = Wn);
    let Gn;
    t[197] === V ? Gn = t[198] : (Gn = () => {
        V != null && dn(V.generation)
    }, t[197] = V, t[198] = Gn);
    let Kn;
    t[199] === q ? Kn = t[200] : (Kn = {
        insetInlineStart: `auto`,
        width: q
    }, t[199] = q, t[200] = Kn);
    let qn;
    t[201] === V ? qn = t[202] : (qn = V == null ? {
        duration: 0
    } : {
        ...Ae,
        duration: V.duration,
        ease: V.ease
    }, t[201] = V, t[202] = qn);
    let Jn = On === `side-pane` && `border-s border-transparent`,
        Yn;
    t[203] === Jn ? Yn = t[204] : (Yn = v(`mx-auto flex h-full min-h-0 shrink-0 flex-col`, Jn), t[203] = Jn, t[204] = Yn);
    let Xn;
    t[205] === Rn ? Xn = t[206] : (Xn = {
        width: Rn
    }, t[205] = Rn, t[206] = Xn);
    let Zn;
    t[207] === pn ? Zn = t[208] : (Zn = (0, R.jsx)(`div`, {
        ref: pn,
        className: `contents`
    }), t[207] = pn, t[208] = Zn);
    let Qn;
    t[209] !== Fn || t[210] !== Ln || t[211] !== qn || t[212] !== Yn || t[213] !== Xn || t[214] !== Zn ? (Qn = (0, R.jsx)(p.div, {
        initial: Ln,
        animate: Fn,
        transition: qn,
        className: Yn,
        style: Xn,
        children: Zn
    }), t[209] = Fn, t[210] = Ln, t[211] = qn, t[212] = Yn, t[213] = Xn, t[214] = Zn, t[215] = Qn) : Qn = t[215];
    let $n;
    t[216] !== Nn || t[217] !== bn || t[218] !== Hn || t[219] !== Un || t[220] !== Wn || t[221] !== Gn || t[222] !== Kn || t[223] !== Qn ? ($n = (0, R.jsx)(p.div, {
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
    t[225] !== n || t[226] !== Bt || t[227] !== x || t[228] !== J || t[229] !== Bn || t[230] !== $n ? (er = (0, R.jsx)(ae, {
        asChild: !0,
        accessibleTitle: n,
        open: Bt,
        preserveSidebar: !0,
        onOpenChange: zn,
        onCloseAutoFocus: xe,
        onEscapeKeyDown: x,
        onOpenAutoFocus: Bn,
        portalContainer: J,
        children: $n
    }), t[225] = n, t[226] = Bt, t[227] = x, t[228] = J, t[229] = Bn, t[230] = $n, t[231] = er) : er = t[231];
    let tr;
    return t[232] !== yn || t[233] !== Sn || t[234] !== wn || t[235] !== er ? (tr = (0, R.jsxs)(R.Fragment, {
        children: [yn, Sn, wn, er]
    }), t[232] = yn, t[233] = Sn, t[234] = wn, t[235] = er, t[236] = tr) : tr = t[236], tr
}

function xe(e) {
    return e.preventDefault()
}

function Se() {
    return !1
}

function Ce() {
    return ve()
}

function F(e) {
    "use forget";
    let t = (0, Oe.c)(16),
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
    t[6] === r ? c = t[7] : (c = v(`flex h-14 shrink-0 items-center gap-2 border-b border-token-border-light px-4`, r), t[6] = r, t[7] = c);
    let l;
    t[8] !== i || t[9] !== s ? (l = (0, R.jsx)(`div`, {
        className: `ms-auto flex items-center gap-2`,
        children: (0, R.jsx)(I, {
            closeButton: i,
            showModeToggle: s
        })
    }), t[8] = i, t[9] = s, t[10] = l) : l = t[10];
    let u;
    return t[11] !== n || t[12] !== a || t[13] !== c || t[14] !== l ? (u = (0, R.jsxs)(`header`, {
        className: c,
        ...a,
        children: [n, l]
    }), t[11] = n, t[12] = a, t[13] = c, t[14] = l, t[15] = u) : u = t[15], u
}

function we(e) {
    "use forget";
    let t = (0, Oe.c)(8),
        n, r;
    t[0] === e ? (n = t[1], r = t[2]) : ({
        className: n,
        ...r
    } = e, t[0] = e, t[1] = n, t[2] = r);
    let i;
    t[3] === n ? i = t[4] : (i = v(`min-h-0 min-w-0 flex-1 overflow-auto`, n), t[3] = n, t[4] = i);
    let a;
    return t[5] !== r || t[6] !== i ? (a = (0, R.jsx)(`div`, {
        className: i,
        ...r
    }), t[5] = r, t[6] = i, t[7] = a) : a = t[7], a
}

function Te(e) {
    "use forget";
    let t = (0, Oe.c)(19),
        n, r, i, a;
    t[0] === e ? (n = t[1], r = t[2], i = t[3], a = t[4]) : ({
        "aria-label": n,
        className: r,
        onClick: i,
        ...a
    } = e, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a);
    let o = re(),
        s = (0, L.use)(Pe);
    if (s == null) throw Error(`SidePaneShell compound components require SidePaneShell.Content`);
    let {
        requestClose: c
    } = s, l;
    t[5] !== n || t[6] !== o ? (l = n ?? o.formatMessage({
        id: `side_pane_shell.close`,
        defaultMessage: `Close`
    }), t[5] = n, t[6] = o, t[7] = l) : l = t[7];
    let u = l,
        d;
    t[8] === r ? d = t[9] : (d = v(`hover:bg-token-bg-tertiary flex size-9 items-center justify-center rounded-full`, r), t[8] = r, t[9] = d);
    let f;
    t[10] !== i || t[11] !== c ? (f = e => {
        i?.(e), e.defaultPrevented || c()
    }, t[10] = i, t[11] = c, t[12] = f) : f = t[12];
    let p;
    t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (p = (0, R.jsx)(ee, {
        className: `icon`
    }), t[13] = p) : p = t[13];
    let m;
    return t[14] !== u || t[15] !== a || t[16] !== d || t[17] !== f ? (m = (0, R.jsx)(`button`, {
        type: `button`,
        "aria-label": u,
        className: d,
        onClick: f,
        ...a,
        children: p
    }), t[14] = u, t[15] = a, t[16] = d, t[17] = f, t[18] = m) : m = t[18], m
}

function Ee(e) {
    "use forget";
    let t = (0, Oe.c)(48),
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
        m = re(),
        h = (0, L.use)(Pe);
    if (h == null) throw Error(`SidePaneShell compound components require SidePaneShell.Content`);
    let {
        canUseSidePane: ee,
        isPresentationTransitioning: te,
        targetPresentation: _,
        togglePresentation: ne
    } = h;
    if (!ee) return null;
    let y = i || te,
        b;
    t[12] !== n || t[13] !== m || t[14] !== _ ? (b = n ?? (_ === `side-pane` ? m.formatMessage({
        id: `side_pane_shell.open_fullscreen`,
        defaultMessage: `Open fullscreen`
    }) : m.formatMessage({
        id: `side_pane_shell.open_side_pane`,
        defaultMessage: `Open side pane`
    })), t[12] = n, t[13] = m, t[14] = _, t[15] = b) : b = t[15];
    let x = b,
        S = y || void 0,
        C;
    t[16] === r ? C = t[17] : (C = v(`hover:bg-token-bg-tertiary flex size-9 items-center justify-center rounded-full aria-disabled:opacity-50`, r), t[16] = r, t[17] = C);
    let w;
    t[18] !== y || t[19] !== o || t[20] !== c ? (w = e => {
        o?.(e), y || c?.()
    }, t[18] = y, t[19] = o, t[20] = c, t[21] = w) : w = t[21];
    let T;
    t[22] !== y || t[23] !== s || t[24] !== c ? (T = e => {
        s?.(e), y || c?.()
    }, t[22] = y, t[23] = s, t[24] = c, t[25] = T) : T = t[25];
    let E;
    t[26] !== y || t[27] !== a || t[28] !== c || t[29] !== l || t[30] !== ne ? (E = e => {
        if (y) {
            e.preventDefault();
            return
        }
        if (a?.(e), !e.defaultPrevented) {
            if (c == null) {
                ne(l);
                return
            }
            c().then(e => ne(l, e), () => ne(l, !1))
        }
    }, t[26] = y, t[27] = a, t[28] = c, t[29] = l, t[30] = ne, t[31] = E) : E = t[31];
    let D;
    t[32] === _ ? D = t[33] : (D = _ === `side-pane` ? (0, R.jsx)(A, {
        className: `icon-md`
    }) : (0, R.jsx)(ce, {
        className: `icon-md`
    }), t[32] = _, t[33] = D);
    let O;
    t[34] !== x || t[35] !== u || t[36] !== S || t[37] !== C || t[38] !== w || t[39] !== T || t[40] !== E || t[41] !== D || t[42] !== p ? (O = (0, R.jsx)(`button`, {
        ...u,
        type: p,
        "aria-disabled": S,
        "aria-label": x,
        className: C,
        onFocus: w,
        onPointerEnter: T,
        onClick: E,
        children: D
    }), t[34] = x, t[35] = u, t[36] = S, t[37] = C, t[38] = w, t[39] = T, t[40] = E, t[41] = D, t[42] = p, t[43] = O) : O = t[43];
    let k;
    return t[44] !== x || t[45] !== O || t[46] !== f ? (k = (0, R.jsx)(g, {
        label: x,
        className: f,
        children: O
    }), t[44] = x, t[45] = O, t[46] = f, t[47] = k) : k = t[47], k
}

function I(e) {
    "use forget";
    let t = (0, Oe.c)(9),
        {
            closeButton: n,
            preparePresentation: r,
            presentationViewTransition: i,
            showModeToggle: a
        } = e,
        o = a === void 0 || a,
        s;
    t[0] !== r || t[1] !== i || t[2] !== o ? (s = o ? (0, R.jsx)(Ee, {
        preparePresentation: r,
        presentationViewTransition: i
    }) : null, t[0] = r, t[1] = i, t[2] = o, t[3] = s) : s = t[3];
    let c;
    t[4] === n ? c = t[5] : (c = n ?? (0, R.jsx)(Te, {}), t[4] = n, t[5] = c);
    let l;
    return t[6] !== s || t[7] !== c ? (l = (0, R.jsxs)(R.Fragment, {
        children: [s, c]
    }), t[6] = s, t[7] = c, t[8] = l) : l = t[8], l
}

function De(e) {
    "use forget";
    let {
        children: t
    } = e, n = (0, L.use)(Pe);
    if (n == null) throw Error(`SidePaneShell compound components require SidePaneShell.Content`);
    let {
        isPresentationTransitioning: r,
        presentation: i
    } = n;
    return i === `fullscreen` && !r ? t : null
}
var Oe, L, ke, R, Ae, je, Me, Ne, Pe, Fe, z, B, V = e((() => {
    Oe = T(), te(), se(), j(), c(), a(), D(), i(), O(), _(), d(), f(), r(), L = t(w()), ke = t(x()), C(), M(), k(), he(), ye(), R = b(), Ae = {
        type: `tween`,
        duration: .3,
        ease: [0, 0, .2, 1]
    }, je = {
        type: `tween`,
        duration: .16,
        ease: [.16, 1, .3, 1]
    }, Me = `side-pane-shell-presentation-expanding`, Ne = `side-pane-shell-presentation-collapsing`, Pe = (0, L.createContext)(null), Fe = () => {
        "use forget";
        return (0, L.use)(Pe)?.presentation ?? null
    }, z = () => {
        "use forget";
        let e = (0, Oe.c)(5),
            t = (0, L.use)(Pe),
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
    }, B = {
        Body: we,
        CloseButton: Te,
        Content: P,
        FullscreenOnly: De,
        Header: F,
        HeaderActions: I,
        ModeToggleButton: Ee
    }
}));
export {
    z as i, V as n, Fe as r, B as t
};
//# sourceMappingURL=cc79834b-krwvwhgrqdgkdi0d.js.map