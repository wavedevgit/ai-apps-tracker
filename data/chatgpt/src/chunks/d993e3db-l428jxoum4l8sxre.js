import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Fh as n,
    Ph as r
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as i,
    Nn as a,
    Rn as o,
    Vn as s,
    wn as c
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    AGn as l,
    IGn as u,
    LGn as d,
    OGn as f,
    PGn as ee,
    URn as p,
    VRn as m,
    _Gn as h,
    aGn as g,
    aKn as _,
    bGn as v,
    cGn as y,
    cwn as b,
    hGn as x,
    lGn as S,
    lwn as C,
    uGn as w,
    vGn as T,
    zGn as E
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    $y as D,
    Qy as O
} from "./30901919-s8bko9nrkqwv6i4f.js";

function k(e, t) {
    return e && `run` in e ? async function(n, r) {
        let i = h(n, {
            file: r,
            ...t
        });
        await e.run(i, r)
    }: function(n, r) {
        return h(n, {
            file: r,
            ...e || t
        })
    }
}
var A = e((() => {
        x()
    })),
    j = e((() => {
        A()
    }));

function M(e) {
    let t = e.allowedElements,
        n = e.allowElement,
        r = e.children || ``,
        i = e.className,
        a = e.components,
        o = e.disallowedElements,
        s = e.rehypePlugins || F,
        c = e.remarkPlugins || F,
        d = e.remarkRehypeOptions ? {
            ...e.remarkRehypeOptions,
            ...I
        } : I,
        f = e.skipHtml,
        ee = e.unwrapDisallowed,
        p = e.urlTransform || N,
        m = y().use(l).use(c).use(k, d).use(s),
        h = new w;
    typeof r == `string` ? h.value = r : `` + r;
    for (let t of R) Object.hasOwn(e, t.from) && `` + t.from + (t.to ? "use `" + t.to + "` instead" : `remove it`) + t.id;
    let g = m.parse(h),
        _ = m.runSync(g, h);
    return i && (_ = {
        type: `element`,
        tagName: `div`,
        properties: {
            className: i
        },
        children: _.type === `root` ? _.children : [_]
    }), v(_, b), E(_, {
        Fragment: P.Fragment,
        components: a,
        ignoreInvalidStyle: !0,
        jsx: P.jsx,
        jsxs: P.jsxs,
        passKeys: !0,
        passNode: !0
    });

    function b(e, r, i) {
        if (e.type === `raw` && i && typeof r == `number`) return f ? i.children.splice(r, 1) : i.children[r] = {
            type: `text`,
            value: e.value
        }, r;
        if (e.type === `element`) {
            let t;
            for (t in u)
                if (Object.hasOwn(u, t) && Object.hasOwn(e.properties, t)) {
                    let n = e.properties[t],
                        r = u[t];
                    (r === null || r.includes(e.tagName)) && (e.properties[t] = p(String(n || ``), t, e))
                }
        }
        if (e.type === `element`) {
            let a = t ? !t.includes(e.tagName) : o ? o.includes(e.tagName) : !1;
            if (!a && n && typeof r == `number` && (a = !n(e, r, i)), a && i && typeof r == `number`) return ee && e.children ? i.children.splice(r, 1, ...e.children) : i.children.splice(r, 1), r
        }
    }
}

function N(e) {
    let t = e.indexOf(`:`),
        n = e.indexOf(`?`),
        r = e.indexOf(`#`),
        i = e.indexOf(`/`);
    return t < 0 || i > -1 && t > i || n > -1 && t > n || r > -1 && t > r || L.test(e.slice(0, t)) ? e : ``
}
var P, F, I, L, R, z = e((() => {
        _(), d(), ee(), P = i(), f(), j(), g(), T(), S(), F = [], I = {
            allowDangerousHtml: !0
        }, L = /^(https?|ircs?|mailto|xmpp)$/i, R = [{
            from: `astPlugins`,
            id: `remove-buggy-html-in-markdown-parser`
        }, {
            from: `allowDangerousHtml`,
            id: `remove-buggy-html-in-markdown-parser`
        }, {
            from: `allowNode`,
            id: `replace-allownode-allowedtypes-and-disallowedtypes`,
            to: `allowElement`
        }, {
            from: `allowedTypes`,
            id: `replace-allownode-allowedtypes-and-disallowedtypes`,
            to: `allowedElements`
        }, {
            from: `disallowedTypes`,
            id: `replace-allownode-allowedtypes-and-disallowedtypes`,
            to: `disallowedElements`
        }, {
            from: `escapeHtml`,
            id: `remove-buggy-html-in-markdown-parser`
        }, {
            from: `includeElementIndex`,
            id: `#remove-includeelementindex`
        }, {
            from: `includeNodeIndex`,
            id: `change-includenodeindex-to-includeelementindex`
        }, {
            from: `linkTarget`,
            id: `remove-linktarget`
        }, {
            from: `plugins`,
            id: `change-plugins-to-remarkplugins`,
            to: `remarkPlugins`
        }, {
            from: `rawSourcePos`,
            id: `#remove-rawsourcepos`
        }, {
            from: `renderers`,
            id: `change-renderers-to-components`,
            to: `components`
        }, {
            from: `source`,
            id: `change-source-to-children`,
            to: `children`
        }, {
            from: `sourcePos`,
            id: `#remove-sourcepos`
        }, {
            from: `transformImageUri`,
            id: `#add-urltransform`,
            to: `urlTransform`
        }, {
            from: `transformLinkUri`,
            id: `#add-urltransform`,
            to: `urlTransform`
        }]
    })),
    B = e((() => {
        z()
    }));

