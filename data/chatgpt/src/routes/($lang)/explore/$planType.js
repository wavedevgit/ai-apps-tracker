import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as n,
    AT as r,
    Ah as i,
    Btt as a,
    Dh as o,
    Hn as s,
    Htt as c,
    Ji as l,
    L3 as u,
    PR as d,
    Srt as f,
    Un as p,
    Xi as m,
    b5 as h,
    jR as g,
    k1 as _,
    kT as ee,
    o as v,
    prt as y,
    s as b,
    vnt as te,
    y5 as ne,
    ynt as re,
    z3 as ie
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as x,
    At as ae,
    Bn as S,
    Ln as oe,
    Nn as C,
    Pt as se,
    Rn as w,
    Rt as ce,
    Ut as le,
    Vn as ue,
    Wt as de,
    at as fe,
    jt as pe,
    wn as T,
    zn as me
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $nn as he,
    Frt as ge,
    Irt as _e,
    UUn as ve,
    WUn as ye,
    Xnn as be,
    Znn as xe,
    k4t as E,
    y4t as Se
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    np as Ce,
    tp as we
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    $d as Te,
    Hd as Ee,
    Jd as De,
    Qd as Oe,
    Sd as ke,
    Vd as Ae,
    Yd as je,
    Zd as D,
    _d as Me,
    bd as Ne,
    ef as Pe,
    hd as O,
    md as Fe,
    vd as k,
    xd as A,
    zd as j
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    a as Ie,
    i as Le,
    o as Re,
    r as M,
    s as ze,
    t as Be
} from "./99d6a32a-16p874b37wvx15br.js";
import {
    r as N,
    t as P
} from "./d9c77c9b-en6hbj87exdwqueq.js";
import {
    n as F,
    t as I
} from "./c09d86e5-l7zgumyqje9mygnb.js";

function Ve(e) {
    "use forget";
    let t = (0, L.c)(18),
        {
            planType: n
        } = e,
        r = me(),
        i;
    t[0] === n ? i = t[1] : (i = () => a.logEventWithStatsig(`Direct Purchase Social Sku: Terms of Use Click`, `direct_purchase_social_sku_terms_of_use_click`, {
        plan_type: n
    }), t[0] = n, t[1] = i);
    let o;
    t[2] === r ? o = t[3] : (o = r.formatMessage(V.termsOfUse), t[2] = r, t[3] = o);
    let s;
    t[4] !== i || t[5] !== o ? (s = (0, R.jsx)(fe, {
        target: `_blank`,
        to: z,
        onClick: i,
        children: o
    }), t[4] = i, t[5] = o, t[6] = s) : s = t[6];
    let c;
    t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, R.jsx)(`div`, {
        className: `border-token-text-primary mx-2 h-[18px] border-s`
    }), t[7] = c) : c = t[7];
    let l;
    t[8] === n ? l = t[9] : (l = () => a.logEventWithStatsig(`Direct Purchase Social Sku: Privacy Policy Click`, `direct_purchase_social_sku_privacy_policy_click`, {
        plan_type: n
    }), t[8] = n, t[9] = l);
    let u;
    t[10] === r ? u = t[11] : (u = r.formatMessage(V.privacyPolicy), t[10] = r, t[11] = u);
    let d;
    t[12] !== l || t[13] !== u ? (d = (0, R.jsx)(fe, {
        target: `_blank`,
        to: B,
        onClick: l,
        children: u
    }), t[12] = l, t[13] = u, t[14] = d) : d = t[14];
    let f;
    return t[15] !== s || t[16] !== d ? (f = (0, R.jsxs)(`div`, {
        className: `text-token-text-secondary flex h-8 items-center gap-2 text-sm font-medium`,
        children: [s, c, d]
    }), t[15] = s, t[16] = d, t[17] = f) : f = t[17], f
}
var L, R, z, B, V, H = e((() => {
    L = T(), c(), w(), x(), R = S(), z = `https://openai.com/policies/terms-of-use`, B = `https://openai.com/policies/privacy-policy`, V = oe({
        termsOfUse: {
            id: `directPurchaseAuthFooter.termsOfUse`,
            defaultMessage: `Terms of Use`
        },
        privacyPolicy: {
            id: `directPurchaseAuthFooter.privacyPolicy`,
            defaultMessage: `Privacy Policy`
        }
    })
}));

