import {
    n as e,
    r as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    CX as n,
    bQ as r,
    xX as i,
    yZ as a
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    $St as o,
    $Wn as s,
    CYt as ee,
    Ebt as te,
    Ght as c,
    JN as l,
    KWn as u,
    Kht as d,
    LGn as f,
    Obt as p,
    SYt as ne,
    Tbt as m,
    YN as re,
    YWn as h,
    Yht as ie,
    ZSt as ae,
    bYt as g,
    fGn as oe,
    iGn as _,
    lGn as v,
    mGn as y,
    nGn as b,
    oGn as x,
    qht as se,
    tGn as ce,
    uGn as le,
    xYt as ue,
    zGn as de
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    a as S,
    c as fe,
    i as C,
    n as w
} from "./92cd10e6-n0mh3y496ndel3zj.js";
import {
    r as T,
    t as E
} from "./57f71cac-c4cat5gv2l3jew0w.js";
var D, O = e((() => {
        m(), D = te(function(e) {
            return e.tagName === `audio` || e.tagName === `canvas` || e.tagName === `embed` || e.tagName === `iframe` || e.tagName === `img` || e.tagName === `math` || e.tagName === `object` || e.tagName === `picture` || e.tagName === `svg` || e.tagName === `video`
        })
    })),
    k = e((() => {
        O()
    })),
    A, j = e((() => {
        A = `address.article.aside.blockquote.body.br.caption.center.col.colgroup.dd.dialog.dir.div.dl.dt.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.legend.li.li.listing.main.menu.nav.ol.optgroup.option.p.plaintext.pre.section.summary.table.tbody.td.td.tfoot.th.th.thead.tr.ul.wbr.xmp`.split(`.`)
    })),
    M, N = e((() => {
        M = [`button`, `input`, `select`, `textarea`]
    })),
    P, F = e((() => {
        P = [`area`, `base`, `basefont`, `dialog`, `datalist`, `head`, `link`, `meta`, `noembed`, `noframes`, `param`, `rp`, `script`, `source`, `style`, `template`, `track`, `title`]
    }));

function I(e, t) {
    L(e, {
        collapse: he((t || K).newlines ? G : me),
        whitespace: `normal`
    })
}

function L(e, t) {
    if (`children` in e) {
        let n = {
            ...t
        };
        return (e.type === `root` || U(e)) && (n.before = !0, n.after = !0), n.whitespace = ge(e, t), z(e, n)
    }
    if (e.type === `text`) {
        if (t.whitespace === `normal`) return R(e, t);
        t.whitespace === `nowrap` && (e.value = t.collapse(e.value))
    }
    return {
        ignore: q(e),
        stripAtStart: !1,
        remove: !1
    }
}

function R(e, t) {
    let n = t.collapse(e.value),
        r = {
            ignore: !1,
            stripAtStart: !1,
            remove: !1
        },
        i = 0,
        a = n.length;
    return t.before && W(n.charAt(0)) && i++, i !== a && W(n.charAt(a - 1)) && (t.after ? a-- : r.stripAtStart = !0), i === a ? r.remove = !0 : e.value = n.slice(i, a), r
}

function z(e, t) {
    let n = t.before,
        r = t.after,
        i = e.children,
        a = i.length,
        o = -1;
    for (; ++o < a;) {
        let e = L(i[o], {
            ...t,
            after: B(i, o, r),
            before: n
        });
        e.remove ? (i.splice(o, 1), o--, a--) : e.ignore || (n = e.stripAtStart), H(i[o]) && (n = !1)
    }
    return {
        ignore: !1,
        stripAtStart: !!(n || r),
        remove: !1
    }
}

function B(e, t, n) {
    for (; ++t < e.length;) {
        let n = e[t],
            r = V(n);
        if (r === void 0 && `children` in n && !pe(n) && (r = B(n.children, -1)), typeof r == `boolean`) return r
    }
    return n
}

function V(e) {
    if (e.type === `element`) {
        if (H(e)) return !1;
        if (U(e)) return !0
    } else if (e.type === `text`) {
        if (!de(e)) return !1
    } else if (!q(e)) return !1
}

function H(e) {
    return D(e) || p(e, M)
}

function U(e) {
    return p(e, A)
}

function pe(e) {
    return !!(e.type === `element` && e.properties.hidden) || q(e) || p(e, P)
}

function W(e) {
    return e === ` ` || e === `
`
}

function G(e) {
    let t = /\r?\n|\r/.exec(e);
    return t ? t[0] : ` `
}

function me() {
    return ` `
}

function he(e) {
    return t;

    function t(t) {
        return String(t).replace(/[\t\n\v\f\r ]+/g, e)
    }
}

