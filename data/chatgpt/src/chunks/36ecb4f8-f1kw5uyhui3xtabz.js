import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    X5 as n,
    Y5 as r
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    Bn as i,
    Vn as a
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Uvt as o,
    Wvt as s,
    cvt as c,
    lvt as l
} from "./conversation-small-nmt18uiom3b14vca.js";
var u, d, f, p = e((() => {
        u = `BepuVG_Container`, d = `BepuVG_Input`, f = {
            Container: u,
            Input: d,
            "native-autofill-in": `BepuVG_native-autofill-in`
        }
    })),
    m, h, g, _ = e((() => {
        n(), m = t(a()), o(), l(), p(), h = i(), g = e => {
            let t = (0, m.useRef)(null),
                n = `search-ui-input-${(0,m.useId)()}`,
                {
                    id: i,
                    name: a,
                    type: o = `text`,
                    variant: l = `outline`,
                    size: u = `md`,
                    gutterSize: d,
                    className: p,
                    autoComplete: g,
                    disabled: _ = !1,
                    readOnly: v = !1,
                    invalid: y = !1,
                    allowAutofillExtensions: b = o === `password` || !!a || !!g && g !== `off`,
                    onFocus: x,
                    onBlur: S,
                    onAnimationStart: C,
                    onAutofill: w,
                    autoSelect: T,
                    startAdornment: E,
                    endAdornment: D,
                    inputClassName: O,
                    pill: k = c.pill,
                    opticallyAlign: A,
                    ref: j,
                    __isWidget: M,
                    ...N
                } = e,
                P = e => {
                    let n = t.current;
                    if (!e.target || !(e.target instanceof Element) || !n || n.contains(e.target) || e.target.closest(`button, [type='button'], [role='button'], [role='menuitem']`)) return;
                    e.preventDefault(), document.activeElement !== n && n.focus();
                    let {
                        left: r,
                        top: i
                    } = n.getBoundingClientRect(), {
                        clientX: a,
                        clientY: o
                    } = e, s = o < i || a < r;
                    if (e.detail === 1)
                        if (s) n.setSelectionRange(0, 0);
                        else {
                            let e = n.value.length;
                            n.setSelectionRange(e, e)
                        }
                    else if (e.detail === 2) {
                        let e = n.value.match(/\w+|[^\w\s]/g) || [],
                            t = s ? e.at(0) : e.at(-1);
                        if (t) {
                            let e = s ? n.value.indexOf(t) : n.value.lastIndexOf(t);
                            n.setSelectionRange(e, e + t.length)
                        }
                    } else n.select()
                },
                [F, I] = (0, m.useState)(!1);
            (0, m.useEffect)(() => {
                T && t.current?.select()
            }, [T]);
            let L = e => {
                C?.(e), e.animationName === `native-autofill-in` && w?.()
            };
            return (0, h.jsxs)(`div`, {
                className: r(f.Container, p),
                "data-w-component": M ? `input` : ``,
                "data-variant": l,
                "data-size": u,
                "data-gutter-size": d,
                "data-focused": F,
                "data-disabled": _ ? `` : void 0,
                "data-readonly": v ? `` : void 0,
                "data-invalid": y ? `` : void 0,
                "data-pill": k ? `` : void 0,
                "data-optically-align": A,
                "data-has-start-adornment": E ? `` : void 0,
                "data-has-end-adornment": D ? `` : void 0,
                onMouseDown: P,
                children: [E, (0, h.jsx)(`input`, {
                    ...N,
                    ref: s([j, t]),
                    id: i || (b ? void 0 : n),
                    className: r(f.Input, O),
                    type: o,
                    name: a,
                    autoComplete: g,
                    readOnly: v,
                    disabled: _,
                    onFocus: e => {
                        I(!0), x?.(e)
                    },
                    onBlur: e => {
                        I(!1), S?.(e)
                    },
                    onAnimationStart: L,
                    "data-lpignore": !b || void 0,
                    "data-1p-ignore": !b || void 0
                }), D]
            })
        }
    })),
    v = e((() => {
        _()
    }));
export {
    p as a, f as i, g as n, _ as r, v as t
};
//# sourceMappingURL=36ecb4f8-f1kw5uyhui3xtabz.js.map