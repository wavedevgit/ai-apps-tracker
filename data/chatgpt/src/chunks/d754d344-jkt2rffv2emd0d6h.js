import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $R as n,
    AR as r,
    Aot as i,
    CF as a,
    Dz as o,
    FR as s,
    I1 as c,
    J1 as l,
    JT as u,
    KR as d,
    Kit as f,
    Knt as p,
    Oz as m,
    Pit as h,
    Qit as g,
    Qrt as _,
    S0 as v,
    VU as y,
    WR as b,
    XN as x,
    XR as S,
    Xit as C,
    YN as w,
    YR as T,
    Yit as E,
    Yrt as D,
    ZN as O,
    eP as k,
    fr as A,
    h0 as j,
    hnt as M,
    jF as N,
    jit as P,
    jz as F,
    kz as I,
    nit as L,
    oit as R,
    p0 as z,
    pnt as ee,
    pr as B,
    qT as V,
    qit as te,
    qnt as ne,
    qrt as re,
    uit as H,
    w0 as ie,
    y0 as ae,
    zU as oe
} from "./4813494d-ed29bs6yiwucn7st.js";
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
    C8 as pe,
    H4t as me,
    S8 as he,
    V4t as ge,
    jGn as _e,
    kGn as ve
} from "./conversation-small-l6tnsr2xfn2d55kk.js";
import {
    $x as ye,
    Qx as be,
    Xl as xe,
    Zl as Se
} from "./30901919-om7b3qf5hp4j9x4l.js";
import {
    a as Ce,
    n as we,
    o as Te,
    t as Ee
} from "./c09d86e5-6ikr9dmqsfvpijxw.js";
import {
    a as De,
    i as Oe
} from "./9bbac052-b1a8gnc2igp2jf9d.js";
import {
    n as ke,
    t as Ae
} from "./35711af7-lfejtv102t5rry1q.js";
import {
    a as je,
    c as Me,
    n as Ne,
    o as Pe,
    s as Fe,
    t as Ie
} from "./c982bafe-iwu294qc3prrakt8.js";
import {
    n as Le,
    t as Re
} from "./966be48d-n6xjoodz3xdd7qzw.js";

function ze(e) {
    return e + 1
}

