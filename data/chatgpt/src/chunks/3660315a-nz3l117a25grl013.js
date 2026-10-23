import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as r,
    A8 as i,
    Bit as a,
    I4 as o,
    Jj as s,
    Lit as c,
    N1 as l,
    P4 as u,
    TN as ee,
    Yj as d,
    cot as te,
    f0 as ne,
    gtt as re,
    htt as ie,
    j5 as f,
    kN as ae,
    not as oe,
    p0 as se,
    q1 as p
} from "./4813494d-mdvd4786a87166cc.js";
import {
    Bn as ce,
    Rn as m,
    Vn as h,
    wn as g,
    zn as le
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    Hut as ue,
    RTn as de,
    Vut as fe,
    zTn as _
} from "./conversation-small-bcbq46iub1p0ca1t.js";
import {
    as as pe,
    os as me
} from "./8b34dbc2-lmwubajnld74ksfm.js";
import {
    a as he,
    c as ge,
    i as _e,
    n as v,
    o as ve,
    r as ye,
    s as be,
    t as xe
} from "./1f58b914-gktrj52rzq71wrdt.js";
import {
    n as Se,
    r as Ce,
    t as we
} from "./ed7002b4-ibmm51u7b9drtmxa.js";
import {
    i as y,
    n as b,
    r as Te,
    t as Ee
} from "./1c86a5ac-lb07v6ixov4iwl90.js";
var x = t({
    HostedWalletEnrollmentPage: () => O
});

function S() {
    return l()?.id
}

function C() {
    return r().isLoading
}

function w() {
    return l(), d(), ve()
}

