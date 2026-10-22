import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    bQ as t,
    hZ as n,
    vQ as r,
    vZ as i,
    yZ as a
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    $St as o,
    ARn as s,
    HSt as c,
    ORn as l,
    Os as u,
    QSt as d,
    Qht as f,
    Sbt as p,
    VWn as m,
    WSt as h,
    WWn as ee,
    Xht as te,
    ZSt as g,
    _Gn as ne,
    aGn as re,
    bF as ie,
    cGn as ae,
    cgt as oe,
    hGn as se,
    iGn as _,
    ks as ce,
    nGn as v,
    oGn as y,
    sgt as le,
    wbt as ue,
    xF as de
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    a as fe,
    o as pe
} from "./b4c3a217-hlcclcfv41znf6wg.js";
import {
    r as b,
    t as me
} from "./4e1f6607-chbk7lmwmwnre43n.js";
import {
    i as x,
    n as S,
    r as he,
    t as ge
} from "./5ab42519-kmo92vzgicw43441.js";
import {
    n as C,
    t as _e
} from "./ce52ae67-h7tlc5oeh6o4lhgs.js";
import {
    a as ve,
    i as ye,
    r as be,
    t as xe
} from "./32f10268-dx020wd36arfcmu8.js";
import {
    n as Se,
    t as Ce
} from "./e87af100-gjole8ipij6r1nlu.js";
import {
    r as we,
    t as Te
} from "./051ead45-hajnnq1kur4ayj67.js";

function Ee(e) {
    let t = e || De;
    return function(e, n) {
        ae(e, `element`, function(e, r) {
            let i = Array.isArray(e.properties.className) ? e.properties.className : Oe,
                a = i.includes(`language-math`),
                o = i.includes(`math-display`),
                s = i.includes(`math-inline`),
                c = o;
            if (!a && !o && !s) return;
            let l = r[r.length - 1],
                u = e;
            if (e.tagName === `code` && a && l && l.type === `element` && l.tagName === `pre` && (u = l, l = r[r.length - 2], c = !0), !l) return;
            let d = be(u, {
                    whitespace: `pre`
                }),
                f;
            try {
                f = C.renderToString(d, {
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
                }), f = o === `parseerror` ? C.renderToString(d, {
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
                        value: d
                    }]
                }]
            }
            typeof f == `string` && (f = ye(f, {
                fragment: !0
            }).children);
            let p = l.children.indexOf(u);
            return l.children.splice(p, 1, ...f), y
        })
    }
}
var De, Oe, ke = e((() => {
        ve(), xe(), _e(), re(), De = {}, Oe = []
    })),
    Ae = e((() => {
        ke()
    }));

function je() {
    return e => {
        _(e, (e, t, n) => {
            if (e.type !== `textDirective`) return;
            let r = e;
            if (n == null || typeof t != `number` || r.name !== `highlight` || !Array.isArray(r.children) || r.children.length === 0) return;
            let i = n;
            if (Array.isArray(i.children)) return i.children.splice(t, 1, ...r.children), [y, t + r.children.length]
        })
    }
}
var Me, Ne = e((() => {
    v(), a(), g(), Me = () => e => {
        _(e, e => {
            if (!o(e) || e.name !== `highlight` || !Array.isArray(e.children) || e.children.length === 0) return;
            let t = e.data ??= {};
            t.hName = n
        })
    }
}));

function Pe(e) {
    return e.type === `element`
}

function Fe(e) {
    return Pe(e) ? e.tagName === `code` : !1
}

function Ie() {
    return function(e) {
        let t = 0;
        _(e, `element`, function(e, n, r) {
            Fe(e) && r && Pe(r) && r.tagName === `pre` && (e.properties ??= {}, e.properties.codeIndex = t++)
        })
    }
}
var Le = e((() => {
    v()
}));

function Re() {
    return new Map
}

