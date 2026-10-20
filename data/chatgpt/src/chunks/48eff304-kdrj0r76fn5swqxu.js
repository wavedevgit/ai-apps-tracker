const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/cc1ea293-krrfv8399j1jx6h8.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-dfpv67hlp00pbohr.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/fedf4e11-l4gcgr4bphi7p4iy.js", "assets/cea3409c-dnuv27meh6lgbbcn.js", "assets/30901919-7dzdc1ou0jtwkwpt.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Al as n,
    Fat as r,
    Fit as i,
    G1 as a,
    JT as o,
    L1 as s,
    P7 as c,
    Pot as l,
    Q0 as u,
    R7 as d,
    RU as f,
    Rit as p,
    S4 as m,
    Sw as h,
    Wnt as g,
    X0 as _,
    X1 as v,
    Xnt as y,
    Y0 as b,
    Y1 as ee,
    Z0 as x,
    _nt as S,
    dit as C,
    fr as w,
    jl as T,
    kat as te,
    lr as E,
    mit as ne,
    n0 as D,
    qT as O,
    r0 as k,
    t2 as A,
    uit as j,
    ww as M,
    x4 as re,
    ynt as N,
    zU as P
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    At as ie,
    Bn as F,
    Lt as ae,
    N as oe,
    Nn as I,
    Nt as se,
    Q as ce,
    Rn as L,
    Vn as R,
    bt as le,
    cn as ue,
    ct as de,
    ln as fe,
    s as pe,
    wn as me,
    zn as z
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    ch as he,
    lh as B
} from "./c2675c8c-9bs3zsr3vq259es7.js";
import {
    c as ge,
    l as _e
} from "./8b34dbc2-k1zgxrtsww83602u.js";
import {
    n as V,
    t as H
} from "./fedf4e11-l4gcgr4bphi7p4iy.js";
import {
    n as ve,
    r as ye,
    t as be
} from "./5d04b0af-gcwsl5dxf82pcacx.js";
var U, xe = e((() => {
    _(), fe(), U = b(() => ue(() => import(`./cc1ea293-krrfv8399j1jx6h8.js`).then(e => e.GiftCreditsClaimModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7])))
}));

function Se() {
    x(U)
}

function Ce() {
    return Se
}

function we(e) {
    return e.preventDefault()
}

