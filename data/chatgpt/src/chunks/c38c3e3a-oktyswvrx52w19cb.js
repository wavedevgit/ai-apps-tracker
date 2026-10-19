import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $ot as n,
    Aot as r,
    F7 as i,
    G5 as a,
    I1 as o,
    JT as s,
    K5 as c,
    Qot as l,
    R4 as u,
    Tat as d,
    VU as f,
    Y1 as p,
    _R as m,
    b4 as h,
    b_ as g,
    eat as _,
    hnt as v,
    j7 as y,
    jat as b,
    nat as x,
    oit as S,
    pnt as C,
    qT as w,
    sit as ee,
    x4 as T,
    yR as E,
    y_ as D,
    z4 as O,
    zU as k
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    $ as A,
    Bn as j,
    Ht as te,
    Nn as M,
    Pt as ne,
    Rn as N,
    Ut as re,
    Vn as P,
    jt as ie,
    p as ae,
    s as oe,
    wn as F,
    zn as I
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    C8 as se,
    S8 as ce
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    Dh as le,
    Th as ue
} from "./8b34dbc2-j8rcexxiltkm8ucr.js";
import {
    n as de,
    r as L,
    t as fe
} from "./bcd16462-hfe68o43shht70g4.js";
import {
    a as pe,
    i as me,
    n as he,
    t as ge
} from "./cff09cfe-lftfhd2436dbuepu.js";
import {
    n as _e,
    t as ve
} from "./dd53ca11-gudqiud17na1ngvy.js";

function ye(e) {
    "use forget";
    let t = (0, R.c)(39),
        {
            workspace: n,
            onAction: r
        } = e,
        i = I(),
        a = f(),
        o = ne(),
        [s, c] = (0, z.useState)(!1),
        l;
    t[0] === n.workspace_id ? l = t[1] : (l = {
        mutationFn: async () => {
            await y.safePost(`/accounts/{account_id}/invites/request`, {
                parameters: {
                    path: {
                        account_id: n.workspace_id
                    }
                }
            })
        }
    }, t[0] = n.workspace_id, t[1] = l);
    let u = ae(l),
        d;
    t[2] !== i || t[3] !== n.auto_accept_requests ? (d = n.auto_accept_requests ? i.formatMessage({
        id: `02uco2`,
        defaultMessage: `Join workspace`
    }) : i.formatMessage({
        id: `SfHDEl`,
        defaultMessage: `Request to join`
    }), t[2] = i, t[3] = n.auto_accept_requests, t[4] = d) : d = t[4];
    let p = d,
        m;
    t[5] !== i || t[6] !== n.auto_accept_requests ? (m = n.auto_accept_requests ? i.formatMessage({
        id: `389j56`,
        defaultMessage: `You'll be added automatically.`
    }) : i.formatMessage({
        id: `r4OENK`,
        defaultMessage: `We'll notify the workspace admins so they can review your request.`
    }), t[5] = i, t[6] = n.auto_accept_requests, t[7] = m) : m = t[7];
    let g = m,
        _;
    t[8] !== i || t[9] !== o || t[10] !== r || t[11] !== u || t[12] !== a || t[13] !== n.auto_accept_requests || t[14] !== n.workspace_id ? (_ = async () => {
        c(!0), r?.(n.workspace_id, n.auto_accept_requests);
        try {
            await u.mutateAsync(), await new Promise(be), n.auto_accept_requests ? h() : (a.success(i.formatMessage({
                id: `jXcezz`,
                defaultMessage: `Request sent. We'll email you once it's approved.`
            })), o(`/`, {
                replace: !0
            }))
        } catch {
            a.danger(i.formatMessage({
                id: `mcD8H3`,
                defaultMessage: `We couldn’t submit your request. Please refresh and try again.`
            }))
        }
        c(!1)
    }, t[8] = i, t[9] = o, t[10] = r, t[11] = u, t[12] = a, t[13] = n.auto_accept_requests, t[14] = n.workspace_id, t[15] = _) : _ = t[15];
    let v = _,
        b;
    t[16] !== i || t[17] !== n.workspace_name ? (b = n.workspace_name ? n.workspace_name : i.formatMessage({
        id: `NeB5OP`,
        defaultMessage: `this workspace`
    }), t[16] = i, t[17] = n.workspace_name, t[18] = b) : b = t[18];
    let x = b,
        S;
    t[19] === x ? S = t[20] : (S = (0, B.jsx)(`span`, {
        className: `font-medium`,
        children: x
    }), t[19] = x, t[20] = S);
    let C;
    t[21] !== S || t[22] !== n.domain ? (C = (0, B.jsx)(`p`, {
        children: (0, B.jsx)(M, {
            id: `6qLOzU`,
            defaultMessage: `The email domain {domain} has been claimed by {workspace}.`,
            values: {
                domain: n.domain,
                workspace: S
            }
        })
    }), t[21] = S, t[22] = n.domain, t[23] = C) : C = t[23];
    let ee;
    t[24] === Symbol.for(`react.memo_cache_sentinel`) ? (ee = (0, B.jsx)(`p`, {
        className: `mt-2`,
        children: (0, B.jsx)(M, {
            id: `/tMMFA`,
            defaultMessage: `Please join the workspace managed by your school/district by clicking the button below.`
        })
    }), t[24] = ee) : ee = t[24];
    let T;
    t[25] === C ? T = t[26] : (T = (0, B.jsxs)(`div`, {
        className: `text-token-text-secondary text-base`,
        children: [C, ee]
    }), t[25] = C, t[26] = T);
    let E;
    t[27] !== p || t[28] !== v || t[29] !== s ? (E = (0, B.jsx)(w, {
        onClick: v,
        loading: s,
        className: `w-fit`,
        children: p
    }), t[27] = p, t[28] = v, t[29] = s, t[30] = E) : E = t[30];
    let D;
    t[31] === g ? D = t[32] : (D = (0, B.jsx)(`p`, {
        className: `text-token-text-tertiary text-sm`,
        children: g
    }), t[31] = g, t[32] = D);
    let O;
    t[33] !== E || t[34] !== D ? (O = (0, B.jsxs)(`div`, {
        className: `mt-6 flex flex-col gap-3 md:flex-row md:items-center`,
        children: [E, D]
    }), t[33] = E, t[34] = D, t[35] = O) : O = t[35];
    let k;
    return t[36] !== O || t[37] !== T ? (k = (0, B.jsx)(`section`, {
        className: `mx-auto w-full pt-0 pb-10 ${xe}`,
        children: (0, B.jsxs)(`div`, {
            className: `border-token-border-strong bg-token-main-surface-secondary mx-auto w-full max-w-[900px] rounded-2xl border px-6 py-6 text-start`,
            children: [T, O]
        })
    }), t[36] = O, t[37] = T, t[38] = k) : k = t[38], k
}

