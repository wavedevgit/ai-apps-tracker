import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    $ot as r,
    A0 as i,
    E0 as a,
    F0 as o,
    Fz as s,
    IR as c,
    Int as l,
    Iz as u,
    LF as d,
    LU as f,
    Lz as p,
    N0 as m,
    Nit as h,
    QR as g,
    Rnt as _,
    Tit as v,
    VR as y,
    a0 as b,
    eE as x,
    eat as S,
    ez as C,
    fr as w,
    gat as T,
    git as E,
    grt as D,
    hat as O,
    hrt as k,
    iz as A,
    kF as j,
    kit as M,
    nP as N,
    oP as P,
    pr as F,
    q1 as I,
    rP as L,
    rat as R,
    rz as z,
    sz as B,
    tP as V,
    vat as H,
    vit as ee,
    w0 as te,
    xat as U,
    xit as W,
    yat as ne,
    zU as re,
    zz as ie
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Bn as G,
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
    O8 as pe,
    X4t as me,
    Y4t as he,
    fKn as ge,
    k8 as _e,
    uKn as ve
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    $x as ye,
    Qx as be,
    Xl as xe,
    Zl as Se
} from "./30901919-lgbmg5s09xld40kt.js";
import {
    a as Ce,
    n as we,
    o as Te,
    t as Ee
} from "./c09d86e5-i4p72k6my15w6igk.js";
import {
    a as De,
    i as Oe
} from "./9bbac052-b3nnyd9ryjffo5qb.js";
import {
    n as ke,
    t as Ae
} from "./35711af7-d48hb8egkbr6z4xd.js";
import {
    a as je,
    c as Me,
    n as Ne,
    o as Pe,
    s as Fe,
    t as Ie
} from "./c982bafe-kn0glzswj1119jxc.js";
import {
    n as Le,
    t as Re
} from "./966be48d-orxineso9kx18zqz.js";

function ze(e) {
    return e + 1
}

