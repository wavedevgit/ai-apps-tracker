import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as n,
    Btt as r,
    C1 as ee,
    Dit as te,
    Ett as ne,
    G2 as i,
    Htt as re,
    J2 as ie,
    K2 as ae,
    My as oe,
    Nrt as se,
    Prt as ce,
    QL as le,
    Qit as ue,
    S1 as de,
    Ttt as fe,
    Y2 as pe,
    _1 as me,
    _tt as he,
    a7 as ge,
    b5 as _e,
    dm as ve,
    eR as ye,
    iat as a,
    jy as be,
    kT as o,
    kit as s,
    l7 as c,
    pnt as xe,
    u1 as l,
    um as u,
    vtt as Se,
    y5 as d,
    ynt as Ce
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as f,
    Bn as we,
    Ln as Te,
    Nn as p,
    Rn as Ee,
    Ut as De,
    Vn as Oe,
    jt as ke,
    wn as m,
    zn as Ae
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Frt as je,
    Hu as Me,
    Irt as Ne,
    QGn as Pe,
    Ssn as Fe,
    Uu as Ie,
    ZGn as Le,
    b8 as Re,
    wsn as ze,
    x8 as Be
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Fv as Ve,
    Iv as He,
    _l as Ue,
    gl as We,
    hv as Ge,
    mv as Ke
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    gp as qe,
    mp as Je
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    Dh as Ye,
    Th as Xe
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    a as Ze,
    c as Qe,
    n as $e,
    o as et,
    s as tt,
    t as nt
} from "./0030787a-cheu7r0np8yob1mg.js";
import {
    n as rt,
    t as it
} from "./07c2dfe6-c23j2n6mlnimrpf6.js";
import {
    n as at,
    t as ot
} from "./dd53ca11-idgt18k3cadtex3q.js";
var st, ct = e((() => {
    c(), st = e => ge.safePost(`/accounts/create_quorum_workspace`, {
        requestBody: e
    })
}));

function lt(e) {
    let t = new URLSearchParams(e),
        n = t.get(`source`),
        r = t.get(`beacon_id`);
    if (!(!n && !r)) return {
        ...n ? {
            source: n
        } : {},
        ...r ? {
            beacon_id: r
        } : {}
    }
}

function ut(e, t) {
    if (!t) return e;
    let n = e ? {
        ...e
    } : {};
    return Object.assign(n, t), n
}