function U(e) {
    "use forget";
    let t = (0, q.c)(34),
        {
            handleClickSignup: n,
            handleClickLogin: r,
            email: i,
            setEmail: a,
            emailError: o,
            isRedirectingToAuth: s,
            submitMessage: c
        } = e,
        l = me(),
        u;
    t[0] === n ? u = t[1] : (u = e => {
        e.preventDefault(), n(`password`)
    }, t[0] = n, t[1] = u);
    let d;
    t[2] === a ? d = t[3] : (d = e => a(e.target.value), t[2] = a, t[3] = d);
    let f;
    t[4] === l ? f = t[5] : (f = l.formatMessage(Y.emailInputPlaceholder), t[4] = l, t[5] = f);
    let p;
    t[6] === l ? p = t[7] : (p = l.formatMessage(Y.emailInputPlaceholder), t[6] = l, t[7] = p);
    let m;
    t[8] !== i || t[9] !== o || t[10] !== d || t[11] !== f || t[12] !== p ? (m = (0, J.jsx)(ge, {
        name: `email`,
        value: i,
        onChange: d,
        inputClassName: `w-full rounded-full dark:bg-transparent! bg-gray-solid-75!  text-base! sm:text-base! py-3! px-5!`,
        error: o,
        showErrorIcon: !0,
        ariaLabel: f,
        placeholder: p,
        className: `rounded-full! border-[var(--border-heavy)] p-0! px-0! py-0! focus-within:ring-1`
    }), t[8] = i, t[9] = o, t[10] = d, t[11] = f, t[12] = p, t[13] = m) : m = t[13];
    let h;
    t[14] !== l || t[15] !== c ? (h = c ? l.formatMessage(c) : l.formatMessage(Y.continue), t[14] = l, t[15] = c, t[16] = h) : h = t[16];
    let g;
    t[17] !== s || t[18] !== h ? (g = (0, J.jsx)(ee, {
        loading: s,
        className: `p-3`,
        children: h
    }), t[17] = s, t[18] = h, t[19] = g) : g = t[19];
    let _;
    t[20] !== u || t[21] !== m || t[22] !== g ? (_ = (0, J.jsxs)(`form`, {
        onSubmit: u,
        className: `flex w-full flex-col gap-3`,
        children: [m, g]
    }), t[20] = u, t[21] = m, t[22] = g, t[23] = _) : _ = t[23];
    let v;
    if (t[24] !== r || t[25] !== l) {
        let e;
        t[27] === r ? e = t[28] : (e = e => (0, J.jsx)(ve, {
            onClick: r,
            className: `text-token-text-primary font-medium no-underline hover:underline`,
            children: e
        }), t[27] = r, t[28] = e), v = l.formatMessage(Y.alreadyHaveAccount, {
            content: W,
            login: e
        }), t[24] = r, t[25] = l, t[26] = v
    } else v = t[26];
    let y;
    t[29] === v ? y = t[30] : (y = (0, J.jsx)(`div`, {
        className: `flex cursor-pointer items-center gap-1 pt-4 pb-1.5`,
        children: v
    }), t[29] = v, t[30] = y);
    let b;
    return t[31] !== y || t[32] !== _ ? (b = (0, J.jsxs)(J.Fragment, {
        children: [_, y]
    }), t[31] = y, t[32] = _, t[33] = b) : b = t[33], b
}

function W(e) {
    return (0, J.jsx)(`span`, {
        className: `text-token-text-secondary`,
        children: e
    })
}

function G(e) {
    "use forget";
    let t = (0, q.c)(10),
        {
            handleClickSignup: n
        } = e,
        r;
    t[0] === n ? r = t[1] : (r = (0, J.jsx)(I, {
        provider: `google`,
        className: `w-full p-3`,
        onClick: () => n(`google`)
    }), t[0] = n, t[1] = r);
    let i;
    t[2] === n ? i = t[3] : (i = (0, J.jsx)(I, {
        provider: `microsoft`,
        className: `w-full p-3`,
        onClick: () => n(`microsoft`)
    }), t[2] = n, t[3] = i);
    let a;
    t[4] === n ? a = t[5] : (a = (0, J.jsx)(I, {
        provider: `apple`,
        className: `w-full p-3`,
        onClick: () => n(`apple`)
    }), t[4] = n, t[5] = a);
    let o;
    return t[6] !== r || t[7] !== i || t[8] !== a ? (o = (0, J.jsxs)(`div`, {
        className: `flex w-full flex-col gap-3`,
        children: [r, i, a]
    }), t[6] = r, t[7] = i, t[8] = a, t[9] = o) : o = t[9], o
}

