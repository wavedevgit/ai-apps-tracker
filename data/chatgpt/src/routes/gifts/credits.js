import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $tt as n,
    AT as r,
    Btt as i,
    C1 as a,
    Hn as o,
    Htt as s,
    J2 as c,
    L3 as l,
    Lrt as u,
    Nrt as d,
    Qit as f,
    Qtt as p,
    S1 as m,
    Un as h,
    Y2 as g,
    a7 as _,
    dz as v,
    ent as ee,
    fU as te,
    fz as y,
    iat as b,
    iit as x,
    iw as ne,
    kT as S,
    l7 as C,
    ow as w,
    pU as re,
    rot as ie,
    sit as ae,
    u1 as T,
    v1 as oe,
    vN as E,
    yN as D,
    z3 as se
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as ce,
    Bn as O,
    N as le,
    Nn as k,
    O as ue,
    Pt as de,
    Rn as fe,
    Ut as A,
    Vn as j,
    jt as pe,
    s as me,
    wn as M,
    zn as he
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $nn as ge,
    Bst as N,
    F8 as _e,
    FBn as ve,
    Frt as ye,
    IBn as be,
    Irt as xe,
    Kcn as Se,
    Kon as Ce,
    LBn as we,
    P8 as Te,
    PBn as Ee,
    Xnn as De,
    Yrn as Oe,
    Znn as ke,
    bsn as Ae,
    cdn as je,
    hn as Me,
    iin as Ne,
    oon as Pe,
    qcn as Fe,
    qon as Ie,
    sdn as Le,
    tin as Re,
    xsn as ze,
    zst as Be
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    FS as P,
    Fc as Ve,
    IS as He,
    Pc as Ue,
    bf as We,
    yf as Ge
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    Ao as Ke,
    Bm as qe,
    Dx as Je,
    Fh as Ye,
    Gh as Xe,
    Hh as Ze,
    Ih as Qe,
    Kh as $e,
    Lh as et,
    Nh as tt,
    Ph as nt,
    Rh as rt,
    Rm as it,
    Tx as at,
    ko as ot,
    qh as st,
    zh as ct
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    n as lt,
    t as F
} from "./f5cccfb7-ck8j8yf0nbpeo5r3.js";
import {
    n as ut,
    t as dt
} from "./5d04b0af-hocxbrtcuxjbwpxj.js";
import {
    t as ft
} from "./ddbd830d-e0nk0uwm49x0ei6k.js";
import {
    t as pt
} from "./ddbd830d-kw025npvxbjjbpvg.js";
import {
    i as mt,
    n as ht,
    r as gt,
    t as _t
} from "./cea3409c-hrb41sti5ky5pvnr.js";

function vt(e) {
    "use forget";
    let t = (0, xt.c)(10),
        {
            isOpen: n,
            onGoBack: r
        } = e,
        i = he(),
        a;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, St.jsx)(`span`, {
        className: `block text-sm leading-5`,
        children: (0, St.jsx)(k, {
            ...F.unsupportedCurrencyDescription
        })
    }), t[0] = a) : a = t[0];
    let o;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, St.jsx)(k, {
        ...F.goBack
    }), t[1] = o) : o = t[1];
    let s;
    t[2] === r ? s = t[3] : (s = (0, St.jsx)(S, {
        className: `rounded-full`,
        color: `primary`,
        onClick: r,
        size: `large`,
        type: `button`,
        children: o
    }), t[2] = r, t[3] = s);
    let c;
    t[4] === i ? c = t[5] : (c = i.formatMessage(F.unsupportedCurrencyTitle), t[4] = i, t[5] = c);
    let l;
    return t[6] !== n || t[7] !== s || t[8] !== c ? (l = (0, St.jsx)(ne, {
        className: `max-w-[480px]`,
        description: a,
        isOpen: n,
        onClose: bt,
        onEscapeKeyDown: yt,
        primaryButton: s,
        shouldIgnoreClickOutside: !0,
        showCloseButton: !1,
        size: `custom`,
        testId: `modal-gift-credits-currency-unsupported`,
        title: c
    }), t[6] = n, t[7] = s, t[8] = c, t[9] = l) : l = t[9], l
}

function yt(e) {
    return e.preventDefault()
}

function bt() {}
var xt, St, Ct = e((() => {
    xt = M(), r(), w(), fe(), lt(), St = O()
}));

function wt(e) {
    try {
        nt(e)
    } catch {}
}

function Tt(e) {
    let t = typeof e == `object` && e ? e.giftCheckoutAttemptKind : void 0;
    return t === `new` || t === `resume` || t === `replace` ? t : `resume`
}

function Et(e) {
    let t = e.trim();
    return t.length > 0 ? t : null
}
async function Dt({
    amount: e,
    billingDetails: t,
    presentation: n
}) {
    let r = await _.safePost(`/gift-credits/checkout`, {
        requestBody: {
            amount: e,
            billing_details: t,
            presentation: n
        }
    });
    if (r.status !== `payment_pending`) throw Error(`New gift credit checkout was not payment pending`);
    return r
}
async function Ot(e) {
    return await _.safeGet(`/gift-credits/{gift_id}`, {
        parameters: {
            path: {
                gift_id: e
            }
        }
    })
}
async function kt(e, t) {
    let n = await Ot(t),
        r = e.getQueryData([`gift-credit`, t]);
    return (n.status === `payment_pending` || n.status === `active`) && n.presentation == null && r?.presentation != null ? {
        ...n,
        presentation: {
            ...r.presentation,
            email_status: null,
            sender_confirmation_email_status: `pending`
        }
    } : n
}

function At(e) {
    return e?.status === `active` ? e.presentation?.email_status ?? null : null
}

function jt(e) {
    "use forget";
    let t = (0, Xt.c)(6),
        {
            onHomeClick: n
        } = e,
        r = he(),
        i;
    t[0] === r ? i = t[1] : (i = r.formatMessage(F.homeLinkLabel), t[0] = r, t[1] = i);
    let a;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, L.jsx)(Ue, {
        height: 32,
        width: 32
    }), t[2] = a) : a = t[2];
    let o;
    return t[3] !== n || t[4] !== i ? (o = (0, L.jsx)(S, {
        as: `link`,
        to: `/`,
        color: `ghost`,
        label: i,
        className: `absolute! start-6 top-6 h-8 min-h-0! w-fit border-none p-0`,
        onClick: n,
        children: a
    }), t[3] = n, t[4] = i, t[5] = o) : o = t[5], o
}

function Mt(e) {
    "use forget";
    let t = (0, Xt.c)(3),
        {
            children: n,
            headingRef: r
        } = e,
        i;
    return t[0] !== n || t[1] !== r ? (i = (0, L.jsx)(`h1`, {
        ref: r,
        className: `text-token-text-primary text-[28px] leading-9 font-semibold tracking-[-0.02em] focus:outline-none`,
        tabIndex: -1,
        children: n
    }), t[0] = n, t[1] = r, t[2] = i) : i = t[2], i
}

function Nt(e) {
    "use forget";
    let t = (0, Xt.c)(7),
        {
            children: n,
            label: r
        } = e,
        i = (0, I.useId)(),
        a;
    t[0] !== r || t[1] !== i ? (a = (0, L.jsx)(`div`, {
        id: i,
        className: `text-token-text-primary mb-2 text-sm font-semibold`,
        children: r
    }), t[0] = r, t[1] = i, t[2] = a) : a = t[2];
    let o;
    return t[3] !== n || t[4] !== i || t[5] !== a ? (o = (0, L.jsxs)(`div`, {
        "aria-labelledby": i,
        role: `group`,
        children: [a, n]
    }), t[3] = n, t[4] = i, t[5] = a, t[6] = o) : o = t[6], o
}

function Pt(e) {
    "use forget";
    let t = (0, Xt.c)(5),
        {
            className: n,
            creditCount: r
        } = e,
        i;
    t[0] === r ? i = t[1] : (i = r == null ? null : (0, L.jsx)(k, {
        ...F.creditQuantityValue,
        values: {
            creditCount: r
        }
    }), t[0] = r, t[1] = i);
    let a;
    return t[2] !== n || t[3] !== i ? (a = (0, L.jsx)(gt, {
        className: n,
        creditLabel: i,
        size: `large`
    }), t[2] = n, t[3] = i, t[4] = a) : a = t[4], a
}

function Ft(e) {
    "use forget";
    let t = (0, Xt.c)(7),
        {
            label: n,
            value: r
        } = e,
        i;
    t[0] === n ? i = t[1] : (i = (0, L.jsx)(`span`, {
        children: n
    }), t[0] = n, t[1] = i);
    let a;
    t[2] === r ? a = t[3] : (a = (0, L.jsx)(`span`, {
        children: r
    }), t[2] = r, t[3] = a);
    let o;
    return t[4] !== i || t[5] !== a ? (o = (0, L.jsxs)(`div`, {
        className: `flex items-center justify-between gap-4`,
        children: [i, a]
    }), t[4] = i, t[5] = a, t[6] = o) : o = t[6], o
}

