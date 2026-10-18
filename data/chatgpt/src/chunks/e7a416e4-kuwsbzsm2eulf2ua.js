import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as n,
    HQ as r,
    Jc as i,
    My as a,
    Qit as o,
    UQ as s,
    Yc as c,
    _x as l,
    ax as u,
    b5 as d,
    cx as f,
    dv as p,
    dz as m,
    fz as h,
    gv as g,
    hx as _,
    iat as v,
    jy as y,
    kT as b,
    mx as x,
    mz as S,
    nl as C,
    pnt as w,
    px as T,
    pz as E,
    tl as D,
    y5 as O,
    ynt as k
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as A,
    Bn as j,
    Nn as M,
    Pt as ee,
    Rn as N,
    Vn as P,
    l as F,
    s as te,
    wn as ne,
    zn as re
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Aun as ie,
    Bst as I,
    C0t as L,
    Dun as R,
    Eun as z,
    Gst as B,
    Hln as V,
    IVt as H,
    LVt as U,
    Oun as ae,
    Pln as W,
    Qb as oe,
    T0t as G,
    T6t as K,
    UBt as q,
    Uln as se,
    Ust as ce,
    WBt as le,
    Zb as J,
    b0t as ue,
    cX as de,
    fun as fe,
    kun as pe,
    lX as me,
    zst as he
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    CC as ge,
    SC as _e,
    Xb as ve,
    Yb as ye,
    ix as be,
    rx as xe
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    Bt as Se,
    Ht as Ce,
    Vt as we,
    zt as Te
} from "./c470f5ab-m68dth1hatzjj8yh.js";
import {
    a as Ee,
    i as De,
    n as Oe,
    t as ke
} from "./5f4d7fa0-h884rob3aq4wlepb.js";
import {
    n as Ae,
    t as je
} from "./e8b55dd1-kppmc5q1mw2sht6j.js";
import {
    A as Me,
    F as Ne,
    I as Pe,
    k as Fe
} from "./9e18a103-lu5tm6szxryelo1d.js";
import {
    i as Ie,
    r as Le
} from "./ab92372e-glzrgn0c7jblr8e0.js";
import {
    r as Re,
    t as ze
} from "./0f28d127-g7pcd3sfhh818mzy.js";
import {
    n as Be,
    t as Ve
} from "./3a774aaf-jtilbrgvl6xaoa8n.js";

function He(e) {
    "use forget";
    let t = (0, Ge.c)(13),
        {
            triggerText: n,
            Icon: r,
            truncate: i,
            hideTextOnMobile: a,
            isLoading: o
        } = e,
        s = i === void 0 || i,
        c = a === void 0 || a,
        l = o !== void 0 && o,
        u = c && `hidden sm:block`,
        d = s ? `max-w-[8rem] truncate md:max-w-[10rem]` : `w-fit`,
        f;
    t[0] !== u || t[1] !== d ? (f = O(u, d), t[0] = u, t[1] = d, t[2] = f) : f = t[2];
    let p;
    t[3] !== f || t[4] !== n ? (p = (0, Ke.jsx)(`span`, {
        className: f,
        children: n
    }), t[3] = f, t[4] = n, t[5] = p) : p = t[5];
    let h;
    t[6] === l ? h = t[7] : (h = l && (0, Ke.jsx)(m, {
        "aria-hidden": !0,
        className: `icon-sm`
    }), t[6] = l, t[7] = h);
    let g;
    t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (g = (0, Ke.jsx)(E.ChevronDownSm, {
        "aria-hidden": !0,
        className: `icon-sm`
    }), t[8] = g) : g = t[8];
    let _;
    return t[9] !== r || t[10] !== p || t[11] !== h ? (_ = (0, Ke.jsxs)(`div`, {
        className: `flex max-w-full items-center gap-1.5 ps-1`,
        children: [r, p, h, g]
    }), t[9] = r, t[10] = p, t[11] = h, t[12] = _) : _ = t[12], _
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
    t[0] === f ? p = t[1] : (p = O(qe, f), t[0] = f, t[1] = p);
    let m = d || void 0,
        h = d ? `` : void 0,
        g = d ? -1 : 0,
        _ = d ? We : void 0,
        v;
    t[2] !== a || t[3] !== u || t[4] !== n || t[5] !== l ? (v = (0, Ke.jsx)(He, {
        triggerText: n,
        Icon: a,
        truncate: l,
        isLoading: u
    }), t[2] = a, t[3] = u, t[4] = n, t[5] = l, t[6] = v) : v = t[6];
    let b;
    t[7] !== i || t[8] !== u || t[9] !== v || t[10] !== p || t[11] !== m || t[12] !== h || t[13] !== g || t[14] !== _ ? (b = (0, Ke.jsx)(L, {
        className: p,
        "aria-label": i,
        "aria-busy": u,
        "aria-disabled": m,
        "data-disabled": h,
        tabIndex: g,
        onClick: _,
        children: v
    }), t[7] = i, t[8] = u, t[9] = v, t[10] = p, t[11] = m, t[12] = h, t[13] = g, t[14] = _, t[15] = b) : b = t[15];
    let x;
    return t[16] !== b || t[17] !== r ? (x = (0, Ke.jsx)(y, {
        label: r,
        triggerAs: null,
        children: b
    }), t[16] = b, t[17] = r, t[18] = x) : x = t[18], x
}

