import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    C1 as n,
    J5 as r,
    JT as i,
    L1 as a,
    Mz as o,
    N1 as s,
    N5 as c,
    Nz as l,
    P7 as ee,
    R7 as u,
    RU as d,
    Sw as te,
    Xy as ne,
    Y5 as f,
    Zy as p,
    h8 as m,
    qT as h,
    ww as re,
    zU as ie
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as ae,
    Ln as g,
    N as _,
    Nn as v,
    O as y,
    Rn as b,
    Vn as x,
    p as oe,
    s as S,
    wn as C,
    zn as se
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    D3t as w,
    FQ as T,
    UQ as E,
    VQ as ce,
    Zrt as D,
    ait as le,
    eTn as O,
    oKn as ue,
    sKn as k,
    sit as A,
    tTn as j,
    vPn as de,
    w3t as M,
    xPn as N
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    DC as fe,
    EC as pe,
    Ov as P,
    TC as F,
    kv as I,
    wC as L
} from "./30901919-7dzdc1ou0jtwkwpt.js";
import {
    Cx as R,
    Qv as z,
    _x as me,
    ay as B,
    bx as he,
    iy as V,
    vx as ge,
    wx as H,
    yx as U
} from "./c2675c8c-9bs3zsr3vq259es7.js";
import {
    a as W,
    r as G,
    t as K
} from "./832dbd3a-kczb4igcdcx4itca.js";
import {
    n as _e,
    t as q
} from "./99a48954-di1yvdw6ghqm4hqh.js";
import {
    d as ve,
    f as ye,
    g as be,
    h as xe,
    m as J,
    p as Se
} from "./b7c53a83-f9g9gvgk4j59c3c0.js";
import {
    a as Ce,
    i as we,
    n as Te,
    o as Ee,
    r as De,
    t as Oe
} from "./b00adf98-my1gjul6yvyuxofk.js";
import {
    n as ke,
    o as Ae,
    s as je
} from "./e1258b01-e4w4cezsgms4ti7w.js";
import {
    a as Me,
    i as Ne,
    n as Pe,
    o as Y,
    r as Fe,
    t as Ie
} from "./16e34fcb-gnzp094luetotemj.js";
import {
    n as Le,
    t as Re
} from "./f4ec23bf-b9of8rfqpvbzz6no.js";

function ze(e) {
    return e.stopPropagation()
}

function Be(e) {
    return e.is_read_only
}

function Ve(e) {
    return !e.is_read_only
}

function He(e) {
    return e.name
}

function Ue(e) {
    return e.name
}

function We(e) {
    return e.name
}

function Ge(e, t) {
    return e.length > 0 && e.every(e => t.has(e))
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
    return !e
}

function Xe(e) {
    return e.name
}

function X(e) {
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
    return de({
        fetchValidLinksOnly: !0,
        productSku: O.ADMIN_SETTING
    })
}

function tt() {
    return K()
}

function nt() {
    return n()?.normalizedAccountUserId
}

