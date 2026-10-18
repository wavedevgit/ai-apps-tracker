import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Cit as n,
    J2 as r,
    Qit as i,
    Sit as a,
    Tit as o,
    Y2 as s,
    a7 as c,
    fz as l,
    iat as u,
    l7 as d,
    uz as f
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as p,
    At as m,
    Bn as h,
    Ht as g,
    Ln as _,
    Pt as v,
    Rn as y,
    Ut as b,
    Vn as x,
    Zt as S,
    an as C,
    jt as w,
    wn as T,
    zn as E
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    i as D,
    r as O,
    t as k
} from "./cedb005c-ol0an49ccokglkmo.js";
import {
    a as A,
    c as j,
    i as M,
    n as N,
    o as P,
    s as F
} from "./d754d344-712anm90ily7u7k0.js";
import {
    n as I,
    t as L
} from "./0c23dd89-efb6p4bvlzo1qysr.js";

function R(e) {
    "use forget";
    let t = (0, B.c)(22),
        {
            inviteAuthContext: n,
            redirectPath: s
        } = e,
        l = v(),
        [u] = g(),
        d;
    t[0] === u ? d = t[1] : (d = u.get(`invite_auth_return`), t[0] = u, t[1] = d);
    let p = d === `true`,
        [m, h] = (0, V.useState)(`accepting`),
        {
            acceptWorkspaceId: _,
            workspaceId: y
        } = n,
        b;
    t[2] === _ ? b = t[3] : (b = () => k({
        action: `request_full_workspace_approval`,
        actorRole: `invited_user`,
        affectedTargetCount: 1,
        surface: `full_workspace_invite`,
        targetScope: `individual`,
        targetWorkspaceId: _ ?? void 0
    }), t[2] = _, t[3] = b);
    let [x] = (0, V.useState)(b), S, w;
    t[4] !== _ || t[5] !== x || t[6] !== p || t[7] !== l || t[8] !== s || t[9] !== y ? (S = () => {
        if (!_ || !y) return;
        let e = !0,
            t;
        if (p) try {
            let e = a.getCookie(o.AuthSessionLoggingId);
            e && C(e) && (t = e)
        } catch {}
        return c.safePost(`/accounts/{account_id}/invites/accept`, {
            ...t ? {
                additionalHeaders: {
                    "X-OpenAI-Auth-Session-Logging-Id": t
                }
            } : {},
            parameters: {
                path: {
                    account_id: _
                }
            }
        }).then(() => {
            if (!e) return;
            j({
                workspaceId: y,
                acceptWorkspaceId: null
            });
            let t = new URL(s, window.location.origin);
            t.searchParams.set(`refresh_account`, `true`), r(t.pathname + t.search + t.hash)
        }).catch(t => {
            if (e) {
                if (t instanceof i) {
                    if (t.code === `workspace_paid_seat_capacity_exhausted`) {
                        D(x, {
                            capacityResult: `workspace_full`,
                            fulfillmentType: `approval_request`,
                            step: `workspace_full_shown`
                        }), h(`full`);
                        return
                    }
                    if (t.code === `workspace_join_request_pending`) {
                        h(`pending`);
                        return
                    }
                }
                j({
                    workspaceId: y,
                    acceptWorkspaceId: _
                }), l(s, {
                    replace: !0
                })
            }
        }), () => {
            e = !1
        }
    }, w = [_, x, p, l, s, y], t[4] = _, t[5] = x, t[6] = p, t[7] = l, t[8] = s, t[9] = y, t[10] = S, t[11] = w) : (S = t[10], w = t[11]), (0, V.useEffect)(S, w);
    let T;
    t[12] !== _ || t[13] !== x ? (T = async function() {
        if (_) {
            h(`requesting`), D(x, {
                fulfillmentType: `approval_request`,
                step: `action_initiated`
            });
            try {
                await c.safePost(`/accounts/{account_id}/invites/request`, {
                    parameters: {
                        path: {
                            account_id: _
                        }
                    }
                }), D(x, {
                    failedTargetCount: 0,
                    fulfillmentType: `approval_request`,
                    step: `action_succeeded`,
                    successfulTargetCount: 1
                }), h(`sent`)
            } catch {
                D(x, {
                    actionFailureType: `mutation_failed`,
                    failedTargetCount: 1,
                    fulfillmentType: `approval_request`,
                    step: `action_attempt_failed`,
                    successfulTargetCount: 0
                }), h(`full`)
            }
        }
    }, t[12] = _, t[13] = x, t[14] = T) : T = t[14];
    let E = T;
    if (m === `accepting`) {
        let e;
        return t[15] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, H.jsx)(f, {}), t[15] = e) : e = t[15], e
    }
    let O;
    t[16] === l ? O = t[17] : (O = () => {
        l(`/`)
    }, t[16] = l, t[17] = O);
    let A;
    return t[18] !== E || t[19] !== m || t[20] !== O ? (A = (0, H.jsx)(L, {
        state: m,
        onRequestToJoin: E,
        onClose: O
    }), t[18] = E, t[19] = m, t[20] = O, t[21] = A) : A = t[21], A
}