function be(e) {
    return setTimeout(e, 3e3)
}
var R, z, B, xe, Se = e((() => {
    R = F(), s(), k(), T(), i(), oe(), z = t(P()), N(), A(), B = j(), xe = `max-w-(--breakpoint-2xl) px-4 md:px-8`
}));

function Ce(e) {
    "use forget";
    let t = (0, De.c)(6),
        n = I(),
        r = E()?.email ?? ``,
        i;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = {
        mutationFn: we
    }, t[0] = i) : i = t[0];
    let a = ae(i),
        o;
    return t[1] !== a || t[2] !== e || t[3] !== n || t[4] !== r ? (o = async () => {
        G.setIsLoading(!0), G.setModalErrorMessage(void 0);
        try {
            let t;
            if (e) t = e;
            else {
                let {
                    verification_id: e
                } = await a.mutateAsync();
                t = e
            }
            let n = Ee(t, window.location.href);
            window.location.href = n, G.setIsLoading(!1)
        } catch (e) {
            let t = e;
            _.addError(`Teachers: Failed verification: ${t}`), G.setIsLoading(!1);
            let i = V(t) ? (0, H.createElement)(H.Fragment, null, n.formatMessage({
                id: `TtiJI1`,
                defaultMessage: `To help keep ChatGPT for Teachers secure and available to educators, we now require users to register with a school email address. Your email domain ({email}) isn't eligible for teacher verification. Please sign in and reverify with your school-issued email to continue. If you think you're seeing this message by mistake, OpenAI Support can help at`
            }, {
                email: r
            }), ` `, (0, H.createElement)(`a`, {
                className: `underline`,
                href: `mailto:support@openai.com`
            }, `support@openai.com`)) : n.formatMessage({
                id: `/Ei+Q8`,
                defaultMessage: `An error occurred during verification, please try again.`
            });
            G.setModalErrorMessage(i)
        }
    }, t[1] = a, t[2] = e, t[3] = n, t[4] = r, t[5] = o) : o = t[5], o
}

function we() {
    return y.safePost(`/teachers/create_verification`)
}

function Te() {
    "use forget";
    let e = (0, De.c)(3),
        t = I(),
        n = ne(),
        r;
    return e[0] !== t || e[1] !== n ? (r = async () => {
        G.setIsLoading(!0), G.setModalErrorMessage(void 0);
        let e = t.formatMessage({
            id: `Etg1KW`,
            defaultMessage: `An error occurred while claiming your offer, please try again.`
        });
        try {
            G.setIsLoading(!1), n(ge)
        } catch {
            G.setIsLoading(!1), G.setModalErrorMessage(e)
        }
    }, e[0] = t, e[1] = n, e[2] = r) : r = e[2], r
}

function Ee(e, t) {
    let n = new URL(`https://services.sheerid.com/verify/68d47554aa292d20b9bec8f7/`);
    return n.searchParams.set(`verificationId`, e), n.searchParams.set(`redirectUrl`, t), n.toString()
}

function V(e) {
    if (!(e instanceof d)) return !1;
    let t = typeof e.detail == `string` ? e.detail : e.message;
    return e.code === `k12_email_domain_rejected` || t === `Email domain is not eligible for teacher verification.`
}
var De, H, U, W, G, K = e((() => {
        De = F(), m(), x(), b(), i(), he(), oe(), H = t(P()), N(), A(), n(), O(), U = l(u(() => ({
            isLoading: !1,
            isModalOpen: !1,
            modalErrorMessage: void 0
        }))), W = U.setState, G = {
            setIsLoading: e => {
                W({
                    isLoading: e
                })
            },
            setModalErrorMessage: e => {
                W({
                    modalErrorMessage: e
                })
            },
            closeModal: () => {
                W({
                    isModalOpen: !1
                })
            },
            openModal: () => {
                W({
                    isModalOpen: !0
                })
            }
        }
    })),
    Oe, q = e((() => {
        Oe = `k12_email_mismatch`
    }));

