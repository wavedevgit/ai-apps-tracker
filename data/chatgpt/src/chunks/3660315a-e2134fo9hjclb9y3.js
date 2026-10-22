import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as r,
    Att as i,
    I4 as a,
    Jat as o,
    Jj as s,
    Mit as ee,
    N1 as c,
    P4 as l,
    TN as u,
    Yj as d,
    eot as te,
    f0 as f,
    jtt as p,
    k8 as m,
    kN as ne,
    kit as re,
    p0 as ie,
    q1 as ae,
    q5 as h
} from "./4813494d-nxpmzchfjvwqts17.js";
import {
    Bn as oe,
    Rn as g,
    Vn as _,
    wn as v,
    zn as se
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    FTn as y,
    Gut as ce,
    PTn as le,
    Wut as b
} from "./conversation-small-m08q51xmfe7gjq3d.js";
import {
    as as ue,
    is as de
} from "./8b34dbc2-n194ohawifys3bko.js";
import {
    a as fe,
    c as pe,
    i as me,
    n as he,
    o as ge,
    r as _e,
    s as ve,
    t as ye
} from "./1f58b914-eq1wq8vxjtsr0wf3.js";
import {
    n as be,
    r as xe,
    t as Se
} from "./ed7002b4-fezoo6gdwps7lnrh.js";
import {
    i as x,
    n as S,
    r as Ce,
    t as we
} from "./1c86a5ac-ht954xa6vg3pnar2.js";
var C = t({
    HostedWalletEnrollmentPage: () => A
});

function w() {
    return c()?.id
}

function T() {
    return r().isLoading
}

function E() {
    return c(), d(), ge()
}

