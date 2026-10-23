import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    bQ as t,
    hZ as n,
    vQ as r,
    vZ as i,
    yZ as a
} from "./4813494d-mdvd4786a87166cc.js";
import {
    JSt as o,
    KSt as s,
    LSt as c,
    NGn as l,
    Os as u,
    SGn as d,
    URn as f,
    VRn as p,
    Yht as m,
    _bt as h,
    agt as g,
    bF as ee,
    bGn as _,
    eGn as te,
    igt as ne,
    jGn as re,
    ks as ie,
    qSt as ae,
    qht as oe,
    rGn as se,
    vGn as v,
    wGn as ce,
    xF as le,
    xGn as ue,
    ybt as de,
    zSt as y
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    a as fe,
    o as pe
} from "./b4c3a217-o0m0mmw4to3wfhwm.js";
import {
    r as me,
    t as he
} from "./4e1f6607-bttkivj0g3d5z385.js";
import {
    i as ge,
    n as _e,
    r as ve,
    t as ye
} from "./5ab42519-iv7pevrp8vurpcfv.js";
import {
    n as b,
    t as x
} from "./ce52ae67-h7tlc5oeh6o4lhgs.js";
import {
    a as be,
    i as xe,
    r as Se,
    t as Ce
} from "./32f10268-f1widanwhyp4y1ge.js";
import {
    n as S,
    t as we
} from "./e87af100-nne4spgang3oyrdr.js";
import {
    r as Te,
    t as Ee
} from "./051ead45-hajnnq1kur4ayj67.js";

function C(e) {
    let t = e || w;
    return function(e, n) {
        ce(e, `element`, function(e, r) {
            let i = Array.isArray(e.properties.className) ? e.properties.className : T,
                a = i.includes(`language-math`),
                o = i.includes(`math-display`),
                s = i.includes(`math-inline`),
                c = o;
            if (!a && !o && !s) return;
            let l = r[r.length - 1],
                u = e;
            if (e.tagName === `code` && a && l && l.type === `element` && l.tagName === `pre` && (u = l, l = r[r.length - 2], c = !0), !l) return;
            let f = Se(u, {
                    whitespace: `pre`
                }),
                p;
            try {
                p = b.renderToString(f, {
                    ...t,
                    displayMode: c,
                    throwOnError: !0
                })
            } catch (i) {
                let a = i,
                    o = a.name.toLowerCase();
                n.message(`Could not render math with KaTeX`, {
                    ancestors: [...r, e],
                    cause: a,
                    place: e.position,
                    ruleId: o,
                    source: `rehype-katex`
                }), p = o === `parseerror` ? b.renderToString(f, {
                    ...t,
                    displayMode: c,
                    strict: `ignore`,
                    throwOnError: !1
                }) : [{
                    type: `element`,
                    tagName: `span`,
                    properties: {
                        className: [`katex-error`],
                        style: `color:` + (t.errorColor || `#cc0000`),
                        title: String(i)
                    },
                    children: [{
                        type: `text`,
                        value: f
                    }]
                }]
            }
            typeof p == `string` && (p = xe(p, {
                fragment: !0
            }).children);
            let m = l.children.indexOf(u);
            return l.children.splice(m, 1, ...p), d
        })
    }
}
var w, T, De = e((() => {
        be(), Ce(), x(), ue(), w = {}, T = []
    })),
    Oe = e((() => {
        De()
    }));

function ke() {
    return e => {
        _(e, (e, t, n) => {
            if (e.type !== `textDirective`) return;
            let r = e;
            if (n == null || typeof t != `number` || r.name !== `highlight` || !Array.isArray(r.children) || r.children.length === 0) return;
            let i = n;
            if (Array.isArray(i.children)) return i.children.splice(t, 1, ...r.children), [d, t + r.children.length]
        })
    }
}
var E, Ae = e((() => {
    v(), a(), s(), E = () => e => {
        _(e, e => {
            if (!o(e) || e.name !== `highlight` || !Array.isArray(e.children) || e.children.length === 0) return;
            let t = e.data ??= {};
            t.hName = n
        })
    }
}));

function D(e) {
    return e.type === `element`
}

function je(e) {
    return D(e) ? e.tagName === `code` : !1
}

function Me() {
    return function(e) {
        let t = 0;
        _(e, `element`, function(e, n, r) {
            je(e) && r && D(r) && r.tagName === `pre` && (e.properties ??= {}, e.properties.codeIndex = t++)
        })
    }
}
var Ne = e((() => {
    v()
}));

