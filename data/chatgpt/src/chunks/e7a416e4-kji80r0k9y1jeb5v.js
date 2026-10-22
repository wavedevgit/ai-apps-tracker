import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    Bz as r,
    Fx as i,
    Iv as a,
    Lx as o,
    Nx as s,
    Ox as c,
    Px as l,
    Qy as u,
    Rz as d,
    Sl as f,
    Tx as p,
    Vz as m,
    Yat as h,
    Zy as g,
    eE as _,
    f$ as v,
    grt as y,
    hl as b,
    jv as x,
    l7 as S,
    ml as C,
    p$ as w,
    tot as T,
    u7 as E,
    urt as D,
    xl as O,
    zz as k
} from "./4813494d-d7xm9wsvhdfbag9a.js";
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
    BVt as ie,
    Bst as ae,
    Cun as oe,
    E6t as I,
    KBt as se,
    Kst as L,
    Kun as R,
    Sun as z,
    Vst as B,
    Wst as V,
    cdn as H,
    ex as U,
    f5t as W,
    ldn as ce,
    mX as G,
    mun as K,
    odn as q,
    pX as J,
    qBt as le,
    s5t as ue,
    sdn as de,
    tx as fe,
    u5t as pe,
    udn as me,
    zVt as he
} from "./conversation-small-m7dgsxtvvivh3e6t.js";
import {
    CC as ge,
    Kb as _e,
    SC as ve,
    ex as ye,
    qb as be,
    tx as xe
} from "./30901919-lc79rizhhepnsl3q.js";
import {
    Bt as Se,
    Ht as Ce,
    Vt as we,
    zt as Te
} from "./c470f5ab-lnsrbaizit3lulwq.js";
import {
    a as Ee,
    i as De,
    n as Oe,
    t as ke
} from "./5f4d7fa0-lmwguqqs8sde7d1l.js";
import {
    n as Ae,
    t as je
} from "./e8b55dd1-hkj8ok3gzqi8yren.js";
import {
    A as Me,
    F as Ne,
    I as Pe,
    k as Fe
} from "./9e18a103-ovash5ue0yl030uj.js";
import {
    i as Ie,
    r as Le
} from "./ab92372e-ftp346fqkk2jaw2a.js";
import {
    r as Re,
    t as ze
} from "./0f28d127-yvl5zac19kiozrz9.js";
import {
    n as Be,
    t as Ve
} from "./3a774aaf-lqx1i8v7pun2wvlv.js";

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
        f = l && `hidden sm:block`,
        p = c ? `max-w-[8rem] truncate md:max-w-[10rem]` : `w-fit`,
        m;
    t[0] !== f || t[1] !== p ? (m = S(f, p), t[0] = f, t[1] = p, t[2] = m) : m = t[2];
    let h;
    t[3] !== m || t[4] !== n ? (h = (0, Ke.jsx)(`span`, {
        className: m,
        children: n
    }), t[3] = m, t[4] = n, t[5] = h) : h = t[5];
    let g;
    t[6] === u ? g = t[7] : (g = u && (0, Ke.jsx)(d, {
        "aria-hidden": !0,
        className: `icon-sm`
    }), t[6] = u, t[7] = g);
    let _;
    t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = (0, Ke.jsx)(r.ChevronDownSm, {
        "aria-hidden": !0,
        className: `icon-sm`
    }), t[8] = _) : _ = t[8];
    let v;
    return t[9] !== i || t[10] !== h || t[11] !== g ? (v = (0, Ke.jsxs)(`div`, {
        className: `flex max-w-full items-center gap-1.5 ps-1`,
        children: [i, h, g, _]
    }), t[9] = i, t[10] = h, t[11] = g, t[12] = v) : v = t[12], v
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
    t[0] === f ? p = t[1] : (p = S(qe, f), t[0] = f, t[1] = p);
    let m = d || void 0,
        h = d ? `` : void 0,
        _ = d ? -1 : 0,
        v = d ? We : void 0,
        y;
    t[2] !== a || t[3] !== u || t[4] !== n || t[5] !== l ? (y = (0, Ke.jsx)(He, {
        triggerText: n,
        Icon: a,
        truncate: l,
        isLoading: u
    }), t[2] = a, t[3] = u, t[4] = n, t[5] = l, t[6] = y) : y = t[6];
    let b;
    t[7] !== i || t[8] !== u || t[9] !== y || t[10] !== p || t[11] !== m || t[12] !== h || t[13] !== _ || t[14] !== v ? (b = (0, Ke.jsx)(pe, {
        className: p,
        "aria-label": i,
        "aria-busy": u,
        "aria-disabled": m,
        "data-disabled": h,
        tabIndex: _,
        onClick: v,
        children: y
    }), t[7] = i, t[8] = u, t[9] = y, t[10] = p, t[11] = m, t[12] = h, t[13] = _, t[14] = v, t[15] = b) : b = t[15];
    let x;
    return t[16] !== b || t[17] !== r ? (x = (0, Ke.jsx)(g, {
        label: r,
        triggerAs: null,
        children: b
    }), t[16] = b, t[17] = r, t[18] = x) : x = t[18], x
}

