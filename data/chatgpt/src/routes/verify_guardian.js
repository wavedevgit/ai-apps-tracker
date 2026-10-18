const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/f21b234b-ivk3254dnrpbp8ud.js", "assets/f025431a-ehagpvg3m4e1cduv.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ant as n,
    Dit as r,
    L8 as i,
    Nrt as a,
    Prt as o,
    R8 as s,
    Sot as c,
    X$ as l,
    a7 as u,
    iy as d,
    kit as f,
    knt as p,
    l7 as m,
    qv as h,
    ry as g,
    u1 as _,
    yot as v
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as y,
    Bn as b,
    Pt as x,
    Ut as S,
    Vn as C,
    cn as w,
    ln as T,
    wn as E
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $st as D,
    Qst as O,
    Xst as k
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    a as A,
    i as j,
    o as M,
    s as N
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
var P, F, I, L = e((() => {
    m(), c(), i(), D(), _(), T(), P = () => w(async () => {
        let {
            default: e
        } = await import(`./f21b234b-ivk3254dnrpbp8ud.js`).then(e => t(e.default));
        return {
            default: e
        }
    }, __vite__mapDeps([0, 1])).then(({
        default: e
    }) => e.Client), F = v(() => {
        let e = l();
        return s({
            mutationFn: async () => {
                let t = {};
                return e && (t[`Chatgpt-Account-Id`] = e.id), await u.safePost(`/compliance/guardian_verification/persona/inquiries`, {
                    additionalHeaders: t,
                    requestBody: {
                        enabled: !0
                    }
                })
            }
        })
    }), I = e => {
        let t = null,
            {
                onInquiryCreationError: n,
                ...r
            } = e;

        function i() {
            t?.destroy(), t = null
        }
        async function a() {
            P().catch(() => {});
            let e = await F().mutate();
            if (e.isError || !e.data) {
                n?.();
                return
            }
            let {
                id: a
            } = e.data;
            t = await O({
                ...r,
                inquiryId: a,
                onCancel: (...e) => {
                    i(), r?.onCancel?.(...e)
                },
                onComplete: (...e) => {
                    i(), r?.onComplete?.(...e)
                }
            }), t.open(), k(t)
        }
        return a(), () => i()
    }
}));

function R(e) {
    return typeof e == `object` && !!e && `has_verified_age_or_dob` in e
}
var z, B, V, H, U, W, G = e((() => {
    y(), z = E(), d(), L(), a(), f(), p(), m(), B = t(C()), M(), V = b(), H = A, U = N, W = S(function() {
        "use forget";
        let e = (0, z.c)(5),
            t;
        e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = o(), e[0] = t) : t = e[0];
        let i = t,
            a = (0, B.useRef)(!1),
            s = x(),
            c, l;
        e[1] === s ? (c = e[2], l = e[3]) : (c = () => {
            if (!i || a.current) return;
            a.current = !0;
            let e = !0,
                t = null,
                o = () => {
                    if (!e) return;
                    let t = g(h.Account);
                    s({
                        pathname: `/`,
                        ...t
                    }, {
                        replace: !0
                    })
                };
            return (async () => {
                let i = !1;
                try {
                    let e = await u.safeGet(`/settings/is_adult`);
                    R(e) && (i = !!e.has_verified_age_or_dob)
                } catch (e) {
                    let t = e;
                    n.error(`Failed to fetch guardian verification eligibility`, {
                        error: t
                    }), o();
                    return
                }
                if (e) {
                    if (i) {
                        o();
                        return
                    }
                    t = I({
                        onInquiryCreationError: o
                    }), r.addAction(`chatgpt.web.verifyGuardian.startPersonaGuardianVerificationFlow`)
                }
            })(), () => {
                e = !1, t?.()
            }
        }, l = [i, s], e[1] = s, e[2] = c, e[3] = l), (0, B.useEffect)(c, l);
        let d;
        return e[4] === Symbol.for(`react.memo_cache_sentinel`) ? (d = (0, V.jsx)(j, {}), e[4] = d) : d = e[4], d
    })
}));
e((() => {
    G()
}))();
export {
    H as clientLoader, W as
    default, U as shouldRevalidate
};
//# sourceMappingURL=verify_guardian-ewqejs5s.js.map