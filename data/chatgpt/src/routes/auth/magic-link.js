import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AT as n,
    B1 as r,
    Nrt as i,
    Q1 as a,
    Trt as o,
    U1 as s,
    UL as c,
    V1 as l,
    WL as u,
    X1 as d,
    bit as f,
    kT as p,
    q1 as m,
    yit as h,
    z1 as g
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as _,
    Bn as v,
    Ht as y,
    Ln as b,
    Nn as x,
    Pt as S,
    Rn as C,
    Ut as w,
    Vn as T,
    o as E,
    wn as D
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    JAt as O,
    qAt as k
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    a as A,
    n as j,
    r as M,
    t as N
} from "./9bbac052-hmfqc3w40261iizy.js";
import {
    n as P,
    r as F
} from "./dbe36ae7-j3qztvon04484zj9.js";

function I() {
    "use forget";
    let e = (0, R.c)(21),
        t = S(),
        n = O(),
        [r] = y(),
        i = (0, B.useRef)(!1),
        [a, s] = (0, B.useState)(`loading`),
        c;
    e[0] === r ? c = e[1] : (c = L(r), e[0] = r, e[1] = c);
    let u = c,
        f, _;
    e[2] !== u || e[3] !== n || e[4] !== r ? (f = () => {
        if (i.current) return;
        i.current = !0, F(u), m();
        let e = l();
        (0, z.signIn)(g(r), {
            callbackUrl: u
        }, {
            [H]: `true`,
            ...d(h()),
            [o]: e,
            prompt: `login`,
            screen_hint: `login_or_signup`
        }).catch(() => {
            n() && s(`error`)
        })
    }, _ = [u, n, r], e[2] = u, e[3] = n, e[4] = r, e[5] = f, e[6] = _) : (f = e[5], _ = e[6]), (0, B.useEffect)(f, _);
    let v = a === `error`,
        b;
    e[7] === Symbol.for(`react.memo_cache_sentinel`) ? (b = (0, V.jsx)(M, {}), e[7] = b) : b = e[7];
    let C = v ? W.errorTitle : W.loadingTitle,
        w;
    e[8] === C ? w = e[9] : (w = (0, V.jsx)(`div`, {
        className: `mb-2 text-center text-lg`,
        children: (0, V.jsx)(x, {
            ...C
        })
    }), e[8] = C, e[9] = w);
    let T = v ? W.errorBody : W.loadingBody,
        E;
    e[10] === T ? E = e[11] : (E = (0, V.jsx)(`div`, {
        className: `mb-5 text-center`,
        children: (0, V.jsx)(x, {
            ...T
        })
    }), e[10] = T, e[11] = E);
    let D;
    e[12] !== w || e[13] !== E ? (D = (0, V.jsxs)(`div`, {
        "aria-atomic": `true`,
        "aria-live": `polite`,
        role: `status`,
        children: [w, E]
    }), e[12] = w, e[13] = E, e[14] = D) : D = e[14];
    let k;
    e[15] !== v || e[16] !== t ? (k = v && (0, V.jsx)(p, {
        as: `button`,
        color: `secondary`,
        onClick: () => t(`/auth/login`, {
            replace: !0
        }),
        children: (0, V.jsx)(x, {
            ...W.goBackButton
        })
    }), e[15] = v, e[16] = t, e[17] = k) : k = e[17];
    let A;
    return e[18] !== D || e[19] !== k ? (A = (0, V.jsx)(N, {
        isStorageComplianceEnabled: !1,
        children: (0, V.jsxs)(j, {
            $as: `main`,
            children: [b, D, k]
        })
    }), e[18] = D, e[19] = k, e[20] = A) : A = e[20], A
}

function L(e) {
    let t = e.get(`callback_path`) ?? e.get(`next`) ?? `/`;
    return u(t) ? t : `/`
}
var R, z, B, V, H, U, W, G = e((() => {
    _(), R = D(), n(), A(), P(), s(), r(), i(), a(), f(), c(), k(), z = E(), B = t(T()), C(), V = v(), H = `standalone_magic_link`, U = w(function() {
        "use forget";
        let e = (0, R.c)(1),
            t;
        return e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = (0, V.jsx)(I, {}), e[0] = t) : t = e[0], t
    }), W = b({
        loadingTitle: {
            id: `AuthMagicLink.loadingTitle`,
            defaultMessage: `Checking your link`
        },
        loadingBody: {
            id: `AuthMagicLink.loadingBody`,
            defaultMessage: `This should only take a moment.`
        },
        errorTitle: {
            id: `AuthMagicLink.errorTitle`,
            defaultMessage: `This link is unavailable`
        },
        errorBody: {
            id: `AuthMagicLink.errorBody`,
            defaultMessage: `This link may be expired, already used, or invalid. Start again to get another link.`
        },
        goBackButton: {
            id: `AuthMagicLink.goBackButton`,
            defaultMessage: `Go back`
        }
    })
}));
e((() => {
    G()
}))();
export {
    U as
    default
};
//# sourceMappingURL=auth.magic-link-oskjqgws.js.map