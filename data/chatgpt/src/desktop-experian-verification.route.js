export const __rspack_esm_ids = [839024];
export const __webpack_modules__ = {
    QXa0: (function(a, b, c) {
        c.d(b, {
            a: () => i
        });
        var d = c("rEML"),
            e = c("ABep"),
            f = c("QosV"),
            g = c("t5jb");

        function h(a) {
            let b = window.experianDesktopVerification;
            if (null == a || !b) return;
            let c = new AbortController,
                {
                    signal: d
                } = c;
            return b.takeRequest().then(async c => {
                if (d.aborted) return;
                let e = await (0, g.c)({
                    ...c,
                    getContainer: () => a,
                    signal: d
                });
                d.aborted || b.finish(e)
            }).catch(() => {
                d.aborted || b.finish({
                    kind: 2
                })
            }), () => c.abort()
        }
        var i = (0, d.kb)(function() {
            let a, b = (0, f.c)(1);
            return b[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, e.jsx)("div", {
                className: "fixed inset-0 flex [scrollbar-gutter:stable_both-edges] flex-col overflow-auto bg-surface",
                children: (0, e.jsx)("div", {
                    ref: h,
                    className: "m-auto w-112 max-w-full shrink-0"
                })
            }), b[0] = a) : a = b[0], a
        })
    }),
    t5jb: (function(a, b, c) {
        c.d(b, {
            a: () => l,
            b: () => e,
            c: () => k
        });
        let d = new Set(["verified", "failed", "expired", "processing", "requires_action"]);

        function e(a) {
            let b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : crypto.randomUUID(),
                c = 0,
                e = !1;
            return (h, i, j, k) => {
                if (!e) {
                    e = "finish" === h, c += 1;
                    try {
                        let e = f(j) ? j : void 0,
                            l = f(e?.apiResponse) ? e.apiResponse : void 0,
                            m = e?.status,
                            n = l?.status ?? k,
                            o = e?.verification_id;
                        a({
                            "experian.attempt_id": b,
                            "experian.sequence": c,
                            "experian.event": h,
                            "experian.environment": "SANDBOX" === i || "PRODUCTION" === i ? i : "unknown",
                            "experian.has_details": void 0 !== e,
                            "experian.status": null == m ? "missing" : "string" == typeof m && d.has(m) ? m : "unrecognized",
                            "experian.verification_id_state": function(a) {
                                if (null == a) return "missing";
                                if ("string" != typeof a) return "invalid";
                                let b = a.trim();
                                return "" === b || "null" === b.toLowerCase() ? "invalid" : "valid"
                            }(o),
                            "experian.has_verification_id": "string" == typeof o && o.trim().length > 0,
                            "experian.next_action": g(e?.next_action),
                            "experian.code": g(l?.code ?? e?.code),
                            "experian.http_status": "number" == typeof n && Number.isInteger(n) && n >= 100 && n <= 599 ? n : void 0,
                            "experian.outcome": "finish" !== h ? void 0 : e?.kind === 0 ? "verified" : e?.kind === 1 ? "cancelled" : e?.kind === 2 ? "failed" : void 0
                        })
                    } catch {}
                }
            }
        }

        function f(a) {
            return "object" == typeof a && null != a && !Array.isArray(a)
        }

        function g(a) {
            return null == a || "" === a ? "missing" : "redacted"
        }
        let h = "on-error",
            i = () => c.e(182724).then(c.bind(c, "p0SC"));

        function j() {
            try {
                window.localStorage.removeItem("connected_solutions_ee_session")
            } catch {
                return
            }
        }

        function k(a) {
            let {
                appearance: b,
                getContainer: c,
                label: d = "Experian identity verification",
                loadSdk: e = i,
                theme: f = "light",
                verificationToken: g,
                providerEnvironment: k,
                signal: l,
                onDiagnosticEvent: m
            } = a;
            return new Promise(a => {
                let i = new AbortController,
                    n = b => {
                        i.abort(), m?.("finish", k, {
                            kind: b.kind,
                            verification_id: b.verificationId
                        }), a(b)
                    },
                    o = () => n({
                        kind: 1
                    }),
                    p = (a, b, c) => {
                        a.addEventListener(b, a => {
                            let d = a instanceof CustomEvent ? a.detail : void 0,
                                e = "object" == typeof d && null != d && "experienceDetails" in d ? d.experienceDetails : void 0,
                                f = null == e && b === h && "object" == typeof d && null != d && "data" in d && "object" == typeof d.data && null != d.data && "status" in d.data ? d.data.status : void 0;
                            m?.(b, k, e, f), c?.(e)
                        }, {
                            signal: i.signal
                        })
                    };
                l.aborted ? o() : (l.addEventListener("abort", o, {
                    once: !0,
                    signal: i.signal
                }), (async () => {
                    m?.("start", void 0);
                    let {
                        registerIdentityVerification: a
                    } = await e();
                    a(), i.signal.aborted || (m?.("mount", k), (() => {
                        let a, e, l = c();
                        if (null === l) return o();
                        let m = document.createElement("identity-verification");
                        m.style.colorScheme = "normal", m.setAttribute("appearance", JSON.stringify((a = b?.identityVerification, {
                            ...void 0 === (e = a?.[f]) ? {} : {
                                theme: {
                                    header_text_color: e.headingText,
                                    panel_background_color: e.surface,
                                    primary_color: e.buttonEnabledBg,
                                    widget_background_color: e.sheetBg,
                                    body1: {
                                        color: e.mutedText
                                    },
                                    body3: {
                                        color: e.mutedText
                                    },
                                    primary_button: {
                                        border_color: e.buttonEnabledBg,
                                        button_disabled_border_color: e.buttonDisabledBg,
                                        button_focused_border_color: e.buttonEnabledBg,
                                        button_focused_outline: e.focusBorder,
                                        button_hover_border_color: e.buttonEnabledHoverBg,
                                        button_pressed_border_color: e.buttonEnabledBg
                                    },
                                    widget_border_color: e.faintText,
                                    widget_border_weight: "0px"
                                }
                            },
                            components: {
                                identityVerification: {
                                    layout: {
                                        show_disclosure: !0
                                    },
                                    styles: {
                                        color_scheme: f,
                                        light: a?.light,
                                        dark: a?.dark
                                    }
                                }
                            }
                        }))), m.setAttribute("aria-label", d), m.setAttribute("environment", k), m.setAttribute("role", "region"), m.setAttribute("token", g), p(m, "on-load"), p(m, "on-ready"), p(m, "on-status-change"), p(m, "on-verification-complete", a => {
                            let b, c;
                            return n((b = !("object" != typeof a || null == a || Array.isArray(a)) && ["status", "verification_id"].every(b => {
                                let c = Reflect.get(a, b);
                                return null == c || "string" == typeof c
                            }) ? a : void 0, c = b?.verification_id, b?.status === "verified" && c ? {
                                kind: 0,
                                verificationId: c
                            } : {
                                kind: 2,
                                verificationId: b?.status === "failed" || b?.status === "expired" ? c ?? void 0 : void 0
                            }))
                        }), p(m, h, () => n({
                            kind: 2
                        })), p(m, "on-close", o);
                        let q = new MutationObserver(() => {
                                let a = m.querySelector("iframe");
                                a && (a.setAttribute("referrerpolicy", "origin"), q.disconnect())
                            }),
                            r = () => {
                                q.disconnect();
                                if (m.removeAttribute("token"), "formElement" in m && m.formElement instanceof HTMLFormElement)
                                    for (let a of m.formElement.querySelectorAll('input[name="token"]')) a.value = "", a.removeAttribute("value");
                                "context" in m && "object" == typeof m.context && null != m.context && Reflect.deleteProperty(m.context, "authToken"), m.removeAttribute("environment"), m.remove()
                            };
                        if (i.signal.aborted) return r();
                        i.signal.addEventListener("abort", r, {
                            once: !0
                        }), q.observe(m, {
                            childList: !0,
                            subtree: !0
                        }), j();
                        try {
                            l.append(m)
                        } finally {
                            j()
                        }
                    })())
                })().catch(a => {
                    throw m?.("start_failed", k), a
                }).catch(() => n({
                    kind: 2
                })))
            })
        }

        function l(a) {
            let b, {
                runVerification: c = k,
                getContainer: d,
                getTheme: e,
                label: f,
                onCompleted: g
            } = a;
            return {
                async runCreditVerification(a, g, h) {
                    if (null != b || null == d()) return {
                        kind: 2
                    };
                    b = new AbortController;
                    try {
                        return await c({
                            appearance: h,
                            getContainer: d,
                            label: f,
                            theme: e(),
                            verificationToken: g,
                            providerEnvironment: a.environment,
                            signal: b.signal
                        })
                    } finally {
                        b = void 0
                    }
                },
                closeCreditVerification: () => b?.abort(),
                onCreditVerificationCompleted: g
            }
        }
    })
};
import {
    __webpack_require__ as a
} from "./633146.192293cdfd.js";
import * as b from "./418851.373d5e7c7d.js";
a.C(b);
import * as c from "./109308.6f7ef1dfb7.js";
a.C(c);
import * as d from "./399565.61ce507128.js";
a.C(d);
import * as e from "./257798.18e3fd1164.js";
a.C(e);
import * as f from "./447351.05632d2214.js";
a.C(f);
import * as g from "./617936.82c33d1781.js";
a.C(g);
import * as h from "./807489.80226d951f.js";
a.C(h);
import * as i from "./337882.c48859a67a.js";
a.C(i);
import * as j from "./955979.3817544990.js";
a.C(j);
import * as k from "./646436.8f73ec6517.js";
a.C(k);
import * as l from "./7078.fb59bca78c.js";
a.C(l);
import * as m from "./200429.7f45d5c86a.js";
a.C(m);
import * as n from "./698524.906978efe4.js";
a.C(n);
import * as o from "./956483.b7886e0470.js";
a.C(o);
import * as p from "./87162.563f0c8e80.js";
a.C(p);
import * as q from "./396705.5e3411e749.js";
a.C(q);
import * as r from "./155568.5b6ea1007a.js";
a.C(r);
import * as s from "./731863.5065e21881.js";
a.C(s);
import * as t from "./767086.2154dca9c8.js";
a.C(t);
import * as u from "./76629.6adf997716.js";
a.C(u);
import * as v from "./226913.748570e15f.js";
a.C(v);
import * as w from "./839024.3e79fcf755.js";
a.C(w);
var x = a(a.s = "QXa0").a;
export {
    x as
    default
};