function We(e) {
    e.preventDefault(), e.stopPropagation()
}
var Ge, Ke, qe, Je = e((() => {
    Ge = ne(), m(), u(), k(), W(), E(), Ke = A(), qe = `composer-btn px-2 text-sm font-medium`
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
    icon: _,
    ...v
}) {
    let y = re(),
        b = (0, Y.jsx)(Y.Fragment, {});
    e ? b = (0, Y.jsx)(`div`, {
        className: `flex flex-1 items-center gap-4`,
        children: e
    }) : s && (b = (0, Y.jsxs)(`div`, {
        className: S(`flex items-center gap-3`, p ? `w-0 flex-1` : `w-full`),
        children: [_ && ((0, Ze.isValidElement)(_) ? _ : (0, Y.jsx)(Xe, {
            icon: _
        })), s && (0, Y.jsx)(`div`, {
            className: S(`flex flex-col items-start py-1`, c && `text-token-text-quaternary pointer-events-none`, p && `w-[100%]`),
            children: (0, Y.jsx)(`div`, {
                className: S(`flex items-center text-start text-sm`, p && `w-full`),
                children: (0, Y.jsx)(`span`, {
                    className: `w-full overflow-hidden text-ellipsis whitespace-nowrap`,
                    children: s
                })
            })
        })]
    }), l && (b = (0, Y.jsx)(g, {
        sideOffset: -10,
        label: l,
        className: `w-full`,
        children: b
    })));
    let x = (0, Y.jsxs)(`div`, {
            className: S(`flex items-center justify-center`, (i || m && h || u) && `min-w-5`),
            children: [i && (0, Y.jsx)(r.CheckSm, {
                className: `icon color:var(--tint-color,#0285FF) icon-sm`,
                "aria-label": y.formatMessage({
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
                "aria-label": y.formatMessage({
                    id: `wham.codexMenuRow.openSubmenu`,
                    defaultMessage: `Open submenu`
                })
            })]
        }),
        C = S(`flex cursor-pointer items-center rounded-[10px] px-2.5 py-1`, (i || m && h || u) && `gap-4`, a && `bg-black/5 dark:bg-white/5`, !d && `hover:bg-black/5 dark:hover:bg-white/5`, o && `bg-black/5 dark:bg-white/5`, t);
    return f === `div` ? (0, Y.jsxs)(`div`, {
        ...v,
        className: C,
        children: [b, x]
    }) : (0, Y.jsxs)(`button`, {
        type: `button`,
        ...v,
        onClick: e => {
            e.persist(), requestAnimationFrame(() => {
                n?.(e)
            })
        },
        className: C,
        children: [b, x]
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
    ge(), m(), u(), E(), Ze = t(P()), N(), Y = A()
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
        p(), o(), ie(), rt = t(P()), it = ({
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
                onKeyDown: l => {
                    let u = s(l, [i.ArrowDown]) || s(l, [i.Control, `n`]),
                        d = s(l, [i.ArrowUp]) || s(l, [i.Control, `p`]);
                    if (!(u || d || c(l))) return;
                    if (l.preventDefault(), c(l)) {
                        r && t(r);
                        return
                    }
                    let f = n(e[he(e.findIndex(e => n(e) === r) - (d ? 1 : -1), 0, e.length - 1)]);
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
        c = re(),
        {
            branch: u,
            setBranch: d
        } = de(),
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
    t[4] !== u || t[5] !== S || t[6] !== y || t[7] !== d ? (C = () => {
        let e = b.current;
        if (b.current = y, !y) {
            d(null);
            return
        }
        let t = H(y);
        if (e !== y) {
            if (t) {
                d(t);
                return
            }
            d(S);
            return
        }
        u || d(t ?? S)
    }, w = [u, y, S, d], t[4] = u, t[5] = S, t[6] = y, t[7] = d, t[8] = C, t[9] = w) : (C = t[8], w = t[9]), (0, ht.useEffect)(C, w);
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
        group: l.Chat,
        bindings: O
    }], t[16] = E, t[17] = D, t[18] = k) : k = t[18], Re(k);
    let A;
    t[19] !== u || t[20] !== c ? (A = u ?? c.formatMessage({
        id: `wham.codexBranchPopover.selectABranch`,
        defaultMessage: `Select a Branch`
    }), t[19] = u, t[20] = c, t[21] = A) : A = t[21];
    let j;
    t[22] !== u || t[23] !== m || t[24] !== s || t[25] !== o || t[26] !== c ? (j = s ? o ?? `` : u === `` || m ? `` : u?.length ? u : c.formatMessage({
        id: `wham.codexBranchPopover.searchForYourBranchTooltip`,
        defaultMessage: `Search for your branch`
    }), t[22] = u, t[23] = m, t[24] = s, t[25] = o, t[26] = c, t[27] = j) : j = t[27];
    let M;
    t[28] === c ? M = t[29] : (M = c.formatMessage({
        id: `wham.codexBranchPopover.searchForYourBranchAria`,
        defaultMessage: `Search for your branch`
    }), t[28] = c, t[29] = M);
    let ee;
    t[30] === Symbol.for(`react.memo_cache_sentinel`) ? (ee = (0, gt.jsx)(Fe, {
        "aria-hidden": !0,
        className: `icon-sm`
    }), t[30] = ee) : ee = t[30];
    let N;
    t[31] !== s || t[32] !== A || t[33] !== j || t[34] !== M ? (N = (0, gt.jsx)(Ue, {
        triggerText: A,
        toolTip: j,
        ariaLabel: M,
        Icon: ee,
        disabled: s
    }), t[31] = s, t[32] = A, t[33] = j, t[34] = M, t[35] = N) : N = t[35];
    let P;
    t[36] !== u || t[37] !== m || t[38] !== s || t[39] !== n?.github_connector_id || t[40] !== S || t[41] !== y || t[42] !== f || t[43] !== d ? (P = s ? null : (0, gt.jsx)(je, {
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
            selectedBranch: u ?? ``,
            closePopover: v
        })
    }), t[36] = u, t[37] = m, t[38] = s, t[39] = n?.github_connector_id, t[40] = S, t[41] = y, t[42] = f, t[43] = d, t[44] = P) : P = t[44];
    let F;
    return t[45] !== m || t[46] !== N || t[47] !== P ? (F = (0, gt.jsx)(`div`, {
        className: `items-center rounded-full`,
        children: (0, gt.jsxs)(ue, {
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
        f = fe(s, 300),
        p;
    t[0] === n ? p = t[1] : (p = n ? ce(n) : [], t[0] = n, t[1] = p);
    let m = p,
        h;
    t[2] !== f || t[3] !== r || t[4] !== n ? (h = [`searchBranches`, n, r, f], t[2] = f, t[3] = r, t[4] = n, t[5] = h) : h = t[5];
    let g = !!n,
        _;
    t[6] !== f || t[7] !== r || t[8] !== n ? (_ = e => {
        let {
            pageParam: t
        } = e;
        return C.searchBranchesByRepository(n ?? ``, f, 25, t ?? null, r)
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
        isFetchingNextPage: w,
        error: T
    } = F(v), E;
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
    } = it(ee), ie, oe;
    t[29] === Symbol.for(`react.memo_cache_sentinel`) ? (oe = () => {
        d.current && d.current.focus()
    }, ie = [], t[29] = ie, t[30] = oe) : (ie = t[29], oe = t[30]), (0, ht.useEffect)(oe, ie);
    let I;
    t[31] === c ? I = t[32] : (I = e => c(e.target.value), t[31] = c, t[32] = I);
    let se;
    t[33] === u ? se = t[34] : (se = u.formatMessage({
        id: `wham.codexBranchPopover.branch`,
        defaultMessage: `Search branches…`
    }), t[33] = u, t[34] = se);
    let L;
    t[35] === u ? L = t[36] : (L = u.formatMessage({
        id: `wham.codexBranchPopover.createBranchAria`,
        defaultMessage: `Create a new branch`
    }), t[35] = u, t[36] = L);
    let R;
    t[37] !== te || t[38] !== s || t[39] !== I || t[40] !== se || t[41] !== L ? (R = (0, gt.jsx)(ae, {
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
        placeholder: se,
        ariaLabel: L
    }), t[37] = te, t[38] = s, t[39] = I, t[40] = se, t[41] = L, t[42] = R) : R = t[42];
    let z;
    t[43] === Symbol.for(`react.memo_cache_sentinel`) ? (z = (0, gt.jsx)(`div`, {
        className: `bg-token-border-default h-px w-full`
    }), t[43] = z) : z = t[43];
    let B;
    t[44] !== M || t[45] !== ne || t[46] !== k || t[47] !== N || t[48] !== o || t[49] !== P ? (B = M?.map(e => {
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
    }), t[44] = M, t[45] = ne, t[46] = k, t[47] = N, t[48] = o, t[49] = P, t[50] = B) : B = t[50];
    let V;
    t[51] === T ? V = t[52] : (V = T ? (0, gt.jsx)(`div`, {
        className: `flex items-center justify-center`,
        children: (0, gt.jsx)(j, {
            id: `wham.branchPopover.error`,
            defaultMessage: `Error loading branches`
        })
    }) : null, t[51] = T, t[52] = V);
    let H = w || b,
        U;
    t[53] !== x || t[54] !== S || t[55] !== H ? (U = (0, gt.jsx)(J, {
        bgColor: `dark:bg-token-bg-secondary`,
        hasNextPage: S,
        fetchNextPage: x,
        isFetchingNextPage: H
    }), t[53] = x, t[54] = S, t[55] = H, t[56] = U) : U = t[56];
    let W;
    t[57] !== B || t[58] !== V || t[59] !== U ? (W = (0, gt.jsxs)(`div`, {
        className: `min-h-18 w-full overflow-y-auto p-1.5`,
        children: [B, V, U]
    }), t[57] = B, t[58] = V, t[59] = U, t[60] = W) : W = t[60];
    let G;
    return t[61] !== R || t[62] !== W ? (G = (0, gt.jsxs)(`div`, {
        className: `gap flex max-h-[280px] w-90 flex-col rounded-lg p-0 md:max-h-[360px]`,
        onClick: ct,
        children: [R, z, W]
    }), t[61] = R, t[62] = W, t[63] = G) : G = t[63], G
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
    mt = ne(), I(), G(), B(), o(), Me(), Ae(), Je(), Qe(), nt(), at(), ze(), me(), U(), b(), q(), W(), te(), ht = t(P()), N(), gt = A()
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
    return (await C.getEnvironments()).filter(t => O(t) === `github` && (t.github_connector_id ?? ke) === n && t.repos.some(t => bt(t, e, n)))
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
        if (e instanceof h && e.status === 400 && e.message === `Environment with this label already exists`) {
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
    T(), Oe(), f(), b(), wt = class extends Error {}
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
    let s = x(`installations/select_target`),
        c = de(e => e.selectedRepositoryId),
        l = de(e => e.useRepositoryAsEnvironment),
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
        f = r.length > 0 ? (0, X.jsx)(j, {
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
                children: (0, X.jsx)(d, {
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
                    children: f
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
    ye(), a(), k(), Qe(), Ot(), q(), At = t(P()), N(), X = A()
}));

function Mt({
    className: e
}) {
    return (0, Nt.jsx)(V, {
        className: S(`flex w-[8rem] items-center gap-1.5 rounded-full! md:w-[10rem]`, e)
    })
}
var Nt, Pt = e((() => {
    L(), E(), Nt = A()
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
    } = z(l), _;
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
    let u = re(),
        {
            environmentId: d,
            setEnvironmentId: f,
            selectedRepositoryId: p,
            setSelectedRepositoryId: m,
            setBranch: h,
            setUseRepositoryAsEnvironment: g,
            useRepositoryAsEnvironment: _
        } = de(),
        [v, y] = (0, Z.useState)(!1),
        b = (0, Z.useRef)(null),
        [x, S] = (0, Z.useState)(!1),
        C = (0, Z.useRef)(d),
        [T, E] = (0, Z.useState)(null),
        D = (0, Z.useRef)(0),
        [k, A] = (0, Z.useState)(null);
    !r && (T != null || k != null) && (S(!1), E(null), A(null));
    let [M, ee] = (0, Z.useState)(``), {
        connectorId: N
    } = De(), P = fe(M.trim(), 300), {
        data: F,
        isLoading: te,
        isError: ne
    } = oe(P, N, {
        enabled: r && a?.provider !== `gitlab`
    }), {
        environments: ie,
        environmentsLoading: ae,
        isErrorEnvironments: I,
        fetchNextPage: se,
        hasNextPage: L,
        isFetchingNextPage: R,
        hasKnownEnvironments: z,
        environmentSearchQuery: B,
        isFetchingEnvironments: V
    } = It(P, a?.provider), H = z || L || R, U = a?.provider === `gitlab` ? `/codex/cloud/settings/environments?provider=gitlab` : `/codex/cloud/settings/environments`, W = (0, Z.useMemo)(() => x && k?.environments.length ? k.environments : a?.repos ? ie?.filter(e => le(e.repos, a.repos).length > 0) : ie, [ie, a, x, k]), ce = W?.find(e => e.id === d) ?? k?.environments.find(e => e.id === d), G = (0, Z.useRef)(void 0);
    (0, Z.useEffect)(() => {
        ce && (G.current = ce)
    }, [ce]);
    let K = ce ?? (s && G.current?.id === d ? G.current : void 0),
        q = (0, Z.useCallback)(e => {
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
        if (x || ae || I || B || s) return;
        if (d && !K) {
            if (L) return;
            f(null), m(null);
            return
        } else if (!d && W?.length) {
            let e = w(W, [e => !(e.is_pinned ?? !1), e => -(e.task_count ?? 0)])[0];
            f(e.id, O(e));
            let t = q(e);
            m(t ?? null);
            return
        }
        let e = q(K);
        e != null && e !== p ? m(e) : K && e == null && p != null && m(null)
    }, [ae, I, d, K, W, f, p, m, q, x, B, s, L]), (0, Z.useEffect)(() => {
        if (I || x || ae || B || H || !F?.repositories.length) return;
        let [e] = F.repositories;
        if (e?.id && r && !d) {
            if (p === e.id && _) {
                T?.id !== e.id && E(e);
                return
            }
            g(!0), m(e.id), E(e), h(null)
        }
    }, [F, I, _, d, p, h, m, g, E, x, ae, H, B, T?.id, r]), Re([{
        key: `whamEnvironments`,
        action: () => y(!0),
        actionMessageDescriptor: u.formatMessage({
            id: `wham.keyboardActions.whamEnvironments`,
            defaultMessage: `Environments`
        }),
        group: l.Chat,
        bindings: [{
            binding: [i.Mod, `e`]
        }]
    }]);
    let J = (0, Z.useCallback)(() => y(!1), []),
        pe = (0, Z.useCallback)(async e => {
            if (!e?.id) return;
            S(!0), f(null), g(!1), m(e.id), E(e), h(null), A({
                status: `loading`,
                environments: []
            });
            let t = ++D.current;
            try {
                let n = await St(e.id, N);
                if (t !== D.current) return;
                if (A({
                        status: `complete`,
                        environments: n
                    }), n.length === 1 && xt(n[0], e.id, N)) {
                    let [e] = n;
                    f(e.id, O(e)), S(!1), J()
                } else n.length === 0 && (g(!0), J())
            } catch {
                t === D.current && A({
                    status: `error`,
                    environments: []
                })
            }
        }, [J, N, h, f, m, g]),
        me = u.formatMessage({
            id: `wham.codexEnvironmentPopover.selectEnvironment`,
            defaultMessage: `Select environment`
        }),
        he = u.formatMessage({
            id: `wham.codexEnvironmentPopover.selectRepository`,
            defaultMessage: `Select repository`
        }),
        ge = u.formatMessage({
            id: `wham.codexEnvironmentPopover.viewAllCodeEnvironments`,
            defaultMessage: `View all code environments`
        }),
        _e = K?.label,
        ve = (_e?.length ?? 0) > 16,
        ye = r && (x || _ || !B && !H && !ae),
        be = T?.repository_full_name ?? T?.name ?? he,
        xe = be.length > 16,
        Se = ye ? be : _e ?? me,
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
            return W?.forEach(t => {
                (t.repos ?? Object.keys(t.repo_map ?? {})).forEach(t => {
                    t && e.add(t)
                })
            }), e
        }, [W]),
        Oe = r && _ && T ? T : null,
        ke = t && !!(K || Oe),
        Ae = x && k != null && (k.status !== `complete` || k.environments.length > 0);
    return ae && !W?.length && !v && !x && !B ? (0, Q.jsx)(`div`, {
        className: `flex items-center gap-3 rounded-full`,
        children: (0, Q.jsx)(Mt, {})
    }) : (0, Q.jsxs)(`div`, {
        className: `flex items-center gap-2 rounded-full`,
        children: [(0, Q.jsxs)(ue, {
            open: v,
            onOpenChange: y,
            children: [(0, Q.jsx)(Ue, {
                triggerText: Se,
                toolTip: Ce,
                ariaLabel: u.formatMessage({
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
                    searchTerm: M,
                    setSearchTerm: ee,
                    repositories: F?.repositories ?? [],
                    isLoadingRepositories: te,
                    isErrorRepositories: ne,
                    isLoading: ae,
                    isFetchingEnvironments: V,
                    environments: W ?? [],
                    fetchNextPage: se,
                    hasNextPage: L,
                    isFetchingNextPage: R,
                    hasKnownEnvironments: z || W.length > 0,
                    environmentId: d,
                    setEnvironmentId: e => {
                        D.current += 1, S(!1);
                        let t = W?.find(t => t.id === e);
                        f(e, t ? O(t) : null);
                        let n = q(t);
                        m(n ?? null)
                    },
                    closePopover: J,
                    onSelectRepository: pe,
                    disabledRepositoryIds: Ee,
                    allowRepositorySelection: r,
                    openEnvironmentInNewWindow: o,
                    onCreateEnvironment: e,
                    manageEnvironmentsUrl: U,
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
                                    T && pe(T)
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
            environment: K,
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
        ee = s && l.length === 0,
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
        getItemRef: oe
    } = it(F), I, se;
    t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (I = () => {
        E.current?.focus()
    }, se = [], t[11] = I, t[12] = se) : (I = t[11], se = t[12]), (0, Z.useEffect)(I, se);
    let L;
    t[13] === w ? L = t[14] : (L = w ? (0, Q.jsx)(`div`, {
        className: `bg-primary flex-shrink-0 px-2 pt-2`,
        onClick: Ht,
        onPointerDown: Vt,
        children: w
    }) : null, t[13] = w, t[14] = L);
    let R;
    t[15] === r ? R = t[16] : (R = e => r(e.target.value), t[15] = r, t[16] = R);
    let z;
    t[17] === c ? z = t[18] : (z = c ? (0, Q.jsx)(d, {
        "aria-hidden": !0,
        className: `text-token-text-tertiary absolute end-0 top-1/2 h-3.5 w-3.5 -translate-y-1/2`
    }) : null, t[17] = c, t[18] = z);
    let B;
    t[19] !== b || t[20] !== A || t[21] !== T ? (B = b ? A ? T.formatMessage({
        id: `wham.codexEnvironmentPopover.searchEnvironmentsTooltip.envless`,
        defaultMessage: `Search environments and repos…`
    }) : T.formatMessage({
        id: `wham.codexEnvironmentPopover.searchEnvironmentsTooltip.envlessRepos`,
        defaultMessage: `Search repositories…`
    }) : T.formatMessage({
        id: `wham.codexEnvironmentPopover.searchEnvironmentsTooltip.environmentsOnly`,
        defaultMessage: `Search environments…`
    }), t[19] = b, t[20] = A, t[21] = T, t[22] = B) : B = t[22];
    let V;
    t[23] !== b || t[24] !== T ? (V = b ? T.formatMessage({
        id: `wham.codexEnvironmentPopover.searchEnvironmentsAria.envless`,
        defaultMessage: `Search environments and repos`
    }) : T.formatMessage({
        id: `wham.codexEnvironmentPopover.searchEnvironmentsAria.environmentsOnly`,
        defaultMessage: `Search environments`
    }), t[23] = b, t[24] = T, t[25] = V) : V = t[25];
    let H;
    t[26] !== ie || t[27] !== n || t[28] !== V || t[29] !== R || t[30] !== z || t[31] !== B ? (H = (0, Q.jsx)(ae, {
        ref: E,
        className: `border-token-border-default bg-primary hover:bg-primary focus-within:bg-primary focus-within:border-heavy mb-2 flex h-8 w-full items-center rounded-lg px-2.5 py-1.5 shadow-none focus-within:ring-0`,
        containerInputClassName: `w-full`,
        inputClassName: `bg-transparent pe-5 text-sm placeholder:text-token-text-tertiary`,
        type: `text`,
        autoComplete: `off`,
        name: `codex-environment-search`,
        value: n,
        onChange: R,
        onKeyDown: ie,
        suppressFocus: !0,
        insideContainerChildren: z,
        placeholder: B,
        ariaLabel: V
    }), t[26] = ie, t[27] = n, t[28] = V, t[29] = R, t[30] = z, t[31] = B, t[32] = H) : H = t[32];
    let U;
    t[33] === Symbol.for(`react.memo_cache_sentinel`) ? (U = (0, Q.jsx)(`div`, {
        className: `bg-token-border-default h-px w-full`
    }), t[33] = U) : U = t[33];
    let W;
    t[34] === H ? W = t[35] : (W = (0, Q.jsxs)(`div`, {
        className: `bg-primary flex-shrink-0 px-2 pt-2`,
        onPointerDown: Bt,
        children: [H, U]
    }), t[34] = H, t[35] = W);
    let ce;
    t[36] === A ? ce = t[37] : (ce = A && (0, Q.jsx)(Ye, {
        as: `div`,
        className: `text-token-text-tertiary pointer-events-none w-full text-sm`,
        label: (0, Q.jsx)(`div`, {
            className: `flex items-center gap-2`,
            children: (0, Q.jsx)(j, {
                id: `wham.codexEnvironmentPopover.envlessModeRepositories`,
                defaultMessage: `Environments`
            })
        })
    }), t[36] = A, t[37] = ce);
    let G;
    t[38] === ce ? G = t[39] : (G = (0, Q.jsx)(`div`, {
        className: `px-1.5 pt-1.5`,
        children: ce
    }), t[38] = ce, t[39] = G);
    let K;
    t[40] !== h || t[41] !== P || t[42] !== oe || t[43] !== O || t[44] !== A || t[45] !== te || t[46] !== ee || t[47] !== ne ? (K = ee ? (0, Q.jsx)(`div`, {
        className: `px-1.5`,
        children: (0, Q.jsx)(`div`, {
            className: `flex w-full items-center justify-center py-2`,
            children: (0, Q.jsx)(d, {
                className: `ms-2`
            })
        })
    }) : A ? P.length > 0 ? (0, Q.jsx)(`div`, {
        className: `px-1.5`,
        children: P.map(e => {
            let t = h === e.id;
            return (0, Q.jsx)(Ye, {
                as: `button`,
                ref: oe(e),
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
    }) : null, t[40] = h, t[41] = P, t[42] = oe, t[43] = O, t[44] = A, t[45] = te, t[46] = ee, t[47] = ne, t[48] = K) : K = t[48];
    let q;
    t[49] !== u || t[50] !== f || t[51] !== p ? (q = (0, Q.jsx)(Wt, {
        hasNextPage: f,
        fetchNextPage: u,
        isFetchingNextPage: p
    }), t[49] = u, t[50] = f, t[51] = p, t[52] = q) : q = t[52];
    let J;
    t[53] !== b || t[54] !== y || t[55] !== A || t[56] !== o || t[57] !== a || t[58] !== v || t[59] !== i || t[60] !== n ? (J = b ? (0, Q.jsx)(kt, {
        onSelectRepository: v,
        existingEnvironmentRepositoryIds: y,
        showRepositoriesHeader: A,
        search: n.trim().toLowerCase(),
        repositories: i,
        isLoading: a,
        isError: o
    }) : null, t[53] = b, t[54] = y, t[55] = A, t[56] = o, t[57] = a, t[58] = v, t[59] = i, t[60] = n, t[61] = J) : J = t[61];
    let le;
    t[62] !== G || t[63] !== K || t[64] !== q || t[65] !== J ? (le = (0, Q.jsxs)(`div`, {
        className: `flex min-h-0 flex-1 flex-col overflow-y-auto`,
        children: [G, K, q, J]
    }), t[62] = G, t[63] = K, t[64] = q, t[65] = J, t[66] = le) : le = t[66];
    let ue;
    t[67] === Symbol.for(`react.memo_cache_sentinel`) ? (ue = (0, Q.jsx)(`div`, {
        className: `bg-token-border-default h-px w-full`
    }), t[67] = ue) : ue = t[67];
    let de;
    t[68] !== _ || t[69] !== A || t[70] !== C || t[71] !== k || t[72] !== S || t[73] !== x ? (de = () => {
        if (x) {
            window.open(C, `_blank`, `noopener,noreferrer`), _();
            return
        }!A && S ? S() : k(C)
    }, t[68] = _, t[69] = A, t[70] = C, t[71] = k, t[72] = S, t[73] = x, t[74] = de) : de = t[74];
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
    return t[82] !== W || t[83] !== le || t[84] !== me || t[85] !== L ? (he = (0, Q.jsxs)(`div`, {
        className: `bg-primary text-token-text-primary flex max-h-[280px] w-80 flex-col overflow-hidden rounded-lg md:max-h-[360px]`,
        children: [L, W, le, ue, me]
    }), t[82] = W, t[83] = le, t[84] = me, t[85] = L, t[86] = he) : he = t[86], he
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
        children: n ? (0, Q.jsx)(d, {
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
    Gt = ne(), _(), Ce(), _e(), B(), k(), o(), Ne(), Ae(), Je(), _t(), Qe(), jt(), Pt(), nt(), at(), Oe(), ze(), f(), Tt(), K(), U(), q(), W(), se(), v(), Z = t(P()), N(), ee(), Q = A()
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
        return t[7] !== e || t[8] !== i ? (a = (0, $.jsx)(g, {
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
        return t[16] !== e || t[17] !== a ? (o = (0, $.jsx)(g, {
            label: e,
            children: a
        }), t[16] = e, t[17] = a, t[18] = o) : o = t[18], o
    }
    let _;
    return t[19] !== o || t[20] !== a || t[21] !== u || t[22] !== r || t[23] !== s || t[24] !== f || t[25] !== i ? (_ = (0, $.jsx)($.Fragment, {
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
    }), t[19] = o, t[20] = a, t[21] = u, t[22] = r, t[23] = s, t[24] = f, t[25] = i, t[26] = _) : _ = t[26], _
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
    t[2] !== P || t[3] !== a || t[4] !== te ? (ie = te ? a ?? null : {
        ...a ?? {},
        provider: P
    }, t[2] = P, t[3] = a, t[4] = te, t[5] = ie) : ie = t[5];
    let ae = ie,
        oe = P === `gitlab` ? D : O,
        I = P === `gitlab` ? w.isLoading : v,
        se = P === `gitlab` ? w.error : b,
        L = P === `gitlab` ? w.refetch : x,
        R;
    t[6] === P ? R = t[7] : (R = e => {
        e !== P && E(e)
    }, t[6] = P, t[7] = R);
    let z = R,
        B = !k && N == null;
    if (B && v) {
        let e;
        return t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, $.jsx)(Mt, {
            className: `h-9`
        }), t[8] = e) : e = t[8], e
    }
    if (B && b == null && !S) {
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
        return t[15] !== a || t[16] !== e ? (o = (0, $.jsx)(g, {
            label: e,
            children: a
        }), t[15] = a, t[16] = e, t[17] = o) : o = t[17], o
    }
    let V;
    t[18] !== P || t[19] !== m || t[20] !== r ? (V = P === `gitlab` ? () => m(`/codex/cloud/settings/environment/create?provider=gitlab`) : r, t[18] = P, t[19] = m, t[20] = r, t[21] = V) : V = t[21];
    let H = V,
        U;
    t[22] !== P || t[23] !== w.openConnectorModal || t[24] !== S || t[25] !== y ? (U = P === `gitlab` ? (0, $.jsxs)(n, {
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
    }), t[22] = P, t[23] = w.openConnectorModal, t[24] = S, t[25] = y, t[26] = U) : U = t[26];
    let W = U,
        ce;
    t[27] === p ? ce = t[28] : (ce = e => (0, $.jsx)(g, {
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
    }), t[27] = p, t[28] = ce);
    let G = ce,
        K;
    t[29] !== W || t[30] !== b || t[31] !== x || t[32] !== G ? (K = b ? G(x) : W, t[29] = W, t[30] = b, t[31] = x, t[32] = G, t[33] = K) : K = t[33];
    let q = K,
        J = oe || te,
        le;
    t[34] !== P || t[35] !== z || t[36] !== F ? (le = F ? (0, $.jsx)(Ve, {
        value: P,
        onChange: z,
        appearance: `segmented`,
        isCompact: !0
    }) : null, t[34] = P, t[35] = z, t[36] = F, t[37] = le) : le = t[37];
    let ue = le,
        de;
    return t[38] !== W || t[39] !== se || t[40] !== H || t[41] !== P || t[42] !== o || t[43] !== q || t[44] !== ae || t[45] !== k || t[46] !== I || t[47] !== s || t[48] !== N || t[49] !== ue || t[50] !== L || t[51] !== G || t[52] !== ne || t[53] !== J || t[54] !== i || t[55] !== F ? (de = (0, $.jsx)($.Fragment, {
        children: (0, $.jsx)(`div`, {
            className: `z-0 flex h-full w-full justify-between`,
            children: k || N != null ? (0, $.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [F && !J && ue, !J && I ? (0, $.jsx)(Mt, {
                    className: `h-9`
                }) : !J && se ? G(L) : J ? (0, $.jsx)(Rt, {
                    onCreateEnvironment: H,
                    showBranchSelector: i ?? !0,
                    allowRepositorySelection: P === `github` && (o ?? !0),
                    filters: ae,
                    openEnvironmentInNewWindow: s,
                    preserveSelectedEnvironment: ne,
                    headerContent: ue
                }) : W]
            }) : (0, $.jsx)(`div`, {
                className: `flex h-full items-center gap-2`,
                children: q
            })
        })
    }), t[38] = W, t[39] = se, t[40] = H, t[41] = P, t[42] = o, t[43] = q, t[44] = ae, t[45] = k, t[46] = I, t[47] = s, t[48] = N, t[49] = ue, t[50] = L, t[51] = G, t[52] = ne, t[53] = J, t[54] = i, t[55] = F, t[56] = de) : de = t[56], de
}
var Xt, Zt, $, Qt = e((() => {
    Xt = ne(), _(), Se(), u(), y(), Me(), Ne(), Be(), Kt(), Pt(), Oe(), Le(), Zt = t(P()), N(), ee(), $ = A()
}));
export {
    wt as a, vt as c, pt as d, _t as f, Je as g, Ue as h, Kt as i, yt as l, Qe as m, Qt as n, Tt as o, Ye as p, Rt as r, Ct as s, qt as t, ot as u
};
//# sourceMappingURL=e7a416e4-kji80r0k9y1jeb5v.js.map