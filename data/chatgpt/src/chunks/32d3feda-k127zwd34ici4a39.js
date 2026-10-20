import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    X5 as r,
    Y5 as i
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Bn as a,
    Vn as o,
    wn as s
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    n as c,
    t as l
} from "./2686af9f-iev00l19as4g67mr.js";
import {
    n as u,
    t as ee
} from "./7b12be43-lyz40ete55kxilur.js";
import {
    n as d,
    t as f
} from "./0cb8459d-hnhuy7o3ezf6q9jk.js";
import {
    n as p,
    r as m
} from "./bb47c0a1-f3mze99y6p98ycp7.js";
import {
    n as h,
    t as g
} from "./17789dc6-bqu9kg52lsojrbab.js";
import {
    n as _,
    t as te
} from "./7508386a-e2wiqsw6ap2sy5eh.js";
var v = t({
    default: () => S
});

function ne(e) {
    return e.content
}
var y, b, x, S, C = e((() => {
    y = s(), p(), h(), c(), r(), b = n(o()), u(), f(), _(), x = a(), S = e => {
        "use forget";
        let t = (0, y.c)(56),
            {
                tabs: n,
                fullWidth: r,
                activeColor: a,
                alignment: o,
                contentfulDebugAttributes: s,
                onTabChange: c,
                tabListClassName: u,
                tabClassName: f,
                tabListPosition: p,
                renderTabContent: h
            } = e,
            _ = r !== void 0 && r,
            v = o === void 0 ? `center` : o,
            S = p === void 0 ? `before` : p,
            {
                slug: C,
                effectiveLocale: w
            } = m(),
            [T, E] = (0, b.useState)(0),
            D;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (D = [], t[0] = D) : D = t[0];
        let O = (0, b.useRef)(D),
            k = n[T]?.id,
            A;
        t[1] !== T || t[2] !== c || t[3] !== n ? (A = () => {
            let e = n[T];
            e && c?.(e)
        }, t[1] = T, t[2] = c, t[3] = n, t[4] = A) : A = t[4];
        let j = (0, b.useEffectEvent)(A),
            M;
        t[5] === j ? M = t[6] : (M = () => {
            j()
        }, t[5] = j, t[6] = M);
        let N;
        t[7] === k ? N = t[8] : (N = [k], t[7] = k, t[8] = N), (0, b.useEffect)(M, N);
        let P;
        t[9] === n ? P = t[10] : (P = n.some(ne), t[9] = n, t[10] = P);
        let F = P,
            I = !_,
            L;
        t[11] !== _ || t[12] !== I ? (L = i({
            "col-span-10 col-start-2": I,
            "col-span-12": _
        }), t[11] = _, t[12] = I, t[13] = L) : L = t[13];
        let R = S === `after`,
            z;
        t[14] === R ? z = t[15] : (z = i(`w-full`, {
            "order-last": R
        }), t[14] = R, t[15] = z);
        let B = v === `start`,
            V = v === `center`,
            H = v === `end`,
            U;
        t[16] !== B || t[17] !== V || t[18] !== H ? (U = i(`flex w-full justify-start`, {
            "md:justify-start": B,
            "md:justify-center": V,
            "md:justify-end": H
        }), t[16] = B, t[17] = V, t[18] = H, t[19] = U) : U = t[19];
        let W;
        t[20] === u ? W = t[21] : (W = i(`border-token-border-default relative inline-flex min-w-max items-center gap-2 rounded-full border p-1`, u), t[20] = u, t[21] = W);
        let G;
        t[22] !== T || t[23] !== n.length ? (G = e => {
            let t, r = getComputedStyle(e.currentTarget).direction === `rtl`;
            if (e.key === `ArrowRight` || e.key === `ArrowLeft`) {
                let i = e.key === `ArrowRight` === r ? -1 : 1;
                t = (T + i + n.length) % n.length
            } else if (e.key === `Home`) t = 0;
            else if (e.key === `End`) t = n.length - 1;
            else return;
            e.preventDefault(), O.current[t]?.focus(), O.current[t]?.click()
        }, t[22] = T, t[23] = n.length, t[24] = G) : G = t[24];
        let K;
        t[25] !== a || t[26] !== T || t[27] !== w || t[28] !== C || t[29] !== f || t[30] !== n ? (K = n.map((e, t) => {
            let {
                id: n,
                label: r,
                analyticsIdentifier: i
            } = e;
            return (0, x.jsx)(te, {
                id: n,
                label: r,
                className: f,
                tabIndex: T === t ? 0 : -1,
                ref: e => {
                    O.current[t] = e
                },
                onClick: () => {
                    E(t), l.logClick({
                        analytics_identifier: i,
                        locale: w,
                        page_slug: C
                    })
                },
                active: T === t,
                activeColor: a
            }, n)
        }), t[25] = a, t[26] = T, t[27] = w, t[28] = C, t[29] = f, t[30] = n, t[31] = K) : K = t[31];
        let q;
        t[32] !== W || t[33] !== G || t[34] !== K ? (q = (0, x.jsx)(`div`, {
            className: W,
            role: `tablist`,
            onKeyDown: G,
            children: K
        }), t[32] = W, t[33] = G, t[34] = K, t[35] = q) : q = t[35];
        let J;
        t[36] !== U || t[37] !== q ? (J = (0, x.jsx)(`div`, {
            className: U,
            children: q
        }), t[36] = U, t[37] = q, t[38] = J) : J = t[38];
        let Y;
        t[39] !== z || t[40] !== J ? (Y = (0, x.jsx)(g, {
            className: z,
            children: J
        }), t[39] = z, t[40] = J, t[41] = Y) : Y = t[41];
        let X;
        t[42] !== T || t[43] !== F || t[44] !== h || t[45] !== n ? (X = F ? (0, x.jsx)(`div`, {
            children: n.filter((e, t) => t === T).map(e => (0, x.jsx)(`div`, {
                id: `${e.id}-panel`,
                role: `tabpanel`,
                tabIndex: 0,
                "aria-labelledby": e.id,
                className: i(`transition-opacity duration-300`, {
                    "overflow-visible": e.content?.__typename === `componentGenericAnimatingCarousel`,
                    "overflow-hidden": e.content?.__typename !== `componentGenericAnimatingCarousel`
                }),
                children: h ? h(e) : e.content && d(e.content, ee)
            }, e.id))
        }) : null, t[42] = T, t[43] = F, t[44] = h, t[45] = n, t[46] = X) : X = t[46];
        let Z;
        t[47] !== Y || t[48] !== X ? (Z = (0, x.jsxs)(`div`, {
            className: `flex flex-col gap-8`,
            children: [Y, X]
        }), t[47] = Y, t[48] = X, t[49] = Z) : Z = t[49];
        let Q;
        t[50] !== L || t[51] !== Z ? (Q = (0, x.jsx)(`div`, {
            className: L,
            children: Z
        }), t[50] = L, t[51] = Z, t[52] = Q) : Q = t[52];
        let $;
        return t[53] !== s || t[54] !== Q ? ($ = (0, x.jsx)(`div`, {
            ...s,
            className: `max-w-8xl mx-auto grid w-full grid-cols-12`,
            children: Q
        }), t[53] = s, t[54] = Q, t[55] = $) : $ = t[55], $
    }
}));
export {
    C as n, v as r, S as t
};
//# sourceMappingURL=32d3feda-k127zwd34ici4a39.js.map