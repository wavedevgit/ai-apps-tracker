import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $tt as t,
    G5 as n,
    K5 as r,
    Wtt as i,
    Ztt as a,
    _4 as o,
    fnt as s,
    iU as c,
    lnt as l,
    ont as u,
    rU as d,
    snt as f,
    v4 as p
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    Bn as m,
    wn as h
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    CGn as g,
    gGn as _,
    vGn as v
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    n as y,
    t as b
} from "./409226b2-kqgursmywzlo89h4.js";

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
    return f() && !t() && !a() ? `mac` : s() ? `windows` : u() ? `linux` : `fallback`
}

function C() {
    return `fallback`
}

function w() {
    return l() || a()
}

function T() {}
var E, D, O, k, A, j = e((() => {
    E = h(), y(), g(), i(), o(), c(), r(), D = m(), O = e => {
        "use forget";
        let t = (0, E.c)(19),
            {
                href: r,
                variant: i,
                className: a,
                children: o,
                platformLabels: s,
                downloadMode: c,
                platformHrefs: l,
                style: u,
                ref: d,
                analyticsIdentifier: f
            } = e,
            m = f === void 0 ? `dots-cta` : f,
            h = p(S, C),
            g;
        t[0] !== c || t[1] !== r || t[2] !== h || t[3] !== l || t[4] !== s ? (g = x({
            href: r,
            downloadMode: c,
            platformHrefs: l,
            platformLabels: s,
            platform: h
        }), t[0] = c, t[1] = r, t[2] = h, t[3] = l, t[4] = s, t[5] = g) : g = t[5];
        let _ = g,
            v = i === `primary-button` && `dots-cta-secondary`,
            y;
        t[6] !== a || t[7] !== v ? (y = n(`dots-cta`, v, a), t[6] = a, t[7] = v, t[8] = y) : y = t[8];
        let w = i === `primary-button` ? `Outline Button` : `Primary Button`,
            T;
        t[9] !== m || t[10] !== _.href || t[11] !== w ? (T = {
            id: m,
            analyticsAction: m,
            label: ``,
            url: _.href,
            style: w
        }, t[9] = m, t[10] = _.href, t[11] = w, t[12] = T) : T = t[12];
        let O = _.label ?? o,
            k;
        return t[13] !== d || t[14] !== u || t[15] !== y || t[16] !== T || t[17] !== O ? (k = (0, D.jsx)(b, {
            ref: d,
            style: u,
            className: y,
            showIcon: !1,
            link: T,
            children: O
        }), t[13] = d, t[14] = u, t[15] = y, t[16] = T, t[17] = O, t[18] = k) : k = t[18], k
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
                children: r,
                mobile: i
            } = e,
            a = p(w, T),
            o = i && (a === void 0 ? `hidden min-[600px]:flex` : a && `hidden`),
            s;
        t[0] === o ? s = t[1] : (s = n(`flex flex-wrap items-center justify-center gap-3`, o), t[0] = o, t[1] = s);
        let c;
        t[2] !== r || t[3] !== s ? (c = (0, D.jsx)(`div`, {
            className: s,
            children: r
        }), t[2] = r, t[3] = s, t[4] = c) : c = t[4];
        let l;
        t[5] !== i || t[6] !== a ? (l = i && (0, D.jsx)(`div`, {
            className: a === void 0 ? `min-[600px]:hidden` : a ? void 0 : `hidden`,
            children: i
        }), t[5] = i, t[6] = a, t[7] = l) : l = t[7];
        let u;
        return t[8] !== c || t[9] !== l ? (u = (0, D.jsxs)(D.Fragment, {
            children: [c, l]
        }), t[8] = c, t[9] = l, t[10] = u) : u = t[10], u
    }
}));
export {
    j as i, A as n, k as r, O as t
};
//# sourceMappingURL=061ab7e7-i0dqmkyxx4g6ud2h.js.map