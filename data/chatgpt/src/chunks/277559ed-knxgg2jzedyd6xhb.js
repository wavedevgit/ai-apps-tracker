import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $7 as n,
    $T as r,
    A8 as i,
    Aq as a,
    Art as o,
    B0 as s,
    CQ as c,
    Da as l,
    GJ as u,
    J5 as d,
    K0 as f,
    KJ as p,
    Lnt as m,
    MZ as h,
    Mtt as g,
    Ott as _,
    PZ as v,
    QJ as y,
    QZ as b,
    T1 as x,
    TX as S,
    Y7 as C,
    ZG as w,
    _rt as T,
    al as E,
    ast as D,
    dC as O,
    dY as k,
    eE as A,
    eY as j,
    fC as M,
    gF as N,
    grt as P,
    jrt as F,
    ka as ee,
    krt as I,
    l7 as L,
    lQ as te,
    ost as ne,
    ptt as R,
    sY as z,
    tK as B,
    tl as V,
    u7 as re,
    urt as ie,
    vF as ae,
    w1 as H,
    wQ as oe,
    wq as se,
    znt as ce
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    Bn as le,
    N as ue,
    Rn as de,
    Vn as U,
    s as fe,
    wn as W,
    zn as G
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    DC as pe,
    FHn as me,
    GN as he,
    Hft as ge,
    IHn as _e,
    JN as ve,
    Jft as ye,
    LHn as K,
    LIn as be,
    MHn as xe,
    OBt as Se,
    QHn as Ce,
    Qdt as we,
    Qpt as q,
    RHn as Te,
    SUn as Ee,
    Stn as De,
    XIn as Oe,
    XS as ke,
    Xdt as Ae,
    YN as je,
    Ypt as J,
    ZS as Me,
    _T as Ne,
    _pt as Pe,
    aS as Fe,
    bUn as Y,
    btn as Ie,
    c5t as Le,
    dht as Re,
    dnn as ze,
    emt as Be,
    f5t as Ve,
    fS as He,
    gpt as Ue,
    jC as We,
    jHn as Ge,
    kBt as Ke,
    l5t as qe,
    lht as Je,
    lnn as Ye,
    nUn as Xe,
    o5t as Ze,
    pnn as Qe,
    qN as $e,
    sS as et,
    tUn as tt,
    tpt as nt,
    u5t as rt,
    vT as it,
    vpt as at,
    xUn as ot,
    zHn as st
} from "./conversation-small-m7dgsxtvvivh3e6t.js";
import {
    $h as ct,
    Bh as lt,
    Ch as ut,
    Hh as dt,
    Kx as ft,
    Sh as pt,
    Vh as mt,
    eg as ht,
    ng as X,
    ny as gt,
    qx as _t,
    ry as vt,
    tg as yt,
    zh as bt
} from "./30901919-lc79rizhhepnsl3q.js";
import {
    $r as xt,
    Dx as St,
    Ex as Ct,
    Ji as wt,
    Tx as Tt,
    Xi as Et,
    Zi as Dt,
    cd as Ot,
    ei as kt,
    qi as At,
    ud as jt
} from "./8b34dbc2-ik628tlti8ozm9vq.js";
import {
    c as Mt,
    l as Nt,
    r as Pt,
    t as Ft
} from "./24fd10e2-fn7fbbu5p3fnvh0w.js";
import {
    n as It,
    t as Lt
} from "./b5901a24-lf9tyby1b7iurr0s.js";
import {
    a as Rt,
    c as zt
} from "./0e629c03-iinfxeg8ewwglw7m.js";
import {
    a as Bt,
    c as Vt,
    d as Ht,
    f as Ut,
    i as Wt,
    l as Gt,
    n as Kt,
    r as qt,
    s as Jt,
    t as Yt,
    u as Xt
} from "./bb871603-d5azeh5kysaqe4on.js";
import {
    n as Zt,
    t as Qt
} from "./e145c156-etfo21o1u424bls4.js";
import {
    n as $t,
    r as en,
    t as tn
} from "./a81eda00-fzi606un66ipjon1.js";
import {
    n as nn,
    t as rn
} from "./4b38d6b2-f2u1mh7ks7cx564m.js";

function an({
    category: e,
    context: t,
    error: n,
    messages: r
}) {
    let i = t?.initialBusinessData,
        a = t?.entityCategory ?? t?.category,
        o = i != null && r.some(e => e.metadata?.content_references?.some(e => {
            if (e.type !== `entity_metadata` || !q(e.entity_type)) return !1;
            let n = e.entity_data,
                r = n?.id;
            if (r === i.id) return !0;
            let a = (e.name ?? (n != null && `name` in n ? n.name : void 0))?.trim().toLowerCase();
            return a ? a === i.name.trim().toLowerCase() || a === t?.entityName?.trim().toLowerCase() : r == null
        }));
    return !n && !o && q(e) && q(a) && i != null && t?.entityId === i.id ? i : void 0
}

function on({
    business: e,
    category: t,
    includeImage: n,
    resolvedImageUrl: r,
    mapUrl: i,
    messageId: a
}) {
    let o = [],
        s = ``;
    if (n) {
        let n = [e.name, t.replaceAll(`_`, ` `), e.address].filter(Boolean).join(`, `),
            i = `image_group${JSON.stringify({layout:`full_width`,aspect_ratio:`1:1`,query:[n],num_per_query:1})}`;
        o.push({
            type: `image_group`,
            matched_text: i,
            start_idx: 0,
            end_idx: oe(i).length,
            refs: [],
            images: [r ? {
                image_search_query: n,
                image_result: {
                    url: r,
                    content_url: r,
                    thumbnail_url: r,
                    title: e.name,
                    content_size: {
                        width: 0,
                        height: 0
                    },
                    thumbnail_size: {
                        width: 0,
                        height: 0
                    }
                }
            } : {
                image_search_query: n
            }],
            layout: `full_width`,
            aspect_ratio: `1:1`
        }), s = `${i}\n`
    }
    let c = `entity_metadata${JSON.stringify([`local_business`,e.name,0,{location:e.address?[e.address]:[]}])}`,
        l = oe(s).length;
    return o.push({
        type: `entity_metadata`,
        matched_text: c,
        start_idx: l,
        end_idx: l + oe(c).length,
        refs: [],
        entity_type: `local_business`,
        name: e.name,
        entity_data: e,
        metadata: {
            map_url: i,
            is_loading: !1
        }
    }), {
        id: a,
        author: {
            role: _.Assistant
        },
        content: {
            content_type: R.Text,
            parts: [`${s}${c}`]
        },
        metadata: {
            content_references: o
        }
    }
}
var sn = e((() => {
    g(), J(), S(), c()
}));

function cn(e) {
    return typeof e == `string` && e.trim().length > 0 ? e : null
}

