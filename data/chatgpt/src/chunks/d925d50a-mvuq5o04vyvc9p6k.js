import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as n,
    C1 as r,
    Dit as i,
    Lrt as a,
    MN as o,
    NN as s,
    Nrt as c,
    aF as l,
    fr as u,
    hU as d,
    iw as f,
    kT as p,
    kit as m,
    ow as h,
    pF as g,
    pU as _,
    pr as v,
    rot as y,
    u1 as b
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as x,
    Ln as S,
    Nn as C,
    Rn as w,
    Vn as T,
    wn as E,
    zn as D
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    af as O,
    if as k,
    of as A,
    rf as j
} from "./30901919-e33mbl5u1y88w5wu.js";

function M(e) {
    "use forget";
    let t = (0, P.c)(46),
        {
            onClose: n,
            accounts: o,
            onLoggedOutNonActive: s,
            postLogoutCallbackUrl: c,
            postLogoutAction: u
        } = e,
        m = u === void 0 ? `open_add_account_auth` : u,
        h = D(),
        g = d(),
        _;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = y(), t[0] = _) : _ = t[0];
    let b = _,
        x = r(),
        [S, w] = (0, F.useState)(o[0]?.sessionToken ?? null),
        [T, E] = (0, F.useState)(!1),
        O;
    t[1] !== o || t[2] !== x || t[3] !== h || t[4] !== T || t[5] !== n || t[6] !== s || t[7] !== m || t[8] !== c || t[9] !== S || t[10] !== g ? (O = async () => {
        if (!(S == null || T) && o.find(e => e.sessionToken === S)) {
            E(!0);
            try {
                let e = x?.isWorkspacePlan() === !0 ? x.id : void 0;
                n(), await v({
                    sessionToken: S,
                    currentSessionToken: b?.sessionToken,
                    currentWorkspaceAccountId: e,
                    postLogoutAction: m,
                    postLogoutCallbackUrl: c,
                    analytics: {
                        source: l.AccountSwitcherAddAccountModal,
                        type: `single_account`
                    },
                    onNoNextSession: a,
                    onComplete: s
                })
            } catch (e) {
                let t = e;
                i.addError(Error(`Failed to log out selected account from add-account modal`, {
                    cause: t
                }), {
                    source: l.AccountSwitcherAddAccountModal
                }), g.danger(h.formatMessage({
                    id: `navigation.switchAccounts.logoutModalFailed`,
                    defaultMessage: `Failed to log out selected account.`
                }), {
                    description: t instanceof Error ? t.message : String(t)
                })
            }
            E(!1)
        }
    }, t[1] = o, t[2] = x, t[3] = h, t[4] = T, t[5] = n, t[6] = s, t[7] = m, t[8] = c, t[9] = S, t[10] = g, t[11] = O) : O = t[11];
    let j = O,
        M;
    t[12] === h ? M = t[13] : (M = h.formatMessage(L.logoutModalTitle), t[12] = h, t[13] = M);
    let R;
    t[14] === h ? R = t[15] : (R = h.formatMessage(L.logoutModalDescription), t[14] = h, t[15] = R);
    let z;
    if (t[16] !== o || t[17] !== h || t[18] !== T || t[19] !== S) {
        let e;
        t[21] !== h || t[22] !== T || t[23] !== S ? (e = e => {
            let t = N(e, h),
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
        }, t[21] = h, t[22] = T, t[23] = S, t[24] = e) : e = t[24], z = o.map(e), t[16] = o, t[17] = h, t[18] = T, t[19] = S, t[20] = z
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
    t[28] !== T || t[29] !== n ? (H = (0, I.jsx)(p, {
        type: `button`,
        color: `secondary`,
        onClick: n,
        disabled: T,
        children: V
    }), t[28] = T, t[29] = n, t[30] = H) : H = t[30];
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
    t[34] !== U || t[35] !== W ? (K = (0, I.jsx)(p, {
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
    return t[40] !== n || t[41] !== q || t[42] !== M || t[43] !== R || t[44] !== B ? (J = (0, I.jsxs)(f, {
        testId: `modal-account-switcher-logout-for-add-account`,
        isOpen: !0,
        onClose: n,
        showCloseButton: !0,
        title: M,
        description: R,
        size: `normal`,
        children: [B, q]
    }), t[40] = n, t[41] = q, t[42] = M, t[43] = R, t[44] = B, t[45] = J) : J = t[45], J
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
        i = o(e.phoneNumber);
    return !e.email && i != null ? `${r} (${i})` : n
}
var P, F, I, L, R = e((() => {
    P = E(), n(), O(), j(), h(), u(), b(), _(), s(), g(), c(), m(), F = t(T()), w(), I = x(), L = S({
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
//# sourceMappingURL=d925d50a-mvuq5o04vyvc9p6k.js.map