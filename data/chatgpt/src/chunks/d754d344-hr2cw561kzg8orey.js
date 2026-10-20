import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $R as n,
    $it as r,
    $rt as i,
    AR as a,
    C0 as o,
    CF as s,
    Dz as c,
    FR as l,
    Fit as u,
    JT as d,
    KR as f,
    L1 as p,
    Oz as m,
    Pot as h,
    Rit as g,
    T0 as _,
    VU as v,
    WR as y,
    XN as b,
    XR as x,
    Xit as S,
    Xnt as C,
    Y1 as w,
    YN as T,
    YR as E,
    ZN as D,
    Zit as O,
    Znt as k,
    Zrt as A,
    _nt as j,
    b0 as M,
    eP as N,
    eat as P,
    fr as F,
    g0 as I,
    jF as L,
    jz as R,
    kz as z,
    m0 as B,
    mit as V,
    nat as H,
    nit as U,
    oit as W,
    pr as ee,
    qT as G,
    uit as te,
    ynt as ne,
    zU as re
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as ie,
    Nn as K,
    Nt as ae,
    Q as oe,
    Rn as se,
    Vn as ce,
    Zt as le,
    an as ue,
    it as de,
    wn as fe
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    C8 as pe,
    DGn as me,
    H4t as he,
    S8 as ge,
    TGn as _e,
    U4t as ve
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    $x as ye,
    Qx as be,
    Xl as xe,
    Zl as Se
} from "./30901919-7dzdc1ou0jtwkwpt.js";
import {
    a as Ce,
    n as we,
    o as Te,
    t as Ee
} from "./c09d86e5-bissj9fha9eq1dxp.js";
import {
    a as De,
    i as Oe
} from "./9bbac052-g93471lwkjti03s7.js";
import {
    n as ke,
    t as Ae
} from "./35711af7-d0kbgx45bi0r981l.js";
import {
    a as je,
    c as Me,
    n as Ne,
    o as Pe,
    s as Fe,
    t as Ie
} from "./c982bafe-n48n3ysf4mcq4ipz.js";
import {
    n as Le,
    t as Re
} from "./966be48d-bpma7pzmscd8899l.js";

function ze(e) {
    return e + 1
}

