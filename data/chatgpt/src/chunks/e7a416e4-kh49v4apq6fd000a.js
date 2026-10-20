import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Av as n,
    Az as r,
    Dx as i,
    Fat as a,
    Fv as o,
    Ix as s,
    J5 as c,
    JT as l,
    Mx as u,
    Mz as d,
    Nx as f,
    Nz as p,
    Px as m,
    Wnt as h,
    Xnt as g,
    Xy as _,
    Y5 as v,
    Zy as y,
    bl as b,
    h$ as x,
    jz as S,
    kat as C,
    m$ as w,
    ml as T,
    pl as E,
    qT as D,
    wx as O,
    xl as k
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as A,
    Nn as j,
    Nt as M,
    Q as ee,
    Rn as N,
    Vn as P,
    l as F,
    s as te,
    wn as ne,
    zn as re
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $b as I,
    BVt as L,
    Dun as R,
    Gun as ie,
    Hun as z,
    KBt as B,
    Q8t as V,
    Ust as ae,
    Uun as H,
    Vun as U,
    Wst as oe,
    Wun as se,
    Yln as W,
    Yst as G,
    _6t as K,
    dX as ce,
    ex as le,
    iun as ue,
    qBt as de,
    qst as q,
    r5t as J,
    run as fe,
    t5t as pe,
    uX as me,
    zVt as he
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    CC as ge,
    Kb as _e,
    SC as ve,
    ex as ye,
    qb as be,
    tx as xe
} from "./30901919-7dzdc1ou0jtwkwpt.js";
import {
    Bt as Se,
    Ht as Ce,
    Vt as we,
    zt as Te
} from "./c470f5ab-d4g7lc53n1e1ao7o.js";
import {
    a as Ee,
    i as De,
    n as Oe,
    t as ke
} from "./5f4d7fa0-ecwvalz9rud7vc7c.js";
import {
    n as Ae,
    t as je
} from "./e8b55dd1-5kkpcds3pw3lbf2q.js";
import {
    A as Me,
    F as Ne,
    I as Pe,
    k as Fe
} from "./9e18a103-mg1py3qq0l0cajgf.js";
import {
    i as Ie,
    r as Le
} from "./ab92372e-km4nblnp8ngn05ru.js";
import {
    r as Re,
    t as ze
} from "./0f28d127-i5imaalj1guqvomt.js";
import {
    n as Be,
    t as Ve
} from "./3a774aaf-f6h0h6n22ezaac5h.js";

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
        l = a === void 0 || a,
        u = o === void 0 || o,
        f = s !== void 0 && s,
        p = u && `hidden sm:block`,
        m = l ? `max-w-[8rem] truncate md:max-w-[10rem]` : `w-fit`,
        h;
    t[0] !== p || t[1] !== m ? (h = c(p, m), t[0] = p, t[1] = m, t[2] = h) : h = t[2];
    let g;
    t[3] !== h || t[4] !== n ? (g = (0, Ke.jsx)(`span`, {
        className: h,
        children: n
    }), t[3] = h, t[4] = n, t[5] = g) : g = t[5];
    let _;
    t[6] === f ? _ = t[7] : (_ = f && (0, Ke.jsx)(r, {
        "aria-hidden": !0,
        className: `icon-sm`
    }), t[6] = f, t[7] = _);
    let v;
    t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (v = (0, Ke.jsx)(d.ChevronDownSm, {
        "aria-hidden": !0,
        className: `icon-sm`
    }), t[8] = v) : v = t[8];
    let y;
    return t[9] !== i || t[10] !== g || t[11] !== _ ? (y = (0, Ke.jsxs)(`div`, {
        className: `flex max-w-full items-center gap-1.5 ps-1`,
        children: [i, g, _, v]
    }), t[9] = i, t[10] = g, t[11] = _, t[12] = y) : y = t[12], y
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
            disabled: l
        } = e,
        u = o === void 0 || o,
        d = s !== void 0 && s,
        f = l !== void 0 && l,
        p = f && `cursor-not-allowed opacity-50`,
        m;
    t[0] === p ? m = t[1] : (m = c(qe, p), t[0] = p, t[1] = m);
    let h = f || void 0,
        g = f ? `` : void 0,
        v = f ? -1 : 0,
        y = f ? We : void 0,
        b;
    t[2] !== a || t[3] !== d || t[4] !== n || t[5] !== u ? (b = (0, Ke.jsx)(He, {
        triggerText: n,
        Icon: a,
        truncate: u,
        isLoading: d
    }), t[2] = a, t[3] = d, t[4] = n, t[5] = u, t[6] = b) : b = t[6];
    let x;
    t[7] !== i || t[8] !== d || t[9] !== b || t[10] !== m || t[11] !== h || t[12] !== g || t[13] !== v || t[14] !== y ? (x = (0, Ke.jsx)(pe, {
        className: m,
        "aria-label": i,
        "aria-busy": d,
        "aria-disabled": h,
        "data-disabled": g,
        tabIndex: v,
        onClick: y,
        children: b
    }), t[7] = i, t[8] = d, t[9] = b, t[10] = m, t[11] = h, t[12] = g, t[13] = v, t[14] = y, t[15] = x) : x = t[15];
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
    Ge = ne(), p(), y(), S(), J(), v(), Ke = A(), qe = `composer-btn px-2 text-sm font-medium`
}));

