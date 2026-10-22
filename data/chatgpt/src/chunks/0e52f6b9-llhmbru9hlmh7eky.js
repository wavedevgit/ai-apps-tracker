const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/f40d49f0-bqhons41pip7brew.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/8d846022-h8na3cr69irkxevj.js", "assets/conversation-small-i79e9c315w50am5f.js", "assets/4813494d-itnrgnth03y1sm9d.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/30901919-ikyi1r55w2i02fom.js", "assets/c470f5ab-lpy67c9in1skobas.js", "assets/0e5afe53-jfvcgv06snw44wce.js", "assets/conversation-small-dl8qqd6x.css", "assets/df93ef8c-negqtpivc7va67gk.js", "assets/32f10268-gktwnencuhxk4khr.js", "assets/7ec8c41d-ko30fq8d33fn61t1.js", "assets/5fe72b0f-mpesntcup5zqacug.js", "assets/ce52ae67-lx4d0mjipg8y23bz.js", "assets/katex-irstudlx.css"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    c7 as n,
    l7 as r
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    Bn as i,
    Vn as a,
    cn as o,
    ln as s
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    EGn as c,
    IWn as l,
    MWn as u,
    NWn as d,
    PWn as f,
    Q_t as p,
    RWn as m,
    VWn as h,
    X_t as g,
    YWn as _,
    Yht as ee,
    ZWn as te,
    Zht as ne,
    _Rn as re,
    gRn as ie,
    hRn as ae,
    iGn as oe,
    kWn as se,
    mRn as ce,
    oGn as le,
    rGn as v,
    tGn as ue,
    vRn as de,
    zWn as y
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    r as fe,
    t as pe
} from "./4e1f6607-ejs9etn25820gj5k.js";
import {
    n as b,
    t as me
} from "./d4c740a3-m98a0dejurzr8grq.js";
import {
    n as he,
    t as ge
} from "./500b4410-cfqfpda20umoqozb.js";
import {
    n as x,
    r as _e,
    t as ve
} from "./60ba3cb6-nf79xkjvwk6d84s4.js";
import {
    i as ye,
    n as be,
    r as xe,
    t as S
} from "./c84315b1-iw8c0rwi0ius3cfn.js";
import {
    t as Se
} from "./d5fde054-peiira3ml4aov3c6.js";

function Ce(e = []) {
    let t = new Set(e);
    return () => e => {
        h(e, (e, n, r) => {
            if (!we(e)) return;
            let i = C(e.data) ? e.data : {},
                a = Ee(i.hProperties),
                o = t.has(e.name),
                s = `hName` in i || `hProperties` in i;
            if (!o && !s) return !r || typeof n != `number` ? void 0 : (Oe(r, n, e.children), n);
            e.data = {
                ...i,
                hName: o || !(`hName` in i) || typeof i.hName != `string` ? e.name : i.hName,
                hProperties: {
                    ...a,
                    ...Ee(e.attributes)
                }
            }
        })
    }
}

function we(e) {
    return C(e) && typeof e.name == `string` && Te(e.type)
}

function Te(e) {
    return e === `textDirective` || e === `leafDirective` || e === `containerDirective`
}

function C(e) {
    return typeof e == `object` && !!e
}

function Ee(e) {
    if (!C(e)) return {};
    let t = {};
    for (let [n, r] of Object.entries(e)) De(r) && (t[n] = r);
    return t
}

function De(e) {
    return e == null || typeof e == `string` || typeof e == `number` || typeof e == `boolean` || Array.isArray(e) && e.every(e => typeof e == `string` || typeof e == `number`)
}

function Oe(e, t, n) {
    e.children.splice(t, 1, ...n ?? [])
}
var ke = e((() => {
    a(), y()
}));

function Ae(e) {
    let t = je(e),
        n = Me(e);
    return Ne(t.runSync(t.parse(n), n), e)
}

function je(e) {
    let t = e.rehypePlugins || T,
        n = e.remarkPlugins || T,
        r = e.remarkRehypeOptions ? {
            ...e.remarkRehypeOptions,
            ...E
        } : E;
    return u().use(te).use(n).use(m, r).use(t)
}

