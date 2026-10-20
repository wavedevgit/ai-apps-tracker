const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/19a7d0b3-nm01ftxm2kzdfptb.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-bo7e0c29ngt4zgx0.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css"]))) => i.map(i => d[i]);
import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    At as r,
    Bot as i,
    C_ as a,
    Cz as o,
    Dz as s,
    GR as c,
    HR as l,
    Hn as u,
    IF as d,
    IR as f,
    JR as p,
    JT as m,
    Jt as h,
    Ka as g,
    LF as _,
    LN as v,
    Mz as y,
    P5 as b,
    RF as x,
    RN as ee,
    S_ as te,
    Un as ne,
    Vot as re,
    WR as ie,
    Wa as ae,
    X0 as oe,
    X5 as S,
    XR as se,
    Xnt as ce,
    Y5 as C,
    YT as w,
    Ytt as le,
    Z0 as ue,
    Znt as T,
    _z as de,
    aat as fe,
    bnt as E,
    cct as pe,
    cn as me,
    cz as he,
    dct as ge,
    dit as _e,
    g8 as ve,
    hn as ye,
    ict as be,
    jR as D,
    jz as xe,
    l0 as O,
    lct as k,
    mnt as Se,
    oct as A,
    pz as Ce,
    qR as j,
    rit as we,
    sat as Te,
    sct as Ee,
    u0 as De,
    uct as Oe,
    vN as ke,
    vnt as Ae,
    yN as je,
    zF as Me
} from "./4813494d-bo7e0c29ngt4zgx0.js";
import {
    Bn as M,
    Nn as N,
    Q as P,
    Rn as Ne,
    Vn as Pe,
    Vt as Fe,
    cn as Ie,
    ln as Le,
    wn as Re,
    zn as ze
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    i as Be,
    n as Ve,
    r as F,
    t as He
} from "./d42ee766-ld5czbpkefve6q9o.js";
import {
    Aht as Ue,
    D9 as I,
    Hrt as We,
    O9 as Ge,
    Urt as Ke,
    kht as qe
} from "./conversation-small-ikg0dwuw782klweb.js";
import {
    $b as Je,
    DC as L,
    EC as Ye,
    Qb as Xe,
    bf as Ze,
    yf as Qe
} from "./30901919-e8h11sw136qen6v0.js";
import {
    Fx as $e,
    Ix as et,
    Vf as tt,
    zf as nt
} from "./c2675c8c-ejvs9hq3rwjwsbcv.js";
import {
    a as rt,
    i as it,
    n as at,
    o as ot,
    r as R,
    s as st,
    t as ct
} from "./c09d86e5-fgoohn2w2vrkcgwk.js";
import {
    a as lt,
    s as ut,
    t as z
} from "./d524c1a0-kf8xptmqzrr0sb1q.js";
import {
    c as dt,
    d as B,
    f as V,
    i as ft,
    l as pt,
    m as mt,
    n as ht,
    p as gt,
    r as _t,
    s as H,
    t as vt,
    u as yt
} from "./c982bafe-o0ti19z4djf4llrq.js";
import {
    n as bt,
    t as xt
} from "./c51faa14-ovtqbvfxvysf50nx.js";
import {
    n as St,
    t as Ct
} from "./5e6083c9-kcd16t093lafzqi5.js";
import {
    n as wt,
    t as Tt
} from "./966be48d-kt0akpg9tmx4onkc.js";
var Et, Dt = e((() => {
    ue(), Le(), Et = oe(() => Ie(() => import(`./19a7d0b3-nm01ftxm2kzdfptb.js`).then(e => e.EmailDomainTypoConfirmationDialogContent), __vite__mapDeps([0, 1, 2, 3, 4])))
}));

function Ot() {
    "use forget";
    let e = (0, U.c)(2),
        t;
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = gt(`1063781658`, Mt, {
        countryCodes: []
    }), e[0] = t) : t = e[0];
    let {
        countryCodes: n
    } = t, r;
    return e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (r = n?.filter(kt), e[1] = r) : r = e[1], r
}

function kt(e) {
    return lt(e)
}

