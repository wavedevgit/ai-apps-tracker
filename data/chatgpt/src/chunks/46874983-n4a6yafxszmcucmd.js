import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    A8 as r,
    Aw as i,
    Bz as a,
    I7 as o,
    IU as s,
    K5 as c,
    LU as l,
    M7 as ee,
    N1 as u,
    Ow as te,
    Qy as d,
    U1 as ne,
    Vz as f,
    Zy as p,
    eE as m,
    j5 as h,
    q1 as re,
    q5 as ie
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as ae,
    Ln as g,
    N as _,
    Nn as v,
    O as y,
    Rn as oe,
    Vn as b,
    p as se,
    s as x,
    wn as S,
    zn as ce
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    E3t as C,
    Jrt as w,
    KQ as T,
    RQ as E,
    RTn as D,
    WQ as le,
    cqn as O,
    gFn as k,
    iit as A,
    k3t as j,
    nit as M,
    sqn as ue,
    yFn as N,
    zTn as P
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    CC as de,
    Dv as F,
    Ev as I,
    SC as fe,
    TC as L,
    wC as R
} from "./30901919-s8bko9nrkqwv6i4f.js";
import {
    Cx as pe,
    Ox as z,
    Sx as me,
    Tx as he,
    gy as B,
    hy as V,
    kx as H,
    ly as U,
    wx as W
} from "./c2675c8c-oz03twoan08d72ud.js";
import {
    a as G,
    r as K,
    t as q
} from "./832dbd3a-hbk6u3oq5isiaqp3.js";
import {
    n as ge,
    t as J
} from "./99a48954-i0bknqne6giw28e4.js";
import {
    d as _e,
    f as ve,
    g as ye,
    h as be,
    m as Y,
    p as xe
} from "./b7c53a83-jwwm4fccth457twi.js";
import {
    a as Se,
    i as Ce,
    n as we,
    o as Te,
    r as Ee,
    t as De
} from "./b00adf98-era7vi6h3xbjovoi.js";
import {
    n as Oe,
    o as ke,
    s as Ae
} from "./e1258b01-h30gw9gshi5r8pfl.js";
import {
    a as je,
    i as Me,
    n as Ne,
    o as X,
    r as Pe,
    t as Fe
} from "./16e34fcb-m1f86ci791o2gk1w.js";
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
    return k({
        fetchValidLinksOnly: !0,
        productSku: D.ADMIN_SETTING
    })
}

function tt() {
    return q()
}

function nt() {
    return u()?.normalizedAccountUserId
}

