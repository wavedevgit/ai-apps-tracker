import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    C4 as n,
    F7 as r,
    Fot as i,
    JT as a,
    R1 as o,
    S4 as s,
    TE as c,
    X5 as l,
    Y5 as u,
    YT as d,
    Z1 as f,
    bR as p,
    bnt as m,
    dit as h,
    fit as ee,
    hst as te,
    nct as g,
    vR as _,
    vnt as ne,
    wE as v,
    z7 as y
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    At as b,
    Bn as x,
    Ht as S,
    Ln as C,
    Nn as w,
    Nt as T,
    Q as E,
    Rn as D,
    Vn as O,
    p as k,
    s as A,
    wn as j,
    zn as re
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    lKn as ie,
    uKn as M
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    Hu as N,
    Uu as P
} from "./30901919-e8h11sw136qen6v0.js";
import {
    p_ as F
} from "./8b34dbc2-dtawqv9t1aqckqj4.js";
import {
    n as I,
    r as L,
    t as R
} from "./bcd16462-gfb3wsqqhmuh0c3x.js";
var z, B = e((() => {
        D(), z = C({
            optionalField: {
                id: `IJLQx/`,
                defaultMessage: `(optional)`
            },
            teachersCreateWorkspacePageTitle: {
                id: `5ogaPW`,
                defaultMessage: `Set up your ChatGPT for Teachers workspace`
            },
            workspaceNameLabel: {
                id: `BiwR3m`,
                defaultMessage: `Workspace name`
            },
            workspaceNamePlaceholder: {
                id: `06SA34`,
                defaultMessage: `Enter your workspace name`
            },
            purchaseStepTitle: {
                id: `ISfo48`,
                defaultMessage: `Set up your ChatGPT for Teachers workspace`
            },
            purchaseStepSubtitle: {
                id: `/VsLeB`,
                defaultMessage: `You can get started on your own or add your teaching team`
            },
            continueButton: {
                id: `fsy6oV`,
                defaultMessage: `Continue`
            },
            agreeAndContinueButton: {
                id: `OnbV/Q`,
                defaultMessage: `Agree and Continue`
            },
            dpaSummaryIntro: {
                id: `CpCFBV`,
                defaultMessage: `Here's a short summary of the Teacher Access Terms -- please read the linked terms for full details.`
            },
            dpaSummaryEducationPurpose: {
                id: `yPGn52`,
                defaultMessage: `I'm using this account for school-related teaching work, and I understand it may later be managed by my School.`
            },
            dpaSummaryNoTraining: {
                id: `Ed7W+Y`,
                defaultMessage: `OpenAI won't train on content I submit here, including Student Data.`
            },
            teacherAccessTermsLinkText: {
                id: `CEzYQ9`,
                defaultMessage: `Teacher Access Terms`
            },
            studentDataPrivacyAgreementLinkText: {
                id: `5nS6GS`,
                defaultMessage: `Student Data Privacy Agreement`
            },
            teacherAccessAgreementLabel: {
                id: `qoGgzA`,
                defaultMessage: `I agree to our {teacherAccessTermsLink} and {studentDataPrivacyAgreementLink}.`
            }
        })
    })),
    V, H = e((() => {
        y(), V = e => r.safePost(`/accounts/create_workspace_without_subscription`, {
            requestBody: e
        })
    }));