function Be(e) {
    return e.name !== `phone_number`
}
var Ve, q, J, He, Ue = e((() => {
    Ve = fe(), c(), Ce(), Fe(), B(), Le(), Ne(), we(), x(), xe(), be(), M(), je(), z(), q = t(ce()), se(), oe(), J = G(), He = e => {
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
            l = ae(),
            u;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (u = {
            loginStrategy: `existing_user`
        }, t[0] = u) : u = t[0];
        let {
            optionsForDisplay: d
        } = Me(u), [f, p] = Te(!0), [m, h] = (0, q.useState)(0), [_, b] = (0, q.useState)(!1), x;
        t[1] !== c || t[2] !== s ? (x = Ie(s, c), t[1] = c, t[2] = s, t[3] = x) : x = t[3];
        let S = x,
            w;
        t[4] !== c || t[5] !== f || t[6] !== l || t[7] !== p || t[8] !== S ? (w = async (e, t) => {
            if (!f) {
                p(!0), b(!1);
                try {
                    await S({
                        screen_hint: `login_or_signup`,
                        ...e
                    }, () => {
                        y(c[W], t, g.ACCESS_FLOW_PAGE_TYPE_CHATGPT_WEB_LOGIN_PAGE)
                    })
                } catch {
                    b(!0), h(ze)
                }
                p(!1)
            }
        }, t[4] = c, t[5] = f, t[6] = l, t[7] = p, t[8] = S, t[9] = w) : w = t[9];
        let T = w,
            E, D, O, k, j, M, N, P, F;
        if (t[10] !== o || t[11] !== T || t[12] !== m || t[13] !== f || t[14] !== a || t[15] !== d || t[16] !== i || t[17] !== r) {
            let e = d.filter(Be);
            F = `flex flex-col items-center gap-3 text-center`, t[27] === r ? E = t[28] : (E = (0, J.jsx)(`h1`, {
                className: `text-2xl font-semibold`,
                children: r
            }), t[27] = r, t[28] = E), t[29] === i ? D = t[30] : (D = (0, J.jsx)(`p`, {
                className: `text-token-text-secondary text-sm`,
                children: i
            }), t[29] = i, t[30] = D), t[31] === a ? O = t[32] : (O = a ? (0, J.jsx)(`p`, {
                className: `text-token-text-secondary text-sm`,
                children: a
            }) : null, t[31] = a, t[32] = O), k = `flex w-full flex-col gap-3 px-6 pt-3`, j = f;
            let s;
            t[33] !== o || t[34] !== T ? (s = () => {
                T({
                    connection: o,
                    connection_provider: o.startsWith(`conn_`) || o.startsWith(`oaisaml_`) ? v.WorkOS.toString() : v.Auth0.toString()
                }, C.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_SSO)
            }, t[33] = o, t[34] = T, t[35] = s) : s = t[35];
            let c, l;
            t[36] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, J.jsx)(Se, {
                className: `icon`
            }), l = (0, J.jsx)(K, {
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
                children: (0, J.jsx)(K, {
                    id: `AcceptInvitePage.sso.divider.or`,
                    defaultMessage: `or`
                })
            }) : null;
            let u;
            t[41] !== T || t[42] !== m || t[43] !== f ? (u = e => {
                if (e.name === `email`) return (0, J.jsxs)(n, {
                    type: `button`,
                    color: `secondary`,
                    className: `h-[52px] rounded-full text-base`,
                    contentWrapperClassName: `gap-2`,
                    disabled: f || e.tempDisabled,
                    onClick: () => {
                        T({
                            connection: `password`
                        }, C.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_PASSWORD)
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
                    disabled: f || e.tempDisabled,
                    onClick: () => {
                        T({
                            connection: A[t]
                        }, Pe(t))
                    }
                }, `${t}-${m}`)
            }, t[41] = T, t[42] = m, t[43] = f, t[44] = u) : u = t[44], P = e.map(u), t[10] = o, t[11] = T, t[12] = m, t[13] = f, t[14] = a, t[15] = d, t[16] = i, t[17] = r, t[18] = E, t[19] = D, t[20] = O, t[21] = k, t[22] = j, t[23] = M, t[24] = N, t[25] = P, t[26] = F
        } else E = t[18], D = t[19], O = t[20], k = t[21], j = t[22], M = t[23], N = t[24], P = t[25], F = t[26];
        let I;
        t[45] !== k || t[46] !== j || t[47] !== M || t[48] !== N || t[49] !== P ? (I = (0, J.jsxs)(`div`, {
            className: k,
            "aria-busy": j,
            children: [M, N, P]
        }), t[45] = k, t[46] = j, t[47] = M, t[48] = N, t[49] = P, t[50] = I) : I = t[50];
        let L;
        t[51] === _ ? L = t[52] : (L = _ ? (0, J.jsx)(`p`, {
            role: `alert`,
            className: `text-token-interactive-label-warning-secondary text-sm`,
            children: (0, J.jsx)(K, {
                id: `AcceptInvitePage.sso.error.signIn`,
                defaultMessage: `Couldn't start sign-in. Please try again.`
            })
        }) : null, t[51] = _, t[52] = L);
        let R;
        return t[53] !== E || t[54] !== D || t[55] !== O || t[56] !== I || t[57] !== L || t[58] !== F ? (R = (0, J.jsxs)(`div`, {
            className: F,
            children: [E, D, O, I, L]
        }), t[53] = E, t[54] = D, t[55] = O, t[56] = I, t[57] = L, t[58] = F, t[59] = R) : R = t[59], R
    }
}));

