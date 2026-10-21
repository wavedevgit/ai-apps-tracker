const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/0a2afdfe-j8zhruhuy36zoye5.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-lxa3wniynbx9ka2a.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-kzsalymynzuddxee.js", "assets/30901919-i8ip8r0znvgcym38.js", "assets/c470f5ab-poh7ivjvb3j2jlfz.js", "assets/0e5afe53-dz59mkfveu52getp.js", "assets/conversation-small-bwtqiuwj.css", "assets/c2675c8c-ossqum2x3eut0sh8.js", "assets/82782bc9-idqd90kxtp4zogpp.js", "assets/8b34dbc2-ba6wt3zxvh7jce7p.js", "assets/global-modals-lv5n3ujm.css", "assets/32d062bc-c8m99kodidpe2gdf.js", "assets/d12af438-c5t4yxme998l8avt.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $0 as n,
    BU as r,
    Cw as i,
    HU as a,
    Mz as o,
    Nz as s,
    Pz as c,
    Tw as l,
    X0 as u,
    X5 as d,
    Y5 as f,
    Z0 as p,
    jz as ee,
    n2 as m
} from "./4813494d-lxa3wniynbx9ka2a.js";
import {
    At as te,
    Bn as h,
    Ln as g,
    Nn as ne,
    Nt as re,
    Q as _,
    Rn as v,
    Vn as y,
    Vt as ie,
    cn as b,
    ln as x,
    wn as S,
    zn as ae
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    $b as oe,
    Gx as se,
    Qb as C,
    Wx as ce,
    bC as le,
    xC as w
} from "./30901919-i8ip8r0znvgcym38.js";
import {
    a_ as ue,
    e_ as de,
    i_ as T,
    n_ as fe,
    r_ as E,
    s_ as D,
    t_ as pe,
    u_ as me
} from "./c2675c8c-ossqum2x3eut0sh8.js";

function O(e) {
    if (e.get(`action`) !== `enable`) return null;
    let t = e.get(`factor`);
    return t === `totp` || t === `sms` ? t : null
}

function he(e) {
    return `${e.pathname}${e.search}${e.hash}`
}

function k(e) {
    "use forget";
    let t = (0, _e.c)(11),
        n;
    t[0] === e ? n = t[1] : (n = e === void 0 ? {} : e, t[0] = e, t[1] = n);
    let {
        enabled: r,
        redirectUrl: i,
        source: a,
        onMfaEnabled: o,
        restoreParentFlowOnResume: s
    } = n, c = r === void 0 || r, l = te(), {
        status: u
    } = ue(), d = (0, A.useRef)(!1), f, p;
    t[2] !== c || t[3] !== l || t[4] !== o || t[5] !== i || t[6] !== s || t[7] !== a || t[8] !== u ? (f = () => {
        !(typeof c == `function` ? c() : c) || d.current || u !== `enabled` && O(new URLSearchParams(l.search)) && (d.current = !0, s?.() !== !0 && m(F, {
            onClose: () => {
                d.current = !1
            },
            onMfaEnabled: o,
            redirectUrl: i,
            source: a
        }))
    }, p = [c, l, o, s, i, a, u], t[2] = c, t[3] = l, t[4] = o, t[5] = i, t[6] = s, t[7] = a, t[8] = u, t[9] = f, t[10] = p) : (f = t[9], p = t[10]), (0, A.useEffect)(f, p)
}

