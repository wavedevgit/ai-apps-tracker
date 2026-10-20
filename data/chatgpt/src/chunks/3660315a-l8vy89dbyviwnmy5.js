import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    C1 as r,
    CN as i,
    Fat as a,
    Hj as o,
    L1 as s,
    N5 as c,
    S4 as l,
    Uj as u,
    b1 as d,
    gtt as f,
    h8 as ee,
    htt as te,
    kat as ne,
    n0 as re,
    pit as ie,
    r0 as ae,
    uit as oe,
    w4 as se,
    yN as p
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    Bn as ce,
    Rn as m,
    Vn as h,
    wn as g,
    zn as le
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Jut as ue,
    eTn as de,
    qut as _,
    tTn as v
} from "./conversation-small-cy5f8pl0g26s86so.js";
import {
    as as fe,
    is as pe
} from "./8b34dbc2-k1zgxrtsww83602u.js";
import {
    a as me,
    c as he,
    i as ge,
    n as _e,
    o as ve,
    r as ye,
    s as be,
    t as xe
} from "./1f58b914-kilh8gz9z9y7aer3.js";
import {
    n as Se,
    r as Ce,
    t as we
} from "./ed7002b4-fz2qm7jupxkn6dx2.js";
import {
    i as y,
    n as b,
    r as Te,
    t as Ee
} from "./1c86a5ac-dcq271bjcu1g9eui.js";
var x = t({
    HostedWalletEnrollmentPage: () => O
});

function S() {
    return r()?.id
}

function C() {
    return d().isLoading
}

function w() {
    return r(), u(), ve()
}

