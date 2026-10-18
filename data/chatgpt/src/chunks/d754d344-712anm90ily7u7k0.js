import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AR as n,
    AT as r,
    Btt as i,
    Cit as a,
    DR as o,
    Htt as s,
    IN as c,
    Lrt as l,
    MN as u,
    NN as d,
    Nrt as f,
    PR as p,
    Q1 as m,
    S1 as h,
    Sit as g,
    Srt as _,
    TR as v,
    Tit as y,
    Trt as b,
    U1 as x,
    V1 as S,
    X1 as C,
    aF as w,
    bit as T,
    bnt as E,
    brt as D,
    cz as O,
    dR as k,
    fr as A,
    fz as j,
    gR as M,
    hU as N,
    iit as P,
    jN as F,
    jR as I,
    kT as L,
    krt as R,
    lz as z,
    pF as B,
    pU as V,
    pr as ee,
    q1 as te,
    rot as H,
    sit as ne,
    u1 as re,
    uz as ie,
    yit as ae,
    ynt as oe
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as se,
    Bn as U,
    Nn as W,
    Pt as ce,
    Rn as le,
    Vn as G,
    Zt as ue,
    an as de,
    at as fe,
    wn as K
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    X4t as pe,
    Z4t as me,
    b8 as he,
    gGn as ge,
    vGn as _e,
    x8 as ve
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    $x as ye,
    Qx as be,
    Xl as xe,
    Zl as Se
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    a as Ce,
    n as we,
    o as Te,
    t as Ee
} from "./c09d86e5-l7zgumyqje9mygnb.js";
import {
    a as De,
    i as Oe
} from "./9bbac052-hmfqc3w40261iizy.js";
import {
    n as ke,
    t as Ae
} from "./35711af7-gdl8w5rdz7t391x9.js";
import {
    a as je,
    c as Me,
    n as Ne,
    o as Pe,
    s as Fe,
    t as Ie
} from "./c982bafe-c53pviyww7ariw0j.js";
import {
    n as Le,
    t as Re
} from "./966be48d-knoyz9r6e2bop0ms.js";

function ze(e) {
    return e + 1
}