function Te(e) {
    return e.preventDefault()
}
var Ee, W, G, De, Oe = e((() => {
        Ee = me(), o(), M(), u(), W = t(R()), L(), xe(), V(), G = F(), De = e => {
            "use forget";
            let t = (0, Ee.c)(68),
                {
                    canSwitchToPersonal: n,
                    isSwitchingAccount: r,
                    onClaim: i,
                    onClose: a,
                    onRetry: o,
                    onSwitchAccount: s,
                    onSwitchToPersonal: c,
                    state: l
                } = e,
                u = z(),
                d;
            t[0] !== i || t[1] !== a || t[2] !== o || t[3] !== l.canRetry || t[4] !== l.creditAmount || t[5] !== l.operation || t[6] !== l.status ? (d = () => {
                if (l.status === `available`) {
                    A(U, {
                        creditAmount: l.creditAmount,
                        onClaim: i,
                        onDismiss: a,
                        status: `available`
                    });
                    return
                }
                if (l.status === `redeeming` || l.status === `processing` && !l.canRetry) {
                    A(U, {
                        creditAmount: l.creditAmount,
                        onClaim: i,
                        onDismiss: a,
                        status: `claiming`
                    });
                    return
                }
                if (l.status === `processing` && l.canRetry || l.status === `error` && l.operation === `redemption`) {
                    A(U, {
                        creditAmount: l.creditAmount,
                        onClaim: o,
                        onDismiss: a,
                        status: `retryable`
                    });
                    return
                }
                x(U)
            }, t[0] = i, t[1] = a, t[2] = o, t[3] = l.canRetry, t[4] = l.creditAmount, t[5] = l.operation, t[6] = l.status, t[7] = d) : d = t[7];
            let f;
            t[8] !== i || t[9] !== a || t[10] !== o || t[11] !== l ? (f = [i, a, o, l], t[8] = i, t[9] = a, t[10] = o, t[11] = l, t[12] = f) : f = t[12], (0, W.useEffect)(d, f);
            let p;
            if (t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (p = [], t[13] = p) : p = t[13], (0, W.useEffect)(Ce, p), l.status === `workspace_association_blocked`) {
                let e;
                t[14] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, G.jsx)(`span`, {
                    className: `block text-sm leading-5`,
                    children: (0, G.jsx)(I, {
                        ...H.workspaceAccountIneligibleDescription
                    })
                }), t[14] = e) : e = t[14];
                let n;
                t[15] === u ? n = t[16] : (n = u.formatMessage(H.workspaceAccountIneligibleTitle), t[15] = u, t[16] = n);
                let r;
                t[17] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, G.jsx)(I, {
                    ...H.switchAccountButton
                }), t[17] = r) : r = t[17];
                let i;
                t[18] === s ? i = t[19] : (i = (0, G.jsx)(O, {
                    className: `rounded-full`,
                    color: `primary`,
                    onClick: s,
                    size: `large`,
                    type: `button`,
                    children: r
                }), t[18] = s, t[19] = i);
                let o;
                t[20] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, G.jsx)(I, {
                    ...H.goBackButton
                }), t[20] = o) : o = t[20];
                let c;
                t[21] === a ? c = t[22] : (c = (0, G.jsx)(O, {
                    className: `rounded-full`,
                    color: `secondary`,
                    onClick: a,
                    size: `large`,
                    type: `button`,
                    children: o
                }), t[21] = a, t[22] = c);
                let l;
                return t[23] !== a || t[24] !== n || t[25] !== i || t[26] !== c ? (l = (0, G.jsx)(h, {
                    className: `max-w-[480px]`,
                    description: e,
                    isOpen: !0,
                    onClose: a,
                    onEscapeKeyDown: we,
                    shouldIgnoreClickOutside: !0,
                    showCloseButton: !1,
                    size: `custom`,
                    type: `warning`,
                    title: n,
                    primaryButton: i,
                    secondaryButton: c
                }), t[23] = a, t[24] = n, t[25] = i, t[26] = c, t[27] = l) : l = t[27], l
            }
            if (l.status === `workspace_blocked`) {
                let e = n ? H.personalAccountRequiredDescription : H.personalWorkspaceUnavailableDescription,
                    i;
                t[28] === e ? i = t[29] : (i = (0, G.jsx)(`span`, {
                    className: `block text-sm leading-5`,
                    children: (0, G.jsx)(I, {
                        ...e
                    })
                }), t[28] = e, t[29] = i);
                let o;
                t[30] === u ? o = t[31] : (o = u.formatMessage(H.personalAccountRequiredTitle), t[30] = u, t[31] = o);
                let l = n && r,
                    d = n && r,
                    f = n ? c : s,
                    p = n ? H.switchToPersonalAccount : H.switchAccountButton,
                    m;
                t[32] === p ? m = t[33] : (m = (0, G.jsx)(I, {
                    ...p
                }), t[32] = p, t[33] = m);
                let g;
                t[34] !== m || t[35] !== l || t[36] !== d || t[37] !== f ? (g = (0, G.jsx)(O, {
                    className: `rounded-full`,
                    color: `primary`,
                    disabled: l,
                    loading: d,
                    onClick: f,
                    size: `large`,
                    type: `button`,
                    children: m
                }), t[34] = m, t[35] = l, t[36] = d, t[37] = f, t[38] = g) : g = t[38];
                let _;
                t[39] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = (0, G.jsx)(I, {
                    ...H.goBackButton
                }), t[39] = _) : _ = t[39];
                let v;
                t[40] === a ? v = t[41] : (v = (0, G.jsx)(O, {
                    className: `rounded-full`,
                    color: `secondary`,
                    onClick: a,
                    size: `large`,
                    type: `button`,
                    children: _
                }), t[40] = a, t[41] = v);
                let y;
                return t[42] !== a || t[43] !== g || t[44] !== v || t[45] !== i || t[46] !== o ? (y = (0, G.jsx)(h, {
                    className: `max-w-[480px]`,
                    description: i,
                    testId: `modal-gift-credit-personal-account-required`,
                    isOpen: !0,
                    onClose: a,
                    onEscapeKeyDown: Te,
                    shouldIgnoreClickOutside: !0,
                    showCloseButton: !1,
                    size: `custom`,
                    type: `warning`,
                    title: o,
                    primaryButton: g,
                    secondaryButton: v
                }), t[42] = a, t[43] = g, t[44] = v, t[45] = i, t[46] = o, t[47] = y) : y = t[47], y
            }
            if (l.status === `currency_mismatch`) {
                let e;
                t[48] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, G.jsx)(`span`, {
                    className: `text-token-text-secondary block text-sm leading-5`,
                    children: (0, G.jsx)(I, {
                        ...H.currencyMismatchDescription
                    })
                }), t[48] = e) : e = t[48];
                let n;
                t[49] === u ? n = t[50] : (n = u.formatMessage(H.currencyMismatchTitle), t[49] = u, t[50] = n);
                let r;
                t[51] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, G.jsx)(I, {
                    ...H.gotItButton
                }), t[51] = r) : r = t[51];
                let i;
                t[52] === a ? i = t[53] : (i = (0, G.jsx)(O, {
                    className: `rounded-full`,
                    color: `primary`,
                    onClick: a,
                    size: `large`,
                    type: `button`,
                    children: r
                }), t[52] = a, t[53] = i);
                let o;
                return t[54] !== a || t[55] !== n || t[56] !== i ? (o = (0, G.jsx)(h, {
                    className: `max-w-[480px]`,
                    description: e,
                    testId: `modal-gift-credit-currency-mismatch`,
                    isOpen: !0,
                    onClose: a,
                    shouldIgnoreClickOutside: !0,
                    showCloseButton: !1,
                    size: `custom`,
                    type: `danger`,
                    title: n,
                    primaryButton: i
                }), t[54] = a, t[55] = n, t[56] = i, t[57] = o) : o = t[57], o
            }
            if (l.status === `location_ineligible`) {
                let e;
                t[58] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, G.jsx)(`span`, {
                    className: `text-token-text-secondary block text-sm leading-5`,
                    children: (0, G.jsx)(I, {
                        ...H.locationIneligibleDescription
                    })
                }), t[58] = e) : e = t[58];
                let n;
                t[59] === u ? n = t[60] : (n = u.formatMessage(H.locationIneligibleTitle), t[59] = u, t[60] = n);
                let r;
                t[61] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, G.jsx)(I, {
                    ...H.gotItButton
                }), t[61] = r) : r = t[61];
                let i;
                t[62] === a ? i = t[63] : (i = (0, G.jsx)(O, {
                    className: `rounded-full`,
                    color: `primary`,
                    onClick: a,
                    size: `large`,
                    type: `button`,
                    children: r
                }), t[62] = a, t[63] = i);
                let o;
                return t[64] !== a || t[65] !== n || t[66] !== i ? (o = (0, G.jsx)(h, {
                    className: `max-w-[480px]`,
                    description: e,
                    testId: `modal-gift-credit-location-ineligible`,
                    isOpen: !0,
                    onClose: a,
                    shouldIgnoreClickOutside: !0,
                    showCloseButton: !1,
                    size: `custom`,
                    type: `danger`,
                    title: n,
                    primaryButton: i
                }), t[64] = a, t[65] = n, t[66] = i, t[67] = o) : o = t[67], o
            }
            return null
        }
    })),
    ke, K, q, Ae = e((() => {
        ke = (e, t) => {
            switch (t.type) {
                case `check_eligibility`:
                    return {
                        status: `loading`
                    };
                case `show_available`:
                    return {
                        ...t.details, presentation: t.presentation, status: `available`
                    };
                case `show_ineligible`:
                    return {
                        status: `ineligible`
                    };
                case `show_workspace_association_blocked`:
                    return {
                        status: `workspace_association_blocked`
                    };
                case `show_workspace_blocked`:
                    return {
                        status: `workspace_blocked`
                    };
                case `show_currency_mismatch`:
                    return {
                        status: `currency_mismatch`
                    };
                case `show_location_ineligible`:
                    return {
                        status: `location_ineligible`
                    };
                case `show_unavailable`:
                    return {
                        status: `unavailable`
                    };
                case `show_eligibility_error`:
                    return {
                        status: `error`, operation: `eligibility`
                    };
                case `start_redemption`:
                    return {
                        ...t.details, status: `redeeming`
                    };
                case `show_processing`:
                    return {
                        ...t.details, canRetry: t.canRetry, status: `processing`
                    };
                case `show_redeemed`:
                    return {
                        creditAmount: t.creditAmount, creditGrantId: t.creditGrantId, status: `redeemed`
                    };
                case `show_redemption_error`:
                    return {
                        ...t.details, operation: `redemption`, status: `error`
                    }
            }
        }, K = e => {
            let t = Number(e);
            if (!Number.isSafeInteger(t) || t <= 0) throw Error(`Gift credit claim returned an invalid amount`);
            return t
        }, q = e => ({
            accountId: e.accountId,
            creditAmount: e.creditAmount
        })
    })),
    J, je, Me, Y, Ne, X, Pe, Fe, Ie, Le, Re = e((() => {
        s(), P(), j(), r(), p(), m(), d(), T(), pe(), J = t(R()), L(), he(), Oe(), Ae(), ve(), V(), je = F(), Me = [1e3, 2e3, 4e3], Y = `X-OpenAI-Gift-Credit-Claim-Token`, Ne = `chatgpt_gift_credit_redemption`, X = e => typeof e == `object` && !!e && `workspace_account_associated` in e && e.workspace_account_associated === !0, Pe = e => typeof e == `object` && !!e && (`ineligibility_detail_reason` in e && e.ineligibility_detail_reason === `recipient_currency_mismatch` || `ineligibility_reason` in e && (e.ineligibility_reason === `recipient_currency_mismatch` || e.ineligibility_reason === `recipient_location_ineligible`)), Fe = e => typeof e == `object` && !!e && `location_ineligible` in e && e.location_ineligible === !0, Ie = (e, t) => new Promise((n, r) => {
            if (t.aborted) {
                r(t.reason);
                return
            }
            let i = window.setTimeout(() => {
                    t.removeEventListener(`abort`, a), n()
                }, e),
                a = () => {
                    window.clearTimeout(i), r(t.reason)
                };
            t.addEventListener(`abort`, a, {
                once: !0
            })
        }), Le = ({
            claimCode: e,
            deliveryMode: t,
            giftFunnelId: r,
            onAlreadyClaimed: o,
            onClose: s,
            onRedeemed: l,
            onUnavailable: u
        }) => {
            "use no forget";
            let [d, p] = (0, J.useReducer)(ke, {
                status: `loading`
            }), m = z(), h = oe(), g = v(), {
                data: _,
                isLoading: y
            } = ee(), [b, x] = (0, J.useState)(!1), S = _?.accountItems.find(e => e.isPersonalAccount() && !e.isDeactivated()), C = g != null && !g.isPersonalAccount(), w = _ != null && be(_.accountItems), T = (0, J.useRef)(null), E = (0, J.useRef)({
                deliveryMode: t,
                giftFunnelId: r
            }), D = (0, J.useRef)(null), O = (0, J.useRef)(null), k = (0, J.useRef)(!1), A = (0, J.useRef)(!1), j = (0, J.useRef)(null), M = (0, J.useCallback)((e, t, n) => {
                A.current || (A.current = !0, h.invalidateQueries({
                    queryKey: [`usage-limits-page-configs`, n]
                }), h.invalidateQueries({
                    queryKey: [`wham`, `usage`, `rate-limit-status`]
                }), h.invalidateQueries({
                    queryKey: [`settings`, `agent-usage`, `remaining-balance`, n]
                }), p({
                    type: `show_redeemed`,
                    creditAmount: e,
                    creditGrantId: t
                }), l(e))
            }, [l, h]), N = (0, J.useCallback)(async (t, r = !1) => {
                if (k.current) return;
                k.current = !0;
                let i = j.current ?? (r ? `recovery` : `initial`);
                j.current = i, O.current?.abort();
                let a = new AbortController;
                O.current = a, p(r ? {
                    type: `show_processing`,
                    canRetry: !1,
                    details: t
                } : {
                    type: `start_redemption`,
                    details: t
                }), B({
                    step: `claim_redemption`,
                    outcome: `started`,
                    ...E.current,
                    attemptKind: i,
                    creditQuantity: t.creditAmount
                });
                try {
                    for (let r = 0;; r += 1) {
                        let o = await n(Ne),
                            s = await c.safePost(`/gift-credits/claims/redeem`, {
                                additionalHeaders: {
                                    ...o,
                                    [Y]: e
                                },
                                requestBody: {
                                    account_id: t.accountId
                                },
                                signal: a.signal
                            });
                        if (a.signal.aborted) return;
                        if (s.status === `redeemed` && `credit_grant_id` in s) {
                            M(t.creditAmount, s.credit_grant_id, t.accountId);
                            return
                        }
                        if (s.status === `unavailable`) {
                            p({
                                type: `show_unavailable`
                            }), u();
                            return
                        }
                        if (`eligible` in s && s.eligible === !1) {
                            X(s) ? p({
                                type: `show_workspace_association_blocked`
                            }) : Pe(s) ? p({
                                type: `show_currency_mismatch`
                            }) : Fe(s) ? p({
                                type: `show_location_ineligible`
                            }) : (p({
                                type: `show_ineligible`
                            }), u());
                            return
                        }
                        if (s.status !== `claim_reserved`) throw Error(`Gift credit redemption returned an unknown state`);
                        let l = Me[r];
                        if (l == null) {
                            B({
                                step: `claim_redemption`,
                                outcome: `pending`,
                                reason: `auto_retry_exhausted`,
                                ...E.current,
                                attemptKind: i,
                                giftId: s.gift_id,
                                creditQuantity: t.creditAmount
                            }), p({
                                type: `show_processing`,
                                canRetry: !0,
                                details: t
                            });
                            return
                        }
                        p({
                            type: `show_processing`,
                            canRetry: !1,
                            details: t
                        }), await Ie(l, a.signal)
                    }
                } catch (e) {
                    a.signal.aborted || (e instanceof te && e.isTransportError && B({
                        step: `claim_redemption`,
                        outcome: `failed`,
                        reason: `request_failed`,
                        ...E.current,
                        attemptKind: i,
                        creditQuantity: t.creditAmount
                    }), p({
                        type: `show_redemption_error`,
                        details: t
                    }))
                } finally {
                    O.current === a && (k.current = !1)
                }
            }, [e, M, u]), P = (0, J.useCallback)(async () => {
                T.current?.abort();
                let t = new AbortController;
                if (T.current = t, p({
                        type: `check_eligibility`
                    }), y && (g == null || g.isPersonalAccount())) return;
                let n = () => {
                    D.current !== e && (D.current = e, B({
                        step: `claim_eligibility`,
                        outcome: `ineligible`,
                        reason: `workspace_account_associated`,
                        ...E.current
                    }))
                };
                if (w) {
                    n(), p({
                        type: `show_workspace_association_blocked`
                    });
                    return
                }
                if (C) {
                    n(), p({
                        type: `show_workspace_blocked`
                    });
                    return
                }
                try {
                    let n = await c.safeGet(`/gift-credits/claims/eligibility`, {
                        additionalHeaders: {
                            [Y]: e
                        },
                        signal: t.signal
                    });
                    if (t.signal.aborted) return;
                    if (n.status === `unavailable`) {
                        p({
                            type: `show_unavailable`
                        }), u();
                        return
                    }
                    if (n.status === `redeemed` && `credit_grant_id` in n) {
                        p({
                            type: `show_redeemed`,
                            creditAmount: K(n.amount),
                            creditGrantId: n.credit_grant_id
                        }), o();
                        return
                    }
                    if (n.status === `claim_reserved`) {
                        N({
                            accountId: n.account_id,
                            creditAmount: K(n.amount)
                        }, !0);
                        return
                    }
                    if (`eligible` in n && n.eligible === !1) {
                        X(n) ? p({
                            type: `show_workspace_association_blocked`
                        }) : Pe(n) ? p({
                            type: `show_currency_mismatch`
                        }) : Fe(n) ? p({
                            type: `show_location_ineligible`
                        }) : (p({
                            type: `show_ineligible`
                        }), u());
                        return
                    }
                    if (!(`eligible_accounts` in n) || n.eligible_accounts.length === 0) {
                        p({
                            type: `show_ineligible`
                        }), u();
                        return
                    }
                    let r = n.eligible_accounts[0];
                    p({
                        type: `show_available`,
                        details: {
                            accountId: r.account_id,
                            creditAmount: K(n.amount)
                        },
                        presentation: n.presentation ?? null
                    })
                } catch (e) {
                    t.signal.aborted || (e instanceof te && e.isTransportError && B({
                        step: `claim_eligibility`,
                        outcome: `failed`,
                        reason: `request_failed`,
                        ...E.current
                    }), p({
                        type: `show_eligibility_error`
                    }), u())
                }
            }, [y, e, g, w, C, o, u, N]), ie = (0, J.useCallback)(async () => {
                if (!(S == null || b)) {
                    x(!0);
                    try {
                        let {
                            updatedAccount: e,
                            willRedirect: t
                        } = await a(h, S.id, m, f(), !0, window.location.href);
                        if (!e && !t) {
                            x(!1), f().danger(m.formatMessage(H.accountSwitchError));
                            return
                        }
                        t || re(window.location.href)
                    } catch {
                        x(!1), f().danger(m.formatMessage(H.accountSwitchError))
                    }
                }
            }, [m, b, S, h]), F = (0, J.useCallback)(() => {
                d.status === `available` && N(q(d))
            }, [N, d]), ae = (0, J.useCallback)(() => {
                if (d.status === `error` && d.operation === `eligibility`) {
                    P();
                    return
                }(d.status === `error` && d.operation === `redemption` || d.status === `processing` && d.canRetry) && N(q(d), !0)
            }, [P, N, d]);
            return (0, J.useEffect)(() => (P(), () => {
                T.current?.abort()
            }), [P]), (0, J.useEffect)(() => (A.current = !1, j.current = null, E.current = {
                deliveryMode: t,
                giftFunnelId: r
            }, () => {
                O.current?.abort(), O.current = null, k.current = !1
            }), [e, t, r]), (0, je.jsx)(De, {
                onClose: s,
                onClaim: F,
                onRetry: ae,
                onSwitchAccount: () => ne({
                    reason: i.AccountSwitcher,
                    source: `gifts.credits.redemption-flow`
                }),
                onSwitchToPersonal: () => void ie(),
                canSwitchToPersonal: S != null,
                isSwitchingAccount: b,
                state: d
            })
        }
    }));

