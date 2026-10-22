import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $7 as n,
    $T as r,
    Ait as i,
    CR as a,
    Cst as o,
    Eat as s,
    LU as c,
    Lnt as l,
    N4 as u,
    P4 as d,
    Q4 as f,
    S_ as p,
    Sst as m,
    TR as h,
    Y7 as g,
    Yat as _,
    Z4 as v,
    eE as y,
    est as b,
    jit as x,
    l7 as S,
    o0 as C,
    q1 as w,
    tot as T,
    u7 as E,
    wat as D,
    x_ as O,
    zU as ee,
    znt as k
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    At as te,
    Bn as A,
    Ht as j,
    Nn as M,
    Nt as ne,
    Q as N,
    Rn as P,
    Vn as F,
    Vt as re,
    p as ie,
    s as ae,
    wn as I,
    zn as L
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    O8 as oe,
    k8 as se
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    jh as ce,
    kh as le
} from "./8b34dbc2-bgocf3s6t6l67twq.js";
import {
    n as ue,
    r as R,
    t as de
} from "./bcd16462-bvc9r7uw8fs12i3p.js";
import {
    a as fe,
    i as pe,
    n as me,
    t as he
} from "./cff09cfe-bk5vefz9jwuil4t0.js";
import {
    n as ge,
    t as _e
} from "./dd53ca11-bpfni8krgxylm7av.js";

function ve(e) {
    "use forget";
    let t = (0, be.c)(39),
        {
            workspace: n,
            onAction: i
        } = e,
        a = L(),
        o = ee(),
        s = ne(),
        [c, l] = (0, xe.useState)(!1),
        d;
    t[0] === n.workspace_id ? d = t[1] : (d = {
        mutationFn: async () => {
            await g.safePost(`/accounts/{account_id}/invites/request`, {
                parameters: {
                    path: {
                        account_id: n.workspace_id
                    }
                }
            })
        }
    }, t[0] = n.workspace_id, t[1] = d);
    let f = ie(d),
        p;
    t[2] !== a || t[3] !== n.auto_accept_requests ? (p = n.auto_accept_requests ? a.formatMessage({
        id: `02uco2`,
        defaultMessage: `Join workspace`
    }) : a.formatMessage({
        id: `SfHDEl`,
        defaultMessage: `Request to join`
    }), t[2] = a, t[3] = n.auto_accept_requests, t[4] = p) : p = t[4];
    let m = p,
        h;
    t[5] !== a || t[6] !== n.auto_accept_requests ? (h = n.auto_accept_requests ? a.formatMessage({
        id: `389j56`,
        defaultMessage: `You'll be added automatically.`
    }) : a.formatMessage({
        id: `r4OENK`,
        defaultMessage: `We'll notify the workspace admins so they can review your request.`
    }), t[5] = a, t[6] = n.auto_accept_requests, t[7] = h) : h = t[7];
    let _ = h,
        v;
    t[8] !== a || t[9] !== s || t[10] !== i || t[11] !== f || t[12] !== o || t[13] !== n.auto_accept_requests || t[14] !== n.workspace_id ? (v = async () => {
        l(!0), i?.(n.workspace_id, n.auto_accept_requests);
        try {
            await f.mutateAsync(), await new Promise(ye), n.auto_accept_requests ? u() : (o.success(a.formatMessage({
                id: `jXcezz`,
                defaultMessage: `Request sent. We'll email you once it's approved.`
            })), s(`/`, {
                replace: !0
            }))
        } catch {
            o.danger(a.formatMessage({
                id: `mcD8H3`,
                defaultMessage: `We couldn’t submit your request. Please refresh and try again.`
            }))
        }
        l(!1)
    }, t[8] = a, t[9] = s, t[10] = i, t[11] = f, t[12] = o, t[13] = n.auto_accept_requests, t[14] = n.workspace_id, t[15] = v) : v = t[15];
    let y = v,
        b;
    t[16] !== a || t[17] !== n.workspace_name ? (b = n.workspace_name ? n.workspace_name : a.formatMessage({
        id: `NeB5OP`,
        defaultMessage: `this workspace`
    }), t[16] = a, t[17] = n.workspace_name, t[18] = b) : b = t[18];
    let x = b,
        S;
    t[19] === x ? S = t[20] : (S = (0, z.jsx)(`span`, {
        className: `font-medium`,
        children: x
    }), t[19] = x, t[20] = S);
    let C;
    t[21] !== S || t[22] !== n.domain ? (C = (0, z.jsx)(`p`, {
        children: (0, z.jsx)(M, {
            id: `6qLOzU`,
            defaultMessage: `The email domain {domain} has been claimed by {workspace}.`,
            values: {
                domain: n.domain,
                workspace: S
            }
        })
    }), t[21] = S, t[22] = n.domain, t[23] = C) : C = t[23];
    let w;
    t[24] === Symbol.for(`react.memo_cache_sentinel`) ? (w = (0, z.jsx)(`p`, {
        className: `mt-2`,
        children: (0, z.jsx)(M, {
            id: `/tMMFA`,
            defaultMessage: `Please join the workspace managed by your school/district by clicking the button below.`
        })
    }), t[24] = w) : w = t[24];
    let T;
    t[25] === C ? T = t[26] : (T = (0, z.jsxs)(`div`, {
        className: `text-token-text-secondary text-base`,
        children: [C, w]
    }), t[25] = C, t[26] = T);
    let E;
    t[27] !== m || t[28] !== y || t[29] !== c ? (E = (0, z.jsx)(r, {
        onClick: y,
        loading: c,
        className: `w-fit`,
        children: m
    }), t[27] = m, t[28] = y, t[29] = c, t[30] = E) : E = t[30];
    let D;
    t[31] === _ ? D = t[32] : (D = (0, z.jsx)(`p`, {
        className: `text-token-text-tertiary text-sm`,
        children: _
    }), t[31] = _, t[32] = D);
    let O;
    t[33] !== E || t[34] !== D ? (O = (0, z.jsxs)(`div`, {
        className: `mt-6 flex flex-col gap-3 md:flex-row md:items-center`,
        children: [E, D]
    }), t[33] = E, t[34] = D, t[35] = O) : O = t[35];
    let k;
    return t[36] !== O || t[37] !== T ? (k = (0, z.jsx)(`section`, {
        className: `mx-auto w-full pt-0 pb-10 ${Se}`,
        children: (0, z.jsxs)(`div`, {
            className: `border-token-border-strong bg-token-main-surface-secondary mx-auto w-full max-w-[900px] rounded-2xl border px-6 py-6 text-start`,
            children: [T, O]
        })
    }), t[36] = O, t[37] = T, t[38] = k) : k = t[38], k
}

