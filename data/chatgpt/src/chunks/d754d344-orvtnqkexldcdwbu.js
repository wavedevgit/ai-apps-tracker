import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Az as n,
    BU as r,
    E0 as i,
    Fot as a,
    GR as o,
    HU as s,
    IR as c,
    Iit as l,
    JT as u,
    MF as d,
    Mz as f,
    Oz as p,
    QN as m,
    Qit as h,
    Qnt as g,
    Qrt as _,
    R1 as v,
    X1 as y,
    XN as b,
    XR as x,
    YT as S,
    ZN as C,
    ZR as w,
    Zit as T,
    Znt as E,
    _0 as D,
    bnt as O,
    dit as k,
    eat as A,
    eit as j,
    ez as M,
    fr as N,
    h0 as P,
    hit as F,
    jR as I,
    kz as L,
    pr as R,
    qR as z,
    rat as B,
    rit as ee,
    sit as te,
    tP as ne,
    tat as re,
    vnt as ie,
    w0 as ae,
    wF as oe,
    x0 as se,
    zit as ce
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Bn as le,
    Nn as V,
    Nt as ue,
    Q as de,
    Rn as fe,
    Vn as pe,
    Zt as me,
    an as he,
    it as ge,
    wn as _e
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    AGn as ve,
    E8 as ye,
    G4t as H,
    K4t as be,
    OGn as U,
    T8 as W
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    $x as xe,
    Qx as Se,
    Xl as Ce,
    Zl as we
} from "./30901919-e8h11sw136qen6v0.js";
import {
    a as Te,
    n as Ee,
    o as De,
    t as Oe
} from "./c09d86e5-fgoohn2w2vrkcgwk.js";
import {
    a as ke,
    i as G
} from "./9bbac052-epgz1fzgbyuxwxwe.js";
import {
    n as Ae,
    t as je
} from "./35711af7-bzflw3wamuna2ugi.js";
import {
    a as Me,
    c as Ne,
    n as Pe,
    o as Fe,
    s as Ie,
    t as Le
} from "./c982bafe-o0ti19z4djf4llrq.js";
import {
    n as Re,
    t as ze
} from "./966be48d-kt0akpg9tmx4onkc.js";

function Be(e) {
    return e + 1
}

