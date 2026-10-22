import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $7 as n,
    $T as r,
    A8 as i,
    Aw as a,
    Bz as o,
    IU as s,
    J5 as c,
    LU as l,
    N1 as u,
    Ow as ee,
    Qy as d,
    U1 as te,
    Vz as f,
    Y7 as ne,
    Zy as re,
    eE as p,
    l7 as m,
    q1 as ie,
    u7 as ae
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    Bn as oe,
    Ln as h,
    N as g,
    Nn as _,
    O as v,
    Rn as y,
    Vn as b,
    p as se,
    s as x,
    wn as S,
    zn as ce
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    I3t as C,
    JKn as le,
    Jrt as w,
    KQ as T,
    LTn as E,
    N3t as D,
    RQ as O,
    RTn as k,
    WQ as ue,
    YKn as A,
    iit as j,
    lFn as de,
    nit as fe,
    oFn as M
} from "./conversation-small-fh0oqifngkf5rvl1.js";
import {
    DC as pe,
    EC as me,
    Ov as N,
    TC as P,
    kv as F,
    wC as I
} from "./30901919-cmi3nh547dwrqkxv.js";
import {
    Cx as L,
    Dx as R,
    Ox as z,
    Sx as B,
    cy as V,
    hy as H,
    my as U,
    wx as W,
    xx as he
} from "./c2675c8c-4fpunyxk1uf8cfp1.js";
import {
    a as G,
    r as K,
    t as q
} from "./832dbd3a-nt6ho4ay949wjxow.js";
import {
    n as ge,
    t as J
} from "./99a48954-e3af63dlpjxzj8z4.js";
import {
    d as _e,
    f as ve,
    g as ye,
    h as be,
    m as Y,
    p as xe
} from "./b7c53a83-dt5hlzmbnzpo9ahe.js";
import {
    a as Se,
    i as Ce,
    n as we,
    o as Te,
    r as Ee,
    t as De
} from "./b00adf98-bk669r9h9byz0s0y.js";
import {
    n as Oe,
    o as ke,
    s as Ae
} from "./e1258b01-nhha5ikna22hd079.js";
import {
    a as je,
    i as Me,
    n as Ne,
    o as X,
    r as Pe,
    t as Fe
} from "./16e34fcb-i30xwu255y9ake5s.js";
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
        productSku: E.ADMIN_SETTING
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
    it = S(), ye(), ge(), L(), w(), p(), A(), pe(), P(), F(), f(), a(), d(), C(), de(), G(), O(), k(), R(), i(), ie(), l(), n(), x(), ae(), Z = t(b()), y(), Se(), Y(), ve(), V(), Ae(), Pe(), Le(), Q = oe(), at = new Set([`deleted`]), ot = `text-blue-500 dark:text-blue-400`, st = e => e.knowledgeConfig.some(e => e.connections.some(e => !at.has(e.connection_status))), ct = e => {
        "use forget";
        let t = (0, it.c)(6),
            {
                showActionDetails: n
            } = e,
            r = n === void 0 || n,
            i;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, Q.jsx)(le, {
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
                onToggle: s,
                onOpenConstraints: c,
                constraintsDisabled: l,
                showActionDetails: u,
                showActionTypeBadges: ee,
                showRowBorder: d,
                indented: te,
                disabled: f
            } = e,
            ne = l !== void 0 && l,
            p = u === void 0 || u,
            ie = ee === void 0 || ee,
            ae = d === void 0 || d,
            oe = te !== void 0 && te,
            h = f !== void 0 && f,
            g = ce(),
            v;
        if (t[0] !== n.name) {
            let e;
            t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (e = /[^a-zA-Z0-9_-]/g, t[2] = e) : e = t[2], v = n.name.replace(e, `-`), t[0] = n.name, t[1] = v
        } else v = t[1];
        let y = v,
            b;
        t[3] === n ? b = t[4] : (b = Ce(n), t[3] = n, t[4] = b);
        let se = `action-toggle-${y}-${b}`,
            x, S, C, w, T, E, D, O, k, ue, A, j, de, fe, M, pe, me;
        if (t[5] !== n || t[6] !== ne || t[7] !== h || t[8] !== oe || t[9] !== g || t[10] !== a || t[11] !== c || t[12] !== s || t[13] !== y || t[14] !== ie || t[15] !== ae || t[16] !== se) {
            let e;
            t[34] === ie ? e = t[35] : (e = e => ie || e !== `read` && e !== `write`, t[34] = ie, t[35] = e);
            let r = B(n).filter(e),
                i;
            t[36] !== n || t[37] !== c ? (i = c !== void 0 && ke(n), t[36] = n, t[37] = c, t[38] = i) : i = t[38], C = i;
            let l = $.openActionPlaceholder,
                u = h || ne,
                ee;
            t[39] !== ne || t[40] !== g ? (ee = ne ? g.formatMessage($.constraintsDisabledBySync) : void 0, t[39] = ne, t[40] = g, t[41] = ee) : ee = t[41], S = ee;
            let d = `action-constraints-trigger-${y}`,
                te;
            t[42] === g ? te = t[43] : (te = g.formatMessage(l), t[42] = g, t[43] = te);
            let f;
            t[44] !== n || t[45] !== c ? (f = e => {
                e.preventDefault(), e.stopPropagation(), c?.(n)
            }, t[44] = n, t[45] = c, t[46] = f) : f = t[46];
            let re = u && `cursor-not-allowed`,
                p;
            t[47] === re ? p = t[48] : (p = m(`text-token-text-tertiary hover:bg-token-bg-secondary hover:text-token-text-primary flex size-8 items-center justify-center rounded-md opacity-0 transition-colors group-hover:opacity-100 focus-visible:opacity-100`, re), t[47] = re, t[48] = p);
            let _ = `action-constraints-icon-${y}`,
                v;
            t[49] === _ ? v = t[50] : (v = (0, Q.jsx)(o.SettingsWrench, {
                className: `h-4 w-4`,
                "data-testid": _,
                "aria-hidden": !0
            }), t[49] = _, t[50] = v);
            let b;
            t[51] !== u || t[52] !== te || t[53] !== f || t[54] !== p || t[55] !== v ? (b = (0, Q.jsx)(`button`, {
                type: `button`,
                "aria-label": te,
                onClick: f,
                disabled: u,
                className: p,
                children: v
            }), t[51] = u, t[52] = te, t[53] = f, t[54] = p, t[55] = v, t[56] = b) : b = t[56];
            let ce;
            t[57] !== d || t[58] !== b ? (ce = (0, Q.jsx)(`span`, {
                "data-action-constraints-trigger": !0,
                "data-testid": d,
                className: `action-constraints-trigger flex self-center`,
                children: b
            }), t[57] = d, t[58] = b, t[59] = ce) : ce = t[59], x = ce;
            let N;
            t[60] !== n.name || t[61] !== h || t[62] !== a || t[63] !== s ? (N = e => {
                if (h) return;
                let t = e.target;
                t instanceof Element && t.closest(`label, button, a, input, select, textarea, [role='checkbox'], [data-action-constraints-trigger], .action-constraints-trigger, .action-details`) || s(n.name, !a)
            }, t[60] = n.name, t[61] = h, t[62] = a, t[63] = s, t[64] = N) : N = t[64];
            let P = N,
                F = oe && `ps-7`,
                I = !h && `hover:bg-token-bg-tertiary`;
            t[65] !== F || t[66] !== I ? (pe = m(`group`, F, I), t[65] = F, t[66] = I, t[67] = pe) : pe = t[67];
            let L = ae && `border-token-border-default border-b group-last:border-0`,
                R = h ? `cursor-not-allowed` : `cursor-default`;
            t[68] !== L || t[69] !== R ? (M = m([`px-2 py-1`, L, R]), t[68] = L, t[69] = R, t[70] = M) : M = t[70], j = `action-toggle-row-${y}`, de = P;
            let z = !h && `cursor-pointer`;
            t[71] === z ? fe = t[72] : (fe = m(`grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 px-2 py-1.5`, z), t[71] = z, t[72] = fe), O = se, k = `contents cursor-pointer`, ue = Re;
            let V;
            t[73] !== n.name || t[74] !== s ? (V = e => s(n.name, e.target.checked), t[73] = n.name, t[74] = s, t[75] = V) : V = t[75], t[76] !== h || t[77] !== a || t[78] !== V || t[79] !== se ? (A = (0, Q.jsx)(le, {
                id: se,
                checked: a,
                onChange: V,
                disabled: h
            }), t[76] = h, t[77] = a, t[78] = V, t[79] = se, t[80] = A) : A = t[80], D = `min-w-0`, T = `flex min-w-0 flex-wrap items-center gap-2`;
            let H = h && `text-token-text-secondary`,
                U;
            t[81] === H ? U = t[82] : (U = m([`font-mono text-sm font-medium`, H]), t[81] = H, t[82] = U), t[83] !== n.name || t[84] !== U ? (E = (0, Q.jsx)(`div`, {
                className: U,
                children: n.name
            }), t[83] = n.name, t[84] = U, t[85] = E) : E = t[85], me = `flex items-center gap-1 select-none`, w = W({
                badgeKeys: r,
                labels: he
            }), t[5] = n, t[6] = ne, t[7] = h, t[8] = oe, t[9] = g, t[10] = a, t[11] = c, t[12] = s, t[13] = y, t[14] = ie, t[15] = ae, t[16] = se, t[17] = x, t[18] = S, t[19] = C, t[20] = w, t[21] = T, t[22] = E, t[23] = D, t[24] = O, t[25] = k, t[26] = ue, t[27] = A, t[28] = j, t[29] = de, t[30] = fe, t[31] = M, t[32] = pe, t[33] = me
        } else x = t[17], S = t[18], C = t[19], w = t[20], T = t[21], E = t[22], D = t[23], O = t[24], k = t[25], ue = t[26], A = t[27], j = t[28], de = t[29], fe = t[30], M = t[31], pe = t[32], me = t[33];
        let N;
        t[86] === r ? N = t[87] : (N = (0, Q.jsx)(we, {
            delta: r
        }), t[86] = r, t[87] = N);
        let P;
        t[88] !== w || t[89] !== N || t[90] !== me ? (P = (0, Q.jsxs)(`div`, {
            className: me,
            children: [w, N]
        }), t[88] = w, t[89] = N, t[90] = me, t[91] = P) : P = t[91];
        let F;
        t[92] !== T || t[93] !== E || t[94] !== P ? (F = (0, Q.jsxs)(`div`, {
            className: T,
            children: [E, P]
        }), t[92] = T, t[93] = E, t[94] = P, t[95] = F) : F = t[95];
        let I;
        t[96] === n.description ? I = t[97] : (I = n.description ? n.description : (0, Q.jsx)(_, {
            ...$.noDescription
        }), t[96] = n.description, t[97] = I);
        let L;
        t[98] === I ? L = t[99] : (L = (0, Q.jsx)(`div`, {
            className: `text-token-text-tertiary line-clamp-2 text-xs leading-5 wrap-anywhere`,
            children: I
        }), t[98] = I, t[99] = L);
        let R;
        t[100] !== D || t[101] !== F || t[102] !== L ? (R = (0, Q.jsxs)(`div`, {
            className: D,
            children: [F, L]
        }), t[100] = D, t[101] = F, t[102] = L, t[103] = R) : R = t[103];
        let z;
        t[104] !== O || t[105] !== k || t[106] !== ue || t[107] !== A || t[108] !== R ? (z = (0, Q.jsxs)(`label`, {
            htmlFor: O,
            className: k,
            onClick: ue,
            children: [A, R]
        }), t[104] = O, t[105] = k, t[106] = ue, t[107] = A, t[108] = R, t[109] = z) : z = t[109];
        let V;
        t[110] !== x || t[111] !== S || t[112] !== C ? (V = C && (S ? (0, Q.jsx)(re, {
            label: S,
            className: `action-constraints-trigger self-center`,
            children: x
        }) : x), t[110] = x, t[111] = S, t[112] = C, t[113] = V) : V = t[113];
        let H;
        t[114] !== n || t[115] !== r || t[116] !== i || t[117] !== p ? (H = p && (0, Q.jsx)(`div`, {
            className: `col-start-2 col-end-4 min-w-0`,
            children: (0, Q.jsx)(Ee, {
                action: n,
                actionDelta: r,
                prevAction: i,
                initiallyCollapsed: !0
            })
        }), t[114] = n, t[115] = r, t[116] = i, t[117] = p, t[118] = H) : H = t[118];
        let U;
        t[119] !== j || t[120] !== de || t[121] !== fe || t[122] !== z || t[123] !== V || t[124] !== H ? (U = (0, Q.jsxs)(`div`, {
            "data-testid": j,
            onPointerUp: de,
            className: fe,
            children: [z, V, H]
        }), t[119] = j, t[120] = de, t[121] = fe, t[122] = z, t[123] = V, t[124] = H, t[125] = U) : U = t[125];
        let G;
        t[126] !== M || t[127] !== U ? (G = (0, Q.jsx)(`div`, {
            className: M,
            children: U
        }), t[126] = M, t[127] = U, t[128] = G) : G = t[128];
        let K;
        return t[129] !== pe || t[130] !== G ? (K = (0, Q.jsx)(`li`, {
            className: pe,
            children: G
        }), t[129] = pe, t[130] = G, t[131] = K) : K = t[131], K
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
                refreshingActions: u,
                onSubmit: ee,
                submitting: d,
                onCancel: te,
                refreshHidden: f,
                onOpenConstraints: ne,
                constraintsDisabled: p,
                confirmDisabled: ie,
                showScrollDividers: ae,
                onScrollabilityChange: oe
            } = e,
            h = f !== void 0 && f,
            g = p !== void 0 && p,
            v = ie !== void 0 && ie,
            y = ae !== void 0 && ae,
            b = ce(),
            se = (0, Z.useRef)(null),
            [x, S] = (0, Z.useState)(s),
            [C, w] = (0, Z.useState)(c),
            [T, E] = (0, Z.useState)(!1),
            [D, O] = (0, Z.useState)(!1),
            k = (0, Z.useId)(),
            ue = (0, Z.useId)(),
            A = (0, Z.useId)(),
            j = (0, Z.useId)(),
            de, fe;
        t[0] === s ? (de = t[1], fe = t[2]) : (de = () => {
            S(new Set(s))
        }, fe = [s], t[0] = s, t[1] = de, t[2] = fe), (0, Z.useEffect)(de, fe);
        let M, pe;
        t[3] === c ? (M = t[4], pe = t[5]) : (M = () => {
            w(c)
        }, pe = [c], t[3] = c, t[4] = M, t[5] = pe), (0, Z.useEffect)(M, pe);
        let P;
        t[6] === n ? P = t[7] : (P = st(n), t[6] = n, t[7] = P);
        let F = P,
            L;
        if (t[8] !== i || t[9] !== o) {
            let e;
            t[11] === o ? e = t[12] : (e = (e, t) => (o.get(e.name) ?? De.Unmodified) - (o.get(t.name) ?? De.Unmodified) || e.name.localeCompare(t.name), t[11] = o, t[12] = e), L = [...i].sort(e), t[8] = i, t[9] = o, t[10] = L
        } else L = t[10];
        let R = L,
            z;
        t[13] === R ? z = t[14] : (z = R.filter(ze), t[13] = R, t[14] = z);
        let B = z,
            V;
        t[15] === R ? V = t[16] : (V = R.filter(Be), t[15] = R, t[16] = V);
        let H = V,
            U;
        t[17] === i ? U = t[18] : (U = i.map(Ve), t[17] = i, t[18] = U);
        let W = U,
            he;
        t[19] !== W || t[20] !== n.primaryConnector.id || t[21] !== x || t[22] !== s ? (he = xe({
            connectorId: n.primaryConnector.id,
            adminConfigurableActionNames: W,
            initialEnabledActionNames: s,
            nextEnabledActionNames: x
        }), t[19] = W, t[20] = n.primaryConnector.id, t[21] = x, t[22] = s, t[23] = he) : he = t[23];
        let G = he,
            K;
        t[24] === B ? K = t[25] : (K = B.map(He), t[24] = B, t[25] = K);
        let q = K,
            ge;
        t[26] === H ? ge = t[27] : (ge = H.map(Ue), t[26] = H, t[27] = ge);
        let J = ge,
            ve;
        t[28] !== W || t[29] !== x ? (ve = W.length > 0 && W.every(e => x.has(e)), t[28] = W, t[29] = x, t[30] = ve) : ve = t[30];
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
        t[55] !== W || t[56] !== ye || t[57] !== Y || t[58] !== x || t[59] !== q ? (Fe = (e, t) => {
            let n = new Set(x);
            for (let r of e) t ? n.add(r) : n.delete(r);
            let r = Pe(W, n),
                i = Pe(q, n);
            S(n), t && w(e => !ye && r ? `custom_new_all` : !Y && i && e !== `custom_new_all` ? `custom_new_read_only` : e)
        }, t[55] = W, t[56] = ye, t[57] = Y, t[58] = x, t[59] = q, t[60] = Fe) : Fe = t[60];
        let Ie = Fe,
            Le;
        t[61] !== q || t[62] !== Ie ? (Le = e => {
            Ie(q, e)
        }, t[61] = q, t[62] = Ie, t[63] = Le) : Le = t[63];
        let Re = Le,
            Ye;
        t[64] === oe ? Ye = t[65] : (Ye = () => {
            let e = se.current;
            oe?.(e ? e.scrollHeight > e.clientHeight + 1 : !1)
        }, t[64] = oe, t[65] = Ye);
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
        t[71] !== i.length || t[72] !== g || t[73] !== T || t[74] !== u || t[75] !== d || t[76] !== Xe || t[77] !== D ? (et = [i.length, g, T, u, d, Xe, D], t[71] = i.length, t[72] = g, t[73] = T, t[74] = u, t[75] = d, t[76] = Xe, t[77] = D, t[78] = et) : et = t[78], (0, Z.useEffect)($e, et);
        let tt;
        t[79] === Symbol.for(`react.memo_cache_sentinel`) ? (tt = [
            [`custom_new_all`, $.unconfiguredActionsToggleLabel],
            [`custom_new_read_only`, $.unconfiguredReadActionsToggleLabel],
            [`custom`, $.unconfiguredNoActionsToggleLabel]
        ], t[79] = tt) : tt = t[79];
        let nt = tt,
            rt;
        t[80] !== b || t[81] !== l || t[82] !== h || t[83] !== u || t[84] !== d ? (rt = h ? null : (0, Q.jsx)(re, {
            label: l ? void 0 : b.formatMessage($.needLink),
            children: (0, Q.jsx)(r, {
                size: `small`,
                color: `secondary`,
                loading: u,
                disabled: !l || d,
                onClick: () => l?.(),
                children: (0, Q.jsx)(_, {
                    ...$.refreshLabel
                })
            })
        }), t[80] = b, t[81] = l, t[82] = h, t[83] = u, t[84] = d, t[85] = rt) : rt = t[85];
        let at = rt,
            ct;
        t[86] === n.primaryConnector.name ? ct = t[87] : (ct = (0, Q.jsx)(`p`, {
            className: `text-token-text-secondary flex-1 pb-0 text-sm leading-5`,
            children: (0, Q.jsx)(_, {
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
        t[91] === g ? dt = t[92] : (dt = g && (0, Q.jsx)(`div`, {
            className: `border-token-border-default bg-token-bg-tertiary text-token-text-secondary rounded-lg border px-3 py-2 text-xs`,
            children: (0, Q.jsx)(_, {
                ...$.constraintsDisabledBySync
            })
        }), t[91] = g, t[92] = dt);
        let ft;
        t[93] !== n.primaryConnector.name || t[94] !== G || t[95] !== Ie ? (ft = G.length > 0 && (0, Q.jsx)(_e, {
            appName: n.primaryConnector.name,
            onUndo: () => Ie([...G], !0)
        }), t[93] = n.primaryConnector.name, t[94] = G, t[95] = Ie, t[96] = ft) : ft = t[96];
        let pt;
        t[97] !== i.length || t[98] !== Y || t[99] !== Ce || t[100] !== g || t[101] !== o || t[102] !== X || t[103] !== Re || t[104] !== x || t[105] !== Te || t[106] !== Oe || t[107] !== b || t[108] !== F || t[109] !== ne || t[110] !== a || t[111] !== B || t[112] !== T || t[113] !== Ae || t[114] !== k || t[115] !== Ie || t[116] !== J || t[117] !== H || t[118] !== D || t[119] !== Me || t[120] !== ue ? (pt = i.length === 0 ? (0, Q.jsx)(`p`, {
            className: `text-token-text-tertiary m-4 text-center text-xs italic`,
            children: (0, Q.jsx)(_, {
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
                                if (X) return;
                                let t = e.target;
                                t instanceof HTMLElement && t.closest(`label, button, input`) || E(Ge)
                            },
                            className: m(`flex items-center justify-between gap-3 px-4 py-3 transition-colors`, X ? `cursor-not-allowed` : `hover:bg-token-bg-tertiary cursor-pointer`),
                            children: [(0, Q.jsxs)(`label`, {
                                htmlFor: `action-toggle-all-read-actions`,
                                className: m(`flex min-w-0 items-center gap-3`, X ? `cursor-not-allowed opacity-60` : `cursor-pointer`),
                                children: [(0, Q.jsx)(le, {
                                    id: `action-toggle-all-read-actions`,
                                    checked: Y,
                                    indeterminate: Ae,
                                    onChange: e => Re(e.target.checked),
                                    disabled: X
                                }), (0, Q.jsxs)(`span`, {
                                    className: `inline-flex min-w-0 items-baseline gap-2 leading-6`,
                                    children: [(0, Q.jsx)(`span`, {
                                        className: `truncate`,
                                        children: (0, Q.jsx)(_, {
                                            ...$.readActionsSectionLabel
                                        })
                                    }), !Y && (0, Q.jsx)(`span`, {
                                        className: `text-token-text-tertiary inline-flex text-sm leading-none`,
                                        children: (0, Q.jsx)(_, {
                                            ...$.enabledActionsCountLabel,
                                            values: {
                                                enabledCount: Te,
                                                totalCount: B.length
                                            }
                                        })
                                    })]
                                })]
                            }), (0, Q.jsx)(`button`, {
                                type: `button`,
                                className: `text-token-text-secondary hover:bg-token-bg-secondary hover:text-token-text-primary flex size-8 shrink-0 items-center justify-center rounded-md transition-colors disabled:opacity-50`,
                                "aria-label": b.formatMessage(T ? $.hideActionDetailsLabel : $.viewActionDetailsLabel),
                                "aria-expanded": T,
                                "aria-controls": k,
                                onClick: () => E(Ke),
                                disabled: X,
                                children: T ? (0, Q.jsx)(me, {
                                    className: `h-4 w-4`,
                                    "aria-hidden": !0
                                }) : (0, Q.jsx)(I, {
                                    className: `h-4 w-4`,
                                    "aria-hidden": !0
                                })
                            })]
                        }), T && (0, Q.jsx)(`ul`, {
                            id: k,
                            className: `p-0`,
                            children: B.map(e => (0, Q.jsx)(lt, {
                                action: e,
                                actionDelta: o.get(e.name),
                                prevAction: a?.get(e.name)?.action,
                                isEnabled: x.has(e.name),
                                onToggle: (e, t) => Ie([e], t),
                                disabled: X,
                                onOpenConstraints: ne,
                                constraintsDisabled: g,
                                showActionDetails: !1,
                                showActionTypeBadges: !1,
                                showRowBorder: !1,
                                indented: !0
                            }, e.name))
                        })]
                    }), H.length > 0 && (0, Q.jsxs)(`div`, {
                        className: m(B.length > 0 && `border-token-border-default border-t`),
                        children: [(0, Q.jsxs)(`div`, {
                            "data-testid": `action-set-row-write`,
                            onPointerUp: e => {
                                if (X) return;
                                let t = e.target;
                                t instanceof HTMLElement && t.closest(`label, button, input`) || O(qe)
                            },
                            className: m(`flex items-center justify-between gap-3 px-4 py-3 transition-colors`, X ? `cursor-not-allowed` : `hover:bg-token-bg-tertiary cursor-pointer`),
                            children: [(0, Q.jsxs)(`label`, {
                                htmlFor: `action-toggle-all-write-actions`,
                                className: m(`flex min-w-0 items-center gap-3`, X ? `cursor-not-allowed opacity-60` : `cursor-pointer`),
                                children: [(0, Q.jsx)(le, {
                                    id: `action-toggle-all-write-actions`,
                                    checked: Ce,
                                    indeterminate: Me,
                                    onChange: e => Ie(J, e.target.checked),
                                    disabled: X
                                }), (0, Q.jsxs)(`span`, {
                                    className: `inline-flex min-w-0 items-baseline gap-2 leading-6`,
                                    children: [(0, Q.jsx)(`span`, {
                                        className: `truncate`,
                                        children: (0, Q.jsx)(_, {
                                            ...$.writeActionsSectionLabel
                                        })
                                    }), !Ce && (0, Q.jsx)(`span`, {
                                        className: `text-token-text-tertiary inline-flex text-sm leading-none`,
                                        children: (0, Q.jsx)(_, {
                                            ...$.enabledActionsCountLabel,
                                            values: {
                                                enabledCount: Oe,
                                                totalCount: H.length
                                            }
                                        })
                                    })]
                                })]
                            }), (0, Q.jsx)(`button`, {
                                type: `button`,
                                className: `text-token-text-secondary hover:bg-token-bg-secondary hover:text-token-text-primary flex size-8 shrink-0 items-center justify-center rounded-md transition-colors disabled:opacity-50`,
                                "aria-label": b.formatMessage(D ? $.hideActionDetailsLabel : $.viewActionDetailsLabel),
                                "aria-expanded": D,
                                "aria-controls": ue,
                                onClick: () => O(Je),
                                disabled: X,
                                children: D ? (0, Q.jsx)(me, {
                                    className: `h-4 w-4`,
                                    "aria-hidden": !0
                                }) : (0, Q.jsx)(I, {
                                    className: `h-4 w-4`,
                                    "aria-hidden": !0
                                })
                            })]
                        }), D && (0, Q.jsx)(`ul`, {
                            id: ue,
                            className: `p-0`,
                            children: H.map(e => (0, Q.jsx)(lt, {
                                action: e,
                                actionDelta: o.get(e.name),
                                prevAction: a?.get(e.name)?.action,
                                isEnabled: x.has(e.name),
                                onToggle: (e, t) => Ie([e], t),
                                disabled: X,
                                onOpenConstraints: ne,
                                constraintsDisabled: g,
                                showActionDetails: !1,
                                showActionTypeBadges: !1,
                                showRowBorder: !1,
                                indented: !0
                            }, e.name))
                        })]
                    })]
                }), F && ne && (0, Q.jsx)(`div`, {
                    className: `mt-2 space-y-2`,
                    children: (0, Q.jsxs)(`div`, {
                        className: `bg-token-bg-tertiary text-token-text-secondary flex items-center gap-3 rounded-lg px-4 py-3 text-sm leading-6`,
                        children: [(0, Q.jsx)(N, {
                            className: `h-4 w-4 shrink-0`
                        }), (0, Q.jsx)(`span`, {
                            children: (0, Q.jsx)(_, {
                                ...$.syncEnabledConstraintsNotice
                            })
                        })]
                    })
                })]
            })
        }), t[97] = i.length, t[98] = Y, t[99] = Ce, t[100] = g, t[101] = o, t[102] = X, t[103] = Re, t[104] = x, t[105] = Te, t[106] = Oe, t[107] = b, t[108] = F, t[109] = ne, t[110] = a, t[111] = B, t[112] = T, t[113] = Ae, t[114] = k, t[115] = Ie, t[116] = J, t[117] = H, t[118] = D, t[119] = Me, t[120] = ue, t[121] = pt) : pt = t[121];
        let mt;
        t[122] !== ut || t[123] !== dt || t[124] !== ft || t[125] !== pt ? (mt = (0, Q.jsxs)(`div`, {
            ref: se,
            className: `min-h-0 flex-1 space-y-3 overflow-y-auto px-6 pt-2 pb-3`,
            children: [ut, dt, ft, pt]
        }), t[122] = ut, t[123] = dt, t[124] = ft, t[125] = pt, t[126] = mt) : mt = t[126];
        let ht;
        t[127] !== i.length || t[128] !== n.primaryConnector.name || t[129] !== C || t[130] !== X || t[131] !== y || t[132] !== j || t[133] !== A ? (ht = i.length > 0 && (0, Q.jsxs)(`div`, {
            className: m(`shrink-0 space-y-3 px-6 pt-1 pb-6`, y && `border-token-border-default border-t pt-4`),
            children: [(0, Q.jsx)(`div`, {
                id: A,
                className: `text-token-text-secondary text-sm leading-5`,
                children: (0, Q.jsx)(_, {
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
                            checked: C === t,
                            onChange: () => w(t),
                            disabled: X
                        }), (0, Q.jsx)(`span`, {
                            children: (0, Q.jsx)(_, {
                                ...n
                            })
                        })]
                    }, t)
                })
            })]
        }), t[127] = i.length, t[128] = n.primaryConnector.name, t[129] = C, t[130] = X, t[131] = y, t[132] = j, t[133] = A, t[134] = ht) : ht = t[134];
        let gt = y && i.length === 0 && `border-token-border-default border-t pt-4`,
            _t;
        t[135] === gt ? _t = t[136] : (_t = m(`flex shrink-0 justify-end gap-2 px-6 pt-0 pb-6`, gt), t[135] = gt, t[136] = _t);
        let vt;
        t[137] === Symbol.for(`react.memo_cache_sentinel`) ? (vt = (0, Q.jsx)(_, {
            id: `59bwQY`,
            defaultMessage: `Cancel`
        }), t[137] = vt) : vt = t[137];
        let yt;
        t[138] !== X || t[139] !== te ? (yt = (0, Q.jsx)(r, {
            color: `secondary`,
            onClick: te,
            disabled: X,
            children: vt
        }), t[138] = X, t[139] = te, t[140] = yt) : yt = t[140];
        let bt;
        t[141] !== W || t[142] !== C || t[143] !== x || t[144] !== ee || t[145] !== q ? (bt = () => ee({
            enabledActions: Array.from(x),
            actionPolicy: Ne({
                actionIds: W,
                readOnlyActionIds: q,
                enabledActions: x,
                customNewActionPolicy: C
            })
        }), t[141] = W, t[142] = C, t[143] = x, t[144] = ee, t[145] = q, t[146] = bt) : bt = t[146];
        let xt = X || v,
            St;
        t[147] === Symbol.for(`react.memo_cache_sentinel`) ? (St = (0, Q.jsx)(_, {
            ...$.confirmLabel
        }), t[147] = St) : St = t[147];
        let Ct;
        t[148] !== d || t[149] !== bt || t[150] !== xt ? (Ct = (0, Q.jsx)(r, {
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
                initialActionPolicyLoading: u,
                showOverlayBackground: d,
                submitting: f,
                showParameterConstraints: ne
            } = e,
            re = l === void 0 ? null : l,
            p = u !== void 0 && u,
            m = d === void 0 || d,
            ie = f !== void 0 && f,
            ae = ne === void 0 || ne,
            oe = ce(),
            h = g(),
            [v, y] = (0, Z.useState)(null),
            [b, x] = (0, Z.useState)(!1),
            S = (0, Z.useRef)(!1),
            C;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (C = {
            forceEnable: !0
        }, t[0] = C) : C = t[0];
        let {
            actions: le,
            isLoading: w,
            refetch: D
        } = T(n.primaryConnector, E.ADMIN_SETTING, C), O;
        t[1] === le ? O = t[2] : (O = le.filter(Me), t[1] = le, t[2] = O);
        let k = O,
            A;
        bb0: {
            if (o) {
                let e;
                t[3] === k ? e = t[4] : (e = new Set(k.map(Ye)), t[3] = k, t[4] = e);
                let n = e,
                    r;
                t[5] === o ? r = t[6] : (r = Array.from(o), t[5] = o, t[6] = r);
                let i;
                t[7] !== r || t[8] !== n ? (i = new Set(r.filter(e => n.has(e))), t[7] = r, t[8] = n, t[9] = i) : i = t[9], A = i;
                break bb0
            }
            let e;t[10] === k ? e = t[11] : (e = new Set(k.filter(Xe).map(Ze)), t[10] = k, t[11] = e),
            A = e
        }
        let de = A,
            [M, pe] = (0, Z.useState)(Fe),
            me, N;
        t[12] !== w || t[13] !== re || t[14] !== p ? (N = () => {
            S.current || w || p || (pe(X(re)), S.current = !0)
        }, me = [w, re, p], t[12] = w, t[13] = re, t[14] = p, t[15] = me, t[16] = N) : (me = t[15], N = t[16]), (0, Z.useEffect)(N, me);
        let P;
        if (t[17] !== k) {
            P = new Map;
            for (let e of k) P.set(e.name, {
                action: e,
                hash: Ce(e)
            });
            t[17] = k, t[18] = P
        } else P = t[18];
        let F = P,
            [I, L] = (0, Z.useState)(null),
            R = Te(F, I),
            B;
        t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (B = te()?.getWorkspaceId(), t[19] = B) : B = t[19];
        let V = B,
            H = ue(),
            W = U(),
            he = (0, Z.useRef)(!1),
            G;
        t[20] !== n || t[21] !== ae ? (G = Oe({
            app: n,
            showParameterConstraints: ae
        }), t[20] = n, t[21] = ae, t[22] = G) : G = t[22];
        let K = G,
            q, ge;
        t[23] !== w || t[24] !== n.primaryConnector.actions_changed_since_review || t[25] !== n.primaryConnector.id || t[26] !== W || t[27] !== H || t[28] !== k ? (q = () => {
            if (he.current || !V || !n.primaryConnector.actions_changed_since_review || w) return;
            he.current = !0;
            let e = k.filter(Qe).map($e);
            (async () => {
                await j(n.primaryConnector.id, V, e), H(), W(n.primaryConnector.id)
            })()
        }, ge = [w, n.primaryConnector.actions_changed_since_review, n.primaryConnector.id, W, H, k, V], t[23] = w, t[24] = n.primaryConnector.actions_changed_since_review, t[25] = n.primaryConnector.id, t[26] = W, t[27] = H, t[28] = k, t[29] = q, t[30] = ge) : (q = t[29], ge = t[30]), (0, Z.useEffect)(q, ge);
        let J;
        t[31] === Symbol.for(`react.memo_cache_sentinel`) ? (J = s(), t[31] = J) : J = t[31];
        let _e = J,
            ve;
        t[32] !== F || t[33] !== I || t[34] !== D ? (ve = async e => {
            I || L(F), await fe(e), await D()
        }, t[32] = F, t[33] = I, t[34] = D, t[35] = ve) : ve = t[35];
        let ye;
        t[36] !== n.primaryConnector.id || t[37] !== h ? (ye = () => {
            h.invalidateQueries({
                queryKey: [`connector-action-clamp`, n.primaryConnector.id]
            })
        }, t[36] = n.primaryConnector.id, t[37] = h, t[38] = ye) : ye = t[38];
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
            } = c(et),
            we = Ie(Se, n.primaryConnector.id),
            Ee = z(n.primaryConnector),
            De;
        t[43] === oe ? De = t[44] : (De = oe.formatMessage($.actionsControlModalTitle), t[43] = oe, t[44] = De);
        let ke;
        t[45] !== R || t[46] !== w || t[47] !== n || t[48] !== K || t[49] !== de || t[50] !== p || t[51] !== Ee || t[52] !== we || t[53] !== i || t[54] !== a || t[55] !== b || t[56] !== I || t[57] !== xe || t[58] !== M || t[59] !== ie || t[60] !== k ? (ke = w && !xe.isPending ? (0, Q.jsxs)(`div`, {
            className: `space-y-4 overflow-y-auto px-6 pt-2 pb-6`,
            children: [(0, Q.jsx)(`p`, {
                className: `text-token-text-secondary pb-0 text-sm leading-5`,
                children: (0, Q.jsx)(_, {
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
            actions: k,
            prevActions: I,
            deltas: R,
            initialEnabledActions: de,
            initialCustomNewActionPolicy: M,
            onSubmit: a,
            onCancel: i,
            refreshingActions: xe.isPending,
            submitting: ie || p,
            confirmDisabled: k.length === 0,
            refreshHidden: !Ee,
            onRefreshActions: Ee && we !== void 0 ? () => {
                xe.mutate(we.id)
            } : void 0,
            onOpenConstraints: K ? e => y(e) : void 0,
            constraintsDisabled: !1,
            showScrollDividers: b,
            onScrollabilityChange: x
        }), t[45] = R, t[46] = w, t[47] = n, t[48] = K, t[49] = de, t[50] = p, t[51] = Ee, t[52] = we, t[53] = i, t[54] = a, t[55] = b, t[56] = I, t[57] = xe, t[58] = M, t[59] = ie, t[60] = k, t[61] = ke) : ke = t[61];
        let Ae;
        t[62] !== r || t[63] !== b || t[64] !== m || t[65] !== De || t[66] !== ke ? (Ae = (0, Q.jsx)(ee, {
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
        t[68] !== n || t[69] !== K || t[70] !== v ? (je = K && v && (0, Q.jsx)(pt, {
            app: n,
            onClose: () => y(null),
            onBack: () => y(null),
            showOverlayBackground: !0,
            initialSelectedAction: v
        }), t[68] = n, t[69] = K, t[70] = v, t[71] = je) : je = t[71];
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
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (a = te()?.getWorkspaceId(), t[0] = a) : a = t[0];
        let o = a,
            l;
        t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (l = s(), t[1] = l) : l = t[1];
        let u = l,
            ee = g(),
            d = ue(),
            f = U(),
            re = H(),
            p = c(tt),
            m = c(nt),
            ie = !!o,
            ae;
        t[2] !== n.primaryConnector.id || t[3] !== p ? (ae = () => {
            K(p, o ?? ``, n.primaryConnector.id, ie)
        }, t[2] = n.primaryConnector.id, t[3] = p, t[4] = ae) : ae = t[4];
        let oe;
        t[5] !== n.primaryConnector.id || t[6] !== m || t[7] !== p ? (oe = [p, m, o, n.primaryConnector.id, ie], t[5] = n.primaryConnector.id, t[6] = m, t[7] = p, t[8] = oe) : oe = t[8], (0, Z.useEffect)(ae, oe);
        let h;
        t[9] !== n.primaryConnector.id || t[10] !== m || t[11] !== p ? (h = J({
            queryKeyPrefix: `connector-workspace-permissions`,
            workspaceId: o,
            connectorId: n.primaryConnector.id,
            enabled: ie,
            transport: p,
            actorId: m
        }), t[9] = n.primaryConnector.id, t[10] = m, t[11] = p, t[12] = h) : h = t[12];
        let {
            data: _,
            isLoading: y
        } = v(h), b;
        t[13] !== n.primaryConnector.id || t[14] !== f || t[15] !== re || t[16] !== d || t[17] !== ee ? (b = async e => {
            let {
                enabledActions: t,
                actionPolicy: r
            } = e;
            if (!o) throw Error(`Workspace ID is required to update app actions.`);
            let i = {
                enabled: !0,
                enabled_actions: t
            };
            r && (i.action_policy = r), await ne.safePost(`/accounts/{account_id}/connectors/{connector_id}/workspace_permissions`, {
                parameters: {
                    path: {
                        account_id: o,
                        connector_id: n.primaryConnector.id
                    }
                },
                requestBody: i
            }), d(), f(n.primaryConnector.id), await ee.invalidateQueries({
                queryKey: [`connector-actions`, n.primaryConnector.id]
            }), await ee.invalidateQueries({
                queryKey: [`connector-workspace-permissions`, o, n.primaryConnector.id]
            }), await re()
        }, t[13] = n.primaryConnector.id, t[14] = f, t[15] = re, t[16] = d, t[17] = ee, t[18] = b) : b = t[18];
        let x;
        t[19] !== i || t[20] !== r ? (x = () => {
            u.success(i.formatMessage({
                id: `AW+VoO`,
                defaultMessage: `App tools updated successfully.`
            })), r()
        }, t[19] = i, t[20] = r, t[21] = x) : x = t[21];
        let S;
        t[22] === i ? S = t[23] : (S = () => {
            u.danger(i.formatMessage({
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
            mutateAsync: le,
            isPending: w
        } = se(C), T;
        t[28] !== r || t[29] !== w ? (T = () => {
            w || r()
        }, t[28] = r, t[29] = w, t[30] = T) : T = t[30];
        let E = T,
            D = _?.action_policy,
            O = _?.enabled_actions,
            k;
        t[31] !== D || t[32] !== O ? (k = je({
            actionPolicy: D,
            enabledActions: O
        }), t[31] = D, t[32] = O, t[33] = k) : k = t[33];
        let A = !!o && y,
            j;
        return t[34] !== n || t[35] !== E || t[36] !== le || t[37] !== w || t[38] !== k || t[39] !== A ? (j = (0, Q.jsx)(dt, {
            app: n,
            onClose: E,
            onCancel: E,
            onConfirm: le,
            submitting: w,
            initialActionPolicy: k,
            initialActionPolicyLoading: A
        }), t[34] = n, t[35] = E, t[36] = le, t[37] = w, t[38] = k, t[39] = A, t[40] = j) : j = t[40], j
    }, pt = e => {
        "use forget";
        let t = (0, it.c)(3),
            n = c(rt),
            r;
        return t[0] !== e || t[1] !== n ? (r = (0, Q.jsx)(be, {
            ...e,
            workspaceId: n
        }), t[0] = e, t[1] = n, t[2] = r) : r = t[2], r
    }, $ = h({
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
//# sourceMappingURL=46874983-f2kdr499tkapgc7j.js.map