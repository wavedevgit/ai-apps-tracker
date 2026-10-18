const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/cc1ea293-ebwdq6seyjh1f39q.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-cb22y2w19zwyshmt.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/fedf4e11-jhhga25nxu6i6jg7.js", "assets/cea3409c-hrb41sti5ky5pvnr.js", "assets/30901919-e33mbl5u1y88w5wu.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as n,
    AT as r,
    Btt as i,
    C0 as a,
    C1 as o,
    Htt as s,
    J2 as c,
    Lrt as l,
    Nrt as u,
    O0 as d,
    Prt as f,
    Qit as p,
    S0 as m,
    S1 as h,
    T0 as g,
    Y2 as _,
    a7 as v,
    dl as ee,
    fU as y,
    fl as b,
    fr as x,
    iat as S,
    iit as te,
    iw as C,
    k1 as w,
    kT as T,
    l7 as E,
    lr as D,
    ow as O,
    pU as k,
    pnt as A,
    rot as j,
    sit as M,
    u1 as N,
    v1 as ne,
    w0 as P,
    ynt as F
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as re,
    Bn as I,
    N as ie,
    Nn as L,
    Pt as ae,
    Rn as R,
    Rt as oe,
    Vn as z,
    cn as se,
    jt as ce,
    ln as le,
    lt as ue,
    s as de,
    wn as fe,
    xt as pe,
    zn as B
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Nh as me,
    Ph as V
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    c as he,
    l as ge
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    n as H,
    t as U
} from "./fedf4e11-jhhga25nxu6i6jg7.js";
import {
    n as _e,
    r as ve,
    t as ye
} from "./5d04b0af-hocxbrtcuxjbwpxj.js";
var W, be = e((() => {
    a(), le(), W = m(() => se(() => import(`./cc1ea293-ebwdq6seyjh1f39q.js`).then(e => e.GiftCreditsClaimModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7])))
}));

function xe() {
    P(W)
}

function Se() {
    return xe
}

function Ce(e) {
    return e.preventDefault()
}