function ye(e) {
    return setTimeout(e, 3e3)
}
var be, xe, z, Se, Ce = e((() => {
    be = I(), y(), c(), d(), n(), ae(), xe = t(F()), P(), N(), z = A(), Se = `max-w-(--breakpoint-2xl) px-4 md:px-8`
}));

function we(e) {
    "use forget";
    let t = (0, Oe.c)(6),
        n = L(),
        r = h()?.email ?? ``,
        i;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = {
        mutationFn: Te
    }, t[0] = i) : i = t[0];
    let a = ie(i),
        o;
    return t[1] !== a || t[2] !== e || t[3] !== n || t[4] !== r ? (o = async () => {
        W.setIsLoading(!0), W.setModalErrorMessage(void 0);
        try {
            let t;
            if (e) t = e;
            else {
                let {
                    verification_id: e
                } = await a.mutateAsync();
                t = e
            }
            let n = De(t, window.location.href);
            window.location.href = n, W.setIsLoading(!1)
        } catch (e) {
            let t = e;
            D.addError(`Teachers: Failed verification: ${t}`), W.setIsLoading(!1);
            let i = B(t) ? (0, V.createElement)(V.Fragment, null, n.formatMessage({
                id: `TtiJI1`,
                defaultMessage: `To help keep ChatGPT for Teachers secure and available to educators, we now require users to register with a school email address. Your email domain ({email}) isn't eligible for teacher verification. Please sign in and reverify with your school-issued email to continue. If you think you're seeing this message by mistake, OpenAI Support can help at`
            }, {
                email: r
            }), ` `, (0, V.createElement)(`a`, {
                className: `underline`,
                href: `mailto:support@openai.com`
            }, `support@openai.com`)) : n.formatMessage({
                id: `/Ei+Q8`,
                defaultMessage: `An error occurred during verification, please try again.`
            });
            W.setModalErrorMessage(i)
        }
    }, t[1] = a, t[2] = e, t[3] = n, t[4] = r, t[5] = o) : o = t[5], o
}

function Te() {
    return g.safePost(`/teachers/create_verification`)
}

function Ee() {
    "use forget";
    let e = (0, Oe.c)(3),
        t = L(),
        n = ne(),
        r;
    return e[0] !== t || e[1] !== n ? (r = async () => {
        W.setIsLoading(!0), W.setModalErrorMessage(void 0);
        let e = t.formatMessage({
            id: `Etg1KW`,
            defaultMessage: `An error occurred while claiming your offer, please try again.`
        });
        try {
            W.setIsLoading(!1), n(he)
        } catch {
            W.setIsLoading(!1), W.setModalErrorMessage(e)
        }
    }, e[0] = t, e[1] = n, e[2] = r) : r = e[2], r
}

