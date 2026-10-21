import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    CGn as t,
    Qht as n,
    SRn as r,
    bGn as i,
    cGn as a,
    dGn as o,
    egt as s,
    ezn as c,
    fGn as l,
    mGn as u,
    pGn as d,
    tzn as f,
    uGn as ee,
    vGn as p,
    xGn as te,
    xRn as m
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    n as ne,
    t as h
} from "./5798741d-gy694h0dvfqm8xpx.js";

function g(e, t, n, r) {
    return r.settings.bogusComments ? `<?` + s(e.value, Object.assign({}, r.settings.characterReferences, {
        subset: v
    })) + `>` : `<!--` + e.value.replace(_, i) + `-->`;

    function i(e) {
        return s(e, Object.assign({}, r.settings.characterReferences, {
            subset: y
        }))
    }
}
var _, v, y, re = e((() => {
    n(), _ = /^>|^->|<!--|-->|--!>|<!-$/g, v = [`>`], y = [`<`, `>`]
}));

function ie(e, t, n, r) {
    return `<!` + (r.settings.upperDoctype ? `DOCTYPE` : `doctype`) + (r.settings.tightDoctype ? `` : ` `) + `html>`
}
var ae = e((() => {}));

function b(e) {
    return t;

    function t(t, n, r) {
        let a = t ? t.children : C,
            o = (n || 0) + e,
            s = a[o];
        if (!r)
            for (; s && i(s);) o += e, s = a[o];
        return s
    }
}
var x, S, C, w = e((() => {
    p(), x = b(1), S = b(-1), C = []
}));

function T(e) {
    return t;

    function t(t, n, r) {
        return E.call(e, t.tagName) && e[t.tagName](t, n, r)
    }
}
var E, D = e((() => {
    E = {}.hasOwnProperty
}));

function O(e, t, n) {
    let r = x(n, t, !0);
    return !r || r.type !== `comment` && !(r.type === `text` && i(r.value.charAt(0)))
}

function oe(e, t, n) {
    let r = x(n, t);
    return !r || r.type !== `comment`
}

function se(e, t, n) {
    let r = x(n, t);
    return !r || r.type !== `comment`
}

function ce(e, t, n) {
    let r = x(n, t);
    return r ? r.type === `element` && (r.tagName === `address` || r.tagName === `article` || r.tagName === `aside` || r.tagName === `blockquote` || r.tagName === `details` || r.tagName === `div` || r.tagName === `dl` || r.tagName === `fieldset` || r.tagName === `figcaption` || r.tagName === `figure` || r.tagName === `footer` || r.tagName === `form` || r.tagName === `h1` || r.tagName === `h2` || r.tagName === `h3` || r.tagName === `h4` || r.tagName === `h5` || r.tagName === `h6` || r.tagName === `header` || r.tagName === `hgroup` || r.tagName === `hr` || r.tagName === `main` || r.tagName === `menu` || r.tagName === `nav` || r.tagName === `ol` || r.tagName === `p` || r.tagName === `pre` || r.tagName === `section` || r.tagName === `table` || r.tagName === `ul`) : !n || !(n.type === `element` && (n.tagName === `a` || n.tagName === `audio` || n.tagName === `del` || n.tagName === `ins` || n.tagName === `map` || n.tagName === `noscript` || n.tagName === `video`))
}

function le(e, t, n) {
    let r = x(n, t);
    return !r || r.type === `element` && r.tagName === `li`
}

function ue(e, t, n) {
    let r = x(n, t);
    return !!(r && r.type === `element` && (r.tagName === `dt` || r.tagName === `dd`))
}

function de(e, t, n) {
    let r = x(n, t);
    return !r || r.type === `element` && (r.tagName === `dt` || r.tagName === `dd`)
}

function k(e, t, n) {
    let r = x(n, t);
    return !r || r.type === `element` && (r.tagName === `rp` || r.tagName === `rt`)
}

function A(e, t, n) {
    let r = x(n, t);
    return !r || r.type === `element` && r.tagName === `optgroup`
}

function j(e, t, n) {
    let r = x(n, t);
    return !r || r.type === `element` && (r.tagName === `option` || r.tagName === `optgroup`)
}

function M(e, t, n) {
    let r = x(n, t);
    return !!(r && r.type === `element` && (r.tagName === `tbody` || r.tagName === `tfoot`))
}

function N(e, t, n) {
    let r = x(n, t);
    return !r || r.type === `element` && (r.tagName === `tbody` || r.tagName === `tfoot`)
}

function P(e, t, n) {
    return !x(n, t)
}

function F(e, t, n) {
    let r = x(n, t);
    return !r || r.type === `element` && r.tagName === `tr`
}

