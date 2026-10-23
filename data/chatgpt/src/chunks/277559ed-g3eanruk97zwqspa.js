import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    A8 as r,
    Aq as i,
    B0 as a,
    CQ as o,
    Crt as s,
    Da as c,
    GJ as l,
    I7 as u,
    Irt as d,
    K0 as f,
    K5 as p,
    KJ as m,
    Knt as h,
    Lrt as g,
    M7 as _,
    MZ as v,
    PZ as y,
    QJ as b,
    QZ as x,
    Rrt as S,
    T1 as C,
    TX as w,
    Wnt as T,
    ZG as E,
    Zet as D,
    _rt as O,
    al as k,
    dC as A,
    dY as ee,
    eE as j,
    eY as M,
    fC as N,
    fst as te,
    ftt as P,
    gF as F,
    gtt as I,
    j5 as L,
    ka as ne,
    lQ as re,
    pst as R,
    q5 as z,
    sY as B,
    tK as V,
    tl as H,
    vF as U,
    w1 as W,
    wQ as ie,
    wq as ae,
    wrt as oe
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as se,
    N as ce,
    Rn as le,
    Vn as ue,
    s as de,
    wn as G,
    zn as fe
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    AUn as pe,
    DC as me,
    GHn as he,
    GN as ge,
    Gft as _e,
    HHn as ve,
    JHn as ye,
    JN as be,
    KHn as K,
    Kpt as xe,
    MUn as Se,
    Qft as Ce,
    SBt as we,
    Stn as Te,
    VHn as Ee,
    XS as De,
    YHn as Oe,
    YN as ke,
    Ydt as Ae,
    Ypt as je,
    ZS as Me,
    Zpt as q,
    _T as J,
    aS as Ne,
    btn as Pe,
    c5t as Fe,
    cUn as Y,
    cht as Ie,
    dUn as Le,
    dnn as Re,
    f5t as ze,
    fS as Be,
    fUn as Ve,
    hpt as He,
    jC as Ue,
    jUn as We,
    l5t as Ge,
    lnn as Ke,
    mpt as qe,
    o5t as Je,
    oLn as Ye,
    oht as Xe,
    pnn as Ze,
    ppt as Qe,
    qHn as $e,
    qIn as et,
    qN as tt,
    qdt as nt,
    sS as rt,
    u5t as it,
    vT as at,
    xBt as ot,
    zft as st
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    $h as ct,
    Bh as lt,
    Gx as X,
    Lh as ut,
    Qh as dt,
    Rh as ft,
    Wx as pt,
    Zh as mt,
    bh as ht,
    eg as gt,
    ey as _t,
    ty as vt,
    xh as yt,
    zh as bt
} from "./30901919-s8bko9nrkqwv6i4f.js";
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
} from "./8b34dbc2-lmwubajnld74ksfm.js";
import {
    a as Mt,
    i as Nt,
    r as Pt
} from "./09231af0-l43wiceu4nnwg27q.js";
import {
    c as Ft,
    l as It,
    r as Lt,
    t as Rt
} from "./24fd10e2-ioos7y5biptszegz.js";
import {
    n as zt,
    t as Bt
} from "./b5901a24-lf9tyby1b7iurr0s.js";
import {
    a as Vt,
    c as Ht
} from "./0e629c03-co9arb2ix3o2jo51.js";
import {
    a as Ut,
    c as Wt,
    d as Gt,
    i as Kt,
    n as qt,
    r as Jt,
    s as Yt,
    t as Xt,
    u as Zt
} from "./bb871603-osz1okyyi5lczley.js";
import {
    n as Qt,
    t as $t
} from "./e145c156-jusnsqyuu5o5ze4m.js";
import {
    n as en,
    r as tn,
    t as nn
} from "./a81eda00-m33icidx9uw2ccp4.js";
import {
    n as rn,
    t as an
} from "./4b38d6b2-dgul982xp1y9blpi.js";

function on({
    initialProfile: e,
    name: t,
    error: n,
    messages: r
}) {
    let i = r.flatMap(e => e.metadata?.content_references ?? []).find(n => {
        if (n.type !== `entity_metadata` || !Mt(n.entity_type)) return !1;
        let r = Pt(n);
        return r == null ? n.name === t : r.canonical_id === e?.canonical_id
    });
    return {
        businessProfile: i == null || i.metadata?.is_loading === !0 ? e : Pt(i),
        optimisticBusinessProfile: !n && i == null ? e : void 0
    }
}

function sn({
    profile: e,
    category: t,
    name: n,
    messageId: r
}) {
    let i = `entity_metadata${JSON.stringify([t,n,0,{provider:`canonical-business-profile`,business_id:e.canonical_id}])}`;
    return {
        id: r,
        author: {
            role: P.Assistant
        },
        content: {
            content_type: D.Text,
            parts: [i]
        },
        metadata: {
            content_references: [{
                type: `entity_metadata`,
                matched_text: i,
                start_idx: 0,
                end_idx: ie(i).length,
                refs: [],
                entity_type: t,
                name: n,
                entity_data: e,
                metadata: {
                    is_loading: !1
                }
            }]
        }
    }
}

function cn({
    category: e,
    context: t,
    error: n,
    messages: r
}) {
    let i = t?.initialBusinessData,
        a = t?.entityCategory ?? t?.category,
        o = i != null && r.some(e => e.metadata?.content_references?.some(e => {
            if (e.type !== `entity_metadata` || !je(e.entity_type)) return !1;
            let n = e.entity_data,
                r = n && `id` in n ? n.id : void 0;
            if (r === i.id) return !0;
            let a = (e.name ?? (n != null && `name` in n ? n.name : void 0))?.trim().toLowerCase();
            return a ? a === i.name.trim().toLowerCase() || a === t?.entityName?.trim().toLowerCase() : r == null
        }));
    return !n && !o && je(e) && je(a) && i != null && t?.entityId === i.id ? i : void 0
}

