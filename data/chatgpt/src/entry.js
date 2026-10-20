const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/conversation-small-cy5f8pl0g26s86so.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-dfpv67hlp00pbohr.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/30901919-7dzdc1ou0jtwkwpt.js", "assets/c470f5ab-d4g7lc53n1e1ao7o.js", "assets/0e5afe53-o2mcfq1ky1uaktz5.js", "assets/conversation-small-j5v9ogf2.css"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    Att as n,
    Bot as r,
    Ctt as i,
    Htt as a,
    Jat as o,
    Jnt as s,
    Kat as c,
    Ltt as l,
    Mtt as u,
    Ntt as d,
    Rtt as f,
    Ttt as p,
    Xat as ee,
    Xnt as m,
    Yat as h,
    dct as g,
    iat as _,
    ktt as v,
    mct as y,
    oat as b,
    qat as x,
    zot as S
} from "./4813494d-dfpv67hlp00pbohr.js";
import {
    $ as C,
    Bn as w,
    Gt as te,
    Vn as ne,
    cn as T,
    et as E,
    ln as D
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    i as O,
    n as k,
    r as A,
    t as j
} from "./d42ee766-ijcxf5awdminntzh.js";
var M, N, P, F = e((() => {
    M = [`q`, `m`, `disable_auto_send`], N = e => M.filter(t => e.has(t)), P = (e, t) => {
        try {
            let n = new URL(t),
                r = new URL(e.entryUrl);
            r.hash = n.hash;
            let i = new URLSearchParams(n.hash.startsWith(`#`) ? n.hash.slice(1) : n.hash),
                a = new Set([...e.instantPromptParameterNames, ...N(i)]);
            return {
                ...e,
                entryUrl: r.toString(),
                instantPromptParameterNames: M.filter(e => a.has(e))
            }
        } catch {
            return e
        }
    }
}));

function I() {
    let e = new URL(window.location.href);
    e.searchParams.get(`billing_invoice_payment`) !== `1` || e.pathname !== `/` && e.pathname !== `/admin/billing` || (e.searchParams.delete(`billing_invoice_payment`), e.searchParams.delete(`payment_intent`), e.searchParams.delete(`payment_intent_client_secret`), e.searchParams.delete(`redirect_status`), window.history.replaceState(window.history.state, ``, e.pathname + e.search + e.hash))
}
var L = e((() => {}));

function R(e) {
    window.jsdOnload = () => {
        let t = window.cloudflare?.jsd;
        if (!t) {
            z(`jsd_unavailable`);
            return
        }
        t.executeOnce({
            callback: z,
            nonce: e
        })
    };
    let t = document.createElement(`script`);
    t.async = !0, t.nonce = e, t.onerror = () => {
        z(`script_load_error`)
    }, t.src = H, document.head.appendChild(t)
}

function z(e) {
    _.addAction(`manual_cloudflare_challenge_invocation`, {
        outcome: e
    })
}

function B(e) {
    let t = window.location.hostname;
    t !== `chatgpt.com` && !t.endsWith(`.chatgpt.com`) || s(V).get(`enabled`, !1) && (U || (U = !0, R(e)))
}
var V, H, U, W = e((() => {
    b(), m(), V = `1171720776`, H = `/cdn-cgi/challenge-platform/scripts/jsd/api.js?onload=jsdOnload`, U = !1
}));