function De(e, t) {
    let n = new URL(`https://services.sheerid.com/verify/68d47554aa292d20b9bec8f7/`);
    return n.searchParams.set(`verificationId`, e), n.searchParams.set(`redirectUrl`, t), n.toString()
}

function B(e) {
    if (!(e instanceof _)) return !1;
    let t = typeof e.detail == `string` ? e.detail : e.message;
    return e.code === `k12_email_domain_rejected` || t === `Email domain is not eligible for teacher verification.`
}
var Oe, V, H, U, W, G = e((() => {
        Oe = I(), a(), s(), T(), n(), me(), ae(), V = t(F()), P(), N(), o(), f(), H = m(v(() => ({
            isLoading: !1,
            isModalOpen: !1,
            modalErrorMessage: void 0
        }))), U = H.setState, W = {
            setIsLoading: e => {
                U({
                    isLoading: e
                })
            },
            setModalErrorMessage: e => {
                U({
                    modalErrorMessage: e
                })
            },
            closeModal: () => {
                U({
                    isModalOpen: !1
                })
            },
            openModal: () => {
                U({
                    isModalOpen: !0
                })
            }
        }
    })),
    K, q = e((() => {
        K = `k12_email_mismatch`
    }));

function J(e) {
    "use forget";
    let t = (0, ke.c)(9),
        {
            initialVerificationId: n,
            onVerifyClick: i,
            buttonLabel: a
        } = e,
        o = we(n === void 0 ? null : n),
        {
            isLoading: s
        } = H(),
        c;
    t[0] !== i || t[1] !== o ? (c = async () => {
        i?.(`header`), await o()
    }, t[0] = i, t[1] = o, t[2] = c) : c = t[2];
    let l;
    t[3] === a ? l = t[4] : (l = a ?? (0, Ae.jsx)(M, {
        id: `GpDdaK`,
        defaultMessage: `Verify status`
    }), t[3] = a, t[4] = l);
    let u;
    return t[5] !== s || t[6] !== c || t[7] !== l ? (u = (0, Ae.jsx)(`div`, {
        children: (0, Ae.jsx)(r, {
            loading: s,
            onClick: c,
            children: l
        })
    }), t[5] = s, t[6] = c, t[7] = l, t[8] = u) : u = t[8], u
}
var ke, Ae, je = e((() => {
    ke = I(), y(), G(), P(), Ae = A()
}));

function Me(e) {
    "use forget";
    let t = (0, Ne.c)(13),
        {
            buttonSource: n,
            onCreateWorkspaceClick: i
        } = e,
        [a] = re(),
        o;
    t[0] === a ? o = t[1] : (o = a.get(`redirectedFromSheerId`), t[0] = a, t[1] = o);
    let s = o === `true`,
        c, l;
    t[2] === s ? (c = t[3], l = t[4]) : (c = () => {
        s && W.openModal()
    }, l = [s], t[2] = s, t[3] = c, t[4] = l), (0, Pe.useEffect)(c, l);
    let {
        isLoading: u
    } = H(), d = Ee(), f;
    t[5] !== n || t[6] !== i || t[7] !== d ? (f = async () => {
        i?.(n), await d()
    }, t[5] = n, t[6] = i, t[7] = d, t[8] = f) : f = t[8];
    let p;
    t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (p = (0, Fe.jsx)(M, {
        id: `JFJXXC`,
        defaultMessage: `Create workspace`
    }), t[9] = p) : p = t[9];
    let m;
    return t[10] !== u || t[11] !== f ? (m = (0, Fe.jsx)(`div`, {
        children: (0, Fe.jsx)(r, {
            loading: u,
            onClick: f,
            children: p
        })
    }), t[10] = u, t[11] = f, t[12] = m) : m = t[12], m
}
var Ne, Pe, Fe, Ie = e((() => {
    Ne = I(), y(), G(), Pe = t(F()), P(), N(), Fe = A()
}));

