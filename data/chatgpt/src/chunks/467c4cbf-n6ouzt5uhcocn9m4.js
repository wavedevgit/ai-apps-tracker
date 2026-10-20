import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    X5 as n,
    Y5 as r
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Vn as i,
    wn as a
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    cEt as o,
    sEt as s,
    wat as c,
    yat as l
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    NS as u,
    PS as d,
    Sf as f,
    bf as p,
    dp as m,
    fp as h,
    mp as g,
    pp as _,
    xf as v,
    yf as y
} from "./30901919-e8h11sw136qen6v0.js";
import {
    mt as b,
    pt as x
} from "./c470f5ab-ab47eubabs8jspdc.js";

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
                    n = (0, E.createElement)(v, r);
                    break bb0;
                case `presentation`:
                    n = (0, E.createElement)(_, r);
                    break bb0;
                case `spreadsheet`:
                    n = (0, E.createElement)(h, r);
                    break bb0;
                case `site`:
                    n = (0, E.createElement)(d, r);
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
        n, i;
    if (t[0] !== e) {
        i = Symbol.for(`react.early_return_sentinel`);
        bb0: {
            let {
                kind: t,
                variant: a,
                ...o
            } = e;
            if (t === `email`) {
                i = (0, E.createElement)(y, o);
                break bb0
            }
            if (t === `slack`) {
                i = (0, E.createElement)(x, o);
                break bb0
            }
            if (t === `site` && a != null) {
                i = (0, E.createElement)(l, {
                    name: `Sites`,
                    iconUrl: D,
                    iconDarkUrl: D,
                    variant: a,
                    isNextToLabel: !0,
                    className: r(`size-5! rounded-sm!`, o.className)
                });
                break bb0
            }
            n = (0, E.createElement)(s, {
                ...o,
                iconKey: w(t)
            })
        }
        t[0] = e, t[1] = n, t[2] = i
    } else n = t[1], i = t[2];
    return i === Symbol.for(`react.early_return_sentinel`) ? n : i
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
    T = a(), f(), p(), b(), g(), u(), m(), o(), c(), n(), E = t(i()), D = `/images/ecosystem/apps/appgarden/icon.png`
}));
export {
    C as n, O as r, S as t
};
//# sourceMappingURL=467c4cbf-n6ouzt5uhcocn9m4.js.map