import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    Bz as r,
    Fx as i,
    Iv as a,
    Kat as o,
    Lx as s,
    Nx as c,
    Ox as l,
    Px as u,
    Qat as d,
    Qy as f,
    Rz as p,
    Sl as m,
    Tx as h,
    Vz as g,
    Zy as _,
    c7 as v,
    eE as y,
    f$ as b,
    hl as x,
    jv as S,
    l7 as C,
    ml as w,
    p$ as T,
    prt as E,
    srt as D,
    xl as O,
    zz as k
} from "./4813494d-t80q9ew944ej0mgk.js";
import {
    Bn as A,
    Nn as j,
    Nt as ee,
    Q as te,
    Rn as M,
    Vn as N,
    l as P,
    s as ne,
    wn as re,
    zn as ie
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $8t as F,
    Bst as I,
    Bun as L,
    Eun as ae,
    FVt as R,
    Gst as z,
    HBt as B,
    Hun as V,
    IVt as oe,
    J8t as se,
    Jln as H,
    UBt as U,
    Ust as W,
    Uun as G,
    Vun as K,
    Wun as ce,
    Z8t as le,
    ex as q,
    fX as ue,
    nun as J,
    p6t as de,
    pX as fe,
    run as pe,
    tx as me,
    zst as he
} from "./conversation-small-ocicxxw6jegn4vux.js";
import {
    CC as ge,
    Kb as _e,
    SC as ve,
    ex as ye,
    qb as be,
    tx as xe
} from "./30901919-r9pahacmzqudnt4f.js";
import {
    Bt as Se,
    Ht as Ce,
    Vt as we,
    zt as Te
} from "./c470f5ab-py8gip6x11wq9s88.js";
import {
    a as Ee,
    i as De,
    n as Oe,
    t as ke
} from "./5f4d7fa0-ozobd91aufocy1xp.js";
import {
    n as Ae,
    t as je
} from "./e8b55dd1-lgpe1zu98vd1sxh3.js";
import {
    A as Me,
    F as Ne,
    I as Pe,
    k as Fe
} from "./9e18a103-gt2rxabbn5kudo6n.js";
import {
    i as Ie,
    r as Le
} from "./ab92372e-h3j4qii1au9y3ur0.js";
import {
    r as Re,
    t as ze
} from "./0f28d127-nklp1mbg6pt8usv8.js";
import {
    n as Be,
    t as Ve
} from "./3a774aaf-m1l20w3dd2nwws7v.js";

function He(e) {
    "use forget";
    let t = (0, Ge.c)(13),
        {
            triggerText: n,
            Icon: i,
            truncate: a,
            hideTextOnMobile: o,
            isLoading: s
        } = e,
        c = a === void 0 || a,
        l = o === void 0 || o,
        u = s !== void 0 && s,
        d = l && `hidden sm:block`,
        f = c ? `max-w-[8rem] truncate md:max-w-[10rem]` : `w-fit`,
        m;
    t[0] !== d || t[1] !== f ? (m = v(d, f), t[0] = d, t[1] = f, t[2] = m) : m = t[2];
    let h;
    t[3] !== m || t[4] !== n ? (h = (0, Ke.jsx)(`span`, {
        className: m,
        children: n
    }), t[3] = m, t[4] = n, t[5] = h) : h = t[5];
    let g;
    t[6] === u ? g = t[7] : (g = u && (0, Ke.jsx)(p, {
        "aria-hidden": !0,
        className: `icon-sm`
    }), t[6] = u, t[7] = g);
    let _;
    t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = (0, Ke.jsx)(r.ChevronDownSm, {
        "aria-hidden": !0,
        className: `icon-sm`
    }), t[8] = _) : _ = t[8];
    let y;
    return t[9] !== i || t[10] !== h || t[11] !== g ? (y = (0, Ke.jsxs)(`div`, {
        className: `flex max-w-full items-center gap-1.5 ps-1`,
        children: [i, h, g, _]
    }), t[9] = i, t[10] = h, t[11] = g, t[12] = y) : y = t[12], y
}

function Ue(e) {
    "use forget";
    let t = (0, Ge.c)(19),
        {
            triggerText: n,
            toolTip: r,
            ariaLabel: i,
            Icon: a,
            truncate: o,
            isLoading: s,
            disabled: c
        } = e,
        l = o === void 0 || o,
        u = s !== void 0 && s,
        d = c !== void 0 && c,
        f = d && `cursor-not-allowed opacity-50`,
        p;
    t[0] === f ? p = t[1] : (p = v(qe, f), t[0] = f, t[1] = p);
    let m = d || void 0,
        h = d ? `` : void 0,
        g = d ? -1 : 0,
        y = d ? We : void 0,
        b;
    t[2] !== a || t[3] !== u || t[4] !== n || t[5] !== l ? (b = (0, Ke.jsx)(He, {
        triggerText: n,
        Icon: a,
        truncate: l,
        isLoading: u
    }), t[2] = a, t[3] = u, t[4] = n, t[5] = l, t[6] = b) : b = t[6];
    let x;
    t[7] !== i || t[8] !== u || t[9] !== b || t[10] !== p || t[11] !== m || t[12] !== h || t[13] !== g || t[14] !== y ? (x = (0, Ke.jsx)(le, {
        className: p,
        "aria-label": i,
        "aria-busy": u,
        "aria-disabled": m,
        "data-disabled": h,
        tabIndex: g,
        onClick: y,
        children: b
    }), t[7] = i, t[8] = u, t[9] = b, t[10] = p, t[11] = m, t[12] = h, t[13] = g, t[14] = y, t[15] = x) : x = t[15];
    let S;
    return t[16] !== x || t[17] !== r ? (S = (0, Ke.jsx)(_, {
        label: r,
        triggerAs: null,
        children: x
    }), t[16] = x, t[17] = r, t[18] = S) : S = t[18], S
}

function We(e) {
    e.preventDefault(), e.stopPropagation()
}
var Ge, Ke, qe, Je = e((() => {
    Ge = re(), g(), f(), k(), F(), C(), Ke = A(), qe = `composer-btn px-2 text-sm font-medium`
}));

function Ye({
    children: e,
    className: t,
    onClick: n,
    isSelected: i,
    isActive: a,
    isVirtualHover: o = !1,
    label: s,
    isDisabled: c,
    tooltipLabel: l,
    isSubMenuTrigger: u,
    noDefaultHoverState: d,
    as: f = `button`,
    truncateLabel: p,
    infoIcon: m,
    infoLink: h,
    icon: g,
    ...y
}) {
    let b = ie(),
        x = (0, Y.jsx)(Y.Fragment, {});
    e ? x = (0, Y.jsx)(`div`, {
        className: `flex flex-1 items-center gap-4`,
        children: e
    }) : s && (x = (0, Y.jsxs)(`div`, {
        className: v(`flex items-center gap-3`, p ? `w-0 flex-1` : `w-full`),
        children: [g && ((0, Ze.isValidElement)(g) ? g : (0, Y.jsx)(Xe, {
            icon: g
        })), s && (0, Y.jsx)(`div`, {
            className: v(`flex flex-col items-start py-1`, c && `text-token-text-quaternary pointer-events-none`, p && `w-[100%]`),
            children: (0, Y.jsx)(`div`, {
                className: v(`flex items-center text-start text-sm`, p && `w-full`),
                children: (0, Y.jsx)(`span`, {
                    className: `w-full overflow-hidden text-ellipsis whitespace-nowrap`,
                    children: s
                })
            })
        })]
    }), l && (x = (0, Y.jsx)(_, {
        sideOffset: -10,
        label: l,
        className: `w-full`,
        children: x
    })));
    let S = (0, Y.jsxs)(`div`, {
            className: v(`flex items-center justify-center`, (i || m && h || u) && `min-w-5`),
            children: [i && (0, Y.jsx)(r.CheckSm, {
                className: `icon color:var(--tint-color,#0285FF) icon-sm`,
                "aria-label": b.formatMessage({
                    id: `wham.codexMenuRow.selected`,
                    defaultMessage: `Selected`
                })
            }), m && h && (0, Y.jsx)(`a`, {
                href: h,
                target: `_blank`,
                rel: `noopener noreferrer`,
                children: m
            }), u && (0, Y.jsx)(ve, {
                className: `icon text-token-text-tertiary w-7`,
                "aria-label": b.formatMessage({
                    id: `wham.codexMenuRow.openSubmenu`,
                    defaultMessage: `Open submenu`
                })
            })]
        }),
        C = v(`flex cursor-pointer items-center rounded-[10px] px-2.5 py-1`, (i || m && h || u) && `gap-4`, a && `bg-black/5 dark:bg-white/5`, !d && `hover:bg-black/5 dark:hover:bg-white/5`, o && `bg-black/5 dark:bg-white/5`, t);
    return f === `div` ? (0, Y.jsxs)(`div`, {
        ...y,
        className: C,
        children: [x, S]
    }) : (0, Y.jsxs)(`button`, {
        type: `button`,
        ...y,
        onClick: e => {
            e.persist(), requestAnimationFrame(() => {
                n?.(e)
            })
        },
        className: C,
        children: [x, S]
    })
}

