import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    B6 as n,
    FU as r,
    My as i,
    NU as a,
    b5 as o,
    i5 as s,
    jy as c,
    vN as l,
    y5 as u,
    yN as d
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as f,
    Rn as p,
    Vn as m,
    zn as h
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    JAt as g,
    _pt as _,
    gpt as v,
    qAt as y
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Qy as b,
    Xy as x,
    Yy as S,
    Zy as C
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    n as w,
    t as T
} from "./74802342-kyn1hevwc628y49n.js";
import {
    n as E,
    t as D
} from "./b7675d69-je86n8m3kujalntp.js";
var O, k, A, j = e((() => {
        i(), b(), x(), y(), O = t(m()), p(), k = f(), A = ({
            onClick: e
        }) => {
            let [t, n] = (0, O.useState)(!1), r = g(), i = h(), a = t => {
                e(t), n(!0), setTimeout(() => {
                    r() && n(!1)
                }, 2e3)
            }, o = t ? C : S, s = i.formatMessage({
                id: `uG/ayY`,
                defaultMessage: `Copy table`
            });
            return (0, k.jsx)(c, {
                label: s,
                side: `bottom`,
                align: `center`,
                alignOffset: 0,
                children: (0, k.jsx)(`button`, {
                    "aria-label": s,
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
        v(), n(), T(), r(), l(), o(), M = t(m()), j(), D(), N = f(), P = (0, M.createContext)({
            topAlignHeaderCells: !1
        }), F = ({
            conversation: e,
            onClickCopy: t,
            children: n,
            unstyledContainer: r,
            topAlignHeaderCells: i = !1,
            ...o
        }) => {
            let c = (0, M.useRef)(null),
                l = (0, M.useRef)(null),
                f = _() !== void 0,
                p = f || r,
                m = s(() => e != null && w(e));
            return d(() => a({
                axis: `height`,
                target: c.current?.firstElementChild,
                onChange: ({
                    height: e
                }) => {
                    l.current && (l.current.style.height = `${e}px`)
                }
            }), []), (0, N.jsx)(P.Provider, {
                value: {
                    topAlignHeaderCells: i
                },
                children: (0, N.jsx)(`div`, {
                    dir: o.dir,
                    className: u(`group`, p ? void 0 : E.tableContainer, !p && m && E.tableContainerWithTableOfContents),
                    children: (0, N.jsxs)(`div`, {
                        tabIndex: -1,
                        className: u(p ? void 0 : E.tableWrapper, `flex flex-col-reverse`, f ? `w-full` : `w-fit`),
                        children: [(0, N.jsx)(`table`, {
                            ...o,
                            className: u(f ? `w-full table-auto border-collapse text-start` : `w-fit min-w-(--thread-content-width)`, o.className),
                            ref: c,
                            children: n
                        }), (0, N.jsx)(`div`, {
                            className: `relative h-0 self-end select-none`,
                            children: (0, N.jsx)(`div`, {
                                className: `absolute end-0 flex items-end`,
                                ref: l,
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
//# sourceMappingURL=498cd593-fqeftfbt1ck8hlfe.js.map