function Pe() {
    return new Map
}

function O(e, t) {
    return Array.isArray(e.properties.className) && e.properties.className.includes(t)
}

function k(e, t) {
    return e.size < A && t.length <= j
}

function Fe(e, t) {
    return {
        type: `element`,
        tagName: M,
        properties: {
            displayMode: e.displayMode,
            katexHtml: e.html,
            mathSource: e.source
        },
        children: [],
        ...t.position == null ? {} : {
            position: t.position
        }
    }
}

function Ie(e, t, n, r, i) {
    try {
        return {
            displayMode: t,
            html: b.renderToString(e, {
                displayMode: t,
                output: `html`,
                throwOnError: !0,
                trust: !1
            }),
            source: e
        }
    } catch (a) {
        let o = a instanceof Error ? a : Error(String(a)),
            s = o.name.toLowerCase();
        if (i && s === `parseerror`) return [];
        r.message(`Could not render math with KaTeX`, {
            cause: o,
            place: n.position,
            ruleId: s,
            source: `rehype-katex`
        });
        try {
            return {
                displayMode: t,
                html: b.renderToString(e, {
                    displayMode: t,
                    output: `html`,
                    strict: `ignore`,
                    throwOnError: !1,
                    trust: !1
                }),
                source: e
            }
        } catch {}
        return [{
            type: `element`,
            tagName: `span`,
            properties: {
                className: [`katex-error`],
                style: `color:#cc0000`,
                title: String(a)
            },
            children: [{
                type: `text`,
                value: e
            }]
        }]
    }
}

function Le(e, t, n = !1) {
    return () => (r, i) => {
        _(r, `element`, (r, a, o) => {
            if (typeof a != `number` || o == null) return;
            let s = O(r, `math-display`),
                c = O(r, `math-inline`),
                l = O(r, `language-math`),
                u = r.tagName === `pre` && r.children.some(e => e.type === `element` && e.tagName === `code` && O(e, `language-math`));
            if (!s && !c && !l && !u) return;
            let f = s || u,
                p = Te(r),
                m = `${f?`display`:`inline`}:${p}`,
                h = e.get(m);
            if (h ?? (h = t?.get(m), h != null && k(e, m) && e.set(m, h)), h == null) {
                let t = i.messages.length,
                    s = Ie(p, f, r, i, n);
                if (Array.isArray(s)) return o.children.splice(a, 1, ...s), [d, a + s.length];
                h = s, i.messages.length === t && k(e, m) && e.set(m, h)
            }
            return o.children.splice(a, 1, Fe(h, r)), [d, a + 1]
        })
    }
}
var A, j, M, N = e((() => {
    Ee(), x(), ee(), v(), le((e, t) => b.renderToString(e, {
        displayMode: t,
        output: `mathml`,
        throwOnError: !1,
        trust: !1
    })), A = 256, j = 4096, M = `client-katex-layout`
}));

function Re() {
    return e => {
        _(e, {
            tagName: `table`
        }, e => {
            let t = e.children.find(e => P(e, `thead`))?.children.find(e => P(e, `tr`))?.children.filter(e => P(e, `th`)) ?? [],
                n = e.children.find(e => P(e, `tbody`)),
                r = t.map(F);
            if (n)
                for (let e of n.children) {
                    if (!P(e, `tr`)) continue;
                    let t = 0;
                    for (let n of e.children) P(n, `td`) && (t < r.length && r[t] <= I && (r[t] = Math.max(r[t], F(n))), t++)
                }
            for (let e = 0; e < t.length; e++) {
                let n = r[e] > I ? `xl` : r[e] > 100 ? `lg` : r[e] > 40 ? `md` : `sm`;
                t[e].properties[`data-col-size`] = n
            }
            if (n)
                for (let e of n.children) {
                    if (!P(e, `tr`)) continue;
                    let n = 0;
                    for (let r of e.children) P(r, `td`) && (n < t.length && (r.properties[`data-col-size`] = t[n].properties[`data-col-size`]), n++)
                }
        })
    }
}

function P(e, t) {
    return e.type === `element` && e.tagName === t
}

