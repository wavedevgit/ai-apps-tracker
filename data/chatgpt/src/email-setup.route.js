export const __rspack_esm_ids = [333117];
export const __webpack_modules__ = {
    MSLe: (function(a, b, c) {
        c.d(b, {
            a: () => A
        });
        var d = c("rEML"),
            e = c("ABep"),
            f = c("QosV");
        let g = (0, (c("tF54")).a)({
            name: "at-sign-light-32",
            canvas: {
                width: 32,
                height: 32,
                viewBox: "0 0 32 32",
                frame: {
                    x: 0,
                    y: 0,
                    width: 32,
                    height: 32
                },
                inkBounds: {
                    x: 3.312744,
                    y: 3.154175,
                    width: 25.374023,
                    height: 25.691406
                },
                visualBounds: {
                    x: 3.312744,
                    y: 3.154175,
                    width: 25.374023,
                    height: 25.691406
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 3.312744,
                    y: 3.154175,
                    width: 25.374023,
                    height: 25.691406
                },
                center: {
                    x: 15.999756,
                    y: 15.999878
                },
                insets: {
                    top: 3.154175,
                    right: 3.313233,
                    bottom: 3.154419,
                    left: 3.312744
                },
                anchors: {
                    frame: {
                        x: 16,
                        y: 16
                    },
                    ink: {
                        x: 15.999756,
                        y: 15.999878
                    },
                    foreground: {
                        x: 15.999756,
                        y: 15.999878
                    }
                }
            },
            capabilities: ["icon"],
            body: ['<path d="M17.075 3.15c3.4 0 6.3 1.075 8.375 3.05 2.075 1.95 3.225 4.75 3.225 8 0 4.55-2.45 8.075-6.1 8.075-1.1 0-2.1-0.325-2.8-1.05-0.25-0.3-0.45-0.625-0.6-0.975-0.3 0.3-0.65 0.6-1 0.85-1.025 0.75-2.225 1.2-3.3 1.2-1.025 0-2.225-0.25-3.175-1.1-0.95-0.875-1.525-2.25-1.525-4.175 0-4.3 3.125-7.8 6.55-7.8 1.55 0 2.8 0.6 3.625 1.6l0.075-0.375c0.075-0.475 0.55-0.825 1.025-0.725 0.5 0.075 0.825 0.55 0.75 1.05l-1.375 7.85c-0.125 0.675 0.05 1.1 0.275 1.35 0.25 0.275 0.725 0.5 1.475 0.5 2.2 0 4.3-2.2 4.3-6.275 0-2.825-0.975-5.125-2.65-6.7-1.7-1.6-4.125-2.55-7.15-2.55-7.675 0-11.925 5.875-11.95 11.725 0 2.55 0.925 5.15 2.775 7.075 1.85 1.95 4.675 3.3 8.6 3.3 1.05 0 2.475-0.2 3.8-0.525 1.35-0.325 2.45-0.75 2.975-1.1 0.425-0.275 0.975-0.15 1.25 0.25 0.275 0.425 0.175 0.975-0.25 1.25-0.8 0.525-2.175 1-3.55 1.35-1.425 0.325-2.975 0.575-4.225 0.575-4.375 0-7.675-1.525-9.9-3.85-2.2-2.3-3.275-5.35-3.275-8.325v-0.025c0.025-6.65 4.95-13.5 13.75-13.5zM16.725 11.025c-2.2 0-4.75 2.425-4.75 6 0 1.575 0.45 2.4 0.95 2.825 0.5 0.475 1.2 0.65 1.95 0.65 0.6 0 1.425-0.275 2.25-0.85 0.8-0.6 1.575-1.45 2.075-2.525 0.025-0.025 0.05-0.075 0.075-0.1l0.35-2.075c0 0 0-0.025 0-0.025 0.175-1.125-0.05-2.1-0.525-2.775-0.475-0.675-1.25-1.125-2.375-1.125z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>']
        });
        var h = c("Q840"),
            i = c("zd8w"),
            j = c("oyxz"),
            k = c("lAQI"),
            l = c("Cslg"),
            m = c("h6fL"),
            n = c("AcSY"),
            o = c("L6H2"),
            p = c("Sm6l"),
            q = c("HOLv"),
            r = c("bf6R"),
            s = c("tmUE"),
            t = c("OWtl"),
            u = c("ZEx5"),
            v = c("iPqE"),
            w = c("HFSu"),
            x = c("eShZ"),
            y = c("AXDI");
        let z = (0, h.q)(t.a, a => {
            let {
                userId: b,
                accountId: c
            } = a;
            return {
                queryKey: ["finserv-email-setup", b, c],
                enabled: null != b && null != c,
                gcTime: 0,
                retry: !1,
                queryFn: async () => {
                    let a = window.__finservEmailSetupToken;
                    if (!a) return null;
                    let b = await w.a.safeRequest("post", "/finserv-email/setup", {
                        requestBody: {
                            token: a
                        },
                        retry: "never",
                        expectedErrorStatuses: [401, 403]
                    });
                    return k.F({
                        status: k.p(["ready", "expired"])
                    }).parse(b)
                }
            }
        });
        var A = (0, d.kb)(function() {
            let a, b = (0, f.c)(1);
            return b[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, e.jsx)(y.a, {
                children: (0, e.jsx)(B, {})
            }), b[0] = a) : a = b[0], a
        });

        function B() {
            let a, b = (0, f.c)(11),
                c = (0, d.X)("/email/setup"),
                [g] = (0, d.jb)(),
                i = g.get("workspace"),
                {
                    accountId: j,
                    userId: k,
                    isLoading: n
                } = (0, m.a)(),
                o = (0, h.z)(l.f),
                p = (0, h.z)(l.k);
            if (n) {
                let a;
                return b[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, e.jsx)(s.a, {
                    fillParent: !0,
                    debugName: "EmailSetup"
                }), b[0] = a) : a = b[0], a
            }
            if (!k) {
                let a, f, g = i ? `${c}?${new URLSearchParams({workspace:i})}` : c;
                b[1] !== g ? (a = new URLSearchParams({
                    next: g
                }), b[1] = g, b[2] = a) : a = b[2];
                let h = `/auth/login?${a}`;
                return b[3] !== h ? (f = (0, e.jsx)(d.l, {
                    to: h,
                    replace: !0
                }), b[3] = h, b[4] = f) : f = b[4], f
            }
            let q = `${k}:${j}`,
                r = n || o !== j || p !== k;
            return b[5] !== j || b[6] !== c || b[7] !== q || b[8] !== r || b[9] !== k ? (a = (0, e.jsx)(C, {
                setupHref: c,
                accountId: j,
                userId: k,
                loading: r
            }, q), b[5] = j, b[6] = c, b[7] = q, b[8] = r, b[9] = k, b[10] = a) : a = b[10], a
        }

        function C(a) {
            let b, c, g, l, m, q, s, t, y, A, B, C, J, K, L, M, N, O, P, Q, R, S, T, U = (0, f.c)(109),
                {
                    setupHref: V,
                    accountId: W,
                    userId: X,
                    loading: Y
                } = a,
                Z = (0, d.X)("/auth/login"),
                [$, _] = (0, d.jb)(),
                [aa, ab] = (0, i.useState)(null),
                {
                    data: ac
                } = (0, n.f)(),
                {
                    data: ad,
                    isLoading: ae,
                    isError: af,
                    refetch: ag
                } = (0, n.c)(),
                ah = (0, v.getCurrentSessionWorkspaces)(ad).filter(G);
            U[0] !== W ? (b = a => a.workspaceAccountId === W, U[0] = W, U[1] = b) : b = U[1];
            let ai = ah.find(b),
                [aj, ak] = (0, i.useState)("idle"),
                [al, am] = (0, i.useState)(!1),
                an = window.__finservEmailSetupToken;
            U[2] !== W || U[3] !== X ? (c = {
                userId: X,
                accountId: W
            }, U[2] = W, U[3] = X, U[4] = c) : c = U[4];
            let ao = !Y && !!an && !!X && !!W && "working" !== aj && "connected" !== aj && "resent" !== aj;
            U[5] !== ao ? (g = {
                enabled: ao
            }, U[5] = ao, U[6] = g) : g = U[6];
            let {
                data: ap,
                error: aq,
                isPending: ar,
                isError: as,
                refetch: at
            } = (0, h.x)(z, c, g);
            U[7] !== W || U[8] !== $ || U[9] !== at || U[10] !== ak ? (l = async function() {
                if (an && W && $.get("workspace") === W) {
                    ak("working");
                    try {
                        let a = await w.a.safeRequest("post", "/finserv-email/enroll", {
                            requestBody: {
                                token: an,
                                workspace_id: W,
                                consent_version: "v1",
                                confirm: !0
                            },
                            retry: "never",
                            expectedErrorStatuses: [400, 401, 403, 409, 422]
                        });
                        k.F({
                            status: k.z("connected")
                        }).parse(a), delete window.__finservEmailSetupToken;
                        try {
                            sessionStorage.removeItem("finserv-email-setup")
                        } catch {}
                        ak("connected")
                    } catch (a) {
                        if (I(a)) return void ak("mailbox_mismatch");
                        if (a instanceof x.FetchError && 409 === a.status && "email_workspace_changed" === a.errorCode) {
                            am(!0), ak("workspace_changed");
                            return
                        }
                        a instanceof x.FetchError && 403 === a.status ? "email_disabled_by_workspace_policy" === a.errorCode ? ak("workspace_disabled") : "email_workspace_ineligible" === a.errorCode ? ak("workspace_ineligible") : ak("unavailable") : ak("error"), at()
                    }
                }
            }, U[7] = W, U[8] = $, U[9] = at, U[10] = ak, U[11] = l) : l = U[11];
            let au = l;
            U[12] !== ak ? (m = async function() {
                if (an) {
                    ak("working");
                    try {
                        await w.a.safeRequest("post", "/finserv-email/setup/resend", {
                            requestBody: {
                                token: an
                            },
                            retry: "never",
                            expectedErrorStatuses: [401, 403, 409, 429]
                        }), ak("resent")
                    } catch (a) {
                        ak(a instanceof x.FetchError && 403 === a.status ? "unavailable" : "error")
                    }
                }
            }, U[12] = ak, U[13] = m) : m = U[13];
            let av = m,
                aw = async function(a) {
                    if (ad) {
                        if (ab(a), a === W) return al ? void await async function() {
                            if (ai) {
                                ak("reauthenticating");
                                try {
                                    await (0, v.reauthenticateBrowserWorkspace)(ai, "document-bootstrap", `${V}?${new URLSearchParams({workspace:ai.workspaceAccountId})}`)
                                } catch {
                                    ak("workspace_changed")
                                }
                            }
                        }(): (_({
                            workspace: a
                        }, {
                            replace: !0
                        }), void ak("idle"));
                        ak("switching");
                        try {
                            await (0, v.switchBrowserWorkspaceForLink)(ad, a, "document-bootstrap", `${V}?${new URLSearchParams({workspace:a})}`)
                        } catch {
                            ak("switch_failed")
                        }
                    }
                }, ax = "switching" === aj || "reauthenticating" === aj, ay = Y || "working" === aj || ax, az = !ay && !ae && !af && !!ai && !al && !ar && ap?.status === "ready" && !!an && ac?.id === W, aA = ai && $.get("workspace") === W, aB = "switch_failed" === aj || "workspace_changed" === aj, aC = "switch_failed" === aj ? ah.find(a => a.workspaceAccountId === aa) : ai;
            U[14] === Symbol.for("react.memo_cache_sentinel") ? (q = (0, e.jsx)(j.a, {
                id: "chatgpt.finserv_email.setup.try_again",
                defaultMessage: "Try again"
            }), U[14] = q) : q = U[14];
            let aD = q;
            U[15] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, e.jsx)(j.a, {
                id: "chatgpt.finserv_email.setup.title",
                defaultMessage: "Set up email with ChatGPT"
            }), U[15] = s) : s = U[15];
            let aE = s;
            if ("mailbox_mismatch" === aj || I(aq)) {
                let a, b, c, d, f, g;
                U[16] === Symbol.for("react.memo_cache_sentinel") ? (a = new URLSearchParams({
                    account_switch: "true",
                    account_switch_login: "add_account"
                }), U[16] = a) : a = U[16];
                let h = `${V}?${a}`;
                U[17] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, e.jsx)("p", {
                    role: "alert",
                    className: "text-secondary",
                    children: (0, e.jsx)(j.a, {
                        id: "chatgpt.finserv_email.setup.mailbox_mismatch",
                        defaultMessage: "Sign in with the email address you used to send your request."
                    })
                }), U[17] = b) : b = U[17], U[18] !== h ? (c = new URLSearchParams({
                    next: h
                }), U[18] = h, U[19] = c) : c = U[19];
                let i = `${Z}?${c}`;
                return U[20] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, e.jsx)(j.a, {
                    id: "chatgpt.finserv_email.setup.switch_account",
                    defaultMessage: "Sign in with another account"
                }), U[20] = d) : d = U[20], U[21] !== i ? (f = (0, e.jsx)(p.b, {
                    size: "setupAction",
                    radius: "full",
                    href: i,
                    children: d
                }), U[21] = i, U[22] = f) : f = U[22], U[23] !== f || U[24] !== aE ? (g = (0, e.jsxs)(H, {
                    title: aE,
                    children: [b, f]
                }), U[23] = f, U[24] = aE, U[25] = g) : g = U[25], g
            }
            if ("connected" === aj) {
                let a, b;
                return U[26] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, e.jsx)(j.a, {
                    id: "chatgpt.finserv_email.setup.success.title",
                    defaultMessage: "Email access is enabled"
                }), U[26] = a) : a = U[26], U[27] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, e.jsx)(H, {
                    title: a,
                    children: (0, e.jsx)("p", {
                        role: "status",
                        className: "text-secondary",
                        children: (0, e.jsx)(j.a, {
                            id: "chatgpt.finserv_email.setup.success.description",
                            defaultMessage: "We\u2019ll process your original request and email you the response. You can close this page."
                        })
                    })
                }), U[27] = b) : b = U[27], b
            }
            if ("unavailable" === aj || aq instanceof x.FetchError && 403 === aq.status) {
                let a, b;
                return U[28] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, e.jsx)("p", {
                    role: "alert",
                    className: "text-secondary",
                    children: (0, e.jsx)(j.a, {
                        id: "chatgpt.finserv_email.setup.unavailable",
                        defaultMessage: "Email setup is unavailable. Send a new email to restart setup. If the problem continues, contact your workspace admin."
                    })
                }), U[28] = a) : a = U[28], U[29] !== aE ? (b = (0, e.jsx)(H, {
                    title: aE,
                    children: a
                }), U[29] = aE, U[30] = b) : b = U[30], b
            }
            if ("resent" === aj || ap?.status === "expired") {
                let a, b;
                return U[31] !== ay || U[32] !== av || U[33] !== aj ? (a = "resent" === aj ? (0, e.jsx)("p", {
                    role: "status",
                    className: "text-secondary",
                    children: (0, e.jsx)(j.a, {
                        id: "chatgpt.finserv_email.setup.resend.success",
                        defaultMessage: "Check your inbox for a new setup link"
                    })
                }) : (0, e.jsxs)(e.Fragment, {
                    children: [(0, e.jsx)("p", {
                        className: "text-secondary",
                        children: (0, e.jsx)(j.a, {
                            id: "chatgpt.finserv_email.setup.expired.description",
                            defaultMessage: "This setup link has expired"
                        })
                    }), "error" === aj && (0, e.jsx)("p", {
                        role: "alert",
                        className: "text-secondary",
                        children: (0, e.jsx)(j.a, {
                            id: "chatgpt.finserv_email.setup.resend.error",
                            defaultMessage: "We couldn\u2019t send a new link. Try again."
                        })
                    }), (0, e.jsx)(p.a, {
                        size: "setupAction",
                        radius: "full",
                        disabled: ay,
                        loading: "working" === aj,
                        onClick: () => void av(),
                        children: (0, e.jsx)(j.a, {
                            id: "chatgpt.finserv_email.setup.resend.button.label",
                            defaultMessage: "Send a new link"
                        })
                    })]
                }), U[31] = ay, U[32] = av, U[33] = aj, U[34] = a) : a = U[34], U[35] !== a || U[36] !== aE ? (b = (0, e.jsx)(H, {
                    title: aE,
                    children: a
                }), U[35] = a, U[36] = aE, U[37] = b) : b = U[37], b
            }
            if (!an || as || af) {
                let a, b;
                return U[38] !== af || U[39] !== ae || U[40] !== ay || U[41] !== as || U[42] !== ar || U[43] !== at || U[44] !== ag || U[45] !== aD ? (a = an ? (0, e.jsxs)(e.Fragment, {
                    children: [(0, e.jsx)("p", {
                        role: "alert",
                        className: "text-secondary",
                        children: (0, e.jsx)(j.a, {
                            id: "chatgpt.finserv_email.setup.load_error",
                            defaultMessage: "We couldn\u2019t load email setup"
                        })
                    }), (0, e.jsx)(p.a, {
                        size: "setupAction",
                        radius: "full",
                        disabled: ay || ae || ar,
                        onClick: () => {
                            af && ag(), as && at()
                        },
                        children: aD
                    })]
                }) : (0, e.jsx)("p", {
                    className: "text-secondary",
                    children: (0, e.jsx)(j.a, {
                        id: "chatgpt.emailSetup.missingLink",
                        defaultMessage: "To connect, open the setup link from your email"
                    })
                }), U[38] = af, U[39] = ae, U[40] = ay, U[41] = as, U[42] = ar, U[43] = at, U[44] = ag, U[45] = aD, U[46] = a) : a = U[46], U[47] !== a || U[48] !== aE ? (b = (0, e.jsx)(H, {
                    title: aE,
                    children: a
                }), U[47] = a, U[48] = aE, U[49] = b) : b = U[49], b
            }
            if ("workspace_ineligible" === aj || "workspace_disabled" === aj) {
                let a, b, c;
                return U[50] !== aj ? (a = (0, e.jsx)("p", {
                    role: "alert",
                    className: "text-secondary",
                    children: "workspace_disabled" === aj ? (0, e.jsx)(j.a, {
                        id: "chatgpt.finserv_email.setup.workspace_disabled",
                        defaultMessage: "Email access is disabled for you in this workspace. Contact your workspace admin to enable it."
                    }) : (0, e.jsx)(j.a, {
                        id: "chatgpt.finserv_email.setup.workspace_ineligible.description",
                        defaultMessage: "Email isn\u2019t available in this workspace. Choose another workspace to continue."
                    })
                }), U[50] = aj, U[51] = a) : a = U[51], U[52] !== _ || U[53] !== ak || U[54] !== aj ? (b = "workspace_ineligible" === aj && (0, e.jsx)(p.a, {
                    type: "button",
                    color: "primary",
                    size: "setupAction",
                    radius: "full",
                    onClick: () => {
                        _({}, {
                            replace: !0
                        }), ak("idle")
                    },
                    children: (0, e.jsx)(j.a, {
                        id: "chatgpt.finserv_email.setup.workspace_ineligible.button.label",
                        defaultMessage: "Choose another workspace"
                    })
                }), U[52] = _, U[53] = ak, U[54] = aj, U[55] = b) : b = U[55], U[56] !== b || U[57] !== a || U[58] !== aE ? (c = (0, e.jsxs)(H, {
                    title: aE,
                    children: [a, b]
                }), U[56] = b, U[57] = a, U[58] = aE, U[59] = c) : c = U[59], c
            }
            if (!aA || aB || ax) {
                let a, b, c, d;
                U[60] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, e.jsx)(j.a, {
                    id: "chatgpt.finserv_email.setup.choose_workspace",
                    defaultMessage: "Choose a workspace"
                }), U[60] = a) : a = U[60], U[61] !== ae ? (b = ae && (0, e.jsx)("p", {
                    role: "status",
                    className: "text-secondary",
                    children: (0, e.jsx)(j.a, {
                        id: "chatgpt.finserv_email.setup.workspace.loading",
                        defaultMessage: "Loading workspaces\u2026"
                    })
                }), U[61] = ae, U[62] = b) : b = U[62];
                let f = !ae && 0 === ah.length && (0, e.jsx)("p", {
                        role: "alert",
                        className: "text-secondary",
                        children: (0, e.jsx)(j.a, {
                            id: "chatgpt.finserv_email.setup.workspace.unavailable",
                            defaultMessage: "You need a workspace to enable email access."
                        })
                    }),
                    g = !ae && ah.length > 0 && (0, e.jsx)(u.a, {
                        variant: "rows",
                        children: ah.map(a => (0, e.jsxs)(p.a, {
                            unstyled: !0,
                            className: "flex w-full items-center gap-4 py-6 ps-5 pe-4.5 text-start text-base font-medium not-disabled:hover:bg-secondary-ghost-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring disabled:opacity-50",
                            disabled: ay,
                            onClick: () => void aw(a.workspaceAccountId),
                            children: [(0, e.jsx)(o.a, {
                                alt: "",
                                size: "row",
                                name: a.workspaceName,
                                src: a.workspaceImageUrl,
                                fallbackIcon: (0, e.jsx)(r.Eb, {})
                            }), (0, e.jsx)("span", {
                                className: "min-w-0 flex-1 wrap-anywhere whitespace-normal",
                                children: a.workspaceName ?? (0, e.jsx)(j.a, {
                                    id: "chatgpt.finserv_email.setup.unnamed_workspace",
                                    defaultMessage: "Untitled workspace"
                                })
                            }), (0, e.jsx)(r.lc, {
                                className: "text-tertiary"
                            })]
                        }, a.workspaceAccountId))
                    });
                U[63] !== ax ? (c = ax && (0, e.jsx)("p", {
                    role: "status",
                    className: "text-secondary",
                    children: (0, e.jsx)(j.a, {
                        id: "chatgpt.finserv_email.setup.switching",
                        defaultMessage: "Connecting to your workspace\u2026"
                    })
                }), U[63] = ax, U[64] = c) : c = U[64];
                let h = aB && (0, e.jsx)("p", {
                    role: "alert",
                    className: "text-secondary",
                    children: (0, e.jsx)(j.a, {
                        id: "chatgpt.finserv_email.setup.switch_failed",
                        defaultMessage: "We couldn\u2019t connect to {workspaceName}. Please try again.",
                        values: {
                            workspaceName: aC?.workspaceName ?? ""
                        }
                    })
                });
                return U[65] !== b || U[66] !== f || U[67] !== g || U[68] !== c || U[69] !== h ? (d = (0, e.jsxs)(H, {
                    showIcon: !1,
                    title: a,
                    children: [b, f, g, c, h]
                }), U[65] = b, U[66] = f, U[67] = g, U[68] = c, U[69] = h, U[70] = d) : d = U[70], d
            }
            U[71] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, e.jsx)(j.a, {
                id: "chatgpt.finserv_email.setup.introduction",
                defaultMessage: "Once enabled, you\u2019ll be able to delegate work to ChatGPT via email. Here\u2019s how it works:"
            }), U[71] = t) : t = U[71], U[72] === Symbol.for("react.memo_cache_sentinel") ? (y = (0, e.jsx)(r.pd, {}), U[72] = y) : y = U[72], U[73] === Symbol.for("react.memo_cache_sentinel") ? (A = (0, e.jsxs)("div", {
                className: "flex items-start gap-3",
                children: [y, (0, e.jsx)("p", {
                    children: (0, e.jsx)(j.a, {
                        id: "chatgpt.finserv_email.setup.send_tasks",
                        defaultMessage: "Send tasks to ChatGPT via <strong>email@chatgpt.com</strong>",
                        values: {
                            strong: F
                        }
                    })
                })]
            }), U[73] = A) : A = U[73], U[74] === Symbol.for("react.memo_cache_sentinel") ? (B = (0, e.jsx)(r._h, {}), U[74] = B) : B = U[74], U[75] !== ai.workspaceName ? (C = (0, e.jsxs)("div", {
                className: "flex items-start gap-3",
                children: [B, (0, e.jsx)("p", {
                    children: (0, e.jsx)(j.a, {
                        id: "chatgpt.finserv_email.setup.workspace_consent",
                        defaultMessage: "ChatGPT will do work for you in the <strong>{workspaceName}</strong> workspace.",
                        values: {
                            workspaceName: ai.workspaceName,
                            strong: E
                        }
                    })
                })]
            }), U[75] = ai.workspaceName, U[76] = C) : C = U[76], U[77] === Symbol.for("react.memo_cache_sentinel") ? (J = (0, e.jsx)(r.rg, {}), U[77] = J) : J = U[77], U[78] === Symbol.for("react.memo_cache_sentinel") ? (K = (0, e.jsxs)("div", {
                className: "flex items-start gap-3",
                children: [J, (0, e.jsx)("p", {
                    children: (0, e.jsx)(j.a, {
                        id: "chatgpt.finserv_email.setup.sender_only",
                        defaultMessage: "Responses are sent <strong>only to you</strong> \u2014 you\u2019ll receive responses and attachments as direct replies.",
                        values: {
                            strong: D
                        }
                    })
                })]
            }), U[78] = K) : K = U[78], U[79] !== C ? (L = (0, e.jsx)("div", {
                className: "rounded-2xl ring-1 ring-border",
                children: (0, e.jsxs)("div", {
                    className: "flex flex-col gap-6 p-5 text-start",
                    children: [A, C, K]
                })
            }), U[79] = C, U[80] = L) : L = U[80], U[81] !== aj ? (M = "error" === aj && (0, e.jsx)("p", {
                role: "alert",
                className: "text-secondary",
                children: (0, e.jsx)(j.a, {
                    id: "chatgpt.finserv_email.setup.error.description",
                    defaultMessage: "We couldn\u2019t enable email. Please try again."
                })
            }), U[81] = aj, U[82] = M) : M = U[82], U[83] !== au ? (N = a => {
                a.preventDefault(), au()
            }, U[83] = au, U[84] = N) : N = U[84];
            let aF = "working" === aj,
                aG = !az;
            U[85] !== aj ? (O = "working" === aj && (0, e.jsx)(j.a, {
                id: "chatgpt.finserv_email.setup.enable.pending",
                defaultMessage: "Enabling\u2026"
            }), U[85] = aj, U[86] = O) : O = U[86];
            let aH = "error" === aj && aD;
            return U[87] !== aj ? (P = "working" !== aj && "error" !== aj && (0, e.jsx)(j.a, {
                id: "chatgpt.emailSetup.enable",
                defaultMessage: "Enable email"
            }), U[87] = aj, U[88] = P) : P = U[88], U[89] !== aF || U[90] !== aG || U[91] !== O || U[92] !== aH || U[93] !== P ? (Q = (0, e.jsxs)(p.a, {
                className: "w-70 max-w-full",
                type: "submit",
                color: "primary",
                size: "setupAction",
                radius: "full",
                loading: aF,
                disabled: aG,
                children: [O, aH, P]
            }), U[89] = aF, U[90] = aG, U[91] = O, U[92] = aH, U[93] = P, U[94] = Q) : Q = U[94], U[95] !== ay || U[96] !== _ || U[97] !== ak || U[98] !== aj ? (R = "error" !== aj && (0, e.jsx)(p.a, {
                type: "button",
                size: "dialogAction",
                radius: "full",
                color: "ghostActive",
                disabled: ay,
                onClick: () => {
                    _({}, {
                        replace: !0
                    }), ak("idle")
                },
                children: (0, e.jsx)(j.a, {
                    id: "chatgpt.finserv_email.setup.go_back",
                    defaultMessage: "Go back"
                })
            }), U[95] = ay, U[96] = _, U[97] = ak, U[98] = aj, U[99] = R) : R = U[99], U[100] !== N || U[101] !== Q || U[102] !== R ? (S = (0, e.jsxs)("form", {
                className: "flex flex-col items-center gap-4",
                onSubmit: N,
                children: [Q, R]
            }), U[100] = N, U[101] = Q, U[102] = R, U[103] = S) : S = U[103], U[104] !== L || U[105] !== M || U[106] !== S || U[107] !== aE ? (T = (0, e.jsxs)(H, {
                title: aE,
                description: t,
                children: [L, M, S]
            }), U[104] = L, U[105] = M, U[106] = S, U[107] = aE, U[108] = T) : T = U[108], T
        }

        function D(a) {
            return (0, e.jsx)("strong", {
                className: "font-semibold",
                children: a
            }, "emphasis")
        }

        function E(a) {
            return (0, e.jsx)("strong", {
                className: "font-semibold",
                children: a
            }, "emphasis")
        }

        function F(a) {
            return (0, e.jsx)("strong", {
                className: "font-semibold",
                children: a
            }, "emphasis")
        }

        function G(a) {
            return !a.isPersonalWorkspace && !a.isDeactivated
        }

        function H(a) {
            let b, c, d, h, i, j, k, l = (0, f.c)(20),
                {
                    title: m,
                    description: n,
                    showIcon: o,
                    children: p
                } = a,
                r = void 0 === o || o,
                s = `flex h-full w-full flex-col overflow-y-auto bg-surface-card px-6 pb-12 text-default ${r?"pt-12":"pt-[15vh]"}`,
                t = `flex w-full flex-col gap-8 text-center text-sm leading-5 ${r?"m-auto max-w-100":"mx-auto max-w-85"}`;
            l[0] !== r ? (b = r && (0, e.jsx)(q.a, {
                asset: g,
                className: "size-[42.67px]"
            }), l[0] = r, l[1] = b) : b = l[1];
            let u = r ? "text-2xl leading-7 font-semibold tracking-[0.07px]" : "text-[32px] leading-10 font-medium";
            return l[2] !== u || l[3] !== m ? (c = (0, e.jsx)("h1", {
                className: u,
                children: m
            }), l[2] = u, l[3] = m, l[4] = c) : c = l[4], l[5] !== n ? (d = n && (0, e.jsx)("p", {
                className: "text-secondary",
                children: n
            }), l[5] = n, l[6] = d) : d = l[6], l[7] !== c || l[8] !== d ? (h = (0, e.jsxs)("div", {
                className: "flex flex-col gap-4",
                children: [c, d]
            }), l[7] = c, l[8] = d, l[9] = h) : h = l[9], l[10] !== b || l[11] !== h ? (i = (0, e.jsxs)("div", {
                className: "flex flex-col items-center gap-4",
                children: [b, h]
            }), l[10] = b, l[11] = h, l[12] = i) : i = l[12], l[13] !== p || l[14] !== t || l[15] !== i ? (j = (0, e.jsxs)("div", {
                className: t,
                children: [i, p]
            }), l[13] = p, l[14] = t, l[15] = i, l[16] = j) : j = l[16], l[17] !== j || l[18] !== s ? (k = (0, e.jsx)("main", {
                className: s,
                children: j
            }), l[17] = j, l[18] = s, l[19] = k) : k = l[19], k
        }

        function I(a) {
            return a instanceof x.FetchError && 403 === a.status && "email_setup_mailbox_mismatch" === a.errorCode
        }
    }),
    BJA4: (function(a) {
        a.exports = '<svg width="716" height="716" viewBox="149 149 418 418" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path d="M508.749 317.399C516.777 287.314 508.991 253.884 485.389 230.282C461.788 206.681 428.36 198.895 398.273 206.923C376.231 184.928 343.39 174.956 311.148 183.596C278.906 192.234 255.45 217.292 247.36 247.361C217.291 255.451 192.233 278.91 183.595 311.149C174.957 343.391 184.927 376.232 206.924 398.274C198.896 428.359 206.683 461.789 230.284 485.391C253.885 508.992 287.313 516.779 317.401 508.75C339.442 530.745 372.286 540.717 404.525 532.079C436.767 523.441 460.223 498.384 468.313 468.315C498.383 460.224 523.44 436.766 532.078 404.526C540.716 372.285 530.747 339.443 508.749 317.402V317.399ZM470.899 244.776C486.892 260.77 493.488 282.601 490.687 303.412L415.577 260.046C412.411 258.218 408.509 258.218 405.345 260.046L317.401 310.82V277.526C317.401 275.191 318.652 273.005 320.676 271.837L387.644 233.174C414.178 218.353 448.346 222.223 470.901 244.776H470.899ZM357.837 311.144L398.275 334.491V381.185L357.837 404.532L317.398 381.185V334.491L357.837 311.144ZM264.776 269.693C265.207 239.305 285.644 211.649 316.453 203.393C338.3 197.54 360.505 202.744 377.127 215.573L302.014 258.937C298.848 260.764 296.898 264.144 296.898 267.798V369.346L268.065 352.699C266.043 351.531 264.776 349.353 264.776 347.017V269.691V269.693ZM203.391 316.454C209.244 294.608 224.854 277.978 244.276 269.999V356.73C244.276 360.384 246.226 363.763 249.392 365.591L337.337 416.365L308.503 433.013C306.481 434.181 303.961 434.188 301.939 433.02L234.971 394.357C208.868 378.789 195.138 347.261 203.391 316.454ZM244.775 470.9C228.781 454.906 222.186 433.075 224.986 412.264L300.096 455.63C303.263 457.457 307.164 457.457 310.328 455.63L398.273 404.856V438.149C398.273 440.485 397.022 442.671 394.997 443.839L328.029 482.502C301.495 497.322 267.327 493.452 244.772 470.9H244.775ZM450.897 445.982C450.466 476.371 430.029 504.027 399.22 512.283C377.373 518.136 355.168 512.932 338.547 500.102L413.659 456.738C416.826 454.911 418.775 451.532 418.775 447.877V346.329L447.609 362.977C449.631 364.145 450.897 366.323 450.897 368.659V445.985V445.982ZM512.282 399.221C506.429 421.068 490.819 437.697 471.397 445.676V358.946C471.397 355.292 469.448 351.912 466.281 350.085L378.336 299.311L407.17 282.663C409.192 281.495 411.712 281.487 413.734 282.655L480.702 321.318C506.805 336.887 520.536 368.415 512.282 399.221Z" fill="currentColor"/>\n</svg>\n'
    }),
    Wi2z: (function(a) {
        a.exports = '<svg\n  width="21"\n  height="21"\n  viewBox="0 0 21 21"\n  fill="none"\n  xmlns="http://www.w3.org/2000/svg"\n>\n  <path\n    d="M11.6475 18.3409C11.0975 18.3409 10.575 18.2364 10.08 18.0274C9.58502 17.8184 9.14502 17.5269 8.76002 17.1529C8.34202 17.2959 7.90751 17.3674 7.45651 17.3674C6.71951 17.3674 6.03751 17.1859 5.41051 16.8229C4.78351 16.4599 4.27751 15.9649 3.89251 15.3379C3.51851 14.7109 3.33151 14.0124 3.33151 13.2424C3.33151 12.9234 3.37551 12.5769 3.46351 12.2029C3.02351 11.7959 2.68251 11.3284 2.44051 10.8004C2.19851 10.2614 2.07751 9.70044 2.07751 9.11744C2.07751 8.52344 2.20401 7.95144 2.45701 7.40144C2.71001 6.85144 3.06201 6.37844 3.51301 5.98244C3.97501 5.57544 4.50851 5.29494 5.11351 5.14094C5.23451 4.51394 5.48751 3.95294 5.87251 3.45794C6.26851 2.95194 6.75252 2.55594 7.32452 2.26994C7.89652 1.98394 8.50702 1.84094 9.15602 1.84094C9.70602 1.84094 10.2285 1.94544 10.7235 2.15444C11.2185 2.36344 11.6585 2.65494 12.0435 3.02894C12.4615 2.88594 12.896 2.81444 13.347 2.81444C14.084 2.81444 14.766 2.99594 15.393 3.35894C16.02 3.72194 16.5205 4.21694 16.8945 4.84394C17.2795 5.47094 17.472 6.16944 17.472 6.93944C17.472 7.25844 17.428 7.60494 17.34 7.97894C17.78 8.38594 18.121 8.85894 18.363 9.39794C18.605 9.92594 18.726 10.4814 18.726 11.0644C18.726 11.6584 18.5995 12.2304 18.3465 12.7804C18.0935 13.3304 17.736 13.8089 17.274 14.2159C16.823 14.6119 16.295 14.8869 15.69 15.0409C15.569 15.6679 15.3105 16.2289 14.9145 16.7239C14.5295 17.2299 14.051 17.6259 13.479 17.9119C12.907 18.1979 12.2965 18.3409 11.6475 18.3409ZM7.57201 16.2784C8.12201 16.2784 8.60051 16.1629 9.00751 15.9319L12.1095 14.1499C12.2195 14.0729 12.2745 13.9684 12.2745 13.8364V12.4174L8.28152 14.7109C8.03952 14.8539 7.79751 14.8539 7.55552 14.7109L4.43701 12.9124C4.43701 12.9454 4.43151 12.9839 4.42051 13.0279C4.42051 13.0719 4.42051 13.1379 4.42051 13.2259C4.42051 13.7869 4.55252 14.3039 4.81651 14.7769C5.09152 15.2389 5.47101 15.6019 5.95501 15.8659C6.43901 16.1409 6.97801 16.2784 7.57201 16.2784ZM7.73701 13.5889C7.80301 13.6219 7.86351 13.6384 7.91851 13.6384C7.97351 13.6384 8.02852 13.6219 8.08352 13.5889L9.32101 12.8794L5.34451 10.5694C5.10251 10.4264 4.98151 10.2119 4.98151 9.92594V6.34544C4.43151 6.58744 3.99151 6.96144 3.66151 7.46744C3.33151 7.96244 3.16651 8.51244 3.16651 9.11744C3.16651 9.65644 3.30401 10.1734 3.57901 10.6684C3.85401 11.1634 4.21151 11.5374 4.65151 11.7904L7.73701 13.5889ZM11.6475 17.2519C12.2305 17.2519 12.7585 17.1199 13.2315 16.8559C13.7045 16.5919 14.0785 16.2289 14.3535 15.7669C14.6285 15.3049 14.766 14.7879 14.766 14.2159V10.6519C14.766 10.5199 14.711 10.4209 14.601 10.3549L13.347 9.62894V14.2324C13.347 14.5184 13.226 14.7329 12.984 14.8759L9.86551 16.6744C10.4045 17.0594 10.9985 17.2519 11.6475 17.2519ZM12.2745 11.2129V8.96894L10.41 7.91294L8.52902 8.96894V11.2129L10.41 12.2689L12.2745 11.2129ZM7.45651 5.94944C7.45651 5.66344 7.57752 5.44894 7.81952 5.30594L10.938 3.50744C10.399 3.12244 9.80502 2.92994 9.15602 2.92994C8.57302 2.92994 8.04501 3.06194 7.57201 3.32594C7.09902 3.58994 6.72502 3.95294 6.45002 4.41494C6.18602 4.87694 6.05401 5.39394 6.05401 5.96594V9.51344C6.05401 9.64544 6.10901 9.74994 6.21902 9.82694L7.45651 10.5529V5.94944ZM15.8385 13.8364C16.3885 13.5944 16.823 13.2204 17.142 12.7144C17.472 12.2084 17.637 11.6584 17.637 11.0644C17.637 10.5254 17.4995 10.0084 17.2245 9.51344C16.9495 9.01844 16.592 8.64444 16.152 8.39144L13.0665 6.60944C13.0005 6.56544 12.94 6.54894 12.885 6.55994C12.83 6.55994 12.775 6.57644 12.72 6.60944L11.4825 7.30244L15.4755 9.62894C15.5965 9.69494 15.6845 9.78294 15.7395 9.89294C15.8055 9.99194 15.8385 10.1129 15.8385 10.2559V13.8364ZM12.522 5.45444C12.764 5.30044 13.006 5.30044 13.248 5.45444L16.383 7.28594C16.383 7.20894 16.383 7.10994 16.383 6.98894C16.383 6.46094 16.251 5.96044 15.987 5.48744C15.734 5.00344 15.3655 4.61844 14.8815 4.33244C14.4085 4.04644 13.8585 3.90344 13.2315 3.90344C12.6815 3.90344 12.203 4.01894 11.796 4.24994L8.69402 6.03194C8.58402 6.10894 8.52902 6.21344 8.52902 6.34544V7.76444L12.522 5.45444Z"\n    fill="currentColor"\n  />\n</svg>\n'
    })
};
import {
    __webpack_require__ as a
} from "./633146.fc4344fd4e.js";
import * as b from "./418851.7489c77aa2.js";
a.C(b);
import * as c from "./109308.6f7ef1dfb7.js";
a.C(c);
import * as d from "./399565.9b329429cf.js";
a.C(d);
import * as e from "./257798.4288e75d31.js";
a.C(e);
import * as f from "./447351.7cc0e9b0b6.js";
a.C(f);
import * as g from "./617936.161c7c6e6d.js";
a.C(g);
import * as h from "./807489.fe22b9e578.js";
a.C(h);
import * as i from "./337882.0272c6a778.js";
a.C(i);
import * as j from "./955979.c209a5d466.js";
a.C(j);
import * as k from "./646436.c251af92a0.js";
a.C(k);
import * as l from "./7078.16371f0bee.js";
a.C(l);
import * as m from "./200429.4605170080.js";
a.C(m);
import * as n from "./698524.70931f0a68.js";
a.C(n);
import * as o from "./956483.bcbfc29b82.js";
a.C(o);
import * as p from "./87162.548d9be3b1.js";
a.C(p);
import * as q from "./396705.8c13004614.js";
a.C(q);
import * as r from "./155568.edc1b83d08.js";
a.C(r);
import * as s from "./731863.f9a145cb61.js";
a.C(s);
import * as t from "./767086.c9b0416973.js";
a.C(t);
import * as u from "./76629.9d18312d19.js";
a.C(u);
import * as v from "./226913.52b9bcbf34.js";
a.C(v);
import * as w from "./333117.567a139c56.js";
a.C(w);
var x = a(a.s = "MSLe").a;
export {
    x as
    default
};