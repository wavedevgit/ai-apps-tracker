import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    A0 as r,
    Ait as i,
    E0 as a,
    Eit as o,
    F0 as s,
    Fz as c,
    IR as l,
    Iz as u,
    LF as d,
    LU as f,
    Lnt as p,
    Lz as m,
    N0 as h,
    Pit as g,
    QR as _,
    Sat as v,
    Sit as y,
    VR as b,
    _at as x,
    _it as S,
    _rt as C,
    a0 as w,
    bat as T,
    eE as E,
    est as D,
    ez as O,
    fr as k,
    gat as A,
    grt as j,
    iat as M,
    iz as N,
    kF as P,
    nP as F,
    oP as I,
    pr as L,
    q1 as R,
    rP as z,
    rz as B,
    sz as V,
    tP as H,
    tat as ee,
    w0 as te,
    yat as U,
    yit as ne,
    zU as re,
    znt as ie,
    zz as ae
} from "./4813494d-i89nb6zlze66idsz.js";
import {
    Bn as W,
    Nn as G,
    Nt as oe,
    Q as K,
    Rn as se,
    Vn as ce,
    Zt as le,
    an as ue,
    it as de,
    wn as fe
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    O8 as pe,
    Q4t as me,
    Z4t as he,
    hKn as ge,
    k8 as _e,
    pKn as ve
} from "./conversation-small-fh0oqifngkf5rvl1.js";
import {
    $x as ye,
    Qx as be,
    Xl as xe,
    Zl as Se
} from "./30901919-cmi3nh547dwrqkxv.js";
import {
    a as Ce,
    n as we,
    o as Te,
    t as Ee
} from "./c09d86e5-l8v3vhvcblt3jz6o.js";
import {
    a as De,
    i as Oe
} from "./9bbac052-mjb62pzzndei27yf.js";
import {
    n as ke,
    t as Ae
} from "./35711af7-lzrtsfcgycztizku.js";
import {
    a as je,
    c as Me,
    n as Ne,
    o as Pe,
    s as Fe,
    t as Ie
} from "./c982bafe-kq1c51e5wqgcg3s9.js";
import {
    n as Le,
    t as Re
} from "./966be48d-bidfasb67iq9o2d8.js";

function ze(e) {
    return e + 1
}

