import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as n,
    Btt as r,
    G2 as i,
    Htt as a,
    JV as o,
    K2 as s,
    Nrt as c,
    Prt as l,
    k1 as u
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as d,
    At as f,
    Bn as p,
    Nn as m,
    Rn as h,
    Ut as g,
    Vn as _,
    wn as v
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Flt as y,
    Nlt as b
} from "./conversation-small-fym1zmu9zimymmm1.js";

function x(e, t, n) {
    let r = new URL(e === `2` ? L : F);
    return e === `2` ? r.searchParams.set(`Id2`, n) : (r.searchParams.set(`st`, I), r.searchParams.set(`p`, t), r.searchParams.set(`urlimport`, `1`), r.searchParams.set(`questlist`, `CSTATUS`)), r.searchParams.set(`CSTATUS`, V), r.toString()
}

function S(e) {
    return `survey-login-attempted:${e}`
}

function C() {
    let e = new URL(window.location.href);
    e.searchParams.has(`authAttempted`) && (e.searchParams.delete(`authAttempted`), window.history.replaceState(window.history.state, ``, `${e.pathname}${e.search}${e.hash}`))
}

function w(e) {
    return e.preventDefault()
}

function T() {}

function E() {
    return new Promise(D)
}

function D(e) {
    window.setTimeout(e, H)
}

function O() {
    return r.flushStructuredEvents(U)
}

function k() {
    return null
}

function A() {
    return !1
}

