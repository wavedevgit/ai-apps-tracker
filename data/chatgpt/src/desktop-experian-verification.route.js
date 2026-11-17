export const __rspack_esm_ids = [839024];
export const __webpack_modules__ = {
    QXa0: (function(e, t, r) {
        r.d(t, {
            a: () => l
        });
        var o = r("rEML"),
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
        var l = (0, o.ib)(function() {
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
            return (s, l, d, c) => {
                if (!i) {
                    i = "finish" === s, r += 1;
                    try {
                        let i = n(d) ? d : void 0,
                            f = n(i?.apiResponse) ? i.apiResponse : void 0,
                            u = i?.status,
                            m = f?.status ?? c,
                            p = i?.verification_id;
                        e({
                            "experian.attempt_id": t,
                            "experian.sequence": r,
                            "experian.event": s,
                            "experian.environment": "SANDBOX" === l || "PRODUCTION" === l ? l : "unknown",
                            "experian.has_details": void 0 !== i,
                            "experian.status": null == u ? "missing" : "string" == typeof u && o.has(u) ? u : "unrecognized",
                            "experian.verification_id_state": function(e) {
                                if (null == e) return "missing";
                                if ("string" != typeof e) return "invalid";
                                let t = e.trim();
                                return "" === t || "null" === t.toLowerCase() ? "invalid" : "valid"
                            }(p),
                            "experian.has_verification_id": "string" == typeof p && p.trim().length > 0,
                            "experian.next_action": a(i?.next_action),
                            "experian.code": a(f?.code ?? i?.code),
                            "experian.http_status": "number" == typeof m && Number.isInteger(m) && m >= 100 && m <= 599 ? m : void 0,
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
                label: o = "Experian identity verification",
                loadSdk: i = l,
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
                    p = () => m({
                        kind: 1
                    }),
                    b = (e, t, r) => {
                        e.addEventListener(t, e => {
                            let o = e instanceof CustomEvent ? e.detail : void 0,
                                i = "object" == typeof o && null != o && "experienceDetails" in o ? o.experienceDetails : void 0,
                                n = null == i && t === s && "object" == typeof o && null != o && "data" in o && "object" == typeof o.data && null != o.data && "status" in o.data ? o.data.status : void 0;
                            u?.(t, c, i, n), r?.(i)
                        }, {
                            signal: l.signal
                        })
                    };
                f.aborted ? p() : (f.addEventListener("abort", p, {
                    once: !0,
                    signal: l.signal
                }), (async () => {
                    u?.("start", void 0);
                    let {
                        registerIdentityVerification: e
                    } = await i();
                    e(), l.signal.aborted || (u?.("mount", c), (() => {
                        let e, i, f = r();
                        if (null === f) return p();
                        let u = document.createElement("identity-verification");
                        u.style.colorScheme = "normal", u.setAttribute("appearance", JSON.stringify((e = t?.identityVerification, {
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
                        }))), u.setAttribute("aria-label", o), u.setAttribute("environment", c), u.setAttribute("role", "region"), u.setAttribute("token", a), b(u, "on-load"), b(u, "on-ready"), b(u, "on-status-change"), b(u, "on-verification-complete", e => {
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
                        }), b(u, s, () => m({
                            kind: 2
                        })), b(u, "on-close", p);
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
} from "./633146.be60f96fcf.js";
import * as t from "./418851.d43ef6e51c.js";
e.C(t);
import * as r from "./109308.2094c16514.js";
e.C(r);
import * as o from "./399565.78e1c0aa0d.js";
e.C(o);
import * as i from "./257798.7e03f1e3e2.js";
e.C(i);
import * as n from "./447351.b188109392.js";
e.C(n);
import * as a from "./617936.fb76eb2727.js";
e.C(a);
import * as s from "./807489.9c1a8ccf71.js";
e.C(s);
import * as l from "./337882.5c43a2c90b.js";
e.C(l);
import * as d from "./955979.9ae2962bd4.js";
e.C(d);
import * as c from "./646436.b525bfd8f0.js";
e.C(c);
import * as f from "./7078.a82238bfec.js";
e.C(f);
import * as u from "./200429.3bcaa139a4.js";
e.C(u);
import * as m from "./698524.3de98ac6af.js";
e.C(m);
import * as p from "./956483.227ec74d56.js";
e.C(p);
import * as b from "./87162.36edabe123.js";
e.C(b);
import * as _ from "./396705.12275a5eb6.js";
e.C(_);
import * as v from "./155568.b3f888f917.js";
e.C(v);
import * as g from "./731863.367082aec0.js";
e.C(g);
import * as y from "./767086.1a336b6bc5.js";
e.C(y);
import * as x from "./76629.93a69b821a.js";
e.C(x);
import * as h from "./514085.fe0c9f50e5.js";
e.C(h);
import * as C from "./204542.f3712a1345.js";
e.C(C);
import * as j from "./226913.dd4de34d8f.js";
e.C(j);
import * as k from "./839024.673075b22b.js";
e.C(k);
var w = e(e.s = "QXa0").a;
export {
    w as
    default
};