function J(e) {
    "use forget";
    let t = (0, ke.c)(9),
        {
            initialVerificationId: n,
            onVerifyClick: r,
            buttonLabel: i
        } = e,
        a = Ce(n === void 0 ? null : n),
        {
            isLoading: o
        } = U(),
        s;
    t[0] !== r || t[1] !== a ? (s = async () => {
        r?.(`header`), await a()
    }, t[0] = r, t[1] = a, t[2] = s) : s = t[2];
    let c;
    t[3] === i ? c = t[4] : (c = i ?? (0, Ae.jsx)(M, {
        id: `GpDdaK`,
        defaultMessage: `Verify status`
    }), t[3] = i, t[4] = c);
    let l;
    return t[5] !== o || t[6] !== s || t[7] !== c ? (l = (0, Ae.jsx)(`div`, {
        children: (0, Ae.jsx)(w, {
            loading: o,
            onClick: s,
            children: c
        })
    }), t[5] = o, t[6] = s, t[7] = c, t[8] = l) : l = t[8], l
}
var ke, Ae, je = e((() => {
    ke = F(), s(), K(), N(), Ae = j()
}));

function Me(e) {
    "use forget";
    let t = (0, Ne.c)(13),
        {
            buttonSource: n,
            onCreateWorkspaceClick: r
        } = e,
        [i] = te(),
        a;
    t[0] === i ? a = t[1] : (a = i.get(`redirectedFromSheerId`), t[0] = i, t[1] = a);
    let o = a === `true`,
        s, c;
    t[2] === o ? (s = t[3], c = t[4]) : (s = () => {
        o && G.openModal()
    }, c = [o], t[2] = o, t[3] = s, t[4] = c), (0, Pe.useEffect)(s, c);
    let {
        isLoading: l
    } = U(), u = Te(), d;
    t[5] !== n || t[6] !== r || t[7] !== u ? (d = async () => {
        r?.(n), await u()
    }, t[5] = n, t[6] = r, t[7] = u, t[8] = d) : d = t[8];
    let f;
    t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (f = (0, Fe.jsx)(M, {
        id: `JFJXXC`,
        defaultMessage: `Create workspace`
    }), t[9] = f) : f = t[9];
    let p;
    return t[10] !== l || t[11] !== d ? (p = (0, Fe.jsx)(`div`, {
        children: (0, Fe.jsx)(w, {
            loading: l,
            onClick: d,
            children: f
        })
    }), t[10] = l, t[11] = d, t[12] = p) : p = t[12], p
}
var Ne, Pe, Fe, Ie = e((() => {
    Ne = F(), s(), K(), Pe = t(P()), N(), A(), Fe = j()
}));

function Le(e) {
    "use forget";
    let t = (0, Re.c)(14),
        {
            enrollmentState: n,
            buttonSource: r,
            onVerifyClick: i,
            onCreateWorkspaceClick: a
        } = e;
    switch (n.name) {
        case `coming-soon`: {
            let e;
            return t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Y.jsx)(w, {
                disabled: !0,
                children: (0, Y.jsx)(M, {
                    id: `penhJY`,
                    defaultMessage: `Offer currently unavailable`
                })
            }), t[0] = e) : e = t[0], e
        }
        case `loading`: {
            let e;
            return t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Y.jsx)(w, {
                loading: !0,
                disabled: !0,
                children: (0, Y.jsx)(M, {
                    id: `B0181a`,
                    defaultMessage: `Checking eligibility...`
                })
            }), t[1] = e) : e = t[1], e
        }
        case `error`: {
            let e;
            t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Y.jsx)(M, {
                id: `OX0niz`,
                defaultMessage: `Try again`
            }), t[2] = e) : e = t[2];
            let r = e,
                a;
            return t[3] !== n.canRetry || t[4] !== i ? (a = n.canRetry ? (0, Y.jsx)(J, {
                initialVerificationId: null,
                onVerifyClick: i,
                buttonLabel: r
            }) : (0, Y.jsx)(w, {
                disabled: !0,
                children: r
            }), t[3] = n.canRetry, t[4] = i, t[5] = a) : a = t[5], a
        }
        case `linked`: {
            let e;
            return t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Y.jsx)(w, {
                disabled: !0,
                children: (0, Y.jsx)(M, {
                    id: `nc9Am6`,
                    defaultMessage: `Verification already used`
                })
            }), t[6] = e) : e = t[6], e
        }
        case `domain-claimed`: {
            let e;
            return t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Y.jsx)(w, {
                disabled: !0,
                children: (0, Y.jsx)(M, {
                    id: `Fw04cV`,
                    defaultMessage: `Join the workspace shown below`
                })
            }), t[7] = e) : e = t[7], e
        }
        case `needs-verification`: {
            let e;
            return t[8] !== n.verificationId || t[9] !== i ? (e = (0, Y.jsx)(J, {
                initialVerificationId: n.verificationId,
                onVerifyClick: i
            }), t[8] = n.verificationId, t[9] = i, t[10] = e) : e = t[10], e
        }
        case `verified`: {
            let e;
            return t[11] !== r || t[12] !== a ? (e = (0, Y.jsx)(Me, {
                buttonSource: r,
                onCreateWorkspaceClick: a
            }), t[11] = r, t[12] = a, t[13] = e) : e = t[13], e
        }
    }
}
var Re, Y, ze = e((() => {
    Re = F(), s(), je(), Ie(), N(), Y = j()
}));

