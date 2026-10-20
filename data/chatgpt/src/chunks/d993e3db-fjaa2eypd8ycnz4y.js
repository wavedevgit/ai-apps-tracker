import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Mh as n,
    Nh as r
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Hn as i,
    Pn as a,
    Tn as o,
    Vn as s,
    zn as c
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    CCn as l,
    JLn as u,
    SCn as d,
    XLn as f,
    lWn as p,
    sWn as m
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    eb as h,
    tb as g
} from "./30901919-jory365vq6ym5crx.js";

function _(e) {
    return typeof e == `object` && !!e && !Array.isArray(e)
}

function v(e) {
    return typeof e == `string` ? e : void 0
}

function y(e) {
    return Array.isArray(e) ? e.filter(_) : []
}

function b(e) {
    return Array.isArray(e) ? e.filter(e => typeof e == `string`) : []
}

function x(e, t, n) {
    return v(n.operationId) ?? `${e}-${t}`.replaceAll(/[{}]/g, ``).replaceAll(/[^a-zA-Z0-9]+/g, `-`).replaceAll(/^-|-$/g, ``)
}

function S(e) {
    if (!_(e) || !_(e.paths)) return [];
    let t = [];
    for (let [n, r] of Object.entries(e.paths))
        if (_(r))
            for (let [e, i] of Object.entries(r)) {
                if (!H.has(e) || !_(i)) continue;
                let r = b(i.tags)[0] ?? `General`,
                    a = v(i.summary) ?? v(i.description) ?? n,
                    o = _(i.responses) ? Object.keys(i.responses) : [];
                t.push({
                    description: v(i.description),
                    id: x(e, n, i),
                    method: e,
                    parameters: y(i.parameters),
                    path: n,
                    requestBody: _(i.requestBody) ? i.requestBody : void 0,
                    responseCodes: o,
                    responses: _(i.responses) ? i.responses : {},
                    summary: a,
                    tag: r
                })
            }
    return t
}

function C(e, t) {
    let n = new Map;
    for (let e of t) {
        let t = n.get(e.tag) ?? [];
        t.push(e), n.set(e.tag, t)
    }
    let r = new Map;
    if (_(e))
        for (let t of y(e.tags)) {
            let e = v(t.name),
                n = v(t.description);
            e && n && r.set(e, n)
        }
    let i = e => ({
            description: r.get(e),
            name: e,
            operations: n.get(e) ?? []
        }),
        a = e => e.operations.length > 0 || e.description != null,
        o = [],
        s = new Set;
    if (_(e))
        for (let t of y(e[`x-tagGroups`])) {
            let e = v(t.name),
                n = b(t.tags);
            if (!e || n.length === 0) continue;
            let r = n.map(e => (s.add(e), i(e)));
            r.some(a) && o.push({
                name: e,
                sections: r.filter(a)
            })
        }
    let c = new Set([...n.keys(), ...r.keys()]);
    for (let e of c)
        if (!s.has(e)) {
            let t = i(e);
            a(t) && o.push({
                name: e,
                sections: [t]
            })
        } return o
}

function ee(e) {
    return !_(e) || !_(e.info) ? `OpenAI Admin API` : v(e.info.title) ?? `OpenAI Admin API`
}

function w(e) {
    if (!_(e)) return `https://api.chatgpt.com/v1`;
    let t = y(e.servers)[0];
    return v(t?.url) ?? `https://api.chatgpt.com/v1`
}

function T(e) {
    "use forget";
    let t = (0, z.c)(3),
        {
            value: n
        } = e,
        r;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = [f], t[0] = r) : r = t[0];
    let i;
    return t[1] === n ? i = t[2] : (i = (0, V.jsx)(p, {
        components: U,
        remarkPlugins: r,
        children: n
    }), t[1] = n, t[2] = i), i
}

function E(e) {
    return e.split(/(\x60[^\x60\n]+\x60)/g).map((e, t) => {
        let n = e.match(/^\x60([^\x60\n]+)\x60$/);
        return n ? (0, V.jsx)(`code`, {
            className: `rounded-[4px] border border-[#dedede] bg-[#f1f1f1] px-[0.3em] py-[0.1em] font-mono text-[0.88em] text-[#3c4043]`,
            children: n[1]
        }, n[1] + `-` + t) : e
    })
}

function D(e, t) {
    if (!_(t)) return t;
    let n = v(t.$ref);
    if (!n?.startsWith(`#/`) || !_(e)) return t;
    let r = e;
    for (let e of n.slice(2).split(`/`)) {
        let t = e.replaceAll(`~1`, `/`).replaceAll(`~0`, `~`);
        if (!_(r)) return;
        r = r[t]
    }
    return r
}

function O(e) {
    if (`example` in e) return e.example;
    let t = e.examples;
    if (Array.isArray(t)) return t[0];
    if (!_(t)) return;
    let n = Object.values(t)[0];
    return _(n) && `value` in n ? n.value : n
}

