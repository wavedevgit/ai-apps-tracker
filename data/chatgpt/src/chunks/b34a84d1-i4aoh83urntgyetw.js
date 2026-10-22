import {
    n as e
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Eln as t,
    Oln as n,
    Sln as r,
    Tln as i,
    bln as a,
    kln as o,
    wln as s,
    xln as c
} from "./conversation-small-i79e9c315w50am5f.js";
import {
    Cg as l,
    Sg as u,
    _g as d,
    vg as f,
    wg as p,
    xg as m,
    yg as h
} from "./c2675c8c-d62p1sdq1sy52umm.js";

function g({
    checkoutLifetimeId: e,
    opening: t,
    ...n
}) {
    if (e != null && e !== n.checkoutLaunchId || t?.checkoutLifetimeId != null && t.checkoutLifetimeId !== n.checkoutLaunchId) return;
    let r = t?.openingNumber != null && t.actualPresentation != null && t.openingKind != null ? {
            openingNumber: t.openingNumber,
            actualPresentation: t.actualPresentation,
            openingKind: t.openingKind
        } : void 0,
        i = n.actualPresentation ?? t?.actualPresentation;
    return i == null && r == null ? n : {
        ...n,
        actualPresentation: i,
        ...r == null ? {} : {
            opening: r
        }
    }
}

function _({
    userId: e,
    accountId: t,
    context: n,
    analytics: r
}) {
    if (typeof window > `u`) return;
    let i = M.safeParse({
        userId: e,
        accountId: t,
        context: n,
        analytics: r,
        savedAt: Date.now()
    });
    if (i.success) try {
        window.sessionStorage.setItem(A + n.checkoutId, JSON.stringify(i.data))
    } catch {}
}

function v({
    userId: e,
    accountId: t,
    checkoutId: n,
    processorEntity: r
}) {
    return y({
        userId: e,
        accountId: t,
        checkoutId: n,
        processorEntity: r
    })?.context
}

function y({
    userId: e,
    accountId: t,
    checkoutId: n,
    processorEntity: r
}) {
    if (!(typeof window > `u` || !e || !t || !n || !r)) try {
        let i = A + n,
            a = M.safeParse(JSON.parse(window.sessionStorage.getItem(i) ?? `null`));
        if (!a.success) return;
        let o = a.data,
            s = Date.now() - o.savedAt;
        if (s < 0 || s > j) {
            window.sessionStorage.removeItem(i);
            return
        }
        if (o.userId !== e || o.accountId !== t || o.context.checkoutId !== n || o.context.processorEntity !== r) return;
        if (o.analytics == null) return {
            ...o,
            analytics: void 0
        };
        let c = g(o.analytics);
        return {
            ...o,
            analytics: c
        }
    } catch {
        return
    }
}

function b({
    userId: e,
    accountId: t,
    navigationState: n,
    previousCheckoutId: r,
    previousProcessorEntity: i,
    checkoutId: a,
    processorEntity: o
}) {
    let s = y({
        userId: e,
        accountId: t,
        checkoutId: r,
        processorEntity: i
    });
    if (s == null) return;
    let c = C({
        navigationState: n,
        userId: e,
        accountId: t,
        checkoutSessionId: r,
        processorEntity: i
    });
    _({
        userId: e,
        accountId: t,
        context: {
            ...s.context,
            checkoutId: a,
            processorEntity: o
        },
        analytics: c
    })
}

function x({
    checkoutSessionId: e,
    checkoutPayload: t,
    userId: n,
    analytics: r
}) {
    let {
        credit_purchase_data: a,
        billing_details: o
    } = t;
    if (!(typeof window > `u` || !n || a == null)) try {
        window.sessionStorage.setItem(k + e, JSON.stringify({
            viewerId: n,
            checkoutPayload: {
                entry_point: t.entry_point,
                checkout_source: t.checkout_source,
                credit_checkout_launch: t.credit_checkout_launch,
                checkout_ui_mode: t.checkout_ui_mode,
                cancel_url: t.cancel_url,
                supports_saved_payment_link: t.supports_saved_payment_link,
                supports_oaics_credit_modal: t.supports_oaics_credit_modal,
                credit_purchase_data: {
                    account_id: a.account_id,
                    quantity: a.quantity,
                    unit: a.unit,
                    client: a.client,
                    discount_offer_id: a.discount_offer_id
                },
                billing_details: o == null ? o : {
                    country: o.country,
                    currency: o.currency
                }
            },
            ...i({
                analytics: r,
                accountId: a.account_id,
                checkoutSessionId: e
            })
        }))
    } catch {}
}

