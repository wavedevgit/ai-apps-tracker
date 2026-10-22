const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/cc1ea293-deslnrvhcnom77cn.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-nxpmzchfjvwqts17.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/fedf4e11-l4gcgr4bphi7p4iy.js", "assets/cea3409c-m1y2nhiyfbsfcaaw.js", "assets/30901919-lgbmg5s09xld40kt.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    $ot as r,
    Ait as i,
    Aw as a,
    IU as o,
    Int as s,
    J7 as c,
    Jat as l,
    LU as u,
    Ml as d,
    N4 as f,
    Nit as p,
    Ow as m,
    P4 as h,
    Q7 as g,
    Rnt as _,
    a0 as v,
    a2 as y,
    c2 as b,
    d2 as x,
    eE as S,
    eat as ee,
    eot as C,
    f0 as w,
    fr as T,
    hrt as E,
    jl as te,
    kit as D,
    lr as O,
    lrt as k,
    o0 as ne,
    o2 as A,
    p0 as j,
    q1 as M,
    rat as N,
    s2 as P,
    t0 as re
} from "./4813494d-nxpmzchfjvwqts17.js";
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
    fh as he,
    ph as B
} from "./c2675c8c-otyjprdiowg2v8hl.js";
import {
    c as ge,
    l as _e
} from "./8b34dbc2-n194ohawifys3bko.js";
import {
    n as V,
    t as H
} from "./fedf4e11-l4gcgr4bphi7p4iy.js";
import {
    n as ve,
    r as ye,
    t as be
} from "./5d04b0af-n3jhkhsl3x76vzxz.js";
var U, xe = e((() => {
    A(), fe(), U = y(() => ue(() => import(`./cc1ea293-deslnrvhcnom77cn.js`).then(e => e.GiftCreditsClaimModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7])))
}));