function T(e) {
    return e + 1
}
var De, E, D, O, k, A = e((() => {
    De = g(), v(), pe(), _(), re(), y(), b(), fe(), i(), p(), ne(), c(), te(), u(), ee(), s(), E = n(h()), m(), be(), Ce(), D = ce(), O = e => {
        "use forget";
        let t = (0, De.c)(8),
            {
                request: n,
                onClose: r
            } = e,
            i = f(S),
            a = f(C),
            o = f(w),
            [s, c] = (0, E.useState)(0),
            l;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (l = () => c(T), t[0] = l) : l = t[0];
        let u;
        return t[1] !== i || t[2] !== a || t[3] !== s || t[4] !== o || t[5] !== r || t[6] !== n ? (u = (0, D.jsx)(k, {
            request: n,
            onClose: r,
            accountId: i,
            accountsLoading: a,
            identity: o,
            onConnected: l
        }, s), t[1] = i, t[2] = a, t[3] = s, t[4] = o, t[5] = r, t[6] = n, t[7] = u) : u = t[7], u
    }, k = e => {
        "use forget";
        let t = (0, De.c)(110),
            {
                request: n,
                onClose: r,
                accountId: i,
                accountsLoading: s,
                identity: c,
                onConnected: l
            } = e,
            u = le(),
            ee = ae(),
            d;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (d = {
            productSku: de.CONNECTOR_SETTING,
            skipPostConnectExperience: !0
        }, t[0] = d) : d = t[0];
        let te = me(d),
            [ne, re] = (0, E.useState)(!1),
            f = (0, E.useRef)(!1),
            [p, ce] = (0, E.useState)(null),
            m = p?.accountId,
            h;
        t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (h = {
            status: `loading`
        }, t[1] = h) : h = t[1];
        let [g, fe] = (0, E.useState)(h), [_, pe] = (0, E.useState)(!1), [v, be] = (0, E.useState)(400), Ce = (0, E.useRef)(null), y;
        t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (y = e => {
            Ce.current?.abort(), fe({
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
        t[7] !== s || t[8] !== i || t[9] !== c ? (C = () => {
            s || ce(e => e ?? {
                identity: c,
                accountId: i
            })
        }, w = [s, i, c], t[7] = s, t[8] = i, t[9] = c, t[10] = C, t[11] = w) : (C = t[10], w = t[11]), (0, E.useEffect)(C, w);
        let T, O;
        t[12] !== p || t[13] !== c ? (T = () => {
            p && p.identity !== c && b(`changed`)
        }, O = [p, c, b], t[12] = p, t[13] = c, t[14] = T, t[15] = O) : (T = t[14], O = t[15]), (0, E.useEffect)(T, O);
        let k, A;
        t[16] !== p || t[17] !== n || t[18] !== S ? (A = () => {
            if (!p) return;
            let e = p.accountId,
                t = new AbortController;
            Ce.current = t;
            let {
                signal: r
            } = t, i = a(() => b(`changed`)), s = o(() => b(`changed`));
            return (async () => {
                try {
                    if (!e) {
                        b(`unavailable`);
                        return
                    }
                    S(r), await n?.check(r), S(r);
                    let t = await he(e, r);
                    if (S(r), !t) {
                        fe({
                            status: `setup-required`,
                            signal: r
                        });
                        return
                    }
                    let i = await (n?.callTool ?? _e)({
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
                    let a = await ge(e, t.id, r, n?.context);
                    if (S(r), !a.html || !a.csp) {
                        b(`unavailable`);
                        return
                    }
                    fe({
                        status: `ready`,
                        linkId: t.id,
                        result: i,
                        resource: a,
                        signal: r
                    })
                } catch (e) {
                    let t = e;
                    r.aborted || b(t instanceof oe && t.status === 401 ? `changed` : `unavailable`)
                }
            })(), () => {
                t.abort(), i(), s()
            }
        }, k = [p, n, S, b], t[16] = p, t[17] = n, t[18] = S, t[19] = k, t[20] = A) : (k = t[19], A = t[20]), (0, E.useEffect)(A, k);
        let j;
        t[21] !== m || t[22] !== te || t[23] !== l || t[24] !== n || t[25] !== S || t[26] !== g ? (j = async () => {
            if (g.status !== `setup-required` || !m || f.current) return;
            f.current = !0;
            let {
                signal: e
            } = g;
            try {
                S(e), re(!0), await n?.check(e), S(e);
                let t = await te(ye, {
                    accountId: m,
                    signal: e
                });
                S(e), await n?.check(e), S(e), t && l()
            } catch {
                e.aborted || b(`unavailable`)
            }
            f.current = !1, e.aborted || re(!1)
        }, t[21] = m, t[22] = te, t[23] = l, t[24] = n, t[25] = S, t[26] = g, t[27] = j) : j = t[27];
        let Oe = j,
            M;
        t[28] === Symbol.for(`react.memo_cache_sentinel`) ? (M = () => {
            b(`changed`), window.location.reload()
        }, t[28] = M) : M = t[28];
        let ke = M,
            N;
        t[29] === Symbol.for(`react.memo_cache_sentinel`) ? (N = () => {
            b(`changed`), se({
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
            t[32] !== ne || t[33] !== e || t[34] !== n || t[35] !== i ? (a = (0, D.jsx)(Se, {
                status: e,
                fullHeight: n,
                onRestart: ke,
                onSignIn: Ae,
                onConnect: i,
                connecting: ne
            }), t[32] = ne, t[33] = e, t[34] = n, t[35] = i, t[36] = a) : a = t[36];
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
        let z;
        t[46] === Symbol.for(`react.memo_cache_sentinel`) ? (z = [], t[46] = z) : z = t[46];
        let Ne;
        t[47] !== I || t[48] !== L || t[49] !== R ? (Ne = {
            isTrusted: !0,
            connectDomains: I,
            resourceDomains: L,
            frameDomains: R,
            baseUriDomains: z
        }, t[47] = I, t[48] = L, t[49] = R, t[50] = Ne) : Ne = t[50];
        let B = Ne,
            V;
        t[51] !== v || t[52] !== n ? (V = n ? {
            height: v
        } : void 0, t[51] = v, t[52] = n, t[53] = V) : V = t[53];
        let H;
        t[54] === _ ? H = t[55] : (H = !_ && (0, D.jsx)(`div`, {
            className: `pointer-events-none absolute inset-0`,
            children: (0, D.jsx)(Se, {
                status: `loading`
            })
        }), t[54] = _, t[55] = H);
        let Pe = P.html,
            Fe = ee ?? `light`,
            U;
        t[56] === u ? U = t[57] : (U = u.formatMessage({
            id: `chatgpt.wallet.enrollment.form.title`,
            defaultMessage: `Secure card enrollment`
        }), t[56] = u, t[57] = U);
        let Ie = n != null,
            Le = P.domain ?? null,
            W;
        t[58] === Le ? W = t[59] : (W = ue(Le), t[58] = Le, t[59] = W);
        let Re = je._meta ?? null,
            ze = je.structuredContent ?? null,
            Be = n ? `modal` : `fullscreen`,
            G;
        t[60] === n ? G = t[61] : (G = n ? {
            hidePageHeader: !0,
            suppressChatFollowUp: !0
        } : {
            walletBrowserEnrollment: !0
        }, t[60] = n, t[61] = G);
        let K;
        t[62] !== S || t[63] !== F ? (K = () => {
            try {
                S(F), pe(!0)
            } catch {}
        }, t[62] = S, t[63] = F, t[64] = K) : K = t[64];
        let q;
        t[65] === F.aborted ? q = t[66] : (q = () => {
            F.aborted || b(`unavailable`)
        }, t[65] = F.aborted, t[66] = q);
        let J;
        t[67] !== n || t[68] !== F.aborted ? (J = e => {
            n && !F.aborted && Number.isFinite(e) && be(Math.max(400, Math.ceil(e)))
        }, t[67] = n, t[68] = F.aborted, t[69] = J) : J = t[69];
        let Y;
        t[70] !== B || t[71] !== S || t[72] !== P.csp?.redirect_domains || t[73] !== P.domain || t[74] !== F ? (Y = e => {
            let {
                href: t
            } = e;
            return S(F), Te({
                href: t,
                csp: B,
                redirectDomains: P.csp?.redirect_domains,
                resolvedPineappleUri: null,
                domain: P.domain ?? null,
                distributionChannel: ie.OPENAI,
                redirectUrl: null,
                openMode: `tab`,
                attributionId: ye,
                sectionLocation: `widget`,
                widgetName: `wallet-vgs-card-enrollment`
            })
        }, t[70] = B, t[71] = S, t[72] = P.csp?.redirect_domains, t[73] = P.domain, t[74] = F, t[75] = Y) : Y = t[75];
        let X;
        t[76] !== m || t[77] !== u || t[78] !== Me || t[79] !== n?.callTool || t[80] !== S || t[81] !== F ? (X = async (e, t) => (S(F), await (n?.callTool ?? _e)({
            accountId: m,
            linkId: Me,
            name: e,
            args: t,
            signal: F
        }).then(e => (S(F), e)).catch(e => {
            throw !F.aborted && e instanceof oe && e.status === 401 && b(`changed`), !F.aborted && e instanceof xe && b(`unavailable`), Error(u.formatMessage({
                id: `chatgpt.wallet.enrollment.form.request_error`,
                defaultMessage: `Wallet could not confirm this step. Try again.`
            }))
        })), t[76] = m, t[77] = u, t[78] = Me, t[79] = n?.callTool, t[80] = S, t[81] = F, t[82] = X) : X = t[82];
        let Z;
        t[83] !== J || t[84] !== Y || t[85] !== X ? (Z = {
            notifyIntrinsicHeight: J,
            openExternal: Y,
            callTool: X
        }, t[83] = J, t[84] = Y, t[85] = X, t[86] = Z) : Z = t[86];
        let Q;
        t[87] !== m || t[88] !== B || t[89] !== u.locale || t[90] !== P.html || t[91] !== Fe || t[92] !== U || t[93] !== Ie || t[94] !== W || t[95] !== Re || t[96] !== ze || t[97] !== Be || t[98] !== G || t[99] !== K || t[100] !== q || t[101] !== Z ? (Q = (0, D.jsx)(Ee, {
            host: `chatgpt`,
            html: Pe,
            theme: Fe,
            accountId: m,
            title: U,
            attributionId: ye,
            widgetId: `wallet-hosted-enrollment`,
            widgetType: `wallet-vgs-card-enrollment`,
            widgetParent: null,
            widgetDistributionChannel: ie.OPENAI,
            measureWidth: Ie,
            subdomain: W,
            csp: B,
            toolResponseMetadata: Re,
            toolOutput: ze,
            locale: u.locale,
            displayMode: Be,
            viewParams: G,
            onReady: K,
            onError: q,
            api: Z
        }), t[87] = m, t[88] = B, t[89] = u.locale, t[90] = P.html, t[91] = Fe, t[92] = U, t[93] = Ie, t[94] = W, t[95] = Re, t[96] = ze, t[97] = Be, t[98] = G, t[99] = K, t[100] = q, t[101] = Z, t[102] = Q) : Q = t[102];
        let $;
        t[103] !== V || t[104] !== H || t[105] !== Q ? ($ = (0, D.jsxs)(`div`, {
            className: `relative h-full min-h-0 w-full shrink-0`,
            style: V,
            children: [H, Q]
        }), t[103] = V, t[104] = H, t[105] = Q, t[106] = $) : $ = t[106];
        let Ve;
        return t[107] !== r || t[108] !== $ ? (Ve = (0, D.jsx)(we, {
            onClose: r,
            children: $
        }), t[107] = r, t[108] = $, t[109] = Ve) : Ve = t[109], Ve
    }
}));
export {
    A as n, x as r, O as t
};
//# sourceMappingURL=3660315a-nz3l117a25grl013.js.map