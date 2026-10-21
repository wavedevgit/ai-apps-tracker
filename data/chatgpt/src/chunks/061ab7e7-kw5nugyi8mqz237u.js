import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $tt as t,
    J5 as n,
    Ktt as r,
    _4 as i,
    cnt as a,
    dnt as o,
    iU as s,
    lnt as c,
    mnt as l,
    q5 as u,
    rU as d,
    tnt as f,
    v4 as p
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Tn as m,
    Vn as h
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    _Gn as g,
    wGn as _,
    yGn as v
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    n as y,
    t as b
} from "./409226b2-f48jzydbjvmcoit4.js";

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
        href: i === `mac` ? g : i === `windows` ? v : e,
        label: r?.[i] ?? r?.fallback
    } : {
        href: e,
        label: void 0
    }
}

function S() {
    return c() && !f() && !t() ? `mac` : l() ? `windows` : a() ? `linux` : `fallback`
}

function C() {
    return `fallback`
}

function w() {
    return o() || t()
}

function T() {}
var E, D, O, k, A, j = e((() => {
    E = m(), y(), _(), r(), i(), s(), n(), D = h(), O = e => {
        "use forget";
        let t = (0, E.c)(19),
            {
                href: n,
                variant: r,
                className: i,
                children: a,
                platformLabels: o,
                downloadMode: s,
                platformHrefs: c,
                style: l,
                ref: d,
                analyticsIdentifier: f
            } = e,
            m = f === void 0 ? `dots-cta` : f,
            h = p(S, C),
            g;
        t[0] !== s || t[1] !== n || t[2] !== h || t[3] !== c || t[4] !== o ? (g = x({
            href: n,
            downloadMode: s,
            platformHrefs: c,
            platformLabels: o,
            platform: h
        }), t[0] = s, t[1] = n, t[2] = h, t[3] = c, t[4] = o, t[5] = g) : g = t[5];
        let _ = g,
            v = r === `primary-button` && `dots-cta-secondary`,
            y;
        t[6] !== i || t[7] !== v ? (y = u(`dots-cta`, v, i), t[6] = i, t[7] = v, t[8] = y) : y = t[8];
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
        return t[13] !== d || t[14] !== l || t[15] !== y || t[16] !== T || t[17] !== O ? (k = (0, D.jsx)(b, {
            ref: d,
            style: l,
            className: y,
            showIcon: !1,
            link: T,
            children: O
        }), t[13] = d, t[14] = l, t[15] = y, t[16] = T, t[17] = O, t[18] = k) : k = t[18], k
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
            i = p(w, T),
            a = r && (i === void 0 ? `hidden min-[600px]:flex` : i && `hidden`),
            o;
        t[0] === a ? o = t[1] : (o = u(`flex flex-wrap items-center justify-center gap-3`, a), t[0] = a, t[1] = o);
        let s;
        t[2] !== n || t[3] !== o ? (s = (0, D.jsx)(`div`, {
            className: o,
            children: n
        }), t[2] = n, t[3] = o, t[4] = s) : s = t[4];
        let c;
        t[5] !== r || t[6] !== i ? (c = r && (0, D.jsx)(`div`, {
            className: i === void 0 ? `min-[600px]:hidden` : i ? void 0 : `hidden`,
            children: r
        }), t[5] = r, t[6] = i, t[7] = c) : c = t[7];
        let l;
        return t[8] !== s || t[9] !== c ? (l = (0, D.jsxs)(D.Fragment, {
            children: [s, c]
        }), t[8] = s, t[9] = c, t[10] = l) : l = t[10], l
    }
}));
export {
    j as i, A as n, k as r, O as t
};
//# sourceMappingURL=061ab7e7-kw5nugyi8mqz237u.js.map