function ln(e) {
    "use forget";
    let t = (0, un.c)(25),
        {
            extraParams: n,
            sensitiveValuesHidden: r
        } = e,
        i = r !== void 0 && r,
        a = (0, dn.useContext)(Lt),
        o, s;
    if (t[0] !== n?.amount_label || t[1] !== n?.displayTitle || t[2] !== n?.merchant_name || t[3] !== n?.sensitive_values_hidden || t[4] !== a?.sensitiveValuesHidden || t[5] !== i) {
        let e = en(n?.sensitive_values_hidden, a?.sensitiveValuesHidden ?? i),
            r;
        t[8] !== n?.displayTitle || t[9] !== n?.merchant_name ? (r = cn(n?.displayTitle) ?? cn(n?.merchant_name), t[8] = n?.displayTitle, t[9] = n?.merchant_name, t[10] = r) : r = t[10], o = r, s = tn(n?.amount_label, e) ?? null, t[0] = n?.amount_label, t[1] = n?.displayTitle, t[2] = n?.merchant_name, t[3] = n?.sensitive_values_hidden, t[4] = a?.sensitiveValuesHidden, t[5] = i, t[6] = o, t[7] = s
    } else o = t[6], s = t[7];
    let c = s;
    if (o == null && c == null) return null;
    let l = n?.logo_url,
        u;
    t[11] === l ? u = t[12] : (u = cn(l), t[11] = l, t[12] = u);
    let d = u,
        f;
    t[13] === d ? f = t[14] : (f = d == null ? (0, Z.jsx)(`div`, {
        className: `bg-token-bg-secondary flex size-10 shrink-0 items-center justify-center rounded-full sm:size-8`,
        children: (0, Z.jsx)(gt, {
            "aria-hidden": `true`,
            className: `text-token-text-primary size-5`
        })
    }) : (0, Z.jsx)(`img`, {
        src: d,
        alt: ``,
        className: `size-10 shrink-0 rounded-full object-contain sm:size-8`
    }), t[13] = d, t[14] = f);
    let p;
    t[15] === o ? p = t[16] : (p = o != null && (0, Z.jsx)(`div`, {
        className: `text-token-text-primary truncate text-lg leading-6 font-semibold`,
        children: o
    }), t[15] = o, t[16] = p);
    let m;
    t[17] === c ? m = t[18] : (m = c != null && (0, Z.jsx)(`div`, {
        className: `text-token-text-primary truncate text-base`,
        children: c
    }), t[17] = c, t[18] = m);
    let h;
    t[19] !== p || t[20] !== m ? (h = (0, Z.jsxs)(`div`, {
        className: `min-w-0 flex-1`,
        children: [p, m]
    }), t[19] = p, t[20] = m, t[21] = h) : h = t[21];
    let g;
    return t[22] !== f || t[23] !== h ? (g = (0, Z.jsx)(`div`, {
        className: `py-4`,
        children: (0, Z.jsxs)(`div`, {
            className: `flex h-12 w-full items-center gap-3`,
            children: [f, h]
        })
    }), t[22] = f, t[23] = h, t[24] = g) : g = t[24], g
}
var un, dn, Z, fn = e((() => {
    un = W(), vt(), It(), dn = t(U()), $t(), Z = le()
}));

function pn(e, t, n, r) {
    return {
        business: e,
        notes: t
    }
}
var mn = e((() => {}));

function hn(e) {
    "use forget";
    let t = (0, vn.c)(67),
        {
            business: n,
            category: r,
            conversation: i,
            messageId: a,
            messages: o,
            sidebar: s
        } = e,
        c = G(),
        l;
    t[0] !== n || t[1] !== c.locale ? (l = () => pn(n, void 0, c.locale, Be()).business, t[0] = n, t[1] = c.locale, t[2] = l) : l = t[2];
    let f = d(l),
        p = at(),
        m = p?.entityCategory ?? p?.category,
        h;
    t[3] === o ? h = t[4] : (h = o.some(gn), t[3] = o, t[4] = h);
    let g = h,
        _;
    t[5] !== n || t[6] !== r || t[7] !== p?.initialBusinessImageUrl || t[8] !== g || t[9] !== s?.imageThumbnailUrl || t[10] !== m ? (_ = !g && Bt(r) && Bt(m) ? Ae(n, s?.imageThumbnailUrl ?? p?.initialBusinessImageUrl) : null, t[5] = n, t[6] = r, t[7] = p?.initialBusinessImageUrl, t[8] = g, t[9] = s?.imageThumbnailUrl, t[10] = m, t[11] = _) : _ = t[11];
    let v = _,
        y;
    t[12] === v ? y = t[13] : (y = () => v != null && x()?.is_adult === !0, t[12] = v, t[13] = y);
    let b = d(y),
        S;
    t[14] === a ? S = t[15] : (S = e => u.getConversationTurnIndex(e, a), t[14] = a, t[15] = S);
    let C = k(i.id, S),
        w, T, E, D, O, A, j, M, N, P, F, ee, I, L, te;
    if (t[16] !== r || t[17] !== p || t[18] !== f || t[19] !== a || t[20] !== C || t[21] !== b) {
        F = Symbol.for(`react.early_return_sentinel`);
        bb0: {
            if (E = on({
                    business: f,
                    category: r,
                    includeImage: b,
                    mapUrl: rn(f),
                    messageId: a
                }), p == null || E.content.content_type !== R.Text) {
                F = null;
                break bb0
            }
            T = Ue,
            t[37] === p ? P = t[38] : (P = {
                ...p,
                isOptimisticBusinessMessage: !0
            }, t[37] = p, t[38] = P);
            let e;t[39] !== f.address || t[40] !== f.name ? (e = [f.name, f.address].filter(Boolean), t[39] = f.address, t[40] = f.name, t[41] = e) : e = t[41],
            O = e.join(`, `),
            A = `mt-4 text-sm`,
            j = E.author.role,
            M = E.id,
            N = `status`,
            w = Ot,
            ee = E.content.parts,
            I = !1,
            L = !1,
            te = C >= 0 ? C : 0,
            D = Qe(E.content.parts)
        }
        t[16] = r, t[17] = p, t[18] = f, t[19] = a, t[20] = C, t[21] = b, t[22] = w, t[23] = T, t[24] = E, t[25] = D, t[26] = O, t[27] = A, t[28] = j, t[29] = M, t[30] = N, t[31] = P, t[32] = F, t[33] = ee, t[34] = I, t[35] = L, t[36] = te
    } else w = t[22], T = t[23], E = t[24], D = t[25], O = t[26], A = t[27], j = t[28], M = t[29], N = t[30], P = t[31], F = t[32], ee = t[33], I = t[34], L = t[35], te = t[36];
    if (F !== Symbol.for(`react.early_return_sentinel`)) return F;
    let ne = s?.isGenui,
        z;
    t[42] === E ? z = t[43] : (z = [E], t[42] = E, t[43] = z);
    let B = E.metadata?.content_references,
        V;
    t[44] !== w || t[45] !== i || t[46] !== a || t[47] !== D || t[48] !== ne || t[49] !== z || t[50] !== B || t[51] !== ee || t[52] !== I || t[53] !== L || t[54] !== te ? (V = (0, yn.jsx)(w, {
        parts: ee,
        isUserTurn: I,
        isCompletionInProgress: L,
        turnIndex: te,
        displayParts: D,
        isActivelyStreaming: !1,
        shouldHideContent: !1,
        conversation: i,
        id: a,
        assistantMessageId: a,
        isGenui: ne,
        isEmpty: !1,
        messages: z,
        contentReferences: B,
        size: `small`,
        flagSeverity: void 0,
        isCodeInteractive: !1
    }), t[44] = w, t[45] = i, t[46] = a, t[47] = D, t[48] = ne, t[49] = z, t[50] = B, t[51] = ee, t[52] = I, t[53] = L, t[54] = te, t[55] = V) : V = t[55];
    let re;
    t[56] !== O || t[57] !== A || t[58] !== j || t[59] !== M || t[60] !== N || t[61] !== V ? (re = (0, yn.jsx)(`div`, {
        "aria-label": O,
        className: A,
        "data-message-author-role": j,
        "data-message-id": M,
        role: N,
        children: V
    }), t[56] = O, t[57] = A, t[58] = j, t[59] = M, t[60] = N, t[61] = V, t[62] = re) : re = t[62];
    let ie;
    return t[63] !== T || t[64] !== P || t[65] !== re ? (ie = (0, yn.jsx)(T, {
        value: P,
        children: re
    }), t[63] = T, t[64] = P, t[65] = re, t[66] = ie) : ie = t[66], ie
}

