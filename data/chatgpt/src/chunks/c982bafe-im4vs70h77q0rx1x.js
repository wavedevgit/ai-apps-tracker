import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $R as n,
    D0 as r,
    GR as i,
    H0 as a,
    HR as o,
    IR as s,
    O0 as c,
    QR as l,
    Qnt as u,
    V0 as d,
    XR as f,
    Xnt as p,
    Ynt as m,
    ZR as h,
    cct as g,
    dct as _,
    ert as v,
    ez as y,
    f0 as b,
    fct as x,
    jR as S,
    m0 as C,
    pct as w,
    qR as T,
    trt as E
} from "./4813494d-lxa3wniynbx9ka2a.js";
import {
    Bn as D,
    Vn as ee,
    o as te,
    wn as O
} from "./2340486e-i7pjxgdhv0bs6apg.js";

function k(e, t, n) {
    let r = u(e).value;
    return x(r, t) ? r : n
}
var A = e((() => {
        E(), _()
    })),
    j, M, N, P, F, I, L, ne = e((() => {
        j = O(), M = t(ee()), N = D(), P = e => e ? {
            controlHeightClassName: `h-11`,
            inputHeightClassName: `h-11!`
        } : {
            controlHeightClassName: `h-13`,
            inputHeightClassName: `h-13!`
        }, F = (0, M.createContext)(void 0), I = () => {
            "use forget";
            let e = (0, M.useContext)(F);
            if (!e) throw Error(`useAuthFormStyleContext must be used within AuthFormStyleProvider`);
            return e
        }, L = e => {
            "use forget";
            let t = (0, j.c)(3),
                {
                    value: n,
                    children: r
                } = e,
                i;
            return t[0] !== r || t[1] !== n ? (i = (0, N.jsx)(F.Provider, {
                value: n,
                children: r
            }), t[0] = r, t[1] = n, t[2] = i) : i = t[2], i
        }
    }));

function R({
    loginStrategy: e
}) {
    return k(J[e].google, l, {
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
    return k(J[e].microsoft, l, {
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
    return k(J[e].apple, l, {
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
    return k(J[e].email, l, {
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
    t[0] !== n || t[1] !== r.phone_number || t[2] !== i ? (a = k(r.phone_number, l, {
        name: `phone_number`,
        enabled: i,
        tempDisabled: !1,
        kind: `username`,
        loginStrategy: n
    }), t[0] = n, t[1] = r.phone_number, t[2] = i, t[3] = a) : a = t[3];
    let o = a,
        s, c;
    if (t[4] !== o || t[5] !== n) {
        c = Symbol.for(`react.early_return_sentinel`);
        bb0: {
            let e = v(`183390215`),
                r;t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (r = m(`4012051055`), t[8] = r) : r = t[8];
            let i = r;
            if (n !== `new_user`) {
                c = o;
                break bb0
            }
            let a = i || e.get(`signup_allow_phone_from_login_web`, !1);s = o.enabled && a && !e.get(`in_phone_signup_holdout_from_login_web`, !1)
        }
        t[4] = o, t[5] = n, t[6] = s, t[7] = c
    } else s = t[6], c = t[7];
    if (c !== Symbol.for(`react.early_return_sentinel`)) return c;
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
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = v(`3233347819`).get(`should_hide_microsoft_sso`, !1), t[0] = r) : r = t[0];
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
        } = k(`489084288`, q, {
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
    W = O(), E(), _(), y(), A(), G = `microsoft_sso`, K = [`google`, `apple`, `microsoft`, `email`, `phone_number`], q = w({
        options: g(n)
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
            return T.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_GOOGLE;
        case `microsoft`:
            return T.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_MICROSOFT;
        case `apple`:
            return T.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_APPLE;
        default:
            return T.ACCESS_FLOW_USER_ACTION_TYPE_UNSPECIFIED
    }
}
var Z = e((() => {
    f()
}));

function Q(e) {
    return typeof e == `function` ? e() : e
}

function re(e, t) {
    return async function(n, i) {
        let a = b(d().searchParams);
        i(a);
        try {
            await p()
        } catch {}
        let o = e == null ? r() : Q(e);
        return (0, $.signIn)(a, o ? {
            callbackUrl: o
        } : {}, {
            prompt: `login`,
            ...t,
            ...n
        })
    }
}
async function ie(e, t, n, r, a) {
    await e({
        screen_hint: `login_or_signup`,
        connection: h[t]
    }, () => {
        s(n, X(t), a ?? (r === o.ACCESS_FLOW_ENTRY_POINT_LOGIN_MODAL ? i.ACCESS_FLOW_PAGE_TYPE_CHATGPT_WEB_LOGIN_MODAL : i.ACCESS_FLOW_PAGE_TYPE_CHATGPT_WEB_LOG_BACK_IN_MODAL))
    })
}
var $, ae = e((() => {
    S(), c(), C(), Z(), a(), E(), f(), $ = te(), y()
}));
export {
    Z as a, U as c, ne as d, I as f, ie as i, L as l, A as m, ae as n, X as o, k as p, Q as r, Y as s, re as t, P as u
};
//# sourceMappingURL=c982bafe-im4vs70h77q0rx1x.js.map