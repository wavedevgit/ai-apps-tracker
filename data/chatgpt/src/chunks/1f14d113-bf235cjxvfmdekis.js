import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Xy as n,
    Yy as ee,
    Zy as r,
    qy as i
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as a,
    Ln as o,
    Rn as s,
    Vn as c,
    wn as l,
    zn as te
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    f_ as u,
    p_ as d
} from "./8b34dbc2-k1zgxrtsww83602u.js";
import {
    i as f,
    n as p,
    r as ne,
    t as re
} from "./74bc827c-gg1ge2qvfknhn33r.js";
import {
    a as m,
    l as h,
    r as ie,
    u as ae
} from "./a99a60c9-mu5w9cyl67em19hh.js";

function g(e) {
    "use forget";
    let t = (0, se.c)(97),
        {
            ariaLabel: r,
            role: a,
            defaultRole: o,
            permissionName: s,
            parentPermissionName: c,
            dependencyDisabledMessage: l,
            additionalPermissionNames: d,
            permissionNamesToAddWhenEnabled: f,
            permissionNamesToRemoveWhenDisabled: m,
            onChange: h,
            enableConfirmation: g,
            disabled: le,
            disabledReason: y,
            renderDisabledAsOff: ue,
            highlightEnabledStates: de,
            preventDisabling: fe,
            preventDisablingReason: b,
            renderTrigger: pe
        } = e,
        x = d === void 0 ? [] : d,
        S;
    t[0] === f ? S = t[1] : (S = f === void 0 ? [] : f, t[0] = f, t[1] = S);
    let C = S,
        w;
    t[2] === m ? w = t[3] : (w = m === void 0 ? [] : m, t[2] = m, t[3] = w);
    let T = w,
        E = le !== void 0 && le,
        me = ue !== void 0 && ue,
        he = de !== void 0 && de,
        D = fe !== void 0 && fe,
        O = te(),
        [k, A] = (0, ce.useState)(null),
        ge = p({
            role: a,
            permissionName: s,
            additionalPermissionNames: x
        }),
        j = E && me ? `off` : ge,
        M, N;
    t[4] !== o || t[5] !== c || t[6] !== a ? (M = re({
        role: a,
        defaultRole: o
    }), N = c == null || M.includes(c), t[4] = o, t[5] = c, t[6] = a, t[7] = M, t[8] = N) : (M = t[7], N = t[8]);
    let P = N,
        F;
    t[9] !== P || t[10] !== l || t[11] !== O ? (F = !P && l != null ? O.formatMessage(l) : void 0, t[9] = P, t[10] = l, t[11] = O, t[12] = F) : F = t[12];
    let I = F,
        L = [s, ...x].every(e => o.permissions.includes(e)),
        R, z, B, V, H, U, W, G, K, q, J;
    if (t[13] !== x || t[14] !== r || t[15] !== P || t[16] !== o || t[17] !== I || t[18] !== E || t[19] !== M || t[20] !== g || t[21] !== he || t[22] !== O || t[23] !== L || t[24] !== h || t[25] !== s || t[26] !== C || t[27] !== T || t[28] !== D || t[29] !== b || t[30] !== pe || t[31] !== a || t[32] !== A || t[33] !== j) {
        let e = O.formatMessage(ae.on),
            i = O.formatMessage(ae.off),
            c = O.formatMessage(v.defaultOn),
            l = O.formatMessage(v.defaultOff);
        H = {
            on: e,
            off: i,
            default: L ? c : l
        };
        let te = [e, i, c, l],
            d = he && (j === `on` || j === "default" && L),
            f;
        t[45] !== L || t[46] !== D ? (f = e => D && (e === `off` || e === "default" && !L), t[45] = L, t[46] = D, t[47] = f) : f = t[47];
        let p = f;
        V = u.Root, G = j, K = E, t[48] !== x || t[49] !== P || t[50] !== o || t[51] !== M || t[52] !== g || t[53] !== h || t[54] !== s || t[55] !== C || t[56] !== T || t[57] !== a || t[58] !== A || t[59] !== p ? (q = e => {
            if (e !== `on` && e !== `off` && e !== "default" || p(e) || e === `on` && !P) return;
            let t = {
                    ...a,
                    ...ne({
                        role: a,
                        state: e,
                        permissionName: s,
                        additionalPermissionNames: e === `on` ? [...x, ...C] : x,
                        permissionNamesToRemoveWhenDisabled: T,
                        defaultRole: o
                    })
                },
                n = [s, ...x],
                ee = n.every(e => M.includes(e)),
                r = re({
                    role: t,
                    defaultRole: o
                }),
                i = n.every(e => r.includes(e));
            if (g != null && !ee && i) {
                A(t);
                return
            }
            h(t)
        }, t[48] = x, t[49] = P, t[50] = o, t[51] = M, t[52] = g, t[53] = h, t[54] = s, t[55] = C, t[56] = T, t[57] = a, t[58] = A, t[59] = p, t[60] = q) : q = t[60], J = pe?.({
            enabled: j === `on` || j === "default" && L,
            inherited: j === "default"
        }) ?? (0, _.jsx)(n, {
            label: H[j],
            className: `inline-flex w-max max-w-[240px] min-w-[140px]`,
            disabled: E,
            children: (0, _.jsxs)(u.Trigger, {
                "aria-label": r,
                className: `w-max max-w-[240px] min-w-[140px] justify-between rounded-lg border ${d?`border-token-theme-blue-default bg-token-theme-blue-background text-token-theme-blue-text-on-background hover:bg-token-theme-blue-default/15 transition-colors`:`border-token-border-default`}`,
                children: [(0, _.jsxs)(`span`, {
                    className: `grid min-w-0 overflow-hidden [&>*]:col-start-1 [&>*]:row-start-1`,
                    children: [(0, _.jsx)(`span`, {
                        className: `min-w-0 truncate text-start`,
                        children: (0, _.jsx)(u.Value, {
                            children: H[j]
                        })
                    }), te.map(oe)]
                }), (0, _.jsx)(`span`, {
                    className: `shrink-0`,
                    children: (0, _.jsx)(u.Icon, {})
                })]
            })
        }), B = u.Portal, z = u.Content, W = `w-[var(--radix-select-trigger-width)] min-w-[var(--radix-select-trigger-width)]!`, R = ee, U = [`default`, `on`, `off`].map(e => (0, _.jsx)(n, {
            triggerAs: null,
            label: b ? O.formatMessage(b) : void 0,
            disabled: !b || !p(e),
            children: (0, _.jsx)(u.Item, {
                value: e,
                disabled: e === `on` && !P || p(e),
                secondary: e === "default" ? O.formatMessage(v.currentDefault, {
                    value: H[L ? `on` : `off`]
                }) : e === `on` ? I : void 0,
                children: e === "default" ? O.formatMessage(v.defaultOption) : H[e]
            })
        }, e)), t[13] = x, t[14] = r, t[15] = P, t[16] = o, t[17] = I, t[18] = E, t[19] = M, t[20] = g, t[21] = he, t[22] = O, t[23] = L, t[24] = h, t[25] = s, t[26] = C, t[27] = T, t[28] = D, t[29] = b, t[30] = pe, t[31] = a, t[32] = A, t[33] = j, t[34] = R, t[35] = z, t[36] = B, t[37] = V, t[38] = H, t[39] = U, t[40] = W, t[41] = G, t[42] = K, t[43] = q, t[44] = J
    } else R = t[34], z = t[35], B = t[36], V = t[37], H = t[38], U = t[39], W = t[40], G = t[41], K = t[42], q = t[43], J = t[44];
    let Y;
    t[61] !== R || t[62] !== U ? (Y = (0, _.jsx)(R, {
        children: U
    }), t[61] = R, t[62] = U, t[63] = Y) : Y = t[63];
    let X;
    t[64] !== z || t[65] !== W || t[66] !== Y ? (X = (0, _.jsx)(z, {
        className: W,
        children: Y
    }), t[64] = z, t[65] = W, t[66] = Y, t[67] = X) : X = t[67];
    let Z;
    t[68] !== B || t[69] !== X ? (Z = (0, _.jsx)(B, {
        children: X
    }), t[68] = B, t[69] = X, t[70] = Z) : Z = t[70];
    let _e;
    t[71] !== V || t[72] !== G || t[73] !== K || t[74] !== q || t[75] !== J || t[76] !== Z ? (_e = (0, _.jsx)(i, {
        children: (0, _.jsxs)(V, {
            value: G,
            disabled: K,
            onValueChange: q,
            children: [J, Z]
        })
    }), t[71] = V, t[72] = G, t[73] = K, t[74] = q, t[75] = J, t[76] = Z, t[77] = _e) : _e = t[77];
    let ve = _e,
        ye;
    t[78] !== E || t[79] !== y || t[80] !== O || t[81] !== H || t[82] !== ve || t[83] !== j ? (ye = E && y ? (0, _.jsx)(n, {
        label: O.formatMessage(y),
        secondaryLabel: H[j],
        children: (0, _.jsx)(`div`, {
            className: `flex min-w-0`,
            children: ve
        })
    }) : ve, t[78] = E, t[79] = y, t[80] = O, t[81] = H, t[82] = ve, t[83] = j, t[84] = ye) : ye = t[84];
    let be = ye,
        Q;
    t[85] === I ? Q = t[86] : (Q = I != null && (0, _.jsx)(`div`, {
        className: `text-token-text-tertiary max-w-[240px] text-end text-xs`,
        children: I
    }), t[85] = I, t[86] = Q);
    let $;
    t[87] !== r || t[88] !== g || t[89] !== h || t[90] !== k || t[91] !== A ? ($ = k != null && g != null && (0, _.jsx)(ie, {
        title: r,
        confirmation: g,
        onConfirm: () => {
            h(k), A(null)
        },
        onClose: () => A(null)
    }), t[87] = r, t[88] = g, t[89] = h, t[90] = k, t[91] = A, t[92] = $) : $ = t[92];
    let xe;
    return t[93] !== be || t[94] !== Q || t[95] !== $ ? (xe = (0, _.jsxs)(`div`, {
        className: `flex flex-col items-end gap-1`,
        children: [be, Q, $]
    }), t[93] = be, t[94] = Q, t[95] = $, t[96] = xe) : xe = t[96], xe
}

function oe(e, t) {
    return (0, _.jsx)(`span`, {
        "aria-hidden": !0,
        className: `invisible min-w-0 whitespace-nowrap`,
        children: e
    }, t)
}
var se, ce, _, v, le = e((() => {
    se = l(), h(), m(), f(), d(), r(), ce = t(c()), s(), _ = a(), v = o({
        defaultOn: {
            id: `workspaceSettings.roles.permissionOverride.defaultOn`,
            defaultMessage: `On (Default)`
        },
        defaultOff: {
            id: `workspaceSettings.roles.permissionOverride.defaultOff`,
            defaultMessage: `Off (Default)`
        },
        defaultOption: {
            id: `workspaceSettings.roles.permissionOverride.default`,
            defaultMessage: `Default`
        },
        currentDefault: {
            id: `workspaceSettings.roles.permissionOverride.currentDefault`,
            defaultMessage: `Current: {value}`
        }
    })
}));
export {
    le as n, g as t
};
//# sourceMappingURL=1f14d113-bf235cjxvfmdekis.js.map