import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    Aw as r,
    Bz as i,
    IU as a,
    J7 as o,
    LU as s,
    N1 as c,
    Ow as ee,
    Q7 as l,
    Qy as u,
    U1 as d,
    Vz as f,
    Zy as te,
    c7 as p,
    eE as m,
    k8 as h,
    l7 as g,
    q1 as _,
    q5 as ne
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    Bn as re,
    Ln as v,
    N as y,
    Nn as b,
    O as x,
    Rn as S,
    Vn as C,
    p as ie,
    s as w,
    wn as T,
    zn as ae
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    BPn as E,
    C3t as D,
    GQ as O,
    LQ as k,
    OKn as oe,
    UPn as A,
    UQ as se,
    _Tn as j,
    b3t as M,
    kKn as N,
    qrt as P,
    rit as ce,
    tit as le,
    vTn as F
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    DC as ue,
    EC as de,
    Ov as I,
    TC as L,
    kv as R,
    wC as z
} from "./30901919-ikyi1r55w2i02fom.js";
import {
    _x as fe,
    bx as B,
    cy as V,
    gx as H,
    hx as pe,
    ly as U,
    mx as me,
    ny as W,
    xx as G
} from "./c2675c8c-d62p1sdq1sy52umm.js";
import {
    a as K,
    r as q,
    t as J
} from "./832dbd3a-hr2f7nt6qa1t7a5r.js";
import {
    n as he,
    t as Y
} from "./99a48954-ehrq2ggbboscx5gi.js";
import {
    d as ge,
    f as _e,
    g as ve,
    h as ye,
    m as be,
    p as xe
} from "./b7c53a83-f8ov434yx5hdmi5t.js";
import {
    a as Se,
    i as Ce,
    n as we,
    o as Te,
    r as Ee,
    t as De
} from "./b00adf98-mbtj8gmkzad4v3jx.js";
import {
    n as Oe,
    o as ke,
    s as Ae
} from "./e1258b01-jdqyg86kgujku4v3.js";
import {
    a as je,
    i as Me,
    n as Ne,
    o as X,
    r as Pe,
    t as Fe
} from "./16e34fcb-lba4484s26o3hap9.js";
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
    return E({
        fetchValidLinksOnly: !0,
        productSku: j.ADMIN_SETTING
    })
}

function tt() {
    return J()
}

function nt() {
    return c()?.normalizedAccountUserId
}