function ge() {}
var _e, A, j, M, N, ve, P, F, I = e((() => {
    _e = S(), w(), C(), ce(), c(), l(), n(), D(), T(), E(), o(), r(), de(), p(), d(), A = t(y()), v(), _(), j = h(), x(), M = g({
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
    }), N = u(() => b(() => import(`./0a2afdfe-j8zhruhuy36zoye5.js`).then(e => e.EnterOtpCodeModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]))), ve = u(() => b(() => import(`./d12af438-c5t4yxme998l8avt.js`).then(e => e.EnrollTotpModal), __vite__mapDeps([15, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]))), P = e => {
        m(fe, {
            source: e,
            onOtpRequested: ({
                phoneNumber: t,
                enrollmentSessionId: n,
                factorId: r
            }) => {
                m(N, {
                    phoneNumber: t,
                    enrollmentSessionId: n,
                    factorId: r,
                    onActivated: () => {},
                    source: e,
                    onBack: () => {
                        P(e)
                    }
                })
            }
        })
    }, F = e => {
        "use forget";
        let t = (0, _e.c)(57),
            {
                isOpen: n,
                onClose: r,
                onMfaEnabled: o,
                onSelectFactor: c,
                redirectUrl: l,
                source: u
            } = e,
            d = n === void 0 || n,
            p = r === void 0 ? ge : r,
            h = ae(),
            g = a(),
            _ = me(),
            v = te(),
            y;
        t[0] !== v || t[1] !== l ? (y = l ?? he(v), t[0] = v, t[1] = l, t[2] = y) : y = t[2];
        let b = y,
            x;
        t[3] !== b || t[4] !== u ? (x = {
            redirectUrl: b,
            source: u
        }, t[3] = b, t[4] = u, t[5] = x) : x = t[5];
        let {
            setupMfa: S
        } = pe(x), {
            status: C,
            show_sms: ce
        } = ue(), [w, de] = (0, A.useState)(null), T = (0, A.useRef)(!1), fe = (0, A.useRef)(!1), [E] = ie(), D = re(), k;
        t[6] !== _ || t[7] !== h || t[8] !== u || t[9] !== g ? (k = async () => {
            if (!T.current) {
                T.current = !0;
                try {
                    let e = await _.mutateAsync({
                        factor: `totp`,
                        source: u
                    });
                    m(ve, {
                        sessionId: e.session_id,
                        secret: e.secret,
                        source: u,
                        onCancelled: () => {
                            T.current = !1
                        },
                        onActivated: () => {
                            T.current = !1
                        }
                    })
                } catch (e) {
                    let t = e;
                    T.current = !1, g.danger(h.formatMessage(M.genericStartError), {
                        error: t
                    })
                }
            }
        }, t[6] = _, t[7] = h, t[8] = u, t[9] = g, t[10] = k) : k = t[10];
        let N = k,
            F;
        t[11] !== h || t[12] !== c || t[13] !== S || t[14] !== u || t[15] !== N || t[16] !== g ? (F = async e => {
            de(e);
            let t = () => de(null);
            try {
                if (c?.(e), e === `totp`) {
                    await S(`totp`, {
                        native_modal: !0
                    }) || await N(), t();
                    return
                } else if (e === `sms`) {
                    await S(`sms`) || P(u), t();
                    return
                } else {
                    g.danger(h.formatMessage(M.genericStartError)), t();
                    return
                }
            } catch (e) {
                let n = e;
                g.danger(h.formatMessage(M.genericStartError), {
                    error: n
                }), t()
            }
        }, t[11] = h, t[12] = c, t[13] = S, t[14] = u, t[15] = N, t[16] = g, t[17] = F) : F = t[17];
        let I = F,
            L, R;
        t[18] !== C || t[19] !== p || t[20] !== o ? (L = () => {
            C === `enabled` && (o?.(), p?.())
        }, R = [C, o, p], t[18] = C, t[19] = p, t[20] = o, t[21] = L, t[22] = R) : (L = t[21], R = t[22]), (0, A.useEffect)(L, R);
        let z, B;
        t[23] !== I || t[24] !== v.hash || t[25] !== v.pathname || t[26] !== v.search || t[27] !== D || t[28] !== E ? (B = () => {
            if (fe.current) return;
            let e = O(E);
            if (!e) return;
            fe.current = !0;
            let t = new URLSearchParams(v.search);
            t.delete(`action`), t.delete(`factor`), t.delete(`factor_id`), v.pathname === `/connector-auth` && t.getAll(`connector_action`).length === 1 && t.get(`connector_action`) === `connect` && (t.set(`action`, `connect`), t.delete(`connector_action`));
            let n = t.toString();
            D({
                pathname: v.pathname,
                search: n ? `?${n}` : ``,
                hash: v.hash
            }, {
                replace: !0
            }), I(e)
        }, z = [I, v.hash, v.pathname, v.search, D, E], t[23] = I, t[24] = v.hash, t[25] = v.pathname, t[26] = v.search, t[27] = D, t[28] = E, t[29] = z, t[30] = B) : (z = t[29], B = t[30]), (0, A.useEffect)(B, z);
        let ye = C !== `enabled` && ce,
            V;
        t[31] === Symbol.for(`react.memo_cache_sentinel`) ? (V = {
            id: `totp`,
            icon: se,
            label: (0, j.jsx)(ne, {
                ...M.authenticatorLabel
            })
        }, t[31] = V) : V = t[31];
        let H;
        t[32] === ye ? H = t[33] : (H = [V, ...ye ? [{
            id: `sms`,
            icon: oe,
            label: (0, j.jsx)(ne, {
                ...M.textCodeLabel
            })
        }] : []], t[32] = ye, t[33] = H);
        let U = H;
        if (C === `enabled`) return null;
        let W;
        t[34] === h ? W = t[35] : (W = h.formatMessage(M.title), t[34] = h, t[35] = W);
        let G;
        t[36] === W ? G = t[37] : (G = (0, j.jsx)(`span`, {
            className: `sr-only`,
            children: W
        }), t[36] = W, t[37] = G);
        let K;
        t[38] === Symbol.for(`react.memo_cache_sentinel`) ? (K = (0, j.jsxs)(`div`, {
            className: `flex gap-1`,
            children: [(0, j.jsx)(`span`, {
                className: `h-1.5 w-1.5 rounded-full bg-gray-200`
            }), (0, j.jsx)(`span`, {
                className: `h-1.5 w-1.5 rounded-full bg-gray-200`
            }), (0, j.jsx)(`span`, {
                className: `h-1.5 w-1.5 rounded-full bg-gray-200`
            })]
        }), t[38] = K) : K = t[38];
        let q;
        t[39] === Symbol.for(`react.memo_cache_sentinel`) ? (q = (0, j.jsx)(`div`, {
            className: `rounded-xl border-[0.5px] p-2 shadow-sm`,
            children: (0, j.jsx)(le, {
                className: `icon-2xl`
            })
        }), t[39] = q) : q = t[39];
        let J;
        t[40] === Symbol.for(`react.memo_cache_sentinel`) ? (J = (0, j.jsxs)(`div`, {
            className: `flex items-center justify-center gap-4`,
            children: [K, q, (0, j.jsxs)(`div`, {
                className: `flex gap-1`,
                children: [(0, j.jsx)(`span`, {
                    className: `h-1.5 w-1.5 rounded-full bg-gray-200`
                }), (0, j.jsx)(`span`, {
                    className: `h-1.5 w-1.5 rounded-full bg-gray-200`
                }), (0, j.jsx)(`span`, {
                    className: `h-1.5 w-1.5 rounded-full bg-gray-200`
                })]
            })]
        }), t[40] = J) : J = t[40];
        let Y;
        t[41] === h ? Y = t[42] : (Y = h.formatMessage(M.title), t[41] = h, t[42] = Y);
        let X;
        t[43] === Y ? X = t[44] : (X = (0, j.jsx)(`div`, {
            className: `flex flex-col items-center justify-center`,
            children: (0, j.jsx)(`h1`, {
                className: `max-w-[420px] px-4 text-center text-2xl font-semibold`,
                children: Y
            })
        }), t[43] = Y, t[44] = X);
        let Z;
        t[45] !== w || t[46] !== I || t[47] !== U ? (Z = (0, j.jsx)(`div`, {
            className: `border-token-border-default bg-token-bg-primary overflow-hidden rounded-2xl border`,
            role: `list`,
            children: U.map((e, t) => {
                let {
                    id: n,
                    icon: r,
                    label: i
                } = e;
                return (0, j.jsx)(`div`, {
                    role: `listitem`,
                    children: (0, j.jsxs)(`button`, {
                        type: `button`,
                        className: f(`text-token-text-primary hover:bg-token-bg-tertiary focus-visible:ring-token-focus`, `flex w-full items-center gap-3 px-4 py-4 text-start text-sm`, `focus-visible:ring-2 focus-visible:ring-offset-2`, t !== U.length - 1 && `after:bg-token-border-default relative after:absolute after:start-4 after:end-4 after:bottom-0 after:h-px`),
                        onClick: e => {
                            if (w != null) {
                                e.preventDefault();
                                return
                            }
                            I(n)
                        },
                        children: [(0, j.jsx)(r, {
                            className: `h-6 w-6`
                        }), (0, j.jsx)(`div`, {
                            className: `flex flex-1 items-center gap-2`,
                            children: i
                        }), w === n ? (0, j.jsx)(ee, {
                            className: `h-4 w-4`
                        }) : (0, j.jsx)(s.ChevronRightSm, {
                            className: `icon-sm`
                        })]
                    })
                }, n)
            })
        }), t[45] = w, t[46] = I, t[47] = U, t[48] = Z) : Z = t[48];
        let Q;
        t[49] !== X || t[50] !== Z ? (Q = (0, j.jsxs)(`div`, {
            className: `flex flex-col gap-6`,
            children: [J, X, Z]
        }), t[49] = X, t[50] = Z, t[51] = Q) : Q = t[51];
        let $;
        return t[52] !== d || t[53] !== p || t[54] !== G || t[55] !== Q ? ($ = (0, j.jsx)(i, {
            testId: `modal-mfa-enrollment`,
            isOpen: d,
            onClose: p,
            showCloseButton: !0,
            contentClassName: `!px-6 !pt-6 md:!pb-[24px]`,
            headerClassName: `!px-6 !h-[76px] !items-center`,
            title: G,
            children: Q
        }), t[52] = d, t[53] = p, t[54] = G, t[55] = Q, t[56] = $) : $ = t[56], $
    }
}));
export {
    k as i, O as n, I as r, F as t
};
//# sourceMappingURL=94e0eb8c-mqwt1kqbh7ozdq6x.js.map