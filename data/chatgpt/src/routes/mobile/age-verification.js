import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Dit as n,
    X$ as r,
    a7 as i,
    dit as a,
    fz as o,
    kit as s,
    l7 as c,
    u1 as l,
    uz as u,
    vit as d
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as f,
    At as p,
    Bn as m,
    Ut as h,
    Vn as g,
    wn as _
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    $st as v,
    Qst as y,
    c as b,
    s as x
} from "./conversation-small-fym1zmu9zimymmm1.js";

function S(e) {
    "use forget";
    let t = (0, D.c)(7),
        {
            inquiryId: o
        } = e,
        s = (0, O.useRef)(!1),
        c = (0, O.useRef)(w),
        l;
    t[0] === o ? l = t[1] : (l = (e, t) => {
        if (s.current) return;
        s.current = !0, c.current();
        let n = T(o, e, t);
        window.location.replace(n)
    }, t[0] = o, t[1] = l);
    let d = l,
        f, p;
    t[2] !== o || t[3] !== d ? (f = () => {
        if (typeof window > `u`) return () => {
            c.current()
        };
        let e = !0;
        return (async () => {
            let t = j(),
                s = t ? [t] : void 0;
            try {
                let l = r(),
                    u = {};
                if (l && (u[a] = l.id), await i.safeGet(`/compliance/age_verification/persona/inquiries/{inquiry_id}/status`, {
                        parameters: {
                            path: {
                                inquiry_id: o
                            }
                        },
                        additionalHeaders: u
                    }), !e) return;
                let f = await y({
                    inquiryId: o,
                    messageTargetOrigin: t,
                    frameAncestors: s,
                    onComplete: e => {
                        let {
                            status: t
                        } = e;
                        n.addAction(`persona.age_verification.webview.complete`, {
                            status: t
                        }), d(`success`)
                    },
                    onCancel: () => {
                        n.addAction(`persona.age_verification.webview.cancelled`), d(`cancelled`)
                    },
                    onError: e => {
                        n.addError(e, {
                            area: `persona.age_verification.webview`,
                            action: `error`
                        }), d(`error`, {
                            [F]: E(e.code),
                            [I]: E(e.status)
                        })
                    }
                });
                if (!e) {
                    f.destroy();
                    return
                }
                c.current = () => {
                    f.destroy(), c.current = C
                }
            } catch (e) {
                let t = e;
                n.addError(t, {
                    area: `persona.age_verification.webview`,
                    action: `authorize_or_start`
                }), d(`error`)
            }
        })(), () => {
            e = !1, c.current()
        }
    }, p = [o, d], t[2] = o, t[3] = d, t[4] = f, t[5] = p) : (f = t[4], p = t[5]), (0, O.useEffect)(f, p);
    let m;
    return t[6] === Symbol.for(`react.memo_cache_sentinel`) ? (m = (0, k.jsx)(`main`, {
        className: `bg-token-bg-primary text-token-text-primary flex min-h-screen flex-col`,
        children: (0, k.jsx)(`div`, {
            className: `flex flex-1 items-center justify-center`,
            children: (0, k.jsx)(u, {
                className: `h-12 w-12`
            })
        })
    }), t[6] = m) : m = t[6], m
}

function C() {}

function w() {}

function T(e, t, n) {
    let r = j() ?? A,
        i = new URL(M, r);
    if (i.searchParams.set(N, t), i.searchParams.set(P, e), n)
        for (let [e, t] of Object.entries(n)) t && i.searchParams.set(e, t);
    return i.toString()
}

function E(e) {
    if (e == null) return;
    let t = String(e).trim();
    return t === `` ? void 0 : t
}
var D, O, k, A, j, M, N, P, F, I, L = e((() => {
    D = _(), o(), v(), l(), s(), d(), c(), O = t(g()), k = m(), A = `https://chatgpt.com`, j = () => {
        if (!(typeof window > `u`)) return window.location.origin
    }, M = `/mobile/age-verification/result`, N = `status`, P = `inquiry_id`, F = `error_code`, I = `error_status`
}));

function R(e) {
    let t = new URL(e.url).searchParams.get(P);
    if (!t) throw new Response(`Missing inquiryId`, {
        status: 400
    });
    return t
}
var z, B, V, H, U = e((() => {
    f(), z = _(), L(), x(), B = m(), V = e => (b(), {
        inquiryId: R(e.request)
    }), H = h(function() {
        "use forget";
        let e = (0, z.c)(2),
            {
                inquiryId: t
            } = p(),
            n;
        return e[0] === t ? n = e[1] : (n = (0, B.jsx)(S, {
            inquiryId: t
        }), e[0] = t, e[1] = n), n
    })
}));
e((() => {
    U()
}))();
export {
    V as clientLoader, H as
    default
};
//# sourceMappingURL=mobile.age-verification-jgxdm228.js.map