function w(e, t) {
    return Array.isArray(e.properties.className) && e.properties.className.includes(t)
}

function T(e, t) {
    return e.size < E && t.length <= D
}

function ze(e, t) {
    return {
        type: `element`,
        tagName: O,
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

function Be(e, t, n, r, i) {
    try {
        return {
            displayMode: t,
            html: C.renderToString(e, {
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
                html: C.renderToString(e, {
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

function Ve(e, t, n = !1) {
    return () => (r, i) => {
        _(r, `element`, (r, a, o) => {
            if (typeof a != `number` || o == null) return;
            let s = w(r, `math-display`),
                c = w(r, `math-inline`),
                l = w(r, `language-math`),
                u = r.tagName === `pre` && r.children.some(e => e.type === `element` && e.tagName === `code` && w(e, `language-math`));
            if (!s && !c && !l && !u) return;
            let d = s || u,
                f = we(r),
                p = `${d?`display`:`inline`}:${f}`,
                m = e.get(p);
            if (m ?? (m = t?.get(p), m != null && T(e, p) && e.set(p, m)), m == null) {
                let t = i.messages.length,
                    s = Be(f, d, r, i, n);
                if (Array.isArray(s)) return o.children.splice(a, 1, ...s), [y, a + s.length];
                m = s, i.messages.length === t && T(e, p) && e.set(p, m)
            }
            return o.children.splice(a, 1, ze(m, r)), [y, a + 1]
        })
    }
}
var E, D, O, k = e((() => {
    Te(), _e(), ie(), v(), de((e, t) => C.renderToString(e, {
        displayMode: t,
        output: `mathml`,
        throwOnError: !1,
        trust: !1
    })), E = 256, D = 4096, O = `client-katex-layout`
}));

function He() {
    return e => {
        _(e, {
            tagName: `table`
        }, e => {
            let t = e.children.find(e => A(e, `thead`))?.children.find(e => A(e, `tr`))?.children.filter(e => A(e, `th`)) ?? [],
                n = e.children.find(e => A(e, `tbody`)),
                r = t.map(j);
            if (n)
                for (let e of n.children) {
                    if (!A(e, `tr`)) continue;
                    let t = 0;
                    for (let n of e.children) A(n, `td`) && (t < r.length && r[t] <= M && (r[t] = Math.max(r[t], j(n))), t++)
                }
            for (let e = 0; e < t.length; e++) {
                let n = r[e] > M ? `xl` : r[e] > 100 ? `lg` : r[e] > 40 ? `md` : `sm`;
                t[e].properties[`data-col-size`] = n
            }
            if (n)
                for (let e of n.children) {
                    if (!A(e, `tr`)) continue;
                    let n = 0;
                    for (let r of e.children) A(r, `td`) && (n < t.length && (r.properties[`data-col-size`] = t[n].properties[`data-col-size`]), n++)
                }
        })
    }
}

function A(e, t) {
    return e.type === `element` && e.tagName === t
}

function j(e) {
    let t = 0,
        n = e ? [e] : [];
    for (; n.length > 0;) {
        let e = n.pop();
        if (e) {
            if (e.type === `text`) {
                if (t += e.value.length, t > M) return t;
                continue
            }
            if (e.type === `element`)
                for (let t = e.children.length - 1; t >= 0; t--) n.push(e.children[t])
        }
    }
    return t
}
var M, Ue = e((() => {
    v(), M = 160
}));

function N() {
    return e => {
        _(e, `list`, e => {
            for (let t of e.children) t.spread = !0
        })
    }
}

function We() {
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
            if (d(e)) {
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

function Ge(e) {
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

function Ke(e, t, n, r) {
    let i = t + H.length,
        a = r.children[n - 1],
        o = r.children[n + 1],
        s = t > 0 && /\s/u.test(e[t - 1] ?? ``) || t === 0 && (a == null || a.type === `break`),
        c = i < e.length && /\s/u.test(e[i] ?? ``) || i === e.length && (o == null || o.type === `break`);
    return s && c
}

function P(e) {
    return e.url.startsWith(`sandbox:`) && !at.test(e.url.slice(8))
}

function qe(e) {
    let t = e.children.findIndex(e => {
        let t = !1;
        return _(e, `link`, e => {
            if (P(e)) return t = !0, y
        }), t
    });
    if (t === -1) return [];
    let n = e.children.slice(0, t),
        r = n.map(e => ne(e)).join(``).trimEnd();
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
        let t = ne(e);
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

function Je(e) {
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

function Ye(e, t, n, r) {
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

function Xe(e, t) {
    let n = new Map;
    for (let r of [!0, !1]) {
        let i = 0;
        for (; i < t.length;) {
            let a = Ye(e, t, i, r);
            a.candidate != null && !n.has(a.candidate.start) && n.set(a.candidate.start, a.candidate), i = a.nextStartIndex
        }
    }
    return [...n.values()]
}

function F(e, t, n) {
    let r = e.split(``);
    for (let e of n)
        for (let {
                offset: n,
                quote: i
            }
            of e.escapedQuotes) r[n] = t[i];
    return r.join(``)
}

function Ze(e, t) {
    let n = new Map(t.map(e => [e.start, e])),
        r = [];
    return _(e, `textDirective`, e => {
        let t = e.position?.start.offset,
            i = t == null ? void 0 : n.get(t);
        e.name === `codex-resource` && i != null && e.position?.end.offset === i.end && typeof e.attributes?.uri == `string` && r.push(i)
    }), r
}

function Qe(e, t, n) {
    let r = new Set(t.map(e => e.start));
    _(e, `textDirective`, e => {
        let t = e.position?.start.offset;
        if (e.name !== `codex-resource` || t == null || !r.has(t)) return;
        let i = e.attributes ??= {};
        for (let [e, t] of Object.entries(i)) typeof t == `string` && (i[e] = t.replaceAll(`\\${n[`"`]}`, `"`).replaceAll(`\\${n[`'`]}`, `'`))
    })
}

function I() {
    let e = this.parser;
    e != null && (this.parser = (t, n) => {
        if (!t.includes(st) || !t.includes(`\\"`) && !t.includes(`\\'`)) return e(t, n);
        let r = e(t, n),
            i = [];
        _(r, `textDirective`, e => {
            let t = e.position?.start.offset;
            e.name === `codex-resource` && t != null && i.push(t)
        });
        let a = Xe(t, i);
        if (a.length === 0) return r;
        let o = Je(t);
        if (o == null) return r;
        let s = e(F(t, o, a), n),
            c = Ze(s, a);
        if (c.length === 0) return r;
        let l = c.length === a.length ? s : e(F(t, o, c), n);
        return Qe(l, c, o), l
    })
}

function L() {
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

function R() {
    return (e, t) => {
        let n = typeof t.value == `string` ? t.value : null;
        n != null && _(e, `link`, (e, t, r) => {
            let [i] = e.children, a = e.position?.start.offset, o = e.position?.end.offset;
            if (!(typeof t != `number` || r == null || e.children.length !== 1 || i?.type !== `text` || !ut.test(e.url) || a == null || o == null || n.slice(a, o) !== i.value)) return r.children[t] = i, y
        })
    }
}

function z() {
    return e => {
        _(e, `text`, e => {
            e.value = e.value.replace(lt, ``)
        })
    }
}

function $e({
    highlightEnabled: e,
    hideInaccessibleFiles: t
}) {
    return t ? e ? ft : dt : e ? X : Y
}

function et() {
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

function tt(e, t, n = !1) {
    return e == null ? Z : [Ve(e, t, n), ...Z.slice(1)]
}
var B, V, nt, H, rt, U, it, at, ot, W, st, ct, G, K, lt, ut, q, J, Y, X, dt, ft, Z, pt, Q, $, mt, ht, gt = e((() => {
    g(), c(), le(), fe(), ge(), t(), se(), m(), p(), Ae(), me(), te(), l(), v(), he(), a(), Ne(), Le(), Ce(), k(), Ue(), ce(), B = new Set([`w`, `f`]), V = e => e.startsWith(`sandbox:`) || B.has(e) || e.startsWith(`tel:`) || e.startsWith(`sms:`) ? e : ee(e), nt = new Set([`table`, `code`, `li`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`]), H = `::${i}`, rt = new RegExp(H, `gu`), U = () => (e, t) => {
        let n = String(t.value);
        n !== `` && !n.includes(H) || _(e, (e, t, n) => {
            if (e.type === `text` && typeof t == `number` && n?.type === `paragraph`) {
                let r = e;
                if (!r.value.includes(H)) return;
                let a = [],
                    o = 0;
                for (let e of r.value.matchAll(rt)) {
                    let s = e.index;
                    s == null || !Ke(r.value, s, t, n) || (s > o && a.push({
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
                }), n.children.splice(t, 1, ...a), [y, t + a.length])
            }
            if (!o(e) || e.name !== `uploadLikenessButton`) return;
            let r = e.data ??= {};
            r.hName = i
        })
    }, it = () => e => {
        _(e, (e, t, n) => {
            if (!(!o(e) || e.name !== `uploadLikenessButton` || typeof t != `number` || n == null)) return n.children.splice(t, 1), [y, t]
        })
    }, at = /\.(?:jpe?g|png|gif|webp|heic|heif|mpo|avif)$/i, ot = /[.!?。！？]["')\]]?$/u, W = () => e => {
        _(e, `paragraph`, (e, t, n) => {
            if (typeof t != `number` || n == null) return;
            let r = !1,
                i = !1;
            if (_(e, `link`, e => {
                    if (P(e)) return r = !0, y;
                    e.url.startsWith(`sandbox:`) && (i = !0)
                }), !r || i) return;
            let a = !1;
            if (_(e, `image`, () => (a = !0, y)), !a) {
                let r = qe(e);
                return r.length === 0 ? (n.children.splice(t, 1), [y, t]) : (e.children = r, y)
            }
        }), _(e, `link`, (e, t, n) => {
            if (!(!P(e) || typeof t != `number` || n == null)) return n.children.splice(t, 1, ...e.children), [y, t + e.children.length]
        })
    }, st = `:codex-resource`, ct = /&#(?:[xX]([\dA-Fa-f]+)|(\d+));?/gu, G = 57344, K = 63743, lt = /\u200b/g, ut = /^mailto:.*@[1-9]\d*x\.(?:png|jpe?g|gif|webp|avif|heic)$/i, q = [
        [s, {
            singleTilde: !1
        }], b, N, [S, {
            singleDollarTextMath: !1
        }], f, I, U, We, x
    ], J = [oe, ...h ? [h] : [], pe, L, R, z], Y = [...q, ...J], X = [...q, Me, ...J], dt = [W, ...Y], ft = [W, ...X], Z = [Ee, et, He, [ue, {
        target: `_new`,
        rel: `noopener noreferrer`
    }], Se, Ie], pt = [
        [Ee, {
            output: `mathml`
        }], Se
    ], Q = [
        [s, {
            singleTilde: !1
        }], b, N, [S, {
            singleDollarTextMath: !1
        }], f, I, U
    ], $ = [x, oe, ...h ? [h] : [], pe, it, L, R, z], mt = [...Q, ...$], ht = [...Q, je, ...$]
}));
export {
    ht as a, gt as c, V as d, O as f, mt as i, Ge as l, k as m, pt as n, tt as o, Re as p, Y as r, $e as s, Z as t, z as u
};
//# sourceMappingURL=92cd10e6-n0mh3y496ndel3zj.js.map