function Be(e) {
    return e.name !== `phone_number`
}
var Ve, q, J, He, Ue = e((() => {
    Ve = K(), k(), Ce(), Fe(), p(), Le(), Ne(), we(), r(), xe(), be(), f(), je(), n(), q = t(G()), le(), se(), J = U(), He = e => {
        "use forget";
        let t = (0, Ve.c)(60),
            {
                title: n,
                subtitle: r,
                mismatchSubtitle: i,
                connection: a,
                callbackUrl: s,
                authorizationParams: c
            } = e,
            l = ce(),
            u;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (u = {
            loginStrategy: `existing_user`
        }, t[0] = u) : u = t[0];
        let {
            optionsForDisplay: d
        } = Me(u), [f, p] = Te(!0), [m, h] = (0, q.useState)(0), [g, _] = (0, q.useState)(!1), y;
        t[1] !== c || t[2] !== s ? (y = Ie(s, c), t[1] = c, t[2] = s, t[3] = y) : y = t[3];
        let x = y,
            S;
        t[4] !== c || t[5] !== f || t[6] !== l || t[7] !== p || t[8] !== x ? (S = async (e, t) => {
            if (!f) {
                p(!0), _(!1);
                try {
                    await x({
                        screen_hint: `login_or_signup`,
                        ...e
                    }, () => {
                        M(c[b], t, v.ACCESS_FLOW_PAGE_TYPE_CHATGPT_WEB_LOGIN_PAGE)
                    })
                } catch {
                    _(!0), h(ze)
                }
                p(!1)
            }
        }, t[4] = c, t[5] = f, t[6] = l, t[7] = p, t[8] = x, t[9] = S) : S = t[9];
        let C = S,
            w, T, E, D, O, k, A, j, N;
        if (t[10] !== a || t[11] !== C || t[12] !== m || t[13] !== f || t[14] !== i || t[15] !== d || t[16] !== r || t[17] !== n) {
            let e = d.filter(Be);
            N = `flex flex-col items-center gap-3 text-center`, t[27] === n ? w = t[28] : (w = (0, J.jsx)(`h1`, {
                className: `text-2xl font-semibold`,
                children: n
            }), t[27] = n, t[28] = w), t[29] === r ? T = t[30] : (T = (0, J.jsx)(`p`, {
                className: `text-token-text-secondary text-sm`,
                children: r
            }), t[29] = r, t[30] = T), t[31] === i ? E = t[32] : (E = i ? (0, J.jsx)(`p`, {
                className: `text-token-text-secondary text-sm`,
                children: i
            }) : null, t[31] = i, t[32] = E), D = `flex w-full flex-col gap-3 px-6 pt-3`, O = f;
            let s;
            t[33] !== a || t[34] !== C ? (s = () => {
                C({
                    connection: a,
                    connection_provider: a.startsWith(`conn_`) || a.startsWith(`oaisaml_`) ? R.WorkOS.toString() : R.Auth0.toString()
                }, o.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_SSO)
            }, t[33] = a, t[34] = C, t[35] = s) : s = t[35];
            let c, l;
            t[36] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, J.jsx)(Se, {
                className: `icon`
            }), l = (0, J.jsx)(W, {
                id: `AcceptInvitePage.sso.button.company`,
                defaultMessage: `Continue with company SSO`
            }), t[36] = c, t[37] = l) : (c = t[36], l = t[37]), t[38] !== f || t[39] !== s ? (k = (0, J.jsxs)(L, {
                type: `button`,
                color: `primary`,
                className: `h-[52px] rounded-full text-base`,
                contentWrapperClassName: `gap-2`,
                disabled: f,
                onClick: s,
                children: [c, l]
            }), t[38] = f, t[39] = s, t[40] = k) : k = t[40], A = e.length > 0 ? (0, J.jsx)(Re, {
                children: (0, J.jsx)(W, {
                    id: `AcceptInvitePage.sso.divider.or`,
                    defaultMessage: `or`
                })
            }) : null;
            let u;
            t[41] !== C || t[42] !== m || t[43] !== f ? (u = e => {
                if (e.name === `email`) return (0, J.jsxs)(L, {
                    type: `button`,
                    color: `secondary`,
                    className: `h-[52px] rounded-full text-base`,
                    contentWrapperClassName: `gap-2`,
                    disabled: f || e.tempDisabled,
                    onClick: () => {
                        C({
                            connection: `password`
                        }, o.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_PASSWORD)
                    },
                    children: [(0, J.jsx)(ye, {
                        className: `icon`
                    }), (0, J.jsx)(W, {
                        id: `AcceptInvitePage.sso.button.password`,
                        defaultMessage: `Continue with password`
                    })]
                }, e.name);
                if (e.name === `phone_number`) return null;
                let t = e.name;
                return (0, J.jsx)(Ee, {
                    provider: t,
                    className: `h-[52px] rounded-full text-base`,
                    disabled: f || e.tempDisabled,
                    onClick: () => {
                        C({
                            connection: I[t]
                        }, Pe(t))
                    }
                }, `${t}-${m}`)
            }, t[41] = C, t[42] = m, t[43] = f, t[44] = u) : u = t[44], j = e.map(u), t[10] = a, t[11] = C, t[12] = m, t[13] = f, t[14] = i, t[15] = d, t[16] = r, t[17] = n, t[18] = w, t[19] = T, t[20] = E, t[21] = D, t[22] = O, t[23] = k, t[24] = A, t[25] = j, t[26] = N
        } else w = t[18], T = t[19], E = t[20], D = t[21], O = t[22], k = t[23], A = t[24], j = t[25], N = t[26];
        let P;
        t[45] !== D || t[46] !== O || t[47] !== k || t[48] !== A || t[49] !== j ? (P = (0, J.jsxs)(`div`, {
            className: D,
            "aria-busy": O,
            children: [k, A, j]
        }), t[45] = D, t[46] = O, t[47] = k, t[48] = A, t[49] = j, t[50] = P) : P = t[50];
        let F;
        t[51] === g ? F = t[52] : (F = g ? (0, J.jsx)(`p`, {
            role: `alert`,
            className: `text-token-interactive-label-warning-secondary text-sm`,
            children: (0, J.jsx)(W, {
                id: `AcceptInvitePage.sso.error.signIn`,
                defaultMessage: `Couldn't start sign-in. Please try again.`
            })
        }) : null, t[51] = g, t[52] = F);
        let z;
        return t[53] !== w || t[54] !== T || t[55] !== E || t[56] !== P || t[57] !== F || t[58] !== N ? (z = (0, J.jsxs)(`div`, {
            className: N,
            children: [w, T, E, P, F]
        }), t[53] = w, t[54] = T, t[55] = E, t[56] = P, t[57] = F, t[58] = N, t[59] = z) : z = t[59], z
    }
}));

