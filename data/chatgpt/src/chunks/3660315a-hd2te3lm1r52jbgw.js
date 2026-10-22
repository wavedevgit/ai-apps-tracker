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
} from "./4813494d-r54yv6lv29x4ew99.js";
import {
    Bn as se,
    Rn as h,
    Vn as g,
    wn as _,
    zn as ce
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    FTn as le,
    Hut as ue,
    PTn as de,
    Vut as fe
} from "./conversation-small-dwpaie1hln28efxb.js";
import {
    as as pe,
    os as me
} from "./8b34dbc2-bgocf3s6t6l67twq.js";
import {
    a as he,
    c as ge,
    i as _e,
    n as ve,
    o as ye,
    r as be,
    s as xe,
    t as Se
} from "./1f58b914-c4deb9p5twennnv4.js";
import {
    n as Ce,
    r as we,
    t as Te
} from "./ed7002b4-e2d6uk5k1vx6pezh.js";
import {
    i as v,
    n as y,
    r as Ee,
    t as De
} from "./1c86a5ac-j9hjzv3z5lyqbsda.js";
var b = t({
    HostedWalletEnrollmentPage: () => D
});

function x() {
    return u()?.id
}

function S() {
    return r().isLoading
}

function C() {
    return u(), ne(), ye()
}

