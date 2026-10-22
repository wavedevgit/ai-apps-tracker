import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    Aq as r,
    Art as i,
    B0 as a,
    CQ as o,
    Da as s,
    Dtt as c,
    GJ as l,
    Int as u,
    J7 as d,
    K0 as f,
    KJ as p,
    MZ as m,
    Ort as h,
    PZ as g,
    Q7 as _,
    QJ as v,
    QZ as y,
    Rnt as b,
    T1 as x,
    TX as S,
    ZG as C,
    al as w,
    ast as T,
    c7 as E,
    dC as D,
    dY as O,
    eE as k,
    eY as A,
    fC as j,
    ftt as M,
    gF as N,
    grt as P,
    hrt as F,
    ist as ee,
    jtt as I,
    k8 as L,
    ka as te,
    krt as R,
    l7 as z,
    lQ as ne,
    lrt as B,
    q5 as V,
    sY as H,
    tK as re,
    tl as ie,
    vF as ae,
    w1 as oe,
    wQ as se,
    wq as ce
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Bn as U,
    N as le,
    Rn as ue,
    Vn as de,
    s as fe,
    wn as W,
    zn as G
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $Hn as pe,
    DC as me,
    FHn as he,
    GN as ge,
    Hft as _e,
    IHn as ve,
    JN as ye,
    Jft as K,
    MHn as be,
    NHn as xe,
    OBt as Se,
    OHn as Ce,
    PHn as we,
    PIn as Te,
    QHn as Ee,
    Qdt as De,
    Qpt as Oe,
    XS as ke,
    Xdt as Ae,
    YHn as q,
    YN as je,
    Ypt as Me,
    ZS as Ne,
    _T as J,
    _Un as Y,
    _pt as Pe,
    aS as Fe,
    btn as Ie,
    c5t as Le,
    dht as Re,
    dnn as ze,
    emt as Be,
    fS as Ve,
    gpt as He,
    i5t as Ue,
    jC as We,
    kBt as Ge,
    kHn as Ke,
    lht as qe,
    lnn as Je,
    o5t as Ye,
    qIn as Xe,
    qN as Ze,
    s5t as Qe,
    sS as $e,
    snn as et,
    tpt as tt,
    u5t as nt,
    vT as rt,
    vUn as it,
    vpt as at,
    vtn as ot,
    yUn as st
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    $h as ct,
    Bh as lt,
    Ch as ut,
    Hh as X,
    Kx as dt,
    Sh as ft,
    Vh as pt,
    eg as mt,
    ng as ht,
    ny as gt,
    qx as _t,
    ry as vt,
    tg as yt,
    zh as bt
} from "./30901919-lgbmg5s09xld40kt.js";
import {
    $r as xt,
    Ex as St,
    Ji as Ct,
    Tx as wt,
    Xi as Tt,
    Zi as Et,
    ei as Dt,
    ld as Ot,
    qi as kt,
    sd as At,
    wx as jt
} from "./8b34dbc2-n194ohawifys3bko.js";
import {
    c as Mt,
    l as Nt,
    r as Pt,
    t as Ft
} from "./24fd10e2-dyxuc0hi40xaqb6z.js";
import {
    n as It,
    t as Lt
} from "./b5901a24-lf9tyby1b7iurr0s.js";
import {
    a as Rt,
    c as zt
} from "./0e629c03-egrdwmfs4pop9e7h.js";
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
} from "./bb871603-k75ge3h80msvfof5.js";
import {
    n as Zt,
    t as Qt
} from "./e145c156-jf0p8763u74hby26.js";
import {
    n as $t,
    r as en,
    t as tn
} from "./a81eda00-d20jvwsf6m8ygnfm.js";
import {
    n as nn,
    t as rn
} from "./4b38d6b2-mxg19iwrh52qp19p.js";