function K(e) {
    "use forget";
    let t = (0, q.c)(3),
        {
            children: n
        } = e,
        r;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, J.jsx)(`div`, {
        className: `border-token-surface-tertiary flex h-[1px] w-full border-b`
    }), t[0] = r) : r = t[0];
    let i;
    return t[1] === n ? i = t[2] : (i = (0, J.jsxs)(`div`, {
        className: `relative my-9 w-full`,
        children: [r, (0, J.jsx)(`span`, {
            className: `bg-token-bg-primary text-token-text-secondary absolute start-1/2 -top-2 -translate-x-1/2 transform px-2 text-xs font-medium`,
            children: n
        })]
    }), t[1] = n, t[2] = i), i
}

function He(e) {
    "use forget";
    let t = (0, q.c)(22),
        {
            handleClickSignup: n,
            handleClickLogin: r,
            email: i,
            setEmail: a,
            emailError: o,
            isRedirectingToAuth: s,
            overrideSubmitMessage: c,
            bannerMessage: u
        } = e,
        d = me(),
        f;
    t[0] !== i || t[1] !== o || t[2] !== r || t[3] !== n || t[4] !== s || t[5] !== a || t[6] !== c ? (f = (0, J.jsx)(U, {
        handleClickSignup: n,
        handleClickLogin: r,
        email: i,
        setEmail: a,
        emailError: o,
        isRedirectingToAuth: s,
        submitMessage: c
    }), t[0] = i, t[1] = o, t[2] = r, t[3] = n, t[4] = s, t[5] = a, t[6] = c, t[7] = f) : f = t[7];
    let p;
    t[8] === d ? p = t[9] : (p = d.formatMessage(Y.or), t[8] = d, t[9] = p);
    let m;
    t[10] === p ? m = t[11] : (m = (0, J.jsx)(K, {
        children: p
    }), t[10] = p, t[11] = m);
    let h;
    t[12] === n ? h = t[13] : (h = (0, J.jsx)(G, {
        handleClickSignup: n
    }), t[12] = n, t[13] = h);
    let g;
    t[14] !== u || t[15] !== d ? (g = u && (0, J.jsx)(`div`, {
        className: `my-3 w-full`,
        "data-testid": `login-section-banner`,
        children: (0, J.jsx)(l, {
            content: d.formatMessage(u),
            type: `normal`
        })
    }), t[14] = u, t[15] = d, t[16] = g) : g = t[16];
    let _;
    return t[17] !== f || t[18] !== m || t[19] !== h || t[20] !== g ? (_ = (0, J.jsxs)(`div`, {
        className: `flex w-full flex-col items-center`,
        children: [f, m, h, g]
    }), t[17] = f, t[18] = m, t[19] = h, t[20] = g, t[21] = _) : _ = t[21], _
}
var q, J, Y, Ue = e((() => {
    q = T(), F(), r(), m(), _e(), ye(), w(), J = S(), Y = oe({
        emailInputPlaceholder: {
            id: `directPurchaseAuthLoginSection.emailInputPlaceholder`,
            defaultMessage: `Email address`
        },
        continue: {
            id: `directPurchaseAuthLoginSection.continue`,
            defaultMessage: `Continue`
        },
        alreadyHaveAccount: {
            id: `directPurchaseAuthLoginSection.alreadyHaveAccount`,
            defaultMessage: `<content>Already have an account?</content> <login>Log in</login>`
        },
        or: {
            id: `directPurchaseAuthLoginSection.or`,
            defaultMessage: `OR`
        }
    })
}));

function We(e) {
    switch (e) {
        case O.Go:
            return y.planNameGo;
        case O.Plus:
            return y.planNamePlus;
        case O.Pro:
        case O.ProLite:
            return y.planNamePro;
        case O.Team:
        case O.CodexTeam:
            return y.planNameBusiness;
        default:
            return y.title
    }
}