function We({
    workspaceId: e,
    acceptWorkspaceId: t
}) {
    e && (H.deleteCookie(U.WorkspaceComputeResidencyCluster), H.setCookie(U.Workspace, e, {
        maxAge: E
    })), t ? H.setCookie(U.AcceptAccountId, t, {
        maxAge: 120
    }) : H.deleteCookie(U.AcceptAccountId)
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
            title: c,
            subtitle: u,
            mismatchSubtitle: d,
            optionalSsoConnection: f,
            callbackUrl: p,
            wordmarkLabel: h,
            pageShownEventName: g
        } = e,
        _ = g === void 0 ? `chatgpt_accept_invite_page_shown` : g,
        [v] = (0, Q.useState)(qe),
        y;
    t[0] !== r || t[1] !== n.email ? (y = r != null && r.trim().toLowerCase() !== n.email.trim().toLowerCase(), t[0] = r, t[1] = n.email, t[2] = y) : y = t[2];
    let b = y,
        x;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (x = m(O()), t[3] = x) : x = t[3];
    let S;
    t[4] === n.acceptWorkspaceId ? S = t[5] : (S = n.acceptWorkspaceId ? {
        accept_wId: n.acceptWorkspaceId
    } : {}, t[4] = n.acceptWorkspaceId, t[5] = S);
    let C;
    t[6] !== v || t[7] !== n.email || t[8] !== S ? (C = {
        ...x,
        login_hint: n.email,
        ...S,
        [W]: v
    }, t[6] = v, t[7] = n.email, t[8] = S, t[9] = C) : C = t[9];
    let w = C,
        T;
    t[10] === p ? T = t[11] : (T = new URL(p, `https://chatgpt.com`), t[10] = p, t[11] = T);
    let E = T.search,
        k, A;
    t[12] !== v || t[13] !== n.workspaceId || t[14] !== E || t[15] !== b || t[16] !== _ ? (k = () => {
        let e = new URLSearchParams(E),
            t = e.get(`aiId`),
            r = e.get(`eid`),
            i = {
                authSessionLoggingId: v,
                inviteId: t && /^[a-zA-Z0-9_-]{1,128}$/.test(t) ? t : void 0,
                entryId: r && ue(r) ? r : void 0,
                isAutomated: navigator.webdriver
            },
            a = l.logStructuredEvent(`ChatgptInviteLoginPageViewed`, {
                legacyStatsigEventName: _,
                invitedWorkspaceId: n.workspaceId ?? void 0,
                isAccountMismatch: b,
                ...i
            });
        D(_, void 0, {
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
    }, A = [E, v, n.workspaceId, b, _], t[12] = v, t[13] = n.workspaceId, t[14] = E, t[15] = b, t[16] = _, t[17] = k, t[18] = A) : (k = t[17], A = t[18]), (0, Q.useEffect)(k, A);
    let j;
    t[19] === a ? j = t[20] : (j = (0, $.jsx)(`title`, {
        children: a
    }), t[19] = a, t[20] = j);
    let M;
    t[21] === o ? M = t[22] : (M = (0, $.jsx)(`meta`, {
        name: `description`,
        content: o
    }), t[21] = o, t[22] = M);
    let N;
    t[23] === Symbol.for(`react.memo_cache_sentinel`) ? (N = {
        minHeight: `100dvh`
    }, t[23] = N) : N = t[23];
    let P;
    t[24] === Symbol.for(`react.memo_cache_sentinel`) ? (P = (0, $.jsx)(pe, {}), t[24] = P) : P = t[24];
    let F;
    t[25] === h ? F = t[26] : (F = (0, $.jsx)(de, {
        to: `/`,
        className: `text-token-text-primary absolute start-5 top-5 md:start-8 md:top-6`,
        "aria-label": h,
        children: P
    }), t[25] = h, t[26] = F);
    let I;
    t[27] !== w || t[28] !== p || t[29] !== n.email || t[30] !== d || t[31] !== f || t[32] !== u || t[33] !== c ? (I = (0, $.jsx)(`div`, {
        className: `relative flex w-full grow flex-col items-center justify-center`,
        children: (0, $.jsx)(`div`, {
            className: `mt-5 w-full max-w-[440px]`,
            children: f ? (0, $.jsx)(He, {
                title: c,
                subtitle: u,
                mismatchSubtitle: d,
                connection: f,
                callbackUrl: Je(p),
                authorizationParams: w
            }) : (0, $.jsx)(Ae, {
                isUsernameOnTop: !0,
                onClose: Ke,
                title: c,
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
    }), t[27] = w, t[28] = p, t[29] = n.email, t[30] = d, t[31] = f, t[32] = u, t[33] = c, t[34] = I) : I = t[34];
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
    t[41] === Symbol.for(`react.memo_cache_sentinel`) ? (z = (0, $.jsx)(s, {
        children: (0, $.jsx)(ve, {
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
    return i(), te()
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
        a = N(e.phoneNumber);
    return !e.email && a != null ? `${i} (${a})` : r
}

function et(e) {
    "use forget";
    let t = (0, Z.c)(80),
        {
            inviteAuthContext: i,
            currentUserEmail: a,
            isStorageComplianceEnabled: o,
            invitePageUrl: s,
            postLogoutParamName: c,
            copy: l,
            inviteLoginPageProps: u
        } = e,
        d = re(),
        {
            data: f
        } = b(),
        p;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (p = [], t[0] = p) : p = t[0];
    let [m, g] = (0, Q.useState)(p), [_, v] = (0, Q.useState)(!1), [y, x] = (0, Q.useState)(null), [C, w] = (0, Q.useState)(!1), T;
    t[1] === s ? T = t[2] : (T = Ye(s), t[1] = s, t[2] = T);
    let E = T,
        D;
    t[3] !== s || t[4] !== c ? (D = Xe({
        invitePageUrl: s,
        postLogoutParamName: c
    }), t[3] = s, t[4] = c, t[5] = D) : D = t[5];
    let O = D,
        k, A;
    if (t[6] === f ? (k = t[7], A = t[8]) : (k = () => {
            if (f == null) return;
            let e = P(r(), Qe(f));
            g(e), x(t => t ?? e[0]?.sessionToken ?? null), v(!0)
        }, A = [f], t[6] = f, t[7] = k, t[8] = A), (0, Q.useEffect)(k, A), f == null || !_) {
        let e;
        return t[9] !== l.loadingTitle || t[10] !== u.wordmarkLabel || t[11] !== o ? (e = (0, $.jsx)(X, {
            title: l.loadingTitle,
            description: null,
            isStorageComplianceEnabled: o,
            wordmarkLabel: u.wordmarkLabel
        }), t[9] = l.loadingTitle, t[10] = u.wordmarkLabel, t[11] = o, t[12] = e) : e = t[12], e
    }
    if (!he(f)) {
        let e;
        t[13] !== l.accountLimitLogoutError || t[14] !== C || t[15] !== O || t[16] !== d ? (e = async () => {
            if (C) return;
            let e = r()?.sessionToken;
            if (!e) {
                h({
                    reason: S.AccountSwitcher,
                    authHistoryReason: `APP_ENTRY_AUTH_HISTORY_LOGOUT_REASON_LOGOUT`
                });
                return
            }
            w(!0);
            try {
                await F({
                    sessionToken: e,
                    currentSessionToken: e,
                    postLogoutAction: `return_to_callback_url`,
                    postLogoutCallbackUrl: O,
                    analytics: {
                        source: j.AccountSwitcherAddAccountModal,
                        type: `single_account`
                    },
                    onSessionsChanged: () => {
                        g(V())
                    },
                    onNoNextSession: h
                })
            } catch (e) {
                let t = e;
                d.danger(l.accountLimitLogoutError, {
                    description: t instanceof Error ? t.message : String(t)
                }), w(!1)
            }
        }, t[13] = l.accountLimitLogoutError, t[14] = C, t[15] = O, t[16] = d, t[17] = e) : e = t[17];
        let s = e,
            c;
        t[18] !== l || t[19] !== a || t[20] !== i.email ? (c = a == null ? l.getLogoutRequiredDescriptionWithoutCurrentEmail(i.email) : l.getLogoutRequiredDescription({
            currentUserEmail: a,
            inviteEmail: i.email
        }), t[18] = l, t[19] = a, t[20] = i.email, t[21] = c) : c = t[21];
        let f = c,
            p;
        t[22] === s ? p = t[23] : (p = () => {
            s()
        }, t[22] = s, t[23] = p);
        let m;
        t[24] !== l.logoutButton || t[25] !== C || t[26] !== p ? (m = (0, $.jsx)(n, {
            color: `primary`,
            disabled: C,
            onClick: p,
            children: l.logoutButton
        }), t[24] = l.logoutButton, t[25] = C, t[26] = p, t[27] = m) : m = t[27];
        let _;
        return t[28] !== l.logoutRequiredTitle || t[29] !== f || t[30] !== u.wordmarkLabel || t[31] !== o || t[32] !== m ? (_ = (0, $.jsx)(X, {
            title: l.logoutRequiredTitle,
            description: f,
            isStorageComplianceEnabled: o,
            wordmarkLabel: u.wordmarkLabel,
            children: m
        }), t[28] = l.logoutRequiredTitle, t[29] = f, t[30] = u.wordmarkLabel, t[31] = o, t[32] = m, t[33] = _) : _ = t[33], _
    }
    if (m.length >= 2) {
        let e;
        if (t[34] !== m || t[35] !== y) {
            let n;
            t[37] === y ? n = t[38] : (n = e => e.sessionToken === y, t[37] = y, t[38] = n), e = m.find(n), t[34] = m, t[35] = y, t[36] = e
        } else e = t[36];
        let a = e,
            s;
        t[39] !== l.accountLimitLogoutError || t[40] !== C || t[41] !== O || t[42] !== a || t[43] !== d ? (s = async () => {
            if (a == null || C) return;
            w(!0);
            let e = r(),
                t = e ? e.sessionToken : void 0;
            try {
                await F({
                    sessionToken: a.sessionToken,
                    currentSessionToken: t,
                    postLogoutAction: `return_to_callback_url`,
                    postLogoutCallbackUrl: O,
                    analytics: {
                        source: j.AccountSwitcherAddAccountModal,
                        type: `single_account`
                    },
                    onSessionsChanged: () => {
                        g(V())
                    },
                    onNoNextSession: h
                })
            } catch (e) {
                let t = e;
                d.danger(l.accountLimitLogoutError, {
                    description: t instanceof Error ? t.message : String(t)
                }), w(!1)
            }
        }, t[39] = l.accountLimitLogoutError, t[40] = C, t[41] = O, t[42] = a, t[43] = d, t[44] = s) : s = t[44];
        let c = s,
            f = l.accountLimitTitle,
            p;
        t[45] !== l || t[46] !== i.email ? (p = l.getAccountLimitDescription(i.email), t[45] = l, t[46] = i.email, t[47] = p) : p = t[47];
        let _ = u.wordmarkLabel,
            v;
        if (t[48] !== m || t[49] !== l.unknownEmailLabel || t[50] !== l.unnamedAccountLabel || t[51] !== C || t[52] !== y) {
            let e;
            t[54] !== l.unknownEmailLabel || t[55] !== l.unnamedAccountLabel || t[56] !== C || t[57] !== y ? (e = e => {
                let t = $e({
                        account: e,
                        unknownEmailLabel: l.unknownEmailLabel,
                        unnamedAccountLabel: l.unnamedAccountLabel
                    }),
                    n = e.sessionToken === y;
                return (0, $.jsxs)(`button`, {
                    type: `button`,
                    className: `border-token-border-light hover:bg-token-bg-secondary flex w-full items-center gap-3 rounded-lg border px-3 py-2 text-start`,
                    disabled: C,
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
            }, t[54] = l.unknownEmailLabel, t[55] = l.unnamedAccountLabel, t[56] = C, t[57] = y, t[58] = e) : e = t[58], v = m.map(e), t[48] = m, t[49] = l.unknownEmailLabel, t[50] = l.unnamedAccountLabel, t[51] = C, t[52] = y, t[53] = v
        } else v = t[53];
        let b;
        t[59] === v ? b = t[60] : (b = (0, $.jsx)(`div`, {
            className: `flex w-full flex-col gap-2`,
            children: v
        }), t[59] = v, t[60] = b);
        let S = C || a == null,
            T;
        t[61] === c ? T = t[62] : (T = () => {
            c()
        }, t[61] = c, t[62] = T);
        let E;
        t[63] !== l.accountLimitConfirm || t[64] !== S || t[65] !== T ? (E = (0, $.jsx)(`div`, {
            className: `mt-2 flex w-full justify-end`,
            children: (0, $.jsx)(n, {
                type: `button`,
                color: `primary`,
                disabled: S,
                onClick: T,
                children: l.accountLimitConfirm
            })
        }), t[63] = l.accountLimitConfirm, t[64] = S, t[65] = T, t[66] = E) : E = t[66];
        let D;
        return t[67] !== l.accountLimitTitle || t[68] !== u.wordmarkLabel || t[69] !== o || t[70] !== b || t[71] !== E || t[72] !== p ? (D = (0, $.jsxs)(X, {
            title: f,
            description: p,
            isStorageComplianceEnabled: o,
            wordmarkLabel: _,
            children: [b, E]
        }), t[67] = l.accountLimitTitle, t[68] = u.wordmarkLabel, t[69] = o, t[70] = b, t[71] = E, t[72] = p, t[73] = D) : D = t[73], D
    }
    let M;
    return t[74] !== E || t[75] !== a || t[76] !== i || t[77] !== u || t[78] !== o ? (M = (0, $.jsx)(Ge, {
        ...u,
        inviteAuthContext: i,
        currentUserEmail: a,
        isStorageComplianceEnabled: o,
        callbackUrl: E
    }), t[74] = E, t[75] = a, t[76] = i, t[77] = u, t[78] = o, t[79] = M) : M = t[79], M
}

function tt() {
    "use forget";
    let e = (0, Z.c)(3),
        {
            data: t
        } = b(),
        n, i;
    return e[0] === t ? (n = e[1], i = e[2]) : (n = () => {
        t == null || !he(t) || P(r(), Qe(t))
    }, i = [t], e[0] = t, e[1] = n, e[2] = i), (0, Q.useEffect)(n, i), null
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
        c;
    t[0] === n ? c = t[1] : (c = (0, $.jsx)(`title`, {
        children: n
    }), t[0] = n, t[1] = c);
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
    t[6] === r ? f = t[7] : (f = r == null ? (0, $.jsx)(p, {
        className: `h-10 w-10`
    }) : null, t[6] = r, t[7] = f);
    let m;
    t[8] === n ? m = t[9] : (m = (0, $.jsx)(`h1`, {
        className: `text-2xl font-semibold`,
        children: n
    }), t[8] = n, t[9] = m);
    let h;
    t[10] === r ? h = t[11] : (h = r == null ? null : (0, $.jsx)(`p`, {
        className: `text-token-text-secondary text-sm`,
        children: r
    }), t[10] = r, t[11] = h);
    let g;
    t[12] !== o || t[13] !== f || t[14] !== m || t[15] !== h ? (g = (0, $.jsx)(`div`, {
        className: `relative flex w-full grow flex-col items-center justify-center text-center`,
        children: (0, $.jsxs)(`div`, {
            className: `flex w-full max-w-[440px] flex-col items-center gap-4`,
            children: [f, m, h, o]
        })
    }), t[12] = o, t[13] = f, t[14] = m, t[15] = h, t[16] = g) : g = t[16];
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
    t[23] === Symbol.for(`react.memo_cache_sentinel`) ? (y = (0, $.jsx)(s, {
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
    return t[26] !== c || t[27] !== b ? (x = (0, $.jsxs)($.Fragment, {
        children: [c, b]
    }), t[26] = c, t[27] = b, t[28] = x) : x = t[28], x
}
var Z, Q, $, nt = e((() => {
    Z = fe(), _(), De(), ke(), x(), ge(), ee(), _e(), a(), w(), me(), u(), ie(), I(), f(), L(), d(), M(), o(), ne(), T(), R(), k(), Q = t(ce()), oe(), Ue(), le(), $ = G()
}));
export {
    Ye as a, We as c, et as i, Ge as n, Ze as o, X as r, nt as s, tt as t
};
//# sourceMappingURL=d754d344-l43gegbk4csohc7f.js.map