function U() {
    "use forget";
    let e = (0, G.c)(21),
        t;
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = ee(), e[0] = t) : t = e[0];
    let n = !t,
        [r, i] = (0, K.useState)(null),
        [a, o] = (0, K.useState)(!1),
        [s, c] = (0, K.useState)(!1),
        l = (0, K.useRef)(!0),
        u;
    e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (u = {
        mutationFn: W,
        onSuccess: e => {
            if (c(!1), e.metadata) {
                let t = e.metadata.claimed_workspace,
                    n = {
                        ...e.metadata,
                        claimed_workspace: t && {
                            ...t,
                            auto_accept_requests: t.auto_accept_requests ?? !1,
                            workspace_discoverable: t.workspace_discoverable ?? !1
                        }
                    };
                i(n)
            }
            o(!0)
        },
        onError: () => {
            i(null), c(!0), o(!0)
        }
    }, e[1] = u) : u = e[1];
    let d = k(u),
        f, p;
    e[2] === d ? (f = e[3], p = e[4]) : (f = () => {
        !n && l.current && (l.current = !1, d.mutate())
    }, p = [n, d], e[2] = d, e[3] = f, e[4] = p), (0, K.useEffect)(f, p);
    let m;
    bb0: {
        if (n) {
            let t;
            e[5] === Symbol.for(`react.memo_cache_sentinel`) ? (t = {
                name: `logged-out`
            }, e[5] = t) : t = e[5], m = t;
            break bb0
        }
        if (!a) {
            let t;
            e[6] === Symbol.for(`react.memo_cache_sentinel`) ? (t = {
                name: `loading`
            }, e[6] = t) : t = e[6], m = t;
            break bb0
        }
        if (s) {
            let t;
            e[7] === Symbol.for(`react.memo_cache_sentinel`) ? (t = {
                name: `coming-soon`
            }, e[7] = t) : t = e[7], m = t;
            break bb0
        }
        if (!r) {
            let t;
            e[8] === Symbol.for(`react.memo_cache_sentinel`) ? (t = {
                name: `needs-verification`
            }, e[8] = t) : t = e[8], m = t;
            break bb0
        }
        let t = r.claimed_workspace;
        if (t) {
            let n = r.verification_id ?? null,
                i;
            e[9] !== t || e[10] !== n ? (i = {
                name: `domain-claimed`,
                workspace: t,
                verificationId: n
            }, e[9] = t, e[10] = n, e[11] = i) : i = e[11], m = i;
            break bb0
        }
        let i = r.verification_status,
            o = r.retry_count ?? 0,
            c = r.max_retry_attempts ?? q,
            l = r.retry_limit_reached ?? o >= c;
        if (i === `verified`) {
            let t;
            e[12] === Symbol.for(`react.memo_cache_sentinel`) ? (t = {
                name: `verified`
            }, e[12] = t) : t = e[12], m = t;
            break bb0
        }
        if (i === `error`) {
            let t = !l,
                n = r.error_code ?? null,
                i;
            e[13] !== c || e[14] !== o || e[15] !== t || e[16] !== n ? (i = {
                name: `error`,
                canRetry: t,
                retryCount: o,
                maxRetryAttempts: c,
                errorCode: n
            }, e[13] = c, e[14] = o, e[15] = t, e[16] = n, e[17] = i) : i = e[17], m = i;
            break bb0
        }
        if (i === `linked`) {
            let t;
            e[18] === Symbol.for(`react.memo_cache_sentinel`) ? (t = {
                name: `linked`
            }, e[18] = t) : t = e[18], m = t;
            break bb0
        }
        let u = r?.verification_id,
            d;e[19] === u ? d = e[20] : (d = {
            name: `needs-verification`,
            verificationId: u
        }, e[19] = u, e[20] = d),
        m = d
    }
    return m
}

