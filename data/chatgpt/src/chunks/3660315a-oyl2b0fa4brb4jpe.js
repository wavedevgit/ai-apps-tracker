import {
    n as e,
    r as t,
    s as n
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    A1 as r,
    B6 as i,
    Irt as a,
    J$ as o,
    Nrt as s,
    Qit as ee,
    Ret as c,
    Tj as l,
    X$ as u,
    Y2 as d,
    Z2 as te,
    aN as ne,
    i5 as f,
    iat as p,
    k1 as m,
    tN as re,
    u1 as ie,
    wj as ae,
    zet as h
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as oe,
    Rn as g,
    Vn as _,
    wn as v,
    zn as se
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    Gwn as ce,
    Uut as y,
    Wut as le,
    Wwn as ue
} from "./conversation-small-fym1zmu9zimymmm1.js";
import {
    as as de,
    is as fe
} from "./8b34dbc2-gf9wnwcahty27ylx.js";
import {
    a as pe,
    c as me,
    i as he,
    n as ge,
    o as _e,
    r as ve,
    s as ye,
    t as be
} from "./1f58b914-m9fycvi51wda4een.js";
import {
    n as xe,
    r as Se,
    t as Ce
} from "./ed7002b4-d89e0f6uhka4yjsm.js";
import {
    i as b,
    n as x,
    r as we,
    t as Te
} from "./1c86a5ac-g8o3s7m87lyivalf.js";
var S = t({
    HostedWalletEnrollmentPage: () => k
});

function C() {
    return u()?.id
}

function w() {
    return o().isLoading
}

function T() {
    return u(), l(), _e()
}