function Xe({
    icon: e
}) {
    return (0, Y.jsx)(`div`, {
        className: `text-token-text-secondary flex h-5 w-5 items-center justify-center`,
        children: (0, Y.jsx)(e, {
            className: `h-5 w-5 shrink-0`,
            "aria-label": ``
        })
    })
}
var Ze, Y, Qe = e((() => {
    ge(), g(), f(), C(), Ze = t(N()), M(), Y = A()
}));

function $e(e, t, n) {
    (0, et.useEffect)(() => {
        function t(t) {
            t.detail.popover !== e && n()
        }
        return window.addEventListener(tt, t), () => {
            window.removeEventListener(tt, t)
        }
    }, [e, n]);
    let r = (0, et.useCallback)(e => {
        window.dispatchEvent(new CustomEvent(tt, {
            detail: {
                popover: e
            }
        }))
    }, []);
    (0, et.useEffect)(() => {
        t && r(e)
    }, [t, r, e])
}
var et, tt, nt = e((() => {
        et = t(N()), tt = `wham-environment-popover-event`
    })),
    rt, it, at = e((() => {
        h(), s(), oe(), rt = t(N()), it = ({
            items: e,
            onSelect: t,
            keyExtractor: n
        }) => {
            let [r, a] = (0, rt.useState)(null), [o] = (0, rt.useState)(new Map);
            return {
                hoveredId: r,
                setHoveredId: a,
                getItemRef: e => t => {
                    let r = n(e);
                    return t && o.set(r, t), () => {
                        o.delete(r)
                    }
                },
                itemRefs: o,
                onKeyDown: s => {
                    let u = c(s, [i.ArrowDown]) || c(s, [i.Control, `n`]),
                        d = c(s, [i.ArrowUp]) || c(s, [i.Control, `p`]);
                    if (!(u || d || l(s))) return;
                    if (s.preventDefault(), l(s)) {
                        r && t(r);
                        return
                    }
                    let f = n(e[R(e.findIndex(e => n(e) === r) - (d ? 1 : -1), 0, e.length - 1)]);
                    o.get(f)?.scrollIntoView({
                        behavior: `instant`,
                        block: `nearest`
                    }), a(f)
                }
            }
        }
    }));

function ot(e) {
    "use forget";
    let t = (0, mt.c)(49),
        {
            environment: n,
            repository: r,
            disabled: a,
            disabledTooltip: o
        } = e,
        s = a !== void 0 && a,
        c = ie(),
        {
            branch: l,
            setBranch: d
        } = K(),
        [f, p] = (0, ht.useState)(``),
        [m, h] = (0, ht.useState)(!1),
        g = (0, ht.useRef)(null),
        _;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = () => h(!1), t[0] = _) : _ = t[0];
    let v = _,
        y = n?.repos?.[0] ?? r?.id ?? null,
        b = (0, ht.useRef)(y),
        x;
    t[1] !== n || t[2] !== r?.default_branch ? (x = n ? pt(n) : r?.default_branch ?? `main`, t[1] = n, t[2] = r?.default_branch, t[3] = x) : x = t[3];
    let S = x,
        C, w;
    t[4] !== l || t[5] !== S || t[6] !== y || t[7] !== d ? (C = () => {
        let e = b.current;
        if (b.current = y, !y) {
            d(null);
            return
        }
        let t = V(y);
        if (e !== y) {
            if (t) {
                d(t);
                return
            }
            d(S);
            return
        }
        l || d(t ?? S)
    }, w = [l, y, S, d], t[4] = l, t[5] = S, t[6] = y, t[7] = d, t[8] = C, t[9] = w) : (C = t[8], w = t[9]), (0, ht.useEffect)(C, w);
    let T;
    t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (T = () => h(!1), t[10] = T) : T = t[10], $e(`branch`, m, T);
    let E;
    t[11] === s ? E = t[12] : (E = () => {
        s || h(!0)
    }, t[11] = s, t[12] = E);
    let D;
    t[13] === c ? D = t[14] : (D = c.formatMessage({
        id: `wham.keyboardActions.whamBranches`,
        defaultMessage: `Branches`
    }), t[13] = c, t[14] = D);
    let O;
    t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (O = [{
        binding: [i.Mod, `b`]
    }], t[15] = O) : O = t[15];
    let k;
    t[16] !== E || t[17] !== D ? (k = [{
        key: `whamBranches`,
        action: E,
        actionMessageDescriptor: D,
        group: u.Chat,
        bindings: O
    }], t[16] = E, t[17] = D, t[18] = k) : k = t[18], Re(k);
    let A;
    t[19] !== l || t[20] !== c ? (A = l ?? c.formatMessage({
        id: `wham.codexBranchPopover.selectABranch`,
        defaultMessage: `Select a Branch`
    }), t[19] = l, t[20] = c, t[21] = A) : A = t[21];
    let j;
    t[22] !== l || t[23] !== m || t[24] !== s || t[25] !== o || t[26] !== c ? (j = s ? o ?? `` : l === `` || m ? `` : l?.length ? l : c.formatMessage({
        id: `wham.codexBranchPopover.searchForYourBranchTooltip`,
        defaultMessage: `Search for your branch`
    }), t[22] = l, t[23] = m, t[24] = s, t[25] = o, t[26] = c, t[27] = j) : j = t[27];
    let ee;
    t[28] === c ? ee = t[29] : (ee = c.formatMessage({
        id: `wham.codexBranchPopover.searchForYourBranchAria`,
        defaultMessage: `Search for your branch`
    }), t[28] = c, t[29] = ee);
    let te;
    t[30] === Symbol.for(`react.memo_cache_sentinel`) ? (te = (0, gt.jsx)(Fe, {
        "aria-hidden": !0,
        className: `icon-sm`
    }), t[30] = te) : te = t[30];
    let M;
    t[31] !== s || t[32] !== A || t[33] !== j || t[34] !== ee ? (M = (0, gt.jsx)(Ue, {
        triggerText: A,
        toolTip: j,
        ariaLabel: ee,
        Icon: te,
        disabled: s
    }), t[31] = s, t[32] = A, t[33] = j, t[34] = ee, t[35] = M) : M = t[35];
    let N;
    t[36] !== l || t[37] !== m || t[38] !== s || t[39] !== n?.github_connector_id || t[40] !== S || t[41] !== y || t[42] !== f || t[43] !== d ? (N = s ? null : (0, gt.jsx)(je, {
        align: `start`,
        isOpen: m,
        closePopover: v,
        popoverContentRef: g,
        children: (0, gt.jsx)(st, {
            defaultBranch: S,
            repoId: y,
            githubConnectorId: n?.github_connector_id,
            searchQuery: f,
            setSearchQuery: p,
            setBranch: d,
            selectedBranch: l ?? ``,
            closePopover: v
        })
    }), t[36] = l, t[37] = m, t[38] = s, t[39] = n?.github_connector_id, t[40] = S, t[41] = y, t[42] = f, t[43] = d, t[44] = N) : N = t[44];
    let P;
    return t[45] !== m || t[46] !== M || t[47] !== N ? (P = (0, gt.jsx)(`div`, {
        className: `items-center rounded-full`,
        children: (0, gt.jsxs)(se, {
            open: m,
            onOpenChange: h,
            children: [M, N]
        })
    }), t[45] = m, t[46] = M, t[47] = N, t[48] = P) : P = t[48], P
}