function Be(e) {
    "use forget";
    let t = (0, Ve.c)(24),
        {
            title: n,
            description: r,
            enrollmentState: i,
            ref: o,
            onSecondaryAction: s,
            onVerifyClick: c,
            onCreateWorkspaceClick: l,
            showActions: u
        } = e,
        d = u === void 0 || u,
        f = i.name === `error`,
        p = f ? i : null,
        m = p?.errorCode === Oe,
        h = E()?.email ?? ``,
        {
            modalErrorMessage: g
        } = U(),
        _ = d ? `h-[calc(100vh-325px)] max-h-[600px]` : `h-auto`,
        v = d ? `pb-32 md:pb-20` : `pb-16 md:pb-16`,
        y;
    t[0] !== _ || t[1] !== v ? (y = a(`mx-auto flex min-h-fit max-w-(--breakpoint-2xl) flex-col items-center justify-center gap-4 px-4 pt-16 md:px-8 md:pt-20`, _, v), t[0] = _, t[1] = v, t[2] = y) : y = t[2];
    let b;
    t[3] === n ? b = t[4] : (b = (0, X.jsx)(`h1`, {
        className: `relative max-w-[900px] text-center text-4xl text-balance after:pointer-events-none after:absolute after:end-0 after:top-[-95px] after:h-[144px] after:w-[113px] after:bg-[url(https://cdn.openai.com/chatgpt/ctf-cdn/student-landing/splash-stars-v2.png)] after:bg-contain after:bg-center after:bg-no-repeat after:opacity-100 after:content-[''] md:text-5xl md:text-pretty md:after:opacity-0 dark:after:invert`,
        children: (0, X.jsx)(`span`, {
            className: `relative after:pointer-events-none after:absolute after:start-[calc(100%_+_280px)] after:top-[-95px] after:h-[144px] after:w-[113px] after:bg-[url(https://cdn.openai.com/chatgpt/ctf-cdn/student-landing/splash-stars-v2.png)] after:bg-contain after:bg-center after:bg-no-repeat after:opacity-0 after:content-[''] md:after:opacity-100 dark:after:invert`,
            children: n
        })
    }), t[3] = n, t[4] = b);
    let x;
    t[5] === r ? x = t[6] : (x = r && (0, X.jsx)(`p`, {
        className: `max-w-[800px] text-center`,
        children: r
    }), t[5] = r, t[6] = x);
    let S;
    t[7] !== i || t[8] !== p?.canRetry || t[9] !== m || t[10] !== f || t[11] !== g || t[12] !== l || t[13] !== s || t[14] !== c || t[15] !== d || t[16] !== h ? (S = d ? (0, X.jsxs)(`div`, {
        className: `mt-2 flex flex-col items-center gap-2 text-center`,
        children: [f ? (0, X.jsxs)(`div`, {
            className: `flex flex-col items-center gap-1 text-center text-sm`,
            children: [(0, X.jsx)(`p`, {
                className: `font-medium text-red-500`,
                children: m ? (0, X.jsx)(M, {
                    id: `5B85Hf`,
                    defaultMessage: `The email you used for verification doesn't match your login email. Please sign in with the verified school email and try again. Current login email: {email}`,
                    values: {
                        email: h
                    }
                }) : (0, X.jsx)(M, {
                    id: `JANzo6`,
                    defaultMessage: `Your previous verification attempt failed.`
                })
            }), !m && !p?.canRetry ? (0, X.jsx)(`p`, {
                className: `text-red-500`,
                children: (0, X.jsx)(M, {
                    id: `v0H4Fi`,
                    defaultMessage: `You've reached the maximum number of attempts.`
                })
            }) : null]
        }) : null, g ? (0, X.jsx)(`div`, {
            className: `text-token-text-error mx-auto max-w-[720px] text-sm`,
            children: g
        }) : null, (0, X.jsxs)(`div`, {
            className: `relative flex flex-col items-center justify-center gap-2 pb-4 md:flex-row`,
            children: [(0, X.jsx)(Le, {
                enrollmentState: i,
                buttonSource: `splash`,
                onVerifyClick: c,
                onCreateWorkspaceClick: l
            }), (0, X.jsx)(w, {
                color: `ghost`,
                onClick: s,
                children: (0, X.jsx)(M, {
                    id: `ng/0pH`,
                    defaultMessage: `Learn more`
                })
            })]
        }), (0, X.jsx)(`div`, {
            className: `bg-token-main-surface-secondary text-token-text-secondary mt-4 max-w-[520px] rounded-3xl px-5 py-4 text-center text-sm leading-relaxed`,
            children: (0, X.jsx)(M, {
                id: `H3dGOo`,
                defaultMessage: `You’ll be sent to a trusted third-party verification partner called SheerID. Anything you upload is used only to confirm your educator status—OpenAI won’t see or store your documents.`
            })
        })]
    }) : null, t[7] = i, t[8] = p?.canRetry, t[9] = m, t[10] = f, t[11] = g, t[12] = l, t[13] = s, t[14] = c, t[15] = d, t[16] = h, t[17] = S) : S = t[17];
    let C;
    return t[18] !== o || t[19] !== y || t[20] !== b || t[21] !== x || t[22] !== S ? (C = (0, X.jsxs)(`section`, {
        ref: o,
        className: y,
        children: [b, x, S]
    }), t[18] = o, t[19] = y, t[20] = b, t[21] = x, t[22] = S, t[23] = C) : C = t[23], C
}
var Ve, X, He = e((() => {
    Ve = F(), s(), m(), K(), q(), c(), N(), ze(), X = j()
}));

