import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    LN as n,
    P5 as r,
    RN as i,
    X5 as a,
    Xy as o,
    Y5 as s,
    Zy as c,
    cW as l,
    g8 as u,
    oW as d
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    Bn as f,
    Rn as p,
    Vn as m,
    zn as h
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Cpt as g,
    njt as _,
    tjt as v,
    wpt as y
} from "./conversation-small-nmt18uiom3b14vca.js";
import {
    Jy as b,
    Ky as x,
    Yy as S,
    qy as C
} from "./30901919-niqyapppecmq5jkn.js";
import {
    n as w,
    t as T
} from "./74802342-b6du2z0r2gevqemh.js";
import {
    n as E,
    t as D
} from "./b7675d69-je86n8m3kujalntp.js";
var O, k, A, j = e((() => {
        c(), S(), C(), v(), O = t(m()), p(), k = f(), A = ({
            onClick: e
        }) => {
            let [t, n] = (0, O.useState)(!1), r = _(), i = h(), a = t => {
                e(t), n(!0), setTimeout(() => {
                    r() && n(!1)
                }, 2e3)
            }, s = t ? b : x, c = i.formatMessage({
                id: `uG/ayY`,
                defaultMessage: `Copy table`
            });
            return (0, k.jsx)(o, {
                label: c,
                side: `bottom`,
                align: `center`,
                alignOffset: 0,
                children: (0, k.jsx)(`button`, {
                    "aria-label": c,
                    onClick: a,
                    className: `hover:bg-token-bg-tertiary text-token-text-secondary relative z-10 my-1 rounded-sm p-1 transition-opacity group-[:not(:hover):not(:focus-within)]:pointer-events-none group-[:not(:hover):not(:focus-within)]:opacity-0`,
                    children: (0, k.jsx)(s, {
                        className: `icon`
                    })
                })
            })
        }
    })),
    M, N, P, F, I, L, R, z, B, V = e((() => {
        g(), u(), T(), l(), n(), a(), M = t(m()), j(), D(), N = f(), P = (0, M.createContext)({
            topAlignHeaderCells: !1
        }), F = ({
            conversation: e,
            onClickCopy: t,
            children: n,
            unstyledContainer: a,
            topAlignHeaderCells: o = !1,
            ...c
        }) => {
            let l = (0, M.useRef)(null),
                u = (0, M.useRef)(null),
                f = y() !== void 0,
                p = f || a,
                m = r(() => e != null && w(e));
            return i(() => d({
                axis: `height`,
                target: l.current?.firstElementChild,
                onChange: ({
                    height: e
                }) => {
                    u.current && (u.current.style.height = `${e}px`)
                }
            }), []), (0, N.jsx)(P.Provider, {
                value: {
                    topAlignHeaderCells: o
                },
                children: (0, N.jsx)(`div`, {
                    dir: c.dir,
                    className: s(`group`, p ? void 0 : E.tableContainer, !p && m && E.tableContainerWithTableOfContents),
                    children: (0, N.jsxs)(`div`, {
                        tabIndex: -1,
                        className: s(p ? void 0 : E.tableWrapper, `flex flex-col-reverse`, f ? `w-full` : `w-fit`),
                        children: [(0, N.jsx)(`table`, {
                            ...c,
                            className: s(f ? `w-full table-auto border-collapse text-start` : `w-fit min-w-(--thread-content-width)`, c.className),
                            ref: l,
                            children: n
                        }), (0, N.jsx)(`div`, {
                            className: `relative h-0 self-end select-none`,
                            children: (0, N.jsx)(`div`, {
                                className: `absolute end-0 flex items-end`,
                                ref: u,
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
                className: s(`last:pe-10`, r && `align-top`, n.className),
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
//# sourceMappingURL=498cd593-cdpavkcxvdiu0e9k.js.map