function ln({
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
            end_idx: ie(i).length,
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
        l = ie(s).length;
    return o.push({
        type: `entity_metadata`,
        matched_text: c,
        start_idx: l,
        end_idx: l + ie(c).length,
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
            role: P.Assistant
        },
        content: {
            content_type: D.Text,
            parts: [`${s}${c}`]
        },
        metadata: {
            content_references: o
        }
    }
}
var un = e((() => {
    I(), xe(), w(), o(), Nt()
}));

function dn(e) {
    return typeof e == `string` && e.trim().length > 0 ? e : null
}

function fn(e) {
    "use forget";
    let t = (0, pn.c)(25),
        {
            extraParams: n,
            sensitiveValuesHidden: r
        } = e,
        i = r !== void 0 && r,
        a = (0, mn.useContext)(Bt),
        o, s;
    if (t[0] !== n?.amount_label || t[1] !== n?.displayTitle || t[2] !== n?.merchant_name || t[3] !== n?.sensitive_values_hidden || t[4] !== a?.sensitiveValuesHidden || t[5] !== i) {
        let e = tn(n?.sensitive_values_hidden, a?.sensitiveValuesHidden ?? i),
            r;
        t[8] !== n?.displayTitle || t[9] !== n?.merchant_name ? (r = dn(n?.displayTitle) ?? dn(n?.merchant_name), t[8] = n?.displayTitle, t[9] = n?.merchant_name, t[10] = r) : r = t[10], o = r, s = nn(n?.amount_label, e) ?? null, t[0] = n?.amount_label, t[1] = n?.displayTitle, t[2] = n?.merchant_name, t[3] = n?.sensitive_values_hidden, t[4] = a?.sensitiveValuesHidden, t[5] = i, t[6] = o, t[7] = s
    } else o = t[6], s = t[7];
    let c = s;
    if (o == null && c == null) return null;
    let l = n?.logo_url,
        u;
    t[11] === l ? u = t[12] : (u = dn(l), t[11] = l, t[12] = u);
    let d = u,
        f;
    t[13] === d ? f = t[14] : (f = d == null ? (0, Z.jsx)(`div`, {
        className: `bg-token-bg-secondary flex size-10 shrink-0 items-center justify-center rounded-full sm:size-8`,
        children: (0, Z.jsx)(_t, {
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
var pn, mn, Z, hn = e((() => {
    pn = G(), vt(), zt(), mn = t(ue()), en(), Z = se()
}));

function gn(e, t, n, r) {
    return {
        business: e,
        notes: t
    }
}
var _n = e((() => {}));

function vn(e) {
    "use forget";
    let t = (0, xn.c)(69),
        {
            business: n,
            businessProfile: r,
            name: i,
            category: a,
            conversation: o,
            messageId: s,
            messages: c,
            sidebar: u
        } = e,
        d = fe(),
        f;
    t[0] !== n || t[1] !== d ? (f = () => n == null ? void 0 : gn(n, void 0, d.locale, q()).business, t[0] = n, t[1] = d, t[2] = f) : f = t[2];
    let p = L(f),
        m = He(),
        h = m?.entityCategory ?? m?.category,
        g;
    t[3] === c ? g = t[4] : (g = c.some(yn), t[3] = c, t[4] = g);
    let _ = g,
        v;
    t[5] !== n || t[6] !== a || t[7] !== m?.initialBusinessImageUrl || t[8] !== _ || t[9] !== u?.imageThumbnailUrl || t[10] !== h ? (v = !_ && n != null && Ut(a) && Ut(h) ? nt(n, u?.imageThumbnailUrl ?? m?.initialBusinessImageUrl) : null, t[5] = n, t[6] = a, t[7] = m?.initialBusinessImageUrl, t[8] = _, t[9] = u?.imageThumbnailUrl, t[10] = h, t[11] = v) : v = t[11];
    let y = v,
        b;
    t[12] === y ? b = t[13] : (b = () => y != null && C()?.is_adult === !0, t[12] = y, t[13] = b);
    let x = L(b),
        S;
    t[14] === s ? S = t[15] : (S = e => l.getConversationTurnIndex(e, s), t[14] = s, t[15] = S);
    let w = ee(o.id, S),
        T, E, O, k, A, j, M, N, te, P, F, I, ne, re, R;
    if (t[16] !== r || t[17] !== a || t[18] !== m || t[19] !== p || t[20] !== s || t[21] !== i || t[22] !== w || t[23] !== x) {
        F = Symbol.for(`react.early_return_sentinel`);
        bb0: {
            if (O = r != null && Mt(a) ? sn({
                    profile: r,
                    category: a,
                    name: i ?? r.display_name ?? ``,
                    messageId: s
                }) : p == null ? null : ln({
                    business: p,
                    category: a,
                    includeImage: x,
                    mapUrl: an(p),
                    messageId: s
                }), m == null || O == null || O.content.content_type !== D.Text) {
                F = null;
                break bb0
            }
            E = Qe,
            t[39] === m ? P = t[40] : (P = {
                ...m,
                isOptimisticBusinessMessage: !0
            }, t[39] = m, t[40] = P);
            let e = p?.name ?? i,
                n = p?.address,
                o;t[41] !== e || t[42] !== n ? (o = [e, n].filter(Boolean), t[41] = e, t[42] = n, t[43] = o) : o = t[43],
            A = o.join(`, `),
            j = `mt-4 text-sm`,
            M = O.author.role,
            N = O.id,
            te = `status`,
            T = Ot,
            I = O.content.parts,
            ne = !1,
            re = !1,
            R = w >= 0 ? w : 0,
            k = Ze(O.content.parts)
        }
        t[16] = r, t[17] = a, t[18] = m, t[19] = p, t[20] = s, t[21] = i, t[22] = w, t[23] = x, t[24] = T, t[25] = E, t[26] = O, t[27] = k, t[28] = A, t[29] = j, t[30] = M, t[31] = N, t[32] = te, t[33] = P, t[34] = F, t[35] = I, t[36] = ne, t[37] = re, t[38] = R
    } else T = t[24], E = t[25], O = t[26], k = t[27], A = t[28], j = t[29], M = t[30], N = t[31], te = t[32], P = t[33], F = t[34], I = t[35], ne = t[36], re = t[37], R = t[38];
    if (F !== Symbol.for(`react.early_return_sentinel`)) return F;
    let z = u?.isGenui,
        B;
    t[44] === O ? B = t[45] : (B = [O], t[44] = O, t[45] = B);
    let V = O.metadata?.content_references,
        H;
    t[46] !== T || t[47] !== o || t[48] !== s || t[49] !== k || t[50] !== z || t[51] !== B || t[52] !== V || t[53] !== I || t[54] !== ne || t[55] !== re || t[56] !== R ? (H = (0, Sn.jsx)(T, {
        parts: I,
        isUserTurn: ne,
        isCompletionInProgress: re,
        turnIndex: R,
        displayParts: k,
        isActivelyStreaming: !1,
        shouldHideContent: !1,
        conversation: o,
        id: s,
        assistantMessageId: s,
        isGenui: z,
        isEmpty: !1,
        messages: B,
        contentReferences: V,
        size: `small`,
        flagSeverity: void 0,
        isCodeInteractive: !1
    }), t[46] = T, t[47] = o, t[48] = s, t[49] = k, t[50] = z, t[51] = B, t[52] = V, t[53] = I, t[54] = ne, t[55] = re, t[56] = R, t[57] = H) : H = t[57];
    let U;
    t[58] !== A || t[59] !== j || t[60] !== M || t[61] !== N || t[62] !== te || t[63] !== H ? (U = (0, Sn.jsx)(`div`, {
        "aria-label": A,
        className: j,
        "data-message-author-role": M,
        "data-message-id": N,
        role: te,
        children: H
    }), t[58] = A, t[59] = j, t[60] = M, t[61] = N, t[62] = te, t[63] = H, t[64] = U) : U = t[64];
    let W;
    return t[65] !== E || t[66] !== P || t[67] !== U ? (W = (0, Sn.jsx)(E, {
        value: P,
        children: U
    }), t[65] = E, t[66] = P, t[67] = U, t[68] = W) : W = t[68], W
}

function yn(e) {
    return e.metadata?.content_references?.some(bn)
}

function bn(e) {
    return e.type === `image_group` && e.layout === `full_width` || e.type === `hidden` && e.matched_text.startsWith(`image_group`)
}
var xn, Sn, Cn = e((() => {
    xn = G(), I(), rn(), Ae(), _n(), xe(), jt(), Re(), W(), r(), M(), w(), le(), un(), Nt(), Kt(), qe(), Sn = se()
}));

function wn(e) {
    "use forget";
    let t = (0, Tn.c)(38),
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
        p = fe(),
        {
            setTargetedContent: m
        } = Ie(),
        {
            openThreadSidebar: h,
            closeThreadSidebar: g
        } = Ye(),
        _;
    t[0] !== f || t[1] !== p ? (_ = f ?? p.formatMessage({
        id: `entities.sidebarFollowUpFloatingButton.label`,
        defaultMessage: `Follow up`
    }), t[0] = f, t[1] = p, t[2] = _) : _ = t[2];
    let b = _,
        x;
    t[3] !== a || t[4] !== c || t[5] !== o || t[6] !== i || t[7] !== s || t[8] !== r || t[9] !== l ? (x = e => {
        if (T.logEventWithStatsig(`Sidebar Follow Up Button Clicked`, `chatgpt_sidebar_follow_up_button_clicked`, {
                messageIds: i,
                conversationId: o,
                originatingConversationId: s,
                category: a
            }), !r) return e;
        let t = typeof l.extraParams?.entity_name == `string` ? l.extraParams.entity_name.trim() : ``,
            n = a === `entity_sidebar_follow_up` && t ? y(r, t, c) : v(r, c);
        return {
            ...e,
            promptMessage: we(e.promptMessage, {
                metadata: {
                    targeted_reply: r
                }
            }),
            appendMessages: e.appendMessages == null ? [n] : [...e.appendMessages, n]
        }
    }, t[3] = a, t[4] = c, t[5] = o, t[6] = i, t[7] = s, t[8] = r, t[9] = l, t[10] = x) : x = t[10];
    let S, C;
    t[11] !== a || t[12] !== i || t[13] !== s ? (S = e => {
        let {
            serverThreadId: t,
            currentLeafId: n
        } = e;
        T.logEventWithStatsig(`Sidebar Follow Up Submitted`, `chatgpt_sidebar_follow_up_submitted`, {
            conversationId: t,
            currentLeafId: n,
            messageIds: i,
            originatingConversationId: s,
            category: a
        })
    }, C = e => {
        let {
            serverThreadId: t,
            currentLeafId: n
        } = e;
        T.logEventWithStatsig(`Sidebar Follow Up Cleared`, `chatgpt_sidebar_follow_up_cleared`, {
            conversationId: t,
            currentLeafId: n,
            messageIds: i,
            originatingConversationId: s,
            category: a
        })
    }, t[11] = a, t[12] = i, t[13] = s, t[14] = S, t[15] = C) : (S = t[14], C = t[15]);
    let w;
    t[16] !== u || t[17] !== h || t[18] !== l ? (w = u ? () => h(l) : void 0, t[16] = u, t[17] = h, t[18] = l, t[19] = w) : w = t[19];
    let E;
    t[20] !== r || t[21] !== x || t[22] !== S || t[23] !== C || t[24] !== w ? (E = {
        type: `text`,
        label: r,
        createNewCompletionParams: x,
        onCreateCompletion: S,
        onCleared: C,
        onLabelClick: w
    }, t[20] = r, t[21] = x, t[22] = S, t[23] = C, t[24] = w, t[25] = E) : E = t[25];
    let D = E,
        O;
    t[26] !== g || t[27] !== u || t[28] !== d || t[29] !== m || t[30] !== D ? (O = () => {
        if (d != null) {
            d();
            return
        }
        u && g(), m(D)
    }, t[26] = g, t[27] = u, t[28] = d, t[29] = m, t[30] = D, t[31] = O) : O = t[31];
    let k;
    t[32] === b ? k = t[33] : (k = (0, En.jsx)(`span`, {
        className: `flex items-center select-none`,
        children: b
    }), t[32] = b, t[33] = k);
    let A;
    return t[34] !== b || t[35] !== O || t[36] !== k ? (A = (0, En.jsx)(`div`, {
        id: Dn,
        className: `fixed end-7 bottom-10 z-[50] md:bottom-8`,
        children: (0, En.jsx)(n, {
            size: `large`,
            color: `primary`,
            icon: ht,
            label: b,
            contentWrapperClassName: `gap-2`,
            className: `corner-superellipse/1.1 shadow-short h-12 cursor-pointer overflow-clip rounded-[28px] border-none px-6 py-7 font-medium active:opacity-100!`,
            onClick: O,
            children: k
        })
    }), t[34] = b, t[35] = O, t[36] = k, t[37] = A) : A = t[37], A
}
var Tn, En, Dn, On = e((() => {
    Tn = G(), j(), yt(), Xe(), et(), h(), x(), ot(), le(), En = se(), Dn = `sidebar-follow-up-button`
}));

function kn(e, t, n) {
    oe(e, void 0, {
        ...t,
        ...n ? {
            unique_event_id: n
        } : {}
    }), g.count(S.DEFAULT, e, t)
}

function An(e) {
    "use forget";
    let t = (0, Jn.c)(149),
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
            onFollowUp: m,
            followUpLabel: h,
            contentTitle: g,
            renderContentTitle: _,
            suppressLoadingHeaderOffset: v,
            usePageBackground: y
        } = e,
        x = _ === void 0 || _,
        S = v !== void 0 && v,
        C = y !== void 0 && y,
        w = He(),
        T;
    t[0] !== o || t[1] !== s || t[2] !== a ? (T = {
        initialQuery: a,
        initialCategory: o,
        initialExtraParams: s
    }, t[0] = o, t[1] = s, t[2] = a, t[3] = T) : T = t[3];
    let {
        query: E,
        category: D,
        extraParams: k
    } = It(T), A = D === `ledger_detail_sidebar` && k?.detail_type === `transaction`, j = D === `ledger_detail_sidebar` && k?.detail_type === `credit_health`, M = A || j, N = d?.clientParams?.entitySidebarPresentation?.contentOwnedHorizontalInset, P = D === `entity_sidebar_follow_up`, F = d?.reference, I = d?.pinnedImage, L;
    t[4] !== D || t[5] !== n.id || t[6] !== r || t[7] !== k || t[8] !== i || t[9] !== E || t[10] !== c || t[11] !== F || t[12] !== I ? (L = {
        clientThreadId: n.id,
        reference: F,
        debugThreadId: r,
        messageId: i,
        query: E,
        category: D,
        pinnedImage: I,
        extraParams: k,
        refreshNonce: c
    }, t[4] = D, t[5] = n.id, t[6] = r, t[7] = k, t[8] = i, t[9] = E, t[10] = c, t[11] = F, t[12] = I, t[13] = L) : L = t[13];
    let {
        messages: R,
        latestMessage: z,
        sidebarConversationId: B,
        error: V,
        searchModelQueries: H,
        regenerate: U,
        isStreaming: W,
        debugData: ie
    } = Lt(L), ae, oe;
    t[14] === B ? (ae = t[15], oe = t[16]) : (ae = () => {
        if (B != null) return () => ve(`entity:${B}`)
    }, oe = [B], t[14] = B, t[15] = ae, t[16] = oe), (0, Q.useEffect)(ae, oe);
    let se, ce;
    t[17] !== n || t[18] !== R ? (se = () => {
        Ht(n, R)
    }, ce = [n, R], t[17] = n, t[18] = R, t[19] = se, t[20] = ce) : (se = t[19], ce = t[20]), (0, Q.useEffect)(se, ce);
    let le = B ?? `no_sidebar_conversation`,
        ue;
    t[21] === R ? ue = t[22] : (ue = R.map(Bn).join(`,`) || `error`, t[21] = R, t[22] = ue);
    let de;
    t[23] !== D || t[24] !== E || t[25] !== le || t[26] !== ue ? (de = [D, E, le, ue], t[23] = D, t[24] = E, t[25] = le, t[26] = ue, t[27] = de) : de = t[27];
    let G = de.join(`:`),
        fe = (0, Q.useRef)(null),
        pe;
    t[28] === Symbol.for(`react.memo_cache_sentinel`) ? (pe = te(), t[28] = pe) : pe = t[28];
    let {
        userCountry: me
    } = pe, he, ge;
    t[29] !== D || t[30] !== V || t[31] !== G || t[32] !== W || t[33] !== R ? (he = () => {
        W || !Ut(D) || R.length === 0 && V == null || fe.current !== G && (fe.current = G, Yt({
            category: D,
            outcome: qt(R),
            userCountry: me ?? `unknown`,
            hiddenReason: Xt(R)
        }), Wt({
            category: D,
            imageCountBucket: Jt(R)
        }))
    }, ge = [D, V, G, W, R, me], t[29] = D, t[30] = V, t[31] = G, t[32] = W, t[33] = R, t[34] = he, t[35] = ge) : (he = t[34], ge = t[35]), (0, Q.useEffect)(he, ge);
    let _e = ne(),
        {
            showDebugConversationTurns: ye
        } = Te(),
        be;
    t[36] !== n.id || t[37] !== _e ? (be = b(n.id) ?? _e, t[36] = n.id, t[37] = _e, t[38] = be) : be = t[38];
    let K = be,
        xe;
    t[39] === f ? xe = t[40] : (xe = O(`1290093942`) && f, t[39] = f, t[40] = xe);
    let Se = xe,
        Ce = k?.alwaysShowFollowUpButton === !0,
        we = k?.disableFooterActions !== !0,
        Ee = k?.conversation_context_citation,
        De;
    t[41] === i ? De = t[42] : (De = e => e?.tree.getMaybeMessage(i)?.metadata?.conversation_context_citation_metadata ?? [], t[41] = i, t[42] = De);
    let Oe = ee(n.id, De),
        ke = Ee?.conversation_context_type === `user_memory` || Ee?.conversation_context_type === `general_memory`,
        Ae = Se && !ke,
        je = Oe.length === 1 ? Oe[0]?.citation_uuid ?? null : null,
        Me = typeof k?.conversation_context_citation_uuid == `string` && k.conversation_context_citation_uuid.length > 0 ? k.conversation_context_citation_uuid : je,
        q = R.flatMap(Ln),
        J;
    t[43] === R ? J = t[44] : (J = R.filter(re).map(In), t[43] = R, t[44] = J);
    let Ne = J,
        Pe;
    t[45] === R ? Pe = t[46] : (Pe = Ke(R.flatMap(Fn)), t[45] = R, t[46] = Pe);
    let Fe = Pe,
        Y = q.length > 0,
        Ie = d?.businessProfile,
        Le;
    t[47] !== V || t[48] !== R || t[49] !== E || t[50] !== Ie ? (Le = on({
        initialProfile: Ie,
        name: E,
        error: V,
        messages: R
    }), t[47] = V, t[48] = R, t[49] = E, t[50] = Ie, t[51] = Le) : Le = t[51];
    let {
        businessProfile: Re,
        optimisticBusinessProfile: ze
    } = Le, Be;
    t[52] !== D || t[53] !== w || t[54] !== V || t[55] !== R ? (Be = cn({
        category: D,
        context: w,
        error: V,
        messages: R
    }), t[52] = D, t[53] = w, t[54] = V, t[55] = R, t[56] = Be) : Be = t[56];
    let Ve = Be,
        Ue = (0, Q.useRef)(null),
        We = d && !S && !Y && !Ve && !ze && !Ee && !P && !M,
        Ge = C ? `bg-surface-primary` : `bg-token-bg-primary`,
        qe = l || We ? `mt-[calc(var(--threadFlyOut-leading-height,53px)*-1)] min-h-screen` : `mt-[-1px]`,
        Je = Ae && `mb-10`,
        Ye;
    t[57] !== Ge || t[58] !== qe || t[59] !== Je ? (Ye = p(Ge, `flex min-h-screen w-full flex-col dark:bg-black`, qe, Je), t[57] = Ge, t[58] = qe, t[59] = Je, t[60] = Ye) : Ye = t[60];
    let Xe = M ? Y ? `px-0` : `px-5` : `px-6`,
        Ze = u && P && `pt-[calc(var(--header-height,3.5rem)+1px)]`,
        $e = Y && !g && !P && !A && `border-t`,
        et = Se ? `mb-[60px]` : A ? `mb-0` : `mb-4`,
        tt;
    t[61] !== Xe || t[62] !== Ze || t[63] !== $e || t[64] !== et ? (tt = p(`border-token-border-light flex flex-col`, Xe, Ze, $e, et), t[61] = Xe, t[62] = Ze, t[63] = $e, t[64] = et, t[65] = tt) : tt = t[65];
    let nt;
    t[66] !== N || t[67] !== Y ? (nt = N == null ? void 0 : {
        paddingInline: Y ? 0 : N
    }, t[66] = N, t[67] = Y, t[68] = nt) : nt = t[68];
    let rt;
    t[69] !== P || t[70] !== E ? (rt = P && (0, $.jsx)(`h3`, {
        className: `text-token-text-primary mt-4 mb-3 text-lg font-semibold break-words`,
        dir: `auto`,
        children: E
    }), t[69] = P, t[70] = E, t[71] = rt) : rt = t[71];
    let it;
    t[72] !== Re || t[73] !== N || t[74] !== g || t[75] !== Y || t[76] !== j || t[77] !== x ? (it = g && x && !Re && (0, $.jsx)(`h1`, {
        className: p(`text-token-text-primary mt-0`, j ? `pt-1 text-xl leading-[var(--text-heading-3--line-height)] font-bold` : `mb-10 text-2xl leading-8 font-semibold`, j && Y && `px-5`, j && (Y ? `-mb-1` : `mb-6`)),
        style: {
            paddingInline: Y ? N : void 0
        },
        children: g
    }), t[72] = Re, t[73] = N, t[74] = g, t[75] = Y, t[76] = j, t[77] = x, t[78] = it) : it = t[78];
    let at;
    t[79] !== V || t[80] !== k || t[81] !== Y || t[82] !== A || t[83] !== d?.widgetStateOverride?.sensitive_values_hidden ? (at = A && !Y && !V && (0, $.jsx)(fn, {
        extraParams: k,
        sensitiveValuesHidden: d?.widgetStateOverride?.sensitive_values_hidden === !0
    }), t[79] = V, t[80] = k, t[81] = Y, t[82] = A, t[83] = d?.widgetStateOverride?.sensitive_values_hidden, t[84] = at) : at = t[84];
    let ot;
    t[85] !== D || t[86] !== n || t[87] !== i || t[88] !== R || t[89] !== Ve || t[90] !== ze || t[91] !== E || t[92] !== d ? (ot = (Ve || ze) && (0, $.jsx)(vn, {
        business: Ve,
        businessProfile: ze,
        name: E,
        category: D,
        conversation: n,
        messageId: i,
        messages: R,
        sidebar: d
    }), t[85] = D, t[86] = n, t[87] = i, t[88] = R, t[89] = Ve, t[90] = ze, t[91] = E, t[92] = d, t[93] = ot) : ot = t[93];
    let st = Y ? q.map((e, t) => {
            let {
                message: r,
                textContent: a,
                isEmpty: o,
                displayParts: s
            } = e;
            return (0, $.jsx)(`div`, {
                className: p(`text-sm`, (M || N != null) && `[&_[data-testid=dil-widget-shell]>div]:w-full`, t === 0 && !Ve && !g && !P && !A && `mt-4`),
                "data-message-author-role": r.author.role,
                "data-message-id": r.id,
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
                    contentReferences: r.metadata?.content_references?.filter(Pn),
                    size: `small`,
                    flagSeverity: void 0,
                    isCodeInteractive: !1
                })
            }, r.id)
        }) : !V && (0, $.jsx)($t, {
            searchModelQueries: H,
            variant: P ? `typing-dot` : Ve || ze || M || D === `ask_sidebar` ? `minimal` : `default`
        }),
        ct;
    t[94] !== V || t[95] !== P ? (ct = V && (0, $.jsx)(`div`, {
        className: p(`border-token-surface-error/15 bg-token-bg-status-error text-token-text-error border p-2 text-sm whitespace-pre-wrap`, P ? `mt-0 mb-4` : `my-4`),
        children: V.message
    }), t[94] = V, t[95] = P, t[96] = ct) : ct = t[96];
    let lt = !W && we && (0, $.jsxs)(`div`, {
            className: `flex items-center justify-start pt-2 select-none`,
            children: [!ke && q && q.length > 0 && (0, $.jsx)(Zn, {
                messages: q.map(Nn),
                clientThreadId: n.id,
                sidebarConversationId: B
            }), z ? ke ? K && (0, $.jsx)($n, {
                clientThreadId: n.id,
                conversationId: K,
                messageId: i,
                citationUuid: Me,
                conversationContextType: Ee?.conversation_context_type === `user_memory` || Ee?.conversation_context_type === `general_memory` ? Ee.conversation_context_type : null,
                conversationContextCitationMetadataList: Oe
            }) : B && K && (0, $.jsx)(Qn, {
                messageId: z.id,
                category: D,
                conversationId: B,
                metadata: {
                    originatingConversationId: K
                }
            }) : null, !ke && (0, $.jsx)(Xn, {
                onClick: U,
                message: z ?? null
            }), z && (0, $.jsx)(Vn, {
                message: z
            })]
        }),
        X;
    t[97] !== Ne || t[98] !== Ce || t[99] !== D || t[100] !== Fe || t[101] !== h || t[102] !== u || t[103] !== z || t[104] !== m || t[105] !== K || t[106] !== E || t[107] !== Ae || t[108] !== d || t[109] !== B ? (X = Ae && d && z && B && (K || Ce) && Fe && (0, $.jsx)(wn, {
        query: E,
        messageIds: Ne,
        category: D,
        conversationId: B,
        originatingConversationId: K,
        conversationContext: Fe,
        isModal: u,
        sidebar: d,
        onFollowUp: m,
        followUpLabel: h
    }), t[97] = Ne, t[98] = Ce, t[99] = D, t[100] = Fe, t[101] = h, t[102] = u, t[103] = z, t[104] = m, t[105] = K, t[106] = E, t[107] = Ae, t[108] = d, t[109] = B, t[110] = X) : X = t[110];
    let ut;
    t[111] !== ie || t[112] !== W || t[113] !== z?.metadata?.__internal?.sonic_sidebar_eval_preset || t[114] !== ye ? (ut = !1, t[111] = ie, t[112] = W, t[113] = z?.metadata?.__internal?.sonic_sidebar_eval_preset, t[114] = ye, t[115] = ut) : ut = t[115];
    let dt;
    t[116] !== tt || t[117] !== nt || t[118] !== rt || t[119] !== it || t[120] !== at || t[121] !== ot || t[122] !== st || t[123] !== ct || t[124] !== lt || t[125] !== X || t[126] !== ut ? (dt = (0, $.jsxs)(`div`, {
        className: tt,
        style: nt,
        children: [rt, it, at, ot, st, ct, lt, X, ut]
    }), t[116] = tt, t[117] = nt, t[118] = rt, t[119] = it, t[120] = at, t[121] = ot, t[122] = st, t[123] = ct, t[124] = lt, t[125] = X, t[126] = ut, t[127] = dt) : dt = t[127];
    let ft;
    t[128] !== Ye || t[129] !== dt ? (ft = (0, $.jsx)(`div`, {
        ref: Ue,
        className: Ye,
        children: dt
    }), t[128] = Ye, t[129] = dt, t[130] = ft) : ft = t[130];
    let pt = ft,
        mt;
    t[131] !== D || t[132] !== q ? (mt = D === `movie` && q.some(jn), t[131] = D, t[132] = q, t[133] = mt) : mt = t[133];
    let ht = d?.imageThumbnailUrl,
        gt = d?.savedEntityRequest == null ? w?.favoritesAnalyticsSource : `library`,
        _t;
    t[134] !== D || t[135] !== w || t[136] !== k || t[137] !== E || t[138] !== mt || t[139] !== ht || t[140] !== gt ? (_t = {
        ...w,
        entityName: E,
        entityCategory: D,
        hasMovieSidebarWidget: mt,
        extraParams: k,
        imageThumbnailUrl: ht,
        favoritesAnalyticsSource: gt
    }, t[134] = D, t[135] = w, t[136] = k, t[137] = E, t[138] = mt, t[139] = ht, t[140] = gt, t[141] = _t) : _t = t[141];
    let vt;
    t[142] !== Re || t[143] !== D || t[144] !== pt ? (vt = (0, $.jsx)(Zt, {
        profile: Re,
        category: D,
        children: pt
    }), t[142] = Re, t[143] = D, t[144] = pt, t[145] = vt) : vt = t[145];
    let yt;
    return t[146] !== _t || t[147] !== vt ? (yt = (0, $.jsx)(Qe, {
        value: _t,
        children: vt
    }), t[146] = _t, t[147] = vt, t[148] = yt) : yt = t[148], yt
}

function jn(e) {
    let {
        message: t
    } = e;
    return t.metadata?.content_references?.some(Mn)
}

function Mn(e) {
    return e.type === `dil` && e.name === `movie_sidebar_widget`
}

function Nn(e) {
    return e.message
}

function Pn(e) {
    return e.type !== `product_entity`
}

function Fn(e) {
    let t = e.content;
    return !t || t.content_type !== D.Text && t.content_type !== D.MultimodalText ? [] : t.parts ?? []
}

function In(e) {
    return e.id
}

function Ln(e, t) {
    let n = t === 0;
    if (!e.content || e.content.content_type !== D.Text && e.content.content_type !== D.MultimodalText) return [];
    let r = e.content,
        i = e.metadata?.content_references?.some(zn);
    return n && r.parts[0] && typeof r.parts[0] == `string` && r.parts[0].startsWith(Yn) && !i ? [] : [{
        message: e,
        textContent: r,
        isEmpty: !r.parts.some(Rn) && !i,
        displayParts: Ze(r.parts ?? [])
    }]
}

function Rn(e) {
    return e !== ``
}

function zn(e) {
    return e.type !== `hidden`
}

function Bn(e) {
    return e.id
}

function Vn(e) {
    "use forget";
    let t = (0, Jn.c)(11),
        {
            message: n
        } = e,
        r, i, a;
    if (t[0] !== n) {
        a = Symbol.for(`react.early_return_sentinel`);
        bb0: {
            if (r = Wn(n ?? null), !r) {
                a = null;
                break bb0
            }
            i = r?.map(Un).filter(Hn) ?? []
        }
        t[0] = n, t[1] = r, t[2] = i, t[3] = a
    } else r = t[1], i = t[2], a = t[3];
    if (a !== Symbol.for(`react.early_return_sentinel`)) return a;
    let o = i,
        s;
    t[4] === o ? s = t[5] : (s = (0, $.jsx)(it, {
        children: (0, $.jsx)(At, {
            sourcesUrls: o
        })
    }), t[4] = o, t[5] = s);
    let c;
    t[6] === r ? c = t[7] : (c = (0, $.jsx)(Fe, {
        children: (0, $.jsx)(Je, {
            className: `border-token-border-default bg-token-bg-primary xs:max-w-[400px] max-h-[50vh] max-w-[90vw] overflow-y-auto rounded-[20px] border-1 bg-clip-padding px-4 py-3 shadow-md`,
            side: `top`,
            sideOffset: 4,
            align: `center`,
            collisionPadding: 28,
            avoidCollisions: !0,
            children: (0, $.jsx)(Gn, {
                items: r
            })
        })
    }), t[6] = r, t[7] = c);
    let l;
    return t[8] !== s || t[9] !== c ? (l = (0, $.jsxs)(Ge, {
        children: [s, c]
    }), t[8] = s, t[9] = c, t[10] = l) : l = t[10], l
}

function Hn(e) {
    return !!e
}

function Un(e) {
    return e.url
}

function Wn(e) {
    if (!e) return;
    let t = e.metadata?.search_result_groups ?? [];
    if (!t.length) return;
    let n = new Map;
    t.forEach(e => {
        (e.entries ?? []).forEach(t => {
            if (!t?.url || n.has(t.url)) return;
            let r = {
                ...t,
                attribution: t.attribution ?? e.domain ?? be(t.url, `short`)
            };
            n.set(t.url, r)
        })
    });
    let r = Array.from(n.values()).sort((e, t) => (t.pub_date ?? 0) - (e.pub_date ?? 0));
    if (r.length) return r
}

function Gn({
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

function Kn(e) {
    return e.condition
}

function qn() {
    return !f() && V()
}
var Jn, Q, $, Yn, Xn, Zn, Qn, $n, er = e((() => {
    Jn = G(), Gt(), I(), tt(), U(), Se(), pt(), bt(), ct(), ut(), mt(), a(), wt(), jt(), at(), kt(), Re(), E(), rt(), Et(), Pe(), r(), M(), i(), H(), h(), c(), N(), Me(), ke(), x(), me(), u(), d(), s(), st(), he(), ze(), de(), z(), Q = t(ue()), le(), R(), Qt(), un(), Vt(), hn(), Cn(), Kt(), On(), Rt(), qe(), Ft(), $ = se(), Yn = ``, Xn = e => {
        "use forget";
        let t = (0, Jn.c)(28),
            {
                onClick: n,
                message: r
            } = e,
            i = fe(),
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
                    t[11] === r ? n = t[12] : (n = Wn(r)?.length, t[11] = r, t[12] = n), e = Ue({
                        messageModelEnabledTools: [ae.Search],
                        message: r,
                        intl: i,
                        lastResponseUsedSearch: !!n
                    }).filter(Kn)
                }
                if (!r || e.length === 0) {
                    let e;
                    t[13] === n ? e = t[14] : (e = () => n(), t[13] = n, t[14] = e);
                    let r;
                    t[15] !== e || t[16] !== o ? (r = (0, $.jsx)(J, {
                        icon: X,
                        onClick: e,
                        label: o,
                        size: `med`
                    }), t[15] = e, t[16] = o, t[17] = r) : r = t[17], u = r;
                    break bb0
                }
                let a;t[18] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, $.jsx)(`span`, {
                    className: `touch:w-10 flex h-8 w-8 items-center justify-center`,
                    children: (0, $.jsx)(X, {
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
                let f;t[23] !== d || t[24] !== c ? (f = (0, $.jsx)(We.Item, {
                    icon: X,
                    label: c,
                    onSelect: d
                }), t[23] = d, t[24] = c, t[25] = f) : f = t[25];
                let p;t[26] === n ? p = t[27] : (p = e => (0, $.jsx)(We.Item, {
                    icon: e.icon,
                    label: e.label,
                    onSelect: () => n({
                        forceUseSearch: e.extraStreamParams.forceUseSearch
                    })
                }, e.key), t[26] = n, t[27] = p),
                l = (0, $.jsxs)(pe, {
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
    }, Zn = e => {
        "use forget";
        let t = (0, Jn.c)(11),
            {
                messages: n,
                clientThreadId: r,
                sidebarConversationId: i
            } = e,
            a = ce(),
            o = fe(),
            s;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (s = O(`1287696420`), t[0] = s) : s = t[0];
        let c = s,
            l;
        t[1] === i ? l = t[2] : (l = {
            action: `CHATGPT_CONVERSATION_CONTROL_ACTION_TYPE_ENTITY_DETAILS_COPY_CLICKED`,
            conversationId: i
        }, t[1] = i, t[2] = l);
        let u;
        t[3] !== r || t[4] !== o || t[5] !== n || t[6] !== a ? (u = async e => {
            let t = De({
                id: r,
                role: P.Assistant,
                messageGroups: [],
                isPrompt: !1,
                hasDisplayableMessages: !0,
                messages: n,
                isAsyncCorrection: !1,
                modelSlug: null
            }, a, r, o, {
                enableHighlight: c,
                includeMcpSourceCitations: k(F(r))
            });
            await A(t instanceof Promise ? await t : t, void 0, e)
        }, t[3] = r, t[4] = o, t[5] = n, t[6] = a, t[7] = u) : u = t[7];
        let d;
        return t[8] !== l || t[9] !== u ? (d = (0, $.jsx)(xt, {
            variant: `response`,
            size: `med`,
            structuredEventMetadata: l,
            onClick: u
        }), t[8] = l, t[9] = u, t[10] = d) : d = t[10], d
    }, Qn = e => {
        "use forget";
        let t = (0, Jn.c)(22),
            {
                messageId: n,
                category: r,
                conversationId: i,
                metadata: a
            } = e,
            o = fe(),
            [s, c] = (0, Q.useState)(null),
            l = L(V),
            u, d;
        if (t[0] !== i || t[1] !== l || t[2] !== n ? (u = () => {
                Oe({
                    clientConversationId: `entity:${i}`,
                    conversationId: i,
                    messageId: n,
                    reason: l ? void 0 : Y.CHATGPT_MESSAGE_FEEDBACK_CONTROL_NOT_RENDERED_REASON_WORKSPACE_DISABLED
                })
            }, d = [i, n, l], t[0] = i, t[1] = l, t[2] = n, t[3] = u, t[4] = d) : (u = t[3], d = t[4]), (0, Q.useEffect)(u, d), !l) return null;
        let f;
        t[5] !== r || t[6] !== i || t[7] !== s || t[8] !== n || t[9] !== a ? (f = e => {
            if (s !== e) {
                let t = Ee({
                        conversationId: i,
                        messageId: n,
                        rating: e,
                        submissionType: Ve.CHATGPT_MESSAGE_FEEDBACK_SUBMISSION_TYPE_THUMB,
                        route: Le.CHATGPT_MESSAGE_FEEDBACK_ROUTE_UNIFIED_USER_SIGNALS
                    }),
                    o = _e({
                        rating: Ce(e)
                    }, i, n, `CHAT`, a, () => $e(t));
                o != null && K(t, o);
                let s = T.logStructuredEvent(`ChatgptFeedbackInteraction`, {
                    action: `CHATGPT_FEEDBACK_ACTION_MESSAGE_RATING_SUBMITTED`,
                    surface: `CHATGPT_FEEDBACK_SURFACE_ENTITY_SIDEBAR`,
                    rating: e === `thumbsDown` ? `CHATGPT_FEEDBACK_RATING_THUMBS_DOWN` : `CHATGPT_FEEDBACK_RATING_THUMBS_UP`,
                    messageId: n,
                    conversationId: i,
                    originatingConversationId: a.originatingConversationId,
                    category: r,
                    legacyStatsigEventName: `chatgpt_sidebar_thumb_feedback`
                });
                T.logValueEventWithStatsig({
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
            } else ye(i, n, e);
            c(t => t === e ? null : e)
        }, t[5] = r, t[6] = i, t[7] = s, t[8] = n, t[9] = a, t[10] = f) : f = t[10];
        let p = f,
            m;
        t[11] !== s || t[12] !== p || t[13] !== o ? (m = s !== `thumbsDown` && (0, $.jsx)(J, {
            size: `med`,
            onClick: () => {
                p(`thumbsUp`)
            },
            selected: s === `thumbsUp`,
            icon: s === `thumbsUp` ? ft : dt,
            label: o.formatMessage({
                id: `ConversationTurn.goodResponseTooltip`,
                defaultMessage: `Good response`
            }),
            testId: `good-response-turn-action-button`
        }), t[11] = s, t[12] = p, t[13] = o, t[14] = m) : m = t[14];
        let h;
        t[15] !== s || t[16] !== p || t[17] !== o ? (h = s !== `thumbsUp` && (0, $.jsx)(J, {
            size: `med`,
            onClick: () => {
                p(`thumbsDown`)
            },
            selected: s === `thumbsDown`,
            icon: s === `thumbsDown` ? lt : gt,
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
    }, $n = e => {
        "use forget";
        let t = (0, Jn.c)(30),
            {
                clientThreadId: n,
                conversationContextCitationMetadataList: r,
                conversationId: i,
                messageId: a,
                citationUuid: o,
                conversationContextType: s
            } = e,
            c = fe(),
            l;
        t[0] !== o || t[1] !== r ? (l = o ? Ne(r, o) : null, t[0] = o, t[1] = r, t[2] = l) : l = t[2];
        let u = l,
            [d, f] = (0, Q.useState)(!1),
            p = L(qn),
            h = u,
            g;
        t[3] !== o || t[4] !== r ? (g = o != null && r.find(e => e.citation_uuid === o)?.deleted === !0, t[3] = o, t[4] = r, t[5] = g) : g = t[5];
        let v = g,
            y;
        t[6] !== o || t[7] !== n || t[8] !== r || t[9] !== s || t[10] !== i || t[11] !== h || t[12] !== v || t[13] !== p || t[14] !== d || t[15] !== a ? (y = e => {
            if (!p || !o || d) return;
            let t = h === e ? null : e,
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
            kn(`chatgpt_memory_citation_feedback_clicked`, {
                surface: `ask_sidebar`,
                selected_feedback: e,
                resulting_feedback: t ?? `cleared`,
                conversation_context_type: s ?? `unknown`
            }, c);
            let l = Be(r, o, t),
                u = l !== r;
            u && B(n, e => {
                m.updateTree(e, e => {
                    e.updateNodeMessageMetadata(a, {
                        conversation_context_citation_metadata: l
                    })
                })
            }), f(!0), _.safePost(`/sidebar/conversation_context_citation_feedback`, {
                requestBody: {
                    conversation_id: i,
                    message_id: a,
                    citation_uuid: o,
                    feedback: t,
                    deleted: v
                }
            }).catch(() => {
                u && B(n, e => {
                    m.updateTree(e, e => {
                        e.updateNodeMessageMetadata(a, {
                            conversation_context_citation_metadata: r
                        })
                    })
                })
            }).finally(() => {
                f(!1)
            })
        }, t[6] = o, t[7] = n, t[8] = r, t[9] = s, t[10] = i, t[11] = h, t[12] = v, t[13] = p, t[14] = d, t[15] = a, t[16] = y) : y = t[16];
        let b = y;
        if (!o || !p) return null;
        let x;
        t[17] !== h || t[18] !== b || t[19] !== c || t[20] !== d ? (x = h !== `negative` && (0, $.jsx)(J, {
            size: `med`,
            onClick: () => {
                b(`positive`)
            },
            selected: h === `positive`,
            disabled: d,
            className: `disabled:hover:bg-transparent disabled:cursor-not-allowed disabled:opacity-50`,
            icon: h === `positive` ? ft : dt,
            label: c.formatMessage({
                id: `tLYX75`,
                defaultMessage: `Relevant`
            }),
            testId: `good-memory-feedback-turn-action-button`
        }), t[17] = h, t[18] = b, t[19] = c, t[20] = d, t[21] = x) : x = t[21];
        let S;
        t[22] !== h || t[23] !== b || t[24] !== c || t[25] !== d ? (S = h !== `positive` && (0, $.jsx)(J, {
            size: `med`,
            onClick: () => {
                b(`negative`)
            },
            selected: h === `negative`,
            disabled: d,
            className: `disabled:hover:bg-transparent disabled:cursor-not-allowed disabled:opacity-50`,
            icon: h === `negative` ? lt : gt,
            label: c.formatMessage({
                id: `YW9vkL`,
                defaultMessage: `Not relevant`
            }),
            testId: `bad-memory-feedback-turn-action-button`
        }), t[22] = h, t[23] = b, t[24] = c, t[25] = d, t[26] = S) : S = t[26];
        let C;
        return t[27] !== x || t[28] !== S ? (C = (0, $.jsxs)($.Fragment, {
            children: [x, S]
        }), t[27] = x, t[28] = S, t[29] = C) : C = t[29], C
    }
}));
export {
    er as n, An as t
};
//# sourceMappingURL=277559ed-g3eanruk97zwqspa.js.map