function V(e) {
    return typeof e == `object` && !!e && !Array.isArray(e)
}

function H(e) {
    return typeof e == `string` ? e : void 0
}

function U(e) {
    return Array.isArray(e) ? e.filter(V) : []
}

function W(e) {
    return Array.isArray(e) ? e.filter(e => typeof e == `string`) : []
}

function G(e, t, n) {
    return H(n.operationId) ?? `${e}-${t}`.replaceAll(/[{}]/g, ``).replaceAll(/[^a-zA-Z0-9]+/g, `-`).replaceAll(/^-|-$/g, ``)
}

function K(e) {
    if (!V(e) || !V(e.paths)) return [];
    let t = [];
    for (let [n, r] of Object.entries(e.paths))
        if (V(r))
            for (let [e, i] of Object.entries(r)) {
                if (!we.has(e) || !V(i)) continue;
                let r = W(i.tags)[0] ?? `General`,
                    a = H(i.summary) ?? H(i.description) ?? n,
                    o = V(i.responses) ? Object.keys(i.responses) : [];
                t.push({
                    description: H(i.description),
                    id: G(e, n, i),
                    method: e,
                    parameters: U(i.parameters),
                    path: n,
                    requestBody: V(i.requestBody) ? i.requestBody : void 0,
                    responseCodes: o,
                    responses: V(i.responses) ? i.responses : {},
                    summary: a,
                    tag: r
                })
            }
    return t
}