function ge(e, t) {
    if (`tagName` in e && e.properties) switch (e.tagName) {
        case `listing`:
        case `plaintext`:
        case `script`:
        case `style`:
        case `xmp`:
            return `pre`;
        case `nobr`:
            return `nowrap`;
        case `pre`:
            return e.properties.wrap ? `pre-wrap` : `pre`;
        case `td`:
        case `th`:
            return e.properties.noWrap ? `nowrap` : t.whitespace;
        case `textarea`:
            return `pre-wrap`;
        default:
    }
    return t.whitespace
}
var K, q, _e = e((() => {
        k(), m(), f(), v(), j(), N(), F(), K = {}, q = le([`comment`, `doctype`])
    })),
    ve = e((() => {
        _e()
    }));

function ye(e) {
    return function(t) {
        I(t, e)
    }
}
var be = e((() => {
        ve()
    })),
    xe = e((() => {
        be()
    })),
    Se = t({
        markdownWithContentReferenceDirectivesToHTML: () => Y,
        markdownWithContentReferenceDirectivesToMarkdown: () => J,
        messageTextToPlaintext: () => Ce,
        replaceContentReferenceDirectivesWithMarkdown: () => Z
    });

function Ce(e, t) {
    return d(J(i(e, t), t))
}

function J(e, t, n = {}) {
    let {
        markdown: r,
        shouldStripSeparators: i
    } = g(e), a = n.enableHighlight ? S : C, o = h().use(y).use(a).use([
        [Z, t ?? [], n.includeMcpSourceCitations]
    ]);
    n.preferBareUrlSelfLinks && o.use(Ee), o.use(ie, {
        rule: `-`,
        tightDefinitions: !0,
        handlers: {
            text: (e, t, r, i) => (e.value = e.value.replaceAll(`\\[`, `[`), n.preserveRenderedTableCells && r.stack.some(e => e === `tableCell`) && /[\\|<&]/.test(e.value) ? r.safe(e.value, i) : e.value),
            break: () => `
`,
            inlineMath: e => `\\(${e.value}\\)`,
            link: Q
        }
    });
    let s = o.processSync(r).toString();
    return i ? ee(s) : s
}

function Y(e, t, n = {}) {
    let {
        markdown: r,
        shouldStripSeparators: i
    } = g(e), a = n.enableHighlight ? S : C, o = h().use(y).use(a).use([
        [Z, t ?? [], n.includeMcpSourceCitations]
    ]);
    return n.preserveRenderedTableCells && o.use(we), o.use(ce).use(w).use(T).use(ye), i && o.use(ne), o.processSync(r).toString()
}

function we() {
    return e => {
        _(e, `tableCell`, e => {
            _(e, `html`, (e, t, n) => {
                if (e.value === `<br>` && n != null && t != null && n.children.splice(t, 1, {
                        type: `break`
                    }), e.value === `<code>` && n != null && t != null) {
                    let e = n.children[t + 1],
                        r = n.children[t + 2];
                    e?.type === `text` && r?.type === `html` && r.value === `</code>` && n.children.splice(t, 3, {
                        type: `inlineCode`,
                        value: e.value
                    })
                }
            })
        })
    }
}

function Te(e) {
    try {
        let t = new URL(e);
        return t.protocol === `http:` || t.protocol === `https:`
    } catch {
        return !1
    }
}

function Ee() {
    return e => {
        _(e, `link`, (e, t, n) => {
            if (t == null || n == null || e.title != null || e.children.length !== 1) return;
            let r = e.children[0];
            if (!(r?.type !== `text` || r.value !== e.url) && Te(e.url)) return n.children.splice(t, 1, {
                type: `text`,
                value: e.url
            }), [x, t]
        })
    }
}

function De(e) {
    return `%` + e.charCodeAt(0).toString(16).toUpperCase().padStart(2, `0`)
}

function X(e, t) {
    let n = e[t];
    if (typeof n != `string`) return null;
    let r = n.trim();
    return r.length > 0 ? r : null
}

function Oe(e) {
    if (e.type !== `client_defined_widget`) return null;
    let {
        category: t,
        data: n
    } = e;
    switch (t) {
        case `language_learning_block`: {
            let e = X(n, `content`);
            if (e == null) return null;
            let t = X(n, `intent`);
            if (n.presentation === `inline_anchor`) return e;
            let r = t === `translation` ? null : X(n, `pronunciation_hint`);
            return r == null ? e : `${e} (${r})`
        }
        case `pronunciation_block`: {
            let e = X(n, `content`);
            if (e == null) return null;
            let t = X(n, `pronunciation_hint`);
            return t == null ? e : `${e} (${t})`
        }
        case `translation_block`:
            return X(n, `translated_text`) ?? X(n, `content`);
        default:
            return null
    }
}

function ke(e, t) {
    return e.type === `textDirective` ? [{
        type: `text`,
        value: t
    }] : [{
        type: `paragraph`,
        children: [{
            type: `text`,
            value: t
        }]
    }]
}

