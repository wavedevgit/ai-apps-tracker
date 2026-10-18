import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as n,
    Btt as r,
    C1 as i,
    Dit as a,
    Eot as o,
    Htt as s,
    J2 as c,
    Nrt as l,
    Prt as u,
    QL as d,
    Qit as f,
    Tot as p,
    Y2 as m,
    a7 as h,
    b5 as g,
    eR as _,
    f4 as v,
    hU as y,
    iat as b,
    kT as x,
    kit as S,
    l7 as C,
    n_ as w,
    p4 as T,
    pU as E,
    rot as D,
    t_ as O,
    u1 as k,
    y5 as A
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as j,
    Bn as M,
    Ht as ee,
    Nn as N,
    Pt as te,
    Rn as P,
    Ut as ne,
    Vn as F,
    jt as re,
    p as ie,
    s as ae,
    wn as I,
    zn as L
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    b8 as oe,
    x8 as se
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Dh as ce,
    Th as le
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    n as ue,
    r as R,
    t as de
} from "./bcd16462-g7fcj74bvxu3maim.js";
import {
    a as fe,
    i as pe,
    n as me,
    t as he
} from "./cff09cfe-h2svxryj6rle1m6j.js";
import {
    n as ge,
    t as _e
} from "./dd53ca11-idgt18k3cadtex3q.js";