function We({
    workspaceId: e,
    acceptWorkspaceId: t
}) {
    e && (g.deleteCookie(y.WorkspaceComputeResidencyCluster), g.setCookie(y.Workspace, e, {
        maxAge: D
    })), t ? g.setCookie(y.AcceptAccountId, t, {
        maxAge: 120
    }) : g.deleteCookie(y.AcceptAccountId)
}

function Ge(e) {
    "use forget";
    let t = (0, Z.c)(48),
        {
            inviteAuthContext: n,
            currentUserEmail: r,
            isStorageComplianceEnabled: a,
            browserTitle: o,
            metaDescription: s,
            title: c,
            subtitle: l,
            mismatchSubtitle: u,
            optionalSsoConnection: d,
            callbackUrl: f,
            wordmarkLabel: p,
            pageShownEventName: m
        } = e,
        h = m === void 0 ? `chatgpt_accept_invite_page_shown` : m,
        [g] = (0, Q.useState)(qe),
        _;
    t[0] !== r || t[1] !== n.email ? (_ = r != null && r.trim().toLowerCase() !== n.email.trim().toLowerCase(), t[0] = r, t[1] = n.email, t[2] = _) : _ = t[2];
    let v = _,
        y;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (y = C(ae()), t[3] = y) : y = t[3];
    let x;
    t[4] === n.acceptWorkspaceId ? x = t[5] : (x = n.acceptWorkspaceId ? {
        accept_wId: n.acceptWorkspaceId
    } : {}, t[4] = n.acceptWorkspaceId, t[5] = x);
    let S;
    t[6] !== g || t[7] !== n.email || t[8] !== x ? (S = {
        ...y,
        login_hint: n.email,
        ...x,
        [b]: g
    }, t[6] = g, t[7] = n.email, t[8] = x, t[9] = S) : S = t[9];
    let w = S,
        T;
    t[10] === f ? T = t[11] : (T = new URL(f, `https://chatgpt.com`), t[10] = f, t[11] = T);
    let D = T.search,
        k, A;
    t[12] !== g || t[13] !== n.workspaceId || t[14] !== D || t[15] !== v || t[16] !== h ? (k = () => {
        let e = new URLSearchParams(D),
            t = e.get(`aiId`),
            r = e.get(`eid`),
            a = {
                authSessionLoggingId: g,
                inviteId: t && /^[a-zA-Z0-9_-]{1,128}$/.test(t) ? t : void 0,
                entryId: r && de(r) ? r : void 0,
                isAutomated: navigator.webdriver
            },
            o = i.logStructuredEvent(`ChatgptInviteLoginPageViewed`, {
                legacyStatsigEventName: h,
                invitedWorkspaceId: n.workspaceId ?? void 0,
                isAccountMismatch: v,
                ...a
            });
        E(h, void 0, {
            workspace_id: n.workspaceId ?? ``,
            is_logged_in_as_different_email: String(v),
            auth_session_logging_id: a.authSessionLoggingId,
            is_automated: String(a.isAutomated),
            ...a.inviteId ? {
                invite_id: a.inviteId
            } : {},
            ...a.entryId ? {
                entry_id: a.entryId
            } : {},
            ...o ? {
                unique_event_id: o
            } : {}
        })
    }, A = [D, g, n.workspaceId, v, h], t[12] = g, t[13] = n.workspaceId, t[14] = D, t[15] = v, t[16] = h, t[17] = k, t[18] = A) : (k = t[17], A = t[18]), (0, Q.useEffect)(k, A);
    let j;
    t[19] === o ? j = t[20] : (j = (0, $.jsx)(`title`, {
        children: o
    }), t[19] = o, t[20] = j);
    let M;
    t[21] === s ? M = t[22] : (M = (0, $.jsx)(`meta`, {
        name: `description`,
        content: s
    }), t[21] = s, t[22] = M);
    let N;
    t[23] === Symbol.for(`react.memo_cache_sentinel`) ? (N = {
        minHeight: `100dvh`
    }, t[23] = N) : N = t[23];
    let P;
    t[24] === Symbol.for(`react.memo_cache_sentinel`) ? (P = (0, $.jsx)(he, {}), t[24] = P) : P = t[24];
    let F;
    t[25] === p ? F = t[26] : (F = (0, $.jsx)(fe, {
        to: `/`,
        className: `text-token-text-primary absolute start-5 top-5 md:start-8 md:top-6`,
        "aria-label": p,
        children: P
    }), t[25] = p, t[26] = F);
    let I;
    t[27] !== w || t[28] !== f || t[29] !== n.email || t[30] !== u || t[31] !== d || t[32] !== l || t[33] !== c ? (I = (0, $.jsx)(`div`, {
        className: `relative flex w-full grow flex-col items-center justify-center`,
        children: (0, $.jsx)(`div`, {
            className: `mt-5 w-full max-w-[440px]`,
            children: d ? (0, $.jsx)(He, {
                title: c,
                subtitle: l,
                mismatchSubtitle: u,
                connection: d,
                callbackUrl: Je(f),
                authorizationParams: w
            }) : (0, $.jsx)(Ae, {
                isUsernameOnTop: !0,
                onClose: Ke,
                title: c,
                subtitle: l,
                mutedSubtitle: u,
                initialEmail: n.email,
                callbackUrl: f,
                authorizationParams: w,
                isStayLoggedOutVisible: !1,
                stayLoggedOutPlacement: `bottom`,
                googleButtonColor: `secondary`,
                isInModal: !1,
                collapsedLoginVariant: `none`
            })
        })
    }), t[27] = w, t[28] = f, t[29] = n.email, t[30] = u, t[31] = d, t[32] = l, t[33] = c, t[34] = I) : I = t[34];
    let L;
    t[35] === a ? L = t[36] : (L = (0, $.jsx)(`div`, {
        className: `mt-10 flex flex-col items-center justify-center`,
        children: (0, $.jsx)(Oe, {
            isStorageComplianceEnabled: a
        })
    }), t[35] = a, t[36] = L);
    let R;
    t[37] !== F || t[38] !== I || t[39] !== L ? (R = (0, $.jsxs)(`main`, {
        className: `relative flex grow flex-col items-center justify-between px-5 py-8 text-black md:px-6 dark:text-white`,
        children: [F, I, L]
    }), t[37] = F, t[38] = I, t[39] = L, t[40] = R) : R = t[40];
    let z;
    t[41] === Symbol.for(`react.memo_cache_sentinel`) ? (z = (0, $.jsx)(O, {
        children: (0, $.jsx)(ge, {
            fixed: !0
        })
    }), t[41] = z) : z = t[41];
    let B;
    t[42] === R ? B = t[43] : (B = (0, $.jsxs)(`div`, {
        className: `flex min-h-screen flex-col justify-between`,
        style: N,
        children: [R, z]
    }), t[42] = R, t[43] = B);
    let V;
    return t[44] !== M || t[45] !== B || t[46] !== j ? (V = (0, $.jsxs)($.Fragment, {
        children: [j, M, B]
    }), t[44] = M, t[45] = B, t[46] = j, t[47] = V) : V = t[47], V
}