function rt() {
    return u()?.getWorkspaceId()
}
var it, Z, Q, at, ot, st, ct, lt, ut, dt, ft, pt, $, mt = e((() => {
    it = S(), ye(), ge(), W(), w(), m(), O(), L(), de(), F(), f(), i(), d(), j(), N(), G(), E(), P(), z(), r(), re(), l(), o(), x(), ie(), Z = t(b()), oe(), Se(), Y(), ve(), U(), Ae(), Pe(), Le(), Q = ae(), at = new Set([`deleted`]), ot = `text-blue-500 dark:text-blue-400`, st = e => e.knowledgeConfig.some(e => e.connections.some(e => !at.has(e.connection_status))), ct = e => {
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
            children: (0, Q.jsx)(C, {})
        }), t[1] = a) : a = t[1];
        let o;
        t[2] === r ? o = t[3] : (o = r && (0, Q.jsxs)(`div`, {
            className: `border-token-border-default relative col-start-2 overflow-hidden rounded-xl border`,
            children: [(0, Q.jsx)(`div`, {
                className: `from-token-bg-tertiary/30 to-token-bg-tertiary absolute inset-0 z-10 h-full bg-gradient-to-b`,
                "aria-hidden": `true`
            }), (0, Q.jsx)(`pre`, {
                className: `bg-token-bg-tertiary h-24 w-full overflow-hidden px-3 py-2`,
                children: (0, Q.jsx)(C, {
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
                isEnabled: o,
                onToggle: s,
                onOpenConstraints: l,
                constraintsDisabled: ee,
                showActionDetails: u,
                showActionTypeBadges: te,
                showRowBorder: d,
                indented: ne,
                disabled: f
            } = e,
            m = ee !== void 0 && ee,
            h = u === void 0 || u,
            re = te === void 0 || te,
            ie = d === void 0 || d,
            ae = ne !== void 0 && ne,
            g = f !== void 0 && f,
            _ = ce(),
            y;
        if (t[0] !== n.name) {
            let e;
            t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (e = /[^a-zA-Z0-9_-]/g, t[2] = e) : e = t[2], y = n.name.replace(e, `-`), t[0] = n.name, t[1] = y
        } else y = t[1];
        let oe = y,
            b;
        t[3] === n ? b = t[4] : (b = Ce(n), t[3] = n, t[4] = b);
        let se = `action-toggle-${oe}-${b}`,
            x, S, C, w, T, E, D, le, O, k, A, j, M, N, P, de, F;
        if (t[5] !== n || t[6] !== m || t[7] !== g || t[8] !== ae || t[9] !== _ || t[10] !== o || t[11] !== l || t[12] !== s || t[13] !== oe || t[14] !== re || t[15] !== ie || t[16] !== se) {
            let e;
            t[34] === re ? e = t[35] : (e = e => re || e !== `read` && e !== `write`, t[34] = re, t[35] = e);
            let r = pe(n).filter(e),
                i;
            t[36] !== n || t[37] !== l ? (i = l !== void 0 && ke(n), t[36] = n, t[37] = l, t[38] = i) : i = t[38], C = i;
            let ee = $.openActionPlaceholder,
                u = g || m,
                te;
            t[39] !== m || t[40] !== _ ? (te = m ? _.formatMessage($.constraintsDisabledBySync) : void 0, t[39] = m, t[40] = _, t[41] = te) : te = t[41], S = te;
            let d = `action-constraints-trigger-${oe}`,
                ne;
            t[42] === _ ? ne = t[43] : (ne = _.formatMessage(ee), t[42] = _, t[43] = ne);
            let f;
            t[44] !== n || t[45] !== l ? (f = e => {
                e.preventDefault(), e.stopPropagation(), l?.(n)
            }, t[44] = n, t[45] = l, t[46] = f) : f = t[46];
            let p = u && `cursor-not-allowed`,
                h;
            t[47] === p ? h = t[48] : (h = c(`text-token-text-tertiary hover:bg-token-bg-secondary hover:text-token-text-primary flex size-8 items-center justify-center rounded-md opacity-0 transition-colors group-hover:opacity-100 focus-visible:opacity-100`, p), t[47] = p, t[48] = h);
            let v = `action-constraints-icon-${oe}`,
                y;
            t[49] === v ? y = t[50] : (y = (0, Q.jsx)(a.SettingsWrench, {
                className: `h-4 w-4`,
                "data-testid": v,
                "aria-hidden": !0
            }), t[49] = v, t[50] = y);
            let b;
            t[51] !== u || t[52] !== ne || t[53] !== f || t[54] !== h || t[55] !== y ? (b = (0, Q.jsx)(`button`, {
                type: `button`,
                "aria-label": ne,
                onClick: f,
                disabled: u,
                className: h,
                children: y
            }), t[51] = u, t[52] = ne, t[53] = f, t[54] = h, t[55] = y, t[56] = b) : b = t[56];
            let ce;
            t[57] !== d || t[58] !== b ? (ce = (0, Q.jsx)(`span`, {
                "data-action-constraints-trigger": !0,
                "data-testid": d,
                className: `action-constraints-trigger flex self-center`,
                children: b
            }), t[57] = d, t[58] = b, t[59] = ce) : ce = t[59], x = ce;
            let I;
            t[60] !== n.name || t[61] !== g || t[62] !== o || t[63] !== s ? (I = e => {
                if (g) return;
                let t = e.target;
                t instanceof Element && t.closest(`label, button, a, input, select, textarea, [role='checkbox'], [data-action-constraints-trigger], .action-constraints-trigger, .action-details`) || s(n.name, !o)
            }, t[60] = n.name, t[61] = g, t[62] = o, t[63] = s, t[64] = I) : I = t[64];
            let fe = I,
                L = ae && `ps-7`,
                R = !g && `hover:bg-token-bg-tertiary`;
            t[65] !== L || t[66] !== R ? (de = c(`group`, L, R), t[65] = L, t[66] = R, t[67] = de) : de = t[67];
            let z = ie && `border-token-border-default border-b group-last:border-0`,
                B = g ? `cursor-not-allowed` : `cursor-default`;
            t[68] !== z || t[69] !== B ? (P = c([`px-2 py-1`, z, B]), t[68] = z, t[69] = B, t[70] = P) : P = t[70], j = `action-toggle-row-${oe}`, M = fe;
            let V = !g && `cursor-pointer`;
            t[71] === V ? N = t[72] : (N = c(`grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 px-2 py-1.5`, V), t[71] = V, t[72] = N), le = se, O = `contents cursor-pointer`, k = Re;
            let H;
            t[73] !== n.name || t[74] !== s ? (H = e => s(n.name, e.target.checked), t[73] = n.name, t[74] = s, t[75] = H) : H = t[75], t[76] !== g || t[77] !== o || t[78] !== H || t[79] !== se ? (A = (0, Q.jsx)(ue, {
                id: se,
                checked: o,
                onChange: H,
                disabled: g
            }), t[76] = g, t[77] = o, t[78] = H, t[79] = se, t[80] = A) : A = t[80], D = `min-w-0`, T = `flex min-w-0 flex-wrap items-center gap-2`;
            let U = g && `text-token-text-secondary`,
                W;
            t[81] === U ? W = t[82] : (W = c([`font-mono text-sm font-medium`, U]), t[81] = U, t[82] = W), t[83] !== n.name || t[84] !== W ? (E = (0, Q.jsx)(`div`, {
                className: W,
                children: n.name
            }), t[83] = n.name, t[84] = W, t[85] = E) : E = t[85], F = `flex items-center gap-1 select-none`, w = he({
                badgeKeys: r,
                labels: me
            }), t[5] = n, t[6] = m, t[7] = g, t[8] = ae, t[9] = _, t[10] = o, t[11] = l, t[12] = s, t[13] = oe, t[14] = re, t[15] = ie, t[16] = se, t[17] = x, t[18] = S, t[19] = C, t[20] = w, t[21] = T, t[22] = E, t[23] = D, t[24] = le, t[25] = O, t[26] = k, t[27] = A, t[28] = j, t[29] = M, t[30] = N, t[31] = P, t[32] = de, t[33] = F
        } else x = t[17], S = t[18], C = t[19], w = t[20], T = t[21], E = t[22], D = t[23], le = t[24], O = t[25], k = t[26], A = t[27], j = t[28], M = t[29], N = t[30], P = t[31], de = t[32], F = t[33];
        let I;
        t[86] === r ? I = t[87] : (I = (0, Q.jsx)(we, {
            delta: r
        }), t[86] = r, t[87] = I);
        let fe;
        t[88] !== w || t[89] !== I || t[90] !== F ? (fe = (0, Q.jsxs)(`div`, {
            className: F,
            children: [w, I]
        }), t[88] = w, t[89] = I, t[90] = F, t[91] = fe) : fe = t[91];
        let L;
        t[92] !== T || t[93] !== E || t[94] !== fe ? (L = (0, Q.jsxs)(`div`, {
            className: T,
            children: [E, fe]
        }), t[92] = T, t[93] = E, t[94] = fe, t[95] = L) : L = t[95];
        let R;
        t[96] === n.description ? R = t[97] : (R = n.description ? n.description : (0, Q.jsx)(v, {
            ...$.noDescription
        }), t[96] = n.description, t[97] = R);
        let z;
        t[98] === R ? z = t[99] : (z = (0, Q.jsx)(`div`, {
            className: `text-token-text-tertiary line-clamp-2 text-xs leading-5 wrap-anywhere`,
            children: R
        }), t[98] = R, t[99] = z);
        let B;
        t[100] !== D || t[101] !== L || t[102] !== z ? (B = (0, Q.jsxs)(`div`, {
            className: D,
            children: [L, z]
        }), t[100] = D, t[101] = L, t[102] = z, t[103] = B) : B = t[103];
        let V;
        t[104] !== le || t[105] !== O || t[106] !== k || t[107] !== A || t[108] !== B ? (V = (0, Q.jsxs)(`label`, {
            htmlFor: le,
            className: O,
            onClick: k,
            children: [A, B]
        }), t[104] = le, t[105] = O, t[106] = k, t[107] = A, t[108] = B, t[109] = V) : V = t[109];
        let H;
        t[110] !== x || t[111] !== S || t[112] !== C ? (H = C && (S ? (0, Q.jsx)(p, {
            label: S,
            className: `action-constraints-trigger self-center`,
            children: x
        }) : x), t[110] = x, t[111] = S, t[112] = C, t[113] = H) : H = t[113];
        let U;
        t[114] !== n || t[115] !== r || t[116] !== i || t[117] !== h ? (U = h && (0, Q.jsx)(`div`, {
            className: `col-start-2 col-end-4 min-w-0`,
            children: (0, Q.jsx)(Ee, {
                action: n,
                actionDelta: r,
                prevAction: i,
                initiallyCollapsed: !0
            })
        }), t[114] = n, t[115] = r, t[116] = i, t[117] = h, t[118] = U) : U = t[118];
        let W;
        t[119] !== j || t[120] !== M || t[121] !== N || t[122] !== V || t[123] !== H || t[124] !== U ? (W = (0, Q.jsxs)(`div`, {
            "data-testid": j,
            onPointerUp: M,
            className: N,
            children: [V, H, U]
        }), t[119] = j, t[120] = M, t[121] = N, t[122] = V, t[123] = H, t[124] = U, t[125] = W) : W = t[125];
        let G;
        t[126] !== P || t[127] !== W ? (G = (0, Q.jsx)(`div`, {
            className: P,
            children: W
        }), t[126] = P, t[127] = W, t[128] = G) : G = t[128];
        let K;
        return t[129] !== de || t[130] !== G ? (K = (0, Q.jsx)(`li`, {
            className: de,
            children: G
        }), t[129] = de, t[130] = G, t[131] = K) : K = t[131], K
    }, ut = e => {
        "use forget";
        let t = (0, it.c)(160),
            {
                app: r,
                actions: i,
                prevActions: a,
                deltas: o,
                initialEnabledActions: s,
                initialCustomNewActionPolicy: l,
                onRefreshActions: ee,
                refreshingActions: u,
                onSubmit: te,
                submitting: d,
                onCancel: ne,
                refreshHidden: f,
                onOpenConstraints: m,
                constraintsDisabled: h,
                confirmDisabled: re,
                showScrollDividers: ie,
                onScrollabilityChange: ae
            } = e,
            g = f !== void 0 && f,
            _ = h !== void 0 && h,
            y = re !== void 0 && re,
            oe = ie !== void 0 && ie,
            b = ce(),
            se = (0, Z.useRef)(null),
            [x, S] = (0, Z.useState)(s),
            [C, w] = (0, Z.useState)(l),
            [T, E] = (0, Z.useState)(!1),
            [D, le] = (0, Z.useState)(!1),
            O = (0, Z.useId)(),
            k = (0, Z.useId)(),
            A = (0, Z.useId)(),
            j = (0, Z.useId)(),
            M, N;
        t[0] === s ? (M = t[1], N = t[2]) : (M = () => {
            S(new Set(s))
        }, N = [s], t[0] = s, t[1] = M, t[2] = N), (0, Z.useEffect)(M, N);
        let P, de;
        t[3] === l ? (P = t[4], de = t[5]) : (P = () => {
            w(l)
        }, de = [l], t[3] = l, t[4] = P, t[5] = de), (0, Z.useEffect)(P, de);
        let F;
        t[6] === r ? F = t[7] : (F = st(r), t[6] = r, t[7] = F);
        let L = F,
            pe;
        if (t[8] !== i || t[9] !== o) {
            let e;
            t[11] === o ? e = t[12] : (e = (e, t) => (o.get(e.name) ?? De.Unmodified) - (o.get(t.name) ?? De.Unmodified) || e.name.localeCompare(t.name), t[11] = o, t[12] = e), pe = [...i].sort(e), t[8] = i, t[9] = o, t[10] = pe
        } else pe = t[10];
        let z = pe,
            me;
        t[13] === z ? me = t[14] : (me = z.filter(ze), t[13] = z, t[14] = me);
        let he = me,
            B;
        t[15] === z ? B = t[16] : (B = z.filter(Be), t[15] = z, t[16] = B);
        let V = B,
            H;
        t[17] === i ? H = t[18] : (H = i.map(Ve), t[17] = i, t[18] = H);
        let U = H,
            W;
        t[19] !== U || t[20] !== r.primaryConnector.id || t[21] !== x || t[22] !== s ? (W = xe({
            connectorId: r.primaryConnector.id,
            adminConfigurableActionNames: U,
            initialEnabledActionNames: s,
            nextEnabledActionNames: x
        }), t[19] = U, t[20] = r.primaryConnector.id, t[21] = x, t[22] = s, t[23] = W) : W = t[23];
        let G = W,
            K;
        t[24] === he ? K = t[25] : (K = he.map(He), t[24] = he, t[25] = K);
        let q = K,
            ge;
        t[26] === V ? ge = t[27] : (ge = V.map(Ue), t[26] = V, t[27] = ge);
        let J = ge,
            ve;
        t[28] !== U || t[29] !== x ? (ve = U.length > 0 && U.every(e => x.has(e)), t[28] = U, t[29] = x, t[30] = ve) : ve = t[30];
        let ye = ve,
            be;
        t[31] !== x || t[32] !== q ? (be = q.length > 0 && q.every(e => x.has(e)), t[31] = x, t[32] = q, t[33] = be) : be = t[33];
        let Y = be,
            Se;
        t[34] !== x || t[35] !== J ? (Se = J.length > 0 && J.every(e => x.has(e)), t[34] = x, t[35] = J, t[36] = Se) : Se = t[36];
        let Ce = Se,
            we;
        if (t[37] !== x || t[38] !== q) {
            let e;
            t[40] === x ? e = t[41] : (e = e => x.has(e), t[40] = x, t[41] = e), we = q.filter(e), t[37] = x, t[38] = q, t[39] = we
        } else we = t[39];
        let Te = we.length,
            Ee;
        if (t[42] !== x || t[43] !== J) {
            let e;
            t[45] === x ? e = t[46] : (e = e => x.has(e), t[45] = x, t[46] = e), Ee = J.filter(e), t[42] = x, t[43] = J, t[44] = Ee
        } else Ee = t[44];
        let Oe = Ee.length,
            ke;
        t[47] !== Y || t[48] !== x || t[49] !== q ? (ke = !Y && q.some(e => x.has(e)), t[47] = Y, t[48] = x, t[49] = q, t[50] = ke) : ke = t[50];
        let Ae = ke,
            je;
        t[51] !== Ce || t[52] !== x || t[53] !== J ? (je = !Ce && J.some(e => x.has(e)), t[51] = Ce, t[52] = x, t[53] = J, t[54] = je) : je = t[54];
        let Me = je,
            X = !!u || d,
            Pe = We,
            Fe;
        t[55] !== U || t[56] !== ye || t[57] !== Y || t[58] !== x || t[59] !== q ? (Fe = (e, t) => {
            let n = new Set(x);
            for (let r of e) t ? n.add(r) : n.delete(r);
            let r = Pe(U, n),
                i = Pe(q, n);
            S(n), t && w(e => !ye && r ? `custom_new_all` : !Y && i && e !== `custom_new_all` ? `custom_new_read_only` : e)
        }, t[55] = U, t[56] = ye, t[57] = Y, t[58] = x, t[59] = q, t[60] = Fe) : Fe = t[60];
        let Ie = Fe,
            Le;
        t[61] !== q || t[62] !== Ie ? (Le = e => {
            Ie(q, e)
        }, t[61] = q, t[62] = Ie, t[63] = Le) : Le = t[63];
        let Re = Le,
            Ye;
        t[64] === ae ? Ye = t[65] : (Ye = () => {
            let e = se.current;
            ae?.(e ? e.scrollHeight > e.clientHeight + 1 : !1)
        }, t[64] = ae, t[65] = Ye);
        let Xe = Ye,
            Ze, Qe;
        t[66] === Xe ? (Ze = t[67], Qe = t[68]) : (Ze = () => {
            Xe();
            let e = se.current;
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
        t[71] !== i.length || t[72] !== _ || t[73] !== T || t[74] !== u || t[75] !== d || t[76] !== Xe || t[77] !== D ? (et = [i.length, _, T, u, d, Xe, D], t[71] = i.length, t[72] = _, t[73] = T, t[74] = u, t[75] = d, t[76] = Xe, t[77] = D, t[78] = et) : et = t[78], (0, Z.useEffect)($e, et);
        let tt;
        t[79] === Symbol.for(`react.memo_cache_sentinel`) ? (tt = [
            [`custom_new_all`, $.unconfiguredActionsToggleLabel],
            [`custom_new_read_only`, $.unconfiguredReadActionsToggleLabel],
            [`custom`, $.unconfiguredNoActionsToggleLabel]
        ], t[79] = tt) : tt = t[79];
        let nt = tt,
            rt;
        t[80] !== b || t[81] !== ee || t[82] !== g || t[83] !== u || t[84] !== d ? (rt = g ? null : (0, Q.jsx)(p, {
            label: ee ? void 0 : b.formatMessage($.needLink),
            children: (0, Q.jsx)(n, {
                size: `small`,
                color: `secondary`,
                loading: u,
                disabled: !ee || d,
                onClick: () => ee?.(),
                children: (0, Q.jsx)(v, {
                    ...$.refreshLabel
                })
            })
        }), t[80] = b, t[81] = ee, t[82] = g, t[83] = u, t[84] = d, t[85] = rt) : rt = t[85];
        let at = rt,
            ct;
        t[86] === r.primaryConnector.name ? ct = t[87] : (ct = (0, Q.jsx)(`p`, {
            className: `text-token-text-secondary flex-1 pb-0 text-sm leading-5`,
            children: (0, Q.jsx)(v, {
                ...$.policyActionsDescription,
                values: {
                    app: r.primaryConnector.name
                }
            })
        }), t[86] = r.primaryConnector.name, t[87] = ct);
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
        t[93] !== r.primaryConnector.name || t[94] !== G || t[95] !== Ie ? (ft = G.length > 0 && (0, Q.jsx)(_e, {
            appName: r.primaryConnector.name,
            onUndo: () => Ie([...G], !0)
        }), t[93] = r.primaryConnector.name, t[94] = G, t[95] = Ie, t[96] = ft) : ft = t[96];
        let pt;
        t[97] !== i.length || t[98] !== Y || t[99] !== Ce || t[100] !== _ || t[101] !== o || t[102] !== X || t[103] !== Re || t[104] !== x || t[105] !== Te || t[106] !== Oe || t[107] !== b || t[108] !== L || t[109] !== m || t[110] !== a || t[111] !== he || t[112] !== T || t[113] !== Ae || t[114] !== O || t[115] !== Ie || t[116] !== J || t[117] !== V || t[118] !== D || t[119] !== Me || t[120] !== k ? (pt = i.length === 0 ? (0, Q.jsx)(`p`, {
            className: `text-token-text-tertiary m-4 text-center text-xs italic`,
            children: (0, Q.jsx)(v, {
                ...$.noActionsLabel
            })
        }) : (0, Q.jsx)(Q.Fragment, {
            children: (0, Q.jsxs)(`div`, {
                className: `space-y-3`,
                children: [(0, Q.jsxs)(`div`, {
                    className: `border-token-border-default overflow-hidden rounded-lg border`,
                    children: [he.length > 0 && (0, Q.jsxs)(`div`, {
                        children: [(0, Q.jsxs)(`div`, {
                            "data-testid": `action-set-row-read`,
                            onPointerUp: e => {
                                if (X) return;
                                let t = e.target;
                                t instanceof HTMLElement && t.closest(`label, button, input`) || E(Ge)
                            },
                            className: c(`flex items-center justify-between gap-3 px-4 py-3 transition-colors`, X ? `cursor-not-allowed` : `hover:bg-token-bg-tertiary cursor-pointer`),
                            children: [(0, Q.jsxs)(`label`, {
                                htmlFor: `action-toggle-all-read-actions`,
                                className: c(`flex min-w-0 items-center gap-3`, X ? `cursor-not-allowed opacity-60` : `cursor-pointer`),
                                children: [(0, Q.jsx)(ue, {
                                    id: `action-toggle-all-read-actions`,
                                    checked: Y,
                                    indeterminate: Ae,
                                    onChange: e => Re(e.target.checked),
                                    disabled: X
                                }), (0, Q.jsxs)(`span`, {
                                    className: `inline-flex min-w-0 items-baseline gap-2 leading-6`,
                                    children: [(0, Q.jsx)(`span`, {
                                        className: `truncate`,
                                        children: (0, Q.jsx)(v, {
                                            ...$.readActionsSectionLabel
                                        })
                                    }), !Y && (0, Q.jsx)(`span`, {
                                        className: `text-token-text-tertiary inline-flex text-sm leading-none`,
                                        children: (0, Q.jsx)(v, {
                                            ...$.enabledActionsCountLabel,
                                            values: {
                                                enabledCount: Te,
                                                totalCount: he.length
                                            }
                                        })
                                    })]
                                })]
                            }), (0, Q.jsx)(`button`, {
                                type: `button`,
                                className: `text-token-text-secondary hover:bg-token-bg-secondary hover:text-token-text-primary flex size-8 shrink-0 items-center justify-center rounded-md transition-colors disabled:opacity-50`,
                                "aria-label": b.formatMessage(T ? $.hideActionDetailsLabel : $.viewActionDetailsLabel),
                                "aria-expanded": T,
                                "aria-controls": O,
                                onClick: () => E(Ke),
                                disabled: X,
                                children: T ? (0, Q.jsx)(R, {
                                    className: `h-4 w-4`,
                                    "aria-hidden": !0
                                }) : (0, Q.jsx)(fe, {
                                    className: `h-4 w-4`,
                                    "aria-hidden": !0
                                })
                            })]
                        }), T && (0, Q.jsx)(`ul`, {
                            id: O,
                            className: `p-0`,
                            children: he.map(e => (0, Q.jsx)(lt, {
                                action: e,
                                actionDelta: o.get(e.name),
                                prevAction: a?.get(e.name)?.action,
                                isEnabled: x.has(e.name),
                                onToggle: (e, t) => Ie([e], t),
                                disabled: X,
                                onOpenConstraints: m,
                                constraintsDisabled: _,
                                showActionDetails: !1,
                                showActionTypeBadges: !1,
                                showRowBorder: !1,
                                indented: !0
                            }, e.name))
                        })]
                    }), V.length > 0 && (0, Q.jsxs)(`div`, {
                        className: c(he.length > 0 && `border-token-border-default border-t`),
                        children: [(0, Q.jsxs)(`div`, {
                            "data-testid": `action-set-row-write`,
                            onPointerUp: e => {
                                if (X) return;
                                let t = e.target;
                                t instanceof HTMLElement && t.closest(`label, button, input`) || le(qe)
                            },
                            className: c(`flex items-center justify-between gap-3 px-4 py-3 transition-colors`, X ? `cursor-not-allowed` : `hover:bg-token-bg-tertiary cursor-pointer`),
                            children: [(0, Q.jsxs)(`label`, {
                                htmlFor: `action-toggle-all-write-actions`,
                                className: c(`flex min-w-0 items-center gap-3`, X ? `cursor-not-allowed opacity-60` : `cursor-pointer`),
                                children: [(0, Q.jsx)(ue, {
                                    id: `action-toggle-all-write-actions`,
                                    checked: Ce,
                                    indeterminate: Me,
                                    onChange: e => Ie(J, e.target.checked),
                                    disabled: X
                                }), (0, Q.jsxs)(`span`, {
                                    className: `inline-flex min-w-0 items-baseline gap-2 leading-6`,
                                    children: [(0, Q.jsx)(`span`, {
                                        className: `truncate`,
                                        children: (0, Q.jsx)(v, {
                                            ...$.writeActionsSectionLabel
                                        })
                                    }), !Ce && (0, Q.jsx)(`span`, {
                                        className: `text-token-text-tertiary inline-flex text-sm leading-none`,
                                        children: (0, Q.jsx)(v, {
                                            ...$.enabledActionsCountLabel,
                                            values: {
                                                enabledCount: Oe,
                                                totalCount: V.length
                                            }
                                        })
                                    })]
                                })]
                            }), (0, Q.jsx)(`button`, {
                                type: `button`,
                                className: `text-token-text-secondary hover:bg-token-bg-secondary hover:text-token-text-primary flex size-8 shrink-0 items-center justify-center rounded-md transition-colors disabled:opacity-50`,
                                "aria-label": b.formatMessage(D ? $.hideActionDetailsLabel : $.viewActionDetailsLabel),
                                "aria-expanded": D,
                                "aria-controls": k,
                                onClick: () => le(Je),
                                disabled: X,
                                children: D ? (0, Q.jsx)(R, {
                                    className: `h-4 w-4`,
                                    "aria-hidden": !0
                                }) : (0, Q.jsx)(fe, {
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
                                isEnabled: x.has(e.name),
                                onToggle: (e, t) => Ie([e], t),
                                disabled: X,
                                onOpenConstraints: m,
                                constraintsDisabled: _,
                                showActionDetails: !1,
                                showActionTypeBadges: !1,
                                showRowBorder: !1,
                                indented: !0
                            }, e.name))
                        })]
                    })]
                }), L && m && (0, Q.jsx)(`div`, {
                    className: `mt-2 space-y-2`,
                    children: (0, Q.jsxs)(`div`, {
                        className: `bg-token-bg-tertiary text-token-text-secondary flex items-center gap-3 rounded-lg px-4 py-3 text-sm leading-6`,
                        children: [(0, Q.jsx)(I, {
                            className: `h-4 w-4 shrink-0`
                        }), (0, Q.jsx)(`span`, {
                            children: (0, Q.jsx)(v, {
                                ...$.syncEnabledConstraintsNotice
                            })
                        })]
                    })
                })]
            })
        }), t[97] = i.length, t[98] = Y, t[99] = Ce, t[100] = _, t[101] = o, t[102] = X, t[103] = Re, t[104] = x, t[105] = Te, t[106] = Oe, t[107] = b, t[108] = L, t[109] = m, t[110] = a, t[111] = he, t[112] = T, t[113] = Ae, t[114] = O, t[115] = Ie, t[116] = J, t[117] = V, t[118] = D, t[119] = Me, t[120] = k, t[121] = pt) : pt = t[121];
        let mt;
        t[122] !== ut || t[123] !== dt || t[124] !== ft || t[125] !== pt ? (mt = (0, Q.jsxs)(`div`, {
            ref: se,
            className: `min-h-0 flex-1 space-y-3 overflow-y-auto px-6 pt-2 pb-3`,
            children: [ut, dt, ft, pt]
        }), t[122] = ut, t[123] = dt, t[124] = ft, t[125] = pt, t[126] = mt) : mt = t[126];
        let ht;
        t[127] !== i.length || t[128] !== r.primaryConnector.name || t[129] !== C || t[130] !== X || t[131] !== oe || t[132] !== j || t[133] !== A ? (ht = i.length > 0 && (0, Q.jsxs)(`div`, {
            className: c(`shrink-0 space-y-3 px-6 pt-1 pb-6`, oe && `border-token-border-default border-t pt-4`),
            children: [(0, Q.jsx)(`div`, {
                id: A,
                className: `text-token-text-secondary text-sm leading-5`,
                children: (0, Q.jsx)(v, {
                    ...$.unconfiguredActionsDescription,
                    values: {
                        app: r.primaryConnector.name
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
                            checked: C === t,
                            onChange: () => w(t),
                            disabled: X
                        }), (0, Q.jsx)(`span`, {
                            children: (0, Q.jsx)(v, {
                                ...n
                            })
                        })]
                    }, t)
                })
            })]
        }), t[127] = i.length, t[128] = r.primaryConnector.name, t[129] = C, t[130] = X, t[131] = oe, t[132] = j, t[133] = A, t[134] = ht) : ht = t[134];
        let gt = oe && i.length === 0 && `border-token-border-default border-t pt-4`,
            _t;
        t[135] === gt ? _t = t[136] : (_t = c(`flex shrink-0 justify-end gap-2 px-6 pt-0 pb-6`, gt), t[135] = gt, t[136] = _t);
        let vt;
        t[137] === Symbol.for(`react.memo_cache_sentinel`) ? (vt = (0, Q.jsx)(v, {
            id: `59bwQY`,
            defaultMessage: `Cancel`
        }), t[137] = vt) : vt = t[137];
        let yt;
        t[138] !== X || t[139] !== ne ? (yt = (0, Q.jsx)(n, {
            color: `secondary`,
            onClick: ne,
            disabled: X,
            children: vt
        }), t[138] = X, t[139] = ne, t[140] = yt) : yt = t[140];
        let bt;
        t[141] !== U || t[142] !== C || t[143] !== x || t[144] !== te || t[145] !== q ? (bt = () => te({
            enabledActions: Array.from(x),
            actionPolicy: Ne({
                actionIds: U,
                readOnlyActionIds: q,
                enabledActions: x,
                customNewActionPolicy: C
            })
        }), t[141] = U, t[142] = C, t[143] = x, t[144] = te, t[145] = q, t[146] = bt) : bt = t[146];
        let xt = X || y,
            St;
        t[147] === Symbol.for(`react.memo_cache_sentinel`) ? (St = (0, Q.jsx)(v, {
            ...$.confirmLabel
        }), t[147] = St) : St = t[147];
        let Ct;
        t[148] !== d || t[149] !== bt || t[150] !== xt ? (Ct = (0, Q.jsx)(n, {
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
                initialActionPolicy: c,
                initialActionPolicyLoading: l,
                showOverlayBackground: ee,
                submitting: u,
                showParameterConstraints: d
            } = e,
            f = c === void 0 ? null : c,
            p = l !== void 0 && l,
            m = ee === void 0 || ee,
            re = u !== void 0 && u,
            ie = d === void 0 || d,
            ae = ce(),
            g = _(),
            [y, oe] = (0, Z.useState)(null),
            [b, x] = (0, Z.useState)(!1),
            S = (0, Z.useRef)(!1),
            C;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (C = {
            forceEnable: !0
        }, t[0] = C) : C = t[0];
        let {
            actions: w,
            isLoading: E,
            refetch: O
        } = T(n.primaryConnector, D.ADMIN_SETTING, C), k;
        t[1] === w ? k = t[2] : (k = w.filter(Me), t[1] = w, t[2] = k);
        let j = k,
            ue;
        bb0: {
            if (o) {
                let e;
                t[3] === j ? e = t[4] : (e = new Set(j.map(Ye)), t[3] = j, t[4] = e);
                let n = e,
                    r;
                t[5] === o ? r = t[6] : (r = Array.from(o), t[5] = o, t[6] = r);
                let i;
                t[7] !== r || t[8] !== n ? (i = new Set(r.filter(e => n.has(e))), t[7] = r, t[8] = n, t[9] = i) : i = t[9], ue = i;
                break bb0
            }
            let e;t[10] === j ? e = t[11] : (e = new Set(j.filter(Xe).map(Ze)), t[10] = j, t[11] = e),
            ue = e
        }
        let N = ue,
            [P, de] = (0, Z.useState)(Fe),
            F, I;
        t[12] !== E || t[13] !== f || t[14] !== p ? (I = () => {
            S.current || E || p || (de(X(f)), S.current = !0)
        }, F = [E, f, p], t[12] = E, t[13] = f, t[14] = p, t[15] = F, t[16] = I) : (F = t[15], I = t[16]), (0, Z.useEffect)(I, F);
        let fe;
        if (t[17] !== j) {
            fe = new Map;
            for (let e of j) fe.set(e.name, {
                action: e,
                hash: Ce(e)
            });
            t[17] = j, t[18] = fe
        } else fe = t[18];
        let L = fe,
            [R, pe] = (0, Z.useState)(null),
            z = Te(L, R),
            me;
        t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (me = ne()?.getWorkspaceId(), t[19] = me) : me = t[19];
        let he = me,
            B = le(),
            U = V(),
            W = (0, Z.useRef)(!1),
            G;
        t[20] !== n || t[21] !== ie ? (G = Oe({
            app: n,
            showParameterConstraints: ie
        }), t[20] = n, t[21] = ie, t[22] = G) : G = t[22];
        let K = G,
            q, ge;
        t[23] !== E || t[24] !== n.primaryConnector.actions_changed_since_review || t[25] !== n.primaryConnector.id || t[26] !== U || t[27] !== B || t[28] !== j ? (q = () => {
            if (W.current || !he || !n.primaryConnector.actions_changed_since_review || E) return;
            W.current = !0;
            let e = j.filter(Qe).map($e);
            (async () => {
                await A(n.primaryConnector.id, he, e), B(), U(n.primaryConnector.id)
            })()
        }, ge = [E, n.primaryConnector.actions_changed_since_review, n.primaryConnector.id, U, B, j, he], t[23] = E, t[24] = n.primaryConnector.actions_changed_since_review, t[25] = n.primaryConnector.id, t[26] = U, t[27] = B, t[28] = j, t[29] = q, t[30] = ge) : (q = t[29], ge = t[30]), (0, Z.useEffect)(q, ge);
        let J;
        t[31] === Symbol.for(`react.memo_cache_sentinel`) ? (J = s(), t[31] = J) : J = t[31];
        let _e = J,
            ve;
        t[32] !== L || t[33] !== R || t[34] !== O ? (ve = async e => {
            R || pe(L), await M(e), await O()
        }, t[32] = L, t[33] = R, t[34] = O, t[35] = ve) : ve = t[35];
        let ye;
        t[36] !== n.primaryConnector.id || t[37] !== g ? (ye = () => {
            g.invalidateQueries({
                queryKey: [`connector-action-clamp`, n.primaryConnector.id]
            })
        }, t[36] = n.primaryConnector.id, t[37] = g, t[38] = ye) : ye = t[38];
        let be;
        t[39] === Symbol.for(`react.memo_cache_sentinel`) ? (be = e => {
            _e.danger($.refreshActionsError, {
                error: e
            })
        }, t[39] = be) : be = t[39];
        let Y;
        t[40] !== ve || t[41] !== ye ? (Y = {
            mutationFn: ve,
            onSuccess: ye,
            onError: be
        }, t[40] = ve, t[41] = ye, t[42] = Y) : Y = t[42];
        let xe = se(Y),
            {
                data: Se
            } = h(et),
            we = Ie(Se, n.primaryConnector.id),
            Ee = H(n.primaryConnector),
            De;
        t[43] === ae ? De = t[44] : (De = ae.formatMessage($.actionsControlModalTitle), t[43] = ae, t[44] = De);
        let ke;
        t[45] !== z || t[46] !== E || t[47] !== n || t[48] !== K || t[49] !== N || t[50] !== p || t[51] !== Ee || t[52] !== we || t[53] !== i || t[54] !== a || t[55] !== b || t[56] !== R || t[57] !== xe || t[58] !== P || t[59] !== re || t[60] !== j ? (ke = E && !xe.isPending ? (0, Q.jsxs)(`div`, {
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
            prevActions: R,
            deltas: z,
            initialEnabledActions: N,
            initialCustomNewActionPolicy: P,
            onSubmit: a,
            onCancel: i,
            refreshingActions: xe.isPending,
            submitting: re || p,
            confirmDisabled: j.length === 0,
            refreshHidden: !Ee,
            onRefreshActions: Ee && we !== void 0 ? () => {
                xe.mutate(we.id)
            } : void 0,
            onOpenConstraints: K ? e => oe(e) : void 0,
            constraintsDisabled: !1,
            showScrollDividers: b,
            onScrollabilityChange: x
        }), t[45] = z, t[46] = E, t[47] = n, t[48] = K, t[49] = N, t[50] = p, t[51] = Ee, t[52] = we, t[53] = i, t[54] = a, t[55] = b, t[56] = R, t[57] = xe, t[58] = P, t[59] = re, t[60] = j, t[61] = ke) : ke = t[61];
        let Ae;
        t[62] !== r || t[63] !== b || t[64] !== m || t[65] !== De || t[66] !== ke ? (Ae = (0, Q.jsx)(te, {
            isOpen: !0,
            onClose: r,
            showOverlayBackground: m,
            testId: `modal-app-actions-control`,
            title: De,
            size: `custom`,
            className: `max-w-5xl`,
            hasSeparator: b,
            noPadding: !0,
            isScrollable: !1,
            headerClassName: `!px-6 !pt-6 !pb-2`,
            contentClassName: `flex flex-col max-h-[80vh]`,
            children: ke
        }), t[62] = r, t[63] = b, t[64] = m, t[65] = De, t[66] = ke, t[67] = Ae) : Ae = t[67];
        let je;
        t[68] !== n || t[69] !== K || t[70] !== y ? (je = K && y && (0, Q.jsx)(pt, {
            app: n,
            onClose: () => oe(null),
            onBack: () => oe(null),
            showOverlayBackground: !0,
            initialSelectedAction: y
        }), t[68] = n, t[69] = K, t[70] = y, t[71] = je) : je = t[71];
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
            i = ce(),
            a;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (a = ne()?.getWorkspaceId(), t[0] = a) : a = t[0];
        let o = a,
            c;
        t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (c = s(), t[1] = c) : c = t[1];
        let l = c,
            u = _(),
            te = le(),
            d = V(),
            f = B(),
            p = h(tt),
            m = h(nt),
            re = !!o,
            ie;
        t[2] !== n.primaryConnector.id || t[3] !== p ? (ie = () => {
            K(p, o ?? ``, n.primaryConnector.id, re)
        }, t[2] = n.primaryConnector.id, t[3] = p, t[4] = ie) : ie = t[4];
        let ae;
        t[5] !== n.primaryConnector.id || t[6] !== m || t[7] !== p ? (ae = [p, m, o, n.primaryConnector.id, re], t[5] = n.primaryConnector.id, t[6] = m, t[7] = p, t[8] = ae) : ae = t[8], (0, Z.useEffect)(ie, ae);
        let g;
        t[9] !== n.primaryConnector.id || t[10] !== m || t[11] !== p ? (g = J({
            queryKeyPrefix: `connector-workspace-permissions`,
            workspaceId: o,
            connectorId: n.primaryConnector.id,
            enabled: re,
            transport: p,
            actorId: m
        }), t[9] = n.primaryConnector.id, t[10] = m, t[11] = p, t[12] = g) : g = t[12];
        let {
            data: v,
            isLoading: oe
        } = y(g), b;
        t[13] !== n.primaryConnector.id || t[14] !== d || t[15] !== f || t[16] !== te || t[17] !== u ? (b = async e => {
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
            }), te(), d(n.primaryConnector.id), await u.invalidateQueries({
                queryKey: [`connector-actions`, n.primaryConnector.id]
            }), await u.invalidateQueries({
                queryKey: [`connector-workspace-permissions`, o, n.primaryConnector.id]
            }), await f()
        }, t[13] = n.primaryConnector.id, t[14] = d, t[15] = f, t[16] = te, t[17] = u, t[18] = b) : b = t[18];
        let x;
        t[19] !== i || t[20] !== r ? (x = () => {
            l.success(i.formatMessage({
                id: `AW+VoO`,
                defaultMessage: `App tools updated successfully.`
            })), r()
        }, t[19] = i, t[20] = r, t[21] = x) : x = t[21];
        let S;
        t[22] === i ? S = t[23] : (S = () => {
            l.danger(i.formatMessage({
                id: `IRGvbN`,
                defaultMessage: `Failed to update app tools. Please try again.`
            }))
        }, t[22] = i, t[23] = S);
        let C;
        t[24] !== b || t[25] !== x || t[26] !== S ? (C = {
            mutationFn: b,
            onSuccess: x,
            onError: S
        }, t[24] = b, t[25] = x, t[26] = S, t[27] = C) : C = t[27];
        let {
            mutateAsync: w,
            isPending: T
        } = se(C), E;
        t[28] !== r || t[29] !== T ? (E = () => {
            T || r()
        }, t[28] = r, t[29] = T, t[30] = E) : E = t[30];
        let D = E,
            O = v?.action_policy,
            k = v?.enabled_actions,
            A;
        t[31] !== O || t[32] !== k ? (A = je({
            actionPolicy: O,
            enabledActions: k
        }), t[31] = O, t[32] = k, t[33] = A) : A = t[33];
        let j = !!o && oe,
            M;
        return t[34] !== n || t[35] !== D || t[36] !== w || t[37] !== T || t[38] !== A || t[39] !== j ? (M = (0, Q.jsx)(dt, {
            app: n,
            onClose: D,
            onCancel: D,
            onConfirm: w,
            submitting: T,
            initialActionPolicy: A,
            initialActionPolicyLoading: j
        }), t[34] = n, t[35] = D, t[36] = w, t[37] = T, t[38] = A, t[39] = j, t[40] = M) : M = t[40], M
    }, pt = e => {
        "use forget";
        let t = (0, it.c)(3),
            n = h(rt),
            r;
        return t[0] !== e || t[1] !== n ? (r = (0, Q.jsx)(be, {
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
//# sourceMappingURL=46874983-n4a6yafxszmcucmd.js.map