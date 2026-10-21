import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $tt as t,
    X5 as n,
    Y5 as r,
    aU as i,
    b4 as a,
    cnt as o,
    gnt as s,
    hnt as c,
    iU as l,
    ont as u,
    vnt as d,
    xnt as f,
    y4 as p
} from "./4813494d-lxa3wniynbx9ka2a.js";
import {
    Bn as m,
    wn as h
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    CGn as g,
    gGn as _,
    vGn as v
} from "./conversation-small-kzsalymynzuddxee.js";
import {
    n as y,
    t as b
} from "./409226b2-fqct788rovb22uv4.js";

function x({
    href: e,
    downloadMode: t,
    platformHrefs: n,
    platformLabels: r,
    platform: i
}) {
    if (t === `link`) return {
        href: e,
        label: void 0
    };
    if (t === `platform`) {
        let t = n?.[i];
        return {
            href: t || n?.fallback || e,
            label: (t ? r?.[i] : void 0) || r?.fallback
        }
    }
    return e === `/download` || e === `/download/` || e === `https://chatgpt.com/download` || e === `https://chatgpt.com/download/` ? {
        href: i === `mac` ? _ : i === `windows` ? v : e,
        label: r?.[i] ?? r?.fallback
    } : {
        href: e,
        label: void 0
    }
}

function S() {
    return s() && !o() && !u() ? `mac` : f() ? `windows` : c() ? `linux` : `fallback`
}

function C() {
    return `fallback`
}

function w() {
    return d() || u()
}

function T() {}
var E, D, O, k, A, j = e((() => {
    E = h(), y(), g(), t(), p(), i(), n(), D = m(), O = e => {
        "use forget";
        let t = (0, E.c)(19),
            {
                href: n,
                variant: i,
                className: o,
                children: s,
                platformLabels: c,
                downloadMode: l,
                platformHrefs: u,
                style: d,
                ref: f,
                analyticsIdentifier: p
            } = e,
            m = p === void 0 ? `dots-cta` : p,
            h = a(S, C),
            g;
        t[0] !== l || t[1] !== n || t[2] !== h || t[3] !== u || t[4] !== c ? (g = x({
            href: n,
            downloadMode: l,
            platformHrefs: u,
            platformLabels: c,
            platform: h
        }), t[0] = l, t[1] = n, t[2] = h, t[3] = u, t[4] = c, t[5] = g) : g = t[5];
        let _ = g,
            v = i === `primary-button` && `dots-cta-secondary`,
            y;
        t[6] !== o || t[7] !== v ? (y = r(`dots-cta`, v, o), t[6] = o, t[7] = v, t[8] = y) : y = t[8];
        let w = i === `primary-button` ? `Outline Button` : `Primary Button`,
            T;
        t[9] !== m || t[10] !== _.href || t[11] !== w ? (T = {
            id: m,
            analyticsAction: m,
            label: ``,
            url: _.href,
            style: w
        }, t[9] = m, t[10] = _.href, t[11] = w, t[12] = T) : T = t[12];
        let O = _.label ?? s,
            k;
        return t[13] !== f || t[14] !== d || t[15] !== y || t[16] !== T || t[17] !== O ? (k = (0, D.jsx)(b, {
            ref: f,
            style: d,
            className: y,
            showIcon: !1,
            link: T,
            children: O
        }), t[13] = f, t[14] = d, t[15] = y, t[16] = T, t[17] = O, t[18] = k) : k = t[18], k
    }, k = e => {
        "use forget";
        let t = (0, E.c)(4),
            {
                children: n,
                analyticsIdentifier: r
            } = e,
            i;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = l({
            targetPath: `/dots`
        }), t[0] = i) : i = t[0];
        let a;
        return t[1] !== r || t[2] !== n ? (a = (0, D.jsx)(O, {
            href: i,
            analyticsIdentifier: r,
            children: n
        }), t[1] = r, t[2] = n, t[3] = a) : a = t[3], a
    }, A = e => {
        "use forget";
        let t = (0, E.c)(11),
            {
                children: n,
                mobile: i
            } = e,
            o = a(w, T),
            s = i && (o === void 0 ? `hidden min-[600px]:flex` : o && `hidden`),
            c;
        t[0] === s ? c = t[1] : (c = r(`flex flex-wrap items-center justify-center gap-3`, s), t[0] = s, t[1] = c);
        let l;
        t[2] !== n || t[3] !== c ? (l = (0, D.jsx)(`div`, {
            className: c,
            children: n
        }), t[2] = n, t[3] = c, t[4] = l) : l = t[4];
        let u;
        t[5] !== i || t[6] !== o ? (u = i && (0, D.jsx)(`div`, {
            className: o === void 0 ? `min-[600px]:hidden` : o ? void 0 : `hidden`,
            children: i
        }), t[5] = i, t[6] = o, t[7] = u) : u = t[7];
        let d;
        return t[8] !== l || t[9] !== u ? (d = (0, D.jsxs)(D.Fragment, {
            children: [l, u]
        }), t[8] = l, t[9] = u, t[10] = d) : d = t[10], d
    }
}));
export {
    j as i, A as n, k as r, O as t
};
//# sourceMappingURL=061ab7e7-idqqoyyff9ckhc35.js.map