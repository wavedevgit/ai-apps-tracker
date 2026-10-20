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
    Rn as o,
    Vn as s,
    wn as c,
    zn as l
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    aWn as u,
    nWn as d,
    sWn as f,
    tWn as p
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    n as m,
    t as h
} from "./2686af9f-iev00l19as4g67mr.js";
import {
    t as g
} from "./1fbff149-gb0wzlfpl5ty76gm.js";
import {
    t as _
} from "./c3e2d78f-m9if2w1mh2slfzih.js";
import {
    n as v,
    t as y
} from "./088558a8-lgokgyux2qtnbjyd.js";
import {
    n as b,
    r as x
} from "./bb47c0a1-f3mze99y6p98ycp7.js";
import {
    n as S,
    t as C
} from "./46683f7b-l4yjpv0srav5cvvs.js";
import {
    r as w,
    t as T
} from "./eb36fa13-f5d7af243rih5tkd.js";
import {
    n as E,
    t as D
} from "./249dce54-n0lvg07ve8tkehk2.js";
import {
    r as O,
    t as k
} from "./8b34dbc2-25xg3uf6h8g70ig4.js";
import {
    n as A,
    t as j
} from "./32d3feda-k127zwd34ici4a39.js";
import {
    i as M,
    r as N
} from "./7517017f-j8l0th62fuhiii5i.js";
import {
    t as P
} from "./566bba80-dlaio8o2un2omejl.js";

function ee(e) {
    "use forget";
    let t = (0, F.c)(21),
        {
            id: n,
            className: r,
            pillText: a,
            title: o,
            body: s,
            conversations: c
        } = e,
        {
            slug: l
        } = x(),
        u;
    t[0] !== r || t[1] !== a ? (u = i(r, `flex flex-col items-start`, {
        "border-token-border-heavy border-t pt-5 sm:pt-10": a
    }), t[0] = r, t[1] = a, t[2] = u) : u = t[2];
    let d;
    t[3] === a ? d = t[4] : (d = a && (0, I.jsx)(`span`, {
        className: `bg-blue-75 rounded-full px-2.5 py-[1px] text-[13px] font-bold tracking-wider text-black uppercase`,
        children: a
    }), t[3] = a, t[4] = d);
    let f;
    t[5] === o ? f = t[6] : (f = (0, I.jsx)(`h2`, {
        className: `text-mkt-h2`,
        children: o
    }), t[5] = o, t[6] = f);
    let p;
    t[7] === s ? p = t[8] : (p = s && (0, I.jsx)(`p`, {
        className: `mt-5`,
        children: s
    }), t[7] = s, t[8] = p);
    let m;
    t[9] !== f || t[10] !== p ? (m = (0, I.jsxs)(`div`, {
        className: `mt-3 flex max-w-[600px] flex-col items-start`,
        children: [f, p]
    }), t[9] = f, t[10] = p, t[11] = m) : m = t[11];
    let h;
    t[12] !== c || t[13] !== n || t[14] !== l ? (h = c && (c.length > 1 ? (0, I.jsx)(`div`, {
        className: `mt-5 w-full`,
        children: (0, I.jsx)(j, {
            tabs: c.map((e, t) => {
                let r = e.label ?? String(t);
                return {
                    id: r,
                    label: r,
                    analyticsIdentifier: T(l, `guide-page-tab`, e.id ?? n),
                    content: {
                        __typename: `componentConversation`,
                        id: e.label,
                        messages: e.messages,
                        containerSize: `small`
                    }
                }
            }),
            fullWidth: !0,
            activeColor: `primary`
        })
    }) : (0, I.jsx)(k, {
        className: `mt-12`,
        messages: c[0].messages,
        containerSize: `small`
    })), t[12] = c, t[13] = n, t[14] = l, t[15] = h) : h = t[15];
    let g;
    return t[16] !== u || t[17] !== d || t[18] !== m || t[19] !== h ? (g = (0, I.jsxs)(`div`, {
        className: u,
        children: [d, m, h]
    }), t[16] = u, t[17] = d, t[18] = m, t[19] = h, t[20] = g) : g = t[20], g
}
var F, I, te = e((() => {
    F = c(), O(), A(), w(), b(), r(), I = a()
}));

