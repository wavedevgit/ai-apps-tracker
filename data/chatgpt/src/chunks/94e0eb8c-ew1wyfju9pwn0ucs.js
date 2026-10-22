const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/0a2afdfe-kd84tnadxipkrhrd.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-r54yv6lv29x4ew99.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-dwpaie1hln28efxb.js", "assets/30901919-k5uqyx4vyplt9toa.js", "assets/c470f5ab-bhx5jraq636jc4ww.js", "assets/0e5afe53-d830ix843j2kh0p0.js", "assets/conversation-small-gfjfeahf.css", "assets/c2675c8c-jg3tpj8mw86wdc0g.js", "assets/82782bc9-loong612qtaq7sd9.js", "assets/8b34dbc2-bgocf3s6t6l67twq.js", "assets/global-modals-dxg9ukpk.css", "assets/32d062bc-nzk3gvp50po1zu9c.js", "assets/d12af438-kq59go4jorwt4sby.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Aw as n,
    Bz as r,
    LU as i,
    Ow as a,
    Rz as o,
    Vz as s,
    a2 as c,
    c2 as l,
    d2 as u,
    l7 as d,
    o2 as f,
    u7 as p,
    zU as m,
    zz as h
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    At as ee,
    Bn as g,
    Ln as _,
    Nn as te,
    Nt as ne,
    Q as v,
    Rn as y,
    Vn as b,
    Vt as re,
    cn as x,
    ln as S,
    wn as C,
    zn as ie
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Hx as w,
    Ux as ae,
    Xb as oe,
    Zb as se,
    vC as ce,
    yC as T
} from "./30901919-k5uqyx4vyplt9toa.js";
import {
    __ as le,
    b_ as ue,
    d_ as de,
    f_ as E,
    h_ as fe,
    m_ as D,
    p_ as O,
    u_ as k
} from "./c2675c8c-jg3tpj8mw86wdc0g.js";

function pe(e) {
    if (e.get(`action`) !== `enable`) return null;
    let t = e.get(`factor`);
    return t === `totp` || t === `sms` ? t : null
}

function me(e) {
    return `${e.pathname}${e.search}${e.hash}`
}

function A(e) {
    "use forget";
    let t = (0, ge.c)(11),
        n;
    t[0] === e ? n = t[1] : (n = e === void 0 ? {} : e, t[0] = e, t[1] = n);
    let {
        enabled: r,
        redirectUrl: i,
        source: a,
        onMfaEnabled: o,
        restoreParentFlowOnResume: s
    } = n, c = r === void 0 || r, l = ee(), {
        status: d
    } = fe(), f = (0, j.useRef)(!1), p, m;
    t[2] !== c || t[3] !== l || t[4] !== o || t[5] !== i || t[6] !== s || t[7] !== a || t[8] !== d ? (p = () => {
        !(typeof c == `function` ? c() : c) || f.current || d !== `enabled` && pe(new URLSearchParams(l.search)) && (f.current = !0, s?.() !== !0 && u(F, {
            onClose: () => {
                f.current = !1
            },
            onMfaEnabled: o,
            redirectUrl: i,
            source: a
        }))
    }, m = [c, l, o, s, i, a, d], t[2] = c, t[3] = l, t[4] = o, t[5] = i, t[6] = s, t[7] = a, t[8] = d, t[9] = p, t[10] = m) : (p = t[9], m = t[10]), (0, j.useEffect)(p, m)
}

