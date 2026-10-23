import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    K5 as n,
    q5 as r
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Vn as i,
    wn as a
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $Tt as o,
    QTt as s,
    pat as c,
    vat as l
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    MS as u,
    _f as d,
    bf as f,
    dp as p,
    fp as m,
    jS as h,
    lp as g,
    up as _,
    vf as v,
    yf as y
} from "./30901919-s8bko9nrkqwv6i4f.js";
import {
    mt as b,
    pt as x
} from "./c470f5ab-jwd0o7jx9i9say9k.js";

function S(e) {
    "use forget";
    let t = (0, T.c)(2),
        n;
    if (t[0] !== e) {
        n = Symbol.for(`react.early_return_sentinel`);
        bb0: {
            let {
                kind: t,
                ...r
            } = e;
            switch (t) {
                case `document`:
                    n = (0, E.createElement)(y, r);
                    break bb0;
                case `presentation`:
                    n = (0, E.createElement)(p, r);
                    break bb0;
                case `spreadsheet`:
                    n = (0, E.createElement)(_, r);
                    break bb0;
                case `site`:
                    n = (0, E.createElement)(u, r);
                    break bb0
            }
        }
        t[0] = e, t[1] = n
    } else n = t[1];
    if (n !== Symbol.for(`react.early_return_sentinel`)) return n
}

function C(e) {
    "use forget";
    let t = (0, T.c)(3),
        r, i;
    if (t[0] !== e) {
        i = Symbol.for(`react.early_return_sentinel`);
        bb0: {
            let {
                kind: t,
                variant: a,
                ...o
            } = e;
            if (t === `email`) {
                i = (0, E.createElement)(d, o);
                break bb0
            }
            if (t === `slack`) {
                i = (0, E.createElement)(x, o);
                break bb0
            }
            if (t === `site` && a != null) {
                i = (0, E.createElement)(c, {
                    name: `Sites`,
                    iconUrl: D,
                    iconDarkUrl: D,
                    variant: a,
                    isNextToLabel: !0,
                    className: n(`size-5! rounded-sm!`, o.className)
                });
                break bb0
            }
            r = (0, E.createElement)(s, {
                ...o,
                iconKey: w(t)
            })
        }
        t[0] = e, t[1] = r, t[2] = i
    } else r = t[1], i = t[2];
    return i === Symbol.for(`react.early_return_sentinel`) ? r : i
}

function w(e) {
    switch (e) {
        case `document`:
            return `document`;
        case `presentation`:
            return `ppt`;
        case `spreadsheet`:
            return `xls`;
        case `site`:
            return `html`;
        case `image`:
            return `photo`;
        case `google-docs`:
        case `google-slides`:
        case `google-sheets`:
            return e
    }
}
var T, E, D, O = e((() => {
    T = a(), f(), v(), b(), m(), h(), g(), o(), l(), r(), E = t(i()), D = `/images/ecosystem/apps/appgarden/icon.png`
}));
export {
    C as n, O as r, S as t
};
//# sourceMappingURL=467c4cbf-bxvv4v3l6r5ylkq3.js.map