function Ue() {
    "use forget";
    let e = (0, Xe.c)(79),
        t = pe(),
        n = t.name === `domain-claimed` ? t.workspace : null,
        i;
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = ee(), e[0] = i) : i = e[0];
    let a = i,
        o;
    e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (o = r(), e[1] = o) : o = e[1];
    let s = o,
        c = p(),
        l = E(),
        u = ie(),
        d = ne(),
        f = c?.planType ?? s?.account?.planType ?? null,
        m = l?.email_domain_type ?? null,
        h;
    e[2] === u.search ? h = e[3] : (h = new URLSearchParams(u.search).get(`referer`), e[2] = u.search, e[3] = h);
    let g = h,
        _ = `verificationId` in t ? t.verificationId ?? null : null,
        v;
    e[4] !== t.name || e[5] !== _ ? (v = {
        enrollmentState: t.name,
        enrollmentVerificationId: _
    }, e[4] = t.name, e[5] = _, e[6] = v) : v = e[6];
    let y = v,
        b = a ? f ?? `unknown` : null,
        x;
    e[7] !== m || e[8] !== y || e[9] !== b ? (x = {
        isLoggedIn: a,
        loggedInStatus: a ? `logged_in` : `logged_out`,
        accountPlanType: b,
        emailDomainType: m,
        ...y
    }, e[7] = m, e[8] = y, e[9] = b, e[10] = x) : x = e[10];
    let S = x,
        w;
    e[11] !== S || e[12] !== g ? (w = (e, t, n) => {
        C.logEventWithStatsig(e, t, {
            ...S,
            referer: g ?? null,
            ...n
        })
    }, e[11] = S, e[12] = g, e[13] = w) : w = e[13];
    let T = w,
        D = g ?? null,
        O;
    e[14] !== m || e[15] !== f || e[16] !== D ? (O = {
        loggedInStatus: a ? `logged_in` : `logged_out`,
        accountPlanType: f,
        emailDomainType: m,
        referer: D
    }, e[14] = m, e[15] = f, e[16] = D, e[17] = O) : O = e[17];
    let k = O,
        A;
    e[18] !== t.name || e[19] !== T ? (A = e => {
        T($.verifyClick.segment, $.verifyClick.statsig, {
            source: e
        }), L(`verification`, `verify_click`, {
            source: e,
            verificationState: t.name
        })
    }, e[18] = t.name, e[19] = T, e[20] = A) : A = e[20];
    let j = A,
        te;
    e[21] === T ? te = e[22] : (te = e => {
        T($.createWorkspaceClick.segment, $.createWorkspaceClick.statsig, {
            source: e
        }), L(`verification`, `create_workspace_click`, {
            source: e
        })
    }, e[21] = T, e[22] = te);
    let M = te,
        N = m != null,
        re = t.name !== `loading`,
        P, ae;
    e[23] === d ? (P = e[24], ae = e[25]) : (P = () => {
        a || d(`/k12-plan`, {
            replace: !0
        })
    }, ae = [a, d], e[23] = d, e[24] = P, e[25] = ae), (0, Z.useEffect)(P, ae);
    let oe = t.name === `verified`,
        F = n != null,
        I = F ? tt : oe ? et : $e,
        se = (0, Z.useRef)(null),
        ce = (0, Z.useRef)(null),
        le = (0, Z.useRef)(null),
        ue = (0, Z.useRef)(!1),
        fe = (0, Z.useRef)(!1),
        me, he;
    e[26] === Symbol.for(`react.memo_cache_sentinel`) ? (me = [se, ce], he = {
        threshold: .1
    }, e[26] = me, e[27] = he) : (me = e[26], he = e[27]);
    let [ge, _e] = qe(me, he), ve = !F && (!ge && !_e || !1), be, R;
    e[28] !== k || e[29] !== N || e[30] !== re || e[31] !== T ? (be = () => {
        !a || !N || !re || ue.current || (T($.impression.segment, $.impression.statsig), L(`verification`, `page_view`, k), ue.current = !0)
    }, R = [k, N, re, a, T], e[28] = k, e[29] = N, e[30] = re, e[31] = T, e[32] = be, e[33] = R) : (be = e[32], R = e[33]), (0, Z.useEffect)(be, R);
    let z, B;
    e[34] !== k || e[35] !== t.name ? (z = () => {
        t.name === `error` && de(`verification`, `enrollment_status_error`, Error(`enrollment_status_error`), k)
    }, B = [k, t.name], e[34] = k, e[35] = t.name, e[36] = z, e[37] = B) : (z = e[36], B = e[37]), (0, Z.useEffect)(z, B);
    let xe, Se;
    e[38] !== n || e[39] !== T ? (xe = () => {
        !n || fe.current || (T($.domainClaimedShown.segment, $.domainClaimedShown.statsig, {
            source: `domain-claimed`,
            workspace_id: n.workspace_id
        }), L(`verification`, `domain_claimed_notice_shown`, {
            workspaceId: n.workspace_id,
            domain: n.domain
        }), fe.current = !0)
    }, Se = [n, T], e[38] = n, e[39] = T, e[40] = xe, e[41] = Se) : (xe = e[40], Se = e[41]), (0, Z.useEffect)(xe, Se);
    let Ce;
    e[42] === T ? Ce = e[43] : (Ce = () => {
        T($.learnMore.segment, $.learnMore.statsig), L(`verification`, `learn_more_click`), window.open(`https://chatgpt.com/plans/k12-teachers`, `_blank`, `noopener`)
    }, e[42] = T, e[43] = Ce);
    let we = Ce,
        Te;
    e[44] === T ? Te = e[45] : (Te = (e, t) => {
        T($.domainClaimedAction.segment, $.domainClaimedAction.statsig, {
            source: `domain-claimed`,
            workspaceId: e,
            workspace_auto_accepts_requests: t
        }), L(`verification`, `domain_claimed_action_clicked`, {
            workspaceId: e,
            workspaceAutoAcceptsRequests: t
        })
    }, e[44] = T, e[45] = Te);
    let Ee = Te;
    if (!a) return null;
    let V;
    e[46] !== t || e[47] !== M || e[48] !== j ? (V = (0, Q.jsx)(We, {
        enrollmentState: t,
        onVerifyClick: j,
        onCreateWorkspaceClick: M
    }), e[46] = t, e[47] = M, e[48] = j, e[49] = V) : V = e[49];
    let De = !F,
        H;
    e[50] !== t || e[51] !== M || e[52] !== we || e[53] !== j || e[54] !== I.description || e[55] !== I.title || e[56] !== De ? (H = (0, Q.jsx)(Be, {
        ref: se,
        description: I.description,
        title: I.title,
        enrollmentState: t,
        onSecondaryAction: we,
        onVerifyClick: j,
        onCreateWorkspaceClick: M,
        showActions: De
    }), e[50] = t, e[51] = M, e[52] = we, e[53] = j, e[54] = I.description, e[55] = I.title, e[56] = De, e[57] = H) : H = e[57];
    let U;
    e[58] !== n || e[59] !== Ee || e[60] !== F ? (U = F && n ? (0, Q.jsx)(ye, {
        workspace: n,
        onAction: Ee
    }) : null, e[58] = n, e[59] = Ee, e[60] = F, e[61] = U) : U = e[61];
    let W;
    e[62] === Symbol.for(`react.memo_cache_sentinel`) ? (W = {
        question: `Who qualifies for this plan?`,
        answer: (0, Q.jsx)(`p`, {
            children: `You are eligible for this plan if you are currently employed by an accredited K-12 school or district in the United States. Teachers, staff, administrators, and district leaders are all eligible.`
        })
    }, e[62] = W) : W = e[62];
    let G;
    e[63] === Symbol.for(`react.memo_cache_sentinel`) ? (G = {
        question: `How do I sign up for this plan?`,
        answer: (0, Q.jsx)(Q.Fragment, {
            children: (0, Q.jsx)(`p`, {
                children: `First, you’ll need to verify your educator status through SheerID here. Once verified, you will be redirected back to ChatGPT to create a free workspace.`
            })
        })
    }, e[63] = G) : G = e[63];
    let K;
    e[64] === Symbol.for(`react.memo_cache_sentinel`) ? (K = {
        question: `Does OpenAI train its models on my data?`,
        answer: (0, Q.jsx)(`p`, {
            children: `No, anything you share with ChatGPT for Teachers is not used to train our models by default.`
        })
    }, e[64] = K) : K = e[64];
    let Oe;
    e[65] === Symbol.for(`react.memo_cache_sentinel`) ? (Oe = [W, G, K, {
        question: `How is data kept secure?`,
        answer: (0, Q.jsx)(`p`, {
            children: `The plan includes multi-factor authentication (MFA), SAML SSO, and encryption to protect your data and assist your school meet its FERPA compliance obligations.`
        })
    }], e[65] = Oe) : Oe = e[65];
    let q;
    e[66] === T ? q = e[67] : (q = (0, Q.jsx)(Ke, {
        ref: le,
        title: `FAQs`,
        faqs: Oe,
        logAnalyticsEvent: T
    }), e[66] = T, e[67] = q);
    let J;
    e[68] !== t || e[69] !== M || e[70] !== j || e[71] !== ve ? (J = (0, Q.jsx)(Ge, {
        enrollmentState: t,
        showBottomNav: ve,
        onVerifyClick: j,
        onCreateWorkspaceClick: M
    }), e[68] = t, e[69] = M, e[70] = j, e[71] = ve, e[72] = J) : J = e[72];
    let ke;
    return e[73] !== V || e[74] !== H || e[75] !== U || e[76] !== q || e[77] !== J ? (ke = (0, Q.jsxs)(`div`, {
        className: `font-oai overflow-hidden pt-[71px] pb-8`,
        children: [V, H, U, q, J]
    }), e[73] = V, e[74] = H, e[75] = U, e[76] = q, e[77] = J, e[78] = ke) : ke = e[78], ke
}

