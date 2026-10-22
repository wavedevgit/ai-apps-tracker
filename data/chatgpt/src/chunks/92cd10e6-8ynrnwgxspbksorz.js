import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    bQ as t,
    hZ as n,
    vQ as r,
    vZ as i,
    yZ as a
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    ARn as o,
    JSt as s,
    ORn as c,
    Os as l,
    VSt as u,
    VWn as d,
    WWn as f,
    XSt as p,
    YSt as m,
    Yht as ee,
    _Gn as te,
    aGn as ne,
    agt as h,
    bF as re,
    cGn as ie,
    hGn as ae,
    iGn as g,
    igt as oe,
    ks as se,
    nGn as _,
    oGn as v,
    qht as ce,
    xF as le,
    xbt as ue,
    ybt as de,
    zSt as fe
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    a as pe,
    o as me
} from "./b4c3a217-bg02fjm978r0nkjn.js";
import {
    r as he,
    t as ge
} from "./4e1f6607-ng1xolg91laibnlt.js";
import {
    i as _e,
    n as ve,
    r as ye,
    t as be
} from "./5ab42519-j98la4h3yh0pir32.js";
import {
    n as y,
    t as b
} from "./ce52ae67-h7tlc5oeh6o4lhgs.js";
import {
    a as xe,
    i as Se,
    r as Ce,
    t as we
} from "./32f10268-de09n2drueh33kpz.js";
import {
    n as x,
    t as Te
} from "./e87af100-gq1wz3rtpgwsw6k2.js";
import {
    r as Ee,
    t as De
} from "./051ead45-hajnnq1kur4ayj67.js";

