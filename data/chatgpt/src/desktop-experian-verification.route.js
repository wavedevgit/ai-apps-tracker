export const __rspack_esm_ids = [839024];
export const __webpack_modules__ = {
    QXa0: (function(e, t, r) {
        r.d(t, {
            a: () => l
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
        var l = (0, o.hb)(function() {
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
                            b = i?.verification_id;
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
                            }(b),
                            "experian.has_verification_id": "string" == typeof b && b.trim().length > 0,
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
                    b = () => m({
                        kind: 1
                    }),
                    p = (e, t, r) => {
                        e.addEventListener(t, e => {
                            let o = e instanceof CustomEvent ? e.detail : void 0,
                                i = "object" == typeof o && null != o && "experienceDetails" in o ? o.experienceDetails : void 0,
                                n = null == i && t === s && "object" == typeof o && null != o && "data" in o && "object" == typeof o.data && null != o.data && "status" in o.data ? o.data.status : void 0;
                            u?.(t, c, i, n), r?.(i)
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
                    } = await i();
                    e(), l.signal.aborted || (u?.("mount", c), (() => {
                        let e, i, f = r();
                        if (null === f) return b();
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
                        }))), u.setAttribute("aria-label", o), u.setAttribute("environment", c), u.setAttribute("role", "region"), u.setAttribute("token", a), p(u, "on-load"), p(u, "on-ready"), p(u, "on-status-change"), p(u, "on-verification-complete", e => {
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
} from "./633146.de799da76f.js";
import * as t from "./418851.915eb36248.js";
e.C(t);
import * as r from "./109308.e66696cd0d.js";
e.C(r);
import * as o from "./399565.6af208675d.js";
e.C(o);
import * as i from "./257798.b51742efd5.js";
e.C(i);
import * as n from "./447351.984c166fc8.js";
e.C(n);
import * as a from "./617936.e33610e0b9.js";
e.C(a);
import * as s from "./807489.850de05ef3.js";
e.C(s);
import * as l from "./337882.5f151ee5b8.js";
e.C(l);
import * as d from "./955979.9e9440262c.js";
e.C(d);
import * as c from "./646436.03e4f4565c.js";
e.C(c);
import * as f from "./7078.feaab618bd.js";
e.C(f);
import * as u from "./200429.333f7655c5.js";
e.C(u);
import * as m from "./698524.dcafe4f0ed.js";
e.C(m);
import * as b from "./956483.aba2ca38e0.js";
e.C(b);
import * as p from "./87162.5b3170a587.js";
e.C(p);
import * as _ from "./396705.7a4525a973.js";
e.C(_);
import * as v from "./155568.76836d52b2.js";
e.C(v);
import * as g from "./731863.17b468ae96.js";
e.C(g);
import * as y from "./767086.ec4c8241bf.js";
e.C(y);
import * as h from "./76629.3da73a70ff.js";
e.C(h);
import * as x from "./514085.ed26950330.js";
e.C(x);
import * as j from "./226913.27c93050ff.js";
e.C(j);
import * as C from "./839024.2bf08ff3af.js";
e.C(C);
var k = e(e.s = "QXa0").a;
export {
    k as
    default
};