function gn(e) {
    return e.metadata?.content_references?.some(_n)
}

function _n(e) {
    return e.type === `image_group` && e.layout === `full_width` || e.type === `hidden` && e.matched_text.startsWith(`image_group`)
}
var vn, yn, bn = e((() => {
    vn = W(), g(), nn(), we(), mn(), J(), jt(), ze(), H(), i(), j(), S(), de(), sn(), Wt(), Pe(), yn = le()
}));

function xn(e) {
    "use forget";
    let t = (0, Sn.c)(38),
        {
            query: n,
            messageIds: i,
            category: a,
            conversationId: o,
            originatingConversationId: s,
            conversationContext: c,
            sidebar: l,
            isModal: u,
            onFollowUp: d,
            followUpLabel: f
        } = e,
        p = G(),
        {
            setTargetedContent: g
        } = Re(),
        {
            openThreadSidebar: _,
            closeThreadSidebar: y
        } = Oe(),
        b;
    t[0] !== f || t[1] !== p ? (b = f ?? p.formatMessage({
        id: `entities.sidebarFollowUpFloatingButton.label`,
        defaultMessage: `Follow up`
    }), t[0] = f, t[1] = p, t[2] = b) : b = t[2];
    let x = b,
        S;
    t[3] !== a || t[4] !== c || t[5] !== o || t[6] !== i || t[7] !== s || t[8] !== n || t[9] !== l ? (S = e => {
        if (m.logEventWithStatsig(`Sidebar Follow Up Button Clicked`, `chatgpt_sidebar_follow_up_button_clicked`, {
                messageIds: i,
                conversationId: o,
                originatingConversationId: s,
                category: a
            }), !n) return e;
        let t = typeof l.extraParams?.entity_name == `string` ? l.extraParams.entity_name.trim() : ``,
            r = a === `entity_sidebar_follow_up` && t ? v(n, t, c) : h(n, c);
        return {
            ...e,
            promptMessage: Ke(e.promptMessage, {
                metadata: {
                    targeted_reply: n
                }
            }),
            appendMessages: e.appendMessages == null ? [r] : [...e.appendMessages, r]
        }
    }, t[3] = a, t[4] = c, t[5] = o, t[6] = i, t[7] = s, t[8] = n, t[9] = l, t[10] = S) : S = t[10];
    let C, w;
    t[11] !== a || t[12] !== i || t[13] !== s ? (C = e => {
        let {
            serverThreadId: t,
            currentLeafId: n
        } = e;
        m.logEventWithStatsig(`Sidebar Follow Up Submitted`, `chatgpt_sidebar_follow_up_submitted`, {
            conversationId: t,
            currentLeafId: n,
            messageIds: i,
            originatingConversationId: s,
            category: a
        })
    }, w = e => {
        let {
            serverThreadId: t,
            currentLeafId: n
        } = e;
        m.logEventWithStatsig(`Sidebar Follow Up Cleared`, `chatgpt_sidebar_follow_up_cleared`, {
            conversationId: t,
            currentLeafId: n,
            messageIds: i,
            originatingConversationId: s,
            category: a
        })
    }, t[11] = a, t[12] = i, t[13] = s, t[14] = C, t[15] = w) : (C = t[14], w = t[15]);
    let T;
    t[16] !== u || t[17] !== _ || t[18] !== l ? (T = u ? () => _(l) : void 0, t[16] = u, t[17] = _, t[18] = l, t[19] = T) : T = t[19];
    let E;
    t[20] !== n || t[21] !== S || t[22] !== C || t[23] !== w || t[24] !== T ? (E = {
        type: `text`,
        label: n,
        createNewCompletionParams: S,
        onCreateCompletion: C,
        onCleared: w,
        onLabelClick: T
    }, t[20] = n, t[21] = S, t[22] = C, t[23] = w, t[24] = T, t[25] = E) : E = t[25];
    let D = E,
        O;
    t[26] !== y || t[27] !== u || t[28] !== d || t[29] !== g || t[30] !== D ? (O = () => {
        if (d != null) {
            d();
            return
        }
        u && y(), g(D)
    }, t[26] = y, t[27] = u, t[28] = d, t[29] = g, t[30] = D, t[31] = O) : O = t[31];
    let k;
    t[32] === x ? k = t[33] : (k = (0, Cn.jsx)(`span`, {
        className: `flex items-center select-none`,
        children: x
    }), t[32] = x, t[33] = k);
    let A;
    return t[34] !== x || t[35] !== O || t[36] !== k ? (A = (0, Cn.jsx)(`div`, {
        id: wn,
        className: `fixed end-7 bottom-10 z-[50] md:bottom-8`,
        children: (0, Cn.jsx)(r, {
            size: `large`,
            color: `primary`,
            icon: pt,
            label: x,
            contentWrapperClassName: `gap-2`,
            className: `corner-superellipse/1.1 shadow-short h-12 cursor-pointer overflow-clip rounded-[28px] border-none px-6 py-7 font-medium active:opacity-100!`,
            onClick: O,
            children: k
        })
    }), t[34] = x, t[35] = O, t[36] = k, t[37] = A) : A = t[37], A
}
var Sn, Cn, wn, Tn = e((() => {
    Sn = W(), A(), ut(), Je(), be(), ce(), b(), Se(), de(), Cn = le(), wn = `sidebar-follow-up-button`
}));

function En(e, t, n) {
    T(e, void 0, {
        ...t,
        ...n ? {
            unique_event_id: n
        } : {}
    }), o.count(F.DEFAULT, e, t)
}