function It(e) {
    "use forget";
    let t = (0, Xt.c)(45),
        {
            action: n,
            creditCount: r,
            currencyCode: i,
            estimatedSubtotal: a,
            estimatedTax: o,
            estimatedTotal: s,
            isPreviewLoading: c,
            priceStatus: l,
            previewStatus: u
        } = e,
        d = a ?? `—`,
        f = o,
        p = s;
    if (l === `loading`) {
        let e;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, L.jsx)(k, {
            ...F.loadingPrice
        }), t[0] = e) : e = t[0], d = e;
        let n;
        t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, L.jsx)(k, {
            ...F.loadingPrice
        }), t[1] = n) : n = t[1], f = n;
        let r;
        t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, L.jsx)(k, {
            ...F.loadingPrice
        }), t[2] = r) : r = t[2], p = r
    } else if (l === `error`) {
        let e;
        t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, L.jsx)(k, {
            ...F.priceUnavailable
        }), t[3] = e) : e = t[3], d = e;
        let n;
        t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, L.jsx)(k, {
            ...F.priceUnavailable
        }), t[4] = n) : n = t[4], f = n;
        let r;
        t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, L.jsx)(k, {
            ...F.priceUnavailable
        }), t[5] = r) : r = t[5], p = r
    } else if (u === `loading`) {
        let e;
        t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, L.jsx)(k, {
            ...F.loadingPrice
        }), t[6] = e) : e = t[6], f = e;
        let n;
        t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, L.jsx)(k, {
            ...F.loadingPrice
        }), t[7] = n) : n = t[7], p = n
    } else if (u === `unavailable`) {
        let e;
        t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, L.jsx)(k, {
            ...F.calculatedAtCheckout
        }), t[8] = e) : e = t[8], f = e;
        let n;
        t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, L.jsx)(k, {
            ...F.calculatedAtCheckout
        }), t[9] = n) : n = t[9], p = n
    }
    let m;
    t[10] === r ? m = t[11] : (m = (0, L.jsx)(Pt, {
        className: `aspect-[1.72/1] w-full rounded-2xl`,
        creditCount: r
    }), t[10] = r, t[11] = m);
    let h;
    t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (h = (0, L.jsx)(`h2`, {
        id: `gift-order-summary-title`,
        className: `text-token-text-primary text-base font-semibold`,
        children: (0, L.jsx)(k, {
            ...F.orderSummaryTitle
        })
    }), t[12] = h) : h = t[12];
    let g;
    t[13] === c ? g = t[14] : (g = c ? (0, L.jsx)(`span`, {
        role: `status`,
        children: (0, L.jsx)(v, {
            className: `icon-sm`
        })
    }) : null, t[13] = c, t[14] = g);
    let _;
    t[15] === g ? _ = t[16] : (_ = (0, L.jsxs)(`div`, {
        className: `flex items-center gap-2`,
        children: [h, g]
    }), t[15] = g, t[16] = _);
    let ee;
    t[17] === r ? ee = t[18] : (ee = (0, L.jsx)(k, {
        ...F.creditQuantityValue,
        values: {
            creditCount: r
        }
    }), t[17] = r, t[18] = ee);
    let te;
    t[19] !== d || t[20] !== ee ? (te = (0, L.jsx)(Ft, {
        label: ee,
        value: d
    }), t[19] = d, t[20] = ee, t[21] = te) : te = t[21];
    let y;
    t[22] === Symbol.for(`react.memo_cache_sentinel`) ? (y = (0, L.jsx)(k, {
        ...F.estimatedTax
    }), t[22] = y) : y = t[22];
    let b;
    t[23] === f ? b = t[24] : (b = (0, L.jsx)(Ft, {
        label: y,
        value: f
    }), t[23] = f, t[24] = b);
    let x;
    t[25] === Symbol.for(`react.memo_cache_sentinel`) ? (x = (0, L.jsx)(`span`, {
        className: `text-token-text-primary font-semibold`,
        children: (0, L.jsx)(k, {
            ...F.estimatedTotal
        })
    }), t[25] = x) : x = t[25];
    let ne;
    t[26] === p ? ne = t[27] : (ne = (0, L.jsx)(Ft, {
        label: x,
        value: (0, L.jsx)(`span`, {
            className: `text-token-text-primary font-semibold`,
            children: p
        })
    }), t[26] = p, t[27] = ne);
    let S;
    t[28] !== ne || t[29] !== te || t[30] !== b ? (S = (0, L.jsxs)(`div`, {
        className: `text-token-text-secondary mt-3 space-y-2 text-sm`,
        children: [te, b, ne]
    }), t[28] = ne, t[29] = te, t[30] = b, t[31] = S) : S = t[31];
    let C;
    t[32] === i ? C = t[33] : (C = i != null && (0, L.jsx)(`p`, {
        className: `border-token-border-light text-token-text-secondary mt-6 border-t pt-5 text-sm leading-6`,
        children: (0, L.jsx)(k, {
            ...F.purchaseDisclosure,
            values: {
                currencyCode: i
            }
        })
    }), t[32] = i, t[33] = C);
    let w;
    t[34] === n ? w = t[35] : (w = (0, L.jsx)(`div`, {
        className: `mt-6`,
        children: n
    }), t[34] = n, t[35] = w);
    let re;
    t[36] === Symbol.for(`react.memo_cache_sentinel`) ? (re = (0, L.jsx)(`p`, {
        className: `text-token-text-secondary mt-3 text-center text-xs`,
        children: (0, L.jsx)(k, {
            ...F.termsAcknowledgment,
            values: {
                terms: Lt
            }
        })
    }), t[36] = re) : re = t[36];
    let ie;
    t[37] !== S || t[38] !== C || t[39] !== w || t[40] !== _ ? (ie = (0, L.jsxs)(`div`, {
        className: `pt-7`,
        children: [_, S, C, w, re]
    }), t[37] = S, t[38] = C, t[39] = w, t[40] = _, t[41] = ie) : ie = t[41];
    let ae;
    return t[42] !== m || t[43] !== ie ? (ae = (0, L.jsxs)(`aside`, {
        "aria-labelledby": `gift-order-summary-title`,
        className: `border-token-border-light bg-token-bg-primary h-fit rounded-3xl border p-5 lg:mt-[66px]`,
        children: [m, ie]
    }), t[42] = m, t[43] = ie, t[44] = ae) : ae = t[44], ae
}

function Lt(e) {
    return (0, L.jsx)(`a`, {
        className: `underline underline-offset-2`,
        href: _t,
        rel: `noopener noreferrer`,
        target: `_blank`,
        children: e
    })
}

function Rt(e) {
    "use forget";
    let t = (0, Xt.c)(20),
        {
            creditCount: n,
            headingRef: r,
            isActionLoading: i,
            onAction: a,
            state: o
        } = e,
        s = o === `sent` ? F.emailSentTitle : o === `sending` ? F.emailSendingTitle : F.emailDeliveryDelayedTitle,
        c = o === `sent` ? F.emailSentSubtitle : o === `sending` ? F.emailSendingSubtitle : F.emailDeliveryDelayedSubtitle,
        l;
    t[0] === n ? l = t[1] : (l = (0, L.jsx)(Pt, {
        className: `mx-auto mb-8 aspect-[1.72/1] w-full max-w-[425px] rounded-2xl`,
        creditCount: n
    }), t[0] = n, t[1] = l);
    let u = o === `sending` ? `loading-shimmer-pure-text` : void 0,
        d;
    t[2] === s ? d = t[3] : (d = (0, L.jsx)(k, {
        ...s
    }), t[2] = s, t[3] = d);
    let f;
    t[4] !== u || t[5] !== d ? (f = (0, L.jsx)(`span`, {
        className: u,
        children: d
    }), t[4] = u, t[5] = d, t[6] = f) : f = t[6];
    let p;
    t[7] !== r || t[8] !== f ? (p = (0, L.jsx)(Mt, {
        headingRef: r,
        children: f
    }), t[7] = r, t[8] = f, t[9] = p) : p = t[9];
    let m;
    t[10] === c ? m = t[11] : (m = (0, L.jsx)(`p`, {
        className: `text-token-text-secondary mt-3 text-[15px] leading-6`,
        role: `status`,
        children: (0, L.jsx)(k, {
            ...c
        })
    }), t[10] = c, t[11] = m);
    let h;
    t[12] !== i || t[13] !== a ? (h = a == null ? null : (0, L.jsx)(S, {
        className: `mt-7 rounded-full`,
        color: `primary`,
        loading: i,
        onClick: a,
        size: `large`,
        type: `button`,
        children: (0, L.jsx)(k, {
            ...F.checkEmailDelivery
        })
    }), t[12] = i, t[13] = a, t[14] = h) : h = t[14];
    let g;
    return t[15] !== l || t[16] !== p || t[17] !== m || t[18] !== h ? (g = (0, L.jsx)(`main`, {
        className: `flex min-h-screen items-center justify-center px-5 py-20 sm:px-8`,
        children: (0, L.jsxs)(`section`, {
            className: `w-full max-w-[560px] text-center`,
            children: [l, p, m, h]
        })
    }), t[15] = l, t[16] = p, t[17] = m, t[18] = h, t[19] = g) : g = t[19], g
}

