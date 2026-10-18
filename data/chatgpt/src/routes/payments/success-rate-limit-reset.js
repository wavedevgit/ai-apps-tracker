import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $nt as n,
    $tt as r,
    Ant as i,
    Knt as a,
    Qtt as o,
    ent as s,
    fU as c,
    knt as l,
    pU as u
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as d,
    At as f,
    N as p,
    Pt as m,
    Rn as h,
    Ut as g,
    Vn as _,
    jt as v,
    s as y,
    wn as b,
    zn as x
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Cln as S,
    Sin as C,
    Sln as w,
    eGn as T,
    vin as E
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    i as D,
    n as O,
    r as k
} from "./18d7c77c-gvzuxapgedy6890f.js";

function A(e) {
    return i.error(e)
}
var j, M, N, P, F = e((() => {
    d(), j = b(), S(), D(), T(), C(), u(), s(), l(), y(), M = t(_()), h(), N = `/`, P = g(function() {
        "use forget";
        let e = (0, j.c)(14),
            t = f(),
            i = v(),
            s = m(),
            l = p(),
            u = x(),
            d;
        e[0] !== u || e[1] !== t.completion || e[2] !== t.outcome || e[3] !== t.success || e[4] !== i.search || e[5] !== s || e[6] !== l ? (d = () => {
            let e = o.getItem(r.CodexRateLimitResetCheckoutRedirectPath);
            o.removeItem(r.CodexRateLimitResetCheckoutRedirectPath);
            let d = w(typeof e == `string` ? e : null, N),
                f = k(t.success ? t.completion : null, t.success ? `other_error` : t.outcome),
                p = new URLSearchParams(i.search),
                m = p.get(`stripe_session_id`);
            m != null && n(m, p);
            let h = a(p) && d === E,
                g = h ? `${d}&reset_outcome=${f}` : !t.success && t.outcome !== `pending` && d === E ? N : d;
            O({
                outcome: f,
                pendingMessage: `purchaseSucceeded`,
                invalidateUsage: () => l.invalidateQueries({
                    queryKey: [`wham`, `usage`, `rate-limit-status`]
                }),
                onInvalidationError: A,
                notify: e => {
                    let {
                        level: t,
                        message: n
                    } = e;
                    c()[t](u.formatMessage(n))
                },
                returnToOrigin: () => {
                    if (h) {
                        window.location.replace(g);
                        return
                    }
                    s(g, {
                        replace: !0
                    })
                }
            })
        }, e[0] = u, e[1] = t.completion, e[2] = t.outcome, e[3] = t.success, e[4] = i.search, e[5] = s, e[6] = l, e[7] = d) : d = e[7];
        let h;
        return e[8] !== u || e[9] !== t || e[10] !== i.search || e[11] !== s || e[12] !== l ? (h = [u, t, i.search, s, l], e[8] = u, e[9] = t, e[10] = i.search, e[11] = s, e[12] = l, e[13] = h) : h = e[13], (0, M.useEffect)(d, h), null
    })
}));
e((() => {
    F()
}))();
export {
    P as
    default
};
//# sourceMappingURL=payments.success-rate-limit-reset-hd9bnlrb.js.map