function At(e) {
    let t = i().userCountry;
    if (!t) return Pt;
    let n = t.toUpperCase();
    return e.length === 0 || e.includes(n) ? n : Pt
}
var U, W, G, jt, Mt, Nt, Pt, Ft, It, Lt, Rt = e((() => {
    U = Re(), Ke(), Ve(), ve(), E(), I(), le(), v(), se(), re(), z(), r(), W = n(Pe()), Ne(), Ee(), mt(), B(), bt(), St(), G = M(), jt = e => {
        "use forget";
        let t = (0, U.c)(39),
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
            g = p !== void 0 && p,
            _ = m !== void 0 && m,
            v = ze(),
            y = Ot(),
            {
                inputHeightClassName: x,
                controlHeightClassName: ee
            } = V(),
            te;
        t[0] !== v || t[1] !== _ ? (te = _ ? v.formatMessage({
            id: `Login.photoEmail`,
            defaultMessage: `Email`
        }) : v.formatMessage({
            id: `dynamicUsernameInput.email`,
            defaultMessage: `Email address`
        }), t[0] = v, t[1] = _, t[2] = te) : te = t[2];
        let ne = te,
            re = b(u),
            ae;
        t[3] === d ? ae = t[4] : (ae = function() {
            d()
        }, t[3] = d, t[4] = ae);
        let oe = ae,
            S;
        t[5] !== l || t[6] !== c ? (S = () => Ae.logStructuredEvent(`AccessFlowUserAction`, {
            authSessionLoggingId: c,
            actionType: j.ACCESS_FLOW_USER_ACTION_TYPE_INPUT,
            page: l,
            field: ie.ACCESS_FLOW_FIELD_EMAIL
        }), t[5] = l, t[6] = c, t[7] = S) : S = t[7];
        let se = Ge(S),
            ce;
        t[8] !== l || t[9] !== c ? (ce = () => Ae.logStructuredEvent(`AccessFlowUserAction`, {
            authSessionLoggingId: c,
            actionType: j.ACCESS_FLOW_USER_ACTION_TYPE_INPUT,
            page: l,
            field: ie.ACCESS_FLOW_FIELD_PHONE
        }), t[8] = l, t[9] = c, t[10] = ce) : ce = t[10];
        let C = Ge(ce),
            w;
        t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (w = Se(), t[11] = w) : w = t[11];
        let le = w,
            ue = !!h(),
            T, de;
        if (t[12] !== ue) {
            let e = Ft(ue);
            T = It(e), de = Lt(e), t[12] = ue, t[13] = T, t[14] = de
        } else T = t[13], de = t[14];
        let fe = de,
            E;
        t[15] !== c || t[16] !== ee || t[17] !== g || t[18] !== s || t[19] !== T || t[20] !== a || t[21] !== ne || t[22] !== r || t[23] !== x || t[24] !== v || t[25] !== _ || t[26] !== se || t[27] !== C || t[28] !== fe || t[29] !== o || t[30] !== i || t[31] !== y || t[32] !== n || t[33] !== f || t[34] !== re ? (E = n === `email` ? (0, G.jsx)(me.div, {
            className: `-m-1 overflow-hidden p-1`,
            ...re ? {
                ...T
            } : {},
            children: (0, G.jsx)(Nt, {
                disabled: g || le && !f,
                onInitialValue: e => {
                    e !== a.state.value && (F(window.location.pathname) && (e || a.state.value) && Be(`warn`, `Login email hydration reconciliation`, {
                        phase: `layout_reconciliation`,
                        auth_session_logging_id: c,
                        dom_email_present: !!e,
                        form_state_email_present: !!a.state.value,
                        email_input_focused: document.activeElement === He(),
                        reconciliation_direction: e ? a.state.value ? `different_nonempty` : `dom_to_empty_state` : `empty_dom_to_state`
                    }), a.handleChange(e))
                },
                children: e => {
                    let {
                        ref: t
                    } = e;
                    return (0, G.jsx)(We, {
                        ref: t,
                        name: a.name,
                        value: a.state.value,
                        onChange: e => {
                            a.handleChange(e.target.value), se()
                        },
                        inputClassName: `w-full ${_?`rounded-xl!`:`rounded-full!`} text-base! sm:text-base! px-5! py-3! ${x}`,
                        error: a.state.meta.errors.join(`,`) ?? void 0,
                        showErrorIcon: !0,
                        ariaLabel: ne,
                        placeholder: ne,
                        className: `focus-within:border-token-border-heavy! ${_?`rounded-xl!`:`rounded-full!`} border-[var(--border-heavy)] p-0! px-0! py-0! focus-within:ring-1`,
                        type: `email`,
                        autoComplete: `email`,
                        autoFocus: !le && !g,
                        ...r,
                        disabled: s
                    })
                }
            })
        }, `email`) : n === `phone_number` ? (0, G.jsx)(me.div, {
            className: `-m-1 overflow-hidden p-1`,
            ...re ? {
                ...fe
            } : {},
            children: (0, G.jsx)(Nt, {
                disabled: g,
                children: e => {
                    let {
                        ref: t
                    } = e;
                    return (0, G.jsx)(Ct, {
                        nativeInputRef: t,
                        countries: y,
                        defaultCountry: At(y),
                        controlHeightClassName: ee,
                        inputHeightClassName: x,
                        value: o.state.value,
                        setValue: e => {
                            o.handleChange(e), C()
                        },
                        error: o.state.meta.errors.join(`,`) ?? void 0,
                        label: v.formatMessage({
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
        }, `phone_number`) : null, t[15] = c, t[16] = ee, t[17] = g, t[18] = s, t[19] = T, t[20] = a, t[21] = ne, t[22] = r, t[23] = x, t[24] = v, t[25] = _, t[26] = se, t[27] = C, t[28] = fe, t[29] = o, t[30] = i, t[31] = y, t[32] = n, t[33] = f, t[34] = re, t[35] = E) : E = t[35];
        let pe;
        return t[36] !== oe || t[37] !== E ? (pe = (0, G.jsx)(`div`, {
            className: `relative`,
            children: (0, G.jsx)(ye, {
                mode: `wait`,
                initial: !1,
                onExitComplete: oe,
                children: E
            })
        }), t[36] = oe, t[37] = E, t[38] = pe) : pe = t[38], pe
    }, Mt = k({
        countryCodes: be(Oe())
    }), Nt = e => {
        "use forget";
        let t = (0, U.c)(10),
            {
                children: n,
                disabled: r,
                onInitialValue: i
            } = e,
            a = r !== void 0 && r,
            o = (0, W.useRef)(null),
            s = (0, W.useRef)(!1),
            c, l;
        t[0] === i ? (c = t[1], l = t[2]) : (c = () => {
            o.current && !s.current && (s.current = !0, i?.(o.current.value))
        }, l = [i], t[0] = i, t[1] = c, t[2] = l), ee(c, l);
        let u, d;
        t[3] === a ? (u = t[4], d = t[5]) : (u = () => {
            if (o.current && !a) return xt(o.current)
        }, d = [a], t[3] = a, t[4] = u, t[5] = d), (0, W.useEffect)(u, d);
        let f;
        t[6] === n ? f = t[7] : (f = n({
            ref: o
        }), t[6] = n, t[7] = f);
        let p;
        return t[8] === f ? p = t[9] : (p = (0, G.jsx)(G.Fragment, {
            children: f
        }), t[8] = f, t[9] = p), p
    }, Pt = `US`, Ft = e => ({
        opacity: {
            duration: e ? 0 : .1
        },
        height: {
            duration: e ? 0 : .22,
            ease: `easeInOut`
        }
    }), It = e => ({
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
    }), Lt = e => ({
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

function zt() {
    return fe.addAction(`login-form.continue`)
}
var Bt, K, Vt, Ht = e((() => {
    Bt = Re(), w(), y(), Te(), S(), Ne(), B(), K = M(), Vt = e => {
        "use forget";
        let t = (0, Bt.c)(16),
            n, r, i, a;
        t[0] === e ? (n = t[1], r = t[2], i = t[3], a = t[4]) : ({
            className: n,
            isPending: r,
            text: a,
            ...i
        } = e, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a);
        let {
            controlHeightClassName: o
        } = V(), s;
        t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, K.jsx)(N, {
            id: `continueButton.continue`,
            defaultMessage: `Continue`
        }), t[5] = s) : s = t[5];
        let c = a ?? s,
            l = `mt-1.5 ${o} w-full rounded-full text-base`,
            u;
        t[6] !== n || t[7] !== l ? (u = C(l, n), t[6] = n, t[7] = l, t[8] = u) : u = t[8];
        let d;
        t[9] !== c || t[10] !== r ? (d = r ? (0, K.jsxs)(K.Fragment, {
            children: [(0, K.jsx)(xe, {
                className: `text-base`
            }), (0, K.jsx)(`span`, {
                className: `sr-only`,
                children: c
            })]
        }) : c, t[9] = c, t[10] = r, t[11] = d) : d = t[11];
        let f;
        return t[12] !== i || t[13] !== u || t[14] !== d ? (f = (0, K.jsx)(m, {
            type: `submit`,
            onClick: zt,
            className: u,
            ...i,
            children: d
        }), t[12] = i, t[13] = u, t[14] = d, t[15] = f) : f = t[15], f
    }
}));

function Ut(e, t) {
    let [n, r] = Fe(), i = Object.fromEntries(n);
    return [pe(i, e) ? i : t, r, (e, t) => {
        r({
            ...Object.fromEntries(n),
            ...e
        }, t)
    }]
}
var Wt = e((() => {
        P(), Ee()
    })),
    Gt, Kt, qt = e((() => {
        Ee(), Gt = A([`email`, `phone_number`]), Kt = `email`
    }));

function Jt(e) {
    "use forget";
    let t = (0, Yt.c)(4),
        {
            allowPhone: n
        } = e,
        r = n && Ce() ? `phone_number` : Kt,
        i;
    t[0] === r ? i = t[1] : (i = {
        usernameKind: r
    }, t[0] = r, t[1] = i);
    let [a] = Ut(q, i), [o, s] = (0, Xt.useState)(n ? a.usernameKind : Kt), c;
    return t[2] === o ? c = t[3] : (c = [o, s], t[2] = o, t[3] = c), c
}
var Yt, Xt, q, Zt = e((() => {
    Yt = Re(), he(), Xt = n(Pe()), Ee(), Wt(), qt(), q = ge({
        usernameKind: Gt
    })
}));

function Qt(e) {
    return setTimeout(e, 300)
}
var $t, en, J, tn, Y, nn = e((() => {
    $t = Re(), w(), Ze(), Xe(), E(), Te(), se(), a(), en = n(Pe()), Ne(), B(), J = M(), tn = e => {
        "use forget";
        let t = (0, $t.c)(24),
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
        t[0] !== i || t[1] !== r ? (u = te(async e => {
            await r(e), await new Promise(Qt), i.reset()
        }, 50, {
            leading: !0,
            trailing: !1
        }), t[0] = i, t[1] = r, t[2] = u) : u = t[2];
        let d = u,
            f, p;
        t[3] === d ? (f = t[4], p = t[5]) : (f = () => () => {
            d.cancel()
        }, p = [d], t[3] = d, t[4] = f, t[5] = p), (0, en.useEffect)(f, p);
        let m;
        t[6] !== c || t[7] !== s || t[8] !== d ? (m = async (e, t) => {
            Ae.logStructuredEvent(`AccessFlowUserAction`, {
                authSessionLoggingId: s,
                actionType: e === `email` ? j.ACCESS_FLOW_USER_ACTION_TYPE_SWITCH_TO_EMAIL : j.ACCESS_FLOW_USER_ACTION_TYPE_SWITCH_TO_PHONE,
                page: c
            }), fe.addAction(t), await d(e)
        }, t[6] = c, t[7] = s, t[8] = d, t[9] = m) : m = t[9];
        let h = m;
        switch (n) {
            case `email`: {
                let e;
                t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, J.jsx)(N, {
                    id: `logIn.continueWithPhone`,
                    defaultMessage: `Continue with phone`
                }), t[10] = e) : e = t[10];
                let n;
                t[11] === h ? n = t[12] : (n = () => h(`phone_number`, `login-form.switch_to_phone`), t[11] = h, t[12] = n);
                let r;
                return t[13] !== l || t[14] !== o || t[15] !== n ? (r = (0, J.jsx)(Y, {
                    size: 17,
                    text: e,
                    icon: Je,
                    onClick: n,
                    align: l,
                    disabled: o
                }), t[13] = l, t[14] = o, t[15] = n, t[16] = r) : r = t[16], r
            }
            case `phone_number`: {
                let e;
                t[17] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, J.jsx)(N, {
                    id: `logIn.continueWithEmail`,
                    defaultMessage: `Continue with email`
                }), t[17] = e) : e = t[17];
                let n;
                t[18] === h ? n = t[19] : (n = () => h(`email`, `login-form.switch_to_email`), t[18] = h, t[19] = n);
                let r;
                return t[20] !== l || t[21] !== o || t[22] !== n ? (r = (0, J.jsx)(Y, {
                    size: 19,
                    text: e,
                    icon: Qe,
                    onClick: n,
                    align: l,
                    disabled: o
                }), t[20] = l, t[21] = o, t[22] = n, t[23] = r) : r = t[23], r
            }
        }
    }, Y = e => {
        "use forget";
        let t = (0, $t.c)(9),
            {
                text: n,
                icon: r,
                onClick: i,
                size: a,
                disabled: o
            } = e,
            {
                controlHeightClassName: s
            } = V(),
            c = `${s} rounded-full text-base`,
            l;
        t[0] !== r || t[1] !== a ? (l = (0, J.jsx)(`span`, {
            className: `relative grid h-4 w-4 place-items-center`,
            children: (0, J.jsx)(`span`, {
                className: `absolute`,
                children: (0, J.jsx)(r, {
                    width: a,
                    height: a
                })
            })
        }), t[0] = r, t[1] = a, t[2] = l) : l = t[2];
        let u;
        return t[3] !== o || t[4] !== i || t[5] !== c || t[6] !== l || t[7] !== n ? (u = (0, J.jsxs)(m, {
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
    if (!ne.test(e)) return null;
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
    u(), X = [`gmail.com`, `yahoo.com`, `hotmail.com`, `outlook.com`, `icloud.com`, `naver.com`, `aol.com`, `proton.me`], sn = new Set([...X, `email.com`, `mail.com`, `ymail.com`])
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
    Me()
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
        [h, g] = (0, pn.useState)(d),
        _;
    t[0] === o ? _ = t[1] : (_ = C(`flex flex-col gap-3`, o), t[0] = o, t[1] = _);
    let v;
    t[2] !== i || t[3] !== h ? (v = h && (0, Z.jsx)(me.div, {
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
    }, `content`), t[2] = i, t[3] = h, t[4] = v) : v = t[4];
    let y;
    t[5] === v ? y = t[6] : (y = (0, Z.jsx)(ye, {
        initial: !1,
        children: v
    }), t[5] = v, t[6] = y);
    let b;
    t[7] !== s || t[8] !== f || t[9] !== n || t[10] !== l || t[11] !== r || t[12] !== p || t[13] !== h ? (b = !p || !h ? (0, Z.jsx)(m, {
        type: `button`,
        color: f,
        className: C(`w-full rounded-full text-base`, s),
        contentWrapperClassName: `w-full`,
        "aria-expanded": h,
        "aria-controls": `content`,
        disabled: l,
        onClick: () => g(!h),
        children: (0, Z.jsxs)(`span`, {
            className: `flex w-full items-center justify-center gap-2`,
            children: [(0, Z.jsx)(`span`, {
                children: h ? r : n
            }), (0, Z.jsx)(Ye, {
                className: C(`icon-sm transition-transform duration-200`, h && `rotate-180`)
            })]
        })
    }) : null, t[7] = s, t[8] = f, t[9] = n, t[10] = l, t[11] = r, t[12] = p, t[13] = h, t[14] = b) : b = t[14];
    let x;
    return t[15] !== _ || t[16] !== y || t[17] !== b ? (x = (0, Z.jsxs)(`div`, {
        className: _,
        children: [y, b]
    }), t[15] = _, t[16] = y, t[17] = b, t[18] = x) : x = t[18], x
}
var fn, pn, Z, mn = e((() => {
        fn = Re(), w(), L(), S(), r(), pn = n(Pe()), Z = M()
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
    if (!Ue()) return;
    let e = navigator.virtualKeyboard.overlaysContent;
    return navigator.virtualKeyboard.overlaysContent = !1, () => {
        navigator.virtualKeyboard.overlaysContent = e
    }
}
var Cn, Q, $, wn, Tn, En = e((() => {
    Cn = Re(), D(), he(), Dt(), Rt(), Ht(), rt(), H(), wt(), B(), ht(), at(), Zt(), nn(), R(), cn(), un(), g(), Me(), $e(), _e(), E(), u(), O(), T(), ke(), le(), qe(), mn(), se(), nt(), S(), z(), a(), r(), Q = n(Pe()), Ne(), $ = M(), wn = 300, Tn = e => {
        "use forget";
        let t = (0, Cn.c)(176),
            {
                onClose: n,
                title: r,
                titleClassName: i,
                subtitle: a,
                mutedSubtitle: u,
                initialEmail: m,
                callbackUrl: g,
                authorizationParams: v,
                isStayLoggedOutVisible: y,
                stayLoggedOutText: b,
                isInModal: ee,
                isUsernameOnTop: re,
                collapsedLoginVariant: oe,
                stayLoggedOutPlacement: S,
                continueButtonColor: se,
                googleButtonColor: w,
                hidePhoneOption: le,
                disableAutofocus: ue,
                accessFlowEntryPoint: T,
                accessFlowPage: fe,
                layoutVariant: E
            } = e,
            pe = ee === void 0 || ee,
            me = re !== void 0 && re,
            he = oe === void 0 ? `none` : oe,
            ge = S === void 0 ? `bottom` : S,
            _e = w === void 0 ? `secondary` : w,
            ve = le !== void 0 && le,
            ye = ue !== void 0 && ue,
            be = T === void 0 ? l.ACCESS_FLOW_ENTRY_POINT_LOGIN_MODAL : T,
            D = fe === void 0 ? c.ACCESS_FLOW_PAGE_TYPE_CHATGPT_WEB_LOGIN_MODAL : fe,
            xe = E === void 0 ? `default` : E,
            O = ze(),
            k = Se(),
            A = xe === `photo`,
            Ce = xe === `gift-card`,
            Te;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (Te = {
            loginStrategy: `existing_user`
        }, t[0] = Te) : Te = t[0];
        let {
            phoneNumberOption: Ee,
            emailOption: Oe,
            optionsForDisplay: ke
        } = dt(Te), Me = ve ? ke.filter(_n) : ke, M = Me.length > 1, [P, Ne] = Jt({
            allowPhone: Me.some(vn)
        }), [Pe, Fe] = (0, Q.useState)(!1), Ie = Oe.tempDisabled, Le = Ee.tempDisabled, Re = P === `email` && Ie || P === `phone_number` && Le, [Be, Ve] = (0, Q.useState)(!1), [F, He] = (0, Q.useState)(null), Ue;
        t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (Ue = () => Ve(!1), t[1] = Ue) : Ue = t[1], st(Ue);
        let [I, We] = (0, Q.useState)(null), [Ge, Ke] = ot(!0), qe, Je;
        t[2] !== Ge || t[3] !== Ke || t[4] !== I ? (qe = () => {
            if (!(!Ge || I == null)) return it(() => Ke(!1), I)
        }, Je = [Ge, Ke, I], t[2] = Ge, t[3] = Ke, t[4] = I, t[5] = qe, t[6] = Je) : (qe = t[5], Je = t[6]), (0, Q.useEffect)(qe, Je);
        let L = Be || Ge,
            Ye;
        t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (Ye = d(), t[7] = Ye) : Ye = t[7];
        let [Xe, Ze] = ot(Ye), Qe = (0, Q.useId)(), $e = h(), nt;
        t[8] !== v || t[9] !== g ? (nt = vt(g, v), t[8] = v, t[9] = g, t[10] = nt) : nt = t[10];
        let rt = nt,
            at;
        t[11] !== D || t[12] !== v || t[13] !== n || t[14] !== Ze || t[15] !== rt || t[16] !== P ? (at = async e => {
            Ve(!0), Ze(!0), await rt({
                screen_hint: `login_or_signup`,
                login_hint: P === `email` ? e.email : e.phoneNumber
            }, () => {
                f(v[we], j.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE, D, P === `email` ? ie.ACCESS_FLOW_FIELD_EMAIL : ie.ACCESS_FLOW_FIELD_PHONE)
            })
        }, t[11] = D, t[12] = v, t[13] = n, t[14] = Ze, t[15] = rt, t[16] = P, t[17] = at) : at = t[17];
        let R = at,
            lt;
        t[18] !== D || t[19] !== v ? (lt = e => {
            Ae.logStructuredEvent(`AccessFlowUserAction`, {
                authSessionLoggingId: v[we],
                actionType: e,
                page: D,
                field: ie.ACCESS_FLOW_FIELD_EMAIL
            })
        }, t[18] = D, t[19] = v, t[20] = lt) : lt = t[20];
        let z = lt,
            B = async e => {
                We(k && e === `apple` && _() ? x() : null), Ke(!0), await ft(rt, e, v[we], be, D)
            }, V = et(!1), mt;
        t[21] === V ? mt = t[22] : (mt = () => V.set(!1), t[21] = V, t[22] = mt);
        let ht = $e ? 0 : 800,
            gt;
        t[23] !== mt || t[24] !== ht ? (gt = te(mt, ht, {
            leading: !1,
            trailing: !0
        }), t[23] = mt, t[24] = ht, t[25] = gt) : gt = t[25];
        let H = gt,
            bt = (0, Q.useRef)(!0),
            xt, St;
        t[26] === H ? (xt = t[27], St = t[28]) : (xt = () => (bt.current = !0, () => {
            bt.current = !1, H.cancel()
        }), St = [H], t[26] = H, t[27] = xt, t[28] = St), (0, Q.useEffect)(xt, St);
        let Ct;
        t[29] !== Ne || t[30] !== H || t[31] !== $e || t[32] !== V ? (Ct = async e => {
            if (Fe(!0), Se()) V.set(!1);
            else {
                if (V.set(!0), await new Promise(e => setTimeout(e, $e ? 0 : 50)), !bt.current) return;
                H()
            }
            bt.current && Ne(e)
        }, t[29] = Ne, t[30] = H, t[31] = $e, t[32] = V, t[33] = Ct) : Ct = t[33];
        let wt = je(Ct),
            Dt = m ?? ``,
            Ot;
        t[34] === Dt ? Ot = t[35] : (Ot = {
            email: Dt,
            phoneNumber: ``
        }, t[34] = Dt, t[35] = Ot);
        let kt;
        t[36] !== R || t[37] !== P ? (kt = async e => {
            let {
                value: t
            } = e;
            if (P === `email`) {
                let e = rn(t.email);
                if (e != null && de()) {
                    He({
                        ...e,
                        submittedValue: {
                            ...t
                        }
                    });
                    return
                }
            }
            await R(t)
        }, t[36] = R, t[37] = P, t[38] = kt) : kt = t[38];
        let At;
        t[39] !== D || t[40] !== v || t[41] !== O || t[42] !== P ? (At = {
            onSubmit: e => {
                let {
                    value: t
                } = e, n = {};
                if (t.email = t.email.trim(), t.phoneNumber = t.phoneNumber.trim(), P === `email` ? t.email ? ne.test(t.email) || (n.email = o() ? O.formatMessage({
                        id: `loginForm.emailInvalidActionable`,
                        defaultMessage: `That email doesn't look right. Check for a missing @, typo, or incomplete domain.`
                    }) : O.formatMessage({
                        id: `loginForm.emailInvalid`,
                        defaultMessage: `Email is not valid.`
                    })) : n.email = O.formatMessage({
                        id: `loginForm.emailRequired`,
                        defaultMessage: `Email is required.`
                    }) : t.phoneNumber ? ut(t.phoneNumber) || (n.phoneNumber = O.formatMessage({
                        id: `loginForm.phoneNumberInvalid`,
                        defaultMessage: `Phone number is not valid.`
                    })) : n.phoneNumber = O.formatMessage({
                        id: `loginForm.phoneNumberRequired`,
                        defaultMessage: `Phone number is required.`
                    }), n.email || n.phoneNumber) {
                    let e = {
                        usernameKind: P,
                        username: P === `email` ? t.email : t.phoneNumber
                    };
                    Ae.logEventWithStatsig(`Auth Modal Invalid Username`, e.usernameKind === `email` ? `chatgpt_auth_modal_invalid_email` : `chatgpt_auth_modal_invalid_phone_number`, e), Ae.logStructuredEvent(`AccessFlowValidationError`, {
                        authSessionLoggingId: v[we],
                        page: D,
                        field: e.usernameKind === `email` ? ie.ACCESS_FLOW_FIELD_EMAIL : ie.ACCESS_FLOW_FIELD_PHONE,
                        validationType: p.ACCESS_FLOW_VALIDATION_TYPE_CLIENT
                    })
                }
                return {
                    fields: n
                }
            }
        }, t[39] = D, t[40] = v, t[41] = O, t[42] = P, t[43] = At) : At = t[43];
        let U;
        t[44] !== Ot || t[45] !== kt || t[46] !== At ? (U = {
            defaultValues: Ot,
            onSubmit: kt,
            validators: At
        }, t[44] = Ot, t[45] = kt, t[46] = At, t[47] = U) : U = t[47];
        let W = tt(U),
            G;
        t[48] !== R || t[49] !== z || t[50] !== F ? (G = () => {
            if (F == null) return;
            z(j.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_ENTERED_EMAIL_DOMAIN);
            let {
                submittedValue: e
            } = F;
            He(null), R(e)
        }, t[48] = R, t[49] = z, t[50] = F, t[51] = G) : G = t[51];
        let Mt = G,
            Nt;
        t[52] !== R || t[53] !== z || t[54] !== F || t[55] !== W ? (Nt = () => {
            if (F == null) return;
            z(j.ACCESS_FLOW_USER_ACTION_TYPE_USE_SUGGESTED_EMAIL_DOMAIN);
            let {
                submittedValue: e,
                suggestedEmail: t
            } = F;
            He(null), W.setFieldValue(`email`, t), R({
                ...e,
                email: t
            })
        }, t[52] = R, t[53] = z, t[54] = F, t[55] = W, t[56] = Nt) : Nt = t[56];
        let Pt = Nt,
            Ft;
        t[57] !== z || t[58] !== F ? (Ft = () => {
            F != null && (z(j.ACCESS_FLOW_USER_ACTION_TYPE_DISMISS_EMAIL_DOMAIN_TYPO_CONFIRMATION), He(null))
        }, t[57] = z, t[58] = F, t[59] = Ft) : Ft = t[59];
        let It = Ft,
            Lt;
        t[60] === Symbol.for(`react.memo_cache_sentinel`) ? (Lt = ce(`3233347819`).get(`is_mobile_input_focus_capture_handled`, !1), t[60] = Lt) : Lt = t[60];
        let Rt = Lt,
            zt;
        t[61] === A ? zt = t[62] : (zt = !A && s(), t[61] = A, t[62] = zt);
        let Bt = zt,
            {
                controlHeightClassName: K,
                inputHeightClassName: Ht
            } = Ce ? {
                controlHeightClassName: `h-12`,
                inputHeightClassName: `h-12!`
            } : yt(k),
            Ut = Ce ? `gap-6 sm:gap-8` : k ? `gap-4 px-4 pb-4` : `gap-5 px-6 pb-10`,
            Wt = k && !Ce ? `gap-3` : `gap-4`,
            Gt = k && !Ce ? `gap-2.5` : `gap-3`,
            Kt = k ? `mb-1` : `mb-4`,
            qt = k ? `mt-0` : ``,
            Yt = Ce ? `my-2.5! [&>div]:text-xs [&>div]:leading-3` : k ? `my-0!` : void 0,
            Xt;
        t[63] === P ? Xt = t[64] : (Xt = e => e.name !== P, t[63] = P, t[64] = Xt);
        let q = Me.filter(Xt),
            Zt = C(K, `rounded-full text-base`),
            Qt;
        t[65] !== D || t[66] !== v || t[67] !== _e || t[68] !== B || t[69] !== L || t[70] !== wt || t[71] !== Zt || t[72] !== I || t[73] !== W || t[74] !== P ? (Qt = e => {
            switch (e.name) {
                case `google`:
                    return (0, $.jsx)(ct, {
                        provider: `google`,
                        disabled: e.tempDisabled || L,
                        className: Zt,
                        onClick: () => B(`google`),
                        color: _e
                    }, e.name);
                case `microsoft`:
                    return (0, $.jsx)(ct, {
                        provider: `microsoft`,
                        disabled: e.tempDisabled || L,
                        className: Zt,
                        onClick: () => B(`microsoft`)
                    }, e.name);
                case `apple`:
                    return (0, $.jsx)(ct, {
                        provider: `apple`,
                        disabled: e.tempDisabled || L,
                        className: Zt,
                        onClick: () => B(`apple`),
                        canceledLoginRecoveryTimeoutMs: I
                    }, e.name);
                case `email`:
                case `phone_number`:
                    return (0, $.jsx)(tn, {
                        usernameKind: P,
                        setUsernameKind: wt,
                        form: W,
                        disabled: L,
                        authSessionLoggingId: v[we],
                        accessFlowPage: D
                    }, e.name);
                default:
                    return null
            }
        }, t[65] = D, t[66] = v, t[67] = _e, t[68] = B, t[69] = L, t[70] = wt, t[71] = Zt, t[72] = I, t[73] = W, t[74] = P, t[75] = Qt) : Qt = t[75];
        let $t = Qt,
            en = q.find(yn) ?? q.find(bn),
            J = en ? q.filter(e => e.name !== en.name) : q,
            Y = he === `social-and-username`,
            nn = he !== `none` && !!en && (J.length > 0 || Y),
            an;
        t[76] !== Bt || t[77] !== P ? (an = Bt ? P === `email` ? (0, $.jsx)(N, {
            id: `logIn.submitWithEmail`,
            defaultMessage: `Continue with email`
        }) : (0, $.jsx)(N, {
            id: `logIn.submitWithPhone`,
            defaultMessage: `Continue with phone`
        }) : void 0, t[76] = Bt, t[77] = P, t[78] = an) : an = t[78];
        let on = an,
            X;
        t[79] !== D || t[80] !== v || t[81] !== ye || t[82] !== H || t[83] !== L || t[84] !== A || t[85] !== Ie || t[86] !== Le || t[87] !== W.Field || t[88] !== P || t[89] !== Pe || t[90] !== V ? (X = e => (0, $.jsx)(W.Field, {
            name: `phoneNumber`,
            children: t => (0, $.jsx)(jt, {
                usernameKind: P,
                emailProps: {
                    disabled: Ie
                },
                phoneProps: {
                    disabled: Le
                },
                emailField: e,
                phoneNumberField: t,
                disabled: L,
                authSessionLoggingId: v[we],
                accessFlowPage: D,
                usernameKindSwitching$: V,
                exitUsernameKindSwitching: H,
                usernameKindSwitched: Pe,
                disableAutofocus: ye,
                isPhotoLayout: A
            })
        }), t[79] = D, t[80] = v, t[81] = ye, t[82] = H, t[83] = L, t[84] = A, t[85] = Ie, t[86] = Le, t[87] = W.Field, t[88] = P, t[89] = Pe, t[90] = V, t[91] = X) : X = t[91];
        let sn;
        t[92] !== X || t[93] !== W.Field ? (sn = (0, $.jsx)(W.Field, {
            name: `email`,
            children: X
        }), t[92] = X, t[93] = W.Field, t[94] = sn) : sn = t[94];
        let cn = se ?? `primary`,
            un = Re || L,
            fn;
        t[95] !== qt || t[96] !== on || t[97] !== Xe || t[98] !== cn || t[99] !== un ? (fn = (0, $.jsx)(Vt, {
            color: cn,
            className: qt,
            disabled: un,
            isPending: Xe,
            text: on
        }), t[95] = qt, t[96] = on, t[97] = Xe, t[98] = cn, t[99] = un, t[100] = fn) : fn = t[100];
        let pn;
        t[101] !== sn || t[102] !== fn ? (pn = (0, $.jsxs)($.Fragment, {
            children: [sn, fn]
        }), t[101] = sn, t[102] = fn, t[103] = pn) : pn = t[103];
        let Z = pn,
            mn = [`google`, `apple`, `email`, `phone_number`].flatMap(e => q.filter(t => t.name === e)),
            hn = q.filter(xn),
            Tn;
        t[104] === Symbol.for(`react.memo_cache_sentinel`) ? (Tn = (0, $.jsx)(N, {
            id: `loginForm.or`,
            defaultMessage: `OR`
        }), t[104] = Tn) : Tn = t[104];
        let En;
        t[105] === Yt ? En = t[106] : (En = (0, $.jsx)(Tt, {
            className: Yt,
            children: Tn
        }), t[105] = Yt, t[106] = En);
        let Dn = En,
            On;
        t[107] !== M || t[108] !== Dn || t[109] !== Y || t[110] !== Z ? (On = Y ? (0, $.jsxs)($.Fragment, {
            children: [M && Dn, Z]
        }) : null, t[107] = M, t[108] = Dn, t[109] = Y, t[110] = Z, t[111] = On) : On = t[111];
        let kn = On,
            An = nn ? (0, $.jsxs)(`div`, {
                className: C(`flex flex-col`, Gt),
                children: [$t(en), (0, $.jsx)(dn, {
                    collapsedLabel: (0, $.jsx)(N, {
                        id: `loginForm.moreOptions`,
                        defaultMessage: `More options`
                    }),
                    expandedLabel: (0, $.jsx)(N, {
                        id: `loginForm.hideOptions`,
                        defaultMessage: `Hide options`
                    }),
                    buttonClassName: K,
                    disabled: L,
                    hideButtonWhenOpen: !0,
                    children: (0, $.jsxs)(`div`, {
                        className: C(`flex flex-col`, Gt),
                        children: [J.map(e => $t(e)), kn]
                    })
                })]
            }) : (0, $.jsx)(`div`, {
                className: C(`flex flex-col`, Gt),
                children: q.map(e => $t(e))
            }),
            jn = !Y,
            Mn = (0, Q.useRef)(null),
            Nn = (0, Q.useRef)(0),
            Pn = y && ge === `below-title`,
            Fn = y && ge === `bottom`,
            In, Ln;
        t[112] === Symbol.for(`react.memo_cache_sentinel`) ? (In = () => () => {
            Mn.current != null && window.clearTimeout(Mn.current)
        }, Ln = [], t[112] = In, t[113] = Ln) : (In = t[112], Ln = t[113]), (0, Q.useEffect)(In, Ln);
        let Rn = L && `opacity-50`,
            zn;
        t[114] === Rn ? zn = t[115] : (zn = C(`text-token-text-secondary cursor-pointer font-semibold underline sm:text-sm`, Rn), t[114] = Rn, t[115] = zn);
        let Bn;
        t[116] !== v || t[117] !== g || t[118] !== pe || t[119] !== n ? (Bn = e => {
            if (e.preventDefault(), !pe) {
                Ae.logStructuredEvent(`AccessFlowUserAction`, {
                    authSessionLoggingId: v[we],
                    actionType: j.ACCESS_FLOW_USER_ACTION_TYPE_EXIT_STAY_LOGGED_OUT_LINK_CLICKED,
                    page: c.ACCESS_FLOW_PAGE_TYPE_CHATGPT_WEB_LOGIN_PAGE
                }), De(ln(_t(g)));
                return
            }
            Ae.logStructuredEvent(`AccessFlowUserAction`, {
                authSessionLoggingId: v[we],
                actionType: j.ACCESS_FLOW_USER_ACTION_TYPE_EXIT_STAY_LOGGED_OUT_LINK_CLICKED,
                page: c.ACCESS_FLOW_PAGE_TYPE_CHATGPT_WEB_LOGIN_MODAL
            }), n(`stay-logged-out-link`)
        }, t[116] = v, t[117] = g, t[118] = pe, t[119] = n, t[120] = Bn) : Bn = t[120];
        let Vn;
        t[121] === b ? Vn = t[122] : (Vn = b ?? (0, $.jsx)(N, {
            id: `LoginForm.stayLoggedOut`,
            defaultMessage: `Stay logged out`
        }), t[121] = b, t[122] = Vn);
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
        let Gn = pt,
            Kn;
        t[128] !== K || t[129] !== Ht ? (Kn = {
            controlHeightClassName: K,
            inputHeightClassName: Ht
        }, t[128] = K, t[129] = Ht, t[130] = Kn) : Kn = t[130];
        let qn;
        t[131] !== Mt || t[132] !== Pt || t[133] !== It || t[134] !== z || t[135] !== F ? (qn = F != null && (0, $.jsx)(ae, {
            for: Et,
            withProps: {
                enteredDomain: F.enteredDomain,
                suggestedDomain: F.suggestedDomain,
                onContinueWithEnteredDomain: Mt,
                onUseSuggestedDomain: Pt
            },
            open: !0,
            onOpen: () => {
                z(j.ACCESS_FLOW_USER_ACTION_TYPE_SHOW_EMAIL_DOMAIN_TYPO_CONFIRMATION)
            },
            onClose: It
        }), t[131] = Mt, t[132] = Pt, t[133] = It, t[134] = z, t[135] = F, t[136] = qn) : qn = t[136];
        let Jn;
        t[137] === Ut ? Jn = t[138] : (Jn = C(`flex flex-col items-stretch`, Ut), t[137] = Ut, t[138] = Jn);
        let Yn = i ?? `text-3xl font-normal`,
            Xn;
        t[139] === Yn ? Xn = t[140] : (Xn = C(`text-center`, Yn), t[139] = Yn, t[140] = Xn);
        let Zn;
        t[141] === r ? Zn = t[142] : (Zn = r ?? (0, $.jsx)(N, {
            id: `NoAuthWelcomeBackModal.title`,
            defaultMessage: `Welcome back`
        }), t[141] = r, t[142] = Zn);
        let Qn;
        t[143] !== Qe || t[144] !== Xn || t[145] !== Zn ? (Qn = (0, $.jsx)(`h2`, {
            id: Qe,
            className: Xn,
            children: Zn
        }), t[143] = Qe, t[144] = Xn, t[145] = Zn, t[146] = Qn) : Qn = t[146];
        let $n = Pn && Un,
            er;
        t[147] !== A || t[148] !== u || t[149] !== a || t[150] !== Kt ? (er = (u || a) && (0, $.jsxs)(`div`, {
            className: C(`flex flex-col gap-3 px-4 text-center text-base`, A && `text-token-text-secondary`, Kt),
            children: [u && (0, $.jsx)(`p`, {
                className: `text-token-text-secondary`,
                children: u
            }), a && (0, $.jsx)(`p`, {
                children: a
            })]
        }), t[147] = A, t[148] = u, t[149] = a, t[150] = Kt, t[151] = er) : er = t[151];
        let tr;
        t[152] === Wt ? tr = t[153] : (tr = C(`flex flex-col`, Wt), t[152] = Wt, t[153] = tr);
        let nr;
        t[154] === k ? nr = t[155] : (nr = Rt ? e => {
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
        t[156] === W ? rr = t[157] : (rr = e => {
            e.preventDefault(), W.handleSubmit()
        }, t[156] = W, t[157] = rr);
        let ir = me ? (0, $.jsxs)($.Fragment, {
                children: [jn && Z, M && (0, $.jsxs)($.Fragment, {
                    children: [jn && Dn, An]
                })]
            }) : (0, $.jsxs)($.Fragment, {
                children: [M && (0, $.jsxs)($.Fragment, {
                    children: [A ? (0, $.jsx)(`div`, {
                        className: C(`flex flex-col`, Gt),
                        children: mn.map(e => $t(e))
                    }) : An, jn && (!A || mn.length > 0) && Dn]
                }), jn && Z, A && hn.length > 0 && (0, $.jsx)(dn, {
                    collapsedLabel: (0, $.jsx)(N, {
                        id: `loginForm.moreOptions`,
                        defaultMessage: `More options`
                    }),
                    expandedLabel: (0, $.jsx)(N, {
                        id: `loginForm.hideOptions`,
                        defaultMessage: `Hide options`
                    }),
                    buttonColor: `ghost`,
                    buttonClassName: `text-token-text-secondary mx-auto h-9 w-auto! px-2 text-sm!`,
                    disabled: L,
                    children: (0, $.jsx)(`div`, {
                        className: C(`flex flex-col`, Gt),
                        children: hn.map(e => $t(e))
                    })
                })]
            }),
            ar = Fn && Un,
            or;
        t[158] !== Qe || t[159] !== tr || t[160] !== nr || t[161] !== rr || t[162] !== ir || t[163] !== ar ? (or = (0, $.jsxs)(`form`, {
            className: tr,
            "aria-labelledby": Qe,
            autoComplete: `on`,
            onFocusCapture: nr,
            onSubmit: rr,
            noValidate: !0,
            children: [ir, ar]
        }), t[158] = Qe, t[159] = tr, t[160] = nr, t[161] = rr, t[162] = ir, t[163] = ar, t[164] = or) : or = t[164];
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
//# sourceMappingURL=35711af7-bzflw3wamuna2ugi.js.map