function te(e, t) {
    let n = new Map;
    for (let e of t) {
        let t = n.get(e.tag) ?? [];
        t.push(e), n.set(e.tag, t)
    }
    let r = new Map;
    if (V(e))
        for (let t of U(e.tags)) {
            let e = H(t.name),
                n = H(t.description);
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
    if (V(e))
        for (let t of U(e[`x-tagGroups`])) {
            let e = H(t.name),
                n = W(t.tags);
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

function ne(e) {
    return !V(e) || !V(e.info) ? `OpenAI Admin API` : H(e.info.title) ?? `OpenAI Admin API`
}

function re(e) {
    if (!V(e)) return `https://api.chatgpt.com/v1`;
    let t = U(e.servers)[0];
    return H(t?.url) ?? `https://api.chatgpt.com/v1`
}

function ie(e) {
    "use forget";
    let t = (0, X.c)(3),
        {
            value: n
        } = e,
        r;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = [p], t[0] = r) : r = t[0];
    let i;
    return t[1] === n ? i = t[2] : (i = (0, Q.jsx)(M, {
        components: Te,
        remarkPlugins: r,
        children: n
    }), t[1] = n, t[2] = i), i
}

function ae(e) {
    return e.split(/(\x60[^\x60\n]+\x60)/g).map((e, t) => {
        let n = e.match(/^\x60([^\x60\n]+)\x60$/);
        return n ? (0, Q.jsx)(`code`, {
            className: `rounded-[4px] border border-[#dedede] bg-[#f1f1f1] px-[0.3em] py-[0.1em] font-mono text-[0.88em] text-[#3c4043]`,
            children: n[1]
        }, n[1] + `-` + t) : e
    })
}

function q(e, t) {
    if (!V(t)) return t;
    let n = H(t.$ref);
    if (!n?.startsWith(`#/`) || !V(e)) return t;
    let r = e;
    for (let e of n.slice(2).split(`/`)) {
        let t = e.replaceAll(`~1`, `/`).replaceAll(`~0`, `~`);
        if (!V(r)) return;
        r = r[t]
    }
    return r
}

function J(e) {
    if (`example` in e) return e.example;
    let t = e.examples;
    if (Array.isArray(t)) return t[0];
    if (!V(t)) return;
    let n = Object.values(t)[0];
    return V(n) && `value` in n ? n.value : n
}

function Y(e, t, n = 0) {
    if (n > 5) return;
    let r = q(e, t);
    if (!V(r)) return;
    let i = J(r);
    if (i !== void 0) return i;
    if (`default` in r) return r.default;
    let a = r.enum;
    if (Array.isArray(a) && a.length > 0) return a[0];
    for (let t of [`oneOf`, `anyOf`]) {
        let i = r[t];
        if (Array.isArray(i)) {
            let t = Y(e, i[0], n + 1);
            if (t !== void 0) return t
        }
    }
    if (Array.isArray(r.allOf)) {
        let t = r.allOf.map(t => Y(e, t, n + 1)).filter(e => e !== void 0),
            i = t.filter(V);
        if (i.length > 0) return Object.assign({}, ...i);
        if (t.length > 0) return t[0]
    }
    let o = r.properties;
    if (V(o)) {
        let t = {};
        for (let [r, i] of Object.entries(o).slice(0, 16)) {
            let a = Y(e, i, n + 1);
            a !== void 0 && (t[r] = a)
        }
        return t
    }
    let s = H(r.type);
    if (s === `array`) {
        let t = Y(e, r.items, n + 1);
        return t === void 0 ? [] : [t]
    }
    if (s === `boolean`) return !1;
    if (s === `integer` || s === `number`) return 0;
    if (s === `object`) return {};
    if (s === `string`) switch (H(r.format)) {
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

function oe(e, t, n) {
    let r = Object.entries(t.responses),
        [i, a] = r.find(([e]) => e === n) ?? r.find(([e]) => e.startsWith(`2`)) ?? r[0] ?? [`200`, {}],
        o = q(e, a);
    if (!V(o)) return {
        code: i
    };
    let s = o.content;
    if (!V(s)) return {
        code: i,
        description: H(o.description)
    };
    let c = V(s[`application/json`]) && s[`application/json`] || Object.values(s).find(V);
    if (!V(c)) return {
        code: i,
        description: H(o.description)
    };
    let l = J(c) ?? Y(e, c.schema) ?? Y(e, o.schema);
    return {
        body: l === void 0 ? void 0 : typeof l == `string` ? l : JSON.stringify(l, null, 2),
        code: i,
        description: H(o.description)
    }
}

function se(e, t) {
    let n = q(e, t.requestBody);
    if (!V(n) || !V(n.content)) return;
    let r = V(n.content[`application/json`]) && n.content[`application/json`] || Object.values(n.content).find(V);
    if (!V(r)) return;
    let i = J(r) ?? Y(e, r.schema);
    if (i !== void 0) return JSON.stringify(i, null, 2)
}

function ce(e) {
    let t = new Map;
    for (let n of e) {
        let e = H(n.in) ?? `other`,
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

function le() {
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

function ue(e, t, n) {
    let r = t.method.toUpperCase(),
        i = [`curl ${n}${t.path} \\`, `  --request ${r} \\`, `  --header "Authorization: Bearer $CHATGPT_ADMIN_API_KEY"`],
        a = se(e, t);
    return a !== void 0 && (i[i.length - 1] += ` \\`, i.push(`  --header "Content-Type: application/json" \\`, `  --data '${a.replaceAll(`'`,`'\\''`)}'`)), i.join(`
`)
}

function de(e) {
    "use forget";
    let t = (0, X.c)(3),
        {
            method: n
        } = e,
        r = `inline-flex min-w-14 justify-center rounded-md px-2 py-1 font-mono text-[11px] font-semibold uppercase ${n===`get`?`bg-[#e7f5ed] text-[#16794b]`:n===`delete`?`bg-[#fdeceb] text-[#b42318]`:`bg-[#eef2ff] text-[#4338ca]`}`,
        i;
    return t[0] !== n || t[1] !== r ? (i = (0, Q.jsx)(`span`, {
        className: r,
        children: n
    }), t[0] = n, t[1] = r, t[2] = i) : i = t[2], i
}

function fe(e) {
    "use forget";
    let t = (0, X.c)(10),
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
    t[4] !== a || t[5] !== o ? (u = (0, Q.jsx)(`svg`, {
        className: `h-4 w-4`,
        fill: `none`,
        viewBox: `0 0 16 16`,
        children: a ? (0, Q.jsx)(`path`, {
            d: `m4 4 8 8m0-8-8 8`,
            stroke: `currentColor`,
            strokeLinecap: `round`,
            strokeWidth: `1.7`
        }) : (0, Q.jsx)(`path`, {
            d: o ? `M11.5 4.5 4.5 11.5m0 0h5.25m-5.25 0V6.25` : `M4.5 11.5 11.5 4.5m0 0H6.25m5.25 0v5.25`,
            stroke: `currentColor`,
            strokeLinecap: `round`,
            strokeLinejoin: `round`,
            strokeWidth: `1.7`
        })
    }), t[4] = a, t[5] = o, t[6] = u) : u = t[6];
    let d;
    return t[7] !== l || t[8] !== u ? (d = (0, Q.jsx)(`span`, {
        "aria-hidden": `true`,
        className: l,
        children: u
    }), t[7] = l, t[8] = u, t[9] = d) : d = t[9], d
}

function pe() {
    "use forget";
    let e = (0, X.c)(1),
        t;
    return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, Q.jsx)(`svg`, {
        "aria-hidden": `true`,
        className: `h-3 w-3`,
        fill: `none`,
        viewBox: `0 0 12 12`,
        children: (0, Q.jsx)(`path`, {
            d: `m3.5 4.5 2.5 2.5 2.5-2.5`,
            stroke: `currentColor`,
            strokeLinecap: `round`,
            strokeWidth: `1.4`
        })
    }), e[0] = t) : t = e[0], t
}

function me(e) {
    "use forget";
    let t = (0, X.c)(76),
        {
            audience: n,
            spec: r,
            specUrl: i,
            labels: a,
            icons: o,
            downloadSpec: s
        } = e,
        [c, l] = (0, Z.useState)(),
        [u, d] = (0, Z.useState)(!1),
        [f, ee] = (0, Z.useState)(``),
        [p, m] = (0, Z.useState)(le),
        [h, g] = (0, Z.useState)(Ce),
        _, v;
    t[0] !== r || t[1] !== i ? (_ = () => {
        if (r != null || !i) return;
        let e = !1;
        return fetch(i, {
            credentials: `same-origin`
        }).then(Se).then(t => {
            e || l(t)
        }).catch(() => {
            e || d(!0)
        }), () => {
            e = !0
        }
    }, v = [r, i], t[0] = r, t[1] = i, t[2] = _, t[3] = v) : (_ = t[2], v = t[3]), (0, Z.useEffect)(_, v);
    let y = r ?? c,
        b;
    t[4] === y ? b = t[5] : (b = K(y), t[4] = y, t[5] = b);
    let x = b,
        S;
    t[6] !== x || t[7] !== y ? (S = te(y, x), t[6] = x, t[7] = y, t[8] = S) : S = t[8];
    let C = S,
        w, T;
    t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (w = () => {
        let e = () => {
            m(le())
        };
        return window.addEventListener(`hashchange`, e), () => window.removeEventListener(`hashchange`, e)
    }, T = [], t[9] = w, t[10] = T) : (w = t[9], T = t[10]), (0, Z.useEffect)(w, T);
    let E, D, O, k, A, j;
    if (t[11] !== n || t[12] !== h || t[13] !== s || t[14] !== o || t[15] !== a || t[16] !== u || t[17] !== C || t[18] !== x || t[19] !== f || t[20] !== p || t[21] !== y) {
        let e = f.trim().toLowerCase(),
            r = C.map(t => ({
                ...t,
                sections: t.sections.map(t => {
                    let n = (t.name + ` ` + (t.description ?? ``)).toLowerCase().includes(e);
                    return {
                        ...t,
                        operations: n ? t.operations : t.operations.filter(t => (t.summary + ` ` + t.path + ` ` + t.tag).toLowerCase().includes(e))
                    }
                }).filter(t => t.operations.length > 0 || (t.name + ` ` + (t.description ?? ``)).toLowerCase().includes(e))
            })).filter(xe),
            i = C.flatMap(be),
            c = p?.type === `tag` ? i.find(e => {
                let {
                    name: t
                } = e;
                return t === p.value
            }) : void 0,
            l = p?.type === `operation` ? x.find(e => {
                let {
                    id: t
                } = e;
                return t === p.value
            }) : p == null ? x[0] : void 0,
            d = re(y),
            _ = ne(y),
            v = l ? oe(y, l, p?.type === `operation` ? p.responseCode : void 0) : void 0,
            b = l ? ce(l.parameters) : [],
            S = c ? `tag:${c.name}` : l ? `operation:${l.id}` : ``,
            w;
        t[28] === Symbol.for(`react.memo_cache_sentinel`) ? (w = e => {
            g(t => {
                let n = new Set(t);
                return n.has(e) ? n.delete(e) : n.add(e), n
            })
        }, t[28] = w) : w = t[28];
        let T = w;
        D = `light font-oai fixed inset-0 flex h-screen min-h-screen w-screen flex-col overflow-hidden bg-white text-[#0d0d0d]`;
        let M;
        t[29] === Symbol.for(`react.memo_cache_sentinel`) ? (M = (0, Q.jsx)(`span`, {
            className: `shrink-0`,
            children: `Browse API reference`
        }), t[29] = M) : M = t[29];
        let N;
        t[30] === Symbol.for(`react.memo_cache_sentinel`) ? (N = e => {
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
        }, t[30] = N) : N = t[30];
        let P;
        t[31] === C ? P = t[32] : (P = C.map(_e), t[31] = C, t[32] = P);
        let F;
        t[33] !== S || t[34] !== P ? (F = (0, Q.jsxs)(`label`, {
            className: `flex items-center gap-3 text-[13px] font-semibold text-[#0d0d0d]`,
            children: [M, (0, Q.jsx)(`select`, {
                "aria-label": `Browse API reference`,
                className: `min-w-0 flex-1 rounded-lg border border-[#e5e5e5] bg-white px-3 py-2 text-[13px] font-normal text-[#0d0d0d] outline-none focus:border-[#8f8f8f]`,
                onChange: N,
                value: S,
                children: P
            })]
        }), t[33] = S, t[34] = P, t[35] = F) : F = t[35];
        let I;
        t[36] !== s || t[37] !== o || t[38] !== a || t[39] !== y ? (I = (0, Q.jsx)(Ee, {
            className: `w-full`,
            spec: y,
            labels: a,
            icons: o,
            downloadSpec: s
        }), t[36] = s, t[37] = o, t[38] = a, t[39] = y, t[40] = I) : I = t[40], t[41] !== F || t[42] !== I ? (O = (0, Q.jsxs)(`div`, {
            className: `space-y-3 border-b border-[#e7e7e7] bg-white px-4 py-3 lg:hidden`,
            children: [F, I]
        }), t[41] = F, t[42] = I, t[43] = O) : O = t[43], j = `flex min-h-0 flex-1`;
        let L;
        t[44] === Symbol.for(`react.memo_cache_sentinel`) ? (L = (0, Q.jsx)(`span`, {
            className: `text-[13px] font-semibold text-[#0d0d0d]`,
            children: `Admin API Reference`
        }), t[44] = L) : L = t[44];
        let R = `rounded-full border px-2 py-0.5 text-[10px] font-medium ${n===`internal`?`border-[#f4d899] bg-[#fffaf0] text-[#8a5a00]`:`border-[#bde4cc] bg-[#f2fbf5] text-[#16794b]`}`,
            z = n === `internal` ? a.signedIn : `Public`,
            B;
        t[45] !== R || t[46] !== z ? (B = (0, Q.jsxs)(`div`, {
            className: `flex items-center justify-between py-1`,
            children: [L, (0, Q.jsx)(`span`, {
                className: R,
                children: z
            })]
        }), t[45] = R, t[46] = z, t[47] = B) : B = t[47];
        let V;
        t[48] === Symbol.for(`react.memo_cache_sentinel`) ? (V = e => ee(e.target.value), t[48] = V) : V = t[48];
        let H;
        t[49] === f ? H = t[50] : (H = (0, Q.jsx)(`input`, {
            "aria-label": `Search API reference`,
            className: `w-full appearance-none border-0 bg-transparent p-0 text-[13px] text-[#0d0d0d] shadow-none outline-none placeholder:text-[#737373] focus:ring-0`,
            onChange: V,
            placeholder: `Search reference`,
            type: `text`,
            value: f
        }), t[49] = f, t[50] = H);
        let U;
        t[51] !== o.search || t[52] !== H ? (U = (0, Q.jsxs)(`label`, {
            className: `mt-4 flex h-9 items-center justify-between rounded-lg border border-[#e5e5e5] bg-white px-3 text-[#737373] transition-colors focus-within:border-[#8f8f8f]`,
            children: [H, o.search]
        }), t[51] = o.search, t[52] = H, t[53] = U) : U = t[53];
        let W;
        t[54] !== s || t[55] !== o || t[56] !== a || t[57] !== y ? (W = (0, Q.jsx)(Ee, {
            className: `mt-2 w-full`,
            spec: y,
            labels: a,
            icons: o,
            downloadSpec: s
        }), t[54] = s, t[55] = o, t[56] = a, t[57] = y, t[58] = W) : W = t[58];
        let G;
        t[59] !== B || t[60] !== U || t[61] !== W ? (G = (0, Q.jsxs)(`div`, {
            className: `mb-6 px-2.5`,
            children: [B, U, W]
        }), t[59] = B, t[60] = U, t[61] = W, t[62] = G) : G = t[62];
        let K = (0, Q.jsxs)(`nav`, {
            className: `min-h-0 flex-1 overflow-y-auto px-3 pt-4 pb-6`,
            children: [G, r.map(t => {
                let n = e.length > 0 || !h.has(t.name);
                return (0, Q.jsxs)(`div`, {
                    className: `mb-7`,
                    children: [(0, Q.jsxs)(`button`, {
                        "aria-expanded": n,
                        className: `mb-2 flex w-full items-center justify-between px-2.5 text-start text-[13px] font-semibold text-[#0d0d0d]`,
                        onClick: () => T(t.name),
                        type: `button`,
                        children: [(0, Q.jsx)(`span`, {
                            children: t.name
                        }), (0, Q.jsx)(`span`, {
                            className: `transition-transform ` + (n ? `rotate-0` : `-rotate-90`),
                            children: (0, Q.jsx)(pe, {})
                        })]
                    }), n && (0, Q.jsx)(`div`, {
                        className: `space-y-3`,
                        children: t.sections.map(e => (0, Q.jsxs)(`div`, {
                            className: `ms-2 border-s border-[#e7e7e7] ps-1.5`,
                            children: [(0, Q.jsx)(`a`, {
                                className: `mb-1 block rounded-md px-2 py-1 text-[12px] font-semibold transition-colors ` + (c?.name === e.name ? `bg-[#ececec] text-[#0d0d0d]` : `text-[#5d5d5d] hover:bg-[#f7f7f7] hover:text-[#0d0d0d]`),
                                href: `#tag/` + encodeURIComponent(e.name),
                                onClick: () => m({
                                    type: `tag`,
                                    value: e.name
                                }),
                                children: e.name
                            }), (0, Q.jsx)(`div`, {
                                className: `space-y-0.5`,
                                children: e.operations.map(e => (0, Q.jsxs)(`a`, {
                                    className: `flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-[13px] leading-5 transition-colors ` + (e.id === l?.id ? `bg-[#ececec] font-medium text-[#0d0d0d]` : `text-[#0d0d0d] hover:bg-[#f7f7f7]`),
                                    href: `#operation/` + encodeURIComponent(e.id),
                                    onClick: () => m({
                                        type: `operation`,
                                        value: e.id
                                    }),
                                    children: [(0, Q.jsx)(fe, {
                                        method: e.method
                                    }), (0, Q.jsx)(`span`, {
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
        t[63] === K ? E = t[64] : (E = (0, Q.jsx)(`aside`, {
            className: `hidden w-[272px] shrink-0 flex-col bg-white lg:flex`,
            children: K
        }), t[63] = K, t[64] = E), k = `min-w-0 flex-1 overflow-y-auto bg-white`, A = u ? (0, Q.jsxs)(`div`, {
            className: `mx-auto max-w-3xl px-8 py-16`,
            children: [(0, Q.jsx)(`h1`, {
                className: `text-3xl font-semibold`,
                children: `API reference unavailable`
            }), (0, Q.jsx)(`p`, {
                className: `text-token-text-secondary mt-3`,
                children: `We could not load the reference. Refresh the page to try again.`
            })]
        }) : y != null && p != null && !l && !c ? (0, Q.jsxs)(`div`, {
            className: `mx-auto max-w-3xl px-8 py-16`,
            children: [(0, Q.jsx)(`h1`, {
                className: `text-3xl font-semibold`,
                children: a.missingSectionHeading
            }), (0, Q.jsx)(`p`, {
                className: `text-token-text-secondary mt-3`,
                children: a.missingSectionHelpText
            })]
        }) : !l && !c ? (0, Q.jsxs)(`div`, {
            className: `mx-auto max-w-3xl px-8 py-16`,
            children: [(0, Q.jsx)(`div`, {
                className: `bg-token-bg-secondary mb-6 h-5 w-28 animate-pulse rounded`
            }), (0, Q.jsx)(`div`, {
                className: `bg-token-bg-secondary mb-4 h-10 w-2/3 animate-pulse rounded`
            }), (0, Q.jsx)(`div`, {
                className: `bg-token-bg-secondary h-4 w-full animate-pulse rounded`
            })]
        }) : c ? (0, Q.jsxs)(`article`, {
            className: `mx-auto max-w-[900px] px-6 py-6`,
            children: [(0, Q.jsxs)(`div`, {
                className: `mb-10 flex items-center gap-2 text-[13px] text-[#737373]`,
                children: [(0, Q.jsx)(`span`, {
                    children: `Admin API Reference`
                }), (0, Q.jsx)(`span`, {
                    children: `/`
                }), (0, Q.jsx)(`span`, {
                    children: c.name
                })]
            }), (0, Q.jsx)(`h1`, {
                className: `max-w-3xl text-[32px] leading-[1.15] font-semibold tracking-[-0.04em]`,
                children: c.name
            }), (0, Q.jsx)(`div`, {
                className: `mt-8 max-w-3xl text-[15px] leading-6 text-[#0d0d0d]`,
                children: (0, Q.jsx)(ie, {
                    value: c.description ?? `Endpoints for managing this part of the ` + _ + `.`
                })
            }), c.operations.length > 0 && (0, Q.jsxs)(`section`, {
                className: `mt-12 max-w-3xl`,
                children: [(0, Q.jsx)(`h2`, {
                    className: `mb-5 text-[20px] font-semibold tracking-[-0.025em]`,
                    children: `Endpoints`
                }), (0, Q.jsx)(`div`, {
                    className: `divide-y divide-[#e7e7e7] rounded-xl border border-[#e7e7e7]`,
                    children: c.operations.map(e => (0, Q.jsxs)(`a`, {
                        className: `flex items-center gap-3 px-4 py-3 text-[14px] transition-colors hover:bg-[#fafafa]`,
                        href: `#operation/` + encodeURIComponent(e.id),
                        onClick: () => m({
                            type: `operation`,
                            value: e.id
                        }),
                        children: [(0, Q.jsx)(fe, {
                            method: e.method
                        }), (0, Q.jsx)(`span`, {
                            children: e.summary
                        })]
                    }, e.id))
                })]
            })]
        }) : l ? (0, Q.jsxs)(`div`, {
            className: `grid grid-cols-1 xl:grid-cols-[minmax(0,584px)_minmax(460px,1fr)]`,
            children: [(0, Q.jsxs)(`article`, {
                className: `px-6 py-6`,
                children: [(0, Q.jsxs)(`div`, {
                    className: `mb-10 flex items-center gap-2 text-[13px] text-[#737373]`,
                    children: [(0, Q.jsx)(`span`, {
                        children: `Admin API Reference`
                    }), (0, Q.jsx)(`span`, {
                        children: `/`
                    }), (0, Q.jsx)(`span`, {
                        children: l.tag
                    })]
                }), (0, Q.jsx)(`h1`, {
                    className: `max-w-3xl text-[32px] leading-[1.15] font-semibold tracking-[-0.04em]`,
                    children: l.summary
                }), (0, Q.jsxs)(`div`, {
                    className: `mt-4 flex flex-wrap items-center gap-3`,
                    children: [(0, Q.jsx)(de, {
                        method: l.method
                    }), (0, Q.jsx)(`code`, {
                        className: `text-[13px] text-[#5d5d5d]`,
                        children: l.path
                    })]
                }), (0, Q.jsx)(`div`, {
                    className: `mt-12 max-w-3xl text-[15px] leading-6 text-[#0d0d0d]`,
                    children: (0, Q.jsx)(ie, {
                        value: l.description ?? `Use this endpoint in the ` + _ + ` to manage your organization programmatically.`
                    })
                }), b.map(he), l.requestBody && (0, Q.jsxs)(`section`, {
                    className: `mt-12`,
                    children: [(0, Q.jsx)(`h2`, {
                        className: `mb-4 text-[20px] font-semibold tracking-[-0.025em]`,
                        children: `Request body`
                    }), (0, Q.jsx)(`div`, {
                        className: `rounded-xl border border-[#e7e7e7] bg-[#fafafa] p-5 text-[14px] text-[#5d5d5d]`,
                        children: `Send a JSON object matching the request schema for this operation.`
                    })]
                }), (0, Q.jsxs)(`section`, {
                    className: `mt-12 pb-14`,
                    children: [(0, Q.jsx)(`h2`, {
                        className: `mb-5 text-[20px] font-semibold tracking-[-0.025em]`,
                        children: `Returns`
                    }), (0, Q.jsxs)(`div`, {
                        className: `rounded-xl border border-[#e7e7e7] p-5`,
                        children: [(0, Q.jsx)(`div`, {
                            className: `mb-3 flex flex-wrap gap-2`,
                            children: (l.responseCodes.length > 0 ? l.responseCodes : [`200`]).map(e => (0, Q.jsx)(`button`, {
                                "aria-pressed": v?.code === e,
                                className: `interactive-button rounded-md bg-[#e7f5ed] px-2 py-1 font-mono text-xs text-[#16794b] aria-pressed:bg-[#16794b] aria-pressed:text-white`,
                                onClick: () => m({
                                    responseCode: e,
                                    type: `operation`,
                                    value: l.id
                                }),
                                type: `button`,
                                children: e
                            }, e))
                        }), (0, Q.jsx)(`div`, {
                            className: `text-[14px] leading-6 text-[#5d5d5d]`,
                            children: ae(v?.description ?? `A successful response containing the requested Admin API resource.`)
                        })]
                    })]
                })]
            }), (0, Q.jsx)(`aside`, {
                className: `bg-white text-[#0d0d0d]`,
                children: (0, Q.jsxs)(`div`, {
                    className: `sticky top-0 px-6 py-[190px]`,
                    children: [(0, Q.jsxs)(`div`, {
                        className: `mb-5 flex items-center justify-between`,
                        children: [(0, Q.jsx)(`span`, {
                            className: `text-[13px] font-medium`,
                            children: `Example request`
                        }), (0, Q.jsx)(`span`, {
                            className: `rounded-md border border-[#e2e2e2] bg-[#f7f7f7] px-2 py-1 text-[11px] text-[#5d5d5d]`,
                            children: `curl`
                        })]
                    }), (0, Q.jsx)(`pre`, {
                        className: `overflow-x-auto rounded-xl border border-[#e2e2e2] bg-[#f7f7f8] p-5 font-mono text-[12px] leading-6 text-[#0b3b8c]`,
                        children: (0, Q.jsx)(`code`, {
                            children: ue(y, l, d)
                        })
                    }), (0, Q.jsxs)(`div`, {
                        className: `mt-9 mb-4 flex items-center justify-between`,
                        children: [(0, Q.jsx)(`span`, {
                            className: `text-[13px] font-medium`,
                            children: `Example response`
                        }), (0, Q.jsx)(`span`, {
                            className: `rounded-md border border-[#e2e2e2] bg-[#f7f7f7] px-2 py-1 font-mono text-[11px] text-[#5d5d5d]`,
                            children: v?.code ?? `200`
                        })]
                    }), (0, Q.jsx)(`pre`, {
                        className: `overflow-x-auto rounded-xl border border-[#e2e2e2] bg-[#f7f7f8] p-5 font-mono text-[12px] leading-6 text-[#0b3b8c]`,
                        children: (0, Q.jsx)(`code`, {
                            children: v?.body ?? `No response body.`
                        })
                    })]
                })
            })]
        }) : null, t[11] = n, t[12] = h, t[13] = s, t[14] = o, t[15] = a, t[16] = u, t[17] = C, t[18] = x, t[19] = f, t[20] = p, t[21] = y, t[22] = E, t[23] = D, t[24] = O, t[25] = k, t[26] = A, t[27] = j
    } else E = t[22], D = t[23], O = t[24], k = t[25], A = t[26], j = t[27];
    let M;
    t[65] !== k || t[66] !== A ? (M = (0, Q.jsx)(`main`, {
        className: k,
        children: A
    }), t[65] = k, t[66] = A, t[67] = M) : M = t[67];
    let N;
    t[68] !== E || t[69] !== M || t[70] !== j ? (N = (0, Q.jsxs)(`div`, {
        className: j,
        children: [E, M]
    }), t[68] = E, t[69] = M, t[70] = j, t[71] = N) : N = t[71];
    let P;
    return t[72] !== D || t[73] !== O || t[74] !== N ? (P = (0, Q.jsxs)(`div`, {
        className: D,
        children: [O, N]
    }), t[72] = D, t[73] = O, t[74] = N, t[75] = P) : P = t[75], P
}

function he(e) {
    return (0, Q.jsxs)(`section`, {
        className: `mt-12`,
        children: [(0, Q.jsx)(`h2`, {
            className: `mb-5 text-[20px] font-semibold tracking-[-0.025em]`,
            children: e.name
        }), (0, Q.jsx)(`div`, {
            className: `divide-y divide-[#e7e7e7] rounded-xl border border-[#e7e7e7]`,
            children: e.parameters.map(ge)
        })]
    }, e.name)
}

function ge(e, t) {
    let n = H(e.name) ?? `parameter-${t}`,
        r = e.required === !0,
        i = V(e.schema) ? e.schema : {};
    return (0, Q.jsxs)(`div`, {
        className: `grid gap-2 p-5 sm:grid-cols-[180px_1fr]`,
        children: [(0, Q.jsxs)(`div`, {
            children: [(0, Q.jsx)(`code`, {
                className: `text-sm font-semibold`,
                children: n
            }), r && (0, Q.jsx)(`span`, {
                className: `ms-2 text-xs text-[#b42318]`,
                children: `Required`
            })]
        }), (0, Q.jsxs)(`div`, {
            className: `text-[14px] leading-6 text-[#5d5d5d]`,
            children: [(0, Q.jsx)(`div`, {
                className: `mb-1 font-mono text-[12px] text-[#737373]`,
                children: H(i.type) ?? `string`
            }), ae(H(e.description) ?? `Identifier used by this endpoint.`)]
        })]
    }, n)
}

function _e(e) {
    return (0, Q.jsx)(`optgroup`, {
        label: e.name,
        children: e.sections.map(ve)
    }, e.name)
}

function ve(e) {
    return [(0, Q.jsx)(`option`, {
        value: `tag:${e.name}`,
        children: e.name
    }, `tag:${e.name}`), ...e.operations.map(ye)]
}

function ye(e) {
    return (0, Q.jsxs)(`option`, {
        value: `operation:${e.id}`,
        children: [e.method.toUpperCase(), ` `, e.summary]
    }, `operation:${e.id}`)
}

function be(e) {
    return e.sections
}

function xe(e) {
    return e.sections.length > 0
}

function Se(e) {
    if (!e.ok) throw Error(`Could not load API reference (${e.status})`);
    return e.json()
}

function Ce() {
    return new Set
}
var X, Z, Q, we, Te, Ee, De = e((() => {
    X = c(), Z = t(s(), 1), B(), m(), Q = i(), we = new Set([`delete`, `get`, `head`, `options`, `patch`, `post`, `put`]), Te = {
        a: ({
            children: e,
            href: t
        }) => (0, Q.jsx)(`a`, {
            className: `text-[#2463c5] underline decoration-[#b6cff7] underline-offset-2 hover:decoration-[#2463c5]`,
            href: t,
            children: e
        }),
        blockquote: ({
            children: e
        }) => (0, Q.jsx)(`blockquote`, {
            className: `border-s-2 border-[#e7e7e7] ps-4 text-[#5d5d5d]`,
            children: e
        }),
        code: ({
            children: e,
            className: t
        }) => (0, Q.jsx)(`code`, {
            className: [`rounded-[4px] border border-[#dedede] bg-[#f1f1f1] px-[0.3em] py-[0.1em] font-mono text-[0.88em] text-[#3c4043]`, t].filter(Boolean).join(` `),
            children: e
        }),
        h2: ({
            children: e
        }) => (0, Q.jsx)(`h2`, {
            className: `mt-10 mb-4 text-[22px] font-semibold tracking-[-0.025em]`,
            children: e
        }),
        h3: ({
            children: e
        }) => (0, Q.jsx)(`h3`, {
            className: `mt-8 mb-3 text-[18px] font-semibold tracking-[-0.02em]`,
            children: e
        }),
        li: ({
            children: e
        }) => (0, Q.jsx)(`li`, {
            className: `ms-5 ps-1`,
            children: e
        }),
        ol: ({
            children: e
        }) => (0, Q.jsx)(`ol`, {
            className: `my-4 list-decimal space-y-2`,
            children: e
        }),
        p: ({
            children: e
        }) => (0, Q.jsx)(`p`, {
            className: `my-4`,
            children: e
        }),
        pre: ({
            children: e
        }) => (0, Q.jsx)(`pre`, {
            className: `my-5 overflow-x-auto rounded-xl border border-[#e2e2e2] bg-[#f7f7f8] p-5 font-mono text-[12px] leading-6 text-[#0b3b8c] [&_code]:border-0 [&_code]:bg-transparent [&_code]:p-0 [&_code]:text-[#0b3b8c]!`,
            children: e
        }),
        strong: ({
            children: e
        }) => (0, Q.jsx)(`strong`, {
            className: `font-semibold`,
            children: e
        }),
        ul: ({
            children: e
        }) => (0, Q.jsx)(`ul`, {
            className: `my-4 list-disc space-y-2`,
            children: e
        })
    }, Ee = e => {
        "use forget";
        let t = (0, X.c)(12),
            {
                className: n,
                spec: r,
                labels: i,
                icons: a,
                downloadSpec: o
            } = e,
            s = r != null,
            c = !s,
            l;
        t[0] === n ? l = t[1] : (l = [`interactive-button interactive-button-secondary interactive-outline-secondary flex h-9 items-center justify-center gap-2 rounded-lg px-3 text-[13px] font-medium`, n].filter(Boolean), t[0] = n, t[1] = l);
        let u = l.join(` `),
            d;
        t[2] !== o || t[3] !== s || t[4] !== r ? (d = e => {
            if (!s) {
                e.preventDefault();
                return
            }
            o(r)
        }, t[2] = o, t[3] = s, t[4] = r, t[5] = d) : d = t[5];
        let f;
        return t[6] !== a.download || t[7] !== i.downloadOpenApi || t[8] !== c || t[9] !== u || t[10] !== d ? (f = (0, Q.jsxs)(`button`, {
            "aria-disabled": c,
            className: u,
            onClick: d,
            type: `button`,
            children: [a.download, i.downloadOpenApi]
        }), t[6] = a.download, t[7] = i.downloadOpenApi, t[8] = c, t[9] = u, t[10] = d, t[11] = f) : f = t[11], f
    }
}));

function Oe(e) {
    b(new Blob([JSON.stringify(e, null, 2) + `
`], {
        type: `application/json`
    }), `openapi.json`)
}

function ke(e) {
    "use forget";
    let t = (0, Ae.c)(4),
        r, i;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = {
        download: (0, $.jsx)(O, {
            "aria-hidden": `true`,
            className: `icon-sm`
        }),
        search: (0, $.jsx)(n, {
            className: `h-4 w-4 shrink-0`
        })
    }, i = {
        downloadOpenApi: (0, $.jsx)(a, {
            id: `chatgpt.admin_api_reference.openapi_download.button.label`,
            defaultMessage: `Download OpenAPI`
        }),
        signedIn: (0, $.jsx)(a, {
            id: `chatgpt.admin_api_reference.audience_badge.signed_in`,
            defaultMessage: `Signed in`
        }),
        missingSectionHeading: (0, $.jsx)(a, {
            id: `chatgpt.admin_api_reference.missing_section.heading`,
            defaultMessage: `Reference section not found`
        }),
        missingSectionHelpText: (0, $.jsx)(a, {
            id: `chatgpt.admin_api_reference.missing_section.help_text`,
            defaultMessage: `This link does not match a section in this reference. Choose a section from the navigation.`
        })
    }, t[0] = r, t[1] = i) : (r = t[0], i = t[1]);
    let o;
    return t[2] === e ? o = t[3] : (o = (0, $.jsx)(me, {
        ...e,
        downloadSpec: Oe,
        icons: r,
        labels: i
    }), t[2] = e, t[3] = o), o
}
var Ae, $, je = e((() => {
    Ae = c(), D(), r(), C(), De(), o(), $ = i()
}));
export {
    je as n, ke as t
};
//# sourceMappingURL=d993e3db-l428jxoum4l8sxre.js.map