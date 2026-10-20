import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    I1 as n,
    J5 as r,
    JT as i,
    L7 as a,
    M1 as o,
    M5 as s,
    Mz as c,
    N7 as ee,
    Nz as l,
    RU as u,
    S1 as d,
    Sw as f,
    Xy as p,
    Yy as te,
    m8 as m,
    q5 as h,
    qT as g,
    ww as ne,
    zU as re
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Bn as ie,
    Hn as _,
    N as v,
    O as y,
    Pn as b,
    Rn as x,
    Tn as S,
    Vn as C,
    p as ae,
    s as w,
    zn as T
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    C3t as E,
    E3t as D,
    FQ as O,
    SPn as k,
    TPn as A,
    UQ as oe,
    VQ as se,
    Yrt as j,
    aTn as M,
    ait as ce,
    dKn as le,
    fKn as ue,
    iTn as N,
    rit as de
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    DC as P,
    EC as fe,
    Ov as F,
    TC as I,
    kv as L,
    wC as R
} from "./30901919-jory365vq6ym5crx.js";
import {
    $x as pe,
    My as z,
    Qx as me,
    Ty as B,
    aS as V,
    eS as H,
    iS as U,
    jy as W,
    tS as he
} from "./c2675c8c-nxl2ic2ofk2vw70s.js";
import {
    a as G,
    r as K,
    t as q
} from "./832dbd3a-klwywsa40rwcjix6.js";
import {
    n as ge,
    o as J,
    s as _e
} from "./e1258b01-gguen6vzza2gncx4.js";
import {
    n as ve,
    t as ye
} from "./99a48954-b5oyjy59r8mv6u45.js";
import {
    a as Y,
    i as be,
    n as xe,
    o as Se,
    r as Ce,
    t as we
} from "./16e34fcb-fit1mu5dwux7fh71.js";
import {
    d as Te,
    f as Ee,
    g as De,
    h as Oe,
    m as ke,
    p as Ae
} from "./b7c53a83-iryhbxodlq27iczp.js";
import {
    a as je,
    i as Me,
    n as X,
    o as Ne,
    r as Pe,
    t as Fe
} from "./b00adf98-mxtd1uap5wlsqat0.js";
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
        productSku: N.ADMIN_SETTING
    })
}

function tt() {
    return q()
}

function nt() {
    return d()?.normalizedAccountUserId
}

