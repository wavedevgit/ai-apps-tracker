import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    Aw as r,
    Cat as i,
    Dit as a,
    LF as o,
    LU as s,
    Ow as c,
    Zot as l,
    eE as u,
    fr as d,
    jit as f,
    kF as p,
    nP as m,
    o0 as h,
    pr as g,
    q1 as _,
    rP as v,
    xat as y,
    zU as b
} from "./4813494d-itnrgnth03y1sm9d.js";
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
} from "./30901919-ikyi1r55w2i02fom.js";

function M(e) {
    "use forget";
    let t = (0, P.c)(46),
        {
            onClose: r,
            accounts: i,
            onLoggedOutNonActive: a,
            postLogoutCallbackUrl: o,
            postLogoutAction: s
        } = e,
        u = s === void 0 ? `open_add_account_auth` : s,
        d = D(),
        m = b(),
        _;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = l(), t[0] = _) : _ = t[0];
    let v = _,
        x = h(),
        [S, w] = (0, F.useState)(i[0]?.sessionToken ?? null),
        [T, E] = (0, F.useState)(!1),
        O;
    t[1] !== i || t[2] !== x || t[3] !== d || t[4] !== T || t[5] !== r || t[6] !== a || t[7] !== u || t[8] !== o || t[9] !== S || t[10] !== m ? (O = async () => {
        if (!(S == null || T) && i.find(e => e.sessionToken === S)) {
            E(!0);
            try {
                let e = x?.isWorkspacePlan() === !0 ? x.id : void 0;
                r(), await g({
                    sessionToken: S,
                    currentSessionToken: v?.sessionToken,
                    currentWorkspaceAccountId: e,
                    postLogoutAction: u,
                    postLogoutCallbackUrl: o,
                    analytics: {
                        source: p.AccountSwitcherAddAccountModal,
                        type: `single_account`
                    },
                    onNoNextSession: f,
                    onComplete: a
                })
            } catch (e) {
                let t = e;
                y.addError(Error(`Failed to log out selected account from add-account modal`, {
                    cause: t
                }), {
                    source: p.AccountSwitcherAddAccountModal
                }), m.danger(d.formatMessage({
                    id: `navigation.switchAccounts.logoutModalFailed`,
                    defaultMessage: `Failed to log out selected account.`
                }), {
                    description: t instanceof Error ? t.message : String(t)
                })
            }
            E(!1)
        }
    }, t[1] = i, t[2] = x, t[3] = d, t[4] = T, t[5] = r, t[6] = a, t[7] = u, t[8] = o, t[9] = S, t[10] = m, t[11] = O) : O = t[11];
    let j = O,
        M;
    t[12] === d ? M = t[13] : (M = d.formatMessage(L.logoutModalTitle), t[12] = d, t[13] = M);
    let R;
    t[14] === d ? R = t[15] : (R = d.formatMessage(L.logoutModalDescription), t[14] = d, t[15] = R);
    let z;
    if (t[16] !== i || t[17] !== d || t[18] !== T || t[19] !== S) {
        let e;
        t[21] !== d || t[22] !== T || t[23] !== S ? (e = e => {
            let t = N(e, d),
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
        }, t[21] = d, t[22] = T, t[23] = S, t[24] = e) : e = t[24], z = i.map(e), t[16] = i, t[17] = d, t[18] = T, t[19] = S, t[20] = z
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
    t[28] !== T || t[29] !== r ? (H = (0, I.jsx)(n, {
        type: `button`,
        color: `secondary`,
        onClick: r,
        disabled: T,
        children: V
    }), t[28] = T, t[29] = r, t[30] = H) : H = t[30];
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
    return t[40] !== r || t[41] !== q || t[42] !== M || t[43] !== R || t[44] !== B ? (J = (0, I.jsxs)(c, {
        testId: `modal-account-switcher-logout-for-add-account`,
        isOpen: !0,
        onClose: r,
        showCloseButton: !0,
        title: M,
        description: R,
        size: `normal`,
        children: [B, q]
    }), t[40] = r, t[41] = q, t[42] = M, t[43] = R, t[44] = B, t[45] = J) : J = t[45], J
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
        i = m(e.phoneNumber);
    return !e.email && i != null ? `${r} (${i})` : n
}
var P, F, I, L, R = e((() => {
    P = E(), u(), O(), j(), r(), d(), _(), s(), v(), o(), a(), i(), F = t(T()), w(), I = x(), L = S({
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
//# sourceMappingURL=d925d50a-m9sqikxmwgfh4rvy.js.map