function zt(e) {
    "use forget";
    let t = (0, Xt.c)(112),
        {
            creditCount: n,
            deliveryMethod: r,
            entryPoint: i,
            giftId: a,
            headingRef: o,
            queryEnabled: s
        } = e,
        c = s === void 0 || s,
        l = he(),
        u = pe(),
        d = de(),
        f = le(),
        p = ie()?.user?.email,
        [m, h] = (0, I.useState)(!1),
        [g, _] = (0, I.useState)(!1),
        [v, ee] = (0, I.useState)(!1),
        [y, b] = (0, I.useState)(null),
        x = (0, I.useRef)(Date.now() + Qt),
        ne = (0, I.useRef)(0),
        C = (0, I.useRef)(!1),
        w;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (w = (e, t) => {
        b(n => n?.giftId === e && n.status === `sent` ? n : {
            giftId: e,
            status: t
        })
    }, t[0] = w) : w = t[0];
    let re = w,
        ae = (0, I.useRef)(null),
        T;
    t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (T = () => {
        x.current = Date.now() + Qt, ne.current += 1, ae.current = null, h(!1), _(!1), ee(!1), b(null);
        let e = window.setTimeout(() => {
            _(!0)
        }, Qt);
        return () => window.clearTimeout(e)
    }, t[1] = T) : T = t[1];
    let oe;
    t[2] === a ? oe = t[3] : (oe = [a], t[2] = a, t[3] = oe), (0, I.useEffect)(T, oe);
    let E;
    t[4] === a ? E = t[5] : (E = [`gift-credit`, a], t[4] = a, t[5] = E);
    let se;
    t[6] !== a || t[7] !== f ? (se = async () => await kt(f, a ?? ``), t[6] = a, t[7] = f, t[8] = se) : se = t[8];
    let ce = a != null && c,
        O;
    t[9] === g ? O = t[10] : (O = e => {
        let t = e.state.data,
            n = t?.status === `active` ? t.presentation?.sender_confirmation_email_status : null,
            r = t?.status === `active` && t.presentation?.recipient_email == null && (n === `pending` || n === `sending`);
        return g || Date.now() >= x.current || document.visibilityState !== `visible` || t?.status !== `payment_pending` && !r ? !1 : Zt
    }, t[9] = g, t[10] = O);
    let fe = !g,
        A;
    t[11] !== E || t[12] !== se || t[13] !== ce || t[14] !== O || t[15] !== fe ? (A = {
        queryKey: E,
        queryFn: se,
        enabled: ce,
        refetchInterval: O,
        refetchIntervalInBackground: !1,
        refetchOnWindowFocus: fe,
        retry: !1
    }, t[11] = E, t[12] = se, t[13] = ce, t[14] = O, t[15] = fe, t[16] = A) : A = t[16];
    let j = ue(A),
        me = j.data?.status ?? null,
        M = j.data?.status === `active` ? j.data : null,
        ge = j.refetch,
        N = M?.gift_id ?? null,
        _e;
    t[17] === j.data ? _e = t[18] : (_e = At(j.data), t[17] = j.data, t[18] = _e);
    let ve = _e,
        ye;
    t[19] !== ve || t[20] !== N ? (ye = () => {
        N == null || ve == null || re(N, ve)
    }, t[19] = ve, t[20] = N, t[21] = ye) : ye = t[21];
    let be;
    t[22] !== ve || t[23] !== N || t[24] !== j.dataUpdatedAt ? (be = [ve, N, j.dataUpdatedAt, re], t[22] = ve, t[23] = N, t[24] = j.dataUpdatedAt, t[25] = be) : be = t[25], (0, I.useEffect)(ye, be);
    let xe = y?.giftId === N ? y : null,
        Se = xe?.status === `sent` ? `sent` : ve ?? xe?.status ?? null,
        Ce = M != null && (M.presentation?.recipient_email != null || xe != null),
        we = M != null && M.presentation == null && r === `email` && !Ce,
        Te = Ce || we,
        Ee = Te ? `email` : M?.presentation == null ? r : `link`,
        De = Te && Se !== `sent`,
        Oe = Ce && Se != null && Se !== `failed`,
        ke, Ae;
    t[26] !== l || t[27] !== d || t[28] !== Oe ? (ke = () => {
        !Oe || C.current || (C.current = !0, te().success(l.formatMessage(F.emailSentTitle), {
            id: `gift-credits-email-delivery-sent`
        }), d(`/`, {
            replace: !0
        }))
    }, Ae = [l, d, Oe], t[26] = l, t[27] = d, t[28] = Oe, t[29] = ke, t[30] = Ae) : (ke = t[29], Ae = t[30]), D(ke, Ae);
    let je;
    t[31] !== v || t[32] !== De ? (je = () => {
        if (!De || v) return;
        let e = window.setTimeout(() => {
            ee(!0)
        }, R);
        return () => window.clearTimeout(e)
    }, t[31] = v, t[32] = De, t[33] = je) : je = t[33];
    let Me;
    t[34] !== v || t[35] !== a || t[36] !== De ? (Me = [v, a, De], t[34] = v, t[35] = a, t[36] = De, t[37] = Me) : Me = t[37], (0, I.useEffect)(je, Me);
    let Ne, Pe;
    t[38] !== N || t[39] !== v || t[40] !== we || t[41] !== De || t[42] !== ge ? (Ne = () => {
        if (!De || v) return;
        let e = !1,
            t, n = async () => {
                if (document.visibilityState === `visible`) {
                    let t = await ge({
                            cancelRefetch: !1
                        }),
                        n = At(t.data);
                    !e && N != null && t.isSuccess && t.data?.gift_id === N && n != null && re(N, n)
                }
                e || (t = window.setTimeout(() => void n(), en))
            };
        return we ? n() : t = window.setTimeout(() => void n(), en), () => {
            e = !0, t != null && window.clearTimeout(t)
        }
    }, Pe = [N, v, we, De, re, ge], t[38] = N, t[39] = v, t[40] = we, t[41] = De, t[42] = ge, t[43] = Ne, t[44] = Pe) : (Ne = t[43], Pe = t[44]), (0, I.useEffect)(Ne, Pe);
    let Fe, Ie;
    if (t[45] !== Ee || t[46] !== M || t[47] !== v || t[48] !== i || t[49] !== a || t[50] !== j.isError || t[51] !== we || t[52] !== u.search || t[53] !== g || t[54] !== me ? (Fe = () => {
            let e = a == null ? `failed` : M == null ? me === `unavailable` ? `unavailable` : j.isError ? `failed` : g ? `pending` : null : `succeeded`;
            e == null || new URLSearchParams(u.search).get(`checkout`) !== `success` || e === `succeeded` && we && !v || ae.current === e || (ae.current = e, wt({
                step: `gift_activation`,
                outcome: e,
                reason: e === `pending` ? `poll_timeout` : e === `failed` ? a == null ? `missing_gift_id` : `status_request_failed` : void 0,
                ...!we || !v ? {
                    deliveryMode: Ee
                } : {},
                ...i == null ? {} : {
                    entryPoint: i
                },
                giftId: a
            }))
        }, Ie = [Ee, M, v, i, a, j.isError, we, u.search, g, me], t[45] = Ee, t[46] = M, t[47] = v, t[48] = i, t[49] = a, t[50] = j.isError, t[51] = we, t[52] = u.search, t[53] = g, t[54] = me, t[55] = Fe, t[56] = Ie) : (Fe = t[55], Ie = t[56]), (0, I.useEffect)(Fe, Ie), M != null) {
        if (Te) {
            if (Oe) return null;
            let e = `sending`,
                r;
            if (Se === `sent` ? e = `sent` : v && (e = `delayed`), e === `delayed`) {
                let e;
                t[57] === ge ? e = t[58] : (e = () => {
                    ee(!1), ge({
                        cancelRefetch: !0
                    })
                }, t[57] = ge, t[58] = e), r = e
            }
            let i;
            return t[59] !== n || t[60] !== e || t[61] !== j.isFetching || t[62] !== o || t[63] !== r ? (i = (0, L.jsx)(Rt, {
                creditCount: n,
                headingRef: o,
                isActionLoading: j.isFetching,
                onAction: r,
                state: e
            }), t[59] = n, t[60] = e, t[61] = j.isFetching, t[62] = o, t[63] = r, t[64] = i) : i = t[64], i
        }
        let e = M.presentation?.sender_confirmation_email_status,
            r = e === `sent` ? F.giftReadySenderEmailSent : e === `pending` || e === `sending` ? F.giftReadySenderEmailPending : null,
            a;
        t[65] === n ? a = t[66] : (a = (0, L.jsx)(Pt, {
            className: `mx-auto mb-8 aspect-[1.72/1] w-full max-w-[425px] rounded-2xl`,
            creditCount: n
        }), t[65] = n, t[66] = a);
        let s;
        t[67] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, L.jsx)(k, {
            ...F.giftReadyTitle
        }), t[67] = s) : s = t[67];
        let c;
        t[68] === o ? c = t[69] : (c = (0, L.jsx)(Mt, {
            headingRef: o,
            children: s
        }), t[68] = o, t[69] = c);
        let u;
        t[70] === Symbol.for(`react.memo_cache_sentinel`) ? (u = (0, L.jsx)(`p`, {
            className: `text-token-text-secondary mt-3 text-[15px] leading-6`,
            children: (0, L.jsx)(k, {
                ...F.giftReadySubtitle
            })
        }), t[70] = u) : u = t[70];
        let d;
        t[71] === r ? d = t[72] : (d = r != null && p != null && (0, L.jsx)(`p`, {
            className: `text-token-text-secondary mt-1 text-[15px] leading-6`,
            children: (0, L.jsx)(k, {
                ...r,
                values: {
                    email: p
                }
            })
        }), t[71] = r, t[72] = d);
        let f;
        t[73] === Symbol.for(`react.memo_cache_sentinel`) ? (f = (0, L.jsx)(`span`, {
            className: `text-token-text-primary mb-2 block text-sm font-semibold`,
            children: (0, L.jsx)(k, {
                ...F.claimLinkLabel
            })
        }), t[73] = f) : f = t[73];
        let g;
        t[74] === l ? g = t[75] : (g = l.formatMessage(F.claimLinkLabel), t[74] = l, t[75] = g);
        let _;
        t[76] !== M.claim_url || t[77] !== g ? (_ = (0, L.jsxs)(`div`, {
            className: `mt-8 block text-start`,
            children: [f, (0, L.jsx)(Be, {
                ariaLabel: g,
                className: `bg-token-bg-primary w-full`,
                inputClassName: rn,
                name: `gift-claim-url`,
                readOnly: !0,
                value: M.claim_url
            })]
        }), t[76] = M.claim_url, t[77] = g, t[78] = _) : _ = t[78];
        let y;
        t[79] !== M.claim_url || t[80] !== M.gift_id || t[81] !== i || t[82] !== l ? (y = async () => {
            let e = ne.current += 1;
            h(!0);
            try {
                await navigator.clipboard.writeText(M.claim_url), ne.current === e && (te().success(l.formatMessage(F.linkCopied)), wt({
                    step: `link_delivery`,
                    outcome: `succeeded`,
                    deliveryMode: `link`,
                    ...i == null ? {} : {
                        entryPoint: i
                    },
                    giftId: M.gift_id
                }))
            } catch {
                ne.current === e && (te().danger(l.formatMessage(F.copyLinkError)), wt({
                    step: `link_delivery`,
                    outcome: `failed`,
                    reason: `clipboard_error`,
                    deliveryMode: `link`,
                    ...i == null ? {} : {
                        entryPoint: i
                    },
                    giftId: M.gift_id
                }))
            }
            ne.current === e && h(!1)
        }, t[79] = M.claim_url, t[80] = M.gift_id, t[81] = i, t[82] = l, t[83] = y) : y = t[83];
        let b;
        t[84] === Symbol.for(`react.memo_cache_sentinel`) ? (b = (0, L.jsx)(k, {
            ...F.copyLink
        }), t[84] = b) : b = t[84];
        let x;
        t[85] !== m || t[86] !== y ? (x = (0, L.jsx)(S, {
            className: `mt-5 rounded-full`,
            color: `primary`,
            disabled: m,
            onClick: y,
            size: `large`,
            type: `button`,
            children: b
        }), t[85] = m, t[86] = y, t[87] = x) : x = t[87];
        let C;
        return t[88] !== a || t[89] !== c || t[90] !== d || t[91] !== _ || t[92] !== x ? (C = (0, L.jsx)(`main`, {
            className: `flex min-h-screen items-center justify-center px-5 py-20 sm:px-8`,
            children: (0, L.jsxs)(`section`, {
                className: `w-full max-w-[560px] text-center`,
                children: [a, c, u, d, _, x]
            })
        }), t[88] = a, t[89] = c, t[90] = d, t[91] = _, t[92] = x, t[93] = C) : C = t[93], C
    }
    let Le = a != null && (j.isError || g || me === `unavailable`),
        Re = me === `unavailable`,
        ze = Re ? F.giftUnavailableTitle : Le ? F.activationDelayedTitle : F.activatingGiftTitle,
        P;
    t[94] === ze ? P = t[95] : (P = (0, L.jsx)(k, {
        ...ze
    }), t[94] = ze, t[95] = P);
    let Ve;
    t[96] !== o || t[97] !== P ? (Ve = (0, L.jsx)(Mt, {
        headingRef: o,
        children: P
    }), t[96] = o, t[97] = P, t[98] = Ve) : Ve = t[98];
    let He = j.isError || a == null ? `alert` : `status`,
        Ue = Re ? F.giftUnavailableSubtitle : a == null ? F.giftStatusErrorSubtitle : Le ? F.activationDelayedSubtitle : F.activatingGiftSubtitle,
        We;
    t[99] === Ue ? We = t[100] : (We = (0, L.jsx)(k, {
        ...Ue
    }), t[99] = Ue, t[100] = We);
    let Ge;
    t[101] !== He || t[102] !== We ? (Ge = (0, L.jsx)(`p`, {
        className: `text-token-text-secondary mt-3 text-[15px] leading-6`,
        role: He,
        children: We
    }), t[101] = He, t[102] = We, t[103] = Ge) : Ge = t[103];
    let Ke;
    t[104] !== j || t[105] !== Re || t[106] !== Le ? (Ke = Le && !Re && (0, L.jsx)(S, {
        className: `mt-7 rounded-full`,
        color: `primary`,
        loading: j.isFetching,
        onClick: () => void j.refetch(),
        size: `large`,
        type: `button`,
        children: (0, L.jsx)(k, {
            ...F.checkAgain
        })
    }), t[104] = j, t[105] = Re, t[106] = Le, t[107] = Ke) : Ke = t[107];
    let qe;
    return t[108] !== Ve || t[109] !== Ge || t[110] !== Ke ? (qe = (0, L.jsx)(`main`, {
        className: `flex min-h-screen items-center justify-center px-5 py-20 sm:px-8`,
        children: (0, L.jsxs)(`section`, {
            className: `w-full max-w-[520px] text-center`,
            children: [Ve, Ge, Ke]
        })
    }), t[108] = Ve, t[109] = Ge, t[110] = Ke, t[111] = qe) : qe = t[111], qe
}

