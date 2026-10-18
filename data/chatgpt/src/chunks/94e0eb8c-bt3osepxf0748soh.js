const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/0a2afdfe-mnd6ptw894b9tpux.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-cb22y2w19zwyshmt.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/conversation-small-fym1zmu9zimymmm1.js", "assets/30901919-e33mbl5u1y88w5wu.js", "assets/c470f5ab-m68dth1hatzjj8yh.js", "assets/0e5afe53-dl0nq2u2siu8c8q5.js", "assets/conversation-small-iha453gv.css", "assets/c2675c8c-ig7dykzhv7vbqkt7.js", "assets/82782bc9-h658ejxn3ufkvr7a.js", "assets/8b34dbc2-gf9wnwcahty27ylx.js", "assets/global-modals-njebr7y8.css", "assets/32d062bc-e8qmxtp2n88a0h4b.js", "assets/d12af438-co7s4yplt38xdmma.js"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    C0 as n,
    O0 as r,
    S0 as i,
    T0 as a,
    b5 as o,
    dz as s,
    fz as c,
    hU as l,
    iw as u,
    mz as d,
    ow as f,
    pU as p,
    pz as m,
    y5 as ee
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    $ as h,
    Bn as g,
    Ht as te,
    Ln as _,
    Nn as ne,
    Pt as re,
    Rn as v,
    Vn as y,
    cn as b,
    jt as ie,
    ln as x,
    wn as S,
    zn as ae
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Gx as oe,
    Wx as C,
    bC as se,
    nx as ce,
    tx as le,
    xC as w
} from "./30901919-e33mbl5u1y88w5wu.js";
import {
    A_ as ue,
    D_ as de,
    E_ as fe,
    F_ as pe,
    M_ as T,
    O_ as me,
    T_ as E,
    k_ as D
} from "./c2675c8c-ig7dykzhv7vbqkt7.js";

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
    let t = (0, A.c)(11),
        n;
    t[0] === e ? n = t[1] : (n = e === void 0 ? {} : e, t[0] = e, t[1] = n);
    let {
        enabled: i,
        redirectUrl: a,
        source: o,
        onMfaEnabled: s,
        restoreParentFlowOnResume: c
    } = n, l = i === void 0 || i, u = ie(), {
        status: d
    } = ue(), f = (0, j.useRef)(!1), p, m;
    t[2] !== l || t[3] !== u || t[4] !== s || t[5] !== a || t[6] !== c || t[7] !== o || t[8] !== d ? (p = () => {
        !(typeof l == `function` ? l() : l) || f.current || d !== `enabled` && O(new URLSearchParams(u.search)) && (f.current = !0, c?.() !== !0 && r(F, {
            onClose: () => {
                f.current = !1
            },
            onMfaEnabled: s,
            redirectUrl: a,
            source: o
        }))
    }, m = [l, u, s, c, a, o, d], t[2] = l, t[3] = u, t[4] = s, t[5] = a, t[6] = c, t[7] = o, t[8] = d, t[9] = p, t[10] = m) : (p = t[9], m = t[10]), (0, j.useEffect)(p, m)
}

