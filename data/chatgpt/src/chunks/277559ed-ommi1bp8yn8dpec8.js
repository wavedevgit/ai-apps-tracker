import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    Aq as r,
    B0 as i,
    CQ as a,
    Da as o,
    Drt as s,
    Ert as c,
    GJ as l,
    Int as u,
    J7 as d,
    K0 as f,
    KJ as p,
    MZ as m,
    Ort as h,
    PZ as g,
    Pnt as _,
    Q7 as v,
    QJ as y,
    QZ as b,
    T1 as x,
    TX as S,
    Ttt as C,
    ZG as w,
    al as T,
    c7 as E,
    dC as D,
    dY as ee,
    eE as O,
    eY as k,
    fC as A,
    gF as j,
    k8 as M,
    ka as te,
    ktt as N,
    l7 as P,
    lQ as ne,
    mrt as F,
    nst as re,
    prt as I,
    q5 as L,
    rst as R,
    sY as z,
    srt as B,
    tK as V,
    tl as ie,
    utt as ae,
    vF as H,
    w1 as oe,
    wQ as se,
    wq as ce
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    Bn as U,
    N as le,
    Rn as ue,
    Vn as W,
    s as de,
    wn as G,
    zn as K
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $8t as fe,
    $pt as pe,
    AIn as me,
    DC as he,
    FHn as ge,
    IHn as _e,
    JN as ve,
    Jpt as q,
    KN as ye,
    MHn as be,
    Qtn as xe,
    TBt as Se,
    Vft as Ce,
    WN as we,
    X8t as Te,
    XS as Ee,
    Xtn as De,
    Y8t as Oe,
    Ydt as ke,
    Z8t as Ae,
    ZS as J,
    Zdt as je,
    Zpt as Me,
    _Hn as Ne,
    _In as Pe,
    _T as Y,
    _pt as Fe,
    aS as Ie,
    cht as X,
    dHn as Le,
    eUn as Re,
    enn as ze,
    ept as Be,
    fHn as Ve,
    fS as He,
    gHn as Ue,
    gpt as We,
    hHn as Ge,
    hpt as Ke,
    jC as qe,
    ltn as Je,
    nUn as Ye,
    q8t as Xe,
    qN as Ze,
    qft as Qe,
    sS as $e,
    stn as et,
    tUn as tt,
    uht as nt,
    vHn as rt,
    vT as it,
    wBt as at,
    yHn as ot
} from "./conversation-small-i79e9c315w50am5f.js";
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
} from "./30901919-ikyi1r55w2i02fom.js";
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
} from "./8b34dbc2-m4883pai3e8fx8q6.js";
import {
    c as Mt,
    l as Nt,
    r as Pt,
    t as Ft
} from "./24fd10e2-mw86yony0bfrpsrv.js";
import {
    n as It,
    t as Lt
} from "./b5901a24-lf9tyby1b7iurr0s.js";
import {
    a as Rt,
    c as zt
} from "./0e629c03-lt8y6k5vr59n9qp4.js";
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
} from "./bb871603-hukrxnzcqiofpytc.js";
import {
    n as Zt,
    t as Qt
} from "./e145c156-zn63pee33i9dagti.js";
import {
    n as $t,
    r as en,
    t as tn
} from "./a81eda00-ctj2wi69wjutdfx3.js";
import {
    n as nn,
    t as rn
} from "./4b38d6b2-dx8grcjdxzwaj9p7.js";

