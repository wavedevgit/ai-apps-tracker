import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $Z as n,
    AT as r,
    Ah as i,
    At as a,
    B1 as o,
    B6 as s,
    BR as c,
    Btt as l,
    CR as u,
    Cit as d,
    Dh as f,
    HI as ee,
    HR as p,
    Htt as m,
    IR as h,
    KK as g,
    KR as _,
    LR as v,
    Lot as y,
    Mnt as b,
    NK as x,
    Nnt as S,
    Nrt as te,
    Pnt as C,
    Q1 as w,
    QZ as T,
    R1 as ne,
    SR as re,
    Sit as ie,
    TR as ae,
    Tit as oe,
    Trt as se,
    U1 as E,
    UI as D,
    UL as O,
    V1 as k,
    VR as A,
    WL as ce,
    X1 as le,
    XR as j,
    YV as M,
    ZV as N,
    _tt as P,
    b5 as F,
    bF as I,
    bit as L,
    cn as R,
    cot as z,
    cz as ue,
    dR as B,
    dnt as de,
    hU as V,
    hn as H,
    i5 as U,
    iN as fe,
    jtt as W,
    kT as G,
    krt as pe,
    lot as me,
    lz as K,
    nz as he,
    pR as ge,
    pU as _e,
    tN as ve,
    vnt as ye,
    wst as be,
    xR as xe,
    y5 as q,
    yit as Se,
    ynt as Ce
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as we,
    At as Te,
    Bn as Ee,
    Ht as De,
    Ln as Oe,
    Nn as ke,
    Rn as Ae,
    Ut as je,
    Vn as Me,
    Zt as Ne,
    at as Pe,
    jt as Fe,
    o as Ie,
    rn as Le,
    wn as Re,
    zn as ze
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    i as Be,
    n as Ve,
    t as He
} from "./d42ee766-l8qd8272nkh3jm4y.js";
import {
    DJ as Ue,
    EJ as We,
    MFt as Ge,
    NFt as Ke,
    OJt as qe,
    b8 as Je,
    gGn as Ye,
    iBt as Xe,
    kJt as Ze,
    rBt as Qe,
    sGn as $e,
    uGn as et,
    vGn as tt,
    x8 as nt
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    $y as rt,
    eb as it,
    nb as at,
    tb as ot
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    Cp as st,
    _d as ct,
    hd as J,
    vd as lt,
    wp as ut
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    Lb as dt
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    g as ft,
    h as pt,
    m as mt,
    p as ht
} from "./c470f5ab-m68dth1hatzjj8yh.js";
import {
    a as gt,
    i as _t
} from "./9bbac052-hmfqc3w40261iizy.js";
import {
    n as vt,
    t as yt
} from "./35711af7-gdl8w5rdz7t391x9.js";
import {
    n as bt,
    r as xt
} from "./877ce4d3-d0zlv3naj8f9x8q2.js";

function St(e) {
    if (!ce(e)) return null;
    let {
        pathname: t
    } = new URL(e, `https://chatgpt.com`), n = t.split(`/`).filter(Boolean);
    if (n.length !== 2 || n[0] !== `purchase`) return null;
    let r = n[1];
    return lt(r) ? wt[r] ?? null : null
}

function Ct({
    isSso: e,
    readTreatment: t,
    selectedPlanIntent: n
}) {
    return n != null && !e && t()
}
var wt, Tt = e((() => {
    be(), ct(), O(), wt = {
        [J.Go]: {
            accountPlanType: y.GO,
            planType: J.Go
        },
        [J.Plus]: {
            accountPlanType: y.PLUS,
            planType: J.Plus
        },
        [J.Pro]: {
            accountPlanType: y.PRO,
            planType: J.Pro
        },
        [J.ProLite]: {
            accountPlanType: y.PROLITE,
            planType: J.ProLite
        }
    }
}));

function Et() {
    let [e, t] = (0, Ot.useState)(0), n = (0, Ot.useRef)(Xe(Object.values(jt))), r = z().locale;
    return (0, Y.jsx)(H, {
        mode: `wait`,
        initial: !1,
        children: (0, Y.jsx)(R.div, {
            className: `-mt-4 flex w-full flex-col ps-5 md:ps-8 lg:ps-10`,
            initial: {
                opacity: 0,
                y: 24
            },
            animate: {
                opacity: 1,
                y: 0
            },
            exit: {
                opacity: 0,
                y: -24
            },
            transition: {
                duration: .2
            },
            children: (0, Y.jsx)(ke, {
                ...n.current[e],
                values: {
                    title: e => (0, Y.jsx)(`p`, {
                        className: `font-bold`,
                        children: e
                    }, `title`),
                    body: e => {
                        let i = e?.[0];
                        return typeof i == `string` ? (0, Y.jsx)(Dt, {
                            text: i,
                            onFinishedTyping: () => {
                                setTimeout(() => {
                                    t(e => (e + 1) % n.current.length)
                                }, At)
                            }
                        }, r) : null
                    }
                }
            })
        }, e)
    })
}

