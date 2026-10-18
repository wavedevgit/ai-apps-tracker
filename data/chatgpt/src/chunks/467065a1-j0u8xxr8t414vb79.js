import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    b5 as n,
    y5 as r
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as i,
    Vn as a
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Fvt as o,
    G_t as s,
    Ivt as c,
    V_t as l
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    n as u,
    t as d
} from "./94b8a1a4-hncif51g1rd1ltxd.js";
var f, p, m, h = e((() => {
        n(), f = t(a()), o(), l(), u(), p = i(), m = e => {
            let t = (0, f.useRef)(null),
                n = `search-ui-input-${(0,f.useId)()}`,
                {
                    id: i,
                    name: a,
                    variant: o = `outline`,
                    size: l = `md`,
                    gutterSize: u,
                    className: m,
                    autoComplete: h,
                    disabled: g = !1,
                    readOnly: _ = !1,
                    invalid: v = !1,
                    allowAutofillExtensions: y = !!a || !!h && h !== `off`,
                    onFocus: b,
                    onBlur: x,
                    onAnimationStart: S,
                    onAutofill: C,
                    autoSelect: w,
                    rows: T = 3,
                    maxRows: E,
                    autoResize: D,
                    maxHeight: O,
                    resize: k = `none`,
                    ref: A,
                    onChange: j,
                    __isWidget: M,
                    ...N
                } = e,
                [P, F] = (0, f.useState)(!1),
                I = D ? Math.max(E ?? 10, T) : T,
                L = k !== `none`;
            (0, f.useEffect)(() => {
                w && t.current?.select()
            }, [w]);
            let R = e => {
                    S?.(e), e.animationName === `native-autofill-in` && C?.()
                },
                z = (0, f.useCallback)(() => {
                    if (!D || !t.current || I === void 0) return;
                    t.current.style.height = `0px`;
                    let e = t.current.scrollHeight;
                    t.current.style.height = e + `px`
                }, [D, I]);
            return (0, f.useEffect)(() => {
                z()
            }, [e.value, T, z]), (0, p.jsx)(`div`, {
                className: r(d.Container, m),
                "data-w-component": M ? `textarea` : ``,
                "data-variant": o,
                "data-size": l,
                "data-gutter-size": u,
                "data-focused": P,
                "data-disabled": g ? `` : void 0,
                "data-readonly": _ ? `` : void 0,
                "data-invalid": v ? `` : void 0,
                style: s({
                    "textarea-min-rows": `${T}`,
                    "textarea-max-rows": `${I}`,
                    "textarea-max-height": O,
                    ...L ? {
                        "textarea-resize": k,
                        "textarea-resizer-visibility": `visible`
                    } : null
                }),
                children: (0, p.jsx)(`textarea`, {
                    ...N,
                    onChange: e => {
                        j?.(e), z()
                    },
                    ref: c([t, A]),
                    id: i || (y ? void 0 : n),
                    className: d.Textarea,
                    name: a,
                    autoComplete: h,
                    readOnly: _,
                    disabled: g,
                    rows: T,
                    onFocus: e => {
                        F(!0), b?.(e)
                    },
                    onBlur: e => {
                        F(!1), x?.(e)
                    },
                    onAnimationStart: R,
                    "data-lpignore": !y || void 0,
                    "data-1p-ignore": !y || void 0
                })
            })
        }
    })),
    g = e((() => {
        h()
    }));
export {
    m as n, h as r, g as t
};
//# sourceMappingURL=467065a1-j0u8xxr8t414vb79.js.map