function G(e) {
    let t = e => e.filter(e => /\.css([?#]|$)/.test(e)),
        n = Object.fromEntries(Object.entries(e.routes).map(([e, n]) => [e, n?.imports ? {
            ...n,
            imports: t(n.imports)
        } : n])),
        r = e.entry?.imports ? {
            ...e.entry,
            imports: t(e.entry.imports)
        } : e.entry;
    return {
        ...e,
        entry: r,
        routes: n
    }
}
var K = e((() => {})),
    q, J, Y, X, Z, Q, $;
e((() => {
    y(), g(), l(), F(), k(), L(), ee(), x(), W(), u(), v(), q = t(ne()), J = t(te()), E(), r(), i(), K(), Y = w(), D(), d(), n(), I(), window.__oai_SSR_HTML ? (h.instance.addFirstTiming(`composer.html`, {
        time: window.__oai_SSR_HTML,
        serialTimingGroup: `pageLoad`,
        source: `inline-script`
    }), p.setSubmetric(`composerHtmlDurationMs`, window.__oai_SSR_HTML - performance.timeOrigin)) : window.__oai_logHTML = () => {
        h.instance.addFirstTiming(`composer.html`, {
            serialTimingGroup: `pageLoad`,
            source: `entry.client`
        }), p.setSubmetric(`composerHtmlDurationMs`, performance.now())
    }, window.__oai_SSR_TTI ? (h.instance.addFirstTiming(`composer.visible`, {
        time: window.__oai_SSR_TTI,
        serialTimingGroup: `pageLoad`,
        source: `inline-script`
    }), p.setSubmetric(`composerVisibleDurationMs`, window.__oai_SSR_TTI - performance.timeOrigin)) : window.__oai_logTTI = () => {
        h.instance.addFirstTiming(`composer.visible`, {
            serialTimingGroup: `pageLoad`,
            source: `entry.client`
        }), p.setSubmetric(`composerVisibleDurationMs`, performance.now())
    }, f(), h.instance.addTiming(`entry.client`, {
        serialTimingGroup: `pageLoad`
    }), p.setSubmetric(`entryClientDurationMs`, performance.now()), X = e => {
        let t = window.__reactRouterManifest;
        if (!t || !e.stripModulepreloadImports) return;
        let n = G(t);
        window.__reactRouterManifest = n, window.__reactRouterContext?.manifest && (window.__reactRouterContext = {
            ...window.__reactRouterContext,
            manifest: n
        })
    }, Z = e => {
        e.isOpaqueNoAuthDisabledLandingPageEnabled && Promise.all([T(() => import(`./conversation-small-cy5f8pl0g26s86so.js`).then(e => (e.Wtt(), e.Gtt)), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8])), T(() => import(`./4813494d-dfpv67hlp00pbohr.js`).then(e => (e.q0(), e.J0)), __vite__mapDeps([2, 1, 3, 4]))]).then(([{
            LoginForm: e
        }, {
            AuthModal: t
        }]) => {
            t.prefetch(), e.prefetch()
        })
    }, Q = S(), Q.entryContext = P(Q.entryContext, window.location.href), B(Q.cspScriptNonce), X(Q), Z(Q), $ = () => {
        let e = A(window.location.pathname);
        if (e) {
            let e = j();
            O(`info`, `Login email hydration checkpoint`, {
                phase: `pre_hydration`,
                email_input_found: e != null,
                email_present: !!e?.value,
                email_input_focused: document.activeElement === e,
                document_ready_state: document.readyState
            })
        }(0, q.startTransition)(() => {
            o(`hydrate.start`), c.start(), (0, J.hydrateRoot)(document, (0, Y.jsxs)(q.StrictMode, {
                children: [null, (0, Y.jsx)(C, {
                    instrumentations: [a]
                })]
            }), {
                onRecoverableError(t, n) {
                    c.recoverableError(t);
                    let r = t instanceof Error ? t.message : String(t),
                        i = /hydrat|server[- ]rendered HTML|did not match/i.test(r);
                    if (e && i) {
                        let e = j();
                        O(`warn`, `Login email hydration mismatch`, {
                            phase: `hydration_recovery`,
                            email_input_found: e != null,
                            email_present: !!e?.value,
                            email_input_focused: document.activeElement === e
                        })
                    }
                    let a = Error(r);
                    a.name = `RecoverableError`, a.stack = n.componentStack ?? (t instanceof Error ? t.stack : String(t)), a.cause = t, h.instance.addError(a)
                }
            })
        })
    }, $()
}))();
//# sourceMappingURL=entry.client-bdyysvuz.js.map