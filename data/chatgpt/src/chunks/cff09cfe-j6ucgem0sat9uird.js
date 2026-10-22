import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    $ot as r,
    AE as i,
    Ait as a,
    CR as o,
    Int as s,
    J7 as c,
    N4 as l,
    Nst as u,
    P4 as d,
    Q7 as f,
    Rnt as p,
    TR as m,
    bct as h,
    c7 as g,
    eE as _,
    kE as v,
    kit as y,
    l7 as b,
    o0 as x,
    q1 as S
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    At as ee,
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
    GKn as re,
    KKn as N
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    Hu as P,
    Uu as F
} from "./30901919-lgbmg5s09xld40kt.js";
import {
    h_ as I
} from "./8b34dbc2-n194ohawifys3bko.js";
import {
    n as L,
    r as R,
    t as z
} from "./bcd16462-irjyv0kkf8dsldje.js";
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
        f(), H = e => c.safePost(`/accounts/create_workspace_without_subscription`, {
            requestBody: e
        })
    }));

function W() {
    "use forget";
    let e = (0, K.c)(21),
        t;
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = a(), e[0] = t) : t = e[0];
    let n = !t,
        [r, i] = (0, q.useState)(null),
        [o, s] = (0, q.useState)(!1),
        [c, l] = (0, q.useState)(!1),
        u = (0, q.useRef)(!0),
        d;
    e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (d = {
        mutationFn: G,
        onSuccess: e => {
            if (l(!1), e.metadata) {
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
            s(!0)
        },
        onError: () => {
            i(null), l(!0), s(!0)
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
        if (!o) {
            let t;
            e[6] === Symbol.for(`react.memo_cache_sentinel`) ? (t = {
                name: `loading`
            }, e[6] = t) : t = e[6], h = t;
            break bb0
        }
        if (c) {
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
            a = r.retry_count ?? 0,
            s = r.max_retry_attempts ?? J,
            l = r.retry_limit_reached ?? a >= s;
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
            e[13] !== s || e[14] !== a || e[15] !== t || e[16] !== n ? (i = {
                name: `error`,
                canRetry: t,
                retryCount: a,
                maxRetryAttempts: s,
                errorCode: n
            }, e[13] = s, e[14] = a, e[15] = t, e[16] = n, e[17] = i) : i = e[17], h = i;
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
    return c.safePost(`/teachers/refresh_enrollment_status`)
}
var K, q, J, Y = e((() => {
        K = M(), y(), f(), j(), q = t(k()), J = 3
    })),
    X, ie, Z, ae, oe, se, ce, le, ue, de = e((() => {
        X = M(), _(), F(), I(), b(), ie = t(k()), O(), i(), V(), Z = C(), ae = e => {
            "use forget";
            let t = (0, X.c)(10),
                {
                    content: r,
                    onPrevious: i,
                    headerPaddingClassName: a
                } = e,
                o = a ?? `pt-16 [@media(min-width:450px)]:pt-[12vh]`,
                s;
            t[0] === o ? s = t[1] : (s = g(`relative flex min-h-[100dvh] w-screen justify-center overflow-y-auto`, o), t[0] = o, t[1] = s);
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
        }, ce = v.label`font-medium`, v.div`text-red-500 text-sm mb-2`, le = v.input`rounded-full border border-token-border-default bg-token-bg-primary placeholder:text-token-text-tertiary px-5 py-3 focus:border-token-icon-accent focus:ring-token-icon-accent focus:ring-0`, ue = e => {
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
    pe = M(), _(), N(), me = t(k()), O(), D(), V(), de(), Q = C(), he = e => {
        "use forget";
        let t = (0, pe.c)(52),
            {
                disableContinueButton: r,
                onNext: i,
                onCancel: a
            } = e,
            o = ne(),
            s = te(),
            c = B.purchaseStepTitle,
            l = B.purchaseStepSubtitle,
            [u, d] = (0, me.useState)(``),
            [f, p] = (0, me.useState)(!1),
            m;
        t[0] === u ? m = t[1] : (m = u.trim(), t[0] = u, t[1] = m);
        let h = m,
            g = f && h.length > 0 && !r,
            _;
        t[2] !== f || t[3] !== h ? (_ = {
            workspaceName: h,
            agreedToDPA: f
        }, t[2] = f, t[3] = h, t[4] = _) : _ = t[4];
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
        let b = y,
            x;
        t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (x = (0, Q.jsx)(`a`, {
            href: `https://openai.com/policies/student-data-privacy`,
            className: `underline`,
            target: `_blank`,
            rel: `noreferrer`,
            children: (0, Q.jsx)(E, {
                ...B.studentDataPrivacyAgreementLinkText
            })
        }), t[6] = x) : x = t[6];
        let S = x,
            ee;
        t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (ee = [{
            id: `education-purpose`,
            message: B.dpaSummaryEducationPurpose
        }, {
            id: `no-training`,
            message: B.dpaSummaryNoTraining
        }], t[7] = ee) : ee = t[7];
        let C = ee,
            w;
        t[8] === o ? w = t[9] : (w = o.formatMessage(c), t[8] = o, t[9] = w);
        let T;
        t[10] === o ? T = t[11] : (T = l && o.formatMessage(l), t[10] = o, t[11] = T);
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
        t[27] === Symbol.for(`react.memo_cache_sentinel`) ? (F = e => p(e.target.checked), t[27] = F) : F = t[27];
        let I;
        t[28] === Symbol.for(`react.memo_cache_sentinel`) ? (I = (0, Q.jsx)(E, {
            ...B.teacherAccessAgreementLabel,
            values: {
                teacherAccessTermsLink: b,
                studentDataPrivacyAgreementLink: S
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
        t[34] !== i || t[35] !== v ? (V = () => i({
            ...v
        }), t[34] = i, t[35] = v, t[36] = V) : V = t[36];
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
        t[43] === Symbol.for(`react.memo_cache_sentinel`) ? (W = (0, Q.jsx)(E, {
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
        ve = M(), h(), z(), S(), o(), V(), U(), Y(), y(), p(), d(), ye = t(k()), O(), D(), ge(), be = C(), $ = {
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
                i;
            e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = a(), e[0] = i) : i = e[0];
            let o = i,
                c;
            e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (c = r(), e[1] = c) : c = e[1];
            let d = c,
                f = x(),
                p = m(),
                h = ee(),
                [g, _] = (0, ye.useState)(!1),
                v = f?.planType ?? d?.account?.planType ?? null,
                y = p?.email_domain_type ?? null,
                b;
            e[2] === h.search ? b = e[3] : (b = new URLSearchParams(h.search).get(`referer`), e[2] = h.search, e[3] = b);
            let S = b,
                C = `verificationId` in n ? n.verificationId ?? null : null,
                w;
            e[4] !== n.name || e[5] !== C ? (w = {
                enrollmentState: n.name,
                enrollmentVerificationId: C
            }, e[4] = n.name, e[5] = C, e[6] = w) : w = e[6];
            let T = w,
                E = o ? v ?? `unknown` : null,
                te;
            e[7] !== y || e[8] !== T || e[9] !== E ? (te = {
                isLoggedIn: o,
                loggedInStatus: o ? `logged_in` : `logged_out`,
                accountPlanType: E,
                emailDomainType: y,
                ...T
            }, e[7] = y, e[8] = T, e[9] = E, e[10] = te) : te = e[10];
            let D = te,
                O;
            e[11] !== D || e[12] !== S ? (O = (e, t, n) => {
                s.logEventWithStatsig(e, t, {
                    ...D,
                    referer: S ?? null,
                    ...n
                })
            }, e[11] = D, e[12] = S, e[13] = O) : O = e[13];
            let k = O,
                A = S ?? null,
                j;
            e[14] !== y || e[15] !== v || e[16] !== A ? (j = {
                loggedInStatus: o ? `logged_in` : `logged_out`,
                accountPlanType: v,
                emailDomainType: y,
                referer: A
            }, e[14] = y, e[15] = v, e[16] = A, e[17] = j) : j = e[17];
            let M = j,
                re = (0, ye.useRef)(!1),
                N = y != null,
                P = n.name !== `loading`,
                F, I;
            e[18] !== M || e[19] !== N || e[20] !== P || e[21] !== k ? (F = () => {
                !o || !N || !P || re.current || (k($.impression.segment, $.impression.statsig), R(`create_workspace`, `page_view`, M), re.current = !0)
            }, I = [M, N, P, o, k], e[18] = M, e[19] = N, e[20] = P, e[21] = k, e[22] = F, e[23] = I) : (F = e[22], I = e[23]), (0, ye.useEffect)(F, I);
            let z;
            e[24] === k ? z = e[25] : (z = async e => {
                _(!0);
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
                        plan_type: u.K12
                    }), k($.result.segment, $.result.statsig, {
                        status: `success`,
                        workspaceNameLength: t.length
                    }), R(`create_workspace`, `continue_success`, {
                        workspaceNameLength: t.length
                    }), await new Promise(_e), l()
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
                    }), _(!1), L(`create_workspace`, `continue_error`, r, {
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
            e[32] !== g || e[33] !== G || e[34] !== V ? (J = (0, be.jsx)(he, {
                disableContinueButton: g,
                onNext: V,
                onCancel: G
            }), e[32] = g, e[33] = G, e[34] = V, e[35] = J) : J = e[35];
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
//# sourceMappingURL=cff09cfe-j6ucgem0sat9uird.js.map