function ge() {}
var A, j, M, N, P, _e, ve, F, I = e((() => {
    A = S(), w(), le(), C(), d(), f(), a(), T(), D(), me(), c(), p(), E(), n(), o(), j = t(y()), v(), h(), M = g(), x(), N = _({
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
    }), P = i(() => b(() => import(`./0a2afdfe-mnd6ptw894b9tpux.js`).then(e => e.EnterOtpCodeModal), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]))), _e = i(() => b(() => import(`./d12af438-co7s4yplt38xdmma.js`).then(e => e.EnrollTotpModal), __vite__mapDeps([15, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]))), ve = e => {
        r(de, {
            source: e,
            onOtpRequested: ({
                phoneNumber: t,
                enrollmentSessionId: n,
                factorId: i
            }) => {
                r(P, {
                    phoneNumber: t,
                    enrollmentSessionId: n,
                    factorId: i,
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
        let t = (0, A.c)(57),
            {
                isOpen: n,
                onClose: i,
                onMfaEnabled: a,
                onSelectFactor: o,
                redirectUrl: c,
                source: d
            } = e,
            f = n === void 0 || n,
            p = i === void 0 ? ge : i,
            h = ae(),
            g = l(),
            _ = pe(),
            v = ie(),
            y;
        t[0] !== v || t[1] !== c ? (y = c ?? he(v), t[0] = v, t[1] = c, t[2] = y) : y = t[2];
        let b = y,
            x;
        t[3] !== b || t[4] !== d ? (x = {
            redirectUrl: b,
            source: d
        }, t[3] = b, t[4] = d, t[5] = x) : x = t[5];
        let {
            setupMfa: S
        } = fe(x), {
            status: C,
            show_sms: le
        } = ue(), [w, de] = (0, j.useState)(null), T = (0, j.useRef)(!1), me = (0, j.useRef)(!1), [E] = te(), D = re(), k;
        t[6] !== _ || t[7] !== h || t[8] !== d || t[9] !== g ? (k = async () => {
            if (!T.current) {
                T.current = !0;
                try {
                    let e = await _.mutateAsync({
                        factor: `totp`,
                        source: d
                    });
                    r(_e, {
                        sessionId: e.session_id,
                        secret: e.secret,
                        source: d,
                        onCancelled: () => {
                            T.current = !1
                        },
                        onActivated: () => {
                            T.current = !1
                        }
                    })
                } catch (e) {
                    let t = e;
                    T.current = !1, g.danger(h.formatMessage(N.genericStartError), {
                        error: t
                    })
                }
            }
        }, t[6] = _, t[7] = h, t[8] = d, t[9] = g, t[10] = k) : k = t[10];
        let P = k,
            F;
        t[11] !== h || t[12] !== o || t[13] !== S || t[14] !== d || t[15] !== P || t[16] !== g ? (F = async e => {
            de(e);
            let t = () => de(null);
            try {
                if (o?.(e), e === `totp`) {
                    await S(`totp`, {
                        native_modal: !0
                    }) || await P(), t();
                    return
                } else if (e === `sms`) {
                    await S(`sms`) || ve(d), t();
                    return
                } else {
                    g.danger(h.formatMessage(N.genericStartError)), t();
                    return
                }
            } catch (e) {
                let n = e;
                g.danger(h.formatMessage(N.genericStartError), {
                    error: n
                }), t()
            }
        }, t[11] = h, t[12] = o, t[13] = S, t[14] = d, t[15] = P, t[16] = g, t[17] = F) : F = t[17];
        let I = F,
            L, R;
        t[18] !== C || t[19] !== p || t[20] !== a ? (L = () => {
            C === `enabled` && (a?.(), p?.())
        }, R = [C, a, p], t[18] = C, t[19] = p, t[20] = a, t[21] = L, t[22] = R) : (L = t[21], R = t[22]), (0, j.useEffect)(L, R);
        let z, B;
        t[23] !== I || t[24] !== v.hash || t[25] !== v.pathname || t[26] !== v.search || t[27] !== D || t[28] !== E ? (B = () => {
            if (me.current) return;
            let e = O(E);
            if (!e) return;
            me.current = !0;
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
        }, z = [I, v.hash, v.pathname, v.search, D, E], t[23] = I, t[24] = v.hash, t[25] = v.pathname, t[26] = v.search, t[27] = D, t[28] = E, t[29] = z, t[30] = B) : (z = t[29], B = t[30]), (0, j.useEffect)(B, z);
        let ye = C !== `enabled` && le,
            V;
        t[31] === Symbol.for(`react.memo_cache_sentinel`) ? (V = {
            id: `totp`,
            icon: oe,
            label: (0, M.jsx)(ne, {
                ...N.authenticatorLabel
            })
        }, t[31] = V) : V = t[31];
        let H;
        t[32] === ye ? H = t[33] : (H = [V, ...ye ? [{
            id: `sms`,
            icon: ce,
            label: (0, M.jsx)(ne, {
                ...N.textCodeLabel
            })
        }] : []], t[32] = ye, t[33] = H);
        let U = H;
        if (C === `enabled`) return null;
        let W;
        t[34] === h ? W = t[35] : (W = h.formatMessage(N.title), t[34] = h, t[35] = W);
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
            children: (0, M.jsx)(se, {
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
        t[41] === h ? Y = t[42] : (Y = h.formatMessage(N.title), t[41] = h, t[42] = Y);
        let X;
        t[43] === Y ? X = t[44] : (X = (0, M.jsx)(`div`, {
            className: `flex flex-col items-center justify-center`,
            children: (0, M.jsx)(`h1`, {
                className: `max-w-[420px] px-4 text-center text-2xl font-semibold`,
                children: Y
            })
        }), t[43] = Y, t[44] = X);
        let Z;
        t[45] !== w || t[46] !== I || t[47] !== U ? (Z = (0, M.jsx)(`div`, {
            className: `border-token-border-default bg-token-bg-primary overflow-hidden rounded-2xl border`,
            role: `list`,
            children: U.map((e, t) => {
                let {
                    id: n,
                    icon: r,
                    label: i
                } = e;
                return (0, M.jsx)(`div`, {
                    role: `listitem`,
                    children: (0, M.jsxs)(`button`, {
                        type: `button`,
                        className: ee(`text-token-text-primary hover:bg-token-bg-tertiary focus-visible:ring-token-focus`, `flex w-full items-center gap-3 px-4 py-4 text-start text-sm`, `focus-visible:ring-2 focus-visible:ring-offset-2`, t !== U.length - 1 && `after:bg-token-border-default relative after:absolute after:start-4 after:end-4 after:bottom-0 after:h-px`),
                        onClick: e => {
                            if (w != null) {
                                e.preventDefault();
                                return
                            }
                            I(n)
                        },
                        children: [(0, M.jsx)(r, {
                            className: `h-6 w-6`
                        }), (0, M.jsx)(`div`, {
                            className: `flex flex-1 items-center gap-2`,
                            children: i
                        }), w === n ? (0, M.jsx)(s, {
                            className: `h-4 w-4`
                        }) : (0, M.jsx)(m.ChevronRightSm, {
                            className: `icon-sm`
                        })]
                    })
                }, n)
            })
        }), t[45] = w, t[46] = I, t[47] = U, t[48] = Z) : Z = t[48];
        let Q;
        t[49] !== X || t[50] !== Z ? (Q = (0, M.jsxs)(`div`, {
            className: `flex flex-col gap-6`,
            children: [J, X, Z]
        }), t[49] = X, t[50] = Z, t[51] = Q) : Q = t[51];
        let $;
        return t[52] !== f || t[53] !== p || t[54] !== G || t[55] !== Q ? ($ = (0, M.jsx)(u, {
            testId: `modal-mfa-enrollment`,
            isOpen: f,
            onClose: p,
            showCloseButton: !0,
            contentClassName: `!px-6 !pt-6 md:!pb-[24px]`,
            headerClassName: `!px-6 !h-[76px] !items-center`,
            title: G,
            children: Q
        }), t[52] = f, t[53] = p, t[54] = G, t[55] = Q, t[56] = $) : $ = t[56], $
    }
}));
export {
    k as i, O as n, I as r, F as t
};
//# sourceMappingURL=94e0eb8c-bt3osepxf0748soh.js.map