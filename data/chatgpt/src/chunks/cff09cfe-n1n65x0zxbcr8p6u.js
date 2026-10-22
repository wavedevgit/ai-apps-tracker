import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    AE as r,
    CR as i,
    Dit as a,
    Int as o,
    J7 as s,
    N4 as c,
    Oit as l,
    P4 as u,
    Pnt as d,
    Q7 as f,
    TR as p,
    Zot as m,
    c7 as h,
    eE as g,
    jst as ee,
    kE as _,
    l7 as v,
    o0 as te,
    q1 as y,
    vct as b
} from "./4813494d-itnrgnth03y1sm9d.js";
import {
    At as x,
    Bn as S,
    Ht as C,
    Ln as w,
    Nn as T,
    Nt as E,
    Q as D,
    Rn as O,
    Vn as k,
    p as A,
    s as j,
    wn as M,
    zn as ne
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    OKn as re,
    kKn as N
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    Hu as P,
    Uu as F
} from "./30901919-ikyi1r55w2i02fom.js";
import {
    h_ as I
} from "./8b34dbc2-m4883pai3e8fx8q6.js";
import {
    n as L,
    r as R,
    t as z
} from "./bcd16462-lca1ryda3b6spbw6.js";
var B, V = e((() => {
        O(), B = w({
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
    H, U = e((() => {
        f(), H = e => s.safePost(`/accounts/create_workspace_without_subscription`, {
            requestBody: e
        })
    }));

function W() {
    "use forget";
    let e = (0, K.c)(21),
        t;
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = l(), e[0] = t) : t = e[0];
    let n = !t,
        [r, i] = (0, q.useState)(null),
        [a, o] = (0, q.useState)(!1),
        [s, c] = (0, q.useState)(!1),
        u = (0, q.useRef)(!0),
        d;
    e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (d = {
        mutationFn: G,
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
    }, e[1] = d) : d = e[1];
    let f = A(d),
        p, m;
    e[2] === f ? (p = e[3], m = e[4]) : (p = () => {
        !n && u.current && (u.current = !1, f.mutate())
    }, m = [n, f], e[2] = f, e[3] = p, e[4] = m), (0, q.useEffect)(p, m);
    let h;
    bb0: {
        if (n) {
            let t;
            e[5] === Symbol.for(`react.memo_cache_sentinel`) ? (t = {
                name: `logged-out`
            }, e[5] = t) : t = e[5], h = t;
            break bb0
        }
        if (!a) {
            let t;
            e[6] === Symbol.for(`react.memo_cache_sentinel`) ? (t = {
                name: `loading`
            }, e[6] = t) : t = e[6], h = t;
            break bb0
        }
        if (s) {
            let t;
            e[7] === Symbol.for(`react.memo_cache_sentinel`) ? (t = {
                name: `coming-soon`
            }, e[7] = t) : t = e[7], h = t;
            break bb0
        }
        if (!r) {
            let t;
            e[8] === Symbol.for(`react.memo_cache_sentinel`) ? (t = {
                name: `needs-verification`
            }, e[8] = t) : t = e[8], h = t;
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
            }, e[9] = t, e[10] = n, e[11] = i) : i = e[11], h = i;
            break bb0
        }
        let i = r.verification_status,
            o = r.retry_count ?? 0,
            c = r.max_retry_attempts ?? J,
            l = r.retry_limit_reached ?? o >= c;
        if (i === `verified`) {
            let t;
            e[12] === Symbol.for(`react.memo_cache_sentinel`) ? (t = {
                name: `verified`
            }, e[12] = t) : t = e[12], h = t;
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
            }, e[13] = c, e[14] = o, e[15] = t, e[16] = n, e[17] = i) : i = e[17], h = i;
            break bb0
        }
        if (i === `linked`) {
            let t;
            e[18] === Symbol.for(`react.memo_cache_sentinel`) ? (t = {
                name: `linked`
            }, e[18] = t) : t = e[18], h = t;
            break bb0
        }
        let u = r?.verification_id,
            d;e[19] === u ? d = e[20] : (d = {
            name: `needs-verification`,
            verificationId: u
        }, e[19] = u, e[20] = d),
        h = d
    }
    return h
}