function We(e) {
    "use forget";
    let t = (0, Xe.c)(19),
        {
            enrollmentState: n,
            onVerifyClick: r,
            onCreateWorkspaceClick: i
        } = e,
        [o, s] = (0, Z.useState)(!1),
        [c, l] = (0, Z.useState)(!1),
        u = n.name !== `domain-claimed`,
        d, f;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (d = () => {
        let e = g(() => {
            s(window.scrollY > 0), l(window.scrollY > 300)
        }, 200);
        return window.addEventListener(`scroll`, e), () => window.removeEventListener(`scroll`, e)
    }, f = [], t[0] = d, t[1] = f) : (d = t[0], f = t[1]), (0, Z.useEffect)(d, f);
    let p = !o,
        m;
    t[2] !== o || t[3] !== p ? (m = a(`bg-token-main-surface-primary absolute start-0 end-0 top-0 z-10 py-4 transition-all duration-300 md:fixed md:border-b`, {
        "border-token-border-default": o,
        "border-transparent": p
    }), t[2] = o, t[3] = p, t[4] = m) : m = t[4];
    let h;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (h = a(`mx-auto flex items-center justify-between`, Ze), t[5] = h) : h = t[5];
    let _;
    t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = (0, Q.jsx)(`a`, {
        href: `/`,
        "aria-label": `ChatGPT Home`,
        children: (0, Q.jsx)(ce, {})
    }), t[6] = _) : _ = t[6];
    let v;
    t[7] !== n || t[8] !== i || t[9] !== r || t[10] !== u || t[11] !== c ? (v = u ? (0, Q.jsx)(`div`, {
        className: a(`opacity-0 transition-opacity`, {
            "md:opacity-100": c
        }),
        inert: !c,
        children: (0, Q.jsx)(Le, {
            enrollmentState: n,
            buttonSource: `header`,
            onVerifyClick: r,
            onCreateWorkspaceClick: i
        })
    }) : null, t[7] = n, t[8] = i, t[9] = r, t[10] = u, t[11] = c, t[12] = v) : v = t[12];
    let y;
    t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (y = (0, Q.jsx)(ue, {}), t[13] = y) : y = t[13];
    let b;
    t[14] === v ? b = t[15] : (b = (0, Q.jsxs)(`div`, {
        className: h,
        children: [_, (0, Q.jsxs)(`div`, {
            className: `flex gap-2`,
            children: [v, y]
        })]
    }), t[14] = v, t[15] = b);
    let x;
    return t[16] !== m || t[17] !== b ? (x = (0, Q.jsx)(`nav`, {
        className: m,
        children: b
    }), t[16] = m, t[17] = b, t[18] = x) : x = t[18], x
}

