import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    GX as t,
    JX as n,
    JZ as r,
    XZ as i,
    YX as a
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    BSt as o,
    CWn as s,
    JSt as c,
    Jht as l,
    NLn as u,
    Os as d,
    RSt as f,
    Sbt as p,
    XUn as m,
    Xht as h,
    YSt as g,
    agt as ee,
    bF as te,
    bbt as ne,
    cWn as _,
    dWn as re,
    fWn as v,
    jLn as ie,
    ks as ae,
    mWn as oe,
    ogt as y,
    qSt as se,
    qUn as ce,
    uWn as b,
    xWn as le,
    yF as ue
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    a as de,
    o as fe
} from "./b4c3a217-lcs3v01fpow70kni.js";
import {
    r as pe,
    t as me
} from "./4e1f6607-egk396g1wgh902rj.js";
import {
    i as he,
    n as ge,
    r as _e,
    t as ve
} from "./5ab42519-fdo50pfpg0y91dgp.js";
import {
    n as x,
    t as S
} from "./ce52ae67-h7tlc5oeh6o4lhgs.js";
import {
    a as ye,
    i as be,
    r as xe,
    t as Se
} from "./32f10268-kfx9sy95swkmacfr.js";
import {
    n as C,
    t as Ce
} from "./e87af100-hemmyqzbn7uw6jtw.js";
import {
    r as we,
    t as Te
} from "./051ead45-hajnnq1kur4ayj67.js";

function w(e) {
    let t = e || T;
    return function(e, n) {
        oe(e, `element`, function(e, r) {
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
            let p = l.children.indexOf(u);
            return l.children.splice(p, 1, ...f), v
        })
    }
}
var T, E, Ee = e((() => {
        ye(), Se(), S(), re(), T = {}, E = []
    })),
    De = e((() => {
        Ee()
    }));