function G() {
    return s.safePost(`/teachers/refresh_enrollment_status`)
}
var K, q, J, Y = e((() => {
        K = M(), a(), f(), j(), q = t(k()), J = 3
    })),
    X, ie, Z, ae, oe, se, ce, le, ue, de = e((() => {
        X = M(), g(), F(), I(), v(), ie = t(k()), O(), r(), V(), Z = S(), ae = e => {
            "use forget";
            let t = (0, X.c)(10),
                {
                    content: r,
                    onPrevious: i,
                    headerPaddingClassName: a
                } = e,
                o = a ?? `pt-16 [@media(min-width:450px)]:pt-[12vh]`,
                s;
            t[0] === o ? s = t[1] : (s = h(`relative flex min-h-[100dvh] w-screen justify-center overflow-y-auto`, o), t[0] = o, t[1] = s);
            let c;
            t[2] === i ? c = t[3] : (c = i && (0, Z.jsx)(`div`, {
                className: `absolute start-4 top-4`,
                children: (0, Z.jsx)(n, {
                    onClick: i,
                    icon: P,
                    color: `ghost`
                })
            }), t[2] = i, t[3] = c);
            let l;
            t[4] === r ? l = t[5] : (l = (0, Z.jsx)(`div`, {
                className: `flex max-w-full flex-none items-center justify-center [@media(min-width:450px)]:w-[520px]`,
                children: r
            }), t[4] = r, t[5] = l);
            let u;
            return t[6] !== s || t[7] !== c || t[8] !== l ? (u = (0, Z.jsxs)(`div`, {
                className: s,
                children: [c, l]
            }), t[6] = s, t[7] = c, t[8] = l, t[9] = u) : u = t[9], u
        }, oe = e => {
            "use forget";
            let t = (0, X.c)(10),
                {
                    title: n,
                    subTitle: r,
                    children: i
                } = e,
                a;
            t[0] === n ? a = t[1] : (a = (0, Z.jsx)(`div`, {
                className: `text-3xl font-normal`,
                children: n
            }), t[0] = n, t[1] = a);
            let o;
            t[2] === r ? o = t[3] : (o = r && (0, Z.jsx)(`div`, {
                className: `text-token-text-secondary`,
                children: r
            }), t[2] = r, t[3] = o);
            let s;
            t[4] !== a || t[5] !== o ? (s = (0, Z.jsxs)(`div`, {
                className: `flex flex-col gap-4 text-center`,
                children: [a, o]
            }), t[4] = a, t[5] = o, t[6] = s) : s = t[6];
            let c;
            return t[7] !== i || t[8] !== s ? (c = (0, Z.jsxs)(`div`, {
                className: `box-content flex w-full flex-col gap-6 px-4`,
                children: [s, i]
            }), t[7] = i, t[8] = s, t[9] = c) : c = t[9], c
        }, se = e => {
            "use forget";
            let t = (0, X.c)(10),
                {
                    onClick: r,
                    disabled: i,
                    labelMessage: a
                } = e,
                [o, s] = (0, ie.useState)(!1),
                c = ne(),
                l;
            t[0] === r ? l = t[1] : (l = async () => {
                s(!0), await r(), s(!1)
            }, t[0] = r, t[1] = l);
            let u;
            t[2] !== c || t[3] !== a ? (u = c.formatMessage(a ?? B.continueButton), t[2] = c, t[3] = a, t[4] = u) : u = t[4];
            let d;
            return t[5] !== i || t[6] !== o || t[7] !== l || t[8] !== u ? (d = (0, Z.jsx)(n, {
                size: `large`,
                loading: o,
                disabled: i,
                onClick: l,
                children: u
            }), t[5] = i, t[6] = o, t[7] = l, t[8] = u, t[9] = d) : d = t[9], d
        }, ce = _.label`font-medium`, _.div`text-red-500 text-sm mb-2`, le = _.input`rounded-full border border-token-border-default bg-token-bg-primary placeholder:text-token-text-tertiary px-5 py-3 focus:border-token-icon-accent focus:ring-token-icon-accent focus:ring-0`, ue = e => {
            "use forget";
            let t = (0, X.c)(5),
                {
                    children: n,
                    required: r
                } = e,
                i;
            t[0] === r ? i = t[1] : (i = !r && (0, Z.jsxs)(`span`, {
                className: `text-token-text-secondary text-xs`,
                children: [`\xA0`, (0, Z.jsx)(T, {
                    ...B.optionalField
                })]
            }), t[0] = r, t[1] = i);
            let a;
            return t[2] !== n || t[3] !== i ? (a = (0, Z.jsxs)(ce, {
                children: [n, i]
            }), t[2] = n, t[3] = i, t[4] = a) : a = t[4], a
        }
    }));

