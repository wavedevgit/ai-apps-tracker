const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/cc1ea293-iky448ts7f4g2o6o.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-r54yv6lv29x4ew99.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/fedf4e11-l4gcgr4bphi7p4iy.js", "assets/cea3409c-nkri9ftdnmmum5ce.js", "assets/30901919-k5uqyx4vyplt9toa.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $7 as n,
    $T as r,
    Ait as i,
    Aw as a,
    IU as o,
    LU as s,
    Lnt as c,
    Ml as l,
    N4 as u,
    Ow as d,
    P4 as f,
    Pit as p,
    Y7 as m,
    Yat as h,
    a0 as g,
    a2 as _,
    c2 as v,
    d2 as y,
    eE as b,
    est as x,
    f0 as S,
    fr as C,
    grt as ee,
    iat as w,
    jit as T,
    jl as te,
    lr as E,
    o0 as ne,
    o2 as D,
    p0 as O,
    q1 as k,
    s2 as A,
    t0 as re,
    tat as ie,
    tot as ae,
    urt as j,
    znt as M
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    At as oe,
    Bn as N,
    Lt as se,
    N as ce,
    Nn as P,
    Nt as le,
    Q as ue,
    Rn as F,
    Vn as I,
    bt as de,
    cn as fe,
    ct as pe,
    ln as me,
    s as he,
    wn as ge,
    zn as L
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    _h as R,
    gh as _e
} from "./c2675c8c-jg3tpj8mw86wdc0g.js";
import {
    c as ve,
    l as ye
} from "./8b34dbc2-bgocf3s6t6l67twq.js";
import {
    n as z,
    t as B
} from "./fedf4e11-l4gcgr4bphi7p4iy.js";
import {
    n as be,
    r as xe,
    t as Se
} from "./5d04b0af-mm530r0kn7fl13dn.js";
var V, Ce = e((() => {
    D(), me(), V = _(() => fe(() => import(`./cc1ea293-iky448ts7f4g2o6o.js`).then(e => e.GiftCreditsClaimModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7])))
}));

function we() {
    A(V)
}

function Te() {
    return we
}

function Ee(e) {
    return e.preventDefault()
}

