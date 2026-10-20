import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J5 as n,
    q5 as r
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Hn as i,
    Vn as a
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    Lvt as o,
    Rvt as s
} from "./conversation-small-cawdu7il3ha6y70c.js";
var c, l, u, d = e((() => {
        c = `B4EVZa_Container`, l = `B4EVZa_Input`, u = {
            Container: c,
            Input: l,
            "native-autofill-in": `B4EVZa_native-autofill-in`
        }
    })),
    f, p, m, h = e((() => {
        n(), f = t(i(), 1), o(), d(), p = a(), m = e => {
            let t = (0, f.useRef)(null),
                n = `search-ui-input-${(0,f.useId)()}`,
                {
                    id: i,
                    name: a,
                    type: o = `text`,
                    variant: c = `outline`,
                    size: l = `md`,
                    gutterSize: d,
                    className: m,
                    autoComplete: h,
                    disabled: g = !1,
                    readOnly: _ = !1,
                    invalid: v = !1,
                    allowAutofillExtensions: y = o === `password` || !!a || !!h && h !== `off`,
                    onFocus: b,
                    onBlur: x,
                    onAnimationStart: S,
                    onAutofill: C,
                    autoSelect: w,
                    startAdornment: T,
                    endAdornment: E,
                    inputClassName: D,
                    pill: O = !1,
                    opticallyAlign: k,
                    ref: A,
                    __isWidget: j,
                    ...M
                } = e,
                N = e => {
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
                [P, F] = (0, f.useState)(!1);
            (0, f.useEffect)(() => {
                w && t.current?.select()
            }, [w]);
            let I = e => {
                S?.(e), e.animationName === `native-autofill-in` && C?.()
            };
            return (0, p.jsxs)(`div`, {
                className: r(u.Container, m),
                "data-w-component": j ? `input` : ``,
                "data-variant": c,
                "data-size": l,
                "data-gutter-size": d,
                "data-focused": P,
                "data-disabled": g ? `` : void 0,
                "data-readonly": _ ? `` : void 0,
                "data-invalid": v ? `` : void 0,
                "data-pill": O ? `` : void 0,
                "data-optically-align": k,
                "data-has-start-adornment": T ? `` : void 0,
                "data-has-end-adornment": E ? `` : void 0,
                onMouseDown: N,
                children: [T, (0, p.jsx)(`input`, {
                    ...M,
                    ref: s([A, t]),
                    id: i || (y ? void 0 : n),
                    className: r(u.Input, D),
                    type: o,
                    name: a,
                    autoComplete: h,
                    readOnly: _,
                    disabled: g,
                    onFocus: e => {
                        F(!0), b?.(e)
                    },
                    onBlur: e => {
                        F(!1), x?.(e)
                    },
                    onAnimationStart: I,
                    "data-lpignore": !y || void 0,
                    "data-1p-ignore": !y || void 0
                }), E]
            })
        }
    })),
    g = e((() => {
        h()
    }));
export {
    m as n, h as r, g as t
};
//# sourceMappingURL=c96c6d5b-mwuq00sm9dyyvwzf.js.map