function Z(e, t = !0) {
    return n => {
        let r = {},
            i = (e, n) => {
                if (n.type === `mcp_source` && !t) return [];
                switch (n.type) {
                    case `grouped_webpages`: {
                        let e = [],
                            t = n.items;
                        for (let n of t)
                            if (n.url && n.title) {
                                let t = r[n.url];
                                t ||= r[n.url] = {
                                    type: `definition`,
                                    identifier: String(Object.keys(r).length + 1),
                                    url: n.url,
                                    title: n.title
                                }, e.push({
                                    type: `linkReference`,
                                    referenceType: `shortcut`,
                                    identifier: t.identifier,
                                    children: [{
                                        type: `text`,
                                        value: n.attribution ?? l(n.url)
                                    }]
                                })
                            } return e.length === 0 ? [] : [{
                            type: `text`,
                            value: `(`
                        }, ...e.flatMap((e, t, n) => t < n.length - 1 ? [e, {
                            type: `text`,
                            value: `, `
                        }] : [e]), {
                            type: `text`,
                            value: `)`
                        }]
                    }
                    case `url`: {
                        let {
                            item: e
                        } = n;
                        return e.url ? [{
                            type: `link`,
                            url: e.url,
                            title: null,
                            children: [{
                                type: `text`,
                                value: n.title
                            }]
                        }] : []
                    }
                    case `title_citation`:
                    case `location_search`:
                    case `time`:
                    case `image_v2`:
                    case `nav_list`:
                    case `file_navlist`:
                    case `file`:
                    case `grouped_webpages_model_predicted_fallback`:
                    case `map`:
                    case `tldr`:
                    case `navigation`:
                    case `stock`:
                    case `calculator`:
                    case `python`:
                    case `container`:
                    case `code_execution`:
                    case `forecast`:
                    case `businesses_map`:
                    case `entity_metadata`:
                    case `video`:
                    case `entity`:
                    case `entity_explorer`:
                    case `conversation_context_citation`:
                    case `sources_footnote`:
                    case `sports_standings`:
                    case `sports_schedule`:
                    case `attribution`:
                    case `webpage_extended`:
                    case `checkout_confirmation`:
                    case `image_inline`:
                    case `image_group`:
                    case `product_entity`:
                    case `products`:
                    case `explore_more`:
                    case `product_group`:
                    case `product`:
                    case `product_show_more_header`:
                    case `alt_text`:
                    case `product_reviews`:
                    case `product_rationale`:
                    case `dil`:
                    case `client_defined_widget`:
                    case `link_title`:
                    case `mcp_source`:
                    case `strix`:
                    case `upload_action`:
                    case `followup_a`:
                    case `followup_memory_a`:
                        if (n.type === `client_defined_widget`) {
                            let t = Oe(n);
                            if (t != null) {
                                let n = $.parse(t);
                                if (e.type !== `textDirective`) return n.children;
                                let r = n.children[0];
                                return r.type === `paragraph` ? r.children : ke(e, t)
                            }
                        }
                        if (n.alt) {
                            let t = $.parse(n.alt);
                            if (e.type !== `textDirective`) return t.children;
                            let r = t.children[0];
                            if (r.type === `paragraph`) return r.children
                        }
                        return [];
                    case `hidden`:
                    case `status`:
                    case `optimistic_image_citation`:
                    case `webpage`:
                    case `optimistic_image_inline`:
                    case `invalid`:
                    case `attribution_footer`:
                    case `sports`:
                    case `grouped_webpages_v2`:
                        return []
                }
            };
        _(n, o, (t, n, r) => {
            if (r == null || n == null) return;
            if (t.type === `containerDirective` && t.name === `writing`) {
                let e = Array.isArray(t.children) ? t.children : [];
                return r.children.splice(n, 1, ...e), [x, n]
            }
            let a = Ae(t, e),
                o = a ? i(t, a) ?? [t] : [];
            return r.children.splice(n, 1, ...o), [x, n + o.length]
        });
        let a = Object.values(r).filter(e => e !== void 0);
        n.children.push(...a)
    }
}

function Ae(e, t) {
    if (e.name === `contentReference`) {
        let n = e.attributes?.index,
            r = typeof n == `string` ? n : void 0;
        if (r) return t[parseInt(r, 10)]
    }
}
var Q, $, je = e((() => {
    a(), fe(), ue(), ae(), re(), c(), n(), r(), xe(), E(), oe(), s(), se(), u(), b(), Q = (e, t, n, r) => {
        let i = n.createTracker(r),
            a = n.enter(`link`),
            o = n.enter(`label`),
            s = i.move(`[`);
        return s += i.move(n.containerPhrasing(e, {
            before: s,
            after: `](`,
            ...i.current()
        })), s += i.move(`](`), o(), s += i.move(e.url.replace(/[\x00-\x1F\x7F-\x9F()"]/g, De)), e.title && (s += i.move(` ` + JSON.stringify(e.title))), s += i.move(`)`), a(), s
    }, $ = h().use(y).use(C).freeze()
}));
export {
    Se as i, Y as n, J as r, je as t
};
//# sourceMappingURL=1a5e078c-ix9ru9138ho53ykm.js.map