function Bt(e) {
    "use forget";
    let t = (0, Xt.c)(6),
        {
            headingRef: n
        } = e,
        r;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, L.jsx)(k, {
        ...F.checkingGiftStatusTitle
    }), t[0] = r) : r = t[0];
    let i;
    t[1] === n ? i = t[2] : (i = (0, L.jsx)(Mt, {
        headingRef: n,
        children: r
    }), t[1] = n, t[2] = i);
    let a;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, L.jsx)(`p`, {
        className: `text-token-text-secondary mt-3 text-[15px] leading-6`,
        role: `status`,
        children: (0, L.jsx)(k, {
            ...F.checkingGiftStatusSubtitle
        })
    }), t[3] = a) : a = t[3];
    let o;
    return t[4] === i ? o = t[5] : (o = (0, L.jsx)(`main`, {
        className: `flex min-h-screen items-center justify-center px-5 py-20 sm:px-8`,
        children: (0, L.jsxs)(`section`, {
            className: `w-full max-w-[520px] text-center`,
            children: [i, a]
        })
    }), t[4] = i, t[5] = o), o
}

function Vt(e) {
    "use forget";
    let t = (0, Xt.c)(11),
        {
            headingRef: n,
            isRetrying: r,
            onRetry: i
        } = e,
        a;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (a = (0, L.jsx)(k, {
        ...F.accountLoadErrorTitle
    }), t[0] = a) : a = t[0];
    let o;
    t[1] === n ? o = t[2] : (o = (0, L.jsx)(Mt, {
        headingRef: n,
        children: a
    }), t[1] = n, t[2] = o);
    let s;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, L.jsx)(`p`, {
        className: `text-token-text-secondary mt-3 text-[15px] leading-6`,
        role: `alert`,
        children: (0, L.jsx)(k, {
            ...F.accountLoadErrorSubtitle
        })
    }), t[3] = s) : s = t[3];
    let c;
    t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, L.jsx)(k, {
        ...F.accountLoadRetry
    }), t[4] = c) : c = t[4];
    let l;
    t[5] !== r || t[6] !== i ? (l = (0, L.jsx)(S, {
        className: `mt-7 rounded-full`,
        color: `primary`,
        loading: r,
        onClick: i,
        size: `large`,
        type: `button`,
        children: c
    }), t[5] = r, t[6] = i, t[7] = l) : l = t[7];
    let u;
    return t[8] !== o || t[9] !== l ? (u = (0, L.jsx)(`main`, {
        className: `flex min-h-screen items-center justify-center px-5 py-20 sm:px-8`,
        children: (0, L.jsxs)(`section`, {
            className: `w-full max-w-[520px] text-center`,
            children: [o, s, l]
        })
    }), t[8] = o, t[9] = l, t[10] = u) : u = t[10], u
}

