import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    BU as n,
    Cw as r,
    F7 as i,
    JT as a,
    Nz as o,
    P1 as s,
    P5 as c,
    Pz as l,
    R1 as u,
    Tw as ee,
    X5 as d,
    Xy as te,
    Y5 as f,
    YT as p,
    Zy as m,
    g8 as h,
    w1 as g,
    z7 as ne,
    zU as re
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Bn as ie,
    Ln as _,
    N as v,
    Nn as y,
    O as b,
    Rn as x,
    Vn as S,
    p as ae,
    s as C,
    wn as w,
    zn as oe
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    A3t as T,
    D3t as E,
    KQ as D,
    RQ as O,
    WQ as k,
    cit as se,
    eit as A,
    iTn as j,
    lKn as M,
    rTn as N,
    uKn as P,
    uit as ce,
    wPn as F,
    xPn as I
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    DC as le,
    EC as ue,
    Ov as de,
    TC as L,
    kv as R,
    wC as z
} from "./30901919-e8h11sw136qen6v0.js";
import {
    Cx as B,
    Qv as V,
    _x as fe,
    ay as H,
    bx as pe,
    iy as U,
    vx as me,
    wx as W,
    yx as G
} from "./c2675c8c-ejvs9hq3rwjwsbcv.js";
import {
    a as K,
    r as q,
    t as J
} from "./832dbd3a-dohn0zqex223lohz.js";
import {
    n as he,
    t as Y
} from "./99a48954-lvhbepk5fkge453v.js";
import {
    d as ge,
    f as _e,
    g as ve,
    h as ye,
    m as be,
    p as xe
} from "./b7c53a83-kg3t7cayvw0882ee.js";
import {
    a as Se,
    i as Ce,
    n as we,
    o as Te,
    r as Ee,
    t as De
} from "./b00adf98-bsaak27naw3fwiwq.js";
import {
    n as Oe,
    o as ke,
    s as Ae
} from "./e1258b01-oyipkghac0ekw6yb.js";
import {
    a as je,
    i as Me,
    n as Ne,
    o as X,
    r as Pe,
    t as Fe
} from "./16e34fcb-o6r2u93fs079hjgt.js";
import {
    n as Ie,
    t as Le
} from "./f4ec23bf-b9of8rfqpvbzz6no.js";

function Re(e) {
    return e.stopPropagation()
}

function ze(e) {
    return e.is_read_only
}

function Be(e) {
    return !e.is_read_only
}

function Ve(e) {
    return e.name
}

function He(e) {
    return e.name
}

function Ue(e) {
    return e.name
}

function We(e, t) {
    return e.length > 0 && e.every(e => t.has(e))
}

function Ge(e) {
    return !e
}

function Ke(e) {
    return !e
}

function qe(e) {
    return !e
}

function Je(e) {
    return !e
}

function Ye(e) {
    return e.name
}

function Xe(e) {
    return e.is_enabled
}

function Ze(e) {
    return e.name
}

function Qe(e) {
    return e.is_enabled !== !1
}

function $e(e) {
    return e.name
}

function et() {
    return I({
        fetchValidLinksOnly: !0,
        productSku: N.ADMIN_SETTING
    })
}

function tt() {
    return J()
}

function nt() {
    return g()?.normalizedAccountUserId
}

