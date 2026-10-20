import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $Wn as t,
    JWn as n,
    QWn as r,
    XWn as i,
    ZWn as a,
    nGn as o,
    oGn as s,
    qWn as c,
    sGn as l
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    r as u,
    t as d
} from "./5fe72b0f-mpesntcup5zqacug.js";

function f(e, t, n) {
    let r = n && v(n);

    function i(n, i, ...a) {
        let o = -1,
            s;
        if (n == null) {
            s = {
                type: `root`,
                children: []
            };
            let e = i;
            a.unshift(e)
        } else if (s = u(n, t), s.tagName = s.tagName.toLowerCase(), r && b.call(r, s.tagName) && (s.tagName = r[s.tagName]), p(i, s.tagName)) {
            let t;
            for (t in i) b.call(i, t) && m(e, s.properties, t, i[t])
        } else a.unshift(i);
        for (; ++o < a.length;) h(s.children, a[o]);
        return s.type === `element` && s.tagName === `template` && (s.content = {
            type: `root`,
            children: s.children
        }, s.children = []), s
    }
    return i
}

function p(e, t) {
    return typeof e != `object` || !e || Array.isArray(e) ? !1 : t === `input` || !e.type || typeof e.type != `string` ? !0 : `children` in e && Array.isArray(e.children) ? !1 : t === `button` ? y.has(e.type.toLowerCase()) : !(`value` in e)
}

function m(e, r, i, a) {
    let o = t(e, i),
        s = -1,
        c;
    if (a != null) {
        if (typeof a == `number`) {
            if (Number.isNaN(a)) return;
            c = a
        } else c = typeof a == `boolean` ? a : typeof a == `string` ? o.spaceSeparated ? n(a) : o.commaSeparated ? l(a) : o.commaOrSpaceSeparated ? n(l(a).join(` `)) : g(o, o.property, a) : Array.isArray(a) ? a.concat() : o.property === `style` ? _(a) : String(a);
        if (Array.isArray(c)) {
            let e = [];
            for (; ++s < c.length;) e[s] = g(o, o.property, c[s]);
            c = e
        }
        if (o.property === `className` && Array.isArray(r.className)) {
            let e = c;
            c = r.className.concat(e)
        }
        r[o.property] = c
    }
}

function h(e, t) {
    let n = -1;
    if (t != null)
        if (typeof t == `string` || typeof t == `number`) e.push({
            type: `text`,
            value: String(t)
        });
        else if (Array.isArray(t))
        for (; ++n < t.length;) h(e, t[n]);
    else if (typeof t == `object` && `type` in t) t.type === `root` ? h(e, t.children) : e.push(t);
    else throw Error("Expected node, nodes, or string, got `" + t + "`")
}

function g(e, t, n) {
    if (typeof n == `string`) {
        if (e.number && n && !Number.isNaN(Number(n))) return Number(n);
        if ((e.boolean || e.overloadedBoolean) && (n === `` || o(n) === o(t))) return !0
    }
    return n
}

function _(e) {
    let t = [],
        n;
    for (n in e) b.call(e, n) && t.push([n, e[n]].join(`: `));
    return t.join(`; `)
}

function v(e) {
    let t = {},
        n = -1;
    for (; ++n < e.length;) t[e[n].toLowerCase()] = e[n];
    return t
}
var y, b, x = e((() => {
        s(), d(), a(), c(), y = new Set([`button`, `menu`, `reset`, `submit`]), b = {}.hasOwnProperty
    })),
    S, C = e((() => {
        S = `altGlyph.altGlyphDef.altGlyphItem.animateColor.animateMotion.animateTransform.clipPath.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.foreignObject.glyphRef.linearGradient.radialGradient.solidColor.textArea.textPath`.split(`.`)
    })),
    w, T, E = e((() => {
        a(), x(), C(), w = f(i, `div`), T = f(r, `g`, S)
    })),
    D = e((() => {
        E()
    })),
    O, k = e((() => {
        O = {
            html: `http://www.w3.org/1999/xhtml`,
            mathml: `http://www.w3.org/1998/Math/MathML`,
            svg: `http://www.w3.org/2000/svg`,
            xlink: `http://www.w3.org/1999/xlink`,
            xml: `http://www.w3.org/XML/1998/namespace`,
            xmlns: `http://www.w3.org/2000/xmlns/`
        }
    }));
export {
    E as a, w as i, O as n, T as o, D as r, k as t
};
//# sourceMappingURL=7ec8c41d-ijlh5aoseploqtob.js.map