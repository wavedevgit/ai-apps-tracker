const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/05175aed-hpxbywyw8kqrez7d.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-r54yv6lv29x4ew99.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-dwpaie1hln28efxb.js", "assets/30901919-k5uqyx4vyplt9toa.js", "assets/c470f5ab-bhx5jraq636jc4ww.js", "assets/0e5afe53-d830ix843j2kh0p0.js", "assets/conversation-small-gfjfeahf.css", "assets/3ed411a3-ii7cr3sy8pdspdd0.js", "assets/4e1f6607-ng1xolg91laibnlt.js", "assets/bd043fcd-mv3bdgdmgh9329xw.js", "assets/23de51ef-n60fvtspklb63gcm.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $7 as n,
    A5 as r,
    A8 as i,
    At as a,
    Da as o,
    IU as s,
    J5 as c,
    Jt as l,
    LU as u,
    Lnt as d,
    Oa as f,
    R8 as p,
    Rz as m,
    Y7 as h,
    _rt as g,
    a2 as _,
    cn as v,
    eY as y,
    gF as b,
    grt as x,
    hn as S,
    hrt as C,
    lY as w,
    not as T,
    o2 as E,
    tot as D,
    uF as O,
    urt as ee,
    vF as k,
    znt as te,
    zz as ne
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    Bn as re,
    Ln as ie,
    Nn as ae,
    Rn as A,
    Vn as oe,
    cn as se,
    ln as ce,
    wn as le,
    zn as ue
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Ajt as de,
    FKn as fe,
    GFn as pe,
    IKn as me,
    JVn as he,
    KFn as ge,
    Qjn as _e,
    Xjn as ve,
    Zjn as j,
    gdt as ye,
    hdt as be,
    kjt as xe,
    qVn as Se
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    Gv as M,
    Il as Ce,
    Ky as we,
    Ll as N,
    Wv as P,
    ai as Te,
    ii as F,
    qy as Ee
} from "./30901919-k5uqyx4vyplt9toa.js";
import {
    Mm as De,
    Nm as Oe
} from "./8b34dbc2-bgocf3s6t6l67twq.js";
import {
    c as ke,
    n as Ae
} from "./3ed411a3-ii7cr3sy8pdspdd0.js";
import {
    n as je,
    t as I
} from "./bd043fcd-mv3bdgdmgh9329xw.js";

function L(e) {
    return typeof e == `object` && !!e
}

function R(e) {
    return Array.isArray(e) && e.every(e => typeof e == `string`)
}

function z(e, t) {
    return Object.keys(e).length === t.length && t.every(t => Object.prototype.hasOwnProperty.call(e, t))
}

function B(e, t) {
    if (typeof e != `string` || !Me(e, Ue)) return !1;
    let n = We.exec(e);
    if (V(e) || n == null || n[1].includes(`@`)) return !1;
    try {
        let n = new URL(e);
        return t.has(n.protocol) && n.username.length === 0 && n.password.length === 0
    } catch {
        return !1
    }
}

function V(e) {
    if (U.test(e)) return !0;
    for (let t = 0; t < e.length; t += 1) {
        let n = e.charCodeAt(t);
        if (n <= 31 || n >= 127 && n <= 159) return !0
    }
    return !1
}

function Me(e, t) {
    return e.length <= t && Ne(e) <= t
}

function Ne(e) {
    if (typeof TextEncoder < `u`) return new TextEncoder().encode(e).byteLength;
    let t = 0;
    for (let n = 0; n < e.length; n += 1) {
        let r = e.charCodeAt(n);
        if (r < 128) t += 1;
        else if (r < 2048) t += 2;
        else if (r >= 55296 && r <= 56319) {
            let r = e.charCodeAt(n + 1);
            r >= 56320 && r <= 57343 ? (t += 4, n += 1) : t += 3
        } else t += 3
    }
    return t
}

function Pe(e, t) {
    try {
        return Me(JSON.stringify(e), t)
    } catch {
        return !1
    }
}

function Fe(e, t) {
    if (typeof document > `u`) return !1;
    try {
        let n = document.createElement(`template`);
        n.innerHTML = e;
        let r = n.content.querySelectorAll(`[data-oai-link-token]`);
        return r.length === t.length && t.every((e, t) => {
            let n = r.item(t);
            return n != null && n.localName === `a` && n.getAttribute(`data-oai-link-token`) === e.token
        })
    } catch {
        return !1
    }
}

