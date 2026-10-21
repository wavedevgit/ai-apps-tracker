const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/19a7d0b3-hlwvipncspl48xd6.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-tap9fxyhk4ehe0bs.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css"]))) => i.map(i => d[i]);
import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $tt as r,
    At as i,
    C_ as a,
    Cz as o,
    Dz as s,
    GR as c,
    Got as l,
    HR as u,
    Hn as d,
    IF as f,
    IR as p,
    JR as m,
    JT as h,
    Jt as ee,
    Ka as g,
    LF as _,
    LN as v,
    Mz as y,
    P5 as te,
    RF as ne,
    RN as re,
    S_ as ie,
    Snt as ae,
    Un as oe,
    WR as se,
    Wa as ce,
    Wot as le,
    X0 as ue,
    X5 as de,
    XR as b,
    Y5 as x,
    YT as S,
    Z0 as fe,
    _z as pe,
    cct as C,
    cn as me,
    cz as w,
    dat as T,
    dct as E,
    ert as he,
    fct as ge,
    g8 as _e,
    hct as ve,
    hit as ye,
    hn as be,
    jR as xe,
    jz as D,
    l0 as Se,
    lat as O,
    mct as k,
    pct as A,
    pz as Ce,
    qR as j,
    sit as M,
    trt as we,
    u0 as Te,
    uct as Ee,
    vN as De,
    vnt as Oe,
    wnt as ke,
    yN as Ae,
    zF as je
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    Bn as N,
    Nn as P,
    Q as F,
    Rn as Me,
    Vn as Ne,
    Vt as Pe,
    cn as Fe,
    ln as Ie,
    wn as Le,
    zn as Re
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    i as ze,
    n as Be,
    r as I,
    t as Ve
} from "./d42ee766-jyulxuy7aor7q365.js";
import {
    Aht as He,
    D9 as L,
    Hrt as Ue,
    O9 as We,
    Urt as Ge,
    kht as Ke
} from "./conversation-small-nmt18uiom3b14vca.js";
import {
    $b as qe,
    DC as R,
    EC as Je,
    Qb as Ye,
    bf as Xe,
    yf as Ze
} from "./30901919-niqyapppecmq5jkn.js";
import {
    Fx as Qe,
    Ix as $e,
    Vf as et,
    zf as tt
} from "./c2675c8c-h5ybkhdzcoblzzdu.js";
import {
    a as nt,
    i as rt,
    n as it,
    o as at,
    r as z,
    s as ot,
    t as st
} from "./c09d86e5-clxfc2bjrfyl9oel.js";
import {
    a as ct,
    s as lt,
    t as B
} from "./d524c1a0-xq9b2t172ofxoc79.js";
import {
    c as ut,
    d as V,
    f as H,
    i as dt,
    l as ft,
    m as pt,
    n as mt,
    p as ht,
    r as gt,
    s as U,
    t as _t,
    u as vt
} from "./c982bafe-kdr2gd3zbnxs9md2.js";
import {
    n as yt,
    t as bt
} from "./c51faa14-ovtqbvfxvysf50nx.js";
import {
    n as xt,
    t as St
} from "./5e6083c9-ei9ta9kfgo3jv7mk.js";
import {
    n as Ct,
    t as wt
} from "./966be48d-crl2rhh94o06vp2o.js";
var Tt, Et = e((() => {
    fe(), Ie(), Tt = ue(() => Fe(() => import(`./19a7d0b3-hlwvipncspl48xd6.js`).then(e => e.EmailDomainTypoConfirmationDialogContent), __vite__mapDeps([0, 1, 2, 3, 4])))
}));

function Dt() {
    "use forget";
    let e = (0, W.c)(2),
        t;
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = ht(`1063781658`, jt, {
        countryCodes: []
    }), e[0] = t) : t = e[0];
    let {
        countryCodes: n
    } = t, r;
    return e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (r = n?.filter(Ot), e[1] = r) : r = e[1], r
}

function Ot(e) {
    return ct(e)
}

