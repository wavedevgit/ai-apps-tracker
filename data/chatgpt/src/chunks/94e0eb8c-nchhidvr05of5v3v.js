const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/0a2afdfe-oq0984cn0emr7hyh.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-dfpv67hlp00pbohr.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/conversation-small-cy5f8pl0g26s86so.js", "assets/30901919-7dzdc1ou0jtwkwpt.js", "assets/c470f5ab-d4g7lc53n1e1ao7o.js", "assets/0e5afe53-o2mcfq1ky1uaktz5.js", "assets/conversation-small-j5v9ogf2.css", "assets/c2675c8c-9bs3zsr3vq259es7.js", "assets/82782bc9-mb60yg1xlggwvqri.js", "assets/8b34dbc2-k1zgxrtsww83602u.js", "assets/global-modals-lv5n3ujm.css", "assets/32d062bc-jaxhbbrg9iq36owh.js", "assets/d12af438-n0cn091hf585d4gi.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Az as n,
    J5 as r,
    Mz as i,
    Nz as a,
    Q0 as o,
    Sw as s,
    VU as c,
    X0 as l,
    Y0 as u,
    Y5 as d,
    jz as f,
    t2 as p,
    ww as m,
    zU as h
} from "./4813494d-dfpv67hlp00pbohr.js";
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
    $b as ae,
    Gx as oe,
    Qb as w,
    Wx as se,
    bC as ce,
    xC as T
} from "./30901919-7dzdc1ou0jtwkwpt.js";
import {
    a_ as le,
    e_ as ue,
    i_ as E,
    n_ as de,
    r_ as D,
    s_ as O,
    t_ as fe,
    u_ as pe
} from "./c2675c8c-9bs3zsr3vq259es7.js";

function k(e) {
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
        status: u
    } = le(), d = (0, j.useRef)(!1), f, m;
    t[2] !== c || t[3] !== l || t[4] !== o || t[5] !== i || t[6] !== s || t[7] !== a || t[8] !== u ? (f = () => {
        !(typeof c == `function` ? c() : c) || d.current || u !== `enabled` && k(new URLSearchParams(l.search)) && (d.current = !0, s?.() !== !0 && p(F, {
            onClose: () => {
                d.current = !1
            },
            onMfaEnabled: o,
            redirectUrl: i,
            source: a
        }))
    }, m = [c, l, o, s, i, a, u], t[2] = c, t[3] = l, t[4] = o, t[5] = i, t[6] = s, t[7] = a, t[8] = u, t[9] = f, t[10] = m) : (f = t[9], m = t[10]), (0, j.useEffect)(f, m)
}

