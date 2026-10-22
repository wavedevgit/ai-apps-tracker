import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as r,
    A8 as i,
    Ait as a,
    I4 as o,
    J5 as s,
    Jj as c,
    Mtt as l,
    N1 as u,
    Nit as d,
    P4 as f,
    TN as ee,
    Yat as te,
    Yj as ne,
    f0 as re,
    jtt as ie,
    kN as ae,
    p0 as oe,
    q1 as p,
    tot as m
} from "./4813494d-d7xm9wsvhdfbag9a.js";
import {
    Bn as se,
    Rn as h,
    Vn as g,
    wn as _,
    zn as ce
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Gut as le,
    LTn as ue,
    RTn as v,
    Wut as y
} from "./conversation-small-m7dgsxtvvivh3e6t.js";
import {
    as as de,
    os as fe
} from "./8b34dbc2-ik628tlti8ozm9vq.js";
import {
    a as pe,
    c as me,
    i as he,
    n as b,
    o as ge,
    r as _e,
    s as ve,
    t as ye
} from "./1f58b914-e29wnw3xxy7rz0d5.js";
import {
    n as be,
    r as xe,
    t as Se
} from "./ed7002b4-cl8uwt1eopxpy6s0.js";
import {
    i as x,
    n as S,
    r as Ce,
    t as we
} from "./1c86a5ac-lual4mtli3m8o3sx.js";
var C = t({
    HostedWalletEnrollmentPage: () => A
});

function w() {
    return u()?.id
}

function T() {
    return r().isLoading
}

function E() {
    return u(), ne(), ge()
}

