import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    At as n,
    Nw as r,
    Pw as i,
    c7 as a,
    hn as o,
    k8 as s,
    l7 as c,
    q5 as l,
    rq as u,
    uq as d
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Bn as f,
    Vn as p
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    XUn as m,
    ZUn as h
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    CC as g,
    SC as _,
    Xf as v,
    Yf as y
} from "./30901919-lgbmg5s09xld40kt.js";
import {
    n as b,
    t as x
} from "./4143cd04-meyi6z1kgrmg6f2q.js";
import {
    c as S,
    i as C,
    n as w,
    o as T,
    t as E,
    u as D
} from "./5ab42519-ls02dfukajsr5brc.js";

function O({
    children: e,
    onScroll: t,
    shouldScrollToTop: n,
    scrollToBottomMode: r = `top`,
    isLoading: i = !1,
    header: s,
    height: c = `auto`,
    overlay: l,
    hideChildren: u = !1,
    disableScroll: d = !1,
    ref: f,
    onCopy: p
}) {
    let m = (0, M.jsx)(`div`, {
        onCopy: p,
        className: a(u ? `hidden` : `block`, c === `auto` ? `h-auto` : `h-full`),
        children: e
    });
    return (0, M.jsxs)(`section`, {
        ref: f,
        className: a(`relative flex min-h-0 flex-auto grow flex-col`, d && `overflow-hidden`),
        children: [(0, M.jsx)(o, {
            children: i && (0, M.jsx)(x, {
                zIndexKey: `textdocDiffLoadingOverlay`
            })
        }), !d && (0, M.jsxs)(E, {
            followButtonClassName: `hidden`,
            initialScrollBehavior: `auto`,
            scrollViewClassName: `flex flex-col`,
            className: `h-full`,
            mode: r,
            children: [s, m, l && (0, M.jsx)(`div`, {
                className: `pointer-events-none w-full flex-1`,
                children: l
            }), r === `bottom` && (0, M.jsx)(F, {}), (0, M.jsx)(N, {
                onScroll: t
            }), (0, M.jsx)(P, {
                shouldScrollToTop: n
            })]
        }), d && (0, M.jsxs)(M.Fragment, {
            children: [s, m, l && (0, M.jsx)(`div`, {
                className: `pointer-events-none h-full w-full`,
                children: l
            })]
        })]
    })
}

function k({
    className: e,
    children: t
}) {
    return (0, M.jsx)(`header`, {
        className: a(e, `touch:px-2.5 h-header-height flex flex-none items-center justify-between gap-1 px-2`),
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
        className: a(e, `text-token-text-primary truncate`, r ? `font-bold` : `font-normal`, n === `lg` && `text-lg`, n === `base` && `text-base`),
        children: t
    })
}
var j, M, N, P, F, I, L, R = e((() => {
    b(), v(), g(), i(), h(), s(), u(), c(), n(), j = t(p()), w(), M = f(), N = ({
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
        icon: l(d) ? r : _,
        onClick: e
    }), L = ({
        children: e,
        isPreviewingCode: t = !1,
        transitionBackground: n = !1
    }) => (0, M.jsx)(`section`, {
        className: a(`popover flex h-full w-full flex-col`, n && `transition-colors`, t ? `bg-[rgba(249,249,249,1)] dark:bg-[rgba(33,33,33,1)]` : `bg-transparent`),
        children: e
    }), L.Title = A, L.CloseButton = I, L.Header = k, L.Content = O
}));
export {
    R as n, L as t
};
//# sourceMappingURL=cc275b97-l0fyyt323rngzlxq.js.map