function we(e) {
    return e.preventDefault()
}
var Te, G, K, Ee, De = e((() => {
        Te = fe(), r(), O(), g(), G = t(z()), R(), be(), H(), K = I(), Ee = e => {
            "use forget";
            let t = (0, Te.c)(68),
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
                u = B(),
                f;
            t[0] !== i || t[1] !== a || t[2] !== o || t[3] !== l.canRetry || t[4] !== l.creditAmount || t[5] !== l.operation || t[6] !== l.status ? (f = () => {
                if (l.status === `available`) {
                    d(W, {
                        creditAmount: l.creditAmount,
                        onClaim: i,
                        onDismiss: a,
                        status: `available`
                    });
                    return
                }
                if (l.status === `redeeming` || l.status === `processing` && !l.canRetry) {
                    d(W, {
                        creditAmount: l.creditAmount,
                        onClaim: i,
                        onDismiss: a,
                        status: `claiming`
                    });
                    return
                }
                if (l.status === `processing` && l.canRetry || l.status === `error` && l.operation === `redemption`) {
                    d(W, {
                        creditAmount: l.creditAmount,
                        onClaim: o,
                        onDismiss: a,
                        status: `retryable`
                    });
                    return
                }
                P(W)
            }, t[0] = i, t[1] = a, t[2] = o, t[3] = l.canRetry, t[4] = l.creditAmount, t[5] = l.operation, t[6] = l.status, t[7] = f) : f = t[7];
            let p;
            t[8] !== i || t[9] !== a || t[10] !== o || t[11] !== l ? (p = [i, a, o, l], t[8] = i, t[9] = a, t[10] = o, t[11] = l, t[12] = p) : p = t[12], (0, G.useEffect)(f, p);
            let m;
            if (t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (m = [], t[13] = m) : m = t[13], (0, G.useEffect)(Se, m), l.status === `workspace_association_blocked`) {
                let e;
                t[14] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, K.jsx)(`span`, {
                    className: `block text-sm leading-5`,
                    children: (0, K.jsx)(L, {
                        ...U.workspaceAccountIneligibleDescription
                    })
                }), t[14] = e) : e = t[14];
                let n;
                t[15] === u ? n = t[16] : (n = u.formatMessage(U.workspaceAccountIneligibleTitle), t[15] = u, t[16] = n);
                let r;
                t[17] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, K.jsx)(L, {
                    ...U.switchAccountButton
                }), t[17] = r) : r = t[17];
                let i;
                t[18] === s ? i = t[19] : (i = (0, K.jsx)(T, {
                    className: `rounded-full`,
                    color: `primary`,
                    onClick: s,
                    size: `large`,
                    type: `button`,
                    children: r
                }), t[18] = s, t[19] = i);
                let o;
                t[20] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, K.jsx)(L, {
                    ...U.goBackButton
                }), t[20] = o) : o = t[20];
                let c;
                t[21] === a ? c = t[22] : (c = (0, K.jsx)(T, {
                    className: `rounded-full`,
                    color: `secondary`,
                    onClick: a,
                    size: `large`,
                    type: `button`,
                    children: o
                }), t[21] = a, t[22] = c);
                let l;
                return t[23] !== a || t[24] !== n || t[25] !== i || t[26] !== c ? (l = (0, K.jsx)(C, {
                    className: `max-w-[480px]`,
                    description: e,
                    isOpen: !0,
                    onClose: a,
                    onEscapeKeyDown: Ce,
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
                let e = n ? U.personalAccountRequiredDescription : U.personalWorkspaceUnavailableDescription,
                    i;
                t[28] === e ? i = t[29] : (i = (0, K.jsx)(`span`, {
                    className: `block text-sm leading-5`,
                    children: (0, K.jsx)(L, {
                        ...e
                    })
                }), t[28] = e, t[29] = i);
                let o;
                t[30] === u ? o = t[31] : (o = u.formatMessage(U.personalAccountRequiredTitle), t[30] = u, t[31] = o);
                let l = n && r,
                    d = n && r,
                    f = n ? c : s,
                    p = n ? U.switchToPersonalAccount : U.switchAccountButton,
                    m;
                t[32] === p ? m = t[33] : (m = (0, K.jsx)(L, {
                    ...p
                }), t[32] = p, t[33] = m);
                let h;
                t[34] !== m || t[35] !== l || t[36] !== d || t[37] !== f ? (h = (0, K.jsx)(T, {
                    className: `rounded-full`,
                    color: `primary`,
                    disabled: l,
                    loading: d,
                    onClick: f,
                    size: `large`,
                    type: `button`,
                    children: m
                }), t[34] = m, t[35] = l, t[36] = d, t[37] = f, t[38] = h) : h = t[38];
                let g;
                t[39] === Symbol.for(`react.memo_cache_sentinel`) ? (g = (0, K.jsx)(L, {
                    ...U.goBackButton
                }), t[39] = g) : g = t[39];
                let _;
                t[40] === a ? _ = t[41] : (_ = (0, K.jsx)(T, {
                    className: `rounded-full`,
                    color: `secondary`,
                    onClick: a,
                    size: `large`,
                    type: `button`,
                    children: g
                }), t[40] = a, t[41] = _);
                let v;
                return t[42] !== a || t[43] !== h || t[44] !== _ || t[45] !== i || t[46] !== o ? (v = (0, K.jsx)(C, {
                    className: `max-w-[480px]`,
                    description: i,
                    testId: `modal-gift-credit-personal-account-required`,
                    isOpen: !0,
                    onClose: a,
                    onEscapeKeyDown: we,
                    shouldIgnoreClickOutside: !0,
                    showCloseButton: !1,
                    size: `custom`,
                    type: `warning`,
                    title: o,
                    primaryButton: h,
                    secondaryButton: _
                }), t[42] = a, t[43] = h, t[44] = _, t[45] = i, t[46] = o, t[47] = v) : v = t[47], v
            }
            if (l.status === `currency_mismatch`) {
                let e;
                t[48] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, K.jsx)(`span`, {
                    className: `text-token-text-secondary block text-sm leading-5`,
                    children: (0, K.jsx)(L, {
                        ...U.currencyMismatchDescription
                    })
                }), t[48] = e) : e = t[48];
                let n;
                t[49] === u ? n = t[50] : (n = u.formatMessage(U.currencyMismatchTitle), t[49] = u, t[50] = n);
                let r;
                t[51] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, K.jsx)(L, {
                    ...U.gotItButton
                }), t[51] = r) : r = t[51];
                let i;
                t[52] === a ? i = t[53] : (i = (0, K.jsx)(T, {
                    className: `rounded-full`,
                    color: `primary`,
                    onClick: a,
                    size: `large`,
                    type: `button`,
                    children: r
                }), t[52] = a, t[53] = i);
                let o;
                return t[54] !== a || t[55] !== n || t[56] !== i ? (o = (0, K.jsx)(C, {
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
                t[58] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, K.jsx)(`span`, {
                    className: `text-token-text-secondary block text-sm leading-5`,
                    children: (0, K.jsx)(L, {
                        ...U.locationIneligibleDescription
                    })
                }), t[58] = e) : e = t[58];
                let n;
                t[59] === u ? n = t[60] : (n = u.formatMessage(U.locationIneligibleTitle), t[59] = u, t[60] = n);
                let r;
                t[61] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, K.jsx)(L, {
                    ...U.gotItButton
                }), t[61] = r) : r = t[61];
                let i;
                t[62] === a ? i = t[63] : (i = (0, K.jsx)(T, {
                    className: `rounded-full`,
                    color: `primary`,
                    onClick: a,
                    size: `large`,
                    type: `button`,
                    children: r
                }), t[62] = a, t[63] = i);
                let o;
                return t[64] !== a || t[65] !== n || t[66] !== i ? (o = (0, K.jsx)(C, {
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
    Oe, q, J, ke = e((() => {
        Oe = (e, t) => {
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
        }, q = e => {
            let t = Number(e);
            if (!Number.isSafeInteger(t) || t <= 0) throw Error(`Gift credit claim returned an invalid amount`);
            return t
        }, J = e => ({
            accountId: e.accountId,
            creditAmount: e.creditAmount
        })
    })),
    Y, Ae, je, X, Me, Ne, Pe, Fe, Ie, Le, Re = e((() => {
        N(), k(), u(), S(), M(), _(), E(), b(), de(), Y = t(z()), R(), me(), De(), ke(), _e(), H(), Ae = I(), je = [1e3, 2e3, 4e3], X = `X-OpenAI-Gift-Credit-Claim-Token`, Me = `chatgpt_gift_credit_redemption`, Ne = e => typeof e == `object` && !!e && `workspace_account_associated` in e && e.workspace_account_associated === !0, Pe = e => typeof e == `object` && !!e && (`ineligibility_detail_reason` in e && e.ineligibility_detail_reason === `recipient_currency_mismatch` || `ineligibility_reason` in e && (e.ineligibility_reason === `recipient_currency_mismatch` || e.ineligibility_reason === `recipient_location_ineligible`)), Fe = e => typeof e == `object` && !!e && `location_ineligible` in e && e.location_ineligible === !0, Ie = (e, t) => new Promise((n, r) => {
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
            giftFunnelId: n,
            onAlreadyClaimed: r,
            onClose: i,
            onRedeemed: a,
            onUnavailable: s
        }) => {
            "use no forget";
            let [u, d] = (0, Y.useReducer)(Oe, {
                status: `loading`
            }), f = B(), m = ie(), g = o(), {
                data: _,
                isLoading: b
            } = h(), [x, S] = (0, Y.useState)(!1), C = _?.accountItems.find(e => e.isPersonalAccount() && !e.isDeactivated()), w = g != null && !g.isPersonalAccount(), T = _ != null && ye(_.accountItems), E = (0, Y.useRef)(null), D = (0, Y.useRef)({
                deliveryMode: t,
                giftFunnelId: n
            }), O = (0, Y.useRef)(null), k = (0, Y.useRef)(null), A = (0, Y.useRef)(!1), j = (0, Y.useRef)(!1), M = (0, Y.useRef)(null), N = (0, Y.useCallback)((e, t, n) => {
                j.current || (j.current = !0, m.invalidateQueries({
                    queryKey: [`usage-limits-page-configs`, n]
                }), m.invalidateQueries({
                    queryKey: [`wham`, `usage`, `rate-limit-status`]
                }), m.invalidateQueries({
                    queryKey: [`settings`, `agent-usage`, `remaining-balance`, n]
                }), d({
                    type: `show_redeemed`,
                    creditAmount: e,
                    creditGrantId: t
                }), a(e))
            }, [a, m]), P = (0, Y.useCallback)(async (t, n = !1) => {
                if (A.current) return;
                A.current = !0;
                let r = M.current ?? (n ? `recovery` : `initial`);
                M.current = r, k.current?.abort();
                let i = new AbortController;
                k.current = i, d(n ? {
                    type: `show_processing`,
                    canRetry: !1,
                    details: t
                } : {
                    type: `start_redemption`,
                    details: t
                }), V({
                    step: `claim_redemption`,
                    outcome: `started`,
                    ...D.current,
                    attemptKind: r,
                    creditQuantity: t.creditAmount
                });
                try {
                    for (let n = 0;; n += 1) {
                        let a = await ee(Me),
                            o = await v.safePost(`/gift-credits/claims/redeem`, {
                                additionalHeaders: {
                                    ...a,
                                    [X]: e
                                },
                                requestBody: {
                                    account_id: t.accountId
                                },
                                signal: i.signal
                            });
                        if (i.signal.aborted) return;
                        if (o.status === `redeemed` && `credit_grant_id` in o) {
                            N(t.creditAmount, o.credit_grant_id, t.accountId);
                            return
                        }
                        if (o.status === `unavailable`) {
                            d({
                                type: `show_unavailable`
                            }), s();
                            return
                        }
                        if (`eligible` in o && o.eligible === !1) {
                            Ne(o) ? d({
                                type: `show_workspace_association_blocked`
                            }) : Pe(o) ? d({
                                type: `show_currency_mismatch`
                            }) : Fe(o) ? d({
                                type: `show_location_ineligible`
                            }) : (d({
                                type: `show_ineligible`
                            }), s());
                            return
                        }
                        if (o.status !== `claim_reserved`) throw Error(`Gift credit redemption returned an unknown state`);
                        let c = je[n];
                        if (c == null) {
                            V({
                                step: `claim_redemption`,
                                outcome: `pending`,
                                reason: `auto_retry_exhausted`,
                                ...D.current,
                                attemptKind: r,
                                giftId: o.gift_id,
                                creditQuantity: t.creditAmount
                            }), d({
                                type: `show_processing`,
                                canRetry: !0,
                                details: t
                            });
                            return
                        }
                        d({
                            type: `show_processing`,
                            canRetry: !1,
                            details: t
                        }), await Ie(c, i.signal)
                    }
                } catch (e) {
                    i.signal.aborted || (e instanceof p && e.isTransportError && V({
                        step: `claim_redemption`,
                        outcome: `failed`,
                        reason: `request_failed`,
                        ...D.current,
                        attemptKind: r,
                        creditQuantity: t.creditAmount
                    }), d({
                        type: `show_redemption_error`,
                        details: t
                    }))
                } finally {
                    k.current === i && (A.current = !1)
                }
            }, [e, N, s]), F = (0, Y.useCallback)(async () => {
                E.current?.abort();
                let t = new AbortController;
                if (E.current = t, d({
                        type: `check_eligibility`
                    }), b && (g == null || g.isPersonalAccount())) return;
                let n = () => {
                    O.current !== e && (O.current = e, V({
                        step: `claim_eligibility`,
                        outcome: `ineligible`,
                        reason: `workspace_account_associated`,
                        ...D.current
                    }))
                };
                if (T) {
                    n(), d({
                        type: `show_workspace_association_blocked`
                    });
                    return
                }
                if (w) {
                    n(), d({
                        type: `show_workspace_blocked`
                    });
                    return
                }
                try {
                    let n = await v.safeGet(`/gift-credits/claims/eligibility`, {
                        additionalHeaders: {
                            [X]: e
                        },
                        signal: t.signal
                    });
                    if (t.signal.aborted) return;
                    if (n.status === `unavailable`) {
                        d({
                            type: `show_unavailable`
                        }), s();
                        return
                    }
                    if (n.status === `redeemed` && `credit_grant_id` in n) {
                        d({
                            type: `show_redeemed`,
                            creditAmount: q(n.amount),
                            creditGrantId: n.credit_grant_id
                        }), r();
                        return
                    }
                    if (n.status === `claim_reserved`) {
                        P({
                            accountId: n.account_id,
                            creditAmount: q(n.amount)
                        }, !0);
                        return
                    }
                    if (`eligible` in n && n.eligible === !1) {
                        Ne(n) ? d({
                            type: `show_workspace_association_blocked`
                        }) : Pe(n) ? d({
                            type: `show_currency_mismatch`
                        }) : Fe(n) ? d({
                            type: `show_location_ineligible`
                        }) : (d({
                            type: `show_ineligible`
                        }), s());
                        return
                    }
                    if (!(`eligible_accounts` in n) || n.eligible_accounts.length === 0) {
                        d({
                            type: `show_ineligible`
                        }), s();
                        return
                    }
                    let i = n.eligible_accounts[0];
                    d({
                        type: `show_available`,
                        details: {
                            accountId: i.account_id,
                            creditAmount: q(n.amount)
                        },
                        presentation: n.presentation ?? null
                    })
                } catch (e) {
                    t.signal.aborted || (e instanceof p && e.isTransportError && V({
                        step: `claim_eligibility`,
                        outcome: `failed`,
                        reason: `request_failed`,
                        ...D.current
                    }), d({
                        type: `show_eligibility_error`
                    }), s())
                }
            }, [b, e, g, T, w, r, s, P]), re = (0, Y.useCallback)(async () => {
                if (!(C == null || x)) {
                    S(!0);
                    try {
                        let {
                            updatedAccount: e,
                            willRedirect: t
                        } = await ne(m, C.id, f, y(), !0, window.location.href);
                        if (!e && !t) {
                            S(!1), y().danger(f.formatMessage(U.accountSwitchError));
                            return
                        }
                        t || c(window.location.href)
                    } catch {
                        S(!1), y().danger(f.formatMessage(U.accountSwitchError))
                    }
                }
            }, [f, x, C, m]), I = (0, Y.useCallback)(() => {
                u.status === `available` && P(J(u))
            }, [P, u]), L = (0, Y.useCallback)(() => {
                if (u.status === `error` && u.operation === `eligibility`) {
                    F();
                    return
                }(u.status === `error` && u.operation === `redemption` || u.status === `processing` && u.canRetry) && P(J(u), !0)
            }, [F, P, u]);
            return (0, Y.useEffect)(() => (F(), () => {
                E.current?.abort()
            }), [F]), (0, Y.useEffect)(() => (j.current = !1, M.current = null, D.current = {
                deliveryMode: t,
                giftFunnelId: n
            }, () => {
                k.current?.abort(), k.current = null, A.current = !1
            }), [e, t, n]), (0, Ae.jsx)(Ee, {
                onClose: i,
                onClaim: I,
                onRetry: L,
                onSwitchAccount: () => l({
                    reason: te.AccountSwitcher,
                    source: `gifts.credits.redemption-flow`
                }),
                onSwitchToPersonal: () => void re(),
                canSwitchToPersonal: C != null,
                isSwitchingAccount: x,
                state: u
            })
        }
    }));

function ze() {
    "use forget";
    let e = (0, Z.c)(18),
        {
            claimCode: t
        } = oe(),
        n = ce(),
        r = ae(),
        {
            search: i
        } = n,
        a;
    e[0] === i ? a = e[1] : (a = new URLSearchParams(i).get(`gift_auth_return`), e[0] = i, e[1] = a);
    let o = a === `1`,
        s;
    e[2] === Symbol.for(`react.memo_cache_sentinel`) ? (s = f(), e[2] = s) : s = e[2];
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
    let p, m;
    if (e[10] === t ? (p = e[11], m = e[12]) : (p = () => {
            !c || t == null || t.length === 0 || l.current === t || (l.current = t, V({
                step: `claim_link`,
                outcome: `started`
            }))
        }, m = [c, t], e[10] = t, e[11] = p, e[12] = m), (0, Q.useEffect)(p, m), t == null || t.length === 0) {
        let t;
        return e[13] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, $.jsx)(ue, {
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
    let h;
    return e[16] === t ? h = e[17] : (h = (0, $.jsx)(Ue, {
        claimCode: t
    }), e[16] = t, e[17] = h), h
}

function Be() {}
var Z, Q, $, Ve, He, Ue, We = e((() => {
        Z = fe(), ge(), x(), w(), k(), u(), s(), Q = t(z()), R(), re(), me(), Re(), H(), $ = I(), Ve = 50, He = e => {
            "use forget";
            let t = (0, Z.c)(4),
                {
                    claimCode: r
                } = e,
                a = (0, Q.useRef)(null),
                o, s;
            t[0] === r ? (o = t[1], s = t[2]) : (o = () => {
                a.current !== r && (a.current = r, V({
                    step: `claim_link`,
                    outcome: `started`
                }), V({
                    step: `auth_redirect`,
                    outcome: `started`
                }));
                let e = !1,
                    t = new URL(`/gifts/credits/claim/${encodeURIComponent(r)}`, window.location.origin);
                return t.searchParams.set(`gift_auth_return`, `1`), i.flushStructuredEvents(Ve).catch(Be).then(() => {
                    if (!e) return n({
                        callbackUrl: t.href,
                        fallbackScreenHint: `login_or_signup`
                    })
                }), () => {
                    e = !0
                }
            }, s = [r], t[0] = r, t[1] = o, t[2] = s), (0, Q.useEffect)(o, s);
            let c;
            return t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, $.jsx)(he, {}), t[3] = c) : c = t[3], c
        }, Ue = e => {
            "use forget";
            let t = (0, Z.c)(20),
                {
                    claimCode: n
                } = e,
                r = B(),
                i = ae(),
                a = j()?.user,
                o;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (o = () => {
                D({
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
            let l = c,
                u;
            t[4] !== l || t[5] !== r ? (u = e => {
                l(), y().success(r.formatMessage(U.redeemedToast, {
                    creditAmount: e
                }))
            }, t[4] = l, t[5] = r, t[6] = u) : u = t[6];
            let d = u,
                f;
            t[7] !== l || t[8] !== r ? (f = () => {
                l(), y().danger(r.formatMessage(U.alreadyClaimedToast))
            }, t[7] = l, t[8] = r, t[9] = f) : f = t[9];
            let p = f,
                m;
            t[10] !== l || t[11] !== r ? (m = () => {
                l(), y().danger(r.formatMessage(U.unavailableToast))
            }, t[10] = l, t[11] = r, t[12] = m) : m = t[12];
            let h = m,
                g;
            t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (g = (0, $.jsx)(he, {}), t[13] = g) : g = t[13];
            let _;
            return t[14] !== n || t[15] !== l || t[16] !== p || t[17] !== d || t[18] !== h ? (_ = (0, $.jsxs)($.Fragment, {
                children: [g, (0, $.jsx)(Le, {
                    claimCode: n,
                    onAlreadyClaimed: p,
                    onClose: l,
                    onRedeemed: d,
                    onUnavailable: h
                })]
            }), t[14] = n, t[15] = l, t[16] = p, t[17] = d, t[18] = h, t[19] = _) : _ = t[19], _
        }
    })),
    Ge, Ke = e((() => {
        _e(), u(), F(), re(), Ge = () => f() && !A(`2067846105`) && !ve() ? pe(`/`) : null
    }));
export {
    We as i, Ke as n, ze as r, Ge as t
};
//# sourceMappingURL=48eff304-nyjepvqi1m53m6b5.js.map