function Dn(e) {
    "use forget";
    let t = (0, Gn.c)(141),
        {
            conversation: n,
            debugThreadId: r,
            messageId: i,
            query: a,
            category: o,
            extraParams: s,
            refreshNonce: c,
            offsetTopMargin: l,
            isModal: u,
            sidebar: d,
            enableFollowUpButton: f,
            onFollowUp: p,
            followUpLabel: m,
            contentTitle: h,
            renderContentTitle: g,
            suppressLoadingHeaderOffset: _,
            usePageBackground: v
        } = e,
        b = g === void 0 || g,
        x = _ !== void 0 && _,
        S = v !== void 0 && v,
        C = at(),
        w;
    t[0] !== o || t[1] !== s || t[2] !== a ? (w = {
        initialQuery: a,
        initialCategory: o,
        initialExtraParams: s
    }, t[0] = o, t[1] = s, t[2] = a, t[3] = w) : w = t[3];
    let {
        query: T,
        category: E,
        extraParams: O
    } = Nt(w), A = E === `ledger_detail_sidebar` && O?.detail_type === `transaction`, j = E === `ledger_detail_sidebar` && O?.detail_type === `credit_health`, M = A || j, N = d?.clientParams?.entitySidebarPresentation?.contentOwnedHorizontalInset, P = E === `entity_sidebar_follow_up`, F = d?.reference, I = d?.pinnedImage, ne;
    t[4] !== E || t[5] !== n.id || t[6] !== r || t[7] !== O || t[8] !== i || t[9] !== T || t[10] !== c || t[11] !== F || t[12] !== I ? (ne = {
        clientThreadId: n.id,
        reference: F,
        debugThreadId: r,
        messageId: i,
        query: T,
        category: E,
        pinnedImage: I,
        extraParams: O,
        refreshNonce: c
    }, t[4] = E, t[5] = n.id, t[6] = r, t[7] = O, t[8] = i, t[9] = T, t[10] = c, t[11] = F, t[12] = I, t[13] = ne) : ne = t[13];
    let {
        messages: R,
        latestMessage: z,
        sidebarConversationId: B,
        error: V,
        searchModelQueries: re,
        regenerate: ae,
        isStreaming: H,
        debugData: oe
    } = Pt(ne), se, ce;
    t[14] === B ? (se = t[15], ce = t[16]) : (se = () => {
        if (B != null) return () => xe(`entity:${B}`)
    }, ce = [B], t[14] = B, t[15] = se, t[16] = ce), (0, Q.useEffect)(se, ce);
    let le, ue;
    t[17] !== n || t[18] !== R ? (le = () => {
        zt(n, R)
    }, ue = [n, R], t[17] = n, t[18] = R, t[19] = le, t[20] = ue) : (le = t[19], ue = t[20]), (0, Q.useEffect)(le, ue);
    let de = B ?? `no_sidebar_conversation`,
        U;
    t[21] === R ? U = t[22] : (U = R.map(Ln).join(`,`) || `error`, t[21] = R, t[22] = U);
    let fe;
    t[23] !== E || t[24] !== T || t[25] !== de || t[26] !== U ? (fe = [E, T, de, U], t[23] = E, t[24] = T, t[25] = de, t[26] = U, t[27] = fe) : fe = t[27];
    let W = fe.join(`:`),
        G = (0, Q.useRef)(null),
        pe;
    t[28] === Symbol.for(`react.memo_cache_sentinel`) ? (pe = D(), t[28] = pe) : pe = t[28];
    let {
        userCountry: me
    } = pe, he, ge;
    t[29] !== E || t[30] !== V || t[31] !== W || t[32] !== H || t[33] !== R ? (he = () => {
        H || !Bt(E) || R.length === 0 && V == null || G.current !== W && (G.current = W, Jt({
            category: E,
            outcome: Kt(R),
            userCountry: me ?? `unknown`,
            hiddenReason: Yt(R)
        }), Vt({
            category: E,
            imageCountBucket: qt(R)
        }))
    }, ge = [E, V, W, H, R, me], t[29] = E, t[30] = V, t[31] = W, t[32] = H, t[33] = R, t[34] = he, t[35] = ge) : (he = t[34], ge = t[35]), (0, Q.useEffect)(he, ge);
    let _e = ee(),
        {
            showDebugConversationTurns: ve
        } = De(),
        ye;
    t[36] !== n.id || t[37] !== _e ? (ye = y(n.id) ?? _e, t[36] = n.id, t[37] = _e, t[38] = ye) : ye = t[38];
    let K = ye,
        be;
    t[39] === f ? be = t[40] : (be = ie(`1290093942`) && f, t[39] = f, t[40] = be);
    let Se = be,
        Ce = O?.alwaysShowFollowUpButton === !0,
        we = O?.disableFooterActions !== !0,
        q = O?.conversation_context_citation,
        Te;
    t[41] === i ? Te = t[42] : (Te = e => e?.tree.getMaybeMessage(i)?.metadata?.conversation_context_citation_metadata ?? [], t[41] = i, t[42] = Te);
    let Ee = k(n.id, Te),
        Oe = q?.conversation_context_type === `user_memory` || q?.conversation_context_type === `general_memory`,
        ke = Se && !Oe,
        Ae = Ee.length === 1 ? Ee[0]?.citation_uuid ?? null : null,
        je = typeof O?.conversation_context_citation_uuid == `string` && O.conversation_context_citation_uuid.length > 0 ? O.conversation_context_citation_uuid : Ae,
        J = R.flatMap(Pn),
        Me;
    t[43] === R ? Me = t[44] : (Me = R.filter(te).map(Nn), t[43] = R, t[44] = Me);
    let Ne = Me,
        Pe;
    t[45] === R ? Pe = t[46] : (Pe = Ye(R.flatMap(Mn)), t[45] = R, t[46] = Pe);
    let Fe = Pe,
        Y = J.length > 0,
        Ie;
    t[47] !== E || t[48] !== C || t[49] !== V || t[50] !== R ? (Ie = an({
        category: E,
        context: C,
        error: V,
        messages: R
    }), t[47] = E, t[48] = C, t[49] = V, t[50] = R, t[51] = Ie) : Ie = t[51];
    let Le = Ie,
        Re = (0, Q.useRef)(null),
        ze = d && !x && !Y && !Le && !q && !P && !M,
        Be = S ? `bg-surface-primary` : `bg-token-bg-primary`,
        Ve = l || ze ? `mt-[calc(var(--threadFlyOut-leading-height,53px)*-1)] min-h-screen` : `mt-[-1px]`,
        He = ke && `mb-10`,
        We;
    t[52] !== Be || t[53] !== Ve || t[54] !== He ? (We = L(Be, `flex min-h-screen w-full flex-col dark:bg-black`, Ve, He), t[52] = Be, t[53] = Ve, t[54] = He, t[55] = We) : We = t[55];
    let Ge = M ? Y ? `px-0` : `px-5` : `px-6`,
        Ke = u && P && `pt-[calc(var(--header-height,3.5rem)+1px)]`,
        qe = Y && !h && !P && !A && `border-t`,
        Je = Se ? `mb-[60px]` : A ? `mb-0` : `mb-4`,
        Xe;
    t[56] !== Ge || t[57] !== Ke || t[58] !== qe || t[59] !== Je ? (Xe = L(`border-token-border-light flex flex-col`, Ge, Ke, qe, Je), t[56] = Ge, t[57] = Ke, t[58] = qe, t[59] = Je, t[60] = Xe) : Xe = t[60];
    let Ze;
    t[61] !== N || t[62] !== Y ? (Ze = N == null ? void 0 : {
        paddingInline: Y ? 0 : N
    }, t[61] = N, t[62] = Y, t[63] = Ze) : Ze = t[63];
    let Qe;
    t[64] !== P || t[65] !== T ? (Qe = P && (0, $.jsx)(`h3`, {
        className: `text-token-text-primary mt-4 mb-3 text-lg font-semibold break-words`,
        dir: `auto`,
        children: T
    }), t[64] = P, t[65] = T, t[66] = Qe) : Qe = t[66];
    let $e;
    t[67] !== N || t[68] !== h || t[69] !== Y || t[70] !== j || t[71] !== b ? ($e = h && b && (0, $.jsx)(Gt, {
        children: (0, $.jsx)(`h1`, {
            className: L(`text-token-text-primary mt-0`, j ? `pt-1 text-xl leading-[var(--text-heading-3--line-height)] font-bold` : `mb-10 text-2xl leading-8 font-semibold`, j && Y && `px-5`, j && (Y ? `-mb-1` : `mb-6`)),
            style: {
                paddingInline: Y ? N : void 0
            },
            children: h
        })
    }), t[67] = N, t[68] = h, t[69] = Y, t[70] = j, t[71] = b, t[72] = $e) : $e = t[72];
    let et;
    t[73] !== V || t[74] !== O || t[75] !== Y || t[76] !== A || t[77] !== d?.widgetStateOverride?.sensitive_values_hidden ? (et = A && !Y && !V && (0, $.jsx)(ln, {
        extraParams: O,
        sensitiveValuesHidden: d?.widgetStateOverride?.sensitive_values_hidden === !0
    }), t[73] = V, t[74] = O, t[75] = Y, t[76] = A, t[77] = d?.widgetStateOverride?.sensitive_values_hidden, t[78] = et) : et = t[78];
    let tt;
    t[79] !== E || t[80] !== n || t[81] !== i || t[82] !== R || t[83] !== Le || t[84] !== d ? (tt = Le && (0, $.jsx)(hn, {
        business: Le,
        category: E,
        conversation: n,
        messageId: i,
        messages: R,
        sidebar: d
    }), t[79] = E, t[80] = n, t[81] = i, t[82] = R, t[83] = Le, t[84] = d, t[85] = tt) : tt = t[85];
    let nt = Y ? J.map((e, t) => {
            let {
                message: r,
                textContent: a,
                isEmpty: o,
                displayParts: s
            } = e;
            return (0, $.jsx)(`div`, {
                className: L(`text-sm`, (M || N != null) && `[&_[data-testid=dil-widget-shell]>div]:w-full`, t === 0 && !Le && !h && !P && !A && `mt-4`),
                "data-message-author-role": r.author.role,
                "data-message-id": r.id,
                children: (0, $.jsx)(Xt, {
                    enabled: t === 0 && !h,
                    children: (0, $.jsx)(Ot, {
                        parts: a.parts || [],
                        isUserTurn: !1,
                        isCompletionInProgress: !1,
                        turnIndex: t,
                        displayParts: s,
                        isActivelyStreaming: !1,
                        shouldHideContent: !1,
                        conversation: n,
                        id: r.id,
                        assistantMessageId: i,
                        isGenui: d?.isGenui,
                        isEmpty: o,
                        messages: [r],
                        citations: r.metadata?.citations,
                        contentReferences: r.metadata?.content_references?.filter(jn),
                        size: `small`,
                        flagSeverity: void 0,
                        isCodeInteractive: !1
                    })
                })
            }, r.id)
        }) : !V && (0, $.jsx)(Qt, {
            searchModelQueries: re,
            variant: P ? `typing-dot` : Le || M || E === `ask_sidebar` ? `minimal` : `default`
        }),
        rt;
    t[86] !== V || t[87] !== P ? (rt = V && (0, $.jsx)(`div`, {
        className: L(`border-token-surface-error/15 bg-token-bg-status-error text-token-text-error border p-2 text-sm whitespace-pre-wrap`, P ? `mt-0 mb-4` : `my-4`),
        children: V.message
    }), t[86] = V, t[87] = P, t[88] = rt) : rt = t[88];
    let it = !H && we && (0, $.jsxs)(`div`, {
            className: `flex items-center justify-start pt-2 select-none`,
            children: [!Oe && J && J.length > 0 && (0, $.jsx)(Jn, {
                messages: J.map(An),
                clientThreadId: n.id,
                sidebarConversationId: B
            }), z ? Oe ? K && (0, $.jsx)(Xn, {
                clientThreadId: n.id,
                conversationId: K,
                messageId: i,
                citationUuid: je,
                conversationContextType: q?.conversation_context_type === `user_memory` || q?.conversation_context_type === `general_memory` ? q.conversation_context_type : null,
                conversationContextCitationMetadataList: Ee
            }) : B && K && (0, $.jsx)(Yn, {
                messageId: z.id,
                category: E,
                conversationId: B,
                metadata: {
                    originatingConversationId: K
                }
            }) : null, !Oe && (0, $.jsx)(qn, {
                onClick: ae,
                message: z ?? null
            }), z && (0, $.jsx)(Rn, {
                message: z
            })]
        }),
        ot;
    t[89] !== Ne || t[90] !== Ce || t[91] !== E || t[92] !== Fe || t[93] !== m || t[94] !== u || t[95] !== z || t[96] !== p || t[97] !== K || t[98] !== T || t[99] !== ke || t[100] !== d || t[101] !== B ? (ot = ke && d && z && B && (K || Ce) && Fe && (0, $.jsx)(xn, {
        query: T,
        messageIds: Ne,
        category: E,
        conversationId: B,
        originatingConversationId: K,
        conversationContext: Fe,
        isModal: u,
        sidebar: d,
        onFollowUp: p,
        followUpLabel: m
    }), t[89] = Ne, t[90] = Ce, t[91] = E, t[92] = Fe, t[93] = m, t[94] = u, t[95] = z, t[96] = p, t[97] = K, t[98] = T, t[99] = ke, t[100] = d, t[101] = B, t[102] = ot) : ot = t[102];
    let st;
    t[103] !== oe || t[104] !== H || t[105] !== z?.metadata?.__internal?.sonic_sidebar_eval_preset || t[106] !== ve ? (st = !1, t[103] = oe, t[104] = H, t[105] = z?.metadata?.__internal?.sonic_sidebar_eval_preset, t[106] = ve, t[107] = st) : st = t[107];
    let ct;
    t[108] !== Xe || t[109] !== Ze || t[110] !== Qe || t[111] !== $e || t[112] !== et || t[113] !== tt || t[114] !== nt || t[115] !== rt || t[116] !== it || t[117] !== ot || t[118] !== st ? (ct = (0, $.jsxs)(`div`, {
        className: Xe,
        style: Ze,
        children: [Qe, $e, et, tt, nt, rt, it, ot, st]
    }), t[108] = Xe, t[109] = Ze, t[110] = Qe, t[111] = $e, t[112] = et, t[113] = tt, t[114] = nt, t[115] = rt, t[116] = it, t[117] = ot, t[118] = st, t[119] = ct) : ct = t[119];
    let lt;
    t[120] !== We || t[121] !== ct ? (lt = (0, $.jsx)(`div`, {
        ref: Re,
        className: We,
        children: ct
    }), t[120] = We, t[121] = ct, t[122] = lt) : lt = t[122];
    let ut = lt,
        dt;
    t[123] !== E || t[124] !== J ? (dt = E === `movie` && J.some(On), t[123] = E, t[124] = J, t[125] = dt) : dt = t[125];
    let ft = d?.imageThumbnailUrl,
        pt = d?.savedEntityRequest == null ? C?.favoritesAnalyticsSource : `library`,
        mt;
    t[126] !== E || t[127] !== C || t[128] !== O || t[129] !== T || t[130] !== dt || t[131] !== ft || t[132] !== pt ? (mt = {
        ...C,
        entityName: T,
        entityCategory: E,
        hasMovieSidebarWidget: dt,
        extraParams: O,
        imageThumbnailUrl: ft,
        favoritesAnalyticsSource: pt
    }, t[126] = E, t[127] = C, t[128] = O, t[129] = T, t[130] = dt, t[131] = ft, t[132] = pt, t[133] = mt) : mt = t[133];
    let ht = d?.businessProfile,
        X;
    t[134] !== E || t[135] !== ut || t[136] !== ht ? (X = (0, $.jsx)(Ht, {
        profile: ht,
        category: E,
        children: ut
    }), t[134] = E, t[135] = ut, t[136] = ht, t[137] = X) : X = t[137];
    let gt;
    return t[138] !== mt || t[139] !== X ? (gt = (0, $.jsx)(Ue, {
        value: mt,
        children: X
    }), t[138] = mt, t[139] = X, t[140] = gt) : gt = t[140], gt
}

