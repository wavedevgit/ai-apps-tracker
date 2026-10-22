import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Hn as n,
    Nw as r,
    Pw as i,
    Qy as a,
    Un as o,
    Zy as s,
    l7 as c,
    u7 as l
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    Bn as u,
    Ln as d,
    Rn as f,
    Vn as p,
    zn as m
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    c as h,
    n as g,
    t as _
} from "./e2a9a3b9-i8l717u5yk8jkzzi.js";

function v(e) {
    return e.split(/[\s,]+/).map(e => e.trim()).filter(e => e.length > 0)
}

function y({
    value: e,
    onChange: t,
    className: n,
    disabled: r,
    trackEmailsAdded: i,
    trackEmailRemoved: a,
    placeholder: s,
    suggestions: l,
    classNames: u,
    trailingComponent: d,
    shouldShowTrailingComponent: f = () => !0
}) {
    let p = m(),
        [g, y] = (0, b.useState)(``),
        [C, E] = (0, b.useState)(!1),
        D = l?.filter(t => !e.some(e => e.value.toLowerCase() === t.value.toLowerCase()) && `${t.label} ${t.value}`.toLowerCase().includes(g.trim().toLowerCase())),
        O = (D?.length ?? 0) > 0,
        k = e => (0, x.jsx)(h.IndicatorsContainer, {
            ...e,
            children: d
        }),
        A = (0, b.useCallback)(n => {
            if (g && !n.nativeEvent.isComposing && !(C && O && !o.test(g.trim()) && (n.key === `Enter` || n.key === ` `))) switch (n.key) {
                case `Enter`:
                case `,`:
                case ` `: {
                    let r = v(g);
                    t([...e, ...r.map(S)]), y(``), n.preventDefault();
                    let a = {
                        numEmailsAdded: r.length,
                        uploadType: `Manual`
                    };
                    i?.(a)
                }
            }
        }, [g, t, e, i, C, O]),
        j = n => {
            if (g) {
                let r = v(g);
                t([...e, ...r.map(S)]), y(g), n.preventDefault()
            }
        },
        M = f(e.map(e => e.value), g);
    return (0, x.jsx)(_, {
        "aria-invalid": e.some(({
            isValid: e
        }) => !e) || void 0,
        blurInputOnSelect: l == null && void 0,
        className: c(`react-select-container`, n),
        isMulti: !0,
        onBlur: j,
        classNamePrefix: `react-select`,
        components: {
            ...w,
            IndicatorsContainer: M && d ? k : () => null
        },
        inputValue: g,
        isClearable: !0,
        isDisabled: r,
        filterOption: l == null ? void 0 : null,
        maxMenuHeight: 200,
        menuIsOpen: C && O,
        onMenuOpen: () => E(!0),
        onMenuClose: () => E(!1),
        openMenuOnFocus: l != null,
        options: D,
        tabSelectsValue: !1,
        onChange: (e, n) => {
            switch (t(e), n.action) {
                case `pop-value`:
                case `remove-value`:
                    a?.();
                    break;
                default:
                    break
            }
        },
        classNames: u,
        onInputChange: (e, t) => {
            l != null && t.action === `menu-close` || y(e)
        },
        onKeyDown: A,
        placeholder: s ?? p.formatMessage(T.placeholder),
        value: e,
        "aria-labelledby": `add-emails-label`,
        name: `add-member-emails`,
        trackEmailRemoved: a
    })
}
var b, x, S, C, w, T, E = e((() => {
    i(), a(), n(), l(), b = t(p()), f(), g(), x = u(), S = e => ({
        label: e,
        value: e,
        isValid: o.test(e)
    }), C = e => {
        let t = m(),
            n = (0, x.jsxs)(`span`, {
                className: `flex items-center gap-1`,
                children: [(0, x.jsx)(`span`, {
                    children: e.children
                }), (0, x.jsx)(r, {
                    className: `icon-sm`
                })]
            }),
            i = e.data.isValid ? n : (0, x.jsx)(s, {
                label: t.formatMessage(T.tooltipInvalidEmail, {
                    email: e.data.value
                }),
                side: `top`,
                children: n
            }),
            a = t => {
                e.removeProps.onClick?.(t), e.selectProps.trackEmailRemoved?.(), t.preventDefault()
            };
        return (0, x.jsx)(h.MultiValue, {
            ...e,
            children: (0, x.jsx)(`div`, {
                className: c(`text-token-text-primary m-1 cursor-pointer rounded-md border border-transparent px-1.5 py-1 text-sm`, e.data.isValid ? `bg-token-bg-tertiary hover:border-token-border-heavy hover:bg-token-bg-tertiary` : `bg-red-200 text-red-500`),
                role: `button`,
                tabIndex: 0,
                "aria-label": t.formatMessage(T.removeMember, {
                    member: e.data.value
                }),
                ...e.removeProps,
                onClick: a,
                children: i
            })
        })
    }, w = {
        DropdownIndicator: () => null,
        ClearIndicator: () => null,
        MultiValueRemove: () => null,
        MultiValue: C
    }, T = d({
        removeMember: {
            id: `emailsTextarea.removeMember`,
            defaultMessage: `Remove {member}`
        },
        tooltipInvalidEmail: {
            id: `emailsTextarea.tooltipInvalidEmail`,
            defaultMessage: `"{email}" may not be a valid email`
        },
        placeholder: {
            id: `emailsTextarea.placeholder`,
            defaultMessage: `Type an email and press enter...`
        }
    })
}));
export {
    S as n, E as r, y as t
};
//# sourceMappingURL=53a75fa3-d80zsl04ytsrw10v.js.map