function st(e) {
    "use forget";
    let t = (0, mt.c)(64),
        {
            repoId: n,
            githubConnectorId: r,
            defaultBranch: i,
            setBranch: a,
            selectedBranch: o,
            searchQuery: s,
            setSearchQuery: c,
            closePopover: l
        } = e,
        u = ie(),
        d = (0, ht.useRef)(null),
        f = me(s, 300),
        p;
    t[0] === n ? p = t[1] : (p = n ? G(n) : [], t[0] = n, t[1] = p);
    let m = p,
        h;
    t[2] !== f || t[3] !== r || t[4] !== n ? (h = [`searchBranches`, n, r, f], t[2] = f, t[3] = r, t[4] = n, t[5] = h) : h = t[5];
    let g = !!n,
        _;
    t[6] !== f || t[7] !== r || t[8] !== n ? (_ = e => {
        let {
            pageParam: t
        } = e;
        return w.searchBranchesByRepository(n ?? ``, f, 25, t ?? null, r)
    }, t[6] = f, t[7] = r, t[8] = n, t[9] = _) : _ = t[9];
    let v;
    t[10] !== h || t[11] !== g || t[12] !== _ ? (v = {
        queryKey: h,
        enabled: g,
        initialPageParam: null,
        queryFn: _,
        getNextPageParam: ft
    }, t[10] = h, t[11] = g, t[12] = _, t[13] = v) : v = t[13];
    let {
        data: y,
        isLoading: b,
        fetchNextPage: x,
        hasNextPage: S,
        isFetchingNextPage: C,
        error: T
    } = P(v), E;
    if (t[14] !== y?.pages || t[15] !== i || t[16] !== m) {
        let e = y?.pages?.flat().map(ut)?.flat() ?? [],
            n = new Set;
        E = [], i && !n.has(i) && (n.add(i), E.push(i));
        for (let e of m) n.has(e) || (n.add(e), E.push(e));
        for (let t of e) n.has(t) || (n.add(t), E.push(t));
        t[14] = y?.pages, t[15] = i, t[16] = m, t[17] = E
    } else E = t[17];
    let D = E,
        O;
    t[18] !== l || t[19] !== a ? (O = e => {
        a(e), l()
    }, t[18] = l, t[19] = a, t[20] = O) : O = t[20];
    let k = O,
        A;
    bb0: {
        if (!s?.trim()) {
            let e;
            t[21] === D ? e = t[22] : (e = D ?? [], t[21] = D, t[22] = e), A = e;
            break bb0
        }
        let e;t[23] !== D || t[24] !== s ? (e = D.filter(e => e.toLowerCase().includes(s.toLowerCase())), t[23] = D, t[24] = s, t[25] = e) : e = t[25],
        A = e
    }
    let ee = A,
        te;
    t[26] !== ee || t[27] !== k ? (te = {
        items: ee,
        keyExtractor: lt,
        onSelect: k
    }, t[26] = ee, t[27] = k, t[28] = te) : te = t[28];
    let {
        hoveredId: M,
        setHoveredId: N,
        onKeyDown: ne,
        getItemRef: re
    } = it(te), F, I;
    t[29] === Symbol.for(`react.memo_cache_sentinel`) ? (I = () => {
        d.current && d.current.focus()
    }, F = [], t[29] = F, t[30] = I) : (F = t[29], I = t[30]), (0, ht.useEffect)(I, F);
    let L;
    t[31] === c ? L = t[32] : (L = e => c(e.target.value), t[31] = c, t[32] = L);
    let ae;
    t[33] === u ? ae = t[34] : (ae = u.formatMessage({
        id: `wham.codexBranchPopover.branch`,
        defaultMessage: `Search branches…`
    }), t[33] = u, t[34] = ae);
    let R;
    t[35] === u ? R = t[36] : (R = u.formatMessage({
        id: `wham.codexBranchPopover.createBranchAria`,
        defaultMessage: `Create a new branch`
    }), t[35] = u, t[36] = R);
    let z;
    t[37] !== ne || t[38] !== s || t[39] !== L || t[40] !== ae || t[41] !== R ? (z = (0, gt.jsx)(he, {
        ref: d,
        className: `placeholder:text-token-text-tertiary !focus-within:ring-0 my-1.5 w-full border-0 bg-transparent ps-4 outline-none focus:border-0 focus:ring-0 focus:outline-none`,
        type: `text`,
        autoComplete: `off`,
        inputClassName: `text-sm`,
        name: `search-branch`,
        value: s,
        suppressFocus: !0,
        onKeyDown: ne,
        onChange: L,
        placeholder: ae,
        ariaLabel: R
    }), t[37] = ne, t[38] = s, t[39] = L, t[40] = ae, t[41] = R, t[42] = z) : z = t[42];
    let B;
    t[43] === Symbol.for(`react.memo_cache_sentinel`) ? (B = (0, gt.jsx)(`div`, {
        className: `bg-token-border-default h-px w-full`
    }), t[43] = B) : B = t[43];
    let V;
    t[44] !== ee || t[45] !== re || t[46] !== k || t[47] !== M || t[48] !== o || t[49] !== N ? (V = ee?.map(e => {
        let t = e === o;
        return (0, gt.jsx)(Ye, {
            className: `w-full max-w-full whitespace-nowrap`,
            as: `button`,
            onMouseEnter: () => N(e),
            isVirtualHover: M === e,
            ref: re(e),
            onClick: () => {
                k(e)
            },
            isSelected: t,
            label: e,
            truncateLabel: !0
        }, e)
    }), t[44] = ee, t[45] = re, t[46] = k, t[47] = M, t[48] = o, t[49] = N, t[50] = V) : V = t[50];
    let oe;
    t[51] === T ? oe = t[52] : (oe = T ? (0, gt.jsx)(`div`, {
        className: `flex items-center justify-center`,
        children: (0, gt.jsx)(j, {
            id: `wham.branchPopover.error`,
            defaultMessage: `Error loading branches`
        })
    }) : null, t[51] = T, t[52] = oe);
    let se = C || b,
        H;
    t[53] !== x || t[54] !== S || t[55] !== se ? (H = (0, gt.jsx)(ue, {
        bgColor: `dark:bg-token-bg-secondary`,
        hasNextPage: S,
        fetchNextPage: x,
        isFetchingNextPage: se
    }), t[53] = x, t[54] = S, t[55] = se, t[56] = H) : H = t[56];
    let U;
    t[57] !== V || t[58] !== oe || t[59] !== H ? (U = (0, gt.jsxs)(`div`, {
        className: `min-h-18 w-full overflow-y-auto p-1.5`,
        children: [V, oe, H]
    }), t[57] = V, t[58] = oe, t[59] = H, t[60] = U) : U = t[60];
    let W;
    return t[61] !== z || t[62] !== U ? (W = (0, gt.jsxs)(`div`, {
        className: `gap flex max-h-[280px] w-90 flex-col rounded-lg p-0 md:max-h-[360px]`,
        onClick: ct,
        children: [z, B, U]
    }), t[61] = z, t[62] = U, t[63] = W) : W = t[63], W
}

function ct(e) {
    e.stopPropagation()
}

function lt(e) {
    return e
}

function ut(e) {
    return e.items.flatMap(dt)
}

function dt(e) {
    return e.branch
}

function ft(e) {
    return e?.cursor ?? null
}

function pt(e) {
    for (let t of e.repos) {
        let n = e.repo_map?.[t];
        if (n?.default_branch) return n.default_branch
    }
    return `main`
}
var mt, ht, gt, _t = e((() => {
    mt = re(), de(), fe(), I(), s(), Me(), Ae(), Je(), Qe(), nt(), at(), ze(), ce(), q(), x(), L(), F(), ne(), ht = t(N()), M(), gt = A()
}));

function vt(e, t, n) {
    return {
        label: t,
        description: ``,
        share_settings: `workspace`,
        machine: `wham-public/wham-universal`,
        repositoryId: e,
        githubConnectorId: n,
        workspaceDirectory: `/workspace`,
        agentNetworkAccess: {
            mode: `off`
        },
        setupCommands: ``,
        maintenanceSetupCommands: ``,
        secrets: [],
        envVars: [],
        autoSetupSettings: null,
        cacheSettings: {
            post_setup_cache_enabled: !0
        }
    }
}
var yt = e((() => {}));

function bt(e, t, n) {
    return (n ?? ke) === ke ? e.replace(/^github-/, ``) === t.replace(/^github-/, ``) : e === t
}

function xt(e, t, n) {
    let r = e.repos[0];
    return r != null && bt(r, t, n)
}
async function St(e, t) {
    let n = t ?? ke;
    return (await w.getEnvironments()).filter(t => O(t) === `github` && (t.github_connector_id ?? ke) === n && t.repos.some(t => bt(t, e, n)))
}
async function Ct(e, t, n) {
    let r = async () => {
        let n = await St(e, t);
        if (n.length > 1 || n[0] && !xt(n[0], e, t)) throw new wt(`Select an environment for this repository`);
        return n[0]
    }, i = await r();
    if (i) return {
        environment: i,
        created: !1
    };
    try {
        return {
            environment: await n(),
            created: !0
        }
    } catch (e) {
        if (e instanceof o && e.status === 400 && e.message === `Environment with this label already exists`) {
            let e = await r();
            if (e) return {
                environment: e,
                created: !1
            }
        }
        throw e
    }
}
var wt, Tt = e((() => {
    d(), Oe(), m(), x(), wt = class extends Error {}
}));

function Et({
    repository: e,
    disabledRepositoryIds: t,
    isCreating: n,
    creatingRepositoryId: r,
    isSelected: i,
    onSelect: a
}) {
    let o = e.repository_full_name ?? e.name ?? ``,
        s = r === e.id,
        c = !!t?.has(e.id) || !!n && !s || !!s;
    return (0, Dt.jsx)(Ye, {
        as: `button`,
        className: `w-full`,
        onClick: () => {
            c || a(e)
        },
        isSelected: i,
        isDisabled: c,
        label: o
    })
}
var Dt, Ot = e((() => {
    Qe(), Dt = A()
}));