function Be(e) {
    return e.name !== `phone_number`
}
var Ve, q, J, He, Ue = e((() => {
    Ve = K(), r(), Ce(), Fe(), n(), Le(), Ne(), we(), u(), xe(), be(), R(), je(), T(), q = t(G()), le(), se(), J = U(), He = e => {
        "use forget";
        let t = (0, Ve.c)(60),
            {
                title: n,
                subtitle: r,
                mismatchSubtitle: i,
                connection: a,
                callbackUrl: o,
                authorizationParams: c
            } = e,
            l = ce(),
            u;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (u = {
            loginStrategy: `existing_user`
        }, t[0] = u) : u = t[0];
        let {
            optionsForDisplay: f
        } = Me(u), [p, m] = Te(!0), [h, g] = (0, q.useState)(0), [v, y] = (0, q.useState)(!1), x;
        t[1] !== c || t[2] !== o ? (x = Ie(o, c), t[1] = c, t[2] = o, t[3] = x) : x = t[3];
        let C = x,
            w;
        t[4] !== c || t[5] !== p || t[6] !== l || t[7] !== m || t[8] !== C ? (w = async (e, t) => {
            if (!p) {
                m(!0), y(!1);
                try {
                    await C({
                        screen_hint: `login_or_signup`,
                        ...e
                    }, () => {
                        s(c[_], t, b.ACCESS_FLOW_PAGE_TYPE_CHATGPT_WEB_LOGIN_PAGE)
                    })
                } catch {
                    y(!0), g(ze)
                }
                m(!1)
            }
        }, t[4] = c, t[5] = p, t[6] = l, t[7] = m, t[8] = C, t[9] = w) : w = t[9];
        let T = w,
            E, D, O, k, A, j, M, N, P;
        if (t[10] !== a || t[11] !== T || t[12] !== h || t[13] !== p || t[14] !== i || t[15] !== f || t[16] !== r || t[17] !== n) {
            let e = f.filter(Be);
            P = `flex flex-col items-center gap-3 text-center`, t[27] === n ? E = t[28] : (E = (0, J.jsx)(`h1`, {
                className: `text-2xl font-semibold`,
                children: n
            }), t[27] = n, t[28] = E), t[29] === r ? D = t[30] : (D = (0, J.jsx)(`p`, {
                className: `text-token-text-secondary text-sm`,
                children: r
            }), t[29] = r, t[30] = D), t[31] === i ? O = t[32] : (O = i ? (0, J.jsx)(`p`, {
                className: `text-token-text-secondary text-sm`,
                children: i
            }) : null, t[31] = i, t[32] = O), k = `flex w-full flex-col gap-3 px-6 pt-3`, A = p;
            let o;
            t[33] !== a || t[34] !== T ? (o = () => {
                T({
                    connection: a,
                    connection_provider: a.startsWith(`conn_`) || a.startsWith(`oaisaml_`) ? L.WorkOS.toString() : L.Auth0.toString()
                }, d.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_SSO)
            }, t[33] = a, t[34] = T, t[35] = o) : o = t[35];
            let s, c;
            t[36] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, J.jsx)(Se, {
                className: `icon`
            }), c = (0, J.jsx)(W, {
                id: `AcceptInvitePage.sso.button.company`,
                defaultMessage: `Continue with company SSO`
            }), t[36] = s, t[37] = c) : (s = t[36], c = t[37]), t[38] !== p || t[39] !== o ? (j = (0, J.jsxs)(V, {
                type: `button`,
                color: `primary`,
                className: `h-[52px] rounded-full text-base`,
                contentWrapperClassName: `gap-2`,
                disabled: p,
                onClick: o,
                children: [s, c]
            }), t[38] = p, t[39] = o, t[40] = j) : j = t[40], M = e.length > 0 ? (0, J.jsx)(Re, {
                children: (0, J.jsx)(W, {
                    id: `AcceptInvitePage.sso.divider.or`,
                    defaultMessage: `or`
                })
            }) : null;
            let l;
            t[41] !== T || t[42] !== h || t[43] !== p ? (l = e => {
                if (e.name === `email`) return (0, J.jsxs)(V, {
                    type: `button`,
                    color: `secondary`,
                    className: `h-[52px] rounded-full text-base`,
                    contentWrapperClassName: `gap-2`,
                    disabled: p || e.tempDisabled,
                    onClick: () => {
                        T({
                            connection: `password`
                        }, d.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_PASSWORD)
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
                    disabled: p || e.tempDisabled,
                    onClick: () => {
                        T({
                            connection: S[t]
                        }, Pe(t))
                    }
                }, `${t}-${h}`)
            }, t[41] = T, t[42] = h, t[43] = p, t[44] = l) : l = t[44], N = e.map(l), t[10] = a, t[11] = T, t[12] = h, t[13] = p, t[14] = i, t[15] = f, t[16] = r, t[17] = n, t[18] = E, t[19] = D, t[20] = O, t[21] = k, t[22] = A, t[23] = j, t[24] = M, t[25] = N, t[26] = P
        } else E = t[18], D = t[19], O = t[20], k = t[21], A = t[22], j = t[23], M = t[24], N = t[25], P = t[26];
        let F;
        t[45] !== k || t[46] !== A || t[47] !== j || t[48] !== M || t[49] !== N ? (F = (0, J.jsxs)(`div`, {
            className: k,
            "aria-busy": A,
            children: [j, M, N]
        }), t[45] = k, t[46] = A, t[47] = j, t[48] = M, t[49] = N, t[50] = F) : F = t[50];
        let I;
        t[51] === v ? I = t[52] : (I = v ? (0, J.jsx)(`p`, {
            role: `alert`,
            className: `text-token-interactive-label-warning-secondary text-sm`,
            children: (0, J.jsx)(W, {
                id: `AcceptInvitePage.sso.error.signIn`,
                defaultMessage: `Couldn't start sign-in. Please try again.`
            })
        }) : null, t[51] = v, t[52] = I);
        let R;
        return t[53] !== E || t[54] !== D || t[55] !== O || t[56] !== F || t[57] !== I || t[58] !== P ? (R = (0, J.jsxs)(`div`, {
            className: P,
            children: [E, D, O, F, I]
        }), t[53] = E, t[54] = D, t[55] = O, t[56] = F, t[57] = I, t[58] = P, t[59] = R) : R = t[59], R
    }
}));