function ve(e) {
    "use forget";
    let t = (0, be.c)(39),
        {
            workspace: n,
            onAction: r
        } = e,
        i = L(),
        a = y(),
        o = te(),
        [s, l] = (0, xe.useState)(!1),
        u;
    t[0] === n.workspace_id ? u = t[1] : (u = {
        mutationFn: async () => {
            await h.safePost(`/accounts/{account_id}/invites/request`, {
                parameters: {
                    path: {
                        account_id: n.workspace_id
                    }
                }
            })
        }
    }, t[0] = n.workspace_id, t[1] = u);
    let d = ie(u),
        f;
    t[2] !== i || t[3] !== n.auto_accept_requests ? (f = n.auto_accept_requests ? i.formatMessage({
        id: `02uco2`,
        defaultMessage: `Join workspace`
    }) : i.formatMessage({
        id: `SfHDEl`,
        defaultMessage: `Request to join`
    }), t[2] = i, t[3] = n.auto_accept_requests, t[4] = f) : f = t[4];
    let p = f,
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
    t[8] !== i || t[9] !== o || t[10] !== r || t[11] !== d || t[12] !== a || t[13] !== n.auto_accept_requests || t[14] !== n.workspace_id ? (_ = async () => {
        l(!0), r?.(n.workspace_id, n.auto_accept_requests);
        try {
            await d.mutateAsync(), await new Promise(ye), n.auto_accept_requests ? c() : (a.success(i.formatMessage({
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
        l(!1)
    }, t[8] = i, t[9] = o, t[10] = r, t[11] = d, t[12] = a, t[13] = n.auto_accept_requests, t[14] = n.workspace_id, t[15] = _) : _ = t[15];
    let v = _,
        b;
    t[16] !== i || t[17] !== n.workspace_name ? (b = n.workspace_name ? n.workspace_name : i.formatMessage({
        id: `NeB5OP`,
        defaultMessage: `this workspace`
    }), t[16] = i, t[17] = n.workspace_name, t[18] = b) : b = t[18];
    let S = b,
        C;
    t[19] === S ? C = t[20] : (C = (0, z.jsx)(`span`, {
        className: `font-medium`,
        children: S
    }), t[19] = S, t[20] = C);
    let w;
    t[21] !== C || t[22] !== n.domain ? (w = (0, z.jsx)(`p`, {
        children: (0, z.jsx)(N, {
            id: `6qLOzU`,
            defaultMessage: `The email domain {domain} has been claimed by {workspace}.`,
            values: {
                domain: n.domain,
                workspace: C
            }
        })
    }), t[21] = C, t[22] = n.domain, t[23] = w) : w = t[23];
    let T;
    t[24] === Symbol.for(`react.memo_cache_sentinel`) ? (T = (0, z.jsx)(`p`, {
        className: `mt-2`,
        children: (0, z.jsx)(N, {
            id: `/tMMFA`,
            defaultMessage: `Please join the workspace managed by your school/district by clicking the button below.`
        })
    }), t[24] = T) : T = t[24];
    let E;
    t[25] === w ? E = t[26] : (E = (0, z.jsxs)(`div`, {
        className: `text-token-text-secondary text-base`,
        children: [w, T]
    }), t[25] = w, t[26] = E);
    let D;
    t[27] !== p || t[28] !== v || t[29] !== s ? (D = (0, z.jsx)(x, {
        onClick: v,
        loading: s,
        className: `w-fit`,
        children: p
    }), t[27] = p, t[28] = v, t[29] = s, t[30] = D) : D = t[30];
    let O;
    t[31] === g ? O = t[32] : (O = (0, z.jsx)(`p`, {
        className: `text-token-text-tertiary text-sm`,
        children: g
    }), t[31] = g, t[32] = O);
    let k;
    t[33] !== D || t[34] !== O ? (k = (0, z.jsxs)(`div`, {
        className: `mt-6 flex flex-col gap-3 md:flex-row md:items-center`,
        children: [D, O]
    }), t[33] = D, t[34] = O, t[35] = k) : k = t[35];
    let A;
    return t[36] !== k || t[37] !== E ? (A = (0, z.jsx)(`section`, {
        className: `mx-auto w-full pt-0 pb-10 ${Se}`,
        children: (0, z.jsxs)(`div`, {
            className: `border-token-border-strong bg-token-main-surface-secondary mx-auto w-full max-w-[900px] rounded-2xl border px-6 py-6 text-start`,
            children: [E, k]
        })
    }), t[36] = k, t[37] = E, t[38] = A) : A = t[38], A
}

function ye(e) {
    return setTimeout(e, 3e3)
}
var be, xe, z, Se, Ce = e((() => {
    be = I(), n(), E(), m(), C(), ae(), xe = t(F()), P(), j(), z = M(), Se = `max-w-(--breakpoint-2xl) px-4 md:px-8`
}));

function we(e) {
    "use forget";
    let t = (0, Oe.c)(6),
        n = L(),
        r = _()?.email ?? ``,
        i;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = {
        mutationFn: Te
    }, t[0] = i) : i = t[0];
    let o = ie(i),
        s;
    return t[1] !== o || t[2] !== e || t[3] !== n || t[4] !== r ? (s = async () => {
        W.setIsLoading(!0), W.setModalErrorMessage(void 0);
        try {
            let t;
            if (e) t = e;
            else {
                let {
                    verification_id: e
                } = await o.mutateAsync();
                t = e
            }
            let n = De(t, window.location.href);
            window.location.href = n, W.setIsLoading(!1)
        } catch (e) {
            let t = e;
            a.addError(`Teachers: Failed verification: ${t}`), W.setIsLoading(!1);
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
    }, t[1] = o, t[2] = e, t[3] = n, t[4] = r, t[5] = s) : s = t[5], s
}

function Te() {
    return h.safePost(`/teachers/create_verification`)
}

function Ee() {
    "use forget";
    let e = (0, Oe.c)(3),
        t = L(),
        n = te(),
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
    if (!(e instanceof f)) return !1;
    let t = typeof e.detail == `string` ? e.detail : e.message;
    return e.code === `k12_email_domain_rejected` || t === `Email domain is not eligible for teacher verification.`
}
var Oe, V, H, U, W, G = e((() => {
        Oe = I(), d(), S(), b(), C(), me(), ae(), V = t(F()), P(), j(), o(), T(), H = p(v(() => ({
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
    ke, K = e((() => {
        ke = `k12_email_mismatch`
    }));

function q(e) {
    "use forget";
    let t = (0, J.c)(9),
        {
            initialVerificationId: n,
            onVerifyClick: r,
            buttonLabel: i
        } = e,
        a = we(n === void 0 ? null : n),
        {
            isLoading: o
        } = H(),
        s;
    t[0] !== r || t[1] !== a ? (s = async () => {
        r?.(`header`), await a()
    }, t[0] = r, t[1] = a, t[2] = s) : s = t[2];
    let c;
    t[3] === i ? c = t[4] : (c = i ?? (0, Ae.jsx)(N, {
        id: `GpDdaK`,
        defaultMessage: `Verify status`
    }), t[3] = i, t[4] = c);
    let l;
    return t[5] !== o || t[6] !== s || t[7] !== c ? (l = (0, Ae.jsx)(`div`, {
        children: (0, Ae.jsx)(x, {
            loading: o,
            onClick: s,
            children: c
        })
    }), t[5] = o, t[6] = s, t[7] = c, t[8] = l) : l = t[8], l
}
var J, Ae, je = e((() => {
    J = I(), n(), G(), P(), Ae = M()
}));

function Me(e) {
    "use forget";
    let t = (0, Ne.c)(13),
        {
            buttonSource: n,
            onCreateWorkspaceClick: r
        } = e,
        [i] = ee(),
        a;
    t[0] === i ? a = t[1] : (a = i.get(`redirectedFromSheerId`), t[0] = i, t[1] = a);
    let o = a === `true`,
        s, c;
    t[2] === o ? (s = t[3], c = t[4]) : (s = () => {
        o && W.openModal()
    }, c = [o], t[2] = o, t[3] = s, t[4] = c), (0, Pe.useEffect)(s, c);
    let {
        isLoading: l
    } = H(), u = Ee(), d;
    t[5] !== n || t[6] !== r || t[7] !== u ? (d = async () => {
        r?.(n), await u()
    }, t[5] = n, t[6] = r, t[7] = u, t[8] = d) : d = t[8];
    let f;
    t[9] === Symbol.for(`react.memo_cache_sentinel`) ? (f = (0, Fe.jsx)(N, {
        id: `JFJXXC`,
        defaultMessage: `Create workspace`
    }), t[9] = f) : f = t[9];
    let p;
    return t[10] !== l || t[11] !== d ? (p = (0, Fe.jsx)(`div`, {
        children: (0, Fe.jsx)(x, {
            loading: l,
            onClick: d,
            children: f
        })
    }), t[10] = l, t[11] = d, t[12] = p) : p = t[12], p
}
var Ne, Pe, Fe, Ie = e((() => {
    Ne = I(), n(), G(), Pe = t(F()), P(), j(), Fe = M()
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
            return t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Y.jsx)(x, {
                disabled: !0,
                children: (0, Y.jsx)(N, {
                    id: `penhJY`,
                    defaultMessage: `Offer currently unavailable`
                })
            }), t[0] = e) : e = t[0], e
        }
        case `loading`: {
            let e;
            return t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Y.jsx)(x, {
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
            let r = e,
                a;
            return t[3] !== n.canRetry || t[4] !== i ? (a = n.canRetry ? (0, Y.jsx)(q, {
                initialVerificationId: null,
                onVerifyClick: i,
                buttonLabel: r
            }) : (0, Y.jsx)(x, {
                disabled: !0,
                children: r
            }), t[3] = n.canRetry, t[4] = i, t[5] = a) : a = t[5], a
        }
        case `linked`: {
            let e;
            return t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Y.jsx)(x, {
                disabled: !0,
                children: (0, Y.jsx)(N, {
                    id: `nc9Am6`,
                    defaultMessage: `Verification already used`
                })
            }), t[6] = e) : e = t[6], e
        }
        case `domain-claimed`: {
            let e;
            return t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Y.jsx)(x, {
                disabled: !0,
                children: (0, Y.jsx)(N, {
                    id: `Fw04cV`,
                    defaultMessage: `Join the workspace shown below`
                })
            }), t[7] = e) : e = t[7], e
        }
        case `needs-verification`: {
            let e;
            return t[8] !== n.verificationId || t[9] !== i ? (e = (0, Y.jsx)(q, {
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
    Re = I(), n(), je(), Ie(), P(), Y = M()
}));

function Be(e) {
    "use forget";
    let t = (0, Ve.c)(24),
        {
            title: n,
            description: r,
            enrollmentState: i,
            ref: a,
            onSecondaryAction: o,
            onVerifyClick: s,
            onCreateWorkspaceClick: c,
            showActions: l
        } = e,
        u = l === void 0 || l,
        d = i.name === `error`,
        f = d ? i : null,
        p = f?.errorCode === ke,
        m = _()?.email ?? ``,
        {
            modalErrorMessage: h
        } = H(),
        g = u ? `h-[calc(100vh-325px)] max-h-[600px]` : `h-auto`,
        v = u ? `pb-32 md:pb-20` : `pb-16 md:pb-16`,
        y;
    t[0] !== g || t[1] !== v ? (y = A(`mx-auto flex min-h-fit max-w-(--breakpoint-2xl) flex-col items-center justify-center gap-4 px-4 pt-16 md:px-8 md:pt-20`, g, v), t[0] = g, t[1] = v, t[2] = y) : y = t[2];
    let b;
    t[3] === n ? b = t[4] : (b = (0, X.jsx)(`h1`, {
        className: `relative max-w-[900px] text-center text-4xl text-balance after:pointer-events-none after:absolute after:end-0 after:top-[-95px] after:h-[144px] after:w-[113px] after:bg-[url(https://cdn.openai.com/chatgpt/ctf-cdn/student-landing/splash-stars-v2.png)] after:bg-contain after:bg-center after:bg-no-repeat after:opacity-100 after:content-[''] md:text-5xl md:text-pretty md:after:opacity-0 dark:after:invert`,
        children: (0, X.jsx)(`span`, {
            className: `relative after:pointer-events-none after:absolute after:start-[calc(100%_+_280px)] after:top-[-95px] after:h-[144px] after:w-[113px] after:bg-[url(https://cdn.openai.com/chatgpt/ctf-cdn/student-landing/splash-stars-v2.png)] after:bg-contain after:bg-center after:bg-no-repeat after:opacity-0 after:content-[''] md:after:opacity-100 dark:after:invert`,
            children: n
        })
    }), t[3] = n, t[4] = b);
    let S;
    t[5] === r ? S = t[6] : (S = r && (0, X.jsx)(`p`, {
        className: `max-w-[800px] text-center`,
        children: r
    }), t[5] = r, t[6] = S);
    let C;
    t[7] !== i || t[8] !== f?.canRetry || t[9] !== p || t[10] !== d || t[11] !== h || t[12] !== c || t[13] !== o || t[14] !== s || t[15] !== u || t[16] !== m ? (C = u ? (0, X.jsxs)(`div`, {
        className: `mt-2 flex flex-col items-center gap-2 text-center`,
        children: [d ? (0, X.jsxs)(`div`, {
            className: `flex flex-col items-center gap-1 text-center text-sm`,
            children: [(0, X.jsx)(`p`, {
                className: `font-medium text-red-500`,
                children: p ? (0, X.jsx)(N, {
                    id: `5B85Hf`,
                    defaultMessage: `The email you used for verification doesn't match your login email. Please sign in with the verified school email and try again. Current login email: {email}`,
                    values: {
                        email: m
                    }
                }) : (0, X.jsx)(N, {
                    id: `JANzo6`,
                    defaultMessage: `Your previous verification attempt failed.`
                })
            }), !p && !f?.canRetry ? (0, X.jsx)(`p`, {
                className: `text-red-500`,
                children: (0, X.jsx)(N, {
                    id: `v0H4Fi`,
                    defaultMessage: `You've reached the maximum number of attempts.`
                })
            }) : null]
        }) : null, h ? (0, X.jsx)(`div`, {
            className: `text-token-text-error mx-auto max-w-[720px] text-sm`,
            children: h
        }) : null, (0, X.jsxs)(`div`, {
            className: `relative flex flex-col items-center justify-center gap-2 pb-4 md:flex-row`,
            children: [(0, X.jsx)(Le, {
                enrollmentState: i,
                buttonSource: `splash`,
                onVerifyClick: s,
                onCreateWorkspaceClick: c
            }), (0, X.jsx)(x, {
                color: `ghost`,
                onClick: o,
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
    }) : null, t[7] = i, t[8] = f?.canRetry, t[9] = p, t[10] = d, t[11] = h, t[12] = c, t[13] = o, t[14] = s, t[15] = u, t[16] = m, t[17] = C) : C = t[17];
    let w;
    return t[18] !== a || t[19] !== y || t[20] !== b || t[21] !== S || t[22] !== C ? (w = (0, X.jsxs)(`section`, {
        ref: a,
        className: y,
        children: [b, S, C]
    }), t[18] = a, t[19] = y, t[20] = b, t[21] = S, t[22] = C, t[23] = w) : w = t[23], w
}
var Ve, X, He = e((() => {
    Ve = I(), n(), d(), G(), K(), g(), P(), ze(), X = M()
}));

function Ue() {
    "use forget";
    let e = (0, Xe.c)(79),
        t = fe(),
        n = t.name === `domain-claimed` ? t.workspace : null,
        a;
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (a = u(), e[0] = a) : a = e[0];
    let o = a,
        s;
    e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (s = D(), e[1] = s) : s = e[1];
    let c = s,
        l = i(),
        d = _(),
        f = re(),
        p = te(),
        m = l?.planType ?? c?.account?.planType ?? null,
        h = d?.email_domain_type ?? null,
        g;
    e[2] === f.search ? g = e[3] : (g = new URLSearchParams(f.search).get(`referer`), e[2] = f.search, e[3] = g);
    let v = g,
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
    e[11] !== w || e[12] !== v ? (T = (e, t, n) => {
        r.logEventWithStatsig(e, t, {
            ...w,
            referer: v ?? null,
            ...n
        })
    }, e[11] = w, e[12] = v, e[13] = T) : T = e[13];
    let E = T,
        O = v ?? null,
        k;
    e[14] !== h || e[15] !== m || e[16] !== O ? (k = {
        loggedInStatus: o ? `logged_in` : `logged_out`,
        accountPlanType: m,
        emailDomainType: h,
        referer: O
    }, e[14] = h, e[15] = m, e[16] = O, e[17] = k) : k = e[17];
    let A = k,
        j;
    e[18] !== t.name || e[19] !== E ? (j = e => {
        E($.verifyClick.segment, $.verifyClick.statsig, {
            source: e
        }), R(`verification`, `verify_click`, {
            source: e,
            verificationState: t.name
        })
    }, e[18] = t.name, e[19] = E, e[20] = j) : j = e[20];
    let M = j,
        ee;
    e[21] === E ? ee = e[22] : (ee = e => {
        E($.createWorkspaceClick.segment, $.createWorkspaceClick.statsig, {
            source: e
        }), R(`verification`, `create_workspace_click`, {
            source: e
        })
    }, e[21] = E, e[22] = ee);
    let N = ee,
        P = h != null,
        ne = t.name !== `loading`,
        F, ie;
    e[23] === p ? (F = e[24], ie = e[25]) : (F = () => {
        o || p(`/k12-plan`, {
            replace: !0
        })
    }, ie = [o, p], e[23] = p, e[24] = F, e[25] = ie), (0, Z.useEffect)(F, ie);
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
    e[28] !== A || e[29] !== P || e[30] !== ne || e[31] !== E ? (ye = () => {
        !o || !P || !ne || le.current || (E($.impression.segment, $.impression.statsig), R(`verification`, `page_view`, A), le.current = !0)
    }, be = [A, P, ne, o, E], e[28] = A, e[29] = P, e[30] = ne, e[31] = E, e[32] = ye, e[33] = be) : (ye = e[32], be = e[33]), (0, Z.useEffect)(ye, be);
    let xe, z;
    e[34] !== A || e[35] !== t.name ? (xe = () => {
        t.name === `error` && ue(`verification`, `enrollment_status_error`, Error(`enrollment_status_error`), A)
    }, z = [A, t.name], e[34] = A, e[35] = t.name, e[36] = xe, e[37] = z) : (xe = e[36], z = e[37]), (0, Z.useEffect)(xe, z);
    let Se, Ce;
    e[38] !== n || e[39] !== E ? (Se = () => {
        !n || de.current || (E($.domainClaimedShown.segment, $.domainClaimedShown.statsig, {
            source: `domain-claimed`,
            workspace_id: n.workspace_id
        }), R(`verification`, `domain_claimed_notice_shown`, {
            workspaceId: n.workspace_id,
            domain: n.domain
        }), de.current = !0)
    }, Ce = [n, E], e[38] = n, e[39] = E, e[40] = Se, e[41] = Ce) : (Se = e[40], Ce = e[41]), (0, Z.useEffect)(Se, Ce);
    let we;
    e[42] === E ? we = e[43] : (we = () => {
        E($.learnMore.segment, $.learnMore.statsig), R(`verification`, `learn_more_click`), window.open(`https://chatgpt.com/plans/k12-teachers`, `_blank`, `noopener`)
    }, e[42] = E, e[43] = we);
    let Te = we,
        Ee;
    e[44] === E ? Ee = e[45] : (Ee = (e, t) => {
        E($.domainClaimedAction.segment, $.domainClaimedAction.statsig, {
            source: `domain-claimed`,
            workspaceId: e,
            workspace_auto_accepts_requests: t
        }), R(`verification`, `domain_claimed_action_clicked`, {
            workspaceId: e,
            workspaceAutoAcceptsRequests: t
        })
    }, e[44] = E, e[45] = Ee);
    let De = Ee;
    if (!o) return null;
    let B;
    e[46] !== t || e[47] !== N || e[48] !== M ? (B = (0, Q.jsx)(We, {
        enrollmentState: t,
        onVerifyClick: M,
        onCreateWorkspaceClick: N
    }), e[46] = t, e[47] = N, e[48] = M, e[49] = B) : B = e[49];
    let Oe = !I,
        V;
    e[50] !== t || e[51] !== N || e[52] !== Te || e[53] !== M || e[54] !== L.description || e[55] !== L.title || e[56] !== Oe ? (V = (0, Q.jsx)(Be, {
        ref: oe,
        description: L.description,
        title: L.title,
        enrollmentState: t,
        onSecondaryAction: Te,
        onVerifyClick: M,
        onCreateWorkspaceClick: N,
        showActions: Oe
    }), e[50] = t, e[51] = N, e[52] = Te, e[53] = M, e[54] = L.description, e[55] = L.title, e[56] = Oe, e[57] = V) : V = e[57];
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
    let ke;
    e[65] === Symbol.for(`react.memo_cache_sentinel`) ? (ke = [U, W, G, {
        question: `How is data kept secure?`,
        answer: (0, Q.jsx)(`p`, {
            children: `The plan includes multi-factor authentication (MFA), SAML SSO, and encryption to protect your data and assist your school meet its FERPA compliance obligations.`
        })
    }], e[65] = ke) : ke = e[65];
    let K;
    e[66] === E ? K = e[67] : (K = (0, Q.jsx)(Ke, {
        ref: ce,
        title: `FAQs`,
        faqs: ke,
        logAnalyticsEvent: E
    }), e[66] = E, e[67] = K);
    let q;
    e[68] !== t || e[69] !== N || e[70] !== M || e[71] !== _e ? (q = (0, Q.jsx)(Ge, {
        enrollmentState: t,
        showBottomNav: _e,
        onVerifyClick: M,
        onCreateWorkspaceClick: N
    }), e[68] = t, e[69] = N, e[70] = M, e[71] = _e, e[72] = q) : q = e[72];
    let J;
    return e[73] !== B || e[74] !== V || e[75] !== H || e[76] !== K || e[77] !== q ? (J = (0, Q.jsxs)(`div`, {
        className: `font-oai overflow-hidden pt-[71px] pb-8`,
        children: [B, V, H, K, q]
    }), e[73] = B, e[74] = V, e[75] = H, e[76] = K, e[77] = q, e[78] = J) : J = e[78], J
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
        let e = w(() => {
            o(window.scrollY > 0), c(window.scrollY > 300)
        }, 200);
        return window.addEventListener(`scroll`, e), () => window.removeEventListener(`scroll`, e)
    }, d = [], t[0] = u, t[1] = d) : (u = t[0], d = t[1]), (0, Z.useEffect)(u, d);
    let f = !a,
        p;
    t[2] !== a || t[3] !== f ? (p = A(`bg-token-main-surface-primary absolute start-0 end-0 top-0 z-10 py-4 transition-all duration-300 md:fixed md:border-b`, {
        "border-token-border-default": a,
        "border-transparent": f
    }), t[2] = a, t[3] = f, t[4] = p) : p = t[4];
    let m;
    t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (m = A(`mx-auto flex items-center justify-between`, Ze), t[5] = m) : m = t[5];
    let h;
    t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (h = (0, Q.jsx)(`a`, {
        href: `/`,
        "aria-label": `ChatGPT Home`,
        children: (0, Q.jsx)(oe, {})
    }), t[6] = h) : h = t[6];
    let g;
    t[7] !== n || t[8] !== i || t[9] !== r || t[10] !== l || t[11] !== s ? (g = l ? (0, Q.jsx)(`div`, {
        className: A(`opacity-0 transition-opacity`, {
            "md:opacity-100": s
        }),
        inert: !s,
        children: (0, Q.jsx)(Le, {
            enrollmentState: n,
            buttonSource: `header`,
            onVerifyClick: r,
            onCreateWorkspaceClick: i
        })
    }) : null, t[7] = n, t[8] = i, t[9] = r, t[10] = l, t[11] = s, t[12] = g) : g = t[12];
    let _;
    t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = (0, Q.jsx)(le, {}), t[13] = _) : _ = t[13];
    let v;
    t[14] === g ? v = t[15] : (v = (0, Q.jsxs)(`div`, {
        className: m,
        children: [h, (0, Q.jsxs)(`div`, {
            className: `flex gap-2`,
            children: [g, _]
        })]
    }), t[14] = g, t[15] = v);
    let y;
    return t[16] !== p || t[17] !== v ? (y = (0, Q.jsx)(`nav`, {
        className: p,
        children: v
    }), t[16] = p, t[17] = v, t[18] = y) : y = t[18], y
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
    t[0] !== o || t[1] !== s ? (c = A(`border-token-border-default bg-token-main-surface-primary fixed start-0 end-0 bottom-0 z-10 border-t py-4 text-center transition-[opacity_transform] duration-200 ease-in-out md:hidden`, {
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
    t[4] === Symbol.for(`react.memo_cache_sentinel`) ? (u = A(`mx-auto flex max-w-[596px] flex-col gap-8 px-4 py-20 md:gap-16 md:py-32`), d = A(Qe, `sm:text-center`), t[4] = u, t[5] = d) : (u = t[4], d = t[5]);
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
    Xe = I(), se(), de(), ce(), k(), d(), Ce(), He(), pe(), l(), s(), g(), O(), Z = t(F()), j(), ze(), ge(), Q = M(), Ze = `max-w-(--breakpoint-2xl) px-4 md:px-8`, Qe = `text-2xl md:text-3xl`, $e = {
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
        nt(), it = M()
    })),
    ot, st, ct, lt, ut, dt, ft = e((() => {
        j(), ot = I(), at(), st = M(), ct = `/k12-verification`, lt = ne(function() {
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
//# sourceMappingURL=c38c3e3a-bphkgnmlkino2i4b.js.map