function h() {
    "use forget";
    let e = (0, Ct.c)(268),
        t = Ae(),
        n = xe(`1498338261`),
        i = ke(),
        re = (0, g.useRef)(null),
        oe = (0, g.useRef)(null),
        se = (0, g.useRef)(!1),
        le = (0, g.useRef)(!1),
        pe = (0, g.useRef)(!1),
        he = (0, g.useRef)(!1),
        _e = (0, g.useRef)(!1),
        ve = (0, g.useRef)(!1),
        [a, s] = (0, g.useState)(() => n ? [] : [0]),
        [c, l] = (0, g.useState)(!1),
        [u, Ce] = (0, g.useState)(!1),
        [f, we] = (0, g.useState)(null),
        [Te, Ee] = (0, g.useState)(!1),
        [De, Oe] = (0, g.useState)(!1),
        [m, Me] = (0, g.useState)(!1),
        [Ne, Pe] = (0, g.useState)(null),
        [ze, Be] = (0, g.useState)(null),
        [He, Ue] = (0, g.useState)(!1),
        [Ke, Je] = (0, g.useState)(!1),
        [Ye, et] = (0, g.useState)(``),
        [nt, rt] = (0, g.useState)(null),
        [at, ct] = (0, g.useState)(!1),
        [h, Dt] = (0, g.useState)(!1),
        [Ot, b] = (0, g.useState)(null),
        {
            enrollmentState: x,
            refreshEnrollmentStatus: S,
            isRefreshing: At
        } = $e(),
        C = de(),
        w = ee(),
        jt = ye(),
        Mt = xe(`2369709783`),
        Nt;
    e[0] === i.search ? Nt = e[1] : (Nt = () => fe() && (window.webkit?.messageHandlers?.hmpWorkspaceCreated !== void 0 || new URLSearchParams(i.search).get(`native_deferred_persona_verification`) === `true`), e[0] = i.search, e[1] = Nt);
    let T = ae(Nt, St),
        Pt;
    e[2] !== i.search || e[3] !== T ? (Pt = T && new URLSearchParams(i.search).get(`complete_persona_verification`) === `true`, e[2] = i.search, e[3] = T, e[4] = Pt) : Pt = e[4];
    let E = Pt,
        D = E ? w?.id : void 0,
        Ft = at && x.name === `needs-verification`,
        It;
    e[5] === T ? It = e[6] : (It = !fe() || T, e[5] = T, e[6] = It);
    let Lt = It,
        O = !Ft && Lt && (x.name === `needs-verification` || x.name === `pending` && x.deferredVerification === !0 || nt !== null) && xe(`1588629910`),
        k = O && (nt !== null || x.name === `pending` && x.deferredVerification === !0 && !!x.npi),
        Rt = c && !Te,
        A = tt(x),
        j = A || x.name === `failed`,
        M = !k && (x.name === `pending` || x.name === `failed` || Ft),
        zt = !!C.data,
        N, Bt;
    if (e[7] !== C.data?.accountItems || e[8] !== w?.id) {
        let t = C.data?.accountItems.filter(xt) ?? [];
        N = (t[0] ?? null) !== null;
        let n = t.filter(bt);
        Bt = n.find(e => e.id === w?.id) ?? n[0], e[7] = C.data?.accountItems, e[8] = w?.id, e[9] = N, e[10] = Bt
    } else N = e[9], Bt = e[10];
    let P = Lt && !E && !Mt ? Bt?.id ?? null : null,
        Vt = C.isLoading && !zt || P != null,
        Ht = !Vt && O && x.name === `needs-verification` && !k,
        Ut = Vt || Rt || At || f != null && !j,
        Wt = Ut || He,
        F = Mt && zt && N && (A || k) && !De,
        Gt = (A || k) && !F,
        I = Gt && zt && (!N || Mt),
        Kt = zt && Qe({
            canCreateQuorumWorkspace: Gt,
            hasExistingQuorumWorkspace: N,
            hasRecoverableProvisionalWorkspace: !!P,
            isMultipleQuorumWorkspaceAllowed: Mt
        }),
        L = !Mt && (Kt || Ke),
        qt = L ? Ze.description : F ? y.freshVerificationDescription : M ? y.retryDescription : O ? y.deferredVerificationDescription : n ? y.onboardingDescription : y.description,
        Jt = L ? Ze.cta : F ? y.freshVerificationCta : A ? y.verifiedCta : k ? y.npiConfirmedCta : M ? y.retryCta : y.primaryCta,
        Yt = L ? Ze.cta : Ut ? y.primaryCtaLoading : Jt,
        Xt;
    e[11] === Symbol.for(`react.memo_cache_sentinel`) ? (Xt = !ne() && !Se() || !fe(), e[11] = Xt) : Xt = e[11];
    let Zt = Xt,
        Qt;
    e[12] === Symbol.for(`react.memo_cache_sentinel`) ? (Qt = {
        defaultValues: {
            isLicensed: !1,
            agreedToToS: !1
        }
    }, e[12] = Qt) : Qt = e[12];
    let $t = qe(Qt),
        en;
    e[13] === i.search ? en = e[14] : (en = (e, t, n) => {
        let ee = ut(t, lt(i.search));
        r.logValueEventWithStatsig({
            segmentEventName: e,
            statsigEventName: e,
            data: ee,
            eventId: n
        }), te.addAction(e, ee)
    }, e[13] = i.search, e[14] = en);
    let R = en,
        tn;
    e[15] !== t || e[16] !== h || e[17] !== Ye || e[18] !== S ? (tn = async () => {
        if (h) return;
        let e = Ye.trim();
        if (b(null), !/^[0-9]{10}$/.test(e)) {
            b(t.formatMessage(y.npiValidationError));
            return
        }
        Dt(!0);
        try {
            let n = (await ge.safePost(`/quorum/preverify_npi`, {
                requestBody: {
                    npi: e
                }
            })).metadata;
            n?.verification_status === `pending` && n.deferred_verification && n.npi === e ? rt(e) : b(t.formatMessage(y.npiPreverificationError))
        } catch (e) {
            let n = e;
            n instanceof ue && n.status === 409 ? (ct(!0), S()) : b(t.formatMessage(n instanceof ue && n.status === 400 ? y.npiValidationError : y.npiPreverificationError))
        }
        Dt(!1)
    }, e[15] = t, e[16] = h, e[17] = Ye, e[18] = S, e[19] = tn) : tn = e[19];
    let nn = tn,
        rn = yt,
        z = vt,
        an;
    e[20] !== w || e[21] !== k || e[22] !== t || e[23] !== m || e[24] !== A || e[25] !== R || e[26] !== T || e[27] !== jt ? (an = async () => {
        if (m) return;
        Pe(null), Me(!0);
        let e = await Fe(t, w ?? null, jt),
            n = k && !A;
        try {
            n || R(v.postVerificationWorkspaceCreateStarted, {
                has_current_account: !!w
            });
            let t = (await st({
                workspace_name: e
            })).workspace_id;
            if (me(t), n) {
                if (T) {
                    z(t, `hmp_workspace_created`);
                    return
                }
                ie(`/onboarding`);
                return
            }
            R(v.postVerificationWorkspaceCreateSucceeded), z(t, `hmp_verification_complete`), ie()
        } catch (e) {
            let r = e;
            if (Me(!1), n || R(v.postVerificationWorkspaceCreateFailed, {
                    reason: r instanceof ue ? `request_${r.status}` : `unknown`
                }), r instanceof ue && r.status === 403) {
                if (rn(r)) {
                    Je(!0), Pe(null);
                    return
                }
                if (!n) {
                    l(!0);
                    return
                }
            }
            Pe(t.formatMessage(y.quorumWorkspaceCreateError))
        }
    }, e[20] = w, e[21] = k, e[22] = t, e[23] = m, e[24] = A, e[25] = R, e[26] = T, e[27] = jt, e[28] = an) : an = e[28];
    let on = an,
        sn = m || Rt || At,
        cn;
    e[29] === Symbol.for(`react.memo_cache_sentinel`) ? (cn = {
        settingsLink: _t,
        settingsGroup: gt
    }, e[29] = cn) : cn = e[29];
    let ln = cn,
        B;
    e[30] === t ? B = e[31] : (B = t.formatMessage(y.verificationFaqSectionTitle), e[30] = t, e[31] = B);
    let V;
    e[32] === t ? V = e[33] : (V = t.formatMessage(y.faq1Question), e[32] = t, e[33] = V);
    let un;
    e[34] === Symbol.for(`react.memo_cache_sentinel`) ? (un = (0, _.jsx)(p, {
        ...y.faq1Answer
    }), e[34] = un) : un = e[34];
    let H;
    e[35] === V ? H = e[36] : (H = {
        question: V,
        answer: un
    }, e[35] = V, e[36] = H);
    let U;
    e[37] === t ? U = e[38] : (U = t.formatMessage(y.faq2Question), e[37] = t, e[38] = U);
    let dn;
    e[39] === Symbol.for(`react.memo_cache_sentinel`) ? (dn = (0, _.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [(0, _.jsx)(`p`, {
            children: (0, _.jsx)(p, {
                ...y.faq2Answer
            })
        }), (0, _.jsx)(`p`, {
            children: (0, _.jsx)(p, {
                ...y.faq2AnswerFollowUp
            })
        })]
    }), e[39] = dn) : dn = e[39];
    let W;
    e[40] === U ? W = e[41] : (W = {
        question: U,
        answer: dn
    }, e[40] = U, e[41] = W);
    let G;
    e[42] === t ? G = e[43] : (G = t.formatMessage(y.faq3Question), e[42] = t, e[43] = G);
    let fn;
    e[44] === Symbol.for(`react.memo_cache_sentinel`) ? (fn = (0, _.jsx)(p, {
        ...y.faq3Answer
    }), e[44] = fn) : fn = e[44];
    let pn;
    e[45] === Symbol.for(`react.memo_cache_sentinel`) ? (pn = (0, _.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [fn, (0, _.jsxs)(`ul`, {
            className: `list-disc ps-5`,
            children: [(0, _.jsx)(`li`, {
                children: (0, _.jsx)(p, {
                    ...y.faq3Bullet1
                })
            }), (0, _.jsx)(`li`, {
                children: (0, _.jsx)(p, {
                    ...y.faq3Bullet2
                })
            })]
        })]
    }), e[45] = pn) : pn = e[45];
    let K;
    e[46] === G ? K = e[47] : (K = {
        question: G,
        answer: pn
    }, e[46] = G, e[47] = K);
    let q;
    e[48] === t ? q = e[49] : (q = t.formatMessage(y.faq4Question), e[48] = t, e[49] = q);
    let mn;
    e[50] === Symbol.for(`react.memo_cache_sentinel`) ? (mn = (0, _.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [(0, _.jsxs)(`ul`, {
            className: `list-disc ps-5`,
            children: [(0, _.jsx)(`li`, {
                children: (0, _.jsx)(p, {
                    ...y.faq4Item1
                })
            }), (0, _.jsx)(`li`, {
                children: (0, _.jsx)(p, {
                    ...y.faq4Item2
                })
            })]
        }), (0, _.jsx)(p, {
            ...y.faq4Answer
        })]
    }), e[50] = mn) : mn = e[50];
    let J;
    e[51] === q ? J = e[52] : (J = {
        question: q,
        answer: mn
    }, e[51] = q, e[52] = J);
    let Y;
    e[53] === t ? Y = e[54] : (Y = t.formatMessage(y.faq5Question), e[53] = t, e[54] = Y);
    let hn;
    e[55] === Symbol.for(`react.memo_cache_sentinel`) ? (hn = (0, _.jsx)(p, {
        ...y.faq5Answer
    }), e[55] = hn) : hn = e[55];
    let X;
    e[56] === Y ? X = e[57] : (X = {
        question: Y,
        answer: hn
    }, e[56] = Y, e[57] = X);
    let Z;
    e[58] === t ? Z = e[59] : (Z = t.formatMessage(y.faq6Question), e[58] = t, e[59] = Z);
    let gn;
    e[60] === Symbol.for(`react.memo_cache_sentinel`) ? (gn = (0, _.jsx)(p, {
        ...y.faq6Answer
    }), e[60] = gn) : gn = e[60];
    let _n;
    e[61] === Z ? _n = e[62] : (_n = {
        question: Z,
        answer: gn
    }, e[61] = Z, e[62] = _n);
    let vn;
    e[63] === t ? vn = e[64] : (vn = t.formatMessage(y.faq9Question), e[63] = t, e[64] = vn);
    let yn;
    e[65] === Symbol.for(`react.memo_cache_sentinel`) ? (yn = (0, _.jsx)(p, {
        ...y.faq9Answer
    }), e[65] = yn) : yn = e[65];
    let bn;
    e[66] === vn ? bn = e[67] : (bn = {
        question: vn,
        answer: yn
    }, e[66] = vn, e[67] = bn);
    let xn;
    e[68] === t ? xn = e[69] : (xn = t.formatMessage(y.faq13Question), e[68] = t, e[69] = xn);
    let Sn = O ? y.deferredFaq13Answer : y.faq13Answer,
        Cn;
    e[70] === Sn ? Cn = e[71] : (Cn = (0, _.jsx)(p, {
        ...Sn
    }), e[70] = Sn, e[71] = Cn);
    let wn;
    e[72] !== xn || e[73] !== Cn ? (wn = {
        question: xn,
        answer: Cn
    }, e[72] = xn, e[73] = Cn, e[74] = wn) : wn = e[74];
    let Tn;
    e[75] !== H || e[76] !== W || e[77] !== K || e[78] !== J || e[79] !== X || e[80] !== _n || e[81] !== bn || e[82] !== wn ? (Tn = [H, W, K, J, X, _n, bn, wn], e[75] = H, e[76] = W, e[77] = K, e[78] = J, e[79] = X, e[80] = _n, e[81] = bn, e[82] = wn, e[83] = Tn) : Tn = e[83];
    let En;
    e[84] !== B || e[85] !== Tn ? (En = {
        title: B,
        items: Tn
    }, e[84] = B, e[85] = Tn, e[86] = En) : En = e[86];
    let Dn;
    e[87] === t ? Dn = e[88] : (Dn = t.formatMessage(y.securityFaqSectionTitle), e[87] = t, e[88] = Dn);
    let On;
    e[89] === t ? On = e[90] : (On = t.formatMessage(y.faq7Question), e[89] = t, e[90] = On);
    let kn;
    e[91] === Symbol.for(`react.memo_cache_sentinel`) ? (kn = (0, _.jsx)(p, {
        ...y.faq7Answer
    }), e[91] = kn) : kn = e[91];
    let An;
    e[92] === On ? An = e[93] : (An = {
        question: On,
        answer: kn
    }, e[92] = On, e[93] = An);
    let jn;
    e[94] === t ? jn = e[95] : (jn = t.formatMessage(y.faq8Question), e[94] = t, e[95] = jn);
    let Mn;
    e[96] === Symbol.for(`react.memo_cache_sentinel`) ? (Mn = (0, _.jsx)(p, {
        ...y.faq8Answer
    }), e[96] = Mn) : Mn = e[96];
    let Nn;
    e[97] === jn ? Nn = e[98] : (Nn = {
        question: jn,
        answer: Mn
    }, e[97] = jn, e[98] = Nn);
    let Pn;
    e[99] === t ? Pn = e[100] : (Pn = t.formatMessage(y.faq10Question), e[99] = t, e[100] = Pn);
    let Fn;
    e[101] === Symbol.for(`react.memo_cache_sentinel`) ? (Fn = (0, _.jsx)(p, {
        ...y.faq10Answer
    }), e[101] = Fn) : Fn = e[101];
    let In;
    e[102] === Pn ? In = e[103] : (In = {
        question: Pn,
        answer: Fn
    }, e[102] = Pn, e[103] = In);
    let Ln;
    e[104] === t ? Ln = e[105] : (Ln = t.formatMessage(y.faq11Question), e[104] = t, e[105] = Ln);
    let Rn;
    e[106] === Symbol.for(`react.memo_cache_sentinel`) ? (Rn = (0, _.jsx)(p, {
        ...y.faq11Answer
    }), e[106] = Rn) : Rn = e[106];
    let zn;
    e[107] === Ln ? zn = e[108] : (zn = {
        question: Ln,
        answer: Rn
    }, e[107] = Ln, e[108] = zn);
    let Bn;
    e[109] === t ? Bn = e[110] : (Bn = t.formatMessage(y.faq12Question), e[109] = t, e[110] = Bn);
    let Vn;
    e[111] === Symbol.for(`react.memo_cache_sentinel`) ? (Vn = (0, _.jsx)(p, {
        ...y.faq12Answer
    }), e[111] = Vn) : Vn = e[111];
    let Hn;
    e[112] === Bn ? Hn = e[113] : (Hn = {
        question: Bn,
        answer: Vn
    }, e[112] = Bn, e[113] = Hn);
    let Un;
    e[114] !== An || e[115] !== Nn || e[116] !== In || e[117] !== zn || e[118] !== Hn ? (Un = [An, Nn, In, zn, Hn], e[114] = An, e[115] = Nn, e[116] = In, e[117] = zn, e[118] = Hn, e[119] = Un) : Un = e[119];
    let Wn;
    e[120] !== Dn || e[121] !== Un ? (Wn = {
        title: Dn,
        items: Un
    }, e[120] = Dn, e[121] = Un, e[122] = Wn) : Wn = e[122];
    let Gn;
    e[123] === t ? Gn = e[124] : (Gn = t.formatMessage(y.phiFaqSectionTitle), e[123] = t, e[124] = Gn);
    let Kn;
    e[125] === t ? Kn = e[126] : (Kn = t.formatMessage(y.faq14Question), e[125] = t, e[126] = Kn);
    let qn;
    e[127] === Symbol.for(`react.memo_cache_sentinel`) ? (qn = (0, _.jsx)(p, {
        ...y.faq14Answer,
        values: ln
    }), e[127] = qn) : qn = e[127];
    let Jn;
    e[128] === Kn ? Jn = e[129] : (Jn = {
        question: Kn,
        answer: qn
    }, e[128] = Kn, e[129] = Jn);
    let Yn;
    e[130] === t ? Yn = e[131] : (Yn = t.formatMessage(y.faq15Question), e[130] = t, e[131] = Yn);
    let Xn;
    e[132] === Symbol.for(`react.memo_cache_sentinel`) ? (Xn = (0, _.jsxs)(`div`, {
        className: `flex flex-col gap-2`,
        children: [(0, _.jsx)(p, {
            ...y.faq15Answer,
            values: ln
        }), (0, _.jsx)(p, {
            ...y.faq15AnswerEnterprise
        })]
    }), e[132] = Xn) : Xn = e[132];
    let Zn;
    e[133] === Yn ? Zn = e[134] : (Zn = {
        question: Yn,
        answer: Xn
    }, e[133] = Yn, e[134] = Zn);
    let Qn;
    e[135] !== Jn || e[136] !== Zn ? (Qn = [Jn, Zn], e[135] = Jn, e[136] = Zn, e[137] = Qn) : Qn = e[137];
    let $n;
    e[138] !== Gn || e[139] !== Qn ? ($n = {
        title: Gn,
        items: Qn
    }, e[138] = Gn, e[139] = Qn, e[140] = $n) : $n = e[140];
    let er;
    e[141] !== En || e[142] !== Wn || e[143] !== $n ? (er = [En, Wn, $n], e[141] = En, e[142] = Wn, e[143] = $n, e[144] = er) : er = e[144];
    let Q = er,
        tr;
    e[145] === Q ? tr = e[146] : (tr = Q.flatMap(ht), e[145] = Q, e[146] = tr);
    let nr = tr,
        rr, ir;
    e[147] === R ? (rr = e[148], ir = e[149]) : (rr = () => {
        if (se.current) return;
        se.current = !0;
        let e = v.pageViewed,
            t = r.logStructuredEvent(`ChatgptQuorumWebVerificationEvent`, {
                legacyStatsigEventName: e,
                stage: `CHATGPT_QUORUM_WEB_VERIFICATION_STAGE_PAGE_VIEWED`
            });
        R(e, void 0, t)
    }, ir = [R], e[147] = R, e[148] = rr, e[149] = ir), (0, g.useEffect)(rr, ir);
    let ar, or;
    e[150] === Kt ? (ar = e[151], or = e[152]) : (ar = () => {
        Kt && (Je(!0), Pe(null))
    }, or = [Kt], e[150] = Kt, e[151] = ar, e[152] = or), (0, g.useEffect)(ar, or);
    let sr, cr;
    e[153] !== N || e[154] !== i.search || e[155] !== R || e[156] !== I ? (sr = () => {
        if (!I || le.current) return;
        le.current = !0;
        let e = lt(i.search);
        r.logStructuredEvent(`ChatgptWebBusinessOnboardingCheckpoint`, {
            checkpoint: `quorum_cfc_terms_shown`,
            flow: `quorum_clinician_enrollment`,
            planType: `quorum`,
            step: N ? `existing_quorum_workspace` : `new_quorum_workspace`,
            ...e?.source ? {
                entryPoint: e.source
            } : {}
        }), R(v.termsShown, {
            has_existing_quorum_workspace: N
        })
    }, cr = [N, i.search, R, I], e[153] = N, e[154] = i.search, e[155] = R, e[156] = I, e[157] = sr, e[158] = cr) : (sr = e[157], cr = e[158]), (0, g.useEffect)(sr, cr);
    let lr, ur;
    e[159] !== L || e[160] !== R ? (lr = () => {
        !L || pe.current || (pe.current = !0, R(v.existingWorkspaceBlockedShown))
    }, ur = [L, R], e[159] = L, e[160] = R, e[161] = lr, e[162] = ur) : (lr = e[161], ur = e[162]), (0, g.useEffect)(lr, ur);
    let dr, fr;
    e[163] !== x.name || e[164] !== Te || e[165] !== u || e[166] !== E || e[167] !== c ? (dr = () => {
        if (E && x.name === `pending` && !u && !c && !Te && !_e.current) {
            let e = window.setTimeout(() => {
                _e.current = !0, l(!0)
            }, 0);
            return () => window.clearTimeout(e)
        }
    }, fr = [x.name, Te, u, E, c], e[163] = x.name, e[164] = Te, e[165] = u, e[166] = E, e[167] = c, e[168] = dr, e[169] = fr) : (dr = e[168], fr = e[169]), (0, g.useEffect)(dr, fr);
    let pr, mr;
    e[170] !== E || e[171] !== c || e[172] !== R || e[173] !== D || e[174] !== S || e[175] !== F || e[176] !== M ? (pr = () => {
        if (c) return Ie({
            onLoad: () => {
                Ee(!0);
                let e = v.personaOpened,
                    t = r.logStructuredEvent(`ChatgptQuorumWebVerificationEvent`, {
                        legacyStatsigEventName: e,
                        stage: `CHATGPT_QUORUM_WEB_VERIFICATION_STAGE_PERSONA_OPENED`,
                        isRetry: M || F
                    });
                R(e, {
                    is_retry: M || F
                }, t)
            },
            onComplete: () => {
                l(!1), Ee(!1), Oe(!0);
                let e = v.personaCompleted,
                    t = r.logStructuredEvent(`ChatgptQuorumWebVerificationEvent`, {
                        legacyStatsigEventName: e,
                        stage: `CHATGPT_QUORUM_WEB_VERIFICATION_STAGE_PERSONA_COMPLETED`,
                        isRetry: M || F
                    });
                R(e, {
                    is_retry: M || F
                }, t), S(), D ? Ce(!0) : E || we(Date.now() + Et)
            },
            onCancel: () => {
                l(!1), Ee(!1), R(v.personaCanceled, {
                    is_retry: M || F
                })
            },
            onInquiryCreationError: e => {
                if (l(!1), Ee(!1), R(v.personaStartFailed, {
                        is_retry: M || F
                    }), kt(e)) {
                    Ue(!0), Be(y.verificationMaxAttemptsError);
                    return
                }
                Be(y.verificationStartError)
            }
        })
    }, mr = [E, c, R, D, z, S, F, M], e[170] = E, e[171] = c, e[172] = R, e[173] = D, e[174] = S, e[175] = F, e[176] = M, e[177] = pr, e[178] = mr) : (pr = e[177], mr = e[178]), (0, g.useEffect)(pr, mr);
    let hr, gr;
    e[179] !== x.name || e[180] !== u || e[181] !== D || e[182] !== S ? (hr = () => {
        if (!u || !D) return;
        if (x.name === `verified` || x.name === `allowlisted`) {
            ve.current || (ve.current = !0, z(D, `hmp_verification_complete`));
            return
        }
        let e = window.setInterval(S, 2e3);
        return () => window.clearInterval(e)
    }, gr = [x.name, u, D, z, S], e[179] = x.name, e[180] = u, e[181] = D, e[182] = S, e[183] = hr, e[184] = gr) : (hr = e[183], gr = e[184]), (0, g.useEffect)(hr, gr);
    let _r, vr;
    e[185] === f ? (_r = e[186], vr = e[187]) : (_r = () => {
        if (f == null) return;
        let e = window.setTimeout(() => we(e => e === f ? null : e), Math.max(0, f - Date.now()));
        return () => window.clearTimeout(e)
    }, vr = [f], e[185] = f, e[186] = _r, e[187] = vr), (0, g.useEffect)(_r, vr);
    let yr;
    e[188] !== j || e[189] !== S || e[190] !== f ? (yr = () => {
        if (f == null || j) return;
        let e = window.setInterval(S, 2e3);
        return () => window.clearInterval(e)
    }, e[188] = j, e[189] = S, e[190] = f, e[191] = yr) : yr = e[191];
    let br;
    e[192] !== x.name || e[193] !== j || e[194] !== S || e[195] !== f ? (br = [x.name, j, S, f], e[192] = x.name, e[193] = j, e[194] = S, e[195] = f, e[196] = br) : br = e[196], (0, g.useEffect)(yr, br);
    let xr, Sr;
    if (e[197] !== P || e[198] !== T ? (xr = () => {
            if (!(!P || he.current)) {
                if (he.current = !0, me(P), T) {
                    z(P, `hmp_workspace_created`);
                    return
                }
                ie(`/onboarding`)
            }
        }, Sr = [z, P, T], e[197] = P, e[198] = T, e[199] = xr, e[200] = Sr) : (xr = e[199], Sr = e[200]), (0, g.useEffect)(xr, Sr), !ce()) return null;
    let Cr, wr;
    e[201] === Symbol.for(`react.memo_cache_sentinel`) ? (Cr = () => {
        re.current?.scrollIntoView({
            behavior: `smooth`
        })
    }, wr = (0, _.jsx)(p, {
        ...y.secondaryCta
    }), e[201] = Cr, e[202] = wr) : (Cr = e[201], wr = e[202]);
    let Tr = (0, _.jsx)(o, {
            size: `large`,
            color: `ghost`,
            className: d(`px-5 py-2.5 text-sm`, n && `text-token-text-secondary mt-2 h-10 min-h-0 font-normal`),
            onClick: Cr,
            children: wr
        }),
        Er = n && I && A ? y.onboardingVerifiedTitle : O ? y.deferredTitle : y.title,
        Dr = n ? Le : `input`,
        Or = !n && Zt && (0, _.jsx)(`nav`, {
            className: `bg-token-main-surface-primary fixed start-0 end-0 top-0 z-10 border-b border-transparent py-4`,
            children: (0, _.jsxs)(`div`, {
                className: d(wt, `flex items-center justify-between`),
                children: [(0, _.jsx)(`a`, {
                    href: `/`,
                    "aria-label": t.formatMessage(y.homeLinkLabel),
                    children: (0, _.jsx)(Re, {})
                }), (0, _.jsx)(Xe, {})]
            })
        }),
        kr = d(n ? `flex flex-col items-center text-center` : [wt, `flex flex-col items-center gap-4 pt-16 text-center md:pt-20`], n && I && `lg:min-h-[572px] lg:justify-center lg:pt-3`),
        Ar = n ? `text-heading-app font-medium` : `text-4xl text-balance md:text-5xl`,
        jr;
    e[203] === Er ? jr = e[204] : (jr = (0, _.jsx)(p, {
        ...Er
    }), e[203] = Er, e[204] = jr);
    let Mr;
    e[205] !== Ar || e[206] !== jr ? (Mr = (0, _.jsx)(`h1`, {
        className: Ar,
        children: jr
    }), e[205] = Ar, e[206] = jr, e[207] = Mr) : Mr = e[207];
    let Nr = !Vt && (0, _.jsx)(`p`, {
            className: d(`text-token-text-secondary`, n ? `text-body-regular mt-2` : `max-w-[720px] text-base md:text-lg`),
            children: (0, _.jsx)(p, {
                ...n && I ? y.quorumTermsTitle : qt
            })
        }),
        Pr = n && !L && !O && !Gt && !Vt && (0, _.jsxs)(`div`, {
            className: `border-token-border-default mt-6 w-full max-w-[352px] divide-y rounded-2xl border px-4 text-start`,
            children: [(0, _.jsxs)(`div`, {
                className: `border-token-border-default flex h-14 items-center gap-4 text-sm`,
                children: [(0, _.jsx)(We, {
                    "aria-hidden": `true`,
                    className: `icon-lg`
                }), (0, _.jsx)(p, {
                    ...y.onboardingGovernmentId
                })]
            }), (0, _.jsxs)(`div`, {
                className: `border-token-border-default flex h-14 items-center gap-4 text-sm`,
                children: [(0, _.jsx)(Ge, {
                    "aria-hidden": `true`,
                    className: `icon-lg`
                }), (0, _.jsx)(p, {
                    ...y.onboardingNpi
                })]
            })]
        }),
        Fr = (!n || !I) && (0, _.jsxs)(`div`, {
            className: d(`flex w-full flex-col gap-3`, n ? `mt-6 max-w-[352px] items-center` : `mt-2 max-w-[520px]`, !n && !Ht && `sm:flex-row sm:items-center sm:justify-center`),
            children: [L ? (0, _.jsx)(o, {
                as: `a`,
                to: `https://chatgpt.com`,
                size: `medium`,
                color: `primary`,
                className: d(`py-2.5 text-sm`, n ? `h-11 rounded-full px-4` : `px-5`),
                children: (0, _.jsx)(p, {
                    ...Yt
                })
            }) : Ht ? (0, _.jsxs)(`div`, {
                className: `border-token-border-light bg-token-bg-primary shadow-elevation-01 flex w-full flex-col gap-4 rounded-[28px] border p-5 text-start sm:p-6`,
                children: [(0, _.jsxs)(`div`, {
                    className: `flex flex-col gap-1`,
                    children: [(0, _.jsx)(`label`, {
                        htmlFor: `quorum-preverification-npi`,
                        className: `text-token-text-primary text-sm font-medium`,
                        children: (0, _.jsx)(p, {
                            ...y.npiLabel
                        })
                    }), (0, _.jsx)(`p`, {
                        id: `quorum-preverification-npi-help`,
                        className: `text-token-text-secondary text-sm`,
                        children: (0, _.jsx)(p, {
                            ...y.npiHelpText
                        })
                    })]
                }), (0, _.jsx)(je, {
                    name: `quorum-preverification-npi`,
                    ariaLabel: !1,
                    "aria-describedby": `quorum-preverification-npi-help`,
                    type: `text`,
                    inputMode: `numeric`,
                    autoComplete: `off`,
                    value: Ye,
                    placeholder: t.formatMessage(y.npiPlaceholder),
                    error: Ot ?? void 0,
                    showErrorIcon: !0,
                    className: `rounded-full! border-[var(--border-heavy)] p-0! focus-within:ring-1`,
                    inputClassName: `w-full rounded-full! px-5! py-3! text-base! sm:text-base!`,
                    onChange: e => {
                        et(e.target.value), b(null)
                    },
                    onKeyDown: e => {
                        e.key === `Enter` && nn()
                    }
                }), (0, _.jsx)(o, {
                    type: `button`,
                    size: `large`,
                    color: `primary`,
                    fullWidth: !0,
                    loading: h,
                    disabled: h || At,
                    onClick: () => void nn(),
                    children: (0, _.jsx)(p, {
                        ...y.npiContinueCta
                    })
                })]
            }) : Gt ? I ? (0, _.jsxs)(`p`, {
                className: d(`inline-flex min-h-11 items-center gap-2 px-5 py-2.5 text-sm font-medium`, A ? `text-token-text-primary` : `bg-token-bg-status-success text-token-text-status-success rounded-full`),
                children: [A ? null : (0, _.jsx)(Ve, {
                    "aria-hidden": `true`,
                    className: `icon-sm`
                }), (0, _.jsx)(p, {
                    ...A ? y.verifiedCta : y.npiConfirmedCta
                })]
            }) : (0, _.jsx)(o, {
                size: `medium`,
                color: `primary`,
                className: d(`py-2.5 text-sm`, n ? `h-11 rounded-full px-4` : `px-5`),
                loading: !0,
                disabled: !0,
                "aria-disabled": !0,
                children: (0, _.jsx)(p, {
                    ...Yt
                })
            }) : (0, _.jsx)(o, {
                size: `medium`,
                color: `primary`,
                className: d(`py-2.5 text-sm`, n ? `h-11 rounded-full px-4` : `px-5`),
                loading: Ut,
                disabled: Wt,
                onClick: () => {
                    He || (R(v.startVerificationClicked, {
                        is_retry: M || F
                    }), Be(null), l(!0))
                },
                children: (0, _.jsx)(p, {
                    ...Yt
                })
            }), !n && Tr]
        }),
        Ir;
    e[208] === ze ? Ir = e[209] : (Ir = ze ? (0, _.jsx)(`div`, {
        role: `alert`,
        className: `border-token-border-status-error bg-token-bg-status-error text-token-text-status-error w-full max-w-[520px] rounded-lg border p-3 text-sm`,
        children: (0, _.jsx)(p, {
            ...ze,
            values: {
                helpCenter: mt
            }
        })
    }) : null, e[208] = ze, e[209] = Ir);
    let Lr = (!n || I || O) && (0, _.jsx)(`div`, {
            ref: oe,
            className: d(n && I ? `mt-6 w-full text-sm leading-5` : `bg-token-main-surface-secondary text-token-text-secondary mt-4 w-full max-w-[640px] rounded-3xl px-5 py-4 text-sm leading-relaxed`, L && `hidden`),
            children: I ? (0, _.jsxs)(`div`, {
                className: d(`text-token-text-primary flex flex-col text-start`, n ? `items-center gap-6` : `gap-4`),
                children: [!n && (0, _.jsx)(`div`, {
                    className: `text-base font-medium`,
                    children: (0, _.jsx)(p, {
                        ...y.quorumTermsTitle
                    })
                }), (0, _.jsxs)(`div`, {
                    className: n ? `border-token-border-default flex w-full max-w-[352px] flex-col gap-4 rounded-2xl border p-4` : `contents`,
                    children: [(0, _.jsxs)(`label`, {
                        htmlFor: `quorum-is-licensed-healthcare`,
                        className: d(`flex items-start gap-2`, n && `border-token-border-default items-center gap-4 border-b pb-4`),
                        children: [(0, _.jsx)($t.Field, {
                            name: `isLicensed`,
                            children: e => (0, _.jsx)(Dr, {
                                id: `quorum-is-licensed-healthcare`,
                                name: `isLicensed`,
                                type: `checkbox`,
                                className: n ? `border-token-border-default size-[18px]!` : `mt-1 h-4 w-4`,
                                checked: !!e.state.value,
                                onChange: t => {
                                    let n = t.target.checked;
                                    e.handleChange(n), n && !k && R(v.postVerificationAttest)
                                }
                            })
                        }), (0, _.jsx)(`span`, {
                            className: `text-sm leading-5`,
                            children: (0, _.jsx)(p, {
                                ...y.quorumLicensedAttestation
                            })
                        })]
                    }), (0, _.jsx)(`div`, {
                        className: `flex items-start gap-2`,
                        children: (0, _.jsxs)(`label`, {
                            htmlFor: `quorum-baa-agree`,
                            className: d(`flex items-start gap-2`, n && `items-center gap-4`),
                            children: [(0, _.jsx)($t.Field, {
                                name: `agreedToToS`,
                                children: e => (0, _.jsx)(Dr, {
                                    id: `quorum-baa-agree`,
                                    name: `agreedToToS`,
                                    type: `checkbox`,
                                    className: n ? `border-token-border-default size-[18px]!` : `mt-1`,
                                    checked: e.state.value,
                                    onChange: t => {
                                        let n = t.target.checked;
                                        e.handleChange(n), n && !k && R(v.postVerificationAgreeTos)
                                    }
                                })
                            }), (0, _.jsx)(`span`, {
                                className: `text-sm`,
                                children: (0, _.jsx)(p, {
                                    ...y.quorumTosAgreement,
                                    values: {
                                        servicesAgreementLink: (0, _.jsx)(`a`, {
                                            href: `https://openai.com/policies/services-agreement`,
                                            className: `underline`,
                                            target: `_blank`,
                                            rel: `noreferrer`,
                                            children: (0, _.jsx)(p, {
                                                ...y.quorumServicesAgreementText
                                            })
                                        })
                                    }
                                })
                            })]
                        })
                    })]
                }), (0, _.jsx)($t.Subscribe, {
                    selector: pt,
                    children: e => {
                        let r = e.agreedToToS && e.isLicensed,
                            ee = (0, _.jsx)(o, {
                                size: `medium`,
                                color: `primary`,
                                className: n ? `h-11 rounded-full px-4 text-sm` : `w-full min-w-[200px] px-5 py-2.5 text-sm sm:w-auto`,
                                onClick: () => {
                                    r && (k || R(v.postVerificationGetStartedClicked), on())
                                },
                                loading: sn,
                                disabled: sn || !n && !r,
                                "aria-disabled": !r || sn,
                                children: (0, _.jsx)(p, {
                                    ...sn ? y.quorumPrimaryCtaLoading : n ? y.onboardingGetStarted : y.quorumPrimaryCta
                                })
                            }),
                            te = (0, _.jsx)(`div`, {
                                className: n ? `flex justify-center` : `block w-full sm:w-auto`,
                                children: ee
                            });
                        return (0, _.jsxs)(`div`, {
                            className: `flex flex-col gap-3`,
                            children: [Ne ? (0, _.jsx)(`div`, {
                                className: `w-full rounded-lg border border-[#df1b41] bg-[#fff5f7] p-3 text-sm text-[#df1b41]`,
                                children: Ne
                            }) : null, r ? te : (0, _.jsx)(be, {
                                side: `top`,
                                label: t.formatMessage(y.quorumCompleteRequiredFieldsTooltip),
                                children: te
                            })]
                        })
                    }
                })]
            }) : L ? null : (0, _.jsx)(p, {
                ...O ? y.deferredDisclaimer : y.disclaimer
            })
        }),
        Rr = n && Tr,
        zr;
    e[210] !== Rr || e[211] !== kr || e[212] !== Mr || e[213] !== Nr || e[214] !== Pr || e[215] !== Fr || e[216] !== Ir || e[217] !== Lr ? (zr = (0, _.jsxs)(`section`, {
        className: kr,
        children: [Mr, Nr, Pr, Fr, Ir, Lr, Rr]
    }), e[210] = Rr, e[211] = kr, e[212] = Mr, e[213] = Nr, e[214] = Pr, e[215] = Fr, e[216] = Ir, e[217] = Lr, e[218] = zr) : zr = e[218];
    let Br;
    e[219] === n ? Br = e[220] : (Br = !n && (0, _.jsxs)(`section`, {
        ref: re,
        className: d(wt, `flex flex-col items-center gap-3 py-16 text-center md:py-20`),
        children: [(0, _.jsx)(`h2`, {
            className: d(Tt, `text-center`),
            children: (0, _.jsx)(p, {
                ...y.valueTitle
            })
        }), (0, _.jsx)(`p`, {
            className: `text-token-text-secondary max-w-[640px] text-base`,
            children: (0, _.jsx)(p, {
                ...y.valueDescription
            })
        })]
    }), e[219] = n, e[220] = Br);
    let Vr = n ? re : void 0,
        Hr;
    e[221] === n ? Hr = e[222] : (Hr = d(n ? `border-token-border-default mt-7 flex flex-col gap-6 border-t pt-10 pb-6` : [wt, `mx-auto flex max-w-[700px] flex-col gap-8 py-10 md:py-16`]), e[221] = n, e[222] = Hr);
    let Ur;
    e[223] === n ? Ur = e[224] : (Ur = n ? `text-body-emphasized` : d(Tt, `text-center`), e[223] = n, e[224] = Ur);
    let Wr;
    e[225] === Symbol.for(`react.memo_cache_sentinel`) ? (Wr = (0, _.jsx)(p, {
        ...y.faqTitle
    }), e[225] = Wr) : Wr = e[225];
    let Gr;
    e[226] === Ur ? Gr = e[227] : (Gr = (0, _.jsx)(`h2`, {
        className: Ur,
        children: Wr
    }), e[226] = Ur, e[227] = Gr);
    let Kr = n ? `h-6 min-h-0 p-0 text-sm font-normal` : `px-3 py-2 text-sm`,
        qr;
    e[228] !== nr || e[229] !== a.length || e[230] !== s ? (qr = () => {
        if (a.length === nr.length) {
            s([]);
            return
        }
        s(nr.map(ft))
    }, e[228] = nr, e[229] = a.length, e[230] = s, e[231] = qr) : qr = e[231];
    let Jr = a.length === nr.length ? y.collapseAll : y.expandAll,
        Yr;
    e[232] === Jr ? Yr = e[233] : (Yr = (0, _.jsx)(p, {
        ...Jr
    }), e[232] = Jr, e[233] = Yr);
    let Xr;
    e[234] !== Kr || e[235] !== qr || e[236] !== Yr ? (Xr = (0, _.jsx)(o, {
        size: `medium`,
        color: `ghost`,
        className: Kr,
        onClick: qr,
        children: Yr
    }), e[234] = Kr, e[235] = qr, e[236] = Yr, e[237] = Xr) : Xr = e[237];
    let Zr;
    e[238] !== Gr || e[239] !== Xr ? (Zr = (0, _.jsxs)(`div`, {
        className: `flex items-center justify-between`,
        children: [Gr, Xr]
    }), e[238] = Gr, e[239] = Xr, e[240] = Zr) : Zr = e[240];
    let Qr = n ? `[&_button]:py-4 [&_button]:text-sm [&_button]:leading-5` : void 0,
        $r;
    e[241] !== Q || e[242] !== n || e[243] !== a || e[244] !== s ? ($r = Q.map((e, t) => {
        let r = Q.slice(0, t).reduce(dt, 0);
        return (0, _.jsxs)(`div`, {
            className: `mb-8 last:mb-0`,
            children: [(0, _.jsx)(`h3`, {
                className: d(`mb-3`, n ? `text-base font-medium` : `text-lg font-semibold`),
                children: e.title
            }), e.items.map((e, t) => {
                let n = r + t;
                return (0, _.jsx)(ot, {
                    question: e.question,
                    answer: e.answer,
                    isOpen: a.includes(n),
                    onToggle: () => s(e => e.includes(n) ? e.filter(e => e !== n) : [...e, n])
                }, e.question)
            })]
        }, e.title)
    }), e[241] = Q, e[242] = n, e[243] = a, e[244] = s, e[245] = $r) : $r = e[245];
    let ei;
    e[246] !== Qr || e[247] !== $r ? (ei = (0, _.jsx)(`div`, {
        className: Qr,
        children: $r
    }), e[246] = Qr, e[247] = $r, e[248] = ei) : ei = e[248];
    let ti;
    e[249] !== Vr || e[250] !== Hr || e[251] !== Zr || e[252] !== ei ? (ti = (0, _.jsxs)(`section`, {
        ref: Vr,
        id: `faq`,
        className: Hr,
        children: [Zr, ei]
    }), e[249] = Vr, e[250] = Hr, e[251] = Zr, e[252] = ei, e[253] = ti) : ti = e[253];
    let ni;
    e[254] !== zr || e[255] !== Br || e[256] !== ti || e[257] !== Or ? (ni = (0, _.jsxs)(_.Fragment, {
        children: [Or, zr, Br, ti]
    }), e[254] = zr, e[255] = Br, e[256] = ti, e[257] = Or, e[258] = ni) : ni = e[258];
    let $ = ni;
    if (n) {
        let n;
        e[259] !== t || e[260] !== Er ? (n = t.formatMessage(Er), e[259] = t, e[260] = Er, e[261] = n) : n = e[261];
        let r;
        return e[262] !== $ || e[263] !== n ? (r = (0, _.jsx)(it, {
            accessibleTitle: n,
            children: $
        }), e[262] = $, e[263] = n, e[264] = r) : r = e[264], r
    }
    let ri;
    e[265] === Symbol.for(`react.memo_cache_sentinel`) ? (ri = d(`font-oai overflow-hidden pb-12`, Zt ? `pt-[72px]` : `pt-0`), e[265] = ri) : ri = e[265];
    let ii;
    return e[266] === $ ? ii = e[267] : (ii = (0, _.jsx)(`div`, {
        className: ri,
        children: $
    }), e[266] = $, e[267] = ii), ii
}

