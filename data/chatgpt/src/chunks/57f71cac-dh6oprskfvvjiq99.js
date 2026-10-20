import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    FRn as t,
    GWn as n,
    HWn as r,
    JWn as i,
    KWn as a,
    PRn as o,
    QWn as s,
    WWn as c,
    eGn as l,
    igt as u,
    nRn as d,
    ngt as f,
    qWn as p,
    rGn as m,
    tGn as h,
    tRn as g
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    n as _,
    t as ee
} from "./5798741d-gy694h0dvfqm8xpx.js";

function te(e, t, n, r) {
    return r.settings.bogusComments ? `<?` + u(e.value, Object.assign({}, r.settings.characterReferences, {
        subset: y
    })) + `>` : `<!--` + e.value.replace(v, i) + `-->`;

    function i(e) {
        return u(e, Object.assign({}, r.settings.characterReferences, {
            subset: b
        }))
    }
}
var v, y, b, ne = e((() => {
    f(), v = /^>|^->|<!--|-->|--!>|<!-$/g, y = [`>`], b = [`<`, `>`]
}));

function re(e, t, n, r) {
    return `<!` + (r.settings.upperDoctype ? `DOCTYPE` : `doctype`) + (r.settings.tightDoctype ? `` : ` `) + `html>`
}
var ie = e((() => {}));

function x(e) {
    return t;

    function t(t, n, r) {
        let i = t ? t.children : w,
            a = (n || 0) + e,
            o = i[a];
        if (!r)
            for (; o && l(o);) a += e, o = i[a];
        return o
    }
}
var S, C, w, T = e((() => {
    s(), S = x(1), C = x(-1), w = []
}));

function E(e) {
    return t;

    function t(t, n, r) {
        return D.call(e, t.tagName) && e[t.tagName](t, n, r)
    }
}
var D, O = e((() => {
    D = {}.hasOwnProperty
}));

function k(e, t, n) {
    let r = S(n, t, !0);
    return !r || r.type !== `comment` && !(r.type === `text` && l(r.value.charAt(0)))
}

function ae(e, t, n) {
    let r = S(n, t);
    return !r || r.type !== `comment`
}

function oe(e, t, n) {
    let r = S(n, t);
    return !r || r.type !== `comment`
}

function se(e, t, n) {
    let r = S(n, t);
    return r ? r.type === `element` && (r.tagName === `address` || r.tagName === `article` || r.tagName === `aside` || r.tagName === `blockquote` || r.tagName === `details` || r.tagName === `div` || r.tagName === `dl` || r.tagName === `fieldset` || r.tagName === `figcaption` || r.tagName === `figure` || r.tagName === `footer` || r.tagName === `form` || r.tagName === `h1` || r.tagName === `h2` || r.tagName === `h3` || r.tagName === `h4` || r.tagName === `h5` || r.tagName === `h6` || r.tagName === `header` || r.tagName === `hgroup` || r.tagName === `hr` || r.tagName === `main` || r.tagName === `menu` || r.tagName === `nav` || r.tagName === `ol` || r.tagName === `p` || r.tagName === `pre` || r.tagName === `section` || r.tagName === `table` || r.tagName === `ul`) : !n || !(n.type === `element` && (n.tagName === `a` || n.tagName === `audio` || n.tagName === `del` || n.tagName === `ins` || n.tagName === `map` || n.tagName === `noscript` || n.tagName === `video`))
}

function ce(e, t, n) {
    let r = S(n, t);
    return !r || r.type === `element` && r.tagName === `li`
}

function le(e, t, n) {
    let r = S(n, t);
    return !!(r && r.type === `element` && (r.tagName === `dt` || r.tagName === `dd`))
}

function ue(e, t, n) {
    let r = S(n, t);
    return !r || r.type === `element` && (r.tagName === `dt` || r.tagName === `dd`)
}

function A(e, t, n) {
    let r = S(n, t);
    return !r || r.type === `element` && (r.tagName === `rp` || r.tagName === `rt`)
}

function de(e, t, n) {
    let r = S(n, t);
    return !r || r.type === `element` && r.tagName === `optgroup`
}

function j(e, t, n) {
    let r = S(n, t);
    return !r || r.type === `element` && (r.tagName === `option` || r.tagName === `optgroup`)
}

function M(e, t, n) {
    let r = S(n, t);
    return !!(r && r.type === `element` && (r.tagName === `tbody` || r.tagName === `tfoot`))
}

function N(e, t, n) {
    let r = S(n, t);
    return !r || r.type === `element` && (r.tagName === `tbody` || r.tagName === `tfoot`)
}

function P(e, t, n) {
    return !S(n, t)
}

function F(e, t, n) {
    let r = S(n, t);
    return !r || r.type === `element` && r.tagName === `tr`
}