function kt(e) {
    let t = le().userCountry;
    if (!t) return Nt;
    let n = t.toUpperCase();
    return e.length === 0 || e.includes(n) ? n : Nt
}
var W, G, K, At, jt, Mt, Nt, Pt, Ft, It, Lt = e((() => {
    W = Le(), Ge(), Be(), _e(), ke(), L(), r(), v(), b(), l(), B(), i(), G = n(Ne()), Me(), E(), pt(), V(), yt(), xt(), K = N(), At = e => {
        "use forget";
        let t = (0, W.c)(39),
            {
                usernameKind: n,
                emailProps: r,
                phoneProps: i,
                emailField: a,
                phoneNumberField: o,
                disabled: s,
                authSessionLoggingId: c,
                accessFlowPage: l,
                usernameKindSwitching$: u,
                exitUsernameKindSwitching: d,
                usernameKindSwitched: f,
                disableAutofocus: p,
                isPhotoLayout: m
            } = e,
            h = p !== void 0 && p,
            g = m !== void 0 && m,
            _ = Re(),
            v = Dt(),
            {
                inputHeightClassName: y,
                controlHeightClassName: ne
            } = H(),
            re;
        t[0] !== _ || t[1] !== g ? (re = g ? _.formatMessage({
            id: `Login.photoEmail`,
            defaultMessage: `Email`
        }) : _.formatMessage({
            id: `dynamicUsernameInput.email`,
            defaultMessage: `Email address`
        }), t[0] = _, t[1] = g, t[2] = re) : re = t[2];
        let ie = re,
            oe = te(u),
            ce;
        t[3] === d ? ce = t[4] : (ce = function() {
            d()
        }, t[3] = d, t[4] = ce);
        let le = ce,
            ue;
        t[5] !== l || t[6] !== c ? (ue = () => ae.logStructuredEvent(`AccessFlowUserAction`, {
            authSessionLoggingId: c,
            actionType: j.ACCESS_FLOW_USER_ACTION_TYPE_INPUT,
            page: l,
            field: se.ACCESS_FLOW_FIELD_EMAIL
        }), t[5] = l, t[6] = c, t[7] = ue) : ue = t[7];
        let de = We(ue),
            b;
        t[8] !== l || t[9] !== c ? (b = () => ae.logStructuredEvent(`AccessFlowUserAction`, {
            authSessionLoggingId: c,
            actionType: j.ACCESS_FLOW_USER_ACTION_TYPE_INPUT,
            page: l,
            field: se.ACCESS_FLOW_FIELD_PHONE
        }), t[8] = l, t[9] = c, t[10] = b) : b = t[10];
        let x = We(b),
            S;
        t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (S = Oe(), t[11] = S) : S = t[11];
        let fe = S,
            pe = !!ee(),
            C, w;
        if (t[12] !== pe) {
            let e = Pt(pe);
            C = Ft(e), w = It(e), t[12] = pe, t[13] = C, t[14] = w
        } else C = t[13], w = t[14];
        let T = w,
            E;
        t[15] !== c || t[16] !== ne || t[17] !== h || t[18] !== s || t[19] !== C || t[20] !== a || t[21] !== ie || t[22] !== r || t[23] !== y || t[24] !== _ || t[25] !== g || t[26] !== de || t[27] !== x || t[28] !== T || t[29] !== o || t[30] !== i || t[31] !== v || t[32] !== n || t[33] !== f || t[34] !== oe ? (E = n === `email` ? (0, K.jsx)(me.div, {
            className: `-m-1 overflow-hidden p-1`,
            ...oe ? {
                ...C
            } : {},
            children: (0, K.jsx)(Mt, {
                disabled: h || fe && !f,
                onInitialValue: e => {
                    e !== a.state.value && (I(window.location.pathname) && (e || a.state.value) && ze(`warn`, `Login email hydration reconciliation`, {
                        phase: `layout_reconciliation`,
                        auth_session_logging_id: c,
                        dom_email_present: !!e,
                        form_state_email_present: !!a.state.value,
                        email_input_focused: document.activeElement === Ve(),
                        reconciliation_direction: e ? a.state.value ? `different_nonempty` : `dom_to_empty_state` : `empty_dom_to_state`
                    }), a.handleChange(e))
                },
                children: e => {
                    let {
                        ref: t
                    } = e;
                    return (0, K.jsx)(Ue, {
                        ref: t,
                        name: a.name,
                        value: a.state.value,
                        onChange: e => {
                            a.handleChange(e.target.value), de()
                        },
                        inputClassName: `w-full ${g?`rounded-xl!`:`rounded-full!`} text-base! sm:text-base! px-5! py-3! ${y}`,
                        error: a.state.meta.errors.join(`,`) ?? void 0,
                        showErrorIcon: !0,
                        ariaLabel: ie,
                        placeholder: ie,
                        className: `focus-within:border-token-border-heavy! ${g?`rounded-xl!`:`rounded-full!`} border-[var(--border-heavy)] p-0! px-0! py-0! focus-within:ring-1`,
                        type: `email`,
                        autoComplete: `email`,
                        autoFocus: !fe && !h,
                        ...r,
                        disabled: s
                    })
                }
            })
        }, `email`) : n === `phone_number` ? (0, K.jsx)(me.div, {
            className: `-m-1 overflow-hidden p-1`,
            ...oe ? {
                ...T
            } : {},
            children: (0, K.jsx)(Mt, {
                disabled: h,
                children: e => {
                    let {
                        ref: t
                    } = e;
                    return (0, K.jsx)(St, {
                        nativeInputRef: t,
                        countries: v,
                        defaultCountry: kt(v),
                        controlHeightClassName: ne,
                        inputHeightClassName: y,
                        value: o.state.value,
                        setValue: e => {
                            o.handleChange(e), x()
                        },
                        error: o.state.meta.errors.join(`,`) ?? void 0,
                        label: _.formatMessage({
                            id: `dynamicUsernameInput.phone`,
                            defaultMessage: `Phone number`
                        }),
                        ...i,
                        disabled: s,
                        appearance: {
                            phoneInputStyle: `cohesive`
                        }
                    })
                }
            })
        }, `phone_number`) : null, t[15] = c, t[16] = ne, t[17] = h, t[18] = s, t[19] = C, t[20] = a, t[21] = ie, t[22] = r, t[23] = y, t[24] = _, t[25] = g, t[26] = de, t[27] = x, t[28] = T, t[29] = o, t[30] = i, t[31] = v, t[32] = n, t[33] = f, t[34] = oe, t[35] = E) : E = t[35];
        let he;
        return t[36] !== le || t[37] !== E ? (he = (0, K.jsx)(`div`, {
            className: `relative`,
            children: (0, K.jsx)(be, {
                mode: `wait`,
                initial: !1,
                onExitComplete: le,
                children: E
            })
        }), t[36] = le, t[37] = E, t[38] = he) : he = t[38], he
    }, jt = A({
        countryCodes: C(k())
    }), Mt = e => {
        "use forget";
        let t = (0, W.c)(10),
            {
                children: n,
                disabled: r,
                onInitialValue: i
            } = e,
            a = r !== void 0 && r,
            o = (0, G.useRef)(null),
            s = (0, G.useRef)(!1),
            c, l;
        t[0] === i ? (c = t[1], l = t[2]) : (c = () => {
            o.current && !s.current && (s.current = !0, i?.(o.current.value))
        }, l = [i], t[0] = i, t[1] = c, t[2] = l), re(c, l);
        let u, d;
        t[3] === a ? (u = t[4], d = t[5]) : (u = () => {
            if (o.current && !a) return bt(o.current)
        }, d = [a], t[3] = a, t[4] = u, t[5] = d), (0, G.useEffect)(u, d);
        let f;
        t[6] === n ? f = t[7] : (f = n({
            ref: o
        }), t[6] = n, t[7] = f);
        let p;
        return t[8] === f ? p = t[9] : (p = (0, K.jsx)(K.Fragment, {
            children: f
        }), t[8] = f, t[9] = p), p
    }, Nt = `US`, Pt = e => ({
        opacity: {
            duration: e ? 0 : .1
        },
        height: {
            duration: e ? 0 : .22,
            ease: `easeInOut`
        }
    }), Ft = e => ({
        initial: {
            opacity: 0,
            height: `auto`
        },
        animate: {
            opacity: 1,
            height: `auto`
        },
        exit: {
            opacity: 0,
            height: `auto`
        },
        transition: e,
        layout: !0
    }), It = e => ({
        initial: {
            opacity: 0,
            height: 60
        },
        animate: {
            opacity: 1,
            height: `auto`
        },
        exit: {
            opacity: 0,
            height: 60
        },
        transition: e,
        layout: !0
    })
}));

