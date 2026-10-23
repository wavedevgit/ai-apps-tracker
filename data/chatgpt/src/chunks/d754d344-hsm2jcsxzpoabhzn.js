import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    A0 as r,
    Cat as i,
    Crt as a,
    Dat as o,
    E0 as s,
    Eat as c,
    Eit as l,
    F0 as u,
    Fz as d,
    IR as f,
    Iz as p,
    Knt as m,
    LF as h,
    LU as g,
    Lit as _,
    Lz as v,
    N0 as y,
    Nit as b,
    QR as x,
    VR as S,
    Vit as C,
    Wnt as w,
    a0 as T,
    cat as E,
    dat as D,
    eE as O,
    ez as k,
    fr as A,
    iz as j,
    kF as M,
    kat as N,
    kit as ee,
    nP as P,
    oP as F,
    pr as I,
    q1 as L,
    rP as R,
    rz as z,
    sst as B,
    sz as te,
    tP as ne,
    w0 as re,
    wat as ie,
    wit as ae,
    wrt as oe,
    zU as se,
    zz as ce
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as le,
    Nn as V,
    Nt as ue,
    Q as H,
    Rn as de,
    Vn as U,
    Zt as fe,
    an as pe,
    it as W,
    wn as G
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    EKn as K,
    G4t as me,
    O8 as he,
    OKn as ge,
    W4t as _e,
    k8 as ve
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    Jl as ye,
    Xx as be,
    Yl as xe,
    Zx as Se
} from "./30901919-s8bko9nrkqwv6i4f.js";
import {
    a as Ce,
    n as we,
    o as Te,
    t as Ee
} from "./c09d86e5-kmotthzlhn8j33f3.js";
import {
    a as De,
    i as Oe
} from "./9bbac052-nadlmfa3ycvthdvm.js";
import {
    n as ke,
    t as Ae
} from "./35711af7-obpiisgj5grklvz2.js";
import {
    a as je,
    c as Me,
    n as Ne,
    o as Pe,
    s as Fe,
    t as Ie
} from "./c982bafe-ebazuly6efqbe490.js";
import {
    n as Le,
    t as Re
} from "./966be48d-b10k5mjerksmjkb7.js";

function ze(e) {
    return e + 1
}