function Ge(e) {
    "use forget";
    let t = (0, Xe.c)(10),
        {
            enrollmentState: n,
            showBottomNav: r,
            onVerifyClick: i,
            onCreateWorkspaceClick: o
        } = e,
        s = r !== void 0 && r,
        c = !s,
        l;
    t[0] !== s || t[1] !== c ? (l = a(`border-token-border-default bg-token-main-surface-primary fixed start-0 end-0 bottom-0 z-10 border-t py-4 text-center transition-[opacity_transform] duration-200 ease-in-out md:hidden`, {
        "translate-y-0 opacity-100": s,
        "translate-y-[100%] opacity-0": c
    }), t[0] = s, t[1] = c, t[2] = l) : l = t[2];
    let u;
    t[3] !== n || t[4] !== o || t[5] !== i ? (u = (0, Q.jsx)(Le, {
        enrollmentState: n,
        buttonSource: `header`,
        onVerifyClick: i,
        onCreateWorkspaceClick: o
    }), t[3] = n, t[4] = o, t[5] = i, t[6] = u) : u = t[6];
    let d;
    return t[7] !== l || t[8] !== u ? (d = (0, Q.jsx)(`nav`, {
        className: l,
        children: u
    }), t[7] = l, t[8] = u, t[9] = d) : d = t[9], d
}

function Ke(e) {
    "use forget";
    let t = (0, Xe.c)(21),
        {
            title: n,
            faqs: r,
            ref: i,
            logAnalyticsEvent: o
        } = e,
        [s, c] = (0, Z.useState)(0),
        l;
    t[0] !== r || t[1] !== o || t[2] !== s ? (l = e => {
        let t = s === e ? -1 : e,
            n = t === e;
        o($.faqToggle.segment, $.faqToggle.statsig, {
            question: r[e]?.question,
            action: n ? `open` : `close`
        }), L(`verification`, `faq_toggle`, {
            question: r[e]?.question,
            action: n ? `open` : `close`
        }), c(t)
    }, t[0] = r, t[1] = o, t[2] = s, t[3] = l) : l = t[3];
    let u = l,
        d, f;
    t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (d = a(`mx-auto flex max-w-[596px] flex-col gap-8 px-4 py-20 md:gap-16 md:py-32`), f = a(Qe, `sm:text-center`), t[4] = d, t[5] = f) : (d = t[4], f = t[5]);
    let p;
    t[6] === n ? p = t[7] : (p = (0, Q.jsx)(`h2`, {
        className: f,
        children: (0, Q.jsx)(`span`, {
            className: `relative after:pointer-events-none after:absolute after:start-[calc(100%_-_25px)] after:bottom-[75%] after:h-[64px] after:w-[75px] after:bg-[url(https://cdn.openai.com/chatgpt/ctf-cdn/student-landing/faq-bubble-small-v2.png)] after:bg-contain after:bg-center after:bg-no-repeat after:content-[''] dark:after:invert`,
            children: n
        })
    }), t[6] = n, t[7] = p);
    let m;
    if (t[8] !== r || t[9] !== s || t[10] !== u) {
        let e;
        t[12] !== s || t[13] !== u ? (e = (e, t) => (0, Q.jsx)(ve, {
            question: e.question,
            answer: e.answer,
            isOpen: s === t,
            onToggle: () => u(t)
        }, t), t[12] = s, t[13] = u, t[14] = e) : e = t[14], m = r.map(e), t[8] = r, t[9] = s, t[10] = u, t[11] = m
    } else m = t[11];
    let h;
    t[15] === m ? h = t[16] : (h = (0, Q.jsx)(`div`, {
        className: ``,
        children: m
    }), t[15] = m, t[16] = h);
    let g;
    return t[17] !== i || t[18] !== p || t[19] !== h ? (g = (0, Q.jsxs)(`section`, {
        ref: i,
        className: d,
        children: [p, h]
    }), t[17] = i, t[18] = p, t[19] = h, t[20] = g) : g = t[20], g
}

