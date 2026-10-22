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
} from "./4813494d-r54yv6lv29x4ew99.js";
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
    A3t as C,
    FTn as w,
    GKn as T,
    Jrt as E,
    KKn as D,
    KQ as O,
    N3t as k,
    PTn as A,
    RQ as j,
    WQ as le,
    iit as ue,
    nit as de,
    oFn as M,
    rFn as N
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    CC as fe,
    Dv as P,
    Ev as F,
    SC as I,
    TC as L,
    wC as R
} from "./30901919-k5uqyx4vyplt9toa.js";
import {
    Cx as z,
    Dx as B,
    Ox as pe,
    Sx as me,
    cy as V,
    hy as H,
    my as U,
    wx as W,
    xx as he
} from "./c2675c8c-jg3tpj8mw86wdc0g.js";
import {
    a as G,
    r as K,
    t as q
} from "./832dbd3a-jwiinbqnou5j47zc.js";
import {
    n as ge,
    t as J
} from "./99a48954-m6eajssr83unzbk8.js";
import {
    d as _e,
    f as ve,
    g as ye,
    h as be,
    m as Y,
    p as xe
} from "./b7c53a83-j3le2ia00cy1vjiq.js";
import {
    a as Se,
    i as Ce,
    n as we,
    o as Te,
    r as Ee,
    t as De
} from "./b00adf98-l7mto7e1mbeiymgj.js";
import {
    n as Oe,
    o as ke,
    s as Ae
} from "./e1258b01-fbmdsjwponp28zz9.js";
import {
    a as je,
    i as Me,
    n as Ne,
    o as X,
    r as Pe,
    t as Fe
} from "./16e34fcb-08raab37arqxx3hl.js";
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
    return N({
        fetchValidLinksOnly: !0,
        productSku: A.ADMIN_SETTING
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
    it = S(), ye(), ge(), z(), E(), p(), D(), L(), fe(), P(), f(), a(), d(), k(), M(), G(), j(), w(), B(), i(), ie(), l(), n(), x(), ae(), Z = t(b()), y(), Se(), Y(), ve(), V(), Ae(), Pe(), Le(), Q = oe(), at = new Set([`deleted`]), ot = `text-blue-500 dark:text-blue-400`, st = e => e.knowledgeConfig.some(e => e.connections.some(e => !at.has(e.connection_status))), ct = e => {
        "use forget";
        let t = (0, it.c)(6),
            {
                showActionDetails: n
            } = e,
            r = n === void 0 || n,
            i;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, Q.jsx)(T, {
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
            x, S, C, w, E, D, O, k, A, j, le, ue, de, M, N, fe, P;
        if (t[5] !== n || t[6] !== ne || t[7] !== h || t[8] !== oe || t[9] !== g || t[10] !== a || t[11] !== c || t[12] !== s || t[13] !== y || t[14] !== ie || t[15] !== ae || t[16] !== se) {
            let e;
            t[34] === ie ? e = t[35] : (e = e => ie || e !== `read` && e !== `write`, t[34] = ie, t[35] = e);
            let r = me(n).filter(e),
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
            let F;
            t[60] !== n.name || t[61] !== h || t[62] !== a || t[63] !== s ? (F = e => {
                if (h) return;
                let t = e.target;
                t instanceof Element && t.closest(`label, button, a, input, select, textarea, [role='checkbox'], [data-action-constraints-trigger], .action-constraints-trigger, .action-details`) || s(n.name, !a)
            }, t[60] = n.name, t[61] = h, t[62] = a, t[63] = s, t[64] = F) : F = t[64];
            let I = F,
                L = oe && `ps-7`,
                R = !h && `hover:bg-token-bg-tertiary`;
            t[65] !== L || t[66] !== R ? (fe = m(`group`, L, R), t[65] = L, t[66] = R, t[67] = fe) : fe = t[67];
            let z = ae && `border-token-border-default border-b group-last:border-0`,
                B = h ? `cursor-not-allowed` : `cursor-default`;
            t[68] !== z || t[69] !== B ? (N = m([`px-2 py-1`, z, B]), t[68] = z, t[69] = B, t[70] = N) : N = t[70], ue = `action-toggle-row-${y}`, de = I;
            let pe = !h && `cursor-pointer`;
            t[71] === pe ? M = t[72] : (M = m(`grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 px-2 py-1.5`, pe), t[71] = pe, t[72] = M), k = se, A = `contents cursor-pointer`, j = Re;
            let V;
            t[73] !== n.name || t[74] !== s ? (V = e => s(n.name, e.target.checked), t[73] = n.name, t[74] = s, t[75] = V) : V = t[75], t[76] !== h || t[77] !== a || t[78] !== V || t[79] !== se ? (le = (0, Q.jsx)(T, {
                id: se,
                checked: a,
                onChange: V,
                disabled: h
            }), t[76] = h, t[77] = a, t[78] = V, t[79] = se, t[80] = le) : le = t[80], O = `min-w-0`, E = `flex min-w-0 flex-wrap items-center gap-2`;
            let H = h && `text-token-text-secondary`,
                U;
            t[81] === H ? U = t[82] : (U = m([`font-mono text-sm font-medium`, H]), t[81] = H, t[82] = U), t[83] !== n.name || t[84] !== U ? (D = (0, Q.jsx)(`div`, {
                className: U,
                children: n.name
            }), t[83] = n.name, t[84] = U, t[85] = D) : D = t[85], P = `flex items-center gap-1 select-none`, w = W({
                badgeKeys: r,
                labels: he
            }), t[5] = n, t[6] = ne, t[7] = h, t[8] = oe, t[9] = g, t[10] = a, t[11] = c, t[12] = s, t[13] = y, t[14] = ie, t[15] = ae, t[16] = se, t[17] = x, t[18] = S, t[19] = C, t[20] = w, t[21] = E, t[22] = D, t[23] = O, t[24] = k, t[25] = A, t[26] = j, t[27] = le, t[28] = ue, t[29] = de, t[30] = M, t[31] = N, t[32] = fe, t[33] = P
        } else x = t[17], S = t[18], C = t[19], w = t[20], E = t[21], D = t[22], O = t[23], k = t[24], A = t[25], j = t[26], le = t[27], ue = t[28], de = t[29], M = t[30], N = t[31], fe = t[32], P = t[33];
        let F;
        t[86] === r ? F = t[87] : (F = (0, Q.jsx)(we, {
            delta: r
        }), t[86] = r, t[87] = F);
        let I;
        t[88] !== w || t[89] !== F || t[90] !== P ? (I = (0, Q.jsxs)(`div`, {
            className: P,
            children: [w, F]
        }), t[88] = w, t[89] = F, t[90] = P, t[91] = I) : I = t[91];
        let L;
        t[92] !== E || t[93] !== D || t[94] !== I ? (L = (0, Q.jsxs)(`div`, {
            className: E,
            children: [D, I]
        }), t[92] = E, t[93] = D, t[94] = I, t[95] = L) : L = t[95];
        let R;
        t[96] === n.description ? R = t[97] : (R = n.description ? n.description : (0, Q.jsx)(_, {
            ...$.noDescription
        }), t[96] = n.description, t[97] = R);
        let z;
        t[98] === R ? z = t[99] : (z = (0, Q.jsx)(`div`, {
            className: `text-token-text-tertiary line-clamp-2 text-xs leading-5 wrap-anywhere`,
            children: R
        }), t[98] = R, t[99] = z);
        let B;
        t[100] !== O || t[101] !== L || t[102] !== z ? (B = (0, Q.jsxs)(`div`, {
            className: O,
            children: [L, z]
        }), t[100] = O, t[101] = L, t[102] = z, t[103] = B) : B = t[103];
        let pe;
        t[104] !== k || t[105] !== A || t[106] !== j || t[107] !== le || t[108] !== B ? (pe = (0, Q.jsxs)(`label`, {
            htmlFor: k,
            className: A,
            onClick: j,
            children: [le, B]
        }), t[104] = k, t[105] = A, t[106] = j, t[107] = le, t[108] = B, t[109] = pe) : pe = t[109];
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
        t[119] !== ue || t[120] !== de || t[121] !== M || t[122] !== pe || t[123] !== V || t[124] !== H ? (U = (0, Q.jsxs)(`div`, {
            "data-testid": ue,
            onPointerUp: de,
            className: M,
            children: [pe, V, H]
        }), t[119] = ue, t[120] = de, t[121] = M, t[122] = pe, t[123] = V, t[124] = H, t[125] = U) : U = t[125];
        let G;
        t[126] !== N || t[127] !== U ? (G = (0, Q.jsx)(`div`, {
            className: N,
            children: U
        }), t[126] = N, t[127] = U, t[128] = G) : G = t[128];
        let K;
        return t[129] !== fe || t[130] !== G ? (K = (0, Q.jsx)(`li`, {
            className: fe,
            children: G
        }), t[129] = fe, t[130] = G, t[131] = K) : K = t[131], K
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
            [E, D] = (0, Z.useState)(!1),
            [O, k] = (0, Z.useState)(!1),
            A = (0, Z.useId)(),
            j = (0, Z.useId)(),
            le = (0, Z.useId)(),
            ue = (0, Z.useId)(),
            de, M;
        t[0] === s ? (de = t[1], M = t[2]) : (de = () => {
            S(new Set(s))
        }, M = [s], t[0] = s, t[1] = de, t[2] = M), (0, Z.useEffect)(de, M);
        let N, fe;
        t[3] === c ? (N = t[4], fe = t[5]) : (N = () => {
            w(c)
        }, fe = [c], t[3] = c, t[4] = N, t[5] = fe), (0, Z.useEffect)(N, fe);
        let P;
        t[6] === n ? P = t[7] : (P = st(n), t[6] = n, t[7] = P);
        let L = P,
            z;
        if (t[8] !== i || t[9] !== o) {
            let e;
            t[11] === o ? e = t[12] : (e = (e, t) => (o.get(e.name) ?? De.Unmodified) - (o.get(t.name) ?? De.Unmodified) || e.name.localeCompare(t.name), t[11] = o, t[12] = e), z = [...i].sort(e), t[8] = i, t[9] = o, t[10] = z
        } else z = t[10];
        let B = z,
            pe;
        t[13] === B ? pe = t[14] : (pe = B.filter(ze), t[13] = B, t[14] = pe);
        let me = pe,
            V;
        t[15] === B ? V = t[16] : (V = B.filter(Be), t[15] = B, t[16] = V);
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
        t[24] === me ? K = t[25] : (K = me.map(He), t[24] = me, t[25] = K);
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
        t[71] !== i.length || t[72] !== g || t[73] !== E || t[74] !== u || t[75] !== d || t[76] !== Xe || t[77] !== O ? (et = [i.length, g, E, u, d, Xe, O], t[71] = i.length, t[72] = g, t[73] = E, t[74] = u, t[75] = d, t[76] = Xe, t[77] = O, t[78] = et) : et = t[78], (0, Z.useEffect)($e, et);
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
        t[97] !== i.length || t[98] !== Y || t[99] !== Ce || t[100] !== g || t[101] !== o || t[102] !== X || t[103] !== Re || t[104] !== x || t[105] !== Te || t[106] !== Oe || t[107] !== b || t[108] !== L || t[109] !== ne || t[110] !== a || t[111] !== me || t[112] !== E || t[113] !== Ae || t[114] !== A || t[115] !== Ie || t[116] !== J || t[117] !== H || t[118] !== O || t[119] !== Me || t[120] !== j ? (pt = i.length === 0 ? (0, Q.jsx)(`p`, {
            className: `text-token-text-tertiary m-4 text-center text-xs italic`,
            children: (0, Q.jsx)(_, {
                ...$.noActionsLabel
            })
        }) : (0, Q.jsx)(Q.Fragment, {
            children: (0, Q.jsxs)(`div`, {
                className: `space-y-3`,
                children: [(0, Q.jsxs)(`div`, {
                    className: `border-token-border-default overflow-hidden rounded-lg border`,
                    children: [me.length > 0 && (0, Q.jsxs)(`div`, {
                        children: [(0, Q.jsxs)(`div`, {
                            "data-testid": `action-set-row-read`,
                            onPointerUp: e => {
                                if (X) return;
                                let t = e.target;
                                t instanceof HTMLElement && t.closest(`label, button, input`) || D(Ge)
                            },
                            className: m(`flex items-center justify-between gap-3 px-4 py-3 transition-colors`, X ? `cursor-not-allowed` : `hover:bg-token-bg-tertiary cursor-pointer`),
                            children: [(0, Q.jsxs)(`label`, {
                                htmlFor: `action-toggle-all-read-actions`,
                                className: m(`flex min-w-0 items-center gap-3`, X ? `cursor-not-allowed opacity-60` : `cursor-pointer`),
                                children: [(0, Q.jsx)(T, {
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
                                                totalCount: me.length
                                            }
                                        })
                                    })]
                                })]
                            }), (0, Q.jsx)(`button`, {
                                type: `button`,
                                className: `text-token-text-secondary hover:bg-token-bg-secondary hover:text-token-text-primary flex size-8 shrink-0 items-center justify-center rounded-md transition-colors disabled:opacity-50`,
                                "aria-label": b.formatMessage(E ? $.hideActionDetailsLabel : $.viewActionDetailsLabel),
                                "aria-expanded": E,
                                "aria-controls": A,
                                onClick: () => D(Ke),
                                disabled: X,
                                children: E ? (0, Q.jsx)(R, {
                                    className: `h-4 w-4`,
                                    "aria-hidden": !0
                                }) : (0, Q.jsx)(I, {
                                    className: `h-4 w-4`,
                                    "aria-hidden": !0
                                })
                            })]
                        }), E && (0, Q.jsx)(`ul`, {
                            id: A,
                            className: `p-0`,
                            children: me.map(e => (0, Q.jsx)(lt, {
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
                        className: m(me.length > 0 && `border-token-border-default border-t`),
                        children: [(0, Q.jsxs)(`div`, {
                            "data-testid": `action-set-row-write`,
                            onPointerUp: e => {
                                if (X) return;
                                let t = e.target;
                                t instanceof HTMLElement && t.closest(`label, button, input`) || k(qe)
                            },
                            className: m(`flex items-center justify-between gap-3 px-4 py-3 transition-colors`, X ? `cursor-not-allowed` : `hover:bg-token-bg-tertiary cursor-pointer`),
                            children: [(0, Q.jsxs)(`label`, {
                                htmlFor: `action-toggle-all-write-actions`,
                                className: m(`flex min-w-0 items-center gap-3`, X ? `cursor-not-allowed opacity-60` : `cursor-pointer`),
                                children: [(0, Q.jsx)(T, {
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
                                "aria-label": b.formatMessage(O ? $.hideActionDetailsLabel : $.viewActionDetailsLabel),
                                "aria-expanded": O,
                                "aria-controls": j,
                                onClick: () => k(Je),
                                disabled: X,
                                children: O ? (0, Q.jsx)(R, {
                                    className: `h-4 w-4`,
                                    "aria-hidden": !0
                                }) : (0, Q.jsx)(I, {
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
                }), L && ne && (0, Q.jsx)(`div`, {
                    className: `mt-2 space-y-2`,
                    children: (0, Q.jsxs)(`div`, {
                        className: `bg-token-bg-tertiary text-token-text-secondary flex items-center gap-3 rounded-lg px-4 py-3 text-sm leading-6`,
                        children: [(0, Q.jsx)(F, {
                            className: `h-4 w-4 shrink-0`
                        }), (0, Q.jsx)(`span`, {
                            children: (0, Q.jsx)(_, {
                                ...$.syncEnabledConstraintsNotice
                            })
                        })]
                    })
                })]
            })
        }), t[97] = i.length, t[98] = Y, t[99] = Ce, t[100] = g, t[101] = o, t[102] = X, t[103] = Re, t[104] = x, t[105] = Te, t[106] = Oe, t[107] = b, t[108] = L, t[109] = ne, t[110] = a, t[111] = me, t[112] = E, t[113] = Ae, t[114] = A, t[115] = Ie, t[116] = J, t[117] = H, t[118] = O, t[119] = Me, t[120] = j, t[121] = pt) : pt = t[121];
        let mt;
        t[122] !== ut || t[123] !== dt || t[124] !== ft || t[125] !== pt ? (mt = (0, Q.jsxs)(`div`, {
            ref: se,
            className: `min-h-0 flex-1 space-y-3 overflow-y-auto px-6 pt-2 pb-3`,
            children: [ut, dt, ft, pt]
        }), t[122] = ut, t[123] = dt, t[124] = ft, t[125] = pt, t[126] = mt) : mt = t[126];
        let ht;
        t[127] !== i.length || t[128] !== n.primaryConnector.name || t[129] !== C || t[130] !== X || t[131] !== y || t[132] !== ue || t[133] !== le ? (ht = i.length > 0 && (0, Q.jsxs)(`div`, {
            className: m(`shrink-0 space-y-3 px-6 pt-1 pb-6`, y && `border-token-border-default border-t pt-4`),
            children: [(0, Q.jsx)(`div`, {
                id: le,
                className: `text-token-text-secondary text-sm leading-5`,
                children: (0, Q.jsx)(_, {
                    ...$.unconfiguredActionsDescription,
                    values: {
                        app: n.primaryConnector.name
                    }
                })
            }), (0, Q.jsx)(`div`, {
                role: `radiogroup`,
                "aria-labelledby": le,
                className: `text-token-text-secondary flex flex-col items-start gap-3 text-sm`,
                children: nt.map(e => {
                    let [t, n] = e;
                    return (0, Q.jsxs)(`label`, {
                        className: `flex cursor-pointer items-center gap-2`,
                        children: [(0, Q.jsx)(`input`, {
                            type: `radio`,
                            name: ue,
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
        }), t[127] = i.length, t[128] = n.primaryConnector.name, t[129] = C, t[130] = X, t[131] = y, t[132] = ue, t[133] = le, t[134] = ht) : ht = t[134];
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
            actions: w,
            isLoading: T,
            refetch: E
        } = O(n.primaryConnector, A.ADMIN_SETTING, C), D;
        t[1] === w ? D = t[2] : (D = w.filter(Me), t[1] = w, t[2] = D);
        let k = D,
            j;
        bb0: {
            if (o) {
                let e;
                t[3] === k ? e = t[4] : (e = new Set(k.map(Ye)), t[3] = k, t[4] = e);
                let n = e,
                    r;
                t[5] === o ? r = t[6] : (r = Array.from(o), t[5] = o, t[6] = r);
                let i;
                t[7] !== r || t[8] !== n ? (i = new Set(r.filter(e => n.has(e))), t[7] = r, t[8] = n, t[9] = i) : i = t[9], j = i;
                break bb0
            }
            let e;t[10] === k ? e = t[11] : (e = new Set(k.filter(Xe).map(Ze)), t[10] = k, t[11] = e),
            j = e
        }
        let M = j,
            [N, fe] = (0, Z.useState)(Fe),
            P, F;
        t[12] !== T || t[13] !== re || t[14] !== p ? (F = () => {
            S.current || T || p || (fe(X(re)), S.current = !0)
        }, P = [T, re, p], t[12] = T, t[13] = re, t[14] = p, t[15] = P, t[16] = F) : (P = t[15], F = t[16]), (0, Z.useEffect)(F, P);
        let I;
        if (t[17] !== k) {
            I = new Map;
            for (let e of k) I.set(e.name, {
                action: e,
                hash: Ce(e)
            });
            t[17] = k, t[18] = I
        } else I = t[18];
        let L = I,
            [R, z] = (0, Z.useState)(null),
            B = Te(L, R),
            me;
        t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (me = te()?.getWorkspaceId(), t[19] = me) : me = t[19];
        let V = me,
            H = le(),
            W = U(),
            he = (0, Z.useRef)(!1),
            G;
        t[20] !== n || t[21] !== ae ? (G = Oe({
            app: n,
            showParameterConstraints: ae
        }), t[20] = n, t[21] = ae, t[22] = G) : G = t[22];
        let K = G,
            q, ge;
        t[23] !== T || t[24] !== n.primaryConnector.actions_changed_since_review || t[25] !== n.primaryConnector.id || t[26] !== W || t[27] !== H || t[28] !== k ? (q = () => {
            if (he.current || !V || !n.primaryConnector.actions_changed_since_review || T) return;
            he.current = !0;
            let e = k.filter(Qe).map($e);
            (async () => {
                await ue(n.primaryConnector.id, V, e), H(), W(n.primaryConnector.id)
            })()
        }, ge = [T, n.primaryConnector.actions_changed_since_review, n.primaryConnector.id, W, H, k, V], t[23] = T, t[24] = n.primaryConnector.actions_changed_since_review, t[25] = n.primaryConnector.id, t[26] = W, t[27] = H, t[28] = k, t[29] = q, t[30] = ge) : (q = t[29], ge = t[30]), (0, Z.useEffect)(q, ge);
        let J;
        t[31] === Symbol.for(`react.memo_cache_sentinel`) ? (J = s(), t[31] = J) : J = t[31];
        let _e = J,
            ve;
        t[32] !== L || t[33] !== R || t[34] !== E ? (ve = async e => {
            R || z(L), await de(e), await E()
        }, t[32] = L, t[33] = R, t[34] = E, t[35] = ve) : ve = t[35];
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
            Ee = pe(n.primaryConnector),
            De;
        t[43] === oe ? De = t[44] : (De = oe.formatMessage($.actionsControlModalTitle), t[43] = oe, t[44] = De);
        let ke;
        t[45] !== B || t[46] !== T || t[47] !== n || t[48] !== K || t[49] !== M || t[50] !== p || t[51] !== Ee || t[52] !== we || t[53] !== i || t[54] !== a || t[55] !== b || t[56] !== R || t[57] !== xe || t[58] !== N || t[59] !== ie || t[60] !== k ? (ke = T && !xe.isPending ? (0, Q.jsxs)(`div`, {
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
            prevActions: R,
            deltas: B,
            initialEnabledActions: M,
            initialCustomNewActionPolicy: N,
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
        }), t[45] = B, t[46] = T, t[47] = n, t[48] = K, t[49] = M, t[50] = p, t[51] = Ee, t[52] = we, t[53] = i, t[54] = a, t[55] = b, t[56] = R, t[57] = xe, t[58] = N, t[59] = ie, t[60] = k, t[61] = ke) : ke = t[61];
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
            d = le(),
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
            mutateAsync: w,
            isPending: T
        } = se(C), E;
        t[28] !== r || t[29] !== T ? (E = () => {
            T || r()
        }, t[28] = r, t[29] = T, t[30] = E) : E = t[30];
        let D = E,
            O = _?.action_policy,
            k = _?.enabled_actions,
            A;
        t[31] !== O || t[32] !== k ? (A = je({
            actionPolicy: O,
            enabledActions: k
        }), t[31] = O, t[32] = k, t[33] = A) : A = t[33];
        let j = !!o && y,
            ue;
        return t[34] !== n || t[35] !== D || t[36] !== w || t[37] !== T || t[38] !== A || t[39] !== j ? (ue = (0, Q.jsx)(dt, {
            app: n,
            onClose: D,
            onCancel: D,
            onConfirm: w,
            submitting: T,
            initialActionPolicy: A,
            initialActionPolicyLoading: j
        }), t[34] = n, t[35] = D, t[36] = w, t[37] = T, t[38] = A, t[39] = j, t[40] = ue) : ue = t[40], ue
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
//# sourceMappingURL=46874983-resml7tpu91h2km0.js.map