export const __rspack_esm_ids = [839024];
export const __webpack_modules__ = {
    FRTw: (function(e, t, o) {
        o.d(t, {
            a: () => l
        });
        var r = o("jqIZ"),
            i = o("ABep"),
            n = o("QosV"),
            a = o("zfIO");

        function s(e) {
            let t = window.experianDesktopVerification;
            if (null == e || !t) return;
            let o = new AbortController,
                {
                    signal: r
                } = o;
            return t.takeRequest().then(async o => {
                if (r.aborted) return;
                let i = await (0, a.b)({
                    ...o,
                    getContainer: () => e,
                    signal: r
                });
                r.aborted || t.finish(i)
            }).catch(() => {
                r.aborted || t.finish({
                    kind: 2
                })
            }), () => o.abort()
        }
        var l = (0, r.hb)(function() {
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
    zfIO: (function(e, t, o) {
        let r = () => o.e(182724).then(o.bind(o, "p0SC"));

        function i() {
            try {
                window.localStorage.removeItem("connected_solutions_ee_session")
            } catch {
                return
            }
        }

        function n(e) {
            let {
                appearance: t,
                getContainer: o,
                label: n = "Experian identity verification",
                loadSdk: a = r,
                theme: s = "light",
                verificationToken: l,
                providerEnvironment: d,
                signal: f,
                onDiagnosticEvent: c
            } = e;
            return new Promise(e => {
                let r = new AbortController,
                    m = t => {
                        r.abort(), e(t)
                    },
                    b = () => m({
                        kind: 1
                    }),
                    u = (e, t, o) => {
                        e.addEventListener(t, e => {
                            let r = e instanceof CustomEvent ? e.detail : void 0,
                                i = "object" == typeof r && null != r && "experienceDetails" in r ? r.experienceDetails : void 0;
                            c?.(t, d, i), o?.(i)
                        }, {
                            signal: r.signal
                        })
                    };
                f.aborted ? b() : (f.addEventListener("abort", b, {
                    once: !0,
                    signal: r.signal
                }), (async () => {
                    c?.("start", void 0);
                    let {
                        registerIdentityVerification: e
                    } = await a();
                    e(), r.signal.aborted || (c?.("mount", d), (() => {
                        let e, a, f = o();
                        if (null === f) return b();
                        let c = document.createElement("identity-verification");
                        c.style.colorScheme = "normal", c.setAttribute("appearance", JSON.stringify((e = t?.identityVerification, {
                            ...void 0 === (a = e?.[s]) ? {} : {
                                theme: {
                                    header_text_color: a.headingText,
                                    panel_background_color: a.surface,
                                    primary_color: a.buttonEnabledBg,
                                    widget_background_color: a.sheetBg,
                                    body1: {
                                        color: a.mutedText
                                    },
                                    body3: {
                                        color: a.mutedText
                                    },
                                    primary_button: {
                                        border_color: a.buttonEnabledBg,
                                        button_disabled_border_color: a.buttonDisabledBg,
                                        button_focused_border_color: a.buttonEnabledBg,
                                        button_focused_outline: a.focusBorder,
                                        button_hover_border_color: a.buttonEnabledHoverBg,
                                        button_pressed_border_color: a.buttonEnabledBg
                                    },
                                    widget_border_color: a.faintText,
                                    widget_border_weight: "0px"
                                }
                            },
                            components: {
                                identityVerification: {
                                    layout: {
                                        show_disclosure: !0
                                    },
                                    styles: {
                                        color_scheme: s,
                                        light: e?.light,
                                        dark: e?.dark
                                    }
                                }
                            }
                        }))), c.setAttribute("aria-label", n), c.setAttribute("environment", d), c.setAttribute("role", "region"), c.setAttribute("token", l), u(c, "on-load"), u(c, "on-ready"), u(c, "on-status-change"), u(c, "on-verification-complete", e => {
                            let t, o;
                            return m((t = !("object" != typeof e || null == e || Array.isArray(e)) && ["status", "verification_id"].every(t => {
                                let o = Reflect.get(e, t);
                                return null == o || "string" == typeof o
                            }) ? e : void 0, o = t?.verification_id, t?.status === "verified" && o ? {
                                kind: 0,
                                verificationId: o
                            } : {
                                kind: 2,
                                verificationId: t?.status === "failed" || t?.status === "expired" ? o ?? void 0 : void 0
                            }))
                        }), u(c, "on-error", () => m({
                            kind: 2
                        })), u(c, "on-close", b);
                        let p = new MutationObserver(() => {
                                let e = c.querySelector("iframe");
                                e && (e.setAttribute("referrerpolicy", "origin"), p.disconnect())
                            }),
                            _ = () => {
                                p.disconnect();
                                if (c.removeAttribute("token"), "formElement" in c && c.formElement instanceof HTMLFormElement)
                                    for (let e of c.formElement.querySelectorAll('input[name="token"]')) e.value = "", e.removeAttribute("value");
                                "context" in c && "object" == typeof c.context && null != c.context && Reflect.deleteProperty(c.context, "authToken"), c.removeAttribute("environment"), c.remove()
                            };
                        if (r.signal.aborted) return _();
                        r.signal.addEventListener("abort", _, {
                            once: !0
                        }), p.observe(c, {
                            childList: !0,
                            subtree: !0
                        }), i();
                        try {
                            f.append(c)
                        } finally {
                            i()
                        }
                    })())
                })().catch(e => {
                    throw c?.("start_failed", d), e
                }).catch(() => m({
                    kind: 2
                })))
            })
        }
        o.d(t, {}, {
            a: function(e) {
                let t, {
                    runVerification: o = n,
                    getContainer: r,
                    getTheme: i,
                    label: a,
                    onCompleted: s
                } = e;
                return {
                    async runCreditVerification(e, n, s) {
                        if (null != t || null == r()) return {
                            kind: 2
                        };
                        t = new AbortController;
                        try {
                            return await o({
                                appearance: s,
                                getContainer: r,
                                label: a,
                                theme: i(),
                                verificationToken: n,
                                providerEnvironment: e.environment,
                                signal: t.signal
                            })
                        } finally {
                            t = void 0
                        }
                    },
                    closeCreditVerification: () => t?.abort(),
                    onCreditVerificationCompleted: s
                }
            },
            b: n
        })
    })
};
import {
    __webpack_require__ as e
} from "./633146.a85b352259.js";
import * as t from "./418851.b418272bca.js";
e.C(t);
import * as o from "./109308.fbb414d4aa.js";
e.C(o);
import * as r from "./399565.a7f9c29dec.js";
e.C(r);
import * as i from "./257798.0b3d6025cd.js";
e.C(i);
import * as n from "./153380.6675e448cd.js";
e.C(n);
import * as a from "./617936.ed57a1bdc2.js";
e.C(a);
import * as s from "./807489.02ba855c8c.js";
e.C(s);
import * as l from "./337882.b1c17957d2.js";
e.C(l);
import * as d from "./955979.f40606391d.js";
e.C(d);
import * as f from "./646436.df466850ff.js";
e.C(f);
import * as c from "./7078.f43056bf4f.js";
e.C(c);
import * as m from "./200429.f5468a7d9e.js";
e.C(m);
import * as b from "./698524.29c67652d0.js";
e.C(b);
import * as u from "./956483.0463ebd3e8.js";
e.C(u);
import * as p from "./87162.29ee0bd2a9.js";
e.C(p);
import * as _ from "./396705.c39944bbf2.js";
e.C(_);
import * as v from "./155568.7bbfb72b85.js";
e.C(v);
import * as C from "./731863.8b87e9728a.js";
e.C(C);
import * as j from "./767086.6da4be4bcc.js";
e.C(j);
import * as g from "./76629.4b3a6c11d6.js";
e.C(g);
import * as y from "./514085.5cd44b3418.js";
e.C(y);
import * as h from "./204542.555643bfb3.js";
e.C(h);
import * as w from "./982651.7bfd071e83.js";
e.C(w);
import * as x from "./673108.84888467b6.js";
e.C(x);
import * as k from "./487481.d4be37a58a.js";
e.C(k);
import * as A from "./229522.ddc021d49b.js";
e.C(A);
import * as E from "./390575.92d962cefa.js";
e.C(E);
import * as B from "./353032.7103e0705d.js";
e.C(B);
import * as T from "./637885.ac5c2e9cdb.js";
e.C(T);
import * as S from "./226913.b323f04fd6.js";
e.C(S);
import * as V from "./839024.8323adcfef.js";
e.C(V);
var I = e(e.s = "FRTw").a;
export {
    I as
    default
};