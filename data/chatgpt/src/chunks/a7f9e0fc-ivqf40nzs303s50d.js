import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    J5 as n,
    Y5 as r
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as i,
    Vn as a
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Bvt as o,
    G_t as s,
    K_t as c,
    Vvt as l,
    avt as u,
    ovt as d
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    n as f,
    t as p
} from "./4b68ab38-hqs0yc0b0yhvv7p6.js";
import {
    i as m,
    n as h,
    r as g,
    t as _
} from "./3e47c24c-fk412hm0sfn783fi.js";
import {
    b as v,
    d as y,
    t as b,
    x
} from "./707eab0c-iziu4upusihd9xbv.js";
import {
    n as S,
    t as C
} from "./6c8e4a8d-mpv25obrd1tf382f.js";
var w, T, E, D, O = e((() => {
        r(), w = t(a()), o(), d(), c(), b(), m(), h(), f(), v(), S(), T = i(), E = ({
            ref: e,
            onPointerDown: t,
            onKeyDown: r,
            onPointerEnter: i,
            onInteract: a,
            invalid: o,
            disabled: c,
            children: d,
            className: f,
            variant: m = `outline`,
            size: h = `md`,
            block: g,
            disablePressable: _,
            opticallyAlign: v,
            pill: b = u.pill,
            loading: S,
            onClearClick: E,
            clearLabel: O = `Clear current value`,
            selected: k = !1,
            StartIcon: A,
            dropdownIconType: j = `dropdown`,
            ...M
        }) => {
            let N = (0, w.useRef)(null),
                P = !!E && k && !S && !c,
                F = j && j !== `none` && !S,
                I = P || S || F,
                L = !S && !c;
            return (0, T.jsxs)(`span`, {
                ref: l([N, e]),
                className: n(C.SelectControl, f),
                role: `button`,
                tabIndex: c ? -1 : 0,
                onPointerEnter: e => {
                    _ || s(e), i?.(e)
                },
                onPointerDown: L ? e => {
                    e.button !== 2 && (a ? (e.preventDefault(), a()) : (e.stopPropagation(), t?.(e), M.onClick?.(e)))
                } : void 0,
                onKeyDown: L ? e => {
                    switch (e.key) {
                        case `ArrowDown`:
                        case `ArrowUp`:
                        case ` `:
                            e.stopPropagation(), e.preventDefault(), a ? a() : N.current?.dispatchEvent(new PointerEvent(`pointerdown`, {
                                bubbles: !0,
                                cancelable: !0,
                                pointerType: `mouse`
                            }));
                            break;
                        case `Enter`:
                            break;
                        default:
                            r?.(e)
                    }
                } : void 0,
                "data-variant": m,
                "data-block": g ? `` : void 0,
                "data-disable-pressable": _ ? `` : void 0,
                "data-pill": b ? `` : void 0,
                "data-size": h,
                "data-optically-align": v,
                "aria-busy": S ? `true` : void 0,
                "data-selected": k,
                "data-loading": S ? `` : void 0,
                "data-invalid": o ? `` : void 0,
                "data-disabled": c ? `` : void 0,
                "aria-disabled": c,
                ...M,
                onClick: void 0,
                children: [A && (0, T.jsx)(A, {
                    className: C.StartIcon
                }), (0, T.jsx)(`span`, {
                    className: C.TriggerText,
                    children: d
                }), I && (0, T.jsxs)(`div`, {
                    className: C.IndicatorWrapper,
                    children: [P && (0, T.jsx)(y, {
                        "aria-label": O,
                        className: C.Clear,
                        onPointerDown: e => {
                            e.stopPropagation()
                        },
                        onClick: e => {
                            e.stopPropagation(), e.preventDefault(), E()
                        },
                        color: `secondary`,
                        variant: F ? `ghost` : `solid`,
                        size: `3xs`,
                        uniform: !0,
                        pill: b,
                        "data-only-child": F ? void 0 : ``,
                        children: (0, T.jsx)(p, {})
                    }), S && (0, T.jsx)(x, {
                        className: C.LoadingIndicator
                    }), F && (0, T.jsx)(D, {
                        iconType: j
                    })]
                })]
            })
        }, D = ({
            iconType: e
        }) => e === `chevronDown` ? (0, T.jsx)(g, {
            className: n(C.DropdownIcon, C.DropdownIconChevron)
        }) : (0, T.jsx)(_, {
            className: C.DropdownIcon
        })
    })),
    k = e((() => {
        O()
    }));
export {
    E as n, O as r, k as t
};
//# sourceMappingURL=a7f9e0fc-ivqf40nzs303s50d.js.map