function Dt({
    text: e,
    onFinishedTyping: t
}) {
    let n = T(e),
        r = n.length,
        [i, a] = (0, Ot.useState)(-12),
        o = (0, Ot.useRef)(!1);
    return (0, Ot.useEffect)(() => {
        o.current || i === r && (t(), o.current = !0)
    }, [i, r, t]), Ze(() => {
        a(e => e + 1)
    }, kt), (0, Y.jsxs)(`p`, {
        className: `font-normal`,
        children: [n.slice(0, Math.max(i, 0)).join(``), (0, Y.jsxs)(`span`, {
            className: q(`font-circle`, {
                invisible: i > r + 12
            }),
            children: [`​`, `●`]
        })]
    })
}
var Ot, Y, kt, At, jt, Mt = e((() => {
    n(), qe(), me(), F(), Qe(), a(), Ot = t(Me()), Ae(), Y = Ee(), kt = 40, At = 2500, jt = Oe({
        marketingExample1: {
            id: `PvNRKc`,
            defaultMessage: `<title>Recommend a dish</title><body>to bring to a potluck</body>`
        },
        marketingExample2: {
            id: `x6dDU4`,
            defaultMessage: `<title>Recommend a dish</title><body>to impress a date who's a picky eater</body>`
        },
        marketingExample3: {
            id: `dVTBN5`,
            defaultMessage: `<title>Help me debug</title><body>a Python script automating daily reports</body>`
        },
        marketingExample4: {
            id: `Hlddw+`,
            defaultMessage: `<title>Help me debug</title><body>why the linked list appears empty after I've reversed it</body>`
        },
        marketingExample5: {
            id: `faJr4O`,
            defaultMessage: `<title>Draft an email</title><body>to request a quote from local plumbers</body>`
        },
        marketingExample6: {
            id: `oV5RJ5`,
            defaultMessage: `<title>Draft an email</title><body>requesting a deadline extension for my project</body>`
        },
        marketingExample7: {
            id: `vL3rX1`,
            defaultMessage: `<title>Summarize this article</title><body>into three key points</body>`
        },
        marketingExample8: {
            id: `xo9nQj`,
            defaultMessage: `<title>Summarize this article</title><body>as a table of pros and cons</body>`
        },
        marketingExample9: {
            id: `VVg3aa`,
            defaultMessage: `<title>Write a text</title><body>asking a friend to be my plus-one at a wedding</body>`
        },
        marketingExample10: {
            id: `8Vl7TM`,
            defaultMessage: `<title>Write a text</title><body>that goes with a kitten gif for a friend having a rough day</body>`
        },
        marketingExample11: {
            id: `dXqZbT`,
            defaultMessage: `<title>Suggest fun activities</title><body>for a family of 4 to do indoors on a rainy day</body>`
        },
        marketingExample12: {
            id: `h09XOo`,
            defaultMessage: `<title>Suggest fun activities</title><body>for a team-building day with remote employees</body>`
        },
        marketingExample13: {
            id: `6FcHEa`,
            defaultMessage: `<title>Brainstorm names</title><body>for my fantasy football team</body>`
        },
        marketingExample14: {
            id: `O6iNBu`,
            defaultMessage: `<title>Brainstorm names</title><body>for an orange cat we're adopting from the shelter</body>`
        },
        marketingExample15: {
            id: `uw95Qj`,
            defaultMessage: `<title>Give me ideas</title><body>for what to do with my kids' art</body>`
        },
        marketingExample16: {
            id: `HQTYuP`,
            defaultMessage: `<title>Give me ideas</title><body>for a customer loyalty program in a small bookstore</body>`
        },
        marketingExample17: {
            id: `s3Gh5S`,
            defaultMessage: `<title>Plan a trip</title><body>to see the northern lights in Norway</body>`
        },
        marketingExample18: {
            id: `517NID`,
            defaultMessage: `<title>Plan a trip</title><body>to experience Seoul like a local</body>`
        },
        marketingExample19: {
            id: `EASxoK`,
            defaultMessage: `<title>Write a thank-you note</title><body>to my interviewer</body>`
        },
        marketingExample20: {
            id: `ozMspN`,
            defaultMessage: `<title>Write a thank-you note</title><body>to our babysitter for the last-minute help</body>`
        },
        marketingExample21: {
            id: `2o1b9o`,
            defaultMessage: `<title>Help me pick</title><body>a gift for my dad who loves fishing</body>`
        },
        marketingExample22: {
            id: `TysYjq`,
            defaultMessage: `<title>Help me pick</title><body>an outfit that will look good on camera</body>`
        },
        marketingExample23: {
            id: `pVmQs6`,
            defaultMessage: `<title>Improve my post</title><body>for hiring a store associate</body>`
        },
        marketingExample24: {
            id: `mvvlCD`,
            defaultMessage: `<title>Improve my post</title><body>for selling a used vacuum in good condition</body>`
        }
    })
}));

function Nt() {
    return (0, Pt.jsxs)(`div`, {
        className: `relative hidden flex-1 flex-col justify-center px-5 pt-8 text-[#FE7600] md:flex md:px-6 md:py-[22px] lg:px-8 dark:text-[#D292FF]`,
        children: [(0, Pt.jsx)(`nav`, {
            className: `start-0 top-8 flex w-full px-6 sm:absolute md:top-[22px] md:px-6 lg:px-8`,
            children: (0, Pt.jsx)(Je, {})
        }), (0, Pt.jsx)(`div`, {
            className: `flex flex-col text-[32px] leading-[1.2] md:text-[40px]`,
            "aria-hidden": `true`,
            children: (0, Pt.jsx)(ue, {
                children: (0, Pt.jsx)(Et, {})
            })
        })]
    })
}
var Pt, Ft = e((() => {
    nt(), K(), Mt(), Pt = Ee()
}));

