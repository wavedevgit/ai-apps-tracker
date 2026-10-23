import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Act as n,
    C0 as r,
    Crt as i,
    Fct as a,
    I0 as o,
    IR as s,
    L0 as c,
    Nct as l,
    Pct as u,
    QR as d,
    Srt as f,
    VR as p,
    X0 as m,
    YR as h,
    Z0 as g,
    _rt as ee,
    az as _,
    brt as te,
    ez as v,
    iz as y,
    oz as b,
    rz as x,
    sz as S,
    vrt as ne,
    x0 as C
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as w,
    Vn as T,
    o as E,
    wn as D
} from "./2340486e-i7pjxgdhv0bs6apg.js";

function O(e, t, n) {
    let r = te(e).value;
    return u(r, t) ? r : n
}
var k = e((() => {
        i(), l()
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
    return O(J[e].google, _, {
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
    return O(J[e].microsoft, _, {
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
    return O(J[e].apple, _, {
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
    return O(J[e].email, _, {
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
    t[0] !== n || t[1] !== r.phone_number || t[2] !== i ? (a = O(r.phone_number, _, {
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
            let e = f(`183390215`),
                r;t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (r = ee(`4012051055`), t[8] = r) : r = t[8];
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
    let l = s,
        u;
    return t[9] !== l || t[10] !== o ? (u = {
        ...o,
        enabled: l
    }, t[9] = l, t[10] = o, t[11] = u) : u = t[11], u
}

function U(e) {
    "use forget";
    let t = (0, W.c)(4),
        {
            loginStrategy: n
        } = e,
        r;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = f(`3233347819`).get(`should_hide_microsoft_sso`, !1), t[0] = r) : r = t[0];
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
        microsoftOption: l,
        appleOption: u,
        emailOption: d,
        phoneNumberOption: m,
        optionsForDisplay: [s, l, u, d, m].filter(e => e && e.enabled && h.includes(e.name)).sort((e, t) => h.indexOf(e.name) - h.indexOf(t.name))
    }
}
var W, G, K, q, J, Y = e((() => {
    W = D(), i(), l(), S(), k(), G = `microsoft_sso`, K = [`google`, `apple`, `microsoft`, `email`, `phone_number`], q = a({
        options: n(b)
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
            return v.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_GOOGLE;
        case `microsoft`:
            return v.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_MICROSOFT;
        case `apple`:
            return v.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_APPLE;
        default:
            return v.ACCESS_FLOW_USER_ACTION_TYPE_UNSPECIFIED
    }
}
var Z = e((() => {
    x()
}));

function Q(e) {
    return typeof e == `function` ? e() : e
}

function re(e, t) {
    return async function(n, r) {
        let i = C(m().searchParams);
        r(i);
        try {
            await ne()
        } catch {}
        let a = e == null ? o() : Q(e);
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
        connection: y[t]
    }, () => {
        p(n, X(t), i ?? (r === h.ACCESS_FLOW_ENTRY_POINT_LOGIN_MODAL ? d.ACCESS_FLOW_PAGE_TYPE_CHATGPT_WEB_LOGIN_MODAL : d.ACCESS_FLOW_PAGE_TYPE_CHATGPT_WEB_LOG_BACK_IN_MODAL))
    })
}
var $, ae = e((() => {
    s(), c(), r(), Z(), g(), i(), x(), $ = E(), S()
}));
export {
    Z as a, U as c, L as d, F as f, ie as i, I as l, k as m, ae as n, X as o, O as p, Q as r, Y as s, re as t, N as u
};
//# sourceMappingURL=c982bafe-ebazuly6efqbe490.js.map