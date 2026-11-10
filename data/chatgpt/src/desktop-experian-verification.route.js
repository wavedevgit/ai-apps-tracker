export const __rspack_esm_ids = [839024];
export const __webpack_modules__ = {
    FRTw: (function(e, t, r) {
        r.d(t, {
            a: () => d
        });
        var o = r("jqIZ"),
            i = r("ABep"),
            n = r("QosV"),
            a = r("t5jb");

        function s(e) {
            let t = window.experianDesktopVerification;
            if (null == e || !t) return;
            let r = new AbortController,
                {
                    signal: o
                } = r;
            return t.takeRequest().then(async r => {
                if (o.aborted) return;
                let i = await (0, a.c)({
                    ...r,
                    getContainer: () => e,
                    signal: o
                });
                o.aborted || t.finish(i)
            }).catch(() => {
                o.aborted || t.finish({
                    kind: 2
                })
            }), () => r.abort()
        }
        var d = (0, o.hb)(function() {
            let e, t = (0, n.c)(1);
            return t[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)("div", {
                className: "fixed inset-0 flex [scrollbar-gutter:stable_both-edges] flex-col overflow-auto bg-surface",
                children: (0, i.jsx)("div", {
                    ref: s,
                    className: "m-auto w-112 max-w-full shrink-0"
                })
            }), t[0] = e) : e = t[0], e
        })
    }),
    t5jb: (function(e, t, r) {
        r.d(t, {
            a: () => f,
            b: () => i,
            c: () => c
        });
        let o = new Set(["verified", "failed", "expired", "processing", "requires_action"]);

        function i(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : crypto.randomUUID(),
                r = 0,
                i = !1;
            return (s, d, l, c) => {
                if (!i) {
                    i = "finish" === s, r += 1;
                    try {
                        let i = n(l) ? l : void 0,
                            f = n(i?.apiResponse) ? i.apiResponse : void 0,
                            m = i?.status,
                            u = f?.status ?? c,
                            p = i?.verification_id;
                        e({
                            "experian.attempt_id": t,
                            "experian.sequence": r,
                            "experian.event": s,
                            "experian.environment": "SANDBOX" === d || "PRODUCTION" === d ? d : "unknown",
                            "experian.has_details": void 0 !== i,
                            "experian.status": null == m ? "missing" : "string" == typeof m && o.has(m) ? m : "unrecognized",
                            "experian.verification_id_state": function(e) {
                                if (null == e) return "missing";
                                if ("string" != typeof e) return "invalid";
                                let t = e.trim();
                                return "" === t || "null" === t.toLowerCase() ? "invalid" : "valid"
                            }(p),
                            "experian.has_verification_id": "string" == typeof p && p.trim().length > 0,
                            "experian.next_action": a(i?.next_action),
                            "experian.code": a(f?.code ?? i?.code),
                            "experian.http_status": "number" == typeof u && Number.isInteger(u) && u >= 100 && u <= 599 ? u : void 0,
                            "experian.outcome": "finish" !== s ? void 0 : i?.kind === 0 ? "verified" : i?.kind === 1 ? "cancelled" : i?.kind === 2 ? "failed" : void 0
                        })
                    } catch {}
                }
            }
        }

        function n(e) {
            return "object" == typeof e && null != e && !Array.isArray(e)
        }

        function a(e) {
            return null == e || "" === e ? "missing" : "redacted"
        }
        let s = "on-error",
            d = () => r.e(182724).then(r.bind(r, "p0SC"));

        function l() {
            try {
                window.localStorage.removeItem("connected_solutions_ee_session")
            } catch {
                return
            }
        }

        function c(e) {
            let {
                appearance: t,
                getContainer: r,
                label: o = "Experian identity verification",
                loadSdk: i = d,
                theme: n = "light",
                verificationToken: a,
                providerEnvironment: c,
                signal: f,
                onDiagnosticEvent: m
            } = e;
            return new Promise(e => {
                let d = new AbortController,
                    u = t => {
                        d.abort(), m?.("finish", c, {
                            kind: t.kind,
                            verification_id: t.verificationId
                        }), e(t)
                    },
                    p = () => u({
                        kind: 1
                    }),
                    b = (e, t, r) => {
                        e.addEventListener(t, e => {
                            let o = e instanceof CustomEvent ? e.detail : void 0,
                                i = "object" == typeof o && null != o && "experienceDetails" in o ? o.experienceDetails : void 0,
                                n = null == i && t === s && "object" == typeof o && null != o && "data" in o && "object" == typeof o.data && null != o.data && "status" in o.data ? o.data.status : void 0;
                            m?.(t, c, i, n), r?.(i)
                        }, {
                            signal: d.signal
                        })
                    };
                f.aborted ? p() : (f.addEventListener("abort", p, {
                    once: !0,
                    signal: d.signal
                }), (async () => {
                    m?.("start", void 0);
                    let {
                        registerIdentityVerification: e
                    } = await i();
                    e(), d.signal.aborted || (m?.("mount", c), (() => {
                        let e, i, f = r();
                        if (null === f) return p();
                        let m = document.createElement("identity-verification");
                        m.style.colorScheme = "normal", m.setAttribute("appearance", JSON.stringify((e = t?.identityVerification, {
                            ...void 0 === (i = e?.[n]) ? {} : {
                                theme: {
                                    header_text_color: i.headingText,
                                    panel_background_color: i.surface,
                                    primary_color: i.buttonEnabledBg,
                                    widget_background_color: i.sheetBg,
                                    body1: {
                                        color: i.mutedText
                                    },
                                    body3: {
                                        color: i.mutedText
                                    },
                                    primary_button: {
                                        border_color: i.buttonEnabledBg,
                                        button_disabled_border_color: i.buttonDisabledBg,
                                        button_focused_border_color: i.buttonEnabledBg,
                                        button_focused_outline: i.focusBorder,
                                        button_hover_border_color: i.buttonEnabledHoverBg,
                                        button_pressed_border_color: i.buttonEnabledBg
                                    },
                                    widget_border_color: i.faintText,
                                    widget_border_weight: "0px"
                                }
                            },
                            components: {
                                identityVerification: {
                                    layout: {
                                        show_disclosure: !0
                                    },
                                    styles: {
                                        color_scheme: n,
                                        light: e?.light,
                                        dark: e?.dark
                                    }
                                }
                            }
                        }))), m.setAttribute("aria-label", o), m.setAttribute("environment", c), m.setAttribute("role", "region"), m.setAttribute("token", a), b(m, "on-load"), b(m, "on-ready"), b(m, "on-status-change"), b(m, "on-verification-complete", e => {
                            let t, r;
                            return u((t = !("object" != typeof e || null == e || Array.isArray(e)) && ["status", "verification_id"].every(t => {
                                let r = Reflect.get(e, t);
                                return null == r || "string" == typeof r
                            }) ? e : void 0, r = t?.verification_id, t?.status === "verified" && r ? {
                                kind: 0,
                                verificationId: r
                            } : {
                                kind: 2,
                                verificationId: t?.status === "failed" || t?.status === "expired" ? r ?? void 0 : void 0
                            }))
                        }), b(m, s, () => u({
                            kind: 2
                        })), b(m, "on-close", p);
                        let _ = new MutationObserver(() => {
                                let e = m.querySelector("iframe");
                                e && (e.setAttribute("referrerpolicy", "origin"), _.disconnect())
                            }),
                            v = () => {
                                _.disconnect();
                                if (m.removeAttribute("token"), "formElement" in m && m.formElement instanceof HTMLFormElement)
                                    for (let e of m.formElement.querySelectorAll('input[name="token"]')) e.value = "", e.removeAttribute("value");
                                "context" in m && "object" == typeof m.context && null != m.context && Reflect.deleteProperty(m.context, "authToken"), m.removeAttribute("environment"), m.remove()
                            };
                        if (d.signal.aborted) return v();
                        d.signal.addEventListener("abort", v, {
                            once: !0
                        }), _.observe(m, {
                            childList: !0,
                            subtree: !0
                        }), l();
                        try {
                            f.append(m)
                        } finally {
                            l()
                        }
                    })())
                })().catch(e => {
                    throw m?.("start_failed", c), e
                }).catch(() => u({
                    kind: 2
                })))
            })
        }

        function f(e) {
            let t, {
                runVerification: r = c,
                getContainer: o,
                getTheme: i,
                label: n,
                onCompleted: a
            } = e;
            return {
                async runCreditVerification(e, a, s) {
                    if (null != t || null == o()) return {
                        kind: 2
                    };
                    t = new AbortController;
                    try {
                        return await r({
                            appearance: s,
                            getContainer: o,
                            label: n,
                            theme: i(),
                            verificationToken: a,
                            providerEnvironment: e.environment,
                            signal: t.signal
                        })
                    } finally {
                        t = void 0
                    }
                },
                closeCreditVerification: () => t?.abort(),
                onCreditVerificationCompleted: a
            }
        }
    })
};
import {
    __webpack_require__ as e
} from "./633146.f7301c241c.js";
import * as t from "./418851.9d6542c0a3.js";
e.C(t);
import * as r from "./109308.fbb414d4aa.js";
e.C(r);
import * as o from "./399565.ed5e74a86b.js";
e.C(o);
import * as i from "./257798.0b3d6025cd.js";
e.C(i);
import * as n from "./153380.6675e448cd.js";
e.C(n);
import * as a from "./617936.1be6495150.js";
e.C(a);
import * as s from "./807489.cf46a1fcce.js";
e.C(s);
import * as d from "./337882.e80888e843.js";
e.C(d);
import * as l from "./955979.6fabb942db.js";
e.C(l);
import * as c from "./646436.4f8e34a529.js";
e.C(c);
import * as f from "./7078.b1d26369b8.js";
e.C(f);
import * as m from "./200429.e4432be69e.js";
e.C(m);
import * as u from "./698524.91ff895348.js";
e.C(u);
import * as p from "./956483.aa76e97d2f.js";
e.C(p);
import * as b from "./87162.29ee0bd2a9.js";
e.C(b);
import * as _ from "./396705.c39944bbf2.js";
e.C(_);
import * as v from "./155568.7bbfb72b85.js";
e.C(v);
import * as g from "./731863.8b87e9728a.js";
e.C(g);
import * as y from "./767086.6da4be4bcc.js";
e.C(y);
import * as j from "./76629.0d0b0e4ffa.js";
e.C(j);
import * as C from "./514085.b43cbf5099.js";
e.C(C);
import * as h from "./204542.9e7fde25b9.js";
e.C(h);
import * as x from "./982651.7bfd071e83.js";
e.C(x);
import * as w from "./673108.f09bd0f99c.js";
e.C(w);
import * as k from "./487481.c884695c4d.js";
e.C(k);
import * as A from "./229522.4fa6d25393.js";
e.C(A);
import * as E from "./390575.db69fec7f2.js";
e.C(E);
import * as B from "./353032.cc07e31e0d.js";
e.C(B);
import * as S from "./637885.ca6d736a13.js";
e.C(S);
import * as T from "./226913.6965f848b1.js";
e.C(T);
import * as R from "./839024.7e9d1b2a26.js";
e.C(R);
var D = e(e.s = "FRTw").a;
export {
    D as
    default
};