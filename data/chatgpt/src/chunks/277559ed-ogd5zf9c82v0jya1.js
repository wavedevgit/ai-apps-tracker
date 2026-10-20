import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bot as n,
    DQ as r,
    Dq as i,
    EQ as a,
    Ea as o,
    F7 as s,
    FZ as c,
    Gnt as l,
    JJ as u,
    JT as d,
    L0 as f,
    LZ as p,
    Nq as m,
    OX as h,
    Oa as g,
    P5 as _,
    Qet as v,
    Qnt as y,
    Vot as b,
    X5 as x,
    Y5 as S,
    YJ as C,
    YT as w,
    Znt as T,
    _tt as E,
    bnt as D,
    dF as O,
    drt as k,
    eK as A,
    el as j,
    fQ as ee,
    frt as M,
    g1 as te,
    g8 as N,
    h1 as P,
    iK as F,
    il as I,
    j0 as L,
    mY as ne,
    oC as R,
    pF as z,
    ptt as B,
    rY as V,
    sC as H,
    tQ as re,
    tY as ie,
    uY as U,
    urt as ae,
    vnt as W,
    z7 as oe
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Bn as G,
    N as se,
    Rn as ce,
    Vn as le,
    s as ue,
    wn as K,
    zn as de
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $N as fe,
    $Vn as pe,
    Cpt as me,
    DC as he,
    FHn as ge,
    IHn as _e,
    Jft as ve,
    KVn as q,
    LHn as ye,
    MBt as be,
    QFn as xe,
    QN as Se,
    QVn as Ce,
    Spt as we,
    XS as Te,
    XVn as Ee,
    YN as De,
    ZN as Oe,
    ZS as ke,
    ZVn as Ae,
    _Hn as J,
    _T as Y,
    _ht as je,
    _tn as Me,
    aS as Ne,
    dIn as Pe,
    e5t as X,
    eHn as Fe,
    enn as Ie,
    ept as Le,
    fS as Re,
    gHn as ze,
    hht as Be,
    htn as Ve,
    i5t as He,
    ift as Ue,
    imt as We,
    inn as Ge,
    jBt as Ke,
    jC as qe,
    n5t as Je,
    nft as Ye,
    nnn as Xe,
    o5t as Ze,
    omt as Qe,
    pHn as $e,
    qVn as et,
    r5t as tt,
    sS as nt,
    spt as rt,
    tmt as it,
    vT as at,
    wpt as ot
} from "./conversation-small-ikg0dwuw782klweb.js";
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
} from "./30901919-e8h11sw136qen6v0.js";
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
} from "./8b34dbc2-dtawqv9t1aqckqj4.js";
import {
    c as Mt,
    l as Nt,
    r as Pt,
    t as Ft
} from "./24fd10e2-diq8r3c2qwcguopl.js";
import {
    n as It,
    t as Lt
} from "./b5901a24-lf9tyby1b7iurr0s.js";
import {
    a as Rt,
    c as zt
} from "./0e629c03-k6xfko176be8c7z5.js";
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
} from "./bb871603-mm4m9ghccr0oazv9.js";
import {
    n as Zt,
    t as Qt
} from "./e145c156-hf3vwomg8pjld32w.js";
import {
    n as $t,
    r as en,
    t as tn
} from "./a81eda00-fkt40jznebeq1obz.js";
import {
    n as nn,
    t as rn
} from "./4b38d6b2-osqy48fl8rmnxmhu.js";

function an({
    category: e,
    context: t,
    error: n,
    messages: r
}) {
    let i = t?.initialBusinessData,
        a = t?.entityCategory ?? t?.category,
        o = i != null && r.some(e => e.metadata?.content_references?.some(e => {
            if (e.type !== `entity_metadata` || !We(e.entity_type)) return !1;
            let n = e.entity_data,
                r = n?.id;
            if (r === i.id) return !0;
            let a = (e.name ?? (n != null && `name` in n ? n.name : void 0))?.trim().toLowerCase();
            return a ? a === i.name.trim().toLowerCase() || a === t?.entityName?.trim().toLowerCase() : r == null
        }));
    return !n && !o && We(e) && We(a) && i != null && t?.entityId === i.id ? i : void 0
}