function T(e) {
    return e + 1
}
var De, E, D, O, k, A = e((() => {
    De = g(), _e(), pe(), v(), f(), y(), b(), _(), ee(), s(), re(), oe(), a(), l(), p(), o(), E = n(h()), m(), be(), Ce(), D = ce(), O = e => {
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
                onClose: r,
                accountId: a,
                accountsLoading: o,
                identity: s,
                onConnected: c
            } = e,
            l = le(),
            u = i(),
            d;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (d = {
            productSku: de.CONNECTOR_SETTING,
            skipPostConnectExperience: !0
        }, t[0] = d) : d = t[0];
        let f = fe(d),
            [ee, re] = (0, E.useState)(!1),
            oe = (0, E.useRef)(!1),
            [p, ce] = (0, E.useState)(null),
            m = p?.accountId,
            h;
        t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (h = {
            status: `loading`
        }, t[1] = h) : h = t[1];
        let [g, _] = (0, E.useState)(h), [v, pe] = (0, E.useState)(!1), [_e, be] = (0, E.useState)(400), Ce = (0, E.useRef)(null), y;
        t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (y = e => {
            Ce.current?.abort(), _({
                status: e
            })
        }, t[2] = y) : y = t[2];
        let b = y,
            x;
        t[3] !== p?.accountId || t[4] !== p?.identity || t[5] !== n ? (x = e => {
            if (e.aborted) throw Error(`Wallet enrollment ended`);
            if (p?.identity !== ve() || n != null && n.accountId !== p?.accountId) throw b(`changed`), Error(`Wallet enrollment account changed`)
        }, t[3] = p?.accountId, t[4] = p?.identity, t[5] = n, t[6] = x) : x = t[6];
        let S = x,
            C, w;
        t[7] !== o || t[8] !== a || t[9] !== s ? (C = () => {
            o || ce(e => e ?? {
                identity: s,
                accountId: a
            })
        }, w = [o, a, s], t[7] = o, t[8] = a, t[9] = s, t[10] = C, t[11] = w) : (C = t[10], w = t[11]), (0, E.useEffect)(C, w);
        let T, O;
        t[12] !== p || t[13] !== s ? (T = () => {
            p && p.identity !== s && b(`changed`)
        }, O = [p, s, b], t[12] = p, t[13] = s, t[14] = T, t[15] = O) : (T = t[14], O = t[15]), (0, E.useEffect)(T, O);
        let k, A;
        t[16] !== p || t[17] !== n || t[18] !== S ? (A = () => {
            if (!p) return;
            let e = p.accountId,
                t = new AbortController;
            Ce.current = t;
            let {
                signal: r
            } = t, i = ie(() => b(`changed`)), a = se(() => b(`changed`));
            return (async () => {
                try {
                    if (!e) {
                        b(`unavailable`);
                        return
                    }
                    S(r), await n?.check(r), S(r);
                    let t = await me(e, r);
                    if (S(r), !t) {
                        _({
                            status: `setup-required`,
                            signal: r
                        });
                        return
                    }
                    let i = await (n?.callTool ?? ge)({
                        accountId: e,
                        linkId: t.id,
                        name: `open_vgs_card_enrollment`,
                        args: {},
                        signal: r
                    });
                    if (S(r), i.isError || !i._meta?.vgs_collect_bootstrap) {
                        b(`unavailable`);
                        return
                    }
                    let a = await he(e, t.id, r, n?.context);
                    if (S(r), !a.html || !a.csp) {
                        b(`unavailable`);
                        return
                    }
                    _({
                        status: `ready`,
                        linkId: t.id,
                        result: i,
                        resource: a,
                        signal: r
                    })
                } catch (e) {
                    let t = e;
                    r.aborted || b(t instanceof ne && t.status === 401 ? `changed` : `unavailable`)
                }
            })(), () => {
                t.abort(), i(), a()
            }
        }, k = [p, n, S, b], t[16] = p, t[17] = n, t[18] = S, t[19] = k, t[20] = A) : (k = t[19], A = t[20]), (0, E.useEffect)(A, k);
        let j;
        t[21] !== m || t[22] !== f || t[23] !== c || t[24] !== n || t[25] !== S || t[26] !== g ? (j = async () => {
            if (g.status !== `setup-required` || !m || oe.current) return;
            oe.current = !0;
            let {
                signal: e
            } = g;
            try {
                S(e), re(!0), await n?.check(e), S(e);
                let t = await f(ye, {
                    accountId: m,
                    signal: e
                });
                S(e), await n?.check(e), S(e), t && c()
            } catch {
                e.aborted || b(`unavailable`)
            }
            oe.current = !1, e.aborted || re(!1)
        }, t[21] = m, t[22] = f, t[23] = c, t[24] = n, t[25] = S, t[26] = g, t[27] = j) : j = t[27];
        let Oe = j,
            M;
        t[28] === Symbol.for(`react.memo_cache_sentinel`) ? (M = () => {
            b(`changed`), window.location.reload()
        }, t[28] = M) : M = t[28];
        let ke = M,
            N;
        t[29] === Symbol.for(`react.memo_cache_sentinel`) ? (N = () => {
            b(`changed`), ae({
                callbackUrl: window.location.href,
                entryIntent: `login`,
                fallbackScreenHint: `login`
            }).catch(() => b(`unavailable`))
        }, t[29] = N) : N = t[29];
        let Ae = N;
        if (g.status !== `ready` || !m) {
            let e = g.status === `ready` ? `unavailable` : g.status,
                n = !r,
                i;
            t[30] === Oe ? i = t[31] : (i = () => void Oe(), t[30] = Oe, t[31] = i);
            let a;
            t[32] !== ee || t[33] !== e || t[34] !== n || t[35] !== i ? (a = (0, D.jsx)(Se, {
                status: e,
                fullHeight: n,
                onRestart: ke,
                onSignIn: Ae,
                onConnect: i,
                connecting: ee
            }), t[32] = ee, t[33] = e, t[34] = n, t[35] = i, t[36] = a) : a = t[36];
            let o;
            return t[37] !== r || t[38] !== a ? (o = (0, D.jsx)(we, {
                onClose: r,
                children: a
            }), t[37] = r, t[38] = a, t[39] = o) : o = t[39], o
        }
        let {
            resource: P,
            result: je,
            signal: F,
            linkId: Me
        } = g, I;
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
            Ie = u ?? `light`,
            H;
        t[56] === l ? H = t[57] : (H = l.formatMessage({
            id: `chatgpt.wallet.enrollment.form.title`,
            defaultMessage: `Secure card enrollment`
        }), t[56] = l, t[57] = H);
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
                distributionChannel: te.OPENAI,
                redirectUrl: null,
                openMode: `tab`,
                attributionId: ye,
                sectionLocation: `widget`,
                widgetName: `wallet-vgs-card-enrollment`
            })
        }, t[70] = z, t[71] = S, t[72] = P.csp?.redirect_domains, t[73] = P.domain, t[74] = F, t[75] = J) : J = t[75];
        let Y;
        t[76] !== m || t[77] !== l || t[78] !== Me || t[79] !== n?.callTool || t[80] !== S || t[81] !== F ? (Y = async (e, t) => (S(F), await (n?.callTool ?? ge)({
            accountId: m,
            linkId: Me,
            name: e,
            args: t,
            signal: F
        }).then(e => (S(F), e)).catch(e => {
            throw !F.aborted && e instanceof ne && e.status === 401 && b(`changed`), !F.aborted && e instanceof xe && b(`unavailable`), Error(l.formatMessage({
                id: `chatgpt.wallet.enrollment.form.request_error`,
                defaultMessage: `Wallet could not confirm this step. Try again.`
            }))
        })), t[76] = m, t[77] = l, t[78] = Me, t[79] = n?.callTool, t[80] = S, t[81] = F, t[82] = Y) : Y = t[82];
        let X;
        t[83] !== q || t[84] !== J || t[85] !== Y ? (X = {
            notifyIntrinsicHeight: q,
            openExternal: J,
            callTool: Y
        }, t[83] = q, t[84] = J, t[85] = Y, t[86] = X) : X = t[86];
        let Z;
        t[87] !== m || t[88] !== z || t[89] !== l.locale || t[90] !== P.html || t[91] !== Ie || t[92] !== H || t[93] !== Le || t[94] !== U || t[95] !== ze || t[96] !== Be || t[97] !== Ve || t[98] !== W || t[99] !== G || t[100] !== K || t[101] !== X ? (Z = (0, D.jsx)(Ee, {
            host: `chatgpt`,
            html: Fe,
            theme: Ie,
            accountId: m,
            title: H,
            attributionId: ye,
            widgetId: `wallet-hosted-enrollment`,
            widgetType: `wallet-vgs-card-enrollment`,
            widgetParent: null,
            widgetDistributionChannel: te.OPENAI,
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
        }), t[87] = m, t[88] = z, t[89] = l.locale, t[90] = P.html, t[91] = Ie, t[92] = H, t[93] = Le, t[94] = U, t[95] = ze, t[96] = Be, t[97] = Ve, t[98] = W, t[99] = G, t[100] = K, t[101] = X, t[102] = Z) : Z = t[102];
        let Q;
        t[103] !== B || t[104] !== V || t[105] !== Z ? (Q = (0, D.jsxs)(`div`, {
            className: `relative h-full min-h-0 w-full shrink-0`,
            style: B,
            children: [V, Z]
        }), t[103] = B, t[104] = V, t[105] = Z, t[106] = Q) : Q = t[106];
        let $;
        return t[107] !== r || t[108] !== Q ? ($ = (0, D.jsx)(we, {
            onClose: r,
            children: Q
        }), t[107] = r, t[108] = Q, t[109] = $) : $ = t[109], $
    }
}));
export {
    A as n, x as r, O as t
};
//# sourceMappingURL=3660315a-l8vy89dbyviwnmy5.js.map