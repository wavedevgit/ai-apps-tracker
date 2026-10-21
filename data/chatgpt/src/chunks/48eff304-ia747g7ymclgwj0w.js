const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/cc1ea293-chzxssdztdlsykp5.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-lxa3wniynbx9ka2a.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/fedf4e11-l4gcgr4bphi7p4iy.js", "assets/cea3409c-xkwi6karaqb4h1dk.js", "assets/30901919-i8ip8r0znvgcym38.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $0 as n,
    Al as r,
    BU as i,
    Bat as a,
    Bit as o,
    C4 as s,
    Cw as c,
    F7 as l,
    JT as u,
    K1 as d,
    Pat as f,
    Q0 as p,
    R1 as m,
    S4 as h,
    Snt as g,
    Tw as _,
    Uit as v,
    X0 as y,
    X1 as b,
    YT as x,
    Ynt as S,
    Z0 as C,
    Z1 as ee,
    fr as w,
    git as T,
    hit as E,
    i0 as D,
    jl as O,
    lr as k,
    n2 as A,
    r0 as j,
    trt as M,
    wnt as N,
    yit as te,
    z7 as P,
    zU as F,
    zot as I
} from "./4813494d-lxa3wniynbx9ka2a.js";
import {
    At as ne,
    Bn as L,
    Lt as re,
    N as ie,
    Nn as R,
    Nt as ae,
    Q as oe,
    Rn as z,
    Vn as B,
    bt as se,
    cn as ce,
    ct as le,
    ln as ue,
    s as de,
    wn as fe,
    zn as V
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    ch as pe,
    lh as H
} from "./c2675c8c-ossqum2x3eut0sh8.js";
import {
    c as me,
    l as he
} from "./8b34dbc2-ba6wt3zxvh7jce7p.js";
import {
    n as U,
    t as W
} from "./fedf4e11-l4gcgr4bphi7p4iy.js";
import {
    n as ge,
    r as _e,
    t as ve
} from "./5d04b0af-0xyfwkwrnmqeu7zg.js";
var G, ye = e((() => {
    C(), ue(), G = y(() => ce(() => import(`./cc1ea293-chzxssdztdlsykp5.js`).then(e => e.GiftCreditsClaimModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7])))
}));

function be() {
    p(G)
}

function xe() {
    return be
}

function Se(e) {
    return e.preventDefault()
}

