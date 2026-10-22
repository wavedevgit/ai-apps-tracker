import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    bQ as t,
    hZ as n,
    vQ as r,
    vZ as i,
    yZ as a
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    Cbt as o,
    DWn as s,
    GWn as c,
    HWn as l,
    JSt as u,
    Os as d,
    QWn as f,
    UWn as p,
    VSt as m,
    VWn as h,
    XSt as g,
    YSt as ee,
    Yht as te,
    Zht as _,
    bF as ne,
    dRn as re,
    eGn as ie,
    ks as ae,
    ogt as oe,
    pRn as v,
    sgt as y,
    wWn as se,
    xbt as ce,
    yF as le,
    zSt as ue,
    zWn as b
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    a as de,
    o as fe
} from "./b4c3a217-ghxfc8q2p1er9ak5.js";
import {
    r as pe,
    t as me
} from "./4e1f6607-ejs9etn25820gj5k.js";
import {
    i as he,
    n as ge,
    r as _e,
    t as ve
} from "./5ab42519-clefa0kf2c6u9t8b.js";
import {
    n as x,
    t as S
} from "./ce52ae67-h7tlc5oeh6o4lhgs.js";
import {
    a as ye,
    i as be,
    r as xe,
    t as Se
} from "./32f10268-gktwnencuhxk4khr.js";
import {
    n as C,
    t as Ce
} from "./e87af100-i6epkfkc32578spr.js";
import {
    r as we,
    t as Te
} from "./051ead45-hajnnq1kur4ayj67.js";