function Ge(e) {
    "use forget";
    let t = (0, Ke.c)(10),
        {
            planType: n
        } = e,
        r;
    t[0] === n ? r = t[1] : (r = We(n), t[0] = n, t[1] = r);
    let i = r,
        a = `ms-2 text-center font-medium ${Se}`;
    if (n === O.CodexTeam) {
        let e;
        t[2] === i ? e = t[3] : (e = (0, X.jsx)(`span`, {
            className: `text-token-text-primary text-center font-semibold`,
            children: (0, X.jsx)(C, {
                ...i
            })
        }), t[2] = i, t[3] = e);
        let n;
        t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (n = (0, X.jsx)(`span`, {
            className: a,
            children: (0, X.jsx)(C, {
                ...y.codex
            })
        }), t[4] = n) : n = t[4];
        let r;
        return t[5] === e ? r = t[6] : (r = (0, X.jsxs)(`p`, {
            className: `text-token-text-primary mb-5 text-center text-[30px] leading-9 font-semibold`,
            children: [e, n]
        }), t[5] = e, t[6] = r), r
    }
    let o;
    t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, X.jsx)(`span`, {
        className: `text-token-text-primary text-center font-semibold`,
        children: (0, X.jsx)(C, {
            ...y.chatGPT
        })
    }), t[7] = o) : o = t[7];
    let s;
    return t[8] === i ? s = t[9] : (s = (0, X.jsxs)(`p`, {
        className: `text-token-text-primary mb-5 text-center text-[30px] leading-9 font-semibold`,
        children: [o, (0, X.jsx)(`span`, {
            className: a,
            children: (0, X.jsx)(C, {
                ...i
            })
        })]
    }), t[8] = i, t[9] = s), s
}
var Ke, X, qe = e((() => {
    Ke = T(), f(), E(), w(), Me(), X = S()
}));

function Je(e) {
    "use forget";
    let t = (0, Ye.c)(12),
        {
            advertisedFeatures: n,
            title: r,
            subtitle: i
        } = e,
        a;
    t[0] === r ? a = t[1] : (a = (0, Z.jsx)(`h2`, {
        className: `text-token-text-primary mb-10 text-start text-3xl font-semibold`,
        children: (0, Z.jsx)(C, {
            ...r
        })
    }), t[0] = r, t[1] = a);
    let o;
    t[2] === i ? o = t[3] : (o = (0, Z.jsx)(`p`, {
        className: `text-token-text-primary text-md mt-0 self-start font-medium`,
        children: (0, Z.jsx)(C, {
            ...i
        })
    }), t[2] = i, t[3] = o);
    let s;
    t[4] !== a || t[5] !== o ? (s = (0, Z.jsxs)(`div`, {
        className: `space-y-4 pb-4 text-start`,
        children: [a, o]
    }), t[4] = a, t[5] = o, t[6] = s) : s = t[6];
    let c;
    t[7] === n ? c = t[8] : (c = (0, Z.jsx)(Ae, {
        advertisedFeatures: n,
        type: j.DIRECT_PURCHASE
    }), t[7] = n, t[8] = c);
    let l;
    return t[9] !== s || t[10] !== c ? (l = (0, Z.jsxs)(`div`, {
        className: `relative z-10 flex w-full max-w-[400px] flex-col md:ps-5`,
        children: [s, c]
    }), t[9] = s, t[10] = c, t[11] = l) : l = t[11], l
}
var Ye, Z, Xe = e((() => {
        Ye = T(), Ee(), w(), Z = S()
    })),
    Ze, Qe, $e, et, tt, nt, rt = e((() => {
        Ze = `webp`, Qe = `srgb`, $e = `uchar`, et = {
            width: 414,
            height: 620
        }, tt = `/cdn/assets/codex-cloud-jx1thus4.webp`, nt = {
            format: Ze,
            width: 414,
            height: 620,
            space: Qe,
            channels: 4,
            depth: $e,
            density: 45,
            isProgressive: !1,
            isPalette: !1,
            bitsPerSample: 8,
            hasProfile: !1,
            hasAlpha: !0,
            autoOrient: et,
            src: tt
        }
    }));