function rt() {
    return g()?.getWorkspaceId()
}
var it, Z, Q, at, ot, st, ct, lt, ut, dt, ft, pt, $, mt = e((() => {
    it = w(), ve(), he(), G(), A(), p(), P(), le(), L(), R(), l(), ee(), m(), T(), F(), K(), O(), j(), B(), h(), u(), n(), ne(), C(), d(), Z = t(S()), x(), Se(), be(), _e(), V(), Ae(), Pe(), Le(), Q = ie(), at = new Set([`deleted`]), ot = `text-blue-500 dark:text-blue-400`, st = e => e.knowledgeConfig.some(e => e.connections.some(e => !at.has(e.connection_status))), ct = e => {
        "use forget";
        let t = (0, it.c)(6),
            {
                showActionDetails: n
            } = e,
            r = n === void 0 || n,
            i;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, Q.jsx)(M, {
            id: `action-toggle-skeleton`,
            checked: !1,
            disabled: !0
        }), t[0] = i) : i = t[0];
        let a;
        t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, Q.jsx)(`div`, {
            className: `flex-1 space-y-0.5`,
            children: (0, Q.jsx)(E, {})
        }), t[1] = a) : a = t[1];
        let o;
        t[2] === r ? o = t[3] : (o = r && (0, Q.jsxs)(`div`, {
            className: `border-token-border-default relative col-start-2 overflow-hidden rounded-xl border`,
            children: [(0, Q.jsx)(`div`, {
                className: `from-token-bg-tertiary/30 to-token-bg-tertiary absolute inset-0 z-10 h-full bg-gradient-to-b`,
                "aria-hidden": `true`
            }), (0, Q.jsx)(`pre`, {
                className: `bg-token-bg-tertiary h-24 w-full overflow-hidden px-3 py-2`,
                children: (0, Q.jsx)(E, {
                    lines: 4,
                    heightSize: `sm`,
                    delay: .07
                })
            })]
        }), t[2] = r, t[3] = o);
        let s;
        return t[4] === o ? s = t[5] : (s = (0, Q.jsxs)(`li`, {
            className: `border-token-border-default grid cursor-wait grid-cols-[auto_1fr] gap-4 p-4`,
            children: [i, a, o]
        }), t[4] = o, t[5] = s), s
    }, lt = e => {
        "use forget";
        let t = (0, it.c)(132),
            {
                action: n,
                actionDelta: r,
                prevAction: i,
                isEnabled: a,
                onToggle: s,
                onOpenConstraints: c,
                constraintsDisabled: l,
                showActionDetails: u,
                showActionTypeBadges: ee,
                showRowBorder: d,
                indented: p,
                disabled: m
            } = e,
            h = l !== void 0 && l,
            g = u === void 0 || u,
            ne = ee === void 0 || ee,
            re = d === void 0 || d,
            ie = p !== void 0 && p,
            _ = m !== void 0 && m,
            v = oe(),
            b;
        if (t[0] !== n.name) {
            let e;
            t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (e = /[^a-zA-Z0-9_-]/g, t[2] = e) : e = t[2], b = n.name.replace(e, `-`), t[0] = n.name, t[1] = b
        } else b = t[1];
        let x = b,
            S;
        t[3] === n ? S = t[4] : (S = Ce(n), t[3] = n, t[4] = S);
        let ae = `action-toggle-${x}-${S}`,
            C, w, T, E, D, O, k, se, A, j, N, P, ce, F, I, le, ue;
        if (t[5] !== n || t[6] !== h || t[7] !== _ || t[8] !== ie || t[9] !== v || t[10] !== a || t[11] !== c || t[12] !== s || t[13] !== x || t[14] !== ne || t[15] !== re || t[16] !== ae) {
            let e;
            t[34] === ne ? e = t[35] : (e = e => ne || e !== `read` && e !== `write`, t[34] = ne, t[35] = e);
            let r = me(n).filter(e),
                i;
            t[36] !== n || t[37] !== c ? (i = c !== void 0 && ke(n), t[36] = n, t[37] = c, t[38] = i) : i = t[38], T = i;
            let l = $.openActionPlaceholder,
                u = _ || h,
                ee;
            t[39] !== h || t[40] !== v ? (ee = h ? v.formatMessage($.constraintsDisabledBySync) : void 0, t[39] = h, t[40] = v, t[41] = ee) : ee = t[41], w = ee;
            let d = `action-constraints-trigger-${x}`,
                te;
            t[42] === v ? te = t[43] : (te = v.formatMessage(l), t[42] = v, t[43] = te);
            let p;
            t[44] !== n || t[45] !== c ? (p = e => {
                e.preventDefault(), e.stopPropagation(), c?.(n)
            }, t[44] = n, t[45] = c, t[46] = p) : p = t[46];
            let m = u && `cursor-not-allowed`,
                g;
            t[47] === m ? g = t[48] : (g = f(`text-token-text-tertiary hover:bg-token-bg-secondary hover:text-token-text-primary flex size-8 items-center justify-center rounded-md opacity-0 transition-colors group-hover:opacity-100 focus-visible:opacity-100`, m), t[47] = m, t[48] = g);
            let y = `action-constraints-icon-${x}`,
                b;
            t[49] === y ? b = t[50] : (b = (0, Q.jsx)(o.SettingsWrench, {
                className: `h-4 w-4`,
                "data-testid": y,
                "aria-hidden": !0
            }), t[49] = y, t[50] = b);
            let S;
            t[51] !== u || t[52] !== te || t[53] !== p || t[54] !== g || t[55] !== b ? (S = (0, Q.jsx)(`button`, {
                type: `button`,
                "aria-label": te,
                onClick: p,
                disabled: u,
                className: g,
                children: b
            }), t[51] = u, t[52] = te, t[53] = p, t[54] = g, t[55] = b, t[56] = S) : S = t[56];
            let oe;
            t[57] !== d || t[58] !== S ? (oe = (0, Q.jsx)(`span`, {
                "data-action-constraints-trigger": !0,
                "data-testid": d,
                className: `action-constraints-trigger flex self-center`,
                children: S
            }), t[57] = d, t[58] = S, t[59] = oe) : oe = t[59], C = oe;
            let de;
            t[60] !== n.name || t[61] !== _ || t[62] !== a || t[63] !== s ? (de = e => {
                if (_) return;
                let t = e.target;
                t instanceof Element && t.closest(`label, button, a, input, select, textarea, [role='checkbox'], [data-action-constraints-trigger], .action-constraints-trigger, .action-details`) || s(n.name, !a)
            }, t[60] = n.name, t[61] = _, t[62] = a, t[63] = s, t[64] = de) : de = t[64];
            let L = de,
                R = ie && `ps-7`,
                z = !_ && `hover:bg-token-bg-tertiary`;
            t[65] !== R || t[66] !== z ? (le = f(`group`, R, z), t[65] = R, t[66] = z, t[67] = le) : le = t[67];
            let B = re && `border-token-border-default border-b group-last:border-0`,
                V = _ ? `cursor-not-allowed` : `cursor-default`;
            t[68] !== B || t[69] !== V ? (I = f([`px-2 py-1`, B, V]), t[68] = B, t[69] = V, t[70] = I) : I = t[70], P = `action-toggle-row-${x}`, ce = L;
            let H = !_ && `cursor-pointer`;
            t[71] === H ? F = t[72] : (F = f(`grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 px-2 py-1.5`, H), t[71] = H, t[72] = F), se = ae, A = `contents cursor-pointer`, j = Re;
            let U;
            t[73] !== n.name || t[74] !== s ? (U = e => s(n.name, e.target.checked), t[73] = n.name, t[74] = s, t[75] = U) : U = t[75], t[76] !== _ || t[77] !== a || t[78] !== U || t[79] !== ae ? (N = (0, Q.jsx)(M, {
                id: ae,
                checked: a,
                onChange: U,
                disabled: _
            }), t[76] = _, t[77] = a, t[78] = U, t[79] = ae, t[80] = N) : N = t[80], k = `min-w-0`, D = `flex min-w-0 flex-wrap items-center gap-2`;
            let W = _ && `text-token-text-secondary`,
                G;
            t[81] === W ? G = t[82] : (G = f([`font-mono text-sm font-medium`, W]), t[81] = W, t[82] = G), t[83] !== n.name || t[84] !== G ? (O = (0, Q.jsx)(`div`, {
                className: G,
                children: n.name
            }), t[83] = n.name, t[84] = G, t[85] = O) : O = t[85], ue = `flex items-center gap-1 select-none`, E = pe({
                badgeKeys: r,
                labels: fe
            }), t[5] = n, t[6] = h, t[7] = _, t[8] = ie, t[9] = v, t[10] = a, t[11] = c, t[12] = s, t[13] = x, t[14] = ne, t[15] = re, t[16] = ae, t[17] = C, t[18] = w, t[19] = T, t[20] = E, t[21] = D, t[22] = O, t[23] = k, t[24] = se, t[25] = A, t[26] = j, t[27] = N, t[28] = P, t[29] = ce, t[30] = F, t[31] = I, t[32] = le, t[33] = ue
        } else C = t[17], w = t[18], T = t[19], E = t[20], D = t[21], O = t[22], k = t[23], se = t[24], A = t[25], j = t[26], N = t[27], P = t[28], ce = t[29], F = t[30], I = t[31], le = t[32], ue = t[33];
        let de;
        t[86] === r ? de = t[87] : (de = (0, Q.jsx)(we, {
            delta: r
        }), t[86] = r, t[87] = de);
        let L;
        t[88] !== E || t[89] !== de || t[90] !== ue ? (L = (0, Q.jsxs)(`div`, {
            className: ue,
            children: [E, de]
        }), t[88] = E, t[89] = de, t[90] = ue, t[91] = L) : L = t[91];
        let R;
        t[92] !== D || t[93] !== O || t[94] !== L ? (R = (0, Q.jsxs)(`div`, {
            className: D,
            children: [O, L]
        }), t[92] = D, t[93] = O, t[94] = L, t[95] = R) : R = t[95];
        let z;
        t[96] === n.description ? z = t[97] : (z = n.description ? n.description : (0, Q.jsx)(y, {
            ...$.noDescription
        }), t[96] = n.description, t[97] = z);
        let B;
        t[98] === z ? B = t[99] : (B = (0, Q.jsx)(`div`, {
            className: `text-token-text-tertiary line-clamp-2 text-xs leading-5 wrap-anywhere`,
            children: z
        }), t[98] = z, t[99] = B);
        let V;
        t[100] !== k || t[101] !== R || t[102] !== B ? (V = (0, Q.jsxs)(`div`, {
            className: k,
            children: [R, B]
        }), t[100] = k, t[101] = R, t[102] = B, t[103] = V) : V = t[103];
        let H;
        t[104] !== se || t[105] !== A || t[106] !== j || t[107] !== N || t[108] !== V ? (H = (0, Q.jsxs)(`label`, {
            htmlFor: se,
            className: A,
            onClick: j,
            children: [N, V]
        }), t[104] = se, t[105] = A, t[106] = j, t[107] = N, t[108] = V, t[109] = H) : H = t[109];
        let U;
        t[110] !== C || t[111] !== w || t[112] !== T ? (U = T && (w ? (0, Q.jsx)(te, {
            label: w,
            className: `action-constraints-trigger self-center`,
            children: C
        }) : C), t[110] = C, t[111] = w, t[112] = T, t[113] = U) : U = t[113];
        let W;
        t[114] !== n || t[115] !== r || t[116] !== i || t[117] !== g ? (W = g && (0, Q.jsx)(`div`, {
            className: `col-start-2 col-end-4 min-w-0`,
            children: (0, Q.jsx)(Ee, {
                action: n,
                actionDelta: r,
                prevAction: i,
                initiallyCollapsed: !0
            })
        }), t[114] = n, t[115] = r, t[116] = i, t[117] = g, t[118] = W) : W = t[118];
        let G;
        t[119] !== P || t[120] !== ce || t[121] !== F || t[122] !== H || t[123] !== U || t[124] !== W ? (G = (0, Q.jsxs)(`div`, {
            "data-testid": P,
            onPointerUp: ce,
            className: F,
            children: [H, U, W]
        }), t[119] = P, t[120] = ce, t[121] = F, t[122] = H, t[123] = U, t[124] = W, t[125] = G) : G = t[125];
        let K;
        t[126] !== I || t[127] !== G ? (K = (0, Q.jsx)(`div`, {
            className: I,
            children: G
        }), t[126] = I, t[127] = G, t[128] = K) : K = t[128];
        let q;
        return t[129] !== le || t[130] !== K ? (q = (0, Q.jsx)(`li`, {
            className: le,
            children: K
        }), t[129] = le, t[130] = K, t[131] = q) : q = t[131], q
    }, ut = e => {
        "use forget";
        let t = (0, it.c)(160),
            {
                app: n,
                actions: r,
                prevActions: i,
                deltas: o,
                initialEnabledActions: s,
                initialCustomNewActionPolicy: c,
                onRefreshActions: l,
                refreshingActions: u,
                onSubmit: ee,
                submitting: d,
                onCancel: p,
                refreshHidden: m,
                onOpenConstraints: h,
                constraintsDisabled: g,
                confirmDisabled: ne,
                showScrollDividers: re,
                onScrollabilityChange: ie
            } = e,
            _ = m !== void 0 && m,
            v = g !== void 0 && g,
            b = ne !== void 0 && ne,
            x = re !== void 0 && re,
            S = oe(),
            ae = (0, Z.useRef)(null),
            [C, w] = (0, Z.useState)(s),
            [T, E] = (0, Z.useState)(c),
            [D, O] = (0, Z.useState)(!1),
            [k, se] = (0, Z.useState)(!1),
            A = (0, Z.useId)(),
            j = (0, Z.useId)(),
            N = (0, Z.useId)(),
            P = (0, Z.useId)(),
            ce, F;
        t[0] === s ? (ce = t[1], F = t[2]) : (ce = () => {
            w(new Set(s))
        }, F = [s], t[0] = s, t[1] = ce, t[2] = F), (0, Z.useEffect)(ce, F);
        let I, le;
        t[3] === c ? (I = t[4], le = t[5]) : (I = () => {
            E(c)
        }, le = [c], t[3] = c, t[4] = I, t[5] = le), (0, Z.useEffect)(I, le);
        let L;
        t[6] === n ? L = t[7] : (L = st(n), t[6] = n, t[7] = L);
        let R = L,
            B;
        if (t[8] !== r || t[9] !== o) {
            let e;
            t[11] === o ? e = t[12] : (e = (e, t) => (o.get(e.name) ?? De.Unmodified) - (o.get(t.name) ?? De.Unmodified) || e.name.localeCompare(t.name), t[11] = o, t[12] = e), B = [...r].sort(e), t[8] = r, t[9] = o, t[10] = B
        } else B = t[10];
        let V = B,
            fe;
        t[13] === V ? fe = t[14] : (fe = V.filter(ze), t[13] = V, t[14] = fe);
        let H = fe,
            pe;
        t[15] === V ? pe = t[16] : (pe = V.filter(Be), t[15] = V, t[16] = pe);
        let U = pe,
            me;
        t[17] === r ? me = t[18] : (me = r.map(Ve), t[17] = r, t[18] = me);
        let W = me,
            G;
        t[19] !== W || t[20] !== n.primaryConnector.id || t[21] !== C || t[22] !== s ? (G = xe({
            connectorId: n.primaryConnector.id,
            adminConfigurableActionNames: W,
            initialEnabledActionNames: s,
            nextEnabledActionNames: C
        }), t[19] = W, t[20] = n.primaryConnector.id, t[21] = C, t[22] = s, t[23] = G) : G = t[23];
        let K = G,
            q;
        t[24] === H ? q = t[25] : (q = H.map(He), t[24] = H, t[25] = q);
        let J = q,
            he;
        t[26] === U ? he = t[27] : (he = U.map(Ue), t[26] = U, t[27] = he);
        let Y = he,
            _e;
        t[28] !== W || t[29] !== C ? (_e = W.length > 0 && W.every(e => C.has(e)), t[28] = W, t[29] = C, t[30] = _e) : _e = t[30];
        let ve = _e,
            ye;
        t[31] !== C || t[32] !== J ? (ye = J.length > 0 && J.every(e => C.has(e)), t[31] = C, t[32] = J, t[33] = ye) : ye = t[33];
        let be = ye,
            Se;
        t[34] !== C || t[35] !== Y ? (Se = Y.length > 0 && Y.every(e => C.has(e)), t[34] = C, t[35] = Y, t[36] = Se) : Se = t[36];
        let Ce = Se,
            we;
        if (t[37] !== C || t[38] !== J) {
            let e;
            t[40] === C ? e = t[41] : (e = e => C.has(e), t[40] = C, t[41] = e), we = J.filter(e), t[37] = C, t[38] = J, t[39] = we
        } else we = t[39];
        let Te = we.length,
            Ee;
        if (t[42] !== C || t[43] !== Y) {
            let e;
            t[45] === C ? e = t[46] : (e = e => C.has(e), t[45] = C, t[46] = e), Ee = Y.filter(e), t[42] = C, t[43] = Y, t[44] = Ee
        } else Ee = t[44];
        let Oe = Ee.length,
            ke;
        t[47] !== be || t[48] !== C || t[49] !== J ? (ke = !be && J.some(e => C.has(e)), t[47] = be, t[48] = C, t[49] = J, t[50] = ke) : ke = t[50];
        let Ae = ke,
            je;
        t[51] !== Ce || t[52] !== C || t[53] !== Y ? (je = !Ce && Y.some(e => C.has(e)), t[51] = Ce, t[52] = C, t[53] = Y, t[54] = je) : je = t[54];
        let Me = je,
            X = !!u || d,
            Pe = We,
            Fe;
        t[55] !== W || t[56] !== ve || t[57] !== be || t[58] !== C || t[59] !== J ? (Fe = (e, t) => {
            let n = new Set(C);
            for (let r of e) t ? n.add(r) : n.delete(r);
            let r = Pe(W, n),
                i = Pe(J, n);
            w(n), t && E(e => !ve && r ? `custom_new_all` : !be && i && e !== `custom_new_all` ? `custom_new_read_only` : e)
        }, t[55] = W, t[56] = ve, t[57] = be, t[58] = C, t[59] = J, t[60] = Fe) : Fe = t[60];
        let Ie = Fe,
            Le;
        t[61] !== J || t[62] !== Ie ? (Le = e => {
            Ie(J, e)
        }, t[61] = J, t[62] = Ie, t[63] = Le) : Le = t[63];
        let Re = Le,
            Ye;
        t[64] === ie ? Ye = t[65] : (Ye = () => {
            let e = ae.current;
            ie?.(e ? e.scrollHeight > e.clientHeight + 1 : !1)
        }, t[64] = ie, t[65] = Ye);
        let Xe = Ye,
            Ze, Qe;
        t[66] === Xe ? (Ze = t[67], Qe = t[68]) : (Ze = () => {
            Xe();
            let e = ae.current;
            if (!e) return;
            window.addEventListener(`resize`, Xe);
            let t;
            return typeof ResizeObserver < `u` && (t = new ResizeObserver(Xe), t.observe(e)), () => {
                window.removeEventListener(`resize`, Xe), t?.disconnect()
            }
        }, Qe = [Xe], t[66] = Xe, t[67] = Ze, t[68] = Qe), (0, Z.useEffect)(Ze, Qe);
        let $e;
        t[69] === Xe ? $e = t[70] : ($e = () => {
            let e = window.requestAnimationFrame(Xe);
            return () => window.cancelAnimationFrame(e)
        }, t[69] = Xe, t[70] = $e);
        let et;
        t[71] !== r.length || t[72] !== v || t[73] !== D || t[74] !== u || t[75] !== d || t[76] !== Xe || t[77] !== k ? (et = [r.length, v, D, u, d, Xe, k], t[71] = r.length, t[72] = v, t[73] = D, t[74] = u, t[75] = d, t[76] = Xe, t[77] = k, t[78] = et) : et = t[78], (0, Z.useEffect)($e, et);
        let tt;
        t[79] === Symbol.for(`react.memo_cache_sentinel`) ? (tt = [
            [`custom_new_all`, $.unconfiguredActionsToggleLabel],
            [`custom_new_read_only`, $.unconfiguredReadActionsToggleLabel],
            [`custom`, $.unconfiguredNoActionsToggleLabel]
        ], t[79] = tt) : tt = t[79];
        let nt = tt,
            rt;
        t[80] !== S || t[81] !== l || t[82] !== _ || t[83] !== u || t[84] !== d ? (rt = _ ? null : (0, Q.jsx)(te, {
            label: l ? void 0 : S.formatMessage($.needLink),
            children: (0, Q.jsx)(a, {
                size: `small`,
                color: `secondary`,
                loading: u,
                disabled: !l || d,
                onClick: () => l?.(),
                children: (0, Q.jsx)(y, {
                    ...$.refreshLabel
                })
            })
        }), t[80] = S, t[81] = l, t[82] = _, t[83] = u, t[84] = d, t[85] = rt) : rt = t[85];
        let at = rt,
            ct;
        t[86] === n.primaryConnector.name ? ct = t[87] : (ct = (0, Q.jsx)(`p`, {
            className: `text-token-text-secondary flex-1 pb-0 text-sm leading-5`,
            children: (0, Q.jsx)(y, {
                ...$.policyActionsDescription,
                values: {
                    app: n.primaryConnector.name
                }
            })
        }), t[86] = n.primaryConnector.name, t[87] = ct);
        let ut;
        t[88] !== at || t[89] !== ct ? (ut = (0, Q.jsxs)(`div`, {
            className: `flex items-start justify-between gap-3`,
            children: [ct, at]
        }), t[88] = at, t[89] = ct, t[90] = ut) : ut = t[90];
        let dt;
        t[91] === v ? dt = t[92] : (dt = v && (0, Q.jsx)(`div`, {
            className: `border-token-border-default bg-token-bg-tertiary text-token-text-secondary rounded-lg border px-3 py-2 text-xs`,
            children: (0, Q.jsx)(y, {
                ...$.constraintsDisabledBySync
            })
        }), t[91] = v, t[92] = dt);
        let ft;
        t[93] !== n.primaryConnector.name || t[94] !== K || t[95] !== Ie ? (ft = K.length > 0 && (0, Q.jsx)(ge, {
            appName: n.primaryConnector.name,
            onUndo: () => Ie([...K], !0)
        }), t[93] = n.primaryConnector.name, t[94] = K, t[95] = Ie, t[96] = ft) : ft = t[96];
        let pt;
        t[97] !== r.length || t[98] !== be || t[99] !== Ce || t[100] !== v || t[101] !== o || t[102] !== X || t[103] !== Re || t[104] !== C || t[105] !== Te || t[106] !== Oe || t[107] !== S || t[108] !== R || t[109] !== h || t[110] !== i || t[111] !== H || t[112] !== D || t[113] !== Ae || t[114] !== A || t[115] !== Ie || t[116] !== Y || t[117] !== U || t[118] !== k || t[119] !== Me || t[120] !== j ? (pt = r.length === 0 ? (0, Q.jsx)(`p`, {
            className: `text-token-text-tertiary m-4 text-center text-xs italic`,
            children: (0, Q.jsx)(y, {
                ...$.noActionsLabel
            })
        }) : (0, Q.jsx)(Q.Fragment, {
            children: (0, Q.jsxs)(`div`, {
                className: `space-y-3`,
                children: [(0, Q.jsxs)(`div`, {
                    className: `border-token-border-default overflow-hidden rounded-lg border`,
                    children: [H.length > 0 && (0, Q.jsxs)(`div`, {
                        children: [(0, Q.jsxs)(`div`, {
                            "data-testid": `action-set-row-read`,
                            onPointerUp: e => {
                                if (X) return;
                                let t = e.target;
                                t instanceof HTMLElement && t.closest(`label, button, input`) || O(Ge)
                            },
                            className: f(`flex items-center justify-between gap-3 px-4 py-3 transition-colors`, X ? `cursor-not-allowed` : `hover:bg-token-bg-tertiary cursor-pointer`),
                            children: [(0, Q.jsxs)(`label`, {
                                htmlFor: `action-toggle-all-read-actions`,
                                className: f(`flex min-w-0 items-center gap-3`, X ? `cursor-not-allowed opacity-60` : `cursor-pointer`),
                                children: [(0, Q.jsx)(M, {
                                    id: `action-toggle-all-read-actions`,
                                    checked: be,
                                    indeterminate: Ae,
                                    onChange: e => Re(e.target.checked),
                                    disabled: X
                                }), (0, Q.jsxs)(`span`, {
                                    className: `inline-flex min-w-0 items-baseline gap-2 leading-6`,
                                    children: [(0, Q.jsx)(`span`, {
                                        className: `truncate`,
                                        children: (0, Q.jsx)(y, {
                                            ...$.readActionsSectionLabel
                                        })
                                    }), !be && (0, Q.jsx)(`span`, {
                                        className: `text-token-text-tertiary inline-flex text-sm leading-none`,
                                        children: (0, Q.jsx)(y, {
                                            ...$.enabledActionsCountLabel,
                                            values: {
                                                enabledCount: Te,
                                                totalCount: H.length
                                            }
                                        })
                                    })]
                                })]
                            }), (0, Q.jsx)(`button`, {
                                type: `button`,
                                className: `text-token-text-secondary hover:bg-token-bg-secondary hover:text-token-text-primary flex size-8 shrink-0 items-center justify-center rounded-md transition-colors disabled:opacity-50`,
                                "aria-label": S.formatMessage(D ? $.hideActionDetailsLabel : $.viewActionDetailsLabel),
                                "aria-expanded": D,
                                "aria-controls": A,
                                onClick: () => O(Ke),
                                disabled: X,
                                children: D ? (0, Q.jsx)(ue, {
                                    className: `h-4 w-4`,
                                    "aria-hidden": !0
                                }) : (0, Q.jsx)(z, {
                                    className: `h-4 w-4`,
                                    "aria-hidden": !0
                                })
                            })]
                        }), D && (0, Q.jsx)(`ul`, {
                            id: A,
                            className: `p-0`,
                            children: H.map(e => (0, Q.jsx)(lt, {
                                action: e,
                                actionDelta: o.get(e.name),
                                prevAction: i?.get(e.name)?.action,
                                isEnabled: C.has(e.name),
                                onToggle: (e, t) => Ie([e], t),
                                disabled: X,
                                onOpenConstraints: h,
                                constraintsDisabled: v,
                                showActionDetails: !1,
                                showActionTypeBadges: !1,
                                showRowBorder: !1,
                                indented: !0
                            }, e.name))
                        })]
                    }), U.length > 0 && (0, Q.jsxs)(`div`, {
                        className: f(H.length > 0 && `border-token-border-default border-t`),
                        children: [(0, Q.jsxs)(`div`, {
                            "data-testid": `action-set-row-write`,
                            onPointerUp: e => {
                                if (X) return;
                                let t = e.target;
                                t instanceof HTMLElement && t.closest(`label, button, input`) || se(qe)
                            },
                            className: f(`flex items-center justify-between gap-3 px-4 py-3 transition-colors`, X ? `cursor-not-allowed` : `hover:bg-token-bg-tertiary cursor-pointer`),
                            children: [(0, Q.jsxs)(`label`, {
                                htmlFor: `action-toggle-all-write-actions`,
                                className: f(`flex min-w-0 items-center gap-3`, X ? `cursor-not-allowed opacity-60` : `cursor-pointer`),
                                children: [(0, Q.jsx)(M, {
                                    id: `action-toggle-all-write-actions`,
                                    checked: Ce,
                                    indeterminate: Me,
                                    onChange: e => Ie(Y, e.target.checked),
                                    disabled: X
                                }), (0, Q.jsxs)(`span`, {
                                    className: `inline-flex min-w-0 items-baseline gap-2 leading-6`,
                                    children: [(0, Q.jsx)(`span`, {
                                        className: `truncate`,
                                        children: (0, Q.jsx)(y, {
                                            ...$.writeActionsSectionLabel
                                        })
                                    }), !Ce && (0, Q.jsx)(`span`, {
                                        className: `text-token-text-tertiary inline-flex text-sm leading-none`,
                                        children: (0, Q.jsx)(y, {
                                            ...$.enabledActionsCountLabel,
                                            values: {
                                                enabledCount: Oe,
                                                totalCount: U.length
                                            }
                                        })
                                    })]
                                })]
                            }), (0, Q.jsx)(`button`, {
                                type: `button`,
                                className: `text-token-text-secondary hover:bg-token-bg-secondary hover:text-token-text-primary flex size-8 shrink-0 items-center justify-center rounded-md transition-colors disabled:opacity-50`,
                                "aria-label": S.formatMessage(k ? $.hideActionDetailsLabel : $.viewActionDetailsLabel),
                                "aria-expanded": k,
                                "aria-controls": j,
                                onClick: () => se(Je),
                                disabled: X,
                                children: k ? (0, Q.jsx)(ue, {
                                    className: `h-4 w-4`,
                                    "aria-hidden": !0
                                }) : (0, Q.jsx)(z, {
                                    className: `h-4 w-4`,
                                    "aria-hidden": !0
                                })
                            })]
                        }), k && (0, Q.jsx)(`ul`, {
                            id: j,
                            className: `p-0`,
                            children: U.map(e => (0, Q.jsx)(lt, {
                                action: e,
                                actionDelta: o.get(e.name),
                                prevAction: i?.get(e.name)?.action,
                                isEnabled: C.has(e.name),
                                onToggle: (e, t) => Ie([e], t),
                                disabled: X,
                                onOpenConstraints: h,
                                constraintsDisabled: v,
                                showActionDetails: !1,
                                showActionTypeBadges: !1,
                                showRowBorder: !1,
                                indented: !0
                            }, e.name))
                        })]
                    })]
                }), R && h && (0, Q.jsx)(`div`, {
                    className: `mt-2 space-y-2`,
                    children: (0, Q.jsxs)(`div`, {
                        className: `bg-token-bg-tertiary text-token-text-secondary flex items-center gap-3 rounded-lg px-4 py-3 text-sm leading-6`,
                        children: [(0, Q.jsx)(de, {
                            className: `h-4 w-4 shrink-0`
                        }), (0, Q.jsx)(`span`, {
                            children: (0, Q.jsx)(y, {
                                ...$.syncEnabledConstraintsNotice
                            })
                        })]
                    })
                })]
            })
        }), t[97] = r.length, t[98] = be, t[99] = Ce, t[100] = v, t[101] = o, t[102] = X, t[103] = Re, t[104] = C, t[105] = Te, t[106] = Oe, t[107] = S, t[108] = R, t[109] = h, t[110] = i, t[111] = H, t[112] = D, t[113] = Ae, t[114] = A, t[115] = Ie, t[116] = Y, t[117] = U, t[118] = k, t[119] = Me, t[120] = j, t[121] = pt) : pt = t[121];
        let mt;
        t[122] !== ut || t[123] !== dt || t[124] !== ft || t[125] !== pt ? (mt = (0, Q.jsxs)(`div`, {
            ref: ae,
            className: `min-h-0 flex-1 space-y-3 overflow-y-auto px-6 pt-2 pb-3`,
            children: [ut, dt, ft, pt]
        }), t[122] = ut, t[123] = dt, t[124] = ft, t[125] = pt, t[126] = mt) : mt = t[126];
        let ht;
        t[127] !== r.length || t[128] !== n.primaryConnector.name || t[129] !== T || t[130] !== X || t[131] !== x || t[132] !== P || t[133] !== N ? (ht = r.length > 0 && (0, Q.jsxs)(`div`, {
            className: f(`shrink-0 space-y-3 px-6 pt-1 pb-6`, x && `border-token-border-default border-t pt-4`),
            children: [(0, Q.jsx)(`div`, {
                id: N,
                className: `text-token-text-secondary text-sm leading-5`,
                children: (0, Q.jsx)(y, {
                    ...$.unconfiguredActionsDescription,
                    values: {
                        app: n.primaryConnector.name
                    }
                })
            }), (0, Q.jsx)(`div`, {
                role: `radiogroup`,
                "aria-labelledby": N,
                className: `text-token-text-secondary flex flex-col items-start gap-3 text-sm`,
                children: nt.map(e => {
                    let [t, n] = e;
                    return (0, Q.jsxs)(`label`, {
                        className: `flex cursor-pointer items-center gap-2`,
                        children: [(0, Q.jsx)(`input`, {
                            type: `radio`,
                            name: P,
                            value: t,
                            className: ot,
                            checked: T === t,
                            onChange: () => E(t),
                            disabled: X
                        }), (0, Q.jsx)(`span`, {
                            children: (0, Q.jsx)(y, {
                                ...n
                            })
                        })]
                    }, t)
                })
            })]
        }), t[127] = r.length, t[128] = n.primaryConnector.name, t[129] = T, t[130] = X, t[131] = x, t[132] = P, t[133] = N, t[134] = ht) : ht = t[134];
        let gt = x && r.length === 0 && `border-token-border-default border-t pt-4`,
            _t;
        t[135] === gt ? _t = t[136] : (_t = f(`flex shrink-0 justify-end gap-2 px-6 pt-0 pb-6`, gt), t[135] = gt, t[136] = _t);
        let vt;
        t[137] === Symbol.for(`react.memo_cache_sentinel`) ? (vt = (0, Q.jsx)(y, {
            id: `59bwQY`,
            defaultMessage: `Cancel`
        }), t[137] = vt) : vt = t[137];
        let yt;
        t[138] !== X || t[139] !== p ? (yt = (0, Q.jsx)(a, {
            color: `secondary`,
            onClick: p,
            disabled: X,
            children: vt
        }), t[138] = X, t[139] = p, t[140] = yt) : yt = t[140];
        let bt;
        t[141] !== W || t[142] !== T || t[143] !== C || t[144] !== ee || t[145] !== J ? (bt = () => ee({
            enabledActions: Array.from(C),
            actionPolicy: Ne({
                actionIds: W,
                readOnlyActionIds: J,
                enabledActions: C,
                customNewActionPolicy: T
            })
        }), t[141] = W, t[142] = T, t[143] = C, t[144] = ee, t[145] = J, t[146] = bt) : bt = t[146];
        let xt = X || b,
            St;
        t[147] === Symbol.for(`react.memo_cache_sentinel`) ? (St = (0, Q.jsx)(y, {
            ...$.confirmLabel
        }), t[147] = St) : St = t[147];
        let Ct;
        t[148] !== d || t[149] !== bt || t[150] !== xt ? (Ct = (0, Q.jsx)(a, {
            onClick: bt,
            loading: d,
            disabled: xt,
            children: St
        }), t[148] = d, t[149] = bt, t[150] = xt, t[151] = Ct) : Ct = t[151];
        let wt;
        t[152] !== _t || t[153] !== yt || t[154] !== Ct ? (wt = (0, Q.jsxs)(`div`, {
            className: _t,
            children: [yt, Ct]
        }), t[152] = _t, t[153] = yt, t[154] = Ct, t[155] = wt) : wt = t[155];
        let Tt;
        return t[156] !== mt || t[157] !== ht || t[158] !== wt ? (Tt = (0, Q.jsxs)(Q.Fragment, {
            children: [mt, ht, wt]
        }), t[156] = mt, t[157] = ht, t[158] = wt, t[159] = Tt) : Tt = t[159], Tt
    }, dt = e => {
        "use forget";
        let t = (0, it.c)(75),
            {
                app: n,
                onClose: i,
                onCancel: a,
                onConfirm: o,
                initialEnabledActions: l,
                initialActionPolicy: u,
                initialActionPolicyLoading: ee,
                showOverlayBackground: d,
                submitting: te,
                showParameterConstraints: f
            } = e,
            p = u === void 0 ? null : u,
            m = ee !== void 0 && ee,
            h = d === void 0 || d,
            g = te !== void 0 && te,
            ne = f === void 0 || f,
            ie = oe(),
            _ = v(),
            [b, x] = (0, Z.useState)(null),
            [S, C] = (0, Z.useState)(!1),
            w = (0, Z.useRef)(!1),
            T;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (T = {
            forceEnable: !0
        }, t[0] = T) : T = t[0];
        let {
            actions: E,
            isLoading: O,
            refetch: A
        } = D(n.primaryConnector, N.ADMIN_SETTING, T), j;
        t[1] === E ? j = t[2] : (j = E.filter(Me), t[1] = E, t[2] = j);
        let M = j,
            P;
        bb0: {
            if (l) {
                let e;
                t[3] === M ? e = t[4] : (e = new Set(M.map(Ye)), t[3] = M, t[4] = e);
                let n = e,
                    r;
                t[5] === l ? r = t[6] : (r = Array.from(l), t[5] = l, t[6] = r);
                let i;
                t[7] !== r || t[8] !== n ? (i = new Set(r.filter(e => n.has(e))), t[7] = r, t[8] = n, t[9] = i) : i = t[9], P = i;
                break bb0
            }
            let e;t[10] === M ? e = t[11] : (e = new Set(M.filter(Xe).map(Ze)), t[10] = M, t[11] = e),
            P = e
        }
        let F = P,
            [I, le] = (0, Z.useState)(Fe),
            ue, de;
        t[12] !== O || t[13] !== p || t[14] !== m ? (de = () => {
            w.current || O || m || (le(X(p)), w.current = !0)
        }, ue = [O, p, m], t[12] = O, t[13] = p, t[14] = m, t[15] = ue, t[16] = de) : (ue = t[15], de = t[16]), (0, Z.useEffect)(de, ue);
        let L;
        if (t[17] !== M) {
            L = new Map;
            for (let e of M) L.set(e.name, {
                action: e,
                hash: Ce(e)
            });
            t[17] = M, t[18] = L
        } else L = t[18];
        let R = L,
            [z, B] = (0, Z.useState)(null),
            V = Te(R, z),
            fe;
        t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (fe = s()?.getWorkspaceId(), t[19] = fe) : fe = t[19];
        let H = fe,
            pe = k(),
            me = U(),
            G = (0, Z.useRef)(!1),
            K;
        t[20] !== n || t[21] !== ne ? (K = Oe({
            app: n,
            showParameterConstraints: ne
        }), t[20] = n, t[21] = ne, t[22] = K) : K = t[22];
        let q = K,
            J, he;
        t[23] !== O || t[24] !== n.primaryConnector.actions_changed_since_review || t[25] !== n.primaryConnector.id || t[26] !== me || t[27] !== pe || t[28] !== M ? (J = () => {
            if (G.current || !H || !n.primaryConnector.actions_changed_since_review || O) return;
            G.current = !0;
            let e = M.filter(Qe).map($e);
            (async () => {
                await ce(n.primaryConnector.id, H, e), pe(), me(n.primaryConnector.id)
            })()
        }, he = [O, n.primaryConnector.actions_changed_since_review, n.primaryConnector.id, me, pe, M, H], t[23] = O, t[24] = n.primaryConnector.actions_changed_since_review, t[25] = n.primaryConnector.id, t[26] = me, t[27] = pe, t[28] = M, t[29] = J, t[30] = he) : (J = t[29], he = t[30]), (0, Z.useEffect)(J, he);
        let Y;
        t[31] === Symbol.for(`react.memo_cache_sentinel`) ? (Y = re(), t[31] = Y) : Y = t[31];
        let ge = Y,
            _e;
        t[32] !== R || t[33] !== z || t[34] !== A ? (_e = async e => {
            z || B(R), await se(e), await A()
        }, t[32] = R, t[33] = z, t[34] = A, t[35] = _e) : _e = t[35];
        let ve;
        t[36] !== n.primaryConnector.id || t[37] !== _ ? (ve = () => {
            _.invalidateQueries({
                queryKey: [`connector-action-clamp`, n.primaryConnector.id]
            })
        }, t[36] = n.primaryConnector.id, t[37] = _, t[38] = ve) : ve = t[38];
        let ye;
        t[39] === Symbol.for(`react.memo_cache_sentinel`) ? (ye = e => {
            ge.danger($.refreshActionsError, {
                error: e
            })
        }, t[39] = ye) : ye = t[39];
        let be;
        t[40] !== _e || t[41] !== ve ? (be = {
            mutationFn: _e,
            onSuccess: ve,
            onError: ye
        }, t[40] = _e, t[41] = ve, t[42] = be) : be = t[42];
        let xe = ae(be),
            {
                data: Se
            } = c(et),
            we = Ie(Se, n.primaryConnector.id),
            Ee = W(n.primaryConnector),
            De;
        t[43] === ie ? De = t[44] : (De = ie.formatMessage($.actionsControlModalTitle), t[43] = ie, t[44] = De);
        let ke;
        t[45] !== V || t[46] !== O || t[47] !== n || t[48] !== q || t[49] !== F || t[50] !== m || t[51] !== Ee || t[52] !== we || t[53] !== a || t[54] !== o || t[55] !== S || t[56] !== z || t[57] !== xe || t[58] !== I || t[59] !== g || t[60] !== M ? (ke = O && !xe.isPending ? (0, Q.jsxs)(`div`, {
            className: `space-y-4 overflow-y-auto px-6 pt-2 pb-6`,
            children: [(0, Q.jsx)(`p`, {
                className: `text-token-text-secondary pb-0 text-sm leading-5`,
                children: (0, Q.jsx)(y, {
                    ...$.policyActionsDescription,
                    values: {
                        app: n.primaryConnector.name
                    }
                })
            }), (0, Q.jsx)(`ul`, {
                className: `border-token-border-default rounded-2xl border`,
                children: (0, Q.jsx)(ct, {
                    showActionDetails: !1
                })
            })]
        }) : (0, Q.jsx)(ut, {
            app: n,
            actions: M,
            prevActions: z,
            deltas: V,
            initialEnabledActions: F,
            initialCustomNewActionPolicy: I,
            onSubmit: o,
            onCancel: a,
            refreshingActions: xe.isPending,
            submitting: g || m,
            confirmDisabled: M.length === 0,
            refreshHidden: !Ee,
            onRefreshActions: Ee && we !== void 0 ? () => {
                xe.mutate(we.id)
            } : void 0,
            onOpenConstraints: q ? e => x(e) : void 0,
            constraintsDisabled: !1,
            showScrollDividers: S,
            onScrollabilityChange: C
        }), t[45] = V, t[46] = O, t[47] = n, t[48] = q, t[49] = F, t[50] = m, t[51] = Ee, t[52] = we, t[53] = a, t[54] = o, t[55] = S, t[56] = z, t[57] = xe, t[58] = I, t[59] = g, t[60] = M, t[61] = ke) : ke = t[61];
        let Ae;
        t[62] !== i || t[63] !== S || t[64] !== h || t[65] !== De || t[66] !== ke ? (Ae = (0, Q.jsx)(r, {
            isOpen: !0,
            onClose: i,
            showOverlayBackground: h,
            testId: `modal-app-actions-control`,
            title: De,
            size: `custom`,
            className: `max-w-5xl`,
            hasSeparator: S,
            noPadding: !0,
            isScrollable: !1,
            headerClassName: `!px-6 !pt-6 !pb-2`,
            contentClassName: `flex flex-col max-h-[80vh]`,
            children: ke
        }), t[62] = i, t[63] = S, t[64] = h, t[65] = De, t[66] = ke, t[67] = Ae) : Ae = t[67];
        let je;
        t[68] !== n || t[69] !== q || t[70] !== b ? (je = q && b && (0, Q.jsx)(pt, {
            app: n,
            onClose: () => x(null),
            onBack: () => x(null),
            showOverlayBackground: !0,
            initialSelectedAction: b
        }), t[68] = n, t[69] = q, t[70] = b, t[71] = je) : je = t[71];
        let Ne;
        return t[72] !== Ae || t[73] !== je ? (Ne = (0, Q.jsxs)(Q.Fragment, {
            children: [Ae, je]
        }), t[72] = Ae, t[73] = je, t[74] = Ne) : Ne = t[74], Ne
    }, ft = e => {
        "use forget";
        let t = (0, it.c)(41),
            {
                app: n,
                onClose: r
            } = e,
            a = oe(),
            o;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (o = s()?.getWorkspaceId(), t[0] = o) : o = t[0];
        let l = o,
            u;
        t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (u = re(), t[1] = u) : u = t[1];
        let ee = u,
            d = v(),
            te = k(),
            f = U(),
            p = H(),
            m = c(tt),
            h = c(nt),
            g = !!l,
            ne;
        t[2] !== n.primaryConnector.id || t[3] !== m ? (ne = () => {
            q(m, l ?? ``, n.primaryConnector.id, g)
        }, t[2] = n.primaryConnector.id, t[3] = m, t[4] = ne) : ne = t[4];
        let ie;
        t[5] !== n.primaryConnector.id || t[6] !== h || t[7] !== m ? (ie = [m, h, l, n.primaryConnector.id, g], t[5] = n.primaryConnector.id, t[6] = h, t[7] = m, t[8] = ie) : ie = t[8], (0, Z.useEffect)(ne, ie);
        let _;
        t[9] !== n.primaryConnector.id || t[10] !== h || t[11] !== m ? (_ = Y({
            queryKeyPrefix: `connector-workspace-permissions`,
            workspaceId: l,
            connectorId: n.primaryConnector.id,
            enabled: g,
            transport: m,
            actorId: h
        }), t[9] = n.primaryConnector.id, t[10] = h, t[11] = m, t[12] = _) : _ = t[12];
        let {
            data: y,
            isLoading: x
        } = b(_), S;
        t[13] !== n.primaryConnector.id || t[14] !== f || t[15] !== p || t[16] !== te || t[17] !== d ? (S = async e => {
            let {
                enabledActions: t,
                actionPolicy: r
            } = e;
            if (!l) throw Error(`Workspace ID is required to update app actions.`);
            let a = {
                enabled: !0,
                enabled_actions: t
            };
            r && (a.action_policy = r), await i.safePost(`/accounts/{account_id}/connectors/{connector_id}/workspace_permissions`, {
                parameters: {
                    path: {
                        account_id: l,
                        connector_id: n.primaryConnector.id
                    }
                },
                requestBody: a
            }), te(), f(n.primaryConnector.id), await d.invalidateQueries({
                queryKey: [`connector-actions`, n.primaryConnector.id]
            }), await d.invalidateQueries({
                queryKey: [`connector-workspace-permissions`, l, n.primaryConnector.id]
            }), await p()
        }, t[13] = n.primaryConnector.id, t[14] = f, t[15] = p, t[16] = te, t[17] = d, t[18] = S) : S = t[18];
        let C;
        t[19] !== a || t[20] !== r ? (C = () => {
            ee.success(a.formatMessage({
                id: `AW+VoO`,
                defaultMessage: `App tools updated successfully.`
            })), r()
        }, t[19] = a, t[20] = r, t[21] = C) : C = t[21];
        let w;
        t[22] === a ? w = t[23] : (w = () => {
            ee.danger(a.formatMessage({
                id: `IRGvbN`,
                defaultMessage: `Failed to update app tools. Please try again.`
            }))
        }, t[22] = a, t[23] = w);
        let T;
        t[24] !== S || t[25] !== C || t[26] !== w ? (T = {
            mutationFn: S,
            onSuccess: C,
            onError: w
        }, t[24] = S, t[25] = C, t[26] = w, t[27] = T) : T = t[27];
        let {
            mutateAsync: E,
            isPending: D
        } = ae(T), O;
        t[28] !== r || t[29] !== D ? (O = () => {
            D || r()
        }, t[28] = r, t[29] = D, t[30] = O) : O = t[30];
        let se = O,
            A = y?.action_policy,
            j = y?.enabled_actions,
            M;
        t[31] !== A || t[32] !== j ? (M = je({
            actionPolicy: A,
            enabledActions: j
        }), t[31] = A, t[32] = j, t[33] = M) : M = t[33];
        let N = !!l && x,
            P;
        return t[34] !== n || t[35] !== se || t[36] !== E || t[37] !== D || t[38] !== M || t[39] !== N ? (P = (0, Q.jsx)(dt, {
            app: n,
            onClose: se,
            onCancel: se,
            onConfirm: E,
            submitting: D,
            initialActionPolicy: M,
            initialActionPolicyLoading: N
        }), t[34] = n, t[35] = se, t[36] = E, t[37] = D, t[38] = M, t[39] = N, t[40] = P) : P = t[40], P
    }, pt = e => {
        "use forget";
        let t = (0, it.c)(3),
            n = c(rt),
            r;
        return t[0] !== e || t[1] !== n ? (r = (0, Q.jsx)(ye, {
            ...e,
            workspaceId: n
        }), t[0] = e, t[1] = n, t[2] = r) : r = t[2], r
    }, $ = _({
        openActionPlaceholder: {
            id: `oTiWB2`,
            defaultMessage: `Parameter Constraints`
        },
        noDescription: {
            id: `6DgzBU`,
            defaultMessage: `No description provided.`
        },
        constraintsDisabledBySync: {
            id: `D4DK8f`,
            defaultMessage: `Sync is enabled for this app. Parameter constraints only apply when sync is off.`
        },
        syncEnabledConstraintsNotice: {
            id: `jiVclO`,
            defaultMessage: `Parameter Constraints apply only to the direct app tools shown above. They do not limit content retrieved from this app’s synced data.`
        },
        noActionsLabel: {
            id: `139ppy`,
            defaultMessage: `No tools are available for this app.`
        },
        actionsControlModalTitle: {
            id: `chatgpt.contextual_answers.admin.app_actions.policy_modal.title`,
            defaultMessage: `What tools should be available?`
        },
        policyActionsDescription: {
            id: `chatgpt.contextual_answers.admin.app_actions.policy_modal.description`,
            defaultMessage: `Available tools in {app}:`
        },
        unconfiguredActionsToggleLabel: {
            id: `chatgpt.contextual_answers.admin.app_actions.policy_modal.future_releases.option.all_new.label`,
            defaultMessage: `Enable all new tools`
        },
        unconfiguredReadActionsToggleLabel: {
            id: `chatgpt.contextual_answers.admin.app_actions.policy_modal.future_releases.option.new_read_only.label`,
            defaultMessage: `Only enable new read tools`
        },
        unconfiguredNoActionsToggleLabel: {
            id: `chatgpt.contextual_answers.admin.app_actions.policy_modal.future_releases.option.keep_disabled.label`,
            defaultMessage: `Disable new tools`
        },
        unconfiguredActionsDescription: {
            id: `chatgpt.contextual_answers.admin.app_actions.policy_modal.future_releases.description`,
            defaultMessage: `In the future, when new tools are added to {app}:`
        },
        confirmLabel: {
            id: `med53c`,
            defaultMessage: `Confirm`
        },
        readActionsSectionLabel: {
            id: `F3q+J6`,
            defaultMessage: `Read tools`
        },
        writeActionsSectionLabel: {
            id: `4Ezvi0`,
            defaultMessage: `Write tools`
        },
        enabledActionsCountLabel: {
            id: `chatgpt.contextual_answers.admin.app_actions.policy_modal.enabled_actions_count_label`,
            defaultMessage: `{enabledCount} of {totalCount} enabled`
        },
        viewActionDetailsLabel: {
            id: `chatgpt.contextual_answers.admin.app_actions.policy_modal.view_details`,
            defaultMessage: `View details`
        },
        hideActionDetailsLabel: {
            id: `chatgpt.contextual_answers.admin.app_actions.policy_modal.hide_details`,
            defaultMessage: `Hide details`
        },
        refreshLabel: {
            id: `e0MhOD`,
            defaultMessage: `Refresh`
        },
        refreshActionsError: {
            id: `AHelUR`,
            defaultMessage: `Failed to refresh app tools`
        },
        needLink: {
            id: `7khSUy`,
            defaultMessage: `This app must be connected to refresh its tools.`
        }
    })
}));
export {
    mt as i, pt as n, ft as r, dt as t
};
//# sourceMappingURL=46874983-cnusm2mws1ajg6rr.js.map