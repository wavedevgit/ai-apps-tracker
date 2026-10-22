const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/05175aed-nj9dtoyde2ouogjb.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-nxpmzchfjvwqts17.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-m08q51xmfe7gjq3d.js", "assets/30901919-lgbmg5s09xld40kt.js", "assets/c470f5ab-hgik953cu5ujlhdm.js", "assets/0e5afe53-i4tqvmyg38miikw0.js", "assets/conversation-small-dtc7tvsx.css", "assets/3ed411a3-bir32qfoow57sy42.js", "assets/4e1f6607-chbk7lmwmwnre43n.js", "assets/bd043fcd-mv3bdgdmgh9329xw.js", "assets/23de51ef-eiapfmr3qxw7vspt.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    At as n,
    Da as r,
    IU as i,
    Int as a,
    J7 as o,
    Jt as s,
    L8 as c,
    LU as l,
    Oa as ee,
    Q7 as u,
    Rnt as d,
    Rz as f,
    a2 as p,
    cn as m,
    eY as h,
    eot as g,
    gF as _,
    grt as v,
    hn as y,
    hrt as b,
    k5 as x,
    k8 as S,
    lY as C,
    lrt as w,
    mrt as T,
    o2 as E,
    q5 as D,
    tot as te,
    uF as O,
    vF as ne,
    zz as re
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Bn as ie,
    Ln as ae,
    Nn as oe,
    Rn as k,
    Vn as se,
    cn as ce,
    ln as le,
    wn as ue,
    zn as de
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    FKn as fe,
    GFn as pe,
    IKn as me,
    JVn as he,
    KFn as ge,
    Mjt as _e,
    Njt as ve,
    Qjn as A,
    Xjn as ye,
    Zjn as be,
    qVn as xe,
    vdt as Se,
    ydt as Ce
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    Jy as j,
    Kv as we,
    Rl as Te,
    Yy as M,
    oi as N,
    qv as Ee,
    si as P,
    zl as De
} from "./30901919-lgbmg5s09xld40kt.js";
import {
    Mm as Oe,
    jm as ke
} from "./8b34dbc2-n194ohawifys3bko.js";
import {
    c as Ae,
    n as je
} from "./3ed411a3-bir32qfoow57sy42.js";
import {
    n as Me,
    t as F
} from "./bd043fcd-mv3bdgdmgh9329xw.js";

function I(e) {
    return typeof e == `object` && !!e
}

function L(e) {
    return Array.isArray(e) && e.every(e => typeof e == `string`)
}

function Ne(e, t) {
    return Object.keys(e).length === t.length && t.every(t => Object.prototype.hasOwnProperty.call(e, t))
}

function R(e, t) {
    if (typeof e != `string` || !B(e, Ue)) return !1;
    let n = We.exec(e);
    if (z(e) || n == null || n[1].includes(`@`)) return !1;
    try {
        let n = new URL(e);
        return t.has(n.protocol) && n.username.length === 0 && n.password.length === 0
    } catch {
        return !1
    }
}

function z(e) {
    if (U.test(e)) return !0;
    for (let t = 0; t < e.length; t += 1) {
        let n = e.charCodeAt(t);
        if (n <= 31 || n >= 127 && n <= 159) return !0
    }
    return !1
}

function B(e, t) {
    return e.length <= t && V(e) <= t
}