function kt({
    repositories: e,
    isLoading: t,
    isError: n,
    search: r,
    onSelectRepository: i,
    existingEnvironmentRepositoryIds: a,
    showRepositoriesHeader: o
}) {
    "use no forget";
    let s = S(`installations/select_target`),
        c = K(e => e.selectedRepositoryId),
        l = K(e => e.useRepositoryAsEnvironment),
        u = (0, At.useMemo)(() => e.length ? e.filter(e => {
            if (!e.id || a.has(e.id)) return !1;
            if (!r) return !0;
            let t = (e.repository_full_name ?? e.name ?? ``).toLowerCase(),
                n = e.owner?.login?.toLowerCase() ?? ``;
            return t.includes(r) || n.includes(r)
        }).sort((e, t) => {
            let n = e.repository_full_name ?? e.name ?? ``,
                r = t.repository_full_name ?? t.name ?? ``;
            return n.localeCompare(r)
        }) : [], [a, r, e]),
        d = r.length > 0 ? (0, X.jsx)(j, {
            id: `wham.environmentPopover.noAdditionalRepositoriesMatch`,
            defaultMessage: `No additional repositories match your search`
        }) : e.length > 0 ? (0, X.jsx)(j, {
            id: `wham.environmentPopover.noAdditionalRepositoriesShown`,
            defaultMessage: `No additional repositories shown`
        }) : (0, X.jsx)(j, {
            id: `wham.environmentPopover.noRepositories`,
            defaultMessage: `No repositories found`
        });
    return (0, X.jsxs)(`div`, {
        className: `text-token-text-primary flex flex-col gap-0.5`,
        children: [o && (0, X.jsxs)(X.Fragment, {
            children: [(0, X.jsx)(`div`, {
                className: `bg-token-border-default mt-2 h-px w-full`
            }), (0, X.jsx)(`div`, {
                className: `px-1.5`,
                children: (0, X.jsx)(Ye, {
                    as: `div`,
                    className: `text-token-text-tertiary pointer-events-none w-full text-sm`,
                    label: (0, X.jsx)(`div`, {
                        className: `flex items-center gap-2`,
                        children: (0, X.jsx)(j, {
                            id: `wham.codexEnvironmentPopover.repositoriesWithoutEnvironments`,
                            defaultMessage: `Repositories`
                        })
                    })
                })
            })]
        }), (0, X.jsx)(`div`, {
            className: `px-1.5`,
            children: t ? (0, X.jsx)(`div`, {
                className: `flex w-full items-center justify-center py-2`,
                children: (0, X.jsx)(p, {
                    className: `ms-2`
                })
            }) : n ? (0, X.jsx)(`div`, {
                className: `p-5 text-center`,
                children: (0, X.jsx)(`p`, {
                    className: `text-token-text-tertiary text-sm`,
                    children: (0, X.jsx)(j, {
                        id: `wham.codexEnvironmentPopover.repositoriesWithoutEnvironmentsError`,
                        defaultMessage: `Failed to load repositories`
                    })
                })
            }) : u.length === 0 ? (0, X.jsx)(`div`, {
                className: `p-5 text-center`,
                children: (0, X.jsx)(`p`, {
                    className: `text-token-text-tertiary text-sm`,
                    children: d
                })
            }) : u.map(e => (0, X.jsx)(Et, {
                repository: e,
                isSelected: l && c === e.id,
                onSelect: i
            }, e.id))
        }), (0, X.jsx)(`div`, {
            className: `bg-token-border-default mt-1 h-px w-full`
        }), (0, X.jsx)(`div`, {
            className: `px-1.5 pb-1.5`,
            children: (0, X.jsx)(Ye, {
                as: `button`,
                className: `mt-1 w-full`,
                onClick: () => {
                    window.open(s, `_blank`)
                },
                icon: (0, X.jsx)(xe, {
                    className: `icon-sm inline-block`
                }),
                label: (0, X.jsx)(`div`, {
                    className: `flex items-center gap-2 text-sm`,
                    children: (0, X.jsx)(j, {
                        id: `o1jiyf`,
                        defaultMessage: `Configure Repositories on GitHub`
                    })
                })
            })
        })]
    })
}
var At, X, jt = e((() => {
    ye(), a(), k(), Qe(), Ot(), L(), At = t(N()), M(), X = A()
}));

function Mt({
    className: e
}) {
    return (0, Nt.jsx)(W, {
        className: v(`flex w-[8rem] items-center gap-1.5 rounded-full! md:w-[10rem]`, e)
    })
}
var Nt, Pt = e((() => {
    z(), C(), Nt = A()
}));

function Ft(e, t) {
    let n = new Set,
        r = [];
    for (let i of [...e, ...t]) n.has(i.id) || (n.add(i.id), r.push(i));
    return r
}

function It(e, t) {
    "use forget";
    let n = (0, Gt.c)(23),
        r;
    n[0] === e ? r = n[1] : (r = e.trim(), n[0] = e, n[1] = r);
    let i = r,
        a = i.length > 0,
        {
            data: o
        } = ae(),
        s;
    n[2] !== t || n[3] !== o ? (s = t ? (o ?? []).filter(e => O(e) === t) : o ?? [], n[2] = t, n[3] = o, n[4] = s) : s = n[4];
    let c = s,
        l;
    n[5] !== i || n[6] !== t ? (l = {
        query: i,
        provider: t
    }, n[5] = i, n[6] = t, n[7] = l) : l = n[7];
    let {
        data: u,
        isLoading: d,
        isFetching: f,
        isError: p,
        fetchNextPage: m,
        hasNextPage: h,
        isFetchingNextPage: g
    } = J(l), _;
    n[8] === u?.pages ? _ = n[9] : (_ = u?.pages.flatMap(Lt) ?? [], n[8] = u?.pages, n[9] = _);
    let v = _,
        y;
    bb0: {
        if (a) {
            y = v;
            break bb0
        }
        let e;n[10] !== c || n[11] !== v ? (e = Ft(c, v), n[10] = c, n[11] = v, n[12] = e) : e = n[12],
        y = e
    }
    let b = y,
        x = h ?? !1,
        S = c.length > 0 || v.length > 0,
        C = f && !g && !d,
        w;
    return n[13] !== b || n[14] !== d || n[15] !== m || n[16] !== p || n[17] !== g || n[18] !== i || n[19] !== x || n[20] !== S || n[21] !== C ? (w = {
        environments: b,
        environmentsLoading: d,
        isErrorEnvironments: p,
        fetchNextPage: m,
        hasNextPage: x,
        isFetchingNextPage: g,
        hasKnownEnvironments: S,
        environmentSearchQuery: i,
        isFetchingEnvironments: C
    }, n[13] = b, n[14] = d, n[15] = m, n[16] = p, n[17] = g, n[18] = i, n[19] = x, n[20] = S, n[21] = C, n[22] = w) : w = n[22], w
}

function Lt(e) {
    return e.items
}