function k(e, t, n = 0) {
    if (n > 5) return;
    let r = D(e, t);
    if (!_(r)) return;
    let i = O(r);
    if (i !== void 0) return i;
    if (`default` in r) return r.default;
    let a = r.enum;
    if (Array.isArray(a) && a.length > 0) return a[0];
    for (let t of [`oneOf`, `anyOf`]) {
        let i = r[t];
        if (Array.isArray(i)) {
            let t = k(e, i[0], n + 1);
            if (t !== void 0) return t
        }
    }
    if (Array.isArray(r.allOf)) {
        let t = r.allOf.map(t => k(e, t, n + 1)).filter(e => e !== void 0),
            i = t.filter(_);
        if (i.length > 0) return Object.assign({}, ...i);
        if (t.length > 0) return t[0]
    }
    let o = r.properties;
    if (_(o)) {
        let t = {};
        for (let [r, i] of Object.entries(o).slice(0, 16)) {
            let a = k(e, i, n + 1);
            a !== void 0 && (t[r] = a)
        }
        return t
    }
    let s = v(r.type);
    if (s === `array`) {
        let t = k(e, r.items, n + 1);
        return t === void 0 ? [] : [t]
    }
    if (s === `boolean`) return !1;
    if (s === `integer` || s === `number`) return 0;
    if (s === `object`) return {};
    if (s === `string`) switch (v(r.format)) {
        case `date`:
            return `2026-01-01`;
        case `date-time`:
            return `2026-01-01T00:00:00Z`;
        case `email`:
            return `user@example.com`;
        case `uuid`:
            return `00000000-0000-0000-0000-000000000000`;
        default:
            return `string`
    }
}

function te(e, t, n) {
    let r = Object.entries(t.responses),
        [i, a] = r.find(([e]) => e === n) ?? r.find(([e]) => e.startsWith(`2`)) ?? r[0] ?? [`200`, {}],
        o = D(e, a);
    if (!_(o)) return {
        code: i
    };
    let s = o.content;
    if (!_(s)) return {
        code: i,
        description: v(o.description)
    };
    let c = _(s[`application/json`]) && s[`application/json`] || Object.values(s).find(_);
    if (!_(c)) return {
        code: i,
        description: v(o.description)
    };
    let l = O(c) ?? k(e, c.schema) ?? k(e, o.schema);
    return {
        body: l === void 0 ? void 0 : typeof l == `string` ? l : JSON.stringify(l, null, 2),
        code: i,
        description: v(o.description)
    }
}

function A(e, t) {
    let n = D(e, t.requestBody);
    if (!_(n) || !_(n.content)) return;
    let r = _(n.content[`application/json`]) && n.content[`application/json`] || Object.values(n.content).find(_);
    if (!_(r)) return;
    let i = O(r) ?? k(e, r.schema);
    if (i !== void 0) return JSON.stringify(i, null, 2)
}

function ne(e) {
    let t = new Map;
    for (let n of e) {
        let e = v(n.in) ?? `other`,
            r = t.get(e) ?? [];
        r.push(n), t.set(e, r)
    }
    let n = new Map([
        [`path`, `Path parameters`],
        [`query`, `Query parameters`],
        [`header`, `Header parameters`],
        [`cookie`, `Cookie parameters`],
        [`other`, `Parameters`]
    ]);
    return [`path`, `query`, `header`, `cookie`, `other`].filter(e => t.has(e)).map(e => ({
        name: n.get(e) ?? `Parameters`,
        parameters: t.get(e) ?? []
    }))
}

