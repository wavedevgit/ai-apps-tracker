import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $R as n,
    AR as r,
    B0 as i,
    E0 as a,
    FR as o,
    Gnt as s,
    Hnt as c,
    Jnt as l,
    KR as u,
    QR as d,
    T0 as f,
    Unt as p,
    VR as m,
    WR as h,
    XR as g,
    YR as _,
    ZR as v,
    act as y,
    f0 as b,
    ict as x,
    oct as ee,
    qnt as S,
    tct as C,
    u0 as w,
    z0 as T
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Hn as E,
    Tn as D,
    Vn as te,
    o as ne
} from "./2340486e-komxp8tzs51ny4jj.js";

function O(e, t, n) {
    let r = s(e).value;
    return y(r, t) ? r : n
}
var k = e((() => {
        l(), x()
    })),
    A, j, M, N, P, F, I, L = e((() => {
        A = D(), j = t(E()), M = te(), N = e => e ? {
            controlHeightClassName: `h-11`,
            inputHeightClassName: `h-11!`
        } : {
            controlHeightClassName: `h-13`,
            inputHeightClassName: `h-13!`
        }, P = (0, j.createContext)(void 0), F = () => {
            "use forget";
            let e = (0, j.useContext)(P);
            if (!e) throw Error(`useAuthFormStyleContext must be used within AuthFormStyleProvider`);
            return e
        }, I = e => {
            "use forget";
            let t = (0, A.c)(3),
                {
                    value: n,
                    children: r
                } = e,
                i;
            return t[0] !== r || t[1] !== n ? (i = (0, M.jsx)(P.Provider, {
                value: n,
                children: r
            }), t[0] = r, t[1] = n, t[2] = i) : i = t[2], i
        }
    }));

function R({
    loginStrategy: e
}) {
    return O(J[e].google, v, {
        name: `google`,
        enabled: !0,
        tempDisabled: !1,
        kind: `social`,
        loginStrategy: e
    })
}

function z({
    loginStrategy: e
}) {
    return O(J[e].microsoft, v, {
        name: `microsoft`,
        enabled: !0,
        tempDisabled: !1,
        kind: `social`,
        loginStrategy: e
    })
}

function B({
    loginStrategy: e
}) {
    return O(J[e].apple, v, {
        name: `apple`,
        enabled: !0,
        tempDisabled: !1,
        kind: `social`,
        loginStrategy: e
    })
}

function V({
    loginStrategy: e
}) {
    return O(J[e].email, v, {
        name: `email`,
        enabled: !0,
        tempDisabled: !1,
        kind: `username`,
        loginStrategy: e
    })
}

function H(e) {
    "use forget";
    let t = (0, W.c)(12),
        {
            loginStrategy: n
        } = e,
        r = J[n],
        i = n === `existing_user`,
        a;
    t[0] !== n || t[1] !== r.phone_number || t[2] !== i ? (a = O(r.phone_number, v, {
        name: `phone_number`,
        enabled: i,
        tempDisabled: !1,
        kind: `username`,
        loginStrategy: n
    }), t[0] = n, t[1] = r.phone_number, t[2] = i, t[3] = a) : a = t[3];
    let o = a,
        s, l;
    if (t[4] !== o || t[5] !== n) {
        l = Symbol.for(`react.early_return_sentinel`);
        bb0: {
            let e = S(`183390215`),
                r;t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (r = c(`4012051055`), t[8] = r) : r = t[8];
            let i = r;
            if (n !== `new_user`) {
                l = o;
                break bb0
            }
            let a = i || e.get(`signup_allow_phone_from_login_web`, !1);s = o.enabled && a && !e.get(`in_phone_signup_holdout_from_login_web`, !1)
        }
        t[4] = o, t[5] = n, t[6] = s, t[7] = l
    } else s = t[6], l = t[7];
    if (l !== Symbol.for(`react.early_return_sentinel`)) return l;
    let u = s,
        d;
    return t[9] !== u || t[10] !== o ? (d = {
        ...o,
        enabled: u
    }, t[9] = u, t[10] = o, t[11] = d) : d = t[11], d
}

function U(e) {
    "use forget";
    let t = (0, W.c)(4),
        {
            loginStrategy: n
        } = e,
        r;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = S(`3233347819`).get(`should_hide_microsoft_sso`, !1), t[0] = r) : r = t[0];
    let i = r,
        a;
    bb0: {
        let e;t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (e = new URLSearchParams(window.location.search).get(G), t[1] = e) : e = t[1],
        a = e === `1`
    }
    let o = a,
        s = R({
            loginStrategy: n
        }),
        c = z({
            loginStrategy: n
        }),
        l = {
            ...c,
            enabled: c.enabled && (o || !i)
        },
        u = B({
            loginStrategy: n
        }),
        d = V({
            loginStrategy: n
        }),
        f;
    t[2] === n ? f = t[3] : (f = {
        loginStrategy: n
    }, t[2] = n, t[3] = f);
    let p = H(f),
        {
            options: m
        } = O(`489084288`, q, {
            options: K
        });
    return {
        googleOption: s,
        microsoftOption: l,
        appleOption: u,
        emailOption: d,
        phoneNumberOption: p,
        optionsForDisplay: [s, l, u, d, p].filter(e => e && e.enabled && m.includes(e.name)).sort((e, t) => m.indexOf(e.name) - m.indexOf(t.name))
    }
}
var W, G, K, q, J, Y = e((() => {
    W = D(), l(), x(), n(), k(), G = `microsoft_sso`, K = [`google`, `apple`, `microsoft`, `email`, `phone_number`], q = ee({
        options: C(d)
    }), J = {
        existing_user: {
            google: `1341269548`,
            microsoft: `111706139`,
            apple: `730493191`,
            email: `734083401`,
            phone_number: `1165494509`
        },
        new_user: {
            google: `3866584409`,
            microsoft: `1119573454`,
            apple: `2197428282`,
            email: `2201018492`,
            phone_number: `424309338`
        }
    }
}));

function X(e) {
    switch (e) {
        case `google`:
            return u.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_GOOGLE;
        case `microsoft`:
            return u.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_MICROSOFT;
        case `apple`:
            return u.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_APPLE;
        default:
            return u.ACCESS_FLOW_USER_ACTION_TYPE_UNSPECIFIED
    }
}
var Z = e((() => {
    _()
}));

function Q(e) {
    return typeof e == `function` ? e() : e
}

function re(e, t) {
    return async function(n, r) {
        let i = w(T().searchParams);
        r(i);
        try {
            await p()
        } catch {}
        let a = e == null ? f() : Q(e);
        return (0, $.signIn)(i, a ? {
            callbackUrl: a
        } : {}, {
            prompt: `login`,
            ...t,
            ...n
        })
    }
}
async function ie(e, t, n, r, i) {
    await e({
        screen_hint: `login_or_signup`,
        connection: g[t]
    }, () => {
        o(n, X(t), i ?? (r === m.ACCESS_FLOW_ENTRY_POINT_LOGIN_MODAL ? h.ACCESS_FLOW_PAGE_TYPE_CHATGPT_WEB_LOGIN_MODAL : h.ACCESS_FLOW_PAGE_TYPE_CHATGPT_WEB_LOG_BACK_IN_MODAL))
    })
}
var $, ae = e((() => {
    r(), a(), b(), Z(), i(), l(), _(), $ = ne(), n()
}));
export {
    Z as a, U as c, L as d, F as f, ie as i, I as l, k as m, ae as n, X as o, O as p, Q as r, Y as s, re as t, N as u
};
//# sourceMappingURL=c982bafe-j7a7gyo0pstx91ux.js.map