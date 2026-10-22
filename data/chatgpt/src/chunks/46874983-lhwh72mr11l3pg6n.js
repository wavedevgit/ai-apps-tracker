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
    q1 as ne,
    q5 as re
} from "./4813494d-nxpmzchfjvwqts17.js";
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
    FTn as T,
    GKn as se,
    Jrt as E,
    KKn as D,
    KQ as O,
    P3t as k,
    PTn as ce,
    RQ as A,
    WQ as le,
    iit as j,
    j3t as M,
    nit as ue,
    oFn as N,
    rFn as P
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    DC as de,
    EC as fe,
    Ov as F,
    TC as I,
    kv as L,
    wC as R
} from "./30901919-lgbmg5s09xld40kt.js";
import {
    Sx as pe,
    _x as z,
    cy as B,
    gx as me,
    hx as he,
    ly as V,
    ny as H,
    vx as U,
    xx as W
} from "./c2675c8c-otyjprdiowg2v8hl.js";
import {
    a as G,
    r as K,
    t as q
} from "./832dbd3a-o3jozafw0zbo48m4.js";
import {
    n as ge,
    t as J
} from "./99a48954-c3chku9kaz5xncgc.js";
import {
    d as _e,
    f as ve,
    g as ye,
    h as be,
    m as Y,
    p as xe
} from "./b7c53a83-hcts135f8hiib80z.js";
import {
    a as Se,
    i as Ce,
    n as we,
    o as Te,
    r as Ee,
    t as De
} from "./b00adf98-e7i2vyaa2vgd87e3.js";
import {
    n as Oe,
    o as ke,
    s as Ae
} from "./e1258b01-f6805c7kkko5egq3.js";
import {
    a as je,
    i as Me,
    n as Ne,
    o as X,
    r as Pe,
    t as Fe
} from "./16e34fcb-iz9kwlgfpzvuztsq.js";
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
    return P({
        fetchValidLinksOnly: !0,
        productSku: ce.ADMIN_SETTING
    })
}

function tt() {
    return q()
}

function nt() {
    return c()?.normalizedAccountUserId
}

