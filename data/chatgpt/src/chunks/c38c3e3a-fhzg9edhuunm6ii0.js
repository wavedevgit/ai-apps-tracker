import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    $ot as r,
    Ait as i,
    CR as a,
    Cat as o,
    Int as s,
    J7 as c,
    Jat as l,
    LU as u,
    N4 as d,
    P4 as f,
    Q4 as p,
    Q7 as m,
    Rnt as h,
    S_ as g,
    Sst as _,
    TR as v,
    Tat as y,
    Z4 as b,
    c7 as x,
    eE as S,
    eot as C,
    kit as w,
    l7 as T,
    o0 as E,
    q1 as D,
    x_ as O,
    xst as k,
    zU as A
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    At as ee,
    Bn as j,
    Ht as M,
    Nn as N,
    Nt as te,
    Q as P,
    Rn as F,
    Vn as I,
    Vt as ne,
    p as re,
    s as ie,
    wn as L,
    zn as R
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    O8 as ae,
    k8 as oe
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    Ah as se,
    Oh as ce
} from "./8b34dbc2-n194ohawifys3bko.js";
import {
    n as le,
    r as z,
    t as ue
} from "./bcd16462-irjyv0kkf8dsldje.js";
import {
    a as de,
    i as fe,
    n as pe,
    t as me
} from "./cff09cfe-j6ucgem0sat9uird.js";
import {
    n as he,
    t as ge
} from "./dd53ca11-64ge5aisci9i8pvf.js";