function Me(e) {
    let t = e.children || ``,
        n = new f;
    return typeof t == `string` ? n.value = t : `` + t, n
}

function Ne(e, t) {
    let n = t.allowedElements,
        r = t.allowElement,
        i = t.components,
        a = t.disallowedElements,
        o = t.skipHtml,
        s = t.unwrapDisallowed,
        c = t.urlTransform || Pe;
    for (let e of Ie) Object.hasOwn(t, e.from) && `` + e.from + (e.to ? "use `" + e.to + "` instead" : `remove it`) + e.id;
    return h(e, l), le(e, {
        Fragment: w.Fragment,
        components: i,
        ignoreInvalidStyle: !0,
        jsx: w.jsx,
        jsxs: w.jsxs,
        passKeys: !0,
        passNode: !0
    });

    function l(e, t, i) {
        if (e.type === `raw` && i && typeof t == `number`) return o ? i.children.splice(t, 1) : i.children[t] = {
            type: `text`,
            value: e.value
        }, t;
        if (e.type === `element`) {
            let t;
            for (t in v)
                if (Object.hasOwn(v, t) && Object.hasOwn(e.properties, t)) {
                    let n = e.properties[t],
                        r = v[t];
                    (r === null || r.includes(e.tagName)) && (e.properties[t] = c(String(n || ``), t, e))
                }
        }
        if (e.type === `element`) {
            let o = n ? !n.includes(e.tagName) : a ? a.includes(e.tagName) : !1;
            if (!o && r && typeof t == `number` && (o = !r(e, t, i)), o && i && typeof t == `number`) return s && e.children ? i.children.splice(t, 1, ...e.children) : i.children.splice(t, 1), t
        }
    }
}