function It(e) {
    "use forget";
    let t = (0, Bt.c)(6),
        {
            prompt: n,
            shouldReduceMotion: r
        } = e,
        [i, a] = (0, Vt.useState)(``),
        o, s;
    t[0] !== n || t[1] !== r ? (o = () => {
        let e, t = window.setTimeout(() => {
            if (r) {
                a(n);
                return
            }
            let t = Array.from(n),
                i = 0;
            e = window.setInterval(() => {
                i += 1, a(t.slice(0, i).join(``)), i >= t.length && window.clearInterval(e)
            }, 38)
        }, r ? 0 : 160);
        return () => {
            window.clearTimeout(t), window.clearInterval(e)
        }
    }, s = [n, r], t[0] = n, t[1] = r, t[2] = o, t[3] = s) : (o = t[2], s = t[3]), (0, Vt.useEffect)(o, s);
    let c;
    return t[4] === i ? c = t[5] : (c = (0, X.jsx)(`span`, {
        className: `truncate text-lg empty:hidden lg:text-2xl`,
        children: i
    }), t[4] = i, t[5] = c), c
}

function Lt(e) {
    "use forget";
    let t = (0, Bt.c)(29),
        {
            isNoAuthExitAvailable: n
        } = e,
        r = ze(),
        i = U(g),
        [a, o] = (0, Vt.useState)(0),
        [s, c] = (0, Vt.useState)(!1),
        l = Ut[a],
        u;
    t[0] !== l || t[1] !== r ? (u = r.formatMessage(Ht[l]), t[0] = l, t[1] = r, t[2] = u) : u = t[2];
    let d = u,
        f, ee;
    t[3] !== s || t[4] !== i ? (f = () => {
        if (s || i) return;
        let e = window.setInterval(() => {
            o(zt)
        }, 5e3);
        return () => window.clearInterval(e)
    }, ee = [s, i], t[3] = s, t[4] = i, t[5] = f, t[6] = ee) : (f = t[5], ee = t[6]), (0, Vt.useEffect)(f, ee);
    let p;
    t[7] === a ? p = t[8] : (p = Ut.map((e, t) => (0, X.jsx)(`div`, {
        "aria-hidden": `true`,
        "data-testid": `photo-login-image`,
        style: {
            backgroundImage: `url(/images/auth/login/${e}.jpg)`
        },
        className: q(`absolute inset-0 size-full bg-cover bg-center motion-safe:transition-opacity motion-safe:duration-500`, a === t ? `opacity-100` : `opacity-0`)
    }, e)), t[7] = a, t[8] = p);
    let m;
    t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (m = (0, X.jsx)(`div`, {
        className: `absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent`
    }), t[9] = m) : m = t[9];
    let h;
    t[10] !== l || t[11] !== n ? (h = n ? (0, X.jsx)(Pe, {
        to: `/?slm=1`,
        className: q(`absolute start-6 top-6 z-10 lg:start-10 lg:top-8`, l === `desk` ? `text-black` : `text-white`),
        children: (0, X.jsx)(Je, {})
    }) : (0, X.jsx)(`div`, {
        className: q(`absolute start-6 top-6 z-10 lg:start-10 lg:top-8`, l === `desk` ? `text-black` : `text-white`),
        children: (0, X.jsx)(Je, {})
    }), t[10] = l, t[11] = n, t[12] = h) : h = t[12];
    let _;
    t[13] !== r || t[14] !== s || t[15] !== i ? (_ = !i && (0, X.jsx)(`button`, {
        type: `button`,
        "aria-label": r.formatMessage(s ? Ht.playCarousel : Ht.pauseCarousel),
        className: `interactive-button absolute end-6 top-6 z-10 rounded-full bg-black/50 p-2 text-white lg:end-10 lg:top-8`,
        onClick: () => c(Rt),
        children: s ? (0, X.jsx)(it, {
            className: `icon`
        }) : (0, X.jsx)(at, {
            className: `icon`
        })
    }), t[13] = r, t[14] = s, t[15] = i, t[16] = _) : _ = t[16];
    let v;
    t[17] !== l || t[18] !== i || t[19] !== d ? (v = (0, X.jsx)(It, {
        prompt: d,
        shouldReduceMotion: i
    }, l), t[17] = l, t[18] = i, t[19] = d, t[20] = v) : v = t[20];
    let y;
    t[21] === Symbol.for(`react.memo_cache_sentinel`) ? (y = (0, X.jsx)(`span`, {
        className: `size-4 shrink-0 rounded-full bg-white lg:size-5`
    }), t[21] = y) : y = t[21];
    let b;
    t[22] === v ? b = t[23] : (b = (0, X.jsxs)(`div`, {
        "data-testid": `photo-login-prompt`,
        className: `absolute start-6 bottom-8 z-10 flex max-w-[calc(100%-3rem)] items-center gap-3 text-white lg:start-10 lg:bottom-10 lg:gap-4`,
        children: [v, y]
    }), t[22] = v, t[23] = b);
    let x;
    return t[24] !== b || t[25] !== p || t[26] !== h || t[27] !== _ ? (x = (0, X.jsxs)(`div`, {
        className: `relative hidden min-h-screen overflow-hidden md:block`,
        children: [p, m, h, _, b]
    }), t[24] = b, t[25] = p, t[26] = h, t[27] = _, t[28] = x) : x = t[28], x
}

