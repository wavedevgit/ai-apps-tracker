import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    Mw as r,
    N1 as i,
    Rz as a,
    c7 as o,
    eE as s,
    jw as c,
    k8 as l,
    l7 as u,
    q1 as d,
    q5 as f,
    zz as p
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    Bn as m,
    Ln as h,
    Nn as g,
    O as _,
    Rn as v,
    Vn as y,
    s as b,
    wn as x,
    zn as ee
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    nUn as S,
    tUn as C
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    Ax as w,
    Gy as T,
    Wy as E,
    kx as D
} from "./30901919-ikyi1r55w2i02fom.js";
import {
    A as O,
    D as k,
    y as A
} from "./3acfc0b4-ihiniz7dl2i05u24.js";
import {
    S as j,
    b as M,
    d as N,
    l as P,
    s as te,
    v as F
} from "./4117f58d-1zbcrzsawo6n4z9t.js";

function I(e) {
    "use forget";
    let t = (0, H.c)(11),
        {
            fileId: r,
            onRestore: i
        } = e,
        a;
    t[0] === r ? a = t[1] : (a = () => j(r), t[0] = r, t[1] = a);
    let o = f(a),
        s;
    t[2] === r ? s = t[3] : (s = () => F(r), t[2] = r, t[3] = s);
    let c = f(s) || o?.canRestore !== !0,
        l;
    t[4] !== i || t[5] !== o ? (l = () => {
        o != null && i(o.id)
    }, t[4] = i, t[5] = o, t[6] = l) : l = t[6];
    let u;
    t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (u = (0, W.jsx)(g, {
        ...G.restoreWritingBlockVersion
    }), t[7] = u) : u = t[7];
    let d;
    return t[8] !== c || t[9] !== l ? (d = (0, W.jsx)(n, {
        type: `button`,
        color: `primary`,
        size: `small`,
        icon: E,
        disabled: c,
        onClick: l,
        children: u
    }), t[8] = c, t[9] = l, t[10] = d) : d = t[10], d
}

function L(e) {
    "use forget";
    let t = (0, H.c)(29),
        {
            children: n,
            constrainContent: r,
            fileId: i,
            onClose: a,
            onRestoreEntry: s,
            overlayTopInset: c,
            variant: l
        } = e,
        u = c === void 0 ? `content` : c,
        d = l === void 0 ? `docked` : l,
        p;
    t[0] === i ? p = t[1] : (p = () => i != null && P(i), t[0] = i, t[1] = p);
    let m = f(p);
    if (d === `overlay`) {
        let e;
        t[2] === n ? e = t[3] : (e = (0, W.jsx)(`div`, {
            className: `relative flex min-h-0 min-w-0 flex-1 flex-col overflow-y-auto`,
            children: n
        }), t[2] = n, t[3] = e);
        let r;
        t[4] !== i || t[5] !== m || t[6] !== a || t[7] !== s || t[8] !== u ? (r = i != null && (0, W.jsx)(`div`, {
            className: o(`absolute end-2 bottom-2 z-30 w-[calc(100%-1rem)] max-w-[280px] min-w-0 transition-transform duration-300 ease-in-out motion-reduce:transition-none`, u === `preview-header` ? `top-[61px]` : `top-2`, m ? `translate-x-0` : `pointer-events-none translate-x-[calc(100%+0.5rem)] rtl:-translate-x-[calc(100%+0.5rem)]`),
            children: (0, W.jsx)(R, {
                fileId: i,
                onClose: a,
                onRestoreEntry: s,
                variant: `overlay`
            })
        }), t[4] = i, t[5] = m, t[6] = a, t[7] = s, t[8] = u, t[9] = r) : r = t[9];
        let c;
        return t[10] !== e || t[11] !== r ? (c = (0, W.jsxs)(`div`, {
            className: `relative flex h-full min-h-0 min-w-0 flex-1 overflow-hidden`,
            "data-testid": `artifact-viewer-version-history-layout`,
            children: [e, r]
        }), t[10] = e, t[11] = r, t[12] = c) : c = t[12], c
    }
    let h = m ? `grid-cols-[minmax(0,1fr)_minmax(0,85vw)] sm:grid-cols-[minmax(0,1fr)_320px]` : `grid-cols-[minmax(0,1fr)_0px]`,
        g;
    t[13] === h ? g = t[14] : (g = o(`relative grid h-full min-h-0 min-w-0 flex-1 overflow-hidden transition-[grid-template-columns] duration-200 ease-out`, h), t[13] = h, t[14] = g);
    let _ = r ? `h-full overflow-hidden` : `overflow-y-auto`,
        v;
    t[15] === _ ? v = t[16] : (v = o(`relative flex min-h-0 min-w-0 flex-col`, _), t[15] = _, t[16] = v);
    let y;
    t[17] !== n || t[18] !== v ? (y = (0, W.jsx)(`div`, {
        className: v,
        children: n
    }), t[17] = n, t[18] = v, t[19] = y) : y = t[19];
    let b;
    t[20] !== i || t[21] !== m || t[22] !== a || t[23] !== s ? (b = i != null && (0, W.jsx)(`div`, {
        className: o(`min-h-0 min-w-0 transition-opacity duration-200 ease-out`, m ? `opacity-100` : `pointer-events-none opacity-0`),
        children: (0, W.jsx)(R, {
            fileId: i,
            onClose: a,
            onRestoreEntry: s
        })
    }), t[20] = i, t[21] = m, t[22] = a, t[23] = s, t[24] = b) : b = t[24];
    let x;
    return t[25] !== g || t[26] !== y || t[27] !== b ? (x = (0, W.jsxs)(`div`, {
        className: g,
        "data-testid": `artifact-viewer-version-history-layout`,
        children: [y, b]
    }), t[25] = g, t[26] = y, t[27] = b, t[28] = x) : x = t[28], x
}