function Ce(e) {
    return e.preventDefault()
}
var we, K, q, Te, Ee = e((() => {
        we = fe(), x(), _(), n(), K = t(B()), z(), ye(), U(), q = L(), Te = e => {
            "use forget";
            let t = (0, we.c)(68),
                {
                    canSwitchToPersonal: n,
                    isSwitchingAccount: r,
                    onClaim: i,
                    onClose: a,
                    onRetry: o,
                    onSwitchAccount: s,
                    onSwitchToPersonal: l,
                    state: d
                } = e,
                f = V(),
                m;
            t[0] !== i || t[1] !== a || t[2] !== o || t[3] !== d.canRetry || t[4] !== d.creditAmount || t[5] !== d.operation || t[6] !== d.status ? (m = () => {
                if (d.status === `available`) {
                    A(G, {
                        creditAmount: d.creditAmount,
                        onClaim: i,
                        onDismiss: a,
                        status: `available`
                    });
                    return
                }
                if (d.status === `redeeming` || d.status === `processing` && !d.canRetry) {
                    A(G, {
                        creditAmount: d.creditAmount,
                        onClaim: i,
                        onDismiss: a,
                        status: `claiming`
                    });
                    return
                }
                if (d.status === `processing` && d.canRetry || d.status === `error` && d.operation === `redemption`) {
                    A(G, {
                        creditAmount: d.creditAmount,
                        onClaim: o,
                        onDismiss: a,
                        status: `retryable`
                    });
                    return
                }
                p(G)
            }, t[0] = i, t[1] = a, t[2] = o, t[3] = d.canRetry, t[4] = d.creditAmount, t[5] = d.operation, t[6] = d.status, t[7] = m) : m = t[7];
            let h;
            t[8] !== i || t[9] !== a || t[10] !== o || t[11] !== d ? (h = [i, a, o, d], t[8] = i, t[9] = a, t[10] = o, t[11] = d, t[12] = h) : h = t[12], (0, K.useEffect)(m, h);
            let g;
            if (t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (g = [], t[13] = g) : g = t[13], (0, K.useEffect)(xe, g), d.status === `workspace_association_blocked`) {
                let e;
                t[14] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, q.jsx)(`span`, {
                    className: `block text-sm leading-5`,
                    children: (0, q.jsx)(R, {
                        ...W.workspaceAccountIneligibleDescription
                    })
                }), t[14] = e) : e = t[14];
                let n;
                t[15] === f ? n = t[16] : (n = f.formatMessage(W.workspaceAccountIneligibleTitle), t[15] = f, t[16] = n);
                let r;
                t[17] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, q.jsx)(R, {
                    ...W.switchAccountButton
                }), t[17] = r) : r = t[17];
                let i;
                t[18] === s ? i = t[19] : (i = (0, q.jsx)(u, {
                    className: `rounded-full`,
                    color: `primary`,
                    onClick: s,
                    size: `large`,
                    type: `button`,
                    children: r
                }), t[18] = s, t[19] = i);
                let o;
                t[20] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, q.jsx)(R, {
                    ...W.goBackButton
                }), t[20] = o) : o = t[20];
                let l;
                t[21] === a ? l = t[22] : (l = (0, q.jsx)(u, {
                    className: `rounded-full`,
                    color: `secondary`,
                    onClick: a,
                    size: `large`,
                    type: `button`,
                    children: o
                }), t[21] = a, t[22] = l);
                let d;
                return t[23] !== a || t[24] !== n || t[25] !== i || t[26] !== l ? (d = (0, q.jsx)(c, {
                    className: `max-w-[480px]`,
                    description: e,
                    isOpen: !0,
                    onClose: a,
                    onEscapeKeyDown: Se,
                    shouldIgnoreClickOutside: !0,
                    showCloseButton: !1,
                    size: `custom`,
                    type: `warning`,
                    title: n,
                    primaryButton: i,
                    secondaryButton: l
                }), t[23] = a, t[24] = n, t[25] = i, t[26] = l, t[27] = d) : d = t[27], d
            }
            if (d.status === `workspace_blocked`) {
                let e = n ? W.personalAccountRequiredDescription : W.personalWorkspaceUnavailableDescription,
                    i;
                t[28] === e ? i = t[29] : (i = (0, q.jsx)(`span`, {
                    className: `block text-sm leading-5`,
                    children: (0, q.jsx)(R, {
                        ...e
                    })
                }), t[28] = e, t[29] = i);
                let o;
                t[30] === f ? o = t[31] : (o = f.formatMessage(W.personalAccountRequiredTitle), t[30] = f, t[31] = o);
                let d = n && r,
                    p = n && r,
                    m = n ? l : s,
                    h = n ? W.switchToPersonalAccount : W.switchAccountButton,
                    g;
                t[32] === h ? g = t[33] : (g = (0, q.jsx)(R, {
                    ...h
                }), t[32] = h, t[33] = g);
                let _;
                t[34] !== g || t[35] !== d || t[36] !== p || t[37] !== m ? (_ = (0, q.jsx)(u, {
                    className: `rounded-full`,
                    color: `primary`,
                    disabled: d,
                    loading: p,
                    onClick: m,
                    size: `large`,
                    type: `button`,
                    children: g
                }), t[34] = g, t[35] = d, t[36] = p, t[37] = m, t[38] = _) : _ = t[38];
                let v;
                t[39] === Symbol.for(`react.memo_cache_sentinel`) ? (v = (0, q.jsx)(R, {
                    ...W.goBackButton
                }), t[39] = v) : v = t[39];
                let y;
                t[40] === a ? y = t[41] : (y = (0, q.jsx)(u, {
                    className: `rounded-full`,
                    color: `secondary`,
                    onClick: a,
                    size: `large`,
                    type: `button`,
                    children: v
                }), t[40] = a, t[41] = y);
                let b;
                return t[42] !== a || t[43] !== _ || t[44] !== y || t[45] !== i || t[46] !== o ? (b = (0, q.jsx)(c, {
                    className: `max-w-[480px]`,
                    description: i,
                    testId: `modal-gift-credit-personal-account-required`,
                    isOpen: !0,
                    onClose: a,
                    onEscapeKeyDown: Ce,
                    shouldIgnoreClickOutside: !0,
                    showCloseButton: !1,
                    size: `custom`,
                    type: `warning`,
                    title: o,
                    primaryButton: _,
                    secondaryButton: y
                }), t[42] = a, t[43] = _, t[44] = y, t[45] = i, t[46] = o, t[47] = b) : b = t[47], b
            }
            if (d.status === `currency_mismatch`) {
                let e;
                t[48] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, q.jsx)(`span`, {
                    className: `text-token-text-secondary block text-sm leading-5`,
                    children: (0, q.jsx)(R, {
                        ...W.currencyMismatchDescription
                    })
                }), t[48] = e) : e = t[48];
                let n;
                t[49] === f ? n = t[50] : (n = f.formatMessage(W.currencyMismatchTitle), t[49] = f, t[50] = n);
                let r;
                t[51] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, q.jsx)(R, {
                    ...W.gotItButton
                }), t[51] = r) : r = t[51];
                let i;
                t[52] === a ? i = t[53] : (i = (0, q.jsx)(u, {
                    className: `rounded-full`,
                    color: `primary`,
                    onClick: a,
                    size: `large`,
                    type: `button`,
                    children: r
                }), t[52] = a, t[53] = i);
                let o;
                return t[54] !== a || t[55] !== n || t[56] !== i ? (o = (0, q.jsx)(c, {
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
            if (d.status === `location_ineligible`) {
                let e;
                t[58] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, q.jsx)(`span`, {
                    className: `text-token-text-secondary block text-sm leading-5`,
                    children: (0, q.jsx)(R, {
                        ...W.locationIneligibleDescription
                    })
                }), t[58] = e) : e = t[58];
                let n;
                t[59] === f ? n = t[60] : (n = f.formatMessage(W.locationIneligibleTitle), t[59] = f, t[60] = n);
                let r;
                t[61] === Symbol.for(`react.memo_cache_sentinel`) ? (r = (0, q.jsx)(R, {
                    ...W.gotItButton
                }), t[61] = r) : r = t[61];
                let i;
                t[62] === a ? i = t[63] : (i = (0, q.jsx)(u, {
                    className: `rounded-full`,
                    color: `primary`,
                    onClick: a,
                    size: `large`,
                    type: `button`,
                    children: r
                }), t[62] = a, t[63] = i);
                let o;
                return t[64] !== a || t[65] !== n || t[66] !== i ? (o = (0, q.jsx)(c, {
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
    De, J, Y, Oe = e((() => {
        De = (e, t) => {
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
        }, J = e => {
            let t = Number(e);
            if (!Number.isSafeInteger(t) || t <= 0) throw Error(`Gift credit claim returned an invalid amount`);
            return t
        }, Y = e => ({
            accountId: e.accountId,
            creditAmount: e.creditAmount
        })
    })),
    X, ke, Ae, je, Me, Ne, Pe, Fe, Ie, Le, Re = e((() => {
        m(), i(), E(), a(), v(), s(), P(), O(), de(), X = t(B()), z(), pe(), Ee(), Oe(), ge(), U(), ke = L(), Ae = [1e3, 2e3, 4e3], je = `X-OpenAI-Gift-Credit-Claim-Token`, Me = `chatgpt_gift_credit_redemption`, Ne = e => typeof e == `object` && !!e && `workspace_account_associated` in e && e.workspace_account_associated === !0, Pe = e => typeof e == `object` && !!e && (`ineligibility_detail_reason` in e && e.ineligibility_detail_reason === `recipient_currency_mismatch` || `ineligibility_reason` in e && (e.ineligibility_reason === `recipient_currency_mismatch` || e.ineligibility_reason === `recipient_location_ineligible`)), Fe = e => typeof e == `object` && !!e && `location_ineligible` in e && e.location_ineligible === !0, Ie = (e, t) => new Promise((n, r) => {
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
            onAlreadyClaimed: i,
            onClose: a,
            onRedeemed: s,
            onUnavailable: c
        }) => {
            "use no forget";
            let [u, p] = (0, X.useReducer)(De, {
                status: `loading`
            }), m = V(), g = ie(), _ = ee(), {
                data: v,
                isLoading: y
            } = b(), [x, S] = (0, X.useState)(!1), C = v?.accountItems.find(e => e.isPersonalAccount() && !e.isDeactivated()), w = _ != null && !_.isPersonalAccount(), T = v != null && ve(v.accountItems), E = (0, X.useRef)(null), D = (0, X.useRef)({
                deliveryMode: t,
                giftFunnelId: n
            }), O = (0, X.useRef)(null), k = (0, X.useRef)(null), A = (0, X.useRef)(!1), j = (0, X.useRef)(!1), M = (0, X.useRef)(null), N = (0, X.useCallback)((e, t, n) => {
                j.current || (j.current = !0, g.invalidateQueries({
                    queryKey: [`usage-limits-page-configs`, n]
                }), g.invalidateQueries({
                    queryKey: [`wham`, `usage`, `rate-limit-status`]
                }), g.invalidateQueries({
                    queryKey: [`settings`, `agent-usage`, `remaining-balance`, n]
                }), p({
                    type: `show_redeemed`,
                    creditAmount: e,
                    creditGrantId: t
                }), s(e))
            }, [s, g]), P = (0, X.useCallback)(async (t, n = !1) => {
                if (A.current) return;
                A.current = !0;
                let i = M.current ?? (n ? `recovery` : `initial`);
                M.current = i, k.current?.abort();
                let a = new AbortController;
                k.current = a, p(n ? {
                    type: `show_processing`,
                    canRetry: !1,
                    details: t
                } : {
                    type: `start_redemption`,
                    details: t
                }), H({
                    step: `claim_redemption`,
                    outcome: `started`,
                    ...D.current,
                    attemptKind: i,
                    creditQuantity: t.creditAmount
                });
                try {
                    for (let n = 0;; n += 1) {
                        let o = await r(Me),
                            s = await l.safePost(`/gift-credits/claims/redeem`, {
                                additionalHeaders: {
                                    ...o,
                                    [je]: e
                                },
                                requestBody: {
                                    account_id: t.accountId
                                },
                                signal: a.signal
                            });
                        if (a.signal.aborted) return;
                        if (s.status === `redeemed` && `credit_grant_id` in s) {
                            N(t.creditAmount, s.credit_grant_id, t.accountId);
                            return
                        }
                        if (s.status === `unavailable`) {
                            p({
                                type: `show_unavailable`
                            }), c();
                            return
                        }
                        if (`eligible` in s && s.eligible === !1) {
                            Ne(s) ? p({
                                type: `show_workspace_association_blocked`
                            }) : Pe(s) ? p({
                                type: `show_currency_mismatch`
                            }) : Fe(s) ? p({
                                type: `show_location_ineligible`
                            }) : (p({
                                type: `show_ineligible`
                            }), c());
                            return
                        }
                        if (s.status !== `claim_reserved`) throw Error(`Gift credit redemption returned an unknown state`);
                        let u = Ae[n];
                        if (u == null) {
                            H({
                                step: `claim_redemption`,
                                outcome: `pending`,
                                reason: `auto_retry_exhausted`,
                                ...D.current,
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
                        }), await Ie(u, a.signal)
                    }
                } catch (e) {
                    a.signal.aborted || (e instanceof f && e.isTransportError && H({
                        step: `claim_redemption`,
                        outcome: `failed`,
                        reason: `request_failed`,
                        ...D.current,
                        attemptKind: i,
                        creditQuantity: t.creditAmount
                    }), p({
                        type: `show_redemption_error`,
                        details: t
                    }))
                } finally {
                    k.current === a && (A.current = !1)
                }
            }, [e, N, c]), I = (0, X.useCallback)(async () => {
                E.current?.abort();
                let t = new AbortController;
                if (E.current = t, p({
                        type: `check_eligibility`
                    }), y && (_ == null || _.isPersonalAccount())) return;
                let n = () => {
                    O.current !== e && (O.current = e, H({
                        step: `claim_eligibility`,
                        outcome: `ineligible`,
                        reason: `workspace_account_associated`,
                        ...D.current
                    }))
                };
                if (T) {
                    n(), p({
                        type: `show_workspace_association_blocked`
                    });
                    return
                }
                if (w) {
                    n(), p({
                        type: `show_workspace_blocked`
                    });
                    return
                }
                try {
                    let n = await l.safeGet(`/gift-credits/claims/eligibility`, {
                        additionalHeaders: {
                            [je]: e
                        },
                        signal: t.signal
                    });
                    if (t.signal.aborted) return;
                    if (n.status === `unavailable`) {
                        p({
                            type: `show_unavailable`
                        }), c();
                        return
                    }
                    if (n.status === `redeemed` && `credit_grant_id` in n) {
                        p({
                            type: `show_redeemed`,
                            creditAmount: J(n.amount),
                            creditGrantId: n.credit_grant_id
                        }), i();
                        return
                    }
                    if (n.status === `claim_reserved`) {
                        P({
                            accountId: n.account_id,
                            creditAmount: J(n.amount)
                        }, !0);
                        return
                    }
                    if (`eligible` in n && n.eligible === !1) {
                        Ne(n) ? p({
                            type: `show_workspace_association_blocked`
                        }) : Pe(n) ? p({
                            type: `show_currency_mismatch`
                        }) : Fe(n) ? p({
                            type: `show_location_ineligible`
                        }) : (p({
                            type: `show_ineligible`
                        }), c());
                        return
                    }
                    if (!(`eligible_accounts` in n) || n.eligible_accounts.length === 0) {
                        p({
                            type: `show_ineligible`
                        }), c();
                        return
                    }
                    let r = n.eligible_accounts[0];
                    p({
                        type: `show_available`,
                        details: {
                            accountId: r.account_id,
                            creditAmount: J(n.amount)
                        },
                        presentation: n.presentation ?? null
                    })
                } catch (e) {
                    t.signal.aborted || (e instanceof f && e.isTransportError && H({
                        step: `claim_eligibility`,
                        outcome: `failed`,
                        reason: `request_failed`,
                        ...D.current
                    }), p({
                        type: `show_eligibility_error`
                    }), c())
                }
            }, [y, e, _, T, w, i, c, P]), ne = (0, X.useCallback)(async () => {
                if (!(C == null || x)) {
                    S(!0);
                    try {
                        let {
                            updatedAccount: e,
                            willRedirect: t
                        } = await d(g, C.id, m, F(), !0, window.location.href);
                        if (!e && !t) {
                            S(!1), F().danger(m.formatMessage(W.accountSwitchError));
                            return
                        }
                        t || h(window.location.href)
                    } catch {
                        S(!1), F().danger(m.formatMessage(W.accountSwitchError))
                    }
                }
            }, [m, x, C, g]), L = (0, X.useCallback)(() => {
                u.status === `available` && P(Y(u))
            }, [P, u]), re = (0, X.useCallback)(() => {
                if (u.status === `error` && u.operation === `eligibility`) {
                    I();
                    return
                }(u.status === `error` && u.operation === `redemption` || u.status === `processing` && u.canRetry) && P(Y(u), !0)
            }, [I, P, u]);
            return (0, X.useEffect)(() => (I(), () => {
                E.current?.abort()
            }), [I]), (0, X.useEffect)(() => (j.current = !1, M.current = null, D.current = {
                deliveryMode: t,
                giftFunnelId: n
            }, () => {
                k.current?.abort(), k.current = null, A.current = !1
            }), [e, t, n]), (0, ke.jsx)(Te, {
                onClose: a,
                onClaim: L,
                onRetry: re,
                onSwitchAccount: () => te({
                    reason: o.AccountSwitcher,
                    source: `gifts.credits.redemption-flow`
                }),
                onSwitchToPersonal: () => void ne(),
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
        } = re(),
        n = ne(),
        r = ae(),
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
            !c || t == null || t.length === 0 || l.current === t || (l.current = t, H({
                step: `claim_link`,
                outcome: `started`
            }))
        }, p = [c, t], e[10] = t, e[11] = f, e[12] = p), (0, Q.useEffect)(f, p), t == null || t.length === 0) {
        let t;
        return e[13] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, $.jsx)(le, {
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
        Z = fe(), he(), w(), j(), i(), E(), N(), Q = t(B()), z(), oe(), pe(), Re(), U(), $ = L(), Ve = 50, He = e => {
            "use forget";
            let t = (0, Z.c)(4),
                {
                    claimCode: n
                } = e,
                r = (0, Q.useRef)(null),
                i, a;
            t[0] === n ? (i = t[1], a = t[2]) : (i = () => {
                r.current !== n && (r.current = n, H({
                    step: `claim_link`,
                    outcome: `started`
                }), H({
                    step: `auth_redirect`,
                    outcome: `started`
                }));
                let e = !1,
                    t = new URL(`/gifts/credits/claim/${encodeURIComponent(n)}`, window.location.origin);
                return t.searchParams.set(`gift_auth_return`, `1`), g.flushStructuredEvents(Ve).catch(Be).then(() => {
                    if (!e) return D({
                        callbackUrl: t.href,
                        fallbackScreenHint: `login_or_signup`
                    })
                }), () => {
                    e = !0
                }
            }, a = [n], t[0] = n, t[1] = i, t[2] = a), (0, Q.useEffect)(i, a);
            let o;
            return t[3] === Symbol.for(`react.memo_cache_sentinel`) ? (o = (0, $.jsx)(me, {}), t[3] = o) : o = t[3], o
        }, Ue = e => {
            "use forget";
            let t = (0, Z.c)(20),
                {
                    claimCode: n
                } = e,
                r = V(),
                i = ae(),
                a = I()?.user,
                o;
            t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (o = () => {
                k({
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
                l(), F().success(r.formatMessage(W.redeemedToast, {
                    creditAmount: e
                }))
            }, t[4] = l, t[5] = r, t[6] = u) : u = t[6];
            let d = u,
                f;
            t[7] !== l || t[8] !== r ? (f = () => {
                l(), F().danger(r.formatMessage(W.alreadyClaimedToast))
            }, t[7] = l, t[8] = r, t[9] = f) : f = t[9];
            let p = f,
                m;
            t[10] !== l || t[11] !== r ? (m = () => {
                l(), F().danger(r.formatMessage(W.unavailableToast))
            }, t[10] = l, t[11] = r, t[12] = m) : m = t[12];
            let h = m,
                g;
            t[13] === Symbol.for(`react.memo_cache_sentinel`) ? (g = (0, $.jsx)(me, {}), t[13] = g) : g = t[13];
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
        ge(), E(), M(), oe(), Ge = () => T() && !S(`2067846105`) && !_e() ? se(`/`) : null
    }));
export {
    We as i, Ke as n, ze as r, Ge as t
};
//# sourceMappingURL=48eff304-ia747g7ymclgwj0w.js.map