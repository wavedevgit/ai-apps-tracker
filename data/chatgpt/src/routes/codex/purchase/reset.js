import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $tt as n,
    C1 as r,
    Dit as i,
    Qtt as a,
    ent as o,
    fU as s,
    kit as c,
    pU as l,
    u1 as u
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as d,
    At as f,
    Bn as p,
    Ln as m,
    Pt as h,
    Rn as g,
    Ut as _,
    Vn as v,
    bt as y,
    wn as b,
    zn as x
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $nn as S,
    Kcn as C,
    Qnn as w,
    Sin as T,
    Wrn as E,
    Xnn as D,
    _in as O,
    iin as k,
    qcn as A,
    tin as j,
    vin as M
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    ad as N,
    id as P
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    a as F,
    i as I,
    o as L,
    t as R
} from "./18d7c77c-gvzuxapgedy6890f.js";
var z, B, V, H, U, W = e((() => {
    d(), z = b(), I(), C(), T(), j(), N(), D(), u(), l(), c(), o(), B = t(v()), g(), V = p(), H = _(function() {
        "use forget";
        let e = (0, z.c)(15),
            {
                browserReturnPath: t,
                returnToCodexApp: o,
                checkoutSource: c
            } = f(),
            l = r(),
            {
                country: u
            } = S(),
            d;
        e[0] !== u || e[1] !== l ? (d = {
            country: u,
            currentAccount: l,
            location: A.CODEX_RATE_LIMIT_RESET,
            pricingPlanIsTypeBusiness: !1,
            shouldUsePaidSubscriptionBillingCurrency: !0
        }, e[0] = u, e[1] = l, e[2] = d) : d = e[2];
        let p = w(d),
            {
                prepareCheckoutSession: m,
                navigateToCheckout: g
            } = k(),
            _ = h(),
            v = x(),
            b = (0, B.useRef)(!1),
            C = (0, B.useRef)(null),
            T, D;
        e[3] !== p || e[4] !== t || e[5] !== c || e[6] !== l || e[7] !== v || e[8] !== _ || e[9] !== g || e[10] !== m || e[11] !== o ? (T = () => {
            if (l == null || b.current || p.status === `loading`) return;
            if (p.status !== `ready`) {
                b.current = !0, s().warning(v.formatMessage(U.checkoutError)), _(t, {
                    replace: !0
                });
                return
            }
            if (b.current = !0, !L(l.planType)) {
                s().warning(v.formatMessage(U.checkoutError)), _(t, {
                    replace: !0
                });
                return
            }
            C.current ??= crypto.randomUUID();
            let e = o ? M : t,
                r = R({
                    billingDetails: p.billingDetails,
                    planType: l.planType,
                    purchaseAttemptId: C.current
                });
            a.setItem(n.CodexRateLimitResetCheckoutRedirectPath, e), m(r, {}).then(async e => {
                if (!F(e)) throw Error(`The checkout session was not created for a usage reset`);
                await g(e, {
                    checkoutPayload: r,
                    searchParams: c == null ? void 0 : new URLSearchParams({
                        source: c
                    }).toString(),
                    state: {
                        [E]: o ? O : y(t)
                    }
                })
            }).catch(e => {
                a.removeItem(n.CodexRateLimitResetCheckoutRedirectPath), i.addError(`Failed to start Codex rate-limit reset checkout`, {
                    error: e
                }), s().warning(v.formatMessage(U.checkoutError)), _(t, {
                    replace: !0
                })
            })
        }, D = [p, t, c, l, v, _, g, m, o], e[3] = p, e[4] = t, e[5] = c, e[6] = l, e[7] = v, e[8] = _, e[9] = g, e[10] = m, e[11] = o, e[12] = T, e[13] = D) : (T = e[12], D = e[13]), (0, B.useEffect)(T, D);
        let j;
        return e[14] === Symbol.for(`react.memo_cache_sentinel`) ? (j = (0, V.jsx)(P, {}), e[14] = j) : j = e[14], j
    }), U = m({
        checkoutError: {
            id: `chatgpt.codex.rate_limit_reset.checkout.start.error`,
            defaultMessage: `We couldn’t start your usage reset checkout. Please try again.`
        }
    })
}));
e((() => {
    W()
}))();
export {
    H as
    default
};
//# sourceMappingURL=codex.purchase.reset-jflv9jsc.js.map