function rt() {
    return c()?.getWorkspaceId()
}
var it, Z, Q, at, ot, st, ct, lt, ut, dt, ft, pt, $, mt = e((() => {
    it = T(), ve(), he(), H(), P(), m(), N(), ue(), L(), R(), f(), r(), u(), D(), A(), K(), k(), F(), B(), h(), _(), s(), l(), w(), g(), Z = t(C()), S(), Se(), be(), _e(), W(), Ae(), Pe(), Le(), Q = re(), at = new Set([`deleted`]), ot = `text-blue-500 dark:text-blue-400`, st = e => e.knowledgeConfig.some(e => e.connections.some(e => !at.has(e.connection_status))), ct = e => {
        "use forget";
        let t = (0, it.c)(6),
            {
                showActionDetails: n
            } = e,
            r = n === void 0 || n,
            i;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, Q.jsx)(oe, {
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
                actionDelta: r,
                prevAction: a,
                isEnabled: o,
                onToggle: s,
                onOpenConstraints: c,
                constraintsDisabled: ee,
                showActionDetails: l,
                showActionTypeBadges: u,
                showRowBorder: d,
                indented: f,
                disabled: m
            } = e,
            h = ee !== void 0 && ee,
            g = l === void 0 || l,
            _ = u === void 0 || u,
            ne = d === void 0 || d,
            re = f !== void 0 && f,
            v = m !== void 0 && m,
            y = ae(),
            x;
        if (t[0] !== n.name) {
            let e;
            t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (e = /[^a-zA-Z0-9_-]/g, t[2] = e) : e = t[2], x = n.name.replace(e, `-`), t[0] = n.name, t[1] = x
        } else x = t[1];
        let S = x,
            C;
        t[3] === n ? C = t[4] : (C = Ce(n), t[3] = n, t[4] = C);
        let ie = `action-toggle-${S}-${C}`,
            w, T, E, D, O, k, A, se, j, M, N, P, ce, le, F, ue, de;
        if (t[5] !== n || t[6] !== h || t[7] !== v || t[8] !== re || t[9] !== y || t[10] !== o || t[11] !== c || t[12] !== s || t[13] !== S || t[14] !== _ || t[15] !== ne || t[16] !== ie) {
            let e;
            t[34] === _ ? e = t[35] : (e = e => _ || e !== `read` && e !== `write`, t[34] = _, t[35] = e);
            let r = pe(n).filter(e),
                a;
            t[36] !== n || t[37] !== c ? (a = c !== void 0 && ke(n), t[36] = n, t[37] = c, t[38] = a) : a = t[38], E = a;
            let ee = $.openActionPlaceholder,
                l = v || h,
                u;
            t[39] !== h || t[40] !== y ? (u = h ? y.formatMessage($.constraintsDisabledBySync) : void 0, t[39] = h, t[40] = y, t[41] = u) : u = t[41], T = u;
            let d = `action-constraints-trigger-${S}`,
                f;
            t[42] === y ? f = t[43] : (f = y.formatMessage(ee), t[42] = y, t[43] = f);
            let te;
            t[44] !== n || t[45] !== c ? (te = e => {
                e.preventDefault(), e.stopPropagation(), c?.(n)
            }, t[44] = n, t[45] = c, t[46] = te) : te = t[46];
            let m = l && `cursor-not-allowed`,
                g;
            t[47] === m ? g = t[48] : (g = p(`text-token-text-tertiary hover:bg-token-bg-secondary hover:text-token-text-primary flex size-8 items-center justify-center rounded-md opacity-0 transition-colors group-hover:opacity-100 focus-visible:opacity-100`, m), t[47] = m, t[48] = g);
            let b = `action-constraints-icon-${S}`,
                x;
            t[49] === b ? x = t[50] : (x = (0, Q.jsx)(i.SettingsWrench, {
                className: `h-4 w-4`,
                "data-testid": b,
                "aria-hidden": !0
            }), t[49] = b, t[50] = x);
            let C;
            t[51] !== l || t[52] !== f || t[53] !== te || t[54] !== g || t[55] !== x ? (C = (0, Q.jsx)(`button`, {
                type: `button`,
                "aria-label": f,
                onClick: te,
                disabled: l,
                className: g,
                children: x
            }), t[51] = l, t[52] = f, t[53] = te, t[54] = g, t[55] = x, t[56] = C) : C = t[56];
            let ae;
            t[57] !== d || t[58] !== C ? (ae = (0, Q.jsx)(`span`, {
                "data-action-constraints-trigger": !0,
                "data-testid": d,
                className: `action-constraints-trigger flex self-center`,
                children: C
            }), t[57] = d, t[58] = C, t[59] = ae) : ae = t[59], w = ae;
            let I;
            t[60] !== n.name || t[61] !== v || t[62] !== o || t[63] !== s ? (I = e => {
                if (v) return;
                let t = e.target;
                t instanceof Element && t.closest(`label, button, a, input, select, textarea, [role='checkbox'], [data-action-constraints-trigger], .action-constraints-trigger, .action-details`) || s(n.name, !o)
            }, t[60] = n.name, t[61] = v, t[62] = o, t[63] = s, t[64] = I) : I = t[64];
            let L = I,
                R = re && `ps-7`,
                z = !v && `hover:bg-token-bg-tertiary`;
            t[65] !== R || t[66] !== z ? (ue = p(`group`, R, z), t[65] = R, t[66] = z, t[67] = ue) : ue = t[67];
            let B = ne && `border-token-border-default border-b group-last:border-0`,
                V = v ? `cursor-not-allowed` : `cursor-default`;
            t[68] !== B || t[69] !== V ? (F = p([`px-2 py-1`, B, V]), t[68] = B, t[69] = V, t[70] = F) : F = t[70], P = `action-toggle-row-${S}`, ce = L;
            let H = !v && `cursor-pointer`;
            t[71] === H ? le = t[72] : (le = p(`grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 px-2 py-1.5`, H), t[71] = H, t[72] = le), se = ie, j = `contents cursor-pointer`, M = Re;
            let U;
            t[73] !== n.name || t[74] !== s ? (U = e => s(n.name, e.target.checked), t[73] = n.name, t[74] = s, t[75] = U) : U = t[75], t[76] !== v || t[77] !== o || t[78] !== U || t[79] !== ie ? (N = (0, Q.jsx)(oe, {
                id: ie,
                checked: o,
                onChange: U,
                disabled: v
            }), t[76] = v, t[77] = o, t[78] = U, t[79] = ie, t[80] = N) : N = t[80], A = `min-w-0`, O = `flex min-w-0 flex-wrap items-center gap-2`;
            let W = v && `text-token-text-secondary`,
                G;
            t[81] === W ? G = t[82] : (G = p([`font-mono text-sm font-medium`, W]), t[81] = W, t[82] = G), t[83] !== n.name || t[84] !== G ? (k = (0, Q.jsx)(`div`, {
                className: G,
                children: n.name
            }), t[83] = n.name, t[84] = G, t[85] = k) : k = t[85], de = `flex items-center gap-1 select-none`, D = fe({
                badgeKeys: r,
                labels: me
            }), t[5] = n, t[6] = h, t[7] = v, t[8] = re, t[9] = y, t[10] = o, t[11] = c, t[12] = s, t[13] = S, t[14] = _, t[15] = ne, t[16] = ie, t[17] = w, t[18] = T, t[19] = E, t[20] = D, t[21] = O, t[22] = k, t[23] = A, t[24] = se, t[25] = j, t[26] = M, t[27] = N, t[28] = P, t[29] = ce, t[30] = le, t[31] = F, t[32] = ue, t[33] = de
        } else w = t[17], T = t[18], E = t[19], D = t[20], O = t[21], k = t[22], A = t[23], se = t[24], j = t[25], M = t[26], N = t[27], P = t[28], ce = t[29], le = t[30], F = t[31], ue = t[32], de = t[33];
        let I;
        t[86] === r ? I = t[87] : (I = (0, Q.jsx)(we, {
            delta: r
        }), t[86] = r, t[87] = I);
        let L;
        t[88] !== D || t[89] !== I || t[90] !== de ? (L = (0, Q.jsxs)(`div`, {
            className: de,
            children: [D, I]
        }), t[88] = D, t[89] = I, t[90] = de, t[91] = L) : L = t[91];
        let R;
        t[92] !== O || t[93] !== k || t[94] !== L ? (R = (0, Q.jsxs)(`div`, {
            className: O,
            children: [k, L]
        }), t[92] = O, t[93] = k, t[94] = L, t[95] = R) : R = t[95];
        let z;
        t[96] === n.description ? z = t[97] : (z = n.description ? n.description : (0, Q.jsx)(b, {
            ...$.noDescription
        }), t[96] = n.description, t[97] = z);
        let B;
        t[98] === z ? B = t[99] : (B = (0, Q.jsx)(`div`, {
            className: `text-token-text-tertiary line-clamp-2 text-xs leading-5 wrap-anywhere`,
            children: z
        }), t[98] = z, t[99] = B);
        let V;
        t[100] !== A || t[101] !== R || t[102] !== B ? (V = (0, Q.jsxs)(`div`, {
            className: A,
            children: [R, B]
        }), t[100] = A, t[101] = R, t[102] = B, t[103] = V) : V = t[103];
        let H;
        t[104] !== se || t[105] !== j || t[106] !== M || t[107] !== N || t[108] !== V ? (H = (0, Q.jsxs)(`label`, {
            htmlFor: se,
            className: j,
            onClick: M,
            children: [N, V]
        }), t[104] = se, t[105] = j, t[106] = M, t[107] = N, t[108] = V, t[109] = H) : H = t[109];
        let U;
        t[110] !== w || t[111] !== T || t[112] !== E ? (U = E && (T ? (0, Q.jsx)(te, {
            label: T,
            className: `action-constraints-trigger self-center`,
            children: w
        }) : w), t[110] = w, t[111] = T, t[112] = E, t[113] = U) : U = t[113];
        let W;
        t[114] !== n || t[115] !== r || t[116] !== a || t[117] !== g ? (W = g && (0, Q.jsx)(`div`, {
            className: `col-start-2 col-end-4 min-w-0`,
            children: (0, Q.jsx)(Ee, {
                action: n,
                actionDelta: r,
                prevAction: a,
                initiallyCollapsed: !0
            })
        }), t[114] = n, t[115] = r, t[116] = a, t[117] = g, t[118] = W) : W = t[118];
        let G;
        t[119] !== P || t[120] !== ce || t[121] !== le || t[122] !== H || t[123] !== U || t[124] !== W ? (G = (0, Q.jsxs)(`div`, {
            "data-testid": P,
            onPointerUp: ce,
            className: le,
            children: [H, U, W]
        }), t[119] = P, t[120] = ce, t[121] = le, t[122] = H, t[123] = U, t[124] = W, t[125] = G) : G = t[125];
        let K;
        t[126] !== F || t[127] !== G ? (K = (0, Q.jsx)(`div`, {
            className: F,
            children: G
        }), t[126] = F, t[127] = G, t[128] = K) : K = t[128];
        let q;
        return t[129] !== ue || t[130] !== K ? (q = (0, Q.jsx)(`li`, {
            className: ue,
            children: K
        }), t[129] = ue, t[130] = K, t[131] = q) : q = t[131], q
    }, ut = e => {
        "use forget";
        let t = (0, it.c)(160),
            {
                app: r,
                actions: i,
                prevActions: a,
                deltas: o,
                initialEnabledActions: s,
                initialCustomNewActionPolicy: c,
                onRefreshActions: ee,
                refreshingActions: l,
                onSubmit: u,
                submitting: d,
                onCancel: f,
                refreshHidden: m,
                onOpenConstraints: h,
                constraintsDisabled: g,
                confirmDisabled: _,
                showScrollDividers: ne,
                onScrollabilityChange: re
            } = e,
            v = m !== void 0 && m,
            y = g !== void 0 && g,
            x = _ !== void 0 && _,
            S = ne !== void 0 && ne,
            C = ae(),
            ie = (0, Z.useRef)(null),
            [w, T] = (0, Z.useState)(s),
            [E, D] = (0, Z.useState)(c),
            [O, k] = (0, Z.useState)(!1),
            [A, se] = (0, Z.useState)(!1),
            j = (0, Z.useId)(),
            M = (0, Z.useId)(),
            N = (0, Z.useId)(),
            P = (0, Z.useId)(),
            ce, le;
        t[0] === s ? (ce = t[1], le = t[2]) : (ce = () => {
            T(new Set(s))
        }, le = [s], t[0] = s, t[1] = ce, t[2] = le), (0, Z.useEffect)(ce, le);
        let F, ue;
        t[3] === c ? (F = t[4], ue = t[5]) : (F = () => {
            D(c)
        }, ue = [c], t[3] = c, t[4] = F, t[5] = ue), (0, Z.useEffect)(F, ue);
        let L;
        t[6] === r ? L = t[7] : (L = st(r), t[6] = r, t[7] = L);
        let R = L,
            fe;
        if (t[8] !== i || t[9] !== o) {
            let e;
            t[11] === o ? e = t[12] : (e = (e, t) => (o.get(e.name) ?? De.Unmodified) - (o.get(t.name) ?? De.Unmodified) || e.name.localeCompare(t.name), t[11] = o, t[12] = e), fe = [...i].sort(e), t[8] = i, t[9] = o, t[10] = fe
        } else fe = t[10];
        let B = fe,
            V;
        t[13] === B ? V = t[14] : (V = B.filter(ze), t[13] = B, t[14] = V);
        let H = V,
            pe;
        t[15] === B ? pe = t[16] : (pe = B.filter(Be), t[15] = B, t[16] = pe);
        let U = pe,
            me;
        t[17] === i ? me = t[18] : (me = i.map(Ve), t[17] = i, t[18] = me);
        let W = me,
            G;
        t[19] !== W || t[20] !== r.primaryConnector.id || t[21] !== w || t[22] !== s ? (G = xe({
            connectorId: r.primaryConnector.id,
            adminConfigurableActionNames: W,
            initialEnabledActionNames: s,
            nextEnabledActionNames: w
        }), t[19] = W, t[20] = r.primaryConnector.id, t[21] = w, t[22] = s, t[23] = G) : G = t[23];
        let K = G,
            q;
        t[24] === H ? q = t[25] : (q = H.map(He), t[24] = H, t[25] = q);
        let J = q,
            he;
        t[26] === U ? he = t[27] : (he = U.map(Ue), t[26] = U, t[27] = he);
        let Y = he,
            _e;
        t[28] !== W || t[29] !== w ? (_e = W.length > 0 && W.every(e => w.has(e)), t[28] = W, t[29] = w, t[30] = _e) : _e = t[30];
        let ve = _e,
            ye;
        t[31] !== w || t[32] !== J ? (ye = J.length > 0 && J.every(e => w.has(e)), t[31] = w, t[32] = J, t[33] = ye) : ye = t[33];
        let be = ye,
            Se;
        t[34] !== w || t[35] !== Y ? (Se = Y.length > 0 && Y.every(e => w.has(e)), t[34] = w, t[35] = Y, t[36] = Se) : Se = t[36];
        let Ce = Se,
            we;
        if (t[37] !== w || t[38] !== J) {
            let e;
            t[40] === w ? e = t[41] : (e = e => w.has(e), t[40] = w, t[41] = e), we = J.filter(e), t[37] = w, t[38] = J, t[39] = we
        } else we = t[39];
        let Te = we.length,
            Ee;
        if (t[42] !== w || t[43] !== Y) {
            let e;
            t[45] === w ? e = t[46] : (e = e => w.has(e), t[45] = w, t[46] = e), Ee = Y.filter(e), t[42] = w, t[43] = Y, t[44] = Ee
        } else Ee = t[44];
        let Oe = Ee.length,
            ke;
        t[47] !== be || t[48] !== w || t[49] !== J ? (ke = !be && J.some(e => w.has(e)), t[47] = be, t[48] = w, t[49] = J, t[50] = ke) : ke = t[50];
        let Ae = ke,
            je;
        t[51] !== Ce || t[52] !== w || t[53] !== Y ? (je = !Ce && Y.some(e => w.has(e)), t[51] = Ce, t[52] = w, t[53] = Y, t[54] = je) : je = t[54];
        let Me = je,
            X = !!l || d,
            Pe = We,
            Fe;
        t[55] !== W || t[56] !== ve || t[57] !== be || t[58] !== w || t[59] !== J ? (Fe = (e, t) => {
            let n = new Set(w);
            for (let r of e) t ? n.add(r) : n.delete(r);
            let r = Pe(W, n),
                i = Pe(J, n);
            T(n), t && D(e => !ve && r ? `custom_new_all` : !be && i && e !== `custom_new_all` ? `custom_new_read_only` : e)
        }, t[55] = W, t[56] = ve, t[57] = be, t[58] = w, t[59] = J, t[60] = Fe) : Fe = t[60];
        let Ie = Fe,
            Le;
        t[61] !== J || t[62] !== Ie ? (Le = e => {
            Ie(J, e)
        }, t[61] = J, t[62] = Ie, t[63] = Le) : Le = t[63];
        let Re = Le,
            Ye;
        t[64] === re ? Ye = t[65] : (Ye = () => {
            let e = ie.current;
            re?.(e ? e.scrollHeight > e.clientHeight + 1 : !1)
        }, t[64] = re, t[65] = Ye);
        let Xe = Ye,
            Ze, Qe;
        t[66] === Xe ? (Ze = t[67], Qe = t[68]) : (Ze = () => {
            Xe();
            let e = ie.current;
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
        t[71] !== i.length || t[72] !== y || t[73] !== O || t[74] !== l || t[75] !== d || t[76] !== Xe || t[77] !== A ? (et = [i.length, y, O, l, d, Xe, A], t[71] = i.length, t[72] = y, t[73] = O, t[74] = l, t[75] = d, t[76] = Xe, t[77] = A, t[78] = et) : et = t[78], (0, Z.useEffect)($e, et);
        let tt;
        t[79] === Symbol.for(`react.memo_cache_sentinel`) ? (tt = [
            [`custom_new_all`, $.unconfiguredActionsToggleLabel],
            [`custom_new_read_only`, $.unconfiguredReadActionsToggleLabel],
            [`custom`, $.unconfiguredNoActionsToggleLabel]
        ], t[79] = tt) : tt = t[79];
        let nt = tt,
            rt;
        t[80] !== C || t[81] !== ee || t[82] !== v || t[83] !== l || t[84] !== d ? (rt = v ? null : (0, Q.jsx)(te, {
            label: ee ? void 0 : C.formatMessage($.needLink),
            children: (0, Q.jsx)(n, {
                size: `small`,
                color: `secondary`,
                loading: l,
                disabled: !ee || d,
                onClick: () => ee?.(),
                children: (0, Q.jsx)(b, {
                    ...$.refreshLabel
                })
            })
        }), t[80] = C, t[81] = ee, t[82] = v, t[83] = l, t[84] = d, t[85] = rt) : rt = t[85];
        let at = rt,
            ct;
        t[86] === r.primaryConnector.name ? ct = t[87] : (ct = (0, Q.jsx)(`p`, {
            className: `text-token-text-secondary flex-1 pb-0 text-sm leading-5`,
            children: (0, Q.jsx)(b, {
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
        t[91] === y ? dt = t[92] : (dt = y && (0, Q.jsx)(`div`, {
            className: `border-token-border-default bg-token-bg-tertiary text-token-text-secondary rounded-lg border px-3 py-2 text-xs`,
            children: (0, Q.jsx)(b, {
                ...$.constraintsDisabledBySync
            })
        }), t[91] = y, t[92] = dt);
        let ft;
        t[93] !== r.primaryConnector.name || t[94] !== K || t[95] !== Ie ? (ft = K.length > 0 && (0, Q.jsx)(ge, {
            appName: r.primaryConnector.name,
            onUndo: () => Ie([...K], !0)
        }), t[93] = r.primaryConnector.name, t[94] = K, t[95] = Ie, t[96] = ft) : ft = t[96];
        let pt;
        t[97] !== i.length || t[98] !== be || t[99] !== Ce || t[100] !== y || t[101] !== o || t[102] !== X || t[103] !== Re || t[104] !== w || t[105] !== Te || t[106] !== Oe || t[107] !== C || t[108] !== R || t[109] !== h || t[110] !== a || t[111] !== H || t[112] !== O || t[113] !== Ae || t[114] !== j || t[115] !== Ie || t[116] !== Y || t[117] !== U || t[118] !== A || t[119] !== Me || t[120] !== M ? (pt = i.length === 0 ? (0, Q.jsx)(`p`, {
            className: `text-token-text-tertiary m-4 text-center text-xs italic`,
            children: (0, Q.jsx)(b, {
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
                                t instanceof HTMLElement && t.closest(`label, button, input`) || k(Ge)
                            },
                            className: p(`flex items-center justify-between gap-3 px-4 py-3 transition-colors`, X ? `cursor-not-allowed` : `hover:bg-token-bg-tertiary cursor-pointer`),
                            children: [(0, Q.jsxs)(`label`, {
                                htmlFor: `action-toggle-all-read-actions`,
                                className: p(`flex min-w-0 items-center gap-3`, X ? `cursor-not-allowed opacity-60` : `cursor-pointer`),
                                children: [(0, Q.jsx)(oe, {
                                    id: `action-toggle-all-read-actions`,
                                    checked: be,
                                    indeterminate: Ae,
                                    onChange: e => Re(e.target.checked),
                                    disabled: X
                                }), (0, Q.jsxs)(`span`, {
                                    className: `inline-flex min-w-0 items-baseline gap-2 leading-6`,
                                    children: [(0, Q.jsx)(`span`, {
                                        className: `truncate`,
                                        children: (0, Q.jsx)(b, {
                                            ...$.readActionsSectionLabel
                                        })
                                    }), !be && (0, Q.jsx)(`span`, {
                                        className: `text-token-text-tertiary inline-flex text-sm leading-none`,
                                        children: (0, Q.jsx)(b, {
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
                                "aria-label": C.formatMessage(O ? $.hideActionDetailsLabel : $.viewActionDetailsLabel),
                                "aria-expanded": O,
                                "aria-controls": j,
                                onClick: () => k(Ke),
                                disabled: X,
                                children: O ? (0, Q.jsx)(de, {
                                    className: `h-4 w-4`,
                                    "aria-hidden": !0
                                }) : (0, Q.jsx)(z, {
                                    className: `h-4 w-4`,
                                    "aria-hidden": !0
                                })
                            })]
                        }), O && (0, Q.jsx)(`ul`, {
                            id: j,
                            className: `p-0`,
                            children: H.map(e => (0, Q.jsx)(lt, {
                                action: e,
                                actionDelta: o.get(e.name),
                                prevAction: a?.get(e.name)?.action,
                                isEnabled: w.has(e.name),
                                onToggle: (e, t) => Ie([e], t),
                                disabled: X,
                                onOpenConstraints: h,
                                constraintsDisabled: y,
                                showActionDetails: !1,
                                showActionTypeBadges: !1,
                                showRowBorder: !1,
                                indented: !0
                            }, e.name))
                        })]
                    }), U.length > 0 && (0, Q.jsxs)(`div`, {
                        className: p(H.length > 0 && `border-token-border-default border-t`),
                        children: [(0, Q.jsxs)(`div`, {
                            "data-testid": `action-set-row-write`,
                            onPointerUp: e => {
                                if (X) return;
                                let t = e.target;
                                t instanceof HTMLElement && t.closest(`label, button, input`) || se(qe)
                            },
                            className: p(`flex items-center justify-between gap-3 px-4 py-3 transition-colors`, X ? `cursor-not-allowed` : `hover:bg-token-bg-tertiary cursor-pointer`),
                            children: [(0, Q.jsxs)(`label`, {
                                htmlFor: `action-toggle-all-write-actions`,
                                className: p(`flex min-w-0 items-center gap-3`, X ? `cursor-not-allowed opacity-60` : `cursor-pointer`),
                                children: [(0, Q.jsx)(oe, {
                                    id: `action-toggle-all-write-actions`,
                                    checked: Ce,
                                    indeterminate: Me,
                                    onChange: e => Ie(Y, e.target.checked),
                                    disabled: X
                                }), (0, Q.jsxs)(`span`, {
                                    className: `inline-flex min-w-0 items-baseline gap-2 leading-6`,
                                    children: [(0, Q.jsx)(`span`, {
                                        className: `truncate`,
                                        children: (0, Q.jsx)(b, {
                                            ...$.writeActionsSectionLabel
                                        })
                                    }), !Ce && (0, Q.jsx)(`span`, {
                                        className: `text-token-text-tertiary inline-flex text-sm leading-none`,
                                        children: (0, Q.jsx)(b, {
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
                                "aria-label": C.formatMessage(A ? $.hideActionDetailsLabel : $.viewActionDetailsLabel),
                                "aria-expanded": A,
                                "aria-controls": M,
                                onClick: () => se(Je),
                                disabled: X,
                                children: A ? (0, Q.jsx)(de, {
                                    className: `h-4 w-4`,
                                    "aria-hidden": !0
                                }) : (0, Q.jsx)(z, {
                                    className: `h-4 w-4`,
                                    "aria-hidden": !0
                                })
                            })]
                        }), A && (0, Q.jsx)(`ul`, {
                            id: M,
                            className: `p-0`,
                            children: U.map(e => (0, Q.jsx)(lt, {
                                action: e,
                                actionDelta: o.get(e.name),
                                prevAction: a?.get(e.name)?.action,
                                isEnabled: w.has(e.name),
                                onToggle: (e, t) => Ie([e], t),
                                disabled: X,
                                onOpenConstraints: h,
                                constraintsDisabled: y,
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
                        children: [(0, Q.jsx)(I, {
                            className: `h-4 w-4 shrink-0`
                        }), (0, Q.jsx)(`span`, {
                            children: (0, Q.jsx)(b, {
                                ...$.syncEnabledConstraintsNotice
                            })
                        })]
                    })
                })]
            })
        }), t[97] = i.length, t[98] = be, t[99] = Ce, t[100] = y, t[101] = o, t[102] = X, t[103] = Re, t[104] = w, t[105] = Te, t[106] = Oe, t[107] = C, t[108] = R, t[109] = h, t[110] = a, t[111] = H, t[112] = O, t[113] = Ae, t[114] = j, t[115] = Ie, t[116] = Y, t[117] = U, t[118] = A, t[119] = Me, t[120] = M, t[121] = pt) : pt = t[121];
        let mt;
        t[122] !== ut || t[123] !== dt || t[124] !== ft || t[125] !== pt ? (mt = (0, Q.jsxs)(`div`, {
            ref: ie,
            className: `min-h-0 flex-1 space-y-3 overflow-y-auto px-6 pt-2 pb-3`,
            children: [ut, dt, ft, pt]
        }), t[122] = ut, t[123] = dt, t[124] = ft, t[125] = pt, t[126] = mt) : mt = t[126];
        let ht;
        t[127] !== i.length || t[128] !== r.primaryConnector.name || t[129] !== E || t[130] !== X || t[131] !== S || t[132] !== P || t[133] !== N ? (ht = i.length > 0 && (0, Q.jsxs)(`div`, {
            className: p(`shrink-0 space-y-3 px-6 pt-1 pb-6`, S && `border-token-border-default border-t pt-4`),
            children: [(0, Q.jsx)(`div`, {
                id: N,
                className: `text-token-text-secondary text-sm leading-5`,
                children: (0, Q.jsx)(b, {
                    ...$.unconfiguredActionsDescription,
                    values: {
                        app: r.primaryConnector.name
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
                            checked: E === t,
                            onChange: () => D(t),
                            disabled: X
                        }), (0, Q.jsx)(`span`, {
                            children: (0, Q.jsx)(b, {
                                ...n
                            })
                        })]
                    }, t)
                })
            })]
        }), t[127] = i.length, t[128] = r.primaryConnector.name, t[129] = E, t[130] = X, t[131] = S, t[132] = P, t[133] = N, t[134] = ht) : ht = t[134];
        let gt = S && i.length === 0 && `border-token-border-default border-t pt-4`,
            _t;
        t[135] === gt ? _t = t[136] : (_t = p(`flex shrink-0 justify-end gap-2 px-6 pt-0 pb-6`, gt), t[135] = gt, t[136] = _t);
        let vt;
        t[137] === Symbol.for(`react.memo_cache_sentinel`) ? (vt = (0, Q.jsx)(b, {
            id: `59bwQY`,
            defaultMessage: `Cancel`
        }), t[137] = vt) : vt = t[137];
        let yt;
        t[138] !== X || t[139] !== f ? (yt = (0, Q.jsx)(n, {
            color: `secondary`,
            onClick: f,
            disabled: X,
            children: vt
        }), t[138] = X, t[139] = f, t[140] = yt) : yt = t[140];
        let bt;
        t[141] !== W || t[142] !== E || t[143] !== w || t[144] !== u || t[145] !== J ? (bt = () => u({
            enabledActions: Array.from(w),
            actionPolicy: Ne({
                actionIds: W,
                readOnlyActionIds: J,
                enabledActions: w,
                customNewActionPolicy: E
            })
        }), t[141] = W, t[142] = E, t[143] = w, t[144] = u, t[145] = J, t[146] = bt) : bt = t[146];
        let xt = X || x,
            St;
        t[147] === Symbol.for(`react.memo_cache_sentinel`) ? (St = (0, Q.jsx)(b, {
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
                onConfirm: o,
                initialEnabledActions: s,
                initialActionPolicy: c,
                initialActionPolicyLoading: l,
                showOverlayBackground: u,
                submitting: f,
                showParameterConstraints: te
            } = e,
            p = c === void 0 ? null : c,
            m = l !== void 0 && l,
            h = u === void 0 || u,
            g = f !== void 0 && f,
            _ = te === void 0 || te,
            re = ae(),
            v = y(),
            [x, S] = (0, Z.useState)(null),
            [C, w] = (0, Z.useState)(!1),
            T = (0, Z.useRef)(!1),
            E;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (E = {
            forceEnable: !0
        }, t[0] = E) : E = t[0];
        let {
            actions: D,
            isLoading: k,
            refetch: oe
        } = O(n.primaryConnector, j.ADMIN_SETTING, E), A;
        t[1] === D ? A = t[2] : (A = D.filter(Me), t[1] = D, t[2] = A);
        let M = A,
            N;
        bb0: {
            if (s) {
                let e;
                t[3] === M ? e = t[4] : (e = new Set(M.map(Ye)), t[3] = M, t[4] = e);
                let n = e,
                    r;
                t[5] === s ? r = t[6] : (r = Array.from(s), t[5] = s, t[6] = r);
                let i;
                t[7] !== r || t[8] !== n ? (i = new Set(r.filter(e => n.has(e))), t[7] = r, t[8] = n, t[9] = i) : i = t[9], N = i;
                break bb0
            }
            let e;t[10] === M ? e = t[11] : (e = new Set(M.filter(Xe).map(Ze)), t[10] = M, t[11] = e),
            N = e
        }
        let P = N,
            [F, ue] = (0, Z.useState)(Fe),
            de, I;
        t[12] !== k || t[13] !== p || t[14] !== m ? (I = () => {
            T.current || k || m || (ue(X(p)), T.current = !0)
        }, de = [k, p, m], t[12] = k, t[13] = p, t[14] = m, t[15] = de, t[16] = I) : (de = t[15], I = t[16]), (0, Z.useEffect)(I, de);
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
            [z, fe] = (0, Z.useState)(null),
            B = Te(R, z),
            H;
        t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (H = d()?.getWorkspaceId(), t[19] = H) : H = t[19];
        let pe = H,
            U = se(),
            me = V(),
            W = (0, Z.useRef)(!1),
            K;
        t[20] !== n || t[21] !== _ ? (K = Oe({
            app: n,
            showParameterConstraints: _
        }), t[20] = n, t[21] = _, t[22] = K) : K = t[22];
        let q = K,
            J, he;
        t[23] !== k || t[24] !== n.primaryConnector.actions_changed_since_review || t[25] !== n.primaryConnector.id || t[26] !== me || t[27] !== U || t[28] !== M ? (J = () => {
            if (W.current || !pe || !n.primaryConnector.actions_changed_since_review || k) return;
            W.current = !0;
            let e = M.filter(Qe).map($e);
            (async () => {
                await ce(n.primaryConnector.id, pe, e), U(), me(n.primaryConnector.id)
            })()
        }, he = [k, n.primaryConnector.actions_changed_since_review, n.primaryConnector.id, me, U, M, pe], t[23] = k, t[24] = n.primaryConnector.actions_changed_since_review, t[25] = n.primaryConnector.id, t[26] = me, t[27] = U, t[28] = M, t[29] = J, t[30] = he) : (J = t[29], he = t[30]), (0, Z.useEffect)(J, he);
        let Y;
        t[31] === Symbol.for(`react.memo_cache_sentinel`) ? (Y = a(), t[31] = Y) : Y = t[31];
        let ge = Y,
            _e;
        t[32] !== R || t[33] !== z || t[34] !== oe ? (_e = async e => {
            z || fe(R), await le(e), await oe()
        }, t[32] = R, t[33] = z, t[34] = oe, t[35] = _e) : _e = t[35];
        let ve;
        t[36] !== n.primaryConnector.id || t[37] !== v ? (ve = () => {
            v.invalidateQueries({
                queryKey: [`connector-action-clamp`, n.primaryConnector.id]
            })
        }, t[36] = n.primaryConnector.id, t[37] = v, t[38] = ve) : ve = t[38];
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
        let xe = ie(be),
            {
                data: Se
            } = ne(et),
            we = Ie(Se, n.primaryConnector.id),
            Ee = G(n.primaryConnector),
            De;
        t[43] === re ? De = t[44] : (De = re.formatMessage($.actionsControlModalTitle), t[43] = re, t[44] = De);
        let ke;
        t[45] !== B || t[46] !== k || t[47] !== n || t[48] !== q || t[49] !== P || t[50] !== m || t[51] !== Ee || t[52] !== we || t[53] !== i || t[54] !== o || t[55] !== C || t[56] !== z || t[57] !== xe || t[58] !== F || t[59] !== g || t[60] !== M ? (ke = k && !xe.isPending ? (0, Q.jsxs)(`div`, {
            className: `space-y-4 overflow-y-auto px-6 pt-2 pb-6`,
            children: [(0, Q.jsx)(`p`, {
                className: `text-token-text-secondary pb-0 text-sm leading-5`,
                children: (0, Q.jsx)(b, {
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
            deltas: B,
            initialEnabledActions: P,
            initialCustomNewActionPolicy: F,
            onSubmit: o,
            onCancel: i,
            refreshingActions: xe.isPending,
            submitting: g || m,
            confirmDisabled: M.length === 0,
            refreshHidden: !Ee,
            onRefreshActions: Ee && we !== void 0 ? () => {
                xe.mutate(we.id)
            } : void 0,
            onOpenConstraints: q ? e => S(e) : void 0,
            constraintsDisabled: !1,
            showScrollDividers: C,
            onScrollabilityChange: w
        }), t[45] = B, t[46] = k, t[47] = n, t[48] = q, t[49] = P, t[50] = m, t[51] = Ee, t[52] = we, t[53] = i, t[54] = o, t[55] = C, t[56] = z, t[57] = xe, t[58] = F, t[59] = g, t[60] = M, t[61] = ke) : ke = t[61];
        let Ae;
        t[62] !== r || t[63] !== C || t[64] !== h || t[65] !== De || t[66] !== ke ? (Ae = (0, Q.jsx)(ee, {
            isOpen: !0,
            onClose: r,
            showOverlayBackground: h,
            testId: `modal-app-actions-control`,
            title: De,
            size: `custom`,
            className: `max-w-5xl`,
            hasSeparator: C,
            noPadding: !0,
            isScrollable: !1,
            headerClassName: `!px-6 !pt-6 !pb-2`,
            contentClassName: `flex flex-col max-h-[80vh]`,
            children: ke
        }), t[62] = r, t[63] = C, t[64] = h, t[65] = De, t[66] = ke, t[67] = Ae) : Ae = t[67];
        let je;
        t[68] !== n || t[69] !== q || t[70] !== x ? (je = q && x && (0, Q.jsx)(pt, {
            app: n,
            onClose: () => S(null),
            onBack: () => S(null),
            showOverlayBackground: !0,
            initialSelectedAction: x
        }), t[68] = n, t[69] = q, t[70] = x, t[71] = je) : je = t[71];
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
            i = ae(),
            s;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (s = d()?.getWorkspaceId(), t[0] = s) : s = t[0];
        let c = s,
            ee;
        t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (ee = a(), t[1] = ee) : ee = t[1];
        let l = ee,
            u = y(),
            f = se(),
            te = V(),
            p = U(),
            m = ne(tt),
            h = ne(nt),
            g = !!c,
            _;
        t[2] !== n.primaryConnector.id || t[3] !== m ? (_ = () => {
            q(m, c ?? ``, n.primaryConnector.id, g)
        }, t[2] = n.primaryConnector.id, t[3] = m, t[4] = _) : _ = t[4];
        let re;
        t[5] !== n.primaryConnector.id || t[6] !== h || t[7] !== m ? (re = [m, h, c, n.primaryConnector.id, g], t[5] = n.primaryConnector.id, t[6] = h, t[7] = m, t[8] = re) : re = t[8], (0, Z.useEffect)(_, re);
        let v;
        t[9] !== n.primaryConnector.id || t[10] !== h || t[11] !== m ? (v = Y({
            queryKeyPrefix: `connector-workspace-permissions`,
            workspaceId: c,
            connectorId: n.primaryConnector.id,
            enabled: g,
            transport: m,
            actorId: h
        }), t[9] = n.primaryConnector.id, t[10] = h, t[11] = m, t[12] = v) : v = t[12];
        let {
            data: b,
            isLoading: S
        } = x(v), C;
        t[13] !== n.primaryConnector.id || t[14] !== te || t[15] !== p || t[16] !== f || t[17] !== u ? (C = async e => {
            let {
                enabledActions: t,
                actionPolicy: r
            } = e;
            if (!c) throw Error(`Workspace ID is required to update app actions.`);
            let i = {
                enabled: !0,
                enabled_actions: t
            };
            r && (i.action_policy = r), await o.safePost(`/accounts/{account_id}/connectors/{connector_id}/workspace_permissions`, {
                parameters: {
                    path: {
                        account_id: c,
                        connector_id: n.primaryConnector.id
                    }
                },
                requestBody: i
            }), f(), te(n.primaryConnector.id), await u.invalidateQueries({
                queryKey: [`connector-actions`, n.primaryConnector.id]
            }), await u.invalidateQueries({
                queryKey: [`connector-workspace-permissions`, c, n.primaryConnector.id]
            }), await p()
        }, t[13] = n.primaryConnector.id, t[14] = te, t[15] = p, t[16] = f, t[17] = u, t[18] = C) : C = t[18];
        let w;
        t[19] !== i || t[20] !== r ? (w = () => {
            l.success(i.formatMessage({
                id: `AW+VoO`,
                defaultMessage: `App tools updated successfully.`
            })), r()
        }, t[19] = i, t[20] = r, t[21] = w) : w = t[21];
        let T;
        t[22] === i ? T = t[23] : (T = () => {
            l.danger(i.formatMessage({
                id: `IRGvbN`,
                defaultMessage: `Failed to update app tools. Please try again.`
            }))
        }, t[22] = i, t[23] = T);
        let E;
        t[24] !== C || t[25] !== w || t[26] !== T ? (E = {
            mutationFn: C,
            onSuccess: w,
            onError: T
        }, t[24] = C, t[25] = w, t[26] = T, t[27] = E) : E = t[27];
        let {
            mutateAsync: D,
            isPending: O
        } = ie(E), k;
        t[28] !== r || t[29] !== O ? (k = () => {
            O || r()
        }, t[28] = r, t[29] = O, t[30] = k) : k = t[30];
        let oe = k,
            A = b?.action_policy,
            j = b?.enabled_actions,
            M;
        t[31] !== A || t[32] !== j ? (M = je({
            actionPolicy: A,
            enabledActions: j
        }), t[31] = A, t[32] = j, t[33] = M) : M = t[33];
        let N = !!c && S,
            P;
        return t[34] !== n || t[35] !== oe || t[36] !== D || t[37] !== O || t[38] !== M || t[39] !== N ? (P = (0, Q.jsx)(dt, {
            app: n,
            onClose: oe,
            onCancel: oe,
            onConfirm: D,
            submitting: O,
            initialActionPolicy: M,
            initialActionPolicyLoading: N
        }), t[34] = n, t[35] = oe, t[36] = D, t[37] = O, t[38] = M, t[39] = N, t[40] = P) : P = t[40], P
    }, pt = e => {
        "use forget";
        let t = (0, it.c)(3),
            n = ne(rt),
            r;
        return t[0] !== e || t[1] !== n ? (r = (0, Q.jsx)(ye, {
            ...e,
            workspaceId: n
        }), t[0] = e, t[1] = n, t[2] = r) : r = t[2], r
    }, $ = v({
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
//# sourceMappingURL=46874983-ng4tinv7mwft23le.js.map