function De(e) {
    return e.preventDefault()
}
var Oe, H, U, ke, Ae = e((() => {
        Oe = ge(), b(), a(), v(), H = t(I()), F(), Ce(), z(), U = N(), ke = e => {
            "use forget";
            let t = (0, Oe.c)(68),
                {
                    canSwitchToPersonal: n,
                    isSwitchingAccount: i,
                    onClaim: a,
                    onClose: o,
                    onRetry: s,
                    onSwitchAccount: c,
                    onSwitchToPersonal: l,
                    state: u
                } = e,
                f = L(),
                p;
            t[0] !== a || t[1] !== o || t[2] !== s || t[3] !== u.canRetry || t[4] !== u.creditAmount || t[5] !== u.operation || t[6] !== u.status ? (p = () => {
                if (u.status === `available`) {
                    y(V, {
                        creditAmount: u.creditAmount,
                        onClaim: a,
                        onDismiss: o,
                        status: `available`
                    });
                    return
                }
                if (u.status === `redeeming` || u.status === `processing` && !u.canRetry) {
                    y(V, {
                        creditAmount: u.creditAmount,
                        onClaim: a,
                        onDismiss: o,
                        status: `claiming`
                    });
                    return
                }
                if (u.status === `processing` && u.canRetry || u.status === `error` && u.operation === `redemption`) {
                    y(V, {
                        creditAmount: u.creditAmount,
                        onClaim: s,
                        onDismiss: o,
                        status: `retryable`
                    });
                    return
                }
                A(V)
            }, t[0] = a, t[1] = o, t[2] = s, t[3] = u.canRetry, t[4] = u.creditAmount, t[5] = u.operation, t[6] = u.status, t[7] = p) : p = t[7];
            let m;
            t[8] !== a || t[9] !== o || t[10] !== s || t[11] !== u ? (m = [a, o, s, u], t[8] = a, t[9] = o, t[10] = s, t[11] = u, t[12] = m) : m = t[12], (0, H.useEffect)(p, m);
            let h;
            if (t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (h = [], t[13] = h) : h = t[13], (0, H.useEffect)(Te, h), u.status === `workspace_association_blocked`) {
                let e;
                t[14] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, U.jsx)(`span`, {
                    className: `block text-sm leading-5`,
                    children: (0, U.jsx)(P, {
                        ...B.workspaceAccountIneligibleDescription
                    })
                }), t[14] = e) : e = t[14];
                let n;
                t[15] === f ? n = t[16] : (n = f.formatMessage(B.workspaceAccountIneligibleTitle), t[15] = f, t[16] = n);
                let i;
                t[17] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, U.jsx)(P, {
                    ...B.switchAccountButton
                }), t[17] = i) : i = t[17];
                let a;
                t[18] === c ? a = t[19] : (a = (0, U.jsx)(r, {
                    className: `rounded-full`,
                    color: `primary`,
                    onClick: c,
                    size: `large`,
                    type: `button`,
                    children: i
                }), t[18] = c, t[19] = a);
                let s;
                t[20] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, U.jsx)(P, {
                    ...B.goBackButton
                }), t[20] = s) : s = t[20];
                let l;
                t[21] === o ? l = t[22] : (l = (0, U.jsx)(r, {
                    className: `rounded-full`,
                    color: `secondary`,
                    onClick: o,
                    size: `large`,
                    type: `button`,
                    children: s
                }), t[21] = o, t[22] = l);
                let u;
                return t[23] !== o || t[24] !== n || t[25] !== a || t[26] !== l ? (u = (0, U.jsx)(d, {
                    className: `max-w-[480px]`,
                    description: e,
                    isOpen: !0,
                    onClose: o,
                    onEscapeKeyDown: Ee,
                    shouldIgnoreClickOutside: !0,
                    showCloseButton: !1,
                    size: `custom`,
                    type: `warning`,
                    title: n,
                    primaryButton: a,
                    secondaryButton: l
                }), t[23] = o, t[24] = n, t[25] = a, t[26] = l, t[27] = u) : u = t[27], u
            }
            if (u.status === `workspace_blocked`) {
                let e = n ? B.personalAccountRequiredDescription : B.personalWorkspaceUnavailableDescription,
                    a;
                t[28] === e ? a = t[29] : (a = (0, U.jsx)(`span`, {
                    className: `block text-sm leading-5`,
                    children: (0, U.jsx)(P, {
                        ...e
                    })
                }), t[28] = e, t[29] = a);
                let s;
                t[30] === f ? s = t[31] : (s = f.formatMessage(B.personalAccountRequiredTitle), t[30] = f, t[31] = s);
                let u = n && i,
                    p = n && i,
                    m = n ? l : c,
                    h = n ? B.switchToPersonalAccount : B.switchAccountButton,
                    g;
                t[32] === h ? g = t[33] : (g = (0, U.jsx)(P, {
                    ...h
                }), t[32] = h, t[33] = g);
                let _;
                t[34] !== g || t[35] !== u || t[36] !== p || t[37] !== m ? (_ = (0, U.jsx)(r, {
                    className: `rounded-full`,
                    color: `primary`,
                    disabled: u,
                    loading: p,
                    onClick: m,
                    size: `large`,
                    type: `button`,
                    children: g
                }), t[34] = g, t[35] = u, t[36] = p, t[37] = m, t[38] = _) : _ = t[38];
                let v;
                t[39] === Symbol.for(`react.memo_cache_sentinel`) ? (v = (0, U.jsx)(P, {
                    ...B.goBackButton
                }), t[39] = v) : v = t[39];
                let y;
                t[40] === o ? y = t[41] : (y = (0, U.jsx)(r, {
                    className: `rounded-full`,
                    color: `secondary`,
                    onClick: o,
                    size: `large`,
                    type: `button`,
                    children: v
                }), t[40] = o, t[41] = y);
                let b;
                return t[42] !== o || t[43] !== _ || t[44] !== y || t[45] !== a || t[46] !== s ? (b = (0, U.jsx)(d, {
                    className: `max-w-[480px]`,
                    description: a,
                    testId: `modal-gift-credit-personal-account-required`,
                    isOpen: !0,
                    onClose: o,
                    onEscapeKeyDown: De,
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
                t[48] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, U.jsx)(`span`, {
                    className: `text-token-text-secondary block text-sm leading-5`,
                    children: (0, U.jsx)(P, {
                        ...B.currencyMismatchDescription
                    })
                }), t[48] = e) : e = t[48];
                let n;
                t[49] === f ? n = t[50] : (n = f.formatMessage(B.currencyMismatchTitle), t[49] = f, t[50] = n);
                let i;
                t[51] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, U.jsx)(P, {
                    ...B.gotItButton
                }), t[51] = i) : i = t[51];
                let a;
                t[52] === o ? a = t[53] : (a = (0, U.jsx)(r, {
                    className: `rounded-full`,
                    color: `primary`,
                    onClick: o,
                    size: `large`,
                    type: `button`,
                    children: i
                }), t[52] = o, t[53] = a);
                let s;
                return t[54] !== o || t[55] !== n || t[56] !== a ? (s = (0, U.jsx)(d, {
                    className: `max-w-[480px]`,
                    description: e,
                    testId: `modal-gift-credit-currency-mismatch`,
                    isOpen: !0,
                    onClose: o,
                    shouldIgnoreClickOutside: !0,
                    showCloseButton: !1,
                    size: `custom`,
                    type: `danger`,
                    title: n,
                    primaryButton: a
                }), t[54] = o, t[55] = n, t[56] = a, t[57] = s) : s = t[57], s
            }
            if (u.status === `location_ineligible`) {
                let e;
                t[58] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, U.jsx)(`span`, {
                    className: `text-token-text-secondary block text-sm leading-5`,
                    children: (0, U.jsx)(P, {
                        ...B.locationIneligibleDescription
                    })
                }), t[58] = e) : e = t[58];
                let n;
                t[59] === f ? n = t[60] : (n = f.formatMessage(B.locationIneligibleTitle), t[59] = f, t[60] = n);
                let i;
                t[61] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, U.jsx)(P, {
                    ...B.gotItButton
                }), t[61] = i) : i = t[61];
                let a;
                t[62] === o ? a = t[63] : (a = (0, U.jsx)(r, {
                    className: `rounded-full`,
                    color: `primary`,
                    onClick: o,
                    size: `large`,
                    type: `button`,
                    children: i
                }), t[62] = o, t[63] = a);
                let s;
                return t[64] !== o || t[65] !== n || t[66] !== a ? (s = (0, U.jsx)(d, {
                    className: `max-w-[480px]`,
                    description: e,
                    testId: `modal-gift-credit-location-ineligible`,
                    isOpen: !0,
                    onClose: o,
                    shouldIgnoreClickOutside: !0,
                    showCloseButton: !1,
                    size: `custom`,
                    type: `danger`,
                    title: n,
                    primaryButton: a
                }), t[64] = o, t[65] = n, t[66] = a, t[67] = s) : s = t[67], s
            }
            return null
        }
    })),
    je, W, G, Me = e((() => {
        je = (e, t) => {
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
        }, W = e => {
            let t = Number(e);
            if (!Number.isSafeInteger(t) || t <= 0) throw Error(`Gift credit claim returned an invalid amount`);
            return t
        }, G = e => ({
            accountId: e.accountId,
            creditAmount: e.creditAmount
        })
    })),
    K, Ne, Pe, q, Fe, J, Y, X, Ie, Le, Re = e((() => {
        k(), s(), i(), ae(), w(), f(), n(), l(), he(), K = t(I()), F(), _e(), Ae(), Me(), be(), z(), Ne = N(), Pe = [1e3, 2e3, 4e3], q = `X-OpenAI-Gift-Credit-Claim-Token`, Fe = `chatgpt_gift_credit_redemption`, J = e => typeof e == `object` && !!e && `workspace_account_associated` in e && e.workspace_account_associated === !0, Y = e => typeof e == `object` && !!e && (`ineligibility_detail_reason` in e && e.ineligibility_detail_reason === `recipient_currency_mismatch` || `ineligibility_reason` in e && (e.ineligibility_reason === `recipient_currency_mismatch` || e.ineligibility_reason === `recipient_location_ineligible`)), X = e => typeof e == `object` && !!e && `location_ineligible` in e && e.location_ineligible === !0, Ie = (e, t) => new Promise((n, r) => {
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
            let [c, l] = (0, K.useReducer)(je, {
                status: `loading`
            }), d = L(), f = ce(), _ = ne(), {
                data: v,
                isLoading: y
            } = g(), [b, x] = (0, K.useState)(!1), S = v?.accountItems.find(e => e.isPersonalAccount() && !e.isDeactivated()), C = _ != null && !_.isPersonalAccount(), ee = v != null && Se(v.accountItems), w = (0, K.useRef)(null), T = (0, K.useRef)({
                deliveryMode: t,
                giftFunnelId: n
            }), E = (0, K.useRef)(null), D = (0, K.useRef)(null), O = (0, K.useRef)(!1), k = (0, K.useRef)(!1), A = (0, K.useRef)(null), ae = (0, K.useCallback)((e, t, n) => {
                k.current || (k.current = !0, f.invalidateQueries({
                    queryKey: [`usage-limits-page-configs`, n]
                }), f.invalidateQueries({
                    queryKey: [`wham`, `usage`, `rate-limit-status`]
                }), f.invalidateQueries({
                    queryKey: [`settings`, `agent-usage`, `remaining-balance`, n]
                }), l({
                    type: `show_redeemed`,
                    creditAmount: e,
                    creditGrantId: t
                }), a(e))
            }, [a, f]), j = (0, K.useCallback)(async (t, n = !1) => {
                if (O.current) return;
                O.current = !0;
                let r = A.current ?? (n ? `recovery` : `initial`);
                A.current = r, D.current?.abort();
                let i = new AbortController;
                D.current = i, l(n ? {
                    type: `show_processing`,
                    canRetry: !1,
                    details: t
                } : {
                    type: `start_redemption`,
                    details: t
                }), R({
                    step: `claim_redemption`,
                    outcome: `started`,
                    ...T.current,
                    attemptKind: r,
                    creditQuantity: t.creditAmount
                });
                try {
                    for (let n = 0;; n += 1) {
                        let a = await te(Fe),
                            o = await m.safePost(`/gift-credits/claims/redeem`, {
                                additionalHeaders: {
                                    ...a,
                                    [q]: e
                                },
                                requestBody: {
                                    account_id: t.accountId
                                },
                                signal: i.signal
                            });
                        if (i.signal.aborted) return;
                        if (o.status === `redeemed` && `credit_grant_id` in o) {
                            ae(t.creditAmount, o.credit_grant_id, t.accountId);
                            return
                        }
                        if (o.status === `unavailable`) {
                            l({
                                type: `show_unavailable`
                            }), s();
                            return
                        }
                        if (`eligible` in o && o.eligible === !1) {
                            J(o) ? l({
                                type: `show_workspace_association_blocked`
                            }) : Y(o) ? l({
                                type: `show_currency_mismatch`
                            }) : X(o) ? l({
                                type: `show_location_ineligible`
                            }) : (l({
                                type: `show_ineligible`
                            }), s());
                            return
                        }
                        if (o.status !== `claim_reserved`) throw Error(`Gift credit redemption returned an unknown state`);
                        let c = Pe[n];
                        if (c == null) {
                            R({
                                step: `claim_redemption`,
                                outcome: `pending`,
                                reason: `auto_retry_exhausted`,
                                ...T.current,
                                attemptKind: r,
                                giftId: o.gift_id,
                                creditQuantity: t.creditAmount
                            }), l({
                                type: `show_processing`,
                                canRetry: !0,
                                details: t
                            });
                            return
                        }
                        l({
                            type: `show_processing`,
                            canRetry: !1,
                            details: t
                        }), await Ie(c, i.signal)
                    }
                } catch (e) {
                    i.signal.aborted || (e instanceof h && e.isTransportError && R({
                        step: `claim_redemption`,
                        outcome: `failed`,
                        reason: `request_failed`,
                        ...T.current,
                        attemptKind: r,
                        creditQuantity: t.creditAmount
                    }), l({
                        type: `show_redemption_error`,
                        details: t
                    }))
                } finally {
                    D.current === i && (O.current = !1)
                }
            }, [e, ae, s]), M = (0, K.useCallback)(async () => {
                w.current?.abort();
                let t = new AbortController;
                if (w.current = t, l({
                        type: `check_eligibility`
                    }), y && (_ == null || _.isPersonalAccount())) return;
                let n = () => {
                    E.current !== e && (E.current = e, R({
                        step: `claim_eligibility`,
                        outcome: `ineligible`,
                        reason: `workspace_account_associated`,
                        ...T.current
                    }))
                };
                if (ee) {
                    n(), l({
                        type: `show_workspace_association_blocked`
                    });
                    return
                }
                if (C) {
                    n(), l({
                        type: `show_workspace_blocked`
                    });
                    return
                }
                try {
                    let n = await m.safeGet(`/gift-credits/claims/eligibility`, {
                        additionalHeaders: {
                            [q]: e
                        },
                        signal: t.signal
                    });
                    if (t.signal.aborted) return;
                    if (n.status === `unavailable`) {
                        l({
                            type: `show_unavailable`
                        }), s();
                        return
                    }
                    if (n.status === `redeemed` && `credit_grant_id` in n) {
                        l({
                            type: `show_redeemed`,
                            creditAmount: W(n.amount),
                            creditGrantId: n.credit_grant_id
                        }), r();
                        return
                    }
                    if (n.status === `claim_reserved`) {
                        j({
                            accountId: n.account_id,
                            creditAmount: W(n.amount)
                        }, !0);
                        return
                    }
                    if (`eligible` in n && n.eligible === !1) {
                        J(n) ? l({
                            type: `show_workspace_association_blocked`
                        }) : Y(n) ? l({
                            type: `show_currency_mismatch`
                        }) : X(n) ? l({
                            type: `show_location_ineligible`
                        }) : (l({
                            type: `show_ineligible`
                        }), s());
                        return
                    }
                    if (!(`eligible_accounts` in n) || n.eligible_accounts.length === 0) {
                        l({
                            type: `show_ineligible`
                        }), s();
                        return
                    }
                    let i = n.eligible_accounts[0];
                    l({
                        type: `show_available`,
                        details: {
                            accountId: i.account_id,
                            creditAmount: W(n.amount)
                        },
                        presentation: n.presentation ?? null
                    })
                } catch (e) {
                    t.signal.aborted || (e instanceof h && e.isTransportError && R({
                        step: `claim_eligibility`,
                        outcome: `failed`,
                        reason: `request_failed`,
                        ...T.current
                    }), l({
                        type: `show_eligibility_error`
                    }), s())
                }
            }, [y, e, _, ee, C, r, s, j]), oe = (0, K.useCallback)(async () => {
                if (!(S == null || b)) {
                    x(!0);
                    try {
                        let {
                            updatedAccount: e,
                            willRedirect: t
                        } = await re(f, S.id, d, o(), !0, window.location.href);
                        if (!e && !t) {
                            x(!1), o().danger(d.formatMessage(B.accountSwitchError));
                            return
                        }
                        t || u(window.location.href)
                    } catch {
                        x(!1), o().danger(d.formatMessage(B.accountSwitchError))
                    }
                }
            }, [d, b, S, f]), N = (0, K.useCallback)(() => {
                c.status === `available` && j(G(c))
            }, [j, c]), se = (0, K.useCallback)(() => {
                if (c.status === `error` && c.operation === `eligibility`) {
                    M();
                    return
                }(c.status === `error` && c.operation === `redemption` || c.status === `processing` && c.canRetry) && j(G(c), !0)
            }, [M, j, c]);
            return (0, K.useEffect)(() => (M(), () => {
                w.current?.abort()
            }), [M]), (0, K.useEffect)(() => (k.current = !1, A.current = null, T.current = {
                deliveryMode: t,
                giftFunnelId: n
            }, () => {
                D.current?.abort(), D.current = null, O.current = !1
            }), [e, t, n]), (0, Ne.jsx)(ke, {
                onClose: i,
                onClaim: N,
                onRetry: se,
                onSwitchAccount: () => p({
                    reason: ie.AccountSwitcher,
                    source: `gifts.credits.redemption-flow`
                }),
                onSwitchToPersonal: () => void oe(),
                canSwitchToPersonal: S != null,
                isSwitchingAccount: b,
                state: c
            })
        }
    }));

function ze() {
    "use forget";
    let e = (0, Z.c)(18),
        {
            claimCode: t
        } = se(),
        n = oe(),
        r = le(),
        {
            search: i
        } = n,
        a;
    e[0] === i ? a = e[1] : (a = new URLSearchParams(i).get(`gift_auth_return`), e[0] = i, e[1] = a);
    let o = a === `1`,
        s;
    e[2] === Symbol.for(`react.memo_cache_sentinel`) ? (s = T(), e[2] = s) : s = e[2];
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
            !c || t == null || t.length === 0 || l.current === t || (l.current = t, R({
                step: `claim_link`,
                outcome: `started`
            }))
        }, p = [c, t], e[10] = t, e[11] = f, e[12] = p), (0, Q.useEffect)(f, p), t == null || t.length === 0) {
        let t;
        return e[13] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, $.jsx)(pe, {
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
        Z = ge(), ye(), C(), S(), s(), i(), M(), Q = t(I()), F(), ue(), _e(), Re(), z(), $ = N(), Ve = 50, He = e => {
            "use forget";
            let t = (0, Z.c)(4),
                {
                    claimCode: n
                } = e,
                r = (0, Q.useRef)(null),
                i, a;
            t[0] === n ? (i = t[1], a = t[2]) : (i = () => {
                r.current !== n && (r.current = n, R({
                    step: `claim_link`,
                    outcome: `started`
                }), R({
                    step: `auth_redirect`,
                    outcome: `started`
                }));
                let e = !1,
                    t = new URL(`/gifts/credits/claim/${encodeURIComponent(n)}`, window.location.origin);
                return t.searchParams.set(`gift_auth_return`, `1`), c.flushStructuredEvents(Ve).catch(Be).then(() => {
                    if (!e) return O({
                        callbackUrl: t.href,
                        fallbackScreenHint: `login_or_signup`
                    })
                }), () => {
                    e = !0
                }
            }, a = [n], t[0] = n, t[1] = i, t[2] = a), (0, Q.useEffect)(i, a);
            let o;
            return t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, $.jsx)(ve, {}), t[3] = o) : o = t[3], o
        }, Ue = e => {
            "use forget";
            let t = (0, Z.c)(20),
                {
                    claimCode: n
                } = e,
                r = L(),
                i = le(),
                a = x()?.user,
                s;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (s = () => {
                E({
                    email: a?.email,
                    phoneNumber: a?.phone_number
                })
            }, t[0] = s) : s = t[0];
            let c;
            t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (c = [a?.email, a?.phone_number], t[1] = c) : c = t[1], (0, Q.useEffect)(s, c);
            let l;
            t[2] === i ? l = t[3] : (l = () => {
                i(`/`, {
                    replace: !0
                })
            }, t[2] = i, t[3] = l);
            let u = l,
                d;
            t[4] !== u || t[5] !== r ? (d = e => {
                u(), o().success(r.formatMessage(B.redeemedToast, {
                    creditAmount: e
                }))
            }, t[4] = u, t[5] = r, t[6] = d) : d = t[6];
            let f = d,
                p;
            t[7] !== u || t[8] !== r ? (p = () => {
                u(), o().danger(r.formatMessage(B.alreadyClaimedToast))
            }, t[7] = u, t[8] = r, t[9] = p) : p = t[9];
            let m = p,
                h;
            t[10] !== u || t[11] !== r ? (h = () => {
                u(), o().danger(r.formatMessage(B.unavailableToast))
            }, t[10] = u, t[11] = r, t[12] = h) : h = t[12];
            let g = h,
                _;
            t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = (0, $.jsx)(ve, {}), t[13] = _) : _ = t[13];
            let v;
            return t[14] !== n || t[15] !== u || t[16] !== m || t[17] !== f || t[18] !== g ? (v = (0, $.jsxs)($.Fragment, {
                children: [_, (0, $.jsx)(Le, {
                    claimCode: n,
                    onAlreadyClaimed: m,
                    onClose: u,
                    onRedeemed: f,
                    onUnavailable: g
                })]
            }), t[14] = n, t[15] = u, t[16] = m, t[17] = f, t[18] = g, t[19] = v) : v = t[19], v
        }
    })),
    Ge, Ke = e((() => {
        be(), i(), ee(), ue(), Ge = () => T() && !j(`2067846105`) && !xe() ? de(`/`) : null
    }));
export {
    We as i, Ke as n, ze as r, Ge as t
};
//# sourceMappingURL=48eff304-mosox4c4id98ptmo.js.map