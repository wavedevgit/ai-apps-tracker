import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    C0 as n,
    Dct as r,
    Ect as i,
    I0 as a,
    IR as o,
    L0 as s,
    QR as c,
    Sct as l,
    Tct as u,
    VR as d,
    X0 as f,
    YR as p,
    Z0 as m,
    az as h,
    ez as g,
    frt as _,
    hrt as v,
    iz as y,
    lrt as b,
    mrt as x,
    oz as S,
    rz as C,
    sz as w,
    urt as T,
    x0 as E
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Bn as ee,
    Vn as D,
    o as O,
    wn as k
} from "./2340486e-i7pjxgdhv0bs6apg.js";

function A(e, t, n) {
    let r = _(e).value;
    return i(r, t) ? r : n
}
var j = e((() => {
        v(), u()
    })),
    M, N, P, F, I, L, R, te = e((() => {
        M = k(), N = t(D()), P = ee(), F = e => e ? {
            controlHeightClassName: `h-11`,
            inputHeightClassName: `h-11!`
        } : {
            controlHeightClassName: `h-13`,
            inputHeightClassName: `h-13!`
        }, I = (0, N.createContext)(void 0), L = () => {
            "use forget";
            let e = (0, N.useContext)(I);
            if (!e) throw Error(`useAuthFormStyleContext must be used within AuthFormStyleProvider`);
            return e
        }, R = e => {
            "use forget";
            let t = (0, M.c)(3),
                {
                    value: n,
                    children: r
                } = e,
                i;
            return t[0] !== r || t[1] !== n ? (i = (0, P.jsx)(I.Provider, {
                value: n,
                children: r
            }), t[0] = r, t[1] = n, t[2] = i) : i = t[2], i
        }
    }));

function ne({
    loginStrategy: e
}) {
    return A(J[e].google, h, {
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
    return A(J[e].microsoft, h, {
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
    return A(J[e].apple, h, {
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
    return A(J[e].email, h, {
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
    t[0] !== n || t[1] !== r.phone_number || t[2] !== i ? (a = A(r.phone_number, h, {
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
            let e = x(`183390215`),
                r;t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (r = b(`4012051055`), t[8] = r) : r = t[8];
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
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = x(`3233347819`).get(`should_hide_microsoft_sso`, !1), t[0] = r) : r = t[0];
    let i = r,
        a;
    bb0: {
        let e;t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (e = new URLSearchParams(window.location.search).get(G), t[1] = e) : e = t[1],
        a = e === `1`
    }
    let o = a,
        s = ne({
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
        } = A(`489084288`, q, {
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
    W = k(), v(), u(), w(), j(), G = `microsoft_sso`, K = [`google`, `apple`, `microsoft`, `email`, `phone_number`], q = r({
        options: l(S)
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
            return g.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_GOOGLE;
        case `microsoft`:
            return g.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_MICROSOFT;
        case `apple`:
            return g.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_APPLE;
        default:
            return g.ACCESS_FLOW_USER_ACTION_TYPE_UNSPECIFIED
    }
}
var Z = e((() => {
    C()
}));

function Q(e) {
    return typeof e == `function` ? e() : e
}

function re(e, t) {
    return async function(n, r) {
        let i = E(f().searchParams);
        r(i);
        try {
            await T()
        } catch {}
        let o = e == null ? a() : Q(e);
        return (0, $.signIn)(i, o ? {
            callbackUrl: o
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
        d(n, X(t), i ?? (r === p.ACCESS_FLOW_ENTRY_POINT_LOGIN_MODAL ? c.ACCESS_FLOW_PAGE_TYPE_CHATGPT_WEB_LOGIN_MODAL : c.ACCESS_FLOW_PAGE_TYPE_CHATGPT_WEB_LOG_BACK_IN_MODAL))
    })
}
var $, ae = e((() => {
    o(), s(), n(), Z(), m(), v(), C(), $ = O(), w()
}));
export {
    Z as a, U as c, te as d, L as f, ie as i, R as l, j as m, ae as n, X as o, A as p, Q as r, Y as s, re as t, F as u
};
//# sourceMappingURL=c982bafe-kn0glzswj1119jxc.js.map