function rt() {
    return n()?.getWorkspaceId()
}
var it, Z, Q, at, ot, st, ct, lt, ut, dt, ft, pt, $, mt = e((() => {
    it = C(), be(), _e(), U(), D(), i(), k(), fe(), F(), I(), l(), re(), p(), w(), N(), W(), T(), j(), R(), m(), a(), ie(), u(), S(), f(), Z = t(x()), b(), Ce(), J(), ye(), z(), je(), Fe(), Re(), Q = ae(), at = new Set([`deleted`]), ot = `text-blue-500 dark:text-blue-400`, st = e => e.knowledgeConfig.some(e => e.connections.some(e => !at.has(e.connection_status))), ct = e => {
        "use forget";
        let t = (0, it.c)(6),
            {
                showActionDetails: n
            } = e,
            r = n === void 0 || n,
            i;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, Q.jsx)(ue, {
            id: `action-toggle-skeleton`,
            checked: !1,
            disabled: !0
        }), t[0] = i) : i = t[0];
        let a;
        t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, Q.jsx)(`div`, {
            className: `flex-1 space-y-0.5`,
            children: (0, Q.jsx)(M, {})
        }), t[1] = a) : a = t[1];
        let o;
        t[2] === r ? o = t[3] : (o = r && (0, Q.jsxs)(`div`, {
            className: `border-token-border-default relative col-start-2 overflow-hidden rounded-xl border`,
            children: [(0, Q.jsx)(`div`, {
                className: `from-token-bg-tertiary/30 to-token-bg-tertiary absolute inset-0 z-10 h-full bg-gradient-to-b`,
                "aria-hidden": `true`
            }), (0, Q.jsx)(`pre`, {
                className: `bg-token-bg-tertiary h-24 w-full overflow-hidden px-3 py-2`,
                children: (0, Q.jsx)(M, {
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
                actionDelta: i,
                prevAction: a,
                isEnabled: s,
                onToggle: c,
                onOpenConstraints: l,
                constraintsDisabled: ee,
                showActionDetails: u,
                showActionTypeBadges: d,
                showRowBorder: te,
                indented: f,
                disabled: p
            } = e,
            m = ee !== void 0 && ee,
            h = u === void 0 || u,
            re = d === void 0 || d,
            ie = te === void 0 || te,
            ae = f !== void 0 && f,
            g = p !== void 0 && p,
            _ = se(),
            y;
        if (t[0] !== n.name) {
            let e;
            t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (e = /[^a-zA-Z0-9_-]/g, t[2] = e) : e = t[2], y = n.name.replace(e, `-`), t[0] = n.name, t[1] = y
        } else y = t[1];
        let b = y,
            x;
        t[3] === n ? x = t[4] : (x = we(n), t[3] = n, t[4] = x);
        let oe = `action-toggle-${b}-${x}`,
            S, C, w, T, E, ce, D, le, O, k, A, j, de, M, N, fe, pe;
        if (t[5] !== n || t[6] !== m || t[7] !== g || t[8] !== ae || t[9] !== _ || t[10] !== s || t[11] !== l || t[12] !== c || t[13] !== b || t[14] !== re || t[15] !== ie || t[16] !== oe) {
            let e;
            t[34] === re ? e = t[35] : (e = e => re || e !== `read` && e !== `write`, t[34] = re, t[35] = e);
            let i = ge(n).filter(e),
                a;
            t[36] !== n || t[37] !== l ? (a = l !== void 0 && Ae(n), t[36] = n, t[37] = l, t[38] = a) : a = t[38], w = a;
            let ee = $.openActionPlaceholder,
                u = g || m,
                d;
            t[39] !== m || t[40] !== _ ? (d = m ? _.formatMessage($.constraintsDisabledBySync) : void 0, t[39] = m, t[40] = _, t[41] = d) : d = t[41], C = d;
            let te = `action-constraints-trigger-${b}`,
                ne;
            t[42] === _ ? ne = t[43] : (ne = _.formatMessage(ee), t[42] = _, t[43] = ne);
            let f;
            t[44] !== n || t[45] !== l ? (f = e => {
                e.preventDefault(), e.stopPropagation(), l?.(n)
            }, t[44] = n, t[45] = l, t[46] = f) : f = t[46];
            let p = u && `cursor-not-allowed`,
                h;
            t[47] === p ? h = t[48] : (h = r(`text-token-text-tertiary hover:bg-token-bg-secondary hover:text-token-text-primary flex size-8 items-center justify-center rounded-md opacity-0 transition-colors group-hover:opacity-100 focus-visible:opacity-100`, p), t[47] = p, t[48] = h);
            let v = `action-constraints-icon-${b}`,
                y;
            t[49] === v ? y = t[50] : (y = (0, Q.jsx)(o.SettingsWrench, {
                className: `h-4 w-4`,
                "data-testid": v,
                "aria-hidden": !0
            }), t[49] = v, t[50] = y);
            let x;
            t[51] !== u || t[52] !== ne || t[53] !== f || t[54] !== h || t[55] !== y ? (x = (0, Q.jsx)(`button`, {
                type: `button`,
                "aria-label": ne,
                onClick: f,
                disabled: u,
                className: h,
                children: y
            }), t[51] = u, t[52] = ne, t[53] = f, t[54] = h, t[55] = y, t[56] = x) : x = t[56];
            let se;
            t[57] !== te || t[58] !== x ? (se = (0, Q.jsx)(`span`, {
                "data-action-constraints-trigger": !0,
                "data-testid": te,
                className: `action-constraints-trigger flex self-center`,
                children: x
            }), t[57] = te, t[58] = x, t[59] = se) : se = t[59], S = se;
            let P;
            t[60] !== n.name || t[61] !== g || t[62] !== s || t[63] !== c ? (P = e => {
                if (g) return;
                let t = e.target;
                t instanceof Element && t.closest(`label, button, a, input, select, textarea, [role='checkbox'], [data-action-constraints-trigger], .action-constraints-trigger, .action-details`) || c(n.name, !s)
            }, t[60] = n.name, t[61] = g, t[62] = s, t[63] = c, t[64] = P) : P = t[64];
            let F = P,
                I = ae && `ps-7`,
                L = !g && `hover:bg-token-bg-tertiary`;
            t[65] !== I || t[66] !== L ? (fe = r(`group`, I, L), t[65] = I, t[66] = L, t[67] = fe) : fe = t[67];
            let R = ie && `border-token-border-default border-b group-last:border-0`,
                z = g ? `cursor-not-allowed` : `cursor-default`;
            t[68] !== R || t[69] !== z ? (N = r([`px-2 py-1`, R, z]), t[68] = R, t[69] = z, t[70] = N) : N = t[70], j = `action-toggle-row-${b}`, de = F;
            let B = !g && `cursor-pointer`;
            t[71] === B ? M = t[72] : (M = r(`grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 px-2 py-1.5`, B), t[71] = B, t[72] = M), le = oe, O = `contents cursor-pointer`, k = ze;
            let V;
            t[73] !== n.name || t[74] !== c ? (V = e => c(n.name, e.target.checked), t[73] = n.name, t[74] = c, t[75] = V) : V = t[75], t[76] !== g || t[77] !== s || t[78] !== V || t[79] !== oe ? (A = (0, Q.jsx)(ue, {
                id: oe,
                checked: s,
                onChange: V,
                disabled: g
            }), t[76] = g, t[77] = s, t[78] = V, t[79] = oe, t[80] = A) : A = t[80], D = `min-w-0`, E = `flex min-w-0 flex-wrap items-center gap-2`;
            let H = g && `text-token-text-secondary`,
                U;
            t[81] === H ? U = t[82] : (U = r([`font-mono text-sm font-medium`, H]), t[81] = H, t[82] = U), t[83] !== n.name || t[84] !== U ? (ce = (0, Q.jsx)(`div`, {
                className: U,
                children: n.name
            }), t[83] = n.name, t[84] = U, t[85] = ce) : ce = t[85], pe = `flex items-center gap-1 select-none`, T = he({
                badgeKeys: i,
                labels: me
            }), t[5] = n, t[6] = m, t[7] = g, t[8] = ae, t[9] = _, t[10] = s, t[11] = l, t[12] = c, t[13] = b, t[14] = re, t[15] = ie, t[16] = oe, t[17] = S, t[18] = C, t[19] = w, t[20] = T, t[21] = E, t[22] = ce, t[23] = D, t[24] = le, t[25] = O, t[26] = k, t[27] = A, t[28] = j, t[29] = de, t[30] = M, t[31] = N, t[32] = fe, t[33] = pe
        } else S = t[17], C = t[18], w = t[19], T = t[20], E = t[21], ce = t[22], D = t[23], le = t[24], O = t[25], k = t[26], A = t[27], j = t[28], de = t[29], M = t[30], N = t[31], fe = t[32], pe = t[33];
        let P;
        t[86] === i ? P = t[87] : (P = (0, Q.jsx)(Te, {
            delta: i
        }), t[86] = i, t[87] = P);
        let F;
        t[88] !== T || t[89] !== P || t[90] !== pe ? (F = (0, Q.jsxs)(`div`, {
            className: pe,
            children: [T, P]
        }), t[88] = T, t[89] = P, t[90] = pe, t[91] = F) : F = t[91];
        let I;
        t[92] !== E || t[93] !== ce || t[94] !== F ? (I = (0, Q.jsxs)(`div`, {
            className: E,
            children: [ce, F]
        }), t[92] = E, t[93] = ce, t[94] = F, t[95] = I) : I = t[95];
        let L;
        t[96] === n.description ? L = t[97] : (L = n.description ? n.description : (0, Q.jsx)(v, {
            ...$.noDescription
        }), t[96] = n.description, t[97] = L);
        let R;
        t[98] === L ? R = t[99] : (R = (0, Q.jsx)(`div`, {
            className: `text-token-text-tertiary line-clamp-2 text-xs leading-5 wrap-anywhere`,
            children: L
        }), t[98] = L, t[99] = R);
        let z;
        t[100] !== D || t[101] !== I || t[102] !== R ? (z = (0, Q.jsxs)(`div`, {
            className: D,
            children: [I, R]
        }), t[100] = D, t[101] = I, t[102] = R, t[103] = z) : z = t[103];
        let B;
        t[104] !== le || t[105] !== O || t[106] !== k || t[107] !== A || t[108] !== z ? (B = (0, Q.jsxs)(`label`, {
            htmlFor: le,
            className: O,
            onClick: k,
            children: [A, z]
        }), t[104] = le, t[105] = O, t[106] = k, t[107] = A, t[108] = z, t[109] = B) : B = t[109];
        let V;
        t[110] !== S || t[111] !== C || t[112] !== w ? (V = w && (C ? (0, Q.jsx)(ne, {
            label: C,
            className: `action-constraints-trigger self-center`,
            children: S
        }) : S), t[110] = S, t[111] = C, t[112] = w, t[113] = V) : V = t[113];
        let H;
        t[114] !== n || t[115] !== i || t[116] !== a || t[117] !== h ? (H = h && (0, Q.jsx)(`div`, {
            className: `col-start-2 col-end-4 min-w-0`,
            children: (0, Q.jsx)(De, {
                action: n,
                actionDelta: i,
                prevAction: a,
                initiallyCollapsed: !0
            })
        }), t[114] = n, t[115] = i, t[116] = a, t[117] = h, t[118] = H) : H = t[118];
        let U;
        t[119] !== j || t[120] !== de || t[121] !== M || t[122] !== B || t[123] !== V || t[124] !== H ? (U = (0, Q.jsxs)(`div`, {
            "data-testid": j,
            onPointerUp: de,
            className: M,
            children: [B, V, H]
        }), t[119] = j, t[120] = de, t[121] = M, t[122] = B, t[123] = V, t[124] = H, t[125] = U) : U = t[125];
        let W;
        t[126] !== N || t[127] !== U ? (W = (0, Q.jsx)(`div`, {
            className: N,
            children: U
        }), t[126] = N, t[127] = U, t[128] = W) : W = t[128];
        let G;
        return t[129] !== fe || t[130] !== W ? (G = (0, Q.jsx)(`li`, {
            className: fe,
            children: W
        }), t[129] = fe, t[130] = W, t[131] = G) : G = t[131], G
    }, ut = e => {
        "use forget";
        let t = (0, it.c)(160),
            {
                app: n,
                actions: i,
                prevActions: a,
                deltas: o,
                initialEnabledActions: s,
                initialCustomNewActionPolicy: c,
                onRefreshActions: l,
                refreshingActions: ee,
                onSubmit: u,
                submitting: d,
                onCancel: te,
                refreshHidden: f,
                onOpenConstraints: p,
                constraintsDisabled: m,
                confirmDisabled: re,
                showScrollDividers: ie,
                onScrollabilityChange: ae
            } = e,
            g = f !== void 0 && f,
            _ = m !== void 0 && m,
            y = re !== void 0 && re,
            b = ie !== void 0 && ie,
            x = se(),
            oe = (0, Z.useRef)(null),
            [S, C] = (0, Z.useState)(s),
            [w, T] = (0, Z.useState)(c),
            [E, ce] = (0, Z.useState)(!1),
            [D, le] = (0, Z.useState)(!1),
            O = (0, Z.useId)(),
            k = (0, Z.useId)(),
            A = (0, Z.useId)(),
            j = (0, Z.useId)(),
            de, M;
        t[0] === s ? (de = t[1], M = t[2]) : (de = () => {
            C(new Set(s))
        }, M = [s], t[0] = s, t[1] = de, t[2] = M), (0, Z.useEffect)(de, M);
        let N, fe;
        t[3] === c ? (N = t[4], fe = t[5]) : (N = () => {
            T(c)
        }, fe = [c], t[3] = c, t[4] = N, t[5] = fe), (0, Z.useEffect)(N, fe);
        let F;
        t[6] === n ? F = t[7] : (F = st(n), t[6] = n, t[7] = F);
        let I = F,
            R;
        if (t[8] !== i || t[9] !== o) {
            let e;
            t[11] === o ? e = t[12] : (e = (e, t) => (o.get(e.name) ?? Oe.Unmodified) - (o.get(t.name) ?? Oe.Unmodified) || e.name.localeCompare(t.name), t[11] = o, t[12] = e), R = [...i].sort(e), t[8] = i, t[9] = o, t[10] = R
        } else R = t[10];
        let z = R,
            me;
        t[13] === z ? me = t[14] : (me = z.filter(Be), t[13] = z, t[14] = me);
        let B = me,
            he;
        t[15] === z ? he = t[16] : (he = z.filter(Ve), t[15] = z, t[16] = he);
        let V = he,
            ge;
        t[17] === i ? ge = t[18] : (ge = i.map(He), t[17] = i, t[18] = ge);
        let H = ge,
            U;
        t[19] !== H || t[20] !== n.primaryConnector.id || t[21] !== S || t[22] !== s ? (U = Se({
            connectorId: n.primaryConnector.id,
            adminConfigurableActionNames: H,
            initialEnabledActionNames: s,
            nextEnabledActionNames: S
        }), t[19] = H, t[20] = n.primaryConnector.id, t[21] = S, t[22] = s, t[23] = U) : U = t[23];
        let W = U,
            G;
        t[24] === B ? G = t[25] : (G = B.map(Ue), t[24] = B, t[25] = G);
        let K = G,
            _e;
        t[26] === V ? _e = t[27] : (_e = V.map(We), t[26] = V, t[27] = _e);
        let q = _e,
            ye;
        t[28] !== H || t[29] !== S ? (ye = H.length > 0 && H.every(e => S.has(e)), t[28] = H, t[29] = S, t[30] = ye) : ye = t[30];
        let be = ye,
            xe;
        t[31] !== S || t[32] !== K ? (xe = K.length > 0 && K.every(e => S.has(e)), t[31] = S, t[32] = K, t[33] = xe) : xe = t[33];
        let J = xe,
            Ce;
        t[34] !== S || t[35] !== q ? (Ce = q.length > 0 && q.every(e => S.has(e)), t[34] = S, t[35] = q, t[36] = Ce) : Ce = t[36];
        let we = Ce,
            Te;
        if (t[37] !== S || t[38] !== K) {
            let e;
            t[40] === S ? e = t[41] : (e = e => S.has(e), t[40] = S, t[41] = e), Te = K.filter(e), t[37] = S, t[38] = K, t[39] = Te
        } else Te = t[39];
        let Ee = Te.length,
            De;
        if (t[42] !== S || t[43] !== q) {
            let e;
            t[45] === S ? e = t[46] : (e = e => S.has(e), t[45] = S, t[46] = e), De = q.filter(e), t[42] = S, t[43] = q, t[44] = De
        } else De = t[44];
        let ke = De.length,
            Ae;
        t[47] !== J || t[48] !== S || t[49] !== K ? (Ae = !J && K.some(e => S.has(e)), t[47] = J, t[48] = S, t[49] = K, t[50] = Ae) : Ae = t[50];
        let je = Ae,
            Me;
        t[51] !== we || t[52] !== S || t[53] !== q ? (Me = !we && q.some(e => S.has(e)), t[51] = we, t[52] = S, t[53] = q, t[54] = Me) : Me = t[54];
        let Ne = Me,
            Y = !!ee || d,
            Fe = Ge,
            Ie;
        t[55] !== H || t[56] !== be || t[57] !== J || t[58] !== S || t[59] !== K ? (Ie = (e, t) => {
            let n = new Set(S);
            for (let r of e) t ? n.add(r) : n.delete(r);
            let r = Fe(H, n),
                i = Fe(K, n);
            C(n), t && T(e => !be && r ? `custom_new_all` : !J && i && e !== `custom_new_all` ? `custom_new_read_only` : e)
        }, t[55] = H, t[56] = be, t[57] = J, t[58] = S, t[59] = K, t[60] = Ie) : Ie = t[60];
        let Le = Ie,
            Re;
        t[61] !== K || t[62] !== Le ? (Re = e => {
            Le(K, e)
        }, t[61] = K, t[62] = Le, t[63] = Re) : Re = t[63];
        let ze = Re,
            Xe;
        t[64] === ae ? Xe = t[65] : (Xe = () => {
            let e = oe.current;
            ae?.(e ? e.scrollHeight > e.clientHeight + 1 : !1)
        }, t[64] = ae, t[65] = Xe);
        let X = Xe,
            Ze, Qe;
        t[66] === X ? (Ze = t[67], Qe = t[68]) : (Ze = () => {
            X();
            let e = oe.current;
            if (!e) return;
            window.addEventListener(`resize`, X);
            let t;
            return typeof ResizeObserver < `u` && (t = new ResizeObserver(X), t.observe(e)), () => {
                window.removeEventListener(`resize`, X), t?.disconnect()
            }
        }, Qe = [X], t[66] = X, t[67] = Ze, t[68] = Qe), (0, Z.useEffect)(Ze, Qe);
        let $e;
        t[69] === X ? $e = t[70] : ($e = () => {
            let e = window.requestAnimationFrame(X);
            return () => window.cancelAnimationFrame(e)
        }, t[69] = X, t[70] = $e);
        let et;
        t[71] !== i.length || t[72] !== _ || t[73] !== E || t[74] !== ee || t[75] !== d || t[76] !== X || t[77] !== D ? (et = [i.length, _, E, ee, d, X, D], t[71] = i.length, t[72] = _, t[73] = E, t[74] = ee, t[75] = d, t[76] = X, t[77] = D, t[78] = et) : et = t[78], (0, Z.useEffect)($e, et);
        let tt;
        t[79] === Symbol.for(`react.memo_cache_sentinel`) ? (tt = [
            [`custom_new_all`, $.unconfiguredActionsToggleLabel],
            [`custom_new_read_only`, $.unconfiguredReadActionsToggleLabel],
            [`custom`, $.unconfiguredNoActionsToggleLabel]
        ], t[79] = tt) : tt = t[79];
        let nt = tt,
            rt;
        t[80] !== x || t[81] !== l || t[82] !== g || t[83] !== ee || t[84] !== d ? (rt = g ? null : (0, Q.jsx)(ne, {
            label: l ? void 0 : x.formatMessage($.needLink),
            children: (0, Q.jsx)(h, {
                size: `small`,
                color: `secondary`,
                loading: ee,
                disabled: !l || d,
                onClick: () => l?.(),
                children: (0, Q.jsx)(v, {
                    ...$.refreshLabel
                })
            })
        }), t[80] = x, t[81] = l, t[82] = g, t[83] = ee, t[84] = d, t[85] = rt) : rt = t[85];
        let at = rt,
            ct;
        t[86] === n.primaryConnector.name ? ct = t[87] : (ct = (0, Q.jsx)(`p`, {
            className: `text-token-text-secondary flex-1 pb-0 text-sm leading-5`,
            children: (0, Q.jsx)(v, {
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
        t[91] === _ ? dt = t[92] : (dt = _ && (0, Q.jsx)(`div`, {
            className: `border-token-border-default bg-token-bg-tertiary text-token-text-secondary rounded-lg border px-3 py-2 text-xs`,
            children: (0, Q.jsx)(v, {
                ...$.constraintsDisabledBySync
            })
        }), t[91] = _, t[92] = dt);
        let ft;
        t[93] !== n.primaryConnector.name || t[94] !== W || t[95] !== Le ? (ft = W.length > 0 && (0, Q.jsx)(ve, {
            appName: n.primaryConnector.name,
            onUndo: () => Le([...W], !0)
        }), t[93] = n.primaryConnector.name, t[94] = W, t[95] = Le, t[96] = ft) : ft = t[96];
        let pt;
        t[97] !== i.length || t[98] !== J || t[99] !== we || t[100] !== _ || t[101] !== o || t[102] !== Y || t[103] !== ze || t[104] !== S || t[105] !== Ee || t[106] !== ke || t[107] !== x || t[108] !== I || t[109] !== p || t[110] !== a || t[111] !== B || t[112] !== E || t[113] !== je || t[114] !== O || t[115] !== Le || t[116] !== q || t[117] !== V || t[118] !== D || t[119] !== Ne || t[120] !== k ? (pt = i.length === 0 ? (0, Q.jsx)(`p`, {
            className: `text-token-text-tertiary m-4 text-center text-xs italic`,
            children: (0, Q.jsx)(v, {
                ...$.noActionsLabel
            })
        }) : (0, Q.jsx)(Q.Fragment, {
            children: (0, Q.jsxs)(`div`, {
                className: `space-y-3`,
                children: [(0, Q.jsxs)(`div`, {
                    className: `border-token-border-default overflow-hidden rounded-lg border`,
                    children: [B.length > 0 && (0, Q.jsxs)(`div`, {
                        children: [(0, Q.jsxs)(`div`, {
                            "data-testid": `action-set-row-read`,
                            onPointerUp: e => {
                                if (Y) return;
                                let t = e.target;
                                t instanceof HTMLElement && t.closest(`label, button, input`) || ce(Ke)
                            },
                            className: r(`flex items-center justify-between gap-3 px-4 py-3 transition-colors`, Y ? `cursor-not-allowed` : `hover:bg-token-bg-tertiary cursor-pointer`),
                            children: [(0, Q.jsxs)(`label`, {
                                htmlFor: `action-toggle-all-read-actions`,
                                className: r(`flex min-w-0 items-center gap-3`, Y ? `cursor-not-allowed opacity-60` : `cursor-pointer`),
                                children: [(0, Q.jsx)(ue, {
                                    id: `action-toggle-all-read-actions`,
                                    checked: J,
                                    indeterminate: je,
                                    onChange: e => ze(e.target.checked),
                                    disabled: Y
                                }), (0, Q.jsxs)(`span`, {
                                    className: `inline-flex min-w-0 items-baseline gap-2 leading-6`,
                                    children: [(0, Q.jsx)(`span`, {
                                        className: `truncate`,
                                        children: (0, Q.jsx)(v, {
                                            ...$.readActionsSectionLabel
                                        })
                                    }), !J && (0, Q.jsx)(`span`, {
                                        className: `text-token-text-tertiary inline-flex text-sm leading-none`,
                                        children: (0, Q.jsx)(v, {
                                            ...$.enabledActionsCountLabel,
                                            values: {
                                                enabledCount: Ee,
                                                totalCount: B.length
                                            }
                                        })
                                    })]
                                })]
                            }), (0, Q.jsx)(`button`, {
                                type: `button`,
                                className: `text-token-text-secondary hover:bg-token-bg-secondary hover:text-token-text-primary flex size-8 shrink-0 items-center justify-center rounded-md transition-colors disabled:opacity-50`,
                                "aria-label": x.formatMessage(E ? $.hideActionDetailsLabel : $.viewActionDetailsLabel),
                                "aria-expanded": E,
                                "aria-controls": O,
                                onClick: () => ce(qe),
                                disabled: Y,
                                children: E ? (0, Q.jsx)(pe, {
                                    className: `h-4 w-4`,
                                    "aria-hidden": !0
                                }) : (0, Q.jsx)(L, {
                                    className: `h-4 w-4`,
                                    "aria-hidden": !0
                                })
                            })]
                        }), E && (0, Q.jsx)(`ul`, {
                            id: O,
                            className: `p-0`,
                            children: B.map(e => (0, Q.jsx)(lt, {
                                action: e,
                                actionDelta: o.get(e.name),
                                prevAction: a?.get(e.name)?.action,
                                isEnabled: S.has(e.name),
                                onToggle: (e, t) => Le([e], t),
                                disabled: Y,
                                onOpenConstraints: p,
                                constraintsDisabled: _,
                                showActionDetails: !1,
                                showActionTypeBadges: !1,
                                showRowBorder: !1,
                                indented: !0
                            }, e.name))
                        })]
                    }), V.length > 0 && (0, Q.jsxs)(`div`, {
                        className: r(B.length > 0 && `border-token-border-default border-t`),
                        children: [(0, Q.jsxs)(`div`, {
                            "data-testid": `action-set-row-write`,
                            onPointerUp: e => {
                                if (Y) return;
                                let t = e.target;
                                t instanceof HTMLElement && t.closest(`label, button, input`) || le(Je)
                            },
                            className: r(`flex items-center justify-between gap-3 px-4 py-3 transition-colors`, Y ? `cursor-not-allowed` : `hover:bg-token-bg-tertiary cursor-pointer`),
                            children: [(0, Q.jsxs)(`label`, {
                                htmlFor: `action-toggle-all-write-actions`,
                                className: r(`flex min-w-0 items-center gap-3`, Y ? `cursor-not-allowed opacity-60` : `cursor-pointer`),
                                children: [(0, Q.jsx)(ue, {
                                    id: `action-toggle-all-write-actions`,
                                    checked: we,
                                    indeterminate: Ne,
                                    onChange: e => Le(q, e.target.checked),
                                    disabled: Y
                                }), (0, Q.jsxs)(`span`, {
                                    className: `inline-flex min-w-0 items-baseline gap-2 leading-6`,
                                    children: [(0, Q.jsx)(`span`, {
                                        className: `truncate`,
                                        children: (0, Q.jsx)(v, {
                                            ...$.writeActionsSectionLabel
                                        })
                                    }), !we && (0, Q.jsx)(`span`, {
                                        className: `text-token-text-tertiary inline-flex text-sm leading-none`,
                                        children: (0, Q.jsx)(v, {
                                            ...$.enabledActionsCountLabel,
                                            values: {
                                                enabledCount: ke,
                                                totalCount: V.length
                                            }
                                        })
                                    })]
                                })]
                            }), (0, Q.jsx)(`button`, {
                                type: `button`,
                                className: `text-token-text-secondary hover:bg-token-bg-secondary hover:text-token-text-primary flex size-8 shrink-0 items-center justify-center rounded-md transition-colors disabled:opacity-50`,
                                "aria-label": x.formatMessage(D ? $.hideActionDetailsLabel : $.viewActionDetailsLabel),
                                "aria-expanded": D,
                                "aria-controls": k,
                                onClick: () => le(Ye),
                                disabled: Y,
                                children: D ? (0, Q.jsx)(pe, {
                                    className: `h-4 w-4`,
                                    "aria-hidden": !0
                                }) : (0, Q.jsx)(L, {
                                    className: `h-4 w-4`,
                                    "aria-hidden": !0
                                })
                            })]
                        }), D && (0, Q.jsx)(`ul`, {
                            id: k,
                            className: `p-0`,
                            children: V.map(e => (0, Q.jsx)(lt, {
                                action: e,
                                actionDelta: o.get(e.name),
                                prevAction: a?.get(e.name)?.action,
                                isEnabled: S.has(e.name),
                                onToggle: (e, t) => Le([e], t),
                                disabled: Y,
                                onOpenConstraints: p,
                                constraintsDisabled: _,
                                showActionDetails: !1,
                                showActionTypeBadges: !1,
                                showRowBorder: !1,
                                indented: !0
                            }, e.name))
                        })]
                    })]
                }), I && p && (0, Q.jsx)(`div`, {
                    className: `mt-2 space-y-2`,
                    children: (0, Q.jsxs)(`div`, {
                        className: `bg-token-bg-tertiary text-token-text-secondary flex items-center gap-3 rounded-lg px-4 py-3 text-sm leading-6`,
                        children: [(0, Q.jsx)(P, {
                            className: `h-4 w-4 shrink-0`
                        }), (0, Q.jsx)(`span`, {
                            children: (0, Q.jsx)(v, {
                                ...$.syncEnabledConstraintsNotice
                            })
                        })]
                    })
                })]
            })
        }), t[97] = i.length, t[98] = J, t[99] = we, t[100] = _, t[101] = o, t[102] = Y, t[103] = ze, t[104] = S, t[105] = Ee, t[106] = ke, t[107] = x, t[108] = I, t[109] = p, t[110] = a, t[111] = B, t[112] = E, t[113] = je, t[114] = O, t[115] = Le, t[116] = q, t[117] = V, t[118] = D, t[119] = Ne, t[120] = k, t[121] = pt) : pt = t[121];
        let mt;
        t[122] !== ut || t[123] !== dt || t[124] !== ft || t[125] !== pt ? (mt = (0, Q.jsxs)(`div`, {
            ref: oe,
            className: `min-h-0 flex-1 space-y-3 overflow-y-auto px-6 pt-2 pb-3`,
            children: [ut, dt, ft, pt]
        }), t[122] = ut, t[123] = dt, t[124] = ft, t[125] = pt, t[126] = mt) : mt = t[126];
        let ht;
        t[127] !== i.length || t[128] !== n.primaryConnector.name || t[129] !== w || t[130] !== Y || t[131] !== b || t[132] !== j || t[133] !== A ? (ht = i.length > 0 && (0, Q.jsxs)(`div`, {
            className: r(`shrink-0 space-y-3 px-6 pt-1 pb-6`, b && `border-token-border-default border-t pt-4`),
            children: [(0, Q.jsx)(`div`, {
                id: A,
                className: `text-token-text-secondary text-sm leading-5`,
                children: (0, Q.jsx)(v, {
                    ...$.unconfiguredActionsDescription,
                    values: {
                        app: n.primaryConnector.name
                    }
                })
            }), (0, Q.jsx)(`div`, {
                role: `radiogroup`,
                "aria-labelledby": A,
                className: `text-token-text-secondary flex flex-col items-start gap-3 text-sm`,
                children: nt.map(e => {
                    let [t, n] = e;
                    return (0, Q.jsxs)(`label`, {
                        className: `flex cursor-pointer items-center gap-2`,
                        children: [(0, Q.jsx)(`input`, {
                            type: `radio`,
                            name: j,
                            value: t,
                            className: ot,
                            checked: w === t,
                            onChange: () => T(t),
                            disabled: Y
                        }), (0, Q.jsx)(`span`, {
                            children: (0, Q.jsx)(v, {
                                ...n
                            })
                        })]
                    }, t)
                })
            })]
        }), t[127] = i.length, t[128] = n.primaryConnector.name, t[129] = w, t[130] = Y, t[131] = b, t[132] = j, t[133] = A, t[134] = ht) : ht = t[134];
        let gt = b && i.length === 0 && `border-token-border-default border-t pt-4`,
            _t;
        t[135] === gt ? _t = t[136] : (_t = r(`flex shrink-0 justify-end gap-2 px-6 pt-0 pb-6`, gt), t[135] = gt, t[136] = _t);
        let vt;
        t[137] === Symbol.for(`react.memo_cache_sentinel`) ? (vt = (0, Q.jsx)(v, {
            id: `59bwQY`,
            defaultMessage: `Cancel`
        }), t[137] = vt) : vt = t[137];
        let yt;
        t[138] !== Y || t[139] !== te ? (yt = (0, Q.jsx)(h, {
            color: `secondary`,
            onClick: te,
            disabled: Y,
            children: vt
        }), t[138] = Y, t[139] = te, t[140] = yt) : yt = t[140];
        let bt;
        t[141] !== H || t[142] !== w || t[143] !== S || t[144] !== u || t[145] !== K ? (bt = () => u({
            enabledActions: Array.from(S),
            actionPolicy: Pe({
                actionIds: H,
                readOnlyActionIds: K,
                enabledActions: S,
                customNewActionPolicy: w
            })
        }), t[141] = H, t[142] = w, t[143] = S, t[144] = u, t[145] = K, t[146] = bt) : bt = t[146];
        let xt = Y || y,
            St;
        t[147] === Symbol.for(`react.memo_cache_sentinel`) ? (St = (0, Q.jsx)(v, {
            ...$.confirmLabel
        }), t[147] = St) : St = t[147];
        let Ct;
        t[148] !== d || t[149] !== bt || t[150] !== xt ? (Ct = (0, Q.jsx)(h, {
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
                onClose: r,
                onCancel: i,
                onConfirm: a,
                initialEnabledActions: o,
                initialActionPolicy: l,
                initialActionPolicyLoading: ee,
                showOverlayBackground: u,
                submitting: ne,
                showParameterConstraints: f
            } = e,
            p = l === void 0 ? null : l,
            m = ee !== void 0 && ee,
            h = u === void 0 || u,
            re = ne !== void 0 && ne,
            ie = f === void 0 || f,
            ae = se(),
            g = _(),
            [y, b] = (0, Z.useState)(null),
            [x, S] = (0, Z.useState)(!1),
            C = (0, Z.useRef)(!1),
            w;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (w = {
            forceEnable: !0
        }, t[0] = w) : w = t[0];
        let {
            actions: T,
            isLoading: D,
            refetch: ue
        } = E(n.primaryConnector, O.ADMIN_SETTING, w), k;
        t[1] === T ? k = t[2] : (k = T.filter(Ne), t[1] = T, t[2] = k);
        let j = k,
            de;
        bb0: {
            if (o) {
                let e;
                t[3] === j ? e = t[4] : (e = new Set(j.map(Xe)), t[3] = j, t[4] = e);
                let n = e,
                    r;
                t[5] === o ? r = t[6] : (r = Array.from(o), t[5] = o, t[6] = r);
                let i;
                t[7] !== r || t[8] !== n ? (i = new Set(r.filter(e => n.has(e))), t[7] = r, t[8] = n, t[9] = i) : i = t[9], de = i;
                break bb0
            }
            let e;t[10] === j ? e = t[11] : (e = new Set(j.filter(X).map(Ze)), t[10] = j, t[11] = e),
            de = e
        }
        let M = de,
            [N, fe] = (0, Z.useState)(Ie),
            pe, P;
        t[12] !== D || t[13] !== p || t[14] !== m ? (P = () => {
            C.current || D || m || (fe(Y(p)), C.current = !0)
        }, pe = [D, p, m], t[12] = D, t[13] = p, t[14] = m, t[15] = pe, t[16] = P) : (pe = t[15], P = t[16]), (0, Z.useEffect)(P, pe);
        let F;
        if (t[17] !== j) {
            F = new Map;
            for (let e of j) F.set(e.name, {
                action: e,
                hash: we(e)
            });
            t[17] = j, t[18] = F
        } else F = t[18];
        let I = F,
            [L, R] = (0, Z.useState)(null),
            z = Ee(I, L),
            me;
        t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (me = s()?.getWorkspaceId(), t[19] = me) : me = t[19];
        let B = me,
            he = ce(),
            ge = V(),
            U = (0, Z.useRef)(!1),
            W;
        t[20] !== n || t[21] !== ie ? (W = ke({
            app: n,
            showParameterConstraints: ie
        }), t[20] = n, t[21] = ie, t[22] = W) : W = t[22];
        let G = W,
            K, _e;
        t[23] !== D || t[24] !== n.primaryConnector.actions_changed_since_review || t[25] !== n.primaryConnector.id || t[26] !== ge || t[27] !== he || t[28] !== j ? (K = () => {
            if (U.current || !B || !n.primaryConnector.actions_changed_since_review || D) return;
            U.current = !0;
            let e = j.filter(Qe).map($e);
            (async () => {
                await A(n.primaryConnector.id, B, e), he(), ge(n.primaryConnector.id)
            })()
        }, _e = [D, n.primaryConnector.actions_changed_since_review, n.primaryConnector.id, ge, he, j, B], t[23] = D, t[24] = n.primaryConnector.actions_changed_since_review, t[25] = n.primaryConnector.id, t[26] = ge, t[27] = he, t[28] = j, t[29] = K, t[30] = _e) : (K = t[29], _e = t[30]), (0, Z.useEffect)(K, _e);
        let q;
        t[31] === Symbol.for(`react.memo_cache_sentinel`) ? (q = d(), t[31] = q) : q = t[31];
        let ve = q,
            ye;
        t[32] !== I || t[33] !== L || t[34] !== ue ? (ye = async e => {
            L || R(I), await le(e), await ue()
        }, t[32] = I, t[33] = L, t[34] = ue, t[35] = ye) : ye = t[35];
        let be;
        t[36] !== n.primaryConnector.id || t[37] !== g ? (be = () => {
            g.invalidateQueries({
                queryKey: [`connector-action-clamp`, n.primaryConnector.id]
            })
        }, t[36] = n.primaryConnector.id, t[37] = g, t[38] = be) : be = t[38];
        let xe;
        t[39] === Symbol.for(`react.memo_cache_sentinel`) ? (xe = e => {
            ve.danger($.refreshActionsError, {
                error: e
            })
        }, t[39] = xe) : xe = t[39];
        let J;
        t[40] !== ye || t[41] !== be ? (J = {
            mutationFn: ye,
            onSuccess: be,
            onError: xe
        }, t[40] = ye, t[41] = be, t[42] = J) : J = t[42];
        let Se = oe(J),
            {
                data: Ce
            } = c(et),
            Te = Le(Ce, n.primaryConnector.id),
            De = H(n.primaryConnector),
            Oe;
        t[43] === ae ? Oe = t[44] : (Oe = ae.formatMessage($.actionsControlModalTitle), t[43] = ae, t[44] = Oe);
        let Ae;
        t[45] !== z || t[46] !== D || t[47] !== n || t[48] !== G || t[49] !== M || t[50] !== m || t[51] !== De || t[52] !== Te || t[53] !== i || t[54] !== a || t[55] !== x || t[56] !== L || t[57] !== Se || t[58] !== N || t[59] !== re || t[60] !== j ? (Ae = D && !Se.isPending ? (0, Q.jsxs)(`div`, {
            className: `space-y-4 overflow-y-auto px-6 pt-2 pb-6`,
            children: [(0, Q.jsx)(`p`, {
                className: `text-token-text-secondary pb-0 text-sm leading-5`,
                children: (0, Q.jsx)(v, {
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
            actions: j,
            prevActions: L,
            deltas: z,
            initialEnabledActions: M,
            initialCustomNewActionPolicy: N,
            onSubmit: a,
            onCancel: i,
            refreshingActions: Se.isPending,
            submitting: re || m,
            confirmDisabled: j.length === 0,
            refreshHidden: !De,
            onRefreshActions: De && Te !== void 0 ? () => {
                Se.mutate(Te.id)
            } : void 0,
            onOpenConstraints: G ? e => b(e) : void 0,
            constraintsDisabled: !1,
            showScrollDividers: x,
            onScrollabilityChange: S
        }), t[45] = z, t[46] = D, t[47] = n, t[48] = G, t[49] = M, t[50] = m, t[51] = De, t[52] = Te, t[53] = i, t[54] = a, t[55] = x, t[56] = L, t[57] = Se, t[58] = N, t[59] = re, t[60] = j, t[61] = Ae) : Ae = t[61];
        let je;
        t[62] !== r || t[63] !== x || t[64] !== h || t[65] !== Oe || t[66] !== Ae ? (je = (0, Q.jsx)(te, {
            isOpen: !0,
            onClose: r,
            showOverlayBackground: h,
            testId: `modal-app-actions-control`,
            title: Oe,
            size: `custom`,
            className: `max-w-5xl`,
            hasSeparator: x,
            noPadding: !0,
            isScrollable: !1,
            headerClassName: `!px-6 !pt-6 !pb-2`,
            contentClassName: `flex flex-col max-h-[80vh]`,
            children: Ae
        }), t[62] = r, t[63] = x, t[64] = h, t[65] = Oe, t[66] = Ae, t[67] = je) : je = t[67];
        let Me;
        t[68] !== n || t[69] !== G || t[70] !== y ? (Me = G && y && (0, Q.jsx)(pt, {
            app: n,
            onClose: () => b(null),
            onBack: () => b(null),
            showOverlayBackground: !0,
            initialSelectedAction: y
        }), t[68] = n, t[69] = G, t[70] = y, t[71] = Me) : Me = t[71];
        let Pe;
        return t[72] !== je || t[73] !== Me ? (Pe = (0, Q.jsxs)(Q.Fragment, {
            children: [je, Me]
        }), t[72] = je, t[73] = Me, t[74] = Pe) : Pe = t[74], Pe
    }, ft = e => {
        "use forget";
        let t = (0, it.c)(41),
            {
                app: n,
                onClose: r
            } = e,
            i = se(),
            a;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (a = s()?.getWorkspaceId(), t[0] = a) : a = t[0];
        let o = a,
            l;
        t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (l = d(), t[1] = l) : l = t[1];
        let u = l,
            te = _(),
            ne = ce(),
            f = V(),
            p = B(),
            m = c(tt),
            h = c(nt),
            re = !!o,
            ie;
        t[2] !== n.primaryConnector.id || t[3] !== m ? (ie = () => {
            G(m, o ?? ``, n.primaryConnector.id, re)
        }, t[2] = n.primaryConnector.id, t[3] = m, t[4] = ie) : ie = t[4];
        let ae;
        t[5] !== n.primaryConnector.id || t[6] !== h || t[7] !== m ? (ae = [m, h, o, n.primaryConnector.id, re], t[5] = n.primaryConnector.id, t[6] = h, t[7] = m, t[8] = ae) : ae = t[8], (0, Z.useEffect)(ie, ae);
        let g;
        t[9] !== n.primaryConnector.id || t[10] !== h || t[11] !== m ? (g = q({
            queryKeyPrefix: `connector-workspace-permissions`,
            workspaceId: o,
            connectorId: n.primaryConnector.id,
            enabled: re,
            transport: m,
            actorId: h
        }), t[9] = n.primaryConnector.id, t[10] = h, t[11] = m, t[12] = g) : g = t[12];
        let {
            data: v,
            isLoading: b
        } = y(g), x;
        t[13] !== n.primaryConnector.id || t[14] !== f || t[15] !== p || t[16] !== ne || t[17] !== te ? (x = async e => {
            let {
                enabledActions: t,
                actionPolicy: r
            } = e;
            if (!o) throw Error(`Workspace ID is required to update app actions.`);
            let i = {
                enabled: !0,
                enabled_actions: t
            };
            r && (i.action_policy = r), await ee.safePost(`/accounts/{account_id}/connectors/{connector_id}/workspace_permissions`, {
                parameters: {
                    path: {
                        account_id: o,
                        connector_id: n.primaryConnector.id
                    }
                },
                requestBody: i
            }), ne(), f(n.primaryConnector.id), await te.invalidateQueries({
                queryKey: [`connector-actions`, n.primaryConnector.id]
            }), await te.invalidateQueries({
                queryKey: [`connector-workspace-permissions`, o, n.primaryConnector.id]
            }), await p()
        }, t[13] = n.primaryConnector.id, t[14] = f, t[15] = p, t[16] = ne, t[17] = te, t[18] = x) : x = t[18];
        let S;
        t[19] !== i || t[20] !== r ? (S = () => {
            u.success(i.formatMessage({
                id: `AW+VoO`,
                defaultMessage: `App tools updated successfully.`
            })), r()
        }, t[19] = i, t[20] = r, t[21] = S) : S = t[21];
        let C;
        t[22] === i ? C = t[23] : (C = () => {
            u.danger(i.formatMessage({
                id: `IRGvbN`,
                defaultMessage: `Failed to update app tools. Please try again.`
            }))
        }, t[22] = i, t[23] = C);
        let w;
        t[24] !== x || t[25] !== S || t[26] !== C ? (w = {
            mutationFn: x,
            onSuccess: S,
            onError: C
        }, t[24] = x, t[25] = S, t[26] = C, t[27] = w) : w = t[27];
        let {
            mutateAsync: T,
            isPending: E
        } = oe(w), D;
        t[28] !== r || t[29] !== E ? (D = () => {
            E || r()
        }, t[28] = r, t[29] = E, t[30] = D) : D = t[30];
        let le = D,
            O = v?.action_policy,
            ue = v?.enabled_actions,
            k;
        t[31] !== O || t[32] !== ue ? (k = Me({
            actionPolicy: O,
            enabledActions: ue
        }), t[31] = O, t[32] = ue, t[33] = k) : k = t[33];
        let A = !!o && b,
            j;
        return t[34] !== n || t[35] !== le || t[36] !== T || t[37] !== E || t[38] !== k || t[39] !== A ? (j = (0, Q.jsx)(dt, {
            app: n,
            onClose: le,
            onCancel: le,
            onConfirm: T,
            submitting: E,
            initialActionPolicy: k,
            initialActionPolicyLoading: A
        }), t[34] = n, t[35] = le, t[36] = T, t[37] = E, t[38] = k, t[39] = A, t[40] = j) : j = t[40], j
    }, pt = e => {
        "use forget";
        let t = (0, it.c)(3),
            n = c(rt),
            r;
        return t[0] !== e || t[1] !== n ? (r = (0, Q.jsx)(xe, {
            ...e,
            workspaceId: n
        }), t[0] = e, t[1] = n, t[2] = r) : r = t[2], r
    }, $ = g({
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
//# sourceMappingURL=46874983-bz3f79lnofdouqc4.js.map