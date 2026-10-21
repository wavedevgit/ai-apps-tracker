import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Av as n,
    Bat as r,
    Dx as i,
    Fv as a,
    Ix as o,
    JT as s,
    Mx as c,
    Mz as l,
    Nx as u,
    Nz as d,
    Pat as f,
    Px as p,
    Pz as m,
    X5 as h,
    Xy as g,
    Y5 as _,
    YT as v,
    Ynt as y,
    Zy as b,
    bl as x,
    g$ as S,
    h$ as C,
    jz as w,
    ml as T,
    pl as E,
    trt as D,
    wx as O,
    xl as k
} from "./4813494d-lxa3wniynbx9ka2a.js";
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
    Aun as ie,
    Gun as ae,
    HVt as I,
    Jun as L,
    Kst as oe,
    Kun as R,
    Qln as z,
    Qst as B,
    UVt as V,
    Wun as H,
    XBt as se,
    Xst as U,
    YBt as W,
    b6t as G,
    ex as K,
    i5t as ce,
    mX as q,
    o5t as J,
    oun as le,
    pX as ue,
    qst as de,
    qun as fe,
    sun as pe,
    t5t as me,
    tx as he
} from "./conversation-small-kzsalymynzuddxee.js";
import {
    CC as ge,
    Kb as _e,
    SC as ve,
    ex as ye,
    qb as be,
    tx as xe
} from "./30901919-i8ip8r0znvgcym38.js";
import {
    Bt as Se,
    Ht as Ce,
    Vt as we,
    zt as Te
} from "./c470f5ab-poh7ivjvb3j2jlfz.js";
import {
    a as Ee,
    i as De,
    n as Oe,
    t as ke
} from "./5f4d7fa0-iup2y8safm6e3rns.js";
import {
    n as Ae,
    t as je
} from "./e8b55dd1-o7aoh2qmdluj0b7k.js";
import {
    A as Me,
    F as Ne,
    I as Pe,
    k as Fe
} from "./9e18a103-jtuicgh1jg6dzyxh.js";
import {
    i as Ie,
    r as Le
} from "./ab92372e-hjdw4ozpna7s95h0.js";
import {
    r as Re,
    t as ze
} from "./0f28d127-nerckj7ev4uundx3.js";
import {
    n as Be,
    t as Ve
} from "./3a774aaf-dgl55v5x565r14mh.js";

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
        f = s ? `max-w-[8rem] truncate md:max-w-[10rem]` : `w-fit`,
        p;
    t[0] !== u || t[1] !== f ? (p = _(u, f), t[0] = u, t[1] = f, t[2] = p) : p = t[2];
    let m;
    t[3] !== p || t[4] !== n ? (m = (0, Ke.jsx)(`span`, {
        className: p,
        children: n
    }), t[3] = p, t[4] = n, t[5] = m) : m = t[5];
    let h;
    t[6] === l ? h = t[7] : (h = l && (0, Ke.jsx)(w, {
        "aria-hidden": !0,
        className: `icon-sm`
    }), t[6] = l, t[7] = h);
    let g;
    t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (g = (0, Ke.jsx)(d.ChevronDownSm, {
        "aria-hidden": !0,
        className: `icon-sm`
    }), t[8] = g) : g = t[8];
    let v;
    return t[9] !== r || t[10] !== m || t[11] !== h ? (v = (0, Ke.jsxs)(`div`, {
        className: `flex max-w-full items-center gap-1.5 ps-1`,
        children: [r, m, h, g]
    }), t[9] = r, t[10] = m, t[11] = h, t[12] = v) : v = t[12], v
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
    t[0] === f ? p = t[1] : (p = _(qe, f), t[0] = f, t[1] = p);
    let m = d || void 0,
        h = d ? `` : void 0,
        v = d ? -1 : 0,
        y = d ? We : void 0,
        b;
    t[2] !== a || t[3] !== u || t[4] !== n || t[5] !== l ? (b = (0, Ke.jsx)(He, {
        triggerText: n,
        Icon: a,
        truncate: l,
        isLoading: u
    }), t[2] = a, t[3] = u, t[4] = n, t[5] = l, t[6] = b) : b = t[6];
    let x;
    t[7] !== i || t[8] !== u || t[9] !== b || t[10] !== p || t[11] !== m || t[12] !== h || t[13] !== v || t[14] !== y ? (x = (0, Ke.jsx)(ce, {
        className: p,
        "aria-label": i,
        "aria-busy": u,
        "aria-disabled": m,
        "data-disabled": h,
        tabIndex: v,
        onClick: y,
        children: b
    }), t[7] = i, t[8] = u, t[9] = b, t[10] = p, t[11] = m, t[12] = h, t[13] = v, t[14] = y, t[15] = x) : x = t[15];
    let S;
    return t[16] !== x || t[17] !== r ? (S = (0, Ke.jsx)(g, {
        label: r,
        triggerAs: null,
        children: x
    }), t[16] = x, t[17] = r, t[18] = S) : S = t[18], S
}