function qe(e, t) {
    "use forget";
    let n = (0, Xe.c)(8),
        r;
    n[0] === t ? r = n[1] : (r = t === void 0 ? {} : t, n[0] = t, n[1] = r);
    let i = r,
        a;
    n[2] === e ? a = n[3] : (a = () => e.map(Ye), n[2] = e, n[3] = a);
    let [o, s] = (0, Z.useState)(a), c, l;
    return n[4] !== i || n[5] !== e ? (c = () => {
        let t = e.map(Je),
            n = new IntersectionObserver(e => {
                e.forEach(e => {
                    let n = t.findIndex(t => t === e.target);
                    n !== -1 && s(t => {
                        if (t[n] === e.isIntersecting) return t;
                        let r = [...t];
                        return r[n] = e.isIntersecting, r
                    })
                })
            }, i);
        return t.forEach(e => {
            e && n.observe(e)
        }), () => {
            t.forEach(e => {
                e && n.unobserve(e)
            })
        }
    }, l = [i, e], n[4] = i, n[5] = e, n[6] = c, n[7] = l) : (c = n[6], l = n[7]), (0, Z.useEffect)(c, l), o
}

function Je(e) {
    return e.current
}

function Ye() {
    return !1
}
var Xe, Z, Q, Ze, Qe, $e, et, tt, $, nt = e((() => {
    Xe = F(), se(), fe(), le(), o(), m(), Se(), He(), me(), S(), v(), c(), D(), Z = t(P()), A(), ze(), _e(), Q = j(), Ze = `max-w-(--breakpoint-2xl) px-4 md:px-8`, Qe = `text-2xl md:text-3xl`, $e = {
        description: `Once verified, you’ll set up your workspace and add colleagues if you’d like`,
        title: `Confirm you’re a U.S. K-12 educator to get started with your free ChatGPT for Teachers workspace`
    }, et = {
        description: `Information you share with ChatGPT is never used to train our models`,
        title: `You've been verified. Get started with your ChatGPT for Teachers workspace.`
    }, tt = {
        description: `Your school or district already has a ChatGPT workspace. Request access below to join your colleagues.`,
        title: `Join your existing ChatGPT for Teachers workspace`
    }, $ = {
        impression: {
            segment: `K12 Verification: Shown`,
            statsig: `chatgpt_k12_verification_landing_shown`
        },
        learnMore: {
            segment: `K12 Verification: Learn More Clicked`,
            statsig: `chatgpt_k12_verification_learn_more_clicked`
        },
        faqToggle: {
            segment: `K12 Verification: FAQ Toggled`,
            statsig: `chatgpt_k12_verification_faq_toggled`
        },
        verifyClick: {
            segment: `K12 Verification: Verify Status Clicked`,
            statsig: `chatgpt_k12_verification_verify_clicked`
        },
        createWorkspaceClick: {
            segment: `K12 Verification: Create Workspace Clicked`,
            statsig: `chatgpt_k12_verification_create_workspace_clicked`
        },
        domainClaimedShown: {
            segment: `K12 Verification: Claimed Workspace Notice Shown`,
            statsig: `chatgpt_k12_verification_claimed_notice_shown`
        },
        domainClaimedAction: {
            segment: `K12 Verification: Claimed Workspace Action Clicked`,
            statsig: `chatgpt_k12_verification_claimed_notice_action_clicked`
        }
    }
}));

function rt() {
    return (0, it.jsx)(Ue, {})
}
var it, at = e((() => {
        nt(), it = j()
    })),
    ot, st, ct, lt, ut, dt, ft = e((() => {
        A(), ot = F(), at(), st = j(), ct = `/k12-verification`, lt = re(function() {
            "use forget";
            let e = (0, ot.c)(1),
                t;
            return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, st.jsx)(rt, {}), e[0] = t) : t = e[0], t
        }), ut = {
            hasRouteMeta: !0
        }, dt = () => {
            let e = `ChatGPT for Teachers`,
                t = `Discover ways to use ChatGPT for Teachers to help you teach, write, and stay organized.`;
            return [{
                title: e
            }, {
                property: `og:site_name`,
                content: `ChatGPT for Teachers`
            }, {
                property: `og:type`,
                content: `website`
            }, {
                property: `og:title`,
                content: e
            }, {
                property: `og:url`,
                content: `https://chatgpt.com/k12-verification`
            }, {
                name: `description`,
                content: t
            }, {
                property: `og:description`,
                content: t
            }]
        }
    }));
export {
    dt as a, lt as i, ut as n, ft as r, ct as t
};
//# sourceMappingURL=c38c3e3a-oktyswvrx52w19cb.js.map