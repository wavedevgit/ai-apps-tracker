const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/conversation-small-nmt18uiom3b14vca.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-tap9fxyhk4ehe0bs.js", "assets/2340486e-i7pjxgdhv0bs6apg.js", "assets/root-lelxp0l2.css", "assets/30901919-niqyapppecmq5jkn.js", "assets/c470f5ab-uuoa2gfm4goj6p9f.js", "assets/0e5afe53-f7up6uuou2fv3lyg.js", "assets/conversation-small-bwtqiuwj.css"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $at as n,
    $nt as r,
    Att as i,
    Ett as a,
    Ftt as o,
    Got as s,
    Htt as c,
    Ltt as l,
    Ntt as u,
    Qat as d,
    Rtt as f,
    Utt as p,
    Wot as m,
    Zat as h,
    dat as g,
    eot as _,
    gct as v,
    jtt as y,
    lat as b,
    qtt as x,
    tot as ee,
    trt as te,
    wtt as ne,
    yct as re
} from "./4813494d-tap9fxyhk4ehe0bs.js";
import {
    $ as S,
    Bn as C,
    Gt as w,
    Vn as T,
    cn as E,
    et as D,
    ln as O
} from "./2340486e-i7pjxgdhv0bs6apg.js";
import {
    i as k,
    n as A,
    r as j,
    t as M
} from "./d42ee766-jyulxuy7aor7q365.js";
var N, P, F, I = e((() => {
    N = [`q`, `m`, `disable_auto_send`], P = e => N.filter(t => e.has(t)), F = (e, t) => {
        try {
            let n = new URL(t),
                r = new URL(e.entryUrl);
            r.hash = n.hash;
            let i = new URLSearchParams(n.hash.startsWith(`#`) ? n.hash.slice(1) : n.hash),
                a = new Set([...e.instantPromptParameterNames, ...P(i)]);
            return {
                ...e,
                entryUrl: r.toString(),
                instantPromptParameterNames: N.filter(e => a.has(e))
            }
        } catch {
            return e
        }
    }
}));

function L() {
    let e = new URL(window.location.href);
    e.searchParams.get(`billing_invoice_payment`) !== `1` || e.pathname !== `/` && e.pathname !== `/admin/billing` || (e.searchParams.delete(`billing_invoice_payment`), e.searchParams.delete(`payment_intent`), e.searchParams.delete(`payment_intent_client_secret`), e.searchParams.delete(`redirect_status`), window.history.replaceState(window.history.state, ``, e.pathname + e.search + e.hash))
}
var ie = e((() => {}));

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
    b.addAction(`manual_cloudflare_challenge_invocation`, {
        outcome: e
    })
}

function B(e) {
    let t = window.location.hostname;
    t !== `chatgpt.com` && !t.endsWith(`.chatgpt.com`) || r(V).get(`enabled`, !1) && (U || (U = !0, R(e)))
}
var V, H, U, W = e((() => {
    g(), te(), V = `1171720776`, H = `/cdn-cgi/challenge-platform/scripts/jsd/api.js?onload=jsdOnload`, U = !1
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
    re(), v(), c(), I(), A(), ie(), ee(), d(), W(), l(), u(), i(), q = t(T()), J = t(w()), D(), s(), ne(), K(), Y = C(), O(), f(), o(), y(), L(), window.__oai_SSR_HTML ? (_.instance.addFirstTiming(`composer.html`, {
        time: window.__oai_SSR_HTML,
        serialTimingGroup: `pageLoad`,
        source: `inline-script`
    }), a.setSubmetric(`composerHtmlDurationMs`, window.__oai_SSR_HTML - performance.timeOrigin)) : window.__oai_logHTML = () => {
        _.instance.addFirstTiming(`composer.html`, {
            serialTimingGroup: `pageLoad`,
            source: `entry.client`
        }), a.setSubmetric(`composerHtmlDurationMs`, performance.now())
    }, window.__oai_SSR_TTI ? (_.instance.addFirstTiming(`composer.visible`, {
        time: window.__oai_SSR_TTI,
        serialTimingGroup: `pageLoad`,
        source: `inline-script`
    }), a.setSubmetric(`composerVisibleDurationMs`, window.__oai_SSR_TTI - performance.timeOrigin)) : window.__oai_logTTI = () => {
        _.instance.addFirstTiming(`composer.visible`, {
            serialTimingGroup: `pageLoad`,
            source: `entry.client`
        }), a.setSubmetric(`composerVisibleDurationMs`, performance.now())
    }, p(), _.instance.addTiming(`entry.client`, {
        serialTimingGroup: `pageLoad`
    }), a.setSubmetric(`entryClientDurationMs`, performance.now()), X = e => {
        let t = window.__reactRouterManifest;
        if (!t || !e.stripModulepreloadImports) return;
        let n = G(t);
        window.__reactRouterManifest = n, window.__reactRouterContext?.manifest && (window.__reactRouterContext = {
            ...window.__reactRouterContext,
            manifest: n
        })
    }, Z = e => {
        e.isOpaqueNoAuthDisabledLandingPageEnabled && Promise.all([E(() => import(`./conversation-small-nmt18uiom3b14vca.js`).then(e => (e.qtt(), e.Jtt)), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8])), E(() => import(`./4813494d-tap9fxyhk4ehe0bs.js`).then(e => (e.J0(), e.Y0)), __vite__mapDeps([2, 1, 3, 4]))]).then(([{
            LoginForm: e
        }, {
            AuthModal: t
        }]) => {
            t.prefetch(), e.prefetch()
        })
    }, Q = m(), Q.entryContext = F(Q.entryContext, window.location.href), B(Q.cspScriptNonce), X(Q), Z(Q), $ = () => {
        let e = j(window.location.pathname);
        if (e) {
            let e = M();
            k(`info`, `Login email hydration checkpoint`, {
                phase: `pre_hydration`,
                email_input_found: e != null,
                email_present: !!e?.value,
                email_input_focused: document.activeElement === e,
                document_ready_state: document.readyState
            })
        }(0, q.startTransition)(() => {
            n(`hydrate.start`), h.start(), (0, J.hydrateRoot)(document, (0, Y.jsxs)(q.StrictMode, {
                children: [null, (0, Y.jsx)(S, {
                    instrumentations: [x]
                })]
            }), {
                onRecoverableError(t, n) {
                    h.recoverableError(t);
                    let r = t instanceof Error ? t.message : String(t),
                        i = /hydrat|server[- ]rendered HTML|did not match/i.test(r);
                    if (e && i) {
                        let e = M();
                        k(`warn`, `Login email hydration mismatch`, {
                            phase: `hydration_recovery`,
                            email_input_found: e != null,
                            email_present: !!e?.value,
                            email_input_focused: document.activeElement === e
                        })
                    }
                    let a = Error(r);
                    a.name = `RecoverableError`, a.stack = n.componentStack ?? (t instanceof Error ? t.stack : String(t)), a.cause = t, _.instance.addError(a)
                }
            })
        })
    }, $()
}))();
//# sourceMappingURL=entry.client-dz5o90xy.js.map