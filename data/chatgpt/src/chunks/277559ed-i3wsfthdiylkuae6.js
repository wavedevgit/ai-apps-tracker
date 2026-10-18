import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $Z as n,
    AJ as r,
    AT as i,
    B6 as a,
    Btt as o,
    DG as s,
    Ea as c,
    Fc as l,
    Fet as u,
    H$ as d,
    HS as f,
    Htt as p,
    JP as m,
    KP as h,
    LJ as g,
    Mnt as _,
    Nnt as v,
    OJ as y,
    OZ as b,
    Oa as x,
    Pnt as S,
    SJ as C,
    U$ as w,
    VJ as T,
    VS as E,
    a7 as D,
    b5 as O,
    bet as k,
    bnt as A,
    cZ as j,
    cot as ee,
    eQ as M,
    eq as N,
    i5 as P,
    jG as F,
    kT as I,
    l0 as L,
    l7 as R,
    lot as z,
    oq as B,
    pnt as te,
    r0 as V,
    tX as H,
    uZ as ne,
    xJ as re,
    y5 as ie,
    ynt as ae,
    zZ as oe,
    zc as se,
    zet as ce
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as U,
    N as le,
    Rn as ue,
    Vn as W,
    s as de,
    wn as G,
    zn as K
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    C0t as fe,
    CHn as pe,
    EBt as me,
    FVn as he,
    IVn as ge,
    JN as _e,
    JS as ve,
    KN as q,
    LFn as ye,
    LVn as be,
    Ltn as xe,
    MVn as Se,
    OC as Ce,
    QVn as we,
    Qen as Te,
    Qpt as Ee,
    RVn as De,
    S0t as Oe,
    T0t as ke,
    TBt as Ae,
    THn as je,
    Vft as J,
    Vtn as Me,
    WN as Ne,
    XFn as Pe,
    Xpt as Fe,
    Ydt as Y,
    Zdt as Ie,
    _pt as Le,
    ept as Re,
    etn as ze,
    fT as Be,
    gpt as Ve,
    hpt as He,
    iS as Ue,
    jVn as We,
    lS as Ge,
    lht as Ke,
    nHn as qe,
    nS as Je,
    pT as Ye,
    qN as Xe,
    qS as Ze,
    qft as Qe,
    qpt as $e,
    sht as et,
    tHn as tt,
    wC as nt,
    wHn as rt,
    x0t as it,
    y0t as at,
    zVn as ot,
    ztn as X
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    $h as st,
    Bh as ct,
    Ch as lt,
    Hh as ut,
    Kx as dt,
    Sh as ft,
    Vh as pt,
    ay as mt,
    eg as ht,
    ng as gt,
    oy as _t,
    qx as vt,
    tg as yt,
    zh as bt
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    $r as xt,
    Cx as St,
    Ji as Ct,
    Sx as wt,
    Xi as Tt,
    Zi as Et,
    ei as Dt,
    id as Ot,
    od as kt,
    qi as At,
    wx as jt
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    c as Mt,
    l as Nt,
    r as Pt,
    t as Ft
} from "./24fd10e2-biooxlb55mr6we7j.js";
import {
    n as It,
    t as Lt
} from "./b5901a24-duvmjkx79b210rzz.js";
import {
    a as Rt,
    c as zt
} from "./0e629c03-ktw3in9nc4al4qik.js";
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
} from "./bb871603-l5dpkwgp7q2tudnb.js";
import {
    n as Zt,
    t as Qt
} from "./e145c156-v90uz0y9rjbz0jnt.js";
import {
    n as $t,
    r as en,
    t as tn
} from "./a81eda00-hs3al4bqbebqodp6.js";
import {
    n as nn,
    t as rn
} from "./4b38d6b2-lo80bw2t391z4dw1.js";