function fe(e) {
    return (0, Q.jsx)(`li`, {
        children: (0, Q.jsx)(T, {
            ...e.message
        })
    }, e.id)
}
var pe, me, Q, he, ge = e((() => {
    pe = M(), g(), N(), me = t(k()), O(), D(), V(), de(), Q = S(), he = e => {
        "use forget";
        let t = (0, pe.c)(52),
            {
                disableContinueButton: r,
                onNext: i,
                onCancel: a
            } = e,
            o = ne(),
            s = E(),
            c = B.purchaseStepTitle,
            l = B.purchaseStepSubtitle,
            [u, d] = (0, me.useState)(``),
            [f, p] = (0, me.useState)(!1),
            m;
        t[0] === u ? m = t[1] : (m = u.trim(), t[0] = u, t[1] = m);
        let h = m,
            g = f && h.length > 0 && !r,
            ee;
        t[2] !== f || t[3] !== h ? (ee = {
            workspaceName: h,
            agreedToDPA: f
        }, t[2] = f, t[3] = h, t[4] = ee) : ee = t[4];
        let _ = ee,
            v;
        t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (v = (0, Q.jsx)(`a`, {
            href: `https://openai.com/policies/education-terms`,
            className: `underline`,
            target: `_blank`,
            rel: `noreferrer`,
            children: (0, Q.jsx)(T, {
                ...B.teacherAccessTermsLinkText
            })
        }), t[5] = v) : v = t[5];
        let te = v,
            y;
        t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (y = (0, Q.jsx)(`a`, {
            href: `https://openai.com/policies/student-data-privacy`,
            className: `underline`,
            target: `_blank`,
            rel: `noreferrer`,
            children: (0, Q.jsx)(T, {
                ...B.studentDataPrivacyAgreementLinkText
            })
        }), t[6] = y) : y = t[6];
        let b = y,
            x;
        t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (x = [{
            id: `education-purpose`,
            message: B.dpaSummaryEducationPurpose
        }, {
            id: `no-training`,
            message: B.dpaSummaryNoTraining
        }], t[7] = x) : x = t[7];
        let S = x,
            C;
        t[8] === o ? C = t[9] : (C = o.formatMessage(c), t[8] = o, t[9] = C);
        let w;
        t[10] === o ? w = t[11] : (w = l && o.formatMessage(l), t[10] = o, t[11] = w);
        let D;
        t[12] === o ? D = t[13] : (D = o.formatMessage(B.workspaceNameLabel), t[12] = o, t[13] = D);
        let O;
        t[14] === D ? O = t[15] : (O = (0, Q.jsx)(ue, {
            required: !0,
            children: D
        }), t[14] = D, t[15] = O);
        let k;
        t[16] === Symbol.for(`react.memo_cache_sentinel`) ? (k = e => d(e.target.value), t[16] = k) : k = t[16];
        let A;
        t[17] === o ? A = t[18] : (A = o.formatMessage(B.workspaceNamePlaceholder), t[17] = o, t[18] = A);
        let j;
        t[19] !== A || t[20] !== u ? (j = (0, Q.jsx)(le, {
            id: `workspace-name`,
            name: `workspace-name`,
            value: u,
            onChange: k,
            placeholder: A
        }), t[19] = A, t[20] = u, t[21] = j) : j = t[21];
        let M;
        t[22] !== j || t[23] !== O ? (M = (0, Q.jsxs)(`div`, {
            className: `flex flex-col gap-1.5`,
            children: [O, j]
        }), t[22] = j, t[23] = O, t[24] = M) : M = t[24];
        let N;
        t[25] === Symbol.for(`react.memo_cache_sentinel`) ? (N = (0, Q.jsx)(`p`, {
            className: `text-token-text-secondary`,
            children: (0, Q.jsx)(T, {
                ...B.dpaSummaryIntro
            })
        }), t[25] = N) : N = t[25];
        let P;
        t[26] === Symbol.for(`react.memo_cache_sentinel`) ? (P = (0, Q.jsxs)(`div`, {
            className: `border-token-border-strong bg-token-main-surface-secondary rounded-2xl border px-4 py-4 text-sm`,
            children: [N, (0, Q.jsx)(`ul`, {
                className: `text-token-text-primary mt-3 list-disc space-y-2 ps-4`,
                children: S.map(fe)
            })]
        }), t[26] = P) : P = t[26];
        let F;
        t[27] === Symbol.for(`react.memo_cache_sentinel`) ? (F = e => p(e.target.checked), t[27] = F) : F = t[27];
        let I;
        t[28] === Symbol.for(`react.memo_cache_sentinel`) ? (I = (0, Q.jsx)(T, {
            ...B.teacherAccessAgreementLabel,
            values: {
                teacherAccessTermsLink: te,
                studentDataPrivacyAgreementLink: b
            }
        }), t[28] = I) : I = t[28];
        let L;
        t[29] === f ? L = t[30] : (L = (0, Q.jsx)(`div`, {
            className: `flex flex-col gap-1.5`,
            children: (0, Q.jsx)(re, {
                id: `dpa-agree`,
                checked: f,
                onChange: F,
                containerClassName: `flex items-center gap-2`,
                label: I
            })
        }), t[29] = f, t[30] = L);
        let R;
        t[31] !== M || t[32] !== L ? (R = (0, Q.jsxs)(`div`, {
            className: `flex flex-col gap-5`,
            children: [M, P, L]
        }), t[31] = M, t[32] = L, t[33] = R) : R = t[33];
        let z = !g,
            V;
        t[34] !== i || t[35] !== _ ? (V = () => i({
            ..._
        }), t[34] = i, t[35] = _, t[36] = V) : V = t[36];
        let H;
        t[37] !== z || t[38] !== V ? (H = (0, Q.jsx)(se, {
            disabled: z,
            labelMessage: B.agreeAndContinueButton,
            onClick: V
        }), t[37] = z, t[38] = V, t[39] = H) : H = t[39];
        let U;
        t[40] !== s || t[41] !== a ? (U = () => {
            a?.(), s(`/`)
        }, t[40] = s, t[41] = a, t[42] = U) : U = t[42];
        let W;
        t[43] === Symbol.for(`react.memo_cache_sentinel`) ? (W = (0, Q.jsx)(T, {
            id: `TjfExQ`,
            defaultMessage: `Cancel`
        }), t[43] = W) : W = t[43];
        let G;
        t[44] === U ? G = t[45] : (G = (0, Q.jsx)(n, {
            color: `ghost`,
            onClick: U,
            children: W
        }), t[44] = U, t[45] = G);
        let K;
        return t[46] !== R || t[47] !== H || t[48] !== G || t[49] !== C || t[50] !== w ? (K = (0, Q.jsx)(ae, {
            content: (0, Q.jsxs)(oe, {
                title: C,
                subTitle: w,
                children: [R, H, G]
            })
        }), t[46] = R, t[47] = H, t[48] = G, t[49] = C, t[50] = w, t[51] = K) : K = t[51], K
    }
}));