function Rt(e) {
    return !e
}

function zt(e) {
    return (e + 1) % Ut.length
}
var Bt, Vt, X, Ht, Ut, Wt = e((() => {
    Bt = Re(), nt(), ot(), rt(), I(), s(), x(), F(), Vt = t(Me()), Ae(), we(), X = Ee(), Ht = Oe({
        recipe: {
            id: `Login.photoPrompt.recipe`,
            defaultMessage: `Walk me through this recipe`
        },
        desk: {
            id: `Login.photoPrompt.desk`,
            defaultMessage: `Make a plan from these notes`
        },
        gym: {
            id: `Login.photoPrompt.gym`,
            defaultMessage: `Act as my personal trainer`
        },
        pauseCarousel: {
            id: `Login.photoCarousel.pause`,
            defaultMessage: `Pause photo carousel`
        },
        playCarousel: {
            id: `Login.photoCarousel.play`,
            defaultMessage: `Play photo carousel`
        }
    }), Ut = [`recipe`, `desk`, `gym`]
}));

function Gt() {
    let e = z().userCountry?.toLowerCase();
    S.count(C.DEFAULT, sn, {
        program_id: on,
        entrypoint: `rate_limit`,
        device_type: W() ? `mobile` : `desktop`,
        ...e == null ? {} : {
            country: e
        }
    })
}

function Kt(e) {
    return an.test(new URL(e, `https://chatgpt.com`).pathname)
}

function qt() {
    switch (A()) {
        case v.PersonalGoalPlan:
            return $.valuePropSubtitlePersonalGoalPlan;
        case v.ToughQuestions:
            return $.valuePropSubtitleToughQuestions;
        case v.BuildSkills:
            return $.valuePropSubtitleBuildSkills;
        case v.LearnSolveProgress:
            return $.valuePropSubtitleLearnSolveProgress;
        case v.BigQuestionsPersonalGoals:
            return $.valuePropSubtitleBigQuestionsPersonalGoals;
        default:
            return $.valuePropSubtitle
    }
}