function Be(e) {
    return e.name !== `phone_number`
}
var Ve, q, J, He, Ue = e((() => {
    Ve = G(), f(), Ce(), Fe(), te(), Le(), Ne(), we(), O(), ye(), be(), _(), je(), z(), q = t(U()), de(), H(), J = le(), He = e => {
        "use forget";
        let t = (0, Ve.c)(60),
            {
                title: r,
                subtitle: i,
                mismatchSubtitle: a,
                connection: o,
                callbackUrl: s,
                authorizationParams: c
            } = e,
            l = ue(),
            u;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (u = {
            loginStrategy: `existing_user`
        }, t[0] = u) : u = t[0];
        let {
            optionsForDisplay: d
        } = Me(u), [f, p] = Te(!0), [m, h] = (0, q.useState)(0), [g, _] = (0, q.useState)(!1), v;
        t[1] !== c || t[2] !== s ? (v = Ie(s, c), t[1] = c, t[2] = s, t[3] = v) : v = t[3];
        let y = v,
            C;
        t[4] !== c || t[5] !== f || t[6] !== l || t[7] !== p || t[8] !== y ? (C = async (e, t) => {
            if (!f) {
                p(!0), _(!1);
                try {
                    await y({
                        screen_hint: `login_or_signup`,
                        ...e
                    }, () => {
                        S(c[ee], t, x.ACCESS_FLOW_PAGE_TYPE_CHATGPT_WEB_LOGIN_PAGE)
                    })
                } catch {
                    _(!0), h(ze)
                }
                p(!1)
            }
        }, t[4] = c, t[5] = f, t[6] = l, t[7] = p, t[8] = y, t[9] = C) : C = t[9];
        let w = C,
            T, E, D, O, A, M, N, P, F;
        if (t[10] !== o || t[11] !== w || t[12] !== m || t[13] !== f || t[14] !== a || t[15] !== d || t[16] !== i || t[17] !== r) {
            let e = d.filter(Be);
            F = `flex flex-col items-center gap-3 text-center`, t[27] === r ? T = t[28] : (T = (0, J.jsx)(`h1`, {
                className: `text-2xl font-semibold`,
                children: r
            }), t[27] = r, t[28] = T), t[29] === i ? E = t[30] : (E = (0, J.jsx)(`p`, {
                className: `text-token-text-secondary text-sm`,
                children: i
            }), t[29] = i, t[30] = E), t[31] === a ? D = t[32] : (D = a ? (0, J.jsx)(`p`, {
                className: `text-token-text-secondary text-sm`,
                children: a
            }) : null, t[31] = a, t[32] = D), O = `flex w-full flex-col gap-3 px-6 pt-3`, A = f;
            let s;
            t[33] !== o || t[34] !== w ? (s = () => {
                w({
                    connection: o,
                    connection_provider: o.startsWith(`conn_`) || o.startsWith(`oaisaml_`) ? b.WorkOS.toString() : b.Auth0.toString()
                }, k.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_SSO)
            }, t[33] = o, t[34] = w, t[35] = s) : s = t[35];
            let c, l;
            t[36] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, J.jsx)(xe, {
                className: `icon`
            }), l = (0, J.jsx)(V, {
                id: `AcceptInvitePage.sso.button.company`,
                defaultMessage: `Continue with company SSO`
            }), t[36] = c, t[37] = l) : (c = t[36], l = t[37]), t[38] !== f || t[39] !== s ? (M = (0, J.jsxs)(n, {
                type: `button`,
                color: `primary`,
                className: `h-[52px] rounded-full text-base`,
                contentWrapperClassName: `gap-2`,
                disabled: f,
                onClick: s,
                children: [c, l]
            }), t[38] = f, t[39] = s, t[40] = M) : M = t[40], N = e.length > 0 ? (0, J.jsx)(Re, {
                children: (0, J.jsx)(V, {
                    id: `AcceptInvitePage.sso.divider.or`,
                    defaultMessage: `or`
                })
            }) : null;
            let u;
            t[41] !== w || t[42] !== m || t[43] !== f ? (u = e => {
                if (e.name === `email`) return (0, J.jsxs)(n, {
                    type: `button`,
                    color: `secondary`,
                    className: `h-[52px] rounded-full text-base`,
                    contentWrapperClassName: `gap-2`,
                    disabled: f || e.tempDisabled,
                    onClick: () => {
                        w({
                            connection: `password`
                        }, k.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_PASSWORD)
                    },
                    children: [(0, J.jsx)(Se, {
                        className: `icon`
                    }), (0, J.jsx)(V, {
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
                        w({
                            connection: j[t]
                        }, Pe(t))
                    }
                }, `${t}-${m}`)
            }, t[41] = w, t[42] = m, t[43] = f, t[44] = u) : u = t[44], P = e.map(u), t[10] = o, t[11] = w, t[12] = m, t[13] = f, t[14] = a, t[15] = d, t[16] = i, t[17] = r, t[18] = T, t[19] = E, t[20] = D, t[21] = O, t[22] = A, t[23] = M, t[24] = N, t[25] = P, t[26] = F
        } else T = t[18], E = t[19], D = t[20], O = t[21], A = t[22], M = t[23], N = t[24], P = t[25], F = t[26];
        let I;
        t[45] !== O || t[46] !== A || t[47] !== M || t[48] !== N || t[49] !== P ? (I = (0, J.jsxs)(`div`, {
            className: O,
            "aria-busy": A,
            children: [M, N, P]
        }), t[45] = O, t[46] = A, t[47] = M, t[48] = N, t[49] = P, t[50] = I) : I = t[50];
        let L;
        t[51] === g ? L = t[52] : (L = g ? (0, J.jsx)(`p`, {
            role: `alert`,
            className: `text-token-interactive-label-warning-secondary text-sm`,
            children: (0, J.jsx)(V, {
                id: `AcceptInvitePage.sso.error.signIn`,
                defaultMessage: `Couldn't start sign-in. Please try again.`
            })
        }) : null, t[51] = g, t[52] = L);
        let R;
        return t[53] !== T || t[54] !== E || t[55] !== D || t[56] !== I || t[57] !== L || t[58] !== F ? (R = (0, J.jsxs)(`div`, {
            className: F,
            children: [T, E, D, I, L]
        }), t[53] = T, t[54] = E, t[55] = D, t[56] = I, t[57] = L, t[58] = F, t[59] = R) : R = t[59], R
    }
}));

