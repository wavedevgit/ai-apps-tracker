import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as n,
    B6 as r,
    My as i,
    X$ as a,
    a7 as o,
    b5 as s,
    fU as ee,
    i5 as c,
    iw as l,
    jy as te,
    kT as u,
    l7 as d,
    mz as f,
    o1 as ne,
    ow as p,
    pU as m,
    pz as re,
    u1 as ie,
    y5 as h
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as g,
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
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    F3t as T,
    Gwn as E,
    M3t as D,
    NQ as O,
    QGn as k,
    VQ as se,
    Wwn as A,
    ZGn as j,
    aPn as M,
    cPn as N,
    qrt as ce,
    rit as le,
    tit as ue,
    zQ as P
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    DC as de,
    EC as fe,
    Mv as F,
    TC as I,
    jv as pe,
    wC as L
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    By as R,
    Gx as me,
    Jx as he,
    Kx as z,
    Py as B,
    Qx as V,
    Vy as H,
    Zx as U,
    qx as W
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    a as G,
    r as K,
    t as q
} from "./832dbd3a-8ils21g1hok0as2u.js";
import {
    n as ge,
    o as J,
    s as _e
} from "./e1258b01-dvyn277oke1zy2e2.js";
import {
    n as ve,
    t as ye
} from "./99a48954-kcp7qbxopdlqkg42.js";
import {
    a as Y,
    i as be,
    n as xe,
    o as Se,
    r as Ce,
    t as we
} from "./16e34fcb-fvkkfa9ku41olykd.js";
import {
    d as Te,
    f as Ee,
    g as De,
    h as Oe,
    m as ke,
    p as Ae
} from "./b7c53a83-lhcect8zx8cx8epz.js";
import {
    a as je,
    i as Me,
    n as X,
    o as Ne,
    r as Pe,
    t as Fe
} from "./b00adf98-fnhp57eutjqatp7r.js";
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
    return M({
        fetchValidLinksOnly: !0,
        productSku: A.ADMIN_SETTING
    })
}

function tt() {
    return q()
}

function nt() {
    return a()?.normalizedAccountUserId
}

