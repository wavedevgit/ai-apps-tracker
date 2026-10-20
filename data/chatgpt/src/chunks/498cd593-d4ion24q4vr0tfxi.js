import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    IN as n,
    J5 as r,
    LN as i,
    M5 as a,
    Xy as o,
    Yy as s,
    aW as c,
    m8 as l,
    q5 as u,
    sW as d
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Bn as f,
    Hn as p,
    Vn as m,
    zn as h
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    XAt as g,
    YAt as _,
    vpt as v,
    ypt as y
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    Jy as b,
    Ky as x,
    Yy as S,
    qy as C
} from "./30901919-jory365vq6ym5crx.js";
import {
    n as w,
    t as T
} from "./74802342-ne8zejalsottgtxh.js";
import {
    n as E,
    t as D
} from "./b7675d69-je86n8m3kujalntp.js";
var O, k, A, j = e((() => {
        o(), S(), C(), _(), O = t(p()), h(), k = m(), A = ({
            onClick: e
        }) => {
            let [t, n] = (0, O.useState)(!1), r = g(), i = f(), a = t => {
                e(t), n(!0), setTimeout(() => {
                    r() && n(!1)
                }, 2e3)
            }, o = t ? b : x, c = i.formatMessage({
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
        v(), l(), T(), d(), n(), r(), M = t(p()), j(), D(), N = m(), P = (0, M.createContext)({
            topAlignHeaderCells: !1
        }), F = ({
            conversation: e,
            onClickCopy: t,
            children: n,
            unstyledContainer: r,
            topAlignHeaderCells: o = !1,
            ...s
        }) => {
            let l = (0, M.useRef)(null),
                d = (0, M.useRef)(null),
                f = y() !== void 0,
                p = f || r,
                m = a(() => e != null && w(e));
            return i(() => c({
                axis: `height`,
                target: l.current?.firstElementChild,
                onChange: ({
                    height: e
                }) => {
                    d.current && (d.current.style.height = `${e}px`)
                }
            }), []), (0, N.jsx)(P.Provider, {
                value: {
                    topAlignHeaderCells: o
                },
                children: (0, N.jsx)(`div`, {
                    dir: s.dir,
                    className: u(`group`, p ? void 0 : E.tableContainer, !p && m && E.tableContainerWithTableOfContents),
                    children: (0, N.jsxs)(`div`, {
                        tabIndex: -1,
                        className: u(p ? void 0 : E.tableWrapper, `flex flex-col-reverse`, f ? `w-full` : `w-fit`),
                        children: [(0, N.jsx)(`table`, {
                            ...s,
                            className: u(f ? `w-full table-auto border-collapse text-start` : `w-fit min-w-(--thread-content-width)`, s.className),
                            ref: l,
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
                className: u(`last:pe-10`, r && `align-top`, n.className),
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
//# sourceMappingURL=498cd593-d4ion24q4vr0tfxi.js.map