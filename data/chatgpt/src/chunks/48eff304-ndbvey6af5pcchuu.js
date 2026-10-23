const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/cc1ea293-kz4ghelpeylkgz6i.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-mdvd4786a87166cc.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/fedf4e11-l4gcgr4bphi7p4iy.js", "assets/cea3409c-j9d8ajngso7v6z3m.js", "assets/30901919-s8bko9nrkqwv6i4f.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $T as n,
    Aw as r,
    Crt as i,
    I7 as a,
    IU as o,
    Knt as s,
    LU as c,
    Lit as l,
    M7 as u,
    Ml as d,
    N4 as f,
    Ow as p,
    P4 as m,
    Rit as h,
    Vit as g,
    Wnt as _,
    _rt as v,
    a0 as y,
    a2 as b,
    c2 as x,
    cat as ee,
    cot as S,
    d2 as C,
    dat as w,
    eE as T,
    f0 as E,
    fr as D,
    jl as te,
    lr as O,
    not as ne,
    o0 as re,
    o2 as k,
    p0 as A,
    q1 as j,
    s2 as M,
    sst as N,
    t0 as ie
} from "./4813494d-mdvd4786a87166cc.js";
import {
    At as ae,
    Bn as P,
    Lt as oe,
    N as se,
    Nn as F,
    Nt as ce,
    Q as le,
    Rn as I,
    Vn as L,
    bt as ue,
    cn as de,
    ct as fe,
    ln as pe,
    s as me,
    wn as he,
    zn as R
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    _h as ge,
    vh as z
} from "./c2675c8c-oz03twoan08d72ud.js";
import {
    c as _e,
    l as ve
} from "./8b34dbc2-lmwubajnld74ksfm.js";
import {
    n as B,
    t as V
} from "./fedf4e11-l4gcgr4bphi7p4iy.js";
import {
    n as ye,
    r as be,
    t as xe
} from "./5d04b0af-ixqoavqnsx78cb11.js";
var H, Se = e((() => {
    k(), pe(), H = b(() => de(() => import(`./cc1ea293-kz4ghelpeylkgz6i.js`).then(e => e.GiftCreditsClaimModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7])))
}));

function Ce() {
    M(H)
}

function we() {
    return Ce
}

function Te(e) {
    return e.preventDefault()
}