function on({
    business: e,
    category: t,
    includeImage: n,
    resolvedImageUrl: i,
    mapUrl: a,
    messageId: o
}) {
    let s = [],
        c = ``;
    if (n) {
        let n = [e.name, t.replaceAll(`_`, ` `), e.address].filter(Boolean).join(`, `),
            a = `image_group${JSON.stringify({layout:`full_width`,aspect_ratio:`1:1`,query:[n],num_per_query:1})}`;
        s.push({
            type: `image_group`,
            matched_text: a,
            start_idx: 0,
            end_idx: r(a).length,
            refs: [],
            images: [i ? {
                image_search_query: n,
                image_result: {
                    url: i,
                    content_url: i,
                    thumbnail_url: i,
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
        }), c = `${a}\n`
    }
    let l = `entity_metadata${JSON.stringify([`local_business`,e.name,0,{location:e.address?[e.address]:[]}])}`,
        u = r(c).length;
    return s.push({
        type: `entity_metadata`,
        matched_text: l,
        start_idx: u,
        end_idx: u + r(l).length,
        refs: [],
        entity_type: `local_business`,
        name: e.name,
        entity_data: e,
        metadata: {
            map_url: a,
            is_loading: !1
        }
    }), {
        id: o,
        author: {
            role: B.Assistant
        },
        content: {
            content_type: v.Text,
            parts: [`${c}${l}`]
        },
        metadata: {
            content_references: s
        }
    }
}
var sn = e((() => {
    E(), it(), h(), a()
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
    un = K(), vt(), It(), dn = t(le()), $t(), Z = G()
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
        c = de(),
        l;
    t[0] !== n || t[1] !== c.locale ? (l = () => pn(n, void 0, c.locale, Qe()).business, t[0] = n, t[1] = c.locale, t[2] = l) : l = t[2];
    let d = _(l),
        f = ot(),
        p = f?.entityCategory ?? f?.category,
        m;
    t[3] === o ? m = t[4] : (m = o.some(gn), t[3] = o, t[4] = m);
    let h = m,
        g;
    t[5] !== n || t[6] !== r || t[7] !== f?.initialBusinessImageUrl || t[8] !== h || t[9] !== s?.imageThumbnailUrl || t[10] !== p ? (g = !h && Bt(r) && Bt(p) ? Ye(n, s?.imageThumbnailUrl ?? f?.initialBusinessImageUrl) : null, t[5] = n, t[6] = r, t[7] = f?.initialBusinessImageUrl, t[8] = h, t[9] = s?.imageThumbnailUrl, t[10] = p, t[11] = g) : g = t[11];
    let y = g,
        b;
    t[12] === y ? b = t[13] : (b = () => y != null && te()?.is_adult === !0, t[12] = y, t[13] = b);
    let x = _(b),
        S;
    t[14] === a ? S = t[15] : (S = e => u.getConversationTurnIndex(e, a), t[14] = a, t[15] = S);
    let C = ne(i.id, S),
        w, T, E, D, O, k, A, j, ee, M, N, P, F, I, L;
    if (t[16] !== r || t[17] !== f || t[18] !== d || t[19] !== a || t[20] !== C || t[21] !== x) {
        N = Symbol.for(`react.early_return_sentinel`);
        bb0: {
            if (E = on({
                    business: d,
                    category: r,
                    includeImage: x,
                    mapUrl: rn(d),
                    messageId: a
                }), f == null || E.content.content_type !== v.Text) {
                N = null;
                break bb0
            }
            T = we,
            t[37] === f ? M = t[38] : (M = {
                ...f,
                isOptimisticBusinessMessage: !0
            }, t[37] = f, t[38] = M);
            let e;t[39] !== d.address || t[40] !== d.name ? (e = [d.name, d.address].filter(Boolean), t[39] = d.address, t[40] = d.name, t[41] = e) : e = t[41],
            O = e.join(`, `),
            k = `mt-4 text-sm`,
            A = E.author.role,
            j = E.id,
            ee = `status`,
            w = Dt,
            P = E.content.parts,
            F = !1,
            I = !1,
            L = C >= 0 ? C : 0,
            D = Ge(E.content.parts)
        }
        t[16] = r, t[17] = f, t[18] = d, t[19] = a, t[20] = C, t[21] = x, t[22] = w, t[23] = T, t[24] = E, t[25] = D, t[26] = O, t[27] = k, t[28] = A, t[29] = j, t[30] = ee, t[31] = M, t[32] = N, t[33] = P, t[34] = F, t[35] = I, t[36] = L
    } else w = t[22], T = t[23], E = t[24], D = t[25], O = t[26], k = t[27], A = t[28], j = t[29], ee = t[30], M = t[31], N = t[32], P = t[33], F = t[34], I = t[35], L = t[36];
    if (N !== Symbol.for(`react.early_return_sentinel`)) return N;
    let R = s?.isGenui,
        z;
    t[42] === E ? z = t[43] : (z = [E], t[42] = E, t[43] = z);
    let B = E.metadata?.content_references,
        V;
    t[44] !== w || t[45] !== i || t[46] !== a || t[47] !== D || t[48] !== R || t[49] !== z || t[50] !== B || t[51] !== P || t[52] !== F || t[53] !== I || t[54] !== L ? (V = (0, yn.jsx)(w, {
        parts: P,
        isUserTurn: F,
        isCompletionInProgress: I,
        turnIndex: L,
        displayParts: D,
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
    }), t[44] = w, t[45] = i, t[46] = a, t[47] = D, t[48] = R, t[49] = z, t[50] = B, t[51] = P, t[52] = F, t[53] = I, t[54] = L, t[55] = V) : V = t[55];
    let H;
    t[56] !== O || t[57] !== k || t[58] !== A || t[59] !== j || t[60] !== ee || t[61] !== V ? (H = (0, yn.jsx)(`div`, {
        "aria-label": O,
        className: k,
        "data-message-author-role": A,
        "data-message-id": j,
        role: ee,
        children: V
    }), t[56] = O, t[57] = k, t[58] = A, t[59] = j, t[60] = ee, t[61] = V, t[62] = H) : H = t[62];
    let re;
    return t[63] !== T || t[64] !== M || t[65] !== H ? (re = (0, yn.jsx)(T, {
        value: M,
        children: H
    }), t[63] = T, t[64] = M, t[65] = H, t[66] = re) : re = t[66], re
}

function gn(e) {
    return e.metadata?.content_references?.some(_n)
}

function _n(e) {
    return e.type === `image_group` && e.layout === `full_width` || e.type === `hidden` && e.matched_text.startsWith(`image_group`)
}
var vn, yn, bn = e((() => {
    vn = K(), E(), nn(), Ue(), mn(), it(), At(), Xe(), P(), N(), V(), h(), ce(), sn(), Wt(), me(), yn = G()
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
            sidebar: l,
            isModal: u,
            onFollowUp: f,
            followUpLabel: m
        } = e,
        h = de(),
        {
            setTargetedContent: g
        } = je(),
        {
            openThreadSidebar: _,
            closeThreadSidebar: v
        } = Pe(),
        y;
    t[0] !== m || t[1] !== h ? (y = m ?? h.formatMessage({
        id: `entities.sidebarFollowUpFloatingButton.label`,
        defaultMessage: `Follow up`
    }), t[0] = m, t[1] = h, t[2] = y) : y = t[2];
    let b = y,
        x;
    t[3] !== i || t[4] !== s || t[5] !== a || t[6] !== r || t[7] !== o || t[8] !== n || t[9] !== l ? (x = e => {
        if (W.logEventWithStatsig(`Sidebar Follow Up Button Clicked`, `chatgpt_sidebar_follow_up_button_clicked`, {
                messageIds: r,
                conversationId: a,
                originatingConversationId: o,
                category: i
            }), !n) return e;
        let t = typeof l.extraParams?.entity_name == `string` ? l.extraParams.entity_name.trim() : ``,
            u = i === `entity_sidebar_follow_up` && t ? p(n, t, s) : c(n, s);
        return {
            ...e,
            promptMessage: be(e.promptMessage, {
                metadata: {
                    targeted_reply: n
                }
            }),
            appendMessages: e.appendMessages == null ? [u] : [...e.appendMessages, u]
        }
    }, t[3] = i, t[4] = s, t[5] = a, t[6] = r, t[7] = o, t[8] = n, t[9] = l, t[10] = x) : x = t[10];
    let S, C;
    t[11] !== i || t[12] !== r || t[13] !== o ? (S = e => {
        let {
            serverThreadId: t,
            currentLeafId: n
        } = e;
        W.logEventWithStatsig(`Sidebar Follow Up Submitted`, `chatgpt_sidebar_follow_up_submitted`, {
            conversationId: t,
            currentLeafId: n,
            messageIds: r,
            originatingConversationId: o,
            category: i
        })
    }, C = e => {
        let {
            serverThreadId: t,
            currentLeafId: n
        } = e;
        W.logEventWithStatsig(`Sidebar Follow Up Cleared`, `chatgpt_sidebar_follow_up_cleared`, {
            conversationId: t,
            currentLeafId: n,
            messageIds: r,
            originatingConversationId: o,
            category: i
        })
    }, t[11] = i, t[12] = r, t[13] = o, t[14] = S, t[15] = C) : (S = t[14], C = t[15]);
    let w;
    t[16] !== u || t[17] !== _ || t[18] !== l ? (w = u ? () => _(l) : void 0, t[16] = u, t[17] = _, t[18] = l, t[19] = w) : w = t[19];
    let T;
    t[20] !== n || t[21] !== x || t[22] !== S || t[23] !== C || t[24] !== w ? (T = {
        type: `text`,
        label: n,
        createNewCompletionParams: x,
        onCreateCompletion: S,
        onCleared: C,
        onLabelClick: w
    }, t[20] = n, t[21] = x, t[22] = S, t[23] = C, t[24] = w, t[25] = T) : T = t[25];
    let E = T,
        D;
    t[26] !== v || t[27] !== u || t[28] !== f || t[29] !== g || t[30] !== E ? (D = () => {
        if (f != null) {
            f();
            return
        }
        u && v(), g(E)
    }, t[26] = v, t[27] = u, t[28] = f, t[29] = g, t[30] = E, t[31] = D) : D = t[31];
    let O;
    t[32] === b ? O = t[33] : (O = (0, Cn.jsx)(`span`, {
        className: `flex items-center select-none`,
        children: b
    }), t[32] = b, t[33] = O);
    let k;
    return t[34] !== b || t[35] !== D || t[36] !== O ? (k = (0, Cn.jsx)(`div`, {
        id: wn,
        className: `fixed end-7 bottom-10 z-[50] md:bottom-8`,
        children: (0, Cn.jsx)(d, {
            size: `large`,
            color: `primary`,
            icon: ft,
            label: b,
            contentWrapperClassName: `gap-2`,
            className: `corner-superellipse/1.1 shadow-short h-12 cursor-pointer overflow-clip rounded-[28px] border-none px-6 py-7 font-medium active:opacity-100!`,
            onClick: D,
            children: O
        })
    }), t[34] = b, t[35] = D, t[36] = O, t[37] = k) : k = t[37], k
}
var Sn, Cn, wn, Tn = e((() => {
    Sn = K(), w(), lt(), Be(), xe(), D(), re(), Ke(), ce(), Cn = G(), wn = `sidebar-follow-up-button`
}));

function En(e, t, n) {
    y(e, void 0, {
        ...t,
        ...n ? {
            unique_event_id: n
        } : {}
    }), k.count(M.DEFAULT, e, t)
}

function Dn(e) {
    "use forget";
    let t = (0, Gn.c)(141),
        {
            conversation: r,
            debugThreadId: i,
            messageId: a,
            query: o,
            category: s,
            extraParams: c,
            refreshNonce: u,
            offsetTopMargin: d,
            isModal: f,
            sidebar: p,
            enableFollowUpButton: m,
            onFollowUp: h,
            followUpLabel: _,
            contentTitle: v,
            renderContentTitle: y,
            suppressLoadingHeaderOffset: b,
            usePageBackground: x
        } = e,
        C = y === void 0 || y,
        w = b !== void 0 && b,
        T = x !== void 0 && x,
        E = ot(),
        D;
    t[0] !== s || t[1] !== c || t[2] !== o ? (D = {
        initialQuery: o,
        initialCategory: s,
        initialExtraParams: c
    }, t[0] = s, t[1] = c, t[2] = o, t[3] = D) : D = t[3];
    let {
        query: O,
        category: k,
        extraParams: A
    } = Nt(D), j = k === `ledger_detail_sidebar` && A?.detail_type === `transaction`, M = k === `ledger_detail_sidebar` && A?.detail_type === `credit_health`, te = j || M, N = p?.clientParams?.entitySidebarPresentation?.contentOwnedHorizontalInset, P = k === `entity_sidebar_follow_up`, F = p?.reference, I = p?.pinnedImage, L;
    t[4] !== k || t[5] !== r.id || t[6] !== i || t[7] !== A || t[8] !== a || t[9] !== O || t[10] !== u || t[11] !== F || t[12] !== I ? (L = {
        clientThreadId: r.id,
        reference: F,
        debugThreadId: i,
        messageId: a,
        query: O,
        category: k,
        pinnedImage: I,
        extraParams: A,
        refreshNonce: u
    }, t[4] = k, t[5] = r.id, t[6] = i, t[7] = A, t[8] = a, t[9] = O, t[10] = u, t[11] = F, t[12] = I, t[13] = L) : L = t[13];
    let {
        messages: R,
        latestMessage: z,
        sidebarConversationId: B,
        error: V,
        searchModelQueries: H,
        regenerate: re,
        isStreaming: U,
        debugData: ae
    } = Pt(L), W, oe;
    t[14] === B ? (W = t[15], oe = t[16]) : (W = () => {
        if (B != null) return () => et(`entity:${B}`)
    }, oe = [B], t[14] = B, t[15] = W, t[16] = oe), (0, Q.useEffect)(W, oe);
    let G, se;
    t[17] !== r || t[18] !== R ? (G = () => {
        zt(r, R)
    }, se = [r, R], t[17] = r, t[18] = R, t[19] = G, t[20] = se) : (G = t[19], se = t[20]), (0, Q.useEffect)(G, se);
    let ce = B ?? `no_sidebar_conversation`,
        le;
    t[21] === R ? le = t[22] : (le = R.map(Ln).join(`,`) || `error`, t[21] = R, t[22] = le);
    let ue;
    t[23] !== k || t[24] !== O || t[25] !== ce || t[26] !== le ? (ue = [k, O, ce, le], t[23] = k, t[24] = O, t[25] = ce, t[26] = le, t[27] = ue) : ue = t[27];
    let K = ue.join(`:`),
        de = (0, Q.useRef)(null),
        fe;
    t[28] === Symbol.for(`react.memo_cache_sentinel`) ? (fe = n(), t[28] = fe) : fe = t[28];
    let {
        userCountry: pe
    } = fe, me, he;
    t[29] !== k || t[30] !== V || t[31] !== K || t[32] !== U || t[33] !== R ? (me = () => {
        U || !Bt(k) || R.length === 0 && V == null || de.current !== K && (de.current = K, Jt({
            category: k,
            outcome: Kt(R),
            userCountry: pe ?? `unknown`,
            hiddenReason: Yt(R)
        }), Vt({
            category: k,
            imageCountBucket: qt(R)
        }))
    }, he = [k, V, K, U, R, pe], t[29] = k, t[30] = V, t[31] = K, t[32] = U, t[33] = R, t[34] = me, t[35] = he) : (me = t[34], he = t[35]), (0, Q.useEffect)(me, he);
    let ge = g(),
        {
            showDebugConversationTurns: _e
        } = Me(),
        ve;
    t[36] !== r.id || t[37] !== ge ? (ve = ie(r.id) ?? ge, t[36] = r.id, t[37] = ge, t[38] = ve) : ve = t[38];
    let q = ve,
        ye;
    t[39] === m ? ye = t[40] : (ye = l(`1290093942`) && m, t[39] = m, t[40] = ye);
    let be = ye,
        xe = A?.alwaysShowFollowUpButton === !0,
        Se = A?.disableFooterActions !== !0,
        Ce = A?.conversation_context_citation,
        Te;
    t[41] === a ? Te = t[42] : (Te = e => e?.tree.getMaybeMessage(a)?.metadata?.conversation_context_citation_metadata ?? [], t[41] = a, t[42] = Te);
    let Ee = ne(r.id, Te),
        De = Ce?.conversation_context_type === `user_memory` || Ce?.conversation_context_type === `general_memory`,
        Oe = be && !De,
        ke = Ee.length === 1 ? Ee[0]?.citation_uuid ?? null : null,
        Ae = typeof A?.conversation_context_citation_uuid == `string` && A.conversation_context_citation_uuid.length > 0 ? A.conversation_context_citation_uuid : ke,
        J = R.flatMap(Pn),
        Y;
    t[43] === R ? Y = t[44] : (Y = R.filter(ee).map(Nn), t[43] = R, t[44] = Y);
    let je = Y,
        Ne;
    t[45] === R ? Ne = t[46] : (Ne = Ie(R.flatMap(Mn)), t[45] = R, t[46] = Ne);
    let Pe = Ne,
        X = J.length > 0,
        Fe;
    t[47] !== k || t[48] !== E || t[49] !== V || t[50] !== R ? (Fe = an({
        category: k,
        context: E,
        error: V,
        messages: R
    }), t[47] = k, t[48] = E, t[49] = V, t[50] = R, t[51] = Fe) : Fe = t[51];
    let Le = Fe,
        Re = (0, Q.useRef)(null),
        ze = p && !w && !X && !Le && !Ce && !P && !te,
        Be = T ? `bg-surface-primary` : `bg-token-bg-primary`,
        Ve = d || ze ? `mt-[calc(var(--threadFlyOut-leading-height,53px)*-1)] min-h-screen` : `mt-[-1px]`,
        He = Oe && `mb-10`,
        Ue;
    t[52] !== Be || t[53] !== Ve || t[54] !== He ? (Ue = S(Be, `flex min-h-screen w-full flex-col dark:bg-black`, Ve, He), t[52] = Be, t[53] = Ve, t[54] = He, t[55] = Ue) : Ue = t[55];
    let We = te ? X ? `px-0` : `px-5` : `px-6`,
        Ge = f && P && `pt-[calc(var(--header-height,3.5rem)+1px)]`,
        Ke = X && !v && !P && !j && `border-t`,
        qe = be ? `mb-[60px]` : j ? `mb-0` : `mb-4`,
        Je;
    t[56] !== We || t[57] !== Ge || t[58] !== Ke || t[59] !== qe ? (Je = S(`border-token-border-light flex flex-col`, We, Ge, Ke, qe), t[56] = We, t[57] = Ge, t[58] = Ke, t[59] = qe, t[60] = Je) : Je = t[60];
    let Ye;
    t[61] !== N || t[62] !== X ? (Ye = N == null ? void 0 : {
        paddingInline: X ? 0 : N
    }, t[61] = N, t[62] = X, t[63] = Ye) : Ye = t[63];
    let Xe;
    t[64] !== P || t[65] !== O ? (Xe = P && (0, $.jsx)(`h3`, {
        className: `text-token-text-primary mt-4 mb-3 text-lg font-semibold break-words`,
        dir: `auto`,
        children: O
    }), t[64] = P, t[65] = O, t[66] = Xe) : Xe = t[66];
    let Ze;
    t[67] !== N || t[68] !== v || t[69] !== X || t[70] !== M || t[71] !== C ? (Ze = v && C && (0, $.jsx)(Gt, {
        children: (0, $.jsx)(`h1`, {
            className: S(`text-token-text-primary mt-0`, M ? `pt-1 text-xl leading-[var(--text-heading-3--line-height)] font-bold` : `mb-10 text-2xl leading-8 font-semibold`, M && X && `px-5`, M && (X ? `-mb-1` : `mb-6`)),
            style: {
                paddingInline: X ? N : void 0
            },
            children: v
        })
    }), t[67] = N, t[68] = v, t[69] = X, t[70] = M, t[71] = C, t[72] = Ze) : Ze = t[72];
    let Qe;
    t[73] !== V || t[74] !== A || t[75] !== X || t[76] !== j || t[77] !== p?.widgetStateOverride?.sensitive_values_hidden ? (Qe = j && !X && !V && (0, $.jsx)(ln, {
        extraParams: A,
        sensitiveValuesHidden: p?.widgetStateOverride?.sensitive_values_hidden === !0
    }), t[73] = V, t[74] = A, t[75] = X, t[76] = j, t[77] = p?.widgetStateOverride?.sensitive_values_hidden, t[78] = Qe) : Qe = t[78];
    let $e;
    t[79] !== k || t[80] !== r || t[81] !== a || t[82] !== R || t[83] !== Le || t[84] !== p ? ($e = Le && (0, $.jsx)(hn, {
        business: Le,
        category: k,
        conversation: r,
        messageId: a,
        messages: R,
        sidebar: p
    }), t[79] = k, t[80] = r, t[81] = a, t[82] = R, t[83] = Le, t[84] = p, t[85] = $e) : $e = t[85];
    let tt = X ? J.map((e, t) => {
            let {
                message: n,
                textContent: i,
                isEmpty: o,
                displayParts: s
            } = e;
            return (0, $.jsx)(`div`, {
                className: S(`text-sm`, (te || N != null) && `[&_[data-testid=dil-widget-shell]>div]:w-full`, t === 0 && !Le && !v && !P && !j && `mt-4`),
                "data-message-author-role": n.author.role,
                "data-message-id": n.id,
                children: (0, $.jsx)(Xt, {
                    enabled: t === 0 && !v,
                    children: (0, $.jsx)(Dt, {
                        parts: i.parts || [],
                        isUserTurn: !1,
                        isCompletionInProgress: !1,
                        turnIndex: t,
                        displayParts: s,
                        isActivelyStreaming: !1,
                        shouldHideContent: !1,
                        conversation: r,
                        id: n.id,
                        assistantMessageId: a,
                        isGenui: p?.isGenui,
                        isEmpty: o,
                        messages: [n],
                        citations: n.metadata?.citations,
                        contentReferences: n.metadata?.content_references?.filter(jn),
                        size: `small`,
                        flagSeverity: void 0,
                        isCodeInteractive: !1
                    })
                })
            }, n.id)
        }) : !V && (0, $.jsx)(Qt, {
            searchModelQueries: H,
            variant: P ? `typing-dot` : Le || te || k === `ask_sidebar` ? `minimal` : `default`
        }),
        nt;
    t[86] !== V || t[87] !== P ? (nt = V && (0, $.jsx)(`div`, {
        className: S(`border-token-surface-error/15 bg-token-bg-status-error text-token-text-error border p-2 text-sm whitespace-pre-wrap`, P ? `mt-0 mb-4` : `my-4`),
        children: V.message
    }), t[86] = V, t[87] = P, t[88] = nt) : nt = t[88];
    let rt = !U && Se && (0, $.jsxs)(`div`, {
            className: `flex items-center justify-start pt-2 select-none`,
            children: [!De && J && J.length > 0 && (0, $.jsx)(Jn, {
                messages: J.map(An),
                clientThreadId: r.id,
                sidebarConversationId: B
            }), z ? De ? q && (0, $.jsx)(Xn, {
                clientThreadId: r.id,
                conversationId: q,
                messageId: a,
                citationUuid: Ae,
                conversationContextType: Ce?.conversation_context_type === `user_memory` || Ce?.conversation_context_type === `general_memory` ? Ce.conversation_context_type : null,
                conversationContextCitationMetadataList: Ee
            }) : B && q && (0, $.jsx)(Yn, {
                messageId: z.id,
                category: k,
                conversationId: B,
                metadata: {
                    originatingConversationId: q
                }
            }) : null, !De && (0, $.jsx)(qn, {
                onClick: re,
                message: z ?? null
            }), z && (0, $.jsx)(Rn, {
                message: z
            })]
        }),
        it;
    t[89] !== je || t[90] !== xe || t[91] !== k || t[92] !== Pe || t[93] !== _ || t[94] !== f || t[95] !== z || t[96] !== h || t[97] !== q || t[98] !== O || t[99] !== Oe || t[100] !== p || t[101] !== B ? (it = Oe && p && z && B && (q || xe) && Pe && (0, $.jsx)(xn, {
        query: O,
        messageIds: je,
        category: k,
        conversationId: B,
        originatingConversationId: q,
        conversationContext: Pe,
        isModal: f,
        sidebar: p,
        onFollowUp: h,
        followUpLabel: _
    }), t[89] = je, t[90] = xe, t[91] = k, t[92] = Pe, t[93] = _, t[94] = f, t[95] = z, t[96] = h, t[97] = q, t[98] = O, t[99] = Oe, t[100] = p, t[101] = B, t[102] = it) : it = t[102];
    let at;
    t[103] !== ae || t[104] !== U || t[105] !== z?.metadata?.__internal?.sonic_sidebar_eval_preset || t[106] !== _e ? (at = !1, t[103] = ae, t[104] = U, t[105] = z?.metadata?.__internal?.sonic_sidebar_eval_preset, t[106] = _e, t[107] = at) : at = t[107];
    let st;
    t[108] !== Je || t[109] !== Ye || t[110] !== Xe || t[111] !== Ze || t[112] !== Qe || t[113] !== $e || t[114] !== tt || t[115] !== nt || t[116] !== rt || t[117] !== it || t[118] !== at ? (st = (0, $.jsxs)(`div`, {
        className: Je,
        style: Ye,
        children: [Xe, Ze, Qe, $e, tt, nt, rt, it, at]
    }), t[108] = Je, t[109] = Ye, t[110] = Xe, t[111] = Ze, t[112] = Qe, t[113] = $e, t[114] = tt, t[115] = nt, t[116] = rt, t[117] = it, t[118] = at, t[119] = st) : st = t[119];
    let ct;
    t[120] !== Ue || t[121] !== st ? (ct = (0, $.jsx)(`div`, {
        ref: Re,
        className: Ue,
        children: st
    }), t[120] = Ue, t[121] = st, t[122] = ct) : ct = t[122];
    let lt = ct,
        ut;
    t[123] !== k || t[124] !== J ? (ut = k === `movie` && J.some(On), t[123] = k, t[124] = J, t[125] = ut) : ut = t[125];
    let dt = p?.imageThumbnailUrl,
        ft = p?.savedEntityRequest == null ? E?.favoritesAnalyticsSource : `library`,
        pt;
    t[126] !== k || t[127] !== E || t[128] !== A || t[129] !== O || t[130] !== ut || t[131] !== dt || t[132] !== ft ? (pt = {
        ...E,
        entityName: O,
        entityCategory: k,
        hasMovieSidebarWidget: ut,
        extraParams: A,
        imageThumbnailUrl: dt,
        favoritesAnalyticsSource: ft
    }, t[126] = k, t[127] = E, t[128] = A, t[129] = O, t[130] = ut, t[131] = dt, t[132] = ft, t[133] = pt) : pt = t[133];
    let mt = p?.businessProfile,
        ht;
    t[134] !== k || t[135] !== lt || t[136] !== mt ? (ht = (0, $.jsx)(Ht, {
        profile: mt,
        category: k,
        children: lt
    }), t[134] = k, t[135] = lt, t[136] = mt, t[137] = ht) : ht = t[137];
    let gt;
    return t[138] !== pt || t[139] !== ht ? (gt = (0, $.jsx)(we, {
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
    return !t || t.content_type !== v.Text && t.content_type !== v.MultimodalText ? [] : t.parts ?? []
}

function Nn(e) {
    return e.id
}

function Pn(e, t) {
    let n = t === 0;
    if (!e.content || e.content.content_type !== v.Text && e.content.content_type !== v.MultimodalText) return [];
    let r = e.content,
        i = e.metadata?.content_references?.some(In);
    return n && r.parts[0] && typeof r.parts[0] == `string` && r.parts[0].startsWith(Kn) && !i ? [] : [{
        message: e,
        textContent: r,
        isEmpty: !r.parts.some(Fn) && !i,
        displayParts: Ge(r.parts ?? [])
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
    t[4] === o ? s = t[5] : (s = (0, $.jsx)(He, {
        children: (0, $.jsx)(kt, {
            sourcesUrls: o
        })
    }), t[4] = o, t[5] = s);
    let c;
    t[6] === r ? c = t[7] : (c = (0, $.jsx)(Je, {
        children: (0, $.jsx)(X, {
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
    return t[8] !== s || t[9] !== c ? (l = (0, $.jsxs)(tt, {
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
                attribution: t.attribution ?? e.domain ?? Se(t.url, `short`)
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
                children: (0, $.jsx)(De, {
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
    return !f() && F()
}
var Gn, Q, $, Kn, qn, Jn, Yn, Xn, Zn = e((() => {
    Gn = K(), Ut(), E(), Oe(), z(), ye(), dt(), pt(), yt(), bt(), st(), L(), Ct(), At(), at(), Ot(), Xe(), A(), nt(), Tt(), Ve(), N(), V(), m(), j(), D(), o(), H(), ke(), fe(), re(), he(), oe(), ae(), T(), ve(), Ee(), Ze(), ue(), x(), Q = t(le()), ce(), b(), Zt(), sn(), Rt(), fn(), bn(), Wt(), Tn(), Ft(), me(), Mt(), $ = G(), Kn = ``, qn = e => {
        "use forget";
        let t = (0, Gn.c)(28),
            {
                onClick: n,
                message: r
            } = e,
            a = de(),
            o;
        t[0] === a ? o = t[1] : (o = a.formatMessage({
            id: `gW2N97`,
            defaultMessage: `Try again...`
        }), t[0] = a, t[1] = o);
        let s = o,
            c;
        t[2] === a ? c = t[3] : (c = a.formatMessage({
            id: `FAHSuP`,
            defaultMessage: `Try again`
        }), t[2] = a, t[3] = c);
        let l = c,
            u, d;
        if (t[4] !== a || t[5] !== r || t[6] !== n || t[7] !== s || t[8] !== l) {
            d = Symbol.for(`react.early_return_sentinel`);
            bb0: {
                let e = [];
                if (r) {
                    let n;
                    t[11] === r ? n = t[12] : (n = Vn(r)?.length, t[11] = r, t[12] = n), e = qe({
                        messageModelEnabledTools: [i.Search],
                        message: r,
                        intl: a,
                        lastResponseUsedSearch: !!n
                    }).filter(Un)
                }
                if (!r || e.length === 0) {
                    let e;
                    t[13] === n ? e = t[14] : (e = () => n(), t[13] = n, t[14] = e);
                    let r;
                    t[15] !== e || t[16] !== s ? (r = (0, $.jsx)(Y, {
                        icon: _t,
                        onClick: e,
                        label: s,
                        size: `med`
                    }), t[15] = e, t[16] = s, t[17] = r) : r = t[17], d = r;
                    break bb0
                }
                let o;t[18] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, $.jsx)(`span`, {
                    className: `touch:w-10 flex h-8 w-8 items-center justify-center`,
                    children: (0, $.jsx)(_t, {
                        className: `icon`
                    })
                }), t[18] = o) : o = t[18];
                let c;t[19] === s ? c = t[20] : (c = (0, $.jsx)(`button`, {
                    type: `button`,
                    className: `text-token-text-secondary hover:bg-token-surface-hover rounded-lg`,
                    "aria-label": s,
                    children: o
                }), t[19] = s, t[20] = c);
                let f;t[21] === n ? f = t[22] : (f = () => n(), t[21] = n, t[22] = f);
                let p;t[23] !== f || t[24] !== l ? (p = (0, $.jsx)(_e.Item, {
                    icon: _t,
                    label: l,
                    onSelect: f
                }), t[23] = f, t[24] = l, t[25] = p) : p = t[25];
                let m;t[26] === n ? m = t[27] : (m = e => (0, $.jsx)(_e.Item, {
                    icon: e.icon,
                    label: e.label,
                    onSelect: () => n({
                        forceUseSearch: e.extraStreamParams.forceUseSearch
                    })
                }, e.key), t[26] = n, t[27] = m),
                u = (0, $.jsxs)(ge, {
                    size: `small`,
                    side: `top`,
                    sideOffset: 4,
                    tooltip: s,
                    triggerButton: c,
                    children: [p, e.map(m)]
                })
            }
            t[4] = a, t[5] = r, t[6] = n, t[7] = s, t[8] = l, t[9] = u, t[10] = d
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
            a = se(),
            o = de(),
            s;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (s = l(`1287696420`), t[0] = s) : s = t[0];
        let c = s,
            u;
        t[1] === i ? u = t[2] : (u = {
            action: `CHATGPT_CONVERSATION_CONTROL_ACTION_TYPE_ENTITY_DETAILS_COPY_CLICKED`,
            conversationId: i
        }, t[1] = i, t[2] = u);
        let d;
        t[3] !== r || t[4] !== o || t[5] !== n || t[6] !== a ? (d = async e => {
            let t = Te({
                id: r,
                role: B.Assistant,
                messageGroups: [],
                isPrompt: !1,
                hasDisplayableMessages: !0,
                messages: n,
                isAsyncCorrection: !1,
                modelSlug: null
            }, a, r, o, {
                enableHighlight: c,
                includeMcpSourceCitations: I(O(r))
            });
            await R(t instanceof Promise ? await t : t, void 0, e)
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
            o = de(),
            [s, c] = (0, Q.useState)(null),
            l = _(F),
            u, d;
        if (t[0] !== i || t[1] !== l || t[2] !== n ? (u = () => {
                Fe({
                    clientConversationId: `entity:${i}`,
                    conversationId: i,
                    messageId: n,
                    reason: l ? void 0 : $e.CHATGPT_MESSAGE_FEEDBACK_CONTROL_NOT_RENDERED_REASON_WORKSPACE_DISABLED
                })
            }, d = [i, n, l], t[0] = i, t[1] = l, t[2] = n, t[3] = u, t[4] = d) : (u = t[3], d = t[4]), (0, Q.useEffect)(u, d), !l) return null;
        let f;
        t[5] !== r || t[6] !== i || t[7] !== s || t[8] !== n || t[9] !== a ? (f = e => {
            if (s !== e) {
                let t = q({
                        conversationId: i,
                        messageId: n,
                        rating: e,
                        submissionType: J.CHATGPT_MESSAGE_FEEDBACK_SUBMISSION_TYPE_THUMB,
                        route: ze.CHATGPT_MESSAGE_FEEDBACK_ROUTE_UNIFIED_USER_SIGNALS
                    }),
                    o = Le({
                        rating: rt(e)
                    }, i, n, `CHAT`, a, () => Ce(t));
                o != null && Ae(t, o);
                let s = W.logStructuredEvent(`ChatgptFeedbackInteraction`, {
                    action: `CHATGPT_FEEDBACK_ACTION_MESSAGE_RATING_SUBMITTED`,
                    surface: `CHATGPT_FEEDBACK_SURFACE_ENTITY_SIDEBAR`,
                    rating: e === `thumbsDown` ? `CHATGPT_FEEDBACK_RATING_THUMBS_DOWN` : `CHATGPT_FEEDBACK_RATING_THUMBS_UP`,
                    messageId: n,
                    conversationId: i,
                    originatingConversationId: a.originatingConversationId,
                    category: r,
                    legacyStatsigEventName: `chatgpt_sidebar_thumb_feedback`
                });
                W.logValueEventWithStatsig({
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
            } else pe(i, n, e);
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
                conversationContextType: c
            } = e,
            l = de(),
            u;
        t[0] !== o || t[1] !== r ? (u = o ? Ne(r, o) : null, t[0] = o, t[1] = r, t[2] = u) : u = t[2];
        let d = u,
            [f, p] = (0, Q.useState)(!1),
            m = _(Wn),
            h = d,
            g;
        t[3] !== o || t[4] !== r ? (g = o != null && r.find(e => e.citation_uuid === o)?.deleted === !0, t[3] = o, t[4] = r, t[5] = g) : g = t[5];
        let v = g,
            y;
        t[6] !== o || t[7] !== n || t[8] !== r || t[9] !== c || t[10] !== i || t[11] !== h || t[12] !== v || t[13] !== m || t[14] !== f || t[15] !== a ? (y = e => {
            if (!m || !o || f) return;
            let t = h === e ? null : e,
                l = Et({
                    actionType: t == null ? wt.CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ACTION_TYPE_FEEDBACK_CLEARED : wt.CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ACTION_TYPE_FEEDBACK_GIVEN,
                    entrypoint: St.CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ENTRYPOINT_ENTITY_SIDEBAR_FEEDBACK_BUTTON,
                    target: jt.CHATGPT_WEB_MEMORY_CITATION_INTERACTION_TARGET_ENTITY_SIDEBAR,
                    conversationId: i,
                    messageId: a,
                    citationUuid: o,
                    conversationContextType: c,
                    feedback: t,
                    selectedFeedback: e
                });
            En(`chatgpt_memory_citation_feedback_clicked`, {
                surface: `ask_sidebar`,
                selected_feedback: e,
                resulting_feedback: t ?? `cleared`,
                conversation_context_type: c ?? `unknown`
            }, l);
            let u = Re(r, o, t),
                d = u !== r;
            d && U(n, e => {
                C.updateTree(e, e => {
                    e.updateNodeMessageMetadata(a, {
                        conversation_context_citation_metadata: u
                    })
                })
            }), p(!0), s.safePost(`/sidebar/conversation_context_citation_feedback`, {
                requestBody: {
                    conversation_id: i,
                    message_id: a,
                    citation_uuid: o,
                    feedback: t,
                    deleted: v
                }
            }).catch(() => {
                d && U(n, e => {
                    C.updateTree(e, e => {
                        e.updateNodeMessageMetadata(a, {
                            conversation_context_citation_metadata: r
                        })
                    })
                })
            }).finally(() => {
                p(!1)
            })
        }, t[6] = o, t[7] = n, t[8] = r, t[9] = c, t[10] = i, t[11] = h, t[12] = v, t[13] = m, t[14] = f, t[15] = a, t[16] = y) : y = t[16];
        let b = y;
        if (!o || !m) return null;
        let x;
        t[17] !== h || t[18] !== b || t[19] !== l || t[20] !== f ? (x = h !== `negative` && (0, $.jsx)(Y, {
            size: `med`,
            onClick: () => {
                b(`positive`)
            },
            selected: h === `positive`,
            disabled: f,
            className: `disabled:hover:bg-transparent disabled:cursor-not-allowed disabled:opacity-50`,
            icon: h === `positive` ? ct : mt,
            label: l.formatMessage({
                id: `tLYX75`,
                defaultMessage: `Relevant`
            }),
            testId: `good-memory-feedback-turn-action-button`
        }), t[17] = h, t[18] = b, t[19] = l, t[20] = f, t[21] = x) : x = t[21];
        let S;
        t[22] !== h || t[23] !== b || t[24] !== l || t[25] !== f ? (S = h !== `positive` && (0, $.jsx)(Y, {
            size: `med`,
            onClick: () => {
                b(`negative`)
            },
            selected: h === `negative`,
            disabled: f,
            className: `disabled:hover:bg-transparent disabled:cursor-not-allowed disabled:opacity-50`,
            icon: h === `negative` ? ut : ht,
            label: l.formatMessage({
                id: `YW9vkL`,
                defaultMessage: `Not relevant`
            }),
            testId: `bad-memory-feedback-turn-action-button`
        }), t[22] = h, t[23] = b, t[24] = l, t[25] = f, t[26] = S) : S = t[26];
        let w;
        return t[27] !== x || t[28] !== S ? (w = (0, $.jsxs)($.Fragment, {
            children: [x, S]
        }), t[27] = x, t[28] = S, t[29] = w) : w = t[29], w
    }
}));
export {
    Zn as n, Dn as t
};
//# sourceMappingURL=277559ed-ogd5zf9c82v0jya1.js.map