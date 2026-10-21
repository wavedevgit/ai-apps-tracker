const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/f40d49f0-n7vv2j11trkp10ng.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/8d846022-hzw8msrtlj5car5s.js", "assets/conversation-small-kzsalymynzuddxee.js", "assets/4813494d-lxa3wniynbx9ka2a.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/30901919-i8ip8r0znvgcym38.js", "assets/c470f5ab-poh7ivjvb3j2jlfz.js", "assets/0e5afe53-dz59mkfveu52getp.js", "assets/conversation-small-bwtqiuwj.css", "assets/df93ef8c-ipwdamut0jlv9saq.js", "assets/32f10268-pbsvjnfcao72tfe1.js", "assets/7ec8c41d-blpz7y35dum4lv4p.js", "assets/5fe72b0f-mpesntcup5zqacug.js", "assets/ce52ae67-lx4d0mjipg8y23bz.js", "assets/katex-irstudlx.css"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    X5 as n,
    Y5 as r
} from "./4813494d-lxa3wniynbx9ka2a.js";
import {
    Bn as i,
    Vn as a,
    cn as o,
    ln as s
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $Ln as c,
    BWn as l,
    CWn as u,
    HWn as d,
    LWn as f,
    NWn as p,
    QLn as m,
    XLn as h,
    ZLn as g,
    avt as _,
    bWn as ee,
    cGn as te,
    dWn as ne,
    eRn as re,
    gWn as ie,
    hWn as ae,
    igt as oe,
    jWn as se,
    mWn as ce,
    ngt as le,
    rvt as ue,
    vWn as de,
    xWn as v,
    zWn as y
} from "./conversation-small-kzsalymynzuddxee.js";
import {
    r as fe,
    t as pe
} from "./4e1f6607-kzmq97wz7mcxtebk.js";
import {
    n as b,
    t as x
} from "./d4c740a3-m98a0dejurzr8grq.js";
import {
    n as me,
    t as he
} from "./500b4410-myzxkp5s3fimwe23.js";
import {
    n as S,
    r as ge,
    t as _e
} from "./60ba3cb6-n3xqh5npeh0f908i.js";
import {
    i as ve,
    n as ye,
    r as be,
    t as C
} from "./c84315b1-iw8c0rwi0ius3cfn.js";
import {
    t as xe
} from "./d5fde054-89kf43jzlvlzp83h.js";

function Se(e = []) {
    let t = new Set(e);
    return () => e => {
        u(e, (e, n, r) => {
            if (!Ce(e)) return;
            let i = w(e.data) ? e.data : {},
                a = Te(i.hProperties),
                o = t.has(e.name),
                s = `hName` in i || `hProperties` in i;
            if (!o && !s) return !r || typeof n != `number` ? void 0 : (De(r, n, e.children), n);
            e.data = {
                ...i,
                hName: o || !(`hName` in i) || typeof i.hName != `string` ? e.name : i.hName,
                hProperties: {
                    ...a,
                    ...Te(e.attributes)
                }
            }
        })
    }
}

function Ce(e) {
    return w(e) && typeof e.name == `string` && we(e.type)
}

function we(e) {
    return e === `textDirective` || e === `leafDirective` || e === `containerDirective`
}

function w(e) {
    return typeof e == `object` && !!e
}

function Te(e) {
    if (!w(e)) return {};
    let t = {};
    for (let [n, r] of Object.entries(e)) Ee(r) && (t[n] = r);
    return t
}

function Ee(e) {
    return e == null || typeof e == `string` || typeof e == `number` || typeof e == `boolean` || Array.isArray(e) && e.every(e => typeof e == `string` || typeof e == `number`)
}

function De(e, t, n) {
    e.children.splice(t, 1, ...n ?? [])
}
var Oe = e((() => {
    a(), v()
}));

function ke(e) {
    let t = Ae(e),
        n = je(e);
    return Me(t.runSync(t.parse(n), n), e)
}

function Ae(e) {
    let t = e.rehypePlugins || E,
        n = e.remarkPlugins || E,
        r = e.remarkRehypeOptions ? {
            ...e.remarkRehypeOptions,
            ...D
        } : D;
    return ce().use(p).use(n).use(ee, r).use(t)
}

function je(e) {
    let t = e.children || ``,
        n = new ie;
    return typeof t == `string` ? n.value = t : `` + t, n
}