function ze() {
    "use forget";
    let e = (0, Z.c)(18),
        {
            claimCode: t
        } = ae(),
        n = ie(),
        r = se(),
        {
            search: i
        } = n,
        a;
    e[0] === i ? a = e[1] : (a = new URLSearchParams(i).get(`gift_auth_return`), e[0] = i, e[1] = a);
    let o = a === `1`,
        s;
    e[2] === Symbol.for(`react.memo_cache_sentinel`) ? (s = C(), e[2] = s) : s = e[2];
    let c = s,
        l = (0, Q.useRef)(o ? t ?? null : null),
        u, d;
    e[3] !== o || e[4] !== n.hash || e[5] !== n.pathname || e[6] !== r || e[7] !== i ? (u = () => {
        if (!c || !o) return;
        let e = new URLSearchParams(i);
        e.delete(`gift_auth_return`), r({
            pathname: n.pathname,
            search: e.size > 0 ? `?${e.toString()}` : ``,
            hash: n.hash
        }, {
            replace: !0
        })
    }, d = [c, o, n.hash, n.pathname, r, i], e[3] = o, e[4] = n.hash, e[5] = n.pathname, e[6] = r, e[7] = i, e[8] = u, e[9] = d) : (u = e[8], d = e[9]), (0, Q.useEffect)(u, d);
    let f, p;
    if (e[10] === t ? (f = e[11], p = e[12]) : (f = () => {
            !c || t == null || t.length === 0 || l.current === t || (l.current = t, B({
                step: `claim_link`,
                outcome: `started`
            }))
        }, p = [c, t], e[10] = t, e[11] = f, e[12] = p), (0, Q.useEffect)(f, p), t == null || t.length === 0) {
        let t;
        return e[13] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, $.jsx)(de, {
            replace: !0,
            to: `/`
        }), e[13] = t) : t = e[13], t
    }
    if (!c) {
        let n;
        return e[14] === t ? n = e[15] : (n = (0, $.jsx)(He, {
            claimCode: t
        }), e[14] = t, e[15] = n), n
    }
    let m;
    return e[16] === t ? m = e[17] : (m = (0, $.jsx)(Ue, {
        claimCode: t
    }), e[16] = t, e[17] = m), m
}