function I(e, t, n) {
    let r = x(n, t);
    return !r || r.type === `element` && (r.tagName === `td` || r.tagName === `th`)
}
var L, R = e((() => {
    p(), w(), D(), L = T({
        body: se,
        caption: O,
        colgroup: O,
        dd: de,
        dt: ue,
        head: O,
        html: oe,
        li: le,
        optgroup: A,
        option: j,
        p: ce,
        rp: k,
        rt: k,
        tbody: N,
        td: I,
        tfoot: P,
        th: I,
        thead: M,
        tr: F
    })
}));

function z(e) {
    let t = x(e, -1);
    return !t || t.type !== `comment`
}

function B(e) {
    let t = new Set;
    for (let n of e.children)
        if (n.type === `element` && (n.tagName === `base` || n.tagName === `title`)) {
            if (t.has(n.tagName)) return !1;
            t.add(n.tagName)
        } let n = e.children[0];
    return !n || n.type === `element`
}

function V(e) {
    let t = x(e, -1, !0);
    return !t || t.type !== `comment` && !(t.type === `text` && i(t.value.charAt(0))) && !(t.type === `element` && (t.tagName === `meta` || t.tagName === `link` || t.tagName === `script` || t.tagName === `style` || t.tagName === `template`))
}

function H(e, t, n) {
    let r = S(n, t),
        i = x(e, -1, !0);
    return n && r && r.type === `element` && r.tagName === `colgroup` && L(r, n.children.indexOf(r), n) ? !1 : !!(i && i.type === `element` && i.tagName === `col`)
}

function fe(e, t, n) {
    let r = S(n, t),
        i = x(e, -1);
    return n && r && r.type === `element` && (r.tagName === `thead` || r.tagName === `tbody`) && L(r, n.children.indexOf(r), n) ? !1 : !!(i && i.type === `element` && i.tagName === `tr`)
}
var U, pe = e((() => {
    p(), w(), R(), D(), U = T({
        body: V,
        colgroup: H,
        head: B,
        html: z,
        tbody: fe
    })
}));

function me(e, t, n, r) {
    let i = r.schema,
        a = i.space !== `svg` && r.settings.omitOptionalTags,
        o = i.space === `svg` ? r.settings.closeEmptyElements : r.settings.voids.includes(e.tagName.toLowerCase()),
        s = [],
        c;
    i.space === `html` && e.tagName === `svg` && (r.schema = d);
    let l = he(r, e.properties),
        u = r.all(i.space === `html` && e.tagName === `template` ? e.content : e);
    return r.schema = i, u && (o = !1), (l || !a || !U(e, t, n)) && (s.push(`<`, e.tagName, l ? ` ` + l : ``), o && (i.space === `svg` || r.settings.closeSelfClosing) && (c = l.charAt(l.length - 1), (!r.settings.tightSelfClosing || c === `/` || c && c !== `"` && c !== `'`) && s.push(` `), s.push(`/`)), s.push(`>`)), s.push(u), !o && (!a || !L(e, t, n)) && s.push(`</` + e.tagName + `>`), s.join(``)
}

function he(e, t) {
    let n = [],
        r = -1,
        i;
    if (t) {
        for (i in t)
            if (t[i] !== null && t[i] !== void 0) {
                let r = ge(e, i, t[i]);
                r && n.push(r)
            }
    }
    for (; ++r < n.length;) {
        let t = e.settings.tightAttributes ? n[r].charAt(n[r].length - 1) : void 0;
        r !== n.length - 1 && t !== `"` && t !== `'` && (n[r] += ` `)
    }
    return n.join(``)
}

