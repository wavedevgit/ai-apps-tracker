import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    C4 as n,
    F7 as r,
    JT as i,
    R1 as a,
    S4 as o,
    Snt as s,
    TE as c,
    X5 as l,
    Y5 as u,
    YT as d,
    Z1 as f,
    bR as p,
    git as m,
    hit as h,
    oct as ee,
    vR as g,
    wE as _,
    wnt as v,
    yst as te,
    z7 as y,
    zot as ne
} from "./4813494d-lxa3wniynbx9ka2a.js";
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
    dKn as M,
    uKn as N
} from "./conversation-small-kzsalymynzuddxee.js";
import {
    Hu as P,
    Uu as F
} from "./30901919-i8ip8r0znvgcym38.js";
import {
    p_ as I
} from "./8b34dbc2-ba6wt3zxvh7jce7p.js";
import {
    n as L,
    r as R,
    t as z
} from "./bcd16462-8g8oiu1q1u5l9e7t.js";
var B, V = e((() => {
        D(), B = C({
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
        y(), H = e => r.safePost(`/accounts/create_workspace_without_subscription`, {
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
    let d = k(u),
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
    return r.safePost(`/teachers/refresh_enrollment_status`)
}
var K, q, J, Y = e((() => {
        K = j(), h(), y(), A(), q = t(O()), J = 3
    })),
    X, ie, Z, ae, oe, se, ce, le, ue, de = e((() => {
        X = j(), d(), F(), I(), l(), ie = t(O()), D(), c(), V(), Z = x(), ae = e => {
            "use forget";
            let t = (0, X.c)(10),
                {
                    content: n,
                    onPrevious: r,
                    headerPaddingClassName: a
                } = e,
                o = a ?? `pt-16 [@media(min-width:450px)]:pt-[12vh]`,
                s;
            t[0] === o ? s = t[1] : (s = u(`relative flex min-h-[100dvh] w-screen justify-center overflow-y-auto`, o), t[0] = o, t[1] = s);
            let c;
            t[2] === r ? c = t[3] : (c = r && (0, Z.jsx)(`div`, {
                className: `absolute start-4 top-4`,
                children: (0, Z.jsx)(i, {
                    onClick: r,
                    icon: P,
                    color: `ghost`
                })
            }), t[2] = r, t[3] = c);
            let l;
            t[4] === n ? l = t[5] : (l = (0, Z.jsx)(`div`, {
                className: `flex max-w-full flex-none items-center justify-center [@media(min-width:450px)]:w-[520px]`,
                children: n
            }), t[4] = n, t[5] = l);
            let d;
            return t[6] !== s || t[7] !== c || t[8] !== l ? (d = (0, Z.jsxs)(`div`, {
                className: s,
                children: [c, l]
            }), t[6] = s, t[7] = c, t[8] = l, t[9] = d) : d = t[9], d
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
                    labelMessage: a
                } = e,
                [o, s] = (0, ie.useState)(!1),
                c = re(),
                l;
            t[0] === n ? l = t[1] : (l = async () => {
                s(!0), await n(), s(!1)
            }, t[0] = n, t[1] = l);
            let u;
            t[2] !== c || t[3] !== a ? (u = c.formatMessage(a ?? B.continueButton), t[2] = c, t[3] = a, t[4] = u) : u = t[4];
            let d;
            return t[5] !== r || t[6] !== o || t[7] !== l || t[8] !== u ? (d = (0, Z.jsx)(i, {
                size: `large`,
                loading: o,
                disabled: r,
                onClick: l,
                children: u
            }), t[5] = r, t[6] = o, t[7] = l, t[8] = u, t[9] = d) : d = t[9], d
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
                children: [`\xA0`, (0, Z.jsx)(w, {
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
        children: (0, Q.jsx)(w, {
            ...e.message
        })
    }, e.id)
}
var pe, me, Q, he, ge = e((() => {
    pe = j(), d(), M(), me = t(O()), D(), E(), V(), de(), Q = x(), he = e => {
        "use forget";
        let t = (0, pe.c)(52),
            {
                disableContinueButton: n,
                onNext: r,
                onCancel: a
            } = e,
            o = re(),
            s = T(),
            c = B.purchaseStepTitle,
            l = B.purchaseStepSubtitle,
            [u, d] = (0, me.useState)(``),
            [f, p] = (0, me.useState)(!1),
            m;
        t[0] === u ? m = t[1] : (m = u.trim(), t[0] = u, t[1] = m);
        let h = m,
            ee = f && h.length > 0 && !n,
            g;
        t[2] !== f || t[3] !== h ? (g = {
            workspaceName: h,
            agreedToDPA: f
        }, t[2] = f, t[3] = h, t[4] = g) : g = t[4];
        let _ = g,
            v;
        t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (v = (0, Q.jsx)(`a`, {
            href: `https://openai.com/policies/education-terms`,
            className: `underline`,
            target: `_blank`,
            rel: `noreferrer`,
            children: (0, Q.jsx)(w, {
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
            children: (0, Q.jsx)(w, {
                ...B.studentDataPrivacyAgreementLinkText
            })
        }), t[6] = y) : y = t[6];
        let ne = y,
            b;
        t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (b = [{
            id: `education-purpose`,
            message: B.dpaSummaryEducationPurpose
        }, {
            id: `no-training`,
            message: B.dpaSummaryNoTraining
        }], t[7] = b) : b = t[7];
        let x = b,
            S;
        t[8] === o ? S = t[9] : (S = o.formatMessage(c), t[8] = o, t[9] = S);
        let C;
        t[10] === o ? C = t[11] : (C = l && o.formatMessage(l), t[10] = o, t[11] = C);
        let E;
        t[12] === o ? E = t[13] : (E = o.formatMessage(B.workspaceNameLabel), t[12] = o, t[13] = E);
        let D;
        t[14] === E ? D = t[15] : (D = (0, Q.jsx)(ue, {
            required: !0,
            children: E
        }), t[14] = E, t[15] = D);
        let O;
        t[16] === Symbol.for(`react.memo_cache_sentinel`) ? (O = e => d(e.target.value), t[16] = O) : O = t[16];
        let k;
        t[17] === o ? k = t[18] : (k = o.formatMessage(B.workspaceNamePlaceholder), t[17] = o, t[18] = k);
        let A;
        t[19] !== k || t[20] !== u ? (A = (0, Q.jsx)(le, {
            id: `workspace-name`,
            name: `workspace-name`,
            value: u,
            onChange: O,
            placeholder: k
        }), t[19] = k, t[20] = u, t[21] = A) : A = t[21];
        let j;
        t[22] !== A || t[23] !== D ? (j = (0, Q.jsxs)(`div`, {
            className: `flex flex-col gap-1.5`,
            children: [D, A]
        }), t[22] = A, t[23] = D, t[24] = j) : j = t[24];
        let M;
        t[25] === Symbol.for(`react.memo_cache_sentinel`) ? (M = (0, Q.jsx)(`p`, {
            className: `text-token-text-secondary`,
            children: (0, Q.jsx)(w, {
                ...B.dpaSummaryIntro
            })
        }), t[25] = M) : M = t[25];
        let P;
        t[26] === Symbol.for(`react.memo_cache_sentinel`) ? (P = (0, Q.jsxs)(`div`, {
            className: `border-token-border-strong bg-token-main-surface-secondary rounded-2xl border px-4 py-4 text-sm`,
            children: [M, (0, Q.jsx)(`ul`, {
                className: `text-token-text-primary mt-3 list-disc space-y-2 ps-4`,
                children: x.map(fe)
            })]
        }), t[26] = P) : P = t[26];
        let F;
        t[27] === Symbol.for(`react.memo_cache_sentinel`) ? (F = e => p(e.target.checked), t[27] = F) : F = t[27];
        let I;
        t[28] === Symbol.for(`react.memo_cache_sentinel`) ? (I = (0, Q.jsx)(w, {
            ...B.teacherAccessAgreementLabel,
            values: {
                teacherAccessTermsLink: te,
                studentDataPrivacyAgreementLink: ne
            }
        }), t[28] = I) : I = t[28];
        let L;
        t[29] === f ? L = t[30] : (L = (0, Q.jsx)(`div`, {
            className: `flex flex-col gap-1.5`,
            children: (0, Q.jsx)(N, {
                id: `dpa-agree`,
                checked: f,
                onChange: F,
                containerClassName: `flex items-center gap-2`,
                label: I
            })
        }), t[29] = f, t[30] = L);
        let R;
        t[31] !== j || t[32] !== L ? (R = (0, Q.jsxs)(`div`, {
            className: `flex flex-col gap-5`,
            children: [j, P, L]
        }), t[31] = j, t[32] = L, t[33] = R) : R = t[33];
        let z = !ee,
            V;
        t[34] !== r || t[35] !== _ ? (V = () => r({
            ..._
        }), t[34] = r, t[35] = _, t[36] = V) : V = t[36];
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
        t[43] === Symbol.for(`react.memo_cache_sentinel`) ? (W = (0, Q.jsx)(w, {
            id: `TjfExQ`,
            defaultMessage: `Cancel`
        }), t[43] = W) : W = t[43];
        let G;
        t[44] === U ? G = t[45] : (G = (0, Q.jsx)(i, {
            color: `ghost`,
            onClick: U,
            children: W
        }), t[44] = U, t[45] = G);
        let K;
        return t[46] !== R || t[47] !== H || t[48] !== G || t[49] !== S || t[50] !== C ? (K = (0, Q.jsx)(ae, {
            content: (0, Q.jsxs)(oe, {
                title: S,
                subTitle: C,
                children: [R, H, G]
            })
        }), t[46] = R, t[47] = H, t[48] = G, t[49] = S, t[50] = C, t[51] = K) : K = t[51], K
    }
}));

function _e(e) {
    return setTimeout(e, 3e3)
}
var ve, ye, be, $, xe, Se = e((() => {
        ve = j(), ee(), z(), a(), g(), V(), U(), Y(), h(), v(), n(), ye = t(O()), D(), E(), ge(), be = x(), $ = {
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
                t = re(),
                n = W(),
                r;
            e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = m(), e[0] = r) : r = e[0];
            let i = r,
                a;
            e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (a = ne(), e[1] = a) : a = e[1];
            let c = a,
                l = f(),
                u = p(),
                d = b(),
                [h, ee] = (0, ye.useState)(!1),
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
                w = i ? g ?? `unknown` : null,
                T;
            e[7] !== _ || e[8] !== C || e[9] !== w ? (T = {
                isLoggedIn: i,
                loggedInStatus: i ? `logged_in` : `logged_out`,
                accountPlanType: w,
                emailDomainType: _,
                ...C
            }, e[7] = _, e[8] = C, e[9] = w, e[10] = T) : T = e[10];
            let E = T,
                D;
            e[11] !== E || e[12] !== y ? (D = (e, t, n) => {
                s.logEventWithStatsig(e, t, {
                    ...E,
                    referer: y ?? null,
                    ...n
                })
            }, e[11] = E, e[12] = y, e[13] = D) : D = e[13];
            let O = D,
                k = y ?? null,
                A;
            e[14] !== _ || e[15] !== g || e[16] !== k ? (A = {
                loggedInStatus: i ? `logged_in` : `logged_out`,
                accountPlanType: g,
                emailDomainType: _,
                referer: k
            }, e[14] = _, e[15] = g, e[16] = k, e[17] = A) : A = e[17];
            let j = A,
                M = (0, ye.useRef)(!1),
                N = _ != null,
                P = n.name !== `loading`,
                F, I;
            e[18] !== j || e[19] !== N || e[20] !== P || e[21] !== O ? (F = () => {
                !i || !N || !P || M.current || (O($.impression.segment, $.impression.statsig), R(`create_workspace`, `page_view`, j), M.current = !0)
            }, I = [j, N, P, i, O], e[18] = j, e[19] = N, e[20] = P, e[21] = O, e[22] = F, e[23] = I) : (F = e[22], I = e[23]), (0, ye.useEffect)(F, I);
            let z;
            e[24] === O ? z = e[25] : (z = async e => {
                ee(!0);
                let t = e.workspaceName ?? ``,
                    n = e.agreedToDPA ?? !1;
                O($.continue.segment, $.continue.statsig, {
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
                        plan_type: te.K12
                    }), O($.result.segment, $.result.statsig, {
                        status: `success`,
                        workspaceNameLength: t.length
                    }), R(`create_workspace`, `continue_success`, {
                        workspaceNameLength: t.length
                    }), await new Promise(_e), o()
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
                    }), ee(!1), L(`create_workspace`, `continue_error`, r, {
                        workspaceNameLength: t.length,
                        agreedToDpa: n
                    })
                }
            }, e[24] = O, e[25] = z);
            let V = z,
                U;
            e[26] === O ? U = e[27] : (U = () => {
                O($.cancel.segment, $.cancel.statsig), R(`create_workspace`, `cancel_click`)
            }, e[26] = O, e[27] = U);
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
        E(), Ce = j(), Se(), we = x(), Te = `/k12-create-workspace`, Ee = S(function() {
            "use forget";
            let e = (0, Ce.c)(1),
                t;
            return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, we.jsx)(xe, {}), e[0] = t) : t = e[0], t
        })
    }));
export {
    W as a, Y as i, De as n, Ee as r, Te as t
};
//# sourceMappingURL=cff09cfe-ftroybw9881ode5g.js.map