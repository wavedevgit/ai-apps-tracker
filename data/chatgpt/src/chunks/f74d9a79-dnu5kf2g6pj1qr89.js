import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as t,
    c7 as n,
    eE as r,
    l7 as i
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Bn as a,
    wn as o
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    vUn as s,
    yUn as c
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    DC as l,
    EC as u
} from "./30901919-lgbmg5s09xld40kt.js";
var d, f, p, m = e((() => {
    d = o(), f = a(), p = e => {
        "use forget";
        let t = (0, d.c)(9),
            {
                linkName: n,
                profileEmail: r
            } = e,
            i;
        t[0] === r ? i = t[1] : (i = r?.trim(), t[0] = r, t[1] = i);
        let a = i,
            o;
        t[2] === n ? o = t[3] : (o = n?.trim(), t[2] = n, t[3] = o);
        let s = o,
            c = s === a ? void 0 : s,
            l;
        t[4] !== a || t[5] !== c ? (l = [a, c].filter(Boolean), t[4] = a, t[5] = c, t[6] = l) : l = t[6];
        let u = l.join(` · `);
        if (!u) return null;
        let p;
        return t[7] === u ? p = t[8] : (p = (0, f.jsx)(`span`, {
            className: `text-token-text-secondary block text-base [overflow-wrap:anywhere] break-words`,
            children: u
        }), t[7] = u, t[8] = p), p
    }
}));

function h(e) {
    return e.label
}
var g, _, v, y = e((() => {
    g = o(), r(), c(), l(), i(), _ = a(), v = e => {
        "use forget";
        let r = (0, g.c)(37),
            {
                children: i,
                className: a,
                color: o,
                defaultOpen: c,
                disabled: l,
                onPrimaryAction: d,
                onSelectOption: f,
                size: p,
                splitActionOptions: m
            } = e,
            v;
        r[0] === a ? v = r[1] : (v = n(`inline-flex min-w-0`, a), r[0] = a, r[1] = v);
        let y;
        r[2] === i ? y = r[3] : (y = (0, _.jsx)(`span`, {
            className: `min-w-0 truncate`,
            children: i
        }), r[2] = i, r[3] = y);
        let b;
        r[4] !== o || r[5] !== l || r[6] !== d || r[7] !== p || r[8] !== y ? (b = (0, _.jsx)(t, {
            className: `min-w-0 flex-1 rounded-e-none border-e-0 transition-colors`,
            color: o,
            contentsFullWidth: !0,
            contentWrapperClassName: `min-w-0`,
            disabled: l,
            onClick: d,
            size: p,
            type: `button`,
            children: y
        }), r[4] = o, r[5] = l, r[6] = d, r[7] = p, r[8] = y, r[9] = b) : b = r[9];
        let x = o === `primary` && `data-[state=open]:bg-token-interactive-bg-primary-hover`,
            S = o === `secondary` && `data-[state=open]:bg-token-interactive-bg-secondary-hover`,
            C;
        r[10] !== x || r[11] !== S ? (C = n(`rounded-s-none border-s-0 px-2 transition-colors`, x, S), r[10] = x, r[11] = S, r[12] = C) : C = r[12];
        let w;
        r[13] === m ? w = r[14] : (w = m.map(h).join(`, `), r[13] = m, r[14] = w);
        let T;
        r[15] === Symbol.for(`react.memo_cache_sentinel`) ? (T = (0, _.jsx)(u, {
            className: `icon-sm`
        }), r[15] = T) : T = r[15];
        let E;
        r[16] !== o || r[17] !== l || r[18] !== p || r[19] !== C || r[20] !== w ? (E = (0, _.jsx)(s.BasicTrigger, {
            asChild: !0,
            children: (0, _.jsx)(t, {
                className: C,
                color: o,
                disabled: l,
                label: w,
                size: p,
                type: `button`,
                children: T
            })
        }), r[16] = o, r[17] = l, r[18] = p, r[19] = C, r[20] = w, r[21] = E) : E = r[21];
        let D;
        r[22] !== v || r[23] !== b || r[24] !== E ? (D = (0, _.jsxs)(`div`, {
            className: v,
            children: [b, E]
        }), r[22] = v, r[23] = b, r[24] = E, r[25] = D) : D = r[25];
        let O;
        if (r[26] !== f || r[27] !== m) {
            let e;
            r[29] === f ? e = r[30] : (e = e => (0, _.jsx)(s.Item, {
                className: `pe-2.5!`,
                label: e.label,
                onClick: t => f(t, e.action)
            }, e.label), r[29] = f, r[30] = e), O = m.map(e), r[26] = f, r[27] = m, r[28] = O
        } else O = r[28];
        let k;
        r[31] === O ? k = r[32] : (k = (0, _.jsx)(s.Portal, {
            children: (0, _.jsx)(s.Content, {
                align: `end`,
                className: `w-max max-w-[calc(100vw-24px)]!`,
                sideOffset: 8,
                size: `auto`,
                children: O
            })
        }), r[31] = O, r[32] = k);
        let A;
        return r[33] !== c || r[34] !== D || r[35] !== k ? (A = (0, _.jsxs)(s.Root, {
            defaultOpen: c,
            children: [D, k]
        }), r[33] = c, r[34] = D, r[35] = k, r[36] = A) : A = r[36], A
    }
}));
export {
    m as i, y as n, p as r, v as t
};
//# sourceMappingURL=f74d9a79-dnu5kf2g6pj1qr89.js.map