function On(e) {
    let {
        message: t
    } = e;
    return t.metadata?.content_references?.some(kn)
}

function kn(e) {
    return e.type === `dil` && e.name === `movie_sidebar_widget`
}

function An(e) {
    return e.message
}

function jn(e) {
    return e.type !== `product_entity`
}

function Mn(e) {
    let t = e.content;
    return !t || t.content_type !== R.Text && t.content_type !== R.MultimodalText ? [] : t.parts ?? []
}

function Nn(e) {
    return e.id
}

function Pn(e, t) {
    let n = t === 0;
    if (!e.content || e.content.content_type !== R.Text && e.content.content_type !== R.MultimodalText) return [];
    let r = e.content,
        i = e.metadata?.content_references?.some(In);
    return n && r.parts[0] && typeof r.parts[0] == `string` && r.parts[0].startsWith(Kn) && !i ? [] : [{
        message: e,
        textContent: r,
        isEmpty: !r.parts.some(Fn) && !i,
        displayParts: Qe(r.parts ?? [])
    }]
}

function Fn(e) {
    return e !== ``
}

function In(e) {
    return e.type !== `hidden`
}

function Ln(e) {
    return e.id
}

function Rn(e) {
    "use forget";
    let t = (0, Gn.c)(11),
        {
            message: n
        } = e,
        r, i, a;
    if (t[0] !== n) {
        a = Symbol.for(`react.early_return_sentinel`);
        bb0: {
            if (r = Vn(n ?? null), !r) {
                a = null;
                break bb0
            }
            i = r?.map(Bn).filter(zn) ?? []
        }
        t[0] = n, t[1] = r, t[2] = i, t[3] = a
    } else r = t[1], i = t[2], a = t[3];
    if (a !== Symbol.for(`react.early_return_sentinel`)) return a;
    let o = i,
        s;
    t[4] === o ? s = t[5] : (s = (0, $.jsx)(rt, {
        children: (0, $.jsx)(At, {
            sourcesUrls: o
        })
    }), t[4] = o, t[5] = s);
    let c;
    t[6] === r ? c = t[7] : (c = (0, $.jsx)(Le, {
        children: (0, $.jsx)(Ze, {
            className: `border-token-border-default bg-token-bg-primary xs:max-w-[400px] max-h-[50vh] max-w-[90vw] overflow-y-auto rounded-[20px] border-1 bg-clip-padding px-4 py-3 shadow-md`,
            side: `top`,
            sideOffset: 4,
            align: `center`,
            collisionPadding: 28,
            avoidCollisions: !0,
            children: (0, $.jsx)(Hn, {
                items: r
            })
        })
    }), t[6] = r, t[7] = c);
    let l;
    return t[8] !== s || t[9] !== c ? (l = (0, $.jsxs)(qe, {
        children: [s, c]
    }), t[8] = s, t[9] = c, t[10] = l) : l = t[10], l
}