function Jt(e) {
    "use forget";
    let t = (0, nn.c)(71),
        {
            auth0Provider: n,
            cfConnectingIp: r,
            isStorageComplianceEnabled: i,
            stagingCallbackUrl: a
        } = e,
        {
            hash: o
        } = Fe(),
        [s] = De(),
        u;
    if (t[0] !== s || t[1] !== a) {
        let e = s.get(`next`);
        u = a ?? (e && ce(e) ? e : `/`), t[0] = s, t[1] = a, t[2] = u
    } else u = t[2];
    let d = u + o,
        f;
    t[3] === d ? f = t[4] : (f = St(d), t[3] = d, t[4] = f);
    let p = f,
        m;
    t[5] === d ? m = t[6] : (m = Kt(d), t[5] = d, t[6] = m);
    let g = m,
        _ = ze(),
        v = V(),
        y = (0, Z.useRef)(!1),
        b = (0, Z.useRef)(!1),
        x;
    t[7] === s ? x = t[8] : (x = s.get(`sso`), t[7] = s, t[8] = x);
    let S = x,
        te;
    t[9] !== s || t[10] !== S ? (te = S ? s.get(`connection`) : void 0, t[9] = s, t[10] = S, t[11] = te) : te = t[11];
    let C = te,
        w;
    t[12] !== s || t[13] !== S ? (w = S ? s.get(`accept_wId`) : void 0, t[12] = s, t[13] = S, t[14] = w) : w = t[14];
    let T = w,
        re;
    t[15] !== s || t[16] !== T ? (re = T ? s.get(`login_hint`) : void 0, t[15] = s, t[16] = T, t[17] = re) : re = t[17];
    let ae = re,
        E;
    t[18] !== n || t[19] !== s ? (E = ne(s) || n, t[18] = n, t[19] = s, t[20] = E) : E = t[20];
    let D = E,
        O;
    t[21] === Symbol.for(`react.memo_cache_sentinel`) ? (O = c(), t[21] = O) : O = t[21];
    let A = O,
        j;
    t[22] === S ? j = t[23] : (j = !S && !ee() && he(), t[22] = S, t[23] = j);
    let M = j,
        N = !M && A.variant === h.Default,
        P = A.useNoAuthHoldoutUx,
        F, I;
    t[24] !== D || t[25] !== d || t[26] !== S || t[27] !== T || t[28] !== C || t[29] !== ae ? (F = () => {
        if (S) {
            let e = ie.getCookie(oe.DeviceId) ?? ``;
            (0, rn.signIn)(D, {
                callbackUrl: d
            }, {
                [se]: k(),
                ...e ? {
                    device_id: e
                } : {},
                ...ae ? {
                    login_hint: ae
                } : {},
                ...T ? {
                    accept_wId: T
                } : {},
                ...C ? {
                    connection: C,
                    connection_provider: C.startsWith(`conn_`) || C.startsWith(`oaisaml_`) ? pe.WorkOS.toString() : pe.Auth0.toString()
                } : {},
                ...le(e)
            })
        }
    }, I = [d, S, C, ae, T, D], t[24] = D, t[25] = d, t[26] = S, t[27] = T, t[28] = C, t[29] = ae, t[30] = F, t[31] = I) : (F = t[30], I = t[31]), (0, Z.useEffect)(F, I);
    let L;
    t[32] !== r || t[33] !== p?.planType ? (L = () => {
        l.logEventWithStatsig(`Logged Out: Opened Auth Login Page`, `chatgpt_auth_login_page_load`, {
            cfConnectingIp: r,
            selected_plan_type: p?.planType ?? `none`
        })
    }, t[32] = r, t[33] = p?.planType, t[34] = L) : L = t[34];
    let R = p?.planType,
        z;
    t[35] !== r || t[36] !== R ? (z = [r, R], t[35] = r, t[36] = R, t[37] = z) : z = t[37], (0, Z.useEffect)(L, z);
    let B, H;
    t[38] === g ? (B = t[39], H = t[40]) : (B = () => {
        if (!g || b.current) return;
        b.current = !0, Gt();
        let e = l.logStructuredEvent(`ChatgptFreeReferralAuthPageShown`, {
            legacyStatsigEventName: `chatgpt_free_referral_auth_page_viewed`,
            programId: on,
            entryPoint: `rate_limit`
        });
        de.logEvent(`chatgpt_free_referral_auth_page_viewed`, null, {
            program_id: on,
            entrypoint: `rate_limit`,
            ...e ? {
                unique_event_id: e
            } : {}
        })
    }, H = [g], t[38] = g, t[39] = B, t[40] = H), (0, Z.useEffect)(B, H);
    let U;
    t[41] === Symbol.for(`react.memo_cache_sentinel`) ? (U = [], t[41] = U) : U = t[41], (0, Z.useEffect)(Yt, U);
    let W, G;
    t[42] !== _ || t[43] !== s || t[44] !== v ? (W = () => {
        if (y.current) return;
        y.current = !0;
        let e = s.get(`inv_ws_name`),
            t = s.get(`inv_email`),
            n = s.get(`invite_toast`);
        e && n === `seat_upgrade_approved` ? v.success(_.formatMessage(Ke.seatUpgradeApprovedToastMessage, {
            workspace_name: e
        }), {
            hasCloseButton: !0,
            duration: 600
        }) : e && t && v.success(_.formatMessage(Ke.invitedToastMessage, {
            workspace_name: e,
            email: t
        }), {
            hasCloseButton: !0,
            duration: 600
        })
    }, G = [s, _, v], t[42] = _, t[43] = s, t[44] = v, t[45] = W, t[46] = G) : (W = t[45], G = t[46]), (0, Z.useEffect)(W, G);
    let me = fe(),
        K;
    t[47] === _ ? K = t[48] : (K = _.formatMessage({
        id: `Login.pageHeadTitle`,
        defaultMessage: `Get started | ChatGPT`
    }), t[47] = _, t[48] = K);
    let ge;
    t[49] === K ? ge = t[50] : (ge = (0, Q.jsx)(`title`, {
        children: K
    }), t[49] = K, t[50] = ge);
    let _e = ge;
    if (S) return _e;
    let ve;
    t[51] === _ ? ve = t[52] : (ve = _.formatMessage({
        id: `Login.pageDescription`,
        defaultMessage: `Log in or sign up to ChatGPT`
    }), t[51] = _, t[52] = ve);
    let ye;
    t[53] === ve ? ye = t[54] : (ye = (0, Q.jsx)(`meta`, {
        name: `description`,
        content: ve
    }), t[53] = ve, t[54] = ye);
    let be = N ? void 0 : me ? `#00002E` : `#FFFFDB`,
        xe;
    t[55] === be ? xe = t[56] : (xe = {
        minHeight: `100dvh`,
        backgroundColor: be
    }, t[55] = be, t[56] = xe);
    let q;
    t[57] !== M || t[58] !== N || t[59] !== i || t[60] !== d || t[61] !== p ? (q = (0, Q.jsx)(ln, {
        nextUrl: d,
        selectedPlanIntent: p,
        isStorageComplianceEnabled: i,
        isPlainLoginPage: N,
        useNoAuthHoldoutUx: P,
        isPhotoLoginPage: M
    }), t[57] = M, t[58] = N, t[59] = i, t[60] = d, t[61] = p, t[62] = q) : q = t[62];
    let Se;
    t[63] === Symbol.for(`react.memo_cache_sentinel`) ? (Se = (0, Q.jsx)(ue, {
        children: (0, Q.jsx)(Ye, {})
    }), t[63] = Se) : Se = t[63];
    let Ce;
    t[64] !== xe || t[65] !== q ? (Ce = (0, Q.jsxs)(`div`, {
        className: `flex min-h-screen flex-col justify-between`,
        style: xe,
        children: [q, Se]
    }), t[64] = xe, t[65] = q, t[66] = Ce) : Ce = t[66];
    let we;
    return t[67] !== _e || t[68] !== ye || t[69] !== Ce ? (we = (0, Q.jsxs)(Q.Fragment, {
        children: [_e, ye, Ce]
    }), t[67] = _e, t[68] = ye, t[69] = Ce, t[70] = we) : we = t[70], we
}

function Yt() {
    window.location.hash === `#pricing` && ie.setBooleanCookie(oe.ShowPaymentModal, !0, {
        maxAge: 21600
    })
}