function D(e) {
    return e + 1
}
var Te, O, k, A, j, M = e((() => {
    Te = v(), he(), de(), y(), p(), x(), S(), b(), m(), ae(), f(), re(), te(), l(), u(), s(), O = n(_()), g(), ve(), xe(), k = oe(), A = e => {
        "use forget";
        let t = (0, Te.c)(8),
            {
                request: n,
                onClose: r
            } = e,
            i = h(w),
            a = h(T),
            o = h(E),
            [s, ee] = (0, O.useState)(0),
            c;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (c = () => ee(D), t[0] = c) : c = t[0];
        let l;
        return t[1] !== i || t[2] !== a || t[3] !== s || t[4] !== o || t[5] !== r || t[6] !== n ? (l = (0, k.jsx)(j, {
            request: n,
            onClose: r,
            accountId: i,
            accountsLoading: a,
            identity: o,
            onConnected: c
        }, s), t[1] = i, t[2] = a, t[3] = s, t[4] = o, t[5] = r, t[6] = n, t[7] = l) : l = t[7], l
    }, j = e => {
        "use forget";
        let t = (0, Te.c)(110),
            {
                request: n,
                onClose: r,
                accountId: s,
                accountsLoading: c,
                identity: l,
                onConnected: u
            } = e,
            d = se(),
            te = ne(),
            f;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (f = {
            productSku: le.CONNECTOR_SETTING,
            skipPostConnectExperience: !0
        }, t[0] = f) : f = t[0];
        let p = ue(f),
            [m, re] = (0, O.useState)(!1),
            ae = (0, O.useRef)(!1),
            [h, oe] = (0, O.useState)(null),
            g = h?.accountId,
            _;
        t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = {
            status: `loading`
        }, t[1] = _) : _ = t[1];
        let [v, y] = (0, O.useState)(_), [b, de] = (0, O.useState)(!1), [he, ve] = (0, O.useState)(400), xe = (0, O.useRef)(null), x;
        t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (x = e => {
            xe.current?.abort(), y({
                status: e
            })
        }, t[2] = x) : x = t[2];
        let S = x,
            C;
        t[3] !== h?.accountId || t[4] !== h?.identity || t[5] !== n ? (C = e => {
            if (e.aborted) throw Error(`Wallet enrollment ended`);
            if (h?.identity !== ge() || n != null && n.accountId !== h?.accountId) throw S(`changed`), Error(`Wallet enrollment account changed`)
        }, t[3] = h?.accountId, t[4] = h?.identity, t[5] = n, t[6] = C) : C = t[6];
        let w = C,
            T, E;
        t[7] !== c || t[8] !== s || t[9] !== l ? (T = () => {
            c || oe(e => e ?? {
                identity: l,
                accountId: s
            })
        }, E = [c, s, l], t[7] = c, t[8] = s, t[9] = l, t[10] = T, t[11] = E) : (T = t[10], E = t[11]), (0, O.useEffect)(T, E);
        let D, A;
        t[12] !== h || t[13] !== l ? (D = () => {
            h && h.identity !== l && S(`changed`)
        }, A = [h, l, S], t[12] = h, t[13] = l, t[14] = D, t[15] = A) : (D = t[14], A = t[15]), (0, O.useEffect)(D, A);
        let j, M;
        t[16] !== h || t[17] !== n || t[18] !== w ? (M = () => {
            if (!h) return;
            let e = h.accountId,
                t = new AbortController;
            xe.current = t;
            let {
                signal: r
            } = t, i = ee(() => S(`changed`)), s = a(() => S(`changed`));
            return (async () => {
                try {
                    if (!e) {
                        S(`unavailable`);
                        return
                    }
                    w(r), await n?.check(r), w(r);
                    let t = await fe(e, r);
                    if (w(r), !t) {
                        y({
                            status: `setup-required`,
                            signal: r
                        });
                        return
                    }
                    let i = await (n?.callTool ?? me)({
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
                    let a = await pe(e, t.id, r, n?.context);
                    if (w(r), !a.html || !a.csp) {
                        S(`unavailable`);
                        return
                    }
                    y({
                        status: `ready`,
                        linkId: t.id,
                        result: i,
                        resource: a,
                        signal: r
                    })
                } catch (e) {
                    let t = e;
                    r.aborted || S(t instanceof o && t.status === 401 ? `changed` : `unavailable`)
                }
            })(), () => {
                t.abort(), i(), s()
            }
        }, j = [h, n, w, S], t[16] = h, t[17] = n, t[18] = w, t[19] = j, t[20] = M) : (j = t[19], M = t[20]), (0, O.useEffect)(M, j);
        let Ee;
        t[21] !== g || t[22] !== p || t[23] !== u || t[24] !== n || t[25] !== w || t[26] !== v ? (Ee = async () => {
            if (v.status !== `setup-required` || !g || ae.current) return;
            ae.current = !0;
            let {
                signal: e
            } = v;
            try {
                w(e), re(!0), await n?.check(e), w(e);
                let t = await p(_e, {
                    accountId: g,
                    signal: e
                });
                w(e), await n?.check(e), w(e), t && u()
            } catch {
                e.aborted || S(`unavailable`)
            }
            ae.current = !1, e.aborted || re(!1)
        }, t[21] = g, t[22] = p, t[23] = u, t[24] = n, t[25] = w, t[26] = v, t[27] = Ee) : Ee = t[27];
        let De = Ee,
            Oe;
        t[28] === Symbol.for(`react.memo_cache_sentinel`) ? (Oe = () => {
            S(`changed`), window.location.reload()
        }, t[28] = Oe) : Oe = t[28];
        let ke = Oe,
            Ae;
        t[29] === Symbol.for(`react.memo_cache_sentinel`) ? (Ae = () => {
            S(`changed`), ie({
                callbackUrl: window.location.href,
                entryIntent: `login`,
                fallbackScreenHint: `login`
            }).catch(() => S(`unavailable`))
        }, t[29] = Ae) : Ae = t[29];
        let je = Ae;
        if (v.status !== `ready` || !g) {
            let e = v.status === `ready` ? `unavailable` : v.status,
                n = !r,
                i;
            t[30] === De ? i = t[31] : (i = () => void De(), t[30] = De, t[31] = i);
            let a;
            t[32] !== m || t[33] !== e || t[34] !== n || t[35] !== i ? (a = (0, k.jsx)(be, {
                status: e,
                fullHeight: n,
                onRestart: ke,
                onSignIn: je,
                onConnect: i,
                connecting: m
            }), t[32] = m, t[33] = e, t[34] = n, t[35] = i, t[36] = a) : a = t[36];
            let o;
            return t[37] !== r || t[38] !== a ? (o = (0, k.jsx)(Se, {
                onClose: r,
                children: a
            }), t[37] = r, t[38] = a, t[39] = o) : o = t[39], o
        }
        let {
            resource: N,
            result: Me,
            signal: P,
            linkId: Ne
        } = v, F;
        t[40] === N.csp?.connect_domains ? F = t[41] : (F = N.csp?.connect_domains ?? [], t[40] = N.csp?.connect_domains, t[41] = F);
        let I;
        t[42] === N.csp?.resource_domains ? I = t[43] : (I = N.csp?.resource_domains ?? [], t[42] = N.csp?.resource_domains, t[43] = I);
        let L;
        t[44] === N.csp?.frame_domains ? L = t[45] : (L = N.csp?.frame_domains ?? [], t[44] = N.csp?.frame_domains, t[45] = L);
        let R;
        t[46] === Symbol.for(`react.memo_cache_sentinel`) ? (R = [], t[46] = R) : R = t[46];
        let z;
        t[47] !== F || t[48] !== I || t[49] !== L ? (z = {
            isTrusted: !0,
            connectDomains: F,
            resourceDomains: I,
            frameDomains: L,
            baseUriDomains: R
        }, t[47] = F, t[48] = I, t[49] = L, t[50] = z) : z = t[50];
        let B = z,
            V;
        t[51] !== he || t[52] !== n ? (V = n ? {
            height: he
        } : void 0, t[51] = he, t[52] = n, t[53] = V) : V = t[53];
        let H;
        t[54] === b ? H = t[55] : (H = !b && (0, k.jsx)(`div`, {
            className: `pointer-events-none absolute inset-0`,
            children: (0, k.jsx)(be, {
                status: `loading`
            })
        }), t[54] = b, t[55] = H);
        let Pe = N.html,
            Fe = te ?? `light`,
            U;
        t[56] === d ? U = t[57] : (U = d.formatMessage({
            id: `chatgpt.wallet.enrollment.form.title`,
            defaultMessage: `Secure card enrollment`
        }), t[56] = d, t[57] = U);
        let Ie = n != null,
            Le = N.domain ?? null,
            W;
        t[58] === Le ? W = t[59] : (W = ce(Le), t[58] = Le, t[59] = W);
        let Re = Me._meta ?? null,
            ze = Me.structuredContent ?? null,
            Be = n ? `modal` : `fullscreen`,
            G;
        t[60] === n ? G = t[61] : (G = n ? {
            hidePageHeader: !0,
            suppressChatFollowUp: !0
        } : {
            walletBrowserEnrollment: !0
        }, t[60] = n, t[61] = G);
        let K;
        t[62] !== w || t[63] !== P ? (K = () => {
            try {
                w(P), de(!0)
            } catch {}
        }, t[62] = w, t[63] = P, t[64] = K) : K = t[64];
        let q;
        t[65] === P.aborted ? q = t[66] : (q = () => {
            P.aborted || S(`unavailable`)
        }, t[65] = P.aborted, t[66] = q);
        let J;
        t[67] !== n || t[68] !== P.aborted ? (J = e => {
            n && !P.aborted && Number.isFinite(e) && ve(Math.max(400, Math.ceil(e)))
        }, t[67] = n, t[68] = P.aborted, t[69] = J) : J = t[69];
        let Y;
        t[70] !== B || t[71] !== w || t[72] !== N.csp?.redirect_domains || t[73] !== N.domain || t[74] !== P ? (Y = e => {
            let {
                href: t
            } = e;
            return w(P), Ce({
                href: t,
                csp: B,
                redirectDomains: N.csp?.redirect_domains,
                resolvedPineappleUri: null,
                domain: N.domain ?? null,
                distributionChannel: i.OPENAI,
                redirectUrl: null,
                openMode: `tab`,
                attributionId: _e,
                sectionLocation: `widget`,
                widgetName: `wallet-vgs-card-enrollment`
            })
        }, t[70] = B, t[71] = w, t[72] = N.csp?.redirect_domains, t[73] = N.domain, t[74] = P, t[75] = Y) : Y = t[75];
        let X;
        t[76] !== g || t[77] !== d || t[78] !== Ne || t[79] !== n?.callTool || t[80] !== w || t[81] !== P ? (X = async (e, t) => (w(P), await (n?.callTool ?? me)({
            accountId: g,
            linkId: Ne,
            name: e,
            args: t,
            signal: P
        }).then(e => (w(P), e)).catch(e => {
            throw !P.aborted && e instanceof o && e.status === 401 && S(`changed`), !P.aborted && e instanceof ye && S(`unavailable`), Error(d.formatMessage({
                id: `chatgpt.wallet.enrollment.form.request_error`,
                defaultMessage: `Wallet could not confirm this step. Try again.`
            }))
        })), t[76] = g, t[77] = d, t[78] = Ne, t[79] = n?.callTool, t[80] = w, t[81] = P, t[82] = X) : X = t[82];
        let Z;
        t[83] !== J || t[84] !== Y || t[85] !== X ? (Z = {
            notifyIntrinsicHeight: J,
            openExternal: Y,
            callTool: X
        }, t[83] = J, t[84] = Y, t[85] = X, t[86] = Z) : Z = t[86];
        let Q;
        t[87] !== g || t[88] !== B || t[89] !== d.locale || t[90] !== N.html || t[91] !== Fe || t[92] !== U || t[93] !== Ie || t[94] !== W || t[95] !== Re || t[96] !== ze || t[97] !== Be || t[98] !== G || t[99] !== K || t[100] !== q || t[101] !== Z ? (Q = (0, k.jsx)(we, {
            host: `chatgpt`,
            html: Pe,
            theme: Fe,
            accountId: g,
            title: U,
            attributionId: _e,
            widgetId: `wallet-hosted-enrollment`,
            widgetType: `wallet-vgs-card-enrollment`,
            widgetParent: null,
            widgetDistributionChannel: i.OPENAI,
            measureWidth: Ie,
            subdomain: W,
            csp: B,
            toolResponseMetadata: Re,
            toolOutput: ze,
            locale: d.locale,
            displayMode: Be,
            viewParams: G,
            onReady: K,
            onError: q,
            api: Z
        }), t[87] = g, t[88] = B, t[89] = d.locale, t[90] = N.html, t[91] = Fe, t[92] = U, t[93] = Ie, t[94] = W, t[95] = Re, t[96] = ze, t[97] = Be, t[98] = G, t[99] = K, t[100] = q, t[101] = Z, t[102] = Q) : Q = t[102];
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
//# sourceMappingURL=3660315a-e2134fo9hjclb9y3.js.map