function zn(e) {
    return !!e
}

function Bn(e) {
    return e.url
}

function Vn(e) {
    if (!e) return;
    let t = e.metadata?.search_result_groups ?? [];
    if (!t.length) return;
    let n = new Map;
    t.forEach(e => {
        (e.entries ?? []).forEach(t => {
            if (!t?.url || n.has(t.url)) return;
            let r = {
                ...t,
                attribution: t.attribution ?? e.domain ?? ve(t.url, `short`)
            };
            n.set(t.url, r)
        })
    });
    let r = Array.from(n.values()).sort((e, t) => (t.pub_date ?? 0) - (e.pub_date ?? 0));
    if (r.length) return r
}

function Hn({
    items: e
}) {
    return e.length === 0 ? null : (0, $.jsx)(`div`, {
        className: `flex flex-col gap-3`,
        children: (0, $.jsx)(`ul`, {
            className: `-mx-2 flex flex-col gap-1`,
            children: e.map((e, t) => (0, $.jsx)(`li`, {
                children: (0, $.jsx)(he, {
                    item: e
                })
            }, `${e.url??`source`}-${t}`))
        })
    })
}

function Un(e) {
    return e.condition
}

function Wn() {
    return !f() && B()
}
var Gn, Q, $, Kn, qn, Jn, Yn, Xn, Zn = e((() => {
    Gn = W(), Ut(), g(), $e(), ae(), Ee(), ft(), mt(), yt(), bt(), ct(), s(), wt(), jt(), it(), kt(), ze(), w(), et(), Et(), Ie(), i(), j(), a(), V(), ce(), l(), M(), Me(), je(), b(), pe(), n(), I(), P(), ge(), me(), Ve(), fe(), re(), Q = t(U()), de(), ne(), Zt(), sn(), Rt(), fn(), bn(), Wt(), Tn(), Ft(), Pe(), Mt(), $ = le(), Kn = ``, qn = e => {
        "use forget";
        let t = (0, Gn.c)(28),
            {
                onClick: n,
                message: r
            } = e,
            i = G(),
            a;
        t[0] === i ? a = t[1] : (a = i.formatMessage({
            id: `gW2N97`,
            defaultMessage: `Try again...`
        }), t[0] = i, t[1] = a);
        let o = a,
            s;
        t[2] === i ? s = t[3] : (s = i.formatMessage({
            id: `FAHSuP`,
            defaultMessage: `Try again`
        }), t[2] = i, t[3] = s);
        let c = s,
            l, u;
        if (t[4] !== i || t[5] !== r || t[6] !== n || t[7] !== o || t[8] !== c) {
            u = Symbol.for(`react.early_return_sentinel`);
            bb0: {
                let e = [];
                if (r) {
                    let n;
                    t[11] === r ? n = t[12] : (n = Vn(r)?.length, t[11] = r, t[12] = n), e = We({
                        messageModelEnabledTools: [se.Search],
                        message: r,
                        intl: i,
                        lastResponseUsedSearch: !!n
                    }).filter(Un)
                }
                if (!r || e.length === 0) {
                    let e;
                    t[13] === n ? e = t[14] : (e = () => n(), t[13] = n, t[14] = e);
                    let r;
                    t[15] !== e || t[16] !== o ? (r = (0, $.jsx)(Ne, {
                        icon: _t,
                        onClick: e,
                        label: o,
                        size: `med`
                    }), t[15] = e, t[16] = o, t[17] = r) : r = t[17], u = r;
                    break bb0
                }
                let a;t[18] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, $.jsx)(`span`, {
                    className: `touch:w-10 flex h-8 w-8 items-center justify-center`,
                    children: (0, $.jsx)(_t, {
                        className: `icon`
                    })
                }), t[18] = a) : a = t[18];
                let s;t[19] === o ? s = t[20] : (s = (0, $.jsx)(`button`, {
                    type: `button`,
                    className: `text-token-text-secondary hover:bg-token-surface-hover rounded-lg`,
                    "aria-label": o,
                    children: a
                }), t[19] = o, t[20] = s);
                let d;t[21] === n ? d = t[22] : (d = () => n(), t[21] = n, t[22] = d);
                let f;t[23] !== d || t[24] !== c ? (f = (0, $.jsx)(ot.Item, {
                    icon: _t,
                    label: c,
                    onSelect: d
                }), t[23] = d, t[24] = c, t[25] = f) : f = t[25];
                let p;t[26] === n ? p = t[27] : (p = e => (0, $.jsx)(ot.Item, {
                    icon: e.icon,
                    label: e.label,
                    onSelect: () => n({
                        forceUseSearch: e.extraStreamParams.forceUseSearch
                    })
                }, e.key), t[26] = n, t[27] = p),
                l = (0, $.jsxs)(Y, {
                    size: `small`,
                    side: `top`,
                    sideOffset: 4,
                    tooltip: o,
                    triggerButton: s,
                    children: [f, e.map(p)]
                })
            }
            t[4] = i, t[5] = r, t[6] = n, t[7] = o, t[8] = c, t[9] = l, t[10] = u
        } else l = t[9], u = t[10];
        return u === Symbol.for(`react.early_return_sentinel`) ? l : u
    }, Jn = e => {
        "use forget";
        let t = (0, Gn.c)(11),
            {
                messages: n,
                clientThreadId: r,
                sidebarConversationId: i
            } = e,
            a = ue(),
            o = G(),
            s;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (s = ie(`1287696420`), t[0] = s) : s = t[0];
        let c = s,
            l;
        t[1] === i ? l = t[2] : (l = {
            action: `CHATGPT_CONVERSATION_CONTROL_ACTION_TYPE_ENTITY_DETAILS_COPY_CLICKED`,
            conversationId: i
        }, t[1] = i, t[2] = l);
        let u;
        t[3] !== r || t[4] !== o || t[5] !== n || t[6] !== a ? (u = async e => {
            let t = ke({
                id: r,
                role: _.Assistant,
                messageGroups: [],
                isPrompt: !1,
                hasDisplayableMessages: !0,
                messages: n,
                isAsyncCorrection: !1,
                modelSlug: null
            }, a, r, o, {
                enableHighlight: c,
                includeMcpSourceCitations: E(N(r))
            });
            await O(t instanceof Promise ? await t : t, void 0, e)
        }, t[3] = r, t[4] = o, t[5] = n, t[6] = a, t[7] = u) : u = t[7];
        let d;
        return t[8] !== l || t[9] !== u ? (d = (0, $.jsx)(xt, {
            variant: `response`,
            size: `med`,
            structuredEventMetadata: l,
            onClick: u
        }), t[8] = l, t[9] = u, t[10] = d) : d = t[10], d
    }, Yn = e => {
        "use forget";
        let t = (0, Gn.c)(22),
            {
                messageId: n,
                category: r,
                conversationId: i,
                metadata: a
            } = e,
            o = G(),
            [s, c] = (0, Q.useState)(null),
            l = d(B),
            u, f;
        if (t[0] !== i || t[1] !== l || t[2] !== n ? (u = () => {
                st({
                    clientConversationId: `entity:${i}`,
                    conversationId: i,
                    messageId: n,
                    reason: l ? void 0 : Ce.CHATGPT_MESSAGE_FEEDBACK_CONTROL_NOT_RENDERED_REASON_WORKSPACE_DISABLED
                })
            }, f = [i, n, l], t[0] = i, t[1] = l, t[2] = n, t[3] = u, t[4] = f) : (u = t[3], f = t[4]), (0, Q.useEffect)(u, f), !l) return null;
        let p;
        t[5] !== r || t[6] !== i || t[7] !== s || t[8] !== n || t[9] !== a ? (p = e => {
            if (s !== e) {
                let t = Ge({
                        conversationId: i,
                        messageId: n,
                        rating: e,
                        submissionType: Xe.CHATGPT_MESSAGE_FEEDBACK_SUBMISSION_TYPE_THUMB,
                        route: tt.CHATGPT_MESSAGE_FEEDBACK_ROUTE_UNIFIED_USER_SIGNALS
                    }),
                    o = ye({
                        rating: nt(e)
                    }, i, n, `CHAT`, a, () => K(t));
                o != null && _e(t, o);
                let s = m.logStructuredEvent(`ChatgptFeedbackInteraction`, {
                    action: `CHATGPT_FEEDBACK_ACTION_MESSAGE_RATING_SUBMITTED`,
                    surface: `CHATGPT_FEEDBACK_SURFACE_ENTITY_SIDEBAR`,
                    rating: e === `thumbsDown` ? `CHATGPT_FEEDBACK_RATING_THUMBS_DOWN` : `CHATGPT_FEEDBACK_RATING_THUMBS_UP`,
                    messageId: n,
                    conversationId: i,
                    originatingConversationId: a.originatingConversationId,
                    category: r,
                    legacyStatsigEventName: `chatgpt_sidebar_thumb_feedback`
                });
                m.logValueEventWithStatsig({
                    segmentEventName: e === `thumbsDown` ? `Sidebar Message Feedback Thumbs Down Clicked` : `Sidebar Message Feedback Thumbs Up Clicked`,
                    statsigEventName: `chatgpt_sidebar_thumb_feedback`,
                    eventId: s,
                    data: {
                        message_id: n,
                        conversation_id: i,
                        originating_conversation_id: a.originatingConversationId,
                        rating: e,
                        category: r,
                        surface: `web`
                    }
                })
            } else Te(i, n, e);
            c(t => t === e ? null : e)
        }, t[5] = r, t[6] = i, t[7] = s, t[8] = n, t[9] = a, t[10] = p) : p = t[10];
        let h = p,
            g;
        t[11] !== s || t[12] !== h || t[13] !== o ? (g = s !== `thumbsDown` && (0, $.jsx)(Ne, {
            size: `med`,
            onClick: () => {
                h(`thumbsUp`)
            },
            selected: s === `thumbsUp`,
            icon: s === `thumbsUp` ? lt : ht,
            label: o.formatMessage({
                id: `ConversationTurn.goodResponseTooltip`,
                defaultMessage: `Good response`
            }),
            testId: `good-response-turn-action-button`
        }), t[11] = s, t[12] = h, t[13] = o, t[14] = g) : g = t[14];
        let _;
        t[15] !== s || t[16] !== h || t[17] !== o ? (_ = s !== `thumbsUp` && (0, $.jsx)(Ne, {
            size: `med`,
            onClick: () => {
                h(`thumbsDown`)
            },
            selected: s === `thumbsDown`,
            icon: s === `thumbsDown` ? dt : X,
            label: o.formatMessage({
                id: `ConversationTurn.badResponseTooltip`,
                defaultMessage: `Bad response`
            }),
            testId: `bad-response-turn-action-button`
        }), t[15] = s, t[16] = h, t[17] = o, t[18] = _) : _ = t[18];
        let v;
        return t[19] !== g || t[20] !== _ ? (v = (0, $.jsxs)($.Fragment, {
            children: [g, _]
        }), t[19] = g, t[20] = _, t[21] = v) : v = t[21], v
    }, Xn = e => {
        "use forget";
        let t = (0, Gn.c)(30),
            {
                clientThreadId: n,
                conversationContextCitationMetadataList: r,
                conversationId: i,
                messageId: a,
                citationUuid: o,
                conversationContextType: s
            } = e,
            c = G(),
            l;
        t[0] !== o || t[1] !== r ? (l = o ? Fe(r, o) : null, t[0] = o, t[1] = r, t[2] = l) : l = t[2];
        let u = l,
            [f, m] = (0, Q.useState)(!1),
            h = d(Wn),
            g = u,
            _;
        t[3] !== o || t[4] !== r ? (_ = o != null && r.find(e => e.citation_uuid === o)?.deleted === !0, t[3] = o, t[4] = r, t[5] = _) : _ = t[5];
        let v = _,
            y;
        t[6] !== o || t[7] !== n || t[8] !== r || t[9] !== s || t[10] !== i || t[11] !== g || t[12] !== v || t[13] !== h || t[14] !== f || t[15] !== a ? (y = e => {
            if (!h || !o || f) return;
            let t = g === e ? null : e,
                c = Dt({
                    actionType: t == null ? Tt.CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ACTION_TYPE_FEEDBACK_CLEARED : Tt.CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ACTION_TYPE_FEEDBACK_GIVEN,
                    entrypoint: Ct.CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ENTRYPOINT_ENTITY_SIDEBAR_FEEDBACK_BUTTON,
                    target: St.CHATGPT_WEB_MEMORY_CITATION_INTERACTION_TARGET_ENTITY_SIDEBAR,
                    conversationId: i,
                    messageId: a,
                    citationUuid: o,
                    conversationContextType: s,
                    feedback: t,
                    selectedFeedback: e
                });
            En(`chatgpt_memory_citation_feedback_clicked`, {
                surface: `ask_sidebar`,
                selected_feedback: e,
                resulting_feedback: t ?? `cleared`,
                conversation_context_type: s ?? `unknown`
            }, c);
            let l = He(r, o, t),
                u = l !== r;
            u && z(n, e => {
                p.updateTree(e, e => {
                    e.updateNodeMessageMetadata(a, {
                        conversation_context_citation_metadata: l
                    })
                })
            }), m(!0), C.safePost(`/sidebar/conversation_context_citation_feedback`, {
                requestBody: {
                    conversation_id: i,
                    message_id: a,
                    citation_uuid: o,
                    feedback: t,
                    deleted: v
                }
            }).catch(() => {
                u && z(n, e => {
                    p.updateTree(e, e => {
                        e.updateNodeMessageMetadata(a, {
                            conversation_context_citation_metadata: r
                        })
                    })
                })
            }).finally(() => {
                m(!1)
            })
        }, t[6] = o, t[7] = n, t[8] = r, t[9] = s, t[10] = i, t[11] = g, t[12] = v, t[13] = h, t[14] = f, t[15] = a, t[16] = y) : y = t[16];
        let b = y;
        if (!o || !h) return null;
        let x;
        t[17] !== g || t[18] !== b || t[19] !== c || t[20] !== f ? (x = g !== `negative` && (0, $.jsx)(Ne, {
            size: `med`,
            onClick: () => {
                b(`positive`)
            },
            selected: g === `positive`,
            disabled: f,
            className: `disabled:hover:bg-transparent disabled:cursor-not-allowed disabled:opacity-50`,
            icon: g === `positive` ? lt : ht,
            label: c.formatMessage({
                id: `tLYX75`,
                defaultMessage: `Relevant`
            }),
            testId: `good-memory-feedback-turn-action-button`
        }), t[17] = g, t[18] = b, t[19] = c, t[20] = f, t[21] = x) : x = t[21];
        let S;
        t[22] !== g || t[23] !== b || t[24] !== c || t[25] !== f ? (S = g !== `positive` && (0, $.jsx)(Ne, {
            size: `med`,
            onClick: () => {
                b(`negative`)
            },
            selected: g === `negative`,
            disabled: f,
            className: `disabled:hover:bg-transparent disabled:cursor-not-allowed disabled:opacity-50`,
            icon: g === `negative` ? dt : X,
            label: c.formatMessage({
                id: `YW9vkL`,
                defaultMessage: `Not relevant`
            }),
            testId: `bad-memory-feedback-turn-action-button`
        }), t[22] = g, t[23] = b, t[24] = c, t[25] = f, t[26] = S) : S = t[26];
        let w;
        return t[27] !== x || t[28] !== S ? (w = (0, $.jsxs)($.Fragment, {
            children: [x, S]
        }), t[27] = x, t[28] = S, t[29] = w) : w = t[29], w
    }
}));
export {
    Zn as n, Dn as t
};
//# sourceMappingURL=277559ed-knxgg2jzedyd6xhb.js.map