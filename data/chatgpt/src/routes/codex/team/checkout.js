import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    C1 as n,
    Dit as r,
    hU as i,
    kit as a,
    o,
    pU as s,
    s as c,
    u1 as l
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as u,
    Bn as d,
    Ln as f,
    Pt as p,
    Rn as m,
    Ut as h,
    Vn as g,
    Wt as _,
    wn as v,
    zn as y
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $nn as b,
    Kcn as x,
    Xnn as S,
    Znn as C,
    qcn as w
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    Dh as T,
    Dt as E,
    Ot as D,
    Th as O
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
var k, A, j, M, N, P, F, I, L = e((() => {
    u(), k = v(), x(), T(), E(), S(), l(), s(), a(), A = t(g()), m(), c(), j = d(), M = `/codex/team/start`, N = {
        hasRouteMeta: !0
    }, P = h(function() {
        "use forget";
        let e = (0, k.c)(25),
            t = y(),
            a = p(),
            o = i(),
            s = n(),
            {
                country: c
            } = b(),
            l;
        e[0] !== c || e[1] !== s ? (l = {
            country: c,
            currentAccount: s,
            location: `CodexTeamCheckoutRoute`,
            shouldUsePaidSubscriptionBillingCurrency: !0,
            pricingPlanIsTypeBusiness: !0
        }, e[0] = c, e[1] = s, e[2] = l) : l = e[2];
        let u = C(l),
            d = (0, A.useRef)(!1),
            f = u ?? null,
            m;
        e[3] !== c || e[4] !== f ? (m = {
            billingDetails: f,
            country: c
        }, e[3] = c, e[4] = f, e[5] = m) : m = e[5];
        let {
            isLoadingCheckoutPricingConfig: h,
            startCodexTeamBillingCheckout: g
        } = D(m), _ = u == null, v;
        e[6] !== t || e[7] !== a || e[8] !== g || e[9] !== o ? (v = () => g({
            entryPoint: w.DIRECT_PURCHASE_REDIRECT,
            returnLocation: {
                hash: `#pricing`,
                pathname: `/`
            }
        }).catch(e => {
            r.addError(e), o.warning(t.formatMessage(F.paymentErrorWarning), {
                hasCloseButton: !0
            }), a(M, {
                replace: !0
            })
        }), e[6] = t, e[7] = a, e[8] = g, e[9] = o, e[10] = v) : v = e[10];
        let x = (0, A.useEffectEvent)(v),
            S;
        e[11] !== _ || e[12] !== h || e[13] !== x ? (S = () => {
            _ || h || d.current || (d.current = !0, x())
        }, e[11] = _, e[12] = h, e[13] = x, e[14] = S) : S = e[14];
        let T;
        e[15] !== _ || e[16] !== h ? (T = [_, h], e[15] = _, e[16] = h, e[17] = T) : T = e[17], (0, A.useEffect)(S, T);
        let E;
        e[18] === t ? E = e[19] : (E = t.formatMessage(F.pageTitle), e[18] = t, e[19] = E);
        let N;
        e[20] === E ? N = e[21] : (N = (0, j.jsx)(`title`, {
            children: E
        }), e[20] = E, e[21] = N);
        let P;
        e[22] === Symbol.for(`react.memo_cache_sentinel`) ? (P = (0, j.jsx)(O, {
            context: `codex`
        }), e[22] = P) : P = e[22];
        let I;
        return e[23] === N ? I = e[24] : (I = (0, j.jsxs)(j.Fragment, {
            children: [N, P]
        }), e[23] = N, e[24] = I), I
    }), F = f({
        pageTitle: {
            id: `CodexTeamCheckoutRoute.pageTitle`,
            defaultMessage: `Codex checkout`
        },
        paymentErrorWarning: {
            id: `CodexTeamCheckoutRoute.paymentErrorWarning`,
            defaultMessage: `We’re having trouble initializing your checkout right now. Please refresh the page and try again, or contact support if the problem persists.`
        }
    }), I = _(o)
}));
e((() => {
    L()
}))();
export {
    I as ErrorBoundary, P as
    default, N as handle
};
//# sourceMappingURL=codex.team.checkout-dl5o09vx.js.map