function Rt() {
    return O.addAction(`login-form.continue`)
}
var zt, q, Bt, Vt = e((() => {
    zt = Le(), S(), y(), T(), de(), Me(), V(), q = N(), Bt = e => {
        "use forget";
        let t = (0, zt.c)(16),
            n, r, i, a;
        t[0] === e ? (n = t[1], r = t[2], i = t[3], a = t[4]) : ({
            className: n,
            isPending: r,
            text: a,
            ...i
        } = e, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a);
        let {
            controlHeightClassName: o
        } = H(), s;
        t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, q.jsx)(P, {
            id: `continueButton.continue`,
            defaultMessage: `Continue`
        }), t[5] = s) : s = t[5];
        let c = a ?? s,
            l = `mt-1.5 ${o} w-full rounded-full text-base`,
            u;
        t[6] !== n || t[7] !== l ? (u = x(l, n), t[6] = n, t[7] = l, t[8] = u) : u = t[8];
        let d;
        t[9] !== c || t[10] !== r ? (d = r ? (0, q.jsxs)(q.Fragment, {
            children: [(0, q.jsx)(D, {
                className: `text-base`
            }), (0, q.jsx)(`span`, {
                className: `sr-only`,
                children: c
            })]
        }) : c, t[9] = c, t[10] = r, t[11] = d) : d = t[11];
        let f;
        return t[12] !== i || t[13] !== u || t[14] !== d ? (f = (0, q.jsx)(h, {
            type: `submit`,
            onClick: Rt,
            className: u,
            ...i,
            children: d
        }), t[12] = i, t[13] = u, t[14] = d, t[15] = f) : f = t[15], f
    }
}));

function Ht(e, t) {
    let [n, r] = Pe(), i = Object.fromEntries(n);
    return [ge(i, e) ? i : t, r, (e, t) => {
        r({
            ...Object.fromEntries(n),
            ...e
        }, t)
    }]
}
var Ut = e((() => {
        F(), E()
    })),
    Wt, Gt, Kt = e((() => {
        E(), Wt = Ee([`email`, `phone_number`]), Gt = `email`
    }));

function qt(e) {
    "use forget";
    let t = (0, Jt.c)(4),
        {
            allowPhone: n
        } = e,
        r = n && Ce() ? `phone_number` : Gt,
        i;
    t[0] === r ? i = t[1] : (i = {
        usernameKind: r
    }, t[0] = r, t[1] = i);
    let [a] = Ht(J, i), [o, s] = (0, Yt.useState)(n ? a.usernameKind : Gt), c;
    return t[2] === o ? c = t[3] : (c = [o, s], t[2] = o, t[3] = c), c
}
var Jt, Yt, J, Xt = e((() => {
    Jt = Le(), w(), Yt = n(Ne()), E(), Ut(), Kt(), J = ve({
        usernameKind: Wt
    })
}));

function Zt(e) {
    return setTimeout(e, 300)
}
var Qt, $t, Y, en, tn, nn = e((() => {
    Qt = Le(), S(), Xe(), Ye(), ke(), T(), b(), a(), $t = n(Ne()), Me(), V(), Y = N(), en = e => {
        "use forget";
        let t = (0, Qt.c)(24),
            {
                usernameKind: n,
                setUsernameKind: r,
                form: i,
                align: a,
                disabled: o,
                authSessionLoggingId: s,
                accessFlowPage: c
            } = e,
            l = a === void 0 ? `left` : a,
            u;
        t[0] !== i || t[1] !== r ? (u = ie(async e => {
            await r(e), await new Promise(Zt), i.reset()
        }, 50, {
            leading: !0,
            trailing: !1
        }), t[0] = i, t[1] = r, t[2] = u) : u = t[2];
        let d = u,
            f, p;
        t[3] === d ? (f = t[4], p = t[5]) : (f = () => () => {
            d.cancel()
        }, p = [d], t[3] = d, t[4] = f, t[5] = p), (0, $t.useEffect)(f, p);
        let m;
        t[6] !== c || t[7] !== s || t[8] !== d ? (m = async (e, t) => {
            ae.logStructuredEvent(`AccessFlowUserAction`, {
                authSessionLoggingId: s,
                actionType: e === `email` ? j.ACCESS_FLOW_USER_ACTION_TYPE_SWITCH_TO_EMAIL : j.ACCESS_FLOW_USER_ACTION_TYPE_SWITCH_TO_PHONE,
                page: c
            }), O.addAction(t), await d(e)
        }, t[6] = c, t[7] = s, t[8] = d, t[9] = m) : m = t[9];
        let h = m;
        switch (n) {
            case `email`: {
                let e;
                t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Y.jsx)(P, {
                    id: `logIn.continueWithPhone`,
                    defaultMessage: `Continue with phone`
                }), t[10] = e) : e = t[10];
                let n;
                t[11] === h ? n = t[12] : (n = () => h(`phone_number`, `login-form.switch_to_phone`), t[11] = h, t[12] = n);
                let r;
                return t[13] !== l || t[14] !== o || t[15] !== n ? (r = (0, Y.jsx)(tn, {
                    size: 17,
                    text: e,
                    icon: qe,
                    onClick: n,
                    align: l,
                    disabled: o
                }), t[13] = l, t[14] = o, t[15] = n, t[16] = r) : r = t[16], r
            }
            case `phone_number`: {
                let e;
                t[17] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, Y.jsx)(P, {
                    id: `logIn.continueWithEmail`,
                    defaultMessage: `Continue with email`
                }), t[17] = e) : e = t[17];
                let n;
                t[18] === h ? n = t[19] : (n = () => h(`email`, `login-form.switch_to_email`), t[18] = h, t[19] = n);
                let r;
                return t[20] !== l || t[21] !== o || t[22] !== n ? (r = (0, Y.jsx)(tn, {
                    size: 19,
                    text: e,
                    icon: Ze,
                    onClick: n,
                    align: l,
                    disabled: o
                }), t[20] = l, t[21] = o, t[22] = n, t[23] = r) : r = t[23], r
            }
        }
    }, tn = e => {
        "use forget";
        let t = (0, Qt.c)(9),
            {
                text: n,
                icon: r,
                onClick: i,
                size: a,
                disabled: o
            } = e,
            {
                controlHeightClassName: s
            } = H(),
            c = `${s} rounded-full text-base`,
            l;
        t[0] !== r || t[1] !== a ? (l = (0, Y.jsx)(`span`, {
            className: `relative grid h-4 w-4 place-items-center`,
            children: (0, Y.jsx)(`span`, {
                className: `absolute`,
                children: (0, Y.jsx)(r, {
                    width: a,
                    height: a
                })
            })
        }), t[0] = r, t[1] = a, t[2] = l) : l = t[2];
        let u;
        return t[3] !== o || t[4] !== i || t[5] !== c || t[6] !== l || t[7] !== n ? (u = (0, Y.jsxs)(h, {
            as: `button`,
            type: `button`,
            onClick: i,
            className: c,
            contentWrapperClassName: `gap-2`,
            color: `secondary`,
            disabled: o,
            children: [l, n]
        }), t[3] = o, t[4] = i, t[5] = c, t[6] = l, t[7] = n, t[8] = u) : u = t[8], u
    }
}));

