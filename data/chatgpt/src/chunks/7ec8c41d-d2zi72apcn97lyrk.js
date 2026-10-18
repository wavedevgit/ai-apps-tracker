import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    HWn as t,
    IWn as n,
    KWn as r,
    LWn as i,
    NWn as a,
    PWn as o,
    RWn as s,
    qWn as c,
    zWn as l
} from "./conversation-small-fym1zmu9zimymmm1.js";
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

function m(e, t, n, r) {
    let i = l(e, n),
        a = -1,
        s;
    if (r != null) {
        if (typeof r == `number`) {
            if (Number.isNaN(r)) return;
            s = r
        } else s = typeof r == `boolean` ? r : typeof r == `string` ? i.spaceSeparated ? o(r) : i.commaSeparated ? c(r) : i.commaOrSpaceSeparated ? o(c(r).join(` `)) : g(i, i.property, r) : Array.isArray(r) ? r.concat() : i.property === `style` ? _(r) : String(r);
        if (Array.isArray(s)) {
            let e = [];
            for (; ++a < s.length;) e[a] = g(i, i.property, s[a]);
            s = e
        }
        if (i.property === `className` && Array.isArray(t.className)) {
            let e = s;
            s = t.className.concat(e)
        }
        t[i.property] = s
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

function g(e, n, r) {
    if (typeof r == `string`) {
        if (e.number && r && !Number.isNaN(Number(r))) return Number(r);
        if ((e.boolean || e.overloadedBoolean) && (r === `` || t(r) === t(n))) return !0
    }
    return r
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
        r(), d(), i(), a(), y = new Set([`button`, `menu`, `reset`, `submit`]), b = {}.hasOwnProperty
    })),
    S, C = e((() => {
        S = `altGlyph.altGlyphDef.altGlyphItem.animateColor.animateMotion.animateTransform.clipPath.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.foreignObject.glyphRef.linearGradient.radialGradient.solidColor.textArea.textPath`.split(`.`)
    })),
    w, T, E = e((() => {
        i(), x(), C(), w = f(n, `div`), T = f(s, `g`, S)
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
//# sourceMappingURL=7ec8c41d-d2zi72apcn97lyrk.js.map