function an({
    category: e,
    context: t,
    error: n,
    messages: r
}) {
    let i = t?.initialBusinessData,
        a = t?.entityCategory ?? t?.category,
        o = i != null && r.some(e => e.metadata?.content_references?.some(e => {
            if (e.type !== `entity_metadata` || !Fe(e.entity_type)) return !1;
            let n = e.entity_data,
                r = n?.id;
            if (r === i.id) return !0;
            let a = (e.name ?? (n != null && `name` in n ? n.name : void 0))?.trim().toLowerCase();
            return a ? a === i.name.trim().toLowerCase() || a === t?.entityName?.trim().toLowerCase() : r == null
        }));
    return !n && !o && Fe(e) && Fe(a) && i != null && t?.entityId === i.id ? i : void 0
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
            end_idx: M(i).length,
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
        l = M(s).length;
    return o.push({
        type: `entity_metadata`,
        matched_text: c,
        start_idx: l,
        end_idx: l + M(c).length,
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
            role: u.Assistant
        },
        content: {
            content_type: k.Text,
            parts: [`${s}${c}`]
        },
        metadata: {
            content_references: o
        }
    }
}
var sn = e((() => {
    ce(), $e(), H(), n()
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
        children: (0, Z.jsx)(mt, {
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
    un = G(), _t(), It(), dn = t(W()), $t(), Z = U()
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
        l;
    t[0] !== n || t[1] !== c.locale ? (l = () => pn(n, void 0, c.locale, Ee()).business, t[0] = n, t[1] = c.locale, t[2] = l) : l = t[2];
    let u = P(l),
        d = Le(),
        f = d?.entityCategory ?? d?.category,
        p;
    t[3] === o ? p = t[4] : (p = o.some(gn), t[3] = o, t[4] = p);
    let m = p,
        h;
    t[5] !== n || t[6] !== r || t[7] !== d?.initialBusinessImageUrl || t[8] !== m || t[9] !== s?.imageThumbnailUrl || t[10] !== f ? (h = !m && Bt(r) && Bt(f) ? Y(n, s?.imageThumbnailUrl ?? d?.initialBusinessImageUrl) : null, t[5] = n, t[6] = r, t[7] = d?.initialBusinessImageUrl, t[8] = m, t[9] = s?.imageThumbnailUrl, t[10] = f, t[11] = h) : h = t[11];
    let g = h,
        _;
    t[12] === g ? _ = t[13] : (_ = () => g != null && w()?.is_adult === !0, t[12] = g, t[13] = _);
    let v = P(_),
        y;
    t[14] === a ? y = t[15] : (y = e => re.getConversationTurnIndex(e, a), t[14] = a, t[15] = y);
    let b = T(i.id, y),
        x, S, C, E, D, O, A, j, ee, M, N, F, I, L, R;
    if (t[16] !== r || t[17] !== d || t[18] !== u || t[19] !== a || t[20] !== b || t[21] !== v) {
        N = Symbol.for(`react.early_return_sentinel`);
        bb0: {
            if (C = on({
                    business: u,
                    category: r,
                    includeImage: v,
                    mapUrl: rn(u),
                    messageId: a
                }), d == null || C.content.content_type !== k.Text) {
                N = null;
                break bb0
            }
            S = He,
            t[37] === d ? M = t[38] : (M = {
                ...d,
                isOptimisticBusinessMessage: !0
            }, t[37] = d, t[38] = M);
            let e;t[39] !== u.address || t[40] !== u.name ? (e = [u.name, u.address].filter(Boolean), t[39] = u.address, t[40] = u.name, t[41] = e) : e = t[41],
            D = e.join(`, `),
            O = `mt-4 text-sm`,
            A = C.author.role,
            j = C.id,
            ee = `status`,
            x = Ot,
            F = C.content.parts,
            I = !1,
            L = !1,
            R = b >= 0 ? b : 0,
            E = Me(C.content.parts)
        }
        t[16] = r, t[17] = d, t[18] = u, t[19] = a, t[20] = b, t[21] = v, t[22] = x, t[23] = S, t[24] = C, t[25] = E, t[26] = D, t[27] = O, t[28] = A, t[29] = j, t[30] = ee, t[31] = M, t[32] = N, t[33] = F, t[34] = I, t[35] = L, t[36] = R
    } else x = t[22], S = t[23], C = t[24], E = t[25], D = t[26], O = t[27], A = t[28], j = t[29], ee = t[30], M = t[31], N = t[32], F = t[33], I = t[34], L = t[35], R = t[36];
    if (N !== Symbol.for(`react.early_return_sentinel`)) return N;
    let z = s?.isGenui,
        B;
    t[42] === C ? B = t[43] : (B = [C], t[42] = C, t[43] = B);
    let te = C.metadata?.content_references,
        V;
    t[44] !== x || t[45] !== i || t[46] !== a || t[47] !== E || t[48] !== z || t[49] !== B || t[50] !== te || t[51] !== F || t[52] !== I || t[53] !== L || t[54] !== R ? (V = (0, yn.jsx)(x, {
        parts: F,
        isUserTurn: I,
        isCompletionInProgress: L,
        turnIndex: R,
        displayParts: E,
        isActivelyStreaming: !1,
        shouldHideContent: !1,
        conversation: i,
        id: a,
        assistantMessageId: a,
        isGenui: z,
        isEmpty: !1,
        messages: B,
        contentReferences: te,
        size: `small`,
        flagSeverity: void 0,
        isCodeInteractive: !1
    }), t[44] = x, t[45] = i, t[46] = a, t[47] = E, t[48] = z, t[49] = B, t[50] = te, t[51] = F, t[52] = I, t[53] = L, t[54] = R, t[55] = V) : V = t[55];
    let H;
    t[56] !== D || t[57] !== O || t[58] !== A || t[59] !== j || t[60] !== ee || t[61] !== V ? (H = (0, yn.jsx)(`div`, {
        "aria-label": D,
        className: O,
        "data-message-author-role": A,
        "data-message-id": j,
        role: ee,
        children: V
    }), t[56] = D, t[57] = O, t[58] = A, t[59] = j, t[60] = ee, t[61] = V, t[62] = H) : H = t[62];
    let ne;
    return t[63] !== S || t[64] !== M || t[65] !== H ? (ne = (0, yn.jsx)(S, {
        value: M,
        children: H
    }), t[63] = S, t[64] = M, t[65] = H, t[66] = ne) : ne = t[66], ne
}

function gn(e) {
    return e.metadata?.content_references?.some(_n)
}

function _n(e) {
    return e.type === `image_group` && e.layout === `full_width` || e.type === `hidden` && e.matched_text.startsWith(`image_group`)
}
var vn, yn, bn = e((() => {
    vn = G(), ce(), nn(), Ie(), mn(), $e(), kt(), X(), d(), a(), r(), H(), ue(), sn(), Wt(), Ve(), yn = U()
}));

function xn(e) {
    "use forget";
    let t = (0, Sn.c)(38),
        {
            query: n,
            messageIds: r,
            category: i,
            conversationId: a,
            originatingConversationId: s,
            conversationContext: c,
            sidebar: l,
            isModal: u,
            onFollowUp: d,
            followUpLabel: f
        } = e,
        p = K(),
        {
            setTargetedContent: m
        } = Ke(),
        {
            openThreadSidebar: h,
            closeThreadSidebar: g
        } = Pe(),
        _;
    t[0] !== f || t[1] !== p ? (_ = f ?? p.formatMessage({
        id: `entities.sidebarFollowUpFloatingButton.label`,
        defaultMessage: `Follow up`
    }), t[0] = f, t[1] = p, t[2] = _) : _ = t[2];
    let v = _,
        y;
    t[3] !== i || t[4] !== c || t[5] !== a || t[6] !== r || t[7] !== s || t[8] !== n || t[9] !== l ? (y = e => {
        if (o.logEventWithStatsig(`Sidebar Follow Up Button Clicked`, `chatgpt_sidebar_follow_up_button_clicked`, {
                messageIds: r,
                conversationId: a,
                originatingConversationId: s,
                category: i
            }), !n) return e;
        let t = typeof l.extraParams?.entity_name == `string` ? l.extraParams.entity_name.trim() : ``,
            u = i === `entity_sidebar_follow_up` && t ? ne(n, t, c) : j(n, c);
        return {
            ...e,
            promptMessage: me(e.promptMessage, {
                metadata: {
                    targeted_reply: n
                }
            }),
            appendMessages: e.appendMessages == null ? [u] : [...e.appendMessages, u]
        }
    }, t[3] = i, t[4] = c, t[5] = a, t[6] = r, t[7] = s, t[8] = n, t[9] = l, t[10] = y) : y = t[10];
    let b, x;
    t[11] !== i || t[12] !== r || t[13] !== s ? (b = e => {
        let {
            serverThreadId: t,
            currentLeafId: n
        } = e;
        o.logEventWithStatsig(`Sidebar Follow Up Submitted`, `chatgpt_sidebar_follow_up_submitted`, {
            conversationId: t,
            currentLeafId: n,
            messageIds: r,
            originatingConversationId: s,
            category: i
        })
    }, x = e => {
        let {
            serverThreadId: t,
            currentLeafId: n
        } = e;
        o.logEventWithStatsig(`Sidebar Follow Up Cleared`, `chatgpt_sidebar_follow_up_cleared`, {
            conversationId: t,
            currentLeafId: n,
            messageIds: r,
            originatingConversationId: s,
            category: i
        })
    }, t[11] = i, t[12] = r, t[13] = s, t[14] = b, t[15] = x) : (b = t[14], x = t[15]);
    let S;
    t[16] !== u || t[17] !== h || t[18] !== l ? (S = u ? () => h(l) : void 0, t[16] = u, t[17] = h, t[18] = l, t[19] = S) : S = t[19];
    let C;
    t[20] !== n || t[21] !== y || t[22] !== b || t[23] !== x || t[24] !== S ? (C = {
        type: `text`,
        label: n,
        createNewCompletionParams: y,
        onCreateCompletion: b,
        onCleared: x,
        onLabelClick: S
    }, t[20] = n, t[21] = y, t[22] = b, t[23] = x, t[24] = S, t[25] = C) : C = t[25];
    let w = C,
        T;
    t[26] !== g || t[27] !== u || t[28] !== d || t[29] !== m || t[30] !== w ? (T = () => {
        if (d != null) {
            d();
            return
        }
        u && g(), m(w)
    }, t[26] = g, t[27] = u, t[28] = d, t[29] = m, t[30] = w, t[31] = T) : T = t[31];
    let E;
    t[32] === v ? E = t[33] : (E = (0, Cn.jsx)(`span`, {
        className: `flex items-center select-none`,
        children: v
    }), t[32] = v, t[33] = E);
    let D;
    return t[34] !== v || t[35] !== T || t[36] !== E ? (D = (0, Cn.jsx)(`div`, {
        id: wn,
        className: `fixed end-7 bottom-10 z-[50] md:bottom-8`,
        children: (0, Cn.jsx)(I, {
            size: `large`,
            color: `primary`,
            icon: ft,
            label: v,
            contentWrapperClassName: `gap-2`,
            className: `corner-superellipse/1.1 shadow-short h-12 cursor-pointer overflow-clip rounded-[28px] border-none px-6 py-7 font-medium active:opacity-100!`,
            onClick: T,
            children: E
        })
    }), t[34] = v, t[35] = T, t[36] = E, t[37] = D) : D = t[37], D
}
var Sn, Cn, wn, Tn = e((() => {
    Sn = G(), i(), lt(), et(), ye(), p(), b(), Ae(), ue(), Cn = U(), wn = `sidebar-follow-up-button`
}));

function En(e, t, n) {
    A(e, void 0, {
        ...t,
        ...n ? {
            unique_event_id: n
        } : {}
    }), v.count(S.DEFAULT, e, t)
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
        S = _ !== void 0 && _,
        C = v !== void 0 && v,
        w = Le(),
        E;
    t[0] !== o || t[1] !== s || t[2] !== a ? (E = {
        initialQuery: a,
        initialCategory: o,
        initialExtraParams: s
    }, t[0] = o, t[1] = s, t[2] = a, t[3] = E) : E = t[3];
    let {
        query: D,
        category: O,
        extraParams: k
    } = Nt(E), A = O === `ledger_detail_sidebar` && k?.detail_type === `transaction`, j = O === `ledger_detail_sidebar` && k?.detail_type === `credit_health`, M = A || j, N = d?.clientParams?.entitySidebarPresentation?.contentOwnedHorizontalInset, P = O === `entity_sidebar_follow_up`, F = d?.reference, I = d?.pinnedImage, L;
    t[4] !== O || t[5] !== n.id || t[6] !== r || t[7] !== k || t[8] !== i || t[9] !== D || t[10] !== c || t[11] !== F || t[12] !== I ? (L = {
        clientThreadId: n.id,
        reference: F,
        debugThreadId: r,
        messageId: i,
        query: D,
        category: O,
        pinnedImage: I,
        extraParams: k,
        refreshNonce: c
    }, t[4] = O, t[5] = n.id, t[6] = r, t[7] = k, t[8] = i, t[9] = D, t[10] = c, t[11] = F, t[12] = I, t[13] = L) : L = t[13];
    let {
        messages: R,
        latestMessage: z,
        sidebarConversationId: B,
        error: V,
        searchModelQueries: H,
        regenerate: ne,
        isStreaming: re,
        debugData: ae
    } = Pt(L), se, ce;
    t[14] === B ? (se = t[15], ce = t[16]) : (se = () => {
        if (B != null) return () => Se(`entity:${B}`)
    }, ce = [B], t[14] = B, t[15] = se, t[16] = ce), (0, Q.useEffect)(se, ce);
    let U, le;
    t[17] !== n || t[18] !== R ? (U = () => {
        zt(n, R)
    }, le = [n, R], t[17] = n, t[18] = R, t[19] = U, t[20] = le) : (U = t[19], le = t[20]), (0, Q.useEffect)(U, le);
    let ue = B ?? `no_sidebar_conversation`,
        W;
    t[21] === R ? W = t[22] : (W = R.map(Ln).join(`,`) || `error`, t[21] = R, t[22] = W);
    let de;
    t[23] !== O || t[24] !== D || t[25] !== ue || t[26] !== W ? (de = [O, D, ue, W], t[23] = O, t[24] = D, t[25] = ue, t[26] = W, t[27] = de) : de = t[27];
    let G = de.join(`:`),
        K = (0, Q.useRef)(null),
        fe;
    t[28] === Symbol.for(`react.memo_cache_sentinel`) ? (fe = ee(), t[28] = fe) : fe = t[28];
    let {
        userCountry: pe
    } = fe, me, he;
    t[29] !== O || t[30] !== V || t[31] !== G || t[32] !== re || t[33] !== R ? (me = () => {
        re || !Bt(O) || R.length === 0 && V == null || K.current !== G && (K.current = G, Jt({
            category: O,
            outcome: Kt(R),
            userCountry: pe ?? `unknown`,
            hiddenReason: Yt(R)
        }), Vt({
            category: O,
            imageCountBucket: qt(R)
        }))
    }, he = [O, V, G, re, R, pe], t[29] = O, t[30] = V, t[31] = G, t[32] = re, t[33] = R, t[34] = me, t[35] = he) : (me = t[34], he = t[35]), (0, Q.useEffect)(me, he);
    let ge = x(),
        {
            showDebugConversationTurns: _e
        } = ze(),
        ve;
    t[36] !== n.id || t[37] !== ge ? (ve = y(n.id) ?? ge, t[36] = n.id, t[37] = ge, t[38] = ve) : ve = t[38];
    let q = ve,
        ye;
    t[39] === f ? ye = t[40] : (ye = te(`1290093942`) && f, t[39] = f, t[40] = ye);
    let be = ye,
        Ce = k?.alwaysShowFollowUpButton === !0,
        we = k?.disableFooterActions !== !0,
        Te = k?.conversation_context_citation,
        Ee;
    t[41] === i ? Ee = t[42] : (Ee = e => e?.tree.getMaybeMessage(i)?.metadata?.conversation_context_citation_metadata ?? [], t[41] = i, t[42] = Ee);
    let De = T(n.id, Ee),
        Oe = Te?.conversation_context_type === `user_memory` || Te?.conversation_context_type === `general_memory`,
        ke = be && !Oe,
        Ae = De.length === 1 ? De[0]?.citation_uuid ?? null : null,
        je = typeof k?.conversation_context_citation_uuid == `string` && k.conversation_context_citation_uuid.length > 0 ? k.conversation_context_citation_uuid : Ae,
        J = R.flatMap(Pn),
        Me;
    t[43] === R ? Me = t[44] : (Me = R.filter(oe).map(Nn), t[43] = R, t[44] = Me);
    let Ne = Me,
        Pe;
    t[45] === R ? Pe = t[46] : (Pe = xe(R.flatMap(Mn)), t[45] = R, t[46] = Pe);
    let Fe = Pe,
        Y = J.length > 0,
        Ie;
    t[47] !== O || t[48] !== w || t[49] !== V || t[50] !== R ? (Ie = an({
        category: O,
        context: w,
        error: V,
        messages: R
    }), t[47] = O, t[48] = w, t[49] = V, t[50] = R, t[51] = Ie) : Ie = t[51];
    let Re = Ie,
        Be = (0, Q.useRef)(null),
        Ve = d && !S && !Y && !Re && !Te && !P && !M,
        Ue = C ? `bg-surface-primary` : `bg-token-bg-primary`,
        We = l || Ve ? `mt-[calc(var(--threadFlyOut-leading-height,53px)*-1)] min-h-screen` : `mt-[-1px]`,
        Ge = ke && `mb-10`,
        Ke;
    t[52] !== Ue || t[53] !== We || t[54] !== Ge ? (Ke = ie(Ue, `flex min-h-screen w-full flex-col dark:bg-black`, We, Ge), t[52] = Ue, t[53] = We, t[54] = Ge, t[55] = Ke) : Ke = t[55];
    let qe = M ? Y ? `px-0` : `px-5` : `px-6`,
        Je = u && P && `pt-[calc(var(--header-height,3.5rem)+1px)]`,
        Ye = Y && !h && !P && !A && `border-t`,
        Xe = be ? `mb-[60px]` : A ? `mb-0` : `mb-4`,
        Ze;
    t[56] !== qe || t[57] !== Je || t[58] !== Ye || t[59] !== Xe ? (Ze = ie(`border-token-border-light flex flex-col`, qe, Je, Ye, Xe), t[56] = qe, t[57] = Je, t[58] = Ye, t[59] = Xe, t[60] = Ze) : Ze = t[60];
    let Qe;
    t[61] !== N || t[62] !== Y ? (Qe = N == null ? void 0 : {
        paddingInline: Y ? 0 : N
    }, t[61] = N, t[62] = Y, t[63] = Qe) : Qe = t[63];
    let $e;
    t[64] !== P || t[65] !== D ? ($e = P && (0, $.jsx)(`h3`, {
        className: `text-token-text-primary mt-4 mb-3 text-lg font-semibold break-words`,
        dir: `auto`,
        children: D
    }), t[64] = P, t[65] = D, t[66] = $e) : $e = t[66];
    let et;
    t[67] !== N || t[68] !== h || t[69] !== Y || t[70] !== j || t[71] !== b ? (et = h && b && (0, $.jsx)(Gt, {
        children: (0, $.jsx)(`h1`, {
            className: ie(`text-token-text-primary mt-0`, j ? `pt-1 text-xl leading-[var(--text-heading-3--line-height)] font-bold` : `mb-10 text-2xl leading-8 font-semibold`, j && Y && `px-5`, j && (Y ? `-mb-1` : `mb-6`)),
            style: {
                paddingInline: Y ? N : void 0
            },
            children: h
        })
    }), t[67] = N, t[68] = h, t[69] = Y, t[70] = j, t[71] = b, t[72] = et) : et = t[72];
    let tt;
    t[73] !== V || t[74] !== k || t[75] !== Y || t[76] !== A || t[77] !== d?.widgetStateOverride?.sensitive_values_hidden ? (tt = A && !Y && !V && (0, $.jsx)(ln, {
        extraParams: k,
        sensitiveValuesHidden: d?.widgetStateOverride?.sensitive_values_hidden === !0
    }), t[73] = V, t[74] = k, t[75] = Y, t[76] = A, t[77] = d?.widgetStateOverride?.sensitive_values_hidden, t[78] = tt) : tt = t[78];
    let nt;
    t[79] !== O || t[80] !== n || t[81] !== i || t[82] !== R || t[83] !== Re || t[84] !== d ? (nt = Re && (0, $.jsx)(hn, {
        business: Re,
        category: O,
        conversation: n,
        messageId: i,
        messages: R,
        sidebar: d
    }), t[79] = O, t[80] = n, t[81] = i, t[82] = R, t[83] = Re, t[84] = d, t[85] = nt) : nt = t[85];
    let rt = Y ? J.map((e, t) => {
            let {
                message: r,
                textContent: a,
                isEmpty: o,
                displayParts: s
            } = e;
            return (0, $.jsx)(`div`, {
                className: ie(`text-sm`, (M || N != null) && `[&_[data-testid=dil-widget-shell]>div]:w-full`, t === 0 && !Re && !h && !P && !A && `mt-4`),
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
            searchModelQueries: H,
            variant: P ? `typing-dot` : Re || M || O === `ask_sidebar` ? `minimal` : `default`
        }),
        it;
    t[86] !== V || t[87] !== P ? (it = V && (0, $.jsx)(`div`, {
        className: ie(`border-token-surface-error/15 bg-token-bg-status-error text-token-text-error border p-2 text-sm whitespace-pre-wrap`, P ? `mt-0 mb-4` : `my-4`),
        children: V.message
    }), t[86] = V, t[87] = P, t[88] = it) : it = t[88];
    let at = !re && we && (0, $.jsxs)(`div`, {
            className: `flex items-center justify-start pt-2 select-none`,
            children: [!Oe && J && J.length > 0 && (0, $.jsx)(Jn, {
                messages: J.map(An),
                clientThreadId: n.id,
                sidebarConversationId: B
            }), z ? Oe ? q && (0, $.jsx)(Xn, {
                clientThreadId: n.id,
                conversationId: q,
                messageId: i,
                citationUuid: je,
                conversationContextType: Te?.conversation_context_type === `user_memory` || Te?.conversation_context_type === `general_memory` ? Te.conversation_context_type : null,
                conversationContextCitationMetadataList: De
            }) : B && q && (0, $.jsx)(Yn, {
                messageId: z.id,
                category: O,
                conversationId: B,
                metadata: {
                    originatingConversationId: q
                }
            }) : null, !Oe && (0, $.jsx)(qn, {
                onClick: ne,
                message: z ?? null
            }), z && (0, $.jsx)(Rn, {
                message: z
            })]
        }),
        ot;
    t[89] !== Ne || t[90] !== Ce || t[91] !== O || t[92] !== Fe || t[93] !== m || t[94] !== u || t[95] !== z || t[96] !== p || t[97] !== q || t[98] !== D || t[99] !== ke || t[100] !== d || t[101] !== B ? (ot = ke && d && z && B && (q || Ce) && Fe && (0, $.jsx)(xn, {
        query: D,
        messageIds: Ne,
        category: O,
        conversationId: B,
        originatingConversationId: q,
        conversationContext: Fe,
        isModal: u,
        sidebar: d,
        onFollowUp: p,
        followUpLabel: m
    }), t[89] = Ne, t[90] = Ce, t[91] = O, t[92] = Fe, t[93] = m, t[94] = u, t[95] = z, t[96] = p, t[97] = q, t[98] = D, t[99] = ke, t[100] = d, t[101] = B, t[102] = ot) : ot = t[102];
    let X;
    t[103] !== ae || t[104] !== re || t[105] !== z?.metadata?.__internal?.sonic_sidebar_eval_preset || t[106] !== _e ? (X = !1, t[103] = ae, t[104] = re, t[105] = z?.metadata?.__internal?.sonic_sidebar_eval_preset, t[106] = _e, t[107] = X) : X = t[107];
    let st;
    t[108] !== Ze || t[109] !== Qe || t[110] !== $e || t[111] !== et || t[112] !== tt || t[113] !== nt || t[114] !== rt || t[115] !== it || t[116] !== at || t[117] !== ot || t[118] !== X ? (st = (0, $.jsxs)(`div`, {
        className: Ze,
        style: Qe,
        children: [$e, et, tt, nt, rt, it, at, ot, X]
    }), t[108] = Ze, t[109] = Qe, t[110] = $e, t[111] = et, t[112] = tt, t[113] = nt, t[114] = rt, t[115] = it, t[116] = at, t[117] = ot, t[118] = X, t[119] = st) : st = t[119];
    let ct;
    t[120] !== Ke || t[121] !== st ? (ct = (0, $.jsx)(`div`, {
        ref: Be,
        className: Ke,
        children: st
    }), t[120] = Ke, t[121] = st, t[122] = ct) : ct = t[122];
    let lt = ct,
        ut;
    t[123] !== O || t[124] !== J ? (ut = O === `movie` && J.some(On), t[123] = O, t[124] = J, t[125] = ut) : ut = t[125];
    let dt = d?.imageThumbnailUrl,
        ft = d?.savedEntityRequest == null ? w?.favoritesAnalyticsSource : `library`,
        pt;
    t[126] !== O || t[127] !== w || t[128] !== k || t[129] !== D || t[130] !== ut || t[131] !== dt || t[132] !== ft ? (pt = {
        ...w,
        entityName: D,
        entityCategory: O,
        hasMovieSidebarWidget: ut,
        extraParams: k,
        imageThumbnailUrl: dt,
        favoritesAnalyticsSource: ft
    }, t[126] = O, t[127] = w, t[128] = k, t[129] = D, t[130] = ut, t[131] = dt, t[132] = ft, t[133] = pt) : pt = t[133];
    let mt = d?.businessProfile,
        ht;
    t[134] !== O || t[135] !== lt || t[136] !== mt ? (ht = (0, $.jsx)(Ht, {
        profile: mt,
        category: O,
        children: lt
    }), t[134] = O, t[135] = lt, t[136] = mt, t[137] = ht) : ht = t[137];
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
    return !t || t.content_type !== k.Text && t.content_type !== k.MultimodalText ? [] : t.parts ?? []
}

function Nn(e) {
    return e.id
}

function Pn(e, t) {
    let n = t === 0;
    if (!e.content || e.content.content_type !== k.Text && e.content.content_type !== k.MultimodalText) return [];
    let r = e.content,
        i = e.metadata?.content_references?.some(In);
    return n && r.parts[0] && typeof r.parts[0] == `string` && r.parts[0].startsWith(Kn) && !i ? [] : [{
        message: e,
        textContent: r,
        isEmpty: !r.parts.some(Fn) && !i,
        displayParts: Me(r.parts ?? [])
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
    t[4] === o ? s = t[5] : (s = (0, $.jsx)(fe, {
        children: (0, $.jsx)(At, {
            sourcesUrls: o
        })
    }), t[4] = o, t[5] = s);
    let c;
    t[6] === r ? c = t[7] : (c = (0, $.jsx)(it, {
        children: (0, $.jsx)(at, {
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
    return t[8] !== s || t[9] !== c ? (l = (0, $.jsxs)(Oe, {
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
                attribution: t.attribution ?? e.domain ?? Xe(t.url, `short`)
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
                children: (0, $.jsx)(Ne, {
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
    return !L() && F()
}
var Gn, Q, $, Kn, qn, Jn, Yn, Xn, Zn = e((() => {
    Gn = G(), Ut(), ce(), q(), m(), je(), dt(), pt(), yt(), bt(), st(), V(), Ct(), kt(), Ye(), Dt(), X(), s(), Ue(), Tt(), Te(), a(), r(), B(), l(), p(), c(), f(), ve(), _e(), b(), nt(), R(), _(), ae(), J(), he(), ke(), de(), O(), Q = t(W()), ue(), z(), Zt(), sn(), Rt(), fn(), bn(), Wt(), Tn(), Ft(), Ve(), Mt(), $ = U(), Kn = ``, qn = e => {
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
                    t[11] === r ? n = t[12] : (n = Vn(r)?.length, t[11] = r, t[12] = n), e = Ce({
                        messageModelEnabledTools: [N.Search],
                        message: r,
                        intl: i,
                        lastResponseUsedSearch: !!n
                    }).filter(Un)
                }
                if (!r || e.length === 0) {
                    let e;
                    t[13] === n ? e = t[14] : (e = () => n(), t[13] = n, t[14] = e);
                    let r;
                    t[15] !== e || t[16] !== o ? (r = (0, $.jsx)(Be, {
                        icon: vt,
                        onClick: e,
                        label: o,
                        size: `med`
                    }), t[15] = e, t[16] = o, t[17] = r) : r = t[17], u = r;
                    break bb0
                }
                let a;t[18] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, $.jsx)(`span`, {
                    className: `touch:w-10 flex h-8 w-8 items-center justify-center`,
                    children: (0, $.jsx)(vt, {
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
                let f;t[23] !== d || t[24] !== c ? (f = (0, $.jsx)(rt.Item, {
                    icon: vt,
                    label: c,
                    onSelect: d
                }), t[23] = d, t[24] = c, t[25] = f) : f = t[25];
                let p;t[26] === n ? p = t[27] : (p = e => (0, $.jsx)(rt.Item, {
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
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (s = te(`1287696420`), t[0] = s) : s = t[0];
        let c = s,
            l;
        t[1] === i ? l = t[2] : (l = {
            action: `CHATGPT_CONVERSATION_CONTROL_ACTION_TYPE_ENTITY_DETAILS_COPY_CLICKED`,
            conversationId: i
        }, t[1] = i, t[2] = l);
        let d;
        t[3] !== r || t[4] !== o || t[5] !== n || t[6] !== a ? (d = async e => {
            let t = Ze({
                id: r,
                role: u.Assistant,
                messageGroups: [],
                isPrompt: !1,
                hasDisplayableMessages: !0,
                messages: n,
                isAsyncCorrection: !1,
                modelSlug: null
            }, a, r, o, {
                enableHighlight: c,
                includeMcpSourceCitations: se(h(r))
            });
            await E(t instanceof Promise ? await t : t, void 0, e)
        }, t[3] = r, t[4] = o, t[5] = n, t[6] = a, t[7] = d) : d = t[7];
        let f;
        return t[8] !== l || t[9] !== d ? (f = (0, $.jsx)(xt, {
            variant: `response`,
            size: `med`,
            structuredEventMetadata: l,
            onClick: d
        }), t[8] = l, t[9] = d, t[10] = f) : f = t[10], f
    }, Yn = e => {
        "use forget";
        let t = (0, Gn.c)(22),
            {
                messageId: n,
                category: r,
                conversationId: i,
                metadata: a
            } = e,
            s = K(),
            [c, l] = (0, Q.useState)(null),
            u = P(F),
            d, f;
        if (t[0] !== i || t[1] !== u || t[2] !== n ? (d = () => {
                ot({
                    clientConversationId: `entity:${i}`,
                    conversationId: i,
                    messageId: n,
                    reason: u ? void 0 : we.CHATGPT_MESSAGE_FEEDBACK_CONTROL_NOT_RENDERED_REASON_WORKSPACE_DISABLED
                })
            }, f = [i, n, u], t[0] = i, t[1] = u, t[2] = n, t[3] = d, t[4] = f) : (d = t[3], f = t[4]), (0, Q.useEffect)(d, f), !u) return null;
        let p;
        t[5] !== r || t[6] !== i || t[7] !== c || t[8] !== n || t[9] !== a ? (p = e => {
            if (c !== e) {
                let t = We({
                        conversationId: i,
                        messageId: n,
                        rating: e,
                        submissionType: qe.CHATGPT_MESSAGE_FEEDBACK_SUBMISSION_TYPE_THUMB,
                        route: tt.CHATGPT_MESSAGE_FEEDBACK_ROUTE_UNIFIED_USER_SIGNALS
                    }),
                    s = Qe({
                        rating: Re(e)
                    }, i, n, `CHAT`, a, () => be(t));
                s != null && ge(t, s);
                let c = o.logStructuredEvent(`ChatgptFeedbackInteraction`, {
                    action: `CHATGPT_FEEDBACK_ACTION_MESSAGE_RATING_SUBMITTED`,
                    surface: `CHATGPT_FEEDBACK_SURFACE_ENTITY_SIDEBAR`,
                    rating: e === `thumbsDown` ? `CHATGPT_FEEDBACK_RATING_THUMBS_DOWN` : `CHATGPT_FEEDBACK_RATING_THUMBS_UP`,
                    messageId: n,
                    conversationId: i,
                    originatingConversationId: a.originatingConversationId,
                    category: r,
                    legacyStatsigEventName: `chatgpt_sidebar_thumb_feedback`
                });
                o.logValueEventWithStatsig({
                    segmentEventName: e === `thumbsDown` ? `Sidebar Message Feedback Thumbs Down Clicked` : `Sidebar Message Feedback Thumbs Up Clicked`,
                    statsigEventName: `chatgpt_sidebar_thumb_feedback`,
                    eventId: c,
                    data: {
                        message_id: n,
                        conversation_id: i,
                        originating_conversation_id: a.originatingConversationId,
                        rating: e,
                        category: r,
                        surface: `web`
                    }
                })
            } else De(i, n, e);
            l(t => t === e ? null : e)
        }, t[5] = r, t[6] = i, t[7] = c, t[8] = n, t[9] = a, t[10] = p) : p = t[10];
        let m = p,
            h;
        t[11] !== c || t[12] !== m || t[13] !== s ? (h = c !== `thumbsDown` && (0, $.jsx)(Be, {
            size: `med`,
            onClick: () => {
                m(`thumbsUp`)
            },
            selected: c === `thumbsUp`,
            icon: c === `thumbsUp` ? ct : ht,
            label: s.formatMessage({
                id: `ConversationTurn.goodResponseTooltip`,
                defaultMessage: `Good response`
            }),
            testId: `good-response-turn-action-button`
        }), t[11] = c, t[12] = m, t[13] = s, t[14] = h) : h = t[14];
        let g;
        t[15] !== c || t[16] !== m || t[17] !== s ? (g = c !== `thumbsUp` && (0, $.jsx)(Be, {
            size: `med`,
            onClick: () => {
                m(`thumbsDown`)
            },
            selected: c === `thumbsDown`,
            icon: c === `thumbsDown` ? ut : gt,
            label: s.formatMessage({
                id: `ConversationTurn.badResponseTooltip`,
                defaultMessage: `Bad response`
            }),
            testId: `bad-response-turn-action-button`
        }), t[15] = c, t[16] = m, t[17] = s, t[18] = g) : g = t[18];
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
            c = K(),
            l;
        t[0] !== o || t[1] !== r ? (l = o ? Je(r, o) : null, t[0] = o, t[1] = r, t[2] = l) : l = t[2];
        let u = l,
            [d, f] = (0, Q.useState)(!1),
            p = P(Wn),
            m = u,
            h;
        t[3] !== o || t[4] !== r ? (h = o != null && r.find(e => e.citation_uuid === o)?.deleted === !0, t[3] = o, t[4] = r, t[5] = h) : h = t[5];
        let _ = h,
            v;
        t[6] !== o || t[7] !== n || t[8] !== r || t[9] !== s || t[10] !== i || t[11] !== m || t[12] !== _ || t[13] !== p || t[14] !== d || t[15] !== a ? (v = e => {
            if (!p || !o || d) return;
            let t = m === e ? null : e,
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
            let l = Ge(r, o, t),
                u = l !== r;
            u && g(n, e => {
                C.updateTree(e, e => {
                    e.updateNodeMessageMetadata(a, {
                        conversation_context_citation_metadata: l
                    })
                })
            }), f(!0), D.safePost(`/sidebar/conversation_context_citation_feedback`, {
                requestBody: {
                    conversation_id: i,
                    message_id: a,
                    citation_uuid: o,
                    feedback: t,
                    deleted: _
                }
            }).catch(() => {
                u && g(n, e => {
                    C.updateTree(e, e => {
                        e.updateNodeMessageMetadata(a, {
                            conversation_context_citation_metadata: r
                        })
                    })
                })
            }).finally(() => {
                f(!1)
            })
        }, t[6] = o, t[7] = n, t[8] = r, t[9] = s, t[10] = i, t[11] = m, t[12] = _, t[13] = p, t[14] = d, t[15] = a, t[16] = v) : v = t[16];
        let y = v;
        if (!o || !p) return null;
        let b;
        t[17] !== m || t[18] !== y || t[19] !== c || t[20] !== d ? (b = m !== `negative` && (0, $.jsx)(Be, {
            size: `med`,
            onClick: () => {
                y(`positive`)
            },
            selected: m === `positive`,
            disabled: d,
            className: `disabled:hover:bg-transparent disabled:cursor-not-allowed disabled:opacity-50`,
            icon: m === `positive` ? ct : ht,
            label: c.formatMessage({
                id: `tLYX75`,
                defaultMessage: `Relevant`
            }),
            testId: `good-memory-feedback-turn-action-button`
        }), t[17] = m, t[18] = y, t[19] = c, t[20] = d, t[21] = b) : b = t[21];
        let x;
        t[22] !== m || t[23] !== y || t[24] !== c || t[25] !== d ? (x = m !== `positive` && (0, $.jsx)(Be, {
            size: `med`,
            onClick: () => {
                y(`negative`)
            },
            selected: m === `negative`,
            disabled: d,
            className: `disabled:hover:bg-transparent disabled:cursor-not-allowed disabled:opacity-50`,
            icon: m === `negative` ? ut : gt,
            label: c.formatMessage({
                id: `YW9vkL`,
                defaultMessage: `Not relevant`
            }),
            testId: `bad-memory-feedback-turn-action-button`
        }), t[22] = m, t[23] = y, t[24] = c, t[25] = d, t[26] = x) : x = t[26];
        let S;
        return t[27] !== b || t[28] !== x ? (S = (0, $.jsxs)($.Fragment, {
            children: [b, x]
        }), t[27] = b, t[28] = x, t[29] = S) : S = t[29], S
    }
}));
export {
    Zn as n, Dn as t
};
//# sourceMappingURL=277559ed-i3wsfthdiylkuae6.js.map