function Be(e) {
    return e.name !== `phone_number`
}
var Ve, q, J, He, Ue = e((() => {
    Ve = fe(), l(), Ce(), Fe(), V(), Le(), Ne(), we(), E(), xe(), be(), i(), je(), B(), q = t(ce()), se(), K(), J = W(), He = e => {
        "use forget";
        let t = (0, Ve.c)(60),
            {
                title: r,
                subtitle: i,
                mismatchSubtitle: a,
                connection: s,
                callbackUrl: c,
                authorizationParams: l
            } = e,
            u = oe(),
            d;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (d = {
            loginStrategy: `existing_user`
        }, t[0] = d) : d = t[0];
        let {
            optionsForDisplay: f
        } = Me(d), [p, m] = Te(!0), [h, g] = (0, q.useState)(0), [v, x] = (0, q.useState)(!1), S;
        t[1] !== l || t[2] !== c ? (S = Ie(c, l), t[1] = l, t[2] = c, t[3] = S) : S = t[3];
        let C = S,
            w;
        t[4] !== l || t[5] !== p || t[6] !== u || t[7] !== m || t[8] !== C ? (w = async (e, t) => {
            if (!p) {
                m(!0), x(!1);
                try {
                    await C({
                        screen_hint: `login_or_signup`,
                        ...e
                    }, () => {
                        b(l[y], t, _.ACCESS_FLOW_PAGE_TYPE_CHATGPT_WEB_LOGIN_PAGE)
                    })
                } catch {
                    x(!0), g(ze)
                }
                m(!1)
            }
        }, t[4] = l, t[5] = p, t[6] = u, t[7] = m, t[8] = C, t[9] = w) : w = t[9];
        let T = w,
            E, D, k, A, j, M, P, F, I;
        if (t[10] !== s || t[11] !== T || t[12] !== h || t[13] !== p || t[14] !== a || t[15] !== f || t[16] !== i || t[17] !== r) {
            let e = f.filter(Be);
            I = `flex flex-col items-center gap-3 text-center`, t[27] === r ? E = t[28] : (E = (0, J.jsx)(`h1`, {
                className: `text-2xl font-semibold`,
                children: r
            }), t[27] = r, t[28] = E), t[29] === i ? D = t[30] : (D = (0, J.jsx)(`p`, {
                className: `text-token-text-secondary text-sm`,
                children: i
            }), t[29] = i, t[30] = D), t[31] === a ? k = t[32] : (k = a ? (0, J.jsx)(`p`, {
                className: `text-token-text-secondary text-sm`,
                children: a
            }) : null, t[31] = a, t[32] = k), A = `flex w-full flex-col gap-3 px-6 pt-3`, j = p;
            let c;
            t[33] !== s || t[34] !== T ? (c = () => {
                T({
                    connection: s,
                    connection_provider: s.startsWith(`conn_`) || s.startsWith(`oaisaml_`) ? o.WorkOS.toString() : o.Auth0.toString()
                }, O.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_SSO)
            }, t[33] = s, t[34] = T, t[35] = c) : c = t[35];
            let l, u;
            t[36] === Symbol.for(`react.memo_cache_sentinel`) ? (l = (0, J.jsx)(Se, {
                className: `icon`
            }), u = (0, J.jsx)(G, {
                id: `AcceptInvitePage.sso.button.company`,
                defaultMessage: `Continue with company SSO`
            }), t[36] = l, t[37] = u) : (l = t[36], u = t[37]), t[38] !== p || t[39] !== c ? (M = (0, J.jsxs)(n, {
                type: `button`,
                color: `primary`,
                className: `h-[52px] rounded-full text-base`,
                contentWrapperClassName: `gap-2`,
                disabled: p,
                onClick: c,
                children: [l, u]
            }), t[38] = p, t[39] = c, t[40] = M) : M = t[40], P = e.length > 0 ? (0, J.jsx)(Re, {
                children: (0, J.jsx)(G, {
                    id: `AcceptInvitePage.sso.divider.or`,
                    defaultMessage: `or`
                })
            }) : null;
            let d;
            t[41] !== T || t[42] !== h || t[43] !== p ? (d = e => {
                if (e.name === `email`) return (0, J.jsxs)(n, {
                    type: `button`,
                    color: `secondary`,
                    className: `h-[52px] rounded-full text-base`,
                    contentWrapperClassName: `gap-2`,
                    disabled: p || e.tempDisabled,
                    onClick: () => {
                        T({
                            connection: `password`
                        }, O.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_PASSWORD)
                    },
                    children: [(0, J.jsx)(ye, {
                        className: `icon`
                    }), (0, J.jsx)(G, {
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
                        T({
                            connection: N[t]
                        }, Pe(t))
                    }
                }, `${t}-${h}`)
            }, t[41] = T, t[42] = h, t[43] = p, t[44] = d) : d = t[44], F = e.map(d), t[10] = s, t[11] = T, t[12] = h, t[13] = p, t[14] = a, t[15] = f, t[16] = i, t[17] = r, t[18] = E, t[19] = D, t[20] = k, t[21] = A, t[22] = j, t[23] = M, t[24] = P, t[25] = F, t[26] = I
        } else E = t[18], D = t[19], k = t[20], A = t[21], j = t[22], M = t[23], P = t[24], F = t[25], I = t[26];
        let L;
        t[45] !== A || t[46] !== j || t[47] !== M || t[48] !== P || t[49] !== F ? (L = (0, J.jsxs)(`div`, {
            className: A,
            "aria-busy": j,
            children: [M, P, F]
        }), t[45] = A, t[46] = j, t[47] = M, t[48] = P, t[49] = F, t[50] = L) : L = t[50];
        let R;
        t[51] === v ? R = t[52] : (R = v ? (0, J.jsx)(`p`, {
            role: `alert`,
            className: `text-token-interactive-label-warning-secondary text-sm`,
            children: (0, J.jsx)(G, {
                id: `AcceptInvitePage.sso.error.signIn`,
                defaultMessage: `Couldn't start sign-in. Please try again.`
            })
        }) : null, t[51] = v, t[52] = R);
        let z;
        return t[53] !== E || t[54] !== D || t[55] !== k || t[56] !== L || t[57] !== R || t[58] !== I ? (z = (0, J.jsxs)(`div`, {
            className: I,
            children: [E, D, k, L, R]
        }), t[53] = E, t[54] = D, t[55] = k, t[56] = L, t[57] = R, t[58] = I, t[59] = z) : z = t[59], z
    }
}));

function We({
    workspaceId: e,
    acceptWorkspaceId: t
}) {
    e && (U.deleteCookie(v.WorkspaceComputeResidencyCluster), U.setCookie(v.Workspace, e, {
        maxAge: S
    })), t ? U.setCookie(v.AcceptAccountId, t, {
        maxAge: 120
    }) : U.deleteCookie(v.AcceptAccountId)
}

function Ge(e) {
    "use forget";
    let t = (0, Z.c)(48),
        {
            inviteAuthContext: n,
            currentUserEmail: r,
            isStorageComplianceEnabled: i,
            browserTitle: a,
            metaDescription: o,
            title: s,
            subtitle: l,
            mismatchSubtitle: u,
            optionalSsoConnection: d,
            callbackUrl: f,
            wordmarkLabel: m,
            pageShownEventName: g
        } = e,
        _ = g === void 0 ? `chatgpt_accept_invite_page_shown` : g,
        [v] = (0, Q.useState)(qe),
        b;
    t[0] !== r || t[1] !== n.email ? (b = r != null && r.trim().toLowerCase() !== n.email.trim().toLowerCase(), t[0] = r, t[1] = n.email, t[2] = b) : b = t[2];
    let x = b,
        S;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (S = h(A()), t[3] = S) : S = t[3];
    let w;
    t[4] === n.acceptWorkspaceId ? w = t[5] : (w = n.acceptWorkspaceId ? {
        accept_wId: n.acceptWorkspaceId
    } : {}, t[4] = n.acceptWorkspaceId, t[5] = w);
    let T;
    t[6] !== v || t[7] !== n.email || t[8] !== w ? (T = {
        ...S,
        login_hint: n.email,
        ...w,
        [y]: v
    }, t[6] = v, t[7] = n.email, t[8] = w, t[9] = T) : T = t[9];
    let E = T,
        D;
    t[10] === f ? D = t[11] : (D = new URL(f, `https://chatgpt.com`), t[10] = f, t[11] = D);
    let O = D.search,
        k, j;
    t[12] !== v || t[13] !== n.workspaceId || t[14] !== O || t[15] !== x || t[16] !== _ ? (k = () => {
        let e = new URLSearchParams(O),
            t = e.get(`aiId`),
            r = e.get(`eid`),
            i = {
                authSessionLoggingId: v,
                inviteId: t && /^[a-zA-Z0-9_-]{1,128}$/.test(t) ? t : void 0,
                entryId: r && ue(r) ? r : void 0,
                isAutomated: navigator.webdriver
            },
            a = p.logStructuredEvent(`ChatgptInviteLoginPageViewed`, {
                legacyStatsigEventName: _,
                invitedWorkspaceId: n.workspaceId ?? void 0,
                isAccountMismatch: x,
                ...i
            });
        C(_, void 0, {
            workspace_id: n.workspaceId ?? ``,
            is_logged_in_as_different_email: String(x),
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
    }, j = [O, v, n.workspaceId, x, _], t[12] = v, t[13] = n.workspaceId, t[14] = O, t[15] = x, t[16] = _, t[17] = k, t[18] = j) : (k = t[17], j = t[18]), (0, Q.useEffect)(k, j);
    let M;
    t[19] === a ? M = t[20] : (M = (0, $.jsx)(`title`, {
        children: a
    }), t[19] = a, t[20] = M);
    let N;
    t[21] === o ? N = t[22] : (N = (0, $.jsx)(`meta`, {
        name: `description`,
        content: o
    }), t[21] = o, t[22] = N);
    let P;
    t[23] === Symbol.for(`react.memo_cache_sentinel`) ? (P = {
        minHeight: `100dvh`
    }, t[23] = P) : P = t[23];
    let F;
    t[24] === Symbol.for(`react.memo_cache_sentinel`) ? (F = (0, $.jsx)(pe, {}), t[24] = F) : F = t[24];
    let I;
    t[25] === m ? I = t[26] : (I = (0, $.jsx)(de, {
        to: `/`,
        className: `text-token-text-primary absolute start-5 top-5 md:start-8 md:top-6`,
        "aria-label": m,
        children: F
    }), t[25] = m, t[26] = I);
    let L;
    t[27] !== E || t[28] !== f || t[29] !== n.email || t[30] !== u || t[31] !== d || t[32] !== l || t[33] !== s ? (L = (0, $.jsx)(`div`, {
        className: `relative flex w-full grow flex-col items-center justify-center`,
        children: (0, $.jsx)(`div`, {
            className: `mt-5 w-full max-w-[440px]`,
            children: d ? (0, $.jsx)(He, {
                title: s,
                subtitle: l,
                mismatchSubtitle: u,
                connection: d,
                callbackUrl: Je(f),
                authorizationParams: E
            }) : (0, $.jsx)(Ae, {
                isUsernameOnTop: !0,
                onClose: Ke,
                title: s,
                subtitle: l,
                mutedSubtitle: u,
                initialEmail: n.email,
                callbackUrl: f,
                authorizationParams: E,
                isStayLoggedOutVisible: !1,
                stayLoggedOutPlacement: `bottom`,
                googleButtonColor: `secondary`,
                isInModal: !1,
                collapsedLoginVariant: `none`
            })
        })
    }), t[27] = E, t[28] = f, t[29] = n.email, t[30] = u, t[31] = d, t[32] = l, t[33] = s, t[34] = L) : L = t[34];
    let R;
    t[35] === i ? R = t[36] : (R = (0, $.jsx)(`div`, {
        className: `mt-10 flex flex-col items-center justify-center`,
        children: (0, $.jsx)(Oe, {
            isStorageComplianceEnabled: i
        })
    }), t[35] = i, t[36] = R);
    let z;
    t[37] !== I || t[38] !== L || t[39] !== R ? (z = (0, $.jsxs)(`main`, {
        className: `relative flex grow flex-col items-center justify-between px-5 py-8 text-black md:px-6 dark:text-white`,
        children: [I, L, R]
    }), t[37] = I, t[38] = L, t[39] = R, t[40] = z) : z = t[40];
    let B;
    t[41] === Symbol.for(`react.memo_cache_sentinel`) ? (B = (0, $.jsx)(c, {
        children: (0, $.jsx)(ve, {
            fixed: !0
        })
    }), t[41] = B) : B = t[41];
    let V;
    t[42] === z ? V = t[43] : (V = (0, $.jsxs)(`div`, {
        className: `flex min-h-screen flex-col justify-between`,
        style: P,
        children: [z, B]
    }), t[42] = z, t[43] = V);
    let H;
    return t[44] !== N || t[45] !== V || t[46] !== M ? (H = (0, $.jsxs)($.Fragment, {
        children: [M, N, V]
    }), t[44] = N, t[45] = V, t[46] = M, t[47] = H) : H = t[47], H
}

function Ke() {}

function qe() {
    return r(), te()
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
        a = F(e.phoneNumber);
    return !e.email && a != null ? `${i} (${a})` : r
}

function et(e) {
    "use forget";
    let t = (0, Z.c)(80),
        {
            inviteAuthContext: r,
            currentUserEmail: i,
            isStorageComplianceEnabled: a,
            invitePageUrl: o,
            postLogoutParamName: s,
            copy: c,
            inviteLoginPageProps: l
        } = e,
        u = re(),
        {
            data: d
        } = w(),
        f;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (f = [], t[0] = f) : f = t[0];
    let [p, m] = (0, Q.useState)(f), [h, _] = (0, Q.useState)(!1), [v, y] = (0, Q.useState)(null), [b, x] = (0, Q.useState)(!1), S;
    t[1] === o ? S = t[2] : (S = Ye(o), t[1] = o, t[2] = S);
    let C = S,
        T;
    t[3] !== o || t[4] !== s ? (T = Xe({
        invitePageUrl: o,
        postLogoutParamName: s
    }), t[3] = o, t[4] = s, t[5] = T) : T = t[5];
    let E = T,
        O, k;
    if (t[6] === d ? (O = t[7], k = t[8]) : (O = () => {
            if (d == null) return;
            let e = I(D(), Qe(d));
            m(e), y(t => t ?? e[0]?.sessionToken ?? null), _(!0)
        }, k = [d], t[6] = d, t[7] = O, t[8] = k), (0, Q.useEffect)(O, k), d == null || !h) {
        let e;
        return t[9] !== c.loadingTitle || t[10] !== l.wordmarkLabel || t[11] !== a ? (e = (0, $.jsx)(X, {
            title: c.loadingTitle,
            description: null,
            isStorageComplianceEnabled: a,
            wordmarkLabel: l.wordmarkLabel
        }), t[9] = c.loadingTitle, t[10] = l.wordmarkLabel, t[11] = a, t[12] = e) : e = t[12], e
    }
    if (!he(d)) {
        let e;
        t[13] !== c.accountLimitLogoutError || t[14] !== b || t[15] !== E || t[16] !== u ? (e = async () => {
            if (b) return;
            let e = D()?.sessionToken;
            if (!e) {
                g({
                    reason: ee.AccountSwitcher,
                    authHistoryReason: `APP_ENTRY_AUTH_HISTORY_LOGOUT_REASON_LOGOUT`
                });
                return
            }
            x(!0);
            try {
                await L({
                    sessionToken: e,
                    currentSessionToken: e,
                    postLogoutAction: `return_to_callback_url`,
                    postLogoutCallbackUrl: E,
                    analytics: {
                        source: P.AccountSwitcherAddAccountModal,
                        type: `single_account`
                    },
                    onSessionsChanged: () => {
                        m(H())
                    },
                    onNoNextSession: g
                })
            } catch (e) {
                let t = e;
                u.danger(c.accountLimitLogoutError, {
                    description: t instanceof Error ? t.message : String(t)
                }), x(!1)
            }
        }, t[13] = c.accountLimitLogoutError, t[14] = b, t[15] = E, t[16] = u, t[17] = e) : e = t[17];
        let o = e,
            s;
        t[18] !== c || t[19] !== i || t[20] !== r.email ? (s = i == null ? c.getLogoutRequiredDescriptionWithoutCurrentEmail(r.email) : c.getLogoutRequiredDescription({
            currentUserEmail: i,
            inviteEmail: r.email
        }), t[18] = c, t[19] = i, t[20] = r.email, t[21] = s) : s = t[21];
        let d = s,
            f;
        t[22] === o ? f = t[23] : (f = () => {
            o()
        }, t[22] = o, t[23] = f);
        let p;
        t[24] !== c.logoutButton || t[25] !== b || t[26] !== f ? (p = (0, $.jsx)(n, {
            color: `primary`,
            disabled: b,
            onClick: f,
            children: c.logoutButton
        }), t[24] = c.logoutButton, t[25] = b, t[26] = f, t[27] = p) : p = t[27];
        let h;
        return t[28] !== c.logoutRequiredTitle || t[29] !== d || t[30] !== l.wordmarkLabel || t[31] !== a || t[32] !== p ? (h = (0, $.jsx)(X, {
            title: c.logoutRequiredTitle,
            description: d,
            isStorageComplianceEnabled: a,
            wordmarkLabel: l.wordmarkLabel,
            children: p
        }), t[28] = c.logoutRequiredTitle, t[29] = d, t[30] = l.wordmarkLabel, t[31] = a, t[32] = p, t[33] = h) : h = t[33], h
    }
    if (p.length >= 2) {
        let e;
        if (t[34] !== p || t[35] !== v) {
            let n;
            t[37] === v ? n = t[38] : (n = e => e.sessionToken === v, t[37] = v, t[38] = n), e = p.find(n), t[34] = p, t[35] = v, t[36] = e
        } else e = t[36];
        let i = e,
            o;
        t[39] !== c.accountLimitLogoutError || t[40] !== b || t[41] !== E || t[42] !== i || t[43] !== u ? (o = async () => {
            if (i == null || b) return;
            x(!0);
            let e = D(),
                t = e ? e.sessionToken : void 0;
            try {
                await L({
                    sessionToken: i.sessionToken,
                    currentSessionToken: t,
                    postLogoutAction: `return_to_callback_url`,
                    postLogoutCallbackUrl: E,
                    analytics: {
                        source: P.AccountSwitcherAddAccountModal,
                        type: `single_account`
                    },
                    onSessionsChanged: () => {
                        m(H())
                    },
                    onNoNextSession: g
                })
            } catch (e) {
                let t = e;
                u.danger(c.accountLimitLogoutError, {
                    description: t instanceof Error ? t.message : String(t)
                }), x(!1)
            }
        }, t[39] = c.accountLimitLogoutError, t[40] = b, t[41] = E, t[42] = i, t[43] = u, t[44] = o) : o = t[44];
        let s = o,
            d = c.accountLimitTitle,
            f;
        t[45] !== c || t[46] !== r.email ? (f = c.getAccountLimitDescription(r.email), t[45] = c, t[46] = r.email, t[47] = f) : f = t[47];
        let h = l.wordmarkLabel,
            _;
        if (t[48] !== p || t[49] !== c.unknownEmailLabel || t[50] !== c.unnamedAccountLabel || t[51] !== b || t[52] !== v) {
            let e;
            t[54] !== c.unknownEmailLabel || t[55] !== c.unnamedAccountLabel || t[56] !== b || t[57] !== v ? (e = e => {
                let t = $e({
                        account: e,
                        unknownEmailLabel: c.unknownEmailLabel,
                        unnamedAccountLabel: c.unnamedAccountLabel
                    }),
                    n = e.sessionToken === v;
                return (0, $.jsxs)(`button`, {
                    type: `button`,
                    className: `border-token-border-light hover:bg-token-bg-secondary flex w-full items-center gap-3 rounded-lg border px-3 py-2 text-start`,
                    disabled: b,
                    onClick: () => {
                        y(e.sessionToken)
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
            }, t[54] = c.unknownEmailLabel, t[55] = c.unnamedAccountLabel, t[56] = b, t[57] = v, t[58] = e) : e = t[58], _ = p.map(e), t[48] = p, t[49] = c.unknownEmailLabel, t[50] = c.unnamedAccountLabel, t[51] = b, t[52] = v, t[53] = _
        } else _ = t[53];
        let S;
        t[59] === _ ? S = t[60] : (S = (0, $.jsx)(`div`, {
            className: `flex w-full flex-col gap-2`,
            children: _
        }), t[59] = _, t[60] = S);
        let C = b || i == null,
            w;
        t[61] === s ? w = t[62] : (w = () => {
            s()
        }, t[61] = s, t[62] = w);
        let T;
        t[63] !== c.accountLimitConfirm || t[64] !== C || t[65] !== w ? (T = (0, $.jsx)(`div`, {
            className: `mt-2 flex w-full justify-end`,
            children: (0, $.jsx)(n, {
                type: `button`,
                color: `primary`,
                disabled: C,
                onClick: w,
                children: c.accountLimitConfirm
            })
        }), t[63] = c.accountLimitConfirm, t[64] = C, t[65] = w, t[66] = T) : T = t[66];
        let O;
        return t[67] !== c.accountLimitTitle || t[68] !== l.wordmarkLabel || t[69] !== a || t[70] !== S || t[71] !== T || t[72] !== f ? (O = (0, $.jsxs)(X, {
            title: d,
            description: f,
            isStorageComplianceEnabled: a,
            wordmarkLabel: h,
            children: [S, T]
        }), t[67] = c.accountLimitTitle, t[68] = l.wordmarkLabel, t[69] = a, t[70] = S, t[71] = T, t[72] = f, t[73] = O) : O = t[73], O
    }
    let A;
    return t[74] !== C || t[75] !== i || t[76] !== r || t[77] !== l || t[78] !== a ? (A = (0, $.jsx)(Ge, {
        ...l,
        inviteAuthContext: r,
        currentUserEmail: i,
        isStorageComplianceEnabled: a,
        callbackUrl: C
    }), t[74] = C, t[75] = i, t[76] = r, t[77] = l, t[78] = a, t[79] = A) : A = t[79], A
}

function tt() {
    "use forget";
    let e = (0, Z.c)(3),
        {
            data: t
        } = w(),
        n, r;
    return e[0] === t ? (n = e[1], r = e[2]) : (n = () => {
        t == null || !he(t) || I(D(), Qe(t))
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
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (u = (0, $.jsx)(pe, {}), t[3] = u) : u = t[3];
    let d;
    t[4] === a ? d = t[5] : (d = (0, $.jsx)(de, {
        to: `/`,
        className: `text-token-text-primary absolute start-5 top-5 md:start-8 md:top-6`,
        "aria-label": a,
        children: u
    }), t[4] = a, t[5] = d);
    let f;
    t[6] === r ? f = t[7] : (f = r == null ? (0, $.jsx)(m, {
        className: `h-10 w-10`
    }) : null, t[6] = r, t[7] = f);
    let p;
    t[8] === n ? p = t[9] : (p = (0, $.jsx)(`h1`, {
        className: `text-2xl font-semibold`,
        children: n
    }), t[8] = n, t[9] = p);
    let h;
    t[10] === r ? h = t[11] : (h = r == null ? null : (0, $.jsx)(`p`, {
        className: `text-token-text-secondary text-sm`,
        children: r
    }), t[10] = r, t[11] = h);
    let g;
    t[12] !== o || t[13] !== f || t[14] !== p || t[15] !== h ? (g = (0, $.jsx)(`div`, {
        className: `relative flex w-full grow flex-col items-center justify-center text-center`,
        children: (0, $.jsxs)(`div`, {
            className: `flex w-full max-w-[440px] flex-col items-center gap-4`,
            children: [f, p, h, o]
        })
    }), t[12] = o, t[13] = f, t[14] = p, t[15] = h, t[16] = g) : g = t[16];
    let _;
    t[17] === i ? _ = t[18] : (_ = (0, $.jsx)(`div`, {
        className: `mt-10 flex flex-col items-center justify-center`,
        children: (0, $.jsx)(Oe, {
            isStorageComplianceEnabled: i
        })
    }), t[17] = i, t[18] = _);
    let v;
    t[19] !== d || t[20] !== g || t[21] !== _ ? (v = (0, $.jsxs)(`main`, {
        className: `relative flex grow flex-col items-center justify-between px-5 py-8 text-black md:px-6 dark:text-white`,
        children: [d, g, _]
    }), t[19] = d, t[20] = g, t[21] = _, t[22] = v) : v = t[22];
    let y;
    t[23] === Symbol.for(`react.memo_cache_sentinel`) ? (y = (0, $.jsx)(c, {
        children: (0, $.jsx)(ve, {
            fixed: !0
        })
    }), t[23] = y) : y = t[23];
    let b;
    t[24] === v ? b = t[25] : (b = (0, $.jsxs)(`div`, {
        className: `flex min-h-screen flex-col justify-between`,
        style: l,
        children: [v, y]
    }), t[24] = v, t[25] = b);
    let x;
    return t[26] !== s || t[27] !== b ? (x = (0, $.jsxs)($.Fragment, {
        children: [s, b]
    }), t[26] = s, t[27] = b, t[28] = x) : x = t[28], x
}
var Z, Q, $, nt = e((() => {
    Z = fe(), ie(), De(), ke(), E(), ge(), ne(), _e(), a(), k(), me(), u(), ae(), R(), f(), z(), d(), i(), s(), T(), x(), M(), j(), Q = t(ce()), K(), Ue(), le(), $ = W()
}));
export {
    Ye as a, We as c, et as i, Ge as n, Ze as o, X as r, nt as s, tt as t
};
//# sourceMappingURL=d754d344-lb68oie6xxki5tbv.js.map