function Ie(e) {
    if (!L(e) || !z(e, [`fragment`, `links`]) && !z(e, [`fragment`, `links`, `images`]) || typeof e.fragment != `string` || !Me(e.fragment, Ve) || e.fragment.trim().length === 0 || !Array.isArray(e.links) || e.links.length > H || Object.hasOwn(e, `images`) && (!Array.isArray(e.images) || e.images.length > He)) return;
    let t = [];
    for (let [n, r] of e.links.entries()) {
        if (!L(r) || !z(r, [`token`, `url`]) || r.token !== `l${n}` || !B(r.url, Ge)) return;
        t.push({
            token: r.token,
            url: r.url
        })
    }
    if (!Fe(e.fragment, t)) return;
    let n = [],
        r = Array.isArray(e.images) ? e.images : [];
    for (let [e, t] of r.entries()) {
        if (!L(t) || !z(t, [`token`, `url`]) || t.token !== `i${e}` || !B(t.url, Ke)) return;
        n.push({
            token: t.token,
            url: t.url
        })
    }
    let i = {
        fragment: e.fragment,
        links: t,
        images: n
    };
    return Pe(e, Be) ? i : void 0
}

function Le(e) {
    try {
        return Ie(e)
    } catch {
        return
    }
}
async function Re({
    browserDetail: e,
    source: t,
    signal: n
}) {
    let r = await h.safePost(ze, {
        requestBody: {
            browser_detail: e,
            source: t
        },
        signal: n
    });
    if (!L(r) || typeof r.sender != `string` || !R(r.to) || !R(r.cc) || !R(r.bcc) || typeof r.subject != `string` || typeof r.body != `string`) throw Error(`Email detail response was malformed.`);
    let i = Le(r.html_preview);
    return {
        sender: r.sender,
        to: r.to,
        cc: r.cc,
        bcc: r.bcc,
        subject: r.subject,
        body: r.body,
        ...typeof r.email_ts == `string` ? {
            emailTs: r.email_ts
        } : {},
        ...i == null ? {} : {
            htmlPreview: i
        }
    }
}
var ze, Be, Ve, H, He, Ue, We, U, Ge, Ke, qe = e((() => {
    n(), ze = `/aip/connectors/email/read_email_detail`, Be = 768 * 1024, Ve = 256 * 1024, H = 256, He = 256, Ue = 2048, We = /^https?:\/\/([^/?#]+)/i, U = /\s/, Ge = new Set([`http:`, `https:`]), Ke = new Set([`https:`])
}));

function Je(e) {
    return typeof e != `object` || !e ? !1 : `prompt_message` in e && e.prompt_message != null && `append_messages` in e && Array.isArray(e.append_messages) && `force_genui_prefetch` in e && Array.isArray(e.force_genui_prefetch) && `turn_origin` in e && e.turn_origin === `targeted_reply`
}
async function Ye({
    source: e,
    subjectLabel: t,
    signal: n
}) {
    let r = {
            source: e,
            subject_label: t
        },
        i = await h.safePost(Xe, {
            requestBody: r,
            signal: n
        });
    if (!Je(i)) throw Error(`Prepared email reply response was malformed.`);
    return {
        promptMessage: i.prompt_message,
        appendMessages: i.append_messages,
        extraStreamParams: {
            forceGenuiPrefetch: i.force_genui_prefetch,
            turnOrigin: i.turn_origin
        }
    }
}
var Xe, Ze = e((() => {
        n(), Xe = `/aip/connectors/email/prepare_reply`
    })),
    Qe, W, $e, et, tt, nt, rt = e((() => {
        Qe = e => typeof e == `object` && !!e, W = e => typeof e == `string` && e.trim().length > 0, $e = e => Qe(e) && e.type === `gmail` && W(e.message_id), et = e => $e(e.source) ? {
            source: e.source
        } : null, tt = e => {
            let t = e.data;
            return e.category === `email_preview` && Qe(t) && typeof t.subject == `string` && W(t.sender) && W(t.url) && (t.avatar_url == null || typeof t.avatar_url == `string`) && (t.received_at == null || typeof t.received_at == `string`)
        }, nt = e => {
            let {
                url: t
            } = e.data, n = et(e.data);
            return JSON.stringify([t, n?.source.message_id ?? null])
        }
    })),
    G, it, at = e((() => {
        E(), je(), G = re(), ce(), it = _(() => se(() => import(`./05175aed-hpxbywyw8kqrez7d.js`).then(e => e.EmailExpanded), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])), {
            loading: () => (0, G.jsx)(`div`, {
                className: `h-[300px] px-4 pt-3`,
                children: (0, G.jsx)(I, {})
            })
        })
    }));

function ot(e) {
    d.logStructuredEvent(`ChatgptEmailPreviewAction`, {
        action: e,
        surface: j.CHATGPT_EMAIL_PREVIEW_SURFACE_TYPE_INLINE
    })
}