function Ye({
    children: e,
    className: t,
    onClick: n,
    isSelected: r,
    isActive: i,
    isVirtualHover: a = !1,
    label: o,
    isDisabled: s,
    tooltipLabel: l,
    isSubMenuTrigger: u,
    noDefaultHoverState: f,
    as: p = `button`,
    truncateLabel: m,
    infoIcon: h,
    infoLink: g,
    icon: v,
    ...y
}) {
    let b = re(),
        x = (0, Y.jsx)(Y.Fragment, {});
    e ? x = (0, Y.jsx)(`div`, {
        className: `flex flex-1 items-center gap-4`,
        children: e
    }) : o && (x = (0, Y.jsxs)(`div`, {
        className: c(`flex items-center gap-3`, m ? `w-0 flex-1` : `w-full`),
        children: [v && ((0, Ze.isValidElement)(v) ? v : (0, Y.jsx)(Xe, {
            icon: v
        })), o && (0, Y.jsx)(`div`, {
            className: c(`flex flex-col items-start py-1`, s && `text-token-text-quaternary pointer-events-none`, m && `w-[100%]`),
            children: (0, Y.jsx)(`div`, {
                className: c(`flex items-center text-start text-sm`, m && `w-full`),
                children: (0, Y.jsx)(`span`, {
                    className: `w-full overflow-hidden text-ellipsis whitespace-nowrap`,
                    children: o
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
            className: c(`flex items-center justify-center`, (r || h && g || u) && `min-w-5`),
            children: [r && (0, Y.jsx)(d.CheckSm, {
                className: `icon color:var(--tint-color,#0285FF) icon-sm`,
                "aria-label": b.formatMessage({
                    id: `wham.codexMenuRow.selected`,
                    defaultMessage: `Selected`
                })
            }), h && g && (0, Y.jsx)(`a`, {
                href: g,
                target: `_blank`,
                rel: `noopener noreferrer`,
                children: h
            }), u && (0, Y.jsx)(ve, {
                className: `icon text-token-text-tertiary w-7`,
                "aria-label": b.formatMessage({
                    id: `wham.codexMenuRow.openSubmenu`,
                    defaultMessage: `Open submenu`
                })
            })]
        }),
        C = c(`flex cursor-pointer items-center rounded-[10px] px-2.5 py-1`, (r || h && g || u) && `gap-4`, i && `bg-black/5 dark:bg-white/5`, !f && `hover:bg-black/5 dark:hover:bg-white/5`, a && `bg-black/5 dark:bg-white/5`, t);
    return p === `div` ? (0, Y.jsxs)(`div`, {
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
    ge(), p(), y(), v(), Ze = t(P()), N(), Y = A()
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
        et = t(P()), tt = `wham-environment-popover-event`
    })),
    rt, it, at = e((() => {
        O(), s(), L(), rt = t(P()), it = ({
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
                    let c = u(s, [m.ArrowDown]) || u(s, [m.Control, `n`]),
                        l = u(s, [m.ArrowUp]) || u(s, [m.Control, `p`]);
                    if (!(c || l || i(s))) return;
                    if (s.preventDefault(), i(s)) {
                        r && t(r);
                        return
                    }
                    let d = n(e[he(e.findIndex(e => n(e) === r) - (l ? 1 : -1), 0, e.length - 1)]);
                    o.get(d)?.scrollIntoView({
                        behavior: `instant`,
                        block: `nearest`
                    }), a(d)
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
            disabled: i,
            disabledTooltip: a
        } = e,
        o = i !== void 0 && i,
        s = re(),
        {
            branch: c,
            setBranch: l
        } = z(),
        [u, d] = (0, ht.useState)(``),
        [p, h] = (0, ht.useState)(!1),
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
    t[4] !== c || t[5] !== S || t[6] !== y || t[7] !== l ? (C = () => {
        let e = b.current;
        if (b.current = y, !y) {
            l(null);
            return
        }
        let t = H(y);
        if (e !== y) {
            if (t) {
                l(t);
                return
            }
            l(S);
            return
        }
        c || l(t ?? S)
    }, w = [c, y, S, l], t[4] = c, t[5] = S, t[6] = y, t[7] = l, t[8] = C, t[9] = w) : (C = t[8], w = t[9]), (0, ht.useEffect)(C, w);
    let T;
    t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (T = () => h(!1), t[10] = T) : T = t[10], $e(`branch`, p, T);
    let E;
    t[11] === o ? E = t[12] : (E = () => {
        o || h(!0)
    }, t[11] = o, t[12] = E);
    let D;
    t[13] === s ? D = t[14] : (D = s.formatMessage({
        id: `wham.keyboardActions.whamBranches`,
        defaultMessage: `Branches`
    }), t[13] = s, t[14] = D);
    let O;
    t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (O = [{
        binding: [m.Mod, `b`]
    }], t[15] = O) : O = t[15];
    let k;
    t[16] !== E || t[17] !== D ? (k = [{
        key: `whamBranches`,
        action: E,
        actionMessageDescriptor: D,
        group: f.Chat,
        bindings: O
    }], t[16] = E, t[17] = D, t[18] = k) : k = t[18], Re(k);
    let A;
    t[19] !== c || t[20] !== s ? (A = c ?? s.formatMessage({
        id: `wham.codexBranchPopover.selectABranch`,
        defaultMessage: `Select a Branch`
    }), t[19] = c, t[20] = s, t[21] = A) : A = t[21];
    let j;
    t[22] !== c || t[23] !== p || t[24] !== o || t[25] !== a || t[26] !== s ? (j = o ? a ?? `` : c === `` || p ? `` : c?.length ? c : s.formatMessage({
        id: `wham.codexBranchPopover.searchForYourBranchTooltip`,
        defaultMessage: `Search for your branch`
    }), t[22] = c, t[23] = p, t[24] = o, t[25] = a, t[26] = s, t[27] = j) : j = t[27];
    let M;
    t[28] === s ? M = t[29] : (M = s.formatMessage({
        id: `wham.codexBranchPopover.searchForYourBranchAria`,
        defaultMessage: `Search for your branch`
    }), t[28] = s, t[29] = M);
    let ee;
    t[30] === Symbol.for(`react.memo_cache_sentinel`) ? (ee = (0, gt.jsx)(Fe, {
        "aria-hidden": !0,
        className: `icon-sm`
    }), t[30] = ee) : ee = t[30];
    let N;
    t[31] !== o || t[32] !== A || t[33] !== j || t[34] !== M ? (N = (0, gt.jsx)(Ue, {
        triggerText: A,
        toolTip: j,
        ariaLabel: M,
        Icon: ee,
        disabled: o
    }), t[31] = o, t[32] = A, t[33] = j, t[34] = M, t[35] = N) : N = t[35];
    let P;
    t[36] !== c || t[37] !== p || t[38] !== o || t[39] !== n?.github_connector_id || t[40] !== S || t[41] !== y || t[42] !== u || t[43] !== l ? (P = o ? null : (0, gt.jsx)(je, {
        align: `start`,
        isOpen: p,
        closePopover: v,
        popoverContentRef: g,
        children: (0, gt.jsx)(st, {
            defaultBranch: S,
            repoId: y,
            githubConnectorId: n?.github_connector_id,
            searchQuery: u,
            setSearchQuery: d,
            setBranch: l,
            selectedBranch: c ?? ``,
            closePopover: v
        })
    }), t[36] = c, t[37] = p, t[38] = o, t[39] = n?.github_connector_id, t[40] = S, t[41] = y, t[42] = u, t[43] = l, t[44] = P) : P = t[44];
    let F;
    return t[45] !== p || t[46] !== N || t[47] !== P ? (F = (0, gt.jsx)(`div`, {
        className: `items-center rounded-full`,
        children: (0, gt.jsxs)(V, {
            open: p,
            onOpenChange: h,
            children: [N, P]
        })
    }), t[45] = p, t[46] = N, t[47] = P, t[48] = F) : F = t[48], F
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
        u = re(),
        d = (0, ht.useRef)(null),
        f = le(s, 300),
        p;
    t[0] === n ? p = t[1] : (p = n ? se(n) : [], t[0] = n, t[1] = p);
    let m = p,
        h;
    t[2] !== f || t[3] !== r || t[4] !== n ? (h = [`searchBranches`, n, r, f], t[2] = f, t[3] = r, t[4] = n, t[5] = h) : h = t[5];
    let g = !!n,
        _;
    t[6] !== f || t[7] !== r || t[8] !== n ? (_ = e => {
        let {
            pageParam: t
        } = e;
        return E.searchBranchesByRepository(n ?? ``, f, 25, t ?? null, r)
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
        error: w
    } = F(v), T;
    if (t[14] !== y?.pages || t[15] !== i || t[16] !== m) {
        let e = y?.pages?.flat().map(ut)?.flat() ?? [],
            n = new Set;
        T = [], i && !n.has(i) && (n.add(i), T.push(i));
        for (let e of m) n.has(e) || (n.add(e), T.push(e));
        for (let t of e) n.has(t) || (n.add(t), T.push(t));
        t[14] = y?.pages, t[15] = i, t[16] = m, t[17] = T
    } else T = t[17];
    let D = T,
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
    let M = A,
        ee;
    t[26] !== M || t[27] !== k ? (ee = {
        items: M,
        keyExtractor: lt,
        onSelect: k
    }, t[26] = M, t[27] = k, t[28] = ee) : ee = t[28];
    let {
        hoveredId: N,
        setHoveredId: P,
        onKeyDown: te,
        getItemRef: ne
    } = it(ee), I, L;
    t[29] === Symbol.for(`react.memo_cache_sentinel`) ? (L = () => {
        d.current && d.current.focus()
    }, I = [], t[29] = I, t[30] = L) : (I = t[29], L = t[30]), (0, ht.useEffect)(L, I);
    let R;
    t[31] === c ? R = t[32] : (R = e => c(e.target.value), t[31] = c, t[32] = R);
    let ie;
    t[33] === u ? ie = t[34] : (ie = u.formatMessage({
        id: `wham.codexBranchPopover.branch`,
        defaultMessage: `Search branches…`
    }), t[33] = u, t[34] = ie);
    let z;
    t[35] === u ? z = t[36] : (z = u.formatMessage({
        id: `wham.codexBranchPopover.createBranchAria`,
        defaultMessage: `Create a new branch`
    }), t[35] = u, t[36] = z);
    let B;
    t[37] !== te || t[38] !== s || t[39] !== R || t[40] !== ie || t[41] !== z ? (B = (0, gt.jsx)(ae, {
        ref: d,
        className: `placeholder:text-token-text-tertiary !focus-within:ring-0 my-1.5 w-full border-0 bg-transparent ps-4 outline-none focus:border-0 focus:ring-0 focus:outline-none`,
        type: `text`,
        autoComplete: `off`,
        inputClassName: `text-sm`,
        name: `search-branch`,
        value: s,
        suppressFocus: !0,
        onKeyDown: te,
        onChange: R,
        placeholder: ie,
        ariaLabel: z
    }), t[37] = te, t[38] = s, t[39] = R, t[40] = ie, t[41] = z, t[42] = B) : B = t[42];
    let V;
    t[43] === Symbol.for(`react.memo_cache_sentinel`) ? (V = (0, gt.jsx)(`div`, {
        className: `bg-token-border-default h-px w-full`
    }), t[43] = V) : V = t[43];
    let H;
    t[44] !== M || t[45] !== ne || t[46] !== k || t[47] !== N || t[48] !== o || t[49] !== P ? (H = M?.map(e => {
        let t = e === o;
        return (0, gt.jsx)(Ye, {
            className: `w-full max-w-full whitespace-nowrap`,
            as: `button`,
            onMouseEnter: () => P(e),
            isVirtualHover: N === e,
            ref: ne(e),
            onClick: () => {
                k(e)
            },
            isSelected: t,
            label: e,
            truncateLabel: !0
        }, e)
    }), t[44] = M, t[45] = ne, t[46] = k, t[47] = N, t[48] = o, t[49] = P, t[50] = H) : H = t[50];
    let U;
    t[51] === w ? U = t[52] : (U = w ? (0, gt.jsx)(`div`, {
        className: `flex items-center justify-center`,
        children: (0, gt.jsx)(j, {
            id: `wham.branchPopover.error`,
            defaultMessage: `Error loading branches`
        })
    }) : null, t[51] = w, t[52] = U);
    let oe = C || b,
        W;
    t[53] !== x || t[54] !== S || t[55] !== oe ? (W = (0, gt.jsx)(me, {
        bgColor: `dark:bg-token-bg-secondary`,
        hasNextPage: S,
        fetchNextPage: x,
        isFetchingNextPage: oe
    }), t[53] = x, t[54] = S, t[55] = oe, t[56] = W) : W = t[56];
    let G;
    t[57] !== H || t[58] !== U || t[59] !== W ? (G = (0, gt.jsxs)(`div`, {
        className: `min-h-18 w-full overflow-y-auto p-1.5`,
        children: [H, U, W]
    }), t[57] = H, t[58] = U, t[59] = W, t[60] = G) : G = t[60];
    let K;
    return t[61] !== B || t[62] !== G ? (K = (0, gt.jsxs)(`div`, {
        className: `gap flex max-h-[280px] w-90 flex-col rounded-lg p-0 md:max-h-[360px]`,
        onClick: ct,
        children: [B, V, G]
    }), t[61] = B, t[62] = G, t[63] = K) : K = t[63], K
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
    mt = ne(), K(), ce(), oe(), s(), Me(), Ae(), Je(), Qe(), nt(), at(), ze(), ie(), I(), T(), U(), J(), te(), ht = t(P()), N(), gt = A()
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
    return (await E.getEnvironments()).filter(t => b(t) === `github` && (t.github_connector_id ?? ke) === n && t.repos.some(t => bt(t, e, n)))
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
        if (e instanceof C && e.status === 400 && e.message === `Environment with this label already exists`) {
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
    a(), Oe(), k(), T(), wt = class extends Error {}
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
    isError: i,
    search: a,
    onSelectRepository: o,
    existingEnvironmentRepositoryIds: s,
    showRepositoriesHeader: c
}) {
    "use no forget";
    let l = n(`installations/select_target`),
        u = z(e => e.selectedRepositoryId),
        d = z(e => e.useRepositoryAsEnvironment),
        f = (0, At.useMemo)(() => e.length ? e.filter(e => {
            if (!e.id || s.has(e.id)) return !1;
            if (!a) return !0;
            let t = (e.repository_full_name ?? e.name ?? ``).toLowerCase(),
                n = e.owner?.login?.toLowerCase() ?? ``;
            return t.includes(a) || n.includes(a)
        }).sort((e, t) => {
            let n = e.repository_full_name ?? e.name ?? ``,
                r = t.repository_full_name ?? t.name ?? ``;
            return n.localeCompare(r)
        }) : [], [s, a, e]),
        p = a.length > 0 ? (0, X.jsx)(j, {
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
        children: [c && (0, X.jsxs)(X.Fragment, {
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
                children: (0, X.jsx)(r, {
                    className: `ms-2`
                })
            }) : i ? (0, X.jsx)(`div`, {
                className: `p-5 text-center`,
                children: (0, X.jsx)(`p`, {
                    className: `text-token-text-tertiary text-sm`,
                    children: (0, X.jsx)(j, {
                        id: `wham.codexEnvironmentPopover.repositoriesWithoutEnvironmentsError`,
                        defaultMessage: `Failed to load repositories`
                    })
                })
            }) : f.length === 0 ? (0, X.jsx)(`div`, {
                className: `p-5 text-center`,
                children: (0, X.jsx)(`p`, {
                    className: `text-token-text-tertiary text-sm`,
                    children: p
                })
            }) : f.map(e => (0, X.jsx)(Et, {
                repository: e,
                isSelected: d && u === e.id,
                onSelect: o
            }, e.id))
        }), (0, X.jsx)(`div`, {
            className: `bg-token-border-default mt-1 h-px w-full`
        }), (0, X.jsx)(`div`, {
            className: `px-1.5 pb-1.5`,
            children: (0, X.jsx)(Ye, {
                as: `button`,
                className: `mt-1 w-full`,
                onClick: () => {
                    window.open(l, `_blank`)
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
    ye(), o(), S(), Qe(), Ot(), U(), At = t(P()), N(), X = A()
}));

function Mt({
    className: e
}) {
    return (0, Nt.jsx)(q, {
        className: c(`flex w-[8rem] items-center gap-1.5 rounded-full! md:w-[10rem]`, e)
    })
}
var Nt, Pt = e((() => {
    G(), v(), Nt = A()
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
        } = R(),
        s;
    n[2] !== t || n[3] !== o ? (s = t ? (o ?? []).filter(e => b(e) === t) : o ?? [], n[2] = t, n[3] = o, n[4] = s) : s = n[4];
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
    } = fe(l), _;
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
    let x = y,
        S = h ?? !1,
        C = c.length > 0 || v.length > 0,
        w = f && !g && !d,
        T;
    return n[13] !== x || n[14] !== d || n[15] !== m || n[16] !== p || n[17] !== g || n[18] !== i || n[19] !== S || n[20] !== C || n[21] !== w ? (T = {
        environments: x,
        environmentsLoading: d,
        isErrorEnvironments: p,
        fetchNextPage: m,
        hasNextPage: S,
        isFetchingNextPage: g,
        hasKnownEnvironments: C,
        environmentSearchQuery: i,
        isFetchingEnvironments: w
    }, n[13] = x, n[14] = d, n[15] = m, n[16] = p, n[17] = g, n[18] = i, n[19] = S, n[20] = C, n[21] = w, n[22] = T) : T = n[22], T
}

function Lt(e) {
    return e.items
}

function Rt({
    onCreateEnvironment: e,
    showBranchSelector: t = !0,
    allowRepositorySelection: n = !0,
    filters: r = null,
    openEnvironmentInNewWindow: i = !1,
    preserveSelectedEnvironment: a = !1,
    headerContent: o
} = {}) {
    "use no forget";
    let s = re(),
        {
            environmentId: c,
            setEnvironmentId: l,
            selectedRepositoryId: u,
            setSelectedRepositoryId: d,
            setBranch: p,
            setUseRepositoryAsEnvironment: h,
            useRepositoryAsEnvironment: g
        } = z(),
        [_, v] = (0, Z.useState)(!1),
        y = (0, Z.useRef)(null),
        [S, C] = (0, Z.useState)(!1),
        w = (0, Z.useRef)(c),
        [T, E] = (0, Z.useState)(null),
        O = (0, Z.useRef)(0),
        [k, A] = (0, Z.useState)(null);
    !n && (T != null || k != null) && (C(!1), E(null), A(null));
    let [M, ee] = (0, Z.useState)(``), {
        connectorId: N
    } = De(), P = le(M.trim(), 300), {
        data: F,
        isLoading: te,
        isError: ne
    } = ue(P, N, {
        enabled: n && r?.provider !== `gitlab`
    }), {
        environments: I,
        environmentsLoading: L,
        isErrorEnvironments: R,
        fetchNextPage: ie,
        hasNextPage: B,
        isFetchingNextPage: ae,
        hasKnownEnvironments: H,
        environmentSearchQuery: U,
        isFetchingEnvironments: oe
    } = It(P, r?.provider), se = H || B || ae, W = r?.provider === `gitlab` ? `/codex/cloud/settings/environments?provider=gitlab` : `/codex/cloud/settings/environments`, G = (0, Z.useMemo)(() => S && k?.environments.length ? k.environments : r?.repos ? I?.filter(e => de(e.repos, r.repos).length > 0) : I, [I, r, S, k]), K = G?.find(e => e.id === c) ?? k?.environments.find(e => e.id === c), ce = (0, Z.useRef)(void 0);
    (0, Z.useEffect)(() => {
        K && (ce.current = K)
    }, [K]);
    let q = K ?? (a && ce.current?.id === c ? ce.current : void 0),
        J = (0, Z.useCallback)(e => {
            if (!e) return null;
            let t = e.repos ?? Object.keys(e.repo_map ?? {});
            if (!t.length) return null;
            let [n] = t;
            return n ?? null
        }, []);
    $e(`environment`, _, () => v(!1)), (0, Z.useEffect)(() => () => {
        O.current += 1
    }, []), (0, Z.useEffect)(() => {
        w.current !== c && (w.current = c, c != null && (O.current += 1, C(!1), E(null)))
    }, [c]), (0, Z.useEffect)(() => {
        if (!g && !S) {
            E(null);
            return
        }
    }, [g, S]), (0, Z.useEffect)(() => {
        n || (O.current += 1, !(!g && (c || !u)) && (h(!1), d(null), p(null)))
    }, [n, g, c, u, h, d, p]), (0, Z.useEffect)(() => {
        if (S || L || R || U || a) return;
        if (c && !q) {
            if (B) return;
            l(null), d(null);
            return
        } else if (!c && G?.length) {
            let e = x(G, [e => !(e.is_pinned ?? !1), e => -(e.task_count ?? 0)])[0];
            l(e.id, b(e));
            let t = J(e);
            d(t ?? null);
            return
        }
        let e = J(q);
        e != null && e !== u ? d(e) : q && e == null && u != null && d(null)
    }, [L, R, c, q, G, l, u, d, J, S, U, a, B]), (0, Z.useEffect)(() => {
        if (R || S || L || U || se || !F?.repositories.length) return;
        let [e] = F.repositories;
        if (e?.id && n && !c) {
            if (u === e.id && g) {
                T?.id !== e.id && E(e);
                return
            }
            h(!0), d(e.id), E(e), p(null)
        }
    }, [F, R, g, c, u, p, d, h, E, S, L, se, U, T?.id, n]), Re([{
        key: `whamEnvironments`,
        action: () => v(!0),
        actionMessageDescriptor: s.formatMessage({
            id: `wham.keyboardActions.whamEnvironments`,
            defaultMessage: `Environments`
        }),
        group: f.Chat,
        bindings: [{
            binding: [m.Mod, `e`]
        }]
    }]);
    let fe = (0, Z.useCallback)(() => v(!1), []),
        pe = (0, Z.useCallback)(async e => {
            if (!e?.id) return;
            C(!0), l(null), h(!1), d(e.id), E(e), p(null), A({
                status: `loading`,
                environments: []
            });
            let t = ++O.current;
            try {
                let n = await St(e.id, N);
                if (t !== O.current) return;
                if (A({
                        status: `complete`,
                        environments: n
                    }), n.length === 1 && xt(n[0], e.id, N)) {
                    let [e] = n;
                    l(e.id, b(e)), C(!1), fe()
                } else n.length === 0 && (h(!0), fe())
            } catch {
                t === O.current && A({
                    status: `error`,
                    environments: []
                })
            }
        }, [fe, N, p, l, d, h]),
        me = s.formatMessage({
            id: `wham.codexEnvironmentPopover.selectEnvironment`,
            defaultMessage: `Select environment`
        }),
        he = s.formatMessage({
            id: `wham.codexEnvironmentPopover.selectRepository`,
            defaultMessage: `Select repository`
        }),
        ge = s.formatMessage({
            id: `wham.codexEnvironmentPopover.viewAllCodeEnvironments`,
            defaultMessage: `View all code environments`
        }),
        _e = q?.label,
        ve = (_e?.length ?? 0) > 16,
        ye = n && (S || g || !U && !se && !L),
        be = T?.repository_full_name ?? T?.name ?? he,
        xe = be.length > 16,
        Se = ye ? be : _e ?? me,
        Ce = ye ? xe ? be : `` : ve ? _e ?? `` : _e || _ ? `` : ge,
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
        Oe = n && g && T ? T : null,
        ke = t && !!(q || Oe),
        Ae = S && k != null && (k.status !== `complete` || k.environments.length > 0);
    return L && !G?.length && !_ && !S && !U ? (0, Q.jsx)(`div`, {
        className: `flex items-center gap-3 rounded-full`,
        children: (0, Q.jsx)(Mt, {})
    }) : (0, Q.jsxs)(`div`, {
        className: `flex items-center gap-2 rounded-full`,
        children: [(0, Q.jsxs)(V, {
            open: _,
            onOpenChange: v,
            children: [(0, Q.jsx)(Ue, {
                triggerText: Se,
                toolTip: Ce,
                ariaLabel: s.formatMessage({
                    id: `wham.codexEnvironmentPopover.viewAll`,
                    defaultMessage: `View all code environments`
                }),
                Icon: Te
            }), (0, Q.jsx)(je, {
                align: `start`,
                collisionPadding: 12,
                isOpen: _,
                closePopover: fe,
                popoverContentRef: y,
                children: (0, Q.jsx)(zt, {
                    searchTerm: M,
                    setSearchTerm: ee,
                    repositories: F?.repositories ?? [],
                    isLoadingRepositories: te,
                    isErrorRepositories: ne,
                    isLoading: L,
                    isFetchingEnvironments: oe,
                    environments: G ?? [],
                    fetchNextPage: ie,
                    hasNextPage: B,
                    isFetchingNextPage: ae,
                    hasKnownEnvironments: H || G.length > 0,
                    environmentId: c,
                    setEnvironmentId: e => {
                        O.current += 1, C(!1);
                        let t = G?.find(t => t.id === e);
                        l(e, t ? b(t) : null);
                        let n = J(t);
                        d(n ?? null)
                    },
                    closePopover: fe,
                    onSelectRepository: pe,
                    disabledRepositoryIds: Ee,
                    allowRepositorySelection: n,
                    openEnvironmentInNewWindow: i,
                    onCreateEnvironment: e,
                    manageEnvironmentsUrl: W,
                    headerContent: o || Ae ? (0, Q.jsxs)(Q.Fragment, {
                        children: [o, S && k?.status === `loading` && (0, Q.jsx)(`p`, {
                            role: `status`,
                            className: `px-1.5 py-2 text-sm`,
                            children: (0, Q.jsx)(j, {
                                id: `wham.codexEnvironmentPopover.repositoryLookup.loading`,
                                defaultMessage: `Looking for existing environments…`
                            })
                        }), S && k?.status === `error` && (0, Q.jsxs)(`div`, {
                            role: `alert`,
                            className: `px-1.5 py-2 text-sm`,
                            children: [(0, Q.jsx)(j, {
                                id: `wham.codexEnvironmentPopover.repositoryLookup.error`,
                                defaultMessage: `Could not load environments. Your repository is still selected.`
                            }), (0, Q.jsx)(D, {
                                type: `button`,
                                size: `small`,
                                color: `secondary`,
                                onClick: () => {
                                    T && pe(T)
                                },
                                children: (0, Q.jsx)(j, {
                                    id: `wham.codexEnvironmentPopover.repositoryLookup.retry`,
                                    defaultMessage: `Retry`
                                })
                            })]
                        }), S && (k?.environments.length ?? 0) > 0 && (0, Q.jsx)(`p`, {
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
            setSearchTerm: i,
            repositories: a,
            isLoadingRepositories: o,
            isErrorRepositories: s,
            isLoading: c,
            isFetchingEnvironments: l,
            environments: u,
            fetchNextPage: d,
            hasNextPage: f,
            isFetchingNextPage: p,
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
        T = re(),
        E = (0, Z.useRef)(null),
        D;
    t[0] !== _ || t[1] !== g ? (D = e => {
        g(e), _()
    }, t[0] = _, t[1] = g, t[2] = D) : D = t[2];
    let O = D,
        k = M(),
        A = m,
        ee = c && u.length === 0,
        N;
    if (t[3] !== h || t[4] !== u) {
        bb0: {
            let e;t[6] === h ? e = t[7] : (e = e => e.id === h, t[6] = h, t[7] = e);
            let n = u.findIndex(e);
            if (n <= 0) {
                N = u;
                break bb0
            }
            N = [u[n], ...u.slice(0, n), ...u.slice(n + 1)]
        }
        t[3] = h,
        t[4] = u,
        t[5] = N
    }
    else N = t[5];
    let P = N,
        F;
    t[8] !== P || t[9] !== O ? (F = {
        items: P,
        keyExtractor: Ut,
        onSelect: O
    }, t[8] = P, t[9] = O, t[10] = F) : F = t[10];
    let {
        hoveredId: te,
        setHoveredId: ne,
        onKeyDown: I,
        getItemRef: L
    } = it(F), R, ie;
    t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (R = () => {
        E.current?.focus()
    }, ie = [], t[11] = R, t[12] = ie) : (R = t[11], ie = t[12]), (0, Z.useEffect)(R, ie);
    let z;
    t[13] === w ? z = t[14] : (z = w ? (0, Q.jsx)(`div`, {
        className: `bg-primary flex-shrink-0 px-2 pt-2`,
        onClick: Ht,
        onPointerDown: Vt,
        children: w
    }) : null, t[13] = w, t[14] = z);
    let B;
    t[15] === i ? B = t[16] : (B = e => i(e.target.value), t[15] = i, t[16] = B);
    let V;
    t[17] === l ? V = t[18] : (V = l ? (0, Q.jsx)(r, {
        "aria-hidden": !0,
        className: `text-token-text-tertiary absolute end-0 top-1/2 h-3.5 w-3.5 -translate-y-1/2`
    }) : null, t[17] = l, t[18] = V);
    let H;
    t[19] !== b || t[20] !== A || t[21] !== T ? (H = b ? A ? T.formatMessage({
        id: `wham.codexEnvironmentPopover.searchEnvironmentsTooltip.envless`,
        defaultMessage: `Search environments and repos…`
    }) : T.formatMessage({
        id: `wham.codexEnvironmentPopover.searchEnvironmentsTooltip.envlessRepos`,
        defaultMessage: `Search repositories…`
    }) : T.formatMessage({
        id: `wham.codexEnvironmentPopover.searchEnvironmentsTooltip.environmentsOnly`,
        defaultMessage: `Search environments…`
    }), t[19] = b, t[20] = A, t[21] = T, t[22] = H) : H = t[22];
    let U;
    t[23] !== b || t[24] !== T ? (U = b ? T.formatMessage({
        id: `wham.codexEnvironmentPopover.searchEnvironmentsAria.envless`,
        defaultMessage: `Search environments and repos`
    }) : T.formatMessage({
        id: `wham.codexEnvironmentPopover.searchEnvironmentsAria.environmentsOnly`,
        defaultMessage: `Search environments`
    }), t[23] = b, t[24] = T, t[25] = U) : U = t[25];
    let oe;
    t[26] !== I || t[27] !== n || t[28] !== U || t[29] !== B || t[30] !== V || t[31] !== H ? (oe = (0, Q.jsx)(ae, {
        ref: E,
        className: `border-token-border-default bg-primary hover:bg-primary focus-within:bg-primary focus-within:border-heavy mb-2 flex h-8 w-full items-center rounded-lg px-2.5 py-1.5 shadow-none focus-within:ring-0`,
        containerInputClassName: `w-full`,
        inputClassName: `bg-transparent pe-5 text-sm placeholder:text-token-text-tertiary`,
        type: `text`,
        autoComplete: `off`,
        name: `codex-environment-search`,
        value: n,
        onChange: B,
        onKeyDown: I,
        suppressFocus: !0,
        insideContainerChildren: V,
        placeholder: H,
        ariaLabel: U
    }), t[26] = I, t[27] = n, t[28] = U, t[29] = B, t[30] = V, t[31] = H, t[32] = oe) : oe = t[32];
    let se;
    t[33] === Symbol.for(`react.memo_cache_sentinel`) ? (se = (0, Q.jsx)(`div`, {
        className: `bg-token-border-default h-px w-full`
    }), t[33] = se) : se = t[33];
    let W;
    t[34] === oe ? W = t[35] : (W = (0, Q.jsxs)(`div`, {
        className: `bg-primary flex-shrink-0 px-2 pt-2`,
        onPointerDown: Bt,
        children: [oe, se]
    }), t[34] = oe, t[35] = W);
    let G;
    t[36] === A ? G = t[37] : (G = A && (0, Q.jsx)(Ye, {
        as: `div`,
        className: `text-token-text-tertiary pointer-events-none w-full text-sm`,
        label: (0, Q.jsx)(`div`, {
            className: `flex items-center gap-2`,
            children: (0, Q.jsx)(j, {
                id: `wham.codexEnvironmentPopover.envlessModeRepositories`,
                defaultMessage: `Environments`
            })
        })
    }), t[36] = A, t[37] = G);
    let K;
    t[38] === G ? K = t[39] : (K = (0, Q.jsx)(`div`, {
        className: `px-1.5 pt-1.5`,
        children: G
    }), t[38] = G, t[39] = K);
    let ce;
    t[40] !== h || t[41] !== P || t[42] !== L || t[43] !== O || t[44] !== A || t[45] !== te || t[46] !== ee || t[47] !== ne ? (ce = ee ? (0, Q.jsx)(`div`, {
        className: `px-1.5`,
        children: (0, Q.jsx)(`div`, {
            className: `flex w-full items-center justify-center py-2`,
            children: (0, Q.jsx)(r, {
                className: `ms-2`
            })
        })
    }) : A ? P.length > 0 ? (0, Q.jsx)(`div`, {
        className: `px-1.5`,
        children: P.map(e => {
            let t = h === e.id;
            return (0, Q.jsx)(Ye, {
                as: `button`,
                ref: L(e),
                onMouseEnter: () => ne(e.id),
                className: `w-full`,
                truncateLabel: !0,
                onClick: () => {
                    O(e.id)
                },
                isVirtualHover: te === e.id,
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
    }) : null, t[40] = h, t[41] = P, t[42] = L, t[43] = O, t[44] = A, t[45] = te, t[46] = ee, t[47] = ne, t[48] = ce) : ce = t[48];
    let le;
    t[49] !== d || t[50] !== f || t[51] !== p ? (le = (0, Q.jsx)(Wt, {
        hasNextPage: f,
        fetchNextPage: d,
        isFetchingNextPage: p
    }), t[49] = d, t[50] = f, t[51] = p, t[52] = le) : le = t[52];
    let ue;
    t[53] !== b || t[54] !== y || t[55] !== A || t[56] !== s || t[57] !== o || t[58] !== v || t[59] !== a || t[60] !== n ? (ue = b ? (0, Q.jsx)(kt, {
        onSelectRepository: v,
        existingEnvironmentRepositoryIds: y,
        showRepositoriesHeader: A,
        search: n.trim().toLowerCase(),
        repositories: a,
        isLoading: o,
        isError: s
    }) : null, t[53] = b, t[54] = y, t[55] = A, t[56] = s, t[57] = o, t[58] = v, t[59] = a, t[60] = n, t[61] = ue) : ue = t[61];
    let de;
    t[62] !== K || t[63] !== ce || t[64] !== le || t[65] !== ue ? (de = (0, Q.jsxs)(`div`, {
        className: `flex min-h-0 flex-1 flex-col overflow-y-auto`,
        children: [K, ce, le, ue]
    }), t[62] = K, t[63] = ce, t[64] = le, t[65] = ue, t[66] = de) : de = t[66];
    let q;
    t[67] === Symbol.for(`react.memo_cache_sentinel`) ? (q = (0, Q.jsx)(`div`, {
        className: `bg-token-border-default h-px w-full`
    }), t[67] = q) : q = t[67];
    let J;
    t[68] !== _ || t[69] !== A || t[70] !== C || t[71] !== k || t[72] !== S || t[73] !== x ? (J = () => {
        if (x) {
            window.open(C, `_blank`, `noopener,noreferrer`), _();
            return
        }!A && S ? S() : k(C)
    }, t[68] = _, t[69] = A, t[70] = C, t[71] = k, t[72] = S, t[73] = x, t[74] = J) : J = t[74];
    let fe;
    t[75] === Symbol.for(`react.memo_cache_sentinel`) ? (fe = (0, Q.jsx)(be, {
        className: `icon-sm`
    }), t[75] = fe) : fe = t[75];
    let pe;
    t[76] !== A || t[77] !== T ? (pe = A ? T.formatMessage({
        id: `wham.codexEnvironmentPopover.manageEnvironments`,
        defaultMessage: `Manage environments`
    }) : T.formatMessage({
        id: `wham.codexEnvironmentPopover.createEnvironment`,
        defaultMessage: `Create environment`
    }), t[76] = A, t[77] = T, t[78] = pe) : pe = t[78];
    let me;
    t[79] !== J || t[80] !== pe ? (me = (0, Q.jsx)(`div`, {
        className: `flex flex-shrink-0 flex-col gap-1 px-2 py-1.5`,
        children: (0, Q.jsx)(Ye, {
            className: `w-full`,
            noDefaultHoverState: !0,
            onClick: J,
            isSelected: !1,
            icon: fe,
            label: pe
        }, `environment-action`)
    }), t[79] = J, t[80] = pe, t[81] = me) : me = t[81];
    let he;
    return t[82] !== W || t[83] !== de || t[84] !== me || t[85] !== z ? (he = (0, Q.jsxs)(`div`, {
        className: `bg-primary text-token-text-primary flex max-h-[280px] w-80 flex-col overflow-hidden rounded-lg md:max-h-[360px]`,
        children: [z, W, de, q, me]
    }), t[82] = W, t[83] = de, t[84] = me, t[85] = z, t[86] = he) : he = t[86], he
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
            hasNextPage: i,
            fetchNextPage: a
        } = e,
        o;
    t[0] !== a || t[1] !== i || t[2] !== n ? (o = e => {
        if (n || e == null) return;
        let t = new IntersectionObserver(e => {
            e[0].isIntersecting && i && a()
        }, {
            rootMargin: `48px 0px`
        });
        return t.observe(e), () => {
            t.disconnect()
        }
    }, t[0] = a, t[1] = i, t[2] = n, t[3] = o) : o = t[3];
    let s = o;
    if (!i && !n) return null;
    let c;
    return t[4] !== n || t[5] !== s ? (c = (0, Q.jsx)(`div`, {
        className: `bg-primary flex min-h-8 w-full items-center justify-center px-1.5 py-1`,
        children: n ? (0, Q.jsx)(r, {
            "aria-hidden": !0,
            className: `text-token-text-tertiary h-4 w-4`
        }) : (0, Q.jsx)(`div`, {
            ref: s,
            className: `h-px w-full`,
            "data-testid": `environment-infinite-scroll-trigger`
        })
    }), t[4] = n, t[5] = s, t[6] = c) : c = t[6], c
}
var Gt, Z, Q, Kt = e((() => {
    Gt = ne(), l(), Ce(), _e(), oe(), S(), s(), Ne(), Ae(), Je(), _t(), Qe(), jt(), Pt(), nt(), at(), Oe(), ze(), k(), Tt(), W(), I(), U(), J(), B(), w(), Z = t(P()), N(), ee(), Q = A()
}));

function qt(e) {
    "use forget";
    let t = (0, Xt.c)(7),
        n;
    t[0] === e ? n = t[1] : (n = e === void 0 ? {} : e, t[0] = e, t[1] = n);
    let r = n,
        i;
    t[2] === r.allowGitLabEnvironmentSelection ? i = t[3] : (i = r.allowGitLabEnvironmentSelection && h(`1437685011`), t[2] = r.allowGitLabEnvironmentSelection, t[3] = i);
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
            onCreateEnvironment: n,
            showBranchSelector: r,
            filters: i,
            allowRepositorySelection: a,
            openEnvironmentInNewWindow: o
        } = e,
        s = re(),
        c;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (c = {
        redirectAfter: `/codex/cloud`
    }, t[0] = c) : c = t[0];
    let {
        isConnected: l,
        isLoading: u,
        openGithubModal: d,
        error: f,
        refetch: p
    } = De(c), m = Ee();
    if (u) {
        let e;
        return t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, $.jsx)(Mt, {
            className: `h-9`
        }), t[1] = e) : e = t[1], e
    } else if (f) {
        let e;
        t[2] === s ? e = t[3] : (e = s.formatMessage({
            id: `wham.whamComposerEnvironmentsSelector.failedClickToRetry`,
            defaultMessage: `Click to retry`
        }), t[2] = s, t[3] = e);
        let n;
        t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, $.jsxs)(`div`, {
            className: `flex items-center gap-1.5`,
            children: [(0, $.jsx)(Pe, {
                "aria-hidden": !0,
                className: `icon-sm`
            }), (0, $.jsx)(j, {
                id: `wham.environmentsSelector.retry`,
                defaultMessage: `Failed to load environments`
            })]
        }), t[4] = n) : n = t[4];
        let r;
        t[5] === p ? r = t[6] : (r = (0, $.jsx)(D, {
            color: `secondary`,
            type: `button`,
            className: `border-token-border-default flex w-fit items-center gap-1.5 rounded-full! border`,
            onClick: p,
            children: n
        }), t[5] = p, t[6] = r);
        let i;
        return t[7] !== e || t[8] !== r ? (i = (0, $.jsx)(_, {
            label: e,
            children: r
        }), t[7] = e, t[8] = r, t[9] = i) : i = t[9], i
    } else if (!m) {
        let e;
        t[10] === s ? e = t[11] : (e = s.formatMessage({
            id: `wham.whamComposerEnvironmentsSelector.disabledByWorkspaceAdmin`,
            defaultMessage: `Disabled by workspace admin`
        }), t[10] = s, t[11] = e);
        let n, r;
        t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, $.jsx)(Fe, {
            "aria-hidden": !0,
            className: `icon-sm me-1.5`
        }), r = (0, $.jsx)(j, {
            id: `wham.environmentsSelector.connectGithub`,
            defaultMessage: `Connect GitHub`
        }), t[12] = n, t[13] = r) : (n = t[12], r = t[13]);
        let i;
        t[14] === d ? i = t[15] : (i = (0, $.jsxs)(D, {
            type: `button`,
            color: `secondary`,
            onClick: d,
            disabled: !0,
            children: [n, r]
        }), t[14] = d, t[15] = i);
        let a;
        return t[16] !== e || t[17] !== i ? (a = (0, $.jsx)(_, {
            label: e,
            children: i
        }), t[16] = e, t[17] = i, t[18] = a) : a = t[18], a
    }
    let h;
    return t[19] !== a || t[20] !== i || t[21] !== l || t[22] !== n || t[23] !== o || t[24] !== d || t[25] !== r ? (h = (0, $.jsx)($.Fragment, {
        children: (0, $.jsx)(`div`, {
            className: `z-0 flex h-full w-full justify-between`,
            children: l ? (0, $.jsx)(`div`, {
                className: `flex gap-4`,
                children: (0, $.jsx)(Rt, {
                    onCreateEnvironment: n,
                    showBranchSelector: r ?? !0,
                    allowRepositorySelection: a ?? !0,
                    filters: i ?? null,
                    openEnvironmentInNewWindow: o
                })
            }) : (0, $.jsx)(`div`, {
                className: `flex h-full items-center gap-2`,
                children: (0, $.jsxs)(D, {
                    type: `button`,
                    color: `secondary`,
                    size: `small`,
                    onClick: d,
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
    }), t[19] = a, t[20] = i, t[21] = l, t[22] = n, t[23] = o, t[24] = d, t[25] = r, t[26] = h) : h = t[26], h
}

function Yt(e) {
    "use forget";
    let t = (0, Xt.c)(57),
        {
            onCreateEnvironment: n,
            showBranchSelector: r,
            filters: i,
            allowRepositorySelection: a,
            openEnvironmentInNewWindow: o,
            hasSelectedEnvironment: s,
            preserveSelectedEnvironment: c,
            selectedEnvironmentProvider: l
        } = e,
        u = s !== void 0 && s,
        d = c !== void 0 && c,
        f = re(),
        p = M(),
        m;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (m = {
        redirectAfter: `/codex/cloud`
    }, t[0] = m) : m = t[0];
    let {
        isConnected: h,
        isLoading: g,
        openGithubModal: v,
        error: y,
        refetch: b
    } = De(m), x = Ee(), S;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (S = {
        redirectAfter: `/codex/cloud`
    }, t[1] = S) : S = t[1];
    let C = Ie(S),
        [w, T] = (0, Zt.useState)(null),
        E = C.isConnected,
        O = x !== !1 && h,
        k = O || E,
        A = O && E,
        ee = E && !O ? `gitlab` : `github`,
        N = w ?? l,
        P = N ?? ee,
        F = A || l != null && (P === `gitlab` ? O : E),
        te = d && u && l == null && w == null,
        ne = d || u && w != null && l != null && w !== l,
        I;
    t[2] !== P || t[3] !== i || t[4] !== te ? (I = te ? i ?? null : {
        ...i ?? {},
        provider: P
    }, t[2] = P, t[3] = i, t[4] = te, t[5] = I) : I = t[5];
    let L = I,
        R = P === `gitlab` ? E : O,
        ie = P === `gitlab` ? C.isLoading : g,
        z = P === `gitlab` ? C.error : y,
        B = P === `gitlab` ? C.refetch : b,
        V;
    t[6] === P ? V = t[7] : (V = e => {
        e !== P && T(e)
    }, t[6] = P, t[7] = V);
    let ae = V,
        H = !k && N == null;
    if (H && g) {
        let e;
        return t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, $.jsx)(Mt, {
            className: `h-9`
        }), t[8] = e) : e = t[8], e
    }
    if (H && y == null && !x) {
        let e;
        t[9] === f ? e = t[10] : (e = f.formatMessage({
            id: `wham.whamComposerEnvironmentsSelector.disabledByWorkspaceAdmin`,
            defaultMessage: `Disabled by workspace admin`
        }), t[9] = f, t[10] = e);
        let n, r;
        t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, $.jsx)(Fe, {
            "aria-hidden": !0,
            className: `icon-sm me-1.5`
        }), r = (0, $.jsx)(j, {
            id: `wham.environmentsSelector.connectGithub`,
            defaultMessage: `Connect GitHub`
        }), t[11] = n, t[12] = r) : (n = t[11], r = t[12]);
        let i;
        t[13] === v ? i = t[14] : (i = (0, $.jsxs)(D, {
            type: `button`,
            color: `secondary`,
            onClick: v,
            disabled: !0,
            children: [n, r]
        }), t[13] = v, t[14] = i);
        let a;
        return t[15] !== i || t[16] !== e ? (a = (0, $.jsx)(_, {
            label: e,
            children: i
        }), t[15] = i, t[16] = e, t[17] = a) : a = t[17], a
    }
    let U;
    t[18] !== P || t[19] !== p || t[20] !== n ? (U = P === `gitlab` ? () => p(`/codex/cloud/settings/environment/create?provider=gitlab`) : n, t[18] = P, t[19] = p, t[20] = n, t[21] = U) : U = t[21];
    let oe = U,
        se;
    t[22] !== P || t[23] !== C.openConnectorModal || t[24] !== x || t[25] !== v ? (se = P === `gitlab` ? (0, $.jsxs)(D, {
        type: `button`,
        color: `secondary`,
        size: `small`,
        onClick: C.openConnectorModal,
        children: [(0, $.jsx)(Te, {
            "aria-hidden": !0,
            className: `icon-sm me-1.5`
        }), (0, $.jsx)(j, {
            id: `wham.environmentsSelector.connectGitLab.beta`,
            defaultMessage: `Connect GitLab (Beta)`
        })]
    }) : (0, $.jsxs)(D, {
        type: `button`,
        color: `secondary`,
        size: `small`,
        onClick: v,
        disabled: x === !1,
        children: [(0, $.jsx)(Fe, {
            "aria-hidden": !0,
            className: `icon-sm me-1.5`
        }), (0, $.jsx)(j, {
            id: `wham.environmentsSelector.connectGithub`,
            defaultMessage: `Connect GitHub`
        })]
    }), t[22] = P, t[23] = C.openConnectorModal, t[24] = x, t[25] = v, t[26] = se) : se = t[26];
    let W = se,
        G;
    t[27] === f ? G = t[28] : (G = e => (0, $.jsx)(_, {
        label: f.formatMessage({
            id: `wham.whamComposerEnvironmentsSelector.failedClickToRetry`,
            defaultMessage: `Click to retry`
        }),
        children: (0, $.jsx)(D, {
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
    }), t[27] = f, t[28] = G);
    let K = G,
        ce;
    t[29] !== W || t[30] !== y || t[31] !== b || t[32] !== K ? (ce = y ? K(b) : W, t[29] = W, t[30] = y, t[31] = b, t[32] = K, t[33] = ce) : ce = t[33];
    let le = ce,
        ue = R || te,
        de;
    t[34] !== P || t[35] !== ae || t[36] !== F ? (de = F ? (0, $.jsx)(Ve, {
        value: P,
        onChange: ae,
        appearance: `segmented`,
        isCompact: !0
    }) : null, t[34] = P, t[35] = ae, t[36] = F, t[37] = de) : de = t[37];
    let q = de,
        J;
    return t[38] !== W || t[39] !== z || t[40] !== oe || t[41] !== P || t[42] !== a || t[43] !== le || t[44] !== L || t[45] !== k || t[46] !== ie || t[47] !== o || t[48] !== N || t[49] !== q || t[50] !== B || t[51] !== K || t[52] !== ne || t[53] !== ue || t[54] !== r || t[55] !== F ? (J = (0, $.jsx)($.Fragment, {
        children: (0, $.jsx)(`div`, {
            className: `z-0 flex h-full w-full justify-between`,
            children: k || N != null ? (0, $.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [F && !ue && q, !ue && ie ? (0, $.jsx)(Mt, {
                    className: `h-9`
                }) : !ue && z ? K(B) : ue ? (0, $.jsx)(Rt, {
                    onCreateEnvironment: oe,
                    showBranchSelector: r ?? !0,
                    allowRepositorySelection: P === `github` && (a ?? !0),
                    filters: L,
                    openEnvironmentInNewWindow: o,
                    preserveSelectedEnvironment: ne,
                    headerContent: q
                }) : W]
            }) : (0, $.jsx)(`div`, {
                className: `flex h-full items-center gap-2`,
                children: le
            })
        })
    }), t[38] = W, t[39] = z, t[40] = oe, t[41] = P, t[42] = a, t[43] = le, t[44] = L, t[45] = k, t[46] = ie, t[47] = o, t[48] = N, t[49] = q, t[50] = B, t[51] = K, t[52] = ne, t[53] = ue, t[54] = r, t[55] = F, t[56] = J) : J = t[56], J
}
var Xt, Zt, $, Qt = e((() => {
    Xt = ne(), l(), Se(), y(), g(), Me(), Ne(), Be(), Kt(), Pt(), Oe(), Le(), Zt = t(P()), N(), ee(), $ = A()
}));
export {
    wt as a, vt as c, pt as d, _t as f, Je as g, Ue as h, Kt as i, yt as l, Qe as m, Qt as n, Tt as o, Ye as p, Rt as r, Ct as s, qt as t, ot as u
};
//# sourceMappingURL=e7a416e4-kh49v4apq6fd000a.js.map