function W() {
    return r.safePost(`/teachers/refresh_enrollment_status`)
}
var G, K, q, J = e((() => {
        G = j(), h(), y(), A(), K = t(O()), q = 3
    })),
    Y, ae, X, oe, se, ce, le, ue, de, fe = e((() => {
        Y = j(), d(), P(), F(), l(), ae = t(O()), D(), c(), B(), X = x(), oe = e => {
            "use forget";
            let t = (0, Y.c)(10),
                {
                    content: n,
                    onPrevious: r,
                    headerPaddingClassName: i
                } = e,
                o = i ?? `pt-16 [@media(min-width:450px)]:pt-[12vh]`,
                s;
            t[0] === o ? s = t[1] : (s = u(`relative flex min-h-[100dvh] w-screen justify-center overflow-y-auto`, o), t[0] = o, t[1] = s);
            let c;
            t[2] === r ? c = t[3] : (c = r && (0, X.jsx)(`div`, {
                className: `absolute start-4 top-4`,
                children: (0, X.jsx)(a, {
                    onClick: r,
                    icon: N,
                    color: `ghost`
                })
            }), t[2] = r, t[3] = c);
            let l;
            t[4] === n ? l = t[5] : (l = (0, X.jsx)(`div`, {
                className: `flex max-w-full flex-none items-center justify-center [@media(min-width:450px)]:w-[520px]`,
                children: n
            }), t[4] = n, t[5] = l);
            let d;
            return t[6] !== s || t[7] !== c || t[8] !== l ? (d = (0, X.jsxs)(`div`, {
                className: s,
                children: [c, l]
            }), t[6] = s, t[7] = c, t[8] = l, t[9] = d) : d = t[9], d
        }, se = e => {
            "use forget";
            let t = (0, Y.c)(10),
                {
                    title: n,
                    subTitle: r,
                    children: i
                } = e,
                a;
            t[0] === n ? a = t[1] : (a = (0, X.jsx)(`div`, {
                className: `text-3xl font-normal`,
                children: n
            }), t[0] = n, t[1] = a);
            let o;
            t[2] === r ? o = t[3] : (o = r && (0, X.jsx)(`div`, {
                className: `text-token-text-secondary`,
                children: r
            }), t[2] = r, t[3] = o);
            let s;
            t[4] !== a || t[5] !== o ? (s = (0, X.jsxs)(`div`, {
                className: `flex flex-col gap-4 text-center`,
                children: [a, o]
            }), t[4] = a, t[5] = o, t[6] = s) : s = t[6];
            let c;
            return t[7] !== i || t[8] !== s ? (c = (0, X.jsxs)(`div`, {
                className: `box-content flex w-full flex-col gap-6 px-4`,
                children: [s, i]
            }), t[7] = i, t[8] = s, t[9] = c) : c = t[9], c
        }, ce = e => {
            "use forget";
            let t = (0, Y.c)(10),
                {
                    onClick: n,
                    disabled: r,
                    labelMessage: i
                } = e,
                [o, s] = (0, ae.useState)(!1),
                c = re(),
                l;
            t[0] === n ? l = t[1] : (l = async () => {
                s(!0), await n(), s(!1)
            }, t[0] = n, t[1] = l);
            let u;
            t[2] !== c || t[3] !== i ? (u = c.formatMessage(i ?? z.continueButton), t[2] = c, t[3] = i, t[4] = u) : u = t[4];
            let d;
            return t[5] !== r || t[6] !== o || t[7] !== l || t[8] !== u ? (d = (0, X.jsx)(a, {
                size: `large`,
                loading: o,
                disabled: r,
                onClick: l,
                children: u
            }), t[5] = r, t[6] = o, t[7] = l, t[8] = u, t[9] = d) : d = t[9], d
        }, le = v.label`font-medium`, v.div`text-red-500 text-sm mb-2`, ue = v.input`rounded-full border border-token-border-default bg-token-bg-primary placeholder:text-token-text-tertiary px-5 py-3 focus:border-token-icon-accent focus:ring-token-icon-accent focus:ring-0`, de = e => {
            "use forget";
            let t = (0, Y.c)(5),
                {
                    children: n,
                    required: r
                } = e,
                i;
            t[0] === r ? i = t[1] : (i = !r && (0, X.jsxs)(`span`, {
                className: `text-token-text-secondary text-xs`,
                children: [`\xA0`, (0, X.jsx)(w, {
                    ...z.optionalField
                })]
            }), t[0] = r, t[1] = i);
            let a;
            return t[2] !== n || t[3] !== i ? (a = (0, X.jsxs)(le, {
                children: [n, i]
            }), t[2] = n, t[3] = i, t[4] = a) : a = t[4], a
        }
    }));

