const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/c2675c8c-ig7dykzhv7vbqkt7.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-cb22y2w19zwyshmt.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/conversation-small-fym1zmu9zimymmm1.js", "assets/30901919-e33mbl5u1y88w5wu.js", "assets/c470f5ab-m68dth1hatzjj8yh.js", "assets/0e5afe53-dl0nq2u2siu8c8q5.js", "assets/conversation-small-iha453gv.css", "assets/82782bc9-h658ejxn3ufkvr7a.js", "assets/8b34dbc2-gf9wnwcahty27ylx.js", "assets/global-modals-njebr7y8.css"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as n,
    AT as r,
    BD as i,
    C0 as a,
    C1 as o,
    J8 as s,
    K as c,
    M4 as l,
    Nrt as u,
    PD as d,
    Prt as f,
    QL as p,
    S0 as m,
    S1 as ee,
    Y as h,
    Y8 as g,
    Z as _,
    eR as te,
    gnt as v,
    h4 as y,
    i1 as b,
    iw as ne,
    k1 as re,
    kT as x,
    o as ie,
    oR as ae,
    ow as S,
    pnt as oe,
    s as se,
    u1 as ce,
    vN as le,
    yN as ue,
    ynt as de,
    zrt as fe
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as pe,
    At as me,
    Bn as C,
    Ht as he,
    Ln as ge,
    Nn as w,
    Rn as T,
    Ut as _e,
    Vn as ve,
    Wt as ye,
    cn as be,
    jt as xe,
    ln as Se,
    wn as E,
    zn as Ce
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Cn as we,
    En as Te,
    Fn as Ee,
    Mn as De,
    Nn as Oe,
    Pn as ke,
    Tn as D,
    Up as Ae,
    Vp as je,
    bsn as O,
    l2t as Me,
    u2t as Ne,
    wn as Pe,
    xsn as Fe
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    a_ as Ie,
    c_ as Le,
    e_ as Re,
    g_ as k,
    l_ as ze,
    m_ as Be,
    n_ as Ve,
    o_ as A,
    s_ as He,
    t_ as Ue,
    u_ as We
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    c as Ge,
    i as Ke,
    o as qe,
    s as Je
} from "./efd279b6-b90gmea5n9iovib1.js";
import {
    n as Ye,
    t as Xe
} from "./da2e4f1d-hjo3ad3fmcgvexi4.js";
import {
    a as Ze,
    d as Qe,
    f as $e,
    i as et,
    l as tt,
    o as nt,
    r as rt,
    t as j,
    u as it
} from "./d4df9516-fw5h3kvf0vj3ebma.js";
import {
    n as at,
    t as M
} from "./759cd6d0-del3qgfi88x5bucl.js";

function ot(e) {
    "use forget";
    let t = (0, N.c)(29),
        {
            offer: n,
            turnOffAutoRenewal: r,
            isLoading: i,
            onConfirm: a,
            onDismiss: o
        } = e,
        s = r !== void 0 && r,
        c = Ce(),
        u;
    t[0] !== c || t[1] !== n.currency || t[2] !== n.monthly_price_minor ? (u = c.formatNumber(n.monthly_price_minor / 10 ** l(n.currency), {
        style: `currency`,
        currency: n.currency
    }), t[0] = c, t[1] = n.currency, t[2] = n.monthly_price_minor, t[3] = u) : u = t[3];
    let d = u,
        f;
    t[4] !== c || t[5] !== n.renews_at ? (f = c.formatDate(n.renews_at * 1e3, {
        timeZone: `UTC`,
        year: `numeric`,
        month: `long`,
        day: `numeric`
    }), t[4] = c, t[5] = n.renews_at, t[6] = f) : f = t[6];
    let p = f,
        m;
    t[7] !== d || t[8] !== p || t[9] !== s ? (m = (0, P.jsx)(`p`, {
        className: `text-token-text-primary text-base`,
        children: s ? (0, P.jsx)(w, {
            id: `chatgpt.students.back_to_school_2026.go_upgrade.terms.no_auto_renewal`,
            defaultMessage: `Switch from Go to Plus today with 4 months free. Your Plus subscription will end after the free period and won’t renew automatically.`
        }) : (0, P.jsx)(w, {
            id: `chatgpt.students.back_to_school_2026.go_upgrade.terms`,
            defaultMessage: `Switch from Go to Plus today with 4 months free. Plus then renews automatically at {monthlyPrice}/month, plus applicable tax, starting {renewalDate} (UTC).`,
            values: {
                monthlyPrice: d,
                renewalDate: p
            }
        })
    }), t[7] = d, t[8] = p, t[9] = s, t[10] = m) : m = t[10];
    let ee;
    t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (ee = (0, P.jsx)(`p`, {
        className: `text-token-text-secondary text-sm`,
        children: (0, P.jsx)(w, {
            id: `chatgpt.students.back_to_school_2026.go_upgrade.credit`,
            defaultMessage: `Unused Go time will be credited to your account toward future bills, not refunded in cash. You can cancel your subscription in Settings.`
        })
    }), t[11] = ee) : ee = t[11];
    let h;
    t[12] === Symbol.for(`react.memo_cache_sentinel`) ? (h = (0, P.jsx)(w, {
        id: `chatgpt.students.back_to_school_2026.go_upgrade.confirm`,
        defaultMessage: `Upgrade to Plus and activate offer`
    }), t[12] = h) : h = t[12];
    let g;
    t[13] !== i || t[14] !== a ? (g = (0, P.jsx)(x, {
        type: `button`,
        size: `large`,
        loading: i,
        onClick: a,
        children: h
    }), t[13] = i, t[14] = a, t[15] = g) : g = t[15];
    let _;
    t[16] !== i || t[17] !== o ? (_ = () => {
        i || o()
    }, t[16] = i, t[17] = o, t[18] = _) : _ = t[18];
    let te;
    t[19] === Symbol.for(`react.memo_cache_sentinel`) ? (te = (0, P.jsx)(w, {
        id: `chatgpt.students.back_to_school_2026.go_upgrade.decline`,
        defaultMessage: `Keep Go`
    }), t[19] = te) : te = t[19];
    let v;
    t[20] !== i || t[21] !== _ ? (v = (0, P.jsx)(x, {
        type: `button`,
        size: `large`,
        color: `secondary`,
        "aria-disabled": i,
        visuallyDisabled: i,
        onClick: _,
        children: te
    }), t[20] = i, t[21] = _, t[22] = v) : v = t[22];
    let y;
    t[23] !== v || t[24] !== g ? (y = (0, P.jsxs)(`div`, {
        className: `flex flex-col gap-3`,
        children: [g, v]
    }), t[23] = v, t[24] = g, t[25] = y) : y = t[25];
    let b;
    return t[26] !== y || t[27] !== m ? (b = (0, P.jsxs)(`div`, {
        className: `mt-6 space-y-4`,
        children: [m, ee, y]
    }), t[26] = y, t[27] = m, t[28] = b) : b = t[28], b
}
var N, P, F = e((() => {
    N = E(), r(), y(), T(), P = C()
}));

