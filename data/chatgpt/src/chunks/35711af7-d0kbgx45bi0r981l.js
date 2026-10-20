const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/19a7d0b3-binagij2ogvg51mo.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-dfpv67hlp00pbohr.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css"]))) => i.map(i => d[i]);
import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    AR as r,
    At as i,
    Az as a,
    Bot as o,
    C_ as s,
    Ez as c,
    FF as l,
    FR as u,
    Hn as d,
    IF as f,
    IN as p,
    J5 as m,
    JT as h,
    Jt as ee,
    Jtt as g,
    KR as _,
    Ka as v,
    LF as y,
    LN as b,
    N5 as te,
    RF as ne,
    S_ as re,
    Sz as ie,
    UR as ae,
    Un as oe,
    VR as se,
    WR as ce,
    Wa as le,
    X0 as ue,
    Xnt as de,
    Y0 as fe,
    Y5 as x,
    YR as pe,
    Ynt as me,
    _N as S,
    _nt as he,
    act as ge,
    c0 as _e,
    cct as C,
    cn as ve,
    fz as ye,
    gz as be,
    h8 as xe,
    hn as Se,
    iat as Ce,
    jz as we,
    l0 as Te,
    lct as w,
    nit as T,
    oat as Ee,
    oct as E,
    pnt as De,
    qR as Oe,
    qT as D,
    rct as O,
    sct as ke,
    sz as Ae,
    uct as je,
    uit as Me,
    vN as Ne,
    ynt as Pe,
    zot as Fe
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as k,
    Nn as A,
    Q as j,
    Rn as Ie,
    Vn as Le,
    Vt as Re,
    cn as ze,
    ln as Be,
    wn as Ve,
    zn as He
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    i as Ue,
    n as We,
    r as M,
    t as Ge
} from "./d42ee766-ijcxf5awdminntzh.js";
import {
    Brt as Ke,
    Dht as N,
    Eht as qe,
    T9 as Je,
    w9 as Ye,
    zrt as Xe
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    $b as Ze,
    DC as P,
    EC as Qe,
    Qb as $e,
    bf as et,
    yf as tt
} from "./30901919-7dzdc1ou0jtwkwpt.js";
import {
    Fx as nt,
    Ix as rt,
    Vf as it,
    zf as at
} from "./c2675c8c-9bs3zsr3vq259es7.js";
import {
    a as ot,
    i as st,
    n as ct,
    o as lt,
    r as F,
    s as ut,
    t as dt
} from "./c09d86e5-bissj9fha9eq1dxp.js";
import {
    a as ft,
    s as pt,
    t as I
} from "./d524c1a0-cpshpb58mjpbrl7z.js";
import {
    c as mt,
    d as L,
    f as R,
    i as ht,
    l as gt,
    m as _t,
    n as vt,
    p as yt,
    r as bt,
    s as z,
    t as xt,
    u as St
} from "./c982bafe-n48n3ysf4mcq4ipz.js";
import {
    n as Ct,
    t as wt
} from "./c51faa14-ovtqbvfxvysf50nx.js";
import {
    n as Tt,
    t as Et
} from "./5e6083c9-m63cyksy7gsvqe9w.js";
import {
    n as Dt,
    t as Ot
} from "./966be48d-bpma7pzmscd8899l.js";
var kt, At = e((() => {
    ue(), Be(), kt = fe(() => ze(() => import(`./19a7d0b3-binagij2ogvg51mo.js`).then(e => e.EmailDomainTypoConfirmationDialogContent), __vite__mapDeps([0, 1, 2, 3, 4])))
}));

function jt() {
    "use forget";
    let e = (0, B.c)(2),
        t;
    e[0] === Symbol.for(`react.memo_cache_sentinel`) ? (t = yt(`1063781658`, Ft, {
        countryCodes: []
    }), e[0] = t) : t = e[0];
    let {
        countryCodes: n
    } = t, r;
    return e[1] === Symbol.for(`react.memo_cache_sentinel`) ? (r = n?.filter(Mt), e[1] = r) : r = e[1], r
}

function Mt(e) {
    return ft(e)
}