function Se() {
    P(U)
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
        Ee = me(), S(), a(), b(), W = t(R()), L(), xe(), V(), G = F(), De = e => {
            "use forget";
            let t = (0, Ee.c)(68),
                {
                    canSwitchToPersonal: r,
                    isSwitchingAccount: i,
                    onClaim: a,
                    onClose: o,
                    onRetry: s,
                    onSwitchAccount: c,
                    onSwitchToPersonal: l,
                    state: u
                } = e,
                d = z(),
                f;
            t[0] !== a || t[1] !== o || t[2] !== s || t[3] !== u.canRetry || t[4] !== u.creditAmount || t[5] !== u.operation || t[6] !== u.status ? (f = () => {
                if (u.status === `available`) {
                    x(U, {
                        creditAmount: u.creditAmount,
                        onClaim: a,
                        onDismiss: o,
                        status: `available`
                    });
                    return
                }
                if (u.status === `redeeming` || u.status === `processing` && !u.canRetry) {
                    x(U, {
                        creditAmount: u.creditAmount,
                        onClaim: a,
                        onDismiss: o,
                        status: `claiming`
                    });
                    return
                }
                if (u.status === `processing` && u.canRetry || u.status === `error` && u.operation === `redemption`) {
                    x(U, {
                        creditAmount: u.creditAmount,
                        onClaim: s,
                        onDismiss: o,
                        status: `retryable`
                    });
                    return
                }
                P(U)
            }, t[0] = a, t[1] = o, t[2] = s, t[3] = u.canRetry, t[4] = u.creditAmount, t[5] = u.operation, t[6] = u.status, t[7] = f) : f = t[7];
            let p;
            t[8] !== a || t[9] !== o || t[10] !== s || t[11] !== u ? (p = [a, o, s, u], t[8] = a, t[9] = o, t[10] = s, t[11] = u, t[12] = p) : p = t[12], (0, W.useEffect)(f, p);
            let h;
            if (t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (h = [], t[13] = h) : h = t[13], (0, W.useEffect)(Ce, h), u.status === `workspace_association_blocked`) {
                let e;
                t[14] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, G.jsx)(`span`, {
                    className: `block text-sm leading-5`,
                    children: (0, G.jsx)(I, {
                        ...H.workspaceAccountIneligibleDescription
                    })
                }), t[14] = e) : e = t[14];
                let r;
                t[15] === d ? r = t[16] : (r = d.formatMessage(H.workspaceAccountIneligibleTitle), t[15] = d, t[16] = r);
                let i;
                t[17] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, G.jsx)(I, {
                    ...H.switchAccountButton
                }), t[17] = i) : i = t[17];
                let a;
                t[18] === c ? a = t[19] : (a = (0, G.jsx)(n, {
                    className: `rounded-full`,
                    color: `primary`,
                    onClick: c,
                    size: `large`,
                    type: `button`,
                    children: i
                }), t[18] = c, t[19] = a);
                let s;
                t[20] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, G.jsx)(I, {
                    ...H.goBackButton
                }), t[20] = s) : s = t[20];
                let l;
                t[21] === o ? l = t[22] : (l = (0, G.jsx)(n, {
                    className: `rounded-full`,
                    color: `secondary`,
                    onClick: o,
                    size: `large`,
                    type: `button`,
                    children: s
                }), t[21] = o, t[22] = l);
                let u;
                return t[23] !== o || t[24] !== r || t[25] !== a || t[26] !== l ? (u = (0, G.jsx)(m, {
                    className: `max-w-[480px]`,
                    description: e,
                    isOpen: !0,
                    onClose: o,
                    onEscapeKeyDown: we,
                    shouldIgnoreClickOutside: !0,
                    showCloseButton: !1,
                    size: `custom`,
                    type: `warning`,
                    title: r,
                    primaryButton: a,
                    secondaryButton: l
                }), t[23] = o, t[24] = r, t[25] = a, t[26] = l, t[27] = u) : u = t[27], u
            }
            if (u.status === `workspace_blocked`) {
                let e = r ? H.personalAccountRequiredDescription : H.personalWorkspaceUnavailableDescription,
                    a;
                t[28] === e ? a = t[29] : (a = (0, G.jsx)(`span`, {
                    className: `block text-sm leading-5`,
                    children: (0, G.jsx)(I, {
                        ...e
                    })
                }), t[28] = e, t[29] = a);
                let s;
                t[30] === d ? s = t[31] : (s = d.formatMessage(H.personalAccountRequiredTitle), t[30] = d, t[31] = s);
                let u = r && i,
                    f = r && i,
                    p = r ? l : c,
                    h = r ? H.switchToPersonalAccount : H.switchAccountButton,
                    g;
                t[32] === h ? g = t[33] : (g = (0, G.jsx)(I, {
                    ...h
                }), t[32] = h, t[33] = g);
                let _;
                t[34] !== g || t[35] !== u || t[36] !== f || t[37] !== p ? (_ = (0, G.jsx)(n, {
                    className: `rounded-full`,
                    color: `primary`,
                    disabled: u,
                    loading: f,
                    onClick: p,
                    size: `large`,
                    type: `button`,
                    children: g
                }), t[34] = g, t[35] = u, t[36] = f, t[37] = p, t[38] = _) : _ = t[38];
                let v;
                t[39] === Symbol.for(`react.memo_cache_sentinel`) ? (v = (0, G.jsx)(I, {
                    ...H.goBackButton
                }), t[39] = v) : v = t[39];
                let y;
                t[40] === o ? y = t[41] : (y = (0, G.jsx)(n, {
                    className: `rounded-full`,
                    color: `secondary`,
                    onClick: o,
                    size: `large`,
                    type: `button`,
                    children: v
                }), t[40] = o, t[41] = y);
                let b;
                return t[42] !== o || t[43] !== _ || t[44] !== y || t[45] !== a || t[46] !== s ? (b = (0, G.jsx)(m, {
                    className: `max-w-[480px]`,
                    description: a,
                    testId: `modal-gift-credit-personal-account-required`,
                    isOpen: !0,
                    onClose: o,
                    onEscapeKeyDown: Te,
                    shouldIgnoreClickOutside: !0,
                    showCloseButton: !1,
                    size: `custom`,
                    type: `warning`,
                    title: s,
                    primaryButton: _,
                    secondaryButton: y
                }), t[42] = o, t[43] = _, t[44] = y, t[45] = a, t[46] = s, t[47] = b) : b = t[47], b
            }
            if (u.status === `currency_mismatch`) {
                let e;
                t[48] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, G.jsx)(`span`, {
                    className: `text-token-text-secondary block text-sm leading-5`,
                    children: (0, G.jsx)(I, {
                        ...H.currencyMismatchDescription
                    })
                }), t[48] = e) : e = t[48];
                let r;
                t[49] === d ? r = t[50] : (r = d.formatMessage(H.currencyMismatchTitle), t[49] = d, t[50] = r);
                let i;
                t[51] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, G.jsx)(I, {
                    ...H.gotItButton
                }), t[51] = i) : i = t[51];
                let a;
                t[52] === o ? a = t[53] : (a = (0, G.jsx)(n, {
                    className: `rounded-full`,
                    color: `primary`,
                    onClick: o,
                    size: `large`,
                    type: `button`,
                    children: i
                }), t[52] = o, t[53] = a);
                let s;
                return t[54] !== o || t[55] !== r || t[56] !== a ? (s = (0, G.jsx)(m, {
                    className: `max-w-[480px]`,
                    description: e,
                    testId: `modal-gift-credit-currency-mismatch`,
                    isOpen: !0,
                    onClose: o,
                    shouldIgnoreClickOutside: !0,
                    showCloseButton: !1,
                    size: `custom`,
                    type: `danger`,
                    title: r,
                    primaryButton: a
                }), t[54] = o, t[55] = r, t[56] = a, t[57] = s) : s = t[57], s
            }
            if (u.status === `location_ineligible`) {
                let e;
                t[58] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, G.jsx)(`span`, {
                    className: `text-token-text-secondary block text-sm leading-5`,
                    children: (0, G.jsx)(I, {
                        ...H.locationIneligibleDescription
                    })
                }), t[58] = e) : e = t[58];
                let r;
                t[59] === d ? r = t[60] : (r = d.formatMessage(H.locationIneligibleTitle), t[59] = d, t[60] = r);
                let i;
                t[61] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, G.jsx)(I, {
                    ...H.gotItButton
                }), t[61] = i) : i = t[61];
                let a;
                t[62] === o ? a = t[63] : (a = (0, G.jsx)(n, {
                    className: `rounded-full`,
                    color: `primary`,
                    onClick: o,
                    size: `large`,
                    type: `button`,
                    children: i
                }), t[62] = o, t[63] = a);
                let s;
                return t[64] !== o || t[65] !== r || t[66] !== a ? (s = (0, G.jsx)(m, {
                    className: `max-w-[480px]`,
                    description: e,
                    testId: `modal-gift-credit-location-ineligible`,
                    isOpen: !0,
                    onClose: o,
                    shouldIgnoreClickOutside: !0,
                    showCloseButton: !1,
                    size: `custom`,
                    type: `danger`,
                    title: r,
                    primaryButton: a
                }), t[64] = o, t[65] = r, t[66] = a, t[67] = s) : s = t[67], s
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
        M(), u(), D(), C(), N(), h(), g(), d(), pe(), J = t(R()), L(), he(), Oe(), Ae(), ve(), V(), je = F(), Me = [1e3, 2e3, 4e3], Y = `X-OpenAI-Gift-Credit-Claim-Token`, Ne = `chatgpt_gift_credit_redemption`, X = e => typeof e == `object` && !!e && `workspace_account_associated` in e && e.workspace_account_associated === !0, Pe = e => typeof e == `object` && !!e && (`ineligibility_detail_reason` in e && e.ineligibility_detail_reason === `recipient_currency_mismatch` || `ineligibility_reason` in e && (e.ineligibility_reason === `recipient_currency_mismatch` || e.ineligibility_reason === `recipient_location_ineligible`)), Fe = e => typeof e == `object` && !!e && `location_ineligible` in e && e.location_ineligible === !0, Ie = (e, t) => new Promise((n, r) => {
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
            let [u, d] = (0, J.useReducer)(ke, {
                status: `loading`
            }), m = z(), h = oe(), g = ne(), {
                data: _,
                isLoading: y
            } = v(), [b, x] = (0, J.useState)(!1), S = _?.accountItems.find(e => e.isPersonalAccount() && !e.isDeactivated()), C = g != null && !g.isPersonalAccount(), w = _ != null && be(_.accountItems), T = (0, J.useRef)(null), E = (0, J.useRef)({
                deliveryMode: t,
                giftFunnelId: n
            }), D = (0, J.useRef)(null), O = (0, J.useRef)(null), k = (0, J.useRef)(!1), A = (0, J.useRef)(!1), j = (0, J.useRef)(null), M = (0, J.useCallback)((e, t, n) => {
                A.current || (A.current = !0, h.invalidateQueries({
                    queryKey: [`usage-limits-page-configs`, n]
                }), h.invalidateQueries({
                    queryKey: [`wham`, `usage`, `rate-limit-status`]
                }), h.invalidateQueries({
                    queryKey: [`settings`, `agent-usage`, `remaining-balance`, n]
                }), d({
                    type: `show_redeemed`,
                    creditAmount: e,
                    creditGrantId: t
                }), a(e))
            }, [a, h]), N = (0, J.useCallback)(async (t, n = !1) => {
                if (k.current) return;
                k.current = !0;
                let r = j.current ?? (n ? `recovery` : `initial`);
                j.current = r, O.current?.abort();
                let i = new AbortController;
                O.current = i, d(n ? {
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
                    attemptKind: r,
                    creditQuantity: t.creditAmount
                });
                try {
                    for (let n = 0;; n += 1) {
                        let a = await te(Ne),
                            o = await c.safePost(`/gift-credits/claims/redeem`, {
                                additionalHeaders: {
                                    ...a,
                                    [Y]: e
                                },
                                requestBody: {
                                    account_id: t.accountId
                                },
                                signal: i.signal
                            });
                        if (i.signal.aborted) return;
                        if (o.status === `redeemed` && `credit_grant_id` in o) {
                            M(t.creditAmount, o.credit_grant_id, t.accountId);
                            return
                        }
                        if (o.status === `unavailable`) {
                            d({
                                type: `show_unavailable`
                            }), s();
                            return
                        }
                        if (`eligible` in o && o.eligible === !1) {
                            X(o) ? d({
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
                        let l = Me[n];
                        if (l == null) {
                            B({
                                step: `claim_redemption`,
                                outcome: `pending`,
                                reason: `auto_retry_exhausted`,
                                ...E.current,
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
                        }), await Ie(l, i.signal)
                    }
                } catch (e) {
                    i.signal.aborted || (e instanceof l && e.isTransportError && B({
                        step: `claim_redemption`,
                        outcome: `failed`,
                        reason: `request_failed`,
                        ...E.current,
                        attemptKind: r,
                        creditQuantity: t.creditAmount
                    }), d({
                        type: `show_redemption_error`,
                        details: t
                    }))
                } finally {
                    O.current === i && (k.current = !1)
                }
            }, [e, M, s]), P = (0, J.useCallback)(async () => {
                T.current?.abort();
                let t = new AbortController;
                if (T.current = t, d({
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
                    n(), d({
                        type: `show_workspace_association_blocked`
                    });
                    return
                }
                if (C) {
                    n(), d({
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
                        d({
                            type: `show_unavailable`
                        }), s();
                        return
                    }
                    if (n.status === `redeemed` && `credit_grant_id` in n) {
                        d({
                            type: `show_redeemed`,
                            creditAmount: K(n.amount),
                            creditGrantId: n.credit_grant_id
                        }), r();
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
                        X(n) ? d({
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
                            creditAmount: K(n.amount)
                        },
                        presentation: n.presentation ?? null
                    })
                } catch (e) {
                    t.signal.aborted || (e instanceof l && e.isTransportError && B({
                        step: `claim_eligibility`,
                        outcome: `failed`,
                        reason: `request_failed`,
                        ...E.current
                    }), d({
                        type: `show_eligibility_error`
                    }), s())
                }
            }, [y, e, g, w, C, r, s, N]), ie = (0, J.useCallback)(async () => {
                if (!(S == null || b)) {
                    x(!0);
                    try {
                        let {
                            updatedAccount: e,
                            willRedirect: t
                        } = await re(h, S.id, m, o(), !0, window.location.href);
                        if (!e && !t) {
                            x(!1), o().danger(m.formatMessage(H.accountSwitchError));
                            return
                        }
                        t || f(window.location.href)
                    } catch {
                        x(!1), o().danger(m.formatMessage(H.accountSwitchError))
                    }
                }
            }, [m, b, S, h]), F = (0, J.useCallback)(() => {
                u.status === `available` && N(q(u))
            }, [N, u]), ae = (0, J.useCallback)(() => {
                if (u.status === `error` && u.operation === `eligibility`) {
                    P();
                    return
                }(u.status === `error` && u.operation === `redemption` || u.status === `processing` && u.canRetry) && N(q(u), !0)
            }, [P, N, u]);
            return (0, J.useEffect)(() => (P(), () => {
                T.current?.abort()
            }), [P]), (0, J.useEffect)(() => (A.current = !1, j.current = null, E.current = {
                deliveryMode: t,
                giftFunnelId: n
            }, () => {
                O.current?.abort(), O.current = null, k.current = !1
            }), [e, t, n]), (0, je.jsx)(De, {
                onClose: i,
                onClaim: F,
                onRetry: ae,
                onSwitchAccount: () => p({
                    reason: ee.AccountSwitcher,
                    source: `gifts.credits.redemption-flow`
                }),
                onSwitchToPersonal: () => void ie(),
                canSwitchToPersonal: S != null,
                isSwitchingAccount: b,
                state: u
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
            search: a
        } = n,
        o;
    e[0] === a ? o = e[1] : (o = new URLSearchParams(a).get(`gift_auth_return`), e[0] = a, e[1] = o);
    let s = o === `1`,
        c;
    e[2] === Symbol.for(`react.memo_cache_sentinel`) ? (c = i(), e[2] = c) : c = e[2];
    let l = c,
        u = (0, Q.useRef)(s ? t ?? null : null),
        d, f;
    e[3] !== s || e[4] !== n.hash || e[5] !== n.pathname || e[6] !== r || e[7] !== a ? (d = () => {
        if (!l || !s) return;
        let e = new URLSearchParams(a);
        e.delete(`gift_auth_return`), r({
            pathname: n.pathname,
            search: e.size > 0 ? `?${e.toString()}` : ``,
            hash: n.hash
        }, {
            replace: !0
        })
    }, f = [l, s, n.hash, n.pathname, r, a], e[3] = s, e[4] = n.hash, e[5] = n.pathname, e[6] = r, e[7] = a, e[8] = d, e[9] = f) : (d = e[8], f = e[9]), (0, Q.useEffect)(d, f);
    let p, m;
    if (e[10] === t ? (p = e[11], m = e[12]) : (p = () => {
            !l || t == null || t.length === 0 || u.current === t || (u.current = t, B({
                step: `claim_link`,
                outcome: `started`
            }))
        }, m = [l, t], e[10] = t, e[11] = p, e[12] = m), (0, Q.useEffect)(p, m), t == null || t.length === 0) {
        let t;
        return e[13] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, $.jsx)(de, {
            replace: !0,
            to: `/`
        }), e[13] = t) : t = e[13], t
    }
    if (!l) {
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
        Z = me(), _e(), T(), w(), u(), D(), _(), Q = t(R()), L(), ce(), he(), Re(), V(), $ = F(), Ve = 50, He = e => {
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
                return t.searchParams.set(`gift_auth_return`, `1`), s.flushStructuredEvents(Ve).catch(Be).then(() => {
                    if (!e) return j({
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
                i = z(),
                a = se(),
                s = r()?.user,
                c;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (c = () => {
                O({
                    email: s?.email,
                    phoneNumber: s?.phone_number
                })
            }, t[0] = c) : c = t[0];
            let l;
            t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (l = [s?.email, s?.phone_number], t[1] = l) : l = t[1], (0, Q.useEffect)(c, l);
            let u;
            t[2] === a ? u = t[3] : (u = () => {
                a(`/`, {
                    replace: !0
                })
            }, t[2] = a, t[3] = u);
            let d = u,
                f;
            t[4] !== d || t[5] !== i ? (f = e => {
                d(), o().success(i.formatMessage(H.redeemedToast, {
                    creditAmount: e
                }))
            }, t[4] = d, t[5] = i, t[6] = f) : f = t[6];
            let p = f,
                m;
            t[7] !== d || t[8] !== i ? (m = () => {
                d(), o().danger(i.formatMessage(H.alreadyClaimedToast))
            }, t[7] = d, t[8] = i, t[9] = m) : m = t[9];
            let h = m,
                g;
            t[10] !== d || t[11] !== i ? (g = () => {
                d(), o().danger(i.formatMessage(H.unavailableToast))
            }, t[10] = d, t[11] = i, t[12] = g) : g = t[12];
            let _ = g,
                v;
            t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (v = (0, $.jsx)(ge, {}), t[13] = v) : v = t[13];
            let y;
            return t[14] !== n || t[15] !== d || t[16] !== h || t[17] !== p || t[18] !== _ ? (y = (0, $.jsxs)($.Fragment, {
                children: [v, (0, $.jsx)(Le, {
                    claimCode: n,
                    onAlreadyClaimed: h,
                    onClose: d,
                    onRedeemed: p,
                    onUnavailable: _
                })]
            }), t[14] = n, t[15] = d, t[16] = h, t[17] = p, t[18] = _, t[19] = y) : y = t[19], y
        }
    })),
    Ge, Ke = e((() => {
        ve(), D(), E(), ce(), Ge = () => i() && !k(`2067846105`) && !ye() ? le(`/`) : null
    }));
export {
    We as i, Ke as n, ze as r, Ge as t
};
//# sourceMappingURL=48eff304-bd6051rkfj72vkok.js.map