function Rt({
    onCreateEnvironment: e,
    showBranchSelector: t = !0,
    allowRepositorySelection: r = !0,
    filters: a = null,
    openEnvironmentInNewWindow: o = !1,
    preserveSelectedEnvironment: s = !1,
    headerContent: c
} = {}) {
    "use no forget";
    let l = ie(),
        {
            environmentId: d,
            setEnvironmentId: f,
            selectedRepositoryId: p,
            setSelectedRepositoryId: m,
            setBranch: h,
            setUseRepositoryAsEnvironment: g,
            useRepositoryAsEnvironment: _
        } = K(),
        [v, y] = (0, Z.useState)(!1),
        b = (0, Z.useRef)(null),
        [x, S] = (0, Z.useState)(!1),
        C = (0, Z.useRef)(d),
        [w, E] = (0, Z.useState)(null),
        D = (0, Z.useRef)(0),
        [k, A] = (0, Z.useState)(null);
    !r && (w != null || k != null) && (S(!1), E(null), A(null));
    let [ee, te] = (0, Z.useState)(``), {
        connectorId: M
    } = De(), N = me(ee.trim(), 300), {
        data: P,
        isLoading: ne,
        isError: re
    } = pe(N, M, {
        enabled: r && a?.provider !== `gitlab`
    }), {
        environments: F,
        environmentsLoading: I,
        isErrorEnvironments: L,
        fetchNextPage: ae,
        hasNextPage: R,
        isFetchingNextPage: z,
        hasKnownEnvironments: B,
        environmentSearchQuery: V,
        isFetchingEnvironments: oe
    } = It(N, a?.provider), H = B || R || z, W = a?.provider === `gitlab` ? `/codex/cloud/settings/environments?provider=gitlab` : `/codex/cloud/settings/environments`, G = (0, Z.useMemo)(() => x && k?.environments.length ? k.environments : a?.repos ? F?.filter(e => U(e.repos, a.repos).length > 0) : F, [F, a, x, k]), ce = G?.find(e => e.id === d) ?? k?.environments.find(e => e.id === d), le = (0, Z.useRef)(void 0);
    (0, Z.useEffect)(() => {
        ce && (le.current = ce)
    }, [ce]);
    let q = ce ?? (s && le.current?.id === d ? le.current : void 0),
        ue = (0, Z.useCallback)(e => {
            if (!e) return null;
            let t = e.repos ?? Object.keys(e.repo_map ?? {});
            if (!t.length) return null;
            let [n] = t;
            return n ?? null
        }, []);
    $e(`environment`, v, () => y(!1)), (0, Z.useEffect)(() => () => {
        D.current += 1
    }, []), (0, Z.useEffect)(() => {
        C.current !== d && (C.current = d, d != null && (D.current += 1, S(!1), E(null)))
    }, [d]), (0, Z.useEffect)(() => {
        if (!_ && !x) {
            E(null);
            return
        }
    }, [_, x]), (0, Z.useEffect)(() => {
        r || (D.current += 1, !(!_ && (d || !p)) && (g(!1), m(null), h(null)))
    }, [r, _, d, p, g, m, h]), (0, Z.useEffect)(() => {
        if (x || I || L || V || s) return;
        if (d && !q) {
            if (R) return;
            f(null), m(null);
            return
        } else if (!d && G?.length) {
            let e = T(G, [e => !(e.is_pinned ?? !1), e => -(e.task_count ?? 0)])[0];
            f(e.id, O(e));
            let t = ue(e);
            m(t ?? null);
            return
        }
        let e = ue(q);
        e != null && e !== p ? m(e) : q && e == null && p != null && m(null)
    }, [I, L, d, q, G, f, p, m, ue, x, V, s, R]), (0, Z.useEffect)(() => {
        if (L || x || I || V || H || !P?.repositories.length) return;
        let [e] = P.repositories;
        if (e?.id && r && !d) {
            if (p === e.id && _) {
                w?.id !== e.id && E(e);
                return
            }
            g(!0), m(e.id), E(e), h(null)
        }
    }, [P, L, _, d, p, h, m, g, E, x, I, H, V, w?.id, r]), Re([{
        key: `whamEnvironments`,
        action: () => y(!0),
        actionMessageDescriptor: l.formatMessage({
            id: `wham.keyboardActions.whamEnvironments`,
            defaultMessage: `Environments`
        }),
        group: u.Chat,
        bindings: [{
            binding: [i.Mod, `e`]
        }]
    }]);
    let J = (0, Z.useCallback)(() => y(!1), []),
        de = (0, Z.useCallback)(async e => {
            if (!e?.id) return;
            S(!0), f(null), g(!1), m(e.id), E(e), h(null), A({
                status: `loading`,
                environments: []
            });
            let t = ++D.current;
            try {
                let n = await St(e.id, M);
                if (t !== D.current) return;
                if (A({
                        status: `complete`,
                        environments: n
                    }), n.length === 1 && xt(n[0], e.id, M)) {
                    let [e] = n;
                    f(e.id, O(e)), S(!1), J()
                } else n.length === 0 && (g(!0), J())
            } catch {
                t === D.current && A({
                    status: `error`,
                    environments: []
                })
            }
        }, [J, M, h, f, m, g]),
        fe = l.formatMessage({
            id: `wham.codexEnvironmentPopover.selectEnvironment`,
            defaultMessage: `Select environment`
        }),
        he = l.formatMessage({
            id: `wham.codexEnvironmentPopover.selectRepository`,
            defaultMessage: `Select repository`
        }),
        ge = l.formatMessage({
            id: `wham.codexEnvironmentPopover.viewAllCodeEnvironments`,
            defaultMessage: `View all code environments`
        }),
        _e = q?.label,
        ve = (_e?.length ?? 0) > 16,
        ye = r && (x || _ || !V && !H && !I),
        be = w?.repository_full_name ?? w?.name ?? he,
        xe = be.length > 16,
        Se = ye ? be : _e ?? fe,
        Ce = ye ? xe ? be : `` : ve ? _e ?? `` : _e || v ? `` : ge,
        Te = ye ? (0, Q.jsx)(we, {
            "aria-hidden": !0,
            className: `icon-sm`
        }) : (0, Q.jsx)(Pe, {
            "aria-hidden": !0,
            className: `icon-sm`
        }),
        Ee = (0, Z.useMemo)(() => {
            let e = new Set;
            return G?.forEach(t => {
                (t.repos ?? Object.keys(t.repo_map ?? {})).forEach(t => {
                    t && e.add(t)
                })
            }), e
        }, [G]),
        Oe = r && _ && w ? w : null,
        ke = t && !!(q || Oe),
        Ae = x && k != null && (k.status !== `complete` || k.environments.length > 0);
    return I && !G?.length && !v && !x && !V ? (0, Q.jsx)(`div`, {
        className: `flex items-center gap-3 rounded-full`,
        children: (0, Q.jsx)(Mt, {})
    }) : (0, Q.jsxs)(`div`, {
        className: `flex items-center gap-2 rounded-full`,
        children: [(0, Q.jsxs)(se, {
            open: v,
            onOpenChange: y,
            children: [(0, Q.jsx)(Ue, {
                triggerText: Se,
                toolTip: Ce,
                ariaLabel: l.formatMessage({
                    id: `wham.codexEnvironmentPopover.viewAll`,
                    defaultMessage: `View all code environments`
                }),
                Icon: Te
            }), (0, Q.jsx)(je, {
                align: `start`,
                collisionPadding: 12,
                isOpen: v,
                closePopover: J,
                popoverContentRef: b,
                children: (0, Q.jsx)(zt, {
                    searchTerm: ee,
                    setSearchTerm: te,
                    repositories: P?.repositories ?? [],
                    isLoadingRepositories: ne,
                    isErrorRepositories: re,
                    isLoading: I,
                    isFetchingEnvironments: oe,
                    environments: G ?? [],
                    fetchNextPage: ae,
                    hasNextPage: R,
                    isFetchingNextPage: z,
                    hasKnownEnvironments: B || G.length > 0,
                    environmentId: d,
                    setEnvironmentId: e => {
                        D.current += 1, S(!1);
                        let t = G?.find(t => t.id === e);
                        f(e, t ? O(t) : null);
                        let n = ue(t);
                        m(n ?? null)
                    },
                    closePopover: J,
                    onSelectRepository: de,
                    disabledRepositoryIds: Ee,
                    allowRepositorySelection: r,
                    openEnvironmentInNewWindow: o,
                    onCreateEnvironment: e,
                    manageEnvironmentsUrl: W,
                    headerContent: c || Ae ? (0, Q.jsxs)(Q.Fragment, {
                        children: [c, x && k?.status === `loading` && (0, Q.jsx)(`p`, {
                            role: `status`,
                            className: `px-1.5 py-2 text-sm`,
                            children: (0, Q.jsx)(j, {
                                id: `wham.codexEnvironmentPopover.repositoryLookup.loading`,
                                defaultMessage: `Looking for existing environments…`
                            })
                        }), x && k?.status === `error` && (0, Q.jsxs)(`div`, {
                            role: `alert`,
                            className: `px-1.5 py-2 text-sm`,
                            children: [(0, Q.jsx)(j, {
                                id: `wham.codexEnvironmentPopover.repositoryLookup.error`,
                                defaultMessage: `Could not load environments. Your repository is still selected.`
                            }), (0, Q.jsx)(n, {
                                type: `button`,
                                size: `small`,
                                color: `secondary`,
                                onClick: () => {
                                    w && de(w)
                                },
                                children: (0, Q.jsx)(j, {
                                    id: `wham.codexEnvironmentPopover.repositoryLookup.retry`,
                                    defaultMessage: `Retry`
                                })
                            })]
                        }), x && (k?.environments.length ?? 0) > 0 && (0, Q.jsx)(`p`, {
                            role: `status`,
                            className: `px-1.5 py-2 text-sm`,
                            children: (0, Q.jsx)(j, {
                                id: `wham.codexEnvironmentPopover.repositoryLookup.choose`,
                                defaultMessage: `Choose an environment for this repository.`
                            })
                        })]
                    }) : void 0
                })
            })]
        }), ke && (0, Q.jsx)(ot, {
            environment: q,
            repository: Oe
        })]
    })
}