function an({
    category: e,
    context: t,
    error: n,
    messages: r
}) {
    let i = t?.initialBusinessData,
        a = t?.entityCategory ?? t?.category,
        o = i != null && r.some(e => e.metadata?.content_references?.some(e => {
            if (e.type !== `entity_metadata` || !Me(e.entity_type)) return !1;
            let n = e.entity_data,
                r = n?.id;
            if (r === i.id) return !0;
            let a = (e.name ?? (n != null && `name` in n ? n.name : void 0))?.trim().toLowerCase();
            return a ? a === i.name.trim().toLowerCase() || a === t?.entityName?.trim().toLowerCase() : r == null
        }));
    return !n && !o && Me(e) && Me(a) && i != null && t?.entityId === i.id ? i : void 0
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
    let c = `entity_metadata${JSON.stringify([`local_business`,e.name,0,{location:e.address?[e.address]:[]}])}`,
        l = se(s).length;
    return o.push({
        type: `entity_metadata`,
        matched_text: c,
        start_idx: l,
        end_idx: l + se(c).length,
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
            role: C.Assistant
        },
        content: {
            content_type: ae.Text,
            parts: [`${s}${c}`]
        },
        metadata: {
            content_references: o
        }
    }
}
var sn = e((() => {
    N(), q(), S(), a()
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
    un = G(), vt(), It(), dn = t(W()), $t(), Z = U()
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
        c = K(),
        u;
    t[0] !== n || t[1] !== c.locale ? (u = () => pn(n, void 0, c.locale, pe()).business, t[0] = n, t[1] = c.locale, t[2] = u) : u = t[2];
    let d = L(u),
        f = Fe(),
        p = f?.entityCategory ?? f?.category,
        m;
    t[3] === o ? m = t[4] : (m = o.some(gn), t[3] = o, t[4] = m);
    let h = m,
        g;
    t[5] !== n || t[6] !== r || t[7] !== f?.initialBusinessImageUrl || t[8] !== h || t[9] !== s?.imageThumbnailUrl || t[10] !== p ? (g = !h && Bt(r) && Bt(p) ? ke(n, s?.imageThumbnailUrl ?? f?.initialBusinessImageUrl) : null, t[5] = n, t[6] = r, t[7] = f?.initialBusinessImageUrl, t[8] = h, t[9] = s?.imageThumbnailUrl, t[10] = p, t[11] = g) : g = t[11];
    let _ = g,
        v;
    t[12] === _ ? v = t[13] : (v = () => _ != null && x()?.is_adult === !0, t[12] = _, t[13] = v);
    let y = L(v),
        b;
    t[14] === a ? b = t[15] : (b = e => l.getConversationTurnIndex(e, a), t[14] = a, t[15] = b);
    let S = ee(i.id, b),
        C, w, T, E, D, O, k, A, j, M, te, N, P, ne, F;
    if (t[16] !== r || t[17] !== f || t[18] !== d || t[19] !== a || t[20] !== S || t[21] !== y) {
        te = Symbol.for(`react.early_return_sentinel`);
        bb0: {
            if (T = on({
                    business: d,
                    category: r,
                    includeImage: y,
                    mapUrl: rn(d),
                    messageId: a
                }), f == null || T.content.content_type !== ae.Text) {
                te = null;
                break bb0
            }
            w = Ke,
            t[37] === f ? M = t[38] : (M = {
                ...f,
                isOptimisticBusinessMessage: !0
            }, t[37] = f, t[38] = M);
            let e;t[39] !== d.address || t[40] !== d.name ? (e = [d.name, d.address].filter(Boolean), t[39] = d.address, t[40] = d.name, t[41] = e) : e = t[41],
            D = e.join(`, `),
            O = `mt-4 text-sm`,
            k = T.author.role,
            A = T.id,
            j = `status`,
            C = At,
            N = T.content.parts,
            P = !1,
            ne = !1,
            F = S >= 0 ? S : 0,
            E = ze(T.content.parts)
        }
        t[16] = r, t[17] = f, t[18] = d, t[19] = a, t[20] = S, t[21] = y, t[22] = C, t[23] = w, t[24] = T, t[25] = E, t[26] = D, t[27] = O, t[28] = k, t[29] = A, t[30] = j, t[31] = M, t[32] = te, t[33] = N, t[34] = P, t[35] = ne, t[36] = F
    } else C = t[22], w = t[23], T = t[24], E = t[25], D = t[26], O = t[27], k = t[28], A = t[29], j = t[30], M = t[31], te = t[32], N = t[33], P = t[34], ne = t[35], F = t[36];
    if (te !== Symbol.for(`react.early_return_sentinel`)) return te;
    let re = s?.isGenui,
        I;
    t[42] === T ? I = t[43] : (I = [T], t[42] = T, t[43] = I);
    let R = T.metadata?.content_references,
        z;
    t[44] !== C || t[45] !== i || t[46] !== a || t[47] !== E || t[48] !== re || t[49] !== I || t[50] !== R || t[51] !== N || t[52] !== P || t[53] !== ne || t[54] !== F ? (z = (0, yn.jsx)(C, {
        parts: N,
        isUserTurn: P,
        isCompletionInProgress: ne,
        turnIndex: F,
        displayParts: E,
        isActivelyStreaming: !1,
        shouldHideContent: !1,
        conversation: i,
        id: a,
        assistantMessageId: a,
        isGenui: re,
        isEmpty: !1,
        messages: I,
        contentReferences: R,
        size: `small`,
        flagSeverity: void 0,
        isCodeInteractive: !1
    }), t[44] = C, t[45] = i, t[46] = a, t[47] = E, t[48] = re, t[49] = I, t[50] = R, t[51] = N, t[52] = P, t[53] = ne, t[54] = F, t[55] = z) : z = t[55];
    let B;
    t[56] !== D || t[57] !== O || t[58] !== k || t[59] !== A || t[60] !== j || t[61] !== z ? (B = (0, yn.jsx)(`div`, {
        "aria-label": D,
        className: O,
        "data-message-author-role": k,
        "data-message-id": A,
        role: j,
        children: z
    }), t[56] = D, t[57] = O, t[58] = k, t[59] = A, t[60] = j, t[61] = z, t[62] = B) : B = t[62];
    let V;
    return t[63] !== w || t[64] !== M || t[65] !== B ? (V = (0, yn.jsx)(w, {
        value: M,
        children: B
    }), t[63] = w, t[64] = M, t[65] = B, t[66] = V) : V = t[66], V
}

function gn(e) {
    return e.metadata?.content_references?.some(_n)
}

function _n(e) {
    return e.type === `image_group` && e.layout === `full_width` || e.type === `hidden` && e.matched_text.startsWith(`image_group`)
}
var vn, yn, bn = e((() => {
    vn = G(), N(), nn(), je(), mn(), q(), Ot(), xe(), oe(), M(), k(), S(), ue(), sn(), Wt(), We(), yn = U()
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
            isModal: u,
            onFollowUp: d,
            followUpLabel: f
        } = e,
        p = K(),
        {
            setTargetedContent: h
        } = nt(),
        {
            openThreadSidebar: v,
            closeThreadSidebar: y
        } = me(),
        b;
    t[0] !== f || t[1] !== p ? (b = f ?? p.formatMessage({
        id: `entities.sidebarFollowUpFloatingButton.label`,
        defaultMessage: `Follow up`
    }), t[0] = f, t[1] = p, t[2] = b) : b = t[2];
    let x = b,
        S;
    t[3] !== a || t[4] !== c || t[5] !== o || t[6] !== i || t[7] !== s || t[8] !== r || t[9] !== l ? (S = e => {
        if (_.logEventWithStatsig(`Sidebar Follow Up Button Clicked`, `chatgpt_sidebar_follow_up_button_clicked`, {
                messageIds: i,
                conversationId: o,
                originatingConversationId: s,
                category: a
            }), !r) return e;
        let t = typeof l.extraParams?.entity_name == `string` ? l.extraParams.entity_name.trim() : ``,
            n = a === `entity_sidebar_follow_up` && t ? g(r, t, c) : m(r, c);
        return {
            ...e,
            promptMessage: Se(e.promptMessage, {
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
        _.logEventWithStatsig(`Sidebar Follow Up Submitted`, `chatgpt_sidebar_follow_up_submitted`, {
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
        _.logEventWithStatsig(`Sidebar Follow Up Cleared`, `chatgpt_sidebar_follow_up_cleared`, {
            conversationId: t,
            currentLeafId: n,
            messageIds: i,
            originatingConversationId: s,
            category: a
        })
    }, t[11] = a, t[12] = i, t[13] = s, t[14] = C, t[15] = w) : (C = t[14], w = t[15]);
    let T;
    t[16] !== u || t[17] !== v || t[18] !== l ? (T = u ? () => v(l) : void 0, t[16] = u, t[17] = v, t[18] = l, t[19] = T) : T = t[19];
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
        ee;
    t[26] !== y || t[27] !== u || t[28] !== d || t[29] !== h || t[30] !== D ? (ee = () => {
        if (d != null) {
            d();
            return
        }
        u && y(), h(D)
    }, t[26] = y, t[27] = u, t[28] = d, t[29] = h, t[30] = D, t[31] = ee) : ee = t[31];
    let O;
    t[32] === x ? O = t[33] : (O = (0, Cn.jsx)(`span`, {
        className: `flex items-center select-none`,
        children: x
    }), t[32] = x, t[33] = O);
    let k;
    return t[34] !== x || t[35] !== ee || t[36] !== O ? (k = (0, Cn.jsx)(`div`, {
        id: wn,
        className: `fixed end-7 bottom-10 z-[50] md:bottom-8`,
        children: (0, Cn.jsx)(n, {
            size: `large`,
            color: `primary`,
            icon: ft,
            label: x,
            contentWrapperClassName: `gap-2`,
            className: `corner-superellipse/1.1 shadow-short h-12 cursor-pointer overflow-clip rounded-[28px] border-none px-6 py-7 font-medium active:opacity-100!`,
            onClick: ee,
            children: O
        })
    }), t[34] = x, t[35] = ee, t[36] = O, t[37] = k) : k = t[37], k
}
var Sn, Cn, wn, Tn = e((() => {
    Sn = G(), O(), lt(), X(), Pe(), u(), b(), at(), ue(), Cn = U(), wn = `sidebar-follow-up-button`
}));

function En(e, t, n) {
    F(e, void 0, {
        ...t,
        ...n ? {
            unique_event_id: n
        } : {}
    }), s.count(h.DEFAULT, e, t)
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
        C = Fe(),
        w;
    t[0] !== o || t[1] !== s || t[2] !== a ? (w = {
        initialQuery: a,
        initialCategory: o,
        initialExtraParams: s
    }, t[0] = o, t[1] = s, t[2] = a, t[3] = w) : w = t[3];
    let {
        query: T,
        category: D,
        extraParams: O
    } = Nt(w), k = D === `ledger_detail_sidebar` && O?.detail_type === `transaction`, A = D === `ledger_detail_sidebar` && O?.detail_type === `credit_health`, j = k || A, M = d?.clientParams?.entitySidebarPresentation?.contentOwnedHorizontalInset, N = D === `entity_sidebar_follow_up`, P = d?.reference, F = d?.pinnedImage, I;
    t[4] !== D || t[5] !== n.id || t[6] !== r || t[7] !== O || t[8] !== i || t[9] !== T || t[10] !== c || t[11] !== P || t[12] !== F ? (I = {
        clientThreadId: n.id,
        reference: P,
        debugThreadId: r,
        messageId: i,
        query: T,
        category: D,
        pinnedImage: F,
        extraParams: O,
        refreshNonce: c
    }, t[4] = D, t[5] = n.id, t[6] = r, t[7] = O, t[8] = i, t[9] = T, t[10] = c, t[11] = P, t[12] = F, t[13] = I) : I = t[13];
    let {
        messages: L,
        latestMessage: R,
        sidebarConversationId: z,
        error: V,
        searchModelQueries: ie,
        regenerate: ae,
        isStreaming: H,
        debugData: oe
    } = Pt(I), se, ce;
    t[14] === z ? (se = t[15], ce = t[16]) : (se = () => {
        if (z != null) return () => Ve(`entity:${z}`)
    }, ce = [z], t[14] = z, t[15] = se, t[16] = ce), (0, Q.useEffect)(se, ce);
    let U, le;
    t[17] !== n || t[18] !== L ? (U = () => {
        zt(n, L)
    }, le = [n, L], t[17] = n, t[18] = L, t[19] = U, t[20] = le) : (U = t[19], le = t[20]), (0, Q.useEffect)(U, le);
    let ue = z ?? `no_sidebar_conversation`,
        W;
    t[21] === L ? W = t[22] : (W = L.map(Ln).join(`,`) || `error`, t[21] = L, t[22] = W);
    let de;
    t[23] !== D || t[24] !== T || t[25] !== ue || t[26] !== W ? (de = [D, T, ue, W], t[23] = D, t[24] = T, t[25] = ue, t[26] = W, t[27] = de) : de = t[27];
    let G = de.join(`:`),
        K = (0, Q.useRef)(null),
        fe;
    t[28] === Symbol.for(`react.memo_cache_sentinel`) ? (fe = re(), t[28] = fe) : fe = t[28];
    let {
        userCountry: pe
    } = fe, me, he;
    t[29] !== D || t[30] !== V || t[31] !== G || t[32] !== H || t[33] !== L ? (me = () => {
        H || !Bt(D) || L.length === 0 && V == null || K.current !== G && (K.current = G, Jt({
            category: D,
            outcome: Kt(L),
            userCountry: pe ?? `unknown`,
            hiddenReason: Yt(L)
        }), Vt({
            category: D,
            imageCountBucket: qt(L)
        }))
    }, he = [D, V, G, H, L, pe], t[29] = D, t[30] = V, t[31] = G, t[32] = H, t[33] = L, t[34] = me, t[35] = he) : (me = t[34], he = t[35]), (0, Q.useEffect)(me, he);
    let ge = te(),
        {
            showDebugConversationTurns: _e
        } = Je(),
        ve;
    t[36] !== n.id || t[37] !== ge ? (ve = y(n.id) ?? ge, t[36] = n.id, t[37] = ge, t[38] = ve) : ve = t[38];
    let q = ve,
        ye;
    t[39] === f ? ye = t[40] : (ye = B(`1290093942`) && f, t[39] = f, t[40] = ye);
    let be = ye,
        xe = O?.alwaysShowFollowUpButton === !0,
        Se = O?.disableFooterActions !== !0,
        Ce = O?.conversation_context_citation,
        we;
    t[41] === i ? we = t[42] : (we = e => e?.tree.getMaybeMessage(i)?.metadata?.conversation_context_citation_metadata ?? [], t[41] = i, t[42] = we);
    let Te = ee(n.id, we),
        Ee = Ce?.conversation_context_type === `user_memory` || Ce?.conversation_context_type === `general_memory`,
        Oe = be && !Ee,
        ke = Te.length === 1 ? Te[0]?.citation_uuid ?? null : null,
        Ae = typeof O?.conversation_context_citation_uuid == `string` && O.conversation_context_citation_uuid.length > 0 ? O.conversation_context_citation_uuid : ke,
        J = L.flatMap(Pn),
        je;
    t[43] === L ? je = t[44] : (je = L.filter(ne).map(Nn), t[43] = L, t[44] = je);
    let Me = je,
        Ne;
    t[45] === L ? Ne = t[46] : (Ne = De(L.flatMap(Mn)), t[45] = L, t[46] = Ne);
    let Pe = Ne,
        Y = J.length > 0,
        Ie;
    t[47] !== D || t[48] !== C || t[49] !== V || t[50] !== L ? (Ie = an({
        category: D,
        context: C,
        error: V,
        messages: L
    }), t[47] = D, t[48] = C, t[49] = V, t[50] = L, t[51] = Ie) : Ie = t[51];
    let X = Ie,
        Le = (0, Q.useRef)(null),
        Re = d && !x && !Y && !X && !Ce && !N && !j,
        ze = S ? `bg-surface-primary` : `bg-token-bg-primary`,
        Be = l || Re ? `mt-[calc(var(--threadFlyOut-leading-height,53px)*-1)] min-h-screen` : `mt-[-1px]`,
        He = Oe && `mb-10`,
        Ue;
    t[52] !== ze || t[53] !== Be || t[54] !== He ? (Ue = E(ze, `flex min-h-screen w-full flex-col dark:bg-black`, Be, He), t[52] = ze, t[53] = Be, t[54] = He, t[55] = Ue) : Ue = t[55];
    let We = j ? Y ? `px-0` : `px-5` : `px-6`,
        Ge = u && N && `pt-[calc(var(--header-height,3.5rem)+1px)]`,
        qe = Y && !h && !N && !k && `border-t`,
        Ye = be ? `mb-[60px]` : k ? `mb-0` : `mb-4`,
        Xe;
    t[56] !== We || t[57] !== Ge || t[58] !== qe || t[59] !== Ye ? (Xe = E(`border-token-border-light flex flex-col`, We, Ge, qe, Ye), t[56] = We, t[57] = Ge, t[58] = qe, t[59] = Ye, t[60] = Xe) : Xe = t[60];
    let Ze;
    t[61] !== M || t[62] !== Y ? (Ze = M == null ? void 0 : {
        paddingInline: Y ? 0 : M
    }, t[61] = M, t[62] = Y, t[63] = Ze) : Ze = t[63];
    let Qe;
    t[64] !== N || t[65] !== T ? (Qe = N && (0, $.jsx)(`h3`, {
        className: `text-token-text-primary mt-4 mb-3 text-lg font-semibold break-words`,
        dir: `auto`,
        children: T
    }), t[64] = N, t[65] = T, t[66] = Qe) : Qe = t[66];
    let $e;
    t[67] !== M || t[68] !== h || t[69] !== Y || t[70] !== A || t[71] !== b ? ($e = h && b && (0, $.jsx)(Gt, {
        children: (0, $.jsx)(`h1`, {
            className: E(`text-token-text-primary mt-0`, A ? `pt-1 text-xl leading-[var(--text-heading-3--line-height)] font-bold` : `mb-10 text-2xl leading-8 font-semibold`, A && Y && `px-5`, A && (Y ? `-mb-1` : `mb-6`)),
            style: {
                paddingInline: Y ? M : void 0
            },
            children: h
        })
    }), t[67] = M, t[68] = h, t[69] = Y, t[70] = A, t[71] = b, t[72] = $e) : $e = t[72];
    let et;
    t[73] !== V || t[74] !== O || t[75] !== Y || t[76] !== k || t[77] !== d?.widgetStateOverride?.sensitive_values_hidden ? (et = k && !Y && !V && (0, $.jsx)(ln, {
        extraParams: O,
        sensitiveValuesHidden: d?.widgetStateOverride?.sensitive_values_hidden === !0
    }), t[73] = V, t[74] = O, t[75] = Y, t[76] = k, t[77] = d?.widgetStateOverride?.sensitive_values_hidden, t[78] = et) : et = t[78];
    let tt;
    t[79] !== D || t[80] !== n || t[81] !== i || t[82] !== L || t[83] !== X || t[84] !== d ? (tt = X && (0, $.jsx)(hn, {
        business: X,
        category: D,
        conversation: n,
        messageId: i,
        messages: L,
        sidebar: d
    }), t[79] = D, t[80] = n, t[81] = i, t[82] = L, t[83] = X, t[84] = d, t[85] = tt) : tt = t[85];
    let nt = Y ? J.map((e, t) => {
            let {
                message: r,
                textContent: a,
                isEmpty: o,
                displayParts: s
            } = e;
            return (0, $.jsx)(`div`, {
                className: E(`text-sm`, (j || M != null) && `[&_[data-testid=dil-widget-shell]>div]:w-full`, t === 0 && !X && !h && !N && !k && `mt-4`),
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
        }) : !V && (0, $.jsx)(Qt, {
            searchModelQueries: ie,
            variant: N ? `typing-dot` : X || j || D === `ask_sidebar` ? `minimal` : `default`
        }),
        rt;
    t[86] !== V || t[87] !== N ? (rt = V && (0, $.jsx)(`div`, {
        className: E(`border-token-surface-error/15 bg-token-bg-status-error text-token-text-error border p-2 text-sm whitespace-pre-wrap`, N ? `mt-0 mb-4` : `my-4`),
        children: V.message
    }), t[86] = V, t[87] = N, t[88] = rt) : rt = t[88];
    let it = !H && Se && (0, $.jsxs)(`div`, {
            className: `flex items-center justify-start pt-2 select-none`,
            children: [!Ee && J && J.length > 0 && (0, $.jsx)(Jn, {
                messages: J.map(An),
                clientThreadId: n.id,
                sidebarConversationId: z
            }), R ? Ee ? q && (0, $.jsx)(Xn, {
                clientThreadId: n.id,
                conversationId: q,
                messageId: i,
                citationUuid: Ae,
                conversationContextType: Ce?.conversation_context_type === `user_memory` || Ce?.conversation_context_type === `general_memory` ? Ce.conversation_context_type : null,
                conversationContextCitationMetadataList: Te
            }) : z && q && (0, $.jsx)(Yn, {
                messageId: R.id,
                category: D,
                conversationId: z,
                metadata: {
                    originatingConversationId: q
                }
            }) : null, !Ee && (0, $.jsx)(qn, {
                onClick: ae,
                message: R ?? null
            }), R && (0, $.jsx)(Rn, {
                message: R
            })]
        }),
        at;
    t[89] !== Me || t[90] !== xe || t[91] !== D || t[92] !== Pe || t[93] !== m || t[94] !== u || t[95] !== R || t[96] !== p || t[97] !== q || t[98] !== T || t[99] !== Oe || t[100] !== d || t[101] !== z ? (at = Oe && d && R && z && (q || xe) && Pe && (0, $.jsx)(xn, {
        query: T,
        messageIds: Me,
        category: D,
        conversationId: z,
        originatingConversationId: q,
        conversationContext: Pe,
        isModal: u,
        sidebar: d,
        onFollowUp: p,
        followUpLabel: m
    }), t[89] = Me, t[90] = xe, t[91] = D, t[92] = Pe, t[93] = m, t[94] = u, t[95] = R, t[96] = p, t[97] = q, t[98] = T, t[99] = Oe, t[100] = d, t[101] = z, t[102] = at) : at = t[102];
    let ot;
    t[103] !== oe || t[104] !== H || t[105] !== R?.metadata?.__internal?.sonic_sidebar_eval_preset || t[106] !== _e ? (ot = !1, t[103] = oe, t[104] = H, t[105] = R?.metadata?.__internal?.sonic_sidebar_eval_preset, t[106] = _e, t[107] = ot) : ot = t[107];
    let st;
    t[108] !== Xe || t[109] !== Ze || t[110] !== Qe || t[111] !== $e || t[112] !== et || t[113] !== tt || t[114] !== nt || t[115] !== rt || t[116] !== it || t[117] !== at || t[118] !== ot ? (st = (0, $.jsxs)(`div`, {
        className: Xe,
        style: Ze,
        children: [Qe, $e, et, tt, nt, rt, it, at, ot]
    }), t[108] = Xe, t[109] = Ze, t[110] = Qe, t[111] = $e, t[112] = et, t[113] = tt, t[114] = nt, t[115] = rt, t[116] = it, t[117] = at, t[118] = ot, t[119] = st) : st = t[119];
    let ct;
    t[120] !== Ue || t[121] !== st ? (ct = (0, $.jsx)(`div`, {
        ref: Le,
        className: Ue,
        children: st
    }), t[120] = Ue, t[121] = st, t[122] = ct) : ct = t[122];
    let lt = ct,
        ut;
    t[123] !== D || t[124] !== J ? (ut = D === `movie` && J.some(On), t[123] = D, t[124] = J, t[125] = ut) : ut = t[125];
    let dt = d?.imageThumbnailUrl,
        ft = d?.savedEntityRequest == null ? C?.favoritesAnalyticsSource : `library`,
        pt;
    t[126] !== D || t[127] !== C || t[128] !== O || t[129] !== T || t[130] !== ut || t[131] !== dt || t[132] !== ft ? (pt = {
        ...C,
        entityName: T,
        entityCategory: D,
        hasMovieSidebarWidget: ut,
        extraParams: O,
        imageThumbnailUrl: dt,
        favoritesAnalyticsSource: ft
    }, t[126] = D, t[127] = C, t[128] = O, t[129] = T, t[130] = ut, t[131] = dt, t[132] = ft, t[133] = pt) : pt = t[133];
    let mt = d?.businessProfile,
        ht;
    t[134] !== D || t[135] !== lt || t[136] !== mt ? (ht = (0, $.jsx)(Ht, {
        profile: mt,
        category: D,
        children: lt
    }), t[134] = D, t[135] = lt, t[136] = mt, t[137] = ht) : ht = t[137];
    let gt;
    return t[138] !== pt || t[139] !== ht ? (gt = (0, $.jsx)(Ke, {
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
    return !t || t.content_type !== ae.Text && t.content_type !== ae.MultimodalText ? [] : t.parts ?? []
}

function Nn(e) {
    return e.id
}

function Pn(e, t) {
    let n = t === 0;
    if (!e.content || e.content.content_type !== ae.Text && e.content.content_type !== ae.MultimodalText) return [];
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
    t[4] === o ? s = t[5] : (s = (0, $.jsx)(Ae, {
        children: (0, $.jsx)(kt, {
            sourcesUrls: o
        })
    }), t[4] = o, t[5] = s);
    let c;
    t[6] === r ? c = t[7] : (c = (0, $.jsx)(Oe, {
        children: (0, $.jsx)(Xe, {
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
    return t[8] !== s || t[9] !== c ? (l = (0, $.jsxs)(Te, {
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
                attribution: t.attribution ?? e.domain ?? Ze(t.url, `short`)
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
                children: (0, $.jsx)(we, {
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
    return !f() && V()
}
var Gn, Q, $, Kn, qn, Jn, Yn, Xn, Zn = e((() => {
    Gn = G(), Ut(), N(), ye(), H(), Ye(), dt(), pt(), yt(), bt(), st(), i(), Ct(), Ot(), it(), Dt(), xe(), w(), $e(), Tt(), et(), M(), k(), r(), ie(), u(), o(), A(), J(), ve(), b(), he(), v(), c(), I(), Ce(), Ge(), fe(), de(), P(), Q = t(W()), ue(), R(), Zt(), sn(), Rt(), fn(), bn(), Wt(), Tn(), Ft(), We(), Mt(), $ = U(), Kn = ``, qn = e => {
        "use forget";
        let t = (0, Gn.c)(28),
            {
                onClick: n,
                message: r
            } = e,
            i = K(),
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
                    t[11] === r ? n = t[12] : (n = Vn(r)?.length, t[11] = r, t[12] = n), e = qe({
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
                    t[15] !== e || t[16] !== o ? (r = (0, $.jsx)(Y, {
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
                let f;t[23] !== d || t[24] !== c ? (f = (0, $.jsx)(tt.Item, {
                    icon: _t,
                    label: c,
                    onSelect: d
                }), t[23] = d, t[24] = c, t[25] = f) : f = t[25];
                let p;t[26] === n ? p = t[27] : (p = e => (0, $.jsx)(tt.Item, {
                    icon: e.icon,
                    label: e.label,
                    onSelect: () => n({
                        forceUseSearch: e.extraStreamParams.forceUseSearch
                    })
                }, e.key), t[26] = n, t[27] = p),
                l = (0, $.jsxs)(Re, {
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
            o = K(),
            s;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (s = B(`1287696420`), t[0] = s) : s = t[0];
        let c = s,
            l;
        t[1] === i ? l = t[2] : (l = {
            action: `CHATGPT_CONVERSATION_CONTROL_ACTION_TYPE_ENTITY_DETAILS_COPY_CLICKED`,
            conversationId: i
        }, t[1] = i, t[2] = l);
        let u;
        t[3] !== r || t[4] !== o || t[5] !== n || t[6] !== a ? (u = async e => {
            let t = Ee({
                id: r,
                role: C.Assistant,
                messageGroups: [],
                isPrompt: !1,
                hasDisplayableMessages: !0,
                messages: n,
                isAsyncCorrection: !1,
                modelSlug: null
            }, a, r, o, {
                enableHighlight: c,
                includeMcpSourceCitations: T(j(r))
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
            o = K(),
            [s, c] = (0, Q.useState)(null),
            l = L(V),
            u, d;
        if (t[0] !== i || t[1] !== l || t[2] !== n ? (u = () => {
                ot({
                    clientConversationId: `entity:${i}`,
                    conversationId: i,
                    messageId: n,
                    reason: l ? void 0 : be.CHATGPT_MESSAGE_FEEDBACK_CONTROL_NOT_RENDERED_REASON_WORKSPACE_DISABLED
                })
            }, d = [i, n, l], t[0] = i, t[1] = l, t[2] = n, t[3] = u, t[4] = d) : (u = t[3], d = t[4]), (0, Q.useEffect)(u, d), !l) return null;
        let f;
        t[5] !== r || t[6] !== i || t[7] !== s || t[8] !== n || t[9] !== a ? (f = e => {
            if (s !== e) {
                let t = Le({
                        conversationId: i,
                        messageId: n,
                        rating: e,
                        submissionType: _e.CHATGPT_MESSAGE_FEEDBACK_SUBMISSION_TYPE_THUMB,
                        route: ge.CHATGPT_MESSAGE_FEEDBACK_ROUTE_UNIFIED_USER_SIGNALS
                    }),
                    o = Qe({
                        rating: Be(e)
                    }, i, n, `CHAT`, a, () => Ne(t));
                o != null && Ue(t, o);
                let s = _.logStructuredEvent(`ChatgptFeedbackInteraction`, {
                    action: `CHATGPT_FEEDBACK_ACTION_MESSAGE_RATING_SUBMITTED`,
                    surface: `CHATGPT_FEEDBACK_SURFACE_ENTITY_SIDEBAR`,
                    rating: e === `thumbsDown` ? `CHATGPT_FEEDBACK_RATING_THUMBS_DOWN` : `CHATGPT_FEEDBACK_RATING_THUMBS_UP`,
                    messageId: n,
                    conversationId: i,
                    originatingConversationId: a.originatingConversationId,
                    category: r,
                    legacyStatsigEventName: `chatgpt_sidebar_thumb_feedback`
                });
                _.logValueEventWithStatsig({
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
            } else rt(i, n, e);
            c(t => t === e ? null : e)
        }, t[5] = r, t[6] = i, t[7] = s, t[8] = n, t[9] = a, t[10] = f) : f = t[10];
        let p = f,
            m;
        t[11] !== s || t[12] !== p || t[13] !== o ? (m = s !== `thumbsDown` && (0, $.jsx)(Y, {
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
        let h;
        t[15] !== s || t[16] !== p || t[17] !== o ? (h = s !== `thumbsUp` && (0, $.jsx)(Y, {
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
        }), t[15] = s, t[16] = p, t[17] = o, t[18] = h) : h = t[18];
        let g;
        return t[19] !== m || t[20] !== h ? (g = (0, $.jsxs)($.Fragment, {
            children: [m, h]
        }), t[19] = m, t[20] = h, t[21] = g) : g = t[21], g
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
            c = K(),
            l;
        t[0] !== o || t[1] !== r ? (l = o ? Ie(r, o) : null, t[0] = o, t[1] = r, t[2] = l) : l = t[2];
        let u = l,
            [f, m] = (0, Q.useState)(!1),
            h = L(Wn),
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
            let l = He(r, o, t),
                u = l !== r;
            u && z(n, e => {
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
        t[17] !== g || t[18] !== b || t[19] !== c || t[20] !== f ? (x = g !== `negative` && (0, $.jsx)(Y, {
            size: `med`,
            onClick: () => {
                b(`positive`)
            },
            selected: g === `positive`,
            disabled: f,
            className: `disabled:hover:bg-transparent disabled:cursor-not-allowed disabled:opacity-50`,
            icon: g === `positive` ? ct : mt,
            label: c.formatMessage({
                id: `tLYX75`,
                defaultMessage: `Relevant`
            }),
            testId: `good-memory-feedback-turn-action-button`
        }), t[17] = g, t[18] = b, t[19] = c, t[20] = f, t[21] = x) : x = t[21];
        let S;
        t[22] !== g || t[23] !== b || t[24] !== c || t[25] !== f ? (S = g !== `positive` && (0, $.jsx)(Y, {
            size: `med`,
            onClick: () => {
                b(`negative`)
            },
            selected: g === `negative`,
            disabled: f,
            className: `disabled:hover:bg-transparent disabled:cursor-not-allowed disabled:opacity-50`,
            icon: g === `negative` ? ut : ht,
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
//# sourceMappingURL=277559ed-ommi1bp8yn8dpec8.js.map