function S({
    checkoutSessionId: e,
    userId: t
}) {
    if (!(typeof window > `u` || !t)) try {
        let n = window.sessionStorage.getItem(k + e);
        if (n == null) return;
        let r = JSON.parse(n);
        if (typeof r != `object` || !r || !(`viewerId` in r) || r.viewerId !== t || !(`checkoutPayload` in r) || r.checkoutPayload == null || typeof r.checkoutPayload != `object` || !(`credit_purchase_data` in r.checkoutPayload) || r.checkoutPayload.credit_purchase_data == null || typeof r.checkoutPayload.credit_purchase_data != `object`) return;
        let i = r.checkoutPayload.credit_purchase_data;
        return !(`account_id` in i) || typeof i.account_id != `string` || !(`quantity` in i) || typeof i.quantity != `number` || !Number.isSafeInteger(i.quantity) || !(`unit` in i) || i.unit !== `credit` ? void 0 : r
    } catch {
        return
    }
}

function C({
    navigationState: e,
    accountId: t,
    checkoutSessionId: n,
    processorEntity: r,
    userId: i
}) {
    let o = E({
        context: e?.[a],
        accountId: t,
        checkoutSessionId: n
    });
    if (o != null) return o;
    let s = S({
        checkoutSessionId: n,
        userId: i
    });
    return E({
        context: s && `creditCheckoutAnalytics` in s ? s.creditCheckoutAnalytics : void 0,
        accountId: t,
        checkoutSessionId: n
    }) ?? y({
        accountId: t,
        userId: i,
        checkoutId: n,
        processorEntity: r
    })?.analytics
}

function w({
    search: e,
    accountId: n,
    userId: i
}) {
    if (typeof window > `u` || !n || !i) return;
    let a = new URLSearchParams(e).get(c);
    if (a) try {
        let e = r + a,
            s = window.sessionStorage.getItem(e) ?? window.localStorage.getItem(e);
        if (!s) return;
        let c = JSON.parse(s);
        if (typeof c != `object` || !c || !(`userId` in c) || c.userId !== i) return;
        let l = T({
                context: c,
                accountId: n
            }),
            u = t(l);
        if (l?.checkoutLaunchId !== a || u == null || u > 9e5) {
            l?.checkoutLaunchId === a && (window.sessionStorage.removeItem(e), window.localStorage.removeItem(e));
            return
        }
        try {
            window.sessionStorage.setItem(e, JSON.stringify({
                ...l,
                accountId: n,
                userId: i
            })), window.localStorage.removeItem(e)
        } catch {
            if (!o(l)) return
        }
        return l
    } catch {
        return
    }
}

function T({
    context: e,
    accountId: t
}) {
    let n = D.safeParse(e);
    if (!n.success || n.data.accountId !== t) return;
    let {
        accountId: r,
        ...i
    } = n.data;
    return g(i)
}

function E({
    context: e,
    accountId: t,
    checkoutSessionId: n
}) {
    let r = O.safeParse(e);
    if (!r.success || r.data.accountId !== t || r.data.checkoutSessionId !== n) return;
    let {
        accountId: i,
        checkoutSessionId: a,
        ...o
    } = r.data;
    return g(o)
}
var D, O, k, A, j, M, N = e((() => {
    d(), n(), D = l({
        accountId: p().min(1),
        checkoutLaunchId: p().min(1),
        checkoutLifetimeId: p().min(1).optional(),
        purchaseAttemptId: p().min(1).optional(),
        creditCheckoutSurface: h(s),
        activationStartedAtMs: u().finite().positive().optional(),
        originEligible: f().optional(),
        autoReloadEnabledAtEntry: f().optional(),
        funnelMeasurementEnabled: m(!0).optional(),
        actualPresentation: h([`full_page`, `modal`, `inline`]).optional(),
        opening: l({
            checkoutLifetimeId: p().min(1).optional(),
            openingNumber: u().int().positive().optional(),
            actualPresentation: h([`full_page`, `modal`, `inline`]).optional(),
            openingKind: h([`new`, `retained_reopen`]).optional()
        }).passthrough().optional(),
        modalExperiment: l({
            group: h([`control`, `treatment`, `not_enrolled`, `unknown`]),
            ruleId: p()
        }).optional(),
        webMergeExperiment: l({
            experiment: p().regex(/^[A-Za-z0-9_-]{1,200}$/),
            group: p().min(1).max(100).refine(e => e.trim().length > 0),
            requestedPresentation: h([`full_page`, `modal`, `inline`]),
            ruleId: p().regex(/^[A-Za-z0-9_-]{10,64}$/)
        }).optional()
    }), O = D.extend({
        checkoutSessionId: p().min(1)
    }), k = `oai/apps/creditCheckoutDocumentHandoff/`, A = `oai/apps/creditCheckoutEventContext/`, j = 1440 * 6e4, M = l({
        userId: p().min(1),
        accountId: p().min(1),
        savedAt: u().finite(),
        analytics: D.omit({
            accountId: !0
        }).optional(),
        context: l({
            checkoutId: p().min(1),
            processorEntity: p().min(1),
            checkoutKind: m(`standalone_credit`),
            entryPoint: p().optional(),
            source: p().optional(),
            isCheckoutModalEnabled: f()
        })
    })
}));
export {
    N as a, _ as c, w as i, b as l, E as n, S as o, v as r, x as s, C as t
};
//# sourceMappingURL=b34a84d1-i4aoh83urntgyetw.js.map