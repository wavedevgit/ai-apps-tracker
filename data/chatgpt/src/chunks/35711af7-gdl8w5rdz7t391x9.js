const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/19a7d0b3-jeiuq3bqag0b74fs.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-cb22y2w19zwyshmt.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css"]))) => i.map(i => d[i]);
import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $M as r,
    AR as i,
    AT as a,
    Ast as o,
    At as s,
    B6 as c,
    Btt as l,
    C0 as u,
    DR as d,
    Dit as f,
    Est as p,
    F1 as m,
    Ga as h,
    HR as g,
    Hn as _,
    Htt as v,
    I1 as y,
    Itt as ee,
    Jt as te,
    Mst as ne,
    Nrt as re,
    Nst as ie,
    OR as ae,
    Ost as oe,
    S0 as se,
    SR as ce,
    TR as le,
    Trt as b,
    Ua as ue,
    Un as de,
    ZR as fe,
    _F as pe,
    _tt as me,
    b5 as x,
    bF as S,
    cn as he,
    cot as ge,
    dR as _e,
    dz as C,
    eN as ve,
    fz as ye,
    gR as be,
    hn as xe,
    i5 as w,
    i_ as Se,
    jst as T,
    kT as E,
    kit as D,
    kst as O,
    lot as Ce,
    qR as we,
    r_ as Te,
    rz as Ee,
    sz as De,
    vF as Oe,
    vN as ke,
    vnt as Ae,
    wR as je,
    y5 as k,
    yF as Me,
    yN as Ne,
    ynt as Pe
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as Fe,
    Bn as A,
    Ht as Ie,
    Nn as j,
    Rn as Le,
    Vn as Re,
    cn as ze,
    ln as Be,
    wn as Ve,
    zn as He
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    i as Ue,
    n as We,
    r as M,
    t as Ge
} from "./d42ee766-l8qd8272nkh3jm4y.js";
import {
    C9 as Ke,
    Frt as N,
    Irt as qe,
    S9 as Je,
    Sht as Ye,
    xht as Xe
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    DC as Ze,
    EC as P,
    bf as Qe,
    nx as $e,
    tx as et,
    yf as tt
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    gp as nt,
    lS as rt,
    mp as it,
    uS as at
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";
import {
    a as ot,
    i as st,
    n as ct,
    o as lt,
    r as F,
    s as ut,
    t as dt
} from "./c09d86e5-l7zgumyqje9mygnb.js";
import {
    a as ft,
    s as pt,
    t as I
} from "./d524c1a0-cvltkkbletmwf59g.js";
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
} from "./c982bafe-c53pviyww7ariw0j.js";
import {
    n as Ct,
    t as wt
} from "./c51faa14-ovtqbvfxvysf50nx.js";
import {
    n as Tt,
    t as Et
} from "./5e6083c9-j3nmyz25ul5yzpg0.js";
import {
    n as Dt,
    t as Ot
} from "./966be48d-knoyz9r6e2bop0ms.js";
var kt, At = e((() => {
    u(), Be(), kt = se(() => ze(() => import(`./19a7d0b3-jeiuq3bqag0b74fs.js`).then(e => e.EmailDomainTypoConfirmationDialogContent), __vite__mapDeps([0, 1, 2, 3, 4])))
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
    let t = ge().userCountry;
    if (!t) return Lt;
    let n = t.toUpperCase();
    return e.length === 0 || e.includes(n) ? n : Lt
}
var B, V, H, Pt, Ft, It, Lt, Rt, zt, Bt, Vt = e((() => {
    B = Ve(), qe(), We(), c(), v(), Je(), me(), ke(), i(), Ce(), I(), s(), V = n(Re()), Le(), O(), _t(), L(), Ct(), Tt(), H = A(), Pt = e => {
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
                accessFlowPage: u,
                usernameKindSwitching$: f,
                exitUsernameKindSwitching: p,
                usernameKindSwitched: m,
                disableAutofocus: h,
                isPhotoLayout: g
            } = e,
            _ = h !== void 0 && h,
            v = g !== void 0 && g,
            y = He(),
            ne = jt(),
            {
                inputHeightClassName: re,
                controlHeightClassName: ie
            } = R(),
            ae;
        t[0] !== y || t[1] !== v ? (ae = y.formatMessage(v ? {
            id: `Login.photoEmail`,
            defaultMessage: `Email`,
            description: `Short placeholder and accessible label for the email input on the photo variant of the standalone ChatGPT login page.`
        } : {
            id: `dynamicUsernameInput.email`,
            defaultMessage: `Email address`,
            description: `Label for the email address input field`
        }), t[0] = y, t[1] = v, t[2] = ae) : ae = t[2];
        let oe = ae,
            se = w(f),
            ce;
        t[3] === p ? ce = t[4] : (ce = function() {
            p()
        }, t[3] = p, t[4] = ce);
        let le = ce,
            b;
        t[5] !== u || t[6] !== c ? (b = () => l.logStructuredEvent(`AccessFlowUserAction`, {
            authSessionLoggingId: c,
            actionType: d.ACCESS_FLOW_USER_ACTION_TYPE_INPUT,
            page: u,
            field: je.ACCESS_FLOW_FIELD_EMAIL
        }), t[5] = u, t[6] = c, t[7] = b) : b = t[7];
        let ue = Ke(b),
            de;
        t[8] !== u || t[9] !== c ? (de = () => l.logStructuredEvent(`AccessFlowUserAction`, {
            authSessionLoggingId: c,
            actionType: d.ACCESS_FLOW_USER_ACTION_TYPE_INPUT,
            page: u,
            field: je.ACCESS_FLOW_FIELD_PHONE
        }), t[8] = u, t[9] = c, t[10] = de) : de = t[10];
        let fe = Ke(de),
            pe;
        t[11] === Symbol.for(`react.memo_cache_sentinel`) ? (pe = ee(), t[11] = pe) : pe = t[11];
        let me = pe,
            x = !!te(),
            S, ge;
        if (t[12] !== x) {
            let e = Rt(x);
            S = zt(e), ge = Bt(e), t[12] = x, t[13] = S, t[14] = ge
        } else S = t[13], ge = t[14];
        let _e = ge,
            C;
        t[15] !== c || t[16] !== ie || t[17] !== _ || t[18] !== s || t[19] !== S || t[20] !== a || t[21] !== oe || t[22] !== r || t[23] !== re || t[24] !== y || t[25] !== v || t[26] !== ue || t[27] !== fe || t[28] !== _e || t[29] !== o || t[30] !== i || t[31] !== ne || t[32] !== n || t[33] !== m || t[34] !== se ? (C = n === `email` ? (0, H.jsx)(he.div, {
            className: `-m-1 overflow-hidden p-1`,
            ...se ? {
                ...S
            } : {},
            children: (0, H.jsx)(It, {
                disabled: _ || me && !m,
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
                    return (0, H.jsx)(N, {
                        ref: t,
                        name: a.name,
                        value: a.state.value,
                        onChange: e => {
                            a.handleChange(e.target.value), ue()
                        },
                        inputClassName: `w-full ${v?`rounded-xl!`:`rounded-full!`} text-base! sm:text-base! px-5! py-3! ${re}`,
                        error: a.state.meta.errors.join(`,`) ?? void 0,
                        showErrorIcon: !0,
                        ariaLabel: oe,
                        placeholder: oe,
                        className: `focus-within:border-token-border-heavy! ${v?`rounded-xl!`:`rounded-full!`} border-[var(--border-heavy)] p-0! px-0! py-0! focus-within:ring-1`,
                        type: `email`,
                        autoComplete: `email`,
                        autoFocus: !me && !_,
                        ...r,
                        disabled: s
                    })
                }
            })
        }, `email`) : n === `phone_number` ? (0, H.jsx)(he.div, {
            className: `-m-1 overflow-hidden p-1`,
            ...se ? {
                ..._e
            } : {},
            children: (0, H.jsx)(It, {
                disabled: _,
                children: e => {
                    let {
                        ref: t
                    } = e;
                    return (0, H.jsx)(Et, {
                        nativeInputRef: t,
                        countries: ne,
                        defaultCountry: Nt(ne),
                        controlHeightClassName: ie,
                        inputHeightClassName: re,
                        value: o.state.value,
                        setValue: e => {
                            o.handleChange(e), fe()
                        },
                        error: o.state.meta.errors.join(`,`) ?? void 0,
                        label: y.formatMessage({
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
        }, `phone_number`) : null, t[15] = c, t[16] = ie, t[17] = _, t[18] = s, t[19] = S, t[20] = a, t[21] = oe, t[22] = r, t[23] = re, t[24] = y, t[25] = v, t[26] = ue, t[27] = fe, t[28] = _e, t[29] = o, t[30] = i, t[31] = ne, t[32] = n, t[33] = m, t[34] = se, t[35] = C) : C = t[35];
        let ve;
        return t[36] !== le || t[37] !== C ? (ve = (0, H.jsx)(`div`, {
            className: `relative`,
            children: (0, H.jsx)(xe, {
                mode: `wait`,
                initial: !1,
                onExitComplete: le,
                children: C
            })
        }), t[36] = le, t[37] = C, t[38] = ve) : ve = t[38], ve
    }, Ft = T({
        countryCodes: p(ne())
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
        }, l = [i], t[0] = i, t[1] = c, t[2] = l), Ne(c, l);
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
    return f.addAction(`login-form.continue`)
}
var Ut, U, Wt, Gt = e((() => {
    Ut = Ve(), a(), ye(), D(), x(), Le(), L(), U = A(), Wt = e => {
        "use forget";
        let t = (0, Ut.c)(16),
            n, r, i, a;
        t[0] === e ? (n = t[1], r = t[2], i = t[3], a = t[4]) : ({
            className: n,
            isPending: r,
            text: a,
            ...i
        } = e, t[0] = e, t[1] = n, t[2] = r, t[3] = i, t[4] = a);
        let {
            controlHeightClassName: o
        } = R(), s;
        t[5] === Symbol.for(`react.memo_cache_sentinel`) ? (s = (0, U.jsx)(j, {
            id: `continueButton.continue`,
            defaultMessage: `Continue`
        }), t[5] = s) : s = t[5];
        let c = a ?? s,
            l = `mt-1.5 ${o} w-full rounded-full text-base`,
            u;
        t[6] !== n || t[7] !== l ? (u = k(l, n), t[6] = n, t[7] = l, t[8] = u) : u = t[8];
        let d;
        t[9] !== c || t[10] !== r ? (d = r ? (0, U.jsxs)(U.Fragment, {
            children: [(0, U.jsx)(C, {
                className: `text-base`
            }), (0, U.jsx)(`span`, {
                className: `sr-only`,
                children: c
            })]
        }) : c, t[9] = c, t[10] = r, t[11] = d) : d = t[11];
        let f;
        return t[12] !== i || t[13] !== u || t[14] !== d ? (f = (0, U.jsx)(E, {
            type: `submit`,
            onClick: Ht,
            className: u,
            ...i,
            children: d
        }), t[12] = i, t[13] = u, t[14] = d, t[15] = f) : f = t[15], f
    }
}));

function Kt(e, t) {
    let [n, r] = Ie(), i = Object.fromEntries(n);
    return [o(i, e) ? i : t, r, (e, t) => {
        r({
            ...Object.fromEntries(n),
            ...e
        }, t)
    }]
}
var qt = e((() => {
        Fe(), O()
    })),
    Jt, Yt, Xt = e((() => {
        O(), Jt = oe([`email`, `phone_number`]), Yt = `email`
    }));

function Zt(e) {
    "use forget";
    let t = (0, Qt.c)(4),
        {
            allowPhone: n
        } = e,
        r = n && we() ? `phone_number` : Yt,
        i;
    t[0] === r ? i = t[1] : (i = {
        usernameKind: r
    }, t[0] = r, t[1] = i);
    let [a] = Kt(W, i), [o, s] = (0, $t.useState)(n ? a.usernameKind : Yt), c;
    return t[2] === o ? c = t[3] : (c = [o, s], t[2] = o, t[3] = c), c
}
var Qt, $t, W, en = e((() => {
    Qt = Ve(), g(), $t = n(Re()), O(), qt(), Xt(), W = ie({
        usernameKind: Jt
    })
}));

function tn(e) {
    return setTimeout(e, 300)
}
var G, nn, K, rn, q, an = e((() => {
    G = Ve(), a(), Qe(), et(), v(), D(), i(), Se(), nn = n(Re()), Le(), L(), K = A(), rn = e => {
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
            u = a === void 0 ? `left` : a,
            p;
        t[0] !== i || t[1] !== r ? (p = Te(async e => {
            await r(e), await new Promise(tn), i.reset()
        }, 50, {
            leading: !0,
            trailing: !1
        }), t[0] = i, t[1] = r, t[2] = p) : p = t[2];
        let m = p,
            h, g;
        t[3] === m ? (h = t[4], g = t[5]) : (h = () => () => {
            m.cancel()
        }, g = [m], t[3] = m, t[4] = h, t[5] = g), (0, nn.useEffect)(h, g);
        let _;
        t[6] !== c || t[7] !== s || t[8] !== m ? (_ = async (e, t) => {
            l.logStructuredEvent(`AccessFlowUserAction`, {
                authSessionLoggingId: s,
                actionType: e === `email` ? d.ACCESS_FLOW_USER_ACTION_TYPE_SWITCH_TO_EMAIL : d.ACCESS_FLOW_USER_ACTION_TYPE_SWITCH_TO_PHONE,
                page: c
            }), f.addAction(t), await m(e)
        }, t[6] = c, t[7] = s, t[8] = m, t[9] = _) : _ = t[9];
        let v = _;
        switch (n) {
            case `email`: {
                let e;
                t[10] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, K.jsx)(j, {
                    id: `logIn.continueWithPhone`,
                    defaultMessage: `Continue with phone`
                }), t[10] = e) : e = t[10];
                let n;
                t[11] === v ? n = t[12] : (n = () => v(`phone_number`, `login-form.switch_to_phone`), t[11] = v, t[12] = n);
                let r;
                return t[13] !== u || t[14] !== o || t[15] !== n ? (r = (0, K.jsx)(q, {
                    size: 17,
                    text: e,
                    icon: $e,
                    onClick: n,
                    align: u,
                    disabled: o
                }), t[13] = u, t[14] = o, t[15] = n, t[16] = r) : r = t[16], r
            }
            case `phone_number`: {
                let e;
                t[17] === Symbol.for(`react.memo_cache_sentinel`) ? (e = (0, K.jsx)(j, {
                    id: `logIn.continueWithEmail`,
                    defaultMessage: `Continue with email`
                }), t[17] = e) : e = t[17];
                let n;
                t[18] === v ? n = t[19] : (n = () => v(`email`, `login-form.switch_to_email`), t[18] = v, t[19] = n);
                let r;
                return t[20] !== u || t[21] !== o || t[22] !== n ? (r = (0, K.jsx)(q, {
                    size: 19,
                    text: e,
                    icon: tt,
                    onClick: n,
                    align: u,
                    disabled: o
                }), t[20] = u, t[21] = o, t[22] = n, t[23] = r) : r = t[23], r
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
        return t[3] !== o || t[4] !== i || t[5] !== c || t[6] !== l || t[7] !== n ? (u = (0, K.jsxs)(E, {
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
    if (!de.test(e)) return null;
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
    _(), J = [`gmail.com`, `yahoo.com`, `hotmail.com`, `outlook.com`, `icloud.com`, `naver.com`, `aol.com`, `proton.me`], Y = new Set([...J, `email.com`, `mail.com`, `ymail.com`])
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
    S()
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
        [m, h] = (0, pn.useState)(d),
        g;
    t[0] === o ? g = t[1] : (g = k(`flex flex-col gap-3`, o), t[0] = o, t[1] = g);
    let _;
    t[2] !== i || t[3] !== m ? (_ = m && (0, Z.jsx)(he.div, {
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
    t[5] === _ ? v = t[6] : (v = (0, Z.jsx)(xe, {
        initial: !1,
        children: _
    }), t[5] = _, t[6] = v);
    let y;
    t[7] !== s || t[8] !== f || t[9] !== n || t[10] !== l || t[11] !== r || t[12] !== p || t[13] !== m ? (y = !p || !m ? (0, Z.jsx)(E, {
        type: `button`,
        color: f,
        className: k(`w-full rounded-full text-base`, s),
        contentWrapperClassName: `w-full`,
        "aria-expanded": m,
        "aria-controls": `content`,
        disabled: l,
        onClick: () => h(!m),
        children: (0, Z.jsxs)(`span`, {
            className: `flex w-full items-center justify-center gap-2`,
            children: [(0, Z.jsx)(`span`, {
                children: m ? r : n
            }), (0, Z.jsx)(P, {
                className: k(`icon-sm transition-transform duration-200`, m && `rotate-180`)
            })]
        })
    }) : null, t[7] = s, t[8] = f, t[9] = n, t[10] = l, t[11] = r, t[12] = p, t[13] = m, t[14] = y) : y = t[14];
    let ee;
    return t[15] !== g || t[16] !== v || t[17] !== y ? (ee = (0, Z.jsxs)(`div`, {
        className: g,
        children: [v, y]
    }), t[15] = g, t[16] = v, t[17] = y, t[18] = ee) : ee = t[18], ee
}
var X, pn, Z, mn = e((() => {
        X = Ve(), a(), Ze(), x(), s(), pn = n(Re()), Z = A()
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
    if (!Ye()) return;
    let e = navigator.virtualKeyboard.overlaysContent;
    return navigator.virtualKeyboard.overlaysContent = !1, () => {
        navigator.virtualKeyboard.overlaysContent = e
    }
}
var Cn, Q, $, wn, Tn, En = e((() => {
    Cn = Ve(), _e(), g(), At(), Vt(), Gt(), ot(), z(), Dt(), L(), vt(), ct(), en(), an(), F(), ln(), dn(), h(), S(), rt(), re(), v(), _(), m(), Pe(), r(), me(), Xe(), mn(), i(), it(), x(), I(), Se(), s(), Q = n(Re()), Le(), $ = A(), wn = 300, Tn = e => {
        "use forget";
        let t = (0, Cn.c)(176),
            {
                onClose: n,
                title: r,
                titleClassName: i,
                subtitle: a,
                mutedSubtitle: o,
                initialEmail: s,
                callbackUrl: c,
                authorizationParams: u,
                isStayLoggedOutVisible: f,
                stayLoggedOutText: p,
                isInModal: m,
                isUsernameOnTop: h,
                collapsedLoginVariant: g,
                stayLoggedOutPlacement: _,
                continueButtonColor: v,
                googleButtonColor: ne,
                hidePhoneOption: re,
                disableAutofocus: ie,
                accessFlowEntryPoint: oe,
                accessFlowPage: se,
                layoutVariant: me
            } = e,
            x = m === void 0 || m,
            S = h !== void 0 && h,
            he = g === void 0 ? `none` : g,
            ge = _ === void 0 ? `bottom` : _,
            _e = ne === void 0 ? `secondary` : ne,
            C = re !== void 0 && re,
            ye = ie !== void 0 && ie,
            xe = oe === void 0 ? ce.ACCESS_FLOW_ENTRY_POINT_LOGIN_MODAL : oe,
            w = se === void 0 ? le.ACCESS_FLOW_PAGE_TYPE_CHATGPT_WEB_LOGIN_MODAL : se,
            Se = me === void 0 ? `default` : me,
            T = He(),
            E = ee(),
            D = Se === `photo`,
            O = Se === `gift-card`,
            Ce;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (Ce = {
            loginStrategy: `existing_user`
        }, t[0] = Ce) : Ce = t[0];
        let {
            phoneNumberOption: we,
            emailOption: ke,
            optionsForDisplay: Ne
        } = mt(Ce), Pe = C ? Ne.filter(_n) : Ne, Fe = Pe.length > 1, [A, Ie] = Zt({
            allowPhone: Pe.some(vn)
        }), [Le, Re] = (0, Q.useState)(!1), ze = ke.tempDisabled, Be = we.tempDisabled, Ve = A === `email` && ze || A === `phone_number` && Be, [Ue, We] = (0, Q.useState)(!1), [M, Ge] = (0, Q.useState)(null), Ke;
        t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (Ke = () => We(!1), t[1] = Ke) : Ke = t[1], ut(Ke);
        let [N, qe] = (0, Q.useState)(null), [Je, Ye] = lt(!0), Xe, Ze;
        t[2] !== Je || t[3] !== Ye || t[4] !== N ? (Xe = () => {
            if (!(!Je || N == null)) return st(() => Ye(!1), N)
        }, Ze = [Je, Ye, N], t[2] = Je, t[3] = Ye, t[4] = N, t[5] = Xe, t[6] = Ze) : (Xe = t[5], Ze = t[6]), (0, Q.useEffect)(Xe, Ze);
        let P = Ue || Je,
            Qe;
        t[7] === Symbol.for(`react.memo_cache_sentinel`) ? (Qe = pe(), t[7] = Qe) : Qe = t[7];
        let [$e, et] = lt(Qe), tt = (0, Q.useId)(), rt = te(), it;
        t[8] !== u || t[9] !== c ? (it = xt(c, u), t[8] = u, t[9] = c, t[10] = it) : it = t[10];
        let ot = it,
            ct;
        t[11] !== w || t[12] !== u || t[13] !== n || t[14] !== et || t[15] !== ot || t[16] !== A ? (ct = async e => {
            We(!0), et(!0), await ot({
                screen_hint: `login_or_signup`,
                login_hint: A === `email` ? e.email : e.phoneNumber
            }, () => {
                be(u[b], d.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE, w, A === `email` ? je.ACCESS_FLOW_FIELD_EMAIL : je.ACCESS_FLOW_FIELD_PHONE)
            })
        }, t[11] = w, t[12] = u, t[13] = n, t[14] = et, t[15] = ot, t[16] = A, t[17] = ct) : ct = t[17];
        let F = ct,
            ft;
        t[18] !== w || t[19] !== u ? (ft = e => {
            l.logStructuredEvent(`AccessFlowUserAction`, {
                authSessionLoggingId: u[b],
                actionType: e,
                page: w,
                field: je.ACCESS_FLOW_FIELD_EMAIL
            })
        }, t[18] = w, t[19] = u, t[20] = ft) : ft = t[20];
        let I = ft,
            L = async e => {
                qe(E && e === `apple` && Oe() ? Me() : null), Ye(!0), await ht(ot, e, u[b], xe, w)
            }, R = at(!1), _t;
        t[21] === R ? _t = t[22] : (_t = () => R.set(!1), t[21] = R, t[22] = _t);
        let vt = rt ? 0 : 800,
            yt;
        t[23] !== _t || t[24] !== vt ? (yt = Te(_t, vt, {
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
        t[29] !== Ie || t[30] !== z || t[31] !== rt || t[32] !== R ? (Et = async e => {
            if (Re(!0), ee()) R.set(!1);
            else {
                if (R.set(!0), await new Promise(e => setTimeout(e, rt ? 0 : 50)), !Ct.current) return;
                z()
            }
            Ct.current && Ie(e)
        }, t[29] = Ie, t[30] = z, t[31] = rt, t[32] = R, t[33] = Et) : Et = t[33];
        let Dt = ve(Et),
            At = s ?? ``,
            jt;
        t[34] === At ? jt = t[35] : (jt = {
            email: At,
            phoneNumber: ``
        }, t[34] = At, t[35] = jt);
        let Mt;
        t[36] !== F || t[37] !== A ? (Mt = async e => {
            let {
                value: t
            } = e;
            if (A === `email`) {
                let e = on(t.email);
                if (e != null && fe()) {
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
        }, t[36] = F, t[37] = A, t[38] = Mt) : Mt = t[38];
        let Nt;
        t[39] !== w || t[40] !== u || t[41] !== T || t[42] !== A ? (Nt = {
            onSubmit: e => {
                let {
                    value: t
                } = e, n = {};
                if (t.email = t.email.trim(), t.phoneNumber = t.phoneNumber.trim(), A === `email` ? t.email ? de.test(t.email) || (n.email = Ee() ? T.formatMessage({
                        id: `loginForm.emailInvalidActionable`,
                        defaultMessage: `That email doesn't look right. Check for a missing @, typo, or incomplete domain.`
                    }) : T.formatMessage({
                        id: `loginForm.emailInvalid`,
                        defaultMessage: `Email is not valid.`
                    })) : n.email = T.formatMessage({
                        id: `loginForm.emailRequired`,
                        defaultMessage: `Email is required.`
                    }) : t.phoneNumber ? pt(t.phoneNumber) || (n.phoneNumber = T.formatMessage({
                        id: `loginForm.phoneNumberInvalid`,
                        defaultMessage: `Phone number is not valid.`
                    })) : n.phoneNumber = T.formatMessage({
                        id: `loginForm.phoneNumberRequired`,
                        defaultMessage: `Phone number is required.`
                    }), n.email || n.phoneNumber) {
                    let e = {
                        usernameKind: A,
                        username: A === `email` ? t.email : t.phoneNumber
                    };
                    l.logEventWithStatsig(`Auth Modal Invalid Username`, e.usernameKind === `email` ? `chatgpt_auth_modal_invalid_email` : `chatgpt_auth_modal_invalid_phone_number`, e), l.logStructuredEvent(`AccessFlowValidationError`, {
                        authSessionLoggingId: u[b],
                        page: w,
                        field: e.usernameKind === `email` ? je.ACCESS_FLOW_FIELD_EMAIL : je.ACCESS_FLOW_FIELD_PHONE,
                        validationType: ae.ACCESS_FLOW_VALIDATION_TYPE_CLIENT
                    })
                }
                return {
                    fields: n
                }
            }
        }, t[39] = w, t[40] = u, t[41] = T, t[42] = A, t[43] = Nt) : Nt = t[43];
        let B;
        t[44] !== jt || t[45] !== Mt || t[46] !== Nt ? (B = {
            defaultValues: jt,
            onSubmit: Mt,
            validators: Nt
        }, t[44] = jt, t[45] = Mt, t[46] = Nt, t[47] = B) : B = t[47];
        let V = nt(B),
            H;
        t[48] !== F || t[49] !== I || t[50] !== M ? (H = () => {
            if (M == null) return;
            I(d.ACCESS_FLOW_USER_ACTION_TYPE_CONTINUE_WITH_ENTERED_EMAIL_DOMAIN);
            let {
                submittedValue: e
            } = M;
            Ge(null), F(e)
        }, t[48] = F, t[49] = I, t[50] = M, t[51] = H) : H = t[51];
        let Ft = H,
            It;
        t[52] !== F || t[53] !== I || t[54] !== M || t[55] !== V ? (It = () => {
            if (M == null) return;
            I(d.ACCESS_FLOW_USER_ACTION_TYPE_USE_SUGGESTED_EMAIL_DOMAIN);
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
            M != null && (I(d.ACCESS_FLOW_USER_ACTION_TYPE_DISMISS_EMAIL_DOMAIN_TYPO_CONFIRMATION), Ge(null))
        }, t[57] = I, t[58] = M, t[59] = Rt) : Rt = t[59];
        let zt = Rt,
            Bt;
        t[60] === Symbol.for(`react.memo_cache_sentinel`) ? (Bt = Ae(`3233347819`).get(`is_mobile_input_focus_capture_handled`, !1), t[60] = Bt) : Bt = t[60];
        let Vt = Bt,
            Ht;
        t[61] === D ? Ht = t[62] : (Ht = !D && De(), t[61] = D, t[62] = Ht);
        let Ut = Ht,
            {
                controlHeightClassName: U,
                inputHeightClassName: Gt
            } = O ? {
                controlHeightClassName: `h-12`,
                inputHeightClassName: `h-12!`
            } : St(E),
            Kt = O ? `gap-6 sm:gap-8` : E ? `gap-4 px-4 pb-4` : `gap-5 px-6 pb-10`,
            qt = E && !O ? `gap-3` : `gap-4`,
            Jt = E && !O ? `gap-2.5` : `gap-3`,
            Yt = E ? `mb-1` : `mb-4`,
            Xt = E ? `mt-0` : ``,
            Qt = O ? `my-2.5! [&>div]:text-xs [&>div]:leading-3` : E ? `my-0!` : void 0,
            $t;
        t[63] === A ? $t = t[64] : ($t = e => e.name !== A, t[63] = A, t[64] = $t);
        let W = Pe.filter($t),
            en = k(U, `rounded-full text-base`),
            tn;
        t[65] !== w || t[66] !== u || t[67] !== _e || t[68] !== L || t[69] !== P || t[70] !== Dt || t[71] !== en || t[72] !== N || t[73] !== V || t[74] !== A ? (tn = e => {
            switch (e.name) {
                case `google`:
                    return (0, $.jsx)(dt, {
                        provider: `google`,
                        disabled: e.tempDisabled || P,
                        className: en,
                        onClick: () => L(`google`),
                        color: _e
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
                        usernameKind: A,
                        setUsernameKind: Dt,
                        form: V,
                        disabled: P,
                        authSessionLoggingId: u[b],
                        accessFlowPage: w
                    }, e.name);
                default:
                    return null
            }
        }, t[65] = w, t[66] = u, t[67] = _e, t[68] = L, t[69] = P, t[70] = Dt, t[71] = en, t[72] = N, t[73] = V, t[74] = A, t[75] = tn) : tn = t[75];
        let G = tn,
            nn = W.find(yn) ?? W.find(bn),
            K = nn ? W.filter(e => e.name !== nn.name) : W,
            q = he === `social-and-username`,
            an = he !== `none` && !!nn && (K.length > 0 || q),
            sn;
        t[76] !== Ut || t[77] !== A ? (sn = Ut ? A === `email` ? (0, $.jsx)(j, {
            id: `logIn.submitWithEmail`,
            defaultMessage: `Continue with email`
        }) : (0, $.jsx)(j, {
            id: `logIn.submitWithPhone`,
            defaultMessage: `Continue with phone`
        }) : void 0, t[76] = Ut, t[77] = A, t[78] = sn) : sn = t[78];
        let cn = sn,
            J;
        t[79] !== w || t[80] !== u || t[81] !== ye || t[82] !== z || t[83] !== P || t[84] !== D || t[85] !== ze || t[86] !== Be || t[87] !== V.Field || t[88] !== A || t[89] !== Le || t[90] !== R ? (J = e => (0, $.jsx)(V.Field, {
            name: `phoneNumber`,
            children: t => (0, $.jsx)(Pt, {
                usernameKind: A,
                emailProps: {
                    disabled: ze
                },
                phoneProps: {
                    disabled: Be
                },
                emailField: e,
                phoneNumberField: t,
                disabled: P,
                authSessionLoggingId: u[b],
                accessFlowPage: w,
                usernameKindSwitching$: R,
                exitUsernameKindSwitching: z,
                usernameKindSwitched: Le,
                disableAutofocus: ye,
                isPhotoLayout: D
            })
        }), t[79] = w, t[80] = u, t[81] = ye, t[82] = z, t[83] = P, t[84] = D, t[85] = ze, t[86] = Be, t[87] = V.Field, t[88] = A, t[89] = Le, t[90] = R, t[91] = J) : J = t[91];
        let Y;
        t[92] !== J || t[93] !== V.Field ? (Y = (0, $.jsx)(V.Field, {
            name: `email`,
            children: J
        }), t[92] = J, t[93] = V.Field, t[94] = Y) : Y = t[94];
        let ln = v ?? `primary`,
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
        t[104] === Symbol.for(`react.memo_cache_sentinel`) ? (Tn = (0, $.jsx)(j, {
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
        t[107] !== Fe || t[108] !== Dn || t[109] !== q || t[110] !== Z ? (On = q ? (0, $.jsxs)($.Fragment, {
            children: [Fe && Dn, Z]
        }) : null, t[107] = Fe, t[108] = Dn, t[109] = q, t[110] = Z, t[111] = On) : On = t[111];
        let kn = On,
            An = an ? (0, $.jsxs)(`div`, {
                className: k(`flex flex-col`, Jt),
                children: [G(nn), (0, $.jsx)(fn, {
                    collapsedLabel: (0, $.jsx)(j, {
                        id: `loginForm.moreOptions`,
                        defaultMessage: `More options`
                    }),
                    expandedLabel: (0, $.jsx)(j, {
                        id: `loginForm.hideOptions`,
                        defaultMessage: `Hide options`
                    }),
                    buttonClassName: U,
                    disabled: P,
                    hideButtonWhenOpen: !0,
                    children: (0, $.jsxs)(`div`, {
                        className: k(`flex flex-col`, Jt),
                        children: [K.map(e => G(e)), kn]
                    })
                })]
            }) : (0, $.jsx)(`div`, {
                className: k(`flex flex-col`, Jt),
                children: W.map(e => G(e))
            }),
            jn = !q,
            Mn = (0, Q.useRef)(null),
            Nn = (0, Q.useRef)(0),
            Pn = f && ge === `below-title`,
            Fn = f && ge === `bottom`,
            In, Ln;
        t[112] === Symbol.for(`react.memo_cache_sentinel`) ? (In = () => () => {
            Mn.current != null && window.clearTimeout(Mn.current)
        }, Ln = [], t[112] = In, t[113] = Ln) : (In = t[112], Ln = t[113]), (0, Q.useEffect)(In, Ln);
        let Rn = P && `opacity-50`,
            zn;
        t[114] === Rn ? zn = t[115] : (zn = k(`text-token-text-secondary cursor-pointer font-semibold underline sm:text-sm`, Rn), t[114] = Rn, t[115] = zn);
        let Bn;
        t[116] !== u || t[117] !== c || t[118] !== x || t[119] !== n ? (Bn = e => {
            if (e.preventDefault(), !x) {
                l.logStructuredEvent(`AccessFlowUserAction`, {
                    authSessionLoggingId: u[b],
                    actionType: d.ACCESS_FLOW_USER_ACTION_TYPE_EXIT_STAY_LOGGED_OUT_LINK_CLICKED,
                    page: le.ACCESS_FLOW_PAGE_TYPE_CHATGPT_WEB_LOGIN_PAGE
                }), y(un(bt(c)));
                return
            }
            l.logStructuredEvent(`AccessFlowUserAction`, {
                authSessionLoggingId: u[b],
                actionType: d.ACCESS_FLOW_USER_ACTION_TYPE_EXIT_STAY_LOGGED_OUT_LINK_CLICKED,
                page: le.ACCESS_FLOW_PAGE_TYPE_CHATGPT_WEB_LOGIN_MODAL
            }), n(`stay-logged-out-link`)
        }, t[116] = u, t[117] = c, t[118] = x, t[119] = n, t[120] = Bn) : Bn = t[120];
        let Vn;
        t[121] === p ? Vn = t[122] : (Vn = p ?? (0, $.jsx)(j, {
            id: `LoginForm.stayLoggedOut`,
            defaultMessage: `Stay logged out`
        }), t[121] = p, t[122] = Vn);
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
        t[131] !== Ft || t[132] !== Lt || t[133] !== zt || t[134] !== I || t[135] !== M ? (qn = M != null && (0, $.jsx)(ue, {
            for: kt,
            withProps: {
                enteredDomain: M.enteredDomain,
                suggestedDomain: M.suggestedDomain,
                onContinueWithEnteredDomain: Ft,
                onUseSuggestedDomain: Lt
            },
            open: !0,
            onOpen: () => {
                I(d.ACCESS_FLOW_USER_ACTION_TYPE_SHOW_EMAIL_DOMAIN_TYPO_CONFIRMATION)
            },
            onClose: zt
        }), t[131] = Ft, t[132] = Lt, t[133] = zt, t[134] = I, t[135] = M, t[136] = qn) : qn = t[136];
        let Jn;
        t[137] === Kt ? Jn = t[138] : (Jn = k(`flex flex-col items-stretch`, Kt), t[137] = Kt, t[138] = Jn);
        let Yn = i ?? `text-3xl font-normal`,
            Xn;
        t[139] === Yn ? Xn = t[140] : (Xn = k(`text-center`, Yn), t[139] = Yn, t[140] = Xn);
        let Zn;
        t[141] === r ? Zn = t[142] : (Zn = r ?? (0, $.jsx)(j, {
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
        t[147] !== D || t[148] !== o || t[149] !== a || t[150] !== Yt ? (er = (o || a) && (0, $.jsxs)(`div`, {
            className: k(`flex flex-col gap-3 px-4 text-center text-base`, D && `text-token-text-secondary`, Yt),
            children: [o && (0, $.jsx)(`p`, {
                className: `text-token-text-secondary`,
                children: o
            }), a && (0, $.jsx)(`p`, {
                children: a
            })]
        }), t[147] = D, t[148] = o, t[149] = a, t[150] = Yt, t[151] = er) : er = t[151];
        let tr;
        t[152] === qt ? tr = t[153] : (tr = k(`flex flex-col`, qt), t[152] = qt, t[153] = tr);
        let nr;
        t[154] === E ? nr = t[155] : (nr = Vt ? e => {
            if (!E || !gn(e.target)) return;
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
        } : void 0, t[154] = E, t[155] = nr);
        let rr;
        t[156] === V ? rr = t[157] : (rr = e => {
            e.preventDefault(), V.handleSubmit()
        }, t[156] = V, t[157] = rr);
        let ir = S ? (0, $.jsxs)($.Fragment, {
                children: [jn && Z, Fe && (0, $.jsxs)($.Fragment, {
                    children: [jn && Dn, An]
                })]
            }) : (0, $.jsxs)($.Fragment, {
                children: [Fe && (0, $.jsxs)($.Fragment, {
                    children: [D ? (0, $.jsx)(`div`, {
                        className: k(`flex flex-col`, Jt),
                        children: mn.map(e => G(e))
                    }) : An, jn && (!D || mn.length > 0) && Dn]
                }), jn && Z, D && hn.length > 0 && (0, $.jsx)(fn, {
                    collapsedLabel: (0, $.jsx)(j, {
                        id: `loginForm.moreOptions`,
                        defaultMessage: `More options`
                    }),
                    expandedLabel: (0, $.jsx)(j, {
                        id: `loginForm.hideOptions`,
                        defaultMessage: `Hide options`
                    }),
                    buttonColor: `ghost`,
                    buttonClassName: `text-token-text-secondary mx-auto h-9 w-auto! px-2 text-sm!`,
                    disabled: P,
                    children: (0, $.jsx)(`div`, {
                        className: k(`flex flex-col`, Jt),
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
//# sourceMappingURL=35711af7-gdl8w5rdz7t391x9.js.map