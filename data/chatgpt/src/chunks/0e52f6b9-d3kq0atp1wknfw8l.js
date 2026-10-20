const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/f40d49f0-fmi9ytvurq3wvx7b.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/8d846022-lz20h7ad13tmije4.js", "assets/conversation-small-ikg0dwuw782klweb.js", "assets/4813494d-bo7e0c29ngt4zgx0.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/30901919-e8h11sw136qen6v0.js", "assets/c470f5ab-ab47eubabs8jspdc.js", "assets/0e5afe53-esm68l11os61djoy.js", "assets/conversation-small-oilgsqfa.css", "assets/df93ef8c-f1mndvoqheeg56jd.js", "assets/32f10268-gfw9l6vq70srveyo.js", "assets/7ec8c41d-j8rbx5qzddj0lk0o.js", "assets/5fe72b0f-mpesntcup5zqacug.js", "assets/ce52ae67-lx4d0mjipg8y23bz.js", "assets/katex-irstudlx.css"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    X5 as n,
    Y5 as r
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Bn as i,
    Vn as a,
    cn as o,
    ln as s
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $Ln as c,
    AWn as l,
    IWn as u,
    MWn as d,
    QLn as f,
    RWn as p,
    SWn as m,
    VWn as h,
    XLn as g,
    YLn as _,
    ZLn as ee,
    _Wn as te,
    avt as ne,
    bWn as v,
    hWn as re,
    igt as ie,
    mWn as ae,
    ngt as oe,
    pWn as se,
    rvt as y,
    sGn as ce,
    uWn as le,
    yWn as ue,
    zWn as de
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    r as fe,
    t as pe
} from "./4e1f6607-f5szrew87o0h80qh.js";
import {
    n as b,
    t as me
} from "./d4c740a3-m98a0dejurzr8grq.js";
import {
    n as he,
    t as ge
} from "./500b4410-if3qzgea0zf176wq.js";
import {
    n as x,
    r as _e,
    t as ve
} from "./60ba3cb6-kxza1eae25xbvyou.js";
import {
    i as ye,
    n as be,
    r as xe,
    t as S
} from "./c84315b1-iw8c0rwi0ius3cfn.js";
import {
    t as Se
} from "./d5fde054-kafk02wquebhsebi.js";

