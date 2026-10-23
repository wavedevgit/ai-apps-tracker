const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/0a2afdfe-equ146s7l0iobbu0.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-mdvd4786a87166cc.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-bcbq46iub1p0ca1t.js", "assets/30901919-s8bko9nrkqwv6i4f.js", "assets/c470f5ab-jwd0o7jx9i9say9k.js", "assets/0e5afe53-hxm3yzzjqriayom4.js", "assets/conversation-small-ep6mlz5m.css", "assets/c2675c8c-oz03twoan08d72ud.js", "assets/82782bc9-b4xbouzwkkyrfqq2.js", "assets/8b34dbc2-lmwubajnld74ksfm.js", "assets/global-modals-dxg9ukpk.css", "assets/32d062bc-g0pe6n0bz7c1z0ye.js", "assets/d12af438-ejurfrkc45vj80on.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Aw as n,
    Bz as r,
    K5 as i,
    LU as a,
    Ow as o,
    Rz as s,
    Vz as c,
    a2 as l,
    c2 as u,
    d2 as d,
    o2 as f,
    q5 as p,
    zU as m,
    zz as h
} from "./4813494d-mdvd4786a87166cc.js";
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
} from "./30901919-s8bko9nrkqwv6i4f.js";
import {
    d_ as le,
    f_ as ue,
    g_ as de,
    h_ as E,
    m_ as fe,
    p_ as D,
    v_ as O,
    x_ as pe
} from "./c2675c8c-oz03twoan08d72ud.js";

function me(e) {
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
    } = n, c = r === void 0 || r, l = ee(), {
        status: u
    } = de(), f = (0, A.useRef)(!1), p, m;
    t[2] !== c || t[3] !== l || t[4] !== o || t[5] !== i || t[6] !== s || t[7] !== a || t[8] !== u ? (p = () => {
        !(typeof c == `function` ? c() : c) || f.current || u !== `enabled` && me(new URLSearchParams(l.search)) && (f.current = !0, s?.() !== !0 && d(F, {
            onClose: () => {
                f.current = !1
            },
            onMfaEnabled: o,
            redirectUrl: i,
            source: a
        }))
    }, m = [c, l, o, s, i, a, u], t[2] = c, t[3] = l, t[4] = o, t[5] = i, t[6] = s, t[7] = a, t[8] = u, t[9] = p, t[10] = m) : (p = t[9], m = t[10]), (0, A.useEffect)(p, m)
}