function an({
    category: e,
    context: t,
    error: n,
    messages: r
}) {
    let i = t?.initialBusinessData,
        a = t?.entityCategory ?? t?.category,
        o = i != null && r.some(e => e.metadata?.content_references?.some(e => {
            if (e.type !== `entity_metadata` || !Oe(e.entity_type)) return !1;
            let n = e.entity_data,
                r = n?.id;
            if (r === i.id) return !0;
            let a = (e.name ?? (n != null && `name` in n ? n.name : void 0))?.trim().toLowerCase();
            return a ? a === i.name.trim().toLowerCase() || a === t?.entityName?.trim().toLowerCase() : r == null
        }));
    return !n && !o && Oe(e) && Oe(a) && i != null && t?.entityId === i.id ? i : void 0
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
            end_idx: se(i).length,
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
    let l = `entity_metadata${JSON.stringify([`local_business`,e.name,0,{location:e.address?[e.address]:[]}])}`,
        u = se(s).length;
    return o.push({
        type: `entity_metadata`,
        matched_text: l,
        start_idx: u,
        end_idx: u + se(l).length,
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
            role: c.Assistant
        },
        content: {
            content_type: M.Text,
            parts: [`${s}${l}`]
        },
        metadata: {
            content_references: o
        }
    }
}
var sn = e((() => {
    I(), Me(), S(), o()
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
    un = W(), vt(), It(), dn = t(de()), $t(), Z = U()
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
        u;
    t[0] !== n || t[1] !== c.locale ? (u = () => pn(n, void 0, c.locale, Be()).business, t[0] = n, t[1] = c.locale, t[2] = u) : u = t[2];
    let d = V(u),
        f = at(),
        p = f?.entityCategory ?? f?.category,
        m;
    t[3] === o ? m = t[4] : (m = o.some(gn), t[3] = o, t[4] = m);
    let h = m,
        g;
    t[5] !== n || t[6] !== r || t[7] !== f?.initialBusinessImageUrl || t[8] !== h || t[9] !== s?.imageThumbnailUrl || t[10] !== p ? (g = !h && Bt(r) && Bt(p) ? Ae(n, s?.imageThumbnailUrl ?? f?.initialBusinessImageUrl) : null, t[5] = n, t[6] = r, t[7] = f?.initialBusinessImageUrl, t[8] = h, t[9] = s?.imageThumbnailUrl, t[10] = p, t[11] = g) : g = t[11];
    let _ = g,
        v;
    t[12] === _ ? v = t[13] : (v = () => _ != null && x()?.is_adult === !0, t[12] = _, t[13] = v);
    let y = V(v),
        b;
    t[14] === a ? b = t[15] : (b = e => l.getConversationTurnIndex(e, a), t[14] = a, t[15] = b);
    let S = O(i.id, b),
        C, w, T, E, D, k, A, j, N, P, F, ee, I, L, te;
    if (t[16] !== r || t[17] !== f || t[18] !== d || t[19] !== a || t[20] !== S || t[21] !== y) {
        F = Symbol.for(`react.early_return_sentinel`);
        bb0: {
            if (T = on({
                    business: d,
                    category: r,
                    includeImage: y,
                    mapUrl: rn(d),
                    messageId: a
                }), f == null || T.content.content_type !== M.Text) {
                F = null;
                break bb0
            }
            w = He,
            t[37] === f ? P = t[38] : (P = {
                ...f,
                isOptimisticBusinessMessage: !0
            }, t[37] = f, t[38] = P);
            let e;t[39] !== d.address || t[40] !== d.name ? (e = [d.name, d.address].filter(Boolean), t[39] = d.address, t[40] = d.name, t[41] = e) : e = t[41],
            D = e.join(`, `),
            k = `mt-4 text-sm`,
            A = T.author.role,
            j = T.id,
            N = `status`,
            C = At,
            ee = T.content.parts,
            I = !1,
            L = !1,
            te = S >= 0 ? S : 0,
            E = ze(T.content.parts)
        }
        t[16] = r, t[17] = f, t[18] = d, t[19] = a, t[20] = S, t[21] = y, t[22] = C, t[23] = w, t[24] = T, t[25] = E, t[26] = D, t[27] = k, t[28] = A, t[29] = j, t[30] = N, t[31] = P, t[32] = F, t[33] = ee, t[34] = I, t[35] = L, t[36] = te
    } else C = t[22], w = t[23], T = t[24], E = t[25], D = t[26], k = t[27], A = t[28], j = t[29], N = t[30], P = t[31], F = t[32], ee = t[33], I = t[34], L = t[35], te = t[36];
    if (F !== Symbol.for(`react.early_return_sentinel`)) return F;
    let R = s?.isGenui,
        z;
    t[42] === T ? z = t[43] : (z = [T], t[42] = T, t[43] = z);
    let ne = T.metadata?.content_references,
        B;
    t[44] !== C || t[45] !== i || t[46] !== a || t[47] !== E || t[48] !== R || t[49] !== z || t[50] !== ne || t[51] !== ee || t[52] !== I || t[53] !== L || t[54] !== te ? (B = (0, yn.jsx)(C, {
        parts: ee,
        isUserTurn: I,
        isCompletionInProgress: L,
        turnIndex: te,
        displayParts: E,
        isActivelyStreaming: !1,
        shouldHideContent: !1,
        conversation: i,
        id: a,
        assistantMessageId: a,
        isGenui: R,
        isEmpty: !1,
        messages: z,
        contentReferences: ne,
        size: `small`,
        flagSeverity: void 0,
        isCodeInteractive: !1
    }), t[44] = C, t[45] = i, t[46] = a, t[47] = E, t[48] = R, t[49] = z, t[50] = ne, t[51] = ee, t[52] = I, t[53] = L, t[54] = te, t[55] = B) : B = t[55];
    let H;
    t[56] !== D || t[57] !== k || t[58] !== A || t[59] !== j || t[60] !== N || t[61] !== B ? (H = (0, yn.jsx)(`div`, {
        "aria-label": D,
        className: k,
        "data-message-author-role": A,
        "data-message-id": j,
        role: N,
        children: B
    }), t[56] = D, t[57] = k, t[58] = A, t[59] = j, t[60] = N, t[61] = B, t[62] = H) : H = t[62];
    let re;
    return t[63] !== w || t[64] !== P || t[65] !== H ? (re = (0, yn.jsx)(w, {
        value: P,
        children: H
    }), t[63] = w, t[64] = P, t[65] = H, t[66] = re) : re = t[66], re
}

function gn(e) {
    return e.metadata?.content_references?.some(_n)
}

function _n(e) {
    return e.type === `image_group` && e.layout === `full_width` || e.type === `hidden` && e.matched_text.startsWith(`image_group`)
}
var vn, yn, bn = e((() => {
    vn = W(), I(), nn(), De(), mn(), Me(), Ot(), Je(), oe(), L(), A(), S(), ue(), sn(), Wt(), Pe(), yn = U()
}));

function xn(e) {
    "use forget";
    let t = (0, Sn.c)(38),
        {
            query: r,
            messageIds: i,
            category: a,
            conversationId: o,
            originatingConversationId: s,
            conversationContext: c,
            sidebar: l,
            isModal: d,
            onFollowUp: f,
            followUpLabel: p
        } = e,
        h = G(),
        {
            setTargetedContent: _
        } = Re(),
        {
            openThreadSidebar: v,
            closeThreadSidebar: y
        } = Xe(),
        b;
    t[0] !== p || t[1] !== h ? (b = p ?? h.formatMessage({
        id: `entities.sidebarFollowUpFloatingButton.label`,
        defaultMessage: `Follow up`
    }), t[0] = p, t[1] = h, t[2] = b) : b = t[2];
    let x = b,
        S;
    t[3] !== a || t[4] !== c || t[5] !== o || t[6] !== i || t[7] !== s || t[8] !== r || t[9] !== l ? (S = e => {
        if (u.logEventWithStatsig(`Sidebar Follow Up Button Clicked`, `chatgpt_sidebar_follow_up_button_clicked`, {
                messageIds: i,
                conversationId: o,
                originatingConversationId: s,
                category: a
            }), !r) return e;
        let t = typeof l.extraParams?.entity_name == `string` ? l.extraParams.entity_name.trim() : ``,
            n = a === `entity_sidebar_follow_up` && t ? g(r, t, c) : m(r, c);
        return {
            ...e,
            promptMessage: Ge(e.promptMessage, {
                metadata: {
                    targeted_reply: r
                }
            }),
            appendMessages: e.appendMessages == null ? [n] : [...e.appendMessages, n]
        }
    }, t[3] = a, t[4] = c, t[5] = o, t[6] = i, t[7] = s, t[8] = r, t[9] = l, t[10] = S) : S = t[10];
    let C, w;
    t[11] !== a || t[12] !== i || t[13] !== s ? (C = e => {
        let {
            serverThreadId: t,
            currentLeafId: n
        } = e;
        u.logEventWithStatsig(`Sidebar Follow Up Submitted`, `chatgpt_sidebar_follow_up_submitted`, {
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
        u.logEventWithStatsig(`Sidebar Follow Up Cleared`, `chatgpt_sidebar_follow_up_cleared`, {
            conversationId: t,
            currentLeafId: n,
            messageIds: i,
            originatingConversationId: s,
            category: a
        })
    }, t[11] = a, t[12] = i, t[13] = s, t[14] = C, t[15] = w) : (C = t[14], w = t[15]);
    let T;
    t[16] !== d || t[17] !== v || t[18] !== l ? (T = d ? () => v(l) : void 0, t[16] = d, t[17] = v, t[18] = l, t[19] = T) : T = t[19];
    let E;
    t[20] !== r || t[21] !== S || t[22] !== C || t[23] !== w || t[24] !== T ? (E = {
        type: `text`,
        label: r,
        createNewCompletionParams: S,
        onCreateCompletion: C,
        onCleared: w,
        onLabelClick: T
    }, t[20] = r, t[21] = S, t[22] = C, t[23] = w, t[24] = T, t[25] = E) : E = t[25];
    let D = E,
        O;
    t[26] !== y || t[27] !== d || t[28] !== f || t[29] !== _ || t[30] !== D ? (O = () => {
        if (f != null) {
            f();
            return
        }
        d && y(), _(D)
    }, t[26] = y, t[27] = d, t[28] = f, t[29] = _, t[30] = D, t[31] = O) : O = t[31];
    let k;
    t[32] === x ? k = t[33] : (k = (0, Cn.jsx)(`span`, {
        className: `flex items-center select-none`,
        children: x
    }), t[32] = x, t[33] = k);
    let A;
    return t[34] !== x || t[35] !== O || t[36] !== k ? (A = (0, Cn.jsx)(`div`, {
        id: wn,
        className: `fixed end-7 bottom-10 z-[50] md:bottom-8`,
        children: (0, Cn.jsx)(n, {
            size: `large`,
            color: `primary`,
            icon: ft,
            label: x,
            contentWrapperClassName: `gap-2`,
            className: `corner-superellipse/1.1 shadow-short h-12 cursor-pointer overflow-clip rounded-[28px] border-none px-6 py-7 font-medium active:opacity-100!`,
            onClick: O,
            children: k
        })
    }), t[34] = x, t[35] = O, t[36] = k, t[37] = A) : A = t[37], A
}
var Sn, Cn, wn, Tn = e((() => {
    Sn = W(), k(), ut(), qe(), Te(), b(), y(), Se(), ue(), Cn = U(), wn = `sidebar-follow-up-button`
}));

function En(e, t, n) {
    P(e, void 0, {
        ...t,
        ...n ? {
            unique_event_id: n
        } : {}
    }), R.count(i.DEFAULT, e, t)
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
            usePageBackground: y
        } = e,
        b = g === void 0 || g,
        x = _ !== void 0 && _,
        S = y !== void 0 && y,
        C = at(),
        w;
    t[0] !== o || t[1] !== s || t[2] !== a ? (w = {
        initialQuery: a,
        initialCategory: o,
        initialExtraParams: s
    }, t[0] = o, t[1] = s, t[2] = a, t[3] = w) : w = t[3];
    let {
        query: T,
        category: D,
        extraParams: k
    } = Nt(w), A = D === `ledger_detail_sidebar` && k?.detail_type === `transaction`, j = D === `ledger_detail_sidebar` && k?.detail_type === `credit_health`, M = A || j, N = d?.clientParams?.entitySidebarPresentation?.contentOwnedHorizontalInset, P = D === `entity_sidebar_follow_up`, F = d?.reference, I = d?.pinnedImage, L;
    t[4] !== D || t[5] !== n.id || t[6] !== r || t[7] !== k || t[8] !== i || t[9] !== T || t[10] !== c || t[11] !== F || t[12] !== I ? (L = {
        clientThreadId: n.id,
        reference: F,
        debugThreadId: r,
        messageId: i,
        query: T,
        category: D,
        pinnedImage: I,
        extraParams: k,
        refreshNonce: c
    }, t[4] = D, t[5] = n.id, t[6] = r, t[7] = k, t[8] = i, t[9] = T, t[10] = c, t[11] = F, t[12] = I, t[13] = L) : L = t[13];
    let {
        messages: R,
        latestMessage: z,
        sidebarConversationId: V,
        error: H,
        searchModelQueries: re,
        regenerate: ie,
        isStreaming: ae,
        debugData: oe
    } = Pt(L), se, ce;
    t[14] === V ? (se = t[15], ce = t[16]) : (se = () => {
        if (V != null) return () => Ke(`entity:${V}`)
    }, ce = [V], t[14] = V, t[15] = se, t[16] = ce), (0, Q.useEffect)(se, ce);
    let U, le;
    t[17] !== n || t[18] !== R ? (U = () => {
        zt(n, R)
    }, le = [n, R], t[17] = n, t[18] = R, t[19] = U, t[20] = le) : (U = t[19], le = t[20]), (0, Q.useEffect)(U, le);
    let ue = V ?? `no_sidebar_conversation`,
        de;
    t[21] === R ? de = t[22] : (de = R.map(Ln).join(`,`) || `error`, t[21] = R, t[22] = de);
    let fe;
    t[23] !== D || t[24] !== T || t[25] !== ue || t[26] !== de ? (fe = [D, T, ue, de], t[23] = D, t[24] = T, t[25] = ue, t[26] = de, t[27] = fe) : fe = t[27];
    let W = fe.join(`:`),
        G = (0, Q.useRef)(null),
        pe;
    t[28] === Symbol.for(`react.memo_cache_sentinel`) ? (pe = ee(), t[28] = pe) : pe = t[28];
    let {
        userCountry: me
    } = pe, he, ge;
    t[29] !== D || t[30] !== H || t[31] !== W || t[32] !== ae || t[33] !== R ? (he = () => {
        ae || !Bt(D) || R.length === 0 && H == null || G.current !== W && (G.current = W, Jt({
            category: D,
            outcome: Kt(R),
            userCountry: me ?? `unknown`,
            hiddenReason: Yt(R)
        }), Vt({
            category: D,
            imageCountBucket: qt(R)
        }))
    }, ge = [D, H, W, ae, R, me], t[29] = D, t[30] = H, t[31] = W, t[32] = ae, t[33] = R, t[34] = he, t[35] = ge) : (he = t[34], ge = t[35]), (0, Q.useEffect)(he, ge);
    let _e = te(),
        {
            showDebugConversationTurns: ve
        } = Ie(),
        ye;
    t[36] !== n.id || t[37] !== _e ? (ye = v(n.id) ?? _e, t[36] = n.id, t[37] = _e, t[38] = ye) : ye = t[38];
    let K = ye,
        be;
    t[39] === f ? be = t[40] : (be = B(`1290093942`) && f, t[39] = f, t[40] = be);
    let xe = be,
        Se = k?.alwaysShowFollowUpButton === !0,
        Ce = k?.disableFooterActions !== !0,
        we = k?.conversation_context_citation,
        Te;
    t[41] === i ? Te = t[42] : (Te = e => e?.tree.getMaybeMessage(i)?.metadata?.conversation_context_citation_metadata ?? [], t[41] = i, t[42] = Te);
    let Ee = O(n.id, Te),
        De = we?.conversation_context_type === `user_memory` || we?.conversation_context_type === `general_memory`,
        Oe = xe && !De,
        ke = Ee.length === 1 ? Ee[0]?.citation_uuid ?? null : null,
        Ae = typeof k?.conversation_context_citation_uuid == `string` && k.conversation_context_citation_uuid.length > 0 ? k.conversation_context_citation_uuid : ke,
        q = R.flatMap(Pn),
        je;
    t[43] === R ? je = t[44] : (je = R.filter(ne).map(Nn), t[43] = R, t[44] = je);
    let Me = je,
        Ne;
    t[45] === R ? Ne = t[46] : (Ne = et(R.flatMap(Mn)), t[45] = R, t[46] = Ne);
    let J = Ne,
        Y = q.length > 0,
        Pe;
    t[47] !== D || t[48] !== C || t[49] !== H || t[50] !== R ? (Pe = an({
        category: D,
        context: C,
        error: H,
        messages: R
    }), t[47] = D, t[48] = C, t[49] = H, t[50] = R, t[51] = Pe) : Pe = t[51];
    let Fe = Pe,
        Le = (0, Q.useRef)(null),
        Re = d && !x && !Y && !Fe && !we && !P && !M,
        ze = S ? `bg-surface-primary` : `bg-token-bg-primary`,
        Be = l || Re ? `mt-[calc(var(--threadFlyOut-leading-height,53px)*-1)] min-h-screen` : `mt-[-1px]`,
        Ve = Oe && `mb-10`,
        Ue;
    t[52] !== ze || t[53] !== Be || t[54] !== Ve ? (Ue = E(ze, `flex min-h-screen w-full flex-col dark:bg-black`, Be, Ve), t[52] = ze, t[53] = Be, t[54] = Ve, t[55] = Ue) : Ue = t[55];
    let We = M ? Y ? `px-0` : `px-5` : `px-6`,
        Ge = u && P && `pt-[calc(var(--header-height,3.5rem)+1px)]`,
        qe = Y && !h && !P && !A && `border-t`,
        Je = xe ? `mb-[60px]` : A ? `mb-0` : `mb-4`,
        Ye;
    t[56] !== We || t[57] !== Ge || t[58] !== qe || t[59] !== Je ? (Ye = E(`border-token-border-light flex flex-col`, We, Ge, qe, Je), t[56] = We, t[57] = Ge, t[58] = qe, t[59] = Je, t[60] = Ye) : Ye = t[60];
    let Xe;
    t[61] !== N || t[62] !== Y ? (Xe = N == null ? void 0 : {
        paddingInline: Y ? 0 : N
    }, t[61] = N, t[62] = Y, t[63] = Xe) : Xe = t[63];
    let Ze;
    t[64] !== P || t[65] !== T ? (Ze = P && (0, $.jsx)(`h3`, {
        className: `text-token-text-primary mt-4 mb-3 text-lg font-semibold break-words`,
        dir: `auto`,
        children: T
    }), t[64] = P, t[65] = T, t[66] = Ze) : Ze = t[66];
    let Qe;
    t[67] !== N || t[68] !== h || t[69] !== Y || t[70] !== j || t[71] !== b ? (Qe = h && b && (0, $.jsx)(Gt, {
        children: (0, $.jsx)(`h1`, {
            className: E(`text-token-text-primary mt-0`, j ? `pt-1 text-xl leading-[var(--text-heading-3--line-height)] font-bold` : `mb-10 text-2xl leading-8 font-semibold`, j && Y && `px-5`, j && (Y ? `-mb-1` : `mb-6`)),
            style: {
                paddingInline: Y ? N : void 0
            },
            children: h
        })
    }), t[67] = N, t[68] = h, t[69] = Y, t[70] = j, t[71] = b, t[72] = Qe) : Qe = t[72];
    let $e;
    t[73] !== H || t[74] !== k || t[75] !== Y || t[76] !== A || t[77] !== d?.widgetStateOverride?.sensitive_values_hidden ? ($e = A && !Y && !H && (0, $.jsx)(ln, {
        extraParams: k,
        sensitiveValuesHidden: d?.widgetStateOverride?.sensitive_values_hidden === !0
    }), t[73] = H, t[74] = k, t[75] = Y, t[76] = A, t[77] = d?.widgetStateOverride?.sensitive_values_hidden, t[78] = $e) : $e = t[78];
    let tt;
    t[79] !== D || t[80] !== n || t[81] !== i || t[82] !== R || t[83] !== Fe || t[84] !== d ? (tt = Fe && (0, $.jsx)(hn, {
        business: Fe,
        category: D,
        conversation: n,
        messageId: i,
        messages: R,
        sidebar: d
    }), t[79] = D, t[80] = n, t[81] = i, t[82] = R, t[83] = Fe, t[84] = d, t[85] = tt) : tt = t[85];
    let nt = Y ? q.map((e, t) => {
            let {
                message: r,
                textContent: a,
                isEmpty: o,
                displayParts: s
            } = e;
            return (0, $.jsx)(`div`, {
                className: E(`text-sm`, (M || N != null) && `[&_[data-testid=dil-widget-shell]>div]:w-full`, t === 0 && !Fe && !h && !P && !A && `mt-4`),
                "data-message-author-role": r.author.role,
                "data-message-id": r.id,
                children: (0, $.jsx)(Xt, {
                    enabled: t === 0 && !h,
                    children: (0, $.jsx)(At, {
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
        }) : !H && (0, $.jsx)(Qt, {
            searchModelQueries: re,
            variant: P ? `typing-dot` : Fe || M || D === `ask_sidebar` ? `minimal` : `default`
        }),
        rt;
    t[86] !== H || t[87] !== P ? (rt = H && (0, $.jsx)(`div`, {
        className: E(`border-token-surface-error/15 bg-token-bg-status-error text-token-text-error border p-2 text-sm whitespace-pre-wrap`, P ? `mt-0 mb-4` : `my-4`),
        children: H.message
    }), t[86] = H, t[87] = P, t[88] = rt) : rt = t[88];
    let it = !ae && Ce && (0, $.jsxs)(`div`, {
            className: `flex items-center justify-start pt-2 select-none`,
            children: [!De && q && q.length > 0 && (0, $.jsx)(Jn, {
                messages: q.map(An),
                clientThreadId: n.id,
                sidebarConversationId: V
            }), z ? De ? K && (0, $.jsx)(Xn, {
                clientThreadId: n.id,
                conversationId: K,
                messageId: i,
                citationUuid: Ae,
                conversationContextType: we?.conversation_context_type === `user_memory` || we?.conversation_context_type === `general_memory` ? we.conversation_context_type : null,
                conversationContextCitationMetadataList: Ee
            }) : V && K && (0, $.jsx)(Yn, {
                messageId: z.id,
                category: D,
                conversationId: V,
                metadata: {
                    originatingConversationId: K
                }
            }) : null, !De && (0, $.jsx)(qn, {
                onClick: ie,
                message: z ?? null
            }), z && (0, $.jsx)(Rn, {
                message: z
            })]
        }),
        ot;
    t[89] !== Me || t[90] !== Se || t[91] !== D || t[92] !== J || t[93] !== m || t[94] !== u || t[95] !== z || t[96] !== p || t[97] !== K || t[98] !== T || t[99] !== Oe || t[100] !== d || t[101] !== V ? (ot = Oe && d && z && V && (K || Se) && J && (0, $.jsx)(xn, {
        query: T,
        messageIds: Me,
        category: D,
        conversationId: V,
        originatingConversationId: K,
        conversationContext: J,
        isModal: u,
        sidebar: d,
        onFollowUp: p,
        followUpLabel: m
    }), t[89] = Me, t[90] = Se, t[91] = D, t[92] = J, t[93] = m, t[94] = u, t[95] = z, t[96] = p, t[97] = K, t[98] = T, t[99] = Oe, t[100] = d, t[101] = V, t[102] = ot) : ot = t[102];
    let st;
    t[103] !== oe || t[104] !== ae || t[105] !== z?.metadata?.__internal?.sonic_sidebar_eval_preset || t[106] !== ve ? (st = !1, t[103] = oe, t[104] = ae, t[105] = z?.metadata?.__internal?.sonic_sidebar_eval_preset, t[106] = ve, t[107] = st) : st = t[107];
    let ct;
    t[108] !== Ye || t[109] !== Xe || t[110] !== Ze || t[111] !== Qe || t[112] !== $e || t[113] !== tt || t[114] !== nt || t[115] !== rt || t[116] !== it || t[117] !== ot || t[118] !== st ? (ct = (0, $.jsxs)(`div`, {
        className: Ye,
        style: Xe,
        children: [Ze, Qe, $e, tt, nt, rt, it, ot, st]
    }), t[108] = Ye, t[109] = Xe, t[110] = Ze, t[111] = Qe, t[112] = $e, t[113] = tt, t[114] = nt, t[115] = rt, t[116] = it, t[117] = ot, t[118] = st, t[119] = ct) : ct = t[119];
    let lt;
    t[120] !== Ue || t[121] !== ct ? (lt = (0, $.jsx)(`div`, {
        ref: Le,
        className: Ue,
        children: ct
    }), t[120] = Ue, t[121] = ct, t[122] = lt) : lt = t[122];
    let ut = lt,
        X;
    t[123] !== D || t[124] !== q ? (X = D === `movie` && q.some(On), t[123] = D, t[124] = q, t[125] = X) : X = t[125];
    let dt = d?.imageThumbnailUrl,
        ft = d?.savedEntityRequest == null ? C?.favoritesAnalyticsSource : `library`,
        pt;
    t[126] !== D || t[127] !== C || t[128] !== k || t[129] !== T || t[130] !== X || t[131] !== dt || t[132] !== ft ? (pt = {
        ...C,
        entityName: T,
        entityCategory: D,
        hasMovieSidebarWidget: X,
        extraParams: k,
        imageThumbnailUrl: dt,
        favoritesAnalyticsSource: ft
    }, t[126] = D, t[127] = C, t[128] = k, t[129] = T, t[130] = X, t[131] = dt, t[132] = ft, t[133] = pt) : pt = t[133];
    let mt = d?.businessProfile,
        ht;
    t[134] !== D || t[135] !== ut || t[136] !== mt ? (ht = (0, $.jsx)(Ht, {
        profile: mt,
        category: D,
        children: ut
    }), t[134] = D, t[135] = ut, t[136] = mt, t[137] = ht) : ht = t[137];
    let gt;
    return t[138] !== pt || t[139] !== ht ? (gt = (0, $.jsx)(He, {
        value: pt,
        children: ht
    }), t[138] = pt, t[139] = ht, t[140] = gt) : gt = t[140], gt
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
    return !t || t.content_type !== M.Text && t.content_type !== M.MultimodalText ? [] : t.parts ?? []
}

function Nn(e) {
    return e.id
}

function Pn(e, t) {
    let n = t === 0;
    if (!e.content || e.content.content_type !== M.Text && e.content.content_type !== M.MultimodalText) return [];
    let r = e.content,
        i = e.metadata?.content_references?.some(In);
    return n && r.parts[0] && typeof r.parts[0] == `string` && r.parts[0].startsWith(Kn) && !i ? [] : [{
        message: e,
        textContent: r,
        isEmpty: !r.parts.some(Fn) && !i,
        displayParts: ze(r.parts ?? [])
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
    t[4] === o ? s = t[5] : (s = (0, $.jsx)(Le, {
        children: (0, $.jsx)(kt, {
            sourcesUrls: o
        })
    }), t[4] = o, t[5] = s);
    let c;
    t[6] === r ? c = t[7] : (c = (0, $.jsx)(Ye, {
        children: (0, $.jsx)(Ue, {
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
    return t[8] !== s || t[9] !== c ? (l = (0, $.jsxs)(Qe, {
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
                attribution: t.attribution ?? e.domain ?? ye(t.url, `short`)
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
                children: (0, $.jsx)(ge, {
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
    return !f() && re()
}
var Gn, Q, $, Kn, qn, Jn, Yn, Xn, Zn = e((() => {
    Gn = W(), Ut(), I(), Ze(), ae(), st(), dt(), pt(), yt(), bt(), ct(), a(), Ct(), Ot(), rt(), Dt(), Je(), C(), $e(), Tt(), ot(), L(), A(), r(), ie(), b(), s(), j(), Ne(), je(), y(), me(), _(), h(), F(), _e(), be(), nt(), fe(), z(), Q = t(de()), ue(), T(), Zt(), sn(), Rt(), fn(), bn(), Wt(), Tn(), Ft(), Pe(), Mt(), $ = U(), Kn = ``, qn = e => {
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
                        messageModelEnabledTools: [ce.Search],
                        message: r,
                        intl: i,
                        lastResponseUsedSearch: !!n
                    }).filter(Un)
                }
                if (!r || e.length === 0) {
                    let e;
                    t[13] === n ? e = t[14] : (e = () => n(), t[13] = n, t[14] = e);
                    let r;
                    t[15] !== e || t[16] !== o ? (r = (0, $.jsx)(J, {
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
                let f;t[23] !== d || t[24] !== c ? (f = (0, $.jsx)(it.Item, {
                    icon: _t,
                    label: c,
                    onSelect: d
                }), t[23] = d, t[24] = c, t[25] = f) : f = t[25];
                let p;t[26] === n ? p = t[27] : (p = e => (0, $.jsx)(it.Item, {
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
            a = le(),
            o = G(),
            s;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (s = B(`1287696420`), t[0] = s) : s = t[0];
        let l = s,
            u;
        t[1] === i ? u = t[2] : (u = {
            action: `CHATGPT_CONVERSATION_CONTROL_ACTION_TYPE_ENTITY_DETAILS_COPY_CLICKED`,
            conversationId: i
        }, t[1] = i, t[2] = u);
        let d;
        t[3] !== r || t[4] !== o || t[5] !== n || t[6] !== a ? (d = async e => {
            let t = ke({
                id: r,
                role: c.Assistant,
                messageGroups: [],
                isPrompt: !1,
                hasDisplayableMessages: !0,
                messages: n,
                isAsyncCorrection: !1,
                modelSlug: null
            }, a, r, o, {
                enableHighlight: l,
                includeMcpSourceCitations: w(N(r))
            });
            await D(t instanceof Promise ? await t : t, void 0, e)
        }, t[3] = r, t[4] = o, t[5] = n, t[6] = a, t[7] = d) : d = t[7];
        let f;
        return t[8] !== u || t[9] !== d ? (f = (0, $.jsx)(xt, {
            variant: `response`,
            size: `med`,
            structuredEventMetadata: u,
            onClick: d
        }), t[8] = u, t[9] = d, t[10] = f) : f = t[10], f
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
            l = V(re),
            d, f;
        if (t[0] !== i || t[1] !== l || t[2] !== n ? (d = () => {
                ve({
                    clientConversationId: `entity:${i}`,
                    conversationId: i,
                    messageId: n,
                    reason: l ? void 0 : q.CHATGPT_MESSAGE_FEEDBACK_CONTROL_NOT_RENDERED_REASON_WORKSPACE_DISABLED
                })
            }, f = [i, n, l], t[0] = i, t[1] = l, t[2] = n, t[3] = d, t[4] = f) : (d = t[3], f = t[4]), (0, Q.useEffect)(d, f), !l) return null;
        let p;
        t[5] !== r || t[6] !== i || t[7] !== s || t[8] !== n || t[9] !== a ? (p = e => {
            if (s !== e) {
                let t = Ce({
                        conversationId: i,
                        messageId: n,
                        rating: e,
                        submissionType: pe.CHATGPT_MESSAGE_FEEDBACK_SUBMISSION_TYPE_THUMB,
                        route: Ee.CHATGPT_MESSAGE_FEEDBACK_ROUTE_UNIFIED_USER_SIGNALS
                    }),
                    o = K({
                        rating: tt(e)
                    }, i, n, `CHAT`, a, () => we(t));
                o != null && xe(t, o);
                let s = u.logStructuredEvent(`ChatgptFeedbackInteraction`, {
                    action: `CHATGPT_FEEDBACK_ACTION_MESSAGE_RATING_SUBMITTED`,
                    surface: `CHATGPT_FEEDBACK_SURFACE_ENTITY_SIDEBAR`,
                    rating: e === `thumbsDown` ? `CHATGPT_FEEDBACK_RATING_THUMBS_DOWN` : `CHATGPT_FEEDBACK_RATING_THUMBS_UP`,
                    messageId: n,
                    conversationId: i,
                    originatingConversationId: a.originatingConversationId,
                    category: r,
                    legacyStatsigEventName: `chatgpt_sidebar_thumb_feedback`
                });
                u.logValueEventWithStatsig({
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
            } else he(i, n, e);
            c(t => t === e ? null : e)
        }, t[5] = r, t[6] = i, t[7] = s, t[8] = n, t[9] = a, t[10] = p) : p = t[10];
        let m = p,
            h;
        t[11] !== s || t[12] !== m || t[13] !== o ? (h = s !== `thumbsDown` && (0, $.jsx)(J, {
            size: `med`,
            onClick: () => {
                m(`thumbsUp`)
            },
            selected: s === `thumbsUp`,
            icon: s === `thumbsUp` ? lt : mt,
            label: o.formatMessage({
                id: `ConversationTurn.goodResponseTooltip`,
                defaultMessage: `Good response`
            }),
            testId: `good-response-turn-action-button`
        }), t[11] = s, t[12] = m, t[13] = o, t[14] = h) : h = t[14];
        let g;
        t[15] !== s || t[16] !== m || t[17] !== o ? (g = s !== `thumbsUp` && (0, $.jsx)(J, {
            size: `med`,
            onClick: () => {
                m(`thumbsDown`)
            },
            selected: s === `thumbsDown`,
            icon: s === `thumbsDown` ? X : ht,
            label: o.formatMessage({
                id: `ConversationTurn.badResponseTooltip`,
                defaultMessage: `Bad response`
            }),
            testId: `bad-response-turn-action-button`
        }), t[15] = s, t[16] = m, t[17] = o, t[18] = g) : g = t[18];
        let _;
        return t[19] !== h || t[20] !== g ? (_ = (0, $.jsxs)($.Fragment, {
            children: [h, g]
        }), t[19] = h, t[20] = g, t[21] = _) : _ = t[21], _
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
            h = V(Wn),
            g = u,
            _;
        t[3] !== o || t[4] !== r ? (_ = o != null && r.find(e => e.citation_uuid === o)?.deleted === !0, t[3] = o, t[4] = r, t[5] = _) : _ = t[5];
        let v = _,
            y;
        t[6] !== o || t[7] !== n || t[8] !== r || t[9] !== s || t[10] !== i || t[11] !== g || t[12] !== v || t[13] !== h || t[14] !== f || t[15] !== a ? (y = e => {
            if (!h || !o || f) return;
            let t = g === e ? null : e,
                c = Et({
                    actionType: t == null ? jt.CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ACTION_TYPE_FEEDBACK_CLEARED : jt.CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ACTION_TYPE_FEEDBACK_GIVEN,
                    entrypoint: wt.CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ENTRYPOINT_ENTITY_SIDEBAR_FEEDBACK_BUTTON,
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
            let l = Ve(r, o, t),
                u = l !== r;
            u && H(n, e => {
                p.updateTree(e, e => {
                    e.updateNodeMessageMetadata(a, {
                        conversation_context_citation_metadata: l
                    })
                })
            }), m(!0), d.safePost(`/sidebar/conversation_context_citation_feedback`, {
                requestBody: {
                    conversation_id: i,
                    message_id: a,
                    citation_uuid: o,
                    feedback: t,
                    deleted: v
                }
            }).catch(() => {
                u && H(n, e => {
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
        t[17] !== g || t[18] !== b || t[19] !== c || t[20] !== f ? (x = g !== `negative` && (0, $.jsx)(J, {
            size: `med`,
            onClick: () => {
                b(`positive`)
            },
            selected: g === `positive`,
            disabled: f,
            className: `disabled:hover:bg-transparent disabled:cursor-not-allowed disabled:opacity-50`,
            icon: g === `positive` ? lt : mt,
            label: c.formatMessage({
                id: `tLYX75`,
                defaultMessage: `Relevant`
            }),
            testId: `good-memory-feedback-turn-action-button`
        }), t[17] = g, t[18] = b, t[19] = c, t[20] = f, t[21] = x) : x = t[21];
        let S;
        t[22] !== g || t[23] !== b || t[24] !== c || t[25] !== f ? (S = g !== `positive` && (0, $.jsx)(J, {
            size: `med`,
            onClick: () => {
                b(`negative`)
            },
            selected: g === `negative`,
            disabled: f,
            className: `disabled:hover:bg-transparent disabled:cursor-not-allowed disabled:opacity-50`,
            icon: g === `negative` ? X : ht,
            label: c.formatMessage({
                id: `YW9vkL`,
                defaultMessage: `Not relevant`
            }),
            testId: `bad-memory-feedback-turn-action-button`
        }), t[22] = g, t[23] = b, t[24] = c, t[25] = f, t[26] = S) : S = t[26];
        let C;
        return t[27] !== x || t[28] !== S ? (C = (0, $.jsxs)($.Fragment, {
            children: [x, S]
        }), t[27] = x, t[28] = S, t[29] = C) : C = t[29], C
    }
}));
export {
    Zn as n, Dn as t
};
//# sourceMappingURL=277559ed-om4bqjs8zbytwxr6.js.map