function zt(e) {
    "use forget";
    let t = (0, Gt.c)(87),
        {
            searchTerm: n,
            setSearchTerm: r,
            repositories: i,
            isLoadingRepositories: a,
            isErrorRepositories: o,
            isLoading: s,
            isFetchingEnvironments: c,
            environments: l,
            fetchNextPage: u,
            hasNextPage: d,
            isFetchingNextPage: f,
            hasKnownEnvironments: m,
            environmentId: h,
            setEnvironmentId: g,
            closePopover: _,
            onSelectRepository: v,
            disabledRepositoryIds: y,
            allowRepositorySelection: b,
            openEnvironmentInNewWindow: x,
            onCreateEnvironment: S,
            manageEnvironmentsUrl: C,
            headerContent: w
        } = e,
        T = ie(),
        E = (0, Z.useRef)(null),
        D;
    t[0] !== _ || t[1] !== g ? (D = e => {
        g(e), _()
    }, t[0] = _, t[1] = g, t[2] = D) : D = t[2];
    let O = D,
        k = ee(),
        A = m,
        te = s && l.length === 0,
        M;
    if (t[3] !== h || t[4] !== l) {
        bb0: {
            let e;t[6] === h ? e = t[7] : (e = e => e.id === h, t[6] = h, t[7] = e);
            let n = l.findIndex(e);
            if (n <= 0) {
                M = l;
                break bb0
            }
            M = [l[n], ...l.slice(0, n), ...l.slice(n + 1)]
        }
        t[3] = h,
        t[4] = l,
        t[5] = M
    }
    else M = t[5];
    let N = M,
        P;
    t[8] !== N || t[9] !== O ? (P = {
        items: N,
        keyExtractor: Ut,
        onSelect: O
    }, t[8] = N, t[9] = O, t[10] = P) : P = t[10];
    let {
        hoveredId: ne,
        setHoveredId: re,
        onKeyDown: F,
        getItemRef: I
    } = it(P), L, ae;
    t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (L = () => {
        E.current?.focus()
    }, ae = [], t[11] = L, t[12] = ae) : (L = t[11], ae = t[12]), (0, Z.useEffect)(L, ae);
    let R;
    t[13] === w ? R = t[14] : (R = w ? (0, Q.jsx)(`div`, {
        className: `bg-primary flex-shrink-0 px-2 pt-2`,
        onClick: Ht,
        onPointerDown: Vt,
        children: w
    }) : null, t[13] = w, t[14] = R);
    let z;
    t[15] === r ? z = t[16] : (z = e => r(e.target.value), t[15] = r, t[16] = z);
    let B;
    t[17] === c ? B = t[18] : (B = c ? (0, Q.jsx)(p, {
        "aria-hidden": !0,
        className: `text-token-text-tertiary absolute end-0 top-1/2 h-3.5 w-3.5 -translate-y-1/2`
    }) : null, t[17] = c, t[18] = B);
    let V;
    t[19] !== b || t[20] !== A || t[21] !== T ? (V = b ? A ? T.formatMessage({
        id: `wham.codexEnvironmentPopover.searchEnvironmentsTooltip.envless`,
        defaultMessage: `Search environments and repos…`
    }) : T.formatMessage({
        id: `wham.codexEnvironmentPopover.searchEnvironmentsTooltip.envlessRepos`,
        defaultMessage: `Search repositories…`
    }) : T.formatMessage({
        id: `wham.codexEnvironmentPopover.searchEnvironmentsTooltip.environmentsOnly`,
        defaultMessage: `Search environments…`
    }), t[19] = b, t[20] = A, t[21] = T, t[22] = V) : V = t[22];
    let oe;
    t[23] !== b || t[24] !== T ? (oe = b ? T.formatMessage({
        id: `wham.codexEnvironmentPopover.searchEnvironmentsAria.envless`,
        defaultMessage: `Search environments and repos`
    }) : T.formatMessage({
        id: `wham.codexEnvironmentPopover.searchEnvironmentsAria.environmentsOnly`,
        defaultMessage: `Search environments`
    }), t[23] = b, t[24] = T, t[25] = oe) : oe = t[25];
    let se;
    t[26] !== F || t[27] !== n || t[28] !== oe || t[29] !== z || t[30] !== B || t[31] !== V ? (se = (0, Q.jsx)(he, {
        ref: E,
        className: `border-token-border-default bg-primary hover:bg-primary focus-within:bg-primary focus-within:border-heavy mb-2 flex h-8 w-full items-center rounded-lg px-2.5 py-1.5 shadow-none focus-within:ring-0`,
        containerInputClassName: `w-full`,
        inputClassName: `bg-transparent pe-5 text-sm placeholder:text-token-text-tertiary`,
        type: `text`,
        autoComplete: `off`,
        name: `codex-environment-search`,
        value: n,
        onChange: z,
        onKeyDown: F,
        suppressFocus: !0,
        insideContainerChildren: B,
        placeholder: V,
        ariaLabel: oe
    }), t[26] = F, t[27] = n, t[28] = oe, t[29] = z, t[30] = B, t[31] = V, t[32] = se) : se = t[32];
    let H;
    t[33] === Symbol.for(`react.memo_cache_sentinel`) ? (H = (0, Q.jsx)(`div`, {
        className: `bg-token-border-default h-px w-full`
    }), t[33] = H) : H = t[33];
    let U;
    t[34] === se ? U = t[35] : (U = (0, Q.jsxs)(`div`, {
        className: `bg-primary flex-shrink-0 px-2 pt-2`,
        onPointerDown: Bt,
        children: [se, H]
    }), t[34] = se, t[35] = U);
    let W;
    t[36] === A ? W = t[37] : (W = A && (0, Q.jsx)(Ye, {
        as: `div`,
        className: `text-token-text-tertiary pointer-events-none w-full text-sm`,
        label: (0, Q.jsx)(`div`, {
            className: `flex items-center gap-2`,
            children: (0, Q.jsx)(j, {
                id: `wham.codexEnvironmentPopover.envlessModeRepositories`,
                defaultMessage: `Environments`
            })
        })
    }), t[36] = A, t[37] = W);
    let G;
    t[38] === W ? G = t[39] : (G = (0, Q.jsx)(`div`, {
        className: `px-1.5 pt-1.5`,
        children: W
    }), t[38] = W, t[39] = G);
    let K;
    t[40] !== h || t[41] !== N || t[42] !== I || t[43] !== O || t[44] !== A || t[45] !== ne || t[46] !== te || t[47] !== re ? (K = te ? (0, Q.jsx)(`div`, {
        className: `px-1.5`,
        children: (0, Q.jsx)(`div`, {
            className: `flex w-full items-center justify-center py-2`,
            children: (0, Q.jsx)(p, {
                className: `ms-2`
            })
        })
    }) : A ? N.length > 0 ? (0, Q.jsx)(`div`, {
        className: `px-1.5`,
        children: N.map(e => {
            let t = h === e.id;
            return (0, Q.jsx)(Ye, {
                as: `button`,
                ref: I(e),
                onMouseEnter: () => re(e.id),
                className: `w-full`,
                truncateLabel: !0,
                onClick: () => {
                    O(e.id)
                },
                isVirtualHover: ne === e.id,
                isSelected: t,
                label: e.label
            }, e.id)
        })
    }) : (0, Q.jsx)(`div`, {
        className: `p-1.5 text-center`,
        children: (0, Q.jsx)(`p`, {
            className: `text-token-text-tertiary text-sm`,
            children: (0, Q.jsx)(j, {
                id: `wham.environmentPopover.noMatches`,
                defaultMessage: `No environments found`
            })
        })
    }) : null, t[40] = h, t[41] = N, t[42] = I, t[43] = O, t[44] = A, t[45] = ne, t[46] = te, t[47] = re, t[48] = K) : K = t[48];
    let ce;
    t[49] !== u || t[50] !== d || t[51] !== f ? (ce = (0, Q.jsx)(Wt, {
        hasNextPage: d,
        fetchNextPage: u,
        isFetchingNextPage: f
    }), t[49] = u, t[50] = d, t[51] = f, t[52] = ce) : ce = t[52];
    let le;
    t[53] !== b || t[54] !== y || t[55] !== A || t[56] !== o || t[57] !== a || t[58] !== v || t[59] !== i || t[60] !== n ? (le = b ? (0, Q.jsx)(kt, {
        onSelectRepository: v,
        existingEnvironmentRepositoryIds: y,
        showRepositoriesHeader: A,
        search: n.trim().toLowerCase(),
        repositories: i,
        isLoading: a,
        isError: o
    }) : null, t[53] = b, t[54] = y, t[55] = A, t[56] = o, t[57] = a, t[58] = v, t[59] = i, t[60] = n, t[61] = le) : le = t[61];
    let q;
    t[62] !== G || t[63] !== K || t[64] !== ce || t[65] !== le ? (q = (0, Q.jsxs)(`div`, {
        className: `flex min-h-0 flex-1 flex-col overflow-y-auto`,
        children: [G, K, ce, le]
    }), t[62] = G, t[63] = K, t[64] = ce, t[65] = le, t[66] = q) : q = t[66];
    let ue;
    t[67] === Symbol.for(`react.memo_cache_sentinel`) ? (ue = (0, Q.jsx)(`div`, {
        className: `bg-token-border-default h-px w-full`
    }), t[67] = ue) : ue = t[67];
    let J;
    t[68] !== _ || t[69] !== A || t[70] !== C || t[71] !== k || t[72] !== S || t[73] !== x ? (J = () => {
        if (x) {
            window.open(C, `_blank`, `noopener,noreferrer`), _();
            return
        }!A && S ? S() : k(C)
    }, t[68] = _, t[69] = A, t[70] = C, t[71] = k, t[72] = S, t[73] = x, t[74] = J) : J = t[74];
    let de;
    t[75] === Symbol.for(`react.memo_cache_sentinel`) ? (de = (0, Q.jsx)(be, {
        className: `icon-sm`
    }), t[75] = de) : de = t[75];
    let fe;
    t[76] !== A || t[77] !== T ? (fe = A ? T.formatMessage({
        id: `wham.codexEnvironmentPopover.manageEnvironments`,
        defaultMessage: `Manage environments`
    }) : T.formatMessage({
        id: `wham.codexEnvironmentPopover.createEnvironment`,
        defaultMessage: `Create environment`
    }), t[76] = A, t[77] = T, t[78] = fe) : fe = t[78];
    let pe;
    t[79] !== J || t[80] !== fe ? (pe = (0, Q.jsx)(`div`, {
        className: `flex flex-shrink-0 flex-col gap-1 px-2 py-1.5`,
        children: (0, Q.jsx)(Ye, {
            className: `w-full`,
            noDefaultHoverState: !0,
            onClick: J,
            isSelected: !1,
            icon: de,
            label: fe
        }, `environment-action`)
    }), t[79] = J, t[80] = fe, t[81] = pe) : pe = t[81];
    let me;
    return t[82] !== U || t[83] !== q || t[84] !== pe || t[85] !== R ? (me = (0, Q.jsxs)(`div`, {
        className: `bg-primary text-token-text-primary flex max-h-[280px] w-80 flex-col overflow-hidden rounded-lg md:max-h-[360px]`,
        children: [R, U, q, ue, pe]
    }), t[82] = U, t[83] = q, t[84] = pe, t[85] = R, t[86] = me) : me = t[86], me
}