function _e(e) {
    "use forget";
    let t = (0, ye.c)(39),
        {
            workspace: r,
            onAction: i
        } = e,
        a = R(),
        o = A(),
        s = te(),
        [l, u] = (0, be.useState)(!1),
        f;
    t[0] === r.workspace_id ? f = t[1] : (f = {
        mutationFn: async () => {
            await c.safePost(`/accounts/{account_id}/invites/request`, {
                parameters: {
                    path: {
                        account_id: r.workspace_id
                    }
                }
            })
        }
    }, t[0] = r.workspace_id, t[1] = f);
    let p = re(f),
        m;
    t[2] !== a || t[3] !== r.auto_accept_requests ? (m = r.auto_accept_requests ? a.formatMessage({
        id: `02uco2`,
        defaultMessage: `Join workspace`
    }) : a.formatMessage({
        id: `SfHDEl`,
        defaultMessage: `Request to join`
    }), t[2] = a, t[3] = r.auto_accept_requests, t[4] = m) : m = t[4];
    let h = m,
        g;
    t[5] !== a || t[6] !== r.auto_accept_requests ? (g = r.auto_accept_requests ? a.formatMessage({
        id: `389j56`,
        defaultMessage: `You'll be added automatically.`
    }) : a.formatMessage({
        id: `r4OENK`,
        defaultMessage: `We'll notify the workspace admins so they can review your request.`
    }), t[5] = a, t[6] = r.auto_accept_requests, t[7] = g) : g = t[7];
    let _ = g,
        v;
    t[8] !== a || t[9] !== s || t[10] !== i || t[11] !== p || t[12] !== o || t[13] !== r.auto_accept_requests || t[14] !== r.workspace_id ? (v = async () => {
        u(!0), i?.(r.workspace_id, r.auto_accept_requests);
        try {
            await p.mutateAsync(), await new Promise(ve), r.auto_accept_requests ? d() : (o.success(a.formatMessage({
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
        u(!1)
    }, t[8] = a, t[9] = s, t[10] = i, t[11] = p, t[12] = o, t[13] = r.auto_accept_requests, t[14] = r.workspace_id, t[15] = v) : v = t[15];
    let y = v,
        b;
    t[16] !== a || t[17] !== r.workspace_name ? (b = r.workspace_name ? r.workspace_name : a.formatMessage({
        id: `NeB5OP`,
        defaultMessage: `this workspace`
    }), t[16] = a, t[17] = r.workspace_name, t[18] = b) : b = t[18];
    let x = b,
        S;
    t[19] === x ? S = t[20] : (S = (0, B.jsx)(`span`, {
        className: `font-medium`,
        children: x
    }), t[19] = x, t[20] = S);
    let C;
    t[21] !== S || t[22] !== r.domain ? (C = (0, B.jsx)(`p`, {
        children: (0, B.jsx)(N, {
            id: `6qLOzU`,
            defaultMessage: `The email domain {domain} has been claimed by {workspace}.`,
            values: {
                domain: r.domain,
                workspace: S
            }
        })
    }), t[21] = S, t[22] = r.domain, t[23] = C) : C = t[23];
    let w;
    t[24] === Symbol.for(`react.memo_cache_sentinel`) ? (w = (0, B.jsx)(`p`, {
        className: `mt-2`,
        children: (0, B.jsx)(N, {
            id: `/tMMFA`,
            defaultMessage: `Please join the workspace managed by your school/district by clicking the button below.`
        })
    }), t[24] = w) : w = t[24];
    let T;
    t[25] === C ? T = t[26] : (T = (0, B.jsxs)(`div`, {
        className: `text-token-text-secondary text-base`,
        children: [C, w]
    }), t[25] = C, t[26] = T);
    let E;
    t[27] !== h || t[28] !== y || t[29] !== l ? (E = (0, B.jsx)(n, {
        onClick: y,
        loading: l,
        className: `w-fit`,
        children: h
    }), t[27] = h, t[28] = y, t[29] = l, t[30] = E) : E = t[30];
    let D;
    t[31] === _ ? D = t[32] : (D = (0, B.jsx)(`p`, {
        className: `text-token-text-tertiary text-sm`,
        children: _
    }), t[31] = _, t[32] = D);
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

function ve(e) {
    return setTimeout(e, 3e3)
}
var ye, be, B, xe, Se = e((() => {
    ye = L(), S(), u(), f(), m(), ie(), be = t(I()), F(), P(), B = j(), xe = `max-w-(--breakpoint-2xl) px-4 md:px-8`
}));

function Ce(e) {
    "use forget";
    let t = (0, De.c)(6),
        n = R(),
        r = v()?.email ?? ``,
        i;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = {
        mutationFn: we
    }, t[0] = i) : i = t[0];
    let a = re(i),
        s;
    return t[1] !== a || t[2] !== e || t[3] !== n || t[4] !== r ? (s = async () => {
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
            o.addError(`Teachers: Failed verification: ${t}`), G.setIsLoading(!1);
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
    }, t[1] = a, t[2] = e, t[3] = n, t[4] = r, t[5] = s) : s = t[5], s
}

function we() {
    return c.safePost(`/teachers/create_verification`)
}

function Te() {
    "use forget";
    let e = (0, De.c)(3),
        t = R(),
        n = te(),
        r;
    return e[0] !== t || e[1] !== n ? (r = async () => {
        G.setIsLoading(!0), G.setModalErrorMessage(void 0);
        let e = t.formatMessage({
            id: `Etg1KW`,
            defaultMessage: `An error occurred while claiming your offer, please try again.`
        });
        try {
            G.setIsLoading(!1), n(me)
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
    if (!(e instanceof l)) return !1;
    let t = typeof e.detail == `string` ? e.detail : e.message;
    return e.code === `k12_email_domain_rejected` || t === `Email domain is not eligible for teacher verification.`
}
var De, H, U, W, G, K = e((() => {
        De = L(), a(), y(), C(), m(), pe(), ie(), H = t(I()), F(), P(), _(), p(), U = k(b(() => ({
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
            initialVerificationId: r,
            onVerifyClick: i,
            buttonLabel: a
        } = e,
        o = Ce(r === void 0 ? null : r),
        {
            isLoading: s
        } = U(),
        c;
    t[0] !== i || t[1] !== o ? (c = async () => {
        i?.(`header`), await o()
    }, t[0] = i, t[1] = o, t[2] = c) : c = t[2];
    let l;
    t[3] === a ? l = t[4] : (l = a ?? (0, Ae.jsx)(N, {
        id: `GpDdaK`,
        defaultMessage: `Verify status`
    }), t[3] = a, t[4] = l);
    let u;
    return t[5] !== s || t[6] !== c || t[7] !== l ? (u = (0, Ae.jsx)(`div`, {
        children: (0, Ae.jsx)(n, {
            loading: s,
            onClick: c,
            children: l
        })
    }), t[5] = s, t[6] = c, t[7] = l, t[8] = u) : u = t[8], u
}
var ke, Ae, je = e((() => {
    ke = L(), S(), K(), F(), Ae = j()
}));

function Me(e) {
    "use forget";
    let t = (0, Ne.c)(13),
        {
            buttonSource: r,
            onCreateWorkspaceClick: i
        } = e,
        [a] = ne(),
        o;
    t[0] === a ? o = t[1] : (o = a.get(`redirectedFromSheerId`), t[0] = a, t[1] = o);
    let s = o === `true`,
        c, l;
    t[2] === s ? (c = t[3], l = t[4]) : (c = () => {
        s && G.openModal()
    }, l = [s], t[2] = s, t[3] = c, t[4] = l), (0, Pe.useEffect)(c, l);
    let {
        isLoading: u
    } = U(), d = Te(), f;
    t[5] !== r || t[6] !== i || t[7] !== d ? (f = async () => {
        i?.(r), await d()
    }, t[5] = r, t[6] = i, t[7] = d, t[8] = f) : f = t[8];
    let p;
    t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (p = (0, Fe.jsx)(N, {
        id: `JFJXXC`,
        defaultMessage: `Create workspace`
    }), t[9] = p) : p = t[9];
    let m;
    return t[10] !== u || t[11] !== f ? (m = (0, Fe.jsx)(`div`, {
        children: (0, Fe.jsx)(n, {
            loading: u,
            onClick: f,
            children: p
        })
    }), t[10] = u, t[11] = f, t[12] = m) : m = t[12], m
}
var Ne, Pe, Fe, Ie = e((() => {
    Ne = L(), S(), K(), Pe = t(I()), F(), P(), Fe = j()
}));

function Le(e) {
    "use forget";
    let t = (0, Re.c)(14),
        {
            enrollmentState: r,
            buttonSource: i,
            onVerifyClick: a,
            onCreateWorkspaceClick: o
        } = e;
    switch (r.name) {
        case `coming-soon`: {
            let e;
            return t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Y.jsx)(n, {
                disabled: !0,
                children: (0, Y.jsx)(N, {
                    id: `penhJY`,
                    defaultMessage: `Offer currently unavailable`
                })
            }), t[0] = e) : e = t[0], e
        }
        case `loading`: {
            let e;
            return t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Y.jsx)(n, {
                loading: !0,
                disabled: !0,
                children: (0, Y.jsx)(N, {
                    id: `B0181a`,
                    defaultMessage: `Checking eligibility...`
                })
            }), t[1] = e) : e = t[1], e
        }
        case `error`: {
            let e;
            t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Y.jsx)(N, {
                id: `OX0niz`,
                defaultMessage: `Try again`
            }), t[2] = e) : e = t[2];
            let i = e,
                o;
            return t[3] !== r.canRetry || t[4] !== a ? (o = r.canRetry ? (0, Y.jsx)(J, {
                initialVerificationId: null,
                onVerifyClick: a,
                buttonLabel: i
            }) : (0, Y.jsx)(n, {
                disabled: !0,
                children: i
            }), t[3] = r.canRetry, t[4] = a, t[5] = o) : o = t[5], o
        }
        case `linked`: {
            let e;
            return t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Y.jsx)(n, {
                disabled: !0,
                children: (0, Y.jsx)(N, {
                    id: `nc9Am6`,
                    defaultMessage: `Verification already used`
                })
            }), t[6] = e) : e = t[6], e
        }
        case `domain-claimed`: {
            let e;
            return t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Y.jsx)(n, {
                disabled: !0,
                children: (0, Y.jsx)(N, {
                    id: `Fw04cV`,
                    defaultMessage: `Join the workspace shown below`
                })
            }), t[7] = e) : e = t[7], e
        }
        case `needs-verification`: {
            let e;
            return t[8] !== r.verificationId || t[9] !== a ? (e = (0, Y.jsx)(J, {
                initialVerificationId: r.verificationId,
                onVerifyClick: a
            }), t[8] = r.verificationId, t[9] = a, t[10] = e) : e = t[10], e
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
    Re = L(), S(), je(), Ie(), F(), Y = j()
}));

function Be(e) {
    "use forget";
    let t = (0, Ve.c)(24),
        {
            title: r,
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
        m = p?.errorCode === Oe,
        h = v()?.email ?? ``,
        {
            modalErrorMessage: g
        } = U(),
        _ = d ? `h-[calc(100vh-325px)] max-h-[600px]` : `h-auto`,
        y = d ? `pb-32 md:pb-20` : `pb-16 md:pb-16`,
        b;
    t[0] !== _ || t[1] !== y ? (b = x(`mx-auto flex min-h-fit max-w-(--breakpoint-2xl) flex-col items-center justify-center gap-4 px-4 pt-16 md:px-8 md:pt-20`, _, y), t[0] = _, t[1] = y, t[2] = b) : b = t[2];
    let S;
    t[3] === r ? S = t[4] : (S = (0, X.jsx)(`h1`, {
        className: `relative max-w-[900px] text-center text-4xl text-balance after:pointer-events-none after:absolute after:end-0 after:top-[-95px] after:h-[144px] after:w-[113px] after:bg-[url(https://cdn.openai.com/chatgpt/ctf-cdn/student-landing/splash-stars-v2.png)] after:bg-contain after:bg-center after:bg-no-repeat after:opacity-100 after:content-[''] md:text-5xl md:text-pretty md:after:opacity-0 dark:after:invert`,
        children: (0, X.jsx)(`span`, {
            className: `relative after:pointer-events-none after:absolute after:start-[calc(100%_+_280px)] after:top-[-95px] after:h-[144px] after:w-[113px] after:bg-[url(https://cdn.openai.com/chatgpt/ctf-cdn/student-landing/splash-stars-v2.png)] after:bg-contain after:bg-center after:bg-no-repeat after:opacity-0 after:content-[''] md:after:opacity-100 dark:after:invert`,
            children: r
        })
    }), t[3] = r, t[4] = S);
    let C;
    t[5] === i ? C = t[6] : (C = i && (0, X.jsx)(`p`, {
        className: `max-w-[800px] text-center`,
        children: i
    }), t[5] = i, t[6] = C);
    let w;
    t[7] !== a || t[8] !== p?.canRetry || t[9] !== m || t[10] !== f || t[11] !== g || t[12] !== l || t[13] !== s || t[14] !== c || t[15] !== d || t[16] !== h ? (w = d ? (0, X.jsxs)(`div`, {
        className: `mt-2 flex flex-col items-center gap-2 text-center`,
        children: [f ? (0, X.jsxs)(`div`, {
            className: `flex flex-col items-center gap-1 text-center text-sm`,
            children: [(0, X.jsx)(`p`, {
                className: `font-medium text-red-500`,
                children: m ? (0, X.jsx)(N, {
                    id: `5B85Hf`,
                    defaultMessage: `The email you used for verification doesn't match your login email. Please sign in with the verified school email and try again. Current login email: {email}`,
                    values: {
                        email: h
                    }
                }) : (0, X.jsx)(N, {
                    id: `JANzo6`,
                    defaultMessage: `Your previous verification attempt failed.`
                })
            }), !m && !p?.canRetry ? (0, X.jsx)(`p`, {
                className: `text-red-500`,
                children: (0, X.jsx)(N, {
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
                enrollmentState: a,
                buttonSource: `splash`,
                onVerifyClick: c,
                onCreateWorkspaceClick: l
            }), (0, X.jsx)(n, {
                color: `ghost`,
                onClick: s,
                children: (0, X.jsx)(N, {
                    id: `ng/0pH`,
                    defaultMessage: `Learn more`
                })
            })]
        }), (0, X.jsx)(`div`, {
            className: `bg-token-main-surface-secondary text-token-text-secondary mt-4 max-w-[520px] rounded-3xl px-5 py-4 text-center text-sm leading-relaxed`,
            children: (0, X.jsx)(N, {
                id: `H3dGOo`,
                defaultMessage: `You’ll be sent to a trusted third-party verification partner called SheerID. Anything you upload is used only to confirm your educator status—OpenAI won’t see or store your documents.`
            })
        })]
    }) : null, t[7] = a, t[8] = p?.canRetry, t[9] = m, t[10] = f, t[11] = g, t[12] = l, t[13] = s, t[14] = c, t[15] = d, t[16] = h, t[17] = w) : w = t[17];
    let T;
    return t[18] !== o || t[19] !== b || t[20] !== S || t[21] !== C || t[22] !== w ? (T = (0, X.jsxs)(`section`, {
        ref: o,
        className: b,
        children: [S, C, w]
    }), t[18] = o, t[19] = b, t[20] = S, t[21] = C, t[22] = w, t[23] = T) : T = t[23], T
}
var Ve, X, He = e((() => {
    Ve = L(), S(), a(), K(), q(), T(), F(), ze(), X = j()
}));

function Ue() {
    "use forget";
    let e = (0, Xe.c)(79),
        t = de(),
        n = t.name === `domain-claimed` ? t.workspace : null,
        a;
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (a = i(), e[0] = a) : a = e[0];
    let o = a,
        c;
    e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (c = r(), e[1] = c) : c = e[1];
    let l = c,
        u = E(),
        d = v(),
        f = ee(),
        p = te(),
        m = u?.planType ?? l?.account?.planType ?? null,
        h = d?.email_domain_type ?? null,
        g;
    e[2] === f.search ? g = e[3] : (g = new URLSearchParams(f.search).get(`referer`), e[2] = f.search, e[3] = g);
    let _ = g,
        y = `verificationId` in t ? t.verificationId ?? null : null,
        b;
    e[4] !== t.name || e[5] !== y ? (b = {
        enrollmentState: t.name,
        enrollmentVerificationId: y
    }, e[4] = t.name, e[5] = y, e[6] = b) : b = e[6];
    let x = b,
        S = o ? m ?? `unknown` : null,
        C;
    e[7] !== h || e[8] !== x || e[9] !== S ? (C = {
        isLoggedIn: o,
        loggedInStatus: o ? `logged_in` : `logged_out`,
        accountPlanType: S,
        emailDomainType: h,
        ...x
    }, e[7] = h, e[8] = x, e[9] = S, e[10] = C) : C = e[10];
    let w = C,
        T;
    e[11] !== w || e[12] !== _ ? (T = (e, t, n) => {
        s.logEventWithStatsig(e, t, {
            ...w,
            referer: _ ?? null,
            ...n
        })
    }, e[11] = w, e[12] = _, e[13] = T) : T = e[13];
    let D = T,
        O = _ ?? null,
        k;
    e[14] !== h || e[15] !== m || e[16] !== O ? (k = {
        loggedInStatus: o ? `logged_in` : `logged_out`,
        accountPlanType: m,
        emailDomainType: h,
        referer: O
    }, e[14] = h, e[15] = m, e[16] = O, e[17] = k) : k = e[17];
    let A = k,
        j;
    e[18] !== t.name || e[19] !== D ? (j = e => {
        D($.verifyClick.segment, $.verifyClick.statsig, {
            source: e
        }), z(`verification`, `verify_click`, {
            source: e,
            verificationState: t.name
        })
    }, e[18] = t.name, e[19] = D, e[20] = j) : j = e[20];
    let M = j,
        N;
    e[21] === D ? N = e[22] : (N = e => {
        D($.createWorkspaceClick.segment, $.createWorkspaceClick.statsig, {
            source: e
        }), z(`verification`, `create_workspace_click`, {
            source: e
        })
    }, e[21] = D, e[22] = N);
    let P = N,
        F = h != null,
        I = t.name !== `loading`,
        ne, re;
    e[23] === p ? (ne = e[24], re = e[25]) : (ne = () => {
        o || p(`/k12-plan`, {
            replace: !0
        })
    }, re = [o, p], e[23] = p, e[24] = ne, e[25] = re), (0, Z.useEffect)(ne, re);
    let ie = t.name === `verified`,
        L = n != null,
        R = L ? tt : ie ? et : $e,
        ae = (0, Z.useRef)(null),
        oe = (0, Z.useRef)(null),
        se = (0, Z.useRef)(null),
        ce = (0, Z.useRef)(!1),
        ue = (0, Z.useRef)(!1),
        fe, pe;
    e[26] === Symbol.for(`react.memo_cache_sentinel`) ? (fe = [ae, oe], pe = {
        threshold: .1
    }, e[26] = fe, e[27] = pe) : (fe = e[26], pe = e[27]);
    let [me, he] = qe(fe, pe), ge = !L && (!me && !he || !1), ve, ye;
    e[28] !== A || e[29] !== F || e[30] !== I || e[31] !== D ? (ve = () => {
        !o || !F || !I || ce.current || (D($.impression.segment, $.impression.statsig), z(`verification`, `page_view`, A), ce.current = !0)
    }, ye = [A, F, I, o, D], e[28] = A, e[29] = F, e[30] = I, e[31] = D, e[32] = ve, e[33] = ye) : (ve = e[32], ye = e[33]), (0, Z.useEffect)(ve, ye);
    let be, B;
    e[34] !== A || e[35] !== t.name ? (be = () => {
        t.name === `error` && le(`verification`, `enrollment_status_error`, Error(`enrollment_status_error`), A)
    }, B = [A, t.name], e[34] = A, e[35] = t.name, e[36] = be, e[37] = B) : (be = e[36], B = e[37]), (0, Z.useEffect)(be, B);
    let xe, Se;
    e[38] !== n || e[39] !== D ? (xe = () => {
        !n || ue.current || (D($.domainClaimedShown.segment, $.domainClaimedShown.statsig, {
            source: `domain-claimed`,
            workspace_id: n.workspace_id
        }), z(`verification`, `domain_claimed_notice_shown`, {
            workspaceId: n.workspace_id,
            domain: n.domain
        }), ue.current = !0)
    }, Se = [n, D], e[38] = n, e[39] = D, e[40] = xe, e[41] = Se) : (xe = e[40], Se = e[41]), (0, Z.useEffect)(xe, Se);
    let Ce;
    e[42] === D ? Ce = e[43] : (Ce = () => {
        D($.learnMore.segment, $.learnMore.statsig), z(`verification`, `learn_more_click`), window.open(`https://chatgpt.com/plans/k12-teachers`, `_blank`, `noopener`)
    }, e[42] = D, e[43] = Ce);
    let we = Ce,
        Te;
    e[44] === D ? Te = e[45] : (Te = (e, t) => {
        D($.domainClaimedAction.segment, $.domainClaimedAction.statsig, {
            source: `domain-claimed`,
            workspaceId: e,
            workspace_auto_accepts_requests: t
        }), z(`verification`, `domain_claimed_action_clicked`, {
            workspaceId: e,
            workspaceAutoAcceptsRequests: t
        })
    }, e[44] = D, e[45] = Te);
    let Ee = Te;
    if (!o) return null;
    let V;
    e[46] !== t || e[47] !== P || e[48] !== M ? (V = (0, Q.jsx)(We, {
        enrollmentState: t,
        onVerifyClick: M,
        onCreateWorkspaceClick: P
    }), e[46] = t, e[47] = P, e[48] = M, e[49] = V) : V = e[49];
    let De = !L,
        H;
    e[50] !== t || e[51] !== P || e[52] !== we || e[53] !== M || e[54] !== R.description || e[55] !== R.title || e[56] !== De ? (H = (0, Q.jsx)(Be, {
        ref: ae,
        description: R.description,
        title: R.title,
        enrollmentState: t,
        onSecondaryAction: we,
        onVerifyClick: M,
        onCreateWorkspaceClick: P,
        showActions: De
    }), e[50] = t, e[51] = P, e[52] = we, e[53] = M, e[54] = R.description, e[55] = R.title, e[56] = De, e[57] = H) : H = e[57];
    let U;
    e[58] !== n || e[59] !== Ee || e[60] !== L ? (U = L && n ? (0, Q.jsx)(_e, {
        workspace: n,
        onAction: Ee
    }) : null, e[58] = n, e[59] = Ee, e[60] = L, e[61] = U) : U = e[61];
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
    e[66] === D ? q = e[67] : (q = (0, Q.jsx)(Ke, {
        ref: se,
        title: `FAQs`,
        faqs: Oe,
        logAnalyticsEvent: D
    }), e[66] = D, e[67] = q);
    let J;
    e[68] !== t || e[69] !== P || e[70] !== M || e[71] !== ge ? (J = (0, Q.jsx)(Ge, {
        enrollmentState: t,
        showBottomNav: ge,
        onVerifyClick: M,
        onCreateWorkspaceClick: P
    }), e[68] = t, e[69] = P, e[70] = M, e[71] = ge, e[72] = J) : J = e[72];
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
        [a, o] = (0, Z.useState)(!1),
        [s, c] = (0, Z.useState)(!1),
        l = n.name !== `domain-claimed`,
        u, d;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (u = () => {
        let e = g(() => {
            o(window.scrollY > 0), c(window.scrollY > 300)
        }, 200);
        return window.addEventListener(`scroll`, e), () => window.removeEventListener(`scroll`, e)
    }, d = [], t[0] = u, t[1] = d) : (u = t[0], d = t[1]), (0, Z.useEffect)(u, d);
    let f = !a,
        p;
    t[2] !== a || t[3] !== f ? (p = x(`bg-token-main-surface-primary absolute start-0 end-0 top-0 z-10 py-4 transition-all duration-300 md:fixed md:border-b`, {
        "border-token-border-default": a,
        "border-transparent": f
    }), t[2] = a, t[3] = f, t[4] = p) : p = t[4];
    let m;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (m = x(`mx-auto flex items-center justify-between`, Ze), t[5] = m) : m = t[5];
    let h;
    t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (h = (0, Q.jsx)(`a`, {
        href: `/`,
        "aria-label": `ChatGPT Home`,
        children: (0, Q.jsx)(ae, {})
    }), t[6] = h) : h = t[6];
    let _;
    t[7] !== n || t[8] !== i || t[9] !== r || t[10] !== l || t[11] !== s ? (_ = l ? (0, Q.jsx)(`div`, {
        className: x(`opacity-0 transition-opacity`, {
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
    t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (v = (0, Q.jsx)(ce, {}), t[13] = v) : v = t[13];
    let y;
    t[14] === _ ? y = t[15] : (y = (0, Q.jsxs)(`div`, {
        className: m,
        children: [h, (0, Q.jsxs)(`div`, {
            className: `flex gap-2`,
            children: [_, v]
        })]
    }), t[14] = _, t[15] = y);
    let b;
    return t[16] !== p || t[17] !== y ? (b = (0, Q.jsx)(`nav`, {
        className: p,
        children: y
    }), t[16] = p, t[17] = y, t[18] = b) : b = t[18], b
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
    t[0] !== o || t[1] !== s ? (c = x(`border-token-border-default bg-token-main-surface-primary fixed start-0 end-0 bottom-0 z-10 border-t py-4 text-center transition-[opacity_transform] duration-200 ease-in-out md:hidden`, {
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
        }), z(`verification`, `faq_toggle`, {
            question: r[e]?.question,
            action: n ? `open` : `close`
        }), s(t)
    }, t[0] = r, t[1] = a, t[2] = o, t[3] = c) : c = t[3];
    let l = c,
        u, d;
    t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (u = x(`mx-auto flex max-w-[596px] flex-col gap-8 px-4 py-20 md:gap-16 md:py-32`), d = x(Qe, `sm:text-center`), t[4] = u, t[5] = d) : (u = t[4], d = t[5]);
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
        t[12] !== o || t[13] !== l ? (e = (e, t) => (0, Q.jsx)(ge, {
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
    Xe = L(), oe(), ue(), se(), D(), a(), Se(), He(), fe(), w(), h(), T(), O(), Z = t(I()), P(), ze(), he(), Q = j(), Ze = `max-w-(--breakpoint-2xl) px-4 md:px-8`, Qe = `text-2xl md:text-3xl`, $e = {
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
        P(), ot = L(), at(), st = j(), ct = `/k12-verification`, lt = M(function() {
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
//# sourceMappingURL=c38c3e3a-fhzg9edhuunm6ii0.js.map