function st(e) {
    let t = new URLSearchParams({
            campaign: Be
        }),
        n = Oe(e);
    return n != null && t.set(Te, n), `/students/claim?${t.toString()}`
}

function ct(e) {
    return e ? Ee() && v(_t, {
        disableExposureLog: !0
    }).get(`mobile_destination`, `web`) === `native` ? D : h : c
}

function lt() {
    if (typeof performance.getEntriesByType != `function`) return !1;
    let e = performance.getEntriesByType(`navigation`).at(0);
    return e != null && `type` in e && e.type === `back_forward`
}

function ut({
    isLoggedIn: e,
    isMobileStoreSubscription: t,
    isProSubscription: n,
    isPersonalWorkspaceRequired: r,
    isEnrolled: i,
    isVerified: a,
    hasActivatedOffer: o,
    hasActivationError: s,
    requiresActivationSupport: c,
    isVerificationPending: l,
    canRestartVerification: u,
    hasError: d,
    isUnavailable: f
}) {
    return e ? r ? {
        title: z.personalWorkspaceTitle,
        description: z.personalWorkspaceDescription
    } : n ? {
        title: z.proSubscriptionTitle,
        description: z.proSubscriptionDescription
    } : t ? {
        title: z.unsupportedSubscriptionTitle,
        description: z.unsupportedSubscriptionDescription
    } : o ? {
        title: z.activatedTitle,
        description: z.activatedDescription
    } : s ? {
        title: z.activationErrorTitle,
        description: c ? z.activationSupportDescription : z.activationErrorDescription
    } : i ? {
        title: z.alreadyClaimedTitle,
        description: z.alreadyClaimedDescription
    } : a ? {
        title: z.verifiedTitle,
        description: z.verifiedDescription
    } : l ? {
        title: z.verificationPendingTitle,
        description: u ? z.verificationRestartDescription : z.verificationPendingDescription
    } : d ? {
        title: z.verificationErrorTitle,
        description: z.verificationErrorDescription
    } : f ? {
        title: z.offerUnavailableTitle,
        description: z.offerUnavailableDescription
    } : {
        title: z.verifyingTitle,
        description: z.verifyingDescription
    } : {
        title: z.signingInTitle,
        description: z.signingInDescription
    }
}

function dt(e) {
    "use forget";
    let t = (0, ht.c)(15),
        {
            sheerIdProgramId: n
        } = e,
        r = ee(),
        i = o(),
        a = i?.id ?? null,
        s;
    t[0] !== r || t[1] !== i ? (s = f() && i == null && r.isError && !r.isFetching, t[0] = r, t[1] = i, t[2] = s) : s = t[2];
    let c = s,
        l;
    t[3] !== r || t[4] !== i ? (l = f() && i == null && r.isSuccess && !r.isFetching, t[3] = r, t[4] = i, t[5] = l) : l = t[5];
    let u = l,
        d = (0, L.useRef)(a),
        p, m;
    t[6] === a ? (p = t[7], m = t[8]) : (p = () => {
        if (a == null) return;
        let e = d.current;
        d.current = a, e != null && e !== a && (j.clearModalError(), j.setIsLoading(!1))
    }, m = [a], t[6] = a, t[7] = p, t[8] = m), ue(p, m);
    let h = i == null ? `no-account` : `${i.id}:${i.normalizedAccountUserId}`,
        g;
    return t[9] !== i || t[10] !== c || t[11] !== u || t[12] !== n || t[13] !== h ? (g = (0, R.jsx)(I, {
        currentAccount: i,
        isAccountBootstrapError: c,
        isAccountSelectionRequired: u,
        sheerIdProgramId: n
    }, h), t[9] = i, t[10] = c, t[11] = u, t[12] = n, t[13] = h, t[14] = g) : g = t[14], g
}