function We({
    workspaceId: e,
    acceptWorkspaceId: t
}) {
    e && (E.deleteCookie(g.WorkspaceComputeResidencyCluster), E.setCookie(g.Workspace, e, {
        maxAge: re
    })), t ? E.setCookie(g.AcceptAccountId, t, {
        maxAge: 120
    }) : E.deleteCookie(g.AcceptAccountId)
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
            title: c,
            subtitle: l,
            mismatchSubtitle: u,
            optionalSsoConnection: d,
            callbackUrl: p,
            wordmarkLabel: m,
            pageShownEventName: h
        } = e,
        g = h === void 0 ? `chatgpt_accept_invite_page_shown` : h,
        [y] = (0, Q.useState)(qe),
        b;
    t[0] !== r || t[1] !== n.email ? (b = r != null && r.trim().toLowerCase() !== n.email.trim().toLowerCase(), t[0] = r, t[1] = n.email, t[2] = b) : b = t[2];
    let x = b,
        S;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (S = v(f()), t[3] = S) : S = t[3];
    let C;
    t[4] === n.acceptWorkspaceId ? C = t[5] : (C = n.acceptWorkspaceId ? {
        accept_wId: n.acceptWorkspaceId
    } : {}, t[4] = n.acceptWorkspaceId, t[5] = C);
    let w;
    t[6] !== y || t[7] !== n.email || t[8] !== C ? (w = {
        ...S,
        login_hint: n.email,
        ...C,
        [_]: y
    }, t[6] = y, t[7] = n.email, t[8] = C, t[9] = w) : w = t[9];
    let T = w,
        E;
    t[10] === p ? E = t[11] : (E = new URL(p, `https://chatgpt.com`), t[10] = p, t[11] = E);
    let D = E.search,
        O, k;
    t[12] !== y || t[13] !== n.workspaceId || t[14] !== D || t[15] !== x || t[16] !== g ? (O = () => {
        let e = new URLSearchParams(D),
            t = e.get(`aiId`),
            r = e.get(`eid`),
            i = {
                authSessionLoggingId: y,
                inviteId: t && /^[a-zA-Z0-9_-]{1,128}$/.test(t) ? t : void 0,
                entryId: r && de(r) ? r : void 0,
                isAutomated: navigator.webdriver
            },
            a = ee.logStructuredEvent(`ChatgptInviteLoginPageViewed`, {
                legacyStatsigEventName: g,
                invitedWorkspaceId: n.workspaceId ?? void 0,
                isAccountMismatch: x,
                ...i
            });
        ne(g, void 0, {
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
    }, k = [D, y, n.workspaceId, x, g], t[12] = y, t[13] = n.workspaceId, t[14] = D, t[15] = x, t[16] = g, t[17] = O, t[18] = k) : (O = t[17], k = t[18]), (0, Q.useEffect)(O, k);
    let A;
    t[19] === a ? A = t[20] : (A = (0, $.jsx)(`title`, {
        children: a
    }), t[19] = a, t[20] = A);
    let j;
    t[21] === s ? j = t[22] : (j = (0, $.jsx)(`meta`, {
        name: `description`,
        content: s
    }), t[21] = s, t[22] = j);
    let M;
    t[23] === Symbol.for(`react.memo_cache_sentinel`) ? (M = {
        minHeight: `100dvh`
    }, t[23] = M) : M = t[23];
    let N;
    t[24] === Symbol.for(`react.memo_cache_sentinel`) ? (N = (0, $.jsx)(he, {}), t[24] = N) : N = t[24];
    let P;
    t[25] === m ? P = t[26] : (P = (0, $.jsx)(fe, {
        to: `/`,
        className: `text-token-text-primary absolute start-5 top-5 md:start-8 md:top-6`,
        "aria-label": m,
        children: N
    }), t[25] = m, t[26] = P);
    let F;
    t[27] !== T || t[28] !== p || t[29] !== n.email || t[30] !== u || t[31] !== d || t[32] !== l || t[33] !== c ? (F = (0, $.jsx)(`div`, {
        className: `relative flex w-full grow flex-col items-center justify-center`,
        children: (0, $.jsx)(`div`, {
            className: `mt-5 w-full max-w-[440px]`,
            children: d ? (0, $.jsx)(He, {
                title: c,
                subtitle: l,
                mismatchSubtitle: u,
                connection: d,
                callbackUrl: Je(p),
                authorizationParams: T
            }) : (0, $.jsx)(Ae, {
                isUsernameOnTop: !0,
                onClose: Ke,
                title: c,
                subtitle: l,
                mutedSubtitle: u,
                initialEmail: n.email,
                callbackUrl: p,
                authorizationParams: T,
                isStayLoggedOutVisible: !1,
                stayLoggedOutPlacement: `bottom`,
                googleButtonColor: `secondary`,
                isInModal: !1,
                collapsedLoginVariant: `none`
            })
        })
    }), t[27] = T, t[28] = p, t[29] = n.email, t[30] = u, t[31] = d, t[32] = l, t[33] = c, t[34] = F) : F = t[34];
    let I;
    t[35] === i ? I = t[36] : (I = (0, $.jsx)(`div`, {
        className: `mt-10 flex flex-col items-center justify-center`,
        children: (0, $.jsx)(Oe, {
            isStorageComplianceEnabled: i
        })
    }), t[35] = i, t[36] = I);
    let L;
    t[37] !== P || t[38] !== F || t[39] !== I ? (L = (0, $.jsxs)(`main`, {
        className: `relative flex grow flex-col items-center justify-between px-5 py-8 text-black md:px-6 dark:text-white`,
        children: [P, F, I]
    }), t[37] = P, t[38] = F, t[39] = I, t[40] = L) : L = t[40];
    let R;
    t[41] === Symbol.for(`react.memo_cache_sentinel`) ? (R = (0, $.jsx)(o, {
        children: (0, $.jsx)(ve, {
            fixed: !0
        })
    }), t[41] = R) : R = t[41];
    let z;
    t[42] === L ? z = t[43] : (z = (0, $.jsxs)(`div`, {
        className: `flex min-h-screen flex-col justify-between`,
        style: M,
        children: [L, R]
    }), t[42] = L, t[43] = z);
    let B;
    return t[44] !== j || t[45] !== z || t[46] !== A ? (B = (0, $.jsxs)($.Fragment, {
        children: [A, j, z]
    }), t[44] = j, t[45] = z, t[46] = A, t[47] = B) : B = t[47], B
}

function Ke() {}

function qe() {
    return ae(), z()
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
        a = x(e.phoneNumber);
    return !e.email && a != null ? `${i} (${a})` : r
}

function et(e) {
    "use forget";
    let t = (0, Z.c)(80),
        {
            inviteAuthContext: n,
            currentUserEmail: r,
            isStorageComplianceEnabled: o,
            invitePageUrl: s,
            postLogoutParamName: c,
            copy: u,
            inviteLoginPageProps: d
        } = e,
        f = y(),
        {
            data: p
        } = l(),
        m;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (m = [], t[0] = m) : m = t[0];
    let [h, g] = (0, Q.useState)(m), [_, v] = (0, Q.useState)(!1), [b, x] = (0, Q.useState)(null), [S, C] = (0, Q.useState)(!1), T;
    t[1] === s ? T = t[2] : (T = Ye(s), t[1] = s, t[2] = T);
    let E = T,
        D;
    t[3] !== s || t[4] !== c ? (D = Xe({
        invitePageUrl: s,
        postLogoutParamName: c
    }), t[3] = s, t[4] = c, t[5] = D) : D = t[5];
    let O = D,
        A, j;
    if (t[6] === p ? (A = t[7], j = t[8]) : (A = () => {
            if (p == null) return;
            let e = k(i(), Qe(p));
            g(e), x(t => t ?? e[0]?.sessionToken ?? null), v(!0)
        }, j = [p], t[6] = p, t[7] = A, t[8] = j), (0, Q.useEffect)(A, j), p == null || !_) {
        let e;
        return t[9] !== u.loadingTitle || t[10] !== d.wordmarkLabel || t[11] !== o ? (e = (0, $.jsx)(X, {
            title: u.loadingTitle,
            description: null,
            isStorageComplianceEnabled: o,
            wordmarkLabel: d.wordmarkLabel
        }), t[9] = u.loadingTitle, t[10] = d.wordmarkLabel, t[11] = o, t[12] = e) : e = t[12], e
    }
    if (!ge(p)) {
        let e;
        t[13] !== u.accountLimitLogoutError || t[14] !== S || t[15] !== O || t[16] !== f ? (e = async () => {
            if (S) return;
            let e = i()?.sessionToken;
            if (!e) {
                H({
                    reason: P.AccountSwitcher,
                    authHistoryReason: `APP_ENTRY_AUTH_HISTORY_LOGOUT_REASON_LOGOUT`
                });
                return
            }
            C(!0);
            try {
                await B({
                    sessionToken: e,
                    currentSessionToken: e,
                    postLogoutAction: `return_to_callback_url`,
                    postLogoutCallbackUrl: O,
                    analytics: {
                        source: a.AccountSwitcherAddAccountModal,
                        type: `single_account`
                    },
                    onSessionsChanged: () => {
                        g(w())
                    },
                    onNoNextSession: H
                })
            } catch (e) {
                let t = e;
                f.danger(u.accountLimitLogoutError, {
                    description: t instanceof Error ? t.message : String(t)
                }), C(!1)
            }
        }, t[13] = u.accountLimitLogoutError, t[14] = S, t[15] = O, t[16] = f, t[17] = e) : e = t[17];
        let s = e,
            c;
        t[18] !== u || t[19] !== r || t[20] !== n.email ? (c = r == null ? u.getLogoutRequiredDescriptionWithoutCurrentEmail(n.email) : u.getLogoutRequiredDescription({
            currentUserEmail: r,
            inviteEmail: n.email
        }), t[18] = u, t[19] = r, t[20] = n.email, t[21] = c) : c = t[21];
        let l = c,
            p;
        t[22] === s ? p = t[23] : (p = () => {
            s()
        }, t[22] = s, t[23] = p);
        let m;
        t[24] !== u.logoutButton || t[25] !== S || t[26] !== p ? (m = (0, $.jsx)(V, {
            color: `primary`,
            disabled: S,
            onClick: p,
            children: u.logoutButton
        }), t[24] = u.logoutButton, t[25] = S, t[26] = p, t[27] = m) : m = t[27];
        let h;
        return t[28] !== u.logoutRequiredTitle || t[29] !== l || t[30] !== d.wordmarkLabel || t[31] !== o || t[32] !== m ? (h = (0, $.jsx)(X, {
            title: u.logoutRequiredTitle,
            description: l,
            isStorageComplianceEnabled: o,
            wordmarkLabel: d.wordmarkLabel,
            children: m
        }), t[28] = u.logoutRequiredTitle, t[29] = l, t[30] = d.wordmarkLabel, t[31] = o, t[32] = m, t[33] = h) : h = t[33], h
    }
    if (h.length >= 2) {
        let e;
        if (t[34] !== h || t[35] !== b) {
            let n;
            t[37] === b ? n = t[38] : (n = e => e.sessionToken === b, t[37] = b, t[38] = n), e = h.find(n), t[34] = h, t[35] = b, t[36] = e
        } else e = t[36];
        let r = e,
            s;
        t[39] !== u.accountLimitLogoutError || t[40] !== S || t[41] !== O || t[42] !== r || t[43] !== f ? (s = async () => {
            if (r == null || S) return;
            C(!0);
            let e = i(),
                t = e ? e.sessionToken : void 0;
            try {
                await B({
                    sessionToken: r.sessionToken,
                    currentSessionToken: t,
                    postLogoutAction: `return_to_callback_url`,
                    postLogoutCallbackUrl: O,
                    analytics: {
                        source: a.AccountSwitcherAddAccountModal,
                        type: `single_account`
                    },
                    onSessionsChanged: () => {
                        g(w())
                    },
                    onNoNextSession: H
                })
            } catch (e) {
                let t = e;
                f.danger(u.accountLimitLogoutError, {
                    description: t instanceof Error ? t.message : String(t)
                }), C(!1)
            }
        }, t[39] = u.accountLimitLogoutError, t[40] = S, t[41] = O, t[42] = r, t[43] = f, t[44] = s) : s = t[44];
        let c = s,
            l = u.accountLimitTitle,
            p;
        t[45] !== u || t[46] !== n.email ? (p = u.getAccountLimitDescription(n.email), t[45] = u, t[46] = n.email, t[47] = p) : p = t[47];
        let m = d.wordmarkLabel,
            _;
        if (t[48] !== h || t[49] !== u.unknownEmailLabel || t[50] !== u.unnamedAccountLabel || t[51] !== S || t[52] !== b) {
            let e;
            t[54] !== u.unknownEmailLabel || t[55] !== u.unnamedAccountLabel || t[56] !== S || t[57] !== b ? (e = e => {
                let t = $e({
                        account: e,
                        unknownEmailLabel: u.unknownEmailLabel,
                        unnamedAccountLabel: u.unnamedAccountLabel
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
            }, t[54] = u.unknownEmailLabel, t[55] = u.unnamedAccountLabel, t[56] = S, t[57] = b, t[58] = e) : e = t[58], _ = h.map(e), t[48] = h, t[49] = u.unknownEmailLabel, t[50] = u.unnamedAccountLabel, t[51] = S, t[52] = b, t[53] = _
        } else _ = t[53];
        let v;
        t[59] === _ ? v = t[60] : (v = (0, $.jsx)(`div`, {
            className: `flex w-full flex-col gap-2`,
            children: _
        }), t[59] = _, t[60] = v);
        let y = S || r == null,
            T;
        t[61] === c ? T = t[62] : (T = () => {
            c()
        }, t[61] = c, t[62] = T);
        let E;
        t[63] !== u.accountLimitConfirm || t[64] !== y || t[65] !== T ? (E = (0, $.jsx)(`div`, {
            className: `mt-2 flex w-full justify-end`,
            children: (0, $.jsx)(V, {
                type: `button`,
                color: `primary`,
                disabled: y,
                onClick: T,
                children: u.accountLimitConfirm
            })
        }), t[63] = u.accountLimitConfirm, t[64] = y, t[65] = T, t[66] = E) : E = t[66];
        let D;
        return t[67] !== u.accountLimitTitle || t[68] !== d.wordmarkLabel || t[69] !== o || t[70] !== v || t[71] !== E || t[72] !== p ? (D = (0, $.jsxs)(X, {
            title: l,
            description: p,
            isStorageComplianceEnabled: o,
            wordmarkLabel: m,
            children: [v, E]
        }), t[67] = u.accountLimitTitle, t[68] = d.wordmarkLabel, t[69] = o, t[70] = v, t[71] = E, t[72] = p, t[73] = D) : D = t[73], D
    }
    let M;
    return t[74] !== E || t[75] !== r || t[76] !== n || t[77] !== d || t[78] !== o ? (M = (0, $.jsx)(Ge, {
        ...d,
        inviteAuthContext: n,
        currentUserEmail: r,
        isStorageComplianceEnabled: o,
        callbackUrl: E
    }), t[74] = E, t[75] = r, t[76] = n, t[77] = d, t[78] = o, t[79] = M) : M = t[79], M
}

function tt() {
    "use forget";
    let e = (0, Z.c)(3),
        {
            data: t
        } = l(),
        n, r;
    return e[0] === t ? (n = e[1], r = e[2]) : (n = () => {
        t == null || !ge(t) || k(i(), Qe(t))
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
            children: s
        } = e,
        c;
    t[0] === n ? c = t[1] : (c = (0, $.jsx)(`title`, {
        children: n
    }), t[0] = n, t[1] = c);
    let l;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (l = {
        minHeight: `100dvh`
    }, t[2] = l) : l = t[2];
    let u;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (u = (0, $.jsx)(he, {}), t[3] = u) : u = t[3];
    let d;
    t[4] === a ? d = t[5] : (d = (0, $.jsx)(fe, {
        to: `/`,
        className: `text-token-text-primary absolute start-5 top-5 md:start-8 md:top-6`,
        "aria-label": a,
        children: u
    }), t[4] = a, t[5] = d);
    let f;
    t[6] === r ? f = t[7] : (f = r == null ? (0, $.jsx)(I, {
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
    t[12] !== s || t[13] !== f || t[14] !== p || t[15] !== m ? (h = (0, $.jsx)(`div`, {
        className: `relative flex w-full grow flex-col items-center justify-center text-center`,
        children: (0, $.jsxs)(`div`, {
            className: `flex w-full max-w-[440px] flex-col items-center gap-4`,
            children: [f, p, m, s]
        })
    }), t[12] = s, t[13] = f, t[14] = p, t[15] = m, t[16] = h) : h = t[16];
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
    t[23] === Symbol.for(`react.memo_cache_sentinel`) ? (v = (0, $.jsx)(o, {
        children: (0, $.jsx)(ve, {
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
    return t[26] !== c || t[27] !== y ? (b = (0, $.jsxs)($.Fragment, {
        children: [c, y]
    }), t[26] = c, t[27] = y, t[28] = b) : b = t[28], b
}
var Z, Q, $, nt = e((() => {
    Z = K(), M(), De(), ke(), u(), _e(), D(), pe(), j(), A(), me(), m(), F(), c(), oe(), O(), N(), R(), ie(), C(), te(), h(), p(), Q = t(G()), se(), Ue(), ue(), $ = U()
}));
export {
    Ye as a, We as c, et as i, Ge as n, Ze as o, X as r, nt as s, tt as t
};
//# sourceMappingURL=d754d344-jkt2rffv2emd0d6h.js.map