function ne(e) {
    "use forget";
    let t = (0, L.c)(27),
        {
            className: n,
            title: r,
            body: a,
            cta: o,
            contentType: s,
            layout: c
        } = e,
        u = l(),
        {
            slug: d,
            effectiveLocale: f
        } = x(),
        m = s === `formPage`,
        _ = c === `contactSales`,
        v;
    t[0] !== f || t[1] !== d ? (v = {
        p: re,
        a: e => {
            let {
                node: t,
                href: n,
                children: r,
                ...i
            } = e;
            return (0, B.jsx)(p, {
                className: `hover:text-token-text-primary/60 underline decoration-gray-500 underline-offset-4 transition-colors`,
                onClick: () => {
                    h.logClick({
                        analytics_identifier: `guide-${d?.split(`/`)?.at(-1)??``}-hero-cta`,
                        destination_url: n,
                        locale: f,
                        page_slug: d
                    })
                },
                to: n,
                ...i,
                children: r
            })
        }
    }, t[0] = f, t[1] = d, t[2] = v) : v = t[2];
    let y = v,
        b = o?.link ?? `/`,
        S = !m || _,
        C = m && !_,
        w;
    t[3] !== n || t[4] !== S || t[5] !== C ? (w = i(n, `flex w-full flex-col gap-5`, {
        "items-start": S,
        "items-center text-center": C
    }), t[3] = n, t[4] = S, t[5] = C, t[6] = w) : w = t[6];
    let T;
    t[7] === r ? T = t[8] : (T = (0, B.jsx)(`h1`, {
        className: `text-mkt-h1 max-w-[600px] text-balance`,
        children: r
    }), t[7] = r, t[8] = T);
    let E;
    t[9] !== a || t[10] !== y ? (E = (0, B.jsx)(V, {
        components: y,
        children: a
    }), t[9] = a, t[10] = y, t[11] = E) : E = t[11];
    let D;
    t[12] !== o?.analyticsAction || t[13] !== o?.label || t[14] !== o?.link || t[15] !== b || t[16] !== f || t[17] !== u || t[18] !== _ || t[19] !== m || t[20] !== d ? (D = (!m || _ && o?.link) && (0, B.jsx)(g, {
        color: _ ? `primary-inverse` : `primary`,
        as: `link`,
        to: b,
        onClick: () => {
            h.logClick({
                analytics_identifier: o?.analyticsAction,
                destination_url: b,
                locale: f,
                page_slug: d
            })
        },
        children: o?.label ?? u.formatMessage({
            id: `+L7iZV`,
            defaultMessage: `Try ChatGPT`
        })
    }), t[12] = o?.analyticsAction, t[13] = o?.label, t[14] = o?.link, t[15] = b, t[16] = f, t[17] = u, t[18] = _, t[19] = m, t[20] = d, t[21] = D) : D = t[21];
    let O;
    return t[22] !== w || t[23] !== T || t[24] !== E || t[25] !== D ? (O = (0, B.jsxs)(`div`, {
        className: w,
        children: [T, E, D]
    }), t[22] = w, t[23] = T, t[24] = E, t[25] = D, t[26] = O) : O = t[26], O
}

function re(e) {
    let {
        node: t,
        children: n,
        ...r
    } = e, i = n;
    return i = (0, z.default)(i, N.small, ae), i = (0, z.default)(i, N.br, ie), (0, B.jsx)(`p`, {
        className: `text-mkt-p2 max-w-[600px]`,
        ...r,
        children: i
    })
}

function ie(e, t) {
    return (0, B.jsx)(`br`, {}, `br-${t}`)
}