function Xt(e) {
    "use forget";
    let t = (0, nn.c)(59),
        {
            nextUrl: n,
            selectedPlanIntent: r,
            isStorageComplianceEnabled: i,
            isPlainLoginPage: a,
            useNoAuthHoldoutUx: o,
            simplifiedHeader: s,
            isPhotoLoginPage: c
        } = e,
        l = s !== void 0 && s,
        d = c !== void 0 && c,
        p = ze(),
        [m] = De(),
        h;
    t[0] !== m || t[1] !== r ? (h = Ct({
        isSso: m.has(`sso`),
        readTreatment: $t,
        selectedPlanIntent: r
    }), t[0] = m, t[1] = r, t[2] = h) : h = t[2];
    let g = h,
        v = r == null ? null : st(r.accountPlanType, p),
        y = r?.planType,
        b;
    t[3] === n ? b = t[4] : (b = Kt(n), t[3] = n, t[4] = b);
    let x = b,
        S;
    t[5] !== p || t[6] !== x ? (S = x ? p.formatMessage($.referralTitle) : null, t[5] = p, t[6] = x, t[7] = S) : S = t[7];
    let te = S,
        [C] = (0, Z.useState)(Qt),
        w;
    t[8] === m ? w = t[9] : (w = () => {
        let e = ie.getCookie(oe.AuthSessionLoggingId);
        return e && xt(m, {
            authSessionLoggingId: e,
            deviceId: ie.getCookie(oe.DeviceId)
        }) ? e : Le()
    }, t[8] = m, t[9] = w);
    let [T] = (0, Z.useState)(w), ne;
    t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (ne = le(Se()), t[10] = ne) : ne = t[10];
    let E;
    t[11] === T ? E = t[12] : (E = {
        ...ne,
        [se]: T
    }, t[11] = T, t[12] = E);
    let D = E,
        O;
    t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (O = ee(), t[13] = O) : O = t[13];
    let k = O,
        A;
    t[14] === k ? A = t[15] : (A = !k || _(), t[14] = k, t[15] = A);
    let ce = A && !o && !x,
        j, M;
    t[16] !== T || t[17] !== C || t[18] !== y ? (j = () => {
        ie.getCookie(oe.AuthSessionLoggingId) !== T && ie.setCookie(oe.AuthSessionLoggingId, T);
        let e = He();
        (C || e?.value) && Be(`info`, `Login email hydration checkpoint`, {
            phase: `hydration_complete`,
            auth_session_logging_id: T,
            captured_email_present: !!C,
            current_email_present: !!e?.value,
            email_value_preserved: e?.value === C,
            email_input_focused: document.activeElement === e
        }), ge({
            authSessionLoggingId: T,
            actionType: xe.ACCESS_FLOW_ENTRY_ACTION_TYPE_PAGE_LOADED,
            entryPoint: re.ACCESS_FLOW_ENTRY_POINT_AUTH_LOGIN_PAGE,
            entryTrigger: u.ACCESS_FLOW_ENTRY_TRIGGER_AUTOMATIC,
            cta: y == null ? `auto-triggerred` : `selected-plan-intent:${y}`
        })
    }, M = [T, C, y], t[16] = T, t[17] = C, t[18] = y, t[19] = j, t[20] = M) : (j = t[19], M = t[20]), (0, Z.useEffect)(j, M);
    let N = !a && `bg-white dark:bg-black`,
        P;
    t[21] === N ? P = t[22] : (P = q(`relative flex grow flex-col items-center justify-between px-5 py-8 text-black md:px-6 dark:text-white`, N), t[21] = N, t[22] = P);
    let F = yt,
        I = Zt,
        L = te ?? (g && v != null ? p.formatMessage($.selectedPlanIntentTitle, {
            plan: v
        }) : d ? p.formatMessage($.photoTitle, {
            lineBreak: `
`
        }) : p.formatMessage(o ? $.valuePropTitle : l ? Ke.pageTitle : $.standardTitle)),
        R = d ? `text-heading-1 whitespace-pre-line` : void 0,
        z;
    t[23] !== p || t[24] !== d || t[25] !== a || t[26] !== x || t[27] !== g || t[28] !== l || t[29] !== o ? (z = x ? null : d && !g ? p.formatMessage($.valuePropSubtitle) : o ? p.formatMessage(qt()) : g || l || a ? null : p.formatMessage({
        id: `AuthModal.subtitle`,
        defaultMessage: `You’ll get smarter responses and can upload files, images, and more.`
    }), t[23] = p, t[24] = d, t[25] = a, t[26] = x, t[27] = g, t[28] = l, t[29] = o, t[30] = z) : z = t[30];
    let B;
    t[31] === p ? B = t[32] : (B = p.formatMessage({
        id: `Login.tryItFirst`,
        defaultMessage: `Try it first`
    }), t[31] = p, t[32] = B);
    let de = d ? `photo` : `default`,
        V;
    t[33] !== F || t[34] !== D || t[35] !== C || t[36] !== x || t[37] !== ce || t[38] !== n || t[39] !== I || t[40] !== L || t[41] !== R || t[42] !== z || t[43] !== B || t[44] !== de ? (V = (0, Q.jsx)(F, {
        initialEmail: C,
        isUsernameOnTop: !1,
        onClose: I,
        title: L,
        titleClassName: R,
        subtitle: z,
        callbackUrl: n,
        authorizationParams: D,
        accessFlowEntryPoint: re.ACCESS_FLOW_ENTRY_POINT_AUTH_LOGIN_PAGE,
        accessFlowPage: ae.ACCESS_FLOW_PAGE_TYPE_CHATGPT_WEB_LOGIN_PAGE,
        hidePhoneOption: x,
        isStayLoggedOutVisible: ce,
        stayLoggedOutText: B,
        stayLoggedOutPlacement: `bottom`,
        isInModal: !1,
        collapsedLoginVariant: `none`,
        layoutVariant: de
    }), t[33] = F, t[34] = D, t[35] = C, t[36] = x, t[37] = ce, t[38] = n, t[39] = I, t[40] = L, t[41] = R, t[42] = z, t[43] = B, t[44] = de, t[45] = V) : V = t[45];
    let H;
    t[46] !== k || t[47] !== d ? (H = !d && (0, Q.jsx)(ue, {
        children: (0, Q.jsx)(cn, {
            isElectron: k
        })
    }), t[46] = k, t[47] = d, t[48] = H) : H = t[48];
    let U;
    t[49] !== V || t[50] !== H ? (U = (0, Q.jsx)(`div`, {
        className: `relative flex w-full grow flex-col items-center justify-center`,
        children: (0, Q.jsxs)(`div`, {
            className: `mt-5 w-full max-w-[440px]`,
            "data-login-form-container": `true`,
            children: [V, H]
        })
    }), t[49] = V, t[50] = H, t[51] = U) : U = t[51];
    let fe;
    t[52] === Symbol.for(`react.memo_cache_sentinel`) ? (fe = (0, Q.jsx)(f, {}), t[52] = fe) : fe = t[52];
    let W;
    t[53] === i ? W = t[54] : (W = (0, Q.jsxs)(`div`, {
        className: `mt-10 flex flex-col items-center justify-center`,
        children: [fe, (0, Q.jsx)(_t, {
            isStorageComplianceEnabled: i
        })]
    }), t[53] = i, t[54] = W);
    let G;
    return t[55] !== P || t[56] !== U || t[57] !== W ? (G = (0, Q.jsxs)(`div`, {
        className: P,
        children: [U, W]
    }), t[55] = P, t[56] = U, t[57] = W, t[58] = G) : G = t[58], G
}