function F(e) {
    let t = 0,
        n = e ? [e] : [];
    for (; n.length > 0;) {
        let e = n.pop();
        if (e) {
            if (e.type === `text`) {
                if (t += e.value.length, t > I) return t;
                continue
            }
            if (e.type === `element`)
                for (let t = e.children.length - 1; t >= 0; t--) n.push(e.children[t])
        }
    }
    return t
}
var I, ze = e((() => {
    v(), I = 160
}));

function L() {
    return e => {
        _(e, `list`, e => {
            for (let t of e.children) t.spread = !0
        })
    }
}

function Be() {
    return (e, t) => {
        let n = 0,
            i = (e, t) => {
                let i = e.data ??= {};
                i.hName = r;
                let a = n++;
                i.hProperties = {
                    ...t,
                    index: a
                }
            };
        _(e, (e, n, r) => {
            if (ae(e)) {
                if (e.name !== `writing`) return;
                let n = e.position?.start?.offset,
                    r = e.position?.end?.offset;
                if (n == null || r == null) return;
                i(e, u(e, typeof t.value == `string` ? t.value : void 0));
                return
            }
        })
    }
}

function Ve(e) {
    return t => {
        _(t, `element`, t => {
            nt.has(t.tagName) && Object.defineProperty(t, "markdownSource", {
                get() {
                    try {
                        return e.slice(this.position.start.offset, this.position.end.offset)
                    } catch {
                        return ``
                    }
                }
            })
        })
    }
}

function He(e, t, n, r) {
    let i = t + H.length,
        a = r.children[n - 1],
        o = r.children[n + 1],
        s = t > 0 && /\s/u.test(e[t - 1] ?? ``) || t === 0 && (a == null || a.type === `break`),
        c = i < e.length && /\s/u.test(e[i] ?? ``) || i === e.length && (o == null || o.type === `break`);
    return s && c
}

function R(e) {
    return e.url.startsWith(`sandbox:`) && !at.test(e.url.slice(8))
}

function Ue(e) {
    let t = e.children.findIndex(e => {
        let t = !1;
        return _(e, `link`, e => {
            if (R(e)) return t = !0, d
        }), t
    });
    if (t === -1) return [];
    let n = e.children.slice(0, t),
        r = n.map(e => l(e)).join(``).trimEnd();
    for (; r.length > 0;) {
        let e = r.lastIndexOf(`
`),
            t = r.slice(e + 1).trim();
        if (ot.test(t)) break;
        if (e === -1) return [];
        r = r.slice(0, e).trimEnd()
    }
    if (r.length === 0) return [];
    let i = [],
        a = r.length;
    for (let e of n) {
        let t = l(e);
        if (t.length <= a) {
            i.push(e), a -= t.length;
            continue
        }
        a > 0 && i.push(e.type === `text` ? {
            ...e,
            value: e.value.slice(0, a)
        } : {
            type: `text`,
            value: t.slice(0, a)
        });
        break
    }
    return i
}

function We(e) {
    let t = new Set(e);
    for (let n of e.matchAll(ct)) {
        let e = n[1],
            r = n[2],
            i = Number.parseInt(e ?? r ?? ``, e ? 16 : 10);
        i >= G && i <= K && t.add(String.fromCodePoint(i))
    }
    let n = [];
    for (let e = G; e <= K; e++) {
        let r = String.fromCodePoint(e);
        if (!t.has(r) && (n.push(r), n.length === 2)) {
            let e = n[0],
                t = n[1];
            return e == null || t == null ? null : {
                '"': e,
                "'": t
            }
        }
    }
    return null
}

function Ge(e, t, n, r) {
    let i = t[n];
    if (i == null) return {
        candidate: null,
        nextStartIndex: n + 1
    };
    let a = i + 15;
    if (e[a] !== `{`) return {
        candidate: null,
        nextStartIndex: n + 1
    };
    let o = n + 1,
        s = null,
        c = -1,
        l = [];
    for (let n = a + 1; n < e.length; n++) {
        if (n === t[o]) {
            if (s == null || !r) return {
                candidate: null,
                nextStartIndex: o
            };
            o++
        }
        let i = e[n];
        if (s != null) {
            i === `\\` && e[n + 1] === s ? (l.push({
                offset: n + 1,
                quote: s
            }), n++) : i === s && (s = null);
            continue
        }
        if (i === `"` || i === `'`) s = i;
        else if (i === `}`) {
            c = n;
            break
        }
    }
    return c === -1 ? {
        candidate: null,
        nextStartIndex: o
    } : {
        candidate: l.length === 0 ? null : {
            start: i,
            end: c + 1,
            escapedQuotes: l
        },
        nextStartIndex: o
    }
}

