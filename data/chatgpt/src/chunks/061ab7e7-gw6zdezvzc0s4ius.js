import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ett as t,
    G2 as n,
    Itt as r,
    K2 as i,
    MH as a,
    Ntt as o,
    Ptt as s,
    _tt as c,
    b5 as l,
    jH as u,
    wtt as d,
    y5 as f,
    ztt as p
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as m,
    wn as h
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    aGn as g,
    rGn as _,
    uGn as v
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    n as y,
    t as b
} from "./409226b2-dcy4jvm9n2z9ckyj.js";

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
    return s() && !t() && !d() ? `mac` : p() ? `windows` : o() ? `linux` : `fallback`
}

function C() {
    return `fallback`
}

function w() {
    return r() || d()
}

function T() {}
var E, D, O, k, A, j = e((() => {
    E = h(), y(), v(), c(), n(), a(), l(), D = m(), O = e => {
        "use forget";
        let t = (0, E.c)(19),
            {
                href: n,
                variant: r,
                className: a,
                children: o,
                platformLabels: s,
                downloadMode: c,
                platformHrefs: l,
                style: u,
                ref: d,
                analyticsIdentifier: p
            } = e,
            m = p === void 0 ? `dots-cta` : p,
            h = i(S, C),
            g;
        t[0] !== c || t[1] !== n || t[2] !== h || t[3] !== l || t[4] !== s ? (g = x({
            href: n,
            downloadMode: c,
            platformHrefs: l,
            platformLabels: s,
            platform: h
        }), t[0] = c, t[1] = n, t[2] = h, t[3] = l, t[4] = s, t[5] = g) : g = t[5];
        let _ = g,
            v = r === `primary-button` && `dots-cta-secondary`,
            y;
        t[6] !== a || t[7] !== v ? (y = f(`dots-cta`, v, a), t[6] = a, t[7] = v, t[8] = y) : y = t[8];
        let w = r === `primary-button` ? `Outline Button` : `Primary Button`,
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
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = u({
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
            a = i(w, T),
            o = r && (a === void 0 ? `hidden min-[600px]:flex` : a && `hidden`),
            s;
        t[0] === o ? s = t[1] : (s = f(`flex flex-wrap items-center justify-center gap-3`, o), t[0] = o, t[1] = s);
        let c;
        t[2] !== n || t[3] !== s ? (c = (0, D.jsx)(`div`, {
            className: s,
            children: n
        }), t[2] = n, t[3] = s, t[4] = c) : c = t[4];
        let l;
        t[5] !== r || t[6] !== a ? (l = r && (0, D.jsx)(`div`, {
            className: a === void 0 ? `min-[600px]:hidden` : a ? void 0 : `hidden`,
            children: r
        }), t[5] = r, t[6] = a, t[7] = l) : l = t[7];
        let u;
        return t[8] !== c || t[9] !== l ? (u = (0, D.jsxs)(D.Fragment, {
            children: [c, l]
        }), t[8] = c, t[9] = l, t[10] = u) : u = t[10], u
    }
}));
export {
    j as i, A as n, k as r, O as t
};
//# sourceMappingURL=061ab7e7-gw6zdezvzc0s4ius.js.map