function Ht() {
    "use forget";
    let e = (0, Xt.c)(377),
        t = he(),
        r = pe(),
        i = de(),
        o = le(),
        s = a(),
        {
            data: l,
            isError: u,
            isFetching: d,
            isLoading: g,
            refetch: ee
        } = m(),
        {
            prepareCheckoutSession: y,
            navigateToCheckout: b
        } = Ne(),
        {
            country: x
        } = ge(),
        C;
    e[0] !== x || e[1] !== s ? (C = {
        country: x,
        currentAccount: s,
        location: Fe.GIFT_CREDITS_PURCHASE,
        pricingPlanIsTypeBusiness: !1,
        shouldUsePaidSubscriptionBillingCurrency: !0
    }, e[0] = x, e[1] = s, e[2] = C) : C = e[2];
    let w = ke(C),
        re = w?.currency,
        ie;
    e[3] !== x || e[4] !== re ? (ie = {
        countryCode: x,
        currency: re
    }, e[3] = x, e[4] = re, e[5] = ie) : ie = e[5];
    let ae = se(ie),
        T, E, D, ce, O, fe, A, j;
    if (e[6] !== r.search || e[7] !== r.state) {
        let t = new URLSearchParams(r.search);
        A = Ze(t), D = A ?? Fe.GIFT_CREDITS_PURCHASE, ce = t.get(`gift_id`), E = t.get(`checkout`);
        let n;
        e[16] === r.state ? n = e[17] : (n = Tt(r.state), e[16] = r.state, e[17] = n), T = n, fe = st(t.get(`credits`)), O = fe ?? 500, j = $e(t.get(`delivery`)), e[6] = r.search, e[7] = r.state, e[8] = T, e[9] = E, e[10] = D, e[11] = ce, e[12] = O, e[13] = fe, e[14] = A, e[15] = j
    } else T = e[8], E = e[9], D = e[10], ce = e[11], O = e[12], fe = e[13], A = e[14], j = e[15];
    let me = j,
        [M, N] = (0, I.useState)(String(O)),
        [_e, ve] = (0, I.useState)(me),
        [xe, Se] = (0, I.useState)(!1),
        [we, De] = (0, I.useState)(null),
        [Ae, je] = (0, I.useState)(null),
        [Me, Ie] = (0, I.useState)(null),
        [Re, Be] = (0, I.useState)(null),
        [P, Ve] = (0, I.useState)(ce),
        [Ue, We] = (0, I.useState)(ce == null ? null : O),
        [Ke, Je] = (0, I.useState)(null),
        [Xe, tt] = (0, I.useState)(!1),
        [nt, it] = (0, I.useState)(!1),
        [lt, ut] = (0, I.useState)(!1),
        pt;
    e[18] === Symbol.for(`react.memo_cache_sentinel`) ? (pt = {}, e[18] = pt) : pt = e[18];
    let [mt, ht] = (0, I.useState)(pt), [gt, _t] = (0, I.useState)(!1), yt = (0, I.useRef)(null), bt = (0, I.useRef)(!0), xt = (0, I.useRef)(!1), St = (0, I.useRef)(null), Ct = (0, I.useRef)(!1), Ot = (0, I.useRef)(null), At = (0, I.useRef)(!1), Pt = (0, I.useRef)(!1), Ft = P != null && E !== `success` && !Xe, Lt;
    e[19] === P ? Lt = e[20] : (Lt = [`gift-credit`, P], e[19] = P, e[20] = Lt);
    let Rt;
    e[21] !== P || e[22] !== o ? (Rt = async () => await kt(o, P ?? ``), e[21] = P, e[22] = o, e[23] = Rt) : Rt = e[23];
    let Ht;
    e[24] !== Ft || e[25] !== Lt || e[26] !== Rt ? (Ht = {
        queryKey: Lt,
        queryFn: Rt,
        enabled: Ft,
        refetchOnMount: `always`,
        refetchOnWindowFocus: `always`,
        retry: !1
    }, e[24] = Ft, e[25] = Lt, e[26] = Rt, e[27] = Ht) : Ht = e[27];
    let Zt = ue(Ht),
        Qt = Zt.refetch,
        en = Zt.data?.status ?? null,
        R = Zt.data?.presentation ?? null,
        an = Zt.errorUpdatedAt > Zt.dataUpdatedAt,
        on = Ft && (!Zt.isFetchedAfterMount || Zt.fetchStatus !== `idle`),
        z = on && !Zt.isError && !an,
        sn = P == null || !on && !Zt.isError && !an && en === `payment_pending`,
        B = E === `success` || Ft && (an || Zt.isError || en === `active` || en === `unavailable`),
        V = st(M),
        cn;
    e[28] === M ? cn = e[29] : (cn = /^\d+$/.test(M) ? Number(M) : 0, e[28] = M, e[29] = cn);
    let ln = cn,
        un = R?.recipient_email == null ? `link` : `email`,
        H = !xe && P != null && R != null ? un : _e,
        U = we ?? R?.recipient_name ?? ``,
        dn = Ae ?? R?.recipient_email ?? ``,
        W = Me ?? R?.sender_display_name ?? ``,
        G = Re ?? R?.message ?? ``,
        fn, K, pn, mn, hn;
    if (e[30] !== G || e[31] !== dn || e[32] !== U || e[33] !== W || e[34] !== H || e[35] !== lt) {
        K = dn.trim();
        let t;
        e[41] === U ? t = e[42] : (t = U.trim(), e[41] = U, e[42] = t), pn = t.length > tn;
        let n;
        e[43] === W ? n = e[44] : (n = W.trim(), e[43] = W, e[44] = n), mn = n.length > tn;
        let r;
        e[45] === G ? r = e[46] : (r = G.trim(), e[45] = G, e[46] = r), fn = r.length > nn, hn = H === `email` ? K.length === 0 ? F.recipientEmailRequired : h.test(K) ? lt ? F.recipientEmailIneligible : null : F.recipientEmailInvalid : null, e[30] = G, e[31] = dn, e[32] = U, e[33] = W, e[34] = H, e[35] = lt, e[36] = fn, e[37] = K, e[38] = pn, e[39] = mn, e[40] = hn
    } else fn = e[36], K = e[37], pn = e[38], mn = e[39], hn = e[40];
    let gn = hn,
        _n = H === `email` && mt.recipientName === !0 && pn,
        vn = gn != null && (mt.recipientEmail === !0 || lt),
        yn = H === `email` && mt.senderName === !0 && mn,
        bn = H === `email` && mt.personalMessage === !0 && fn,
        xn = H !== `email` || gn == null,
        Sn = xn && (H !== `email` || !pn && !mn && !fn),
        Cn;
    e[47] !== G || e[48] !== U || e[49] !== W || e[50] !== H || e[51] !== P || e[52] !== K || e[53] !== un || e[54] !== R?.message || e[55] !== R?.recipient_email || e[56] !== R?.recipient_name || e[57] !== R?.sender_display_name ? (Cn = P != null && (H !== un || H === `email` && (K !== (R?.recipient_email?.trim() ?? ``) || Et(U) !== Et(R?.recipient_name ?? ``) || Et(W) !== Et(R?.sender_display_name ?? ``) || Et(G) !== Et(R?.message ?? ``))), e[47] = G, e[48] = U, e[49] = W, e[50] = H, e[51] = P, e[52] = K, e[53] = un, e[54] = R?.message, e[55] = R?.recipient_email, e[56] = R?.recipient_name, e[57] = R?.sender_display_name, e[58] = Cn) : Cn = e[58];
    let wn = Cn,
        Tn;
    e[59] === s ? Tn = e[60] : (Tn = s?.isPersonalAccount() === !0 && !s.isDeactivated(), e[59] = s, e[60] = Tn);
    let En = Tn,
        Dn;
    e[61] === l?.accountItems ? Dn = e[62] : (Dn = l?.accountItems.find(Yt), e[61] = l?.accountItems, e[62] = Dn);
    let On = Dn,
        kn;
    e[63] === l ? kn = e[64] : (kn = l != null && dt(l.accountItems), e[63] = l, e[64] = kn);
    let An = kn,
        jn = En && !g && !B && !An,
        Mn;
    e[65] !== s || e[66] !== jn ? (Mn = ot({
        account: s,
        enabled: jn
    }), e[65] = s, e[66] = jn, e[67] = Mn) : Mn = e[67];
    let {
        data: Nn,
        isError: Pn,
        isFetching: Fn,
        isPending: In,
        refetch: Ln
    } = ue(Mn), q = Nn?.eligible === !0, Rn = jn && q && (sn || Xe), zn;
    e[68] === Rn ? zn = e[69] : (zn = () => {
        if (!Rn) return;
        let e = new AbortController;
        return ze(`chatgpt_gift_credit_purchase`, {
            signal: e.signal
        }), () => e.abort()
    }, e[68] = Rn, e[69] = zn);
    let Bn = s?.id,
        Vn;
    e[70] !== Rn || e[71] !== Bn ? (Vn = [Bn, Rn], e[70] = Rn, e[71] = Bn, e[72] = Vn) : Vn = e[72], (0, I.useEffect)(zn, Vn);
    let Hn = An || On == null,
        Un;
    e[73] !== s || e[74] !== An ? (Un = s != null && (!s.isPersonalAccount() || An), e[73] = s, e[74] = An, e[75] = Un) : Un = e[75];
    let J = Un,
        Y = g && !u || jn && In,
        X = s == null && (u || !g) || jn && Pn,
        Z = ae.data?.currencyConfig,
        Wn = V != null && Z != null ? qe({
            amountPerCredit: Z.amount_per_credit,
            creditQuantity: V,
            minorUnitExponent: Z.minor_unit_exponent
        }) : null,
        Gn = Wn != null && Z != null ? Pe({
            amountMinorUnits: Wn,
            currency: Z.symbol_code
        }) : null,
        Kn = ae.isError ? `error` : Z == null ? `loading` : `ready`,
        qn = s?.id,
        Jn = w?.country ?? null,
        Yn = w?.currency,
        Xn;
    e[76] !== qn || e[77] !== Jn || e[78] !== Yn || e[79] !== V ? (Xn = [`gift-credit-checkout-preview`, qn, V, Jn, Yn], e[76] = qn, e[77] = Jn, e[78] = Yn, e[79] = V, e[80] = Xn) : Xn = e[80];
    let Zn;
    e[81] !== w || e[82] !== V ? (Zn = async e => {
        let {
            signal: t
        } = e;
        if (V == null || w == null) throw Error(`Gift credit checkout preview is missing billing details`);
        return await _.safePost(`/gift-credits/checkout/preview`, {
            requestBody: {
                amount: V,
                billing_details: w
            },
            signal: be([t, Ee($t)])
        })
    }, e[81] = w, e[82] = V, e[83] = Zn) : Zn = e[83];
    let Qn = V != null && w != null && Kn === `ready` && En && q && !Y && !J && !B && !z && sn,
        $n;
    e[84] !== Xn || e[85] !== Zn || e[86] !== Qn ? ($n = {
        queryKey: Xn,
        queryFn: Zn,
        enabled: Qn,
        staleTime: 0,
        refetchOnMount: `always`,
        refetchOnWindowFocus: !1,
        retry: !1,
        retryOnMount: !0
    }, e[84] = Xn, e[85] = Zn, e[86] = Qn, e[87] = $n) : $n = e[87];
    let er = ue($n),
        tr = !B && !Y && !J && er.error instanceof f && (er.error.code === `currency_unsupported` || er.error.code === `gift_credit_currency_unsupported`),
        Q = er.data,
        nr;
    e[88] !== Q || e[89] !== Gn || e[90] !== t.locale ? (nr = Q == null ? Gn : Pe({
        amountMinorUnits: Q.subtotal_amount,
        currency: Q.currency,
        locale: t.locale
    }), e[88] = Q, e[89] = Gn, e[90] = t.locale, e[91] = nr) : nr = e[91];
    let rr = nr,
        ir;
    e[92] !== Q || e[93] !== t.locale ? (ir = Q?.tax_status === `estimated` && Q.tax_amount != null ? Pe({
        amountMinorUnits: Q.tax_amount,
        currency: Q.currency,
        locale: t.locale
    }) : null, e[92] = Q, e[93] = t.locale, e[94] = ir) : ir = e[94];
    let ar = ir,
        or;
    e[95] !== Q || e[96] !== t.locale ? (or = Q?.tax_status === `estimated` && Q.total_amount != null ? Pe({
        amountMinorUnits: Q.total_amount,
        currency: Q.currency,
        locale: t.locale
    }) : null, e[95] = Q, e[96] = t.locale, e[97] = or) : or = e[97];
    let sr = or,
        cr = er.isFetching ? `loading` : er.isError || Q?.tax_status === `unavailable` || Q != null && (ar == null || sr == null) ? `unavailable` : Q == null ? `loading` : `ready`,
        lr = w?.currency,
        ur = q && !J,
        dr;
    e[98] !== H || e[99] !== D || e[100] !== P || e[101] !== lr || e[102] !== ur || e[103] !== V ? (dr = {
        deliveryMode: H,
        giftId: P,
        creditQuantity: V,
        currency: lr,
        entryPoint: D,
        isPurchaseEligible: ur
    }, e[98] = H, e[99] = D, e[100] = P, e[101] = lr, e[102] = ur, e[103] = V, e[104] = dr) : dr = e[104];
    let $ = dr,
        fr;
    e[105] !== w?.currency || e[106] !== T || e[107] !== E || e[108] !== H || e[109] !== D || e[110] !== P || e[111] !== q || e[112] !== Y || e[113] !== J || e[114] !== V ? (fr = () => {
        if (E !== `cancelled`) {
            Ot.current = null;
            return
        }
        let e = `${P??`missing`}:${T}`;
        Y || Ot.current === e || (Ot.current = e, wt({
            step: `checkout`,
            outcome: `cancelled`,
            attemptKind: T,
            deliveryMode: H,
            giftId: P,
            creditQuantity: V,
            currency: w?.currency,
            entryPoint: D,
            isPurchaseEligible: q && !J
        }))
    }, e[105] = w?.currency, e[106] = T, e[107] = E, e[108] = H, e[109] = D, e[110] = P, e[111] = q, e[112] = Y, e[113] = J, e[114] = V, e[115] = fr) : fr = e[115];
    let pr = w?.currency,
        mr;
    e[116] !== T || e[117] !== E || e[118] !== H || e[119] !== D || e[120] !== P || e[121] !== q || e[122] !== Y || e[123] !== J || e[124] !== pr || e[125] !== V ? (mr = [pr, T, E, H, D, P, q, Y, J, V], e[116] = T, e[117] = E, e[118] = H, e[119] = D, e[120] = P, e[121] = q, e[122] = Y, e[123] = J, e[124] = pr, e[125] = V, e[126] = mr) : mr = e[126], (0, I.useEffect)(fr, mr);
    let hr;
    e[127] !== w?.currency || e[128] !== s || e[129] !== H || e[130] !== D || e[131] !== P || e[132] !== B || e[133] !== z || e[134] !== q || e[135] !== Y || e[136] !== J || e[137] !== X || e[138] !== V ? (hr = () => {
        if (Y || X || s == null || B || z || Ct.current) return;
        let e = {
            deliveryMode: H,
            giftId: P,
            creditQuantity: V,
            currency: w?.currency,
            entryPoint: D,
            isPurchaseEligible: q && !J
        };
        Ct.current = !0, wt({
            step: `purchase_page`,
            outcome: `shown`,
            attemptKind: P == null ? `new` : `resume`,
            ...e
        })
    }, e[127] = w?.currency, e[128] = s, e[129] = H, e[130] = D, e[131] = P, e[132] = B, e[133] = z, e[134] = q, e[135] = Y, e[136] = J, e[137] = X, e[138] = V, e[139] = hr) : hr = e[139];
    let gr = w?.currency,
        _r;
    e[140] !== s || e[141] !== H || e[142] !== D || e[143] !== P || e[144] !== B || e[145] !== z || e[146] !== q || e[147] !== Y || e[148] !== J || e[149] !== X || e[150] !== gr || e[151] !== V ? (_r = [gr, s, H, D, P, B, z, q, Y, J, X, V], e[140] = s, e[141] = H, e[142] = D, e[143] = P, e[144] = B, e[145] = z, e[146] = q, e[147] = Y, e[148] = J, e[149] = X, e[150] = gr, e[151] = V, e[152] = _r) : _r = e[152], (0, I.useEffect)(hr, _r);
    let vr;
    e[153] !== w?.currency || e[154] !== s || e[155] !== H || e[156] !== D || e[157] !== P || e[158] !== B || e[159] !== z || e[160] !== q || e[161] !== Y || e[162] !== Kn || e[163] !== J || e[164] !== X || e[165] !== V ? (vr = () => {
        if (Y || X || s == null || Kn !== `error` || B || z || At.current) return;
        let e = {
            deliveryMode: H,
            giftId: P,
            creditQuantity: V,
            currency: w?.currency,
            entryPoint: D,
            isPurchaseEligible: q && !J
        };
        At.current = !0, wt({
            step: `purchase_page`,
            outcome: `failed`,
            reason: `pricing_unavailable`,
            ...e
        })
    }, e[153] = w?.currency, e[154] = s, e[155] = H, e[156] = D, e[157] = P, e[158] = B, e[159] = z, e[160] = q, e[161] = Y, e[162] = Kn, e[163] = J, e[164] = X, e[165] = V, e[166] = vr) : vr = e[166];
    let yr = w?.currency,
        br;
    e[167] !== s || e[168] !== H || e[169] !== D || e[170] !== P || e[171] !== B || e[172] !== z || e[173] !== q || e[174] !== Y || e[175] !== Kn || e[176] !== J || e[177] !== X || e[178] !== yr || e[179] !== V ? (br = [yr, s, H, D, P, B, z, q, Y, Kn, J, X, V], e[167] = s, e[168] = H, e[169] = D, e[170] = P, e[171] = B, e[172] = z, e[173] = q, e[174] = Y, e[175] = Kn, e[176] = J, e[177] = X, e[178] = yr, e[179] = V, e[180] = br) : br = e[180], (0, I.useEffect)(vr, br);
    let xr;
    e[181] === Symbol.for(`react.memo_cache_sentinel`) ? (xr = () => {
        yt.current?.focus()
    }, e[181] = xr) : xr = e[181];
    let Sr;
    e[182] !== B || e[183] !== z || e[184] !== Y ? (Sr = [B, z, Y], e[182] = B, e[183] = z, e[184] = Y, e[185] = Sr) : Sr = e[185], (0, I.useEffect)(xr, Sr);
    let Cr, wr;
    e[186] !== Qt || e[187] !== Ft ? (Cr = () => {
        if (!Ft) return;
        let e = e => {
            e.persisted && Qt()
        };
        return window.addEventListener(`pageshow`, e), () => window.removeEventListener(`pageshow`, e)
    }, wr = [Qt, Ft], e[186] = Qt, e[187] = Ft, e[188] = Cr, e[189] = wr) : (Cr = e[188], wr = e[189]), (0, I.useEffect)(Cr, wr);
    let Tr, Er;
    e[190] === Symbol.for(`react.memo_cache_sentinel`) ? (Tr = () => (bt.current = !0, () => {
        bt.current = !1
    }), Er = [], e[190] = Tr, e[191] = Er) : (Tr = e[190], Er = e[191]), (0, I.useEffect)(Tr, Er);
    let Dr;
    e[192] !== t || e[193] !== On || e[194] !== $ || e[195] !== o ? (Dr = async () => {
        if (On != null) {
            _t(!0);
            try {
                let {
                    updatedAccount: e,
                    willRedirect: n
                } = await oe(o, On.id, t, te(), !0, window.location.href);
                if (!e && !n) {
                    _t(!1), wt({
                        step: `purchase_page`,
                        outcome: `failed`,
                        reason: `account_switch_failed`,
                        ...$
                    }), te().danger(t.formatMessage(F.accountSwitchError));
                    return
                }
                n || c(window.location.href)
            } catch {
                _t(!1), wt({
                    step: `purchase_page`,
                    outcome: `failed`,
                    reason: `account_switch_failed`,
                    ...$
                }), te().danger(t.formatMessage(F.accountSwitchError))
            }
        }
    }, e[192] = t, e[193] = On, e[194] = $, e[195] = o, e[196] = Dr) : Dr = e[196];
    let Or = Dr,
        kr;
    e[197] !== w || e[198] !== sn || e[199] !== s || e[200] !== G || e[201] !== U || e[202] !== W || e[203] !== H || e[204] !== D || e[205] !== wn || e[206] !== An || e[207] !== t || e[208] !== q || e[209] !== En || e[210] !== Xe || e[211] !== i || e[212] !== b || e[213] !== Ue || e[214] !== y || e[215] !== Sn || e[216] !== Z || e[217] !== $ || e[218] !== K || e[219] !== A || e[220] !== V ? (kr = async e => {
        if (V == null || !En || An || !q || s == null || w == null || Z == null || Xe || xt.current || !sn || !Sn) return;
        xt.current = !0, Je(null), tt(!0);
        let r = e.giftId,
            a, o = `create_pending`,
            c = e.attemptKind;
        try {
            if (r == null || Ue !== e.amount || wn) {
                let t = H === `email` ? {
                        message: Et(G),
                        recipient_email: K,
                        recipient_name: Et(U),
                        sender_display_name: Et(W)
                    } : void 0,
                    n = await Dt({
                        amount: e.amount,
                        billingDetails: e.billingDetails,
                        presentation: t
                    });
                if (!bt.current) return;
                r = n.gift_id, Ve(n.gift_id), We(e.amount)
            }
            o = `prepare_checkout`;
            let t = ct({
                    credits: e.amount,
                    deliveryMethod: H,
                    entryPoint: A,
                    giftId: r
                }),
                s = ct({
                    checkoutState: `success`,
                    credits: e.amount,
                    deliveryMethod: H,
                    entryPoint: A,
                    giftId: r
                }),
                l = ct({
                    checkoutState: `cancelled`,
                    credits: e.amount,
                    deliveryMethod: H,
                    entryPoint: A,
                    giftId: r
                });
            await i(t, {
                replace: !0,
                defaultShouldRevalidate: !1
            }), p.setItem(n.CreditCheckoutRedirectPath, s);
            let u = {
                    billing_details: e.billingDetails,
                    cancel_url: new URL(l, window.location.origin).toString(),
                    credit_purchase_data: {
                        account_id: e.accountId,
                        quantity: e.amount,
                        unit: `credit`
                    },
                    entry_point: D,
                    purchased_gift_checkout_data: {
                        gift_id: r
                    }
                },
                d = await y(u, {});
            if (a = Ce(d), !bt.current) return;
            wt({
                step: `checkout`,
                outcome: `started`,
                attemptKind: c,
                ...$,
                giftId: r,
                checkoutId: a
            }), o = `navigate_checkout`;
            let f = new URL(l, window.location.origin);
            await b(d, {
                checkoutPayload: u,
                checkoutOriginProvenance: {
                    checkoutOriginProductExperience: Le.CHAT,
                    checkoutOriginDeliverySurface: `web`
                },
                searchParams: rt({
                    credits: e.amount,
                    deliveryMethod: H,
                    entryPoint: A,
                    giftId: r
                }),
                state: {
                    [Oe]: {
                        hash: f.hash,
                        pathname: Ye,
                        search: f.search,
                        state: {
                            giftCheckoutAttemptKind: c
                        }
                    }
                }
            })
        } catch {
            if (!bt.current) return;
            p.removeItem(n.CreditCheckoutRedirectPath), wt({
                step: `checkout`,
                outcome: `failed`,
                reason: o,
                attemptKind: c,
                ...$,
                giftId: r,
                checkoutId: a
            }), Je(t.formatMessage(F.checkoutError)), tt(!1), xt.current = !1;
            return
        }
        bt.current && (tt(!1), xt.current = !1)
    }, e[197] = w, e[198] = sn, e[199] = s, e[200] = G, e[201] = U, e[202] = W, e[203] = H, e[204] = D, e[205] = wn, e[206] = An, e[207] = t, e[208] = q, e[209] = En, e[210] = Xe, e[211] = i, e[212] = b, e[213] = Ue, e[214] = y, e[215] = Sn, e[216] = Z, e[217] = $, e[218] = K, e[219] = A, e[220] = V, e[221] = kr) : kr = e[221];
    let Ar = kr,
        jr;
    e[222] === w ? jr = e[223] : (jr = async e => {
        if (w == null) return !1;
        let t = !1;
        it(!0);
        try {
            t = (await _.safePost(`/gift-credits/recipients/eligibility`, {
                requestBody: {
                    recipient_email: e,
                    billing_details: w
                }
            })).recipient_ineligible
        } catch {}
        return !bt.current || (it(!1), St.current?.value.trim() !== e) ? !1 : (ut(t), t && window.requestAnimationFrame(() => St.current?.focus()), t)
    }, e[222] = w, e[223] = jr);
    let Mr = jr,
        Nr;
    e[224] !== Ar || e[225] !== w || e[226] !== sn || e[227] !== Mr || e[228] !== s || e[229] !== H || e[230] !== Gn || e[231] !== P || e[232] !== wn || e[233] !== nt || e[234] !== q || e[235] !== En || e[236] !== Xe || e[237] !== Ue || e[238] !== Sn || e[239] !== Z || e[240] !== xn || e[241] !== K || e[242] !== V ? (Nr = async () => {
        if (V == null || Gn == null || !En || !q || s == null || w == null || Z == null || Xe || nt || xt.current || !sn || !xn) return;
        if (H === `email`) {
            let e = K,
                t = await Mr(e);
            if (!bt.current || St.current?.value.trim() !== e || t) return
        }
        if (!Sn) return;
        let e = {
            accountId: s.id,
            amount: V,
            attemptKind: P == null ? `new` : Ue === V && !wn ? `resume` : `replace`,
            billingDetails: {
                ...w
            },
            giftId: Ue === V ? P : null
        };
        await Ar(e)
    }, e[224] = Ar, e[225] = w, e[226] = sn, e[227] = Mr, e[228] = s, e[229] = H, e[230] = Gn, e[231] = P, e[232] = wn, e[233] = nt, e[234] = q, e[235] = En, e[236] = Xe, e[237] = Ue, e[238] = Sn, e[239] = Z, e[240] = xn, e[241] = K, e[242] = V, e[243] = Nr) : Nr = e[243];
    let Pr = Nr,
        Fr;
    e[244] === Symbol.for(`react.memo_cache_sentinel`) ? (Fr = (e, t) => {
        ht(n => ({
            ...n,
            [e]: t
        }))
    }, e[244] = Fr) : Fr = e[244];
    let Ir = Fr,
        Lr;
    if (e[245] !== t || e[246] !== gn || e[247] !== bn || e[248] !== vn || e[249] !== _n || e[250] !== yn) {
        if (Lr = [], _n) {
            let n;
            e[252] === t ? n = e[253] : (n = t.formatMessage(F.presentationFieldTooLong, {
                field: t.formatMessage(F.recipientNameLabel),
                max: tn
            }), e[252] = t, e[253] = n);
            let r;
            e[254] === n ? r = e[255] : (r = {
                id: `gift-recipient-name-error`,
                message: n
            }, e[254] = n, e[255] = r), Lr.push(r)
        }
        if (vn && gn != null) {
            let n;
            e[256] !== t || e[257] !== gn ? (n = t.formatMessage(gn), e[256] = t, e[257] = gn, e[258] = n) : n = e[258];
            let r;
            e[259] === n ? r = e[260] : (r = {
                id: `gift-recipient-email-error`,
                message: n
            }, e[259] = n, e[260] = r), Lr.push(r)
        }
        if (yn) {
            let n;
            e[261] === t ? n = e[262] : (n = t.formatMessage(F.presentationFieldTooLong, {
                field: t.formatMessage(F.senderNameLabel),
                max: tn
            }), e[261] = t, e[262] = n);
            let r;
            e[263] === n ? r = e[264] : (r = {
                id: `gift-sender-name-error`,
                message: n
            }, e[263] = n, e[264] = r), Lr.push(r)
        }
        if (bn) {
            let n;
            e[265] === t ? n = e[266] : (n = t.formatMessage(F.presentationFieldTooLong, {
                field: t.formatMessage(F.messageLabel),
                max: nn
            }), e[265] = t, e[266] = n);
            let r;
            e[267] === n ? r = e[268] : (r = {
                id: `gift-message-error`,
                message: n
            }, e[267] = n, e[268] = r), Lr.push(r)
        }
        e[245] = t, e[246] = gn, e[247] = bn, e[248] = vn, e[249] = _n, e[250] = yn, e[251] = Lr
    } else Lr = e[251];
    let Rr = nt ? F.checkingRecipient : P == null ? F.continueToCheckout : F.resumeCheckout,
        zr = H === `email` && (Xe || nt || on),
        Br = V == null || Kn !== `ready` || w == null || er.isFetching || Xe || nt || !En || !q || !sn || !xn,
        Vr;
    e[269] !== Rr || e[270] !== t || e[271] !== zr ? (Vr = zr ? t.formatMessage(Rr) : void 0, e[269] = Rr, e[270] = t, e[271] = zr, e[272] = Vr) : Vr = e[272];
    let Hr = Xe || nt || on,
        Ur;
    e[273] !== Rr || e[274] !== zr ? (Ur = !zr && (0, L.jsx)(k, {
        ...Rr
    }), e[273] = Rr, e[274] = zr, e[275] = Ur) : Ur = e[275];
    let Wr;
    e[276] !== Br || e[277] !== Vr || e[278] !== Hr || e[279] !== Ur ? (Wr = (0, L.jsx)(S, {
        className: `rounded-full`,
        color: `primary`,
        disabled: Br,
        fullWidth: !0,
        label: Vr,
        loading: Hr,
        size: `large`,
        type: `submit`,
        children: Ur
    }), e[276] = Br, e[277] = Vr, e[278] = Hr, e[279] = Ur, e[280] = Wr) : Wr = e[280];
    let Gr = Wr,
        Kr;
    e[281] !== s || e[282] !== B || e[283] !== z || e[284] !== Y || e[285] !== $ || e[286] !== X ? (Kr = e => {
        e.defaultPrevented || e.currentTarget instanceof HTMLAnchorElement && (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) || s == null || Y || X || B || z || wt({
            step: `purchase_page`,
            outcome: `cancelled`,
            reason: `closed`,
            ...$
        })
    }, e[281] = s, e[282] = B, e[283] = z, e[284] = Y, e[285] = $, e[286] = X, e[287] = Kr) : Kr = e[287];
    let qr = Kr,
        Jr;
    e[288] === qr ? Jr = e[289] : (Jr = (0, L.jsx)(jt, {
        onHomeClick: qr
    }), e[288] = qr, e[289] = Jr);
    let Yr;
    e[290] !== d || e[291] !== w?.currency || e[292] !== Ke || e[293] !== Q?.currency || e[294] !== er.isFetching || e[295] !== E || e[296] !== Pn || e[297] !== ln || e[298] !== G || e[299] !== dn || e[300] !== U || e[301] !== W || e[302] !== H || e[303] !== ar || e[304] !== sr || e[305] !== P || e[306] !== t || e[307] !== B || e[308] !== nt || e[309] !== z || e[310] !== Fn || e[311] !== Y || e[312] !== Lr || e[313] !== cr || e[314] !== rr || e[315] !== Kn || e[316] !== Z?.amount_per_credit || e[317] !== Z?.minor_unit_exponent || e[318] !== Z?.symbol_code || e[319] !== Gr || e[320] !== $ || e[321] !== Ae || e[322] !== gn || e[323] !== ee || e[324] !== Ln || e[325] !== fe || e[326] !== en || e[327] !== tr || e[328] !== J || e[329] !== X || e[330] !== bn || e[331] !== vn || e[332] !== _n || e[333] !== yn || e[334] !== A || e[335] !== Pr || e[336] !== V ? (Yr = Y ? (0, L.jsx)(`main`, {
        className: `flex min-h-screen items-center justify-center`,
        children: (0, L.jsx)(`div`, {
            "aria-label": t.formatMessage(F.flowAccessibleTitle),
            role: `status`,
            children: (0, L.jsx)(v, {
                className: `icon`
            })
        })
    }) : J || tr ? null : X ? (0, L.jsx)(Vt, {
        headingRef: yt,
        isRetrying: d || Fn,
        onRetry: () => void(Pn ? Ln() : ee())
    }) : z ? (0, L.jsx)(Bt, {
        headingRef: yt
    }) : B ? (0, L.jsx)(zt, {
        creditCount: fe,
        deliveryMethod: H,
        entryPoint: A,
        giftId: P,
        headingRef: yt,
        queryEnabled: E === `success` || en === `active`
    }) : (0, L.jsx)(`main`, {
        className: `mx-auto w-full max-w-[1080px] px-5 pt-20 pb-16 sm:px-8`,
        children: (0, L.jsxs)(`form`, {
            "aria-busy": nt,
            "aria-label": t.formatMessage(F.createGiftTitle),
            className: `grid gap-10 lg:grid-cols-[minmax(0,1fr)_425px] lg:gap-16`,
            noValidate: !0,
            onSubmit: e => {
                e.preventDefault(), Pr()
            },
            children: [(0, L.jsxs)(`fieldset`, {
                disabled: nt,
                children: [(0, L.jsx)(Mt, {
                    headingRef: yt,
                    children: (0, L.jsx)(k, {
                        ...F.createGiftTitle
                    })
                }), (0, L.jsxs)(`div`, {
                    className: `mt-10 space-y-7`,
                    children: [(0, L.jsx)(Nt, {
                        label: (0, L.jsx)(k, {
                            ...F.creditQuantityLabel
                        }),
                        children: (0, L.jsx)(ft, {
                            amountPerCredit: Z?.amount_per_credit ?? null,
                            creditQuantityStep: 250,
                            maximumCreditPurchaseQuantity: et,
                            minimumChargeMinorUnits: 0,
                            minimumCreditPurchaseQuantityFloor: 250,
                            minorUnitExponent: Z?.minor_unit_exponent ?? null,
                            onSelectCreditQuantity: e => {
                                N(String(e)), wt({
                                    step: `amount_selection`,
                                    outcome: `selected`,
                                    ...$,
                                    creditQuantity: e
                                })
                            },
                            pendingDisplayAmountLabel: t.formatMessage(Kn === `error` ? F.priceUnavailable : F.loadingPrice),
                            presetCreditQuantities: Qe,
                            pricingCurrency: Z?.symbol_code,
                            selectedCreditQuantity: V,
                            variant: `standaloneCredit`
                        })
                    }), (0, L.jsxs)(Nt, {
                        label: (0, L.jsx)(k, {
                            ...F.deliveryMethodLabel
                        }),
                        children: [(0, L.jsx)(at, {
                            ariaLabel: t.formatMessage(F.deliveryMethodLabel),
                            className: `inline-block`,
                            leftItem: {
                                label: (0, L.jsxs)(`span`, {
                                    className: `inline-flex items-center gap-2`,
                                    children: [(0, L.jsx)(Ge, {
                                        className: `icon-sm`
                                    }), (0, L.jsx)(k, {
                                        ...F.deliveryMethodEmail
                                    })]
                                }),
                                value: `email`
                            },
                            onChange: e => {
                                Se(!0), ve(e)
                            },
                            rightItem: {
                                label: (0, L.jsxs)(`span`, {
                                    className: `inline-flex items-center gap-2`,
                                    children: [(0, L.jsx)(He, {
                                        className: `icon-sm`
                                    }), (0, L.jsx)(k, {
                                        ...F.deliveryMethodLink
                                    })]
                                }),
                                value: `link`
                            },
                            shouldToggleSelected: !1,
                            size: `large`,
                            value: H
                        }), (0, L.jsx)(`p`, {
                            className: `text-token-text-secondary mt-2 text-sm`,
                            children: (0, L.jsx)(k, {
                                ...F.deliveryMethodLinkDescription
                            })
                        })]
                    }), H === `email` ? (0, L.jsxs)(L.Fragment, {
                        children: [(0, L.jsx)(Nt, {
                            label: (0, L.jsx)(k, {
                                ...F.recipientSectionLabel
                            }),
                            children: (0, L.jsxs)(`div`, {
                                className: `grid gap-3 sm:grid-cols-2`,
                                children: [(0, L.jsxs)(`div`, {
                                    className: `min-w-0`,
                                    children: [(0, L.jsx)(`span`, {
                                        className: `text-token-text-secondary mb-2 block text-sm`,
                                        children: (0, L.jsx)(k, {
                                            ...F.recipientNameLabel
                                        })
                                    }), (0, L.jsx)(ye, {
                                        "aria-describedby": _n ? `gift-recipient-name-error` : void 0,
                                        ariaLabel: t.formatMessage(F.recipientNameLabel),
                                        className: `bg-token-bg-primary w-full`,
                                        error: _n ? (0, L.jsx)(k, {
                                            ...F.presentationNameTooLong,
                                            values: {
                                                max: tn
                                            }
                                        }) : void 0,
                                        inputClassName: rn,
                                        name: `gift-recipient-name`,
                                        onBlur: () => Ir(`recipientName`, !0),
                                        onChange: e => {
                                            De(e.target.value), Ir(`recipientName`, !1)
                                        },
                                        showInlineErrorMessage: !1,
                                        value: U
                                    })]
                                }), (0, L.jsxs)(`div`, {
                                    className: `min-w-0`,
                                    children: [(0, L.jsx)(`span`, {
                                        className: `text-token-text-secondary mb-2 block text-sm`,
                                        children: (0, L.jsx)(k, {
                                            ...F.recipientEmailLabel
                                        })
                                    }), (0, L.jsx)(ye, {
                                        "aria-describedby": vn ? `gift-recipient-email-error` : void 0,
                                        ariaLabel: t.formatMessage(F.recipientEmailLabel),
                                        className: `bg-token-bg-primary w-full`,
                                        error: vn && gn != null ? (0, L.jsx)(k, {
                                            ...gn
                                        }) : void 0,
                                        inputClassName: rn,
                                        name: `gift-recipient-email`,
                                        onBlur: () => {
                                            (Ae != null || dn.length > 0) && Ir(`recipientEmail`, !0)
                                        },
                                        onChange: e => {
                                            je(e.target.value), ut(!1), Ir(`recipientEmail`, !1)
                                        },
                                        ref: St,
                                        required: !0,
                                        showInlineErrorMessage: !1,
                                        type: `email`,
                                        value: dn
                                    })]
                                })]
                            })
                        }), (0, L.jsx)(Nt, {
                            label: (0, L.jsx)(k, {
                                ...F.senderSectionLabel
                            }),
                            children: (0, L.jsxs)(`div`, {
                                className: `block`,
                                children: [(0, L.jsx)(`span`, {
                                    className: `text-token-text-secondary mb-2 block text-sm`,
                                    children: (0, L.jsx)(k, {
                                        ...F.senderNameLabel
                                    })
                                }), (0, L.jsx)(ye, {
                                    "aria-describedby": yn ? `gift-sender-name-error` : void 0,
                                    ariaLabel: t.formatMessage(F.senderNameLabel),
                                    className: `bg-token-bg-primary w-full`,
                                    error: yn ? (0, L.jsx)(k, {
                                        ...F.presentationNameTooLong,
                                        values: {
                                            max: tn
                                        }
                                    }) : void 0,
                                    inputClassName: rn,
                                    name: `gift-sender-name`,
                                    onBlur: () => Ir(`senderName`, !0),
                                    onChange: e => {
                                        Ie(e.target.value), Ir(`senderName`, !1)
                                    },
                                    showInlineErrorMessage: !1,
                                    value: W
                                })]
                            })
                        }), (0, L.jsxs)(Nt, {
                            label: (0, L.jsx)(k, {
                                ...F.messageLabel
                            }),
                            children: [(0, L.jsx)(Te, {
                                "aria-describedby": bn ? `gift-message-remaining gift-message-error` : `gift-message-remaining`,
                                "aria-invalid": bn,
                                "aria-label": t.formatMessage(F.messageLabel),
                                className: bn ? `border-token-interactive-border-danger-secondary-default! bg-token-bg-primary! focus:border-token-interactive-border-danger-secondary-default! focus:ring-token-border-error! w-full` : `bg-token-bg-primary! w-full`,
                                dir: `auto`,
                                name: `gift-message`,
                                onBlur: () => Ir(`personalMessage`, !0),
                                onChange: e => {
                                    Be(e.target.value), Ir(`personalMessage`, !1)
                                },
                                rows: 4,
                                value: G
                            }), (0, L.jsx)(`p`, {
                                id: `gift-message-remaining`,
                                className: `text-token-text-secondary mt-2 text-end text-xs`,
                                children: (0, L.jsx)(k, {
                                    ...F.messageCharactersRemaining,
                                    values: {
                                        remaining: Math.max(0, nn - G.trim().length)
                                    }
                                })
                            })]
                        })]
                    }) : null]
                })]
            }), (0, L.jsx)(It, {
                action: (0, L.jsxs)(L.Fragment, {
                    children: [Gr, (Lr.length > 0 || Ke != null) && (0, L.jsxs)(`div`, {
                        className: `mt-3 space-y-1 text-sm`,
                        children: [Lr.map(Jt), Ke != null && (0, L.jsx)(`p`, {
                            className: `text-token-interactive-label-danger-secondary-default`,
                            role: `alert`,
                            children: Ke
                        })]
                    })]
                }),
                creditCount: ln,
                currencyCode: Q?.currency ?? w?.currency ?? null,
                estimatedSubtotal: rr,
                estimatedTax: ar,
                estimatedTotal: sr,
                isPreviewLoading: er.isFetching,
                priceStatus: Kn,
                previewStatus: cr
            })]
        })
    }), e[290] = d, e[291] = w?.currency, e[292] = Ke, e[293] = Q?.currency, e[294] = er.isFetching, e[295] = E, e[296] = Pn, e[297] = ln, e[298] = G, e[299] = dn, e[300] = U, e[301] = W, e[302] = H, e[303] = ar, e[304] = sr, e[305] = P, e[306] = t, e[307] = B, e[308] = nt, e[309] = z, e[310] = Fn, e[311] = Y, e[312] = Lr, e[313] = cr, e[314] = rr, e[315] = Kn, e[316] = Z?.amount_per_credit, e[317] = Z?.minor_unit_exponent, e[318] = Z?.symbol_code, e[319] = Gr, e[320] = $, e[321] = Ae, e[322] = gn, e[323] = ee, e[324] = Ln, e[325] = fe, e[326] = en, e[327] = tr, e[328] = J, e[329] = X, e[330] = bn, e[331] = vn, e[332] = _n, e[333] = yn, e[334] = A, e[335] = Pr, e[336] = V, e[337] = Yr) : Yr = e[337];
    let Xr = An ? F.workspaceAccountIneligibleDescription : On == null ? F.personalWorkspaceUnavailableDescription : F.workspacePurchaseDescription,
        Zr;
    e[338] === Xr ? Zr = e[339] : (Zr = (0, L.jsx)(`span`, {
        className: `block text-sm leading-5`,
        children: (0, L.jsx)(k, {
            ...Xr
        })
    }), e[338] = Xr, e[339] = Zr);
    let Qr = !Hn && (g || gt || On == null),
        $r = !Hn && (g || gt),
        ei;
    e[340] !== qr || e[341] !== Hn || e[342] !== Or ? (ei = e => {
        if (Hn) {
            Pt.current || (Pt.current = !0, qr(e)), Promise.resolve().then(Gt).catch(Wt).then(Ut);
            return
        }
        Or()
    }, e[340] = qr, e[341] = Hn, e[342] = Or, e[343] = ei) : ei = e[343];
    let ti = Hn ? F.workspaceAccountSignOut : F.switchToPersonalAccount,
        ni;
    e[344] === ti ? ni = e[345] : (ni = (0, L.jsx)(k, {
        ...ti
    }), e[344] = ti, e[345] = ni);
    let ri;
    e[346] !== Qr || e[347] !== $r || e[348] !== ei || e[349] !== ni ? (ri = (0, L.jsx)(S, {
        className: `rounded-full`,
        color: `primary`,
        disabled: Qr,
        loading: $r,
        onClick: ei,
        size: `large`,
        type: `button`,
        children: ni
    }), e[346] = Qr, e[347] = $r, e[348] = ei, e[349] = ni, e[350] = ri) : ri = e[350];
    let ii;
    e[351] !== qr || e[352] !== i ? (ii = e => {
        qr(e), i(`/`, {
            replace: !0
        })
    }, e[351] = qr, e[352] = i, e[353] = ii) : ii = e[353];
    let ai;
    e[354] === Symbol.for(`react.memo_cache_sentinel`) ? (ai = (0, L.jsx)(k, {
        ...F.goBack
    }), e[354] = ai) : ai = e[354];
    let oi;
    e[355] === ii ? oi = e[356] : (oi = (0, L.jsx)(S, {
        className: `rounded-full`,
        color: `secondary`,
        onClick: ii,
        size: `large`,
        type: `button`,
        children: ai
    }), e[355] = ii, e[356] = oi);
    let si;
    e[357] !== An || e[358] !== t ? (si = t.formatMessage(An ? F.workspaceAccountIneligibleTitle : F.workspacePurchaseTitle), e[357] = An, e[358] = t, e[359] = si) : si = e[359];
    let ci;
    e[360] !== J || e[361] !== Zr || e[362] !== ri || e[363] !== oi || e[364] !== si ? (ci = (0, L.jsx)(ne, {
        className: `max-w-[480px]`,
        description: Zr,
        isOpen: J,
        onClose: qt,
        onEscapeKeyDown: Kt,
        primaryButton: ri,
        secondaryButton: oi,
        shouldIgnoreClickOutside: !0,
        showCloseButton: !1,
        size: `custom`,
        testId: `modal-gift-credits-workspace-purchase-blocked`,
        title: si
    }), e[360] = J, e[361] = Zr, e[362] = ri, e[363] = oi, e[364] = si, e[365] = ci) : ci = e[365];
    let li;
    e[366] !== qr || e[367] !== i ? (li = e => {
        qr(e), i(`/`, {
            replace: !0
        })
    }, e[366] = qr, e[367] = i, e[368] = li) : li = e[368];
    let ui;
    e[369] !== tr || e[370] !== li ? (ui = (0, L.jsx)(vt, {
        isOpen: tr,
        onGoBack: li
    }), e[369] = tr, e[370] = li, e[371] = ui) : ui = e[371];
    let di;
    return e[372] !== Jr || e[373] !== Yr || e[374] !== ci || e[375] !== ui ? (di = (0, L.jsxs)(`div`, {
        className: `bg-token-bg-primary text-token-text-primary relative min-h-screen`,
        children: [Jr, Yr, ci, ui]
    }), e[372] = Jr, e[373] = Yr, e[374] = ci, e[375] = ui, e[376] = di) : di = e[376], di
}

