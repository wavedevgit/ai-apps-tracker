import {
    n as e,
    r as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J5 as n,
    Y5 as r
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as i,
    wn as a
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $Un as o,
    QUn as s
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    Kv as c,
    qv as l
} from "./30901919-7dzdc1ou0jtwkwpt.js";
import {
    n as u,
    t as d
} from "./2686af9f-dawy8jxaq75nc1t0.js";
import {
    n as f,
    r as p
} from "./bb47c0a1-fuw2qturtqd6ks9x.js";
import {
    r as m,
    t as h
} from "./eb36fa13-8llvfpb2u6ztej1p.js";
import {
    n as g,
    t as _
} from "./8a4ddaf7-p4pogsixwd4phcky.js";
var v = t({
    default: () => S
});

function y(e) {
    return `/?prompt=${encodeURI(e).split(`%20`).join(`+`)}`
}
var b, x, S, C = e((() => {
    b = a(), o(), f(), m(), g(), l(), u(), r(), x = i(), S = e => {
        "use forget";
        let t = (0, b.c)(21),
            {
                id: r,
                direction: i,
                items: a,
                carouselSpeed: o,
                overrideOnItemClick: l,
                showSuffixArrow: u,
                itemWidth: f,
                contentfulDebugAttributes: m
            } = e,
            g = i === void 0 ? `Left` : i,
            v = o === void 0 ? 36 : o,
            S = u !== void 0 && u,
            C = f === void 0 ? `default` : f,
            {
                slug: w,
                effectiveLocale: T
            } = p(),
            E = y,
            D = C === `wide` ? `w-[294px]` : `w-[286px]`,
            O;
        t[0] === D ? O = t[1] : (O = n(D, `rounded-md bg-[var(--bg-secondary)] p-4 text-mkt-p2`), t[0] = D, t[1] = O);
        let k;
        if (t[2] !== T || t[3] !== r || t[4] !== a || t[5] !== l || t[6] !== S || t[7] !== w) {
            let e;
            t[9] !== T || t[10] !== r || t[11] !== l || t[12] !== S || t[13] !== w ? (e = (e, t) => (0, x.jsxs)(s, {
                href: E(e.inputText ?? ``),
                className: `w-full break-words hover:underline`,
                onClick: () => {
                    if (l) {
                        l(e);
                        return
                    }
                    d.logClick({
                        locale: T,
                        page_slug: w,
                        analytics_identifier: h(w, `carousel-item`, e.id ?? r)
                    })
                },
                underline: !1,
                children: [e.inputText, S && (0, x.jsx)(`span`, {
                    className: `relative top-[3px] ms-1 inline-flex items-center`,
                    "aria-hidden": `true`,
                    children: (0, x.jsx)(c, {
                        className: `icon-sm`
                    })
                })]
            }, t), t[9] = T, t[10] = r, t[11] = l, t[12] = S, t[13] = w, t[14] = e) : e = t[14], k = a.map(e), t[2] = T, t[3] = r, t[4] = a, t[5] = l, t[6] = S, t[7] = w, t[8] = k
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
//# sourceMappingURL=9e9d908a-l9xskzx0myfh4ng0.js.map