function Ce(e = []) {
    let t = new Set(e);
    return () => e => {
        m(e, (e, n, r) => {
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
    a(), v()
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
    return se().use(d).use(n).use(ue, r).use(t)
}

function Me(e) {
    let t = e.children || ``,
        n = new re;
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
    return m(e, l), h(e, {
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
            for (t in p)
                if (Object.hasOwn(p, t) && Object.hasOwn(e.properties, t)) {
                    let n = e.properties[t],
                        r = p[t];
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
        ce(), de(), u(), w = i(), a(), l(), te(), le(), v(), ae(), T = [], E = {
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
    i.push(_(n)), a.push(f()), o.push(c(n))
}
var ze, Be = e((() => {
        ee(), g(), ze = {}
    })),
    Ve = e((() => {
        Be()
    })),
    O, k = e((() => {
        D(), O = e => e.startsWith(`tel:`) || e.startsWith(`sms:`) || e.startsWith(`data:image/`) ? e : Pe(e)
    }));
async function He() {
    if (M) return M;
    if (N) return N;
    N = (async () => {
        let [{
            remarkMath: e
        }, {
            default: t
        }] = await Promise.all([o(() => import(`./f40d49f0-fmi9ytvurq3wvx7b.js`), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])), o(() => import(`./df93ef8c-f1mndvoqheeg56jd.js`), __vite__mapDeps([11, 1, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15])), o(() => Promise.resolve({}), __vite__mapDeps([16]))]);
        return M = {
            remarkPlugins: [
                [e, {
                    singleDollarTextMath: !1
                }]
            ],
            rehypePlugins: [t]
        }, M
    })();
    try {
        return await N
    } catch (e) {
        throw N = null, e
    }
}

function A(e) {
    let [t, n] = (0, j.useState)(!!M);
    return (0, j.useEffect)(() => {
        if (!e || t) return;
        let r = !0;
        return He().then(() => {
            r && n(!0)
        }).catch(() => {}), () => {
            r = !1
        }
    }, [e, t]), t && e && M ? M : Ue
}
var j, Ue, M, N, We = e((() => {
    j = t(a()), s(), Ue = {
        remarkPlugins: [],
        rehypePlugins: []
    }, M = null, N = null
}));

function P(e) {
    return !e || typeof e != `object` || !(`props` in e) || typeof e.props != `object` || !e.props ? {
        code: ``,
        language: `text`
    } : {
        code: `children` in e.props && typeof e.props.children == `string` ? e.props.children.replace(/\n$/g, ``) : ``,
        language: `className` in e.props && typeof e.props.className == `string` ? e.props.className.match(/language-(.*)$/)?.[1] ?? `text` : `text`
    }
}
var F = e((() => {
    a()
}));

function I({
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
                return g.length > 0 && (e.push(ie), e.push(Ce(g))), e.push(...h.remarkPlugins), r && e.push(fe), z && e.push([Re, {
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
    ...n
}) {
    return (0, R.jsx)(`div`, {
        className: r(xe.MarkdownContent, e),
        ...n,
        children: t
    })
}
var L, R, z, B, V, Ke, qe, Je, Ye, Xe, H = e((() => {
    n(), L = t(a()), D(), pe(), oe(), Ve(), _e(), he(), ke(), ye(), k(), We(), F(), R = i(), z = (() => {
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
        } = P(e);
        return (0, R.jsx)(ve, {
            language: r,
            className: t,
            children: n
        })
    }, V = ({
        children: e,
        className: t
    }) => (0, R.jsx)(`code`, {
        className: r(xe.InlineCode, t),
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
        } = P(e);
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
        a(), D(), k(), We(), U = i(), Qe = {
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
    let [e, t] = (0, G.useState)(() => !y || document.visibilityState !== `hidden`);
    return (0, G.useEffect)(() => {
        if (!y) return;
        let e = () => {
            t(document.visibilityState !== `hidden`)
        };
        return document.addEventListener(`visibilitychange`, e), () => {
            document.removeEventListener(`visibilitychange`, e)
        }
    }, []), e
}
var G, dt = e((() => {
    G = t(a()), ne()
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
    streaming: n,
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
        } = ft(t, n, h);
    return (0, Q.jsx)($.Provider, {
        value: {
            smoothing: _,
            getCharactersPerSecond: te
        },
        children: (0, Q.jsx)(`div`, {
            className: f,
            "data-smoothing": _ ? `` : void 0,
            "data-animate-height": _ && d ? `` : void 0,
            children: (0, Q.jsx)(I, {
                className: r(S.SmoothedMarkdown, p),
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
        m(e, `list`, e => {
            e.spread = !0, e.children.push({
                type: `listItem`,
                children: [{
                    type: `paragraph`,
                    children: []
                }]
            })
        }), m(e, `listItem`, e => {
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
        code: n,
        language: i
    } = P(e), {
        smoothing: a
    } = (0, Z.useContext)($);
    return (0, Q.jsx)(`div`, {
        className: r(S.SmoothedCodeBlock, t),
        "data-animate-height": a ? `` : void 0,
        children: (0, Q.jsxs)(x, {
            className: S.CodeBlock,
            children: [(0, Q.jsx)(X, {
                as: `div`,
                padding: 14,
                children: (0, Q.jsx)(x.Code, {
                    language: i,
                    children: n
                })
            }), (0, Q.jsx)(x.CopyButton, {
                copyValue: n,
                className: S.CodeCopy
            }, `copy`)]
        })
    })
}

function X({
    as: e = `div`,
    className: t,
    children: n,
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
        children: n
    });
    let m = c.map((e, t) => ({
            ...e,
            offset: e.offset + (t === 0 ? 0 : i),
            height: e.height + (t === 0 ? i : 0)
        })).filter(e => !e.done),
        h = c.reduce((e, t) => e + t.height, 0) + i * 2;
    return (0, Q.jsxs)(e, {
        className: r(S.ClipText, t),
        style: {
            height: h
        },
        children: [(0, Q.jsx)(`span`, {
            ref: s,
            className: `block`,
            children: n
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
        n(), Z = t(a()), v(), Ct = t(Se()), me(), _e(), F(), H(), tt(), be(), yt(), Q = i(), $ = (0, Z.createContext)({
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
        ke(), H(), $e(), Tt(), k(), F()
    }));
export {
    $e as a, F as c, Ze as i, P as l, bt as n, I as o, Tt as r, H as s, Et as t
};
//# sourceMappingURL=0e52f6b9-d3kq0atp1wknfw8l.js.map