function ae(e, t) {
    return (0, B.jsx)(`span`, {
        className: `text-mkt-xs`,
        children: e
    }, `small-${t}`)
}
var L, R, z, B, V, oe = e((() => {
    L = c(), M(), b(), d(), m(), r(), R = n(s()), o(), u(), z = n(P()), _(), B = a(), V = (0, R.memo)(f)
}));

function se(e) {
    "use forget";
    let t = (0, H.c)(10),
        {
            className: n,
            title: r,
            body: a
        } = e,
        o;
    t[0] === n ? o = t[1] : (o = i(n, `flex max-w-[600px] flex-col items-start gap-5`), t[0] = n, t[1] = o);
    let s;
    t[2] === r ? s = t[3] : (s = (0, U.jsx)(`h2`, {
        className: `text-mkt-h3`,
        children: r
    }), t[2] = r, t[3] = s);
    let c;
    t[4] === a ? c = t[5] : (c = a && (0, U.jsx)(`p`, {
        children: a
    }), t[4] = a, t[5] = c);
    let l;
    return t[6] !== o || t[7] !== s || t[8] !== c ? (l = (0, U.jsxs)(`div`, {
        className: o,
        children: [s, c]
    }), t[6] = o, t[7] = s, t[8] = c, t[9] = l) : l = t[9], l
}
var H, U, ce = e((() => {
    H = c(), r(), U = a()
}));

function W(e, t, n) {
    e?.analyticsAction && h.logClick({
        analytics_identifier: e.analyticsAction,
        destination_url: e.link ?? `/`,
        locale: t,
        page_slug: n
    })
}

function le(e) {
    "use forget";
    let t = (0, G.c)(22),
        {
            className: n,
            title: r,
            body: a,
            cta: o,
            secondaryCta: s,
            ctaConversionLink: c
        } = e,
        u = l(),
        {
            effectiveLocale: d,
            slug: f
        } = x(),
        p = !a,
        m;
    t[0] !== n || t[1] !== p ? (m = i(n, `flex w-full flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-start`, {
        "flex-wrap": p
    }), t[0] = n, t[1] = p, t[2] = m) : m = t[2];
    let h;
    t[3] === r ? h = t[4] : (h = (0, K.jsx)(`h2`, {
        className: `text-mkt-h3`,
        children: r
    }), t[3] = r, t[4] = h);
    let _;
    t[5] === a ? _ = t[6] : (_ = a && (0, K.jsx)(`p`, {
        className: `text-p`,
        children: a
    }), t[5] = a, t[6] = _);
    let v;
    t[7] !== h || t[8] !== _ ? (v = (0, K.jsxs)(`div`, {
        className: `max-w-[600px]`,
        children: [h, _]
    }), t[7] = h, t[8] = _, t[9] = v) : v = t[9];
    let b;
    t[10] !== a || t[11] !== o || t[12] !== c || t[13] !== d || t[14] !== u || t[15] !== s || t[16] !== f ? (b = (c || o) && (0, K.jsxs)(`div`, {
        className: `flex flex-wrap justify-center gap-3`,
        children: [c ? (0, K.jsx)(C, {
            ...c
        }) : (0, K.jsx)(g, {
            as: `link`,
            to: o?.link ?? `/`,
            icon: y(o?.icon),
            color: o?.color,
            className: i({
                "my-1": !a
            }),
            onClick: () => W(o, d, f),
            children: o?.label ?? u.formatMessage({
                id: `+L7iZV`,
                defaultMessage: `Try ChatGPT`
            })
        }), s && (0, K.jsx)(g, {
            as: `link`,
            to: s.link ?? `/`,
            icon: y(s.icon),
            color: s.color ?? `primary-inverse`,
            className: i({
                "my-1": !a
            }),
            onClick: () => W(s, d, f),
            children: s.label
        })]
    }), t[10] = a, t[11] = o, t[12] = c, t[13] = d, t[14] = u, t[15] = s, t[16] = f, t[17] = b) : b = t[17];
    let S;
    return t[18] !== m || t[19] !== v || t[20] !== b ? (S = (0, K.jsxs)(`div`, {
        className: m,
        children: [v, b]
    }), t[18] = m, t[19] = v, t[20] = b, t[21] = S) : S = t[21], S
}
var G, K, ue = e((() => {
    G = c(), S(), b(), m(), r(), o(), _(), v(), K = a()
}));