function z(e) {
    "use forget";
    let t = (0, B.c)(77),
        {
            inviteAuthContext: n,
            currentUserEmail: r,
            isStorageComplianceEnabled: i,
            isLoggedInAsDifferentEmail: a
        } = e,
        o = E(),
        {
            hash: s,
            pathname: c,
            search: l
        } = w(),
        [u] = g(),
        d;
    t[0] === l ? d = t[1] : (d = new URLSearchParams(l), d.delete(`invite_normalization_return`), d.set(`invite_auth_return`, `true`), t[0] = l, t[1] = d);
    let f = `${c}?${d}${s}`,
        p;
    t[2] === u ? p = t[3] : (p = u.get(W), t[2] = u, t[3] = p);
    let m = p === `true`,
        h;
    t[4] !== r || t[5] !== o || t[6] !== a ? (h = a && r ? o.formatMessage(U.emailMismatch, {
        currentEmail: r
    }) : void 0, t[4] = r, t[5] = o, t[6] = a, t[7] = h) : h = t[7];
    let _ = h,
        v;
    t[8] === o ? v = t[9] : (v = o.formatMessage(U.browserTitle), t[8] = o, t[9] = v);
    let y;
    t[10] === o ? y = t[11] : (y = o.formatMessage(U.pageDescription), t[10] = o, t[11] = y);
    let b;
    t[12] !== o || t[13] !== n.workspaceName ? (b = o.formatMessage(U.pageTitle, {
        workspaceName: n.workspaceName
    }), t[12] = o, t[13] = n.workspaceName, t[14] = b) : b = t[14];
    let x;
    t[15] !== o || t[16] !== n.email ? (x = o.formatMessage(U.subtitle, {
        email: n.email
    }), t[15] = o, t[16] = n.email, t[17] = x) : x = t[17];
    let S;
    t[18] === u ? S = t[19] : (S = u.get(`sso`) === `optional` ? u.get(`connection`) : null, t[18] = u, t[19] = S);
    let C;
    t[20] === o ? C = t[21] : (C = o.formatMessage(U.wordmarkLink), t[20] = o, t[21] = C);
    let T;
    t[22] !== _ || t[23] !== v || t[24] !== y || t[25] !== b || t[26] !== x || t[27] !== S || t[28] !== C ? (T = {
        browserTitle: v,
        metaDescription: y,
        title: b,
        subtitle: x,
        mismatchSubtitle: _,
        optionalSsoConnection: S,
        wordmarkLabel: C
    }, t[22] = _, t[23] = v, t[24] = y, t[25] = b, t[26] = x, t[27] = S, t[28] = C, t[29] = T) : T = t[29];
    let D = T;
    if (a) {
        let e;
        t[30] === o ? e = t[31] : (e = o.formatMessage(U.loadingAccountTitle), t[30] = o, t[31] = e);
        let a;
        t[32] === o ? a = t[33] : (a = o.formatMessage(U.logoutRequiredTitle), t[32] = o, t[33] = a);
        let s, c, l;
        t[34] === o ? (s = t[35], c = t[36], l = t[37]) : (s = e => {
            let {
                currentUserEmail: t,
                inviteEmail: n
            } = e;
            return o.formatMessage(U.logoutRequiredDescription, {
                currentEmail: t,
                inviteEmail: n
            })
        }, c = e => o.formatMessage(U.logoutRequiredDescriptionWithoutCurrentEmail, {
            inviteEmail: e
        }), l = o.formatMessage(U.logoutButton), t[34] = o, t[35] = s, t[36] = c, t[37] = l);
        let u;
        t[38] === o ? u = t[39] : (u = o.formatMessage(U.accountLimitTitle), t[38] = o, t[39] = u);
        let d, p;
        t[40] === o ? (d = t[41], p = t[42]) : (d = e => o.formatMessage(U.accountLimitDescription, {
            inviteEmail: e
        }), p = o.formatMessage(U.accountLimitUnknownEmail), t[40] = o, t[41] = d, t[42] = p);
        let m;
        t[43] === o ? m = t[44] : (m = o.formatMessage(U.accountLimitUnnamedAccount), t[43] = o, t[44] = m);
        let h;
        t[45] === o ? h = t[46] : (h = o.formatMessage(U.accountLimitConfirm), t[45] = o, t[46] = h);
        let g;
        t[47] === o ? g = t[48] : (g = o.formatMessage(U.accountLimitLogoutError), t[47] = o, t[48] = g);
        let _;
        t[49] !== e || t[50] !== a || t[51] !== s || t[52] !== c || t[53] !== l || t[54] !== u || t[55] !== d || t[56] !== p || t[57] !== m || t[58] !== h || t[59] !== g ? (_ = {
            loadingTitle: e,
            logoutRequiredTitle: a,
            getLogoutRequiredDescription: s,
            getLogoutRequiredDescriptionWithoutCurrentEmail: c,
            logoutButton: l,
            accountLimitTitle: u,
            getAccountLimitDescription: d,
            unknownEmailLabel: p,
            unnamedAccountLabel: m,
            accountLimitConfirm: h,
            accountLimitLogoutError: g
        }, t[49] = e, t[50] = a, t[51] = s, t[52] = c, t[53] = l, t[54] = u, t[55] = d, t[56] = p, t[57] = m, t[58] = h, t[59] = g, t[60] = _) : _ = t[60];
        let v;
        return t[61] !== r || t[62] !== n || t[63] !== D || t[64] !== f || t[65] !== i || t[66] !== _ ? (v = (0, H.jsx)(M, {
            inviteAuthContext: n,
            currentUserEmail: r,
            isStorageComplianceEnabled: i,
            invitePageUrl: f,
            postLogoutParamName: W,
            copy: _,
            inviteLoginPageProps: D
        }), t[61] = r, t[62] = n, t[63] = D, t[64] = f, t[65] = i, t[66] = _, t[67] = v) : v = t[67], v
    }
    let O;
    t[68] !== f || t[69] !== m ? (O = m ? A(P({
        invitePageUrl: f,
        postLogoutParamName: W
    })) : f, t[68] = f, t[69] = m, t[70] = O) : O = t[70];
    let k = O,
        j;
    return t[71] !== k || t[72] !== r || t[73] !== n || t[74] !== D || t[75] !== i ? (j = (0, H.jsx)(N, {
        ...D,
        inviteAuthContext: n,
        currentUserEmail: r,
        isStorageComplianceEnabled: i,
        callbackUrl: k
    }), t[71] = k, t[72] = r, t[73] = n, t[74] = D, t[75] = i, t[76] = j) : j = t[76], j
}
var B, V, H, U, W, G, K = e((() => {
    p(), B = T(), O(), l(), F(), I(), n(), u(), d(), s(), V = t(x()), y(), S(), H = h(), U = _({
        pageTitle: {
            id: `AcceptInvitePage.title.joinWorkspace`,
            defaultMessage: `Join {workspaceName}`
        },
        pageDescription: {
            id: `AcceptInvitePage.description.loginOrSignUpToAcceptInvite`,
            defaultMessage: `Log in or sign up to accept your invite`
        },
        browserTitle: {
            id: `AcceptInvitePage.browserTitle`,
            defaultMessage: `Accept invite | ChatGPT`
        },
        subtitle: {
            id: `AcceptInvitePage.subtitle.loginOrSignUpWithInvitedEmailAddress`,
            defaultMessage: `Log in or sign up with {email} to accept your invitation.`
        },
        emailMismatch: {
            id: `AcceptInvitePage.emailMismatch.currentUserDoesNotMatchInvite`,
            defaultMessage: `You're currently logged in as {currentEmail}.`
        },
        wordmarkLink: {
            id: `AcceptInvitePage.link.chatgptHome`,
            defaultMessage: `ChatGPT home`
        },
        loadingAccountTitle: {
            id: `AcceptInvitePage.accountGate.loading.title`,
            defaultMessage: `Checking your account`
        },
        logoutRequiredTitle: {
            id: `AcceptInvitePage.accountGate.logoutRequired.title`,
            defaultMessage: `Log out to accept invite`
        },
        logoutRequiredDescription: {
            id: `AcceptInvitePage.accountGate.logoutRequired.description`,
            defaultMessage: `You're currently logged in as {currentEmail}. Log out, then log in or sign up with {inviteEmail} to continue.`
        },
        logoutRequiredDescriptionWithoutCurrentEmail: {
            id: `AcceptInvitePage.accountGate.logoutRequired.descriptionWithoutCurrentEmail`,
            defaultMessage: `You're currently logged in. Log out, then log in or sign up with {inviteEmail} to continue.`
        },
        logoutButton: {
            id: `AcceptInvitePage.accountGate.logoutButton`,
            defaultMessage: `Log out`
        },
        accountLimitTitle: {
            id: `AcceptInvitePage.accountGate.accountLimit.title`,
            defaultMessage: `Log out of an account to continue`
        },
        accountLimitDescription: {
            id: `AcceptInvitePage.accountGate.accountLimit.description`,
            defaultMessage: `You're already logged in to two accounts. Log out of one account, then log in or sign up with {inviteEmail} to continue.`
        },
        accountLimitUnknownEmail: {
            id: `AcceptInvitePage.accountGate.accountLimit.unknownEmail`,
            defaultMessage: `Unknown email`
        },
        accountLimitUnnamedAccount: {
            id: `AcceptInvitePage.accountGate.accountLimit.unnamedAccount`,
            defaultMessage: `Unnamed account`
        },
        accountLimitConfirm: {
            id: `AcceptInvitePage.accountGate.accountLimit.confirm`,
            defaultMessage: `Log out and continue`
        },
        accountLimitLogoutError: {
            id: `AcceptInvitePage.accountGate.accountLimit.logoutError`,
            defaultMessage: `Failed to log out selected account.`
        }
    }), W = `invite_logout`, G = b(function() {
        "use forget";
        let e = (0, B.c)(5),
            t = m();
        if (t.isMatchingLoggedInUser) {
            let n;
            return e[0] !== t.inviteAuthContext || e[1] !== t.redirectPath ? (n = (0, H.jsx)(R, {
                inviteAuthContext: t.inviteAuthContext,
                redirectPath: t.redirectPath
            }), e[0] = t.inviteAuthContext, e[1] = t.redirectPath, e[2] = n) : n = e[2], n
        }
        let n;
        return e[3] === t ? n = e[4] : (n = (0, H.jsx)(z, {
            ...t
        }), e[3] = t, e[4] = n), n
    })
}));
e((() => {
    K()
}))();
export {
    G as
    default
};
//# sourceMappingURL=accept-invite-fyvobynl.js.map