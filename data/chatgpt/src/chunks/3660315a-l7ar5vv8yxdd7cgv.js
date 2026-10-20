import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    C4 as r,
    CN as i,
    Dat as a,
    Hj as o,
    I1 as s,
    M5 as c,
    Nat as l,
    S1 as u,
    Uj as d,
    b1 as ee,
    cit as f,
    dit as te,
    m8 as ne,
    mtt as re,
    n0 as ie,
    ptt as ae,
    t0 as oe,
    x4 as p,
    yN as m
} from "./4813494d-qsuygr73qjc6rh65.js";
import {
    Bn as se,
    Hn as ce,
    Tn as h,
    Vn as g,
    zn as _
} from "./2340486e-komxp8tzs51ny4jj.js";
import {
    Gut as le,
    Kut as ue,
    aTn as v,
    iTn as de
} from "./conversation-small-cawdu7il3ha6y70c.js";
import {
    as as fe,
    is as pe
} from "./8b34dbc2-d4icgkio4i3wfm6q.js";
import {
    a as me,
    c as he,
    i as ge,
    n as _e,
    o as ve,
    r as ye,
    s as be,
    t as xe
} from "./1f58b914-bgvg7ujh3t0jtjp7.js";
import {
    n as Se,
    r as Ce,
    t as we
} from "./ed7002b4-0qn6zsybhqrdygzq.js";
import {
    i as y,
    n as b,
    r as Te,
    t as Ee
} from "./1c86a5ac-mgxjsuxkopk8yts6.js";
var x = t({
    HostedWalletEnrollmentPage: () => O
});

function S() {
    return u()?.id
}

function C() {
    return ee().isLoading
}

function w() {
    return u(), d(), ve()
}