function pe(e) {
    return (0, Z.jsx)(`li`, {
        children: (0, Z.jsx)(w, {
            ...e.message
        })
    }, e.id)
}
var me, he, Z, ge, _e = e((() => {
    me = j(), d(), M(), he = t(O()), D(), E(), B(), fe(), Z = x(), ge = e => {
        "use forget";
        let t = (0, me.c)(52),
            {
                disableContinueButton: n,
                onNext: r,
                onCancel: i
            } = e,
            o = re(),
            s = T(),
            c = z.purchaseStepTitle,
            l = z.purchaseStepSubtitle,
            [u, d] = (0, he.useState)(``),
            [f, p] = (0, he.useState)(!1),
            m;
        t[0] === u ? m = t[1] : (m = u.trim(), t[0] = u, t[1] = m);
        let h = m,
            ee = f && h.length > 0 && !n,
            te;
        t[2] !== f || t[3] !== h ? (te = {
            workspaceName: h,
            agreedToDPA: f
        }, t[2] = f, t[3] = h, t[4] = te) : te = t[4];
        let g = te,
            _;
        t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = (0, Z.jsx)(`a`, {
            href: `https://openai.com/policies/education-terms`,
            className: `underline`,
            target: `_blank`,
            rel: `noreferrer`,
            children: (0, Z.jsx)(w, {
                ...z.teacherAccessTermsLinkText
            })
        }), t[5] = _) : _ = t[5];
        let ne = _,
            v;
        t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (v = (0, Z.jsx)(`a`, {
            href: `https://openai.com/policies/student-data-privacy`,
            className: `underline`,
            target: `_blank`,
            rel: `noreferrer`,
            children: (0, Z.jsx)(w, {
                ...z.studentDataPrivacyAgreementLinkText
            })
        }), t[6] = v) : v = t[6];
        let y = v,
            b;
        t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (b = [{
            id: `education-purpose`,
            message: z.dpaSummaryEducationPurpose
        }, {
            id: `no-training`,
            message: z.dpaSummaryNoTraining
        }], t[7] = b) : b = t[7];
        let x = b,
            S;
        t[8] === o ? S = t[9] : (S = o.formatMessage(c), t[8] = o, t[9] = S);
        let C;
        t[10] === o ? C = t[11] : (C = l && o.formatMessage(l), t[10] = o, t[11] = C);
        let E;
        t[12] === o ? E = t[13] : (E = o.formatMessage(z.workspaceNameLabel), t[12] = o, t[13] = E);
        let D;
        t[14] === E ? D = t[15] : (D = (0, Z.jsx)(de, {
            required: !0,
            children: E
        }), t[14] = E, t[15] = D);
        let O;
        t[16] === Symbol.for(`react.memo_cache_sentinel`) ? (O = e => d(e.target.value), t[16] = O) : O = t[16];
        let k;
        t[17] === o ? k = t[18] : (k = o.formatMessage(z.workspaceNamePlaceholder), t[17] = o, t[18] = k);
        let A;
        t[19] !== k || t[20] !== u ? (A = (0, Z.jsx)(ue, {
            id: `workspace-name`,
            name: `workspace-name`,
            value: u,
            onChange: O,
            placeholder: k
        }), t[19] = k, t[20] = u, t[21] = A) : A = t[21];
        let j;
        t[22] !== A || t[23] !== D ? (j = (0, Z.jsxs)(`div`, {
            className: `flex flex-col gap-1.5`,
            children: [D, A]
        }), t[22] = A, t[23] = D, t[24] = j) : j = t[24];
        let M;
        t[25] === Symbol.for(`react.memo_cache_sentinel`) ? (M = (0, Z.jsx)(`p`, {
            className: `text-token-text-secondary`,
            children: (0, Z.jsx)(w, {
                ...z.dpaSummaryIntro
            })
        }), t[25] = M) : M = t[25];
        let N;
        t[26] === Symbol.for(`react.memo_cache_sentinel`) ? (N = (0, Z.jsxs)(`div`, {
            className: `border-token-border-strong bg-token-main-surface-secondary rounded-2xl border px-4 py-4 text-sm`,
            children: [M, (0, Z.jsx)(`ul`, {
                className: `text-token-text-primary mt-3 list-disc space-y-2 ps-4`,
                children: x.map(pe)
            })]
        }), t[26] = N) : N = t[26];
        let P;
        t[27] === Symbol.for(`react.memo_cache_sentinel`) ? (P = e => p(e.target.checked), t[27] = P) : P = t[27];
        let F;
        t[28] === Symbol.for(`react.memo_cache_sentinel`) ? (F = (0, Z.jsx)(w, {
            ...z.teacherAccessAgreementLabel,
            values: {
                teacherAccessTermsLink: ne,
                studentDataPrivacyAgreementLink: y
            }
        }), t[28] = F) : F = t[28];
        let I;
        t[29] === f ? I = t[30] : (I = (0, Z.jsx)(`div`, {
            className: `flex flex-col gap-1.5`,
            children: (0, Z.jsx)(ie, {
                id: `dpa-agree`,
                checked: f,
                onChange: P,
                containerClassName: `flex items-center gap-2`,
                label: F
            })
        }), t[29] = f, t[30] = I);
        let L;
        t[31] !== j || t[32] !== I ? (L = (0, Z.jsxs)(`div`, {
            className: `flex flex-col gap-5`,
            children: [j, N, I]
        }), t[31] = j, t[32] = I, t[33] = L) : L = t[33];
        let R = !ee,
            B;
        t[34] !== r || t[35] !== g ? (B = () => r({
            ...g
        }), t[34] = r, t[35] = g, t[36] = B) : B = t[36];
        let V;
        t[37] !== R || t[38] !== B ? (V = (0, Z.jsx)(ce, {
            disabled: R,
            labelMessage: z.agreeAndContinueButton,
            onClick: B
        }), t[37] = R, t[38] = B, t[39] = V) : V = t[39];
        let H;
        t[40] !== s || t[41] !== i ? (H = () => {
            i?.(), s(`/`)
        }, t[40] = s, t[41] = i, t[42] = H) : H = t[42];
        let U;
        t[43] === Symbol.for(`react.memo_cache_sentinel`) ? (U = (0, Z.jsx)(w, {
            id: `TjfExQ`,
            defaultMessage: `Cancel`
        }), t[43] = U) : U = t[43];
        let W;
        t[44] === H ? W = t[45] : (W = (0, Z.jsx)(a, {
            color: `ghost`,
            onClick: H,
            children: U
        }), t[44] = H, t[45] = W);
        let G;
        return t[46] !== L || t[47] !== V || t[48] !== W || t[49] !== S || t[50] !== C ? (G = (0, Z.jsx)(oe, {
            content: (0, Z.jsxs)(se, {
                title: S,
                subTitle: C,
                children: [L, V, W]
            })
        }), t[46] = L, t[47] = V, t[48] = W, t[49] = S, t[50] = C, t[51] = G) : G = t[51], G
    }
}));