function he() {}
var ge, j, M, N, P, _e, ve, F, I = e((() => {
    ge = C(), T(), w(), se(), a(), m(), o(), O(), E(), D(), f(), h(), ue(), l(), d(), j = t(b()), y(), v(), M = g(), S(), N = _({
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
    }), P = u(() => x(() => import(`./0a2afdfe-oq0984cn0emr7hyh.js`).then(e => e.EnterOtpCodeModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]))), _e = u(() => x(() => import(`./d12af438-n0cn091hf585d4gi.js`).then(e => e.EnrollTotpModal), __vite__mapDeps([15, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]))), ve = e => {
        p(de, {
            source: e,
            onOtpRequested: ({
                phoneNumber: t,
                enrollmentSessionId: n,
                factorId: r
            }) => {
                p(P, {
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
                isOpen: a,
                onClose: o,
                onMfaEnabled: l,
                onSelectFactor: u,
                redirectUrl: d,
                source: f
            } = e,
            m = a === void 0 || a,
            h = o === void 0 ? he : o,
            g = ie(),
            _ = c(),
            v = pe(),
            y = ee(),
            b;
        t[0] !== y || t[1] !== d ? (b = d ?? me(y), t[0] = y, t[1] = d, t[2] = b) : b = t[2];
        let x = b,
            S;
        t[3] !== x || t[4] !== f ? (S = {
            redirectUrl: x,
            source: f
        }, t[3] = x, t[4] = f, t[5] = S) : S = t[5];
        let {
            setupMfa: C
        } = fe(S), {
            status: w,
            show_sms: se
        } = le(), [T, ue] = (0, j.useState)(null), E = (0, j.useRef)(!1), de = (0, j.useRef)(!1), [D] = re(), O = ne(), A;
        t[6] !== v || t[7] !== g || t[8] !== f || t[9] !== _ ? (A = async () => {
            if (!E.current) {
                E.current = !0;
                try {
                    let e = await v.mutateAsync({
                        factor: `totp`,
                        source: f
                    });
                    p(_e, {
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
        t[11] !== g || t[12] !== u || t[13] !== C || t[14] !== f || t[15] !== P || t[16] !== _ ? (F = async e => {
            ue(e);
            let t = () => ue(null);
            try {
                if (u?.(e), e === `totp`) {
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
        }, t[11] = g, t[12] = u, t[13] = C, t[14] = f, t[15] = P, t[16] = _, t[17] = F) : F = t[17];
        let I = F,
            L, R;
        t[18] !== w || t[19] !== h || t[20] !== l ? (L = () => {
            w === `enabled` && (l?.(), h?.())
        }, R = [w, l, h], t[18] = w, t[19] = h, t[20] = l, t[21] = L, t[22] = R) : (L = t[21], R = t[22]), (0, j.useEffect)(L, R);
        let z, B;
        t[23] !== I || t[24] !== y.hash || t[25] !== y.pathname || t[26] !== y.search || t[27] !== O || t[28] !== D ? (B = () => {
            if (de.current) return;
            let e = k(D);
            if (!e) return;
            de.current = !0;
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
        }, z = [I, y.hash, y.pathname, y.search, O, D], t[23] = I, t[24] = y.hash, t[25] = y.pathname, t[26] = y.search, t[27] = O, t[28] = D, t[29] = z, t[30] = B) : (z = t[29], B = t[30]), (0, j.useEffect)(B, z);
        let ye = w !== `enabled` && se,
            V;
        t[31] === Symbol.for(`react.memo_cache_sentinel`) ? (V = {
            id: `totp`,
            icon: oe,
            label: (0, M.jsx)(te, {
                ...N.authenticatorLabel
            })
        }, t[31] = V) : V = t[31];
        let H;
        t[32] === ye ? H = t[33] : (H = [V, ...ye ? [{
            id: `sms`,
            icon: ae,
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
                    id: a,
                    icon: o,
                    label: s
                } = e;
                return (0, M.jsx)(`div`, {
                    role: `listitem`,
                    children: (0, M.jsxs)(`button`, {
                        type: `button`,
                        className: r(`text-token-text-primary hover:bg-token-bg-tertiary focus-visible:ring-token-focus`, `flex w-full items-center gap-3 px-4 py-4 text-start text-sm`, `focus-visible:ring-2 focus-visible:ring-offset-2`, t !== U.length - 1 && `after:bg-token-border-default relative after:absolute after:start-4 after:end-4 after:bottom-0 after:h-px`),
                        onClick: e => {
                            if (T != null) {
                                e.preventDefault();
                                return
                            }
                            I(a)
                        },
                        children: [(0, M.jsx)(o, {
                            className: `h-6 w-6`
                        }), (0, M.jsx)(`div`, {
                            className: `flex flex-1 items-center gap-2`,
                            children: s
                        }), T === a ? (0, M.jsx)(n, {
                            className: `h-4 w-4`
                        }) : (0, M.jsx)(i.ChevronRightSm, {
                            className: `icon-sm`
                        })]
                    })
                }, a)
            })
        }), t[45] = T, t[46] = I, t[47] = U, t[48] = Z) : Z = t[48];
        let Q;
        t[49] !== X || t[50] !== Z ? (Q = (0, M.jsxs)(`div`, {
            className: `flex flex-col gap-6`,
            children: [J, X, Z]
        }), t[49] = X, t[50] = Z, t[51] = Q) : Q = t[51];
        let $;
        return t[52] !== m || t[53] !== h || t[54] !== G || t[55] !== Q ? ($ = (0, M.jsx)(s, {
            testId: `modal-mfa-enrollment`,
            isOpen: m,
            onClose: h,
            showCloseButton: !0,
            contentClassName: `!px-6 !pt-6 md:!pb-[24px]`,
            headerClassName: `!px-6 !h-[76px] !items-center`,
            title: G,
            children: Q
        }), t[52] = m, t[53] = h, t[54] = G, t[55] = Q, t[56] = $) : $ = t[56], $
    }
}));
export {
    A as i, k as n, I as r, F as t
};
//# sourceMappingURL=94e0eb8c-nchhidvr05of5v3v.js.map