function rn(e) {
    if (!oe.test(e)) return null;
    let t = e.lastIndexOf(`@`);
    if (t === -1) return null;
    let n = e.slice(0, t),
        r = e.slice(t + 1),
        i = r.toLowerCase();
    if (sn.has(i)) return null;
    let a = null;
    for (let e of X)
        if (an(i, e)) {
            if (a != null) return null;
            a = e
        } return a == null ? null : {
        enteredDomain: r,
        suggestedDomain: a,
        suggestedEmail: `${n}@${a}`
    }
}

function an(e, t) {
    if (e === t) return !1;
    let n = e.length - t.length;
    if (Math.abs(n) > 1) return !1;
    if (n !== 0) return on(e.length < t.length ? e : t, e.length < t.length ? t : e);
    let r = -1,
        i = -1;
    for (let n = 0; n < e.length; n += 1)
        if (e[n] !== t[n]) {
            if (r === -1) {
                r = n;
                continue
            }
            if (i !== -1) return !1;
            i = n
        } return r === -1 ? !1 : i === -1 || i === r + 1 && e[r] === t[i] && e[i] === t[r]
}

function on(e, t) {
    let n = 0,
        r = 0,
        i = !1;
    for (; n < e.length && r < t.length;) {
        if (e[n] === t[r]) {
            n += 1, r += 1;
            continue
        }
        if (i) return !1;
        i = !0, r += 1
    }
    return !0
}
var X, sn, cn = e((() => {
    d(), X = [`gmail.com`, `yahoo.com`, `hotmail.com`, `outlook.com`, `icloud.com`, `naver.com`, `aol.com`, `proton.me`], sn = new Set([...X, `email.com`, `mail.com`, `ymail.com`])
}));

function ln(e) {
    let t = new URLSearchParams({
        slm: `1`
    });
    try {
        let n = new URL(e ?? `/`, `https://chatgpt.com`).searchParams.get(`prompt`);
        n && t.set(`prompt`, n)
    } catch {}
    return `/?${t}`
}
var un = e((() => {
    je()
}));

function dn(e) {
    "use forget";
    let t = (0, fn.c)(19),
        {
            collapsedLabel: n,
            expandedLabel: r,
            children: i,
            defaultOpen: a,
            className: o,
            buttonClassName: s,
            buttonColor: c,
            disabled: l,
            hideButtonWhenOpen: u
        } = e,
        d = a !== void 0 && a,
        f = c === void 0 ? `secondary` : c,
        p = u !== void 0 && u,
        [m, ee] = (0, pn.useState)(d),
        g;
    t[0] === o ? g = t[1] : (g = x(`flex flex-col gap-3`, o), t[0] = o, t[1] = g);
    let _;
    t[2] !== i || t[3] !== m ? (_ = m && (0, Z.jsx)(me.div, {
        initial: {
            height: 0,
            opacity: 0,
            overflow: `hidden`
        },
        animate: {
            height: `auto`,
            opacity: 1,
            overflow: `visible`
        },
        exit: {
            height: 0,
            opacity: 0
        },
        transition: {
            duration: .18,
            ease: `easeInOut`
        },
        id: `content`,
        children: i
    }, `content`), t[2] = i, t[3] = m, t[4] = _) : _ = t[4];
    let v;
    t[5] === _ ? v = t[6] : (v = (0, Z.jsx)(be, {
        initial: !1,
        children: _
    }), t[5] = _, t[6] = v);
    let y;
    t[7] !== s || t[8] !== f || t[9] !== n || t[10] !== l || t[11] !== r || t[12] !== p || t[13] !== m ? (y = !p || !m ? (0, Z.jsx)(h, {
        type: `button`,
        color: f,
        className: x(`w-full rounded-full text-base`, s),
        contentWrapperClassName: `w-full`,
        "aria-expanded": m,
        "aria-controls": `content`,
        disabled: l,
        onClick: () => ee(!m),
        children: (0, Z.jsxs)(`span`, {
            className: `flex w-full items-center justify-center gap-2`,
            children: [(0, Z.jsx)(`span`, {
                children: m ? r : n
            }), (0, Z.jsx)(Je, {
                className: x(`icon-sm transition-transform duration-200`, m && `rotate-180`)
            })]
        })
    }) : null, t[7] = s, t[8] = f, t[9] = n, t[10] = l, t[11] = r, t[12] = p, t[13] = m, t[14] = y) : y = t[14];
    let te;
    return t[15] !== g || t[16] !== v || t[17] !== y ? (te = (0, Z.jsxs)(`div`, {
        className: g,
        children: [v, y]
    }), t[15] = g, t[16] = v, t[17] = y, t[18] = te) : te = t[18], te
}
var fn, pn, Z, mn = e((() => {
        fn = Le(), S(), R(), de(), i(), pn = n(Ne()), Z = N()
    })),
    hn = t({
        LoginForm: () => Tn
    });

function gn(e) {
    return e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement
}

function _n(e) {
    return e.name !== `phone_number`
}

function vn(e) {
    return e.name === `phone_number`
}

function yn(e) {
    return e.name === `google`
}

function bn(e) {
    return e.kind === `social`
}

function xn(e) {
    return e.name !== `google` && e.name !== `apple` && e.kind !== `username`
}

