import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $G as n,
    A0 as r,
    Bot as i,
    DX as a,
    EQ as o,
    Ea as s,
    Eq as c,
    I0 as l,
    IZ as u,
    J5 as d,
    JJ as f,
    JT as p,
    Mq as m,
    N5 as h,
    Oa as g,
    P7 as _,
    PZ as v,
    R7 as y,
    TQ as b,
    Wnt as x,
    Xnt as S,
    Y5 as C,
    Zet as w,
    Znt as T,
    _nt as E,
    aC as D,
    dQ as O,
    drt as k,
    eQ as A,
    eY as ee,
    el as j,
    fF as M,
    ftt as N,
    gtt as P,
    h1 as F,
    h8 as I,
    il as L,
    lY as R,
    lrt as z,
    m1 as B,
    nY as V,
    oC as H,
    pY as te,
    qJ as ne,
    qT as re,
    rK as U,
    uF as ie,
    urt as ae,
    ynt as oe,
    zot as se
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as W,
    N as ce,
    Rn as le,
    Vn as G,
    s as ue,
    wn as K,
    zn as q
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $8t as de,
    $dt as fe,
    $tn as pe,
    AC as me,
    EC as he,
    Gft as ge,
    JN as _e,
    JVn as J,
    KN as ve,
    MHn as ye,
    NHn as be,
    OBt as xe,
    PHn as Se,
    Qpt as Ce,
    UVn as we,
    WVn as Te,
    XN as Ee,
    XS as De,
    XVn as Oe,
    YFn as ke,
    YN as Y,
    YS as Ae,
    YVn as je,
    Z8t as Me,
    ZVn as Ne,
    Zft as X,
    Ztn as Pe,
    bpt as Fe,
    cIn as Ie,
    dS as Le,
    e5t as Re,
    fht as ze,
    ftn as Be,
    hT as Ve,
    iS as He,
    ipt as Ue,
    kBt as We,
    mHn as Ge,
    mT as Ke,
    mht as qe,
    mtn as Je,
    oS as Ye,
    pHn as Xe,
    qVn as Ze,
    r5t as Qe,
    rmt as $e,
    t5t as et,
    tft as tt,
    tmt as nt,
    tnn as rt,
    uHn as it,
    xpt as at,
    ypt as ot
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    $h as st,
    Bh as ct,
    Ch as lt,
    Hh as ut,
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
} from "./30901919-7dzdc1ou0jtwkwpt.js";
import {
    $r as xt,
    Cx as St,
    Ji as Ct,
    Sx as wt,
    Xi as Tt,
    Zi as Et,
    ad as Dt,
    ei as Ot,
    qi as kt,
    sd as At,
    wx as jt
} from "./8b34dbc2-k1zgxrtsww83602u.js";
import {
    c as Mt,
    l as Nt,
    r as Pt,
    t as Ft
} from "./24fd10e2-abtkt6x6e458c01b.js";
import {
    n as It,
    t as Lt
} from "./b5901a24-lf9tyby1b7iurr0s.js";
import {
    a as Rt,
    c as zt
} from "./0e629c03-msrca6g6m4polq5d.js";
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
} from "./bb871603-ffkzqpvn20lfbbzy.js";
import {
    n as Zt,
    t as Qt
} from "./e145c156-j81x2fxy7su3ihjz.js";
import {
    n as $t,
    r as en,
    t as tn
} from "./a81eda00-bo1ba2e0lxrld4iq.js";
import {
    n as nn,
    t as rn
} from "./4b38d6b2-nw6pu3m4rx8l0451.js";

function an({
    category: e,
    context: t,
    error: n,
    messages: r
}) {
    let i = t?.initialBusinessData,
        a = t?.entityCategory ?? t?.category,
        o = i != null && r.some(e => e.metadata?.content_references?.some(e => {
            if (e.type !== `entity_metadata` || !nt(e.entity_type)) return !1;
            let n = e.entity_data,
                r = n?.id;
            if (r === i.id) return !0;
            let a = (e.name ?? (n != null && `name` in n ? n.name : void 0))?.trim().toLowerCase();
            return a ? a === i.name.trim().toLowerCase() || a === t?.entityName?.trim().toLowerCase() : r == null
        }));
    return !n && !o && nt(e) && nt(a) && i != null && t?.entityId === i.id ? i : void 0
}

