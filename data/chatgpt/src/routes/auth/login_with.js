import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as n,
    Bn as r,
    Nrt as i,
    Prt as a,
    Rn as o,
    UL as s,
    Vn as c,
    WL as l,
    k1 as u,
    zn as d
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as f,
    Ht as p,
    Pt as m,
    Ut as h,
    Vn as g,
    jt as _,
    wn as v
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Hbt as y,
    Ubt as b
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    cd as x,
    dd as S,
    pd as C,
    ud as w
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    n as T,
    r as E
} from "./dbe36ae7-j3qztvon04484zj9.js";
import {
    n as D,
    t as O
} from "./877ce4d3-d0zlv3naj8f9x8q2.js";
var k, A, j, M, N, P = e((() => {
    f(), k = v(), D(), y(), C(), w(), T(), u(), i(), c(), o(), s(), A = t(g()), j = `ext-web-mobile-direct-social-login`, M = new Set([`apple`, `google-oauth2`, `windowslive`]), N = h(function() {
        "use forget";
        let e = (0, k.c)(6),
            [t] = p(),
            {
                hash: i
            } = _(),
            o = m(),
            {
                signInForReauth: s
            } = b(),
            c = (0, A.useRef)(!1),
            u, f;
        return e[0] !== i || e[1] !== o || e[2] !== t || e[3] !== s ? (u = () => {
            if (c.current) return;
            if (c.current = !0, t.get(`resume_daybreak`) === `true`) {
                s({
                    callbackUrl: x,
                    authorizationParams: {
                        post_login_setup_daybreak_access: `true`,
                        originator: S
                    }
                });
                return
            }
            let e = t.get(`login_hint`),
                u = t.get(`connection`),
                f = t.get(`callback_path`),
                p = f;
            if (r(t)?.kind === `opaque`) {
                p ??= `/`, l(p) || (p = `/`), i && !p.includes(`#`) && (p += i);
                let e = new URL(p, window.location.origin);
                if (d(e.searchParams), p = `${e.pathname}${e.search}${e.hash}`, a()) {
                    o(p, {
                        replace: !0
                    });
                    return
                }
            }
            let m = u != null && M.has(u) && t.get(j) === `true`;
            E(f), n({
                fallbackScreenHint: O(t.get(`screen_hint`)),
                useFallbackScreenHint: !0,
                ...p ? {
                    callbackUrl: p
                } : void 0,
                ...e || u ? {
                    additionalAuthParams: {
                        ...e ? {
                            login_hint: e
                        } : {},
                        ...u ? {
                            connection: u
                        } : {},
                        ...m ? {
                            [j]: `true`
                        } : {}
                    }
                } : {},
                skipLoginModal: !0
            })
        }, f = [i, o, t, s], e[0] = i, e[1] = o, e[2] = t, e[3] = s, e[4] = u, e[5] = f) : (u = e[4], f = e[5]), (0, A.useEffect)(u, f), null
    })
}));
e((() => {
    P()
}))();
export {
    N as
    default
};
//# sourceMappingURL=auth.login_with-gvtfj4wj.js.map