function Be(e) {
    return e.name !== `phone_number`
}
var Ve, q, J, He, Ue = e((() => {
    Ve = fe(), a(), Ce(), Fe(), n(), Le(), Ne(), we(), d(), xe(), be(), te(), je(), E(), q = t(ce()), se(), oe(), J = ie(), He = e => {
        "use forget";
        let t = (0, Ve.c)(60),
            {
                title: n,
                subtitle: r,
                mismatchSubtitle: i,
                connection: a,
                callbackUrl: o,
                authorizationParams: s
            } = e,
            c = ae(),
            u;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (u = {
            loginStrategy: `existing_user`
        }, t[0] = u) : u = t[0];
        let {
            optionsForDisplay: d
        } = Me(u), [p, m] = Te(!0), [h, g] = (0, q.useState)(0), [_, v] = (0, q.useState)(!1), b;
        t[1] !== s || t[2] !== o ? (b = Ie(o, s), t[1] = s, t[2] = o, t[3] = b) : b = t[3];
        let S = b,
            C;
        t[4] !== s || t[5] !== p || t[6] !== c || t[7] !== m || t[8] !== S ? (C = async (e, t) => {
            if (!p) {
                m(!0), v(!1);
                try {
                    await S({
                        screen_hint: `login_or_signup`,
                        ...e
                    }, () => {
                        l(s[U], t, y.ACCESS_FLOW_PAGE_TYPE_CHATGPT_WEB_LOGIN_PAGE)
                    })
                } catch {
                    v(!0), g(ze)
                }
                m(!1)
            }
        }, t[4] = s, t[5] = p, t[6] = c, t[7] = m, t[8] = S, t[9] = C) : C = t[9];
        let w = C,
            T, E, D, O, k, A, j, M, N;
        if (t[10] !== a || t[11] !== w || t[12] !== h || t[13] !== p || t[14] !== i || t[15] !== d || t[16] !== r || t[17] !== n) {
            let e = d.filter(Be);
            N = `flex flex-col items-center gap-3 text-center`, t[27] === n ? T = t[28] : (T = (0, J.jsx)(`h1`, {
                className: `text-2xl font-semibold`,
                children: n
            }), t[27] = n, t[28] = T), t[29] === r ? E = t[30] : (E = (0, J.jsx)(`p`, {
                className: `text-token-text-secondary text-sm`,
                children: r
            }), t[29] = r, t[30] = E), t[31] === i ? D = t[32] : (D = i ? (0, J.jsx)(`p`, {
                className: `text-token-text-secondary text-sm`,
                children: i
            }) : null, t[31] = i, t[32] = D), O = `flex w-full flex-col gap-3 px-6 pt-3`, k = p;
            let o;
            t[33] !== a || t[34] !== w ? (o = () => {
                w({
                    connection: a,
                    connection_provider: a.startsWith(`conn_`) || a.startsWith(`oaisaml_`) ? W.WorkOS.toString() : W.Auth0.toString()
                }, f.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_SSO)
            }, t[33] = a, t[34] = w, t[35] = o) : o = t[35];
            let s, c;
            t[36] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, J.jsx)(Se, {
                className: `icon`
            }), c = (0, J.jsx)(K, {
                id: `AcceptInvitePage.sso.button.company`,
                defaultMessage: `Continue with company SSO`
            }), t[36] = s, t[37] = c) : (s = t[36], c = t[37]), t[38] !== p || t[39] !== o ? (A = (0, J.jsxs)(G, {
                type: `button`,
                color: `primary`,
                className: `h-[52px] rounded-full text-base`,
                contentWrapperClassName: `gap-2`,
                disabled: p,
                onClick: o,
                children: [s, c]
            }), t[38] = p, t[39] = o, t[40] = A) : A = t[40], j = e.length > 0 ? (0, J.jsx)(Re, {
                children: (0, J.jsx)(K, {
                    id: `AcceptInvitePage.sso.divider.or`,
                    defaultMessage: `or`
                })
            }) : null;
            let l;
            t[41] !== w || t[42] !== h || t[43] !== p ? (l = e => {
                if (e.name === `email`) return (0, J.jsxs)(G, {
                    type: `button`,
                    color: `secondary`,
                    className: `h-[52px] rounded-full text-base`,
                    contentWrapperClassName: `gap-2`,
                    disabled: p || e.tempDisabled,
                    onClick: () => {
                        w({
                            connection: `password`
                        }, f.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_PASSWORD)
                    },
                    children: [(0, J.jsx)(ye, {
                        className: `icon`
                    }), (0, J.jsx)(K, {
                        id: `AcceptInvitePage.sso.button.password`,
                        defaultMessage: `Continue with password`
                    })]
                }, e.name);
                if (e.name === `phone_number`) return null;
                let t = e.name;
                return (0, J.jsx)(Ee, {
                    provider: t,
                    className: `h-[52px] rounded-full text-base`,
                    disabled: p || e.tempDisabled,
                    onClick: () => {
                        w({
                            connection: x[t]
                        }, Pe(t))
                    }
                }, `${t}-${h}`)
            }, t[41] = w, t[42] = h, t[43] = p, t[44] = l) : l = t[44], M = e.map(l), t[10] = a, t[11] = w, t[12] = h, t[13] = p, t[14] = i, t[15] = d, t[16] = r, t[17] = n, t[18] = T, t[19] = E, t[20] = D, t[21] = O, t[22] = k, t[23] = A, t[24] = j, t[25] = M, t[26] = N
        } else T = t[18], E = t[19], D = t[20], O = t[21], k = t[22], A = t[23], j = t[24], M = t[25], N = t[26];
        let P;
        t[45] !== O || t[46] !== k || t[47] !== A || t[48] !== j || t[49] !== M ? (P = (0, J.jsxs)(`div`, {
            className: O,
            "aria-busy": k,
            children: [A, j, M]
        }), t[45] = O, t[46] = k, t[47] = A, t[48] = j, t[49] = M, t[50] = P) : P = t[50];
        let F;
        t[51] === _ ? F = t[52] : (F = _ ? (0, J.jsx)(`p`, {
            role: `alert`,
            className: `text-token-interactive-label-warning-secondary text-sm`,
            children: (0, J.jsx)(K, {
                id: `AcceptInvitePage.sso.error.signIn`,
                defaultMessage: `Couldn't start sign-in. Please try again.`
            })
        }) : null, t[51] = _, t[52] = F);
        let I;
        return t[53] !== T || t[54] !== E || t[55] !== D || t[56] !== P || t[57] !== F || t[58] !== N ? (I = (0, J.jsxs)(`div`, {
            className: N,
            children: [T, E, D, P, F]
        }), t[53] = T, t[54] = E, t[55] = D, t[56] = P, t[57] = F, t[58] = N, t[59] = I) : I = t[59], I
    }
}));