function Ve(e) {
    return e.name !== `phone_number`
}
var He, K, q, Ue, We = e((() => {
    He = _e(), I(), Te(), Ie(), M(), Re(), Pe(), Ee(), S(), Ce(), Se(), k(), Me(), x(), K = t(pe()), fe(), de(), q = le(), Ue = e => {
        "use forget";
        let t = (0, He.c)(60),
            {
                title: n,
                subtitle: r,
                mismatchSubtitle: i,
                connection: a,
                callbackUrl: s,
                authorizationParams: l
            } = e,
            d = ue(),
            f;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (f = {
            loginStrategy: `existing_user`
        }, t[0] = f) : f = t[0];
        let {
            optionsForDisplay: p
        } = Ne(f), [m, h] = De(!0), [g, _] = (0, K.useState)(0), [v, y] = (0, K.useState)(!1), b;
        t[1] !== l || t[2] !== s ? (b = Le(s, l), t[1] = l, t[2] = s, t[3] = b) : b = t[3];
        let x = b,
            S;
        t[4] !== l || t[5] !== m || t[6] !== d || t[7] !== h || t[8] !== x ? (S = async (e, t) => {
            if (!m) {
                h(!0), y(!1);
                try {
                    await x({
                        screen_hint: `login_or_signup`,
                        ...e
                    }, () => {
                        c(l[ee], t, o.ACCESS_FLOW_PAGE_TYPE_CHATGPT_WEB_LOGIN_PAGE)
                    })
                } catch {
                    y(!0), _(Be)
                }
                h(!1)
            }
        }, t[4] = l, t[5] = m, t[6] = d, t[7] = h, t[8] = x, t[9] = S) : S = t[9];
        let C = S,
            T, E, D, O, k, A, j, M, N;
        if (t[10] !== a || t[11] !== C || t[12] !== g || t[13] !== m || t[14] !== i || t[15] !== p || t[16] !== r || t[17] !== n) {
            let e = p.filter(Ve);
            N = `flex flex-col items-center gap-3 text-center`, t[27] === n ? T = t[28] : (T = (0, q.jsx)(`h1`, {
                className: `text-2xl font-semibold`,
                children: n
            }), t[27] = n, t[28] = T), t[29] === r ? E = t[30] : (E = (0, q.jsx)(`p`, {
                className: `text-token-text-secondary text-sm`,
                children: r
            }), t[29] = r, t[30] = E), t[31] === i ? D = t[32] : (D = i ? (0, q.jsx)(`p`, {
                className: `text-token-text-secondary text-sm`,
                children: i
            }) : null, t[31] = i, t[32] = D), O = `flex w-full flex-col gap-3 px-6 pt-3`, k = m;
            let o;
            t[33] !== a || t[34] !== C ? (o = () => {
                C({
                    connection: a,
                    connection_provider: a.startsWith(`conn_`) || a.startsWith(`oaisaml_`) ? te.WorkOS.toString() : te.Auth0.toString()
                }, z.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_SSO)
            }, t[33] = a, t[34] = C, t[35] = o) : o = t[35];
            let s, c;
            t[36] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, q.jsx)(we, {
                className: `icon`
            }), c = (0, q.jsx)(V, {
                id: `AcceptInvitePage.sso.button.company`,
                defaultMessage: `Continue with company SSO`
            }), t[36] = s, t[37] = c) : (s = t[36], c = t[37]), t[38] !== m || t[39] !== o ? (A = (0, q.jsxs)(u, {
                type: `button`,
                color: `primary`,
                className: `h-[52px] rounded-full text-base`,
                contentWrapperClassName: `gap-2`,
                disabled: m,
                onClick: o,
                children: [s, c]
            }), t[38] = m, t[39] = o, t[40] = A) : A = t[40], j = e.length > 0 ? (0, q.jsx)(ze, {
                children: (0, q.jsx)(V, {
                    id: `AcceptInvitePage.sso.divider.or`,
                    defaultMessage: `or`
                })
            }) : null;
            let l;
            t[41] !== C || t[42] !== g || t[43] !== m ? (l = e => {
                if (e.name === `email`) return (0, q.jsxs)(u, {
                    type: `button`,
                    color: `secondary`,
                    className: `h-[52px] rounded-full text-base`,
                    contentWrapperClassName: `gap-2`,
                    disabled: m || e.tempDisabled,
                    onClick: () => {
                        C({
                            connection: `password`
                        }, z.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_PASSWORD)
                    },
                    children: [(0, q.jsx)(xe, {
                        className: `icon`
                    }), (0, q.jsx)(V, {
                        id: `AcceptInvitePage.sso.button.password`,
                        defaultMessage: `Continue with password`
                    })]
                }, e.name);
                if (e.name === `phone_number`) return null;
                let t = e.name;
                return (0, q.jsx)(Oe, {
                    provider: t,
                    className: `h-[52px] rounded-full text-base`,
                    disabled: m || e.tempDisabled,
                    onClick: () => {
                        C({
                            connection: w[t]
                        }, Fe(t))
                    }
                }, `${t}-${g}`)
            }, t[41] = C, t[42] = g, t[43] = m, t[44] = l) : l = t[44], M = e.map(l), t[10] = a, t[11] = C, t[12] = g, t[13] = m, t[14] = i, t[15] = p, t[16] = r, t[17] = n, t[18] = T, t[19] = E, t[20] = D, t[21] = O, t[22] = k, t[23] = A, t[24] = j, t[25] = M, t[26] = N
        } else T = t[18], E = t[19], D = t[20], O = t[21], k = t[22], A = t[23], j = t[24], M = t[25], N = t[26];
        let P;
        t[45] !== O || t[46] !== k || t[47] !== A || t[48] !== j || t[49] !== M ? (P = (0, q.jsxs)(`div`, {
            className: O,
            "aria-busy": k,
            children: [A, j, M]
        }), t[45] = O, t[46] = k, t[47] = A, t[48] = j, t[49] = M, t[50] = P) : P = t[50];
        let F;
        t[51] === v ? F = t[52] : (F = v ? (0, q.jsx)(`p`, {
            role: `alert`,
            className: `text-token-interactive-label-warning-secondary text-sm`,
            children: (0, q.jsx)(V, {
                id: `AcceptInvitePage.sso.error.signIn`,
                defaultMessage: `Couldn't start sign-in. Please try again.`
            })
        }) : null, t[51] = v, t[52] = F);
        let I;
        return t[53] !== T || t[54] !== E || t[55] !== D || t[56] !== P || t[57] !== F || t[58] !== N ? (I = (0, q.jsxs)(`div`, {
            className: N,
            children: [T, E, D, P, F]
        }), t[53] = T, t[54] = E, t[55] = D, t[56] = P, t[57] = F, t[58] = N, t[59] = I) : I = t[59], I
    }
}));

