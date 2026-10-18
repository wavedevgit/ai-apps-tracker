import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Ait as n,
    B6 as r,
    DG as i,
    IG as a,
    JW as o,
    LG as s,
    MG as c,
    NG as l,
    Pit as u,
    SG as d,
    X$ as f,
    ZW as p,
    a7 as m,
    dG as h,
    eG as g,
    eq as _,
    i5 as v,
    l7 as y,
    o1 as b,
    oq as x,
    u1 as S
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as C,
    Bn as w,
    Ht as T,
    Ut as E,
    Vn as D,
    lt as O,
    wn as k
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Cp as A,
    Dp as j,
    Ep as M,
    Op as N,
    dl as P,
    fl as F,
    kp as I,
    ul as L,
    wp as R
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    n as z,
    t as B
} from "./dbe36ae7-j3qztvon04484zj9.js";

function V(e) {
    let t = e.getAll(`token`);
    if (e.size !== 1 || t.length !== 1) return null;
    let n = t[0];
    return n != null && J.test(n) ? n : null
}
async function H(e) {
    let t = L();
    if (t == null) throw Error(`Missing paid image handoff account`);
    let {
        prompt: r,
        hints: i,
        attribution: a
    } = await m.safePost(`/paid_image_handoff/redeem`, {
        requestBody: {
            token: e
        },
        authOption: n.Required
    });
    if (!r.trim() || i !== _.PictureV2 || !F(t)) throw Error(`Invalid paid image handoff response`);
    return {
        prompt: r,
        attribution: a,
        userId: t.userId,
        accountId: t.accountId
    }
}

function U() {
    if (!d()) return !0;
    let e = f() ?? b();
    if (e == null) return;
    if (e.getWorkspaceId() == null) return !0;
    let t = c(a.WorkOnlyMode);
    return t == null ? !l().isError && void 0 : !t
}

function W({
    prompt: e,
    attribution: t,
    userId: n,
    accountId: r
}) {
    if (!F({
            userId: n,
            accountId: r
        })) throw Error(`Paid image handoff account changed`);
    if (U() !== !0) throw Error(`Paid image handoff requires Chat access`);
    if (!R(N.PaidImageHandoff, {
            content: e,
            systemHints: [_.PictureV2],
            replayOwner: {
                userId: n,
                accountId: r
            }
        }).success) throw Error(`Unable to prepare image handoff replay`);
    g(o.Chat);
    let i = new URLSearchParams({
        [M.PaidImageHandoff]: j.Submit
    });
    for (let e of Object.keys(t)) i.set(e, t[e]);
    return `/?${i}`
}
var G, K, q, J, Y, X = e((() => {
    C(), G = k(), z(), P(), s(), A(), I(), x(), i(), r(), S(), p(), h(), u(), y(), K = t(D()), q = w(), J = /^[A-Za-z0-9_-]{43}$/, Y = E(function() {
        "use forget";
        let e = (0, G.c)(7),
            [t] = T(),
            n;
        e[0] === t ? n = e[1] : (n = V(t), e[0] = t, e[1] = n);
        let r = n,
            i = v(U),
            a = (0, K.useRef)(null),
            o, s;
        if (e[2] !== i || e[3] !== r ? (o = () => {
                if (B(), r == null || i !== !0) return;
                a.current?.token !== r && (a.current = {
                    token: r,
                    promise: H(r)
                });
                let e = !1;
                return a.current.promise.then(t => {
                    if (e) return;
                    let n = W(t);
                    e || window.location.replace(n)
                }).catch(() => {
                    e || window.location.replace(`/?paid_image_handoff_carryover=unavailable`)
                }), () => {
                    e = !0
                }
            }, s = [r, i], e[2] = i, e[3] = r, e[4] = o, e[5] = s) : (o = e[4], s = e[5]), (0, K.useEffect)(o, s), r == null || i === !1) {
            let t;
            return e[6] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, q.jsx)(O, {
                to: `/?paid_image_handoff_carryover=unavailable`,
                replace: !0
            }), e[6] = t) : t = e[6], t
        }
        return null
    })
}));
e((() => {
    X()
}))();
export {
    Y as
    default
};
//# sourceMappingURL=paid-image-handoff-m1r3ufv3.js.map