function j() {
    if (typeof window > `u`) return;
    let e = window.location.hash.match(/^#(operation|tag)\/(.+)$/);
    if (!e) return;
    let t = e[1];
    if (!(t !== `operation` && t !== `tag`)) try {
        return {
            type: t,
            value: decodeURIComponent(e[2])
        }
    } catch {
        return
    }
}

function re(e, t, n) {
    let r = t.method.toUpperCase(),
        i = [`curl ${n}${t.path} \\`, `  --request ${r} \\`, `  --header "Authorization: Bearer $CHATGPT_ADMIN_API_KEY"`],
        a = A(e, t);
    return a !== void 0 && (i[i.length - 1] += ` \\`, i.push(`  --header "Content-Type: application/json" \\`, `  --data '${a.replaceAll(`'`,`'\\''`)}'`)), i.join(`
`)
}

function ie(e) {
    "use forget";
    let t = (0, z.c)(3),
        {
            method: n
        } = e,
        r = `inline-flex min-w-14 justify-center rounded-md px-2 py-1 font-mono text-[11px] font-semibold uppercase ${n===`get`?`bg-[#e7f5ed] text-[#16794b]`:n===`delete`?`bg-[#fdeceb] text-[#b42318]`:`bg-[#eef2ff] text-[#4338ca]`}`,
        i;
    return t[0] !== n || t[1] !== r ? (i = (0, V.jsx)(`span`, {
        className: r,
        children: n
    }), t[0] = n, t[1] = r, t[2] = i) : i = t[2], i
}

function M(e) {
    "use forget";
    let t = (0, z.c)(10),
        {
            method: n
        } = e,
        r;
    t[0] === n ? r = t[1] : (r = n.toLowerCase(), t[0] = n, t[1] = r);
    let i = r,
        a = i === `delete`,
        o = i === `get` || i === `head`,
        s = a ? `border-[#f4b4b4] bg-[#fff3f3] text-[#c5221f]` : o ? `border-[#bde4cc] bg-[#f2fbf5] text-[#16834f]` : `border-[#b6cff7] bg-[#f2f7ff] text-[#2463c5]`,
        c;
    t[2] === s ? c = t[3] : (c = [`flex h-7 w-7 shrink-0 items-center justify-center rounded-md border`, s], t[2] = s, t[3] = c);
    let l = c.join(` `),
        u;
    t[4] !== a || t[5] !== o ? (u = (0, V.jsx)(`svg`, {
        className: `h-4 w-4`,
        fill: `none`,
        viewBox: `0 0 16 16`,
        children: a ? (0, V.jsx)(`path`, {
            d: `m4 4 8 8m0-8-8 8`,
            stroke: `currentColor`,
            strokeLinecap: `round`,
            strokeWidth: `1.7`
        }) : (0, V.jsx)(`path`, {
            d: o ? `M11.5 4.5 4.5 11.5m0 0h5.25m-5.25 0V6.25` : `M4.5 11.5 11.5 4.5m0 0H6.25m5.25 0v5.25`,
            stroke: `currentColor`,
            strokeLinecap: `round`,
            strokeLinejoin: `round`,
            strokeWidth: `1.7`
        })
    }), t[4] = a, t[5] = o, t[6] = u) : u = t[6];
    let d;
    return t[7] !== l || t[8] !== u ? (d = (0, V.jsx)(`span`, {
        "aria-hidden": `true`,
        className: l,
        children: u
    }), t[7] = l, t[8] = u, t[9] = d) : d = t[9], d
}

function ae() {
    "use forget";
    let e = (0, z.c)(1),
        t;
    return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, V.jsx)(`svg`, {
        "aria-hidden": `true`,
        className: `h-3 w-3`,
        fill: `none`,
        viewBox: `0 0 12 12`,
        children: (0, V.jsx)(`path`, {
            d: `m3.5 4.5 2.5 2.5 2.5-2.5`,
            stroke: `currentColor`,
            strokeLinecap: `round`,
            strokeWidth: `1.4`
        })
    }), e[0] = t) : t = e[0], t
}