function rt() {
    return a()?.getWorkspaceId()
}
var it, Z, Q, at, ot, st, ct, lt, ut, dt, ft, pt, $, mt = e((() => {
    it = w(), De(), ve(), W(), ce(), n(), k(), de(), I(), F(), f(), p(), i(), T(), N(), G(), O(), E(), U(), r(), ie(), m(), d(), C(), s(), Z = t(S()), x(), je(), ke(), Ee(), B(), _e(), Ce(), Le(), Q = g(), at = new Set([`deleted`]), ot = `text-blue-500 dark:text-blue-400`, st = e => e.knowledgeConfig.some(e => e.connections.some(e => !at.has(e.connection_status))), ct = e => {
        "use forget";
        let t = (0, it.c)(6),
            {
                showActionDetails: n
            } = e,
            r = n === void 0 || n,
            i;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, Q.jsx)(j, {
            id: `action-toggle-skeleton`,
            checked: !1,
            disabled: !0
        }), t[0] = i) : i = t[0];
        let a;
        t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, Q.jsx)(`div`, {
            className: `flex-1 space-y-0.5`,
            children: (0, Q.jsx)(D, {})
        }), t[1] = a) : a = t[1];
        let o;
        t[2] === r ? o = t[3] : (o = r && (0, Q.jsxs)(`div`, {
            className: `border-token-border-default relative col-start-2 overflow-hidden rounded-xl border`,
            children: [(0, Q.jsx)(`div`, {
                className: `from-token-bg-tertiary/30 to-token-bg-tertiary absolute inset-0 z-10 h-full bg-gradient-to-b`,
                "aria-hidden": `true`
            }), (0, Q.jsx)(`pre`, {
                className: `bg-token-bg-tertiary h-24 w-full overflow-hidden px-3 py-2`,
                children: (0, Q.jsx)(D, {
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
                onToggle: o,
                onOpenConstraints: s,
                constraintsDisabled: ee,
                showActionDetails: c,
                showActionTypeBadges: l,
                showRowBorder: u,
                indented: d,
                disabled: f
            } = e,
            ne = ee !== void 0 && ee,
            p = c === void 0 || c,
            m = l === void 0 || l,
            ie = u === void 0 || u,
            g = d !== void 0 && d,
            _ = f !== void 0 && f,
            v = oe(),
            b;
        if (t[0] !== n.name) {
            let e;
            t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (e = /[^a-zA-Z0-9_-]/g, t[2] = e) : e = t[2], b = n.name.replace(e, `-`), t[0] = n.name, t[1] = b
        } else b = t[1];
        let x = b,
            S;
        t[3] === n ? S = t[4] : (S = Me(n), t[3] = n, t[4] = S);
        let ae = `action-toggle-${x}-${S}`,
            C, w, T, E, D, O, k, se, A, M, N, ce, le, ue, P, de, fe;
        if (t[5] !== n || t[6] !== ne || t[7] !== _ || t[8] !== g || t[9] !== v || t[10] !== a || t[11] !== s || t[12] !== o || t[13] !== x || t[14] !== m || t[15] !== ie || t[16] !== ae) {
            let e;
            t[34] === m ? e = t[35] : (e = e => m || e !== `read` && e !== `write`, t[34] = m, t[35] = e);
            let r = z(n).filter(e),
                i;
            t[36] !== n || t[37] !== s ? (i = s !== void 0 && J(n), t[36] = n, t[37] = s, t[38] = i) : i = t[38], T = i;
            let ee = $.openActionPlaceholder,
                c = _ || ne,
                l;
            t[39] !== ne || t[40] !== v ? (l = ne ? v.formatMessage($.constraintsDisabledBySync) : void 0, t[39] = ne, t[40] = v, t[41] = l) : l = t[41], w = l;
            let te = `action-constraints-trigger-${x}`,
                u;
            t[42] === v ? u = t[43] : (u = v.formatMessage(ee), t[42] = v, t[43] = u);
            let d;
            t[44] !== n || t[45] !== s ? (d = e => {
                e.preventDefault(), e.stopPropagation(), s?.(n)
            }, t[44] = n, t[45] = s, t[46] = d) : d = t[46];
            let f = c && `cursor-not-allowed`,
                p;
            t[47] === f ? p = t[48] : (p = h(`text-token-text-tertiary hover:bg-token-bg-secondary hover:text-token-text-primary flex size-8 items-center justify-center rounded-md opacity-0 transition-colors group-hover:opacity-100 focus-visible:opacity-100`, f), t[47] = f, t[48] = p);
            let y = `action-constraints-icon-${x}`,
                b;
            t[49] === y ? b = t[50] : (b = (0, Q.jsx)(re.SettingsWrench, {
                className: `h-4 w-4`,
                "data-testid": y,
                "aria-hidden": !0
            }), t[49] = y, t[50] = b);
            let S;
            t[51] !== c || t[52] !== u || t[53] !== d || t[54] !== p || t[55] !== b ? (S = (0, Q.jsx)(`button`, {
                type: `button`,
                "aria-label": u,
                onClick: d,
                disabled: c,
                className: p,
                children: b
            }), t[51] = c, t[52] = u, t[53] = d, t[54] = p, t[55] = b, t[56] = S) : S = t[56];
            let oe;
            t[57] !== te || t[58] !== S ? (oe = (0, Q.jsx)(`span`, {
                "data-action-constraints-trigger": !0,
                "data-testid": te,
                className: `action-constraints-trigger flex self-center`,
                children: S
            }), t[57] = te, t[58] = S, t[59] = oe) : oe = t[59], C = oe;
            let F;
            t[60] !== n.name || t[61] !== _ || t[62] !== a || t[63] !== o ? (F = e => {
                if (_) return;
                let t = e.target;
                t instanceof Element && t.closest(`label, button, a, input, select, textarea, [role='checkbox'], [data-action-constraints-trigger], .action-constraints-trigger, .action-details`) || o(n.name, !a)
            }, t[60] = n.name, t[61] = _, t[62] = a, t[63] = o, t[64] = F) : F = t[64];
            let I = F,
                pe = g && `ps-7`,
                L = !_ && `hover:bg-token-bg-tertiary`;
            t[65] !== pe || t[66] !== L ? (de = h(`group`, pe, L), t[65] = pe, t[66] = L, t[67] = de) : de = t[67];
            let R = ie && `border-token-border-default border-b group-last:border-0`,
                B = _ ? `cursor-not-allowed` : `cursor-default`;
            t[68] !== R || t[69] !== B ? (P = h([`px-2 py-1`, R, B]), t[68] = R, t[69] = B, t[70] = P) : P = t[70], ce = `action-toggle-row-${x}`, le = I;
            let V = !_ && `cursor-pointer`;
            t[71] === V ? ue = t[72] : (ue = h(`grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 px-2 py-1.5`, V), t[71] = V, t[72] = ue), se = ae, A = `contents cursor-pointer`, M = Re;
            let H;
            t[73] !== n.name || t[74] !== o ? (H = e => o(n.name, e.target.checked), t[73] = n.name, t[74] = o, t[75] = H) : H = t[75], t[76] !== _ || t[77] !== a || t[78] !== H || t[79] !== ae ? (N = (0, Q.jsx)(j, {
                id: ae,
                checked: a,
                onChange: H,
                disabled: _
            }), t[76] = _, t[77] = a, t[78] = H, t[79] = ae, t[80] = N) : N = t[80], k = `min-w-0`, D = `flex min-w-0 flex-wrap items-center gap-2`;
            let U = _ && `text-token-text-secondary`,
                W;
            t[81] === U ? W = t[82] : (W = h([`font-mono text-sm font-medium`, U]), t[81] = U, t[82] = W), t[83] !== n.name || t[84] !== W ? (O = (0, Q.jsx)(`div`, {
                className: W,
                children: n.name
            }), t[83] = n.name, t[84] = W, t[85] = O) : O = t[85], fe = `flex items-center gap-1 select-none`, E = he({
                badgeKeys: r,
                labels: me
            }), t[5] = n, t[6] = ne, t[7] = _, t[8] = g, t[9] = v, t[10] = a, t[11] = s, t[12] = o, t[13] = x, t[14] = m, t[15] = ie, t[16] = ae, t[17] = C, t[18] = w, t[19] = T, t[20] = E, t[21] = D, t[22] = O, t[23] = k, t[24] = se, t[25] = A, t[26] = M, t[27] = N, t[28] = ce, t[29] = le, t[30] = ue, t[31] = P, t[32] = de, t[33] = fe
        } else C = t[17], w = t[18], T = t[19], E = t[20], D = t[21], O = t[22], k = t[23], se = t[24], A = t[25], M = t[26], N = t[27], ce = t[28], le = t[29], ue = t[30], P = t[31], de = t[32], fe = t[33];
        let F;
        t[86] === r ? F = t[87] : (F = (0, Q.jsx)(X, {
            delta: r
        }), t[86] = r, t[87] = F);
        let I;
        t[88] !== E || t[89] !== F || t[90] !== fe ? (I = (0, Q.jsxs)(`div`, {
            className: fe,
            children: [E, F]
        }), t[88] = E, t[89] = F, t[90] = fe, t[91] = I) : I = t[91];
        let pe;
        t[92] !== D || t[93] !== O || t[94] !== I ? (pe = (0, Q.jsxs)(`div`, {
            className: D,
            children: [O, I]
        }), t[92] = D, t[93] = O, t[94] = I, t[95] = pe) : pe = t[95];
        let L;
        t[96] === n.description ? L = t[97] : (L = n.description ? n.description : (0, Q.jsx)(y, {
            ...$.noDescription
        }), t[96] = n.description, t[97] = L);
        let R;
        t[98] === L ? R = t[99] : (R = (0, Q.jsx)(`div`, {
            className: `text-token-text-tertiary line-clamp-2 text-xs leading-5 wrap-anywhere`,
            children: L
        }), t[98] = L, t[99] = R);
        let B;
        t[100] !== k || t[101] !== pe || t[102] !== R ? (B = (0, Q.jsxs)(`div`, {
            className: k,
            children: [pe, R]
        }), t[100] = k, t[101] = pe, t[102] = R, t[103] = B) : B = t[103];
        let V;
        t[104] !== se || t[105] !== A || t[106] !== M || t[107] !== N || t[108] !== B ? (V = (0, Q.jsxs)(`label`, {
            htmlFor: se,
            className: A,
            onClick: M,
            children: [N, B]
        }), t[104] = se, t[105] = A, t[106] = M, t[107] = N, t[108] = B, t[109] = V) : V = t[109];
        let H;
        t[110] !== C || t[111] !== w || t[112] !== T ? (H = T && (w ? (0, Q.jsx)(te, {
            label: w,
            className: `action-constraints-trigger self-center`,
            children: C
        }) : C), t[110] = C, t[111] = w, t[112] = T, t[113] = H) : H = t[113];
        let U;
        t[114] !== n || t[115] !== r || t[116] !== i || t[117] !== p ? (U = p && (0, Q.jsx)(`div`, {
            className: `col-start-2 col-end-4 min-w-0`,
            children: (0, Q.jsx)(Pe, {
                action: n,
                actionDelta: r,
                prevAction: i,
                initiallyCollapsed: !0
            })
        }), t[114] = n, t[115] = r, t[116] = i, t[117] = p, t[118] = U) : U = t[118];
        let W;
        t[119] !== ce || t[120] !== le || t[121] !== ue || t[122] !== V || t[123] !== H || t[124] !== U ? (W = (0, Q.jsxs)(`div`, {
            "data-testid": ce,
            onPointerUp: le,
            className: ue,
            children: [V, H, U]
        }), t[119] = ce, t[120] = le, t[121] = ue, t[122] = V, t[123] = H, t[124] = U, t[125] = W) : W = t[125];
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
                app: n,
                actions: r,
                prevActions: i,
                deltas: a,
                initialEnabledActions: o,
                initialCustomNewActionPolicy: s,
                onRefreshActions: ee,
                refreshingActions: c,
                onSubmit: l,
                submitting: d,
                onCancel: f,
                refreshHidden: ne,
                onOpenConstraints: p,
                constraintsDisabled: m,
                confirmDisabled: re,
                showScrollDividers: ie,
                onScrollabilityChange: g
            } = e,
            _ = ne !== void 0 && ne,
            v = m !== void 0 && m,
            b = re !== void 0 && re,
            x = ie !== void 0 && ie,
            S = oe(),
            ae = (0, Z.useRef)(null),
            [C, w] = (0, Z.useState)(o),
            [T, E] = (0, Z.useState)(s),
            [D, O] = (0, Z.useState)(!1),
            [k, se] = (0, Z.useState)(!1),
            A = (0, Z.useId)(),
            M = (0, Z.useId)(),
            N = (0, Z.useId)(),
            ce = (0, Z.useId)(),
            le, ue;
        t[0] === o ? (le = t[1], ue = t[2]) : (le = () => {
            w(new Set(o))
        }, ue = [o], t[0] = o, t[1] = le, t[2] = ue), (0, Z.useEffect)(le, ue);
        let P, de;
        t[3] === s ? (P = t[4], de = t[5]) : (P = () => {
            E(s)
        }, de = [s], t[3] = s, t[4] = P, t[5] = de), (0, Z.useEffect)(P, de);
        let F;
        t[6] === n ? F = t[7] : (F = st(n), t[6] = n, t[7] = F);
        let I = F,
            R;
        if (t[8] !== r || t[9] !== a) {
            let e;
            t[11] === a ? e = t[12] : (e = (e, t) => (a.get(e.name) ?? Fe.Unmodified) - (a.get(t.name) ?? Fe.Unmodified) || e.name.localeCompare(t.name), t[11] = a, t[12] = e), R = [...r].sort(e), t[8] = r, t[9] = a, t[10] = R
        } else R = t[10];
        let me = R,
            he;
        t[13] === me ? he = t[14] : (he = me.filter(ze), t[13] = me, t[14] = he);
        let z = he,
            B;
        t[15] === me ? B = t[16] : (B = me.filter(Be), t[15] = me, t[16] = B);
        let V = B,
            H;
        t[17] === r ? H = t[18] : (H = r.map(Ve), t[17] = r, t[18] = H);
        let U = H,
            W;
        t[19] !== U || t[20] !== n.primaryConnector.id || t[21] !== C || t[22] !== o ? (W = Ae({
            connectorId: n.primaryConnector.id,
            adminConfigurableActionNames: U,
            initialEnabledActionNames: o,
            nextEnabledActionNames: C
        }), t[19] = U, t[20] = n.primaryConnector.id, t[21] = C, t[22] = o, t[23] = W) : W = t[23];
        let G = W,
            K;
        t[24] === z ? K = t[25] : (K = z.map(He), t[24] = z, t[25] = K);
        let q = K,
            ge;
        t[26] === V ? ge = t[27] : (ge = V.map(Ue), t[26] = V, t[27] = ge);
        let J = ge,
            _e;
        t[28] !== U || t[29] !== C ? (_e = U.length > 0 && U.every(e => C.has(e)), t[28] = U, t[29] = C, t[30] = _e) : _e = t[30];
        let ve = _e,
            ye;
        t[31] !== C || t[32] !== q ? (ye = q.length > 0 && q.every(e => C.has(e)), t[31] = C, t[32] = q, t[33] = ye) : ye = t[33];
        let Y = ye,
            be;
        t[34] !== C || t[35] !== J ? (be = J.length > 0 && J.every(e => C.has(e)), t[34] = C, t[35] = J, t[36] = be) : be = t[36];
        let Se = be,
            Ce;
        if (t[37] !== C || t[38] !== q) {
            let e;
            t[40] === C ? e = t[41] : (e = e => C.has(e), t[40] = C, t[41] = e), Ce = q.filter(e), t[37] = C, t[38] = q, t[39] = Ce
        } else Ce = t[39];
        let we = Ce.length,
            Ee;
        if (t[42] !== C || t[43] !== J) {
            let e;
            t[45] === C ? e = t[46] : (e = e => C.has(e), t[45] = C, t[46] = e), Ee = J.filter(e), t[42] = C, t[43] = J, t[44] = Ee
        } else Ee = t[44];
        let De = Ee.length,
            Oe;
        t[47] !== Y || t[48] !== C || t[49] !== q ? (Oe = !Y && q.some(e => C.has(e)), t[47] = Y, t[48] = C, t[49] = q, t[50] = Oe) : Oe = t[50];
        let ke = Oe,
            je;
        t[51] !== Se || t[52] !== C || t[53] !== J ? (je = !Se && J.some(e => C.has(e)), t[51] = Se, t[52] = C, t[53] = J, t[54] = je) : je = t[54];
        let Me = je,
            X = !!c || d,
            Ne = We,
            Pe;
        t[55] !== U || t[56] !== ve || t[57] !== Y || t[58] !== C || t[59] !== q ? (Pe = (e, t) => {
            let n = new Set(C);
            for (let r of e) t ? n.add(r) : n.delete(r);
            let r = Ne(U, n),
                i = Ne(q, n);
            w(n), t && E(e => !ve && r ? `custom_new_all` : !Y && i && e !== `custom_new_all` ? `custom_new_read_only` : e)
        }, t[55] = U, t[56] = ve, t[57] = Y, t[58] = C, t[59] = q, t[60] = Pe) : Pe = t[60];
        let Ie = Pe,
            Le;
        t[61] !== q || t[62] !== Ie ? (Le = e => {
            Ie(q, e)
        }, t[61] = q, t[62] = Ie, t[63] = Le) : Le = t[63];
        let Re = Le,
            Ye;
        t[64] === g ? Ye = t[65] : (Ye = () => {
            let e = ae.current;
            g?.(e ? e.scrollHeight > e.clientHeight + 1 : !1)
        }, t[64] = g, t[65] = Ye);
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
        t[71] !== r.length || t[72] !== v || t[73] !== D || t[74] !== c || t[75] !== d || t[76] !== Xe || t[77] !== k ? (et = [r.length, v, D, c, d, Xe, k], t[71] = r.length, t[72] = v, t[73] = D, t[74] = c, t[75] = d, t[76] = Xe, t[77] = k, t[78] = et) : et = t[78], (0, Z.useEffect)($e, et);
        let tt;
        t[79] === Symbol.for(`react.memo_cache_sentinel`) ? (tt = [
            [`custom_new_all`, $.unconfiguredActionsToggleLabel],
            [`custom_new_read_only`, $.unconfiguredReadActionsToggleLabel],
            [`custom`, $.unconfiguredNoActionsToggleLabel]
        ], t[79] = tt) : tt = t[79];
        let nt = tt,
            rt;
        t[80] !== S || t[81] !== ee || t[82] !== _ || t[83] !== c || t[84] !== d ? (rt = _ ? null : (0, Q.jsx)(te, {
            label: ee ? void 0 : S.formatMessage($.needLink),
            children: (0, Q.jsx)(u, {
                size: `small`,
                color: `secondary`,
                loading: c,
                disabled: !ee || d,
                onClick: () => ee?.(),
                children: (0, Q.jsx)(y, {
                    ...$.refreshLabel
                })
            })
        }), t[80] = S, t[81] = ee, t[82] = _, t[83] = c, t[84] = d, t[85] = rt) : rt = t[85];
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
        t[93] !== n.primaryConnector.name || t[94] !== G || t[95] !== Ie ? (ft = G.length > 0 && (0, Q.jsx)(Te, {
            appName: n.primaryConnector.name,
            onUndo: () => Ie([...G], !0)
        }), t[93] = n.primaryConnector.name, t[94] = G, t[95] = Ie, t[96] = ft) : ft = t[96];
        let pt;
        t[97] !== r.length || t[98] !== Y || t[99] !== Se || t[100] !== v || t[101] !== a || t[102] !== X || t[103] !== Re || t[104] !== C || t[105] !== we || t[106] !== De || t[107] !== S || t[108] !== I || t[109] !== p || t[110] !== i || t[111] !== z || t[112] !== D || t[113] !== ke || t[114] !== A || t[115] !== Ie || t[116] !== J || t[117] !== V || t[118] !== k || t[119] !== Me || t[120] !== M ? (pt = r.length === 0 ? (0, Q.jsx)(`p`, {
            className: `text-token-text-tertiary m-4 text-center text-xs italic`,
            children: (0, Q.jsx)(y, {
                ...$.noActionsLabel
            })
        }) : (0, Q.jsx)(Q.Fragment, {
            children: (0, Q.jsxs)(`div`, {
                className: `space-y-3`,
                children: [(0, Q.jsxs)(`div`, {
                    className: `border-token-border-default overflow-hidden rounded-lg border`,
                    children: [z.length > 0 && (0, Q.jsxs)(`div`, {
                        children: [(0, Q.jsxs)(`div`, {
                            "data-testid": `action-set-row-read`,
                            onPointerUp: e => {
                                if (X) return;
                                let t = e.target;
                                t instanceof HTMLElement && t.closest(`label, button, input`) || O(Ge)
                            },
                            className: h(`flex items-center justify-between gap-3 px-4 py-3 transition-colors`, X ? `cursor-not-allowed` : `hover:bg-token-bg-tertiary cursor-pointer`),
                            children: [(0, Q.jsxs)(`label`, {
                                htmlFor: `action-toggle-all-read-actions`,
                                className: h(`flex min-w-0 items-center gap-3`, X ? `cursor-not-allowed opacity-60` : `cursor-pointer`),
                                children: [(0, Q.jsx)(j, {
                                    id: `action-toggle-all-read-actions`,
                                    checked: Y,
                                    indeterminate: ke,
                                    onChange: e => Re(e.target.checked),
                                    disabled: X
                                }), (0, Q.jsxs)(`span`, {
                                    className: `inline-flex min-w-0 items-baseline gap-2 leading-6`,
                                    children: [(0, Q.jsx)(`span`, {
                                        className: `truncate`,
                                        children: (0, Q.jsx)(y, {
                                            ...$.readActionsSectionLabel
                                        })
                                    }), !Y && (0, Q.jsx)(`span`, {
                                        className: `text-token-text-tertiary inline-flex text-sm leading-none`,
                                        children: (0, Q.jsx)(y, {
                                            ...$.enabledActionsCountLabel,
                                            values: {
                                                enabledCount: we,
                                                totalCount: z.length
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
                                children: D ? (0, Q.jsx)(fe, {
                                    className: `h-4 w-4`,
                                    "aria-hidden": !0
                                }) : (0, Q.jsx)(L, {
                                    className: `h-4 w-4`,
                                    "aria-hidden": !0
                                })
                            })]
                        }), D && (0, Q.jsx)(`ul`, {
                            id: A,
                            className: `p-0`,
                            children: z.map(e => (0, Q.jsx)(lt, {
                                action: e,
                                actionDelta: a.get(e.name),
                                prevAction: i?.get(e.name)?.action,
                                isEnabled: C.has(e.name),
                                onToggle: (e, t) => Ie([e], t),
                                disabled: X,
                                onOpenConstraints: p,
                                constraintsDisabled: v,
                                showActionDetails: !1,
                                showActionTypeBadges: !1,
                                showRowBorder: !1,
                                indented: !0
                            }, e.name))
                        })]
                    }), V.length > 0 && (0, Q.jsxs)(`div`, {
                        className: h(z.length > 0 && `border-token-border-default border-t`),
                        children: [(0, Q.jsxs)(`div`, {
                            "data-testid": `action-set-row-write`,
                            onPointerUp: e => {
                                if (X) return;
                                let t = e.target;
                                t instanceof HTMLElement && t.closest(`label, button, input`) || se(qe)
                            },
                            className: h(`flex items-center justify-between gap-3 px-4 py-3 transition-colors`, X ? `cursor-not-allowed` : `hover:bg-token-bg-tertiary cursor-pointer`),
                            children: [(0, Q.jsxs)(`label`, {
                                htmlFor: `action-toggle-all-write-actions`,
                                className: h(`flex min-w-0 items-center gap-3`, X ? `cursor-not-allowed opacity-60` : `cursor-pointer`),
                                children: [(0, Q.jsx)(j, {
                                    id: `action-toggle-all-write-actions`,
                                    checked: Se,
                                    indeterminate: Me,
                                    onChange: e => Ie(J, e.target.checked),
                                    disabled: X
                                }), (0, Q.jsxs)(`span`, {
                                    className: `inline-flex min-w-0 items-baseline gap-2 leading-6`,
                                    children: [(0, Q.jsx)(`span`, {
                                        className: `truncate`,
                                        children: (0, Q.jsx)(y, {
                                            ...$.writeActionsSectionLabel
                                        })
                                    }), !Se && (0, Q.jsx)(`span`, {
                                        className: `text-token-text-tertiary inline-flex text-sm leading-none`,
                                        children: (0, Q.jsx)(y, {
                                            ...$.enabledActionsCountLabel,
                                            values: {
                                                enabledCount: De,
                                                totalCount: V.length
                                            }
                                        })
                                    })]
                                })]
                            }), (0, Q.jsx)(`button`, {
                                type: `button`,
                                className: `text-token-text-secondary hover:bg-token-bg-secondary hover:text-token-text-primary flex size-8 shrink-0 items-center justify-center rounded-md transition-colors disabled:opacity-50`,
                                "aria-label": S.formatMessage(k ? $.hideActionDetailsLabel : $.viewActionDetailsLabel),
                                "aria-expanded": k,
                                "aria-controls": M,
                                onClick: () => se(Je),
                                disabled: X,
                                children: k ? (0, Q.jsx)(fe, {
                                    className: `h-4 w-4`,
                                    "aria-hidden": !0
                                }) : (0, Q.jsx)(L, {
                                    className: `h-4 w-4`,
                                    "aria-hidden": !0
                                })
                            })]
                        }), k && (0, Q.jsx)(`ul`, {
                            id: M,
                            className: `p-0`,
                            children: V.map(e => (0, Q.jsx)(lt, {
                                action: e,
                                actionDelta: a.get(e.name),
                                prevAction: i?.get(e.name)?.action,
                                isEnabled: C.has(e.name),
                                onToggle: (e, t) => Ie([e], t),
                                disabled: X,
                                onOpenConstraints: p,
                                constraintsDisabled: v,
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
                        children: [(0, Q.jsx)(pe, {
                            className: `h-4 w-4 shrink-0`
                        }), (0, Q.jsx)(`span`, {
                            children: (0, Q.jsx)(y, {
                                ...$.syncEnabledConstraintsNotice
                            })
                        })]
                    })
                })]
            })
        }), t[97] = r.length, t[98] = Y, t[99] = Se, t[100] = v, t[101] = a, t[102] = X, t[103] = Re, t[104] = C, t[105] = we, t[106] = De, t[107] = S, t[108] = I, t[109] = p, t[110] = i, t[111] = z, t[112] = D, t[113] = ke, t[114] = A, t[115] = Ie, t[116] = J, t[117] = V, t[118] = k, t[119] = Me, t[120] = M, t[121] = pt) : pt = t[121];
        let mt;
        t[122] !== ut || t[123] !== dt || t[124] !== ft || t[125] !== pt ? (mt = (0, Q.jsxs)(`div`, {
            ref: ae,
            className: `min-h-0 flex-1 space-y-3 overflow-y-auto px-6 pt-2 pb-3`,
            children: [ut, dt, ft, pt]
        }), t[122] = ut, t[123] = dt, t[124] = ft, t[125] = pt, t[126] = mt) : mt = t[126];
        let ht;
        t[127] !== r.length || t[128] !== n.primaryConnector.name || t[129] !== T || t[130] !== X || t[131] !== x || t[132] !== ce || t[133] !== N ? (ht = r.length > 0 && (0, Q.jsxs)(`div`, {
            className: h(`shrink-0 space-y-3 px-6 pt-1 pb-6`, x && `border-token-border-default border-t pt-4`),
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
                            name: ce,
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
        }), t[127] = r.length, t[128] = n.primaryConnector.name, t[129] = T, t[130] = X, t[131] = x, t[132] = ce, t[133] = N, t[134] = ht) : ht = t[134];
        let gt = x && r.length === 0 && `border-token-border-default border-t pt-4`,
            _t;
        t[135] === gt ? _t = t[136] : (_t = h(`flex shrink-0 justify-end gap-2 px-6 pt-0 pb-6`, gt), t[135] = gt, t[136] = _t);
        let vt;
        t[137] === Symbol.for(`react.memo_cache_sentinel`) ? (vt = (0, Q.jsx)(y, {
            id: `59bwQY`,
            defaultMessage: `Cancel`
        }), t[137] = vt) : vt = t[137];
        let yt;
        t[138] !== X || t[139] !== f ? (yt = (0, Q.jsx)(u, {
            color: `secondary`,
            onClick: f,
            disabled: X,
            children: vt
        }), t[138] = X, t[139] = f, t[140] = yt) : yt = t[140];
        let bt;
        t[141] !== U || t[142] !== T || t[143] !== C || t[144] !== l || t[145] !== q ? (bt = () => l({
            enabledActions: Array.from(C),
            actionPolicy: xe({
                actionIds: U,
                readOnlyActionIds: q,
                enabledActions: C,
                customNewActionPolicy: T
            })
        }), t[141] = U, t[142] = T, t[143] = C, t[144] = l, t[145] = q, t[146] = bt) : bt = t[146];
        let xt = X || b,
            St;
        t[147] === Symbol.for(`react.memo_cache_sentinel`) ? (St = (0, Q.jsx)(y, {
            ...$.confirmLabel
        }), t[147] = St) : St = t[147];
        let Ct;
        t[148] !== d || t[149] !== bt || t[150] !== xt ? (Ct = (0, Q.jsx)(u, {
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
                initialActionPolicy: s,
                initialActionPolicyLoading: te,
                showOverlayBackground: u,
                submitting: d,
                showParameterConstraints: f
            } = e,
            p = s === void 0 ? null : s,
            m = te !== void 0 && te,
            re = u === void 0 || u,
            ie = d !== void 0 && d,
            h = f === void 0 || f,
            g = oe(),
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
            isLoading: D,
            refetch: O
        } = se(n.primaryConnector, A.ADMIN_SETTING, T), k;
        t[1] === E ? k = t[2] : (k = E.filter(be), t[1] = E, t[2] = k);
        let j = k,
            M;
        bb0: {
            if (o) {
                let e;
                t[3] === j ? e = t[4] : (e = new Set(j.map(Ye)), t[3] = j, t[4] = e);
                let n = e,
                    r;
                t[5] === o ? r = t[6] : (r = Array.from(o), t[5] = o, t[6] = r);
                let i;
                t[7] !== r || t[8] !== n ? (i = new Set(r.filter(e => n.has(e))), t[7] = r, t[8] = n, t[9] = i) : i = t[9], M = i;
                break bb0
            }
            let e;t[10] === j ? e = t[11] : (e = new Set(j.filter(Xe).map(Ze)), t[10] = j, t[11] = e),
            M = e
        }
        let N = M,
            [ce, de] = (0, Z.useState)(we),
            fe, F;
        t[12] !== D || t[13] !== p || t[14] !== m ? (F = () => {
            w.current || D || m || (de(Se(p)), w.current = !0)
        }, fe = [D, p, m], t[12] = D, t[13] = p, t[14] = m, t[15] = fe, t[16] = F) : (fe = t[15], F = t[16]), (0, Z.useEffect)(F, fe);
        let I;
        if (t[17] !== j) {
            I = new Map;
            for (let e of j) I.set(e.name, {
                action: e,
                hash: Me(e)
            });
            t[17] = j, t[18] = I
        } else I = t[18];
        let pe = I,
            [L, me] = (0, Z.useState)(null),
            he = Ne(pe, L),
            z;
        t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (z = ne()?.getWorkspaceId(), t[19] = z) : z = t[19];
        let B = z,
            H = P(),
            U = R(),
            W = (0, Z.useRef)(!1),
            G;
        t[20] !== n || t[21] !== h ? (G = ge({
            app: n,
            showParameterConstraints: h
        }), t[20] = n, t[21] = h, t[22] = G) : G = t[22];
        let K = G,
            q, J;
        t[23] !== D || t[24] !== n.primaryConnector.actions_changed_since_review || t[25] !== n.primaryConnector.id || t[26] !== U || t[27] !== H || t[28] !== j ? (q = () => {
            if (W.current || !B || !n.primaryConnector.actions_changed_since_review || D) return;
            W.current = !0;
            let e = j.filter(Qe).map($e);
            (async () => {
                await le(n.primaryConnector.id, B, e), H(), U(n.primaryConnector.id)
            })()
        }, J = [D, n.primaryConnector.actions_changed_since_review, n.primaryConnector.id, U, H, j, B], t[23] = D, t[24] = n.primaryConnector.actions_changed_since_review, t[25] = n.primaryConnector.id, t[26] = U, t[27] = H, t[28] = j, t[29] = q, t[30] = J) : (q = t[29], J = t[30]), (0, Z.useEffect)(q, J);
        let _e;
        t[31] === Symbol.for(`react.memo_cache_sentinel`) ? (_e = ee(), t[31] = _e) : _e = t[31];
        let ve = _e,
            ye;
        t[32] !== pe || t[33] !== L || t[34] !== O ? (ye = async e => {
            L || me(pe), await ue(e), await O()
        }, t[32] = pe, t[33] = L, t[34] = O, t[35] = ye) : ye = t[35];
        let Y;
        t[36] !== n.primaryConnector.id || t[37] !== _ ? (Y = () => {
            _.invalidateQueries({
                queryKey: [`connector-action-clamp`, n.primaryConnector.id]
            })
        }, t[36] = n.primaryConnector.id, t[37] = _, t[38] = Y) : Y = t[38];
        let xe;
        t[39] === Symbol.for(`react.memo_cache_sentinel`) ? (xe = e => {
            ve.danger($.refreshActionsError, {
                error: e
            })
        }, t[39] = xe) : xe = t[39];
        let Ce;
        t[40] !== ye || t[41] !== Y ? (Ce = {
            mutationFn: ye,
            onSuccess: Y,
            onError: xe
        }, t[40] = ye, t[41] = Y, t[42] = Ce) : Ce = t[42];
        let Te = ae(Ce),
            {
                data: Ee
            } = c(et),
            De = Ie(Ee, n.primaryConnector.id),
            Oe = V(n.primaryConnector),
            ke;
        t[43] === g ? ke = t[44] : (ke = g.formatMessage($.actionsControlModalTitle), t[43] = g, t[44] = ke);
        let Ae;
        t[45] !== he || t[46] !== D || t[47] !== n || t[48] !== K || t[49] !== N || t[50] !== m || t[51] !== Oe || t[52] !== De || t[53] !== i || t[54] !== a || t[55] !== S || t[56] !== L || t[57] !== Te || t[58] !== ce || t[59] !== ie || t[60] !== j ? (Ae = D && !Te.isPending ? (0, Q.jsxs)(`div`, {
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
            actions: j,
            prevActions: L,
            deltas: he,
            initialEnabledActions: N,
            initialCustomNewActionPolicy: ce,
            onSubmit: a,
            onCancel: i,
            refreshingActions: Te.isPending,
            submitting: ie || m,
            confirmDisabled: j.length === 0,
            refreshHidden: !Oe,
            onRefreshActions: Oe && De !== void 0 ? () => {
                Te.mutate(De.id)
            } : void 0,
            onOpenConstraints: K ? e => x(e) : void 0,
            constraintsDisabled: !1,
            showScrollDividers: S,
            onScrollabilityChange: C
        }), t[45] = he, t[46] = D, t[47] = n, t[48] = K, t[49] = N, t[50] = m, t[51] = Oe, t[52] = De, t[53] = i, t[54] = a, t[55] = S, t[56] = L, t[57] = Te, t[58] = ce, t[59] = ie, t[60] = j, t[61] = Ae) : Ae = t[61];
        let je;
        t[62] !== r || t[63] !== S || t[64] !== re || t[65] !== ke || t[66] !== Ae ? (je = (0, Q.jsx)(l, {
            isOpen: !0,
            onClose: r,
            showOverlayBackground: re,
            testId: `modal-app-actions-control`,
            title: ke,
            size: `custom`,
            className: `max-w-5xl`,
            hasSeparator: S,
            noPadding: !0,
            isScrollable: !1,
            headerClassName: `!px-6 !pt-6 !pb-2`,
            contentClassName: `flex flex-col max-h-[80vh]`,
            children: Ae
        }), t[62] = r, t[63] = S, t[64] = re, t[65] = ke, t[66] = Ae, t[67] = je) : je = t[67];
        let X;
        t[68] !== n || t[69] !== K || t[70] !== b ? (X = K && b && (0, Q.jsx)(pt, {
            app: n,
            onClose: () => x(null),
            onBack: () => x(null),
            showOverlayBackground: !0,
            initialSelectedAction: b
        }), t[68] = n, t[69] = K, t[70] = b, t[71] = X) : X = t[71];
        let Pe;
        return t[72] !== je || t[73] !== X ? (Pe = (0, Q.jsxs)(Q.Fragment, {
            children: [je, X]
        }), t[72] = je, t[73] = X, t[74] = Pe) : Pe = t[74], Pe
    }, ft = e => {
        "use forget";
        let t = (0, it.c)(41),
            {
                app: n,
                onClose: r
            } = e,
            i = oe(),
            a;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (a = ne()?.getWorkspaceId(), t[0] = a) : a = t[0];
        let s = a,
            l;
        t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (l = ee(), t[1] = l) : l = t[1];
        let te = l,
            u = v(),
            d = P(),
            f = R(),
            p = H(),
            m = c(tt),
            re = c(nt),
            ie = !!s,
            h;
        t[2] !== n.primaryConnector.id || t[3] !== m ? (h = () => {
            K(m, s ?? ``, n.primaryConnector.id, ie)
        }, t[2] = n.primaryConnector.id, t[3] = m, t[4] = h) : h = t[4];
        let g;
        t[5] !== n.primaryConnector.id || t[6] !== re || t[7] !== m ? (g = [m, re, s, n.primaryConnector.id, ie], t[5] = n.primaryConnector.id, t[6] = re, t[7] = m, t[8] = g) : g = t[8], (0, Z.useEffect)(h, g);
        let _;
        t[9] !== n.primaryConnector.id || t[10] !== re || t[11] !== m ? (_ = ye({
            queryKeyPrefix: `connector-workspace-permissions`,
            workspaceId: s,
            connectorId: n.primaryConnector.id,
            enabled: ie,
            transport: m,
            actorId: re
        }), t[9] = n.primaryConnector.id, t[10] = re, t[11] = m, t[12] = _) : _ = t[12];
        let {
            data: y,
            isLoading: x
        } = b(_), S;
        t[13] !== n.primaryConnector.id || t[14] !== f || t[15] !== p || t[16] !== d || t[17] !== u ? (S = async e => {
            let {
                enabledActions: t,
                actionPolicy: r
            } = e;
            if (!s) throw Error(`Workspace ID is required to update app actions.`);
            let i = {
                enabled: !0,
                enabled_actions: t
            };
            r && (i.action_policy = r), await o.safePost(`/accounts/{account_id}/connectors/{connector_id}/workspace_permissions`, {
                parameters: {
                    path: {
                        account_id: s,
                        connector_id: n.primaryConnector.id
                    }
                },
                requestBody: i
            }), d(), f(n.primaryConnector.id), await u.invalidateQueries({
                queryKey: [`connector-actions`, n.primaryConnector.id]
            }), await u.invalidateQueries({
                queryKey: [`connector-workspace-permissions`, s, n.primaryConnector.id]
            }), await p()
        }, t[13] = n.primaryConnector.id, t[14] = f, t[15] = p, t[16] = d, t[17] = u, t[18] = S) : S = t[18];
        let C;
        t[19] !== i || t[20] !== r ? (C = () => {
            te.success(i.formatMessage({
                id: `AW+VoO`,
                defaultMessage: `App tools updated successfully.`
            })), r()
        }, t[19] = i, t[20] = r, t[21] = C) : C = t[21];
        let w;
        t[22] === i ? w = t[23] : (w = () => {
            te.danger(i.formatMessage({
                id: `IRGvbN`,
                defaultMessage: `Failed to update app tools. Please try again.`
            }))
        }, t[22] = i, t[23] = w);
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
        let k = O,
            se = y?.action_policy,
            A = y?.enabled_actions,
            j;
        t[31] !== se || t[32] !== A ? (j = Y({
            actionPolicy: se,
            enabledActions: A
        }), t[31] = se, t[32] = A, t[33] = j) : j = t[33];
        let M = !!s && x,
            N;
        return t[34] !== n || t[35] !== k || t[36] !== E || t[37] !== D || t[38] !== j || t[39] !== M ? (N = (0, Q.jsx)(dt, {
            app: n,
            onClose: k,
            onCancel: k,
            onConfirm: E,
            submitting: D,
            initialActionPolicy: j,
            initialActionPolicyLoading: M
        }), t[34] = n, t[35] = k, t[36] = E, t[37] = D, t[38] = j, t[39] = M, t[40] = N) : N = t[40], N
    }, pt = e => {
        "use forget";
        let t = (0, it.c)(3),
            n = c(rt),
            r;
        return t[0] !== e || t[1] !== n ? (r = (0, Q.jsx)(Oe, {
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
//# sourceMappingURL=46874983-cu5i3arl9lfdbstt.js.map