function I(e) {
    "use forget";
    let t = (0, ht.c)(200),
        {
            currentAccount: r,
            isAccountBootstrapError: a,
            isAccountSelectionRequired: o,
            sheerIdProgramId: c
        } = e,
        l = Ce(),
        u = xe(),
        d = te(),
        {
            data: p,
            isFetching: m
        } = i(),
        ee = m !== void 0 && m,
        [h] = he(),
        g;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (g = f(), t[0] = g) : g = t[0];
    let _ = g,
        v = r?.id,
        y = r?.normalizedAccountUserId,
        re;
    t[1] === r ? re = t[2] : (re = r?.isPersonalAccount() ?? !1, t[1] = r, t[2] = re);
    let ie = re,
        [S, se] = (0, L.useState)(null),
        [ce, le] = (0, L.useState)(null),
        de, pe;
    t[3] !== v || t[4] !== y || t[5] !== ie || t[6] !== h ? (de = () => {
        let e = He(h);
        if (_ && ie && typeof v == `string` && typeof y == `string`) {
            let t = {
                accountId: v,
                accountUserId: y
            };
            e = Ve(t), e != null && h.get(`redirectedFromAuth`) === `true` && ze(`auth_completed`, {
                identity: t
            })
        }
        se(Le(e))
    }, pe = [v, y, _, ie, h], t[3] = v, t[4] = y, t[5] = ie, t[6] = h, t[7] = de, t[8] = pe) : (de = t[7], pe = t[8]), ue(de, pe);
    let me;
    t[9] === h ? me = t[10] : (me = Je(h), t[9] = h, t[10] = me);
    let C = me,
        ge;
    t[11] === h ? ge = t[12] : (ge = h.get(Pe), t[11] = h, t[12] = ge);
    let T = ge === `true`,
        _e = u.state != null && typeof u.state == `object` && `students2026VerificationError` in u.state && u.state.students2026VerificationError === !0,
        ve;
    t[13] === h ? ve = t[14] : (ve = Oe(h), t[13] = h, t[14] = ve);
    let ye = ve,
        be;
    t[15] === h ? be = t[16] : (be = st(h), t[15] = h, t[16] = be);
    let Se;
    t[17] !== c || t[18] !== be ? (Se = {
        ...We,
        sheerIdProgramId: c,
        landingPath: be
    }, t[17] = c, t[18] = be, t[19] = Se) : Se = t[19];
    let E = Se,
        Te;
    t[20] === p ? Te = t[21] : (Te = p.find(mt) ?? null, t[20] = p, t[21] = Te);
    let Ee = Te,
        ke;
    t[22] !== Ee || t[23] !== r || t[24] !== o ? (ke = _ && (r != null && !r.isPersonalAccount() || o && Ee != null), t[22] = Ee, t[23] = r, t[24] = o, t[25] = ke) : ke = t[25];
    let D = ke,
        je = (o || D) && Ee == null && ee,
        O = (o || D) && Ee == null && !ee,
        Ne;
    t[26] !== r || t[27] !== E.blocksMobileStoreSubscribers ? (Ne = _ && r != null && E.blocksMobileStoreSubscribers && Me(r), t[26] = r, t[27] = E.blocksMobileStoreSubscribers, t[28] = Ne) : Ne = t[28];
    let k = Ne,
        Be;
    t[29] === r ? Be = t[30] : (Be = _ && it(r), t[29] = r, t[30] = Be);
    let A = Be,
        [Ue, Ke] = (0, L.useState)(0),
        [Ye, Qe] = (0, L.useState)(!1),
        tt = (0, L.useRef)(null),
        rt = _ && r != null && !D && !k && !A,
        at;
    t[31] !== T || t[32] !== rt || t[33] !== Ue ? (at = {
        enabled: rt,
        shouldPollAfterSheerIdReturn: T,
        reportRefreshErrors: !0,
        recoverPendingVerification: !0,
        refreshRequestId: Ue
    }, t[31] = T, t[32] = rt, t[33] = Ue, t[34] = at) : at = t[34];
    let M = $e(E, at),
        {
            isLoading: N,
            modalErrorKind: P,
            modalErrorMessage: F,
            goUpgradeOffer: dt
        } = Ze(),
        I = (0, L.useRef)(null),
        _t = (0, L.useRef)(null),
        B = (0, L.useRef)(null),
        [St, Ct] = (0, L.useState)(null),
        [wt, Tt] = (0, L.useState)(!1),
        Et, Dt;
    t[35] === Symbol.for(`react.memo_cache_sentinel`) ? (Et = () => () => {
        B.current = null
    }, Dt = [], t[35] = Et, t[36] = Dt) : (Et = t[35], Dt = t[36]), (0, L.useEffect)(Et, Dt);
    let Ot;
    t[37] === Symbol.for(`react.memo_cache_sentinel`) ? (Ot = function() {
        _t.current = null, B.current = null, Ct(null), Tt(!1)
    }, t[37] = Ot) : Ot = t[37];
    let kt = Ot,
        At;
    t[38] === r ? At = t[39] : (At = function(e) {
        let t = b();
        return B.current === e && f() && r != null && t?.id === r.id && t?.normalizedAccountUserId === r.normalizedAccountUserId
    }, t[38] = r, t[39] = At);
    let V = At,
        [jt, Mt] = (0, L.useState)(null),
        [H, Nt] = (0, L.useState)(null),
        [Pt, Ft] = (0, L.useState)(!1),
        [It, Lt] = (0, L.useState)(null),
        [Rt, zt] = (0, L.useState)(!1),
        [Bt, Vt] = (0, L.useState)(!1),
        Ht, Ut;
    t[40] !== C || t[41] !== r ? (Ht = () => {
        if (!_ || C == null || r == null || !r.isPersonalAccount() || r.normalizedAccountUserId == null) return;
        let e = r.normalizedAccountUserId;
        Ge({
            accountId: r.id,
            accountUserId: e,
            status: C
        }) && Nt({
            accountId: r.id,
            accountUserId: e,
            status: C
        })
    }, Ut = [C, r, _], t[40] = C, t[41] = r, t[42] = Ht, t[43] = Ut) : (Ht = t[42], Ut = t[43]), ue(Ht, Ut);
    let Wt;
    t[44] !== H || t[45] !== r ? (Wt = H != null && _ && r != null && r.isPersonalAccount() && r.id === H.accountId && r.normalizedAccountUserId === H.accountUserId, t[44] = H, t[45] = r, t[46] = Wt) : Wt = t[46];
    let Gt = Wt,
        U = Gt ? H.status : null,
        Kt, qt;
    t[47] !== H || t[48] !== Gt ? (Kt = () => {
        H != null && !Gt && Nt(null)
    }, qt = [H, Gt], t[47] = H, t[48] = Gt, t[49] = Kt, t[50] = qt) : (Kt = t[49], qt = t[50]), ue(Kt, qt);
    let Jt = nt(M.name === `needs-verification` ? M.verificationId ?? null : null, M.name === `needs-verification` ? M.accountVerificationId ?? null : null, E, ye),
        Yt;
    t[51] === Symbol.for(`react.memo_cache_sentinel`) ? (Yt = {
        navigateOnSuccess: !1
    }, t[51] = Yt) : Yt = t[51];
    let W = et(M.name === `verified` ? M.accountVerificationId : ``, E, Yt),
        Xt;
    t[52] !== r || t[53] !== v || t[54] !== y || t[55] !== ce || t[56] !== M.accountVerificationId || t[57] !== M.name || t[58] !== M.verificationId || t[59] !== S || t[60] !== k || t[61] !== D || t[62] !== A || t[63] !== ye ? (Xt = ye == null && S === !0 && oe(`3006568523`) && !(ce != null && ce.accountId === v && ce.accountUserId === y) && _ && r != null && r.isFree() && !D && !k && !A && M.name === `needs-verification` && !M.verificationId && !M.accountVerificationId, t[52] = r, t[53] = v, t[54] = y, t[55] = ce, t[56] = M.accountVerificationId, t[57] = M.name, t[58] = M.verificationId, t[59] = S, t[60] = k, t[61] = D, t[62] = A, t[63] = ye, t[64] = Xt) : Xt = t[64];
    let G = Xt,
        Zt;
    t[65] !== W || t[66] !== r || t[67] !== l || t[68] !== G || t[69] !== V || t[70] !== N || t[71] !== A || t[72] !== P || t[73] !== d?.email ? (Zt = function(e) {
        let {
            emailVerified: t,
            acceptedOffer: n
        } = e === void 0 ? {} : e, i = t !== void 0 && t;
        if (A || _t.current != null || N || W.isCheckoutLoading) return;
        let a = Symbol(`students-activation`);
        _t.current = a;
        let o = r,
            c = !d?.email || P === `email_required` || i,
            u = () => {
                kt(), zt(!0), j.setModalError(l.formatMessage(z.emailRefreshError), `email_required`)
            };
        (async () => {
            if (!c) return !0;
            let e = Symbol(`students-email-recovery`);
            B.current = e, Tt(!0);
            try {
                if (!i) {
                    let t = await fe({
                        reason: `students_email_recovery`
                    });
                    if (!V(e)) return !1;
                    if (!t.ok) return u(), !1
                }
                if (!V(e)) return !1;
                let t = s();
                if (await t.cancelQueries({
                        queryKey: ae.queryKey,
                        exact: !0
                    }), !V(e)) return !1;
                let n = await t.fetchQuery({
                    ...ae,
                    staleTime: 0
                });
                return V(e) ? n.id === o?.authUserId ? n.email ? (Ct(null), Tt(!1), !0) : i ? (u(), !1) : (j.clearModalError(), zt(!1), Ct(e), Tt(!1), !1) : (kt(), !1) : !1
            } catch {
                return V(e) && u(), !1
            }
        })().then(async e => {
            if (!e || !f()) return;
            let t = b();
            if (o == null || t?.id !== o.id || t?.normalizedAccountUserId !== o.normalizedAccountUserId || c && (B.current == null || !V(B.current))) return;
            B.current = null, zt(!0), Mt(null);
            let r;
            if (G) {
                Qe(!0);
                let e = await Re.preverify2025Redeemer(),
                    t = b();
                if (t?.id !== o.id || t.normalizedAccountUserId !== o.normalizedAccountUserId) return;
                if (e.metadata == null) {
                    j.clearModalError(), le({
                        accountId: o.id,
                        accountUserId: o.normalizedAccountUserId
                    }), zt(!1);
                    return
                }
                if (e.metadata.enrollment_step !== `verified`) {
                    j.clearModalError(), Ke(pt), zt(!1);
                    return
                }
                if (typeof e.metadata.account_verification_id != `string` || e.metadata.account_verification_id.trim() === ``) throw Error(`2025 redeemer is not eligible for preverification`);
                r = e.metadata.account_verification_id
            }
            await W(n, r == null ? void 0 : {
                accountVerificationId: r
            }) != null && o != null && Mt(o)
        }).catch(() => {
            let e = b();
            o != null && e?.id === o.id && e?.normalizedAccountUserId === o.normalizedAccountUserId && j.setModalError(l.formatMessage(z.activationErrorDescription))
        }).finally(() => {
            Qe(!1), _t.current === a && (_t.current = null)
        })
    }, t[65] = W, t[66] = r, t[67] = l, t[68] = G, t[69] = V, t[70] = N, t[71] = A, t[72] = P, t[73] = d?.email, t[74] = Zt) : Zt = t[74];
    let K = Zt,
        Qt;
    t[75] !== M.name || t[76] !== M.verificationId || t[77] !== Bt ? (Qt = M.name === `needs-verification` && !!M.verificationId && (Bt || lt()), t[75] = M.name, t[76] = M.verificationId, t[77] = Bt, t[78] = Qt) : Qt = t[78];
    let q = Qt,
        J = M.name === `needs-verification` && M.verificationStatus === `pending` && !!M.verificationId && !!M.accountVerificationId,
        $t = J || T && (M.name === `needs-verification` || M.name === `error` && M.cause === `refresh`),
        en, tn;
    t[79] !== $t || t[80] !== v || t[81] !== k || t[82] !== D || t[83] !== A ? (en = () => {
        if (!_ || v == null || D || k || A || !$t) return;
        let e, t = () => {
            window.clearTimeout(e), !(document.visibilityState === `hidden` || !navigator.onLine) && (e = window.setTimeout(() => {
                document.visibilityState !== `hidden` && navigator.onLine && (tt.current = performance.now(), Ke(ft))
            }, tt.current == null ? 0 : Math.max(0, 15e3 - (performance.now() - tt.current))))
        };
        return window.addEventListener(`focus`, t), window.addEventListener(`online`, t), document.addEventListener(`visibilitychange`, t), () => {
            window.clearTimeout(e), window.removeEventListener(`focus`, t), window.removeEventListener(`online`, t), document.removeEventListener(`visibilitychange`, t)
        }
    }, tn = [$t, v, _, k, A, D], t[79] = $t, t[80] = v, t[81] = k, t[82] = D, t[83] = A, t[84] = en, t[85] = tn) : (en = t[84], tn = t[85]), (0, L.useEffect)(en, tn);
    let nn, rn;
    t[86] !== r || t[87] !== M.name || t[88] !== Rt || t[89] !== G || t[90] !== k || t[91] !== D || t[92] !== A || t[93] !== q || t[94] !== F || t[95] !== T || t[96] !== _e ? (nn = () => {
        !_ || r == null || D || k || A || T || _e || q || G && Rt || F == null || M.name !== `needs-verification` || I.current === `verify` || j.clearModalError()
    }, rn = [r, M.name, _, k, A, D, q, G, Rt, F, T, _e], t[86] = r, t[87] = M.name, t[88] = Rt, t[89] = G, t[90] = k, t[91] = D, t[92] = A, t[93] = q, t[94] = F, t[95] = T, t[96] = _e, t[97] = nn, t[98] = rn) : (nn = t[97], rn = t[98]), ue(nn, rn);
    let an, on;
    t[99] === Symbol.for(`react.memo_cache_sentinel`) ? (an = () => {
        let e = e => {
            e.persisted && (Vt(!0), window.location.reload())
        };
        return window.addEventListener(`pageshow`, e), () => window.removeEventListener(`pageshow`, e)
    }, on = [], t[99] = an, t[100] = on) : (an = t[99], on = t[100]), (0, L.useEffect)(an, on);
    let sn, cn;
    t[101] !== T || t[102] !== E.landingPath ? (sn = () => {
        _ || I.current === `auth` || (I.current = `auth`, ze(`sign_in_started`), n({
            fallbackScreenHint: `login`,
            callbackUrl: De(Ie(E.landingPath), T ? Pe : we)
        }))
    }, cn = [_, T, E.landingPath], t[101] = T, t[102] = E.landingPath, t[103] = sn, t[104] = cn) : (sn = t[103], cn = t[104]), (0, L.useEffect)(sn, cn);
    let ln, un;
    t[105] !== U || t[106] !== r || t[107] !== M.name || t[108] !== G || t[109] !== S || t[110] !== N || t[111] !== k || t[112] !== D || t[113] !== A || t[114] !== q || t[115] !== J || t[116] !== F || t[117] !== T || t[118] !== Jt ? (ln = () => {
        !_ || r == null || N || D || k || A || T || U != null || q || J || S == null || G || F || M.name !== `needs-verification` || I.current === `verify` || (I.current = `verify`, Jt())
    }, un = [r, U, M.name, N, _, k, A, D, q, J, S, G, F, T, Jt], t[105] = U, t[106] = r, t[107] = M.name, t[108] = G, t[109] = S, t[110] = N, t[111] = k, t[112] = D, t[113] = A, t[114] = q, t[115] = J, t[116] = F, t[117] = T, t[118] = Jt, t[119] = ln, t[120] = un) : (ln = t[119], un = t[120]), (0, L.useEffect)(ln, un);
    let dn = M.name === `coming-soon`,
        Y = D || k || A || dn,
        fn = _ && !Y && M.name === `verified`,
        pn = fn || G,
        X = _ && !Y && M.name === `enrolled`,
        mn;
    t[121] !== r || t[122] !== X ? (mn = X && r != null && (!r.isPlus() || !r.hasPaidSubscription()), t[121] = r, t[122] = X, t[123] = mn) : mn = t[123];
    let hn = mn,
        gn = U != null && X && r != null && r.isPlus() && r.hasPaidSubscription(),
        _n = jt != null && r != null && r.id === jt.id && r.normalizedAccountUserId === jt.normalizedAccountUserId,
        vn = _n && r != null && r.isPlus() && r.hasPaidSubscription(),
        yn = _n && !vn,
        Z = vn || gn,
        bn = U != null && M.name !== `loading` && !gn,
        xn = bn && fn && r != null && r.isPlus() && r.hasPaidSubscription(),
        Sn = hn || xn || (U === `failure` || yn) && X && !gn,
        Cn = dt?.accountId === r?.id && dt?.accountUserId === r?.normalizedAccountUserId && fn && !Z ? dt?.offer : void 0,
        Q = !Z && (hn || bn || (pn || X) && Rt && (F != null || yn)),
        $ = pn && !Z && !Q && Cn == null,
        wn;
    t[124] !== r || t[125] !== M.name || t[126] !== M.partnerId || t[127] !== $ ? (wn = $ && M.name === `verified` && M.partnerId === `handshake` && r != null && r.isPlus() && r.hasPaidSubscription(), t[124] = r, t[125] = M.name, t[126] = M.partnerId, t[127] = $, t[128] = wn) : wn = t[128];
    let Tn = wn,
        En = !A && Q && P === `discount_conflict`,
        Dn = r != null && pn && !Z && !Sn && !En,
        On, kn;
    t[129] === Dn ? (On = t[130], kn = t[131]) : (On = () => {
        if (!Dn) return;
        let e = new AbortController;
        return Fe(`chatgpt_checkout`, {
            signal: e.signal
        }), () => e.abort()
    }, kn = [Dn], t[129] = Dn, t[130] = On, t[131] = kn), (0, L.useEffect)(On, kn), ue(() => {
        if (!Z || r == null) return;
        let e = Ae(r);
        Lt(e ? r : null), Ft(e)
    }, [r, Z]);
    let An = pn || X,
        jn = M.name === `needs-verification` && (T || q || J),
        Mn = jn && M.name === `needs-verification` && !!M.verificationId && !!M.accountVerificationId && r != null && !Y && !a && !O && F == null,
        Nn = a || O || M.name === `error` || jn || F != null && !An,
        Pn = ut({
            isLoggedIn: _,
            isProSubscription: A,
            isMobileStoreSubscription: k,
            isPersonalWorkspaceRequired: D && !O && !je,
            isEnrolled: X,
            isVerified: pn,
            hasActivatedOffer: Z,
            hasActivationError: Q,
            requiresActivationSupport: Sn,
            isVerificationPending: Mn,
            canRestartVerification: J,
            hasError: Nn,
            isUnavailable: dn
        }),
        Fn = je || !An && !Y && !Nn && _,
        In = _ && (!Y || O) && (!An && Nn || Q && !Sn && P !== `go_upgrade_unavailable` && !En),
        Ln = _ && (!Y || O) && (Sn || En || Q && P === `go_upgrade_unavailable`),
        Rn = _ && (!Y || O) && (!An && Nn || Q),
        zn = Q && (wt || Ye || W.isCheckoutLoading),
        Bn;
    t[132] !== r || t[133] !== Pt || t[134] !== It?.id || t[135] !== It?.normalizedAccountUserId ? (Bn = Pt && r != null && r.isPersonalAccount() && r.id === It?.id && r.normalizedAccountUserId === It?.normalizedAccountUserId, t[132] = r, t[133] = Pt, t[134] = It?.id, t[135] = It?.normalizedAccountUserId, t[136] = Bn) : Bn = t[136];
    let Vn = Bn,
        Hn = D ? Ee : null,
        Un = A || In || Ln || $ || (X || Z) && !Q,
        Wn = X && !Z && !Q ? d?.email : void 0,
        Gn;
    t[137] !== l || t[138] !== Fn ? (Gn = Fn ? (0, R.jsx)(`span`, {
        "aria-label": l.formatMessage(z.verifyingTitle),
        className: `bg-token-text-primary mb-6 size-6 animate-pulse rounded-full motion-reduce:animate-none`,
        role: `status`
    }) : null, t[137] = l, t[138] = Fn, t[139] = Gn) : Gn = t[139];
    let Kn;
    t[140] !== l || t[141] !== $ ? (Kn = $ ? (0, R.jsx)(`img`, {
        alt: l.formatMessage(z.verifiedIllustrationAlt),
        className: `mb-6 w-full max-w-44 object-contain sm:mb-14 sm:max-w-[360px]`,
        height: 400,
        src: bt,
        width: 403
    }) : null, t[140] = l, t[141] = $, t[142] = Kn) : Kn = t[142];
    let qn = Z ? `text-token-text-tertiary mt-4 text-base leading-normal font-medium tracking-[-0.2px]` : `text-token-text-secondary mt-2 text-base`,
        Jn = l.formatMessage(Wn ? z.alreadyClaimedDescriptionWithAccount : Q && P === `go_upgrade_unavailable` ? z.goUpgradeUnavailableDescription : En ? z.discountConflictDescription : Q && P === `email_required` ? z.emailRefreshError : Pn.description),
        Yn;
    t[143] !== qn || t[144] !== Jn ? (Yn = (0, R.jsx)(`p`, {
        className: qn,
        children: Jn
    }), t[143] = qn, t[144] = Jn, t[145] = Yn) : Yn = t[145];
    let Xn;
    t[146] === Tn ? Xn = t[147] : (Xn = Tn ? (0, R.jsx)(`p`, {
        className: `text-token-text-secondary mt-4 text-sm`,
        children: (0, R.jsx)(w, {
            ...z.existingPlusNoAutoRenewalDisclosure
        })
    }) : null, t[146] = Tn, t[147] = Xn);
    let Zn;
    t[148] !== K || t[149] !== Cn || t[150] !== M.name || t[151] !== M.partnerId || t[152] !== N ? (Zn = Cn == null ? null : (0, R.jsx)(ot, {
        offer: Cn,
        turnOffAutoRenewal: M.name === `verified` && M.partnerId === `handshake`,
        isLoading: N,
        onConfirm: () => K({
            acceptedOffer: Cn
        }),
        onDismiss: () => {
            j.clearModalError(), zt(!1)
        }
    }), t[148] = K, t[149] = Cn, t[150] = M.name, t[151] = M.partnerId, t[152] = N, t[153] = Zn) : Zn = t[153];
    let Qn;
    t[154] === Wn ? Qn = t[155] : (Qn = Wn ? (0, R.jsx)(`p`, {
        className: `bg-token-bg-tertiary text-token-text-secondary mt-4 max-w-full rounded-lg px-4 py-2 text-sm font-medium break-all`,
        children: Wn
    }) : null, t[154] = Wn, t[155] = Qn);
    let $n;
    t[156] !== u.pathname || t[157] !== u.search || t[158] !== Hn ? ($n = Hn ? (0, R.jsx)(`div`, {
        className: `mt-8 w-full text-start`,
        children: (0, R.jsx)(Xe, {
            className: `max-sm:[&_[role=radio]]:min-h-12!`,
            data: [Hn],
            redirectUrl: `${u.pathname}${u.search}`
        })
    }) : null, t[156] = u.pathname, t[157] = u.search, t[158] = Hn, t[159] = $n) : $n = t[159];
    let er;
    t[160] !== Q || t[161] !== An || t[162] !== Y || t[163] !== P || t[164] !== F ? (er = F && (!An || Q && P === `verification`) && !Y && _ ? (0, R.jsx)(`p`, {
        className: `text-interactive-label-warning-secondary mt-4`,
        role: `alert`,
        children: F
    }) : null, t[160] = Q, t[161] = An, t[162] = Y, t[163] = P, t[164] = F, t[165] = er) : er = t[165];
    let tr;
    t[166] !== K || t[167] !== pn || t[168] !== U || t[169] !== W || t[170] !== r || t[171] !== M.cause || t[172] !== M.name || t[173] !== Z || t[174] !== Q || t[175] !== Vn || t[176] !== O || t[177] !== Un || t[178] !== a || t[179] !== zn || t[180] !== wt || t[181] !== X || t[182] !== N || t[183] !== Ye || t[184] !== A || t[185] !== q || t[186] !== J || t[187] !== Mn || t[188] !== T || t[189] !== $ || t[190] !== Ln || t[191] !== In || t[192] !== Rn || t[193] !== Jt ? (tr = Un ? (0, R.jsxs)(`div`, {
        className: `max-sm:bg-token-bg-primary contents max-sm:flex max-sm:w-full max-sm:flex-none max-sm:flex-col max-sm:pt-4 max-sm:pb-[max(24px,env(safe-area-inset-bottom))]`,
        children: [In || Ln ? (0, R.jsxs)(`div`, {
            className: Rn ? `mt-10 flex flex-wrap justify-center gap-4 max-sm:mt-0 max-sm:w-full max-sm:flex-col max-sm:gap-3` : `mt-8 max-sm:mt-0 max-sm:w-full`,
            children: [In ? (0, R.jsx)(x, {
                "aria-disabled": zn || void 0,
                className: xt,
                loading: N || zn,
                size: `large`,
                type: `button`,
                visuallyDisabled: zn,
                onClick: () => {
                    if (Q) {
                        pn && (U === `failure` && r != null && qe({
                            accountId: r.id,
                            accountUserId: r.normalizedAccountUserId,
                            status: `failure`
                        }), K());
                        return
                    }
                    if (a || O || M.name === `error` && M.cause === `refresh`) {
                        window.location.reload();
                        return
                    }
                    I.current = `verify`, Jt()
                },
                children: Mn || q && !T ? (0, R.jsx)(w, {
                    ...z.resumeVerification
                }) : (0, R.jsx)(w, {
                    ...z.tryAgain
                })
            }) : null, Mn && J ? (0, R.jsx)(x, {
                className: xt,
                color: `secondary`,
                loading: N,
                size: `large`,
                type: `button`,
                onClick: () => {
                    I.current = `verify`, Jt({
                        restart: !0
                    })
                },
                children: (0, R.jsx)(w, {
                    ...z.startNewVerification
                })
            }) : null, Ln || Rn && !Mn && !Q ? (0, R.jsx)(x, {
                as: `a`,
                className: xt,
                color: `secondary`,
                openNewTab: !0,
                rel: `noopener noreferrer`,
                size: `large`,
                to: `https://help.openai.com`,
                children: (0, R.jsx)(w, {
                    ...z.contactSupport
                })
            }) : null]
        }) : null, $ ? (0, R.jsx)(x, {
            "aria-disabled": Ye || W.isCheckoutLoading || void 0,
            className: `mt-8 max-sm:mt-0 ${xt}`,
            loading: N || wt || Ye || W.isCheckoutLoading,
            size: `large`,
            type: `button`,
            visuallyDisabled: Ye || W.isCheckoutLoading,
            onClick: () => void K(),
            children: (0, R.jsx)(w, {
                ...z.activateOffer
            })
        }) : null, A || (X || Z) && !Q ? (0, R.jsx)(x, {
            as: `a`,
            className: `${Z?`mt-6`:`mt-8`} max-sm:mt-0 ${xt}`,
            size: `large`,
            to: Z ? ct(Vn) : `/`,
            onClick: () => {
                U == null || r == null || qe({
                    accountId: r.id,
                    accountUserId: r.normalizedAccountUserId,
                    status: U
                })
            },
            children: (0, R.jsx)(w, {
                ...A ? z.proSubscriptionOpenChatGPT : z.openChatGPT
            })
        }) : null]
    }) : null, t[166] = K, t[167] = pn, t[168] = U, t[169] = W, t[170] = r, t[171] = M.cause, t[172] = M.name, t[173] = Z, t[174] = Q, t[175] = Vn, t[176] = O, t[177] = Un, t[178] = a, t[179] = zn, t[180] = wt, t[181] = X, t[182] = N, t[183] = Ye, t[184] = A, t[185] = q, t[186] = J, t[187] = Mn, t[188] = T, t[189] = $, t[190] = Ln, t[191] = In, t[192] = Rn, t[193] = Jt, t[194] = tr) : tr = t[194];
    let nr;
    return t[195] !== K || t[196] !== St || t[197] !== l || t[198] !== V ? (nr = St == null ? null : (0, R.jsx)(ne, {
        testId: `modal-add-email`,
        isOpen: !0,
        onClose: kt,
        title: l.formatMessage(z.addEmailTitle),
        visuallyHiddenHeader: !0,
        type: `success`,
        className: `max-w-sm`,
        children: (0, R.jsx)(gt, {
            enterEmailTitle: l.formatMessage(z.addEmailTitle),
            enterEmailDescription: l.formatMessage(z.addEmailDescription),
            onVerified: () => {
                V(St) && (Ct(null), K({
                    emailVerified: !0
                }))
            },
            cancelFlowButton: (0, R.jsx)(x, {
                type: `button`,
                className: `w-full rounded-md`,
                color: `secondary`,
                onClick: kt,
                children: (0, R.jsx)(w, {
                    ...z.cancelAddEmail
                })
            })
        })
    }), t[195] = K, t[196] = St, t[197] = l, t[198] = V, t[199] = nr) : nr = t[199], (0, R.jsxs)(`main`, {
        className: `bg-token-bg-primary flex min-h-[calc(100svh-var(--mkt-header-height))] items-center justify-center px-6 py-12 max-sm:h-[calc(100svh-var(--mkt-header-height))] max-sm:min-h-0 max-sm:items-stretch max-sm:overflow-hidden max-sm:py-0`,
        children: [(0, R.jsxs)(`section`, {
            className: Z ? `flex w-full max-w-[569px] flex-col items-center text-center max-sm:h-full max-sm:min-h-0` : `flex w-full max-w-xl flex-col items-center text-center max-sm:h-full max-sm:min-h-0`,
            children: [(0, R.jsx)(`div`, {
                className: `contents max-sm:flex max-sm:min-h-0 max-sm:w-full max-sm:flex-1 max-sm:flex-col max-sm:overflow-y-auto`,
                children: (0, R.jsxs)(`div`, {
                    className: `contents max-sm:my-auto max-sm:flex max-sm:w-full max-sm:flex-none max-sm:flex-col max-sm:items-center max-sm:py-6`,
                    children: [Gn, Kn, Z ? (0, R.jsx)(`img`, {
                        alt: l.formatMessage(z.activatedIllustrationAlt),
                        className: `mb-14 w-full max-w-[402px] object-contain max-sm:mb-6 max-sm:max-w-48`,
                        height: 400,
                        src: vt,
                        width: 402
                    }) : null, A || Rn || X && !Z ? (0, R.jsx)(`img`, {
                        alt: A || En ? `` : l.formatMessage(z.verificationErrorIllustrationAlt),
                        className: `mb-8 size-[200px] object-contain max-sm:mb-4 max-sm:size-32`,
                        height: 200,
                        src: yt,
                        width: 200
                    }) : null, (0, R.jsx)(`h1`, {
                        "aria-atomic": `true`,
                        "aria-live": `polite`,
                        className: Z ? `text-[30px] leading-none font-semibold tracking-[-0.3px]` : `text-3xl font-semibold`,
                        children: l.formatMessage(Pn.title)
                    }), Yn, Xn, Zn, Qn, $n, er]
                })
            }), tr]
        }), nr]
    })
}