function Pe(e) {
    let t = e.indexOf(`:`),
        n = e.indexOf(`?`),
        r = e.indexOf(`#`),
        i = e.indexOf(`/`);
    return t === -1 || i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || Fe.test(e.slice(0, t)) ? e : ``
}
var w, T, E, Fe, Ie, Le = e((() => {
        c(), oe(), ue(), w = i(), a(), _(), l(), se(), y(), d(), T = [], E = {
            allowDangerousHtml: !0
        }, Fe = /^(https?|ircs?|mailto|xmpp)$/i, Ie = [{
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
            from: `className`,
            id: `remove-classname`
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
    D = e((() => {
        Le()
    }));

function Re(e) {
    let t = this,
        n = e || ze,
        r = t.data(),
        i = r.micromarkExtensions ||= [],
        a = r.fromMarkdownExtensions ||= [],
        o = r.toMarkdownExtensions ||= [];
    i.push(ce(n)), a.push(re()), o.push(de(n))
}
var ze, Be = e((() => {
        ie(), ae(), ze = {}
    })),
    Ve = e((() => {
        Be()
    })),
    O, k = e((() => {
        D(), O = e => e.startsWith(`tel:`) || e.startsWith(`sms:`) || e.startsWith(`data:image/`) ? e : Pe(e)
    }));
async function He() {
    if (N) return N;
    if (P) return P;
    P = (async () => {
        let [{
            remarkMath: e
        }, {
            default: t
        }] = await Promise.all([o(() => import(`./f40d49f0-bqhons41pip7brew.js`), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])), o(() => import(`./df93ef8c-negqtpivc7va67gk.js`), __vite__mapDeps([11, 1, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15])), o(() => Promise.resolve({}), __vite__mapDeps([16]))]);
        return N = {
            remarkPlugins: [
                [e, {
                    singleDollarTextMath: !1
                }]
            ],
            rehypePlugins: [t]
        }, N
    })();
    try {
        return await P
    } catch (e) {
        throw P = null, e
    }
}

function A(e) {
    let [t, n] = (0, j.useState)(!!N);
    return (0, j.useEffect)(() => {
        if (!e || t) return;
        let r = !0;
        return He().then(() => {
            r && n(!0)
        }).catch(() => {}), () => {
            r = !1
        }
    }, [e, t]), t && e && N ? N : M
}
var j, M, N, P, Ue = e((() => {
    j = t(a()), s(), M = {
        remarkPlugins: [],
        rehypePlugins: []
    }, N = null, P = null
}));

function F(e) {
    return !e || typeof e != `object` || !(`props` in e) || typeof e.props != `object` || !e.props ? {
        code: ``,
        language: `text`
    } : {
        code: `children` in e.props && typeof e.props.children == `string` ? e.props.children.replace(/\n$/g, ``) : ``,
        language: `className` in e.props && typeof e.props.className == `string` ? e.props.className.match(/language-(.*)$/)?.[1] ?? `text` : `text`
    }
}
var I = e((() => {
    a()
}));

function We({
    children: e,
    directives: t,
    includeMath: n = !1,
    breakNewLines: r = !1,
    components: i,
    remarkPlugins: a,
    rehypePlugins: o,
    allowedElements: s,
    disallowedElements: c,
    unwrapDisallowed: l,
    skipHtml: u,
    urlTransform: d = O,
    className: f,
    copyableCodeBlocks: p = !0,
    dir: m
}) {
    let h = A(n),
        g = (0, L.useMemo)(() => t?.map(e => e.directiveName) ?? [], [t]),
        _ = (0, L.useMemo)(() => {
            let e = {
                ...Je,
                ...p ? null : Xe,
                ...i
            };
            return t?.reduce((e, t) => (e[t.directiveName] = t.render, e), e) ?? e
        }, [p, i, t]);
    return (0, R.jsx)(Ge, {
        className: f,
        dir: m,
        children: (0, R.jsx)(Ae, {
            remarkPlugins: (0, L.useMemo)(() => {
                let e = [];
                return g.length > 0 && (e.push(ne), e.push(Ce(g))), e.push(...h.remarkPlugins), r && e.push(fe), z && e.push([Re, {
                    singleTilde: !1
                }]), [...e, ...a ?? []]
            }, [r, g, h.remarkPlugins, a]),
            rehypePlugins: (0, L.useMemo)(() => [...o ?? [], ...h.rehypePlugins], [o, h.rehypePlugins]),
            components: _,
            allowedElements: s,
            disallowedElements: c,
            unwrapDisallowed: l,
            skipHtml: u,
            urlTransform: d,
            children: e
        })
    })
}

function Ge({
    className: e,
    children: t,
    ...r
}) {
    return (0, R.jsx)(`div`, {
        className: n(xe.MarkdownContent, e),
        ...r,
        children: t
    })
}
var L, R, z, B, V, Ke, qe, Je, Ye, Xe, H = e((() => {
    r(), L = t(a()), D(), pe(), ee(), Ve(), _e(), he(), ke(), ye(), k(), Ue(), I(), R = i(), z = (() => {
        try {
            return !0
        } catch {
            return !1
        }
    })(), B = ({
        children: e,
        className: t
    }) => {
        let {
            code: n,
            language: r
        } = F(e);
        return (0, R.jsx)(ve, {
            language: r,
            className: t,
            children: n
        })
    }, V = ({
        children: e,
        className: t
    }) => (0, R.jsx)(`code`, {
        className: n(xe.InlineCode, t),
        dir: `ltr`,
        children: e
    }), Ke = ({
        children: e,
        node: t,
        ...n
    }) => (0, R.jsx)(ge, {
        as: `a`,
        ...n,
        children: e
    }), qe = ({
        node: e,
        children: t,
        ...n
    }) => (0, R.jsx)(`td`, {
        ...n,
        children: L.Children.map(t, (e, t) => e === `<br>` ? (0, R.jsx)(`br`, {}, t) : e)
    }), Je = {
        code: V,
        pre: B,
        a: Ke,
        td: qe
    }, Ye = ({
        children: e,
        className: t
    }) => {
        let {
            code: n,
            language: r
        } = F(e);
        return (0, R.jsx)(x, {
            className: t,
            children: (0, R.jsx)(x.Code, {
                language: r,
                children: n
            })
        })
    }, Xe = {
        pre: Ye
    }
}));

function Ze({
    value: e,
    block: t = !1,
    ...n
}) {
    let r = A(!0),
        i = t ? `\\[\n${e}\n\\]` : `\\(${e}\\)`;
    return (0, U.jsx)(t ? `div` : `span`, {
        ...n,
        dir: `ltr`,
        children: (0, U.jsx)(Ae, {
            remarkPlugins: r.remarkPlugins,
            rehypePlugins: r.rehypePlugins,
            components: t ? void 0 : Qe,
            urlTransform: O,
            skipHtml: !0,
            children: i
        })
    })
}
var U, Qe, $e = e((() => {
        a(), D(), k(), Ue(), U = i(), Qe = {
            p: ({
                children: e
            }) => (0, U.jsx)(U.Fragment, {
                children: e
            })
        }
    })),
    et, tt = e((() => {
        et = (e, t, n, r) => {
            let i = r.reduce((e, t) => e + t.height, 0),
                a = e - i;
            if (a === 0) return r;
            if (a > 0) {
                let e = {
                    id: n,
                    offset: i,
                    height: a,
                    duration: t,
                    done: !1
                };
                return [...r, e]
            }
            if (!r.at(-1)) return r;
            let o = [...r];
            for (let e = r.length - 1; e > -1; e--) {
                let t = r[e];
                if (t.height + a > 0) {
                    t.height += a;
                    break
                }
                a += t.height, o.splice(e, 1)
            }
            return o
        }
    }));

function nt(e, t) {
    let n = (0, W.useRef)([]),
        r = (0, W.useRef)(e.length),
        i = (0, W.useRef)(Date.now());
    return (0, W.useEffect)(() => {
        if (!t) return;
        let a = Date.now(),
            o = e.length,
            s = o - r.current,
            c = a - i.current;
        if (s < ot || c < at) return;
        let l = s / (c / 1e3),
            u = n.current;
        u.push(l), u.length > st && u.shift(), r.current = o, i.current = a
    }, [e, t]), () => {
        let e = n.current,
            t = rt(e),
            r = it(e, t);
        return rt(e.filter(e => Math.abs(e - t) <= ct * r))
    }
}

function rt(e) {
    return e.length ? e.reduce((e, t) => e + t, 0) / e.length : 0
}

function it(e, t) {
    if (!e.length) return 0;
    let n = e.reduce((e, n) => e + (n - t) ** 2, 0) / e.length;
    return Math.sqrt(n)
}
var W, at, ot, st, ct, lt = e((() => {
    W = t(a()), at = 10, ot = 1, st = 30, ct = 2
}));

function ut() {
    let [e, t] = (0, G.useState)(() => !g || document.visibilityState !== `hidden`);
    return (0, G.useEffect)(() => {
        if (!g) return;
        let e = () => {
            t(document.visibilityState !== `hidden`)
        };
        return document.addEventListener(`visibilitychange`, e), () => {
            document.removeEventListener(`visibilitychange`, e)
        }
    }, []), e
}
var G, dt = e((() => {
    G = t(a()), p()
}));

function ft(e, t, n) {
    let [r, i] = (0, K.useState)(t ? 0 : e.length), [a, o] = (0, K.useState)([]), s = (0, K.useRef)(e), c = ut(), l = (t || r < e.length) && c, u = t ? J : 0, d = r >= e.length - u, f = b((() => {
        if (!t) return q;
        let n = e.length - r - J;
        return n > 0 ? q : q + Math.abs(n) * ht
    })()), p = nt(e, t), m = b(r);
    (0, K.useEffect)(() => {
        let t = mt(s.current, e, m.current);
        i(t), s.current = e
    }, [e, m]);
    let h = b(() => {
        let [s, c] = gt({
            streaming: t,
            text: e,
            cursor: r,
            appended: a
        });
        i(s), o(c), !t && s >= e.length && n?.()
    });
    (0, K.useEffect)(() => {
        if (!c) {
            i(e.length), o([]);
            return
        }
        if (d) return;
        let t = Date.now(),
            n = requestAnimationFrame(function e() {
                let r = Date.now();
                r - t >= f.current && (h.current(), t = r), n = requestAnimationFrame(e)
            });
        return () => {
            cancelAnimationFrame(n)
        }
    }, [d, f, h, c, e.length]);
    let g = l ? Y(e.slice(0, r) + a.join(``), a) : [],
        _ = l ? g.join(``).replace(/\s*```\s*$/, ``) : ``;
    return {
        smoothing: l,
        getCharactersPerSecond: p,
        smoothedText: e.slice(0, r) + _
    }
}

function pt(e, t) {
    let n = 0,
        r = 0;
    for (; n < e.length && r < t.length && e.charCodeAt(n) === t.charCodeAt(r);) n++, r++;
    let i = e.length - 1,
        a = t.length - 1;
    for (; i >= n && a >= r && e.charCodeAt(i) === t.charCodeAt(a);) i--, a--;
    let o = [],
        s = n,
        c = r;
    for (; s <= i && c <= a;)
        if (e.charCodeAt(s) === t.charCodeAt(c)) s++, c++;
        else {
            let n = c;
            for (; c <= a && t.charCodeAt(c) !== e.charCodeAt(s);) c++;
            let r = c - n;
            r > 0 && o.push({
                startInNext: n,
                length: r,
                insertBeforePrevIndex: s
            })
        } if (c <= a) {
        let e = a - c + 1;
        o.push({
            startInNext: c,
            length: e,
            insertBeforePrevIndex: s
        })
    }
    return o
}

function mt(e, t, n) {
    if (n === 0) return 0;
    let r = pt(e, t),
        i = 0;
    for (let e of r) e.insertBeforePrevIndex <= n && (i += e.length);
    return n + i
}
var K, q, J, ht, gt, _t, vt, Y, yt = e((() => {
    K = t(a()), lt(), dt(), me(), q = 16, J = 20, ht = 10, gt = ({
        streaming: e,
        text: t,
        cursor: n,
        appended: r
    }) => {
        let i = e ? 1 : 3;
        for (; i > 0 && n < t.length;)[n, r] = _t({
            streaming: e,
            text: t,
            cursor: n,
            appended: r
        }), (r.at(0)?.includes("`") ? /[\s.([]/.test(t.charAt(n)) : /\s/.test(t.charAt(n))) && i--;
        return [n, r]
    }, _t = ({
        streaming: e,
        text: t,
        cursor: n,
        appended: r
    }) => {
        if (!e && n + 1 === t.length) return [n + 1, []];
        let i = t.slice(n);
        if (i[0] === `\\`) return [n + 2, r];
        if (e && !r.includes(`)`)) {
            let e = t.lastIndexOf(`](`, n);
            if (e !== -1 && n > e + 1) {
                let i = e + 2,
                    a = t.slice(i, n),
                    o = t.slice(i),
                    s = /^[a-zA-Z][a-zA-Z0-9+.-]{0,31}:/.test(o),
                    c = a.indexOf(`)`) === -1;
                if (s && c) return [n + 1, [`)`, ...r]]
            }
        }
        if (i.startsWith(`

:::OaiMdDirective_`) || i.startsWith(` :OaiMdDirective_`)) {
            let e = i.indexOf(`}`);
            if (e !== -1) return [n + e + 1, r]
        }
        let a = r.at(0);
        if (a) {
            if (a === "`" || a === "``") {
                let e = i.match(/^`{1,3}/)?.[0];
                if (e && e.length !== a.length) return [n + e.length + 1, r]
            }
            if (i.startsWith(a)) return /\s/.test(t[n - 1]) && /[_*]{1,3}/.test(a) ? [n + 1, r] : [n + a.length, r.slice(1)];
            if (a.includes("```") || ((i.match(/^\n\s*\n/) ?? i.match(/^\n\s*[>\-*]/) ?? i.match(/^\n\s*\d+\./) ?? i.match(/^\n\s*```/)) && (r = r.filter(e => !/[*_]{1,3}/.test(e) && !/`{1,2}/.test(e))), r.at(0) === "`" || r.at(0) === "``")) return [n + 1, r]
        }
        let o = i.match(/^\n#{1,6} /)?.[0];
        if (o) return [n + o[0].length, r];
        let s = i.match(/^\n( *)([+\-*]|\d+\.)[ \n]/);
        if (s) return [n + s[0].length, r];
        let c = i.match(/^(\*{1,3}|_{1,3})\S/);
        if (c) {
            let e = c[0],
                t = c[1];
            return [n + e.length, [t, ...r]]
        }
        let l = i.match(/^( *`{3})\w*\n/);
        if (l) {
            let e = l[0],
                t = l[1];
            return [n + e.length, [t, ...r]]
        }
        let u = i.match(/^`{1,2}/)?.[0];
        return u ? [n + u.length + 1, [u, ...r]] : [n + 1, r]
    }, vt = e => {
        let t = e.lastIndexOf(`](`);
        if (t === -1) return !1;
        let n = e.slice(t + 2);
        return /^[a-zA-Z][a-zA-Z0-9+.-]{0,31}:/.test(n) ? n.indexOf(`)`) === -1 : !1
    }, Y = (e, t) => t.includes(`)`) || !vt(e) ? t : [`)`, ...t]
}));

function bt({
    urlTransform: e,
    children: t,
    streaming: r,
    directives: i,
    remarkPlugins: a,
    rehypePlugins: o,
    includeMath: s,
    breakNewLines: c,
    components: l,
    copyableCodeBlocks: u,
    animateHeight: d,
    wrapperClassName: f,
    className: p,
    dir: m,
    onSmoothingEnd: h
}) {
    let g = {
            ...wt,
            ...l
        },
        {
            smoothing: _,
            smoothedText: ee,
            getCharactersPerSecond: te
        } = ft(t, r, h);
    return (0, Q.jsx)($.Provider, {
        value: {
            smoothing: _,
            getCharactersPerSecond: te
        },
        children: (0, Q.jsx)(`div`, {
            className: f,
            "data-smoothing": _ ? `` : void 0,
            "data-animate-height": _ && d ? `` : void 0,
            children: (0, Q.jsx)(We, {
                className: n(S.SmoothedMarkdown, p),
                dir: m,
                includeMath: s,
                breakNewLines: c,
                copyableCodeBlocks: u,
                remarkPlugins: [xt, ...a ?? []],
                rehypePlugins: o,
                components: g,
                urlTransform: e,
                directives: i,
                children: ee
            })
        })
    })
}

function xt() {
    return e => {
        h(e, `list`, e => {
            e.spread = !0, e.children.push({
                type: `listItem`,
                children: [{
                    type: `paragraph`,
                    children: []
                }]
            })
        }), h(e, `listItem`, e => {
            e.spread = !0, e.children.unshift({
                type: `leafDirective`,
                children: [{
                    type: `text`,
                    value: `‌`
                }],
                data: {
                    hProperties: {
                        className: [S.ListItemDecoratorFix]
                    }
                },
                name: `listItem`
            })
        })
    }
}

function St({
    children: e,
    className: t
}) {
    let {
        code: r,
        language: i
    } = F(e), {
        smoothing: a
    } = (0, Z.useContext)($);
    return (0, Q.jsx)(`div`, {
        className: n(S.SmoothedCodeBlock, t),
        "data-animate-height": a ? `` : void 0,
        children: (0, Q.jsxs)(x, {
            className: S.CodeBlock,
            children: [(0, Q.jsx)(X, {
                as: `div`,
                padding: 14,
                children: (0, Q.jsx)(x.Code, {
                    language: i,
                    children: r
                })
            }), (0, Q.jsx)(x.CopyButton, {
                copyValue: r,
                className: S.CodeCopy
            }, `copy`)]
        })
    })
}

function X({
    as: e = `div`,
    className: t,
    children: r,
    padding: i = 0
}) {
    let {
        smoothing: a,
        getCharactersPerSecond: o
    } = (0, Z.useContext)($), s = (0, Z.useRef)(null), [c, l] = (0, Z.useState)(() => []), u = c.every(e => e.done) && !a, d = b(o), f = (0, Z.useRef)(100), p = (0, Z.useRef)(null);
    if ((0, Z.useEffect)(() => {
            let e = s.current;
            if (!e || u) return;
            let t = new ResizeObserver(e => {
                let t = e.at(0);
                if (!t) return;
                let n = crypto.randomUUID(),
                    r = t.contentRect.height - i * 2,
                    a = t.contentRect.width,
                    o = p.current;
                if (o && o.height === r && o.width === a) return;
                p.current = {
                    height: r,
                    width: a
                };
                let s = a / 8 / d.current() * 1e3,
                    c = a * .8,
                    u = a * 4;
                f.current = c;
                let m = Math.floor((0, Ct.default)(s, c, u));
                l(e => et(r, m, n, e))
            });
            return t.observe(e), () => {
                t.disconnect()
            }
        }, [u, i, d]), u) return (0, Q.jsx)(e, {
        className: t,
        children: r
    });
    let m = c.map((e, t) => ({
            ...e,
            offset: e.offset + (t === 0 ? 0 : i),
            height: e.height + (t === 0 ? i : 0)
        })).filter(e => !e.done),
        h = c.reduce((e, t) => e + t.height, 0) + i * 2;
    return (0, Q.jsxs)(e, {
        className: n(S.ClipText, t),
        style: {
            height: h
        },
        children: [(0, Q.jsx)(`span`, {
            ref: s,
            className: `block`,
            children: r
        }), m.map((e, t) => {
            let n = t === m.length - 1;
            return (0, Q.jsx)(`span`, {
                className: S.SmoothingOverlay,
                onAnimationEnd: () => {
                    l(t => t.map(t => t.id === e.id ? {
                        ...t,
                        done: !0
                    } : t))
                },
                style: {
                    top: e.offset,
                    height: e.height,
                    animationDuration: n ? `${e.duration}ms` : `${f.current}ms`
                }
            }, e.id)
        }), i !== 0 && m.length > 0 && (0, Q.jsx)(`div`, {
            className: S.FixedSmoothingOverlay,
            style: {
                bottom: 0,
                height: i
            }
        }, `fixed`)]
    })
}
var Z, Ct, Q, $, wt, Tt = e((() => {
        r(), Z = t(a()), y(), Ct = t(Se()), me(), _e(), I(), H(), tt(), be(), yt(), Q = i(), $ = (0, Z.createContext)({
            smoothing: !1,
            getCharactersPerSecond: () => 0
        }), wt = {
            pre: St,
            p: e => (0, Q.jsx)(X, {
                as: `p`,
                ...e
            }),
            blockquote: e => (0, Q.jsx)(X, {
                as: `blockquote`,
                ...e
            }),
            h1: e => (0, Q.jsx)(X, {
                as: `h1`,
                ...e
            }),
            h2: e => (0, Q.jsx)(X, {
                as: `h2`,
                ...e
            }),
            h3: e => (0, Q.jsx)(X, {
                as: `h3`,
                ...e
            }),
            h4: e => (0, Q.jsx)(X, {
                as: `h4`,
                ...e
            }),
            h5: e => (0, Q.jsx)(X, {
                as: `h5`,
                ...e
            }),
            h6: e => (0, Q.jsx)(X, {
                as: `h6`,
                ...e
            })
        }
    })),
    Et = e((() => {
        ke(), H(), $e(), Tt(), k(), I()
    }));
export {
    $e as a, I as c, Ze as i, F as l, bt as n, We as o, Tt as r, H as s, Et as t
};
//# sourceMappingURL=0e52f6b9-llhmbru9hlmh7eky.js.map