function it(e) {
    "use forget";
    let t = (0, at.c)(18),
        {
            overrideType: n
        } = e,
        r = n === Fe.Codex,
        i, a, o, s;
    if (t[0] !== r || t[1] !== n) {
        let e = ne(`absolute inset-x-0 -top-[140px] z-0 h-full w-full object-fill object-top transition-[filter,opacity] dark:brightness-[0.78] dark:saturate-[0.92]`, r && `top-0!`),
            c;
        bb0: switch (n) {
            case Fe.Codex:
                c = nt.src;
                break bb0;
            default:
                c = `https://cdn.openai.com/chatgpt/team-interstitial-background.png`
        }
        i = !0, a = ``, o = c, s = ne(e, !r && `dark:hidden`), t[0] = r, t[1] = n, t[2] = i, t[3] = a, t[4] = o, t[5] = s
    } else i = t[2], a = t[3], o = t[4], s = t[5];
    let c;
    t[6] !== i || t[7] !== a || t[8] !== o || t[9] !== s ? (c = (0, Q.jsx)(`img`, {
        "aria-hidden": i,
        alt: a,
        src: o,
        className: s
    }), t[6] = i, t[7] = a, t[8] = o, t[9] = s, t[10] = c) : c = t[10];
    let l;
    t[11] === r ? l = t[12] : (l = !r && (0, Q.jsx)(`div`, {
        "aria-hidden": !0,
        className: `absolute inset-0 z-0 hidden bg-[radial-gradient(125%_70%_at_50%_0%,rgba(105,170,255,0.24)_0%,rgba(62,92,156,0.18)_32%,rgba(18,24,37,0.92)_58%,#0f141f_100%)] dark:block`
    }), t[11] = r, t[12] = l);
    let u, d;
    t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (u = (0, Q.jsx)(`div`, {
        "aria-hidden": !0,
        className: `pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-white/0 via-white/10 to-white/35 dark:hidden`
    }), d = (0, Q.jsx)(`div`, {
        "aria-hidden": !0,
        className: `pointer-events-none absolute inset-0 z-[1] hidden bg-[linear-gradient(180deg,rgba(33,33,33,0)_0.12%,rgba(33,33,33,0.85)_51.46%,#212121_72.79%)] dark:block`
    }), t[13] = u, t[14] = d) : (u = t[13], d = t[14]);
    let f;
    return t[15] !== c || t[16] !== l ? (f = (0, Q.jsxs)(Q.Fragment, {
        children: [c, l, u, d]
    }), t[15] = c, t[16] = l, t[17] = f) : f = t[17], f
}
var at, Q, ot = e((() => {
    at = T(), rt(), h(), Me(), Q = S()
}));

function st({
    isCodexTeam: e,
    isTeamPlan: t,
    plusFreeOfferCtaLabel: n,
    teamPromoCtaLabel: r
}) {
    return e ? ht.getStartedButton : t ? r ?? Ie.getButton : n || (te(pt).get(mt, `control`) === `continue_with_email` ? ht.continueWithEmailButton : n)
}

function ct(e, t) {
    let n = new URLSearchParams(t);
    Ne(n);
    let r = n.toString();
    if (e === O.Team) return r ? `${P}?${r}` : P;
    if (e === O.CodexTeam) return r ? `${ft}?${r}` : ft;
    let i = `/purchase/${e}`;
    return r ? `${i}?${r}` : i
}