function Ke(e, t) {
    let n = new Map;
    for (let r of [!0, !1]) {
        let i = 0;
        for (; i < t.length;) {
            let a = Ge(e, t, i, r);
            a.candidate != null && !n.has(a.candidate.start) && n.set(a.candidate.start, a.candidate), i = a.nextStartIndex
        }
    }
    return [...n.values()]
}

function z(e, t, n) {
    let r = e.split(``);
    for (let e of n)
        for (let {
                offset: n,
                quote: i
            }
            of e.escapedQuotes) r[n] = t[i];
    return r.join(``)
}

function qe(e, t) {
    let n = new Map(t.map(e => [e.start, e])),
        r = [];
    return _(e, `textDirective`, e => {
        let t = e.position?.start.offset,
            i = t == null ? void 0 : n.get(t);
        e.name === `codex-resource` && i != null && e.position?.end.offset === i.end && typeof e.attributes?.uri == `string` && r.push(i)
    }), r
}

function Je(e, t, n) {
    let r = new Set(t.map(e => e.start));
    _(e, `textDirective`, e => {
        let t = e.position?.start.offset;
        if (e.name !== `codex-resource` || t == null || !r.has(t)) return;
        let i = e.attributes ??= {};
        for (let [e, t] of Object.entries(i)) typeof t == `string` && (i[e] = t.replaceAll(`\\${n[`"`]}`, `"`).replaceAll(`\\${n[`'`]}`, `'`))
    })
}

function B() {
    let e = this.parser;
    e != null && (this.parser = (t, n) => {
        if (!t.includes(st) || !t.includes(`\\"`) && !t.includes(`\\'`)) return e(t, n);
        let r = e(t, n),
            i = [];
        _(r, `textDirective`, e => {
            let t = e.position?.start.offset;
            e.name === `codex-resource` && t != null && i.push(t)
        });
        let a = Ke(t, i);
        if (a.length === 0) return r;
        let o = We(t);
        if (o == null) return r;
        let s = e(z(t, o, a), n),
            c = qe(s, a);
        if (c.length === 0) return r;
        let l = c.length === a.length ? s : e(z(t, o, c), n);
        return Je(l, c, o), l
    })
}

function Ye() {
    return (e, t) => {
        _(e, `textDirective`, e => {
            if (!e.data?.hName) {
                if (e.name === `codex-resource` && typeof e.attributes?.uri == `string`) {
                    e.type = `text`, e.value = ``;
                    return
                }
                if (e.name !== `contentReference`) {
                    let n = e.position?.start.offset,
                        r = e.position?.end.offset;
                    e.type = `text`, e.value = e.name === `codex-resource` && typeof t.value == `string` && n != null && r != null ? t.value.slice(n, r) : `:${e.name}`
                }
            }
        })
    }
}

function Xe() {
    return (e, t) => {
        let n = typeof t.value == `string` ? t.value : null;
        n != null && _(e, `link`, (e, t, r) => {
            let [i] = e.children, a = e.position?.start.offset, o = e.position?.end.offset;
            if (!(typeof t != `number` || r == null || e.children.length !== 1 || i?.type !== `text` || !ut.test(e.url) || a == null || o == null || n.slice(a, o) !== i.value)) return r.children[t] = i, d
        })
    }
}

function V() {
    return e => {
        _(e, `text`, e => {
            e.value = e.value.replace(lt, ``)
        })
    }
}

function Ze({
    highlightEnabled: e,
    hideInaccessibleFiles: t
}) {
    return t ? e ? ft : dt : e ? X : Y
}

function Qe() {
    return e => {
        let t = e.position?.end.offset;
        _(e, `element`, (n, r) => {
            let {
                position: i
            } = n;
            if (!i) return;
            let {
                start: a,
                end: o
            } = i, s = a.offset, c = o.offset;
            n.properties ??= {}, s != null && (n.properties[`data-start`] = s), c != null && (n.properties[`data-end`] = c, t === c && (n.properties[`data-is-last-node`] = ``), r === e.children.length - 1 && (n.properties[`data-is-only-node`] = ``))
        })
    }
}

function $e(e, t, n = !1) {
    return e == null ? Z : [Le(e, t, n), ...Z.slice(1)]
}
var et, tt, nt, H, rt, U, it, at, ot, W, st, ct, G, K, lt, ut, q, J, Y, X, dt, ft, Z, pt, Q, $, mt, ht, gt = e((() => {
    s(), c(), ne(), fe(), ye(), t(), re(), te(), h(), Oe(), he(), oe(), p(), v(), ve(), a(), Ae(), Ne(), we(), N(), ze(), ie(), et = new Set([`w`, `f`]), tt = e => e.startsWith(`sandbox:`) || et.has(e) || e.startsWith(`tel:`) || e.startsWith(`sms:`) ? e : se(e), nt = new Set([`table`, `code`, `li`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`]), H = `::${i}`, rt = new RegExp(H, `gu`), U = () => (e, t) => {
        let n = String(t.value);
        n !== `` && !n.includes(H) || _(e, (e, t, n) => {
            if (e.type === `text` && typeof t == `number` && n?.type === `paragraph`) {
                let r = e;
                if (!r.value.includes(H)) return;
                let a = [],
                    o = 0;
                for (let e of r.value.matchAll(rt)) {
                    let s = e.index;
                    s == null || !He(r.value, s, t, n) || (s > o && a.push({
                        type: `text`,
                        value: r.value.slice(o, s)
                    }), a.push({
                        type: `textDirective`,
                        name: i,
                        children: [],
                        data: {
                            hName: i
                        }
                    }), o = s + H.length)
                }
                return a.length === 0 ? void 0 : (o < r.value.length && a.push({
                    type: `text`,
                    value: r.value.slice(o)
                }), n.children.splice(t, 1, ...a), [d, t + a.length])
            }
            if (!o(e) || e.name !== `uploadLikenessButton`) return;
            let r = e.data ??= {};
            r.hName = i
        })
    }, it = () => e => {
        _(e, (e, t, n) => {
            if (!(!o(e) || e.name !== `uploadLikenessButton` || typeof t != `number` || n == null)) return n.children.splice(t, 1), [d, t]
        })
    }, at = /\.(?:jpe?g|png|gif|webp|heic|heif|mpo|avif)$/i, ot = /[.!?。！？]["')\]]?$/u, W = () => e => {
        _(e, `paragraph`, (e, t, n) => {
            if (typeof t != `number` || n == null) return;
            let r = !1,
                i = !1;
            if (_(e, `link`, e => {
                    if (R(e)) return r = !0, d;
                    e.url.startsWith(`sandbox:`) && (i = !0)
                }), !r || i) return;
            let a = !1;
            if (_(e, `image`, () => (a = !0, d)), !a) {
                let r = Ue(e);
                return r.length === 0 ? (n.children.splice(t, 1), [d, t]) : (e.children = r, d)
            }
        }), _(e, `link`, (e, t, n) => {
            if (!(!R(e) || typeof t != `number` || n == null)) return n.children.splice(t, 1, ...e.children), [d, t + e.children.length]
        })
    }, st = `:codex-resource`, ct = /&#(?:[xX]([\dA-Fa-f]+)|(\d+));?/gu, G = 57344, K = 63743, lt = /\u200b/g, ut = /^mailto:.*@[1-9]\d*x\.(?:png|jpe?g|gif|webp|avif|heic)$/i, q = [
        [f, {
            singleTilde: !1
        }], me, L, [_e, {
            singleDollarTextMath: !1
        }], m, B, U, Be, ge
    ], J = [g, ...y ? [y] : [], pe, Ye, Xe, V], Y = [...q, ...J], X = [...q, E, ...J], dt = [W, ...Y], ft = [W, ...X], Z = [C, Qe, Re, [de, {
        target: `_new`,
        rel: `noopener noreferrer`
    }], S, Me], pt = [
        [C, {
            output: `mathml`
        }], S
    ], Q = [
        [f, {
            singleTilde: !1
        }], me, L, [_e, {
            singleDollarTextMath: !1
        }], m, B, U
    ], $ = [ge, g, ...y ? [y] : [], pe, it, Ye, Xe, V], mt = [...Q, ...$], ht = [...Q, ke, ...$]
}));
export {
    ht as a, gt as c, tt as d, M as f, mt as i, Ve as l, N as m, pt as n, $e as o, Pe as p, Y as r, Ze as s, Z as t, V as u
};
//# sourceMappingURL=92cd10e6-l48rsn2rpl2q1n5w.js.map