function dt(e, t) {
    return e + t.items.length
}

function ft(e, t) {
    return t
}

function pt(e) {
    return e.values
}

function mt(e) {
    return (0, _.jsx)(`a`, {
        href: Ot,
        className: `underline`,
        target: `_blank`,
        rel: `noreferrer`,
        children: e
    })
}

function ht(e) {
    return e.items
}

function gt(e) {
    return (0, _.jsx)(`span`, {
        className: `inline whitespace-nowrap`,
        children: e
    })
}

function _t(e) {
    return (0, _.jsx)(`a`, {
        href: `#settings`,
        className: `inline underline`,
        children: e
    })
}

function vt(e, t) {
    if (typeof window > `u` || !fe()) return;
    let n = ve(JSON.stringify({
        type: t,
        workspaceId: e,
        ...t === `hmp_workspace_created` ? {
            verificationStatus: `pending`
        } : {}
    }));
    ne() ? (t === `hmp_workspace_created` ? window.webkit?.messageHandlers?.hmpWorkspaceCreated : window.webkit?.messageHandlers?.hmpVerificationComplete)?.postMessage(n) : Se() && window.openai?.postMessage?.(n)
}

function yt(e) {
    return e.message.toLowerCase().includes(`already has a quorum workspace`)
}

function bt(e) {
    return e.isDeferredPersonaVerificationWorkspace && !e.isDeactivated() && e.canAccessWithCurrentSession
}