function Bt(e) {
    e.stopPropagation()
}

function Vt(e) {
    return e.stopPropagation()
}

function Ht(e) {
    return e.stopPropagation()
}

function Ut(e) {
    return e.id
}

function Wt(e) {
    "use forget";
    let t = (0, Gt.c)(7),
        {
            isFetchingNextPage: n,
            hasNextPage: r,
            fetchNextPage: i
        } = e,
        a;
    t[0] !== i || t[1] !== r || t[2] !== n ? (a = e => {
        if (n || e == null) return;
        let t = new IntersectionObserver(e => {
            e[0].isIntersecting && r && i()
        }, {
            rootMargin: `48px 0px`
        });
        return t.observe(e), () => {
            t.disconnect()
        }
    }, t[0] = i, t[1] = r, t[2] = n, t[3] = a) : a = t[3];
    let o = a;
    if (!r && !n) return null;
    let s;
    return t[4] !== n || t[5] !== o ? (s = (0, Q.jsx)(`div`, {
        className: `bg-primary flex min-h-8 w-full items-center justify-center px-1.5 py-1`,
        children: n ? (0, Q.jsx)(p, {
            "aria-hidden": !0,
            className: `text-token-text-tertiary h-4 w-4`
        }) : (0, Q.jsx)(`div`, {
            ref: o,
            className: `h-px w-full`,
            "data-testid": `environment-infinite-scroll-trigger`
        })
    }), t[4] = n, t[5] = o, t[6] = s) : s = t[6], s
}
var Gt, Z, Q, Kt = e((() => {
    Gt = re(), y(), Ce(), _e(), I(), k(), s(), Ne(), Ae(), Je(), _t(), Qe(), jt(), Pt(), nt(), at(), Oe(), ze(), m(), Tt(), H(), q(), L(), F(), B(), b(), Z = t(N()), M(), te(), Q = A()
}));

function qt(e) {
    "use forget";
    let t = (0, Xt.c)(7),
        n;
    t[0] === e ? n = t[1] : (n = e === void 0 ? {} : e, t[0] = e, t[1] = n);
    let r = n,
        i;
    t[2] === r.allowGitLabEnvironmentSelection ? i = t[3] : (i = r.allowGitLabEnvironmentSelection && D(`1437685011`), t[2] = r.allowGitLabEnvironmentSelection, t[3] = i);
    let a = i,
        o;
    return t[4] !== a || t[5] !== r ? (o = a ? (0, $.jsx)(Yt, {
        ...r
    }) : (0, $.jsx)(Jt, {
        ...r
    }), t[4] = a, t[5] = r, t[6] = o) : o = t[6], o
}

function Jt(e) {
    "use forget";
    let t = (0, Xt.c)(27),
        {
            onCreateEnvironment: r,
            showBranchSelector: i,
            filters: a,
            allowRepositorySelection: o,
            openEnvironmentInNewWindow: s
        } = e,
        c = ie(),
        l;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (l = {
        redirectAfter: `/codex/cloud`
    }, t[0] = l) : l = t[0];
    let {
        isConnected: u,
        isLoading: d,
        openGithubModal: f,
        error: p,
        refetch: m
    } = De(l), h = Ee();
    if (d) {
        let e;
        return t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, $.jsx)(Mt, {
            className: `h-9`
        }), t[1] = e) : e = t[1], e
    } else if (p) {
        let e;
        t[2] === c ? e = t[3] : (e = c.formatMessage({
            id: `wham.whamComposerEnvironmentsSelector.failedClickToRetry`,
            defaultMessage: `Click to retry`
        }), t[2] = c, t[3] = e);
        let r;
        t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, $.jsxs)(`div`, {
            className: `flex items-center gap-1.5`,
            children: [(0, $.jsx)(Pe, {
                "aria-hidden": !0,
                className: `icon-sm`
            }), (0, $.jsx)(j, {
                id: `wham.environmentsSelector.retry`,
                defaultMessage: `Failed to load environments`
            })]
        }), t[4] = r) : r = t[4];
        let i;
        t[5] === m ? i = t[6] : (i = (0, $.jsx)(n, {
            color: `secondary`,
            type: `button`,
            className: `border-token-border-default flex w-fit items-center gap-1.5 rounded-full! border`,
            onClick: m,
            children: r
        }), t[5] = m, t[6] = i);
        let a;
        return t[7] !== e || t[8] !== i ? (a = (0, $.jsx)(_, {
            label: e,
            children: i
        }), t[7] = e, t[8] = i, t[9] = a) : a = t[9], a
    } else if (!h) {
        let e;
        t[10] === c ? e = t[11] : (e = c.formatMessage({
            id: `wham.whamComposerEnvironmentsSelector.disabledByWorkspaceAdmin`,
            defaultMessage: `Disabled by workspace admin`
        }), t[10] = c, t[11] = e);
        let r, i;
        t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, $.jsx)(Fe, {
            "aria-hidden": !0,
            className: `icon-sm me-1.5`
        }), i = (0, $.jsx)(j, {
            id: `wham.environmentsSelector.connectGithub`,
            defaultMessage: `Connect GitHub`
        }), t[12] = r, t[13] = i) : (r = t[12], i = t[13]);
        let a;
        t[14] === f ? a = t[15] : (a = (0, $.jsxs)(n, {
            type: `button`,
            color: `secondary`,
            onClick: f,
            disabled: !0,
            children: [r, i]
        }), t[14] = f, t[15] = a);
        let o;
        return t[16] !== e || t[17] !== a ? (o = (0, $.jsx)(_, {
            label: e,
            children: a
        }), t[16] = e, t[17] = a, t[18] = o) : o = t[18], o
    }
    let g;
    return t[19] !== o || t[20] !== a || t[21] !== u || t[22] !== r || t[23] !== s || t[24] !== f || t[25] !== i ? (g = (0, $.jsx)($.Fragment, {
        children: (0, $.jsx)(`div`, {
            className: `z-0 flex h-full w-full justify-between`,
            children: u ? (0, $.jsx)(`div`, {
                className: `flex gap-4`,
                children: (0, $.jsx)(Rt, {
                    onCreateEnvironment: r,
                    showBranchSelector: i ?? !0,
                    allowRepositorySelection: o ?? !0,
                    filters: a ?? null,
                    openEnvironmentInNewWindow: s
                })
            }) : (0, $.jsx)(`div`, {
                className: `flex h-full items-center gap-2`,
                children: (0, $.jsxs)(n, {
                    type: `button`,
                    color: `secondary`,
                    size: `small`,
                    onClick: f,
                    children: [(0, $.jsx)(Fe, {
                        "aria-hidden": !0,
                        className: `icon-sm me-1.5`
                    }), (0, $.jsx)(j, {
                        id: `wham.environmentsSelector.connectGithub`,
                        defaultMessage: `Connect GitHub`
                    })]
                })
            })
        })
    }), t[19] = o, t[20] = a, t[21] = u, t[22] = r, t[23] = s, t[24] = f, t[25] = i, t[26] = g) : g = t[26], g
}

