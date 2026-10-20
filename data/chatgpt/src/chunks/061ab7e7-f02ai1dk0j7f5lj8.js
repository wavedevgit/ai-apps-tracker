import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J5 as t,
    Jtt as n,
    Y5 as r,
    dnt as i,
    gnt as a,
    iU as o,
    pnt as s,
    rU as c,
    rnt as l,
    tnt as u,
    unt as d,
    v4 as f,
    y4 as p
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as m,
    wn as h
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    fGn as g,
    mGn as _,
    yGn as v
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    n as y,
    t as b
} from "./409226b2-cua8xeswgf70fi24.js";

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
    return i() && !l() && !u() ? `mac` : a() ? `windows` : d() ? `linux` : `fallback`
}

function C() {
    return `fallback`
}

function w() {
    return s() || u()
}

function T() {}
var E, D, O, k, A, j = e((() => {
    E = h(), y(), v(), n(), f(), o(), r(), D = m(), O = e => {
        "use forget";
        let n = (0, E.c)(19),
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
        n[0] !== c || n[1] !== r || n[2] !== h || n[3] !== l || n[4] !== s ? (g = x({
            href: r,
            downloadMode: c,
            platformHrefs: l,
            platformLabels: s,
            platform: h
        }), n[0] = c, n[1] = r, n[2] = h, n[3] = l, n[4] = s, n[5] = g) : g = n[5];
        let _ = g,
            v = i === `primary-button` && `dots-cta-secondary`,
            y;
        n[6] !== a || n[7] !== v ? (y = t(`dots-cta`, v, a), n[6] = a, n[7] = v, n[8] = y) : y = n[8];
        let w = i === `primary-button` ? `Outline Button` : `Primary Button`,
            T;
        n[9] !== m || n[10] !== _.href || n[11] !== w ? (T = {
            id: m,
            analyticsAction: m,
            label: ``,
            url: _.href,
            style: w
        }, n[9] = m, n[10] = _.href, n[11] = w, n[12] = T) : T = n[12];
        let O = _.label ?? o,
            k;
        return n[13] !== d || n[14] !== u || n[15] !== y || n[16] !== T || n[17] !== O ? (k = (0, D.jsx)(b, {
            ref: d,
            style: u,
            className: y,
            showIcon: !1,
            link: T,
            children: O
        }), n[13] = d, n[14] = u, n[15] = y, n[16] = T, n[17] = O, n[18] = k) : k = n[18], k
    }, k = e => {
        "use forget";
        let t = (0, E.c)(4),
            {
                children: n,
                analyticsIdentifier: r
            } = e,
            i;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = c({
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
        let n = (0, E.c)(11),
            {
                children: r,
                mobile: i
            } = e,
            a = p(w, T),
            o = i && (a === void 0 ? `hidden min-[600px]:flex` : a && `hidden`),
            s;
        n[0] === o ? s = n[1] : (s = t(`flex flex-wrap items-center justify-center gap-3`, o), n[0] = o, n[1] = s);
        let c;
        n[2] !== r || n[3] !== s ? (c = (0, D.jsx)(`div`, {
            className: s,
            children: r
        }), n[2] = r, n[3] = s, n[4] = c) : c = n[4];
        let l;
        n[5] !== i || n[6] !== a ? (l = i && (0, D.jsx)(`div`, {
            className: a === void 0 ? `min-[600px]:hidden` : a ? void 0 : `hidden`,
            children: i
        }), n[5] = i, n[6] = a, n[7] = l) : l = n[7];
        let u;
        return n[8] !== c || n[9] !== l ? (u = (0, D.jsxs)(D.Fragment, {
            children: [c, l]
        }), n[8] = c, n[9] = l, n[10] = u) : u = n[10], u
    }
}));
export {
    j as i, A as n, k as r, O as t
};
//# sourceMappingURL=061ab7e7-f02ai1dk0j7f5lj8.js.map