function _e(e) {
    return setTimeout(e, 3e3)
}
var ve, ye, be, $, xe, Se = e((() => {
        ve = M(), b(), z(), y(), i(), V(), U(), Y(), a(), o(), u(), ye = t(k()), O(), D(), ge(), be = S(), $ = {
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
            let e = (0, ve.c)(39),
                t = ne(),
                n = W(),
                r;
            e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = l(), e[0] = r) : r = e[0];
            let i = r,
                a;
            e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (a = m(), e[1] = a) : a = e[1];
            let o = a,
                s = te(),
                u = p(),
                f = x(),
                [h, g] = (0, ye.useState)(!1),
                _ = s?.planType ?? o?.account?.planType ?? null,
                v = u?.email_domain_type ?? null,
                y;
            e[2] === f.search ? y = e[3] : (y = new URLSearchParams(f.search).get(`referer`), e[2] = f.search, e[3] = y);
            let b = y,
                S = `verificationId` in n ? n.verificationId ?? null : null,
                C;
            e[4] !== n.name || e[5] !== S ? (C = {
                enrollmentState: n.name,
                enrollmentVerificationId: S
            }, e[4] = n.name, e[5] = S, e[6] = C) : C = e[6];
            let w = C,
                T = i ? _ ?? `unknown` : null,
                E;
            e[7] !== v || e[8] !== w || e[9] !== T ? (E = {
                isLoggedIn: i,
                loggedInStatus: i ? `logged_in` : `logged_out`,
                accountPlanType: T,
                emailDomainType: v,
                ...w
            }, e[7] = v, e[8] = w, e[9] = T, e[10] = E) : E = e[10];
            let D = E,
                O;
            e[11] !== D || e[12] !== b ? (O = (e, t, n) => {
                d.logEventWithStatsig(e, t, {
                    ...D,
                    referer: b ?? null,
                    ...n
                })
            }, e[11] = D, e[12] = b, e[13] = O) : O = e[13];
            let k = O,
                A = b ?? null,
                j;
            e[14] !== v || e[15] !== _ || e[16] !== A ? (j = {
                loggedInStatus: i ? `logged_in` : `logged_out`,
                accountPlanType: _,
                emailDomainType: v,
                referer: A
            }, e[14] = v, e[15] = _, e[16] = A, e[17] = j) : j = e[17];
            let M = j,
                re = (0, ye.useRef)(!1),
                N = v != null,
                P = n.name !== `loading`,
                F, I;
            e[18] !== M || e[19] !== N || e[20] !== P || e[21] !== k ? (F = () => {
                !i || !N || !P || re.current || (k($.impression.segment, $.impression.statsig), R(`create_workspace`, `page_view`, M), re.current = !0)
            }, I = [M, N, P, i, k], e[18] = M, e[19] = N, e[20] = P, e[21] = k, e[22] = F, e[23] = I) : (F = e[22], I = e[23]), (0, ye.useEffect)(F, I);
            let z;
            e[24] === k ? z = e[25] : (z = async e => {
                g(!0);
                let t = e.workspaceName ?? ``,
                    n = e.agreedToDPA ?? !1;
                k($.continue.segment, $.continue.statsig, {
                    workspaceNameLength: t.length,
                    agreedToDpa: n
                }), R(`create_workspace`, `continue_click`, {
                    workspaceNameLength: t.length,
                    agreedToDpa: n
                });
                try {
                    await H({
                        workspace_name: t,
                        agreed_to_dpa: n,
                        plan_type: ee.K12
                    }), k($.result.segment, $.result.statsig, {
                        status: `success`,
                        workspaceNameLength: t.length
                    }), R(`create_workspace`, `continue_success`, {
                        workspaceNameLength: t.length
                    }), await new Promise(_e), c()
                } catch (e) {
                    let r = e,
                        i = r instanceof Error ? {
                            errorName: r.name,
                            errorMessage: r.message
                        } : {
                            errorName: typeof r,
                            errorMessage: String(r)
                        };
                    k($.result.segment, $.result.statsig, {
                        status: `error`,
                        ...i
                    }), g(!1), L(`create_workspace`, `continue_error`, r, {
                        workspaceNameLength: t.length,
                        agreedToDpa: n
                    })
                }
            }, e[24] = k, e[25] = z);
            let V = z,
                U;
            e[26] === k ? U = e[27] : (U = () => {
                k($.cancel.segment, $.cancel.statsig), R(`create_workspace`, `cancel_click`)
            }, e[26] = k, e[27] = U);
            let G = U,
                K;
            e[28] === t ? K = e[29] : (K = t.formatMessage(B.teachersCreateWorkspacePageTitle), e[28] = t, e[29] = K);
            let q;
            e[30] === K ? q = e[31] : (q = (0, be.jsx)(`title`, {
                children: K
            }), e[30] = K, e[31] = q);
            let J;
            e[32] !== h || e[33] !== G || e[34] !== V ? (J = (0, be.jsx)(he, {
                disableContinueButton: h,
                onNext: V,
                onCancel: G
            }), e[32] = h, e[33] = G, e[34] = V, e[35] = J) : J = e[35];
            let Y;
            return e[36] !== q || e[37] !== J ? (Y = (0, be.jsxs)(be.Fragment, {
                children: [q, J]
            }), e[36] = q, e[37] = J, e[38] = Y) : Y = e[38], Y
        }
    })),
    Ce, we, Te, Ee, De = e((() => {
        D(), Ce = M(), Se(), we = S(), Te = `/k12-create-workspace`, Ee = C(function() {
            "use forget";
            let e = (0, Ce.c)(1),
                t;
            return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, we.jsx)(xe, {}), e[0] = t) : t = e[0], t
        })
    }));
export {
    W as a, Y as i, De as n, Ee as r, Te as t
};
//# sourceMappingURL=cff09cfe-n1n65x0zxbcr8p6u.js.map