function Ke() {}

function qe() {
    return te(), S()
}

function Y(e) {
    return new URL(e, window.location.origin)
}

function Je(e) {
    let t = Y(e);
    return t.searchParams.delete(`sso`), t.searchParams.delete(`connection`), t.searchParams.delete(`login_hint`), `${t.pathname}${t.search}${t.hash}`
}

function Ye(e) {
    let t = Y(e);
    return t.searchParams.set(`account_switch`, `true`), t.searchParams.set(`account_switch_login`, `add_account`), `${t.pathname}${t.search}${t.hash}`
}

function Xe({
    invitePageUrl: e,
    postLogoutParamName: t
}) {
    let n = Y(e);
    return n.searchParams.set(t, `true`), `${n.pathname}${n.search}${n.hash}`
}

function Ze({
    invitePageUrl: e,
    postLogoutParamName: t
}) {
    let n = Y(e);
    return n.searchParams.delete(t), `${n.pathname}${n.search}${n.hash}`
}

function Qe(e) {
    return e.accountItems.map(e => ({
        workspaceAccountId: e.id,
        workspaceName: e.isPersonalAccount() ? null : e.name,
        workspaceImageUrl: e.data.profilePictureUrl ?? null,
        isPersonalWorkspace: e.isPersonalAccount(),
        isDeactivated: e.isDeactivated()
    }))
}