function E(e) {
    return e + 1
}
var Ee, D, O, k, A, j = e((() => {
    Ee = v(), ge(), fe(), ce(), h(), b(), x(), y(), i(), ie(), m(), s(), p(), d(), re(), ae(), D = n(_()), g(), ye(), Se(), O = oe(), k = e => {
        "use forget";
        let t = (0, Ee.c)(8),
            {
                request: n,
                onClose: r
            } = e,
            i = f(C),
            a = f(w),
            o = f(T),
            [s, ee] = (0, D.useState)(0),
            c;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (c = () => ee(E), t[0] = c) : c = t[0];
        let l;
        return t[1] !== i || t[2] !== a || t[3] !== s || t[4] !== o || t[5] !== r || t[6] !== n ? (l = (0, O.jsx)(A, {
            request: n,
            onClose: r,
            accountId: i,
            accountsLoading: a,
            identity: o,
            onConnected: c
        }, s), t[1] = i, t[2] = a, t[3] = s, t[4] = o, t[5] = r, t[6] = n, t[7] = l) : l = t[7], l
    }, A = e => {
        "use forget";
        let t = (0, Ee.c)(110),
            {
                request: n,
                onClose: i,
                accountId: o,
                accountsLoading: s,
                identity: l,
                onConnected: u
            } = e,
            d = se(),
            f = ne(),
            p;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (p = {
            productSku: ue.CONNECTOR_SETTING,
            skipPostConnectExperience: !0
        }, t[0] = p) : p = t[0];
        let m = de(p),
            [re, ie] = (0, D.useState)(!1),
            ae = (0, D.useRef)(!1),
            [h, oe] = (0, D.useState)(null),
            g = h?.accountId,
            _;
        t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (_ = {
            status: `loading`
        }, t[1] = _) : _ = t[1];
        let [v, ce] = (0, D.useState)(_), [y, fe] = (0, D.useState)(!1), [ge, ye] = (0, D.useState)(400), Se = (0, D.useRef)(null), b;
        t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (b = e => {
            Se.current?.abort(), ce({
                status: e
            })
        }, t[2] = b) : b = t[2];
        let x = b,
            S;
        t[3] !== h?.accountId || t[4] !== h?.identity || t[5] !== n ? (S = e => {
            if (e.aborted) throw Error(`Wallet enrollment ended`);
            if (h?.identity !== _e() || n != null && n.accountId !== h?.accountId) throw x(`changed`), Error(`Wallet enrollment account changed`)
        }, t[3] = h?.accountId, t[4] = h?.identity, t[5] = n, t[6] = S) : S = t[6];
        let C = S,
            w, T;
        t[7] !== s || t[8] !== o || t[9] !== l ? (w = () => {
            s || oe(e => e ?? {
                identity: l,
                accountId: o
            })
        }, T = [s, o, l], t[7] = s, t[8] = o, t[9] = l, t[10] = w, t[11] = T) : (w = t[10], T = t[11]), (0, D.useEffect)(w, T);
        let E, k;
        t[12] !== h || t[13] !== l ? (E = () => {
            h && h.identity !== l && x(`changed`)
        }, k = [h, l, x], t[12] = h, t[13] = l, t[14] = E, t[15] = k) : (E = t[14], k = t[15]), (0, D.useEffect)(E, k);
        let A, j;
        t[16] !== h || t[17] !== n || t[18] !== C ? (j = () => {
            if (!h) return;
            let e = h.accountId,
                t = new AbortController;
            Se.current = t;
            let {
                signal: r
            } = t, i = a(() => x(`changed`)), o = te(() => x(`changed`));
            return (async () => {
                try {
                    if (!e) {
                        x(`unavailable`);
                        return
                    }
                    C(r), await n?.check(r), C(r);
                    let t = await pe(e, r);
                    if (C(r), !t) {
                        ce({
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
                    ce({
                        status: `ready`,
                        linkId: t.id,
                        result: i,
                        resource: a,
                        signal: r
                    })
                } catch (e) {
                    let t = e;
                    r.aborted || x(t instanceof ee && t.status === 401 ? `changed` : `unavailable`)
                }
            })(), () => {
                t.abort(), i(), o()
            }
        }, A = [h, n, C, x], t[16] = h, t[17] = n, t[18] = C, t[19] = A, t[20] = j) : (A = t[19], j = t[20]), (0, D.useEffect)(j, A);
        let M;
        t[21] !== g || t[22] !== m || t[23] !== u || t[24] !== n || t[25] !== C || t[26] !== v ? (M = async () => {
            if (v.status !== `setup-required` || !g || ae.current) return;
            ae.current = !0;
            let {
                signal: e
            } = v;
            try {
                C(e), ie(!0), await n?.check(e), C(e);
                let t = await m(ve, {
                    accountId: g,
                    signal: e
                });
                C(e), await n?.check(e), C(e), t && u()
            } catch {
                e.aborted || x(`unavailable`)
            }
            ae.current = !1, e.aborted || ie(!1)
        }, t[21] = g, t[22] = m, t[23] = u, t[24] = n, t[25] = C, t[26] = v, t[27] = M) : M = t[27];
        let De = M,
            N;
        t[28] === Symbol.for(`react.memo_cache_sentinel`) ? (N = () => {
            x(`changed`), window.location.reload()
        }, t[28] = N) : N = t[28];
        let Oe = N,
            P;
        t[29] === Symbol.for(`react.memo_cache_sentinel`) ? (P = () => {
            x(`changed`), r({
                callbackUrl: window.location.href,
                entryIntent: `login`,
                fallbackScreenHint: `login`
            }).catch(() => x(`unavailable`))
        }, t[29] = P) : P = t[29];
        let ke = P;
        if (v.status !== `ready` || !g) {
            let e = v.status === `ready` ? `unavailable` : v.status,
                n = !i,
                r;
            t[30] === De ? r = t[31] : (r = () => void De(), t[30] = De, t[31] = r);
            let a;
            t[32] !== re || t[33] !== e || t[34] !== n || t[35] !== r ? (a = (0, O.jsx)(xe, {
                status: e,
                fullHeight: n,
                onRestart: Oe,
                onSignIn: ke,
                onConnect: r,
                connecting: re
            }), t[32] = re, t[33] = e, t[34] = n, t[35] = r, t[36] = a) : a = t[36];
            let o;
            return t[37] !== i || t[38] !== a ? (o = (0, O.jsx)(Ce, {
                onClose: i,
                children: a
            }), t[37] = i, t[38] = a, t[39] = o) : o = t[39], o
        }
        let {
            resource: F,
            result: Ae,
            signal: I,
            linkId: je
        } = v, L;
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
        t[51] !== ge || t[52] !== n ? (V = n ? {
            height: ge
        } : void 0, t[51] = ge, t[52] = n, t[53] = V) : V = t[53];
        let H;
        t[54] === y ? H = t[55] : (H = !y && (0, O.jsx)(`div`, {
            className: `pointer-events-none absolute inset-0`,
            children: (0, O.jsx)(xe, {
                status: `loading`
            })
        }), t[54] = y, t[55] = H);
        let Pe = F.html,
            Fe = f ?? `light`,
            U;
        t[56] === d ? U = t[57] : (U = d.formatMessage({
            id: `chatgpt.wallet.enrollment.form.title`,
            defaultMessage: `Secure card enrollment`
        }), t[56] = d, t[57] = U);
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
        t[62] !== C || t[63] !== I ? (K = () => {
            try {
                C(I), fe(!0)
            } catch {}
        }, t[62] = C, t[63] = I, t[64] = K) : K = t[64];
        let q;
        t[65] === I.aborted ? q = t[66] : (q = () => {
            I.aborted || x(`unavailable`)
        }, t[65] = I.aborted, t[66] = q);
        let J;
        t[67] !== n || t[68] !== I.aborted ? (J = e => {
            n && !I.aborted && Number.isFinite(e) && ye(Math.max(400, Math.ceil(e)))
        }, t[67] = n, t[68] = I.aborted, t[69] = J) : J = t[69];
        let Y;
        t[70] !== B || t[71] !== C || t[72] !== F.csp?.redirect_domains || t[73] !== F.domain || t[74] !== I ? (Y = e => {
            let {
                href: t
            } = e;
            return C(I), we({
                href: t,
                csp: B,
                redirectDomains: F.csp?.redirect_domains,
                resolvedPineappleUri: null,
                domain: F.domain ?? null,
                distributionChannel: c.OPENAI,
                redirectUrl: null,
                openMode: `tab`,
                attributionId: ve,
                sectionLocation: `widget`,
                widgetName: `wallet-vgs-card-enrollment`
            })
        }, t[70] = B, t[71] = C, t[72] = F.csp?.redirect_domains, t[73] = F.domain, t[74] = I, t[75] = Y) : Y = t[75];
        let X;
        t[76] !== g || t[77] !== d || t[78] !== je || t[79] !== n?.callTool || t[80] !== C || t[81] !== I ? (X = async (e, t) => (C(I), await (n?.callTool ?? he)({
            accountId: g,
            linkId: je,
            name: e,
            args: t,
            signal: I
        }).then(e => (C(I), e)).catch(e => {
            throw !I.aborted && e instanceof ee && e.status === 401 && x(`changed`), !I.aborted && e instanceof be && x(`unavailable`), Error(d.formatMessage({
                id: `chatgpt.wallet.enrollment.form.request_error`,
                defaultMessage: `Wallet could not confirm this step. Try again.`
            }))
        })), t[76] = g, t[77] = d, t[78] = je, t[79] = n?.callTool, t[80] = C, t[81] = I, t[82] = X) : X = t[82];
        let Z;
        t[83] !== J || t[84] !== Y || t[85] !== X ? (Z = {
            notifyIntrinsicHeight: J,
            openExternal: Y,
            callTool: X
        }, t[83] = J, t[84] = Y, t[85] = X, t[86] = Z) : Z = t[86];
        let Q;
        t[87] !== g || t[88] !== B || t[89] !== d.locale || t[90] !== F.html || t[91] !== Fe || t[92] !== U || t[93] !== Ie || t[94] !== W || t[95] !== Re || t[96] !== ze || t[97] !== Be || t[98] !== G || t[99] !== K || t[100] !== q || t[101] !== Z ? (Q = (0, O.jsx)(Te, {
            host: `chatgpt`,
            html: Pe,
            theme: Fe,
            accountId: g,
            title: U,
            attributionId: ve,
            widgetId: `wallet-hosted-enrollment`,
            widgetType: `wallet-vgs-card-enrollment`,
            widgetParent: null,
            widgetDistributionChannel: c.OPENAI,
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
        }), t[87] = g, t[88] = B, t[89] = d.locale, t[90] = F.html, t[91] = Fe, t[92] = U, t[93] = Ie, t[94] = W, t[95] = Re, t[96] = ze, t[97] = Be, t[98] = G, t[99] = K, t[100] = q, t[101] = Z, t[102] = Q) : Q = t[102];
        let $;
        t[103] !== V || t[104] !== H || t[105] !== Q ? ($ = (0, O.jsxs)(`div`, {
            className: `relative h-full min-h-0 w-full shrink-0`,
            style: V,
            children: [H, Q]
        }), t[103] = V, t[104] = H, t[105] = Q, t[106] = $) : $ = t[106];
        let Ve;
        return t[107] !== i || t[108] !== $ ? (Ve = (0, O.jsx)(Ce, {
            onClose: i,
            children: $
        }), t[107] = i, t[108] = $, t[109] = Ve) : Ve = t[109], Ve
    }
}));
export {
    j as n, S as r, k as t
};
//# sourceMappingURL=3660315a-oyl2b0fa4brb4jpe.js.map