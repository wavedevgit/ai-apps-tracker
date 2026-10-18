import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    C1 as n,
    Dit as r,
    Nrt as i,
    hU as ee,
    kit as a,
    pU as o,
    rot as te,
    u1 as s
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as c,
    At as l,
    Bn as u,
    Ln as d,
    Pt as f,
    Rn as p,
    Ut as m,
    Vn as h,
    jt as g,
    mt as ne,
    wn as _,
    zn as re
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Kcn as v,
    Sin as y,
    nan as b,
    qcn as x,
    vin as ie
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    $g as ae,
    Qg as S,
    Rm as C,
    Vm as w,
    Xg as T,
    Yg as E,
    ad as D,
    eg as O,
    fp as oe,
    id as k,
    nd as A,
    pp as j,
    rd as M
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    a as N,
    i as se
} from "./b34a84d1-foowwmd6q7vc368z.js";
import {
    n as ce,
    t as P
} from "./ad3d11c5-ohffoqcspvtifsnc.js";

function F(e) {
    e(z, {
        replace: !0
    })
}
var I, L, R, z, B, V, H = e((() => {
    c(), I = _(), N(), i(), E(), L = t(h()), P(), v(), C(), j(), O(), y(), p(), o(), a(), D(), A(), s(), S(), R = u(), z = `/codex/cloud/settings/usage`, B = m(function() {
        "use forget";
        let e = (0, I.c)(55),
            {
                autoTopUpEnabled: t,
                quantity: i,
                returnToCodexApp: a,
                mergedReturnPath: o,
                requiresCheckoutDocumentNavigation: s,
                checkoutReturnLocation: c
            } = l(),
            u = f(),
            {
                search: d
            } = g(),
            p = ee(),
            m = re(),
            h = n(),
            _;
        e[0] === h ? _ = e[1] : (_ = h?.isFree?.() === !0 || h?.isGo?.() === !0, e[0] = h, e[1] = _);
        let v = _,
            y = a && v ? h : null,
            S;
        e[2] === y ? S = e[3] : (S = {
            account: y
        }, e[2] = y, e[3] = S);
        let {
            data: C,
            isPending: E
        } = M(S), D = T(), O;
        e[4] === v ? O = e[5] : (O = ae(v), e[4] = v, e[5] = O);
        let A = O,
            j = (0, L.useRef)(!1),
            N, P, z, B;
        if (e[6] !== t || e[7] !== c) {
            let n = new URL(ne(c), window.location.origin);
            B = ce, N = t, P = `personal`, z = n.toString(), e[6] = t, e[7] = c, e[8] = N, e[9] = P, e[10] = z, e[11] = B
        } else N = e[8], P = e[9], z = e[10], B = e[11];
        let H = h?.id,
            U;
        e[12] !== d || e[13] !== H ? (U = se({
            search: d,
            accountId: H,
            userId: te()?.user?.id
        }), e[12] = d, e[13] = H, e[14] = U) : U = e[14];
        let W;
        e[15] !== c || e[16] !== N || e[17] !== P || e[18] !== z || e[19] !== U ? (W = {
            autoTopUpEnabled: N,
            creditCheckoutAccountScope: P,
            cancelUrl: z,
            entryPoint: x.CODEX_PURCHASE_CREDITS_ROUTE,
            returnLocation: c,
            creditCheckoutAnalytics: U
        }, e[15] = c, e[16] = N, e[17] = P, e[18] = z, e[19] = U, e[20] = W) : W = e[20];
        let {
            checkoutPricingCountryConfig: G,
            status: K,
            submit: q
        } = B(W), J;
        e[21] !== G || e[22] !== K || e[23] !== m || e[24] !== o || e[25] !== u || e[26] !== i || e[27] !== s || e[28] !== a || e[29] !== q || e[30] !== p ? (J = async () => {
            if (K === `pending`) return;
            if (j.current = !0, K === `error`) {
                p.warning(m.formatMessage(V.somethingWentWrong)), F(u);
                return
            }
            let {
                amount_per_credit: e,
                minor_unit_exponent: t
            } = G.currencyConfig, n = w({
                amountPerCredit: e,
                creditQuantityStep: b.creditQuantityStep,
                minimumChargeMinorUnits: b.minimumChargeMinorUnits,
                minorUnitExponent: t
            });
            if (!(e != null && e > 0 && i >= n && i <= oe(b.creditQuantityStep) && i % b.creditQuantityStep === 0)) return F(u);
            try {
                a ? await q(i, {
                    successReturnPath: ie
                }) : o == null ? s ? await q(i, {
                    reloadDocument: !0
                }) : await q(i) : await q(i, {
                    successReturnPath: o,
                    reloadDocument: !0
                })
            } catch (e) {
                let t = e;
                return r.addError(`Failed to submit codex credits checkout`, {
                    error: t
                }), p.warning(m.formatMessage(V.somethingWentWrong)), F(u)
            }
        }, e[21] = G, e[22] = K, e[23] = m, e[24] = o, e[25] = u, e[26] = i, e[27] = s, e[28] = a, e[29] = q, e[30] = p, e[31] = J) : J = e[31];
        let Y = J,
            X;
        e[32] !== A || e[33] !== D || e[34] !== h || e[35] !== Y || e[36] !== v || e[37] !== E || e[38] !== u || e[39] !== a || e[40] !== C?.show_buy_credits ? (X = () => {
            if (!(j.current || !h)) {
                if (A || a && C?.show_buy_credits === !0) {
                    Y().catch(r.addError);
                    return
                }
                if (!(a && v && E)) switch (D) {
                    case `enabled`:
                        Y().catch(r.addError);
                        return;
                    case `loading`:
                        return;
                    case `disabled`:
                        F(u);
                        return
                }
            }
        }, e[32] = A, e[33] = D, e[34] = h, e[35] = Y, e[36] = v, e[37] = E, e[38] = u, e[39] = a, e[40] = C?.show_buy_credits, e[41] = X) : X = e[41];
        let Z = C?.show_buy_credits,
            Q;
        e[42] !== A || e[43] !== K || e[44] !== D || e[45] !== h || e[46] !== Y || e[47] !== v || e[48] !== E || e[49] !== u || e[50] !== i || e[51] !== a || e[52] !== Z ? (Q = [A, K, D, h, Y, v, E, u, i, a, Z], e[42] = A, e[43] = K, e[44] = D, e[45] = h, e[46] = Y, e[47] = v, e[48] = E, e[49] = u, e[50] = i, e[51] = a, e[52] = Z, e[53] = Q) : Q = e[53], (0, L.useEffect)(X, Q);
        let $;
        return e[54] === Symbol.for(`react.memo_cache_sentinel`) ? ($ = (0, R.jsx)(k, {}), e[54] = $) : $ = e[54], $
    }), V = d({
        somethingWentWrong: {
            id: `codexPurchaseCreditsRoute.somethingWentWrong`,
            defaultMessage: `Something went wrong. Please try to purchase credits again later.`
        }
    })
}));
e((() => {
    H()
}))();
export {
    B as
    default
};
//# sourceMappingURL=codex.purchase.credits-lodnjio6.js.map