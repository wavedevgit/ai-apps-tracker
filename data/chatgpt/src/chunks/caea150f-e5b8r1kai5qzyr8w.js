import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J5 as n,
    M5 as r,
    m8 as i,
    q5 as a
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Bn as o,
    Hn as s,
    Pn as c,
    Rn as l,
    Tn as u,
    Vn as d,
    zn as f
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    d as p,
    t as m
} from "./707eab0c-hquix1of0ixypvkq.js";
import {
    a as h,
    f as g,
    t as _
} from "./5579e947-c081u3twwehc9d6f.js";
import {
    n as v,
    t as y
} from "./69b51517-hte8bok5aa50ewoy.js";

function b() {
    return h()
}

function x(e) {
    e || _.closeBuilderDialog()
}
var S, C, w, T, E, D = e((() => {
        S = u(), i(), y(), g(), C = d(), w = () => {
            "use forget";
            let e = (0, S.c)(6),
                t = r(b),
                n = t != null,
                i = t?.maxWidth ?? 280,
                a = t?.content ?? null,
                o;
            e[0] !== i || e[1] !== a ? (o = (0, C.jsx)(v.Content, {
                maxWidth: i,
                children: a
            }), e[0] = i, e[1] = a, e[2] = o) : o = e[2];
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
        O = u(), D(), m(), n(), k = t(s()), f(), A = d(), j = e => {
            "use forget";
            let t = (0, O.c)(37),
                {
                    icon: n,
                    title: r,
                    description: i,
                    body: s,
                    deleteErrorFallback: l,
                    onCancel: u,
                    onDelete: d,
                    titleClassName: f,
                    actionLabel: m
                } = e,
                h = o(),
                [g, _] = (0, k.useState)(!1),
                [y, b] = (0, k.useState)(``),
                x;
            t[0] !== l || t[1] !== h || t[2] !== d ? (x = async () => {
                b(null), _(!0);
                try {
                    await d()
                } catch (e) {
                    let t = e;
                    b(t instanceof Error && t.message ? t.message : l ?? h.formatMessage(M.removeDialogErrorFallback)), _(!1)
                }
            }, t[0] = l, t[1] = h, t[2] = d, t[3] = x) : x = t[3];
            let S = x,
                C;
            t[4] === n ? C = t[5] : (C = (0, A.jsx)(`div`, {
                className: `mb-3`,
                children: n
            }), t[4] = n, t[5] = C);
            let w;
            t[6] === f ? w = t[7] : (w = a(`mb-4 font-medium`, f), t[6] = f, t[7] = w);
            let T;
            t[8] !== w || t[9] !== r ? (T = (0, A.jsx)(v.Title, {
                className: w,
                children: r
            }), t[8] = w, t[9] = r, t[10] = T) : T = t[10];
            let E;
            t[11] === i ? E = t[12] : (E = (0, A.jsx)(v.Description, {
                visuallyHidden: !0,
                children: i
            }), t[11] = i, t[12] = E);
            let D;
            t[13] === s ? D = t[14] : (D = s != null && (0, A.jsx)(`div`, {
                className: `text-secondary mb-4 text-sm leading-5`,
                children: s
            }), t[13] = s, t[14] = D);
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
            t[18] !== g || t[19] !== u ? (P = (0, A.jsx)(p, {
                className: `flex-1`,
                color: `primary`,
                variant: `outline`,
                type: `button`,
                size: `lg`,
                onClick: u,
                disabled: g,
                pill: !0,
                children: N
            }), t[18] = g, t[19] = u, t[20] = P) : P = t[20];
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
        }, M = l({
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
//# sourceMappingURL=caea150f-e5b8r1kai5qzyr8w.js.map