function st(e, t) {
    r(() => {
        gt.set(e, e => e[t] ? e : {
            ...e,
            [t]: !0
        }), _t.set(e, e => {
            if (!e[t]) return e;
            let {
                [t]: n, ...r
            } = e;
            return r
        })
    })
}

function ct(e, t) {
    let n = !1;
    return r(() => {
        _t.set(e, e => e[t] ? e : (n = !0, {
            ...e,
            [t]: !0
        }))
    }), n
}

function lt(e, t) {
    r(() => {
        _t.set(e, e => {
            if (!e[t]) return e;
            let {
                [t]: n, ...r
            } = e;
            return r
        })
    })
}

function K(e) {
    return e.trim().charAt(0).toUpperCase()
}

function q(e) {
    let t = e.trim(),
        n = /^(.*?)\s*<([^<>]+)>$/.exec(t);
    if (n == null) return {
        name: t,
        email: null
    };
    let r = (n[1]?.trim() ?? ``).replace(/^"(.*)"$/, `$1`).trim(),
        i = n[2]?.trim() ?? ``;
    return {
        name: r.length > 0 ? r : i,
        email: r.length > 0 && i.length > 0 ? i : null
    }
}

function ut(e) {
    "use forget";
    let t = (0, ft.c)(50),
        {
            avatarUrl: n,
            isExpanded: r,
            onSenderActivate: i,
            receivedAt: a,
            sender: o,
            shouldEnableSenderInteraction: s,
            shouldShowAvatar: c,
            subject: l,
            subjectId: u,
            onAvatarError: d
        } = e,
        f = ue(),
        p, m, h, g, _, v, y;
    if (t[0] !== n || t[1] !== f || t[2] !== d || t[3] !== a || t[4] !== o || t[5] !== c || t[6] !== l) {
        ({
            email: h,
            name: _
        } = q(o)), g = h == null ? null : ` <${h}>`;
        let e;
        t[14] !== f || t[15] !== l ? (e = f.formatMessage(Q.collapseEmail, {
            subject: l
        }), t[14] = f, t[15] = l, t[16] = e) : e = t[16], p = `${_}: ${e}`;
        let r;
        if (t[17] !== f || t[18] !== a) {
            let e = a == null ? null : new Date(a);
            r = e != null && !Number.isNaN(e.getTime()) ? f.formatDate(e, {
                day: `numeric`,
                month: `short`
            }) : null, t[17] = f, t[18] = a, t[19] = r
        } else r = t[19];
        m = r, v = `border-token-border-default bg-token-bg-tertiary text-token-text-secondary flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-full border text-sm font-medium`, y = c && n != null ? (0, Y.jsx)(`img`, {
            src: n,
            alt: ``,
            className: `h-full w-full object-cover`,
            onError: d
        }) : K(_), t[0] = n, t[1] = f, t[2] = d, t[3] = a, t[4] = o, t[5] = c, t[6] = l, t[7] = p, t[8] = m, t[9] = h, t[10] = g, t[11] = _, t[12] = v, t[13] = y
    } else p = t[7], m = t[8], h = t[9], g = t[10], _ = t[11], v = t[12], y = t[13];
    let b;
    t[20] !== v || t[21] !== y ? (b = (0, Y.jsx)(`span`, {
        className: v,
        children: y
    }), t[20] = v, t[21] = y, t[22] = b) : b = t[22];
    let x = h == null || !s,
        S;
    t[23] !== p || t[24] !== r || t[25] !== i || t[26] !== h || t[27] !== g || t[28] !== _ || t[29] !== s ? (S = e => h != null && i != null ? (0, Y.jsxs)(`button`, {
        ...e,
        type: `button`,
        "aria-label": r ? p : h,
        className: `pointer-events-auto block min-w-0 truncate rounded-sm text-start focus-visible:outline-2 focus-visible:outline-offset-2`,
        onClick: i,
        children: [_, (0, Y.jsx)(`bdi`, {
            "aria-hidden": `true`,
            dir: `ltr`,
            hidden: !r,
            children: g
        })]
    }) : (0, Y.jsx)(`span`, {
        ...e,
        "aria-label": h ?? _,
        className: h == null || !s ? `block min-w-0 truncate` : `pointer-events-auto block min-w-0 truncate rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2`,
        tabIndex: h == null || !s ? void 0 : 0,
        children: _
    }), t[23] = p, t[24] = r, t[25] = i, t[26] = h, t[27] = g, t[28] = _, t[29] = s, t[30] = S) : S = t[30];
    let C;
    t[31] !== h || t[32] !== x || t[33] !== S ? (C = (0, Y.jsx)(xe, {
        disabled: x,
        content: h,
        side: `top-center`,
        children: S
    }), t[31] = h, t[32] = x, t[33] = S, t[34] = C) : C = t[34];
    let w;
    t[35] !== a || t[36] !== m ? (w = m != null && (0, Y.jsxs)(Y.Fragment, {
        children: [(0, Y.jsx)(`span`, {
            "aria-hidden": `true`,
            children: $
        }), (0, Y.jsx)(`time`, {
            className: `shrink-0`,
            dateTime: a ?? void 0,
            children: m
        })]
    }), t[35] = a, t[36] = m, t[37] = w) : w = t[37];
    let T;
    t[38] !== C || t[39] !== w ? (T = (0, Y.jsxs)(`span`, {
        className: `text-token-text-tertiary flex min-w-0 items-center gap-1 text-sm leading-5`,
        children: [C, w]
    }), t[38] = C, t[39] = w, t[40] = T) : T = t[40];
    let E;
    t[41] !== l || t[42] !== u ? (E = (0, Y.jsx)(`span`, {
        id: u,
        className: `text-token-text-primary line-clamp-2 text-base leading-6 break-words`,
        children: l
    }), t[41] = l, t[42] = u, t[43] = E) : E = t[43];
    let D;
    t[44] !== T || t[45] !== E ? (D = (0, Y.jsxs)(`span`, {
        className: `min-w-0 flex-1`,
        children: [T, E]
    }), t[44] = T, t[45] = E, t[46] = D) : D = t[46];
    let O;
    return t[47] !== D || t[48] !== b ? (O = (0, Y.jsxs)(Y.Fragment, {
        children: [b, D]
    }), t[47] = D, t[48] = b, t[49] = O) : O = t[49], O
}