function rt() {
    return d()?.getWorkspaceId()
}
var it, Z, Q, at, ot, st, ct, lt, ut, dt, ft, pt, $, mt = e((() => {
    it = S(), De(), ve(), H(), j(), i(), ue(), P(), I(), L(), l(), ne(), p(), D(), A(), G(), O(), M(), U(), m(), n(), re(), a(), w(), r(), Z = t(_()), T(), je(), ke(), Ee(), B(), _e(), Ce(), Le(), Q = C(), at = new Set([`deleted`]), ot = `text-blue-500 dark:text-blue-400`, st = e => e.knowledgeConfig.some(e => e.connections.some(e => !at.has(e.connection_status))), ct = e => {
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
                onToggle: o,
                onOpenConstraints: s,
                constraintsDisabled: ee,
                showActionDetails: l,
                showActionTypeBadges: u,
                showRowBorder: d,
                indented: f,
                disabled: p
            } = e,
            m = ee !== void 0 && ee,
            g = l === void 0 || l,
            ne = u === void 0 || u,
            re = d === void 0 || d,
            _ = f !== void 0 && f,
            v = p !== void 0 && p,
            y = ie(),
            x;
        if (t[0] !== n.name) {
            let e;
            t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (e = /[^a-zA-Z0-9_-]/g, t[2] = e) : e = t[2], x = n.name.replace(e, `-`), t[0] = n.name, t[1] = x
        } else x = t[1];
        let S = x,
            C;
        t[3] === n ? C = t[4] : (C = Me(n), t[3] = n, t[4] = C);
        let ae = `action-toggle-${S}-${C}`,
            w, T, E, D, O, k, A, oe, se, j, M, ce, ue, N, de, P, fe;
        if (t[5] !== n || t[6] !== m || t[7] !== v || t[8] !== _ || t[9] !== y || t[10] !== a || t[11] !== s || t[12] !== o || t[13] !== S || t[14] !== ne || t[15] !== re || t[16] !== ae) {
            let e;
            t[34] === ne ? e = t[35] : (e = e => ne || e !== `read` && e !== `write`, t[34] = ne, t[35] = e);
            let r = pe(n).filter(e),
                i;
            t[36] !== n || t[37] !== s ? (i = s !== void 0 && J(n), t[36] = n, t[37] = s, t[38] = i) : i = t[38], E = i;
            let ee = $.openActionPlaceholder,
                l = v || m,
                u;
            t[39] !== m || t[40] !== y ? (u = m ? y.formatMessage($.constraintsDisabledBySync) : void 0, t[39] = m, t[40] = y, t[41] = u) : u = t[41], T = u;
            let d = `action-constraints-trigger-${S}`,
                f;
            t[42] === y ? f = t[43] : (f = y.formatMessage(ee), t[42] = y, t[43] = f);
            let p;
            t[44] !== n || t[45] !== s ? (p = e => {
                e.preventDefault(), e.stopPropagation(), s?.(n)
            }, t[44] = n, t[45] = s, t[46] = p) : p = t[46];
            let te = l && `cursor-not-allowed`,
                g;
            t[47] === te ? g = t[48] : (g = h(`text-token-text-tertiary hover:bg-token-bg-secondary hover:text-token-text-primary flex size-8 items-center justify-center rounded-md opacity-0 transition-colors group-hover:opacity-100 focus-visible:opacity-100`, te), t[47] = te, t[48] = g);
            let ie = `action-constraints-icon-${S}`,
                b;
            t[49] === ie ? b = t[50] : (b = (0, Q.jsx)(c.SettingsWrench, {
                className: `h-4 w-4`,
                "data-testid": ie,
                "aria-hidden": !0
            }), t[49] = ie, t[50] = b);
            let x;
            t[51] !== l || t[52] !== f || t[53] !== p || t[54] !== g || t[55] !== b ? (x = (0, Q.jsx)(`button`, {
                type: `button`,
                "aria-label": f,
                onClick: p,
                disabled: l,
                className: g,
                children: b
            }), t[51] = l, t[52] = f, t[53] = p, t[54] = g, t[55] = b, t[56] = x) : x = t[56];
            let C;
            t[57] !== d || t[58] !== x ? (C = (0, Q.jsx)(`span`, {
                "data-action-constraints-trigger": !0,
                "data-testid": d,
                className: `action-constraints-trigger flex self-center`,
                children: x
            }), t[57] = d, t[58] = x, t[59] = C) : C = t[59], w = C;
            let F;
            t[60] !== n.name || t[61] !== v || t[62] !== a || t[63] !== o ? (F = e => {
                if (v) return;
                let t = e.target;
                t instanceof Element && t.closest(`label, button, a, input, select, textarea, [role='checkbox'], [data-action-constraints-trigger], .action-constraints-trigger, .action-details`) || o(n.name, !a)
            }, t[60] = n.name, t[61] = v, t[62] = a, t[63] = o, t[64] = F) : F = t[64];
            let I = F,
                L = _ && `ps-7`,
                R = !v && `hover:bg-token-bg-tertiary`;
            t[65] !== L || t[66] !== R ? (P = h(`group`, L, R), t[65] = L, t[66] = R, t[67] = P) : P = t[67];
            let z = re && `border-token-border-default border-b group-last:border-0`,
                B = v ? `cursor-not-allowed` : `cursor-default`;
            t[68] !== z || t[69] !== B ? (de = h([`px-2 py-1`, z, B]), t[68] = z, t[69] = B, t[70] = de) : de = t[70], ce = `action-toggle-row-${S}`, ue = I;
            let V = !v && `cursor-pointer`;
            t[71] === V ? N = t[72] : (N = h(`grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 px-2 py-1.5`, V), t[71] = V, t[72] = N), oe = ae, se = `contents cursor-pointer`, j = Re;
            let H;
            t[73] !== n.name || t[74] !== o ? (H = e => o(n.name, e.target.checked), t[73] = n.name, t[74] = o, t[75] = H) : H = t[75], t[76] !== v || t[77] !== a || t[78] !== H || t[79] !== ae ? (M = (0, Q.jsx)(le, {
                id: ae,
                checked: a,
                onChange: H,
                disabled: v
            }), t[76] = v, t[77] = a, t[78] = H, t[79] = ae, t[80] = M) : M = t[80], A = `min-w-0`, O = `flex min-w-0 flex-wrap items-center gap-2`;
            let U = v && `text-token-text-secondary`,
                W;
            t[81] === U ? W = t[82] : (W = h([`font-mono text-sm font-medium`, U]), t[81] = U, t[82] = W), t[83] !== n.name || t[84] !== W ? (k = (0, Q.jsx)(`div`, {
                className: W,
                children: n.name
            }), t[83] = n.name, t[84] = W, t[85] = k) : k = t[85], fe = `flex items-center gap-1 select-none`, D = he({
                badgeKeys: r,
                labels: me
            }), t[5] = n, t[6] = m, t[7] = v, t[8] = _, t[9] = y, t[10] = a, t[11] = s, t[12] = o, t[13] = S, t[14] = ne, t[15] = re, t[16] = ae, t[17] = w, t[18] = T, t[19] = E, t[20] = D, t[21] = O, t[22] = k, t[23] = A, t[24] = oe, t[25] = se, t[26] = j, t[27] = M, t[28] = ce, t[29] = ue, t[30] = N, t[31] = de, t[32] = P, t[33] = fe
        } else w = t[17], T = t[18], E = t[19], D = t[20], O = t[21], k = t[22], A = t[23], oe = t[24], se = t[25], j = t[26], M = t[27], ce = t[28], ue = t[29], N = t[30], de = t[31], P = t[32], fe = t[33];
        let F;
        t[86] === r ? F = t[87] : (F = (0, Q.jsx)(X, {
            delta: r
        }), t[86] = r, t[87] = F);
        let I;
        t[88] !== D || t[89] !== F || t[90] !== fe ? (I = (0, Q.jsxs)(`div`, {
            className: fe,
            children: [D, F]
        }), t[88] = D, t[89] = F, t[90] = fe, t[91] = I) : I = t[91];
        let L;
        t[92] !== O || t[93] !== k || t[94] !== I ? (L = (0, Q.jsxs)(`div`, {
            className: O,
            children: [k, I]
        }), t[92] = O, t[93] = k, t[94] = I, t[95] = L) : L = t[95];
        let R;
        t[96] === n.description ? R = t[97] : (R = n.description ? n.description : (0, Q.jsx)(b, {
            ...$.noDescription
        }), t[96] = n.description, t[97] = R);
        let z;
        t[98] === R ? z = t[99] : (z = (0, Q.jsx)(`div`, {
            className: `text-token-text-tertiary line-clamp-2 text-xs leading-5 wrap-anywhere`,
            children: R
        }), t[98] = R, t[99] = z);
        let B;
        t[100] !== A || t[101] !== L || t[102] !== z ? (B = (0, Q.jsxs)(`div`, {
            className: A,
            children: [L, z]
        }), t[100] = A, t[101] = L, t[102] = z, t[103] = B) : B = t[103];
        let V;
        t[104] !== oe || t[105] !== se || t[106] !== j || t[107] !== M || t[108] !== B ? (V = (0, Q.jsxs)(`label`, {
            htmlFor: oe,
            className: se,
            onClick: j,
            children: [M, B]
        }), t[104] = oe, t[105] = se, t[106] = j, t[107] = M, t[108] = B, t[109] = V) : V = t[109];
        let H;
        t[110] !== w || t[111] !== T || t[112] !== E ? (H = E && (T ? (0, Q.jsx)(te, {
            label: T,
            className: `action-constraints-trigger self-center`,
            children: w
        }) : w), t[110] = w, t[111] = T, t[112] = E, t[113] = H) : H = t[113];
        let U;
        t[114] !== n || t[115] !== r || t[116] !== i || t[117] !== g ? (U = g && (0, Q.jsx)(`div`, {
            className: `col-start-2 col-end-4 min-w-0`,
            children: (0, Q.jsx)(Pe, {
                action: n,
                actionDelta: r,
                prevAction: i,
                initiallyCollapsed: !0
            })
        }), t[114] = n, t[115] = r, t[116] = i, t[117] = g, t[118] = U) : U = t[118];
        let W;
        t[119] !== ce || t[120] !== ue || t[121] !== N || t[122] !== V || t[123] !== H || t[124] !== U ? (W = (0, Q.jsxs)(`div`, {
            "data-testid": ce,
            onPointerUp: ue,
            className: N,
            children: [V, H, U]
        }), t[119] = ce, t[120] = ue, t[121] = N, t[122] = V, t[123] = H, t[124] = U, t[125] = W) : W = t[125];
        let G;
        t[126] !== de || t[127] !== W ? (G = (0, Q.jsx)(`div`, {
            className: de,
            children: W
        }), t[126] = de, t[127] = W, t[128] = G) : G = t[128];
        let K;
        return t[129] !== P || t[130] !== G ? (K = (0, Q.jsx)(`li`, {
            className: P,
            children: G
        }), t[129] = P, t[130] = G, t[131] = K) : K = t[131], K
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
                onRefreshActions: c,
                refreshingActions: ee,
                onSubmit: l,
                submitting: u,
                onCancel: d,
                refreshHidden: f,
                onOpenConstraints: p,
                constraintsDisabled: m,
                confirmDisabled: ne,
                showScrollDividers: re,
                onScrollabilityChange: _
            } = e,
            v = f !== void 0 && f,
            y = m !== void 0 && m,
            x = ne !== void 0 && ne,
            S = re !== void 0 && re,
            C = ie(),
            ae = (0, Z.useRef)(null),
            [w, T] = (0, Z.useState)(o),
            [E, D] = (0, Z.useState)(s),
            [O, k] = (0, Z.useState)(!1),
            [A, oe] = (0, Z.useState)(!1),
            se = (0, Z.useId)(),
            j = (0, Z.useId)(),
            M = (0, Z.useId)(),
            ce = (0, Z.useId)(),
            ue, N;
        t[0] === o ? (ue = t[1], N = t[2]) : (ue = () => {
            T(new Set(o))
        }, N = [o], t[0] = o, t[1] = ue, t[2] = N), (0, Z.useEffect)(ue, N);
        let de, P;
        t[3] === s ? (de = t[4], P = t[5]) : (de = () => {
            D(s)
        }, P = [s], t[3] = s, t[4] = de, t[5] = P), (0, Z.useEffect)(de, P);
        let I;
        t[6] === n ? I = t[7] : (I = st(n), t[6] = n, t[7] = I);
        let L = I,
            pe;
        if (t[8] !== r || t[9] !== a) {
            let e;
            t[11] === a ? e = t[12] : (e = (e, t) => (a.get(e.name) ?? Fe.Unmodified) - (a.get(t.name) ?? Fe.Unmodified) || e.name.localeCompare(t.name), t[11] = a, t[12] = e), pe = [...r].sort(e), t[8] = r, t[9] = a, t[10] = pe
        } else pe = t[10];
        let z = pe,
            me;
        t[13] === z ? me = t[14] : (me = z.filter(ze), t[13] = z, t[14] = me);
        let B = me,
            V;
        t[15] === z ? V = t[16] : (V = z.filter(Be), t[15] = z, t[16] = V);
        let H = V,
            U;
        t[17] === r ? U = t[18] : (U = r.map(Ve), t[17] = r, t[18] = U);
        let W = U,
            he;
        t[19] !== W || t[20] !== n.primaryConnector.id || t[21] !== w || t[22] !== o ? (he = Ae({
            connectorId: n.primaryConnector.id,
            adminConfigurableActionNames: W,
            initialEnabledActionNames: o,
            nextEnabledActionNames: w
        }), t[19] = W, t[20] = n.primaryConnector.id, t[21] = w, t[22] = o, t[23] = he) : he = t[23];
        let G = he,
            K;
        t[24] === B ? K = t[25] : (K = B.map(He), t[24] = B, t[25] = K);
        let q = K,
            ge;
        t[26] === H ? ge = t[27] : (ge = H.map(Ue), t[26] = H, t[27] = ge);
        let J = ge,
            _e;
        t[28] !== W || t[29] !== w ? (_e = W.length > 0 && W.every(e => w.has(e)), t[28] = W, t[29] = w, t[30] = _e) : _e = t[30];
        let ve = _e,
            ye;
        t[31] !== w || t[32] !== q ? (ye = q.length > 0 && q.every(e => w.has(e)), t[31] = w, t[32] = q, t[33] = ye) : ye = t[33];
        let Y = ye,
            be;
        t[34] !== w || t[35] !== J ? (be = J.length > 0 && J.every(e => w.has(e)), t[34] = w, t[35] = J, t[36] = be) : be = t[36];
        let Se = be,
            Ce;
        if (t[37] !== w || t[38] !== q) {
            let e;
            t[40] === w ? e = t[41] : (e = e => w.has(e), t[40] = w, t[41] = e), Ce = q.filter(e), t[37] = w, t[38] = q, t[39] = Ce
        } else Ce = t[39];
        let we = Ce.length,
            Ee;
        if (t[42] !== w || t[43] !== J) {
            let e;
            t[45] === w ? e = t[46] : (e = e => w.has(e), t[45] = w, t[46] = e), Ee = J.filter(e), t[42] = w, t[43] = J, t[44] = Ee
        } else Ee = t[44];
        let De = Ee.length,
            Oe;
        t[47] !== Y || t[48] !== w || t[49] !== q ? (Oe = !Y && q.some(e => w.has(e)), t[47] = Y, t[48] = w, t[49] = q, t[50] = Oe) : Oe = t[50];
        let ke = Oe,
            je;
        t[51] !== Se || t[52] !== w || t[53] !== J ? (je = !Se && J.some(e => w.has(e)), t[51] = Se, t[52] = w, t[53] = J, t[54] = je) : je = t[54];
        let Me = je,
            X = !!ee || u,
            Ne = We,
            Pe;
        t[55] !== W || t[56] !== ve || t[57] !== Y || t[58] !== w || t[59] !== q ? (Pe = (e, t) => {
            let n = new Set(w);
            for (let r of e) t ? n.add(r) : n.delete(r);
            let r = Ne(W, n),
                i = Ne(q, n);
            T(n), t && D(e => !ve && r ? `custom_new_all` : !Y && i && e !== `custom_new_all` ? `custom_new_read_only` : e)
        }, t[55] = W, t[56] = ve, t[57] = Y, t[58] = w, t[59] = q, t[60] = Pe) : Pe = t[60];
        let Ie = Pe,
            Le;
        t[61] !== q || t[62] !== Ie ? (Le = e => {
            Ie(q, e)
        }, t[61] = q, t[62] = Ie, t[63] = Le) : Le = t[63];
        let Re = Le,
            Ye;
        t[64] === _ ? Ye = t[65] : (Ye = () => {
            let e = ae.current;
            _?.(e ? e.scrollHeight > e.clientHeight + 1 : !1)
        }, t[64] = _, t[65] = Ye);
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
        t[71] !== r.length || t[72] !== y || t[73] !== O || t[74] !== ee || t[75] !== u || t[76] !== Xe || t[77] !== A ? (et = [r.length, y, O, ee, u, Xe, A], t[71] = r.length, t[72] = y, t[73] = O, t[74] = ee, t[75] = u, t[76] = Xe, t[77] = A, t[78] = et) : et = t[78], (0, Z.useEffect)($e, et);
        let tt;
        t[79] === Symbol.for(`react.memo_cache_sentinel`) ? (tt = [
            [`custom_new_all`, $.unconfiguredActionsToggleLabel],
            [`custom_new_read_only`, $.unconfiguredReadActionsToggleLabel],
            [`custom`, $.unconfiguredNoActionsToggleLabel]
        ], t[79] = tt) : tt = t[79];
        let nt = tt,
            rt;
        t[80] !== C || t[81] !== c || t[82] !== v || t[83] !== ee || t[84] !== u ? (rt = v ? null : (0, Q.jsx)(te, {
            label: c ? void 0 : C.formatMessage($.needLink),
            children: (0, Q.jsx)(g, {
                size: `small`,
                color: `secondary`,
                loading: ee,
                disabled: !c || u,
                onClick: () => c?.(),
                children: (0, Q.jsx)(b, {
                    ...$.refreshLabel
                })
            })
        }), t[80] = C, t[81] = c, t[82] = v, t[83] = ee, t[84] = u, t[85] = rt) : rt = t[85];
        let at = rt,
            ct;
        t[86] === n.primaryConnector.name ? ct = t[87] : (ct = (0, Q.jsx)(`p`, {
            className: `text-token-text-secondary flex-1 pb-0 text-sm leading-5`,
            children: (0, Q.jsx)(b, {
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
        t[91] === y ? dt = t[92] : (dt = y && (0, Q.jsx)(`div`, {
            className: `border-token-border-default bg-token-bg-tertiary text-token-text-secondary rounded-lg border px-3 py-2 text-xs`,
            children: (0, Q.jsx)(b, {
                ...$.constraintsDisabledBySync
            })
        }), t[91] = y, t[92] = dt);
        let ft;
        t[93] !== n.primaryConnector.name || t[94] !== G || t[95] !== Ie ? (ft = G.length > 0 && (0, Q.jsx)(Te, {
            appName: n.primaryConnector.name,
            onUndo: () => Ie([...G], !0)
        }), t[93] = n.primaryConnector.name, t[94] = G, t[95] = Ie, t[96] = ft) : ft = t[96];
        let pt;
        t[97] !== r.length || t[98] !== Y || t[99] !== Se || t[100] !== y || t[101] !== a || t[102] !== X || t[103] !== Re || t[104] !== w || t[105] !== we || t[106] !== De || t[107] !== C || t[108] !== L || t[109] !== p || t[110] !== i || t[111] !== B || t[112] !== O || t[113] !== ke || t[114] !== se || t[115] !== Ie || t[116] !== J || t[117] !== H || t[118] !== A || t[119] !== Me || t[120] !== j ? (pt = r.length === 0 ? (0, Q.jsx)(`p`, {
            className: `text-token-text-tertiary m-4 text-center text-xs italic`,
            children: (0, Q.jsx)(b, {
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
                                t instanceof HTMLElement && t.closest(`label, button, input`) || k(Ge)
                            },
                            className: h(`flex items-center justify-between gap-3 px-4 py-3 transition-colors`, X ? `cursor-not-allowed` : `hover:bg-token-bg-tertiary cursor-pointer`),
                            children: [(0, Q.jsxs)(`label`, {
                                htmlFor: `action-toggle-all-read-actions`,
                                className: h(`flex min-w-0 items-center gap-3`, X ? `cursor-not-allowed opacity-60` : `cursor-pointer`),
                                children: [(0, Q.jsx)(le, {
                                    id: `action-toggle-all-read-actions`,
                                    checked: Y,
                                    indeterminate: ke,
                                    onChange: e => Re(e.target.checked),
                                    disabled: X
                                }), (0, Q.jsxs)(`span`, {
                                    className: `inline-flex min-w-0 items-baseline gap-2 leading-6`,
                                    children: [(0, Q.jsx)(`span`, {
                                        className: `truncate`,
                                        children: (0, Q.jsx)(b, {
                                            ...$.readActionsSectionLabel
                                        })
                                    }), !Y && (0, Q.jsx)(`span`, {
                                        className: `text-token-text-tertiary inline-flex text-sm leading-none`,
                                        children: (0, Q.jsx)(b, {
                                            ...$.enabledActionsCountLabel,
                                            values: {
                                                enabledCount: we,
                                                totalCount: B.length
                                            }
                                        })
                                    })]
                                })]
                            }), (0, Q.jsx)(`button`, {
                                type: `button`,
                                className: `text-token-text-secondary hover:bg-token-bg-secondary hover:text-token-text-primary flex size-8 shrink-0 items-center justify-center rounded-md transition-colors disabled:opacity-50`,
                                "aria-label": C.formatMessage(O ? $.hideActionDetailsLabel : $.viewActionDetailsLabel),
                                "aria-expanded": O,
                                "aria-controls": se,
                                onClick: () => k(Ke),
                                disabled: X,
                                children: O ? (0, Q.jsx)(fe, {
                                    className: `h-4 w-4`,
                                    "aria-hidden": !0
                                }) : (0, Q.jsx)(R, {
                                    className: `h-4 w-4`,
                                    "aria-hidden": !0
                                })
                            })]
                        }), O && (0, Q.jsx)(`ul`, {
                            id: se,
                            className: `p-0`,
                            children: B.map(e => (0, Q.jsx)(lt, {
                                action: e,
                                actionDelta: a.get(e.name),
                                prevAction: i?.get(e.name)?.action,
                                isEnabled: w.has(e.name),
                                onToggle: (e, t) => Ie([e], t),
                                disabled: X,
                                onOpenConstraints: p,
                                constraintsDisabled: y,
                                showActionDetails: !1,
                                showActionTypeBadges: !1,
                                showRowBorder: !1,
                                indented: !0
                            }, e.name))
                        })]
                    }), H.length > 0 && (0, Q.jsxs)(`div`, {
                        className: h(B.length > 0 && `border-token-border-default border-t`),
                        children: [(0, Q.jsxs)(`div`, {
                            "data-testid": `action-set-row-write`,
                            onPointerUp: e => {
                                if (X) return;
                                let t = e.target;
                                t instanceof HTMLElement && t.closest(`label, button, input`) || oe(qe)
                            },
                            className: h(`flex items-center justify-between gap-3 px-4 py-3 transition-colors`, X ? `cursor-not-allowed` : `hover:bg-token-bg-tertiary cursor-pointer`),
                            children: [(0, Q.jsxs)(`label`, {
                                htmlFor: `action-toggle-all-write-actions`,
                                className: h(`flex min-w-0 items-center gap-3`, X ? `cursor-not-allowed opacity-60` : `cursor-pointer`),
                                children: [(0, Q.jsx)(le, {
                                    id: `action-toggle-all-write-actions`,
                                    checked: Se,
                                    indeterminate: Me,
                                    onChange: e => Ie(J, e.target.checked),
                                    disabled: X
                                }), (0, Q.jsxs)(`span`, {
                                    className: `inline-flex min-w-0 items-baseline gap-2 leading-6`,
                                    children: [(0, Q.jsx)(`span`, {
                                        className: `truncate`,
                                        children: (0, Q.jsx)(b, {
                                            ...$.writeActionsSectionLabel
                                        })
                                    }), !Se && (0, Q.jsx)(`span`, {
                                        className: `text-token-text-tertiary inline-flex text-sm leading-none`,
                                        children: (0, Q.jsx)(b, {
                                            ...$.enabledActionsCountLabel,
                                            values: {
                                                enabledCount: De,
                                                totalCount: H.length
                                            }
                                        })
                                    })]
                                })]
                            }), (0, Q.jsx)(`button`, {
                                type: `button`,
                                className: `text-token-text-secondary hover:bg-token-bg-secondary hover:text-token-text-primary flex size-8 shrink-0 items-center justify-center rounded-md transition-colors disabled:opacity-50`,
                                "aria-label": C.formatMessage(A ? $.hideActionDetailsLabel : $.viewActionDetailsLabel),
                                "aria-expanded": A,
                                "aria-controls": j,
                                onClick: () => oe(Je),
                                disabled: X,
                                children: A ? (0, Q.jsx)(fe, {
                                    className: `h-4 w-4`,
                                    "aria-hidden": !0
                                }) : (0, Q.jsx)(R, {
                                    className: `h-4 w-4`,
                                    "aria-hidden": !0
                                })
                            })]
                        }), A && (0, Q.jsx)(`ul`, {
                            id: j,
                            className: `p-0`,
                            children: H.map(e => (0, Q.jsx)(lt, {
                                action: e,
                                actionDelta: a.get(e.name),
                                prevAction: i?.get(e.name)?.action,
                                isEnabled: w.has(e.name),
                                onToggle: (e, t) => Ie([e], t),
                                disabled: X,
                                onOpenConstraints: p,
                                constraintsDisabled: y,
                                showActionDetails: !1,
                                showActionTypeBadges: !1,
                                showRowBorder: !1,
                                indented: !0
                            }, e.name))
                        })]
                    })]
                }), L && p && (0, Q.jsx)(`div`, {
                    className: `mt-2 space-y-2`,
                    children: (0, Q.jsxs)(`div`, {
                        className: `bg-token-bg-tertiary text-token-text-secondary flex items-center gap-3 rounded-lg px-4 py-3 text-sm leading-6`,
                        children: [(0, Q.jsx)(F, {
                            className: `h-4 w-4 shrink-0`
                        }), (0, Q.jsx)(`span`, {
                            children: (0, Q.jsx)(b, {
                                ...$.syncEnabledConstraintsNotice
                            })
                        })]
                    })
                })]
            })
        }), t[97] = r.length, t[98] = Y, t[99] = Se, t[100] = y, t[101] = a, t[102] = X, t[103] = Re, t[104] = w, t[105] = we, t[106] = De, t[107] = C, t[108] = L, t[109] = p, t[110] = i, t[111] = B, t[112] = O, t[113] = ke, t[114] = se, t[115] = Ie, t[116] = J, t[117] = H, t[118] = A, t[119] = Me, t[120] = j, t[121] = pt) : pt = t[121];
        let mt;
        t[122] !== ut || t[123] !== dt || t[124] !== ft || t[125] !== pt ? (mt = (0, Q.jsxs)(`div`, {
            ref: ae,
            className: `min-h-0 flex-1 space-y-3 overflow-y-auto px-6 pt-2 pb-3`,
            children: [ut, dt, ft, pt]
        }), t[122] = ut, t[123] = dt, t[124] = ft, t[125] = pt, t[126] = mt) : mt = t[126];
        let ht;
        t[127] !== r.length || t[128] !== n.primaryConnector.name || t[129] !== E || t[130] !== X || t[131] !== S || t[132] !== ce || t[133] !== M ? (ht = r.length > 0 && (0, Q.jsxs)(`div`, {
            className: h(`shrink-0 space-y-3 px-6 pt-1 pb-6`, S && `border-token-border-default border-t pt-4`),
            children: [(0, Q.jsx)(`div`, {
                id: M,
                className: `text-token-text-secondary text-sm leading-5`,
                children: (0, Q.jsx)(b, {
                    ...$.unconfiguredActionsDescription,
                    values: {
                        app: n.primaryConnector.name
                    }
                })
            }), (0, Q.jsx)(`div`, {
                role: `radiogroup`,
                "aria-labelledby": M,
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
        }), t[127] = r.length, t[128] = n.primaryConnector.name, t[129] = E, t[130] = X, t[131] = S, t[132] = ce, t[133] = M, t[134] = ht) : ht = t[134];
        let gt = S && r.length === 0 && `border-token-border-default border-t pt-4`,
            _t;
        t[135] === gt ? _t = t[136] : (_t = h(`flex shrink-0 justify-end gap-2 px-6 pt-0 pb-6`, gt), t[135] = gt, t[136] = _t);
        let vt;
        t[137] === Symbol.for(`react.memo_cache_sentinel`) ? (vt = (0, Q.jsx)(b, {
            id: `59bwQY`,
            defaultMessage: `Cancel`
        }), t[137] = vt) : vt = t[137];
        let yt;
        t[138] !== X || t[139] !== d ? (yt = (0, Q.jsx)(g, {
            color: `secondary`,
            onClick: d,
            disabled: X,
            children: vt
        }), t[138] = X, t[139] = d, t[140] = yt) : yt = t[140];
        let bt;
        t[141] !== W || t[142] !== E || t[143] !== w || t[144] !== l || t[145] !== q ? (bt = () => l({
            enabledActions: Array.from(w),
            actionPolicy: xe({
                actionIds: W,
                readOnlyActionIds: q,
                enabledActions: w,
                customNewActionPolicy: E
            })
        }), t[141] = W, t[142] = E, t[143] = w, t[144] = l, t[145] = q, t[146] = bt) : bt = t[146];
        let xt = X || x,
            St;
        t[147] === Symbol.for(`react.memo_cache_sentinel`) ? (St = (0, Q.jsx)(b, {
            ...$.confirmLabel
        }), t[147] = St) : St = t[147];
        let Ct;
        t[148] !== u || t[149] !== bt || t[150] !== xt ? (Ct = (0, Q.jsx)(g, {
            onClick: bt,
            loading: u,
            disabled: xt,
            children: St
        }), t[148] = u, t[149] = bt, t[150] = xt, t[151] = Ct) : Ct = t[151];
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
                initialEnabledActions: c,
                initialActionPolicy: ee,
                initialActionPolicyLoading: l,
                showOverlayBackground: d,
                submitting: p,
                showParameterConstraints: te
            } = e,
            m = ee === void 0 ? null : ee,
            h = l !== void 0 && l,
            g = d === void 0 || d,
            ne = p !== void 0 && p,
            re = te === void 0 || te,
            _ = ie(),
            y = v(),
            [x, S] = (0, Z.useState)(null),
            [C, w] = (0, Z.useState)(!1),
            T = (0, Z.useRef)(!1),
            E;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (E = {
            forceEnable: !0
        }, t[0] = E) : E = t[0];
        let {
            actions: D,
            isLoading: O,
            refetch: k
        } = oe(n.primaryConnector, N.ADMIN_SETTING, E), A;
        t[1] === D ? A = t[2] : (A = D.filter(be), t[1] = D, t[2] = A);
        let j = A,
            M;
        bb0: {
            if (c) {
                let e;
                t[3] === j ? e = t[4] : (e = new Set(j.map(Ye)), t[3] = j, t[4] = e);
                let n = e,
                    r;
                t[5] === c ? r = t[6] : (r = Array.from(c), t[5] = c, t[6] = r);
                let i;
                t[7] !== r || t[8] !== n ? (i = new Set(r.filter(e => n.has(e))), t[7] = r, t[8] = n, t[9] = i) : i = t[9], M = i;
                break bb0
            }
            let e;t[10] === j ? e = t[11] : (e = new Set(j.filter(Xe).map(Ze)), t[10] = j, t[11] = e),
            M = e
        }
        let le = M,
            [ue, P] = (0, Z.useState)(we),
            fe, F;
        t[12] !== O || t[13] !== m || t[14] !== h ? (F = () => {
            T.current || O || h || (P(Se(m)), T.current = !0)
        }, fe = [O, m, h], t[12] = O, t[13] = m, t[14] = h, t[15] = fe, t[16] = F) : (fe = t[15], F = t[16]), (0, Z.useEffect)(F, fe);
        let I;
        if (t[17] !== j) {
            I = new Map;
            for (let e of j) I.set(e.name, {
                action: e,
                hash: Me(e)
            });
            t[17] = j, t[18] = I
        } else I = t[18];
        let L = I,
            [R, pe] = (0, Z.useState)(null),
            z = Ne(L, R),
            me;
        t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (me = o()?.getWorkspaceId(), t[19] = me) : me = t[19];
        let B = me,
            H = se(),
            U = W(),
            he = (0, Z.useRef)(!1),
            G;
        t[20] !== n || t[21] !== re ? (G = ge({
            app: n,
            showParameterConstraints: re
        }), t[20] = n, t[21] = re, t[22] = G) : G = t[22];
        let K = G,
            q, J;
        t[23] !== O || t[24] !== n.primaryConnector.actions_changed_since_review || t[25] !== n.primaryConnector.id || t[26] !== U || t[27] !== H || t[28] !== j ? (q = () => {
            if (he.current || !B || !n.primaryConnector.actions_changed_since_review || O) return;
            he.current = !0;
            let e = j.filter(Qe).map($e);
            (async () => {
                await ce(n.primaryConnector.id, B, e), H(), U(n.primaryConnector.id)
            })()
        }, J = [O, n.primaryConnector.actions_changed_since_review, n.primaryConnector.id, U, H, j, B], t[23] = O, t[24] = n.primaryConnector.actions_changed_since_review, t[25] = n.primaryConnector.id, t[26] = U, t[27] = H, t[28] = j, t[29] = q, t[30] = J) : (q = t[29], J = t[30]), (0, Z.useEffect)(q, J);
        let _e;
        t[31] === Symbol.for(`react.memo_cache_sentinel`) ? (_e = u(), t[31] = _e) : _e = t[31];
        let ve = _e,
            ye;
        t[32] !== L || t[33] !== R || t[34] !== k ? (ye = async e => {
            R || pe(L), await de(e), await k()
        }, t[32] = L, t[33] = R, t[34] = k, t[35] = ye) : ye = t[35];
        let Y;
        t[36] !== n.primaryConnector.id || t[37] !== y ? (Y = () => {
            y.invalidateQueries({
                queryKey: [`connector-action-clamp`, n.primaryConnector.id]
            })
        }, t[36] = n.primaryConnector.id, t[37] = y, t[38] = Y) : Y = t[38];
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
            } = s(et),
            De = Ie(Ee, n.primaryConnector.id),
            Oe = V(n.primaryConnector),
            ke;
        t[43] === _ ? ke = t[44] : (ke = _.formatMessage($.actionsControlModalTitle), t[43] = _, t[44] = ke);
        let Ae;
        t[45] !== z || t[46] !== O || t[47] !== n || t[48] !== K || t[49] !== le || t[50] !== h || t[51] !== Oe || t[52] !== De || t[53] !== i || t[54] !== a || t[55] !== C || t[56] !== R || t[57] !== Te || t[58] !== ue || t[59] !== ne || t[60] !== j ? (Ae = O && !Te.isPending ? (0, Q.jsxs)(`div`, {
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
            actions: j,
            prevActions: R,
            deltas: z,
            initialEnabledActions: le,
            initialCustomNewActionPolicy: ue,
            onSubmit: a,
            onCancel: i,
            refreshingActions: Te.isPending,
            submitting: ne || h,
            confirmDisabled: j.length === 0,
            refreshHidden: !Oe,
            onRefreshActions: Oe && De !== void 0 ? () => {
                Te.mutate(De.id)
            } : void 0,
            onOpenConstraints: K ? e => S(e) : void 0,
            constraintsDisabled: !1,
            showScrollDividers: C,
            onScrollabilityChange: w
        }), t[45] = z, t[46] = O, t[47] = n, t[48] = K, t[49] = le, t[50] = h, t[51] = Oe, t[52] = De, t[53] = i, t[54] = a, t[55] = C, t[56] = R, t[57] = Te, t[58] = ue, t[59] = ne, t[60] = j, t[61] = Ae) : Ae = t[61];
        let je;
        t[62] !== r || t[63] !== C || t[64] !== g || t[65] !== ke || t[66] !== Ae ? (je = (0, Q.jsx)(f, {
            isOpen: !0,
            onClose: r,
            showOverlayBackground: g,
            testId: `modal-app-actions-control`,
            title: ke,
            size: `custom`,
            className: `max-w-5xl`,
            hasSeparator: C,
            noPadding: !0,
            isScrollable: !1,
            headerClassName: `!px-6 !pt-6 !pb-2`,
            contentClassName: `flex flex-col max-h-[80vh]`,
            children: Ae
        }), t[62] = r, t[63] = C, t[64] = g, t[65] = ke, t[66] = Ae, t[67] = je) : je = t[67];
        let X;
        t[68] !== n || t[69] !== K || t[70] !== x ? (X = K && x && (0, Q.jsx)(pt, {
            app: n,
            onClose: () => S(null),
            onBack: () => S(null),
            showOverlayBackground: !0,
            initialSelectedAction: x
        }), t[68] = n, t[69] = K, t[70] = x, t[71] = X) : X = t[71];
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
            i = ie(),
            a;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (a = o()?.getWorkspaceId(), t[0] = a) : a = t[0];
        let c = a,
            l;
        t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (l = u(), t[1] = l) : l = t[1];
        let d = l,
            f = v(),
            p = se(),
            te = W(),
            m = z(),
            h = s(tt),
            g = s(nt),
            ne = !!c,
            re;
        t[2] !== n.primaryConnector.id || t[3] !== h ? (re = () => {
            K(h, c ?? ``, n.primaryConnector.id, ne)
        }, t[2] = n.primaryConnector.id, t[3] = h, t[4] = re) : re = t[4];
        let _;
        t[5] !== n.primaryConnector.id || t[6] !== g || t[7] !== h ? (_ = [h, g, c, n.primaryConnector.id, ne], t[5] = n.primaryConnector.id, t[6] = g, t[7] = h, t[8] = _) : _ = t[8], (0, Z.useEffect)(re, _);
        let b;
        t[9] !== n.primaryConnector.id || t[10] !== g || t[11] !== h ? (b = ye({
            queryKeyPrefix: `connector-workspace-permissions`,
            workspaceId: c,
            connectorId: n.primaryConnector.id,
            enabled: ne,
            transport: h,
            actorId: g
        }), t[9] = n.primaryConnector.id, t[10] = g, t[11] = h, t[12] = b) : b = t[12];
        let {
            data: x,
            isLoading: S
        } = y(b), C;
        t[13] !== n.primaryConnector.id || t[14] !== te || t[15] !== m || t[16] !== p || t[17] !== f ? (C = async e => {
            let {
                enabledActions: t,
                actionPolicy: r
            } = e;
            if (!c) throw Error(`Workspace ID is required to update app actions.`);
            let i = {
                enabled: !0,
                enabled_actions: t
            };
            r && (i.action_policy = r), await ee.safePost(`/accounts/{account_id}/connectors/{connector_id}/workspace_permissions`, {
                parameters: {
                    path: {
                        account_id: c,
                        connector_id: n.primaryConnector.id
                    }
                },
                requestBody: i
            }), p(), te(n.primaryConnector.id), await f.invalidateQueries({
                queryKey: [`connector-actions`, n.primaryConnector.id]
            }), await f.invalidateQueries({
                queryKey: [`connector-workspace-permissions`, c, n.primaryConnector.id]
            }), await m()
        }, t[13] = n.primaryConnector.id, t[14] = te, t[15] = m, t[16] = p, t[17] = f, t[18] = C) : C = t[18];
        let w;
        t[19] !== i || t[20] !== r ? (w = () => {
            d.success(i.formatMessage({
                id: `AW+VoO`,
                defaultMessage: `App tools updated successfully.`
            })), r()
        }, t[19] = i, t[20] = r, t[21] = w) : w = t[21];
        let T;
        t[22] === i ? T = t[23] : (T = () => {
            d.danger(i.formatMessage({
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
        } = ae(E), k;
        t[28] !== r || t[29] !== O ? (k = () => {
            O || r()
        }, t[28] = r, t[29] = O, t[30] = k) : k = t[30];
        let A = k,
            oe = x?.action_policy,
            j = x?.enabled_actions,
            M;
        t[31] !== oe || t[32] !== j ? (M = Y({
            actionPolicy: oe,
            enabledActions: j
        }), t[31] = oe, t[32] = j, t[33] = M) : M = t[33];
        let ce = !!c && S,
            le;
        return t[34] !== n || t[35] !== A || t[36] !== D || t[37] !== O || t[38] !== M || t[39] !== ce ? (le = (0, Q.jsx)(dt, {
            app: n,
            onClose: A,
            onCancel: A,
            onConfirm: D,
            submitting: O,
            initialActionPolicy: M,
            initialActionPolicyLoading: ce
        }), t[34] = n, t[35] = A, t[36] = D, t[37] = O, t[38] = M, t[39] = ce, t[40] = le) : le = t[40], le
    }, pt = e => {
        "use forget";
        let t = (0, it.c)(3),
            n = s(rt),
            r;
        return t[0] !== e || t[1] !== n ? (r = (0, Q.jsx)(Oe, {
            ...e,
            workspaceId: n
        }), t[0] = e, t[1] = n, t[2] = r) : r = t[2], r
    }, $ = x({
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
//# sourceMappingURL=46874983-f2aembnt21bmjctu.js.map