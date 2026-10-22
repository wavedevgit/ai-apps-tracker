import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A4 as t,
    Ant as n,
    Cnt as r,
    Int as i,
    Nnt as a,
    j4 as o,
    jnt as s,
    l7 as c,
    mnt as l,
    nU as u,
    tU as d,
    u7 as f,
    xnt as p
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    Bn as m,
    wn as h
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $Gn as g,
    ZGn as _,
    iKn as v
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    n as y,
    t as b
} from "./409226b2-euzrqfwxcivg4iwy.js";

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
        href: i === `mac` ? _ : i === `windows` ? g : e,
        label: r?.[i] ?? r?.fallback
    } : {
        href: e,
        label: void 0
    }
}

function S() {
    return s() && !r() && !p() ? `mac` : i() ? `windows` : n() ? `linux` : `fallback`
}

function C() {
    return `fallback`
}

function w() {
    return a() || p()
}

function T() {}
var E, D, O, k, A, j = e((() => {
    E = h(), y(), v(), l(), t(), u(), f(), D = m(), O = e => {
        "use forget";
        let t = (0, E.c)(19),
            {
                href: n,
                variant: r,
                className: i,
                children: a,
                platformLabels: s,
                downloadMode: l,
                platformHrefs: u,
                style: d,
                ref: f,
                analyticsIdentifier: p
            } = e,
            m = p === void 0 ? `dots-cta` : p,
            h = o(S, C),
            g;
        t[0] !== l || t[1] !== n || t[2] !== h || t[3] !== u || t[4] !== s ? (g = x({
            href: n,
            downloadMode: l,
            platformHrefs: u,
            platformLabels: s,
            platform: h
        }), t[0] = l, t[1] = n, t[2] = h, t[3] = u, t[4] = s, t[5] = g) : g = t[5];
        let _ = g,
            v = r === `primary-button` && `dots-cta-secondary`,
            y;
        t[6] !== i || t[7] !== v ? (y = c(`dots-cta`, v, i), t[6] = i, t[7] = v, t[8] = y) : y = t[8];
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
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = d({
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
            i = o(w, T),
            a = r && (i === void 0 ? `hidden min-[600px]:flex` : i && `hidden`),
            s;
        t[0] === a ? s = t[1] : (s = c(`flex flex-wrap items-center justify-center gap-3`, a), t[0] = a, t[1] = s);
        let l;
        t[2] !== n || t[3] !== s ? (l = (0, D.jsx)(`div`, {
            className: s,
            children: n
        }), t[2] = n, t[3] = s, t[4] = l) : l = t[4];
        let u;
        t[5] !== r || t[6] !== i ? (u = r && (0, D.jsx)(`div`, {
            className: i === void 0 ? `min-[600px]:hidden` : i ? void 0 : `hidden`,
            children: r
        }), t[5] = r, t[6] = i, t[7] = u) : u = t[7];
        let d;
        return t[8] !== l || t[9] !== u ? (d = (0, D.jsxs)(D.Fragment, {
            children: [l, u]
        }), t[8] = l, t[9] = u, t[10] = d) : d = t[10], d
    }
}));
export {
    j as i, A as n, k as r, O as t
};
//# sourceMappingURL=061ab7e7-ige3x7xs6mb0luar.js.map