function Me(e, t) {
    let n = t.allowedElements,
        r = t.allowElement,
        i = t.components,
        a = t.disallowedElements,
        o = t.skipHtml,
        s = t.unwrapDisallowed,
        c = t.urlTransform || Ne;
    for (let e of Fe) Object.hasOwn(t, e.from) && `` + e.from + (e.to ? "use `" + e.to + "` instead" : `remove it`) + e.id;
    return u(e, l), d(e, {
        Fragment: T.Fragment,
        components: i,
        ignoreInvalidStyle: !0,
        jsx: T.jsx,
        jsxs: T.jsxs,
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
            for (t in y)
                if (Object.hasOwn(y, t) && Object.hasOwn(e.properties, t)) {
                    let n = e.properties[t],
                        r = y[t];
                    (r === null || r.includes(e.tagName)) && (e.properties[t] = c(String(n || ``), t, e))
                }
        }
        if (e.type === `element`) {
            let o = n ? !n.includes(e.tagName) : a ? a.includes(e.tagName) : !1;
            if (!o && r && typeof t == `number` && (o = !r(e, t, i)), o && i && typeof t == `number`) return s && e.children ? i.children.splice(t, 1, ...e.children) : i.children.splice(t, 1), t
        }
    }
}

function Ne(e) {
    let t = e.indexOf(`:`),
        n = e.indexOf(`?`),
        r = e.indexOf(`#`),
        i = e.indexOf(`/`);
    return t === -1 || i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || Pe.test(e.slice(0, t)) ? e : ``
}
var T, E, D, Pe, Fe, Ie = e((() => {
        te(), l(), f(), T = i(), a(), se(), de(), ne(), v(), ae(), E = [], D = {
            allowDangerousHtml: !0
        }, Pe = /^(https?|ircs?|mailto|xmpp)$/i, Fe = [{
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
    O = e((() => {
        Ie()
    }));

function Le(e) {
    let t = this,
        n = e || k,
        r = t.data(),
        i = r.micromarkExtensions ||= [],
        a = r.fromMarkdownExtensions ||= [],
        o = r.toMarkdownExtensions ||= [];
    i.push(h(n)), a.push(c()), o.push(re(n))
}
var k, Re = e((() => {
        m(), g(), k = {}
    })),
    ze = e((() => {
        Re()
    })),
    A, j = e((() => {
        O(), A = e => e.startsWith(`tel:`) || e.startsWith(`sms:`) || e.startsWith(`data:image/`) ? e : Ne(e)
    }));
async function Be() {
    if (N) return N;
    if (P) return P;
    P = (async () => {
        let [{
            remarkMath: e
        }, {
            default: t
        }] = await Promise.all([o(() => import(`./f40d49f0-n7vv2j11trkp10ng.js`), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])), o(() => import(`./df93ef8c-ipwdamut0jlv9saq.js`), __vite__mapDeps([11, 1, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15])), o(() => Promise.resolve({}), __vite__mapDeps([16]))]);
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

function Ve(e) {
    let [t, n] = (0, M.useState)(!!N);
    return (0, M.useEffect)(() => {
        if (!e || t) return;
        let r = !0;
        return Be().then(() => {
            r && n(!0)
        }).catch(() => {}), () => {
            r = !1
        }
    }, [e, t]), t && e && N ? N : He
}
var M, He, N, P, Ue = e((() => {
    M = t(a()), s(), He = {
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

function L({
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
    urlTransform: d = A,
    className: f,
    copyableCodeBlocks: p = !0,
    dir: m
}) {
    let h = Ve(n),
        g = (0, R.useMemo)(() => t?.map(e => e.directiveName) ?? [], [t]),
        _ = (0, R.useMemo)(() => {
            let e = {
                ...Je,
                ...p ? null : Ye,
                ...i
            };
            return t?.reduce((e, t) => (e[t.directiveName] = t.render, e), e) ?? e
        }, [p, i, t]);
    return (0, z.jsx)(We, {
        className: f,
        dir: m,
        children: (0, z.jsx)(ke, {
            remarkPlugins: (0, R.useMemo)(() => {
                let e = [];
                return g.length > 0 && (e.push(oe), e.push(Se(g))), e.push(...h.remarkPlugins), r && e.push(fe), B && e.push([Le, {
                    singleTilde: !1
                }]), [...e, ...a ?? []]
            }, [r, g, h.remarkPlugins, a]),
            rehypePlugins: (0, R.useMemo)(() => [...o ?? [], ...h.rehypePlugins], [o, h.rehypePlugins]),
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

function We({
    className: e,
    children: t,
    ...n
}) {
    return (0, z.jsx)(`div`, {
        className: r(be.MarkdownContent, e),
        ...n,
        children: t
    })
}
var R, z, B, V, Ge, Ke, qe, Je, H, Ye, U = e((() => {
    n(), R = t(a()), O(), pe(), le(), ze(), ge(), me(), Oe(), ve(), j(), Ue(), I(), z = i(), B = (() => {
        try {
            return !0
        } catch {
            return !1
        }
    })(), V = ({
        children: e,
        className: t
    }) => {
        let {
            code: n,
            language: r
        } = F(e);
        return (0, z.jsx)(_e, {
            language: r,
            className: t,
            children: n
        })
    }, Ge = ({
        children: e,
        className: t
    }) => (0, z.jsx)(`code`, {
        className: r(be.InlineCode, t),
        dir: `ltr`,
        children: e
    }), Ke = ({
        children: e,
        node: t,
        ...n
    }) => (0, z.jsx)(he, {
        as: `a`,
        ...n,
        children: e
    }), qe = ({
        node: e,
        children: t,
        ...n
    }) => (0, z.jsx)(`td`, {
        ...n,
        children: R.Children.map(t, (e, t) => e === `<br>` ? (0, z.jsx)(`br`, {}, t) : e)
    }), Je = {
        code: Ge,
        pre: V,
        a: Ke,
        td: qe
    }, H = ({
        children: e,
        className: t
    }) => {
        let {
            code: n,
            language: r
        } = F(e);
        return (0, z.jsx)(S, {
            className: t,
            children: (0, z.jsx)(S.Code, {
                language: r,
                children: n
            })
        })
    }, Ye = {
        pre: H
    }
}));

function Xe({
    value: e,
    block: t = !1,
    ...n
}) {
    let r = Ve(!0),
        i = t ? `\\[\n${e}\n\\]` : `\\(${e}\\)`;
    return (0, W.jsx)(t ? `div` : `span`, {
        ...n,
        dir: `ltr`,
        children: (0, W.jsx)(ke, {
            remarkPlugins: r.remarkPlugins,
            rehypePlugins: r.rehypePlugins,
            components: t ? void 0 : Ze,
            urlTransform: A,
            skipHtml: !0,
            children: i
        })
    })
}
var W, Ze, Qe = e((() => {
        a(), O(), j(), Ue(), W = i(), Ze = {
            p: ({
                children: e
            }) => (0, W.jsx)(W.Fragment, {
                children: e
            })
        }
    })),
    $e, et = e((() => {
        $e = (e, t, n, r) => {
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

function tt(e, t) {
    let n = (0, G.useRef)([]),
        r = (0, G.useRef)(e.length),
        i = (0, G.useRef)(Date.now());
    return (0, G.useEffect)(() => {
        if (!t) return;
        let a = Date.now(),
            o = e.length,
            s = o - r.current,
            c = a - i.current;
        if (s < at || c < it) return;
        let l = s / (c / 1e3),
            u = n.current;
        u.push(l), u.length > ot && u.shift(), r.current = o, i.current = a
    }, [e, t]), () => {
        let e = n.current,
            t = nt(e),
            r = rt(e, t);
        return nt(e.filter(e => Math.abs(e - t) <= st * r))
    }
}

function nt(e) {
    return e.length ? e.reduce((e, t) => e + t, 0) / e.length : 0
}

function rt(e, t) {
    if (!e.length) return 0;
    let n = e.reduce((e, n) => e + (n - t) ** 2, 0) / e.length;
    return Math.sqrt(n)
}
var G, it, at, ot, st, ct = e((() => {
    G = t(a()), it = 10, at = 1, ot = 30, st = 2
}));

function lt() {
    let [e, t] = (0, K.useState)(() => !ue || document.visibilityState !== `hidden`);
    return (0, K.useEffect)(() => {
        if (!ue) return;
        let e = () => {
            t(document.visibilityState !== `hidden`)
        };
        return document.addEventListener(`visibilitychange`, e), () => {
            document.removeEventListener(`visibilitychange`, e)
        }
    }, []), e
}
var K, ut = e((() => {
    K = t(a()), _()
}));

function dt(e, t, n) {
    let [r, i] = (0, q.useState)(t ? 0 : e.length), [a, o] = (0, q.useState)([]), s = (0, q.useRef)(e), c = lt(), l = (t || r < e.length) && c, u = t ? Y : 0, d = r >= e.length - u, f = b((() => {
        if (!t) return J;
        let n = e.length - r - Y;
        return n > 0 ? J : J + Math.abs(n) * mt
    })()), p = tt(e, t), m = b(r);
    (0, q.useEffect)(() => {
        let t = pt(s.current, e, m.current);
        i(t), s.current = e
    }, [e, m]);
    let h = b(() => {
        let [s, c] = ht({
            streaming: t,
            text: e,
            cursor: r,
            appended: a
        });
        i(s), o(c), !t && s >= e.length && n?.()
    });
    (0, q.useEffect)(() => {
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
    let g = l ? vt(e.slice(0, r) + a.join(``), a) : [],
        _ = l ? g.join(``).replace(/\s*```\s*$/, ``) : ``;
    return {
        smoothing: l,
        getCharactersPerSecond: p,
        smoothedText: e.slice(0, r) + _
    }
}

function ft(e, t) {
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

function pt(e, t, n) {
    if (n === 0) return 0;
    let r = ft(e, t),
        i = 0;
    for (let e of r) e.insertBeforePrevIndex <= n && (i += e.length);
    return n + i
}
var q, J, Y, mt, ht, gt, _t, vt, yt = e((() => {
    q = t(a()), ct(), ut(), x(), J = 16, Y = 20, mt = 10, ht = ({
        streaming: e,
        text: t,
        cursor: n,
        appended: r
    }) => {
        let i = e ? 1 : 3;
        for (; i > 0 && n < t.length;)[n, r] = gt({
            streaming: e,
            text: t,
            cursor: n,
            appended: r
        }), (r.at(0)?.includes("`") ? /[\s.([]/.test(t.charAt(n)) : /\s/.test(t.charAt(n))) && i--;
        return [n, r]
    }, gt = ({
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
    }, _t = e => {
        let t = e.lastIndexOf(`](`);
        if (t === -1) return !1;
        let n = e.slice(t + 2);
        return /^[a-zA-Z][a-zA-Z0-9+.-]{0,31}:/.test(n) ? n.indexOf(`)`) === -1 : !1
    }, vt = (e, t) => t.includes(`)`) || !_t(e) ? t : [`)`, ...t]
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
        } = dt(t, n, h);
    return (0, Q.jsx)($.Provider, {
        value: {
            smoothing: _,
            getCharactersPerSecond: te
        },
        children: (0, Q.jsx)(`div`, {
            className: f,
            "data-smoothing": _ ? `` : void 0,
            "data-animate-height": _ && d ? `` : void 0,
            children: (0, Q.jsx)(L, {
                className: r(C.SmoothedMarkdown, p),
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
        u(e, `list`, e => {
            e.spread = !0, e.children.push({
                type: `listItem`,
                children: [{
                    type: `paragraph`,
                    children: []
                }]
            })
        }), u(e, `listItem`, e => {
            e.spread = !0, e.children.unshift({
                type: `leafDirective`,
                children: [{
                    type: `text`,
                    value: `‌`
                }],
                data: {
                    hProperties: {
                        className: [C.ListItemDecoratorFix]
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
    } = F(e), {
        smoothing: a
    } = (0, Z.useContext)($);
    return (0, Q.jsx)(`div`, {
        className: r(C.SmoothedCodeBlock, t),
        "data-animate-height": a ? `` : void 0,
        children: (0, Q.jsxs)(S, {
            className: C.CodeBlock,
            children: [(0, Q.jsx)(X, {
                as: `div`,
                padding: 14,
                children: (0, Q.jsx)(S.Code, {
                    language: i,
                    children: n
                })
            }), (0, Q.jsx)(S.CopyButton, {
                copyValue: n,
                className: C.CodeCopy
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
                l(e => $e(r, m, n, e))
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
        className: r(C.ClipText, t),
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
                className: C.SmoothingOverlay,
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
            className: C.FixedSmoothingOverlay,
            style: {
                bottom: 0,
                height: i
            }
        }, `fixed`)]
    })
}
var Z, Ct, Q, $, wt, Tt = e((() => {
        n(), Z = t(a()), v(), Ct = t(xe()), x(), ge(), I(), U(), et(), ye(), yt(), Q = i(), $ = (0, Z.createContext)({
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
        Oe(), U(), Qe(), Tt(), j(), I()
    }));
export {
    Qe as a, I as c, Xe as i, F as l, bt as n, L as o, Tt as r, U as s, Et as t
};
//# sourceMappingURL=0e52f6b9-citx18ew4wyd0zkk.js.map