function ft(e) {
    return e + 1
}

function pt(e) {
    return e + 1
}

function mt(e) {
    return e.isPersonalAccount() && e.canAccessWithCurrentSession
}
var ht, L, R, gt, _t, vt, yt, bt, xt, z, B = e((() => {
        ht = E(), d(), Ye(), r(), F(), _(), ce(), re(), p(), S(), a(), g(), k(), tt(), Ue(), Qe(), A(), Ke(), je(), rt(), ke(), u(), Ne(), O(), de(), le(), L = t(ve()), T(), pe(), R = C(), Se(), gt = m(() => be(() => import(`./c2675c8c-ig7dykzhv7vbqkt7.js`).then(e => (e.vt(), e._t)).then(e => e.EmailVerify), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]))), _t = `774192260`, vt = `https://cdn.openai.com/chatgpt/ctf-cdn/students-2026/offer-activated-c7b3af131a6e.webp`, yt = `https://cdn.openai.com/chatgpt/ctf-cdn/students-2026/verification-error-3efe3d7e397a.svg`, bt = `https://cdn.openai.com/chatgpt/ctf-cdn/students-2026/verification-success-8ef5336c384d.svg`, xt = `max-sm:mx-auto max-sm:h-12 max-sm:min-h-12! max-sm:w-full max-sm:max-w-72 max-sm:text-base! max-sm:font-semibold!`, z = ge({
            addEmailTitle: {
                id: `AccountPaymentModal.primaryCTA.addEmailTitle`,
                defaultMessage: `Email required`
            },
            addEmailDescription: {
                id: `AccountPaymentModal.primaryCTA.addEmailDescription`,
                defaultMessage: `You'll be able to login with this email. It will also be used for account updates (like password resets) and information about OpenAI services.`
            },
            cancelAddEmail: {
                id: `AccountPaymentModal.primaryCTA.cancelAddEmail`,
                defaultMessage: `Cancel`
            },
            emailRefreshError: {
                id: `chatgpt.students.back_to_school_2026.email.account_refresh_error`,
                defaultMessage: `We couldn’t confirm an email on your ChatGPT account. Please try again to add or verify your email and continue.`
            },
            signingInTitle: {
                id: `chatgpt.students.back_to_school_2026.claim.sign_in.title`,
                defaultMessage: `Redirecting to sign in`
            },
            signingInDescription: {
                id: `chatgpt.students.back_to_school_2026.claim.sign_in.description`,
                defaultMessage: `Sign in to your ChatGPT account before verifying your student status.`
            },
            verifyingTitle: {
                id: `chatgpt.students.back_to_school_2026.claim.verifying.title`,
                defaultMessage: `Verifying your student status`
            },
            verifyingDescription: {
                id: `chatgpt.students.back_to_school_2026.claim.verifying.description`,
                defaultMessage: `This may take a minute. Please keep this page open.`
            },
            verificationPendingTitle: {
                id: `chatgpt.students.back_to_school_2026.claim.pending.title`,
                defaultMessage: `Your student verification is still in progress.`
            },
            verificationPendingDescription: {
                id: `chatgpt.students.back_to_school_2026.claim.pending.description`,
                defaultMessage: `Return to verification to finish, or check back soon if you’ve submitted your information.`
            },
            verificationRestartDescription: {
                id: `chatgpt.students.back_to_school_2026.claim.pending.restart_description`,
                defaultMessage: `Resume your existing verification, or start a new one if you need to update your information.`
            },
            verifiedTitle: {
                id: `chatgpt.students.back_to_school_2026.claim.verified.title`,
                defaultMessage: `You’re verified as a student`
            },
            verifiedDescription: {
                id: `chatgpt.students.back_to_school_2026.claim.verified.description.four_month.work`,
                defaultMessage: `Next, claim your free four months of ChatGPT Work.`
            },
            verifiedIllustrationAlt: {
                id: `chatgpt.students.back_to_school_2026.claim.verified.illustration.alt`,
                defaultMessage: `Colorful illustration celebrating successful student verification`
            },
            activatedTitle: {
                id: `chatgpt.students.back_to_school_2026.claim.activated.title.upgrade`,
                defaultMessage: `Congrats! You got an upgrade.`
            },
            activatedDescription: {
                id: `chatgpt.students.back_to_school_2026.claim.activated.description.upgrade`,
                defaultMessage: `You now have a free subscription to ChatGPT Plus to access Work and other features. Learn how you can make the most of it this semester.`
            },
            activatedIllustrationAlt: {
                id: `chatgpt.students.back_to_school_2026.claim.activated.illustration.alt`,
                defaultMessage: `Colorful illustration celebrating an activated student offer`
            },
            activateOffer: {
                id: `chatgpt.students.back_to_school_2026.claim.verified.activate_offer`,
                defaultMessage: `Activate offer`
            },
            existingPlusNoAutoRenewalDisclosure: {
                id: `chatgpt.students.back_to_school_2026.claim.verified.existing_plus.no_auto_renewal`,
                defaultMessage: `Activate this offer to get 4 months free on your current Plus subscription. Your subscription will end after the free period and won’t renew automatically.`
            },
            activationErrorTitle: {
                id: `chatgpt.students.back_to_school_2026.claim.activation_error.title`,
                defaultMessage: `We couldn’t activate your offer`
            },
            goUpgradeUnavailableDescription: {
                id: `chatgpt.students.back_to_school_2026.go_upgrade.unavailable`,
                defaultMessage: `We can’t activate the student offer on this subscription here. Please check your current plan in Settings or contact support for help.`
            },
            discountConflictDescription: {
                id: `chatgpt.students.back_to_school_2026.claim.discount_conflict.description`,
                defaultMessage: `Your subscription already has a discount that can’t be combined with this student offer. Your current discount and subscription haven’t been changed.`
            },
            activationErrorDescription: {
                id: `chatgpt.students.back_to_school_2026.claim.activation_error.description`,
                defaultMessage: `Offer activation failed. Please try again later.`
            },
            activationSupportDescription: {
                id: `chatgpt.students.back_to_school_2026.claim.activation_error.support_description`,
                defaultMessage: `Your checkout didn’t finish, and this offer can’t be retried here. Please contact support.`
            },
            verificationErrorTitle: {
                id: `chatgpt.students.back_to_school_2026.claim.error.title`,
                defaultMessage: `We couldn’t verify your eligibility`
            },
            verificationErrorDescription: {
                id: `chatgpt.students.back_to_school_2026.claim.error.description`,
                defaultMessage: `We couldn’t confirm that you’re eligible for the student offer. If you think this is a mistake, please contact support.`
            },
            verificationErrorIllustrationAlt: {
                id: `chatgpt.students.back_to_school_2026.claim.error.illustration.alt`,
                defaultMessage: `Blue chat bubble with an exclamation mark representing a verification issue`
            },
            contactSupport: {
                id: `chatgpt.students.back_to_school_2026.claim.error.contact_support`,
                defaultMessage: `Contact support`
            },
            alreadyClaimedTitle: {
                id: `chatgpt.students.back_to_school_2026.claim.enrolled.title`,
                defaultMessage: `You’ve already claimed this offer`
            },
            alreadyClaimedDescription: {
                id: `chatgpt.students.back_to_school_2026.claim.enrolled.description`,
                defaultMessage: `Your student offer is active on your account.`
            },
            alreadyClaimedDescriptionWithAccount: {
                id: `chatgpt.students.back_to_school_2026.claim.enrolled.description.with_account`,
                defaultMessage: `Your student offer is active on your account:`
            },
            openChatGPT: {
                id: `chatgpt.students.back_to_school_2026.claim.enrolled.open_chatgpt.button.label`,
                defaultMessage: `Open ChatGPT`
            },
            personalWorkspaceTitle: {
                id: `chatgpt.students.back_to_school_2026.claim.personal_workspace.title`,
                defaultMessage: `Switch to your personal workspace`
            },
            personalWorkspaceDescription: {
                id: `chatgpt.students.back_to_school_2026.claim.personal_workspace.description`,
                defaultMessage: `This offer is available only for your personal ChatGPT account.`
            },
            proSubscriptionOpenChatGPT: {
                id: `chatgpt.students.back_to_school_2026.claim.pro_subscription.open_chatgpt.button.label`,
                defaultMessage: `Open ChatGPT`
            },
            proSubscriptionTitle: {
                id: `chatgpt.students.back_to_school_2026.claim.pro_subscription.title`,
                defaultMessage: `This subscription isn’t eligible`
            },
            proSubscriptionDescription: {
                id: `chatgpt.students.back_to_school_2026.claim.pro_subscription.description`,
                defaultMessage: `This student offer is for ChatGPT Plus and isn’t available with your current Pro or Pro Lite subscription. Your subscription hasn’t been changed.`
            },
            unsupportedSubscriptionTitle: {
                id: `chatgpt.students.back_to_school_2026.claim.mobile_subscription.title`,
                defaultMessage: `This subscription isn’t eligible`
            },
            unsupportedSubscriptionDescription: {
                id: `chatgpt.students.back_to_school_2026.claim.mobile_subscription.description.recovery`,
                defaultMessage: `This offer can’t be applied to App Store or Google Play subscriptions. Cancel through the store where you subscribed; you’ll keep Plus until your current billing period ends. Then return to check whether the offer is still available.`
            },
            offerUnavailableTitle: {
                id: `chatgpt.students.back_to_school_2026.claim.unavailable.title`,
                defaultMessage: `Offer unavailable`
            },
            offerUnavailableDescription: {
                id: `chatgpt.students.back_to_school_2026.claim.unavailable.description`,
                defaultMessage: `This student offer isn’t available for your account.`
            },
            resumeVerification: {
                id: `chatgpt.students.back_to_school_2026.claim.resume_verification`,
                defaultMessage: `Resume verification`
            },
            startNewVerification: {
                id: `chatgpt.students.back_to_school_2026.claim.start_new_verification`,
                defaultMessage: `Start a new verification`
            },
            tryAgain: {
                id: `chatgpt.students.back_to_school_2026.claim.try_again`,
                defaultMessage: `Try again`
            }
        })
    })),
    St, Ct, wt, Tt, Et, Dt, Ot = e((() => {
        pe(), St = E(), at(), B(), se(), Ct = C(), wt = {
            hasRouteMeta: !0
        }, Tt = () => [{
            title: `Student verification | ChatGPT`
        }, {
            name: `robots`,
            content: `noindex, nofollow`
        }], Et = _e(function() {
            "use forget";
            let e = (0, St.c)(6),
                {
                    headerNavData: t,
                    locale: n,
                    sheerIdProgramId: r
                } = me(),
                i;
            e[0] === r ? i = e[1] : (i = (0, Ct.jsx)(dt, {
                sheerIdProgramId: r
            }), e[0] = r, e[1] = i);
            let a;
            return e[2] !== t || e[3] !== n || e[4] !== i ? (a = (0, Ct.jsx)(M, {
                headerNavData: t,
                locale: n,
                slug: `students/claim`,
                children: i
            }), e[2] = t, e[3] = n, e[4] = i, e[5] = a) : a = e[5], a
        }), Dt = ye(ie)
    }));
e((() => {
    Ot()
}))();
export {
    Dt as ErrorBoundary, Et as
    default, wt as handle, Tt as meta
};
//# sourceMappingURL=students_.claim-c2j8plhw.js.map