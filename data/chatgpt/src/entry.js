const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/conversation-small-fym1zmu9zimymmm1.js", "assets/f025431a-ehagpvg3m4e1cduv.js", "assets/4813494d-cb22y2w19zwyshmt.js", "assets/2340486e-oc6d2eodbcrmxur3.js", "assets/root-lelxp0l2.css", "assets/30901919-e33mbl5u1y88w5wu.js", "assets/c470f5ab-m68dth1hatzjj8yh.js", "assets/0e5afe53-dl0nq2u2siu8c8q5.js", "assets/conversation-small-iha453gv.css"]))) => i.map(i => d[i]);
import {
    n as e,
    s as t
} from "./f025431a-ehagpvg3m4e1cduv.js";
import {
    $et as n,
    Dit as r,
    Jet as i,
    Ket as a,
    Lst as o,
    Pst as s,
    Qet as c,
    _at as l,
    _nt as u,
    cot as d,
    dtt as f,
    gat as p,
    hat as m,
    kit as h,
    lot as g,
    ntt as _,
    ott as v,
    stt as y,
    ttt as b,
    vat as x,
    yat as S,
    ynt as ee
} from "./4813494d-cb22y2w19zwyshmt.js";
import {
    Bn as te,
    Gt as ne,
    Vn as C,
    cn as w,
    et as T,
    ln as E,
    tt as D
} from "./2340486e-oc6d2eodbcrmxur3.js";
import {
    i as O,
    n as k,
    r as A,
    t as j
} from "./d42ee766-l8qd8272nkh3jm4y.js";
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
    r.addAction(`manual_cloudflare_challenge_invocation`, {
        outcome: e
    })
}

function B(e) {
    let t = window.location.hostname;
    t !== `chatgpt.com` && !t.endsWith(`.chatgpt.com`) || u(V).get(`enabled`, !1) && (U || (U = !0, R(e)))
}
var V, H, U, W = e((() => {
    h(), ee(), V = `1171720776`, H = `/cdn-cgi/challenge-platform/scripts/jsd/api.js?onload=jsdOnload`, U = !1
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
    o(), s(), v(), F(), k(), L(), S(), p(), W(), b(), c(), q = t(C()), J = t(ne()), D(), g(), a(), K(), Y = te(), E(), _(), n(), I(), window.__oai_SSR_HTML ? (x.instance.addFirstTiming(`composer.html`, {
        time: window.__oai_SSR_HTML,
        serialTimingGroup: `pageLoad`,
        source: `inline-script`
    }), i.setSubmetric(`composerHtmlDurationMs`, window.__oai_SSR_HTML - performance.timeOrigin)) : window.__oai_logHTML = () => {
        x.instance.addFirstTiming(`composer.html`, {
            serialTimingGroup: `pageLoad`,
            source: `entry.client`
        }), i.setSubmetric(`composerHtmlDurationMs`, performance.now())
    }, window.__oai_SSR_TTI ? (x.instance.addFirstTiming(`composer.visible`, {
        time: window.__oai_SSR_TTI,
        serialTimingGroup: `pageLoad`,
        source: `inline-script`
    }), i.setSubmetric(`composerVisibleDurationMs`, window.__oai_SSR_TTI - performance.timeOrigin)) : window.__oai_logTTI = () => {
        x.instance.addFirstTiming(`composer.visible`, {
            serialTimingGroup: `pageLoad`,
            source: `entry.client`
        }), i.setSubmetric(`composerVisibleDurationMs`, performance.now())
    }, y(), x.instance.addTiming(`entry.client`, {
        serialTimingGroup: `pageLoad`
    }), i.setSubmetric(`entryClientDurationMs`, performance.now()), X = e => {
        let t = window.__reactRouterManifest;
        if (!t || !e.stripModulepreloadImports) return;
        let n = G(t);
        window.__reactRouterManifest = n, window.__reactRouterContext?.manifest && (window.__reactRouterContext = {
            ...window.__reactRouterContext,
            manifest: n
        })
    }, Z = e => {
        e.isOpaqueNoAuthDisabledLandingPageEnabled && Promise.all([w(() => import(`./conversation-small-fym1zmu9zimymmm1.js`).then(e => (e.Btt(), e.Vtt)), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8])), w(() => import(`./4813494d-cb22y2w19zwyshmt.js`).then(e => (e.b0(), e.x0)), __vite__mapDeps([2, 1, 3, 4]))]).then(([{
            LoginForm: e
        }, {
            AuthModal: t
        }]) => {
            t.prefetch(), e.prefetch()
        })
    }, Q = d(), Q.entryContext = P(Q.entryContext, window.location.href), B(Q.cspScriptNonce), X(Q), Z(Q), $ = () => {
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
            l(`hydrate.start`), m.start(), (0, J.hydrateRoot)(document, (0, Y.jsxs)(q.StrictMode, {
                children: [null, (0, Y.jsx)(T, {
                    instrumentations: [f]
                })]
            }), {
                onRecoverableError(t, n) {
                    m.recoverableError(t);
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
                    a.name = `RecoverableError`, a.stack = n.componentStack ?? (t instanceof Error ? t.stack : String(t)), a.cause = t, x.instance.addError(a)
                }
            })
        })
    }, $()
}))();
//# sourceMappingURL=entry.client-cm48sm9o.js.map