function Yt(e) {
    "use forget";
    let t = (0, Xt.c)(57),
        {
            onCreateEnvironment: r,
            showBranchSelector: i,
            filters: a,
            allowRepositorySelection: o,
            openEnvironmentInNewWindow: s,
            hasSelectedEnvironment: c,
            preserveSelectedEnvironment: l,
            selectedEnvironmentProvider: u
        } = e,
        d = c !== void 0 && c,
        f = l !== void 0 && l,
        p = ie(),
        m = ee(),
        h;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (h = {
        redirectAfter: `/codex/cloud`
    }, t[0] = h) : h = t[0];
    let {
        isConnected: g,
        isLoading: v,
        openGithubModal: y,
        error: b,
        refetch: x
    } = De(h), S = Ee(), C;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (C = {
        redirectAfter: `/codex/cloud`
    }, t[1] = C) : C = t[1];
    let w = Ie(C),
        [T, E] = (0, Zt.useState)(null),
        D = w.isConnected,
        O = S !== !1 && g,
        k = O || D,
        A = O && D,
        te = D && !O ? `gitlab` : `github`,
        M = T ?? u,
        N = M ?? te,
        P = A || u != null && (N === `gitlab` ? O : D),
        ne = f && d && u == null && T == null,
        re = f || d && T != null && u != null && T !== u,
        F;
    t[2] !== N || t[3] !== a || t[4] !== ne ? (F = ne ? a ?? null : {
        ...a ?? {},
        provider: N
    }, t[2] = N, t[3] = a, t[4] = ne, t[5] = F) : F = t[5];
    let I = F,
        L = N === `gitlab` ? D : O,
        ae = N === `gitlab` ? w.isLoading : v,
        R = N === `gitlab` ? w.error : b,
        z = N === `gitlab` ? w.refetch : x,
        B;
    t[6] === N ? B = t[7] : (B = e => {
        e !== N && E(e)
    }, t[6] = N, t[7] = B);
    let V = B,
        oe = !k && M == null;
    if (oe && v) {
        let e;
        return t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, $.jsx)(Mt, {
            className: `h-9`
        }), t[8] = e) : e = t[8], e
    }
    if (oe && b == null && !S) {
        let e;
        t[9] === p ? e = t[10] : (e = p.formatMessage({
            id: `wham.whamComposerEnvironmentsSelector.disabledByWorkspaceAdmin`,
            defaultMessage: `Disabled by workspace admin`
        }), t[9] = p, t[10] = e);
        let r, i;
        t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, $.jsx)(Fe, {
            "aria-hidden": !0,
            className: `icon-sm me-1.5`
        }), i = (0, $.jsx)(j, {
            id: `wham.environmentsSelector.connectGithub`,
            defaultMessage: `Connect GitHub`
        }), t[11] = r, t[12] = i) : (r = t[11], i = t[12]);
        let a;
        t[13] === y ? a = t[14] : (a = (0, $.jsxs)(n, {
            type: `button`,
            color: `secondary`,
            onClick: y,
            disabled: !0,
            children: [r, i]
        }), t[13] = y, t[14] = a);
        let o;
        return t[15] !== a || t[16] !== e ? (o = (0, $.jsx)(_, {
            label: e,
            children: a
        }), t[15] = a, t[16] = e, t[17] = o) : o = t[17], o
    }
    let se;
    t[18] !== N || t[19] !== m || t[20] !== r ? (se = N === `gitlab` ? () => m(`/codex/cloud/settings/environment/create?provider=gitlab`) : r, t[18] = N, t[19] = m, t[20] = r, t[21] = se) : se = t[21];
    let H = se,
        U;
    t[22] !== N || t[23] !== w.openConnectorModal || t[24] !== S || t[25] !== y ? (U = N === `gitlab` ? (0, $.jsxs)(n, {
        type: `button`,
        color: `secondary`,
        size: `small`,
        onClick: w.openConnectorModal,
        children: [(0, $.jsx)(Te, {
            "aria-hidden": !0,
            className: `icon-sm me-1.5`
        }), (0, $.jsx)(j, {
            id: `wham.environmentsSelector.connectGitLab.beta`,
            defaultMessage: `Connect GitLab (Beta)`
        })]
    }) : (0, $.jsxs)(n, {
        type: `button`,
        color: `secondary`,
        size: `small`,
        onClick: y,
        disabled: S === !1,
        children: [(0, $.jsx)(Fe, {
            "aria-hidden": !0,
            className: `icon-sm me-1.5`
        }), (0, $.jsx)(j, {
            id: `wham.environmentsSelector.connectGithub`,
            defaultMessage: `Connect GitHub`
        })]
    }), t[22] = N, t[23] = w.openConnectorModal, t[24] = S, t[25] = y, t[26] = U) : U = t[26];
    let W = U,
        G;
    t[27] === p ? G = t[28] : (G = e => (0, $.jsx)(_, {
        label: p.formatMessage({
            id: `wham.whamComposerEnvironmentsSelector.failedClickToRetry`,
            defaultMessage: `Click to retry`
        }),
        children: (0, $.jsx)(n, {
            color: `secondary`,
            type: `button`,
            className: `border-token-border-default flex w-fit items-center gap-1.5 rounded-full! border`,
            onClick: e,
            children: (0, $.jsxs)(`div`, {
                className: `flex items-center gap-1.5`,
                children: [(0, $.jsx)(Pe, {
                    "aria-hidden": !0,
                    className: `icon-sm`
                }), (0, $.jsx)(j, {
                    id: `wham.environmentsSelector.retry`,
                    defaultMessage: `Failed to load environments`
                })]
            })
        })
    }), t[27] = p, t[28] = G);
    let K = G,
        ce;
    t[29] !== W || t[30] !== b || t[31] !== x || t[32] !== K ? (ce = b ? K(x) : W, t[29] = W, t[30] = b, t[31] = x, t[32] = K, t[33] = ce) : ce = t[33];
    let le = ce,
        q = L || ne,
        ue;
    t[34] !== N || t[35] !== V || t[36] !== P ? (ue = P ? (0, $.jsx)(Ve, {
        value: N,
        onChange: V,
        appearance: `segmented`,
        isCompact: !0
    }) : null, t[34] = N, t[35] = V, t[36] = P, t[37] = ue) : ue = t[37];
    let J = ue,
        de;
    return t[38] !== W || t[39] !== R || t[40] !== H || t[41] !== N || t[42] !== o || t[43] !== le || t[44] !== I || t[45] !== k || t[46] !== ae || t[47] !== s || t[48] !== M || t[49] !== J || t[50] !== z || t[51] !== K || t[52] !== re || t[53] !== q || t[54] !== i || t[55] !== P ? (de = (0, $.jsx)($.Fragment, {
        children: (0, $.jsx)(`div`, {
            className: `z-0 flex h-full w-full justify-between`,
            children: k || M != null ? (0, $.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [P && !q && J, !q && ae ? (0, $.jsx)(Mt, {
                    className: `h-9`
                }) : !q && R ? K(z) : q ? (0, $.jsx)(Rt, {
                    onCreateEnvironment: H,
                    showBranchSelector: i ?? !0,
                    allowRepositorySelection: N === `github` && (o ?? !0),
                    filters: I,
                    openEnvironmentInNewWindow: s,
                    preserveSelectedEnvironment: re,
                    headerContent: J
                }) : W]
            }) : (0, $.jsx)(`div`, {
                className: `flex h-full items-center gap-2`,
                children: le
            })
        })
    }), t[38] = W, t[39] = R, t[40] = H, t[41] = N, t[42] = o, t[43] = le, t[44] = I, t[45] = k, t[46] = ae, t[47] = s, t[48] = M, t[49] = J, t[50] = z, t[51] = K, t[52] = re, t[53] = q, t[54] = i, t[55] = P, t[56] = de) : de = t[56], de
}
var Xt, Zt, $, Qt = e((() => {
    Xt = re(), y(), Se(), f(), E(), Me(), Ne(), Be(), Kt(), Pt(), Oe(), Le(), Zt = t(N()), M(), te(), $ = A()
}));
export {
    wt as a, vt as c, pt as d, _t as f, Je as g, Ue as h, Kt as i, yt as l, Qe as m, Qt as n, Tt as o, Ye as p, Rt as r, Ct as s, qt as t, ot as u
};
//# sourceMappingURL=e7a416e4-h29uifnl47a2a56y.js.map