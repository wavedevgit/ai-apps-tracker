import {
    n as e,
    s as t,
    t as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    l7 as r,
    u7 as i
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    Bn as a,
    Vn as o,
    wn as s
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    BWn as c,
    VWn as l
} from "./conversation-small-fh0oqifngkf5rvl1.js";
import {
    n as u,
    t as d
} from "./2686af9f-ihi9gnq9cdwjnguy.js";
import {
    n as f,
    r as p
} from "./bb47c0a1-is9kvtqictpz4a8f.js";
import {
    n as m,
    t as h
} from "./17789dc6-ko67zcnd4jzt9ht6.js";
import {
    t as g
} from "./bcae0416-ojxhpffjgpo2ol4n.js";

function _() {
    return {
        renderNode: {
            [y.BLOCKS.HEADING_2]: (e, t) => (0, x.jsx)(`h2`, {
                className: `text-mkt-h4 mb-4`,
                children: t
            }),
            [y.BLOCKS.PARAGRAPH]: (e, t) => e.content?.every(e => e.nodeType === `text` && e.value.trim() === ``) ? null : (0, x.jsx)(`p`, {
                className: r(`not-last:mb-[1.1em]`, w(e) && `text-mkt-p2`),
                children: t
            }),
            [y.INLINES.ENTRY_HYPERLINK]: (e, t) => k(e, t),
            [y.INLINES.HYPERLINK]: (e, t) => D(e, t),
            [y.BLOCKS.TABLE]: (e, t) => N(t),
            [y.BLOCKS.OL_LIST]: (e, t) => P(t, !0),
            [y.BLOCKS.UL_LIST]: (e, t) => P(t, !1),
            [y.BLOCKS.LIST_ITEM]: (e, t) => F(t)
        },
        renderText: e => E(e),
        renderMark: {
            code: e => (0, x.jsx)(`code`, {
                className: `not-prose px-1 text-sm`,
                children: e
            })
        }
    }
}
var v, y, b, x, S, C, w, T, E, D, O, k, A, j, M, N, P, F, I = e((() => {
        v = s(), l(), f(), m(), u(), y = g(), i(), b = t(o()), x = a(), S = {
            small: /\[\[small\]\]/g
        }, C = `hover:opacity-60 relative underline-offset-2 decoration-1 underline`, w = e => y.helpers.isText(e) ? !!e.value.match(S.small) : e.content.some(w), T = e => e.replaceAll(S.small, ``).split(`
`).reduce((e, t, n) => (e.push(n > 0 ? (0, x.jsx)(`br`, {}, n) : null, M(t)), e), []).filter(Boolean), E = e => {
            let t = e.replaceAll(S.small, ``).split(/\r?\n/);
            return (0, x.jsx)(x.Fragment, {
                children: t.map((e, n) => (0, x.jsxs)(b.Fragment, {
                    children: [e, n < t.length - 1 && (0, x.jsx)(`br`, {})]
                }, n))
            })
        }, D = (e, t) => {
            let n = e.data?.uri ?? e.data?.href ?? e.data?.url ?? ``;
            return (0, x.jsx)(O, {
                url: n,
                children: t
            })
        }, O = e => {
            "use forget";
            let t = (0, v.c)(11),
                {
                    url: n,
                    children: r
                } = e,
                {
                    slug: i,
                    effectiveLocale: a
                } = p(),
                o;
            t[0] === n ? o = t[1] : (o = A(n), t[0] = n, t[1] = o);
            let s = !o,
                l;
            t[2] !== a || t[3] !== i || t[4] !== n ? (l = () => {
                d.logClick({
                    analytics_identifier: `rich-text-link`,
                    destination_url: n,
                    locale: a,
                    page_slug: i
                })
            }, t[2] = a, t[3] = i, t[4] = n, t[5] = l) : l = t[5];
            let u;
            return t[6] !== r || t[7] !== s || t[8] !== l || t[9] !== n ? (u = (0, x.jsxs)(c, {
                href: n,
                openNewTab: s,
                className: C,
                onClick: l,
                children: [r, `⁠`]
            }), t[6] = r, t[7] = s, t[8] = l, t[9] = n, t[10] = u) : u = t[10], u
        }, k = (e, t) => {
            let n = e.data.target.fields.slug;
            return (0, x.jsx)(c, {
                href: `https://openai.com${n.startsWith(`/`)?n:`/${n}/`}`,
                className: C,
                children: t
            })
        }, A = e => !e.startsWith(`http`) && !e.startsWith(`www`) || [`https://chatgpt.com`, `https://www.chatgpt.com`, `http://chatgpt.com`, `http://www.chatgpt.com`, `/`, `chatgpt.com`, `www.chatgpt.com`].some(t => e.startsWith(t)), j = {
            "GPT-": `GPT-`,
            "o3-mini-": `o3-mini-`,
            "o3-": `o3-`,
            "o1-": `o1-`
        }, M = (e, t = j) => {
            for (let n in t) e = e.replaceAll(n, t[n]);
            return e
        }, N = e => (0, x.jsx)(h, {
            children: (0, x.jsx)(`table`, {
                className: `text-mkt-p1 [&_tr]:border-token-border-medium w-fit break-words whitespace-normal [&_td]:p-2 [&_th]:p-2 [&_tr]:border-b [&_tr:last-child]:border-b-0`,
                children: (0, x.jsx)(`tbody`, {
                    children: e
                })
            })
        }), P = (e, t) => (0, x.jsx)(t ? `ol` : `ul`, {
            className: r(`mb-8 marker:text-inherit last:mb-0`, {
                "mx-3 list-decimal ps-8": t,
                "mx-3 list-disc ps-4": !t
            }),
            children: e
        }), F = e => (0, x.jsx)(`li`, {
            className: `mb-2 last:mb-0`,
            children: e
        })
    })),
    L = n((e => {
        var t = o(),
            n = g(),
            r = function() {
                return r = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }, r.apply(this, arguments)
            };

        function i(e, n) {
            return t.isValidElement(e) && e.key === null ? t.cloneElement(e, {
                key: n
            }) : e
        }

        function a(e, t) {
            return e.map(function(e, n) {
                return i(s(e, t), n)
            })
        }

        function s(e, r) {
            var i = r.renderNode,
                o = r.renderMark,
                s = r.renderText,
                c = r.preserveWhitespace;
            if (n.helpers.isText(e)) {
                var l = s ? s(e.value) : e.value;
                if (c && !s) {
                    l = l.replace(/ {2,}/g, function(e) {
                        return `\xA0`.repeat(e.length)
                    });
                    var u = l.split(`
`),
                        d = [];
                    u.forEach(function(e, n) {
                        d.push(e), n !== u.length - 1 && d.push(t.createElement(`br`, null))
                    }), l = d
                }
                return e.marks.reduce(function(e, t) {
                    return o[t.type] ? o[t.type](e) : e
                }, l)
            } else {
                var f = a(e.content, r);
                return !e.nodeType || !i[e.nodeType] ? t.createElement(t.Fragment, null, f) : i[e.nodeType](e, f)
            }
        }
        var c, l, u = (c = {}, c[n.BLOCKS.DOCUMENT] = function(e, t) {
                return t
            }, c[n.BLOCKS.PARAGRAPH] = function(e, n) {
                return t.createElement(`p`, null, n)
            }, c[n.BLOCKS.HEADING_1] = function(e, n) {
                return t.createElement(`h1`, null, n)
            }, c[n.BLOCKS.HEADING_2] = function(e, n) {
                return t.createElement(`h2`, null, n)
            }, c[n.BLOCKS.HEADING_3] = function(e, n) {
                return t.createElement(`h3`, null, n)
            }, c[n.BLOCKS.HEADING_4] = function(e, n) {
                return t.createElement(`h4`, null, n)
            }, c[n.BLOCKS.HEADING_5] = function(e, n) {
                return t.createElement(`h5`, null, n)
            }, c[n.BLOCKS.HEADING_6] = function(e, n) {
                return t.createElement(`h6`, null, n)
            }, c[n.BLOCKS.EMBEDDED_ENTRY] = function(e, n) {
                return t.createElement(`div`, null, n)
            }, c[n.BLOCKS.EMBEDDED_RESOURCE] = function(e, n) {
                return t.createElement(`div`, null, n)
            }, c[n.BLOCKS.UL_LIST] = function(e, n) {
                return t.createElement(`ul`, null, n)
            }, c[n.BLOCKS.OL_LIST] = function(e, n) {
                return t.createElement(`ol`, null, n)
            }, c[n.BLOCKS.LIST_ITEM] = function(e, n) {
                return t.createElement(`li`, null, n)
            }, c[n.BLOCKS.QUOTE] = function(e, n) {
                return t.createElement(`blockquote`, null, n)
            }, c[n.BLOCKS.HR] = function() {
                return t.createElement(`hr`, null)
            }, c[n.BLOCKS.TABLE] = function(e, n) {
                return t.createElement(`table`, null, t.createElement(`tbody`, null, n))
            }, c[n.BLOCKS.TABLE_ROW] = function(e, n) {
                return t.createElement(`tr`, null, n)
            }, c[n.BLOCKS.TABLE_HEADER_CELL] = function(e, n) {
                return t.createElement(`th`, null, n)
            }, c[n.BLOCKS.TABLE_CELL] = function(e, n) {
                return t.createElement(`td`, null, n)
            }, c[n.INLINES.ASSET_HYPERLINK] = function(e) {
                return f(n.INLINES.ASSET_HYPERLINK, e)
            }, c[n.INLINES.ENTRY_HYPERLINK] = function(e) {
                return f(n.INLINES.ENTRY_HYPERLINK, e)
            }, c[n.INLINES.RESOURCE_HYPERLINK] = function(e) {
                return p(n.INLINES.RESOURCE_HYPERLINK, e)
            }, c[n.INLINES.EMBEDDED_ENTRY] = function(e) {
                return f(n.INLINES.EMBEDDED_ENTRY, e)
            }, c[n.INLINES.EMBEDDED_RESOURCE] = function(e, t) {
                return p(n.INLINES.EMBEDDED_RESOURCE, e)
            }, c[n.INLINES.HYPERLINK] = function(e, n) {
                return t.createElement(`a`, {
                    href: e.data.uri
                }, n)
            }, c),
            d = (l = {}, l[n.MARKS.BOLD] = function(e) {
                return t.createElement(`b`, null, e)
            }, l[n.MARKS.ITALIC] = function(e) {
                return t.createElement(`i`, null, e)
            }, l[n.MARKS.UNDERLINE] = function(e) {
                return t.createElement(`u`, null, e)
            }, l[n.MARKS.CODE] = function(e) {
                return t.createElement(`code`, null, e)
            }, l[n.MARKS.SUPERSCRIPT] = function(e) {
                return t.createElement(`sup`, null, e)
            }, l[n.MARKS.SUBSCRIPT] = function(e) {
                return t.createElement(`sub`, null, e)
            }, l[n.MARKS.STRIKETHROUGH] = function(e) {
                return t.createElement(`s`, null, e)
            }, l);

        function f(e, n) {
            return t.createElement(`span`, {
                key: n.data.target.sys.id
            }, `type: `, n.nodeType, ` id: `, n.data.target.sys.id)
        }

        function p(e, n) {
            return t.createElement(`span`, {
                key: n.data.target.sys.urn
            }, `type: `, n.nodeType, ` urn: `, n.data.target.sys.urn)
        }

        function m(e, t) {
            return t === void 0 && (t = {}), e ? s(e, {
                renderNode: r(r({}, u), t.renderNode),
                renderMark: r(r({}, d), t.renderMark),
                renderText: t.renderText,
                preserveWhitespace: t.preserveWhitespace
            }) : null
        }
        e.documentToReactComponents = m
    }));
export {
    D as a, T as i, _ as n, I as r, L as t
};
//# sourceMappingURL=686b9e77-n6rzei7hmy4ewhtr.js.map