function ge() {}
var _e, A, j, M, N, ve, P, F, I = e((() => {
    _e = C(), T(), oe(), w(), c(), n(), u(), O(), E(), fe(), h(), a(), le(), f(), p(), A = t(b()), y(), v(), j = g(), S(), M = _({
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
    }), N = l(() => x(() => import(`./0a2afdfe-equ146s7l0iobbu0.js`).then(e => e.EnterOtpCodeModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]))), ve = l(() => x(() => import(`./d12af438-ejurfrkc45vj80on.js`).then(e => e.EnrollTotpModal), __vite__mapDeps([15, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]))), P = e => {
        d(D, {
            source: e,
            onOtpRequested: ({
                phoneNumber: t,
                enrollmentSessionId: n,
                factorId: r
            }) => {
                d(N, {
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
                onClose: a,
                onMfaEnabled: c,
                onSelectFactor: l,
                redirectUrl: u,
                source: f
            } = e,
            p = n === void 0 || n,
            h = a === void 0 ? ge : a,
            g = ie(),
            _ = m(),
            v = pe(),
            y = ee(),
            b;
        t[0] !== y || t[1] !== u ? (b = u ?? he(y), t[0] = y, t[1] = u, t[2] = b) : b = t[2];
        let x = b,
            S;
        t[3] !== x || t[4] !== f ? (S = {
            redirectUrl: x,
            source: f
        }, t[3] = x, t[4] = f, t[5] = S) : S = t[5];
        let {
            setupMfa: C
        } = ue(S), {
            status: w,
            show_sms: oe
        } = de(), [T, le] = (0, A.useState)(null), E = (0, A.useRef)(!1), fe = (0, A.useRef)(!1), [D] = re(), O = ne(), k;
        t[6] !== v || t[7] !== g || t[8] !== f || t[9] !== _ ? (k = async () => {
            if (!E.current) {
                E.current = !0;
                try {
                    let e = await v.mutateAsync({
                        factor: `totp`,
                        source: f
                    });
                    d(ve, {
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
                    E.current = !1, _.danger(g.formatMessage(M.genericStartError), {
                        error: t
                    })
                }
            }
        }, t[6] = v, t[7] = g, t[8] = f, t[9] = _, t[10] = k) : k = t[10];
        let N = k,
            F;
        t[11] !== g || t[12] !== l || t[13] !== C || t[14] !== f || t[15] !== N || t[16] !== _ ? (F = async e => {
            le(e);
            let t = () => le(null);
            try {
                if (l?.(e), e === `totp`) {
                    await C(`totp`, {
                        native_modal: !0
                    }) || await N(), t();
                    return
                } else if (e === `sms`) {
                    await C(`sms`) || P(f), t();
                    return
                } else {
                    _.danger(g.formatMessage(M.genericStartError)), t();
                    return
                }
            } catch (e) {
                let n = e;
                _.danger(g.formatMessage(M.genericStartError), {
                    error: n
                }), t()
            }
        }, t[11] = g, t[12] = l, t[13] = C, t[14] = f, t[15] = N, t[16] = _, t[17] = F) : F = t[17];
        let I = F,
            L, R;
        t[18] !== w || t[19] !== h || t[20] !== c ? (L = () => {
            w === `enabled` && (c?.(), h?.())
        }, R = [w, c, h], t[18] = w, t[19] = h, t[20] = c, t[21] = L, t[22] = R) : (L = t[21], R = t[22]), (0, A.useEffect)(L, R);
        let z, B;
        t[23] !== I || t[24] !== y.hash || t[25] !== y.pathname || t[26] !== y.search || t[27] !== O || t[28] !== D ? (B = () => {
            if (fe.current) return;
            let e = me(D);
            if (!e) return;
            fe.current = !0;
            let t = new URLSearchParams(y.search);
            t.delete(`action`), t.delete(`factor`), t.delete(`factor_id`), y.pathname === `/connector-auth` && t.getAll(`connector_action`).length === 1 && t.get(`connector_action`) === `connect` && (t.set(`action`, `connect`), t.delete(`connector_action`));
            let n = t.toString();
            O({
                pathname: y.pathname,
                search: n ? `?${n}` : ``,
                hash: y.hash
            }, {
                replace: !0
            }), I(e)
        }, z = [I, y.hash, y.pathname, y.search, O, D], t[23] = I, t[24] = y.hash, t[25] = y.pathname, t[26] = y.search, t[27] = O, t[28] = D, t[29] = z, t[30] = B) : (z = t[29], B = t[30]), (0, A.useEffect)(B, z);
        let ye = w !== `enabled` && oe,
            V;
        t[31] === Symbol.for(`react.memo_cache_sentinel`) ? (V = {
            id: `totp`,
            icon: ae,
            label: (0, j.jsx)(te, {
                ...M.authenticatorLabel
            })
        }, t[31] = V) : V = t[31];
        let H;
        t[32] === ye ? H = t[33] : (H = [V, ...ye ? [{
            id: `sms`,
            icon: se,
            label: (0, j.jsx)(te, {
                ...M.textCodeLabel
            })
        }] : []], t[32] = ye, t[33] = H);
        let U = H;
        if (w === `enabled`) return null;
        let W;
        t[34] === g ? W = t[35] : (W = g.formatMessage(M.title), t[34] = g, t[35] = W);
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
            children: (0, j.jsx)(ce, {
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
        t[41] === g ? Y = t[42] : (Y = g.formatMessage(M.title), t[41] = g, t[42] = Y);
        let X;
        t[43] === Y ? X = t[44] : (X = (0, j.jsx)(`div`, {
            className: `flex flex-col items-center justify-center`,
            children: (0, j.jsx)(`h1`, {
                className: `max-w-[420px] px-4 text-center text-2xl font-semibold`,
                children: Y
            })
        }), t[43] = Y, t[44] = X);
        let Z;
        t[45] !== T || t[46] !== I || t[47] !== U ? (Z = (0, j.jsx)(`div`, {
            className: `border-token-border-default bg-token-bg-primary overflow-hidden rounded-2xl border`,
            role: `list`,
            children: U.map((e, t) => {
                let {
                    id: n,
                    icon: a,
                    label: o
                } = e;
                return (0, j.jsx)(`div`, {
                    role: `listitem`,
                    children: (0, j.jsxs)(`button`, {
                        type: `button`,
                        className: i(`text-token-text-primary hover:bg-token-bg-tertiary focus-visible:ring-token-focus`, `flex w-full items-center gap-3 px-4 py-4 text-start text-sm`, `focus-visible:ring-2 focus-visible:ring-offset-2`, t !== U.length - 1 && `after:bg-token-border-default relative after:absolute after:start-4 after:end-4 after:bottom-0 after:h-px`),
                        onClick: e => {
                            if (T != null) {
                                e.preventDefault();
                                return
                            }
                            I(n)
                        },
                        children: [(0, j.jsx)(a, {
                            className: `h-6 w-6`
                        }), (0, j.jsx)(`div`, {
                            className: `flex flex-1 items-center gap-2`,
                            children: o
                        }), T === n ? (0, j.jsx)(s, {
                            className: `h-4 w-4`
                        }) : (0, j.jsx)(r.ChevronRightSm, {
                            className: `icon-sm`
                        })]
                    })
                }, n)
            })
        }), t[45] = T, t[46] = I, t[47] = U, t[48] = Z) : Z = t[48];
        let Q;
        t[49] !== X || t[50] !== Z ? (Q = (0, j.jsxs)(`div`, {
            className: `flex flex-col gap-6`,
            children: [J, X, Z]
        }), t[49] = X, t[50] = Z, t[51] = Q) : Q = t[51];
        let $;
        return t[52] !== p || t[53] !== h || t[54] !== G || t[55] !== Q ? ($ = (0, j.jsx)(o, {
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
    k as i, me as n, I as r, F as t
};
//# sourceMappingURL=94e0eb8c-m3ucblcofbvh9spg.js.map