function de(e) {
    "use forget";
    let t = (0, q.c)(18),
        {
            className: n,
            title: r,
            conversations: a
        } = e,
        o = l(),
        s = a?.[0];
    if (!s) return null;
    let c = `https://chatgpt.com/?prompt=${encodeURIComponent(s.clickPrompt??``)}`,
        u;
    t[0] === n ? u = t[1] : (u = i(n, `col-span-12 flex flex-col items-start gap-10`), t[0] = n, t[1] = u);
    let d;
    t[2] === s.messages ? d = t[3] : (d = (0, J.jsx)(`div`, {
        className: `relative max-h-[360px] w-full overflow-hidden [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_20%,rgba(0,0,0,0)_100%)] [-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_20%,rgba(0,0,0,0)_100%)]`,
        children: (0, J.jsx)(k, {
            messages: s.messages,
            hideBg: !0
        })
    }), t[2] = s.messages, t[3] = d);
    let f;
    t[4] === r ? f = t[5] : (f = (0, J.jsx)(`p`, {
        className: `text-mkt-h3 max-w-[600px]`,
        children: r
    }), t[4] = r, t[5] = f);
    let p;
    t[6] === o ? p = t[7] : (p = o.formatMessage({
        id: `b4bBud`,
        defaultMessage: `Continue conversation`
    }), t[6] = o, t[7] = p);
    let m;
    t[8] !== c || t[9] !== p ? (m = (0, J.jsx)(g, {
        as: `a`,
        to: c,
        rel: `nofollow noopener`,
        children: p
    }), t[8] = c, t[9] = p, t[10] = m) : m = t[10];
    let h;
    t[11] !== f || t[12] !== m ? (h = (0, J.jsxs)(`div`, {
        className: `flex w-full flex-wrap items-center justify-center gap-2 sm:justify-between`,
        children: [f, m]
    }), t[11] = f, t[12] = m, t[13] = h) : h = t[13];
    let _;
    return t[14] !== u || t[15] !== d || t[16] !== h ? (_ = (0, J.jsxs)(`div`, {
        className: u,
        children: [d, h]
    }), t[14] = u, t[15] = d, t[16] = h, t[17] = _) : _ = t[17], _
}
var q, J, fe = e((() => {
        q = c(), r(), o(), _(), O(), J = a()
    })),
    pe = t({
        default: () => Y
    });