function D(e) {
    return e + 1
}
var Te, O, k, A, j, M = e((() => {
    Te = _(), b(), de(), v(), l(), x(), S(), y(), i(), p(), re(), a(), m(), f(), ee(), c(), O = n(g()), h(), ve(), xe(), k = se(), A = e => {
        "use forget";
        let t = (0, Te.c)(8),
            {
                request: n,
                onClose: r
            } = e,
            i = s(w),
            a = s(T),
            o = s(E),
            [c, l] = (0, O.useState)(0),
            u;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (u = () => l(D), t[0] = u) : u = t[0];
        let d;
        return t[1] !== i || t[2] !== a || t[3] !== c || t[4] !== o || t[5] !== r || t[6] !== n ? (d = (0, k.jsx)(j, {
            request: n,
            onClose: r,
            accountId: i,
            accountsLoading: a,
            identity: o,
            onConnected: u
        }, c), t[1] = i, t[2] = a, t[3] = c, t[4] = o, t[5] = r, t[6] = n, t[7] = d) : d = t[7], d
    }, j = e => {
        "use forget";
        let t = (0, Te.c)(110),
            {
                request: n,
                onClose: r,
                accountId: i,
                accountsLoading: a,
                identity: s,
                onConnected: c
            } = e,
            l = ce(),
            u = ae(),
            f;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (f = {
            productSku: ue.CONNECTOR_SETTING,
            skipPostConnectExperience: !0
        }, t[0] = f) : f = t[0];
        let ee = fe(f),
            [ne, re] = (0, O.useState)(!1),
            p = (0, O.useRef)(!1),
            [m, se] = (0, O.useState)(null),
            h = m?.accountId,
            g;
        t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (g = {
            status: `loading`
        }, t[1] = g) : g = t[1];
        let [_, v] = (0, O.useState)(g), [y, de] = (0, O.useState)(!1), [b, ve] = (0, O.useState)(400), xe = (0, O.useRef)(null), x;
        t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (x = e => {
            xe.current?.abort(), v({
                status: e
            })
        }, t[2] = x) : x = t[2];
        let S = x,
            C;
        t[3] !== m?.accountId || t[4] !== m?.identity || t[5] !== n ? (C = e => {
            if (e.aborted) throw Error(`Wallet enrollment ended`);
            if (m?.identity !== ge() || n != null && n.accountId !== m?.accountId) throw S(`changed`), Error(`Wallet enrollment account changed`)
        }, t[3] = m?.accountId, t[4] = m?.identity, t[5] = n, t[6] = C) : C = t[6];
        let w = C,
            T, E;
        t[7] !== a || t[8] !== i || t[9] !== s ? (T = () => {
            a || se(e => e ?? {
                identity: s,
                accountId: i
            })
        }, E = [a, i, s], t[7] = a, t[8] = i, t[9] = s, t[10] = T, t[11] = E) : (T = t[10], E = t[11]), (0, O.useEffect)(T, E);
        let D, A;
        t[12] !== m || t[13] !== s ? (D = () => {
            m && m.identity !== s && S(`changed`)
        }, A = [m, s, S], t[12] = m, t[13] = s, t[14] = D, t[15] = A) : (D = t[14], A = t[15]), (0, O.useEffect)(D, A);
        let j, M;
        t[16] !== m || t[17] !== n || t[18] !== w ? (M = () => {
            if (!m) return;
            let e = m.accountId,
                t = new AbortController;
            xe.current = t;
            let {
                signal: r
            } = t, i = d(() => S(`changed`)), a = o(() => S(`changed`));
            return (async () => {
                try {
                    if (!e) {
                        S(`unavailable`);
                        return
                    }
                    w(r), await n?.check(r), w(r);
                    let t = await pe(e, r);
                    if (w(r), !t) {
                        v({
                            status: `setup-required`,
                            signal: r
                        });
                        return
                    }
                    let i = await (n?.callTool ?? he)({
                        accountId: e,
                        linkId: t.id,
                        name: `open_vgs_card_enrollment`,
                        args: {},
                        signal: r
                    });
                    if (w(r), i.isError || !i._meta?.vgs_collect_bootstrap) {
                        S(`unavailable`);
                        return
                    }
                    let a = await me(e, t.id, r, n?.context);
                    if (w(r), !a.html || !a.csp) {
                        S(`unavailable`);
                        return
                    }
                    v({
                        status: `ready`,
                        linkId: t.id,
                        result: i,
                        resource: a,
                        signal: r
                    })
                } catch (e) {
                    let t = e;
                    r.aborted || S(t instanceof te && t.status === 401 ? `changed` : `unavailable`)
                }
            })(), () => {
                t.abort(), i(), a()
            }
        }, j = [m, n, w, S], t[16] = m, t[17] = n, t[18] = w, t[19] = j, t[20] = M) : (j = t[19], M = t[20]), (0, O.useEffect)(M, j);
        let Ee;
        t[21] !== h || t[22] !== ee || t[23] !== c || t[24] !== n || t[25] !== w || t[26] !== _ ? (Ee = async () => {
            if (_.status !== `setup-required` || !h || p.current) return;
            p.current = !0;
            let {
                signal: e
            } = _;
            try {
                w(e), re(!0), await n?.check(e), w(e);
                let t = await ee(_e, {
                    accountId: h,
                    signal: e
                });
                w(e), await n?.check(e), w(e), t && c()
            } catch {
                e.aborted || S(`unavailable`)
            }
            p.current = !1, e.aborted || re(!1)
        }, t[21] = h, t[22] = ee, t[23] = c, t[24] = n, t[25] = w, t[26] = _, t[27] = Ee) : Ee = t[27];
        let De = Ee,
            N;
        t[28] === Symbol.for(`react.memo_cache_sentinel`) ? (N = () => {
            S(`changed`), window.location.reload()
        }, t[28] = N) : N = t[28];
        let Oe = N,
            P;
        t[29] === Symbol.for(`react.memo_cache_sentinel`) ? (P = () => {
            S(`changed`), oe({
                callbackUrl: window.location.href,
                entryIntent: `login`,
                fallbackScreenHint: `login`
            }).catch(() => S(`unavailable`))
        }, t[29] = P) : P = t[29];
        let ke = P;
        if (_.status !== `ready` || !h) {
            let e = _.status === `ready` ? `unavailable` : _.status,
                n = !r,
                i;
            t[30] === De ? i = t[31] : (i = () => void De(), t[30] = De, t[31] = i);
            let a;
            t[32] !== ne || t[33] !== e || t[34] !== n || t[35] !== i ? (a = (0, k.jsx)(be, {
                status: e,
                fullHeight: n,
                onRestart: Oe,
                onSignIn: ke,
                onConnect: i,
                connecting: ne
            }), t[32] = ne, t[33] = e, t[34] = n, t[35] = i, t[36] = a) : a = t[36];
            let o;
            return t[37] !== r || t[38] !== a ? (o = (0, k.jsx)(Se, {
                onClose: r,
                children: a
            }), t[37] = r, t[38] = a, t[39] = o) : o = t[39], o
        }
        let {
            resource: F,
            result: Ae,
            signal: I,
            linkId: je
        } = _, L;
        t[40] === F.csp?.connect_domains ? L = t[41] : (L = F.csp?.connect_domains ?? [], t[40] = F.csp?.connect_domains, t[41] = L);
        let R;
        t[42] === F.csp?.resource_domains ? R = t[43] : (R = F.csp?.resource_domains ?? [], t[42] = F.csp?.resource_domains, t[43] = R);
        let z;
        t[44] === F.csp?.frame_domains ? z = t[45] : (z = F.csp?.frame_domains ?? [], t[44] = F.csp?.frame_domains, t[45] = z);
        let Me;
        t[46] === Symbol.for(`react.memo_cache_sentinel`) ? (Me = [], t[46] = Me) : Me = t[46];
        let Ne;
        t[47] !== L || t[48] !== R || t[49] !== z ? (Ne = {
            isTrusted: !0,
            connectDomains: L,
            resourceDomains: R,
            frameDomains: z,
            baseUriDomains: Me
        }, t[47] = L, t[48] = R, t[49] = z, t[50] = Ne) : Ne = t[50];
        let B = Ne,
            V;
        t[51] !== b || t[52] !== n ? (V = n ? {
            height: b
        } : void 0, t[51] = b, t[52] = n, t[53] = V) : V = t[53];
        let H;
        t[54] === y ? H = t[55] : (H = !y && (0, k.jsx)(`div`, {
            className: `pointer-events-none absolute inset-0`,
            children: (0, k.jsx)(be, {
                status: `loading`
            })
        }), t[54] = y, t[55] = H);
        let Pe = F.html,
            Fe = u ?? `light`,
            U;
        t[56] === l ? U = t[57] : (U = l.formatMessage({
            id: `chatgpt.wallet.enrollment.form.title`,
            defaultMessage: `Secure card enrollment`
        }), t[56] = l, t[57] = U);
        let Ie = n != null,
            Le = F.domain ?? null,
            W;
        t[58] === Le ? W = t[59] : (W = le(Le), t[58] = Le, t[59] = W);
        let Re = Ae._meta ?? null,
            ze = Ae.structuredContent ?? null,
            Be = n ? `modal` : `fullscreen`,
            G;
        t[60] === n ? G = t[61] : (G = n ? {
            hidePageHeader: !0,
            suppressChatFollowUp: !0
        } : {
            walletBrowserEnrollment: !0
        }, t[60] = n, t[61] = G);
        let K;
        t[62] !== w || t[63] !== I ? (K = () => {
            try {
                w(I), de(!0)
            } catch {}
        }, t[62] = w, t[63] = I, t[64] = K) : K = t[64];
        let q;
        t[65] === I.aborted ? q = t[66] : (q = () => {
            I.aborted || S(`unavailable`)
        }, t[65] = I.aborted, t[66] = q);
        let J;
        t[67] !== n || t[68] !== I.aborted ? (J = e => {
            n && !I.aborted && Number.isFinite(e) && ve(Math.max(400, Math.ceil(e)))
        }, t[67] = n, t[68] = I.aborted, t[69] = J) : J = t[69];
        let Y;
        t[70] !== B || t[71] !== w || t[72] !== F.csp?.redirect_domains || t[73] !== F.domain || t[74] !== I ? (Y = e => {
            let {
                href: t
            } = e;
            return w(I), Ce({
                href: t,
                csp: B,
                redirectDomains: F.csp?.redirect_domains,
                resolvedPineappleUri: null,
                domain: F.domain ?? null,
                distributionChannel: ie.OPENAI,
                redirectUrl: null,
                openMode: `tab`,
                attributionId: _e,
                sectionLocation: `widget`,
                widgetName: `wallet-vgs-card-enrollment`
            })
        }, t[70] = B, t[71] = w, t[72] = F.csp?.redirect_domains, t[73] = F.domain, t[74] = I, t[75] = Y) : Y = t[75];
        let X;
        t[76] !== h || t[77] !== l || t[78] !== je || t[79] !== n?.callTool || t[80] !== w || t[81] !== I ? (X = async (e, t) => (w(I), await (n?.callTool ?? he)({
            accountId: h,
            linkId: je,
            name: e,
            args: t,
            signal: I
        }).then(e => (w(I), e)).catch(e => {
            throw !I.aborted && e instanceof te && e.status === 401 && S(`changed`), !I.aborted && e instanceof ye && S(`unavailable`), Error(l.formatMessage({
                id: `chatgpt.wallet.enrollment.form.request_error`,
                defaultMessage: `Wallet could not confirm this step. Try again.`
            }))
        })), t[76] = h, t[77] = l, t[78] = je, t[79] = n?.callTool, t[80] = w, t[81] = I, t[82] = X) : X = t[82];
        let Z;
        t[83] !== J || t[84] !== Y || t[85] !== X ? (Z = {
            notifyIntrinsicHeight: J,
            openExternal: Y,
            callTool: X
        }, t[83] = J, t[84] = Y, t[85] = X, t[86] = Z) : Z = t[86];
        let Q;
        t[87] !== h || t[88] !== B || t[89] !== l.locale || t[90] !== F.html || t[91] !== Fe || t[92] !== U || t[93] !== Ie || t[94] !== W || t[95] !== Re || t[96] !== ze || t[97] !== Be || t[98] !== G || t[99] !== K || t[100] !== q || t[101] !== Z ? (Q = (0, k.jsx)(we, {
            host: `chatgpt`,
            html: Pe,
            theme: Fe,
            accountId: h,
            title: U,
            attributionId: _e,
            widgetId: `wallet-hosted-enrollment`,
            widgetType: `wallet-vgs-card-enrollment`,
            widgetParent: null,
            widgetDistributionChannel: ie.OPENAI,
            measureWidth: Ie,
            subdomain: W,
            csp: B,
            toolResponseMetadata: Re,
            toolOutput: ze,
            locale: l.locale,
            displayMode: Be,
            viewParams: G,
            onReady: K,
            onError: q,
            api: Z
        }), t[87] = h, t[88] = B, t[89] = l.locale, t[90] = F.html, t[91] = Fe, t[92] = U, t[93] = Ie, t[94] = W, t[95] = Re, t[96] = ze, t[97] = Be, t[98] = G, t[99] = K, t[100] = q, t[101] = Z, t[102] = Q) : Q = t[102];
        let $;
        t[103] !== V || t[104] !== H || t[105] !== Q ? ($ = (0, k.jsxs)(`div`, {
            className: `relative h-full min-h-0 w-full shrink-0`,
            style: V,
            children: [H, Q]
        }), t[103] = V, t[104] = H, t[105] = Q, t[106] = $) : $ = t[106];
        let Ve;
        return t[107] !== r || t[108] !== $ ? (Ve = (0, k.jsx)(Se, {
            onClose: r,
            children: $
        }), t[107] = r, t[108] = $, t[109] = Ve) : Ve = t[109], Ve
    }
}));
export {
    M as n, C as r, A as t
};
//# sourceMappingURL=3660315a-gi7n27hk0h79ryiy.js.map