function lt() {
    a.logEventWithStatsig(`Direct Purchase Social Sku: Direct Purchase Page Viewed`, `direct_purchase_social_sku_impression`, {
        referrer: document.referrer
    })
}
var ut, dt, $, ft, pt, mt, ht, gt, _t = e((() => {
    ut = T(), i(), ze(), Ce(), De(), Le(), Te(), D(), be(), _(), u(), c(), re(), N(), dt = t(ue()), w(), x(), d(), A(), s(), H(), Ue(), qe(), Xe(), ot(), M(), Me(), $ = S(), ft = `/codex/team/checkout`, pt = `3768341700`, mt = `direct_purchase_email_cta_copy_variant`, ht = oe({
        freeTrialSubtitle30days: {
            id: `directPurchaseNoAuthPage.freeTrialSubtitle30days`,
            defaultMessage: `Free 30-day trial`
        },
        getStartedButton: {
            id: `directPurchaseNoAuthPage.getStartedButton`,
            defaultMessage: `Get started`
        },
        continueWithEmailButton: {
            id: `directPurchaseNoAuthPage.continueWithEmailButton`,
            defaultMessage: `Continue with email`
        }
    }), gt = e => {
        "use forget";
        let t = (0, ut.c)(78),
            {
                planType: r,
                overrideType: i,
                promoCampaign: s
            } = e,
            c = me(),
            l = se(),
            u = pe(),
            d = i,
            f = r === O.Team,
            m = r === O.CodexTeam,
            h = f || m,
            _ = Oe(),
            {
                data: ee
            } = Pe(_ ?? ``, !!_),
            {
                country: v
            } = he(),
            y;
        t[0] !== v || t[1] !== h ? (y = {
            country: v,
            currentAccount: null,
            location: `DirectPurchaseNoAuthPage`,
            pricingPlanIsTypeBusiness: h
        }, t[0] = v, t[1] = h, t[2] = y) : y = t[2];
        let b = xe(y),
            te = b?.country,
            ne = b?.currency,
            re = b != null,
            x;
        t[3] !== te || t[4] !== ne || t[5] !== re ? (x = {
            countryCode: te,
            currency: ne,
            enabled: re
        }, t[3] = te, t[4] = ne, t[5] = re, t[6] = x) : x = t[6];
        let {
            data: ae,
            isLoading: S,
            error: oe
        } = ie(x), C = f && !!_ && _ === `team-1-month-free` && !!ae && ae.currencyConfig.promos.business_free_trial.enabled, w = C && ee?.state === `not_eligible`, ce = C && ee?.state === `temporary_disabled`, le = C && ee?.state === `offline`, ue = C && ee?.state === `eligible`, de;
        bb0: {
            if (!ue) {
                de = null;
                break bb0
            }
            de = Ie.redeemFreeOfferButton
        }
        let fe = de,
            T;
        bb1: {
            if (!f) {
                T = null;
                break bb1
            }
            if (!b || S || oe != null || !ae) {
                T = null;
                break bb1
            }
            if (!(w || ce || le)) {
                T = null;
                break bb1
            }
            T = w ? je.teamFreeTrialNotEligible : ce ? je.teamFreeTrialTemporarilyDisabled : je.teamFreeTrialOffline
        }
        let ge = T,
            _e = r === O.Plus && s === `plus-1-month-free`,
            ve = _e ? ke.claimFreeOffer : null,
            ye;
        t[7] !== m || t[8] !== f || t[9] !== ve || t[10] !== fe ? (ye = st({
            isCodexTeam: m,
            isTeamPlan: f,
            plusFreeOfferCtaLabel: ve,
            teamPromoCtaLabel: fe
        }), t[7] = m, t[8] = f, t[9] = ve, t[10] = fe, t[11] = ye) : ye = t[11];
        let be = ye,
            E;
        t[12] !== d || t[13] !== r ? (E = Be({
            planType: r,
            overrideType: d
        }), t[12] = d, t[13] = r, t[14] = E) : E = t[14];
        let {
            title: Se,
            subtitle: Ce,
            advertisedFeatures: Te
        } = E, [Ee, De] = (0, dt.useState)(!1), Ae;
        t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (Ae = [], t[15] = Ae) : Ae = t[15], (0, dt.useEffect)(lt, Ae);
        let [D, Me] = (0, dt.useState)(``), [Ne, Fe] = (0, dt.useState)(void 0), k;
        t[16] !== u.search || t[17] !== r ? (k = ct(r, u.search), t[16] = u.search, t[17] = r, t[18] = k) : k = t[18];
        let A = k,
            j;
        t[19] === c ? j = t[20] : (j = e => {
            if (!e || e.trim() === ``) return c.formatMessage({
                id: `businessPurchaseInterstitialPage.errors.emailRequired`,
                defaultMessage: `Email is required`
            });
            if (!p.test(e)) return c.formatMessage({
                id: `businessPurchaseInterstitialPage.errors.emailInvalid`,
                defaultMessage: `Email is invalid.`
            })
        }, t[19] = c, t[20] = j);
        let Le = j,
            M;
        t[21] !== A || t[22] !== D || t[23] !== Le ? (M = e => {
            if (e === `password`) {
                a.logEventWithStatsig(`Direct Purchase Social Sku: Continue With Email Click`, `direct_purchase_social_sku_continue_with_email_click`);
                let e = Le(D);
                if (Fe(e), e) {
                    a.logEventWithStatsig(`Direct Purchase Social Sku: Email Validation Error`, `direct_purchase_social_sku_email_validation_error`);
                    return
                }
                let t;
                D && (t = {
                    screen_hint: `login_or_signup`,
                    login_hint: D
                }), De(!0), a.logEventWithStatsig(`Direct Purchase Social Sku: Email Signup Navigated To Auth`, `direct_purchase_social_sku_email_signup_navigated_to_auth`), n({
                    fallbackScreenHint: `login_or_signup`,
                    useFallbackScreenHint: !0,
                    ...t ? {
                        additionalAuthParams: t
                    } : {},
                    callbackUrl: A
                });
                return
            }
            a.logEventWithStatsig(`Direct Purchase Social Sku: Continue With Social Click`, `direct_purchase_social_sku_continue_with_social_click`, {
                connection: e
            }), n({
                fallbackScreenHint: `login`,
                useFallbackScreenHint: !0,
                additionalAuthParams: {
                    connection: g[e]
                },
                callbackUrl: A
            })
        }, t[21] = A, t[22] = D, t[23] = Le, t[24] = M) : M = t[24];
        let ze = M,
            N;
        t[25] === A ? N = t[26] : (N = () => {
            a.logEventWithStatsig(`Direct Purchase Social Sku: Already Have Account Click`, `direct_purchase_social_sku_already_have_account_click`), n({
                fallbackScreenHint: `login_or_signup`,
                callbackUrl: A,
                skipLoginModal: !0
            })
        }, t[25] = A, t[26] = N);
        let P = N,
            F;
        t[27] !== m || t[28] !== l ? (F = () => {
            a.logEventWithStatsig(`Direct Purchase Social Sku: Logo Click`, `direct_purchase_social_sku_logo_click`), l(m ? `/codex` : `/`)
        }, t[27] = m, t[28] = l, t[29] = F) : F = t[29];
        let I;
        t[30] === c ? I = t[31] : (I = c.formatMessage({
            id: `directPurchaseAuthLoginSection.homeButtonAriaLabel`,
            defaultMessage: `Click here to go to the home page`
        }), t[30] = c, t[31] = I);
        let L;
        t[32] === m ? L = t[33] : (L = m ? (0, $.jsx)(we, {
            className: `h-8 w-8`
        }) : (0, $.jsx)(o, {
            className: `h-8 w-8`
        }), t[32] = m, t[33] = L);
        let R;
        t[34] !== F || t[35] !== I || t[36] !== L ? (R = (0, $.jsx)(`button`, {
            onClick: F,
            className: `mb-6 cursor-pointer p-0 md:fixed md:start-4 md:top-4 md:h-6 md:w-6`,
            "aria-label": I,
            children: L
        }), t[34] = F, t[35] = I, t[36] = L, t[37] = R) : R = t[37];
        let z;
        t[38] !== c || t[39] !== _e || t[40] !== ue ? (z = (_e || ue) && (0, $.jsx)(`div`, {
            className: `text-token-text-secondary text-center text-lg font-medium`,
            children: c.formatMessage(ht.freeTrialSubtitle30days)
        }), t[38] = c, t[39] = _e, t[40] = ue, t[41] = z) : z = t[41];
        let B;
        t[42] === r ? B = t[43] : (B = (0, $.jsx)(Ge, {
            planType: r
        }), t[42] = r, t[43] = B);
        let V;
        t[44] !== D || t[45] !== Ne || t[46] !== P || t[47] !== ze || t[48] !== Ee || t[49] !== ge || t[50] !== be ? (V = (0, $.jsx)(He, {
            handleClickSignup: ze,
            handleClickLogin: P,
            email: D,
            setEmail: Me,
            emailError: Ne,
            isRedirectingToAuth: Ee,
            overrideSubmitMessage: be,
            bannerMessage: ge
        }), t[44] = D, t[45] = Ne, t[46] = P, t[47] = ze, t[48] = Ee, t[49] = ge, t[50] = be, t[51] = V) : V = t[51];
        let H;
        t[52] !== R || t[53] !== z || t[54] !== B || t[55] !== V ? (H = (0, $.jsxs)(`div`, {
            className: `flex w-full max-w-[360px] grow flex-col items-center justify-center gap-3`,
            children: [R, z, B, V]
        }), t[52] = R, t[53] = z, t[54] = B, t[55] = V, t[56] = H) : H = t[56];
        let U;
        t[57] === r ? U = t[58] : (U = (0, $.jsx)(Ve, {
            planType: r
        }), t[57] = r, t[58] = U);
        let W;
        t[59] !== H || t[60] !== U ? (W = (0, $.jsxs)(`div`, {
            className: `flex min-w-[320px] flex-1 flex-col items-center p-9 px-4`,
            children: [H, U]
        }), t[59] = H, t[60] = U, t[61] = W) : W = t[61];
        let G;
        t[62] === d ? G = t[63] : (G = (0, $.jsx)(it, {
            overrideType: d
        }), t[62] = d, t[63] = G);
        let K;
        t[64] !== Te || t[65] !== Ce || t[66] !== Se ? (K = (0, $.jsx)(`div`, {
            className: `mb-10 flex w-full grow flex-col md:-mt-33 md:items-center md:justify-center`,
            children: (0, $.jsx)(Je, {
                title: Se,
                subtitle: Ce,
                advertisedFeatures: Te
            })
        }), t[64] = Te, t[65] = Ce, t[66] = Se, t[67] = K) : K = t[67];
        let q;
        t[68] !== c || t[69] !== h ? (q = h && (0, $.jsx)(`div`, {
            className: `bg-token-bg-primary before:via-token-bg-primary/45 before:to-token-bg-primary absolute inset-x-0 bottom-0 z-10 flex flex-col items-center px-4 pt-8 pb-6 before:pointer-events-none before:absolute before:inset-x-0 before:top-[-64px] before:h-16 before:bg-gradient-to-b before:from-transparent before:content-['']`,
            children: (0, $.jsxs)(`div`, {
                className: `relative flex flex-col items-center`,
                children: [(0, $.jsx)(`div`, {
                    className: `text-token-text-secondary relative top-[10px] text-center text-[12px] font-medium`,
                    children: c.formatMessage(Ie.logoGardenTitle)
                }), (0, $.jsx)(`img`, {
                    alt: c.formatMessage(Ie.logoGardenAlt),
                    src: Re.src,
                    className: `mt-5 h-auto w-4/5 max-w-[720px] object-contain dark:opacity-95 dark:brightness-[1.55] dark:contrast-[1.04] dark:invert`
                })]
            })
        }), t[68] = c, t[69] = h, t[70] = q) : q = t[70];
        let J;
        t[71] !== G || t[72] !== K || t[73] !== q ? (J = (0, $.jsxs)(`div`, {
            className: `bg-token-bg-primary text-token-text-primary hidden min-h-[560px] flex-col overflow-y-auto px-4 md:relative md:flex md:h-full md:flex-1 md:items-center`,
            children: [G, K, q]
        }), t[71] = G, t[72] = K, t[73] = q, t[74] = J) : J = t[74];
        let Y;
        return t[75] !== W || t[76] !== J ? (Y = (0, $.jsxs)(`div`, {
            className: `bg-token-bg-primary text-token-text-primary flex h-full w-full`,
            children: [W, J]
        }), t[75] = W, t[76] = J, t[77] = Y) : Y = t[77], Y
    }
}));

function vt() {
    "use forget";
    let e = (0, yt.c)(4),
        t = ce(),
        {
            overrideType: n,
            promoCampaign: r
        } = ae(),
        i = t.planType;
    if (!k(i)) throw new Response(`Not Found`, {
        status: 404
    });
    let a;
    return e[0] !== n || e[1] !== i || e[2] !== r ? (a = (0, bt.jsx)(gt, {
        planType: i,
        overrideType: n,
        promoCampaign: r
    }), e[0] = n, e[1] = i, e[2] = r, e[3] = a) : a = e[3], a
}
var yt, bt, xt, St, Ct = e((() => {
    x(), yt = T(), _t(), Me(), b(), bt = S(), xt = le(vt), St = de(v)
}));
e((() => {
    Ct()
}))();
export {
    St as ErrorBoundary, xt as
    default
};
//# sourceMappingURL=(_lang).explore._planType-fbzvsykb.js.map