function Zt() {}

function Qt() {
    return He()?.value
}

function $t() {
    return ye(`3233347819`).get(`show_selected_plan_intent`, !1)
}

function en(e) {
    "use forget";
    let t = (0, nn.c)(23),
        {
            nextUrl: n,
            selectedPlanIntent: r,
            isStorageComplianceEnabled: i,
            isPlainLoginPage: a,
            useNoAuthHoldoutUx: o,
            isPhotoLoginPage: s
        } = e,
        c = ze();
    if (a) {
        let e;
        t[0] !== c || t[1] !== o ? (e = o ? (0, Q.jsx)(`div`, {
            className: `text-token-text-primary absolute start-5 top-5 md:start-8 md:top-6`,
            children: (0, Q.jsx)(Je, {})
        }) : (0, Q.jsx)(Pe, {
            to: `/?slm=1`,
            className: `text-token-text-primary absolute start-5 top-5 md:start-8 md:top-6`,
            "aria-label": c.formatMessage({
                id: `Login.noAuthWordmarkLink`,
                defaultMessage: `ChatGPT home`
            }),
            children: (0, Q.jsx)(Je, {})
        }), t[0] = c, t[1] = o, t[2] = e) : e = t[2];
        let a;
        t[3] !== i || t[4] !== n || t[5] !== r || t[6] !== o ? (a = (0, Q.jsx)(`div`, {
            className: `flex w-full max-w-[520px]`,
            children: (0, Q.jsx)(Xt, {
                nextUrl: n,
                selectedPlanIntent: r,
                isStorageComplianceEnabled: i,
                isPlainLoginPage: !0,
                useNoAuthHoldoutUx: o
            })
        }), t[3] = i, t[4] = n, t[5] = r, t[6] = o, t[7] = a) : a = t[7];
        let s;
        return t[8] !== e || t[9] !== a ? (s = (0, Q.jsxs)(`div`, {
            className: `relative flex w-screen flex-1 justify-center`,
            children: [e, a]
        }), t[8] = e, t[9] = a, t[10] = s) : s = t[10], s
    }
    let l;
    t[11] !== s || t[12] !== o ? (l = s ? (0, Q.jsx)(Lt, {
        isNoAuthExitAvailable: !o
    }) : (0, Q.jsx)(Nt, {}), t[11] = s, t[12] = o, t[13] = l) : l = t[13];
    let u;
    t[14] !== s || t[15] !== i || t[16] !== n || t[17] !== r || t[18] !== o ? (u = (0, Q.jsx)(Xt, {
        nextUrl: n,
        selectedPlanIntent: r,
        isStorageComplianceEnabled: i,
        isPlainLoginPage: !1,
        useNoAuthHoldoutUx: o,
        simplifiedHeader: !0,
        isPhotoLoginPage: s
    }), t[14] = s, t[15] = i, t[16] = n, t[17] = r, t[18] = o, t[19] = u) : u = t[19];
    let d;
    return t[20] !== l || t[21] !== u ? (d = (0, Q.jsxs)(`div`, {
        className: `flex w-screen flex-1 flex-col md:grid md:grid-cols-2 lg:grid-cols-[60%_40%]`,
        children: [l, u]
    }), t[20] = l, t[21] = u, t[22] = d) : d = t[22], d
}