function We(e) {
    e.preventDefault(), e.stopPropagation()
}
var Ge, Ke, qe, Je = e((() => {
    Ge = ne(), m(), b(), l(), J(), h(), Ke = A(), qe = `composer-btn px-2 text-sm font-medium`
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
    as: f = `button`,
    truncateLabel: p,
    infoIcon: m,
    infoLink: h,
    icon: v,
    ...y
}) {
    let b = re(),
        x = (0, Y.jsx)(Y.Fragment, {});
    e ? x = (0, Y.jsx)(`div`, {
        className: `flex flex-1 items-center gap-4`,
        children: e
    }) : o && (x = (0, Y.jsxs)(`div`, {
        className: _(`flex items-center gap-3`, p ? `w-0 flex-1` : `w-full`),
        children: [v && ((0, Ze.isValidElement)(v) ? v : (0, Y.jsx)(Xe, {
            icon: v
        })), o && (0, Y.jsx)(`div`, {
            className: _(`flex flex-col items-start py-1`, s && `text-token-text-quaternary pointer-events-none`, p && `w-[100%]`),
            children: (0, Y.jsx)(`div`, {
                className: _(`flex items-center text-start text-sm`, p && `w-full`),
                children: (0, Y.jsx)(`span`, {
                    className: `w-full overflow-hidden text-ellipsis whitespace-nowrap`,
                    children: o
                })
            })
        })]
    }), c && (x = (0, Y.jsx)(g, {
        sideOffset: -10,
        label: c,
        className: `w-full`,
        children: x
    })));
    let S = (0, Y.jsxs)(`div`, {
            className: _(`flex items-center justify-center`, (r || m && h || l) && `min-w-5`),
            children: [r && (0, Y.jsx)(d.CheckSm, {
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
            }), l && (0, Y.jsx)(ve, {
                className: `icon text-token-text-tertiary w-7`,
                "aria-label": b.formatMessage({
                    id: `wham.codexMenuRow.openSubmenu`,
                    defaultMessage: `Open submenu`
                })
            })]
        }),
        C = _(`flex cursor-pointer items-center rounded-[10px] px-2.5 py-1`, (r || m && h || l) && `gap-4`, i && `bg-black/5 dark:bg-white/5`, !u && `hover:bg-black/5 dark:hover:bg-white/5`, a && `bg-black/5 dark:bg-white/5`, t);
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
    ge(), m(), b(), h(), Ze = t(P()), N(), Y = A()
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
        O(), o(), V(), rt = t(P()), it = ({
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
                    let l = c(s, [p.ArrowDown]) || c(s, [p.Control, `n`]),
                        u = c(s, [p.ArrowUp]) || c(s, [p.Control, `p`]);
                    if (!(l || u || i(s))) return;
                    if (s.preventDefault(), i(s)) {
                        r && t(r);
                        return
                    }
                    let d = n(e[I(e.findIndex(e => n(e) === r) - (u ? 1 : -1), 0, e.length - 1)]);
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
        } = ae(),
        [d, f] = (0, ht.useState)(``),
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
    t[4] !== c || t[5] !== S || t[6] !== y || t[7] !== l ? (C = () => {
        let e = b.current;
        if (b.current = y, !y) {
            l(null);
            return
        }
        let t = R(y);
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
    t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (T = () => h(!1), t[10] = T) : T = t[10], $e(`branch`, m, T);
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
        binding: [p.Mod, `b`]
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
    t[19] !== c || t[20] !== s ? (A = c ?? s.formatMessage({
        id: `wham.codexBranchPopover.selectABranch`,
        defaultMessage: `Select a Branch`
    }), t[19] = c, t[20] = s, t[21] = A) : A = t[21];
    let j;
    t[22] !== c || t[23] !== m || t[24] !== o || t[25] !== a || t[26] !== s ? (j = o ? a ?? `` : c === `` || m ? `` : c?.length ? c : s.formatMessage({
        id: `wham.codexBranchPopover.searchForYourBranchTooltip`,
        defaultMessage: `Search for your branch`
    }), t[22] = c, t[23] = m, t[24] = o, t[25] = a, t[26] = s, t[27] = j) : j = t[27];
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
    t[36] !== c || t[37] !== m || t[38] !== o || t[39] !== n?.github_connector_id || t[40] !== S || t[41] !== y || t[42] !== d || t[43] !== l ? (P = o ? null : (0, gt.jsx)(je, {
        align: `start`,
        isOpen: m,
        closePopover: v,
        popoverContentRef: g,
        children: (0, gt.jsx)(st, {
            defaultBranch: S,
            repoId: y,
            githubConnectorId: n?.github_connector_id,
            searchQuery: d,
            setSearchQuery: f,
            setBranch: l,
            selectedBranch: c ?? ``,
            closePopover: v
        })
    }), t[36] = c, t[37] = m, t[38] = o, t[39] = n?.github_connector_id, t[40] = S, t[41] = y, t[42] = d, t[43] = l, t[44] = P) : P = t[44];
    let F;
    return t[45] !== m || t[46] !== N || t[47] !== P ? (F = (0, gt.jsx)(`div`, {
        className: `items-center rounded-full`,
        children: (0, gt.jsxs)(me, {
            open: m,
            onOpenChange: h,
            children: [N, P]
        })
    }), t[45] = m, t[46] = N, t[47] = P, t[48] = F) : F = t[48], F
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
        f = he(s, 300),
        p;
    t[0] === n ? p = t[1] : (p = n ? fe(n) : [], t[0] = n, t[1] = p);
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
    } = it(ee), ie, ae;
    t[29] === Symbol.for(`react.memo_cache_sentinel`) ? (ae = () => {
        d.current && d.current.focus()
    }, ie = [], t[29] = ie, t[30] = ae) : (ie = t[29], ae = t[30]), (0, ht.useEffect)(ae, ie);
    let I;
    t[31] === c ? I = t[32] : (I = e => c(e.target.value), t[31] = c, t[32] = I);
    let L;
    t[33] === u ? L = t[34] : (L = u.formatMessage({
        id: `wham.codexBranchPopover.branch`,
        defaultMessage: `Search branches…`
    }), t[33] = u, t[34] = L);
    let R;
    t[35] === u ? R = t[36] : (R = u.formatMessage({
        id: `wham.codexBranchPopover.createBranchAria`,
        defaultMessage: `Create a new branch`
    }), t[35] = u, t[36] = R);
    let z;
    t[37] !== te || t[38] !== s || t[39] !== I || t[40] !== L || t[41] !== R ? (z = (0, gt.jsx)(oe, {
        ref: d,
        className: `placeholder:text-token-text-tertiary !focus-within:ring-0 my-1.5 w-full border-0 bg-transparent ps-4 outline-none focus:border-0 focus:ring-0 focus:outline-none`,
        type: `text`,
        autoComplete: `off`,
        inputClassName: `text-sm`,
        name: `search-branch`,
        value: s,
        suppressFocus: !0,
        onKeyDown: te,
        onChange: I,
        placeholder: L,
        ariaLabel: R
    }), t[37] = te, t[38] = s, t[39] = I, t[40] = L, t[41] = R, t[42] = z) : z = t[42];
    let B;
    t[43] === Symbol.for(`react.memo_cache_sentinel`) ? (B = (0, gt.jsx)(`div`, {
        className: `bg-token-border-default h-px w-full`
    }), t[43] = B) : B = t[43];
    let V;
    t[44] !== M || t[45] !== ne || t[46] !== k || t[47] !== N || t[48] !== o || t[49] !== P ? (V = M?.map(e => {
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
    }), t[44] = M, t[45] = ne, t[46] = k, t[47] = N, t[48] = o, t[49] = P, t[50] = V) : V = t[50];
    let H;
    t[51] === w ? H = t[52] : (H = w ? (0, gt.jsx)(`div`, {
        className: `flex items-center justify-center`,
        children: (0, gt.jsx)(j, {
            id: `wham.branchPopover.error`,
            defaultMessage: `Error loading branches`
        })
    }) : null, t[51] = w, t[52] = H);
    let se = C || b,
        U;
    t[53] !== x || t[54] !== S || t[55] !== se ? (U = (0, gt.jsx)(ue, {
        bgColor: `dark:bg-token-bg-secondary`,
        hasNextPage: S,
        fetchNextPage: x,
        isFetchingNextPage: se
    }), t[53] = x, t[54] = S, t[55] = se, t[56] = U) : U = t[56];
    let W;
    t[57] !== V || t[58] !== H || t[59] !== U ? (W = (0, gt.jsxs)(`div`, {
        className: `min-h-18 w-full overflow-y-auto p-1.5`,
        children: [V, H, U]
    }), t[57] = V, t[58] = H, t[59] = U, t[60] = W) : W = t[60];
    let G;
    return t[61] !== z || t[62] !== W ? (G = (0, gt.jsxs)(`div`, {
        className: `gap flex max-h-[280px] w-90 flex-col rounded-lg p-0 md:max-h-[360px]`,
        onClick: ct,
        children: [z, B, W]
    }), t[61] = z, t[62] = W, t[63] = G) : G = t[63], G
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
    mt = ne(), G(), q(), de(), o(), Me(), Ae(), Je(), Qe(), nt(), at(), ze(), L(), K(), T(), H(), J(), te(), ht = t(P()), N(), gt = A()
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
    return (await E.getEnvironments()).filter(t => x(t) === `github` && (t.github_connector_id ?? ke) === n && t.repos.some(t => bt(t, e, n)))
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
        if (e instanceof f && e.status === 400 && e.message === `Environment with this label already exists`) {
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
    r(), Oe(), k(), T(), wt = class extends Error {}
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
    isError: r,
    search: i,
    onSelectRepository: a,
    existingEnvironmentRepositoryIds: o,
    showRepositoriesHeader: s
}) {
    "use no forget";
    let c = n(`installations/select_target`),
        l = ae(e => e.selectedRepositoryId),
        u = ae(e => e.useRepositoryAsEnvironment),
        d = (0, At.useMemo)(() => e.length ? e.filter(e => {
            if (!e.id || o.has(e.id)) return !1;
            if (!i) return !0;
            let t = (e.repository_full_name ?? e.name ?? ``).toLowerCase(),
                n = e.owner?.login?.toLowerCase() ?? ``;
            return t.includes(i) || n.includes(i)
        }).sort((e, t) => {
            let n = e.repository_full_name ?? e.name ?? ``,
                r = t.repository_full_name ?? t.name ?? ``;
            return n.localeCompare(r)
        }) : [], [o, i, e]),
        f = i.length > 0 ? (0, X.jsx)(j, {
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
        children: [s && (0, X.jsxs)(X.Fragment, {
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
                children: (0, X.jsx)(w, {
                    className: `ms-2`
                })
            }) : r ? (0, X.jsx)(`div`, {
                className: `p-5 text-center`,
                children: (0, X.jsx)(`p`, {
                    className: `text-token-text-tertiary text-sm`,
                    children: (0, X.jsx)(j, {
                        id: `wham.codexEnvironmentPopover.repositoriesWithoutEnvironmentsError`,
                        defaultMessage: `Failed to load repositories`
                    })
                })
            }) : d.length === 0 ? (0, X.jsx)(`div`, {
                className: `p-5 text-center`,
                children: (0, X.jsx)(`p`, {
                    className: `text-token-text-tertiary text-sm`,
                    children: f
                })
            }) : d.map(e => (0, X.jsx)(Et, {
                repository: e,
                isSelected: u && l === e.id,
                onSelect: a
            }, e.id))
        }), (0, X.jsx)(`div`, {
            className: `bg-token-border-default mt-1 h-px w-full`
        }), (0, X.jsx)(`div`, {
            className: `px-1.5 pb-1.5`,
            children: (0, X.jsx)(Ye, {
                as: `button`,
                className: `mt-1 w-full`,
                onClick: () => {
                    window.open(c, `_blank`)
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
    ye(), a(), l(), Qe(), Ot(), H(), At = t(P()), N(), X = A()
}));

function Mt({
    className: e
}) {
    return (0, Nt.jsx)(U, {
        className: _(`flex w-[8rem] items-center gap-1.5 rounded-full! md:w-[10rem]`, e)
    })
}
var Nt, Pt = e((() => {
    B(), h(), Nt = A()
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
        } = ie(),
        s;
    n[2] !== t || n[3] !== o ? (s = t ? (o ?? []).filter(e => x(e) === t) : o ?? [], n[2] = t, n[3] = o, n[4] = s) : s = n[4];
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
    } = le(l), _;
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
        S = h ?? !1,
        C = c.length > 0 || v.length > 0,
        w = f && !g && !d,
        T;
    return n[13] !== b || n[14] !== d || n[15] !== m || n[16] !== p || n[17] !== g || n[18] !== i || n[19] !== S || n[20] !== C || n[21] !== w ? (T = {
        environments: b,
        environmentsLoading: d,
        isErrorEnvironments: p,
        fetchNextPage: m,
        hasNextPage: S,
        isFetchingNextPage: g,
        hasKnownEnvironments: C,
        environmentSearchQuery: i,
        isFetchingEnvironments: w
    }, n[13] = b, n[14] = d, n[15] = m, n[16] = p, n[17] = g, n[18] = i, n[19] = S, n[20] = C, n[21] = w, n[22] = T) : T = n[22], T
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
            setEnvironmentId: d,
            selectedRepositoryId: f,
            setSelectedRepositoryId: m,
            setBranch: h,
            setUseRepositoryAsEnvironment: g,
            useRepositoryAsEnvironment: _
        } = ae(),
        [v, y] = (0, Z.useState)(!1),
        b = (0, Z.useRef)(null),
        [C, w] = (0, Z.useState)(!1),
        T = (0, Z.useRef)(l),
        [E, D] = (0, Z.useState)(null),
        O = (0, Z.useRef)(0),
        [k, A] = (0, Z.useState)(null);
    !n && (E != null || k != null) && (w(!1), D(null), A(null));
    let [M, ee] = (0, Z.useState)(``), {
        connectorId: N
    } = De(), P = he(M.trim(), 300), {
        data: F,
        isLoading: te,
        isError: ne
    } = pe(P, N, {
        enabled: n && r?.provider !== `gitlab`
    }), {
        environments: ie,
        environmentsLoading: I,
        isErrorEnvironments: L,
        fetchNextPage: oe,
        hasNextPage: R,
        isFetchingNextPage: z,
        hasKnownEnvironments: B,
        environmentSearchQuery: V,
        isFetchingEnvironments: H
    } = It(P, r?.provider), U = B || R || z, W = r?.provider === `gitlab` ? `/codex/cloud/settings/environments?provider=gitlab` : `/codex/cloud/settings/environments`, G = (0, Z.useMemo)(() => C && k?.environments.length ? k.environments : r?.repos ? ie?.filter(e => se(e.repos, r.repos).length > 0) : ie, [ie, r, C, k]), K = G?.find(e => e.id === l) ?? k?.environments.find(e => e.id === l), ce = (0, Z.useRef)(void 0);
    (0, Z.useEffect)(() => {
        K && (ce.current = K)
    }, [K]);
    let q = K ?? (a && ce.current?.id === l ? ce.current : void 0),
        J = (0, Z.useCallback)(e => {
            if (!e) return null;
            let t = e.repos ?? Object.keys(e.repo_map ?? {});
            if (!t.length) return null;
            let [n] = t;
            return n ?? null
        }, []);
    $e(`environment`, v, () => y(!1)), (0, Z.useEffect)(() => () => {
        O.current += 1
    }, []), (0, Z.useEffect)(() => {
        T.current !== l && (T.current = l, l != null && (O.current += 1, w(!1), D(null)))
    }, [l]), (0, Z.useEffect)(() => {
        if (!_ && !C) {
            D(null);
            return
        }
    }, [_, C]), (0, Z.useEffect)(() => {
        n || (O.current += 1, !(!_ && (l || !f)) && (g(!1), m(null), h(null)))
    }, [n, _, l, f, g, m, h]), (0, Z.useEffect)(() => {
        if (C || I || L || V || a) return;
        if (l && !q) {
            if (R) return;
            d(null), m(null);
            return
        } else if (!l && G?.length) {
            let e = S(G, [e => !(e.is_pinned ?? !1), e => -(e.task_count ?? 0)])[0];
            d(e.id, x(e));
            let t = J(e);
            m(t ?? null);
            return
        }
        let e = J(q);
        e != null && e !== f ? m(e) : q && e == null && f != null && m(null)
    }, [I, L, l, q, G, d, f, m, J, C, V, a, R]), (0, Z.useEffect)(() => {
        if (L || C || I || V || U || !F?.repositories.length) return;
        let [e] = F.repositories;
        if (e?.id && n && !l) {
            if (f === e.id && _) {
                E?.id !== e.id && D(e);
                return
            }
            g(!0), m(e.id), D(e), h(null)
        }
    }, [F, L, _, l, f, h, m, g, D, C, I, U, V, E?.id, n]), Re([{
        key: `whamEnvironments`,
        action: () => y(!0),
        actionMessageDescriptor: c.formatMessage({
            id: `wham.keyboardActions.whamEnvironments`,
            defaultMessage: `Environments`
        }),
        group: u.Chat,
        bindings: [{
            binding: [p.Mod, `e`]
        }]
    }]);
    let le = (0, Z.useCallback)(() => y(!1), []),
        ue = (0, Z.useCallback)(async e => {
            if (!e?.id) return;
            w(!0), d(null), g(!1), m(e.id), D(e), h(null), A({
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
                    d(e.id, x(e)), w(!1), le()
                } else n.length === 0 && (g(!0), le())
            } catch {
                t === O.current && A({
                    status: `error`,
                    environments: []
                })
            }
        }, [le, N, h, d, m, g]),
        de = c.formatMessage({
            id: `wham.codexEnvironmentPopover.selectEnvironment`,
            defaultMessage: `Select environment`
        }),
        fe = c.formatMessage({
            id: `wham.codexEnvironmentPopover.selectRepository`,
            defaultMessage: `Select repository`
        }),
        ge = c.formatMessage({
            id: `wham.codexEnvironmentPopover.viewAllCodeEnvironments`,
            defaultMessage: `View all code environments`
        }),
        _e = q?.label,
        ve = (_e?.length ?? 0) > 16,
        ye = n && (C || _ || !V && !U && !I),
        be = E?.repository_full_name ?? E?.name ?? fe,
        xe = be.length > 16,
        Se = ye ? be : _e ?? de,
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
        Oe = n && _ && E ? E : null,
        ke = t && !!(q || Oe),
        Ae = C && k != null && (k.status !== `complete` || k.environments.length > 0);
    return I && !G?.length && !v && !C && !V ? (0, Q.jsx)(`div`, {
        className: `flex items-center gap-3 rounded-full`,
        children: (0, Q.jsx)(Mt, {})
    }) : (0, Q.jsxs)(`div`, {
        className: `flex items-center gap-2 rounded-full`,
        children: [(0, Q.jsxs)(me, {
            open: v,
            onOpenChange: y,
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
                isOpen: v,
                closePopover: le,
                popoverContentRef: b,
                children: (0, Q.jsx)(zt, {
                    searchTerm: M,
                    setSearchTerm: ee,
                    repositories: F?.repositories ?? [],
                    isLoadingRepositories: te,
                    isErrorRepositories: ne,
                    isLoading: I,
                    isFetchingEnvironments: H,
                    environments: G ?? [],
                    fetchNextPage: oe,
                    hasNextPage: R,
                    isFetchingNextPage: z,
                    hasKnownEnvironments: B || G.length > 0,
                    environmentId: l,
                    setEnvironmentId: e => {
                        O.current += 1, w(!1);
                        let t = G?.find(t => t.id === e);
                        d(e, t ? x(t) : null);
                        let n = J(t);
                        m(n ?? null)
                    },
                    closePopover: le,
                    onSelectRepository: ue,
                    disabledRepositoryIds: Ee,
                    allowRepositorySelection: n,
                    openEnvironmentInNewWindow: i,
                    onCreateEnvironment: e,
                    manageEnvironmentsUrl: W,
                    headerContent: o || Ae ? (0, Q.jsxs)(Q.Fragment, {
                        children: [o, C && k?.status === `loading` && (0, Q.jsx)(`p`, {
                            role: `status`,
                            className: `px-1.5 py-2 text-sm`,
                            children: (0, Q.jsx)(j, {
                                id: `wham.codexEnvironmentPopover.repositoryLookup.loading`,
                                defaultMessage: `Looking for existing environments…`
                            })
                        }), C && k?.status === `error` && (0, Q.jsxs)(`div`, {
                            role: `alert`,
                            className: `px-1.5 py-2 text-sm`,
                            children: [(0, Q.jsx)(j, {
                                id: `wham.codexEnvironmentPopover.repositoryLookup.error`,
                                defaultMessage: `Could not load environments. Your repository is still selected.`
                            }), (0, Q.jsx)(s, {
                                type: `button`,
                                size: `small`,
                                color: `secondary`,
                                onClick: () => {
                                    E && ue(E)
                                },
                                children: (0, Q.jsx)(j, {
                                    id: `wham.codexEnvironmentPopover.repositoryLookup.retry`,
                                    defaultMessage: `Retry`
                                })
                            })]
                        }), C && (k?.environments.length ?? 0) > 0 && (0, Q.jsx)(`p`, {
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
            hasKnownEnvironments: p,
            environmentId: m,
            setEnvironmentId: h,
            closePopover: g,
            onSelectRepository: _,
            disabledRepositoryIds: v,
            allowRepositorySelection: y,
            openEnvironmentInNewWindow: b,
            onCreateEnvironment: x,
            manageEnvironmentsUrl: S,
            headerContent: C
        } = e,
        T = re(),
        E = (0, Z.useRef)(null),
        D;
    t[0] !== g || t[1] !== h ? (D = e => {
        h(e), g()
    }, t[0] = g, t[1] = h, t[2] = D) : D = t[2];
    let O = D,
        k = M(),
        A = p,
        ee = s && l.length === 0,
        N;
    if (t[3] !== m || t[4] !== l) {
        bb0: {
            let e;t[6] === m ? e = t[7] : (e = e => e.id === m, t[6] = m, t[7] = e);
            let n = l.findIndex(e);
            if (n <= 0) {
                N = l;
                break bb0
            }
            N = [l[n], ...l.slice(0, n), ...l.slice(n + 1)]
        }
        t[3] = m,
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
        getItemRef: ae
    } = it(F), I, L;
    t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (I = () => {
        E.current?.focus()
    }, L = [], t[11] = I, t[12] = L) : (I = t[11], L = t[12]), (0, Z.useEffect)(I, L);
    let R;
    t[13] === C ? R = t[14] : (R = C ? (0, Q.jsx)(`div`, {
        className: `bg-primary flex-shrink-0 px-2 pt-2`,
        onClick: Ht,
        onPointerDown: Vt,
        children: C
    }) : null, t[13] = C, t[14] = R);
    let z;
    t[15] === r ? z = t[16] : (z = e => r(e.target.value), t[15] = r, t[16] = z);
    let B;
    t[17] === c ? B = t[18] : (B = c ? (0, Q.jsx)(w, {
        "aria-hidden": !0,
        className: `text-token-text-tertiary absolute end-0 top-1/2 h-3.5 w-3.5 -translate-y-1/2`
    }) : null, t[17] = c, t[18] = B);
    let V;
    t[19] !== y || t[20] !== A || t[21] !== T ? (V = y ? A ? T.formatMessage({
        id: `wham.codexEnvironmentPopover.searchEnvironmentsTooltip.envless`,
        defaultMessage: `Search environments and repos…`
    }) : T.formatMessage({
        id: `wham.codexEnvironmentPopover.searchEnvironmentsTooltip.envlessRepos`,
        defaultMessage: `Search repositories…`
    }) : T.formatMessage({
        id: `wham.codexEnvironmentPopover.searchEnvironmentsTooltip.environmentsOnly`,
        defaultMessage: `Search environments…`
    }), t[19] = y, t[20] = A, t[21] = T, t[22] = V) : V = t[22];
    let H;
    t[23] !== y || t[24] !== T ? (H = y ? T.formatMessage({
        id: `wham.codexEnvironmentPopover.searchEnvironmentsAria.envless`,
        defaultMessage: `Search environments and repos`
    }) : T.formatMessage({
        id: `wham.codexEnvironmentPopover.searchEnvironmentsAria.environmentsOnly`,
        defaultMessage: `Search environments`
    }), t[23] = y, t[24] = T, t[25] = H) : H = t[25];
    let se;
    t[26] !== ie || t[27] !== n || t[28] !== H || t[29] !== z || t[30] !== B || t[31] !== V ? (se = (0, Q.jsx)(oe, {
        ref: E,
        className: `border-token-border-default bg-primary hover:bg-primary focus-within:bg-primary focus-within:border-heavy mb-2 flex h-8 w-full items-center rounded-lg px-2.5 py-1.5 shadow-none focus-within:ring-0`,
        containerInputClassName: `w-full`,
        inputClassName: `bg-transparent pe-5 text-sm placeholder:text-token-text-tertiary`,
        type: `text`,
        autoComplete: `off`,
        name: `codex-environment-search`,
        value: n,
        onChange: z,
        onKeyDown: ie,
        suppressFocus: !0,
        insideContainerChildren: B,
        placeholder: V,
        ariaLabel: H
    }), t[26] = ie, t[27] = n, t[28] = H, t[29] = z, t[30] = B, t[31] = V, t[32] = se) : se = t[32];
    let U;
    t[33] === Symbol.for(`react.memo_cache_sentinel`) ? (U = (0, Q.jsx)(`div`, {
        className: `bg-token-border-default h-px w-full`
    }), t[33] = U) : U = t[33];
    let W;
    t[34] === se ? W = t[35] : (W = (0, Q.jsxs)(`div`, {
        className: `bg-primary flex-shrink-0 px-2 pt-2`,
        onPointerDown: Bt,
        children: [se, U]
    }), t[34] = se, t[35] = W);
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
    t[40] !== m || t[41] !== P || t[42] !== ae || t[43] !== O || t[44] !== A || t[45] !== te || t[46] !== ee || t[47] !== ne ? (ce = ee ? (0, Q.jsx)(`div`, {
        className: `px-1.5`,
        children: (0, Q.jsx)(`div`, {
            className: `flex w-full items-center justify-center py-2`,
            children: (0, Q.jsx)(w, {
                className: `ms-2`
            })
        })
    }) : A ? P.length > 0 ? (0, Q.jsx)(`div`, {
        className: `px-1.5`,
        children: P.map(e => {
            let t = m === e.id;
            return (0, Q.jsx)(Ye, {
                as: `button`,
                ref: ae(e),
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
    }) : null, t[40] = m, t[41] = P, t[42] = ae, t[43] = O, t[44] = A, t[45] = te, t[46] = ee, t[47] = ne, t[48] = ce) : ce = t[48];
    let q;
    t[49] !== u || t[50] !== d || t[51] !== f ? (q = (0, Q.jsx)(Wt, {
        hasNextPage: d,
        fetchNextPage: u,
        isFetchingNextPage: f
    }), t[49] = u, t[50] = d, t[51] = f, t[52] = q) : q = t[52];
    let J;
    t[53] !== y || t[54] !== v || t[55] !== A || t[56] !== o || t[57] !== a || t[58] !== _ || t[59] !== i || t[60] !== n ? (J = y ? (0, Q.jsx)(kt, {
        onSelectRepository: _,
        existingEnvironmentRepositoryIds: v,
        showRepositoriesHeader: A,
        search: n.trim().toLowerCase(),
        repositories: i,
        isLoading: a,
        isError: o
    }) : null, t[53] = y, t[54] = v, t[55] = A, t[56] = o, t[57] = a, t[58] = _, t[59] = i, t[60] = n, t[61] = J) : J = t[61];
    let le;
    t[62] !== K || t[63] !== ce || t[64] !== q || t[65] !== J ? (le = (0, Q.jsxs)(`div`, {
        className: `flex min-h-0 flex-1 flex-col overflow-y-auto`,
        children: [K, ce, q, J]
    }), t[62] = K, t[63] = ce, t[64] = q, t[65] = J, t[66] = le) : le = t[66];
    let ue;
    t[67] === Symbol.for(`react.memo_cache_sentinel`) ? (ue = (0, Q.jsx)(`div`, {
        className: `bg-token-border-default h-px w-full`
    }), t[67] = ue) : ue = t[67];
    let de;
    t[68] !== g || t[69] !== A || t[70] !== S || t[71] !== k || t[72] !== x || t[73] !== b ? (de = () => {
        if (b) {
            window.open(S, `_blank`, `noopener,noreferrer`), g();
            return
        }!A && x ? x() : k(S)
    }, t[68] = g, t[69] = A, t[70] = S, t[71] = k, t[72] = x, t[73] = b, t[74] = de) : de = t[74];
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
    t[79] !== de || t[80] !== pe ? (me = (0, Q.jsx)(`div`, {
        className: `flex flex-shrink-0 flex-col gap-1 px-2 py-1.5`,
        children: (0, Q.jsx)(Ye, {
            className: `w-full`,
            noDefaultHoverState: !0,
            onClick: de,
            isSelected: !1,
            icon: fe,
            label: pe
        }, `environment-action`)
    }), t[79] = de, t[80] = pe, t[81] = me) : me = t[81];
    let he;
    return t[82] !== W || t[83] !== le || t[84] !== me || t[85] !== R ? (he = (0, Q.jsxs)(`div`, {
        className: `bg-primary text-token-text-primary flex max-h-[280px] w-80 flex-col overflow-hidden rounded-lg md:max-h-[360px]`,
        children: [R, W, le, ue, me]
    }), t[82] = W, t[83] = le, t[84] = me, t[85] = R, t[86] = he) : he = t[86], he
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
        children: n ? (0, Q.jsx)(w, {
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
    Gt = ne(), v(), Ce(), _e(), de(), l(), o(), Ne(), Ae(), Je(), _t(), Qe(), jt(), Pt(), nt(), at(), Oe(), ze(), k(), Tt(), z(), K(), H(), J(), W(), C(), Z = t(P()), N(), ee(), Q = A()
}));

function qt(e) {
    "use forget";
    let t = (0, Xt.c)(7),
        n;
    t[0] === e ? n = t[1] : (n = e === void 0 ? {} : e, t[0] = e, t[1] = n);
    let r = n,
        i;
    t[2] === r.allowGitLabEnvironmentSelection ? i = t[3] : (i = r.allowGitLabEnvironmentSelection && y(`1437685011`), t[2] = r.allowGitLabEnvironmentSelection, t[3] = i);
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
        c = re(),
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
        t[5] === m ? r = t[6] : (r = (0, $.jsx)(s, {
            color: `secondary`,
            type: `button`,
            className: `border-token-border-default flex w-fit items-center gap-1.5 rounded-full! border`,
            onClick: m,
            children: n
        }), t[5] = m, t[6] = r);
        let i;
        return t[7] !== e || t[8] !== r ? (i = (0, $.jsx)(g, {
            label: e,
            children: r
        }), t[7] = e, t[8] = r, t[9] = i) : i = t[9], i
    } else if (!h) {
        let e;
        t[10] === c ? e = t[11] : (e = c.formatMessage({
            id: `wham.whamComposerEnvironmentsSelector.disabledByWorkspaceAdmin`,
            defaultMessage: `Disabled by workspace admin`
        }), t[10] = c, t[11] = e);
        let n, r;
        t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, $.jsx)(Fe, {
            "aria-hidden": !0,
            className: `icon-sm me-1.5`
        }), r = (0, $.jsx)(j, {
            id: `wham.environmentsSelector.connectGithub`,
            defaultMessage: `Connect GitHub`
        }), t[12] = n, t[13] = r) : (n = t[12], r = t[13]);
        let i;
        t[14] === f ? i = t[15] : (i = (0, $.jsxs)(s, {
            type: `button`,
            color: `secondary`,
            onClick: f,
            disabled: !0,
            children: [n, r]
        }), t[14] = f, t[15] = i);
        let a;
        return t[16] !== e || t[17] !== i ? (a = (0, $.jsx)(g, {
            label: e,
            children: i
        }), t[16] = e, t[17] = i, t[18] = a) : a = t[18], a
    }
    let _;
    return t[19] !== a || t[20] !== i || t[21] !== u || t[22] !== n || t[23] !== o || t[24] !== f || t[25] !== r ? (_ = (0, $.jsx)($.Fragment, {
        children: (0, $.jsx)(`div`, {
            className: `z-0 flex h-full w-full justify-between`,
            children: u ? (0, $.jsx)(`div`, {
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
                children: (0, $.jsxs)(s, {
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
    }), t[19] = a, t[20] = i, t[21] = u, t[22] = n, t[23] = o, t[24] = f, t[25] = r, t[26] = _) : _ = t[26], _
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
            hasSelectedEnvironment: c,
            preserveSelectedEnvironment: l,
            selectedEnvironmentProvider: u
        } = e,
        d = c !== void 0 && c,
        f = l !== void 0 && l,
        p = re(),
        m = M(),
        h;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (h = {
        redirectAfter: `/codex/cloud`
    }, t[0] = h) : h = t[0];
    let {
        isConnected: _,
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
        O = S !== !1 && _,
        k = O || D,
        A = O && D,
        ee = D && !O ? `gitlab` : `github`,
        N = T ?? u,
        P = N ?? ee,
        F = A || u != null && (P === `gitlab` ? O : D),
        te = f && d && u == null && T == null,
        ne = f || d && T != null && u != null && T !== u,
        ie;
    t[2] !== P || t[3] !== i || t[4] !== te ? (ie = te ? i ?? null : {
        ...i ?? {},
        provider: P
    }, t[2] = P, t[3] = i, t[4] = te, t[5] = ie) : ie = t[5];
    let ae = ie,
        I = P === `gitlab` ? D : O,
        L = P === `gitlab` ? w.isLoading : v,
        oe = P === `gitlab` ? w.error : b,
        R = P === `gitlab` ? w.refetch : x,
        z;
    t[6] === P ? z = t[7] : (z = e => {
        e !== P && E(e)
    }, t[6] = P, t[7] = z);
    let B = z,
        V = !k && N == null;
    if (V && v) {
        let e;
        return t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, $.jsx)(Mt, {
            className: `h-9`
        }), t[8] = e) : e = t[8], e
    }
    if (V && b == null && !S) {
        let e;
        t[9] === p ? e = t[10] : (e = p.formatMessage({
            id: `wham.whamComposerEnvironmentsSelector.disabledByWorkspaceAdmin`,
            defaultMessage: `Disabled by workspace admin`
        }), t[9] = p, t[10] = e);
        let n, r;
        t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, $.jsx)(Fe, {
            "aria-hidden": !0,
            className: `icon-sm me-1.5`
        }), r = (0, $.jsx)(j, {
            id: `wham.environmentsSelector.connectGithub`,
            defaultMessage: `Connect GitHub`
        }), t[11] = n, t[12] = r) : (n = t[11], r = t[12]);
        let i;
        t[13] === y ? i = t[14] : (i = (0, $.jsxs)(s, {
            type: `button`,
            color: `secondary`,
            onClick: y,
            disabled: !0,
            children: [n, r]
        }), t[13] = y, t[14] = i);
        let a;
        return t[15] !== i || t[16] !== e ? (a = (0, $.jsx)(g, {
            label: e,
            children: i
        }), t[15] = i, t[16] = e, t[17] = a) : a = t[17], a
    }
    let H;
    t[18] !== P || t[19] !== m || t[20] !== n ? (H = P === `gitlab` ? () => m(`/codex/cloud/settings/environment/create?provider=gitlab`) : n, t[18] = P, t[19] = m, t[20] = n, t[21] = H) : H = t[21];
    let se = H,
        U;
    t[22] !== P || t[23] !== w.openConnectorModal || t[24] !== S || t[25] !== y ? (U = P === `gitlab` ? (0, $.jsxs)(s, {
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
    }) : (0, $.jsxs)(s, {
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
    }), t[22] = P, t[23] = w.openConnectorModal, t[24] = S, t[25] = y, t[26] = U) : U = t[26];
    let W = U,
        G;
    t[27] === p ? G = t[28] : (G = e => (0, $.jsx)(g, {
        label: p.formatMessage({
            id: `wham.whamComposerEnvironmentsSelector.failedClickToRetry`,
            defaultMessage: `Click to retry`
        }),
        children: (0, $.jsx)(s, {
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
    let q = ce,
        J = I || te,
        le;
    t[34] !== P || t[35] !== B || t[36] !== F ? (le = F ? (0, $.jsx)(Ve, {
        value: P,
        onChange: B,
        appearance: `segmented`,
        isCompact: !0
    }) : null, t[34] = P, t[35] = B, t[36] = F, t[37] = le) : le = t[37];
    let ue = le,
        de;
    return t[38] !== W || t[39] !== oe || t[40] !== se || t[41] !== P || t[42] !== a || t[43] !== q || t[44] !== ae || t[45] !== k || t[46] !== L || t[47] !== o || t[48] !== N || t[49] !== ue || t[50] !== R || t[51] !== K || t[52] !== ne || t[53] !== J || t[54] !== r || t[55] !== F ? (de = (0, $.jsx)($.Fragment, {
        children: (0, $.jsx)(`div`, {
            className: `z-0 flex h-full w-full justify-between`,
            children: k || N != null ? (0, $.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [F && !J && ue, !J && L ? (0, $.jsx)(Mt, {
                    className: `h-9`
                }) : !J && oe ? K(R) : J ? (0, $.jsx)(Rt, {
                    onCreateEnvironment: se,
                    showBranchSelector: r ?? !0,
                    allowRepositorySelection: P === `github` && (a ?? !0),
                    filters: ae,
                    openEnvironmentInNewWindow: o,
                    preserveSelectedEnvironment: ne,
                    headerContent: ue
                }) : W]
            }) : (0, $.jsx)(`div`, {
                className: `flex h-full items-center gap-2`,
                children: q
            })
        })
    }), t[38] = W, t[39] = oe, t[40] = se, t[41] = P, t[42] = a, t[43] = q, t[44] = ae, t[45] = k, t[46] = L, t[47] = o, t[48] = N, t[49] = ue, t[50] = R, t[51] = K, t[52] = ne, t[53] = J, t[54] = r, t[55] = F, t[56] = de) : de = t[56], de
}
var Xt, Zt, $, Qt = e((() => {
    Xt = ne(), v(), Se(), b(), D(), Me(), Ne(), Be(), Kt(), Pt(), Oe(), Le(), Zt = t(P()), N(), ee(), $ = A()
}));
export {
    wt as a, vt as c, pt as d, _t as f, Je as g, Ue as h, Kt as i, yt as l, Qe as m, Qt as n, Tt as o, Ye as p, Rt as r, Ct as s, qt as t, ot as u
};
//# sourceMappingURL=e7a416e4-lbn5l0ib09fhyyoo.js.map