function $e({
    account: e,
    unknownEmailLabel: t,
    unnamedAccountLabel: n
}) {
    let r = e.email ?? t,
        i = e.name ?? n,
        a = u(e.phoneNumber);
    return !e.email && a != null ? `${i} (${a})` : r
}

function et(e) {
    "use forget";
    let t = (0, Z.c)(80),
        {
            inviteAuthContext: n,
            currentUserEmail: r,
            isStorageComplianceEnabled: i,
            invitePageUrl: a,
            postLogoutParamName: o,
            copy: s,
            inviteLoginPageProps: u
        } = e,
        d = N(),
        {
            data: f
        } = h(),
        p;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (p = [], t[0] = p) : p = t[0];
    let [m, g] = (0, Q.useState)(p), [_, v] = (0, Q.useState)(!1), [y, b] = (0, Q.useState)(null), [x, S] = (0, Q.useState)(!1), C;
    t[1] === a ? C = t[2] : (C = Ye(a), t[1] = a, t[2] = C);
    let T = C,
        E;
    t[3] !== a || t[4] !== o ? (E = Xe({
        invitePageUrl: a,
        postLogoutParamName: o
    }), t[3] = a, t[4] = o, t[5] = E) : E = t[5];
    let D = E,
        O, k;
    if (t[6] === f ? (O = t[7], k = t[8]) : (O = () => {
            if (f == null) return;
            let e = c(H(), Qe(f));
            g(e), b(t => t ?? e[0]?.sessionToken ?? null), v(!0)
        }, k = [f], t[6] = f, t[7] = O, t[8] = k), (0, Q.useEffect)(O, k), f == null || !_) {
        let e;
        return t[9] !== s.loadingTitle || t[10] !== u.wordmarkLabel || t[11] !== i ? (e = (0, $.jsx)(X, {
            title: s.loadingTitle,
            description: null,
            isStorageComplianceEnabled: i,
            wordmarkLabel: u.wordmarkLabel
        }), t[9] = s.loadingTitle, t[10] = u.wordmarkLabel, t[11] = i, t[12] = e) : e = t[12], e
    }
    if (!pe(f)) {
        let e;
        t[13] !== s.accountLimitLogoutError || t[14] !== x || t[15] !== D || t[16] !== d ? (e = async () => {
            if (x) return;
            let e = H()?.sessionToken;
            if (!e) {
                l({
                    reason: P.AccountSwitcher,
                    authHistoryReason: `APP_ENTRY_AUTH_HISTORY_LOGOUT_REASON_LOGOUT`
                });
                return
            }
            S(!0);
            try {
                await ee({
                    sessionToken: e,
                    currentSessionToken: e,
                    postLogoutAction: `return_to_callback_url`,
                    postLogoutCallbackUrl: D,
                    analytics: {
                        source: w.AccountSwitcherAddAccountModal,
                        type: `single_account`
                    },
                    onSessionsChanged: () => {
                        g(F())
                    },
                    onNoNextSession: l
                })
            } catch (e) {
                let t = e;
                d.danger(s.accountLimitLogoutError, {
                    description: t instanceof Error ? t.message : String(t)
                }), S(!1)
            }
        }, t[13] = s.accountLimitLogoutError, t[14] = x, t[15] = D, t[16] = d, t[17] = e) : e = t[17];
        let a = e,
            o;
        t[18] !== s || t[19] !== r || t[20] !== n.email ? (o = r == null ? s.getLogoutRequiredDescriptionWithoutCurrentEmail(n.email) : s.getLogoutRequiredDescription({
            currentUserEmail: r,
            inviteEmail: n.email
        }), t[18] = s, t[19] = r, t[20] = n.email, t[21] = o) : o = t[21];
        let c = o,
            f;
        t[22] === a ? f = t[23] : (f = () => {
            a()
        }, t[22] = a, t[23] = f);
        let p;
        t[24] !== s.logoutButton || t[25] !== x || t[26] !== f ? (p = (0, $.jsx)(L, {
            color: `primary`,
            disabled: x,
            onClick: f,
            children: s.logoutButton
        }), t[24] = s.logoutButton, t[25] = x, t[26] = f, t[27] = p) : p = t[27];
        let m;
        return t[28] !== s.logoutRequiredTitle || t[29] !== c || t[30] !== u.wordmarkLabel || t[31] !== i || t[32] !== p ? (m = (0, $.jsx)(X, {
            title: s.logoutRequiredTitle,
            description: c,
            isStorageComplianceEnabled: i,
            wordmarkLabel: u.wordmarkLabel,
            children: p
        }), t[28] = s.logoutRequiredTitle, t[29] = c, t[30] = u.wordmarkLabel, t[31] = i, t[32] = p, t[33] = m) : m = t[33], m
    }
    if (m.length >= 2) {
        let e;
        if (t[34] !== m || t[35] !== y) {
            let n;
            t[37] === y ? n = t[38] : (n = e => e.sessionToken === y, t[37] = y, t[38] = n), e = m.find(n), t[34] = m, t[35] = y, t[36] = e
        } else e = t[36];
        let r = e,
            a;
        t[39] !== s.accountLimitLogoutError || t[40] !== x || t[41] !== D || t[42] !== r || t[43] !== d ? (a = async () => {
            if (r == null || x) return;
            S(!0);
            let e = H(),
                t = e ? e.sessionToken : void 0;
            try {
                await ee({
                    sessionToken: r.sessionToken,
                    currentSessionToken: t,
                    postLogoutAction: `return_to_callback_url`,
                    postLogoutCallbackUrl: D,
                    analytics: {
                        source: w.AccountSwitcherAddAccountModal,
                        type: `single_account`
                    },
                    onSessionsChanged: () => {
                        g(F())
                    },
                    onNoNextSession: l
                })
            } catch (e) {
                let t = e;
                d.danger(s.accountLimitLogoutError, {
                    description: t instanceof Error ? t.message : String(t)
                }), S(!1)
            }
        }, t[39] = s.accountLimitLogoutError, t[40] = x, t[41] = D, t[42] = r, t[43] = d, t[44] = a) : a = t[44];
        let o = a,
            c = s.accountLimitTitle,
            f;
        t[45] !== s || t[46] !== n.email ? (f = s.getAccountLimitDescription(n.email), t[45] = s, t[46] = n.email, t[47] = f) : f = t[47];
        let p = u.wordmarkLabel,
            h;
        if (t[48] !== m || t[49] !== s.unknownEmailLabel || t[50] !== s.unnamedAccountLabel || t[51] !== x || t[52] !== y) {
            let e;
            t[54] !== s.unknownEmailLabel || t[55] !== s.unnamedAccountLabel || t[56] !== x || t[57] !== y ? (e = e => {
                let t = $e({
                        account: e,
                        unknownEmailLabel: s.unknownEmailLabel,
                        unnamedAccountLabel: s.unnamedAccountLabel
                    }),
                    n = e.sessionToken === y;
                return (0, $.jsxs)(`button`, {
                    type: `button`,
                    className: `border-token-border-light hover:bg-token-bg-secondary flex w-full items-center gap-3 rounded-lg border px-3 py-2 text-start`,
                    disabled: x,
                    onClick: () => {
                        b(e.sessionToken)
                    },
                    children: [(0, $.jsx)(`span`, {
                        className: `border-token-text-tertiary flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${n?`bg-token-text-primary`:``}`,
                        children: n ? (0, $.jsx)(`span`, {
                            className: `bg-token-main-surface-primary h-1.5 w-1.5 rounded-full`
                        }) : null
                    }), (0, $.jsx)(`span`, {
                        className: `text-token-text-primary min-w-0 flex-1 truncate text-sm`,
                        children: t
                    })]
                }, e.sessionToken)
            }, t[54] = s.unknownEmailLabel, t[55] = s.unnamedAccountLabel, t[56] = x, t[57] = y, t[58] = e) : e = t[58], h = m.map(e), t[48] = m, t[49] = s.unknownEmailLabel, t[50] = s.unnamedAccountLabel, t[51] = x, t[52] = y, t[53] = h
        } else h = t[53];
        let _;
        t[59] === h ? _ = t[60] : (_ = (0, $.jsx)(`div`, {
            className: `flex w-full flex-col gap-2`,
            children: h
        }), t[59] = h, t[60] = _);
        let v = x || r == null,
            C;
        t[61] === o ? C = t[62] : (C = () => {
            o()
        }, t[61] = o, t[62] = C);
        let T;
        t[63] !== s.accountLimitConfirm || t[64] !== v || t[65] !== C ? (T = (0, $.jsx)(`div`, {
            className: `mt-2 flex w-full justify-end`,
            children: (0, $.jsx)(L, {
                type: `button`,
                color: `primary`,
                disabled: v,
                onClick: C,
                children: s.accountLimitConfirm
            })
        }), t[63] = s.accountLimitConfirm, t[64] = v, t[65] = C, t[66] = T) : T = t[66];
        let E;
        return t[67] !== s.accountLimitTitle || t[68] !== u.wordmarkLabel || t[69] !== i || t[70] !== _ || t[71] !== T || t[72] !== f ? (E = (0, $.jsxs)(X, {
            title: c,
            description: f,
            isStorageComplianceEnabled: i,
            wordmarkLabel: p,
            children: [_, T]
        }), t[67] = s.accountLimitTitle, t[68] = u.wordmarkLabel, t[69] = i, t[70] = _, t[71] = T, t[72] = f, t[73] = E) : E = t[73], E
    }
    let A;
    return t[74] !== T || t[75] !== r || t[76] !== n || t[77] !== u || t[78] !== i ? (A = (0, $.jsx)(Ge, {
        ...u,
        inviteAuthContext: n,
        currentUserEmail: r,
        isStorageComplianceEnabled: i,
        callbackUrl: T
    }), t[74] = T, t[75] = r, t[76] = n, t[77] = u, t[78] = i, t[79] = A) : A = t[79], A
}