function R(e) {
    "use forget";
    let t = (0, H.c)(74),
        {
            fileId: n,
            onClose: r,
            onRestoreEntry: i,
            variant: a
        } = e,
        s = a === void 0 ? `docked` : a,
        l = ee(),
        u;
    t[0] === n ? u = t[1] : (u = () => te(n), t[0] = n, t[1] = u);
    let d = f(u),
        p;
    t[2] === n ? p = t[3] : (p = () => P(n), t[2] = n, t[3] = p);
    let m = f(p),
        h;
    t[4] === n ? h = t[5] : (h = () => F(n), t[4] = n, t[5] = h);
    let g = f(h),
        v;
    t[6] === n ? v = t[7] : (v = () => j(n), t[6] = n, t[7] = v);
    let y = f(v),
        b = f(ie),
        x = f(re),
        S;
    if (t[8] !== x || t[9] !== d) {
        let e;
        t[11] === x ? e = t[12] : (e = e => (e.action === `edit` || e.action === `create`) && e.actor === `user` && !!e.actorId?.trim() && (e.action === `create` || e.actorId !== x), t[11] = x, t[12] = e), S = d.some(e), t[8] = x, t[9] = d, t[10] = S
    } else S = t[10];
    let C = S,
        w = b ?? ``,
        T = x ?? ``,
        E;
    t[13] !== n || t[14] !== w || t[15] !== T ? (E = k({
        accountId: w,
        accountUserId: T,
        libraryFileId: n,
        resourceKind: `file`
    }), t[13] = n, t[14] = w, t[15] = T, t[16] = E) : E = t[16];
    let D = m && !!b && !!x && C,
        O;
    t[17] !== D || t[18] !== E ? (O = {
        ...E,
        enabled: D
    }, t[17] = D, t[18] = E, t[19] = O) : O = t[19];
    let {
        data: N
    } = _(O), I = N?.resource.resource_type === `library_file` && N.resource.resource_id === n && N.viewer.principal.principal_type === `user` && N.viewer.principal.principal_id === x && N.owner.principal.principal_type === `user` ? N : void 0, L = I != null && !!x && I.owner.principal.principal_id === x, R;
    t[20] === n ? R = t[21] : (R = A(n), t[20] = n, t[21] = R);
    let ae = m && C && L,
        V;
    t[22] !== R || t[23] !== ae ? (V = {
        ...R,
        enabled: ae
    }, t[22] = R, t[23] = ae, t[24] = V) : V = t[24];
    let {
        data: K
    } = _(V), oe;
    if (t[25] !== x || t[26] !== n || t[27] !== L || t[28] !== K || t[29] !== I) {
        let e = L && K?.resource.resource_type === `library_file` && K.resource.resource_id === n && K.owner.principal_type === `user` && K.owner.principal_id === x ? K.shares : [],
            r;
        t[31] === I ? r = t[32] : (r = (I == null ? [] : [I.owner, I.viewer]).flatMap(ne), t[31] = I, t[32] = r), oe = new Map([...r, ...e.flatMap(z)]), t[25] = x, t[26] = n, t[27] = L, t[28] = K, t[29] = I, t[30] = oe
    } else oe = t[30];
    let se = oe,
        q = y?.id,
        ce = (0, U.useRef)(null),
        le;
    t[33] === l ? le = t[34] : (le = l.formatMessage(G.restoreVersion), t[33] = l, t[34] = le);
    let ue = le,
        de;
    t[35] === l ? de = t[36] : (de = l.formatMessage(G.versionActions), t[35] = l, t[36] = de);
    let fe = de,
        pe;
    t[37] === l ? pe = t[38] : (pe = l.formatMessage(G.versionHistory), t[37] = l, t[38] = pe);
    let J = pe,
        me, he;
    t[39] !== m || t[40] !== q ? (me = () => {
        if (!m || q == null) return;
        let e = ce.current,
            t = e?.querySelector(`[data-testid="artifact-viewer-version-row-${q}"]`);
        if (e == null || t == null) return;
        let n = e.getBoundingClientRect(),
            r = t.getBoundingClientRect();
        r.top < n.top ? e.scrollTop -= n.top - r.top : r.bottom > n.bottom && (e.scrollTop += r.bottom - n.bottom)
    }, he = [m, q], t[39] = m, t[40] = q, t[41] = me, t[42] = he) : (me = t[41], he = t[42]), (0, U.useEffect)(me, he);
    let ge = !m,
        _e = s === `overlay` ? `rounded-2xl border` : `border-s transition-opacity duration-200 ease-out`,
        ve = s === `docked` && (m ? `opacity-100` : `pointer-events-none opacity-0`),
        Y;
    t[43] !== _e || t[44] !== ve ? (Y = o(`border-token-border-light bg-token-bg-primary shadow-elevation-01 flex h-full w-full min-w-0 flex-col overflow-hidden`, _e, ve), t[43] = _e, t[44] = ve, t[45] = Y) : Y = t[45];
    let ye = !m,
        X;
    t[46] === J ? X = t[47] : (X = (0, W.jsx)(`div`, {
        className: `text-token-text-secondary text-sm font-medium`,
        children: J
    }), t[46] = J, t[47] = X);
    let Z;
    t[48] !== l || t[49] !== r ? (Z = r == null ? null : (0, W.jsx)(c, {
        "aria-label": l.formatMessage(G.closeVersionHistory),
        className: `absolute end-1 top-1/2 h-8! w-8! shrink-0 -translate-y-1/2`,
        iconSize: `sm`,
        onClick: r,
        radius: `full`
    }), t[48] = l, t[49] = r, t[50] = Z) : Z = t[50];
    let Q;
    t[51] !== X || t[52] !== Z ? (Q = (0, W.jsxs)(`div`, {
        className: `border-token-border-light relative flex items-center gap-2 border-b px-5 py-2.5`,
        children: [X, Z]
    }), t[51] = X, t[52] = Z, t[53] = Q) : Q = t[53];
    let $;
    t[54] !== x || t[55] !== se || t[56] !== d || t[57] !== n || t[58] !== L || t[59] !== m || t[60] !== g || t[61] !== i || t[62] !== ue || t[63] !== fe || t[64] !== q || t[65] !== I ? ($ = m && (0, W.jsx)(`div`, {
        ref: ce,
        className: `min-h-0 flex-1 overflow-y-auto px-5 py-4`,
        children: (0, W.jsx)(`ol`, {
            className: `space-y-0`,
            children: d.map((e, t) => (0, W.jsx)(B, {
                entry: e,
                actorIdentity: (e.action === `edit` || e.action === `create`) && e.actor === `user` && e.actorId != null && (e.action === `create` || e.actorId !== x) ? L && (e.actorEmail?.trim() || e.actorDisplayName?.trim()) || se.get(e.actorId) : void 0,
                showActorAttribution: e.actor === `user` && !!e.actorId?.trim() && (e.action === `create` ? I != null && e.actorId !== I.owner.principal.principal_id : e.action === `edit` && !!x && e.actorId !== x),
                isSelected: e.id === q,
                isLast: t === d.length - 1,
                isRestoring: g,
                restoreActionLabel: ue,
                rowActionsLabel: fe,
                onSelect: () => M({
                    entryId: e.id,
                    fileId: n
                }),
                onRestore: () => i(e.id)
            }, e.id))
        })
    }), t[54] = x, t[55] = se, t[56] = d, t[57] = n, t[58] = L, t[59] = m, t[60] = g, t[61] = i, t[62] = ue, t[63] = fe, t[64] = q, t[65] = I, t[66] = $) : $ = t[66];
    let be;
    return t[67] !== ge || t[68] !== Y || t[69] !== ye || t[70] !== Q || t[71] !== $ || t[72] !== J ? (be = (0, W.jsxs)(`aside`, {
        "aria-hidden": ge,
        "aria-label": J,
        className: Y,
        "data-testid": `artifact-viewer-version-history-panel`,
        inert: ye,
        children: [Q, $]
    }), t[67] = ge, t[68] = Y, t[69] = ye, t[70] = Q, t[71] = $, t[72] = J, t[73] = be) : be = t[73], be
}