function Oe() {
    return e => {
        b(e, (e, t, n) => {
            if (e.type !== `textDirective`) return;
            let r = e;
            if (n == null || typeof t != `number` || r.name !== `highlight` || !Array.isArray(r.children) || r.children.length === 0) return;
            let i = n;
            if (Array.isArray(i.children)) return i.children.splice(t, 1, ...r.children), [v, t + r.children.length]
        })
    }
}
var D, ke = e((() => {
    _(), a(), se(), D = () => e => {
        b(e, e => {
            if (!g(e) || e.name !== `highlight` || !Array.isArray(e.children) || e.children.length === 0) return;
            let n = e.data ??= {};
            n.hName = t
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
        b(e, `element`, function(e, n, r) {
            Ae(e) && r && O(r) && r.tagName === `pre` && (e.properties ??= {}, e.properties.codeIndex = t++)
        })
    }
}
var Me = e((() => {
    _()
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
        b(r, `element`, (r, a, o) => {
            if (typeof a != `number` || o == null) return;
            let s = k(r, `math-display`),
                c = k(r, `math-inline`),
                l = k(r, `language-math`),
                u = r.tagName === `pre` && r.children.some(e => e.type === `element` && e.tagName === `code` && k(e, `language-math`));
            if (!s && !c && !l && !u) return;
            let d = s || u,
                f = we(r),
                p = `${d?`display`:`inline`}:${f}`,
                m = e.get(p);
            if (m ?? (m = t?.get(p), m != null && A(e, p) && e.set(p, m)), m == null) {
                let t = i.messages.length,
                    s = Fe(f, d, r, i, n);
                if (Array.isArray(s)) return o.children.splice(a, 1, ...s), [v, a + s.length];
                m = s, i.messages.length === t && A(e, p) && e.set(p, m)
            }
            return o.children.splice(a, 1, Pe(m, r)), [v, a + 1]
        })
    }
}
var j, M, N, P = e((() => {
    Te(), S(), ue(), _(), te((e, t) => x.renderToString(e, {
        displayMode: t,
        output: `mathml`,
        throwOnError: !1,
        trust: !1
    })), j = 256, M = 4096, N = `client-katex-layout`
}));

function Le() {
    return e => {
        b(e, {
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
    _(), L = 160
}));

function R() {
    return e => {
        b(e, `list`, e => {
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
        b(e, (e, n, r) => {
            if (c(e)) {
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
        b(t, `element`, t => {
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

function Ve(e, t, n, r) {
    let i = t + V.length,
        a = r.children[n - 1],
        o = r.children[n + 1],
        s = t > 0 && /\s/u.test(e[t - 1] ?? ``) || t === 0 && (a == null || a.type === `break`),
        c = i < e.length && /\s/u.test(e[i] ?? ``) || i === e.length && (o == null || o.type === `break`);
    return s && c
}

function z(e) {
    return e.url.startsWith(`sandbox:`) && !ot.test(e.url.slice(8))
}

function He(e) {
    let t = e.children.findIndex(e => {
        let t = !1;
        return b(e, `link`, e => {
            if (z(e)) return t = !0, v
        }), t
    });
    if (t === -1) return [];
    let n = e.children.slice(0, t),
        r = n.map(e => s(e)).join(``).trimEnd();
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
        let t = s(e);
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

function Ke(e, t, n) {
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
    return b(e, `textDirective`, e => {
        let t = e.position?.start.offset,
            i = t == null ? void 0 : n.get(t);
        e.name === `codex-resource` && i != null && e.position?.end.offset === i.end && typeof e.attributes?.uri == `string` && r.push(i)
    }), r
}

function Je(e, t, n) {
    let r = new Set(t.map(e => e.start));
    b(e, `textDirective`, e => {
        let t = e.position?.start.offset;
        if (e.name !== `codex-resource` || t == null || !r.has(t)) return;
        let i = e.attributes ??= {};
        for (let [e, t] of Object.entries(i)) typeof t == `string` && (i[e] = t.replaceAll(`\\${n[`"`]}`, `"`).replaceAll(`\\${n[`'`]}`, `'`))
    })
}

function Ye() {
    let e = this.parser;
    e != null && (this.parser = (t, n) => {
        if (!t.includes(ct) || !t.includes(`\\"`) && !t.includes(`\\'`)) return e(t, n);
        let r = e(t, n),
            i = [];
        b(r, `textDirective`, e => {
            let t = e.position?.start.offset;
            e.name === `codex-resource` && t != null && i.push(t)
        });
        let a = Ge(t, i);
        if (a.length === 0) return r;
        let o = Ue(t);
        if (o == null) return r;
        let s = e(Ke(t, o, a), n),
            c = qe(s, a);
        if (c.length === 0) return r;
        let l = c.length === a.length ? s : e(Ke(t, o, c), n);
        return Je(l, c, o), l
    })
}

function Xe() {
    return (e, t) => {
        b(e, `textDirective`, e => {
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
        n != null && b(e, `link`, (e, t, r) => {
            let [i] = e.children, a = e.position?.start.offset, o = e.position?.end.offset;
            if (!(typeof t != `number` || r == null || e.children.length !== 1 || i?.type !== `text` || !dt.test(e.url) || a == null || o == null || n.slice(a, o) !== i.value)) return r.children[t] = i, v
        })
    }
}

function B() {
    return e => {
        b(e, `text`, e => {
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
        b(e, `element`, (n, r) => {
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
    return e == null ? X : [Ie(e, t, n), ...X.slice(1)]
}
var tt, nt, rt, V, it, H, at, ot, st, U, ct, lt, W, G, ut, dt, K, q, J, Y, ft, pt, X, mt, Z, Q, ht, $, gt = e((() => {
    se(), f(), ee(), de(), ve(), i(), le(), ce(), ne(), De(), me(), l(), ie(), _(), _e(), a(), ke(), Me(), Ce(), P(), Re(), ae(), tt = new Set([`w`, `f`]), nt = e => e.startsWith(`sandbox:`) || tt.has(e) || e.startsWith(`tel:`) || e.startsWith(`sms:`) ? e : m(e), rt = new Set([`table`, `code`, `li`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`]), V = `::${n}`, it = new RegExp(V, `gu`), H = () => (e, t) => {
        let r = String(t.value);
        r !== `` && !r.includes(V) || b(e, (e, t, r) => {
            if (e.type === `text` && typeof t == `number` && r?.type === `paragraph`) {
                let i = e;
                if (!i.value.includes(V)) return;
                let a = [],
                    o = 0;
                for (let e of i.value.matchAll(it)) {
                    let s = e.index;
                    s == null || !Ve(i.value, s, t, r) || (s > o && a.push({
                        type: `text`,
                        value: i.value.slice(o, s)
                    }), a.push({
                        type: `textDirective`,
                        name: n,
                        children: [],
                        data: {
                            hName: n
                        }
                    }), o = s + V.length)
                }
                return a.length === 0 ? void 0 : (o < i.value.length && a.push({
                    type: `text`,
                    value: i.value.slice(o)
                }), r.children.splice(t, 1, ...a), [v, t + a.length])
            }
            if (!g(e) || e.name !== `uploadLikenessButton`) return;
            let i = e.data ??= {};
            i.hName = n
        })
    }, at = () => e => {
        b(e, (e, t, n) => {
            if (!(!g(e) || e.name !== `uploadLikenessButton` || typeof t != `number` || n == null)) return n.children.splice(t, 1), [v, t]
        })
    }, ot = /\.(?:jpe?g|png|gif|webp|heic|heif|mpo|avif)$/i, st = /[.!?。！？]["')\]]?$/u, U = () => e => {
        b(e, `paragraph`, (e, t, n) => {
            if (typeof t != `number` || n == null) return;
            let r = !1,
                i = !1;
            if (b(e, `link`, e => {
                    if (z(e)) return r = !0, v;
                    e.url.startsWith(`sandbox:`) && (i = !0)
                }), !r || i) return;
            let a = !1;
            if (b(e, `image`, () => (a = !0, v)), !a) {
                let r = He(e);
                return r.length === 0 ? (n.children.splice(t, 1), [v, t]) : (e.children = r, v)
            }
        }), b(e, `link`, (e, t, n) => {
            if (!(!z(e) || typeof t != `number` || n == null)) return n.children.splice(t, 1, ...e.children), [v, t + e.children.length]
        })
    }, ct = `:codex-resource`, lt = /&#(?:[xX]([\dA-Fa-f]+)|(\d+));?/gu, W = 57344, G = 63743, ut = /\u200b/g, dt = /^mailto:.*@[1-9]\d*x\.(?:png|jpe?g|gif|webp|avif|heic)$/i, K = [
        [u, {
            singleTilde: !1
        }], pe, R, [ge, {
            singleDollarTextMath: !1
        }], h, Ye, H, ze, he
    ], q = [y, ...o ? [o] : [], fe, Xe, Ze, B], J = [...K, ...q], Y = [...K, D, ...q], ft = [U, ...J], pt = [U, ...Y], X = [w, $e, Le, [p, {
        target: `_new`,
        rel: `noopener noreferrer`
    }], C, je], mt = [
        [w, {
            output: `mathml`
        }], C
    ], Z = [
        [u, {
            singleTilde: !1
        }], pe, R, [ge, {
            singleDollarTextMath: !1
        }], h, Ye, H
    ], Q = [he, y, ...o ? [o] : [], fe, at, Xe, Ze, B], ht = [...Z, ...Q], $ = [...Z, Oe, ...Q]
}));
export {
    $ as a, gt as c, nt as d, N as f, ht as i, Be as l, P as m, mt as n, et as o, Ne as p, J as r, Qe as s, X as t, B as u
};
//# sourceMappingURL=92cd10e6-m2fkzut06iuv64q7.js.map