function We({
    workspaceId: e,
    acceptWorkspaceId: t
}) {
    e && (r.deleteCookie(H.WorkspaceComputeResidencyCluster), r.setCookie(H.Workspace, e, {
        maxAge: A
    })), t ? r.setCookie(H.AcceptAccountId, t, {
        maxAge: 120
    }) : r.deleteCookie(H.AcceptAccountId)
}

function Ge(e) {
    "use forget";
    let t = (0, Z.c)(48),
        {
            inviteAuthContext: n,
            currentUserEmail: r,
            isStorageComplianceEnabled: i,
            browserTitle: a,
            metaDescription: s,
            title: l,
            subtitle: u,
            mismatchSubtitle: d,
            optionalSsoConnection: f,
            callbackUrl: p,
            wordmarkLabel: m,
            pageShownEventName: h
        } = e,
        g = h === void 0 ? `chatgpt_accept_invite_page_shown` : h,
        [_] = (0, Q.useState)(qe),
        v;
    t[0] !== r || t[1] !== n.email ? (v = r != null && r.trim().toLowerCase() !== n.email.trim().toLowerCase(), t[0] = r, t[1] = n.email, t[2] = v) : v = t[2];
    let y = v,
        b;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (b = o(S()), t[3] = b) : b = t[3];
    let x;
    t[4] === n.acceptWorkspaceId ? x = t[5] : (x = n.acceptWorkspaceId ? {
        accept_wId: n.acceptWorkspaceId
    } : {}, t[4] = n.acceptWorkspaceId, t[5] = x);
    let C;
    t[6] !== _ || t[7] !== n.email || t[8] !== x ? (C = {
        ...b,
        login_hint: n.email,
        ...x,
        [U]: _
    }, t[6] = _, t[7] = n.email, t[8] = x, t[9] = C) : C = t[9];
    let w = C,
        T;
    t[10] === p ? T = t[11] : (T = new URL(p, `https://chatgpt.com`), t[10] = p, t[11] = T);
    let E = T.search,
        D, O;
    t[12] !== _ || t[13] !== n.workspaceId || t[14] !== E || t[15] !== y || t[16] !== g ? (D = () => {
        let e = new URLSearchParams(E),
            t = e.get(`aiId`),
            r = e.get(`eid`),
            i = {
                authSessionLoggingId: _,
                inviteId: t && /^[a-zA-Z0-9_-]{1,128}$/.test(t) ? t : void 0,
                entryId: r && ue(r) ? r : void 0,
                isAutomated: navigator.webdriver
            },
            a = j.logStructuredEvent(`ChatgptInviteLoginPageViewed`, {
                legacyStatsigEventName: g,
                invitedWorkspaceId: n.workspaceId ?? void 0,
                isAccountMismatch: y,
                ...i
            });
        k(g, void 0, {
            workspace_id: n.workspaceId ?? ``,
            is_logged_in_as_different_email: String(y),
            auth_session_logging_id: i.authSessionLoggingId,
            is_automated: String(i.isAutomated),
            ...i.inviteId ? {
                invite_id: i.inviteId
            } : {},
            ...i.entryId ? {
                entry_id: i.entryId
            } : {},
            ...a ? {
                unique_event_id: a
            } : {}
        })
    }, O = [E, _, n.workspaceId, y, g], t[12] = _, t[13] = n.workspaceId, t[14] = E, t[15] = y, t[16] = g, t[17] = D, t[18] = O) : (D = t[17], O = t[18]), (0, Q.useEffect)(D, O);
    let A;
    t[19] === a ? A = t[20] : (A = (0, $.jsx)(`title`, {
        children: a
    }), t[19] = a, t[20] = A);
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
    t[24] === Symbol.for(`react.memo_cache_sentinel`) ? (P = (0, $.jsx)(ge, {}), t[24] = P) : P = t[24];
    let F;
    t[25] === m ? F = t[26] : (F = (0, $.jsx)(de, {
        to: `/`,
        className: `text-token-text-primary absolute start-5 top-5 md:start-8 md:top-6`,
        "aria-label": m,
        children: P
    }), t[25] = m, t[26] = F);
    let I;
    t[27] !== w || t[28] !== p || t[29] !== n.email || t[30] !== d || t[31] !== f || t[32] !== u || t[33] !== l ? (I = (0, $.jsx)(`div`, {
        className: `relative flex w-full grow flex-col items-center justify-center`,
        children: (0, $.jsx)(`div`, {
            className: `mt-5 w-full max-w-[440px]`,
            children: f ? (0, $.jsx)(He, {
                title: l,
                subtitle: u,
                mismatchSubtitle: d,
                connection: f,
                callbackUrl: Je(p),
                authorizationParams: w
            }) : (0, $.jsx)(Ae, {
                isUsernameOnTop: !0,
                onClose: Ke,
                title: l,
                subtitle: u,
                mutedSubtitle: d,
                initialEmail: n.email,
                callbackUrl: p,
                authorizationParams: w,
                isStayLoggedOutVisible: !1,
                stayLoggedOutPlacement: `bottom`,
                googleButtonColor: `secondary`,
                isInModal: !1,
                collapsedLoginVariant: `none`
            })
        })
    }), t[27] = w, t[28] = p, t[29] = n.email, t[30] = d, t[31] = f, t[32] = u, t[33] = l, t[34] = I) : I = t[34];
    let L;
    t[35] === i ? L = t[36] : (L = (0, $.jsx)(`div`, {
        className: `mt-10 flex flex-col items-center justify-center`,
        children: (0, $.jsx)(Oe, {
            isStorageComplianceEnabled: i
        })
    }), t[35] = i, t[36] = L);
    let R;
    t[37] !== F || t[38] !== I || t[39] !== L ? (R = (0, $.jsxs)(`main`, {
        className: `relative flex grow flex-col items-center justify-between px-5 py-8 text-black md:px-6 dark:text-white`,
        children: [F, I, L]
    }), t[37] = F, t[38] = I, t[39] = L, t[40] = R) : R = t[40];
    let z;
    t[41] === Symbol.for(`react.memo_cache_sentinel`) ? (z = (0, $.jsx)(c, {
        children: (0, $.jsx)(_e, {
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
    return t[44] !== M || t[45] !== B || t[46] !== A ? (V = (0, $.jsxs)($.Fragment, {
        children: [A, M, B]
    }), t[44] = M, t[45] = B, t[46] = A, t[47] = V) : V = t[47], V
}

function Ke() {}

function qe() {
    return M(), B()
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
        a = b(e.phoneNumber);
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
            copy: c,
            inviteLoginPageProps: l
        } = e,
        d = v(),
        {
            data: f
        } = w(),
        p;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (p = [], t[0] = p) : p = t[0];
    let [m, g] = (0, Q.useState)(p), [_, y] = (0, Q.useState)(!1), [b, x] = (0, Q.useState)(null), [S, C] = (0, Q.useState)(!1), E;
    t[1] === a ? E = t[2] : (E = Ye(a), t[1] = a, t[2] = E);
    let D = E,
        O;
    t[3] !== a || t[4] !== o ? (O = Xe({
        invitePageUrl: a,
        postLogoutParamName: o
    }), t[3] = a, t[4] = o, t[5] = O) : O = t[5];
    let k = O,
        A, j;
    if (t[6] === f ? (A = t[7], j = t[8]) : (A = () => {
            if (f == null) return;
            let e = N(h(), Qe(f));
            g(e), x(t => t ?? e[0]?.sessionToken ?? null), y(!0)
        }, j = [f], t[6] = f, t[7] = A, t[8] = j), (0, Q.useEffect)(A, j), f == null || !_) {
        let e;
        return t[9] !== c.loadingTitle || t[10] !== l.wordmarkLabel || t[11] !== i ? (e = (0, $.jsx)(X, {
            title: c.loadingTitle,
            description: null,
            isStorageComplianceEnabled: i,
            wordmarkLabel: l.wordmarkLabel
        }), t[9] = c.loadingTitle, t[10] = l.wordmarkLabel, t[11] = i, t[12] = e) : e = t[12], e
    }
    if (!he(f)) {
        let e;
        t[13] !== c.accountLimitLogoutError || t[14] !== S || t[15] !== k || t[16] !== d ? (e = async () => {
            if (S) return;
            let e = h()?.sessionToken;
            if (!e) {
                V({
                    reason: u.AccountSwitcher,
                    authHistoryReason: `APP_ENTRY_AUTH_HISTORY_LOGOUT_REASON_LOGOUT`
                });
                return
            }
            C(!0);
            try {
                await ee({
                    sessionToken: e,
                    currentSessionToken: e,
                    postLogoutAction: `return_to_callback_url`,
                    postLogoutCallbackUrl: k,
                    analytics: {
                        source: s.AccountSwitcherAddAccountModal,
                        type: `single_account`
                    },
                    onSessionsChanged: () => {
                        g(T())
                    },
                    onNoNextSession: V
                })
            } catch (e) {
                let t = e;
                d.danger(c.accountLimitLogoutError, {
                    description: t instanceof Error ? t.message : String(t)
                }), C(!1)
            }
        }, t[13] = c.accountLimitLogoutError, t[14] = S, t[15] = k, t[16] = d, t[17] = e) : e = t[17];
        let a = e,
            o;
        t[18] !== c || t[19] !== r || t[20] !== n.email ? (o = r == null ? c.getLogoutRequiredDescriptionWithoutCurrentEmail(n.email) : c.getLogoutRequiredDescription({
            currentUserEmail: r,
            inviteEmail: n.email
        }), t[18] = c, t[19] = r, t[20] = n.email, t[21] = o) : o = t[21];
        let f = o,
            p;
        t[22] === a ? p = t[23] : (p = () => {
            a()
        }, t[22] = a, t[23] = p);
        let m;
        t[24] !== c.logoutButton || t[25] !== S || t[26] !== p ? (m = (0, $.jsx)(G, {
            color: `primary`,
            disabled: S,
            onClick: p,
            children: c.logoutButton
        }), t[24] = c.logoutButton, t[25] = S, t[26] = p, t[27] = m) : m = t[27];
        let _;
        return t[28] !== c.logoutRequiredTitle || t[29] !== f || t[30] !== l.wordmarkLabel || t[31] !== i || t[32] !== m ? (_ = (0, $.jsx)(X, {
            title: c.logoutRequiredTitle,
            description: f,
            isStorageComplianceEnabled: i,
            wordmarkLabel: l.wordmarkLabel,
            children: m
        }), t[28] = c.logoutRequiredTitle, t[29] = f, t[30] = l.wordmarkLabel, t[31] = i, t[32] = m, t[33] = _) : _ = t[33], _
    }
    if (m.length >= 2) {
        let e;
        if (t[34] !== m || t[35] !== b) {
            let n;
            t[37] === b ? n = t[38] : (n = e => e.sessionToken === b, t[37] = b, t[38] = n), e = m.find(n), t[34] = m, t[35] = b, t[36] = e
        } else e = t[36];
        let r = e,
            a;
        t[39] !== c.accountLimitLogoutError || t[40] !== S || t[41] !== k || t[42] !== r || t[43] !== d ? (a = async () => {
            if (r == null || S) return;
            C(!0);
            let e = h(),
                t = e ? e.sessionToken : void 0;
            try {
                await ee({
                    sessionToken: r.sessionToken,
                    currentSessionToken: t,
                    postLogoutAction: `return_to_callback_url`,
                    postLogoutCallbackUrl: k,
                    analytics: {
                        source: s.AccountSwitcherAddAccountModal,
                        type: `single_account`
                    },
                    onSessionsChanged: () => {
                        g(T())
                    },
                    onNoNextSession: V
                })
            } catch (e) {
                let t = e;
                d.danger(c.accountLimitLogoutError, {
                    description: t instanceof Error ? t.message : String(t)
                }), C(!1)
            }
        }, t[39] = c.accountLimitLogoutError, t[40] = S, t[41] = k, t[42] = r, t[43] = d, t[44] = a) : a = t[44];
        let o = a,
            u = c.accountLimitTitle,
            f;
        t[45] !== c || t[46] !== n.email ? (f = c.getAccountLimitDescription(n.email), t[45] = c, t[46] = n.email, t[47] = f) : f = t[47];
        let p = l.wordmarkLabel,
            _;
        if (t[48] !== m || t[49] !== c.unknownEmailLabel || t[50] !== c.unnamedAccountLabel || t[51] !== S || t[52] !== b) {
            let e;
            t[54] !== c.unknownEmailLabel || t[55] !== c.unnamedAccountLabel || t[56] !== S || t[57] !== b ? (e = e => {
                let t = $e({
                        account: e,
                        unknownEmailLabel: c.unknownEmailLabel,
                        unnamedAccountLabel: c.unnamedAccountLabel
                    }),
                    n = e.sessionToken === b;
                return (0, $.jsxs)(`button`, {
                    type: `button`,
                    className: `border-token-border-light hover:bg-token-bg-secondary flex w-full items-center gap-3 rounded-lg border px-3 py-2 text-start`,
                    disabled: S,
                    onClick: () => {
                        x(e.sessionToken)
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
            }, t[54] = c.unknownEmailLabel, t[55] = c.unnamedAccountLabel, t[56] = S, t[57] = b, t[58] = e) : e = t[58], _ = m.map(e), t[48] = m, t[49] = c.unknownEmailLabel, t[50] = c.unnamedAccountLabel, t[51] = S, t[52] = b, t[53] = _
        } else _ = t[53];
        let v;
        t[59] === _ ? v = t[60] : (v = (0, $.jsx)(`div`, {
            className: `flex w-full flex-col gap-2`,
            children: _
        }), t[59] = _, t[60] = v);
        let y = S || r == null,
            w;
        t[61] === o ? w = t[62] : (w = () => {
            o()
        }, t[61] = o, t[62] = w);
        let E;
        t[63] !== c.accountLimitConfirm || t[64] !== y || t[65] !== w ? (E = (0, $.jsx)(`div`, {
            className: `mt-2 flex w-full justify-end`,
            children: (0, $.jsx)(G, {
                type: `button`,
                color: `primary`,
                disabled: y,
                onClick: w,
                children: c.accountLimitConfirm
            })
        }), t[63] = c.accountLimitConfirm, t[64] = y, t[65] = w, t[66] = E) : E = t[66];
        let D;
        return t[67] !== c.accountLimitTitle || t[68] !== l.wordmarkLabel || t[69] !== i || t[70] !== v || t[71] !== E || t[72] !== f ? (D = (0, $.jsxs)(X, {
            title: u,
            description: f,
            isStorageComplianceEnabled: i,
            wordmarkLabel: p,
            children: [v, E]
        }), t[67] = c.accountLimitTitle, t[68] = l.wordmarkLabel, t[69] = i, t[70] = v, t[71] = E, t[72] = f, t[73] = D) : D = t[73], D
    }
    let M;
    return t[74] !== D || t[75] !== r || t[76] !== n || t[77] !== l || t[78] !== i ? (M = (0, $.jsx)(Ge, {
        ...l,
        inviteAuthContext: n,
        currentUserEmail: r,
        isStorageComplianceEnabled: i,
        callbackUrl: D
    }), t[74] = D, t[75] = r, t[76] = n, t[77] = l, t[78] = i, t[79] = M) : M = t[79], M
}

function tt() {
    "use forget";
    let e = (0, Z.c)(3),
        {
            data: t
        } = w(),
        n, r;
    return e[0] === t ? (n = e[1], r = e[2]) : (n = () => {
        t == null || !he(t) || N(h(), Qe(t))
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
    let l;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (l = {
        minHeight: `100dvh`
    }, t[2] = l) : l = t[2];
    let u;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (u = (0, $.jsx)(ge, {}), t[3] = u) : u = t[3];
    let d;
    t[4] === a ? d = t[5] : (d = (0, $.jsx)(de, {
        to: `/`,
        className: `text-token-text-primary absolute start-5 top-5 md:start-8 md:top-6`,
        "aria-label": a,
        children: u
    }), t[4] = a, t[5] = d);
    let f;
    t[6] === r ? f = t[7] : (f = r == null ? (0, $.jsx)(z, {
        className: `h-10 w-10`
    }) : null, t[6] = r, t[7] = f);
    let p;
    t[8] === n ? p = t[9] : (p = (0, $.jsx)(`h1`, {
        className: `text-2xl font-semibold`,
        children: n
    }), t[8] = n, t[9] = p);
    let m;
    t[10] === r ? m = t[11] : (m = r == null ? null : (0, $.jsx)(`p`, {
        className: `text-token-text-secondary text-sm`,
        children: r
    }), t[10] = r, t[11] = m);
    let h;
    t[12] !== o || t[13] !== f || t[14] !== p || t[15] !== m ? (h = (0, $.jsx)(`div`, {
        className: `relative flex w-full grow flex-col items-center justify-center text-center`,
        children: (0, $.jsxs)(`div`, {
            className: `flex w-full max-w-[440px] flex-col items-center gap-4`,
            children: [f, p, m, o]
        })
    }), t[12] = o, t[13] = f, t[14] = p, t[15] = m, t[16] = h) : h = t[16];
    let g;
    t[17] === i ? g = t[18] : (g = (0, $.jsx)(`div`, {
        className: `mt-10 flex flex-col items-center justify-center`,
        children: (0, $.jsx)(Oe, {
            isStorageComplianceEnabled: i
        })
    }), t[17] = i, t[18] = g);
    let _;
    t[19] !== d || t[20] !== h || t[21] !== g ? (_ = (0, $.jsxs)(`main`, {
        className: `relative flex grow flex-col items-center justify-between px-5 py-8 text-black md:px-6 dark:text-white`,
        children: [d, h, g]
    }), t[19] = d, t[20] = h, t[21] = g, t[22] = _) : _ = t[22];
    let v;
    t[23] === Symbol.for(`react.memo_cache_sentinel`) ? (v = (0, $.jsx)(c, {
        children: (0, $.jsx)(_e, {
            fixed: !0
        })
    }), t[23] = v) : v = t[23];
    let y;
    t[24] === _ ? y = t[25] : (y = (0, $.jsxs)(`div`, {
        className: `flex min-h-screen flex-col justify-between`,
        style: l,
        children: [_, v]
    }), t[24] = _, t[25] = y);
    let b;
    return t[26] !== s || t[27] !== y ? (b = (0, $.jsxs)($.Fragment, {
        children: [s, y]
    }), t[26] = s, t[27] = y, t[28] = b) : b = t[28], b
}
var Z, Q, $, nt = e((() => {
    Z = fe(), ne(), De(), ke(), d(), me(), i(), pe(), I(), F(), ve(), m(), R(), p(), re(), D(), L(), te(), _(), P(), O(), g(), C(), Q = t(ce()), oe(), Ue(), le(), $ = ie()
}));
export {
    Ye as a, We as c, et as i, Ge as n, Ze as o, X as r, nt as s, tt as t
};
//# sourceMappingURL=d754d344-hr2cw561kzg8orey.js.map