function T(e) {
    return e + 1
}
var De, E, D, O, k, A = e((() => {
    De = h(), _e(), pe(), v(), re(), y(), b(), le(), ne(), s(), oe(), f(), l(), p(), m(), o(), E = n(ce()), _(), be(), Ce(), D = g(), O = e => {
        "use forget";
        let t = (0, De.c)(8),
            {
                request: n,
                onClose: r
            } = e,
            i = c(S),
            a = c(C),
            o = c(w),
            [s, l] = (0, E.useState)(0),
            u;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (u = () => l(T), t[0] = u) : u = t[0];
        let d;
        return t[1] !== i || t[2] !== a || t[3] !== s || t[4] !== o || t[5] !== r || t[6] !== n ? (d = (0, D.jsx)(k, {
            request: n,
            onClose: r,
            accountId: i,
            accountsLoading: a,
            identity: o,
            onConnected: u
        }, s), t[1] = i, t[2] = a, t[3] = s, t[4] = o, t[5] = r, t[6] = n, t[7] = d) : d = t[7], d
    }, k = e => {
        "use forget";
        let t = (0, De.c)(110),
            {
                request: n,
                onClose: o,
                accountId: s,
                accountsLoading: c,
                identity: l,
                onConnected: u
            } = e,
            d = se(),
            ee = i(),
            f;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (f = {
            productSku: de.CONNECTOR_SETTING,
            skipPostConnectExperience: !0
        }, t[0] = f) : f = t[0];
        let ne = fe(f),
            [re, oe] = (0, E.useState)(!1),
            p = (0, E.useRef)(!1),
            [m, ce] = (0, E.useState)(null),
            h = m?.accountId,
            g;
        t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (g = {
            status: `loading`
        }, t[1] = g) : g = t[1];
        let [_, le] = (0, E.useState)(g), [v, pe] = (0, E.useState)(!1), [_e, be] = (0, E.useState)(400), Ce = (0, E.useRef)(null), y;
        t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (y = e => {
            Ce.current?.abort(), le({
                status: e
            })
        }, t[2] = y) : y = t[2];
        let b = y,
            x;
        t[3] !== m?.accountId || t[4] !== m?.identity || t[5] !== n ? (x = e => {
            if (e.aborted) throw Error(`Wallet enrollment ended`);
            if (m?.identity !== ve() || n != null && n.accountId !== m?.accountId) throw b(`changed`), Error(`Wallet enrollment account changed`)
        }, t[3] = m?.accountId, t[4] = m?.identity, t[5] = n, t[6] = x) : x = t[6];
        let S = x,
            C, w;
        t[7] !== c || t[8] !== s || t[9] !== l ? (C = () => {
            c || ce(e => e ?? {
                identity: l,
                accountId: s
            })
        }, w = [c, s, l], t[7] = c, t[8] = s, t[9] = l, t[10] = C, t[11] = w) : (C = t[10], w = t[11]), (0, E.useEffect)(C, w);
        let T, O;
        t[12] !== m || t[13] !== l ? (T = () => {
            m && m.identity !== l && b(`changed`)
        }, O = [m, l, b], t[12] = m, t[13] = l, t[14] = T, t[15] = O) : (T = t[14], O = t[15]), (0, E.useEffect)(T, O);
        let k, A;
        t[16] !== m || t[17] !== n || t[18] !== S ? (A = () => {
            if (!m) return;
            let e = m.accountId,
                t = new AbortController;
            Ce.current = t;
            let {
                signal: i
            } = t, o = te(() => b(`changed`)), s = r(() => b(`changed`));
            return (async () => {
                try {
                    if (!e) {
                        b(`unavailable`);
                        return
                    }
                    S(i), await n?.check(i), S(i);
                    let t = await me(e, i);
                    if (S(i), !t) {
                        le({
                            status: `setup-required`,
                            signal: i
                        });
                        return
                    }
                    let r = await (n?.callTool ?? ge)({
                        accountId: e,
                        linkId: t.id,
                        name: `open_vgs_card_enrollment`,
                        args: {},
                        signal: i
                    });
                    if (S(i), r.isError || !r._meta?.vgs_collect_bootstrap) {
                        b(`unavailable`);
                        return
                    }
                    let a = await he(e, t.id, i, n?.context);
                    if (S(i), !a.html || !a.csp) {
                        b(`unavailable`);
                        return
                    }
                    le({
                        status: `ready`,
                        linkId: t.id,
                        result: r,
                        resource: a,
                        signal: i
                    })
                } catch (e) {
                    let t = e;
                    i.aborted || b(t instanceof a && t.status === 401 ? `changed` : `unavailable`)
                }
            })(), () => {
                t.abort(), o(), s()
            }
        }, k = [m, n, S, b], t[16] = m, t[17] = n, t[18] = S, t[19] = k, t[20] = A) : (k = t[19], A = t[20]), (0, E.useEffect)(A, k);
        let j;
        t[21] !== h || t[22] !== ne || t[23] !== u || t[24] !== n || t[25] !== S || t[26] !== _ ? (j = async () => {
            if (_.status !== `setup-required` || !h || p.current) return;
            p.current = !0;
            let {
                signal: e
            } = _;
            try {
                S(e), oe(!0), await n?.check(e), S(e);
                let t = await ne(ye, {
                    accountId: h,
                    signal: e
                });
                S(e), await n?.check(e), S(e), t && u()
            } catch {
                e.aborted || b(`unavailable`)
            }
            p.current = !1, e.aborted || oe(!1)
        }, t[21] = h, t[22] = ne, t[23] = u, t[24] = n, t[25] = S, t[26] = _, t[27] = j) : j = t[27];
        let Oe = j,
            M;
        t[28] === Symbol.for(`react.memo_cache_sentinel`) ? (M = () => {
            b(`changed`), window.location.reload()
        }, t[28] = M) : M = t[28];
        let ke = M,
            N;
        t[29] === Symbol.for(`react.memo_cache_sentinel`) ? (N = () => {
            b(`changed`), ie({
                callbackUrl: window.location.href,
                entryIntent: `login`,
                fallbackScreenHint: `login`
            }).catch(() => b(`unavailable`))
        }, t[29] = N) : N = t[29];
        let Ae = N;
        if (_.status !== `ready` || !h) {
            let e = _.status === `ready` ? `unavailable` : _.status,
                n = !o,
                r;
            t[30] === Oe ? r = t[31] : (r = () => void Oe(), t[30] = Oe, t[31] = r);
            let i;
            t[32] !== re || t[33] !== e || t[34] !== n || t[35] !== r ? (i = (0, D.jsx)(Se, {
                status: e,
                fullHeight: n,
                onRestart: ke,
                onSignIn: Ae,
                onConnect: r,
                connecting: re
            }), t[32] = re, t[33] = e, t[34] = n, t[35] = r, t[36] = i) : i = t[36];
            let a;
            return t[37] !== o || t[38] !== i ? (a = (0, D.jsx)(we, {
                onClose: o,
                children: i
            }), t[37] = o, t[38] = i, t[39] = a) : a = t[39], a
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
        t[51] !== _e || t[52] !== n ? (B = n ? {
            height: _e
        } : void 0, t[51] = _e, t[52] = n, t[53] = B) : B = t[53];
        let V;
        t[54] === v ? V = t[55] : (V = !v && (0, D.jsx)(`div`, {
            className: `pointer-events-none absolute inset-0`,
            children: (0, D.jsx)(Se, {
                status: `loading`
            })
        }), t[54] = v, t[55] = V);
        let Fe = P.html,
            Ie = ee ?? `light`,
            H;
        t[56] === d ? H = t[57] : (H = d.formatMessage({
            id: `chatgpt.wallet.enrollment.form.title`,
            defaultMessage: `Secure card enrollment`
        }), t[56] = d, t[57] = H);
        let Le = n != null,
            Re = P.domain ?? null,
            U;
        t[58] === Re ? U = t[59] : (U = ue(Re), t[58] = Re, t[59] = U);
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
        t[62] !== S || t[63] !== F ? (G = () => {
            try {
                S(F), pe(!0)
            } catch {}
        }, t[62] = S, t[63] = F, t[64] = G) : G = t[64];
        let K;
        t[65] === F.aborted ? K = t[66] : (K = () => {
            F.aborted || b(`unavailable`)
        }, t[65] = F.aborted, t[66] = K);
        let q;
        t[67] !== n || t[68] !== F.aborted ? (q = e => {
            n && !F.aborted && Number.isFinite(e) && be(Math.max(400, Math.ceil(e)))
        }, t[67] = n, t[68] = F.aborted, t[69] = q) : q = t[69];
        let J;
        t[70] !== z || t[71] !== S || t[72] !== P.csp?.redirect_domains || t[73] !== P.domain || t[74] !== F ? (J = e => {
            let {
                href: t
            } = e;
            return S(F), Te({
                href: t,
                csp: z,
                redirectDomains: P.csp?.redirect_domains,
                resolvedPineappleUri: null,
                domain: P.domain ?? null,
                distributionChannel: ae.OPENAI,
                redirectUrl: null,
                openMode: `tab`,
                attributionId: ye,
                sectionLocation: `widget`,
                widgetName: `wallet-vgs-card-enrollment`
            })
        }, t[70] = z, t[71] = S, t[72] = P.csp?.redirect_domains, t[73] = P.domain, t[74] = F, t[75] = J) : J = t[75];
        let Y;
        t[76] !== h || t[77] !== d || t[78] !== Me || t[79] !== n?.callTool || t[80] !== S || t[81] !== F ? (Y = async (e, t) => (S(F), await (n?.callTool ?? ge)({
            accountId: h,
            linkId: Me,
            name: e,
            args: t,
            signal: F
        }).then(e => (S(F), e)).catch(e => {
            throw !F.aborted && e instanceof a && e.status === 401 && b(`changed`), !F.aborted && e instanceof xe && b(`unavailable`), Error(d.formatMessage({
                id: `chatgpt.wallet.enrollment.form.request_error`,
                defaultMessage: `Wallet could not confirm this step. Try again.`
            }))
        })), t[76] = h, t[77] = d, t[78] = Me, t[79] = n?.callTool, t[80] = S, t[81] = F, t[82] = Y) : Y = t[82];
        let X;
        t[83] !== q || t[84] !== J || t[85] !== Y ? (X = {
            notifyIntrinsicHeight: q,
            openExternal: J,
            callTool: Y
        }, t[83] = q, t[84] = J, t[85] = Y, t[86] = X) : X = t[86];
        let Z;
        t[87] !== h || t[88] !== z || t[89] !== d.locale || t[90] !== P.html || t[91] !== Ie || t[92] !== H || t[93] !== Le || t[94] !== U || t[95] !== ze || t[96] !== Be || t[97] !== Ve || t[98] !== W || t[99] !== G || t[100] !== K || t[101] !== X ? (Z = (0, D.jsx)(Ee, {
            host: `chatgpt`,
            html: Fe,
            theme: Ie,
            accountId: h,
            title: H,
            attributionId: ye,
            widgetId: `wallet-hosted-enrollment`,
            widgetType: `wallet-vgs-card-enrollment`,
            widgetParent: null,
            widgetDistributionChannel: ae.OPENAI,
            measureWidth: Le,
            subdomain: U,
            csp: z,
            toolResponseMetadata: ze,
            toolOutput: Be,
            locale: d.locale,
            displayMode: Ve,
            viewParams: W,
            onReady: G,
            onError: K,
            api: X
        }), t[87] = h, t[88] = z, t[89] = d.locale, t[90] = P.html, t[91] = Ie, t[92] = H, t[93] = Le, t[94] = U, t[95] = ze, t[96] = Be, t[97] = Ve, t[98] = W, t[99] = G, t[100] = K, t[101] = X, t[102] = Z) : Z = t[102];
        let Q;
        t[103] !== B || t[104] !== V || t[105] !== Z ? (Q = (0, D.jsxs)(`div`, {
            className: `relative h-full min-h-0 w-full shrink-0`,
            style: B,
            children: [V, Z]
        }), t[103] = B, t[104] = V, t[105] = Z, t[106] = Q) : Q = t[106];
        let $;
        return t[107] !== o || t[108] !== Q ? ($ = (0, D.jsx)(we, {
            onClose: o,
            children: Q
        }), t[107] = o, t[108] = Q, t[109] = $) : $ = t[109], $
    }
}));
export {
    A as n, x as r, O as t
};
//# sourceMappingURL=3660315a-l7ar5vv8yxdd7cgv.js.map