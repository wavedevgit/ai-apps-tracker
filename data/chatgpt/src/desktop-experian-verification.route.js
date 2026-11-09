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
                signal: c,
                onDiagnosticEvent: f
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
                            f?.(t, d, i), o?.(i)
                        }, {
                            signal: r.signal
                        })
                    };
                c.aborted ? b() : (c.addEventListener("abort", b, {
                    once: !0,
                    signal: r.signal
                }), (async () => {
                    f?.("start", void 0);
                    let {
                        registerIdentityVerification: e
                    } = await a();
                    e(), r.signal.aborted || (f?.("mount", d), (() => {
                        let e, a, c = o();
                        if (null === c) return b();
                        let f = document.createElement("identity-verification");
                        f.style.colorScheme = "normal", f.setAttribute("appearance", JSON.stringify((e = t?.identityVerification, {
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
                        }))), f.setAttribute("aria-label", n), f.setAttribute("environment", d), f.setAttribute("role", "region"), f.setAttribute("token", l), u(f, "on-load"), u(f, "on-ready"), u(f, "on-status-change"), u(f, "on-verification-complete", e => {
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
                        }), u(f, "on-error", () => m({
                            kind: 2
                        })), u(f, "on-close", b);
                        let p = new MutationObserver(() => {
                                let e = f.querySelector("iframe");
                                e && (e.setAttribute("referrerpolicy", "origin"), p.disconnect())
                            }),
                            _ = () => {
                                p.disconnect();
                                if (f.removeAttribute("token"), "formElement" in f && f.formElement instanceof HTMLFormElement)
                                    for (let e of f.formElement.querySelectorAll('input[name="token"]')) e.value = "", e.removeAttribute("value");
                                "context" in f && "object" == typeof f.context && null != f.context && Reflect.deleteProperty(f.context, "authToken"), f.removeAttribute("environment"), f.remove()
                            };
                        if (r.signal.aborted) return _();
                        r.signal.addEventListener("abort", _, {
                            once: !0
                        }), p.observe(f, {
                            childList: !0,
                            subtree: !0
                        }), i();
                        try {
                            c.append(f)
                        } finally {
                            i()
                        }
                    })())
                })().catch(e => {
                    throw f?.("start_failed", d), e
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
} from "./633146.77f467ae88.js";
import * as t from "./418851.24af49562e.js";
e.C(t);
import * as o from "./109308.fbb414d4aa.js";
e.C(o);
import * as r from "./399565.a7f9c29dec.js";
e.C(r);
import * as i from "./257798.0b3d6025cd.js";
e.C(i);
import * as n from "./153380.6675e448cd.js";
e.C(n);
import * as a from "./617936.ab7454adbe.js";
e.C(a);
import * as s from "./807489.74b193586a.js";
e.C(s);
import * as l from "./337882.eb4e205b01.js";
e.C(l);
import * as d from "./955979.c147b344d3.js";
e.C(d);
import * as c from "./646436.92303256ff.js";
e.C(c);
import * as f from "./7078.1a10efd8a2.js";
e.C(f);
import * as m from "./200429.6705d27d2a.js";
e.C(m);
import * as b from "./698524.7253a53056.js";
e.C(b);
import * as u from "./956483.cb805cdd0f.js";
e.C(u);
import * as p from "./87162.636a6b2a55.js";
e.C(p);
import * as _ from "./396705.c39944bbf2.js";
e.C(_);
import * as v from "./155568.d3b291934c.js";
e.C(v);
import * as C from "./731863.8b87e9728a.js";
e.C(C);
import * as j from "./767086.6da4be4bcc.js";
e.C(j);
import * as g from "./76629.c67c63e9cf.js";
e.C(g);
import * as y from "./514085.4d87b5885b.js";
e.C(y);
import * as h from "./204542.cb541ce34a.js";
e.C(h);
import * as w from "./982651.7bfd071e83.js";
e.C(w);
import * as x from "./673108.34c2463692.js";
e.C(x);
import * as k from "./487481.90065b7f5d.js";
e.C(k);
import * as A from "./229522.aca0c6dfc8.js";
e.C(A);
import * as E from "./390575.8f68283a1b.js";
e.C(E);
import * as B from "./353032.f68e05ddda.js";
e.C(B);
import * as T from "./637885.a0eaa62308.js";
e.C(T);
import * as S from "./226913.b323f04fd6.js";
e.C(S);
import * as V from "./839024.82880c7121.js";
e.C(V);
var I = e(e.s = "FRTw").a;
export {
    I as
    default
};