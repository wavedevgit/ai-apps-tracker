import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $R as n,
    $st as r,
    AR as i,
    B0 as a,
    Bnt as o,
    E0 as s,
    FR as c,
    Gnt as l,
    KR as u,
    Knt as d,
    QR as f,
    T0 as p,
    Unt as m,
    VR as h,
    Vnt as g,
    WR as _,
    XR as v,
    YR as y,
    ZR as b,
    f0 as ee,
    ict as x,
    nct as S,
    rct as te,
    u0 as ne,
    z0 as C
} from "./4813494d-ed29bs6yiwucn7st.js";
import {
    Bn as w,
    Vn as T,
    o as E,
    wn as D
} from "./2340486e-oc6d2eodbcrmxur3.js";

function O(e, t, n) {
    let r = m(e).value;
    return te(r, t) ? r : n
}
var k = e((() => {
        d(), S()
    })),
    A, j, M, N, P, F, I, L = e((() => {
        A = D(), j = t(T()), M = w(), N = e => e ? {
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
    return O(J[e].google, b, {
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
    return O(J[e].microsoft, b, {
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
    return O(J[e].apple, b, {
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
    return O(J[e].email, b, {
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
    t[0] !== n || t[1] !== r.phone_number || t[2] !== i ? (a = O(r.phone_number, b, {
        name: `phone_number`,
        enabled: i,
        tempDisabled: !1,
        kind: `username`,
        loginStrategy: n
    }), t[0] = n, t[1] = r.phone_number, t[2] = i, t[3] = a) : a = t[3];
    let s = a,
        c, u;
    if (t[4] !== s || t[5] !== n) {
        u = Symbol.for(`react.early_return_sentinel`);
        bb0: {
            let e = l(`183390215`),
                r;t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (r = o(`4012051055`), t[8] = r) : r = t[8];
            let i = r;
            if (n !== `new_user`) {
                u = s;
                break bb0
            }
            let a = i || e.get(`signup_allow_phone_from_login_web`, !1);c = s.enabled && a && !e.get(`in_phone_signup_holdout_from_login_web`, !1)
        }
        t[4] = s, t[5] = n, t[6] = c, t[7] = u
    } else c = t[6], u = t[7];
    if (u !== Symbol.for(`react.early_return_sentinel`)) return u;
    let d = c,
        f;
    return t[9] !== d || t[10] !== s ? (f = {
        ...s,
        enabled: d
    }, t[9] = d, t[10] = s, t[11] = f) : f = t[11], f
}

function U(e) {
    "use forget";
    let t = (0, W.c)(4),
        {
            loginStrategy: n
        } = e,
        r;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = l(`3233347819`).get(`should_hide_microsoft_sso`, !1), t[0] = r) : r = t[0];
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
        u = {
            ...c,
            enabled: c.enabled && (o || !i)
        },
        d = B({
            loginStrategy: n
        }),
        f = V({
            loginStrategy: n
        }),
        p;
    t[2] === n ? p = t[3] : (p = {
        loginStrategy: n
    }, t[2] = n, t[3] = p);
    let m = H(p),
        {
            options: h
        } = O(`489084288`, q, {
            options: K
        });
    return {
        googleOption: s,
        microsoftOption: u,
        appleOption: d,
        emailOption: f,
        phoneNumberOption: m,
        optionsForDisplay: [s, u, d, f, m].filter(e => e && e.enabled && h.includes(e.name)).sort((e, t) => h.indexOf(e.name) - h.indexOf(t.name))
    }
}
var W, G, K, q, J, Y = e((() => {
    W = D(), d(), S(), n(), k(), G = `microsoft_sso`, K = [`google`, `apple`, `microsoft`, `email`, `phone_number`], q = x({
        options: r(f)
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
    y()
}));

function Q(e) {
    return typeof e == `function` ? e() : e
}

function re(e, t) {
    return async function(n, r) {
        let i = ne(C().searchParams);
        r(i);
        try {
            await g()
        } catch {}
        let a = e == null ? p() : Q(e);
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
        connection: v[t]
    }, () => {
        c(n, X(t), i ?? (r === h.ACCESS_FLOW_ENTRY_POINT_LOGIN_MODAL ? _.ACCESS_FLOW_PAGE_TYPE_CHATGPT_WEB_LOGIN_MODAL : _.ACCESS_FLOW_PAGE_TYPE_CHATGPT_WEB_LOG_BACK_IN_MODAL))
    })
}
var $, ae = e((() => {
    i(), s(), ee(), Z(), a(), d(), y(), $ = E(), n()
}));
export {
    Z as a, U as c, L as d, F as f, ie as i, I as l, k as m, ae as n, X as o, O as p, Q as r, Y as s, re as t, N as u
};
//# sourceMappingURL=c982bafe-iwu294qc3prrakt8.js.map