function tn() {
    We.recordCodexAppSurfaceAction(`chatgpt_auth_login_desktop_app`, `download`)
}
var nn, rn, Z, Q, $, an, on, sn, cn, ln, un, dn, fn = e((() => {
    we(), nn = Re(), B(), gt(), p(), Tt(), vt(), Ve(), bt(), Ge(), r(), tt(), nt(), ft(), mt(), N(), i(), Ft(), Wt(), I(), E(), et(), D(), K(), o(), _e(), te(), w(), ut(), m(), d(), L(), O(), Ce(), b(), ve(), P(), Ue(), dt(), F(), rn = Ie(), Z = t(Me()), Ae(), Ne(), me(), Q = Ee(), $ = Oe({
        standardTitle: {
            id: `AuthModal.title`,
            defaultMessage: `Log in or sign up`
        },
        valuePropTitle: {
            id: `Login.valuePropTitle`,
            defaultMessage: `Log in to start chatting`
        },
        valuePropSubtitle: {
            id: `Login.valuePropSubtitle`,
            defaultMessage: `Write, plan, learn, and create with ChatGPT`
        },
        photoTitle: {
            id: `Login.photoTitle`,
            defaultMessage: `Do anything,{lineBreak}one chat at a time`
        },
        valuePropSubtitlePersonalGoalPlan: {
            id: `Login.valuePropSubtitle.personalGoalPlan`,
            defaultMessage: `Turn your goals into a plan you can follow.`
        },
        valuePropSubtitleToughQuestions: {
            id: `Login.valuePropSubtitle.toughQuestions`,
            defaultMessage: `Work through tough questions and find a way forward.`
        },
        valuePropSubtitleBuildSkills: {
            id: `Login.valuePropSubtitle.buildSkills`,
            defaultMessage: `Build skills, understand more, and make progress faster.`
        },
        valuePropSubtitleLearnSolveProgress: {
            id: `Login.valuePropSubtitle.learnSolveProgress`,
            defaultMessage: `Learn, solve problems, and make progress on what matters.`
        },
        valuePropSubtitleBigQuestionsPersonalGoals: {
            id: `Login.valuePropSubtitle.bigQuestionsPersonalGoals`,
            defaultMessage: `From big questions to personal goals, take the next step.`
        },
        selectedPlanIntentTitle: {
            id: `Login.selectedPlanIntent.title`,
            defaultMessage: `Sign in to continue with {plan}`
        },
        referralTitle: {
            id: `Login.referralTitle`,
            defaultMessage: `Accept this referral`
        }
    }), an = /^\/refer\/[^/]+\/?$/, on = `chatgpt_referral_consumer_free`, sn = `chatgpt_free_referral_auth_page_viewed`, cn = e => {
        "use forget";
        let t = (0, nn.c)(5),
            {
                isElectron: n
            } = e,
            r;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = $e(), t[0] = r) : r = t[0];
        let i = r,
            a = i === `https://persistent.oaistatic.com/sidekick/public/ChatGPT_Desktop_public_latest.dmg` ? pt : i === `https://apps.microsoft.com/detail/9nt1r1c2hh7j` ? ht : null,
            o;
        t[1] === n ? o = t[2] : (o = !n && a != null && j(), t[1] = n, t[2] = o);
        let s = o,
            c;
        return t[3] === s ? c = t[4] : (c = s && (0, Q.jsx)(`div`, {
            className: `mt-6`,
            children: (0, Q.jsx)(G, {
                as: `a`,
                color: `secondary`,
                fullWidth: !0,
                icon: a,
                openNewTab: !0,
                rel: `noopener`,
                size: `large`,
                to: i,
                onClick: tn,
                children: (0, Q.jsx)(ke, {
                    id: `Login.downloadDesktopApp`,
                    defaultMessage: `Download desktop app`
                })
            })
        }), t[3] = s, t[4] = c), c
    }, ln = e => {
        "use forget";
        let t = (0, nn.c)(10),
            {
                nextUrl: n,
                selectedPlanIntent: r,
                isStorageComplianceEnabled: i,
                isPlainLoginPage: a,
                useNoAuthHoldoutUx: o,
                isPhotoLoginPage: s
            } = e,
            c;
        t[0] !== s || t[1] !== a || t[2] !== i || t[3] !== n || t[4] !== r || t[5] !== o ? (c = (0, Q.jsx)(en, {
            nextUrl: n,
            selectedPlanIntent: r,
            isStorageComplianceEnabled: i,
            isPlainLoginPage: a,
            useNoAuthHoldoutUx: o,
            isPhotoLoginPage: s
        }), t[0] = s, t[1] = a, t[2] = i, t[3] = n, t[4] = r, t[5] = o, t[6] = c) : c = t[6];
        let l;
        t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (l = void 0, t[7] = l) : l = t[7];
        let u;
        return t[8] === c ? u = t[9] : (u = (0, Q.jsxs)(Q.Fragment, {
            children: [c, l]
        }), t[8] = c, t[9] = u), u
    }, un = () => [...M], dn = je(function() {
        "use forget";
        let e = (0, nn.c)(2),
            t = Te(),
            n;
        return e[0] === t ? n = e[1] : (n = (0, Q.jsx)(Jt, {
            ...t
        }), e[0] = t, e[1] = n), n
    })
}));
e((() => {
    fn()
}))();
export {
    dn as
    default, un as meta
};
//# sourceMappingURL=auth.login-lhptjfjv.js.map