import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    CE as n,
    J5 as r,
    JT as i,
    L1 as a,
    P7 as o,
    Pot as s,
    R7 as c,
    S4 as l,
    X1 as u,
    Y5 as d,
    _R as f,
    _nt as p,
    dit as m,
    mst as h,
    qT as g,
    tct as _,
    uit as v,
    wE as y,
    x4 as ee,
    yR as b,
    ynt as x
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    At as S,
    Bn as C,
    Ht as w,
    Ln as T,
    Nn as E,
    Nt as te,
    Q as D,
    Rn as O,
    Vn as k,
    p as A,
    s as j,
    wn as M,
    zn as ne
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    oKn as re,
    sKn as N
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    Hu as P,
    Uu as F
} from "./30901919-7dzdc1ou0jtwkwpt.js";
import {
    p_ as I
} from "./8b34dbc2-k1zgxrtsww83602u.js";
import {
    n as L,
    r as R,
    t as z
} from "./bcd16462-ni7yl3ze9zccozl4.js";
var B, V = e((() => {
        O(), B = T({
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
        c(), H = e => o.safePost(`/accounts/create_workspace_without_subscription`, {
            requestBody: e
        })
    }));

function W() {
    "use forget";
    let e = (0, K.c)(21),
        t;
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = m(), e[0] = t) : t = e[0];
    let n = !t,
        [r, i] = (0, q.useState)(null),
        [a, o] = (0, q.useState)(!1),
        [s, c] = (0, q.useState)(!1),
        l = (0, q.useRef)(!0),
        u;
    e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (u = {
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
    }, e[1] = u) : u = e[1];
    let d = A(u),
        f, p;
    e[2] === d ? (f = e[3], p = e[4]) : (f = () => {
        !n && l.current && (l.current = !1, d.mutate())
    }, p = [n, d], e[2] = d, e[3] = f, e[4] = p), (0, q.useEffect)(f, p);
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
    return o.safePost(`/teachers/refresh_enrollment_status`)
}
var K, q, J, Y = e((() => {
        K = M(), v(), c(), j(), q = t(k()), J = 3
    })),
    X, ie, Z, ae, oe, se, ce, le, ue, de = e((() => {
        X = M(), i(), F(), I(), d(), ie = t(k()), O(), y(), V(), Z = C(), ae = e => {
            "use forget";
            let t = (0, X.c)(10),
                {
                    content: n,
                    onPrevious: i,
                    headerPaddingClassName: a
                } = e,
                o = a ?? `pt-16 [@media(min-width:450px)]:pt-[12vh]`,
                s;
            t[0] === o ? s = t[1] : (s = r(`relative flex min-h-[100dvh] w-screen justify-center overflow-y-auto`, o), t[0] = o, t[1] = s);
            let c;
            t[2] === i ? c = t[3] : (c = i && (0, Z.jsx)(`div`, {
                className: `absolute start-4 top-4`,
                children: (0, Z.jsx)(g, {
                    onClick: i,
                    icon: P,
                    color: `ghost`
                })
            }), t[2] = i, t[3] = c);
            let l;
            t[4] === n ? l = t[5] : (l = (0, Z.jsx)(`div`, {
                className: `flex max-w-full flex-none items-center justify-center [@media(min-width:450px)]:w-[520px]`,
                children: n
            }), t[4] = n, t[5] = l);
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
                    onClick: n,
                    disabled: r,
                    labelMessage: i
                } = e,
                [a, o] = (0, ie.useState)(!1),
                s = ne(),
                c;
            t[0] === n ? c = t[1] : (c = async () => {
                o(!0), await n(), o(!1)
            }, t[0] = n, t[1] = c);
            let l;
            t[2] !== s || t[3] !== i ? (l = s.formatMessage(i ?? B.continueButton), t[2] = s, t[3] = i, t[4] = l) : l = t[4];
            let u;
            return t[5] !== r || t[6] !== a || t[7] !== c || t[8] !== l ? (u = (0, Z.jsx)(g, {
                size: `large`,
                loading: a,
                disabled: r,
                onClick: c,
                children: l
            }), t[5] = r, t[6] = a, t[7] = c, t[8] = l, t[9] = u) : u = t[9], u
        }, ce = n.label`font-medium`, n.div`text-red-500 text-sm mb-2`, le = n.input`rounded-full border border-token-border-default bg-token-bg-primary placeholder:text-token-text-tertiary px-5 py-3 focus:border-token-icon-accent focus:ring-token-icon-accent focus:ring-0`, ue = e => {
            "use forget";
            let t = (0, X.c)(5),
                {
                    children: n,
                    required: r
                } = e,
                i;
            t[0] === r ? i = t[1] : (i = !r && (0, Z.jsxs)(`span`, {
                className: `text-token-text-secondary text-xs`,
                children: [`\xA0`, (0, Z.jsx)(E, {
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
        children: (0, Q.jsx)(E, {
            ...e.message
        })
    }, e.id)
}
var pe, me, Q, he, ge = e((() => {
    pe = M(), i(), N(), me = t(k()), O(), D(), V(), de(), Q = C(), he = e => {
        "use forget";
        let t = (0, pe.c)(52),
            {
                disableContinueButton: n,
                onNext: r,
                onCancel: i
            } = e,
            a = ne(),
            o = te(),
            s = B.purchaseStepTitle,
            c = B.purchaseStepSubtitle,
            [l, u] = (0, me.useState)(``),
            [d, f] = (0, me.useState)(!1),
            p;
        t[0] === l ? p = t[1] : (p = l.trim(), t[0] = l, t[1] = p);
        let m = p,
            h = d && m.length > 0 && !n,
            _;
        t[2] !== d || t[3] !== m ? (_ = {
            workspaceName: m,
            agreedToDPA: d
        }, t[2] = d, t[3] = m, t[4] = _) : _ = t[4];
        let v = _,
            y;
        t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (y = (0, Q.jsx)(`a`, {
            href: `https://openai.com/policies/education-terms`,
            className: `underline`,
            target: `_blank`,
            rel: `noreferrer`,
            children: (0, Q.jsx)(E, {
                ...B.teacherAccessTermsLinkText
            })
        }), t[5] = y) : y = t[5];
        let ee = y,
            b;
        t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (b = (0, Q.jsx)(`a`, {
            href: `https://openai.com/policies/student-data-privacy`,
            className: `underline`,
            target: `_blank`,
            rel: `noreferrer`,
            children: (0, Q.jsx)(E, {
                ...B.studentDataPrivacyAgreementLinkText
            })
        }), t[6] = b) : b = t[6];
        let x = b,
            S;
        t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (S = [{
            id: `education-purpose`,
            message: B.dpaSummaryEducationPurpose
        }, {
            id: `no-training`,
            message: B.dpaSummaryNoTraining
        }], t[7] = S) : S = t[7];
        let C = S,
            w;
        t[8] === a ? w = t[9] : (w = a.formatMessage(s), t[8] = a, t[9] = w);
        let T;
        t[10] === a ? T = t[11] : (T = c && a.formatMessage(c), t[10] = a, t[11] = T);
        let D;
        t[12] === a ? D = t[13] : (D = a.formatMessage(B.workspaceNameLabel), t[12] = a, t[13] = D);
        let O;
        t[14] === D ? O = t[15] : (O = (0, Q.jsx)(ue, {
            required: !0,
            children: D
        }), t[14] = D, t[15] = O);
        let k;
        t[16] === Symbol.for(`react.memo_cache_sentinel`) ? (k = e => u(e.target.value), t[16] = k) : k = t[16];
        let A;
        t[17] === a ? A = t[18] : (A = a.formatMessage(B.workspaceNamePlaceholder), t[17] = a, t[18] = A);
        let j;
        t[19] !== A || t[20] !== l ? (j = (0, Q.jsx)(le, {
            id: `workspace-name`,
            name: `workspace-name`,
            value: l,
            onChange: k,
            placeholder: A
        }), t[19] = A, t[20] = l, t[21] = j) : j = t[21];
        let M;
        t[22] !== j || t[23] !== O ? (M = (0, Q.jsxs)(`div`, {
            className: `flex flex-col gap-1.5`,
            children: [O, j]
        }), t[22] = j, t[23] = O, t[24] = M) : M = t[24];
        let N;
        t[25] === Symbol.for(`react.memo_cache_sentinel`) ? (N = (0, Q.jsx)(`p`, {
            className: `text-token-text-secondary`,
            children: (0, Q.jsx)(E, {
                ...B.dpaSummaryIntro
            })
        }), t[25] = N) : N = t[25];
        let P;
        t[26] === Symbol.for(`react.memo_cache_sentinel`) ? (P = (0, Q.jsxs)(`div`, {
            className: `border-token-border-strong bg-token-main-surface-secondary rounded-2xl border px-4 py-4 text-sm`,
            children: [N, (0, Q.jsx)(`ul`, {
                className: `text-token-text-primary mt-3 list-disc space-y-2 ps-4`,
                children: C.map(fe)
            })]
        }), t[26] = P) : P = t[26];
        let F;
        t[27] === Symbol.for(`react.memo_cache_sentinel`) ? (F = e => f(e.target.checked), t[27] = F) : F = t[27];
        let I;
        t[28] === Symbol.for(`react.memo_cache_sentinel`) ? (I = (0, Q.jsx)(E, {
            ...B.teacherAccessAgreementLabel,
            values: {
                teacherAccessTermsLink: ee,
                studentDataPrivacyAgreementLink: x
            }
        }), t[28] = I) : I = t[28];
        let L;
        t[29] === d ? L = t[30] : (L = (0, Q.jsx)(`div`, {
            className: `flex flex-col gap-1.5`,
            children: (0, Q.jsx)(re, {
                id: `dpa-agree`,
                checked: d,
                onChange: F,
                containerClassName: `flex items-center gap-2`,
                label: I
            })
        }), t[29] = d, t[30] = L);
        let R;
        t[31] !== M || t[32] !== L ? (R = (0, Q.jsxs)(`div`, {
            className: `flex flex-col gap-5`,
            children: [M, P, L]
        }), t[31] = M, t[32] = L, t[33] = R) : R = t[33];
        let z = !h,
            V;
        t[34] !== r || t[35] !== v ? (V = () => r({
            ...v
        }), t[34] = r, t[35] = v, t[36] = V) : V = t[36];
        let H;
        t[37] !== z || t[38] !== V ? (H = (0, Q.jsx)(se, {
            disabled: z,
            labelMessage: B.agreeAndContinueButton,
            onClick: V
        }), t[37] = z, t[38] = V, t[39] = H) : H = t[39];
        let U;
        t[40] !== o || t[41] !== i ? (U = () => {
            i?.(), o(`/`)
        }, t[40] = o, t[41] = i, t[42] = U) : U = t[42];
        let W;
        t[43] === Symbol.for(`react.memo_cache_sentinel`) ? (W = (0, Q.jsx)(E, {
            id: `TjfExQ`,
            defaultMessage: `Cancel`
        }), t[43] = W) : W = t[43];
        let G;
        t[44] === U ? G = t[45] : (G = (0, Q.jsx)(g, {
            color: `ghost`,
            onClick: U,
            children: W
        }), t[44] = U, t[45] = G);
        let K;
        return t[46] !== R || t[47] !== H || t[48] !== G || t[49] !== w || t[50] !== T ? (K = (0, Q.jsx)(ae, {
            content: (0, Q.jsxs)(oe, {
                title: w,
                subTitle: T,
                children: [R, H, G]
            })
        }), t[46] = R, t[47] = H, t[48] = G, t[49] = w, t[50] = T, t[51] = K) : K = t[51], K
    }
}));

function _e(e) {
    return setTimeout(e, 3e3)
}
var ve, ye, be, $, xe, Se = e((() => {
        ve = M(), _(), z(), a(), f(), V(), U(), Y(), v(), x(), l(), ye = t(k()), O(), D(), ge(), be = C(), $ = {
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
            e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = m(), e[0] = r) : r = e[0];
            let i = r,
                a;
            e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (a = s(), e[1] = a) : a = e[1];
            let o = a,
                c = u(),
                l = b(),
                d = S(),
                [f, g] = (0, ye.useState)(!1),
                _ = c?.planType ?? o?.account?.planType ?? null,
                v = l?.email_domain_type ?? null,
                y;
            e[2] === d.search ? y = e[3] : (y = new URLSearchParams(d.search).get(`referer`), e[2] = d.search, e[3] = y);
            let x = y,
                C = `verificationId` in n ? n.verificationId ?? null : null,
                w;
            e[4] !== n.name || e[5] !== C ? (w = {
                enrollmentState: n.name,
                enrollmentVerificationId: C
            }, e[4] = n.name, e[5] = C, e[6] = w) : w = e[6];
            let T = w,
                E = i ? _ ?? `unknown` : null,
                te;
            e[7] !== v || e[8] !== T || e[9] !== E ? (te = {
                isLoggedIn: i,
                loggedInStatus: i ? `logged_in` : `logged_out`,
                accountPlanType: E,
                emailDomainType: v,
                ...T
            }, e[7] = v, e[8] = T, e[9] = E, e[10] = te) : te = e[10];
            let D = te,
                O;
            e[11] !== D || e[12] !== x ? (O = (e, t, n) => {
                p.logEventWithStatsig(e, t, {
                    ...D,
                    referer: x ?? null,
                    ...n
                })
            }, e[11] = D, e[12] = x, e[13] = O) : O = e[13];
            let k = O,
                A = x ?? null,
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
                        plan_type: h.K12
                    }), k($.result.segment, $.result.statsig, {
                        status: `success`,
                        workspaceNameLength: t.length
                    }), R(`create_workspace`, `continue_success`, {
                        workspaceNameLength: t.length
                    }), await new Promise(_e), ee()
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
            e[32] !== f || e[33] !== G || e[34] !== V ? (J = (0, be.jsx)(he, {
                disableContinueButton: f,
                onNext: V,
                onCancel: G
            }), e[32] = f, e[33] = G, e[34] = V, e[35] = J) : J = e[35];
            let Y;
            return e[36] !== q || e[37] !== J ? (Y = (0, be.jsxs)(be.Fragment, {
                children: [q, J]
            }), e[36] = q, e[37] = J, e[38] = Y) : Y = e[38], Y
        }
    })),
    Ce, we, Te, Ee, De = e((() => {
        D(), Ce = M(), Se(), we = C(), Te = `/k12-create-workspace`, Ee = w(function() {
            "use forget";
            let e = (0, Ce.c)(1),
                t;
            return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, we.jsx)(xe, {}), e[0] = t) : t = e[0], t
        })
    }));
export {
    W as a, Y as i, De as n, Ee as r, Te as t
};
//# sourceMappingURL=cff09cfe-jrublon36c2hmrwt.js.map