function We({
    workspaceId: e,
    acceptWorkspaceId: t
}) {
    e && (c.deleteCookie(N.WorkspaceComputeResidencyCluster), c.setCookie(N.Workspace, e, {
        maxAge: ae
    })), t ? c.setCookie(N.AcceptAccountId, t, {
        maxAge: 120
    }) : c.deleteCookie(N.AcceptAccountId)
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
            optionalSsoConnection: f,
            callbackUrl: p,
            wordmarkLabel: m,
            pageShownEventName: h
        } = e,
        g = h === void 0 ? `chatgpt_accept_invite_page_shown` : h,
        [_] = (0, Q.useState)(qe),
        v;
    t[0] !== r || t[1] !== n.email ? (v = r != null && r.trim().toLowerCase() !== n.email.trim().toLowerCase(), t[0] = r, t[1] = n.email, t[2] = v) : v = t[2];
    let b = v,
        x;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (x = y(i()), t[3] = x) : x = t[3];
    let S;
    t[4] === n.acceptWorkspaceId ? S = t[5] : (S = n.acceptWorkspaceId ? {
        accept_wId: n.acceptWorkspaceId
    } : {}, t[4] = n.acceptWorkspaceId, t[5] = S);
    let C;
    t[6] !== _ || t[7] !== n.email || t[8] !== S ? (C = {
        ...x,
        login_hint: n.email,
        ...S,
        [ee]: _
    }, t[6] = _, t[7] = n.email, t[8] = S, t[9] = C) : C = t[9];
    let T = C,
        E;
    t[10] === p ? E = t[11] : (E = new URL(p, `https://chatgpt.com`), t[10] = p, t[11] = E);
    let D = E.search,
        O, k;
    t[12] !== _ || t[13] !== n.workspaceId || t[14] !== D || t[15] !== b || t[16] !== g ? (O = () => {
        let e = new URLSearchParams(D),
            t = e.get(`aiId`),
            r = e.get(`eid`),
            i = {
                authSessionLoggingId: _,
                inviteId: t && /^[a-zA-Z0-9_-]{1,128}$/.test(t) ? t : void 0,
                entryId: r && pe(r) ? r : void 0,
                isAutomated: navigator.webdriver
            },
            a = w.logStructuredEvent(`ChatgptInviteLoginPageViewed`, {
                legacyStatsigEventName: g,
                invitedWorkspaceId: n.workspaceId ?? void 0,
                isAccountMismatch: b,
                ...i
            });
        oe(g, void 0, {
            workspace_id: n.workspaceId ?? ``,
            is_logged_in_as_different_email: String(b),
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
    }, k = [D, _, n.workspaceId, b, g], t[12] = _, t[13] = n.workspaceId, t[14] = D, t[15] = b, t[16] = g, t[17] = O, t[18] = k) : (O = t[17], k = t[18]), (0, Q.useEffect)(O, k);
    let A;
    t[19] === o ? A = t[20] : (A = (0, $.jsx)(`title`, {
        children: o
    }), t[19] = o, t[20] = A);
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
    t[25] === m ? P = t[26] : (P = (0, $.jsx)(W, {
        to: `/`,
        className: `text-token-text-primary absolute start-5 top-5 md:start-8 md:top-6`,
        "aria-label": m,
        children: N
    }), t[25] = m, t[26] = P);
    let F;
    t[27] !== T || t[28] !== p || t[29] !== n.email || t[30] !== u || t[31] !== f || t[32] !== l || t[33] !== c ? (F = (0, $.jsx)(`div`, {
        className: `relative flex w-full grow flex-col items-center justify-center`,
        children: (0, $.jsx)(`div`, {
            className: `mt-5 w-full max-w-[440px]`,
            children: f ? (0, $.jsx)(He, {
                title: c,
                subtitle: l,
                mismatchSubtitle: u,
                connection: f,
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
    }), t[27] = T, t[28] = p, t[29] = n.email, t[30] = u, t[31] = f, t[32] = l, t[33] = c, t[34] = F) : F = t[34];
    let I;
    t[35] === a ? I = t[36] : (I = (0, $.jsx)(`div`, {
        className: `mt-10 flex flex-col items-center justify-center`,
        children: (0, $.jsx)(Oe, {
            isStorageComplianceEnabled: a
        })
    }), t[35] = a, t[36] = I);
    let L;
    t[37] !== P || t[38] !== F || t[39] !== I ? (L = (0, $.jsxs)(`main`, {
        className: `relative flex grow flex-col items-center justify-between px-5 py-8 text-black md:px-6 dark:text-white`,
        children: [P, F, I]
    }), t[37] = P, t[38] = F, t[39] = I, t[40] = L) : L = t[40];
    let R;
    t[41] === Symbol.for(`react.memo_cache_sentinel`) ? (R = (0, $.jsx)(d, {
        children: (0, $.jsx)(K, {
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
    return r(), re()
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
        a = P(e.phoneNumber);
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
        u = se(),
        {
            data: d
        } = T(),
        f;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (f = [], t[0] = f) : f = t[0];
    let [p, m] = (0, Q.useState)(f), [h, g] = (0, Q.useState)(!1), [_, v] = (0, Q.useState)(null), [y, b] = (0, Q.useState)(!1), x;
    t[1] === o ? x = t[2] : (x = Ye(o), t[1] = o, t[2] = x);
    let S = x,
        w;
    t[3] !== o || t[4] !== s ? (w = Xe({
        invitePageUrl: o,
        postLogoutParamName: s
    }), t[3] = o, t[4] = s, t[5] = w) : w = t[5];
    let D = w,
        O, k;
    if (t[6] === d ? (O = t[7], k = t[8]) : (O = () => {
            if (d == null) return;
            let e = F(B(), Qe(d));
            m(e), v(t => t ?? e[0]?.sessionToken ?? null), g(!0)
        }, k = [d], t[6] = d, t[7] = O, t[8] = k), (0, Q.useEffect)(O, k), d == null || !h) {
        let e;
        return t[9] !== c.loadingTitle || t[10] !== l.wordmarkLabel || t[11] !== a ? (e = (0, $.jsx)(X, {
            title: c.loadingTitle,
            description: null,
            isStorageComplianceEnabled: a,
            wordmarkLabel: l.wordmarkLabel
        }), t[9] = c.loadingTitle, t[10] = l.wordmarkLabel, t[11] = a, t[12] = e) : e = t[12], e
    }
    if (!_e(d)) {
        let e;
        t[13] !== c.accountLimitLogoutError || t[14] !== y || t[15] !== D || t[16] !== u ? (e = async () => {
            if (y) return;
            let e = B()?.sessionToken;
            if (!e) {
                C({
                    reason: E.AccountSwitcher,
                    authHistoryReason: `APP_ENTRY_AUTH_HISTORY_LOGOUT_REASON_LOGOUT`
                });
                return
            }
            b(!0);
            try {
                await I({
                    sessionToken: e,
                    currentSessionToken: e,
                    postLogoutAction: `return_to_callback_url`,
                    postLogoutCallbackUrl: D,
                    analytics: {
                        source: M.AccountSwitcherAddAccountModal,
                        type: `single_account`
                    },
                    onSessionsChanged: () => {
                        m(ne())
                    },
                    onNoNextSession: C
                })
            } catch (e) {
                let t = e;
                u.danger(c.accountLimitLogoutError, {
                    description: t instanceof Error ? t.message : String(t)
                }), b(!1)
            }
        }, t[13] = c.accountLimitLogoutError, t[14] = y, t[15] = D, t[16] = u, t[17] = e) : e = t[17];
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
        t[24] !== c.logoutButton || t[25] !== y || t[26] !== f ? (p = (0, $.jsx)(n, {
            color: `primary`,
            disabled: y,
            onClick: f,
            children: c.logoutButton
        }), t[24] = c.logoutButton, t[25] = y, t[26] = f, t[27] = p) : p = t[27];
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
        if (t[34] !== p || t[35] !== _) {
            let n;
            t[37] === _ ? n = t[38] : (n = e => e.sessionToken === _, t[37] = _, t[38] = n), e = p.find(n), t[34] = p, t[35] = _, t[36] = e
        } else e = t[36];
        let i = e,
            o;
        t[39] !== c.accountLimitLogoutError || t[40] !== y || t[41] !== D || t[42] !== i || t[43] !== u ? (o = async () => {
            if (i == null || y) return;
            b(!0);
            let e = B(),
                t = e ? e.sessionToken : void 0;
            try {
                await I({
                    sessionToken: i.sessionToken,
                    currentSessionToken: t,
                    postLogoutAction: `return_to_callback_url`,
                    postLogoutCallbackUrl: D,
                    analytics: {
                        source: M.AccountSwitcherAddAccountModal,
                        type: `single_account`
                    },
                    onSessionsChanged: () => {
                        m(ne())
                    },
                    onNoNextSession: C
                })
            } catch (e) {
                let t = e;
                u.danger(c.accountLimitLogoutError, {
                    description: t instanceof Error ? t.message : String(t)
                }), b(!1)
            }
        }, t[39] = c.accountLimitLogoutError, t[40] = y, t[41] = D, t[42] = i, t[43] = u, t[44] = o) : o = t[44];
        let s = o,
            d = c.accountLimitTitle,
            f;
        t[45] !== c || t[46] !== r.email ? (f = c.getAccountLimitDescription(r.email), t[45] = c, t[46] = r.email, t[47] = f) : f = t[47];
        let h = l.wordmarkLabel,
            g;
        if (t[48] !== p || t[49] !== c.unknownEmailLabel || t[50] !== c.unnamedAccountLabel || t[51] !== y || t[52] !== _) {
            let e;
            t[54] !== c.unknownEmailLabel || t[55] !== c.unnamedAccountLabel || t[56] !== y || t[57] !== _ ? (e = e => {
                let t = $e({
                        account: e,
                        unknownEmailLabel: c.unknownEmailLabel,
                        unnamedAccountLabel: c.unnamedAccountLabel
                    }),
                    n = e.sessionToken === _;
                return (0, $.jsxs)(`button`, {
                    type: `button`,
                    className: `border-token-border-light hover:bg-token-bg-secondary flex w-full items-center gap-3 rounded-lg border px-3 py-2 text-start`,
                    disabled: y,
                    onClick: () => {
                        v(e.sessionToken)
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
            }, t[54] = c.unknownEmailLabel, t[55] = c.unnamedAccountLabel, t[56] = y, t[57] = _, t[58] = e) : e = t[58], g = p.map(e), t[48] = p, t[49] = c.unknownEmailLabel, t[50] = c.unnamedAccountLabel, t[51] = y, t[52] = _, t[53] = g
        } else g = t[53];
        let x;
        t[59] === g ? x = t[60] : (x = (0, $.jsx)(`div`, {
            className: `flex w-full flex-col gap-2`,
            children: g
        }), t[59] = g, t[60] = x);
        let S = y || i == null,
            w;
        t[61] === s ? w = t[62] : (w = () => {
            s()
        }, t[61] = s, t[62] = w);
        let T;
        t[63] !== c.accountLimitConfirm || t[64] !== S || t[65] !== w ? (T = (0, $.jsx)(`div`, {
            className: `mt-2 flex w-full justify-end`,
            children: (0, $.jsx)(n, {
                type: `button`,
                color: `primary`,
                disabled: S,
                onClick: w,
                children: c.accountLimitConfirm
            })
        }), t[63] = c.accountLimitConfirm, t[64] = S, t[65] = w, t[66] = T) : T = t[66];
        let E;
        return t[67] !== c.accountLimitTitle || t[68] !== l.wordmarkLabel || t[69] !== a || t[70] !== x || t[71] !== T || t[72] !== f ? (E = (0, $.jsxs)(X, {
            title: d,
            description: f,
            isStorageComplianceEnabled: a,
            wordmarkLabel: h,
            children: [x, T]
        }), t[67] = c.accountLimitTitle, t[68] = l.wordmarkLabel, t[69] = a, t[70] = x, t[71] = T, t[72] = f, t[73] = E) : E = t[73], E
    }
    let A;
    return t[74] !== S || t[75] !== i || t[76] !== r || t[77] !== l || t[78] !== a ? (A = (0, $.jsx)(Ge, {
        ...l,
        inviteAuthContext: r,
        currentUserEmail: i,
        isStorageComplianceEnabled: a,
        callbackUrl: S
    }), t[74] = S, t[75] = i, t[76] = r, t[77] = l, t[78] = a, t[79] = A) : A = t[79], A
}

function tt() {
    "use forget";
    let e = (0, Z.c)(3),
        {
            data: t
        } = T(),
        n, r;
    return e[0] === t ? (n = e[1], r = e[2]) : (n = () => {
        t == null || !_e(t) || F(B(), Qe(t))
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
    t[4] === a ? u = t[5] : (u = (0, $.jsx)(W, {
        to: `/`,
        className: `text-token-text-primary absolute start-5 top-5 md:start-8 md:top-6`,
        "aria-label": a,
        children: l
    }), t[4] = a, t[5] = u);
    let f;
    t[6] === r ? f = t[7] : (f = r == null ? (0, $.jsx)(v, {
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
    t[19] !== u || t[20] !== h || t[21] !== g ? (_ = (0, $.jsxs)(`main`, {
        className: `relative flex grow flex-col items-center justify-between px-5 py-8 text-black md:px-6 dark:text-white`,
        children: [u, h, g]
    }), t[19] = u, t[20] = h, t[21] = g, t[22] = _) : _ = t[22];
    let y;
    t[23] === Symbol.for(`react.memo_cache_sentinel`) ? (y = (0, $.jsx)(d, {
        children: (0, $.jsx)(K, {
            fixed: !0
        })
    }), t[23] = y) : y = t[23];
    let b;
    t[24] === _ ? b = t[25] : (b = (0, $.jsxs)(`div`, {
        className: `flex min-h-screen flex-col justify-between`,
        style: c,
        children: [_, y]
    }), t[24] = _, t[25] = b);
    let x;
    return t[26] !== s || t[27] !== b ? (x = (0, $.jsxs)($.Fragment, {
        children: [s, b]
    }), t[26] = s, t[27] = b, t[28] = x) : x = t[28], x
}
var Z, Q, $, nt = e((() => {
    Z = G(), m(), De(), ke(), O(), ge(), l(), ve(), s(), A(), me(), p(), ce(), L(), g(), R(), h(), _(), u(), o(), ie(), D(), a(), Q = t(U()), H(), Ue(), fe(), $ = le()
}));
export {
    Ye as a, We as c, et as i, Ge as n, Ze as o, X as r, nt as s, tt as t
};
//# sourceMappingURL=d754d344-hsm2jcsxzpoabhzn.js.map