function on({
    business: e,
    category: t,
    includeImage: n,
    resolvedImageUrl: r,
    mapUrl: i,
    messageId: a
}) {
    let s = [],
        c = ``;
    if (n) {
        let n = [e.name, t.replaceAll(`_`, ` `), e.address].filter(Boolean).join(`, `),
            i = `image_group${JSON.stringify({layout:`full_width`,aspect_ratio:`1:1`,query:[n],num_per_query:1})}`;
        s.push({
            type: `image_group`,
            matched_text: i,
            start_idx: 0,
            end_idx: o(i).length,
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
        }), c = `${i}\n`
    }
    let l = `entity_metadata${JSON.stringify([`local_business`,e.name,0,{location:e.address?[e.address]:[]}])}`,
        u = o(c).length;
    return s.push({
        type: `entity_metadata`,
        matched_text: l,
        start_idx: u,
        end_idx: u + o(l).length,
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
            role: N.Assistant
        },
        content: {
            content_type: w.Text,
            parts: [`${c}${l}`]
        },
        metadata: {
            content_references: s
        }
    }
}
var sn = e((() => {
    P(), Ce(), a(), b()
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
    un = K(), vt(), It(), dn = t(G()), $t(), Z = W()
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
        c = q(),
        l;
    t[0] !== n || t[1] !== c.locale ? (l = () => pn(n, void 0, c.locale, $e()).business, t[0] = n, t[1] = c.locale, t[2] = l) : l = t[2];
    let u = h(l),
        d = at(),
        f = d?.entityCategory ?? d?.category,
        p;
    t[3] === o ? p = t[4] : (p = o.some(gn), t[3] = o, t[4] = p);
    let m = p,
        g;
    t[5] !== n || t[6] !== r || t[7] !== d?.initialBusinessImageUrl || t[8] !== m || t[9] !== s?.imageThumbnailUrl || t[10] !== f ? (g = !m && Bt(r) && Bt(f) ? fe(n, s?.imageThumbnailUrl ?? d?.initialBusinessImageUrl) : null, t[5] = n, t[6] = r, t[7] = d?.initialBusinessImageUrl, t[8] = m, t[9] = s?.imageThumbnailUrl, t[10] = f, t[11] = g) : g = t[11];
    let _ = g,
        v;
    t[12] === _ ? v = t[13] : (v = () => _ != null && F()?.is_adult === !0, t[12] = _, t[13] = v);
    let y = h(v),
        b;
    t[14] === a ? b = t[15] : (b = e => ne.getConversationTurnIndex(e, a), t[14] = a, t[15] = b);
    let x = te(i.id, b),
        S, C, T, E, D, O, k, A, ee, j, M, N, P, I, L;
    if (t[16] !== r || t[17] !== d || t[18] !== u || t[19] !== a || t[20] !== x || t[21] !== y) {
        M = Symbol.for(`react.early_return_sentinel`);
        bb0: {
            if (T = on({
                    business: u,
                    category: r,
                    includeImage: y,
                    mapUrl: rn(u),
                    messageId: a
                }), d == null || T.content.content_type !== w.Text) {
                M = null;
                break bb0
            }
            C = ot,
            t[37] === d ? j = t[38] : (j = {
                ...d,
                isOptimisticBusinessMessage: !0
            }, t[37] = d, t[38] = j);
            let e;t[39] !== u.address || t[40] !== u.name ? (e = [u.name, u.address].filter(Boolean), t[39] = u.address, t[40] = u.name, t[41] = e) : e = t[41],
            D = e.join(`, `),
            O = `mt-4 text-sm`,
            k = T.author.role,
            A = T.id,
            ee = `status`,
            S = Dt,
            N = T.content.parts,
            P = !1,
            I = !1,
            L = x >= 0 ? x : 0,
            E = rt(T.content.parts)
        }
        t[16] = r, t[17] = d, t[18] = u, t[19] = a, t[20] = x, t[21] = y, t[22] = S, t[23] = C, t[24] = T, t[25] = E, t[26] = D, t[27] = O, t[28] = k, t[29] = A, t[30] = ee, t[31] = j, t[32] = M, t[33] = N, t[34] = P, t[35] = I, t[36] = L
    } else S = t[22], C = t[23], T = t[24], E = t[25], D = t[26], O = t[27], k = t[28], A = t[29], ee = t[30], j = t[31], M = t[32], N = t[33], P = t[34], I = t[35], L = t[36];
    if (M !== Symbol.for(`react.early_return_sentinel`)) return M;
    let R = s?.isGenui,
        z;
    t[42] === T ? z = t[43] : (z = [T], t[42] = T, t[43] = z);
    let B = T.metadata?.content_references,
        V;
    t[44] !== S || t[45] !== i || t[46] !== a || t[47] !== E || t[48] !== R || t[49] !== z || t[50] !== B || t[51] !== N || t[52] !== P || t[53] !== I || t[54] !== L ? (V = (0, yn.jsx)(S, {
        parts: N,
        isUserTurn: P,
        isCompletionInProgress: I,
        turnIndex: L,
        displayParts: E,
        isActivelyStreaming: !1,
        shouldHideContent: !1,
        conversation: i,
        id: a,
        assistantMessageId: a,
        isGenui: R,
        isEmpty: !1,
        messages: z,
        contentReferences: B,
        size: `small`,
        flagSeverity: void 0,
        isCodeInteractive: !1
    }), t[44] = S, t[45] = i, t[46] = a, t[47] = E, t[48] = R, t[49] = z, t[50] = B, t[51] = N, t[52] = P, t[53] = I, t[54] = L, t[55] = V) : V = t[55];
    let H;
    t[56] !== D || t[57] !== O || t[58] !== k || t[59] !== A || t[60] !== ee || t[61] !== V ? (H = (0, yn.jsx)(`div`, {
        "aria-label": D,
        className: O,
        "data-message-author-role": k,
        "data-message-id": A,
        role: ee,
        children: V
    }), t[56] = D, t[57] = O, t[58] = k, t[59] = A, t[60] = ee, t[61] = V, t[62] = H) : H = t[62];
    let re;
    return t[63] !== C || t[64] !== j || t[65] !== H ? (re = (0, yn.jsx)(C, {
        value: j,
        children: H
    }), t[63] = C, t[64] = j, t[65] = H, t[66] = re) : re = t[66], re
}

function gn(e) {
    return e.metadata?.content_references?.some(_n)
}

function _n(e) {
    return e.type === `image_group` && e.layout === `full_width` || e.type === `hidden` && e.matched_text.startsWith(`image_group`)
}
var vn, yn, bn = e((() => {
    vn = K(), P(), nn(), tt(), mn(), Ce(), At(), pe(), B(), I(), V(), a(), le(), sn(), Wt(), Fe(), yn = W()
}));

function xn(e) {
    "use forget";
    let t = (0, Sn.c)(38),
        {
            query: n,
            messageIds: r,
            category: i,
            conversationId: a,
            originatingConversationId: o,
            conversationContext: s,
            sidebar: c,
            isModal: l,
            onFollowUp: d,
            followUpLabel: f
        } = e,
        p = q(),
        {
            setTargetedContent: m
        } = qe(),
        {
            openThreadSidebar: h,
            closeThreadSidebar: g
        } = Ie(),
        _;
    t[0] !== f || t[1] !== p ? (_ = f ?? p.formatMessage({
        id: `entities.sidebarFollowUpFloatingButton.label`,
        defaultMessage: `Follow up`
    }), t[0] = f, t[1] = p, t[2] = _) : _ = t[2];
    let y = _,
        b;
    t[3] !== i || t[4] !== s || t[5] !== a || t[6] !== r || t[7] !== o || t[8] !== n || t[9] !== c ? (b = e => {
        if (E.logEventWithStatsig(`Sidebar Follow Up Button Clicked`, `chatgpt_sidebar_follow_up_button_clicked`, {
                messageIds: r,
                conversationId: a,
                originatingConversationId: o,
                category: i
            }), !n) return e;
        let t = typeof c.extraParams?.entity_name == `string` ? c.extraParams.entity_name.trim() : ``,
            l = i === `entity_sidebar_follow_up` && t ? u(n, t, s) : v(n, s);
        return {
            ...e,
            promptMessage: We(e.promptMessage, {
                metadata: {
                    targeted_reply: n
                }
            }),
            appendMessages: e.appendMessages == null ? [l] : [...e.appendMessages, l]
        }
    }, t[3] = i, t[4] = s, t[5] = a, t[6] = r, t[7] = o, t[8] = n, t[9] = c, t[10] = b) : b = t[10];
    let x, S;
    t[11] !== i || t[12] !== r || t[13] !== o ? (x = e => {
        let {
            serverThreadId: t,
            currentLeafId: n
        } = e;
        E.logEventWithStatsig(`Sidebar Follow Up Submitted`, `chatgpt_sidebar_follow_up_submitted`, {
            conversationId: t,
            currentLeafId: n,
            messageIds: r,
            originatingConversationId: o,
            category: i
        })
    }, S = e => {
        let {
            serverThreadId: t,
            currentLeafId: n
        } = e;
        E.logEventWithStatsig(`Sidebar Follow Up Cleared`, `chatgpt_sidebar_follow_up_cleared`, {
            conversationId: t,
            currentLeafId: n,
            messageIds: r,
            originatingConversationId: o,
            category: i
        })
    }, t[11] = i, t[12] = r, t[13] = o, t[14] = x, t[15] = S) : (x = t[14], S = t[15]);
    let C;
    t[16] !== l || t[17] !== h || t[18] !== c ? (C = l ? () => h(c) : void 0, t[16] = l, t[17] = h, t[18] = c, t[19] = C) : C = t[19];
    let w;
    t[20] !== n || t[21] !== b || t[22] !== x || t[23] !== S || t[24] !== C ? (w = {
        type: `text`,
        label: n,
        createNewCompletionParams: b,
        onCreateCompletion: x,
        onCleared: S,
        onLabelClick: C
    }, t[20] = n, t[21] = b, t[22] = x, t[23] = S, t[24] = C, t[25] = w) : w = t[25];
    let T = w,
        D;
    t[26] !== g || t[27] !== l || t[28] !== d || t[29] !== m || t[30] !== T ? (D = () => {
        if (d != null) {
            d();
            return
        }
        l && g(), m(T)
    }, t[26] = g, t[27] = l, t[28] = d, t[29] = m, t[30] = T, t[31] = D) : D = t[31];
    let O;
    t[32] === y ? O = t[33] : (O = (0, Cn.jsx)(`span`, {
        className: `flex items-center select-none`,
        children: y
    }), t[32] = y, t[33] = O);
    let k;
    return t[34] !== y || t[35] !== D || t[36] !== O ? (k = (0, Cn.jsx)(`div`, {
        id: wn,
        className: `fixed end-7 bottom-10 z-[50] md:bottom-8`,
        children: (0, Cn.jsx)(re, {
            size: `large`,
            color: `primary`,
            icon: ft,
            label: y,
            contentWrapperClassName: `gap-2`,
            className: `corner-superellipse/1.1 shadow-short h-12 cursor-pointer overflow-clip rounded-[28px] border-none px-6 py-7 font-medium active:opacity-100!`,
            onClick: D,
            children: O
        })
    }), t[34] = y, t[35] = D, t[36] = O, t[37] = k) : k = t[37], k
}
var Sn, Cn, wn, Tn = e((() => {
    Sn = K(), p(), lt(), ze(), ke(), oe(), A(), xe(), le(), Cn = W(), wn = `sidebar-follow-up-button`
}));

function En(e, t, n) {
    T(e, void 0, {
        ...t,
        ...n ? {
            unique_event_id: n
        } : {}
    }), ae.count(k.DEFAULT, e, t)
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
            sidebar: f,
            enableFollowUpButton: p,
            onFollowUp: m,
            followUpLabel: h,
            contentTitle: _,
            renderContentTitle: v,
            suppressLoadingHeaderOffset: y,
            usePageBackground: b
        } = e,
        S = v === void 0 || v,
        C = y !== void 0 && y,
        w = b !== void 0 && b,
        T = at(),
        E;
    t[0] !== o || t[1] !== s || t[2] !== a ? (E = {
        initialQuery: a,
        initialCategory: o,
        initialExtraParams: s
    }, t[0] = o, t[1] = s, t[2] = a, t[3] = E) : E = t[3];
    let {
        query: D,
        category: k,
        extraParams: A
    } = Nt(E), j = k === `ledger_detail_sidebar` && A?.detail_type === `transaction`, M = k === `ledger_detail_sidebar` && A?.detail_type === `credit_health`, N = j || M, P = f?.clientParams?.entitySidebarPresentation?.contentOwnedHorizontalInset, F = k === `entity_sidebar_follow_up`, I = f?.reference, L = f?.pinnedImage, R;
    t[4] !== k || t[5] !== n.id || t[6] !== r || t[7] !== A || t[8] !== i || t[9] !== D || t[10] !== c || t[11] !== I || t[12] !== L ? (R = {
        clientThreadId: n.id,
        reference: I,
        debugThreadId: r,
        messageId: i,
        query: D,
        category: k,
        pinnedImage: L,
        extraParams: A,
        refreshNonce: c
    }, t[4] = k, t[5] = n.id, t[6] = r, t[7] = A, t[8] = i, t[9] = D, t[10] = c, t[11] = I, t[12] = L, t[13] = R) : R = t[13];
    let {
        messages: z,
        latestMessage: B,
        sidebarConversationId: V,
        error: H,
        searchModelQueries: ne,
        regenerate: re,
        isStreaming: U,
        debugData: ie
    } = Pt(R), ae, oe;
    t[14] === V ? (ae = t[15], oe = t[16]) : (ae = () => {
        if (V != null) return () => Te(`entity:${V}`)
    }, oe = [V], t[14] = V, t[15] = ae, t[16] = oe), (0, Q.useEffect)(ae, oe);
    let W, ce;
    t[17] !== n || t[18] !== z ? (W = () => {
        zt(n, z)
    }, ce = [n, z], t[17] = n, t[18] = z, t[19] = W, t[20] = ce) : (W = t[19], ce = t[20]), (0, Q.useEffect)(W, ce);
    let le = V ?? `no_sidebar_conversation`,
        G;
    t[21] === z ? G = t[22] : (G = z.map(Ln).join(`,`) || `error`, t[21] = z, t[22] = G);
    let ue;
    t[23] !== k || t[24] !== D || t[25] !== le || t[26] !== G ? (ue = [k, D, le, G], t[23] = k, t[24] = D, t[25] = le, t[26] = G, t[27] = ue) : ue = t[27];
    let K = ue.join(`:`),
        q = (0, Q.useRef)(null),
        de;
    t[28] === Symbol.for(`react.memo_cache_sentinel`) ? (de = se(), t[28] = de) : de = t[28];
    let {
        userCountry: fe
    } = de, pe, me;
    t[29] !== k || t[30] !== H || t[31] !== K || t[32] !== U || t[33] !== z ? (pe = () => {
        U || !Bt(k) || z.length === 0 && H == null || q.current !== K && (q.current = K, Jt({
            category: k,
            outcome: Kt(z),
            userCountry: fe ?? `unknown`,
            hiddenReason: Yt(z)
        }), Vt({
            category: k,
            imageCountBucket: qt(z)
        }))
    }, me = [k, H, K, U, z, fe], t[29] = k, t[30] = H, t[31] = K, t[32] = U, t[33] = z, t[34] = pe, t[35] = me) : (pe = t[34], me = t[35]), (0, Q.useEffect)(pe, me);
    let he = g(),
        {
            showDebugConversationTurns: ge
        } = Je(),
        _e;
    t[36] !== n.id || t[37] !== he ? (_e = ee(n.id) ?? he, t[36] = n.id, t[37] = he, t[38] = _e) : _e = t[38];
    let J = _e,
        ve;
    t[39] === p ? ve = t[40] : (ve = x(`1290093942`) && p, t[39] = p, t[40] = ve);
    let ye = ve,
        be = A?.alwaysShowFollowUpButton === !0,
        xe = A?.disableFooterActions !== !0,
        Se = A?.conversation_context_citation,
        Ce;
    t[41] === i ? Ce = t[42] : (Ce = e => e?.tree.getMaybeMessage(i)?.metadata?.conversation_context_citation_metadata ?? [], t[41] = i, t[42] = Ce);
    let we = te(n.id, Ce),
        Ee = Se?.conversation_context_type === `user_memory` || Se?.conversation_context_type === `general_memory`,
        De = ye && !Ee,
        Oe = we.length === 1 ? we[0]?.citation_uuid ?? null : null,
        ke = typeof A?.conversation_context_citation_uuid == `string` && A.conversation_context_citation_uuid.length > 0 ? A.conversation_context_citation_uuid : Oe,
        Y = z.flatMap(Pn),
        Ae;
    t[43] === z ? Ae = t[44] : (Ae = z.filter(O).map(Nn), t[43] = z, t[44] = Ae);
    let je = Ae,
        Me;
    t[45] === z ? Me = t[46] : (Me = Pe(z.flatMap(Mn)), t[45] = z, t[46] = Me);
    let Ne = Me,
        X = Y.length > 0,
        Fe;
    t[47] !== k || t[48] !== T || t[49] !== H || t[50] !== z ? (Fe = an({
        category: k,
        context: T,
        error: H,
        messages: z
    }), t[47] = k, t[48] = T, t[49] = H, t[50] = z, t[51] = Fe) : Fe = t[51];
    let Ie = Fe,
        Le = (0, Q.useRef)(null),
        Re = f && !C && !X && !Ie && !Se && !F && !N,
        ze = w ? `bg-surface-primary` : `bg-token-bg-primary`,
        Be = l || Re ? `mt-[calc(var(--threadFlyOut-leading-height,53px)*-1)] min-h-screen` : `mt-[-1px]`,
        Ve = De && `mb-10`,
        He;
    t[52] !== ze || t[53] !== Be || t[54] !== Ve ? (He = d(ze, `flex min-h-screen w-full flex-col dark:bg-black`, Be, Ve), t[52] = ze, t[53] = Be, t[54] = Ve, t[55] = He) : He = t[55];
    let Ue = N ? X ? `px-0` : `px-5` : `px-6`,
        We = u && F && `pt-[calc(var(--header-height,3.5rem)+1px)]`,
        Ge = X && !_ && !F && !j && `border-t`,
        Ke = ye ? `mb-[60px]` : j ? `mb-0` : `mb-4`,
        qe;
    t[56] !== Ue || t[57] !== We || t[58] !== Ge || t[59] !== Ke ? (qe = d(`border-token-border-light flex flex-col`, Ue, We, Ge, Ke), t[56] = Ue, t[57] = We, t[58] = Ge, t[59] = Ke, t[60] = qe) : qe = t[60];
    let Ye;
    t[61] !== P || t[62] !== X ? (Ye = P == null ? void 0 : {
        paddingInline: X ? 0 : P
    }, t[61] = P, t[62] = X, t[63] = Ye) : Ye = t[63];
    let Xe;
    t[64] !== F || t[65] !== D ? (Xe = F && (0, $.jsx)(`h3`, {
        className: `text-token-text-primary mt-4 mb-3 text-lg font-semibold break-words`,
        dir: `auto`,
        children: D
    }), t[64] = F, t[65] = D, t[66] = Xe) : Xe = t[66];
    let Ze;
    t[67] !== P || t[68] !== _ || t[69] !== X || t[70] !== M || t[71] !== S ? (Ze = _ && S && (0, $.jsx)(Gt, {
        children: (0, $.jsx)(`h1`, {
            className: d(`text-token-text-primary mt-0`, M ? `pt-1 text-xl leading-[var(--text-heading-3--line-height)] font-bold` : `mb-10 text-2xl leading-8 font-semibold`, M && X && `px-5`, M && (X ? `-mb-1` : `mb-6`)),
            style: {
                paddingInline: X ? P : void 0
            },
            children: _
        })
    }), t[67] = P, t[68] = _, t[69] = X, t[70] = M, t[71] = S, t[72] = Ze) : Ze = t[72];
    let Qe;
    t[73] !== H || t[74] !== A || t[75] !== X || t[76] !== j || t[77] !== f?.widgetStateOverride?.sensitive_values_hidden ? (Qe = j && !X && !H && (0, $.jsx)(ln, {
        extraParams: A,
        sensitiveValuesHidden: f?.widgetStateOverride?.sensitive_values_hidden === !0
    }), t[73] = H, t[74] = A, t[75] = X, t[76] = j, t[77] = f?.widgetStateOverride?.sensitive_values_hidden, t[78] = Qe) : Qe = t[78];
    let $e;
    t[79] !== k || t[80] !== n || t[81] !== i || t[82] !== z || t[83] !== Ie || t[84] !== f ? ($e = Ie && (0, $.jsx)(hn, {
        business: Ie,
        category: k,
        conversation: n,
        messageId: i,
        messages: z,
        sidebar: f
    }), t[79] = k, t[80] = n, t[81] = i, t[82] = z, t[83] = Ie, t[84] = f, t[85] = $e) : $e = t[85];
    let et = X ? Y.map((e, t) => {
            let {
                message: r,
                textContent: a,
                isEmpty: o,
                displayParts: s
            } = e;
            return (0, $.jsx)(`div`, {
                className: d(`text-sm`, (N || P != null) && `[&_[data-testid=dil-widget-shell]>div]:w-full`, t === 0 && !Ie && !_ && !F && !j && `mt-4`),
                "data-message-author-role": r.author.role,
                "data-message-id": r.id,
                children: (0, $.jsx)(Xt, {
                    enabled: t === 0 && !_,
                    children: (0, $.jsx)(Dt, {
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
                        isGenui: f?.isGenui,
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
            searchModelQueries: ne,
            variant: F ? `typing-dot` : Ie || N || k === `ask_sidebar` ? `minimal` : `default`
        }),
        tt;
    t[86] !== H || t[87] !== F ? (tt = H && (0, $.jsx)(`div`, {
        className: d(`border-token-surface-error/15 bg-token-bg-status-error text-token-text-error border p-2 text-sm whitespace-pre-wrap`, F ? `mt-0 mb-4` : `my-4`),
        children: H.message
    }), t[86] = H, t[87] = F, t[88] = tt) : tt = t[88];
    let nt = !U && xe && (0, $.jsxs)(`div`, {
            className: `flex items-center justify-start pt-2 select-none`,
            children: [!Ee && Y && Y.length > 0 && (0, $.jsx)(Jn, {
                messages: Y.map(An),
                clientThreadId: n.id,
                sidebarConversationId: V
            }), B ? Ee ? J && (0, $.jsx)(Xn, {
                clientThreadId: n.id,
                conversationId: J,
                messageId: i,
                citationUuid: ke,
                conversationContextType: Se?.conversation_context_type === `user_memory` || Se?.conversation_context_type === `general_memory` ? Se.conversation_context_type : null,
                conversationContextCitationMetadataList: we
            }) : V && J && (0, $.jsx)(Yn, {
                messageId: B.id,
                category: k,
                conversationId: V,
                metadata: {
                    originatingConversationId: J
                }
            }) : null, !Ee && (0, $.jsx)(qn, {
                onClick: re,
                message: B ?? null
            }), B && (0, $.jsx)(Rn, {
                message: B
            })]
        }),
        rt;
    t[89] !== je || t[90] !== be || t[91] !== k || t[92] !== Ne || t[93] !== h || t[94] !== u || t[95] !== B || t[96] !== m || t[97] !== J || t[98] !== D || t[99] !== De || t[100] !== f || t[101] !== V ? (rt = De && f && B && V && (J || be) && Ne && (0, $.jsx)(xn, {
        query: D,
        messageIds: je,
        category: k,
        conversationId: V,
        originatingConversationId: J,
        conversationContext: Ne,
        isModal: u,
        sidebar: f,
        onFollowUp: m,
        followUpLabel: h
    }), t[89] = je, t[90] = be, t[91] = k, t[92] = Ne, t[93] = h, t[94] = u, t[95] = B, t[96] = m, t[97] = J, t[98] = D, t[99] = De, t[100] = f, t[101] = V, t[102] = rt) : rt = t[102];
    let it;
    t[103] !== ie || t[104] !== U || t[105] !== B?.metadata?.__internal?.sonic_sidebar_eval_preset || t[106] !== ge ? (it = !1, t[103] = ie, t[104] = U, t[105] = B?.metadata?.__internal?.sonic_sidebar_eval_preset, t[106] = ge, t[107] = it) : it = t[107];
    let st;
    t[108] !== qe || t[109] !== Ye || t[110] !== Xe || t[111] !== Ze || t[112] !== Qe || t[113] !== $e || t[114] !== et || t[115] !== tt || t[116] !== nt || t[117] !== rt || t[118] !== it ? (st = (0, $.jsxs)(`div`, {
        className: qe,
        style: Ye,
        children: [Xe, Ze, Qe, $e, et, tt, nt, rt, it]
    }), t[108] = qe, t[109] = Ye, t[110] = Xe, t[111] = Ze, t[112] = Qe, t[113] = $e, t[114] = et, t[115] = tt, t[116] = nt, t[117] = rt, t[118] = it, t[119] = st) : st = t[119];
    let ct;
    t[120] !== He || t[121] !== st ? (ct = (0, $.jsx)(`div`, {
        ref: Le,
        className: He,
        children: st
    }), t[120] = He, t[121] = st, t[122] = ct) : ct = t[122];
    let lt = ct,
        ut;
    t[123] !== k || t[124] !== Y ? (ut = k === `movie` && Y.some(On), t[123] = k, t[124] = Y, t[125] = ut) : ut = t[125];
    let dt = f?.imageThumbnailUrl,
        ft = f?.savedEntityRequest == null ? T?.favoritesAnalyticsSource : `library`,
        pt;
    t[126] !== k || t[127] !== T || t[128] !== A || t[129] !== D || t[130] !== ut || t[131] !== dt || t[132] !== ft ? (pt = {
        ...T,
        entityName: D,
        entityCategory: k,
        hasMovieSidebarWidget: ut,
        extraParams: A,
        imageThumbnailUrl: dt,
        favoritesAnalyticsSource: ft
    }, t[126] = k, t[127] = T, t[128] = A, t[129] = D, t[130] = ut, t[131] = dt, t[132] = ft, t[133] = pt) : pt = t[133];
    let mt = f?.businessProfile,
        ht;
    t[134] !== k || t[135] !== lt || t[136] !== mt ? (ht = (0, $.jsx)(Ht, {
        profile: mt,
        category: k,
        children: lt
    }), t[134] = k, t[135] = lt, t[136] = mt, t[137] = ht) : ht = t[137];
    let gt;
    return t[138] !== pt || t[139] !== ht ? (gt = (0, $.jsx)(ot, {
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
    return !t || t.content_type !== w.Text && t.content_type !== w.MultimodalText ? [] : t.parts ?? []
}

function Nn(e) {
    return e.id
}

function Pn(e, t) {
    let n = t === 0;
    if (!e.content || e.content.content_type !== w.Text && e.content.content_type !== w.MultimodalText) return [];
    let r = e.content,
        i = e.metadata?.content_references?.some(In);
    return n && r.parts[0] && typeof r.parts[0] == `string` && r.parts[0].startsWith(Kn) && !i ? [] : [{
        message: e,
        textContent: r,
        isEmpty: !r.parts.some(Fn) && !i,
        displayParts: rt(r.parts ?? [])
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
    t[4] === o ? s = t[5] : (s = (0, $.jsx)(et, {
        children: (0, $.jsx)(kt, {
            sourcesUrls: o
        })
    }), t[4] = o, t[5] = s);
    let c;
    t[6] === r ? c = t[7] : (c = (0, $.jsx)(de, {
        children: (0, $.jsx)(Me, {
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
    return t[8] !== s || t[9] !== c ? (l = (0, $.jsxs)(Re, {
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
                attribution: t.attribution ?? e.domain ?? Y(t.url, `short`)
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
                children: (0, $.jsx)(ve, {
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
    return !l() && U()
}
var Gn, Q, $, Kn, qn, Jn, Yn, Xn, Zn = e((() => {
    Gn = K(), Ut(), P(), _e(), M(), Se(), dt(), pt(), yt(), bt(), st(), r(), Ct(), At(), Ve(), Ot(), pe(), n(), Ye(), Tt(), Be(), I(), V(), m(), j(), oe(), s(), H(), De(), Ee(), A(), he(), y(), z(), S(), ge(), Ze(), Qe(), ue(), C(), Q = t(G()), le(), i(), Zt(), sn(), Rt(), fn(), bn(), Wt(), Tn(), Ft(), Fe(), Mt(), $ = W(), Kn = ``, qn = e => {
        "use forget";
        let t = (0, Gn.c)(28),
            {
                onClick: n,
                message: r
            } = e,
            i = q(),
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
        let l = s,
            u, d;
        if (t[4] !== i || t[5] !== r || t[6] !== n || t[7] !== o || t[8] !== l) {
            d = Symbol.for(`react.early_return_sentinel`);
            bb0: {
                let e = [];
                if (r) {
                    let n;
                    t[11] === r ? n = t[12] : (n = Vn(r)?.length, t[11] = r, t[12] = n), e = me({
                        messageModelEnabledTools: [c.Search],
                        message: r,
                        intl: i,
                        lastResponseUsedSearch: !!n
                    }).filter(Un)
                }
                if (!r || e.length === 0) {
                    let e;
                    t[13] === n ? e = t[14] : (e = () => n(), t[13] = n, t[14] = e);
                    let r;
                    t[15] !== e || t[16] !== o ? (r = (0, $.jsx)(Ke, {
                        icon: _t,
                        onClick: e,
                        label: o,
                        size: `med`
                    }), t[15] = e, t[16] = o, t[17] = r) : r = t[17], d = r;
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
                let f;t[21] === n ? f = t[22] : (f = () => n(), t[21] = n, t[22] = f);
                let p;t[23] !== f || t[24] !== l ? (p = (0, $.jsx)(be.Item, {
                    icon: _t,
                    label: l,
                    onSelect: f
                }), t[23] = f, t[24] = l, t[25] = p) : p = t[25];
                let m;t[26] === n ? m = t[27] : (m = e => (0, $.jsx)(be.Item, {
                    icon: e.icon,
                    label: e.label,
                    onSelect: () => n({
                        forceUseSearch: e.extraStreamParams.forceUseSearch
                    })
                }, e.key), t[26] = n, t[27] = m),
                u = (0, $.jsxs)(ye, {
                    size: `small`,
                    side: `top`,
                    sideOffset: 4,
                    tooltip: o,
                    triggerButton: s,
                    children: [p, e.map(m)]
                })
            }
            t[4] = i, t[5] = r, t[6] = n, t[7] = o, t[8] = l, t[9] = u, t[10] = d
        } else u = t[9], d = t[10];
        return d === Symbol.for(`react.early_return_sentinel`) ? u : d
    }, Jn = e => {
        "use forget";
        let t = (0, Gn.c)(11),
            {
                messages: n,
                clientThreadId: r,
                sidebarConversationId: i
            } = e,
            a = ce(),
            o = q(),
            s;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (s = x(`1287696420`), t[0] = s) : s = t[0];
        let c = s,
            l;
        t[1] === i ? l = t[2] : (l = {
            action: `CHATGPT_CONVERSATION_CONTROL_ACTION_TYPE_ENTITY_DETAILS_COPY_CLICKED`,
            conversationId: i
        }, t[1] = i, t[2] = l);
        let u;
        t[3] !== r || t[4] !== o || t[5] !== n || t[6] !== a ? (u = async e => {
            let t = Ae({
                id: r,
                role: N.Assistant,
                messageGroups: [],
                isPrompt: !1,
                hasDisplayableMessages: !0,
                messages: n,
                isAsyncCorrection: !1,
                modelSlug: null
            }, a, r, o, {
                enableHighlight: c,
                includeMcpSourceCitations: L(ie(r))
            });
            await D(t instanceof Promise ? await t : t, void 0, e)
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
            o = q(),
            [s, c] = (0, Q.useState)(null),
            l = h(U),
            u, d;
        if (t[0] !== i || t[1] !== l || t[2] !== n ? (u = () => {
                Ne({
                    clientConversationId: `entity:${i}`,
                    conversationId: i,
                    messageId: n,
                    reason: l ? void 0 : it.CHATGPT_MESSAGE_FEEDBACK_CONTROL_NOT_RENDERED_REASON_WORKSPACE_DISABLED
                })
            }, d = [i, n, l], t[0] = i, t[1] = l, t[2] = n, t[3] = u, t[4] = d) : (u = t[3], d = t[4]), (0, Q.useEffect)(u, d), !l) return null;
        let f;
        t[5] !== r || t[6] !== i || t[7] !== s || t[8] !== n || t[9] !== a ? (f = e => {
            if (s !== e) {
                let t = we({
                        conversationId: i,
                        messageId: n,
                        rating: e,
                        submissionType: Ge.CHATGPT_MESSAGE_FEEDBACK_SUBMISSION_TYPE_THUMB,
                        route: Xe.CHATGPT_MESSAGE_FEEDBACK_ROUTE_UNIFIED_USER_SIGNALS
                    }),
                    o = X({
                        rating: Ue(e)
                    }, i, n, `CHAT`, a, () => je(t));
                o != null && J(t, o);
                let s = E.logStructuredEvent(`ChatgptFeedbackInteraction`, {
                    action: `CHATGPT_FEEDBACK_ACTION_MESSAGE_RATING_SUBMITTED`,
                    surface: `CHATGPT_FEEDBACK_SURFACE_ENTITY_SIDEBAR`,
                    rating: e === `thumbsDown` ? `CHATGPT_FEEDBACK_RATING_THUMBS_DOWN` : `CHATGPT_FEEDBACK_RATING_THUMBS_UP`,
                    messageId: n,
                    conversationId: i,
                    originatingConversationId: a.originatingConversationId,
                    category: r,
                    legacyStatsigEventName: `chatgpt_sidebar_thumb_feedback`
                });
                E.logValueEventWithStatsig({
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
            } else Oe(i, n, e);
            c(t => t === e ? null : e)
        }, t[5] = r, t[6] = i, t[7] = s, t[8] = n, t[9] = a, t[10] = f) : f = t[10];
        let p = f,
            m;
        t[11] !== s || t[12] !== p || t[13] !== o ? (m = s !== `thumbsDown` && (0, $.jsx)(Ke, {
            size: `med`,
            onClick: () => {
                p(`thumbsUp`)
            },
            selected: s === `thumbsUp`,
            icon: s === `thumbsUp` ? ct : mt,
            label: o.formatMessage({
                id: `ConversationTurn.goodResponseTooltip`,
                defaultMessage: `Good response`
            }),
            testId: `good-response-turn-action-button`
        }), t[11] = s, t[12] = p, t[13] = o, t[14] = m) : m = t[14];
        let g;
        t[15] !== s || t[16] !== p || t[17] !== o ? (g = s !== `thumbsUp` && (0, $.jsx)(Ke, {
            size: `med`,
            onClick: () => {
                p(`thumbsDown`)
            },
            selected: s === `thumbsDown`,
            icon: s === `thumbsDown` ? ut : ht,
            label: o.formatMessage({
                id: `ConversationTurn.badResponseTooltip`,
                defaultMessage: `Bad response`
            }),
            testId: `bad-response-turn-action-button`
        }), t[15] = s, t[16] = p, t[17] = o, t[18] = g) : g = t[18];
        let _;
        return t[19] !== m || t[20] !== g ? (_ = (0, $.jsxs)($.Fragment, {
            children: [m, g]
        }), t[19] = m, t[20] = g, t[21] = _) : _ = t[21], _
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
            c = q(),
            l;
        t[0] !== o || t[1] !== r ? (l = o ? He(r, o) : null, t[0] = o, t[1] = r, t[2] = l) : l = t[2];
        let u = l,
            [d, p] = (0, Q.useState)(!1),
            m = h(Wn),
            g = u,
            v;
        t[3] !== o || t[4] !== r ? (v = o != null && r.find(e => e.citation_uuid === o)?.deleted === !0, t[3] = o, t[4] = r, t[5] = v) : v = t[5];
        let y = v,
            b;
        t[6] !== o || t[7] !== n || t[8] !== r || t[9] !== s || t[10] !== i || t[11] !== g || t[12] !== y || t[13] !== m || t[14] !== d || t[15] !== a ? (b = e => {
            if (!m || !o || d) return;
            let t = g === e ? null : e,
                c = Et({
                    actionType: t == null ? wt.CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ACTION_TYPE_FEEDBACK_CLEARED : wt.CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ACTION_TYPE_FEEDBACK_GIVEN,
                    entrypoint: St.CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ENTRYPOINT_ENTITY_SIDEBAR_FEEDBACK_BUTTON,
                    target: jt.CHATGPT_WEB_MEMORY_CITATION_INTERACTION_TARGET_ENTITY_SIDEBAR,
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
            let l = Le(r, o, t),
                u = l !== r;
            u && R(n, e => {
                f.updateTree(e, e => {
                    e.updateNodeMessageMetadata(a, {
                        conversation_context_citation_metadata: l
                    })
                })
            }), p(!0), _.safePost(`/sidebar/conversation_context_citation_feedback`, {
                requestBody: {
                    conversation_id: i,
                    message_id: a,
                    citation_uuid: o,
                    feedback: t,
                    deleted: y
                }
            }).catch(() => {
                u && R(n, e => {
                    f.updateTree(e, e => {
                        e.updateNodeMessageMetadata(a, {
                            conversation_context_citation_metadata: r
                        })
                    })
                })
            }).finally(() => {
                p(!1)
            })
        }, t[6] = o, t[7] = n, t[8] = r, t[9] = s, t[10] = i, t[11] = g, t[12] = y, t[13] = m, t[14] = d, t[15] = a, t[16] = b) : b = t[16];
        let x = b;
        if (!o || !m) return null;
        let S;
        t[17] !== g || t[18] !== x || t[19] !== c || t[20] !== d ? (S = g !== `negative` && (0, $.jsx)(Ke, {
            size: `med`,
            onClick: () => {
                x(`positive`)
            },
            selected: g === `positive`,
            disabled: d,
            className: `disabled:hover:bg-transparent disabled:cursor-not-allowed disabled:opacity-50`,
            icon: g === `positive` ? ct : mt,
            label: c.formatMessage({
                id: `tLYX75`,
                defaultMessage: `Relevant`
            }),
            testId: `good-memory-feedback-turn-action-button`
        }), t[17] = g, t[18] = x, t[19] = c, t[20] = d, t[21] = S) : S = t[21];
        let C;
        t[22] !== g || t[23] !== x || t[24] !== c || t[25] !== d ? (C = g !== `positive` && (0, $.jsx)(Ke, {
            size: `med`,
            onClick: () => {
                x(`negative`)
            },
            selected: g === `negative`,
            disabled: d,
            className: `disabled:hover:bg-transparent disabled:cursor-not-allowed disabled:opacity-50`,
            icon: g === `negative` ? ut : ht,
            label: c.formatMessage({
                id: `YW9vkL`,
                defaultMessage: `Not relevant`
            }),
            testId: `bad-memory-feedback-turn-action-button`
        }), t[22] = g, t[23] = x, t[24] = c, t[25] = d, t[26] = C) : C = t[26];
        let w;
        return t[27] !== S || t[28] !== C ? (w = (0, $.jsxs)($.Fragment, {
            children: [S, C]
        }), t[27] = S, t[28] = C, t[29] = w) : w = t[29], w
    }
}));
export {
    Zn as n, Dn as t
};
//# sourceMappingURL=277559ed-nxntik570iztqzo1.js.map