function w(e) {
    return e + 1
}
var Oe, T, E, D, O, k = e((() => {
    Oe = _(), ve(), pe(), le(), l(), v(), y(), fe(), i(), p(), re(), a(), m(), f(), ee(), c(), T = n(g()), h(), xe(), we(), E = se(), D = e => {
        "use forget";
        let t = (0, Oe.c)(8),
            {
                request: n,
                onClose: r
            } = e,
            i = s(x),
            a = s(S),
            o = s(C),
            [c, l] = (0, T.useState)(0),
            u;
        t[0] === Symbol.for(`react.memo_cache_sentinel`) ? (u = () => l(w), t[0] = u) : u = t[0];
        let d;
        return t[1] !== i || t[2] !== a || t[3] !== c || t[4] !== o || t[5] !== r || t[6] !== n ? (d = (0, E.jsx)(O, {
            request: n,
            onClose: r,
            accountId: i,
            accountsLoading: a,
            identity: o,
            onConnected: u
        }, c), t[1] = i, t[2] = a, t[3] = c, t[4] = o, t[5] = r, t[6] = n, t[7] = d) : d = t[7], d
    }, O = e => {
        "use forget";
        let t = (0, Oe.c)(110),
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
            productSku: de.CONNECTOR_SETTING,
            skipPostConnectExperience: !0
        }, t[0] = f) : f = t[0];
        let ee = me(f),
            [ne, re] = (0, T.useState)(!1),
            p = (0, T.useRef)(!1),
            [m, se] = (0, T.useState)(null),
            h = m?.accountId,
            g;
        t[1] === Symbol.for(`react.memo_cache_sentinel`) ? (g = {
            status: `loading`
        }, t[1] = g) : g = t[1];
        let [_, le] = (0, T.useState)(g), [fe, pe] = (0, T.useState)(!1), [ve, xe] = (0, T.useState)(400), we = (0, T.useRef)(null), v;
        t[2] === Symbol.for(`react.memo_cache_sentinel`) ? (v = e => {
            we.current?.abort(), le({
                status: e
            })
        }, t[2] = v) : v = t[2];
        let y = v,
            b;
        t[3] !== m?.accountId || t[4] !== m?.identity || t[5] !== n ? (b = e => {
            if (e.aborted) throw Error(`Wallet enrollment ended`);
            if (m?.identity !== ye() || n != null && n.accountId !== m?.accountId) throw y(`changed`), Error(`Wallet enrollment account changed`)
        }, t[3] = m?.accountId, t[4] = m?.identity, t[5] = n, t[6] = b) : b = t[6];
        let x = b,
            S, C;
        t[7] !== a || t[8] !== i || t[9] !== s ? (S = () => {
            a || se(e => e ?? {
                identity: s,
                accountId: i
            })
        }, C = [a, i, s], t[7] = a, t[8] = i, t[9] = s, t[10] = S, t[11] = C) : (S = t[10], C = t[11]), (0, T.useEffect)(S, C);
        let w, D;
        t[12] !== m || t[13] !== s ? (w = () => {
            m && m.identity !== s && y(`changed`)
        }, D = [m, s, y], t[12] = m, t[13] = s, t[14] = w, t[15] = D) : (w = t[14], D = t[15]), (0, T.useEffect)(w, D);
        let O, k;
        t[16] !== m || t[17] !== n || t[18] !== x ? (k = () => {
            if (!m) return;
            let e = m.accountId,
                t = new AbortController;
            we.current = t;
            let {
                signal: r
            } = t, i = d(() => y(`changed`)), a = o(() => y(`changed`));
            return (async () => {
                try {
                    if (!e) {
                        y(`unavailable`);
                        return
                    }
                    x(r), await n?.check(r), x(r);
                    let t = await he(e, r);
                    if (x(r), !t) {
                        le({
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
                    if (x(r), i.isError || !i._meta?.vgs_collect_bootstrap) {
                        y(`unavailable`);
                        return
                    }
                    let a = await ge(e, t.id, r, n?.context);
                    if (x(r), !a.html || !a.csp) {
                        y(`unavailable`);
                        return
                    }
                    le({
                        status: `ready`,
                        linkId: t.id,
                        result: i,
                        resource: a,
                        signal: r
                    })
                } catch (e) {
                    let t = e;
                    r.aborted || y(t instanceof te && t.status === 401 ? `changed` : `unavailable`)
                }
            })(), () => {
                t.abort(), i(), a()
            }
        }, O = [m, n, x, y], t[16] = m, t[17] = n, t[18] = x, t[19] = O, t[20] = k) : (O = t[19], k = t[20]), (0, T.useEffect)(k, O);
        let ke;
        t[21] !== h || t[22] !== ee || t[23] !== c || t[24] !== n || t[25] !== x || t[26] !== _ ? (ke = async () => {
            if (_.status !== `setup-required` || !h || p.current) return;
            p.current = !0;
            let {
                signal: e
            } = _;
            try {
                x(e), re(!0), await n?.check(e), x(e);
                let t = await ee(be, {
                    accountId: h,
                    signal: e
                });
                x(e), await n?.check(e), x(e), t && c()
            } catch {
                e.aborted || y(`unavailable`)
            }
            p.current = !1, e.aborted || re(!1)
        }, t[21] = h, t[22] = ee, t[23] = c, t[24] = n, t[25] = x, t[26] = _, t[27] = ke) : ke = t[27];
        let Ae = ke,
            A;
        t[28] === Symbol.for(`react.memo_cache_sentinel`) ? (A = () => {
            y(`changed`), window.location.reload()
        }, t[28] = A) : A = t[28];
        let je = A,
            j;
        t[29] === Symbol.for(`react.memo_cache_sentinel`) ? (j = () => {
            y(`changed`), oe({
                callbackUrl: window.location.href,
                entryIntent: `login`,
                fallbackScreenHint: `login`
            }).catch(() => y(`unavailable`))
        }, t[29] = j) : j = t[29];
        let Me = j;
        if (_.status !== `ready` || !h) {
            let e = _.status === `ready` ? `unavailable` : _.status,
                n = !r,
                i;
            t[30] === Ae ? i = t[31] : (i = () => void Ae(), t[30] = Ae, t[31] = i);
            let a;
            t[32] !== ne || t[33] !== e || t[34] !== n || t[35] !== i ? (a = (0, E.jsx)(Ce, {
                status: e,
                fullHeight: n,
                onRestart: je,
                onSignIn: Me,
                onConnect: i,
                connecting: ne
            }), t[32] = ne, t[33] = e, t[34] = n, t[35] = i, t[36] = a) : a = t[36];
            let o;
            return t[37] !== r || t[38] !== a ? (o = (0, E.jsx)(Te, {
                onClose: r,
                children: a
            }), t[37] = r, t[38] = a, t[39] = o) : o = t[39], o
        }
        let {
            resource: M,
            result: Ne,
            signal: N,
            linkId: Pe
        } = _, P;
        t[40] === M.csp?.connect_domains ? P = t[41] : (P = M.csp?.connect_domains ?? [], t[40] = M.csp?.connect_domains, t[41] = P);
        let F;
        t[42] === M.csp?.resource_domains ? F = t[43] : (F = M.csp?.resource_domains ?? [], t[42] = M.csp?.resource_domains, t[43] = F);
        let I;
        t[44] === M.csp?.frame_domains ? I = t[45] : (I = M.csp?.frame_domains ?? [], t[44] = M.csp?.frame_domains, t[45] = I);
        let L;
        t[46] === Symbol.for(`react.memo_cache_sentinel`) ? (L = [], t[46] = L) : L = t[46];
        let R;
        t[47] !== P || t[48] !== F || t[49] !== I ? (R = {
            isTrusted: !0,
            connectDomains: P,
            resourceDomains: F,
            frameDomains: I,
            baseUriDomains: L
        }, t[47] = P, t[48] = F, t[49] = I, t[50] = R) : R = t[50];
        let z = R,
            B;
        t[51] !== ve || t[52] !== n ? (B = n ? {
            height: ve
        } : void 0, t[51] = ve, t[52] = n, t[53] = B) : B = t[53];
        let V;
        t[54] === fe ? V = t[55] : (V = !fe && (0, E.jsx)(`div`, {
            className: `pointer-events-none absolute inset-0`,
            children: (0, E.jsx)(Ce, {
                status: `loading`
            })
        }), t[54] = fe, t[55] = V);
        let Fe = M.html,
            Ie = u ?? `light`,
            H;
        t[56] === l ? H = t[57] : (H = l.formatMessage({
            id: `chatgpt.wallet.enrollment.form.title`,
            defaultMessage: `Secure card enrollment`
        }), t[56] = l, t[57] = H);
        let Le = n != null,
            Re = M.domain ?? null,
            U;
        t[58] === Re ? U = t[59] : (U = ue(Re), t[58] = Re, t[59] = U);
        let ze = Ne._meta ?? null,
            Be = Ne.structuredContent ?? null,
            Ve = n ? `modal` : `fullscreen`,
            W;
        t[60] === n ? W = t[61] : (W = n ? {
            hidePageHeader: !0,
            suppressChatFollowUp: !0
        } : {
            walletBrowserEnrollment: !0
        }, t[60] = n, t[61] = W);
        let G;
        t[62] !== x || t[63] !== N ? (G = () => {
            try {
                x(N), pe(!0)
            } catch {}
        }, t[62] = x, t[63] = N, t[64] = G) : G = t[64];
        let K;
        t[65] === N.aborted ? K = t[66] : (K = () => {
            N.aborted || y(`unavailable`)
        }, t[65] = N.aborted, t[66] = K);
        let q;
        t[67] !== n || t[68] !== N.aborted ? (q = e => {
            n && !N.aborted && Number.isFinite(e) && xe(Math.max(400, Math.ceil(e)))
        }, t[67] = n, t[68] = N.aborted, t[69] = q) : q = t[69];
        let J;
        t[70] !== z || t[71] !== x || t[72] !== M.csp?.redirect_domains || t[73] !== M.domain || t[74] !== N ? (J = e => {
            let {
                href: t
            } = e;
            return x(N), Ee({
                href: t,
                csp: z,
                redirectDomains: M.csp?.redirect_domains,
                resolvedPineappleUri: null,
                domain: M.domain ?? null,
                distributionChannel: ie.OPENAI,
                redirectUrl: null,
                openMode: `tab`,
                attributionId: be,
                sectionLocation: `widget`,
                widgetName: `wallet-vgs-card-enrollment`
            })
        }, t[70] = z, t[71] = x, t[72] = M.csp?.redirect_domains, t[73] = M.domain, t[74] = N, t[75] = J) : J = t[75];
        let Y;
        t[76] !== h || t[77] !== l || t[78] !== Pe || t[79] !== n?.callTool || t[80] !== x || t[81] !== N ? (Y = async (e, t) => (x(N), await (n?.callTool ?? _e)({
            accountId: h,
            linkId: Pe,
            name: e,
            args: t,
            signal: N
        }).then(e => (x(N), e)).catch(e => {
            throw !N.aborted && e instanceof te && e.status === 401 && y(`changed`), !N.aborted && e instanceof Se && y(`unavailable`), Error(l.formatMessage({
                id: `chatgpt.wallet.enrollment.form.request_error`,
                defaultMessage: `Wallet could not confirm this step. Try again.`
            }))
        })), t[76] = h, t[77] = l, t[78] = Pe, t[79] = n?.callTool, t[80] = x, t[81] = N, t[82] = Y) : Y = t[82];
        let X;
        t[83] !== q || t[84] !== J || t[85] !== Y ? (X = {
            notifyIntrinsicHeight: q,
            openExternal: J,
            callTool: Y
        }, t[83] = q, t[84] = J, t[85] = Y, t[86] = X) : X = t[86];
        let Z;
        t[87] !== h || t[88] !== z || t[89] !== l.locale || t[90] !== M.html || t[91] !== Ie || t[92] !== H || t[93] !== Le || t[94] !== U || t[95] !== ze || t[96] !== Be || t[97] !== Ve || t[98] !== W || t[99] !== G || t[100] !== K || t[101] !== X ? (Z = (0, E.jsx)(De, {
            host: `chatgpt`,
            html: Fe,
            theme: Ie,
            accountId: h,
            title: H,
            attributionId: be,
            widgetId: `wallet-hosted-enrollment`,
            widgetType: `wallet-vgs-card-enrollment`,
            widgetParent: null,
            widgetDistributionChannel: ie.OPENAI,
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
        }), t[87] = h, t[88] = z, t[89] = l.locale, t[90] = M.html, t[91] = Ie, t[92] = H, t[93] = Le, t[94] = U, t[95] = ze, t[96] = Be, t[97] = Ve, t[98] = W, t[99] = G, t[100] = K, t[101] = X, t[102] = Z) : Z = t[102];
        let Q;
        t[103] !== B || t[104] !== V || t[105] !== Z ? (Q = (0, E.jsxs)(`div`, {
            className: `relative h-full min-h-0 w-full shrink-0`,
            style: B,
            children: [V, Z]
        }), t[103] = B, t[104] = V, t[105] = Z, t[106] = Q) : Q = t[106];
        let $;
        return t[107] !== r || t[108] !== Q ? ($ = (0, E.jsx)(Te, {
            onClose: r,
            children: Q
        }), t[107] = r, t[108] = Q, t[109] = $) : $ = t[109], $
    }
}));
export {
    k as n, b as r, D as t
};
//# sourceMappingURL=3660315a-hd2te3lm1r52jbgw.js.map