function tt() {
    "use forget";
    let e = (0, Z.c)(3),
        {
            data: t
        } = h(),
        n, r;
    return e[0] === t ? (n = e[1], r = e[2]) : (n = () => {
        t == null || !pe(t) || c(H(), Qe(t))
    }, r = [t], e[0] = t, e[1] = n, e[2] = r), (0, Q.useEffect)(n, r), null
}

function X(e) {
    "use forget";
    let t = (0, Z.c)(29),
        {
            title: n,
            description: r,
            isStorageComplianceEnabled: i,
            wordmarkLabel: a,
            children: o
        } = e,
        s;
    t[0] === n ? s = t[1] : (s = (0, $.jsx)(`title`, {
        children: n
    }), t[0] = n, t[1] = s);
    let c;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (c = {
        minHeight: `100dvh`
    }, t[2] = c) : c = t[2];
    let l;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (l = (0, $.jsx)(he, {}), t[3] = l) : l = t[3];
    let u;
    t[4] === a ? u = t[5] : (u = (0, $.jsx)(fe, {
        to: `/`,
        className: `text-token-text-primary absolute start-5 top-5 md:start-8 md:top-6`,
        "aria-label": a,
        children: l
    }), t[4] = a, t[5] = u);
    let d;
    t[6] === r ? d = t[7] : (d = r == null ? (0, $.jsx)(ie, {
        className: `h-10 w-10`
    }) : null, t[6] = r, t[7] = d);
    let f;
    t[8] === n ? f = t[9] : (f = (0, $.jsx)(`h1`, {
        className: `text-2xl font-semibold`,
        children: n
    }), t[8] = n, t[9] = f);
    let p;
    t[10] === r ? p = t[11] : (p = r == null ? null : (0, $.jsx)(`p`, {
        className: `text-token-text-secondary text-sm`,
        children: r
    }), t[10] = r, t[11] = p);
    let m;
    t[12] !== o || t[13] !== d || t[14] !== f || t[15] !== p ? (m = (0, $.jsx)(`div`, {
        className: `relative flex w-full grow flex-col items-center justify-center text-center`,
        children: (0, $.jsxs)(`div`, {
            className: `flex w-full max-w-[440px] flex-col items-center gap-4`,
            children: [d, f, p, o]
        })
    }), t[12] = o, t[13] = d, t[14] = f, t[15] = p, t[16] = m) : m = t[16];
    let h;
    t[17] === i ? h = t[18] : (h = (0, $.jsx)(`div`, {
        className: `mt-10 flex flex-col items-center justify-center`,
        children: (0, $.jsx)(Oe, {
            isStorageComplianceEnabled: i
        })
    }), t[17] = i, t[18] = h);
    let g;
    t[19] !== u || t[20] !== m || t[21] !== h ? (g = (0, $.jsxs)(`main`, {
        className: `relative flex grow flex-col items-center justify-between px-5 py-8 text-black md:px-6 dark:text-white`,
        children: [u, m, h]
    }), t[19] = u, t[20] = m, t[21] = h, t[22] = g) : g = t[22];
    let _;
    t[23] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = (0, $.jsx)(O, {
        children: (0, $.jsx)(ge, {
            fixed: !0
        })
    }), t[23] = _) : _ = t[23];
    let v;
    t[24] === g ? v = t[25] : (v = (0, $.jsxs)(`div`, {
        className: `flex min-h-screen flex-col justify-between`,
        style: c,
        children: [g, _]
    }), t[24] = g, t[25] = v);
    let y;
    return t[26] !== s || t[27] !== v ? (y = (0, $.jsxs)($.Fragment, {
        children: [s, v]
    }), t[26] = s, t[27] = v, t[28] = y) : y = t[28], y
}
var Z, Q, $, nt = e((() => {
    Z = K(), s(), De(), ke(), r(), _e(), _(), ve(), x(), A(), me(), z(), j(), re(), V(), d(), B(), f(), m(), a(), T(), ne(), oe(), Q = t(G()), se(), Ue(), ue(), $ = U()
}));
export {
    Ye as a, We as c, et as i, Ge as n, Ze as o, X as r, nt as s, tt as t
};
//# sourceMappingURL=d754d344-712anm90ily7u7k0.js.map