function w(e) {
    let t = e || T;
    return function(e, n) {
        c(e, `element`, function(e, r) {
            let i = Array.isArray(e.properties.className) ? e.properties.className : E,
                a = i.includes(`language-math`),
                o = i.includes(`math-display`),
                s = i.includes(`math-inline`),
                c = o;
            if (!a && !o && !s) return;
            let l = r[r.length - 1],
                u = e;
            if (e.tagName === `code` && a && l && l.type === `element` && l.tagName === `pre` && (u = l, l = r[r.length - 2], c = !0), !l) return;
            let d = xe(u, {
                    whitespace: `pre`
                }),
                f;
            try {
                f = x.renderToString(d, {
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
                }), f = o === `parseerror` ? x.renderToString(d, {
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
            typeof f == `string` && (f = be(f, {
                fragment: !0
            }).children);
            let m = l.children.indexOf(u);
            return l.children.splice(m, 1, ...f), p
        })
    }
}
var T, E, Ee = e((() => {
        ye(), Se(), S(), l(), T = {}, E = []
    })),
    De = e((() => {
        Ee()
    }));

function Oe() {
    return e => {
        h(e, (e, t, n) => {
            if (e.type !== `textDirective`) return;
            let r = e;
            if (n == null || typeof t != `number` || r.name !== `highlight` || !Array.isArray(r.children) || r.children.length === 0) return;
            let i = n;
            if (Array.isArray(i.children)) return i.children.splice(t, 1, ...r.children), [p, t + r.children.length]
        })
    }
}
var D, ke = e((() => {
    b(), a(), u(), D = () => e => {
        h(e, e => {
            if (!g(e) || e.name !== `highlight` || !Array.isArray(e.children) || e.children.length === 0) return;
            let t = e.data ??= {};
            t.hName = n
        })
    }
}));

function O(e) {
    return e.type === `element`
}

function Ae(e) {
    return O(e) ? e.tagName === `code` : !1
}

function je() {
    return function(e) {
        let t = 0;
        h(e, `element`, function(e, n, r) {
            Ae(e) && r && O(r) && r.tagName === `pre` && (e.properties ??= {}, e.properties.codeIndex = t++)
        })
    }
}
var Me = e((() => {
    b()
}));

function Ne() {
    return new Map
}

function k(e, t) {
    return Array.isArray(e.properties.className) && e.properties.className.includes(t)
}

function A(e, t) {
    return e.size < j && t.length <= M
}

function Pe(e, t) {
    return {
        type: `element`,
        tagName: N,
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

function Fe(e, t, n, r, i) {
    try {
        return {
            displayMode: t,
            html: x.renderToString(e, {
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
                html: x.renderToString(e, {
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

function Ie(e, t, n = !1) {
    return () => (r, i) => {
        h(r, `element`, (r, a, o) => {
            if (typeof a != `number` || o == null) return;
            let s = k(r, `math-display`),
                c = k(r, `math-inline`),
                l = k(r, `language-math`),
                u = r.tagName === `pre` && r.children.some(e => e.type === `element` && e.tagName === `code` && k(e, `language-math`));
            if (!s && !c && !l && !u) return;
            let d = s || u,
                f = we(r),
                m = `${d?`display`:`inline`}:${f}`,
                h = e.get(m);
            if (h ?? (h = t?.get(m), h != null && A(e, m) && e.set(m, h)), h == null) {
                let t = i.messages.length,
                    s = Fe(f, d, r, i, n);
                if (Array.isArray(s)) return o.children.splice(a, 1, ...s), [p, a + s.length];
                h = s, i.messages.length === t && A(e, m) && e.set(m, h)
            }
            return o.children.splice(a, 1, Pe(h, r)), [p, a + 1]
        })
    }
}
var j, M, N, P = e((() => {
    Te(), S(), le(), b(), ne((e, t) => x.renderToString(e, {
        displayMode: t,
        output: `mathml`,
        throwOnError: !1,
        trust: !1
    })), j = 256, M = 4096, N = `client-katex-layout`
}));

function Le() {
    return e => {
        h(e, {
            tagName: `table`
        }, e => {
            let t = e.children.find(e => F(e, `thead`))?.children.find(e => F(e, `tr`))?.children.filter(e => F(e, `th`)) ?? [],
                n = e.children.find(e => F(e, `tbody`)),
                r = t.map(I);
            if (n)
                for (let e of n.children) {
                    if (!F(e, `tr`)) continue;
                    let t = 0;
                    for (let n of e.children) F(n, `td`) && (t < r.length && r[t] <= L && (r[t] = Math.max(r[t], I(n))), t++)
                }
            for (let e = 0; e < t.length; e++) {
                let n = r[e] > L ? `xl` : r[e] > 100 ? `lg` : r[e] > 40 ? `md` : `sm`;
                t[e].properties[`data-col-size`] = n
            }
            if (n)
                for (let e of n.children) {
                    if (!F(e, `tr`)) continue;
                    let n = 0;
                    for (let r of e.children) F(r, `td`) && (n < t.length && (r.properties[`data-col-size`] = t[n].properties[`data-col-size`]), n++)
                }
        })
    }
}

function F(e, t) {
    return e.type === `element` && e.tagName === t
}

function I(e) {
    let t = 0,
        n = e ? [e] : [];
    for (; n.length > 0;) {
        let e = n.pop();
        if (e) {
            if (e.type === `text`) {
                if (t += e.value.length, t > L) return t;
                continue
            }
            if (e.type === `element`)
                for (let t = e.children.length - 1; t >= 0; t--) n.push(e.children[t])
        }
    }
    return t
}
var L, Re = e((() => {
    b(), L = 160
}));

function R() {
    return e => {
        h(e, `list`, e => {
            for (let t of e.children) t.spread = !0
        })
    }
}

function ze() {
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
        h(e, (e, n, r) => {
            if (ee(e)) {
                if (e.name !== `writing`) return;
                let n = e.position?.start?.offset,
                    r = e.position?.end?.offset;
                if (n == null || r == null) return;
                i(e, d(e, typeof t.value == `string` ? t.value : void 0));
                return
            }
        })
    }
}

function Be(e) {
    return t => {
        h(t, `element`, t => {
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

function Ve(e, t, n, r) {
    let i = t + H.length,
        a = r.children[n - 1],
        o = r.children[n + 1],
        s = t > 0 && /\s/u.test(e[t - 1] ?? ``) || t === 0 && (a == null || a.type === `break`),
        c = i < e.length && /\s/u.test(e[i] ?? ``) || i === e.length && (o == null || o.type === `break`);
    return s && c
}

function z(e) {
    return e.url.startsWith(`sandbox:`) && !at.test(e.url.slice(8))
}

function He(e) {
    let t = e.children.findIndex(e => {
        let t = !1;
        return h(e, `link`, e => {
            if (z(e)) return t = !0, p
        }), t
    });
    if (t === -1) return [];
    let n = e.children.slice(0, t),
        r = n.map(e => ie(e)).join(``).trimEnd();
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
        let t = ie(e);
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

function Ue(e) {
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

function We(e, t, n, r) {
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

function Ge(e, t) {
    let n = new Map;
    for (let r of [!0, !1]) {
        let i = 0;
        for (; i < t.length;) {
            let a = We(e, t, i, r);
            a.candidate != null && !n.has(a.candidate.start) && n.set(a.candidate.start, a.candidate), i = a.nextStartIndex
        }
    }
    return [...n.values()]
}

function B(e, t, n) {
    let r = e.split(``);
    for (let e of n)
        for (let {
                offset: n,
                quote: i
            }
            of e.escapedQuotes) r[n] = t[i];
    return r.join(``)
}

function Ke(e, t) {
    let n = new Map(t.map(e => [e.start, e])),
        r = [];
    return h(e, `textDirective`, e => {
        let t = e.position?.start.offset,
            i = t == null ? void 0 : n.get(t);
        e.name === `codex-resource` && i != null && e.position?.end.offset === i.end && typeof e.attributes?.uri == `string` && r.push(i)
    }), r
}

function qe(e, t, n) {
    let r = new Set(t.map(e => e.start));
    h(e, `textDirective`, e => {
        let t = e.position?.start.offset;
        if (e.name !== `codex-resource` || t == null || !r.has(t)) return;
        let i = e.attributes ??= {};
        for (let [e, t] of Object.entries(i)) typeof t == `string` && (i[e] = t.replaceAll(`\\${n[`"`]}`, `"`).replaceAll(`\\${n[`'`]}`, `'`))
    })
}

function Je() {
    let e = this.parser;
    e != null && (this.parser = (t, n) => {
        if (!t.includes(st) || !t.includes(`\\"`) && !t.includes(`\\'`)) return e(t, n);
        let r = e(t, n),
            i = [];
        h(r, `textDirective`, e => {
            let t = e.position?.start.offset;
            e.name === `codex-resource` && t != null && i.push(t)
        });
        let a = Ge(t, i);
        if (a.length === 0) return r;
        let o = Ue(t);
        if (o == null) return r;
        let s = e(B(t, o, a), n),
            c = Ke(s, a);
        if (c.length === 0) return r;
        let l = c.length === a.length ? s : e(B(t, o, c), n);
        return qe(l, c, o), l
    })
}

function Ye() {
    return (e, t) => {
        h(e, `textDirective`, e => {
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
        n != null && h(e, `link`, (e, t, r) => {
            let [i] = e.children, a = e.position?.start.offset, o = e.position?.end.offset;
            if (!(typeof t != `number` || r == null || e.children.length !== 1 || i?.type !== `text` || !ut.test(e.url) || a == null || o == null || n.slice(a, o) !== i.value)) return r.children[t] = i, p
        })
    }
}

function V() {
    return e => {
        h(e, `text`, e => {
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
        h(e, `element`, (n, r) => {
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
    return e == null ? Z : [Ie(e, t, n), ...Z.slice(1)]
}
var et, tt, nt, H, rt, U, it, at, ot, W, st, ct, G, K, lt, ut, q, J, Y, X, dt, ft, Z, pt, Q, $, mt, ht, gt = e((() => {
    u(), ue(), oe(), de(), ve(), t(), f(), se(), ce(), De(), me(), te(), re(), b(), _e(), a(), ke(), Me(), Ce(), P(), Re(), ae(), et = new Set([`w`, `f`]), tt = e => e.startsWith(`sandbox:`) || et.has(e) || e.startsWith(`tel:`) || e.startsWith(`sms:`) ? e : s(e), nt = new Set([`table`, `code`, `li`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`]), H = `::${i}`, rt = new RegExp(H, `gu`), U = () => (e, t) => {
        let n = String(t.value);
        n !== `` && !n.includes(H) || h(e, (e, t, n) => {
            if (e.type === `text` && typeof t == `number` && n?.type === `paragraph`) {
                let r = e;
                if (!r.value.includes(H)) return;
                let a = [],
                    o = 0;
                for (let e of r.value.matchAll(rt)) {
                    let s = e.index;
                    s == null || !Ve(r.value, s, t, n) || (s > o && a.push({
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
                }), n.children.splice(t, 1, ...a), [p, t + a.length])
            }
            if (!g(e) || e.name !== `uploadLikenessButton`) return;
            let r = e.data ??= {};
            r.hName = i
        })
    }, it = () => e => {
        h(e, (e, t, n) => {
            if (!(!g(e) || e.name !== `uploadLikenessButton` || typeof t != `number` || n == null)) return n.children.splice(t, 1), [p, t]
        })
    }, at = /\.(?:jpe?g|png|gif|webp|heic|heif|mpo|avif)$/i, ot = /[.!?。！？]["')\]]?$/u, W = () => e => {
        h(e, `paragraph`, (e, t, n) => {
            if (typeof t != `number` || n == null) return;
            let r = !1,
                i = !1;
            if (h(e, `link`, e => {
                    if (z(e)) return r = !0, p;
                    e.url.startsWith(`sandbox:`) && (i = !0)
                }), !r || i) return;
            let a = !1;
            if (h(e, `image`, () => (a = !0, p)), !a) {
                let r = He(e);
                return r.length === 0 ? (n.children.splice(t, 1), [p, t]) : (e.children = r, p)
            }
        }), h(e, `link`, (e, t, n) => {
            if (!(!z(e) || typeof t != `number` || n == null)) return n.children.splice(t, 1, ...e.children), [p, t + e.children.length]
        })
    }, st = `:codex-resource`, ct = /&#(?:[xX]([\dA-Fa-f]+)|(\d+));?/gu, G = 57344, K = 63743, lt = /\u200b/g, ut = /^mailto:.*@[1-9]\d*x\.(?:png|jpe?g|gif|webp|avif|heic)$/i, q = [
        [v, {
            singleTilde: !1
        }], pe, R, [ge, {
            singleDollarTextMath: !1
        }], _, Je, U, ze, he
    ], J = [y, ...m ? [m] : [], fe, Ye, Xe, V], Y = [...q, ...J], X = [...q, D, ...J], dt = [W, ...Y], ft = [W, ...X], Z = [w, Qe, Le, [o, {
        target: `_new`,
        rel: `noopener noreferrer`
    }], C, je], pt = [
        [w, {
            output: `mathml`
        }], C
    ], Q = [
        [v, {
            singleTilde: !1
        }], pe, R, [ge, {
            singleDollarTextMath: !1
        }], _, Je, U
    ], $ = [he, y, ...m ? [m] : [], fe, it, Ye, Xe, V], mt = [...Q, ...$], ht = [...Q, Oe, ...$]
}));
export {
    ht as a, gt as c, tt as d, N as f, mt as i, Be as l, P as m, pt as n, $e as o, Ne as p, Y as r, Ze as s, Z as t, V as u
};
//# sourceMappingURL=92cd10e6-beovea1aiwg8fdep.js.map