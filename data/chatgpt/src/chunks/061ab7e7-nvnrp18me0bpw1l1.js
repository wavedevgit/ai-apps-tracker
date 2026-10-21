import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A4 as t,
    Ant as n,
    Dnt as r,
    Nnt as i,
    Ont as a,
    bnt as o,
    c7 as s,
    dnt as c,
    j4 as l,
    l7 as u,
    nU as d,
    tU as f,
    vnt as p
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    Bn as m,
    wn as h
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    MGn as g,
    PGn as _,
    zGn as v
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    n as y,
    t as b
} from "./409226b2-efpx271imefk326v.js";

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
        href: i === `mac` ? g : i === `windows` ? _ : e,
        label: r?.[i] ?? r?.fallback
    } : {
        href: e,
        label: void 0
    }
}

function S() {
    return a() && !o() && !p() ? `mac` : i() ? `windows` : r() ? `linux` : `fallback`
}

function C() {
    return `fallback`
}

function w() {
    return n() || p()
}

function T() {}
var E, D, O, k, A, j = e((() => {
    E = h(), y(), v(), c(), t(), d(), u(), D = m(), O = e => {
        "use forget";
        let t = (0, E.c)(19),
            {
                href: n,
                variant: r,
                className: i,
                children: a,
                platformLabels: o,
                downloadMode: c,
                platformHrefs: u,
                style: d,
                ref: f,
                analyticsIdentifier: p
            } = e,
            m = p === void 0 ? `dots-cta` : p,
            h = l(S, C),
            g;
        t[0] !== c || t[1] !== n || t[2] !== h || t[3] !== u || t[4] !== o ? (g = x({
            href: n,
            downloadMode: c,
            platformHrefs: u,
            platformLabels: o,
            platform: h
        }), t[0] = c, t[1] = n, t[2] = h, t[3] = u, t[4] = o, t[5] = g) : g = t[5];
        let _ = g,
            v = r === `primary-button` && `dots-cta-secondary`,
            y;
        t[6] !== i || t[7] !== v ? (y = s(`dots-cta`, v, i), t[6] = i, t[7] = v, t[8] = y) : y = t[8];
        let w = r === `primary-button` ? `Outline Button` : `Primary Button`,
            T;
        t[9] !== m || t[10] !== _.href || t[11] !== w ? (T = {
            id: m,
            analyticsAction: m,
            label: ``,
            url: _.href,
            style: w
        }, t[9] = m, t[10] = _.href, t[11] = w, t[12] = T) : T = t[12];
        let O = _.label ?? a,
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
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = f({
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
                mobile: r
            } = e,
            i = l(w, T),
            a = r && (i === void 0 ? `hidden min-[600px]:flex` : i && `hidden`),
            o;
        t[0] === a ? o = t[1] : (o = s(`flex flex-wrap items-center justify-center gap-3`, a), t[0] = a, t[1] = o);
        let c;
        t[2] !== n || t[3] !== o ? (c = (0, D.jsx)(`div`, {
            className: o,
            children: n
        }), t[2] = n, t[3] = o, t[4] = c) : c = t[4];
        let u;
        t[5] !== r || t[6] !== i ? (u = r && (0, D.jsx)(`div`, {
            className: i === void 0 ? `min-[600px]:hidden` : i ? void 0 : `hidden`,
            children: r
        }), t[5] = r, t[6] = i, t[7] = u) : u = t[7];
        let d;
        return t[8] !== c || t[9] !== u ? (d = (0, D.jsxs)(D.Fragment, {
            children: [c, u]
        }), t[8] = c, t[9] = u, t[10] = d) : d = t[10], d
    }
}));
export {
    j as i, A as n, k as r, O as t
};
//# sourceMappingURL=061ab7e7-nvnrp18me0bpw1l1.js.map