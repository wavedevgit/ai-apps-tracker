export const __rspack_esm_ids = [839024];
export const __webpack_modules__ = {
    QXa0: (function(e, t, r) {
        r.d(t, {
            a: () => l
        });
        var i = r("rEML"),
            o = r("ABep"),
            n = r("QosV"),
            a = r("t5jb");

        function s(e) {
            let t = window.experianDesktopVerification;
            if (null == e || !t) return;
            let r = new AbortController,
                {
                    signal: i
                } = r;
            return t.takeRequest().then(async r => {
                if (i.aborted) return;
                let o = await (0, a.c)({
                    ...r,
                    getContainer: () => e,
                    signal: i
                });
                i.aborted || t.finish(o)
            }).catch(() => {
                i.aborted || t.finish({
                    kind: 2
                })
            }), () => r.abort()
        }
        var l = (0, i.kb)(function() {
            let e, t = (0, n.c)(1);
            return t[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, o.jsx)("div", {
                className: "fixed inset-0 flex [scrollbar-gutter:stable_both-edges] flex-col overflow-auto bg-surface",
                children: (0, o.jsx)("div", {
                    ref: s,
                    className: "m-auto w-112 max-w-full shrink-0"
                })
            }), t[0] = e) : e = t[0], e
        })
    }),
    t5jb: (function(e, t, r) {
        r.d(t, {
            a: () => f,
            b: () => o,
            c: () => c
        });
        let i = new Set(["verified", "failed", "expired", "processing", "requires_action"]);

        function o(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : crypto.randomUUID(),
                r = 0,
                o = !1;
            return (s, l, d, c) => {
                if (!o) {
                    o = "finish" === s, r += 1;
                    try {
                        let o = n(d) ? d : void 0,
                            f = n(o?.apiResponse) ? o.apiResponse : void 0,
                            u = o?.status,
                            m = f?.status ?? c,
                            b = o?.verification_id;
                        e({
                            "experian.attempt_id": t,
                            "experian.sequence": r,
                            "experian.event": s,
                            "experian.environment": "SANDBOX" === l || "PRODUCTION" === l ? l : "unknown",
                            "experian.has_details": void 0 !== o,
                            "experian.status": null == u ? "missing" : "string" == typeof u && i.has(u) ? u : "unrecognized",
                            "experian.verification_id_state": function(e) {
                                if (null == e) return "missing";
                                if ("string" != typeof e) return "invalid";
                                let t = e.trim();
                                return "" === t || "null" === t.toLowerCase() ? "invalid" : "valid"
                            }(b),
                            "experian.has_verification_id": "string" == typeof b && b.trim().length > 0,
                            "experian.next_action": a(o?.next_action),
                            "experian.code": a(f?.code ?? o?.code),
                            "experian.http_status": "number" == typeof m && Number.isInteger(m) && m >= 100 && m <= 599 ? m : void 0,
                            "experian.outcome": "finish" !== s ? void 0 : o?.kind === 0 ? "verified" : o?.kind === 1 ? "cancelled" : o?.kind === 2 ? "failed" : void 0
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
            l = () => r.e(182724).then(r.bind(r, "p0SC"));

        function d() {
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
                label: i = "Experian identity verification",
                loadSdk: o = l,
                theme: n = "light",
                verificationToken: a,
                providerEnvironment: c,
                signal: f,
                onDiagnosticEvent: u
            } = e;
            return new Promise(e => {
                let l = new AbortController,
                    m = t => {
                        l.abort(), u?.("finish", c, {
                            kind: t.kind,
                            verification_id: t.verificationId
                        }), e(t)
                    },
                    b = () => m({
                        kind: 1
                    }),
                    p = (e, t, r) => {
                        e.addEventListener(t, e => {
                            let i = e instanceof CustomEvent ? e.detail : void 0,
                                o = "object" == typeof i && null != i && "experienceDetails" in i ? i.experienceDetails : void 0,
                                n = null == o && t === s && "object" == typeof i && null != i && "data" in i && "object" == typeof i.data && null != i.data && "status" in i.data ? i.data.status : void 0;
                            u?.(t, c, o, n), r?.(o)
                        }, {
                            signal: l.signal
                        })
                    };
                f.aborted ? b() : (f.addEventListener("abort", b, {
                    once: !0,
                    signal: l.signal
                }), (async () => {
                    u?.("start", void 0);
                    let {
                        registerIdentityVerification: e
                    } = await o();
                    e(), l.signal.aborted || (u?.("mount", c), (() => {
                        let e, o, f = r();
                        if (null === f) return b();
                        let u = document.createElement("identity-verification");
                        u.style.colorScheme = "normal", u.setAttribute("appearance", JSON.stringify((e = t?.identityVerification, {
                            ...void 0 === (o = e?.[n]) ? {} : {
                                theme: {
                                    header_text_color: o.headingText,
                                    panel_background_color: o.surface,
                                    primary_color: o.buttonEnabledBg,
                                    widget_background_color: o.sheetBg,
                                    body1: {
                                        color: o.mutedText
                                    },
                                    body3: {
                                        color: o.mutedText
                                    },
                                    primary_button: {
                                        border_color: o.buttonEnabledBg,
                                        button_disabled_border_color: o.buttonDisabledBg,
                                        button_focused_border_color: o.buttonEnabledBg,
                                        button_focused_outline: o.focusBorder,
                                        button_hover_border_color: o.buttonEnabledHoverBg,
                                        button_pressed_border_color: o.buttonEnabledBg
                                    },
                                    widget_border_color: o.faintText,
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
                        }))), u.setAttribute("aria-label", i), u.setAttribute("environment", c), u.setAttribute("role", "region"), u.setAttribute("token", a), p(u, "on-load"), p(u, "on-ready"), p(u, "on-status-change"), p(u, "on-verification-complete", e => {
                            let t, r;
                            return m((t = !("object" != typeof e || null == e || Array.isArray(e)) && ["status", "verification_id"].every(t => {
                                let r = Reflect.get(e, t);
                                return null == r || "string" == typeof r
                            }) ? e : void 0, r = t?.verification_id, t?.status === "verified" && r ? {
                                kind: 0,
                                verificationId: r
                            } : {
                                kind: 2,
                                verificationId: t?.status === "failed" || t?.status === "expired" ? r ?? void 0 : void 0
                            }))
                        }), p(u, s, () => m({
                            kind: 2
                        })), p(u, "on-close", b);
                        let _ = new MutationObserver(() => {
                                let e = u.querySelector("iframe");
                                e && (e.setAttribute("referrerpolicy", "origin"), _.disconnect())
                            }),
                            v = () => {
                                _.disconnect();
                                if (u.removeAttribute("token"), "formElement" in u && u.formElement instanceof HTMLFormElement)
                                    for (let e of u.formElement.querySelectorAll('input[name="token"]')) e.value = "", e.removeAttribute("value");
                                "context" in u && "object" == typeof u.context && null != u.context && Reflect.deleteProperty(u.context, "authToken"), u.removeAttribute("environment"), u.remove()
                            };
                        if (l.signal.aborted) return v();
                        l.signal.addEventListener("abort", v, {
                            once: !0
                        }), _.observe(u, {
                            childList: !0,
                            subtree: !0
                        }), d();
                        try {
                            f.append(u)
                        } finally {
                            d()
                        }
                    })())
                })().catch(e => {
                    throw u?.("start_failed", c), e
                }).catch(() => m({
                    kind: 2
                })))
            })
        }

        function f(e) {
            let t, {
                runVerification: r = c,
                getContainer: i,
                getTheme: o,
                label: n,
                onCompleted: a
            } = e;
            return {
                async runCreditVerification(e, a, s) {
                    if (null != t || null == i()) return {
                        kind: 2
                    };
                    t = new AbortController;
                    try {
                        return await r({
                            appearance: s,
                            getContainer: i,
                            label: n,
                            theme: o(),
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
} from "./633146.2ddddba2a5.js";
import * as t from "./418851.f34514cc3f.js";
e.C(t);
import * as r from "./109308.8b09661749.js";
e.C(r);
import * as i from "./399565.edefe43a76.js";
e.C(i);
import * as o from "./257798.6b4268ddac.js";
e.C(o);
import * as n from "./447351.34d04099ca.js";
e.C(n);
import * as a from "./617936.4a1557f13c.js";
e.C(a);
import * as s from "./807489.6b5279adf3.js";
e.C(s);
import * as l from "./337882.568bafdf14.js";
e.C(l);
import * as d from "./955979.b2a7e19963.js";
e.C(d);
import * as c from "./646436.5963e38f02.js";
e.C(c);
import * as f from "./7078.0a9a41e515.js";
e.C(f);
import * as u from "./200429.a549930e29.js";
e.C(u);
import * as m from "./698524.48945354c5.js";
e.C(m);
import * as b from "./956483.962c0de04b.js";
e.C(b);
import * as p from "./87162.e4a69efaac.js";
e.C(p);
import * as _ from "./396705.51be923e43.js";
e.C(_);
import * as v from "./155568.1f7b7a00a5.js";
e.C(v);
import * as g from "./731863.5a49a2d190.js";
e.C(g);
import * as y from "./767086.61b8f8fca3.js";
e.C(y);
import * as x from "./226913.cf105b979e.js";
e.C(x);
import * as h from "./839024.a63f4925fd.js";
e.C(h);
var C = e(e.s = "QXa0").a;
export {
    C as
    default
};