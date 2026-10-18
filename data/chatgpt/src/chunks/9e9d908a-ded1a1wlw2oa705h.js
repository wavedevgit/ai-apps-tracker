import {
    n as e,
    r as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    b5 as n,
    y5 as r
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as i,
    wn as a
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    UUn as o,
    WUn as s
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Xv as c,
    Yv as l
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    n as u,
    t as d
} from "./2686af9f-d2qrll3k2995z1sk.js";
import {
    n as f,
    r as p
} from "./bb47c0a1-d1hvam8myjas7ee8.js";
import {
    r as m,
    t as h
} from "./eb36fa13-mvmsiqd5j7thamlc.js";
import {
    n as g,
    t as _
} from "./8a4ddaf7-gguoc9tpcj48lp2a.js";
var v = t({
    default: () => S
});

function y(e) {
    return `/?prompt=${encodeURI(e).split(`%20`).join(`+`)}`
}
var b, x, S, C = e((() => {
    b = a(), s(), f(), m(), g(), c(), u(), n(), x = i(), S = e => {
        "use forget";
        let t = (0, b.c)(21),
            {
                id: n,
                direction: i,
                items: a,
                carouselSpeed: s,
                overrideOnItemClick: c,
                showSuffixArrow: u,
                itemWidth: f,
                contentfulDebugAttributes: m
            } = e,
            g = i === void 0 ? `Left` : i,
            v = s === void 0 ? 36 : s,
            S = u !== void 0 && u,
            C = f === void 0 ? `default` : f,
            {
                slug: w,
                effectiveLocale: T
            } = p(),
            E = y,
            D = C === `wide` ? `w-[294px]` : `w-[286px]`,
            O;
        t[0] === D ? O = t[1] : (O = r(D, `rounded-md bg-[var(--bg-secondary)] p-4 text-mkt-p2`), t[0] = D, t[1] = O);
        let k;
        if (t[2] !== T || t[3] !== n || t[4] !== a || t[5] !== c || t[6] !== S || t[7] !== w) {
            let e;
            t[9] !== T || t[10] !== n || t[11] !== c || t[12] !== S || t[13] !== w ? (e = (e, t) => (0, x.jsxs)(o, {
                href: E(e.inputText ?? ``),
                className: `w-full break-words hover:underline`,
                onClick: () => {
                    if (c) {
                        c(e);
                        return
                    }
                    d.logClick({
                        locale: T,
                        page_slug: w,
                        analytics_identifier: h(w, `carousel-item`, e.id ?? n)
                    })
                },
                underline: !1,
                children: [e.inputText, S && (0, x.jsx)(`span`, {
                    className: `relative top-[3px] ms-1 inline-flex items-center`,
                    "aria-hidden": `true`,
                    children: (0, x.jsx)(l, {
                        className: `icon-sm`
                    })
                })]
            }, t), t[9] = T, t[10] = n, t[11] = c, t[12] = S, t[13] = w, t[14] = e) : e = t[14], k = a.map(e), t[2] = T, t[3] = n, t[4] = a, t[5] = c, t[6] = S, t[7] = w, t[8] = k
        } else k = t[8];
        let A;
        return t[15] !== v || t[16] !== m || t[17] !== g || t[18] !== O || t[19] !== k ? (A = (0, x.jsx)(_, {
            contentfulDebugAttributes: m,
            direction: g,
            carouselSpeed: v,
            itemWrapperClassName: O,
            items: k,
            threshold: .66
        }), t[15] = v, t[16] = m, t[17] = g, t[18] = O, t[19] = k, t[20] = A) : A = t[20], A
    }
}));
export {
    v as n, C as r, S as t
};
//# sourceMappingURL=9e9d908a-ded1a1wlw2oa705h.js.map