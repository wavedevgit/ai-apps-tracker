import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Btt as n,
    Htt as r,
    QL as i,
    a7 as a,
    eR as o,
    l7 as s,
    tR as c
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as l,
    Bn as u,
    O as d,
    Ut as f,
    Vn as p,
    X as m,
    s as h,
    w as g,
    wn as _
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Mun as v,
    Pln as y,
    jun as b,
    qln as x
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    n as S,
    t as C
} from "./d993e3db-eqldmlp367cos97k.js";
var w, T = e((() => {
    s(), h(), w = e => g({
        queryKey: [`enterprise_compliance_spec`, e],
        queryFn: e ? () => a.safeGet(`/accounts/{account_id}/enterprise-api-reference/{version}`, {
            parameters: {
                path: {
                    account_id: e,
                    version: `latest`
                }
            }
        }) : m,
        enabled: !!e
    })
}));

function E() {
    let e = document.body.style.overflow;
    return document.body.style.overflow = `scroll`, () => {
        document.body.style.overflow = e
    }
}

function D(e) {
    return e.currentWorkspace
}
var O, k, A, j, M, N, P = e((() => {
    l(), O = _(), b(), S(), T(), i(), r(), y(), h(), k = t(p()), A = u(), j = () => [{
        title: `OpenAI Admin API Reference`
    }, {
        name: `robots`,
        content: `noindex, nofollow`
    }], M = ({
        serverLoader: e
    }) => e(), N = f(function() {
        "use forget";
        let e = (0, O.c)(14),
            t = c(D),
            r = o() ? t != null : void 0,
            i;
        e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (i = [], e[0] = i) : i = e[0], (0, k.useEffect)(E, i);
        let a, s;
        e[1] === r ? (a = e[2], s = e[3]) : (a = () => {
            r !== void 0 && n.logStructuredEvent(`CompliancePlatformLogsDocumentationViewed`, {
                hasSpecPagePrivileges: r
            })
        }, s = [r], e[1] = r, e[2] = a, e[3] = s), (0, k.useEffect)(a, s);
        let l = t?.id,
            u;
        e[4] === l ? u = e[5] : (u = w(l), e[4] = l, e[5] = u);
        let {
            data: f
        } = d(u), p = r === !0, m;
        e[6] === p ? m = e[7] : (m = {
            enabled: p
        }, e[6] = p, e[7] = m);
        let {
            data: h,
            isLoading: g
        } = x(m), _;
        e[8] !== h || e[9] !== f ? (_ = v(f, h), e[8] = h, e[9] = f, e[10] = _) : _ = e[10];
        let y = _;
        if (r !== !0 || !t) return null;
        let b;
        return e[11] !== g || e[12] !== y ? (b = !g && (0, A.jsx)(C, {
            audience: `internal`,
            spec: y
        }), e[11] = g, e[12] = y, e[13] = b) : b = e[13], b
    })
}));
e((() => {
    P()
}))();
export {
    M as clientLoader, N as
    default, j as meta
};
//# sourceMappingURL=admin_.api-reference-hidmkeyr.js.map