function z(e) {
    if (e.recipient.recipient_type !== `principal` || (e.recipient.principal_type ?? `user`) !== `user`) return [];
    let t = e.recipient_email?.trim() || e.recipient_display_name?.trim();
    return t ? [
        [e.recipient.principal_id, t]
    ] : []
}

function ne(e) {
    let t = e.email?.trim() || e.display_name?.trim();
    return t ? [
        [e.principal.principal_id, t]
    ] : []
}

function re() {
    return i()?.normalizedAccountUserId
}

function ie() {
    return i()?.id
}

function B(e) {
    "use forget";
    let t = (0, H.c)(64),
        {
            entry: n,
            actorIdentity: r,
            showActorAttribution: i,
            isSelected: a,
            isLast: s,
            isRestoring: c,
            restoreActionLabel: l,
            rowActionsLabel: u,
            onSelect: d,
            onRestore: f
        } = e,
        p = !c && !n.isPending,
        m = i && !n.isCurrent,
        h;
    t[0] !== r || t[1] !== n.action ? (h = n.action === `create` ? r == null ? (0, W.jsx)(g, {
        ...G.createdByCollaborator
    }) : (0, W.jsx)(g, {
        ...G.createdBy,
        values: {
            identity: r
        }
    }) : r == null ? (0, W.jsx)(g, {
        ...G.editedByCollaborator
    }) : (0, W.jsx)(g, {
        ...G.editedBy,
        values: {
            identity: r
        }
    }), t[0] = r, t[1] = n.action, t[2] = h) : h = t[2];
    let _ = h,
        v;
    t[3] === s ? v = t[4] : (v = !s && (0, W.jsx)(`span`, {
        "aria-hidden": `true`,
        className: `pointer-events-none absolute start-0 top-4 -bottom-2 flex w-2.5 justify-center`,
        children: (0, W.jsx)(`span`, {
            className: `bg-token-border-light w-px`
        })
    }), t[3] = s, t[4] = v);
    let y = n.isCurrent ? `border-token-text-secondary bg-token-text-secondary` : `border-token-border-heavy bg-token-bg-primary`,
        b;
    t[5] === y ? b = t[6] : (b = o(`pointer-events-none absolute start-0 top-3 h-2.5 w-2.5 rounded-full border`, y), t[5] = y, t[6] = b);
    let x;
    t[7] === b ? x = t[8] : (x = (0, W.jsx)(`span`, {
        "aria-hidden": `true`,
        className: b
    }), t[7] = b, t[8] = x);
    let ee = a ? `bg-token-bg-secondary/35` : p ? `hover:bg-token-bg-secondary/25 focus-within:bg-token-bg-secondary/25` : null,
        S;
    t[9] === ee ? S = t[10] : (S = o(`-ms-8 -me-2 flex items-start gap-2 rounded-xl py-1.5 ps-8 pe-2 transition-colors`, ee), t[9] = ee, t[10] = S);
    let C = !p,
        w = !p && `cursor-default`,
        T;
    t[11] === w ? T = t[12] : (T = o(`flex min-w-0 flex-1 items-start text-start`, w), t[11] = w, t[12] = T);
    let E = `artifact-viewer-version-row-${n.id}`,
        D = n.isPending ? `whitespace-nowrap` : `truncate`,
        O;
    t[13] === D ? O = t[14] : (O = o(`text-token-text-primary text-sm leading-5 font-medium`, D), t[13] = D, t[14] = O);
    let k;
    t[15] === n ? k = t[16] : (k = (0, W.jsx)(ae, {
        entry: n
    }), t[15] = n, t[16] = k);
    let A;
    t[17] !== O || t[18] !== k ? (A = (0, W.jsx)(`span`, {
        className: O,
        children: k
    }), t[17] = O, t[18] = k, t[19] = A) : A = t[19];
    let j;
    t[20] === n.badge ? j = t[21] : (j = n.badge && (0, W.jsx)(`span`, {
        className: `bg-token-interactive-bg-accent-muted-context text-token-interactive-label-accent-default rounded-full px-1.5 py-0.5 text-xs leading-4 font-medium`,
        children: n.badge
    }), t[20] = n.badge, t[21] = j);
    let M;
    t[22] !== A || t[23] !== j ? (M = (0, W.jsxs)(`div`, {
        className: `flex items-center gap-2`,
        children: [A, j]
    }), t[22] = A, t[23] = j, t[24] = M) : M = t[24];
    let N = m && `truncate`,
        P;
    t[25] === N ? P = t[26] : (P = o(`text-token-text-tertiary mt-1 text-xs leading-4`, N), t[25] = N, t[26] = P);
    let te = m ? _ : n.label,
        F;
    t[27] !== P || t[28] !== te ? (F = (0, W.jsx)(`div`, {
        className: P,
        children: te
    }), t[27] = P, t[28] = te, t[29] = F) : F = t[29];
    let I;
    t[30] !== _ || t[31] !== n.isCurrent || t[32] !== i ? (I = i && n.isCurrent && (0, W.jsx)(`div`, {
        className: `text-token-text-tertiary mt-1 truncate text-xs leading-4`,
        children: _
    }), t[30] = _, t[31] = n.isCurrent, t[32] = i, t[33] = I) : I = t[33];
    let L;
    t[34] !== n.reason || t[35] !== m ? (L = m && n.reason && (0, W.jsx)(`div`, {
        className: `text-token-text-tertiary mt-1 text-xs leading-4`,
        children: n.reason
    }), t[34] = n.reason, t[35] = m, t[36] = L) : L = t[36];
    let R;
    t[37] !== M || t[38] !== F || t[39] !== I || t[40] !== L ? (R = (0, W.jsxs)(`div`, {
        className: `min-w-0 flex-1`,
        children: [M, F, I, L]
    }), t[37] = M, t[38] = F, t[39] = I, t[40] = L, t[41] = R) : R = t[41];
    let z;
    t[42] !== d || t[43] !== T || t[44] !== E || t[45] !== R || t[46] !== C ? (z = (0, W.jsx)(`button`, {
        type: `button`,
        onClick: d,
        disabled: C,
        className: T,
        "data-testid": E,
        children: R
    }), t[42] = d, t[43] = T, t[44] = E, t[45] = R, t[46] = C, t[47] = z) : z = t[47];
    let ne = !!n.canRestore && !c,
        re = n.id,
        ie = !!n.isPending,
        B;
    t[48] !== n.id || t[49] !== c || t[50] !== f || t[51] !== l || t[52] !== u || t[53] !== ne || t[54] !== ie ? (B = (0, W.jsx)(V, {
        canRestore: ne,
        entryId: re,
        isPending: ie,
        isRestoring: c,
        restoreActionLabel: l,
        rowActionsLabel: u,
        onRestore: f
    }), t[48] = n.id, t[49] = c, t[50] = f, t[51] = l, t[52] = u, t[53] = ne, t[54] = ie, t[55] = B) : B = t[55];
    let U;
    t[56] !== z || t[57] !== B || t[58] !== S ? (U = (0, W.jsxs)(`div`, {
        className: S,
        children: [z, B]
    }), t[56] = z, t[57] = B, t[58] = S, t[59] = U) : U = t[59];
    let K;
    return t[60] !== v || t[61] !== U || t[62] !== x ? (K = (0, W.jsxs)(`li`, {
        className: `group relative ps-6 pb-5 last:pb-0`,
        children: [v, x, U]
    }), t[60] = v, t[61] = U, t[62] = x, t[63] = K) : K = t[63], K
}