function dt(e) {
    "use forget";
    let t = (0, ft.c)(111),
        {
            clientThreadId: n,
            contentReference: r
        } = e,
        i = ue(),
        a = (0, J.useId)(),
        o = (0, J.useId)(),
        u = l(),
        d = (0, J.useRef)(null),
        p = (0, J.useRef)(null),
        m = (0, J.useRef)(!1),
        h = (0, J.useRef)(null),
        _ = (0, J.useRef)(null),
        y = (0, J.useRef)(!1),
        x = (0, J.useRef)(null),
        [E, D] = (0, J.useState)(null),
        [O, ee] = (0, J.useState)(),
        [k, te] = (0, J.useState)(!1),
        [ne, re] = (0, J.useState)(null),
        ie;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (ie = {
        status: `idle`
    }, t[0] = ie) : ie = t[0];
    let [A, oe] = (0, J.useState)(ie), {
        sender: se,
        subject: ce,
        url: le
    } = r.data, de = W(r.data.avatar_url) ? r.data.avatar_url : void 0, pe;
    t[1] !== r.data.received_at || t[2] !== A ? (pe = W(r.data.received_at) ? r.data.received_at : A.status === `loaded` ? A.detail.emailTs : void 0, t[1] = r.data.received_at, t[2] = A, t[3] = pe) : pe = t[3];
    let me = pe,
        he = f(),
        _e = w(n),
        j = ke(_e, de ?? void 0),
        be = ke(_e, le),
        xe;
    t[4] === r.data ? xe = t[5] : (xe = et(r.data), t[4] = r.data, t[5] = xe);
    let M = xe,
        we;
    t[6] === n ? we = t[7] : (we = n == null ? null : b(n), t[6] = n, t[7] = we);
    let N = we,
        P = M == null ? null : `${M.source.type}:${M.source.message_id}`,
        Te;
    t[8] !== N || t[9] !== P ? (Te = () => N != null && P != null ? gt(N)[P] ?? !1 : !1, t[8] = N, t[9] = P, t[10] = Te) : Te = t[10];
    let F = c(Te),
        Ee;
    t[11] !== N || t[12] !== P ? (Ee = () => N != null && P != null ? _t(N)[P] ?? !1 : !1, t[11] = N, t[12] = P, t[13] = Ee) : Ee = t[13];
    let De = c(Ee),
        Ae;
    t[14] === N ? Ae = t[15] : (Ae = () => N != null && Se(N) === !0, t[14] = N, t[15] = Ae);
    let je = c(Ae),
        I = M != null && !he,
        L;
    t[16] !== i || t[17] !== ce ? (L = W(ce) ? ce : i.formatMessage(Q.noSubject), t[16] = i, t[17] = ce, t[18] = L) : L = t[18];
    let R = L,
        z = j != null && j !== E,
        B;
    t[19] === I ? B = t[20] : (B = I ? () => h.current?.click() : void 0, t[19] = I, t[20] = B);
    let V;
    t[21] === j ? V = t[22] : (V = () => D(j ?? null), t[21] = j, t[22] = V);
    let Me;
    t[23] !== k || t[24] !== me || t[25] !== j || t[26] !== se || t[27] !== z || t[28] !== R || t[29] !== o || t[30] !== V || t[31] !== B ? (Me = (0, Y.jsx)(ut, {
        avatarUrl: j,
        isExpanded: k,
        onSenderActivate: B,
        receivedAt: me,
        sender: se,
        shouldEnableSenderInteraction: !0,
        shouldShowAvatar: z,
        subject: R,
        subjectId: o,
        onAvatarError: V
    }), t[23] = k, t[24] = me, t[25] = j, t[26] = se, t[27] = z, t[28] = R, t[29] = o, t[30] = V, t[31] = B, t[32] = Me) : Me = t[32];
    let Ne = Me,
        Pe, Fe;
    t[33] === Symbol.for(`react.memo_cache_sentinel`) ? (Pe = () => () => {
        d.current?.abort(), p.current?.abort(), x.current?.abort()
    }, Fe = [], t[33] = Pe, t[34] = Fe) : (Pe = t[33], Fe = t[34]), (0, J.useEffect)(Pe, Fe);
    let Ie, Le;
    t[35] === I ? (Ie = t[36], Le = t[37]) : (Ie = () => {
        !I || m.current || (m.current = !0, g(`chatgpt_email_preview_shown`))
    }, Le = [I], t[35] = I, t[36] = Ie, t[37] = Le), (0, J.useEffect)(Ie, Le);
    let ze, Be;
    t[38] === k ? (ze = t[39], Be = t[40]) : (ze = () => {
        if (k) {
            _.current?.focus({
                preventScroll: !0
            });
            return
        }
        y.current && (y.current = !1, h.current?.focus({
            preventScroll: !0
        }))
    }, Be = [k], t[38] = k, t[39] = ze, t[40] = Be), (0, J.useEffect)(ze, Be);
    let Ve;
    t[41] !== be || t[42] !== le ? (Ve = () => {
        ge(le, be)
    }, t[41] = be, t[42] = le, t[43] = Ve) : Ve = t[43];
    let H = Ve,
        He;
    t[44] !== N || t[45] !== M || t[46] !== F || t[47] !== i || t[48] !== je || t[49] !== P || t[50] !== u || t[51] !== R ? (He = async e => {
        if (N == null || M == null || P == null || F || je || p.current != null || !ct(N, P)) return;
        let t = fe(e.currentTarget),
            n = new AbortController;
        p.current = n;
        let r;
        try {
            r = await Ye({
                signal: n.signal,
                source: M.source,
                subjectLabel: R
            })
        } catch (e) {
            let t = e;
            p.current === n && (p.current = null), lt(N, P), !n.signal.aborted && !T(t) && s().danger(i.formatMessage(Q.replyPreparationFailed), {
                toastId: `email_preview_reply_preparation_failed`
            });
            return
        }
        if (n.signal.aborted || p.current !== n) {
            p.current === n && (p.current = null), lt(N, P);
            return
        }
        p.current = null;
        let a = !1,
            o = () => {
                a || lt(N, P)
            };
        Oe({
            callsiteId: `request_completion.formatted_text.email_preview_widget.reply`,
            conversation: N,
            sourceEvent: e,
            ...r,
            callbacks: {
                onAfterOptimisticThreadUpdate: () => {
                    a = !0, st(N, P), t != null && requestAnimationFrame(() => {
                        ye(t, !1), t.scrollTo({
                            top: t.scrollHeight,
                            behavior: u ? `instant` : `smooth`
                        })
                    })
                }
            }
        }).then(o, o)
    }, t[44] = N, t[45] = M, t[46] = F, t[47] = i, t[48] = je, t[49] = P, t[50] = u, t[51] = R, t[52] = He) : He = t[52];
    let Ue = He;
    if (!I) {
        let e;
        t[53] === H ? e = t[54] : (e = (0, Y.jsx)(xt, {
            onClick: H
        }), t[53] = H, t[54] = e);
        let n;
        return t[55] !== Ne || t[56] !== e ? (n = (0, Y.jsxs)(`div`, {
            className: `border-token-border-heavy bg-token-bg-primary squircle my-4 w-full overflow-hidden rounded-[32px] border-[0.5px] flex items-center gap-3 px-4 py-3.5 text-start`,
            children: [Ne, e]
        }), t[55] = Ne, t[56] = e, t[57] = n) : n = t[57], n
    }
    let We;
    t[58] !== M || t[59] !== A.status ? (We = async () => {
        if ((x.current == null || x.current.signal.aborted) && (x.current = new AbortController, ee(x.current.signal)), A.status === `loading` || A.status === `loaded`) return;
        let e = new AbortController;
        d.current = e, ot(ve.CHATGPT_EMAIL_PREVIEW_ACTION_TYPE_DETAIL_FETCH_STARTED);
        try {
            let t = C(pt),
                n = t.get(mt, !1),
                r = t.get(ht, !1);
            oe({
                status: `loading`,
                browserDetail: n
            });
            let i = await Re({
                ...M,
                browserDetail: n,
                signal: e.signal
            });
            if (e.signal.aborted) return;
            d.current = null, ot(ve.CHATGPT_EMAIL_PREVIEW_ACTION_TYPE_DETAIL_FETCH_SUCCEEDED), oe({
                status: `loaded`,
                detail: i,
                canLoadImages: r
            })
        } catch {
            if (e.signal.aborted) return;
            d.current = null, ot(ve.CHATGPT_EMAIL_PREVIEW_ACTION_TYPE_DETAIL_FETCH_FAILED), oe({
                status: `error`
            })
        }
    }, t[58] = M, t[59] = A.status, t[60] = We) : We = t[60];
    let U = We,
        Ge;
    t[61] === U ? Ge = t[62] : (Ge = () => {
        ot(ve.CHATGPT_EMAIL_PREVIEW_ACTION_TYPE_DETAIL_OPENED), te(!0), U()
    }, t[61] = U, t[62] = Ge);
    let Ke = Ge,
        qe;
    t[63] === U ? qe = t[64] : (qe = () => {
        ot(ve.CHATGPT_EMAIL_PREVIEW_ACTION_TYPE_DETAIL_RETRY_CLICKED), U()
    }, t[63] = U, t[64] = qe);
    let Je = qe,
        Xe;
    t[65] === A ? Xe = t[66] : (Xe = A.status === `idle` ? {
        status: `loading`
    } : A, t[65] = A, t[66] = Xe);
    let Ze = Xe,
        Qe = Ze.status === `loaded` && Ze.detail.htmlPreview != null,
        $e = A.status !== `loading` || !A.browserDetail,
        tt;
    t[67] === Symbol.for(`react.memo_cache_sentinel`) ? (tt = () => {
        x.current?.abort(), x.current = null, y.current = !0, te(!1)
    }, t[67] = tt) : tt = t[67];
    let nt = tt,
        rt = `border-token-border-heavy bg-token-bg-primary squircle my-4 w-full overflow-hidden rounded-[32px] border-[0.5px] email-preview-card group relative motion-safe:transition-shadow ${k?vt:yt}`,
        G;
    t[68] !== i || t[69] !== k || t[70] !== R ? (G = i.formatMessage(k ? Q.collapseEmail : Q.expandEmail, {
        subject: R
    }), t[68] = i, t[69] = k, t[70] = R, t[71] = G) : G = t[71];
    let at = k ? nt : Ke,
        K;
    t[72] !== a || t[73] !== k || t[74] !== G || t[75] !== at ? (K = (0, Y.jsx)(`button`, {
        ref: h,
        type: `button`,
        "aria-controls": a,
        "aria-expanded": k,
        "aria-label": G,
        className: `interactive-outline-secondary absolute inset-0 z-0 w-full rounded-[32px] text-start`,
        onClick: at
    }), t[72] = a, t[73] = k, t[74] = G, t[75] = at, t[76] = K) : K = t[76];
    let q;
    t[77] === Ne ? q = t[78] : (q = (0, Y.jsx)(`div`, {
        className: `pointer-events-none relative z-1 flex min-w-0 flex-1 items-center gap-3`,
        children: Ne
    }), t[77] = Ne, t[78] = q);
    let dt = !je,
        X;
    t[79] !== F || t[80] !== De || t[81] !== Ue || t[82] !== dt ? (X = (0, Y.jsx)(`div`, {
        className: `relative z-1`,
        children: (0, Y.jsx)(bt, {
            hasStartedReply: F,
            isPreparingReply: De,
            isReplyAvailable: dt,
            onReply: Ue
        })
    }), t[79] = F, t[80] = De, t[81] = Ue, t[82] = dt, t[83] = X) : X = t[83];
    let Z;
    t[84] === H ? Z = t[85] : (Z = (0, Y.jsx)(`div`, {
        className: `relative z-1`,
        children: (0, Y.jsx)(xt, {
            onClick: H
        })
    }), t[84] = H, t[85] = Z);
    let $;
    t[86] !== K || t[87] !== q || t[88] !== X || t[89] !== Z ? ($ = (0, Y.jsxs)(`div`, {
        className: `relative flex min-h-[72px] items-center gap-3 px-4 py-3.5 text-start`,
        children: [K, q, X, Z]
    }), t[86] = K, t[87] = q, t[88] = X, t[89] = Z, t[90] = $) : $ = t[90];
    let St;
    t[91] !== ne || t[92] !== M || t[93] !== a || t[94] !== Ze || t[95] !== Qe || t[96] !== O || t[97] !== i || t[98] !== k || t[99] !== Je || t[100] !== u || t[101] !== $e || t[102] !== R || t[103] !== o ? (St = k && (0, Y.jsxs)(v.div, {
        className: `relative overflow-hidden`,
        initial: !u && {
            height: 0,
            opacity: 0
        },
        animate: {
            height: `auto`,
            opacity: 1
        },
        exit: {
            height: 0,
            opacity: 0
        },
        transition: u ? {
            duration: 0
        } : {
            type: `tween`,
            duration: .24,
            ease: `easeInOut`
        },
        children: [(0, Y.jsx)(`div`, {
            className: `border-token-border-light mx-4 border-t`
        }), (0, Y.jsx)(`div`, {
            ref: _,
            id: a,
            role: `region`,
            "aria-labelledby": o,
            tabIndex: -1,
            "data-testid": `email-expanded-panel`,
            className: `interactive-outline-secondary focus-visible:outline-offset-[-3px]!`,
            children: (0, Y.jsx)(it, {
                ...Ze,
                allowImages: ne === M.source.message_id,
                onLoadImages: () => {
                    g(`chatgpt_web_email_preview_load_images_clicked`), re(M.source.message_id)
                },
                onRetry: Je,
                sessionSignal: O
            })
        }), $e && (0, Y.jsxs)(`button`, {
            type: `button`,
            "aria-controls": a,
            "aria-expanded": `true`,
            "aria-label": i.formatMessage(Q.collapseEmail, {
                subject: R
            }),
            className: Qe ? `interactive-button interactive-button-secondary interactive-outline-secondary bg-token-bg-primary/70 absolute inset-x-0 bottom-2 z-10 mx-auto flex h-10 w-fit items-center justify-center gap-2 rounded-full px-4 text-sm font-medium shadow-sm backdrop-blur-sm` : `interactive-bg-secondary interactive-outline-secondary flex h-10 w-full items-center justify-center gap-2 px-4 text-sm font-medium`,
            onClick: nt,
            children: [(0, Y.jsx)(Ce, {
                "aria-hidden": `true`,
                className: `icon`
            }), (0, Y.jsx)(ae, {
                ...Q.collapse
            })]
        })]
    }, `email-detail`), t[91] = ne, t[92] = M, t[93] = a, t[94] = Ze, t[95] = Qe, t[96] = O, t[97] = i, t[98] = k, t[99] = Je, t[100] = u, t[101] = $e, t[102] = R, t[103] = o, t[104] = St) : St = t[104];
    let Ct;
    t[105] === St ? Ct = t[106] : (Ct = (0, Y.jsx)(S, {
        initial: !1,
        children: St
    }), t[105] = St, t[106] = Ct);
    let wt;
    return t[107] !== rt || t[108] !== $ || t[109] !== Ct ? (wt = (0, Y.jsxs)(`div`, {
        className: rt,
        children: [$, Ct]
    }), t[107] = rt, t[108] = $, t[109] = Ct, t[110] = wt) : wt = t[110], wt
}
var ft, J, Y, pt, mt, ht, X, Z, gt, _t, Q, vt, yt, $, bt, xt, St = e((() => {
    ft = le(), ne(), De(), k(), he(), M(), Ee(), N(), Te(), de(), pe(), Ae(), me(), i(), y(), be(), u(), te(), o(), D(), x(), _e(), a(), J = t(oe()), A(), qe(), Ze(), rt(), at(), Y = re(), pt = `4200284407`, mt = `is_web_html_enabled`, ht = `is_web_html_images_enabled`, X = `is_web_structured_reply_enabled`, Z = `3062209644`, gt = O(() => p({})), _t = O(() => p({})), Q = ie({
        reply: {
            id: `EmailPreviewWidget.reply`,
            defaultMessage: `Reply`
        },
        replyStarted: {
            id: `EmailPreviewWidget.replyStarted`,
            defaultMessage: `Reply started`
        },
        openInGmail: {
            id: `EmailPreviewWidget.openInGmail`,
            defaultMessage: `Open in Gmail`
        },
        collapse: {
            id: `EmailPreviewWidget.collapse`,
            defaultMessage: `Collapse`
        },
        expandEmail: {
            id: `EmailPreviewWidget.expandEmail`,
            defaultMessage: `Expand {subject}`
        },
        collapseEmail: {
            id: `EmailPreviewWidget.collapseEmail`,
            defaultMessage: `Collapse {subject}`
        },
        noSubject: {
            id: `EmailPreviewWidget.noSubject`,
            defaultMessage: `(no subject)`
        },
        replyPreparationFailed: {
            id: `EmailPreviewWidget.replyPreparationFailed`,
            defaultMessage: `Couldn’t start your reply. Please try again.`
        }
    }), vt = `shadow-[0_2px_16px_0_rgba(0,0,0,0.05),0_0.5px_0.5px_0_rgba(0,0,0,0.05)]`, yt = `shadow-none hover:shadow-[0_2px_16px_0_rgba(0,0,0,0.05),0_0.5px_0.5px_0_rgba(0,0,0,0.05)] focus-within:shadow-[0_2px_16px_0_rgba(0,0,0,0.05),0_0.5px_0.5px_0_rgba(0,0,0,0.05)]`, $ = `·`, bt = e => {
        "use forget";
        let t = (0, ft.c)(12),
            {
                hasStartedReply: n,
                isPreparingReply: r,
                isReplyAvailable: i,
                onReply: a
            } = e,
            o = ue(),
            s;
        t[0] !== n || t[1] !== o ? (s = o.formatMessage(n ? Q.replyStarted : Q.reply), t[0] = n, t[1] = o, t[2] = s) : s = t[2];
        let c = s,
            l;
        t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (l = ee(Z) && C(pt).get(X, !1), t[3] = l) : l = t[3];
        let u = l,
            d;
        t[4] !== n || t[5] !== r || t[6] !== i || t[7] !== a || t[8] !== c ? (d = i && u && (0, Y.jsxs)(`button`, {
            type: `button`,
            "aria-label": c,
            "aria-busy": r || void 0,
            disabled: r || n,
            onClick: a,
            className: `interactive-button interactive-button-secondary flex h-11 shrink-0 items-center justify-center gap-2 rounded-full ${n?`w-11 px-0`:`px-4`}`,
            children: [r ? (0, Y.jsx)(m, {
                className: `icon shrink-0`
            }) : n ? (0, Y.jsx)(we, {
                "aria-hidden": `true`,
                className: `icon shrink-0`
            }) : (0, Y.jsx)(F, {
                "aria-hidden": `true`,
                className: `icon shrink-0`
            }), !n && (0, Y.jsx)(`span`, {
                className: `max-w-12 shrink-0 overflow-hidden whitespace-nowrap`,
                children: (0, Y.jsx)(ae, {
                    ...Q.reply
                })
            })]
        }, `reply`), t[4] = n, t[5] = r, t[6] = i, t[7] = a, t[8] = c, t[9] = d) : d = t[9];
        let f;
        return t[10] === d ? f = t[11] : (f = (0, Y.jsx)(`div`, {
            className: `flex shrink-0 items-center gap-2`,
            children: d
        }), t[10] = d, t[11] = f), f
    }, xt = e => {
        "use forget";
        let t = (0, ft.c)(8),
            {
                onClick: n
            } = e,
            r = ue(),
            i;
        t[0] === r ? i = t[1] : (i = r.formatMessage(Q.openInGmail), t[0] = r, t[1] = i);
        let a = i,
            o;
        t[2] !== n || t[3] !== a ? (o = e => (0, Y.jsx)(`button`, {
            ...e,
            type: `button`,
            "aria-label": a,
            className: `interactive-bg-secondary interactive-outline-secondary text-token-text-secondary hover:text-token-text-primary flex size-9 shrink-0 items-center justify-center rounded-full`,
            onClick: n,
            children: (0, Y.jsx)(P, {
                "aria-hidden": `true`,
                className: `icon-sm`
            })
        }), t[2] = n, t[3] = a, t[4] = o) : o = t[4];
        let s;
        return t[5] !== a || t[6] !== o ? (s = (0, Y.jsx)(xe, {
            content: a,
            side: `top-center`,
            children: o
        }), t[5] = a, t[6] = o, t[7] = s) : s = t[7], s
    }
}));
export {
    tt as a, rt as i, St as n, nt as r, dt as t
};
//# sourceMappingURL=f53a4715-iji0063e06zy3w77.js.map