function Ut() {
    return u({
        reason: x.AccountSwitcher,
        source: `gifts.credits.purchase-flow`
    })
}

function Wt() {}

function Gt() {
    return i.flushStructuredEvents(250)
}

function Kt(e) {
    return e.preventDefault()
}

function qt() {}

function Jt(e) {
    let {
        id: t,
        message: n
    } = e;
    return (0, L.jsx)(`p`, {
        id: t,
        className: `text-token-interactive-label-danger-secondary-default`,
        role: `alert`,
        children: n
    }, t)
}

function Yt(e) {
    return e.isPersonalAccount() && !e.isDeactivated()
}
var Xt, I, L, Zt, Qt, $t, en, R, tn, nn, rn, an = e((() => {
        Xt = M(), je(), r(), Se(), it(), pt(), Ie(), Re(), Ve(), We(), P(), w(), N(), xe(), De(), Je(), y(), T(), _e(), re(), Me(), we(), ve(), d(), o(), b(), ee(), ae(), s(), C(), Ae(), g(), l(), E(), me(), I = t(j()), fe(), ce(), mt(), tt(), ht(), Ke(), Ct(), Xe(), ut(), lt(), L = O(), Zt = 2e3, Qt = 6e4, $t = 5e3, en = 2e3, R = 6e4, tn = 100, nn = 500, rn = `bg-token-bg-primary! [&:-webkit-autofill]:shadow-[0_0_0_1000px_var(--bg-primary)_inset]! [&:-webkit-autofill]:[-webkit-text-fill-color:var(--text-primary)]`
    })),
    on, z, sn, B, V = e((() => {
        ce(), on = M(), an(), z = O(), sn = ({
            serverLoader: e
        }) => e(), B = A(function() {
            "use forget";
            let e = (0, on.c)(1),
                t;
            return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, z.jsx)(Ht, {}), e[0] = t) : t = e[0], t
        })
    }));
e((() => {
    V()
}))();
export {
    sn as clientLoader, B as
    default
};
//# sourceMappingURL=gifts.credits-muothlkw.js.map