function Le(e) {
    "use forget";
    let t = (0, Re.c)(14),
        {
            enrollmentState: n,
            buttonSource: i,
            onVerifyClick: a,
            onCreateWorkspaceClick: o
        } = e;
    switch (n.name) {
        case `coming-soon`: {
            let e;
            return t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Y.jsx)(r, {
                disabled: !0,
                children: (0, Y.jsx)(M, {
                    id: `penhJY`,
                    defaultMessage: `Offer currently unavailable`
                })
            }), t[0] = e) : e = t[0], e
        }
        case `loading`: {
            let e;
            return t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Y.jsx)(r, {
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
            let i = e,
                o;
            return t[3] !== n.canRetry || t[4] !== a ? (o = n.canRetry ? (0, Y.jsx)(J, {
                initialVerificationId: null,
                onVerifyClick: a,
                buttonLabel: i
            }) : (0, Y.jsx)(r, {
                disabled: !0,
                children: i
            }), t[3] = n.canRetry, t[4] = a, t[5] = o) : o = t[5], o
        }
        case `linked`: {
            let e;
            return t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Y.jsx)(r, {
                disabled: !0,
                children: (0, Y.jsx)(M, {
                    id: `nc9Am6`,
                    defaultMessage: `Verification already used`
                })
            }), t[6] = e) : e = t[6], e
        }
        case `domain-claimed`: {
            let e;
            return t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Y.jsx)(r, {
                disabled: !0,
                children: (0, Y.jsx)(M, {
                    id: `Fw04cV`,
                    defaultMessage: `Join the workspace shown below`
                })
            }), t[7] = e) : e = t[7], e
        }
        case `needs-verification`: {
            let e;
            return t[8] !== n.verificationId || t[9] !== a ? (e = (0, Y.jsx)(J, {
                initialVerificationId: n.verificationId,
                onVerifyClick: a
            }), t[8] = n.verificationId, t[9] = a, t[10] = e) : e = t[10], e
        }
        case `verified`: {
            let e;
            return t[11] !== i || t[12] !== o ? (e = (0, Y.jsx)(Me, {
                buttonSource: i,
                onCreateWorkspaceClick: o
            }), t[11] = i, t[12] = o, t[13] = e) : e = t[13], e
        }
    }
}
var Re, Y, ze = e((() => {
    Re = I(), y(), je(), Ie(), P(), Y = A()
}));

