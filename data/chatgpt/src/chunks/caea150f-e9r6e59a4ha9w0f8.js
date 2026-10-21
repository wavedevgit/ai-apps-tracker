import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    c7 as n,
    k8 as r,
    l7 as i,
    q5 as a
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    Bn as o,
    Ln as s,
    Nn as c,
    Rn as l,
    Vn as u,
    wn as d,
    zn as f
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    d as p,
    t as m
} from "./707eab0c-hnzftmd8o2cha32b.js";
import {
    a as h,
    f as g,
    t as _
} from "./5579e947-ntkbfdfvuoijggym.js";
import {
    n as v,
    t as y
} from "./69b51517-m7m4es9p1o6ieh94.js";

function b() {
    return h()
}

function x(e) {
    e || _.closeBuilderDialog()
}
var S, C, w, T, E, D = e((() => {
        S = d(), r(), y(), g(), C = o(), w = () => {
            "use forget";
            let e = (0, S.c)(6),
                t = a(b),
                n = t != null,
                r = t?.maxWidth ?? 280,
                i = t?.content ?? null,
                o;
            e[0] !== r || e[1] !== i ? (o = (0, C.jsx)(v.Content, {
                maxWidth: r,
                children: i
            }), e[0] = r, e[1] = i, e[2] = o) : o = e[2];
            let s;
            return e[3] !== n || e[4] !== o ? (s = (0, C.jsx)(v, {
                open: n,
                onOpenChange: x,
                children: o
            }), e[3] = n, e[4] = o, e[5] = s) : s = e[5], s
        }, T = (e, {
            maxWidth: t
        } = {}) => {
            _.openBuilderDialog({
                content: e,
                maxWidth: t
            })
        }, E = () => {
            _.closeBuilderDialog()
        }
    })),
    O, k, A, j, M, N = e((() => {
        O = d(), D(), m(), i(), k = t(u()), l(), A = o(), j = e => {
            "use forget";
            let t = (0, O.c)(37),
                {
                    icon: r,
                    title: i,
                    description: a,
                    body: o,
                    deleteErrorFallback: s,
                    onCancel: l,
                    onDelete: u,
                    titleClassName: d,
                    actionLabel: m
                } = e,
                h = f(),
                [g, _] = (0, k.useState)(!1),
                [y, b] = (0, k.useState)(``),
                x;
            t[0] !== s || t[1] !== h || t[2] !== u ? (x = async () => {
                b(null), _(!0);
                try {
                    await u()
                } catch (e) {
                    let t = e;
                    b(t instanceof Error && t.message ? t.message : s ?? h.formatMessage(M.removeDialogErrorFallback)), _(!1)
                }
            }, t[0] = s, t[1] = h, t[2] = u, t[3] = x) : x = t[3];
            let S = x,
                C;
            t[4] === r ? C = t[5] : (C = (0, A.jsx)(`div`, {
                className: `mb-3`,
                children: r
            }), t[4] = r, t[5] = C);
            let w;
            t[6] === d ? w = t[7] : (w = n(`mb-4 font-medium`, d), t[6] = d, t[7] = w);
            let T;
            t[8] !== w || t[9] !== i ? (T = (0, A.jsx)(v.Title, {
                className: w,
                children: i
            }), t[8] = w, t[9] = i, t[10] = T) : T = t[10];
            let E;
            t[11] === a ? E = t[12] : (E = (0, A.jsx)(v.Description, {
                visuallyHidden: !0,
                children: a
            }), t[11] = a, t[12] = E);
            let D;
            t[13] === o ? D = t[14] : (D = o != null && (0, A.jsx)(`div`, {
                className: `text-secondary mb-4 text-sm leading-5`,
                children: o
            }), t[13] = o, t[14] = D);
            let j;
            t[15] === y ? j = t[16] : (j = y && (0, A.jsx)(`div`, {
                className: `text-danger mb-4 text-sm`,
                role: `alert`,
                children: y
            }), t[15] = y, t[16] = j);
            let N;
            t[17] === Symbol.for(`react.memo_cache_sentinel`) ? (N = (0, A.jsx)(c, {
                ...M.removeAppDialogCancel
            }), t[17] = N) : N = t[17];
            let P;
            t[18] !== g || t[19] !== l ? (P = (0, A.jsx)(p, {
                className: `flex-1`,
                color: `primary`,
                variant: `outline`,
                type: `button`,
                size: `lg`,
                onClick: l,
                disabled: g,
                pill: !0,
                children: N
            }), t[18] = g, t[19] = l, t[20] = P) : P = t[20];
            let F;
            t[21] === m ? F = t[22] : (F = m ?? (0, A.jsx)(c, {
                ...M.removeAppDialogDelete
            }), t[21] = m, t[22] = F);
            let I;
            t[23] !== S || t[24] !== g || t[25] !== F ? (I = (0, A.jsx)(p, {
                className: `flex-1`,
                color: `danger`,
                type: `button`,
                size: `lg`,
                onClick: S,
                loading: g,
                disabled: g,
                pill: !0,
                children: F
            }), t[23] = S, t[24] = g, t[25] = F, t[26] = I) : I = t[26];
            let L;
            t[27] !== I || t[28] !== P ? (L = (0, A.jsxs)(`div`, {
                className: `flex gap-2.5`,
                children: [P, I]
            }), t[27] = I, t[28] = P, t[29] = L) : L = t[29];
            let R;
            return t[30] !== L || t[31] !== C || t[32] !== T || t[33] !== E || t[34] !== D || t[35] !== j ? (R = (0, A.jsxs)(`div`, {
                className: `p-5`,
                children: [C, T, E, D, j, L]
            }), t[30] = L, t[31] = C, t[32] = T, t[33] = E, t[34] = D, t[35] = j, t[36] = R) : R = t[36], R
        }, M = s({
            removeDialogErrorFallback: {
                id: `Hermes.GptStudio.Builder.RemoveDialog.removeDialogErrorFallback`,
                defaultMessage: `We couldn't remove this item. Try again.`
            },
            removeAppDialogCancel: {
                id: `Hermes.GptStudio.Builder.RemoveDialog.removeAppDialogCancel`,
                defaultMessage: `Cancel`
            },
            removeAppDialogDelete: {
                id: `Hermes.GptStudio.Builder.RemoveDialog.removeAppDialogDelete`,
                defaultMessage: `Remove`
            }
        })
    }));
export {
    D as a, E as i, N as n, T as o, w as r, j as t
};
//# sourceMappingURL=caea150f-e9r6e59a4ha9w0f8.js.map