function V(e) {
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
        return B(JSON.stringify(e), t)
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
    if (!I(e) || !Ne(e, [`fragment`, `links`]) && !Ne(e, [`fragment`, `links`, `images`]) || typeof e.fragment != `string` || !B(e.fragment, Ve) || e.fragment.trim().length === 0 || !Array.isArray(e.links) || e.links.length > H || Object.hasOwn(e, `images`) && (!Array.isArray(e.images) || e.images.length > He)) return;
    let t = [];
    for (let [n, r] of e.links.entries()) {
        if (!I(r) || !Ne(r, [`token`, `url`]) || r.token !== `l${n}` || !R(r.url, Ge)) return;
        t.push({
            token: r.token,
            url: r.url
        })
    }
    if (!Fe(e.fragment, t)) return;
    let n = [],
        r = Array.isArray(e.images) ? e.images : [];
    for (let [e, t] of r.entries()) {
        if (!I(t) || !Ne(t, [`token`, `url`]) || t.token !== `i${e}` || !R(t.url, Ke)) return;
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
    let r = await o.safePost(ze, {
        requestBody: {
            browser_detail: e,
            source: t
        },
        signal: n
    });
    if (!I(r) || typeof r.sender != `string` || !L(r.to) || !L(r.cc) || !L(r.bcc) || typeof r.subject != `string` || typeof r.body != `string`) throw Error(`Email detail response was malformed.`);
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
    u(), ze = `/aip/connectors/email/read_email_detail`, Be = 768 * 1024, Ve = 256 * 1024, H = 256, He = 256, Ue = 2048, We = /^https?:\/\/([^/?#]+)/i, U = /\s/, Ge = new Set([`http:`, `https:`]), Ke = new Set([`https:`])
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
        i = await o.safePost(Xe, {
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
        u(), Xe = `/aip/connectors/email/prepare_reply`
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
        E(), Me(), G = ie(), le(), it = p(() => ce(() => import(`./05175aed-nj9dtoyde2ouogjb.js`).then(e => e.EmailExpanded), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])), {
            loading: () => (0, G.jsx)(`div`, {
                className: `h-[300px] px-4 pt-3`,
                children: (0, G.jsx)(F, {})
            })
        })
    }));

function ot(e) {
    a.logStructuredEvent(`ChatgptEmailPreviewAction`, {
        action: e,
        surface: be.CHATGPT_EMAIL_PREVIEW_SURFACE_TYPE_INLINE
    })
}

function st(e, t) {
    x(() => {
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
    return x(() => {
        _t.set(e, e => e[t] ? e : (n = !0, {
            ...e,
            [t]: !0
        }))
    }), n
}

function lt(e, t) {
    x(() => {
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
            subjectId: ee,
            onAvatarError: u
        } = e,
        d = de(),
        f, p, m, h, g, _, v;
    if (t[0] !== n || t[1] !== d || t[2] !== u || t[3] !== a || t[4] !== o || t[5] !== c || t[6] !== l) {
        ({
            email: m,
            name: g
        } = q(o)), h = m == null ? null : ` <${m}>`;
        let e;
        t[14] !== d || t[15] !== l ? (e = d.formatMessage(Q.collapseEmail, {
            subject: l
        }), t[14] = d, t[15] = l, t[16] = e) : e = t[16], f = `${g}: ${e}`;
        let r;
        if (t[17] !== d || t[18] !== a) {
            let e = a == null ? null : new Date(a);
            r = e != null && !Number.isNaN(e.getTime()) ? d.formatDate(e, {
                day: `numeric`,
                month: `short`
            }) : null, t[17] = d, t[18] = a, t[19] = r
        } else r = t[19];
        p = r, _ = `border-token-border-default bg-token-bg-tertiary text-token-text-secondary flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-full border text-sm font-medium`, v = c && n != null ? (0, Y.jsx)(`img`, {
            src: n,
            alt: ``,
            className: `h-full w-full object-cover`,
            onError: u
        }) : K(g), t[0] = n, t[1] = d, t[2] = u, t[3] = a, t[4] = o, t[5] = c, t[6] = l, t[7] = f, t[8] = p, t[9] = m, t[10] = h, t[11] = g, t[12] = _, t[13] = v
    } else f = t[7], p = t[8], m = t[9], h = t[10], g = t[11], _ = t[12], v = t[13];
    let y;
    t[20] !== _ || t[21] !== v ? (y = (0, Y.jsx)(`span`, {
        className: _,
        children: v
    }), t[20] = _, t[21] = v, t[22] = y) : y = t[22];
    let b = m == null || !s,
        x;
    t[23] !== f || t[24] !== r || t[25] !== i || t[26] !== m || t[27] !== h || t[28] !== g || t[29] !== s ? (x = e => m != null && i != null ? (0, Y.jsxs)(`button`, {
        ...e,
        type: `button`,
        "aria-label": r ? f : m,
        className: `pointer-events-auto block min-w-0 truncate rounded-sm text-start focus-visible:outline-2 focus-visible:outline-offset-2`,
        onClick: i,
        children: [g, (0, Y.jsx)(`bdi`, {
            "aria-hidden": `true`,
            dir: `ltr`,
            hidden: !r,
            children: h
        })]
    }) : (0, Y.jsx)(`span`, {
        ...e,
        "aria-label": m ?? g,
        className: m == null || !s ? `block min-w-0 truncate` : `pointer-events-auto block min-w-0 truncate rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2`,
        tabIndex: m == null || !s ? void 0 : 0,
        children: g
    }), t[23] = f, t[24] = r, t[25] = i, t[26] = m, t[27] = h, t[28] = g, t[29] = s, t[30] = x) : x = t[30];
    let S;
    t[31] !== m || t[32] !== b || t[33] !== x ? (S = (0, Y.jsx)(_e, {
        disabled: b,
        content: m,
        side: `top-center`,
        children: x
    }), t[31] = m, t[32] = b, t[33] = x, t[34] = S) : S = t[34];
    let C;
    t[35] !== a || t[36] !== p ? (C = p != null && (0, Y.jsxs)(Y.Fragment, {
        children: [(0, Y.jsx)(`span`, {
            "aria-hidden": `true`,
            children: $
        }), (0, Y.jsx)(`time`, {
            className: `shrink-0`,
            dateTime: a ?? void 0,
            children: p
        })]
    }), t[35] = a, t[36] = p, t[37] = C) : C = t[37];
    let w;
    t[38] !== S || t[39] !== C ? (w = (0, Y.jsxs)(`span`, {
        className: `text-token-text-tertiary flex min-w-0 items-center gap-1 text-sm leading-5`,
        children: [S, C]
    }), t[38] = S, t[39] = C, t[40] = w) : w = t[40];
    let T;
    t[41] !== l || t[42] !== ee ? (T = (0, Y.jsx)(`span`, {
        id: ee,
        className: `text-token-text-primary line-clamp-2 text-base leading-6 break-words`,
        children: l
    }), t[41] = l, t[42] = ee, t[43] = T) : T = t[43];
    let E;
    t[44] !== w || t[45] !== T ? (E = (0, Y.jsxs)(`span`, {
        className: `min-w-0 flex-1`,
        children: [w, T]
    }), t[44] = w, t[45] = T, t[46] = E) : E = t[46];
    let D;
    return t[47] !== E || t[48] !== y ? (D = (0, Y.jsxs)(Y.Fragment, {
        children: [y, E]
    }), t[47] = E, t[48] = y, t[49] = D) : D = t[49], D
}

function dt(e) {
    "use forget";
    let t = (0, ft.c)(111),
        {
            clientThreadId: n,
            contentReference: r
        } = e,
        a = de(),
        o = (0, J.useId)(),
        c = (0, J.useId)(),
        l = s(),
        u = (0, J.useRef)(null),
        d = (0, J.useRef)(null),
        f = (0, J.useRef)(!1),
        p = (0, J.useRef)(null),
        h = (0, J.useRef)(null),
        g = (0, J.useRef)(!1),
        b = (0, J.useRef)(null),
        [x, S] = (0, J.useState)(null),
        [w, E] = (0, J.useState)(),
        [O, ne] = (0, J.useState)(!1),
        [re, ie] = (0, J.useState)(null),
        ae;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (ae = {
        status: `idle`
    }, t[0] = ae) : ae = t[0];
    let [k, se] = (0, J.useState)(ae), {
        sender: ce,
        subject: le,
        url: ue
    } = r.data, pe = W(r.data.avatar_url) ? r.data.avatar_url : void 0, me;
    t[1] !== r.data.received_at || t[2] !== k ? (me = W(r.data.received_at) ? r.data.received_at : k.status === `loaded` ? k.detail.emailTs : void 0, t[1] = r.data.received_at, t[2] = k, t[3] = me) : me = t[3];
    let he = me,
        _e = ee(),
        ve = C(n),
        A = Ae(ve, pe ?? void 0),
        be = Ae(ve, ue),
        Se;
    t[4] === r.data ? Se = t[5] : (Se = et(r.data), t[4] = r.data, t[5] = Se);
    let j = Se,
        we;
    t[6] === n ? we = t[7] : (we = n == null ? null : _(n), t[6] = n, t[7] = we);
    let M = we,
        N = j == null ? null : `${j.source.type}:${j.source.message_id}`,
        Ee;
    t[8] !== M || t[9] !== N ? (Ee = () => M != null && N != null ? gt(M)[N] ?? !1 : !1, t[8] = M, t[9] = N, t[10] = Ee) : Ee = t[10];
    let P = D(Ee),
        De;
    t[11] !== M || t[12] !== N ? (De = () => M != null && N != null ? _t(M)[N] ?? !1 : !1, t[11] = M, t[12] = N, t[13] = De) : De = t[13];
    let ke = D(De),
        je;
    t[14] === M ? je = t[15] : (je = () => M != null && xe(M) === !0, t[14] = M, t[15] = je);
    let Me = D(je),
        F = j != null && !_e,
        I;
    t[16] !== a || t[17] !== le ? (I = W(le) ? le : a.formatMessage(Q.noSubject), t[16] = a, t[17] = le, t[18] = I) : I = t[18];
    let L = I,
        Ne = A != null && A !== x,
        R;
    t[19] === F ? R = t[20] : (R = F ? () => p.current?.click() : void 0, t[19] = F, t[20] = R);
    let z;
    t[21] === A ? z = t[22] : (z = () => S(A ?? null), t[21] = A, t[22] = z);
    let B;
    t[23] !== O || t[24] !== he || t[25] !== A || t[26] !== ce || t[27] !== Ne || t[28] !== L || t[29] !== c || t[30] !== z || t[31] !== R ? (B = (0, Y.jsx)(ut, {
        avatarUrl: A,
        isExpanded: O,
        onSenderActivate: R,
        receivedAt: he,
        sender: ce,
        shouldEnableSenderInteraction: !0,
        shouldShowAvatar: Ne,
        subject: L,
        subjectId: c,
        onAvatarError: z
    }), t[23] = O, t[24] = he, t[25] = A, t[26] = ce, t[27] = Ne, t[28] = L, t[29] = c, t[30] = z, t[31] = R, t[32] = B) : B = t[32];
    let V = B,
        Pe, Fe;
    t[33] === Symbol.for(`react.memo_cache_sentinel`) ? (Pe = () => () => {
        u.current?.abort(), d.current?.abort(), b.current?.abort()
    }, Fe = [], t[33] = Pe, t[34] = Fe) : (Pe = t[33], Fe = t[34]), (0, J.useEffect)(Pe, Fe);
    let Ie, Le;
    t[35] === F ? (Ie = t[36], Le = t[37]) : (Ie = () => {
        !F || f.current || (f.current = !0, v(`chatgpt_email_preview_shown`))
    }, Le = [F], t[35] = F, t[36] = Ie, t[37] = Le), (0, J.useEffect)(Ie, Le);
    let ze, Be;
    t[38] === O ? (ze = t[39], Be = t[40]) : (ze = () => {
        if (O) {
            h.current?.focus({
                preventScroll: !0
            });
            return
        }
        g.current && (g.current = !1, p.current?.focus({
            preventScroll: !0
        }))
    }, Be = [O], t[38] = O, t[39] = ze, t[40] = Be), (0, J.useEffect)(ze, Be);
    let Ve;
    t[41] !== be || t[42] !== ue ? (Ve = () => {
        ge(ue, be)
    }, t[41] = be, t[42] = ue, t[43] = Ve) : Ve = t[43];
    let H = Ve,
        He;
    t[44] !== M || t[45] !== j || t[46] !== P || t[47] !== a || t[48] !== Me || t[49] !== N || t[50] !== l || t[51] !== L ? (He = async e => {
        if (M == null || j == null || N == null || P || Me || d.current != null || !ct(M, N)) return;
        let t = fe(e.currentTarget),
            n = new AbortController;
        d.current = n;
        let r;
        try {
            r = await Ye({
                signal: n.signal,
                source: j.source,
                subjectLabel: L
            })
        } catch (e) {
            let t = e;
            d.current === n && (d.current = null), lt(M, N), !n.signal.aborted && !te(t) && i().danger(a.formatMessage(Q.replyPreparationFailed), {
                toastId: `email_preview_reply_preparation_failed`
            });
            return
        }
        if (n.signal.aborted || d.current !== n) {
            d.current === n && (d.current = null), lt(M, N);
            return
        }
        d.current = null;
        let o = !1,
            s = () => {
                o || lt(M, N)
            };
        Oe({
            callsiteId: `request_completion.formatted_text.email_preview_widget.reply`,
            conversation: M,
            sourceEvent: e,
            ...r,
            callbacks: {
                onAfterOptimisticThreadUpdate: () => {
                    o = !0, st(M, N), t != null && requestAnimationFrame(() => {
                        Ce(t, !1), t.scrollTo({
                            top: t.scrollHeight,
                            behavior: l ? `instant` : `smooth`
                        })
                    })
                }
            }
        }).then(s, s)
    }, t[44] = M, t[45] = j, t[46] = P, t[47] = a, t[48] = Me, t[49] = N, t[50] = l, t[51] = L, t[52] = He) : He = t[52];
    let Ue = He;
    if (!F) {
        let e;
        t[53] === H ? e = t[54] : (e = (0, Y.jsx)(xt, {
            onClick: H
        }), t[53] = H, t[54] = e);
        let n;
        return t[55] !== V || t[56] !== e ? (n = (0, Y.jsxs)(`div`, {
            className: `border-token-border-heavy bg-token-bg-primary squircle my-4 w-full overflow-hidden rounded-[32px] border-[0.5px] flex items-center gap-3 px-4 py-3.5 text-start`,
            children: [V, e]
        }), t[55] = V, t[56] = e, t[57] = n) : n = t[57], n
    }
    let We;
    t[58] !== j || t[59] !== k.status ? (We = async () => {
        if ((b.current == null || b.current.signal.aborted) && (b.current = new AbortController, E(b.current.signal)), k.status === `loading` || k.status === `loaded`) return;
        let e = new AbortController;
        u.current = e, ot(ye.CHATGPT_EMAIL_PREVIEW_ACTION_TYPE_DETAIL_FETCH_STARTED);
        try {
            let t = T(pt),
                n = t.get(mt, !1),
                r = t.get(ht, !1);
            se({
                status: `loading`,
                browserDetail: n
            });
            let i = await Re({
                ...j,
                browserDetail: n,
                signal: e.signal
            });
            if (e.signal.aborted) return;
            u.current = null, ot(ye.CHATGPT_EMAIL_PREVIEW_ACTION_TYPE_DETAIL_FETCH_SUCCEEDED), se({
                status: `loaded`,
                detail: i,
                canLoadImages: r
            })
        } catch {
            if (e.signal.aborted) return;
            u.current = null, ot(ye.CHATGPT_EMAIL_PREVIEW_ACTION_TYPE_DETAIL_FETCH_FAILED), se({
                status: `error`
            })
        }
    }, t[58] = j, t[59] = k.status, t[60] = We) : We = t[60];
    let U = We,
        Ge;
    t[61] === U ? Ge = t[62] : (Ge = () => {
        ot(ye.CHATGPT_EMAIL_PREVIEW_ACTION_TYPE_DETAIL_OPENED), ne(!0), U()
    }, t[61] = U, t[62] = Ge);
    let Ke = Ge,
        qe;
    t[63] === U ? qe = t[64] : (qe = () => {
        ot(ye.CHATGPT_EMAIL_PREVIEW_ACTION_TYPE_DETAIL_RETRY_CLICKED), U()
    }, t[63] = U, t[64] = qe);
    let Je = qe,
        Xe;
    t[65] === k ? Xe = t[66] : (Xe = k.status === `idle` ? {
        status: `loading`
    } : k, t[65] = k, t[66] = Xe);
    let Ze = Xe,
        Qe = Ze.status === `loaded` && Ze.detail.htmlPreview != null,
        $e = k.status !== `loading` || !k.browserDetail,
        tt;
    t[67] === Symbol.for(`react.memo_cache_sentinel`) ? (tt = () => {
        b.current?.abort(), b.current = null, g.current = !0, ne(!1)
    }, t[67] = tt) : tt = t[67];
    let nt = tt,
        rt = `border-token-border-heavy bg-token-bg-primary squircle my-4 w-full overflow-hidden rounded-[32px] border-[0.5px] email-preview-card group relative motion-safe:transition-shadow ${O?vt:yt}`,
        G;
    t[68] !== a || t[69] !== O || t[70] !== L ? (G = a.formatMessage(O ? Q.collapseEmail : Q.expandEmail, {
        subject: L
    }), t[68] = a, t[69] = O, t[70] = L, t[71] = G) : G = t[71];
    let at = O ? nt : Ke,
        K;
    t[72] !== o || t[73] !== O || t[74] !== G || t[75] !== at ? (K = (0, Y.jsx)(`button`, {
        ref: p,
        type: `button`,
        "aria-controls": o,
        "aria-expanded": O,
        "aria-label": G,
        className: `interactive-outline-secondary absolute inset-0 z-0 w-full rounded-[32px] text-start`,
        onClick: at
    }), t[72] = o, t[73] = O, t[74] = G, t[75] = at, t[76] = K) : K = t[76];
    let q;
    t[77] === V ? q = t[78] : (q = (0, Y.jsx)(`div`, {
        className: `pointer-events-none relative z-1 flex min-w-0 flex-1 items-center gap-3`,
        children: V
    }), t[77] = V, t[78] = q);
    let dt = !Me,
        X;
    t[79] !== P || t[80] !== ke || t[81] !== Ue || t[82] !== dt ? (X = (0, Y.jsx)(`div`, {
        className: `relative z-1`,
        children: (0, Y.jsx)(bt, {
            hasStartedReply: P,
            isPreparingReply: ke,
            isReplyAvailable: dt,
            onReply: Ue
        })
    }), t[79] = P, t[80] = ke, t[81] = Ue, t[82] = dt, t[83] = X) : X = t[83];
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
    t[91] !== re || t[92] !== j || t[93] !== o || t[94] !== Ze || t[95] !== Qe || t[96] !== w || t[97] !== a || t[98] !== O || t[99] !== Je || t[100] !== l || t[101] !== $e || t[102] !== L || t[103] !== c ? (St = O && (0, Y.jsxs)(m.div, {
        className: `relative overflow-hidden`,
        initial: !l && {
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
        transition: l ? {
            duration: 0
        } : {
            type: `tween`,
            duration: .24,
            ease: `easeInOut`
        },
        children: [(0, Y.jsx)(`div`, {
            className: `border-token-border-light mx-4 border-t`
        }), (0, Y.jsx)(`div`, {
            ref: h,
            id: o,
            role: `region`,
            "aria-labelledby": c,
            tabIndex: -1,
            "data-testid": `email-expanded-panel`,
            className: `interactive-outline-secondary focus-visible:outline-offset-[-3px]!`,
            children: (0, Y.jsx)(it, {
                ...Ze,
                allowImages: re === j.source.message_id,
                onLoadImages: () => {
                    v(`chatgpt_web_email_preview_load_images_clicked`), ie(j.source.message_id)
                },
                onRetry: Je,
                sessionSignal: w
            })
        }), $e && (0, Y.jsxs)(`button`, {
            type: `button`,
            "aria-controls": o,
            "aria-expanded": `true`,
            "aria-label": a.formatMessage(Q.collapseEmail, {
                subject: L
            }),
            className: Qe ? `interactive-button interactive-button-secondary interactive-outline-secondary bg-token-bg-primary/70 absolute inset-x-0 bottom-2 z-10 mx-auto flex h-10 w-fit items-center justify-center gap-2 rounded-full px-4 text-sm font-medium shadow-sm backdrop-blur-sm` : `interactive-bg-secondary interactive-outline-secondary flex h-10 w-full items-center justify-center gap-2 px-4 text-sm font-medium`,
            onClick: nt,
            children: [(0, Y.jsx)(Te, {
                "aria-hidden": `true`,
                className: `icon`
            }), (0, Y.jsx)(oe, {
                ...Q.collapse
            })]
        })]
    }, `email-detail`), t[91] = re, t[92] = j, t[93] = o, t[94] = Ze, t[95] = Qe, t[96] = w, t[97] = a, t[98] = O, t[99] = Je, t[100] = l, t[101] = $e, t[102] = L, t[103] = c, t[104] = St) : St = t[104];
    let Ct;
    t[105] === St ? Ct = t[106] : (Ct = (0, Y.jsx)(y, {
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
    ft = ue(), re(), ke(), ne(), he(), Ee(), M(), De(), P(), ve(), pe(), je(), me(), S(), h(), Se(), l(), d(), r(), g(), b(), A(), n(), J = t(se()), k(), qe(), Ze(), rt(), at(), Y = ie(), pt = `4200284407`, mt = `is_web_html_enabled`, ht = `is_web_html_images_enabled`, X = `is_web_structured_reply_enabled`, Z = `3062209644`, gt = O(() => c({})), _t = O(() => c({})), Q = ae({
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
            o = de(),
            s;
        t[0] !== n || t[1] !== o ? (s = o.formatMessage(n ? Q.replyStarted : Q.reply), t[0] = n, t[1] = o, t[2] = s) : s = t[2];
        let c = s,
            l;
        t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (l = w(Z) && T(pt).get(X, !1), t[3] = l) : l = t[3];
        let ee = l,
            u;
        t[4] !== n || t[5] !== r || t[6] !== i || t[7] !== a || t[8] !== c ? (u = i && ee && (0, Y.jsxs)(`button`, {
            type: `button`,
            "aria-label": c,
            "aria-busy": r || void 0,
            disabled: r || n,
            onClick: a,
            className: `interactive-button interactive-button-secondary flex h-11 shrink-0 items-center justify-center gap-2 rounded-full ${n?`w-11 px-0`:`px-4`}`,
            children: [r ? (0, Y.jsx)(f, {
                className: `icon shrink-0`
            }) : n ? (0, Y.jsx)(j, {
                "aria-hidden": `true`,
                className: `icon shrink-0`
            }) : (0, Y.jsx)(N, {
                "aria-hidden": `true`,
                className: `icon shrink-0`
            }), !n && (0, Y.jsx)(`span`, {
                className: `max-w-12 shrink-0 overflow-hidden whitespace-nowrap`,
                children: (0, Y.jsx)(oe, {
                    ...Q.reply
                })
            })]
        }, `reply`), t[4] = n, t[5] = r, t[6] = i, t[7] = a, t[8] = c, t[9] = u) : u = t[9];
        let d;
        return t[10] === u ? d = t[11] : (d = (0, Y.jsx)(`div`, {
            className: `flex shrink-0 items-center gap-2`,
            children: u
        }), t[10] = u, t[11] = d), d
    }, xt = e => {
        "use forget";
        let t = (0, ft.c)(8),
            {
                onClick: n
            } = e,
            r = de(),
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
            children: (0, Y.jsx)(we, {
                "aria-hidden": `true`,
                className: `icon-sm`
            })
        }), t[2] = n, t[3] = a, t[4] = o) : o = t[4];
        let s;
        return t[5] !== a || t[6] !== o ? (s = (0, Y.jsx)(_e, {
            content: a,
            side: `top-center`,
            children: o
        }), t[5] = a, t[6] = o, t[7] = s) : s = t[7], s
    }
}));
export {
    tt as a, rt as i, St as n, nt as r, dt as t
};
//# sourceMappingURL=f53a4715-kenkj9mffh4lx603.js.map