function Y(e) {
    "use forget";
    let t = (0, X.c)(56),
        {
            id: n,
            variant: r,
            pillText: a,
            title: o,
            body: s,
            cta: c,
            secondaryCta: l,
            ctaConversionLink: u,
            conversations: d,
            contentWidth: f,
            contentType: p,
            layout: m,
            className: h,
            contentfulDebugAttributes: g
        } = e,
        _ = f === void 0 ? `full` : f,
        v = m === `contactSales`,
        y, b, x, S, C, w, T, E;
    if (t[0] !== s || t[1] !== h || t[2] !== p || t[3] !== _ || t[4] !== g || t[5] !== d || t[6] !== c || t[7] !== u || t[8] !== n || t[9] !== v || t[10] !== m || t[11] !== a || t[12] !== l || t[13] !== o || t[14] !== r) {
        let e = i(`w-full`, {
                "col-span-full": !v,
                "max-md:max-w-[calc(100%-2*1.5rem)] max-md:mx-auto": v,
                "xl:col-span-6 xl:col-start-4": _ === `narrow`,
                "xl:col-span-8 xl:col-start-3": _ === `full`,
                "xl:col-span-10 xl:col-start-2": _ === `wide`
            }),
            f;
        t[23] !== s || t[24] !== p || t[25] !== c || t[26] !== m || t[27] !== o ? (f = e => {
            let {
                className: t
            } = e;
            return (0, Z.jsx)(ne, {
                className: t,
                title: o,
                body: s,
                cta: c,
                contentType: p,
                layout: m
            })
        }, t[23] = s, t[24] = p, t[25] = c, t[26] = m, t[27] = o, t[28] = f) : f = t[28];
        let O;
        t[29] !== d || t[30] !== o ? (O = e => {
            let {
                className: t
            } = e;
            return (0, Z.jsx)(de, {
                className: t,
                title: o,
                conversations: d
            })
        }, t[29] = d, t[30] = o, t[31] = O) : O = t[31];
        let k;
        t[32] !== s || t[33] !== d || t[34] !== n || t[35] !== a || t[36] !== o ? (k = e => {
            let {
                className: t
            } = e;
            return (0, Z.jsx)(ee, {
                id: n,
                className: t,
                pillText: a,
                title: o,
                body: s,
                conversations: d
            })
        }, t[32] = s, t[33] = d, t[34] = n, t[35] = a, t[36] = o, t[37] = k) : k = t[37];
        let A;
        t[38] !== s || t[39] !== o ? (A = e => {
            let {
                className: t
            } = e;
            return (0, Z.jsx)(se, {
                className: t,
                title: o,
                body: s
            })
        }, t[38] = s, t[39] = o, t[40] = A) : A = t[40];
        let j;
        t[41] !== s || t[42] !== c || t[43] !== u || t[44] !== l || t[45] !== o ? (j = e => {
            let {
                className: t
            } = e;
            return (0, Z.jsx)(le, {
                className: t,
                title: o,
                body: s,
                cta: c,
                secondaryCta: l,
                ctaConversionLink: u
            })
        }, t[41] = s, t[42] = c, t[43] = u, t[44] = l, t[45] = o, t[46] = j) : j = t[46];
        let M = {
                hero: f,
                preview: O,
                example: k,
                interlude: A,
                prefooter: j
            },
            N = Q[r ?? `default`],
            P = $[r ?? `default`];
        y = D, b = g, x = h, S = v, C = P, w = N, T = _, E = M[r]?.({
            className: e
        }) ?? null, t[0] = s, t[1] = h, t[2] = p, t[3] = _, t[4] = g, t[5] = d, t[6] = c, t[7] = u, t[8] = n, t[9] = v, t[10] = m, t[11] = a, t[12] = l, t[13] = o, t[14] = r, t[15] = y, t[16] = b, t[17] = x, t[18] = S, t[19] = C, t[20] = w, t[21] = T, t[22] = E
    } else y = t[15], b = t[16], x = t[17], S = t[18], C = t[19], w = t[20], T = t[21], E = t[22];
    let O;
    return t[47] !== y || t[48] !== b || t[49] !== x || t[50] !== S || t[51] !== C || t[52] !== w || t[53] !== T || t[54] !== E ? (O = (0, Z.jsx)(y, {
        contentfulDebugAttributes: b,
        className: x,
        isContactSalesLayout: S,
        containerType: C,
        spacingAbove: w,
        contentWidth: T,
        children: E
    }), t[47] = y, t[48] = b, t[49] = x, t[50] = S, t[51] = C, t[52] = w, t[53] = T, t[54] = E, t[55] = O) : O = t[55], O
}
var X, Z, Q, $, me = e((() => {
    X = c(), r(), E(), te(), oe(), ce(), ue(), fe(), Z = a(), Q = {
        hero: `hero`,
        example: `tight`,
        preview: `spacious`,
        prefooter: `spacious`,
        interlude: `default`
    }, $ = {
        preview: `gray`,
        prefooter: `gray-spacious`,
        hero: `default`,
        example: `default`,
        interlude: `default`
    }
}));
export {
    pe as n, me as r, Y as t
};
//# sourceMappingURL=e4a3058c-f9a3xwg8vvxfvlg6.js.map