function ve(e) {
    return setTimeout(e, 3e3)
}
var ye, be, Q, $, xe, Se = e((() => {
        ye = j(), g(), R(), o(), _(), B(), H(), J(), h(), m(), n(), be = t(O()), D(), E(), _e(), Q = x(), $ = {
            impression: {
                segment: `K12 Create Workspace: Shown`,
                statsig: `chatgpt_k12_create_workspace_shown`
            },
            continue: {
                segment: `K12 Create Workspace: Continue Clicked`,
                statsig: `chatgpt_k12_create_workspace_continue_clicked`
            },
            cancel: {
                segment: `K12 Create Workspace: Cancel Clicked`,
                statsig: `chatgpt_k12_create_workspace_cancel_clicked`
            },
            result: {
                segment: `K12 Create Workspace: Result`,
                statsig: `chatgpt_k12_create_workspace_result`
            }
        }, xe = () => {
            "use forget";
            let e = (0, ye.c)(39),
                t = re(),
                n = U(),
                r;
            e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = ee(), e[0] = r) : r = e[0];
            let a = r,
                o;
            e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (o = i(), e[1] = o) : o = e[1];
            let c = o,
                l = f(),
                u = p(),
                d = b(),
                [m, h] = (0, be.useState)(!1),
                g = l?.planType ?? c?.account?.planType ?? null,
                _ = u?.email_domain_type ?? null,
                v;
            e[2] === d.search ? v = e[3] : (v = new URLSearchParams(d.search).get(`referer`), e[2] = d.search, e[3] = v);
            let y = v,
                x = `verificationId` in n ? n.verificationId ?? null : null,
                S;
            e[4] !== n.name || e[5] !== x ? (S = {
                enrollmentState: n.name,
                enrollmentVerificationId: x
            }, e[4] = n.name, e[5] = x, e[6] = S) : S = e[6];
            let C = S,
                w = a ? g ?? `unknown` : null,
                T;
            e[7] !== _ || e[8] !== C || e[9] !== w ? (T = {
                isLoggedIn: a,
                loggedInStatus: a ? `logged_in` : `logged_out`,
                accountPlanType: w,
                emailDomainType: _,
                ...C
            }, e[7] = _, e[8] = C, e[9] = w, e[10] = T) : T = e[10];
            let E = T,
                D;
            e[11] !== E || e[12] !== y ? (D = (e, t, n) => {
                ne.logEventWithStatsig(e, t, {
                    ...E,
                    referer: y ?? null,
                    ...n
                })
            }, e[11] = E, e[12] = y, e[13] = D) : D = e[13];
            let O = D,
                k = y ?? null,
                A;
            e[14] !== _ || e[15] !== g || e[16] !== k ? (A = {
                loggedInStatus: a ? `logged_in` : `logged_out`,
                accountPlanType: g,
                emailDomainType: _,
                referer: k
            }, e[14] = _, e[15] = g, e[16] = k, e[17] = A) : A = e[17];
            let j = A,
                ie = (0, be.useRef)(!1),
                M = _ != null,
                N = n.name !== `loading`,
                P, F;
            e[18] !== j || e[19] !== M || e[20] !== N || e[21] !== O ? (P = () => {
                !a || !M || !N || ie.current || (O($.impression.segment, $.impression.statsig), L(`create_workspace`, `page_view`, j), ie.current = !0)
            }, F = [j, M, N, a, O], e[18] = j, e[19] = M, e[20] = N, e[21] = O, e[22] = P, e[23] = F) : (P = e[22], F = e[23]), (0, be.useEffect)(P, F);
            let R;
            e[24] === O ? R = e[25] : (R = async e => {
                h(!0);
                let t = e.workspaceName ?? ``,
                    n = e.agreedToDPA ?? !1;
                O($.continue.segment, $.continue.statsig, {
                    workspaceNameLength: t.length,
                    agreedToDpa: n
                }), L(`create_workspace`, `continue_click`, {
                    workspaceNameLength: t.length,
                    agreedToDpa: n
                });
                try {
                    await V({
                        workspace_name: t,
                        agreed_to_dpa: n,
                        plan_type: te.K12
                    }), O($.result.segment, $.result.statsig, {
                        status: `success`,
                        workspaceNameLength: t.length
                    }), L(`create_workspace`, `continue_success`, {
                        workspaceNameLength: t.length
                    }), await new Promise(ve), s()
                } catch (e) {
                    let r = e,
                        i = r instanceof Error ? {
                            errorName: r.name,
                            errorMessage: r.message
                        } : {
                            errorName: typeof r,
                            errorMessage: String(r)
                        };
                    O($.result.segment, $.result.statsig, {
                        status: `error`,
                        ...i
                    }), h(!1), I(`create_workspace`, `continue_error`, r, {
                        workspaceNameLength: t.length,
                        agreedToDpa: n
                    })
                }
            }, e[24] = O, e[25] = R);
            let B = R,
                H;
            e[26] === O ? H = e[27] : (H = () => {
                O($.cancel.segment, $.cancel.statsig), L(`create_workspace`, `cancel_click`)
            }, e[26] = O, e[27] = H);
            let W = H,
                G;
            e[28] === t ? G = e[29] : (G = t.formatMessage(z.teachersCreateWorkspacePageTitle), e[28] = t, e[29] = G);
            let K;
            e[30] === G ? K = e[31] : (K = (0, Q.jsx)(`title`, {
                children: G
            }), e[30] = G, e[31] = K);
            let q;
            e[32] !== m || e[33] !== W || e[34] !== B ? (q = (0, Q.jsx)(ge, {
                disableContinueButton: m,
                onNext: B,
                onCancel: W
            }), e[32] = m, e[33] = W, e[34] = B, e[35] = q) : q = e[35];
            let J;
            return e[36] !== K || e[37] !== q ? (J = (0, Q.jsxs)(Q.Fragment, {
                children: [K, q]
            }), e[36] = K, e[37] = q, e[38] = J) : J = e[38], J
        }
    })),
    Ce, we, Te, Ee, De = e((() => {
        E(), Ce = j(), Se(), we = x(), Te = `/k12-create-workspace`, Ee = S(function() {
            "use forget";
            let e = (0, Ce.c)(1),
                t;
            return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, we.jsx)(xe, {}), e[0] = t) : t = e[0], t
        })
    }));
export {
    U as a, J as i, De as n, Ee as r, Te as t
};
//# sourceMappingURL=cff09cfe-lrt6uasvj0ihcg7v.js.map