function ae(e) {
    "use forget";
    let t = (0, H.c)(1),
        {
            entry: n
        } = e;
    if (n.isRestorePending) {
        let e;
        return t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, W.jsx)(g, {
            ...G.restorePendingTimestampLabel
        }), t[0] = e) : e = t[0], e
    }
    return n.timestamp
}

function V(e) {
    "use forget";
    let t = (0, H.c)(20),
        {
            canRestore: n,
            entryId: r,
            isPending: i,
            isRestoring: s,
            restoreActionLabel: c,
            rowActionsLabel: l,
            onRestore: u
        } = e;
    if (i) {
        let e = `artifact-viewer-version-row-loading-${r}`,
            n;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, W.jsx)(a, {
            className: `text-token-text-tertiary h-3.5 w-3.5`
        }), t[0] = n) : n = t[0];
        let i;
        return t[1] === e ? i = t[2] : (i = (0, W.jsx)(`div`, {
            className: `flex h-7 w-7 shrink-0 items-center justify-center self-center`,
            "data-testid": e,
            children: n
        }), t[1] = e, t[2] = i), i
    }
    if (s) {
        let e;
        return t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, W.jsx)(`div`, {
            className: `h-7 w-7 shrink-0 self-center`
        }), t[3] = e) : e = t[3], e
    }
    let d;
    t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (d = o(`keyboard-focused:focus-ring flex h-7 w-7 shrink-0 self-center items-center justify-center rounded-full border-0 bg-transparent p-0 transition-opacity`, `opacity-0 group-focus-within:opacity-100 group-hover:opacity-100 focus:opacity-100`), t[4] = d) : d = t[4];
    let f = `artifact-viewer-version-row-actions-${r}`,
        p;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (p = (0, W.jsx)(D, {
        "aria-hidden": `true`,
        className: `icon text-token-text-secondary`
    }), t[5] = p) : p = t[5];
    let m;
    t[6] === l ? m = t[7] : (m = (0, W.jsx)(`span`, {
        className: `sr-only`,
        children: l
    }), t[6] = l, t[7] = m);
    let h;
    t[8] !== f || t[9] !== m ? (h = (0, W.jsxs)(`button`, {
        type: `button`,
        className: d,
        "data-testid": f,
        children: [p, m]
    }), t[8] = f, t[9] = m, t[10] = h) : h = t[10];
    let g = h,
        _;
    t[11] === g ? _ = t[12] : (_ = (0, W.jsx)(C.BasicTrigger, {
        asChild: !0,
        children: g
    }), t[11] = g, t[12] = _);
    let v = !n,
        y;
    t[13] !== u || t[14] !== c || t[15] !== v ? (y = (0, W.jsx)(C.Portal, {
        children: (0, W.jsx)(C.Content, {
            align: `end`,
            size: `small`,
            children: (0, W.jsx)(C.Item, {
                icon: E,
                disabled: v,
                onClick: u,
                children: c
            })
        })
    }), t[13] = u, t[14] = c, t[15] = v, t[16] = y) : y = t[16];
    let b;
    return t[17] !== _ || t[18] !== y ? (b = (0, W.jsxs)(C.Root, {
        children: [_, y]
    }), t[17] = _, t[18] = y, t[19] = b) : b = t[19], b
}
var H, U, W, G, K = e((() => {
    H = x(), s(), S(), r(), T(), w(), N(), O(), l(), p(), d(), b(), u(), U = t(y()), v(), W = m(), G = h({
        createdBy: {
            id: `recall.file_version_history.created_by`,
            defaultMessage: `Created by {identity}`
        },
        createdByCollaborator: {
            id: `recall.file_version_history.created_by_collaborator`,
            defaultMessage: `Created by a collaborator`
        },
        editedBy: {
            id: `recall.file_version_history.edited_by`,
            defaultMessage: `Edited by {identity}`
        },
        editedByCollaborator: {
            id: `recall.file_version_history.edited_by_collaborator`,
            defaultMessage: `Edited by a collaborator`
        },
        restoreVersion: {
            id: `recall.file_version_history.restore`,
            defaultMessage: `Restore this version`
        },
        restoreWritingBlockVersion: {
            id: `recall.artifact_writing_block.version_history.restore`,
            defaultMessage: `Restore this version`
        },
        restorePendingTimestampLabel: {
            id: `recall.file_version_history.timestamp.restore_pending`,
            defaultMessage: `Restoring...`
        },
        versionActions: {
            id: `recall.file_version_history.version_actions`,
            defaultMessage: `Version actions`
        },
        versionHistory: {
            id: `recall.file_version_history.title`,
            defaultMessage: `Version history`
        },
        closeVersionHistory: {
            id: `recall.file_version_history.close`,
            defaultMessage: `Close version history`
        }
    })
}));
export {
    K as i, R as n, I as r, L as t
};
//# sourceMappingURL=0e8433b5-odmu6bh1eyj7x59i.js.map