function I(e, t, n) {
    let r = S(n, t);
    return !r || r.type === `element` && (r.tagName === `td` || r.tagName === `th`)
}
var L, R = e((() => {
    s(), T(), O(), L = E({
        body: oe,
        caption: k,
        colgroup: k,
        dd: ue,
        dt: le,
        head: k,
        html: ae,
        li: ce,
        optgroup: de,
        option: j,
        p: se,
        rp: A,
        rt: A,
        tbody: N,
        td: I,
        tfoot: P,
        th: I,
        thead: M,
        tr: F
    })
}));

function z(e) {
    let t = S(e, -1);
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
    let t = S(e, -1, !0);
    return !t || t.type !== `comment` && !(t.type === `text` && l(t.value.charAt(0))) && !(t.type === `element` && (t.tagName === `meta` || t.tagName === `link` || t.tagName === `script` || t.tagName === `style` || t.tagName === `template`))
}

function H(e, t, n) {
    let r = C(n, t),
        i = S(e, -1, !0);
    return n && r && r.type === `element` && r.tagName === `colgroup` && L(r, n.children.indexOf(r), n) ? !1 : !!(i && i.type === `element` && i.tagName === `col`)
}

function fe(e, t, n) {
    let r = C(n, t),
        i = S(e, -1);
    return n && r && r.type === `element` && (r.tagName === `thead` || r.tagName === `tbody`) && L(r, n.children.indexOf(r), n) ? !1 : !!(i && i.type === `element` && i.tagName === `tr`)
}
var U, pe = e((() => {
    s(), T(), R(), O(), U = E({
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
    i.space === `html` && e.tagName === `svg` && (r.schema = p);
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

function ge(e, t, n) {
    let r = i(e.schema, t),
        a = e.settings.allowParseErrors && e.schema.space === `html` ? 0 : 1,
        o = +!e.settings.allowDangerousCharacters,
        s = e.quote,
        l;
    if (r.overloadedBoolean && (n === r.attribute || n === ``) ? n = !0 : (r.boolean || r.overloadedBoolean && typeof n != `string`) && (n = !!n), n == null || n === !1 || typeof n == `number` && Number.isNaN(n)) return ``;
    let d = u(r.attribute, Object.assign({}, e.settings.characterReferences, {
        subset: W.name[a][o]
    }));
    return n === !0 || (n = Array.isArray(n) ? (r.commaSeparated ? m : c)(n, {
        padLeft: !e.settings.tightCommaSeparatedLists
    }) : String(n), e.settings.collapseEmptyAttributes && !n) ? d : (e.settings.preferUnquoted && (l = u(n, Object.assign({}, e.settings.characterReferences, {
        attribute: !0,
        subset: W.unquoted[a][o]
    }))), l !== n && (e.settings.quoteSmart && g(n, s) > g(n, e.alternative) && (s = e.alternative), l = s + u(n, Object.assign({}, e.settings.characterReferences, {
        subset: (s === `'` ? W.single : W.double)[a][o],
        attribute: !0
    })) + s), d + (l && `=` + l))
}
var W, _e = e((() => {
    d(), h(), a(), r(), f(), R(), pe(), W = {
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
    return n && n.type === `element` && (n.tagName === `script` || n.tagName === `style`) ? e.value : u(e.value, Object.assign({}, r.settings.characterReferences, {
        subset: K
    }))
}
var K, q = e((() => {
    f(), K = [`<`, `&`]
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
    o(), ne(), ie(), _e(), ye(), xe(), q(), J = t(`type`, {
        invalid: Se,
        unknown: Ce,
        handlers: {
            comment: te,
            doctype: re,
            element: me,
            raw: ve,
            root: be,
            text: G
        }
    })
}));

function Y(e, t) {
    let r = t || X,
        i = r.quote || `"`,
        a = i === `"` ? `'` : `"`;
    if (i !== `"` && i !== `'`) throw Error("Invalid quote `" + i + "`, expected `'` or `\"`");
    return {
        one: Te,
        all: Ee,
        settings: {
            omitOptionalTags: r.omitOptionalTags || !1,
            allowParseErrors: r.allowParseErrors || !1,
            allowDangerousCharacters: r.allowDangerousCharacters || !1,
            quoteSmart: r.quoteSmart || !1,
            preferUnquoted: r.preferUnquoted || !1,
            tightAttributes: r.tightAttributes || !1,
            upperDoctype: r.upperDoctype || !1,
            tightDoctype: r.tightDoctype || !1,
            bogusComments: r.bogusComments || !1,
            tightCommaSeparatedLists: r.tightCommaSeparatedLists || !1,
            tightSelfClosing: r.tightSelfClosing || !1,
            collapseEmptyAttributes: r.collapseEmptyAttributes || !1,
            allowDangerousHtml: r.allowDangerousHtml || !1,
            voids: r.voids || ee,
            characterReferences: r.characterReferences || Z,
            closeSelfClosing: r.closeSelfClosing || !1,
            closeEmptyElements: r.closeEmptyElements || !1
        },
        schema: r.space === `svg` ? p : n,
        quote: i,
        alternative: a
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
        _(), a(), we(), X = {}, Z = {}, Q = []
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
//# sourceMappingURL=57f71cac-dh6oprskfvvjiq99.js.map