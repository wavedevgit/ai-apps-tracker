import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Bat as r,
    C4 as i,
    P5 as a,
    Pat as o,
    R1 as s,
    T4 as ee,
    Uj as c,
    Wj as l,
    _tt as u,
    bN as d,
    g8 as te,
    gtt as ne,
    hit as f,
    i0 as re,
    r0 as ie,
    vit as ae,
    w1 as p,
    wN as oe,
    x1 as m
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    Bn as se,
    Rn as h,
    Vn as g,
    wn as _,
    zn as ce
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Xut as v,
    Zut as le,
    iTn as y,
    rTn as ue
} from "./conversation-small-nmt18uiom3b14vca.js";
import {
    as as de,
    is as fe
} from "./8b34dbc2-ojcl97ddvu2212q0.js";
import {
    a as pe,
    c as me,
    i as he,
    n as ge,
    o as _e,
    r as ve,
    s as ye,
    t as be
} from "./1f58b914-j95nl1a2wef1k4e7.js";
import {
    n as xe,
    r as Se,
    t as Ce
} from "./ed7002b4-mhb4ru0mvxp1bju7.js";
import {
    i as b,
    n as x,
    r as we,
    t as Te
} from "./1c86a5ac-jc6sdmh39g815mqh.js";
var S = t({
    HostedWalletEnrollmentPage: () => k
});

function C() {
    return p()?.id
}

function w() {
    return m().isLoading
}

function T() {
    return p(), l(), _e()
}