function he() {}
var ge, j, M, N, P, _e, ve, F, I = e((() => {
    ge = C(), T(), oe(), w(), s(), n(), l(), le(), D(), O(), h(), i(), k(), f(), p(), j = t(b()), y(), v(), M = g(), S(), N = _({
        authenticatorLabel: {
            id: `mfaEnrollmentModal.authenticatorLabel`,
            defaultMessage: `Authenticator App`
        },
        textCodeLabel: {
            id: `mfaEnrollmentModal.textCodeLabel`,
            defaultMessage: `Text a code to your phone number`
        },
        title: {
            id: `mfaEnrollmentModal.title`,
            defaultMessage: `Enable a second factor to continue`
        },
        genericStartError: {
            id: `mfaEnrollmentModal.genericStartError`,
            defaultMessage: `We couldn't start setup. Please try again.`
        }
    }), P = c(() => x(() => import(`./0a2afdfe-kd84tnadxipkrhrd.js`).then(e => e.EnterOtpCodeModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]))), _e = c(() => x(() => import(`./d12af438-kq59go4jorwt4sby.js`).then(e => e.EnrollTotpModal), __vite__mapDeps([15, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]))), ve = e => {
        u(E, {
            source: e,
            onOtpRequested: ({
                phoneNumber: t,
                enrollmentSessionId: n,
                factorId: r
            }) => {
                u(P, {
                    phoneNumber: t,
                    enrollmentSessionId: n,
                    factorId: r,
                    onActivated: () => {},
                    source: e,
                    onBack: () => {
                        ve(e)
                    }
                })
            }
        })
    }, F = e => {
        "use forget";
        let t = (0, ge.c)(57),
            {
                isOpen: n,
                onClose: i,
                onMfaEnabled: s,
                onSelectFactor: c,
                redirectUrl: l,
                source: f
            } = e,
            p = n === void 0 || n,
            h = i === void 0 ? he : i,
            g = ie(),
            _ = m(),
            v = ue(),
            y = ee(),
            b;
        t[0] !== y || t[1] !== l ? (b = l ?? me(y), t[0] = y, t[1] = l, t[2] = b) : b = t[2];
        let x = b,
            S;
        t[3] !== x || t[4] !== f ? (S = {
            redirectUrl: x,
            source: f
        }, t[3] = x, t[4] = f, t[5] = S) : S = t[5];
        let {
            setupMfa: C
        } = de(S), {
            status: w,
            show_sms: oe
        } = fe(), [T, le] = (0, j.useState)(null), E = (0, j.useRef)(!1), D = (0, j.useRef)(!1), [O] = re(), k = ne(), A;
        t[6] !== v || t[7] !== g || t[8] !== f || t[9] !== _ ? (A = async () => {
            if (!E.current) {
                E.current = !0;
                try {
                    let e = await v.mutateAsync({
                        factor: `totp`,
                        source: f
                    });
                    u(_e, {
                        sessionId: e.session_id,
                        secret: e.secret,
                        source: f,
                        onCancelled: () => {
                            E.current = !1
                        },
                        onActivated: () => {
                            E.current = !1
                        }
                    })
                } catch (e) {
                    let t = e;
                    E.current = !1, _.danger(g.formatMessage(N.genericStartError), {
                        error: t
                    })
                }
            }
        }, t[6] = v, t[7] = g, t[8] = f, t[9] = _, t[10] = A) : A = t[10];
        let P = A,
            F;
        t[11] !== g || t[12] !== c || t[13] !== C || t[14] !== f || t[15] !== P || t[16] !== _ ? (F = async e => {
            le(e);
            let t = () => le(null);
            try {
                if (c?.(e), e === `totp`) {
                    await C(`totp`, {
                        native_modal: !0
                    }) || await P(), t();
                    return
                } else if (e === `sms`) {
                    await C(`sms`) || ve(f), t();
                    return
                } else {
                    _.danger(g.formatMessage(N.genericStartError)), t();
                    return
                }
            } catch (e) {
                let n = e;
                _.danger(g.formatMessage(N.genericStartError), {
                    error: n
                }), t()
            }
        }, t[11] = g, t[12] = c, t[13] = C, t[14] = f, t[15] = P, t[16] = _, t[17] = F) : F = t[17];
        let I = F,
            L, R;
        t[18] !== w || t[19] !== h || t[20] !== s ? (L = () => {
            w === `enabled` && (s?.(), h?.())
        }, R = [w, s, h], t[18] = w, t[19] = h, t[20] = s, t[21] = L, t[22] = R) : (L = t[21], R = t[22]), (0, j.useEffect)(L, R);
        let z, B;
        t[23] !== I || t[24] !== y.hash || t[25] !== y.pathname || t[26] !== y.search || t[27] !== k || t[28] !== O ? (B = () => {
            if (D.current) return;
            let e = pe(O);
            if (!e) return;
            D.current = !0;
            let t = new URLSearchParams(y.search);
            t.delete(`action`), t.delete(`factor`), t.delete(`factor_id`), y.pathname === `/connector-auth` && t.getAll(`connector_action`).length === 1 && t.get(`connector_action`) === `connect` && (t.set(`action`, `connect`), t.delete(`connector_action`));
            let n = t.toString();
            k({
                pathname: y.pathname,
                search: n ? `?${n}` : ``,
                hash: y.hash
            }, {
                replace: !0
            }), I(e)
        }, z = [I, y.hash, y.pathname, y.search, k, O], t[23] = I, t[24] = y.hash, t[25] = y.pathname, t[26] = y.search, t[27] = k, t[28] = O, t[29] = z, t[30] = B) : (z = t[29], B = t[30]), (0, j.useEffect)(B, z);
        let ye = w !== `enabled` && oe,
            V;
        t[31] === Symbol.for(`react.memo_cache_sentinel`) ? (V = {
            id: `totp`,
            icon: ae,
            label: (0, M.jsx)(te, {
                ...N.authenticatorLabel
            })
        }, t[31] = V) : V = t[31];
        let H;
        t[32] === ye ? H = t[33] : (H = [V, ...ye ? [{
            id: `sms`,
            icon: se,
            label: (0, M.jsx)(te, {
                ...N.textCodeLabel
            })
        }] : []], t[32] = ye, t[33] = H);
        let U = H;
        if (w === `enabled`) return null;
        let W;
        t[34] === g ? W = t[35] : (W = g.formatMessage(N.title), t[34] = g, t[35] = W);
        let G;
        t[36] === W ? G = t[37] : (G = (0, M.jsx)(`span`, {
            className: `sr-only`,
            children: W
        }), t[36] = W, t[37] = G);
        let K;
        t[38] === Symbol.for(`react.memo_cache_sentinel`) ? (K = (0, M.jsxs)(`div`, {
            className: `flex gap-1`,
            children: [(0, M.jsx)(`span`, {
                className: `h-1.5 w-1.5 rounded-full bg-gray-200`
            }), (0, M.jsx)(`span`, {
                className: `h-1.5 w-1.5 rounded-full bg-gray-200`
            }), (0, M.jsx)(`span`, {
                className: `h-1.5 w-1.5 rounded-full bg-gray-200`
            })]
        }), t[38] = K) : K = t[38];
        let q;
        t[39] === Symbol.for(`react.memo_cache_sentinel`) ? (q = (0, M.jsx)(`div`, {
            className: `rounded-xl border-[0.5px] p-2 shadow-sm`,
            children: (0, M.jsx)(ce, {
                className: `icon-2xl`
            })
        }), t[39] = q) : q = t[39];
        let J;
        t[40] === Symbol.for(`react.memo_cache_sentinel`) ? (J = (0, M.jsxs)(`div`, {
            className: `flex items-center justify-center gap-4`,
            children: [K, q, (0, M.jsxs)(`div`, {
                className: `flex gap-1`,
                children: [(0, M.jsx)(`span`, {
                    className: `h-1.5 w-1.5 rounded-full bg-gray-200`
                }), (0, M.jsx)(`span`, {
                    className: `h-1.5 w-1.5 rounded-full bg-gray-200`
                }), (0, M.jsx)(`span`, {
                    className: `h-1.5 w-1.5 rounded-full bg-gray-200`
                })]
            })]
        }), t[40] = J) : J = t[40];
        let Y;
        t[41] === g ? Y = t[42] : (Y = g.formatMessage(N.title), t[41] = g, t[42] = Y);
        let X;
        t[43] === Y ? X = t[44] : (X = (0, M.jsx)(`div`, {
            className: `flex flex-col items-center justify-center`,
            children: (0, M.jsx)(`h1`, {
                className: `max-w-[420px] px-4 text-center text-2xl font-semibold`,
                children: Y
            })
        }), t[43] = Y, t[44] = X);
        let Z;
        t[45] !== T || t[46] !== I || t[47] !== U ? (Z = (0, M.jsx)(`div`, {
            className: `border-token-border-default bg-token-bg-primary overflow-hidden rounded-2xl border`,
            role: `list`,
            children: U.map((e, t) => {
                let {
                    id: n,
                    icon: i,
                    label: a
                } = e;
                return (0, M.jsx)(`div`, {
                    role: `listitem`,
                    children: (0, M.jsxs)(`button`, {
                        type: `button`,
                        className: d(`text-token-text-primary hover:bg-token-bg-tertiary focus-visible:ring-token-focus`, `flex w-full items-center gap-3 px-4 py-4 text-start text-sm`, `focus-visible:ring-2 focus-visible:ring-offset-2`, t !== U.length - 1 && `after:bg-token-border-default relative after:absolute after:start-4 after:end-4 after:bottom-0 after:h-px`),
                        onClick: e => {
                            if (T != null) {
                                e.preventDefault();
                                return
                            }
                            I(n)
                        },
                        children: [(0, M.jsx)(i, {
                            className: `h-6 w-6`
                        }), (0, M.jsx)(`div`, {
                            className: `flex flex-1 items-center gap-2`,
                            children: a
                        }), T === n ? (0, M.jsx)(o, {
                            className: `h-4 w-4`
                        }) : (0, M.jsx)(r.ChevronRightSm, {
                            className: `icon-sm`
                        })]
                    })
                }, n)
            })
        }), t[45] = T, t[46] = I, t[47] = U, t[48] = Z) : Z = t[48];
        let Q;
        t[49] !== X || t[50] !== Z ? (Q = (0, M.jsxs)(`div`, {
            className: `flex flex-col gap-6`,
            children: [J, X, Z]
        }), t[49] = X, t[50] = Z, t[51] = Q) : Q = t[51];
        let $;
        return t[52] !== p || t[53] !== h || t[54] !== G || t[55] !== Q ? ($ = (0, M.jsx)(a, {
            testId: `modal-mfa-enrollment`,
            isOpen: p,
            onClose: h,
            showCloseButton: !0,
            contentClassName: `!px-6 !pt-6 md:!pb-[24px]`,
            headerClassName: `!px-6 !h-[76px] !items-center`,
            title: G,
            children: Q
        }), t[52] = p, t[53] = h, t[54] = G, t[55] = Q, t[56] = $) : $ = t[56], $
    }
}));
export {
    A as i, pe as n, I as r, F as t
};
//# sourceMappingURL=94e0eb8c-ew1wyfju9pwn0ucs.js.map