function S(e) {
    let t = e || C;
    return function(e, n) {
        ie(e, `element`, function(e, r) {
            let i = Array.isArray(e.properties.className) ? e.properties.className : w,
                a = i.includes(`language-math`),
                o = i.includes(`math-display`),
                s = i.includes(`math-inline`),
                c = o;
            if (!a && !o && !s) return;
            let l = r[r.length - 1],
                u = e;
            if (e.tagName === `code` && a && l && l.type === `element` && l.tagName === `pre` && (u = l, l = r[r.length - 2], c = !0), !l) return;
            let d = Ce(u, {
                    whitespace: `pre`
                }),
                f;
            try {
                f = y.renderToString(d, {
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
                }), f = o === `parseerror` ? y.renderToString(d, {
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
            typeof f == `string` && (f = Se(f, {
                fragment: !0
            }).children);
            let p = l.children.indexOf(u);
            return l.children.splice(p, 1, ...f), v
        })
    }
}
var C, w, Oe = e((() => {
        xe(), we(), b(), ne(), C = {}, w = []
    })),
    ke = e((() => {
        Oe()
    }));

function Ae() {
    return e => {
        g(e, (e, t, n) => {
            if (e.type !== `textDirective`) return;
            let r = e;
            if (n == null || typeof t != `number` || r.name !== `highlight` || !Array.isArray(r.children) || r.children.length === 0) return;
            let i = n;
            if (Array.isArray(i.children)) return i.children.splice(t, 1, ...r.children), [v, t + r.children.length]
        })
    }
}
var T, je = e((() => {
    _(), a(), s(), T = () => e => {
        g(e, e => {
            if (!p(e) || e.name !== `highlight` || !Array.isArray(e.children) || e.children.length === 0) return;
            let t = e.data ??= {};
            t.hName = n
        })
    }
}));

function E(e) {
    return e.type === `element`
}

function Me(e) {
    return E(e) ? e.tagName === `code` : !1
}

function Ne() {
    return function(e) {
        let t = 0;
        g(e, `element`, function(e, n, r) {
            Me(e) && r && E(r) && r.tagName === `pre` && (e.properties ??= {}, e.properties.codeIndex = t++)
        })
    }
}
var Pe = e((() => {
    _()
}));

function Fe() {
    return new Map
}

function D(e, t) {
    return Array.isArray(e.properties.className) && e.properties.className.includes(t)
}

function O(e, t) {
    return e.size < k && t.length <= A
}

function Ie(e, t) {
    return {
        type: `element`,
        tagName: j,
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

function Le(e, t, n, r, i) {
    try {
        return {
            displayMode: t,
            html: y.renderToString(e, {
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
                html: y.renderToString(e, {
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

function Re(e, t, n = !1) {
    return () => (r, i) => {
        g(r, `element`, (r, a, o) => {
            if (typeof a != `number` || o == null) return;
            let s = D(r, `math-display`),
                c = D(r, `math-inline`),
                l = D(r, `language-math`),
                u = r.tagName === `pre` && r.children.some(e => e.type === `element` && e.tagName === `code` && D(e, `language-math`));
            if (!s && !c && !l && !u) return;
            let d = s || u,
                f = Ee(r),
                p = `${d?`display`:`inline`}:${f}`,
                m = e.get(p);
            if (m ?? (m = t?.get(p), m != null && O(e, p) && e.set(p, m)), m == null) {
                let t = i.messages.length,
                    s = Le(f, d, r, i, n);
                if (Array.isArray(s)) return o.children.splice(a, 1, ...s), [v, a + s.length];
                m = s, i.messages.length === t && O(e, p) && e.set(p, m)
            }
            return o.children.splice(a, 1, Ie(m, r)), [v, a + 1]
        })
    }
}
var k, A, j, M = e((() => {
    De(), b(), re(), _(), le((e, t) => y.renderToString(e, {
        displayMode: t,
        output: `mathml`,
        throwOnError: !1,
        trust: !1
    })), k = 256, A = 4096, j = `client-katex-layout`
}));

function ze() {
    return e => {
        g(e, {
            tagName: `table`
        }, e => {
            let t = e.children.find(e => N(e, `thead`))?.children.find(e => N(e, `tr`))?.children.filter(e => N(e, `th`)) ?? [],
                n = e.children.find(e => N(e, `tbody`)),
                r = t.map(P);
            if (n)
                for (let e of n.children) {
                    if (!N(e, `tr`)) continue;
                    let t = 0;
                    for (let n of e.children) N(n, `td`) && (t < r.length && r[t] <= F && (r[t] = Math.max(r[t], P(n))), t++)
                }
            for (let e = 0; e < t.length; e++) {
                let n = r[e] > F ? `xl` : r[e] > 100 ? `lg` : r[e] > 40 ? `md` : `sm`;
                t[e].properties[`data-col-size`] = n
            }
            if (n)
                for (let e of n.children) {
                    if (!N(e, `tr`)) continue;
                    let n = 0;
                    for (let r of e.children) N(r, `td`) && (n < t.length && (r.properties[`data-col-size`] = t[n].properties[`data-col-size`]), n++)
                }
        })
    }
}

function N(e, t) {
    return e.type === `element` && e.tagName === t
}

function P(e) {
    let t = 0,
        n = e ? [e] : [];
    for (; n.length > 0;) {
        let e = n.pop();
        if (e) {
            if (e.type === `text`) {
                if (t += e.value.length, t > F) return t;
                continue
            }
            if (e.type === `element`)
                for (let t = e.children.length - 1; t >= 0; t--) n.push(e.children[t])
        }
    }
    return t
}
var F, Be = e((() => {
    _(), F = 160
}));

function I() {
    return e => {
        g(e, `list`, e => {
            for (let t of e.children) t.spread = !0
        })
    }
}

function Ve() {
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
        g(e, (e, n, r) => {
            if (m(e)) {
                if (e.name !== `writing`) return;
                let n = e.position?.start?.offset,
                    r = e.position?.end?.offset;
                if (n == null || r == null) return;
                i(e, l(e, typeof t.value == `string` ? t.value : void 0));
                return
            }
        })
    }
}

function He(e) {
    return t => {
        g(t, `element`, t => {
            rt.has(t.tagName) && Object.defineProperty(t, "markdownSource", {
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

function Ue(e, t, n, r) {
    let i = t + V.length,
        a = r.children[n - 1],
        o = r.children[n + 1],
        s = t > 0 && /\s/u.test(e[t - 1] ?? ``) || t === 0 && (a == null || a.type === `break`),
        c = i < e.length && /\s/u.test(e[i] ?? ``) || i === e.length && (o == null || o.type === `break`);
    return s && c
}

function L(e) {
    return e.url.startsWith(`sandbox:`) && !ot.test(e.url.slice(8))
}

function We(e) {
    let t = e.children.findIndex(e => {
        let t = !1;
        return g(e, `link`, e => {
            if (L(e)) return t = !0, v
        }), t
    });
    if (t === -1) return [];
    let n = e.children.slice(0, t),
        r = n.map(e => te(e)).join(``).trimEnd();
    for (; r.length > 0;) {
        let e = r.lastIndexOf(`
`),
            t = r.slice(e + 1).trim();
        if (st.test(t)) break;
        if (e === -1) return [];
        r = r.slice(0, e).trimEnd()
    }
    if (r.length === 0) return [];
    let i = [],
        a = r.length;
    for (let e of n) {
        let t = te(e);
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

function Ge(e) {
    let t = new Set(e);
    for (let n of e.matchAll(lt)) {
        let e = n[1],
            r = n[2],
            i = Number.parseInt(e ?? r ?? ``, e ? 16 : 10);
        i >= W && i <= G && t.add(String.fromCodePoint(i))
    }
    let n = [];
    for (let e = W; e <= G; e++) {
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

function Ke(e, t, n, r) {
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

function qe(e, t) {
    let n = new Map;
    for (let r of [!0, !1]) {
        let i = 0;
        for (; i < t.length;) {
            let a = Ke(e, t, i, r);
            a.candidate != null && !n.has(a.candidate.start) && n.set(a.candidate.start, a.candidate), i = a.nextStartIndex
        }
    }
    return [...n.values()]
}

function R(e, t, n) {
    let r = e.split(``);
    for (let e of n)
        for (let {
                offset: n,
                quote: i
            }
            of e.escapedQuotes) r[n] = t[i];
    return r.join(``)
}

function Je(e, t) {
    let n = new Map(t.map(e => [e.start, e])),
        r = [];
    return g(e, `textDirective`, e => {
        let t = e.position?.start.offset,
            i = t == null ? void 0 : n.get(t);
        e.name === `codex-resource` && i != null && e.position?.end.offset === i.end && typeof e.attributes?.uri == `string` && r.push(i)
    }), r
}

function Ye(e, t, n) {
    let r = new Set(t.map(e => e.start));
    g(e, `textDirective`, e => {
        let t = e.position?.start.offset;
        if (e.name !== `codex-resource` || t == null || !r.has(t)) return;
        let i = e.attributes ??= {};
        for (let [e, t] of Object.entries(i)) typeof t == `string` && (i[e] = t.replaceAll(`\\${n[`"`]}`, `"`).replaceAll(`\\${n[`'`]}`, `'`))
    })
}

function z() {
    let e = this.parser;
    e != null && (this.parser = (t, n) => {
        if (!t.includes(ct) || !t.includes(`\\"`) && !t.includes(`\\'`)) return e(t, n);
        let r = e(t, n),
            i = [];
        g(r, `textDirective`, e => {
            let t = e.position?.start.offset;
            e.name === `codex-resource` && t != null && i.push(t)
        });
        let a = qe(t, i);
        if (a.length === 0) return r;
        let o = Ge(t);
        if (o == null) return r;
        let s = e(R(t, o, a), n),
            c = Je(s, a);
        if (c.length === 0) return r;
        let l = c.length === a.length ? s : e(R(t, o, c), n);
        return Ye(l, c, o), l
    })
}

function Xe() {
    return (e, t) => {
        g(e, `textDirective`, e => {
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

function Ze() {
    return (e, t) => {
        let n = typeof t.value == `string` ? t.value : null;
        n != null && g(e, `link`, (e, t, r) => {
            let [i] = e.children, a = e.position?.start.offset, o = e.position?.end.offset;
            if (!(typeof t != `number` || r == null || e.children.length !== 1 || i?.type !== `text` || !dt.test(e.url) || a == null || o == null || n.slice(a, o) !== i.value)) return r.children[t] = i, v
        })
    }
}

function B() {
    return e => {
        g(e, `text`, e => {
            e.value = e.value.replace(ut, ``)
        })
    }
}

function Qe({
    highlightEnabled: e,
    hideInaccessibleFiles: t
}) {
    return t ? e ? pt : ft : e ? Y : J
}

function $e() {
    return e => {
        let t = e.position?.end.offset;
        g(e, `element`, (n, r) => {
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

function et(e, t, n = !1) {
    return e == null ? X : [Re(e, t, n), ...X.slice(1)]
}
var tt, nt, rt, V, it, H, at, ot, st, U, ct, lt, W, G, ut, dt, K, q, J, Y, ft, pt, X, mt, Z, Q, ht, $, gt = e((() => {
    s(), fe(), oe(), pe(), be(), t(), ae(), d(), de(), ke(), ge(), ce(), c(), _(), ye(), a(), je(), Pe(), Te(), M(), Be(), se(), tt = new Set([`w`, `f`]), nt = e => e.startsWith(`sandbox:`) || tt.has(e) || e.startsWith(`tel:`) || e.startsWith(`sms:`) ? e : f(e), rt = new Set([`table`, `code`, `li`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`]), V = `::${i}`, it = new RegExp(V, `gu`), H = () => (e, t) => {
        let n = String(t.value);
        n !== `` && !n.includes(V) || g(e, (e, t, n) => {
            if (e.type === `text` && typeof t == `number` && n?.type === `paragraph`) {
                let r = e;
                if (!r.value.includes(V)) return;
                let a = [],
                    o = 0;
                for (let e of r.value.matchAll(it)) {
                    let s = e.index;
                    s == null || !Ue(r.value, s, t, n) || (s > o && a.push({
                        type: `text`,
                        value: r.value.slice(o, s)
                    }), a.push({
                        type: `textDirective`,
                        name: i,
                        children: [],
                        data: {
                            hName: i
                        }
                    }), o = s + V.length)
                }
                return a.length === 0 ? void 0 : (o < r.value.length && a.push({
                    type: `text`,
                    value: r.value.slice(o)
                }), n.children.splice(t, 1, ...a), [v, t + a.length])
            }
            if (!p(e) || e.name !== `uploadLikenessButton`) return;
            let r = e.data ??= {};
            r.hName = i
        })
    }, at = () => e => {
        g(e, (e, t, n) => {
            if (!(!p(e) || e.name !== `uploadLikenessButton` || typeof t != `number` || n == null)) return n.children.splice(t, 1), [v, t]
        })
    }, ot = /\.(?:jpe?g|png|gif|webp|heic|heif|mpo|avif)$/i, st = /[.!?。！？]["')\]]?$/u, U = () => e => {
        g(e, `paragraph`, (e, t, n) => {
            if (typeof t != `number` || n == null) return;
            let r = !1,
                i = !1;
            if (g(e, `link`, e => {
                    if (L(e)) return r = !0, v;
                    e.url.startsWith(`sandbox:`) && (i = !0)
                }), !r || i) return;
            let a = !1;
            if (g(e, `image`, () => (a = !0, v)), !a) {
                let r = We(e);
                return r.length === 0 ? (n.children.splice(t, 1), [v, t]) : (e.children = r, v)
            }
        }), g(e, `link`, (e, t, n) => {
            if (!(!L(e) || typeof t != `number` || n == null)) return n.children.splice(t, 1, ...e.children), [v, t + e.children.length]
        })
    }, ct = `:codex-resource`, lt = /&#(?:[xX]([\dA-Fa-f]+)|(\d+));?/gu, W = 57344, G = 63743, ut = /\u200b/g, dt = /^mailto:.*@[1-9]\d*x\.(?:png|jpe?g|gif|webp|avif|heic)$/i, K = [
        [o, {
            singleTilde: !1
        }], he, I, [ve, {
            singleDollarTextMath: !1
        }], ee, z, H, Ve, _e
    ], q = [h, ...u ? [u] : [], me, Xe, Ze, B], J = [...K, ...q], Y = [...K, T, ...q], ft = [U, ...J], pt = [U, ...Y], X = [S, $e, ze, [ue, {
        target: `_new`,
        rel: `noopener noreferrer`
    }], x, Ne], mt = [
        [S, {
            output: `mathml`
        }], x
    ], Z = [
        [o, {
            singleTilde: !1
        }], he, I, [ve, {
            singleDollarTextMath: !1
        }], ee, z, H
    ], Q = [_e, h, ...u ? [u] : [], me, at, Xe, Ze, B], ht = [...Z, ...Q], $ = [...Z, Ae, ...Q]
}));
export {
    $ as a, gt as c, nt as d, j as f, ht as i, He as l, M as m, mt as n, et as o, Fe as p, J as r, Qe as s, X as t, B as u
};
//# sourceMappingURL=92cd10e6-8ynrnwgxspbksorz.js.map