function N(e) {
    "use forget";
    let t = (0, z.c)(69),
        {
            audience: n,
            spec: i,
            specUrl: o
        } = e,
        [s, c] = (0, B.useState)(),
        [l, u] = (0, B.useState)(!1),
        [d, f] = (0, B.useState)(``),
        [p, m] = (0, B.useState)(j),
        [h, g] = (0, B.useState)(R),
        _, v;
    t[0] !== i || t[1] !== o ? (_ = () => {
        if (i != null || !o) return;
        let e = !1;
        return fetch(o, {
            credentials: `same-origin`
        }).then(L).then(t => {
            e || c(t)
        }).catch(() => {
            e || u(!0)
        }), () => {
            e = !0
        }
    }, v = [i, o], t[0] = i, t[1] = o, t[2] = _, t[3] = v) : (_ = t[2], v = t[3]), (0, B.useEffect)(_, v);
    let y = i ?? s,
        b;
    t[4] === y ? b = t[5] : (b = S(y), t[4] = y, t[5] = b);
    let x = b,
        D;
    t[6] !== x || t[7] !== y ? (D = C(y, x), t[6] = x, t[7] = y, t[8] = D) : D = t[8];
    let O = D,
        k, A;
    t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (k = () => {
        let e = () => {
            m(j())
        };
        return window.addEventListener(`hashchange`, e), () => window.removeEventListener(`hashchange`, e)
    }, A = [], t[9] = k, t[10] = A) : (k = t[9], A = t[10]), (0, B.useEffect)(k, A);
    let N, P, F, I, H, U;
    if (t[11] !== n || t[12] !== h || t[13] !== l || t[14] !== O || t[15] !== x || t[16] !== d || t[17] !== p || t[18] !== y) {
        let e = d.trim().toLowerCase(),
            i = O.map(t => ({
                ...t,
                sections: t.sections.map(t => {
                    let n = (t.name + ` ` + (t.description ?? ``)).toLowerCase().includes(e);
                    return {
                        ...t,
                        operations: n ? t.operations : t.operations.filter(t => (t.summary + ` ` + t.path + ` ` + t.tag).toLowerCase().includes(e))
                    }
                }).filter(t => t.operations.length > 0 || (t.name + ` ` + (t.description ?? ``)).toLowerCase().includes(e))
            })).filter(le),
            o = O.flatMap(ce),
            s = p?.type === `tag` ? o.find(e => {
                let {
                    name: t
                } = e;
                return t === p.value
            }) : void 0,
            c = p?.type === `operation` ? x.find(e => {
                let {
                    id: t
                } = e;
                return t === p.value
            }) : p == null ? x[0] : void 0,
            u = w(y),
            _ = ee(y),
            v = c ? te(y, c, p?.type === `operation` ? p.responseCode : void 0) : void 0,
            b = c ? ne(c.parameters) : [],
            S = s ? `tag:${s.name}` : c ? `operation:${c.id}` : ``,
            C;
        t[25] === Symbol.for(`react.memo_cache_sentinel`) ? (C = e => {
            g(t => {
                let n = new Set(t);
                return n.has(e) ? n.delete(e) : n.add(e), n
            })
        }, t[25] = C) : C = t[25];
        let D = C;
        P = `light font-oai fixed inset-0 flex h-screen min-h-screen w-screen flex-col overflow-hidden bg-white text-[#0d0d0d]`;
        let k;
        t[26] === Symbol.for(`react.memo_cache_sentinel`) ? (k = (0, V.jsx)(`span`, {
            className: `shrink-0`,
            children: `Browse API reference`
        }), t[26] = k) : k = t[26];
        let A;
        t[27] === Symbol.for(`react.memo_cache_sentinel`) ? (A = e => {
            let t = e.target.value.indexOf(`:`);
            if (t === -1) return;
            let n = e.target.value.slice(0, t),
                r = e.target.value.slice(t + 1);
            if (n !== `operation` && n !== `tag`) return;
            let i = {
                type: n,
                value: r
            };
            m(i), window.location.hash = i.type + `/` + encodeURIComponent(i.value)
        }, t[27] = A) : A = t[27];
        let j;
        t[28] === O ? j = t[29] : (j = O.map(se), t[28] = O, t[29] = j);
        let L;
        t[30] !== S || t[31] !== j ? (L = (0, V.jsxs)(`label`, {
            className: `flex items-center gap-3 text-[13px] font-semibold text-[#0d0d0d]`,
            children: [k, (0, V.jsx)(`select`, {
                "aria-label": `Browse API reference`,
                className: `min-w-0 flex-1 rounded-lg border border-[#e5e5e5] bg-white px-3 py-2 text-[13px] font-normal text-[#0d0d0d] outline-none focus:border-[#8f8f8f]`,
                onChange: A,
                value: S,
                children: j
            })]
        }), t[30] = S, t[31] = j, t[32] = L) : L = t[32];
        let R;
        t[33] === y ? R = t[34] : (R = (0, V.jsx)(W, {
            className: `w-full`,
            spec: y
        }), t[33] = y, t[34] = R), t[35] !== L || t[36] !== R ? (F = (0, V.jsxs)(`div`, {
            className: `space-y-3 border-b border-[#e7e7e7] bg-white px-4 py-3 lg:hidden`,
            children: [L, R]
        }), t[35] = L, t[36] = R, t[37] = F) : F = t[37], U = `flex min-h-0 flex-1`;
        let z;
        t[38] === Symbol.for(`react.memo_cache_sentinel`) ? (z = (0, V.jsx)(`span`, {
            className: `text-[13px] font-semibold text-[#0d0d0d]`,
            children: `Admin API Reference`
        }), t[38] = z) : z = t[38];
        let B = `rounded-full border px-2 py-0.5 text-[10px] font-medium ${n===`internal`?`border-[#f4d899] bg-[#fffaf0] text-[#8a5a00]`:`border-[#bde4cc] bg-[#f2fbf5] text-[#16794b]`}`,
            G;
        t[39] === n ? G = t[40] : (G = n === `internal` ? (0, V.jsx)(a, {
            id: `chatgpt.admin_api_reference.audience_badge.signed_in`,
            defaultMessage: `Signed in`
        }) : `Public`, t[39] = n, t[40] = G);
        let K;
        t[41] !== B || t[42] !== G ? (K = (0, V.jsxs)(`div`, {
            className: `flex items-center justify-between py-1`,
            children: [z, (0, V.jsx)(`span`, {
                className: B,
                children: G
            })]
        }), t[41] = B, t[42] = G, t[43] = K) : K = t[43];
        let q;
        t[44] === Symbol.for(`react.memo_cache_sentinel`) ? (q = e => f(e.target.value), t[44] = q) : q = t[44];
        let J;
        t[45] === d ? J = t[46] : (J = (0, V.jsx)(`input`, {
            "aria-label": `Search API reference`,
            className: `w-full appearance-none border-0 bg-transparent p-0 text-[13px] text-[#0d0d0d] shadow-none outline-none placeholder:text-[#737373] focus:ring-0`,
            onChange: q,
            placeholder: `Search reference`,
            type: `text`,
            value: d
        }), t[45] = d, t[46] = J);
        let Y;
        t[47] === Symbol.for(`react.memo_cache_sentinel`) ? (Y = (0, V.jsx)(r, {
            className: `h-4 w-4 shrink-0`
        }), t[47] = Y) : Y = t[47];
        let X;
        t[48] === J ? X = t[49] : (X = (0, V.jsxs)(`label`, {
            className: `mt-4 flex h-9 items-center justify-between rounded-lg border border-[#e5e5e5] bg-white px-3 text-[#737373] transition-colors focus-within:border-[#8f8f8f]`,
            children: [J, Y]
        }), t[48] = J, t[49] = X);
        let Z;
        t[50] === y ? Z = t[51] : (Z = (0, V.jsx)(W, {
            className: `mt-2 w-full`,
            spec: y
        }), t[50] = y, t[51] = Z);
        let Q;
        t[52] !== K || t[53] !== X || t[54] !== Z ? (Q = (0, V.jsxs)(`div`, {
            className: `mb-6 px-2.5`,
            children: [K, X, Z]
        }), t[52] = K, t[53] = X, t[54] = Z, t[55] = Q) : Q = t[55];
        let $ = (0, V.jsxs)(`nav`, {
            className: `min-h-0 flex-1 overflow-y-auto px-3 pt-4 pb-6`,
            children: [Q, i.map(t => {
                let n = e.length > 0 || !h.has(t.name);
                return (0, V.jsxs)(`div`, {
                    className: `mb-7`,
                    children: [(0, V.jsxs)(`button`, {
                        "aria-expanded": n,
                        className: `mb-2 flex w-full items-center justify-between px-2.5 text-start text-[13px] font-semibold text-[#0d0d0d]`,
                        onClick: () => D(t.name),
                        type: `button`,
                        children: [(0, V.jsx)(`span`, {
                            children: t.name
                        }), (0, V.jsx)(`span`, {
                            className: `transition-transform ` + (n ? `rotate-0` : `-rotate-90`),
                            children: (0, V.jsx)(ae, {})
                        })]
                    }), n && (0, V.jsx)(`div`, {
                        className: `space-y-3`,
                        children: t.sections.map(e => (0, V.jsxs)(`div`, {
                            className: `ms-2 border-s border-[#e7e7e7] ps-1.5`,
                            children: [(0, V.jsx)(`a`, {
                                className: `mb-1 block rounded-md px-2 py-1 text-[12px] font-semibold transition-colors ` + (s?.name === e.name ? `bg-[#ececec] text-[#0d0d0d]` : `text-[#5d5d5d] hover:bg-[#f7f7f7] hover:text-[#0d0d0d]`),
                                href: `#tag/` + encodeURIComponent(e.name),
                                onClick: () => m({
                                    type: `tag`,
                                    value: e.name
                                }),
                                children: e.name
                            }), (0, V.jsx)(`div`, {
                                className: `space-y-0.5`,
                                children: e.operations.map(e => (0, V.jsxs)(`a`, {
                                    className: `flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-[13px] leading-5 transition-colors ` + (e.id === c?.id ? `bg-[#ececec] font-medium text-[#0d0d0d]` : `text-[#0d0d0d] hover:bg-[#f7f7f7]`),
                                    href: `#operation/` + encodeURIComponent(e.id),
                                    onClick: () => m({
                                        type: `operation`,
                                        value: e.id
                                    }),
                                    children: [(0, V.jsx)(M, {
                                        method: e.method
                                    }), (0, V.jsx)(`span`, {
                                        className: `min-w-0 truncate`,
                                        children: e.summary
                                    })]
                                }, e.id))
                            })]
                        }, e.name))
                    })]
                }, t.name)
            })]
        });
        t[56] === $ ? N = t[57] : (N = (0, V.jsx)(`aside`, {
            className: `hidden w-[272px] shrink-0 flex-col bg-white lg:flex`,
            children: $
        }), t[56] = $, t[57] = N), I = `min-w-0 flex-1 overflow-y-auto bg-white`, H = l ? (0, V.jsxs)(`div`, {
            className: `mx-auto max-w-3xl px-8 py-16`,
            children: [(0, V.jsx)(`h1`, {
                className: `text-3xl font-semibold`,
                children: `API reference unavailable`
            }), (0, V.jsx)(`p`, {
                className: `text-token-text-secondary mt-3`,
                children: `We could not load the reference. Refresh the page to try again.`
            })]
        }) : y != null && p != null && !c && !s ? (0, V.jsxs)(`div`, {
            className: `mx-auto max-w-3xl px-8 py-16`,
            children: [(0, V.jsx)(`h1`, {
                className: `text-3xl font-semibold`,
                children: (0, V.jsx)(a, {
                    id: `chatgpt.admin_api_reference.missing_section.heading`,
                    defaultMessage: `Reference section not found`
                })
            }), (0, V.jsx)(`p`, {
                className: `text-token-text-secondary mt-3`,
                children: (0, V.jsx)(a, {
                    id: `chatgpt.admin_api_reference.missing_section.help_text`,
                    defaultMessage: `This link does not match a section in this reference. Choose a section from the navigation.`
                })
            })]
        }) : !c && !s ? (0, V.jsxs)(`div`, {
            className: `mx-auto max-w-3xl px-8 py-16`,
            children: [(0, V.jsx)(`div`, {
                className: `bg-token-bg-secondary mb-6 h-5 w-28 animate-pulse rounded`
            }), (0, V.jsx)(`div`, {
                className: `bg-token-bg-secondary mb-4 h-10 w-2/3 animate-pulse rounded`
            }), (0, V.jsx)(`div`, {
                className: `bg-token-bg-secondary h-4 w-full animate-pulse rounded`
            })]
        }) : s ? (0, V.jsxs)(`article`, {
            className: `mx-auto max-w-[900px] px-6 py-6`,
            children: [(0, V.jsxs)(`div`, {
                className: `mb-10 flex items-center gap-2 text-[13px] text-[#737373]`,
                children: [(0, V.jsx)(`span`, {
                    children: `Admin API Reference`
                }), (0, V.jsx)(`span`, {
                    children: `/`
                }), (0, V.jsx)(`span`, {
                    children: s.name
                })]
            }), (0, V.jsx)(`h1`, {
                className: `max-w-3xl text-[32px] leading-[1.15] font-semibold tracking-[-0.04em]`,
                children: s.name
            }), (0, V.jsx)(`div`, {
                className: `mt-8 max-w-3xl text-[15px] leading-6 text-[#0d0d0d]`,
                children: (0, V.jsx)(T, {
                    value: s.description ?? `Endpoints for managing this part of the ` + _ + `.`
                })
            }), s.operations.length > 0 && (0, V.jsxs)(`section`, {
                className: `mt-12 max-w-3xl`,
                children: [(0, V.jsx)(`h2`, {
                    className: `mb-5 text-[20px] font-semibold tracking-[-0.025em]`,
                    children: `Endpoints`
                }), (0, V.jsx)(`div`, {
                    className: `divide-y divide-[#e7e7e7] rounded-xl border border-[#e7e7e7]`,
                    children: s.operations.map(e => (0, V.jsxs)(`a`, {
                        className: `flex items-center gap-3 px-4 py-3 text-[14px] transition-colors hover:bg-[#fafafa]`,
                        href: `#operation/` + encodeURIComponent(e.id),
                        onClick: () => m({
                            type: `operation`,
                            value: e.id
                        }),
                        children: [(0, V.jsx)(M, {
                            method: e.method
                        }), (0, V.jsx)(`span`, {
                            children: e.summary
                        })]
                    }, e.id))
                })]
            })]
        }) : c ? (0, V.jsxs)(`div`, {
            className: `grid grid-cols-1 xl:grid-cols-[minmax(0,584px)_minmax(460px,1fr)]`,
            children: [(0, V.jsxs)(`article`, {
                className: `px-6 py-6`,
                children: [(0, V.jsxs)(`div`, {
                    className: `mb-10 flex items-center gap-2 text-[13px] text-[#737373]`,
                    children: [(0, V.jsx)(`span`, {
                        children: `Admin API Reference`
                    }), (0, V.jsx)(`span`, {
                        children: `/`
                    }), (0, V.jsx)(`span`, {
                        children: c.tag
                    })]
                }), (0, V.jsx)(`h1`, {
                    className: `max-w-3xl text-[32px] leading-[1.15] font-semibold tracking-[-0.04em]`,
                    children: c.summary
                }), (0, V.jsxs)(`div`, {
                    className: `mt-4 flex flex-wrap items-center gap-3`,
                    children: [(0, V.jsx)(ie, {
                        method: c.method
                    }), (0, V.jsx)(`code`, {
                        className: `text-[13px] text-[#5d5d5d]`,
                        children: c.path
                    })]
                }), (0, V.jsx)(`div`, {
                    className: `mt-12 max-w-3xl text-[15px] leading-6 text-[#0d0d0d]`,
                    children: (0, V.jsx)(T, {
                        value: c.description ?? `Use this endpoint in the ` + _ + ` to manage your organization programmatically.`
                    })
                }), b.map(oe), c.requestBody && (0, V.jsxs)(`section`, {
                    className: `mt-12`,
                    children: [(0, V.jsx)(`h2`, {
                        className: `mb-4 text-[20px] font-semibold tracking-[-0.025em]`,
                        children: `Request body`
                    }), (0, V.jsx)(`div`, {
                        className: `rounded-xl border border-[#e7e7e7] bg-[#fafafa] p-5 text-[14px] text-[#5d5d5d]`,
                        children: `Send a JSON object matching the request schema for this operation.`
                    })]
                }), (0, V.jsxs)(`section`, {
                    className: `mt-12 pb-14`,
                    children: [(0, V.jsx)(`h2`, {
                        className: `mb-5 text-[20px] font-semibold tracking-[-0.025em]`,
                        children: `Returns`
                    }), (0, V.jsxs)(`div`, {
                        className: `rounded-xl border border-[#e7e7e7] p-5`,
                        children: [(0, V.jsx)(`div`, {
                            className: `mb-3 flex flex-wrap gap-2`,
                            children: (c.responseCodes.length > 0 ? c.responseCodes : [`200`]).map(e => (0, V.jsx)(`button`, {
                                "aria-pressed": v?.code === e,
                                className: `interactive-button rounded-md bg-[#e7f5ed] px-2 py-1 font-mono text-xs text-[#16794b] aria-pressed:bg-[#16794b] aria-pressed:text-white`,
                                onClick: () => m({
                                    responseCode: e,
                                    type: `operation`,
                                    value: c.id
                                }),
                                type: `button`,
                                children: e
                            }, e))
                        }), (0, V.jsx)(`div`, {
                            className: `text-[14px] leading-6 text-[#5d5d5d]`,
                            children: E(v?.description ?? `A successful response containing the requested Admin API resource.`)
                        })]
                    })]
                })]
            }), (0, V.jsx)(`aside`, {
                className: `bg-white text-[#0d0d0d]`,
                children: (0, V.jsxs)(`div`, {
                    className: `sticky top-0 px-6 py-[190px]`,
                    children: [(0, V.jsxs)(`div`, {
                        className: `mb-5 flex items-center justify-between`,
                        children: [(0, V.jsx)(`span`, {
                            className: `text-[13px] font-medium`,
                            children: `Example request`
                        }), (0, V.jsx)(`span`, {
                            className: `rounded-md border border-[#e2e2e2] bg-[#f7f7f7] px-2 py-1 text-[11px] text-[#5d5d5d]`,
                            children: `curl`
                        })]
                    }), (0, V.jsx)(`pre`, {
                        className: `overflow-x-auto rounded-xl border border-[#e2e2e2] bg-[#f7f7f8] p-5 font-mono text-[12px] leading-6 text-[#0b3b8c]`,
                        children: (0, V.jsx)(`code`, {
                            children: re(y, c, u)
                        })
                    }), (0, V.jsxs)(`div`, {
                        className: `mt-9 mb-4 flex items-center justify-between`,
                        children: [(0, V.jsx)(`span`, {
                            className: `text-[13px] font-medium`,
                            children: `Example response`
                        }), (0, V.jsx)(`span`, {
                            className: `rounded-md border border-[#e2e2e2] bg-[#f7f7f7] px-2 py-1 font-mono text-[11px] text-[#5d5d5d]`,
                            children: v?.code ?? `200`
                        })]
                    }), (0, V.jsx)(`pre`, {
                        className: `overflow-x-auto rounded-xl border border-[#e2e2e2] bg-[#f7f7f8] p-5 font-mono text-[12px] leading-6 text-[#0b3b8c]`,
                        children: (0, V.jsx)(`code`, {
                            children: v?.body ?? `No response body.`
                        })
                    })]
                })
            })]
        }) : null, t[11] = n, t[12] = h, t[13] = l, t[14] = O, t[15] = x, t[16] = d, t[17] = p, t[18] = y, t[19] = N, t[20] = P, t[21] = F, t[22] = I, t[23] = H, t[24] = U
    } else N = t[19], P = t[20], F = t[21], I = t[22], H = t[23], U = t[24];
    let G;
    t[58] !== I || t[59] !== H ? (G = (0, V.jsx)(`main`, {
        className: I,
        children: H
    }), t[58] = I, t[59] = H, t[60] = G) : G = t[60];
    let K;
    t[61] !== N || t[62] !== G || t[63] !== U ? (K = (0, V.jsxs)(`div`, {
        className: U,
        children: [N, G]
    }), t[61] = N, t[62] = G, t[63] = U, t[64] = K) : K = t[64];
    let q;
    return t[65] !== P || t[66] !== F || t[67] !== K ? (q = (0, V.jsxs)(`div`, {
        className: P,
        children: [F, K]
    }), t[65] = P, t[66] = F, t[67] = K, t[68] = q) : q = t[68], q
}

function oe(e) {
    return (0, V.jsxs)(`section`, {
        className: `mt-12`,
        children: [(0, V.jsx)(`h2`, {
            className: `mb-5 text-[20px] font-semibold tracking-[-0.025em]`,
            children: e.name
        }), (0, V.jsx)(`div`, {
            className: `divide-y divide-[#e7e7e7] rounded-xl border border-[#e7e7e7]`,
            children: e.parameters.map(P)
        })]
    }, e.name)
}

function P(e, t) {
    let n = v(e.name) ?? `parameter-${t}`,
        r = e.required === !0,
        i = _(e.schema) ? e.schema : {};
    return (0, V.jsxs)(`div`, {
        className: `grid gap-2 p-5 sm:grid-cols-[180px_1fr]`,
        children: [(0, V.jsxs)(`div`, {
            children: [(0, V.jsx)(`code`, {
                className: `text-sm font-semibold`,
                children: n
            }), r && (0, V.jsx)(`span`, {
                className: `ms-2 text-xs text-[#b42318]`,
                children: `Required`
            })]
        }), (0, V.jsxs)(`div`, {
            className: `text-[14px] leading-6 text-[#5d5d5d]`,
            children: [(0, V.jsx)(`div`, {
                className: `mb-1 font-mono text-[12px] text-[#737373]`,
                children: v(i.type) ?? `string`
            }), E(v(e.description) ?? `Identifier used by this endpoint.`)]
        })]
    }, n)
}

function se(e) {
    return (0, V.jsx)(`optgroup`, {
        label: e.name,
        children: e.sections.map(F)
    }, e.name)
}

function F(e) {
    return [(0, V.jsx)(`option`, {
        value: `tag:${e.name}`,
        children: e.name
    }, `tag:${e.name}`), ...e.operations.map(I)]
}

function I(e) {
    return (0, V.jsxs)(`option`, {
        value: `operation:${e.id}`,
        children: [e.method.toUpperCase(), ` `, e.summary]
    }, `operation:${e.id}`)
}

function ce(e) {
    return e.sections
}

function le(e) {
    return e.sections.length > 0
}

function L(e) {
    if (!e.ok) throw Error(`Could not load API reference (${e.status})`);
    return e.json()
}

function R() {
    return new Set
}
var z, B, V, H, U, W, G = e((() => {
    z = o(), g(), n(), l(), B = t(i()), c(), m(), u(), V = s(), H = new Set([`delete`, `get`, `head`, `options`, `patch`, `post`, `put`]), U = {
        a: ({
            children: e,
            href: t
        }) => (0, V.jsx)(`a`, {
            className: `text-[#2463c5] underline decoration-[#b6cff7] underline-offset-2 hover:decoration-[#2463c5]`,
            href: t,
            children: e
        }),
        blockquote: ({
            children: e
        }) => (0, V.jsx)(`blockquote`, {
            className: `border-s-2 border-[#e7e7e7] ps-4 text-[#5d5d5d]`,
            children: e
        }),
        code: ({
            children: e,
            className: t
        }) => (0, V.jsx)(`code`, {
            className: [`rounded-[4px] border border-[#dedede] bg-[#f1f1f1] px-[0.3em] py-[0.1em] font-mono text-[0.88em] text-[#3c4043]`, t].filter(Boolean).join(` `),
            children: e
        }),
        h2: ({
            children: e
        }) => (0, V.jsx)(`h2`, {
            className: `mt-10 mb-4 text-[22px] font-semibold tracking-[-0.025em]`,
            children: e
        }),
        h3: ({
            children: e
        }) => (0, V.jsx)(`h3`, {
            className: `mt-8 mb-3 text-[18px] font-semibold tracking-[-0.02em]`,
            children: e
        }),
        li: ({
            children: e
        }) => (0, V.jsx)(`li`, {
            className: `ms-5 ps-1`,
            children: e
        }),
        ol: ({
            children: e
        }) => (0, V.jsx)(`ol`, {
            className: `my-4 list-decimal space-y-2`,
            children: e
        }),
        p: ({
            children: e
        }) => (0, V.jsx)(`p`, {
            className: `my-4`,
            children: e
        }),
        pre: ({
            children: e
        }) => (0, V.jsx)(`pre`, {
            className: `my-5 overflow-x-auto rounded-xl border border-[#e2e2e2] bg-[#f7f7f8] p-5 font-mono text-[12px] leading-6 text-[#0b3b8c] [&_code]:border-0 [&_code]:bg-transparent [&_code]:p-0 [&_code]:text-[#0b3b8c]!`,
            children: e
        }),
        strong: ({
            children: e
        }) => (0, V.jsx)(`strong`, {
            className: `font-semibold`,
            children: e
        }),
        ul: ({
            children: e
        }) => (0, V.jsx)(`ul`, {
            className: `my-4 list-disc space-y-2`,
            children: e
        })
    }, W = e => {
        "use forget";
        let t = (0, z.c)(11),
            {
                className: n,
                spec: r
            } = e,
            i = r != null,
            o = !i,
            s;
        t[0] === n ? s = t[1] : (s = [`interactive-button interactive-button-secondary interactive-outline-secondary flex h-9 items-center justify-center gap-2 rounded-lg px-3 text-[13px] font-medium`, n].filter(Boolean), t[0] = n, t[1] = s);
        let c = s.join(` `),
            l;
        t[2] !== i || t[3] !== r ? (l = e => {
            if (!i) {
                e.preventDefault();
                return
            }
            d(new Blob([JSON.stringify(r, null, 2) + `
`], {
                type: `application/json`
            }), `openapi.json`)
        }, t[2] = i, t[3] = r, t[4] = l) : l = t[4];
        let u, f;
        t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (u = (0, V.jsx)(h, {
            "aria-hidden": `true`,
            className: `icon-sm`
        }), f = (0, V.jsx)(a, {
            id: `chatgpt.admin_api_reference.openapi_download.button.label`,
            defaultMessage: `Download OpenAPI`
        }), t[5] = u, t[6] = f) : (u = t[5], f = t[6]);
        let p;
        return t[7] !== o || t[8] !== c || t[9] !== l ? (p = (0, V.jsxs)(`button`, {
            "aria-disabled": o,
            className: c,
            onClick: l,
            type: `button`,
            children: [u, f]
        }), t[7] = o, t[8] = c, t[9] = l, t[10] = p) : p = t[10], p
    }
}));
export {
    G as n, N as t
};
//# sourceMappingURL=d993e3db-fjaa2eypd8ycnz4y.js.map