function rt() {
    return c()?.getWorkspaceId()
}
var it, Z, Q, at, ot, st, ct, lt, ut, dt, ft, pt, $, mt = e((() => {
    it = w(), ye(), ge(), z(), E(), m(), D(), de(), I(), L(), f(), r(), u(), k(), N(), G(), A(), T(), W(), h(), ne(), s(), l(), C(), g(), Z = t(S()), x(), Se(), Y(), ve(), H(), Ae(), Pe(), Le(), Q = ie(), at = new Set([`deleted`]), ot = `text-blue-500 dark:text-blue-400`, st = e => e.knowledgeConfig.some(e => e.connections.some(e => !at.has(e.connection_status))), ct = e => {
        "use forget";
        let t = (0, it.c)(6),
            {
                showActionDetails: n
            } = e,
            r = n === void 0 || n,
            i;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, Q.jsx)(se, {
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
            ne = u === void 0 || u,
            re = d === void 0 || d,
            ie = f !== void 0 && f,
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
            C, w, T, E, D, O, k, ce, A, le, j, M, ue, N, P, de, fe;
        if (t[5] !== n || t[6] !== h || t[7] !== _ || t[8] !== ie || t[9] !== v || t[10] !== o || t[11] !== c || t[12] !== s || t[13] !== x || t[14] !== ne || t[15] !== re || t[16] !== ae) {
            let e;
            t[34] === ne ? e = t[35] : (e = e => ne || e !== `read` && e !== `write`, t[34] = ne, t[35] = e);
            let r = me(n).filter(e),
                a;
            t[36] !== n || t[37] !== c ? (a = c !== void 0 && ke(n), t[36] = n, t[37] = c, t[38] = a) : a = t[38], T = a;
            let ee = $.openActionPlaceholder,
                l = _ || h,
                u;
            t[39] !== h || t[40] !== v ? (u = h ? v.formatMessage($.constraintsDisabledBySync) : void 0, t[39] = h, t[40] = v, t[41] = u) : u = t[41], w = u;
            let d = `action-constraints-trigger-${x}`,
                f;
            t[42] === v ? f = t[43] : (f = v.formatMessage(ee), t[42] = v, t[43] = f);
            let te;
            t[44] !== n || t[45] !== c ? (te = e => {
                e.preventDefault(), e.stopPropagation(), c?.(n)
            }, t[44] = n, t[45] = c, t[46] = te) : te = t[46];
            let m = l && `cursor-not-allowed`,
                g;
            t[47] === m ? g = t[48] : (g = p(`text-token-text-tertiary hover:bg-token-bg-secondary hover:text-token-text-primary flex size-8 items-center justify-center rounded-md opacity-0 transition-colors group-hover:opacity-100 focus-visible:opacity-100`, m), t[47] = m, t[48] = g);
            let y = `action-constraints-icon-${x}`,
                b;
            t[49] === y ? b = t[50] : (b = (0, Q.jsx)(i.SettingsWrench, {
                className: `h-4 w-4`,
                "data-testid": y,
                "aria-hidden": !0
            }), t[49] = y, t[50] = b);
            let S;
            t[51] !== l || t[52] !== f || t[53] !== te || t[54] !== g || t[55] !== b ? (S = (0, Q.jsx)(`button`, {
                type: `button`,
                "aria-label": f,
                onClick: te,
                disabled: l,
                className: g,
                children: b
            }), t[51] = l, t[52] = f, t[53] = te, t[54] = g, t[55] = b, t[56] = S) : S = t[56];
            let oe;
            t[57] !== d || t[58] !== S ? (oe = (0, Q.jsx)(`span`, {
                "data-action-constraints-trigger": !0,
                "data-testid": d,
                className: `action-constraints-trigger flex self-center`,
                children: S
            }), t[57] = d, t[58] = S, t[59] = oe) : oe = t[59], C = oe;
            let F;
            t[60] !== n.name || t[61] !== _ || t[62] !== o || t[63] !== s ? (F = e => {
                if (_) return;
                let t = e.target;
                t instanceof Element && t.closest(`label, button, a, input, select, textarea, [role='checkbox'], [data-action-constraints-trigger], .action-constraints-trigger, .action-details`) || s(n.name, !o)
            }, t[60] = n.name, t[61] = _, t[62] = o, t[63] = s, t[64] = F) : F = t[64];
            let I = F,
                L = ie && `ps-7`,
                R = !_ && `hover:bg-token-bg-tertiary`;
            t[65] !== L || t[66] !== R ? (de = p(`group`, L, R), t[65] = L, t[66] = R, t[67] = de) : de = t[67];
            let pe = re && `border-token-border-default border-b group-last:border-0`,
                z = _ ? `cursor-not-allowed` : `cursor-default`;
            t[68] !== pe || t[69] !== z ? (P = p([`px-2 py-1`, pe, z]), t[68] = pe, t[69] = z, t[70] = P) : P = t[70], M = `action-toggle-row-${x}`, ue = I;
            let B = !_ && `cursor-pointer`;
            t[71] === B ? N = t[72] : (N = p(`grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 px-2 py-1.5`, B), t[71] = B, t[72] = N), ce = ae, A = `contents cursor-pointer`, le = Re;
            let V;
            t[73] !== n.name || t[74] !== s ? (V = e => s(n.name, e.target.checked), t[73] = n.name, t[74] = s, t[75] = V) : V = t[75], t[76] !== _ || t[77] !== o || t[78] !== V || t[79] !== ae ? (j = (0, Q.jsx)(se, {
                id: ae,
                checked: o,
                onChange: V,
                disabled: _
            }), t[76] = _, t[77] = o, t[78] = V, t[79] = ae, t[80] = j) : j = t[80], k = `min-w-0`, D = `flex min-w-0 flex-wrap items-center gap-2`;
            let H = _ && `text-token-text-secondary`,
                W;
            t[81] === H ? W = t[82] : (W = p([`font-mono text-sm font-medium`, H]), t[81] = H, t[82] = W), t[83] !== n.name || t[84] !== W ? (O = (0, Q.jsx)(`div`, {
                className: W,
                children: n.name
            }), t[83] = n.name, t[84] = W, t[85] = O) : O = t[85], fe = `flex items-center gap-1 select-none`, E = U({
                badgeKeys: r,
                labels: he
            }), t[5] = n, t[6] = h, t[7] = _, t[8] = ie, t[9] = v, t[10] = o, t[11] = c, t[12] = s, t[13] = x, t[14] = ne, t[15] = re, t[16] = ae, t[17] = C, t[18] = w, t[19] = T, t[20] = E, t[21] = D, t[22] = O, t[23] = k, t[24] = ce, t[25] = A, t[26] = le, t[27] = j, t[28] = M, t[29] = ue, t[30] = N, t[31] = P, t[32] = de, t[33] = fe
        } else C = t[17], w = t[18], T = t[19], E = t[20], D = t[21], O = t[22], k = t[23], ce = t[24], A = t[25], le = t[26], j = t[27], M = t[28], ue = t[29], N = t[30], P = t[31], de = t[32], fe = t[33];
        let F;
        t[86] === r ? F = t[87] : (F = (0, Q.jsx)(we, {
            delta: r
        }), t[86] = r, t[87] = F);
        let I;
        t[88] !== E || t[89] !== F || t[90] !== fe ? (I = (0, Q.jsxs)(`div`, {
            className: fe,
            children: [E, F]
        }), t[88] = E, t[89] = F, t[90] = fe, t[91] = I) : I = t[91];
        let L;
        t[92] !== D || t[93] !== O || t[94] !== I ? (L = (0, Q.jsxs)(`div`, {
            className: D,
            children: [O, I]
        }), t[92] = D, t[93] = O, t[94] = I, t[95] = L) : L = t[95];
        let R;
        t[96] === n.description ? R = t[97] : (R = n.description ? n.description : (0, Q.jsx)(y, {
            ...$.noDescription
        }), t[96] = n.description, t[97] = R);
        let pe;
        t[98] === R ? pe = t[99] : (pe = (0, Q.jsx)(`div`, {
            className: `text-token-text-tertiary line-clamp-2 text-xs leading-5 wrap-anywhere`,
            children: R
        }), t[98] = R, t[99] = pe);
        let z;
        t[100] !== k || t[101] !== L || t[102] !== pe ? (z = (0, Q.jsxs)(`div`, {
            className: k,
            children: [L, pe]
        }), t[100] = k, t[101] = L, t[102] = pe, t[103] = z) : z = t[103];
        let B;
        t[104] !== ce || t[105] !== A || t[106] !== le || t[107] !== j || t[108] !== z ? (B = (0, Q.jsxs)(`label`, {
            htmlFor: ce,
            className: A,
            onClick: le,
            children: [j, z]
        }), t[104] = ce, t[105] = A, t[106] = le, t[107] = j, t[108] = z, t[109] = B) : B = t[109];
        let V;
        t[110] !== C || t[111] !== w || t[112] !== T ? (V = T && (w ? (0, Q.jsx)(te, {
            label: w,
            className: `action-constraints-trigger self-center`,
            children: C
        }) : C), t[110] = C, t[111] = w, t[112] = T, t[113] = V) : V = t[113];
        let H;
        t[114] !== n || t[115] !== r || t[116] !== a || t[117] !== g ? (H = g && (0, Q.jsx)(`div`, {
            className: `col-start-2 col-end-4 min-w-0`,
            children: (0, Q.jsx)(Ee, {
                action: n,
                actionDelta: r,
                prevAction: a,
                initiallyCollapsed: !0
            })
        }), t[114] = n, t[115] = r, t[116] = a, t[117] = g, t[118] = H) : H = t[118];
        let W;
        t[119] !== M || t[120] !== ue || t[121] !== N || t[122] !== B || t[123] !== V || t[124] !== H ? (W = (0, Q.jsxs)(`div`, {
            "data-testid": M,
            onPointerUp: ue,
            className: N,
            children: [B, V, H]
        }), t[119] = M, t[120] = ue, t[121] = N, t[122] = B, t[123] = V, t[124] = H, t[125] = W) : W = t[125];
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
                initialCustomNewActionPolicy: c,
                onRefreshActions: ee,
                refreshingActions: l,
                onSubmit: u,
                submitting: d,
                onCancel: f,
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
            [k, ce] = (0, Z.useState)(!1),
            A = (0, Z.useId)(),
            le = (0, Z.useId)(),
            j = (0, Z.useId)(),
            M = (0, Z.useId)(),
            ue, N;
        t[0] === s ? (ue = t[1], N = t[2]) : (ue = () => {
            w(new Set(s))
        }, N = [s], t[0] = s, t[1] = ue, t[2] = N), (0, Z.useEffect)(ue, N);
        let P, de;
        t[3] === c ? (P = t[4], de = t[5]) : (P = () => {
            E(c)
        }, de = [c], t[3] = c, t[4] = P, t[5] = de), (0, Z.useEffect)(P, de);
        let I;
        t[6] === r ? I = t[7] : (I = st(r), t[6] = r, t[7] = I);
        let L = I,
            pe;
        if (t[8] !== i || t[9] !== o) {
            let e;
            t[11] === o ? e = t[12] : (e = (e, t) => (o.get(e.name) ?? De.Unmodified) - (o.get(t.name) ?? De.Unmodified) || e.name.localeCompare(t.name), t[11] = o, t[12] = e), pe = [...i].sort(e), t[8] = i, t[9] = o, t[10] = pe
        } else pe = t[10];
        let z = pe,
            B;
        t[13] === z ? B = t[14] : (B = z.filter(ze), t[13] = z, t[14] = B);
        let me = B,
            he;
        t[15] === z ? he = t[16] : (he = z.filter(Be), t[15] = z, t[16] = he);
        let V = he,
            H;
        t[17] === i ? H = t[18] : (H = i.map(Ve), t[17] = i, t[18] = H);
        let U = H,
            W;
        t[19] !== U || t[20] !== r.primaryConnector.id || t[21] !== C || t[22] !== s ? (W = xe({
            connectorId: r.primaryConnector.id,
            adminConfigurableActionNames: U,
            initialEnabledActionNames: s,
            nextEnabledActionNames: C
        }), t[19] = U, t[20] = r.primaryConnector.id, t[21] = C, t[22] = s, t[23] = W) : W = t[23];
        let G = W,
            K;
        t[24] === me ? K = t[25] : (K = me.map(He), t[24] = me, t[25] = K);
        let q = K,
            ge;
        t[26] === V ? ge = t[27] : (ge = V.map(Ue), t[26] = V, t[27] = ge);
        let J = ge,
            ve;
        t[28] !== U || t[29] !== C ? (ve = U.length > 0 && U.every(e => C.has(e)), t[28] = U, t[29] = C, t[30] = ve) : ve = t[30];
        let ye = ve,
            be;
        t[31] !== C || t[32] !== q ? (be = q.length > 0 && q.every(e => C.has(e)), t[31] = C, t[32] = q, t[33] = be) : be = t[33];
        let Y = be,
            Se;
        t[34] !== C || t[35] !== J ? (Se = J.length > 0 && J.every(e => C.has(e)), t[34] = C, t[35] = J, t[36] = Se) : Se = t[36];
        let Ce = Se,
            we;
        if (t[37] !== C || t[38] !== q) {
            let e;
            t[40] === C ? e = t[41] : (e = e => C.has(e), t[40] = C, t[41] = e), we = q.filter(e), t[37] = C, t[38] = q, t[39] = we
        } else we = t[39];
        let Te = we.length,
            Ee;
        if (t[42] !== C || t[43] !== J) {
            let e;
            t[45] === C ? e = t[46] : (e = e => C.has(e), t[45] = C, t[46] = e), Ee = J.filter(e), t[42] = C, t[43] = J, t[44] = Ee
        } else Ee = t[44];
        let Oe = Ee.length,
            ke;
        t[47] !== Y || t[48] !== C || t[49] !== q ? (ke = !Y && q.some(e => C.has(e)), t[47] = Y, t[48] = C, t[49] = q, t[50] = ke) : ke = t[50];
        let Ae = ke,
            je;
        t[51] !== Ce || t[52] !== C || t[53] !== J ? (je = !Ce && J.some(e => C.has(e)), t[51] = Ce, t[52] = C, t[53] = J, t[54] = je) : je = t[54];
        let Me = je,
            X = !!l || d,
            Pe = We,
            Fe;
        t[55] !== U || t[56] !== ye || t[57] !== Y || t[58] !== C || t[59] !== q ? (Fe = (e, t) => {
            let n = new Set(C);
            for (let r of e) t ? n.add(r) : n.delete(r);
            let r = Pe(U, n),
                i = Pe(q, n);
            w(n), t && E(e => !ye && r ? `custom_new_all` : !Y && i && e !== `custom_new_all` ? `custom_new_read_only` : e)
        }, t[55] = U, t[56] = ye, t[57] = Y, t[58] = C, t[59] = q, t[60] = Fe) : Fe = t[60];
        let Ie = Fe,
            Le;
        t[61] !== q || t[62] !== Ie ? (Le = e => {
            Ie(q, e)
        }, t[61] = q, t[62] = Ie, t[63] = Le) : Le = t[63];
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
        t[71] !== i.length || t[72] !== v || t[73] !== D || t[74] !== l || t[75] !== d || t[76] !== Xe || t[77] !== k ? (et = [i.length, v, D, l, d, Xe, k], t[71] = i.length, t[72] = v, t[73] = D, t[74] = l, t[75] = d, t[76] = Xe, t[77] = k, t[78] = et) : et = t[78], (0, Z.useEffect)($e, et);
        let tt;
        t[79] === Symbol.for(`react.memo_cache_sentinel`) ? (tt = [
            [`custom_new_all`, $.unconfiguredActionsToggleLabel],
            [`custom_new_read_only`, $.unconfiguredReadActionsToggleLabel],
            [`custom`, $.unconfiguredNoActionsToggleLabel]
        ], t[79] = tt) : tt = t[79];
        let nt = tt,
            rt;
        t[80] !== S || t[81] !== ee || t[82] !== _ || t[83] !== l || t[84] !== d ? (rt = _ ? null : (0, Q.jsx)(te, {
            label: ee ? void 0 : S.formatMessage($.needLink),
            children: (0, Q.jsx)(n, {
                size: `small`,
                color: `secondary`,
                loading: l,
                disabled: !ee || d,
                onClick: () => ee?.(),
                children: (0, Q.jsx)(y, {
                    ...$.refreshLabel
                })
            })
        }), t[80] = S, t[81] = ee, t[82] = _, t[83] = l, t[84] = d, t[85] = rt) : rt = t[85];
        let at = rt,
            ct;
        t[86] === r.primaryConnector.name ? ct = t[87] : (ct = (0, Q.jsx)(`p`, {
            className: `text-token-text-secondary flex-1 pb-0 text-sm leading-5`,
            children: (0, Q.jsx)(y, {
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
        t[91] === v ? dt = t[92] : (dt = v && (0, Q.jsx)(`div`, {
            className: `border-token-border-default bg-token-bg-tertiary text-token-text-secondary rounded-lg border px-3 py-2 text-xs`,
            children: (0, Q.jsx)(y, {
                ...$.constraintsDisabledBySync
            })
        }), t[91] = v, t[92] = dt);
        let ft;
        t[93] !== r.primaryConnector.name || t[94] !== G || t[95] !== Ie ? (ft = G.length > 0 && (0, Q.jsx)(_e, {
            appName: r.primaryConnector.name,
            onUndo: () => Ie([...G], !0)
        }), t[93] = r.primaryConnector.name, t[94] = G, t[95] = Ie, t[96] = ft) : ft = t[96];
        let pt;
        t[97] !== i.length || t[98] !== Y || t[99] !== Ce || t[100] !== v || t[101] !== o || t[102] !== X || t[103] !== Re || t[104] !== C || t[105] !== Te || t[106] !== Oe || t[107] !== S || t[108] !== L || t[109] !== h || t[110] !== a || t[111] !== me || t[112] !== D || t[113] !== Ae || t[114] !== A || t[115] !== Ie || t[116] !== J || t[117] !== V || t[118] !== k || t[119] !== Me || t[120] !== le ? (pt = i.length === 0 ? (0, Q.jsx)(`p`, {
            className: `text-token-text-tertiary m-4 text-center text-xs italic`,
            children: (0, Q.jsx)(y, {
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
                                t instanceof HTMLElement && t.closest(`label, button, input`) || O(Ge)
                            },
                            className: p(`flex items-center justify-between gap-3 px-4 py-3 transition-colors`, X ? `cursor-not-allowed` : `hover:bg-token-bg-tertiary cursor-pointer`),
                            children: [(0, Q.jsxs)(`label`, {
                                htmlFor: `action-toggle-all-read-actions`,
                                className: p(`flex min-w-0 items-center gap-3`, X ? `cursor-not-allowed opacity-60` : `cursor-pointer`),
                                children: [(0, Q.jsx)(se, {
                                    id: `action-toggle-all-read-actions`,
                                    checked: Y,
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
                                    }), !Y && (0, Q.jsx)(`span`, {
                                        className: `text-token-text-tertiary inline-flex text-sm leading-none`,
                                        children: (0, Q.jsx)(y, {
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
                                "aria-label": S.formatMessage(D ? $.hideActionDetailsLabel : $.viewActionDetailsLabel),
                                "aria-expanded": D,
                                "aria-controls": A,
                                onClick: () => O(Ke),
                                disabled: X,
                                children: D ? (0, Q.jsx)(fe, {
                                    className: `h-4 w-4`,
                                    "aria-hidden": !0
                                }) : (0, Q.jsx)(R, {
                                    className: `h-4 w-4`,
                                    "aria-hidden": !0
                                })
                            })]
                        }), D && (0, Q.jsx)(`ul`, {
                            id: A,
                            className: `p-0`,
                            children: me.map(e => (0, Q.jsx)(lt, {
                                action: e,
                                actionDelta: o.get(e.name),
                                prevAction: a?.get(e.name)?.action,
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
                    }), V.length > 0 && (0, Q.jsxs)(`div`, {
                        className: p(me.length > 0 && `border-token-border-default border-t`),
                        children: [(0, Q.jsxs)(`div`, {
                            "data-testid": `action-set-row-write`,
                            onPointerUp: e => {
                                if (X) return;
                                let t = e.target;
                                t instanceof HTMLElement && t.closest(`label, button, input`) || ce(qe)
                            },
                            className: p(`flex items-center justify-between gap-3 px-4 py-3 transition-colors`, X ? `cursor-not-allowed` : `hover:bg-token-bg-tertiary cursor-pointer`),
                            children: [(0, Q.jsxs)(`label`, {
                                htmlFor: `action-toggle-all-write-actions`,
                                className: p(`flex min-w-0 items-center gap-3`, X ? `cursor-not-allowed opacity-60` : `cursor-pointer`),
                                children: [(0, Q.jsx)(se, {
                                    id: `action-toggle-all-write-actions`,
                                    checked: Ce,
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
                                    }), !Ce && (0, Q.jsx)(`span`, {
                                        className: `text-token-text-tertiary inline-flex text-sm leading-none`,
                                        children: (0, Q.jsx)(y, {
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
                                "aria-label": S.formatMessage(k ? $.hideActionDetailsLabel : $.viewActionDetailsLabel),
                                "aria-expanded": k,
                                "aria-controls": le,
                                onClick: () => ce(Je),
                                disabled: X,
                                children: k ? (0, Q.jsx)(fe, {
                                    className: `h-4 w-4`,
                                    "aria-hidden": !0
                                }) : (0, Q.jsx)(R, {
                                    className: `h-4 w-4`,
                                    "aria-hidden": !0
                                })
                            })]
                        }), k && (0, Q.jsx)(`ul`, {
                            id: le,
                            className: `p-0`,
                            children: V.map(e => (0, Q.jsx)(lt, {
                                action: e,
                                actionDelta: o.get(e.name),
                                prevAction: a?.get(e.name)?.action,
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
                }), L && h && (0, Q.jsx)(`div`, {
                    className: `mt-2 space-y-2`,
                    children: (0, Q.jsxs)(`div`, {
                        className: `bg-token-bg-tertiary text-token-text-secondary flex items-center gap-3 rounded-lg px-4 py-3 text-sm leading-6`,
                        children: [(0, Q.jsx)(F, {
                            className: `h-4 w-4 shrink-0`
                        }), (0, Q.jsx)(`span`, {
                            children: (0, Q.jsx)(y, {
                                ...$.syncEnabledConstraintsNotice
                            })
                        })]
                    })
                })]
            })
        }), t[97] = i.length, t[98] = Y, t[99] = Ce, t[100] = v, t[101] = o, t[102] = X, t[103] = Re, t[104] = C, t[105] = Te, t[106] = Oe, t[107] = S, t[108] = L, t[109] = h, t[110] = a, t[111] = me, t[112] = D, t[113] = Ae, t[114] = A, t[115] = Ie, t[116] = J, t[117] = V, t[118] = k, t[119] = Me, t[120] = le, t[121] = pt) : pt = t[121];
        let mt;
        t[122] !== ut || t[123] !== dt || t[124] !== ft || t[125] !== pt ? (mt = (0, Q.jsxs)(`div`, {
            ref: ae,
            className: `min-h-0 flex-1 space-y-3 overflow-y-auto px-6 pt-2 pb-3`,
            children: [ut, dt, ft, pt]
        }), t[122] = ut, t[123] = dt, t[124] = ft, t[125] = pt, t[126] = mt) : mt = t[126];
        let ht;
        t[127] !== i.length || t[128] !== r.primaryConnector.name || t[129] !== T || t[130] !== X || t[131] !== x || t[132] !== M || t[133] !== j ? (ht = i.length > 0 && (0, Q.jsxs)(`div`, {
            className: p(`shrink-0 space-y-3 px-6 pt-1 pb-6`, x && `border-token-border-default border-t pt-4`),
            children: [(0, Q.jsx)(`div`, {
                id: j,
                className: `text-token-text-secondary text-sm leading-5`,
                children: (0, Q.jsx)(y, {
                    ...$.unconfiguredActionsDescription,
                    values: {
                        app: r.primaryConnector.name
                    }
                })
            }), (0, Q.jsx)(`div`, {
                role: `radiogroup`,
                "aria-labelledby": j,
                className: `text-token-text-secondary flex flex-col items-start gap-3 text-sm`,
                children: nt.map(e => {
                    let [t, n] = e;
                    return (0, Q.jsxs)(`label`, {
                        className: `flex cursor-pointer items-center gap-2`,
                        children: [(0, Q.jsx)(`input`, {
                            type: `radio`,
                            name: M,
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
        }), t[127] = i.length, t[128] = r.primaryConnector.name, t[129] = T, t[130] = X, t[131] = x, t[132] = M, t[133] = j, t[134] = ht) : ht = t[134];
        let gt = x && i.length === 0 && `border-token-border-default border-t pt-4`,
            _t;
        t[135] === gt ? _t = t[136] : (_t = p(`flex shrink-0 justify-end gap-2 px-6 pt-0 pb-6`, gt), t[135] = gt, t[136] = _t);
        let vt;
        t[137] === Symbol.for(`react.memo_cache_sentinel`) ? (vt = (0, Q.jsx)(y, {
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
        t[141] !== U || t[142] !== T || t[143] !== C || t[144] !== u || t[145] !== q ? (bt = () => u({
            enabledActions: Array.from(C),
            actionPolicy: Ne({
                actionIds: U,
                readOnlyActionIds: q,
                enabledActions: C,
                customNewActionPolicy: T
            })
        }), t[141] = U, t[142] = T, t[143] = C, t[144] = u, t[145] = q, t[146] = bt) : bt = t[146];
        let xt = X || b,
            St;
        t[147] === Symbol.for(`react.memo_cache_sentinel`) ? (St = (0, Q.jsx)(y, {
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
            ne = te === void 0 || te,
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
            actions: se,
            isLoading: E,
            refetch: D
        } = O(n.primaryConnector, ce.ADMIN_SETTING, T), k;
        t[1] === se ? k = t[2] : (k = se.filter(Me), t[1] = se, t[2] = k);
        let A = k,
            M;
        bb0: {
            if (s) {
                let e;
                t[3] === A ? e = t[4] : (e = new Set(A.map(Ye)), t[3] = A, t[4] = e);
                let n = e,
                    r;
                t[5] === s ? r = t[6] : (r = Array.from(s), t[5] = s, t[6] = r);
                let i;
                t[7] !== r || t[8] !== n ? (i = new Set(r.filter(e => n.has(e))), t[7] = r, t[8] = n, t[9] = i) : i = t[9], M = i;
                break bb0
            }
            let e;t[10] === A ? e = t[11] : (e = new Set(A.filter(Xe).map(Ze)), t[10] = A, t[11] = e),
            M = e
        }
        let N = M,
            [P, de] = (0, Z.useState)(Fe),
            fe, F;
        t[12] !== E || t[13] !== p || t[14] !== m ? (F = () => {
            w.current || E || m || (de(X(p)), w.current = !0)
        }, fe = [E, p, m], t[12] = E, t[13] = p, t[14] = m, t[15] = fe, t[16] = F) : (fe = t[15], F = t[16]), (0, Z.useEffect)(F, fe);
        let I;
        if (t[17] !== A) {
            I = new Map;
            for (let e of A) I.set(e.name, {
                action: e,
                hash: Ce(e)
            });
            t[17] = A, t[18] = I
        } else I = t[18];
        let L = I,
            [R, z] = (0, Z.useState)(null),
            me = Te(L, R),
            he;
        t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (he = d()?.getWorkspaceId(), t[19] = he) : he = t[19];
        let V = he,
            H = le(),
            U = B(),
            W = (0, Z.useRef)(!1),
            G;
        t[20] !== n || t[21] !== ne ? (G = Oe({
            app: n,
            showParameterConstraints: ne
        }), t[20] = n, t[21] = ne, t[22] = G) : G = t[22];
        let K = G,
            q, ge;
        t[23] !== E || t[24] !== n.primaryConnector.actions_changed_since_review || t[25] !== n.primaryConnector.id || t[26] !== U || t[27] !== H || t[28] !== A ? (q = () => {
            if (W.current || !V || !n.primaryConnector.actions_changed_since_review || E) return;
            W.current = !0;
            let e = A.filter(Qe).map($e);
            (async () => {
                await j(n.primaryConnector.id, V, e), H(), U(n.primaryConnector.id)
            })()
        }, ge = [E, n.primaryConnector.actions_changed_since_review, n.primaryConnector.id, U, H, A, V], t[23] = E, t[24] = n.primaryConnector.actions_changed_since_review, t[25] = n.primaryConnector.id, t[26] = U, t[27] = H, t[28] = A, t[29] = q, t[30] = ge) : (q = t[29], ge = t[30]), (0, Z.useEffect)(q, ge);
        let J;
        t[31] === Symbol.for(`react.memo_cache_sentinel`) ? (J = a(), t[31] = J) : J = t[31];
        let _e = J,
            ve;
        t[32] !== L || t[33] !== R || t[34] !== D ? (ve = async e => {
            R || z(L), await ue(e), await D()
        }, t[32] = L, t[33] = R, t[34] = D, t[35] = ve) : ve = t[35];
        let ye;
        t[36] !== n.primaryConnector.id || t[37] !== _ ? (ye = () => {
            _.invalidateQueries({
                queryKey: [`connector-action-clamp`, n.primaryConnector.id]
            })
        }, t[36] = n.primaryConnector.id, t[37] = _, t[38] = ye) : ye = t[38];
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
        let xe = ae(Y),
            {
                data: Se
            } = re(et),
            we = Ie(Se, n.primaryConnector.id),
            Ee = pe(n.primaryConnector),
            De;
        t[43] === ie ? De = t[44] : (De = ie.formatMessage($.actionsControlModalTitle), t[43] = ie, t[44] = De);
        let ke;
        t[45] !== me || t[46] !== E || t[47] !== n || t[48] !== K || t[49] !== N || t[50] !== m || t[51] !== Ee || t[52] !== we || t[53] !== i || t[54] !== o || t[55] !== S || t[56] !== R || t[57] !== xe || t[58] !== P || t[59] !== g || t[60] !== A ? (ke = E && !xe.isPending ? (0, Q.jsxs)(`div`, {
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
            actions: A,
            prevActions: R,
            deltas: me,
            initialEnabledActions: N,
            initialCustomNewActionPolicy: P,
            onSubmit: o,
            onCancel: i,
            refreshingActions: xe.isPending,
            submitting: g || m,
            confirmDisabled: A.length === 0,
            refreshHidden: !Ee,
            onRefreshActions: Ee && we !== void 0 ? () => {
                xe.mutate(we.id)
            } : void 0,
            onOpenConstraints: K ? e => x(e) : void 0,
            constraintsDisabled: !1,
            showScrollDividers: S,
            onScrollabilityChange: C
        }), t[45] = me, t[46] = E, t[47] = n, t[48] = K, t[49] = N, t[50] = m, t[51] = Ee, t[52] = we, t[53] = i, t[54] = o, t[55] = S, t[56] = R, t[57] = xe, t[58] = P, t[59] = g, t[60] = A, t[61] = ke) : ke = t[61];
        let Ae;
        t[62] !== r || t[63] !== S || t[64] !== h || t[65] !== De || t[66] !== ke ? (Ae = (0, Q.jsx)(ee, {
            isOpen: !0,
            onClose: r,
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
        }), t[62] = r, t[63] = S, t[64] = h, t[65] = De, t[66] = ke, t[67] = Ae) : Ae = t[67];
        let je;
        t[68] !== n || t[69] !== K || t[70] !== b ? (je = K && b && (0, Q.jsx)(pt, {
            app: n,
            onClose: () => x(null),
            onBack: () => x(null),
            showOverlayBackground: !0,
            initialSelectedAction: b
        }), t[68] = n, t[69] = K, t[70] = b, t[71] = je) : je = t[71];
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
            i = oe(),
            s;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (s = d()?.getWorkspaceId(), t[0] = s) : s = t[0];
        let c = s,
            ee;
        t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (ee = a(), t[1] = ee) : ee = t[1];
        let l = ee,
            u = v(),
            f = le(),
            te = B(),
            p = V(),
            m = re(tt),
            h = re(nt),
            g = !!c,
            ne;
        t[2] !== n.primaryConnector.id || t[3] !== m ? (ne = () => {
            K(m, c ?? ``, n.primaryConnector.id, g)
        }, t[2] = n.primaryConnector.id, t[3] = m, t[4] = ne) : ne = t[4];
        let ie;
        t[5] !== n.primaryConnector.id || t[6] !== h || t[7] !== m ? (ie = [m, h, c, n.primaryConnector.id, g], t[5] = n.primaryConnector.id, t[6] = h, t[7] = m, t[8] = ie) : ie = t[8], (0, Z.useEffect)(ne, ie);
        let _;
        t[9] !== n.primaryConnector.id || t[10] !== h || t[11] !== m ? (_ = J({
            queryKeyPrefix: `connector-workspace-permissions`,
            workspaceId: c,
            connectorId: n.primaryConnector.id,
            enabled: g,
            transport: m,
            actorId: h
        }), t[9] = n.primaryConnector.id, t[10] = h, t[11] = m, t[12] = _) : _ = t[12];
        let {
            data: y,
            isLoading: x
        } = b(_), S;
        t[13] !== n.primaryConnector.id || t[14] !== te || t[15] !== p || t[16] !== f || t[17] !== u ? (S = async e => {
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
        }, t[13] = n.primaryConnector.id, t[14] = te, t[15] = p, t[16] = f, t[17] = u, t[18] = S) : S = t[18];
        let C;
        t[19] !== i || t[20] !== r ? (C = () => {
            l.success(i.formatMessage({
                id: `AW+VoO`,
                defaultMessage: `App tools updated successfully.`
            })), r()
        }, t[19] = i, t[20] = r, t[21] = C) : C = t[21];
        let w;
        t[22] === i ? w = t[23] : (w = () => {
            l.danger(i.formatMessage({
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
            mutateAsync: se,
            isPending: E
        } = ae(T), D;
        t[28] !== r || t[29] !== E ? (D = () => {
            E || r()
        }, t[28] = r, t[29] = E, t[30] = D) : D = t[30];
        let O = D,
            k = y?.action_policy,
            ce = y?.enabled_actions,
            A;
        t[31] !== k || t[32] !== ce ? (A = je({
            actionPolicy: k,
            enabledActions: ce
        }), t[31] = k, t[32] = ce, t[33] = A) : A = t[33];
        let j = !!c && x,
            M;
        return t[34] !== n || t[35] !== O || t[36] !== se || t[37] !== E || t[38] !== A || t[39] !== j ? (M = (0, Q.jsx)(dt, {
            app: n,
            onClose: O,
            onCancel: O,
            onConfirm: se,
            submitting: E,
            initialActionPolicy: A,
            initialActionPolicyLoading: j
        }), t[34] = n, t[35] = O, t[36] = se, t[37] = E, t[38] = A, t[39] = j, t[40] = M) : M = t[40], M
    }, pt = e => {
        "use forget";
        let t = (0, it.c)(3),
            n = re(rt),
            r;
        return t[0] !== e || t[1] !== n ? (r = (0, Q.jsx)(be, {
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
//# sourceMappingURL=46874983-lhwh72mr11l3pg6n.js.map