function E(e) {
    return e + 1
}
var Ee, D, O, k, A, j = e((() => {
    Ee = _(), ge(), fe(), y(), u(), b(), x(), v(), te(), s(), ie(), f(), r(), i(), d(), c(), D = n(g()), h(), ye(), Se(), O = se(), k = e => {
        "use forget";
        let t = (0, Ee.c)(8),
            {
                request: n,
                onClose: r
            } = e,
            i = a(C),
            o = a(w),
            s = a(T),
            [ee, c] = (0, D.useState)(0),
            l;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (l = () => c(E), t[0] = l) : l = t[0];
        let u;
        return t[1] !== i || t[2] !== o || t[3] !== ee || t[4] !== s || t[5] !== r || t[6] !== n ? (u = (0, O.jsx)(A, {
            request: n,
            onClose: r,
            accountId: i,
            accountsLoading: o,
            identity: s,
            onConnected: l
        }, ee), t[1] = i, t[2] = o, t[3] = ee, t[4] = s, t[5] = r, t[6] = n, t[7] = u) : u = t[7], u
    }, A = e => {
        "use forget";
        let t = (0, Ee.c)(110),
            {
                request: n,
                onClose: r,
                accountId: i,
                accountsLoading: a,
                identity: s,
                onConnected: c
            } = e,
            l = ce(),
            u = oe(),
            d;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (d = {
            productSku: ue.CONNECTOR_SETTING,
            skipPostConnectExperience: !0
        }, t[0] = d) : d = t[0];
        let te = de(d),
            [f, ie] = (0, D.useState)(!1),
            p = (0, D.useRef)(!1),
            [m, se] = (0, D.useState)(null),
            h = m?.accountId,
            g;
        t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (g = {
            status: `loading`
        }, t[1] = g) : g = t[1];
        let [_, v] = (0, D.useState)(g), [y, fe] = (0, D.useState)(!1), [ge, ye] = (0, D.useState)(400), Se = (0, D.useRef)(null), b;
        t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (b = e => {
            Se.current?.abort(), v({
                status: e
            })
        }, t[2] = b) : b = t[2];
        let x = b,
            S;
        t[3] !== m?.accountId || t[4] !== m?.identity || t[5] !== n ? (S = e => {
            if (e.aborted) throw Error(`Wallet enrollment ended`);
            if (m?.identity !== _e() || n != null && n.accountId !== m?.accountId) throw x(`changed`), Error(`Wallet enrollment account changed`)
        }, t[3] = m?.accountId, t[4] = m?.identity, t[5] = n, t[6] = S) : S = t[6];
        let C = S,
            w, T;
        t[7] !== a || t[8] !== i || t[9] !== s ? (w = () => {
            a || se(e => e ?? {
                identity: s,
                accountId: i
            })
        }, T = [a, i, s], t[7] = a, t[8] = i, t[9] = s, t[10] = w, t[11] = T) : (w = t[10], T = t[11]), (0, D.useEffect)(w, T);
        let E, k;
        t[12] !== m || t[13] !== s ? (E = () => {
            m && m.identity !== s && x(`changed`)
        }, k = [m, s, x], t[12] = m, t[13] = s, t[14] = E, t[15] = k) : (E = t[14], k = t[15]), (0, D.useEffect)(E, k);
        let A, j;
        t[16] !== m || t[17] !== n || t[18] !== C ? (j = () => {
            if (!m) return;
            let e = m.accountId,
                t = new AbortController;
            Se.current = t;
            let {
                signal: r
            } = t, i = ae(() => x(`changed`)), a = ee(() => x(`changed`));
            return (async () => {
                try {
                    if (!e) {
                        x(`unavailable`);
                        return
                    }
                    C(r), await n?.check(r), C(r);
                    let t = await pe(e, r);
                    if (C(r), !t) {
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
                    if (C(r), i.isError || !i._meta?.vgs_collect_bootstrap) {
                        x(`unavailable`);
                        return
                    }
                    let a = await me(e, t.id, r, n?.context);
                    if (C(r), !a.html || !a.csp) {
                        x(`unavailable`);
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
                    r.aborted || x(t instanceof o && t.status === 401 ? `changed` : `unavailable`)
                }
            })(), () => {
                t.abort(), i(), a()
            }
        }, A = [m, n, C, x], t[16] = m, t[17] = n, t[18] = C, t[19] = A, t[20] = j) : (A = t[19], j = t[20]), (0, D.useEffect)(j, A);
        let M;
        t[21] !== h || t[22] !== te || t[23] !== c || t[24] !== n || t[25] !== C || t[26] !== _ ? (M = async () => {
            if (_.status !== `setup-required` || !h || p.current) return;
            p.current = !0;
            let {
                signal: e
            } = _;
            try {
                C(e), ie(!0), await n?.check(e), C(e);
                let t = await te(ve, {
                    accountId: h,
                    signal: e
                });
                C(e), await n?.check(e), C(e), t && c()
            } catch {
                e.aborted || x(`unavailable`)
            }
            p.current = !1, e.aborted || ie(!1)
        }, t[21] = h, t[22] = te, t[23] = c, t[24] = n, t[25] = C, t[26] = _, t[27] = M) : M = t[27];
        let De = M,
            N;
        t[28] === Symbol.for(`react.memo_cache_sentinel`) ? (N = () => {
            x(`changed`), window.location.reload()
        }, t[28] = N) : N = t[28];
        let Oe = N,
            ke;
        t[29] === Symbol.for(`react.memo_cache_sentinel`) ? (ke = () => {
            x(`changed`), re({
                callbackUrl: window.location.href,
                entryIntent: `login`,
                fallbackScreenHint: `login`
            }).catch(() => x(`unavailable`))
        }, t[29] = ke) : ke = t[29];
        let Ae = ke;
        if (_.status !== `ready` || !h) {
            let e = _.status === `ready` ? `unavailable` : _.status,
                n = !r,
                i;
            t[30] === De ? i = t[31] : (i = () => void De(), t[30] = De, t[31] = i);
            let a;
            t[32] !== f || t[33] !== e || t[34] !== n || t[35] !== i ? (a = (0, O.jsx)(xe, {
                status: e,
                fullHeight: n,
                onRestart: Oe,
                onSignIn: Ae,
                onConnect: i,
                connecting: f
            }), t[32] = f, t[33] = e, t[34] = n, t[35] = i, t[36] = a) : a = t[36];
            let o;
            return t[37] !== r || t[38] !== a ? (o = (0, O.jsx)(Ce, {
                onClose: r,
                children: a
            }), t[37] = r, t[38] = a, t[39] = o) : o = t[39], o
        }
        let {
            resource: P,
            result: je,
            signal: F,
            linkId: Me
        } = _, I;
        t[40] === P.csp?.connect_domains ? I = t[41] : (I = P.csp?.connect_domains ?? [], t[40] = P.csp?.connect_domains, t[41] = I);
        let L;
        t[42] === P.csp?.resource_domains ? L = t[43] : (L = P.csp?.resource_domains ?? [], t[42] = P.csp?.resource_domains, t[43] = L);
        let R;
        t[44] === P.csp?.frame_domains ? R = t[45] : (R = P.csp?.frame_domains ?? [], t[44] = P.csp?.frame_domains, t[45] = R);
        let Ne;
        t[46] === Symbol.for(`react.memo_cache_sentinel`) ? (Ne = [], t[46] = Ne) : Ne = t[46];
        let Pe;
        t[47] !== I || t[48] !== L || t[49] !== R ? (Pe = {
            isTrusted: !0,
            connectDomains: I,
            resourceDomains: L,
            frameDomains: R,
            baseUriDomains: Ne
        }, t[47] = I, t[48] = L, t[49] = R, t[50] = Pe) : Pe = t[50];
        let z = Pe,
            B;
        t[51] !== ge || t[52] !== n ? (B = n ? {
            height: ge
        } : void 0, t[51] = ge, t[52] = n, t[53] = B) : B = t[53];
        let V;
        t[54] === y ? V = t[55] : (V = !y && (0, O.jsx)(`div`, {
            className: `pointer-events-none absolute inset-0`,
            children: (0, O.jsx)(xe, {
                status: `loading`
            })
        }), t[54] = y, t[55] = V);
        let Fe = P.html,
            Ie = u ?? `light`,
            H;
        t[56] === l ? H = t[57] : (H = l.formatMessage({
            id: `chatgpt.wallet.enrollment.form.title`,
            defaultMessage: `Secure card enrollment`
        }), t[56] = l, t[57] = H);
        let Le = n != null,
            Re = P.domain ?? null,
            U;
        t[58] === Re ? U = t[59] : (U = le(Re), t[58] = Re, t[59] = U);
        let ze = je._meta ?? null,
            Be = je.structuredContent ?? null,
            Ve = n ? `modal` : `fullscreen`,
            W;
        t[60] === n ? W = t[61] : (W = n ? {
            hidePageHeader: !0,
            suppressChatFollowUp: !0
        } : {
            walletBrowserEnrollment: !0
        }, t[60] = n, t[61] = W);
        let G;
        t[62] !== C || t[63] !== F ? (G = () => {
            try {
                C(F), fe(!0)
            } catch {}
        }, t[62] = C, t[63] = F, t[64] = G) : G = t[64];
        let K;
        t[65] === F.aborted ? K = t[66] : (K = () => {
            F.aborted || x(`unavailable`)
        }, t[65] = F.aborted, t[66] = K);
        let q;
        t[67] !== n || t[68] !== F.aborted ? (q = e => {
            n && !F.aborted && Number.isFinite(e) && ye(Math.max(400, Math.ceil(e)))
        }, t[67] = n, t[68] = F.aborted, t[69] = q) : q = t[69];
        let J;
        t[70] !== z || t[71] !== C || t[72] !== P.csp?.redirect_domains || t[73] !== P.domain || t[74] !== F ? (J = e => {
            let {
                href: t
            } = e;
            return C(F), we({
                href: t,
                csp: z,
                redirectDomains: P.csp?.redirect_domains,
                resolvedPineappleUri: null,
                domain: P.domain ?? null,
                distributionChannel: ne.OPENAI,
                redirectUrl: null,
                openMode: `tab`,
                attributionId: ve,
                sectionLocation: `widget`,
                widgetName: `wallet-vgs-card-enrollment`
            })
        }, t[70] = z, t[71] = C, t[72] = P.csp?.redirect_domains, t[73] = P.domain, t[74] = F, t[75] = J) : J = t[75];
        let Y;
        t[76] !== h || t[77] !== l || t[78] !== Me || t[79] !== n?.callTool || t[80] !== C || t[81] !== F ? (Y = async (e, t) => (C(F), await (n?.callTool ?? he)({
            accountId: h,
            linkId: Me,
            name: e,
            args: t,
            signal: F
        }).then(e => (C(F), e)).catch(e => {
            throw !F.aborted && e instanceof o && e.status === 401 && x(`changed`), !F.aborted && e instanceof be && x(`unavailable`), Error(l.formatMessage({
                id: `chatgpt.wallet.enrollment.form.request_error`,
                defaultMessage: `Wallet could not confirm this step. Try again.`
            }))
        })), t[76] = h, t[77] = l, t[78] = Me, t[79] = n?.callTool, t[80] = C, t[81] = F, t[82] = Y) : Y = t[82];
        let X;
        t[83] !== q || t[84] !== J || t[85] !== Y ? (X = {
            notifyIntrinsicHeight: q,
            openExternal: J,
            callTool: Y
        }, t[83] = q, t[84] = J, t[85] = Y, t[86] = X) : X = t[86];
        let Z;
        t[87] !== h || t[88] !== z || t[89] !== l.locale || t[90] !== P.html || t[91] !== Ie || t[92] !== H || t[93] !== Le || t[94] !== U || t[95] !== ze || t[96] !== Be || t[97] !== Ve || t[98] !== W || t[99] !== G || t[100] !== K || t[101] !== X ? (Z = (0, O.jsx)(Te, {
            host: `chatgpt`,
            html: Fe,
            theme: Ie,
            accountId: h,
            title: H,
            attributionId: ve,
            widgetId: `wallet-hosted-enrollment`,
            widgetType: `wallet-vgs-card-enrollment`,
            widgetParent: null,
            widgetDistributionChannel: ne.OPENAI,
            measureWidth: Le,
            subdomain: U,
            csp: z,
            toolResponseMetadata: ze,
            toolOutput: Be,
            locale: l.locale,
            displayMode: Ve,
            viewParams: W,
            onReady: G,
            onError: K,
            api: X
        }), t[87] = h, t[88] = z, t[89] = l.locale, t[90] = P.html, t[91] = Ie, t[92] = H, t[93] = Le, t[94] = U, t[95] = ze, t[96] = Be, t[97] = Ve, t[98] = W, t[99] = G, t[100] = K, t[101] = X, t[102] = Z) : Z = t[102];
        let Q;
        t[103] !== B || t[104] !== V || t[105] !== Z ? (Q = (0, O.jsxs)(`div`, {
            className: `relative h-full min-h-0 w-full shrink-0`,
            style: B,
            children: [V, Z]
        }), t[103] = B, t[104] = V, t[105] = Z, t[106] = Q) : Q = t[106];
        let $;
        return t[107] !== r || t[108] !== Q ? ($ = (0, O.jsx)(Ce, {
            onClose: r,
            children: Q
        }), t[107] = r, t[108] = Q, t[109] = $) : $ = t[109], $
    }
}));
export {
    j as n, S as r, k as t
};
//# sourceMappingURL=3660315a-hmkic0mjhnmvtwc9.js.map