function We(e) {
    e.preventDefault(), e.stopPropagation()
}
var Ge, Ke, qe, Je = e((() => {
    Ge = ne(), S(), a(), h(), G(), d(), Ke = j(), qe = `composer-btn px-2 text-sm font-medium`
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
    tooltipLabel: c,
    isSubMenuTrigger: l,
    noDefaultHoverState: u,
    as: d = `button`,
    truncateLabel: f,
    infoIcon: p,
    infoLink: m,
    icon: h,
    ...g
}) {
    let _ = re(),
        v = (0, Y.jsx)(Y.Fragment, {});
    e ? v = (0, Y.jsx)(`div`, {
        className: `flex flex-1 items-center gap-4`,
        children: e
    }) : o && (v = (0, Y.jsxs)(`div`, {
        className: O(`flex items-center gap-3`, f ? `w-0 flex-1` : `w-full`),
        children: [h && ((0, Ze.isValidElement)(h) ? h : (0, Y.jsx)(Xe, {
            icon: h
        })), o && (0, Y.jsx)(`div`, {
            className: O(`flex flex-col items-start py-1`, s && `text-token-text-quaternary pointer-events-none`, f && `w-[100%]`),
            children: (0, Y.jsx)(`div`, {
                className: O(`flex items-center text-start text-sm`, f && `w-full`),
                children: (0, Y.jsx)(`span`, {
                    className: `w-full overflow-hidden text-ellipsis whitespace-nowrap`,
                    children: o
                })
            })
        })]
    }), c && (v = (0, Y.jsx)(y, {
        sideOffset: -10,
        label: c,
        className: `w-full`,
        children: v
    })));
    let b = (0, Y.jsxs)(`div`, {
            className: O(`flex items-center justify-center`, (r || p && m || l) && `min-w-5`),
            children: [r && (0, Y.jsx)(E.CheckSm, {
                className: `icon color:var(--tint-color,#0285FF) icon-sm`,
                "aria-label": _.formatMessage({
                    id: `wham.codexMenuRow.selected`,
                    defaultMessage: `Selected`
                })
            }), p && m && (0, Y.jsx)(`a`, {
                href: m,
                target: `_blank`,
                rel: `noopener noreferrer`,
                children: p
            }), l && (0, Y.jsx)(_e, {
                className: `icon text-token-text-tertiary w-7`,
                "aria-label": _.formatMessage({
                    id: `wham.codexMenuRow.openSubmenu`,
                    defaultMessage: `Open submenu`
                })
            })]
        }),
        x = O(`flex cursor-pointer items-center rounded-[10px] px-2.5 py-1`, (r || p && m || l) && `gap-4`, i && `bg-black/5 dark:bg-white/5`, !u && `hover:bg-black/5 dark:hover:bg-white/5`, a && `bg-black/5 dark:bg-white/5`, t);
    return d === `div` ? (0, Y.jsxs)(`div`, {
        ...g,
        className: x,
        children: [v, b]
    }) : (0, Y.jsxs)(`button`, {
        type: `button`,
        ...g,
        onClick: e => {
            e.persist(), requestAnimationFrame(() => {
                n?.(e)
            })
        },
        className: x,
        children: [v, b]
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
    ge(), S(), a(), d(), Ze = t(P()), N(), Y = j()
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
        u(), l(), U(), rt = t(P()), it = ({
            items: e,
            onSelect: t,
            keyExtractor: n
        }) => {
            let [r, i] = (0, rt.useState)(null), [a] = (0, rt.useState)(new Map);
            return {
                hoveredId: r,
                setHoveredId: i,
                getItemRef: e => t => {
                    let r = n(e);
                    return t && a.set(r, t), () => {
                        a.delete(r)
                    }
                },
                itemRefs: a,
                onKeyDown: o => {
                    let s = T(o, [_.ArrowDown]) || T(o, [_.Control, `n`]),
                        c = T(o, [_.ArrowUp]) || T(o, [_.Control, `p`]);
                    if (!(s || c || f(o))) return;
                    if (o.preventDefault(), f(o)) {
                        r && t(r);
                        return
                    }
                    let l = n(e[H(e.findIndex(e => n(e) === r) - (c ? 1 : -1), 0, e.length - 1)]);
                    a.get(l)?.scrollIntoView({
                        behavior: `instant`,
                        block: `nearest`
                    }), i(l)
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
        } = R(),
        [u, d] = (0, ht.useState)(``),
        [f, p] = (0, ht.useState)(!1),
        m = (0, ht.useRef)(null),
        h;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (h = () => p(!1), t[0] = h) : h = t[0];
    let g = h,
        v = n?.repos?.[0] ?? r?.id ?? null,
        y = (0, ht.useRef)(v),
        b;
    t[1] !== n || t[2] !== r?.default_branch ? (b = n ? pt(n) : r?.default_branch ?? `main`, t[1] = n, t[2] = r?.default_branch, t[3] = b) : b = t[3];
    let S = b,
        C, w;
    t[4] !== c || t[5] !== S || t[6] !== v || t[7] !== l ? (C = () => {
        let e = y.current;
        if (y.current = v, !v) {
            l(null);
            return
        }
        let t = ae(v);
        if (e !== v) {
            if (t) {
                l(t);
                return
            }
            l(S);
            return
        }
        c || l(t ?? S)
    }, w = [c, v, S, l], t[4] = c, t[5] = S, t[6] = v, t[7] = l, t[8] = C, t[9] = w) : (C = t[8], w = t[9]), (0, ht.useEffect)(C, w);
    let T;
    t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (T = () => p(!1), t[10] = T) : T = t[10], $e(`branch`, f, T);
    let E;
    t[11] === o ? E = t[12] : (E = () => {
        o || p(!0)
    }, t[11] = o, t[12] = E);
    let D;
    t[13] === s ? D = t[14] : (D = s.formatMessage({
        id: `wham.keyboardActions.whamBranches`,
        defaultMessage: `Branches`
    }), t[13] = s, t[14] = D);
    let O;
    t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (O = [{
        binding: [_.Mod, `b`]
    }], t[15] = O) : O = t[15];
    let k;
    t[16] !== E || t[17] !== D ? (k = [{
        key: `whamBranches`,
        action: E,
        actionMessageDescriptor: D,
        group: x.Chat,
        bindings: O
    }], t[16] = E, t[17] = D, t[18] = k) : k = t[18], Re(k);
    let A;
    t[19] !== c || t[20] !== s ? (A = c ?? s.formatMessage({
        id: `wham.codexBranchPopover.selectABranch`,
        defaultMessage: `Select a Branch`
    }), t[19] = c, t[20] = s, t[21] = A) : A = t[21];
    let j;
    t[22] !== c || t[23] !== f || t[24] !== o || t[25] !== a || t[26] !== s ? (j = o ? a ?? `` : c === `` || f ? `` : c?.length ? c : s.formatMessage({
        id: `wham.codexBranchPopover.searchForYourBranchTooltip`,
        defaultMessage: `Search for your branch`
    }), t[22] = c, t[23] = f, t[24] = o, t[25] = a, t[26] = s, t[27] = j) : j = t[27];
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
    t[36] !== c || t[37] !== f || t[38] !== o || t[39] !== n?.github_connector_id || t[40] !== S || t[41] !== v || t[42] !== u || t[43] !== l ? (P = o ? null : (0, gt.jsx)(je, {
        align: `start`,
        isOpen: f,
        closePopover: g,
        popoverContentRef: m,
        children: (0, gt.jsx)(st, {
            defaultBranch: S,
            repoId: v,
            githubConnectorId: n?.github_connector_id,
            searchQuery: u,
            setSearchQuery: d,
            setBranch: l,
            selectedBranch: c ?? ``,
            closePopover: g
        })
    }), t[36] = c, t[37] = f, t[38] = o, t[39] = n?.github_connector_id, t[40] = S, t[41] = v, t[42] = u, t[43] = l, t[44] = P) : P = t[44];
    let F;
    return t[45] !== f || t[46] !== N || t[47] !== P ? (F = (0, gt.jsx)(`div`, {
        className: `items-center rounded-full`,
        children: (0, gt.jsxs)(ue, {
            open: f,
            onOpenChange: p,
            children: [N, P]
        })
    }), t[45] = f, t[46] = N, t[47] = P, t[48] = F) : F = t[48], F
}

function st(e) {
    "use forget";
    let t = (0, mt.c)(64),
        {
            repoId: n,
            githubConnectorId: r,
            defaultBranch: a,
            setBranch: o,
            selectedBranch: s,
            searchQuery: c,
            setSearchQuery: l,
            closePopover: u
        } = e,
        d = re(),
        f = (0, ht.useRef)(null),
        p = oe(c, 300),
        m;
    t[0] === n ? m = t[1] : (m = n ? pe(n) : [], t[0] = n, t[1] = m);
    let h = m,
        g;
    t[2] !== p || t[3] !== r || t[4] !== n ? (g = [`searchBranches`, n, r, p], t[2] = p, t[3] = r, t[4] = n, t[5] = g) : g = t[5];
    let _ = !!n,
        v;
    t[6] !== p || t[7] !== r || t[8] !== n ? (v = e => {
        let {
            pageParam: t
        } = e;
        return i.searchBranchesByRepository(n ?? ``, p, 25, t ?? null, r)
    }, t[6] = p, t[7] = r, t[8] = n, t[9] = v) : v = t[9];
    let y;
    t[10] !== g || t[11] !== _ || t[12] !== v ? (y = {
        queryKey: g,
        enabled: _,
        initialPageParam: null,
        queryFn: v,
        getNextPageParam: ft
    }, t[10] = g, t[11] = _, t[12] = v, t[13] = y) : y = t[13];
    let {
        data: b,
        isLoading: x,
        fetchNextPage: S,
        hasNextPage: C,
        isFetchingNextPage: w,
        error: T
    } = F(y), E;
    if (t[14] !== b?.pages || t[15] !== a || t[16] !== h) {
        let e = b?.pages?.flat().map(ut)?.flat() ?? [],
            n = new Set;
        E = [], a && !n.has(a) && (n.add(a), E.push(a));
        for (let e of h) n.has(e) || (n.add(e), E.push(e));
        for (let t of e) n.has(t) || (n.add(t), E.push(t));
        t[14] = b?.pages, t[15] = a, t[16] = h, t[17] = E
    } else E = t[17];
    let D = E,
        O;
    t[18] !== u || t[19] !== o ? (O = e => {
        o(e), u()
    }, t[18] = u, t[19] = o, t[20] = O) : O = t[20];
    let k = O,
        A;
    bb0: {
        if (!c?.trim()) {
            let e;
            t[21] === D ? e = t[22] : (e = D ?? [], t[21] = D, t[22] = e), A = e;
            break bb0
        }
        let e;t[23] !== D || t[24] !== c ? (e = D.filter(e => e.toLowerCase().includes(c.toLowerCase())), t[23] = D, t[24] = c, t[25] = e) : e = t[25],
        A = e
    }
    let j = A,
        ee;
    t[26] !== j || t[27] !== k ? (ee = {
        items: j,
        keyExtractor: lt,
        onSelect: k
    }, t[26] = j, t[27] = k, t[28] = ee) : ee = t[28];
    let {
        hoveredId: N,
        setHoveredId: P,
        onKeyDown: te,
        getItemRef: ne
    } = it(ee), ie, I;
    t[29] === Symbol.for(`react.memo_cache_sentinel`) ? (I = () => {
        f.current && f.current.focus()
    }, ie = [], t[29] = ie, t[30] = I) : (ie = t[29], I = t[30]), (0, ht.useEffect)(I, ie);
    let L;
    t[31] === l ? L = t[32] : (L = e => l(e.target.value), t[31] = l, t[32] = L);
    let R;
    t[33] === d ? R = t[34] : (R = d.formatMessage({
        id: `wham.codexBranchPopover.branch`,
        defaultMessage: `Search branches…`
    }), t[33] = d, t[34] = R);
    let z;
    t[35] === d ? z = t[36] : (z = d.formatMessage({
        id: `wham.codexBranchPopover.createBranchAria`,
        defaultMessage: `Create a new branch`
    }), t[35] = d, t[36] = z);
    let B;
    t[37] !== te || t[38] !== c || t[39] !== L || t[40] !== R || t[41] !== z ? (B = (0, gt.jsx)(he, {
        ref: f,
        className: `placeholder:text-token-text-tertiary !focus-within:ring-0 my-1.5 w-full border-0 bg-transparent ps-4 outline-none focus:border-0 focus:ring-0 focus:outline-none`,
        type: `text`,
        autoComplete: `off`,
        inputClassName: `text-sm`,
        name: `search-branch`,
        value: c,
        suppressFocus: !0,
        onKeyDown: te,
        onChange: L,
        placeholder: R,
        ariaLabel: z
    }), t[37] = te, t[38] = c, t[39] = L, t[40] = R, t[41] = z, t[42] = B) : B = t[42];
    let V;
    t[43] === Symbol.for(`react.memo_cache_sentinel`) ? (V = (0, gt.jsx)(`div`, {
        className: `bg-token-border-default h-px w-full`
    }), t[43] = V) : V = t[43];
    let H;
    t[44] !== j || t[45] !== ne || t[46] !== k || t[47] !== N || t[48] !== s || t[49] !== P ? (H = j?.map(e => {
        let t = e === s;
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
    }), t[44] = j, t[45] = ne, t[46] = k, t[47] = N, t[48] = s, t[49] = P, t[50] = H) : H = t[50];
    let U;
    t[51] === T ? U = t[52] : (U = T ? (0, gt.jsx)(`div`, {
        className: `flex items-center justify-center`,
        children: (0, gt.jsx)(M, {
            id: `wham.branchPopover.error`,
            defaultMessage: `Error loading branches`
        })
    }) : null, t[51] = T, t[52] = U);
    let ae = w || x,
        W;
    t[53] !== S || t[54] !== C || t[55] !== ae ? (W = (0, gt.jsx)(de, {
        bgColor: `dark:bg-token-bg-secondary`,
        hasNextPage: C,
        fetchNextPage: S,
        isFetchingNextPage: ae
    }), t[53] = S, t[54] = C, t[55] = ae, t[56] = W) : W = t[56];
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
    mt = ne(), K(), me(), I(), l(), Me(), Ae(), Je(), Qe(), nt(), at(), ze(), ie(), J(), c(), z(), G(), te(), ht = t(P()), N(), gt = j()
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
    return (await i.getEnvironments()).filter(t => D(t) === `github` && (t.github_connector_id ?? ke) === n && t.repos.some(t => bt(t, e, n)))
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
    v(), Oe(), C(), c(), wt = class extends Error {}
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
    Qe(), Dt = j()
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
    let s = p(`installations/select_target`),
        c = R(e => e.selectedRepositoryId),
        l = R(e => e.useRepositoryAsEnvironment),
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
        d = r.length > 0 ? (0, X.jsx)(M, {
            id: `wham.environmentPopover.noAdditionalRepositoriesMatch`,
            defaultMessage: `No additional repositories match your search`
        }) : e.length > 0 ? (0, X.jsx)(M, {
            id: `wham.environmentPopover.noAdditionalRepositoriesShown`,
            defaultMessage: `No additional repositories shown`
        }) : (0, X.jsx)(M, {
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
                        children: (0, X.jsx)(M, {
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
                children: (0, X.jsx)(m, {
                    className: `ms-2`
                })
            }) : n ? (0, X.jsx)(`div`, {
                className: `p-5 text-center`,
                children: (0, X.jsx)(`p`, {
                    className: `text-token-text-tertiary text-sm`,
                    children: (0, X.jsx)(M, {
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
                icon: (0, X.jsx)(be, {
                    className: `icon-sm inline-block`
                }),
                label: (0, X.jsx)(`div`, {
                    className: `flex items-center gap-2 text-sm`,
                    children: (0, X.jsx)(M, {
                        id: `o1jiyf`,
                        defaultMessage: `Configure Repositories on GitHub`
                    })
                })
            })
        })]
    })
}
var At, X, jt = e((() => {
    xe(), g(), h(), Qe(), Ot(), z(), At = t(P()), N(), X = j()
}));

function Mt({
    className: e
}) {
    return (0, Nt.jsx)(ce, {
        className: O(`flex w-[8rem] items-center gap-1.5 rounded-full! md:w-[10rem]`, e)
    })
}
var Nt, Pt = e((() => {
    B(), d(), Nt = j()
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
        } = fe(),
        s;
    n[2] !== t || n[3] !== o ? (s = t ? (o ?? []).filter(e => D(e) === t) : o ?? [], n[2] = t, n[3] = o, n[4] = s) : s = n[4];
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
    } = V(l), _;
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
    allowRepositorySelection: n = !0,
    filters: r = null,
    openEnvironmentInNewWindow: i = !1,
    preserveSelectedEnvironment: a = !1,
    headerContent: o
} = {}) {
    "use no forget";
    let c = re(),
        {
            environmentId: l,
            setEnvironmentId: u,
            selectedRepositoryId: d,
            setSelectedRepositoryId: f,
            setBranch: p,
            setUseRepositoryAsEnvironment: m,
            useRepositoryAsEnvironment: h
        } = R(),
        [g, v] = (0, Z.useState)(!1),
        y = (0, Z.useRef)(null),
        [S, C] = (0, Z.useState)(!1),
        w = (0, Z.useRef)(l),
        [T, E] = (0, Z.useState)(null),
        O = (0, Z.useRef)(0),
        [k, A] = (0, Z.useState)(null);
    !n && (T != null || k != null) && (C(!1), E(null), A(null));
    let [j, ee] = (0, Z.useState)(``), {
        connectorId: N
    } = De(), P = oe(j.trim(), 300), {
        data: F,
        isLoading: te,
        isError: ne
    } = se(P, N, {
        enabled: n && r?.provider !== `gitlab`
    }), {
        environments: ie,
        environmentsLoading: I,
        isErrorEnvironments: L,
        fetchNextPage: z,
        hasNextPage: B,
        isFetchingNextPage: V,
        hasKnownEnvironments: H,
        environmentSearchQuery: U,
        isFetchingEnvironments: ae
    } = It(P, r?.provider), W = H || B || V, G = r?.provider === `gitlab` ? `/codex/cloud/settings/environments?provider=gitlab` : `/codex/cloud/settings/environments`, K = (0, Z.useMemo)(() => S && k?.environments.length ? k.environments : r?.repos ? ie?.filter(e => le(e.repos, r.repos).length > 0) : ie, [ie, r, S, k]), q = K?.find(e => e.id === l) ?? k?.environments.find(e => e.id === l), ce = (0, Z.useRef)(void 0);
    (0, Z.useEffect)(() => {
        q && (ce.current = q)
    }, [q]);
    let J = q ?? (a && ce.current?.id === l ? ce.current : void 0),
        de = (0, Z.useCallback)(e => {
            if (!e) return null;
            let t = e.repos ?? Object.keys(e.repo_map ?? {});
            if (!t.length) return null;
            let [n] = t;
            return n ?? null
        }, []);
    $e(`environment`, g, () => v(!1)), (0, Z.useEffect)(() => () => {
        O.current += 1
    }, []), (0, Z.useEffect)(() => {
        w.current !== l && (w.current = l, l != null && (O.current += 1, C(!1), E(null)))
    }, [l]), (0, Z.useEffect)(() => {
        if (!h && !S) {
            E(null);
            return
        }
    }, [h, S]), (0, Z.useEffect)(() => {
        n || (O.current += 1, !(!h && (l || !d)) && (m(!1), f(null), p(null)))
    }, [n, h, l, d, m, f, p]), (0, Z.useEffect)(() => {
        if (S || I || L || U || a) return;
        if (l && !J) {
            if (B) return;
            u(null), f(null);
            return
        } else if (!l && K?.length) {
            let e = s(K, [e => !(e.is_pinned ?? !1), e => -(e.task_count ?? 0)])[0];
            u(e.id, D(e));
            let t = de(e);
            f(t ?? null);
            return
        }
        let e = de(J);
        e != null && e !== d ? f(e) : J && e == null && d != null && f(null)
    }, [I, L, l, J, K, u, d, f, de, S, U, a, B]), (0, Z.useEffect)(() => {
        if (L || S || I || U || W || !F?.repositories.length) return;
        let [e] = F.repositories;
        if (e?.id && n && !l) {
            if (d === e.id && h) {
                T?.id !== e.id && E(e);
                return
            }
            m(!0), f(e.id), E(e), p(null)
        }
    }, [F, L, h, l, d, p, f, m, E, S, I, W, U, T?.id, n]), Re([{
        key: `whamEnvironments`,
        action: () => v(!0),
        actionMessageDescriptor: c.formatMessage({
            id: `wham.keyboardActions.whamEnvironments`,
            defaultMessage: `Environments`
        }),
        group: x.Chat,
        bindings: [{
            binding: [_.Mod, `e`]
        }]
    }]);
    let fe = (0, Z.useCallback)(() => v(!1), []),
        pe = (0, Z.useCallback)(async e => {
            if (!e?.id) return;
            C(!0), u(null), m(!1), f(e.id), E(e), p(null), A({
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
                    u(e.id, D(e)), C(!1), fe()
                } else n.length === 0 && (m(!0), fe())
            } catch {
                t === O.current && A({
                    status: `error`,
                    environments: []
                })
            }
        }, [fe, N, p, u, f, m]),
        me = c.formatMessage({
            id: `wham.codexEnvironmentPopover.selectEnvironment`,
            defaultMessage: `Select environment`
        }),
        he = c.formatMessage({
            id: `wham.codexEnvironmentPopover.selectRepository`,
            defaultMessage: `Select repository`
        }),
        ge = c.formatMessage({
            id: `wham.codexEnvironmentPopover.viewAllCodeEnvironments`,
            defaultMessage: `View all code environments`
        }),
        _e = J?.label,
        ve = (_e?.length ?? 0) > 16,
        ye = n && (S || h || !U && !W && !I),
        be = T?.repository_full_name ?? T?.name ?? he,
        xe = be.length > 16,
        Se = ye ? be : _e ?? me,
        Ce = ye ? xe ? be : `` : ve ? _e ?? `` : _e || g ? `` : ge,
        Te = ye ? (0, Q.jsx)(we, {
            "aria-hidden": !0,
            className: `icon-sm`
        }) : (0, Q.jsx)(Pe, {
            "aria-hidden": !0,
            className: `icon-sm`
        }),
        Ee = (0, Z.useMemo)(() => {
            let e = new Set;
            return K?.forEach(t => {
                (t.repos ?? Object.keys(t.repo_map ?? {})).forEach(t => {
                    t && e.add(t)
                })
            }), e
        }, [K]),
        Oe = n && h && T ? T : null,
        ke = t && !!(J || Oe),
        Ae = S && k != null && (k.status !== `complete` || k.environments.length > 0);
    return I && !K?.length && !g && !S && !U ? (0, Q.jsx)(`div`, {
        className: `flex items-center gap-3 rounded-full`,
        children: (0, Q.jsx)(Mt, {})
    }) : (0, Q.jsxs)(`div`, {
        className: `flex items-center gap-2 rounded-full`,
        children: [(0, Q.jsxs)(ue, {
            open: g,
            onOpenChange: v,
            children: [(0, Q.jsx)(Ue, {
                triggerText: Se,
                toolTip: Ce,
                ariaLabel: c.formatMessage({
                    id: `wham.codexEnvironmentPopover.viewAll`,
                    defaultMessage: `View all code environments`
                }),
                Icon: Te
            }), (0, Q.jsx)(je, {
                align: `start`,
                collisionPadding: 12,
                isOpen: g,
                closePopover: fe,
                popoverContentRef: y,
                children: (0, Q.jsx)(zt, {
                    searchTerm: j,
                    setSearchTerm: ee,
                    repositories: F?.repositories ?? [],
                    isLoadingRepositories: te,
                    isErrorRepositories: ne,
                    isLoading: I,
                    isFetchingEnvironments: ae,
                    environments: K ?? [],
                    fetchNextPage: z,
                    hasNextPage: B,
                    isFetchingNextPage: V,
                    hasKnownEnvironments: H || K.length > 0,
                    environmentId: l,
                    setEnvironmentId: e => {
                        O.current += 1, C(!1);
                        let t = K?.find(t => t.id === e);
                        u(e, t ? D(t) : null);
                        let n = de(t);
                        f(n ?? null)
                    },
                    closePopover: fe,
                    onSelectRepository: pe,
                    disabledRepositoryIds: Ee,
                    allowRepositorySelection: n,
                    openEnvironmentInNewWindow: i,
                    onCreateEnvironment: e,
                    manageEnvironmentsUrl: G,
                    headerContent: o || Ae ? (0, Q.jsxs)(Q.Fragment, {
                        children: [o, S && k?.status === `loading` && (0, Q.jsx)(`p`, {
                            role: `status`,
                            className: `px-1.5 py-2 text-sm`,
                            children: (0, Q.jsx)(M, {
                                id: `wham.codexEnvironmentPopover.repositoryLookup.loading`,
                                defaultMessage: `Looking for existing environments…`
                            })
                        }), S && k?.status === `error` && (0, Q.jsxs)(`div`, {
                            role: `alert`,
                            className: `px-1.5 py-2 text-sm`,
                            children: [(0, Q.jsx)(M, {
                                id: `wham.codexEnvironmentPopover.repositoryLookup.error`,
                                defaultMessage: `Could not load environments. Your repository is still selected.`
                            }), (0, Q.jsx)(b, {
                                type: `button`,
                                size: `small`,
                                color: `secondary`,
                                onClick: () => {
                                    T && pe(T)
                                },
                                children: (0, Q.jsx)(M, {
                                    id: `wham.codexEnvironmentPopover.repositoryLookup.retry`,
                                    defaultMessage: `Retry`
                                })
                            })]
                        }), S && (k?.environments.length ?? 0) > 0 && (0, Q.jsx)(`p`, {
                            role: `status`,
                            className: `px-1.5 py-2 text-sm`,
                            children: (0, Q.jsx)(M, {
                                id: `wham.codexEnvironmentPopover.repositoryLookup.choose`,
                                defaultMessage: `Choose an environment for this repository.`
                            })
                        })]
                    }) : void 0
                })
            })]
        }), ke && (0, Q.jsx)(ot, {
            environment: J,
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
            hasKnownEnvironments: p,
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
        k = ee(),
        A = p,
        j = s && l.length === 0,
        N;
    if (t[3] !== h || t[4] !== l) {
        bb0: {
            let e;t[6] === h ? e = t[7] : (e = e => e.id === h, t[6] = h, t[7] = e);
            let n = l.findIndex(e);
            if (n <= 0) {
                N = l;
                break bb0
            }
            N = [l[n], ...l.slice(0, n), ...l.slice(n + 1)]
        }
        t[3] = h,
        t[4] = l,
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
        onKeyDown: ie,
        getItemRef: I
    } = it(F), L, R;
    t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (L = () => {
        E.current?.focus()
    }, R = [], t[11] = L, t[12] = R) : (L = t[11], R = t[12]), (0, Z.useEffect)(L, R);
    let z;
    t[13] === w ? z = t[14] : (z = w ? (0, Q.jsx)(`div`, {
        className: `bg-primary flex-shrink-0 px-2 pt-2`,
        onClick: Ht,
        onPointerDown: Vt,
        children: w
    }) : null, t[13] = w, t[14] = z);
    let B;
    t[15] === r ? B = t[16] : (B = e => r(e.target.value), t[15] = r, t[16] = B);
    let V;
    t[17] === c ? V = t[18] : (V = c ? (0, Q.jsx)(m, {
        "aria-hidden": !0,
        className: `text-token-text-tertiary absolute end-0 top-1/2 h-3.5 w-3.5 -translate-y-1/2`
    }) : null, t[17] = c, t[18] = V);
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
    let ae;
    t[26] !== ie || t[27] !== n || t[28] !== U || t[29] !== B || t[30] !== V || t[31] !== H ? (ae = (0, Q.jsx)(he, {
        ref: E,
        className: `border-token-border-default bg-primary hover:bg-primary focus-within:bg-primary focus-within:border-heavy mb-2 flex h-8 w-full items-center rounded-lg px-2.5 py-1.5 shadow-none focus-within:ring-0`,
        containerInputClassName: `w-full`,
        inputClassName: `bg-transparent pe-5 text-sm placeholder:text-token-text-tertiary`,
        type: `text`,
        autoComplete: `off`,
        name: `codex-environment-search`,
        value: n,
        onChange: B,
        onKeyDown: ie,
        suppressFocus: !0,
        insideContainerChildren: V,
        placeholder: H,
        ariaLabel: U
    }), t[26] = ie, t[27] = n, t[28] = U, t[29] = B, t[30] = V, t[31] = H, t[32] = ae) : ae = t[32];
    let W;
    t[33] === Symbol.for(`react.memo_cache_sentinel`) ? (W = (0, Q.jsx)(`div`, {
        className: `bg-token-border-default h-px w-full`
    }), t[33] = W) : W = t[33];
    let oe;
    t[34] === ae ? oe = t[35] : (oe = (0, Q.jsxs)(`div`, {
        className: `bg-primary flex-shrink-0 px-2 pt-2`,
        onPointerDown: Bt,
        children: [ae, W]
    }), t[34] = ae, t[35] = oe);
    let G;
    t[36] === A ? G = t[37] : (G = A && (0, Q.jsx)(Ye, {
        as: `div`,
        className: `text-token-text-tertiary pointer-events-none w-full text-sm`,
        label: (0, Q.jsx)(`div`, {
            className: `flex items-center gap-2`,
            children: (0, Q.jsx)(M, {
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
    let q;
    t[40] !== h || t[41] !== P || t[42] !== I || t[43] !== O || t[44] !== A || t[45] !== te || t[46] !== j || t[47] !== ne ? (q = j ? (0, Q.jsx)(`div`, {
        className: `px-1.5`,
        children: (0, Q.jsx)(`div`, {
            className: `flex w-full items-center justify-center py-2`,
            children: (0, Q.jsx)(m, {
                className: `ms-2`
            })
        })
    }) : A ? P.length > 0 ? (0, Q.jsx)(`div`, {
        className: `px-1.5`,
        children: P.map(e => {
            let t = h === e.id;
            return (0, Q.jsx)(Ye, {
                as: `button`,
                ref: I(e),
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
            children: (0, Q.jsx)(M, {
                id: `wham.environmentPopover.noMatches`,
                defaultMessage: `No environments found`
            })
        })
    }) : null, t[40] = h, t[41] = P, t[42] = I, t[43] = O, t[44] = A, t[45] = te, t[46] = j, t[47] = ne, t[48] = q) : q = t[48];
    let se;
    t[49] !== u || t[50] !== d || t[51] !== f ? (se = (0, Q.jsx)(Wt, {
        hasNextPage: d,
        fetchNextPage: u,
        isFetchingNextPage: f
    }), t[49] = u, t[50] = d, t[51] = f, t[52] = se) : se = t[52];
    let ce;
    t[53] !== b || t[54] !== y || t[55] !== A || t[56] !== o || t[57] !== a || t[58] !== v || t[59] !== i || t[60] !== n ? (ce = b ? (0, Q.jsx)(kt, {
        onSelectRepository: v,
        existingEnvironmentRepositoryIds: y,
        showRepositoriesHeader: A,
        search: n.trim().toLowerCase(),
        repositories: i,
        isLoading: a,
        isError: o
    }) : null, t[53] = b, t[54] = y, t[55] = A, t[56] = o, t[57] = a, t[58] = v, t[59] = i, t[60] = n, t[61] = ce) : ce = t[61];
    let le;
    t[62] !== K || t[63] !== q || t[64] !== se || t[65] !== ce ? (le = (0, Q.jsxs)(`div`, {
        className: `flex min-h-0 flex-1 flex-col overflow-y-auto`,
        children: [K, q, se, ce]
    }), t[62] = K, t[63] = q, t[64] = se, t[65] = ce, t[66] = le) : le = t[66];
    let J;
    t[67] === Symbol.for(`react.memo_cache_sentinel`) ? (J = (0, Q.jsx)(`div`, {
        className: `bg-token-border-default h-px w-full`
    }), t[67] = J) : J = t[67];
    let ue;
    t[68] !== _ || t[69] !== A || t[70] !== C || t[71] !== k || t[72] !== S || t[73] !== x ? (ue = () => {
        if (x) {
            window.open(C, `_blank`, `noopener,noreferrer`), _();
            return
        }!A && S ? S() : k(C)
    }, t[68] = _, t[69] = A, t[70] = C, t[71] = k, t[72] = S, t[73] = x, t[74] = ue) : ue = t[74];
    let de;
    t[75] === Symbol.for(`react.memo_cache_sentinel`) ? (de = (0, Q.jsx)(ve, {
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
    t[79] !== ue || t[80] !== fe ? (pe = (0, Q.jsx)(`div`, {
        className: `flex flex-shrink-0 flex-col gap-1 px-2 py-1.5`,
        children: (0, Q.jsx)(Ye, {
            className: `w-full`,
            noDefaultHoverState: !0,
            onClick: ue,
            isSelected: !1,
            icon: de,
            label: fe
        }, `environment-action`)
    }), t[79] = ue, t[80] = fe, t[81] = pe) : pe = t[81];
    let me;
    return t[82] !== oe || t[83] !== le || t[84] !== pe || t[85] !== z ? (me = (0, Q.jsxs)(`div`, {
        className: `bg-primary text-token-text-primary flex max-h-[280px] w-80 flex-col overflow-hidden rounded-lg md:max-h-[360px]`,
        children: [z, oe, le, J, pe]
    }), t[82] = oe, t[83] = le, t[84] = pe, t[85] = z, t[86] = me) : me = t[86], me
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
        children: n ? (0, Q.jsx)(m, {
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
    Gt = ne(), n(), Ce(), ye(), I(), h(), l(), Ne(), Ae(), Je(), _t(), Qe(), jt(), Pt(), nt(), at(), Oe(), ze(), C(), Tt(), W(), J(), z(), G(), q(), r(), Z = t(P()), N(), A(), Q = j()
}));

function qt(e) {
    "use forget";
    let t = (0, Xt.c)(7),
        n;
    t[0] === e ? n = t[1] : (n = e === void 0 ? {} : e, t[0] = e, t[1] = n);
    let r = n,
        i;
    t[2] === r.allowGitLabEnvironmentSelection ? i = t[3] : (i = r.allowGitLabEnvironmentSelection && w(`1437685011`), t[2] = r.allowGitLabEnvironmentSelection, t[3] = i);
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
            }), (0, $.jsx)(M, {
                id: `wham.environmentsSelector.retry`,
                defaultMessage: `Failed to load environments`
            })]
        }), t[4] = n) : n = t[4];
        let r;
        t[5] === p ? r = t[6] : (r = (0, $.jsx)(b, {
            color: `secondary`,
            type: `button`,
            className: `border-token-border-default flex w-fit items-center gap-1.5 rounded-full! border`,
            onClick: p,
            children: n
        }), t[5] = p, t[6] = r);
        let i;
        return t[7] !== e || t[8] !== r ? (i = (0, $.jsx)(y, {
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
        }), r = (0, $.jsx)(M, {
            id: `wham.environmentsSelector.connectGithub`,
            defaultMessage: `Connect GitHub`
        }), t[12] = n, t[13] = r) : (n = t[12], r = t[13]);
        let i;
        t[14] === d ? i = t[15] : (i = (0, $.jsxs)(b, {
            type: `button`,
            color: `secondary`,
            onClick: d,
            disabled: !0,
            children: [n, r]
        }), t[14] = d, t[15] = i);
        let a;
        return t[16] !== e || t[17] !== i ? (a = (0, $.jsx)(y, {
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
                children: (0, $.jsxs)(b, {
                    type: `button`,
                    color: `secondary`,
                    size: `small`,
                    onClick: d,
                    children: [(0, $.jsx)(Fe, {
                        "aria-hidden": !0,
                        className: `icon-sm me-1.5`
                    }), (0, $.jsx)(M, {
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
        p = ee(),
        m;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (m = {
        redirectAfter: `/codex/cloud`
    }, t[0] = m) : m = t[0];
    let {
        isConnected: h,
        isLoading: g,
        openGithubModal: _,
        error: v,
        refetch: x
    } = De(m), S = Ee(), C;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (C = {
        redirectAfter: `/codex/cloud`
    }, t[1] = C) : C = t[1];
    let w = Ie(C),
        [T, E] = (0, Zt.useState)(null),
        D = w.isConnected,
        O = S !== !1 && h,
        k = O || D,
        A = O && D,
        j = D && !O ? `gitlab` : `github`,
        N = T ?? l,
        P = N ?? j,
        F = A || l != null && (P === `gitlab` ? O : D),
        te = d && u && l == null && T == null,
        ne = d || u && T != null && l != null && T !== l,
        ie;
    t[2] !== P || t[3] !== i || t[4] !== te ? (ie = te ? i ?? null : {
        ...i ?? {},
        provider: P
    }, t[2] = P, t[3] = i, t[4] = te, t[5] = ie) : ie = t[5];
    let I = ie,
        L = P === `gitlab` ? D : O,
        R = P === `gitlab` ? w.isLoading : g,
        z = P === `gitlab` ? w.error : v,
        B = P === `gitlab` ? w.refetch : x,
        V;
    t[6] === P ? V = t[7] : (V = e => {
        e !== P && E(e)
    }, t[6] = P, t[7] = V);
    let H = V,
        U = !k && N == null;
    if (U && g) {
        let e;
        return t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, $.jsx)(Mt, {
            className: `h-9`
        }), t[8] = e) : e = t[8], e
    }
    if (U && v == null && !S) {
        let e;
        t[9] === f ? e = t[10] : (e = f.formatMessage({
            id: `wham.whamComposerEnvironmentsSelector.disabledByWorkspaceAdmin`,
            defaultMessage: `Disabled by workspace admin`
        }), t[9] = f, t[10] = e);
        let n, r;
        t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, $.jsx)(Fe, {
            "aria-hidden": !0,
            className: `icon-sm me-1.5`
        }), r = (0, $.jsx)(M, {
            id: `wham.environmentsSelector.connectGithub`,
            defaultMessage: `Connect GitHub`
        }), t[11] = n, t[12] = r) : (n = t[11], r = t[12]);
        let i;
        t[13] === _ ? i = t[14] : (i = (0, $.jsxs)(b, {
            type: `button`,
            color: `secondary`,
            onClick: _,
            disabled: !0,
            children: [n, r]
        }), t[13] = _, t[14] = i);
        let a;
        return t[15] !== i || t[16] !== e ? (a = (0, $.jsx)(y, {
            label: e,
            children: i
        }), t[15] = i, t[16] = e, t[17] = a) : a = t[17], a
    }
    let ae;
    t[18] !== P || t[19] !== p || t[20] !== n ? (ae = P === `gitlab` ? () => p(`/codex/cloud/settings/environment/create?provider=gitlab`) : n, t[18] = P, t[19] = p, t[20] = n, t[21] = ae) : ae = t[21];
    let W = ae,
        oe;
    t[22] !== P || t[23] !== w.openConnectorModal || t[24] !== S || t[25] !== _ ? (oe = P === `gitlab` ? (0, $.jsxs)(b, {
        type: `button`,
        color: `secondary`,
        size: `small`,
        onClick: w.openConnectorModal,
        children: [(0, $.jsx)(Te, {
            "aria-hidden": !0,
            className: `icon-sm me-1.5`
        }), (0, $.jsx)(M, {
            id: `wham.environmentsSelector.connectGitLab.beta`,
            defaultMessage: `Connect GitLab (Beta)`
        })]
    }) : (0, $.jsxs)(b, {
        type: `button`,
        color: `secondary`,
        size: `small`,
        onClick: _,
        disabled: S === !1,
        children: [(0, $.jsx)(Fe, {
            "aria-hidden": !0,
            className: `icon-sm me-1.5`
        }), (0, $.jsx)(M, {
            id: `wham.environmentsSelector.connectGithub`,
            defaultMessage: `Connect GitHub`
        })]
    }), t[22] = P, t[23] = w.openConnectorModal, t[24] = S, t[25] = _, t[26] = oe) : oe = t[26];
    let G = oe,
        K;
    t[27] === f ? K = t[28] : (K = e => (0, $.jsx)(y, {
        label: f.formatMessage({
            id: `wham.whamComposerEnvironmentsSelector.failedClickToRetry`,
            defaultMessage: `Click to retry`
        }),
        children: (0, $.jsx)(b, {
            color: `secondary`,
            type: `button`,
            className: `border-token-border-default flex w-fit items-center gap-1.5 rounded-full! border`,
            onClick: e,
            children: (0, $.jsxs)(`div`, {
                className: `flex items-center gap-1.5`,
                children: [(0, $.jsx)(Pe, {
                    "aria-hidden": !0,
                    className: `icon-sm`
                }), (0, $.jsx)(M, {
                    id: `wham.environmentsSelector.retry`,
                    defaultMessage: `Failed to load environments`
                })]
            })
        })
    }), t[27] = f, t[28] = K);
    let q = K,
        se;
    t[29] !== G || t[30] !== v || t[31] !== x || t[32] !== q ? (se = v ? q(x) : G, t[29] = G, t[30] = v, t[31] = x, t[32] = q, t[33] = se) : se = t[33];
    let ce = se,
        le = L || te,
        J;
    t[34] !== P || t[35] !== H || t[36] !== F ? (J = F ? (0, $.jsx)(Ve, {
        value: P,
        onChange: H,
        appearance: `segmented`,
        isCompact: !0
    }) : null, t[34] = P, t[35] = H, t[36] = F, t[37] = J) : J = t[37];
    let ue = J,
        de;
    return t[38] !== G || t[39] !== z || t[40] !== W || t[41] !== P || t[42] !== a || t[43] !== ce || t[44] !== I || t[45] !== k || t[46] !== R || t[47] !== o || t[48] !== N || t[49] !== ue || t[50] !== B || t[51] !== q || t[52] !== ne || t[53] !== le || t[54] !== r || t[55] !== F ? (de = (0, $.jsx)($.Fragment, {
        children: (0, $.jsx)(`div`, {
            className: `z-0 flex h-full w-full justify-between`,
            children: k || N != null ? (0, $.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [F && !le && ue, !le && R ? (0, $.jsx)(Mt, {
                    className: `h-9`
                }) : !le && z ? q(B) : le ? (0, $.jsx)(Rt, {
                    onCreateEnvironment: W,
                    showBranchSelector: r ?? !0,
                    allowRepositorySelection: P === `github` && (a ?? !0),
                    filters: I,
                    openEnvironmentInNewWindow: o,
                    preserveSelectedEnvironment: ne,
                    headerContent: ue
                }) : G]
            }) : (0, $.jsx)(`div`, {
                className: `flex h-full items-center gap-2`,
                children: ce
            })
        })
    }), t[38] = G, t[39] = z, t[40] = W, t[41] = P, t[42] = a, t[43] = ce, t[44] = I, t[45] = k, t[46] = R, t[47] = o, t[48] = N, t[49] = ue, t[50] = B, t[51] = q, t[52] = ne, t[53] = le, t[54] = r, t[55] = F, t[56] = de) : de = t[56], de
}
var Xt, Zt, $, Qt = e((() => {
    Xt = ne(), n(), Se(), a(), k(), Me(), Ne(), Be(), Kt(), Pt(), Oe(), Le(), Zt = t(P()), N(), A(), $ = j()
}));
export {
    wt as a, vt as c, pt as d, _t as f, Je as g, Ue as h, Kt as i, yt as l, Qe as m, Qt as n, Tt as o, Ye as p, Rt as r, Ct as s, qt as t, ot as u
};
//# sourceMappingURL=e7a416e4-kuwsbzsm2eulf2ua.js.map