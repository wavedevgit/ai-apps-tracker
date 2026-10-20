import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $R as n,
    D0 as r,
    GR as i,
    Gnt as a,
    H0 as o,
    HR as s,
    IR as c,
    Jnt as l,
    Knt as u,
    O0 as d,
    QR as f,
    V0 as p,
    XR as m,
    Xnt as h,
    ZR as g,
    Znt as _,
    cct as ee,
    ez as v,
    f0 as y,
    ict as b,
    jR as x,
    lct as S,
    m0 as C,
    qR as w,
    sct as T
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Bn as E,
    Vn as D,
    o as te,
    wn as O
} from "./2340486e-i7pjxgdhv0bs6apg.js";

function k(e, t, n) {
    let r = l(e).value;
    return ee(r, t) ? r : n
}
var A = e((() => {
        _(), T()
    })),
    j, M, N, P, F, I, L, ne = e((() => {
        j = O(), M = t(D()), N = E(), P = e => e ? {
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
    return k(J[e].google, f, {
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
    return k(J[e].microsoft, f, {
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
    return k(J[e].apple, f, {
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
    return k(J[e].email, f, {
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
        o;
    t[0] !== n || t[1] !== r.phone_number || t[2] !== i ? (o = k(r.phone_number, f, {
        name: `phone_number`,
        enabled: i,
        tempDisabled: !1,
        kind: `username`,
        loginStrategy: n
    }), t[0] = n, t[1] = r.phone_number, t[2] = i, t[3] = o) : o = t[3];
    let s = o,
        c, l;
    if (t[4] !== s || t[5] !== n) {
        l = Symbol.for(`react.early_return_sentinel`);
        bb0: {
            let e = h(`183390215`),
                r;t[8] === Symbol.for(`react.memo_cache_sentinel`) ? (r = a(`4012051055`), t[8] = r) : r = t[8];
            let i = r;
            if (n !== `new_user`) {
                l = s;
                break bb0
            }
            let o = i || e.get(`signup_allow_phone_from_login_web`, !1);c = s.enabled && o && !e.get(`in_phone_signup_holdout_from_login_web`, !1)
        }
        t[4] = s, t[5] = n, t[6] = c, t[7] = l
    } else c = t[6], l = t[7];
    if (l !== Symbol.for(`react.early_return_sentinel`)) return l;
    let u = c,
        d;
    return t[9] !== u || t[10] !== s ? (d = {
        ...s,
        enabled: u
    }, t[9] = u, t[10] = s, t[11] = d) : d = t[11], d
}

function U(e) {
    "use forget";
    let t = (0, W.c)(4),
        {
            loginStrategy: n
        } = e,
        r;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (r = h(`3233347819`).get(`should_hide_microsoft_sso`, !1), t[0] = r) : r = t[0];
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
    W = O(), _(), T(), v(), A(), G = `microsoft_sso`, K = [`google`, `apple`, `microsoft`, `email`, `phone_number`], q = S({
        options: b(n)
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
            return w.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_GOOGLE;
        case `microsoft`:
            return w.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_MICROSOFT;
        case `apple`:
            return w.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_APPLE;
        default:
            return w.ACCESS_FLOW_USER_ACTION_TYPE_UNSPECIFIED
    }
}
var Z = e((() => {
    m()
}));

function Q(e) {
    return typeof e == `function` ? e() : e
}

function re(e, t) {
    return async function(n, i) {
        let a = y(p().searchParams);
        i(a);
        try {
            await u()
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
        connection: g[t]
    }, () => {
        c(n, X(t), a ?? (r === s.ACCESS_FLOW_ENTRY_POINT_LOGIN_MODAL ? i.ACCESS_FLOW_PAGE_TYPE_CHATGPT_WEB_LOGIN_MODAL : i.ACCESS_FLOW_PAGE_TYPE_CHATGPT_WEB_LOG_BACK_IN_MODAL))
    })
}
var $, ae = e((() => {
    x(), d(), C(), Z(), o(), _(), m(), $ = te(), v()
}));
export {
    Z as a, U as c, ne as d, I as f, ie as i, L as l, A as m, ae as n, X as o, k as p, Q as r, Y as s, re as t, P as u
};
//# sourceMappingURL=c982bafe-o0ti19z4djf4llrq.js.map