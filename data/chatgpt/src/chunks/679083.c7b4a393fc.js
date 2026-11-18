export const __rspack_esm_ids = [679083];
export const __webpack_modules__ = {
    jcQY: (function(e, t) {
        t.a = {
            Title: "Title-FbVjGN",
            title: "Title-FbVjGN",
            Progress: "Progress-dSoGxD",
            progress: "Progress-dSoGxD"
        }
    }),
    bn59: (function(e, t, n) {
        n.d(t, {
            a: () => B,
            ChatSeatAccessScreen: () => z
        });
        var a = n("ABep"),
            r = n("QosV"),
            s = n("Q840"),
            o = n("zd8w"),
            i = n("oyxz"),
            l = n("rEML"),
            c = n("StMt"),
            d = n("OFP1"),
            u = n("kphc"),
            h = n("Sm6l"),
            p = n("DVOM"),
            g = n("OWtl"),
            m = n("mBJV"),
            f = n("Wf1j"),
            v = n("ASxG"),
            b = n("fDv2"),
            y = n("rLEB"),
            x = n("Ietk"),
            w = n("twmu"),
            C = n("UOa8"),
            _ = n("Kwur"),
            S = n("udGC"),
            j = n("aTcy"),
            I = n("JNtf"),
            T = n("mUDD"),
            E = n("Ot7V"),
            P = n("SGsN"),
            A = n("DAA7"),
            M = n("yGJW"),
            k = n("GDNt");

        function R(e) {
            let t, n, l, c, d, u, p, v, b, k, R, L, z, F, B, D, G, H, q, W, K, U, V = (0, r.c)(70),
                {
                    account: Q,
                    accountId: $,
                    userId: Y,
                    onClose: J,
                    onSwitchToWork: X
                } = e,
                Z = (0, s.y)(g.a),
                ee = (0, f.a)(),
                {
                    email: et
                } = (0, C.a)(),
                [en, ea] = (0, o.useState)(),
                er = (0, o.useRef)(!0);
            V[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => (er.current = !0, () => {
                er.current = !1
            }), n = [], V[0] = t, V[1] = n) : (t = V[0], n = V[1]), (0, o.useEffect)(t, n);
            let es = "account-owner" === Q.account.account_user_role,
                eo = "account-admin" === Q.account.account_user_role,
                ei = !0 === Q.entitlement.has_active_subscription,
                el = (es || eo) && ei,
                ec = es || el;
            V[2] !== el || V[3] !== es ? (l = "CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_REQUEST_CHANGE", el ? l = "CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_UPDATE_DIRECTLY" : es && (l = "CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_GO_TO_WORKSPACE_AND_UPDATE"), V[2] = el, V[3] = es, V[4] = l) : l = V[4], V[5] !== Q.account.account_user_role || V[6] !== l || V[7] !== ei || V[8] !== Z ? (c = (e, t) => {
                (0, M.a)(Z, m.yd, {
                    actionType: e,
                    ctaType: void 0 !== t && t ? l : void 0,
                    userRole: Q.account.account_user_role ?? void 0,
                    hasPaidSubscription: ei
                })
            }, V[5] = Q.account.account_user_role, V[6] = l, V[7] = ei, V[8] = Z, V[9] = c) : c = V[9];
            let ed = c;
            V[10] !== J ? (d = () => {
                J(), (0, E.f)({
                    href: new URL("/codex/cloud", j.h).toString(),
                    initiator: "open_in_browser_bridge"
                })
            }, V[10] = J, V[11] = d) : d = V[11];
            let eu = d;
            V[12] !== Q.account.subscription_seat_pools_enabled || V[13] !== $ || V[14] !== eu || V[15] !== el || V[16] !== et || V[17] !== ee || V[18] !== es || V[19] !== ed || V[20] !== J || V[21] !== X || V[22] !== en || V[23] !== Z || V[24] !== Y ? (u = async () => {
                if ("requesting" !== en) {
                    if (ed("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_PRIMARY_CTA_CLICKED", !0), es && !el) {
                        let e = new URL("/admin/members", j.h);
                        e.searchParams.set("account_id", $), et && e.searchParams.set("search", et);
                        let t = e.toString(),
                            n = (0, A.c)(Z, t, $),
                            a = null == n ? null : await n;
                        J(), (0, E.f)({
                            href: a ?? t,
                            initiator: "open_in_browser_bridge",
                            openTarget: null == a ? void 0 : "external-browser"
                        });
                        return
                    }
                    ea("requesting");
                    try {
                        if (el) {
                            if (Q.account.subscription_seat_pools_enabled ? await _.Request.safePost("/accounts/{account_id}/users/{user_id}/seat/update", {
                                    parameters: {
                                        path: {
                                            account_id: $,
                                            user_id: Y
                                        }
                                    },
                                    requestBody: {
                                        operation: "switch",
                                        seat_type: "default"
                                    },
                                    isExpectedError: N
                                }) : await _.Request.safePatch("/accounts/{account_id}/users/{user_id}", {
                                    parameters: {
                                        path: {
                                            account_id: $,
                                            user_id: Y
                                        }
                                    },
                                    additionalHeaders: {
                                        "X-OpenAI-Account-User-Update-Source": "web_usage_based_workspace_access_modal"
                                    },
                                    requestBody: {
                                        seat_type: "default"
                                    }
                                }), !er.current) return;
                            (0, S.e)(Z), await (0, x.g)("accounts-check"), await Promise.all([Z.query.invalidate(w.b, $), Z.queryClient.invalidateQueries({
                                queryKey: ["accounts", "check"]
                            })]), er.current && J()
                        } else {
                            if ((0, y.c)(Z, $), await _.Request.safePost("/accounts/{account_id}/invites/request", {
                                    parameters: {
                                        path: {
                                            account_id: $
                                        }
                                    }
                                }), !er.current) return;
                            X ? (J(), X()) : eu(), Z.get(P.f).success(ee.formatMessage({
                                id: "UsageBasedWorkspaceAccessModal.accessRequestSubmittedToast",
                                defaultMessage: "Access request submitted"
                            }))
                        }
                    } catch (e) {
                        er.current && ea(O(e) ?? "error")
                    }
                }
            }, V[12] = Q.account.subscription_seat_pools_enabled, V[13] = $, V[14] = eu, V[15] = el, V[16] = et, V[17] = ee, V[18] = es, V[19] = ed, V[20] = J, V[21] = X, V[22] = en, V[23] = Z, V[24] = Y, V[25] = u) : u = V[25];
            let eh = u;
            V[26] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.chatWork.title",
                defaultMessage: "You don’t have access to Chat on this plan"
            }), V[26] = p) : p = V[26];
            let ep = p;
            V[27] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.chatWork.message",
                defaultMessage: "You are assigned Work access only. Reach out to your admin to request access to ChatGPT."
            }), V[27] = v) : v = V[27];
            let eg = v;
            if (ec) {
                let e;
                V[28] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(i.a, {
                    id: "UsageBasedWorkspaceAccessModal.chatWork.ownerMessage",
                    defaultMessage: "Your current seat is Work-only. Update your seat type in Workspace settings to start using ChatGPT."
                }), V[28] = e) : e = V[28], eg = e
            } else if (eo) {
                let e;
                V[29] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(i.a, {
                    id: "UsageBasedWorkspaceAccessModal.chatWork.adminMessage",
                    defaultMessage: "You are assigned Work access only. Ask your workspace owner to buy ChatGPT seats, then update your seat type in Workspace settings."
                }), V[29] = e) : e = V[29], eg = e
            }
            V[30] !== ed || V[31] !== J ? (b = e => {
                e || (ed("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_CLOSED"), J())
            }, V[30] = ed, V[31] = J, V[32] = b) : b = V[32], V[33] !== eh ? (k = e => {
                e.preventDefault(), eh()
            }, V[33] = eh, V[34] = k) : k = V[34], V[35] === Symbol.for("react.memo_cache_sentinel") ? (R = (0, a.jsx)(I.e, {
                className: "heading-lg font-semibold",
                children: ep
            }), V[35] = R) : R = V[35], V[36] !== eg ? (L = (0, a.jsxs)("div", {
                className: "flex w-full max-w-md flex-col gap-4",
                children: [R, (0, a.jsx)(I.d, {
                    className: "text-lg leading-6 text-secondary",
                    children: eg
                })]
            }), V[36] = eg, V[37] = L) : L = V[37];
            let em = "requesting" === en,
                ef = "requesting" === en;
            return V[38] !== ec ? (z = ec ? (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.updateSeatButton",
                defaultMessage: "Update seat"
            }) : (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.requestAccessButton",
                defaultMessage: "Request access"
            }), V[38] = ec, V[39] = z) : z = V[39], V[40] !== em || V[41] !== ef || V[42] !== z ? (F = (0, a.jsx)(h.a, {
                autoFocus: !0,
                className: "w-full",
                size: "auth",
                type: "submit",
                loading: em,
                disabled: ef,
                children: z
            }), V[40] = em, V[41] = ef, V[42] = z, V[43] = F) : F = V[43], V[44] !== eu || V[45] !== ed || V[46] !== J || V[47] !== X ? (B = () => {
                X ? (J(), X()) : (ed("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_BACK_TO_CODEX_CLICKED"), eu())
            }, V[44] = eu, V[45] = ed, V[46] = J, V[47] = X, V[48] = B) : B = V[48], V[49] !== X ? (D = X ? (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.chatWork.switchToWorkButton",
                defaultMessage: "Switch to Work"
            }) : (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.backToCodexButton",
                defaultMessage: "Back to Codex"
            }), V[49] = X, V[50] = D) : D = V[50], V[51] !== B || V[52] !== D ? (G = (0, a.jsx)(h.a, {
                className: "w-full",
                color: "outlineGhost",
                size: "auth",
                onClick: B,
                children: D
            }), V[51] = B, V[52] = D, V[53] = G) : G = V[53], V[54] !== F || V[55] !== G ? (H = (0, a.jsxs)("div", {
                className: "flex w-full max-w-xs flex-col gap-3",
                children: [F, G]
            }), V[54] = F, V[55] = G, V[56] = H) : H = V[56], V[57] !== ee || V[58] !== en ? (q = null != en && "requesting" !== en ? (0, a.jsx)("p", {
                className: "text-sm text-secondary",
                role: "alert",
                children: "error" !== en ? (0, a.jsx)(i.a, {
                    id: "businessSeatRenewal.wait",
                    defaultMessage: "Seat changes are temporarily unavailable. Please try again after {time}.",
                    values: {
                        time: ee.formatDate(en.retry_at, {
                            dateStyle: "medium",
                            timeStyle: "short"
                        })
                    }
                }) : (0, a.jsx)(i.a, {
                    id: "UsageBasedWorkspaceAccessModal.errorMessage",
                    defaultMessage: "Could not request access. Please contact your workspace administrator to grant ChatGPT access."
                })
            }) : null, V[57] = ee, V[58] = en, V[59] = q) : q = V[59], V[60] !== L || V[61] !== H || V[62] !== q ? (W = (0, a.jsxs)("div", {
                className: "flex flex-col items-center gap-8 p-10 text-center",
                children: [L, H, q]
            }), V[60] = L, V[61] = H, V[62] = q, V[63] = W) : W = V[63], V[64] !== W || V[65] !== k ? (K = (0, a.jsx)(T.b, {
                as: "form",
                className: "select-none",
                size: "viewport",
                variant: "chatgpt",
                onSubmit: k,
                children: W
            }), V[64] = W, V[65] = k, V[66] = K) : K = V[66], V[67] !== K || V[68] !== b ? (U = (0, a.jsx)(I.a, {
                open: !0,
                size: "wide",
                variant: "chatgpt",
                onOpenChange: b,
                children: K
            }), V[67] = K, V[68] = b, V[69] = U) : U = V[69], U
        }

        function N(e) {
            return null != O(e)
        }

        function O(e) {
            if (e instanceof k.a && 409 === e.status) try {
                let t = v.object({
                    detail: v.object({
                        operation: v.literal("switch"),
                        error_type: v.literal("stale_state"),
                        retry: v.object({
                            reason: v.literal("renewal_in_progress"),
                            retry_at: b.datetime()
                        })
                    })
                }).safeParse(JSON.parse(e.message));
                return t.success ? t.data.detail.retry : void 0
            } catch {
                return
            }
        }
        var L = n("pBDs");

        function z(e) {
            let t, n, o = (0, r.c)(9),
                {
                    modeToggle: i,
                    onSwitchToWork: c
                } = e,
                h = (0, s.y)(g.a),
                p = (0, s.z)(L.a),
                m = (0, s.z)(d.v),
                f = (0, l._)();
            if ("restricted" !== p.status) return null;
            let v = `${p.accountId}:${p.userId}`;
            return o[0] !== f || o[1] !== c || o[2] !== h || o[3] !== m.status ? (t = "allowed" === m.status ? c ?? (() => {
                (0, u.m)(h, "work"), f("/")
            }) : void 0, o[0] = f, o[1] = c, o[2] = h, o[3] = m.status, o[4] = t) : t = o[4], o[5] !== i || o[6] !== v || o[7] !== t ? (n = (0, a.jsx)(F, {
                modeToggle: i,
                onSwitchToWork: t
            }, v), o[5] = i, o[6] = v, o[7] = t, o[8] = n) : n = o[8], n
        }

        function F(e) {
            let t, n, l, c, d, u = (0, r.c)(13),
                {
                    modeToggle: g,
                    onSwitchToWork: m
                } = e,
                f = (0, s.z)(L.a),
                [v, b] = (0, o.useState)(!1);
            return "restricted" !== f.status ? null : (u[0] !== g ? (t = null == g ? null : (0, a.jsx)(p.c, {
                children: g
            }), u[0] = g, u[1] = t) : t = u[1], u[2] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)("h1", {
                className: "heading-xl font-normal text-default",
                children: (0, a.jsx)(i.a, {
                    id: "UsageBasedWorkspaceAccessModal.chatWork.title",
                    defaultMessage: "You don’t have access to Chat on this plan"
                })
            }), u[2] = n) : n = u[2], u[3] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, a.jsx)("main", {
                ref: void 0,
                className: "flex h-full min-h-0 flex-1 items-center justify-center px-panel",
                children: (0, a.jsxs)("div", {
                    className: "flex w-full max-w-3xl flex-col items-center gap-8 text-center select-none",
                    children: [n, (0, a.jsx)(h.a, {
                        onClick: () => b(!1),
                        children: (0, a.jsx)(i.a, {
                            id: "chatSeatAccess.reviewAccess",
                            defaultMessage: "Review access options"
                        })
                    })]
                })
            }), u[3] = l) : l = u[3], u[4] !== v || u[5] !== m || u[6] !== f.account || u[7] !== f.accountId || u[8] !== f.userId ? (c = v ? null : (0, a.jsx)(R, {
                account: f.account,
                accountId: f.accountId,
                userId: f.userId,
                onClose: () => b(!0),
                onSwitchToWork: m
            }), u[4] = v, u[5] = m, u[6] = f.account, u[7] = f.accountId, u[8] = f.userId, u[9] = c) : c = u[9], u[10] !== t || u[11] !== c ? (d = (0, a.jsxs)(a.Fragment, {
                children: [t, l, c]
            }), u[10] = t, u[11] = c, u[12] = d) : d = u[12], d)
        }

        function B(e) {
            let t, n, o = (0, r.c)(4),
                {
                    children: i,
                    enabled: l
                } = e;
            o[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                name: "chatgpt.seat-access"
            }, o[0] = t) : t = o[0];
            let d = (0, s.x)(c.a, t);
            return l ? d.isLoading ? null : (o[1] !== d.isCapable || o[2] !== i ? (n = d.isCapable ? (0, a.jsx)(z, {}) : i, o[1] = d.isCapable, o[2] = i, o[3] = n) : n = o[3], n) : i
        }
    }),
    v0xU: (function(e, t, n) {
        var a = n("QdUF");

        function r() {
            let e = (0, a.getBrowserChatGptAuthSnapshot)();
            return e?.userId && e.accessToken && !(0, a.isBrowserWorkspaceSwitchPending)() ? JSON.stringify([e.userId, e.accountId]) : null
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, {
                        frame: s,
                        target: o,
                        owner: i,
                        transport: l,
                        onStatus: c
                    } = e,
                    d = new AbortController,
                    u = "",
                    h = () => {
                        d.abort(), s.srcdoc = "", s.removeAttribute("src"), n = n ?? t?.dispose(), t = void 0, window.removeEventListener(a.BROWSER_AUTH_CHANGED_EVENT, p), window.removeEventListener(a.BROWSER_AUTH_CONTEXT_CHANGED_EVENT, p), s.removeEventListener("load", g)
                    },
                    p = () => {
                        if (r() !== i) {
                            h(), c("error");
                            return
                        }
                        let e = (0, a.getBrowserChatGptAuthSnapshot)()?.accessToken;
                        null != t && e && e !== u && (u = e, t.refresh(e).catch(() => {
                            d.signal.aborted || (h(), c("error"))
                        }))
                    },
                    g = () => {
                        d.signal.aborted || null == t || s.hasAttribute("srcdoc") || c("ready")
                    };
                s.srcdoc = "", window.addEventListener(a.BROWSER_AUTH_CHANGED_EVENT, p), window.addEventListener(a.BROWSER_AUTH_CONTEXT_CHANGED_EVENT, p), s.addEventListener("load", g);
                let m = (0, a.getBrowserChatGptAuthSnapshot)();
                if (null == m || r() !== i) return h(), c("error"), async () => {};
                c("loading"), u = m.accessToken;
                let f = (async () => {
                    try {
                        let e = await l.open({
                            target: o,
                            accessToken: u,
                            signal: d.signal
                        });
                        if (d.signal.aborted || r() !== i) {
                            n = e.dispose(), d.signal.aborted || (h(), c("error"));
                            return
                        }
                        if (t = e, "https:" !== e.url.protocol || e.url.username || e.url.password || e.url.origin === window.location.origin || e.url.origin !== o.publicUrl.origin) throw Error("Portal preview requires an isolated origin");
                        s.src = e.url.href, s.removeAttribute("srcdoc"), p()
                    } catch {
                        d.signal.aborted || (h(), c("error"))
                    }
                })();
                return () => (h(), f.then(() => n))
            },
            b: r
        })
    }),
    m625: (function(e, t, n) {
        let a = /^https:\/\/([a-f0-9]{32})--([1-9][0-9]{0,4})--preview\.([^/?#]+)(?=[/?#]|$)/iu;
        n.d(t, {}, {
            a: function(e, t) {
                if (/[\s\p{Cc}\\]/u.test(e)) return null;
                let n = a.exec(e);
                if (null == n || n[3].toLowerCase() !== (t ?? "chatgpt.site")) return null;
                let r = Number(n[2]);
                return r > 65535 ? null : {
                    publicUrl: new URL(e),
                    port: r
                }
            }
        })
    }),
    B1XR: (function(e, t, n) {
        n.d(t, {
            SitePreviewBridge: () => O
        });
        var a = n("ABep"),
            r = n("QosV"),
            s = n("Q840"),
            o = n("aFoA"),
            i = n("Bbed"),
            l = n("tSEg"),
            c = n("zd8w"),
            d = n("IDNd"),
            u = n("Ot7V"),
            h = n("QcW8"),
            p = n("ZU27"),
            g = n("EpL9"),
            m = n("M8lA"),
            f = n("bf6R"),
            v = n("svjy"),
            b = n("rd65"),
            y = n("v0xU"),
            x = n("m625");
        let w = (0, i.a)(async () => (await n.e(969762).then(n.bind(n, "KodB"))).PortalPreview),
            C = (0, g.k)("portal-preview", w, {
                ownsSingleTabHeader: () => !0,
                dropDestinations: ["right"],
                isAvailable: () => !0 === (0, m.getClientBootstrap)().portalPreviewEnabled,
                open: _,
                canUndoClose: () => !1,
                showInNewTabLauncher: !1
            });

        function _(e, t, n) {
            if (null == n || !C.isAvailable(e) || e.get(l.j) || !e.get(h.h)) return !1;
            let r = (0, m.getClientBootstrap)().stagingPortalPreviewDomain,
                s = (0, x.a)(t, r),
                o = (0, y.b)();
            return null != s && null != o && ((0, p.h)(e, C, {
                id: `portal-preview:${s.publicUrl.origin}`,
                icon: (0, a.jsx)(f.Vd, {}),
                props: {
                    url: s.publicUrl.href,
                    owner: o,
                    transport: n,
                    stagingPortalDomain: r
                },
                revealAndFocus: !0,
                title: e.get(v.a).formatMessage({
                    id: "sites.portals.tabTitle",
                    defaultMessage: "Local site preview"
                })
            }), (0, b.b)(e))
        }
        var S = n("lkCH");
        let j = {
            async open(e) {
                let {
                    target: t,
                    accessToken: n,
                    signal: a
                } = e, r = new URL("/_portals/web-session", t.publicUrl.origin), s = crypto.randomUUID(), o = `portal-preview:${t.publicUrl.origin}`, i = !1, l = (0, S.a)(), c = (0, S.a)(), d = Promise.resolve(), u = () => (i = !0, c.resolve(void 0), m), h = () => {
                    u()
                }, p = async (e, t) => fetch(r, {
                    method: e,
                    credentials: "include",
                    mode: "cors",
                    redirect: "error",
                    cache: "no-store",
                    referrerPolicy: "no-referrer",
                    signal: AbortSignal.timeout(1e4),
                    headers: {
                        "X-Portals-Session-Id": s,
                        ...null == t ? {} : {
                            Authorization: t
                        }
                    }
                }), g = async e => {
                    if (i || a.aborted) throw Error("Preview closed");
                    try {
                        let t = await p("POST", `Bearer ${e}`);
                        if (204 !== t.status) throw Error("Preview session unavailable");
                        if (i || a.aborted) throw Error("Preview closed");
                        let n = await p("GET");
                        if (204 !== n.status || i || a.aborted) throw Error("Preview session unavailable")
                    } catch {
                        throw Error("Preview session unavailable")
                    }
                }, m = navigator.locks.request(o, {
                    ifAvailable: !0
                }, async e => {
                    if (null == e) throw Error("Preview already open");
                    a.addEventListener("abort", h, {
                        once: !0
                    });
                    try {
                        await g(n), l.resolve({
                            url: new URL(t.publicUrl.href),
                            refresh: e => {
                                let t = d.then(() => g(e));
                                return d = t.catch(() => {}), t
                            },
                            dispose: u
                        }), await c.promise
                    } finally {
                        i = !0, a.removeEventListener("abort", h), await d, await (async () => {
                            await p("DELETE")
                        })().catch(() => {})
                    }
                }).catch(() => l.reject(Error("Preview session unavailable")));
                return l.promise
            }
        };

        function I(e) {
            let t, n, a = (0, r.c)(5),
                {
                    transport: i
                } = e,
                h = (0, s.y)(l.a),
                p = (0, c.useContext)(d.b);
            return a[0] !== h || a[1] !== i || a[2] !== p ? (t = () => {
                let e = void 0 === i ? j : i;
                if (null != e && p) return (0, u.h)(t => {
                    let {
                        href: n,
                        conversationId: a
                    } = t;
                    if (null != a) {
                        let e = (0, l.d)(h.value, {
                            includeChatGpt: !0
                        });
                        if (!("chatgpt-thread" === h.value.routeKind ? (0, o.d)(h.get, a) === (0, o.d)(h.get, e) : a === e)) return !1
                    }
                    return _(h, n, e)
                })
            }, n = [h, i, p], a[0] = h, a[1] = i, a[2] = p, a[3] = t, a[4] = n) : (t = a[3], n = a[4]), (0, c.useEffect)(t, n), null
        }
        var T = n("gbrq"),
            E = n("rxj0"),
            P = n("uk1V"),
            A = n("PIpC"),
            M = n("UejO");

        function k() {
            let e, t, a, i, d = (0, r.c)(6),
                u = (0, s.y)(l.a);
            return d[0] !== u ? (e = () => {
                let e = null;
                return u.watch(t => {
                    let a = t.get(A.c),
                        r = t.get(h.h),
                        s = t.get(M.b),
                        i = t.get(o.a, s?.hostId == null ? s?.conversationId ?? null : null),
                        l = t.get(T.h),
                        c = t.get(p.l.tabs$),
                        d = "chatgpt-thread" === t.value.routeKind && t.get(E.e, t.value.conversationId);
                    if (null == a || !r || d || e === a || (e = a, (0, M.a)(s, t.value, i, t.value.clientThreadId) || l || c.length > 0)) return;
                    let u = (0, A.a)(a);
                    if (!u?.isOpen) return;
                    let g = !1;
                    return Promise.resolve().then(n.bind(n, "SQbA")).then(e => {
                        let {
                            appgenProjectQuery$: n
                        } = e;
                        return g ? null : t.query.fetch(n, u.projectId)
                    }).then(e => {
                        let n = (0, A.a)(a);
                        g || null == e || !n?.isOpen || n.projectId !== u.projectId || "active" !== e.status || null == e.current_live_url || "chatgpt-thread" === t.value.routeKind && t.get(E.e, t.value.conversationId) || (0, P.a)(t, {
                            type: "appgen-app",
                            projectId: e.id,
                            title: e.title,
                            url: e.current_live_url
                        })
                    }, R), () => {
                        g = !0
                    }
                })
            }, t = [u], d[0] = u, d[1] = e, d[2] = t) : (e = d[1], t = d[2]), (0, c.useEffect)(e, t), d[3] !== u ? (a = () => {
                let e = u.get(T.i),
                    t = null;
                return u.watch(n => {
                    let a = n.get(T.i),
                        r = n.get(p.l.activeTab$),
                        s = n.get(A.c);
                    (a !== e || null == t && null != s) && null != s && r?.tabId.startsWith("site-preview:") && (0, A.b)(s, r.tabId.slice(13), a), e = a, t = s
                })
            }, i = [u], d[3] = u, d[4] = a, d[5] = i) : (a = d[4], i = d[5]), (0, c.useEffect)(a, i), null
        }

        function R() {}
        let N = (0, i.a)(async () => (await n.e(402037).then(n.bind(n, "U1Pf"))).OpenPendingSitePreview);

        function O() {
            let e, t, n, i, c, d = (0, r.c)(13),
                u = (0, s.y)(l.a),
                h = (0, s.z)(M.b),
                p = (0, s.x)(o.a, h?.hostId == null ? h?.conversationId ?? null : null);
            if ("home" !== u.value.routeKind && "chatgpt-thread" !== u.value.routeKind && "local-thread" !== u.value.routeKind) return null;
            d[0] !== h || d[1] !== p || d[2] !== u ? (e = h?.url != null && (0, M.a)(h, u.value, p, u.value.clientThreadId), d[0] = h, d[1] = p, d[2] = u, d[3] = e) : e = d[3];
            let g = e;
            return d[4] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(I, {}), d[4] = t) : t = d[4], d[5] !== u ? (n = "home" !== u.value.routeKind ? (0, a.jsx)(k, {}) : null, d[5] = u, d[6] = n) : n = d[6], d[7] !== g || d[8] !== h ? (i = g ? (0, a.jsx)(N, {
                pending: h
            }) : null, d[7] = g, d[8] = h, d[9] = i) : i = d[9], d[10] !== n || d[11] !== i ? (c = (0, a.jsxs)(a.Fragment, {
                children: [t, n, i]
            }), d[10] = n, d[11] = i, d[12] = c) : c = d[12], c
        }
    }),
    Pyg2: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("Q840"),
            o = n("mYNH"),
            i = n("tSEg"),
            l = n("ZIh4");
        n.d(t, {}, {
            a: function(e) {
                let t, n, c, d, u = (0, r.c)(10);
                u[0] !== e ? ({
                    composerOnly: n,
                    placement: c,
                    ...t
                } = e, u[0] = e, u[1] = t, u[2] = n, u[3] = c) : (t = u[1], n = u[2], c = u[3]);
                let h = void 0 === n || n,
                    p = void 0 === c ? "floating" : c,
                    g = (0, s.y)(i.a),
                    m = (0, s.z)("home" === g.value.routeKind && l.a),
                    f = m ? "floating" : p,
                    v = !m && t.reserveContent,
                    b = !!m || t.showHeader;
                return u[4] !== h || u[5] !== t || u[6] !== f || u[7] !== v || u[8] !== b ? (d = (0, a.jsx)(o.a, {
                    ...t,
                    composerOnly: h,
                    placement: f,
                    reserveContent: v,
                    showHeader: b
                }), u[4] = h, u[5] = t, u[6] = f, u[7] = v, u[8] = b, u[9] = d) : d = u[9], d
            }
        })
    }),
    AZW7: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("zd8w"),
            o = n("kjQz"),
            i = n("dJBt");
        n.d(t, {}, {
            a: function(e) {
                let t, n, l, c, d, u, h = (0, r.c)(11),
                    {
                        name: p,
                        ready: g,
                        failed: m
                    } = e,
                    f = void 0 !== m && m,
                    v = (0, s.useRef)(!1),
                    b = (0, s.useRef)(null);
                h[0] !== p ? (t = () => ({
                    name: p,
                    key: crypto.randomUUID(),
                    startedAtMs: performance.timeOrigin + performance.now()
                }), h[0] = p, h[1] = t) : t = h[1];
                let [y] = (0, s.useState)(t);
                return h[2] !== y ? (n = () => (v.current = !0, b.current = b.current ?? o.a.start(y.name, {}, y), b.current.mark("route_entered"), () => {
                    v.current = !1, queueMicrotask(() => {
                        v.current || b.current?.abort("navigation_away")
                    })
                }), l = [y], h[2] = y, h[3] = n, h[4] = l) : (n = h[3], l = h[4]), (0, s.useEffect)(n, l), h[5] !== f || h[6] !== g ? (c = () => {
                    !g && f && b.current?.fail("load_failed")
                }, d = [g, f], h[5] = f, h[6] = g, h[7] = c, h[8] = d) : (c = h[7], d = h[8]), (0, s.useEffect)(c, d), h[9] !== g ? (u = g ? (0, a.jsx)(i.a, {
                    requireVisibleAtPaint: !0,
                    onPaint: () => {
                        b.current?.mark("content_visible"), b.current?.end()
                    }
                }) : null, h[9] = g, h[10] = u) : u = h[10], u
            }
        })
    }),
    Azn0: (function(e, t, n) {
        var a = n("Q840"),
            r = n("QcW8"),
            s = n("ZU27"),
            o = n("tSEg");
        let i = (0, a.c)(o.a, e => {
                let {
                    get: t
                } = e;
                return null != t(r.ab) && null != t(s.l.activeTab$)
            }),
            l = (0, a.c)(o.a, e => {
                let {
                    get: t
                } = e;
                return t(i) && !t(r.B)
            });
        n.d(t, {}, {
            a: i,
            b: l
        })
    }),
    mYNH: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("l2oX"),
            o = n("Q840"),
            i = n("zd8w"),
            l = n("Wf1j"),
            c = n("Q2Qp"),
            d = n("QcW8"),
            u = n("ZU27"),
            h = n("wD9O"),
            p = n("nKJ6"),
            g = n("vi3X"),
            m = n("O9Pc"),
            f = n("fDIZ"),
            v = n("jEN2"),
            b = n("AKr5"),
            y = n("wqvF"),
            x = n("giDA"),
            w = n("fQ9c"),
            C = n("ttIa"),
            _ = n("xD3Z"),
            S = n("Z2JT"),
            j = n("Sgih"),
            I = n("tSEg"),
            T = n("hZax"),
            E = n("SHid"),
            P = n("El6m"),
            A = n("dN0a"),
            M = n("WwnD"),
            k = n("giVD"),
            R = n("Vhua"),
            N = n("Azn0"),
            O = n("abd8"),
            L = n("GMTh");

        function z(e) {
            let t, n, s, l, c, d, u, h, p, m, v, b, y, w, C, _ = (0, r.c)(49),
                {
                    children: S,
                    composerRef: j,
                    mainContentElement: T,
                    presentation: E,
                    paneContext: M,
                    layout: k,
                    reserveContent: R,
                    reserveFullComposerHeight: N
                } = e,
                O = (0, o.y)(I.a),
                L = (0, i.useContext)(P.b),
                z = (0, i.useContext)(f.a),
                F = (0, i.useContext)(g.a),
                B = (0, i.useContext)(x.a),
                {
                    activeBrowserTabId: D
                } = L,
                G = null != M,
                {
                    isCompact: H,
                    isDockedTop: q,
                    isHidden: W,
                    isMinimized: K
                } = E,
                {
                    isMoving: U,
                    composerContentHeight: V,
                    dockedReservePx: Q
                } = k,
                $ = !R || W || K ? 0 : Math.max(118, H ? Q : 0, N ? V + 118 - 102 : 0),
                Y = q && H && Q > 0 ? $ : 0,
                [J, X] = (0, i.useState)(!K);
            (H || K) && !K !== J && X(!K);
            let Z = R && !W && J ? A.b : 0;
            _[0] !== D || _[1] !== j || _[2] !== G ? (t = () => {
                if (G || null == D) return;
                let e = j.current?.ownerDocument.activeElement;
                e instanceof HTMLElement && j.current?.contains(e) && e.blur()
            }, n = [D, j, G], _[0] = D, _[1] = j, _[2] = G, _[3] = t, _[4] = n) : (t = _[3], n = _[4]), (0, i.useLayoutEffect)(t, n), _[5] !== j || _[6] !== Z || _[7] !== q || _[8] !== W || _[9] !== K || _[10] !== G || _[11] !== T || _[12] !== $ || _[13] !== O || _[14] !== Y ? (s = () => {
                if (G || null == T) return;
                O.set(A.n, {
                    owner: j,
                    style: {
                        [A.a]: q ? `${Z}px 0 0` : `0 0 ${Z}px`,
                        [A.c]: `${W||K||q?0:102}px`,
                        [A.d]: `${q?0:$}px`,
                        [A.g]: `${q?$:0}px`
                    }
                }), (0, A.u)(O, q ? 0 : $), O.set(A.o, Y);
                let e = q ? "top" : "bottom";
                O.set(A.k, 0 === Z ? null : e)
            }, l = [j, Z, G, q, W, K, T, $, O, Y], _[5] = j, _[6] = Z, _[7] = q, _[8] = W, _[9] = K, _[10] = G, _[11] = T, _[12] = $, _[13] = O, _[14] = Y, _[15] = s, _[16] = l) : (s = _[15], l = _[16]), (0, i.useLayoutEffect)(s, l), _[17] !== j || _[18] !== G || _[19] !== T || _[20] !== O ? (c = () => {
                if (!G && null != T) return () => {
                    let e = O.get(A.n);
                    e?.owner === j && (O.set(A.n, {
                        ...e,
                        owner: null
                    }), (0, A.u)(O, 0), O.set(A.o, 0), O.set(A.k, null))
                }
            }, d = [j, G, T, O], _[17] = j, _[18] = G, _[19] = T, _[20] = O, _[21] = c, _[22] = d) : (c = _[21], d = _[22]), (0, i.useLayoutEffect)(c, d);
            let ee = !H || K || U || V > 102;
            _[23] !== j || _[24] !== ee || _[25] !== G || _[26] !== O ? (u = () => {
                let e = j.current;
                if (G || null == e) return;
                let t = () => {
                    let t = !ee && null != e.querySelector('[aria-haspopup="dialog"][aria-expanded="true"]');
                    O.set(A.j, ee || t)
                };
                t();
                let n = ee ? null : new MutationObserver(t);
                return n?.observe(e, {
                    attributes: !0,
                    attributeFilter: ["aria-expanded"],
                    childList: !0,
                    subtree: !0
                }), () => {
                    n?.disconnect()
                }
            }, h = [j, ee, G, O], _[23] = j, _[24] = ee, _[25] = G, _[26] = O, _[27] = u, _[28] = h) : (u = _[27], h = _[28]), (0, i.useLayoutEffect)(u, h), _[29] !== G || _[30] !== O ? (m = () => () => {
                G || O.set(A.j, !1)
            }, p = [G, O], _[29] = G, _[30] = O, _[31] = p, _[32] = m) : (p = _[31], m = _[32]), (0, i.useLayoutEffect)(m, p);
            let et = null == M ? L : M.transition,
                en = null == M ? z : M.escapeHandler,
                ea = null == M ? F : M.bannerTarget,
                er = null == M ? B : M.overlayOwner,
                es = G ? "contents" : void 0;
            return _[33] !== S || _[34] !== j || _[35] !== es ? (v = (0, a.jsx)("div", {
                ref: j,
                className: es,
                "data-right-panel-composer-overlay-content": "true",
                children: S
            }), _[33] = S, _[34] = j, _[35] = es, _[36] = v) : v = _[36], _[37] !== er || _[38] !== v ? (b = (0, a.jsx)(x.a, {
                value: er,
                children: v
            }), _[37] = er, _[38] = v, _[39] = b) : b = _[39], _[40] !== ea || _[41] !== b ? (y = (0, a.jsx)(g.a, {
                value: ea,
                children: b
            }), _[40] = ea, _[41] = b, _[42] = y) : y = _[42], _[43] !== en || _[44] !== y ? (w = (0, a.jsx)(f.a, {
                value: en,
                children: y
            }), _[43] = en, _[44] = y, _[45] = w) : w = _[45], _[46] !== et || _[47] !== w ? (C = (0, a.jsx)(P.b, {
                value: et,
                children: w
            }), _[46] = et, _[47] = w, _[48] = C) : C = _[48], C
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, F, B, D, G, H = (0, r.c)(61),
                    {
                        children: q,
                        composerOnly: W,
                        forceExpanded: K,
                        placement: U,
                        showHeader: V,
                        showConversationTitleMenu: Q,
                        showComposerDivider: $,
                        isHidden: Y,
                        persistPresentation: J,
                        reserveContent: X,
                        reserveFullComposerHeight: Z,
                        onPresentationChange: ee,
                        title: et,
                        minimizedIcon: en,
                        titleContent: ea,
                        statusState: er,
                        titleStatusState: es,
                        hasElicitation: eo,
                        notifications: ei,
                        workingPreview: el,
                        compactWorkingPreview: ec,
                        responsePreview: ed,
                        previewBubble: eu,
                        renderTranscript: eh,
                        hasConversation: ep,
                        hasTranscript: eg,
                        pendingFormId: em,
                        emptyState: ef
                    } = e,
                    ev = void 0 !== W && W,
                    eb = void 0 !== K && K,
                    ey = void 0 === V || V,
                    ex = void 0 === $ ? !ev : $,
                    ew = void 0 === J || J,
                    eC = void 0 === em ? j.a : em,
                    e_ = (0, o.y)(I.a),
                    eS = "pane" === (void 0 === U ? "floating" : U),
                    ej = (0, T.f)("2163293173"),
                    eI = ej ? ef : void 0,
                    eT = !ev || ej && (null != eI || (eg ?? null != eh)),
                    eE = (0, o.z)(!!eT && N.a),
                    eP = (0, l.a)(),
                    {
                        isHidden: eA
                    } = (0, L.a)(eS ? "embedded" : "content"),
                    eM = void 0 !== Y && Y || eA,
                    ek = (0, o.z)(!(void 0 !== Q && Q) || eS || eM ? null : k.a),
                    eR = (0, i.useContext)(c.a),
                    eN = (0, i.useContext)(P.b),
                    eO = (0, i.useContext)(P.a),
                    eL = (0, i.useContext)(m.a),
                    ez = (0, i.useContext)(f.a),
                    eF = (0, i.useContext)(g.a),
                    eB = (0, i.useContext)(x.a),
                    eD = (0, h.c)();
                H[0] !== eD ? (t = e => {
                    let {
                        x: t,
                        y: n
                    } = e;
                    return {
                        x: t / eD,
                        y: n / eD
                    }
                }, H[0] = eD, H[1] = t) : t = H[1];
                let eG = t,
                    [eH, eq] = (0, i.useState)(null),
                    eW = !(0, o.z)(A.s),
                    eK = (0, i.useRef)(null),
                    eU = (0, o.z)(eC),
                    eV = (0, o.z)(ew ? S.b : void 0);
                eT || ey || (eV = "compact");
                let eQ = (0, o.z)(null == eU && (eo ?? P.c)),
                    e$ = (0, o.z)(u.l.activeTab$),
                    eY = (0, o.z)(d.q),
                    eJ = (0, o.z)(!!eY && R.i);
                H[2] !== e$ || H[3] !== eS ? (n = eS ? null : (0, p.getThreadBrowserTabIdFromPanelTab)(e$), H[2] = e$, H[3] = eS, H[4] = n) : n = H[4];
                let eX = n,
                    eZ = void 0 !== Z && Z || e$?.tabType.kind === "latex-document" || e$?.tabType.kind === "image-preview";
                H[5] !== eU ? (F = () => {
                    let e = null != eU ? (0, b.a)(eK.current) : eK.current?.querySelector("[contenteditable='true']");
                    null == e || (0, v.g)(e) || e.focus({
                        preventScroll: !0
                    })
                }, H[5] = eU, H[6] = F) : F = H[6];
                let e0 = F;
                H[7] === Symbol.for("react.memo_cache_sentinel") ? (B = (0, a.jsx)("div", {
                    ref: e => {
                        null != e && eq(e)
                    },
                    className: "contents"
                }), H[7] = B) : B = H[7];
                let e1 = eS || eM;
                return H[8] !== eX || H[9] !== e$ || H[10] !== eT || H[11] !== eE || H[12] !== q || H[13] !== ec || H[14] !== ev || H[15] !== ej || H[16] !== eI || H[17] !== e0 || H[18] !== eb || H[19] !== ep || H[20] !== eQ || H[21] !== eg || H[22] !== eY || H[23] !== eF || H[24] !== ez || H[25] !== eB || H[26] !== eO || H[27] !== eN || H[28] !== eP || H[29] !== eM || H[30] !== eW || H[31] !== eS || H[32] !== eR || H[33] !== en || H[34] !== eJ || H[35] !== ei || H[36] !== ee || H[37] !== eH || H[38] !== eU || H[39] !== ew || H[40] !== eu || H[41] !== eh || H[42] !== X || H[43] !== ed || H[44] !== e_ || H[45] !== eZ || H[46] !== ex || H[47] !== ey || H[48] !== er || H[49] !== eV || H[50] !== eL || H[51] !== et || H[52] !== ea || H[53] !== ek || H[54] !== es || H[55] !== eG || H[56] !== el ? (D = e => (0, a.jsx)(s.a, {
                    transformPagePoint: eG,
                    children: (0, a.jsx)(P.b, {
                        value: eS ? eN : {
                            activeBrowserTabId: eX,
                            isInsideOverlay: !0,
                            onAttachmentAdded: () => {
                                e_.get(u.l.activeTab$)?.tabId === e$?.tabId && (e_.get(A.l) || (0, A.i)(e_, {
                                    prefersReducedMotion: !0
                                }), (0, v.d)())
                            },
                            shouldAnimate: !1
                        },
                        children: (0, a.jsx)(P.a, {
                            value: eS ? eO : "expanded",
                            children: (0, a.jsx)(C.a, {
                                preserveLayoutOnEscape: !0,
                                contentChat: {
                                    focusComposer: e0,
                                    onOpenRightPane: eY && eE ? () => {
                                        (0, M.a)(e_, "chat") && ej && e_.set(E.a, e_.get(d.lb))
                                    } : void 0,
                                    openRightPaneDisabled: eJ
                                },
                                dockThreadKey: O.c,
                                canDock: eT || ey,
                                titleContent: ek ?? ea,
                                minimizedIcon: en,
                                statusState: er,
                                titleStatusState: es,
                                hasTranscript: eg,
                                hasConversation: ep,
                                emptyState: eI,
                                pendingFormId: eU,
                                notifications: ei,
                                workingPreview: el,
                                compactWorkingPreview: ec,
                                responsePreview: ed,
                                previewBubble: eu,
                                containerSize: e,
                                renderMenu: eY ? void 0 : e => (0, a.jsx)(_.a, {
                                    ...e,
                                    showOptions: !ej || eT
                                }),
                                forceExpanded: eb || eQ && (ej || !ev),
                                isHidden: eS || eM,
                                isMinimized: eW,
                                presentation: eV,
                                showHeader: ey,
                                showComposerDivider: ex,
                                background: ev && !ey ? void 0 : "panel",
                                onPresentationChange: e => {
                                    ew && e_.set(S.b, e), ee?.(e)
                                },
                                onMinimizedChange: e => {
                                    (0, A.t)(e_, e)
                                },
                                title: et ?? eP.formatMessage({
                                    id: "quickChat.mainConversation",
                                    defaultMessage: "Chat"
                                }),
                                renderTranscript: null == eh ? void 0 : (e, t) => eh({
                                    isVisible: t && !eS && !eM
                                }),
                                renderComposer: (e, t) => (0, a.jsx)(m.a, {
                                    value: eS || null == eX ? eL : eR,
                                    children: (0, a.jsx)(y.a, {
                                        target: eS ? eH : null,
                                        children: (0, a.jsx)(z, {
                                            composerRef: eK,
                                            mainContentElement: eR,
                                            presentation: e,
                                            paneContext: eS ? {
                                                transition: eN,
                                                escapeHandler: ez,
                                                bannerTarget: eF,
                                                overlayOwner: eB
                                            } : void 0,
                                            layout: t,
                                            reserveFullComposerHeight: eZ,
                                            reserveContent: X ?? (null == eX && e$?.tabType.kind !== "mcp-app" && e$?.tabType.kind !== "mcp-extension"),
                                            children: "function" == typeof q ? q(eS ? void 0 : e) : q
                                        })
                                    })
                                })
                            })
                        })
                    })
                }), H[8] = eX, H[9] = e$, H[10] = eT, H[11] = eE, H[12] = q, H[13] = ec, H[14] = ev, H[15] = ej, H[16] = eI, H[17] = e0, H[18] = eb, H[19] = ep, H[20] = eQ, H[21] = eg, H[22] = eY, H[23] = eF, H[24] = ez, H[25] = eB, H[26] = eO, H[27] = eN, H[28] = eP, H[29] = eM, H[30] = eW, H[31] = eS, H[32] = eR, H[33] = en, H[34] = eJ, H[35] = ei, H[36] = ee, H[37] = eH, H[38] = eU, H[39] = ew, H[40] = eu, H[41] = eh, H[42] = X, H[43] = ed, H[44] = e_, H[45] = eZ, H[46] = ex, H[47] = ey, H[48] = er, H[49] = eV, H[50] = eL, H[51] = et, H[52] = ea, H[53] = ek, H[54] = es, H[55] = eG, H[56] = el, H[57] = D) : D = H[57], H[58] !== e1 || H[59] !== D ? (G = (0, a.jsxs)(a.Fragment, {
                    children: [B, (0, a.jsx)(w.a, {
                        isHidden: e1,
                        children: D
                    })]
                }), H[58] = e1, H[59] = D, H[60] = G) : G = H[60], G
            }
        })
    }),
    FC5L: (function(e, t, n) {
        var a = n("SZCv"),
            r = n.n(a),
            s = n("Q840"),
            o = n("tSEg"),
            i = n("wrxv");
        n.d(t, {}, {
            a: function(e) {
                let t = (0, s.j)(o.a, (t, n) => {
                    let {
                        scope: a
                    } = n;
                    return {
                        onOpen: () => e.open?.(a, t),
                        onDismiss: () => e.dismiss(a, t)
                    }
                }, {
                    autoDispose: 6e4
                });
                return (0, s.d)(o.a, (n, a) => {
                    if (null == n) return i.a;
                    let r = [],
                        s = !1;
                    for (let o of e.conversationIds(a.scope, n)) {
                        let n = e.status(a.scope, o);
                        if (n.pending) {
                            s = !0;
                            continue
                        }
                        if (!n.unread || !n.completed) continue;
                        let i = e.preview(a.scope, o);
                        null != i && r.push({
                            id: n.completionId ?? o,
                            title: e.title(a.scope, o),
                            preview: i,
                            ...a.get(t, o)
                        })
                    }
                    return r.length > 0 ? {
                        type: "ready",
                        value: r
                    } : s ? i.b : i.a
                }, {
                    isEqual: r()
                })
            }
        })
    }),
    lZ4W: (function(e, t, n) {
        var a = n("Q840"),
            r = n("OWtl"),
            s = n("dQRk"),
            o = n("PsNT"),
            i = n("JtOe");
        let l = (0, a.d)(r.a, (e, t) => {
            let {
                get: n
            } = t;
            if (null == e) return !1;
            let {
                steeredPromptId: a,
                ...r
            } = e;
            if (n(i.f, r)) return !1;
            let l = n(i.g, r);
            if (l?.response.visibility.status !== "allowed" || !(0, o.b)(l.response.content) || !c(l.response.content)) return !1;
            let d = n(s.t, r.conversationId),
                u = d?.at(-1);
            return u === r.userMessageId || null != a && u === a && d?.includes(r.userMessageId) === !0
        });

        function c(e) {
            return e?.type === "single_advertiser_ad_unit" && "composer_pinned" === e.presentation && e.ad_cards?.[0]?.format === "image_card_v2"
        }
        n.d(t, {}, {
            a: l,
            b: c
        })
    }),
    zpMv: (function(e, t, n) {
        var a = n("SZCv"),
            r = n.n(a),
            s = n("Q840"),
            o = n("Ro2M"),
            i = n("OWtl"),
            l = n("OMIV"),
            c = n("dQRk"),
            d = n("QkVh");
        let u = (0, s.d)(i.a, (e, t) => {
                let {
                    get: n
                } = t;
                if (!n(l.e, "3901104270")) return [];
                let a = n(c.q, e),
                    r = a?.filter(e => {
                        let {
                            source: t
                        } = e;
                        return "list" !== t
                    }) ?? [];
                return 0 === r.length ? [] : (n(o.h, n(o.b)), r.flatMap(e => {
                    let {
                        automationId: t,
                        messageId: a
                    } = e, r = n(o.e, t).data?.automation;
                    if (null == r) return [];
                    let s = /^file-inline-(libfile[_-][^~]+)(?:~.*)?$/.exec(r.plan_file_id ?? "")?.[1];
                    return null == s ? [] : [{
                        automationId: t,
                        messageId: a,
                        libraryFileId: s,
                        query: n(d.a, s)
                    }]
                }))
            }, {
                isEqual: r()
            }),
            h = (0, s.d)(i.a, (e, t) => {
                let {
                    get: n
                } = t, a = new Map;
                for (let {
                        automationId: t,
                        messageId: r,
                        libraryFileId: s,
                        query: o
                    }
                    of n(u, e)) {
                    if (a.has(s)) continue;
                    let e = o.data;
                    e?.mime_type === "text/markdown" && "owned" === e.access_kind && a.set(s, {
                        automationId: t,
                        downloadTarget: {
                            type: "file-id",
                            fileId: `file-inline-${e.id}`,
                            libraryFileId: e.id
                        },
                        fileId: `file-inline-${e.id}`,
                        key: `automation-plan:${e.id}`,
                        kind: "file",
                        libraryArtifactType: e.library_artifact_type,
                        libraryFileId: e.id,
                        messageId: r,
                        mimeType: e.mime_type,
                        name: e.name,
                        sandboxPath: null,
                        sizeBytes: null
                    })
                }
                return [...a.values()]
            }, {
                isEqual: r()
            }),
            p = (0, s.d)(i.a, (e, t) => {
                let {
                    get: n
                } = t, a = n(h, e), r = n(c.q, e), s = r?.filter(e => "list" !== e.source && a.some(t => t.automationId === e.automationId)), o = s?.at(-1)?.messageId;
                if (null == o) return null;
                let i = new Set(s?.filter(e => e.messageId === o).map(e => e.automationId));
                return 1 === i.size ? a.find(e => i.has(e.automationId)) ?? null : null
            }, {
                isEqual: r()
            });
        n.d(t, {}, {
            a: h,
            b: u,
            c: p,
            d: function(e, t) {
                return null != e && t.includes(e.replace(/^file-inline-/, "").split("~")[0])
            }
        })
    }),
    ckwE: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("zd8w"),
            o = n("VnEZ");
        n.d(t, {}, {
            a: function(e) {
                let t, n = (0, r.c)(3),
                    {
                        children: i,
                        binding: l
                    } = e,
                    [c] = (0, s.useState)(o.b),
                    d = l ?? c;
                return n[0] !== i || n[1] !== d ? (t = (0, a.jsx)(o.a, {
                    value: d,
                    children: i
                }), n[0] = i, n[1] = d, n[2] = t) : t = n[2], t
            }
        })
    }),
    vefx: (function(e, t, n) {
        n.d(t, {
            BusinessAgentConversationHeader: () => U,
            BusinessAgentHomeHero: () => V
        });
        var a = n("ABep"),
            r = n("QosV"),
            s = n("Q840"),
            o = n("Cslg"),
            i = n("dJI3"),
            l = n("nlNF"),
            c = n("OWtl"),
            d = n("aFoA"),
            u = n("OOaz"),
            h = n("dQRk"),
            p = n("jeai"),
            g = n("jAnS"),
            m = n("nUDt"),
            f = n("lSqO"),
            v = n("grx7"),
            b = n("zd8w"),
            y = n("oyxz"),
            x = n("L6H2"),
            w = n("MM0V"),
            C = n("Sm6l"),
            _ = n("JNtf"),
            S = n("mUDD"),
            j = n("ZtSy"),
            I = n("HOLv"),
            T = n("mEbU"),
            E = n("RU3e"),
            P = n("UIU6"),
            A = n("Bbed"),
            M = n("T1PX");
        let k = (0, A.a)(async () => {
            let [{
                SvgLottie: e
            }, {
                strFromU8: t,
                unzipSync: r
            }, {
                z: s
            }, o] = await Promise.all([Promise.all([n.e(747352), n.e(766175)]).then(n.bind(n, "lARO")), Promise.resolve().then(n.bind(n, "yCWm")), Promise.all([n.e(190782), n.e(58670)]).then(n.bind(n, "PkUi")), fetch("https://cdn.openai.com/chatgpt/clients/bazaar/business-agent-disclosure/2026-09-23/business-disclosure-animation-1754caf3cef014e7.lottie", {
                credentials: "omit",
                referrerPolicy: "no-referrer",
                redirect: "error",
                signal: AbortSignal.timeout(5e3)
            }).then(e => e.ok ? e.arrayBuffer() : null).catch(() => null)]);
            if (null == o) return function(e) {
                return (0, a.jsx)(O, {})
            };
            let i = "animations/sponsored-agents.json",
                l = r(new Uint8Array(o), {
                    filter: e => {
                        let {
                            name: t
                        } = e;
                        return t === i
                    }
                })[i];
            if (null == l) throw Error("Business Agent disclosure animation is missing");
            let c = s.looseObject({
                layers: s.array(s.looseObject({
                    nm: s.string().optional(),
                    refId: s.string().optional(),
                    masksProperties: s.array(s.looseObject({
                        nm: s.string().optional()
                    })).optional()
                }))
            }).parse(JSON.parse(t(l)));
            return function(t) {
                let {
                    onError: n
                } = t, [r, s] = (0, b.useState)(!1), [o] = (0, b.useState)(() => {
                    let e = structuredClone(c);
                    for (let t of e.layers) "🖼️ Image (replace img. layer)" === t.nm && "art_0" === t.refId && (t.masksProperties = t.masksProperties?.filter(e => "Sheet top corners" !== e.nm));
                    return e
                });
                return (0, a.jsx)("div", {
                    className: r ? "size-full" : "invisible size-full",
                    children: (0, a.jsx)(e, {
                        className: "size-full",
                        animationData: o,
                        autoplay: !0,
                        loop: !0,
                        onDataFailed: n,
                        onDOMLoaded: () => s(!0)
                    })
                })
            }
        }, {
            errorFallback: (0, a.jsx)(O, {})
        });

        function R(e) {
            let t, n = (0, r.c)(2),
                s = (0, M.a)();
            return n[0] !== s ? (t = (0, a.jsx)("div", {
                "aria-hidden": !0,
                className: "pointer-events-none relative aspect-2/1 w-full shrink-0 overflow-hidden",
                children: s ? (0, a.jsx)(O, {}) : (0, a.jsx)(N, {})
            }), n[0] = s, n[1] = t) : t = n[1], t
        }

        function N(e) {
            let t, n, o, i = (0, r.c)(7),
                l = (0, b.useRef)(null),
                c = (0, T.a)(l),
                d = (0, s.z)(E.b),
                [u, h] = (0, b.useState)(!1);
            if (u) {
                let e;
                return i[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(O, {}), i[0] = e) : e = i[0], e
            }
            return i[1] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(O, {}), i[1] = t) : t = i[1], i[2] !== c || i[3] !== d ? (n = c && !0 === d ? (0, a.jsx)(k, {
                onError: () => h(!0)
            }) : null, i[2] = c, i[3] = d, i[4] = n) : n = i[4], i[5] !== n ? (o = (0, a.jsx)(P.a, {
                name: "BusinessAgentDisclosureHero",
                fallback: t,
                children: (0, a.jsx)("div", {
                    ref: l,
                    className: "absolute inset-0",
                    children: n
                })
            }), i[5] = n, i[6] = o) : o = i[6], o
        }

        function O(e) {
            let t, n = (0, r.c)(1);
            return n[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)("img", {
                className: "absolute inset-0 size-full object-cover",
                alt: "",
                draggable: !1,
                referrerPolicy: "no-referrer",
                src: "https://cdn.openai.com/chatgpt/clients/bazaar/business-agent-disclosure/2026-09-23/business-disclosure-static-ade5a622504d70d9.png"
            }), n[0] = t) : t = n[0], t
        }
        var L = {
                kind: "sprite",
                name: "lightbulb-rays-regular-24",
                canvas: {
                    width: 24,
                    height: 24,
                    viewBox: "0 0 24 24"
                },
                href: "#codex-icon-lightbulb-rays-regular-24",
                style: {},
                alignment: {
                    authored: {
                        x: 0,
                        y: 0,
                        overflows: !1
                    },
                    primary: {
                        x: 0,
                        y: .375,
                        overflows: !1
                    },
                    composite: {
                        x: 0,
                        y: .375,
                        overflows: !1
                    }
                }
            },
            z = {
                kind: "sprite",
                name: "lock-regular-24",
                canvas: {
                    width: 24,
                    height: 24,
                    viewBox: "0 0 24 24"
                },
                href: "#codex-icon-lock-regular-24",
                style: {},
                alignment: {
                    authored: {
                        x: 0,
                        y: 0,
                        overflows: !1
                    },
                    primary: {
                        x: 0,
                        y: 0,
                        overflows: !1
                    },
                    composite: {
                        x: 0,
                        y: 0,
                        overflows: !1
                    }
                }
            };

        function F(e) {
            let t, n, s, o, i, l = (0, r.c)(11),
                {
                    state: c
                } = e,
                d = "ready" === c.status ? c.context : c,
                u = d.businessName ?? null,
                h = d.logoUrl ?? null;
            return l[0] !== u || l[1] !== h ? (t = (0, a.jsx)(x.a, {
                alt: "",
                name: u,
                size: "md",
                src: h
            }), l[0] = u, l[1] = h, l[2] = t) : t = l[2], l[3] !== d.businessName ? (n = (0, a.jsx)("span", {
                className: "truncate text-sm font-semibold",
                children: (0, a.jsx)(G, {
                    businessName: d.businessName
                })
            }), l[3] = d.businessName, l[4] = n) : n = l[4], l[5] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, a.jsx)("span", {
                className: "truncate text-xs font-normal text-secondary",
                children: (0, a.jsx)(y.a, {
                    id: "chatgpt.ads.business_agent.thread_header.subtitle",
                    defaultMessage: "Business chat"
                })
            }), l[5] = s) : s = l[5], l[6] !== n ? (o = (0, a.jsxs)("span", {
                className: "flex min-w-0 flex-col text-start",
                children: [n, s]
            }), l[6] = n, l[7] = o) : o = l[7], l[8] !== t || l[9] !== o ? (i = (0, a.jsxs)("span", {
                className: "flex min-w-0 items-center gap-2 select-none",
                children: [t, o]
            }), l[8] = t, l[9] = o, l[10] = i) : i = l[10], i
        }

        function B(e) {
            let t, n = (0, r.c)(14),
                {
                    state: s,
                    onStarterPromptSelect: o
                } = e,
                i = "ready" === s.status ? s.context : s;
            if (n[0] !== i.businessName || n[1] !== i.logoUrl || n[2] !== i.showConversationStarters || n[3] !== o || n[4] !== s.context || n[5] !== s.status) {
                let e, r, l, c = "ready" === s.status && i.showConversationStarters ? s.context.conversationStarters?.slice(0, 4) : void 0,
                    d = i.businessName ?? null,
                    u = i.logoUrl ?? null;
                n[7] !== d || n[8] !== u ? (e = (0, a.jsx)(x.a, {
                    alt: "",
                    name: d,
                    size: "lg",
                    src: u
                }), n[7] = d, n[8] = u, n[9] = e) : e = n[9], n[10] !== i.businessName ? (r = (0, a.jsx)("h1", {
                    className: "heading-xl font-normal text-default select-none",
                    children: (0, a.jsx)(G, {
                        businessName: i.businessName
                    })
                }), n[10] = i.businessName, n[11] = r) : r = n[11], n[12] !== s.status ? (l = "ready" !== s.status ? (0, a.jsx)(w.a, {
                    ariaLive: "polite",
                    role: "failed" === s.status ? "alert" : "status",
                    type: "failed" === s.status ? "error" : "normal",
                    content: "failed" === s.status ? (0, a.jsx)(y.a, {
                        id: "chatgptConversations.businessAgent.unavailable",
                        defaultMessage: "This Business Agent is unavailable. Please return to the ad and try again"
                    }) : (0, a.jsx)(y.a, {
                        id: "chatgptConversations.businessAgent.loading",
                        defaultMessage: "Opening Business Agent…"
                    })
                }) : null, n[12] = s.status, n[13] = l) : l = n[13], t = (0, a.jsxs)("div", {
                    className: "mx-auto flex w-[min(100%,var(--thread-content-max-width))] min-w-0 flex-col items-center gap-3 px-panel text-center",
                    children: [e, r, l, null != c && (c.length > 1 || 1 === c.length && "ready" === s.status && !0 === s.context.disablePrefill) ? (0, a.jsx)("div", {
                        className: "mt-3 flex flex-wrap justify-center gap-2 select-none",
                        children: c.map(e => (0, a.jsx)(C.a, {
                            color: "secondary",
                            size: "medium",
                            disabled: null == o,
                            onClick: () => o?.(e),
                            children: e
                        }, e))
                    }) : null]
                }), n[0] = i.businessName, n[1] = i.logoUrl, n[2] = i.showConversationStarters, n[3] = o, n[4] = s.context, n[5] = s.status, n[6] = t
            } else t = n[6];
            return t
        }

        function D(e) {
            let t, n, s, o, i, l, c, d, u, h, p, g, m, f, v, x, w, T = (0, r.c)(29),
                {
                    context: E,
                    onPresented: P,
                    onContinue: A,
                    onDismiss: M
                } = e,
                [k, N] = (0, b.useState)(!0 === E.showDisclosureModal);
            T[0] !== E.privacyPolicyUrl ? (t = function(e) {
                if (null == e) return null;
                try {
                    let t = new URL(e);
                    return ("https:" === t.protocol || "http:" === t.protocol) && t.hostname ? t.href : null
                } catch {
                    return null
                }
            }(E.privacyPolicyUrl), T[0] = E.privacyPolicyUrl, T[1] = t) : t = T[1];
            let O = t;
            return T[2] !== M ? (n = e => {
                N(e), e || M?.()
            }, T[2] = M, T[3] = n) : n = T[3], T[4] !== P ? (s = {
                "data-theme": "light",
                onOpenAutoFocus: P
            }, T[4] = P, T[5] = s) : s = T[5], T[6] !== A ? (o = e => {
                e.preventDefault(), N(!1), A?.()
            }, T[6] = A, T[7] = o) : o = T[7], T[8] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(R, {}), T[8] = i) : i = T[8], T[9] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, a.jsx)(_.e, {
                className: "heading-lg text-center leading-7 font-semibold",
                children: (0, a.jsx)(y.a, {
                    id: "chatgptConversations.businessAgent.disclosureTitle",
                    defaultMessage: "About chatting with businesses"
                })
            }), T[9] = l) : l = T[9], T[10] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)(I.a, {
                className: "shrink-0",
                asset: L
            }), T[10] = c) : c = T[10], T[11] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, a.jsx)("h3", {
                className: "text-base leading-relaxed font-semibold text-default",
                children: (0, a.jsx)(y.a, {
                    id: "chatgptConversations.businessAgent.disclosureQuestionsTitle",
                    defaultMessage: "Ask questions and compare options"
                })
            }), T[11] = d) : d = T[11], T[12] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, a.jsxs)("div", {
                className: "flex items-start gap-3",
                children: [c, (0, a.jsxs)("div", {
                    className: "flex min-w-0 flex-col gap-0.5",
                    children: [d, (0, a.jsx)("p", {
                        className: "text-base leading-snug tracking-tight text-secondary",
                        children: (0, a.jsx)(y.a, {
                            id: "chatgptConversations.businessAgent.disclosureQuestionsBody",
                            defaultMessage: "Learn what the business offers and ask detailed follow-ups as you decide."
                        })
                    })]
                })]
            }), T[12] = u) : u = T[12], T[13] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, a.jsx)(I.a, {
                className: "shrink-0",
                asset: z
            }), T[13] = h) : h = T[13], T[14] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, a.jsx)("h3", {
                className: "text-base leading-relaxed font-semibold text-default",
                children: (0, a.jsx)(y.a, {
                    id: "chatgptConversations.businessAgent.disclosureUsageTrendsTitle",
                    defaultMessage: "Your chats remain private"
                })
            }), T[14] = p) : p = T[14], T[15] === Symbol.for("react.memo_cache_sentinel") ? (g = (0, a.jsxs)("div", {
                className: "flex flex-col gap-4",
                children: [l, (0, a.jsx)(_.d, {
                    asChild: !0,
                    children: (0, a.jsxs)("div", {
                        className: "flex flex-col gap-4",
                        children: [u, (0, a.jsxs)("div", {
                            className: "flex items-start gap-3",
                            children: [h, (0, a.jsxs)("div", {
                                className: "flex min-w-0 flex-col gap-0.5",
                                children: [p, (0, a.jsx)("p", {
                                    className: "text-base leading-snug tracking-tight text-secondary",
                                    children: (0, a.jsx)(y.a, {
                                        id: "chatgptConversations.businessAgent.disclosureUsageTrendsBody",
                                        defaultMessage: "Businesses can’t see your chats or your personal info — just overall usage trends to help improve their AI agent."
                                    })
                                })]
                            })]
                        })]
                    })
                })]
            }), T[15] = g) : g = T[15], T[16] !== O ? (m = null == O ? null : (0, a.jsx)(j.a, {
                href: O,
                initiator: "external_link",
                openTarget: "external-browser",
                children: (0, a.jsx)(y.a, {
                    id: "chatgptConversations.businessAgent.privacyPolicy",
                    defaultMessage: "Privacy policy"
                })
            }), T[16] = O, T[17] = m) : m = T[17], T[18] === Symbol.for("react.memo_cache_sentinel") ? (f = (0, a.jsx)("div", {
                className: "flex justify-center",
                children: (0, a.jsx)(C.a, {
                    color: "primary",
                    size: "dialogAction",
                    type: "submit",
                    children: (0, a.jsx)(y.a, {
                        id: "chatgptConversations.businessAgent.disclosureStartChat",
                        defaultMessage: "Start chatting"
                    })
                })
            }), T[18] = f) : f = T[18], T[19] !== m ? (v = (0, a.jsxs)("div", {
                className: "flex flex-col gap-4 pb-10 select-none",
                children: [i, (0, a.jsxs)("div", {
                    className: "flex flex-col gap-6 px-8",
                    children: [g, m, f]
                })]
            }), T[19] = m, T[20] = v) : v = T[20], T[21] !== v || T[22] !== o ? (x = (0, a.jsx)(S.b, {
                as: "form",
                size: "viewport",
                variant: "chatgpt",
                onSubmit: o,
                children: v
            }), T[21] = v, T[22] = o, T[23] = x) : x = T[23], T[24] !== k || T[25] !== x || T[26] !== n || T[27] !== s ? (w = (0, a.jsx)(_.a, {
                open: k,
                onOpenChange: n,
                size: "beacon",
                variant: "promotional",
                contentProps: s,
                children: x
            }), T[24] = k, T[25] = x, T[26] = n, T[27] = s, T[28] = w) : w = T[28], w
        }

        function G(e) {
            let t, n = (0, r.c)(2),
                {
                    businessName: s
                } = e;
            return n[0] !== s ? (t = s?.trim() ? (0, a.jsx)(a.Fragment, {
                children: s
            }) : (0, a.jsx)(y.a, {
                id: "chatgpt.ads.business_agent.disclosure.fallback_name",
                defaultMessage: "Business Agent"
            }), n[0] = s, n[1] = t) : t = n[1], t
        }
        var H = n("KWLf"),
            q = n("Z98x"),
            W = n("zHQF");
        let K = (0, s.d)(c.a, (e, t) => {
            let {
                get: n
            } = t, a = n(l.c), r = a?.state?.businessProfileShareConversation, s = r?.intent ?? a?.state?.businessProfileShare, c = r?.conversationId ?? a?.state?.initialChatGptConversationId;
            if (null == a || s?.destination?.kind !== "agent" || "string" != typeof s.shareSessionId || "string" != typeof c || 0 === c.length || (0, d.d)(n, c) !== (0, d.d)(n, e) || !n(H.b) && !1 !== s.showInfoPanel && n(H.a) !== s.shareSessionId || !n(f.b) || n(o.f) !== s.accountId || n(o.k) !== s.userId) return null;
            if (null != r) {
                if ((0, g.j)(a.pathname)?.params.conversationId !== r.conversationId) return null
            } else if ("/" !== a.pathname && !(0, i.a)(a, n(l.d))) return null;
            let u = n(h.u, e);
            if (null == u || u.accountId !== s.accountId || null != u.userId && u.userId !== s.userId) return null;
            let p = s.destination;
            return ("ready" === u.status ? u.context.gizmoId === p.gizmoId && u.context.businessAgentId === p.businessAgentId : u.gizmoId === p.gizmoId) ? s.shareSessionId : null
        });

        function U(e) {
            let t, n, o = (0, r.c)(5),
                {
                    conversationId: i,
                    fallback: l
                } = e,
                c = (0, s.x)(h.u, i),
                d = (0, s.x)(null == c ? null : K, i);
            if (null == c) return l;
            o[0] !== c ? (t = (0, a.jsx)(F, {
                state: c
            }), o[0] = c, o[1] = t) : t = o[1];
            let u = t;
            return o[2] !== u || o[3] !== d ? (n = null != d ? (0, a.jsx)(p.a, {
                size: "business-profile",
                children: (0, a.jsx)(q.a, {
                    headerControl: !0,
                    shareSessionId: d,
                    children: u
                })
            }) : u, o[2] = u, o[3] = d, o[4] = n) : n = o[4], n
        }

        function V(e) {
            let t, n, o, i = (0, r.c)(18),
                {
                    conversationId: d,
                    fallback: p,
                    onStarterPromptSelect: g
                } = e,
                m = (0, s.y)(c.a),
                f = (0, s.x)(h.u, d),
                b = (0, s.z)(f?.status === "failed" ? l.c : null),
                y = b?.state?.businessProfileChat;
            if (f?.status === "failed" && y && b?.state?.initialChatGptConversationId === d && b.state.initialChatGptBusinessAgentGizmoId === y.gizmoId && (0, u.e)(d)) {
                let e;
                if (f.accountId !== y.accountId || null != f.userId && f.userId !== y.userId) {
                    let e;
                    return i[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(W.b, {}), i[0] = e) : e = i[0], e
                }
                return i[1] !== d || i[2] !== y || i[3] !== m || i[4] !== f.businessName || i[5] !== f.logoUrl ? (e = (0, a.jsx)(W.a, {
                    retry: () => void(0, v.a)(m, d, y, {
                        businessName: f.businessName,
                        logoUrl: f.logoUrl
                    })
                }), i[1] = d, i[2] = y, i[3] = m, i[4] = f.businessName, i[5] = f.logoUrl, i[6] = e) : e = i[6], e
            }
            return null == f ? p : (i[7] !== p || i[8] !== g || i[9] !== f ? (t = "ready" !== f.status || f.context.showConversationStarters ? (0, a.jsx)(B, {
                state: f,
                onStarterPromptSelect: g
            }) : p, i[7] = p, i[8] = g, i[9] = f, i[10] = t) : t = i[10], i[11] !== d || i[12] !== f.context || i[13] !== f.status ? (n = "ready" === f.status ? (0, a.jsx)(Q, {
                context: f.context,
                conversationId: d
            }, f.context.interactionId) : null, i[11] = d, i[12] = f.context, i[13] = f.status, i[14] = n) : n = i[14], i[15] !== t || i[16] !== n ? (o = (0, a.jsxs)(a.Fragment, {
                children: [t, n]
            }), i[15] = t, i[16] = n, i[17] = o) : o = i[17], o)
        }

        function Q(e) {
            let t, n, o, i = (0, r.c)(11),
                {
                    context: l,
                    conversationId: d
                } = e,
                u = (0, s.y)(c.a),
                h = (0, s.z)(m.b),
                p = h?.conversationId === d && h.ready;
            return p || !0 === l.showDisclosureModal ? (i[0] !== p || i[1] !== l || i[2] !== h ? (t = p ? {
                ...l,
                showDisclosureModal: !h.presented
            } : l, i[0] = p, i[1] = l, i[2] = h, i[3] = t) : t = i[3], i[4] !== p || i[5] !== d || i[6] !== u ? (n = p ? () => (0, m.a)(u, d) : void 0, i[4] = p, i[5] = d, i[6] = u, i[7] = n) : n = i[7], i[8] !== t || i[9] !== n ? (o = (0, a.jsx)(D, {
                context: t,
                onPresented: n
            }), i[8] = t, i[9] = n, i[10] = o) : o = i[10], o) : null
        }
    }),
    KWLf: (function(e, t, n) {
        var a = n("Q840"),
            r = n("nlNF"),
            s = n("OWtl"),
            o = n("wVL6");
        let i = (0, a.u)(s.a, null),
            l = (0, a.u)(s.a, null),
            c = (0, a.u)(s.a, null),
            d = "(max-width: 767px)";

        function u() {
            if ("u" < typeof window) return !1;
            let e = (0, o.a)();
            return "android_web" === e || "android_app" === e || "ios_web" === e || "ios_app" === e || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1
        }
        let h = (0, a.h)(s.a, () => null, e => {
            let {
                set: t
            } = e;
            if (u()) return void t(!0);
            let n = "u" > typeof window ? window.matchMedia?.(d) : null;
            if (null == n) return void t(!1);
            let a = () => t(n.matches);
            return (a(), "function" == typeof n.addEventListener) ? (n.addEventListener("change", a), () => n.removeEventListener("change", a)) : (n.addListener(a), () => n.removeListener(a))
        });
        n.d(t, {}, {
            a: l,
            b: h,
            c: c,
            d: i,
            e: function(e, t) {
                let n = e.get(i);
                n?.shareSessionId === t && n.open && e.set(i, {
                    ...n,
                    open: !1
                })
            },
            f: function() {
                return u() || "u" > typeof window && window.matchMedia?.(d).matches === !0
            },
            g: function(e, t) {
                let n = e.get(r.c);
                null != n && (e.set(c, null), e.set(i, {
                    shareSessionId: t,
                    historyKey: n.key,
                    open: !0
                }))
            }
        })
    }),
    Z98x: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("on57"),
            o = n("Q840"),
            i = n("zd8w"),
            l = n("Wf1j"),
            c = n("HOLv"),
            d = n("OWtl"),
            u = n("L2MT"),
            h = n("KWLf"),
            p = n("zzDS");
        n.d(t, {}, {
            a: function(e) {
                let t, n, g, m, f, v, b, y = (0, r.c)(19),
                    {
                        children: x,
                        headerControl: w,
                        opensDialog: C,
                        shareSessionId: _
                    } = e,
                    S = (0, o.y)(d.a),
                    j = (0, l.a)(),
                    I = (0, o.z)(!!(void 0 !== w && w) && u.a),
                    T = (0, o.z)(h.c),
                    E = (0, o.z)(null == C ? h.b : null),
                    P = (0, i.useRef)(null);
                y[0] !== T || y[1] !== S || y[2] !== _ ? (t = () => {
                    if (T !== _) return;
                    let e = requestAnimationFrame(() => {
                        let e = P.current;
                        e?.getClientRects().length && null == e.closest('[inert], [aria-hidden="true"]') && S.get(h.c) === _ && (e.focus({
                            preventScroll: !0
                        }), e.ownerDocument.activeElement === e && S.set(h.c, null))
                    });
                    return () => cancelAnimationFrame(e)
                }, n = [T, S, _], y[0] = T, y[1] = S, y[2] = _, y[3] = t, y[4] = n) : (t = y[3], n = y[4]), (0, i.useEffect)(t, n);
                let A = C ?? E ? "dialog" : void 0;
                y[5] !== j ? (g = j.formatMessage({
                    id: "businessProfiles.shareReceiver.viewBusinessInfo",
                    defaultMessage: "View business information"
                }), y[5] = j, y[6] = g) : g = y[6];
                let M = I ? "rounded-full" : "rounded-lg";
                return y[7] !== M ? (m = (0, s.b)("hover:bg-surface-hover inline-flex min-h-11 max-w-full min-w-0 items-center gap-1.5 px-1 text-start focus-visible:outline-2 focus-visible:-outline-offset-2", M), y[7] = M, y[8] = m) : m = y[8], y[9] !== S || y[10] !== _ ? (f = () => (0, h.g)(S, _), y[9] = S, y[10] = _, y[11] = f) : f = y[11], y[12] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, a.jsx)(c.a, {
                    asset: p.a,
                    className: "size-4 shrink-0 text-secondary"
                }), y[12] = v) : v = y[12], y[13] !== x || y[14] !== A || y[15] !== g || y[16] !== m || y[17] !== f ? (b = (0, a.jsxs)("button", {
                    ref: P,
                    "aria-haspopup": A,
                    "aria-label": g,
                    className: m,
                    onClick: f,
                    type: "button",
                    children: [x, v]
                }), y[13] = x, y[14] = A, y[15] = g, y[16] = m, y[17] = f, y[18] = b) : b = y[18], b
            }
        })
    }),
    sbTf: (function(e, t, n) {
        var a = n("iRMi"),
            r = n("Q840"),
            s = n("AuIy"),
            o = n("U2UX"),
            i = n("ZU27"),
            l = n("gbrq"),
            c = n("K33Q"),
            d = n("mv4d"),
            u = n("w7Qu"),
            h = n("dt5v"),
            p = n("bWX0"),
            g = n("smHt"),
            m = n("aoTb"),
            f = n("NRR1"),
            v = n("pqpL"),
            b = n("uqg3"),
            y = n("XcRr"),
            x = n("YF6h"),
            w = n("yGJW"),
            C = n("OWtl"),
            _ = n("tSEg"),
            S = n("OMIV"),
            j = n("dk3M"),
            I = n("WFY2"),
            T = n("PFzG"),
            E = n("vldH"),
            P = n("ISgP"),
            A = n("t2JB"),
            M = n("DIH2"),
            k = n("aFoA"),
            R = n("H8lk"),
            N = n("dQRk"),
            O = n("rxj0"),
            L = n("f2PP"),
            z = n("S95W");
        let F = (0, r.u)(C.a, !0),
            B = (0, r.v)(C.a, e => null);
        n.d(t, {}, {
            a: F,
            b: function(e, t) {
                let n = e.get(k.a, t) ?? t,
                    r = e.get(T.b, t),
                    C = e.get(B, n),
                    D = null;
                null != r && C?.attemptId === r && (D = C);
                let G = {
                        attemptId: r,
                        observedTurn: D?.observedTurn ?? !1,
                        activeRequestId: D?.activeRequestId ?? null,
                        dismissed: D?.dismissed ?? !1,
                        initialCreationMessageIds: D?.initialCreationMessageIds ?? new Set,
                        openedCreatedPage: D?.openedCreatedPage ?? !1
                    },
                    H = e.get(l.h),
                    q = G.observedTurn,
                    W = null;

                function K(t) {
                    for (let n of t.toReversed())
                        if (!G.initialCreationMessageIds.has(n.messageId) && (0, b.openSpacePageSidePanelTab)(e, n.pageId, {
                                title: n.title,
                                openSource: "turn_auto_open"
                            }).opened) {
                            G.openedCreatedPage = !0;
                            break
                        }
                }
                let U = e.watch(e => {
                        let {
                            get: n
                        } = e;
                        if (n(_.j) || null != n(N._, t)) return;
                        let a = n(N.R, t);
                        if (!a?.length) return;
                        let r = n(f.e),
                            s = n(N.j, t),
                            o = n(N.y, t);
                        if (null != r && null != s && (null == o || "tpp" === o))
                            for (let e of a)(0, x.h)(r, e.pageId, s, o ?? null, "created")
                    }),
                    V = e.watch(n => {
                        let {
                            get: r
                        } = n, f = r(N.ab, t), x = r(l.h), C = r(N.cb, t);
                        if ((0, N.Bb)(f)) {
                            q = !1;
                            let e = r(T.b, t),
                                n = r(N.db, t),
                                a = !G.observedTurn || G.attemptId !== e;
                            if (G.attemptId = e, a) {
                                let e = W;
                                W = null, e?.abort(), G.observedTurn = !0, G.activeRequestId = n, G.dismissed = C, G.openedCreatedPage = !1
                            } else G.activeRequestId = n ?? G.activeRequestId, G.dismissed = G.dismissed || C || H && !x;
                            H = x;
                            let s = !C && !G.dismissed && !x && !G.openedCreatedPage && !r(_.j) && !r(N.D, t) && !r(O.e, t),
                                o = [];
                            if ((a || s) && (o = r(N.R, t) ?? []), a) {
                                G.initialCreationMessageIds = new Set(o.map(e => e.messageId));
                                return
                            }
                            s && K(o);
                            return
                        }
                        if (!G.observedTurn) return;
                        let k = r(N.w, t);
                        if ("idle" !== f || C || null != k && "completed" !== k.result || null != e.get(N.D, t) || e.get(_.j) || e.get(O.e, t)) {
                            G.observedTurn = !1;
                            return
                        }
                        if (q) {
                            if (G.dismissed || x || G.openedCreatedPage || r(T.b, t) !== G.attemptId) {
                                G.observedTurn = !1;
                                return
                            }
                            if (k?.result !== "completed") return;
                            K(r(N.R, t) ?? []), G.observedTurn = !G.openedCreatedPage;
                            return
                        }
                        if (G.observedTurn = !1, k?.result !== "completed" || k.requestId !== G.activeRequestId) return;
                        let B = e.get(N.N, t);
                        if (null == B) return;
                        let D = (0, s.b)({
                                mapping: B,
                                current_node: e.get(N.C, t)
                            }),
                            U = D.findLast(z.b);
                        if (U?.status !== "finished_successfully") return;
                        let V = [...(0, R.e)(D).outputs, ...D.flatMap(e => (0, R.c)(e).map(e => e.file))],
                            Q = e.get(P.b, t)?.at(-1);
                        if (Q?.turn.status !== "complete") return;
                        let $ = [...(0, d.b)(D), ...Q.turn.items.flatMap(e => "chatgpt-reasoning-group" === e.type ? e.items : [e]).filter(e => "mcp-tool-call" === e.type)];
                        if (!((0, c.a)(e, $, !G.dismissed) || !G.dismissed && !G.openedCreatedPage && (0, y.a)(e, $)) && !G.dismissed && !x && !G.openedCreatedPage) {
                            for (let t of (0, v.c)((0, s.e)(U)).toReversed())
                                if ((0, b.openSpacePageSidePanelTab)(e, t.id, {
                                        openSource: "turn_auto_open",
                                        blockId: t.blockId
                                    }).opened) return;
                            if (r(F) && (0, L.canOpenChatGptFilePreview)({
                                    browserPreview: !0
                                })) {
                                for (let n of Q.turn.items)
                                    if ("assistant-message" === n.type && n.completed)
                                        for (let [r, s] of n.contentReferences.entries()) {
                                            let c = (0, A.a)(s),
                                                d = null == c ? null : (0, u.a)(c),
                                                f = V.find(e => null != e.fileId && e.fileId === (s.file_id ?? s.id) || null != e.libraryFileId && e.libraryFileId === s.library_file_id);
                                            if ("file" !== s.type || !(0, o.a)(s) || null == c || null == d || !(0, u.f)(d) || null == f && null == (0, M.b)(s.sandbox_path) && !(0, M.b)(s.matched_text)?.includes("sandbox:") || f?.sizeBytes != null && f.sizeBytes > g.a) continue;
                                            let v = n.contentReferenceMessageIds?.[r] ?? n.messageId,
                                                b = (0, E.b)(s, {
                                                    fileName: c,
                                                    messageId: v
                                                });
                                            if (null == b) continue;
                                            if (e.get(S.g)?.getExperiment("1965446322").get("enable_artifact_preview_auto_open", !1) !== !0) return;
                                            let y = e.get(N.j, t) ?? t,
                                                x = `${v??"message"}:${String(r)}:${c}`,
                                                C = `chatgpt-file:${y}:${x}`,
                                                _ = {
                                                    turnId: Q.id,
                                                    inputMessageId: D.find(e => "user" === e.author.role)?.id ?? null,
                                                    messageId: v ?? null
                                                },
                                                T = new AbortController,
                                                P = (0, L.openChatGptFile)(e, {
                                                    conversationId: y,
                                                    fileName: c,
                                                    gizmoId: e.get(N.T, t),
                                                    sharedConversationId: e.get(N._, t),
                                                    target: b,
                                                    tabKey: x,
                                                    browserPreview: !0,
                                                    isAccessBlocked: e => e.get(O.e, t),
                                                    downloadFallback: !1,
                                                    openSource: "auto_open",
                                                    originatingTurn: _,
                                                    signal: T.signal,
                                                    onOpened: () => {
                                                        let t = e.get(i.l.activeTab$);
                                                        T.signal.aborted || t?.tabId !== C || t.tabType.kind !== h.a || ((0, w.a)(e, a.CodexFileOpened, {
                                                            threadId: y,
                                                            turnId: _.turnId,
                                                            inputMessageId: _.inputMessageId ?? void 0,
                                                            messageId: _.messageId ?? void 0,
                                                            fileExtension: (0, p.c)(c) ?? void 0,
                                                            openSource: "auto_open",
                                                            openDestination: "codex_preview"
                                                        }), (0, w.a)(e, a.CodexWorkspaceFilePreviewAttempted, (0, m.a)({
                                                            modifiedClick: !1,
                                                            openedSidePanelTarget: "artifact",
                                                            openSource: "auto_open",
                                                            originatingTurn: _,
                                                            path: c,
                                                            threadId: y,
                                                            windowType: "browser"
                                                        })), (0, j.b)(e, C, "auto_open"))
                                                    },
                                                    onClose: () => T.abort()
                                                });
                                            W = T;
                                            let k = e.watch(e => {
                                                let {
                                                    get: n
                                                } = e;
                                                (n(l.h) && n(i.l.activeTab$)?.tabId !== C || n(O.e, t)) && T.abort()
                                            });
                                            P.catch(e => {
                                                T.signal.aborted || I.a.debug("Automatic ChatGPT artifact preview could not open", {
                                                    safe: {},
                                                    sensitive: {
                                                        error: e
                                                    }
                                                })
                                            }).finally(() => {
                                                k(), W === T && (W = null)
                                            });
                                            return
                                        }
                            }
                        }
                    });
                return () => {
                    U(), V(), W?.abort(), null != G.attemptId && e.set(B, n, {
                        ...G,
                        attemptId: G.attemptId
                    })
                }
            }
        })
    }),
    YiPf: (function(e, t, n) {
        n.d(t, {
            a: () => b
        });
        var a = n("ABep"),
            r = n("QosV"),
            s = n("Q840"),
            o = n("zd8w"),
            i = n("oyxz"),
            l = n("rEML"),
            c = n("SGsN"),
            d = n("esXD"),
            u = n("OWtl");

        function h(e) {
            let t, n, a, i = (0, r.c)(11),
                {
                    isUnavailable: h,
                    message: p,
                    homePath: g,
                    onUnavailable: m,
                    children: f
                } = e,
                v = (0, s.y)(u.a),
                b = (0, l._)(),
                y = (0, o.useRef)(!1);
            i[0] !== g || i[1] !== p || i[2] !== b || i[3] !== m || i[4] !== v ? (t = () => {
                m?.(), v.get(c.f).info(p, {
                    id: "conversation-inaccessible",
                    duration: 5
                }), (0, d.g)("conversation_unavailable", () => b(g, {
                    replace: !0
                }))
            }, i[0] = g, i[1] = p, i[2] = b, i[3] = m, i[4] = v, i[5] = t) : t = i[5];
            let x = (0, o.useEffectEvent)(t);
            return i[6] !== h || i[7] !== x ? (n = () => {
                h && !y.current && (y.current = !0, x())
            }, i[6] = h, i[7] = x, i[8] = n) : n = i[8], i[9] !== h ? (a = [h], i[9] = h, i[10] = a) : a = i[10], (0, o.useEffect)(n, a), h ? null : f
        }
        var p = n("IxgT"),
            g = n("yGJW"),
            m = n("eShZ"),
            f = n("ZhoB");
        let v = new WeakSet;

        function b(e) {
            let t, n, o, l, c, d, v, b, x = (0, r.c)(25),
                {
                    conversationId: w,
                    error: C,
                    loadError: _,
                    canRetry: S,
                    isWorkConversation: j,
                    showChatFallback: I,
                    onInlineLoadError: T,
                    children: E
                } = e,
                P = (0, s.y)(u.a),
                A = (0, s.z)(void 0 !== I && I && !1 === j ? p.b : null);
            if (null != A) return A;
            x[0] !== w || x[1] !== j || x[2] !== P ? (t = (e, t) => {
                (0, f.e)(P.get(g.c).logProductEvent, {
                    conversationId: w,
                    error: e,
                    isWorkConversation: j,
                    canRetry: t
                })
            }, x[0] = w, x[1] = j, x[2] = P, x[3] = t) : t = x[3];
            let M = t;
            x[4] !== S || x[5] !== _ || x[6] !== M ? (n = () => M(_, S), x[4] = S, x[5] = _, x[6] = M, x[7] = n) : n = x[7], x[8] !== _ || x[9] !== T || x[10] !== n ? (o = (0, a.jsx)(y, {
                error: _,
                onInlineLoadError: T,
                onShown: n
            }), x[8] = _, x[9] = T, x[10] = n, x[11] = o) : o = x[11], x[12] !== E || x[13] !== o ? (l = (0, a.jsxs)(a.Fragment, {
                children: [o, E]
            }), x[12] = E, x[13] = o, x[14] = l) : l = x[14];
            let k = l;
            return x[15] !== C ? (c = C instanceof m.FetchError && !(0, m.e)(C) && (403 === C.status || 404 === C.status), x[15] = C, x[16] = c) : c = x[16], x[17] !== C || x[18] !== M ? (d = () => M(C, !1), x[17] = C, x[18] = M, x[19] = d) : d = x[19], x[20] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, a.jsx)(i.a, {
                id: "chatgptConversations.conversationInaccessible",
                defaultMessage: "You don’t have access to this conversation. Make sure you’re logged in to the right account, or ask the conversation owner to send you a share link."
            }), x[20] = v) : v = x[20], x[21] !== k || x[22] !== c || x[23] !== d ? (b = (0, a.jsxs)(a.Fragment, {
                children: [null, (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(h, {
                        isUnavailable: c,
                        homePath: "/",
                        onUnavailable: d,
                        message: v,
                        children: k
                    })
                })]
            }), x[21] = k, x[22] = c, x[23] = d, x[24] = b) : b = x[24], b
        }

        function y(e) {
            let t, n, a, s = (0, r.c)(8),
                {
                    error: i,
                    onShown: l,
                    onInlineLoadError: c
                } = e,
                d = (0, o.useEffectEvent)(l);
            s[0] !== c ? (t = e => c?.(e), s[0] = c, s[1] = t) : t = s[1];
            let u = (0, o.useEffectEvent)(t);
            return s[2] !== i || s[3] !== d || s[4] !== u ? (n = () => {
                if (null != i) {
                    if (u(i), (0, m.e)(i)) {
                        if (v.has(i)) return;
                        v.add(i)
                    }
                    d()
                }
            }, s[2] = i, s[3] = d, s[4] = u, s[5] = n) : n = s[5], s[6] !== i ? (a = [i], s[6] = i, s[7] = a) : a = s[7], (0, o.useEffect)(n, a), null
        }
    }),
    aLqR: (function(e, t, n) {
        var a = n("QosV"),
            r = n("Q840"),
            s = n("bjAA"),
            o = n("TL6G"),
            i = n("OWtl"),
            l = n("eKlv"),
            c = n("XtQP");
        n.d(t, {}, {
            a: function(e) {
                let t, n, d, u, h, p, g, m = (0, a.c)(15),
                    {
                        conversationId: f
                    } = e,
                    v = (0, r.y)(i.a);
                return m[0] !== f || m[1] !== v ? (t = () => {
                    (0, c.c)(v, f).catch(() => (0, s.c)(v))
                }, m[0] = f, m[1] = v, m[2] = t) : t = m[2], (0, s.d)(f, t), m[3] !== f || m[4] !== v ? (n = () => void(0, l.renameActiveChatGptConversation)(v, f), d = [f, v], m[3] = f, m[4] = v, m[5] = n, m[6] = d) : (n = m[5], d = m[6]), (0, o.d)("rename-thread", n, d), m[7] !== f || m[8] !== v ? (u = () => (0, l.d)(v, f), h = [f, v], m[7] = f, m[8] = v, m[9] = u, m[10] = h) : (u = m[9], h = m[10]), (0, o.d)("toggle-thread-pin", u, h), m[11] !== f || m[12] !== v ? (p = () => (0, l.a)(v, f), g = [f, v], m[11] = f, m[12] = v, m[13] = p, m[14] = g) : (p = m[13], g = m[14]), (0, o.d)("archive-thread", p, g), null
            }
        })
    }),
    BCcj: (function(e, t, n) {
        n.d(t, {
            a: () => ix,
            ChatGptConversationPage: () => iy
        });
        var a = n("ABep"),
            r = n("QosV"),
            s = n("v8gE"),
            o = n("FS1B"),
            i = n("T0Rc"),
            l = n("HVBu"),
            c = n.n(l),
            d = n("Q840"),
            u = n("Zqzr"),
            h = n("AuIy"),
            p = n("iqEK"),
            g = n("NRIv"),
            m = n("zd8w"),
            f = n("Wf1j"),
            v = n("rEML"),
            b = n("bn59"),
            y = n("OY84"),
            x = n("Yxds"),
            w = n("StMt"),
            C = n("E8Sp"),
            _ = n("z0li"),
            S = n("SaNw"),
            j = n("O0M0"),
            I = n("Cslg"),
            T = n("OFP1"),
            E = n("ItIk"),
            P = (n("AZW7"), n("uxPT")),
            A = n("GMTh"),
            M = n("zpMv"),
            k = n("PFzG"),
            R = n("YiPf"),
            N = n("DrWu"),
            O = n("x4uR"),
            L = n("hx97");

        function z(e) {
            return "assistant" === e.author.role && e.metadata?.open_thread_summary === !0
        }
        var F = n("MrzV"),
            B = n("YTsa"),
            D = n("TSib"),
            G = n("jEN2"),
            H = n("kphc"),
            q = n("YWcr"),
            W = n("mwa5"),
            K = n("UxN3"),
            U = n("SGsN"),
            V = n("XcNx"),
            Q = n("GKsW"),
            $ = n("yWTM"),
            Y = n("SkIz"),
            J = n("hsSf"),
            X = n("ibLK"),
            Z = n("Xc94"),
            ee = n("Sgih"),
            et = n("HwRo"),
            en = n("qwxA"),
            ea = n("gOnr"),
            er = n("KXCj"),
            es = n("e1xH"),
            eo = n("Dl20"),
            ei = n("kErH"),
            el = n("dJBt"),
            ec = n("yGJW"),
            ed = n("FR8U"),
            eu = n("xqnZ"),
            eh = n("UMxD"),
            ep = n("JhDO"),
            eg = n("tSEg"),
            em = n("kl6F"),
            ef = n("kfGJ"),
            ev = n("khOd"),
            eb = n("xSOA"),
            ey = n("oyxz"),
            ex = n("MYlA"),
            ew = n("OtLV"),
            eC = n("sfmI"),
            e_ = n("QmkR"),
            eS = n("Yrvy"),
            ej = n("HOLv"),
            eI = n("nlNF"),
            eT = n("OWtl"),
            eE = n("MRlq"),
            eP = n("vNLk"),
            eA = n("PCxL"),
            eM = n("aZgH"),
            ek = n("CiSx");

        function eR(e) {
            let t, n, s, o, i, l, c, u, h, p, g, b, y, x, w = (0, r.c)(56),
                {
                    conversationId: C,
                    kind: _
                } = e,
                S = (0, d.y)(eT.a),
                j = (0, f.a)(),
                T = (0, v.X)(),
                E = (0, v._)(),
                P = (0, d.z)(eA.l),
                A = (0, d.z)(I.h),
                M = (0, d.z)(I.g);
            w[0] !== A || w[1] !== C || w[2] !== M || w[3] !== _ || w[4] !== P ? (t = "chatgpt" === _ && P?.kind === "chatgpt" && P.conversation.id === C && (0, eC.a)(P.conversation, A, M) ? P.conversation : null, w[0] = A, w[1] = C, w[2] = M, w[3] = _, w[4] = P, w[5] = t) : t = w[5];
            let k = t,
                [R, N] = (0, m.useState)(!1),
                {
                    mutate: O,
                    isPending: L
                } = (0, eS.a)(C);
            w[6] !== T.hash || w[7] !== T.pathname || w[8] !== T.search || w[9] !== E || w[10] !== S ? (n = () => {
                (0, eA.e)(S), E({
                    pathname: T.pathname,
                    search: T.search,
                    hash: T.hash
                }, {
                    replace: !0,
                    state: null
                })
            }, w[6] = T.hash, w[7] = T.pathname, w[8] = T.search, w[9] = E, w[10] = S, w[11] = n) : n = w[11];
            let z = n,
                F = (0, d.z)(eA.k);
            w[12] !== C || w[13] !== F ? (s = F?.find(e => (0, eM.b)(e.task) === `hosted:${C}`), w[12] = C, w[13] = F, w[14] = s) : s = w[14];
            let B = s;
            w[15] !== C || w[16] !== S ? (o = () => {
                let e = S.get(eA.l);
                return null != e && (0, eM.b)(e) === `hosted:${C}` ? (0, eA.d)(S, e) : void 0
            }, i = async () => {
                await (0, e_.W)({
                    scope: S,
                    conversationId: C
                })
            }, w[15] = C, w[16] = S, w[17] = o, w[18] = i) : (o = w[17], i = w[18]), w[19] !== C || w[20] !== z || w[21] !== _ || w[22] !== S ? (l = (e, t, n) => {
                n?.("restored");
                let r = S.get(U.f).info((0, a.jsx)(ey.a, {
                    ...eE.a.unarchiveSuccessPlain
                }), {
                    leading: (0, a.jsx)(ej.a, {
                        "aria-hidden": !1,
                        asset: ek.a
                    }),
                    primaryAction: {
                        label: (0, a.jsx)(ey.a, {
                            ...eE.a.viewNow
                        }),
                        onClick: () => {
                            r.close(), z()
                        }
                    },
                    id: `unarchive-thread-${_}:${C}`
                })
            }, w[19] = C, w[20] = z, w[21] = _, w[22] = S, w[23] = l) : l = w[23], w[24] !== j || w[25] !== S ? (c = (e, t, n) => {
                n?.(null), S.get(U.f).danger(j.formatMessage(eE.a.unarchiveError), {
                    errorAnalytics: {
                        toastId: "previewFooter.onError.unarchiveError"
                    }
                })
            }, w[24] = j, w[25] = S, w[26] = c) : c = w[26], w[27] !== o || w[28] !== i || w[29] !== l || w[30] !== c ? (u = {
                onMutate: o,
                mutationFn: i,
                onSuccess: l,
                onError: c
            }, w[27] = o, w[28] = i, w[29] = l, w[30] = c, w[31] = u) : u = w[31];
            let {
                mutate: D,
                isPending: G,
                isSuccess: H
            } = (0, eb.a)(u);
            w[32] !== O || w[33] !== E || w[34] !== S ? (h = e => {
                let t = S.get(eA.c),
                    n = S.get(eI.c),
                    a = S.get(I.f);
                O(e, {
                    onSuccess: () => {
                        if (N(!1), t !== S.get(eA.c) || n !== S.get(eI.c) || a !== S.get(I.f)) return;
                        S.set(eA.l, null);
                        let e = t?.pathname === eA.a ? t : null;
                        E(e ?? "/", {
                            replace: !0,
                            state: e?.state ?? null
                        })
                    }
                })
            }, w[32] = O, w[33] = E, w[34] = S, w[35] = h) : h = w[35];
            let q = h;
            w[36] !== k ? (p = null == k ? void 0 : () => N(!0), w[36] = k, w[37] = p) : p = w[37];
            let W = H || B?.status === "restored",
                K = G || B?.status === "restoring";
            return w[38] !== D ? (g = () => D(), w[38] = D, w[39] = g) : g = w[39], w[40] !== z || w[41] !== L || w[42] !== p || w[43] !== W || w[44] !== K || w[45] !== g ? (b = (0, a.jsx)(eP.a, {
                deleting: L,
                onDelete: p,
                restored: W,
                restoring: K,
                onUnarchive: g,
                onDone: z
            }), w[40] = z, w[41] = L, w[42] = p, w[43] = W, w[44] = K, w[45] = g, w[46] = b) : b = w[46], w[47] !== k || w[48] !== q || w[49] !== j || w[50] !== R || w[51] !== L ? (y = null != k && (0, a.jsx)(ex.a, {
                allowArtifactDeletion: !0,
                title: k.title?.trim() || j.formatMessage(ew.a.newChat),
                open: R,
                isDeleting: L,
                onOpenChange: N,
                onConfirm: q
            }), w[47] = k, w[48] = q, w[49] = j, w[50] = R, w[51] = L, w[52] = y) : y = w[52], w[53] !== b || w[54] !== y ? (x = (0, a.jsxs)(a.Fragment, {
                children: [b, y]
            }), w[53] = b, w[54] = y, w[55] = x) : x = w[55], x
        }
        var eN = n("hZax"),
            eO = n("OMIV"),
            eL = n("L2MT"),
            ez = n("JCJj"),
            eF = n("KkZX"),
            eB = n("BdYu"),
            eD = n("Nyub"),
            eG = n("rvFo"),
            eH = n("jZDY"),
            eq = n("Bc5r"),
            eW = n("bIvi"),
            eK = n("Elta"),
            eU = n("eW0T"),
            eV = n("hOYb"),
            eQ = n("eShZ"),
            e$ = n("qqut"),
            eY = n("CsbC"),
            eJ = n("tCyZ"),
            eX = n("vefx"),
            eZ = n("GgLN"),
            e0 = n("KdfG"),
            e1 = n("AOHi"),
            e2 = n("sbTf"),
            e3 = n("BJ43"),
            e4 = n("vFqw"),
            e5 = n("d2rV"),
            e6 = n("aLqR"),
            e7 = n("VlIB"),
            e8 = n("Ow2S"),
            e9 = n("G6Ip");
        let te = (0, d.v)(eT.a, e => null);
        var tt = n("qeru");

        function tn(e) {
            let t, n = (0, r.c)(3),
                {
                    conversationId: s,
                    children: o
                } = e;
            if ("loading" === (0, d.x)(e8.t, s)) {
                let e;
                return n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(tt.b, {
                    page: !0,
                    status: "chatgpt"
                }), n[0] = e) : e = n[0], e
            }
            return n[1] !== o ? (t = (0, a.jsx)(a.Fragment, {
                children: o
            }), n[1] = o, n[2] = t) : t = n[2], t
        }
        var ta = n("SZi8"),
            tr = n("lBzi"),
            ts = n("Ga6O"),
            to = n("PTAr"),
            ti = n("slpy"),
            tl = n("BOYb"),
            tc = n("Sm6l"),
            td = n("bf6R"),
            tu = n("Bbed"),
            th = n("O666"),
            tp = n("tNq4"),
            tg = n("aFoA"),
            tm = n("dQRk"),
            tf = n("Skaw"),
            tv = n("PYCG");

        function tb(e) {
            let t, n, s, o, i, l, c, u, h, p, g, m, v = (0, r.c)(55),
                {
                    conversationId: b,
                    projectId: y,
                    sharedProjectConversation: x,
                    isReady: w,
                    isRestricted: C,
                    isStreaming: _
                } = e,
                S = void 0 === y ? null : y,
                j = (0, d.y)(eT.a),
                T = (0, f.a)(),
                E = (0, d.z)(eL.a),
                P = (0, d.z)(I.e),
                A = (0, d.z)(null == S ? null : tf.a),
                M = (0, d.x)(tm.j, b),
                {
                    data: k
                } = (0, d.x)(tr.chatGptConversationQueryById$, null == S ? null : M),
                R = (0, d.x)(tg.a, null == S ? null : M),
                N = (0, d.x)(tm.B, R);
            v[0] !== R || v[1] !== k || v[2] !== N || v[3] !== S || v[4] !== M ? (t = null == k && null != R && null != M ? {
                id: M,
                gizmo_id: S,
                is_temporary_chat: N
            } : void 0, v[0] = R, v[1] = k, v[2] = N, v[3] = S, v[4] = M, v[5] = t) : t = v[5];
            let L = t,
                {
                    data: z
                } = (0, d.x)(O.b, S),
                F = null == S ? null : (0, tf.b)(A ?? null, x ?? k ?? L, z),
                B = (0, d.x)(tp.b, b);
            v[6] !== T ? (n = T.formatMessage(ew.a.headerShare), v[6] = T, v[7] = n) : n = v[7];
            let D = n,
                G = (0, d.x)(null == x ? tp.a : null, b),
                H = null != x || null != G,
                q = null;
            if (C || F?.type === "unavailable") {
                let e;
                v[8] !== T ? (e = T.formatMessage(ew.a.shareDisabledRestricted), v[8] = T, v[9] = e) : e = v[9], q = e
            } else if (_ && !H) {
                let e;
                v[10] !== T ? (e = T.formatMessage(ew.a.shareDisabledStreaming), v[10] = T, v[11] = e) : e = v[11], q = e
            } else if (!w || !H) {
                let e;
                v[12] !== T ? (e = T.formatMessage(ew.a.shareDisabledNotReady), v[12] = T, v[13] = e) : e = v[13], q = e
            }
            let W = null != q || B;
            v[14] !== W ? (s = {
                layer: "3087497570",
                parameter: "use_larger_icon",
                disableExposureLog: W
            }, v[14] = W, v[15] = s) : s = v[15];
            let K = (0, d.x)(th.b, s),
                U = "loaded" === P.status && "personal" === P.structure && (null == F || "snapshot" === F.type),
                V = null != q || B;
            v[16] !== V ? (o = {
                layer: "1823366130",
                parameter: "disable_hover",
                disableExposureLog: V
            }, v[16] = V, v[17] = o) : o = v[17];
            let Q = (0, d.x)(U ? th.b : null, o),
                $ = !(0, tl.d)() && !(0, tl.b)(),
                Y = null != q || B;
            v[18] !== Y ? (i = {
                layer: "2296435893",
                parameter: "show_share_text",
                disableExposureLog: Y
            }, v[18] = Y, v[19] = i) : i = v[19];
            let J = (0, d.x)($ ? th.b : null, i);
            v[20] !== b || v[21] !== L || v[22] !== S || v[23] !== j || v[24] !== x ? (l = () => {
                let e = null == x ? j.get(tp.c, b) : {
                    serverConversationId: x.conversation_id,
                    title: x.title,
                    currentNodeId: x.current_node ?? void 0
                };
                null != e && (0, tv.shareChatGptProjectConversation)(j, e.serverConversationId, e.title ?? "", S, e.currentNodeId, "CHATGPT_SHARE_FLOW_SOURCE_SENDER_HEADER", x ?? L)
            }, v[20] = b, v[21] = L, v[22] = S, v[23] = j, v[24] = x, v[25] = l) : l = v[25];
            let X = l,
                Z = D;
            if (!Q && "loaded" === P.status && (null == F || "snapshot" === F.type)) {
                let e;
                v[26] !== P.structure || v[27] !== T ? (e = T.formatMessage("workspace" === P.structure ? ew.a.shareWorkspaceTooltip : ew.a.sharePublicTooltip), v[26] = P.structure, v[27] = T, v[28] = e) : e = v[28], Z = e
            }
            let ee = q ?? Z,
                et = null != q || void 0,
                en = E ? "full" : "large",
                ea = !J,
                er = null == q ? X : void 0;
            return v[29] !== B || v[30] !== K ? (c = !B && (K ? (0, a.jsx)(td.M, {}) : (0, a.jsx)(td.L, {})), v[29] = B, v[30] = K, v[31] = c) : c = v[31], v[32] !== J ? (u = J && (0, a.jsx)("span", {
                className: "max-sm:hidden @max-2xl/main-titlebar:hidden",
                children: (0, a.jsx)(ey.a, {
                    ...ew.a.headerShare
                })
            }), v[32] = J, v[33] = u) : u = v[33], v[34] !== B || v[35] !== D || v[36] !== et || v[37] !== en || v[38] !== ea || v[39] !== er || v[40] !== c || v[41] !== u ? (h = (0, a.jsxs)(tc.a, {
                "aria-disabled": et,
                "aria-label": D,
                color: "ghostActive",
                loading: B,
                className: "browser:[&_[data-loading-indicator]>svg]:size-6",
                radius: en,
                size: "toolbar",
                uniform: ea,
                onClick: er,
                children: [c, u]
            }), v[34] = B, v[35] = D, v[36] = et, v[37] = en, v[38] = ea, v[39] = er, v[40] = c, v[41] = u, v[42] = h) : h = v[42], v[43] !== ee || v[44] !== h ? (p = (0, a.jsx)(ti.a, {
                content: ee,
                children: h
            }), v[43] = ee, v[44] = h, v[45] = p) : p = v[45], v[46] !== b || v[47] !== B || v[48] !== S || v[49] !== q || v[50] !== x ? (g = !1, v[46] = b, v[47] = B, v[48] = S, v[49] = q, v[50] = x, v[51] = g) : g = v[51], v[52] !== p || v[53] !== g ? (m = (0, a.jsxs)(a.Fragment, {
                children: [p, g]
            }), v[52] = p, v[53] = g, v[54] = m) : m = v[54], m
        }(0, tu.a)(async () => () => null);
        var ty = n("TRQ3"),
            tx = n("SZCv"),
            tw = n.n(tx),
            tC = n("XAP6"),
            t_ = n("bzoy"),
            tS = n("LYS1"),
            tj = n("aZoZ"),
            tI = n("Gv8v"),
            tT = n("EGpF"),
            tE = n("mTPq"),
            tP = n("Vcrm"),
            tA = n("QBVt");
        let tM = (0, d.d)(eT.a, (e, t) => {
            let {
                get: n
            } = t, a = n(tm.ab, e);
            if (!(0, tm.Bb)(a)) return !0;
            let r = n(tm.N, e),
                s = n(tm.C, e);
            if (null == r || null == s) return !1;
            let o = r[s]?.message;
            if (null == o || tS.a.has(o.author.role)) return !1;
            let i = n(tm.y, e),
                l = (0, tE.c)({
                    mapping: r,
                    current_node: s
                }, n(tm.S, e)),
                c = n(tm.db, e);
            return "streaming" === a && "tpp" !== i && "flora" !== i && null != n(tm.j, e) && !(0, t_.e)(n(tm.p, e)) && null != c && !n(tC.e).has(c) && null != tk(n, e).request.current && (null == l || l.info.num_variants_in_stream <= 1)
        });

        function tk(e, t) {
            let n = e(tT.a, t),
                a = e(tm.j, t);
            return null == n.request.current && null != a ? e(tT.a, a) : n
        }
        var tR = n("xtkq"),
            tN = n("ZhoB"),
            tO = n("PG5R"),
            tL = n("zrki"),
            tz = n("iLYI"),
            tF = n("u4MG"),
            tB = n("wVX4"),
            tD = n("Gm6g"),
            tG = n("OOaz"),
            tH = n("H8lk"),
            tq = n("gbrq"),
            tW = n("n5iL"),
            tK = n("EFj1"),
            tU = n("iS3k"),
            tV = n("pDUk"),
            tQ = n("GaCK"),
            t$ = n("Dofq"),
            tY = n("VnEZ"),
            tJ = n("b7aP");

        function tX(e) {
            let t, n, s, o = (0, r.c)(6);
            o[0] !== e ? ({
                readData: n,
                ...t
            } = e, o[0] = e, o[1] = t, o[2] = n) : (t = o[1], n = o[2]);
            let i = (0, tU.b)(),
                [l, c] = (0, m.useState)(null);
            return i && l?.readData !== n && c({
                readData: n,
                data: n()
            }), o[3] !== l || o[4] !== t ? (s = null == l ? null : (0, a.jsx)(tJ.a, {
                ...t,
                data: l.data
            }), o[3] = l, o[4] = t, o[5] = s) : s = o[5], s
        }

        function tZ(e) {
            let t, n, s, o, i, l, c, u, h, p = (0, r.c)(22);
            p[0] !== e ? ({
                controlledState: t,
                display: n,
                ...s
            } = e, p[0] = e, p[1] = t, p[2] = n, p[3] = s) : (t = p[1], n = p[2], s = p[3]);
            let g = (0, d.y)(eg.a);
            p[4] !== g ? (o = {
                scope: g,
                layout: "summary"
            }, p[4] = g, p[5] = o) : o = p[5];
            let m = o;
            p[6] !== t?.isOpen || p[7] !== s ? (i = t?.isOpen === !1 ? null : (0, a.jsx)(tX, {
                ...s
            }, s.conversationId), p[6] = t?.isOpen, p[7] = s, p[8] = i) : i = p[8];
            let f = i;
            return p[9] !== m || p[10] !== f ? (l = f && (0, a.jsx)(tU.a.PopoverContent, {
                analytics: m,
                children: f
            }), p[9] = m, p[10] = f, p[11] = l) : l = p[11], p[12] !== t || p[13] !== l ? (c = (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(t0, {
                    controlledState: t,
                    children: l
                })
            }), p[12] = t, p[13] = l, p[14] = c) : c = p[14], p[15] !== m || p[16] !== f || p[17] !== n ? (u = f && (0, a.jsx)(tU.a.Root, {
                analytics: m,
                shouldHideInlineImmediately: n.shouldHideInlineImmediately,
                shouldShow: n.shouldShow,
                children: f
            }), p[15] = m, p[16] = f, p[17] = n, p[18] = u) : u = p[18], p[19] !== c || p[20] !== u ? (h = (0, a.jsxs)(a.Fragment, {
                children: [c, u]
            }), p[19] = c, p[20] = u, p[21] = h) : h = p[21], h
        }

        function t0(e) {
            let t, n, s, o = (0, r.c)(17),
                {
                    children: i,
                    controlledState: l
                } = e,
                c = (0, d.y)(eg.a),
                u = (0, m.useContext)(tY.a),
                h = (0, f.a)(),
                p = (0, d.z)(null == l ? tq.N : null);
            o[0] !== l?.isOpen || o[1] !== p ? (t = l?.isOpen ?? (0, tq.z)(p, !0), o[0] = l?.isOpen, o[1] = p, o[2] = t) : t = o[2];
            let g = t,
                v = (0, d.z)(tQ.b),
                b = l?.isOpen ?? v.isPopoverOpen,
                y = (0, d.x)(tW.f, "togglePinnedSummary");
            (0, eB.b)(c), o[3] !== l || o[4] !== c ? (n = () => {
                null != l ? l.onOpenChange(!l.isOpen) : (0, t$.b)(c)
            }, o[3] = l, o[4] = c, o[5] = n) : n = o[5];
            let x = n;
            return (0, tK.a)("togglePinnedSummary", x), o[6] !== i || o[7] !== u || o[8] !== l || o[9] !== h || o[10] !== g || o[11] !== b || o[12] !== v.displayMode || o[13] !== c || o[14] !== y || o[15] !== x ? (s = (0, a.jsx)(S.a.HeaderAction, {
                actionId: "chatgpt-thread-summary-panel-toggle",
                align: "end",
                sharedCapsule: !0,
                order: 250,
                unifiedSlotPosition: "threadSummary",
                children: "overlay" === v.displayMode ? (0, a.jsx)(tV.a, {
                    isOpen: b,
                    shouldPreventAutoFocus: l?.shouldPreventAutoFocus,
                    onOpenChange: e => {
                        null != l ? l.onOpenChange(e) : c.set(tQ.b, t => "overlay" !== t.displayMode || t.isPopoverOpen === e ? t : {
                            ...t,
                            isPopoverOpen: e
                        })
                    },
                    trigger: (0, a.jsx)(tU.a.HeaderButton, {
                        analytics: {
                            scope: c
                        },
                        label: h.formatMessage({
                            id: "chatgptConversations.summaryPanel.toggle",
                            defaultMessage: "Toggle summary"
                        }),
                        pressed: b,
                        shortcut: y
                    }),
                    children: (0, a.jsx)(tY.a, {
                        value: u,
                        children: i
                    })
                }) : (0, a.jsx)(tU.a.HeaderButton, {
                    analytics: {
                        scope: c
                    },
                    label: h.formatMessage({
                        id: "chatgptConversations.summaryPanel.togglePinned",
                        defaultMessage: "Toggle pinned summary"
                    }),
                    pressed: g,
                    shortcut: y,
                    onClick: x
                })
            }), o[6] = i, o[7] = u, o[8] = l, o[9] = h, o[10] = g, o[11] = b, o[12] = v.displayMode, o[13] = c, o[14] = y, o[15] = x, o[16] = s) : s = o[16], s
        }
        var t1 = n("pV06"),
            t2 = n("MM0V");

        function t3(e) {
            let t, n, s, o, i, l = (0, r.c)(11),
                {
                    canConvert: c,
                    isChatInstantAvailable: d,
                    isConverting: u,
                    onConvert: h
                } = e;
            l[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(ey.a, {
                id: "chatgptConversations.workOnlyConversion.title",
                defaultMessage: "Continue in Work"
            }), l[0] = t) : t = l[0], l[1] !== d ? (n = d ? (0, a.jsx)(ey.a, {
                id: "chatgptConversations.workOnlyConversion.instantDescription",
                defaultMessage: "Move this chat to Work to use agentic tools and take on more complex tasks. You can still use chat instant for quick questions"
            }) : (0, a.jsx)(ey.a, {
                id: "chatgptConversations.workOnlyConversion.description",
                defaultMessage: "Move this chat to Work to use agentic tools and take on more complex tasks"
            }), l[1] = d, l[2] = n) : n = l[2];
            let p = !c;
            return l[3] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, a.jsx)(ey.a, {
                id: "chatgptConversations.workOnlyConversion.action",
                defaultMessage: "Convert to Work"
            }), l[3] = s) : s = l[3], l[4] !== u || l[5] !== h || l[6] !== p ? (o = (0, a.jsx)(tc.a, {
                color: "primary",
                disabled: p,
                loading: u,
                onClick: h,
                children: s
            }), l[4] = u, l[5] = h, l[6] = p, l[7] = o) : o = l[7], l[8] !== n || l[9] !== o ? (i = (0, a.jsx)("div", {
                className: "mx-auto mb-3 w-full max-w-[var(--thread-content-max-width)]",
                children: (0, a.jsx)(t2.a, {
                    ariaLive: "polite",
                    title: t,
                    content: n,
                    customCtas: o
                })
            }), l[8] = n, l[9] = o, l[10] = i) : i = l[10], i
        }
        var t4 = n("oGhM"),
            t5 = n("fr5e"),
            t6 = n("rxj0"),
            t7 = n("LEgg");
        let t8 = (0, tu.a)(() => n.e(766350).then(n.bind(n, "wWAQ")).then(e => e.ScheduledGoalNavigationBridge));

        function t9(e) {
            let t, n, s = (0, r.c)(6),
                {
                    conversationId: o,
                    scheduledAutomationId: i
                } = e,
                l = (0, eN.f)("3901104270");
            return s[0] !== o || s[1] !== l || s[2] !== i ? (t = l && null != i ? (0, a.jsx)(t8, {
                conversationId: o,
                automationId: i
            }) : null, s[0] = o, s[1] = l, s[2] = i, s[3] = t) : t = s[3], s[4] !== t ? (n = (0, a.jsx)(a.Fragment, {
                children: t
            }), s[4] = t, s[5] = n) : n = s[5], n
        }
        var ne = n("Bs4i"),
            nt = n("Qgfj"),
            nn = n("rmk3"),
            na = n("sqqv"),
            nr = n("dDDU"),
            ns = n("soaw"),
            no = n("ZrYB"),
            ni = n("X6Vn"),
            nl = n("Kwur"),
            nc = n("eKlv"),
            nd = n("NApj"),
            nu = n("g2p6"),
            nh = n("oaTv"),
            np = n("PME0"),
            ng = n("lgcP"),
            nm = n("reLr"),
            nf = n("b6fw"),
            nv = n("Yjxz"),
            nb = n("svjy");

        function ny(e, t) {
            if (!(0, eO.b)(e, "2274846837") || (0, tG.e)(t)) return null;
            let n = e.get(nm.b),
                a = e.get(nf.h, t);
            return null != n && null != a && (0, nv.a)(a.view.definition.type) ? {
                identity: n,
                state: a
            } : null
        }
        var nx = n("AcSY"),
            nw = n("w7E5"),
            nC = n("xEXG"),
            n_ = n("J6LI"),
            nS = n("lUUH"),
            nj = n("ftAl");

        function nI(e) {
            let t, n, s, o = (0, r.c)(17),
                {
                    children: i,
                    conversationId: l,
                    getBaseItems: c,
                    menuTriggerRef: u,
                    navigate: h,
                    onBeforeOpen: p,
                    renderDropdown: g
                } = e,
                m = (0, d.y)(eT.a),
                {
                    data: f
                } = (0, nx.f)(),
                v = (0, nC.b)();
            return o[0] !== f || o[1] !== l || o[2] !== c || o[3] !== u || o[4] !== h || o[5] !== v || o[6] !== m ? (t = () => {
                let e = m.get(nj.a, l, {
                        enabled: !1
                    }),
                    t = (0, tF.a)(e?.gizmo_id) ? e?.gizmo_id ?? null : null,
                    n = null == t ? void 0 : m.query.getData(O.b, t);
                return c(function(e) {
                    let {
                        scope: t,
                        conversationId: n,
                        conversation: a,
                        project: r,
                        account: s,
                        projectCrudStatus: o,
                        navigate: i,
                        onCreateProjectDialogCloseAutoFocus: l
                    } = e, c = (0, tF.a)(a?.gizmo_id) ? a?.gizmo_id ?? null : null, d = t.get(nw.a), u = t.get(e_.m), {
                        data: h
                    } = d, p = h?.pages.flatMap(e => e.items).length ?? 0, g = a?.conversation_origin === "tpp" || a?.conversation_origin === "flora", m = "allowed" === o || g && h?.pages.some(e => null != e.cursor) === !0, f = t.get(e_.h, n);
                    return null == s || null == a || t.get(e_.g, n) || (0, n_.c)(a, r).sourceUnavailable || null == (0, n_.b)(t, a, f, !1) || null != c && null == r || null == h || 0 === p && !m ? [] : [...null == r ? [] : [{
                        id: "current-project-name",
                        message: nA.projectName,
                        messageValues: {
                            projectName: r.gizmo.display.name
                        },
                        enabled: !1
                    }], ...(0, nS.b)({
                        scope: t,
                        conversation: a,
                        project: r,
                        showDestinationFetchState: !1,
                        showMoveToProject: null == c || p > 1 || m,
                        projectCrudStatus: o,
                        surface: "title-menu",
                        projectListQuery: d,
                        pinnedProjectsQuery: u,
                        navigate: i,
                        onCreateProjectDialogCloseAutoFocus: l
                    })]
                }({
                    scope: m,
                    conversationId: l,
                    conversation: e,
                    project: n,
                    account: f,
                    projectCrudStatus: v,
                    navigate: h,
                    onCreateProjectDialogCloseAutoFocus: e => {
                        e.preventDefault(), u.current?.focus({
                            preventScroll: !0
                        })
                    }
                }))
            }, o[0] = f, o[1] = l, o[2] = c, o[3] = u, o[4] = h, o[5] = v, o[6] = m, o[7] = t) : t = o[7], o[8] !== l || o[9] !== p || o[10] !== m ? (n = async () => {
                await Promise.all([(async () => {
                    let e = m.get(tr.chatGptConversationQueryById$, l, {
                        enabled: !1
                    });
                    null == e.data && e.isFetching && await m.query.getOrFetch(tr.chatGptConversationQueryById$, l).catch(nP), null == m.query.getData(tr.chatGptConversationQueryById$, l) && await m.query.getOrFetch(e_.j, [l]).catch(nE)
                })(), p?.()]);
                let e = m.get(nj.a, l, {
                    enabled: !1
                });
                (0, tF.a)(e?.gizmo_id) && e?.gizmo_id != null && await m.query.getOrFetch(O.b, e.gizmo_id).catch(nT)
            }, o[8] = l, o[9] = p, o[10] = m, o[11] = n) : n = o[11], o[12] !== i || o[13] !== g || o[14] !== t || o[15] !== n ? (s = (0, a.jsx)(nn.a, {
                preserveBrowserContextMenu: !0,
                awaitBeforeOpen: !1,
                getItems: t,
                onBeforeOpen: n,
                renderDropdown: g,
                trigger: "click",
                children: i
            }), o[12] = i, o[13] = g, o[14] = t, o[15] = n, o[16] = s) : s = o[16], s
        }

        function nT() {}

        function nE() {}

        function nP() {}
        let nA = (0, nt.f)({
            projectName: {
                id: "chatgptConversations.projectActions.projectName",
                defaultMessage: "{projectName}"
            }
        });

        function nM(e) {
            let t, s, o, i, l, c, u, h, p, g, b, y, x, _, S, j, T, E = (0, r.c)(68),
                {
                    onTitleClick: P,
                    showMenu: A,
                    triggerButton: M,
                    renderDropdown: k,
                    conversationOrigin: R,
                    conversationId: N,
                    title: O,
                    isHandoffPending: L,
                    isArchived: z,
                    isChatConversation: F,
                    onHandoff: B,
                    onOpenMessage: D,
                    projectId: G,
                    projectName: H,
                    serverConversationId: q
                } = e,
                W = (0, d.y)(eg.a),
                V = (0, d.y)(eT.a),
                Q = (0, ns.a)(),
                $ = (0, eN.i)();
            E[0] !== $ ? (t = !1, E[0] = $, E[1] = t) : t = E[1];
            let Y = t;
            E[2] !== $ ? (s = !1, E[2] = $, E[3] = s) : s = E[3];
            let J = s,
                X = Y || J;
            E[4] !== X ? (o = {
                enabled: X
            }, E[4] = X, E[5] = o) : o = E[5];
            let {
                data: Z
            } = (0, d.z)(nu.p, o), ee = X && Z?.fileLibraryEnabledForRegistrationCountry !== !1, et = (0, f.a)(), en = (0, v._)(), [ea, er] = (0, m.useState)(null), es = (0, m.useRef)(null), eo = (0, m.useRef)(null);
            E[6] === Symbol.for("react.memo_cache_sentinel") ? (i = [], E[6] = i) : i = E[6];
            let ei = (0, m.useRef)(i);
            E[7] === Symbol.for("react.memo_cache_sentinel") ? (l = {
                name: "chatgpt"
            }, E[7] = l) : l = E[7];
            let {
                isCapable: el
            } = (0, d.x)(w.a, l), ec = (0, d.x)(e_.g, q);
            E[8] === Symbol.for("react.memo_cache_sentinel") ? (c = () => er("shortcut"), E[8] = c) : c = E[8];
            let ed = F && !ec;
            E[9] !== W || E[10] !== q ? (u = () => (0, eC.a)(W.query.getData(tr.chatGptConversationQueryById$, q), W.get(I.h), W.get(I.g)), E[9] = W, E[10] = q, E[11] = u) : u = E[11], E[12] !== ed || E[13] !== u ? (h = {
                enabled: ed,
                isActive: u
            }, E[12] = ed, E[13] = u, E[14] = h) : h = E[14], (0, tK.a)("deleteChat", c, h), E[15] !== V || E[16] !== ec || E[17] !== en || E[18] !== W || E[19] !== q ? (p = e => {
                !ec && (0, eC.a)(W.query.getData(tr.chatGptConversationQueryById$, q), W.get(I.h), W.get(I.g)) && (er(null), (0, ng.a)(V, q, e), en("/", {
                    replace: !0,
                    state: {
                        leavingDeletedChatGptConversation: !0
                    }
                }))
            }, E[15] = V, E[16] = ec, E[17] = en, E[18] = W, E[19] = q, E[20] = p) : p = E[20];
            let eu = p;
            E[21] !== W || E[22] !== q ? (g = async () => {
                let e = [];
                ei.current = e, e.push(...await async function(e, t) {
                    let a = await nl.Request.safeGet("/live/conversations/{conversation_id}/session-sharing", {
                        parameters: {
                            path: {
                                conversation_id: t
                            }
                        }
                    }).catch(() => null);
                    return a?.can_share && 0 !== a.av_sessions.length ? [{
                        id: "share-live-session",
                        icon: td.jj,
                        message: (0, nt.e)({
                            id: "chatgptConversations.liveSessionSharing.action",
                            defaultMessage: "Share Live session"
                        }),
                        selectAfterClose: !0,
                        onSelect: () => {
                            n.e(571376).then(n.bind(n, "ATrx")).then(n => {
                                let {
                                    BidiSessionSharingDialog: r
                                } = n;
                                (0, ni.f)(e, r, {
                                    conversationId: t,
                                    sessions: a.av_sessions
                                })
                            })
                        }
                    }] : []
                }(W, q))
            }, E[21] = W, E[22] = q, E[23] = g) : g = E[23];
            let eh = g;
            E[24] !== N || E[25] !== R || E[26] !== ee || E[27] !== et || E[28] !== ec || E[29] !== z || E[30] !== L || E[31] !== Q || E[32] !== en || E[33] !== B || E[34] !== D || E[35] !== G || E[36] !== H || E[37] !== W || E[38] !== q || E[39] !== $ || E[40] !== O ? (b = e => {
                let t = W.get(I.f),
                    r = W.get(I.k),
                    s = W.query.getData(tr.chatGptConversationQueryById$, q),
                    o = W.get(I.h),
                    i = W.get(I.g),
                    l = (0, eC.a)(s, o, i),
                    c = (0, nc.b)(W, q),
                    d = !ec && (0, eC.a)(c, o, i),
                    u = W.get(C.b).pathname,
                    h = () => Q() && u === W.get(C.b).pathname && t === W.get(I.f) && r === W.get(I.k),
                    p = (0, nh.a)(W, N, R, () => (0, np.a)(en)),
                    g = [];
                $.getLayer("3732549458").get("enable_conversation_audio_summary", !1) && g.push({
                    id: "chatgpt-audio-summary",
                    message: (0, nt.e)({
                        id: "GizmoInformation.audioSummary",
                        defaultMessage: "Audio summary"
                    }),
                    icon: (0, a.jsx)(K.b, {
                        icon: {
                            16: td.yg,
                            20: td.zg
                        }
                    }),
                    nativeIcon: td.yg,
                    selectAfterClose: !0,
                    onSelect: () => {
                        (async function() {
                            return (await n.e(600460).then(n.bind(n, "EEPj"))).openAudioSummaryDialog
                        })().then(e => {
                            h() && e(W, q)
                        }).catch(() => {
                            h() && (es.current?.focus({
                                preventScroll: !0
                            }), W.get(U.f).danger(et.formatMessage({
                                id: "chatgpt.audioSummary.openError",
                                defaultMessage: "Couldn’t open audio summary"
                            }), {
                                errorAnalytics: {
                                    toastId: "chatgpt.audioSummary.openError"
                                }
                            }))
                        })
                    }
                }), ee && g.unshift({
                    id: "chatgpt-conversation-files",
                    message: (0, nt.e)({
                        id: "GizmoInformation.viewFiles",
                        defaultMessage: "View files in chat"
                    }),
                    icon: (0, a.jsx)(K.b, {
                        icon: {
                            16: td.rb,
                            20: td.sb
                        }
                    }),
                    nativeIcon: td.rb,
                    onSelect: () => {
                        (async function() {
                            return (await n.e(368308).then(n.bind(n, "LFUX"))).openConversationFiles
                        })().then(e => {
                            h() && e(W, {
                                conversationId: N,
                                serverConversationId: q,
                                onOpenMessage: D
                            })
                        }).catch(() => {
                            h() && W.get(U.f).danger(et.formatMessage({
                                id: "chatgptConversations.files.loadPanelError",
                                defaultMessage: "Couldn’t open files in chat"
                            }), {
                                errorAnalytics: {
                                    toastId: "chatgptConversations.files.loadPanelError"
                                }
                            })
                        })
                    }
                });
                let m = [];
                {
                    let e = null == ny(W, q) ? null : {
                        id: "language-learning-feedback",
                        icon: td.wd,
                        message: (0, nt.e)({
                            id: "restricted.languageLearningFeedback.action",
                            defaultMessage: "Language learning feedback"
                        }),
                        selectAfterClose: !0,
                        onSelect: () => {
                            let e = ny(W, q);
                            if (null == e || !h()) return;
                            let {
                                identity: t,
                                state: a
                            } = e, r = a.view.definition.sections.find(e => e.id === a.selectedSectionId), s = W.get(tm.C, q), o = W.get(tm.N, q), i = {
                                identity: t,
                                conversationId: q,
                                context: JSON.stringify({
                                    report_opened_at_utc: new Date().toISOString(),
                                    conversation_id: q,
                                    section_id: a.selectedSectionId,
                                    section_start_message_id: r?.start_message_id,
                                    target_section_id: a.entry?.sectionId,
                                    current_node_id: s,
                                    current_node_id_scope: "conversation_tail"
                                }, null, 2),
                                conversationJson: null == o ? null : JSON.stringify({
                                    conversation_id: q,
                                    current_node: s,
                                    mapping: o,
                                    sectioned_conversation: a.view
                                })
                            };
                            n.e(764441).then(n.bind(n, "OLZ4")).then(e => {
                                let {
                                    LanguageLearningFeedbackDialog: n
                                } = e, a = W.get(nm.b);
                                h() && (0, eO.b)(W, "2274846837") && a?.accountId === t.accountId && a.userId === t.userId && (0, ni.f)(W, n, {
                                    report: i
                                })
                            }).catch(() => {
                                h() && W.get(U.f).danger(W.get(nb.a).formatMessage({
                                    id: "restricted.languageLearningFeedback.openError",
                                    defaultMessage: "Couldn't open feedback. Please try again"
                                }), {
                                    errorAnalytics: {
                                        toastId: "language_learning_feedback_open_error"
                                    }
                                })
                            })
                        }
                    };
                    null != e && m.push(e)
                }
                return g.push(...(0, nr.a)(W)), (0, nd.a)(W, {
                    projectItems: void 0 === e ? [] : e,
                    sharingItems: ei.current,
                    viewItems: g,
                    feedbackItems: m,
                    preferenceItems: null == p ? [] : [p],
                    surface: "header",
                    isTitleMenu: !0,
                    conversationId: q,
                    stateConversationId: N,
                    conversationOrigin: R,
                    title: O,
                    isHandoffPending: L,
                    canHandoff: null != B,
                    onHandoff: B,
                    projectId: G,
                    projectName: H,
                    onRename: (0, eC.b)(s, o, i, ec) ? () => void(0, nc.renameActiveChatGptConversation)(W, N) : void 0,
                    isPinned: W.get(e_.h, q) ?? c?.is_starred === !0,
                    onTogglePin: d ? () => {
                        let e = (0, nc.b)(W, q);
                        !(null == e || W.get(e_.g, q)) && (0, eC.a)(e, W.get(I.h), W.get(I.g)) && (0, e_.V)({
                            scope: W,
                            conversation: "conversation_id" in e ? {
                                gizmo_id: e.gizmo_id,
                                id: e.conversation_id,
                                is_archived: e.is_archived,
                                is_starred: e.is_starred,
                                title: e.title
                            } : e
                        }).catch(nk)
                    } : void 0,
                    onArchive: !l || ec || z ? void 0 : () => (0, no.a)(W, q),
                    onUnarchive: l && !ec && z ? () => {
                        (0, e_.W)({
                            scope: W,
                            conversationId: q
                        }).then(() => {
                            W.get(U.f).success(et.formatMessage(eE.a.unarchiveSuccessPlain))
                        }).catch(() => {
                            W.get(U.f).danger(et.formatMessage(ew.a.unarchiveError), {
                                errorAnalytics: {
                                    toastId: "chatgptConversationPage.onUnarchive.unarchiveError"
                                }
                            })
                        })
                    } : void 0,
                    onDelete: !l || ec ? void 0 : () => er("menu")
                })
            }, E[24] = N, E[25] = R, E[26] = ee, E[27] = et, E[28] = ec, E[29] = z, E[30] = L, E[31] = Q, E[32] = en, E[33] = B, E[34] = D, E[35] = G, E[36] = H, E[37] = W, E[38] = q, E[39] = $, E[40] = O, E[41] = b) : b = E[41];
            let ep = b;
            E[42] !== P || E[43] !== O || E[44] !== M ? (y = null == M ? (0, a.jsx)(na.a, {
                ref: es,
                onActivate: P,
                title: O
            }) : (0, a.jsx)(ne.b, {
                ref: es,
                children: M
            }), E[42] = P, E[43] = O, E[44] = M, E[45] = y) : y = E[45];
            let em = y;
            E[46] !== ep || E[47] !== em || E[48] !== en || E[49] !== el || E[50] !== eh || E[51] !== k || E[52] !== q || E[53] !== A ? (x = A && (el ? (0, a.jsx)(nI, {
                conversationId: q,
                getBaseItems: ep,
                menuTriggerRef: es,
                navigate: en,
                onBeforeOpen: eh,
                renderDropdown: k,
                children: em
            }) : (0, a.jsx)(nn.a, {
                preserveBrowserContextMenu: !0,
                getItems: () => ep(),
                onBeforeOpen: eh,
                renderDropdown: k,
                trigger: "click",
                children: em
            })), E[46] = ep, E[47] = em, E[48] = en, E[49] = el, E[50] = eh, E[51] = k, E[52] = q, E[53] = A, E[54] = x) : x = E[54];
            let ef = "shortcut" === ea,
                ev = null != ea;
            return E[55] !== ea ? (_ = () => {
                eo.current = "menu" === ea ? es.current : null, er(null)
            }, E[55] = ea, E[56] = _) : _ = E[56], E[57] === Symbol.for("react.memo_cache_sentinel") ? (S = e => {
                let t = eo.current;
                if (eo.current = null, null == t) return;
                e.preventDefault();
                let n = t.ownerDocument.activeElement;
                t.isConnected && (n === t.ownerDocument.body || e.target instanceof HTMLElement && e.target.contains(n)) && t.focus({
                    preventScroll: !0
                })
            }, E[57] = S) : S = E[57], E[58] !== eu || E[59] !== ec || E[60] !== ef || E[61] !== ev || E[62] !== _ || E[63] !== O ? (j = (0, a.jsx)(ex.a, {
                allowArtifactDeletion: !0,
                autoFocusConfirm: ef,
                open: ev,
                onOpenChange: _,
                onCloseAutoFocus: S,
                isDeleting: ec,
                onConfirm: eu,
                title: O
            }), E[58] = eu, E[59] = ec, E[60] = ef, E[61] = ev, E[62] = _, E[63] = O, E[64] = j) : j = E[64], E[65] !== x || E[66] !== j ? (T = (0, a.jsxs)(a.Fragment, {
                children: [x, j]
            }), E[65] = x, E[66] = j, E[67] = T) : T = E[67], T
        }

        function nk() {}

        function nR(e) {
            let t, n, s, o = (0, r.c)(11),
                {
                    title: i,
                    lockdownConversationId: l,
                    triggerButton: c,
                    renderDropdown: u
                } = e,
                h = (0, d.y)(eg.a),
                p = (0, v._)();
            return o[0] !== l || o[1] !== p || o[2] !== h ? (t = () => {
                let e = (0, nh.a)(h, l, null, () => (0, np.a)(p));
                return null == e ? [] : [e]
            }, o[0] = l, o[1] = p, o[2] = h, o[3] = t) : t = o[3], o[4] !== i || o[5] !== c ? (n = c ?? (0, a.jsx)(na.a, {
                title: i
            }), o[4] = i, o[5] = c, o[6] = n) : n = o[6], o[7] !== u || o[8] !== t || o[9] !== n ? (s = (0, a.jsx)(nn.a, {
                preserveBrowserContextMenu: !0,
                getItems: t,
                renderDropdown: u,
                trigger: "click",
                children: n
            }), o[7] = u, o[8] = t, o[9] = n, o[10] = s) : s = o[10], s
        }
        var nN = n("jeai"),
            nO = n("dLcZ"),
            nL = n("jcQY");

        function nz(e) {
            let t, n, s = (0, r.c)(5),
                {
                    children: o
                } = e,
                i = (0, d.z)(eL.a);
            return s[0] !== o ? (t = (0, a.jsx)("div", {
                className: nL.a.Progress,
                children: o
            }), s[0] = o, s[1] = t) : t = s[1], s[2] !== i || s[3] !== t ? (n = (0, a.jsx)(S.a.HeaderAction, {
                actionId: "sectioned-conversation-navigation",
                align: "center",
                allowsThreadContentOverlap: i,
                children: t
            }), s[2] = i, s[3] = t, s[4] = n) : n = s[4], n
        }
        var nF = n("NVRI"),
            nB = n("WLgA");

        function nD(e) {
            let t, n, s = (0, r.c)(9),
                {
                    icon: o,
                    name: i,
                    projectId: l,
                    linkToProject: c
                } = e;
            s[0] !== o || s[1] !== c || s[2] !== i || s[3] !== l ? (t = c && null != i ? (0, a.jsx)(tc.b, {
                "aria-label": i,
                color: "ghostActive",
                size: "toolbar",
                to: (0, nB.c)(l),
                uniform: !0,
                children: o
            }) : null, s[0] = o, s[1] = c, s[2] = i, s[3] = l, s[4] = t) : t = s[4];
            let d = t,
                u = d ?? o,
                h = null != d;
            return s[5] !== i || s[6] !== u || s[7] !== h ? (n = (0, a.jsx)(nF.b, {
                project: {
                    icon: u,
                    iconInteractive: h,
                    name: i
                }
            }), s[5] = i, s[6] = u, s[7] = h, s[8] = n) : n = s[8], n
        }
        var nG = n("ftSl"),
            nH = n("u9Jt"),
            nq = n("Xoyl");

        function nW(e) {
            let t, n = (0, r.c)(7),
                {
                    hasTitleMenu: s,
                    onClick: o,
                    project: i,
                    title: l
                } = e;
            if (null == l) {
                let e;
                return n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(nq.a, {}), n[0] = e) : e = n[0], e
            }
            if (s) {
                let e;
                return n[1] !== o || n[2] !== i || n[3] !== l ? (e = (0, a.jsx)(nN.a, {
                    children: (0, a.jsx)(nH.a, {
                        triggerButton: (0, a.jsx)(na.a, {
                            onActivate: o,
                            project: i,
                            title: l
                        })
                    })
                }), n[1] = o, n[2] = i, n[3] = l, n[4] = e) : e = n[4], e
            }
            return n[5] !== l ? (t = (0, a.jsx)(nG.a, {
                className: "max-w-full",
                variant: "flush-start",
                title: l
            }), n[5] = l, n[6] = t) : t = n[6], t
        }
        var nK = n("MJRC"),
            nU = n("X0li");
        let nV = (0, tu.a)(nU.d),
            nQ = (0, tu.a)(async () => (await n.e(328371).then(n.bind(n, "uPMT"))).SectionHistory),
            n$ = (0, tu.a)(async () => (await n.e(270015).then(n.bind(n, "r5vN"))).SectionNavigation);
        var nY = n("ZSgi"),
            nJ = n("lX86"),
            nX = n("sQ4r"),
            nZ = n("on57"),
            n0 = n("IPUh"),
            n1 = n("v7qY"),
            n2 = n("wD9O"),
            n3 = n("jov5"),
            n4 = n("Ro2M"),
            n5 = n("bN4H"),
            n6 = n("TS05");

        function n7(e) {
            let t, n, s, o, i = (0, r.c)(12),
                {
                    conversationId: l,
                    entries: c,
                    turnListApi: u
                } = e,
                {
                    key: h,
                    search: p,
                    state: g
                } = (0, v.X)();
            i[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                name: "automations.cloud.scheduled-tasks"
            }, i[0] = t) : t = i[0];
            let {
                isCapable: m
            } = (0, d.x)(w.a, t);
            if (i[1] !== m || i[2] !== g?.sidebarArea || i[3] !== p) {
                let e = new URLSearchParams(p);
                n = e.get("automationId"), s = g?.sidebarArea === "scheduled" || !m || !n || "finalAgentTurnStart" !== e.get("messageId"), i[1] = m, i[2] = g?.sidebarArea, i[3] = p, i[4] = n, i[5] = s
            } else n = i[4], s = i[5];
            return s ? null : (i[6] !== n || i[7] !== l || i[8] !== c || i[9] !== h || i[10] !== u ? (o = (0, a.jsx)(n8, {
                automationId: n,
                conversationId: l,
                entries: c,
                turnListApi: u
            }, h), i[6] = n, i[7] = l, i[8] = c, i[9] = h, i[10] = u, i[11] = o) : o = i[11], o)
        }

        function n8(e) {
            let t, n, a, s, o = (0, r.c)(25),
                {
                    automationId: i,
                    conversationId: l,
                    entries: c,
                    turnListApi: u
                } = e,
                h = (0, d.y)(eg.a),
                p = (0, v.X)(),
                g = (0, d.z)(I.f),
                f = (0, d.x)(tm.j, l),
                {
                    data: b
                } = (0, d.x)(n4.e, i),
                y = (0, d.z)(n3.a),
                x = (0, m.useRef)(null),
                w = (0, m.useRef)(null);
            o[0] !== c ? (t = c.findLast(at), o[0] = c, o[1] = t) : t = o[1];
            let C = t;
            o[2] !== g || o[3] !== i || o[4] !== y || o[5] !== C || o[6] !== b || o[7] !== p || o[8] !== h || o[9] !== u ? (n = () => {
                null == b || null == g || (y || x.current === g || (x.current = g, (0, n5.openAutomationSidePanelTab)({
                    scope: h,
                    automationId: i,
                    title: b.automation.title
                })), null != u && null != C && w.current !== g && (w.current = g, u.scrollToKey(C.turnKey, n9, {
                    align: "top"
                }).then(() => {
                    h.set(n6.a, {
                        locationKey: p.key,
                        accountId: g
                    }, !0)
                })))
            }, o[2] = g, o[3] = i, o[4] = y, o[5] = C, o[6] = b, o[7] = p, o[8] = h, o[9] = u, o[10] = n) : n = o[10];
            let _ = (0, m.useEffectEvent)(n);
            o[11] !== g || o[12] !== l || o[13] !== b?.automation.conversation_id || o[14] !== _ || o[15] !== f ? (a = () => {
                null != g && b?.automation.conversation_id === (f ?? l) && _()
            }, o[11] = g, o[12] = l, o[13] = b?.automation.conversation_id, o[14] = _, o[15] = f, o[16] = a) : a = o[16];
            let S = C?.turnKey,
                j = b?.automation.conversation_id;
            return o[17] !== g || o[18] !== y || o[19] !== l || o[20] !== f || o[21] !== S || o[22] !== j || o[23] !== u ? (s = [g, l, S, j, f, y, u], o[17] = g, o[18] = y, o[19] = l, o[20] = f, o[21] = S, o[22] = j, o[23] = u, o[24] = s) : s = o[24], (0, m.useEffect)(a, s), null
        }

        function n9(e) {
            let t = e.querySelector("[data-chatgpt-agent-turn-start]");
            if (null == t) return null;
            let n = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                acceptNode: ae
            });
            n.currentNode = t;
            let a = n.nextNode();
            return a instanceof HTMLElement ? a : null
        }

        function ae(e) {
            return e instanceof HTMLElement && e.getClientRects().length > 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }

        function at(e) {
            let {
                turn: t
            } = e;
            return t.items.some(an)
        }

        function an(e) {
            return "user-message" !== e.type
        }
        var aa = n("TDcV"),
            ar = n("Xvoy"),
            as = n("WAdu");
        let ao = {
            $type: "protobuf_analytics_events.v1.ChatgptConversationPrintLifecycle"
        };
        var ai = n("jDEJ");
        let al = (0, d.u)(eT.a, null);

        function ac(e, t) {
            if (!e.get(ec.c).isChatgptBrowserReplacement || t.repeat || ((0, ai.a)() ? !t.metaKey || t.ctrlKey : !t.ctrlKey || t.metaKey) || t.altKey || t.shiftKey || "p" !== t.key.toLowerCase() || null != e.get(al)) return;
            let n = au("CHATGPT_CONVERSATION_PRINT_ENTRY_POINT_SHORTCUT");
            e.set(al, n), ah(e, n, "CHATGPT_CONVERSATION_PRINT_STAGE_INTENT_OBSERVED")
        }
        async function ad(e, t, n, a) {
            let r = e.get(al);
            if (!e.get(ec.c).isChatgptBrowserReplacement || null == r) return a();
            let s = n => {
                ah(e, r, n, t)
            };
            s("CHATGPT_CONVERSATION_PRINT_STAGE_PREPARATION_STARTED");
            try {
                let e = await a();
                return n.aborted || s("CHATGPT_CONVERSATION_PRINT_STAGE_PREPARATION_SUCCEEDED"), e
            } catch (a) {
                throw n.aborted || s("CHATGPT_CONVERSATION_PRINT_STAGE_PREPARATION_FAILED"), "CHATGPT_CONVERSATION_PRINT_PREPARATION_HISTORY" !== t || e.get(al)?.id !== r.id || e.get(al)?.printing || e.set(al, null), a
            }
        }

        function au(e) {
            let t = performance.now();
            return {
                id: crypto.randomUUID(),
                entryPoint: e,
                startedAt: t,
                printing: !1
            }
        }

        function ah(e, t, n, a) {
            (0, ec.a)(e, ao, {
                attemptId: t.id,
                stage: n,
                entryPoint: t.entryPoint,
                elapsedMs: Math.max(0, performance.now() - t.startedAt),
                preparation: a
            })
        }
        var ap = n("CpsU"),
            ag = n.n(ap),
            am = n("rKAs"),
            af = n("SqqO"),
            av = n("zHp1"),
            ab = n("taWv");

        function ay() {
            return Object.fromEntries(Array.from(document.images).flatMap(e => {
                if (!e.complete || 0 === e.naturalWidth) return [];
                let t = e.currentSrc || e.src;
                return [e.getAttribute("src"), e.src, t].flatMap(e => e ? [
                    [e, t]
                ] : [])
            }))
        }
        var ax = n("j0nn"),
            aw = n("AO3k"),
            aC = n("NDRv"),
            a_ = n("NV1R"),
            aS = n("zn0A"),
            aj = "printDocument-v_w5Ax";
        let aI = "https://chatgpt.com/download/?utm_source=chatgpt_web&utm_medium=print&utm_campaign=app_install";

        function aT(e) {
            let t, n, s, o, i, l, c, d, u, h, p, g, m, v = (0, r.c)(24),
                {
                    children: b,
                    title: y
                } = e,
                x = (0, f.a)(),
                {
                    getExperiment: w
                } = (0, eN.h)(),
                C = w("448755449").get("enabled", !1);
            v[0] !== b ? (t = (0, a.jsx)(aS.a, {
                value: !0,
                children: b
            }), v[0] = b, v[1] = t) : t = v[1];
            let _ = t;
            if (!C) {
                let e, t;
                return v[2] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, nZ.b)(aj, "hidden w-full space-y-1.5 bg-surface text-default print:block"), v[2] = e) : e = v[2], v[3] !== _ ? (t = (0, a.jsx)("div", {
                    className: e,
                    "data-conversation-print": "",
                    "data-theme": "light",
                    children: _
                }), v[3] = _, v[4] = t) : t = v[4], t
            }
            return v[5] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, nZ.b)(aj, "formattedPrintDocument-tP74Wl", "group/conversation-print hidden w-full bg-surface text-default print:block"), v[5] = n) : n = v[5], v[6] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, a.jsx)(aC.a, {
                className: "h-6 w-auto shrink-0"
            }), v[6] = s) : s = v[6], v[7] !== y ? (o = (0, a.jsxs)("header", {
                className: "mb-6 flex items-center justify-between gap-6",
                children: [s, (0, a.jsx)("p", {
                    className: "min-w-0 text-end text-sm wrap-anywhere text-secondary",
                    children: y
                })]
            }), v[7] = y, v[8] = o) : o = v[8], v[9] !== _ ? (i = (0, a.jsx)("div", {
                className: "transcript-XHYu34",
                children: _
            }), v[9] = _, v[10] = i) : i = v[10], v[11] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, nZ.b)("footer-QEzLbn", "flex items-center gap-3 rounded-2xl border border-default bg-surface-secondary p-2 text-default"), v[11] = l) : l = v[11], v[12] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)("div", {
                className: "flex size-10 shrink-0 items-center justify-center rounded-xl border border-default bg-surface",
                children: (0, a.jsx)(a_.a, {
                    className: "size-7",
                    "aria-hidden": "true"
                })
            }), v[12] = c) : c = v[12], v[13] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, a.jsx)("p", {
                className: "font-semibold",
                children: (0, a.jsx)(ey.a, {
                    id: "chatgpt.print.downloadApp.title",
                    defaultMessage: "Take your curiosity further"
                })
            }), v[13] = d) : d = v[13], v[14] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, a.jsxs)("div", {
                className: "min-w-0 flex-1 text-sm",
                children: [d, (0, a.jsx)("p", {
                    className: "mt-1 text-secondary",
                    children: (0, a.jsx)(ey.a, {
                        id: "chatgpt.print.downloadApp.description",
                        defaultMessage: "Scan to get the ChatGPT app"
                    })
                })]
            }), v[14] = u) : u = v[14], v[15] !== x ? (h = x.formatMessage({
                id: "chatgpt.print.downloadApp.qrCode",
                defaultMessage: "Download the ChatGPT app"
            }), v[15] = x, v[16] = h) : h = v[16], v[17] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, a.jsx)(ey.a, {
                id: "chatgpt.print.downloadApp.fallback",
                defaultMessage: "Get the app"
            }), v[17] = p) : p = v[17], v[18] !== h ? (g = (0, a.jsxs)("footer", {
                className: l,
                children: [c, u, (0, a.jsx)("a", {
                    className: "shrink-0",
                    href: `${aI}&utm_content=pdf_link`,
                    children: (0, a.jsx)(aw.a, {
                        value: `${aI}&utm_content=qr`,
                        size: "inline",
                        ariaLabel: h,
                        fallback: p
                    })
                })]
            }), v[18] = h, v[19] = g) : g = v[19], v[20] !== g || v[21] !== o || v[22] !== i ? (m = (0, a.jsxs)("div", {
                className: n,
                "data-conversation-print": "",
                "data-print-formatting": "",
                "data-theme": "light",
                children: [o, i, g]
            }), v[20] = g, v[21] = o, v[22] = i, v[23] = m) : m = v[23], m
        }

        function aE(e) {
            return {
                ...e,
                renderTelemetryMessages: void 0
            }
        }
        var aP = n("jfiJ"),
            aA = n("FGJH"),
            aM = n("nmN6");
        let ak = new WeakMap;

        function aR(e) {
            let t, n, s = (0, r.c)(6),
                o = (0, d.z)(aa.a);
            return s[0] !== o || s[1] !== e.entries[0]?.conversationId ? (t = JSON.stringify([o, e.entries[0]?.conversationId]), s[0] = o, s[1] = e.entries[0]?.conversationId, s[2] = t) : t = s[2], s[3] !== e || s[4] !== t ? (n = (0, a.jsx)(aN, {
                ...e
            }, t), s[3] = e, s[4] = t, s[5] = n) : n = s[5], n
        }

        function aN(e) {
            let t, n, s, o, i, l, c = (0, r.c)(16),
                u = (0, d.y)(eg.a),
                h = (0, d.z)(ar.a),
                [p, g] = (0, m.useState)(!1),
                f = (0, m.useRef)(null);
            c[0] !== u ? (t = (e, t) => {
                if (ac(u, e), !e.ctrlKey && !e.metaKey || e.altKey || e.shiftKey || "p" !== e.key.toLowerCase()) return;
                if (e.repeat) return void f.current?.onKeyDown(e, t);
                let n = ak.get(e);
                if (e.defaultPrevented && null == n) return;
                (0, n1.flushSync)(() => g(!0));
                let a = n ?? f.current?.onKeyDown(e, t);
                null == a && e.defaultPrevented || Promise.resolve(a).then(() => ak.get(e)).finally(() => {
                    t.aborted || g(!1)
                })
            }, c[0] = u, c[1] = t) : t = c[1];
            let v = (0, m.useEffectEvent)(t);
            c[2] === Symbol.for("react.memo_cache_sentinel") ? (n = () => {
                (0, n1.flushSync)(() => g(!0)), f.current?.onBeforePrint()
            }, c[2] = n) : n = c[2];
            let b = (0, m.useEffectEvent)(n);
            c[3] !== u ? (s = () => {
                u.set(aS.b, null), g(!1)
            }, c[3] = u, c[4] = s) : s = c[4];
            let y = (0, m.useEffectEvent)(s);
            return c[5] !== y || c[6] !== b || c[7] !== v || c[8] !== u ? (o = () => {
                let e, t, n = new AbortController,
                    a = (e = () => {
                        if (!u.get(ec.c).isChatgptBrowserReplacement) return;
                        let e = u.get(al);
                        if (e?.printing) return;
                        let t = {
                            ...e ?? au("CHATGPT_CONVERSATION_PRINT_ENTRY_POINT_UNOBSERVED"),
                            printing: !0
                        };
                        u.set(al, t), ah(u, t, "CHATGPT_CONVERSATION_PRINT_STAGE_BEFORE_PRINT")
                    }, t = () => {
                        let e = u.get(al);
                        u.get(ec.c).isChatgptBrowserReplacement && e?.printing && (ah(u, e, "CHATGPT_CONVERSATION_PRINT_STAGE_AFTER_PRINT"), u.set(al, null))
                    }, window.addEventListener("beforeprint", e, !0), window.addEventListener("afterprint", t), () => {
                        window.removeEventListener("beforeprint", e, !0), window.removeEventListener("afterprint", t), u.set(al, null)
                    }),
                    r = e => v(e, n.signal);
                return window.addEventListener("keydown", r, !0), window.addEventListener("beforeprint", b, !0), window.addEventListener("afterprint", y), () => {
                    n.abort(), window.removeEventListener("keydown", r, !0), window.removeEventListener("beforeprint", b, !0), window.removeEventListener("afterprint", y), u.set(aS.b, null), a()
                }
            }, c[5] = y, c[6] = b, c[7] = v, c[8] = u, c[9] = o) : o = c[9], c[10] !== u ? (i = [u], c[10] = u, c[11] = i) : i = c[11], (0, m.useEffect)(o, i), c[12] !== h || c[13] !== e || c[14] !== p ? (l = p || h ? (0, a.jsx)(aO, {
                ...e,
                ref: f,
                printing: h
            }) : null, c[12] = h, c[13] = e, c[14] = p, c[15] = l) : l = c[15], l
        }

        function aO(e) {
            let t, n, s, o, l = (0, r.c)(19),
                {
                    entries: c,
                    title: u,
                    TurnRowComponent: h,
                    printing: p,
                    ref: g
                } = e,
                f = (0, d.y)(eg.a),
                v = (0, m.useContext)(j.a),
                b = (0, m.useContext)(as.a),
                {
                    getExperiment: y
                } = (0, eN.h)(),
                x = y("448755449", {
                    disableExposureLog: !0
                }).get("enabled", !1);
            l[0] !== c[0]?.conversationId ? (t = c[0]?.conversationId ?? (0, tG.d)(""), l[0] = c[0]?.conversationId, l[1] = t) : t = l[1], l[2] !== v || l[3] !== t ? (n = {
                auth: v,
                conversationId: t
            }, l[2] = v, l[3] = t, l[4] = n) : n = l[4];
            let w = (0, d.x)(null != c[0] && ax.h, n),
                C = (0, d.x)(null == c[0] ? null : t6.e, c[0]?.conversationId ?? "") ?? !0,
                _ = (0, m.useRef)(null),
                S = function(e, t, n) {
                    let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        r = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
                        s = arguments.length > 5 ? arguments[5] : void 0,
                        o = [],
                        i = [],
                        l = new Map;
                    for (let n of t) {
                        let t = l.get(n.conversationId);
                        if (null == t) {
                            let a = e.get(tm.j, n.conversationId);
                            t = {
                                serverId: a,
                                userResolver: (0, ab.c)(void 0, void 0, void 0, e.get(tm.T, n.conversationId) ?? void 0),
                                scopedResolver: (0, ab.c)(a ?? void 0)
                            }, l.set(n.conversationId, t)
                        }
                        let {
                            serverId: s,
                            userResolver: c,
                            scopedResolver: d
                        } = t;
                        for (let l of n.turn.items.flatMap(e => "chatgpt-reasoning-group" === e.type ? e.items : [e]))
                            if ("user-message" === l.type) i.push(...l.images.map(e => ({
                                src: e,
                                resolver: c
                            }))), null != l.imageEditOperation && i.push({
                                src: `sediment://${l.imageEditOperation.original_file_id}`,
                                resolver: d
                            });
                            else if ("generated-image" === l.type) {
                            void 0 === t.generatedResolver && (t.generatedResolver = e.get(ab.a, n.conversationId));
                            let a = t.generatedResolver;
                            null != a && i.push({
                                src: l.src,
                                resolver: a
                            })
                        } else if ("chatgpt-python-execution" === l.type && null != s) i.push(...l.images.map(e => {
                            let {
                                src: t
                            } = e;
                            return {
                                src: t,
                                resolver: d
                            }
                        }));
                        else if ("assistant-message" === l.type) {
                            if (a) {
                                for (let [e, t] of l.contentReferences.entries())
                                    if ("image_group" === t.type || "image_v2" === t.type)
                                        for (let a of (0, am.u)(t, e)) {
                                            if (r && (0, af.d)(a.src)) continue;
                                            let e = a.searchResult?.isProxied && (a.previewSrc === a.searchResult.contentSrc || a.previewSrc === a.searchResult.originalSrc) ? a.src : a.previewSrc;
                                            o.push({
                                                conversationId: n.conversationId,
                                                src: a.src,
                                                previewSrc: null != e && r && (0, af.d)(e) ? a.src : e
                                            })
                                        }
                            }
                            if (null == s) continue;
                            i.push(...l.contentReferences.flatMap((e, t) => (0, am.u)(e, t).map(e => {
                                let {
                                    src: t
                                } = e;
                                return {
                                    src: t,
                                    resolver: d
                                }
                            })), ...(l.pythonExecutions ?? []).flatMap(e => {
                                let {
                                    images: t
                                } = e;
                                return t.map(e => {
                                    let {
                                        src: t
                                    } = e;
                                    return {
                                        src: t,
                                        resolver: d
                                    }
                                })
                            }))
                        }
                    }
                    let c = i.flatMap(e => {
                        let {
                            src: t,
                            resolver: n
                        } = e;
                        return null != t && (0, av.h)(t) ? [{
                            src: t,
                            resolver: n
                        }] : []
                    });
                    return {
                        queryKey: ["chatgpt-print-assets", e.get(aa.a), t[0]?.conversationId, a, r, o, c.map(e => {
                            let {
                                src: t,
                                resolver: n
                            } = e;
                            return [t, ...n.cacheKey, n.validationSessionId]
                        })],
                        initialData: 0 === c.length ? {
                            imageSources: {},
                            complete: 0 === o.length
                        } : void 0,
                        enabled: n && c.length > 0,
                        staleTime: eG.b.FIVE_MINUTES,
                        refetchOnWindowFocus: !1,
                        retry: !1,
                        queryFn: t => {
                            let {
                                client: a,
                                signal: i,
                                queryKey: l
                            } = t;
                            return ad(e, "CHATGPT_CONVERSATION_PRINT_PREPARATION_IMAGES", i, async () => {
                                let t = {
                                    ...a.getQueryData(l)?.imageSources
                                };
                                for (let e of ag()(c, 6)) i.throwIfAborted(), await Promise.all(e.map(async e => {
                                    let {
                                        src: n,
                                        resolver: r
                                    } = e, s = await (0, av.a)(a, n, r);
                                    if (i.throwIfAborted(), null != s) {
                                        let e = new Image;
                                        e.referrerPolicy = "no-referrer", e.src = s, await e.decode(), t[n] = s
                                    }
                                }));
                                let d = new Map,
                                    u = o.flatMap(t => {
                                        let n = d.get(t.conversationId);
                                        return (null == n && (n = r || !e.get(ax.h, {
                                            auth: s,
                                            conversationId: t.conversationId
                                        }) && e.get(t6.e, t.conversationId), d.set(t.conversationId, n)), n && (0, af.d)(t.src)) ? [] : [{
                                            ...t,
                                            previewSrc: n && null != t.previewSrc && (0, af.d)(t.previewSrc) ? t.src : t.previewSrc
                                        }]
                                    }),
                                    h = n ? t : await async function(e, t, n) {
                                        if (0 === e.length) return t;
                                        let a = ay(),
                                            r = {
                                                ...t
                                            },
                                            s = [];
                                        for (let n of e) {
                                            let e = t[n.src] ?? a[n.src] ?? (null == n.previewSrc ? void 0 : t[n.previewSrc] ?? a[n.previewSrc]);
                                            null != e ? r[n.src] = e : s.push(n)
                                        }
                                        if (0 === s.length || n.aborted) return r;
                                        let o = new AbortController,
                                            i = () => o.abort();
                                        n.addEventListener("abort", i, {
                                            once: !0
                                        });
                                        let l = setTimeout(i, 1e3),
                                            c = 0;
                                        try {
                                            await Promise.all(Array.from({
                                                length: Math.min(4, s.length)
                                            }, async () => {
                                                for (; !o.signal.aborted;) {
                                                    let e = s[c++];
                                                    if (null == e) return;
                                                    let t = e.previewSrc ?? e.src;
                                                    if (!/^(https?:|data:image\/|blob:)/i.test(t)) continue;
                                                    let n = await
                                                    function(e, t) {
                                                        return new Promise(n => {
                                                            let a = new Image,
                                                                r = e => {
                                                                    t.removeEventListener("abort", s), n(e)
                                                                },
                                                                s = () => {
                                                                    a.removeAttribute("src"), r(null)
                                                                };
                                                            t.aborted ? n(null) : (t.addEventListener("abort", s, {
                                                                once: !0
                                                            }), a.referrerPolicy = "no-referrer", a.src = e, a.decode().then(() => r(e), () => r(null)))
                                                        })
                                                    }(t, o.signal);
                                                    null != n && (r[e.src] = n)
                                                }
                                            }))
                                        } finally {
                                            clearTimeout(l), n.removeEventListener("abort", i)
                                        }
                                        return n.throwIfAborted(), r
                                    }(u, t, i);
                                return {
                                    imageSources: h,
                                    complete: u.every(e => null != h[e.src])
                                }
                            })
                        }
                    }
                }(f, c, p, x, "restricted" === b || !w && C, v),
                {
                    data: I,
                    isSuccess: T,
                    isError: E,
                    refetch: P
                } = (0, i.a)(S);
            return l[5] !== S || l[6] !== I || l[7] !== x || l[8] !== T || l[9] !== P || l[10] !== f ? (s = () => ({
                onKeyDown(e, t) {
                    if (!e.defaultPrevented && (!T || !I.complete) && (e.preventDefault(), !e.repeat && _.current !== t)) return _.current = t, P({
                        cancelRefetch: !1
                    }).then(() => {
                        t.aborted || window.print()
                    }).finally(() => {
                        _.current === t && (_.current = null)
                    })
                },
                onBeforePrint() {
                    if (x) {
                        let e = f.queryClient.getQueryData(S.queryKey),
                            t = {
                                ...ay(),
                                ...e?.imageSources
                            };
                        (0, n1.flushSync)(() => f.set(aS.b, t))
                    }
                }
            }), l[5] = S, l[6] = I, l[7] = x, l[8] = T, l[9] = P, l[10] = f, l[11] = s) : s = l[11], (0, m.useImperativeHandle)(g, s), l[12] !== h || l[13] !== c || l[14] !== E || l[15] !== T || l[16] !== p || l[17] !== u ? (o = p ? (0, n1.createPortal)((0, a.jsx)(aT, {
                title: u,
                children: (0, a.jsx)(tY.a, {
                    value: null,
                    children: (0, a.jsx)(aM.a, {
                        value: null,
                        children: T ? c.map(e => {
                            var t;
                            return (0, a.jsx)(h, {
                                entry: {
                                    ...e,
                                    timestampSeparatorAtMs: null,
                                    turn: {
                                        ...t = e.turn,
                                        suppressTurnActions: !0,
                                        items: t.items.map(e => "chatgpt-reasoning-group" !== e.type ? aE(e) : {
                                            ...e,
                                            items: e.items.map(aE),
                                            activeReasoning: null == e.activeReasoning ? void 0 : aE(e.activeReasoning)
                                        })
                                    },
                                    isReadOnly: !0,
                                    onEditUserMessage: void 0,
                                    onFork: void 0,
                                    onRegenerateResponse: void 0,
                                    readAloudEnabled: !1,
                                    feedbackEnabled: !1,
                                    shareEnabled: !1,
                                    showSharedConversationPrivateDisclaimer: !1
                                },
                                renderMcpApps: !1,
                                trackShownImpressions: !1
                            }, e.turnKey)
                        }) : (0, a.jsx)("p", {
                            children: E ? (0, a.jsx)(ey.a, {
                                id: "chatgpt.printAssets.error",
                                defaultMessage: "Some images could not be loaded. Close print and try again."
                            }) : (0, a.jsx)(ey.a, {
                                id: "chatgpt.printAssets.loading",
                                defaultMessage: "Images are still loading. Close print and try again."
                            })
                        })
                    })
                })
            }), document.body) : null, l[12] = h, l[13] = c, l[14] = E, l[15] = T, l[16] = p, l[17] = u, l[18] = o) : o = l[18], o
        }

        function aL(e) {
            let t, n, a, s, o, l, c = (0, r.c)(22),
                {
                    conversationId: u
                } = e,
                h = (0, d.y)(eT.a),
                p = (0, f.a)(),
                g = (0, m.useRef)(null),
                v = (0, d.z)(aa.a),
                b = (0, d.x)(tm.j, u),
                y = (0, d.z)(aA.b);
            c[0] !== v || c[1] !== b ? (t = ["chatgpt-print-history", v, b], c[0] = v, c[1] = b, c[2] = t) : t = c[2], c[3] !== h || c[4] !== b ? (n = e => {
                let {
                    signal: t
                } = e;
                return ad(h, "CHATGPT_CONVERSATION_PRINT_PREPARATION_HISTORY", t, async () => (null != b && await (0, aP.a)(h, b, t), !0))
            }, c[3] = h, c[4] = b, c[5] = n) : n = c[5], c[6] !== t || c[7] !== n ? (a = {
                queryKey: t,
                enabled: !1,
                staleTime: 0,
                retry: !1,
                refetchOnWindowFocus: !1,
                queryFn: n
            }, c[6] = t, c[7] = n, c[8] = a) : a = c[8];
            let {
                refetch: x
            } = (0, i.a)(a);
            c[9] !== v || c[10] !== u || c[11] !== p || c[12] !== y || c[13] !== x || c[14] !== h || c[15] !== b ? (s = (e, t) => {
                if (ac(h, e), e.defaultPrevented || null == b || 0 === y || h.get(aA.c, b)?.complete === !0 || !e.ctrlKey && !e.metaKey || e.altKey || e.shiftKey || "p" !== e.key.toLowerCase() || (e.preventDefault(), e.repeat)) return;
                if (g.current?.signal === t) return void ak.set(e, g.current.preparation);
                let n = x({
                    cancelRefetch: !1
                }).then(async e => {
                    if (!t.aborted && h.get(aa.a) === v) {
                        if (e.isError) return void h.get(U.f).danger(p.formatMessage({
                            id: "chatgpt.printHistory.error",
                            defaultMessage: "Couldn't load the full conversation to print"
                        }), {
                            errorAnalytics: {
                                toastId: "chatgpt.printHistory.error"
                            }
                        });
                        await Promise.all(h.queryClient.getQueryCache().findAll({
                            queryKey: ["chatgpt-print-assets", v, u],
                            predicate: aB
                        }).map(az)), t.aborted || h.get(aa.a) !== v || window.print()
                    }
                }).finally(() => {
                    g.current?.signal === t && (g.current = null)
                });
                g.current = {
                    signal: t,
                    preparation: n
                }, ak.set(e, n)
            }, c[9] = v, c[10] = u, c[11] = p, c[12] = y, c[13] = x, c[14] = h, c[15] = b, c[16] = s) : s = c[16];
            let w = (0, m.useEffectEvent)(s);
            return c[17] !== w ? (o = () => {
                let e = new AbortController,
                    t = t => w(t, e.signal);
                return window.addEventListener("keydown", t, !0), () => {
                    e.abort(), window.removeEventListener("keydown", t, !0)
                }
            }, c[17] = w, c[18] = o) : o = c[18], c[19] !== v || c[20] !== b ? (l = [v, b], c[19] = v, c[20] = b, c[21] = l) : l = c[21], (0, m.useEffect)(o, l), null
        }

        function az(e) {
            return e.fetch(void 0, {
                cancelRefetch: !1
            }).catch(aF)
        }

        function aF() {}

        function aB(e) {
            return e.getObserversCount() > 0
        }
        var aD = n("gbRX");

        function aG(e) {
            let t, n, s = (0, r.c)(4),
                {
                    isFetching: o,
                    isSharedConversation: i,
                    onRetry: l
                } = e,
                c = (0, d.z)(!i && aD.a) || o;
            return s[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(ey.a, {
                id: "chatgptConversations.preview.retry",
                defaultMessage: "Try again"
            }), s[0] = t) : t = s[0], s[1] !== l || s[2] !== c ? (n = (0, a.jsx)(tc.a, {
                color: "ghost",
                disabled: c,
                onClick: l,
                children: t
            }), s[1] = l, s[2] = c, s[3] = n) : n = s[3], n
        }

        function aH(e) {
            let t, n, s, o = (0, r.c)(7),
                {
                    isFetching: i,
                    isSharedConversation: l,
                    onRetry: c
                } = e;
            return o[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(ey.a, {
                id: "chatgptConversations.loadError",
                defaultMessage: "Could not load this ChatGPT conversation"
            }), o[0] = t) : t = o[0], o[1] !== i || o[2] !== l || o[3] !== c ? (n = null != c ? (0, a.jsx)(aG, {
                isFetching: i,
                isSharedConversation: l,
                onRetry: c
            }) : null, o[1] = i, o[2] = l, o[3] = c, o[4] = n) : n = o[4], o[5] !== n ? (s = (0, a.jsxs)("div", {
                className: "rounded-xl border border-default bg-surface-secondary/92 p-4 text-sm text-default",
                children: [t, n]
            }), o[5] = n, o[6] = s) : s = o[6], s
        }
        var aq = n("FfNP"),
            aW = n("WVag");
        let aK = (0, tu.a)(aq.loadEpicChartIndicator);

        function aU(e) {
            let t, n = (0, r.c)(3),
                {
                    conversationId: s
                } = e,
                o = (0, d.x)(aW.a, s),
                [i, l] = (0, m.useState)(!1);
            return i || null == o || l(!0), n[0] !== s || n[1] !== i ? (t = i ? (0, a.jsx)(aK, {
                conversationId: s
            }) : null, n[0] = s, n[1] = i, n[2] = t) : t = n[2], t
        }
        var aV = n("DWXw"),
            aQ = n("RGWz"),
            a$ = n("QxH2"),
            aY = n("UuVq"),
            aJ = n("TwSq"),
            aX = n("l0fK"),
            aZ = n("bjAA"),
            a0 = n("hkBU"),
            a1 = n("RzIS"),
            a2 = n("T1PX"),
            a3 = n("guID"),
            a4 = n("Mbqw"),
            a5 = n("yzQ9"),
            a6 = n("Gjet"),
            a7 = n("gJe8"),
            a8 = n("ASxG"),
            a9 = n("lsfk"),
            re = n("IObw"),
            rt = n("kQNh"),
            rn = n.n(rt),
            ra = n("NkEl"),
            rr = n("FW69"),
            rs = "highlight-x7OnzP",
            ro = "safari-wcvuzB",
            ri = "block-t7sxyD";
        let rl = "chatgpt-search-result",
            rc = "script, style, textarea, input, select, [hidden], [aria-hidden='true'], [data-thread-find-skip]";

        function* rd(e, t) {
            let n = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_TEXT, {
                    acceptNode: e => e.parentElement?.closest(rc) == null ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
                }),
                a = [],
                r = "";
            for (let e = n.nextNode(); null != e; e = n.nextNode()) {
                let t = r.length;
                r += e.textContent ?? "", a.push({
                    node: e,
                    start: t,
                    end: r.length
                })
            }
            let s = RegExp(t.split(/\n+/u).map(rn()).join("\\n*"), "g");
            for (let n = s.exec(r); null != n && n.index < r.length; n = s.exec(r)) {
                let r = n.index;
                s.lastIndex = r + 1;
                let o = r + n[0].length,
                    i = a.find(e => e.end > r),
                    l = a.findLast(e => e.start < o);
                if (null == i || null == l) continue;
                let c = e.ownerDocument.createRange();
                c.setStart(i.node, r - i.start), c.setEnd(l.node, o - l.start), ru(c) && ((0, rr.a)(c) ?? c.toString()).trim() === t && (yield c)
            }
        }

        function ru(e) {
            return Array.from(e.getClientRects()).some(e => e.width > 0 && e.height > 0) && null != e.startContainer.parentElement && "hidden" !== getComputedStyle(e.startContainer.parentElement).visibility
        }
        let rh = a8.object({
            chatGptSearchNavigation: a8.object({
                key: a8.string(),
                messageId: a8.string()
            })
        });

        function rp(e) {
            let t, n, a, s, o, i, l, c, u, h, p, g, f = (0, r.c)(50),
                {
                    conversationId: b,
                    entries: y,
                    isConversationFetching: x,
                    turnListApi: w
                } = e,
                C = (0, d.y)(eT.a),
                _ = (0, d.x)(tm.s, b),
                S = (0, a9.b)(),
                j = (0, n2.c)();
            f[0] !== S || f[1] !== j ? (t = e => {
                ! function(e, t, n) {
                    let a = t.getScrollElement();
                    if (null == a) return;
                    let r = e instanceof Range ? e.startContainer : e,
                        s = r instanceof HTMLElement ? r : r.parentElement;
                    for (let t = e instanceof Range ? s : s?.parentElement; null != t && t !== a; t = t.parentElement) {
                        if (t.scrollWidth <= t.clientWidth || !/^(auto|scroll)$/.test(getComputedStyle(t).overflowX)) continue;
                        let a = e instanceof Range ? e.getClientRects()[0] : e.getBoundingClientRect();
                        if (null == a) continue;
                        let r = t.getBoundingClientRect();
                        (a.left < r.left || a.right > r.right) && t.scrollBy({
                            left: (0, n2.b)(a.left + a.width / 2 - r.left - r.width / 2, n),
                            behavior: "instant"
                        })
                    }
                    let o = e instanceof Range ? e.getClientRects()[0] : e.getBoundingClientRect();
                    if (null == o) return;
                    let i = a.getBoundingClientRect(),
                        l = getComputedStyle(a),
                        c = Number.parseFloat(l.scrollPaddingTop) || 0,
                        d = Number.parseFloat(l.scrollPaddingBottom) || 0,
                        u = a.clientHeight - c - d,
                        h = (0, n2.b)(o.height, n),
                        p = (0, n2.b)(o.top - i.top, n) - c + Math.min(h, u) / 2 - u / 2;
                    t.scrollToDistanceFromBottomPx(t.getLastScrollDistanceFromBottomPx() - p, "instant", "user")
                }(e, S, j)
            }, f[0] = S, f[1] = j, f[2] = t) : t = f[2];
            let I = (0, m.useEffectEvent)(t),
                T = (0, v.X)(),
                E = (0, v._)(),
                P = new URLSearchParams(T.search),
                A = P.get("messageId") ?? P.get("message"),
                M = rh.safeParse(T.state).data?.chatGptSearchNavigation,
                k = A ?? M?.messageId,
                R = P.get("selectedTextQuery") ?? "",
                N = (0, d.x)(tm.N, b),
                O = !R || null != k && null != N && (N[k]?.message != null || Object.values(N).some(e => e.message?.id === k)),
                L = R || P.get("historySearchQuery") || "",
                z = JSON.stringify([b, null != A ? T.key : M?.key ?? T.key, k]);
            f[3] !== z ? (n = {
                key: z,
                handled: !1,
                positioned: !1
            }, f[3] = z, f[4] = n) : n = f[4];
            let F = (0, m.useRef)(n),
                B = (0, m.useEffectEvent)(e => {
                    F.current.positioned = !0;
                    let t = L.trim().length > 0 ? function(e, t, n) {
                        let a, r, s, o, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "terms",
                            l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                            c = "phrase" === i ? t.trim() : null,
                            d = [...new Set(t.trim().toLowerCase().normalize("NFC").split(/\s+/).map(e => e.replace(/^[^\p{Letter}\p{Number}]+|[^\p{Letter}\p{Number}]+$/gu, "")).filter(e => e.length > 0))],
                            u = new TextEncoder,
                            h = d.filter(e => !/^\p{Letter}+$/u.test(e) || u.encode(e.normalize("NFKD").replace(/\p{Mark}/gu, "")).byteLength >= 3),
                            p = h.length > 0 ? h : d;
                        if (c?.length === 0 || null == c && 0 === p.length) return () => {};
                        let g = new RegExp(null == c ? p.toSorted((e, t) => t.length - e.length).map(rn()).join("|") : rn()(c), null == c ? "giu" : "gu"),
                            m = !1,
                            f = performance.now(),
                            v = !1,
                            b = new WeakSet,
                            y = new Set,
                            x = new MutationObserver(C);

                        function w() {
                            for (let t of (m = !0, x.disconnect(), clearTimeout(r), null != s && cancelAnimationFrame(s), null != a && CSS.highlights.get(rl) === a && CSS.highlights.delete(rl), e.classList.remove(rs, ro), y)) t.classList.remove(rs, ri)
                        }

                        function C() {
                            m || null != r || null != s || (r = setTimeout(() => {
                                r = void 0, s = requestAnimationFrame(() => {
                                    s = void 0, _()
                                })
                            }, 50))
                        }

                        function _() {
                            let t;
                            if (m || !e.isConnected || null != s) return;
                            let d = performance.now() - f;
                            if (d < 4e3 && null != e.querySelector("[data-search-result-pending]")) return void C();
                            let u = (0, ra.a)(e);
                            for (let t of e.querySelectorAll("a[href]")) u.some(e => {
                                let {
                                    element: n,
                                    target: a
                                } = e;
                                return "text" !== a.highlight && n.contains(t)
                            }) || u.push({
                                element: t,
                                target: {
                                    highlight: "auto",
                                    text: [t.getAttribute("href"), t.title].join(" ")
                                }
                            });
                            let h = u.filter(e => {
                                    let {
                                        element: t,
                                        target: n
                                    } = e;
                                    return null != (n.text ?? t.textContent ?? "").normalize("NFC").match(g)
                                }),
                                p = !1;
                            for (let {
                                    element: e,
                                    target: t
                                }
                                of u) null != t.reveal && !b.has(e) && h.some(t => e.contains(t.element)) && (b.add(e), t.reveal(), p = !0);
                            if (p) {
                                s = requestAnimationFrame(() => {
                                    s = requestAnimationFrame(() => {
                                        s = void 0, _()
                                    })
                                });
                                return
                            }
                            let S = [];
                            if (null != c) {
                                let t = e.querySelector('[data-markdown-text-style="assistant-message"]') ?? e,
                                    n = 0;
                                for (let e of rd(t, c))
                                    if (!(n++ < l)) {
                                        S.push(e);
                                        break
                                    }
                            } else {
                                let t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_TEXT, {
                                    acceptNode: e => e.parentElement?.closest(rc) != null || u.some(t => {
                                        let {
                                            element: n,
                                            target: a
                                        } = t;
                                        return "block" === a.highlight && n.contains(e)
                                    }) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
                                });
                                for (let n = t.nextNode(); null != n; n = t.nextNode())
                                    for (let t of (n.textContent ?? "").matchAll(g)) {
                                        let a = e.ownerDocument.createRange();
                                        a.setStart(n, t.index), a.setEnd(n, t.index + t[0].length), ru(a) && S.push(a)
                                    }
                            }
                            let j = h.flatMap(e => {
                                let {
                                    element: t,
                                    target: n
                                } = e;
                                if ("terms" !== i || "text" === n.highlight || "auto" === n.highlight && S.some(e => t.contains(e.startContainer))) return [];
                                let a = t.getBoundingClientRect();
                                return a.width > 0 && a.height > 0 ? [t] : []
                            });
                            if (0 === S.length && 0 === j.length) {
                                if (d < 800) return void C();
                                j.push(e)
                            }
                            let I = 0,
                                T = 0;
                            for (let e of [...S, ...j]) {
                                let n = e instanceof Range ? e.getClientRects()[0] : e.getBoundingClientRect(),
                                    a = n?.top ?? 0,
                                    r = n?.left ?? 0;
                                (null == t || 0 > (a - I || r - T)) && (t = e, I = a, T = r)
                            }
                            t = t ?? e, v && n?.(t);
                            let E = t instanceof Range ? t.getClientRects()[0] : t.getBoundingClientRect(),
                                P = [E?.top, E?.left, E?.width, E?.height, e.scrollHeight].join(":");
                            if (d < 4e3 && P !== o) {
                                o = P, C();
                                return
                            }
                            if (!v) {
                                v = !0, o = void 0, n?.(t), C();
                                return
                            }
                            for (let t of (x.disconnect(), clearTimeout(r), "u" > typeof Highlight && null != CSS.highlights ? (a = new Highlight(...S), CSS.highlights.set(rl, a)) : S.length > 0 && j.push(e), e.classList.add(rs), (0, tl.e)() && e.classList.add(ro), j)) t.classList.add(rs, ri), y.add(t);
                            r = setTimeout(w, 3600)
                        }
                        return x.observe(e, {
                            childList: !0,
                            characterData: !0,
                            attributes: !0,
                            subtree: !0
                        }), _(), w
                    }(e, L, I, R ? "phrase" : "terms", Number(P.get("selectedTextOccurrence"))) : void 0;
                    return null != A && (P.delete("messageId"), P.delete("message"), P.delete("historySearchQuery"), P.delete("selectedTextQuery"), P.delete("selectedTextOccurrence"), E({
                        pathname: T.pathname,
                        search: P.toString(),
                        hash: T.hash
                    }, {
                        replace: !0,
                        preventScrollReset: !0,
                        state: {
                            ...T.state,
                            chatGptSearchNavigation: {
                                key: T.key,
                                messageId: A
                            }
                        }
                    })), t
                });
            f[5] !== b || f[6] !== x || f[7] !== k || f[8] !== z || f[9] !== C || f[10] !== O ? (a = () => {
                if (F.current.key !== z && (F.current = {
                        key: z,
                        handled: !1,
                        positioned: !1
                    }), null != k && !x && O) return C.watch(e => {
                    !F.current.handled && (0, tm.Qb)(e, b, k) && (F.current.handled = !0)
                })
            }, s = [b, x, k, z, C, O], f[5] = b, f[6] = x, f[7] = k, f[8] = z, f[9] = C, f[10] = O, f[11] = a, f[12] = s) : (a = f[11], s = f[12]), (0, m.useLayoutEffect)(a, s), f[13] !== y || f[14] !== k ? (o = null == k ? void 0 : y.find(e => {
                let {
                    turn: t
                } = e;
                return t.messageIds.includes(k)
            }), f[13] = y, f[14] = k, f[15] = o) : o = f[15];
            let D = o;
            f[16] !== T || f[17] !== E || f[18] !== A || f[19] !== M ? (i = () => {
                null == A && null != M && E(T, {
                    replace: !0,
                    preventScrollReset: !0,
                    state: {
                        ...T.state,
                        chatGptSearchNavigation: void 0
                    }
                })
            }, f[16] = T, f[17] = E, f[18] = A, f[19] = M, f[20] = i) : i = f[20];
            let G = (0, m.useEffectEvent)(i);
            if (f[21] !== G || f[22] !== _ || f[23] !== x || f[24] !== D ? (l = () => {
                    !F.current.positioned || null != D || x || _ || G()
                }, f[21] = G, f[22] = _, f[23] = x, f[24] = D, f[25] = l) : l = f[25], f[26] !== _ || f[27] !== x || f[28] !== D ? (c = [_, x, D], f[26] = _, f[27] = x, f[28] = D, f[29] = c) : c = f[29], (0, m.useLayoutEffect)(l, c), f[30] !== k || f[31] !== D?.id || f[32] !== D?.turn || f[33] !== D?.turn.items || f[34] !== D?.turn.items.findIndex || f[35] !== D?.turnKey) {
                let e = D?.turn.items.findIndex(e => "messageId" in e && e.messageId === k || "assistant-message" === e.type && null != k && e.sourceMessageIds?.includes(k)) ?? -1,
                    t = D?.turn.items[e],
                    n = D?.id;
                h = D?.turnKey, u = null == t || null == n ? void 0 : (0, re.b)(t, e, n), f[30] = k, f[31] = D?.id, f[32] = D?.turn, f[33] = D?.turn.items, f[34] = D?.turn.items.findIndex, f[35] = D?.turnKey, f[36] = u, f[37] = h
            } else u = f[36], h = f[37];
            let H = u;
            return f[38] !== B || f[39] !== k || f[40] !== h || f[41] !== w || f[42] !== H ? (p = () => {
                let e;
                if (null == h || null == w) return;
                let t = new AbortController,
                    n = null;
                return w.scrollToKey(h, e => n = (null == k ? null : e.querySelector(`[data-chatgpt-search-message-ids~="${CSS.escape(k)}"]`)) ?? (null == H ? null : e.querySelector(`[data-chatgpt-search-unit-key="${CSS.escape(H)}"]`)) ?? e, {
                    align: "top",
                    signal: t.signal
                }).then(() => {
                    !t.signal.aborted && n?.isConnected && (e = B(n))
                }), () => {
                    t.abort(), e?.()
                }
            }, f[38] = B, f[39] = k, f[40] = h, f[41] = w, f[42] = H, f[43] = p) : p = f[43], f[44] !== k || f[45] !== z || f[46] !== h || f[47] !== w || f[48] !== H ? (g = [z, k, h, w, H], f[44] = k, f[45] = z, f[46] = h, f[47] = w, f[48] = H, f[49] = g) : g = f[49], (0, m.useLayoutEffect)(p, g), null
        }
        var rg = n("ESlL"),
            rm = n("Ppno"),
            rf = n("lA5q"),
            rv = n("wDWo"),
            rb = n("IgxH"),
            ry = n("iaTG"),
            rx = n("c3f5"),
            rw = n("XpUB"),
            rC = n("xAIC"),
            r_ = n("RKko"),
            rS = n("S1aY"),
            rj = n("Sd8U"),
            rI = n("XsXa");
        let rT = (0, d.t)("ChatGptTranscriptScope", {
                parent: rj.a,
                key: e => e.presentation
            }),
            rE = (0, d.j)(rT, e => (0, rI.a)());
        var rP = n("nMiI"),
            rA = n("jmBh"),
            rM = n("gFxX"),
            rk = n("Ymkf"),
            rR = n("RADZ"),
            rN = n("rZzh"),
            rO = n("Y5Sy"),
            rL = n("Fwmi"),
            rz = n("ufr5"),
            rF = n("fwnP"),
            rB = n("p0Ph"),
            rD = n("yloD");
        let rG = (0, d.d)(eT.a, (e, t) => {
            let {
                get: n
            } = t, a = n(k.d, e)?.stoppedResponse;
            if (null == a || "idle" !== n(rF.N, e) || n(rF.o, e) !== a.leafId) return null;
            let r = a.originalSend;
            return {
                promptMessageId: a.promptMessageId,
                canResume: !n(rO.a) && null != a.settings && (null != r && (!r.checkDelivery || null != n(rF.b, e) && rH(n, e, a.promptMessageId)) || rq(n, e, a))
            }
        }, {
            isEqual: (e, t) => e?.promptMessageId === t?.promptMessageId && e?.canResume === t?.canResume
        });

        function rH(e, t, n) {
            let a = (0, tg.d)(e, t);
            return e(rB.x, a)[n]?.isOptimistic === !0
        }

        function rq(e, t, n) {
            let a = e(rN.c, (0, tG.d)(t));
            return null != e(rF.b, t) && !a.hasCanvas && !a.hasPendingApproval && a.activeMessageIds?.has(n.promptMessageId) === !0
        }
        var rW = n("adck");

        function rK(e) {
            let t, n, s, o, i, l, c, u, h, p, g, m, f = (0, r.c)(74),
                {
                    activityDisclosures: v,
                    entry: b,
                    renderMcpApps: y,
                    threadTranscript: x,
                    trackShownImpressions: w
                } = e,
                C = void 0 === y || y,
                _ = void 0 === w || w,
                S = (0, d.y)(eT.a),
                j = (0, rA.a)(void 0 !== x && x);
            f[0] !== b.conversationId ? (t = (0, em.o)({
                routeKind: "chatgpt-thread",
                conversationId: b.conversationId
            }), f[0] = b.conversationId, f[1] = t) : t = f[1];
            let I = (0, d.x)(_ ? ee.c : null, t),
                T = _ && null == I,
                E = (0, d.x)(b.isMostRecentTurn ? rN.f : null, b.conversationId),
                P = (0, d.x)(!b.isMostRecentTurn || b.isWorkConversation || b.isReadOnly ? null : rG, b.conversationId);
            f[2] !== b.turn || f[3] !== P ? (n = null != P && b.turn.messageIds.includes(P.promptMessageId), f[2] = b.turn, f[3] = P, f[4] = n) : n = f[4];
            let A = n;
            f[5] !== b.timestampSeparatorAtMs ? (s = null == b.timestampSeparatorAtMs ? null : (0, a.jsx)(rP.b, {
                sentAtMs: b.timestampSeparatorAtMs
            }), f[5] = b.timestampSeparatorAtMs, f[6] = s) : s = f[6];
            let M = b.isReadOnly ? void 0 : b.turnKey,
                k = null != b.paragen;
            f[7] !== v || f[8] !== j || f[9] !== b.branchingMessageId || f[10] !== b.browserConversationId || f[11] !== b.conversationId || f[12] !== b.dilEditDisclosure || f[13] !== b.enableCloudBrowserActivity || f[14] !== b.errorMessage || f[15] !== b.feedbackEnabled || f[16] !== b.hasLaterSitesPreview || f[17] !== b.id || f[18] !== b.isMostRecentTurn || f[19] !== b.isReadOnly || f[20] !== b.isTemporaryChat || f[21] !== b.isWorkConversation || f[22] !== b.onEditUserMessage || f[23] !== b.onFork || f[24] !== b.onRegenerateResponse || f[25] !== b.pendingSubmissionAttachments || f[26] !== b.readAloudEnabled || f[27] !== b.referenceImageSuggestionActionInput || f[28] !== b.safetyReview || f[29] !== b.shareEnabled || f[30] !== b.showPendingLoadingMessage || f[31] !== b.showRequestUserInputStatus || f[32] !== b.turn || f[33] !== C || f[34] !== T || f[35] !== M || f[36] !== k ? (o = (0, a.jsx)(rk.a, {
                activityDisclosureTurnKey: M,
                activityDisclosures: v,
                dilEditDisclosure: b.dilEditDisclosure,
                browserConversationId: b.browserConversationId,
                conversationId: b.conversationId,
                enableCloudBrowserActivity: b.enableCloudBrowserActivity,
                branchingMessageId: b.branchingMessageId,
                hasLaterSitesPreview: b.hasLaterSitesPreview,
                hostId: ef.a,
                isMostRecentTurn: b.isMostRecentTurn,
                threadTranscript: j,
                pendingLoading: b.showPendingLoadingMessage,
                allowAwaitingResponse: b.showRequestUserInputStatus,
                responseError: b.errorMessage,
                isReadOnly: b.isReadOnly,
                isTemporaryChat: b.isTemporaryChat,
                isParagen: k,
                isWorkConversation: b.isWorkConversation,
                readAloudEnabled: b.readAloudEnabled,
                renderMcpApps: C,
                feedbackEnabled: b.feedbackEnabled,
                onEditUserMessage: b.onEditUserMessage,
                onFork: b.onFork,
                onRegenerateResponse: b.onRegenerateResponse,
                pendingSubmissionAttachments: b.pendingSubmissionAttachments,
                referenceImageSuggestionActionInput: b.referenceImageSuggestionActionInput,
                shareEnabled: b.shareEnabled,
                safetyReview: b.safetyReview,
                trackShownImpressions: T,
                turn: b.turn,
                turnId: b.id
            }), f[7] = v, f[8] = j, f[9] = b.branchingMessageId, f[10] = b.browserConversationId, f[11] = b.conversationId, f[12] = b.dilEditDisclosure, f[13] = b.enableCloudBrowserActivity, f[14] = b.errorMessage, f[15] = b.feedbackEnabled, f[16] = b.hasLaterSitesPreview, f[17] = b.id, f[18] = b.isMostRecentTurn, f[19] = b.isReadOnly, f[20] = b.isTemporaryChat, f[21] = b.isWorkConversation, f[22] = b.onEditUserMessage, f[23] = b.onFork, f[24] = b.onRegenerateResponse, f[25] = b.pendingSubmissionAttachments, f[26] = b.readAloudEnabled, f[27] = b.referenceImageSuggestionActionInput, f[28] = b.safetyReview, f[29] = b.shareEnabled, f[30] = b.showPendingLoadingMessage, f[31] = b.showRequestUserInputStatus, f[32] = b.turn, f[33] = C, f[34] = T, f[35] = M, f[36] = k, f[37] = o) : o = f[37], f[38] !== b.conversationId || f[39] !== b.feedbackEnabled || f[40] !== b.showLiveBioSafetyNotice ? (i = b.showLiveBioSafetyNotice && (0, a.jsx)(nY.a, {
                conversationId: b.conversationId,
                feedbackEnabled: b.feedbackEnabled,
                fallback: null
            }), f[38] = b.conversationId, f[39] = b.feedbackEnabled, f[40] = b.showLiveBioSafetyNotice, f[41] = i) : i = f[41], f[42] !== b.conversationId || f[43] !== b.isTemporaryChat || f[44] !== b.isWorkConversation || f[45] !== b.paragen || f[46] !== C || f[47] !== T ? (l = null == b.paragen ? null : (0, a.jsx)(rR.a, {
                renderMcpApps: C,
                comparison: b.paragen,
                conversationId: b.conversationId,
                hostId: ef.a,
                isTemporaryChat: b.isTemporaryChat,
                isWorkConversation: b.isWorkConversation,
                trackTaskViews: T
            }, b.paragen.promptMessageId), f[42] = b.conversationId, f[43] = b.isTemporaryChat, f[44] = b.isWorkConversation, f[45] = b.paragen, f[46] = C, f[47] = T, f[48] = l) : l = f[48], f[49] !== b.showSharedConversationPrivateDisclaimer ? (c = b.showSharedConversationPrivateDisclaimer ? (0, a.jsxs)("div", {
                className: "my-2 flex items-center justify-center gap-2 text-size-chat text-secondary select-none",
                children: [(0, a.jsx)(K.a, {
                    className: "shrink-0",
                    legacyIcon: rM.a,
                    asset16: rW.a,
                    legacyClassName: "icon-2xs",
                    "aria-hidden": !0
                }), (0, a.jsx)(ey.a, {
                    id: "chatgptConversations.sharedConversation.privateMessagesDisclaimer",
                    defaultMessage: "Messages beyond this point are only visible to you"
                })]
            }) : null, f[49] = b.showSharedConversationPrivateDisclaimer, f[50] = c) : c = f[50], f[51] !== j || f[52] !== b || f[53] !== A || f[54] !== E || f[55] !== S || f[56] !== T || f[57] !== P ? (u = b.isMostRecentTurn ? (0, a.jsx)(rg.a, {
                conversationId: b.conversationId,
                errorMessage: b.errorMessage,
                isWorkConversation: b.isWorkConversation,
                isStopped: A,
                isResumeDisabled: null == b.onRegenerateResponse,
                onResume: A && P.canResume ? () => {
                    b.onRegenerateResponse?.(P.promptMessageId, "resume")
                } : void 0,
                onRetry: null == b.onRegenerateResponse || null == E ? void 0 : async e => {
                    let t = S.get(rN.f, b.conversationId);
                    if (t?.message.id == null || t.isRetryDisabled) return;
                    let n = S.get(tm.V, b.conversationId)?.metadata?.errorCode;
                    (0, tN.d)(S.get(ec.c).logProductEvent, {
                        conversationId: S.get(tm.j, b.conversationId),
                        messageId: t.message.id,
                        useDefaultModel: t.useDefaultModel,
                        errorCode: n
                    }), await b.onRegenerateResponse?.(t.message.id, {
                        sourceEventTimeStamp: e,
                        source: "model_cap_exceeded" === n ? "rate_limit_retry" : "error_retry",
                        model: (0, rN.g)(t.message, S.get(e8.v, b.conversationId)),
                        useDefaultModel: t.useDefaultModel,
                        forceUseSearch: t.forceUseSearch
                    })
                },
                renderResponseStarting: !j,
                showPendingLoadingMessage: b.showPendingLoadingMessage,
                showRequestUserInputStatus: b.showRequestUserInputStatus,
                trackShownImpressions: T,
                useDefaultModel: E?.useDefaultModel,
                isRetryDisabled: E?.isRetryDisabled
            }) : null, f[51] = j, f[52] = b, f[53] = A, f[54] = E, f[55] = S, f[56] = T, f[57] = P, f[58] = u) : u = f[58], f[59] !== i || f[60] !== l || f[61] !== c || f[62] !== u || f[63] !== o ? (h = (0, a.jsxs)("div", {
                className: "flex flex-col gap-1.5",
                children: [o, i, l, c, u]
            }), f[59] = i, f[60] = l, f[61] = c, f[62] = u, f[63] = o, f[64] = h) : h = f[64], f[65] !== b.id || f[66] !== h || f[67] !== s ? (p = (0, a.jsxs)("div", {
                "data-content-search-turn-key": b.id,
                children: [s, h]
            }), f[65] = b.id, f[66] = h, f[67] = s, f[68] = p) : p = f[68];
            let R = p;
            return f[69] !== b.dilVisualSlotId ? (g = null != b.dilVisualSlotId && (0, a.jsx)("div", {
                "data-dil-anchor-spacer": "",
                "aria-hidden": "true"
            }), f[69] = b.dilVisualSlotId, f[70] = g) : g = f[70], f[71] !== R || f[72] !== g ? (m = (0, a.jsxs)(a.Fragment, {
                children: [g, R]
            }), f[71] = R, f[72] = g, f[73] = m) : m = f[73], m
        }

        function rU(e) {
            let t, n, s, o, i = (0, r.c)(11);
            i[0] !== e ? ({
                renderMcpApps: n,
                ...t
            } = e, i[0] = e, i[1] = t, i[2] = n) : (t = i[1], n = i[2]);
            let l = void 0 === n || n,
                c = (0, d.y)(rT),
                u = "main" === c.value.presentation;
            i[3] !== t || i[4] !== c ? (s = c.value.preserveActivityDisclosures && !t.entry.isReadOnly ? c.get(rE, null) : void 0, i[3] = t, i[4] = c, i[5] = s) : s = i[5];
            let h = l && c.value.rendersWidgets;
            return i[6] !== t || i[7] !== u || i[8] !== s || i[9] !== h ? (o = (0, a.jsx)(rK, {
                ...t,
                threadTranscript: u,
                activityDisclosures: s,
                renderMcpApps: h
            }), i[6] = t, i[7] = u, i[8] = s, i[9] = h, i[10] = o) : o = i[10], o
        }

        function rV(e) {
            let t, n, s, o, i, l, c, u = (0, r.c)(17),
                {
                    entries: h,
                    historyLoader: p,
                    isVisible: g,
                    rendersWidgets: f,
                    onVisibilityChange: v
                } = e;
            u[0] !== g || u[1] !== v ? (t = () => (v(g), () => v(!1)), n = [g, v], u[0] = g, u[1] = v, u[2] = t, u[3] = n) : (t = u[2], n = u[3]), (0, m.useLayoutEffect)(t, n), u[4] !== f ? (s = {
                presentation: "floating",
                rendersWidgets: f
            }, u[4] = f, u[5] = s) : s = u[5];
            let b = g ? p : null;
            return u[6] !== h ? (o = (0, a.jsx)(rS.a, {
                mode: "virtualized",
                rows: h,
                ...r_.g,
                preserveMeasuredTurnViewport: !0,
                renderRow: rQ
            }), u[6] = h, u[7] = o) : o = u[7], u[8] !== b || u[9] !== o ? (i = (0, a.jsx)(tY.a, {
                value: null,
                children: (0, a.jsxs)(aM.a, {
                    value: null,
                    children: [b, o]
                })
            }), u[8] = b, u[9] = o, u[10] = i) : i = u[10], u[11] !== g || u[12] !== i ? (l = (0, a.jsx)(a6.a, {
                active: g,
                presentation: "panel",
                children: i
            }), u[11] = g, u[12] = i, u[13] = l) : l = u[13], u[14] !== s || u[15] !== l ? (c = (0, a.jsx)(d.b, {
                scope: rT,
                value: s,
                children: l
            }), u[14] = s, u[15] = l, u[16] = c) : c = u[16], c
        }

        function rQ(e) {
            let t, n = (0, r.c)(2),
                {
                    entry: s
                } = e;
            return n[0] !== s ? (t = (0, a.jsx)(rU, {
                entry: {
                    ...s,
                    onEditUserMessage: void 0,
                    onFork: void 0,
                    readAloudEnabled: !1
                },
                trackShownImpressions: !1
            }), n[0] = s, n[1] = t) : t = n[1], t
        }
        var r$ = n("qZWE"),
            rY = n("IBS2"),
            rJ = n("V8uZ"),
            rX = n("PC5z"),
            rZ = n("lZ4W"),
            r0 = n("ihvi"),
            r1 = n("l8ju"),
            r2 = n("jCHb"),
            r3 = n("nMdB"),
            r4 = n("KFm7"),
            r5 = n("uYx2"),
            r6 = "pending-fxATqK";
        let r7 = "[data-d-component]:not([data-d-text-flow])";
        class r8 extends m.Component {
            static contextType = n2.a;
            held = null;
            presented = this.props;
            userMotion;
            revealMotion;
            revealed = !1;
            manuallyScrolled = !1;
            resumePlacement;
            stopLayoutCorrection;
            pendingVisual;
            textObserver;
            unsubscribe;
            clearPendingPulse() {
                this.pendingVisual?.classList.remove(r6), this.pendingVisual = void 0
            }
            releaseHold = () => {
                this.clearPendingPulse(), this.revealMotion?.stop(), this.revealMotion = void 0, this.held = null, this.textObserver?.disconnect(), this.textObserver = void 0, this.userMotion?.cancel(), this.userMotion = void 0, this.resumePlacement = void 0, this.stopLayoutCorrection?.(), this.stopLayoutCorrection = void 0
            };
            componentDidMount() {
                this.unsubscribe = this.props.scrollController.addUserScrollListener(() => {
                    this.manuallyScrolled = !0;
                    let e = null != this.userMotion;
                    this.releaseHold(), e && (this.presented = this.props, this.forceUpdate())
                })
            }
            componentWillUnmount() {
                this.releaseHold(), this.unsubscribe?.()
            }
            holdForResponse = e => (this.manuallyScrolled = !1, !this.held && this.props.active && (this.held = this.capture()), !!this.held && (this.resumePlacement = e, this.props.scrollController.holdViewport(), !0));
            releaseForHistoryToggle = () => {
                this.releaseHold()
            };
            capture() {
                let {
                    visualId: e,
                    scrollController: t
                } = this.props;
                if (!e) return null;
                let n = t.getScrollElement(),
                    a = n?.querySelector(`[data-dil-visual-slot="${CSS.escape(e)}"]`);
                if (!n || !a) return null;
                let r = a.querySelector(r7) ?? a,
                    s = r.getBoundingClientRect(),
                    o = n.getBoundingClientRect();
                return s.bottom <= o.top || s.top >= o.bottom ? null : {
                    top: s.top,
                    body: r,
                    element: a,
                    scrollElement: n
                }
            }
            requestingBubble(e) {
                let t = this.props.exchangeKey;
                return null == t ? null : e.scrollElement.querySelector(`[data-turn-key="${CSS.escape(t)}"] [data-user-message-bubble]`)
            }
            revealRequest(e) {
                if (this.props.active || !this.props.replyPending || this.revealed) return;
                let t = this.requestingBubble(e);
                if (!t) return;
                let n = t.getBoundingClientRect();
                if (0 === n.height) return;
                this.revealed = !0;
                let a = e.scrollElement.getBoundingClientRect(),
                    r = a.bottom - (0, r4.c)(e.scrollElement) * this.context,
                    s = Math.min(n.bottom - r, n.top - a.top);
                if (s < 1) return;
                let o = e.top - s;
                if (this.props.reducedMotion) {
                    e.top = o, this.restore(e);
                    return
                }
                this.stopLayoutCorrection?.(), this.stopLayoutCorrection = void 0, this.revealMotion = (0, r2.a)(e.top, o, {
                    duration: .2,
                    ease: "easeOut",
                    onUpdate: t => {
                        e.top = t, this.restore(e, !1)
                    }
                })
            }
            getSnapshotBeforeUpdate(e) {
                let t = e.visualId !== this.props.visualId,
                    n = !this.props.active && (this.props.hasStreamingFinalText || e.replyPending && !this.props.replyPending);
                if (t || n) {
                    let e = this.resumePlacement;
                    return this.releaseHold(), n || this.props.active && null != this.props.visualId ? e ?? null : null
                }
                return e.active && e.exchangeKey !== this.props.exchangeKey && (this.manuallyScrolled = !1, this.revealed = !1, this.stopLayoutCorrection?.(), this.userMotion?.cancel(), this.held = this.held ?? this.capture(), this.held || (this.resumePlacement = void 0)), this.held
            }
            observeStreamingDilText() {
                let {
                    streamingDilFinalId: e,
                    exchangeKey: t
                } = this.props, n = this.held?.scrollElement;
                if (this.textObserver || !n || !e || !t) return;
                let a = n.querySelector(`[data-turn-key="${CSS.escape(t)}"]`);
                if (!a) return;
                let r = `[data-dil-source-message-id="${CSS.escape(e)}"] [data-d-component]`,
                    s = () => {
                        let e = a.querySelector(r);
                        if (e?.dataset.dComponent !== "text" || !e.textContent?.trim() || !e.getClientRects().length) return;
                        let n = this.resumePlacement;
                        this.releaseHold(), n?.(t)
                    };
                this.textObserver = new MutationObserver(s), this.textObserver.observe(a, {
                    subtree: !0,
                    childList: !0,
                    characterData: !0
                }), s()
            }
            componentDidUpdate(e, t, n) {
                if ((e.streamingDilFinalId !== this.props.streamingDilFinalId || e.exchangeKey !== this.props.exchangeKey) && (this.textObserver?.disconnect(), this.textObserver = void 0), "function" == typeof n ? null != this.props.exchangeKey && n(this.props.exchangeKey) : (this.restore(n), n && this.revealRequest(n)), !this.pendingVisual && !this.manuallyScrolled && !this.props.active && this.props.replyPending && !this.props.hasStreamingFinalText && (!0 === this.props.patchIntent || void 0 === this.props.patchIntent && this.held)) {
                    let e = this.held?.element ?? this.capture()?.element;
                    e && (this.pendingVisual = e, e.classList.add(r6))
                }
                if (this.props.active || this.observeStreamingDilText(), this.props.active && e.visualOwnerId !== this.props.visualOwnerId && (this.revealMotion?.stop(), this.revealMotion = void 0, this.resumePlacement = void 0), this.held && this.shouldAnimateFold()) {
                    if (!this.userMotion) {
                        let e = this.requestingBubble(this.held);
                        e ? (this.userMotion = e.animate([{
                            translate: "0 0",
                            opacity: 1
                        }, {
                            translate: "0 -36px",
                            opacity: 0
                        }], {
                            duration: 245,
                            easing: "cubic-bezier(.25,.55,.35,1)",
                            fill: "forwards"
                        }), this.userMotion.onfinish = this.showAcceptedEdit) : this.showAcceptedEdit()
                    }
                    return
                }
                this.presented = this.props, this.props.active && this.clearPendingPulse(), this.userMotion?.cancel(), this.userMotion = void 0
            }
            shouldAnimateFold() {
                return null != this.held && !this.props.reducedMotion && this.props.active && this.presented.visualId === this.props.visualId && this.presented.exchangeKey === this.props.exchangeKey && this.presented.visualOwnerId !== this.props.visualOwnerId
            }
            showAcceptedEdit = () => {
                this.presented = this.props, this.forceUpdate()
            };
            restoreAfterMeasurement = () => {
                this.restore(this.held), this.held && this.revealRequest(this.held)
            };
            restore(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                if (!e?.element.isConnected) return;
                let {
                    scrollController: n
                } = this.props;
                e.body.isConnected || (e.body = e.element.querySelector(r7) ?? e.element);
                let a = () => (0, n2.b)(e.body.getBoundingClientRect().top - e.top, this.context),
                    r = a();
                if (!(1 > Math.abs(r))) {
                    if (this.held) {
                        let t = e.element.closest("[data-turn-key]")?.querySelector("[data-dil-anchor-spacer]");
                        if (t) {
                            let n = parseFloat(t.style.height) || 0,
                                s = n + Math.max(0, -r - e.scrollElement.scrollTop) - Math.min(n, Math.max(0, r));
                            s !== n && (t.style.height = `${s}px`, r = a())
                        }
                    }
                    this.held && r > 0 && this.props.ensureScrollRoomForAnchor?.(r), n.holdViewport(), n.compensateScrollToDistanceFromBottomPx(Math.max(0, (0, r5.b)(e.scrollElement) - r)), t && (this.stopLayoutCorrection?.(), this.stopLayoutCorrection = (0, r3.a)(e.body, this.context))
                }
            }
            render() {
                return this.shouldAnimateFold() ? this.presented.children : this.props.children
            }
        }
        var r9 = n("aRto"),
            se = n("WWSI"),
            st = n("U3Gy"),
            sn = n("mKTJ");
        let sa = (0, d.c)(em.a, e => {
                let {
                    get: t
                } = e;
                return t(r$.m)
            }, {
                isEqual: tw()
            }),
            sr = (0, d.c)(em.a, e => {
                let {
                    get: t
                } = e;
                return t(rX.i)
            }, {
                isEqual: (e, t) => e.length === t.length && e.every((e, n) => e.messageId === t[n]?.messageId && e.turnId === t[n]?.turnId)
            });

        function ss(e) {
            let t, n, s, o, i, l, c, u, h, p, g, f, b, y, x = (0, r.c)(55),
                {
                    conversationId: w,
                    entries: C,
                    viewportRef: _,
                    isTurnActive: S,
                    isInlinePreview: j,
                    readingPosition: I,
                    onVisibleContentReady: T,
                    hasVisibleContent: E,
                    responseSpacerState: P
                } = e,
                A = (0, d.z)(I.restoreState$),
                {
                    sharedConversationId: M
                } = (0, v.cb)(),
                k = (0, d.z)(null != M && "u" > typeof Element && "function" != typeof Element.prototype.moveBefore ? sa : null),
                R = (0, d.z)(sr),
                N = (0, a9.b)(),
                O = (0, m.useContext)(rY.a);
            x[0] !== O || x[1] !== j || x[2] !== I || x[3] !== N ? (t = () => {
                if (null != O && !j) return O(() => I.captureBeforeHide(N))
            }, n = [O, j, I, N], x[0] = O, x[1] = j, x[2] = I, x[3] = N, x[4] = t, x[5] = n) : (t = x[4], n = x[5]), (0, m.useLayoutEffect)(t, n), x[6] !== I || x[7] !== N ? (s = () => I.restoreReadingPosition(N), x[6] = I, x[7] = N, x[8] = s) : s = x[8];
            let L = (0, eW.a)(s),
                z = C.findLastIndex(sd),
                F = C[z]?.dilVisualSlotId,
                B = (0, a2.a)(null != F),
                [D, G] = (0, m.useState)(sc);
            x[9] === Symbol.for("react.memo_cache_sentinel") ? (o = new Map, x[9] = o) : o = x[9];
            let H = (0, m.useRef)(o);
            x[10] === Symbol.for("react.memo_cache_sentinel") ? (i = () => {
                let e = H.current;
                return () => e.forEach(sl)
            }, l = [], x[10] = i, x[11] = l) : (i = x[10], l = x[11]), (0, m.useEffect)(i, l), x[12] !== B || x[13] !== _ || x[14] !== D ? (c = (e, t) => {
                _.current?.releaseForHistoryToggle();
                let n = D.get(e),
                    a = n?.count !== t || "closing" === n.phase,
                    r = H.current;
                window.clearTimeout(r.get(e)), r.delete(e);
                let s = n => G(a => {
                    let r = new Map(a);
                    return null != n ? r.set(e, {
                        count: t,
                        phase: n
                    }) : r.delete(e), r
                });
                B ? s(a ? "open" : null) : (s(a ? "opening" : "closing"), r.set(e, window.setTimeout(() => {
                    r.delete(e), s(a ? "open" : null)
                }, 150)))
            }, x[12] = B, x[13] = _, x[14] = D, x[15] = c) : c = x[15];
            let q = function(e, t, n) {
                    if (!e.some(e => null != e.dilEditRequests)) return e;
                    let a = new Set;
                    return e.flatMap(e => {
                        let r, s = e.dilEditRequests;
                        if (!s || e.dilVisualSlotId) return [e];
                        let o = !1,
                            i = e.turn.items.flatMap(e => {
                                if ("user-message" !== e.type || !e.messageId) return [e];
                                let i = s.get(e.messageId);
                                if (!i) return [e];
                                let l = t.get(i.slotId),
                                    c = l?.count === i.editCount ? l.phase : void 0;
                                if (e.messageId === i.originalRequestId) a.add(i.slotId), r = {
                                    slotId: i.slotId,
                                    requestId: e.messageId,
                                    count: i.editCount,
                                    expanded: null != c && "closing" !== c,
                                    onToggle: () => n(i.slotId, i.editCount)
                                };
                                else if (null == c && a.has(i.slotId)) return o = !0, [];
                                return null != c ? (o = !0, [{
                                    ...e,
                                    dilEditPhase: c,
                                    dilEditPreview: i.preview
                                }]) : [e]
                            });
                        return o ? i.length ? [{
                            ...e,
                            turn: {
                                ...e.turn,
                                items: i
                            },
                            dilEditDisclosure: r
                        }] : [] : [r ? {
                            ...e,
                            dilEditDisclosure: r
                        } : e]
                    })
                }(C, D, (0, eW.a)(c)),
                W = C[z]?.turn.items[0],
                K = C.findLastIndex(su),
                U = C[K],
                V = (0, d.x)(r1.a, w),
                Q = U?.turn.items.find(si),
                $ = z > K;
            x[16] !== C ? (u = e => {
                let t = C.find(t => t.turn.items.some(t => "chatgpt-writing-block-patch" === t.type && t.messageId === e.messageId)),
                    n = t?.turnKey ?? C.find(t => {
                        let {
                            id: n
                        } = t;
                        return n === e.turnId
                    })?.turnKey;
                return null == n ? [] : [n]
            }, x[16] = C, x[17] = u) : u = x[17];
            let Y = R.flatMap(u),
                J = (0, m.useContext)(r9.a),
                X = C.at(-1),
                Z = S || X?.turn.status === "in_progress";
            if (J?.aboveComposer != null && null != X && Y.push(X.turnKey), null != M && k?.size)
                for (let e of C) e.turn.items.flatMap(so).some(e => "chatgpt-hosted-widget" === e.type && (0, sn.h)(e) && k.has((0, sn.e)(M, e.messageId))) && Y.push(e.turnKey);
            let ee = null == F ? void 0 : q.find(e => e.dilEditDisclosure?.slotId === F);
            ee && Y.push(ee.turnKey, C[z].turnKey);
            let et = $ ? ee : void 0;
            null != U && (P?.voiceAutoScrollEnabled || !$ && Z) && Y.push(U.turnKey);
            let en = (0, d.x)(r0.b, w),
                ea = null == en ? void 0 : C.findLast(e => {
                    let {
                        turn: t
                    } = e;
                    return t.messageIds.includes(en)
                }),
                er = null == ea ? void 0 : (0, r0.a)(ea.turn.items);
            (0, d.x)(rZ.a, null == er ? null : {
                conversationId: w,
                userMessageId: er,
                steeredPromptId: ea === X ? en : void 0
            }) && null != ea && Y.push(ea.turnKey);
            let es = (0, d.x)(st.b, w);
            x[18] === Symbol.for("react.memo_cache_sentinel") ? (h = (e, t, n) => "adjacent-user-prompts" === (0, ts.d)(n[t - 1], e) ? {
                ...e,
                gapBeforePx: 4
            } : e, x[18] = h) : h = x[18];
            let eo = (0, se.a)(q, es, w).map(h);
            null != V && Q?.messageId;
            let ei = U?.turnKey,
                el = W?.type === "assistant-message" ? W.messageId : void 0,
                ec, ed = P?.ensureScrollRoomForAnchor,
                eu = X?.hasStreamingFinalText === !0,
                eh = X?.streamingDilFinalId,
                ep = !j && !1 === E && eo.length > 0,
                eg = P?.getHeightPx,
                em = et?.turnKey,
                ef = et?.dilEditDisclosure?.count,
                ev = et?.turnKey ?? U?.turnKey;
            x[19] !== P || x[20] !== _ ? (p = (e, t) => {
                P?.onTurnLayoutReady(e, t), _.current?.restoreAfterMeasurement()
            }, x[19] = P, x[20] = _, x[21] = p) : p = x[21], x[22] !== P ? (g = e => {
                let {
                    heightDeltaPx: t
                } = e;
                P?.consumeGrowth(t ?? 0)
            }, x[22] = P, x[23] = g) : g = x[23];
            let eb = null == O || j ? void 0 : I.onRestoreStateChange;
            return x[24] !== A || x[25] !== T || x[26] !== I.onApiChange || x[27] !== L || x[28] !== Y || x[29] !== eg || x[30] !== em || x[31] !== ef || x[32] !== ev || x[33] !== p || x[34] !== g || x[35] !== eb || x[36] !== eo ? (f = (0, a.jsx)(rS.a, {
                mode: "virtualized",
                rows: eo,
                ...r_.g,
                getBottomScrollPaddingPx: eg,
                synchronousMeasurementTurnKey: em,
                latestTurnSynchronousMeasurementKey: ef,
                layoutReadyTurnKey: ev,
                onTurnLayoutReady: p,
                onLatestTurnHeightChange: g,
                initialRestoreState: A,
                onRestoreStateChange: eb,
                onApiChange: I.onApiChange,
                restoreScrollDistanceFromBottomPx: L,
                onVisibleContentReady: T,
                preserveMeasuredTurnViewport: !0,
                retainedTurnKeys: Y,
                renderRow: rU
            }), x[24] = A, x[25] = T, x[26] = I.onApiChange, x[27] = L, x[28] = Y, x[29] = eg, x[30] = em, x[31] = ef, x[32] = ev, x[33] = p, x[34] = g, x[35] = eb, x[36] = eo, x[37] = f) : f = x[37], x[38] !== ep || x[39] !== f ? (b = (0, a.jsx)(tt.c, {
                status: "chatgpt",
                waiting: ep,
                children: f
            }), x[38] = ep, x[39] = f, x[40] = b) : b = x[40], x[41] !== $ || x[42] !== B || x[43] !== Z || x[44] !== N || x[45] !== ei || x[46] !== el || x[47] !== ec || x[48] !== ed || x[49] !== eu || x[50] !== eh || x[51] !== b || x[52] !== _ || x[53] !== F ? (y = (0, a.jsx)(r8, {
                ref: _,
                exchangeKey: ei,
                visualId: F,
                visualOwnerId: el,
                patchIntent: ec,
                active: $,
                ensureScrollRoomForAnchor: ed,
                hasStreamingFinalText: eu,
                streamingDilFinalId: eh,
                replyPending: Z,
                reducedMotion: B,
                scrollController: N,
                children: b
            }), x[41] = $, x[42] = B, x[43] = Z, x[44] = N, x[45] = ei, x[46] = el, x[47] = ec, x[48] = ed, x[49] = eu, x[50] = eh, x[51] = b, x[52] = _, x[53] = F, x[54] = y) : y = x[54], y
        }

        function so(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : [e]
        }

        function si(e) {
            return "user-message" === e.type
        }

        function sl(e) {
            return window.clearTimeout(e)
        }

        function sc() {
            return new Map
        }

        function sd(e) {
            return null != e.dilVisualSlotId
        }

        function su(e) {
            return e.turn.items.some(e => "user-message" === e.type)
        }
        var sh = n("Ipgw"),
            sp = n("SBcL");

        function sg(e) {
            let t, n, s, o, i = (0, r.c)(18),
                {
                    conversationId: l
                } = e,
                c = (0, d.y)(eT.a),
                u = (0, f.a)(),
                h = (0, eH.a)(),
                p = (0, d.x)(tm.ab, l),
                g = (0, d.x)(tm.db, l),
                v = (0, d.x)(tm.w, l),
                b = (0, d.x)(tm.cb, l),
                y = (0, m.useRef)(null),
                x = (0, m.useRef)(null);
            i[0] !== v || i[1] !== l || i[2] !== u || i[3] !== g || i[4] !== c || i[5] !== p || i[6] !== b ? (t = () => {
                let e = y.current;
                if (null == e) return;
                let t = x.current;
                if ((0, tm.Bb)(p)) {
                    e.textContent = "", x.current = {
                        conversationId: l,
                        requestId: g ?? ("active-async-turn" === p || "active-tpp-turn" === p ? v?.requestId : null) ?? (t?.conversationId === l ? t.requestId : null)
                    };
                    return
                }
                b || (x.current = null, t?.conversationId === l && "idle" === p && v?.result === "completed" && v.requestId === t.requestId && null == c.get(tm.D, l) && (e.textContent = u.formatMessage({
                    id: "chatgptConversations.responseComplete",
                    defaultMessage: "Response complete"
                })))
            }, i[0] = v, i[1] = l, i[2] = u, i[3] = g, i[4] = c, i[5] = p, i[6] = b, i[7] = t) : t = i[7];
            let w = (0, m.useEffectEvent)(t);
            return (i[8] !== w ? (n = () => {
                w()
            }, i[8] = w, i[9] = n) : n = i[9], i[10] !== v || i[11] !== l || i[12] !== h || i[13] !== g || i[14] !== p || i[15] !== b ? (s = [l, p, g, v, b, h], i[10] = v, i[11] = l, i[12] = h, i[13] = g, i[14] = p, i[15] = b, i[16] = s) : s = i[16], (0, m.useEffect)(n, s), h) ? (i[17] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, n1.createPortal)((0, a.jsx)("span", {
                ref: y,
                className: "sr-only select-none",
                "aria-atomic": "true",
                "aria-live": "polite",
                role: "status"
            }), document.body), i[17] = o) : o = i[17], o) : null
        }
        var sm = n("XtQP"),
            sf = n("JlMc"),
            sv = n("TUMj"),
            sb = n("pgeU");
        let sy = (0, tu.a)(async () => (await Promise.all([n.e(747352), n.e(94193)]).then(n.bind(n, "FKl5"))).ClientDelightPresentation);

        function sx(e) {
            let t, n, s, o = (0, r.c)(7),
                {
                    conversationId: i
                } = e,
                l = (0, d.y)(eT.a),
                c = (0, d.x)(sb.a, i);
            return o[0] !== i || o[1] !== l ? (t = () => {
                let e = () => {
                        let e = l.get(sb.a, i);
                        null != e && (0, sb.b)(l, i, e, "hidden_or_unmounted")
                    },
                    t = () => {
                        "visible" !== document.visibilityState && e()
                    };
                return document.addEventListener("visibilitychange", t), window.addEventListener("pagehide", e), () => {
                    document.removeEventListener("visibilitychange", t), window.removeEventListener("pagehide", e), e()
                }
            }, n = [i, l], o[0] = i, o[1] = l, o[2] = t, o[3] = n) : (t = o[2], n = o[3]), (0, m.useEffect)(t, n), o[4] !== i || o[5] !== c ? (s = null == c ? null : (0, a.jsx)(sy, {
                conversationId: i,
                effect: c
            }, c.id), o[4] = i, o[5] = c, o[6] = s) : s = o[6], s
        }
        var sw = n("ZU27"),
            sC = n("Pyg2"),
            s_ = n("ZIh4"),
            sS = n("nKJ6"),
            sj = n("AoaR"),
            sI = n("fDfx"),
            sT = n("Xslx"),
            sE = n("EEop"),
            sP = n("bxvp"),
            sA = n("VBQS"),
            sM = n("hsIu");
        let sk = (0, d.d)(eT.a, (e, t) => {
            let {
                get: n
            } = t;
            if (null == e || !n(sP.c) || null == n(I.f) || null == n(I.k)) return null;
            let {
                data: a,
                isError: r
            } = n(sM.b);
            if (r || a?.project_id !== e) return null;
            let {
                data: s,
                isError: o
            } = n(sE.l, (0, sA.a)());
            return o ? null : (0, sA.b)(s)
        });
        var sR = n("FmJi"),
            sN = n("sIex"),
            sO = n("Z2JT"),
            sL = n("Fjd0"),
            sz = n("VPBa"),
            sF = n("PWXi"),
            sB = n("HgLj"),
            sD = n("ssKV"),
            sG = n("f6KK"),
            sH = n("JPXZ"),
            sq = n("zWHk");

        function sW(e) {
            let t, n, a, s, o, i, l, c = (0, r.c)(34),
                {
                    composerController: d,
                    enabled: u
                } = e,
                h = (0, v.X)(),
                p = (0, v._)();
            if (c[0] !== h.search) {
                let e = new URLSearchParams(h.search);
                t = e.get("prompt"), n = e.get("promptSource"), c[0] = h.search, c[1] = t, c[2] = n
            } else t = c[1], n = c[2];
            let g = n,
                f = h.key,
                b = (0, m.useRef)(null);
            c[3] !== h.hash || c[4] !== h.pathname || c[5] !== h.search || c[6] !== h.state || c[7] !== f || c[8] !== p ? (a = e => {
                let t = new URLSearchParams(h.search);
                t.delete("prompt"), t.delete("promptSource"), p({
                    pathname: h.pathname,
                    search: t.toString(),
                    hash: h.hash
                }, {
                    replace: !0,
                    state: {
                        ...h.state,
                        consumedUrlPromptKey: f,
                        ...e && "widget" === t.get("site_edit_source") ? {
                            siteEditSource: "widget"
                        } : void 0
                    }
                })
            }, c[3] = h.hash, c[4] = h.pathname, c[5] = h.search, c[6] = h.state, c[7] = f, c[8] = p, c[9] = a) : a = c[9];
            let y = (0, m.useEffectEvent)(a);
            return c[10] !== y || c[11] !== d || c[12] !== u || c[13] !== f || c[14] !== t ? (s = () => {
                if (!u && t && b.current !== f) return (0, sq.b)(d.view, (e, t) => {
                    e && t?.getMeta("addToHistory") !== !1 && d.consumeLocationPromptPrefill(f) && y(!1)
                })
            }, c[10] = y, c[11] = d, c[12] = u, c[13] = f, c[14] = t, c[15] = s) : s = c[15], c[16] !== d || c[17] !== u || c[18] !== f || c[19] !== t ? (o = [d, u, f, t], c[16] = d, c[17] = u, c[18] = f, c[19] = t, c[20] = o) : o = c[20], (0, m.useLayoutEffect)(s, o), c[21] !== y || c[22] !== d || c[23] !== u || c[24] !== f || c[25] !== t || c[26] !== g ? (i = () => {
                if (!u || !t || b.current === f) return;
                b.current = f;
                let e = d.consumeLocationPromptPrefill(f);
                if (y(e), !e) return;
                let {
                    view: n
                } = d, a = t.replace(/\r\n/g, "\n"), r = "codex-app" === g ? (0, sH.f)({
                    schema: n.state.schema,
                    text: a,
                    restoreOnlySitesAndPluginMentions: !0
                }) : (0, sH.e)({
                    schema: n.state.schema,
                    text: a
                }), s = n.state.tr.replaceWith(0, n.state.doc.content.size, r.content);
                s.setSelection(sG.h.atEnd(s.doc)), n.dispatch(s)
            }, c[21] = y, c[22] = d, c[23] = u, c[24] = f, c[25] = t, c[26] = g, c[27] = i) : i = c[27], c[28] !== d || c[29] !== u || c[30] !== f || c[31] !== t || c[32] !== g ? (l = [d, u, f, t, g], c[28] = d, c[29] = u, c[30] = f, c[31] = t, c[32] = g, c[33] = l) : l = c[33], (0, m.useLayoutEffect)(i, l), null
        }
        var sK = n("a4V1"),
            sU = n("KidQ");
        let sV = {
            addInitialContentToHistory: !0,
            enableCodeBlocks: !1,
            enableSelectedTextLinks: !1,
            enableFileMentions: !0,
            enableSkillMentions: !1,
            enableSlashCommands: {
                triggers: ["/"]
            }
        };

        function sQ(e) {
            let t, n, s, o, i, l = (0, r.c)(15),
                {
                    children: c,
                    draftKey: u,
                    enableInlineSystemHints: h
                } = e,
                p = (0, d.y)(eT.a),
                g = (0, m.useContext)(sN.a),
                f = h ? "chatgpt" : void 0;
            return l[0] !== h || l[1] !== f ? (t = {
                enableInlineSystemHints: h,
                variant: f
            }, l[0] = h, l[1] = f, l[2] = t) : t = l[2], l[3] !== u || l[4] !== p ? (n = () => ({
                defaultText: p.get(e8.u, u),
                defaultTextKind: "prompt"
            }), l[3] = u, l[4] = p, l[5] = n) : n = l[5], l[6] !== g ? (s = () => {
                let e = g?.input.current ?? document.querySelector("#pending-conversation-input");
                return null == e || null == g ? null : {
                    element: e,
                    locationKey: g.locationKey
                }
            }, l[6] = g, l[7] = s) : s = l[7], l[8] !== c ? (o = e => null == e ? null : c(e), l[8] = c, l[9] = o) : o = l[9], l[10] !== t || l[11] !== n || l[12] !== s || l[13] !== o ? (i = (0, a.jsx)(sU.a, {
                controllerOptions: sV,
                initialSuggestionOptions: t,
                getInitialContent: n,
                getInitialInput: s,
                children: o
            }), l[10] = t, l[11] = n, l[12] = s, l[13] = o, l[14] = i) : i = l[14], i
        }
        var s$ = n("wnpN"),
            sY = n("xhk1"),
            sJ = n("vpdG"),
            sX = n("V8xe");

        function sZ(e) {
            let t, n, s, o = (0, r.c)(11),
                i = (0, m.useContext)(sN.a);
            if (null == i || i.conversationId !== e.conversationId) {
                let t;
                return o[0] !== e ? (t = (0, a.jsx)(s0, {
                    ...e
                }), o[0] = e, o[1] = t) : t = o[1], t
            }
            o[2] !== e.conversationId || o[3] !== e.isImageEditComposer ? (t = e.isImageEditComposer ? {
                conversationId: e.conversationId,
                surface: "image-edit"
            } : e.conversationId, o[2] = e.conversationId, o[3] = e.isImageEditComposer, o[4] = t) : t = o[4];
            let l = !e.isWorkConversation;
            return o[5] !== e ? (n = t => (0, a.jsx)(s0, {
                ...e,
                initialController: t
            }), o[5] = e, o[6] = n) : n = o[6], o[7] !== t || o[8] !== l || o[9] !== n ? (s = (0, a.jsx)(sQ, {
                draftKey: t,
                enableInlineSystemHints: l,
                children: n
            }), o[7] = t, o[8] = l, o[9] = n, o[10] = s) : s = o[10], s
        }

        function s0(e) {
            let t, n, s, o, i, l, c, u, h, p, g, b, y, x, w, C, _, S, j, I = (0, r.c)(85),
                {
                    composerRef: T,
                    initialController: E,
                    ...P
                } = e,
                A = (0, d.y)(eg.a),
                M = (0, m.useContext)(a9.a),
                k = (0, d.x)(s_.d, P.isTemporaryChat),
                {
                    conversationId: R,
                    isFullscreenComposer: N
                } = P,
                O = (0, f.a)(),
                {
                    state: L
                } = (0, v.X)(),
                z = (0, d.x)(te, R),
                F = (0, d.x)(tm.T, R),
                B = !(!P.disabled && !P.isSharedConversation && !P.isWorkConversation && !P.isTemporaryChat && !P.isImageEditComposer && (0, tF.a)(F)) ? null : F,
                D = (0, d.x)(null == P.requiredSystemHints ? sk : null, B);
            I[0] !== D || I[1] !== P.requiredSystemHints ? (t = P.requiredSystemHints ?? (null == D ? void 0 : [D]), I[0] = D, I[1] = P.requiredSystemHints, I[2] = t) : t = I[2];
            let G = t;
            I[3] !== D || I[4] !== R || I[5] !== A ? (n = () => {
                if (null != D) {
                    let e, t;
                    return e = (0, sT.b)(A, R, [D]), t = (0, sI.i)(A, {
                        draftKey: R,
                        isTemporaryChat: !1
                    }), () => {
                        if (e(), A.get(sT.a, R).includes(D)) return;
                        let n = A.get(e8.x, R).filter(e => e !== D && e !== `plugin:${sj.d}`);
                        (0, e8.Z)(A, R, n, t)
                    }
                }
            }, s = [A, R, D], I[3] = D, I[4] = R, I[5] = A, I[6] = n, I[7] = s) : (n = I[6], s = I[7]), (0, m.useEffect)(n, s);
            let H = (0, d.x)(eZ.c, R);
            I[8] !== H || I[9] !== P.isSharedConversation || I[10] !== P.isWorkConversation || I[11] !== F ? (o = !P.isSharedConversation && !P.isWorkConversation && !(0, tF.a)(F) && !H, I[8] = H, I[9] = P.isSharedConversation, I[10] = P.isWorkConversation, I[11] = F, I[12] = o) : o = I[12];
            let q = o,
                W = q && !P.disabled && !P.isSubmitDisabled && !P.isImageEditComposer,
                K = q ? z : void 0;
            I[13] !== R || I[14] !== P.isImageEditComposer ? (i = P.isImageEditComposer ? {
                conversationId: R,
                surface: "image-edit"
            } : R, I[13] = R, I[14] = P.isImageEditComposer, I[15] = i) : i = I[15];
            let U = i;
            I[16] !== R || I[17] !== U || I[18] !== E ? (l = {
                composerController: E,
                conversationId: R,
                draftKey: U
            }, I[16] = R, I[17] = U, I[18] = E, I[19] = l) : l = I[19];
            let V = (0, sJ.a)(l),
                Q = (0, sY.a)(V, R, !P.isInlinePreview && !P.disabled, P.workspace && "tpp", K?.id ?? F),
                $ = (0, m.useContext)(sN.a),
                Y = (0, m.useRef)(!1);
            I[20] !== U || I[21] !== $ || I[22] !== E || I[23] !== P.isTemporaryChat || I[24] !== A ? (c = e => {
                null == e || null == E || Y.current || (Y.current = !0, (0, e8._)(A, U, E.getPersistedText(), {
                    isTemporaryChat: P.isTemporaryChat
                }), $?.onAdopt())
            }, I[20] = U, I[21] = $, I[22] = E, I[23] = P.isTemporaryChat, I[24] = A, I[25] = c) : c = I[25];
            let J = (0, eW.a)(c);
            I[26] !== J || I[27] !== T ? (u = (0, sB.a)(T, J), I[26] = J, I[27] = T, I[28] = u) : u = I[28];
            let X = u,
                Z = (0, m.useContext)(sv.a),
                ee = (0, d.w)(sK.b, R),
                et = (0, d.x)(tm.eb, R),
                en = (0, d.x)(tm.ab, R),
                ea = (0, d.x)(e8.j, R);
            I[29] !== en ? (h = (0, tm.Bb)(en), I[29] = en, I[30] = h) : h = I[30];
            let er = h,
                es = (0, d.z)(sw.l.activeTab$);
            if (I[31] !== es || I[32] !== N || I[33] !== er || I[34] !== Z) {
                let e = Z?.turn.items.flatMap(s4);
                p = N && es?.tabType.kind === sz.a && "generatedImages" in es.props && null != es.props.generatedImages && !er && null != Z && "in_progress" !== Z.turn.status && !Z.showPendingLoadingMessage && !e?.some(s3) && (null != Z.errorMessage || e?.some(s2)) ? Z.turn.messageIds.at(-1) ?? Z.turnKey : null, I[31] = es, I[32] = N, I[33] = er, I[34] = Z, I[35] = p
            } else p = I[35];
            let eo = p,
                ei = (0, m.useRef)(null);
            I[36] !== eo || I[37] !== A ? (g = () => {
                null != eo && eo !== ei.current && (ei.current = eo, A.set(sO.b, "expanded"))
            }, b = [eo, A], I[36] = eo, I[37] = A, I[38] = g, I[39] = b) : (g = I[38], b = I[39]), (0, m.useEffect)(g, b);
            let el = (0, d.w)(s$.a, N ? R : null);
            I[40] !== D || I[41] !== B || I[42] !== V || I[43] !== R || I[44] !== W || I[45] !== U || I[46] !== O || I[47] !== N || I[48] !== X || I[49] !== Q || I[50] !== k || I[51] !== P || I[52] !== G || I[53] !== A || I[54] !== M || I[55] !== K || I[56] !== L?.libraryFileCreation || I[57] !== F ? (y = e => (0, a.jsxs)(sL.a, {
                children: [N && P.trackReadState && !e?.isHidden ? (0, a.jsx)(sf.a, {
                    conversationId: R,
                    isTranscriptVisible: e?.isCompact === !1 && !e.isMinimized
                }) : null, P.aboveComposerContent, (0, a.jsx)(sR.a, {
                    children: (0, a.jsx)(sD.a, {
                        ref: X,
                        trackShownImpressions: P.trackShownImpressions && !P.isHidden && !e?.isHidden && !e?.isMinimized,
                        headerContent: P.headerContent,
                        legacyImageSuggestionsEnabled: !P.disabled && !P.isSharedConversation && !P.isImageEditComposer,
                        allowBackgroundSubmit: P.isInlinePreview,
                        ...Q,
                        disableAutoFocus: P.disableAutoFocus,
                        conversationOrigin: null == P.workspace ? void 0 : "tpp",
                        mcpAppContext: P.workspace?.mcpAppContext,
                        onServerThreadIdChange: P.workspace?.onServerThreadIdChange,
                        followupPortalTarget: P.followupPortalTarget,
                        takeoverDisclaimerRef: P.takeoverDisclaimerRef,
                        showConversationFollowups: P.showConversationFollowups,
                        autoPrepare: !P.isSubmitDisabled && !P.isSharedConversation,
                        browserConversationId: (0, sS.getThreadBrowserConversationId)(A) ?? R,
                        composerController: V,
                        conversationId: R,
                        requiredSystemHints: G,
                        hideSystemHints: null != P.requiredSystemHints,
                        getSubmissionGuard: null != D ? () => () => A.get(tm.T, R) === F && A.get(sk, B) === D : void 0,
                        draftKey: U,
                        onPromptChange: k,
                        selectedCustomGpt: K,
                        targetGizmoId: K?.id,
                        onCustomGptChange: W ? e => {
                            A.set(te, R, e)
                        } : void 0,
                        onCustomAgentSelected: W ? () => {
                            A.set(te, R, null)
                        } : void 0,
                        disableDraftPrepare: P.isSubmitDisabled || P.isSharedConversation,
                        disableSubmit: P.disabled || P.isSubmitDisabled,
                        voiceInputDisabled: P.disabled,
                        aboveComposerHeaderContent: P.voiceDisclaimer,
                        getExtraDeveloperInstructions: !P.isInlinePreview && L?.libraryFileCreation && !P.isTemporaryChat ? s1 : void 0,
                        isTemporaryChat: P.isTemporaryChat,
                        placeholder: P.disabled && !1 !== P.readOnlyPlaceholder ? P.readOnlyPlaceholder ?? O.formatMessage(sX.a.readOnlyConversationPlaceholder) : void 0,
                        readOnly: P.disabled,
                        hideModelPicker: P.hideModelPicker,
                        ...(0, e8.M)(P),
                        showVoiceStage: P.showVoiceStage,
                        onSubmitAccepted: (t, n) => {
                            e?.onSubmitStart(), (!(!P.isWorkConversation && n?.isSteer === !0) || M?.shouldFollowContentGrowth()) && P.responseSpacerState?.place(), P.onSubmitAccepted?.(t)
                        },
                        onSubmitError: P.responseSpacerState?.clear
                    })
                })]
            }), I[40] = D, I[41] = B, I[42] = V, I[43] = R, I[44] = W, I[45] = U, I[46] = O, I[47] = N, I[48] = X, I[49] = Q, I[50] = k, I[51] = P, I[52] = G, I[53] = A, I[54] = M, I[55] = K, I[56] = L?.libraryFileCreation, I[57] = F, I[58] = y) : y = I[58];
            let ec = y;
            I[59] !== A ? (x = () => {
                (0, aJ.K)(A, "conversation")
            }, w = () => {
                (0, aJ.K)(A, "conversation")
            }, I[59] = A, I[60] = x, I[61] = w) : (x = I[60], w = I[61]);
            let ed = !P.isInlinePreview && !P.disabled && !P.isSubmitDisabled;
            I[62] !== V || I[63] !== ed ? (C = (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(sW, {
                    composerController: V,
                    enabled: ed
                })
            }), I[62] = V, I[63] = ed, I[64] = C) : C = I[64];
            let eu = N ? "floating" : "pane",
                eh = P.disabled || P.awaitingGptContinuation,
                ep = null == Z && !er,
                em = !P.isInlinePreview && null == P.workspace,
                ef = ea || er ? "loading" : "idle";
            return I[65] !== ef ? (_ = {
                type: ef,
                unread: !1
            }, I[65] = ef, I[66] = _) : _ = I[66], I[67] !== el || I[68] !== P.isHidden || I[69] !== P.renderTranscript || I[70] !== ec || I[71] !== ee || I[72] !== eu || I[73] !== eh || I[74] !== ep || I[75] !== em || I[76] !== _ || I[77] !== et ? (S = (0, a.jsx)(sC.a, {
                notifications: el,
                isHidden: P.isHidden,
                placement: eu,
                responsePreview: ee,
                forceExpanded: eh,
                composerOnly: ep,
                title: et,
                showConversationTitleMenu: em,
                statusState: _,
                renderTranscript: P.renderTranscript,
                children: ec
            }), I[67] = el, I[68] = P.isHidden, I[69] = P.renderTranscript, I[70] = ec, I[71] = ee, I[72] = eu, I[73] = eh, I[74] = ep, I[75] = em, I[76] = _, I[77] = et, I[78] = S) : S = I[78], I[79] !== R || I[80] !== x || I[81] !== w || I[82] !== C || I[83] !== S ? (j = (0, a.jsxs)("div", {
                className: "contents",
                "data-map-composer-conversation": R,
                onMouseDownCapture: x,
                onFocusCapture: w,
                children: [C, S]
            }), I[79] = R, I[80] = x, I[81] = w, I[82] = C, I[83] = S, I[84] = j) : j = I[84], j
        }

        function s1() {
            return [sF.a]
        }

        function s2(e) {
            return "assistant-message" === e.type && "" !== e.content.trim()
        }

        function s3(e) {
            return "generated-image" === e.type || "chatgpt-delayed-image-gen" === e.type
        }

        function s4(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : [e]
        }
        var s5 = n("ygKd"),
            s6 = n("KSir"),
            s7 = n("QPeR"),
            s8 = n("M3Kf");

        function s9(e) {
            let t, n, s, o, l, c, u = (0, r.c)(21),
                {
                    conversationId: h
                } = e,
                p = (0, d.y)(eT.a),
                g = (0, d.x)(tm.j, h),
                m = (0, d.z)(aA.b),
                {
                    search: f
                } = (0, v.X)();
            if (u[0] !== f) {
                let e = new URLSearchParams(f);
                t = e.get("messageId") ?? e.get("message"), n = e.has("selectedTextQuery"), u[0] = f, u[1] = t, u[2] = n
            } else t = u[1], n = u[2];
            let b = n;
            u[3] !== b || u[4] !== t || u[5] !== g ? (s = ["chatgpt-message-target", g, t, b], u[3] = b, u[4] = t, u[5] = g, u[6] = s) : s = u[6];
            let y = null != g && null != t && m > 0,
                x = b ? 0 : 1 / 0;
            u[7] !== h || u[8] !== b || u[9] !== t || u[10] !== p || u[11] !== g ? (o = async e => {
                let {
                    signal: n
                } = e;
                if (null != g) {
                    if (null != t && b) {
                        let e = p.get(tm.N, h),
                            n = e?.[t] ?? (null == e ? void 0 : Object.values(e).find(e => e.message?.id === t));
                        if (n?.message != null) return !0
                    }
                    await (0, aP.a)(p, g, n)
                }
                return !0
            }, u[7] = h, u[8] = b, u[9] = t, u[10] = p, u[11] = g, u[12] = o) : o = u[12], u[13] !== s || u[14] !== y || u[15] !== x || u[16] !== o ? (l = {
                queryKey: s,
                enabled: y,
                staleTime: x,
                retry: !1,
                queryFn: o
            }, u[13] = s, u[14] = y, u[15] = x, u[16] = o, u[17] = l) : l = u[17];
            let {
                isError: w,
                refetch: C
            } = (0, i.a)(l);
            return u[18] !== w || u[19] !== C ? (c = w ? (0, a.jsx)(tc.a, {
                color: "secondary",
                onClick: () => void C(),
                children: (0, a.jsx)(ey.a, {
                    id: "chatgpt.pagination.retryMessage",
                    defaultMessage: "Retry loading this message"
                })
            }) : null, u[18] = w, u[19] = C, u[20] = c) : c = u[20], c
        }
        var oe = n("TmaW"),
            ot = n("K45w");

        function on(e) {
            let t = e.querySelector("[data-dil-message-id]") ?? e;
            return t.checkVisibility() && null == t.querySelector("[data-dil-render-failed]") && t.innerText.trim().length > 0
        }
        n("CSxw");
        var oa = n("NqfB"),
            or = n("JEFL"),
            os = n("moBM");
        let oo = '[data-markdown-text-style="assistant-message"]',
            oi = (0, d.d)(eT.a, (e, t) => {
                let {
                    conversationId: n,
                    messageId: a
                } = e, {
                    get: r
                } = t;
                return null == a ? null : r(tm.N, n)?.[a]?.message ?? null
            });

        function ol(e) {
            let t, n, s = (0, r.c)(5),
                o = `[data-chatgpt-conversation-selection-target="${e.conversationId}"]`;
            return s[0] !== e ? (t = t => (0, a.jsx)(oc, {
                ...e,
                selection: t
            }), s[0] = e, s[1] = t) : t = s[1], s[2] !== o || s[3] !== t ? (n = (0, a.jsx)(oa.a, {
                align: "start",
                targetSelector: o,
                children: t
            }), s[2] = o, s[3] = t, s[4] = n) : n = s[4], n
        }

        function oc(e) {
            let t, s, o, i, l, c, u, h = (0, r.c)(30),
                {
                    conversationId: p,
                    moreDetailsEnabled: g,
                    onAddSelectedText: m,
                    selection: v
                } = e,
                b = (0, d.y)(eg.a),
                y = (0, f.a)(),
                x = (0, eN.f)("4290238484"),
                w = (0, eN.f)("473637331"),
                C = (0, d.z)(os.b),
                _ = (0, d.x)(tm.y, p);
            h[0] !== _ || h[1] !== C || h[2] !== b ? (t = C && "tpp" === _ && "chatgpt-thread" === b.value.routeKind && null == b.value.workSideChat && !0, h[0] = _, h[1] = C, h[2] = b, h[3] = t) : t = h[3];
            let S = t;
            h[4] !== p || h[5] !== v.selectionRange ? (s = function(e) {
                let {
                    conversationId: t,
                    range: n
                } = e, a = n.startContainer instanceof Element ? n.startContainer : n.startContainer.parentElement, r = n.endContainer instanceof Element ? n.endContainer : n.endContainer.parentElement, s = a?.closest(oo);
                if (n.collapsed || null == s || !s.isConnected || s !== r?.closest(oo)) return null;
                let o = s.parentElement,
                    i = o?.getAttribute("data-chatgpt-selection-message-id");
                return !i || o?.getAttribute("data-chatgpt-selection-conversation-id") !== t || [...s.querySelectorAll('[data-writing-block-variant], [data-conversation-component="learning"], [contenteditable="true"], [data-markdown-copy="exclude"]')].some(e => n.intersectsNode(e)) ? null : {
                    markdownElement: s,
                    messageId: i
                }
            }({
                conversationId: p,
                range: v.selectionRange
            }), h[4] = p, h[5] = v.selectionRange, h[6] = s) : s = h[6];
            let j = s,
                I = j?.messageId ?? null;
            h[7] !== p || h[8] !== I ? (o = {
                conversationId: p,
                messageId: I
            }, h[7] = p, h[8] = I, h[9] = o) : o = h[9];
            let T = (0, d.x)(oi, o),
                E = (0, d.x)(tm.j, p),
                P = x && g && null != E && null != j && T?.author.role === "assistant";
            return h[10] !== S || h[11] !== b ? (i = S ? e => {
                n.e(971224).then(n.bind(n, "f8of")).then(t => {
                    let {
                        createAndOpenWorkSideChat: n
                    } = t;
                    return n(b, {
                        target: "right",
                        selectedText: e
                    })
                })
            } : void 0, h[10] = S, h[11] = b, h[12] = i) : i = h[12], h[13] !== P || h[14] !== w || h[15] !== m || h[16] !== v.selectionRange || h[17] !== j ? (l = !P || w ? e => {
                m(e, j?.messageId, null == j ? void 0 : function(e, t, n) {
                    let a = 0;
                    for (let r of rd(e, n.trim())) {
                        if (0 >= t.compareBoundaryPoints(Range.START_TO_START, r)) break;
                        a++
                    }
                    return a
                }(j.markdownElement, v.selectionRange, e))
            } : void 0, h[13] = P, h[14] = w, h[15] = m, h[16] = v.selectionRange, h[17] = j, h[18] = l) : l = h[18], h[19] !== P || h[20] !== p || h[21] !== y || h[22] !== b || h[23] !== j ? (c = P ? e => {
                Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(753405), n.e(321957), n.e(585419), n.e(877700), n.e(353230), n.e(882456), n.e(266281), n.e(81461), n.e(259288), n.e(909395), n.e(212487), n.e(17983), n.e(167649), n.e(16212), n.e(723842), n.e(722053), n.e(25506), n.e(871704)]).then(n.bind(n, "tZxZ")).then(t => {
                    let {
                        openChatGptEntitySidePanel: n
                    } = t;
                    return n(b, {
                        askSidebarParams: {
                            query: e
                        },
                        category: "ask_sidebar",
                        contentReferenceStartIndex: 0,
                        extraParams: null,
                        locale: y.locale,
                        messageId: j.messageId,
                        query: y.formatMessage({
                            id: "chatgpt.selection.moreDetailsTitle",
                            defaultMessage: "More details"
                        }),
                        shouldBlockExternalEgress: b.get(t6.e, p),
                        sourceConversationId: p
                    })
                })
            } : void 0, h[19] = P, h[20] = p, h[21] = y, h[22] = b, h[23] = j, h[24] = c) : c = h[24], h[25] !== v.selectedText || h[26] !== i || h[27] !== l || h[28] !== c ? (u = (0, a.jsx)(or.a, {
                conversationTerminology: "chat",
                selectedText: v.selectedText,
                onOpenSideChat: i,
                onAddSelectedText: l,
                onMoreDetails: c
            }), h[25] = v.selectedText, h[26] = i, h[27] = l, h[28] = c, h[29] = u) : u = h[29], u
        }
        var od = n("SEBt"),
            ou = n("JUxu");
        let oh = (0, m.lazy)(async () => ({
            default: (await Promise.resolve().then(n.bind(n, "taaw"))).CodexThreadReportDialog
        }));

        function op(e) {
            let t, n, s, o, i = (0, r.c)(11),
                {
                    sharedConversationId: l
                } = e,
                c = (0, d.y)(eT.a),
                u = (0, d.x)(ax.f, (0, m.useContext)(j.a));
            if (null != u) {
                let e, t;
                return i[0] !== u ? (e = (0, ax.b)(u), i[0] = u, i[1] = e) : e = i[1], i[2] !== e ? (t = (0, a.jsx)(ou.a, {
                    imageOnly: e
                }), i[2] = e, i[3] = t) : t = i[3], t
            }
            return i[4] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)("div", {
                className: "text-secondary",
                children: (0, a.jsx)(ey.a, {
                    id: "chatgptConversations.sharedConversation.copyDisclaimer",
                    defaultMessage: "This is a copy of a shared ChatGPT chat. It won't be added to memory."
                })
            }), i[4] = t) : t = i[4], i[5] !== c || i[6] !== l ? (n = e => {
                if (null == l) return;
                let t = e.currentTarget;
                (0, ni.f)(c, oh, {
                    reportEntityType: "share_link",
                    threadId: l,
                    onCloseAutoFocus: e => {
                        e.preventDefault();
                        let n = t.ownerDocument.activeElement;
                        t.isConnected && (n === t.ownerDocument.body || e.target instanceof HTMLElement && e.target.contains(n)) && t.focus({
                            preventScroll: !0
                        })
                    }
                }), (0, od.d)(c, l)
            }, i[5] = c, i[6] = l, i[7] = n) : n = i[7], i[8] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, a.jsx)(ey.a, {
                id: "chatgptConversations.sharedConversation.reportButton",
                defaultMessage: "Report conversation"
            }), i[8] = s) : s = i[8], i[9] !== n ? (o = (0, a.jsxs)("div", {
                className: "flex flex-col items-center gap-1 text-center text-xs select-none",
                children: [t, (0, a.jsx)(tc.a, {
                    className: "font-semibold",
                    color: "ghostActive",
                    onClick: n,
                    children: s
                })]
            }), i[9] = n, i[10] = o) : o = i[10], o
        }
        var og = n("AORd"),
            om = n("cP1f");

        function of(e) {
            let {
                turn: t
            } = e;
            return t.items.some(ov)
        }

        function ov(e) {
            return "assistant-message" === e.type || "generated-image" === e.type && null != e.src
        }

        function ob(e) {
            let t, n, o, i, l, c, u, h, p, g, f, v, b, y, x, w, C, _, S, I, T, E, P, M, k, R, N, O, L, z, F, B, D, G, H, q, W = (0, r.c)(241),
                {
                    ref: K,
                    printTitle: U,
                    trackReadState: V,
                    trackShownImpressions: Q,
                    composerRef: $,
                    workspace: Y,
                    shouldBlockMcpApps: J,
                    contentX: X,
                    conversationId: Z,
                    sectionIndex: ee,
                    composerConversationId: et,
                    composerLeadingContent: en,
                    aboveComposerContent: ea,
                    historyLoadingContent: er,
                    requiredSystemHints: es,
                    isCoveredByFloatingPanel: eo,
                    isFormOnly: ei,
                    isInlinePreview: el,
                    hideModelPicker: ec,
                    showFilePicker: ed,
                    disableAutoFocus: eu,
                    transcriptPresentation: eh,
                    scrollOrigin: em,
                    isChatConversation: ef,
                    customGptId: ev,
                    entries: eb,
                    errorMessage: ex,
                    hasLoadError: ew,
                    onRetryLoad: eC,
                    hasRenderableTurns: e_,
                    isComposerDisabled: eS,
                    readOnlyPlaceholder: ej,
                    moreDetailsEnabled: eI,
                    isConversationEmpty: eE,
                    showEmptyState: eP,
                    isConversationFetching: eA,
                    isConversationLoading: eM,
                    isSharedConversation: ek,
                    isSubmitDisabled: eR,
                    retainLiveModelPicker: eN,
                    isTemporaryChat: eO,
                    isTurnActive: eL,
                    isWorkConversation: ez,
                    onboardingPrelude: eB,
                    scrollStateConversationId: eD,
                    initialResponsePlacementKey: eG,
                    sharedConversationId: eH,
                    sharedPostRegulatedConnectorKind: eq,
                    showComposer: eU,
                    archivedPreviewFooter: eV,
                    showPendingLoadingMessage: eQ,
                    gptPluginMigrationBanner: e$,
                    awaitingGptContinuation: eY,
                    workOnlyConversionBanner: eJ,
                    onAddSelectedText: eX,
                    onSubmitAccepted: eZ
                } = e,
                e0 = void 0 === eP || eP,
                e1 = (0, d.y)(eT.a),
                e2 = (0, d.y)(eg.a),
                e3 = (0, d.z)(null),
                e4 = (0, d.x)(ax.f, (0, m.useContext)(j.a)),
                e5 = (0, d.z)(ep.a),
                e6 = (0, d.x)(eK.a, Z),
                e7 = Y?.fullscreenContent != null ? "content" : "workspace",
                e8 = (0, A.a)(el ? "embedded" : e7),
                e9 = (0, d.z)(s7.a),
                te = eU && e9?.source.turnContext.conversationId !== et,
                tn = "floating" === e8.placement,
                [ta, tr] = (0, m.useState)(!1),
                ts = ta && !e8.isHidden && !ei,
                to = Y?.fullscreenContent != null || tn && ts ? "floating" : "main",
                ti = (0, d.z)(s5.h),
                tl = ef && null == eH && null == e4 && null == eV,
                tc = Q && !eo,
                td = !eM && !eL && !ew && eE && !e_,
                tu = !el && "chatgpt-thread" === e2.value.routeKind && e2.value.workSideChat?.conversationId !== Z,
                th = (0, d.x)(tm.i, Z),
                tp = e0 && tl && td && null == th && !e6 && !tn,
                tg = null == ev ? "centered-home" : "home",
                tf = e0 && !e6 && (!tl || !eE),
                tv = (0, m.useRef)(null),
                tb = (0, m.useRef)(null),
                [ty, tx] = (0, m.useState)(null),
                tw = (0, n2.c)(),
                tC = el ? null : eD;
            W[0] !== tC || W[1] !== ty || W[2] !== tw ? (t = () => ({
                conversationKey: tC,
                responseSpacer: ty,
                windowZoom: tw
            }), W[0] = tC, W[1] = ty, W[2] = tw, W[3] = t) : t = W[3];
            let t_ = (0, eW.a)(t);
            W[4] !== e1 || W[5] !== tC || W[6] !== t_ ? (n = () => (function(e, t, n) {
                let a = (0, d.u)(eT.a, null == t ? 0 : e.get(sp.a, t)),
                    r = (0, d.u)(eT.a, () => null),
                    s = (0, d.u)(eT.a, () => null),
                    o = null,
                    i = null;

                function l(e) {
                    null != i && (null == e || e()) && (i = null)
                }
                return {
                    initialOffset$: a,
                    api$: r,
                    restoreState$: s,
                    onScroll: function(t) {
                        let {
                            conversationKey: a,
                            responseSpacer: r
                        } = n();
                        null != a && e.set(sp.a, a, (0, r5.a)(t, r?.getHeightPx() ?? 0))
                    },
                    cancelPendingRestore: l,
                    acceptSubmit() {
                        l(), e.set(a, 0)
                    },
                    onApiChange: t => e.set(r, t),
                    restoreReadingPosition: function(t) {
                        let a = i;
                        if (null == a) return;
                        let s = t.getScrollElement();
                        if (null == s || 0 === s.clientHeight) return;
                        if ("bottom" === a) {
                            l(), t.scrollToDistanceFromBottomPx(0, "instant");
                            return
                        }
                        t.shouldFollowContentGrowth() && t.holdViewport();
                        let o = a.turn,
                            c = null == o ? null : s.querySelector(`[data-turn-key="${CSS.escape(o.key)}"]`)?.getBoundingClientRect(),
                            d = a.top;
                        if (null != o && null != c) {
                            let {
                                windowZoom: e
                            } = n();
                            if ((0, n2.b)(c.height, e) <= Math.max(0, -o.offset)) return;
                            d = s.scrollTop + (0, n2.b)(c.top - s.getBoundingClientRect().top, e) - o.offset
                        }
                        let u = s.scrollHeight - s.clientHeight;
                        d <= u && ((null == o || null != c || e.get(r)?.getEntryGeometry(o.key) == null) && l(), t.compensateScrollToDistanceFromBottomPx(u - Math.max(0, d)))
                    },
                    captureBeforeHide: function(e) {
                        let t = e.getScrollElement();
                        return null != t && t.clientHeight > 0 && (o = i ?? (e.shouldFollowContentGrowth() && 1 >= (0, r5.b)(t) ? "bottom" : function(e, t) {
                            let n = e.scrollTop,
                                a = e.getBoundingClientRect();
                            for (let r of e.querySelectorAll("[data-turn-key]")) {
                                let e = r.getBoundingClientRect(),
                                    s = r.dataset.turnKey;
                                if (null != s && e.height > 0 && e.bottom > a.top && e.top < a.bottom) return {
                                    top: n,
                                    turn: {
                                        key: s,
                                        offset: (0, n2.b)(e.top - a.top, t)
                                    }
                                }
                            }
                            return {
                                top: n
                            }
                        }(t, n().windowZoom))), () => {
                            o = null
                        }
                    },
                    onRestoreStateChange: function(t) {
                        null != o && null != t && (i = o, e.set(s, t))
                    }
                }
            })(e1, tC, t_), W[4] = e1, W[5] = tC, W[6] = t_, W[7] = n) : n = W[7];
            let [tS] = (0, m.useState)(n), tj = (0, d.z)(tS.api$), tI = (0, d.z)(tS.restoreState$), tT = (0, d.z)(tS.initialOffset$), {
                cancelPendingRestore: tE
            } = tS, tP = null == tI ? eG : null, [tA, tM] = (0, m.useState)(!1);
            W[8] !== eb ? (o = () => eb, W[8] = eb, W[9] = o) : o = W[9];
            let tk = (0, eW.a)(o),
                {
                    revealLatestResponse: tR,
                    scrollToSearchTurn: tN,
                    scrollToDelayedImageCard: tO
                } = ((D = (0, r.c)(18))[0] !== tj || D[1] !== eb ? (N = () => ({
                    async scrollToMessage(e) {
                        let t = eb.find(t => {
                            let {
                                turn: n
                            } = t;
                            return n.messageIds.includes(e)
                        });
                        null != t && null != tj && await tj.scrollToKey(t.turnKey, void 0, {
                            align: "top"
                        })
                    }
                }), O = [eb, tj], D[0] = tj, D[1] = eb, D[2] = N, D[3] = O) : (N = D[2], O = D[3]), (0, m.useImperativeHandle)(K, N, O), D[4] !== tj || D[5] !== eb ? (L = (e, t) => (0, a$.c)(tj, eb.find(t => {
                    let {
                        id: n
                    } = t;
                    return n === e
                })?.turnKey, t), D[4] = tj, D[5] = eb, D[6] = L) : L = D[6], G = (0, eW.a)(L), D[7] !== tj || D[8] !== Z || D[9] !== eb ? (z = async e => {
                    let t = eb.find(t => {
                        let {
                            turn: n
                        } = t;
                        return n.messageIds.includes(e)
                    });
                    null != t && null != tj && await tj.scrollToKey(t.turnKey, t => t.querySelector(`[id="${CSS.escape(`delayed-image-gen-${Z}-${e}`)}"]`), {
                        align: "center"
                    })
                }, D[7] = tj, D[8] = Z, D[9] = eb, D[10] = z) : z = D[10], H = (0, eW.a)(z), D[11] !== tj?.scrollToKey || D[12] !== eb ? (F = function(e) {
                    let t = eb.findLast(of);
                    return (0, om.a)(tj?.scrollToKey, t?.turnKey, e)
                }, D[11] = tj?.scrollToKey, D[12] = eb, D[13] = F) : F = D[13], q = F, D[14] !== q || D[15] !== H || D[16] !== G ? (B = {
                    revealLatestResponse: q,
                    scrollToSearchTurn: G,
                    scrollToDelayedImageCard: H
                }, D[14] = q, D[15] = H, D[16] = G, D[17] = B) : B = D[17], B);
            W[10] === Symbol.for("react.memo_cache_sentinel") ? (i = e => (0, a$.a)(tb.current, e), W[10] = i) : i = W[10];
            let tL = (0, eW.a)(i),
                tz = `chatgpt:${Z}`;
            if (W[11] !== tE || W[12] !== Z || W[13] !== tk || W[14] !== tL || W[15] !== eO || W[16] !== e2 || W[17] !== tN || W[18] !== eH || W[19] !== e4 || W[20] !== tz) {
                let e;
                W[22] !== Z || W[23] !== eO || W[24] !== e2 || W[25] !== eH || W[26] !== e4 ? (e = async e => {
                    let t = e2.get(tm.j, Z);
                    !eO && null == eH && null == e4 && null != t && e2.get(aA.b) > 0 && await (0, aP.a)(e2, t, e)
                }, W[22] = Z, W[23] = eO, W[24] = e2, W[25] = eH, W[26] = e4, W[27] = e) : e = W[27], l = function(e) {
                    let {
                        getTurns: t,
                        routeContextId: n,
                        scrollAdapter: a,
                        ensureHistory: r
                    } = e, s = (0, ry.a)({
                        contextId: n,
                        searchMath: !0,
                        getTurns: () => t().map(e => {
                            let {
                                id: t,
                                turn: n
                            } = e;
                            return {
                                turnKey: t,
                                units: n.items.flatMap((e, t) => {
                                    if ("user-message" === e.type) {
                                        let n = e.message.trim();
                                        return 0 === n.length ? [] : [{
                                            unitId: (0, re.a)("user", t),
                                            text: n
                                        }]
                                    }
                                    if ("assistant-message" === e.type) {
                                        let n = (0, rw.a)(e.content, am.b),
                                            a = [],
                                            r = "";
                                        for (; e.content.includes(r);) r += "";
                                        let s = (0, rb.a)(function e(t, n, a, r) {
                                                let s = "",
                                                    o = 0;
                                                for (let i of t) {
                                                    let t = n.indexOf(i.raw, o); - 1 !== t && (s += n.slice(o, t), s += function(t, n, a) {
                                                        var r, s;
                                                        if ("math" === t.type && "text" in t && "string" == typeof t.text) return a(t.text);
                                                        if ("codexDirective" === (r = t).type && "name" in r && "string" == typeof r.name && "attributes" in r && null != r.attributes && "object" == typeof r.attributes) return function(e, t) {
                                                            if (e.name === am.a) {
                                                                let n = (0, rC.a)(e.attributes),
                                                                    a = (0, rC.b)(e.attributes),
                                                                    r = null != n ? t[n] : null == a ? void 0 : t.find(e => (0, am.l)(e) === a);
                                                                if (null == r) return "";
                                                                let s = (0, am.i)(r);
                                                                return "hidden" === s || "block" === s ? "" : (0, am.j)(r) ?? ""
                                                            }
                                                            return e.name === rv.a ? (0, rx.a)(e.attributes, "label") ?? "" : e.name === rv.b || e.name === rv.c ? "" : e.name === rf.a ? e.text ?? "" : null
                                                        }(t, n) ?? t.raw;
                                                        if ("tokens" in t && Array.isArray(t.tokens)) return e(t.tokens, t.raw, n, a);
                                                        if ("table" === t.type) return e([...t.header, ...t.rows.flat()].flatMap(e => e.tokens), t.raw, n, a);
                                                        if (!("list" === (s = t).type && "items" in s && Array.isArray(s.items))) return t.raw;
                                                        let o = "",
                                                            i = 0;
                                                        for (let r of t.items) {
                                                            let s = t.raw.indexOf(r.raw, i); - 1 !== s && (o += t.raw.slice(i, s), o += e(r.tokens, r.raw, n, a), i = s + r.raw.length)
                                                        }
                                                        return o + t.raw.slice(i)
                                                    }(i, a, r), o = t + i.raw.length)
                                                }
                                                return s + n.slice(o)
                                            }(n, e.content, e.contentReferences, e => (a.push(e), r))),
                                            o = 0 === a.length ? void 0 : s.split(r);
                                        return 0 === s.length && 0 === a.length ? [] : [{
                                            unitId: (0, re.a)("assistant", t),
                                            text: o?.join(" ") ?? s,
                                            textChunks: o,
                                            equations: a
                                        }]
                                    }
                                    return []
                                })
                            }
                        }),
                        scrollAdapter: a
                    });
                    return {
                        ...s,
                        search: async (e, t) => (await r?.(t?.signal), t?.signal?.throwIfAborted(), s.search(e, t))
                    }
                }({
                    getTurns: tk,
                    routeContextId: tz,
                    scrollAdapter: {
                        scrollToTurn: tN,
                        getTurnContainer: tL,
                        onNavigate: tE
                    },
                    ensureHistory: e
                }), W[11] = tE, W[12] = Z, W[13] = tk, W[14] = tL, W[15] = eO, W[16] = e2, W[17] = tN, W[18] = eH, W[19] = e4, W[20] = tz, W[21] = l
            } else l = W[21];
            let tF = l;
            W[28] !== tF.contextId ? (c = {
                containerRef: tb,
                contextId: tF.contextId
            }, W[28] = tF.contextId, W[29] = c) : c = W[29], (0, aX.a)(c);
            let tB = te && null == eV,
                tD = e5 && tB && !tn,
                tG = (0, a2.a)();
            W[30] !== Z || W[31] !== e_ || W[32] !== eo || W[33] !== ee || W[34] !== tG ? (u = {
                conversationId: Z,
                sectionIndex: ee,
                hasRenderableTurns: e_,
                isCoveredByFloatingPanel: eo,
                shouldReduceMotion: tG,
                containerRef: tb
            }, W[30] = Z, W[31] = e_, W[32] = eo, W[33] = ee, W[34] = tG, W[35] = u) : u = W[35];
            let tH = function(e) {
                    let t, n, a, s = (0, r.c)(12),
                        {
                            conversationId: o,
                            sectionIndex: i,
                            hasRenderableTurns: l,
                            isCoveredByFloatingPanel: c,
                            shouldReduceMotion: d,
                            containerRef: u
                        } = e,
                        h = (0, ot.a)(0);
                    s[0] !== o || s[1] !== i ? (t = {
                        conversationId: o,
                        sectionIndex: i
                    }, s[0] = o, s[1] = i, s[2] = t) : t = s[2];
                    let p = (0, m.useRef)(t);
                    return s[3] !== u || s[4] !== o || s[5] !== l || s[6] !== c || s[7] !== i || s[8] !== h || s[9] !== d ? (n = () => {
                        let e;
                        if (!l) return;
                        let t = p.current;
                        p.current = {
                            conversationId: o,
                            sectionIndex: i
                        };
                        let n = u.current;
                        if (null == n || d || c || t.conversationId !== o || null == t.sectionIndex || null == i || t.sectionIndex === i) return;
                        let a = Math.sign(i - t.sectionIndex),
                            r = () => {
                                Array.from(n.querySelectorAll('[data-markdown-text-style="assistant-message"]')).some(on) && 0 !== n.clientWidth && (s.disconnect(), h.set(a * n.clientWidth), e = (0, r2.a)(h, 0, {
                                    duration: .3,
                                    ease: rJ.d
                                }))
                            },
                            s = new MutationObserver(r);
                        return s.observe(n, {
                            childList: !0,
                            characterData: !0,
                            subtree: !0
                        }), r(), () => {
                            s.disconnect(), e?.stop(), h.set(0)
                        }
                    }, a = [o, i, l, d, c, h, u], s[3] = u, s[4] = o, s[5] = l, s[6] = c, s[7] = i, s[8] = h, s[9] = d, s[10] = n, s[11] = a) : (n = s[10], a = s[11]), (0, m.useLayoutEffect)(n, a), h
                }(u),
                tq = tB && tn,
                [tW, tK] = (0, m.useState)(null),
                [tU, tV] = (0, m.useState)(null),
                [tQ, t$] = (0, m.useState)(null),
                tY = ek && tB && !eS && !tn && !e5,
                [tJ, tX] = (0, m.useState)(null);
            W[36] !== eY || W[37] !== Z || W[38] !== e_ || W[39] !== eO || W[40] !== eq || W[41] !== eU ? (h = eU && !eY ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(aV.BrowserComposerDisclaimer, {
                    supportsMessageDisclosures: !0,
                    conversationId: Z,
                    hasUserMessage: e_,
                    isTemporaryChat: eO,
                    regulatedConnectorKindOverride: eq
                })
            }) : void 0, W[36] = eY, W[37] = Z, W[38] = e_, W[39] = eO, W[40] = eq, W[41] = eU, W[42] = h) : h = W[42];
            let tZ = h;
            W[43] !== Z || W[44] !== ex || W[45] !== e_ || W[46] !== eS || W[47] !== eR || W[48] !== ez || W[49] !== eU || W[50] !== eQ ? (p = e_ ? null : (0, a.jsx)(rg.a, {
                conversationId: Z,
                errorMessage: ex,
                isWorkConversation: ez,
                showPendingLoadingMessage: eQ,
                showRequestUserInputStatus: eU && !eS && !eR
            }), W[43] = Z, W[44] = ex, W[45] = e_, W[46] = eS, W[47] = eR, W[48] = ez, W[49] = eU, W[50] = eQ, W[51] = p) : p = W[51];
            let t0 = p;
            W[52] !== Z || W[53] !== ez || W[54] !== eH || W[55] !== e4 ? (g = ez && null == eH && null == e4 ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(aU, {
                    conversationId: Z
                }, Z)
            }) : null, W[52] = Z, W[53] = ez, W[54] = eH, W[55] = e4, W[56] = g) : g = W[56];
            let t1 = g;
            W[57] !== eV || W[58] !== t1 ? (f = null != eV ? (0, a.jsxs)(a.Fragment, {
                children: [t1, eV]
            }) : null, W[57] = eV, W[58] = t1, W[59] = f) : f = W[59];
            let t2 = f;
            W[60] !== el ? (v = el ? (0, a.jsx)(tt.d, {
                status: "chatgpt"
            }) : (0, a.jsx)(tt.b, {
                status: "chatgpt"
            }), W[60] = el, W[61] = v) : v = W[61];
            let t3 = v;
            W[62] !== ea || W[63] !== t2 || W[64] !== eY || W[65] !== et || W[66] !== en || W[67] !== $ || W[68] !== Z || W[69] !== eu || W[70] !== tZ || W[71] !== t0 || W[72] !== eb || W[73] !== t1 || W[74] !== tW || W[75] !== e$ || W[76] !== ew || W[77] !== e_ || W[78] !== ec || W[79] !== e5 || W[80] !== eS || W[81] !== eM || W[82] !== eo || W[83] !== ei || W[84] !== tn || W[85] !== ti || W[86] !== el || W[87] !== ek || W[88] !== eR || W[89] !== eO || W[90] !== ez || W[91] !== tc || W[92] !== eZ || W[93] !== ej || W[94] !== tS || W[95] !== tY || W[96] !== es || W[97] !== ty || W[98] !== eN || W[99] !== tR || W[100] !== e8.isHidden || W[101] !== eH || W[102] !== e4 || W[103] !== te || W[104] !== ed || W[105] !== tq || W[106] !== tD || W[107] !== V || W[108] !== to || W[109] !== eJ || W[110] !== Y ? (b = t2 ?? (te ? (0, a.jsxs)(sv.a.Provider, {
                value: eb.at(-1) ?? null,
                children: [ei || tn ? null : (0, a.jsx)(a0.a, {
                    onNavigate: tR
                }, Z), tn ? null : en, (0, a.jsx)(sZ, {
                    requiredSystemHints: es,
                    composerRef: $,
                    workspace: Y,
                    isInlinePreview: el,
                    hideModelPicker: ec,
                    showFilePicker: ed,
                    disableAutoFocus: eu,
                    conversationId: et,
                    isImageEditComposer: ti,
                    disabled: eS,
                    readOnlyPlaceholder: ej,
                    awaitingGptContinuation: eY,
                    headerContent: t1,
                    aboveComposerContent: (0, a.jsxs)(a.Fragment, {
                        children: [tY ? (0, a.jsx)("div", {
                            ref: t$,
                            className: "empty:hidden"
                        }) : null, ea, !eM && !ew && e_ && !eY && eJ, e5 ? null : e$, tq && t0]
                    }),
                    isFullscreenComposer: tn,
                    isHidden: e8.isHidden,
                    trackReadState: V && !eo,
                    trackShownImpressions: tc,
                    isSharedConversation: ek,
                    isSubmitDisabled: eR,
                    retainLiveModelPicker: eN && !ti,
                    followupPortalTarget: tW,
                    takeoverDisclaimerRef: tX,
                    showConversationFollowups: null == eH && null == e4 && !eO && !ez && !tn,
                    isTemporaryChat: eO,
                    isWorkConversation: ez,
                    responseSpacerState: ty,
                    renderTranscript: e => {
                        let {
                            isVisible: t
                        } = e;
                        return (0, a.jsx)(rV, {
                            entries: eb,
                            historyLoader: eO || null != eH || null != e4 ? null : (0, a.jsx)(s8.a, {
                                conversationId: Z
                            }),
                            isVisible: t,
                            rendersWidgets: "floating" === to,
                            onVisibilityChange: tr
                        }, Z)
                    },
                    showVoiceStage: !tD,
                    voiceDisclaimer: e5 && !tD ? tZ : void 0,
                    onSubmitAccepted: e => {
                        tS.acceptSubmit(), eZ?.(e)
                    }
                }, `${et}:${ti?"image-edit":"chat"}`)]
            }) : t1), W[62] = ea, W[63] = t2, W[64] = eY, W[65] = et, W[66] = en, W[67] = $, W[68] = Z, W[69] = eu, W[70] = tZ, W[71] = t0, W[72] = eb, W[73] = t1, W[74] = tW, W[75] = e$, W[76] = ew, W[77] = e_, W[78] = ec, W[79] = e5, W[80] = eS, W[81] = eM, W[82] = eo, W[83] = ei, W[84] = tn, W[85] = ti, W[86] = el, W[87] = ek, W[88] = eR, W[89] = eO, W[90] = ez, W[91] = tc, W[92] = eZ, W[93] = ej, W[94] = tS, W[95] = tY, W[96] = es, W[97] = ty, W[98] = eN, W[99] = tR, W[100] = e8.isHidden, W[101] = eH, W[102] = e4, W[103] = te, W[104] = ed, W[105] = tq, W[106] = tD, W[107] = V, W[108] = to, W[109] = eJ, W[110] = Y, W[111] = b) : b = W[111];
            let t4 = b;
            W[112] !== Z || W[113] !== eo || W[114] !== el || W[115] !== e3 || W[116] !== eH || W[117] !== e4 ? (y = void 0, W[112] = Z, W[113] = eo, W[114] = el, W[115] = e3, W[116] = eH, W[117] = e4, W[118] = y) : y = W[118];
            let t5 = y;
            W[119] !== e1 || W[120] !== Z || W[121] !== V ? (x = e => {
                V && null != e1.get(aZ.b, Z) && e1.get(tm.L, Z) && (0, a1.a)(e1, e) && (0, sm.b)(e1, Z).catch(ow)
            }, W[119] = e1, W[120] = Z, W[121] = V, W[122] = x) : x = W[122];
            let t6 = x,
                t7 = eo || void 0;
            W[123] === Symbol.for("react.memo_cache_sentinel") ? (w = null, W[123] = w) : w = W[123], W[124] !== Z || W[125] !== eo || W[126] !== tn || W[127] !== V ? (C = !V || tn || eo ? null : (0, a.jsx)(sf.a, {
                conversationId: Z
            }), W[124] = Z, W[125] = eo, W[126] = tn, W[127] = V, W[128] = C) : C = W[128], W[129] !== eV || W[130] !== Z || W[131] !== el || W[132] !== eH || W[133] !== e4 ? (_ = el || null != eH || null != e4 || null != eV ? null : (0, a.jsx)(sg, {
                conversationId: Z
            }, Z), W[129] = eV, W[130] = Z, W[131] = el, W[132] = eH, W[133] = e4, W[134] = _) : _ = W[134], W[135] !== Z || W[136] !== eM || W[137] !== el || W[138] !== eO || W[139] !== eH || W[140] !== e4 ? (S = el || eM || eO || null != eH || null != e4 ? null : (0, a.jsx)(s9, {
                conversationId: Z
            }), W[135] = Z, W[136] = eM, W[137] = el, W[138] = eO, W[139] = eH, W[140] = e4, W[141] = S) : S = W[141], W[142] !== Z || W[143] !== eb || W[144] !== tA || W[145] !== eA || W[146] !== eM || W[147] !== el || W[148] !== tR || W[149] !== eH || W[150] !== e4 || W[151] !== tj ? (I = el || eM || null != eH || null != e4 ? null : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(n7, {
                    conversationId: Z,
                    entries: eb,
                    turnListApi: tj
                }), (0, a.jsx)(a5.a, {
                    ready: !eA && tA && null != tj && eb.length > 0,
                    onNavigate: tR
                })]
            }), W[142] = Z, W[143] = eb, W[144] = tA, W[145] = eA, W[146] = eM, W[147] = el, W[148] = tR, W[149] = eH, W[150] = e4, W[151] = tj, W[152] = I) : I = W[152], W[153] !== eV || W[154] !== tE || W[155] !== tp || W[156] !== et || W[157] !== X || W[158] !== th || W[159] !== Z || W[160] !== tF || W[161] !== tZ || W[162] !== t0 || W[163] !== eb || W[164] !== t4 || W[165] !== ew || W[166] !== e_ || W[167] !== tA || W[168] !== er || W[169] !== tg || W[170] !== tT || W[171] !== tP || W[172] !== e5 || W[173] !== e6 || W[174] !== eS || W[175] !== eA || W[176] !== eM || W[177] !== eo || W[178] !== ei || W[179] !== tn || W[180] !== el || W[181] !== td || W[182] !== tu || W[183] !== ek || W[184] !== eO || W[185] !== eL || W[186] !== ez || W[187] !== eI || W[188] !== t5 || W[189] !== tc || W[190] !== eX || W[191] !== eC || W[192] !== eB || W[193] !== t3 || W[194] !== ef || W[195] !== U || W[196] !== tS || W[197] !== tQ || W[198] !== tU || W[199] !== tY || W[200] !== ty || W[201] !== e8.isChatPaneHidden || W[202] !== e2 || W[203] !== em || W[204] !== tO || W[205] !== tH || W[206] !== eH || W[207] !== e4 || W[208] !== J || W[209] !== tG || W[210] !== eU || W[211] !== te || W[212] !== tf || W[213] !== tB || W[214] !== tq || W[215] !== tD || W[216] !== tJ || W[217] !== eh || W[218] !== tj || W[219] !== Y ? (T = Y?.fullscreenContent != null ? (0, a.jsxs)(a.Fragment, {
                children: [!J && Y.fullscreenContent, t4]
            }) : (0, a.jsxs)(a6.a, {
                scrollAttributionKey: tc ? eb.at(-1)?.turnKey : void 0,
                viewportOverlay: ei || el || ez || null != eH || null != e4 || null != eV || eo || tn ? null : (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(sx, {
                        conversationId: Z
                    }, Z)
                }),
                hideTranscript: ei,
                active: !eM && (!e_ || null != tj),
                presentation: eh ?? (el ? "compact" : "default"),
                contentX: X,
                preserveReadingPassage: !ez && !el,
                supportsComposerExpansion: tB && !tn && null == Y,
                footerPlacement: tp ? tg : "bottom",
                followContentGrowth: !ef,
                initialOffset: tT,
                preserveViewportOnContentGrowth: ef,
                scrollOrigin: em,
                onScroll: tS.onScroll,
                onUserScrollIntent: tE,
                scrollToBottomButton: !te || tn || tD ? void 0 : {
                    isWorking: eL
                },
                threadEndContent: e5 ? void 0 : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        ref: tK,
                        className: eF.a
                    }), null == tJ ? tZ : (0, n1.createPortal)(tZ, tJ)]
                }),
                footerLeadingContent: tD ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)("div", {
                            className: eF.a,
                            children: (0, a.jsx)(a3.a, {})
                        })
                    }), (0, a.jsx)("div", {
                        className: "overflow-hidden electron:[scrollbar-gutter:stable_both-edges]",
                        children: tZ
                    })]
                }) : t5,
                footer: t4,
                children: [el || eM || null != eH ? null : (0, a.jsx)(rp, {
                    conversationId: Z,
                    entries: eb,
                    isConversationFetching: eA,
                    turnListApi: tj
                }), (0, a.jsxs)(n0.a.div, {
                    ref: tb,
                    style: {
                        x: tH
                    },
                    "data-chatgpt-conversation-selection-target": Z,
                    "data-rail-chat-transcript": tu || void 0,
                    className: (0, nZ.b)("flex min-h-full flex-1 flex-col gap-1.5 pb-5", el && "pt-5"),
                    "data-thread-find-target": "conversation",
                    onFocusCapture: () => {
                        (0, aJ.K)(e2, "conversation")
                    },
                    onMouseDownCapture: () => {
                        (0, aJ.K)(e2, "conversation")
                    },
                    children: [(0, a.jsxs)(m.Suspense, {
                        fallback: (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(s.b, {
                                name: "conversation content"
                            }), t3]
                        }),
                        children: [el || eM ? null : (0, a.jsx)(aY.a, {
                            conversationSource: tF
                        }), eo || e8.isChatPaneHidden || eO || null != eH || null != e4 ? null : er ?? (0, a.jsx)(s8.a, {
                            conversationId: Z
                        }), (0, a.jsx)(og.b, {
                            conversationId: Z
                        }), (null != eH || null != e4) && e_ ? (0, a.jsx)(op, {
                            sharedConversationId: eH
                        }) : null, null == eB ? null : (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)("div", {
                                className: eF.a,
                                children: eB
                            })
                        }), null == th || eM ? null : (0, a.jsx)(a7.a, {
                            conversationId: Z,
                            branchSource: {
                                conversationId: th.metadata.source_conversation_id,
                                title: th.metadata.source_conversation_title,
                                gizmoId: th.metadata.source_conversation_gizmo_id,
                                ownerId: th.metadata.source_conversation_owner_id
                            }
                        }), ew ? (0, a.jsx)(aH, {
                            isFetching: eA,
                            isSharedConversation: ek,
                            onRetry: eC
                        }) : eM ? t3 : e_ ? (0, a.jsxs)(s6.a, {
                            value: tO,
                            children: [el || eo ? null : (0, a.jsxs)(a.Fragment, {
                                children: [eO || null != eH || null != e4 ? null : (0, a.jsx)(a.Fragment, {
                                    children: (0, a.jsx)(aL, {
                                        conversationId: Z
                                    })
                                }), (0, a.jsx)(aR, {
                                    entries: eb,
                                    title: U,
                                    TurnRowComponent: rU
                                })]
                            }), (0, a.jsx)(oe.a, {
                                enabled: tY,
                                aboveComposer: tQ,
                                belowMessage: tU,
                                children: (0, a.jsx)(ss, {
                                    viewportRef: tv,
                                    isTurnActive: eL,
                                    conversationId: Z,
                                    entries: eb,
                                    readingPosition: tS,
                                    isInlinePreview: el,
                                    hasVisibleContent: tA,
                                    onVisibleContentReady: () => tM(!0),
                                    responseSpacerState: ty
                                })
                            }), tY ? (0, a.jsx)("div", {
                                ref: tV,
                                className: "empty:hidden"
                            }) : null]
                        }) : tf && null == th && (0, a.jsx)("div", {
                            className: "rounded-xl border border-default bg-surface-secondary/92 p-4 text-sm text-codex-description",
                            "data-rail-chat-empty": tu && td || void 0,
                            children: (0, a.jsx)(ey.a, {
                                id: "chatgptConversations.emptyConversation",
                                defaultMessage: "No renderable ChatGPT messages were found in this conversation"
                            })
                        }), !tq && t0, (0, a.jsx)(sh.a, {
                            conversationId: et,
                            isWorkConversation: ez
                        }), eU && !eS ? (0, a.jsx)(ol, {
                            conversationId: Z,
                            moreDetailsEnabled: eI,
                            onAddSelectedText: eX
                        }) : null]
                    }), el ? null : (0, a.jsx)(rm.a, {
                        preserveResponseViewport: e => tv.current?.holdForResponse(e) ?? !1,
                        conversationId: Z,
                        initialPlacementKey: tP,
                        isActiveVoiceConversation: e5 && e6,
                        isLoadingHistory: eM,
                        latestUserTurnKey: eb.findLast(oy)?.turnKey,
                        onResponseSpacerStateChange: tx
                    }), tD ? (0, a.jsx)(n0.a.div, {
                        className: "pointer-events-none shrink-0",
                        "aria-hidden": !0,
                        initial: {
                            height: 0
                        },
                        animate: {
                            height: 112
                        },
                        transition: tG ? a4.c : a4.b
                    }) : null]
                })]
            }), W[153] = eV, W[154] = tE, W[155] = tp, W[156] = et, W[157] = X, W[158] = th, W[159] = Z, W[160] = tF, W[161] = tZ, W[162] = t0, W[163] = eb, W[164] = t4, W[165] = ew, W[166] = e_, W[167] = tA, W[168] = er, W[169] = tg, W[170] = tT, W[171] = tP, W[172] = e5, W[173] = e6, W[174] = eS, W[175] = eA, W[176] = eM, W[177] = eo, W[178] = ei, W[179] = tn, W[180] = el, W[181] = td, W[182] = tu, W[183] = ek, W[184] = eO, W[185] = eL, W[186] = ez, W[187] = eI, W[188] = t5, W[189] = tc, W[190] = eX, W[191] = eC, W[192] = eB, W[193] = t3, W[194] = ef, W[195] = U, W[196] = tS, W[197] = tQ, W[198] = tU, W[199] = tY, W[200] = ty, W[201] = e8.isChatPaneHidden, W[202] = e2, W[203] = em, W[204] = tO, W[205] = tH, W[206] = eH, W[207] = e4, W[208] = J, W[209] = tG, W[210] = eU, W[211] = te, W[212] = tf, W[213] = tB, W[214] = tq, W[215] = tD, W[216] = tJ, W[217] = eh, W[218] = tj, W[219] = Y, W[220] = T) : T = W[220], W[221] !== eo || W[222] !== t6 || W[223] !== t7 || W[224] !== C || W[225] !== _ || W[226] !== S || W[227] !== I || W[228] !== T ? (E = (0, a.jsxs)("div", {
                onKeyDownCapture: t6,
                onPointerDownCapture: t6,
                onWheelCapture: t6,
                className: "contents",
                "aria-hidden": t7,
                inert: eo,
                children: [w, C, _, S, I, T]
            }), W[221] = eo, W[222] = t6, W[223] = t7, W[224] = C, W[225] = _, W[226] = S, W[227] = I, W[228] = T, W[229] = E) : E = W[229];
            let t8 = E,
                t9 = !el,
                ne = "main" === to;
            W[230] !== t9 || W[231] !== ne ? (P = {
                presentation: "main",
                preserveActivityDisclosures: t9,
                rendersWidgets: ne
            }, W[230] = t9, W[231] = ne, W[232] = P) : P = W[232];
            let nt = !ts && (ei || eo || e8.isChatPaneHidden || Y?.fullscreenContent != null);
            return W[233] !== nt ? (M = (0, a.jsx)(s.b, {
                name: "conversation hidden",
                active: nt
            }), W[233] = nt, W[234] = M) : M = W[234], W[235] !== t8 ? (k = (0, a.jsx)(aQ.a, {
                children: t8
            }), W[235] = t8, W[236] = k) : k = W[236], W[237] !== P || W[238] !== M || W[239] !== k ? (R = (0, a.jsxs)(d.b, {
                scope: rT,
                value: P,
                children: [M, k]
            }), W[237] = P, W[238] = M, W[239] = k, W[240] = R) : R = W[240], R
        }

        function oy(e) {
            let {
                turn: t
            } = e;
            return t.items.some(ox)
        }

        function ox(e) {
            return "user-message" === e.type
        }

        function ow() {}
        var oC = n("gCr7");
        n("i1of");
        var o_ = n("FQMS"),
            oS = n("alJ6"),
            oj = n("u9iS"),
            oI = n("fNPc"),
            oT = n("vVgo"),
            oE = n("T33u"),
            oP = n("EpL9");

        function oA(e) {
            let {
                conversationId: t,
                courseId: n
            } = e;
            return `chatgpt-learning-course:${JSON.stringify([t,n])}`
        }
        let oM = (0, d.d)(eg.a, (e, t) => {
                let {
                    get: n
                } = t;
                return n(tq.h) && n(tq.i) && n(sw.l.activeTab$)?.tabId === oA(e)
            }),
            ok = (0, tu.a)(async () => {
                let {
                    CoursePanelTab: e
                } = await Promise.all([n.e(753405), n.e(321957), n.e(585419), n.e(877700), n.e(353230), n.e(882456), n.e(266281), n.e(81461), n.e(259288), n.e(593724), n.e(122290), n.e(35523), n.e(909395), n.e(212487), n.e(17983), n.e(167649), n.e(723842), n.e(780567), n.e(203953)]).then(n.bind(n, "lbEC"));
                return e
            }, {
                propagateLoadError: !0
            }),
            oR = (0, oP.k)("chatgpt-learning-course", ok, {
                dropDestinations: ["right"],
                isAvailable: (e, t) => "chatgpt-thread" === e.value.routeKind && (null == t || e.value.conversationId === t.conversationId),
                paneWidth: () => ({
                    defaultWidth: 480,
                    storageKey: "app-shell:learning-course-width"
                }),
                showInNewTabLauncher: !1,
                open: oN
            });

        function oN(e, t) {
            let {
                conversationId: n,
                courseId: r
            } = t, {
                preserveFocus: s = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o = e.get(I.f), i = e.get(I.j), l = () => "chatgpt-thread" === e.value.routeKind && e.value.conversationId === n && e.get(eI.c)?.pathname === e.value.pathname && e.get(I.f) === o && e.get(I.j) === i;
            if (!l() || "" === r) return;
            let c = oA({
                conversationId: n,
                courseId: r
            });
            e.get(oM, {
                conversationId: n,
                courseId: r
            }) ? sw.l.closeTab(e, c) : (0, sw.h)(e, oR, {
                target: "right",
                revealAndFocus: !0,
                preserveFocus: s,
                shouldOpen: l,
                id: c,
                icon: (0, a.jsx)(td.nb, {}),
                title: e.get(nb.a).formatMessage({
                    id: "chatgptConversations.coursePanel.title",
                    defaultMessage: "Lesson plan"
                }),
                props: {
                    conversationId: n,
                    courseId: r,
                    accountId: o,
                    userId: i
                }
            })
        }
        var oO = n("MgyE"),
            oL = n("gyrn"),
            oz = n("ckwE"),
            oF = n("kHi2");

        function oB(e) {
            let t, n = (0, r.c)(3),
                {
                    children: s
                } = e,
                [o] = (0, m.useState)(oD);
            return n[0] !== o || n[1] !== s ? (t = (0, a.jsx)(aM.a, {
                value: o,
                children: s
            }), n[0] = o, n[1] = s, n[2] = t) : t = n[2], t
        }

        function oD() {
            let e = null,
                t = new Set,
                n = n => {
                    for (let a of (e = n, t)) a()
                };
            return {
                getSnapshot: () => e,
                register: t => (n(t), () => {
                    e === t && n(null)
                }),
                subscribe: e => (t.add(e), () => {
                    t.delete(e)
                })
            }
        }

        function oG(e) {
            let t, n, s, o = (0, r.c)(8),
                {
                    children: i,
                    courseChatId: l
                } = e,
                c = (0, d.y)(eg.a);
            o[0] !== l || o[1] !== c ? (t = "chatgpt-thread" === c.value.routeKind && c.value.conversationId === l ? c.get(oF.b) : void 0, o[0] = l, o[1] = c, o[2] = t) : t = o[2];
            let u = t;
            return o[3] !== i ? (n = (0, a.jsx)(oB, {
                children: i
            }), o[3] = i, o[4] = n) : n = o[4], o[5] !== u || o[6] !== n ? (s = (0, a.jsx)(oz.a, {
                binding: u,
                children: n
            }), o[5] = u, o[6] = n, o[7] = s) : s = o[7], s
        }
        var oH = n("MDmT"),
            oq = n("Fjze");

        function oW(e) {
            let t, n, a, s = (0, r.c)(7),
                {
                    sharedConversationId: o
                } = e,
                i = (0, d.y)(eT.a),
                l = null != o;
            s[0] !== i || s[1] !== o ? (t = () => {
                null != o && (nl.Request.safePost("/received-shares/open", {
                    requestBody: {
                        share_kind: "conversation",
                        share_id: o
                    }
                }).then(() => i.queryClient.invalidateQueries({
                    queryKey: ["opened-shared-links"]
                })).catch(oK), (0, ec.a)(i, oq.a, {
                    sharedConversationId: o
                }))
            }, s[0] = i, s[1] = o, s[2] = t) : t = s[2];
            let c = (0, m.useEffectEvent)(t);
            return s[3] !== c ? (n = () => {
                c()
            }, s[3] = c, s[4] = n) : n = s[4], s[5] !== l ? (a = [l], s[5] = l, s[6] = a) : a = s[6], (0, m.useEffect)(n, a), null
        }

        function oK() {}
        var oU = n("GigQ"),
            oV = n("JKdL"),
            oQ = n("d107"),
            o$ = n("FGv0"),
            oY = n("r9i9"),
            oJ = n("tdfh"),
            oX = n("uQqo"),
            oZ = n("yi1v"),
            o0 = n("Mr9N");

        function o1(e) {
            let t, s, o, i, l, c = (0, r.c)(16),
                {
                    data: u
                } = e,
                h = (0, d.y)(eT.a),
                p = (0, f.a)();
            c[0] !== p ? (t = p.formatMessage(ew.a.headerShare), c[0] = p, c[1] = t) : t = c[1];
            let g = t,
                [v, b] = (0, m.useState)(!1);
            return c[2] !== u || c[3] !== v || c[4] !== h ? (s = () => {
                v || (b(!0), (async function(e, t) {
                    let a = t.sharedPost,
                        [r] = a?.attachments[0]?.kind === "media_generation" ? (0, oX.a)(a, (0, oX.b)(a)) : [],
                        s = () => (0, oY.j)(t.conversation, t.conversation.current_node ?? t.dialogProps.currentNodeId, 1 / 0, void 0, (0, nX.b)(e.get, t.dialogProps.serverConversationId)),
                        o = crypto.randomUUID();
                    (0, od.c)(e, {
                        attachmentType: t.attachmentType,
                        contentType: t.contentType,
                        shareId: t.shareId,
                        shareSessionId: o
                    });
                    let i = t.dialogProps.receiverShareLink;
                    if ((0, oZ.a)() && null != i && ("conversation" === i.contentType || "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_MESSAGE_SLICE" === t.attachmentType)) {
                        if ("unsupported" !== await (0, oZ.b)(e, {
                                url: i.shareLinkUrl,
                                title: t.dialogProps.title ?? void 0
                            }, {
                                actor: "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER",
                                attachmentType: t.attachmentType,
                                contentType: t.contentType,
                                shareId: t.shareId,
                                shareSessionId: o,
                                source: "CHATGPT_SHARE_FLOW_SOURCE_RECEIVER_HEADER"
                            })) return;
                        if ("conversation" === i.contentType) return void(0, ni.f)(e, oJ.a, {
                            ...t.dialogProps,
                            shareSessionId: o
                        })
                    }
                    if (i?.contentType === "conversation") {
                        let a = (0, od.b)(e, {
                                actor: "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER",
                                shareId: t.shareId,
                                shareSessionId: o,
                                source: "CHATGPT_SHARE_FLOW_SOURCE_RECEIVER_HEADER",
                                usedExistingLink: !0,
                                omitSheetType: !0
                            }),
                            r = await (0, o$.a)(Promise.resolve(i.shareLinkUrl));
                        if (a({
                                result: r ? "link-copied" : "copy-failed",
                                shareId: t.shareId
                            }), r) {
                            let {
                                showConversationShareCopiedToast: t
                            } = await n.e(555532).then(n.bind(n, "euaP"));
                            t(e, null, !0 === i.isWorkspaceOnly)
                        } else(0, ni.f)(e, oJ.a, {
                            ...t.dialogProps,
                            previewTurns: s(),
                            recoveryShareLink: i,
                            shareSessionId: o
                        });
                        return
                    }(0, ni.f)(e, oJ.a, {
                        ...t.dialogProps,
                        image: r?.src == null ? void 0 : {
                            alt: t.dialogProps.title ?? "",
                            item: r,
                            previewSrc: r.src
                        },
                        previewTurns: null != r ? void 0 : s(),
                        privacyNotices: (0, oY.k)({
                            conversation: t.conversation,
                            projectId: null
                        }),
                        shareSessionId: o
                    })
                })(h, u).finally(() => b(!1)))
            }, c[2] = u, c[3] = v, c[4] = h, c[5] = s) : s = c[5], c[6] !== v ? (o = v ? null : (0, a.jsx)(ej.a, {
                asset: o0.a
            }), c[6] = v, c[7] = o) : o = c[7], c[8] !== v || c[9] !== g || c[10] !== s || c[11] !== o ? (i = (0, a.jsx)(tc.a, {
                "aria-label": g,
                color: "ghostActive",
                loading: v,
                size: "toolbar",
                uniform: !0,
                onClick: s,
                children: o
            }), c[8] = v, c[9] = g, c[10] = s, c[11] = o, c[12] = i) : i = c[12], c[13] !== g || c[14] !== i ? (l = (0, a.jsx)(ti.a, {
                content: g,
                children: i
            }), c[13] = g, c[14] = i, c[15] = l) : l = c[15], l
        }
        var o2 = n("MVHH"),
            o3 = n("rhKI"),
            o4 = n("PP3M"),
            o5 = n("jAnS"),
            o6 = n("CFOe"),
            o7 = n("WFY2"),
            o8 = n("JNtf"),
            o9 = n("mUDD");

        function ie(e) {
            let t, n, s, o, i, l, c, d, u, h, p, g, m, f = (0, r.c)(31),
                {
                    canSave: v,
                    isPending: b,
                    onCancel: y,
                    onClose: x,
                    onSave: w
                } = e;
            f[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(ey.a, {
                id: "chatgptConversations.temporaryChat.save.close",
                defaultMessage: "Close"
            }), f[0] = t) : t = f[0], f[1] !== b || f[2] !== x ? (n = e => {
                e || b || x()
            }, f[1] = b, f[2] = x, f[3] = n) : n = f[3];
            let C = !b;
            f[4] !== v || f[5] !== w ? (s = e => {
                e.preventDefault(), v && w()
            }, f[4] = v, f[5] = w, f[6] = s) : s = f[6], f[7] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, a.jsx)(o8.e, {
                children: (0, a.jsx)(ey.a, {
                    id: "chatgptConversations.temporaryChat.save.title",
                    defaultMessage: "Save chat?"
                })
            }), f[7] = o) : o = f[7], f[8] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(o9.e, {
                children: (0, a.jsx)(o9.d, {
                    className: "select-none",
                    title: o,
                    subtitle: (0, a.jsx)(o8.d, {
                        children: (0, a.jsx)(ey.a, {
                            id: "chatgptConversations.temporaryChat.save.description.regularChatSettings",
                            defaultMessage: "This chat will now be included in your history. It will follow your memory and model training settings used for regular chats."
                        })
                    })
                })
            }), f[8] = i) : i = f[8], f[9] !== y || f[10] !== x ? (l = () => {
                y?.(), x()
            }, f[9] = y, f[10] = x, f[11] = l) : l = f[11], f[12] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)(ey.a, {
                id: "chatgptConversations.temporaryChat.save.cancel",
                defaultMessage: "Cancel"
            }), f[12] = c) : c = f[12], f[13] !== b || f[14] !== l ? (d = (0, a.jsx)(tc.a, {
                color: "secondary",
                disabled: b,
                onClick: l,
                children: c
            }), f[13] = b, f[14] = l, f[15] = d) : d = f[15];
            let _ = !v;
            return f[16] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, a.jsx)(ey.a, {
                id: "chatgptConversations.temporaryChat.save.confirm",
                defaultMessage: "Save"
            }), f[16] = u) : u = f[16], f[17] !== b || f[18] !== _ ? (h = (0, a.jsx)(tc.a, {
                color: "primary",
                disabled: _,
                loading: b,
                type: "submit",
                children: u
            }), f[17] = b, f[18] = _, f[19] = h) : h = f[19], f[20] !== h || f[21] !== d ? (p = (0, a.jsx)(o9.e, {
                children: (0, a.jsxs)(o9.c, {
                    children: [d, h]
                })
            }), f[20] = h, f[21] = d, f[22] = p) : p = f[22], f[23] !== p || f[24] !== s ? (g = (0, a.jsxs)(o9.b, {
                as: "form",
                onSubmit: s,
                children: [i, p]
            }), f[23] = p, f[24] = s, f[25] = g) : g = f[25], f[26] !== b || f[27] !== g || f[28] !== n || f[29] !== C ? (m = (0, a.jsx)(o8.a, {
                open: !0,
                dialogCloseLabel: t,
                onOpenChange: n,
                shouldIgnoreClickOutside: b,
                showDialogClose: C,
                size: "narrow",
                children: g
            }), f[26] = b, f[27] = g, f[28] = n, f[29] = C, f[30] = m) : m = f[30], m
        }

        function it(e) {
            (0, tr.e)(e).catch(() => {
                o7.a.warning("Failed to acknowledge temporary chat save coachmark")
            })
        }

        function ia(e) {
            let t, n = (0, r.c)(2),
                {
                    conversationId: s
                } = e;
            return n[0] !== s ? (t = (0, a.jsxs)(a.Fragment, {
                children: [null, (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(ir, {
                        conversationId: s
                    })
                })]
            }), n[0] = s, n[1] = t) : t = n[1], t
        }

        function ir(e) {
            let t, n = (0, r.c)(2),
                {
                    conversationId: s
                } = e;
            return (0, d.z)(o4.e) ? (n[0] !== s ? (t = (0, a.jsx)(is, {
                conversationId: s
            }), n[0] = s, n[1] = t) : t = n[1], t) : null
        }

        function is(e) {
            let t, n, s, o, i, l, c, u, h, p, g, b, y, x = (0, r.c)(49),
                {
                    conversationId: w
                } = e,
                C = (0, d.y)(eT.a),
                _ = (0, f.a)(),
                S = (0, v._)(),
                [j, I] = (0, m.useState)(!1),
                [T, E] = (0, m.useState)(!1),
                [P, A] = (0, m.useState)(!1),
                [M, k] = (0, m.useState)(!1),
                R = (0, m.useRef)(!1),
                N = (0, d.z)(nu.p).data,
                O = (0, d.x)(tm.j, w),
                L = (0, d.x)(tm.Y, w),
                z = (0, d.x)(tm.J, w),
                F = (0, d.x)(e8.j, w);
            x[0] !== w || x[1] !== C ? (t = {
                mutationFn: e => {
                    let {
                        sourceConversationId: t,
                        selectedLeafId: n
                    } = e;
                    if (C.get(tm.J, w) || C.get(e8.j, w) || t !== C.get(tm.j, w) || n !== C.get(tm.Y, w)) throw Error("Cannot save an unavailable temporary chat message");
                    return nl.Request.safePost("/conversation/{conversation_id}/save", {
                        parameters: {
                            path: {
                                conversation_id: t
                            }
                        },
                        requestBody: {
                            selected_leaf_id: n
                        },
                        isExpectedError: id
                    }).then(ic)
                },
                retry: il
            }, x[0] = w, x[1] = C, x[2] = t) : t = x[2];
            let {
                mutateAsync: B,
                isPending: D
            } = (0, eb.a)(t), G = null != O && null != L && !z && !F && !D && !T;
            x[3] !== _ ? (n = _.formatMessage({
                id: "chatgptConversations.temporaryChat.save.button",
                defaultMessage: "Save chat"
            }), x[3] = _, x[4] = n) : n = x[4];
            let H = n;
            x[5] !== N?.eligibleAnnouncements ? (s = N?.eligibleAnnouncements?.includes(nu.h), x[5] = N?.eligibleAnnouncements, x[6] = s) : s = x[6];
            let q = !0 === s,
                W = !M && (P || q && G);
            x[7] !== w || x[8] !== P || x[9] !== C || x[10] !== W ? (o = () => {
                if (!W || P || R.current) return;
                let e = !1;
                return queueMicrotask(() => {
                    e || R.current || (R.current = !0, (0, ec.a)(C, o2.Bb, {
                        personalizationMode: (0, o3.a)((0, o4.k)(C, w))
                    }), A(!0), it(C))
                }), () => {
                    e = !0
                }
            }, i = [w, P, C, W], x[7] = w, x[8] = P, x[9] = C, x[10] = W, x[11] = o, x[12] = i) : (o = x[11], i = x[12]), (0, m.useEffect)(o, i), x[13] !== C ? (l = () => {
                k(!0), R.current || (R.current = !0, it(C))
            }, x[13] = C, x[14] = l) : l = x[14];
            let V = l;
            x[15] !== G || x[16] !== w || x[17] !== _ || x[18] !== S || x[19] !== B || x[20] !== C || x[21] !== L || x[22] !== O ? (c = async function() {
                let e;
                if (!G || null == O || null == L) return;
                let t = (0, o3.a)((0, o4.k)(C, w));
                (0, ec.a)(C, o2.Cb, {
                    personalizationMode: t
                });
                try {
                    e = (await B({
                        sourceConversationId: O,
                        selectedLeafId: L
                    })).conversation_id
                } catch (e) {
                    (0, ec.a)(C, o2.Db, {
                        personalizationMode: t,
                        failureCategory: (0, o3.b)(e)
                    }), C.get(U.f).danger(_.formatMessage({
                        id: "chatgptConversations.temporaryChat.save.error",
                        defaultMessage: "Couldn't save this chat. Please try again."
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.temporaryChat.save.error"
                        }
                    });
                    return
                }
                E(!0), I(!1), (0, e_.H)(C), (0, e_.K)(C, O, "remove"), (0, e_.K)(C, e, "refresh"), S((0, o5.c)(e), {
                    replace: !0
                }), C.get(U.f).success(_.formatMessage({
                    id: "chatgptConversations.temporaryChat.save.success",
                    defaultMessage: "Chat saved. It will now appear in your chat history."
                })), nl.Request.safePost("/conversation/gen_title/{conversation_id}", {
                    parameters: {
                        path: {
                            conversation_id: e
                        }
                    },
                    requestBody: {
                        message_id: L
                    }
                }).then(ii).then(t => {
                    (0, tm.bc)({
                        scope: C,
                        conversationId: e,
                        title: t
                    }), C.query.setData(tr.chatGptConversationQueryById$, e, e => null == e ? e : {
                        ...e,
                        title: t
                    }), (0, e_.H)(C), (0, e_.K)(C, e, "refresh")
                }).catch(io)
            }, x[15] = G, x[16] = w, x[17] = _, x[18] = S, x[19] = B, x[20] = C, x[21] = L, x[22] = O, x[23] = c) : c = x[23];
            let Q = c,
                $ = !G;
            x[24] !== w || x[25] !== C || x[26] !== W ? (u = () => {
                (0, ec.a)(C, o2.Fb, {
                    personalizationMode: (0, o3.a)((0, o4.k)(C, w)),
                    coachMarkVisible: W
                }), I(!0)
            }, x[24] = w, x[25] = C, x[26] = W, x[27] = u) : u = x[27], x[28] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, a.jsx)(K.b, {
                icon: {
                    16: td.pb,
                    20: td.qb
                }
            }), x[28] = h) : h = x[28], x[29] !== H || x[30] !== $ || x[31] !== u ? (p = (0, a.jsx)(tc.a, {
                "aria-label": H,
                color: "toolbar",
                disabled: $,
                size: "toolbar",
                uniform: !0,
                onClick: u,
                children: h
            }), x[29] = H, x[30] = $, x[31] = u, x[32] = p) : p = x[32];
            let Y = p;
            return x[33] !== V || x[34] !== _ || x[35] !== H || x[36] !== Y || x[37] !== W ? (g = W ? (0, a.jsx)(o6.a, {
                align: "end",
                description: (0, a.jsx)(ey.a, {
                    id: "chatgptConversations.temporaryChat.save.coachmark.description",
                    defaultMessage: "Want to keep this chat? You can now save it to your history."
                }),
                dismissLabel: _.formatMessage({
                    id: "chatgptConversations.temporaryChat.save.coachmark.dismiss",
                    defaultMessage: "Close tooltip"
                }),
                onDismiss: V,
                open: !0,
                side: "bottom",
                sideOffset: 10,
                title: (0, a.jsx)(ey.a, {
                    id: "chatgptConversations.temporaryChat.save.button",
                    defaultMessage: "Save chat"
                }),
                tooltipClassName: "w-60",
                children: Y
            }) : (0, a.jsx)(ti.a, {
                content: H,
                children: Y
            }), x[33] = V, x[34] = _, x[35] = H, x[36] = Y, x[37] = W, x[38] = g) : g = x[38], x[39] !== G || x[40] !== w || x[41] !== Q || x[42] !== j || x[43] !== D || x[44] !== C ? (b = j ? (0, a.jsx)(ie, {
                canSave: G,
                isPending: D,
                onCancel: () => {
                    (0, ec.a)(C, o2.Ab, {
                        personalizationMode: (0, o3.a)((0, o4.k)(C, w))
                    })
                },
                onClose: () => I(!1),
                onSave: () => void Q()
            }) : null, x[39] = G, x[40] = w, x[41] = Q, x[42] = j, x[43] = D, x[44] = C, x[45] = b) : b = x[45], x[46] !== g || x[47] !== b ? (y = (0, a.jsxs)(a.Fragment, {
                children: [g, b]
            }), x[46] = g, x[47] = b, x[48] = y) : y = x[48], y
        }

        function io() {}

        function ii(e) {
            return a8.object({
                title: a8.string()
            }).parse(e).title
        }

        function il(e, t) {
            return e < 1 && t instanceof eQ.FetchError && 412 === t.status && "conversation_precondition_failed" === t.errorCode
        }

        function ic(e) {
            return a8.object({
                conversation_id: a8.string().min(1)
            }).parse(e)
        }

        function id(e) {
            return 412 === e.status && "conversation_precondition_failed" === e.errorCode
        }
        var iu = n("J8FU"),
            ih = n("Aluh"),
            ip = n("mG6J");

        function ig(e) {
            let t, n, s = (0, r.c)(14),
                {
                    conversationId: o,
                    shouldBlockExternalEgress: i,
                    widgets: l
                } = e,
                c = (0, d.z)(ih.b);
            if (i) return null;
            if (s[0] !== c || s[1] !== o || s[2] !== l) {
                let e, n, r;
                s[4] !== c || s[5] !== o ? (e = e => c.has((0, sn.e)(o, e.messageId)), s[4] = c, s[5] = o, s[6] = e) : e = s[6];
                let i = l.filter(e),
                    d = `chatgpt:${o}`;
                s[7] !== d ? (n = (0, u.Se)(d), s[7] = d, s[8] = n) : n = s[8];
                let h = n;
                s[9] !== h || s[10] !== o ? (r = e => (0, a.jsx)(ip.b, {
                    conversationId: h,
                    chatGptConversationId: o,
                    hostId: "local",
                    item: e
                }, e.messageId), s[9] = h, s[10] = o, s[11] = r) : r = s[11], t = i.map(r), s[0] = c, s[1] = o, s[2] = l, s[3] = t
            } else t = s[3];
            return s[12] !== t ? (n = (0, a.jsx)(a.Fragment, {
                children: t
            }), s[12] = t, s[13] = n) : n = s[13], n
        }
        var im = n("JVSG"),
            iv = {
                kind: "sprite",
                name: "folder-person-2-light-16",
                canvas: {
                    width: 16,
                    height: 16,
                    viewBox: "0 0 16 16"
                },
                href: "#codex-icon-folder-person-2-light-16",
                style: {},
                alignment: {
                    authored: {
                        x: 0,
                        y: 0,
                        overflows: !1
                    },
                    primary: {
                        x: 0,
                        y: 488e-6,
                        overflows: !1
                    },
                    composite: {
                        x: 0,
                        y: 488e-6,
                        overflows: !1
                    }
                }
            },
            ib = n("YRWn");

        function iy() {
            let e, t, n, s, o, i, l, c, u, h, p, g, f, b, x, C, _ = (0, r.c)(46),
                S = (0, v._)(),
                j = (0, m.useContext)(Z.a);
            _[0] === Symbol.for("react.memo_cache_sentinel") ? (e = {
                name: "chatgpt.conversations"
            }, _[0] = e) : e = _[0];
            let I = (0, d.x)(w.a, e),
                T = (0, d.z)(E.a),
                P = (0, v.bb)() ?? 0,
                {
                    conversationId: A
                } = (0, v.cb)(),
                {
                    search: M,
                    state: k
                } = (0, v.X)(),
                R = (0, d.x)(tg.a, A ?? null),
                N = (0, d.x)(null == A || t6.e, R ?? A ?? ""),
                O = k?.archivedConversationPreview === !0;
            _[1] !== M ? (t = (0, o5.i)(M), _[1] = M, _[2] = t) : t = _[2];
            let L = t;
            _[3] !== O || _[4] !== L || _[5] !== A ? (n = null == A || (0, tG.e)(A) || L || O ? null : A, _[3] = O, _[4] = L, _[5] = A, _[6] = n) : n = _[6];
            let {
                data: z
            } = (0, d.x)(tr.chatGptConversationQueryById$, n);
            if (null == A) {
                let e;
                return _[7] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(v.l, {
                    to: "/",
                    replace: !0
                }), _[7] = e) : e = _[7], e
            }
            _[8] !== R || _[9] !== A ? (s = R ?? (0, tG.d)(A), _[8] = R, _[9] = A, _[10] = s) : s = _[10];
            let F = s,
                B = I.isCapable && !T && !N && null != z;
            _[11] !== S ? (o = e => (S((0, o5.c)(e)), !0), _[11] = S, _[12] = o) : o = _[12];
            let D = o;
            _[13] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(y.a, {}), l = (0, a.jsx)(W.a.Surface, {}), _[13] = i, _[14] = l) : (i = _[13], l = _[14]), _[15] !== O ? (c = null, _[15] = O, _[16] = c) : c = _[16], _[17] !== F || _[18] !== O || _[19] !== L ? (u = L || O ? null : (0, a.jsx)(e6.a, {
                conversationId: F
            }), _[17] = F, _[18] = O, _[19] = L, _[20] = u) : u = _[20];
            let G = j ?? (B ? D : null),
                H = `${F}:${L}`;
            _[21] === Symbol.for("react.memo_cache_sentinel") ? (h = void 0, _[21] = h) : h = _[21], _[22] !== F || _[23] !== O || _[24] !== L || _[25] !== H || _[26] !== P ? (p = (0, a.jsx)(ix, {
                conversationId: F,
                viewActivation: P,
                isArchivedPreview: O,
                isReadOnlyPreview: !1,
                banner: h,
                isTemporaryChat: L,
                sharedConversationId: null
            }, H), _[22] = F, _[23] = O, _[24] = L, _[25] = H, _[26] = P, _[27] = p) : p = _[27], _[28] !== p || _[29] !== G ? (g = (0, a.jsx)(Z.a, {
                value: G,
                children: p
            }), _[28] = p, _[29] = G, _[30] = g) : g = _[30], _[31] !== g || _[32] !== c || _[33] !== u ? (f = (0, a.jsxs)(a.Fragment, {
                children: [i, l, c, u, g]
            }), _[31] = g, _[32] = c, _[33] = u, _[34] = f) : f = _[34];
            let q = f;
            _[35] !== q || _[36] !== F || _[37] !== O || _[38] !== L ? (b = L || O ? q : (0, a.jsx)(tn, {
                conversationId: F,
                children: q
            }), _[35] = q, _[36] = F, _[37] = O, _[38] = L, _[39] = b) : b = _[39];
            let K = b;
            return _[40] !== q || _[41] !== K ? (x = K, _[40] = q, _[41] = K, _[42] = x) : x = _[42], _[43] !== F || _[44] !== x ? (C = (0, a.jsx)(ty.a, {
                conversationId: F,
                children: x
            }), _[43] = F, _[44] = x, _[45] = C) : C = _[45], C
        }

        function ix(e) {
            let t, n, l, y, w, W, Z, eb, ey, ex, eC, eS, ej, eI, eT, eE, eP, eA, eM, ek, e6, tt, tn, ti, tl, tc, td, tu, th, tf, tv, ty, tx, tC, t_, tS, tT, tE, tq, tW, tK, tU, tV, tQ, t$, tY, tJ, tX, t0, t2, t8, ne, nt, nn, na, nr, ns, no, ni, nl, nc, nd, nu, nh, np, ng, nm, nf, nv, nb, ny, nx, nw, nC, n_, nS, nj, nI, nT, nE, nP, nA, nk, nL, nF, nG, nH, nq, nU, nZ, n0, n1, n2, n3, n4, n5, n6, n7, n8, n9, ae, at, an, aa, ar, as, ao = (0, r.c)(566),
                {
                    conversationId: ai,
                    viewActivation: al,
                    isArchivedPreview: ac,
                    inlinePreviewLayout: ad,
                    isInlinePreview: au,
                    hideModelPicker: ah,
                    showFilePicker: ap,
                    disableAutoFocus: ag,
                    hideInitialUserMessage: am,
                    transcriptPresentation: af,
                    scrollOrigin: av,
                    isReadOnlyPreview: ab,
                    onSubmitAccepted: ay,
                    isTemporaryChat: aw,
                    sharedConversationId: aC,
                    sharedPostContinuation: a_,
                    requiredSystemHints: aS,
                    routePattern: aj,
                    composerLeadingContent: aI,
                    headerLeadingContent: aT,
                    hideHeaderTitle: aE,
                    banner: aP,
                    onRetryMissingConversation: aA,
                    sharedProjectConversation: aM,
                    workspace: ak
                } = e,
                aR = void 0 === al ? 0 : al,
                aN = void 0 !== ac && ac,
                aO = void 0 !== au && au,
                aL = void 0 === ap || ap,
                az = void 0 !== aE && aE,
                aF = (0, d.y)(eg.a),
                aB = (0, m.useContext)(j.a),
                aD = (0, d.x)(ax.f, aB),
                aG = (0, d.z)(null != aD && E.a);
            ao[0] !== aB || ao[1] !== ai ? (t = {
                auth: aB,
                conversationId: ai
            }, ao[0] = aB, ao[1] = ai, ao[2] = t) : t = ao[2];
            let aH = (0, d.x)(null != aB && !aB.isLoading && null === aB.authMethod && ax.h, t),
                {
                    conversationId: aq
                } = (0, v.cb)();
            ao[3] !== ai || ao[4] !== aO || ao[5] !== aq || ao[6] !== aF || ao[7] !== ak ? (n = () => (0, tG.e)(aO || null != ak || null == aF.get(tm.j, ai) ? ai : aq ?? ""), ao[3] = ai, ao[4] = aO, ao[5] = aq, ao[6] = aF, ao[7] = ak, ao[8] = n) : n = ao[8];
            let [aW, aK] = (0, m.useState)(n);
            ao[9] !== aW || ao[10] !== ai || ao[11] !== aF ? (l = () => aW && !aF.get(oC.b, ai) ? ai : null, ao[9] = aW, ao[10] = ai, ao[11] = aF, ao[12] = l) : l = ao[12];
            let [aU] = (0, m.useState)(l), aV = null != aC || null != aD && !(void 0 !== a_ && a_ && aG);
            ao[13] !== ai || ao[14] !== aN || ao[15] !== aO || ao[16] !== aV || ao[17] !== aF ? (y = () => {
                if (!aV && !aN && !aO) return (0, e2.b)(aF, ai)
            }, w = [ai, aN, aO, aV, aF], ao[13] = ai, ao[14] = aN, ao[15] = aO, ao[16] = aV, ao[17] = aF, ao[18] = y, ao[19] = w) : (y = ao[18], w = ao[19]), (0, m.useEffect)(y, w);
            let aQ = (0, d.x)(tP.a, ai),
                a$ = aV ? null : aQ;
            ao[20] !== aC ? (W = () => null == aC ? null : (0, tG.b)(), ao[20] = aC, ao[21] = W) : W = ao[21];
            let [aY] = (0, m.useState)(W), aJ = aY ?? ai;
            ao[22] !== aJ ? (Z = (0, em.o)({
                routeKind: "chatgpt-thread",
                conversationId: aJ
            }), ao[22] = aJ, ao[23] = Z) : Z = ao[23];
            let aX = null != (0, d.x)(ee.c, Z);
            ao[24] !== aJ || ao[25] !== aS || ao[26] !== aF ? (eb = () => {
                if (null != aS && 0 !== aS.length) return (0, sT.b)(aF, aJ, aS)
            }, ey = [aJ, aS, aF], ao[24] = aJ, ao[25] = aS, ao[26] = aF, ao[27] = eb, ao[28] = ey) : (eb = ao[27], ey = ao[28]), (0, m.useEffect)(eb, ey);
            let aZ = (0, m.useRef)(null),
                [a0, a1] = (0, m.useState)(null),
                [a2, a3] = (0, m.useState)(null);
            ao[29] === Symbol.for("react.memo_cache_sentinel") ? (ex = () => () => a3(null), ao[29] = ex) : ex = ao[29], ao[30] !== aR ? (eC = [aR], ao[30] = aR, ao[31] = eC) : eC = ao[31], (0, m.useLayoutEffect)(ex, eC);
            let [a4, a5] = (0, m.useState)(null), a6 = a2?.activation === aR ? a2.messageId : null, a7 = a4 === aR, a8 = (0, m.useRef)(null);
            ao[32] === Symbol.for("react.memo_cache_sentinel") ? (eS = () => {
                let e = new AbortController;
                return a8.current = e, () => e.abort()
            }, ao[32] = eS) : eS = ao[32], ao[33] !== aR ? (ej = [aR], ao[33] = aR, ao[34] = ej) : ej = ao[34], (0, m.useLayoutEffect)(eS, ej);
            let a9 = (0, f.a)(),
                re = (0, v._)(),
                rt = (0, eq.d)(),
                rn = (0, d.x)(tm.j, ai);
            ao[35] !== aF ? (eI = e => {
                (0, e3.c)(aF, e)
            }, ao[35] = aF, ao[36] = eI) : eI = ao[36];
            let ra = (0, m.useEffectEvent)(eI);
            ao[37] !== rn || ao[38] !== ra ? (eT = () => () => {
                null != rn && ra(rn)
            }, ao[37] = rn, ao[38] = ra, ao[39] = eT) : eT = ao[39], ao[40] !== rn ? (eE = [rn], ao[40] = rn, ao[41] = eE) : eE = ao[41], (0, m.useEffect)(eT, eE);
            let rr = (0, d.x)(nX.a, ai),
                rs = (0, d.x)(tm.N, ai),
                ro = (0, d.x)(tr.chatGptConversationQueryById$, aV || aw && null != rs ? null : rn);
            (0, d.x)(aV ? null : to.a, rn);
            let ri = (0, d.x)(!aH && t6.e, ai),
                rl = rn ?? ai,
                rc = (0, d.x)(tm.C, ai),
                rd = (0, d.x)(tm.y, ai),
                ru = (0, d.x)(tm.T, ai),
                rh = (0, d.x)(tm.D, ai),
                rp = (0, d.x)(tm.O, ai),
                rg = (0, d.x)(tm.ab, ai),
                rm = (0, d.x)(tm.X, ai),
                rf = (0, d.x)(tm.Z, ai),
                rv = (0, d.x)(nK.a, ai);
            ao[42] !== a9 || ao[43] !== rv ? (eP = rv ?? a9.formatMessage(ew.a.newChat), ao[42] = a9, ao[43] = rv, ao[44] = eP) : eP = ao[44];
            let rb = eP,
                ry = (0, d.x)(tm.E, ai),
                rx = (0, d.x)(tm.eb, ai),
                rw = (0, d.x)(tr.n, aC),
                rC = (0, m.useRef)(null),
                r_ = rw.isSuccess && null != rw.data ? aC : null;
            ao[45] !== aF ? (eA = e => {
                (0, ec.a)(aF, o.i, {
                    actor: "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER",
                    action: "CHATGPT_SHARE_FLOW_ACTION_SHARED_CONTENT_VIEWED",
                    contentType: "CHATGPT_SHARE_FLOW_CONTENT_TYPE_SHARED_CONVERSATION",
                    availability: "CHATGPT_SHARE_FLOW_AVAILABILITY_COMPLETE",
                    shareId: e
                })
            }, ao[45] = aF, ao[46] = eA) : eA = ao[46];
            let rS = (0, m.useEffectEvent)(eA);
            ao[47] !== r_ || ao[48] !== rS ? (eM = () => {
                null != r_ && rC.current !== r_ && (rC.current = r_, rS(r_))
            }, ao[47] = r_, ao[48] = rS, ao[49] = eM) : eM = ao[49], ao[50] !== r_ ? (ek = [r_], ao[50] = r_, ao[51] = ek) : ek = ao[51], (0, m.useEffect)(eM, ek);
            let rj = (0, d.x)(e8.q, ai),
                rI = (0, d.x)(e8.p, ai),
                rT = (0, d.x)(e8.n, ai),
                rE = (0, d.x)(e8.r, ai),
                rP = (0, d.x)(e8.o, ai),
                rA = (0, d.x)(e8.j, ai),
                rM = (0, d.x)(tm.cb, ai),
                rk = (0, d.x)(e8.B, ai);
            ao[52] !== rg ? (e6 = (0, tm.Bb)(rg), ao[52] = rg, ao[53] = e6) : e6 = ao[53];
            let rR = e6,
                rF = (0, d.x)(tM, ai),
                rB = (0, d.z)(T.v),
                rW = (0, d.z)(eL.a),
                rK = (0, d.z)(T.s),
                rU = (0, d.z)(T.u),
                rV = (0, d.z)(T.n),
                rQ = (0, d.z)(T.b),
                r$ = (0, d.z)(T.o),
                rY = (0, d.z)(es.pagesEnabled$);
            ao[54] === Symbol.for("react.memo_cache_sentinel") ? (tt = (0, B.a)(), ao[54] = tt) : tt = ao[54];
            let rJ = (0, eN.f)(tt);
            ao[55] === Symbol.for("react.memo_cache_sentinel") ? (tn = (0, et.b)(), ao[55] = tn) : tn = ao[55];
            let rX = (0, eN.f)(tn),
                rZ = null != rs,
                r0 = (0, d.z)(oL.f),
                r1 = aV ? rw : ro;
            aW && null != r1.data && aK(!1);
            let r2 = aW && rZ && null == r1.data,
                r3 = r1.isLoading || !r2 && r1.isError;
            ao[56] !== a0 || ao[57] !== aJ || ao[58] !== r3 || ao[59] !== aV || ao[60] !== aw || ao[61] !== aF ? (ti = (e, t, n, a) => {
                !(e || aF.get(ep.a)) && ((0, e8.b)(aF, aJ, t, void 0, n, a), a0?.focus(), aV || r3 || (0, ta.f)(aF, aJ, {
                    isTemporaryChat: aw
                }))
            }, ao[56] = a0, ao[57] = aJ, ao[58] = r3, ao[59] = aV, ao[60] = aw, ao[61] = aF, ao[62] = ti) : ti = ao[62];
            let r4 = ti;
            ao[63] !== ai || ao[64] !== aD ? (tc = null == (tl = null == aD ? null : (0, oU.a)(aD, ai)) ? void 0 : (0, nJ.a)(tl), ao[63] = ai, ao[64] = aD, ao[65] = tl, ao[66] = tc) : (tl = ao[65], tc = ao[66]);
            let r5 = tc,
                r6 = tl ?? r1.data,
                r7 = ry ? rx : r6?.title,
                r8 = (0, d.z)(I.h),
                r9 = (0, d.z)(I.g),
                se = "chatgpt-thread" === aF.value.routeKind && aF.value.workSideChat?.conversationId === ai,
                st = r6?.conversation_origin ?? rd ?? (null != ak || se ? "tpp" : null),
                sn = "tpp" === st,
                sa = sn && "denied" === rB.status && "go-plan" === rB.reason,
                sr = (0, d.z)(ez.e),
                ss = (0, v.X)(),
                so = ss.state;
            (0, d.z)(ev.b);
            let si = (0, d.x)(eO.e, "3901104270") && so?.openGoalPlan === !0,
                sl = (0, eH.a)();
            ao[67] !== st ? (td = (0, L.q)(st), ao[67] = st, ao[68] = td) : td = ao[68];
            let sc = td,
                sd = (0, d.z)(t4.b),
                su = (0, d.z)(!!sc && T.w),
                sh = void 0 !== ab && ab || su,
                sp = null == sr || sr.isFullWidth ? void 0 : sr.width ?? 420,
                sg = !0 === (0, d.z)(sc ? null : eY.d),
                sm = (0, d.z)(sc ? eh.b : eh.a),
                sf = !sc && sm,
                sv = !rX || r$ && !sc,
                sb = !aV && r$ && !sc,
                sy = sb && rV,
                sx = aV && r6?.is_read_only === !0 || aM?.is_read_only === !0;
            ao[69] !== ai || ao[70] !== aV || ao[71] !== aF ? (tu = () => null, ao[69] = ai, ao[70] = aV, ao[71] = aF, ao[72] = tu) : tu = ao[72];
            let [sw] = (0, m.useState)(tu), sC = r6?.gizmo_id ?? ru ?? sw?.gizmoId ?? null;
            ao[73] !== sC || ao[74] !== aV ? (th = aV || null == sC || (0, tF.a)(sC) ? null : sC, ao[73] = sC, ao[74] = aV, ao[75] = th) : th = ao[75];
            let s_ = th,
                sS = (0, d.x)(te, aJ);
            ao[76] !== r6 || ao[77] !== ai || ao[78] !== rb || ao[79] !== ss.pathname || ao[80] !== aC || ao[81] !== aD ? (tf = (0, tp.d)({
                conversation: r6,
                conversationId: ai,
                conversationTitle: rb,
                pathname: ss.pathname,
                sharedConversationId: aC,
                sharedPost: aD
            }), ao[76] = r6, ao[77] = ai, ao[78] = rb, ao[79] = ss.pathname, ao[80] = aC, ao[81] = aD, ao[82] = tf) : tf = ao[82];
            let sj = tf,
                sI = !rU && null == r6 && null == sw,
                sE = null != rn && !ri && !sI && (rU || rK),
                sP = null;
            aV || (sP = null != r6 ? (0, e_.B)(r6) : (0, tF.a)(ru) ? ru : sw?.projectId ?? null);
            let sA = (0, d.x)(eZ.c, aV ? null : ai),
                sM = aV || sc || null != sP || sA || null == sS ? s_ : sS.id;
            ao[83] !== aJ || ao[84] !== sM || ao[85] !== ss.pathname ? (tv = {
                gizmoId: sM,
                conversationId: aJ,
                visitKey: ss.pathname
            }, ao[83] = aJ, ao[84] = sM, ao[85] = ss.pathname, ao[86] = tv) : tv = ao[86];
            let sk = (0, d.x)(oj.d, tv),
                {
                    data: sR
                } = (0, i.a)({
                    enabled: null != sP,
                    queryFn: () => {
                        if (null == sP) throw Error("Expected a ChatGPT project id");
                        return (0, O.c)(sP)
                    },
                    queryKey: (0, e_.E)(sP ?? ""),
                    staleTime: eG.b.ONE_MINUTE
                }),
                sN = null != sP && (sR?.gizmo.share_recipient !== "private" || (sR?.gizmo.sharing?.subjects?.length ?? 0) > 0);
            ao[87] !== r6?.context_scopes || ao[88] !== sR?.gizmo.gizmo_snorlax_type ? (ty = r6?.context_scopes?.includes("HEALTH") === !0 || sR?.gizmo.gizmo_snorlax_type === "potion", ao[87] = r6?.context_scopes, ao[88] = sR?.gizmo.gizmo_snorlax_type, ao[89] = ty) : ty = ao[89];
            let sO = ty,
                sL = (0, oT.a)(r6?.context_scopes, {
                    projectType: sR?.gizmo.gizmo_snorlax_type,
                    projectId: sP,
                    lockedProjectId: r0?.projectId
                }),
                sz = ri || sN || sO || sL;
            ao[90] !== sR?.gizmo.display.name || ao[91] !== sR?.gizmo.display.name.trim ? (tx = sR?.gizmo.display.name.trim() || null, ao[90] = sR?.gizmo.display.name, ao[91] = sR?.gizmo.display.name.trim, ao[92] = tx) : tx = ao[92];
            let sF = tx,
                sB = sR?.gizmo.display.theme,
                sD = sR?.gizmo.display.emoji;
            ao[93] !== sR ? (tC = "shared" === (0, tB.b)(sR) ? (0, a.jsx)(K.b, {
                icon: {
                    assets: {
                        16: iv,
                        20: ib.a
                    }
                }
            }) : void 0, ao[93] = sR, ao[94] = tC) : tC = ao[94], ao[95] !== sB || ao[96] !== sD || ao[97] !== tC ? (t_ = (0, a.jsx)(ed.a, {
                className: "icon-leading",
                size: "leading",
                color: sB,
                icon: sD,
                sharedIcon: tC
            }), ao[95] = sB, ao[96] = sD, ao[97] = tC, ao[98] = t_) : t_ = ao[98];
            let sG = t_,
                sH = (0, d.x)(tm.i, ai),
                sq = sH?.metadata ?? r6?.context_truncation_continuation,
                sW = aV || aw || null != aM || null == r8 || r6?.owner?.user_id == null || null == sP || r6.owner.user_id === (r9 ? r8.split("__")[0] : r8) ? null : (0, nB.d)(sP, r6.conversation_id, r6.owner.user_id),
                sK = !aV && !aN && !sh,
                sU = (0, d.x)(sK ? oH.c : null, ai),
                sV = sU?.isReviewing === !0,
                sQ = null == sU ? rs : sU.conversation.mapping,
                s$ = null == sU ? rc : sU.conversation.current_node,
                sY = null == rs ? r6 : null,
                sJ = sQ ?? sY?.mapping,
                sX = (0, eN.i)();
            ao[99] !== sJ || ao[100] !== sX ? (tS = function(e, t) {
                if (null != e && Object.values(e).some(e => e?.message != null && (0, oI.b)(e.message))) return () => (0, eN.d)(t, "2347981323").get("enabled", !1)
            }(sJ, sX), ao[99] = sJ, ao[100] = sX, ao[101] = tS) : tS = ao[101];
            let sZ = tS,
                s0 = (0, d.z)(null != sZ ? eV.h : void 0),
                s1 = (0, d.x)(null != sZ && !aV && !aN && !sV && eK.a, ai),
                s2 = (0, d.z)(s1 ? eU.a : void 0);
            ao[102] === Symbol.for("react.memo_cache_sentinel") ? (tT = (0, ts.a)(), ao[102] = tT) : tT = ao[102];
            let s3 = tT;
            ao[103] === Symbol.for("react.memo_cache_sentinel") ? (tE = new WeakMap, ao[103] = tE) : tE = ao[103];
            let s4 = tE;
            ao[104] !== sm || ao[105] !== sf || ao[106] !== sq || ao[107] !== st || ao[108] !== s$ || ao[109] !== sQ || ao[110] !== sd || ao[111] !== sZ || ao[112] !== sY || ao[113] !== aN || ao[114] !== aV || ao[115] !== rR || ao[116] !== sc || ao[117] !== rp || ao[118] !== rT || ao[119] !== rP || ao[120] !== rI || ao[121] !== rj || ao[122] !== rE || ao[123] !== sV || ao[124] !== aF.get || ao[125] !== sU?.isEntering || ao[126] !== rr || ao[127] !== rg || ao[128] !== s2 || ao[129] !== s0 ? (tq = () => s3({
                conversation: sY,
                contextContinuation: sq,
                clinicalSearchEnabled: sf,
                clinicalCitationsEnabled: sm,
                enableCloudBrowserActivity: sd,
                conversationOrigin: st,
                enableVoiceImageLoadingFix: sZ,
                voiceImageSessionId: s0,
                voiceImageGenerationSpawnIds: s2,
                enableImageGenerationLoadingState: !aV && !aN && !sV && "error" !== rg,
                getRenderTelemetry: e => (0, iu.c)(aF.get, e),
                isWorkConversation: sc,
                isStreaming: !aV && !aN && !sV && rR,
                mode: "conversation",
                mcpResponseCache: s4,
                moderationDisclaimersByMessageId: rp,
                ...rr,
                pendingSubmission: null == rj || aV || sV || sU?.isEntering ? null : {
                    attachments: rT,
                    commentAttachments: rP,
                    prompt: rj,
                    ...rI,
                    selectedTextAttachments: rE
                },
                threadCurrentNode: s$,
                threadMapping: sQ
            }), ao[104] = sm, ao[105] = sf, ao[106] = sq, ao[107] = st, ao[108] = s$, ao[109] = sQ, ao[110] = sd, ao[111] = sZ, ao[112] = sY, ao[113] = aN, ao[114] = aV, ao[115] = rR, ao[116] = sc, ao[117] = rp, ao[118] = rT, ao[119] = rP, ao[120] = rI, ao[121] = rj, ao[122] = rE, ao[123] = sV, ao[124] = aF.get, ao[125] = sU?.isEntering, ao[126] = rr, ao[127] = rg, ao[128] = s2, ao[129] = s0, ao[130] = tq) : tq = ao[130], sU?.isEntering, ao[131] !== tq ? (tW = tq(), ao[131] = tq, ao[132] = tW) : tW = ao[132];
            let {
                isConversationEmpty: s5,
                renderedConversation: s6,
                renderedTurns: s7,
                showPendingLoadingMessage: s8
            } = tW;
            ao[133] !== aO || ao[134] !== sc || ao[135] !== s6 || ao[136] !== aF ? (tK = () => {
                if (!aO && sc) return aF.set(im.b, s6), () => {
                    aF.get(im.b) === s6 && aF.set(im.b, null)
                }
            }, tU = [aO, sc, s6, aF], ao[133] = aO, ao[134] = sc, ao[135] = s6, ao[136] = aF, ao[137] = tK, ao[138] = tU) : (tK = ao[137], tU = ao[138]), (0, m.useEffect)(tK, tU);
            let s9 = (0, d.x)(e0.g, ai),
                oe = s8 && null == s9,
                ot = !sc && !aV && !aO && !aN,
                on = (0, d.x)(sf || aO || aV ? null : M.a, ai),
                oa = (on?.length ?? 0) > 0,
                or = (0, d.x)(ot ? k.b : null, ai),
                os = JSON.stringify([ai, aR]),
                [oo, oi] = (0, m.useState)(null),
                ol = function(e, t) {
                    let {
                        conversation: n,
                        completionAttemptId: a,
                        allowAutoOpen: r = !0,
                        suppressAutoOpen: s = !1,
                        isTurnActive: o,
                        isPendingUserTurn: i,
                        hasGoal: l = !1,
                        visitKey: c
                    } = t;
                    if (e?.visitKey === c && e.conversation === n && e.completionAttemptId === a && e.allowAutoOpen === r && e.suppressAutoOpen === s && e.isTurnActive === o && e.isPendingUserTurn === i && e.hasGoal === l) return e;
                    let d = null == n ? [] : (0, h.b)(n, L.o),
                        u = null == e || e.visitKey !== c,
                        p = d.find(L.o)?.id ?? (u || i ? null : e.userMessageId),
                        g = i ? null : d.findLast(z)?.id ?? null,
                        m = !u && (i && !e.isPendingUserTurn || !e.isPendingUserTurn && null != p && (null != e.userMessageId || !e.isTurnActive && null != a && a !== e.completionAttemptId) && e.userMessageId !== p),
                        f = new Set(u ? [] : e.observedSummaryRequestIds),
                        v = !u && !m && e.hasConsumedSummaryRequest,
                        b = !v && !u && null != e.conversation && (o || e.isTurnActive || null != a && e.completionAttemptId !== a) && null != g && !f.has(g);
                    if (null != n && (u || null == e.conversation || !o))
                        for (let e of Object.values(n.mapping)) e?.message?.id != null && z(e.message) && f.add(e.message.id);
                    else null != g && f.add(g);
                    return {
                        visitKey: c,
                        conversation: n,
                        completionAttemptId: a,
                        allowAutoOpen: r,
                        suppressAutoOpen: s,
                        isTurnActive: o,
                        isPendingUserTurn: i,
                        hasGoal: l,
                        observedSummaryRequestIds: f,
                        userMessageId: p,
                        hasConsumedSummaryRequest: v || null != g,
                        isOpen: s ? !u && e.suppressAutoOpen && e.isOpen : r && (l && (u || !e.hasGoal) || b) || !u && (!m || l) && (!e.hasGoal || l) && e.isOpen,
                        shouldPreventAutoFocus: u || m || l && !e.hasGoal || b && !e.isOpen || e.shouldPreventAutoFocus
                    }
                }(oo, {
                    completionAttemptId: or,
                    allowAutoOpen: !(0, X.a)("(width < 768px)"),
                    suppressAutoOpen: si,
                    conversation: ot && (r2 || !r3) ? s6 : null,
                    isTurnActive: rR,
                    hasGoal: oa,
                    isPendingUserTurn: rA && null != rj && !rR,
                    visitKey: os
                });
            ol !== oo && oi(ol);
            let oc = null == ak && !sf && !aO && !aV && (sn || ot) && !aN,
                od = oc && s6?.mapping === rs && s6?.current_node === rc,
                ou = (0, d.x)(od ? tm.q : null, ai),
                oh = s6?.mapping,
                op = s6?.current_node;
            ao[139] !== oh || ao[140] !== op ? (tV = c()(() => {
                let e = null == oh ? [] : (0, h.a)({
                    mapping: oh,
                    current_node: op
                });
                return {
                    messages: e,
                    resources: (0, tH.e)(e)
                }
            }), ao[139] = oh, ao[140] = op, ao[141] = tV) : tV = ao[141];
            let og = tV;
            ao[142] !== ot || !1 !== ao[143] || ao[144] !== rA || ao[145] !== oc || ao[146] !== rR || ao[147] !== sc || ao[148] !== rY || ao[149] !== rT || ao[150] !== og || ao[151] !== s7 || ao[152] !== ou ? (tQ = oc ? c()(() => (0, t1.a)({
                automationReferences: ou,
                includePages: rY,
                includeSources: sc || !1,
                isTurnActive: rR || rA,
                ...og(),
                pendingAttachments: rA ? rT : [],
                turns: s7
            })) : null, t$ = ot ? tQ?.() : null, ao[142] = ot, ao[143] = !1, ao[144] = rA, ao[145] = oc, ao[146] = rR, ao[147] = sc, ao[148] = rY, ao[149] = rT, ao[150] = og, ao[151] = s7, ao[152] = ou, ao[153] = tQ, ao[154] = t$) : (tQ = ao[153], t$ = ao[154]);
            let om = t$,
                of = oa || null != om && (om.outputs.length > 0 || om.progressSteps.length > 0 || om.automationIds.length > 0 || om.subagents.length > 0 || !ri && om.browserScreenshots.length > 0),
                ov = oc && (!ot || of),
                oy = ov && null == sr,
                ox = JSON.stringify([os, null != sr]),
                ow = ot ? ol.isOpen : void 0,
                oP = ov && !sr?.isFullWidth;
            ao[155] !== sp || ao[156] !== ox || ao[157] !== ow || ao[158] !== oP ? (tY = {
                contentShiftResetKey: ox,
                controlledIsOpen: ow,
                isEnabled: oP,
                floatingPanelWidth: sp
            }, ao[155] = sp, ao[156] = ox, ao[157] = ow, ao[158] = oP, ao[159] = tY) : tY = ao[159];
            let oA = (0, eB.a)(tY),
                oM = rn ?? ai,
                ok = rh ?? rk,
                oR = r1.isLoading && !rZ,
                oz = !oR && (null != r6 || rZ),
                oF = oz && (r2 || !r3),
                oB = r1.isError && !r2;
            ao[160] !== r1.error || ao[161] !== aO ? (tJ = aO || (0, eQ.e)(r1.error) || !(r1.error instanceof eQ.FetchError && [401, 403, 404].includes(r1.error.status)), ao[160] = r1.error, ao[161] = aO, ao[162] = tJ) : tJ = ao[162];
            let oD = tJ;
            ao[163] !== ai || ao[164] !== aV || ao[165] !== rn ? (tX = null, aV || (tX = rn ?? ((0, tG.e)(ai) ? null : ai)), ao[163] = ai, ao[164] = aV, ao[165] = rn, ao[166] = tX) : tX = ao[166], ao[167] !== a6 || ao[168] !== r6 || ao[169] !== st || ao[170] !== a9 || ao[171] !== aw || ao[172] !== sc || ao[173] !== sa || ao[174] !== re || ao[175] !== tX || ao[176] !== aj || ao[177] !== aF || ao[178] !== aR ? (t0 = (e, t) => {
                let n = void 0 !== t && t;
                if (null == tX || null != a6 || sa) return;
                let a = a8.current?.signal;
                null == a || a.aborted || (a3({
                    messageId: e,
                    activation: aR
                }), (0, tm.h)(aF, {
                    conversationId: tX,
                    messageId: e,
                    inWorkMode: n
                }).then(e => {
                    let {
                        clientThreadId: t
                    } = e;
                    a.aborted || (n && (0, eJ.a)(aF, "opened"), re(null == aj ? (0, o5.c)(t, {
                        isTemporaryChat: aw
                    }) : (0, v.C)(aj, {
                        conversationId: t
                    })))
                }).catch(() => {
                    a.aborted || (n && (0, eJ.a)(aF, "failed"), a3(null), aF.get(U.f).danger(a9.formatMessage({
                        id: "chatgptConversations.branchFailed",
                        defaultMessage: "Failed to create chat"
                    }), {
                        errorAnalytics: {
                            toastId: "branch_conversation_failed",
                            operation: "branch_conversation",
                            errorCategory: "conversation",
                            conversationId: tX ?? void 0,
                            retryable: !0,
                            userFacingError: {
                                surface: (0, tN.b)(null == st && null == r6 ? null : sc),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    }))
                }))
            }, ao[167] = a6, ao[168] = r6, ao[169] = st, ao[170] = a9, ao[171] = aw, ao[172] = sc, ao[173] = sa, ao[174] = re, ao[175] = tX, ao[176] = aj, ao[177] = aF, ao[178] = aR, ao[179] = t0) : t0 = ao[179];
            let oq = (0, eW.a)(t0);
            ao[180] !== r6 || ao[181] !== ai || ao[182] !== st || ao[183] !== a9 || ao[184] !== sg || ao[185] !== aw || ao[186] !== sc || ao[187] !== aF || ao[188] !== rn ? (t2 = async (e, t, n, a) => {
                if (!sg) try {
                    await async function(e, t) {
                        let {
                            conversationId: n,
                            isTemporaryChat: a = !1,
                            messageId: r,
                            prompt: s,
                            renderFormat: o,
                            inlineSystemHints: i
                        } = t;
                        if (e.get(e8.j, n)) throw new tI.a("edit_message_busy", "The chat is busy.");
                        let l = e.get(tm.y, n);
                        if ("tpp" === l) throw new tI.a("edit_message_unsupported_conversation", "Work messages cannot be edited with the Chat flow.");
                        if (!e.get(tM, n)) throw new tI.a("edit_message_busy", "The chat is busy.");
                        let c = e.get(tj.b, {
                            conversationId: n,
                            messageId: r
                        });
                        if (null == c) throw new tI.a("edit_message_target_unavailable", "The user message could not be edited.");
                        let {
                            selectedModel: d
                        } = c, u = s.trim(), h = (0, tj.c)(c.message, e.get, i), g = (0, tA.c)({
                            message: c.message,
                            prompt: u,
                            renderFormat: o,
                            systemHints: h,
                            inlineSystemHints: i
                        }), m = (0, p.f)(g.message.metadata), f = g.message.content, v = "multimodal_text" === f.content_type && f.parts.some(e => "string" != typeof e);
                        if (0 === u.length && 0 === m.length && !v) throw new tI.a("edit_message_empty", "The edited message cannot be empty.");
                        if (e.get(eO.e, "3574573347")) {
                            let t = e.get(tj.a, n);
                            t?.messageId === r && t.prompt === s && tw()((0, tj.c)(c.message, e.get, t.inlineSystemHints), h) || (e.set(tj.a, n, {
                                messageId: r,
                                prompt: s,
                                isTemporaryChat: a,
                                inlineSystemHints: i
                            }), (0, ta.f)(e, n, {
                                isTemporaryChat: a
                            }))
                        }
                        let b = tk(e.get, n),
                            y = b.request.current,
                            x = () => tk(e.get, n).request.current === y && tw()(e.get(tj.b, {
                                conversationId: n,
                                messageId: r
                            }), c) && !(0, tm.Bb)(e.get(tm.ab, n));
                        e.set(e8.j, n, !0);
                        try {
                            if ("flora" !== l && null != y && null == e.get(b.session$) && null == e.get(tP.a, n) && (await y.stop(), await y.closed), !x()) throw new tI.a("edit_message_target_unavailable", "The edited message or active response changed.");
                            await (0, tA.submitChatGPTCompletion)(e, {
                                isSubmissionCurrent: x,
                                isRequestCurrent: () => e.get(tm.C, n) === g.message.id,
                                attachments: m,
                                conversationId: n,
                                isTemporaryChat: a,
                                model: d.slug,
                                parentMessageId: c.parentMessageId,
                                prompt: u,
                                systemHints: h,
                                thinkingEffort: d.thinkingEffort,
                                userCompletionMessages: g
                            })
                        } finally {
                            e.set(e8.j, n, !1)
                        }
                    }(aF, {
                        conversationId: ai,
                        isTemporaryChat: aw,
                        messageId: e,
                        prompt: t,
                        inlineSystemHints: a,
                        renderFormat: n
                    })
                } catch (t) {
                    let e = (0, tN.c)(t);
                    throw aF.get(U.f).danger(a9.formatMessage({
                        id: "chatgptConversations.editMessageFailed",
                        defaultMessage: "Failed to edit message"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.editMessageFailed",
                            operation: "edit_message",
                            apiErrorCode: e.errorCode,
                            retryable: !0,
                            errorCategory: "conversation",
                            conversationId: rn ?? void 0,
                            userFacingError: {
                                ...e,
                                surface: (0, tN.b)(null == st && null == r6 ? null : sc),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    }), t
                }
            }, ao[180] = r6, ao[181] = ai, ao[182] = st, ao[183] = a9, ao[184] = sg, ao[185] = aw, ao[186] = sc, ao[187] = aF, ao[188] = rn, ao[189] = t2) : t2 = ao[189];
            let oK = (0, eW.a)(t2);
            ao[190] !== a0 || ao[191] !== aJ || ao[192] !== r6 || ao[193] !== ai || ao[194] !== st || ao[195] !== a9 || ao[196] !== sg || ao[197] !== aw || ao[198] !== sc || ao[199] !== sa || ao[200] !== re || ao[201] !== aA || ao[202] !== aF || ao[203] !== rn ? (t8 = async (e, t) => {
                if (!sg && !sa) try {
                    if ("resume" === t) return void await async function(e, t, n, a) {
                        let r = (0, tg.d)(e.get, t),
                            s = new Set([r, e.get(tg.a, r) ?? t]),
                            o = e.get(k.d, r),
                            i = o?.stoppedResponse,
                            l = e.get(rG, r);
                        if (!(null == o || i?.settings == null || l?.promptMessageId !== n || !l.canResume || e.get(k.f, r) || [...s].some(t => e.get(k.a, t)))) {
                            for (let t of s) e.set(k.a, t, !0);
                            try {
                                let t = i.originalSend;
                                if (t?.checkDelivery && (!rH(e.get, r, n) || await (0, rD.c)(e, r, n, {
                                        expectedIdentity: i.settings.expectedIdentity,
                                        isTemporaryChat: i.settings.isTemporaryChat
                                    })) && (t = void 0), e.get(rG, r)?.promptMessageId !== n || e.get(k.d, r) !== o) return;
                                if (null == t && (null != i.originalSend && e.set(k.e, r, {
                                        ...o,
                                        stoppedResponse: {
                                            ...i,
                                            originalSend: void 0
                                        }
                                    }), !rq(e.get, r, i))) throw Error("Stopped response cannot be regenerated");
                                await (0, rz.a)(e, {
                                    ...i.settings,
                                    allowStoppedResponseResume: !0,
                                    followupCapabilities: a,
                                    ...null != t ? {
                                        message: t.message,
                                        unsentRequest: t.request,
                                        parentMessageId: t.request.parent_message_id ?? void 0,
                                        onServerThreadIdChange: t.onServerThreadIdChange
                                    } : {
                                        regenerateFromMessageId: n,
                                        regeneration: {
                                            source: "try_again",
                                            variantPurpose: "none"
                                        }
                                    },
                                    conversationId: r,
                                    isSubmissionCurrent: () => e.get(rG, r)?.promptMessageId === n,
                                    isRequestCurrent: () => !e.get(rO.a),
                                    submittedAtMs: (0, rL.b)()
                                })
                            } finally {
                                for (let t of s) e.set(k.a, t, !1)
                            }
                        }
                    }(aF, ai, e, (0, o_.d)(aF, a0?.getLinkHandler?.(), void 0)?.followupCapabilities);
                    let n = aF.get(rN.f, ai),
                        a = null == aF.get(tm.j, ai);
                    if (n?.startsNewWorkConversation || a || (0, e1.j)(aF.get(tm.V, ai)?.metadata?.errorCode)) {
                        if (n?.message.id !== e) return;
                        let r = (0, h.e)(n.prompt),
                            s = (0, N.j)(n.prompt.metadata, r, (0, p.e)(n.prompt.metadata), (0, g.x)(r)),
                            o = (0, F.a)(n.prompt, r, s),
                            i = aF.get(e8.u, aJ),
                            l = null != o.renderFormat ? o.message : r,
                            c = i.length > 0 ? i : l,
                            d = i.length > 0 ? void 0 : o.renderFormat ?? "plain";
                        if (null != aA) return void await aA(c, d);
                        if (a && "string" == typeof n.prompt.metadata?.model_first_landing_ref) {
                            let e = c;
                            if (null != d) {
                                let t = (0, eu.e)(c, {
                                    defaultTextKind: "plain" === d ? "literal" : "prompt",
                                    enableRichText: !0,
                                    enableFileMentions: !0
                                });
                                e = t.getPersistedText(), t.destroy()
                            }
                            let t = `chatgpt:${ai}`;
                            (0, G.E)(t, (t, n) => n ? t : e) || (0, e8._)(aF, ai, e), (0, G.e)(t);
                            return
                        }
                        if (n.startsNewWorkConversation) {
                            let e = "user" === n.prompt.author.role ? (0, h.i)((0, h.s)(n.prompt.metadata?.serialization_metadata)?.work_handoff_recovery_prompt) : null,
                                t = null != e && e.length <= 1e3 ? e : (0, g.x)(r);
                            (0, H.n)(aF, "work"), await re("/", {
                                state: {
                                    focusComposerNonce: Date.now(),
                                    prefillPrompt: i.length > 0 ? i : t,
                                    prefillPromptFormat: i.length > 0 ? void 0 : "plain",
                                    prefillPromptOnlyIfEmpty: !0
                                }
                            });
                            return
                        }
                        if (sc && !aw && (0, D.cb)(aF, (0, $.b)({
                                entrypoint: "home"
                            }))) return void await re("/");
                        let u = (0, h.l)(n.prompt.metadata?.system_hints).filter(e => "search" !== e || !1 !== n.forceUseSearch);
                        !0 !== n.forceUseSearch || u.includes("search") || u.push("search");
                        let m = (0, tz.g)(aF, u);
                        (0, e8.$)(aF, m, t.model);
                        let f = aF.get(tm.T, ai);
                        (0, H.n)(aF, sc ? "work" : "chat"), await re({
                            pathname: "/",
                            search: (0, o5.e)("", aw)
                        }, {
                            state: {
                                initialChatGptConversationId: m,
                                project: null,
                                chatGptProjectId: (0, tF.a)(f) ? f : null,
                                chatGptCustomGptId: (0, tF.a)(f) ? null : f,
                                focusComposerNonce: Date.now(),
                                prefillPrompt: c,
                                prefillPromptFormat: d,
                                prefillPromptOnlyIfEmpty: sc
                            }
                        });
                        return
                    }
                    await (0, rN.i)(aF, {
                        conversationId: ai,
                        isTemporaryChat: aw,
                        messageId: e,
                        retry: sc && "error_retry" === t.source && null == t.model.thinkingEffort ? {
                            ...t,
                            model: aF.get(e8.v, ai)
                        } : t
                    })
                } catch {
                    aF.get(U.f).danger(a9.formatMessage({
                        id: "chatgptConversations.regenerate.failed",
                        defaultMessage: "Failed to regenerate response"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.regenerate.failed",
                            operation: "regenerate_response",
                            errorCategory: "conversation",
                            conversationId: rn ?? void 0,
                            userFacingError: {
                                surface: (0, tN.b)(null == st && null == r6 ? null : sc),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    })
                }
            }, ao[190] = a0, ao[191] = aJ, ao[192] = r6, ao[193] = ai, ao[194] = st, ao[195] = a9, ao[196] = sg, ao[197] = aw, ao[198] = sc, ao[199] = sa, ao[200] = re, ao[201] = aA, ao[202] = aF, ao[203] = rn, ao[204] = t8) : t8 = ao[204];
            let o$ = (0, eW.a)(t8);
            ao[205] !== r6 || ao[206] !== ai || ao[207] !== rb || ao[208] !== a9 || ao[209] !== a7 || ao[210] !== aw || ao[211] !== re || ao[212] !== rt || ao[213] !== sP || ao[214] !== aF || ao[215] !== rn || ao[216] !== sw || ao[217] !== aR ? (ne = () => {
                if (a7 || null == rn) return;
                let e = aF.get(T.u);
                if (!e && !aF.get(T.s) || !e && null == r6 && null == sw) return;
                let t = a8.current?.signal;
                null == t || t.aborted || (a5(aR), (e ? (0, e5.f)(aF, {
                    chatGptThreadId: ai,
                    conversationTitle: rb
                }).then(e => {
                    if (null == e) return null;
                    let n = (0, _.a)(aF, e);
                    if ("created" === e.status) return null == n || t.aborted || aF.get(U.f).danger(n.message, {
                        errorAnalytics: {
                            toastId: "chatgptConversationPage.handleHandoff"
                        }
                    }), e.conversationId;
                    throw (0, _.a)(aF, e)
                }) : (0, x.a)({
                    scope: aF,
                    projectId: sP ?? void 0,
                    prompt: `Continuing from ${(0,q.f)({conversationId:rn,title:rb?.trim()||"ChatGPT thread"})}`
                }).then(iI)).then(n => {
                    if (!t.aborted) {
                        if (null != n) return void(e ? rt(n) : re((0, o5.c)(n, {
                            isTemporaryChat: aw
                        })));
                        throw Error("Unable to create a Work conversation")
                    }
                }).catch(() => {
                    t.aborted || (a5(null), aF.get(U.f).danger(a9.formatMessage({
                        id: "chatgptConversations.handoffFailed",
                        defaultMessage: "Failed to create chat"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.handoffFailed"
                        }
                    }))
                }))
            }, ao[205] = r6, ao[206] = ai, ao[207] = rb, ao[208] = a9, ao[209] = a7, ao[210] = aw, ao[211] = re, ao[212] = rt, ao[213] = sP, ao[214] = aF, ao[215] = rn, ao[216] = sw, ao[217] = aR, ao[218] = ne) : ne = ao[218];
            let oY = ne;
            ao[219] !== ai || ao[220] !== re || ao[221] !== aF || ao[222] !== aY || ao[223] !== aC || ao[224] !== aD ? (nt = () => {
                if (null != aD) {
                    if ((0, tG.e)(ai)) {
                        let e = (0, ax.a)(aF, aD, ai);
                        null != e && (aF.get(E.a) ? aF.set(oQ.a, e) : re((0, o5.c)(e)))
                    }
                    return
                }
                let e = aF.query.getData(tr.n, aC);
                null != e && null != aC && null != aY && ((0, tm.ob)(aF, {
                    conversation: e,
                    conversationId: aY,
                    sharedConversationId: aC
                }), aF.get(E.a) ? aF.set(oQ.a, aY) : re((0, o5.c)(aY)))
            }, ao[219] = ai, ao[220] = re, ao[221] = aF, ao[222] = aY, ao[223] = aC, ao[224] = aD, ao[225] = nt) : nt = ao[225];
            let oJ = (0, eW.a)(nt);
            ao[226] !== ak ? (nn = ak?.mcpAppContext == null ? null : {
                hostId: ef.a,
                server: "codex_apps",
                connectorId: ak.mcpAppContext.id
            }, ao[226] = ak, ao[227] = nn) : nn = ao[227];
            let oX = (0, d.x)(er.b, nn),
                oZ = ak?.fullscreenContent != null ? "content" : "workspace",
                o0 = (0, A.a)(aO ? "embedded" : oZ),
                o2 = !oX && (r2 || !r1.isError) && !aN && !sh && (null == aD || aB?.authMethod === "chatgpt" || aG) && (!aV || null != r6),
                o3 = rQ || sh || sx || sy || sa,
                o4 = o3 || sV || sU?.needsEntry === !0;
            if (sV) {
                let e;
                ao[228] !== a9 ? (e = a9.formatMessage(oH.d.readOnlyPlaceholder), ao[228] = a9, ao[229] = e) : e = ao[229], na = e
            } else !o3 && sU?.needsEntry && (na = !1);
            let o6 = o2 && !o3 && !aV && !r3 && !sg && !rR && !rA && !rM && !sk,
                o7 = !o2 || aV || o4 || r3 ? null : a0;
            ao[230] !== sm || ao[231] !== sf || ao[232] !== sd || ao[233] !== sc || ao[234] !== a$ || ao[235] !== s6 || ao[236] !== s7 || ao[237] !== sV || ao[238] !== aF.get || ao[239] !== rr ? (nr = sV || null == a$ || null == s6 ? s7 : (0, e9.a)({
                ...s6,
                current_node: a$.promptMessageId
            }, {
                clinicalSearchEnabled: sf,
                clinicalCitationsEnabled: sm,
                enableCloudBrowserActivity: sd,
                ...rr,
                isWorkConversation: sc,
                getRenderTelemetry: e => (0, iu.c)(aF.get, e)
            }), ao[230] = sm, ao[231] = sf, ao[232] = sd, ao[233] = sc, ao[234] = a$, ao[235] = s6, ao[236] = s7, ao[237] = sV, ao[238] = aF.get, ao[239] = rr, ao[240] = nr) : nr = ao[240];
            let o8 = (0, ts.c)({
                    paragen: a$,
                    hideInitialUserMessage: am,
                    browserConversationId: void 0,
                    conversationId: ai,
                    enableCloudBrowserActivity: sd,
                    errorMessage: ok,
                    branchingMessageId: a6,
                    isReadOnly: aN || sh || aV || null != aM,
                    isTemporaryChat: aw,
                    isWorkConversation: sn,
                    onRegenerateResponse: sk || aV || null != aM || aN || sh || sy || sa || rR || rA ? void 0 : o$,
                    onEditUserMessage: sk || null == tX || sn || aN || sh || sy || !rF || rA ? void 0 : oK,
                    onFork: null == tX || aw || sy || sa || aN || sh ? void 0 : oq,
                    pendingSubmissionAttachments: rT,
                    shareEnabled: null == s_ && !aw && !aV && !aN && !sh && !sz,
                    readAloudEnabled: !aV && !sh,
                    feedbackEnabled: !aV && !sh && null == aM,
                    renderedTurns: nr,
                    safetyReview: rm,
                    sharedConversationLastMessageId: tl?.current_node ?? rf ?? (aV ? r6?.current_node : null),
                    showPendingLoadingMessage: oe,
                    showRequestUserInputStatus: o2 && !o4 && !r3
                }),
                o9 = (0, d.x)(tD.a, ai),
                ie = o9?.domain === "bio" ? o9.turnSource : void 0,
                [it, ir] = (0, m.useState)(nY.a.isLoaded);
            ao[241] !== it || ao[242] !== ie ? (ns = () => {
                null == ie || it || nY.a.prefetch().then(() => {
                    ir(nY.a.isLoaded())
                })
            }, no = [ie, it], ao[241] = it, ao[242] = ie, ao[243] = ns, ao[244] = no) : (ns = ao[243], no = ao[244]), (0, m.useEffect)(ns, no), ao[245] !== ie ? (ni = ie ?? {}, ao[245] = ie, ao[246] = ni) : ni = ao[246], ao[247] !== ai || ao[248] !== ni ? (nl = {
                conversationId: ai,
                source: ni
            }, ao[247] = ai, ao[248] = ni, ao[249] = nl) : nl = ao[249];
            let is = (0, d.x)(null == ie ? null : e4.a, nl),
                {
                    entries: io,
                    inlineNotice: ii
                } = (0, ts.e)(sV ? (0, oH.a)(o8) : o8, it && null != ie && is?.promptId != null ? {
                    promptId: is.promptId,
                    source: ie,
                    sourceModelSlug: is.sourceModelSlug,
                    structuredCopy: o9?.structuredCopy ?? null
                } : void 0);
            ao[250] !== ai || ao[251] !== s_ ? (nc = null == s_ ? null : (0, a.jsx)(tL.ChatGptGizmoHeader, {
                conversationId: ai,
                gizmoId: s_
            }), ao[250] = ai, ao[251] = s_, ao[252] = nc) : nc = ao[252];
            let il = nc;
            ao[253] !== aN || ao[254] !== aV || ao[255] !== sn ? (nd = !sn || aV || aN ? null : (0, a.jsx)(Y.a, {
                hostId: ef.a
            }), ao[253] = aN, ao[254] = aV, ao[255] = sn, ao[256] = nd) : nd = ao[256];
            let ic = nd,
                id = !aV && null == aM && !aN && !aw && !ri,
                ip = (0, d.x)(!id || aO || sh ? null : oE.a, ai);
            ao[257] !== ai || ao[258] !== aF || ao[259] !== id ? (nu = id ? () => {
                let e = aF.get(oE.b, ai);
                e?.title && oN(aF, {
                    conversationId: ai,
                    courseId: e.course_id
                }, {
                    preserveFocus: !0
                })
            } : void 0, ao[257] = ai, ao[258] = aF, ao[259] = id, ao[260] = nu) : nu = ao[260];
            let iy = nu;
            ao[261] !== o6 || ao[262] !== ai || ao[263] !== sg || ao[264] !== sU ? (nh = null != sU ? (0, a.jsx)("div", {
                className: "max-w-full min-w-0",
                inert: sg,
                children: (0, a.jsx)(nN.a, {
                    children: (0, a.jsx)(n$, {
                        conversationId: ai,
                        placement: "progress",
                        canStartSection: o6
                    })
                })
            }) : null, ao[261] = o6, ao[262] = ai, ao[263] = sg, ao[264] = sU, ao[265] = nh) : nh = ao[265];
            let ix = nh,
                iT = !sA && !aN && !sh,
                iE = !aw && !aV && null != rn,
                iP = !az && iT && null != rv,
                iA = (0, d.x)(!!iP && !iE && !aV && !sc && !!o2 && !o4 && t6.d, ai),
                iM = iP && iE || iA;
            ao[266] !== aT || ao[267] !== sc || ao[268] !== sF ? (np = (0, V.a)({
                browser: !0
            }) && !sc && null != sF && null == aT, ao[266] = aT, ao[267] = sc, ao[268] = sF, ao[269] = np) : np = ao[269];
            let ik = np;
            ao[270] !== iM || ao[271] !== ik || ao[272] !== sG || ao[273] !== sP || ao[274] !== sF ? (ng = iM && null != sP && !ik ? {
                icon: sG,
                name: sF
            } : void 0, ao[270] = iM, ao[271] = ik, ao[272] = sG, ao[273] = sP, ao[274] = sF, ao[275] = ng) : ng = ao[275];
            let iR = ng;
            ao[276] !== ai || ao[277] !== sA || ao[278] !== iM || ao[279] !== rv || ao[280] !== iy || ao[281] !== iR ? (nm = sA ? (0, a.jsx)(eX.BusinessAgentConversationHeader, {
                conversationId: ai,
                fallback: null
            }) : (0, a.jsx)(nW, {
                onClick: iy,
                hasTitleMenu: iM,
                project: iR,
                title: rv
            }), ao[276] = ai, ao[277] = sA, ao[278] = iM, ao[279] = rv, ao[280] = iy, ao[281] = iR, ao[282] = nm) : nm = ao[282];
            let iN = nm,
                iO = null != sU,
                iL = sA ? null : il;
            ao[283] !== ik || ao[284] !== sG || ao[285] !== sP || ao[286] !== sF || ao[287] !== iR ? (nf = null != sP && null == iR ? (0, a.jsx)(nD, {
                projectId: sP,
                name: sF,
                icon: sG,
                linkToProject: ik
            }) : null, ao[283] = ik, ao[284] = sG, ao[285] = sP, ao[286] = sF, ao[287] = iR, ao[288] = nf) : nf = ao[288], ao[289] !== aT || ao[290] !== iL || ao[291] !== nf ? (nv = (0, a.jsxs)(a.Fragment, {
                children: [aT, iL, nf]
            }), ao[289] = aT, ao[290] = iL, ao[291] = nf, ao[292] = nv) : nv = ao[292];
            let iz = sA || !az ? iN : null;
            ao[293] !== aw || ao[294] !== ic || ao[295] !== iO || ao[296] !== nv || ao[297] !== iz ? (nb = (0, a.jsx)(nO.a, {
                hasSectionProgress: iO,
                isTemporaryChat: aw,
                leading: nv,
                start: iz,
                startActions: ic
            }), ao[293] = aw, ao[294] = ic, ao[295] = iO, ao[296] = nv, ao[297] = iz, ao[298] = nb) : nb = ao[298];
            let iF = nb,
                iB = s7.flatMap(ij).flatMap(iS),
                iD = iB.flatMap(i_);
            if (!aV && (r1.error instanceof eQ.FetchError && 423 === r1.error.status || sL && null == r0)) {
                let e;
                return ao[299] !== r1 || ao[300] !== ai || ao[301] !== aF ? (e = (0, a.jsx)(oO.a, {
                    onUnlocked: () => {
                        (0, oL.g)(aF.get(oL.f)?.projectId, [ai]), r1.refetch()
                    }
                }), ao[299] = r1, ao[300] = ai, ao[301] = aF, ao[302] = e) : e = ao[302], e
            }
            if (null != sW) {
                let e;
                return ao[303] !== sW ? (e = (0, a.jsx)(v.l, {
                    replace: !0,
                    to: sW
                }), ao[303] = sW, ao[304] = e) : e = ao[304], e
            }
            let iG = e => iT && iE ? (0, a.jsx)(nM, {
                onTitleClick: iy,
                showMenu: iM || null != e,
                triggerButton: e,
                conversationId: ai,
                title: rb,
                isHandoffPending: a7,
                isArchived: r6?.is_archived === !0,
                isChatConversation: null != r6 && !sc,
                onHandoff: sE ? oY : void 0,
                onOpenMessage: async e => {
                    a8.current?.signal.aborted === !1 && aF.get(C.b)?.pathname === aF.value.pathname && await aZ.current?.scrollToMessage(e)
                },
                projectId: sP,
                projectName: sF,
                serverConversationId: rn,
                conversationOrigin: st
            }) : null;
            ao[305] !== r6?.current_node || ao[306] !== ai || ao[307] !== sO || ao[308] !== sL || ao[309] !== aV || ao[310] !== aw || ao[311] !== rR || ao[312] !== sP || ao[313] !== s7.length || ao[314] !== rn || ao[315] !== aM || ao[316] !== ri || ao[317] !== iT || ao[318] !== rc ? (ny = !iT || aw || aV || sL ? null : (0, a.jsx)(tb, {
                conversationId: ai,
                projectId: sP,
                sharedProjectConversation: aM,
                isReady: (null != rn || null != aM) && s7.length > 0 && (rc ?? r6?.current_node) != null,
                isRestricted: ri || sO,
                isStreaming: rR
            }), ao[305] = r6?.current_node, ao[306] = ai, ao[307] = sO, ao[308] = sL, ao[309] = aV, ao[310] = aw, ao[311] = rR, ao[312] = sP, ao[313] = s7.length, ao[314] = rn, ao[315] = aM, ao[316] = ri, ao[317] = iT, ao[318] = rc, ao[319] = ny) : ny = ao[319];
            let iH = ny,
                iq = null != ip ? ai : null;
            ao[320] !== r6 || ao[321] !== rZ || ao[322] !== aN || ao[323] !== oR || ao[324] !== aO || ao[325] !== sh || ao[326] !== aV || ao[327] !== sc ? (nx = sc || aV || aO || sh || aN || oR || null == r6 && !rZ ? null : (0, a.jsx)(P.a, {}), ao[320] = r6, ao[321] = rZ, ao[322] = aN, ao[323] = oR, ao[324] = aO, ao[325] = sh, ao[326] = aV, ao[327] = sc, ao[328] = nx) : nx = ao[328], ao[329] !== r1.fetchStatus || ao[330] !== oB || ao[331] !== aO || ao[332] !== oF ? (nw = !1, ao[329] = r1.fetchStatus, ao[330] = oB, ao[331] = aO, ao[332] = oF, ao[333] = nw) : nw = ao[333], ao[334] !== r1.data || ao[335] !== r1.fetchStatus || ao[336] !== r6 || ao[337] !== ai || ao[338] !== oB || ao[339] !== rZ || ao[340] !== s5 || ao[341] !== oR || !1 !== ao[342] || ao[343] !== s7.length ? (nC = null, ao[334] = r1.data, ao[335] = r1.fetchStatus, ao[336] = r6, ao[337] = ai, ao[338] = oB, ao[339] = rZ, ao[340] = s5, ao[341] = oR, ao[342] = !1, ao[343] = s7.length, ao[344] = nC) : nC = ao[344];
            let iW = !aV && !sh && (0, et.c)() ? (0, a.jsx)(en.c, {
                callIds: iD,
                hostId: ef.a,
                conversationId: (0, u.Se)(`chatgpt:${ai}`)
            }) : null;
            ao[345] !== rb || ao[346] !== aO || ao[347] !== aD || ao[348] !== ak?.documentTitle ? (n_ = aO ? null : (0, a.jsx)(Q.a, {
                title: null == aD ? ak?.documentTitle ?? rb : null
            }), ao[345] = rb, ao[346] = aO, ao[347] = aD, ao[348] = ak?.documentTitle, ao[349] = n_) : n_ = ao[349], ao[350] !== ai || ao[351] !== aO || ao[352] !== sg || ao[353] !== aV || ao[354] !== aw || ao[355] !== sc || ao[356] !== io ? (nS = aO || sc ? null : (0, a.jsx)(t5.a, {
                conversationId: ai,
                canCopy: !sg,
                paragenEnabled: !aV,
                turns: io,
                loadHistory: !aw && !aV
            }), ao[350] = ai, ao[351] = aO, ao[352] = sg, ao[353] = aV, ao[354] = aw, ao[355] = sc, ao[356] = io, ao[357] = nS) : nS = ao[357];
            let iK = null != r6 || rZ;
            ao[358] !== oB || ao[359] !== sc || ao[360] !== iK ? (nj = (0, a.jsx)(e$.a, {
                isWorkConversation: sc,
                hasConversationContent: iK,
                hasLoadError: oB
            }), ao[358] = oB, ao[359] = sc, ao[360] = iK, ao[361] = nj) : nj = ao[361], ao[362] !== ai || ao[363] !== oB || ao[364] !== oz || ao[365] !== aO || ao[366] !== ss.pathname || ao[367] !== aF || ao[368] !== aC ? (nI = aO || !oz || oB ? null : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(oW, {
                    sharedConversationId: aC
                }), (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(el.a, {
                        onCommit: () => eo.b.contentCommitted(aF, ai, aC, ss.pathname),
                        onPaint: () => eo.b.pagePainted(aF, ai, aC)
                    }, aC ?? ai)
                })]
            }), ao[362] = ai, ao[363] = oB, ao[364] = oz, ao[365] = aO, ao[366] = ss.pathname, ao[367] = aF, ao[368] = aC, ao[369] = nI) : nI = ao[369];
            let iU = aO || null != ak ? null : (0, a.jsxs)(t7.a, {
                    chatIcon: null == sP ? void 0 : sG,
                    header: iF,
                    title: rv,
                    fullScreenTitle: iN,
                    isArchivedPreview: aN,
                    children: [null == ix ? null : (0, a.jsx)(nz, {
                        children: ix
                    }), aB?.authMethod === "chatgpt" ? (0, a.jsx)(J.v, {
                        productExperience: sc ? "work" : "chat"
                    }) : null, aV ? (0, a.jsx)(oV.a, {
                        conversationHeader: !0,
                        children: null == sj ? null : (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)(o1, {
                                data: sj
                            })
                        })
                    }) : null, id ? (0, a.jsx)(t9, {
                        conversationId: ai,
                        scheduledAutomationId: si ? so?.sidebarAutomationId : void 0
                    }, ai) : null, aw && !aV && !aN && null == sC && null == sM && null == sP && !sO && null != s6 && (0, h.a)(s6).some(iC) ? (0, a.jsx)(S.a.HeaderAction, {
                        actionId: "chatgpt-conversation-save",
                        align: "end",
                        allowsThreadContentOverlap: rW,
                        order: 100,
                        children: (0, a.jsx)(nN.a, {
                            children: (0, a.jsx)(ia, {
                                conversationId: ai
                            })
                        })
                    }) : null, iT && (0, a.jsx)(nO.b, {
                        hasTitleMenu: iM,
                        menu: !az && (iG() ?? (iA && (0, a.jsx)(nR, {
                            title: rb,
                            lockdownConversationId: ai
                        }))),
                        children: iH
                    })]
                }),
                iV = tO.a,
                iQ = !aL || !o2 || o0.isHidden || o4 || sk || sg || r3 || aN || sh || sx || sy || sa || rM || rA,
                i$ = sP,
                iY = null != sM,
                iJ = eF.c;
            ao[370] !== aO || ao[371] !== sl || ao[372] !== sc || ao[373] !== ix || ao[374] !== ak ? (nT = aO || null != ak ? ix : sl && (0, eD.a)() && !sc && (0, a.jsx)("div", {
                className: "h-px",
                "aria-hidden": !0
            }), ao[370] = aO, ao[371] = sl, ao[372] = sc, ao[373] = ix, ao[374] = ak, ao[375] = nT) : nT = ao[375];
            let iX = null == sU ? "flex h-full min-h-0 flex-col" : "h-full",
                iZ = r7 ?? rb,
                i0 = !sg,
                i1 = !aX && !aO && !aV && !oX && !o0.isHidden,
                i2 = ri || sv,
                i3 = sr?.isFullWidth === !0,
                i4 = null == sr ? oA.contentShift : void 0,
                i5 = sU?.selectedIndex;
            ao[376] !== o6 || ao[377] !== ai || ao[378] !== sU ? (nE = null != sU ? (0, a.jsx)(n$, {
                conversationId: ai,
                placement: "composer",
                canStartSection: o6
            }) : void 0, ao[376] = o6, ao[377] = ai, ao[378] = sU, ao[379] = nE) : nE = ao[379], ao[380] !== ai || ao[381] !== sU ? (nP = null != sU ? (0, a.jsx)(nQ, {
                conversationId: ai
            }) : void 0, ao[380] = ai, ao[381] = sU, ao[382] = nP) : nP = ao[382];
            let i6 = !sc,
                i7 = sV ? null : ok;
            ao[383] !== r1 || ao[384] !== oD ? (nA = oD ? () => {
                r1.refetch({
                    cancelRefetch: !1
                })
            } : void 0, ao[383] = r1, ao[384] = oD, ao[385] = nA) : nA = ao[385];
            let i8 = s7.length > 0,
                i9 = na,
                le = !sO && (null == sP || null != sR),
                lt = null == sU && !se,
                ln = r1.isFetching,
                la = r2 && !aO && !aV && !sc && null == sC,
                lr = !sV && rR;
            ao[386] !== r6?.is_archived || ao[387] !== ai || ao[388] !== aN || ao[389] !== aO || ao[390] !== aV || ao[391] !== aw || ao[392] !== rR || ao[393] !== sc ? (nk = aO || !sc || aV || aN || r6?.is_archived === !0 || aw ? null : (0, a.jsx)(m.Suspense, {
                fallback: null,
                children: (0, a.jsx)(nV, {
                    conversationId: ai,
                    isTurnActive: rR
                })
            }), ao[386] = r6?.is_archived, ao[387] = ai, ao[388] = aN, ao[389] = aO, ao[390] = aV, ao[391] = aw, ao[392] = rR, ao[393] = sc, ao[394] = nk) : nk = ao[394], ao[395] !== ai || ao[396] !== aN || ao[397] !== rn ? (nL = aN ? (0, a.jsx)(eR, {
                conversationId: rn ?? ai,
                kind: "chatgpt"
            }, rn ?? ai) : void 0, ao[395] = ai, ao[396] = aN, ao[397] = rn, ao[398] = nL) : nL = ao[398];
            let ls = !sV && oe;
            ao[399] !== sM ? (nF = null != sM ? (0, a.jsx)(oS.GptPluginMigrationBanner, {
                gizmoId: sM
            }) : null, ao[399] = sM, ao[400] = nF) : nF = ao[400], ao[401] !== sE || ao[402] !== oY || ao[403] !== a7 || ao[404] !== aw || ao[405] !== sb || ao[406] !== rV ? (nG = sb && !aw ? (0, a.jsx)(t3, {
                canConvert: sE,
                isChatInstantAvailable: !rV,
                isConverting: a7,
                onConvert: oY
            }) : null, ao[401] = sE, ao[402] = oY, ao[403] = a7, ao[404] = aw, ao[405] = sb, ao[406] = rV, ao[407] = nG) : nG = ao[407], ao[408] !== r4 || ao[409] !== sh ? (nH = r4.bind(null, sh), ao[408] = r4, ao[409] = sh, ao[410] = nH) : nH = ao[410], ao[411] !== oJ || ao[412] !== aV || ao[413] !== ay ? (nq = e => {
                ay?.(e), aV && oJ()
            }, ao[411] = oJ, ao[412] = aV, ao[413] = ay, ao[414] = nq) : nq = ao[414], ao[415] !== r1.isFetching || ao[416] !== sk || ao[417] !== aJ || ao[418] !== sM || ao[419] !== aI || ao[420] !== ai || ao[421] !== aZ || ao[422] !== ag || ao[423] !== oB || ao[424] !== ah || ao[425] !== aU || ao[426] !== o4 || ao[427] !== s5 || ao[428] !== r3 || ao[429] !== oR || ao[430] !== aX || ao[431] !== aO || ao[432] !== aV || ao[433] !== aw || ao[434] !== sn || ao[435] !== na || ao[436] !== aS || ao[437] !== av || ao[438] !== rl || ao[439] !== aC || ao[440] !== r5 || ao[441] !== o2 || ao[442] !== aL || ao[443] !== iZ || ao[444] !== i0 || ao[445] !== i1 || ao[446] !== i2 || ao[447] !== i3 || ao[448] !== i4 || ao[449] !== i5 || ao[450] !== nE || ao[451] !== nP || ao[452] !== i6 || ao[453] !== i7 || ao[454] !== nA || ao[455] !== i8 || ao[456] !== le || ao[457] !== lt || ao[458] !== la || ao[459] !== lr || ao[460] !== nk || ao[461] !== nL || ao[462] !== ls || ao[463] !== nF || ao[464] !== nG || ao[465] !== nH || ao[466] !== nq || ao[467] !== af || ao[468] !== io || ao[469] !== ak ? (nU = (0, a.jsx)(ob, {
                ref: aZ,
                printTitle: iZ,
                trackShownImpressions: i0,
                trackReadState: i1,
                workspace: ak,
                shouldBlockMcpApps: i2,
                isCoveredByFloatingPanel: i3,
                isFormOnly: aX,
                isInlinePreview: aO,
                hideModelPicker: ah,
                showFilePicker: aL,
                disableAutoFocus: ag,
                transcriptPresentation: af,
                scrollOrigin: av,
                composerRef: a1,
                contentX: i4,
                conversationId: ai,
                composerConversationId: aJ,
                sectionIndex: i5,
                composerLeadingContent: aI,
                aboveComposerContent: nE,
                historyLoadingContent: nP,
                requiredSystemHints: aS,
                isChatConversation: i6,
                customGptId: sM,
                entries: io,
                errorMessage: i7,
                hasLoadError: oB,
                onRetryLoad: nA,
                hasRenderableTurns: i8,
                isComposerDisabled: o4,
                readOnlyPlaceholder: i9,
                moreDetailsEnabled: le,
                isConversationEmpty: s5,
                showEmptyState: lt,
                isConversationFetching: ln,
                isConversationLoading: oR,
                isSharedConversation: aV,
                isSubmitDisabled: r3,
                retainLiveModelPicker: la,
                isTemporaryChat: aw,
                isTurnActive: lr,
                isWorkConversation: sn,
                onboardingPrelude: nk,
                scrollStateConversationId: rl,
                initialResponsePlacementKey: aU,
                sharedConversationId: aC,
                sharedPostRegulatedConnectorKind: r5,
                showComposer: o2,
                archivedPreviewFooter: nL,
                showPendingLoadingMessage: ls,
                gptPluginMigrationBanner: nF,
                awaitingGptContinuation: sk,
                workOnlyConversionBanner: nG,
                onAddSelectedText: nH,
                onSubmitAccepted: nq
            }), ao[415] = r1.isFetching, ao[416] = sk, ao[417] = aJ, ao[418] = sM, ao[419] = aI, ao[420] = ai, ao[421] = aZ, ao[422] = ag, ao[423] = oB, ao[424] = ah, ao[425] = aU, ao[426] = o4, ao[427] = s5, ao[428] = r3, ao[429] = oR, ao[430] = aX, ao[431] = aO, ao[432] = aV, ao[433] = aw, ao[434] = sn, ao[435] = na, ao[436] = aS, ao[437] = av, ao[438] = rl, ao[439] = aC, ao[440] = r5, ao[441] = o2, ao[442] = aL, ao[443] = iZ, ao[444] = i0, ao[445] = i1, ao[446] = i2, ao[447] = i3, ao[448] = i4, ao[449] = i5, ao[450] = nE, ao[451] = nP, ao[452] = i6, ao[453] = i7, ao[454] = nA, ao[455] = i8, ao[456] = le, ao[457] = lt, ao[458] = la, ao[459] = lr, ao[460] = nk, ao[461] = nL, ao[462] = ls, ao[463] = nF, ao[464] = nG, ao[465] = nH, ao[466] = nq, ao[467] = af, ao[468] = io, ao[469] = ak, ao[470] = nU) : nU = ao[470], ao[471] !== ol || ao[472] !== tQ || ao[473] !== ot || ao[474] !== oi || ao[475] !== ri || ao[476] !== oy || ao[477] !== o7 || ao[478] !== oM || ao[479] !== oA ? (nZ = oy && null != tQ ? (0, a.jsx)(tZ, {
                composerActions: o7,
                conversationId: oM,
                controlledState: ot ? {
                    isOpen: ol.isOpen,
                    shouldPreventAutoFocus: ol.shouldPreventAutoFocus,
                    onOpenChange: e => {
                        oi({
                            ...ol,
                            isOpen: e,
                            shouldPreventAutoFocus: !e && ol.shouldPreventAutoFocus
                        })
                    }
                } : void 0,
                readData: tQ,
                display: oA,
                shouldBlockExternalEgress: ri
            }) : null, ao[471] = ol, ao[472] = tQ, ao[473] = ot, ao[474] = oi, ao[475] = ri, ao[476] = oy, ao[477] = o7, ao[478] = oM, ao[479] = oA, ao[480] = nZ) : nZ = ao[480], ao[481] === Symbol.for("react.memo_cache_sentinel") ? (n0 = (0, a.jsx)(tR.a, {}), ao[481] = n0) : n0 = ao[481], ao[482] !== aO ? (n1 = null, ao[482] = aO, ao[483] = n1) : n1 = ao[483], ao[484] !== sg || ao[485] !== nU || ao[486] !== nZ || ao[487] !== n1 || ao[488] !== iX ? (n2 = (0, a.jsxs)("div", {
                className: iX,
                inert: sg,
                children: [nU, nZ, n0, n1]
            }), ao[484] = sg, ao[485] = nU, ao[486] = nZ, ao[487] = n1, ao[488] = iX, ao[489] = n2) : n2 = ao[489];
            let lo = !sh && (0, et.c)() ? (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(ig, {
                    conversationId: ai,
                    shouldBlockExternalEgress: ri || sv,
                    widgets: iB.filter(iw)
                }), aV ? null : (0, a.jsx)(ea.a, {
                    blockedWidgetSource: rJ ? void 0 : "descriptor",
                    transcriptMcpAppIds: (0, ih.c)(ai, iB, rJ),
                    shouldBlockExternalEgress: ri || sv
                })]
            }) : null;
            ao[490] !== iJ || ao[491] !== aP || ao[492] !== sp || ao[493] !== n2 || ao[494] !== lo || ao[495] !== nT ? (n3 = (0, a.jsxs)(iJ, {
                floatingPanelWidth: sp,
                header: nT,
                banner: aP,
                children: [n2, lo]
            }), ao[490] = iJ, ao[491] = aP, ao[492] = sp, ao[493] = n2, ao[494] = lo, ao[495] = nT, ao[496] = n3) : n3 = ao[496], ao[497] !== iV || ao[498] !== aJ || ao[499] !== st || ao[500] !== aw || ao[501] !== sP || ao[502] !== n3 || ao[503] !== iQ || ao[504] !== iY ? (n4 = (0, a.jsx)(iV, {
                conversationId: aJ,
                conversationOrigin: st,
                disabled: iQ,
                isTemporaryChat: aw,
                projectId: i$,
                requiresGizmoId: iY,
                children: n3
            }), ao[497] = iV, ao[498] = aJ, ao[499] = st, ao[500] = aw, ao[501] = sP, ao[502] = n3, ao[503] = iQ, ao[504] = iY, ao[505] = n4) : n4 = ao[505], ao[506] !== oG || ao[507] !== n4 || ao[508] !== iq || ao[509] !== nx || ao[510] !== nw || ao[511] !== nC || ao[512] !== iW || ao[513] !== n_ || ao[514] !== nS || ao[515] !== nj || ao[516] !== nI || ao[517] !== iU ? (n5 = (0, a.jsxs)(oG, {
                courseChatId: iq,
                children: [nx, nw, nC, iW, n_, nS, nj, nI, iU, null, n4]
            }), ao[506] = oG, ao[507] = n4, ao[508] = iq, ao[509] = nx, ao[510] = nw, ao[511] = nC, ao[512] = iW, ao[513] = n_, ao[514] = nS, ao[515] = nj, ao[516] = nI, ao[517] = iU, ao[518] = n5) : n5 = ao[518];
            let li = n5,
                ll = !aO && !sn,
                lc = aV || !r1.isFetchedAfterMount || r1.isFetching || r2 ? null : r1.error;
            ao[519] !== ai || ao[520] !== aO || ao[521] !== aF || ao[522] !== aC ? (n6 = e => {
                aO || eo.b.loadFailed(aF, ai, aC, e)
            }, ao[519] = ai, ao[520] = aO, ao[521] = aF, ao[522] = aC, ao[523] = n6) : n6 = ao[523];
            let ld = oB ? r1.error : null,
                lu = null == st && null == r6 ? null : sc,
                lh = !sc && !oR;
            ao[524] !== a0 || ao[525] !== aJ || ao[526] !== ii || ao[527] !== aC ? (n7 = {
                conversationId: aJ,
                inlineBioSafetyNotice: ii,
                composer: a0,
                sharedConversationId: aC
            }, ao[524] = a0, ao[525] = aJ, ao[526] = ii, ao[527] = aC, ao[528] = n7) : n7 = ao[528], ao[529] !== ai || ao[530] !== aO || ao[531] !== rn || ao[532] !== aC ? (n8 = aO ? null : (0, eo.a)(rn ?? ai, aC), ao[529] = ai, ao[530] = aO, ao[531] = rn, ao[532] = aC, ao[533] = n8) : n8 = ao[533];
            let lp = !oF;
            return ao[534] !== lp ? (n9 = (0, a.jsx)(s.b, {
                name: "conversation data",
                active: lp
            }), ao[534] = lp, ao[535] = n9) : n9 = ao[535], ao[536] !== sg ? (ae = (0, a.jsx)(s.b, {
                name: "workspace policy",
                active: sg
            }), ao[536] = sg, ao[537] = ae) : ae = ao[537], ao[538] !== ad || ao[539] !== li || ao[540] !== ai || ao[541] !== iH || !1 !== ao[542] || ao[543] !== sc || ao[544] !== iG ? (at = ad ? (0, a.jsx)(ad, {
                buttons: iH,
                conversationId: ai,
                isWorkConversation: sc || !1,
                renderMenu: iG,
                children: li
            }) : li, ao[538] = ad, ao[539] = li, ao[540] = ai, ao[541] = iH, ao[542] = !1, ao[543] = sc, ao[544] = iG, ao[545] = at) : at = ao[545], ao[546] !== n8 || ao[547] !== n9 || ao[548] !== ae || ao[549] !== at ? (an = (0, a.jsxs)(ei.h, {
                destinationKey: n8,
                children: [n9, ae, at]
            }), ao[546] = n8, ao[547] = n9, ao[548] = ae, ao[549] = at, ao[550] = an) : an = ao[550], ao[551] !== n7 || ao[552] !== an ? (aa = (0, a.jsx)(e7.a, {
                value: n7,
                children: an
            }), ao[551] = n7, ao[552] = an, ao[553] = aa) : aa = ao[553], ao[554] !== lh || ao[555] !== aa ? (ar = (0, a.jsx)(b.a, {
                enabled: lh,
                children: aa
            }), ao[554] = lh, ao[555] = aa, ao[556] = ar) : ar = ao[556], ao[557] !== oD || ao[558] !== rn || ao[559] !== ll || ao[560] !== lc || ao[561] !== n6 || ao[562] !== ld || ao[563] !== lu || ao[564] !== ar ? (as = (0, a.jsx)(R.a, {
                showChatFallback: ll,
                conversationId: rn,
                error: lc,
                onInlineLoadError: n6,
                loadError: ld,
                canRetry: oD,
                isWorkConversation: lu,
                children: ar
            }), ao[557] = oD, ao[558] = rn, ao[559] = ll, ao[560] = lc, ao[561] = n6, ao[562] = ld, ao[563] = lu, ao[564] = ar, ao[565] = as) : as = ao[565], as
        }

        function iw(e) {
            return "chatgpt-hosted-widget" === e.type
        }

        function iC(e) {
            return "user" === e.author.role
        }

        function i_(e) {
            return "mcp-tool-call" === e.type ? [e.callId] : []
        }

        function iS(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : e
        }

        function ij(e) {
            let {
                turn: t
            } = e;
            return t.items
        }

        function iI(e) {
            return "threadId" in e ? e.threadId : e.clientThreadId
        }
    }),
    Ppno: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("Q840"),
            o = n("zd8w"),
            i = n("hZax"),
            l = n("Ho4C"),
            c = n("KFm7"),
            d = n("lsfk"),
            u = n("SBcL"),
            h = n("bIvi");

        function p(e, t) {
            let n = e.querySelector(`[data-turn-key="${CSS.escape(t)}"]`);
            return n?.querySelector("[data-user-message-bubble]") ?? n
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, g, m, f, v, b, y, x, w, C, _, S, j, I, T, E, P, A = (0, r.c)(73),
                    {
                        initialPlacementKey: M,
                        isActiveVoiceConversation: k,
                        isLoadingHistory: R,
                        latestUserTurnKey: N,
                        conversationId: O,
                        onResponseSpacerStateChange: L,
                        preserveResponseViewport: z
                    } = e,
                    F = void 0 !== k && k,
                    B = void 0 !== R && R,
                    D = (0, i.i)();
                A[0] !== F || A[1] !== D ? (t = F && (0, i.d)(D, "2825211774").get("voice_orb_transcript_clearance_enabled", !1), A[0] = F, A[1] = D, A[2] = t) : t = A[2];
                let G = t,
                    H = (0, o.useRef)(N),
                    q = (0, s.x)(null == O ? 0 : u.b, O ?? ""),
                    W = (0, o.useRef)(q),
                    K = (0, o.useRef)(B),
                    U = (0, o.useRef)(null),
                    V = (0, o.useRef)(null),
                    Q = (0, o.useRef)(null),
                    $ = (0, d.b)();
                A[3] !== $ ? (n = () => new c.a($), A[3] = $, A[4] = n) : n = A[4];
                let [Y] = (0, o.useState)(n), {
                    clear: J,
                    consumeGrowth: X,
                    getHeightPx: Z,
                    ensureScrollRoomForAnchor: ee,
                    place: et,
                    prepareThreadEndContent: en
                } = Y, {
                    addScrollListener: ea,
                    getScrollElement: er,
                    responseSpacerController: es
                } = $;
                A[5] !== er || A[6] !== N || A[7] !== et || A[8] !== z || A[9] !== Y || A[10] !== $ || A[11] !== G ? (g = e => {
                    if (!z?.(e => {
                            let t = er();
                            null != t && et(p(t, e) ?? void 0)
                        })) {
                        if (null == e && null != N && !G) {
                            $.holdViewport(), U.current = {
                                previousKey: N,
                                signal: Y.getPendingPlacementSignal()
                            };
                            return
                        }
                        et(e)
                    }
                }, A[5] = er, A[6] = N, A[7] = et, A[8] = z, A[9] = Y, A[10] = $, A[11] = G, A[12] = g) : g = A[12];
                let eo = (0, h.a)(g);
                A[13] !== J || A[14] !== $ ? (m = e => {
                    J(), $.scrollToBottom(e)
                }, A[13] = J, A[14] = $, A[15] = m) : m = A[15];
                let ei = (0, h.a)(m);
                A[16] !== ei || A[17] !== q ? (f = () => {
                    W.current !== q && (W.current = q, ei())
                }, v = [q, ei], A[16] = ei, A[17] = q, A[18] = f, A[19] = v) : (f = A[18], v = A[19]), (0, o.useLayoutEffect)(f, v), A[20] !== X || A[21] !== Z || A[22] !== en || A[23] !== Y.height || A[24] !== Y.holdViewport || A[25] !== es || A[26] !== ei ? (b = () => es.register({
                    consumeGrowth: X,
                    getHeightPx: Z,
                    holdViewport: Y.holdViewport,
                    prepareThreadEndContent: en,
                    scrollToBottom: ei
                }, Y.height).dispose, A[20] = X, A[21] = Z, A[22] = en, A[23] = Y.height, A[24] = Y.holdViewport, A[25] = es, A[26] = ei, A[27] = b) : b = A[27], A[28] !== X || A[29] !== Z || A[30] !== en || A[31] !== Y || A[32] !== es || A[33] !== ei ? (y = [X, Z, en, Y, es, ei], A[28] = X, A[29] = Z, A[30] = en, A[31] = Y, A[32] = es, A[33] = ei, A[34] = y) : y = A[34], (0, o.useInsertionEffect)(b, y), A[35] !== Y ? (x = (e, t) => {
                    let n = U.current;
                    null != n && n.previousKey !== e && (U.current = null, n.signal.aborted || Y.revealSubmittedTurn(t)), V.current = {
                        turnKey: e,
                        element: t
                    }, Q.current?.(e, t)
                }, A[35] = Y, A[36] = x) : x = A[36];
                let el = (0, h.a)(x);
                A[37] === Symbol.for("react.memo_cache_sentinel") ? (w = e => {
                    Q.current = e;
                    let t = V.current;
                    return null != t && e(t.turnKey, t.element), () => {
                        Q.current = null
                    }
                }, A[37] = w) : w = A[37];
                let ec = (0, h.a)(w);
                A[38] !== er || A[39] !== N || A[40] !== et || A[41] !== G ? (C = () => {
                    let e = er();
                    if (null != e && 0 !== e.clientHeight)
                        if (G && null != N) {
                            let t = p(e, N);
                            if (null == t) return;
                            et(t)
                        } else et()
                }, A[38] = er, A[39] = N, A[40] = et, A[41] = G, A[42] = C) : C = A[42];
                let ed = (0, o.useEffectEvent)(C);
                return A[43] !== J || A[44] !== X || A[45] !== ee || A[46] !== Z || A[47] !== L || A[48] !== el || A[49] !== eo || A[50] !== G ? (_ = () => (L({
                    voiceAutoScrollEnabled: G,
                    clear: J,
                    consumeGrowth: X,
                    getHeightPx: Z,
                    ensureScrollRoomForAnchor: ee,
                    onTurnLayoutReady: el,
                    place: eo
                }), () => {
                    L(null)
                }), S = [J, X, Z, ee, L, el, eo, G], A[43] = J, A[44] = X, A[45] = ee, A[46] = Z, A[47] = L, A[48] = el, A[49] = eo, A[50] = G, A[51] = _, A[52] = S) : (_ = A[51], S = A[52]), (0, o.useLayoutEffect)(_, S), A[53] !== er || A[54] !== B || A[55] !== N || A[56] !== eo || A[57] !== Y || A[58] !== ec || A[59] !== G ? (j = () => {
                    let e = H.current,
                        t = K.current;
                    if (H.current = N, K.current = B, G && !B && !t && null != N && N !== e) {
                        var n, a, r, s, o;
                        let e, t, i, l, c;
                        return n = N, a = er, r = eo, s = ec, o = Y.getPendingPlacementSignal(), t = null, i = null, l = !1, c = () => {
                            l = !0, null != t && (cancelAnimationFrame(t), t = null), o.removeEventListener("abort", c), e?.()
                        }, o.addEventListener("abort", c, {
                            once: !0
                        }), e = s((e, s) => {
                            l || e !== n || (i = s, null == t && (t = requestAnimationFrame(() => {
                                t = null;
                                let e = a(),
                                    n = i?.querySelector("[data-user-message-bubble]") ?? i;
                                null != e && 0 !== e.clientHeight && null != n && e.contains(n) && !(n.getBoundingClientRect().height <= 0) && (c(), r(n))
                            })))
                        }), c
                    }
                }, I = [er, B, N, eo, ec, Y, G], A[53] = er, A[54] = B, A[55] = N, A[56] = eo, A[57] = Y, A[58] = ec, A[59] = G, A[60] = j, A[61] = I) : (j = A[60], I = A[61]), (0, o.useLayoutEffect)(j, I), A[62] !== ea || A[63] !== M || A[64] !== ed || A[65] !== Y ? (T = () => {
                    if (null == M) return;
                    let e = Y.getPendingPlacementSignal();
                    return ea(() => {
                        e.aborted || ed()
                    })
                }, A[62] = ea, A[63] = M, A[64] = ed, A[65] = Y, A[66] = T) : T = A[66], A[67] !== ea || A[68] !== M || A[69] !== Y ? (E = [ea, M, Y], A[67] = ea, A[68] = M, A[69] = Y, A[70] = E) : E = A[70], (0, o.useLayoutEffect)(T, E), A[71] !== Y ? (P = (0, a.jsx)(l.a, {
                    controller: Y
                }), A[71] = Y, A[72] = P) : P = A[72], P
            }
        })
    }),
    TRQ3: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("Q840"),
            o = n("zd8w"),
            i = n("rEML"),
            l = n("OWtl"),
            c = n("Ow2S"),
            d = n("wwvo"),
            u = n("x4uR"),
            h = n("u4MG"),
            p = n("OOaz"),
            g = n("dQRk"),
            m = n("jAnS");
        let f = (0, s.d)(l.a, (e, t) => {
            let {
                get: n
            } = t, a = n(g.j, e);
            return null != a ? a : n(g.E, e) || n(c.j, e) || null != n(c.A, e) ? void 0 : null
        });

        function v(e) {
            let t, n, a = (0, r.c)(7),
                {
                    to: s,
                    mask: l,
                    sourceKey: c,
                    state: d
                } = e,
                u = (0, o.useContext)(i.c)?.router;
            return a[0] !== l || a[1] !== u || a[2] !== c || a[3] !== d || a[4] !== s ? (t = () => {
                u?.state.location.key === c && "idle" === u.state.navigation.state && u.navigate(s, {
                    replace: !0,
                    mask: l,
                    state: d
                })
            }, n = [u, s, l, c, d], a[0] = l, a[1] = u, a[2] = c, a[3] = d, a[4] = s, a[5] = t, a[6] = n) : (t = a[5], n = a[6]), (0, o.useEffect)(t, n), null
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, o, c, b, y, x = (0, r.c)(53),
                    {
                        children: w,
                        conversationId: C,
                        routePattern: _,
                        homePath: S
                    } = e,
                    j = void 0 === S ? "/" : S,
                    I = (0, s.y)(l.a),
                    {
                        hash: T,
                        key: E,
                        mask: P,
                        pathname: A,
                        search: M,
                        state: k
                    } = (0, i.X)(),
                    {
                        conversationId: R,
                        gizmoId: N
                    } = (0, i.cb)(),
                    O = (0, s.x)(f, C),
                    L = (0, s.x)(g.E, C),
                    z = (0, s.x)(g.T, C),
                    F = L ? z : N;
                x[0] !== F ? (t = null != F && (0, h.a)(F) ? F : null, x[0] = F, x[1] = t) : t = x[1], x[2] === Symbol.for("react.memo_cache_sentinel") ? (n = {
                    enabled: !1
                }, x[2] = n) : n = x[2];
                let {
                    data: B
                } = (0, s.x)(u.b, t, n);
                x[3] !== F ? (o = null == F || (0, h.a)(F) ? null : F, x[3] = F, x[4] = o) : o = x[4], x[5] === Symbol.for("react.memo_cache_sentinel") ? (c = {
                    enabled: !1
                }, x[5] = c) : c = x[5];
                let {
                    data: D
                } = (0, s.x)(d.b, o, c);
                if (null === O || (0, m.i)(M) && null != O && !L) {
                    let e;
                    return x[6] !== j || x[7] !== M ? (e = (0, a.jsx)(i.l, {
                        replace: !0,
                        to: {
                            pathname: j,
                            search: M
                        }
                    }), x[6] = j, x[7] = M, x[8] = e) : e = x[8], e
                }
                if (x[9] !== C || x[10] !== R || x[11] !== D || x[12] !== F || x[13] !== T || x[14] !== E || x[15] !== P || x[16] !== A || x[17] !== B || x[18] !== O || x[19] !== _ || x[20] !== I || x[21] !== M || x[22] !== k) {
                    let e = null != _ ? (0, i.C)(_, {
                            conversationId: O ?? C
                        }) : (0, m.c)(O ?? C, {
                            gizmoId: B?.gizmo.short_url ?? D?.gizmo.short_url ?? F
                        }),
                        t = new URLSearchParams(M),
                        n = null != O && t.has("mfr"),
                        r = I.get(g.y, C),
                        s = k;
                    if (n) {
                        let e, n;
                        if (t.delete("mfr"), x[24] !== k ? (e = k ?? {}, x[24] = k, x[25] = e) : e = x[25], x[26] !== e) {
                            let {
                                modelFirstLanding: t,
                                modelFirstFallback: a,
                                ...r
                            } = e;
                            n = r, x[26] = e, x[27] = n
                        } else n = x[27];
                        s = n
                    }
                    if (null != R && (0, p.e)(R) && null != O) {
                        let e;
                        x[28] !== s ? (e = {
                            ...s,
                            fromChatGptFirstSend: !0
                        }, x[28] = s, x[29] = e) : e = x[29], s = e
                    }
                    if (b = null, A !== e || n) {
                        let o, l = (0, i.y)({
                            hash: n ? "" : T,
                            pathname: e,
                            search: n ? t.toString() : M
                        });
                        if ("tpp" === r || "flora" === r || k?.workTurnVisit != null) {
                            let e, t, n = s,
                                a = k?.workTurnVisit;
                            x[30] !== E || x[31] !== I || x[32] !== a ? (e = (0, m.f)(I, E, a), x[30] = E, x[31] = I, x[32] = a, x[33] = e) : e = x[33], x[34] !== s || x[35] !== e ? (t = {
                                ...n,
                                workTurnVisit: e
                            }, x[34] = s, x[35] = e, x[36] = t) : t = x[36], s = t
                        }
                        let c = k?.businessProfileShareConversation;
                        if (null != c && (c.conversationId === C || c.conversationId === R)) {
                            let e, t, n = O ?? C;
                            x[37] !== c || x[38] !== n ? (e = {
                                ...c,
                                conversationId: n
                            }, x[37] = c, x[38] = n, x[39] = e) : e = x[39], x[40] !== s || x[41] !== e ? (t = {
                                ...s,
                                businessProfileShareConversation: e
                            }, x[40] = s, x[41] = e, x[42] = t) : t = x[42], s = t
                        }
                        x[43] !== E || x[44] !== P || x[45] !== s || x[46] !== O || x[47] !== c || x[48] !== l ? (o = P && null != c && (c.intent?.destination?.kind !== "agent" || null == O) ? (0, a.jsx)(v, {
                            to: l,
                            mask: P,
                            sourceKey: E,
                            state: s
                        }) : (0, a.jsx)(i.l, {
                            replace: !0,
                            state: s,
                            to: l
                        }), x[43] = E, x[44] = P, x[45] = s, x[46] = O, x[47] = c, x[48] = l, x[49] = o) : o = x[49], b = o
                    }
                    x[9] = C, x[10] = R, x[11] = D, x[12] = F, x[13] = T, x[14] = E, x[15] = P, x[16] = A, x[17] = B, x[18] = O, x[19] = _, x[20] = I, x[21] = M, x[22] = k, x[23] = b
                } else b = x[23];
                return x[50] !== w || x[51] !== b ? (y = (0, a.jsxs)(a.Fragment, {
                    children: [b, w]
                }), x[50] = w, x[51] = b, x[52] = y) : y = x[52], y
            }
        })
    }),
    xtkq: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("Q840"),
            o = n("zd8w"),
            i = n("Q2Qp"),
            l = n("tSEg"),
            c = n("JCJj"),
            d = n("iS3k");

        function u(e) {
            return null != e
        }
        n.d(t, {}, {
            a: function() {
                let e, t, n, h = (0, r.c)(6),
                    p = (0, s.y)(l.a),
                    g = (0, s.z)(c.e),
                    m = (0, o.useContext)(i.a);
                return h[0] !== p ? (e = () => (p.set(c.f, !0), () => {
                    p.set(c.f, !1), (0, c.a)(p)
                }), t = [p], h[0] = p, h[1] = e, h[2] = t) : (e = h[1], t = h[2]), (0, o.useLayoutEffect)(e, t), h[3] !== m || h[4] !== g ? (n = null == g ? null : (0, a.jsx)(a.Fragment, {
                    children: [...(0, c.b)(g), g.overlay].filter(u).map(e => (0, a.jsx)(d.a.Root, {
                        animateOnMount: e.animateOnMount ?? !0,
                        fillHeight: !0,
                        fullWidth: e.isFullWidth,
                        fullWidthTransition: e.fullWidthTransition,
                        isPIPObstacle: !1,
                        portalContainer: m,
                        reserveToolbarSpace: e.reserveToolbarSpace ?? !0,
                        shouldHideInlineImmediately: e !== g && e !== g.overlay,
                        shouldShow: !0,
                        width: e.width ?? 420,
                        children: (0, a.jsx)(d.a.Content, {
                            className: "h-full",
                            "aria-label": e.label,
                            role: "complementary",
                            scrollable: !1,
                            children: e.content
                        })
                    }, e.renderKey))
                }), h[3] = m, h[4] = g, h[5] = n) : n = h[5], n
            }
        })
    }),
    zrki: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("mBJV"),
            o = n("Q840"),
            i = n("zd8w"),
            l = n("Wf1j"),
            c = n("oyxz"),
            d = n("rEML"),
            u = n("Cslg"),
            h = n("kphc"),
            p = n("Sm6l"),
            g = n("bqtn"),
            m = n("Ot7V"),
            f = n("bf6R"),
            v = n("Bbed"),
            b = n("X6Vn"),
            y = n("SGsN"),
            x = n("lsCb"),
            w = n("yGJW"),
            C = n("gBBC"),
            _ = n("OWtl"),
            S = n("hZax"),
            j = n("JYRT"),
            I = n("L2MT"),
            T = n("wwvo"),
            E = n("jeai"),
            P = n("wrCb"),
            A = n("H7Nt"),
            M = n("vzxm"),
            k = n("jAnS"),
            R = n("oTAb"),
            N = n("YO3u"),
            O = n("z7pB"),
            L = n("I5s4");
        let z = (0, v.a)(async () => (await Promise.all([n.e(680612), n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(480171), n.e(716164), n.e(74952)]).then(n.bind(n, "eZlv"))).GptHeaderAboutDialog);

        function F(e) {
            let t, n, v, E, F, B, D, G, H, q, W, K, U, V, Q, $, Y, J, X, Z, ee = (0, r.c)(57),
                {
                    gizmo: et
                } = e,
                en = (0, o.y)(_.a),
                ea = (0, l.a)(),
                er = (0, o.z)(I.a),
                {
                    search: es
                } = (0, d.X)(),
                eo = (0, d._)(),
                [ei, el] = (0, i.useState)(!1),
                ec = (0, S.f)("2160578039"),
                ed = (0, o.x)(j.a, "2513446768"),
                eu = ec && "gpt" === et.gizmo.gizmo_type && null != et.gizmo.migrated_plugin_id;
            ee[0] !== ed ? (t = ed?.get("disable_gpt_updates", !1), ee[0] = ed, ee[1] = t) : t = ee[1];
            let eh = t,
                ep = et.gizmo.current_user_permission?.can_write && !eu && !eh,
                {
                    data: eg
                } = (0, o.z)(T.c);
            ee[2] !== et.gizmo.id || ee[3] !== eg ? (n = eg?.some(e => {
                let {
                    item: t
                } = e;
                return t.gizmo.id === et.gizmo.id
            }), ee[2] = et.gizmo.id, ee[3] = eg, ee[4] = n) : n = ee[4];
            let em = n;
            ee[5] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, P.a)("/gpts/editor"), ee[5] = v) : v = ee[5];
            let ef = `${v}/${encodeURIComponent(et.gizmo.id)}`;
            ee[6] !== et.gizmo.id || ee[7] !== et.gizmo.short_url ? (E = et.gizmo.short_url?.trim() || et.gizmo.id, ee[6] = et.gizmo.id, ee[7] = et.gizmo.short_url, ee[8] = E) : E = ee[8], ee[9] !== E ? (F = (0, M.c)(E), ee[9] = E, ee[10] = F) : F = ee[10], ee[11] !== es ? (B = (0, k.e)("", (0, k.i)(es)), ee[11] = es, ee[12] = B) : B = ee[12];
            let ev = `${F}${B}`;
            ee[13] !== ea ? (D = ea.formatMessage({
                id: "chatgptConversations.customGpt.actionsMenu",
                defaultMessage: "GPT actions"
            }), ee[13] = ea, ee[14] = D) : D = ee[14];
            let eb = D,
                ey = er ? "full" : void 0;
            ee[15] === Symbol.for("react.memo_cache_sentinel") ? (G = (0, a.jsx)(x.a, {
                className: "icon-sm"
            }), ee[15] = G) : G = ee[15], ee[16] !== eb || ee[17] !== ey ? (H = (0, a.jsx)(p.a, {
                "aria-label": eb,
                color: "ghost",
                radius: ey,
                size: "icon",
                children: G
            }), ee[16] = eb, ee[17] = ey, ee[18] = H) : H = ee[18], ee[19] !== et.gizmo.gizmo_type || ee[20] !== et.gizmo.id || ee[21] !== eo || ee[22] !== ev || ee[23] !== en ? (q = "gpt" === et.gizmo.gizmo_type ? (0, a.jsxs)(g.c.Item, {
                href: ev,
                onClick: e => {
                    e.defaultPrevented || ((0, w.a)(en, s.uc, {
                        stage: "CHATGPT_NEW_CHAT_ENTRY_STAGE_ENTRY",
                        entryPoint: "CHATGPT_NEW_CHAT_ENTRY_POINT_GPT_MENU",
                        location: "CHATGPT_NEW_CHAT_ENTRY_LOCATION_GIZMO_INFORMATION_DROPDOWN",
                        gizmoId: et.gizmo.id
                    }), 0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || (e.preventDefault(), el(!1), (0, C.d)(en, null), (0, h.n)(en, "chat"), eo(ev, {
                        state: {
                            focusComposerNonce: Date.now()
                        }
                    })))
                },
                children: [(0, a.jsx)(g.c.ItemIcon, {
                    children: (0, a.jsx)(f.Vh, {})
                }), (0, a.jsx)(c.a, {
                    id: "chatgptConversations.customGpt.newChat",
                    defaultMessage: "New chat"
                })]
            }) : null, ee[19] = et.gizmo.gizmo_type, ee[20] = et.gizmo.id, ee[21] = eo, ee[22] = ev, ee[23] = en, ee[24] = q) : q = ee[24], ee[25] !== et || ee[26] !== en ? (W = () => (0, b.f)(en, z, {
                accountId: en.get(u.f),
                resource: et
            }), ee[25] = et, ee[26] = en, ee[27] = W) : W = ee[27], ee[28] === Symbol.for("react.memo_cache_sentinel") ? (K = (0, a.jsx)(g.c.ItemIcon, {
                children: (0, a.jsx)(f.me, {})
            }), U = (0, a.jsx)(c.a, {
                id: "chatgptConversations.customGpt.about",
                defaultMessage: "About"
            }), ee[28] = K, ee[29] = U) : (K = ee[28], U = ee[29]), ee[30] !== W ? (V = (0, a.jsxs)(g.c.Item, {
                onSelect: W,
                children: [K, U]
            }), ee[30] = W, ee[31] = V) : V = ee[31];
            let ex = em ? L.a : O.a;
            return ee[32] !== et || ee[33] !== ea || ee[34] !== em || ee[35] !== en ? (Q = () => {
                (0, T.f)(en, et, !em).catch(() => {
                    en.get(y.f).danger(ea.formatMessage({
                        id: "chatgptConversations.customGpt.pinFailed",
                        defaultMessage: "Couldn't update pinned GPT"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.customGpt.pinFailed"
                        }
                    })
                })
            }, ee[32] = et, ee[33] = ea, ee[34] = em, ee[35] = en, ee[36] = Q) : Q = ee[36], ee[37] !== em ? ($ = em ? (0, a.jsx)(c.a, {
                id: "chatgptConversations.customGpt.unpin",
                defaultMessage: "Unpin GPT"
            }) : (0, a.jsx)(c.a, {
                id: "chatgptConversations.customGpt.pin",
                defaultMessage: "Pin GPT"
            }), ee[37] = em, ee[38] = $) : $ = ee[38], ee[39] !== ex || ee[40] !== Q || ee[41] !== $ ? (Y = (0, a.jsx)(g.c.Item, {
                leftIconAsset: ex,
                onSelect: Q,
                children: $
            }), ee[39] = ex, ee[40] = Q, ee[41] = $, ee[42] = Y) : Y = ee[42], ee[43] !== ep || ee[44] !== ef || ee[45] !== et.gizmo.current_user_permission?.can_view_config ? (J = ep || et.gizmo.current_user_permission?.can_view_config ? (0, a.jsx)(g.c.Item, {
                href: ef,
                leftIconAsset: ep ? N.a : R.a,
                onClick: e => {
                    (0, m.e)({
                        event: e,
                        href: ef,
                        initiator: "open_in_browser_bridge",
                        openTarget: ep ? "external-browser" : void 0
                    })
                },
                children: ep ? (0, a.jsx)(c.a, {
                    id: "chatgptConversations.customGpt.edit",
                    defaultMessage: "Edit GPT"
                }) : (0, a.jsx)(c.a, {
                    id: "chatgptConversations.customGpt.view",
                    defaultMessage: "View"
                })
            }) : null, ee[43] = ep, ee[44] = ef, ee[45] = et.gizmo.current_user_permission?.can_view_config, ee[46] = J) : J = ee[46], ee[47] !== et ? (X = (0, a.jsx)(A.a, {
                resource: et
            }), ee[47] = et, ee[48] = X) : X = ee[48], ee[49] !== ei || ee[50] !== H || ee[51] !== q || ee[52] !== V || ee[53] !== Y || ee[54] !== J || ee[55] !== X ? (Z = (0, a.jsxs)(g.a, {
                align: "start",
                contentWidth: "menu",
                open: ei,
                onOpenChange: el,
                triggerButton: H,
                children: [q, V, Y, J, X]
            }), ee[49] = ei, ee[50] = H, ee[51] = q, ee[52] = V, ee[53] = Y, ee[54] = J, ee[55] = X, ee[56] = Z) : Z = ee[56], Z
        }
        n.d(t, {}, {
            ChatGptGizmoHeader: function(e) {
                let t, n, s, i, l, c = (0, r.c)(12),
                    {
                        gizmoId: d,
                        conversationId: u
                    } = e;
                c[0] !== u || c[1] !== d ? (t = null == u ? d : {
                    gizmoId: d,
                    conversationId: u
                }, c[0] = u, c[1] = d, c[2] = t) : t = c[2];
                let {
                    data: h
                } = (0, o.x)(T.b, t);
                if (null == h) return null;
                c[3] !== h.gizmo.display.name ? (n = h.gizmo.display.name.trim(), c[3] = h.gizmo.display.name, c[4] = n) : n = c[4];
                let p = n;
                return c[5] !== p ? (s = p ? (0, a.jsx)("span", {
                    className: "truncate",
                    children: p
                }) : null, c[5] = p, c[6] = s) : s = c[6], c[7] !== h ? (i = (0, a.jsx)(E.a, {
                    children: (0, a.jsx)(F, {
                        gizmo: h
                    })
                }), c[7] = h, c[8] = i) : i = c[8], c[9] !== s || c[10] !== i ? (l = (0, a.jsxs)("div", {
                    className: "flex min-w-0 items-center gap-1 select-none",
                    children: [s, i]
                }), c[9] = s, c[10] = i, c[11] = l) : l = c[11], l
            }
        })
    }),
    pV06: (function(e, t, n) {
        var a = n("JjRy"),
            r = n.n(a),
            s = n("AuIy"),
            o = n("G4E3"),
            i = n("KaH3"),
            l = n("Yz3b"),
            c = n("pqpL"),
            d = n("ghNX"),
            u = n("KvVi"),
            h = n("m250"),
            p = n("H8lk"),
            g = n("Ng4B"),
            m = n("bTKb"),
            f = n("dGDB"),
            v = n("lIsV");

        function b(e) {
            return e.flatMap(e => "chatgpt-reasoning-group" === e.type ? e.items : [e])
        }
        n.d(t, {}, {
            a: function(e) {
                var t;
                let n, a, {
                        automationReferences: y,
                        includePages: x = !1,
                        includeSources: w,
                        messages: C,
                        pendingAttachments: _ = [],
                        resources: S = (0, p.e)(C),
                        turns: j,
                        isTurnActive: I = j.at(-1)?.turn.status === "in_progress"
                    } = e,
                    T = [...S.inputs],
                    E = w ? (0, g.a)(C, j) : [],
                    P = new Map,
                    A = new Map,
                    M = (t = C, -1 !== (n = r()(t, e => e?.recipient === "turn_plan.update_turn_plan" && (0, v.b)(e)?.item?.type === "todo-list")) && t.slice(n + 1).some(e => "assistant" === e.author.role && "final" === e.channel && "all" === e.recipient && "finished_successfully" === e.status)),
                    k = [],
                    R = new Map(C.map(e => [(0, s.g)(e), e])),
                    N = r()(C, e => "user" === e.author.role),
                    O = [];
                for (let e of _) T.some(t => t.fileId === e.id || null != e.libraryFileId && t.libraryFileId === e.libraryFileId) || T.push({
                    downloadTarget: {
                        fileId: e.id,
                        type: "file-id"
                    },
                    fileId: e.id,
                    key: `input:pending:${e.id}`,
                    kind: "file",
                    libraryFileId: e.libraryFileId ?? null,
                    messageId: "pending-submission",
                    mimeType: e.mimeType,
                    mountedLibraryFileId: e.mountedLibraryFileId,
                    sourceMimeType: e.mountedLibraryMimeType,
                    sourceUrl: e.sourceUrl,
                    name: e.name,
                    sandboxPath: null,
                    sizeBytes: e.size ?? null
                });
                for (let {
                        id: e,
                        turn: t
                    }
                    of j) {
                    if (w && "complete" === t.status)
                        for (let n of t.messageIds) {
                            let t = R.get(n);
                            t?.author.role === "assistant" && ("finished_successfully" === t.status || "finished_partial_completion" === t.status) && (0, h.j)(t.metadata) && k.push({
                                messageId: n,
                                turnId: e,
                                deletedMemoryCitationUuids: (0, h.c)(t.metadata)
                            })
                        }
                    for (let n of b(t.items)) {
                        if (x && "mcp-tool-call" === n.type) {
                            let e = (0, d.b)(n);
                            if (null != e && (e.activities.includes("created") || e.activities.includes("updated"))) {
                                let t = (0, o.d)(e.url);
                                if (t?.kind === "page") {
                                    let n = A.get(t.id);
                                    A.set(t.id, {
                                        key: `page:${t.id}`,
                                        kind: "page",
                                        pageId: t.id,
                                        title: e.title ?? n?.title ?? null
                                    })
                                }
                            }
                        }
                        if (x && "assistant-message" === n.type && n.completed)
                            for (let e of (0, c.c)(n.content)) A.has(e.id) || A.set(e.id, {
                                key: `page:${e.id}`,
                                kind: "page",
                                pageId: e.id,
                                title: null
                            });
                        if ("todo-list" === n.type) {
                            O = n.plan.map((t, n) => ({
                                key: `progress:${e}:${String(n)}`,
                                label: t.step,
                                status: M ? "completed" : t.status
                            }));
                            continue
                        }
                        if ("generated-image" === n.type && "completed" === n.status && null != n.src) {
                            let e = `image:${n.id}`;
                            P.set(e, {
                                image: n,
                                key: e,
                                kind: "generated-image"
                            })
                        }
                    }
                }
                let L = (0, i.b)(j.flatMap(e => {
                    let {
                        turn: t
                    } = e;
                    return b(t.items).filter(e => "mcp-tool-call" === e.type)
                })).at(-1);
                return a = null == L ? [...S.outputs, ...A.values(), ...P.values()] : [{
                    ...L,
                    key: `site:${L.projectId}`,
                    kind: "site"
                }, ...S.outputs.filter(e => null == L.archivePath || ! function(e, t) {
                    if (null != e.sandboxPath) return e.sandboxPath === t;
                    let n = t.split(/[\\/]/u).at(-1)?.toLowerCase();
                    return null != n && e.name.toLowerCase() === n
                }(e, L.archivePath)), ...A.values(), ...P.values()], {
                    automationIds: (0, u.b)(C, y ?? void 0),
                    browserScreenshots: (0, m.e)(C),
                    inputs: T,
                    sourceTurns: k,
                    outputs: a,
                    progressSteps: O,
                    isPlanSummaryUpdating: I && C.slice(N + 1).some(e => "assistant" === e.author.role && u.a.test(e.recipient ?? "") || "tool" === e.author.role && u.a.test(e.author.name ?? "")),
                    planSummaryRefreshKey: `${j.at(-1)?.id??""}:${I}`,
                    showSources: w,
                    sources: w ? [...Array.from(new Map(C.filter(e => "user" === e.author.role).flatMap(e => (0, l.a)((0, s.e)(e))).map(e => [e.projectId, e])).values(), e => ({
                        kind: "site",
                        key: `site:${e.projectId}`,
                        projectId: e.projectId,
                        label: e.title
                    })), ...E.filter(e => "memory" === e.kind), ...new Map(j.flatMap(e => {
                        let {
                            turn: t
                        } = e;
                        return (t.skillSources ?? []).map(e => [e.key, e])
                    })).values(), ...S.pluginSources, ...E.filter(e => "web" === e.kind && "apps" === e.category), ...E.filter(e => "file-source" === e.kind), ...E.filter(e => "web" === e.kind && "apps" !== e.category)] : [],
                    subagents: (0, f.a)(C)?.subagents ?? []
                }
            }
        })
    }),
    JlMc: (function(e, t, n) {
        var a = n("QosV"),
            r = n("Q840"),
            s = n("zd8w"),
            o = n("RU3e");
        n("bjAA");
        var i = n("OWtl");
        n("lBzi"), n("XtQP");
        var l = n("dQRk"),
            c = n("UWHW");
        n.d(t, {}, {
            a: function(e) {
                let t, n, d, u, h = (0, a.c)(10),
                    {
                        conversationId: p,
                        isTranscriptVisible: g
                    } = e,
                    m = void 0 === g || g,
                    f = (0, r.y)(i.a),
                    v = (0, s.useId)();
                return h[0] !== p || h[1] !== v || h[2] !== f ? (t = () => (f.set(c.b, e => new Map(e).set(v, p)), f.get(c.a)?.dismissCurrent(), () => {
                    f.set(c.b, e => {
                        let t = new Map(e);
                        return t.delete(v), t
                    })
                }), n = [p, v, f], h[0] = p, h[1] = v, h[2] = f, h[3] = t, h[4] = n) : (t = h[3], n = h[4]), (0, s.useEffect)(t, n), h[5] !== p || h[6] !== m || h[7] !== f ? (d = () => {
                    if (!m) return;
                    let e = f.watch(e => {
                        let {
                            get: t
                        } = e, n = !0 === t(o.b);
                        (0, l.cc)(f, p, n)
                    });
                    return () => {
                        e(), (0, l.cc)(f, p, !1)
                    }
                }, u = [p, m, f], h[5] = p, h[6] = m, h[7] = f, h[8] = d, h[9] = u) : (d = h[8], u = h[9]), (0, s.useEffect)(d, u), null
            }
        })
    }),
    fr5e: (function(e, t, n) {
        n.d(t, {
            a: () => L
        });
        var a = n("ABep"),
            r = n("QosV"),
            s = n("iRMi"),
            o = n("D99L"),
            i = n("D015"),
            l = n("Q840"),
            c = n("zd8w"),
            d = n("oyxz"),
            u = n("TDcV"),
            h = n("vF5L"),
            p = n("EFj1"),
            g = n("SGsN"),
            m = n("yGJW"),
            f = n("OWtl"),
            v = n("aepO"),
            b = n("bIvi"),
            y = n("lBzi"),
            x = n("Ga6O"),
            w = n("dQRk"),
            C = n("jfiJ"),
            _ = n("FGJH"),
            S = n("Vcrm"),
            j = n("OCK3"),
            I = n("dhxJ"),
            T = n("lsky"),
            E = n("rKAs"),
            P = n("ASxG"),
            A = n("rn0J"),
            M = n("XpUB"),
            k = n("G6mJ"),
            R = n("VB5Q"),
            N = n("VTN2");
        let O = P.record(P.string(), P.union([P.string(), P.literal(!0)]));

        function L(e) {
            let t, n, P, L, F, B, D = (0, r.c)(28),
                {
                    conversationId: G,
                    turns: H,
                    loadHistory: q,
                    renderMode: W,
                    paragenEnabled: K,
                    enabled: U,
                    canCopy: V,
                    priority: Q
                } = e,
                $ = void 0 === W ? "conversation" : W,
                Y = void 0 !== K && K,
                J = void 0 === U || U,
                X = void 0 === V || V,
                Z = void 0 === Q ? "fallback" : Q,
                ee = (0, l.y)(f.a),
                et = (0, c.useRef)(null);
            D[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => () => et.current?.abort(), D[0] = t) : t = D[0], D[1] !== X || D[2] !== G || D[3] !== J || D[4] !== q || D[5] !== Y || D[6] !== $ ? (n = [G, J, X, q, $, Y], D[1] = X, D[2] = G, D[3] = J, D[4] = q, D[5] = Y, D[6] = $, D[7] = n) : n = D[7], (0, c.useEffect)(t, n), D[8] !== X || D[9] !== G || D[10] !== Y || D[11] !== $ || D[12] !== ee || D[13] !== H ? (P = () => {
                let e = ee.get(w.j, G),
                    t = ee.query.getData(y.chatGptConversationQueryById$, e),
                    n = t?.conversation_origin ?? ee.get(w.y, G);
                if (!X || "tpp" === n || "flora" === n) return null;
                let a = ee.get(w.N, G),
                    r = Y && "conversation" === $ ? ee.get(S.a, G)?.promptMessageId : void 0,
                    s = function(e) {
                        for (let {
                                turn: t
                            }
                            of e.toReversed())
                            for (let e of t.items.toReversed()) {
                                if ("assistant-message" !== e.type) continue;
                                let t = null,
                                    n = 0;
                                if ((0, T.h)((0, M.a)(e.content, E.b), a => {
                                        if ("codexDirective" === a.type && a.name === E.a) {
                                            let n = O.safeParse(a.attributes);
                                            if (!n.success) return;
                                            let r = (0, k.a)(n.data, e.contentReferences),
                                                s = N.d.safeParse(r?.reference);
                                            if (null == r || !s.success || (null == n.data.is_streaming ? !e.completed && (e.contentReferenceMessageStatuses?.[r.index] ?? "in_progress") === "in_progress" : "true" === n.data.is_streaming)) return;
                                            let o = e.contentReferenceMessageIds?.[r.index];
                                            t = {
                                                content: (0, R.a)(s.data.data),
                                                messageId: o ?? e.messageId,
                                                codeBlockIndex: null == o ? r.index : e.contentReferenceMessageIds?.slice(0, r.index).filter(e => e === o).length ?? 0
                                            };
                                            return
                                        }
                                        "code" !== a.type || (null == ("indented" === a.codeBlockStyle ? null : a.raw.split("\n").reduce(A.a, null)) && (t = {
                                            content: e.codeBlocks?.[String(n)]?.content ?? a.text,
                                            codeBlockIndex: n,
                                            messageId: e.messageId
                                        }), n += 1)
                                    }), null != t) return t
                            }
                        return null
                    }(H ?? (0, x.b)({
                        conversation: t,
                        threadMapping: a,
                        threadCurrentNode: r ?? ee.get(w.C, G),
                        conversationOrigin: n,
                        isStreaming: (0, w.Bb)(ee.get(w.ab, G)),
                        mode: $,
                        moderationDisclaimersByMessageId: ee.get(w.O, G),
                        pendingSubmission: null
                    }).renderedTurns);
                if (s?.messageId == null) return {
                    serverId: e,
                    comparisonPromptMessageId: r,
                    content: s?.content
                };
                let o = {
                        conversationId: G,
                        messageId: s.messageId,
                        codeBlockIndex: s.codeBlockIndex
                    },
                    i = (0, I.a)(a?.[s.messageId]?.message?.metadata);
                return {
                    serverId: e,
                    comparisonPromptMessageId: r,
                    content: ee.get(j.b, o) ?? i?.[String(s.codeBlockIndex)]?.content ?? s.content
                }
            }, D[8] = X, D[9] = G, D[10] = Y, D[11] = $, D[12] = ee, D[13] = H, D[14] = P) : P = D[14];
            let en = (0, b.a)(P);
            D[15] !== ee ? (L = (e, t) => {
                let n = e => {
                    (0, m.a)(ee, o.CodexChatgptInteractionCodeCopyRequested, {
                        characterCount: (0, i.a)(e.length),
                        productExperience: s.CodexExpandedSidePanelProductSurface.CODEX_EXPANDED_SIDE_PANEL_PRODUCT_SURFACE_CHAT
                    })
                };
                return (0, v.c)(e, void 0, () => {
                    "string" == typeof e ? n(e) : e.then(n, z)
                }).then(e => {
                    e && !t?.aborted && ee.get(g.f).success((0, a.jsx)(d.a, {
                        id: "chatgpt.codeBlocks.copyLast.success",
                        defaultMessage: "Copied code block to clipboard"
                    }))
                })
            }, D[15] = ee, D[16] = L) : L = D[16];
            let ea = L;
            return D[17] !== G || D[18] !== en || D[19] !== q || D[20] !== Y || D[21] !== $ || D[22] !== ee || D[23] !== ea ? (F = () => {
                if (et.current?.signal.aborted === !1) return;
                let e = en();
                if (null == e) return;
                if (null != e.content) return void ea(e.content);
                let {
                    serverId: t,
                    comparisonPromptMessageId: n
                } = e;
                if (!q || ee.get(w.B, G) || null == t || ee.get(_.c, t)?.complete !== !1) return;
                let a = new AbortController;
                et.current = a;
                let r = ee.get(u.a),
                    s = ee.get(w.C, G),
                    o = ee.get(h.e).copyLastCodeBlock,
                    i = ee.watch(e => {
                        let {
                            get: t
                        } = e;
                        (t(u.a) !== r || t(w.C, G) !== s || Y && "conversation" === $ && t(S.a, G)?.promptMessageId !== n || t(h.e).copyLastCodeBlock !== o) && a.abort()
                    });
                ea((async () => {
                    await (0, C.a)(ee, t, a.signal), a.signal.throwIfAborted();
                    let e = en()?.content;
                    if (null == e) throw Error("No complete code block in this conversation");
                    return e
                })(), a.signal).finally(() => {
                    i(), et.current === a && (et.current = null)
                })
            }, D[17] = G, D[18] = en, D[19] = q, D[20] = Y, D[21] = $, D[22] = ee, D[23] = ea, D[24] = F) : F = D[24], D[25] !== J || D[26] !== Z ? (B = {
                enabled: J,
                priority: Z
            }, D[25] = J, D[26] = Z, D[27] = B) : B = D[27], (0, p.a)("copyLastCodeBlock", F, B), null
        }

        function z() {}
    }),
    LEgg: (function(e, t, n) {
        n.d(t, {
            a: () => C
        });
        var a = n("ABep"),
            r = n("QosV");
        n("slpy");
        var s = n("Q840"),
            o = n("Wf1j"),
            i = n("SaNw"),
            l = n("TdH6"),
            c = n("QcW8");
        n("ZU27"), n("TpEm");
        var d = n("gbrq"),
            u = n("B1XR"),
            h = n("ipGa"),
            p = n("Zqzr"),
            g = n("zd8w"),
            m = n("tSEg"),
            f = n("YnF4"),
            v = n("dQRk");

        function b() {
            let e, t, n = (0, r.c)(3),
                a = (0, s.y)(m.a);
            return n[0] !== a ? (e = () => {
                if ("chatgpt-thread" !== a.value.routeKind) return;
                let e = a.value.conversationId;
                return a.watch(t => {
                    let {
                        get: n
                    } = t, r = n(v.j, e);
                    if (null != r) return (0, f.a)(a, (0, p.Se)(`chatgpt:${r}`))
                })
            }, t = [a], n[0] = a, n[1] = e, n[2] = t) : (e = n[1], t = n[2]), (0, g.useLayoutEffect)(e, t), null
        }
        n("n5iL"), n("bf6R");
        var y = n("wtnY"),
            x = n("enMl");
        n("Gt1K");
        var w = n("PCEr");

        function C(e) {
            let t, n, s, o, l, c, d = (0, r.c)(17),
                {
                    chatIcon: p,
                    header: g,
                    title: m,
                    fullScreenTitle: f,
                    isArchivedPreview: v,
                    children: b
                } = e;
            return d[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(i.a.MainContentLayout, {
                layout: (0, h.a)() ? "default" : "thread-edge-scroll"
            }), d[0] = t) : t = d[0], d[1] !== v ? (n = v ? null : (0, a.jsx)(u.SitePreviewBridge, {}), d[1] = v, d[2] = n) : n = d[2], d[3] !== g ? (s = (0, a.jsx)(i.a.Header, {
                desktopPlacement: "titlebar",
                divider: !1,
                children: g
            }), d[3] = g, d[4] = s) : s = d[4], d[5] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, a.jsx)(i.a.RightPanelOutlet, {
                children: (0, a.jsx)(i.a.RightPanelTabs, {})
            }), d[5] = o) : o = d[5], d[6] !== p || d[7] !== f || d[8] !== g || d[9] !== v || d[10] !== m ? (l = v ? null : (0, a.jsx)(_, {
                chatIcon: p,
                fullScreenTitle: f,
                mainToolbar: g,
                title: m
            }), d[6] = p, d[7] = f, d[8] = g, d[9] = v, d[10] = m, d[11] = l) : l = d[11], d[12] !== b || d[13] !== n || d[14] !== s || d[15] !== l ? (c = (0, a.jsxs)(a.Fragment, {
                children: [t, n, s, b, o, l]
            }), d[12] = b, d[13] = n, d[14] = s, d[15] = l, d[16] = c) : c = d[16], c
        }

        function _(e) {
            let t, n, i, u, p, g, f, v = (0, r.c)(16),
                {
                    chatIcon: C,
                    mainToolbar: _,
                    title: S,
                    fullScreenTitle: j
                } = e,
                I = (0, s.y)(m.a);
            return (0, o.a)(), (0, s.z)(d.h), (0, s.z)(c.q), v[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(l.a, {}), n = (0, a.jsx)(b, {}), v[0] = t, v[1] = n) : (t = v[0], n = v[1]), v[2] !== C || v[3] !== S ? (i = (0, a.jsx)(x.a, {
                title: S,
                icon: C
            }), v[2] = C, v[3] = S, v[4] = i) : i = v[4], v[5] !== j ? (u = (0, a.jsx)("div", {
                className: "max-w-80 min-w-0 truncate empty:hidden focus-within:overflow-visible",
                children: j
            }), v[5] = j, v[6] = u) : u = v[6], v[7] !== _ || v[8] !== u ? (p = (0, a.jsx)(w.a, {
                mainToolbar: _,
                fullScreenChatMenu: u
            }), v[7] = _, v[8] = u, v[9] = p) : p = v[9], v[10] !== I.value.routeKind ? (g = "other" === I.value.routeKind || (0, h.a)() ? null : (0, a.jsx)(y.b, {
                showLauncherButton: !1
            }), v[10] = I.value.routeKind, v[11] = g) : g = v[11], v[12] !== i || v[13] !== p || v[14] !== g ? (f = (0, a.jsxs)(a.Fragment, {
                children: [t, n, i, p, g, null, null]
            }), v[12] = i, v[13] = p, v[14] = g, v[15] = f) : f = v[15], f
        }
    }),
    jeai: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("on57"),
            o = n("Q840"),
            i = n("L2MT"),
            l = n("j9wQ");
        n.d(t, {}, {
            a: function(e) {
                let t, n = (0, r.c)(4),
                    {
                        children: c,
                        size: d
                    } = e,
                    u = void 0 === d ? "toolbar" : d,
                    h = (0, o.z)(i.a);
                return n[0] !== c || n[1] !== h || n[2] !== u ? (t = h ? (0, a.jsx)(l.d, {
                    className: (0, s.b)("flex min-w-0 items-center empty:hidden", "business-profile" === u ? "[--viewer-control-height:calc(var(--height-toolbar)-var(--spacing))]" : "[--viewer-control-height:calc(var(--spacing-token-button-composer)+var(--spacing))]"),
                    children: c
                }) : (0, a.jsx)(a.Fragment, {
                    children: c
                }), n[0] = c, n[1] = h, n[2] = u, n[3] = t) : t = n[3], t
            }
        })
    }),
    dLcZ: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("Q840"),
            o = n("SaNw"),
            i = n("L2MT"),
            l = n("NVRI"),
            c = n("MMlk"),
            d = n("jeai"),
            u = n("jcQY");
        n.d(t, {}, {
            a: function(e) {
                let t, n, o, h, p, g, m, f, v = (0, r.c)(17);
                v[0] !== e ? ({
                    hasSectionProgress: o,
                    isTemporaryChat: h,
                    startActions: n,
                    ...t
                } = e, v[0] = e, v[1] = t, v[2] = n, v[3] = o, v[4] = h) : (t = v[1], n = v[2], o = v[3], h = v[4]);
                let b = void 0 !== o && o,
                    y = void 0 !== h && h,
                    x = (0, s.z)(i.a),
                    w = b ? u.a.Title : void 0;
                return v[5] !== x || v[6] !== n ? (p = x && null != n ? (0, a.jsx)(d.a, {
                    children: n
                }) : n, v[5] = x, v[6] = n, v[7] = p) : p = v[7], v[8] !== y ? (g = y ? (0, a.jsx)(c.b, {
                    isIndicator: !0,
                    isTemporaryChat: !0
                }) : null, v[8] = y, v[9] = g) : g = v[9], v[10] !== p || v[11] !== g ? (m = (0, a.jsxs)(a.Fragment, {
                    children: [p, g]
                }), v[10] = p, v[11] = g, v[12] = m) : m = v[12], v[13] !== t || v[14] !== w || v[15] !== m ? (f = (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(l.a, {
                        ...t,
                        className: w,
                        inset: "tab-strip-flush-start",
                        startActions: m
                    })
                }), v[13] = t, v[14] = w, v[15] = m, v[16] = f) : f = v[16], f
            },
            b: function(e) {
                let t, n, l, c, d = (0, r.c)(14),
                    {
                        children: u,
                        menu: h,
                        hasTitleMenu: p,
                        usage: g
                    } = e,
                    m = (0, s.z)(i.a),
                    f = !p && h;
                return d[0] !== p || d[1] !== h ? (t = p ? (0, a.jsx)(o.a.HeaderAction, {
                    actionId: "chatgpt-conversation-title-menu",
                    align: "start",
                    slotPosition: "threadTitle",
                    children: h
                }) : null, d[0] = p, d[1] = h, d[2] = t) : t = d[2], d[3] !== u || d[4] !== m ? (n = null == u ? null : (0, a.jsx)(o.a.HeaderAction, {
                    actionId: "chatgpt-conversation-actions",
                    align: "end",
                    sharedCapsule: !0,
                    order: 100,
                    unifiedSlotPosition: m ? "threadSummary" : void 0,
                    children: m ? u : (0, a.jsx)("div", {
                        className: "flex min-w-0 items-center gap-toolbar-action",
                        children: u
                    })
                }), d[3] = u, d[4] = m, d[5] = n) : n = d[5], d[6] !== m || d[7] !== g ? (l = m && null != g ? (0, a.jsx)(o.a.HeaderAction, {
                    actionId: "chatgpt-conversation-usage",
                    align: "end",
                    sharedCapsule: !0,
                    order: 200,
                    unifiedSlotPosition: "threadSummary",
                    children: g
                }) : null, d[6] = m, d[7] = g, d[8] = l) : l = d[8], d[9] !== f || d[10] !== t || d[11] !== n || d[12] !== l ? (c = (0, a.jsxs)(a.Fragment, {
                    children: [f, t, n, l]
                }), d[9] = f, d[10] = t, d[11] = n, d[12] = l, d[13] = c) : c = d[13], c
            }
        })
    }),
    Xoyl: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV");
        n.d(t, {}, {
            a: function() {
                let e, t = (0, r.c)(1);
                return t[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)("span", {
                    "aria-busy": "true",
                    className: "flex h-token-button-composer max-w-full items-center px-button-toolbar-inline",
                    children: (0, a.jsx)("span", {
                        "aria-hidden": "true",
                        className: "h-4 w-32 max-w-full rounded bg-text/10"
                    })
                }), t[0] = e) : e = t[0], e
            }
        })
    }),
    WVag: (function(e, t, n) {
        var a = n("LwKP"),
            r = n("Q840"),
            s = n("ASxG"),
            o = n("fDv2"),
            i = n("OWtl"),
            l = n("dQRk");
        let c = s.object({
                epic_patient_label: s.string(),
                epic_patient_name: s.string().nullable().optional(),
                epic_patient_birth_date: o.date().nullable().optional(),
                epic_encounter_label: s.string().nullable().optional()
            }),
            d = (0, r.d)(i.a, (e, t) => {
                let {
                    get: n
                } = t, a = n(l.N, e);
                return null == a ? null : Object.values(a).map(e => e.message)
            }, {
                autoDispose: !0,
                isEqual: (e, t) => e === t || null != e && null != t && e.length === t.length && e.every((e, n) => e?.id === t[n]?.id && e?.metadata === t[n]?.metadata)
            }),
            u = (0, r.i)(i.a, e => null, (e, t) => {
                let {
                    scope: n,
                    set: r
                } = t;
                if (null == e) return;
                let s = null,
                    o = () => {
                        r(h(e, s, null))
                    };
                window.addEventListener(a.b, o);
                let i = n.watch(t => {
                    let {
                        get: n
                    } = t;
                    s = n(d, e), o()
                });
                return () => {
                    i(), window.removeEventListener(a.b, o)
                }
            }, {
                autoDispose: !0,
                isEqual: (e, t) => e === t || null != e && null != t && e.labels?.epic_patient_label === t.labels?.epic_patient_label && e.labels?.epic_patient_name === t.labels?.epic_patient_name && e.labels?.epic_patient_birth_date === t.labels?.epic_patient_birth_date && e.labels?.epic_encounter_label === t.labels?.epic_encounter_label && e.snapshot === t.snapshot && e.destination === t.destination
            });

        function h(e, t, n) {
            let a = t?.find(e => c.safeParse(e?.metadata).success),
                r = c.safeParse(a?.metadata),
                s = "u" < typeof window ? void 0 : window.__oaiEpicNativeLaunch,
                o = (null == e ? n : null) ?? (t?.some(e => e?.id != null && s?.ownsMessage(e.id)) ? s?.get() ?? null : null);
            return r.success || null != o ? {
                labels: r.success ? r.data : null,
                snapshot: o,
                destination: null == o ? void 0 : s?.destination()
            } : null
        }
        n.d(t, {}, {
            a: u,
            b: h
        })
    }),
    a4V1: (function(e, t, n) {
        var a = n("Q840"),
            r = n("OWtl"),
            s = n("OMIV"),
            o = n("dQRk"),
            i = n("ZniH");
        let l = (0, a.d)(r.a, (e, t) => {
                let {
                    get: n
                } = t, a = n(o.N, e), r = n(o.C, e);
                return null == a || null == r ? null : (0, i.a)({
                    mapping: a,
                    current_node: r
                }, n(o.O, e))?.text ?? null
            }),
            c = (0, a.d)(r.a, (e, t) => {
                let {
                    get: n
                } = t;
                return null == e || n(s.e, "2163293173") && !n(o.K, e) ? null : n(l, e) || null
            });
        n.d(t, {}, {
            a: l,
            b: c
        })
    }),
    wrCb: (function(e, t, n) {
        n.d(t, {}, {
            a: function(e) {
                return new URL(e, window.location.origin).href
            }
        })
    }),
    H7Nt: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("Q840"),
            o = n("oyxz"),
            i = n("Cslg"),
            l = n("bqtn"),
            c = n("bf6R"),
            d = n("Bbed"),
            u = n("X6Vn"),
            h = n("OWtl");
        let p = (0, d.a)(async () => (await n.e(306529).then(n.bind(n, "GkN4"))).GptReportDialog);
        n.d(t, {}, {
            a: function(e) {
                let t, n, d, g, m = (0, r.c)(9),
                    {
                        resource: f,
                        onSelect: v
                    } = e,
                    b = (0, s.y)(h.a),
                    y = (0, s.z)(i.f);
                return null == y || f.gizmo.tags?.includes("first_party") || "marketplace" !== f.gizmo.share_recipient && "link" !== f.gizmo.share_recipient ? null : (m[0] !== y || m[1] !== v || m[2] !== f || m[3] !== b ? (t = () => {
                    v?.(), (0, u.f)(b, p, {
                        accountId: y,
                        resource: f
                    })
                }, m[0] = y, m[1] = v, m[2] = f, m[3] = b, m[4] = t) : t = m[4], m[5] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(l.c.ItemIcon, {
                    children: (0, a.jsx)(c.wd, {})
                }), d = (0, a.jsx)(o.a, {
                    id: "chatgptConversations.gpts.report.action",
                    defaultMessage: "Report GPT"
                }), m[5] = n, m[6] = d) : (n = m[5], d = m[6]), m[7] !== t ? (g = (0, a.jsxs)(l.c.Item, {
                    onSelect: t,
                    children: [n, d]
                }), m[7] = t, m[8] = g) : g = m[8], g)
            }
        })
    }),
    alJ6: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("on57"),
            o = n("Q840"),
            i = n("rEML"),
            l = n("Bbed"),
            c = n("OWtl"),
            d = n("OMIV"),
            u = n("tV8b"),
            h = n("u9iS");
        let p = (0, l.a)(async () => (await n.e(901042).then(n.bind(n, "ut8h"))).GptPluginMigrationBannerContent, {
            errorFallback: e => (0, a.jsx)(m, {
                ...e
            })
        });

        function g(e) {
            let t, n = (0, r.c)(3),
                {
                    gizmoId: s
                } = e,
                i = (0, o.x)(d.e, "2160578039");
            return n[0] !== i || n[1] !== s ? (t = i ? (0, a.jsx)(p, {
                gizmoId: s
            }, s) : null, n[0] = i, n[1] = s, n[2] = t) : t = n[2], t
        }

        function m(e) {
            let t, n, s = (0, r.c)(10),
                {
                    gizmoId: l
                } = e,
                d = (0, o.y)(c.a),
                p = (0, i.X)(),
                g = (0, i._)(),
                {
                    data: m
                } = (0, o.x)(h.f, l);
            s[0] !== l || s[1] !== p.pathname ? (t = {
                gizmoId: l,
                visitKey: p.pathname
            }, s[0] = l, s[1] = p.pathname, s[2] = t) : t = s[2];
            let f = (0, o.x)(h.c, t);
            return s[3] !== f || s[4] !== l || s[5] !== p.pathname || s[6] !== g || s[7] !== m || s[8] !== d ? (n = f && m?.gizmo.migrated_plugin_id ? (0, a.jsx)(u.a, {
                gptName: m.gizmo.display.name,
                accessState: "error",
                onUsePlugin: () => void g("/plugins"),
                onKeepUsingGpt: () => (0, h.a)(d, {
                    gizmoId: l,
                    visitKey: p.pathname
                })
            }) : null, s[3] = f, s[4] = l, s[5] = p.pathname, s[6] = g, s[7] = m, s[8] = d, s[9] = n) : n = s[9], n
        }
        n.d(t, {}, {
            GptPluginMigrationBanner: g,
            GptPluginMigrationHomeBanner: function(e) {
                let t, n, o, i = (0, r.c)(7),
                    {
                        entryPoint: l,
                        gizmoId: c
                    } = e,
                    d = "codex" === l && "electron:mx-[var(--home-composer-inline-inset)]";
                return i[0] !== d ? (t = (0, s.b)("empty:hidden", d), i[0] = d, i[1] = t) : t = i[1], i[2] !== c ? (n = (0, a.jsx)(g, {
                    gizmoId: c
                }), i[2] = c, i[3] = n) : n = i[3], i[4] !== t || i[5] !== n ? (o = (0, a.jsx)("div", {
                    className: t,
                    children: n
                }), i[4] = t, i[5] = n, i[6] = o) : o = i[6], o
            }
        })
    }),
    tV8b: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("Wf1j"),
            o = n("oyxz"),
            i = n("MM0V"),
            l = n("Sm6l"),
            c = n("HOLv"),
            d = n("hZax"),
            u = n("slBk"),
            h = n("LBM8");
        n.d(t, {}, {
            a: function(e) {
                let t, n, p, g, m, f, v, b, y, x = (0, r.c)(34),
                    {
                        gptName: w,
                        accessState: C,
                        onUsePlugin: _,
                        onKeepUsingGpt: S,
                        onRetry: j
                    } = e,
                    I = (0, s.a)(),
                    T = (0, d.e)("2513446768");
                x[0] !== T || x[1] !== I ? (t = I.formatDate((0, u.a)(T.get("retirement_date", "")), {
                    month: "long",
                    day: "numeric",
                    timeZone: "UTC"
                }), x[0] = T, x[1] = I, x[2] = t) : t = x[2];
                let E = t;
                if ("error" === C && null != j) {
                    let e;
                    x[3] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(o.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceRetry",
                        defaultMessage: "Try again"
                    }), x[3] = e) : e = x[3], n = e
                } else if ("admin" === C) {
                    let e;
                    x[4] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(o.a, {
                        id: "chatgptConversations.gpts.migration.viewPlugin",
                        defaultMessage: "View Plugin"
                    }), x[4] = e) : e = x[4], n = e
                } else if ("allowed" === C || "pending" === C) {
                    let e;
                    x[5] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(o.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceUsePlugin",
                        defaultMessage: "Use plugin"
                    }), x[5] = e) : e = x[5], n = e
                } else {
                    let e;
                    x[6] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(o.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceExplorePlugins",
                        defaultMessage: "Explore plugins"
                    }), x[6] = e) : e = x[6], n = e
                }
                if ("error" === C && null == j) {
                    let e;
                    x[7] !== E ? (e = (0, a.jsx)(o.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceAccessUnconfirmed",
                        defaultMessage: "We couldn’t check your access to the plugin. You can keep using this GPT until {deadline}.",
                        values: {
                            deadline: E
                        }
                    }), x[7] = E, x[8] = e) : e = x[8], p = e
                } else if ("error" === C) {
                    let e;
                    x[9] !== E ? (e = (0, a.jsx)(o.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceAccessError",
                        defaultMessage: "We couldn’t check your access to the plugin. Try again, or keep using this GPT until {deadline}.",
                        values: {
                            deadline: E
                        }
                    }), x[9] = E, x[10] = e) : e = x[10], p = e
                } else if ("denied" === C) {
                    let e;
                    x[11] !== E ? (e = (0, a.jsx)(o.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceAccessDenied",
                        defaultMessage: "This plugin isn’t available to you. You can keep using this GPT until {deadline}.",
                        values: {
                            deadline: E
                        }
                    }), x[11] = E, x[12] = e) : e = x[12], p = e
                } else if (w.trim()) {
                    let e;
                    x[13] !== E || x[14] !== w ? (e = (0, a.jsx)(o.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceNamedBody",
                        defaultMessage: "{gptName} is now available as a plugin. You can keep using this GPT until {deadline}.",
                        values: {
                            gptName: w,
                            deadline: E
                        }
                    }), x[13] = E, x[14] = w, x[15] = e) : e = x[15], p = e
                } else {
                    let e;
                    x[16] !== E ? (e = (0, a.jsx)(o.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceBody",
                        defaultMessage: "This GPT is now available as a plugin. You can keep using this GPT until {deadline}.",
                        values: {
                            deadline: E
                        }
                    }), x[16] = E, x[17] = e) : e = x[17], p = e
                }
                x[18] === Symbol.for("react.memo_cache_sentinel") ? (g = (0, a.jsx)(c.a, {
                    asset: h.a,
                    className: "text-secondary"
                }), x[18] = g) : g = x[18], x[19] !== w ? (m = w.trim() ? (0, a.jsx)(o.a, {
                    id: "chatgptConversations.gpts.migration.chatChoiceNamedTitle",
                    defaultMessage: "{gptName} is now a plugin",
                    values: {
                        gptName: w
                    }
                }) : (0, a.jsx)(o.a, {
                    id: "chatgptConversations.gpts.migration.chatChoiceTitle",
                    defaultMessage: "This GPT is now a plugin"
                }), x[19] = w, x[20] = m) : m = x[20];
                let P = "pending" === C,
                    A = "error" === C && null != j ? j : _;
                return x[21] !== n || x[22] !== P || x[23] !== A ? (f = (0, a.jsx)(l.a, {
                    color: "primary",
                    loading: P,
                    size: "dialog",
                    type: "button",
                    onClick: A,
                    children: n
                }), x[21] = n, x[22] = P, x[23] = A, x[24] = f) : f = x[24], x[25] !== S ? (v = null == S ? null : (0, a.jsx)(l.a, {
                    color: "outline",
                    size: "dialog",
                    type: "button",
                    onClick: S,
                    children: (0, a.jsx)(o.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceKeepUsing",
                        defaultMessage: "Keep using GPT"
                    })
                }), x[25] = S, x[26] = v) : v = x[26], x[27] !== f || x[28] !== v ? (b = (0, a.jsxs)("div", {
                    className: "flex flex-wrap items-center gap-2",
                    children: [f, v]
                }), x[27] = f, x[28] = v, x[29] = b) : b = x[29], x[30] !== p || x[31] !== m || x[32] !== b ? (y = (0, a.jsx)("div", {
                    className: "mx-auto mb-3 w-full max-w-[var(--thread-content-max-width)]",
                    children: (0, a.jsx)(i.a, {
                        variant: "announcement",
                        icon: g,
                        stackOnNarrow: !0,
                        wrapCtas: !0,
                        title: m,
                        content: p,
                        customCtas: b
                    })
                }), x[30] = p, x[31] = m, x[32] = b, x[33] = y) : y = x[33], y
            }
        })
    }),
    slBk: (function(e, t, n) {
        var a = n("rHrT");
        let r = Date.UTC(2026, 11, 11);
        n.d(t, {}, {
            a: function(e) {
                if (!/^\d{4}-\d{2}-\d{2}$/.test(e)) return r;
                let t = Date.parse(`${e}T00:00:00.000Z`);
                return Number.isFinite(t) && new Date(t).toISOString().slice(0, 10) === e ? t : r
            },
            b: function(e, t) {
                let n = ((0, a.a)(e)?.locale ?? "en-US").toLowerCase(),
                    r = "en-us" === n ? "en" : n,
                    s = `https://help.openai.com/${r}/articles/20001519-custom-gpt-retirement-and-migration-faq`;
                try {
                    let e = new URL(t.replaceAll("{lang}", r));
                    return "https:" === e.protocol ? e.href : s
                } catch {
                    return s
                }
            }
        })
    }),
    kHi2: (function(e, t, n) {
        var a = n("Q840"),
            r = n("tSEg"),
            s = n("VnEZ");
        let o = (0, a.c)(r.a, s.b);

        function i(e, t) {
            let n = e.get(o).getSnapshot();
            return n?.conversationId !== t || n.dilActionsPending ? void 0 : n.dil?.prefill_composer
        }
        let l = (0, a.i)(r.a, e => !1, (e, t) => {
            let {
                scope: n,
                get: a,
                set: r
            } = t, s = a(o), l = () => r(null != i(n, e));
            return l(), s.subscribe(l)
        });
        n.d(t, {}, {
            a: l,
            b: o,
            c: i
        })
    }),
    YdNM: (function(e, t, n) {
        var a = n("ASxG");
        let r = a.url({
            protocol: /^https$/
        }).or(a.emoji()).nullish().catch(null);
        n.d(t, {}, {
            a: r
        })
    }),
    T33u: (function(e, t, n) {
        var a = n("SZCv"),
            r = n.n(a),
            s = n("Q840"),
            o = n("ASxG"),
            i = n("OWtl"),
            l = n("OMIV"),
            c = n("b6fw"),
            d = n("YdNM");
        let u = o.object({
                course_id: o.string().trim().min(1),
                title: o.string().trim().nullish().catch(null),
                icon_url_or_emoji: d.a
            }),
            h = o.object({
                course_info: u.nullish()
            }),
            p = (0, s.d)(i.a, (e, t) => {
                let {
                    get: n
                } = t, a = h.safeParse(n(c.h, e)?.view);
                return a.success ? a.data.course_info ?? null : null
            }, {
                isEqual: r()
            }),
            g = (0, s.d)(i.a, (e, t) => {
                let {
                    get: n
                } = t;
                return n(l.e, "4035922817") ? n(p, e) : null
            }),
            m = (0, s.d)(i.a, (e, t) => {
                let {
                    get: n
                } = t;
                return n(g, e)?.course_id ?? null
            });
        n.d(t, {}, {
            a: m,
            b: g
        })
    }),
    wnpN: (function(e, t, n) {
        var a = n("FC5L"),
            r = n("OMIV"),
            s = n("XtQP"),
            o = n("dQRk"),
            i = n("a4V1");
        let l = (0, a.a)({
            conversationIds: (e, t) => [t],
            status: (e, t) => {
                let {
                    get: n
                } = e, a = n(o.w, t);
                return {
                    pending: (0, o.Bb)(n(o.ab, t)),
                    completed: null == a || "completed" === a.result,
                    completionId: n(r.e, "2163293173") ? JSON.stringify([t, a?.requestId, n(o.C, t)]) : void 0,
                    unread: n(o.K, t)
                }
            },
            preview: (e, t) => {
                let {
                    get: n
                } = e;
                return n(i.a, t)
            },
            title: (e, t) => {
                let {
                    get: n
                } = e;
                return n(o.eb, t) || null
            },
            dismiss: (e, t) => {
                (0, o.Xb)(e, t, !1), (0, s.b)(e, t).catch(() => {})
            }
        });
        n.d(t, {}, {
            a: l
        })
    }),
    M3Kf: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("Q840"),
            o = n("zd8w"),
            i = n("v7qY"),
            l = n("wD9O"),
            c = n("hEYZ"),
            d = n("OWtl"),
            u = n("yLzP"),
            h = n("lsfk"),
            p = n("uYx2"),
            g = n("dQRk"),
            m = n("jfiJ"),
            f = n("FGJH");

        function v(e) {
            return e.isIntersecting
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, b, y, x, w = (0, r.c)(22),
                    {
                        conversationId: C
                    } = e,
                    _ = (0, s.y)(d.a),
                    S = (0, s.z)(c.b),
                    j = (0, s.x)(g.j, C),
                    I = (0, s.x)(f.c, j ?? C),
                    T = (0, h.b)(),
                    E = (0, l.c)(),
                    P = (0, o.useRef)(null);
                w[0] !== T || w[1] !== _ || w[2] !== j || w[3] !== E ? (t = () => {
                    null != j && (0, m.b)(_, j, e => {
                        var t;
                        let n, a, r, s = T.getScrollElement(),
                            o = s && (n = (t = s).getBoundingClientRect(), a = e => {
                                let t = e.getBoundingClientRect();
                                return t.height > 0 && t.bottom > n.top && t.top < n.bottom
                            }, (r = t.querySelector("[data-thread-reading-passage]")) && a(r) ? r : Array.from(t.querySelectorAll("[data-content-search-unit-key], [data-user-message-bubble]")).find(a)),
                            c = o?.getBoundingClientRect().top;
                        if ((0, i.flushSync)(e), s && o && null != c && s.contains(o)) {
                            let e = (0, l.b)(o.getBoundingClientRect().top - c, E);
                            0 !== e && T.compensateScrollToDistanceFromBottomPx((0, p.b)(s) - e)
                        }
                    })
                }, w[0] = T, w[1] = _, w[2] = j, w[3] = E, w[4] = t) : t = w[4];
                let A = t;
                w[5] !== C || w[6] !== A || w[7] !== _ || w[8] !== j ? (n = () => {
                    let e = _.get(f.c, j ?? C);
                    _.get(c.b) || e?.hasError || A()
                }, w[5] = C, w[6] = A, w[7] = _, w[8] = j, w[9] = n) : n = w[9];
                let M = (0, o.useEffectEvent)(n);
                w[10] !== T || w[11] !== S || w[12] !== M ? (b = () => {
                    if (S) return;
                    let e = P.current,
                        t = T.getScrollElement();
                    if (null == e || null == t) return;
                    let n = new IntersectionObserver(e => {
                        e.some(v) && M()
                    }, {
                        root: t,
                        rootMargin: "80px 0px 0px 0px"
                    });
                    return n.observe(e), () => n.disconnect()
                }, w[10] = T, w[11] = S, w[12] = M, w[13] = b) : b = w[13];
                let k = I?.cursor,
                    R = I?.hasError;
                if (w[14] !== T || w[15] !== S || w[16] !== j || w[17] !== k || w[18] !== R ? (y = [T, S, j, k, R], w[14] = T, w[15] = S, w[16] = j, w[17] = k, w[18] = R, w[19] = y) : y = w[19], (0, o.useEffect)(b, y), null == I || I.complete || null == I.cursor) return null;
                let N = I.hasError ? A : null;
                return w[20] !== N ? (x = (0, a.jsx)(u.a, {
                    ref: P,
                    onRetry: N
                }), w[20] = N, w[21] = x) : x = w[21], x
            }
        })
    }),
    lUUH: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("Q840"),
            o = n("oyxz"),
            i = n("Qgfj"),
            l = n("rEML"),
            c = n("bqtn"),
            d = n("bf6R"),
            u = n("UxN3"),
            h = n("SGsN"),
            p = n("svjy"),
            g = n("nlNF"),
            m = n("crAQ"),
            f = n("FR8U"),
            v = n("OWtl"),
            b = n("OtLV"),
            y = n("w7E5"),
            x = n("wVX4"),
            w = n("c5lN"),
            C = n("QmkR"),
            _ = n("xEXG"),
            S = n("KMqT"),
            j = n("J6LI"),
            I = n("FgUr"),
            T = n("WLgA");
        let E = (0, s.u)(v.a, 0);

        function P(e) {
            let {
                scope: t,
                conversation: n,
                project: r,
                projectListQuery: s,
                pinnedProjectsQuery: o,
                showMoveToProject: i = !0,
                showDestinationFetchState: l = !0,
                projectCrudStatus: c,
                surface: v,
                navigate: _,
                onCreateProjectDialogCloseAutoFocus: P
            } = e, M = "title-menu" === v, k = (e, t) => M ? {
                icon: (0, a.jsx)(u.b, {
                    icon: {
                        16: e,
                        20: t
                    }
                }),
                nativeIcon: e
            } : {
                icon: e
            }, {
                isWorkConversation: R,
                sourceMemoryBlocked: N
            } = (0, j.c)(n, r), O = N ? b.a.projectOnlyMoveUnavailable : void 0, {
                data: L,
                isPending: z,
                isError: F
            } = s, {
                data: B,
                isPending: D,
                isError: G
            } = o, H = (0, I.a)(B, L, r?.gizmo.id), q = "allowed" === c, W = e => {
                let a = t.get(E) + 1,
                    r = t.get(g.e);
                t.set(E, a), (0, C.T)({
                    scope: t,
                    conversationId: n.id,
                    projectId: e.gizmo.id
                }).then(n => {
                    n && t.get(E) === a && t.get(g.e) === r && _((0, T.c)(e.gizmo.id))
                }).catch(() => {
                    t.get(h.f).danger(t.get(p.a).formatMessage(A.moveFailed), {
                        errorAnalytics: {
                            toastId: "move_conversation_to_snorlax_error"
                        }
                    })
                })
            }, K = [];
            for (let e of (q && (K.push({
                    id: "new-chatgpt-project",
                    ...k(d.Hg, d.Ig),
                    message: A.newProject,
                    selectAfterClose: !0,
                    onSelect: () => {
                        t.set(E, e => e + 1), (0, w.a)(t, W, {
                            allowLocalProjectCreation: !1,
                            forceGlobalMemory: R,
                            onCloseAutoFocus: P
                        })
                    }
                }), H.length > 0 && K.push({
                    id: "new-project-separator",
                    type: "separator"
                })), H)) {
                let {
                    targetMemoryBlocked: t
                } = (0, j.c)(n, void 0, e), r = t ? (0, S.a)((0, x.c)(e)) : void 0;
                K.push({
                    id: `move-to-project:${e.gizmo.id}`,
                    icon: (0, a.jsx)(f.a, {
                        className: M ? void 0 : "icon-xs",
                        size: M ? "leading" : 16,
                        color: e.gizmo.display.theme,
                        fallbackIcon: M ? (0, a.jsx)(u.b, {
                            icon: {
                                16: d.Ad,
                                20: d.Bd
                            }
                        }) : (0, a.jsx)(d.Ad, {}),
                        icon: e.gizmo.display.emoji
                    }),
                    nativeIcon: (0, m.b)(e.gizmo.display.emoji),
                    message: A.projectName,
                    messageValues: {
                        projectName: e.gizmo.display.name
                    },
                    enabled: null == r,
                    tooltipMessage: r,
                    onSelect: () => W(e)
                })
            }
            return l && (F || G) ? K.push({
                id: "retry-project-destinations",
                message: A.destinationsFailed,
                closeOnSelect: !1,
                onSelect: () => {
                    Promise.all([t.query.invalidate(y.a), t.query.invalidate(C.m)])
                }
            }) : l && (z || D) ? K.push({
                id: "loading-project-destinations",
                message: A.loading,
                tooltipMessage: A.reopen,
                enabled: !1
            }) : F || G || z || D || 0 !== H.length || q || K.push({
                id: "no-project-destinations",
                message: A.noDestinations,
                enabled: !1
            }), [...i && K.length > 0 ? [{
                id: "move-to-project",
                ...k(d.Dd, d.Ed),
                message: A.moveToProject,
                enabled: !N,
                tooltipMessage: O,
                submenu: K
            }] : [], ...null == r ? [] : [{
                id: "remove-from-project",
                ...k(d.Id, d.Jd),
                message: A.removeFromProject,
                enabled: !N,
                tooltipMessage: O,
                onSelect: () => {
                    t.set(E, e => e + 1), (0, C.T)({
                        scope: t,
                        conversationId: n.id,
                        projectId: null
                    }).catch(() => {
                        t.get(h.f).danger(t.get(p.a).formatMessage(A.removeFailed), {
                            errorAnalytics: {
                                toastId: "move_conversation_to_snorlax_error"
                            }
                        })
                    })
                }
            }]]
        }
        let A = (0, i.f)({
            moveToProject: {
                id: "chatgptConversations.projectActions.moveToProject",
                defaultMessage: "Move to project"
            },
            projectName: {
                id: "chatgptConversations.projectActions.projectName",
                defaultMessage: "{projectName}"
            },
            removeFromProject: {
                id: "chatgptProjectHome.chats.projectActions.remove",
                defaultMessage: "Remove from project"
            },
            moveFailed: {
                id: "chatgptProjectHome.chats.projectActions.moveFailed",
                defaultMessage: "Failed to move the conversation to the project"
            },
            removeFailed: {
                id: "chatgptProjectHome.chats.projectActions.removeFailed",
                defaultMessage: "Failed to remove the conversation from the project"
            },
            newProject: {
                id: "chatgptProjectHome.chats.projectActions.newProject",
                defaultMessage: "New project"
            },
            destinationsFailed: {
                id: "chatgptProjectHome.chats.projectActions.destinationsFailed",
                defaultMessage: "Couldn’t load projects. Try again"
            },
            loading: {
                id: "chatgptConversations.projects.loadingMenu",
                defaultMessage: "Loading projects…"
            },
            reopen: {
                id: "chatgptConversations.projects.reopenMenu",
                defaultMessage: "Reopen this menu to refresh project destinations"
            },
            noDestinations: {
                id: "chatgptProjectHome.chats.projectActions.noDestinations",
                defaultMessage: "No other projects"
            }
        });
        n.d(t, {}, {
            a: function(e) {
                let t, n, i = (0, r.c)(12),
                    {
                        conversation: d,
                        onCreateProjectDialogCloseAutoFocus: u,
                        project: h,
                        showMoveToProject: p
                    } = e,
                    g = void 0 === p || p,
                    m = (0, s.y)(v.a),
                    f = (0, l._)(),
                    b = (0, s.z)(y.a),
                    x = (0, s.z)(C.m),
                    w = (0, _.b)();
                if (i[0] !== d || i[1] !== f || i[2] !== u || i[3] !== x || i[4] !== h || i[5] !== w || i[6] !== b || i[7] !== m || i[8] !== g) {
                    let e = P({
                            scope: m,
                            conversation: d,
                            project: h,
                            projectListQuery: b,
                            pinnedProjectsQuery: x,
                            showMoveToProject: g,
                            projectCrudStatus: w,
                            surface: "project-menu",
                            navigate: f,
                            onCreateProjectDialogCloseAutoFocus: u
                        }),
                        n = e => {
                            if ("separator" === e.type) return (0, a.jsx)(c.c.Separator, {}, e.id);
                            let t = e.message ? (0, a.jsx)(o.a, {
                                    ...e.message,
                                    values: e.messageValues
                                }) : e.id,
                                r = e.tooltipMessage ? (0, a.jsx)(o.a, {
                                    ...e.tooltipMessage,
                                    values: e.tooltipMessageValues
                                }) : void 0;
                            return null != e.submenu ? (0, a.jsx)(c.c.FlyoutSubmenuItem, {
                                LeftIcon: "function" == typeof e.icon ? e.icon : void 0,
                                disabled: !1 === e.enabled,
                                tooltipSide: "bottom",
                                tooltipSideOffset: 8,
                                label: t,
                                tooltipText: r,
                                children: e.submenu.map(n)
                            }, e.id) : (0, a.jsx)(c.c.Item, {
                                LeftIcon: "function" == typeof e.icon ? e.icon : void 0,
                                leftIcon: "object" == typeof e.icon ? e.icon : void 0,
                                disabled: !1 === e.enabled,
                                tooltipSide: "bottom",
                                tooltipSideOffset: 8,
                                tooltipText: r,
                                onSelect: t => {
                                    !1 === e.closeOnSelect && t.preventDefault(), e.onSelect?.()
                                },
                                children: t
                            }, e.id)
                        };
                    t = e.map(n), i[0] = d, i[1] = f, i[2] = u, i[3] = x, i[4] = h, i[5] = w, i[6] = b, i[7] = m, i[8] = g, i[9] = t
                } else t = i[9];
                return i[10] !== t ? (n = (0, a.jsx)(a.Fragment, {
                    children: t
                }), i[10] = t, i[11] = n) : n = i[11], n
            },
            b: P
        })
    }),
    MDmT: (function(e, t, n) {
        var a = n("Q840"),
            r = n("Qgfj"),
            s = n("OWtl"),
            o = n("dQRk"),
            i = n("b6fw");
        let l = (0, a.d)(s.a, (e, t) => {
            let {
                get: n
            } = t, a = n(i.h, e);
            if (null == a) return null;
            let r = n(o.N, e);
            return null == r ? null : c({
                ...a,
                conversation: {
                    mapping: r,
                    current_node: n(o.C, e),
                    conversation_origin: n(o.y, e),
                    context_truncation_continuation: n(o.i, e)?.metadata
                }
            })
        });

        function c(e) {
            let {
                conversation: t,
                view: n,
                selectedSectionId: a,
                entryMessageIds: r,
                entry: s
            } = e, o = n.definition.sections, i = o.findIndex(e => e.id === a), l = o[i], c = [], d = new Set, u = t.current_node ?? null;
            for (; null != u && !d.has(u);) c.push(u), d.add(u), u = t.mapping[u]?.parent ?? null;
            c.reverse();
            let h = new Map(c.map((e, t) => [e, t])),
                p = e => {
                    if (null == e) return;
                    let t = [e.start_message_id, ...r[e.id] ?? []].flatMap(e => {
                        let t = null == e ? void 0 : h.get(e);
                        return null == t ? [] : [t]
                    });
                    return 0 === t.length ? void 0 : Math.min(...t)
                },
                g = o[i + 1],
                m = p(l),
                f = p(g),
                v = l?.start_message_id != null && null == m || g?.start_message_id != null && null == f,
                b = s?.status === "sending" && (s.sectionId === l?.id || s.sectionId === g?.id),
                y = null == m || v ? [] : c.slice(m, f ?? c.length),
                x = Object.fromEntries(y.map(e => [e, t.mapping[e]]));
            return {
                selectedIndex: i,
                conversation: {
                    ...t,
                    current_node: y.at(-1) ?? null,
                    mapping: x
                },
                needsOlderMessages: v && !b,
                isReviewing: a !== n.current_section_id && s?.sectionId !== a,
                needsEntry: l?.start_message_id == null,
                isEntering: s?.status === "sending"
            }
        }
        let d = (0, r.f)({
            readOnlyPlaceholder: {
                id: "sectionedConversation.readOnlyPlaceholder",
                defaultMessage: "This section is read-only"
            }
        });
        n.d(t, {}, {
            a: function(e) {
                return e.map(e => ({
                    ...e,
                    errorMessage: null,
                    isMostRecentTurn: !1,
                    isReadOnly: !0,
                    onEditUserMessage: void 0,
                    onFork: void 0,
                    onRegenerateResponse: void 0,
                    paragen: null,
                    pendingSubmissionAttachments: void 0,
                    safetyReview: null,
                    showPendingLoadingMessage: !1,
                    showRequestUserInputStatus: !1
                }))
            },
            b: c,
            c: l,
            d: d
        })
    }),
    Yjxz: (function(e, t, n) {
        n.d(t, {}, {
            a: function(e) {
                return "language-learning" === e || "language-diagnostic" === e
            },
            b: function(e) {
                let {
                    mapping: t,
                    currentNodeId: n,
                    sourceMessageId: a
                } = e;
                if (null == t || null == a) return !1;
                let r = new Set,
                    s = n;
                for (; null != s && !r.has(s);) {
                    r.add(s);
                    let e = t[s];
                    if (e?.message == null) break;
                    let n = e.message;
                    if (s === a) return "assistant" === n.author.role;
                    if ("tool" !== n.author.role || "dil.state" !== n.author.name || n.metadata?.is_visually_hidden_from_conversation !== !0) break;
                    s = e.parent
                }
                return !1
            }
        })
    }),
    JUxu: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("Q840"),
            o = n("zd8w"),
            i = n("oyxz"),
            l = n("SaNw"),
            c = n("UOa8"),
            d = n("Sm6l"),
            u = n("X6Vn"),
            h = n("OWtl"),
            p = n("j0nn");
        let g = (0, o.lazy)(async () => ({
            default: (await Promise.resolve().then(n.bind(n, "taaw"))).CodexThreadReportDialog
        }));

        function m(e) {
            let t, n, o, l = (0, r.c)(9),
                {
                    imageOnly: u
                } = e,
                g = (0, s.y)(h.a),
                m = (0, s.x)(p.f, (0, c.a)());
            return null == m ? null : (l[0] !== u || l[1] !== g || l[2] !== m.id ? (t = () => f(g, m.id, u), l[0] = u, l[1] = g, l[2] = m.id, l[3] = t) : t = l[3], l[4] !== u ? (n = u ? (0, a.jsx)(i.a, {
                id: "chatgptConversations.sharedPost.webImage.reportButton",
                defaultMessage: "Report image"
            }) : (0, a.jsx)(i.a, {
                id: "chatgptConversations.sharedPost.reportButton",
                defaultMessage: "Report conversation"
            }), l[4] = u, l[5] = n) : n = l[5], l[6] !== t || l[7] !== n ? (o = (0, a.jsx)(d.a, {
                className: "font-semibold",
                color: "ghostActive",
                type: "button",
                onClick: t,
                children: n
            }), l[6] = t, l[7] = n, l[8] = o) : o = l[8], o)
        }

        function f(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            (0, u.f)(e, g, {
                reportEntityType: "post",
                productArea: "chatgpt_post",
                threadId: t,
                title: n ? (0, a.jsx)(i.a, {
                    id: "chatgptConversations.sharedPost.webImage.reportTitle",
                    defaultMessage: "Report an image"
                }) : (0, a.jsx)(i.a, {
                    id: "chatgptConversations.sharedPost.reportTitle",
                    defaultMessage: "Report a conversation"
                })
            })
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n = (0, r.c)(2),
                    {
                        imageOnly: s
                    } = e,
                    o = void 0 !== s && s;
                return n[0] !== o ? (t = (0, a.jsxs)("div", {
                    className: "flex flex-col items-center gap-1 text-center text-xs select-none",
                    children: [(0, a.jsx)("div", {
                        className: "text-secondary",
                        children: o ? (0, a.jsx)(i.a, {
                            id: "chatgptConversations.sharedPost.webImage.disclaimer",
                            defaultMessage: "This is a shared image."
                        }) : (0, a.jsx)(i.a, {
                            id: "chatgptConversations.sharedConversation.copyDisclaimer",
                            defaultMessage: "This is a copy of a shared ChatGPT chat. It won't be added to memory."
                        })
                    }), (0, a.jsx)(m, {
                        imageOnly: o
                    })]
                }), n[0] = o, n[1] = t) : t = n[1], t
            },
            b: function(e) {
                let t, n = (0, r.c)(3),
                    {
                        postId: o
                    } = e,
                    c = (0, s.y)(h.a);
                return n[0] !== o || n[1] !== c ? (t = (0, a.jsx)(l.a.HeaderAction, {
                    actionId: "chatgpt-shared-prompt-notice",
                    align: "center",
                    children: (0, a.jsx)("div", {
                        className: "flex flex-col items-center text-center text-xs text-secondary select-none sm:block",
                        children: (0, a.jsx)(i.a, {
                            id: "chatgptConversations.sharedPost.promptNotice",
                            defaultMessage: "Content created using ChatGPT. <reportButton>Report if unsafe</reportButton>",
                            values: {
                                reportButton: e => (0, a.jsx)(d.a, {
                                    className: "inline underline",
                                    color: "ghostSecondary",
                                    size: "inline",
                                    onClick: () => f(c, o),
                                    children: e
                                }, "report")
                            }
                        })
                    })
                }), n[0] = o, n[1] = c, n[2] = t) : t = n[2], t
            }
        })
    }),
    JKdL: (function(e, t, n) {
        n.d(t, {
            a: () => h
        });
        var a = n("ABep"),
            r = n("QosV"),
            s = n("Q840"),
            o = n("SaNw"),
            i = n("Cslg"),
            l = n("OFP1"),
            c = n("UOa8"),
            d = n("MMlk"),
            u = n("jeai");

        function h(e) {
            let t, n, h, p, g = (0, r.c)(14),
                {
                    conversationHeader: m,
                    children: f
                } = e,
                v = void 0 !== m && m,
                b = (0, c.a)(),
                y = (0, s.z)(i.l),
                x = (0, s.z)(l.n);
            g[0] !== b.authMethod || g[1] !== y.status || g[2] !== x ? (t = function(e) {
                let {
                    authMethod: t,
                    chatGptAccessStatus: n,
                    isWorkOnlyChatDisabled: a
                } = e;
                return "chatgpt" === t && "allowed" === n && !a
            }({
                authMethod: b.authMethod,
                chatGptAccessStatus: y.status,
                isWorkOnlyChatDisabled: x
            }), g[0] = b.authMethod, g[1] = y.status, g[2] = x, g[3] = t) : t = g[3];
            let w = t;
            return w || null != f ? (g[4] !== v || g[5] !== w ? (n = w && v ? (0, a.jsx)(u.a, {
                children: (0, a.jsx)(d.a, {})
            }) : null, g[4] = v, g[5] = w, g[6] = n) : n = g[6], g[7] !== v || g[8] !== w ? (h = w && !v ? (0, a.jsx)(d.a, {}) : null, g[7] = v, g[8] = w, g[9] = h) : h = g[9], g[10] !== f || g[11] !== n || g[12] !== h ? (p = (0, a.jsx)(o.a.HeaderAction, {
                actionId: "chatgpt-shared-post-actions",
                align: "end",
                allowsThreadContentOverlap: !0,
                order: 100,
                children: (0, a.jsxs)("div", {
                    className: "flex items-center gap-2 browser:rounded-lg browser:bg-surface",
                    children: [f, n, h]
                })
            }), g[10] = f, g[11] = n, g[12] = h, g[13] = p) : p = g[13], p) : null
        }
    }),
    b7aP: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("oyxz"),
            o = n("Bbed"),
            i = n("iS3k");
        let l = (0, o.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(362890)]).then(n.bind(n, "hhV7"))).ChatGptThreadSummaryPanelBody, {
            errorFallback: (0, a.jsx)("span", {
                className: "px-5 select-none",
                role: "status",
                children: (0, a.jsx)(s.a, {
                    id: "chatgptConversations.summaryPanel.loadError",
                    defaultMessage: "Summary could not load. Reload the app to try again"
                })
            })
        });
        n.d(t, {}, {
            a: function(e) {
                let t, n = (0, r.c)(2);
                return n[0] !== e ? (t = (0, a.jsx)(i.a.Content, {
                    children: (0, a.jsx)(l, {
                        ...e
                    })
                }), n[0] = e, n[1] = t) : t = n[1], t
            }
        })
    }),
    Yrvy: (function(e, t, n) {
        var a = n("QosV"),
            r = n("xSOA"),
            s = n("Q840"),
            o = n("Wf1j"),
            i = n("SGsN"),
            l = n("OWtl"),
            c = n("MRlq"),
            d = n("QmkR");
        n.d(t, {}, {
            a: function(e) {
                let t, n, u, h, p = (0, a.c)(12),
                    g = (0, s.y)(l.a),
                    m = (0, o.a)();
                return p[0] !== e || p[1] !== g ? (t = t => (0, d.u)({
                    scope: g,
                    conversationId: e,
                    deleteArtifacts: t
                }), p[0] = e, p[1] = g, p[2] = t) : t = p[2], p[3] !== g ? (n = () => g.queryClient.invalidateQueries({
                    queryKey: [d.a]
                }), p[3] = g, p[4] = n) : n = p[4], p[5] !== m || p[6] !== g ? (u = () => {
                    g.get(i.f).danger(m.formatMessage(c.a.deleteError), {
                        errorAnalytics: {
                            toastId: "archived_conversations_modal_delete_failed"
                        }
                    })
                }, p[5] = m, p[6] = g, p[7] = u) : u = p[7], p[8] !== t || p[9] !== n || p[10] !== u ? (h = {
                    mutationFn: t,
                    onSuccess: n,
                    onError: u
                }, p[8] = t, p[9] = n, p[10] = u, p[11] = h) : h = p[11], (0, r.a)(h)
            }
        })
    }),
    JjB1: (function(e, t, n) {
        var a = n("on57");
        let r = '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", "Segoe UI", sans-serif',
            s = (0, a.b)("text-default min-h-0 w-full p-0 leading-normal !font-sans", "[&_.ProseMirror]:w-full", "[&_.ProseMirror]:!text-default", "[&_.ProseMirror]:!font-sans", "[&_.ProseMirror]:px-0", "[&_.ProseMirror]:py-0", "[&_.ProseMirror]:!leading-[var(--annotation-comment-line-height,calc(var(--spacing)*6))]", "[&_.ProseMirror_p]:!font-sans", "[&_.ProseMirror_p]:!leading-[var(--annotation-comment-line-height,calc(var(--spacing)*6))]", "[&_.ProseMirror_p_*]:!font-sans", "[&_.ProseMirror_span]:!font-sans", "!min-h-0 text-base", "[&_.ProseMirror]:min-h-[var(--annotation-comment-min-height,calc(var(--spacing)*6))]!");
        n.d(t, {}, {
            a: "absolute inset-x-0 bottom-0 flex h-12 items-center ps-2 pe-3 origin-bottom-left transition-[opacity,transform] duration-basic ease-out motion-reduce:transition-none",
            b: s,
            c: "absolute left-4 min-w-0 overflow-hidden transition-[left,width,top,bottom] duration-[140ms] ease-enter-snappy motion-reduce:transition-none",
            d: {
                "--codex-chat-font-size": "var(--annotation-comment-font-size, 13px)",
                "--font-sans": r,
                "--font-ui-family": r,
                fontFamily: r
            }
        })
    }),
    YwjY: (function(e, t, n) {
        n.d(t, {
            a: () => i
        });
        var a = n("ABep"),
            r = n("QosV"),
            s = n("on57"),
            o = n("JjB1");

        function i(e) {
            let t, n, i, l, c, d, u, h, p, g, m, f, v, b, y = (0, r.c)(30);
            y[0] !== e ? ({
                className: n,
                children: t,
                style: l,
                isRevealingPageComment: c,
                surfaceVariant: d,
                discussion: u,
                hasRecipientControl: h,
                ...i
            } = e, y[0] = e, y[1] = t, y[2] = n, y[3] = i, y[4] = l, y[5] = c, y[6] = d, y[7] = u, y[8] = h) : (t = y[1], n = y[2], i = y[3], l = y[4], c = y[5], d = y[6], u = y[7], h = y[8]);
            let x = void 0 === d ? "default" : d,
                w = void 0 !== u && u,
                C = void 0 !== h && h,
                _ = "default" === x && "bg-surface-elevated-secondary shadow-md",
                S = w && !C && "in-data-[comment-layout=floating]:shadow-none!",
                j = w && "default" === x && "in-data-[comment-layout=floating]:border in-data-[comment-layout=floating]:bg-surface-elevated!",
                I = w && "default" === x && (C ? "in-data-[comment-layout=floating]:border-strong in-data-[comment-layout=floating]:rounded-xl! in-data-[comment-layout=floating]:shadow-[0_2px_10px_rgb(0_0_0/5%)]!" : "in-data-[comment-layout=floating]:border-border"),
                T = void 0 !== c && c ? "transition-none" : "transition-[height,width,opacity]";
            return y[9] !== n || y[10] !== _ || y[11] !== S || y[12] !== j || y[13] !== I || y[14] !== T ? (p = (0, s.b)("surface-AyYLmv", "pointer-events-auto isolate rounded-[22px] ease-enter-snappy motion-reduce:transition-none", _, S, j, I, T, n), y[9] = n, y[10] = _, y[11] = S, y[12] = j, y[13] = I, y[14] = T, y[15] = p) : p = y[15], y[16] !== l ? (g = {
                ...o.d,
                ...l
            }, y[16] = l, y[17] = g) : g = y[17], y[18] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, s.b)("content-Sj8_aX", "overflow-hidden rounded-[inherit] bg-inherit"), y[18] = m) : m = y[18], y[19] !== t ? (f = (0, a.jsx)("div", {
                className: m,
                children: t
            }), y[19] = t, y[20] = f) : f = y[20], y[21] !== w || y[22] !== x ? (v = "default" === x ? (0, a.jsx)("div", {
                "aria-hidden": !0,
                className: (0, s.b)("pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-multiply outline-1 outline-border", w && "in-data-[comment-layout=floating]:hidden")
            }) : null, y[21] = w, y[22] = x, y[23] = v) : v = y[23], y[24] !== i || y[25] !== p || y[26] !== g || y[27] !== f || y[28] !== v ? (b = (0, a.jsxs)("div", {
                ...i,
                className: p,
                style: g,
                children: [f, v]
            }), y[24] = i, y[25] = p, y[26] = g, y[27] = f, y[28] = v, y[29] = b) : b = y[29], b
        }
    }),
    iqo5: (function(e, t, n) {
        n.d(t, {
            a: () => f
        });
        var a = n("ABep"),
            r = n("QosV"),
            s = n("zd8w"),
            o = n("oyxz"),
            i = n("YwjY"),
            l = n("Sm6l"),
            c = n("UIU6"),
            d = n("Bbed"),
            u = n("RNul"),
            h = n("Zqzr"),
            p = n("T1PX");

        function g(e) {
            let t, n, o, i, l, c, d = (0, r.c)(13),
                {
                    children: u,
                    source: g
                } = e,
                m = (0, s.useRef)(null),
                f = !(0, p.a)() && g.width > 0 && g.height > 0;
            d[0] !== f || d[1] !== g ? (t = () => {
                let e = m.current,
                    t = e?.ownerDocument.defaultView;
                if (!e || !t || !f) return;
                let n = 0,
                    a = new ResizeObserver(() => {
                        a.disconnect(), n = t.requestAnimationFrame(() => {
                            let a = e.getBoundingClientRect();
                            if (!a.width || !a.height) {
                                e.dataset.phase = "open";
                                return
                            }
                            let r = e.offsetWidth / a.width,
                                s = e.offsetHeight / a.height,
                                o = (g.left - a.left) * r,
                                i = (g.top - a.top) * s,
                                l = (a.right - g.right) * r,
                                c = (a.bottom - g.bottom) * s;
                            e.style.setProperty("--entry-inset", `${i}px ${l}px ${c}px ${o}px`), e.style.setProperty("--entry-transform", `translate(${o}px, ${i}px) scale(${g.width/a.width}, ${g.height/a.height})`), e.dataset.phase = "source", n = t.requestAnimationFrame(() => {
                                e.dataset.phase = "open"
                            })
                        })
                    });
                return a.observe(e), () => {
                    a.disconnect(), t.cancelAnimationFrame(n), delete e.dataset.phase, e.style.removeProperty("--entry-inset"), e.style.removeProperty("--entry-transform")
                }
            }, n = [f, g], d[0] = f, d[1] = g, d[2] = t, d[3] = n) : (t = d[2], n = d[3]), (0, s.useLayoutEffect)(t, n);
            let v = f ? "entry-yS3y1e" : void 0;
            return d[4] === Symbol.for("react.memo_cache_sentinel") ? (o = {
                position: "relative",
                maxWidth: "100%",
                width: h.U
            }, d[4] = o) : o = d[4], d[5] !== f ? (i = f ? (0, a.jsx)("div", {
                "aria-hidden": !0,
                className: "surface-Iou1vs pointer-events-none absolute inset-0 rounded-[22px] bg-surface-elevated-secondary shadow-md outline-1 outline-border"
            }) : null, d[5] = f, d[6] = i) : i = d[6], d[7] !== u ? (l = (0, a.jsx)("div", {
                className: "content-ARLCcU",
                children: u
            }), d[7] = u, d[8] = l) : l = d[8], d[9] !== v || d[10] !== i || d[11] !== l ? (c = (0, a.jsxs)("div", {
                ref: m,
                "data-selection-annotation-entry": "",
                className: v,
                style: o,
                children: [i, l]
            }), d[9] = v, d[10] = i, d[11] = l, d[12] = c) : c = d[12], c
        }
        let m = (0, d.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(789716), n.e(531161), n.e(835435), n.e(91006)]).then(n.bind(n, "FQ1K"))).SelectedTextAnnotationEditor, {
            suspendToParent: !0,
            errorFallback: e => (0, a.jsx)(v, {
                failed: !0,
                onClose: e.onCancel
            })
        });

        function f(e) {
            let t, n, o, i, l, d, u, h, p = (0, r.c)(18);
            p[0] !== e ? ({
                entryRect: t,
                ...n
            } = e, p[0] = e, p[1] = t, p[2] = n) : (t = p[1], n = p[2]), p[3] !== n.onCancel ? (o = (0, a.jsx)(v, {
                failed: !0,
                onClose: n.onCancel
            }), p[3] = n.onCancel, p[4] = o) : o = p[4], p[5] !== n.onCancel ? (i = (0, a.jsx)(v, {
                onClose: n.onCancel
            }), p[5] = n.onCancel, p[6] = i) : i = p[6], p[7] !== n ? (l = (0, a.jsx)(m, {
                ...n
            }), p[7] = n, p[8] = l) : l = p[8], p[9] !== i || p[10] !== l ? (d = (0, a.jsx)(s.Suspense, {
                fallback: i,
                children: l
            }), p[9] = i, p[10] = l, p[11] = d) : d = p[11], p[12] !== o || p[13] !== d ? (u = (0, a.jsx)(c.a, {
                name: "ResponseTextAnnotationEditor",
                fallback: o,
                children: d
            }), p[12] = o, p[13] = d, p[14] = u) : u = p[14];
            let f = u;
            return p[15] !== f || p[16] !== t ? (h = null == t ? f : (0, a.jsx)(g, {
                source: t,
                children: f
            }), p[15] = f, p[16] = t, p[17] = h) : h = p[17], h
        }

        function v(e) {
            let t, n, s, c, d = (0, r.c)(9),
                {
                    failed: h,
                    onClose: p
                } = e,
                g = void 0 !== h && h,
                m = g ? "alert" : "status";
            return d[0] !== g ? (t = g ? (0, a.jsx)(o.a, {
                id: "responseTextAnnotationMarkers.editor.loadError",
                defaultMessage: "Couldn't load the editor. Reload to try again"
            }) : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(u.a, {}), (0, a.jsx)(o.a, {
                    id: "responseTextAnnotationMarkers.editor.loading",
                    defaultMessage: "Loading editor…"
                })]
            }), d[0] = g, d[1] = t) : t = d[1], d[2] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(o.a, {
                id: "responseTextAnnotationMarkers.editor.close",
                defaultMessage: "Close"
            }), d[2] = n) : n = d[2], d[3] !== p ? (s = (0, a.jsx)(l.a, {
                color: "secondary",
                onClick: p,
                children: n
            }), d[3] = p, d[4] = s) : s = d[4], d[5] !== m || d[6] !== t || d[7] !== s ? (c = (0, a.jsxs)(i.a, {
                className: "flex flex-col items-center justify-center gap-3 p-4 text-center text-sm text-secondary select-none",
                role: m,
                children: [t, s]
            }), d[5] = m, d[6] = t, d[7] = s, d[8] = c) : c = d[8], c
        }
        f.prefetch = () => m.prefetch()
    }),
    GKsW: (function(e, t, n) {
        var a = n("SRbQ"),
            r = n("ABep"),
            s = n("QosV"),
            o = n("Q840"),
            i = n("zd8w"),
            l = n("GaA7"),
            c = n("OWtl"),
            d = n("tSEg"),
            u = n("n5oN");
        let h = (0, o.u)(c.a, () => []);

        function p(e) {
            let t, n, a, r, d, u, p = (0, s.c)(13),
                {
                    title: v,
                    nativeTitle: b
                } = e,
                y = void 0 === b ? v : b,
                x = (0, o.y)(c.a),
                [w] = (0, i.useState)(g);
            return p[0] !== y || p[1] !== w || p[2] !== x || p[3] !== v ? (t = () => {
                if (l.a?.windowTitle == null) return;
                let e = {
                    owner: w,
                    title: null == v ? void 0 : y ?? null
                };
                x.set(h, t => t.some(e => e.owner === w) ? t.map(t => t.owner === w ? e : t) : [...t, e]), f(x)
            }, n = [x, w, v, y], p[0] = y, p[1] = w, p[2] = x, p[3] = v, p[4] = t, p[5] = n) : (t = p[4], n = p[5]), (0, i.useEffect)(t, n), p[6] !== w || p[7] !== x ? (a = () => () => {
                l.a?.windowTitle != null && (x.set(h, e => e.filter(e => e.owner !== w)), f(x))
            }, r = [x, w], p[6] = w, p[7] = x, p[8] = a, p[9] = r) : (a = p[8], r = p[9]), (0, i.useEffect)(a, r), p[10] !== v ? (d = () => {
                if (null == v) return;
                let e = document.title;
                m(v);
                let t = document.title;
                return () => {
                    document.title === t && m(e)
                }
            }, u = [v], p[10] = v, p[11] = d, p[12] = u) : (d = p[11], u = p[12]), (0, i.useEffect)(d, u), null
        }

        function g() {
            return Symbol()
        }

        function m(e) {
            let t = document.head.querySelector("title")?.firstChild;
            t instanceof Text && null == t.nextSibling ? t.data = e : document.title = e
        }

        function f(e) {
            let t = {
                stack: [],
                error: void 0,
                hasError: !1
            };
            try {
                let n = e.get(h).findLast(e => void 0 !== e.title);
                (0, a.a)(t, l.a.windowTitle?.setTitle(n?.title ?? null), !1)
            } catch (e) {
                t.error = e, t.hasError = !0
            } finally {
                (0, a.e)(t)
            }
        }
        n.d(t, {}, {
            a: p,
            b: function(e) {
                let t, n = (0, s.c)(2),
                    {
                        title: a
                    } = e,
                    i = (0, o.y)(d.a),
                    l = (0, o.x)(u.a, `${i.value.pathname}${i.value.search??""}`),
                    c = a ?? l;
                return n[0] !== c ? (t = (0, r.jsx)(p, {
                    title: c
                }), n[0] = c, n[1] = t) : t = n[1], t
            }
        })
    }),
    xD3Z: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("slpy"),
            o = n("Q840"),
            i = n("Qgfj"),
            l = n("Wf1j"),
            c = n("oyxz"),
            d = n("QcW8"),
            u = n("Sm6l"),
            h = n("rmk3"),
            p = n("bf6R"),
            g = n("f38C"),
            m = n("tSEg"),
            f = n("hZax"),
            v = n("dt6g"),
            b = n("WwnD");

        function y(e) {
            let t, n, o, d, m, v = (0, r.c)(22),
                {
                    contextMenuTrigger: b,
                    isCompact: y,
                    isDragging: w,
                    items: C,
                    open: _,
                    onMinimize: S,
                    onOpenChange: j,
                    showOptions: I
                } = e,
                T = void 0 === I || I,
                E = (0, f.f)("2163293173"),
                P = (0, l.a)();
            v[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, i.e)({
                id: "quickChat.dock.minimizeComposer",
                defaultMessage: "Minimize composer"
            }), v[0] = t) : t = v[0], v[1] !== S ? (n = {
                id: "minimize",
                icon: p._e,
                message: t,
                onSelect: S,
                selectAfterClose: !0
            }, v[1] = S, v[2] = n) : n = v[2], v[3] !== C || v[4] !== n ? (o = [...C, n], v[3] = C, v[4] = n, v[5] = o) : o = v[5];
            let A = o;
            if (null != b) {
                let e, t;
                return T ? (v[6] !== b ? (e = (0, a.jsx)("div", {
                    className: "contents",
                    children: b
                }), v[6] = b, v[7] = e) : e = v[7], v[8] !== A || v[9] !== e ? (t = (0, a.jsx)(h.a, {
                    disableNative: !0,
                    items: A,
                    children: e
                }), v[8] = A, v[9] = e, v[10] = t) : t = v[10], t) : b
            }
            return v[11] !== E || v[12] !== P || v[13] !== y || v[14] !== w || v[15] !== A || v[16] !== j || v[17] !== _ || v[18] !== T ? (d = T && (0, a.jsx)(h.a, {
                disableNative: !0,
                trigger: "click",
                align: "end",
                open: _,
                onOpenChange: j,
                items: A,
                children: E ? (0, a.jsx)(g.a, {
                    size: "toolbar",
                    label: P.formatMessage({
                        id: "quickChat.moreOptions",
                        defaultMessage: "Chat options"
                    })
                }) : (0, a.jsx)(s.a, {
                    disabled: _ || w,
                    content: (0, a.jsx)(c.a, {
                        id: "quickChat.dock.dragHint",
                        defaultMessage: "Drag to move · Click for options"
                    }),
                    children: (0, a.jsx)(u.a, {
                        className: "cursor-grab touch-none active:cursor-grabbing",
                        "aria-label": P.formatMessage({
                            id: "quickChat.moreOptions",
                            defaultMessage: "Chat options"
                        }),
                        color: "ghostSecondary",
                        "data-quick-chat-drag-handle": !0,
                        size: y ? "composer" : "toolbar",
                        uniform: !0,
                        onPointerDown: x,
                        onClick: e => {
                            0 !== e.button || e.ctrlKey || !(e.detail > 0) || e.defaultPrevented || j?.(!_)
                        },
                        children: (0, a.jsx)(p._c, {})
                    })
                })
            }), v[11] = E, v[12] = P, v[13] = y, v[14] = w, v[15] = A, v[16] = j, v[17] = _, v[18] = T, v[19] = d) : d = v[19], v[20] !== d ? (m = (0, a.jsx)(a.Fragment, {
                children: d
            }), v[20] = d, v[21] = m) : m = v[21], m
        }

        function x(e) {
            0 !== e.button || e.ctrlKey || e.preventDefault()
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, s = (0, r.c)(6),
                    l = (0, o.y)(m.a),
                    c = (0, o.z)(d.q);
                s[0] !== c || s[1] !== l ? (t = c ? [{
                    id: "full-view",
                    icon: p.N,
                    message: (0, i.e)({
                        id: "quickChat.dock.openTab",
                        defaultMessage: "Open in full view"
                    }),
                    onSelect: () => {
                        (0, v.a)(l, "context_menu", () => (0, b.b)(l, "chat", {
                            mode: "full"
                        }))
                    }
                }] : [], s[0] = c, s[1] = l, s[2] = t) : t = s[2];
                let u = t;
                return s[3] !== u || s[4] !== e ? (n = (0, a.jsx)(y, {
                    ...e,
                    items: u
                }), s[3] = u, s[4] = e, s[5] = n) : n = s[5], n
            },
            b: y
        })
    }),
    SkIz: (function(e, t, n) {
        n.d(t, {
            a: () => C
        });
        var a = n("ABep"),
            r = n("QosV"),
            s = n("Q840"),
            o = n("oyxz"),
            i = n("TjgH"),
            l = n("Sm6l"),
            c = n("X6Vn"),
            d = n("gPv1"),
            u = n("OWtl"),
            h = n("L2MT"),
            p = n("nsrx"),
            g = n("on57"),
            m = n("JNtf"),
            f = n("mUDD"),
            v = n("ZhKl"),
            b = n("qVxm"),
            y = n("a6Zv"),
            x = n("eLmE");

        function w(e) {
            let t, n, i, c, d, h, w, C = (0, r.c)(19),
                {
                    hostId: _,
                    onClose: S,
                    rateLimitStatus: j
                } = e,
                I = (0, s.y)(u.a),
                T = (0, y.a)(),
                E = (0, s.x)(x.b, _),
                P = j.rate_limit_upsell;
            if (!E || null == P) return null;
            let A = !T && "-mb-6";
            C[0] !== A ? (t = (0, g.b)("block w-full scale-105 object-cover", A), C[0] = A, C[1] = t) : t = C[1];
            let M = T ? "https://persistent.oaistatic.com/chatgpt/tpp/luna-reserve-modal-hero-dark.png" : "https://persistent.oaistatic.com/chatgpt/tpp/luna-reserve-modal-hero-light.png";
            return C[2] !== t || C[3] !== M ? (n = (0, a.jsx)("div", {
                className: "overflow-hidden",
                children: (0, a.jsx)("img", {
                    alt: "",
                    "aria-hidden": "true",
                    className: t,
                    src: M
                })
            }), C[2] = t, C[3] = M, C[4] = n) : n = C[4], C[5] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(m.e, {
                className: "contents",
                children: (0, a.jsx)(o.a, {
                    id: "codex.lunaReserve.dialog.title",
                    defaultMessage: "Regain access to our most powerful models"
                })
            }), C[5] = i) : i = C[5], C[6] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)(f.e, {
                className: "items-center pb-2",
                children: (0, a.jsx)(f.d, {
                    className: "items-center",
                    titleClassName: "text-center",
                    subtitleTone: "secondary",
                    subtitleClassName: "text-center",
                    title: i,
                    subtitle: (0, a.jsx)(m.d, {
                        className: "contents",
                        children: (0, a.jsx)(o.a, {
                            id: "codex.lunaReserve.dialog.description",
                            defaultMessage: "You are now chatting with Luna. Continue to access our most capable models."
                        })
                    })
                })
            }), C[6] = c) : c = C[6], C[7] !== P.ctas || C[8] !== S || C[9] !== I ? (d = e => (0, a.jsx)("div", {
                className: "self-center",
                children: (0, a.jsx)(f.c, {
                    expandSingleButton: !1,
                    children: P.ctas.map((t, n) => {
                        if (!(0, v.b)(t.action)) return null;
                        let r = e.actions[t.action];
                        return (0, a.jsx)(l.a, {
                            color: 0 === n ? "primary" : "secondary",
                            disabled: r.disabled,
                            size: "large",
                            onClick: e => {
                                (0, p.a)(I, {
                                    action: "CODEX_LUNA_RESERVE_LIFECYCLE_ACTION_MODAL_CTA_CLICKED",
                                    ctaAction: t.action,
                                    source: "details_modal"
                                }), r.log(), S(), r.onClick(e)
                            },
                            children: r.label ?? t.label
                        }, `${t.action}:${n}`)
                    }).reverse()
                })
            }), C[7] = P.ctas, C[8] = S, C[9] = I, C[10] = d) : d = C[10], C[11] !== P || C[12] !== j || C[13] !== d ? (h = (0, a.jsxs)(f.b, {
                children: [c, (0, a.jsx)(f.e, {
                    className: "items-center",
                    children: (0, a.jsx)(b.a, {
                        banner: P,
                        rateLimitStatus: j,
                        renderContent: d
                    })
                })]
            }), C[11] = P, C[12] = j, C[13] = d, C[14] = h) : h = C[14], C[15] !== S || C[16] !== n || C[17] !== h ? (w = (0, a.jsxs)(m.a, {
                open: !0,
                size: "default",
                onOpenChange: S,
                children: [n, h]
            }), C[15] = S, C[16] = n, C[17] = h, C[18] = w) : w = C[18], w
        }

        function C(e) {
            let t, n, g, m, f = (0, r.c)(8),
                {
                    hostId: v
                } = e,
                b = (0, s.y)(u.a),
                y = (0, s.z)(h.a);
            if (!(0, s.x)(x.b, v)) return null;
            let C = y ? "full" : void 0;
            return f[0] !== v || f[1] !== b ? (t = () => {
                (0, p.a)(b, {
                    action: "CODEX_LUNA_RESERVE_LIFECYCLE_ACTION_HEADER_BUTTON_CLICKED",
                    source: "thread_header"
                });
                let e = b.query.getData(d.b);
                if (null != e) {
                    (0, c.f)(b, w, {
                        hostId: v,
                        rateLimitStatus: e
                    }), (0, p.a)(b, {
                        action: "CODEX_LUNA_RESERVE_LIFECYCLE_ACTION_MODAL_OPENED",
                        source: "details_modal"
                    });
                    return
                }(0, p.a)(b, {
                    action: "CODEX_LUNA_RESERVE_LIFECYCLE_ACTION_ERROR",
                    errorCode: "missing_usage_status",
                    source: "thread_header"
                })
            }, f[0] = v, f[1] = b, f[2] = t) : t = f[2], f[3] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)("span", {
                "aria-hidden": "true",
                className: "text-chart-yellow",
                children: "🌙"
            }), f[3] = n) : n = f[3], f[4] === Symbol.for("react.memo_cache_sentinel") ? (g = (0, a.jsxs)(i.a, {
                variant: "reserve",
                children: [n, (0, a.jsx)("span", {
                    className: "brightness-75 dark:brightness-100",
                    children: (0, a.jsx)(o.a, {
                        id: "codex.lunaReserve.header.label",
                        defaultMessage: "Luna reserve"
                    })
                })]
            }), f[4] = g) : g = f[4], f[5] !== C || f[6] !== t ? (m = (0, a.jsx)(l.a, {
                color: "ghostMuted",
                size: "inline",
                radius: C,
                onClick: t,
                children: g
            }), f[5] = C, f[6] = t, f[7] = m) : m = f[7], m
        }
    }),
    FW69: (function(e, t, n) {
        var a = n("xprp");
        n.d(t, {
            a: () => a.a
        })
    }),
    w5yV: (function(e, t, n) {
        var a = n("FW69"),
            r = n("ajVv");
        let s = new Set(["auto", "clip", "hidden", "overlay", "scroll"]);

        function o(e) {
            let {
                range: t,
                element: n,
                target: a,
                bottomBoundaryTop: r
            } = e, s = c(n, r);
            if (null == s) return null;
            let o = function(e, t, n, a) {
                let r = Array.from(e.getClientRects()),
                    s = t.getBoundingClientRect(),
                    o = d(r, a);
                if (null != o && (r.length > 1 || null != u(o, s))) return o;
                let i = e.getBoundingClientRect(),
                    l = u(i, a);
                return null != l && null != u(l, s) ? l : r.some(e => e.width > 0 && e.height > 0) || i.width > 0 && i.height > 0 ? null : d(Array.from(t.getClientRects()), a) ?? u(s, a) ?? d(Array.from(n.getClientRects()), a) ?? u(n.getBoundingClientRect(), a)
            }(t, n, a, s);
            return null == o ? null : {
                rect: o,
                bounds: s
            }
        }

        function i(e, t, n) {
            let a = l(e),
                r = a?.closest(n);
            if (a instanceof HTMLElement && r instanceof HTMLElement) return {
                element: a,
                target: r
            };
            if (!(e instanceof Element)) return null;
            for (let a of [e.childNodes[t], e.childNodes[t - 1]]) {
                let e = l(a),
                    t = e?.closest(n);
                if (e instanceof HTMLElement && t instanceof HTMLElement) return {
                    element: e,
                    target: t
                }
            }
            return null
        }

        function l(e) {
            return e instanceof Element ? e : e?.parentElement ?? null
        }

        function c(e, t) {
            let n = {
                    bottom: null == t ? window.innerHeight : Math.min(window.innerHeight, t),
                    left: 0,
                    right: window.innerWidth,
                    top: 0
                },
                a = e;
            for (; null != a && a !== document.body && a !== document.documentElement;) {
                let e = window.getComputedStyle(a),
                    t = (e.overflowX || e.overflow).split(/\s+/).some(e => s.has(e)),
                    r = (e.overflowY || e.overflow).split(/\s+/).some(e => s.has(e));
                if (t || r) {
                    let e = a.getBoundingClientRect();
                    if ((n = {
                            bottom: r ? Math.min(n.bottom, e.bottom) : n.bottom,
                            left: t ? Math.max(n.left, e.left) : n.left,
                            right: t ? Math.min(n.right, e.right) : n.right,
                            top: r ? Math.max(n.top, e.top) : n.top
                        }).right <= n.left || n.bottom <= n.top) return null
                }
                a = a.parentElement
            }
            return n.bottom <= n.top ? null : n
        }

        function d(e, t) {
            for (let n of e) {
                let e = u(n, t);
                if (null != e) return e
            }
            return null
        }

        function u(e, t) {
            let n = Math.max(e.left, t.left),
                a = Math.max(e.top, t.top),
                r = Math.min(e.right, t.right),
                s = Math.min(e.bottom, t.bottom);
            return n >= r || a >= s ? null : new DOMRect(n, a, r - n, s - a)
        }
        n.d(t, {}, {
            a: c,
            b: o,
            c: function(e) {
                let {
                    bottomBoundarySelector: t,
                    portalTarget: n,
                    targetContainer: s,
                    targetSelector: c,
                    windowZoom: d
                } = e, u = window.getSelection();
                if (null == u || 0 === u.rangeCount || u.isCollapsed) return null;
                let h = function(e, t, n) {
                    var a, r;
                    let s, o, l = i(e.anchorNode, e.anchorOffset, n),
                        c = i(e.focusNode, e.focusOffset, n);
                    if (null != l && null != c && l.target !== c.target) return null;
                    let d = l ?? c;
                    return null == d || null != d.element.closest('[contenteditable="true"]') ? null : {
                        ...d,
                        range: (a = t, r = d.target, (s = document.createRange()).selectNodeContents(r), o = a.cloneRange(), (!r.contains(o.startContainer) || 0 > o.compareBoundaryPoints(Range.START_TO_START, s)) && o.setStart(s.startContainer, s.startOffset), (!r.contains(o.endContainer) || o.compareBoundaryPoints(Range.END_TO_END, s) > 0) && o.setEnd(s.endContainer, s.endOffset), o)
                    }
                }(u, u.getRangeAt(0), c);
                if (null == h || null != s && !s.contains(h.target)) return null;
                let p = (0, a.a)(h.range)?.trim() ?? h.range.toString().trim();
                if (0 === p.length) return null;
                let g = null == t ? null : s?.querySelector(t),
                    m = g instanceof HTMLElement ? g.getBoundingClientRect().top : void 0,
                    f = o({
                        ...h,
                        bottomBoundaryTop: m
                    });
                if (null == f) return null;
                let {
                    rect: v
                } = f, b = n?.contains(h.target) === !0 ? n : void 0, y = b?.getBoundingClientRect(), x = null == y ? {
                    left: 0,
                    right: window.innerWidth
                } : {
                    left: -y.left / d,
                    right: (window.innerWidth - y.left) / d
                }, w = null == y ? v : new DOMRect((v.left - y.left) / d, (v.top - y.top) / d, v.width / d, v.height / d), C = l(h.range.startContainer) ?? h.element;
                return {
                    direction: "rtl" === window.getComputedStyle(C).direction ? "rtl" : "ltr",
                    portalTarget: b,
                    rect: w,
                    selectionRange: h.range.cloneRange(),
                    selectedText: p,
                    target: h.target,
                    targetId: h.target.getAttribute(r.a),
                    viewportHorizontalBounds: x
                }
            },
            d: function(e, t) {
                return null != e && null != t && e.direction === t.direction && e.portalTarget === t.portalTarget && e.selectedText === t.selectedText && e.selectionRange.startContainer === t.selectionRange.startContainer && e.selectionRange.startOffset === t.selectionRange.startOffset && e.selectionRange.endContainer === t.selectionRange.endContainer && e.selectionRange.endOffset === t.selectionRange.endOffset && e.target === t.target && e.targetId === t.targetId && e.viewportHorizontalBounds.left === t.viewportHorizontalBounds.left && e.viewportHorizontalBounds.right === t.viewportHorizontalBounds.right && e.rect.left === t.rect.left && e.rect.top === t.rect.top && e.rect.width === t.rect.width && e.rect.height === t.rect.height
            }
        })
    }),
    NqfB: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("on57"),
            o = n("zd8w"),
            i = n("wD9O"),
            l = n("i7gm"),
            c = n("jDEJ"),
            d = n("bIvi"),
            u = n("w5yV"),
            h = n("ajVv");

        function p(e) {
            return null != e
        }

        function g(e) {
            return e.current
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, m, f, v, b, y, x, w, C = (0, r.c)(40),
                    {
                        align: _,
                        bottomBoundarySelector: S,
                        children: j,
                        className: I,
                        onOpen: T,
                        portalTargetSelector: E,
                        targetContainer: P,
                        targetContainerRefs: A,
                        targetSelector: M
                    } = e,
                    k = void 0 === M ? h.b : M,
                    R = (0, i.c)(),
                    N = (0, o.useRef)(null),
                    O = (0, o.useRef)(!1),
                    L = (0, o.useRef)(null),
                    z = (0, o.useRef)(null),
                    [F, B] = (0, o.useState)(null);
                C[0] !== T ? (t = e => {
                    T?.(e)
                }, C[0] = T, C[1] = t) : t = C[1];
                let D = (0, o.useEffectEvent)(t);
                C[2] !== F || C[3] !== R ? (n = () => {
                    let e = L.current?.getBoundingClientRect();
                    if (null == F || null == e) return;
                    let t = F.portalTarget?.getBoundingClientRect(),
                        n = null == t ? 1 : R;
                    return {
                        point: {
                            x: e.left + e.width / 2,
                            y: e.bottom
                        },
                        width: e.width,
                        selectionRect: {
                            x: F.rect.left * n + (t?.left ?? 0),
                            y: F.rect.top * n + (t?.top ?? 0),
                            width: F.rect.width * n,
                            height: F.rect.height * n
                        },
                        windowZoom: R
                    }
                }, C[2] = F, C[3] = R, C[4] = n) : n = C[4];
                let G = (0, d.a)(n);
                if (C[5] !== S || C[6] !== D || C[7] !== E || C[8] !== P || C[9] !== A || C[10] !== k || C[11] !== R ? (m = () => {
                        let e = null,
                            t = () => {
                                null != N.current && (window.cancelAnimationFrame(N.current), N.current = null)
                            },
                            n = () => {
                                t();
                                let e = window.getSelection();
                                null == z.current && (null == e || 0 === e.rangeCount || e.isCollapsed) || (N.current = window.requestAnimationFrame(() => {
                                    N.current = null;
                                    let e = null != P || null == A ? [P] : A.map(g).filter(p),
                                        t = null;
                                    for (let n of e)
                                        if (null != (t = (0, u.c)({
                                                bottomBoundarySelector: S,
                                                portalTarget: null == E ? void 0 : n?.querySelector(E) ?? void 0,
                                                targetContainer: n,
                                                targetSelector: k,
                                                windowZoom: R
                                            }))) break;
                                    (0, u.d)(z.current, t) || (null == z.current && null != t && D(t), z.current = t, B(t))
                                }))
                            },
                            a = () => {
                                let e = window.getSelection();
                                O.current || null == e || 0 === e.rangeCount || e.isCollapsed || n()
                            },
                            r = t => {
                                let r = window.getSelection(),
                                    s = z.current?.portalTarget;
                                if (!O.current && null != r && 0 !== r.rangeCount && !r.isCollapsed) {
                                    if (null != s && s.contains(r.getRangeAt(0).commonAncestorContainer)) {
                                        let n = t.target;
                                        if (!(n instanceof Node && s.contains(n))) return void(null != e && window.clearTimeout(e), e = window.setTimeout(() => {
                                            e = null, a()
                                        }, 100));
                                        if (!r.getRangeAt(0).intersectsNode(n)) return
                                    }
                                    n()
                                }
                            },
                            s = e => {
                                if (2 === e.button || 0 === e.button && e.ctrlKey && (0, c.a)()) return;
                                let n = e.target;
                                n instanceof Node && L.current?.contains(n) || (O.current = !0, t(), z.current = null, B(null))
                            },
                            o = () => {
                                O.current = !1, n()
                            },
                            i = () => {
                                if (O.current) {
                                    t(), z.current = null, B(null);
                                    return
                                }
                                n()
                            };
                        return n(), document.addEventListener("selectionchange", i), window.addEventListener("dblclick", n), window.addEventListener("keyup", n), window.addEventListener("pointerdown", s), window.addEventListener("pointerup", o), window.addEventListener("pointercancel", o), window.addEventListener("resize", a), window.addEventListener("scroll", r, !0), () => {
                            null != e && window.clearTimeout(e), t(), document.removeEventListener("selectionchange", i), window.removeEventListener("dblclick", n), window.removeEventListener("keyup", n), window.removeEventListener("pointerdown", s), window.removeEventListener("pointerup", o), window.removeEventListener("pointercancel", o), window.removeEventListener("resize", a), window.removeEventListener("scroll", r, !0)
                        }
                    }, C[5] = S, C[6] = D, C[7] = E, C[8] = P, C[9] = A, C[10] = k, C[11] = R, C[12] = m) : m = C[12], C[13] !== S || C[14] !== E || C[15] !== P || C[16] !== A || C[17] !== k || C[18] !== R ? (f = [S, E, P, A, k, R], C[13] = S, C[14] = E, C[15] = P, C[16] = A, C[17] = k, C[18] = R, C[19] = f) : f = C[19], (0, o.useEffect)(m, f), null == F) return null;
                let H = .5;
                "start" === (void 0 === _ ? "center" : _) && (H = +("rtl" === F.direction));
                let q = F.rect.left + F.rect.width * H,
                    W = F.viewportHorizontalBounds.left + 8 - q,
                    K = F.viewportHorizontalBounds.right - 8 - q,
                    U = F.portalTarget ?? document.body,
                    V = null == F.portalTarget ? "fixed z-50" : "absolute z-[1]";
                C[20] !== I || C[21] !== V ? (v = (0, s.b)("pointer-events-none w-max", V, I), C[20] = I, C[21] = V, C[22] = v) : v = C[22];
                let Q = F.viewportHorizontalBounds.right - F.viewportHorizontalBounds.left - 16,
                    $ = F.rect.top - 8,
                    Y = `translateX(clamp(${W}px, ${-100*H}%, calc(${K}px - 100%))) translateY(-100%)`;
                return C[23] !== q || C[24] !== Q || C[25] !== $ || C[26] !== Y ? (b = {
                    left: q,
                    maxWidth: Q,
                    top: $,
                    transform: Y
                }, C[23] = q, C[24] = Q, C[25] = $, C[26] = Y, C[27] = b) : b = C[27], C[28] !== j || C[29] !== G || C[30] !== F || C[31] !== R ? (y = null == F.portalTarget && 1 !== R ? (0, a.jsx)("div", {
                    style: {
                        zoom: R
                    },
                    children: j(F, G)
                }) : j(F, G), C[28] = j, C[29] = G, C[30] = F, C[31] = R, C[32] = y) : y = C[32], C[33] !== b || C[34] !== y || C[35] !== v ? (x = (0, a.jsx)("div", {
                    ref: L,
                    className: v,
                    style: b,
                    children: y
                }), C[33] = b, C[34] = y, C[35] = v, C[36] = x) : x = C[36], C[37] !== x || C[38] !== U ? (w = (0, a.jsx)(l.a, {
                    container: U,
                    children: x
                }), C[37] = x, C[38] = U, C[39] = w) : w = C[39], w
            }
        })
    }),
    JEFL: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("zd8w"),
            o = n("Wf1j"),
            i = n("oyxz"),
            l = n("iqo5"),
            c = n("Sm6l"),
            d = n("jqmc"),
            u = n("UxN3"),
            h = n("GTDc"),
            p = n("mN6P"),
            g = n("elIT");
        n.d(t, {}, {
            a: function(e) {
                let t, n, m, f, v, b, y = (0, r.c)(56),
                    {
                        conversationTerminology: x,
                        onAddSelectedText: w,
                        onStartFileAnnotation: C,
                        onDismissFileAnnotation: _,
                        onCommentSelectedText: S,
                        onEditModeChange: j,
                        onEditSelectedText: I,
                        onMoreDetails: T,
                        onOpenSideChat: E,
                        resume: P,
                        selectedText: A
                    } = e,
                    M = void 0 === x ? "task" : x,
                    k = (0, o.a)(),
                    [R, N] = (0, s.useState)(P?.mode === "edit" ? P.instruction : ""),
                    [O, L] = (0, s.useState)(P?.mode ?? "actions"),
                    [z, F] = (0, s.useState)(null);
                if (null != z) {
                    let e, t, n;
                    return y[0] !== _ ? (e = () => _?.(!1), t = () => _?.(!0), y[0] = _, y[1] = e, y[2] = t) : (e = y[1], t = y[2]), y[3] !== z.rect || y[4] !== z.submit || y[5] !== e || y[6] !== t ? (n = (0, a.jsx)(l.a, {
                        entryRect: z.rect,
                        onCancel: e,
                        onEscape: t,
                        onSubmit: z.submit
                    }), y[3] = z.rect, y[4] = z.submit, y[5] = e, y[6] = t, y[7] = n) : n = y[7], n
                }
                if ("pending" === O) return null;
                if ("edit" === O && null != I) {
                    let e, t, n, r, s, o, i, l, d, p;
                    return y[8] !== j ? (e = e => {
                        e.stopPropagation(), "Escape" === e.key && (e.preventDefault(), j?.(!1), L("actions-focused"))
                    }, y[8] = j, y[9] = e) : e = y[9], y[10] !== R || y[11] !== j || y[12] !== I ? (t = e => {
                        e.preventDefault(), 0 !== R.trim().length && (L("pending"), I(R).then(e => {
                            "retry" === e && (j?.(!1), L("actions-focused"))
                        }))
                    }, y[10] = R, y[11] = j, y[12] = I, y[13] = t) : t = y[13], y[14] !== k ? (n = k.formatMessage({
                        id: "selectedTextOverlay.editInput",
                        defaultMessage: "Edit instruction"
                    }), y[14] = k, y[15] = n) : n = y[15], y[16] !== k ? (r = k.formatMessage({
                        id: "selectedTextOverlay.editPlaceholder",
                        defaultMessage: "Describe the edit…"
                    }), y[16] = k, y[17] = r) : r = y[17], y[18] === Symbol.for("react.memo_cache_sentinel") ? (s = e => {
                        N(e.target.value)
                    }, y[18] = s) : s = y[18], y[19] !== R || y[20] !== n || y[21] !== r ? (o = (0, a.jsx)("input", {
                        "aria-label": n,
                        autoComplete: "off",
                        autoFocus: !0,
                        className: "min-w-0 flex-1 bg-transparent text-sm text-default outline-none placeholder:text-codex-description",
                        placeholder: r,
                        required: !0,
                        value: R,
                        onChange: s
                    }), y[19] = R, y[20] = n, y[21] = r, y[22] = o) : o = y[22], y[23] !== k ? (i = k.formatMessage({
                        id: "selectedTextOverlay.editSubmit",
                        defaultMessage: "Submit edit instruction"
                    }), y[23] = k, y[24] = i) : i = y[24], y[25] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, a.jsx)(u.a, {
                        "aria-hidden": !0,
                        asset16: g.a,
                        legacyIcon: h.a,
                        legacyClassName: "icon-2xs"
                    }), y[25] = l) : l = y[25], y[26] !== i ? (d = (0, a.jsx)(c.a, {
                        "aria-label": i,
                        color: "primary",
                        size: "composerSm",
                        type: "submit",
                        uniform: !0,
                        children: l
                    }), y[26] = i, y[27] = d) : d = y[27], y[28] !== d || y[29] !== e || y[30] !== t || y[31] !== o ? (p = (0, a.jsxs)("form", {
                        className: "pointer-events-auto flex w-[27rem] max-w-full items-center gap-1.5 rounded-full border border-default bg-surface p-1 ps-3.5 font-sans shadow-lg",
                        onKeyDown: e,
                        onSubmit: t,
                        children: [o, d]
                    }), y[28] = d, y[29] = e, y[30] = t, y[31] = o, y[32] = p) : p = y[32], p
                }
                return y[33] !== M || y[34] !== w || y[35] !== C || y[36] !== A ? (t = null != w || null != C ? (0, a.jsx)(d.b, {
                    onClick: e => {
                        null != C ? F({
                            rect: (e.currentTarget.parentElement ?? e.currentTarget).getBoundingClientRect(),
                            submit: C()
                        }) : (window.getSelection()?.removeAllRanges(), w?.(A))
                    },
                    children: "chat" === M ? (0, a.jsx)(i.a, {
                        id: "selectedTextOverlay.addToChat",
                        defaultMessage: "Ask ChatGPT"
                    }) : (0, a.jsx)(i.a, {
                        id: "selectedTextOverlay.addToCodex",
                        defaultMessage: "Add to chat"
                    })
                }) : null, y[33] = M, y[34] = w, y[35] = C, y[36] = A, y[37] = t) : t = y[37], y[38] !== T || y[39] !== A ? (n = null != T ? (0, a.jsx)(d.b, {
                    onClick: () => {
                        window.getSelection()?.removeAllRanges(), T(A)
                    },
                    children: (0, a.jsx)(i.a, {
                        id: "selectedTextOverlay.moreDetails",
                        defaultMessage: "More details"
                    })
                }) : null, y[38] = T, y[39] = A, y[40] = n) : n = y[40], y[41] !== E || y[42] !== A ? (m = null != E ? (0, a.jsx)(d.b, {
                    onClick: e => {
                        window.getSelection()?.removeAllRanges(), E(A, (0, p.b)(e))
                    },
                    children: (0, a.jsx)(i.a, {
                        id: "selectedTextOverlay.askInSideChat",
                        defaultMessage: "Ask in side chat"
                    })
                }) : null, y[41] = E, y[42] = A, y[43] = m) : m = y[43], y[44] !== S ? (f = null != S ? (0, a.jsx)(d.b, {
                    onClick: () => {
                        window.getSelection()?.removeAllRanges(), S()
                    },
                    children: (0, a.jsx)(i.a, {
                        id: "selectedTextOverlay.comment",
                        defaultMessage: "Comment"
                    })
                }) : null, y[44] = S, y[45] = f) : f = y[45], y[46] !== O || y[47] !== j || y[48] !== I ? (v = null != I ? (0, a.jsx)(d.b, {
                    autoFocus: "actions-focused" === O,
                    onClick: () => {
                        j?.(!0), L("edit")
                    },
                    children: (0, a.jsx)(i.a, {
                        id: "selectedTextOverlay.edit",
                        defaultMessage: "Edit"
                    })
                }) : null, y[46] = O, y[47] = j, y[48] = I, y[49] = v) : v = y[49], y[50] !== t || y[51] !== n || y[52] !== m || y[53] !== f || y[54] !== v ? (b = (0, a.jsxs)(d.a, {
                    children: [t, n, m, f, v]
                }), y[50] = t, y[51] = n, y[52] = m, y[53] = f, y[54] = v, y[55] = b) : b = y[55], b
            }
        })
    }),
    vNLk: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("hwkA"),
            o = n("oyxz"),
            i = n("bf6R"),
            l = n("MRlq");
        n.d(t, {}, {
            a: function(e) {
                let t, n, c, d, u, h, p, g, m, f = (0, r.c)(31),
                    {
                        restored: v,
                        restoring: b,
                        deleting: y,
                        onDelete: x,
                        onUnarchive: w,
                        onDone: C
                    } = e,
                    _ = void 0 !== y && y;
                f[0] !== b ? (t = b ? (0, a.jsx)(o.a, {
                    id: "localConversation.archived.restoringDescription",
                    defaultMessage: "Restoring this chat and its workspace…"
                }) : null, f[0] = b, f[1] = t) : t = f[1], f[2] !== v || f[3] !== b ? (n = !b && v ? (0, a.jsx)(o.a, {
                    id: "localConversation.archived.restoredDescription",
                    defaultMessage: "This chat has been restored"
                }) : null, f[2] = v, f[3] = b, f[4] = n) : n = f[4], f[5] !== v || f[6] !== b ? (c = b || v ? null : (0, a.jsx)(o.a, {
                    id: "localConversation.archived.previewDescription",
                    defaultMessage: "This chat is archived. To continue, unarchive it first"
                }), f[5] = v, f[6] = b, f[7] = c) : c = f[7], f[8] !== t || f[9] !== n || f[10] !== c ? (d = (0, a.jsxs)("span", {
                    className: "text-sm text-secondary select-none",
                    children: [t, n, c]
                }), f[8] = t, f[9] = n, f[10] = c, f[11] = d) : d = f[11], f[12] !== _ || f[13] !== x || f[14] !== v || f[15] !== b ? (u = v || null == x ? null : (0, a.jsx)(s.a, {
                    color: "danger",
                    variant: "solid",
                    disabled: b,
                    loading: _,
                    size: "lg",
                    onClick: x,
                    children: (0, a.jsx)(o.a, {
                        ...l.a.delete
                    })
                }), f[12] = _, f[13] = x, f[14] = v, f[15] = b, f[16] = u) : u = f[16];
                let S = v ? C : w;
                return f[17] !== v || f[18] !== b ? (h = v && !b ? (0, a.jsx)(o.a, {
                    id: "localConversation.archived.previewDone",
                    defaultMessage: "Done"
                }) : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(i.f, {}), (0, a.jsx)(o.a, {
                        ...l.a.unarchive
                    })]
                }), f[17] = v, f[18] = b, f[19] = h) : h = f[19], f[20] !== _ || f[21] !== b || f[22] !== S || f[23] !== h ? (p = (0, a.jsx)(s.a, {
                    color: "primary",
                    variant: "solid",
                    disabled: _,
                    loading: b,
                    size: "lg",
                    onClick: S,
                    children: h
                }), f[20] = _, f[21] = b, f[22] = S, f[23] = h, f[24] = p) : p = f[24], f[25] !== u || f[26] !== p ? (g = (0, a.jsxs)("div", {
                    className: "pointer-events-auto flex items-center gap-2",
                    children: [u, p]
                }), f[25] = u, f[26] = p, f[27] = g) : g = f[27], f[28] !== g || f[29] !== d ? (m = (0, a.jsxs)("div", {
                    className: "flex flex-col items-center gap-4 py-4",
                    children: [d, g]
                }), f[28] = g, f[29] = d, f[30] = m) : m = f[30], m
            }
        })
    }),
    sqqv: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("slpy"),
            o = n("Q840"),
            i = n("Wf1j"),
            l = n("oyxz"),
            c = n("Sm6l"),
            d = n("bf6R"),
            u = n("mphG"),
            h = n("ABl9"),
            p = n("L2MT"),
            g = n("Zt82");
        n.d(t, {}, {
            a: function(e) {
                let t, n, m, f, v, b, y, x, w, C, _, S, j = (0, r.c)(27);
                j[0] !== e ? ({
                    title: f,
                    project: n,
                    onActivate: t,
                    ...m
                } = e, j[0] = e, j[1] = t, j[2] = n, j[3] = m, j[4] = f) : (t = j[1], n = j[2], m = j[3], f = j[4]);
                let I = (0, i.a)(),
                    T = (0, o.z)(p.a),
                    E = n?.name;
                j[5] !== I || j[6] !== E ? (v = (0, g.a)(I, E), j[5] = I, j[6] = E, j[7] = v) : v = j[7], j[8] !== t || j[9] !== m ? (b = e => {
                    m.onClick?.(e), t?.()
                }, y = e => {
                    m.onKeyDown?.(e), e.defaultPrevented && !e.repeat && ("Enter" === e.key || " " === e.key) && t?.()
                }, j[8] = t, j[9] = m, j[10] = b, j[11] = y) : (b = j[10], y = j[11]);
                let P = T ? "full" : void 0;
                return j[12] !== n ? (x = null == n ? null : (0, a.jsx)(s.a, {
                    content: n.name,
                    children: (0, a.jsx)("span", {
                        "aria-hidden": "true",
                        className: "flex shrink-0 items-center",
                        children: n.icon
                    })
                }), j[12] = n, j[13] = x) : x = j[13], j[14] !== f ? (w = "string" == typeof f ? (0, h.d)(f) : f ?? (0, a.jsx)(l.a, {
                    id: "threadWorkspace.chatTitlebar.fallbackTitle",
                    defaultMessage: "Chat"
                }), j[14] = f, j[15] = w) : w = j[15], j[16] !== w ? (C = (0, a.jsx)(u.a, {
                    className: "min-w-0 truncate",
                    children: w
                }), j[16] = w, j[17] = C) : C = j[17], j[18] === Symbol.for("react.memo_cache_sentinel") ? (_ = (0, a.jsx)("span", {
                    className: "grid size-3.5 shrink-0 place-items-center",
                    children: (0, a.jsx)(d.Zb, {})
                }), j[18] = _) : _ = j[18], j[19] !== m || j[20] !== v || j[21] !== b || j[22] !== y || j[23] !== P || j[24] !== x || j[25] !== C ? (S = (0, a.jsxs)(c.a, {
                    "aria-description": v,
                    ...m,
                    onClick: b,
                    onKeyDown: y,
                    className: "max-w-full min-w-0 select-none",
                    color: "ghostActive",
                    radius: P,
                    size: "conversationTitle",
                    children: [x, C, _]
                }), j[19] = m, j[20] = v, j[21] = b, j[22] = y, j[23] = P, j[24] = x, j[25] = C, j[26] = S) : S = j[26], S
            }
        })
    }),
    enMl: (function(e, t, n) {
        var a = n("QosV"),
            r = n("Q840"),
            s = n("zd8w"),
            o = n("tSEg"),
            i = n("giVD");
        n.d(t, {}, {
            a: function(e) {
                let t, n, l, c, d = (0, a.c)(9),
                    {
                        icon: u,
                        isVisible: h,
                        title: p
                    } = e,
                    g = void 0 === u ? null : u,
                    m = void 0 === h || h,
                    f = (0, r.y)(o.a);
                return d[0] !== g || d[1] !== m || d[2] !== f || d[3] !== p ? (t = () => {
                    f.set(i.c, g), f.set(i.e, p), f.set(i.g, m)
                }, n = [g, m, f, p], d[0] = g, d[1] = m, d[2] = f, d[3] = p, d[4] = t, d[5] = n) : (t = d[4], n = d[5]), (0, s.useLayoutEffect)(t, n), d[6] !== f ? (l = () => () => {
                    f.set(i.c, null), f.set(i.e, null), f.set(i.g, !0)
                }, c = [f], d[6] = f, d[7] = l, d[8] = c) : (l = d[7], c = d[8]), (0, s.useLayoutEffect)(l, c), null
            }
        })
    }),
    dDDU: (function(e, t, n) {
        var a = n("Qgfj"),
            r = n("Kyn2"),
            s = n("nnol"),
            o = n("QcW8"),
            i = n("ZU27"),
            l = n("bf6R"),
            c = n("GaA7"),
            d = n("Vhua"),
            u = n("NkWL");
        n.d(t, {}, {
            a: function(e) {
                let t = e.get(o.ab);
                return e.get(o.Z) || t?.isVisible !== !0 || "split" !== t.mode && !e.get(u.c) ? [] : function(e, t) {
                    let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.l,
                        h = e.get(d.i),
                        p = [];
                    return "chat" === t || t.isWorkspaceHome || null == t.tabType.windowTransfer || null == c.a.detachedWindows || p.push({
                        id: "unified-workspace-move-new-window",
                        enabled: !h && !(0, s.c)(e, t.tabId) && t.tabType.windowTransfer.canTransfer(e, t.props),
                        icon: l.Pg,
                        message: (0, a.e)({
                            id: "threadWorkspace.contextMenu.moveToNewWindow",
                            defaultMessage: "Move to new window"
                        }),
                        onSelect: () => {
                            (0, r.a)(e, Promise.resolve().then(n.bind(n, "K3jS")).then(n => {
                                let {
                                    moveTabToNewWindow: a
                                } = n;
                                return a(e, o, t, null)
                            }))
                        }
                    }), "chat" === t && e.get(u.c) && p.push({
                        id: "close-tab",
                        icon: l.wj,
                        message: (0, a.e)({
                            id: "codex.tabs.contextMenu.close",
                            defaultMessage: "Close"
                        }),
                        onSelect: () => (0, u.a)(e)
                    }), p
                }(e, "chat")
            }
        })
    }),
    hjXH: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "minus-sm-light-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20"
            },
            href: "#codex-icon-minus-sm-light-20",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                composite: {
                    x: 0,
                    y: 0,
                    overflows: !1
                }
            }
        }
    }),
    h24K: (function(e, t, n) {
        var a = n("gPp5");
        class r {
            constructor() {
                this.componentControls = new Set
            }
            subscribe(e) {
                return this.componentControls.add(e), () => this.componentControls.delete(e)
            }
            start(e, t) {
                this.componentControls.forEach(n => {
                    n.start(e.nativeEvent || e, t)
                })
            }
            cancel() {
                this.componentControls.forEach(e => {
                    e.cancel()
                })
            }
            stop() {
                this.componentControls.forEach(e => {
                    e.stop()
                })
            }
        }
        let s = () => new r;
        n.d(t, {}, {
            a: function() {
                return (0, a.a)(s)
            }
        })
    })
};