function Ee(e) {
    return e.preventDefault()
}
var De, U, W, Oe, ke = e((() => {
        De = he(), T(), r(), x(), U = t(L()), I(), Se(), B(), W = P(), Oe = e => {
            "use forget";
            let t = (0, De.c)(68),
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
                d = R(),
                f;
            t[0] !== a || t[1] !== o || t[2] !== s || t[3] !== u.canRetry || t[4] !== u.creditAmount || t[5] !== u.operation || t[6] !== u.status ? (f = () => {
                if (u.status === `available`) {
                    C(H, {
                        creditAmount: u.creditAmount,
                        onClaim: a,
                        onDismiss: o,
                        status: `available`
                    });
                    return
                }
                if (u.status === `redeeming` || u.status === `processing` && !u.canRetry) {
                    C(H, {
                        creditAmount: u.creditAmount,
                        onClaim: a,
                        onDismiss: o,
                        status: `claiming`
                    });
                    return
                }
                if (u.status === `processing` && u.canRetry || u.status === `error` && u.operation === `redemption`) {
                    C(H, {
                        creditAmount: u.creditAmount,
                        onClaim: s,
                        onDismiss: o,
                        status: `retryable`
                    });
                    return
                }
                M(H)
            }, t[0] = a, t[1] = o, t[2] = s, t[3] = u.canRetry, t[4] = u.creditAmount, t[5] = u.operation, t[6] = u.status, t[7] = f) : f = t[7];
            let m;
            t[8] !== a || t[9] !== o || t[10] !== s || t[11] !== u ? (m = [a, o, s, u], t[8] = a, t[9] = o, t[10] = s, t[11] = u, t[12] = m) : m = t[12], (0, U.useEffect)(f, m);
            let h;
            if (t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (h = [], t[13] = h) : h = t[13], (0, U.useEffect)(we, h), u.status === `workspace_association_blocked`) {
                let e;
                t[14] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, W.jsx)(`span`, {
                    className: `block text-sm leading-5`,
                    children: (0, W.jsx)(F, {
                        ...V.workspaceAccountIneligibleDescription
                    })
                }), t[14] = e) : e = t[14];
                let r;
                t[15] === d ? r = t[16] : (r = d.formatMessage(V.workspaceAccountIneligibleTitle), t[15] = d, t[16] = r);
                let i;
                t[17] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, W.jsx)(F, {
                    ...V.switchAccountButton
                }), t[17] = i) : i = t[17];
                let a;
                t[18] === c ? a = t[19] : (a = (0, W.jsx)(n, {
                    className: `rounded-full`,
                    color: `primary`,
                    onClick: c,
                    size: `large`,
                    type: `button`,
                    children: i
                }), t[18] = c, t[19] = a);
                let s;
                t[20] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, W.jsx)(F, {
                    ...V.goBackButton
                }), t[20] = s) : s = t[20];
                let l;
                t[21] === o ? l = t[22] : (l = (0, W.jsx)(n, {
                    className: `rounded-full`,
                    color: `secondary`,
                    onClick: o,
                    size: `large`,
                    type: `button`,
                    children: s
                }), t[21] = o, t[22] = l);
                let u;
                return t[23] !== o || t[24] !== r || t[25] !== a || t[26] !== l ? (u = (0, W.jsx)(p, {
                    className: `max-w-[480px]`,
                    description: e,
                    isOpen: !0,
                    onClose: o,
                    onEscapeKeyDown: Te,
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
                let e = r ? V.personalAccountRequiredDescription : V.personalWorkspaceUnavailableDescription,
                    a;
                t[28] === e ? a = t[29] : (a = (0, W.jsx)(`span`, {
                    className: `block text-sm leading-5`,
                    children: (0, W.jsx)(F, {
                        ...e
                    })
                }), t[28] = e, t[29] = a);
                let s;
                t[30] === d ? s = t[31] : (s = d.formatMessage(V.personalAccountRequiredTitle), t[30] = d, t[31] = s);
                let u = r && i,
                    f = r && i,
                    m = r ? l : c,
                    h = r ? V.switchToPersonalAccount : V.switchAccountButton,
                    g;
                t[32] === h ? g = t[33] : (g = (0, W.jsx)(F, {
                    ...h
                }), t[32] = h, t[33] = g);
                let _;
                t[34] !== g || t[35] !== u || t[36] !== f || t[37] !== m ? (_ = (0, W.jsx)(n, {
                    className: `rounded-full`,
                    color: `primary`,
                    disabled: u,
                    loading: f,
                    onClick: m,
                    size: `large`,
                    type: `button`,
                    children: g
                }), t[34] = g, t[35] = u, t[36] = f, t[37] = m, t[38] = _) : _ = t[38];
                let v;
                t[39] === Symbol.for(`react.memo_cache_sentinel`) ? (v = (0, W.jsx)(F, {
                    ...V.goBackButton
                }), t[39] = v) : v = t[39];
                let y;
                t[40] === o ? y = t[41] : (y = (0, W.jsx)(n, {
                    className: `rounded-full`,
                    color: `secondary`,
                    onClick: o,
                    size: `large`,
                    type: `button`,
                    children: v
                }), t[40] = o, t[41] = y);
                let b;
                return t[42] !== o || t[43] !== _ || t[44] !== y || t[45] !== a || t[46] !== s ? (b = (0, W.jsx)(p, {
                    className: `max-w-[480px]`,
                    description: a,
                    testId: `modal-gift-credit-personal-account-required`,
                    isOpen: !0,
                    onClose: o,
                    onEscapeKeyDown: Ee,
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
                t[48] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, W.jsx)(`span`, {
                    className: `text-token-text-secondary block text-sm leading-5`,
                    children: (0, W.jsx)(F, {
                        ...V.currencyMismatchDescription
                    })
                }), t[48] = e) : e = t[48];
                let r;
                t[49] === d ? r = t[50] : (r = d.formatMessage(V.currencyMismatchTitle), t[49] = d, t[50] = r);
                let i;
                t[51] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, W.jsx)(F, {
                    ...V.gotItButton
                }), t[51] = i) : i = t[51];
                let a;
                t[52] === o ? a = t[53] : (a = (0, W.jsx)(n, {
                    className: `rounded-full`,
                    color: `primary`,
                    onClick: o,
                    size: `large`,
                    type: `button`,
                    children: i
                }), t[52] = o, t[53] = a);
                let s;
                return t[54] !== o || t[55] !== r || t[56] !== a ? (s = (0, W.jsx)(p, {
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
                t[58] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, W.jsx)(`span`, {
                    className: `text-token-text-secondary block text-sm leading-5`,
                    children: (0, W.jsx)(F, {
                        ...V.locationIneligibleDescription
                    })
                }), t[58] = e) : e = t[58];
                let r;
                t[59] === d ? r = t[60] : (r = d.formatMessage(V.locationIneligibleTitle), t[59] = d, t[60] = r);
                let i;
                t[61] === Symbol.for(`react.memo_cache_sentinel`) ? (i = (0, W.jsx)(F, {
                    ...V.gotItButton
                }), t[61] = i) : i = t[61];
                let a;
                t[62] === o ? a = t[63] : (a = (0, W.jsx)(n, {
                    className: `rounded-full`,
                    color: `primary`,
                    onClick: o,
                    size: `large`,
                    type: `button`,
                    children: i
                }), t[62] = o, t[63] = a);
                let s;
                return t[64] !== o || t[65] !== r || t[66] !== a ? (s = (0, W.jsx)(p, {
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
    Ae, G, K, je = e((() => {
        Ae = (e, t) => {
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
        }, G = e => {
            let t = Number(e);
            if (!Number.isSafeInteger(t) || t <= 0) throw Error(`Gift credit claim returned an invalid amount`);
            return t
        }, K = e => ({
            accountId: e.accountId,
            creditAmount: e.creditAmount
        })
    })),
    q, Me, Ne, J, Pe, Y, X, Fe, Ie, Le, Re = e((() => {
        j(), c(), l(), S(), w(), m(), a(), d(), me(), q = t(L()), I(), ge(), ke(), je(), ye(), B(), Me = P(), Ne = [1e3, 2e3, 4e3], J = `X-OpenAI-Gift-Credit-Claim-Token`, Pe = `chatgpt_gift_credit_redemption`, Y = e => typeof e == `object` && !!e && `workspace_account_associated` in e && e.workspace_account_associated === !0, X = e => typeof e == `object` && !!e && (`ineligibility_detail_reason` in e && e.ineligibility_detail_reason === `recipient_currency_mismatch` || `ineligibility_reason` in e && (e.ineligibility_reason === `recipient_currency_mismatch` || e.ineligibility_reason === `recipient_location_ineligible`)), Fe = e => typeof e == `object` && !!e && `location_ineligible` in e && e.location_ineligible === !0, Ie = (e, t) => new Promise((n, r) => {
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
            let [c, l] = (0, q.useReducer)(Ae, {
                status: `loading`
            }), d = R(), p = se(), m = re(), {
                data: h,
                isLoading: _
            } = y(), [v, b] = (0, q.useState)(!1), x = h?.accountItems.find(e => e.isPersonalAccount() && !e.isDeactivated()), S = m != null && !m.isPersonalAccount(), C = h != null && xe(h.accountItems), w = (0, q.useRef)(null), T = (0, q.useRef)({
                deliveryMode: t,
                giftFunnelId: n
            }), E = (0, q.useRef)(null), D = (0, q.useRef)(null), O = (0, q.useRef)(!1), k = (0, q.useRef)(!1), A = (0, q.useRef)(null), j = (0, q.useCallback)((e, t, n) => {
                k.current || (k.current = !0, p.invalidateQueries({
                    queryKey: [`usage-limits-page-configs`, n]
                }), p.invalidateQueries({
                    queryKey: [`wham`, `usage`, `rate-limit-status`]
                }), p.invalidateQueries({
                    queryKey: [`settings`, `agent-usage`, `remaining-balance`, n]
                }), l({
                    type: `show_redeemed`,
                    creditAmount: e,
                    creditGrantId: t
                }), a(e))
            }, [a, p]), M = (0, q.useCallback)(async (t, n = !1) => {
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
                }), z({
                    step: `claim_redemption`,
                    outcome: `started`,
                    ...T.current,
                    attemptKind: r,
                    creditQuantity: t.creditAmount
                });
                try {
                    for (let n = 0;; n += 1) {
                        let a = await te(Pe),
                            o = await u.safePost(`/gift-credits/claims/redeem`, {
                                additionalHeaders: {
                                    ...a,
                                    [J]: e
                                },
                                requestBody: {
                                    account_id: t.accountId
                                },
                                signal: i.signal
                            });
                        if (i.signal.aborted) return;
                        if (o.status === `redeemed` && `credit_grant_id` in o) {
                            j(t.creditAmount, o.credit_grant_id, t.accountId);
                            return
                        }
                        if (o.status === `unavailable`) {
                            l({
                                type: `show_unavailable`
                            }), s();
                            return
                        }
                        if (`eligible` in o && o.eligible === !1) {
                            Y(o) ? l({
                                type: `show_workspace_association_blocked`
                            }) : X(o) ? l({
                                type: `show_currency_mismatch`
                            }) : Fe(o) ? l({
                                type: `show_location_ineligible`
                            }) : (l({
                                type: `show_ineligible`
                            }), s());
                            return
                        }
                        if (o.status !== `claim_reserved`) throw Error(`Gift credit redemption returned an unknown state`);
                        let c = Ne[n];
                        if (c == null) {
                            z({
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
                    i.signal.aborted || (e instanceof ne && e.isTransportError && z({
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
            }, [e, j, s]), N = (0, q.useCallback)(async () => {
                w.current?.abort();
                let t = new AbortController;
                if (w.current = t, l({
                        type: `check_eligibility`
                    }), _ && (m == null || m.isPersonalAccount())) return;
                let n = () => {
                    E.current !== e && (E.current = e, z({
                        step: `claim_eligibility`,
                        outcome: `ineligible`,
                        reason: `workspace_account_associated`,
                        ...T.current
                    }))
                };
                if (C) {
                    n(), l({
                        type: `show_workspace_association_blocked`
                    });
                    return
                }
                if (S) {
                    n(), l({
                        type: `show_workspace_blocked`
                    });
                    return
                }
                try {
                    let n = await u.safeGet(`/gift-credits/claims/eligibility`, {
                        additionalHeaders: {
                            [J]: e
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
                            creditAmount: G(n.amount),
                            creditGrantId: n.credit_grant_id
                        }), r();
                        return
                    }
                    if (n.status === `claim_reserved`) {
                        M({
                            accountId: n.account_id,
                            creditAmount: G(n.amount)
                        }, !0);
                        return
                    }
                    if (`eligible` in n && n.eligible === !1) {
                        Y(n) ? l({
                            type: `show_workspace_association_blocked`
                        }) : X(n) ? l({
                            type: `show_currency_mismatch`
                        }) : Fe(n) ? l({
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
                            creditAmount: G(n.amount)
                        },
                        presentation: n.presentation ?? null
                    })
                } catch (e) {
                    t.signal.aborted || (e instanceof ne && e.isTransportError && z({
                        step: `claim_eligibility`,
                        outcome: `failed`,
                        reason: `request_failed`,
                        ...T.current
                    }), l({
                        type: `show_eligibility_error`
                    }), s())
                }
            }, [_, e, m, C, S, r, s, M]), ae = (0, q.useCallback)(async () => {
                if (!(x == null || v)) {
                    b(!0);
                    try {
                        let {
                            updatedAccount: e,
                            willRedirect: t
                        } = await ie(p, x.id, d, o(), !0, window.location.href);
                        if (!e && !t) {
                            b(!1), o().danger(d.formatMessage(V.accountSwitchError));
                            return
                        }
                        t || f(window.location.href)
                    } catch {
                        b(!1), o().danger(d.formatMessage(V.accountSwitchError))
                    }
                }
            }, [d, v, x, p]), P = (0, q.useCallback)(() => {
                c.status === `available` && M(K(c))
            }, [M, c]), oe = (0, q.useCallback)(() => {
                if (c.status === `error` && c.operation === `eligibility`) {
                    N();
                    return
                }(c.status === `error` && c.operation === `redemption` || c.status === `processing` && c.canRetry) && M(K(c), !0)
            }, [N, M, c]);
            return (0, q.useEffect)(() => (N(), () => {
                w.current?.abort()
            }), [N]), (0, q.useEffect)(() => (k.current = !1, A.current = null, T.current = {
                deliveryMode: t,
                giftFunnelId: n
            }, () => {
                D.current?.abort(), D.current = null, O.current = !1
            }), [e, t, n]), (0, Me.jsx)(Oe, {
                onClose: i,
                onClaim: P,
                onRetry: oe,
                onSwitchAccount: () => g({
                    reason: ee.AccountSwitcher,
                    source: `gifts.credits.redemption-flow`
                }),
                onSwitchToPersonal: () => void ae(),
                canSwitchToPersonal: x != null,
                isSwitchingAccount: v,
                state: c
            })
        }
    }));

function ze() {
    "use forget";
    let e = (0, Z.c)(18),
        {
            claimCode: t
        } = oe(),
        n = ae(),
        r = ce(),
        {
            search: i
        } = n,
        a;
    e[0] === i ? a = e[1] : (a = new URLSearchParams(i).get(`gift_auth_return`), e[0] = i, e[1] = a);
    let o = a === `1`,
        s;
    e[2] === Symbol.for(`react.memo_cache_sentinel`) ? (s = h(), e[2] = s) : s = e[2];
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
            !c || t == null || t.length === 0 || l.current === t || (l.current = t, z({
                step: `claim_link`,
                outcome: `started`
            }))
        }, p = [c, t], e[10] = t, e[11] = f, e[12] = p), (0, Q.useEffect)(f, p), t == null || t.length === 0) {
        let t;
        return e[13] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, $.jsx)(fe, {
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
        Z = he(), ve(), D(), E(), c(), l(), s(), Q = t(L()), I(), le(), ge(), Re(), B(), $ = P(), Ve = 50, He = e => {
            "use forget";
            let t = (0, Z.c)(4),
                {
                    claimCode: n
                } = e,
                r = (0, Q.useRef)(null),
                i, a;
            t[0] === n ? (i = t[1], a = t[2]) : (i = () => {
                r.current !== n && (r.current = n, z({
                    step: `claim_link`,
                    outcome: `started`
                }), z({
                    step: `auth_redirect`,
                    outcome: `started`
                }));
                let e = !1,
                    t = new URL(`/gifts/credits/claim/${encodeURIComponent(n)}`, window.location.origin);
                return t.searchParams.set(`gift_auth_return`, `1`), _.flushStructuredEvents(Ve).catch(Be).then(() => {
                    if (!e) return A({
                        callbackUrl: t.href,
                        fallbackScreenHint: `login_or_signup`
                    })
                }), () => {
                    e = !0
                }
            }, a = [n], t[0] = n, t[1] = i, t[2] = a), (0, Q.useEffect)(i, a);
            let o;
            return t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, $.jsx)(_e, {}), t[3] = o) : o = t[3], o
        }, Ue = e => {
            "use forget";
            let t = (0, Z.c)(20),
                {
                    claimCode: n
                } = e,
                r = R(),
                i = ce(),
                a = N()?.user,
                s;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (s = () => {
                O({
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
                u(), o().success(r.formatMessage(V.redeemedToast, {
                    creditAmount: e
                }))
            }, t[4] = u, t[5] = r, t[6] = d) : d = t[6];
            let f = d,
                p;
            t[7] !== u || t[8] !== r ? (p = () => {
                u(), o().danger(r.formatMessage(V.alreadyClaimedToast))
            }, t[7] = u, t[8] = r, t[9] = p) : p = t[9];
            let m = p,
                h;
            t[10] !== u || t[11] !== r ? (h = () => {
                u(), o().danger(r.formatMessage(V.unavailableToast))
            }, t[10] = u, t[11] = r, t[12] = h) : h = t[12];
            let g = h,
                _;
            t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = (0, $.jsx)(_e, {}), t[13] = _) : _ = t[13];
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
        ye(), l(), i(), le(), Ge = () => h() && !v(`2067846105`) && !be() ? ue(`/`) : null
    }));
export {
    We as i, Ke as n, ze as r, Ge as t
};
//# sourceMappingURL=48eff304-ndbvey6af5pcchuu.js.map