function Sn() {
    if (!He()) return;
    let e = navigator.virtualKeyboard.overlaysContent;
    return navigator.virtualKeyboard.overlaysContent = !1, () => {
        navigator.virtualKeyboard.overlaysContent = e
    }
}
var Cn, Q, $, wn, Tn, En = e((() => {
    Cn = Le(), xe(), w(), Et(), Lt(), Vt(), nt(), U(), Ct(), V(), mt(), it(), Xt(), nn(), z(), cn(), un(), g(), je(), Qe(), ye(), ke(), d(), Se(), we(), De(), r(), Ke(), mn(), b(), tt(), de(), B(), a(), i(), Q = n(Ne()), Me(), $ = N(), wn = 300, Tn = e => {
        "use forget";
        let t = (0, Cn.c)(176),
            {
                onClose: n,
                title: r,
                titleClassName: i,
                subtitle: a,
                mutedSubtitle: l,
                initialEmail: d,
                callbackUrl: h,
                authorizationParams: g,
                isStayLoggedOutVisible: v,
                stayLoggedOutText: y,
                isInModal: te,
                isUsernameOnTop: re,
                collapsedLoginVariant: le,
                stayLoggedOutPlacement: ue,
                continueButtonColor: de,
                googleButtonColor: b,
                hidePhoneOption: S,
                disableAutofocus: fe,
                accessFlowEntryPoint: C,
                accessFlowPage: me,
                layoutVariant: w
            } = e,
            T = te === void 0 || te,
            E = re !== void 0 && re,
            ge = le === void 0 ? `none` : le,
            _e = ue === void 0 ? `bottom` : ue,
            ve = b === void 0 ? `secondary` : b,
            ye = S !== void 0 && S,
            be = fe !== void 0 && fe,
            xe = C === void 0 ? u.ACCESS_FLOW_ENTRY_POINT_LOGIN_MODAL : C,
            D = me === void 0 ? c.ACCESS_FLOW_PAGE_TYPE_CHATGPT_WEB_LOGIN_MODAL : me,
            Se = w === void 0 ? `default` : w,
            O = Re(),
            k = Oe(),
            A = Se === `photo`,
            Ce = Se === `gift-card`,
            we;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (we = {
            loginStrategy: `existing_user`
        }, t[0] = we) : we = t[0];
        let {
            phoneNumberOption: Ee,
            emailOption: De,
            optionsForDisplay: ke
        } = ut(we), je = ye ? ke.filter(_n) : ke, N = je.length > 1, [F, Me] = qt({
            allowPhone: je.some(vn)
        }), [Ne, Pe] = (0, Q.useState)(!1), Fe = De.tempDisabled, Ie = Ee.tempDisabled, Le = F === `email` && Fe || F === `phone_number` && Ie, [ze, Be] = (0, Q.useState)(!1), [I, Ve] = (0, Q.useState)(null), He;
        t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (He = () => Be(!1), t[1] = He) : He = t[1], ot(He);
        let [L, Ue] = (0, Q.useState)(null), [We, Ge] = at(!0), Ke, qe;
        t[2] !== We || t[3] !== Ge || t[4] !== L ? (Ke = () => {
            if (!(!We || L == null)) return rt(() => Ge(!1), L)
        }, qe = [We, Ge, L], t[2] = We, t[3] = Ge, t[4] = L, t[5] = Ke, t[6] = qe) : (Ke = t[5], qe = t[6]), (0, Q.useEffect)(Ke, qe);
        let R = ze || We,
            Je;
        t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (Je = f(), t[7] = Je) : Je = t[7];
        let [Ye, Xe] = at(Je), Ze = (0, Q.useId)(), Qe = ee(), tt;
        t[8] !== g || t[9] !== h ? (tt = _t(h, g), t[8] = g, t[9] = h, t[10] = tt) : tt = t[10];
        let nt = tt,
            it;
        t[11] !== D || t[12] !== g || t[13] !== n || t[14] !== Xe || t[15] !== nt || t[16] !== F ? (it = async e => {
            Be(!0), Xe(!0), await nt({
                screen_hint: `login_or_signup`,
                login_hint: F === `email` ? e.email : e.phoneNumber
            }, () => {
                p(g[M], j.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE, D, F === `email` ? se.ACCESS_FLOW_FIELD_EMAIL : se.ACCESS_FLOW_FIELD_PHONE)
            })
        }, t[11] = D, t[12] = g, t[13] = n, t[14] = Xe, t[15] = nt, t[16] = F, t[17] = it) : it = t[17];
        let z = it,
            ct;
        t[18] !== D || t[19] !== g ? (ct = e => {
            ae.logStructuredEvent(`AccessFlowUserAction`, {
                authSessionLoggingId: g[M],
                actionType: e,
                page: D,
                field: se.ACCESS_FLOW_FIELD_EMAIL
            })
        }, t[18] = D, t[19] = g, t[20] = ct) : ct = t[20];
        let B = ct,
            V = async e => {
                Ue(k && e === `apple` && _() ? ne() : null), Ge(!0), await dt(nt, e, g[M], xe, D)
            }, H = $e(!1), pt;
        t[21] === H ? pt = t[22] : (pt = () => H.set(!1), t[21] = H, t[22] = pt);
        let mt = Qe ? 0 : 800,
            ht;
        t[23] !== pt || t[24] !== mt ? (ht = ie(pt, mt, {
            leading: !1,
            trailing: !0
        }), t[23] = pt, t[24] = mt, t[25] = ht) : ht = t[25];
        let U = ht,
            yt = (0, Q.useRef)(!0),
            bt, xt;
        t[26] === U ? (bt = t[27], xt = t[28]) : (bt = () => (yt.current = !0, () => {
            yt.current = !1, U.cancel()
        }), xt = [U], t[26] = U, t[27] = bt, t[28] = xt), (0, Q.useEffect)(bt, xt);
        let St;
        t[29] !== Me || t[30] !== U || t[31] !== Qe || t[32] !== H ? (St = async e => {
            if (Pe(!0), Oe()) H.set(!1);
            else {
                if (H.set(!0), await new Promise(e => setTimeout(e, Qe ? 0 : 50)), !yt.current) return;
                U()
            }
            yt.current && Me(e)
        }, t[29] = Me, t[30] = U, t[31] = Qe, t[32] = H, t[33] = St) : St = t[33];
        let Ct = Ae(St),
            Et = d ?? ``,
            Dt;
        t[34] === Et ? Dt = t[35] : (Dt = {
            email: Et,
            phoneNumber: ``
        }, t[34] = Et, t[35] = Dt);
        let Ot;
        t[36] !== z || t[37] !== F ? (Ot = async e => {
            let {
                value: t
            } = e;
            if (F === `email`) {
                let e = rn(t.email);
                if (e != null && pe()) {
                    Ve({
                        ...e,
                        submittedValue: {
                            ...t
                        }
                    });
                    return
                }
            }
            await z(t)
        }, t[36] = z, t[37] = F, t[38] = Ot) : Ot = t[38];
        let kt;
        t[39] !== D || t[40] !== g || t[41] !== O || t[42] !== F ? (kt = {
            onSubmit: e => {
                let {
                    value: t
                } = e, n = {};
                if (t.email = t.email.trim(), t.phoneNumber = t.phoneNumber.trim(), F === `email` ? t.email ? oe.test(t.email) || (n.email = o() ? O.formatMessage({
                        id: `loginForm.emailInvalidActionable`,
                        defaultMessage: `That email doesn't look right. Check for a missing @, typo, or incomplete domain.`
                    }) : O.formatMessage({
                        id: `loginForm.emailInvalid`,
                        defaultMessage: `Email is not valid.`
                    })) : n.email = O.formatMessage({
                        id: `loginForm.emailRequired`,
                        defaultMessage: `Email is required.`
                    }) : t.phoneNumber ? lt(t.phoneNumber) || (n.phoneNumber = O.formatMessage({
                        id: `loginForm.phoneNumberInvalid`,
                        defaultMessage: `Phone number is not valid.`
                    })) : n.phoneNumber = O.formatMessage({
                        id: `loginForm.phoneNumberRequired`,
                        defaultMessage: `Phone number is required.`
                    }), n.email || n.phoneNumber) {
                    let e = {
                        usernameKind: F,
                        username: F === `email` ? t.email : t.phoneNumber
                    };
                    ae.logEventWithStatsig(`Auth Modal Invalid Username`, e.usernameKind === `email` ? `chatgpt_auth_modal_invalid_email` : `chatgpt_auth_modal_invalid_phone_number`, e), ae.logStructuredEvent(`AccessFlowValidationError`, {
                        authSessionLoggingId: g[M],
                        page: D,
                        field: e.usernameKind === `email` ? se.ACCESS_FLOW_FIELD_EMAIL : se.ACCESS_FLOW_FIELD_PHONE,
                        validationType: m.ACCESS_FLOW_VALIDATION_TYPE_CLIENT
                    })
                }
                return {
                    fields: n
                }
            }
        }, t[39] = D, t[40] = g, t[41] = O, t[42] = F, t[43] = kt) : kt = t[43];
        let W;
        t[44] !== Dt || t[45] !== Ot || t[46] !== kt ? (W = {
            defaultValues: Dt,
            onSubmit: Ot,
            validators: kt
        }, t[44] = Dt, t[45] = Ot, t[46] = kt, t[47] = W) : W = t[47];
        let G = et(W),
            K;
        t[48] !== z || t[49] !== B || t[50] !== I ? (K = () => {
            if (I == null) return;
            B(j.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_ENTERED_EMAIL_DOMAIN);
            let {
                submittedValue: e
            } = I;
            Ve(null), z(e)
        }, t[48] = z, t[49] = B, t[50] = I, t[51] = K) : K = t[51];
        let jt = K,
            Mt;
        t[52] !== z || t[53] !== B || t[54] !== I || t[55] !== G ? (Mt = () => {
            if (I == null) return;
            B(j.ACCESS_FLOW_USER_ACTION_TYPE_USE_SUGGESTED_EMAIL_DOMAIN);
            let {
                submittedValue: e,
                suggestedEmail: t
            } = I;
            Ve(null), G.setFieldValue(`email`, t), z({
                ...e,
                email: t
            })
        }, t[52] = z, t[53] = B, t[54] = I, t[55] = G, t[56] = Mt) : Mt = t[56];
        let Nt = Mt,
            Pt;
        t[57] !== B || t[58] !== I ? (Pt = () => {
            I != null && (B(j.ACCESS_FLOW_USER_ACTION_TYPE_DISMISS_EMAIL_DOMAIN_TYPO_CONFIRMATION), Ve(null))
        }, t[57] = B, t[58] = I, t[59] = Pt) : Pt = t[59];
        let Ft = Pt,
            It;
        t[60] === Symbol.for(`react.memo_cache_sentinel`) ? (It = he(`3233347819`).get(`is_mobile_input_focus_capture_handled`, !1), t[60] = It) : It = t[60];
        let Lt = It,
            Rt;
        t[61] === A ? Rt = t[62] : (Rt = !A && s(), t[61] = A, t[62] = Rt);
        let zt = Rt,
            {
                controlHeightClassName: q,
                inputHeightClassName: Vt
            } = Ce ? {
                controlHeightClassName: `h-12`,
                inputHeightClassName: `h-12!`
            } : vt(k),
            Ht = Ce ? `gap-6 sm:gap-8` : k ? `gap-4 px-4 pb-4` : `gap-5 px-6 pb-10`,
            Ut = k && !Ce ? `gap-3` : `gap-4`,
            Wt = k && !Ce ? `gap-2.5` : `gap-3`,
            Gt = k ? `mb-1` : `mb-4`,
            Kt = k ? `mt-0` : ``,
            Jt = Ce ? `my-2.5! [&>div]:text-xs [&>div]:leading-3` : k ? `my-0!` : void 0,
            Yt;
        t[63] === F ? Yt = t[64] : (Yt = e => e.name !== F, t[63] = F, t[64] = Yt);
        let J = je.filter(Yt),
            Xt = x(q, `rounded-full text-base`),
            Zt;
        t[65] !== D || t[66] !== g || t[67] !== ve || t[68] !== V || t[69] !== R || t[70] !== Ct || t[71] !== Xt || t[72] !== L || t[73] !== G || t[74] !== F ? (Zt = e => {
            switch (e.name) {
                case `google`:
                    return (0, $.jsx)(st, {
                        provider: `google`,
                        disabled: e.tempDisabled || R,
                        className: Xt,
                        onClick: () => V(`google`),
                        color: ve
                    }, e.name);
                case `microsoft`:
                    return (0, $.jsx)(st, {
                        provider: `microsoft`,
                        disabled: e.tempDisabled || R,
                        className: Xt,
                        onClick: () => V(`microsoft`)
                    }, e.name);
                case `apple`:
                    return (0, $.jsx)(st, {
                        provider: `apple`,
                        disabled: e.tempDisabled || R,
                        className: Xt,
                        onClick: () => V(`apple`),
                        canceledLoginRecoveryTimeoutMs: L
                    }, e.name);
                case `email`:
                case `phone_number`:
                    return (0, $.jsx)(en, {
                        usernameKind: F,
                        setUsernameKind: Ct,
                        form: G,
                        disabled: R,
                        authSessionLoggingId: g[M],
                        accessFlowPage: D
                    }, e.name);
                default:
                    return null
            }
        }, t[65] = D, t[66] = g, t[67] = ve, t[68] = V, t[69] = R, t[70] = Ct, t[71] = Xt, t[72] = L, t[73] = G, t[74] = F, t[75] = Zt) : Zt = t[75];
        let Qt = Zt,
            $t = J.find(yn) ?? J.find(bn),
            Y = $t ? J.filter(e => e.name !== $t.name) : J,
            tn = ge === `social-and-username`,
            nn = ge !== `none` && !!$t && (Y.length > 0 || tn),
            an;
        t[76] !== zt || t[77] !== F ? (an = zt ? F === `email` ? (0, $.jsx)(P, {
            id: `logIn.submitWithEmail`,
            defaultMessage: `Continue with email`
        }) : (0, $.jsx)(P, {
            id: `logIn.submitWithPhone`,
            defaultMessage: `Continue with phone`
        }) : void 0, t[76] = zt, t[77] = F, t[78] = an) : an = t[78];
        let on = an,
            X;
        t[79] !== D || t[80] !== g || t[81] !== be || t[82] !== U || t[83] !== R || t[84] !== A || t[85] !== Fe || t[86] !== Ie || t[87] !== G.Field || t[88] !== F || t[89] !== Ne || t[90] !== H ? (X = e => (0, $.jsx)(G.Field, {
            name: `phoneNumber`,
            children: t => (0, $.jsx)(At, {
                usernameKind: F,
                emailProps: {
                    disabled: Fe
                },
                phoneProps: {
                    disabled: Ie
                },
                emailField: e,
                phoneNumberField: t,
                disabled: R,
                authSessionLoggingId: g[M],
                accessFlowPage: D,
                usernameKindSwitching$: H,
                exitUsernameKindSwitching: U,
                usernameKindSwitched: Ne,
                disableAutofocus: be,
                isPhotoLayout: A
            })
        }), t[79] = D, t[80] = g, t[81] = be, t[82] = U, t[83] = R, t[84] = A, t[85] = Fe, t[86] = Ie, t[87] = G.Field, t[88] = F, t[89] = Ne, t[90] = H, t[91] = X) : X = t[91];
        let sn;
        t[92] !== X || t[93] !== G.Field ? (sn = (0, $.jsx)(G.Field, {
            name: `email`,
            children: X
        }), t[92] = X, t[93] = G.Field, t[94] = sn) : sn = t[94];
        let cn = de ?? `primary`,
            un = Le || R,
            fn;
        t[95] !== Kt || t[96] !== on || t[97] !== Ye || t[98] !== cn || t[99] !== un ? (fn = (0, $.jsx)(Bt, {
            color: cn,
            className: Kt,
            disabled: un,
            isPending: Ye,
            text: on
        }), t[95] = Kt, t[96] = on, t[97] = Ye, t[98] = cn, t[99] = un, t[100] = fn) : fn = t[100];
        let pn;
        t[101] !== sn || t[102] !== fn ? (pn = (0, $.jsxs)($.Fragment, {
            children: [sn, fn]
        }), t[101] = sn, t[102] = fn, t[103] = pn) : pn = t[103];
        let Z = pn,
            mn = [`google`, `apple`, `email`, `phone_number`].flatMap(e => J.filter(t => t.name === e)),
            hn = J.filter(xn),
            Tn;
        t[104] === Symbol.for(`react.memo_cache_sentinel`) ? (Tn = (0, $.jsx)(P, {
            id: `loginForm.or`,
            defaultMessage: `OR`
        }), t[104] = Tn) : Tn = t[104];
        let En;
        t[105] === Jt ? En = t[106] : (En = (0, $.jsx)(wt, {
            className: Jt,
            children: Tn
        }), t[105] = Jt, t[106] = En);
        let Dn = En,
            On;
        t[107] !== N || t[108] !== Dn || t[109] !== tn || t[110] !== Z ? (On = tn ? (0, $.jsxs)($.Fragment, {
            children: [N && Dn, Z]
        }) : null, t[107] = N, t[108] = Dn, t[109] = tn, t[110] = Z, t[111] = On) : On = t[111];
        let kn = On,
            An = nn ? (0, $.jsxs)(`div`, {
                className: x(`flex flex-col`, Wt),
                children: [Qt($t), (0, $.jsx)(dn, {
                    collapsedLabel: (0, $.jsx)(P, {
                        id: `loginForm.moreOptions`,
                        defaultMessage: `More options`
                    }),
                    expandedLabel: (0, $.jsx)(P, {
                        id: `loginForm.hideOptions`,
                        defaultMessage: `Hide options`
                    }),
                    buttonClassName: q,
                    disabled: R,
                    hideButtonWhenOpen: !0,
                    children: (0, $.jsxs)(`div`, {
                        className: x(`flex flex-col`, Wt),
                        children: [Y.map(e => Qt(e)), kn]
                    })
                })]
            }) : (0, $.jsx)(`div`, {
                className: x(`flex flex-col`, Wt),
                children: J.map(e => Qt(e))
            }),
            jn = !tn,
            Mn = (0, Q.useRef)(null),
            Nn = (0, Q.useRef)(0),
            Pn = v && _e === `below-title`,
            Fn = v && _e === `bottom`,
            In, Ln;
        t[112] === Symbol.for(`react.memo_cache_sentinel`) ? (In = () => () => {
            Mn.current != null && window.clearTimeout(Mn.current)
        }, Ln = [], t[112] = In, t[113] = Ln) : (In = t[112], Ln = t[113]), (0, Q.useEffect)(In, Ln);
        let Rn = R && `opacity-50`,
            zn;
        t[114] === Rn ? zn = t[115] : (zn = x(`text-token-text-secondary cursor-pointer font-semibold underline sm:text-sm`, Rn), t[114] = Rn, t[115] = zn);
        let Bn;
        t[116] !== g || t[117] !== h || t[118] !== T || t[119] !== n ? (Bn = e => {
            if (e.preventDefault(), !T) {
                ae.logStructuredEvent(`AccessFlowUserAction`, {
                    authSessionLoggingId: g[M],
                    actionType: j.ACCESS_FLOW_USER_ACTION_TYPE_EXIT_STAY_LOGGED_OUT_LINK_CLICKED,
                    page: c.ACCESS_FLOW_PAGE_TYPE_CHATGPT_WEB_LOGIN_PAGE
                }), Te(ln(gt(h)));
                return
            }
            ae.logStructuredEvent(`AccessFlowUserAction`, {
                authSessionLoggingId: g[M],
                actionType: j.ACCESS_FLOW_USER_ACTION_TYPE_EXIT_STAY_LOGGED_OUT_LINK_CLICKED,
                page: c.ACCESS_FLOW_PAGE_TYPE_CHATGPT_WEB_LOGIN_MODAL
            }), n(`stay-logged-out-link`)
        }, t[116] = g, t[117] = h, t[118] = T, t[119] = n, t[120] = Bn) : Bn = t[120];
        let Vn;
        t[121] === y ? Vn = t[122] : (Vn = y ?? (0, $.jsx)(P, {
            id: `LoginForm.stayLoggedOut`,
            defaultMessage: `Stay logged out`
        }), t[121] = y, t[122] = Vn);
        let Hn;
        t[123] !== zn || t[124] !== Bn || t[125] !== Vn ? (Hn = (0, $.jsx)(`div`, {
            className: `text-center`,
            children: (0, $.jsx)(`a`, {
                href: `#`,
                className: zn,
                onClick: Bn,
                "data-testid": `dismiss-welcome`,
                children: Vn
            })
        }), t[123] = zn, t[124] = Bn, t[125] = Vn, t[126] = Hn) : Hn = t[126];
        let Un = Hn,
            Wn;
        t[127] === Symbol.for(`react.memo_cache_sentinel`) ? (Wn = [], t[127] = Wn) : Wn = t[127], (0, Q.useEffect)(Sn, Wn);
        let Gn = ft,
            Kn;
        t[128] !== q || t[129] !== Vt ? (Kn = {
            controlHeightClassName: q,
            inputHeightClassName: Vt
        }, t[128] = q, t[129] = Vt, t[130] = Kn) : Kn = t[130];
        let qn;
        t[131] !== jt || t[132] !== Nt || t[133] !== Ft || t[134] !== B || t[135] !== I ? (qn = I != null && (0, $.jsx)(ce, {
            for: Tt,
            withProps: {
                enteredDomain: I.enteredDomain,
                suggestedDomain: I.suggestedDomain,
                onContinueWithEnteredDomain: jt,
                onUseSuggestedDomain: Nt
            },
            open: !0,
            onOpen: () => {
                B(j.ACCESS_FLOW_USER_ACTION_TYPE_SHOW_EMAIL_DOMAIN_TYPO_CONFIRMATION)
            },
            onClose: Ft
        }), t[131] = jt, t[132] = Nt, t[133] = Ft, t[134] = B, t[135] = I, t[136] = qn) : qn = t[136];
        let Jn;
        t[137] === Ht ? Jn = t[138] : (Jn = x(`flex flex-col items-stretch`, Ht), t[137] = Ht, t[138] = Jn);
        let Yn = i ?? `text-3xl font-normal`,
            Xn;
        t[139] === Yn ? Xn = t[140] : (Xn = x(`text-center`, Yn), t[139] = Yn, t[140] = Xn);
        let Zn;
        t[141] === r ? Zn = t[142] : (Zn = r ?? (0, $.jsx)(P, {
            id: `NoAuthWelcomeBackModal.title`,
            defaultMessage: `Welcome back`
        }), t[141] = r, t[142] = Zn);
        let Qn;
        t[143] !== Ze || t[144] !== Xn || t[145] !== Zn ? (Qn = (0, $.jsx)(`h2`, {
            id: Ze,
            className: Xn,
            children: Zn
        }), t[143] = Ze, t[144] = Xn, t[145] = Zn, t[146] = Qn) : Qn = t[146];
        let $n = Pn && Un,
            er;
        t[147] !== A || t[148] !== l || t[149] !== a || t[150] !== Gt ? (er = (l || a) && (0, $.jsxs)(`div`, {
            className: x(`flex flex-col gap-3 px-4 text-center text-base`, A && `text-token-text-secondary`, Gt),
            children: [l && (0, $.jsx)(`p`, {
                className: `text-token-text-secondary`,
                children: l
            }), a && (0, $.jsx)(`p`, {
                children: a
            })]
        }), t[147] = A, t[148] = l, t[149] = a, t[150] = Gt, t[151] = er) : er = t[151];
        let tr;
        t[152] === Ut ? tr = t[153] : (tr = x(`flex flex-col`, Ut), t[152] = Ut, t[153] = tr);
        let nr;
        t[154] === k ? nr = t[155] : (nr = Lt ? e => {
            if (!k || !gn(e.target)) return;
            Mn.current != null && window.clearTimeout(Mn.current);
            let t = e.target;
            Nn.current += 1;
            let n = Nn.current;
            Mn.current = window.setTimeout(() => {
                let e = () => Nn.current === n && document.activeElement === t && t.isConnected;
                if (!e()) return;
                let r = () => {
                    e() && t.scrollIntoView({
                        block: `start`,
                        inline: `start`,
                        behavior: `smooth`
                    })
                };
                r(), window.setTimeout(r, wn / 2), window.setTimeout(r, wn)
            }, wn)
        } : void 0, t[154] = k, t[155] = nr);
        let rr;
        t[156] === G ? rr = t[157] : (rr = e => {
            e.preventDefault(), G.handleSubmit()
        }, t[156] = G, t[157] = rr);
        let ir = E ? (0, $.jsxs)($.Fragment, {
                children: [jn && Z, N && (0, $.jsxs)($.Fragment, {
                    children: [jn && Dn, An]
                })]
            }) : (0, $.jsxs)($.Fragment, {
                children: [N && (0, $.jsxs)($.Fragment, {
                    children: [A ? (0, $.jsx)(`div`, {
                        className: x(`flex flex-col`, Wt),
                        children: mn.map(e => Qt(e))
                    }) : An, jn && (!A || mn.length > 0) && Dn]
                }), jn && Z, A && hn.length > 0 && (0, $.jsx)(dn, {
                    collapsedLabel: (0, $.jsx)(P, {
                        id: `loginForm.moreOptions`,
                        defaultMessage: `More options`
                    }),
                    expandedLabel: (0, $.jsx)(P, {
                        id: `loginForm.hideOptions`,
                        defaultMessage: `Hide options`
                    }),
                    buttonColor: `ghost`,
                    buttonClassName: `text-token-text-secondary mx-auto h-9 w-auto! px-2 text-sm!`,
                    disabled: R,
                    children: (0, $.jsx)(`div`, {
                        className: x(`flex flex-col`, Wt),
                        children: hn.map(e => Qt(e))
                    })
                })]
            }),
            ar = Fn && Un,
            or;
        t[158] !== Ze || t[159] !== tr || t[160] !== nr || t[161] !== rr || t[162] !== ir || t[163] !== ar ? (or = (0, $.jsxs)(`form`, {
            className: tr,
            "aria-labelledby": Ze,
            autoComplete: `on`,
            onFocusCapture: nr,
            onSubmit: rr,
            noValidate: !0,
            children: [ir, ar]
        }), t[158] = Ze, t[159] = tr, t[160] = nr, t[161] = rr, t[162] = ir, t[163] = ar, t[164] = or) : or = t[164];
        let sr;
        t[165] !== Jn || t[166] !== Qn || t[167] !== $n || t[168] !== er || t[169] !== or ? (sr = (0, $.jsxs)(`div`, {
            className: Jn,
            "data-testid": `login-form`,
            children: [Qn, $n, er, or]
        }), t[165] = Jn, t[166] = Qn, t[167] = $n, t[168] = er, t[169] = or, t[170] = sr) : sr = t[170];
        let cr;
        return t[171] !== Gn || t[172] !== Kn || t[173] !== qn || t[174] !== sr ? (cr = (0, $.jsxs)(Gn, {
            value: Kn,
            children: [qn, sr]
        }), t[171] = Gn, t[172] = Kn, t[173] = qn, t[174] = sr, t[175] = cr) : cr = t[175], cr
    }
}));
export {
    En as n, hn as r, Tn as t
};
//# sourceMappingURL=35711af7-oy9s4kq5j2jbm0ap.js.map