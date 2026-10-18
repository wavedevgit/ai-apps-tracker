import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    At as n,
    B6 as r,
    BK as i,
    NK as a,
    b5 as o,
    hn as s,
    i5 as c,
    lw as l,
    uw as u,
    y5 as d
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as f,
    Vn as p
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    nUn as m,
    rUn as h
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    CC as g,
    SC as _,
    Xf as v,
    Yf as y
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    n as b,
    t as x
} from "./4143cd04-bxkrbcjk3kaszeax.js";
import {
    c as S,
    i as C,
    n as w,
    o as T,
    t as E,
    u as D
} from "./5ab42519-nbh2empmed4gff2l.js";

function O({
    children: e,
    onScroll: t,
    shouldScrollToTop: n,
    scrollToBottomMode: r = `top`,
    isLoading: i = !1,
    header: a,
    height: o = `auto`,
    overlay: c,
    hideChildren: l = !1,
    disableScroll: u = !1,
    ref: f,
    onCopy: p
}) {
    let m = (0, M.jsx)(`div`, {
        onCopy: p,
        className: d(l ? `hidden` : `block`, o === `auto` ? `h-auto` : `h-full`),
        children: e
    });
    return (0, M.jsxs)(`section`, {
        ref: f,
        className: d(`relative flex min-h-0 flex-auto grow flex-col`, u && `overflow-hidden`),
        children: [(0, M.jsx)(s, {
            children: i && (0, M.jsx)(x, {
                zIndexKey: `textdocDiffLoadingOverlay`
            })
        }), !u && (0, M.jsxs)(E, {
            followButtonClassName: `hidden`,
            initialScrollBehavior: `auto`,
            scrollViewClassName: `flex flex-col`,
            className: `h-full`,
            mode: r,
            children: [a, m, c && (0, M.jsx)(`div`, {
                className: `pointer-events-none w-full flex-1`,
                children: c
            }), r === `bottom` && (0, M.jsx)(F, {}), (0, M.jsx)(N, {
                onScroll: t
            }), (0, M.jsx)(P, {
                shouldScrollToTop: n
            })]
        }), u && (0, M.jsxs)(M.Fragment, {
            children: [a, m, c && (0, M.jsx)(`div`, {
                className: `pointer-events-none h-full w-full`,
                children: c
            })]
        })]
    })
}

function k({
    className: e,
    children: t
}) {
    return (0, M.jsx)(`header`, {
        className: d(e, `touch:px-2.5 h-header-height flex flex-none items-center justify-between gap-1 px-2`),
        children: t
    })
}

function A({
    className: e,
    children: t,
    size: n = `lg`,
    bold: r
}) {
    return (0, M.jsx)(`h2`, {
        className: d(e, `text-token-text-primary truncate`, r ? `font-bold` : `font-normal`, n === `lg` && `text-lg`, n === `base` && `text-base`),
        children: t
    })
}
var j, M, N, P, F, I, L, R = e((() => {
    b(), v(), g(), u(), h(), r(), a(), o(), n(), j = t(p()), w(), M = f(), N = ({
        onScroll: e
    }) => (S(({
        scrollTop: t
    }) => {
        e?.(t)
    }), null), P = ({
        shouldScrollToTop: e
    }) => {
        let t = C();
        return (0, j.useEffect)(() => {
            e === !0 && t({
                behavior: `smooth`
            })
        }, [e, t]), null
    }, F = () => {
        let e = T();
        (0, j.useEffect)(() => {
            e({
                behavior: `smooth`
            })
        }, [e]);
        let [t] = D();
        return t ? null : (0, M.jsx)(`button`, {
            onClick: () => e({
                behavior: `smooth`
            }),
            className: `border-token-border-default bg-token-main-surface-primary text-token-text-secondary absolute end-1/2 bottom-5 z-10 flex h-8 w-8 translate-x-1/2 cursor-pointer items-center justify-center rounded-full border bg-clip-padding`,
            children: (0, M.jsx)(y, {
                className: `icon text-token-text-primary`
            })
        })
    }, I = ({
        onClick: e
    }) => (0, M.jsx)(m, {
        icon: c(i) ? l : _,
        onClick: e
    }), L = ({
        children: e,
        isPreviewingCode: t = !1,
        transitionBackground: n = !1
    }) => (0, M.jsx)(`section`, {
        className: d(`popover flex h-full w-full flex-col`, n && `transition-colors`, t ? `bg-[rgba(249,249,249,1)] dark:bg-[rgba(33,33,33,1)]` : `bg-transparent`),
        children: e
    }), L.Title = A, L.CloseButton = I, L.Header = k, L.Content = O
}));
export {
    R as n, L as t
};
//# sourceMappingURL=cc275b97-fanochffqsme4zaz.js.map