function ge(e, n, r) {
    let i = u(e.schema, n),
        a = e.settings.allowParseErrors && e.schema.space === `html` ? 0 : 1,
        o = +!e.settings.allowDangerousCharacters,
        c = e.quote,
        l;
    if (i.overloadedBoolean && (r === i.attribute || r === ``) ? r = !0 : (i.boolean || i.overloadedBoolean && typeof r != `string`) && (r = !!r), r == null || r === !1 || typeof r == `number` && Number.isNaN(r)) return ``;
    let d = s(i.attribute, Object.assign({}, e.settings.characterReferences, {
        subset: W.name[a][o]
    }));
    return r === !0 || (r = Array.isArray(r) ? (i.commaSeparated ? t : ee)(r, {
        padLeft: !e.settings.tightCommaSeparatedLists
    }) : String(r), e.settings.collapseEmptyAttributes && !r) ? d : (e.settings.preferUnquoted && (l = s(r, Object.assign({}, e.settings.characterReferences, {
        attribute: !0,
        subset: W.unquoted[a][o]
    }))), l !== r && (e.settings.quoteSmart && m(r, c) > m(r, e.alternative) && (c = e.alternative), l = c + s(r, Object.assign({}, e.settings.characterReferences, {
        subset: (c === `'` ? W.single : W.double)[a][o],
        attribute: !0
    })) + c), d + (l && `=` + l))
}
var W, _e = e((() => {
    r(), te(), l(), a(), n(), R(), pe(), W = {
        name: [
            [`	
\f\r &/=>`.split(``), `	
\f\r "&'/=>\``.split(``)],
            [`\0	
\f\r "&'/<=>`.split(``), `\0	
\f\r "&'/<=>\``.split(``)]
        ],
        unquoted: [
            [`	
\f\r &>`.split(``), `\0	
\f\r "&'<=>\``.split(``)],
            [`\0	
\f\r "&'<=>\``.split(``), `\0	
\f\r "&'<=>\``.split(``)]
        ],
        single: [
            [`&'`.split(``), `"&'\``.split(``)],
            [`\0&'`.split(``), `\0"&'\``.split(``)]
        ],
        double: [
            [`"&`.split(``), `"&'\``.split(``)],
            [`\0"&`.split(``), `\0"&'\``.split(``)]
        ]
    }
}));

function G(e, t, n, r) {
    return n && n.type === `element` && (n.tagName === `script` || n.tagName === `style`) ? e.value : s(e.value, Object.assign({}, r.settings.characterReferences, {
        subset: K
    }))
}
var K, q = e((() => {
    n(), K = [`<`, `&`]
}));

function ve(e, t, n, r) {
    return r.settings.allowDangerousHtml ? e.value : G(e, t, n, r)
}
var ye = e((() => {
    q()
}));

function be(e, t, n, r) {
    return r.all(e)
}
var xe = e((() => {}));

function Se(e) {
    throw Error("Expected node, not `" + e + "`")
}

function Ce(e) {
    throw Error("Cannot compile unknown node `" + e.type + "`")
}
var J, we = e((() => {
    c(), re(), ae(), _e(), ye(), xe(), q(), J = f(`type`, {
        invalid: Se,
        unknown: Ce,
        handlers: {
            comment: g,
            doctype: ie,
            element: me,
            raw: ve,
            root: be,
            text: G
        }
    })
}));

function Y(e, t) {
    let n = t || X,
        r = n.quote || `"`,
        i = r === `"` ? `'` : `"`;
    if (r !== `"` && r !== `'`) throw Error("Invalid quote `" + r + "`, expected `'` or `\"`");
    return {
        one: Te,
        all: Ee,
        settings: {
            omitOptionalTags: n.omitOptionalTags || !1,
            allowParseErrors: n.allowParseErrors || !1,
            allowDangerousCharacters: n.allowDangerousCharacters || !1,
            quoteSmart: n.quoteSmart || !1,
            preferUnquoted: n.preferUnquoted || !1,
            tightAttributes: n.tightAttributes || !1,
            upperDoctype: n.upperDoctype || !1,
            tightDoctype: n.tightDoctype || !1,
            bogusComments: n.bogusComments || !1,
            tightCommaSeparatedLists: n.tightCommaSeparatedLists || !1,
            tightSelfClosing: n.tightSelfClosing || !1,
            collapseEmptyAttributes: n.collapseEmptyAttributes || !1,
            allowDangerousHtml: n.allowDangerousHtml || !1,
            voids: n.voids || h,
            characterReferences: n.characterReferences || Z,
            closeSelfClosing: n.closeSelfClosing || !1,
            closeEmptyElements: n.closeEmptyElements || !1
        },
        schema: n.space === `svg` ? d : o,
        quote: r,
        alternative: i
    }.one(Array.isArray(e) ? {
        type: `root`,
        children: e
    } : e, void 0, void 0)
}

function Te(e, t, n) {
    return J(e, t, n, this)
}

function Ee(e) {
    let t = [],
        n = e && e.children || Q,
        r = -1;
    for (; ++r < n.length;) t[r] = this.one(n[r], r, e);
    return t.join(``)
}
var X, Z, Q, De = e((() => {
        ne(), l(), we(), X = {}, Z = {}, Q = []
    })),
    Oe = e((() => {
        De()
    }));

function ke(e) {
    let t = this,
        n = {
            ...t.data(`settings`),
            ...e
        };
    t.compiler = r;

    function r(e) {
        return Y(e, n)
    }
}
var $ = e((() => {
        Oe()
    })),
    Ae = e((() => {
        $()
    }));
export {
    $ as n, ke as r, Ae as t
};
//# sourceMappingURL=57f71cac-atkxzgofakk7u2h3.js.map