function Ge({
    workspaceId: e,
    acceptWorkspaceId: t
}) {
    e && (A.deleteCookie(B.WorkspaceComputeResidencyCluster), A.setCookie(B.Workspace, e, {
        maxAge: _
    })), t ? A.setCookie(B.AcceptAccountId, t, {
        maxAge: 120
    }) : A.deleteCookie(B.AcceptAccountId)
}

function Ke(e) {
    "use forget";
    let t = (0, Z.c)(48),
        {
            inviteAuthContext: n,
            currentUserEmail: r,
            isStorageComplianceEnabled: i,
            browserTitle: a,
            metaDescription: o,
            title: s,
            subtitle: c,
            mismatchSubtitle: l,
            optionalSsoConnection: u,
            callbackUrl: d,
            wordmarkLabel: f,
            pageShownEventName: m
        } = e,
        h = m === void 0 ? `chatgpt_accept_invite_page_shown` : m,
        [_] = (0, Q.useState)(Je),
        v;
    t[0] !== r || t[1] !== n.email ? (v = r != null && r.trim().toLowerCase() !== n.email.trim().toLowerCase(), t[0] = r, t[1] = n.email, t[2] = v) : v = t[2];
    let y = v,
        b;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (b = ae(T()), t[3] = b) : b = t[3];
    let x;
    t[4] === n.acceptWorkspaceId ? x = t[5] : (x = n.acceptWorkspaceId ? {
        accept_wId: n.acceptWorkspaceId
    } : {}, t[4] = n.acceptWorkspaceId, t[5] = x);
    let S;
    t[6] !== _ || t[7] !== n.email || t[8] !== x ? (S = {
        ...b,
        login_hint: n.email,
        ...x,
        [ee]: _
    }, t[6] = _, t[7] = n.email, t[8] = x, t[9] = S) : S = t[9];
    let C = S,
        w;
    t[10] === d ? w = t[11] : (w = new URL(d, `https://chatgpt.com`), t[10] = d, t[11] = w);
    let E = w.search,
        D, O;
    t[12] !== _ || t[13] !== n.workspaceId || t[14] !== E || t[15] !== y || t[16] !== h ? (D = () => {
        let e = new URLSearchParams(E),
            t = e.get(`aiId`),
            r = e.get(`eid`),
            i = {
                authSessionLoggingId: _,
                inviteId: t && /^[a-zA-Z0-9_-]{1,128}$/.test(t) ? t : void 0,
                entryId: r && he(r) ? r : void 0,
                isAutomated: navigator.webdriver
            },
            a = ie.logStructuredEvent(`ChatgptInviteLoginPageViewed`, {
                legacyStatsigEventName: h,
                invitedWorkspaceId: n.workspaceId ?? void 0,
                isAccountMismatch: y,
                ...i
            });
        g(h, void 0, {
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
    }, O = [E, _, n.workspaceId, y, h], t[12] = _, t[13] = n.workspaceId, t[14] = E, t[15] = y, t[16] = h, t[17] = D, t[18] = O) : (D = t[17], O = t[18]), (0, Q.useEffect)(D, O);
    let k;
    t[19] === a ? k = t[20] : (k = (0, $.jsx)(`title`, {
        children: a
    }), t[19] = a, t[20] = k);
    let A;
    t[21] === o ? A = t[22] : (A = (0, $.jsx)(`meta`, {
        name: `description`,
        content: o
    }), t[21] = o, t[22] = A);
    let j;
    t[23] === Symbol.for(`react.memo_cache_sentinel`) ? (j = {
        minHeight: `100dvh`
    }, t[23] = j) : j = t[23];
    let M;
    t[24] === Symbol.for(`react.memo_cache_sentinel`) ? (M = (0, $.jsx)(W, {}), t[24] = M) : M = t[24];
    let N;
    t[25] === f ? N = t[26] : (N = (0, $.jsx)(ge, {
        to: `/`,
        className: `text-token-text-primary absolute start-5 top-5 md:start-8 md:top-6`,
        "aria-label": f,
        children: M
    }), t[25] = f, t[26] = N);
    let P;
    t[27] !== C || t[28] !== d || t[29] !== n.email || t[30] !== l || t[31] !== u || t[32] !== c || t[33] !== s ? (P = (0, $.jsx)(`div`, {
        className: `relative flex w-full grow flex-col items-center justify-center`,
        children: (0, $.jsx)(`div`, {
            className: `mt-5 w-full max-w-[440px]`,
            children: u ? (0, $.jsx)(Ue, {
                title: s,
                subtitle: c,
                mismatchSubtitle: l,
                connection: u,
                callbackUrl: Ye(d),
                authorizationParams: C
            }) : (0, $.jsx)(je, {
                isUsernameOnTop: !0,
                onClose: qe,
                title: s,
                subtitle: c,
                mutedSubtitle: l,
                initialEmail: n.email,
                callbackUrl: d,
                authorizationParams: C,
                isStayLoggedOutVisible: !1,
                stayLoggedOutPlacement: `bottom`,
                googleButtonColor: `secondary`,
                isInModal: !1,
                collapsedLoginVariant: `none`
            })
        })
    }), t[27] = C, t[28] = d, t[29] = n.email, t[30] = l, t[31] = u, t[32] = c, t[33] = s, t[34] = P) : P = t[34];
    let F;
    t[35] === i ? F = t[36] : (F = (0, $.jsx)(`div`, {
        className: `mt-10 flex flex-col items-center justify-center`,
        children: (0, $.jsx)(G, {
            isStorageComplianceEnabled: i
        })
    }), t[35] = i, t[36] = F);
    let I;
    t[37] !== N || t[38] !== P || t[39] !== F ? (I = (0, $.jsxs)(`main`, {
        className: `relative flex grow flex-col items-center justify-between px-5 py-8 text-black md:px-6 dark:text-white`,
        children: [N, P, F]
    }), t[37] = N, t[38] = P, t[39] = F, t[40] = I) : I = t[40];
    let L;
    t[41] === Symbol.for(`react.memo_cache_sentinel`) ? (L = (0, $.jsx)(p, {
        children: (0, $.jsx)(U, {
            fixed: !0
        })
    }), t[41] = L) : L = t[41];
    let R;
    t[42] === I ? R = t[43] : (R = (0, $.jsxs)(`div`, {
        className: `flex min-h-screen flex-col justify-between`,
        style: j,
        children: [I, L]
    }), t[42] = I, t[43] = R);
    let z;
    return t[44] !== A || t[45] !== R || t[46] !== k ? (z = (0, $.jsxs)($.Fragment, {
        children: [k, A, R]
    }), t[44] = A, t[45] = R, t[46] = k, t[47] = z) : z = t[47], z
}

function qe() {}

function Je() {
    return se(), P()
}

function J(e) {
    return new URL(e, window.location.origin)
}

function Ye(e) {
    let t = J(e);
    return t.searchParams.delete(`sso`), t.searchParams.delete(`connection`), t.searchParams.delete(`login_hint`), `${t.pathname}${t.search}${t.hash}`
}

function Y(e) {
    let t = J(e);
    return t.searchParams.set(`account_switch`, `true`), t.searchParams.set(`account_switch_login`, `add_account`), `${t.pathname}${t.search}${t.hash}`
}

function Xe({
    invitePageUrl: e,
    postLogoutParamName: t
}) {
    let n = J(e);
    return n.searchParams.set(t, `true`), `${n.pathname}${n.search}${n.hash}`
}

function Ze({
    invitePageUrl: e,
    postLogoutParamName: t
}) {
    let n = J(e);
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
        a = C(e.phoneNumber);
    return !e.email && a != null ? `${i} (${a})` : r
}

function et(e) {
    "use forget";
    let t = (0, Z.c)(80),
        {
            inviteAuthContext: n,
            currentUserEmail: r,
            isStorageComplianceEnabled: i,
            invitePageUrl: o,
            postLogoutParamName: c,
            copy: d,
            inviteLoginPageProps: f
        } = e,
        p = s(),
        {
            data: m
        } = y(),
        h;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (h = [], t[0] = h) : h = t[0];
    let [g, _] = (0, Q.useState)(h), [v, x] = (0, Q.useState)(!1), [S, C] = (0, Q.useState)(null), [w, T] = (0, Q.useState)(!1), E;
    t[1] === o ? E = t[2] : (E = Y(o), t[1] = o, t[2] = E);
    let D = E,
        O;
    t[3] !== o || t[4] !== c ? (O = Xe({
        invitePageUrl: o,
        postLogoutParamName: c
    }), t[3] = o, t[4] = c, t[5] = O) : O = t[5];
    let k = O,
        A, j;
    if (t[6] === m ? (A = t[7], j = t[8]) : (A = () => {
            if (m == null) return;
            let e = ne(a(), Qe(m));
            _(e), C(t => t ?? e[0]?.sessionToken ?? null), x(!0)
        }, j = [m], t[6] = m, t[7] = A, t[8] = j), (0, Q.useEffect)(A, j), m == null || !v) {
        let e;
        return t[9] !== d.loadingTitle || t[10] !== f.wordmarkLabel || t[11] !== i ? (e = (0, $.jsx)(X, {
            title: d.loadingTitle,
            description: null,
            isStorageComplianceEnabled: i,
            wordmarkLabel: f.wordmarkLabel
        }), t[9] = d.loadingTitle, t[10] = f.wordmarkLabel, t[11] = i, t[12] = e) : e = t[12], e
    }
    if (!H(m)) {
        let e;
        t[13] !== d.accountLimitLogoutError || t[14] !== w || t[15] !== k || t[16] !== p ? (e = async () => {
            if (w) return;
            let e = a()?.sessionToken;
            if (!e) {
                F({
                    reason: l.AccountSwitcher,
                    authHistoryReason: `APP_ENTRY_AUTH_HISTORY_LOGOUT_REASON_LOGOUT`
                });
                return
            }
            T(!0);
            try {
                await R({
                    sessionToken: e,
                    currentSessionToken: e,
                    postLogoutAction: `return_to_callback_url`,
                    postLogoutCallbackUrl: k,
                    analytics: {
                        source: oe.AccountSwitcherAddAccountModal,
                        type: `single_account`
                    },
                    onSessionsChanged: () => {
                        _(b())
                    },
                    onNoNextSession: F
                })
            } catch (e) {
                let t = e;
                p.danger(d.accountLimitLogoutError, {
                    description: t instanceof Error ? t.message : String(t)
                }), T(!1)
            }
        }, t[13] = d.accountLimitLogoutError, t[14] = w, t[15] = k, t[16] = p, t[17] = e) : e = t[17];
        let o = e,
            s;
        t[18] !== d || t[19] !== r || t[20] !== n.email ? (s = r == null ? d.getLogoutRequiredDescriptionWithoutCurrentEmail(n.email) : d.getLogoutRequiredDescription({
            currentUserEmail: r,
            inviteEmail: n.email
        }), t[18] = d, t[19] = r, t[20] = n.email, t[21] = s) : s = t[21];
        let c = s,
            m;
        t[22] === o ? m = t[23] : (m = () => {
            o()
        }, t[22] = o, t[23] = m);
        let h;
        t[24] !== d.logoutButton || t[25] !== w || t[26] !== m ? (h = (0, $.jsx)(u, {
            color: `primary`,
            disabled: w,
            onClick: m,
            children: d.logoutButton
        }), t[24] = d.logoutButton, t[25] = w, t[26] = m, t[27] = h) : h = t[27];
        let g;
        return t[28] !== d.logoutRequiredTitle || t[29] !== c || t[30] !== f.wordmarkLabel || t[31] !== i || t[32] !== h ? (g = (0, $.jsx)(X, {
            title: d.logoutRequiredTitle,
            description: c,
            isStorageComplianceEnabled: i,
            wordmarkLabel: f.wordmarkLabel,
            children: h
        }), t[28] = d.logoutRequiredTitle, t[29] = c, t[30] = f.wordmarkLabel, t[31] = i, t[32] = h, t[33] = g) : g = t[33], g
    }
    if (g.length >= 2) {
        let e;
        if (t[34] !== g || t[35] !== S) {
            let n;
            t[37] === S ? n = t[38] : (n = e => e.sessionToken === S, t[37] = S, t[38] = n), e = g.find(n), t[34] = g, t[35] = S, t[36] = e
        } else e = t[36];
        let r = e,
            o;
        t[39] !== d.accountLimitLogoutError || t[40] !== w || t[41] !== k || t[42] !== r || t[43] !== p ? (o = async () => {
            if (r == null || w) return;
            T(!0);
            let e = a(),
                t = e ? e.sessionToken : void 0;
            try {
                await R({
                    sessionToken: r.sessionToken,
                    currentSessionToken: t,
                    postLogoutAction: `return_to_callback_url`,
                    postLogoutCallbackUrl: k,
                    analytics: {
                        source: oe.AccountSwitcherAddAccountModal,
                        type: `single_account`
                    },
                    onSessionsChanged: () => {
                        _(b())
                    },
                    onNoNextSession: F
                })
            } catch (e) {
                let t = e;
                p.danger(d.accountLimitLogoutError, {
                    description: t instanceof Error ? t.message : String(t)
                }), T(!1)
            }
        }, t[39] = d.accountLimitLogoutError, t[40] = w, t[41] = k, t[42] = r, t[43] = p, t[44] = o) : o = t[44];
        let s = o,
            c = d.accountLimitTitle,
            l;
        t[45] !== d || t[46] !== n.email ? (l = d.getAccountLimitDescription(n.email), t[45] = d, t[46] = n.email, t[47] = l) : l = t[47];
        let m = f.wordmarkLabel,
            h;
        if (t[48] !== g || t[49] !== d.unknownEmailLabel || t[50] !== d.unnamedAccountLabel || t[51] !== w || t[52] !== S) {
            let e;
            t[54] !== d.unknownEmailLabel || t[55] !== d.unnamedAccountLabel || t[56] !== w || t[57] !== S ? (e = e => {
                let t = $e({
                        account: e,
                        unknownEmailLabel: d.unknownEmailLabel,
                        unnamedAccountLabel: d.unnamedAccountLabel
                    }),
                    n = e.sessionToken === S;
                return (0, $.jsxs)(`button`, {
                    type: `button`,
                    className: `border-token-border-light hover:bg-token-bg-secondary flex w-full items-center gap-3 rounded-lg border px-3 py-2 text-start`,
                    disabled: w,
                    onClick: () => {
                        C(e.sessionToken)
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
            }, t[54] = d.unknownEmailLabel, t[55] = d.unnamedAccountLabel, t[56] = w, t[57] = S, t[58] = e) : e = t[58], h = g.map(e), t[48] = g, t[49] = d.unknownEmailLabel, t[50] = d.unnamedAccountLabel, t[51] = w, t[52] = S, t[53] = h
        } else h = t[53];
        let v;
        t[59] === h ? v = t[60] : (v = (0, $.jsx)(`div`, {
            className: `flex w-full flex-col gap-2`,
            children: h
        }), t[59] = h, t[60] = v);
        let y = w || r == null,
            x;
        t[61] === s ? x = t[62] : (x = () => {
            s()
        }, t[61] = s, t[62] = x);
        let E;
        t[63] !== d.accountLimitConfirm || t[64] !== y || t[65] !== x ? (E = (0, $.jsx)(`div`, {
            className: `mt-2 flex w-full justify-end`,
            children: (0, $.jsx)(u, {
                type: `button`,
                color: `primary`,
                disabled: y,
                onClick: x,
                children: d.accountLimitConfirm
            })
        }), t[63] = d.accountLimitConfirm, t[64] = y, t[65] = x, t[66] = E) : E = t[66];
        let D;
        return t[67] !== d.accountLimitTitle || t[68] !== f.wordmarkLabel || t[69] !== i || t[70] !== v || t[71] !== E || t[72] !== l ? (D = (0, $.jsxs)(X, {
            title: c,
            description: l,
            isStorageComplianceEnabled: i,
            wordmarkLabel: m,
            children: [v, E]
        }), t[67] = d.accountLimitTitle, t[68] = f.wordmarkLabel, t[69] = i, t[70] = v, t[71] = E, t[72] = l, t[73] = D) : D = t[73], D
    }
    let M;
    return t[74] !== D || t[75] !== r || t[76] !== n || t[77] !== f || t[78] !== i ? (M = (0, $.jsx)(Ke, {
        ...f,
        inviteAuthContext: n,
        currentUserEmail: r,
        isStorageComplianceEnabled: i,
        callbackUrl: D
    }), t[74] = D, t[75] = r, t[76] = n, t[77] = f, t[78] = i, t[79] = M) : M = t[79], M
}

function tt() {
    "use forget";
    let e = (0, Z.c)(3),
        {
            data: t
        } = y(),
        n, r;
    return e[0] === t ? (n = e[1], r = e[2]) : (n = () => {
        t == null || !H(t) || ne(a(), Qe(t))
    }, r = [t], e[0] = t, e[1] = n, e[2] = r), (0, Q.useEffect)(n, r), null
}

function X(e) {
    "use forget";
    let t = (0, Z.c)(29),
        {
            title: r,
            description: i,
            isStorageComplianceEnabled: a,
            wordmarkLabel: o,
            children: s
        } = e,
        c;
    t[0] === r ? c = t[1] : (c = (0, $.jsx)(`title`, {
        children: r
    }), t[0] = r, t[1] = c);
    let l;
    t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (l = {
        minHeight: `100dvh`
    }, t[2] = l) : l = t[2];
    let u;
    t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (u = (0, $.jsx)(W, {}), t[3] = u) : u = t[3];
    let d;
    t[4] === o ? d = t[5] : (d = (0, $.jsx)(ge, {
        to: `/`,
        className: `text-token-text-primary absolute start-5 top-5 md:start-8 md:top-6`,
        "aria-label": o,
        children: u
    }), t[4] = o, t[5] = d);
    let f;
    t[6] === i ? f = t[7] : (f = i == null ? (0, $.jsx)(n, {
        className: `h-10 w-10`
    }) : null, t[6] = i, t[7] = f);
    let m;
    t[8] === r ? m = t[9] : (m = (0, $.jsx)(`h1`, {
        className: `text-2xl font-semibold`,
        children: r
    }), t[8] = r, t[9] = m);
    let h;
    t[10] === i ? h = t[11] : (h = i == null ? null : (0, $.jsx)(`p`, {
        className: `text-token-text-secondary text-sm`,
        children: i
    }), t[10] = i, t[11] = h);
    let g;
    t[12] !== s || t[13] !== f || t[14] !== m || t[15] !== h ? (g = (0, $.jsx)(`div`, {
        className: `relative flex w-full grow flex-col items-center justify-center text-center`,
        children: (0, $.jsxs)(`div`, {
            className: `flex w-full max-w-[440px] flex-col items-center gap-4`,
            children: [f, m, h, s]
        })
    }), t[12] = s, t[13] = f, t[14] = m, t[15] = h, t[16] = g) : g = t[16];
    let _;
    t[17] === a ? _ = t[18] : (_ = (0, $.jsx)(`div`, {
        className: `mt-10 flex flex-col items-center justify-center`,
        children: (0, $.jsx)(G, {
            isStorageComplianceEnabled: a
        })
    }), t[17] = a, t[18] = _);
    let v;
    t[19] !== d || t[20] !== g || t[21] !== _ ? (v = (0, $.jsxs)(`main`, {
        className: `relative flex grow flex-col items-center justify-between px-5 py-8 text-black md:px-6 dark:text-white`,
        children: [d, g, _]
    }), t[19] = d, t[20] = g, t[21] = _, t[22] = v) : v = t[22];
    let y;
    t[23] === Symbol.for(`react.memo_cache_sentinel`) ? (y = (0, $.jsx)(p, {
        children: (0, $.jsx)(U, {
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
    Z = _e(), O(), ke(), Ae(), S(), ve(), j(), ye(), D(), N(), be(), L(), f(), v(), r(), m(), d(), k(), i(), re(), h(), ce(), E(), Q = t(pe()), de(), We(), me(), $ = le()
}));
export {
    Y as a, Ge as c, et as i, Ke as n, Ze as o, X as r, nt as s, tt as t
};
//# sourceMappingURL=d754d344-orvtnqkexldcdwbu.js.map