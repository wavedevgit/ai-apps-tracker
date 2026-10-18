import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as n,
    Btt as r,
    C1 as i,
    Htt as a,
    J2 as o,
    Lot as s,
    Nrt as c,
    Prt as l,
    QL as u,
    Y2 as d,
    a7 as f,
    aE as p,
    b5 as m,
    eR as h,
    kT as g,
    l7 as _,
    oE as v,
    rot as y,
    u1 as b,
    wst as x,
    y5 as S
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as C,
    Bn as w,
    Ln as T,
    Nn as E,
    Pt as ee,
    Rn as D,
    Ut as O,
    Vn as k,
    jt as A,
    p as j,
    s as M,
    wn as N,
    zn as te
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    QGn as P,
    ZGn as ne
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Hu as F,
    Uu as I
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    f_ as L
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    n as R,
    r as z,
    t as B
} from "./bcd16462-g7fcj74bvxu3maim.js";
var V, H = e((() => {
        D(), V = T({
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
    U, W = e((() => {
        _(), U = e => f.safePost(`/accounts/create_workspace_without_subscription`, {
            requestBody: e
        })
    }));

function G() {
    "use forget";
    let e = (0, q.c)(21),
        t;
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = l(), e[0] = t) : t = e[0];
    let n = !t,
        [r, i] = (0, J.useState)(null),
        [a, o] = (0, J.useState)(!1),
        [s, c] = (0, J.useState)(!1),
        u = (0, J.useRef)(!0),
        d;
    e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (d = {
        mutationFn: K,
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
    let f = j(d),
        p, m;
    e[2] === f ? (p = e[3], m = e[4]) : (p = () => {
        !n && u.current && (u.current = !1, f.mutate())
    }, m = [n, f], e[2] = f, e[3] = p, e[4] = m), (0, J.useEffect)(p, m);
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
            c = r.max_retry_attempts ?? Y,
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

function K() {
    return f.safePost(`/teachers/refresh_enrollment_status`)
}
var q, J, Y, X = e((() => {
        q = N(), c(), _(), M(), J = t(k()), Y = 3
    })),
    re, ie, Z, ae, oe, se, ce, le, ue, de = e((() => {
        re = N(), n(), I(), L(), m(), ie = t(k()), D(), v(), H(), Z = w(), ae = e => {
            "use forget";
            let t = (0, re.c)(10),
                {
                    content: n,
                    onPrevious: r,
                    headerPaddingClassName: i
                } = e,
                a = i ?? `pt-16 [@media(min-width:450px)]:pt-[12vh]`,
                o;
            t[0] === a ? o = t[1] : (o = S(`relative flex min-h-[100dvh] w-screen justify-center overflow-y-auto`, a), t[0] = a, t[1] = o);
            let s;
            t[2] === r ? s = t[3] : (s = r && (0, Z.jsx)(`div`, {
                className: `absolute start-4 top-4`,
                children: (0, Z.jsx)(g, {
                    onClick: r,
                    icon: F,
                    color: `ghost`
                })
            }), t[2] = r, t[3] = s);
            let c;
            t[4] === n ? c = t[5] : (c = (0, Z.jsx)(`div`, {
                className: `flex max-w-full flex-none items-center justify-center [@media(min-width:450px)]:w-[520px]`,
                children: n
            }), t[4] = n, t[5] = c);
            let l;
            return t[6] !== o || t[7] !== s || t[8] !== c ? (l = (0, Z.jsxs)(`div`, {
                className: o,
                children: [s, c]
            }), t[6] = o, t[7] = s, t[8] = c, t[9] = l) : l = t[9], l
        }, oe = e => {
            "use forget";
            let t = (0, re.c)(10),
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
            let t = (0, re.c)(10),
                {
                    onClick: n,
                    disabled: r,
                    labelMessage: i
                } = e,
                [a, o] = (0, ie.useState)(!1),
                s = te(),
                c;
            t[0] === n ? c = t[1] : (c = async () => {
                o(!0), await n(), o(!1)
            }, t[0] = n, t[1] = c);
            let l;
            t[2] !== s || t[3] !== i ? (l = s.formatMessage(i ?? V.continueButton), t[2] = s, t[3] = i, t[4] = l) : l = t[4];
            let u;
            return t[5] !== r || t[6] !== a || t[7] !== c || t[8] !== l ? (u = (0, Z.jsx)(g, {
                size: `large`,
                loading: a,
                disabled: r,
                onClick: c,
                children: l
            }), t[5] = r, t[6] = a, t[7] = c, t[8] = l, t[9] = u) : u = t[9], u
        }, ce = p.label`font-medium`, p.div`text-red-500 text-sm mb-2`, le = p.input`rounded-full border border-token-border-default bg-token-bg-primary placeholder:text-token-text-tertiary px-5 py-3 focus:border-token-icon-accent focus:ring-token-icon-accent focus:ring-0`, ue = e => {
            "use forget";
            let t = (0, re.c)(5),
                {
                    children: n,
                    required: r
                } = e,
                i;
            t[0] === r ? i = t[1] : (i = !r && (0, Z.jsxs)(`span`, {
                className: `text-token-text-secondary text-xs`,
                children: [`\xA0`, (0, Z.jsx)(E, {
                    ...V.optionalField
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
    pe = N(), n(), P(), me = t(k()), D(), C(), H(), de(), Q = w(), he = e => {
        "use forget";
        let t = (0, pe.c)(52),
            {
                disableContinueButton: n,
                onNext: r,
                onCancel: i
            } = e,
            a = te(),
            o = ee(),
            s = V.purchaseStepTitle,
            c = V.purchaseStepSubtitle,
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
                ...V.teacherAccessTermsLinkText
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
                ...V.studentDataPrivacyAgreementLinkText
            })
        }), t[6] = x) : x = t[6];
        let S = x,
            C;
        t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (C = [{
            id: `education-purpose`,
            message: V.dpaSummaryEducationPurpose
        }, {
            id: `no-training`,
            message: V.dpaSummaryNoTraining
        }], t[7] = C) : C = t[7];
        let w = C,
            T;
        t[8] === a ? T = t[9] : (T = a.formatMessage(s), t[8] = a, t[9] = T);
        let D;
        t[10] === a ? D = t[11] : (D = c && a.formatMessage(c), t[10] = a, t[11] = D);
        let O;
        t[12] === a ? O = t[13] : (O = a.formatMessage(V.workspaceNameLabel), t[12] = a, t[13] = O);
        let k;
        t[14] === O ? k = t[15] : (k = (0, Q.jsx)(ue, {
            required: !0,
            children: O
        }), t[14] = O, t[15] = k);
        let A;
        t[16] === Symbol.for(`react.memo_cache_sentinel`) ? (A = e => u(e.target.value), t[16] = A) : A = t[16];
        let j;
        t[17] === a ? j = t[18] : (j = a.formatMessage(V.workspaceNamePlaceholder), t[17] = a, t[18] = j);
        let M;
        t[19] !== j || t[20] !== l ? (M = (0, Q.jsx)(le, {
            id: `workspace-name`,
            name: `workspace-name`,
            value: l,
            onChange: A,
            placeholder: j
        }), t[19] = j, t[20] = l, t[21] = M) : M = t[21];
        let N;
        t[22] !== M || t[23] !== k ? (N = (0, Q.jsxs)(`div`, {
            className: `flex flex-col gap-1.5`,
            children: [k, M]
        }), t[22] = M, t[23] = k, t[24] = N) : N = t[24];
        let P;
        t[25] === Symbol.for(`react.memo_cache_sentinel`) ? (P = (0, Q.jsx)(`p`, {
            className: `text-token-text-secondary`,
            children: (0, Q.jsx)(E, {
                ...V.dpaSummaryIntro
            })
        }), t[25] = P) : P = t[25];
        let F;
        t[26] === Symbol.for(`react.memo_cache_sentinel`) ? (F = (0, Q.jsxs)(`div`, {
            className: `border-token-border-strong bg-token-main-surface-secondary rounded-2xl border px-4 py-4 text-sm`,
            children: [P, (0, Q.jsx)(`ul`, {
                className: `text-token-text-primary mt-3 list-disc space-y-2 ps-4`,
                children: w.map(fe)
            })]
        }), t[26] = F) : F = t[26];
        let I;
        t[27] === Symbol.for(`react.memo_cache_sentinel`) ? (I = e => f(e.target.checked), t[27] = I) : I = t[27];
        let L;
        t[28] === Symbol.for(`react.memo_cache_sentinel`) ? (L = (0, Q.jsx)(E, {
            ...V.teacherAccessAgreementLabel,
            values: {
                teacherAccessTermsLink: b,
                studentDataPrivacyAgreementLink: S
            }
        }), t[28] = L) : L = t[28];
        let R;
        t[29] === d ? R = t[30] : (R = (0, Q.jsx)(`div`, {
            className: `flex flex-col gap-1.5`,
            children: (0, Q.jsx)(ne, {
                id: `dpa-agree`,
                checked: d,
                onChange: I,
                containerClassName: `flex items-center gap-2`,
                label: L
            })
        }), t[29] = d, t[30] = R);
        let z;
        t[31] !== N || t[32] !== R ? (z = (0, Q.jsxs)(`div`, {
            className: `flex flex-col gap-5`,
            children: [N, F, R]
        }), t[31] = N, t[32] = R, t[33] = z) : z = t[33];
        let B = !h,
            H;
        t[34] !== r || t[35] !== v ? (H = () => r({
            ...v
        }), t[34] = r, t[35] = v, t[36] = H) : H = t[36];
        let U;
        t[37] !== B || t[38] !== H ? (U = (0, Q.jsx)(se, {
            disabled: B,
            labelMessage: V.agreeAndContinueButton,
            onClick: H
        }), t[37] = B, t[38] = H, t[39] = U) : U = t[39];
        let W;
        t[40] !== o || t[41] !== i ? (W = () => {
            i?.(), o(`/`)
        }, t[40] = o, t[41] = i, t[42] = W) : W = t[42];
        let G;
        t[43] === Symbol.for(`react.memo_cache_sentinel`) ? (G = (0, Q.jsx)(E, {
            id: `TjfExQ`,
            defaultMessage: `Cancel`
        }), t[43] = G) : G = t[43];
        let K;
        t[44] === W ? K = t[45] : (K = (0, Q.jsx)(g, {
            color: `ghost`,
            onClick: W,
            children: G
        }), t[44] = W, t[45] = K);
        let q;
        return t[46] !== z || t[47] !== U || t[48] !== K || t[49] !== T || t[50] !== D ? (q = (0, Q.jsx)(ae, {
            content: (0, Q.jsxs)(oe, {
                title: T,
                subTitle: D,
                children: [z, U, K]
            })
        }), t[46] = z, t[47] = U, t[48] = K, t[49] = T, t[50] = D, t[51] = q) : q = t[51], q
    }
}));

function _e(e) {
    return setTimeout(e, 3e3)
}
var ve, ye, be, $, xe, Se = e((() => {
        ve = N(), x(), B(), b(), u(), H(), W(), X(), c(), a(), d(), ye = t(k()), D(), C(), ge(), be = w(), $ = {
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
                t = te(),
                n = G(),
                a;
            e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (a = l(), e[0] = a) : a = e[0];
            let c = a,
                u;
            e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (u = y(), e[1] = u) : u = e[1];
            let d = u,
                f = i(),
                p = h(),
                m = A(),
                [g, _] = (0, ye.useState)(!1),
                v = f?.planType ?? d?.account?.planType ?? null,
                b = p?.email_domain_type ?? null,
                x;
            e[2] === m.search ? x = e[3] : (x = new URLSearchParams(m.search).get(`referer`), e[2] = m.search, e[3] = x);
            let S = x,
                C = `verificationId` in n ? n.verificationId ?? null : null,
                w;
            e[4] !== n.name || e[5] !== C ? (w = {
                enrollmentState: n.name,
                enrollmentVerificationId: C
            }, e[4] = n.name, e[5] = C, e[6] = w) : w = e[6];
            let T = w,
                E = c ? v ?? `unknown` : null,
                ee;
            e[7] !== b || e[8] !== T || e[9] !== E ? (ee = {
                isLoggedIn: c,
                loggedInStatus: c ? `logged_in` : `logged_out`,
                accountPlanType: E,
                emailDomainType: b,
                ...T
            }, e[7] = b, e[8] = T, e[9] = E, e[10] = ee) : ee = e[10];
            let D = ee,
                O;
            e[11] !== D || e[12] !== S ? (O = (e, t, n) => {
                r.logEventWithStatsig(e, t, {
                    ...D,
                    referer: S ?? null,
                    ...n
                })
            }, e[11] = D, e[12] = S, e[13] = O) : O = e[13];
            let k = O,
                j = S ?? null,
                M;
            e[14] !== b || e[15] !== v || e[16] !== j ? (M = {
                loggedInStatus: c ? `logged_in` : `logged_out`,
                accountPlanType: v,
                emailDomainType: b,
                referer: j
            }, e[14] = b, e[15] = v, e[16] = j, e[17] = M) : M = e[17];
            let N = M,
                P = (0, ye.useRef)(!1),
                ne = b != null,
                F = n.name !== `loading`,
                I, L;
            e[18] !== N || e[19] !== ne || e[20] !== F || e[21] !== k ? (I = () => {
                !c || !ne || !F || P.current || (k($.impression.segment, $.impression.statsig), z(`create_workspace`, `page_view`, N), P.current = !0)
            }, L = [N, ne, F, c, k], e[18] = N, e[19] = ne, e[20] = F, e[21] = k, e[22] = I, e[23] = L) : (I = e[22], L = e[23]), (0, ye.useEffect)(I, L);
            let B;
            e[24] === k ? B = e[25] : (B = async e => {
                _(!0);
                let t = e.workspaceName ?? ``,
                    n = e.agreedToDPA ?? !1;
                k($.continue.segment, $.continue.statsig, {
                    workspaceNameLength: t.length,
                    agreedToDpa: n
                }), z(`create_workspace`, `continue_click`, {
                    workspaceNameLength: t.length,
                    agreedToDpa: n
                });
                try {
                    await U({
                        workspace_name: t,
                        agreed_to_dpa: n,
                        plan_type: s.K12
                    }), k($.result.segment, $.result.statsig, {
                        status: `success`,
                        workspaceNameLength: t.length
                    }), z(`create_workspace`, `continue_success`, {
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
                    k($.result.segment, $.result.statsig, {
                        status: `error`,
                        ...i
                    }), _(!1), R(`create_workspace`, `continue_error`, r, {
                        workspaceNameLength: t.length,
                        agreedToDpa: n
                    })
                }
            }, e[24] = k, e[25] = B);
            let H = B,
                W;
            e[26] === k ? W = e[27] : (W = () => {
                k($.cancel.segment, $.cancel.statsig), z(`create_workspace`, `cancel_click`)
            }, e[26] = k, e[27] = W);
            let K = W,
                q;
            e[28] === t ? q = e[29] : (q = t.formatMessage(V.teachersCreateWorkspacePageTitle), e[28] = t, e[29] = q);
            let J;
            e[30] === q ? J = e[31] : (J = (0, be.jsx)(`title`, {
                children: q
            }), e[30] = q, e[31] = J);
            let Y;
            e[32] !== g || e[33] !== K || e[34] !== H ? (Y = (0, be.jsx)(he, {
                disableContinueButton: g,
                onNext: H,
                onCancel: K
            }), e[32] = g, e[33] = K, e[34] = H, e[35] = Y) : Y = e[35];
            let X;
            return e[36] !== J || e[37] !== Y ? (X = (0, be.jsxs)(be.Fragment, {
                children: [J, Y]
            }), e[36] = J, e[37] = Y, e[38] = X) : X = e[38], X
        }
    })),
    Ce, we, Te, Ee, De = e((() => {
        C(), Ce = N(), Se(), we = w(), Te = `/k12-create-workspace`, Ee = O(function() {
            "use forget";
            let e = (0, Ce.c)(1),
                t;
            return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, we.jsx)(xe, {}), e[0] = t) : t = e[0], t
        })
    }));
export {
    G as a, X as i, De as n, Ee as r, Te as t
};
//# sourceMappingURL=cff09cfe-h2svxryj6rle1m6j.js.map