function Nt(e) {
    let t = Fe().userCountry;
    if (!t) return Lt;
    let n = t.toUpperCase();
    return e.length === 0 || e.includes(n) ? n : Lt
}
var B, V, H, Pt, Ft, It, Lt, Rt, zt, Bt, Vt = e((() => {
    B = Ve(), Ke(), We(), xe(), Pe(), Ye(), g(), p(), pe(), o(), I(), i(), V = n(Le()), Ie(), E(), _t(), L(), Ct(), Tt(), H = k(), Pt = e => {
        "use forget";
        let t = (0, B.c)(39),
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
            v = He(),
            y = jt(),
            {
                inputHeightClassName: b,
                controlHeightClassName: ne
            } = R(),
            re;
        t[0] !== v || t[1] !== g ? (re = v.formatMessage(g ? {
            id: `Login.photoEmail`,
            defaultMessage: `Email`,
            description: `Short placeholder and accessible label for the email input on the photo variant of the standalone ChatGPT login page.`
        } : {
            id: `dynamicUsernameInput.email`,
            defaultMessage: `Email address`,
            description: `Label for the email address input field`
        }), t[0] = v, t[1] = g, t[2] = re) : re = t[2];
        let ie = re,
            oe = te(u),
            se;
        t[3] === d ? se = t[4] : (se = function() {
            d()
        }, t[3] = d, t[4] = se);
        let ce = se,
            le;
        t[5] !== l || t[6] !== c ? (le = () => he.logStructuredEvent(`AccessFlowUserAction`, {
            authSessionLoggingId: c,
            actionType: _.ACCESS_FLOW_USER_ACTION_TYPE_INPUT,
            page: l,
            field: ae.ACCESS_FLOW_FIELD_EMAIL
        }), t[5] = l, t[6] = c, t[7] = le) : le = t[7];
        let ue = Je(le),
            de;
        t[8] !== l || t[9] !== c ? (de = () => he.logStructuredEvent(`AccessFlowUserAction`, {
            authSessionLoggingId: c,
            actionType: _.ACCESS_FLOW_USER_ACTION_TYPE_INPUT,
            page: l,
            field: ae.ACCESS_FLOW_FIELD_PHONE
        }), t[8] = l, t[9] = c, t[10] = de) : de = t[10];
        let fe = Je(de),
            x;
        t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (x = De(), t[11] = x) : x = t[11];
        let pe = x,
            me = !!ee(),
            S, ge;
        if (t[12] !== me) {
            let e = Rt(me);
            S = zt(e), ge = Bt(e), t[12] = me, t[13] = S, t[14] = ge
        } else S = t[13], ge = t[14];
        let _e = ge,
            C;
        t[15] !== c || t[16] !== ne || t[17] !== h || t[18] !== s || t[19] !== S || t[20] !== a || t[21] !== ie || t[22] !== r || t[23] !== b || t[24] !== v || t[25] !== g || t[26] !== ue || t[27] !== fe || t[28] !== _e || t[29] !== o || t[30] !== i || t[31] !== y || t[32] !== n || t[33] !== f || t[34] !== oe ? (C = n === `email` ? (0, H.jsx)(ve.div, {
            className: `-m-1 overflow-hidden p-1`,
            ...oe ? {
                ...S
            } : {},
            children: (0, H.jsx)(It, {
                disabled: h || pe && !f,
                onInitialValue: e => {
                    e !== a.state.value && (M(window.location.pathname) && (e || a.state.value) && Ue(`warn`, `Login email hydration reconciliation`, {
                        phase: `layout_reconciliation`,
                        auth_session_logging_id: c,
                        dom_email_present: !!e,
                        form_state_email_present: !!a.state.value,
                        email_input_focused: document.activeElement === Ge(),
                        reconciliation_direction: e ? a.state.value ? `different_nonempty` : `dom_to_empty_state` : `empty_dom_to_state`
                    }), a.handleChange(e))
                },
                children: e => {
                    let {
                        ref: t
                    } = e;
                    return (0, H.jsx)(Xe, {
                        ref: t,
                        name: a.name,
                        value: a.state.value,
                        onChange: e => {
                            a.handleChange(e.target.value), ue()
                        },
                        inputClassName: `w-full ${g?`rounded-xl!`:`rounded-full!`} text-base! sm:text-base! px-5! py-3! ${b}`,
                        error: a.state.meta.errors.join(`,`) ?? void 0,
                        showErrorIcon: !0,
                        ariaLabel: ie,
                        placeholder: ie,
                        className: `focus-within:border-token-border-heavy! ${g?`rounded-xl!`:`rounded-full!`} border-[var(--border-heavy)] p-0! px-0! py-0! focus-within:ring-1`,
                        type: `email`,
                        autoComplete: `email`,
                        autoFocus: !pe && !h,
                        ...r,
                        disabled: s
                    })
                }
            })
        }, `email`) : n === `phone_number` ? (0, H.jsx)(ve.div, {
            className: `-m-1 overflow-hidden p-1`,
            ...oe ? {
                ..._e
            } : {},
            children: (0, H.jsx)(It, {
                disabled: h,
                children: e => {
                    let {
                        ref: t
                    } = e;
                    return (0, H.jsx)(Et, {
                        nativeInputRef: t,
                        countries: y,
                        defaultCountry: Nt(y),
                        controlHeightClassName: ne,
                        inputHeightClassName: b,
                        value: o.state.value,
                        setValue: e => {
                            o.handleChange(e), fe()
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
        }, `phone_number`) : null, t[15] = c, t[16] = ne, t[17] = h, t[18] = s, t[19] = S, t[20] = a, t[21] = ie, t[22] = r, t[23] = b, t[24] = v, t[25] = g, t[26] = ue, t[27] = fe, t[28] = _e, t[29] = o, t[30] = i, t[31] = y, t[32] = n, t[33] = f, t[34] = oe, t[35] = C) : C = t[35];
        let ye;
        return t[36] !== ce || t[37] !== C ? (ye = (0, H.jsx)(`div`, {
            className: `relative`,
            children: (0, H.jsx)(Se, {
                mode: `wait`,
                initial: !1,
                onExitComplete: ce,
                children: C
            })
        }), t[36] = ce, t[37] = C, t[38] = ye) : ye = t[38], ye
    }, Ft = C({
        countryCodes: O(w())
    }), It = e => {
        "use forget";
        let t = (0, B.c)(10),
            {
                children: n,
                disabled: r,
                onInitialValue: i
            } = e,
            a = r !== void 0 && r,
            o = (0, V.useRef)(null),
            s = (0, V.useRef)(!1),
            c, l;
        t[0] === i ? (c = t[1], l = t[2]) : (c = () => {
            o.current && !s.current && (s.current = !0, i?.(o.current.value))
        }, l = [i], t[0] = i, t[1] = c, t[2] = l), b(c, l);
        let u, d;
        t[3] === a ? (u = t[4], d = t[5]) : (u = () => {
            if (o.current && !a) return wt(o.current)
        }, d = [a], t[3] = a, t[4] = u, t[5] = d), (0, V.useEffect)(u, d);
        let f;
        t[6] === n ? f = t[7] : (f = n({
            ref: o
        }), t[6] = n, t[7] = f);
        let p;
        return t[8] === f ? p = t[9] : (p = (0, H.jsx)(H.Fragment, {
            children: f
        }), t[8] = f, t[9] = p), p
    }, Lt = `US`, Rt = e => ({
        opacity: {
            duration: e ? 0 : .1
        },
        height: {
            duration: e ? 0 : .22,
            ease: `easeInOut`
        }
    }), zt = e => ({
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
    }), Bt = e => ({
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

function Ht() {
    return Ce.addAction(`login-form.continue`)
}
var Ut, U, Wt, Gt = e((() => {
    Ut = Ve(), h(), we(), Ee(), x(), Ie(), L(), U = k(), Wt = e => {
        "use forget";
        let t = (0, Ut.c)(16),
            n, r, i, o;
        t[0] === e ? (n = t[1], r = t[2], i = t[3], o = t[4]) : ({
            className: n,
            isPending: r,
            text: o,
            ...i
        } = e, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = o);
        let {
            controlHeightClassName: s
        } = R(), c;
        t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (c = (0, U.jsx)(A, {
            id: `continueButton.continue`,
            defaultMessage: `Continue`
        }), t[5] = c) : c = t[5];
        let l = o ?? c,
            u = `mt-1.5 ${s} w-full rounded-full text-base`,
            d;
        t[6] !== n || t[7] !== u ? (d = m(u, n), t[6] = n, t[7] = u, t[8] = d) : d = t[8];
        let f;
        t[9] !== l || t[10] !== r ? (f = r ? (0, U.jsxs)(U.Fragment, {
            children: [(0, U.jsx)(a, {
                className: `text-base`
            }), (0, U.jsx)(`span`, {
                className: `sr-only`,
                children: l
            })]
        }) : l, t[9] = l, t[10] = r, t[11] = f) : f = t[11];
        let p;
        return t[12] !== i || t[13] !== d || t[14] !== f ? (p = (0, U.jsx)(D, {
            type: `submit`,
            onClick: Ht,
            className: d,
            ...i,
            children: f
        }), t[12] = i, t[13] = d, t[14] = f, t[15] = p) : p = t[15], p
    }
}));

function Kt(e, t) {
    let [n, r] = Re(), i = Object.fromEntries(n);
    return [ke(i, e) ? i : t, r, (e, t) => {
        r({
            ...Object.fromEntries(n),
            ...e
        }, t)
    }]
}
var qt = e((() => {
        j(), E()
    })),
    Jt, Yt, Xt = e((() => {
        E(), Jt = ge([`email`, `phone_number`]), Yt = `email`
    }));

function Zt(e) {
    "use forget";
    let t = (0, Qt.c)(4),
        {
            allowPhone: n
        } = e,
        r = n && ye() ? `phone_number` : Yt,
        i;
    t[0] === r ? i = t[1] : (i = {
        usernameKind: r
    }, t[0] = r, t[1] = i);
    let [a] = Kt(W, i), [o, s] = (0, $t.useState)(n ? a.usernameKind : Yt), c;
    return t[2] === o ? c = t[3] : (c = [o, s], t[2] = o, t[3] = c), c
}
var Qt, $t, W, en = e((() => {
    Qt = Ve(), Ae(), $t = n(Le()), E(), qt(), Xt(), W = je({
        usernameKind: Jt
    })
}));

function tn(e) {
    return setTimeout(e, 300)
}
var G, nn, K, rn, q, an = e((() => {
    G = Ve(), h(), et(), $e(), Pe(), Ee(), pe(), s(), nn = n(Le()), Ie(), L(), K = k(), rn = e => {
        "use forget";
        let t = (0, G.c)(24),
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
        t[0] !== i || t[1] !== r ? (u = re(async e => {
            await r(e), await new Promise(tn), i.reset()
        }, 50, {
            leading: !0,
            trailing: !1
        }), t[0] = i, t[1] = r, t[2] = u) : u = t[2];
        let d = u,
            f, p;
        t[3] === d ? (f = t[4], p = t[5]) : (f = () => () => {
            d.cancel()
        }, p = [d], t[3] = d, t[4] = f, t[5] = p), (0, nn.useEffect)(f, p);
        let m;
        t[6] !== c || t[7] !== s || t[8] !== d ? (m = async (e, t) => {
            he.logStructuredEvent(`AccessFlowUserAction`, {
                authSessionLoggingId: s,
                actionType: e === `email` ? _.ACCESS_FLOW_USER_ACTION_TYPE_SWITCH_TO_EMAIL : _.ACCESS_FLOW_USER_ACTION_TYPE_SWITCH_TO_PHONE,
                page: c
            }), Ce.addAction(t), await d(e)
        }, t[6] = c, t[7] = s, t[8] = d, t[9] = m) : m = t[9];
        let h = m;
        switch (n) {
            case `email`: {
                let e;
                t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, K.jsx)(A, {
                    id: `logIn.continueWithPhone`,
                    defaultMessage: `Continue with phone`
                }), t[10] = e) : e = t[10];
                let n;
                t[11] === h ? n = t[12] : (n = () => h(`phone_number`, `login-form.switch_to_phone`), t[11] = h, t[12] = n);
                let r;
                return t[13] !== l || t[14] !== o || t[15] !== n ? (r = (0, K.jsx)(q, {
                    size: 17,
                    text: e,
                    icon: Ze,
                    onClick: n,
                    align: l,
                    disabled: o
                }), t[13] = l, t[14] = o, t[15] = n, t[16] = r) : r = t[16], r
            }
            case `phone_number`: {
                let e;
                t[17] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, K.jsx)(A, {
                    id: `logIn.continueWithEmail`,
                    defaultMessage: `Continue with email`
                }), t[17] = e) : e = t[17];
                let n;
                t[18] === h ? n = t[19] : (n = () => h(`email`, `login-form.switch_to_email`), t[18] = h, t[19] = n);
                let r;
                return t[20] !== l || t[21] !== o || t[22] !== n ? (r = (0, K.jsx)(q, {
                    size: 19,
                    text: e,
                    icon: tt,
                    onClick: n,
                    align: l,
                    disabled: o
                }), t[20] = l, t[21] = o, t[22] = n, t[23] = r) : r = t[23], r
            }
        }
    }, q = e => {
        "use forget";
        let t = (0, G.c)(9),
            {
                text: n,
                icon: r,
                onClick: i,
                size: a,
                disabled: o
            } = e,
            {
                controlHeightClassName: s
            } = R(),
            c = `${s} rounded-full text-base`,
            l;
        t[0] !== r || t[1] !== a ? (l = (0, K.jsx)(`span`, {
            className: `relative grid h-4 w-4 place-items-center`,
            children: (0, K.jsx)(`span`, {
                className: `absolute`,
                children: (0, K.jsx)(r, {
                    width: a,
                    height: a
                })
            })
        }), t[0] = r, t[1] = a, t[2] = l) : l = t[2];
        let u;
        return t[3] !== o || t[4] !== i || t[5] !== c || t[6] !== l || t[7] !== n ? (u = (0, K.jsxs)(D, {
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

function on(e) {
    if (!oe.test(e)) return null;
    let t = e.lastIndexOf(`@`);
    if (t === -1) return null;
    let n = e.slice(0, t),
        r = e.slice(t + 1),
        i = r.toLowerCase();
    if (Y.has(i)) return null;
    let a = null;
    for (let e of J)
        if (sn(i, e)) {
            if (a != null) return null;
            a = e
        } return a == null ? null : {
        enteredDomain: r,
        suggestedDomain: a,
        suggestedEmail: `${n}@${a}`
    }
}

function sn(e, t) {
    if (e === t) return !1;
    let n = e.length - t.length;
    if (Math.abs(n) > 1) return !1;
    if (n !== 0) return cn(e.length < t.length ? e : t, e.length < t.length ? t : e);
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

function cn(e, t) {
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
var J, Y, ln = e((() => {
    d(), J = [`gmail.com`, `yahoo.com`, `hotmail.com`, `outlook.com`, `icloud.com`, `naver.com`, `aol.com`, `proton.me`], Y = new Set([...J, `email.com`, `mail.com`, `ymail.com`])
}));

function un(e) {
    let t = new URLSearchParams({
        slm: `1`
    });
    try {
        let n = new URL(e ?? `/`, `https://chatgpt.com`).searchParams.get(`prompt`);
        n && t.set(`prompt`, n)
    } catch {}
    return `/?${t}`
}
var dn = e((() => {
    ne()
}));

function fn(e) {
    "use forget";
    let t = (0, X.c)(19),
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
        [h, ee] = (0, pn.useState)(d),
        g;
    t[0] === o ? g = t[1] : (g = m(`flex flex-col gap-3`, o), t[0] = o, t[1] = g);
    let _;
    t[2] !== i || t[3] !== h ? (_ = h && (0, Z.jsx)(ve.div, {
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
    }, `content`), t[2] = i, t[3] = h, t[4] = _) : _ = t[4];
    let v;
    t[5] === _ ? v = t[6] : (v = (0, Z.jsx)(Se, {
        initial: !1,
        children: _
    }), t[5] = _, t[6] = v);
    let y;
    t[7] !== s || t[8] !== f || t[9] !== n || t[10] !== l || t[11] !== r || t[12] !== p || t[13] !== h ? (y = !p || !h ? (0, Z.jsx)(D, {
        type: `button`,
        color: f,
        className: m(`w-full rounded-full text-base`, s),
        contentWrapperClassName: `w-full`,
        "aria-expanded": h,
        "aria-controls": `content`,
        disabled: l,
        onClick: () => ee(!h),
        children: (0, Z.jsxs)(`span`, {
            className: `flex w-full items-center justify-center gap-2`,
            children: [(0, Z.jsx)(`span`, {
                children: h ? r : n
            }), (0, Z.jsx)(Qe, {
                className: m(`icon-sm transition-transform duration-200`, h && `rotate-180`)
            })]
        })
    }) : null, t[7] = s, t[8] = f, t[9] = n, t[10] = l, t[11] = r, t[12] = p, t[13] = h, t[14] = y) : y = t[14];
    let b;
    return t[15] !== g || t[16] !== v || t[17] !== y ? (b = (0, Z.jsxs)(`div`, {
        className: g,
        children: [v, y]
    }), t[15] = g, t[16] = v, t[17] = y, t[18] = b) : b = t[18], b
}
var X, pn, Z, mn = e((() => {
        X = Ve(), h(), P(), x(), i(), pn = n(Le()), Z = k()
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
    if (!N()) return;
    let e = navigator.virtualKeyboard.overlaysContent;
    return navigator.virtualKeyboard.overlaysContent = !1, () => {
        navigator.virtualKeyboard.overlaysContent = e
    }
}
var Cn, Q, $, wn, Tn, En = e((() => {
    Cn = Ve(), r(), Ae(), At(), Vt(), Gt(), ot(), z(), Dt(), L(), vt(), ct(), en(), an(), F(), ln(), dn(), v(), ne(), nt(), Me(), Pe(), d(), _e(), de(), S(), g(), qe(), mn(), pe(), at(), x(), I(), s(), i(), Q = n(Le()), Ie(), $ = k(), wn = 300, Tn = e => {
        "use forget";
        let t = (0, Cn.c)(176),
            {
                onClose: n,
                title: r,
                titleClassName: i,
                subtitle: a,
                mutedSubtitle: o,
                initialEmail: s,
                callbackUrl: d,
                authorizationParams: p,
                isStayLoggedOutVisible: h,
                stayLoggedOutText: g,
                isInModal: v,
                isUsernameOnTop: b,
                collapsedLoginVariant: te,
                stayLoggedOutPlacement: ne,
                continueButtonColor: ue,
                googleButtonColor: de,
                hidePhoneOption: fe,
                disableAutofocus: x,
                accessFlowEntryPoint: pe,
                accessFlowPage: S,
                layoutVariant: ge
            } = e,
            _e = v === void 0 || v,
            C = b !== void 0 && b,
            ve = te === void 0 ? `none` : te,
            ye = ne === void 0 ? `bottom` : ne,
            xe = de === void 0 ? `secondary` : de,
            Se = fe !== void 0 && fe,
            Ce = x !== void 0 && x,
            we = pe === void 0 ? se.ACCESS_FLOW_ENTRY_POINT_LOGIN_MODAL : pe,
            w = S === void 0 ? ce.ACCESS_FLOW_PAGE_TYPE_CHATGPT_WEB_LOGIN_MODAL : S,
            Ee = ge === void 0 ? `default` : ge,
            E = He(),
            D = De(),
            O = Ee === `photo`,
            ke = Ee === `gift-card`,
            Ae;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (Ae = {
            loginStrategy: `existing_user`
        }, t[0] = Ae) : Ae = t[0];
        let {
            phoneNumberOption: je,
            emailOption: Me,
            optionsForDisplay: Pe
        } = mt(Ae), Fe = Se ? Pe.filter(_n) : Pe, k = Fe.length > 1, [j, Ie] = Zt({
            allowPhone: Fe.some(vn)
        }), [Le, Re] = (0, Q.useState)(!1), ze = Me.tempDisabled, Be = je.tempDisabled, Ve = j === `email` && ze || j === `phone_number` && Be, [Ue, We] = (0, Q.useState)(!1), [M, Ge] = (0, Q.useState)(null), Ke;
        t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (Ke = () => We(!1), t[1] = Ke) : Ke = t[1], ut(Ke);
        let [N, qe] = (0, Q.useState)(null), [Je, Ye] = lt(!0), Xe, Ze;
        t[2] !== Je || t[3] !== Ye || t[4] !== N ? (Xe = () => {
            if (!(!Je || N == null)) return st(() => Ye(!1), N)
        }, Ze = [Je, Ye, N], t[2] = Je, t[3] = Ye, t[4] = N, t[5] = Xe, t[6] = Ze) : (Xe = t[5], Ze = t[6]), (0, Q.useEffect)(Xe, Ze);
        let P = Ue || Je,
            Qe;
        t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (Qe = l(), t[7] = Qe) : Qe = t[7];
        let [$e, et] = lt(Qe), tt = (0, Q.useId)(), nt = ee(), at;
        t[8] !== p || t[9] !== d ? (at = xt(d, p), t[8] = p, t[9] = d, t[10] = at) : at = t[10];
        let ot = at,
            ct;
        t[11] !== w || t[12] !== p || t[13] !== n || t[14] !== et || t[15] !== ot || t[16] !== j ? (ct = async e => {
            We(!0), et(!0), await ot({
                screen_hint: `login_or_signup`,
                login_hint: j === `email` ? e.email : e.phoneNumber
            }, () => {
                u(p[T], _.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE, w, j === `email` ? ae.ACCESS_FLOW_FIELD_EMAIL : ae.ACCESS_FLOW_FIELD_PHONE)
            })
        }, t[11] = w, t[12] = p, t[13] = n, t[14] = et, t[15] = ot, t[16] = j, t[17] = ct) : ct = t[17];
        let F = ct,
            ft;
        t[18] !== w || t[19] !== p ? (ft = e => {
            he.logStructuredEvent(`AccessFlowUserAction`, {
                authSessionLoggingId: p[T],
                actionType: e,
                page: w,
                field: ae.ACCESS_FLOW_FIELD_EMAIL
            })
        }, t[18] = w, t[19] = p, t[20] = ft) : ft = t[20];
        let I = ft,
            L = async e => {
                qe(D && e === `apple` && f() ? y() : null), Ye(!0), await ht(ot, e, p[T], we, w)
            }, R = rt(!1), _t;
        t[21] === R ? _t = t[22] : (_t = () => R.set(!1), t[21] = R, t[22] = _t);
        let vt = nt ? 0 : 800,
            yt;
        t[23] !== _t || t[24] !== vt ? (yt = re(_t, vt, {
            leading: !1,
            trailing: !0
        }), t[23] = _t, t[24] = vt, t[25] = yt) : yt = t[25];
        let z = yt,
            Ct = (0, Q.useRef)(!0),
            wt, Tt;
        t[26] === z ? (wt = t[27], Tt = t[28]) : (wt = () => (Ct.current = !0, () => {
            Ct.current = !1, z.cancel()
        }), Tt = [z], t[26] = z, t[27] = wt, t[28] = Tt), (0, Q.useEffect)(wt, Tt);
        let Et;
        t[29] !== Ie || t[30] !== z || t[31] !== nt || t[32] !== R ? (Et = async e => {
            if (Re(!0), De()) R.set(!1);
            else {
                if (R.set(!0), await new Promise(e => setTimeout(e, nt ? 0 : 50)), !Ct.current) return;
                z()
            }
            Ct.current && Ie(e)
        }, t[29] = Ie, t[30] = z, t[31] = nt, t[32] = R, t[33] = Et) : Et = t[33];
        let Dt = Ne(Et),
            At = s ?? ``,
            jt;
        t[34] === At ? jt = t[35] : (jt = {
            email: At,
            phoneNumber: ``
        }, t[34] = At, t[35] = jt);
        let Mt;
        t[36] !== F || t[37] !== j ? (Mt = async e => {
            let {
                value: t
            } = e;
            if (j === `email`) {
                let e = on(t.email);
                if (e != null && be()) {
                    Ge({
                        ...e,
                        submittedValue: {
                            ...t
                        }
                    });
                    return
                }
            }
            await F(t)
        }, t[36] = F, t[37] = j, t[38] = Mt) : Mt = t[38];
        let Nt;
        t[39] !== w || t[40] !== p || t[41] !== E || t[42] !== j ? (Nt = {
            onSubmit: e => {
                let {
                    value: t
                } = e, n = {};
                if (t.email = t.email.trim(), t.phoneNumber = t.phoneNumber.trim(), j === `email` ? t.email ? oe.test(t.email) || (n.email = ie() ? E.formatMessage({
                        id: `loginForm.emailInvalidActionable`,
                        defaultMessage: `That email doesn't look right. Check for a missing @, typo, or incomplete domain.`
                    }) : E.formatMessage({
                        id: `loginForm.emailInvalid`,
                        defaultMessage: `Email is not valid.`
                    })) : n.email = E.formatMessage({
                        id: `loginForm.emailRequired`,
                        defaultMessage: `Email is required.`
                    }) : t.phoneNumber ? pt(t.phoneNumber) || (n.phoneNumber = E.formatMessage({
                        id: `loginForm.phoneNumberInvalid`,
                        defaultMessage: `Phone number is not valid.`
                    })) : n.phoneNumber = E.formatMessage({
                        id: `loginForm.phoneNumberRequired`,
                        defaultMessage: `Phone number is required.`
                    }), n.email || n.phoneNumber) {
                    let e = {
                        usernameKind: j,
                        username: j === `email` ? t.email : t.phoneNumber
                    };
                    he.logEventWithStatsig(`Auth Modal Invalid Username`, e.usernameKind === `email` ? `chatgpt_auth_modal_invalid_email` : `chatgpt_auth_modal_invalid_phone_number`, e), he.logStructuredEvent(`AccessFlowValidationError`, {
                        authSessionLoggingId: p[T],
                        page: w,
                        field: e.usernameKind === `email` ? ae.ACCESS_FLOW_FIELD_EMAIL : ae.ACCESS_FLOW_FIELD_PHONE,
                        validationType: Oe.ACCESS_FLOW_VALIDATION_TYPE_CLIENT
                    })
                }
                return {
                    fields: n
                }
            }
        }, t[39] = w, t[40] = p, t[41] = E, t[42] = j, t[43] = Nt) : Nt = t[43];
        let B;
        t[44] !== jt || t[45] !== Mt || t[46] !== Nt ? (B = {
            defaultValues: jt,
            onSubmit: Mt,
            validators: Nt
        }, t[44] = jt, t[45] = Mt, t[46] = Nt, t[47] = B) : B = t[47];
        let V = it(B),
            H;
        t[48] !== F || t[49] !== I || t[50] !== M ? (H = () => {
            if (M == null) return;
            I(_.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_ENTERED_EMAIL_DOMAIN);
            let {
                submittedValue: e
            } = M;
            Ge(null), F(e)
        }, t[48] = F, t[49] = I, t[50] = M, t[51] = H) : H = t[51];
        let Ft = H,
            It;
        t[52] !== F || t[53] !== I || t[54] !== M || t[55] !== V ? (It = () => {
            if (M == null) return;
            I(_.ACCESS_FLOW_USER_ACTION_TYPE_USE_SUGGESTED_EMAIL_DOMAIN);
            let {
                submittedValue: e,
                suggestedEmail: t
            } = M;
            Ge(null), V.setFieldValue(`email`, t), F({
                ...e,
                email: t
            })
        }, t[52] = F, t[53] = I, t[54] = M, t[55] = V, t[56] = It) : It = t[56];
        let Lt = It,
            Rt;
        t[57] !== I || t[58] !== M ? (Rt = () => {
            M != null && (I(_.ACCESS_FLOW_USER_ACTION_TYPE_DISMISS_EMAIL_DOMAIN_TYPO_CONFIRMATION), Ge(null))
        }, t[57] = I, t[58] = M, t[59] = Rt) : Rt = t[59];
        let zt = Rt,
            Bt;
        t[60] === Symbol.for(`react.memo_cache_sentinel`) ? (Bt = me(`3233347819`).get(`is_mobile_input_focus_capture_handled`, !1), t[60] = Bt) : Bt = t[60];
        let Vt = Bt,
            Ht;
        t[61] === O ? Ht = t[62] : (Ht = !O && c(), t[61] = O, t[62] = Ht);
        let Ut = Ht,
            {
                controlHeightClassName: U,
                inputHeightClassName: Gt
            } = ke ? {
                controlHeightClassName: `h-12`,
                inputHeightClassName: `h-12!`
            } : St(D),
            Kt = ke ? `gap-6 sm:gap-8` : D ? `gap-4 px-4 pb-4` : `gap-5 px-6 pb-10`,
            qt = D && !ke ? `gap-3` : `gap-4`,
            Jt = D && !ke ? `gap-2.5` : `gap-3`,
            Yt = D ? `mb-1` : `mb-4`,
            Xt = D ? `mt-0` : ``,
            Qt = ke ? `my-2.5! [&>div]:text-xs [&>div]:leading-3` : D ? `my-0!` : void 0,
            $t;
        t[63] === j ? $t = t[64] : ($t = e => e.name !== j, t[63] = j, t[64] = $t);
        let W = Fe.filter($t),
            en = m(U, `rounded-full text-base`),
            tn;
        t[65] !== w || t[66] !== p || t[67] !== xe || t[68] !== L || t[69] !== P || t[70] !== Dt || t[71] !== en || t[72] !== N || t[73] !== V || t[74] !== j ? (tn = e => {
            switch (e.name) {
                case `google`:
                    return (0, $.jsx)(dt, {
                        provider: `google`,
                        disabled: e.tempDisabled || P,
                        className: en,
                        onClick: () => L(`google`),
                        color: xe
                    }, e.name);
                case `microsoft`:
                    return (0, $.jsx)(dt, {
                        provider: `microsoft`,
                        disabled: e.tempDisabled || P,
                        className: en,
                        onClick: () => L(`microsoft`)
                    }, e.name);
                case `apple`:
                    return (0, $.jsx)(dt, {
                        provider: `apple`,
                        disabled: e.tempDisabled || P,
                        className: en,
                        onClick: () => L(`apple`),
                        canceledLoginRecoveryTimeoutMs: N
                    }, e.name);
                case `email`:
                case `phone_number`:
                    return (0, $.jsx)(rn, {
                        usernameKind: j,
                        setUsernameKind: Dt,
                        form: V,
                        disabled: P,
                        authSessionLoggingId: p[T],
                        accessFlowPage: w
                    }, e.name);
                default:
                    return null
            }
        }, t[65] = w, t[66] = p, t[67] = xe, t[68] = L, t[69] = P, t[70] = Dt, t[71] = en, t[72] = N, t[73] = V, t[74] = j, t[75] = tn) : tn = t[75];
        let G = tn,
            nn = W.find(yn) ?? W.find(bn),
            K = nn ? W.filter(e => e.name !== nn.name) : W,
            q = ve === `social-and-username`,
            an = ve !== `none` && !!nn && (K.length > 0 || q),
            sn;
        t[76] !== Ut || t[77] !== j ? (sn = Ut ? j === `email` ? (0, $.jsx)(A, {
            id: `logIn.submitWithEmail`,
            defaultMessage: `Continue with email`
        }) : (0, $.jsx)(A, {
            id: `logIn.submitWithPhone`,
            defaultMessage: `Continue with phone`
        }) : void 0, t[76] = Ut, t[77] = j, t[78] = sn) : sn = t[78];
        let cn = sn,
            J;
        t[79] !== w || t[80] !== p || t[81] !== Ce || t[82] !== z || t[83] !== P || t[84] !== O || t[85] !== ze || t[86] !== Be || t[87] !== V.Field || t[88] !== j || t[89] !== Le || t[90] !== R ? (J = e => (0, $.jsx)(V.Field, {
            name: `phoneNumber`,
            children: t => (0, $.jsx)(Pt, {
                usernameKind: j,
                emailProps: {
                    disabled: ze
                },
                phoneProps: {
                    disabled: Be
                },
                emailField: e,
                phoneNumberField: t,
                disabled: P,
                authSessionLoggingId: p[T],
                accessFlowPage: w,
                usernameKindSwitching$: R,
                exitUsernameKindSwitching: z,
                usernameKindSwitched: Le,
                disableAutofocus: Ce,
                isPhotoLayout: O
            })
        }), t[79] = w, t[80] = p, t[81] = Ce, t[82] = z, t[83] = P, t[84] = O, t[85] = ze, t[86] = Be, t[87] = V.Field, t[88] = j, t[89] = Le, t[90] = R, t[91] = J) : J = t[91];
        let Y;
        t[92] !== J || t[93] !== V.Field ? (Y = (0, $.jsx)(V.Field, {
            name: `email`,
            children: J
        }), t[92] = J, t[93] = V.Field, t[94] = Y) : Y = t[94];
        let ln = ue ?? `primary`,
            dn = Ve || P,
            X;
        t[95] !== Xt || t[96] !== cn || t[97] !== $e || t[98] !== ln || t[99] !== dn ? (X = (0, $.jsx)(Wt, {
            color: ln,
            className: Xt,
            disabled: dn,
            isPending: $e,
            text: cn
        }), t[95] = Xt, t[96] = cn, t[97] = $e, t[98] = ln, t[99] = dn, t[100] = X) : X = t[100];
        let pn;
        t[101] !== Y || t[102] !== X ? (pn = (0, $.jsxs)($.Fragment, {
            children: [Y, X]
        }), t[101] = Y, t[102] = X, t[103] = pn) : pn = t[103];
        let Z = pn,
            mn = [`google`, `apple`, `email`, `phone_number`].flatMap(e => W.filter(t => t.name === e)),
            hn = W.filter(xn),
            Tn;
        t[104] === Symbol.for(`react.memo_cache_sentinel`) ? (Tn = (0, $.jsx)(A, {
            id: `loginForm.or`,
            defaultMessage: `OR`
        }), t[104] = Tn) : Tn = t[104];
        let En;
        t[105] === Qt ? En = t[106] : (En = (0, $.jsx)(Ot, {
            className: Qt,
            children: Tn
        }), t[105] = Qt, t[106] = En);
        let Dn = En,
            On;
        t[107] !== k || t[108] !== Dn || t[109] !== q || t[110] !== Z ? (On = q ? (0, $.jsxs)($.Fragment, {
            children: [k && Dn, Z]
        }) : null, t[107] = k, t[108] = Dn, t[109] = q, t[110] = Z, t[111] = On) : On = t[111];
        let kn = On,
            An = an ? (0, $.jsxs)(`div`, {
                className: m(`flex flex-col`, Jt),
                children: [G(nn), (0, $.jsx)(fn, {
                    collapsedLabel: (0, $.jsx)(A, {
                        id: `loginForm.moreOptions`,
                        defaultMessage: `More options`
                    }),
                    expandedLabel: (0, $.jsx)(A, {
                        id: `loginForm.hideOptions`,
                        defaultMessage: `Hide options`
                    }),
                    buttonClassName: U,
                    disabled: P,
                    hideButtonWhenOpen: !0,
                    children: (0, $.jsxs)(`div`, {
                        className: m(`flex flex-col`, Jt),
                        children: [K.map(e => G(e)), kn]
                    })
                })]
            }) : (0, $.jsx)(`div`, {
                className: m(`flex flex-col`, Jt),
                children: W.map(e => G(e))
            }),
            jn = !q,
            Mn = (0, Q.useRef)(null),
            Nn = (0, Q.useRef)(0),
            Pn = h && ye === `below-title`,
            Fn = h && ye === `bottom`,
            In, Ln;
        t[112] === Symbol.for(`react.memo_cache_sentinel`) ? (In = () => () => {
            Mn.current != null && window.clearTimeout(Mn.current)
        }, Ln = [], t[112] = In, t[113] = Ln) : (In = t[112], Ln = t[113]), (0, Q.useEffect)(In, Ln);
        let Rn = P && `opacity-50`,
            zn;
        t[114] === Rn ? zn = t[115] : (zn = m(`text-token-text-secondary cursor-pointer font-semibold underline sm:text-sm`, Rn), t[114] = Rn, t[115] = zn);
        let Bn;
        t[116] !== p || t[117] !== d || t[118] !== _e || t[119] !== n ? (Bn = e => {
            if (e.preventDefault(), !_e) {
                he.logStructuredEvent(`AccessFlowUserAction`, {
                    authSessionLoggingId: p[T],
                    actionType: _.ACCESS_FLOW_USER_ACTION_TYPE_EXIT_STAY_LOGGED_OUT_LINK_CLICKED,
                    page: ce.ACCESS_FLOW_PAGE_TYPE_CHATGPT_WEB_LOGIN_PAGE
                }), Te(un(bt(d)));
                return
            }
            he.logStructuredEvent(`AccessFlowUserAction`, {
                authSessionLoggingId: p[T],
                actionType: _.ACCESS_FLOW_USER_ACTION_TYPE_EXIT_STAY_LOGGED_OUT_LINK_CLICKED,
                page: ce.ACCESS_FLOW_PAGE_TYPE_CHATGPT_WEB_LOGIN_MODAL
            }), n(`stay-logged-out-link`)
        }, t[116] = p, t[117] = d, t[118] = _e, t[119] = n, t[120] = Bn) : Bn = t[120];
        let Vn;
        t[121] === g ? Vn = t[122] : (Vn = g ?? (0, $.jsx)(A, {
            id: `LoginForm.stayLoggedOut`,
            defaultMessage: `Stay logged out`
        }), t[121] = g, t[122] = Vn);
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
        let Gn = gt,
            Kn;
        t[128] !== U || t[129] !== Gt ? (Kn = {
            controlHeightClassName: U,
            inputHeightClassName: Gt
        }, t[128] = U, t[129] = Gt, t[130] = Kn) : Kn = t[130];
        let qn;
        t[131] !== Ft || t[132] !== Lt || t[133] !== zt || t[134] !== I || t[135] !== M ? (qn = M != null && (0, $.jsx)(le, {
            for: kt,
            withProps: {
                enteredDomain: M.enteredDomain,
                suggestedDomain: M.suggestedDomain,
                onContinueWithEnteredDomain: Ft,
                onUseSuggestedDomain: Lt
            },
            open: !0,
            onOpen: () => {
                I(_.ACCESS_FLOW_USER_ACTION_TYPE_SHOW_EMAIL_DOMAIN_TYPO_CONFIRMATION)
            },
            onClose: zt
        }), t[131] = Ft, t[132] = Lt, t[133] = zt, t[134] = I, t[135] = M, t[136] = qn) : qn = t[136];
        let Jn;
        t[137] === Kt ? Jn = t[138] : (Jn = m(`flex flex-col items-stretch`, Kt), t[137] = Kt, t[138] = Jn);
        let Yn = i ?? `text-3xl font-normal`,
            Xn;
        t[139] === Yn ? Xn = t[140] : (Xn = m(`text-center`, Yn), t[139] = Yn, t[140] = Xn);
        let Zn;
        t[141] === r ? Zn = t[142] : (Zn = r ?? (0, $.jsx)(A, {
            id: `NoAuthWelcomeBackModal.title`,
            defaultMessage: `Welcome back`
        }), t[141] = r, t[142] = Zn);
        let Qn;
        t[143] !== tt || t[144] !== Xn || t[145] !== Zn ? (Qn = (0, $.jsx)(`h2`, {
            id: tt,
            className: Xn,
            children: Zn
        }), t[143] = tt, t[144] = Xn, t[145] = Zn, t[146] = Qn) : Qn = t[146];
        let $n = Pn && Un,
            er;
        t[147] !== O || t[148] !== o || t[149] !== a || t[150] !== Yt ? (er = (o || a) && (0, $.jsxs)(`div`, {
            className: m(`flex flex-col gap-3 px-4 text-center text-base`, O && `text-token-text-secondary`, Yt),
            children: [o && (0, $.jsx)(`p`, {
                className: `text-token-text-secondary`,
                children: o
            }), a && (0, $.jsx)(`p`, {
                children: a
            })]
        }), t[147] = O, t[148] = o, t[149] = a, t[150] = Yt, t[151] = er) : er = t[151];
        let tr;
        t[152] === qt ? tr = t[153] : (tr = m(`flex flex-col`, qt), t[152] = qt, t[153] = tr);
        let nr;
        t[154] === D ? nr = t[155] : (nr = Vt ? e => {
            if (!D || !gn(e.target)) return;
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
        } : void 0, t[154] = D, t[155] = nr);
        let rr;
        t[156] === V ? rr = t[157] : (rr = e => {
            e.preventDefault(), V.handleSubmit()
        }, t[156] = V, t[157] = rr);
        let ir = C ? (0, $.jsxs)($.Fragment, {
                children: [jn && Z, k && (0, $.jsxs)($.Fragment, {
                    children: [jn && Dn, An]
                })]
            }) : (0, $.jsxs)($.Fragment, {
                children: [k && (0, $.jsxs)($.Fragment, {
                    children: [O ? (0, $.jsx)(`div`, {
                        className: m(`flex flex-col`, Jt),
                        children: mn.map(e => G(e))
                    }) : An, jn && (!O || mn.length > 0) && Dn]
                }), jn && Z, O && hn.length > 0 && (0, $.jsx)(fn, {
                    collapsedLabel: (0, $.jsx)(A, {
                        id: `loginForm.moreOptions`,
                        defaultMessage: `More options`
                    }),
                    expandedLabel: (0, $.jsx)(A, {
                        id: `loginForm.hideOptions`,
                        defaultMessage: `Hide options`
                    }),
                    buttonColor: `ghost`,
                    buttonClassName: `text-token-text-secondary mx-auto h-9 w-auto! px-2 text-sm!`,
                    disabled: P,
                    children: (0, $.jsx)(`div`, {
                        className: m(`flex flex-col`, Jt),
                        children: hn.map(e => G(e))
                    })
                })]
            }),
            ar = Fn && Un,
            or;
        t[158] !== tt || t[159] !== tr || t[160] !== nr || t[161] !== rr || t[162] !== ir || t[163] !== ar ? (or = (0, $.jsxs)(`form`, {
            className: tr,
            "aria-labelledby": tt,
            autoComplete: `on`,
            onFocusCapture: nr,
            onSubmit: rr,
            noValidate: !0,
            children: [ir, ar]
        }), t[158] = tt, t[159] = tr, t[160] = nr, t[161] = rr, t[162] = ir, t[163] = ar, t[164] = or) : or = t[164];
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
//# sourceMappingURL=35711af7-d0kbgx45bi0r981l.js.map