function Be() {}
var Z, Q, $, Ve, He, Ue, We = e((() => {
        Z = me(), _e(), w(), D(), P(), j(), N(), Q = t(R()), L(), ce(), he(), Re(), V(), $ = F(), Ve = 50, He = e => {
            "use forget";
            let t = (0, Z.c)(4),
                {
                    claimCode: n
                } = e,
                r = (0, Q.useRef)(null),
                i, a;
            t[0] === n ? (i = t[1], a = t[2]) : (i = () => {
                r.current !== n && (r.current = n, B({
                    step: `claim_link`,
                    outcome: `started`
                }), B({
                    step: `auth_redirect`,
                    outcome: `started`
                }));
                let e = !1,
                    t = new URL(`/gifts/credits/claim/${encodeURIComponent(n)}`, window.location.origin);
                return t.searchParams.set(`gift_auth_return`, `1`), S.flushStructuredEvents(Ve).catch(Be).then(() => {
                    if (!e) return k({
                        callbackUrl: t.href,
                        fallbackScreenHint: `login_or_signup`
                    })
                }), () => {
                    e = !0
                }
            }, a = [n], t[0] = n, t[1] = i, t[2] = a), (0, Q.useEffect)(i, a);
            let o;
            return t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, $.jsx)(ge, {}), t[3] = o) : o = t[3], o
        }, Ue = e => {
            "use forget";
            let t = (0, Z.c)(20),
                {
                    claimCode: n
                } = e,
                r = z(),
                i = se(),
                a = l()?.user,
                o;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (o = () => {
                E({
                    email: a?.email,
                    phoneNumber: a?.phone_number
                })
            }, t[0] = o) : o = t[0];
            let s;
            t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (s = [a?.email, a?.phone_number], t[1] = s) : s = t[1], (0, Q.useEffect)(o, s);
            let c;
            t[2] === i ? c = t[3] : (c = () => {
                i(`/`, {
                    replace: !0
                })
            }, t[2] = i, t[3] = c);
            let u = c,
                d;
            t[4] !== u || t[5] !== r ? (d = e => {
                u(), f().success(r.formatMessage(H.redeemedToast, {
                    creditAmount: e
                }))
            }, t[4] = u, t[5] = r, t[6] = d) : d = t[6];
            let p = d,
                m;
            t[7] !== u || t[8] !== r ? (m = () => {
                u(), f().danger(r.formatMessage(H.alreadyClaimedToast))
            }, t[7] = u, t[8] = r, t[9] = m) : m = t[9];
            let h = m,
                g;
            t[10] !== u || t[11] !== r ? (g = () => {
                u(), f().danger(r.formatMessage(H.unavailableToast))
            }, t[10] = u, t[11] = r, t[12] = g) : g = t[12];
            let _ = g,
                v;
            t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (v = (0, $.jsx)(ge, {}), t[13] = v) : v = t[13];
            let y;
            return t[14] !== n || t[15] !== u || t[16] !== h || t[17] !== p || t[18] !== _ ? (y = (0, $.jsxs)($.Fragment, {
                children: [v, (0, $.jsx)(Le, {
                    claimCode: n,
                    onAlreadyClaimed: h,
                    onClose: u,
                    onRedeemed: p,
                    onUnavailable: _
                })]
            }), t[14] = n, t[15] = u, t[16] = h, t[17] = p, t[18] = _, t[19] = y) : y = t[19], y
        }
    })),
    Ge, Ke = e((() => {
        ve(), j(), y(), ce(), Ge = () => C() && !g(`2067846105`) && !ye() ? le(`/`) : null
    }));
export {
    We as i, Ke as n, ze as r, Ge as t
};
//# sourceMappingURL=48eff304-kdrj0r76fn5swqxu.js.map