function xt(e) {
    return e.isQuorum()
}

function St() {
    return !1
}
var Ct, g, _, wt, Tt, Et, Dt, Ot, kt, v, y, b = e((() => {
        Ct = m(), ze(), n(), Be(), Pe(), Ue(), Ke(), rt(), He(), oe(), Ne(), Ye(), et(), ct(), Me(), nt(), l(), le(), se(), u(), re(), s(), a(), pe(), c(), Ce(), i(), he(), Je(), _e(), g = t(Oe()), Ee(), f(), at(), _ = we(), wt = `mx-auto max-w-(--breakpoint-2xl) px-4 md:px-8`, Tt = `text-2xl md:text-3xl`, Et = 3e4, Dt = `npi_verification_max_attempts_reached`, Ot = `https://help.openai.com/en/articles/6614161-how-can-i-contact-support`, kt = e => e instanceof ue && e.status === 400 && e.code === Dt, v = {
            pageViewed: `chatgpt_quorum_cfc_page_viewed`,
            startVerificationClicked: `chatgpt_quorum_start_verification_clicked`,
            personaOpened: `chatgpt_quorum_cfc_persona_opened`,
            personaCompleted: `chatgpt_quorum_cfc_persona_completed`,
            personaCanceled: `chatgpt_quorum_cfc_persona_canceled`,
            personaStartFailed: `chatgpt_quorum_cfc_persona_start_failed`,
            termsShown: `chatgpt_quorum_cfc_terms_shown`,
            existingWorkspaceBlockedShown: `chatgpt_quorum_cfc_existing_workspace_blocked_shown`,
            postVerificationAttest: `chatgpt_quorum_post_verification_attest`,
            postVerificationAgreeTos: `chatgpt_quorum_post_verification_agree_tos`,
            postVerificationGetStartedClicked: `chatgpt_quorum_post_verification_get_started_clicked`,
            postVerificationWorkspaceCreateStarted: `chatgpt_quorum_post_verification_workspace_create_started`,
            postVerificationWorkspaceCreateSucceeded: `chatgpt_quorum_post_verification_workspace_create_succeeded`,
            postVerificationWorkspaceCreateFailed: `chatgpt_quorum_post_verification_workspace_create_failed`
        }, y = Te({
            onboardingDescription: {
                id: `healthcareVerificationPage.onboarding.description`,
                defaultMessage: `In order to sign up, verify you are a clinician in the United States to access a secure ChatGPT for Clinicians workspace built for clinical workflows. You will need:`
            },
            onboardingVerifiedTitle: {
                id: `healthcareVerificationPage.onboarding.verified.title`,
                defaultMessage: `You’re verified`
            },
            onboardingGovernmentId: {
                id: `healthcareVerificationPage.onboarding.requirement.government_id`,
                defaultMessage: `A government-issued photo ID`
            },
            onboardingNpi: {
                id: `healthcareVerificationPage.onboarding.requirement.npi`,
                defaultMessage: `A valid NPI`
            },
            onboardingGetStarted: {
                id: `healthcareVerificationPage.onboarding.verified.button.get_started`,
                defaultMessage: `Get started`
            },
            title: {
                id: `healthcareVerificationPage.title`,
                defaultMessage: `Confirm you are a clinician`
            },
            deferredTitle: {
                id: `healthcareVerificationPage.deferredTitle`,
                defaultMessage: `Set up your clinician workspace`
            },
            description: {
                id: `healthcareVerificationPage.description`,
                defaultMessage: `In order to sign up, verify that you are a clinician in the United States to access a secure ChatGPT for Clinicians workspace built for clinical workflows.`
            },
            retryDescription: {
                id: `healthcareVerificationPage.retryDescription`,
                defaultMessage: `We could not confirm your credentials yet. Please try Persona again to continue.`
            },
            freshVerificationDescription: {
                id: `healthcareVerificationPage.freshVerificationDescription`,
                defaultMessage: `Please complete verification again to continue to the latest ChatGPT for Clinicians onboarding experience.`
            },
            verificationStartError: {
                id: `healthcareVerificationPage.verificationStartError`,
                defaultMessage: `Something went wrong while starting verification. Please try again later.`
            },
            verificationMaxAttemptsError: {
                id: `healthcareVerificationPage.verificationMaxAttemptsErrorWithHelpCenter`,
                defaultMessage: `You’ve reached the maximum number of verification attempts. To get help, visit the <helpCenter>Help Center</helpCenter> and open the chat bubble in the bottom-right corner.`
            },
            primaryCta: {
                id: `healthcareVerificationPage.primaryCta`,
                defaultMessage: `Start verification`
            },
            deferredVerificationDescription: {
                id: `healthcareVerificationPage.deferredVerificationDescription`,
                defaultMessage: `Enter your National Provider Identifier to set up your workspace. You’ll verify your identity before sending your first message.`
            },
            npiLabel: {
                id: `healthcareVerificationPage.npiLabel`,
                defaultMessage: `National Provider Identifier (NPI)`
            },
            npiPlaceholder: {
                id: `healthcareVerificationPage.npiPlaceholder`,
                defaultMessage: `Enter your 10-digit NPI`
            },
            npiHelpText: {
                id: `healthcareVerificationPage.npiHelpText`,
                defaultMessage: `Use your 10-digit NPI to set up your workspace.`
            },
            npiContinueCta: {
                id: `healthcareVerificationPage.npiContinueCta`,
                defaultMessage: `Continue`
            },
            npiValidationError: {
                id: `healthcareVerificationPage.npiValidationError`,
                defaultMessage: `Enter a valid 10-digit NPI to continue.`
            },
            npiPreverificationError: {
                id: `healthcareVerificationPage.npiPreverificationError`,
                defaultMessage: `Something went wrong while checking your NPI. Please try again.`
            },
            npiConfirmedCta: {
                id: `healthcareVerificationPage.npiConfirmedCta`,
                defaultMessage: `NPI accepted. Complete setup below.`
            },
            primaryCtaLoading: {
                id: `healthcareVerificationPage.primaryCtaLoading`,
                defaultMessage: `Checking your verification status...`
            },
            retryCta: {
                id: `healthcareVerificationPage.retryCta`,
                defaultMessage: `Try Persona again`
            },
            freshVerificationCta: {
                id: `healthcareVerificationPage.freshVerificationCta`,
                defaultMessage: `Start verification again`
            },
            verifiedCta: {
                id: `healthcareVerificationPage.verifiedCta`,
                defaultMessage: `You are verified! Get started below.`
            },
            secondaryCta: {
                id: `healthcareVerificationPage.secondaryCta`,
                defaultMessage: `Learn more`
            },
            homeLinkLabel: {
                id: `healthcareVerificationPage.homeLinkLabel`,
                defaultMessage: `ChatGPT Home`
            },
            disclaimer: {
                id: `healthcareVerificationPage.disclaimer`,
                defaultMessage: `You will complete verification with Persona. The information you submit is used only to confirm your professional status.`
            },
            deferredDisclaimer: {
                id: `healthcareVerificationPage.deferredDisclaimer`,
                defaultMessage: `Explore your workspace and complete onboarding first. Persona identity verification is required before you send a message.`
            },
            quorumTermsTitle: {
                id: `quorum.settingsTopic.medicalVerificationModalTitle`,
                defaultMessage: `Please agree to our terms and conditions to continue`
            },
            quorumLicensedAttestation: {
                id: `selectQuorumPlanModal.isLicensedHealthcare`,
                defaultMessage: `I attest that I am a licensed clinician and all information provided is true and accurate.`
            },
            quorumServicesAgreementText: {
                id: `quorumBilling.servicesAgreementText`,
                defaultMessage: `OpenAI Services Agreement`
            },
            quorumTosAgreement: {
                id: `selectTeamPlanModal.baaAgreement`,
                defaultMessage: `I have read and agree to the {servicesAgreementLink}.`
            },
            quorumCompleteRequiredFieldsTooltip: {
                id: `quorumBilling.completeRequiredFieldsTooltip`,
                defaultMessage: `Please agree to the Terms and Conditions.`
            },
            quorumPrimaryCta: {
                id: `quorum.settingsTopic.getStartedCta`,
                defaultMessage: `Get Started with ChatGPT`
            },
            quorumPrimaryCtaLoading: {
                id: `quorum.settingsTopic.getStartedCtaLoading`,
                defaultMessage: `Hang tight! Setting up your new workspace...`
            },
            quorumWorkspaceCreateError: {
                id: `healthcareVerificationPage.quorumWorkspaceCreateError`,
                defaultMessage: `We couldn't create your ChatGPT for Clinicians workspace. Please try again.`
            },
            valueTitle: {
                id: `healthcareVerificationPage.valueTitle`,
                defaultMessage: `Why we verify`
            },
            valueDescription: {
                id: `healthcareVerificationPage.verificationPurpose.description`,
                defaultMessage: `We verify clinician identities to help prevent impersonation and keep access limited to verified clinicians.`
            },
            faqTitle: {
                id: `healthcareVerificationPage.faqTitle`,
                defaultMessage: `FAQs`
            },
            verificationFaqSectionTitle: {
                id: `healthcareVerificationPage.verificationFaqSectionTitle`,
                defaultMessage: `Verification`
            },
            securityFaqSectionTitle: {
                id: `healthcareVerificationPage.securityFaqSectionTitle`,
                defaultMessage: `Security & Privacy`
            },
            phiFaqSectionTitle: {
                id: `healthcareVerificationPage.phiFaqSectionTitle`,
                defaultMessage: `Protected Health Information (PHI) and HIPAA`
            },
            faq1Question: {
                id: `healthcareVerificationPage.faq1Question`,
                defaultMessage: `Who can verify?`
            },
            faq1Answer: {
                id: `healthcareVerificationPage.faq1Answer`,
                defaultMessage: `Verification is available to U.S.-licensed clinicians and eligible clinical professionals who need access to clinician-focused workflows. This typically includes physicians (MD/DO), nurse practitioners (NP), physician assistants (PA), psychologists, and other licensed clinicians.`
            },
            faq2Question: {
                id: `healthcareVerificationPage.faq2Question`,
                defaultMessage: `Why do I need to verify?`
            },
            faq2Answer: {
                id: `healthcareVerificationPage.faq2Answer`,
                defaultMessage: `Verification confirms you’re a clinician so we can unlock clinician-only workflows (diagnostic reasoning, differential diagnosis support, workup planning, note drafting, and patient counseling/after-visit summaries) inside a clinician-tailored workspace that’s designed for HIPAA-ready use, where tools and outputs are optimized for clinical practice, not general chat.`
            },
            faq2AnswerFollowUp: {
                id: `healthcareVerificationPage.faq2AnswerFollowUp`,
                defaultMessage: `This workspace can also remember your medical specialty and apply it across workflows so results are more relevant to your day-to-day practice, and the citations are optimized and formatted for clinicians so it’s faster to find and use trusted sources.`
            },
            faq3Question: {
                id: `healthcareVerificationPage.faq3Question`,
                defaultMessage: `How does verification work?`
            },
            faq3Answer: {
                id: `healthcareVerificationPage.faq3Answer`,
                defaultMessage: `You’ll complete a short identity check with Persona. Most verifications take a few minutes. You may be asked to capture:`
            },
            faq3Bullet1: {
                id: `healthcareVerificationPage.faq3Bullet1`,
                defaultMessage: `A government-issued ID, and`
            },
            faq3Bullet2: {
                id: `healthcareVerificationPage.faq3Bullet2`,
                defaultMessage: `A brief face scan to match you to your ID (fraud prevention)`
            },
            faq4Question: {
                id: `healthcareVerificationPage.faq4Question`,
                defaultMessage: `What do I need to complete verification?`
            },
            faq4Answer: {
                id: `healthcareVerificationPage.faq4Answer`,
                defaultMessage: `If you prefer, you can use a QR code to switch from your computer to your phone for the camera steps. You may also need to turn off any pop-up blocker if you are completing this flow from your computer.`
            },
            faq4Item1: {
                id: `healthcareVerificationPage.faq4Item1`,
                defaultMessage: `A government-issued ID`
            },
            faq4Item2: {
                id: `healthcareVerificationPage.faq4Item2`,
                defaultMessage: `A camera (for ID capture + face scan)`
            },
            faq5Question: {
                id: `healthcareVerificationPage.faq5Question`,
                defaultMessage: `Why is a face scan required?`
            },
            faq5Answer: {
                id: `healthcareVerificationPage.faq5Answer`,
                defaultMessage: `The face scan helps confirm that the person verifying matches the ID presented. This is a common anti-fraud safeguard and helps protect clinicians and patients from identity misuse.`
            },
            faq6Question: {
                id: `healthcareVerificationPage.faq6Question`,
                defaultMessage: `What information is my data used for?`
            },
            faq6Answer: {
                id: `healthcareVerificationPage.faq6Answer`,
                defaultMessage: `The information you submit during verification is used only to confirm your identity and clinician status so we can enable verified clinician access.`
            },
            faq7Question: {
                id: `healthcareVerificationPage.faq7Question`,
                defaultMessage: `Is my chat content used to train models?`
            },
            faq7Answer: {
                id: `healthcareVerificationPage.faq7Answer`,
                defaultMessage: `No. Content in this workspace is not used to train our models.`
            },
            faq8Question: {
                id: `healthcareVerificationPage.faq8Question`,
                defaultMessage: `Is my chat content used to improve OpenAI’s products?`
            },
            faq8Answer: {
                id: `healthcareVerificationPage.faq8Answer`,
                defaultMessage: `As described in its services agreement, OpenAI will not use Customer Content, such as chat content, to develop or improve its Services, including ChatGPT for Clinicians, unless the customer explicitly agrees to such use. We may run any data submitted to OpenAI’s services through automated content classifiers and safety tools, including to better understand how our services are used. The classifications created are metadata about the business data but do not contain any of the business data itself.`
            },
            faq9Question: {
                id: `healthcareVerificationPage.faq9Question`,
                defaultMessage: `How long is verification data retained?`
            },
            faq9Answer: {
                id: `healthcareVerificationPage.faq9Answer`,
                defaultMessage: `Persona retains biometric data for 30 days for fraud prevention purposes and deletes it after 30 days.`
            },
            faq10Question: {
                id: `healthcareVerificationPage.faq10Question`,
                defaultMessage: `How does OpenAI ensure data security?`
            },
            faq10Answer: {
                id: `healthcareVerificationPage.faq10Answer`,
                defaultMessage: `OpenAI encrypts all data at rest (AES-256) and in transit between our customers and us and between us and our service providers (TLS 1.2+), and uses strict access controls to limit who can access data. Our security team has an on-call rotation that has 24/7/365 coverage and is paged in case of any potential security incident. We offer a Bug Bounty Program for responsible disclosure of vulnerabilities discovered on our platform and products. ChatGPT for Clinicians is built to support the same security commitments we make to our enterprise customers. We have annual security audits, including penetration testing of our common infrastructure and applications.`
            },
            faq11Question: {
                id: `healthcareVerificationPage.faq11Question`,
                defaultMessage: `Who can view conversations in ChatGPT for Clinicians?`
            },
            faq11Answer: {
                id: `healthcareVerificationPage.faq11Answer`,
                defaultMessage: `Our access to conversations stored on our systems is limited to authorized employees that require access for engineering support, investigating potential platform abuse, and legal compliance.`
            },
            faq12Question: {
                id: `healthcareVerificationPage.faq12Question`,
                defaultMessage: `What is OpenAI’s policy on data retention for ChatGPT Business?`
            },
            faq12Answer: {
                id: `healthcareVerificationPage.faq12Answer`,
                defaultMessage: `You control whether your conversations are retained. Any deleted or unsaved conversations are removed from our systems within 30 days, unless we are legally required to retain them. Note that retention enables features like conversation history, and shorter retention periods may compromise product experience.`
            },
            faq13Question: {
                id: `healthcareVerificationPage.faq13Question`,
                defaultMessage: `What happens after verification?`
            },
            faq13Answer: {
                id: `healthcareVerificationPage.faq13Answer`,
                defaultMessage: `Once verified, you can continue into ChatGPT Health and set up your secure workspace. Persona will only retain your biometric data for 30 days for fraud prevention purposes, and will delete your biometric data after 30 days.`
            },
            deferredFaq13Answer: {
                id: `healthcareVerificationPage.deferredFaq13Answer`,
                defaultMessage: `You can set up your secure clinician workspace and complete onboarding first. Once Persona verifies your identity, you can start sending messages. Persona retains biometric data for 30 days for fraud prevention and then deletes it.`
            },
            faq14Question: {
                id: `healthcareVerificationPage.faq14Question`,
                defaultMessage: `Can I use ChatGPT for Clinicians with Protected Health Information (PHI)?`
            },
            faq14Answer: {
                id: `healthcareVerificationPage.faq14Answer`,
                defaultMessage: `This product is designed to be helpful for many clinician use cases without the need for entering PHI. Do not share PHI unless you have a HIPAA Business Associate Agreement (BAA) and use this product in compliance with applicable law. To enter into a BAA with OpenAI, create a ChatGPT for Clinicians account and then visit the <settingsGroup>Agreements section under <settingsLink>Settings</settingsLink>.</settingsGroup>`
            },
            faq15Question: {
                id: `healthcareVerificationPage.faq15Question`,
                defaultMessage: `Can I sign one BAA that covers multiple users at my clinic?`
            },
            faq15Answer: {
                id: `healthcareVerificationPage.faq15Answer`,
                defaultMessage: `ChatGPT for Clinicians is designed for individual use and does not require the use of Protected Health Information (PHI). PHI should only be shared when you have a BAA. We offer individuals authorized by their practice the option to sign a BAA for PHI shared through their individual account. Each account that wants to use ChatGPT for Clinicians with PHI should have a BAA. To enter into a BAA with OpenAI, create a ChatGPT for Clinicians account and then visit the <settingsGroup>Agreements section under <settingsLink>Settings</settingsLink>.</settingsGroup>`
            },
            faq15AnswerEnterprise: {
                id: `healthcareVerificationPage.faq15AnswerEnterprise`,
                defaultMessage: `If you are looking to sign a BAA that covers multiple users, we recommend ChatGPT for Healthcare, our enterprise offering designed to support team-based use and the broader compliance needs of healthcare organizations.`
            },
            expandAll: {
                id: `healthcareVerificationPage.expandAll`,
                defaultMessage: `Expand all`
            },
            collapseAll: {
                id: `healthcareVerificationPage.collapseAll`,
                defaultMessage: `Collapse all`
            }
        })
    })),
    x, S, At, C = e((() => {
        f(), x = m(), b(), S = we(), At = De(function() {
            "use forget";
            let e = (0, x.c)(1),
                t;
            return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, S.jsx)(h, {}), e[0] = t) : t = e[0], t
        })
    }));
e((() => {
    C()
}))();
export {
    At as
    default
};
//# sourceMappingURL=cfc-verification-hq8tjx8h.js.map