function Be(e) {
    "use forget";
    let t = (0, Ve.c)(24),
        {
            title: n,
            description: i,
            enrollmentState: a,
            ref: o,
            onSecondaryAction: s,
            onVerifyClick: c,
            onCreateWorkspaceClick: l,
            showActions: u
        } = e,
        d = u === void 0 || u,
        f = a.name === `error`,
        p = f ? a : null,
        m = p?.errorCode === K,
        g = h()?.email ?? ``,
        {
            modalErrorMessage: _
        } = H(),
        v = d ? `h-[calc(100vh-325px)] max-h-[600px]` : `h-auto`,
        y = d ? `pb-32 md:pb-20` : `pb-16 md:pb-16`,
        b;
    t[0] !== v || t[1] !== y ? (b = S(`mx-auto flex min-h-fit max-w-(--breakpoint-2xl) flex-col items-center justify-center gap-4 px-4 pt-16 md:px-8 md:pt-20`, v, y), t[0] = v, t[1] = y, t[2] = b) : b = t[2];
    let x;
    t[3] === n ? x = t[4] : (x = (0, X.jsx)(`h1`, {
        className: `relative max-w-[900px] text-center text-4xl text-balance after:pointer-events-none after:absolute after:end-0 after:top-[-95px] after:h-[144px] after:w-[113px] after:bg-[url(https://cdn.openai.com/chatgpt/ctf-cdn/student-landing/splash-stars-v2.png)] after:bg-contain after:bg-center after:bg-no-repeat after:opacity-100 after:content-[''] md:text-5xl md:text-pretty md:after:opacity-0 dark:after:invert`,
        children: (0, X.jsx)(`span`, {
            className: `relative after:pointer-events-none after:absolute after:start-[calc(100%_+_280px)] after:top-[-95px] after:h-[144px] after:w-[113px] after:bg-[url(https://cdn.openai.com/chatgpt/ctf-cdn/student-landing/splash-stars-v2.png)] after:bg-contain after:bg-center after:bg-no-repeat after:opacity-0 after:content-[''] md:after:opacity-100 dark:after:invert`,
            children: n
        })
    }), t[3] = n, t[4] = x);
    let C;
    t[5] === i ? C = t[6] : (C = i && (0, X.jsx)(`p`, {
        className: `max-w-[800px] text-center`,
        children: i
    }), t[5] = i, t[6] = C);
    let w;
    t[7] !== a || t[8] !== p?.canRetry || t[9] !== m || t[10] !== f || t[11] !== _ || t[12] !== l || t[13] !== s || t[14] !== c || t[15] !== d || t[16] !== g ? (w = d ? (0, X.jsxs)(`div`, {
        className: `mt-2 flex flex-col items-center gap-2 text-center`,
        children: [f ? (0, X.jsxs)(`div`, {
            className: `flex flex-col items-center gap-1 text-center text-sm`,
            children: [(0, X.jsx)(`p`, {
                className: `font-medium text-red-500`,
                children: m ? (0, X.jsx)(M, {
                    id: `5B85Hf`,
                    defaultMessage: `The email you used for verification doesn't match your login email. Please sign in with the verified school email and try again. Current login email: {email}`,
                    values: {
                        email: g
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
        }) : null, _ ? (0, X.jsx)(`div`, {
            className: `text-token-text-error mx-auto max-w-[720px] text-sm`,
            children: _
        }) : null, (0, X.jsxs)(`div`, {
            className: `relative flex flex-col items-center justify-center gap-2 pb-4 md:flex-row`,
            children: [(0, X.jsx)(Le, {
                enrollmentState: a,
                buttonSource: `splash`,
                onVerifyClick: c,
                onCreateWorkspaceClick: l
            }), (0, X.jsx)(r, {
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
    }) : null, t[7] = a, t[8] = p?.canRetry, t[9] = m, t[10] = f, t[11] = _, t[12] = l, t[13] = s, t[14] = c, t[15] = d, t[16] = g, t[17] = w) : w = t[17];
    let T;
    return t[18] !== o || t[19] !== b || t[20] !== x || t[21] !== C || t[22] !== w ? (T = (0, X.jsxs)(`section`, {
        ref: o,
        className: b,
        children: [x, C, w]
    }), t[18] = o, t[19] = b, t[20] = x, t[21] = C, t[22] = w, t[23] = T) : T = t[23], T
}
var Ve, X, He = e((() => {
    Ve = I(), y(), a(), G(), q(), E(), P(), ze(), X = A()
}));

function Ue() {
    "use forget";
    let e = (0, Xe.c)(79),
        t = fe(),
        n = t.name === `domain-claimed` ? t.workspace : null,
        r;
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = x(), e[0] = r) : r = e[0];
    let i = r,
        a;
    e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (a = b(), e[1] = a) : a = e[1];
    let o = a,
        s = C(),
        c = h(),
        u = te(),
        d = ne(),
        f = s?.planType ?? o?.account?.planType ?? null,
        p = c?.email_domain_type ?? null,
        m;
    e[2] === u.search ? m = e[3] : (m = new URLSearchParams(u.search).get(`referer`), e[2] = u.search, e[3] = m);
    let g = m,
        _ = `verificationId` in t ? t.verificationId ?? null : null,
        v;
    e[4] !== t.name || e[5] !== _ ? (v = {
        enrollmentState: t.name,
        enrollmentVerificationId: _
    }, e[4] = t.name, e[5] = _, e[6] = v) : v = e[6];
    let y = v,
        S = i ? f ?? `unknown` : null,
        w;
    e[7] !== p || e[8] !== y || e[9] !== S ? (w = {
        isLoggedIn: i,
        loggedInStatus: i ? `logged_in` : `logged_out`,
        accountPlanType: S,
        emailDomainType: p,
        ...y
    }, e[7] = p, e[8] = y, e[9] = S, e[10] = w) : w = e[10];
    let T = w,
        E;
    e[11] !== T || e[12] !== g ? (E = (e, t, n) => {
        l.logEventWithStatsig(e, t, {
            ...T,
            referer: g ?? null,
            ...n
        })
    }, e[11] = T, e[12] = g, e[13] = E) : E = e[13];
    let D = E,
        O = g ?? null,
        ee;
    e[14] !== p || e[15] !== f || e[16] !== O ? (ee = {
        loggedInStatus: i ? `logged_in` : `logged_out`,
        accountPlanType: f,
        emailDomainType: p,
        referer: O
    }, e[14] = p, e[15] = f, e[16] = O, e[17] = ee) : ee = e[17];
    let k = ee,
        A;
    e[18] !== t.name || e[19] !== D ? (A = e => {
        D($.verifyClick.segment, $.verifyClick.statsig, {
            source: e
        }), R(`verification`, `verify_click`, {
            source: e,
            verificationState: t.name
        })
    }, e[18] = t.name, e[19] = D, e[20] = A) : A = e[20];
    let j = A,
        M;
    e[21] === D ? M = e[22] : (M = e => {
        D($.createWorkspaceClick.segment, $.createWorkspaceClick.statsig, {
            source: e
        }), R(`verification`, `create_workspace_click`, {
            source: e
        })
    }, e[21] = D, e[22] = M);
    let N = M,
        P = p != null,
        F = t.name !== `loading`,
        re, ie;
    e[23] === d ? (re = e[24], ie = e[25]) : (re = () => {
        i || d(`/k12-plan`, {
            replace: !0
        })
    }, ie = [i, d], e[23] = d, e[24] = re, e[25] = ie), (0, Z.useEffect)(re, ie);
    let ae = t.name === `verified`,
        I = n != null,
        L = I ? tt : ae ? et : $e,
        oe = (0, Z.useRef)(null),
        se = (0, Z.useRef)(null),
        ce = (0, Z.useRef)(null),
        le = (0, Z.useRef)(!1),
        de = (0, Z.useRef)(!1),
        pe, me;
    e[26] === Symbol.for(`react.memo_cache_sentinel`) ? (pe = [oe, se], me = {
        threshold: .1
    }, e[26] = pe, e[27] = me) : (pe = e[26], me = e[27]);
    let [he, ge] = qe(pe, me), _e = !I && (!he && !ge || !1), ye, be;
    e[28] !== k || e[29] !== P || e[30] !== F || e[31] !== D ? (ye = () => {
        !i || !P || !F || le.current || (D($.impression.segment, $.impression.statsig), R(`verification`, `page_view`, k), le.current = !0)
    }, be = [k, P, F, i, D], e[28] = k, e[29] = P, e[30] = F, e[31] = D, e[32] = ye, e[33] = be) : (ye = e[32], be = e[33]), (0, Z.useEffect)(ye, be);
    let xe, z;
    e[34] !== k || e[35] !== t.name ? (xe = () => {
        t.name === `error` && ue(`verification`, `enrollment_status_error`, Error(`enrollment_status_error`), k)
    }, z = [k, t.name], e[34] = k, e[35] = t.name, e[36] = xe, e[37] = z) : (xe = e[36], z = e[37]), (0, Z.useEffect)(xe, z);
    let Se, Ce;
    e[38] !== n || e[39] !== D ? (Se = () => {
        !n || de.current || (D($.domainClaimedShown.segment, $.domainClaimedShown.statsig, {
            source: `domain-claimed`,
            workspace_id: n.workspace_id
        }), R(`verification`, `domain_claimed_notice_shown`, {
            workspaceId: n.workspace_id,
            domain: n.domain
        }), de.current = !0)
    }, Ce = [n, D], e[38] = n, e[39] = D, e[40] = Se, e[41] = Ce) : (Se = e[40], Ce = e[41]), (0, Z.useEffect)(Se, Ce);
    let we;
    e[42] === D ? we = e[43] : (we = () => {
        D($.learnMore.segment, $.learnMore.statsig), R(`verification`, `learn_more_click`), window.open(`https://chatgpt.com/plans/k12-teachers`, `_blank`, `noopener`)
    }, e[42] = D, e[43] = we);
    let Te = we,
        Ee;
    e[44] === D ? Ee = e[45] : (Ee = (e, t) => {
        D($.domainClaimedAction.segment, $.domainClaimedAction.statsig, {
            source: `domain-claimed`,
            workspaceId: e,
            workspace_auto_accepts_requests: t
        }), R(`verification`, `domain_claimed_action_clicked`, {
            workspaceId: e,
            workspaceAutoAcceptsRequests: t
        })
    }, e[44] = D, e[45] = Ee);
    let De = Ee;
    if (!i) return null;
    let B;
    e[46] !== t || e[47] !== N || e[48] !== j ? (B = (0, Q.jsx)(We, {
        enrollmentState: t,
        onVerifyClick: j,
        onCreateWorkspaceClick: N
    }), e[46] = t, e[47] = N, e[48] = j, e[49] = B) : B = e[49];
    let Oe = !I,
        V;
    e[50] !== t || e[51] !== N || e[52] !== Te || e[53] !== j || e[54] !== L.description || e[55] !== L.title || e[56] !== Oe ? (V = (0, Q.jsx)(Be, {
        ref: oe,
        description: L.description,
        title: L.title,
        enrollmentState: t,
        onSecondaryAction: Te,
        onVerifyClick: j,
        onCreateWorkspaceClick: N,
        showActions: Oe
    }), e[50] = t, e[51] = N, e[52] = Te, e[53] = j, e[54] = L.description, e[55] = L.title, e[56] = Oe, e[57] = V) : V = e[57];
    let H;
    e[58] !== n || e[59] !== De || e[60] !== I ? (H = I && n ? (0, Q.jsx)(ve, {
        workspace: n,
        onAction: De
    }) : null, e[58] = n, e[59] = De, e[60] = I, e[61] = H) : H = e[61];
    let U;
    e[62] === Symbol.for(`react.memo_cache_sentinel`) ? (U = {
        question: `Who qualifies for this plan?`,
        answer: (0, Q.jsx)(`p`, {
            children: `You are eligible for this plan if you are currently employed by an accredited K-12 school or district in the United States. Teachers, staff, administrators, and district leaders are all eligible.`
        })
    }, e[62] = U) : U = e[62];
    let W;
    e[63] === Symbol.for(`react.memo_cache_sentinel`) ? (W = {
        question: `How do I sign up for this plan?`,
        answer: (0, Q.jsx)(Q.Fragment, {
            children: (0, Q.jsx)(`p`, {
                children: `First, you’ll need to verify your educator status through SheerID here. Once verified, you will be redirected back to ChatGPT to create a free workspace.`
            })
        })
    }, e[63] = W) : W = e[63];
    let G;
    e[64] === Symbol.for(`react.memo_cache_sentinel`) ? (G = {
        question: `Does OpenAI train its models on my data?`,
        answer: (0, Q.jsx)(`p`, {
            children: `No, anything you share with ChatGPT for Teachers is not used to train our models by default.`
        })
    }, e[64] = G) : G = e[64];
    let K;
    e[65] === Symbol.for(`react.memo_cache_sentinel`) ? (K = [U, W, G, {
        question: `How is data kept secure?`,
        answer: (0, Q.jsx)(`p`, {
            children: `The plan includes multi-factor authentication (MFA), SAML SSO, and encryption to protect your data and assist your school meet its FERPA compliance obligations.`
        })
    }], e[65] = K) : K = e[65];
    let q;
    e[66] === D ? q = e[67] : (q = (0, Q.jsx)(Ke, {
        ref: ce,
        title: `FAQs`,
        faqs: K,
        logAnalyticsEvent: D
    }), e[66] = D, e[67] = q);
    let J;
    e[68] !== t || e[69] !== N || e[70] !== j || e[71] !== _e ? (J = (0, Q.jsx)(Ge, {
        enrollmentState: t,
        showBottomNav: _e,
        onVerifyClick: j,
        onCreateWorkspaceClick: N
    }), e[68] = t, e[69] = N, e[70] = j, e[71] = _e, e[72] = J) : J = e[72];
    let ke;
    return e[73] !== B || e[74] !== V || e[75] !== H || e[76] !== q || e[77] !== J ? (ke = (0, Q.jsxs)(`div`, {
        className: `font-oai overflow-hidden pt-[71px] pb-8`,
        children: [B, V, H, q, J]
    }), e[73] = B, e[74] = V, e[75] = H, e[76] = q, e[77] = J, e[78] = ke) : ke = e[78], ke
}

function We(e) {
    "use forget";
    let t = (0, Xe.c)(19),
        {
            enrollmentState: n,
            onVerifyClick: r,
            onCreateWorkspaceClick: i
        } = e,
        [a, o] = (0, Z.useState)(!1),
        [s, c] = (0, Z.useState)(!1),
        l = n.name !== `domain-claimed`,
        u, d;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (u = () => {
        let e = p(() => {
            o(window.scrollY > 0), c(window.scrollY > 300)
        }, 200);
        return window.addEventListener(`scroll`, e), () => window.removeEventListener(`scroll`, e)
    }, d = [], t[0] = u, t[1] = d) : (u = t[0], d = t[1]), (0, Z.useEffect)(u, d);
    let f = !a,
        m;
    t[2] !== a || t[3] !== f ? (m = S(`bg-token-main-surface-primary absolute start-0 end-0 top-0 z-10 py-4 transition-all duration-300 md:fixed md:border-b`, {
        "border-token-border-default": a,
        "border-transparent": f
    }), t[2] = a, t[3] = f, t[4] = m) : m = t[4];
    let h;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (h = S(`mx-auto flex items-center justify-between`, Ze), t[5] = h) : h = t[5];
    let g;
    t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (g = (0, Q.jsx)(`a`, {
        href: `/`,
        "aria-label": `ChatGPT Home`,
        children: (0, Q.jsx)(oe, {})
    }), t[6] = g) : g = t[6];
    let _;
    t[7] !== n || t[8] !== i || t[9] !== r || t[10] !== l || t[11] !== s ? (_ = l ? (0, Q.jsx)(`div`, {
        className: S(`opacity-0 transition-opacity`, {
            "md:opacity-100": s
        }),
        inert: !s,
        children: (0, Q.jsx)(Le, {
            enrollmentState: n,
            buttonSource: `header`,
            onVerifyClick: r,
            onCreateWorkspaceClick: i
        })
    }) : null, t[7] = n, t[8] = i, t[9] = r, t[10] = l, t[11] = s, t[12] = _) : _ = t[12];
    let v;
    t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (v = (0, Q.jsx)(le, {}), t[13] = v) : v = t[13];
    let y;
    t[14] === _ ? y = t[15] : (y = (0, Q.jsxs)(`div`, {
        className: h,
        children: [g, (0, Q.jsxs)(`div`, {
            className: `flex gap-2`,
            children: [_, v]
        })]
    }), t[14] = _, t[15] = y);
    let b;
    return t[16] !== m || t[17] !== y ? (b = (0, Q.jsx)(`nav`, {
        className: m,
        children: y
    }), t[16] = m, t[17] = y, t[18] = b) : b = t[18], b
}

function Ge(e) {
    "use forget";
    let t = (0, Xe.c)(10),
        {
            enrollmentState: n,
            showBottomNav: r,
            onVerifyClick: i,
            onCreateWorkspaceClick: a
        } = e,
        o = r !== void 0 && r,
        s = !o,
        c;
    t[0] !== o || t[1] !== s ? (c = S(`border-token-border-default bg-token-main-surface-primary fixed start-0 end-0 bottom-0 z-10 border-t py-4 text-center transition-[opacity_transform] duration-200 ease-in-out md:hidden`, {
        "translate-y-0 opacity-100": o,
        "translate-y-[100%] opacity-0": s
    }), t[0] = o, t[1] = s, t[2] = c) : c = t[2];
    let l;
    t[3] !== n || t[4] !== a || t[5] !== i ? (l = (0, Q.jsx)(Le, {
        enrollmentState: n,
        buttonSource: `header`,
        onVerifyClick: i,
        onCreateWorkspaceClick: a
    }), t[3] = n, t[4] = a, t[5] = i, t[6] = l) : l = t[6];
    let u;
    return t[7] !== c || t[8] !== l ? (u = (0, Q.jsx)(`nav`, {
        className: c,
        children: l
    }), t[7] = c, t[8] = l, t[9] = u) : u = t[9], u
}

function Ke(e) {
    "use forget";
    let t = (0, Xe.c)(21),
        {
            title: n,
            faqs: r,
            ref: i,
            logAnalyticsEvent: a
        } = e,
        [o, s] = (0, Z.useState)(0),
        c;
    t[0] !== r || t[1] !== a || t[2] !== o ? (c = e => {
        let t = o === e ? -1 : e,
            n = t === e;
        a($.faqToggle.segment, $.faqToggle.statsig, {
            question: r[e]?.question,
            action: n ? `open` : `close`
        }), R(`verification`, `faq_toggle`, {
            question: r[e]?.question,
            action: n ? `open` : `close`
        }), s(t)
    }, t[0] = r, t[1] = a, t[2] = o, t[3] = c) : c = t[3];
    let l = c,
        u, d;
    t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (u = S(`mx-auto flex max-w-[596px] flex-col gap-8 px-4 py-20 md:gap-16 md:py-32`), d = S(Qe, `sm:text-center`), t[4] = u, t[5] = d) : (u = t[4], d = t[5]);
    let f;
    t[6] === n ? f = t[7] : (f = (0, Q.jsx)(`h2`, {
        className: d,
        children: (0, Q.jsx)(`span`, {
            className: `relative after:pointer-events-none after:absolute after:start-[calc(100%_-_25px)] after:bottom-[75%] after:h-[64px] after:w-[75px] after:bg-[url(https://cdn.openai.com/chatgpt/ctf-cdn/student-landing/faq-bubble-small-v2.png)] after:bg-contain after:bg-center after:bg-no-repeat after:content-[''] dark:after:invert`,
            children: n
        })
    }), t[6] = n, t[7] = f);
    let p;
    if (t[8] !== r || t[9] !== o || t[10] !== l) {
        let e;
        t[12] !== o || t[13] !== l ? (e = (e, t) => (0, Q.jsx)(_e, {
            question: e.question,
            answer: e.answer,
            isOpen: o === t,
            onToggle: () => l(t)
        }, t), t[12] = o, t[13] = l, t[14] = e) : e = t[14], p = r.map(e), t[8] = r, t[9] = o, t[10] = l, t[11] = p
    } else p = t[11];
    let m;
    t[15] === p ? m = t[16] : (m = (0, Q.jsx)(`div`, {
        className: ``,
        children: p
    }), t[15] = p, t[16] = m);
    let h;
    return t[17] !== i || t[18] !== f || t[19] !== m ? (h = (0, Q.jsxs)(`section`, {
        ref: i,
        className: u,
        children: [f, m]
    }), t[17] = i, t[18] = f, t[19] = m, t[20] = h) : h = t[20], h
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
    Xe = I(), se(), de(), ce(), w(), a(), Ce(), He(), pe(), i(), k(), E(), O(), Z = t(F()), N(), ze(), ge(), Q = A(), Ze = `max-w-(--breakpoint-2xl) px-4 md:px-8`, Qe = `text-2xl md:text-3xl`, $e = {
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
        nt(), it = A()
    })),
    ot, st, ct, lt, ut, dt, ft = e((() => {
        N(), ot = I(), at(), st = A(), ct = `/k12-verification`, lt = j(function() {
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
//# sourceMappingURL=c38c3e3a-n26l9w8gyjnuijr1.js.map