function j() {
    return !0
}
var M, N, P, F, I, L, R, z, B, V, H, U, W, G = e((() => {
    d(), M = v(), u(), c(), a(), y(), i(), N = t(_()), h(), o(), P = p(), F = `https://survey.amerispeak.org/SE/`, I = `u/91oGwp7Hunn/jFlunSt7LTWzOAzR+2WwNcJwZxMKM=`, L = `https://k5.macromill.com/e/linkage_test_202609/sb.php`, R = `pending`, z = `handled`, B = `ready`, V = `1`, H = 1e4, U = 2e4, W = g(function() {
        "use forget";
        let e = (0, M.c)(29),
            {
                platform: t,
                id1: i,
                id2: a,
                hasAuthAttemptedFallback: o
            } = f(),
            c = (0, N.useRef)(!1),
            u = (0, N.useRef)(!1),
            [d, p] = (0, N.useState)(!1),
            h;
        e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (h = l(), e[0] = h) : h = e[0];
        let g = h,
            _ = s(j, A),
            v;
        e[1] === a ? v = e[2] : (v = () => window.sessionStorage.getItem(S(a)), e[1] = a, e[2] = v);
        let y = s(v, k),
            D;
        e[3] !== i || e[4] !== a || e[5] !== t ? (D = new URLSearchParams({
            Val1: t,
            Id1: i,
            Id2: a,
            authAttempted: `1`
        }).toString(), e[3] = i, e[4] = a, e[5] = t, e[6] = D) : D = e[6];
        let F = `/surveylogin?${D}`,
            I;
        e[7] !== i || e[8] !== a || e[9] !== t ? (I = x(t, i, a), e[7] = i, e[8] = a, e[9] = t, e[10] = I) : I = e[10];
        let L = I,
            V = y === B || d,
            H = _ && g && (y != null || o),
            U, W;
        if (e[11] !== F || e[12] !== o || e[13] !== a ? (U = () => {
                let e = S(a),
                    t = window.sessionStorage.getItem(e);
                if (!g || !(t != null || o)) {
                    if (c.current) return;
                    t !== z && t !== B && window.sessionStorage.setItem(e, R), c.current = !0, n({
                        callbackUrl: F,
                        skipLoginModal: !0
                    });
                    return
                }
                let i = O,
                    s = E,
                    l = () => {
                        Promise.all([i(), s()]).finally(() => {
                            window.sessionStorage.setItem(e, B), p(!0)
                        })
                    };
                if (t === B) {
                    C(), u.current = !0;
                    return
                }
                if (t === z) {
                    C(), u.current || (u.current = !0, l());
                    return
                }
                u.current || (window.sessionStorage.setItem(e, z), C(), r.logStructuredEvent(`ChatgptYougovSurveyLogin`, {
                    visa: a
                }), u.current = !0, l());
                let d = () => {
                        document.visibilityState === `hidden` && i()
                    },
                    f = () => {
                        i()
                    },
                    m = () => {
                        i()
                    };
                return document.addEventListener(`visibilitychange`, d), window.addEventListener(`pagehide`, f), window.addEventListener(`beforeunload`, m, {
                    once: !0
                }), () => {
                    document.removeEventListener(`visibilitychange`, d), window.removeEventListener(`pagehide`, f), window.removeEventListener(`beforeunload`, m)
                }
            }, W = [F, o, a, g], e[11] = F, e[12] = o, e[13] = a, e[14] = U, e[15] = W) : (U = e[14], W = e[15]), (0, N.useEffect)(U, W), !H) return null;
        let G;
        e[16] === Symbol.for(`react.memo_cache_sentinel`) ? (G = (0, P.jsx)(m, {
            id: `chatgpt.survey_login.bridge.accessible_title`,
            defaultMessage: `Survey login`
        }), e[16] = G) : G = e[16];
        let K = !V,
            q;
        e[17] !== V || e[18] !== L ? (q = V ? (0, P.jsx)(`button`, {
            type: `button`,
            className: `interactive-button interactive-button-primary rounded-full px-5 py-2.5 text-sm font-medium`,
            onClick: () => {
                window.location.assign(L)
            },
            children: (0, P.jsx)(m, {
                id: `chatgpt.survey_login.bridge.button.return_to_survey.label`,
                defaultMessage: `Return to survey`
            })
        }) : (0, P.jsx)(`div`, {
            className: `border-token-border-default border-t-token-text-primary h-8 w-8 animate-spin rounded-full border-2`,
            "aria-hidden": !0
        }), e[17] = V, e[18] = L, e[19] = q) : q = e[19];
        let J;
        e[20] === V ? J = e[21] : (J = (0, P.jsx)(`p`, {
            className: `text-base font-medium`,
            children: (0, P.jsx)(m, {
                id: `chatgpt.survey_login.bridge.status.primary`,
                defaultMessage: `{canReturnToSurvey, select, true {You're signed in} other {You're signed in. Saving your survey login...}}`,
                values: {
                    canReturnToSurvey: V
                }
            })
        }), e[20] = V, e[21] = J);
        let Y;
        e[22] === V ? Y = e[23] : (Y = (0, P.jsx)(`p`, {
            className: `text-token-text-tertiary text-sm`,
            children: (0, P.jsx)(m, {
                id: `chatgpt.survey_login.bridge.status.secondary`,
                defaultMessage: `{canReturnToSurvey, select, true {Tap the button to go back to your survey.} other {This may take a few seconds. Please keep this page open.}}`,
                values: {
                    canReturnToSurvey: V
                }
            })
        }), e[22] = V, e[23] = Y);
        let X;
        return e[24] !== Y || e[25] !== K || e[26] !== q || e[27] !== J ? (X = (0, P.jsx)(b, {
            open: !0,
            onOpenChange: T,
            onEscapeKeyDown: w,
            accessibleTitle: G,
            children: (0, P.jsx)(b.Contents, {
                className: `bg-token-bg-primary text-token-text-primary`,
                children: (0, P.jsx)(`main`, {
                    className: `flex min-h-full items-center justify-center px-6`,
                    children: (0, P.jsxs)(`div`, {
                        className: `flex max-w-sm flex-col items-center gap-3 text-center`,
                        role: `status`,
                        "aria-live": `polite`,
                        "aria-busy": K,
                        children: [q, J, Y]
                    })
                })
            })
        }), e[24] = Y, e[25] = K, e[26] = q, e[27] = J, e[28] = X) : X = e[28], X
    })
}));
e((() => {
    G()
}))();
export {
    W as
    default
};
//# sourceMappingURL=surveylogin-oga34jlx.js.map