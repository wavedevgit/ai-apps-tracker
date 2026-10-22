import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A8 as n,
    HN as r,
    J5 as i,
    Qy as a,
    UN as o,
    Zy as s,
    aW as c,
    l7 as l,
    rW as u,
    u7 as d
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    Bn as f,
    Rn as p,
    Vn as m,
    zn as h
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    JAt as g,
    YAt as _,
    hpt as v,
    mpt as y
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    Gy as b,
    Ky as x,
    Wy as S,
    qy as C
} from "./30901919-k5uqyx4vyplt9toa.js";
import {
    n as w,
    t as T
} from "./74802342-d0zceapakw75tchi.js";
import {
    n as E,
    t as D
} from "./b7675d69-je86n8m3kujalntp.js";
var O, k, A, j = e((() => {
        a(), C(), b(), g(), O = t(m()), p(), k = f(), A = ({
            onClick: e
        }) => {
            let [t, n] = (0, O.useState)(!1), r = _(), i = h(), a = t => {
                e(t), n(!0), setTimeout(() => {
                    r() && n(!1)
                }, 2e3)
            }, o = t ? x : S, c = i.formatMessage({
                id: `uG/ayY`,
                defaultMessage: `Copy table`
            });
            return (0, k.jsx)(s, {
                label: c,
                side: `bottom`,
                align: `center`,
                alignOffset: 0,
                children: (0, k.jsx)(`button`, {
                    "aria-label": c,
                    onClick: a,
                    className: `hover:bg-token-bg-tertiary text-token-text-secondary relative z-10 my-1 rounded-sm p-1 transition-opacity group-[:not(:hover):not(:focus-within)]:pointer-events-none group-[:not(:hover):not(:focus-within)]:opacity-0`,
                    children: (0, k.jsx)(o, {
                        className: `icon`
                    })
                })
            })
        }
    })),
    M, N, P, F, I, L, R, z, B, V = e((() => {
        y(), n(), T(), c(), r(), d(), M = t(m()), j(), D(), N = f(), P = (0, M.createContext)({
            topAlignHeaderCells: !1
        }), F = ({
            conversation: e,
            onClickCopy: t,
            children: n,
            unstyledContainer: r,
            topAlignHeaderCells: a = !1,
            ...s
        }) => {
            let c = (0, M.useRef)(null),
                d = (0, M.useRef)(null),
                f = v() !== void 0,
                p = f || r,
                m = i(() => e != null && w(e));
            return o(() => u({
                axis: `height`,
                target: c.current?.firstElementChild,
                onChange: ({
                    height: e
                }) => {
                    d.current && (d.current.style.height = `${e}px`)
                }
            }), []), (0, N.jsx)(P.Provider, {
                value: {
                    topAlignHeaderCells: a
                },
                children: (0, N.jsx)(`div`, {
                    dir: s.dir,
                    className: l(`group`, p ? void 0 : E.tableContainer, !p && m && E.tableContainerWithTableOfContents),
                    children: (0, N.jsxs)(`div`, {
                        tabIndex: -1,
                        className: l(p ? void 0 : E.tableWrapper, `flex flex-col-reverse`, f ? `w-full` : `w-fit`),
                        children: [(0, N.jsx)(`table`, {
                            ...s,
                            className: l(f ? `w-full table-auto border-collapse text-start` : `w-fit min-w-(--thread-content-width)`, s.className),
                            ref: c,
                            children: n
                        }), (0, N.jsx)(`div`, {
                            className: `relative h-0 self-end select-none`,
                            children: (0, N.jsx)(`div`, {
                                className: `absolute end-0 flex items-end`,
                                ref: d,
                                children: (0, N.jsx)(A, {
                                    onClick: t
                                })
                            })
                        })]
                    })
                })
            })
        }, I = (0, M.createContext)(null), L = () => (0, M.useContext)(I), R = e => M.Children.map(e, (e, t) => e === `<br>` ? (0, N.jsx)(`br`, {}, t) : e), z = ({
            node: e,
            children: t,
            ...n
        }) => (0, N.jsx)(`td`, {
            ...n,
            children: (0, N.jsx)(I.Provider, {
                value: {
                    isHeader: !1
                },
                children: R(t)
            })
        }), B = ({
            node: e,
            children: t,
            ...n
        }) => {
            let {
                topAlignHeaderCells: r
            } = (0, M.useContext)(P);
            return (0, N.jsx)(`th`, {
                ...n,
                className: l(`last:pe-10`, r && `align-top`, n.className),
                children: (0, N.jsx)(I.Provider, {
                    value: {
                        isHeader: !0
                    },
                    children: R(t)
                })
            })
        }
    }));
export {
    L as a, V as i, z as n, B as r, F as t
};
//# sourceMappingURL=498cd593-rcsuqym2mcdvnjtl.js.map