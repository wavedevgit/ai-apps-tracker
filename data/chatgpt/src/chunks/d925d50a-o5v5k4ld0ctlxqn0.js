import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    $ot as r,
    Aw as i,
    Cat as a,
    LF as o,
    LU as s,
    Nit as c,
    Ow as l,
    Tat as u,
    eE as d,
    fr as f,
    kF as p,
    kit as m,
    nP as h,
    o0 as g,
    pr as _,
    q1 as v,
    rP as y,
    zU as b
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Bn as x,
    Ln as S,
    Nn as C,
    Rn as w,
    Vn as T,
    wn as E,
    zn as D
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    af as O,
    if as k,
    of as A,
    rf as j
} from "./30901919-lgbmg5s09xld40kt.js";

function M(e) {
    "use forget";
    let t = (0, P.c)(46),
        {
            onClose: i,
            accounts: o,
            onLoggedOutNonActive: s,
            postLogoutCallbackUrl: u,
            postLogoutAction: d
        } = e,
        f = d === void 0 ? `open_add_account_auth` : d,
        m = D(),
        h = b(),
        v;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (v = r(), t[0] = v) : v = t[0];
    let y = v,
        x = g(),
        [S, w] = (0, F.useState)(o[0]?.sessionToken ?? null),
        [T, E] = (0, F.useState)(!1),
        O;
    t[1] !== o || t[2] !== x || t[3] !== m || t[4] !== T || t[5] !== i || t[6] !== s || t[7] !== f || t[8] !== u || t[9] !== S || t[10] !== h ? (O = async () => {
        if (!(S == null || T) && o.find(e => e.sessionToken === S)) {
            E(!0);
            try {
                let e = x?.isWorkspacePlan() === !0 ? x.id : void 0;
                i(), await _({
                    sessionToken: S,
                    currentSessionToken: y?.sessionToken,
                    currentWorkspaceAccountId: e,
                    postLogoutAction: f,
                    postLogoutCallbackUrl: u,
                    analytics: {
                        source: p.AccountSwitcherAddAccountModal,
                        type: `single_account`
                    },
                    onNoNextSession: c,
                    onComplete: s
                })
            } catch (e) {
                let t = e;
                a.addError(Error(`Failed to log out selected account from add-account modal`, {
                    cause: t
                }), {
                    source: p.AccountSwitcherAddAccountModal
                }), h.danger(m.formatMessage({
                    id: `navigation.switchAccounts.logoutModalFailed`,
                    defaultMessage: `Failed to log out selected account.`
                }), {
                    description: t instanceof Error ? t.message : String(t)
                })
            }
            E(!1)
        }
    }, t[1] = o, t[2] = x, t[3] = m, t[4] = T, t[5] = i, t[6] = s, t[7] = f, t[8] = u, t[9] = S, t[10] = h, t[11] = O) : O = t[11];
    let j = O,
        M;
    t[12] === m ? M = t[13] : (M = m.formatMessage(L.logoutModalTitle), t[12] = m, t[13] = M);
    let R;
    t[14] === m ? R = t[15] : (R = m.formatMessage(L.logoutModalDescription), t[14] = m, t[15] = R);
    let z;
    if (t[16] !== o || t[17] !== m || t[18] !== T || t[19] !== S) {
        let e;
        t[21] !== m || t[22] !== T || t[23] !== S ? (e = e => {
            let t = N(e, m),
                n = e.sessionToken === S,
                r = e.userId ?? e.email ?? e.sessionToken;
            return (0, I.jsxs)(`button`, {
                type: `button`,
                className: `hover:bg-token-bg-secondary flex w-full items-center gap-2 rounded-lg px-3 py-2 text-start`,
                disabled: T,
                onClick: () => {
                    w(e.sessionToken)
                },
                children: [n ? (0, I.jsx)(A, {
                    className: `text-token-text-primary icon-sm shrink-0`
                }) : (0, I.jsx)(k, {
                    className: `text-token-text-tertiary icon-sm shrink-0`
                }), (0, I.jsx)(`span`, {
                    className: `text-token-text-primary text-base`,
                    children: t
                })]
            }, r)
        }, t[21] = m, t[22] = T, t[23] = S, t[24] = e) : e = t[24], z = o.map(e), t[16] = o, t[17] = m, t[18] = T, t[19] = S, t[20] = z
    } else z = t[20];
    let B;
    t[25] === z ? B = t[26] : (B = (0, I.jsx)(`div`, {
        className: `flex flex-col gap-2`,
        children: z
    }), t[25] = z, t[26] = B);
    let V;
    t[27] === Symbol.for(`react.memo_cache_sentinel`) ? (V = (0, I.jsx)(C, {
        id: `navigation.switchAccounts.logoutModalCancel`,
        defaultMessage: `Cancel`
    }), t[27] = V) : V = t[27];
    let H;
    t[28] !== T || t[29] !== i ? (H = (0, I.jsx)(n, {
        type: `button`,
        color: `secondary`,
        onClick: i,
        disabled: T,
        children: V
    }), t[28] = T, t[29] = i, t[30] = H) : H = t[30];
    let U;
    t[31] === j ? U = t[32] : (U = () => {
        j()
    }, t[31] = j, t[32] = U);
    let W = T || S == null,
        G;
    t[33] === Symbol.for(`react.memo_cache_sentinel`) ? (G = (0, I.jsx)(C, {
        id: `navigation.switchAccounts.logoutModalConfirm`,
        defaultMessage: `Log out and continue`
    }), t[33] = G) : G = t[33];
    let K;
    t[34] !== U || t[35] !== W ? (K = (0, I.jsx)(n, {
        type: `button`,
        color: `primary`,
        onClick: U,
        disabled: W,
        children: G
    }), t[34] = U, t[35] = W, t[36] = K) : K = t[36];
    let q;
    t[37] !== K || t[38] !== H ? (q = (0, I.jsxs)(`div`, {
        className: `mt-6 flex justify-end gap-3`,
        children: [H, K]
    }), t[37] = K, t[38] = H, t[39] = q) : q = t[39];
    let J;
    return t[40] !== i || t[41] !== q || t[42] !== M || t[43] !== R || t[44] !== B ? (J = (0, I.jsxs)(l, {
        testId: `modal-account-switcher-logout-for-add-account`,
        isOpen: !0,
        onClose: i,
        showCloseButton: !0,
        title: M,
        description: R,
        size: `normal`,
        children: [B, q]
    }), t[40] = i, t[41] = q, t[42] = M, t[43] = R, t[44] = B, t[45] = J) : J = t[45], J
}

function N(e, t) {
    let n = e.email ?? t.formatMessage({
            id: `navigation.switchAccounts.unknownEmail`,
            defaultMessage: `Unknown email`
        }),
        r = e.name ?? t.formatMessage({
            id: `navigation.switchAccounts.unknownName`,
            defaultMessage: `Unnamed account`
        }),
        i = h(e.phoneNumber);
    return !e.email && i != null ? `${r} (${i})` : n
}
var P, F, I, L, R = e((() => {
    P = E(), d(), O(), j(), i(), f(), v(), s(), y(), o(), m(), u(), F = t(T()), w(), I = x(), L = S({
        logoutModalTitle: {
            id: `navigation.switchAccounts.logoutModal.title`,
            defaultMessage: `Choose an account to log out`
        },
        logoutModalDescription: {
            id: `navigation.switchAccounts.logoutModal.description`,
            defaultMessage: `You’re already logged in to two accounts. Log out of one to add a new account.`
        }
    })
}));
export {
    R as n, M as t
};
//# sourceMappingURL=d925d50a-o5v5k4ld0ctlxqn0.js.map