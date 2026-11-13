export const __rspack_esm_ids = [365909];
export const __webpack_modules__ = {
    UNoV: (function(e, t) {
        t.a = {
            Title: "Title-FbVjGN",
            title: "Title-FbVjGN",
            Progress: "Progress-dSoGxD",
            progress: "Progress-dSoGxD"
        }
    }),
    ylLY: (function(e, t, n) {
        let a = (0, n("zd8w").createContext)(null);
        n.d(t, {}, {
            a: a
        })
    }),
    bn59: (function(e, t, n) {
        n.d(t, {
            a: () => G,
            ChatSeatAccessScreen: () => L
        });
        var a = n("ABep"),
            r = n("QosV"),
            o = n("BolX"),
            s = n("zd8w"),
            i = n("oyxz"),
            l = n("jqIZ"),
            c = n("StMt"),
            d = n("OFP1"),
            u = n("kphc"),
            h = n("Sm6l"),
            p = n("DVOM"),
            m = n("OWtl"),
            g = n("mBJV"),
            f = n("Wf1j"),
            v = n("ASxG"),
            y = n("fDv2"),
            b = n("rLEB"),
            x = n("Ietk"),
            w = n("twmu"),
            C = n("EOo5"),
            _ = n("Kwur"),
            j = n("udGC"),
            S = n("aTcy"),
            I = n("JNtf"),
            T = n("mUDD"),
            E = n("Ot7V"),
            P = n("SGsN"),
            A = n("DAA7"),
            M = n("yGJW"),
            k = n("GDNt");

        function R(e) {
            let t, n, l, c, d, u, p, v, y, k, R, B, L, F, G, z, D, H, W, U, q, K, V = (0, r.c)(70),
                {
                    account: Q,
                    accountId: $,
                    userId: Y,
                    onClose: X,
                    onSwitchToWork: J
                } = e,
                Z = (0, o.y)(m.a),
                ee = (0, f.a)(),
                {
                    email: et
                } = (0, C.a)(),
                [en, ea] = (0, s.useState)(),
                er = (0, s.useRef)(!0);
            V[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => (er.current = !0, () => {
                er.current = !1
            }), n = [], V[0] = t, V[1] = n) : (t = V[0], n = V[1]), (0, s.useEffect)(t, n);
            let eo = "account-owner" === Q.account.account_user_role,
                es = "account-admin" === Q.account.account_user_role,
                ei = !0 === Q.entitlement.has_active_subscription,
                el = (eo || es) && ei,
                ec = eo || el;
            V[2] !== el || V[3] !== eo ? (l = "CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_REQUEST_CHANGE", el ? l = "CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_UPDATE_DIRECTLY" : eo && (l = "CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_GO_TO_WORKSPACE_AND_UPDATE"), V[2] = el, V[3] = eo, V[4] = l) : l = V[4], V[5] !== Q.account.account_user_role || V[6] !== l || V[7] !== ei || V[8] !== Z ? (c = (e, t) => {
                (0, M.a)(Z, g.ud, {
                    actionType: e,
                    ctaType: void 0 !== t && t ? l : void 0,
                    userRole: Q.account.account_user_role ?? void 0,
                    hasPaidSubscription: ei
                })
            }, V[5] = Q.account.account_user_role, V[6] = l, V[7] = ei, V[8] = Z, V[9] = c) : c = V[9];
            let ed = c;
            V[10] !== X ? (d = () => {
                X(), (0, E.f)({
                    href: new URL("/codex/cloud", S.h).toString(),
                    initiator: "open_in_browser_bridge"
                })
            }, V[10] = X, V[11] = d) : d = V[11];
            let eu = d;
            V[12] !== Q.account.subscription_seat_pools_enabled || V[13] !== $ || V[14] !== eu || V[15] !== el || V[16] !== et || V[17] !== ee || V[18] !== eo || V[19] !== ed || V[20] !== X || V[21] !== J || V[22] !== en || V[23] !== Z || V[24] !== Y ? (u = async () => {
                if ("requesting" !== en) {
                    if (ed("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_PRIMARY_CTA_CLICKED", !0), eo && !el) {
                        let e = new URL("/admin/members", S.h);
                        e.searchParams.set("account_id", $), et && e.searchParams.set("search", et);
                        let t = e.toString(),
                            n = (0, A.c)(Z, t, $),
                            a = null == n ? null : await n;
                        X(), (0, E.f)({
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
                            (0, j.e)(Z), await (0, x.g)("accounts-check"), await Promise.all([Z.query.invalidate(w.b, $), Z.queryClient.invalidateQueries({
                                queryKey: ["accounts", "check"]
                            })]), er.current && X()
                        } else {
                            if ((0, b.c)(Z, $), await _.Request.safePost("/accounts/{account_id}/invites/request", {
                                    parameters: {
                                        path: {
                                            account_id: $
                                        }
                                    }
                                }), !er.current) return;
                            J ? (X(), J()) : eu(), Z.get(P.f).success(ee.formatMessage({
                                id: "UsageBasedWorkspaceAccessModal.accessRequestSubmittedToast",
                                defaultMessage: "Access request submitted"
                            }))
                        }
                    } catch (e) {
                        er.current && ea(O(e) ?? "error")
                    }
                }
            }, V[12] = Q.account.subscription_seat_pools_enabled, V[13] = $, V[14] = eu, V[15] = el, V[16] = et, V[17] = ee, V[18] = eo, V[19] = ed, V[20] = X, V[21] = J, V[22] = en, V[23] = Z, V[24] = Y, V[25] = u) : u = V[25];
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
            let em = v;
            if (ec) {
                let e;
                V[28] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(i.a, {
                    id: "UsageBasedWorkspaceAccessModal.chatWork.ownerMessage",
                    defaultMessage: "Your current seat is Work-only. Update your seat type in Workspace settings to start using ChatGPT."
                }), V[28] = e) : e = V[28], em = e
            } else if (es) {
                let e;
                V[29] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(i.a, {
                    id: "UsageBasedWorkspaceAccessModal.chatWork.adminMessage",
                    defaultMessage: "You are assigned Work access only. Ask your workspace owner to buy ChatGPT seats, then update your seat type in Workspace settings."
                }), V[29] = e) : e = V[29], em = e
            }
            V[30] !== ed || V[31] !== X ? (y = e => {
                e || (ed("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_CLOSED"), X())
            }, V[30] = ed, V[31] = X, V[32] = y) : y = V[32], V[33] !== eh ? (k = e => {
                e.preventDefault(), eh()
            }, V[33] = eh, V[34] = k) : k = V[34], V[35] === Symbol.for("react.memo_cache_sentinel") ? (R = (0, a.jsx)(I.e, {
                className: "heading-lg font-semibold",
                children: ep
            }), V[35] = R) : R = V[35], V[36] !== em ? (B = (0, a.jsxs)("div", {
                className: "flex w-full max-w-md flex-col gap-4",
                children: [R, (0, a.jsx)(I.d, {
                    className: "text-lg leading-6 text-secondary",
                    children: em
                })]
            }), V[36] = em, V[37] = B) : B = V[37];
            let eg = "requesting" === en,
                ef = "requesting" === en;
            return V[38] !== ec ? (L = ec ? (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.updateSeatButton",
                defaultMessage: "Update seat"
            }) : (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.requestAccessButton",
                defaultMessage: "Request access"
            }), V[38] = ec, V[39] = L) : L = V[39], V[40] !== eg || V[41] !== ef || V[42] !== L ? (F = (0, a.jsx)(h.a, {
                autoFocus: !0,
                className: "w-full",
                size: "auth",
                type: "submit",
                loading: eg,
                disabled: ef,
                children: L
            }), V[40] = eg, V[41] = ef, V[42] = L, V[43] = F) : F = V[43], V[44] !== eu || V[45] !== ed || V[46] !== X || V[47] !== J ? (G = () => {
                J ? (X(), J()) : (ed("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_BACK_TO_CODEX_CLICKED"), eu())
            }, V[44] = eu, V[45] = ed, V[46] = X, V[47] = J, V[48] = G) : G = V[48], V[49] !== J ? (z = J ? (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.chatWork.switchToWorkButton",
                defaultMessage: "Switch to Work"
            }) : (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.backToCodexButton",
                defaultMessage: "Back to Codex"
            }), V[49] = J, V[50] = z) : z = V[50], V[51] !== G || V[52] !== z ? (D = (0, a.jsx)(h.a, {
                className: "w-full",
                color: "outlineGhost",
                size: "auth",
                onClick: G,
                children: z
            }), V[51] = G, V[52] = z, V[53] = D) : D = V[53], V[54] !== F || V[55] !== D ? (H = (0, a.jsxs)("div", {
                className: "flex w-full max-w-xs flex-col gap-3",
                children: [F, D]
            }), V[54] = F, V[55] = D, V[56] = H) : H = V[56], V[57] !== ee || V[58] !== en ? (W = null != en && "requesting" !== en ? (0, a.jsx)("p", {
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
            }) : null, V[57] = ee, V[58] = en, V[59] = W) : W = V[59], V[60] !== B || V[61] !== H || V[62] !== W ? (U = (0, a.jsxs)("div", {
                className: "flex flex-col items-center gap-8 p-10 text-center",
                children: [B, H, W]
            }), V[60] = B, V[61] = H, V[62] = W, V[63] = U) : U = V[63], V[64] !== U || V[65] !== k ? (q = (0, a.jsx)(T.b, {
                as: "form",
                className: "select-none",
                size: "viewport",
                variant: "chatgpt",
                onSubmit: k,
                children: U
            }), V[64] = U, V[65] = k, V[66] = q) : q = V[66], V[67] !== q || V[68] !== y ? (K = (0, a.jsx)(I.a, {
                open: !0,
                size: "wide",
                variant: "chatgpt",
                onOpenChange: y,
                children: q
            }), V[67] = q, V[68] = y, V[69] = K) : K = V[69], K
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
                            retry_at: y.datetime()
                        })
                    })
                }).safeParse(JSON.parse(e.message));
                return t.success ? t.data.detail.retry : void 0
            } catch {
                return
            }
        }
        var B = n("pBDs");

        function L(e) {
            let t, n, s = (0, r.c)(9),
                {
                    modeToggle: i,
                    onSwitchToWork: c
                } = e,
                h = (0, o.y)(m.a),
                p = (0, o.z)(B.a),
                g = (0, o.z)(d.v),
                f = (0, l._)();
            if ("restricted" !== p.status) return null;
            let v = `${p.accountId}:${p.userId}`;
            return s[0] !== f || s[1] !== c || s[2] !== h || s[3] !== g.status ? (t = "allowed" === g.status ? c ?? (() => {
                (0, u.m)(h, "work"), f("/")
            }) : void 0, s[0] = f, s[1] = c, s[2] = h, s[3] = g.status, s[4] = t) : t = s[4], s[5] !== i || s[6] !== v || s[7] !== t ? (n = (0, a.jsx)(F, {
                modeToggle: i,
                onSwitchToWork: t
            }, v), s[5] = i, s[6] = v, s[7] = t, s[8] = n) : n = s[8], n
        }

        function F(e) {
            let t, n, l, c, d, u = (0, r.c)(13),
                {
                    modeToggle: m,
                    onSwitchToWork: g
                } = e,
                f = (0, o.z)(B.a),
                [v, y] = (0, s.useState)(!1);
            return "restricted" !== f.status ? null : (u[0] !== m ? (t = null == m ? null : (0, a.jsx)(p.c, {
                children: m
            }), u[0] = m, u[1] = t) : t = u[1], u[2] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)("h1", {
                className: "heading-xl font-normal text-default",
                children: (0, a.jsx)(i.a, {
                    id: "UsageBasedWorkspaceAccessModal.chatWork.title",
                    defaultMessage: "You don’t have access to Chat on this plan"
                })
            }), u[2] = n) : n = u[2], u[3] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, a.jsx)("main", {
                className: "flex h-full min-h-0 flex-1 items-center justify-center px-panel",
                children: (0, a.jsxs)("div", {
                    className: "flex w-full max-w-3xl flex-col items-center gap-8 text-center select-none",
                    children: [n, (0, a.jsx)(h.a, {
                        onClick: () => y(!1),
                        children: (0, a.jsx)(i.a, {
                            id: "chatSeatAccess.reviewAccess",
                            defaultMessage: "Review access options"
                        })
                    })]
                })
            }), u[3] = l) : l = u[3], u[4] !== v || u[5] !== g || u[6] !== f.account || u[7] !== f.accountId || u[8] !== f.userId ? (c = v ? null : (0, a.jsx)(R, {
                account: f.account,
                accountId: f.accountId,
                userId: f.userId,
                onClose: () => y(!0),
                onSwitchToWork: g
            }), u[4] = v, u[5] = g, u[6] = f.account, u[7] = f.accountId, u[8] = f.userId, u[9] = c) : c = u[9], u[10] !== t || u[11] !== c ? (d = (0, a.jsxs)(a.Fragment, {
                children: [t, l, c]
            }), u[10] = t, u[11] = c, u[12] = d) : d = u[12], d)
        }

        function G(e) {
            let t, n, s = (0, r.c)(4),
                {
                    children: i,
                    enabled: l
                } = e;
            s[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                name: "chatgpt.seat-access"
            }, s[0] = t) : t = s[0];
            let d = (0, o.x)(c.a, t);
            return l ? d.isLoading ? null : (s[1] !== d.isCapable || s[2] !== i ? (n = d.isCapable ? (0, a.jsx)(L, {}) : i, s[1] = d.isCapable, s[2] = i, s[3] = n) : n = s[3], n) : i
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
                        frame: o,
                        target: s,
                        owner: i,
                        transport: l,
                        onStatus: c
                    } = e,
                    d = new AbortController,
                    u = "",
                    h = () => {
                        d.abort(), o.srcdoc = "", o.removeAttribute("src"), n = n ?? t?.dispose(), t = void 0, window.removeEventListener(a.BROWSER_AUTH_CHANGED_EVENT, p), window.removeEventListener(a.BROWSER_AUTH_CONTEXT_CHANGED_EVENT, p), o.removeEventListener("load", m)
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
                    m = () => {
                        d.signal.aborted || null == t || o.hasAttribute("srcdoc") || c("ready")
                    };
                o.srcdoc = "", window.addEventListener(a.BROWSER_AUTH_CHANGED_EVENT, p), window.addEventListener(a.BROWSER_AUTH_CONTEXT_CHANGED_EVENT, p), o.addEventListener("load", m);
                let g = (0, a.getBrowserChatGptAuthSnapshot)();
                if (null == g || r() !== i) return h(), c("error"), async () => {};
                c("loading"), u = g.accessToken;
                let f = (async () => {
                    try {
                        let e = await l.open({
                            target: s,
                            accessToken: u,
                            signal: d.signal
                        });
                        if (d.signal.aborted || r() !== i) {
                            n = e.dispose(), d.signal.aborted || (h(), c("error"));
                            return
                        }
                        if (t = e, "https:" !== e.url.protocol || e.url.username || e.url.password || e.url.origin === window.location.origin || e.url.origin !== s.publicUrl.origin) throw Error("Portal preview requires an isolated origin");
                        o.src = e.url.href, o.removeAttribute("srcdoc"), p()
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
            o = n("BolX"),
            s = n("aFoA"),
            i = n("Bbed"),
            l = n("tSEg"),
            c = n("zd8w"),
            d = n("IDNd"),
            u = n("Ot7V"),
            h = n("QcW8"),
            p = n("ZU27"),
            m = n("EpL9"),
            g = n("M8lA"),
            f = n("bf6R"),
            v = n("svjy"),
            y = n("rd65"),
            b = n("v0xU"),
            x = n("m625");
        let w = (0, i.a)(async () => (await n.e(969762).then(n.bind(n, "KodB"))).PortalPreview),
            C = (0, m.j)("portal-preview", w, {
                ownsSingleTabHeader: () => !0,
                dropDestinations: ["right"],
                isAvailable: () => !0 === (0, g.getClientBootstrap)().portalPreviewEnabled,
                open: _,
                canUndoClose: () => !1,
                showInNewTabLauncher: !1
            });

        function _(e, t, n) {
            if (null == n || !C.isAvailable(e) || e.get(l.j) || !e.get(h.h)) return !1;
            let r = (0, g.getClientBootstrap)().stagingPortalPreviewDomain,
                o = (0, x.a)(t, r),
                s = (0, b.b)();
            return null != o && null != s && ((0, p.h)(e, C, {
                id: `portal-preview:${o.publicUrl.origin}`,
                icon: (0, a.jsx)(f.Vd, {}),
                props: {
                    url: o.publicUrl.href,
                    owner: s,
                    transport: n,
                    stagingPortalDomain: r
                },
                revealAndFocus: !0,
                title: e.get(v.a).formatMessage({
                    id: "sites.portals.tabTitle",
                    defaultMessage: "Local site preview"
                })
            }), (0, y.b)(e))
        }
        var j = n("lkCH");
        let S = {
            async open(e) {
                let {
                    target: t,
                    accessToken: n,
                    signal: a
                } = e, r = new URL("/_portals/web-session", t.publicUrl.origin), o = crypto.randomUUID(), s = `portal-preview:${t.publicUrl.origin}`, i = !1, l = (0, j.a)(), c = (0, j.a)(), d = Promise.resolve(), u = () => (i = !0, c.resolve(void 0), g), h = () => {
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
                        "X-Portals-Session-Id": o,
                        ...null == t ? {} : {
                            Authorization: t
                        }
                    }
                }), m = async e => {
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
                }, g = navigator.locks.request(s, {
                    ifAvailable: !0
                }, async e => {
                    if (null == e) throw Error("Preview already open");
                    a.addEventListener("abort", h, {
                        once: !0
                    });
                    try {
                        await m(n), l.resolve({
                            url: new URL(t.publicUrl.href),
                            refresh: e => {
                                let t = d.then(() => m(e));
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
                    transport: s
                } = e,
                i = (0, o.y)(l.a),
                h = (0, c.useContext)(d.b);
            return a[0] !== i || a[1] !== s || a[2] !== h ? (t = () => {
                let e = void 0 === s ? S : s;
                if (null != e && h) return (0, u.h)(t => {
                    let {
                        href: n,
                        conversationId: a
                    } = t;
                    return (null == a || a === (0, l.d)(i.value, {
                        includeChatGpt: !0
                    })) && _(i, n, e)
                })
            }, n = [i, s, h], a[0] = i, a[1] = s, a[2] = h, a[3] = t, a[4] = n) : (t = a[3], n = a[4]), (0, c.useEffect)(t, n), null
        }
        var T = n("gbrq"),
            E = n("rxj0"),
            P = n("uk1V"),
            A = n("PIpC"),
            M = n("UejO");

        function k() {
            let e, t, a, i, d = (0, r.c)(6),
                u = (0, o.y)(l.a);
            return d[0] !== u ? (e = () => {
                let e = null;
                return u.watch(t => {
                    let a = t.get(A.c),
                        r = t.get(h.h),
                        o = t.get(M.b),
                        i = t.get(s.a, o?.hostId == null ? o?.conversationId ?? null : null),
                        l = t.get(T.h),
                        c = t.get(p.l.tabs$),
                        d = "chatgpt-thread" === t.value.routeKind && t.get(E.e, t.value.conversationId);
                    if (null == a || !r || d || e === a || (e = a, (0, M.a)(o, t.value, i, t.value.clientThreadId) || l || c.length > 0)) return;
                    let u = (0, A.a)(a);
                    if (!u?.isOpen) return;
                    let m = !1;
                    return Promise.resolve().then(n.bind(n, "SQbA")).then(e => {
                        let {
                            appgenProjectQuery$: n
                        } = e;
                        return m ? null : t.query.fetch(n, u.projectId)
                    }).then(e => {
                        let n = (0, A.a)(a);
                        m || null == e || !n?.isOpen || n.projectId !== u.projectId || "active" !== e.status || null == e.current_live_url || "chatgpt-thread" === t.value.routeKind && t.get(E.e, t.value.conversationId) || (0, P.a)(t, {
                            type: "appgen-app",
                            projectId: e.id,
                            title: e.title,
                            url: e.current_live_url
                        })
                    }, R), () => {
                        m = !0
                    }
                })
            }, t = [u], d[0] = u, d[1] = e, d[2] = t) : (e = d[1], t = d[2]), (0, c.useEffect)(e, t), d[3] !== u ? (a = () => {
                let e = u.get(T.i),
                    t = null;
                return u.watch(n => {
                    let a = n.get(T.i),
                        r = n.get(p.l.activeTab$),
                        o = n.get(A.c);
                    (a !== e || null == t && null != o) && null != o && r?.tabId.startsWith("site-preview:") && (0, A.b)(o, r.tabId.slice(13), a), e = a, t = o
                })
            }, i = [u], d[3] = u, d[4] = a, d[5] = i) : (a = d[4], i = d[5]), (0, c.useEffect)(a, i), null
        }

        function R() {}
        let N = (0, i.a)(async () => (await n.e(402037).then(n.bind(n, "U1Pf"))).OpenPendingSitePreview);

        function O() {
            let e, t, n, i, c, d = (0, r.c)(13),
                u = (0, o.y)(l.a),
                h = (0, o.z)(M.b),
                p = (0, o.x)(s.a, h?.hostId == null ? h?.conversationId ?? null : null);
            if ("home" !== u.value.routeKind && "chatgpt-thread" !== u.value.routeKind && "local-thread" !== u.value.routeKind) return null;
            d[0] !== h || d[1] !== p || d[2] !== u ? (e = h?.url != null && (0, M.a)(h, u.value, p, u.value.clientThreadId), d[0] = h, d[1] = p, d[2] = u, d[3] = e) : e = d[3];
            let m = e;
            return d[4] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(I, {}), d[4] = t) : t = d[4], d[5] !== u ? (n = "home" !== u.value.routeKind ? (0, a.jsx)(k, {}) : null, d[5] = u, d[6] = n) : n = d[6], d[7] !== m || d[8] !== h ? (i = m ? (0, a.jsx)(N, {
                pending: h
            }) : null, d[7] = m, d[8] = h, d[9] = i) : i = d[9], d[10] !== n || d[11] !== i ? (c = (0, a.jsxs)(a.Fragment, {
                children: [t, n, i]
            }), d[10] = n, d[11] = i, d[12] = c) : c = d[12], c
        }
    }),
    Pyg2: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            o = n("BolX"),
            s = n("rjva"),
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
                    m = (0, o.y)(i.a),
                    g = (0, o.z)("home" === m.value.routeKind && l.a),
                    f = g ? "floating" : p,
                    v = !g && t.reserveContent,
                    y = !!g || t.showHeader;
                return u[4] !== h || u[5] !== t || u[6] !== f || u[7] !== v || u[8] !== y ? (d = (0, a.jsx)(s.a, {
                    ...t,
                    composerOnly: h,
                    placement: f,
                    reserveContent: v,
                    showHeader: y
                }), u[4] = h, u[5] = t, u[6] = f, u[7] = v, u[8] = y, u[9] = d) : d = u[9], d
            }
        })
    }),
    AZW7: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            o = n("zd8w"),
            s = n("kjQz"),
            i = n("dJBt");
        n.d(t, {}, {
            a: function(e) {
                let t, n, l, c, d, u, h = (0, r.c)(11),
                    {
                        name: p,
                        ready: m,
                        failed: g
                    } = e,
                    f = void 0 !== g && g,
                    v = (0, o.useRef)(!1),
                    y = (0, o.useRef)(null);
                h[0] !== p ? (t = () => ({
                    name: p,
                    key: crypto.randomUUID(),
                    startedAtMs: performance.timeOrigin + performance.now()
                }), h[0] = p, h[1] = t) : t = h[1];
                let [b] = (0, o.useState)(t);
                return h[2] !== b ? (n = () => (v.current = !0, y.current = y.current ?? s.a.start(b.name, {}, b), y.current.mark("route_entered"), () => {
                    v.current = !1, queueMicrotask(() => {
                        v.current || y.current?.abort("navigation_away")
                    })
                }), l = [b], h[2] = b, h[3] = n, h[4] = l) : (n = h[3], l = h[4]), (0, o.useEffect)(n, l), h[5] !== f || h[6] !== m ? (c = () => {
                    !m && f && y.current?.fail("load_failed")
                }, d = [m, f], h[5] = f, h[6] = m, h[7] = c, h[8] = d) : (c = h[7], d = h[8]), (0, o.useEffect)(c, d), h[9] !== m ? (u = m ? (0, a.jsx)(i.a, {
                    requireVisibleAtPaint: !0,
                    onPaint: () => {
                        y.current?.mark("content_visible"), y.current?.end()
                    }
                }) : null, h[9] = m, h[10] = u) : u = h[10], u
            }
        })
    }),
    FC5L: (function(e, t, n) {
        var a = n("SZCv"),
            r = n.n(a),
            o = n("BolX"),
            s = n("tSEg"),
            i = n("wrxv");
        n.d(t, {}, {
            a: function(e) {
                let t = (0, o.j)(s.a, (t, n) => {
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
                return (0, o.d)(s.a, (n, a) => {
                    if (null == n) return i.a;
                    let r = [],
                        o = !1;
                    for (let s of e.conversationIds(a.scope, n)) {
                        let n = e.status(a.scope, s);
                        if (n.pending) {
                            o = !0;
                            continue
                        }
                        if (!n.unread || !n.completed) continue;
                        let i = e.preview(a.scope, s);
                        null != i && r.push({
                            id: n.completionId ?? s,
                            title: e.title(a.scope, s),
                            preview: i,
                            ...a.get(t, s)
                        })
                    }
                    return r.length > 0 ? {
                        type: "ready",
                        value: r
                    } : o ? i.b : i.a
                }, {
                    isEqual: r()
                })
            }
        })
    }),
    lZ4W: (function(e, t, n) {
        var a = n("BolX"),
            r = n("OWtl"),
            o = n("dQRk"),
            s = n("PsNT"),
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
            if (l?.response.visibility.status !== "allowed" || !(0, s.b)(l.response.content) || !c(l.response.content)) return !1;
            let d = n(o.t, r.conversationId),
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
            o = n("BolX"),
            s = n("Ro2M"),
            i = n("OWtl"),
            l = n("OMIV"),
            c = n("dQRk"),
            d = n("QkVh");
        let u = (0, o.d)(i.a, (e, t) => {
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
                return 0 === r.length ? [] : (n(s.h, n(s.b)), r.flatMap(e => {
                    let {
                        automationId: t,
                        messageId: a
                    } = e, r = n(s.e, t).data?.automation;
                    if (null == r) return [];
                    let o = /^file-inline-(libfile[_-][^~]+)(?:~.*)?$/.exec(r.plan_file_id ?? "")?.[1];
                    return null == o ? [] : [{
                        automationId: t,
                        messageId: a,
                        libraryFileId: o,
                        query: n(d.a, o)
                    }]
                }))
            }, {
                isEqual: r()
            }),
            h = (0, o.d)(i.a, (e, t) => {
                let {
                    get: n
                } = t, a = new Map;
                for (let {
                        automationId: t,
                        messageId: r,
                        libraryFileId: o,
                        query: s
                    }
                    of n(u, e)) {
                    if (a.has(o)) continue;
                    let e = s.data;
                    e?.mime_type === "text/markdown" && "owned" === e.access_kind && a.set(o, {
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
            p = (0, o.d)(i.a, (e, t) => {
                let {
                    get: n
                } = t, a = n(h, e), r = n(c.q, e), o = r?.filter(e => "list" !== e.source && a.some(t => t.automationId === e.automationId)), s = o?.at(-1)?.messageId;
                if (null == s) return null;
                let i = new Set(o?.filter(e => e.messageId === s).map(e => e.automationId));
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
            o = n("zd8w"),
            s = n("VnEZ");
        n.d(t, {}, {
            a: function(e) {
                let t, n = (0, r.c)(3),
                    {
                        children: i,
                        binding: l
                    } = e,
                    [c] = (0, o.useState)(s.b),
                    d = l ?? c;
                return n[0] !== i || n[1] !== d ? (t = (0, a.jsx)(s.a, {
                    value: d,
                    children: i
                }), n[0] = i, n[1] = d, n[2] = t) : t = n[2], t
            }
        })
    }),
    S0ko: (function(e, t, n) {
        n.d(t, {
            BusinessAgentConversationHeader: () => L,
            BusinessAgentHomeHero: () => F
        });
        var a = n("ABep"),
            r = n("QosV"),
            o = n("BolX"),
            s = n("nlNF"),
            i = n("OWtl"),
            l = n("OOaz"),
            c = n("dQRk"),
            d = n("nUDt"),
            u = n("grx7"),
            h = n("zd8w"),
            p = n("oyxz"),
            m = n("L6H2"),
            g = n("MM0V"),
            f = n("Sm6l"),
            v = n("JNtf"),
            y = n("mUDD"),
            b = n("ZtSy"),
            x = n("HOLv"),
            w = n("mEbU"),
            C = n("RU3e"),
            _ = n("UIU6"),
            j = n("Bbed"),
            S = n("T1PX");
        let I = (0, j.a)(async () => {
            let [{
                SvgLottie: e
            }, {
                strFromU8: t,
                unzipSync: r
            }, {
                z: o
            }, s] = await Promise.all([Promise.all([n.e(747352), n.e(766175)]).then(n.bind(n, "lARO")), Promise.resolve().then(n.bind(n, "yCWm")), Promise.all([n.e(190782), n.e(58670)]).then(n.bind(n, "PkUi")), fetch("https://cdn.openai.com/chatgpt/clients/bazaar/business-agent-disclosure/2026-09-23/business-disclosure-animation-1754caf3cef014e7.lottie", {
                credentials: "omit",
                referrerPolicy: "no-referrer",
                redirect: "error",
                signal: AbortSignal.timeout(5e3)
            }).then(e => e.ok ? e.arrayBuffer() : null).catch(() => null)]);
            if (null == s) return function(e) {
                return (0, a.jsx)(P, {})
            };
            let i = "animations/sponsored-agents.json",
                l = r(new Uint8Array(s), {
                    filter: e => {
                        let {
                            name: t
                        } = e;
                        return t === i
                    }
                })[i];
            if (null == l) throw Error("Business Agent disclosure animation is missing");
            let c = o.looseObject({
                layers: o.array(o.looseObject({
                    nm: o.string().optional(),
                    refId: o.string().optional(),
                    masksProperties: o.array(o.looseObject({
                        nm: o.string().optional()
                    })).optional()
                }))
            }).parse(JSON.parse(t(l)));
            return function(t) {
                let {
                    onError: n
                } = t, [r, o] = (0, h.useState)(!1), [s] = (0, h.useState)(() => {
                    let e = structuredClone(c);
                    for (let t of e.layers) "🖼️ Image (replace img. layer)" === t.nm && "art_0" === t.refId && (t.masksProperties = t.masksProperties?.filter(e => "Sheet top corners" !== e.nm));
                    return e
                });
                return (0, a.jsx)("div", {
                    className: r ? "size-full" : "invisible size-full",
                    children: (0, a.jsx)(e, {
                        className: "size-full",
                        animationData: s,
                        autoplay: !0,
                        loop: !0,
                        onDataFailed: n,
                        onDOMLoaded: () => o(!0)
                    })
                })
            }
        }, {
            errorFallback: (0, a.jsx)(P, {})
        });

        function T(e) {
            let t, n = (0, r.c)(2),
                o = (0, S.a)();
            return n[0] !== o ? (t = (0, a.jsx)("div", {
                "aria-hidden": !0,
                className: "pointer-events-none relative aspect-2/1 w-full shrink-0 overflow-hidden",
                children: o ? (0, a.jsx)(P, {}) : (0, a.jsx)(E, {})
            }), n[0] = o, n[1] = t) : t = n[1], t
        }

        function E(e) {
            let t, n, s, i = (0, r.c)(7),
                l = (0, h.useRef)(null),
                c = (0, w.a)(l),
                d = (0, o.z)(C.b),
                [u, p] = (0, h.useState)(!1);
            if (u) {
                let e;
                return i[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(P, {}), i[0] = e) : e = i[0], e
            }
            return i[1] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(P, {}), i[1] = t) : t = i[1], i[2] !== c || i[3] !== d ? (n = c && !0 === d ? (0, a.jsx)(I, {
                onError: () => p(!0)
            }) : null, i[2] = c, i[3] = d, i[4] = n) : n = i[4], i[5] !== n ? (s = (0, a.jsx)(_.a, {
                name: "BusinessAgentDisclosureHero",
                fallback: t,
                children: (0, a.jsx)("div", {
                    ref: l,
                    className: "absolute inset-0",
                    children: n
                })
            }), i[5] = n, i[6] = s) : s = i[6], s
        }

        function P(e) {
            let t, n = (0, r.c)(1);
            return n[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)("img", {
                className: "absolute inset-0 size-full object-cover",
                alt: "",
                draggable: !1,
                referrerPolicy: "no-referrer",
                src: "https://cdn.openai.com/chatgpt/clients/bazaar/business-agent-disclosure/2026-09-23/business-disclosure-static-ade5a622504d70d9.png"
            }), n[0] = t) : t = n[0], t
        }
        var A = {
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
            M = {
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

        function k(e) {
            let t, n, o, s, i, l = (0, r.c)(11),
                {
                    state: c
                } = e,
                d = "ready" === c.status ? c.context : c,
                u = d.businessName ?? null,
                h = d.logoUrl ?? null;
            return l[0] !== u || l[1] !== h ? (t = (0, a.jsx)(m.a, {
                alt: "",
                name: u,
                size: "md",
                src: h
            }), l[0] = u, l[1] = h, l[2] = t) : t = l[2], l[3] !== d.businessName ? (n = (0, a.jsx)("span", {
                className: "truncate text-sm font-semibold",
                children: (0, a.jsx)(O, {
                    businessName: d.businessName
                })
            }), l[3] = d.businessName, l[4] = n) : n = l[4], l[5] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, a.jsx)("span", {
                className: "truncate text-xs font-normal text-secondary",
                children: (0, a.jsx)(p.a, {
                    id: "chatgpt.ads.business_agent.thread_header.subtitle",
                    defaultMessage: "Business chat"
                })
            }), l[5] = o) : o = l[5], l[6] !== n ? (s = (0, a.jsxs)("div", {
                className: "flex min-w-0 flex-col text-start",
                children: [n, o]
            }), l[6] = n, l[7] = s) : s = l[7], l[8] !== t || l[9] !== s ? (i = (0, a.jsxs)("div", {
                className: "flex min-w-0 items-center gap-2 select-none",
                children: [t, s]
            }), l[8] = t, l[9] = s, l[10] = i) : i = l[10], i
        }

        function R(e) {
            let t, n = (0, r.c)(14),
                {
                    state: o,
                    onStarterPromptSelect: s
                } = e,
                i = "ready" === o.status ? o.context : o;
            if (n[0] !== i.businessName || n[1] !== i.logoUrl || n[2] !== i.showConversationStarters || n[3] !== s || n[4] !== o.context || n[5] !== o.status) {
                let e, r, l, c = "ready" === o.status && i.showConversationStarters ? o.context.conversationStarters?.slice(0, 4) : void 0,
                    d = i.businessName ?? null,
                    u = i.logoUrl ?? null;
                n[7] !== d || n[8] !== u ? (e = (0, a.jsx)(m.a, {
                    alt: "",
                    name: d,
                    size: "lg",
                    src: u
                }), n[7] = d, n[8] = u, n[9] = e) : e = n[9], n[10] !== i.businessName ? (r = (0, a.jsx)("h1", {
                    className: "heading-xl font-normal text-default select-none",
                    children: (0, a.jsx)(O, {
                        businessName: i.businessName
                    })
                }), n[10] = i.businessName, n[11] = r) : r = n[11], n[12] !== o.status ? (l = "ready" !== o.status ? (0, a.jsx)(g.a, {
                    ariaLive: "polite",
                    role: "failed" === o.status ? "alert" : "status",
                    type: "failed" === o.status ? "error" : "normal",
                    content: "failed" === o.status ? (0, a.jsx)(p.a, {
                        id: "chatgptConversations.businessAgent.unavailable",
                        defaultMessage: "This Business Agent is unavailable. Please return to the ad and try again"
                    }) : (0, a.jsx)(p.a, {
                        id: "chatgptConversations.businessAgent.loading",
                        defaultMessage: "Opening Business Agent…"
                    })
                }) : null, n[12] = o.status, n[13] = l) : l = n[13], t = (0, a.jsxs)("div", {
                    className: "mx-auto flex w-[min(100%,var(--thread-content-max-width))] min-w-0 flex-col items-center gap-3 px-panel text-center",
                    children: [e, r, l, null != c && (c.length > 1 || 1 === c.length && "ready" === o.status && !0 === o.context.disablePrefill) ? (0, a.jsx)("div", {
                        className: "mt-3 flex flex-wrap justify-center gap-2 select-none",
                        children: c.map(e => (0, a.jsx)(f.a, {
                            color: "secondary",
                            size: "medium",
                            disabled: null == s,
                            onClick: () => s?.(e),
                            children: e
                        }, e))
                    }) : null]
                }), n[0] = i.businessName, n[1] = i.logoUrl, n[2] = i.showConversationStarters, n[3] = s, n[4] = o.context, n[5] = o.status, n[6] = t
            } else t = n[6];
            return t
        }

        function N(e) {
            let t, n, o, s, i, l, c, d, u, m, g, w, C, _, j, S, I, E = (0, r.c)(29),
                {
                    context: P,
                    onPresented: k,
                    onContinue: R,
                    onDismiss: N
                } = e,
                [O, B] = (0, h.useState)(!0 === P.showDisclosureModal);
            E[0] !== P.privacyPolicyUrl ? (t = function(e) {
                if (null == e) return null;
                try {
                    let t = new URL(e);
                    return ("https:" === t.protocol || "http:" === t.protocol) && t.hostname ? t.href : null
                } catch {
                    return null
                }
            }(P.privacyPolicyUrl), E[0] = P.privacyPolicyUrl, E[1] = t) : t = E[1];
            let L = t;
            return E[2] !== N ? (n = e => {
                B(e), e || N?.()
            }, E[2] = N, E[3] = n) : n = E[3], E[4] !== k ? (o = {
                "data-theme": "light",
                onOpenAutoFocus: k
            }, E[4] = k, E[5] = o) : o = E[5], E[6] !== R ? (s = e => {
                e.preventDefault(), B(!1), R?.()
            }, E[6] = R, E[7] = s) : s = E[7], E[8] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(T, {}), E[8] = i) : i = E[8], E[9] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, a.jsx)(v.e, {
                className: "heading-lg text-center leading-7 font-semibold",
                children: (0, a.jsx)(p.a, {
                    id: "chatgptConversations.businessAgent.disclosureTitle",
                    defaultMessage: "About chatting with businesses"
                })
            }), E[9] = l) : l = E[9], E[10] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)(x.a, {
                className: "shrink-0",
                asset: A
            }), E[10] = c) : c = E[10], E[11] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, a.jsx)("h3", {
                className: "text-base leading-relaxed font-semibold text-default",
                children: (0, a.jsx)(p.a, {
                    id: "chatgptConversations.businessAgent.disclosureQuestionsTitle",
                    defaultMessage: "Ask questions and compare options"
                })
            }), E[11] = d) : d = E[11], E[12] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, a.jsxs)("div", {
                className: "flex items-start gap-3",
                children: [c, (0, a.jsxs)("div", {
                    className: "flex min-w-0 flex-col gap-0.5",
                    children: [d, (0, a.jsx)("p", {
                        className: "text-base leading-snug tracking-tight text-secondary",
                        children: (0, a.jsx)(p.a, {
                            id: "chatgptConversations.businessAgent.disclosureQuestionsBody",
                            defaultMessage: "Learn what the business offers and ask detailed follow-ups as you decide."
                        })
                    })]
                })]
            }), E[12] = u) : u = E[12], E[13] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, a.jsx)(x.a, {
                className: "shrink-0",
                asset: M
            }), E[13] = m) : m = E[13], E[14] === Symbol.for("react.memo_cache_sentinel") ? (g = (0, a.jsx)("h3", {
                className: "text-base leading-relaxed font-semibold text-default",
                children: (0, a.jsx)(p.a, {
                    id: "chatgptConversations.businessAgent.disclosureUsageTrendsTitle",
                    defaultMessage: "Your chats remain private"
                })
            }), E[14] = g) : g = E[14], E[15] === Symbol.for("react.memo_cache_sentinel") ? (w = (0, a.jsxs)("div", {
                className: "flex flex-col gap-4",
                children: [l, (0, a.jsx)(v.d, {
                    asChild: !0,
                    children: (0, a.jsxs)("div", {
                        className: "flex flex-col gap-4",
                        children: [u, (0, a.jsxs)("div", {
                            className: "flex items-start gap-3",
                            children: [m, (0, a.jsxs)("div", {
                                className: "flex min-w-0 flex-col gap-0.5",
                                children: [g, (0, a.jsx)("p", {
                                    className: "text-base leading-snug tracking-tight text-secondary",
                                    children: (0, a.jsx)(p.a, {
                                        id: "chatgptConversations.businessAgent.disclosureUsageTrendsBody",
                                        defaultMessage: "Businesses can’t see your chats or your personal info — just overall usage trends to help improve their AI agent."
                                    })
                                })]
                            })]
                        })]
                    })
                })]
            }), E[15] = w) : w = E[15], E[16] !== L ? (C = null == L ? null : (0, a.jsx)(b.a, {
                href: L,
                initiator: "external_link",
                openTarget: "external-browser",
                children: (0, a.jsx)(p.a, {
                    id: "chatgptConversations.businessAgent.privacyPolicy",
                    defaultMessage: "Privacy policy"
                })
            }), E[16] = L, E[17] = C) : C = E[17], E[18] === Symbol.for("react.memo_cache_sentinel") ? (_ = (0, a.jsx)("div", {
                className: "flex justify-center",
                children: (0, a.jsx)(f.a, {
                    color: "primary",
                    size: "dialogAction",
                    type: "submit",
                    children: (0, a.jsx)(p.a, {
                        id: "chatgptConversations.businessAgent.disclosureStartChat",
                        defaultMessage: "Start chatting"
                    })
                })
            }), E[18] = _) : _ = E[18], E[19] !== C ? (j = (0, a.jsxs)("div", {
                className: "flex flex-col gap-4 pb-10 select-none",
                children: [i, (0, a.jsxs)("div", {
                    className: "flex flex-col gap-6 px-8",
                    children: [w, C, _]
                })]
            }), E[19] = C, E[20] = j) : j = E[20], E[21] !== j || E[22] !== s ? (S = (0, a.jsx)(y.b, {
                as: "form",
                size: "viewport",
                variant: "chatgpt",
                onSubmit: s,
                children: j
            }), E[21] = j, E[22] = s, E[23] = S) : S = E[23], E[24] !== O || E[25] !== S || E[26] !== n || E[27] !== o ? (I = (0, a.jsx)(v.a, {
                open: O,
                onOpenChange: n,
                size: "beacon",
                variant: "promotional",
                contentProps: o,
                children: S
            }), E[24] = O, E[25] = S, E[26] = n, E[27] = o, E[28] = I) : I = E[28], I
        }

        function O(e) {
            let t, n = (0, r.c)(2),
                {
                    businessName: o
                } = e;
            return n[0] !== o ? (t = o?.trim() ? (0, a.jsx)(a.Fragment, {
                children: o
            }) : (0, a.jsx)(p.a, {
                id: "chatgpt.ads.business_agent.disclosure.fallback_name",
                defaultMessage: "Business Agent"
            }), n[0] = o, n[1] = t) : t = n[1], t
        }
        var B = n("zHQF");

        function L(e) {
            let t, n = (0, r.c)(3),
                {
                    conversationId: s,
                    fallback: i
                } = e,
                l = (0, o.x)(c.u, s);
            return n[0] !== i || n[1] !== l ? (t = null == l ? i : (0, a.jsx)(k, {
                state: l
            }), n[0] = i, n[1] = l, n[2] = t) : t = n[2], t
        }

        function F(e) {
            let t, n, d, h = (0, r.c)(18),
                {
                    conversationId: p,
                    fallback: m,
                    onStarterPromptSelect: g
                } = e,
                f = (0, o.y)(i.a),
                v = (0, o.x)(c.u, p),
                y = (0, o.z)(v?.status === "failed" ? s.c : null),
                b = y?.state?.businessProfileChat;
            if (v?.status === "failed" && b && y?.state?.initialChatGptConversationId === p && y.state.initialChatGptBusinessAgentGizmoId === b.gizmoId && (0, l.e)(p)) {
                let e;
                if (v.accountId !== b.accountId || null != v.userId && v.userId !== b.userId) {
                    let e;
                    return h[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(B.b, {}), h[0] = e) : e = h[0], e
                }
                return h[1] !== p || h[2] !== b || h[3] !== f || h[4] !== v.businessName || h[5] !== v.logoUrl ? (e = (0, a.jsx)(B.a, {
                    retry: () => void(0, u.a)(f, p, b, {
                        businessName: v.businessName,
                        logoUrl: v.logoUrl
                    })
                }), h[1] = p, h[2] = b, h[3] = f, h[4] = v.businessName, h[5] = v.logoUrl, h[6] = e) : e = h[6], e
            }
            return null == v ? m : (h[7] !== m || h[8] !== g || h[9] !== v ? (t = "ready" !== v.status || v.context.showConversationStarters ? (0, a.jsx)(R, {
                state: v,
                onStarterPromptSelect: g
            }) : m, h[7] = m, h[8] = g, h[9] = v, h[10] = t) : t = h[10], h[11] !== p || h[12] !== v.context || h[13] !== v.status ? (n = "ready" === v.status ? (0, a.jsx)(G, {
                context: v.context,
                conversationId: p
            }, v.context.interactionId) : null, h[11] = p, h[12] = v.context, h[13] = v.status, h[14] = n) : n = h[14], h[15] !== t || h[16] !== n ? (d = (0, a.jsxs)(a.Fragment, {
                children: [t, n]
            }), h[15] = t, h[16] = n, h[17] = d) : d = h[17], d)
        }

        function G(e) {
            let t, n, s, l = (0, r.c)(11),
                {
                    context: c,
                    conversationId: u
                } = e,
                h = (0, o.y)(i.a),
                p = (0, o.z)(d.b),
                m = p?.conversationId === u && p.ready;
            return m || !0 === c.showDisclosureModal ? (l[0] !== m || l[1] !== c || l[2] !== p ? (t = m ? {
                ...c,
                showDisclosureModal: !p.presented
            } : c, l[0] = m, l[1] = c, l[2] = p, l[3] = t) : t = l[3], l[4] !== m || l[5] !== u || l[6] !== h ? (n = m ? () => (0, d.a)(h, u) : void 0, l[4] = m, l[5] = u, l[6] = h, l[7] = n) : n = l[7], l[8] !== t || l[9] !== n ? (s = (0, a.jsx)(N, {
                context: t,
                onPresented: n
            }), l[8] = t, l[9] = n, l[10] = s) : s = l[10], s) : null
        }
    }),
    YiPf: (function(e, t, n) {
        n.d(t, {
            a: () => y
        });
        var a = n("ABep"),
            r = n("QosV"),
            o = n("BolX"),
            s = n("zd8w"),
            i = n("oyxz"),
            l = n("jqIZ"),
            c = n("SGsN"),
            d = n("esXD"),
            u = n("OWtl");

        function h(e) {
            let t, n, a, i = (0, r.c)(11),
                {
                    isUnavailable: h,
                    message: p,
                    homePath: m,
                    onUnavailable: g,
                    children: f
                } = e,
                v = (0, o.y)(u.a),
                y = (0, l._)(),
                b = (0, s.useRef)(!1);
            i[0] !== m || i[1] !== p || i[2] !== y || i[3] !== g || i[4] !== v ? (t = () => {
                g?.(), v.get(c.f).info(p, {
                    id: "conversation-inaccessible",
                    duration: 5
                }), (0, d.d)("conversation_unavailable", () => y(m, {
                    replace: !0
                }))
            }, i[0] = m, i[1] = p, i[2] = y, i[3] = g, i[4] = v, i[5] = t) : t = i[5];
            let x = (0, s.useEffectEvent)(t);
            return i[6] !== h || i[7] !== x ? (n = () => {
                h && !b.current && (b.current = !0, x())
            }, i[6] = h, i[7] = x, i[8] = n) : n = i[8], i[9] !== h ? (a = [h], i[9] = h, i[10] = a) : a = i[10], (0, s.useEffect)(n, a), h ? null : f
        }
        var p = n("IxgT"),
            m = n("yGJW"),
            g = n("eShZ"),
            f = n("ZhoB");
        let v = new WeakSet;

        function y(e) {
            let t, n, s, l, c, d, v, y, x = (0, r.c)(25),
                {
                    conversationId: w,
                    error: C,
                    loadError: _,
                    canRetry: j,
                    isWorkConversation: S,
                    showChatFallback: I,
                    onInlineLoadError: T,
                    children: E
                } = e,
                P = (0, o.y)(u.a),
                A = (0, o.z)(void 0 !== I && I && !1 === S ? p.b : null);
            if (null != A) return A;
            x[0] !== w || x[1] !== S || x[2] !== P ? (t = (e, t) => {
                (0, f.e)(P.get(m.c).logProductEvent, {
                    conversationId: w,
                    error: e,
                    isWorkConversation: S,
                    canRetry: t
                })
            }, x[0] = w, x[1] = S, x[2] = P, x[3] = t) : t = x[3];
            let M = t;
            x[4] !== j || x[5] !== _ || x[6] !== M ? (n = () => M(_, j), x[4] = j, x[5] = _, x[6] = M, x[7] = n) : n = x[7], x[8] !== _ || x[9] !== T || x[10] !== n ? (s = (0, a.jsx)(b, {
                error: _,
                onInlineLoadError: T,
                onShown: n
            }), x[8] = _, x[9] = T, x[10] = n, x[11] = s) : s = x[11], x[12] !== E || x[13] !== s ? (l = (0, a.jsxs)(a.Fragment, {
                children: [s, E]
            }), x[12] = E, x[13] = s, x[14] = l) : l = x[14];
            let k = l;
            return x[15] !== C ? (c = C instanceof g.FetchError && !(0, g.e)(C) && (403 === C.status || 404 === C.status), x[15] = C, x[16] = c) : c = x[16], x[17] !== C || x[18] !== M ? (d = () => M(C, !1), x[17] = C, x[18] = M, x[19] = d) : d = x[19], x[20] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, a.jsx)(i.a, {
                id: "chatgptConversations.conversationInaccessible",
                defaultMessage: "You don’t have access to this conversation. Make sure you’re logged in to the right account, or ask the conversation owner to send you a share link."
            }), x[20] = v) : v = x[20], x[21] !== k || x[22] !== c || x[23] !== d ? (y = (0, a.jsxs)(a.Fragment, {
                children: [null, (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(h, {
                        isUnavailable: c,
                        homePath: "/",
                        onUnavailable: d,
                        message: v,
                        children: k
                    })
                })]
            }), x[21] = k, x[22] = c, x[23] = d, x[24] = y) : y = x[24], y
        }

        function b(e) {
            let t, n, a, o = (0, r.c)(8),
                {
                    error: i,
                    onShown: l,
                    onInlineLoadError: c
                } = e,
                d = (0, s.useEffectEvent)(l);
            o[0] !== c ? (t = e => c?.(e), o[0] = c, o[1] = t) : t = o[1];
            let u = (0, s.useEffectEvent)(t);
            return o[2] !== i || o[3] !== d || o[4] !== u ? (n = () => {
                if (null != i) {
                    if (u(i), (0, g.e)(i)) {
                        if (v.has(i)) return;
                        v.add(i)
                    }
                    d()
                }
            }, o[2] = i, o[3] = d, o[4] = u, o[5] = n) : n = o[5], o[6] !== i ? (a = [i], o[6] = i, o[7] = a) : a = o[7], (0, s.useEffect)(n, a), null
        }
    }),
    aLqR: (function(e, t, n) {
        var a = n("QosV"),
            r = n("BolX"),
            o = n("Wf1j"),
            s = n("EFj1"),
            i = n("SGsN"),
            l = n("TL6G"),
            c = n("OWtl"),
            d = n("eKlv"),
            u = n("OtLV"),
            h = n("XtQP");
        n.d(t, {}, {
            a: function(e) {
                let t, n, p, m, g, f, v, y = (0, a.c)(16),
                    {
                        conversationId: b
                    } = e,
                    x = (0, r.y)(c.a),
                    w = (0, o.a)();
                return y[0] !== b || y[1] !== w || y[2] !== x ? (t = () => {
                    (0, h.c)(x, b).catch(() => {
                        x.get(i.f).danger(w.formatMessage(u.a.markUnreadError), {
                            errorAnalytics: {
                                toastId: "chatgptConversations.sidebar.markUnreadError"
                            }
                        })
                    })
                }, y[0] = b, y[1] = w, y[2] = x, y[3] = t) : t = y[3], (0, s.a)("markThreadUnread", t), y[4] !== b || y[5] !== x ? (n = () => void(0, d.renameActiveChatGptConversation)(x, b), p = [b, x], y[4] = b, y[5] = x, y[6] = n, y[7] = p) : (n = y[6], p = y[7]), (0, l.d)("rename-thread", n, p), y[8] !== b || y[9] !== x ? (m = () => (0, d.d)(x, b), g = [b, x], y[8] = b, y[9] = x, y[10] = m, y[11] = g) : (m = y[10], g = y[11]), (0, l.d)("toggle-thread-pin", m, g), y[12] !== b || y[13] !== x ? (f = () => (0, d.a)(x, b), v = [b, x], y[12] = b, y[13] = x, y[14] = f, y[15] = v) : (f = y[14], v = y[15]), (0, l.d)("archive-thread", f, v), null
            }
        })
    }),
    OL3W: (function(e, t, n) {
        n.d(t, {
            a: () => ir,
            ChatGptConversationPage: () => ia
        });
        var a = n("ABep"),
            r = n("QosV"),
            o = n("FS1B"),
            s = n("T0Rc"),
            i = n("HVBu"),
            l = n.n(i),
            c = n("BolX"),
            d = n("I07G"),
            u = n("AuIy"),
            h = n("iqEK"),
            p = n("NRIv"),
            m = n("zd8w"),
            g = n("Wf1j"),
            f = n("jqIZ"),
            v = n("bn59"),
            y = n("OY84"),
            b = n("Yxds"),
            x = n("StMt"),
            w = n("E8Sp"),
            C = n("z0li"),
            _ = n("i7iU"),
            j = n("O0M0"),
            S = n("Cslg"),
            I = n("OFP1"),
            T = n("ItIk"),
            E = (n("AZW7"), n("uxPT")),
            P = n("GMTh"),
            A = n("zpMv"),
            M = n("PFzG"),
            k = n("YiPf"),
            R = n("DrWu"),
            N = n("x4uR"),
            O = n("hx97");

        function B(e) {
            return "assistant" === e.author.role && e.metadata?.open_thread_summary === !0
        }
        var L = n("MrzV"),
            F = n("YTsa"),
            G = n("TSib"),
            z = n("jEN2"),
            D = n("kphc"),
            H = n("YWcr"),
            W = n("mwa5"),
            U = n("UxN3"),
            q = n("SGsN"),
            K = n("XcNx"),
            V = n("GKsW"),
            Q = n("yWTM"),
            $ = n("SkIz"),
            Y = n("hsSf"),
            X = n("ibLK"),
            J = n("Xc94"),
            Z = n("Sgih"),
            ee = n("HwRo"),
            et = n("qwxA"),
            en = n("gOnr"),
            ea = n("KXCj"),
            er = n("e1xH"),
            eo = n("Dl20"),
            es = n("kErH"),
            ei = n("dJBt"),
            el = n("yGJW"),
            ec = n("FR8U"),
            ed = n("xqnZ"),
            eu = n("UMxD"),
            eh = n("JhDO"),
            ep = n("tSEg"),
            em = n("kl6F"),
            eg = n("kfGJ"),
            ef = n("khOd"),
            ev = n("xSOA"),
            ey = n("oyxz"),
            eb = n("MYlA"),
            ex = n("OtLV"),
            ew = n("sfmI"),
            eC = n("QmkR"),
            e_ = n("Yrvy"),
            ej = n("HOLv"),
            eS = n("nlNF"),
            eI = n("OWtl"),
            eT = n("MRlq"),
            eE = n("vNLk"),
            eP = n("PCxL"),
            eA = n("aZgH"),
            eM = n("ql7Y");

        function ek(e) {
            let t, n, o, s, i, l, d, u, h, p, v, y, b, x, w = (0, r.c)(56),
                {
                    conversationId: C,
                    kind: _
                } = e,
                j = (0, c.y)(eI.a),
                I = (0, g.a)(),
                T = (0, f.Y)(),
                E = (0, f._)(),
                P = (0, c.z)(eP.l),
                A = (0, c.z)(S.h),
                M = (0, c.z)(S.g);
            w[0] !== A || w[1] !== C || w[2] !== M || w[3] !== _ || w[4] !== P ? (t = "chatgpt" === _ && P?.kind === "chatgpt" && P.conversation.id === C && (0, ew.a)(P.conversation, A, M) ? P.conversation : null, w[0] = A, w[1] = C, w[2] = M, w[3] = _, w[4] = P, w[5] = t) : t = w[5];
            let k = t,
                [R, N] = (0, m.useState)(!1),
                {
                    mutate: O,
                    isPending: B
                } = (0, e_.a)(C);
            w[6] !== T.hash || w[7] !== T.pathname || w[8] !== T.search || w[9] !== E || w[10] !== j ? (n = () => {
                (0, eP.e)(j), E({
                    pathname: T.pathname,
                    search: T.search,
                    hash: T.hash
                }, {
                    replace: !0,
                    state: null
                })
            }, w[6] = T.hash, w[7] = T.pathname, w[8] = T.search, w[9] = E, w[10] = j, w[11] = n) : n = w[11];
            let L = n,
                F = (0, c.z)(eP.k);
            w[12] !== C || w[13] !== F ? (o = F?.find(e => (0, eA.a)(e.task) === `hosted:${C}`), w[12] = C, w[13] = F, w[14] = o) : o = w[14];
            let G = o;
            w[15] !== C || w[16] !== j ? (s = () => {
                let e = j.get(eP.l);
                return null != e && (0, eA.a)(e) === `hosted:${C}` ? (0, eP.d)(j, e) : void 0
            }, i = async () => {
                await (0, eC.V)({
                    scope: j,
                    conversationId: C
                })
            }, w[15] = C, w[16] = j, w[17] = s, w[18] = i) : (s = w[17], i = w[18]), w[19] !== C || w[20] !== L || w[21] !== _ || w[22] !== j ? (l = (e, t, n) => {
                n?.("restored");
                let r = j.get(q.f).info((0, a.jsx)(ey.a, {
                    ...eT.a.unarchiveSuccessPlain
                }), {
                    leading: (0, a.jsx)(ej.a, {
                        "aria-hidden": !1,
                        asset: eM.a
                    }),
                    primaryAction: {
                        label: (0, a.jsx)(ey.a, {
                            ...eT.a.viewNow
                        }),
                        onClick: () => {
                            r.close(), L()
                        }
                    },
                    id: `unarchive-thread-${_}:${C}`
                })
            }, w[19] = C, w[20] = L, w[21] = _, w[22] = j, w[23] = l) : l = w[23], w[24] !== I || w[25] !== j ? (d = (e, t, n) => {
                n?.(null), j.get(q.f).danger(I.formatMessage(eT.a.unarchiveError), {
                    errorAnalytics: {
                        toastId: "previewFooter.onError.unarchiveError"
                    }
                })
            }, w[24] = I, w[25] = j, w[26] = d) : d = w[26], w[27] !== s || w[28] !== i || w[29] !== l || w[30] !== d ? (u = {
                onMutate: s,
                mutationFn: i,
                onSuccess: l,
                onError: d
            }, w[27] = s, w[28] = i, w[29] = l, w[30] = d, w[31] = u) : u = w[31];
            let {
                mutate: z,
                isPending: D,
                isSuccess: H
            } = (0, ev.a)(u);
            w[32] !== O || w[33] !== E || w[34] !== j ? (h = e => {
                let t = j.get(eP.c),
                    n = j.get(eS.c),
                    a = j.get(S.f);
                O(e, {
                    onSuccess: () => {
                        if (N(!1), t !== j.get(eP.c) || n !== j.get(eS.c) || a !== j.get(S.f)) return;
                        j.set(eP.l, null);
                        let e = t?.pathname === eP.a ? t : null;
                        E(e ?? "/", {
                            replace: !0,
                            state: e?.state ?? null
                        })
                    }
                })
            }, w[32] = O, w[33] = E, w[34] = j, w[35] = h) : h = w[35];
            let W = h;
            w[36] !== k ? (p = null == k ? void 0 : () => N(!0), w[36] = k, w[37] = p) : p = w[37];
            let U = H || G?.status === "restored",
                K = D || G?.status === "restoring";
            return w[38] !== z ? (v = () => z(), w[38] = z, w[39] = v) : v = w[39], w[40] !== L || w[41] !== B || w[42] !== p || w[43] !== U || w[44] !== K || w[45] !== v ? (y = (0, a.jsx)(eE.a, {
                deleting: B,
                onDelete: p,
                restored: U,
                restoring: K,
                onUnarchive: v,
                onDone: L
            }), w[40] = L, w[41] = B, w[42] = p, w[43] = U, w[44] = K, w[45] = v, w[46] = y) : y = w[46], w[47] !== k || w[48] !== W || w[49] !== I || w[50] !== R || w[51] !== B ? (b = null != k && (0, a.jsx)(eb.a, {
                allowArtifactDeletion: !0,
                title: k.title?.trim() || I.formatMessage(ex.a.newChat),
                open: R,
                isDeleting: B,
                onOpenChange: N,
                onConfirm: W
            }), w[47] = k, w[48] = W, w[49] = I, w[50] = R, w[51] = B, w[52] = b) : b = w[52], w[53] !== y || w[54] !== b ? (x = (0, a.jsxs)(a.Fragment, {
                children: [y, b]
            }), w[53] = y, w[54] = b, w[55] = x) : x = w[55], x
        }
        var eR = n("hZax"),
            eN = n("OMIV"),
            eO = n("JCJj"),
            eB = n("KkZX"),
            eL = n("BdYu"),
            eF = n("Nyub"),
            eG = n("rvFo"),
            ez = n("jZDY"),
            eD = n("Bc5r"),
            eH = n("bIvi"),
            eW = n("Elta"),
            eU = n("eW0T"),
            eq = n("hOYb"),
            eK = n("eShZ"),
            eV = n("qqut"),
            eQ = n("CsbC"),
            e$ = n("tCyZ"),
            eY = n("S0ko"),
            eX = n("GgLN"),
            eJ = n("KdfG"),
            eZ = n("AOHi"),
            e0 = n("iRMi"),
            e1 = n("U2UX"),
            e2 = n("ZU27"),
            e3 = n("gbrq"),
            e4 = n("K33Q"),
            e5 = n("mv4d"),
            e6 = n("w7Qu"),
            e7 = n("dt5v"),
            e8 = n("bWX0"),
            e9 = n("smHt"),
            te = n("aoTb"),
            tt = n("NRR1"),
            tn = n("pqpL"),
            ta = n("uqg3"),
            tr = n("XcRr"),
            to = n("YF6h"),
            ts = n("dk3M"),
            ti = n("WFY2"),
            tl = n("vldH"),
            tc = n("ISgP"),
            td = n("t2JB"),
            tu = n("DIH2"),
            th = n("aFoA"),
            tp = n("H8lk"),
            tm = n("dQRk"),
            tg = n("rxj0"),
            tf = n("f2PP"),
            tv = n("S95W");
        let ty = (0, c.v)(eI.a, e => null);
        var tb = n("BJ43"),
            tx = n("d2rV"),
            tw = n("aLqR"),
            tC = n("VlIB"),
            t_ = n("Ow2S"),
            tj = n("WRfx");
        let tS = (0, c.v)(eI.a, e => null);
        var tI = n("zOE4");

        function tT(e) {
            let t, n = (0, r.c)(3),
                {
                    conversationId: o,
                    children: s
                } = e;
            if ("loading" === (0, c.x)(t_.t, o)) {
                let e;
                return n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(tI.LoadingPage, {
                    debugName: "ChatGptConversationPicker",
                    fillParent: !0
                }), n[0] = e) : e = n[0], e
            }
            return n[1] !== s ? (t = (0, a.jsx)(a.Fragment, {
                children: s
            }), n[1] = s, n[2] = t) : t = n[2], t
        }
        var tE = n("SZi8"),
            tP = n("lBzi"),
            tA = n("Ga6O"),
            tM = n("vknh"),
            tk = n("slpy"),
            tR = n("BOYb"),
            tN = n("Sm6l"),
            tO = n("bf6R"),
            tB = n("Bbed"),
            tL = n("O666"),
            tF = n("tNq4"),
            tG = n("Skaw"),
            tz = n("PYCG");

        function tD(e) {
            let t, n, o, s, i, l, d, u, h, p, m, f, v = (0, r.c)(54),
                {
                    conversationId: y,
                    projectId: b,
                    sharedProjectConversation: x,
                    isReady: w,
                    isRestricted: C,
                    isStreaming: _
                } = e,
                j = void 0 === b ? null : b,
                I = (0, c.y)(eI.a),
                T = (0, g.a)(),
                E = (0, c.z)(S.e),
                P = (0, c.z)(null == j ? null : tG.a),
                A = (0, c.x)(tm.j, y),
                {
                    data: M
                } = (0, c.x)(tP.chatGptConversationQueryById$, null == j ? null : A),
                k = (0, c.x)(th.a, null == j ? null : A),
                R = (0, c.x)(tm.B, k);
            v[0] !== k || v[1] !== M || v[2] !== R || v[3] !== j || v[4] !== A ? (t = null == M && null != k && null != A ? {
                id: A,
                gizmo_id: j,
                is_temporary_chat: R
            } : void 0, v[0] = k, v[1] = M, v[2] = R, v[3] = j, v[4] = A, v[5] = t) : t = v[5];
            let O = t,
                {
                    data: B
                } = (0, c.x)(N.b, j),
                L = null == j ? null : (0, tG.b)(P ?? null, x ?? M ?? O, B),
                F = (0, c.x)(tF.b, y);
            v[6] !== T ? (n = T.formatMessage(ex.a.headerShare), v[6] = T, v[7] = n) : n = v[7];
            let G = n,
                z = (0, c.x)(null == x ? tF.a : null, y),
                D = null != x || null != z,
                H = null;
            if (C || L?.type === "unavailable") {
                let e;
                v[8] !== T ? (e = T.formatMessage(ex.a.shareDisabledRestricted), v[8] = T, v[9] = e) : e = v[9], H = e
            } else if (_ && !D) {
                let e;
                v[10] !== T ? (e = T.formatMessage(ex.a.shareDisabledStreaming), v[10] = T, v[11] = e) : e = v[11], H = e
            } else if (!w || !D) {
                let e;
                v[12] !== T ? (e = T.formatMessage(ex.a.shareDisabledNotReady), v[12] = T, v[13] = e) : e = v[13], H = e
            }
            let W = null != H || F;
            v[14] !== W ? (o = {
                layer: "3087497570",
                parameter: "use_larger_icon",
                disableExposureLog: W
            }, v[14] = W, v[15] = o) : o = v[15];
            let U = (0, c.x)(tL.b, o),
                q = "loaded" === E.status && "personal" === E.structure && (null == L || "snapshot" === L.type),
                K = null != H || F;
            v[16] !== K ? (s = {
                layer: "1823366130",
                parameter: "disable_hover",
                disableExposureLog: K
            }, v[16] = K, v[17] = s) : s = v[17];
            let V = (0, c.x)(q ? tL.b : null, s),
                Q = !(0, tR.d)() && !(0, tR.b)(),
                $ = null != H || F;
            v[18] !== $ ? (i = {
                layer: "2296435893",
                parameter: "show_share_text",
                disableExposureLog: $
            }, v[18] = $, v[19] = i) : i = v[19];
            let Y = (0, c.x)(Q ? tL.b : null, i);
            v[20] !== y || v[21] !== O || v[22] !== j || v[23] !== I || v[24] !== x ? (l = () => {
                let e = null == x ? I.get(tF.c, y) : {
                    serverConversationId: x.conversation_id,
                    title: x.title,
                    currentNodeId: x.current_node ?? void 0
                };
                null != e && (0, tz.shareChatGptProjectConversation)(I, e.serverConversationId, e.title ?? "", j, e.currentNodeId, "CHATGPT_SHARE_FLOW_SOURCE_SENDER_HEADER", x ?? O)
            }, v[20] = y, v[21] = O, v[22] = j, v[23] = I, v[24] = x, v[25] = l) : l = v[25];
            let X = l,
                J = G;
            if (!V && "loaded" === E.status && (null == L || "snapshot" === L.type)) {
                let e;
                v[26] !== E.structure || v[27] !== T ? (e = T.formatMessage("workspace" === E.structure ? ex.a.shareWorkspaceTooltip : ex.a.sharePublicTooltip), v[26] = E.structure, v[27] = T, v[28] = e) : e = v[28], J = e
            }
            let Z = H ?? J,
                ee = null != H || void 0,
                et = !Y,
                en = null == H ? X : void 0;
            return v[29] !== F || v[30] !== U ? (d = !F && (U ? (0, a.jsx)(tO.M, {}) : (0, a.jsx)(tO.L, {})), v[29] = F, v[30] = U, v[31] = d) : d = v[31], v[32] !== Y ? (u = Y && (0, a.jsx)("span", {
                className: "max-sm:hidden @max-2xl/main-titlebar:hidden",
                children: (0, a.jsx)(ey.a, {
                    ...ex.a.headerShare
                })
            }), v[32] = Y, v[33] = u) : u = v[33], v[34] !== F || v[35] !== G || v[36] !== ee || v[37] !== et || v[38] !== en || v[39] !== d || v[40] !== u ? (h = (0, a.jsxs)(tN.a, {
                "aria-disabled": ee,
                "aria-label": G,
                color: "ghostActive",
                loading: F,
                className: "browser:[&_[data-loading-indicator]>svg]:size-6",
                radius: "large",
                size: "toolbar",
                uniform: et,
                onClick: en,
                children: [d, u]
            }), v[34] = F, v[35] = G, v[36] = ee, v[37] = et, v[38] = en, v[39] = d, v[40] = u, v[41] = h) : h = v[41], v[42] !== Z || v[43] !== h ? (p = (0, a.jsx)(tk.a, {
                content: Z,
                children: h
            }), v[42] = Z, v[43] = h, v[44] = p) : p = v[44], v[45] !== y || v[46] !== F || v[47] !== j || v[48] !== H || v[49] !== x ? (m = !1, v[45] = y, v[46] = F, v[47] = j, v[48] = H, v[49] = x, v[50] = m) : m = v[50], v[51] !== p || v[52] !== m ? (f = (0, a.jsxs)(a.Fragment, {
                children: [p, m]
            }), v[51] = p, v[52] = m, v[53] = f) : f = v[53], f
        }(0, tB.a)(async () => () => null);
        var tH = n("TRQ3"),
            tW = n("SZCv"),
            tU = n.n(tW),
            tq = n("XAP6"),
            tK = n("bzoy"),
            tV = n("LYS1"),
            tQ = n("aZoZ"),
            t$ = n("Gv8v"),
            tY = n("EGpF"),
            tX = n("mTPq"),
            tJ = n("Vcrm"),
            tZ = n("DF0c");
        let t0 = (0, c.d)(eI.a, (e, t) => {
            let {
                get: n
            } = t, a = n(tm.ab, e);
            if (!(0, tm.Bb)(a)) return !0;
            let r = n(tm.N, e),
                o = n(tm.C, e);
            if (null == r || null == o) return !1;
            let s = r[o]?.message;
            if (null == s || tV.a.has(s.author.role)) return !1;
            let i = n(tm.y, e),
                l = (0, tX.c)({
                    mapping: r,
                    current_node: o
                }, n(tm.S, e)),
                c = n(tm.db, e);
            return "streaming" === a && "tpp" !== i && "flora" !== i && null != n(tm.j, e) && !(0, tK.e)(n(tm.p, e)) && null != c && !n(tq.e).has(c) && null != t1(n, e).request.current && (null == l || l.info.num_variants_in_stream <= 1)
        });

        function t1(e, t) {
            let n = e(tY.a, t),
                a = e(tm.j, t);
            return null == n.request.current && null != a ? e(tY.a, a) : n
        }
        var t2 = n("xtkq"),
            t3 = n("ZhoB"),
            t4 = n("PG5R"),
            t5 = n("zrki"),
            t6 = n("iLYI"),
            t7 = n("u4MG"),
            t8 = n("wVX4"),
            t9 = n("OOaz"),
            ne = n("rUXL"),
            nt = n("pV06"),
            nn = n("MM0V");

        function na(e) {
            let t, n, o, s, i, l = (0, r.c)(11),
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
            return l[3] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, a.jsx)(ey.a, {
                id: "chatgptConversations.workOnlyConversion.action",
                defaultMessage: "Convert to Work"
            }), l[3] = o) : o = l[3], l[4] !== u || l[5] !== h || l[6] !== p ? (s = (0, a.jsx)(tN.a, {
                color: "primary",
                disabled: p,
                loading: u,
                onClick: h,
                children: o
            }), l[4] = u, l[5] = h, l[6] = p, l[7] = s) : s = l[7], l[8] !== n || l[9] !== s ? (i = (0, a.jsx)("div", {
                className: "mx-auto mb-3 w-full max-w-[var(--thread-content-max-width)]",
                children: (0, a.jsx)(nn.a, {
                    ariaLive: "polite",
                    title: t,
                    content: n,
                    customCtas: s
                })
            }), l[8] = n, l[9] = s, l[10] = i) : i = l[10], i
        }
        var nr = n("oGhM"),
            no = n("fr5e"),
            ns = n("LEgg");
        let ni = (0, tB.a)(() => n.e(766350).then(n.bind(n, "wWAQ")).then(e => e.ScheduledGoalNavigationBridge));

        function nl(e) {
            let t, n, o = (0, r.c)(6),
                {
                    conversationId: s,
                    scheduledAutomationId: i
                } = e,
                l = (0, eR.f)("3901104270");
            return o[0] !== s || o[1] !== l || o[2] !== i ? (t = l && null != i ? (0, a.jsx)(ni, {
                conversationId: s,
                automationId: i
            }) : null, o[0] = s, o[1] = l, o[2] = i, o[3] = t) : t = o[3], o[4] !== t ? (n = (0, a.jsx)(a.Fragment, {
                children: t
            }), o[4] = t, o[5] = n) : n = o[5], n
        }
        var nc = n("Bs4i"),
            nd = n("Qgfj"),
            nu = n("EFj1"),
            nh = n("rmk3"),
            np = n("sqqv"),
            nm = n("fQbA"),
            ng = n("dDDU"),
            nf = n("soaw"),
            nv = n("ZrYB"),
            ny = n("X6Vn"),
            nb = n("Kwur"),
            nx = n("eKlv"),
            nw = n("JCtZ"),
            nC = n("g2p6"),
            n_ = n("oaTv"),
            nj = n("PME0"),
            nS = n("lgcP"),
            nI = n("AcSY"),
            nT = n("w7E5"),
            nE = n("xEXG"),
            nP = n("J6LI"),
            nA = n("lUUH"),
            nM = n("ftAl");

        function nk(e) {
            let t, n, o, s = (0, r.c)(17),
                {
                    children: i,
                    conversationId: l,
                    getBaseItems: d,
                    menuTriggerRef: u,
                    navigate: h,
                    onBeforeOpen: p,
                    renderDropdown: m
                } = e,
                g = (0, c.y)(eI.a),
                {
                    data: f
                } = (0, nI.f)(),
                v = (0, nE.b)();
            return s[0] !== f || s[1] !== l || s[2] !== d || s[3] !== u || s[4] !== h || s[5] !== v || s[6] !== g ? (t = () => {
                let e = g.get(nM.a, l, {
                        enabled: !1
                    }),
                    t = (0, t7.a)(e?.gizmo_id) ? e?.gizmo_id ?? null : null,
                    n = null == t ? void 0 : g.query.getData(N.b, t);
                return d(function(e) {
                    let {
                        scope: t,
                        conversationId: n,
                        conversation: a,
                        project: r,
                        account: o,
                        projectCrudStatus: s,
                        navigate: i,
                        onCreateProjectDialogCloseAutoFocus: l
                    } = e, c = (0, t7.a)(a?.gizmo_id) ? a?.gizmo_id ?? null : null, d = t.get(nT.a), u = t.get(eC.m), {
                        data: h
                    } = d, p = h?.pages.flatMap(e => e.items).length ?? 0, m = a?.conversation_origin === "tpp" || a?.conversation_origin === "flora", g = "allowed" === s || m && h?.pages.some(e => null != e.cursor) === !0, f = t.get(eC.h, n);
                    return null == o || null == a || t.get(eC.g, n) || (0, nP.c)(a, r).sourceUnavailable || null == (0, nP.b)(t, a, f, !1) || null != c && null == r || null == h || 0 === p && !g ? [] : [...null == r ? [] : [{
                        id: "current-project-name",
                        message: nB.projectName,
                        messageValues: {
                            projectName: r.gizmo.display.name
                        },
                        enabled: !1
                    }], ...(0, nA.b)({
                        scope: t,
                        conversation: a,
                        project: r,
                        showDestinationFetchState: !1,
                        showMoveToProject: null == c || p > 1 || g,
                        projectCrudStatus: s,
                        projectListQuery: d,
                        pinnedProjectsQuery: u,
                        navigate: i,
                        onCreateProjectDialogCloseAutoFocus: l
                    })]
                }({
                    scope: g,
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
            }, s[0] = f, s[1] = l, s[2] = d, s[3] = u, s[4] = h, s[5] = v, s[6] = g, s[7] = t) : t = s[7], s[8] !== l || s[9] !== p || s[10] !== g ? (n = async () => {
                await Promise.all([(async () => {
                    let e = g.get(tP.chatGptConversationQueryById$, l, {
                        enabled: !1
                    });
                    null == e.data && e.isFetching && await g.query.getOrFetch(tP.chatGptConversationQueryById$, l).catch(nO), null == g.query.getData(tP.chatGptConversationQueryById$, l) && await g.query.getOrFetch(eC.j, [l]).catch(nN)
                })(), p?.()]);
                let e = g.get(nM.a, l, {
                    enabled: !1
                });
                (0, t7.a)(e?.gizmo_id) && e?.gizmo_id != null && await g.query.getOrFetch(N.b, e.gizmo_id).catch(nR)
            }, s[8] = l, s[9] = p, s[10] = g, s[11] = n) : n = s[11], s[12] !== i || s[13] !== m || s[14] !== t || s[15] !== n ? (o = (0, a.jsx)(nh.a, {
                preserveBrowserContextMenu: !0,
                awaitBeforeOpen: !1,
                getItems: t,
                onBeforeOpen: n,
                renderItem: nm.b,
                renderDropdown: m,
                trigger: "click",
                children: i
            }), s[12] = i, s[13] = m, s[14] = t, s[15] = n, s[16] = o) : o = s[16], o
        }

        function nR() {}

        function nN() {}

        function nO() {}
        let nB = (0, nd.f)({
            projectName: {
                id: "chatgptConversations.projectActions.projectName",
                defaultMessage: "{projectName}"
            }
        });

        function nL(e) {
            let t, o, s, i, l, d, u, h, p, v, y, b, C, _, j, I, T, E = (0, r.c)(68),
                {
                    onTitleClick: P,
                    showMenu: A,
                    triggerButton: M,
                    renderDropdown: k,
                    conversationOrigin: R,
                    conversationId: N,
                    title: O,
                    isHandoffPending: B,
                    isArchived: L,
                    isChatConversation: F,
                    onHandoff: G,
                    onOpenMessage: z,
                    projectId: D,
                    projectName: H,
                    serverConversationId: W
                } = e,
                U = (0, c.y)(ep.a),
                K = (0, c.y)(eI.a),
                V = (0, nf.a)(),
                Q = (0, eR.i)();
            E[0] !== Q ? (t = Q.checkGate("224248639"), E[0] = Q, E[1] = t) : t = E[1];
            let $ = t;
            E[2] !== Q ? (o = Q.getLayer("3017902351").get("web_file_library_enabled", !1), E[2] = Q, E[3] = o) : o = E[3];
            let Y = o,
                X = $ || Y;
            E[4] !== X ? (s = {
                enabled: X
            }, E[4] = X, E[5] = s) : s = E[5];
            let {
                data: J
            } = (0, c.z)(nC.p, s), Z = X && J?.fileLibraryEnabledForRegistrationCountry !== !1, ee = (0, g.a)(), et = (0, f._)(), [en, ea] = (0, m.useState)(null), er = (0, m.useRef)(null), eo = (0, m.useRef)(null);
            E[6] === Symbol.for("react.memo_cache_sentinel") ? (i = [], E[6] = i) : i = E[6];
            let es = (0, m.useRef)(i);
            E[7] === Symbol.for("react.memo_cache_sentinel") ? (l = {
                name: "chatgpt"
            }, E[7] = l) : l = E[7];
            let {
                isCapable: ei
            } = (0, c.x)(x.a, l), el = (0, c.x)(eC.g, W);
            E[8] === Symbol.for("react.memo_cache_sentinel") ? (d = () => ea("shortcut"), E[8] = d) : d = E[8];
            let ec = F && !el;
            E[9] !== U || E[10] !== W ? (u = () => (0, ew.a)(U.query.getData(tP.chatGptConversationQueryById$, W), U.get(S.h), U.get(S.g)), E[9] = U, E[10] = W, E[11] = u) : u = E[11], E[12] !== ec || E[13] !== u ? (h = {
                enabled: ec,
                isActive: u
            }, E[12] = ec, E[13] = u, E[14] = h) : h = E[14], (0, nu.a)("deleteChat", d, h), E[15] !== K || E[16] !== el || E[17] !== et || E[18] !== U || E[19] !== W ? (p = e => {
                !el && (0, ew.a)(U.query.getData(tP.chatGptConversationQueryById$, W), U.get(S.h), U.get(S.g)) && (ea(null), (0, nS.a)(K, W, e), et("/", {
                    replace: !0,
                    state: {
                        leavingDeletedChatGptConversation: !0
                    }
                }))
            }, E[15] = K, E[16] = el, E[17] = et, E[18] = U, E[19] = W, E[20] = p) : p = E[20];
            let ed = p;
            E[21] !== U || E[22] !== W ? (v = async () => {
                let e = [];
                es.current = e, e.push(...await async function(e, t) {
                    let a = await nb.Request.safeGet("/live/conversations/{conversation_id}/session-sharing", {
                        parameters: {
                            path: {
                                conversation_id: t
                            }
                        }
                    }).catch(() => null);
                    return a?.can_share && 0 !== a.av_sessions.length ? [{
                        id: "share-live-session",
                        icon: tO.ij,
                        message: (0, nd.e)({
                            id: "chatgptConversations.liveSessionSharing.action",
                            defaultMessage: "Share Live session"
                        }),
                        selectAfterClose: !0,
                        onSelect: () => {
                            n.e(571376).then(n.bind(n, "ATrx")).then(n => {
                                let {
                                    BidiSessionSharingDialog: r
                                } = n;
                                (0, ny.f)(e, r, {
                                    conversationId: t,
                                    sessions: a.av_sessions
                                })
                            })
                        }
                    }] : []
                }(U, W))
            }, E[21] = U, E[22] = W, E[23] = v) : v = E[23];
            let eu = v;
            E[24] !== N || E[25] !== R || E[26] !== Z || E[27] !== ee || E[28] !== el || E[29] !== L || E[30] !== B || E[31] !== V || E[32] !== et || E[33] !== G || E[34] !== z || E[35] !== D || E[36] !== H || E[37] !== U || E[38] !== W || E[39] !== Q || E[40] !== O ? (y = e => {
                let t = U.get(S.f),
                    a = U.get(S.k),
                    r = U.query.getData(tP.chatGptConversationQueryById$, W),
                    o = U.get(S.h),
                    s = U.get(S.g),
                    i = (0, ew.a)(r, o, s),
                    l = (0, nx.b)(U, W),
                    c = !el && (0, ew.a)(l, o, s),
                    d = U.get(w.b).pathname,
                    u = () => V() && d === U.get(w.b).pathname && t === U.get(S.f) && a === U.get(S.k),
                    h = (0, n_.a)(U, N, R, () => (0, nj.a)(et)),
                    p = [];
                return Q.getLayer("3732549458").get("enable_conversation_audio_summary", !1) && p.push({
                    id: "chatgpt-audio-summary",
                    message: (0, nd.e)({
                        id: "GizmoInformation.audioSummary",
                        defaultMessage: "Audio summary"
                    }),
                    icon: tO.yg,
                    selectAfterClose: !0,
                    onSelect: () => {
                        (async function() {
                            return (await n.e(600460).then(n.bind(n, "EEPj"))).openAudioSummaryDialog
                        })().then(e => {
                            u() && e(U, W)
                        }).catch(() => {
                            u() && (er.current?.focus({
                                preventScroll: !0
                            }), U.get(q.f).danger(ee.formatMessage({
                                id: "chatgpt.audioSummary.openError",
                                defaultMessage: "Couldn’t open audio summary"
                            }), {
                                errorAnalytics: {
                                    toastId: "chatgpt.audioSummary.openError"
                                }
                            }))
                        })
                    }
                }), Z && p.unshift({
                    id: "chatgpt-conversation-files",
                    message: (0, nd.e)({
                        id: "GizmoInformation.viewFiles",
                        defaultMessage: "View files in chat"
                    }),
                    icon: tO.sb,
                    onSelect: () => {
                        (async function() {
                            return (await n.e(368308).then(n.bind(n, "LFUX"))).openConversationFiles
                        })().then(e => {
                            u() && e(U, {
                                conversationId: N,
                                serverConversationId: W,
                                onOpenMessage: z
                            })
                        }).catch(() => {
                            u() && U.get(q.f).danger(ee.formatMessage({
                                id: "chatgptConversations.files.loadPanelError",
                                defaultMessage: "Couldn’t open files in chat"
                            }), {
                                errorAnalytics: {
                                    toastId: "chatgptConversations.files.loadPanelError"
                                }
                            })
                        })
                    }
                }), p.push(...(0, ng.a)(U)), (0, nw.a)(U, {
                    organizationItems: (0, nm.a)([]),
                    projectItems: void 0 === e ? [] : e,
                    sharingItems: es.current,
                    viewItems: p,
                    feedbackItems: [],
                    preferenceItems: null == h ? [] : [h],
                    surface: "header",
                    isTitleMenu: !0,
                    conversationId: W,
                    stateConversationId: N,
                    conversationOrigin: R,
                    title: O,
                    isHandoffPending: B,
                    canHandoff: null != G,
                    onHandoff: G,
                    projectId: D,
                    projectName: H,
                    onRename: (0, ew.b)(r, o, s, el) ? () => void(0, nx.renameActiveChatGptConversation)(U, N) : void 0,
                    isPinned: U.get(eC.h, W) ?? l?.is_starred === !0,
                    onTogglePin: c ? () => {
                        let e = (0, nx.b)(U, W);
                        !(null == e || U.get(eC.g, W)) && (0, ew.a)(e, U.get(S.h), U.get(S.g)) && (0, eC.U)({
                            scope: U,
                            conversation: "conversation_id" in e ? {
                                gizmo_id: e.gizmo_id,
                                id: e.conversation_id,
                                is_archived: e.is_archived,
                                is_starred: e.is_starred,
                                title: e.title
                            } : e
                        }).catch(nF)
                    } : void 0,
                    onArchive: !i || el || L ? void 0 : () => (0, nv.a)(U, W),
                    onUnarchive: i && !el && L ? () => {
                        (0, eC.V)({
                            scope: U,
                            conversationId: W
                        }).then(() => {
                            U.get(q.f).success(ee.formatMessage(eT.a.unarchiveSuccessPlain))
                        }).catch(() => {
                            U.get(q.f).danger(ee.formatMessage(ex.a.unarchiveError), {
                                errorAnalytics: {
                                    toastId: "chatgptConversationPage.onUnarchive.unarchiveError"
                                }
                            })
                        })
                    } : void 0,
                    onDelete: !i || el ? void 0 : () => ea("menu")
                })
            }, E[24] = N, E[25] = R, E[26] = Z, E[27] = ee, E[28] = el, E[29] = L, E[30] = B, E[31] = V, E[32] = et, E[33] = G, E[34] = z, E[35] = D, E[36] = H, E[37] = U, E[38] = W, E[39] = Q, E[40] = O, E[41] = y) : y = E[41];
            let eh = y;
            E[42] !== P || E[43] !== O || E[44] !== M ? (b = null == M ? (0, a.jsx)(np.a, {
                ref: er,
                onActivate: P,
                title: O
            }) : (0, a.jsx)(nc.b, {
                ref: er,
                children: M
            }), E[42] = P, E[43] = O, E[44] = M, E[45] = b) : b = E[45];
            let em = b;
            E[46] !== eh || E[47] !== em || E[48] !== et || E[49] !== ei || E[50] !== eu || E[51] !== k || E[52] !== W || E[53] !== A ? (C = A && (ei ? (0, a.jsx)(nk, {
                conversationId: W,
                getBaseItems: eh,
                menuTriggerRef: er,
                navigate: et,
                onBeforeOpen: eu,
                renderDropdown: k,
                children: em
            }) : (0, a.jsx)(nh.a, {
                preserveBrowserContextMenu: !0,
                getItems: () => eh(),
                onBeforeOpen: eu,
                renderItem: nm.b,
                renderDropdown: k,
                trigger: "click",
                children: em
            })), E[46] = eh, E[47] = em, E[48] = et, E[49] = ei, E[50] = eu, E[51] = k, E[52] = W, E[53] = A, E[54] = C) : C = E[54];
            let eg = "shortcut" === en,
                ef = null != en;
            return E[55] !== en ? (_ = () => {
                eo.current = "menu" === en ? er.current : null, ea(null)
            }, E[55] = en, E[56] = _) : _ = E[56], E[57] === Symbol.for("react.memo_cache_sentinel") ? (j = e => {
                let t = eo.current;
                if (eo.current = null, null == t) return;
                e.preventDefault();
                let n = t.ownerDocument.activeElement;
                t.isConnected && (n === t.ownerDocument.body || e.target instanceof HTMLElement && e.target.contains(n)) && t.focus({
                    preventScroll: !0
                })
            }, E[57] = j) : j = E[57], E[58] !== ed || E[59] !== el || E[60] !== eg || E[61] !== ef || E[62] !== _ || E[63] !== O ? (I = (0, a.jsx)(eb.a, {
                allowArtifactDeletion: !0,
                autoFocusConfirm: eg,
                open: ef,
                onOpenChange: _,
                onCloseAutoFocus: j,
                isDeleting: el,
                onConfirm: ed,
                title: O
            }), E[58] = ed, E[59] = el, E[60] = eg, E[61] = ef, E[62] = _, E[63] = O, E[64] = I) : I = E[64], E[65] !== C || E[66] !== I ? (T = (0, a.jsxs)(a.Fragment, {
                children: [C, I]
            }), E[65] = C, E[66] = I, E[67] = T) : T = E[67], T
        }

        function nF() {}

        function nG(e) {
            let t, n, o, s = (0, r.c)(12),
                {
                    title: i,
                    includePlugins: l,
                    lockdownConversationId: d,
                    triggerButton: u,
                    renderDropdown: h
                } = e,
                p = (0, c.y)(ep.a),
                m = (0, f._)();
            return s[0] !== l || s[1] !== d || s[2] !== m || s[3] !== p ? (t = () => {
                let e = null == d ? null : (0, n_.a)(p, d, null, () => (0, nj.a)(m)),
                    t = null == e ? [] : [e];
                return l ? (0, nm.a)(t) : t
            }, s[0] = l, s[1] = d, s[2] = m, s[3] = p, s[4] = t) : t = s[4], s[5] !== i || s[6] !== u ? (n = u ?? (0, a.jsx)(np.a, {
                title: i
            }), s[5] = i, s[6] = u, s[7] = n) : n = s[7], s[8] !== h || s[9] !== t || s[10] !== n ? (o = (0, a.jsx)(nh.a, {
                preserveBrowserContextMenu: !0,
                getItems: t,
                renderItem: nm.b,
                renderDropdown: h,
                trigger: "click",
                children: n
            }), s[8] = h, s[9] = t, s[10] = n, s[11] = o) : o = s[11], o
        }
        var nz = n("dLcZ"),
            nD = n("UNoV");

        function nH(e) {
            let t, n = (0, r.c)(2),
                {
                    children: o
                } = e;
            return n[0] !== o ? (t = (0, a.jsx)(_.a.HeaderAction, {
                actionId: "sectioned-conversation-navigation",
                align: "center",
                children: (0, a.jsx)("div", {
                    className: nD.a.Progress,
                    children: o
                })
            }), n[0] = o, n[1] = t) : t = n[1], t
        }
        var nW = n("NVRI"),
            nU = n("WLgA");

        function nq(e) {
            let t, n, o = (0, r.c)(9),
                {
                    icon: s,
                    name: i,
                    projectId: l,
                    linkToProject: c
                } = e;
            o[0] !== s || o[1] !== c || o[2] !== i || o[3] !== l ? (t = c && null != i ? (0, a.jsx)(tN.b, {
                "aria-label": i,
                color: "ghostActive",
                size: "toolbar",
                to: (0, nU.c)(l),
                uniform: !0,
                children: s
            }) : null, o[0] = s, o[1] = c, o[2] = i, o[3] = l, o[4] = t) : t = o[4];
            let d = t,
                u = d ?? s,
                h = null != d;
            return o[5] !== i || o[6] !== u || o[7] !== h ? (n = (0, a.jsx)(nW.b, {
                project: {
                    icon: u,
                    iconInteractive: h,
                    name: i
                }
            }), o[5] = i, o[6] = u, o[7] = h, o[8] = n) : n = o[8], n
        }
        var nK = n("ftSl"),
            nV = n("u9Jt"),
            nQ = n("Xoyl");

        function n$(e) {
            let t, n = (0, r.c)(7),
                {
                    hasTitleMenu: o,
                    onClick: s,
                    project: i,
                    title: l
                } = e;
            if (null == l) {
                let e;
                return n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(nQ.a, {}), n[0] = e) : e = n[0], e
            }
            if (o) {
                let e;
                return n[1] !== s || n[2] !== i || n[3] !== l ? (e = (0, a.jsx)(nV.a, {
                    triggerButton: (0, a.jsx)(np.a, {
                        onActivate: s,
                        project: i,
                        title: l
                    })
                }), n[1] = s, n[2] = i, n[3] = l, n[4] = e) : e = n[4], e
            }
            return n[5] !== l ? (t = (0, a.jsx)(nK.a, {
                className: "max-w-full",
                variant: "flush-start",
                title: l
            }), n[5] = l, n[6] = t) : t = n[6], t
        }
        var nY = n("B5Qz"),
            nX = n("E7pP"),
            nJ = n("oU3c"),
            nZ = n("B0Wx");
        let n0 = (0, c.d)(eI.a, (e, t) => {
            let {
                get: n
            } = t, a = n(nZ.b, e);
            if (null != a) return a;
            let r = n(tm.j, e);
            if (null == r) return null;
            let o = n(eC.j, [r], {
                    enabled: !1
                }).data?.[0],
                s = (0, nJ.a)(o?.title, o?.mapping);
            if (null != s) return s;
            let i = n(nX.a),
                l = null == i ? null : n(nY.e, {
                    hostId: i,
                    threadId: r
                });
            return l?.sourceKind === "chatgpt" ? (0, nJ.c)(l.displayTitle) : null
        });
        var n1 = n("X0li");
        let n2 = (0, tB.a)(n1.d),
            n3 = (0, tB.a)(async () => (await n.e(328371).then(n.bind(n, "uPMT"))).SectionHistory),
            n4 = (0, tB.a)(async () => (await n.e(270015).then(n.bind(n, "r5vN"))).SectionNavigation);
        var n5 = n("lX86"),
            n6 = n("sQ4r"),
            n7 = n("on57"),
            n8 = n("IPUh"),
            n9 = n("v7qY"),
            ae = n("wD9O"),
            at = n("jov5"),
            an = n("Ro2M"),
            aa = n("bN4H"),
            ar = n("TS05");

        function ao(e) {
            let t, n, o, s, i = (0, r.c)(12),
                {
                    conversationId: l,
                    entries: d,
                    turnListApi: u
                } = e,
                {
                    key: h,
                    search: p,
                    state: m
                } = (0, f.Y)();
            i[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                name: "automations.cloud.scheduled-tasks"
            }, i[0] = t) : t = i[0];
            let {
                isCapable: g
            } = (0, c.x)(x.a, t);
            if (i[1] !== g || i[2] !== m?.sidebarArea || i[3] !== p) {
                let e = new URLSearchParams(p);
                n = e.get("automationId"), o = m?.sidebarArea === "scheduled" || !g || !n || "finalAgentTurnStart" !== e.get("messageId"), i[1] = g, i[2] = m?.sidebarArea, i[3] = p, i[4] = n, i[5] = o
            } else n = i[4], o = i[5];
            return o ? null : (i[6] !== n || i[7] !== l || i[8] !== d || i[9] !== h || i[10] !== u ? (s = (0, a.jsx)(as, {
                automationId: n,
                conversationId: l,
                entries: d,
                turnListApi: u
            }, h), i[6] = n, i[7] = l, i[8] = d, i[9] = h, i[10] = u, i[11] = s) : s = i[11], s)
        }

        function as(e) {
            let t, n, a, o, s = (0, r.c)(25),
                {
                    automationId: i,
                    conversationId: l,
                    entries: d,
                    turnListApi: u
                } = e,
                h = (0, c.y)(ep.a),
                p = (0, f.Y)(),
                g = (0, c.z)(S.f),
                v = (0, c.x)(tm.j, l),
                {
                    data: y
                } = (0, c.x)(an.e, i),
                b = (0, c.z)(at.a),
                x = (0, m.useRef)(null),
                w = (0, m.useRef)(null);
            s[0] !== d ? (t = d.findLast(ac), s[0] = d, s[1] = t) : t = s[1];
            let C = t;
            s[2] !== g || s[3] !== i || s[4] !== b || s[5] !== C || s[6] !== y || s[7] !== p || s[8] !== h || s[9] !== u ? (n = () => {
                null == y || null == g || (b || x.current === g || (x.current = g, (0, aa.openAutomationSidePanelTab)({
                    scope: h,
                    automationId: i,
                    title: y.automation.title
                })), null != u && null != C && w.current !== g && (w.current = g, u.scrollToKey(C.turnKey, ai, {
                    align: "top"
                }).then(() => {
                    h.set(ar.a, {
                        locationKey: p.key,
                        accountId: g
                    }, !0)
                })))
            }, s[2] = g, s[3] = i, s[4] = b, s[5] = C, s[6] = y, s[7] = p, s[8] = h, s[9] = u, s[10] = n) : n = s[10];
            let _ = (0, m.useEffectEvent)(n);
            s[11] !== g || s[12] !== l || s[13] !== y?.automation.conversation_id || s[14] !== _ || s[15] !== v ? (a = () => {
                null != g && y?.automation.conversation_id === (v ?? l) && _()
            }, s[11] = g, s[12] = l, s[13] = y?.automation.conversation_id, s[14] = _, s[15] = v, s[16] = a) : a = s[16];
            let j = C?.turnKey,
                I = y?.automation.conversation_id;
            return s[17] !== g || s[18] !== b || s[19] !== l || s[20] !== v || s[21] !== j || s[22] !== I || s[23] !== u ? (o = [g, l, j, I, v, b, u], s[17] = g, s[18] = b, s[19] = l, s[20] = v, s[21] = j, s[22] = I, s[23] = u, s[24] = o) : o = s[24], (0, m.useEffect)(a, o), null
        }

        function ai(e) {
            let t = e.querySelector("[data-chatgpt-agent-turn-start]");
            if (null == t) return null;
            let n = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                acceptNode: al
            });
            n.currentNode = t;
            let a = n.nextNode();
            return a instanceof HTMLElement ? a : null
        }

        function al(e) {
            return e instanceof HTMLElement && e.getClientRects().length > 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }

        function ac(e) {
            let {
                turn: t
            } = e;
            return t.items.some(ad)
        }

        function ad(e) {
            return "user-message" !== e.type
        }
        var au = n("TDcV"),
            ah = n("Xvoy"),
            ap = n("WAdu"),
            am = n("VnEZ");
        let ag = {
            $type: "protobuf_analytics_events.v1.ChatgptConversationPrintLifecycle"
        };
        var af = n("jDEJ");
        let av = (0, c.u)(eI.a, null);

        function ay(e, t) {
            if (!e.get(el.c).isChatgptBrowserReplacement || t.repeat || ((0, af.a)() ? !t.metaKey || t.ctrlKey : !t.ctrlKey || t.metaKey) || t.altKey || t.shiftKey || "p" !== t.key.toLowerCase() || null != e.get(av)) return;
            let n = ax("CHATGPT_CONVERSATION_PRINT_ENTRY_POINT_SHORTCUT");
            e.set(av, n), aw(e, n, "CHATGPT_CONVERSATION_PRINT_STAGE_INTENT_OBSERVED")
        }
        async function ab(e, t, n, a) {
            let r = e.get(av);
            if (!e.get(el.c).isChatgptBrowserReplacement || null == r) return a();
            let o = n => {
                aw(e, r, n, t)
            };
            o("CHATGPT_CONVERSATION_PRINT_STAGE_PREPARATION_STARTED");
            try {
                let e = await a();
                return n.aborted || o("CHATGPT_CONVERSATION_PRINT_STAGE_PREPARATION_SUCCEEDED"), e
            } catch (a) {
                throw n.aborted || o("CHATGPT_CONVERSATION_PRINT_STAGE_PREPARATION_FAILED"), "CHATGPT_CONVERSATION_PRINT_PREPARATION_HISTORY" !== t || e.get(av)?.id !== r.id || e.get(av)?.printing || e.set(av, null), a
            }
        }

        function ax(e) {
            let t = performance.now();
            return {
                id: crypto.randomUUID(),
                entryPoint: e,
                startedAt: t,
                printing: !1
            }
        }

        function aw(e, t, n, a) {
            (0, el.a)(e, ag, {
                attemptId: t.id,
                stage: n,
                entryPoint: t.entryPoint,
                elapsedMs: Math.max(0, performance.now() - t.startedAt),
                preparation: a
            })
        }
        var aC = n("CpsU"),
            a_ = n.n(aC),
            aj = n("rKAs"),
            aS = n("SqqO"),
            aI = n("zHp1"),
            aT = n("taWv");

        function aE() {
            return Object.fromEntries(Array.from(document.images).flatMap(e => {
                if (!e.complete || 0 === e.naturalWidth) return [];
                let t = e.currentSrc || e.src;
                return [e.getAttribute("src"), e.src, t].flatMap(e => e ? [
                    [e, t]
                ] : [])
            }))
        }
        var aP = n("j0nn"),
            aA = n("AO3k"),
            aM = n("dPHp"),
            ak = n("X8kv"),
            aR = "printDocument-v_w5Ax";
        let aN = "https://chatgpt.com/download/?utm_source=chatgpt_web&utm_medium=print&utm_campaign=app_install";

        function aO(e) {
            let t, n, o, s, i, l, c, d, u, h, p, m, f = (0, r.c)(22),
                {
                    children: v,
                    title: y
                } = e,
                b = (0, g.a)(),
                {
                    getExperiment: x
                } = (0, eR.h)();
            if (!x("448755449").get("enabled", !1)) {
                let e, t;
                return f[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n7.b)(aR, "hidden w-full space-y-1.5 bg-surface text-default print:block"), f[0] = e) : e = f[0], f[1] !== v ? (t = (0, a.jsx)("div", {
                    className: e,
                    "data-conversation-print": "",
                    "data-theme": "light",
                    children: v
                }), f[1] = v, f[2] = t) : t = f[2], t
            }
            return f[3] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, n7.b)(aR, "formattedPrintDocument-tP74Wl", "group/conversation-print hidden w-full bg-surface text-default print:block"), f[3] = t) : t = f[3], f[4] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(aM.a, {
                className: "h-6 w-auto shrink-0"
            }), f[4] = n) : n = f[4], f[5] !== y ? (o = (0, a.jsxs)("header", {
                className: "mb-6 flex items-center justify-between gap-6",
                children: [n, (0, a.jsx)("p", {
                    className: "min-w-0 text-end text-sm wrap-anywhere text-secondary",
                    children: y
                })]
            }), f[5] = y, f[6] = o) : o = f[6], f[7] !== v ? (s = (0, a.jsx)("div", {
                className: "transcript-XHYu34",
                children: v
            }), f[7] = v, f[8] = s) : s = f[8], f[9] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, n7.b)("footer-QEzLbn", "flex items-center gap-3 rounded-2xl border border-default bg-surface-secondary p-2 text-default"), f[9] = i) : i = f[9], f[10] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, a.jsx)("div", {
                className: "flex size-10 shrink-0 items-center justify-center rounded-xl border border-default bg-surface",
                children: (0, a.jsx)(ak.a, {
                    className: "size-7",
                    "aria-hidden": "true"
                })
            }), f[10] = l) : l = f[10], f[11] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)("p", {
                className: "font-semibold",
                children: (0, a.jsx)(ey.a, {
                    id: "chatgpt.print.downloadApp.title",
                    defaultMessage: "Take your curiosity further"
                })
            }), f[11] = c) : c = f[11], f[12] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, a.jsxs)("div", {
                className: "min-w-0 flex-1 text-sm",
                children: [c, (0, a.jsx)("p", {
                    className: "mt-1 text-secondary",
                    children: (0, a.jsx)(ey.a, {
                        id: "chatgpt.print.downloadApp.description",
                        defaultMessage: "Scan to get the ChatGPT app"
                    })
                })]
            }), f[12] = d) : d = f[12], f[13] !== b ? (u = b.formatMessage({
                id: "chatgpt.print.downloadApp.qrCode",
                defaultMessage: "Download the ChatGPT app"
            }), f[13] = b, f[14] = u) : u = f[14], f[15] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, a.jsx)(ey.a, {
                id: "chatgpt.print.downloadApp.fallback",
                defaultMessage: "Get the app"
            }), f[15] = h) : h = f[15], f[16] !== u ? (p = (0, a.jsxs)("footer", {
                className: i,
                children: [l, d, (0, a.jsx)("a", {
                    className: "shrink-0",
                    href: `${aN}&utm_content=pdf_link`,
                    children: (0, a.jsx)(aA.a, {
                        value: `${aN}&utm_content=qr`,
                        size: "inline",
                        ariaLabel: u,
                        fallback: h
                    })
                })]
            }), f[16] = u, f[17] = p) : p = f[17], f[18] !== p || f[19] !== o || f[20] !== s ? (m = (0, a.jsxs)("div", {
                className: t,
                "data-conversation-print": "",
                "data-print-formatting": "",
                "data-theme": "light",
                children: [o, s, p]
            }), f[18] = p, f[19] = o, f[20] = s, f[21] = m) : m = f[21], m
        }

        function aB(e) {
            return {
                ...e,
                renderTelemetryMessages: void 0
            }
        }
        var aL = n("zn0A"),
            aF = n("jfiJ"),
            aG = n("FGJH"),
            az = n("nmN6");
        let aD = new WeakMap;

        function aH(e) {
            let t, n, o = (0, r.c)(6),
                s = (0, c.z)(au.a);
            return o[0] !== s || o[1] !== e.entries[0]?.conversationId ? (t = JSON.stringify([s, e.entries[0]?.conversationId]), o[0] = s, o[1] = e.entries[0]?.conversationId, o[2] = t) : t = o[2], o[3] !== e || o[4] !== t ? (n = (0, a.jsx)(aW, {
                ...e
            }, t), o[3] = e, o[4] = t, o[5] = n) : n = o[5], n
        }

        function aW(e) {
            let t, n, o, s, i, l, d = (0, r.c)(16),
                u = (0, c.y)(ep.a),
                h = (0, c.z)(ah.a),
                [p, g] = (0, m.useState)(!1),
                f = (0, m.useRef)(null);
            d[0] !== u ? (t = (e, t) => {
                if (ay(u, e), !e.ctrlKey && !e.metaKey || e.altKey || e.shiftKey || "p" !== e.key.toLowerCase()) return;
                if (e.repeat) return void f.current?.onKeyDown(e, t);
                let n = aD.get(e);
                if (e.defaultPrevented && null == n) return;
                (0, n9.flushSync)(() => g(!0));
                let a = n ?? f.current?.onKeyDown(e, t);
                null == a && e.defaultPrevented || Promise.resolve(a).then(() => aD.get(e)).finally(() => {
                    t.aborted || g(!1)
                })
            }, d[0] = u, d[1] = t) : t = d[1];
            let v = (0, m.useEffectEvent)(t);
            d[2] === Symbol.for("react.memo_cache_sentinel") ? (n = () => {
                (0, n9.flushSync)(() => g(!0)), f.current?.onBeforePrint()
            }, d[2] = n) : n = d[2];
            let y = (0, m.useEffectEvent)(n);
            d[3] !== u ? (o = () => {
                u.set(aL.a, null), g(!1)
            }, d[3] = u, d[4] = o) : o = d[4];
            let b = (0, m.useEffectEvent)(o);
            return d[5] !== b || d[6] !== y || d[7] !== v || d[8] !== u ? (s = () => {
                let e, t, n = new AbortController,
                    a = (e = () => {
                        if (!u.get(el.c).isChatgptBrowserReplacement) return;
                        let e = u.get(av);
                        if (e?.printing) return;
                        let t = {
                            ...e ?? ax("CHATGPT_CONVERSATION_PRINT_ENTRY_POINT_UNOBSERVED"),
                            printing: !0
                        };
                        u.set(av, t), aw(u, t, "CHATGPT_CONVERSATION_PRINT_STAGE_BEFORE_PRINT")
                    }, t = () => {
                        let e = u.get(av);
                        u.get(el.c).isChatgptBrowserReplacement && e?.printing && (aw(u, e, "CHATGPT_CONVERSATION_PRINT_STAGE_AFTER_PRINT"), u.set(av, null))
                    }, window.addEventListener("beforeprint", e, !0), window.addEventListener("afterprint", t), () => {
                        window.removeEventListener("beforeprint", e, !0), window.removeEventListener("afterprint", t), u.set(av, null)
                    }),
                    r = e => v(e, n.signal);
                return window.addEventListener("keydown", r, !0), window.addEventListener("beforeprint", y, !0), window.addEventListener("afterprint", b), () => {
                    n.abort(), window.removeEventListener("keydown", r, !0), window.removeEventListener("beforeprint", y, !0), window.removeEventListener("afterprint", b), u.set(aL.a, null), a()
                }
            }, d[5] = b, d[6] = y, d[7] = v, d[8] = u, d[9] = s) : s = d[9], d[10] !== u ? (i = [u], d[10] = u, d[11] = i) : i = d[11], (0, m.useEffect)(s, i), d[12] !== h || d[13] !== e || d[14] !== p ? (l = p || h ? (0, a.jsx)(aU, {
                ...e,
                ref: f,
                printing: h
            }) : null, d[12] = h, d[13] = e, d[14] = p, d[15] = l) : l = d[15], l
        }

        function aU(e) {
            let t, n, o, i, l = (0, r.c)(19),
                {
                    entries: d,
                    title: u,
                    TurnRowComponent: h,
                    printing: p,
                    ref: g
                } = e,
                f = (0, c.y)(ep.a),
                v = (0, m.useContext)(j.a),
                y = (0, m.useContext)(ap.a),
                {
                    getExperiment: b
                } = (0, eR.h)(),
                x = b("448755449", {
                    disableExposureLog: !0
                }).get("enabled", !1);
            l[0] !== d[0]?.conversationId ? (t = d[0]?.conversationId ?? (0, t9.d)(""), l[0] = d[0]?.conversationId, l[1] = t) : t = l[1], l[2] !== v || l[3] !== t ? (n = {
                auth: v,
                conversationId: t
            }, l[2] = v, l[3] = t, l[4] = n) : n = l[4];
            let w = (0, c.x)(null != d[0] && aP.h, n),
                C = (0, c.x)(null == d[0] ? null : tg.e, d[0]?.conversationId ?? "") ?? !0,
                _ = (0, m.useRef)(null),
                S = function(e, t, n) {
                    let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        r = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
                        o = arguments.length > 5 ? arguments[5] : void 0,
                        s = [],
                        i = [],
                        l = new Map;
                    for (let n of t) {
                        let t = l.get(n.conversationId);
                        if (null == t) {
                            let a = e.get(tm.j, n.conversationId);
                            t = {
                                serverId: a,
                                userResolver: (0, aT.c)(void 0, void 0, void 0, e.get(tm.T, n.conversationId) ?? void 0),
                                scopedResolver: (0, aT.c)(a ?? void 0)
                            }, l.set(n.conversationId, t)
                        }
                        let {
                            serverId: o,
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
                            void 0 === t.generatedResolver && (t.generatedResolver = e.get(aT.a, n.conversationId));
                            let a = t.generatedResolver;
                            null != a && i.push({
                                src: l.src,
                                resolver: a
                            })
                        } else if ("chatgpt-python-execution" === l.type && null != o) i.push(...l.images.map(e => {
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
                                        for (let a of (0, aj.u)(t, e)) {
                                            if (r && (0, aS.d)(a.src)) continue;
                                            let e = a.searchResult?.isProxied && (a.previewSrc === a.searchResult.contentSrc || a.previewSrc === a.searchResult.originalSrc) ? a.src : a.previewSrc;
                                            s.push({
                                                conversationId: n.conversationId,
                                                src: a.src,
                                                previewSrc: null != e && r && (0, aS.d)(e) ? a.src : e
                                            })
                                        }
                            }
                            if (null == o) continue;
                            i.push(...l.contentReferences.flatMap((e, t) => (0, aj.u)(e, t).map(e => {
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
                        return null != t && (0, aI.h)(t) ? [{
                            src: t,
                            resolver: n
                        }] : []
                    });
                    return {
                        queryKey: ["chatgpt-print-assets", e.get(au.a), t[0]?.conversationId, a, r, s, c.map(e => {
                            let {
                                src: t,
                                resolver: n
                            } = e;
                            return [t, ...n.cacheKey, n.validationSessionId]
                        })],
                        initialData: 0 === c.length ? {
                            imageSources: {},
                            complete: 0 === s.length
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
                            return ab(e, "CHATGPT_CONVERSATION_PRINT_PREPARATION_IMAGES", i, async () => {
                                let t = {
                                    ...a.getQueryData(l)?.imageSources
                                };
                                for (let e of a_()(c, 6)) i.throwIfAborted(), await Promise.all(e.map(async e => {
                                    let {
                                        src: n,
                                        resolver: r
                                    } = e, o = await (0, aI.a)(a, n, r);
                                    if (i.throwIfAborted(), null != o) {
                                        let e = new Image;
                                        e.referrerPolicy = "no-referrer", e.src = o, await e.decode(), t[n] = o
                                    }
                                }));
                                let d = new Map,
                                    u = s.flatMap(t => {
                                        let n = d.get(t.conversationId);
                                        return (null == n && (n = r || !e.get(aP.h, {
                                            auth: o,
                                            conversationId: t.conversationId
                                        }) && e.get(tg.e, t.conversationId), d.set(t.conversationId, n)), n && (0, aS.d)(t.src)) ? [] : [{
                                            ...t,
                                            previewSrc: n && null != t.previewSrc && (0, aS.d)(t.previewSrc) ? t.src : t.previewSrc
                                        }]
                                    }),
                                    h = n ? t : await async function(e, t, n) {
                                        if (0 === e.length) return t;
                                        let a = aE(),
                                            r = {
                                                ...t
                                            },
                                            o = [];
                                        for (let n of e) {
                                            let e = t[n.src] ?? a[n.src] ?? (null == n.previewSrc ? void 0 : t[n.previewSrc] ?? a[n.previewSrc]);
                                            null != e ? r[n.src] = e : o.push(n)
                                        }
                                        if (0 === o.length || n.aborted) return r;
                                        let s = new AbortController,
                                            i = () => s.abort();
                                        n.addEventListener("abort", i, {
                                            once: !0
                                        });
                                        let l = setTimeout(i, 1e3),
                                            c = 0;
                                        try {
                                            await Promise.all(Array.from({
                                                length: Math.min(4, o.length)
                                            }, async () => {
                                                for (; !s.signal.aborted;) {
                                                    let e = o[c++];
                                                    if (null == e) return;
                                                    let t = e.previewSrc ?? e.src;
                                                    if (!/^(https?:|data:image\/|blob:)/i.test(t)) continue;
                                                    let n = await
                                                    function(e, t) {
                                                        return new Promise(n => {
                                                            let a = new Image,
                                                                r = e => {
                                                                    t.removeEventListener("abort", o), n(e)
                                                                },
                                                                o = () => {
                                                                    a.removeAttribute("src"), r(null)
                                                                };
                                                            t.aborted ? n(null) : (t.addEventListener("abort", o, {
                                                                once: !0
                                                            }), a.referrerPolicy = "no-referrer", a.src = e, a.decode().then(() => r(e), () => r(null)))
                                                        })
                                                    }(t, s.signal);
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
                }(f, d, p, x, "restricted" === y || !w && C, v),
                {
                    data: I,
                    isSuccess: T,
                    isError: E,
                    refetch: P
                } = (0, s.a)(S);
            return l[5] !== S || l[6] !== I || l[7] !== x || l[8] !== T || l[9] !== P || l[10] !== f ? (o = () => ({
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
                                ...aE(),
                                ...e?.imageSources
                            };
                        (0, n9.flushSync)(() => f.set(aL.a, t))
                    }
                }
            }), l[5] = S, l[6] = I, l[7] = x, l[8] = T, l[9] = P, l[10] = f, l[11] = o) : o = l[11], (0, m.useImperativeHandle)(g, o), l[12] !== h || l[13] !== d || l[14] !== E || l[15] !== T || l[16] !== p || l[17] !== u ? (i = p ? (0, n9.createPortal)((0, a.jsx)(aO, {
                title: u,
                children: (0, a.jsx)(am.a, {
                    value: null,
                    children: (0, a.jsx)(az.a, {
                        value: null,
                        children: T ? d.map(e => {
                            var t;
                            return (0, a.jsx)(h, {
                                entry: {
                                    ...e,
                                    timestampSeparatorAtMs: null,
                                    turn: {
                                        ...t = e.turn,
                                        suppressTurnActions: !0,
                                        items: t.items.map(e => "chatgpt-reasoning-group" !== e.type ? aB(e) : {
                                            ...e,
                                            items: e.items.map(aB),
                                            activeReasoning: null == e.activeReasoning ? void 0 : aB(e.activeReasoning)
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
            }), document.body) : null, l[12] = h, l[13] = d, l[14] = E, l[15] = T, l[16] = p, l[17] = u, l[18] = i) : i = l[18], i
        }

        function aq(e) {
            let t, n, a, o, i, l, d = (0, r.c)(22),
                {
                    conversationId: u
                } = e,
                h = (0, c.y)(eI.a),
                p = (0, g.a)(),
                f = (0, m.useRef)(null),
                v = (0, c.z)(au.a),
                y = (0, c.x)(tm.j, u),
                b = (0, c.z)(aG.b);
            d[0] !== v || d[1] !== y ? (t = ["chatgpt-print-history", v, y], d[0] = v, d[1] = y, d[2] = t) : t = d[2], d[3] !== h || d[4] !== y ? (n = e => {
                let {
                    signal: t
                } = e;
                return ab(h, "CHATGPT_CONVERSATION_PRINT_PREPARATION_HISTORY", t, async () => (null != y && await (0, aF.a)(h, y, t), !0))
            }, d[3] = h, d[4] = y, d[5] = n) : n = d[5], d[6] !== t || d[7] !== n ? (a = {
                queryKey: t,
                enabled: !1,
                staleTime: 0,
                retry: !1,
                refetchOnWindowFocus: !1,
                queryFn: n
            }, d[6] = t, d[7] = n, d[8] = a) : a = d[8];
            let {
                refetch: x
            } = (0, s.a)(a);
            d[9] !== v || d[10] !== u || d[11] !== p || d[12] !== b || d[13] !== x || d[14] !== h || d[15] !== y ? (o = (e, t) => {
                if (ay(h, e), e.defaultPrevented || null == y || 0 === b || h.get(aG.c, y)?.complete === !0 || !e.ctrlKey && !e.metaKey || e.altKey || e.shiftKey || "p" !== e.key.toLowerCase() || (e.preventDefault(), e.repeat)) return;
                if (f.current?.signal === t) return void aD.set(e, f.current.preparation);
                let n = x({
                    cancelRefetch: !1
                }).then(async e => {
                    if (!t.aborted && h.get(au.a) === v) {
                        if (e.isError) return void h.get(q.f).danger(p.formatMessage({
                            id: "chatgpt.printHistory.error",
                            defaultMessage: "Couldn't load the full conversation to print"
                        }), {
                            errorAnalytics: {
                                toastId: "chatgpt.printHistory.error"
                            }
                        });
                        await Promise.all(h.queryClient.getQueryCache().findAll({
                            queryKey: ["chatgpt-print-assets", v, u],
                            predicate: aQ
                        }).map(aK)), t.aborted || h.get(au.a) !== v || window.print()
                    }
                }).finally(() => {
                    f.current?.signal === t && (f.current = null)
                });
                f.current = {
                    signal: t,
                    preparation: n
                }, aD.set(e, n)
            }, d[9] = v, d[10] = u, d[11] = p, d[12] = b, d[13] = x, d[14] = h, d[15] = y, d[16] = o) : o = d[16];
            let w = (0, m.useEffectEvent)(o);
            return d[17] !== w ? (i = () => {
                let e = new AbortController,
                    t = t => w(t, e.signal);
                return window.addEventListener("keydown", t, !0), () => {
                    e.abort(), window.removeEventListener("keydown", t, !0)
                }
            }, d[17] = w, d[18] = i) : i = d[18], d[19] !== v || d[20] !== y ? (l = [v, y], d[19] = v, d[20] = y, d[21] = l) : l = d[21], (0, m.useEffect)(i, l), null
        }

        function aK(e) {
            return e.fetch(void 0, {
                cancelRefetch: !1
            }).catch(aV)
        }

        function aV() {}

        function aQ(e) {
            return e.getObserversCount() > 0
        }
        var a$ = n("gbRX");

        function aY(e) {
            let t, n, o = (0, r.c)(4),
                {
                    isFetching: s,
                    isSharedConversation: i,
                    onRetry: l
                } = e,
                d = (0, c.z)(!i && a$.a) || s;
            return o[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(ey.a, {
                id: "chatgptConversations.preview.retry",
                defaultMessage: "Try again"
            }), o[0] = t) : t = o[0], o[1] !== l || o[2] !== d ? (n = (0, a.jsx)(tN.a, {
                color: "ghost",
                disabled: d,
                onClick: l,
                children: t
            }), o[1] = l, o[2] = d, o[3] = n) : n = o[3], n
        }

        function aX(e) {
            let t, n, o, s = (0, r.c)(7),
                {
                    isFetching: i,
                    isSharedConversation: l,
                    onRetry: c
                } = e;
            return s[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(ey.a, {
                id: "chatgptConversations.loadError",
                defaultMessage: "Could not load this ChatGPT conversation"
            }), s[0] = t) : t = s[0], s[1] !== i || s[2] !== l || s[3] !== c ? (n = null != c ? (0, a.jsx)(aY, {
                isFetching: i,
                isSharedConversation: l,
                onRetry: c
            }) : null, s[1] = i, s[2] = l, s[3] = c, s[4] = n) : n = s[4], s[5] !== n ? (o = (0, a.jsxs)("div", {
                className: "rounded-xl border border-default bg-surface-secondary/92 p-4 text-sm text-default",
                children: [t, n]
            }), s[5] = n, s[6] = o) : o = s[6], o
        }
        var aJ = n("FfNP"),
            aZ = n("WVag");
        let a0 = (0, tB.a)(aJ.loadEpicChartIndicator);

        function a1(e) {
            let t, n = (0, r.c)(3),
                {
                    conversationId: o
                } = e,
                s = (0, c.x)(aZ.a, o),
                [i, l] = (0, m.useState)(!1);
            return i || null == s || l(!0), n[0] !== o || n[1] !== i ? (t = i ? (0, a.jsx)(a0, {
                conversationId: o
            }) : null, n[0] = o, n[1] = i, n[2] = t) : t = n[2], t
        }
        var a2 = n("DWXw"),
            a3 = n("RGWz"),
            a4 = n("QxH2"),
            a5 = n("UuVq"),
            a6 = n("TwSq"),
            a7 = n("l0fK"),
            a8 = n("hkBU"),
            a9 = n("T1PX"),
            re = n("guID"),
            rt = n("Mbqw"),
            rn = n("yzQ9"),
            ra = n("Gjet"),
            rr = n("gJe8"),
            ro = n("ASxG"),
            rs = n("lsfk"),
            ri = n("IObw"),
            rl = n("kQNh"),
            rc = n.n(rl),
            rd = n("NkEl"),
            ru = n("FW69"),
            rh = "highlight-x7OnzP",
            rp = "safari-wcvuzB",
            rm = "block-t7sxyD";
        let rg = "chatgpt-search-result",
            rf = "script, style, textarea, input, select, [hidden], [aria-hidden='true'], [data-thread-find-skip]";

        function* rv(e, t) {
            let n = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_TEXT, {
                    acceptNode: e => e.parentElement?.closest(rf) == null ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
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
            let o = RegExp(t.split(/\n+/u).map(rc()).join("\\n*"), "g");
            for (let n = o.exec(r); null != n && n.index < r.length; n = o.exec(r)) {
                let r = n.index;
                o.lastIndex = r + 1;
                let s = r + n[0].length,
                    i = a.find(e => e.end > r),
                    l = a.findLast(e => e.start < s);
                if (null == i || null == l) continue;
                let c = e.ownerDocument.createRange();
                c.setStart(i.node, r - i.start), c.setEnd(l.node, s - l.start), ry(c) && ((0, ru.a)(c) ?? c.toString()).trim() === t && (yield c)
            }
        }

        function ry(e) {
            return Array.from(e.getClientRects()).some(e => e.width > 0 && e.height > 0) && null != e.startContainer.parentElement && "hidden" !== getComputedStyle(e.startContainer.parentElement).visibility
        }
        let rb = ro.object({
            chatGptSearchNavigation: ro.object({
                key: ro.string(),
                messageId: ro.string()
            })
        });

        function rx(e) {
            let t, n, a, o, s, i, l, d, u, h, p, g, v = (0, r.c)(50),
                {
                    conversationId: y,
                    entries: b,
                    isConversationFetching: x,
                    turnListApi: w
                } = e,
                C = (0, c.y)(eI.a),
                _ = (0, c.x)(tm.s, y),
                j = (0, rs.b)(),
                S = (0, ae.c)();
            v[0] !== j || v[1] !== S ? (t = e => {
                ! function(e, t, n) {
                    let a = t.getScrollElement();
                    if (null == a) return;
                    let r = e instanceof Range ? e.startContainer : e,
                        o = r instanceof HTMLElement ? r : r.parentElement;
                    for (let t = e instanceof Range ? o : o?.parentElement; null != t && t !== a; t = t.parentElement) {
                        if (t.scrollWidth <= t.clientWidth || !/^(auto|scroll)$/.test(getComputedStyle(t).overflowX)) continue;
                        let a = e instanceof Range ? e.getClientRects()[0] : e.getBoundingClientRect();
                        if (null == a) continue;
                        let r = t.getBoundingClientRect();
                        (a.left < r.left || a.right > r.right) && t.scrollBy({
                            left: (0, ae.b)(a.left + a.width / 2 - r.left - r.width / 2, n),
                            behavior: "instant"
                        })
                    }
                    let s = e instanceof Range ? e.getClientRects()[0] : e.getBoundingClientRect();
                    if (null == s) return;
                    let i = a.getBoundingClientRect(),
                        l = getComputedStyle(a),
                        c = Number.parseFloat(l.scrollPaddingTop) || 0,
                        d = Number.parseFloat(l.scrollPaddingBottom) || 0,
                        u = a.clientHeight - c - d,
                        h = (0, ae.b)(s.height, n),
                        p = (0, ae.b)(s.top - i.top, n) - c + Math.min(h, u) / 2 - u / 2;
                    t.scrollToDistanceFromBottomPx(t.getLastScrollDistanceFromBottomPx() - p, "instant", "user")
                }(e, j, S)
            }, v[0] = j, v[1] = S, v[2] = t) : t = v[2];
            let I = (0, m.useEffectEvent)(t),
                T = (0, f.Y)(),
                E = (0, f._)(),
                P = new URLSearchParams(T.search),
                A = P.get("messageId") ?? P.get("message"),
                M = rb.safeParse(T.state).data?.chatGptSearchNavigation,
                k = A ?? M?.messageId,
                R = P.get("selectedTextQuery") ?? "",
                N = (0, c.x)(tm.N, y),
                O = !R || null != k && null != N && (N[k]?.message != null || Object.values(N).some(e => e.message?.id === k)),
                B = R || P.get("historySearchQuery") || "",
                L = JSON.stringify([y, null != A ? T.key : M?.key ?? T.key, k]);
            v[3] !== L ? (n = {
                key: L,
                handled: !1,
                positioned: !1
            }, v[3] = L, v[4] = n) : n = v[4];
            let F = (0, m.useRef)(n),
                G = (0, m.useEffectEvent)(e => {
                    F.current.positioned = !0;
                    let t = B.trim().length > 0 ? function(e, t, n) {
                        let a, r, o, s, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "terms",
                            l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                            c = "phrase" === i ? t.trim() : null,
                            d = [...new Set(t.trim().toLowerCase().normalize("NFC").split(/\s+/).map(e => e.replace(/^[^\p{Letter}\p{Number}]+|[^\p{Letter}\p{Number}]+$/gu, "")).filter(e => e.length > 0))],
                            u = new TextEncoder,
                            h = d.filter(e => !/^\p{Letter}+$/u.test(e) || u.encode(e.normalize("NFKD").replace(/\p{Mark}/gu, "")).byteLength >= 3),
                            p = h.length > 0 ? h : d;
                        if (c?.length === 0 || null == c && 0 === p.length) return () => {};
                        let m = new RegExp(null == c ? p.toSorted((e, t) => t.length - e.length).map(rc()).join("|") : rc()(c), null == c ? "giu" : "gu"),
                            g = !1,
                            f = performance.now(),
                            v = !1,
                            y = new WeakSet,
                            b = new Set,
                            x = new MutationObserver(C);

                        function w() {
                            for (let t of (g = !0, x.disconnect(), clearTimeout(r), null != o && cancelAnimationFrame(o), null != a && CSS.highlights.get(rg) === a && CSS.highlights.delete(rg), e.classList.remove(rh, rp), b)) t.classList.remove(rh, rm)
                        }

                        function C() {
                            g || null != r || null != o || (r = setTimeout(() => {
                                r = void 0, o = requestAnimationFrame(() => {
                                    o = void 0, _()
                                })
                            }, 50))
                        }

                        function _() {
                            let t;
                            if (g || !e.isConnected || null != o) return;
                            let d = performance.now() - f;
                            if (d < 4e3 && null != e.querySelector("[data-search-result-pending]")) return void C();
                            let u = (0, rd.a)(e);
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
                                    return null != (n.text ?? t.textContent ?? "").normalize("NFC").match(m)
                                }),
                                p = !1;
                            for (let {
                                    element: e,
                                    target: t
                                }
                                of u) null != t.reveal && !y.has(e) && h.some(t => e.contains(t.element)) && (y.add(e), t.reveal(), p = !0);
                            if (p) {
                                o = requestAnimationFrame(() => {
                                    o = requestAnimationFrame(() => {
                                        o = void 0, _()
                                    })
                                });
                                return
                            }
                            let j = [];
                            if (null != c) {
                                let t = e.querySelector('[data-markdown-text-style="assistant-message"]') ?? e,
                                    n = 0;
                                for (let e of rv(t, c))
                                    if (!(n++ < l)) {
                                        j.push(e);
                                        break
                                    }
                            } else {
                                let t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_TEXT, {
                                    acceptNode: e => e.parentElement?.closest(rf) != null || u.some(t => {
                                        let {
                                            element: n,
                                            target: a
                                        } = t;
                                        return "block" === a.highlight && n.contains(e)
                                    }) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
                                });
                                for (let n = t.nextNode(); null != n; n = t.nextNode())
                                    for (let t of (n.textContent ?? "").matchAll(m)) {
                                        let a = e.ownerDocument.createRange();
                                        a.setStart(n, t.index), a.setEnd(n, t.index + t[0].length), ry(a) && j.push(a)
                                    }
                            }
                            let S = h.flatMap(e => {
                                let {
                                    element: t,
                                    target: n
                                } = e, a = t.getBoundingClientRect(), r = j.some(e => t.contains(e.startContainer));
                                return "terms" === i && a.width > 0 && a.height > 0 && ("block" === n.highlight || "auto" === n.highlight && !r) ? [t] : []
                            });
                            if (0 === j.length && 0 === S.length) {
                                if (d < 800) return void C();
                                S.push(e)
                            }
                            let I = 0,
                                T = 0;
                            for (let e of [...j, ...S]) {
                                let n = e instanceof Range ? e.getClientRects()[0] : e.getBoundingClientRect(),
                                    a = n?.top ?? 0,
                                    r = n?.left ?? 0;
                                (null == t || 0 > (a - I || r - T)) && (t = e, I = a, T = r)
                            }
                            t = t ?? e, v && n?.(t);
                            let E = t instanceof Range ? t.getClientRects()[0] : t.getBoundingClientRect(),
                                P = [E?.top, E?.left, E?.width, E?.height, e.scrollHeight].join(":");
                            if (d < 4e3 && P !== s) {
                                s = P, C();
                                return
                            }
                            if (!v) {
                                v = !0, s = void 0, n?.(t), C();
                                return
                            }
                            for (let t of (x.disconnect(), clearTimeout(r), "u" > typeof Highlight && null != CSS.highlights ? (a = new Highlight(...j), CSS.highlights.set(rg, a)) : j.length > 0 && S.push(e), e.classList.add(rh), (0, tR.e)() && e.classList.add(rp), S)) t.classList.add(rh, rm), b.add(t);
                            r = setTimeout(w, 3600)
                        }
                        return x.observe(e, {
                            childList: !0,
                            characterData: !0,
                            attributes: !0,
                            subtree: !0
                        }), _(), w
                    }(e, B, I, R ? "phrase" : "terms", Number(P.get("selectedTextOccurrence"))) : void 0;
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
            v[5] !== y || v[6] !== x || v[7] !== k || v[8] !== L || v[9] !== C || v[10] !== O ? (a = () => {
                if (F.current.key !== L && (F.current = {
                        key: L,
                        handled: !1,
                        positioned: !1
                    }), null != k && !x && O) return C.watch(e => {
                    !F.current.handled && (0, tm.Qb)(e, y, k) && (F.current.handled = !0)
                })
            }, o = [y, x, k, L, C, O], v[5] = y, v[6] = x, v[7] = k, v[8] = L, v[9] = C, v[10] = O, v[11] = a, v[12] = o) : (a = v[11], o = v[12]), (0, m.useLayoutEffect)(a, o), v[13] !== b || v[14] !== k ? (s = null == k ? void 0 : b.find(e => {
                let {
                    turn: t
                } = e;
                return t.messageIds.includes(k)
            }), v[13] = b, v[14] = k, v[15] = s) : s = v[15];
            let z = s;
            v[16] !== T || v[17] !== E || v[18] !== A || v[19] !== M ? (i = () => {
                null == A && null != M && E(T, {
                    replace: !0,
                    preventScrollReset: !0,
                    state: {
                        ...T.state,
                        chatGptSearchNavigation: void 0
                    }
                })
            }, v[16] = T, v[17] = E, v[18] = A, v[19] = M, v[20] = i) : i = v[20];
            let D = (0, m.useEffectEvent)(i);
            if (v[21] !== D || v[22] !== _ || v[23] !== x || v[24] !== z ? (l = () => {
                    !F.current.positioned || null != z || x || _ || D()
                }, v[21] = D, v[22] = _, v[23] = x, v[24] = z, v[25] = l) : l = v[25], v[26] !== _ || v[27] !== x || v[28] !== z ? (d = [_, x, z], v[26] = _, v[27] = x, v[28] = z, v[29] = d) : d = v[29], (0, m.useLayoutEffect)(l, d), v[30] !== k || v[31] !== z?.id || v[32] !== z?.turn || v[33] !== z?.turn.items || v[34] !== z?.turn.items.findIndex || v[35] !== z?.turnKey) {
                let e = z?.turn.items.findIndex(e => "messageId" in e && e.messageId === k || "assistant-message" === e.type && null != k && e.sourceMessageIds?.includes(k)) ?? -1,
                    t = z?.turn.items[e],
                    n = z?.id;
                h = z?.turnKey, u = null == t || null == n ? void 0 : (0, ri.b)(t, e, n), v[30] = k, v[31] = z?.id, v[32] = z?.turn, v[33] = z?.turn.items, v[34] = z?.turn.items.findIndex, v[35] = z?.turnKey, v[36] = u, v[37] = h
            } else u = v[36], h = v[37];
            let H = u;
            return v[38] !== G || v[39] !== k || v[40] !== h || v[41] !== w || v[42] !== H ? (p = () => {
                let e;
                if (null == h || null == w) return;
                let t = new AbortController,
                    n = null;
                return w.scrollToKey(h, e => n = (null == k ? null : e.querySelector(`[data-chatgpt-search-message-ids~="${CSS.escape(k)}"]`)) ?? (null == H ? null : e.querySelector(`[data-chatgpt-search-unit-key="${CSS.escape(H)}"]`)) ?? e, {
                    align: "top",
                    signal: t.signal
                }).then(() => {
                    !t.signal.aborted && n?.isConnected && (e = G(n))
                }), () => {
                    t.abort(), e?.()
                }
            }, v[38] = G, v[39] = k, v[40] = h, v[41] = w, v[42] = H, v[43] = p) : p = v[43], v[44] !== k || v[45] !== L || v[46] !== h || v[47] !== w || v[48] !== H ? (g = [L, k, h, w, H], v[44] = k, v[45] = L, v[46] = h, v[47] = w, v[48] = H, v[49] = g) : g = v[49], (0, m.useLayoutEffect)(p, g), null
        }
        var rw = n("ESlL"),
            rC = n("Ppno"),
            r_ = n("lA5q"),
            rj = n("wDWo"),
            rS = n("IgxH"),
            rI = n("iaTG"),
            rT = n("c3f5"),
            rE = n("XpUB"),
            rP = n("xAIC"),
            rA = n("if6d"),
            rM = n("Sd8U");
        let rk = (0, c.t)("ChatGptTranscriptScope", {
            parent: rM.a,
            key: e => e.presentation
        });
        var rR = n("r2mP"),
            rN = n("FGGA"),
            rO = n("No7k"),
            rB = n("RADZ"),
            rL = n("rZzh"),
            rF = n("Dpvj");

        function rG(e) {
            let t, n, o, s, i, l, d, u, h, p, m = (0, r.c)(57),
                {
                    entry: g,
                    renderMcpApps: f,
                    trackShownImpressions: v
                } = e,
                y = void 0 === f || f,
                b = void 0 === v || v,
                x = (0, c.y)(eI.a);
            m[0] !== g.conversationId ? (t = (0, em.o)({
                routeKind: "chatgpt-thread",
                conversationId: g.conversationId
            }), m[0] = g.conversationId, m[1] = t) : t = m[1];
            let w = (0, c.x)(b ? Z.c : null, t),
                C = b && null == w,
                _ = (0, c.x)(g.isMostRecentTurn ? rL.e : null, g.conversationId);
            m[2] !== g.timestampSeparatorAtMs ? (n = null == g.timestampSeparatorAtMs ? null : (0, a.jsx)(rR.b, {
                sentAtMs: g.timestampSeparatorAtMs
            }), m[2] = g.timestampSeparatorAtMs, m[3] = n) : n = m[3];
            let j = null != g.paragen;
            m[4] !== g.branchingMessageId || m[5] !== g.browserConversationId || m[6] !== g.conversationId || m[7] !== g.dilEditDisclosure || m[8] !== g.enableCloudBrowserActivity || m[9] !== g.feedbackEnabled || m[10] !== g.hasLaterSitesPreview || m[11] !== g.id || m[12] !== g.isMostRecentTurn || m[13] !== g.isReadOnly || m[14] !== g.isTemporaryChat || m[15] !== g.isWorkConversation || m[16] !== g.onEditUserMessage || m[17] !== g.onFork || m[18] !== g.onRegenerateResponse || m[19] !== g.pendingSubmissionAttachments || m[20] !== g.readAloudEnabled || m[21] !== g.referenceImageSuggestionActionInput || m[22] !== g.safetyReview || m[23] !== g.shareEnabled || m[24] !== g.turn || m[25] !== y || m[26] !== C || m[27] !== j ? (o = (0, a.jsx)(rO.a, {
                dilEditDisclosure: g.dilEditDisclosure,
                browserConversationId: g.browserConversationId,
                conversationId: g.conversationId,
                enableCloudBrowserActivity: g.enableCloudBrowserActivity,
                branchingMessageId: g.branchingMessageId,
                hasLaterSitesPreview: g.hasLaterSitesPreview,
                hostId: eg.a,
                isMostRecentTurn: g.isMostRecentTurn,
                isReadOnly: g.isReadOnly,
                isTemporaryChat: g.isTemporaryChat,
                isParagen: j,
                isWorkConversation: g.isWorkConversation,
                readAloudEnabled: g.readAloudEnabled,
                renderMcpApps: y,
                feedbackEnabled: g.feedbackEnabled,
                onEditUserMessage: g.onEditUserMessage,
                onFork: g.onFork,
                onRegenerateResponse: g.onRegenerateResponse,
                pendingSubmissionAttachments: g.pendingSubmissionAttachments,
                referenceImageSuggestionActionInput: g.referenceImageSuggestionActionInput,
                shareEnabled: g.shareEnabled,
                safetyReview: g.safetyReview,
                trackShownImpressions: C,
                turn: g.turn,
                turnId: g.id
            }), m[4] = g.branchingMessageId, m[5] = g.browserConversationId, m[6] = g.conversationId, m[7] = g.dilEditDisclosure, m[8] = g.enableCloudBrowserActivity, m[9] = g.feedbackEnabled, m[10] = g.hasLaterSitesPreview, m[11] = g.id, m[12] = g.isMostRecentTurn, m[13] = g.isReadOnly, m[14] = g.isTemporaryChat, m[15] = g.isWorkConversation, m[16] = g.onEditUserMessage, m[17] = g.onFork, m[18] = g.onRegenerateResponse, m[19] = g.pendingSubmissionAttachments, m[20] = g.readAloudEnabled, m[21] = g.referenceImageSuggestionActionInput, m[22] = g.safetyReview, m[23] = g.shareEnabled, m[24] = g.turn, m[25] = y, m[26] = C, m[27] = j, m[28] = o) : o = m[28], m[29] !== g.conversationId || m[30] !== g.isTemporaryChat || m[31] !== g.isWorkConversation || m[32] !== g.paragen || m[33] !== y || m[34] !== C ? (s = null == g.paragen ? null : (0, a.jsx)(rB.a, {
                renderMcpApps: y,
                comparison: g.paragen,
                conversationId: g.conversationId,
                hostId: eg.a,
                isTemporaryChat: g.isTemporaryChat,
                isWorkConversation: g.isWorkConversation,
                trackTaskViews: C
            }, g.paragen.promptMessageId), m[29] = g.conversationId, m[30] = g.isTemporaryChat, m[31] = g.isWorkConversation, m[32] = g.paragen, m[33] = y, m[34] = C, m[35] = s) : s = m[35], m[36] !== g.showSharedConversationPrivateDisclaimer ? (i = g.showSharedConversationPrivateDisclaimer ? (0, a.jsxs)("div", {
                className: "my-2 flex items-center justify-center gap-2 text-size-chat text-secondary select-none",
                children: [(0, a.jsx)(U.a, {
                    className: "shrink-0",
                    legacyIcon: rN.a,
                    asset16: rF.a,
                    legacyClassName: "icon-2xs",
                    "aria-hidden": !0
                }), (0, a.jsx)(ey.a, {
                    id: "chatgptConversations.sharedConversation.privateMessagesDisclaimer",
                    defaultMessage: "Messages beyond this point are only visible to you"
                })]
            }) : null, m[36] = g.showSharedConversationPrivateDisclaimer, m[37] = i) : i = m[37], m[38] !== g || m[39] !== _ || m[40] !== x || m[41] !== C ? (l = g.isMostRecentTurn ? (0, a.jsx)(rw.a, {
                conversationId: g.conversationId,
                errorMessage: g.errorMessage,
                isWorkConversation: g.isWorkConversation,
                onRetry: null == g.onRegenerateResponse || null == _ ? void 0 : async e => {
                    let t = x.get(rL.e, g.conversationId);
                    if (t?.message.id == null || t.isRetryDisabled) return;
                    let n = x.get(tm.V, g.conversationId)?.metadata?.errorCode;
                    (0, t3.d)(x.get(el.c).logProductEvent, {
                        conversationId: x.get(tm.j, g.conversationId),
                        messageId: t.message.id,
                        useDefaultModel: t.useDefaultModel,
                        errorCode: n
                    }), await g.onRegenerateResponse?.(t.message.id, {
                        sourceEventTimeStamp: e,
                        source: "model_cap_exceeded" === n ? "rate_limit_retry" : "error_retry",
                        model: (0, rL.f)(t.message, x.get(t_.v, g.conversationId)),
                        useDefaultModel: t.useDefaultModel,
                        forceUseSearch: t.forceUseSearch
                    })
                },
                showPendingLoadingMessage: g.showPendingLoadingMessage,
                showRequestUserInputStatus: g.showRequestUserInputStatus,
                trackShownImpressions: C,
                useDefaultModel: _?.useDefaultModel,
                isRetryDisabled: _?.isRetryDisabled
            }) : null, m[38] = g, m[39] = _, m[40] = x, m[41] = C, m[42] = l) : l = m[42], m[43] !== o || m[44] !== s || m[45] !== i || m[46] !== l ? (d = (0, a.jsxs)("div", {
                className: "flex flex-col gap-1.5",
                children: [o, s, i, l]
            }), m[43] = o, m[44] = s, m[45] = i, m[46] = l, m[47] = d) : d = m[47], m[48] !== g.id || m[49] !== d || m[50] !== n ? (u = (0, a.jsxs)("div", {
                "data-content-search-turn-key": g.id,
                children: [n, d]
            }), m[48] = g.id, m[49] = d, m[50] = n, m[51] = u) : u = m[51];
            let S = u;
            return m[52] !== g.dilVisualSlotId ? (h = null != g.dilVisualSlotId && (0, a.jsx)("div", {
                "data-dil-anchor-spacer": "",
                "aria-hidden": "true"
            }), m[52] = g.dilVisualSlotId, m[53] = h) : h = m[53], m[54] !== S || m[55] !== h ? (p = (0, a.jsxs)(a.Fragment, {
                children: [h, S]
            }), m[54] = S, m[55] = h, m[56] = p) : p = m[56], p
        }

        function rz(e) {
            let t, n, o, s = (0, r.c)(6);
            s[0] !== e ? ({
                renderMcpApps: n,
                ...t
            } = e, s[0] = e, s[1] = t, s[2] = n) : (t = s[1], n = s[2]);
            let i = void 0 === n || n,
                l = (0, c.y)(rk),
                d = i && l.value.rendersWidgets;
            return s[3] !== t || s[4] !== d ? (o = (0, a.jsx)(rG, {
                ...t,
                renderMcpApps: d
            }), s[3] = t, s[4] = d, s[5] = o) : o = s[5], o
        }

        function rD(e) {
            let t, n, o, s, i, l, d, u = (0, r.c)(17),
                {
                    entries: h,
                    historyLoader: p,
                    isVisible: g,
                    rendersWidgets: f,
                    onVisibilityChange: v
                } = e;
            u[0] !== g || u[1] !== v ? (t = () => (v(g), () => v(!1)), n = [g, v], u[0] = g, u[1] = v, u[2] = t, u[3] = n) : (t = u[2], n = u[3]), (0, m.useLayoutEffect)(t, n), u[4] !== f ? (o = {
                presentation: "floating",
                rendersWidgets: f
            }, u[4] = f, u[5] = o) : o = u[5];
            let y = g ? p : null;
            return u[6] !== h ? (s = (0, a.jsx)(rA.b, {
                entries: h,
                preserveMeasuredTurnViewport: !0,
                RowComponent: rH
            }), u[6] = h, u[7] = s) : s = u[7], u[8] !== y || u[9] !== s ? (i = (0, a.jsx)(am.a, {
                value: null,
                children: (0, a.jsxs)(az.a, {
                    value: null,
                    children: [y, s]
                })
            }), u[8] = y, u[9] = s, u[10] = i) : i = u[10], u[11] !== g || u[12] !== i ? (l = (0, a.jsx)(ra.a, {
                active: g,
                presentation: "panel",
                children: i
            }), u[11] = g, u[12] = i, u[13] = l) : l = u[13], u[14] !== o || u[15] !== l ? (d = (0, a.jsx)(c.b, {
                scope: rk,
                value: o,
                children: l
            }), u[14] = o, u[15] = l, u[16] = d) : d = u[16], d
        }

        function rH(e) {
            let t, n = (0, r.c)(2),
                {
                    entry: o
                } = e;
            return n[0] !== o ? (t = (0, a.jsx)(rz, {
                entry: {
                    ...o,
                    onEditUserMessage: void 0,
                    onFork: void 0,
                    readAloudEnabled: !1
                },
                trackShownImpressions: !1
            }), n[0] = o, n[1] = t) : t = n[1], t
        }
        var rW = n("qZWE"),
            rU = n("IBS2"),
            rq = n("PC5z"),
            rK = n("lZ4W"),
            rV = n("ihvi"),
            rQ = n("nMdB"),
            r$ = n("uYx2");
        let rY = "[data-d-component]:not([data-d-text-flow])";
        class rX extends m.Component {
            static contextType = ae.a;
            held = null;
            presented = this.props;
            userMotion;
            resumePlacement;
            stopLayoutCorrection;
            textObserver;
            unsubscribe;
            releaseHold = () => {
                this.held = null, this.textObserver?.disconnect(), this.textObserver = void 0, this.userMotion?.cancel(), this.userMotion = void 0, this.resumePlacement = void 0, this.stopLayoutCorrection?.(), this.stopLayoutCorrection = void 0
            };
            componentDidMount() {
                this.unsubscribe = this.props.scrollController.addUserScrollListener(() => {
                    let e = null != this.userMotion;
                    this.releaseHold(), e && (this.presented = this.props, this.forceUpdate())
                })
            }
            componentWillUnmount() {
                this.releaseHold(), this.unsubscribe?.()
            }
            holdForResponse = e => (!this.held && this.props.active && (this.held = this.capture()), !!this.held && (this.resumePlacement = e, this.props.scrollController.holdViewport(), !0));
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
                let r = a.querySelector(rY) ?? a,
                    o = r.getBoundingClientRect(),
                    s = n.getBoundingClientRect();
                return o.bottom <= s.top || o.top >= s.bottom ? null : {
                    top: o.top,
                    body: r,
                    element: a,
                    scrollElement: n
                }
            }
            requestingBubble(e) {
                let t = this.props.exchangeKey;
                return null == t ? null : e.scrollElement.querySelector(`[data-turn-key="${CSS.escape(t)}"] [data-user-message-bubble]`)
            }
            getSnapshotBeforeUpdate(e) {
                let t = e.visualId !== this.props.visualId,
                    n = !this.props.active && (this.props.hasStreamingFinalText || e.replyPending && !this.props.replyPending);
                if (t || n) {
                    let e = this.resumePlacement;
                    return this.releaseHold(), n || this.props.active && null != this.props.visualId ? e ?? null : null
                }
                return e.active && e.exchangeKey !== this.props.exchangeKey && (this.stopLayoutCorrection?.(), this.userMotion?.cancel(), this.held = this.held ?? this.capture(), this.held || (this.resumePlacement = void 0)), this.held
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
                    o = () => {
                        let e = a.querySelector(r);
                        if (e?.dataset.dComponent !== "text" || !e.textContent?.trim() || !e.getClientRects().length) return;
                        let n = this.resumePlacement;
                        this.releaseHold(), n?.(t)
                    };
                this.textObserver = new MutationObserver(o), this.textObserver.observe(a, {
                    subtree: !0,
                    childList: !0,
                    characterData: !0
                }), o()
            }
            componentDidUpdate(e, t, n) {
                if ((e.streamingDilFinalId !== this.props.streamingDilFinalId || e.exchangeKey !== this.props.exchangeKey) && (this.textObserver?.disconnect(), this.textObserver = void 0), "function" == typeof n ? null != this.props.exchangeKey && n(this.props.exchangeKey) : this.restore(n), this.props.active || this.observeStreamingDilText(), this.props.active && e.visualOwnerId !== this.props.visualOwnerId && (this.resumePlacement = void 0), this.held && this.shouldAnimateFold()) {
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
                this.presented = this.props, this.userMotion?.cancel(), this.userMotion = void 0
            }
            shouldAnimateFold() {
                return null != this.held && !this.props.reducedMotion && this.props.active && this.presented.visualId === this.props.visualId && this.presented.exchangeKey === this.props.exchangeKey && this.presented.visualOwnerId !== this.props.visualOwnerId
            }
            showAcceptedEdit = () => {
                this.presented = this.props, this.forceUpdate()
            };
            restoreAfterMeasurement = () => {
                this.restore(this.held)
            };
            restore(e) {
                if (!e?.element.isConnected) return;
                let {
                    scrollController: t
                } = this.props;
                e.body.isConnected || (e.body = e.element.querySelector(rY) ?? e.element);
                let n = () => (0, ae.b)(e.body.getBoundingClientRect().top - e.top, this.context),
                    a = n();
                if (!(1 > Math.abs(a))) {
                    if (this.held) {
                        let t = e.element.closest("[data-turn-key]")?.querySelector("[data-dil-anchor-spacer]");
                        if (t) {
                            let r = parseFloat(t.style.height) || 0,
                                o = r + Math.max(0, -a - e.scrollElement.scrollTop) - Math.min(r, Math.max(0, a));
                            o !== r && (t.style.height = `${o}px`, a = n())
                        }
                    }
                    this.held && a > 0 && this.props.ensureScrollRoomForAnchor?.(a), t.holdViewport(), t.compensateScrollToDistanceFromBottomPx(Math.max(0, (0, r$.b)(e.scrollElement) - a)), this.stopLayoutCorrection?.(), this.stopLayoutCorrection = (0, rQ.a)(e.body, this.context)
                }
            }
            render() {
                return this.shouldAnimateFold() ? this.presented.children : this.props.children
            }
        }
        var rJ = n("aRto"),
            rZ = n("WWSI"),
            r0 = n("U3Gy"),
            r1 = n("mKTJ");
        let r2 = (0, c.c)(em.a, e => {
                let {
                    get: t
                } = e;
                return t(rW.l)
            }, {
                isEqual: tU()
            }),
            r3 = (0, c.c)(em.a, e => {
                let {
                    get: t
                } = e;
                return t(rq.i)
            }, {
                isEqual: (e, t) => e.length === t.length && e.every((e, n) => e.messageId === t[n]?.messageId && e.turnId === t[n]?.turnId)
            });

        function r4(e) {
            let t, n, o, s, i, l, d, u, h, p, g, v = (0, r.c)(50),
                {
                    conversationId: y,
                    entries: b,
                    viewportRef: x,
                    isTurnActive: w,
                    isInlinePreview: C,
                    readingPosition: _,
                    onVisibleContentReady: j,
                    responseSpacerState: S
                } = e,
                I = (0, c.z)(_.restoreState$),
                {
                    sharedConversationId: T
                } = (0, f.cb)(),
                E = (0, c.z)(null != T && "u" > typeof Element && "function" != typeof Element.prototype.moveBefore ? r2 : null),
                P = (0, c.z)(r3),
                A = (0, rs.b)(),
                M = (0, m.useContext)(rU.a);
            v[0] !== M || v[1] !== C || v[2] !== _ || v[3] !== A ? (t = () => {
                if (null != M && !C) return M(() => _.captureBeforeHide(A))
            }, n = [M, C, _, A], v[0] = M, v[1] = C, v[2] = _, v[3] = A, v[4] = t, v[5] = n) : (t = v[4], n = v[5]), (0, m.useLayoutEffect)(t, n), v[6] !== _ || v[7] !== A ? (o = () => _.restoreReadingPosition(A), v[6] = _, v[7] = A, v[8] = o) : o = v[8];
            let k = (0, eH.a)(o),
                [R, N] = (0, m.useState)(r7);
            v[9] !== x ? (s = (e, t) => {
                x.current?.releaseForHistoryToggle(), N(n => {
                    let a = new Map(n);
                    return a.get(e) === t ? a.delete(e) : a.set(e, t), a
                })
            }, v[9] = x, v[10] = s) : s = v[10];
            let O = function(e, t, n) {
                    if (!e.some(e => null != e.dilEditRequests)) return e;
                    let a = new Set;
                    return e.flatMap(e => {
                        let r, o = e.dilEditRequests;
                        if (!o || e.dilVisualSlotId) return [e];
                        let s = e.turn.items.filter(e => {
                            if ("user-message" !== e.type || !e.messageId) return !0;
                            let s = o.get(e.messageId);
                            if (!s) return !0;
                            let i = t.get(s.slotId) === s.editCount;
                            return e.messageId !== s.originalRequestId ? i || !a.has(s.slotId) : (a.add(s.slotId), r = {
                                slotId: s.slotId,
                                requestId: e.messageId,
                                count: s.editCount,
                                expanded: i,
                                onToggle: () => n(s.slotId, s.editCount)
                            }, !0)
                        });
                        return s.length === e.turn.items.length ? [r ? {
                            ...e,
                            dilEditDisclosure: r
                        } : e] : s.length ? [{
                            ...e,
                            turn: {
                                ...e.turn,
                                items: s
                            },
                            dilEditDisclosure: r
                        }] : []
                    })
                }(b, R, (0, eH.a)(s)),
                B = b.findLastIndex(r6),
                L = b[B]?.dilVisualSlotId,
                F = (0, a9.a)(null != L),
                G = b[B]?.turn.items[0];
            v[11] !== b || v[12] !== S?.voiceAutoScrollEnabled || v[13] !== L ? (i = null != L || S?.voiceAutoScrollEnabled ? b.findLastIndex(r8) : -1, v[11] = b, v[12] = S?.voiceAutoScrollEnabled, v[13] = L, v[14] = i) : i = v[14];
            let z = i,
                D = b[z],
                H = B > z;
            v[15] !== b ? (l = e => {
                let t = b.find(t => t.turn.items.some(t => "chatgpt-writing-block-patch" === t.type && t.messageId === e.messageId)),
                    n = t?.turnKey ?? b.find(t => {
                        let {
                            id: n
                        } = t;
                        return n === e.turnId
                    })?.turnKey;
                return null == n ? [] : [n]
            }, v[15] = b, v[16] = l) : l = v[16];
            let W = P.flatMap(l),
                U = (0, m.useContext)(rJ.a),
                q = b.at(-1),
                K = w || q?.turn.status === "in_progress";
            if (U?.aboveComposer != null && null != q && W.push(q.turnKey), null != T && E?.size)
                for (let e of b) e.turn.items.flatMap(r5).some(e => "chatgpt-hosted-widget" === e.type && (0, r1.h)(e) && E.has((0, r1.e)(T, e.messageId))) && W.push(e.turnKey);
            let V = null == L ? void 0 : O.find(e => e.dilEditDisclosure?.slotId === L);
            V && W.push(V.turnKey, b[B].turnKey);
            let Q = H ? V : void 0;
            S?.voiceAutoScrollEnabled && null != D && W.push(D.turnKey);
            let $ = (0, c.x)(rV.b, y),
                Y = null == $ ? void 0 : b.findLast(e => {
                    let {
                        turn: t
                    } = e;
                    return t.messageIds.includes($)
                }),
                X = null == Y ? void 0 : (0, rV.a)(Y.turn.items);
            (0, c.x)(rK.a, null == X ? null : {
                conversationId: y,
                userMessageId: X,
                steeredPromptId: Y === q ? $ : void 0
            }) && null != Y && W.push(Y.turnKey);
            let J = (0, c.x)(r0.b, y);
            v[17] === Symbol.for("react.memo_cache_sentinel") ? (d = (e, t, n) => "adjacent-user-prompts" === (0, tA.d)(n[t - 1], e) ? {
                ...e,
                gapBeforePx: 4
            } : e, v[17] = d) : d = v[17];
            let Z = (0, rZ.a)(O, J, y).map(d),
                ee = D?.turnKey,
                et = G?.type === "assistant-message" ? G.messageId : void 0,
                en = S?.ensureScrollRoomForAnchor,
                ea = q?.hasStreamingFinalText === !0,
                er = q?.streamingDilFinalId,
                eo = S?.getHeightPx,
                es = Q?.turnKey,
                ei = Q?.dilEditDisclosure?.count,
                el = Q?.turnKey ?? (null != L || S?.voiceAutoScrollEnabled ? D?.turnKey : void 0);
            v[18] !== S || v[19] !== x ? (u = (e, t) => {
                S?.onTurnLayoutReady(e, t), x.current?.restoreAfterMeasurement()
            }, v[18] = S, v[19] = x, v[20] = u) : u = v[20], v[21] !== S ? (h = e => {
                let {
                    heightDeltaPx: t
                } = e;
                S?.consumeGrowth(t ?? 0)
            }, v[21] = S, v[22] = h) : h = v[22];
            let ec = null == M || C ? void 0 : _.onRestoreStateChange;
            return v[23] !== I || v[24] !== j || v[25] !== _.onApiChange || v[26] !== k || v[27] !== W || v[28] !== eo || v[29] !== es || v[30] !== ei || v[31] !== el || v[32] !== u || v[33] !== h || v[34] !== ec || v[35] !== Z ? (p = (0, a.jsx)(rA.b, {
                entries: Z,
                getBottomScrollPaddingPx: eo,
                synchronousMeasurementTurnKey: es,
                latestTurnSynchronousMeasurementKey: ei,
                layoutReadyTurnKey: el,
                onTurnLayoutReady: u,
                onLatestTurnHeightChange: h,
                initialRestoreState: I,
                onRestoreStateChange: ec,
                onApiChange: _.onApiChange,
                restoreScrollDistanceFromBottomPx: k,
                onVisibleContentReady: j,
                preserveMeasuredTurnViewport: !0,
                retainedTurnKeys: W,
                RowComponent: rz
            }), v[23] = I, v[24] = j, v[25] = _.onApiChange, v[26] = k, v[27] = W, v[28] = eo, v[29] = es, v[30] = ei, v[31] = el, v[32] = u, v[33] = h, v[34] = ec, v[35] = Z, v[36] = p) : p = v[36], v[37] !== H || v[38] !== F || v[39] !== K || v[40] !== A || v[41] !== et || v[42] !== en || v[43] !== ea || v[44] !== er || v[45] !== p || v[46] !== ee || v[47] !== x || v[48] !== L ? (g = (0, a.jsx)(rX, {
                ref: x,
                exchangeKey: ee,
                visualId: L,
                visualOwnerId: et,
                active: H,
                ensureScrollRoomForAnchor: en,
                hasStreamingFinalText: ea,
                streamingDilFinalId: er,
                replyPending: K,
                reducedMotion: F,
                scrollController: A,
                children: p
            }), v[37] = H, v[38] = F, v[39] = K, v[40] = A, v[41] = et, v[42] = en, v[43] = ea, v[44] = er, v[45] = p, v[46] = ee, v[47] = x, v[48] = L, v[49] = g) : g = v[49], g
        }

        function r5(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : [e]
        }

        function r6(e) {
            return null != e.dilVisualSlotId
        }

        function r7() {
            return new Map
        }

        function r8(e) {
            return e.turn.items.some(e => "user-message" === e.type)
        }
        var r9 = n("Ipgw"),
            oe = n("SBcL");

        function ot(e) {
            let t, n, o, s, i = (0, r.c)(18),
                {
                    conversationId: l
                } = e,
                d = (0, c.y)(eI.a),
                u = (0, g.a)(),
                h = (0, ez.a)(),
                p = (0, c.x)(tm.ab, l),
                f = (0, c.x)(tm.db, l),
                v = (0, c.x)(tm.w, l),
                y = (0, c.x)(tm.cb, l),
                b = (0, m.useRef)(null),
                x = (0, m.useRef)(null);
            i[0] !== v || i[1] !== l || i[2] !== u || i[3] !== f || i[4] !== d || i[5] !== p || i[6] !== y ? (t = () => {
                let e = b.current;
                if (null == e) return;
                let t = x.current;
                if ((0, tm.Bb)(p)) {
                    e.textContent = "", x.current = {
                        conversationId: l,
                        requestId: f ?? ("active-async-turn" === p || "active-tpp-turn" === p ? v?.requestId : null) ?? (t?.conversationId === l ? t.requestId : null)
                    };
                    return
                }
                y || (x.current = null, t?.conversationId === l && "idle" === p && v?.result === "completed" && v.requestId === t.requestId && null == d.get(tm.D, l) && (e.textContent = u.formatMessage({
                    id: "chatgptConversations.responseComplete",
                    defaultMessage: "Response complete"
                })))
            }, i[0] = v, i[1] = l, i[2] = u, i[3] = f, i[4] = d, i[5] = p, i[6] = y, i[7] = t) : t = i[7];
            let w = (0, m.useEffectEvent)(t);
            return (i[8] !== w ? (n = () => {
                w()
            }, i[8] = w, i[9] = n) : n = i[9], i[10] !== v || i[11] !== l || i[12] !== h || i[13] !== f || i[14] !== p || i[15] !== y ? (o = [l, p, f, v, y, h], i[10] = v, i[11] = l, i[12] = h, i[13] = f, i[14] = p, i[15] = y, i[16] = o) : o = i[16], (0, m.useEffect)(n, o), h) ? (i[17] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, n9.createPortal)((0, a.jsx)("span", {
                ref: b,
                className: "sr-only select-none",
                "aria-atomic": "true",
                "aria-live": "polite",
                role: "status"
            }), document.body), i[17] = s) : s = i[17], s) : null
        }
        var on = n("JlMc"),
            oa = n("TUMj"),
            or = n("pgeU");
        let oo = (0, tB.a)(async () => (await Promise.all([n.e(747352), n.e(94193)]).then(n.bind(n, "FKl5"))).ClientDelightPresentation);

        function os(e) {
            let t, n, o, s = (0, r.c)(7),
                {
                    conversationId: i
                } = e,
                l = (0, c.y)(eI.a),
                d = (0, c.x)(or.a, i);
            return s[0] !== i || s[1] !== l ? (t = () => {
                let e = () => {
                        let e = l.get(or.a, i);
                        null != e && (0, or.b)(l, i, e, "hidden_or_unmounted")
                    },
                    t = () => {
                        "visible" !== document.visibilityState && e()
                    };
                return document.addEventListener("visibilitychange", t), window.addEventListener("pagehide", e), () => {
                    document.removeEventListener("visibilitychange", t), window.removeEventListener("pagehide", e), e()
                }
            }, n = [i, l], s[0] = i, s[1] = l, s[2] = t, s[3] = n) : (t = s[2], n = s[3]), (0, m.useEffect)(t, n), s[4] !== i || s[5] !== d ? (o = null == d ? null : (0, a.jsx)(oo, {
                conversationId: i,
                effect: d
            }, d.id), s[4] = i, s[5] = d, s[6] = o) : o = s[6], o
        }
        var oi = n("Pyg2"),
            ol = n("ZIh4"),
            oc = n("nKJ6"),
            od = n("AoaR"),
            ou = n("fDfx"),
            oh = n("Xslx"),
            op = n("EEop"),
            om = n("bxvp"),
            og = n("VBQS"),
            of = n("hsIu");
        let ov = (0, c.d)(eI.a, (e, t) => {
            let {
                get: n
            } = t;
            if (null == e || !n(om.c) || null == n(S.f) || null == n(S.k)) return null;
            let {
                data: a,
                isError: r
            } = n(of.b);
            if (r || a?.project_id !== e) return null;
            let {
                data: o,
                isError: s
            } = n(op.l, (0, og.a)());
            return s ? null : (0, og.b)(o)
        });
        var oy = n("FmJi"),
            ob = n("sIex"),
            ox = n("Z2JT"),
            ow = n("Fjd0"),
            oC = n("VPBa"),
            o_ = n("PWXi"),
            oj = n("HgLj"),
            oS = n("hNLE"),
            oI = n("f6KK"),
            oT = n("JPXZ"),
            oE = n("zWHk");

        function oP(e) {
            let t, n, a, o, s, i, l, c = (0, r.c)(34),
                {
                    composerController: d,
                    enabled: u
                } = e,
                h = (0, f.Y)(),
                p = (0, f._)();
            if (c[0] !== h.search) {
                let e = new URLSearchParams(h.search);
                t = e.get("prompt"), n = e.get("promptSource"), c[0] = h.search, c[1] = t, c[2] = n
            } else t = c[1], n = c[2];
            let g = n,
                v = h.key,
                y = (0, m.useRef)(null);
            c[3] !== h.hash || c[4] !== h.pathname || c[5] !== h.search || c[6] !== h.state || c[7] !== v || c[8] !== p ? (a = e => {
                let t = new URLSearchParams(h.search);
                t.delete("prompt"), t.delete("promptSource"), p({
                    pathname: h.pathname,
                    search: t.toString(),
                    hash: h.hash
                }, {
                    replace: !0,
                    state: {
                        ...h.state,
                        consumedUrlPromptKey: v,
                        ...e && "widget" === t.get("site_edit_source") ? {
                            siteEditSource: "widget"
                        } : void 0
                    }
                })
            }, c[3] = h.hash, c[4] = h.pathname, c[5] = h.search, c[6] = h.state, c[7] = v, c[8] = p, c[9] = a) : a = c[9];
            let b = (0, m.useEffectEvent)(a);
            return c[10] !== b || c[11] !== d || c[12] !== u || c[13] !== v || c[14] !== t ? (o = () => {
                if (!u && t && y.current !== v) return (0, oE.b)(d.view, (e, t) => {
                    e && t?.getMeta("addToHistory") !== !1 && d.consumeLocationPromptPrefill(v) && b(!1)
                })
            }, c[10] = b, c[11] = d, c[12] = u, c[13] = v, c[14] = t, c[15] = o) : o = c[15], c[16] !== d || c[17] !== u || c[18] !== v || c[19] !== t ? (s = [d, u, v, t], c[16] = d, c[17] = u, c[18] = v, c[19] = t, c[20] = s) : s = c[20], (0, m.useLayoutEffect)(o, s), c[21] !== b || c[22] !== d || c[23] !== u || c[24] !== v || c[25] !== t || c[26] !== g ? (i = () => {
                if (!u || !t || y.current === v) return;
                y.current = v;
                let e = d.consumeLocationPromptPrefill(v);
                if (b(e), !e) return;
                let {
                    view: n
                } = d, a = t.replace(/\r\n/g, "\n"), r = "codex-app" === g ? (0, oT.f)({
                    schema: n.state.schema,
                    text: a,
                    restoreOnlySitesAndPluginMentions: !0
                }) : (0, oT.e)({
                    schema: n.state.schema,
                    text: a
                }), o = n.state.tr.replaceWith(0, n.state.doc.content.size, r.content);
                o.setSelection(oI.h.atEnd(o.doc)), n.dispatch(o)
            }, c[21] = b, c[22] = d, c[23] = u, c[24] = v, c[25] = t, c[26] = g, c[27] = i) : i = c[27], c[28] !== d || c[29] !== u || c[30] !== v || c[31] !== t || c[32] !== g ? (l = [d, u, v, t, g], c[28] = d, c[29] = u, c[30] = v, c[31] = t, c[32] = g, c[33] = l) : l = c[33], (0, m.useLayoutEffect)(i, l), null
        }
        var oA = n("a4V1"),
            oM = n("KidQ");
        let ok = {
            addInitialContentToHistory: !0,
            enableCodeBlocks: !1,
            enableSelectedTextLinks: !1,
            enableFileMentions: !0,
            enableSkillMentions: !1,
            enableSlashCommands: {
                triggers: ["/"]
            }
        };

        function oR(e) {
            let t, n, o, s, i, l = (0, r.c)(15),
                {
                    children: d,
                    draftKey: u,
                    enableInlineSystemHints: h
                } = e,
                p = (0, c.y)(eI.a),
                g = (0, m.useContext)(ob.a),
                f = h ? "chatgpt" : void 0;
            return l[0] !== h || l[1] !== f ? (t = {
                enableInlineSystemHints: h,
                variant: f
            }, l[0] = h, l[1] = f, l[2] = t) : t = l[2], l[3] !== u || l[4] !== p ? (n = () => ({
                defaultText: p.get(t_.u, u),
                defaultTextKind: "prompt"
            }), l[3] = u, l[4] = p, l[5] = n) : n = l[5], l[6] !== g ? (o = () => {
                let e = g?.input.current ?? document.querySelector("#pending-conversation-input");
                return null == e || null == g ? null : {
                    element: e,
                    locationKey: g.locationKey
                }
            }, l[6] = g, l[7] = o) : o = l[7], l[8] !== d ? (s = e => null == e ? null : d(e), l[8] = d, l[9] = s) : s = l[9], l[10] !== t || l[11] !== n || l[12] !== o || l[13] !== s ? (i = (0, a.jsx)(oM.a, {
                controllerOptions: ok,
                initialSuggestionOptions: t,
                getInitialContent: n,
                getInitialInput: o,
                children: s
            }), l[10] = t, l[11] = n, l[12] = o, l[13] = s, l[14] = i) : i = l[14], i
        }
        var oN = n("wnpN"),
            oO = n("rcFj"),
            oB = n("vpdG"),
            oL = n("V8xe");

        function oF(e) {
            let t, n, o, s = (0, r.c)(11),
                i = (0, m.useContext)(ob.a);
            if (null == i || i.conversationId !== e.conversationId) {
                let t;
                return s[0] !== e ? (t = (0, a.jsx)(oG, {
                    ...e
                }), s[0] = e, s[1] = t) : t = s[1], t
            }
            s[2] !== e.conversationId || s[3] !== e.isImageEditComposer ? (t = e.isImageEditComposer ? {
                conversationId: e.conversationId,
                surface: "image-edit"
            } : e.conversationId, s[2] = e.conversationId, s[3] = e.isImageEditComposer, s[4] = t) : t = s[4];
            let l = !e.isWorkConversation;
            return s[5] !== e ? (n = t => (0, a.jsx)(oG, {
                ...e,
                initialController: t
            }), s[5] = e, s[6] = n) : n = s[6], s[7] !== t || s[8] !== l || s[9] !== n ? (o = (0, a.jsx)(oR, {
                draftKey: t,
                enableInlineSystemHints: l,
                children: n
            }), s[7] = t, s[8] = l, s[9] = n, s[10] = o) : o = s[10], o
        }

        function oG(e) {
            let t, n, o, s, i, l, d, u, h, p, v, y, b, x, w, C, _, j, S, I = (0, r.c)(84),
                {
                    composerRef: T,
                    initialController: E,
                    ...P
                } = e,
                A = (0, c.y)(ep.a),
                M = (0, c.x)(ol.d, P.isTemporaryChat),
                {
                    conversationId: k,
                    isFullscreenComposer: R
                } = P,
                N = (0, g.a)(),
                {
                    state: O
                } = (0, f.Y)(),
                B = (0, c.x)(tS, k),
                L = (0, c.x)(tm.T, k),
                F = !(!P.disabled && !P.isSharedConversation && !P.isWorkConversation && !P.isTemporaryChat && !P.isImageEditComposer && (0, t7.a)(L)) ? null : L,
                G = (0, c.x)(null == P.requiredSystemHints ? ov : null, F);
            I[0] !== G || I[1] !== P.requiredSystemHints ? (t = P.requiredSystemHints ?? (null == G ? void 0 : [G]), I[0] = G, I[1] = P.requiredSystemHints, I[2] = t) : t = I[2];
            let z = t;
            I[3] !== G || I[4] !== k || I[5] !== A ? (n = () => {
                if (null != G) {
                    let e, t;
                    return e = (0, oh.b)(A, k, [G]), t = (0, ou.i)(A, {
                        draftKey: k,
                        isTemporaryChat: !1
                    }), () => {
                        if (e(), A.get(oh.a, k).includes(G)) return;
                        let n = A.get(t_.x, k).filter(e => e !== G && e !== `plugin:${od.d}`);
                        (0, t_.X)(A, k, n, t)
                    }
                }
            }, o = [A, k, G], I[3] = G, I[4] = k, I[5] = A, I[6] = n, I[7] = o) : (n = I[6], o = I[7]), (0, m.useEffect)(n, o);
            let D = (0, c.x)(eX.c, k);
            I[8] !== D || I[9] !== P.isSharedConversation || I[10] !== P.isWorkConversation || I[11] !== L ? (s = !P.isSharedConversation && !P.isWorkConversation && !(0, t7.a)(L) && !D, I[8] = D, I[9] = P.isSharedConversation, I[10] = P.isWorkConversation, I[11] = L, I[12] = s) : s = I[12];
            let H = s,
                W = H && !P.disabled && !P.isSubmitDisabled && !P.isImageEditComposer,
                U = H ? B : void 0;
            I[13] !== k || I[14] !== P.isImageEditComposer ? (i = P.isImageEditComposer ? {
                conversationId: k,
                surface: "image-edit"
            } : k, I[13] = k, I[14] = P.isImageEditComposer, I[15] = i) : i = I[15];
            let q = i;
            I[16] !== k || I[17] !== q || I[18] !== E ? (l = {
                composerController: E,
                conversationId: k,
                draftKey: q
            }, I[16] = k, I[17] = q, I[18] = E, I[19] = l) : l = I[19];
            let K = (0, oB.a)(l),
                V = (0, oO.a)(K, k, !P.isInlinePreview && !P.disabled, P.workspace && "tpp", U?.id ?? L),
                Q = (0, m.useContext)(ob.a),
                $ = (0, m.useRef)(!1);
            I[20] !== q || I[21] !== Q || I[22] !== E || I[23] !== P.isTemporaryChat || I[24] !== A ? (d = e => {
                null == e || null == E || $.current || ($.current = !0, (0, t_.Y)(A, q, E.getPersistedText(), {
                    isTemporaryChat: P.isTemporaryChat
                }), Q?.onAdopt())
            }, I[20] = q, I[21] = Q, I[22] = E, I[23] = P.isTemporaryChat, I[24] = A, I[25] = d) : d = I[25];
            let Y = (0, eH.a)(d);
            I[26] !== Y || I[27] !== T ? (u = (0, oj.a)(T, Y), I[26] = Y, I[27] = T, I[28] = u) : u = I[28];
            let X = u,
                J = (0, m.useContext)(oa.a),
                Z = (0, c.w)(oA.a, k),
                ee = (0, c.x)(tm.eb, k),
                et = (0, c.x)(tm.ab, k),
                en = (0, c.x)(t_.j, k);
            I[29] !== et ? (h = (0, tm.Bb)(et), I[29] = et, I[30] = h) : h = I[30];
            let ea = h,
                er = (0, c.z)(e2.l.activeTab$);
            if (I[31] !== er || I[32] !== R || I[33] !== ea || I[34] !== J) {
                let e = J?.turn.items.flatMap(oW);
                p = R && er?.tabType.kind === oC.a && "generatedImages" in er.props && null != er.props.generatedImages && !ea && null != J && "in_progress" !== J.turn.status && !J.turn.hasPendingAssistantReply && !J.showPendingLoadingMessage && !e?.some(oH) && (null != J.errorMessage || e?.some(oD)) ? J.turn.messageIds.at(-1) ?? J.turnKey : null, I[31] = er, I[32] = R, I[33] = ea, I[34] = J, I[35] = p
            } else p = I[35];
            let eo = p,
                es = (0, m.useRef)(null);
            I[36] !== eo || I[37] !== A ? (v = () => {
                null != eo && eo !== es.current && (es.current = eo, A.set(ox.a, "expanded"))
            }, y = [eo, A], I[36] = eo, I[37] = A, I[38] = v, I[39] = y) : (v = I[38], y = I[39]), (0, m.useEffect)(v, y);
            let ei = (0, c.w)(oN.a, R ? k : null);
            I[40] !== G || I[41] !== F || I[42] !== K || I[43] !== k || I[44] !== W || I[45] !== q || I[46] !== V || I[47] !== N || I[48] !== R || I[49] !== X || I[50] !== M || I[51] !== P || I[52] !== z || I[53] !== A || I[54] !== U || I[55] !== O?.libraryFileCreation || I[56] !== L ? (b = e => (0, a.jsxs)(ow.a, {
                children: [R && P.trackReadState && !e?.isHidden ? (0, a.jsx)(on.a, {
                    conversationId: k,
                    isTranscriptVisible: e?.isCompact === !1 && !e.isMinimized
                }) : null, P.aboveComposerContent, (0, a.jsx)(oy.a, {
                    children: (0, a.jsx)(oS.a, {
                        ref: X,
                        trackShownImpressions: P.trackShownImpressions && !P.isHidden && !e?.isHidden && !e?.isMinimized,
                        headerContent: P.headerContent,
                        legacyImageSuggestionsEnabled: !P.disabled && !P.isSharedConversation && !P.isImageEditComposer,
                        allowBackgroundSubmit: P.isInlinePreview,
                        ...V,
                        disableAutoFocus: P.disableAutoFocus,
                        conversationOrigin: null == P.workspace ? void 0 : "tpp",
                        mcpAppContext: P.workspace?.mcpAppContext,
                        onServerThreadIdChange: P.workspace?.onServerThreadIdChange,
                        followupPortalTarget: P.followupPortalTarget,
                        takeoverDisclaimerRef: P.takeoverDisclaimerRef,
                        showConversationFollowups: P.showConversationFollowups,
                        autoPrepare: !P.isSubmitDisabled && !P.isSharedConversation,
                        browserConversationId: (0, oc.getThreadBrowserConversationId)(A) ?? k,
                        composerController: K,
                        conversationId: k,
                        requiredSystemHints: z,
                        hideSystemHints: null != P.requiredSystemHints,
                        getSubmissionGuard: null != G ? () => () => A.get(tm.T, k) === L && A.get(ov, F) === G : void 0,
                        draftKey: q,
                        onPromptChange: M,
                        selectedCustomGpt: U,
                        targetGizmoId: U?.id,
                        onCustomGptChange: W ? e => {
                            A.set(tS, k, e)
                        } : void 0,
                        onCustomAgentSelected: W ? () => {
                            A.set(tS, k, null)
                        } : void 0,
                        disableDraftPrepare: P.isSubmitDisabled || P.isSharedConversation,
                        disableSubmit: P.disabled || P.isSubmitDisabled,
                        voiceInputDisabled: P.disabled,
                        aboveComposerHeaderContent: P.voiceDisclaimer,
                        getExtraDeveloperInstructions: !P.isInlinePreview && O?.libraryFileCreation && !P.isTemporaryChat ? oz : void 0,
                        isTemporaryChat: P.isTemporaryChat,
                        placeholder: P.disabled && !1 !== P.readOnlyPlaceholder ? P.readOnlyPlaceholder ?? N.formatMessage(oL.a.readOnlyConversationPlaceholder) : void 0,
                        readOnly: P.disabled,
                        hideModelPicker: P.hideModelPicker,
                        ...(0, t_.L)(P),
                        showVoiceStage: P.showVoiceStage,
                        onSubmitAccepted: t => {
                            e?.onSubmitStart(), P.responseSpacerState?.place(), P.onSubmitAccepted?.(t)
                        },
                        onSubmitError: P.responseSpacerState?.clear
                    })
                })]
            }), I[40] = G, I[41] = F, I[42] = K, I[43] = k, I[44] = W, I[45] = q, I[46] = V, I[47] = N, I[48] = R, I[49] = X, I[50] = M, I[51] = P, I[52] = z, I[53] = A, I[54] = U, I[55] = O?.libraryFileCreation, I[56] = L, I[57] = b) : b = I[57];
            let el = b;
            I[58] !== A ? (x = () => {
                (0, a6.K)(A, "conversation")
            }, w = () => {
                (0, a6.K)(A, "conversation")
            }, I[58] = A, I[59] = x, I[60] = w) : (x = I[59], w = I[60]);
            let ec = !P.isInlinePreview && !P.disabled && !P.isSubmitDisabled;
            I[61] !== K || I[62] !== ec ? (C = (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(oP, {
                    composerController: K,
                    enabled: ec
                })
            }), I[61] = K, I[62] = ec, I[63] = C) : C = I[63];
            let ed = R ? "floating" : "pane",
                eu = P.disabled || P.awaitingGptContinuation,
                eh = null == J && !ea,
                em = !P.isInlinePreview && null == P.workspace,
                eg = en || ea ? "loading" : "idle";
            return I[64] !== eg ? (_ = {
                type: eg,
                unread: !1
            }, I[64] = eg, I[65] = _) : _ = I[65], I[66] !== ei || I[67] !== P.isHidden || I[68] !== P.renderTranscript || I[69] !== el || I[70] !== Z || I[71] !== ed || I[72] !== eu || I[73] !== eh || I[74] !== em || I[75] !== _ || I[76] !== ee ? (j = (0, a.jsx)(oi.a, {
                notifications: ei,
                isHidden: P.isHidden,
                placement: ed,
                responsePreview: Z,
                forceExpanded: eu,
                composerOnly: eh,
                title: ee,
                showConversationTitleMenu: em,
                statusState: _,
                renderTranscript: P.renderTranscript,
                children: el
            }), I[66] = ei, I[67] = P.isHidden, I[68] = P.renderTranscript, I[69] = el, I[70] = Z, I[71] = ed, I[72] = eu, I[73] = eh, I[74] = em, I[75] = _, I[76] = ee, I[77] = j) : j = I[77], I[78] !== k || I[79] !== x || I[80] !== w || I[81] !== C || I[82] !== j ? (S = (0, a.jsxs)("div", {
                className: "contents",
                "data-map-composer-conversation": k,
                onMouseDownCapture: x,
                onFocusCapture: w,
                children: [C, j]
            }), I[78] = k, I[79] = x, I[80] = w, I[81] = C, I[82] = j, I[83] = S) : S = I[83], S
        }

        function oz() {
            return [o_.a]
        }

        function oD(e) {
            return "assistant-message" === e.type && "" !== e.content.trim()
        }

        function oH(e) {
            return "generated-image" === e.type || "chatgpt-delayed-image-gen" === e.type
        }

        function oW(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : [e]
        }
        var oU = n("ygKd"),
            oq = n("KSir"),
            oK = n("QPeR"),
            oV = n("M3Kf");

        function oQ(e) {
            let t, n, o, i, l, d, u = (0, r.c)(21),
                {
                    conversationId: h
                } = e,
                p = (0, c.y)(eI.a),
                m = (0, c.x)(tm.j, h),
                g = (0, c.z)(aG.b),
                {
                    search: v
                } = (0, f.Y)();
            if (u[0] !== v) {
                let e = new URLSearchParams(v);
                t = e.get("messageId") ?? e.get("message"), n = e.has("selectedTextQuery"), u[0] = v, u[1] = t, u[2] = n
            } else t = u[1], n = u[2];
            let y = n;
            u[3] !== y || u[4] !== t || u[5] !== m ? (o = ["chatgpt-message-target", m, t, y], u[3] = y, u[4] = t, u[5] = m, u[6] = o) : o = u[6];
            let b = null != m && null != t && g > 0,
                x = y ? 0 : 1 / 0;
            u[7] !== h || u[8] !== y || u[9] !== t || u[10] !== p || u[11] !== m ? (i = async e => {
                let {
                    signal: n
                } = e;
                if (null != m) {
                    if (null != t && y) {
                        let e = p.get(tm.N, h),
                            n = e?.[t] ?? (null == e ? void 0 : Object.values(e).find(e => e.message?.id === t));
                        if (n?.message != null) return !0
                    }
                    await (0, aF.a)(p, m, n)
                }
                return !0
            }, u[7] = h, u[8] = y, u[9] = t, u[10] = p, u[11] = m, u[12] = i) : i = u[12], u[13] !== o || u[14] !== b || u[15] !== x || u[16] !== i ? (l = {
                queryKey: o,
                enabled: b,
                staleTime: x,
                retry: !1,
                queryFn: i
            }, u[13] = o, u[14] = b, u[15] = x, u[16] = i, u[17] = l) : l = u[17];
            let {
                isError: w,
                refetch: C
            } = (0, s.a)(l);
            return u[18] !== w || u[19] !== C ? (d = w ? (0, a.jsx)(tN.a, {
                color: "secondary",
                onClick: () => void C(),
                children: (0, a.jsx)(ey.a, {
                    id: "chatgpt.pagination.retryMessage",
                    defaultMessage: "Retry loading this message"
                })
            }) : null, u[18] = w, u[19] = C, u[20] = d) : d = u[20], d
        }
        var o$ = n("TmaW"),
            oY = n("K45w"),
            oX = n("jCHb"),
            oJ = n("V8uZ");

        function oZ(e) {
            let t = e.querySelector("[data-dil-message-id]") ?? e;
            return t.checkVisibility() && null == t.querySelector("[data-dil-render-failed]") && t.innerText.trim().length > 0
        }
        n("CSxw");
        var o0 = n("NqfB"),
            o1 = n("JEFL"),
            o2 = n("moBM");
        let o3 = '[data-markdown-text-style="assistant-message"]',
            o4 = (0, c.d)(eI.a, (e, t) => {
                let {
                    conversationId: n,
                    messageId: a
                } = e, {
                    get: r
                } = t;
                return null == a ? null : r(tm.N, n)?.[a]?.message ?? null
            });

        function o5(e) {
            let t, n, o = (0, r.c)(5),
                s = `[data-chatgpt-conversation-selection-target="${e.conversationId}"]`;
            return o[0] !== e ? (t = t => (0, a.jsx)(o6, {
                ...e,
                selection: t
            }), o[0] = e, o[1] = t) : t = o[1], o[2] !== s || o[3] !== t ? (n = (0, a.jsx)(o0.a, {
                align: "start",
                targetSelector: s,
                children: t
            }), o[2] = s, o[3] = t, o[4] = n) : n = o[4], n
        }

        function o6(e) {
            let t, o, s, i, l, d, u, h = (0, r.c)(30),
                {
                    conversationId: p,
                    moreDetailsEnabled: m,
                    onAddSelectedText: f,
                    selection: v
                } = e,
                y = (0, c.y)(ep.a),
                b = (0, g.a)(),
                x = (0, eR.f)("4290238484"),
                w = (0, eR.f)("473637331"),
                C = (0, c.z)(o2.b),
                _ = (0, c.x)(tm.y, p);
            h[0] !== _ || h[1] !== C || h[2] !== y ? (t = C && "tpp" === _ && "chatgpt-thread" === y.value.routeKind && null == y.value.workSideChat && !0, h[0] = _, h[1] = C, h[2] = y, h[3] = t) : t = h[3];
            let j = t;
            h[4] !== p || h[5] !== v.selectionRange ? (o = function(e) {
                let {
                    conversationId: t,
                    range: n
                } = e, a = n.startContainer instanceof Element ? n.startContainer : n.startContainer.parentElement, r = n.endContainer instanceof Element ? n.endContainer : n.endContainer.parentElement, o = a?.closest(o3);
                if (n.collapsed || null == o || !o.isConnected || o !== r?.closest(o3)) return null;
                let s = o.parentElement,
                    i = s?.getAttribute("data-chatgpt-selection-message-id");
                return !i || s?.getAttribute("data-chatgpt-selection-conversation-id") !== t || [...o.querySelectorAll('[data-writing-block-variant], [data-conversation-component="learning"], [contenteditable="true"], [data-markdown-copy="exclude"]')].some(e => n.intersectsNode(e)) ? null : {
                    markdownElement: o,
                    messageId: i
                }
            }({
                conversationId: p,
                range: v.selectionRange
            }), h[4] = p, h[5] = v.selectionRange, h[6] = o) : o = h[6];
            let S = o,
                I = S?.messageId ?? null;
            h[7] !== p || h[8] !== I ? (s = {
                conversationId: p,
                messageId: I
            }, h[7] = p, h[8] = I, h[9] = s) : s = h[9];
            let T = (0, c.x)(o4, s),
                E = (0, c.x)(tm.j, p),
                P = x && m && null != E && null != S && T?.author.role === "assistant";
            return h[10] !== j || h[11] !== y ? (i = j ? e => {
                n.e(971224).then(n.bind(n, "f8of")).then(t => {
                    let {
                        createAndOpenWorkSideChat: n
                    } = t;
                    return n(y, {
                        target: "right",
                        selectedText: e
                    })
                })
            } : void 0, h[10] = j, h[11] = y, h[12] = i) : i = h[12], h[13] !== P || h[14] !== w || h[15] !== f || h[16] !== v.selectionRange || h[17] !== S ? (l = !P || w ? e => {
                f(e, S?.messageId, null == S ? void 0 : function(e, t, n) {
                    let a = 0;
                    for (let r of rv(e, n.trim())) {
                        if (0 >= t.compareBoundaryPoints(Range.START_TO_START, r)) break;
                        a++
                    }
                    return a
                }(S.markdownElement, v.selectionRange, e))
            } : void 0, h[13] = P, h[14] = w, h[15] = f, h[16] = v.selectionRange, h[17] = S, h[18] = l) : l = h[18], h[19] !== P || h[20] !== p || h[21] !== b || h[22] !== y || h[23] !== S ? (d = P ? e => {
                Promise.all([n.e(753405), n.e(321957), n.e(585419), n.e(877700), n.e(353230), n.e(81461), n.e(882456), n.e(137889), n.e(744644), n.e(909395), n.e(212487), n.e(17983), n.e(167649), n.e(46150), n.e(523433), n.e(571102), n.e(64655)]).then(n.bind(n, "zRlR")).then(t => {
                    let {
                        openChatGptEntitySidePanel: n
                    } = t;
                    return n(y, {
                        askSidebarParams: {
                            query: e
                        },
                        category: "ask_sidebar",
                        contentReferenceStartIndex: 0,
                        extraParams: null,
                        locale: b.locale,
                        messageId: S.messageId,
                        query: b.formatMessage({
                            id: "chatgpt.selection.moreDetailsTitle",
                            defaultMessage: "More details"
                        }),
                        shouldBlockExternalEgress: y.get(tg.e, p),
                        sourceConversationId: p
                    })
                })
            } : void 0, h[19] = P, h[20] = p, h[21] = b, h[22] = y, h[23] = S, h[24] = d) : d = h[24], h[25] !== v.selectedText || h[26] !== i || h[27] !== l || h[28] !== d ? (u = (0, a.jsx)(o1.a, {
                conversationTerminology: "chat",
                selectedText: v.selectedText,
                onOpenSideChat: i,
                onAddSelectedText: l,
                onMoreDetails: d
            }), h[25] = v.selectedText, h[26] = i, h[27] = l, h[28] = d, h[29] = u) : u = h[29], u
        }
        var o7 = n("SEBt"),
            o8 = n("JUxu");
        let o9 = (0, m.lazy)(async () => ({
            default: (await Promise.resolve().then(n.bind(n, "taaw"))).CodexThreadReportDialog
        }));

        function se(e) {
            let t, n, o, s, i = (0, r.c)(11),
                {
                    sharedConversationId: l
                } = e,
                d = (0, c.y)(eI.a),
                u = (0, c.x)(aP.f, (0, m.useContext)(j.a));
            if (null != u) {
                let e, t;
                return i[0] !== u ? (e = (0, aP.b)(u), i[0] = u, i[1] = e) : e = i[1], i[2] !== e ? (t = (0, a.jsx)(o8.a, {
                    imageOnly: e
                }), i[2] = e, i[3] = t) : t = i[3], t
            }
            return i[4] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)("div", {
                className: "text-secondary",
                children: (0, a.jsx)(ey.a, {
                    id: "chatgptConversations.sharedConversation.copyDisclaimer",
                    defaultMessage: "This is a copy of a shared ChatGPT chat. It won't be added to memory."
                })
            }), i[4] = t) : t = i[4], i[5] !== d || i[6] !== l ? (n = e => {
                if (null == l) return;
                let t = e.currentTarget;
                (0, ny.f)(d, o9, {
                    reportEntityType: "share_link",
                    threadId: l,
                    onCloseAutoFocus: e => {
                        e.preventDefault();
                        let n = t.ownerDocument.activeElement;
                        t.isConnected && (n === t.ownerDocument.body || e.target instanceof HTMLElement && e.target.contains(n)) && t.focus({
                            preventScroll: !0
                        })
                    }
                }), (0, o7.d)(d, l)
            }, i[5] = d, i[6] = l, i[7] = n) : n = i[7], i[8] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, a.jsx)(ey.a, {
                id: "chatgptConversations.sharedConversation.reportButton",
                defaultMessage: "Report conversation"
            }), i[8] = o) : o = i[8], i[9] !== n ? (s = (0, a.jsxs)("div", {
                className: "flex flex-col items-center gap-1 text-center text-xs select-none",
                children: [t, (0, a.jsx)(tN.a, {
                    className: "font-semibold",
                    color: "ghostActive",
                    onClick: n,
                    children: o
                })]
            }), i[9] = n, i[10] = s) : s = i[10], s
        }
        var st = n("AORd"),
            sn = n("cP1f");

        function sa(e) {
            let {
                turn: t
            } = e;
            return t.items.some(sr)
        }

        function sr(e) {
            return "assistant-message" === e.type || "generated-image" === e.type && null != e.src
        }

        function so(e) {
            let t, n, o, s, i, l, d, u, h, p, g, f, v, y, b, x, w, C, _, S, I, T, E, A, M, k, R, N, O, B, L, F, G, z, D = (0, r.c)(228),
                {
                    ref: H,
                    printTitle: W,
                    trackReadState: U,
                    trackShownImpressions: q,
                    composerRef: K,
                    workspace: V,
                    shouldBlockMcpApps: Q,
                    contentX: $,
                    conversationId: Y,
                    sectionIndex: X,
                    composerConversationId: J,
                    composerLeadingContent: Z,
                    aboveComposerContent: ee,
                    historyLoadingContent: et,
                    requiredSystemHints: en,
                    isCoveredByFloatingPanel: ea,
                    isFormOnly: er,
                    isInlinePreview: eo,
                    hideModelPicker: ei,
                    showFilePicker: el,
                    disableAutoFocus: ec,
                    transcriptPresentation: ed,
                    scrollOrigin: eu,
                    isChatConversation: em,
                    customGptId: eg,
                    conversationLoadingLabel: ef,
                    entries: ev,
                    errorMessage: eb,
                    hasLoadError: ex,
                    onRetryLoad: ew,
                    hasRenderableTurns: eC,
                    isComposerDisabled: e_,
                    readOnlyPlaceholder: ej,
                    moreDetailsEnabled: eS,
                    isConversationEmpty: eT,
                    showEmptyState: eE,
                    isConversationFetching: eP,
                    isConversationLoading: eA,
                    isSharedConversation: eM,
                    isSubmitDisabled: ek,
                    retainLiveModelPicker: eR,
                    isTemporaryChat: eN,
                    isTurnActive: eO,
                    isWorkConversation: eL,
                    onboardingPrelude: eF,
                    scrollStateConversationId: eG,
                    initialResponsePlacementKey: ez,
                    sharedConversationId: eD,
                    sharedPostRegulatedConnectorKind: eU,
                    showComposer: eq,
                    archivedPreviewFooter: eK,
                    showPendingLoadingMessage: eV,
                    gptPluginMigrationBanner: eQ,
                    awaitingGptContinuation: e$,
                    workOnlyConversionBanner: eY,
                    onAddSelectedText: eX,
                    onSubmitAccepted: eJ
                } = e,
                eZ = void 0 === eE || eE,
                e0 = (0, c.y)(eI.a),
                e1 = (0, c.y)(ep.a),
                e2 = (0, c.z)(null),
                e3 = (0, c.x)(aP.f, (0, m.useContext)(j.a)),
                e4 = (0, c.z)(eh.a),
                e5 = (0, c.x)(eW.a, Y),
                e6 = V?.fullscreenContent != null ? "content" : "workspace",
                e7 = (0, P.a)(eo ? "embedded" : e6),
                e8 = (0, c.z)(oK.a),
                e9 = eq && e8?.source.turnContext.conversationId !== J,
                te = "floating" === e7.placement,
                [tt, tn] = (0, m.useState)(!1),
                ta = tt && !e7.isHidden && !er,
                tr = V?.fullscreenContent != null || te && ta ? "floating" : "main",
                to = (0, c.z)(oU.h),
                ts = em && null == eD && null == e3 && null == eK,
                ti = !eA && !eO && !ex && eT && !eC,
                tl = (0, c.x)(tm.i, Y),
                tc = eZ && ts && ti && null == tl && !e5 && !te,
                td = null == eg ? "centered-home" : "home",
                tu = eZ && !e5 && (!ts || !eT),
                th = (0, m.useRef)(null),
                tp = (0, m.useRef)(null),
                [tg, tf] = (0, m.useState)(null),
                tv = (0, ae.c)(),
                ty = eo ? null : eG;
            D[0] !== ty || D[1] !== tg || D[2] !== tv ? (t = () => ({
                conversationKey: ty,
                responseSpacer: tg,
                windowZoom: tv
            }), D[0] = ty, D[1] = tg, D[2] = tv, D[3] = t) : t = D[3];
            let tb = (0, eH.a)(t);
            D[4] !== e0 || D[5] !== ty || D[6] !== tb ? (n = () => (function(e, t, n) {
                let a = (0, c.u)(eI.a, null == t ? 0 : e.get(oe.a, t)),
                    r = (0, c.u)(eI.a, () => null),
                    o = (0, c.u)(eI.a, () => null),
                    s = null,
                    i = null;

                function l(e) {
                    null != i && (null == e || e()) && (i = null)
                }
                return {
                    initialOffset$: a,
                    api$: r,
                    restoreState$: o,
                    onScroll: function(t) {
                        let {
                            conversationKey: a,
                            responseSpacer: r
                        } = n();
                        null != a && e.set(oe.a, a, (0, r$.a)(t, r?.getHeightPx() ?? 0))
                    },
                    cancelPendingRestore: l,
                    acceptSubmit() {
                        l(), e.set(a, 0)
                    },
                    onApiChange: t => e.set(r, t),
                    restoreReadingPosition: function(t) {
                        let a = i;
                        if (null == a) return;
                        let o = t.getScrollElement();
                        if (null == o || 0 === o.clientHeight) return;
                        if ("bottom" === a) {
                            l(), t.scrollToDistanceFromBottomPx(0, "instant");
                            return
                        }
                        t.shouldFollowContentGrowth() && t.holdViewport();
                        let s = a.turn,
                            c = null == s ? null : o.querySelector(`[data-turn-key="${CSS.escape(s.key)}"]`)?.getBoundingClientRect(),
                            d = a.top;
                        if (null != s && null != c) {
                            let {
                                windowZoom: e
                            } = n();
                            if ((0, ae.b)(c.height, e) <= Math.max(0, -s.offset)) return;
                            d = o.scrollTop + (0, ae.b)(c.top - o.getBoundingClientRect().top, e) - s.offset
                        }
                        let u = o.scrollHeight - o.clientHeight;
                        d <= u && ((null == s || null != c || e.get(r)?.getEntryGeometry(s.key) == null) && l(), t.compensateScrollToDistanceFromBottomPx(u - Math.max(0, d)))
                    },
                    captureBeforeHide: function(e) {
                        let t = e.getScrollElement();
                        return null != t && t.clientHeight > 0 && (s = i ?? (e.shouldFollowContentGrowth() && 1 >= (0, r$.b)(t) ? "bottom" : function(e, t) {
                            let n = e.scrollTop,
                                a = e.getBoundingClientRect();
                            for (let r of e.querySelectorAll("[data-turn-key]")) {
                                let e = r.getBoundingClientRect(),
                                    o = r.dataset.turnKey;
                                if (null != o && e.height > 0 && e.bottom > a.top && e.top < a.bottom) return {
                                    top: n,
                                    turn: {
                                        key: o,
                                        offset: (0, ae.b)(e.top - a.top, t)
                                    }
                                }
                            }
                            return {
                                top: n
                            }
                        }(t, n().windowZoom))), () => {
                            s = null
                        }
                    },
                    onRestoreStateChange: function(t) {
                        null != s && null != t && (i = s, e.set(o, t))
                    }
                }
            })(e0, ty, tb), D[4] = e0, D[5] = ty, D[6] = tb, D[7] = n) : n = D[7];
            let [tx] = (0, m.useState)(n), tw = (0, c.z)(tx.api$), tC = (0, c.z)(tx.restoreState$), t_ = (0, c.z)(tx.initialOffset$), {
                cancelPendingRestore: tj
            } = tx, tS = null == tC ? ez : null, [tT, tE] = (0, m.useState)(!1);
            D[8] !== ev ? (o = () => ev, D[8] = ev, D[9] = o) : o = D[9];
            let tP = (0, eH.a)(o),
                {
                    revealLatestResponse: tA,
                    scrollToSearchTurn: tM,
                    scrollToDelayedImageCard: tk
                } = ((L = (0, r.c)(18))[0] !== tw || L[1] !== ev ? (M = () => ({
                    async scrollToMessage(e) {
                        let t = ev.find(t => {
                            let {
                                turn: n
                            } = t;
                            return n.messageIds.includes(e)
                        });
                        null != t && null != tw && await tw.scrollToKey(t.turnKey, void 0, {
                            align: "top"
                        })
                    }
                }), k = [ev, tw], L[0] = tw, L[1] = ev, L[2] = M, L[3] = k) : (M = L[2], k = L[3]), (0, m.useImperativeHandle)(H, M, k), L[4] !== tw || L[5] !== ev ? (R = (e, t) => (0, a4.c)(tw, ev.find(t => {
                    let {
                        id: n
                    } = t;
                    return n === e
                })?.turnKey, t), L[4] = tw, L[5] = ev, L[6] = R) : R = L[6], F = (0, eH.a)(R), L[7] !== tw || L[8] !== Y || L[9] !== ev ? (N = async e => {
                    let t = ev.find(t => {
                        let {
                            turn: n
                        } = t;
                        return n.messageIds.includes(e)
                    });
                    null != t && null != tw && await tw.scrollToKey(t.turnKey, t => t.querySelector(`[id="${CSS.escape(`delayed-image-gen-${Y}-${e}`)}"]`), {
                        align: "center"
                    })
                }, L[7] = tw, L[8] = Y, L[9] = ev, L[10] = N) : N = L[10], G = (0, eH.a)(N), L[11] !== tw?.scrollToKey || L[12] !== ev ? (O = function(e) {
                    let t = ev.findLast(sa);
                    return (0, sn.a)(tw?.scrollToKey, t?.turnKey, e)
                }, L[11] = tw?.scrollToKey, L[12] = ev, L[13] = O) : O = L[13], z = O, L[14] !== z || L[15] !== G || L[16] !== F ? (B = {
                    revealLatestResponse: z,
                    scrollToSearchTurn: F,
                    scrollToDelayedImageCard: G
                }, L[14] = z, L[15] = G, L[16] = F, L[17] = B) : B = L[17], B);
            D[10] === Symbol.for("react.memo_cache_sentinel") ? (s = e => (0, a4.a)(tp.current, e), D[10] = s) : s = D[10];
            let tR = (0, eH.a)(s),
                tN = `chatgpt:${Y}`;
            if (D[11] !== tj || D[12] !== Y || D[13] !== tP || D[14] !== tR || D[15] !== eN || D[16] !== e1 || D[17] !== tM || D[18] !== eD || D[19] !== e3 || D[20] !== tN) {
                let e;
                D[22] !== Y || D[23] !== eN || D[24] !== e1 || D[25] !== eD || D[26] !== e3 ? (e = async e => {
                    let t = e1.get(tm.j, Y);
                    !eN && null == eD && null == e3 && null != t && e1.get(aG.b) > 0 && await (0, aF.a)(e1, t, e)
                }, D[22] = Y, D[23] = eN, D[24] = e1, D[25] = eD, D[26] = e3, D[27] = e) : e = D[27], i = function(e) {
                    let {
                        getTurns: t,
                        routeContextId: n,
                        scrollAdapter: a,
                        ensureHistory: r
                    } = e, o = (0, rI.a)({
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
                                            unitId: (0, ri.a)("user", t),
                                            text: n
                                        }]
                                    }
                                    if ("assistant-message" === e.type) {
                                        let n = (0, rE.a)(e.content, aj.b),
                                            a = [],
                                            r = "";
                                        for (; e.content.includes(r);) r += "";
                                        let o = (0, rS.a)(function e(t, n, a, r) {
                                                let o = "",
                                                    s = 0;
                                                for (let i of t) {
                                                    let t = n.indexOf(i.raw, s); - 1 !== t && (o += n.slice(s, t), o += function(t, n, a) {
                                                        var r, o;
                                                        if ("math" === t.type && "text" in t && "string" == typeof t.text) return a(t.text);
                                                        if ("codexDirective" === (r = t).type && "name" in r && "string" == typeof r.name && "attributes" in r && null != r.attributes && "object" == typeof r.attributes) return function(e, t) {
                                                            if (e.name === aj.a) {
                                                                let n = (0, rP.a)(e.attributes),
                                                                    a = (0, rP.b)(e.attributes),
                                                                    r = null != n ? t[n] : null == a ? void 0 : t.find(e => (0, aj.l)(e) === a);
                                                                if (null == r) return "";
                                                                let o = (0, aj.i)(r);
                                                                return "hidden" === o || "block" === o ? "" : (0, aj.j)(r) ?? ""
                                                            }
                                                            return e.name === rj.a ? (0, rT.a)(e.attributes, "label") ?? "" : e.name === rj.b || e.name === rj.c ? "" : e.name === r_.a ? e.text ?? "" : null
                                                        }(t, n) ?? t.raw;
                                                        if ("tokens" in t && Array.isArray(t.tokens)) return e(t.tokens, t.raw, n, a);
                                                        if ("table" === t.type) return e([...t.header, ...t.rows.flat()].flatMap(e => e.tokens), t.raw, n, a);
                                                        if (!("list" === (o = t).type && "items" in o && Array.isArray(o.items))) return t.raw;
                                                        let s = "",
                                                            i = 0;
                                                        for (let r of t.items) {
                                                            let o = t.raw.indexOf(r.raw, i); - 1 !== o && (s += t.raw.slice(i, o), s += e(r.tokens, r.raw, n, a), i = o + r.raw.length)
                                                        }
                                                        return s + t.raw.slice(i)
                                                    }(i, a, r), s = t + i.raw.length)
                                                }
                                                return o + n.slice(s)
                                            }(n, e.content, e.contentReferences, e => (a.push(e), r))),
                                            s = 0 === a.length ? void 0 : o.split(r);
                                        return 0 === o.length && 0 === a.length ? [] : [{
                                            unitId: (0, ri.a)("assistant", t),
                                            text: s?.join(" ") ?? o,
                                            textChunks: s,
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
                        ...o,
                        search: async (e, t) => (await r?.(t?.signal), t?.signal?.throwIfAborted(), o.search(e, t))
                    }
                }({
                    getTurns: tP,
                    routeContextId: tN,
                    scrollAdapter: {
                        scrollToTurn: tM,
                        getTurnContainer: tR,
                        onNavigate: tj
                    },
                    ensureHistory: e
                }), D[11] = tj, D[12] = Y, D[13] = tP, D[14] = tR, D[15] = eN, D[16] = e1, D[17] = tM, D[18] = eD, D[19] = e3, D[20] = tN, D[21] = i
            } else i = D[21];
            let tO = i;
            D[28] !== tO.contextId ? (l = {
                containerRef: tp,
                contextId: tO.contextId
            }, D[28] = tO.contextId, D[29] = l) : l = D[29], (0, a7.a)(l);
            let tB = e9 && null == eK,
                tL = e4 && tB && !te,
                tF = (0, a9.a)();
            D[30] !== Y || D[31] !== eC || D[32] !== ea || D[33] !== X || D[34] !== tF ? (d = {
                conversationId: Y,
                sectionIndex: X,
                hasRenderableTurns: eC,
                isCoveredByFloatingPanel: ea,
                shouldReduceMotion: tF,
                containerRef: tp
            }, D[30] = Y, D[31] = eC, D[32] = ea, D[33] = X, D[34] = tF, D[35] = d) : d = D[35];
            let tG = function(e) {
                    let t, n, a, o = (0, r.c)(12),
                        {
                            conversationId: s,
                            sectionIndex: i,
                            hasRenderableTurns: l,
                            isCoveredByFloatingPanel: c,
                            shouldReduceMotion: d,
                            containerRef: u
                        } = e,
                        h = (0, oY.a)(0);
                    o[0] !== s || o[1] !== i ? (t = {
                        conversationId: s,
                        sectionIndex: i
                    }, o[0] = s, o[1] = i, o[2] = t) : t = o[2];
                    let p = (0, m.useRef)(t);
                    return o[3] !== u || o[4] !== s || o[5] !== l || o[6] !== c || o[7] !== i || o[8] !== h || o[9] !== d ? (n = () => {
                        let e;
                        if (!l) return;
                        let t = p.current;
                        p.current = {
                            conversationId: s,
                            sectionIndex: i
                        };
                        let n = u.current;
                        if (null == n || d || c || t.conversationId !== s || null == t.sectionIndex || null == i || t.sectionIndex === i) return;
                        let a = Math.sign(i - t.sectionIndex),
                            r = () => {
                                Array.from(n.querySelectorAll('[data-markdown-text-style="assistant-message"]')).some(oZ) && 0 !== n.clientWidth && (o.disconnect(), h.set(a * n.clientWidth), e = (0, oX.a)(h, 0, {
                                    duration: .3,
                                    ease: oJ.d
                                }))
                            },
                            o = new MutationObserver(r);
                        return o.observe(n, {
                            childList: !0,
                            characterData: !0,
                            subtree: !0
                        }), r(), () => {
                            o.disconnect(), e?.stop(), h.set(0)
                        }
                    }, a = [s, i, l, d, c, h, u], o[3] = u, o[4] = s, o[5] = l, o[6] = c, o[7] = i, o[8] = h, o[9] = d, o[10] = n, o[11] = a) : (n = o[10], a = o[11]), (0, m.useLayoutEffect)(n, a), h
                }(d),
                tz = tB && te,
                [tD, tH] = (0, m.useState)(null),
                [tW, tU] = (0, m.useState)(null),
                [tq, tK] = (0, m.useState)(null),
                tV = eM && tB && !e_ && !te && !e4,
                [tQ, t$] = (0, m.useState)(null);
            D[36] !== e$ || D[37] !== Y || D[38] !== eC || D[39] !== eN || D[40] !== eU || D[41] !== eq ? (u = eq && !e$ ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(a2.BrowserComposerDisclaimer, {
                    supportsMessageDisclosures: !0,
                    conversationId: Y,
                    hasUserMessage: eC,
                    isTemporaryChat: eN,
                    regulatedConnectorKindOverride: eU
                })
            }) : void 0, D[36] = e$, D[37] = Y, D[38] = eC, D[39] = eN, D[40] = eU, D[41] = eq, D[42] = u) : u = D[42];
            let tY = u;
            D[43] !== Y || D[44] !== eb || D[45] !== eC || D[46] !== e_ || D[47] !== ek || D[48] !== eL || D[49] !== eq || D[50] !== eV ? (h = eC ? null : (0, a.jsx)(rw.a, {
                conversationId: Y,
                errorMessage: eb,
                isWorkConversation: eL,
                showPendingLoadingMessage: eV,
                showRequestUserInputStatus: eq && !e_ && !ek
            }), D[43] = Y, D[44] = eb, D[45] = eC, D[46] = e_, D[47] = ek, D[48] = eL, D[49] = eq, D[50] = eV, D[51] = h) : h = D[51];
            let tX = h;
            D[52] !== Y || D[53] !== eL || D[54] !== eD || D[55] !== e3 ? (p = eL && null == eD && null == e3 ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(a1, {
                    conversationId: Y
                }, Y)
            }) : null, D[52] = Y, D[53] = eL, D[54] = eD, D[55] = e3, D[56] = p) : p = D[56];
            let tJ = p;
            D[57] !== eK || D[58] !== tJ ? (g = null != eK ? (0, a.jsxs)(a.Fragment, {
                children: [tJ, eK]
            }) : null, D[57] = eK, D[58] = tJ, D[59] = g) : g = D[59];
            let tZ = g;
            D[60] !== ee || D[61] !== tZ || D[62] !== e$ || D[63] !== J || D[64] !== Z || D[65] !== K || D[66] !== Y || D[67] !== ec || D[68] !== tY || D[69] !== tX || D[70] !== ev || D[71] !== tJ || D[72] !== tD || D[73] !== eQ || D[74] !== ex || D[75] !== eC || D[76] !== ei || D[77] !== e4 || D[78] !== e_ || D[79] !== eA || D[80] !== ea || D[81] !== er || D[82] !== te || D[83] !== to || D[84] !== eo || D[85] !== eM || D[86] !== ek || D[87] !== eN || D[88] !== eL || D[89] !== eJ || D[90] !== ej || D[91] !== tx || D[92] !== tV || D[93] !== en || D[94] !== tg || D[95] !== eR || D[96] !== tA || D[97] !== e7.isHidden || D[98] !== eD || D[99] !== e3 || D[100] !== e9 || D[101] !== el || D[102] !== tz || D[103] !== tL || D[104] !== U || D[105] !== q || D[106] !== tr || D[107] !== eY || D[108] !== V ? (f = tZ ?? (e9 ? (0, a.jsxs)(oa.a.Provider, {
                value: ev.at(-1) ?? null,
                children: [er || te ? null : (0, a.jsx)(a8.a, {
                    onNavigate: tA
                }, Y), te ? null : Z, (0, a.jsx)(oF, {
                    requiredSystemHints: en,
                    composerRef: K,
                    workspace: V,
                    isInlinePreview: eo,
                    hideModelPicker: ei,
                    showFilePicker: el,
                    disableAutoFocus: ec,
                    conversationId: J,
                    isImageEditComposer: to,
                    disabled: e_,
                    readOnlyPlaceholder: ej,
                    awaitingGptContinuation: e$,
                    headerContent: tJ,
                    aboveComposerContent: (0, a.jsxs)(a.Fragment, {
                        children: [tV ? (0, a.jsx)("div", {
                            ref: tK,
                            className: "empty:hidden"
                        }) : null, ee, !eA && !ex && eC && !e$ && eY, e4 ? null : eQ, tz && tX]
                    }),
                    isFullscreenComposer: te,
                    isHidden: e7.isHidden,
                    trackReadState: U && !ea,
                    trackShownImpressions: q && !ea,
                    isSharedConversation: eM,
                    isSubmitDisabled: ek,
                    retainLiveModelPicker: eR && !to,
                    followupPortalTarget: tD,
                    takeoverDisclaimerRef: t$,
                    showConversationFollowups: null == eD && null == e3 && !eN && !eL && !te,
                    isTemporaryChat: eN,
                    isWorkConversation: eL,
                    responseSpacerState: tg,
                    renderTranscript: e => {
                        let {
                            isVisible: t
                        } = e;
                        return (0, a.jsx)(rD, {
                            entries: ev,
                            historyLoader: eN || null != eD || null != e3 ? null : (0, a.jsx)(oV.a, {
                                conversationId: Y
                            }),
                            isVisible: t,
                            rendersWidgets: "floating" === tr,
                            onVisibilityChange: tn
                        }, Y)
                    },
                    showVoiceStage: !tL,
                    voiceDisclaimer: e4 && !tL ? tY : void 0,
                    onSubmitAccepted: e => {
                        tx.acceptSubmit(), eJ?.(e)
                    }
                }, `${J}:${to?"image-edit":"chat"}`)]
            }) : tJ), D[60] = ee, D[61] = tZ, D[62] = e$, D[63] = J, D[64] = Z, D[65] = K, D[66] = Y, D[67] = ec, D[68] = tY, D[69] = tX, D[70] = ev, D[71] = tJ, D[72] = tD, D[73] = eQ, D[74] = ex, D[75] = eC, D[76] = ei, D[77] = e4, D[78] = e_, D[79] = eA, D[80] = ea, D[81] = er, D[82] = te, D[83] = to, D[84] = eo, D[85] = eM, D[86] = ek, D[87] = eN, D[88] = eL, D[89] = eJ, D[90] = ej, D[91] = tx, D[92] = tV, D[93] = en, D[94] = tg, D[95] = eR, D[96] = tA, D[97] = e7.isHidden, D[98] = eD, D[99] = e3, D[100] = e9, D[101] = el, D[102] = tz, D[103] = tL, D[104] = U, D[105] = q, D[106] = tr, D[107] = eY, D[108] = V, D[109] = f) : f = D[109];
            let t0 = f;
            D[110] !== Y || D[111] !== ea || D[112] !== eo || D[113] !== e2 || D[114] !== eD || D[115] !== e3 ? (v = void 0, D[110] = Y, D[111] = ea, D[112] = eo, D[113] = e2, D[114] = eD, D[115] = e3, D[116] = v) : v = D[116];
            let t1 = v,
                t2 = ea || void 0;
            D[117] === Symbol.for("react.memo_cache_sentinel") ? (y = null, D[117] = y) : y = D[117], D[118] !== Y || D[119] !== ea || D[120] !== te || D[121] !== U ? (b = !U || te || ea ? null : (0, a.jsx)(on.a, {
                conversationId: Y
            }), D[118] = Y, D[119] = ea, D[120] = te, D[121] = U, D[122] = b) : b = D[122], D[123] !== eK || D[124] !== Y || D[125] !== eo || D[126] !== eD || D[127] !== e3 ? (x = eo || null != eD || null != e3 || null != eK ? null : (0, a.jsx)(ot, {
                conversationId: Y
            }, Y), D[123] = eK, D[124] = Y, D[125] = eo, D[126] = eD, D[127] = e3, D[128] = x) : x = D[128], D[129] !== Y || D[130] !== eA || D[131] !== eo || D[132] !== eN || D[133] !== eD || D[134] !== e3 ? (w = eo || eA || eN || null != eD || null != e3 ? null : (0, a.jsx)(oQ, {
                conversationId: Y
            }), D[129] = Y, D[130] = eA, D[131] = eo, D[132] = eN, D[133] = eD, D[134] = e3, D[135] = w) : w = D[135], D[136] !== Y || D[137] !== ev || D[138] !== tT || D[139] !== eP || D[140] !== eA || D[141] !== eo || D[142] !== tA || D[143] !== eD || D[144] !== e3 || D[145] !== tw ? (C = eo || eA || null != eD || null != e3 ? null : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(ao, {
                    conversationId: Y,
                    entries: ev,
                    turnListApi: tw
                }), (0, a.jsx)(rn.a, {
                    ready: !eP && tT && null != tw && ev.length > 0,
                    onNavigate: tA
                })]
            }), D[136] = Y, D[137] = ev, D[138] = tT, D[139] = eP, D[140] = eA, D[141] = eo, D[142] = tA, D[143] = eD, D[144] = e3, D[145] = tw, D[146] = C) : C = D[146], D[147] !== eK || D[148] !== tj || D[149] !== tc || D[150] !== J || D[151] !== $ || D[152] !== tl || D[153] !== Y || D[154] !== ef || D[155] !== tO || D[156] !== tY || D[157] !== tX || D[158] !== ev || D[159] !== t0 || D[160] !== ex || D[161] !== eC || D[162] !== et || D[163] !== td || D[164] !== t_ || D[165] !== tS || D[166] !== e4 || D[167] !== e5 || D[168] !== e_ || D[169] !== eP || D[170] !== eA || D[171] !== ea || D[172] !== er || D[173] !== te || D[174] !== eo || D[175] !== eM || D[176] !== eN || D[177] !== eO || D[178] !== eL || D[179] !== eS || D[180] !== t1 || D[181] !== eX || D[182] !== ew || D[183] !== eF || D[184] !== W || D[185] !== tx || D[186] !== tq || D[187] !== tW || D[188] !== tV || D[189] !== tg || D[190] !== e7.isChatPaneHidden || D[191] !== e1 || D[192] !== eu || D[193] !== tk || D[194] !== tG || D[195] !== eD || D[196] !== e3 || D[197] !== Q || D[198] !== tF || D[199] !== eq || D[200] !== e9 || D[201] !== tu || D[202] !== tB || D[203] !== tz || D[204] !== tL || D[205] !== tQ || D[206] !== ed || D[207] !== tw || D[208] !== V ? (_ = V?.fullscreenContent != null ? (0, a.jsxs)(a.Fragment, {
                children: [!Q && V.fullscreenContent, t0]
            }) : (0, a.jsxs)(ra.a, {
                viewportOverlay: er || eo || eL || null != eD || null != e3 || null != eK || ea || te ? null : (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(os, {
                        conversationId: Y
                    }, Y)
                }),
                hideTranscript: er,
                active: !eA && (!eC || null != tw),
                presentation: ed ?? (eo ? "compact" : "default"),
                contentX: $,
                supportsComposerExpansion: tB && !te && null == V,
                footerPlacement: tc ? td : "bottom",
                initialOffset: t_,
                scrollOrigin: eu,
                onScroll: tx.onScroll,
                onUserScrollIntent: tj,
                scrollToBottomButton: !e9 || te || tL ? void 0 : {
                    isWorking: eO
                },
                threadEndContent: e4 ? void 0 : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        ref: tH,
                        className: eB.a
                    }), null == tQ ? tY : (0, n9.createPortal)(tY, tQ)]
                }),
                footerLeadingContent: tL ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)("div", {
                            className: eB.a,
                            children: (0, a.jsx)(re.a, {})
                        })
                    }), (0, a.jsx)("div", {
                        className: "overflow-hidden electron:[scrollbar-gutter:stable_both-edges]",
                        children: tY
                    })]
                }) : t1,
                footer: t0,
                children: [eo || eA || null != eD ? null : (0, a.jsx)(rx, {
                    conversationId: Y,
                    entries: ev,
                    isConversationFetching: eP,
                    turnListApi: tw
                }), (0, a.jsxs)(n8.a.div, {
                    ref: tp,
                    style: {
                        x: tG
                    },
                    "data-chatgpt-conversation-selection-target": Y,
                    className: (0, n7.b)("flex min-h-full flex-1 flex-col gap-1.5 pb-5", eo && "pt-5"),
                    "data-thread-find-target": "conversation",
                    onFocusCapture: () => {
                        (0, a6.K)(e1, "conversation")
                    },
                    onMouseDownCapture: () => {
                        (0, a6.K)(e1, "conversation")
                    },
                    children: [(0, a.jsxs)(m.Suspense, {
                        fallback: (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(es.i, {
                                name: "conversation content"
                            }), (0, a.jsx)(tI.LoadingPage, {
                                debugName: "ChatGptConversationPage",
                                fillParent: !0
                            })]
                        }),
                        children: [eo || eA ? null : (0, a.jsx)(a5.a, {
                            conversationSource: tO
                        }), ea || e7.isChatPaneHidden || eN || null != eD || null != e3 ? null : et ?? (0, a.jsx)(oV.a, {
                            conversationId: Y
                        }), (0, a.jsx)(st.b, {
                            conversationId: Y
                        }), (null != eD || null != e3) && eC ? (0, a.jsx)(se, {
                            sharedConversationId: eD
                        }) : null, null == eF ? null : (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)("div", {
                                className: eB.a,
                                children: eF
                            })
                        }), null == tl || eA ? null : (0, a.jsx)(rr.a, {
                            conversationId: Y,
                            branchSource: {
                                conversationId: tl.metadata.source_conversation_id,
                                title: tl.metadata.source_conversation_title,
                                gizmoId: tl.metadata.source_conversation_gizmo_id,
                                ownerId: tl.metadata.source_conversation_owner_id
                            }
                        }), ex ? (0, a.jsx)(aX, {
                            isFetching: eP,
                            isSharedConversation: eM,
                            onRetry: ew
                        }) : eA ? (0, a.jsx)("div", {
                            "aria-busy": "true",
                            "aria-label": ef,
                            className: "relative min-h-0 flex-1",
                            role: "status",
                            children: (0, a.jsx)(tI.LoadingPage, {
                                debugName: "ChatGptConversationPage",
                                fillParent: !0
                            })
                        }) : eC ? (0, a.jsxs)(oq.a, {
                            value: tk,
                            children: [eo || ea ? null : (0, a.jsxs)(a.Fragment, {
                                children: [eN || null != eD || null != e3 ? null : (0, a.jsx)(a.Fragment, {
                                    children: (0, a.jsx)(aq, {
                                        conversationId: Y
                                    })
                                }), (0, a.jsx)(aH, {
                                    entries: ev,
                                    title: W,
                                    TurnRowComponent: rz
                                })]
                            }), (0, a.jsx)(o$.a, {
                                enabled: tV,
                                aboveComposer: tq,
                                belowMessage: tW,
                                children: (0, a.jsx)(r4, {
                                    viewportRef: th,
                                    isTurnActive: eO,
                                    conversationId: Y,
                                    entries: ev,
                                    readingPosition: tx,
                                    isInlinePreview: eo,
                                    onVisibleContentReady: () => tE(!0),
                                    responseSpacerState: tg
                                })
                            }), tV ? (0, a.jsx)("div", {
                                ref: tU,
                                className: "empty:hidden"
                            }) : null]
                        }) : tu && null == tl && (0, a.jsx)("div", {
                            className: "rounded-xl border border-default bg-surface-secondary/92 p-4 text-sm text-codex-description",
                            children: (0, a.jsx)(ey.a, {
                                id: "chatgptConversations.emptyConversation",
                                defaultMessage: "No renderable ChatGPT messages were found in this conversation"
                            })
                        }), !tz && tX, (0, a.jsx)(r9.a, {
                            conversationId: J,
                            isWorkConversation: eL
                        }), eq && !e_ ? (0, a.jsx)(o5, {
                            conversationId: Y,
                            moreDetailsEnabled: eS,
                            onAddSelectedText: eX
                        }) : null]
                    }), eo ? null : (0, a.jsx)(rC.a, {
                        preserveResponseViewport: e => th.current?.holdForResponse(e) ?? !1,
                        conversationId: Y,
                        initialPlacementKey: tS,
                        isActiveVoiceConversation: e4 && e5,
                        isLoadingHistory: eA,
                        latestUserTurnKey: ev.findLast(ss)?.turnKey,
                        onResponseSpacerStateChange: tf
                    }), tL ? (0, a.jsx)(n8.a.div, {
                        className: "pointer-events-none shrink-0",
                        "aria-hidden": !0,
                        initial: {
                            height: 0
                        },
                        animate: {
                            height: 112
                        },
                        transition: tF ? rt.c : rt.b
                    }) : null]
                })]
            }), D[147] = eK, D[148] = tj, D[149] = tc, D[150] = J, D[151] = $, D[152] = tl, D[153] = Y, D[154] = ef, D[155] = tO, D[156] = tY, D[157] = tX, D[158] = ev, D[159] = t0, D[160] = ex, D[161] = eC, D[162] = et, D[163] = td, D[164] = t_, D[165] = tS, D[166] = e4, D[167] = e5, D[168] = e_, D[169] = eP, D[170] = eA, D[171] = ea, D[172] = er, D[173] = te, D[174] = eo, D[175] = eM, D[176] = eN, D[177] = eO, D[178] = eL, D[179] = eS, D[180] = t1, D[181] = eX, D[182] = ew, D[183] = eF, D[184] = W, D[185] = tx, D[186] = tq, D[187] = tW, D[188] = tV, D[189] = tg, D[190] = e7.isChatPaneHidden, D[191] = e1, D[192] = eu, D[193] = tk, D[194] = tG, D[195] = eD, D[196] = e3, D[197] = Q, D[198] = tF, D[199] = eq, D[200] = e9, D[201] = tu, D[202] = tB, D[203] = tz, D[204] = tL, D[205] = tQ, D[206] = ed, D[207] = tw, D[208] = V, D[209] = _) : _ = D[209], D[210] !== ea || D[211] !== t2 || D[212] !== b || D[213] !== x || D[214] !== w || D[215] !== C || D[216] !== _ ? (S = (0, a.jsxs)("div", {
                className: "contents",
                "aria-hidden": t2,
                inert: ea,
                children: [y, b, x, w, C, _]
            }), D[210] = ea, D[211] = t2, D[212] = b, D[213] = x, D[214] = w, D[215] = C, D[216] = _, D[217] = S) : S = D[217];
            let t3 = S,
                t4 = "main" === tr;
            D[218] !== t4 ? (I = {
                presentation: "main",
                rendersWidgets: t4
            }, D[218] = t4, D[219] = I) : I = D[219];
            let t5 = !ta && (er || ea || e7.isChatPaneHidden || V?.fullscreenContent != null);
            return D[220] !== t5 ? (T = (0, a.jsx)(es.i, {
                name: "conversation hidden",
                active: t5
            }), D[220] = t5, D[221] = T) : T = D[221], D[222] !== t3 ? (E = (0, a.jsx)(a3.a, {
                children: t3
            }), D[222] = t3, D[223] = E) : E = D[223], D[224] !== I || D[225] !== T || D[226] !== E ? (A = (0, a.jsxs)(c.b, {
                scope: rk,
                value: I,
                children: [T, E]
            }), D[224] = I, D[225] = T, D[226] = E, D[227] = A) : A = D[227], A
        }

        function ss(e) {
            let {
                turn: t
            } = e;
            return t.items.some(si)
        }

        function si(e) {
            return "user-message" === e.type
        }
        var sl = n("gCr7");
        n("i1of");
        var sc = n("alJ6"),
            sd = n("u9iS"),
            su = n("fNPc"),
            sh = n("vVgo"),
            sp = n("T33u"),
            sm = n("EpL9"),
            sg = n("svjy");

        function sf(e) {
            let {
                conversationId: t,
                courseId: n
            } = e;
            return `chatgpt-learning-course:${JSON.stringify([t,n])}`
        }
        let sv = (0, c.d)(ep.a, (e, t) => {
                let {
                    get: n
                } = t;
                return n(e3.h) && n(e3.i) && n(e2.l.activeTab$)?.tabId === sf(e)
            }),
            sy = (0, tB.a)(async () => {
                let {
                    CoursePanelTab: e
                } = await Promise.all([n.e(753405), n.e(321957), n.e(585419), n.e(877700), n.e(353230), n.e(81461), n.e(882456), n.e(137889), n.e(744644), n.e(148673), n.e(523660), n.e(909395), n.e(212487), n.e(17983), n.e(167649), n.e(46150), n.e(114663)]).then(n.bind(n, "lbEC"));
                return e
            }, {
                propagateLoadError: !0
            }),
            sb = (0, sm.j)("chatgpt-learning-course", sy, {
                dropDestinations: ["right"],
                isAvailable: (e, t) => "chatgpt-thread" === e.value.routeKind && (null == t || e.value.conversationId === t.conversationId),
                paneWidth: () => ({
                    defaultWidth: 480,
                    storageKey: "app-shell:learning-course-width"
                }),
                showInNewTabLauncher: !1,
                open: sx
            });

        function sx(e, t) {
            let {
                conversationId: n,
                courseId: r
            } = t, {
                preserveFocus: o = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, s = e.get(S.f), i = e.get(S.j), l = () => "chatgpt-thread" === e.value.routeKind && e.value.conversationId === n && e.get(eS.c)?.pathname === e.value.pathname && e.get(S.f) === s && e.get(S.j) === i;
            if (!l() || "" === r) return;
            let c = sf({
                conversationId: n,
                courseId: r
            });
            e.get(sv, {
                conversationId: n,
                courseId: r
            }) ? e2.l.closeTab(e, c) : (0, e2.h)(e, sb, {
                target: "right",
                revealAndFocus: !0,
                preserveFocus: o,
                shouldOpen: l,
                id: c,
                icon: (0, a.jsx)(tO.ob, {}),
                title: e.get(sg.a).formatMessage({
                    id: "chatgptConversations.coursePanel.title",
                    defaultMessage: "Lesson plan"
                }),
                props: {
                    conversationId: n,
                    courseId: r,
                    accountId: s,
                    userId: i
                }
            })
        }
        var sw = n("MgyE"),
            sC = n("gyrn"),
            s_ = n("ckwE"),
            sj = n("kHi2");

        function sS(e) {
            let t, n = (0, r.c)(3),
                {
                    children: o
                } = e,
                [s] = (0, m.useState)(sI);
            return n[0] !== s || n[1] !== o ? (t = (0, a.jsx)(az.a, {
                value: s,
                children: o
            }), n[0] = s, n[1] = o, n[2] = t) : t = n[2], t
        }

        function sI() {
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

        function sT(e) {
            let t, n, o, s = (0, r.c)(8),
                {
                    children: i,
                    courseChatId: l
                } = e,
                d = (0, c.y)(ep.a);
            s[0] !== l || s[1] !== d ? (t = "chatgpt-thread" === d.value.routeKind && d.value.conversationId === l ? d.get(sj.b) : void 0, s[0] = l, s[1] = d, s[2] = t) : t = s[2];
            let u = t;
            return s[3] !== i ? (n = (0, a.jsx)(sS, {
                children: i
            }), s[3] = i, s[4] = n) : n = s[4], s[5] !== u || s[6] !== n ? (o = (0, a.jsx)(s_.a, {
                binding: u,
                children: n
            }), s[5] = u, s[6] = n, s[7] = o) : o = s[7], o
        }
        var sE = n("MDmT"),
            sP = n("Fjze");

        function sA(e) {
            let t, n, a, o = (0, r.c)(7),
                {
                    sharedConversationId: s
                } = e,
                i = (0, c.y)(eI.a),
                l = null != s;
            o[0] !== i || o[1] !== s ? (t = () => {
                null != s && (nb.Request.safePost("/received-shares/open", {
                    requestBody: {
                        share_kind: "conversation",
                        share_id: s
                    }
                }).then(() => i.queryClient.invalidateQueries({
                    queryKey: ["opened-shared-links"]
                })).catch(sM), (0, el.a)(i, sP.a, {
                    sharedConversationId: s
                }))
            }, o[0] = i, o[1] = s, o[2] = t) : t = o[2];
            let d = (0, m.useEffectEvent)(t);
            return o[3] !== d ? (n = () => {
                d()
            }, o[3] = d, o[4] = n) : n = o[4], o[5] !== l ? (a = [l], o[5] = l, o[6] = a) : a = o[6], (0, m.useEffect)(n, a), null
        }

        function sM() {}
        var sk = n("GigQ"),
            sR = n("JKdL"),
            sN = n("d107"),
            sO = n("FGv0"),
            sB = n("r9i9"),
            sL = n("tdfh"),
            sF = n("uQqo"),
            sG = n("yi1v"),
            sz = n("TRrE");

        function sD(e) {
            let t, o, s, i, l, d = (0, r.c)(16),
                {
                    data: u
                } = e,
                h = (0, c.y)(eI.a),
                p = (0, g.a)();
            d[0] !== p ? (t = p.formatMessage(ex.a.headerShare), d[0] = p, d[1] = t) : t = d[1];
            let f = t,
                [v, y] = (0, m.useState)(!1);
            return d[2] !== u || d[3] !== v || d[4] !== h ? (o = () => {
                v || (y(!0), (async function(e, t) {
                    let a = t.sharedPost,
                        [r, ...o] = a?.attachments[0]?.kind === "media_generation" ? (0, sF.a)(a, (0, sF.b)(a)) : [],
                        s = () => (0, sB.j)(t.conversation, t.conversation.current_node ?? t.dialogProps.currentNodeId, 1 / 0, void 0, (0, n6.b)(e.get, t.dialogProps.serverConversationId)),
                        i = crypto.randomUUID();
                    (0, o7.c)(e, {
                        attachmentType: t.attachmentType,
                        contentType: t.contentType,
                        shareId: t.shareId,
                        shareSessionId: i
                    });
                    let l = t.dialogProps.receiverShareLink;
                    if ((0, sG.a)() && null != l && ("conversation" === l.contentType || "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_MESSAGE_SLICE" === t.attachmentType)) {
                        if ("unsupported" !== await (0, sG.b)(e, {
                                url: l.shareLinkUrl,
                                title: t.dialogProps.title ?? void 0
                            }, {
                                actor: "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER",
                                attachmentType: t.attachmentType,
                                contentType: t.contentType,
                                shareId: t.shareId,
                                shareSessionId: i,
                                source: "CHATGPT_SHARE_FLOW_SOURCE_RECEIVER_HEADER"
                            })) return;
                        if ("conversation" === l.contentType) return void(0, ny.f)(e, sL.a, {
                            ...t.dialogProps,
                            shareSessionId: i
                        })
                    }
                    if (l?.contentType === "conversation") {
                        let a = (0, o7.b)(e, {
                                actor: "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER",
                                shareId: t.shareId,
                                shareSessionId: i,
                                source: "CHATGPT_SHARE_FLOW_SOURCE_RECEIVER_HEADER",
                                usedExistingLink: !0,
                                omitSheetType: !0
                            }),
                            r = await (0, sO.a)(Promise.resolve(l.shareLinkUrl));
                        if (a({
                                result: r ? "link-copied" : "copy-failed",
                                shareId: t.shareId
                            }), r) {
                            let {
                                showConversationShareCopiedToast: t
                            } = await n.e(555532).then(n.bind(n, "euaP"));
                            t(e, null, !0 === l.isWorkspaceOnly)
                        } else(0, ny.f)(e, sL.a, {
                            ...t.dialogProps,
                            previewTurns: s(),
                            recoveryShareLink: l,
                            shareSessionId: i
                        });
                        return
                    }(0, ny.f)(e, sL.a, {
                        ...t.dialogProps,
                        image: r?.src == null ? void 0 : {
                            alt: t.dialogProps.title ?? "",
                            item: r,
                            previewSrc: r.src,
                            additionalPublishedPreviewUrls: o.flatMap(e => null == e.src ? [] : [e.src])
                        },
                        previewTurns: null != r ? void 0 : s(),
                        privacyNotices: (0, sB.k)({
                            conversation: t.conversation,
                            projectId: null
                        }),
                        shareSessionId: i
                    })
                })(h, u).finally(() => y(!1)))
            }, d[2] = u, d[3] = v, d[4] = h, d[5] = o) : o = d[5], d[6] !== v ? (s = v ? null : (0, a.jsx)(ej.a, {
                asset: sz.a
            }), d[6] = v, d[7] = s) : s = d[7], d[8] !== v || d[9] !== f || d[10] !== o || d[11] !== s ? (i = (0, a.jsx)(tN.a, {
                "aria-label": f,
                color: "ghostActive",
                loading: v,
                size: "toolbar",
                uniform: !0,
                onClick: o,
                children: s
            }), d[8] = v, d[9] = f, d[10] = o, d[11] = s, d[12] = i) : i = d[12], d[13] !== f || d[14] !== i ? (l = (0, a.jsx)(tk.a, {
                content: f,
                children: i
            }), d[13] = f, d[14] = i, d[15] = l) : l = d[15], l
        }
        var sH = n("MVHH"),
            sW = n("rhKI"),
            sU = n("PP3M"),
            sq = n("jAnS"),
            sK = n("CFOe"),
            sV = n("JNtf"),
            sQ = n("mUDD");

        function s$(e) {
            let t, n, o, s, i, l, c, d, u, h, p, m, g, f = (0, r.c)(31),
                {
                    canSave: v,
                    isPending: y,
                    onCancel: b,
                    onClose: x,
                    onSave: w
                } = e;
            f[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(ey.a, {
                id: "chatgptConversations.temporaryChat.save.close",
                defaultMessage: "Close"
            }), f[0] = t) : t = f[0], f[1] !== y || f[2] !== x ? (n = e => {
                e || y || x()
            }, f[1] = y, f[2] = x, f[3] = n) : n = f[3];
            let C = !y;
            f[4] !== v || f[5] !== w ? (o = e => {
                e.preventDefault(), v && w()
            }, f[4] = v, f[5] = w, f[6] = o) : o = f[6], f[7] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, a.jsx)(sV.e, {
                children: (0, a.jsx)(ey.a, {
                    id: "chatgptConversations.temporaryChat.save.title",
                    defaultMessage: "Save chat?"
                })
            }), f[7] = s) : s = f[7], f[8] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(sQ.e, {
                children: (0, a.jsx)(sQ.d, {
                    className: "select-none",
                    title: s,
                    subtitle: (0, a.jsx)(sV.d, {
                        children: (0, a.jsx)(ey.a, {
                            id: "chatgptConversations.temporaryChat.save.description.regularChatSettings",
                            defaultMessage: "This chat will now be included in your history. It will follow your memory and model training settings used for regular chats."
                        })
                    })
                })
            }), f[8] = i) : i = f[8], f[9] !== b || f[10] !== x ? (l = () => {
                b?.(), x()
            }, f[9] = b, f[10] = x, f[11] = l) : l = f[11], f[12] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)(ey.a, {
                id: "chatgptConversations.temporaryChat.save.cancel",
                defaultMessage: "Cancel"
            }), f[12] = c) : c = f[12], f[13] !== y || f[14] !== l ? (d = (0, a.jsx)(tN.a, {
                color: "secondary",
                disabled: y,
                onClick: l,
                children: c
            }), f[13] = y, f[14] = l, f[15] = d) : d = f[15];
            let _ = !v;
            return f[16] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, a.jsx)(ey.a, {
                id: "chatgptConversations.temporaryChat.save.confirm",
                defaultMessage: "Save"
            }), f[16] = u) : u = f[16], f[17] !== y || f[18] !== _ ? (h = (0, a.jsx)(tN.a, {
                color: "primary",
                disabled: _,
                loading: y,
                type: "submit",
                children: u
            }), f[17] = y, f[18] = _, f[19] = h) : h = f[19], f[20] !== h || f[21] !== d ? (p = (0, a.jsx)(sQ.e, {
                children: (0, a.jsxs)(sQ.c, {
                    children: [d, h]
                })
            }), f[20] = h, f[21] = d, f[22] = p) : p = f[22], f[23] !== p || f[24] !== o ? (m = (0, a.jsxs)(sQ.b, {
                as: "form",
                onSubmit: o,
                children: [i, p]
            }), f[23] = p, f[24] = o, f[25] = m) : m = f[25], f[26] !== y || f[27] !== m || f[28] !== n || f[29] !== C ? (g = (0, a.jsx)(sV.a, {
                open: !0,
                dialogCloseLabel: t,
                onOpenChange: n,
                shouldIgnoreClickOutside: y,
                showDialogClose: C,
                size: "narrow",
                children: m
            }), f[26] = y, f[27] = m, f[28] = n, f[29] = C, f[30] = g) : g = f[30], g
        }

        function sY(e) {
            (0, tP.e)(e).catch(() => {
                ti.a.warning("Failed to acknowledge temporary chat save coachmark")
            })
        }

        function sX(e) {
            let t, n = (0, r.c)(2),
                {
                    conversationId: o
                } = e;
            return n[0] !== o ? (t = (0, a.jsxs)(a.Fragment, {
                children: [null, (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(sJ, {
                        conversationId: o
                    })
                })]
            }), n[0] = o, n[1] = t) : t = n[1], t
        }

        function sJ(e) {
            let t, n = (0, r.c)(2),
                {
                    conversationId: o
                } = e;
            return (0, c.z)(sU.e) ? (n[0] !== o ? (t = (0, a.jsx)(sZ, {
                conversationId: o
            }), n[0] = o, n[1] = t) : t = n[1], t) : null
        }

        function sZ(e) {
            let t, n, o, s, i, l, d, u, h, p, v, y, b, x = (0, r.c)(49),
                {
                    conversationId: w
                } = e,
                C = (0, c.y)(eI.a),
                _ = (0, g.a)(),
                j = (0, f._)(),
                [S, I] = (0, m.useState)(!1),
                [T, E] = (0, m.useState)(!1),
                [P, A] = (0, m.useState)(!1),
                [M, k] = (0, m.useState)(!1),
                R = (0, m.useRef)(!1),
                N = (0, c.z)(nC.p).data,
                O = (0, c.x)(tm.j, w),
                B = (0, c.x)(tm.Y, w),
                L = (0, c.x)(tm.J, w),
                F = (0, c.x)(t_.j, w);
            x[0] !== w || x[1] !== C ? (t = {
                mutationFn: e => {
                    let {
                        sourceConversationId: t,
                        selectedLeafId: n
                    } = e;
                    if (C.get(tm.J, w) || C.get(t_.j, w) || t !== C.get(tm.j, w) || n !== C.get(tm.Y, w)) throw Error("Cannot save an unavailable temporary chat message");
                    return nb.Request.safePost("/conversation/{conversation_id}/save", {
                        parameters: {
                            path: {
                                conversation_id: t
                            }
                        },
                        requestBody: {
                            selected_leaf_id: n
                        },
                        isExpectedError: s4
                    }).then(s3)
                },
                retry: s2
            }, x[0] = w, x[1] = C, x[2] = t) : t = x[2];
            let {
                mutateAsync: G,
                isPending: z
            } = (0, ev.a)(t), D = null != O && null != B && !L && !F && !z && !T;
            x[3] !== _ ? (n = _.formatMessage({
                id: "chatgptConversations.temporaryChat.save.button",
                defaultMessage: "Save chat"
            }), x[3] = _, x[4] = n) : n = x[4];
            let H = n;
            x[5] !== N?.eligibleAnnouncements ? (o = N?.eligibleAnnouncements?.includes(nC.h), x[5] = N?.eligibleAnnouncements, x[6] = o) : o = x[6];
            let W = !0 === o,
                K = !M && (P || W && D);
            x[7] !== w || x[8] !== P || x[9] !== C || x[10] !== K ? (s = () => {
                if (!K || P || R.current) return;
                let e = !1;
                return queueMicrotask(() => {
                    e || R.current || (R.current = !0, (0, el.a)(C, sH.Bb, {
                        personalizationMode: (0, sW.a)((0, sU.k)(C, w))
                    }), A(!0), sY(C))
                }), () => {
                    e = !0
                }
            }, i = [w, P, C, K], x[7] = w, x[8] = P, x[9] = C, x[10] = K, x[11] = s, x[12] = i) : (s = x[11], i = x[12]), (0, m.useEffect)(s, i), x[13] !== C ? (l = () => {
                k(!0), R.current || (R.current = !0, sY(C))
            }, x[13] = C, x[14] = l) : l = x[14];
            let V = l;
            x[15] !== D || x[16] !== w || x[17] !== _ || x[18] !== j || x[19] !== G || x[20] !== C || x[21] !== B || x[22] !== O ? (d = async function() {
                let e;
                if (!D || null == O || null == B) return;
                let t = (0, sW.a)((0, sU.k)(C, w));
                (0, el.a)(C, sH.Cb, {
                    personalizationMode: t
                });
                try {
                    e = (await G({
                        sourceConversationId: O,
                        selectedLeafId: B
                    })).conversation_id
                } catch (e) {
                    (0, el.a)(C, sH.Db, {
                        personalizationMode: t,
                        failureCategory: (0, sW.b)(e)
                    }), C.get(q.f).danger(_.formatMessage({
                        id: "chatgptConversations.temporaryChat.save.error",
                        defaultMessage: "Couldn't save this chat. Please try again."
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.temporaryChat.save.error"
                        }
                    });
                    return
                }
                E(!0), I(!1), (0, eC.G)(C), (0, eC.J)(C, O, "remove"), (0, eC.J)(C, e, "refresh"), j((0, sq.c)(e), {
                    replace: !0
                }), C.get(q.f).success(_.formatMessage({
                    id: "chatgptConversations.temporaryChat.save.success",
                    defaultMessage: "Chat saved. It will now appear in your chat history."
                })), nb.Request.safePost("/conversation/gen_title/{conversation_id}", {
                    parameters: {
                        path: {
                            conversation_id: e
                        }
                    },
                    requestBody: {
                        message_id: B
                    }
                }).then(s1).then(t => {
                    (0, tm.bc)({
                        scope: C,
                        conversationId: e,
                        title: t
                    }), C.query.setData(tP.chatGptConversationQueryById$, e, e => null == e ? e : {
                        ...e,
                        title: t
                    }), (0, eC.G)(C), (0, eC.J)(C, e, "refresh")
                }).catch(s0)
            }, x[15] = D, x[16] = w, x[17] = _, x[18] = j, x[19] = G, x[20] = C, x[21] = B, x[22] = O, x[23] = d) : d = x[23];
            let Q = d,
                $ = !D;
            x[24] !== w || x[25] !== C || x[26] !== K ? (u = () => {
                (0, el.a)(C, sH.Fb, {
                    personalizationMode: (0, sW.a)((0, sU.k)(C, w)),
                    coachMarkVisible: K
                }), I(!0)
            }, x[24] = w, x[25] = C, x[26] = K, x[27] = u) : u = x[27], x[28] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, a.jsx)(U.b, {
                icon: {
                    16: tO.qb,
                    20: tO.rb
                }
            }), x[28] = h) : h = x[28], x[29] !== H || x[30] !== $ || x[31] !== u ? (p = (0, a.jsx)(tN.a, {
                "aria-label": H,
                color: "toolbar",
                disabled: $,
                size: "toolbar",
                uniform: !0,
                onClick: u,
                children: h
            }), x[29] = H, x[30] = $, x[31] = u, x[32] = p) : p = x[32];
            let Y = p;
            return x[33] !== V || x[34] !== _ || x[35] !== H || x[36] !== Y || x[37] !== K ? (v = K ? (0, a.jsx)(sK.a, {
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
            }) : (0, a.jsx)(tk.a, {
                content: H,
                children: Y
            }), x[33] = V, x[34] = _, x[35] = H, x[36] = Y, x[37] = K, x[38] = v) : v = x[38], x[39] !== D || x[40] !== w || x[41] !== Q || x[42] !== S || x[43] !== z || x[44] !== C ? (y = S ? (0, a.jsx)(s$, {
                canSave: D,
                isPending: z,
                onCancel: () => {
                    (0, el.a)(C, sH.Ab, {
                        personalizationMode: (0, sW.a)((0, sU.k)(C, w))
                    })
                },
                onClose: () => I(!1),
                onSave: () => void Q()
            }) : null, x[39] = D, x[40] = w, x[41] = Q, x[42] = S, x[43] = z, x[44] = C, x[45] = y) : y = x[45], x[46] !== v || x[47] !== y ? (b = (0, a.jsxs)(a.Fragment, {
                children: [v, y]
            }), x[46] = v, x[47] = y, x[48] = b) : b = x[48], b
        }

        function s0() {}

        function s1(e) {
            return ro.object({
                title: ro.string()
            }).parse(e).title
        }

        function s2(e, t) {
            return e < 1 && t instanceof eK.FetchError && 412 === t.status && "conversation_precondition_failed" === t.errorCode
        }

        function s3(e) {
            return ro.object({
                conversation_id: ro.string().min(1)
            }).parse(e)
        }

        function s4(e) {
            return 412 === e.status && "conversation_precondition_failed" === e.errorCode
        }
        var s5 = n("J8FU"),
            s6 = n("Aluh"),
            s7 = n("mG6J");

        function s8(e) {
            let t, n, o = (0, r.c)(14),
                {
                    conversationId: s,
                    shouldBlockExternalEgress: i,
                    widgets: l
                } = e,
                u = (0, c.z)(s6.b);
            if (i) return null;
            if (o[0] !== u || o[1] !== s || o[2] !== l) {
                let e, n, r;
                o[4] !== u || o[5] !== s ? (e = e => u.has((0, r1.e)(s, e.messageId)), o[4] = u, o[5] = s, o[6] = e) : e = o[6];
                let i = l.filter(e),
                    c = `chatgpt:${s}`;
                o[7] !== c ? (n = (0, d.Ue)(c), o[7] = c, o[8] = n) : n = o[8];
                let h = n;
                o[9] !== h || o[10] !== s ? (r = e => (0, a.jsx)(s7.b, {
                    conversationId: h,
                    chatGptConversationId: s,
                    hostId: "local",
                    item: e
                }, e.messageId), o[9] = h, o[10] = s, o[11] = r) : r = o[11], t = i.map(r), o[0] = u, o[1] = s, o[2] = l, o[3] = t
            } else t = o[3];
            return o[12] !== t ? (n = (0, a.jsx)(a.Fragment, {
                children: t
            }), o[12] = t, o[13] = n) : n = o[13], n
        }
        var s9 = n("JVSG"),
            ie = {
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
            it = n("SfY6");

        function ia() {
            let e, t, n, o, s, i, l, d, u, h, p, g, v, b, w, C, _ = (0, r.c)(46),
                j = (0, f._)(),
                S = (0, m.useContext)(J.a);
            _[0] === Symbol.for("react.memo_cache_sentinel") ? (e = {
                name: "chatgpt.conversations"
            }, _[0] = e) : e = _[0];
            let I = (0, c.x)(x.a, e),
                E = (0, c.z)(T.a),
                P = (0, f.bb)() ?? 0,
                {
                    conversationId: A
                } = (0, f.cb)(),
                {
                    search: M,
                    state: k
                } = (0, f.Y)(),
                R = (0, c.x)(th.a, A ?? null),
                N = (0, c.x)(null == A || tg.e, R ?? A ?? ""),
                O = k?.archivedConversationPreview === !0;
            _[1] !== M ? (t = (0, sq.i)(M), _[1] = M, _[2] = t) : t = _[2];
            let B = t;
            _[3] !== O || _[4] !== B || _[5] !== A ? (n = null == A || (0, t9.e)(A) || B || O ? null : A, _[3] = O, _[4] = B, _[5] = A, _[6] = n) : n = _[6];
            let {
                data: L
            } = (0, c.x)(tP.chatGptConversationQueryById$, n);
            if (null == A) {
                let e;
                return _[7] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(f.l, {
                    to: "/",
                    replace: !0
                }), _[7] = e) : e = _[7], e
            }
            _[8] !== R || _[9] !== A ? (o = R ?? (0, t9.d)(A), _[8] = R, _[9] = A, _[10] = o) : o = _[10];
            let F = o,
                G = I.isCapable && !E && !N && null != L;
            _[11] !== j ? (s = e => (j((0, sq.c)(e)), !0), _[11] = j, _[12] = s) : s = _[12];
            let z = s;
            _[13] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(y.a, {}), l = (0, a.jsx)(W.a.Surface, {}), _[13] = i, _[14] = l) : (i = _[13], l = _[14]), _[15] !== O ? (d = null, _[15] = O, _[16] = d) : d = _[16], _[17] !== F || _[18] !== O || _[19] !== B ? (u = B || O ? null : (0, a.jsx)(tw.a, {
                conversationId: F
            }), _[17] = F, _[18] = O, _[19] = B, _[20] = u) : u = _[20];
            let D = S ?? (G ? z : null),
                H = `${F}:${B}`;
            _[21] === Symbol.for("react.memo_cache_sentinel") ? (h = void 0, _[21] = h) : h = _[21], _[22] !== F || _[23] !== O || _[24] !== B || _[25] !== H || _[26] !== P ? (p = (0, a.jsx)(ir, {
                conversationId: F,
                viewActivation: P,
                isArchivedPreview: O,
                isReadOnlyPreview: !1,
                banner: h,
                isTemporaryChat: B,
                sharedConversationId: null
            }, H), _[22] = F, _[23] = O, _[24] = B, _[25] = H, _[26] = P, _[27] = p) : p = _[27], _[28] !== p || _[29] !== D ? (g = (0, a.jsx)(J.a, {
                value: D,
                children: p
            }), _[28] = p, _[29] = D, _[30] = g) : g = _[30], _[31] !== g || _[32] !== d || _[33] !== u ? (v = (0, a.jsxs)(a.Fragment, {
                children: [i, l, d, u, g]
            }), _[31] = g, _[32] = d, _[33] = u, _[34] = v) : v = _[34];
            let U = v;
            _[35] !== U || _[36] !== F || _[37] !== O || _[38] !== B ? (b = B || O ? U : (0, a.jsx)(tT, {
                conversationId: F,
                children: U
            }), _[35] = U, _[36] = F, _[37] = O, _[38] = B, _[39] = b) : b = _[39];
            let q = b;
            return _[40] !== U || _[41] !== q ? (w = q, _[40] = U, _[41] = q, _[42] = w) : w = _[42], _[43] !== F || _[44] !== w ? (C = (0, a.jsx)(tH.a, {
                conversationId: F,
                children: w
            }), _[43] = F, _[44] = w, _[45] = C) : C = _[45], C
        }

        function ir(e) {
            let t, n, i, y, x, W, J, ev, ey, eb, ew, e_, ej, eS, eI, eT, eE, eP, eA, eM, tw, tI, tT, tk, tR, tN, tO, tB, tL, tG, tz, tH, tW, tq, tK, tV, tY, tX, nn, ni, nc, nd, nu, nh, np, nm, ng, nf, nv, ny, nb, nx, nw, nC, n_, nj, nS, nI, nT, nE, nP, nA, nM, nk, nR, nN, nO, nB, nF, nD, nW, nK, nV, nQ, nY, nX, nJ, nZ, n1, n7, n8, n9, ae, at, an, aa, ar, ao, as, ai, al, ac, ad, au, ah, ap, am, ag, af, av, ay, ab, ax, aw = (0, r.c)(596),
                {
                    conversationId: aC,
                    viewActivation: a_,
                    isArchivedPreview: aj,
                    inlinePreviewActions: aS,
                    isInlinePreview: aI,
                    hideModelPicker: aT,
                    showFilePicker: aE,
                    disableAutoFocus: aA,
                    hideInitialUserMessage: aM,
                    transcriptPresentation: ak,
                    scrollOrigin: aR,
                    isReadOnlyPreview: aN,
                    onSubmitAccepted: aO,
                    isTemporaryChat: aB,
                    sharedConversationId: aL,
                    sharedPostContinuation: aF,
                    requiredSystemHints: aG,
                    routePattern: az,
                    composerLeadingContent: aD,
                    headerLeadingContent: aH,
                    banner: aW,
                    onRetryMissingConversation: aU,
                    sharedProjectConversation: aq,
                    workspace: aK
                } = e,
                aV = void 0 === a_ ? 0 : a_,
                aQ = void 0 !== aj && aj,
                a$ = void 0 !== aI && aI,
                aY = void 0 === aE || aE,
                aX = (0, c.y)(ep.a),
                aJ = (0, m.useContext)(j.a),
                aZ = (0, c.x)(aP.f, aJ),
                a0 = (0, c.z)(null != aZ && T.a);
            aw[0] !== aJ || aw[1] !== aC ? (t = {
                auth: aJ,
                conversationId: aC
            }, aw[0] = aJ, aw[1] = aC, aw[2] = t) : t = aw[2];
            let a1 = (0, c.x)(null != aJ && !aJ.isLoading && null === aJ.authMethod && aP.h, t),
                {
                    conversationId: a2
                } = (0, f.cb)();
            aw[3] !== aC || aw[4] !== a$ || aw[5] !== a2 || aw[6] !== aX || aw[7] !== aK ? (n = () => (0, t9.e)(a$ || null != aK || null == aX.get(tm.j, aC) ? aC : a2 ?? ""), aw[3] = aC, aw[4] = a$, aw[5] = a2, aw[6] = aX, aw[7] = aK, aw[8] = n) : n = aw[8];
            let [a3, a4] = (0, m.useState)(n);
            aw[9] !== a3 || aw[10] !== aC || aw[11] !== aX ? (i = () => a3 && !aX.get(sl.b, aC) ? aC : null, aw[9] = a3, aw[10] = aC, aw[11] = aX, aw[12] = i) : i = aw[12];
            let [a5] = (0, m.useState)(i), a6 = null != aL || null != aZ && !(void 0 !== aF && aF && a0);
            aw[13] !== aC || aw[14] !== aQ || aw[15] !== a$ || aw[16] !== a6 || aw[17] !== aX ? (y = () => {
                if (!a6 && !aQ && !a$) return function(e, t) {
                    let n = e.get(th.a, t) ?? t,
                        a = e.get(M.b, t),
                        r = e.get(ty, n),
                        o = null;
                    null != a && r?.attemptId === a && (o = r);
                    let s = {
                            attemptId: a,
                            observedTurn: o?.observedTurn ?? !1,
                            activeRequestId: o?.activeRequestId ?? null,
                            dismissed: o?.dismissed ?? !1,
                            initialCreationMessageIds: o?.initialCreationMessageIds ?? new Set,
                            openedCreatedPage: o?.openedCreatedPage ?? !1
                        },
                        i = e.get(e3.h),
                        l = s.observedTurn,
                        c = null;

                    function d(t) {
                        for (let n of t.toReversed())
                            if (!s.initialCreationMessageIds.has(n.messageId) && (0, ta.openSpacePageSidePanelTab)(e, n.pageId, {
                                    title: n.title,
                                    openSource: "turn_auto_open"
                                }).opened) {
                                s.openedCreatedPage = !0;
                                break
                            }
                    }
                    let h = e.watch(e => {
                            let {
                                get: n
                            } = e;
                            if (n(ep.j) || null != n(tm._, t)) return;
                            let a = n(tm.R, t);
                            if (!a?.length) return;
                            let r = n(tt.e),
                                o = n(tm.j, t),
                                s = n(tm.y, t);
                            if (null != r && null != o && (null == s || "tpp" === s))
                                for (let e of a)(0, to.g)(r, e.pageId, o, s ?? null, "created")
                        }),
                        p = e.watch(n => {
                            let {
                                get: a
                            } = n, r = a(tm.ab, t), o = a(e3.h), h = a(tm.cb, t);
                            if ((0, tm.Bb)(r)) {
                                l = !1;
                                let e = a(M.b, t),
                                    n = a(tm.db, t),
                                    r = !s.observedTurn || s.attemptId !== e;
                                if (s.attemptId = e, r) {
                                    let e = c;
                                    c = null, e?.abort(), s.observedTurn = !0, s.activeRequestId = n, s.dismissed = h, s.openedCreatedPage = !1
                                } else s.activeRequestId = n ?? s.activeRequestId, s.dismissed = s.dismissed || h || i && !o;
                                i = o;
                                let u = !h && !s.dismissed && !o && !s.openedCreatedPage && !a(ep.j) && !a(tm.D, t) && !a(tg.e, t),
                                    p = [];
                                if ((r || u) && (p = a(tm.R, t) ?? []), r) {
                                    s.initialCreationMessageIds = new Set(p.map(e => e.messageId));
                                    return
                                }
                                u && d(p);
                                return
                            }
                            if (!s.observedTurn) return;
                            let p = a(tm.w, t);
                            if ("idle" !== r || h || null != p && "completed" !== p.result || null != e.get(tm.D, t) || e.get(ep.j) || e.get(tg.e, t)) {
                                s.observedTurn = !1;
                                return
                            }
                            if (l) {
                                if (s.dismissed || o || s.openedCreatedPage || a(M.b, t) !== s.attemptId) {
                                    s.observedTurn = !1;
                                    return
                                }
                                if (p?.result !== "completed") return;
                                d(a(tm.R, t) ?? []), s.observedTurn = !s.openedCreatedPage;
                                return
                            }
                            if (s.observedTurn = !1, p?.result !== "completed" || p.requestId !== s.activeRequestId) return;
                            let m = e.get(tm.N, t);
                            if (null == m) return;
                            let g = (0, u.b)({
                                    mapping: m,
                                    current_node: e.get(tm.C, t)
                                }),
                                f = g.findLast(tv.b);
                            if (f?.status !== "finished_successfully") return;
                            let v = [...(0, tp.e)(g).outputs, ...g.flatMap(e => (0, tp.c)(e).map(e => e.file))],
                                y = e.get(tc.a, t)?.at(-1);
                            if (y?.turn.status !== "complete") return;
                            let b = [...(0, e5.b)(g), ...y.turn.items.flatMap(e => "chatgpt-reasoning-group" === e.type ? e.items : [e]).filter(e => "mcp-tool-call" === e.type)];
                            if (!((0, e4.a)(e, b, !s.dismissed) || !s.dismissed && !s.openedCreatedPage && (0, tr.a)(e, b)) && !s.dismissed && !o && !s.openedCreatedPage) {
                                for (let t of (0, tn.c)((0, u.e)(f)).toReversed())
                                    if ((0, ta.openSpacePageSidePanelTab)(e, t.id, {
                                            openSource: "turn_auto_open",
                                            blockId: t.blockId
                                        }).opened) return;
                                if ((0, tf.canOpenChatGptFilePreview)({
                                        browserPreview: !0
                                    })) {
                                    for (let n of y.turn.items)
                                        if ("assistant-message" === n.type && n.completed)
                                            for (let [a, r] of n.contentReferences.entries()) {
                                                let o = (0, td.a)(r),
                                                    s = null == o ? null : (0, e6.a)(o),
                                                    i = v.find(e => null != e.fileId && e.fileId === (r.file_id ?? r.id) || null != e.libraryFileId && e.libraryFileId === r.library_file_id);
                                                if ("file" !== r.type || !(0, e1.a)(r) || null == o || null == s || !(0, e6.f)(s) || null == i && null == (0, tu.b)(r.sandbox_path) && !(0, tu.b)(r.matched_text)?.includes("sandbox:") || i?.sizeBytes != null && i.sizeBytes > e9.a) continue;
                                                let l = n.contentReferenceMessageIds?.[a] ?? n.messageId,
                                                    d = (0, tl.b)(r, {
                                                        fileName: o,
                                                        messageId: l
                                                    });
                                                if (null == d) continue;
                                                if (e.get(eN.g)?.getExperiment("1965446322").get("enable_artifact_preview_auto_open", !1) !== !0) return;
                                                let u = e.get(tm.j, t) ?? t,
                                                    h = `${l??"message"}:${String(a)}:${o}`,
                                                    p = `chatgpt-file:${u}:${h}`,
                                                    m = {
                                                        turnId: y.id,
                                                        inputMessageId: g.find(e => "user" === e.author.role)?.id ?? null,
                                                        messageId: l ?? null
                                                    },
                                                    f = new AbortController,
                                                    b = (0, tf.openChatGptFile)(e, {
                                                        conversationId: u,
                                                        fileName: o,
                                                        gizmoId: e.get(tm.T, t),
                                                        sharedConversationId: e.get(tm._, t),
                                                        target: d,
                                                        tabKey: h,
                                                        browserPreview: !0,
                                                        isAccessBlocked: e => e.get(tg.e, t),
                                                        downloadFallback: !1,
                                                        openSource: "auto_open",
                                                        originatingTurn: m,
                                                        signal: f.signal,
                                                        onOpened: () => {
                                                            let t = e.get(e2.l.activeTab$);
                                                            f.signal.aborted || t?.tabId !== p || t.tabType.kind !== e7.a || ((0, el.a)(e, e0.CodexFileOpened, {
                                                                threadId: u,
                                                                turnId: m.turnId,
                                                                inputMessageId: m.inputMessageId ?? void 0,
                                                                messageId: m.messageId ?? void 0,
                                                                fileExtension: (0, e8.c)(o) ?? void 0,
                                                                openSource: "auto_open",
                                                                openDestination: "codex_preview"
                                                            }), (0, el.a)(e, e0.CodexWorkspaceFilePreviewAttempted, (0, te.a)({
                                                                modifiedClick: !1,
                                                                openedSidePanelTarget: "artifact",
                                                                openSource: "auto_open",
                                                                originatingTurn: m,
                                                                path: o,
                                                                threadId: u,
                                                                windowType: "browser"
                                                            })), (0, ts.b)(e, p, "auto_open"))
                                                        },
                                                        onClose: () => f.abort()
                                                    });
                                                c = f;
                                                let x = e.watch(e => {
                                                    let {
                                                        get: n
                                                    } = e;
                                                    (n(e3.h) && n(e2.l.activeTab$)?.tabId !== p || n(tg.e, t)) && f.abort()
                                                });
                                                b.catch(e => {
                                                    f.signal.aborted || ti.a.debug("Automatic ChatGPT artifact preview could not open", {
                                                        safe: {},
                                                        sensitive: {
                                                            error: e
                                                        }
                                                    })
                                                }).finally(() => {
                                                    x(), c === f && (c = null)
                                                });
                                                return
                                            }
                                }
                            }
                        });
                    return () => {
                        h(), p(), c?.abort(), null != s.attemptId && e.set(ty, n, {
                            ...s,
                            attemptId: s.attemptId
                        })
                    }
                }(aX, aC)
            }, x = [aC, aQ, a$, a6, aX], aw[13] = aC, aw[14] = aQ, aw[15] = a$, aw[16] = a6, aw[17] = aX, aw[18] = y, aw[19] = x) : (y = aw[18], x = aw[19]), (0, m.useEffect)(y, x);
            let a7 = (0, c.x)(tJ.a, aC),
                a8 = a6 ? null : a7;
            aw[20] !== aL ? (W = () => null == aL ? null : (0, t9.b)(), aw[20] = aL, aw[21] = W) : W = aw[21];
            let [a9] = (0, m.useState)(W), re = a9 ?? aC;
            aw[22] !== re ? (J = (0, em.o)({
                routeKind: "chatgpt-thread",
                conversationId: re
            }), aw[22] = re, aw[23] = J) : J = aw[23];
            let rt = null != (0, c.x)(Z.c, J);
            aw[24] !== re || aw[25] !== aG || aw[26] !== aX ? (ev = () => {
                if (null != aG && 0 !== aG.length) return (0, oh.b)(aX, re, aG)
            }, ey = [re, aG, aX], aw[24] = re, aw[25] = aG, aw[26] = aX, aw[27] = ev, aw[28] = ey) : (ev = aw[27], ey = aw[28]), (0, m.useEffect)(ev, ey);
            let rn = (0, m.useRef)(null),
                [ra, rr] = (0, m.useState)(null),
                [ro, rs] = (0, m.useState)(null);
            aw[29] === Symbol.for("react.memo_cache_sentinel") ? (eb = () => () => rs(null), aw[29] = eb) : eb = aw[29], aw[30] !== aV ? (ew = [aV], aw[30] = aV, aw[31] = ew) : ew = aw[31], (0, m.useLayoutEffect)(eb, ew);
            let [ri, rl] = (0, m.useState)(null), rc = ro?.activation === aV ? ro.messageId : null, rd = ri === aV, ru = (0, m.useRef)(null);
            aw[32] === Symbol.for("react.memo_cache_sentinel") ? (e_ = () => {
                let e = new AbortController;
                return ru.current = e, () => e.abort()
            }, aw[32] = e_) : e_ = aw[32], aw[33] !== aV ? (ej = [aV], aw[33] = aV, aw[34] = ej) : ej = aw[34], (0, m.useLayoutEffect)(e_, ej);
            let rh = (0, g.a)(),
                rp = (0, f._)(),
                rm = (0, eD.d)(),
                rg = (0, c.x)(tm.j, aC);
            aw[35] !== aX ? (eS = e => {
                (0, tb.c)(aX, e)
            }, aw[35] = aX, aw[36] = eS) : eS = aw[36];
            let rf = (0, m.useEffectEvent)(eS);
            aw[37] !== rg || aw[38] !== rf ? (eI = () => () => {
                null != rg && rf(rg)
            }, aw[37] = rg, aw[38] = rf, aw[39] = eI) : eI = aw[39], aw[40] !== rg ? (eT = [rg], aw[40] = rg, aw[41] = eT) : eT = aw[41], (0, m.useEffect)(eI, eT);
            let rv = (0, c.x)(n6.a, aC),
                ry = (0, c.x)(tm.N, aC),
                rb = (0, c.x)(tP.chatGptConversationQueryById$, a6 || aB && null != ry ? null : rg);
            (0, c.x)(a6 ? null : tM.a, rg);
            let rx = (0, c.x)(!a1 && tg.e, aC),
                rw = rg ?? aC,
                rC = (0, c.x)(tm.C, aC),
                r_ = (0, c.x)(tm.y, aC),
                rj = (0, c.x)(tm.T, aC),
                rS = (0, c.x)(tm.D, aC),
                rI = (0, c.x)(tm.O, aC),
                rT = (0, c.x)(tm.ab, aC),
                rE = (0, c.x)(tm.X, aC),
                rP = (0, c.x)(tm.Z, aC),
                rA = (0, c.x)(n0, aC);
            aw[42] !== rh || aw[43] !== rA ? (eE = rA ?? rh.formatMessage(ex.a.newChat), aw[42] = rh, aw[43] = rA, aw[44] = eE) : eE = aw[44];
            let rM = eE,
                rk = (0, c.x)(tm.E, aC),
                rR = (0, c.x)(tm.eb, aC),
                rN = (0, c.x)(tm.fb, aC),
                rO = (0, c.x)(tP.n, aL),
                rB = (0, m.useRef)(null),
                rF = rO.isSuccess && null != rO.data ? aL : null;
            aw[45] !== aX ? (eP = e => {
                (0, el.a)(aX, o.i, {
                    actor: "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER",
                    action: "CHATGPT_SHARE_FLOW_ACTION_SHARED_CONTENT_VIEWED",
                    contentType: "CHATGPT_SHARE_FLOW_CONTENT_TYPE_SHARED_CONVERSATION",
                    availability: "CHATGPT_SHARE_FLOW_AVAILABILITY_COMPLETE",
                    shareId: e
                })
            }, aw[45] = aX, aw[46] = eP) : eP = aw[46];
            let rG = (0, m.useEffectEvent)(eP);
            aw[47] !== rF || aw[48] !== rG ? (eA = () => {
                null != rF && rB.current !== rF && (rB.current = rF, rG(rF))
            }, aw[47] = rF, aw[48] = rG, aw[49] = eA) : eA = aw[49], aw[50] !== rF ? (eM = [rF], aw[50] = rF, aw[51] = eM) : eM = aw[51], (0, m.useEffect)(eA, eM);
            let rz = (0, c.x)(t_.q, aC),
                rD = (0, c.x)(t_.p, aC),
                rH = (0, c.x)(t_.n, aC),
                rW = (0, c.x)(t_.r, aC),
                rU = (0, c.x)(t_.o, aC),
                rq = (0, c.x)(t_.j, aC),
                rK = (0, c.x)(tm.cb, aC),
                rV = (0, c.x)(t_.B, aC);
            aw[52] !== rT ? (tw = (0, tm.Bb)(rT), aw[52] = rT, aw[53] = tw) : tw = aw[53];
            let rQ = tw,
                r$ = (0, c.x)(t0, aC),
                rY = (0, c.z)(I.v),
                rX = (0, c.z)(I.s),
                rJ = (0, c.z)(I.u),
                rZ = (0, c.z)(I.n),
                r0 = (0, c.z)(I.b),
                r1 = (0, c.z)(I.o),
                r2 = (0, c.z)(er.pagesEnabled$);
            aw[54] === Symbol.for("react.memo_cache_sentinel") ? (tI = (0, F.a)(), aw[54] = tI) : tI = aw[54];
            let r3 = (0, eR.f)(tI);
            aw[55] === Symbol.for("react.memo_cache_sentinel") ? (tT = (0, ee.b)(), aw[55] = tT) : tT = aw[55];
            let r4 = (0, eR.f)(tT),
                r5 = null != ry,
                r6 = (0, c.z)(sC.f),
                r7 = a6 ? rO : rb;
            a3 && null != r7.data && a4(!1);
            let r8 = a3 && r5 && null == r7.data,
                r9 = r7.isLoading || !r8 && r7.isError;
            aw[56] !== ra || aw[57] !== re || aw[58] !== r9 || aw[59] !== a6 || aw[60] !== aB || aw[61] !== aX ? (tk = (e, t, n, a) => {
                !(e || aX.get(eh.a)) && ((0, t_.b)(aX, re, t, void 0, n, a), ra?.focus(), a6 || r9 || (0, tE.f)(aX, re, {
                    isTemporaryChat: aB
                }))
            }, aw[56] = ra, aw[57] = re, aw[58] = r9, aw[59] = a6, aw[60] = aB, aw[61] = aX, aw[62] = tk) : tk = aw[62];
            let oe = tk;
            aw[63] !== aC || aw[64] !== aZ ? (tN = null == (tR = null == aZ ? null : (0, sk.a)(aZ, aC)) ? void 0 : (0, n5.a)(tR), aw[63] = aC, aw[64] = aZ, aw[65] = tR, aw[66] = tN) : (tR = aw[65], tN = aw[66]);
            let ot = tN,
                on = tR ?? r7.data,
                oa = rk ? rR : on?.title,
                or = (0, c.z)(S.h),
                oo = (0, c.z)(S.g),
                os = "chatgpt-thread" === aX.value.routeKind && aX.value.workSideChat?.conversationId === aC,
                oi = on?.conversation_origin ?? r_ ?? (null != aK || os ? "tpp" : null),
                ol = "tpp" === oi,
                oc = ol && "denied" === rY.status && "go-plan" === rY.reason,
                od = (0, c.z)(eO.e),
                ou = (0, f.Y)(),
                op = ou.state;
            (0, c.z)(ef.b);
            let om = (0, c.x)(eN.e, "3901104270") && op?.openGoalPlan === !0,
                og = (0, ez.a)(),
                of = "tpp" === oi || "flora" === oi,
                ov = (0, c.z)(nr.b),
                oy = (0, c.z)(!!of && I.w),
                ob = void 0 !== aN && aN || oy,
                ox = null == od || od.isFullWidth ? void 0 : od.width ?? 420,
                ow = !0 === (0, c.z)(of ? null : eQ.d),
                oC = (0, c.z)(of ? eu.b : eu.a),
                o_ = !of && oC,
                oj = !r4 || r1 && !of,
                oS = !a6 && r1 && !of,
                oI = oS && rZ,
                oT = a6 && on?.is_read_only === !0 || aq?.is_read_only === !0;
            aw[67] !== aC || aw[68] !== a6 || aw[69] !== aX ? (tO = () => null, aw[67] = aC, aw[68] = a6, aw[69] = aX, aw[70] = tO) : tO = aw[70];
            let [oE] = (0, m.useState)(tO), oP = on?.gizmo_id ?? rj ?? oE?.gizmoId ?? null;
            aw[71] !== oP || aw[72] !== a6 ? (tB = a6 || null == oP || (0, t7.a)(oP) ? null : oP, aw[71] = oP, aw[72] = a6, aw[73] = tB) : tB = aw[73];
            let oA = tB,
                oM = (0, c.x)(tS, re);
            aw[74] !== on || aw[75] !== aC || aw[76] !== rM || aw[77] !== ou.pathname || aw[78] !== aL || aw[79] !== aZ ? (tL = (0, tF.d)({
                conversation: on,
                conversationId: aC,
                conversationTitle: rM,
                pathname: ou.pathname,
                sharedConversationId: aL,
                sharedPost: aZ
            }), aw[74] = on, aw[75] = aC, aw[76] = rM, aw[77] = ou.pathname, aw[78] = aL, aw[79] = aZ, aw[80] = tL) : tL = aw[80];
            let ok = tL,
                oR = !rJ && null == on && null == oE,
                oN = null != rg && !rx && !oR && (rJ || rX),
                oO = null;
            a6 || (oO = null != on ? (0, eC.A)(on) : (0, t7.a)(rj) ? rj : oE?.projectId ?? null);
            let oB = (0, c.x)(eX.c, a6 ? null : aC),
                oL = a6 || of || null != oO || oB || null == oM ? oA : oM.id;
            aw[81] !== re || aw[82] !== oL || aw[83] !== ou.pathname ? (tG = {
                gizmoId: oL,
                conversationId: re,
                visitKey: ou.pathname
            }, aw[81] = re, aw[82] = oL, aw[83] = ou.pathname, aw[84] = tG) : tG = aw[84];
            let oF = (0, c.x)(sd.d, tG),
                {
                    data: oG
                } = (0, s.a)({
                    enabled: null != oO,
                    queryFn: () => {
                        if (null == oO) throw Error("Expected a ChatGPT project id");
                        return (0, N.c)(oO)
                    },
                    queryKey: (0, eC.D)(oO ?? ""),
                    staleTime: eG.b.ONE_MINUTE
                }),
                oz = null != oO && (oG?.gizmo.share_recipient !== "private" || (oG?.gizmo.sharing?.subjects?.length ?? 0) > 0);
            aw[85] !== on?.context_scopes || aw[86] !== oG?.gizmo.gizmo_snorlax_type ? (tz = on?.context_scopes?.includes("HEALTH") === !0 || oG?.gizmo.gizmo_snorlax_type === "potion", aw[85] = on?.context_scopes, aw[86] = oG?.gizmo.gizmo_snorlax_type, aw[87] = tz) : tz = aw[87];
            let oD = tz,
                oH = (0, sh.a)(on?.context_scopes, {
                    projectType: oG?.gizmo.gizmo_snorlax_type,
                    projectId: oO,
                    lockedProjectId: r6?.projectId
                }),
                oW = rx || oz || oD || oH;
            aw[88] !== oG?.gizmo.display.name || aw[89] !== oG?.gizmo.display.name.trim ? (tH = oG?.gizmo.display.name.trim() || null, aw[88] = oG?.gizmo.display.name, aw[89] = oG?.gizmo.display.name.trim, aw[90] = tH) : tH = aw[90];
            let oU = tH,
                oq = oG?.gizmo.display.theme,
                oK = oG?.gizmo.display.emoji;
            aw[91] !== oG ? (tW = "shared" === (0, t8.b)(oG) ? (0, a.jsx)(U.b, {
                icon: {
                    assets: {
                        16: ie,
                        20: it.a
                    }
                }
            }) : void 0, aw[91] = oG, aw[92] = tW) : tW = aw[92], aw[93] !== oq || aw[94] !== oK || aw[95] !== tW ? (tq = (0, a.jsx)(ec.a, {
                className: "icon-leading",
                size: "leading",
                color: oq,
                icon: oK,
                sharedIcon: tW
            }), aw[93] = oq, aw[94] = oK, aw[95] = tW, aw[96] = tq) : tq = aw[96];
            let oV = tq,
                oQ = (0, c.x)(tm.i, aC),
                o$ = oQ?.metadata ?? on?.context_truncation_continuation,
                oY = a6 || aB || null != aq || null == or || on?.owner?.user_id == null || null == oO || on.owner.user_id === (oo ? or.split("__")[0] : or) ? null : (0, nU.d)(oO, on.conversation_id, on.owner.user_id),
                oX = !a6 && !aQ && !ob,
                oJ = (0, c.x)(oX ? sE.c : null, aC),
                oZ = oJ?.isReviewing === !0,
                o0 = null == oJ ? ry : oJ.conversation.mapping,
                o1 = null == oJ ? rC : oJ.conversation.current_node,
                o2 = null == ry ? on : null,
                o3 = o0 ?? o2?.mapping,
                o4 = (0, eR.i)();
            aw[97] !== o3 || aw[98] !== o4 ? (tK = function(e, t) {
                if (null != e && Object.values(e).some(e => e?.message != null && (0, su.b)(e.message))) return () => (0, eR.d)(t, "2347981323").get("enabled", !1)
            }(o3, o4), aw[97] = o3, aw[98] = o4, aw[99] = tK) : tK = aw[99];
            let o5 = tK,
                o6 = (0, c.z)(null != o5 ? eq.h : void 0),
                o7 = (0, c.x)(null != o5 && !a6 && !aQ && !oZ && eW.a, aC),
                o8 = (0, c.z)(o7 ? eU.a : void 0);
            aw[100] === Symbol.for("react.memo_cache_sentinel") ? (tV = (0, tA.a)(), aw[100] = tV) : tV = aw[100];
            let o9 = tV;
            aw[101] === Symbol.for("react.memo_cache_sentinel") ? (tY = new WeakMap, aw[101] = tY) : tY = aw[101];
            let se = tY;
            aw[102] !== oC || aw[103] !== o_ || aw[104] !== o$ || aw[105] !== oi || aw[106] !== o1 || aw[107] !== o0 || aw[108] !== ov || aw[109] !== o5 || aw[110] !== o2 || aw[111] !== aQ || aw[112] !== a6 || aw[113] !== rQ || aw[114] !== of || aw[115] !== rI || aw[116] !== rH || aw[117] !== rU || aw[118] !== rD || aw[119] !== rz || aw[120] !== rW || aw[121] !== oZ || aw[122] !== aX.get || aw[123] !== oJ?.isEntering || aw[124] !== rv || aw[125] !== rT || aw[126] !== o8 || aw[127] !== o6 ? (tX = () => o9({
                conversation: o2,
                contextContinuation: o$,
                clinicalSearchEnabled: o_,
                clinicalCitationsEnabled: oC,
                enableCloudBrowserActivity: ov,
                conversationOrigin: oi,
                enableVoiceImageLoadingFix: o5,
                voiceImageSessionId: o6,
                voiceImageGenerationSpawnIds: o8,
                enableImageGenerationLoadingState: !a6 && !aQ && !oZ && "error" !== rT,
                getRenderTelemetry: e => (0, s5.c)(aX.get, e),
                isWorkConversation: of,
                isStreaming: !a6 && !aQ && !oZ && rQ,
                mode: "conversation",
                mcpResponseCache: se,
                moderationDisclaimersByMessageId: rI,
                ...rv,
                pendingSubmission: null == rz || a6 || oZ || oJ?.isEntering ? null : {
                    attachments: rH,
                    commentAttachments: rU,
                    prompt: rz,
                    ...rD,
                    selectedTextAttachments: rW
                },
                threadCurrentNode: o1,
                threadMapping: o0
            }), aw[102] = oC, aw[103] = o_, aw[104] = o$, aw[105] = oi, aw[106] = o1, aw[107] = o0, aw[108] = ov, aw[109] = o5, aw[110] = o2, aw[111] = aQ, aw[112] = a6, aw[113] = rQ, aw[114] = of, aw[115] = rI, aw[116] = rH, aw[117] = rU, aw[118] = rD, aw[119] = rz, aw[120] = rW, aw[121] = oZ, aw[122] = aX.get, aw[123] = oJ?.isEntering, aw[124] = rv, aw[125] = rT, aw[126] = o8, aw[127] = o6, aw[128] = tX) : tX = aw[128], oJ?.isEntering, aw[129] !== tX ? (nn = tX(), aw[129] = tX, aw[130] = nn) : nn = aw[130];
            let {
                isConversationEmpty: st,
                renderedConversation: sn,
                renderedTurns: sa,
                showPendingLoadingMessage: sr
            } = nn;
            aw[131] !== a$ || aw[132] !== of || aw[133] !== sn || aw[134] !== aX ? (ni = () => {
                if (!a$ && of) return aX.set(s9.b, sn), () => {
                    aX.get(s9.b) === sn && aX.set(s9.b, null)
                }
            }, nc = [a$, of, sn, aX], aw[131] = a$, aw[132] = of, aw[133] = sn, aw[134] = aX, aw[135] = ni, aw[136] = nc) : (ni = aw[135], nc = aw[136]), (0, m.useEffect)(ni, nc);
            let ss = (0, c.x)(eJ.g, aC),
                si = sr && null == ss,
                sm = !of && !a6 && !a$ && !aQ,
                sg = (0, c.x)(o_ || a$ || a6 ? null : A.a, aC),
                sf = (sg?.length ?? 0) > 0,
                sv = (0, c.x)(sm ? M.b : null, aC),
                sy = JSON.stringify([aC, aV]),
                [sb, s_] = (0, m.useState)(null),
                sj = function(e, t) {
                    let {
                        conversation: n,
                        completionAttemptId: a,
                        allowAutoOpen: r = !0,
                        suppressAutoOpen: o = !1,
                        isTurnActive: s,
                        isPendingUserTurn: i,
                        hasGoal: l = !1,
                        visitKey: c
                    } = t;
                    if (e?.visitKey === c && e.conversation === n && e.completionAttemptId === a && e.allowAutoOpen === r && e.suppressAutoOpen === o && e.isTurnActive === s && e.isPendingUserTurn === i && e.hasGoal === l) return e;
                    let d = null == n ? [] : (0, u.b)(n, O.n),
                        h = null == e || e.visitKey !== c,
                        p = d.find(O.n)?.id ?? (h || i ? null : e.userMessageId),
                        m = i ? null : d.findLast(B)?.id ?? null,
                        g = !h && (i && !e.isPendingUserTurn || !e.isPendingUserTurn && null != p && (null != e.userMessageId || !e.isTurnActive && null != a && a !== e.completionAttemptId) && e.userMessageId !== p),
                        f = new Set(h ? [] : e.observedSummaryRequestIds),
                        v = !h && !g && e.hasConsumedSummaryRequest,
                        y = !v && !h && null != e.conversation && (s || e.isTurnActive || null != a && e.completionAttemptId !== a) && null != m && !f.has(m);
                    if (null != n && (h || null == e.conversation || !s))
                        for (let e of Object.values(n.mapping)) e?.message?.id != null && B(e.message) && f.add(e.message.id);
                    else null != m && f.add(m);
                    return {
                        visitKey: c,
                        conversation: n,
                        completionAttemptId: a,
                        allowAutoOpen: r,
                        suppressAutoOpen: o,
                        isTurnActive: s,
                        isPendingUserTurn: i,
                        hasGoal: l,
                        observedSummaryRequestIds: f,
                        userMessageId: p,
                        hasConsumedSummaryRequest: v || null != m,
                        isOpen: o ? !h && e.suppressAutoOpen && e.isOpen : r && (l && (h || !e.hasGoal) || y) || !h && (!g || l) && (!e.hasGoal || l) && e.isOpen,
                        shouldPreventAutoFocus: h || g || l && !e.hasGoal || y && !e.isOpen || e.shouldPreventAutoFocus
                    }
                }(sb, {
                    completionAttemptId: sv,
                    allowAutoOpen: !(0, X.a)("(width < 768px)"),
                    suppressAutoOpen: om,
                    conversation: sm && (r8 || !r9) ? sn : null,
                    isTurnActive: rQ,
                    hasGoal: sf,
                    isPendingUserTurn: rq && null != rz && !rQ,
                    visitKey: sy
                });
            sj !== sb && s_(sj);
            let sS = null == aK && !o_ && !a$ && !a6 && (ol || sm) && !aQ,
                sI = sS && sn?.mapping === ry && sn?.current_node === rC,
                sP = (0, c.x)(sI ? tm.q : null, aC),
                sM = sn?.mapping,
                sO = sn?.current_node;
            aw[137] !== sM || aw[138] !== sO ? (nd = l()(() => {
                let e = null == sM ? [] : (0, u.a)({
                    mapping: sM,
                    current_node: sO
                });
                return {
                    messages: e,
                    resources: (0, tp.e)(e)
                }
            }), aw[137] = sM, aw[138] = sO, aw[139] = nd) : nd = aw[139];
            let sB = nd;
            aw[140] !== sm || aw[141] !== rq || aw[142] !== sS || aw[143] !== rQ || aw[144] !== r2 || aw[145] !== rH || aw[146] !== sB || aw[147] !== sa || aw[148] !== sP ? (nu = sS ? l()(() => (0, nt.a)({
                automationReferences: sP,
                includePages: r2,
                includeSources: !sm,
                isTurnActive: rQ || rq,
                ...sB(),
                pendingAttachments: rq ? rH : [],
                turns: sa
            })) : null, nh = sm ? nu?.() : null, aw[140] = sm, aw[141] = rq, aw[142] = sS, aw[143] = rQ, aw[144] = r2, aw[145] = rH, aw[146] = sB, aw[147] = sa, aw[148] = sP, aw[149] = nu, aw[150] = nh) : (nu = aw[149], nh = aw[150]);
            let sL = nh,
                sF = sf || null != sL && (sL.outputs.length > 0 || sL.progressSteps.length > 0 || sL.automationIds.length > 0 || sL.subagents.length > 0 || !rx && sL.browserScreenshots.length > 0),
                sG = sS && (!sm || sF),
                sz = sG && null == od,
                sH = JSON.stringify([sy, null != od]),
                sW = sm ? sj.isOpen : void 0,
                sU = sG && !od?.isFullWidth;
            aw[151] !== ox || aw[152] !== sH || aw[153] !== sW || aw[154] !== sU ? (np = {
                contentShiftResetKey: sH,
                controlledIsOpen: sW,
                isEnabled: sU,
                floatingPanelWidth: ox
            }, aw[151] = ox, aw[152] = sH, aw[153] = sW, aw[154] = sU, aw[155] = np) : np = aw[155];
            let sK = (0, eL.a)(np),
                sV = rg ?? aC,
                sQ = ol && null == rN,
                s$ = rS ?? rV,
                sY = r7.isLoading && !r5,
                sJ = !sY && (null != on || r5),
                sZ = sJ && (r8 || !r9),
                s0 = r7.isError && !r8;
            aw[156] !== r7.error || aw[157] !== a$ ? (nm = a$ || (0, eK.e)(r7.error) || !(r7.error instanceof eK.FetchError && [401, 403, 404].includes(r7.error.status)), aw[156] = r7.error, aw[157] = a$, aw[158] = nm) : nm = aw[158];
            let s1 = nm;
            aw[159] !== aC || aw[160] !== a6 || aw[161] !== rg ? (ng = null, a6 || (ng = rg ?? ((0, t9.e)(aC) ? null : aC)), aw[159] = aC, aw[160] = a6, aw[161] = rg, aw[162] = ng) : ng = aw[162], aw[163] !== rc || aw[164] !== on || aw[165] !== oi || aw[166] !== rh || aw[167] !== aB || aw[168] !== of || aw[169] !== oc || aw[170] !== rp || aw[171] !== ng || aw[172] !== az || aw[173] !== aX || aw[174] !== aV ? (nf = (e, t) => {
                let n = void 0 !== t && t;
                if (null == ng || null != rc || oc) return;
                let a = ru.current?.signal;
                null == a || a.aborted || (rs({
                    messageId: e,
                    activation: aV
                }), (0, tm.h)(aX, {
                    conversationId: ng,
                    messageId: e,
                    inWorkMode: n
                }).then(e => {
                    let {
                        clientThreadId: t
                    } = e;
                    a.aborted || (n && (0, e$.a)(aX, "opened"), rp(null == az ? (0, sq.c)(t, {
                        isTemporaryChat: aB
                    }) : (0, f.C)(az, {
                        conversationId: t
                    })))
                }).catch(() => {
                    a.aborted || (n && (0, e$.a)(aX, "failed"), rs(null), aX.get(q.f).danger(rh.formatMessage({
                        id: "chatgptConversations.branchFailed",
                        defaultMessage: "Failed to create chat"
                    }), {
                        errorAnalytics: {
                            toastId: "branch_conversation_failed",
                            operation: "branch_conversation",
                            errorCategory: "conversation",
                            conversationId: ng ?? void 0,
                            retryable: !0,
                            userFacingError: {
                                surface: (0, t3.b)(null == oi && null == on ? null : of),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    }))
                }))
            }, aw[163] = rc, aw[164] = on, aw[165] = oi, aw[166] = rh, aw[167] = aB, aw[168] = of, aw[169] = oc, aw[170] = rp, aw[171] = ng, aw[172] = az, aw[173] = aX, aw[174] = aV, aw[175] = nf) : nf = aw[175];
            let s2 = (0, eH.a)(nf);
            aw[176] !== on || aw[177] !== aC || aw[178] !== oi || aw[179] !== rh || aw[180] !== ow || aw[181] !== aB || aw[182] !== of || aw[183] !== aX || aw[184] !== rg ? (nv = async (e, t, n, a) => {
                if (!ow) try {
                    await async function(e, t) {
                        let {
                            conversationId: n,
                            isTemporaryChat: a = !1,
                            messageId: r,
                            prompt: o,
                            renderFormat: s,
                            inlineSystemHints: i
                        } = t;
                        if (e.get(t_.j, n)) throw new t$.a("edit_message_busy", "The chat is busy.");
                        let l = e.get(tm.y, n);
                        if ("tpp" === l) throw new t$.a("edit_message_unsupported_conversation", "Work messages cannot be edited with the Chat flow.");
                        if (!e.get(t0, n)) throw new t$.a("edit_message_busy", "The chat is busy.");
                        let c = e.get(tQ.b, {
                            conversationId: n,
                            messageId: r
                        });
                        if (null == c) throw new t$.a("edit_message_target_unavailable", "The user message could not be edited.");
                        let {
                            selectedModel: d
                        } = c, u = o.trim(), p = (0, tQ.c)(c.message, e.get, i), m = (0, tZ.c)({
                            message: c.message,
                            prompt: u,
                            renderFormat: s,
                            systemHints: p,
                            inlineSystemHints: i
                        }), g = (0, h.f)(m.message.metadata), f = m.message.content, v = "multimodal_text" === f.content_type && f.parts.some(e => "string" != typeof e);
                        if (0 === u.length && 0 === g.length && !v) throw new t$.a("edit_message_empty", "The edited message cannot be empty.");
                        if (e.get(eN.e, "3574573347")) {
                            let t = e.get(tQ.a, n);
                            t?.messageId === r && t.prompt === o && tU()((0, tQ.c)(c.message, e.get, t.inlineSystemHints), p) || (e.set(tQ.a, n, {
                                messageId: r,
                                prompt: o,
                                isTemporaryChat: a,
                                inlineSystemHints: i
                            }), (0, tE.f)(e, n, {
                                isTemporaryChat: a
                            }))
                        }
                        let y = t1(e.get, n),
                            b = y.request.current,
                            x = () => t1(e.get, n).request.current === b && tU()(e.get(tQ.b, {
                                conversationId: n,
                                messageId: r
                            }), c) && !(0, tm.Bb)(e.get(tm.ab, n));
                        e.set(t_.j, n, !0);
                        try {
                            if ("flora" !== l && null != b && null == e.get(y.session$) && null == e.get(tJ.a, n) && (await b.stop(), await b.closed), !x()) throw new t$.a("edit_message_target_unavailable", "The edited message or active response changed.");
                            await (0, tZ.submitChatGPTCompletion)(e, {
                                isSubmissionCurrent: x,
                                isRequestCurrent: () => e.get(tm.C, n) === m.message.id,
                                attachments: g,
                                conversationId: n,
                                isTemporaryChat: a,
                                model: d.slug,
                                parentMessageId: c.parentMessageId,
                                prompt: u,
                                systemHints: p,
                                thinkingEffort: d.thinkingEffort,
                                userCompletionMessages: m
                            })
                        } finally {
                            e.set(t_.j, n, !1)
                        }
                    }(aX, {
                        conversationId: aC,
                        isTemporaryChat: aB,
                        messageId: e,
                        prompt: t,
                        inlineSystemHints: a,
                        renderFormat: n
                    })
                } catch (t) {
                    let e = (0, t3.c)(t);
                    throw aX.get(q.f).danger(rh.formatMessage({
                        id: "chatgptConversations.editMessageFailed",
                        defaultMessage: "Failed to edit message"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.editMessageFailed",
                            operation: "edit_message",
                            apiErrorCode: e.errorCode,
                            retryable: !0,
                            errorCategory: "conversation",
                            conversationId: rg ?? void 0,
                            userFacingError: {
                                ...e,
                                surface: (0, t3.b)(null == oi && null == on ? null : of),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    }), t
                }
            }, aw[176] = on, aw[177] = aC, aw[178] = oi, aw[179] = rh, aw[180] = ow, aw[181] = aB, aw[182] = of, aw[183] = aX, aw[184] = rg, aw[185] = nv) : nv = aw[185];
            let s3 = (0, eH.a)(nv);
            aw[186] !== re || aw[187] !== on || aw[188] !== aC || aw[189] !== oi || aw[190] !== rh || aw[191] !== ow || aw[192] !== aB || aw[193] !== of || aw[194] !== oc || aw[195] !== rp || aw[196] !== aU || aw[197] !== aX || aw[198] !== rg ? (ny = async (e, t) => {
                if (!ow && !oc) try {
                    let n = aX.get(rL.e, aC);
                    if (n?.startsNewWorkConversation || null == aX.get(tm.j, aC) || (0, eZ.j)(aX.get(tm.V, aC)?.metadata?.errorCode)) {
                        if (n?.message.id !== e) return;
                        let a = (0, u.e)(n.prompt),
                            r = (0, R.i)(n.prompt.metadata, a, (0, h.e)(n.prompt.metadata), (0, p.x)(a)),
                            o = (0, L.a)(n.prompt, a, r),
                            s = aX.get(t_.u, re),
                            i = null != o.renderFormat ? o.message : a,
                            l = s.length > 0 ? s : i,
                            c = s.length > 0 ? void 0 : o.renderFormat ?? "plain";
                        if (null != aU) return void await aU(l, c);
                        if (null == aX.get(tm.j, aC) && "string" == typeof n.prompt.metadata?.model_first_landing_ref) {
                            let e = l;
                            if (null != c) {
                                let t = (0, ed.e)(l, {
                                    defaultTextKind: "plain" === c ? "literal" : "prompt",
                                    enableRichText: !0,
                                    enableFileMentions: !0
                                });
                                e = t.getPersistedText(), t.destroy()
                            }
                            let t = `chatgpt:${aC}`;
                            (0, z.E)(t, (t, n) => n ? t : e) || (0, t_.Y)(aX, aC, e), (0, z.e)(t);
                            return
                        }
                        if (n.startsNewWorkConversation) {
                            let e = "user" === n.prompt.author.role ? (0, u.i)((0, u.s)(n.prompt.metadata?.serialization_metadata)?.work_handoff_recovery_prompt) : null,
                                t = null != e && e.length <= 1e3 ? e : (0, p.x)(a);
                            (0, D.n)(aX, "work"), await rp("/", {
                                state: {
                                    focusComposerNonce: Date.now(),
                                    prefillPrompt: s.length > 0 ? s : t,
                                    prefillPromptFormat: s.length > 0 ? void 0 : "plain",
                                    prefillPromptOnlyIfEmpty: !0
                                }
                            });
                            return
                        }
                        if (of && !aB && (0, G.cb)(aX, (0, Q.b)({
                                entrypoint: "home"
                            }))) return void await rp("/");
                        let d = (0, u.l)(n.prompt.metadata?.system_hints).filter(e => "search" !== e || !1 !== n.forceUseSearch);
                        !0 !== n.forceUseSearch || d.includes("search") || d.push("search");
                        let m = (0, t6.g)(aX, d);
                        (0, t_.Z)(aX, m, t.model);
                        let g = aX.get(tm.T, aC);
                        (0, D.n)(aX, of ? "work" : "chat"), await rp({
                            pathname: "/",
                            search: (0, sq.e)("", aB)
                        }, {
                            state: {
                                initialChatGptConversationId: m,
                                project: null,
                                chatGptProjectId: (0, t7.a)(g) ? g : null,
                                chatGptCustomGptId: (0, t7.a)(g) ? null : g,
                                focusComposerNonce: Date.now(),
                                prefillPrompt: l,
                                prefillPromptFormat: c,
                                prefillPromptOnlyIfEmpty: of
                            }
                        });
                        return
                    }
                    await (0, rL.h)(aX, {
                        conversationId: aC,
                        isTemporaryChat: aB,
                        messageId: e,
                        retry: of && "error_retry" === t.source && null == t.model.thinkingEffort ? {
                            ...t,
                            model: aX.get(t_.v, aC)
                        } : t
                    })
                } catch {
                    aX.get(q.f).danger(rh.formatMessage({
                        id: "chatgptConversations.regenerate.failed",
                        defaultMessage: "Failed to regenerate response"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.regenerate.failed",
                            operation: "regenerate_response",
                            errorCategory: "conversation",
                            conversationId: rg ?? void 0,
                            userFacingError: {
                                surface: (0, t3.b)(null == oi && null == on ? null : of),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    })
                }
            }, aw[186] = re, aw[187] = on, aw[188] = aC, aw[189] = oi, aw[190] = rh, aw[191] = ow, aw[192] = aB, aw[193] = of, aw[194] = oc, aw[195] = rp, aw[196] = aU, aw[197] = aX, aw[198] = rg, aw[199] = ny) : ny = aw[199];
            let s4 = (0, eH.a)(ny);
            aw[200] !== on || aw[201] !== aC || aw[202] !== rM || aw[203] !== rh || aw[204] !== rd || aw[205] !== aB || aw[206] !== rp || aw[207] !== rm || aw[208] !== oO || aw[209] !== aX || aw[210] !== rg || aw[211] !== oE || aw[212] !== aV ? (nb = () => {
                if (rd || null == rg) return;
                let e = aX.get(I.u);
                if (!e && !aX.get(I.s) || !e && null == on && null == oE) return;
                let t = ru.current?.signal;
                null == t || t.aborted || (rl(aV), (e ? (0, tx.f)(aX, {
                    chatGptThreadId: aC,
                    conversationTitle: rM
                }).then(e => {
                    if (null == e) return null;
                    let n = (0, C.a)(aX, e);
                    if ("created" === e.status) return null == n || t.aborted || aX.get(q.f).danger(n.message, {
                        errorAnalytics: {
                            toastId: "chatgptConversationPage.handleHandoff"
                        }
                    }), e.conversationId;
                    throw (0, C.a)(aX, e)
                }) : (0, b.a)({
                    scope: aX,
                    projectId: oO ?? void 0,
                    prompt: `Continuing from ${(0,H.f)({conversationId:rg,title:rM?.trim()||"ChatGPT thread"})}`
                }).then(id)).then(n => {
                    if (!t.aborted) {
                        if (null != n) return void(e ? rm(n) : rp((0, sq.c)(n, {
                            isTemporaryChat: aB
                        })));
                        throw Error("Unable to create a Work conversation")
                    }
                }).catch(() => {
                    t.aborted || (rl(null), aX.get(q.f).danger(rh.formatMessage({
                        id: "chatgptConversations.handoffFailed",
                        defaultMessage: "Failed to create chat"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.handoffFailed"
                        }
                    }))
                }))
            }, aw[200] = on, aw[201] = aC, aw[202] = rM, aw[203] = rh, aw[204] = rd, aw[205] = aB, aw[206] = rp, aw[207] = rm, aw[208] = oO, aw[209] = aX, aw[210] = rg, aw[211] = oE, aw[212] = aV, aw[213] = nb) : nb = aw[213];
            let s7 = nb;
            aw[214] !== aC || aw[215] !== rp || aw[216] !== aX || aw[217] !== a9 || aw[218] !== aL || aw[219] !== aZ ? (nx = () => {
                if (null != aZ) {
                    if ((0, t9.e)(aC)) {
                        let e = (0, aP.a)(aX, aZ, aC);
                        null != e && (aX.get(T.a) ? aX.set(sN.a, e) : rp((0, sq.c)(e)))
                    }
                    return
                }
                let e = aX.query.getData(tP.n, aL);
                null != e && null != aL && null != a9 && ((0, tm.ob)(aX, {
                    conversation: e,
                    conversationId: a9,
                    sharedConversationId: aL
                }), aX.get(T.a) ? aX.set(sN.a, a9) : rp((0, sq.c)(a9)))
            }, aw[214] = aC, aw[215] = rp, aw[216] = aX, aw[217] = a9, aw[218] = aL, aw[219] = aZ, aw[220] = nx) : nx = aw[220];
            let ia = (0, eH.a)(nx);
            aw[221] !== aK ? (nw = aK?.mcpAppContext == null ? null : {
                hostId: eg.a,
                server: "codex_apps",
                connectorId: aK.mcpAppContext.id
            }, aw[221] = aK, aw[222] = nw) : nw = aw[222];
            let ir = (0, c.x)(ea.b, nw),
                iu = aK?.fullscreenContent != null ? "content" : "workspace",
                ih = (0, P.a)(a$ ? "embedded" : iu),
                ip = !ir && (r8 || !r7.isError) && !aQ && !ob && (null == aZ || aJ?.authMethod === "chatgpt" || a0) && (!a6 || null != on),
                im = r0 || ob || oT || oI || oc,
                ig = im || oZ || oJ?.needsEntry === !0;
            if (oZ) {
                let e;
                aw[223] !== rh ? (e = rh.formatMessage(sE.d.readOnlyPlaceholder), aw[223] = rh, aw[224] = e) : e = aw[224], nC = e
            } else !im && oJ?.needsEntry && (nC = !1);
            let iv = ip && !im && !a6 && !r9 && !ow && !rQ && !rq && !rK && !oF,
                iy = !ip || a6 || ig || r9 ? null : ra;
            if (aw[225] !== oF || aw[226] !== rc || aw[227] !== oC || aw[228] !== o_ || aw[229] !== on?.current_node || aw[230] !== aC || aw[231] !== oA || aw[232] !== ov || aw[233] !== s$ || aw[234] !== s2 || aw[235] !== s3 || aw[236] !== s4 || aw[237] !== aM || aw[238] !== aQ || aw[239] !== ig || aw[240] !== r9 || aw[241] !== oW || aw[242] !== ob || aw[243] !== a6 || aw[244] !== rq || aw[245] !== aB || aw[246] !== ol || aw[247] !== rQ || aw[248] !== of || aw[249] !== oI || aw[250] !== oc || aw[251] !== a8 || aw[252] !== rH || aw[253] !== ng || aw[254] !== sn || aw[255] !== sa || aw[256] !== oZ || aw[257] !== rE || aw[258] !== aX.get || aw[259] !== rP || aw[260] !== tR?.current_node || aw[261] !== aq || aw[262] !== ip || aw[263] !== si || aw[264] !== rv || aw[265] !== r$) {
                let e;
                aw[267] !== oC || aw[268] !== o_ || aw[269] !== ov || aw[270] !== of || aw[271] !== a8 || aw[272] !== sn || aw[273] !== sa || aw[274] !== oZ || aw[275] !== aX.get || aw[276] !== rv ? (e = oZ || null == a8 || null == sn ? sa : (0, tj.a)({
                    ...sn,
                    current_node: a8.promptMessageId
                }, {
                    clinicalSearchEnabled: o_,
                    clinicalCitationsEnabled: oC,
                    enableCloudBrowserActivity: ov,
                    ...rv,
                    isWorkConversation: of,
                    getRenderTelemetry: e => (0, s5.c)(aX.get, e)
                }), aw[267] = oC, aw[268] = o_, aw[269] = ov, aw[270] = of, aw[271] = a8, aw[272] = sn, aw[273] = sa, aw[274] = oZ, aw[275] = aX.get, aw[276] = rv, aw[277] = e) : e = aw[277];
                let t = (0, tA.c)({
                    paragen: a8,
                    hideInitialUserMessage: aM,
                    browserConversationId: void 0,
                    conversationId: aC,
                    enableCloudBrowserActivity: ov,
                    errorMessage: s$,
                    branchingMessageId: rc,
                    isReadOnly: aQ || ob || a6 || null != aq,
                    isTemporaryChat: aB,
                    isWorkConversation: ol,
                    onRegenerateResponse: oF || a6 || null != aq || aQ || ob || oI || oc || rQ || rq ? void 0 : s4,
                    onEditUserMessage: oF || null == ng || ol || aQ || ob || oI || !r$ || rq ? void 0 : s3,
                    onFork: null == ng || aB || oI || oc || aQ || ob ? void 0 : s2,
                    pendingSubmissionAttachments: rH,
                    shareEnabled: null == oA && !aB && !a6 && !aQ && !ob && !oW,
                    readAloudEnabled: !a6 && !ob,
                    feedbackEnabled: !a6 && !ob && null == aq,
                    renderedTurns: e,
                    safetyReview: rE,
                    sharedConversationLastMessageId: tR?.current_node ?? rP ?? (a6 ? on?.current_node : null),
                    showPendingLoadingMessage: si,
                    showRequestUserInputStatus: ip && !ig && !r9
                });
                n_ = oZ ? (0, sE.a)(t) : t, aw[225] = oF, aw[226] = rc, aw[227] = oC, aw[228] = o_, aw[229] = on?.current_node, aw[230] = aC, aw[231] = oA, aw[232] = ov, aw[233] = s$, aw[234] = s2, aw[235] = s3, aw[236] = s4, aw[237] = aM, aw[238] = aQ, aw[239] = ig, aw[240] = r9, aw[241] = oW, aw[242] = ob, aw[243] = a6, aw[244] = rq, aw[245] = aB, aw[246] = ol, aw[247] = rQ, aw[248] = of, aw[249] = oI, aw[250] = oc, aw[251] = a8, aw[252] = rH, aw[253] = ng, aw[254] = sn, aw[255] = sa, aw[256] = oZ, aw[257] = rE, aw[258] = aX.get, aw[259] = rP, aw[260] = tR?.current_node, aw[261] = aq, aw[262] = ip, aw[263] = si, aw[264] = rv, aw[265] = r$, aw[266] = n_
            } else n_ = aw[266];
            let ib = n_;
            aw[278] !== rh ? (nj = rh.formatMessage({
                id: "chatgptConversations.loadingConversation",
                defaultMessage: "Loading ChatGPT conversation"
            }), aw[278] = rh, aw[279] = nj) : nj = aw[279];
            let ix = nj;
            aw[280] !== aC || aw[281] !== oA ? (nS = null == oA ? null : (0, a.jsx)(t5.ChatGptGizmoHeader, {
                conversationId: aC,
                gizmoId: oA
            }), aw[280] = aC, aw[281] = oA, aw[282] = nS) : nS = aw[282];
            let iw = nS;
            aw[283] !== aQ || aw[284] !== a6 || aw[285] !== ol ? (nI = !ol || a6 || aQ ? null : (0, a.jsx)($.a, {
                hostId: eg.a
            }), aw[283] = aQ, aw[284] = a6, aw[285] = ol, aw[286] = nI) : nI = aw[286];
            let iC = nI,
                i_ = !a6 && null == aq && !aQ && !aB && !rx,
                ij = (0, c.x)(!i_ || a$ || ob ? null : sp.a, aC);
            aw[287] !== aC || aw[288] !== aX || aw[289] !== i_ ? (nT = i_ ? () => {
                let e = aX.get(sp.b, aC);
                e?.title && sx(aX, {
                    conversationId: aC,
                    courseId: e.course_id
                }, {
                    preserveFocus: !0
                })
            } : void 0, aw[287] = aC, aw[288] = aX, aw[289] = i_, aw[290] = nT) : nT = aw[290];
            let iS = nT;
            aw[291] !== iv || aw[292] !== aC || aw[293] !== ow || aw[294] !== oJ ? (nE = null != oJ ? (0, a.jsx)("div", {
                className: "max-w-full min-w-0",
                inert: ow,
                children: (0, a.jsx)(n4, {
                    conversationId: aC,
                    placement: "progress",
                    canStartSection: iv
                })
            }) : null, aw[291] = iv, aw[292] = aC, aw[293] = ow, aw[294] = oJ, aw[295] = nE) : nE = aw[295];
            let iI = nE,
                iT = !oB && !aQ && !ob,
                iE = !aB && !a6 && null != rg,
                iP = iT && null != rA;
            aw[296] !== aB ? (nP = !aB && (0, K.a)({
                browser: !0
            }), aw[296] = aB, aw[297] = nP) : nP = aw[297];
            let iA = nP,
                iM = (0, c.x)(!!iP && !iE && !a6 && !of && !!ip && !ig && tg.d, aC),
                ik = iP && (iE || iA || iM);
            aw[298] !== aH || aw[299] !== of || aw[300] !== oU ? (nA = (0, K.a)({
                browser: !0
            }) && !of && null != oU && null == aH, aw[298] = aH, aw[299] = of, aw[300] = oU, aw[301] = nA) : nA = aw[301];
            let iR = nA;
            aw[302] !== ik || aw[303] !== iR || aw[304] !== oV || aw[305] !== oO || aw[306] !== oU ? (nM = ik && null != oO && !iR ? {
                icon: oV,
                name: oU
            } : void 0, aw[302] = ik, aw[303] = iR, aw[304] = oV, aw[305] = oO, aw[306] = oU, aw[307] = nM) : nM = aw[307];
            let iN = nM;
            aw[308] !== aC || aw[309] !== oB || aw[310] !== ik || aw[311] !== rA || aw[312] !== iS || aw[313] !== iN ? (nk = oB ? (0, a.jsx)(eY.BusinessAgentConversationHeader, {
                conversationId: aC,
                fallback: null
            }) : (0, a.jsx)(n$, {
                onClick: iS,
                hasTitleMenu: ik,
                project: iN,
                title: rA
            }), aw[308] = aC, aw[309] = oB, aw[310] = ik, aw[311] = rA, aw[312] = iS, aw[313] = iN, aw[314] = nk) : nk = aw[314];
            let iO = nk,
                iB = null != oJ,
                iL = sQ && !a6 && !aQ,
                iF = oB ? null : iw;
            aw[315] !== iR || aw[316] !== oV || aw[317] !== oO || aw[318] !== oU || aw[319] !== iN ? (nR = null != oO && null == iN ? (0, a.jsx)(nq, {
                projectId: oO,
                name: oU,
                icon: oV,
                linkToProject: iR
            }) : null, aw[315] = iR, aw[316] = oV, aw[317] = oO, aw[318] = oU, aw[319] = iN, aw[320] = nR) : nR = aw[320], aw[321] !== aH || aw[322] !== iF || aw[323] !== nR ? (nN = (0, a.jsxs)(a.Fragment, {
                children: [aH, iF, nR]
            }), aw[321] = aH, aw[322] = iF, aw[323] = nR, aw[324] = nN) : nN = aw[324], aw[325] !== iO || aw[326] !== aB || aw[327] !== iC || aw[328] !== iB || aw[329] !== iL || aw[330] !== nN ? (nO = (0, a.jsx)(nz.a, {
                hasSectionProgress: iB,
                isTemporaryChat: aB,
                isCloudTask: iL,
                leading: nN,
                start: iO,
                startActions: iC
            }), aw[325] = iO, aw[326] = aB, aw[327] = iC, aw[328] = iB, aw[329] = iL, aw[330] = nN, aw[331] = nO) : nO = aw[331];
            let iG = nO,
                iz = sa.flatMap(ic).flatMap(il),
                iD = iz.flatMap(ii);
            if (!a6 && (r7.error instanceof eK.FetchError && 423 === r7.error.status || oH && null == r6)) {
                let e;
                return aw[332] !== r7 || aw[333] !== aC || aw[334] !== aX ? (e = (0, a.jsx)(sw.a, {
                    onUnlocked: () => {
                        (0, sC.g)(aX.get(sC.f)?.projectId, [aC]), r7.refetch()
                    }
                }), aw[332] = r7, aw[333] = aC, aw[334] = aX, aw[335] = e) : e = aw[335], e
            }
            if (null != oY) {
                let e;
                return aw[336] !== oY ? (e = (0, a.jsx)(f.l, {
                    replace: !0,
                    to: oY
                }), aw[336] = oY, aw[337] = e) : e = aw[337], e
            }
            let iH = e => iT && iE ? (0, a.jsx)(nL, {
                onTitleClick: iS,
                showMenu: ik || null != e,
                triggerButton: e,
                conversationId: aC,
                title: rM,
                isHandoffPending: rd,
                isArchived: on?.is_archived === !0,
                isChatConversation: null != on && !of,
                onHandoff: oN ? s7 : void 0,
                onOpenMessage: async e => {
                    ru.current?.signal.aborted === !1 && aX.get(w.b)?.pathname === aX.value.pathname && await rn.current?.scrollToMessage(e)
                },
                projectId: oO,
                projectName: oU,
                serverConversationId: rg,
                conversationOrigin: oi
            }) : null;
            aw[338] !== on?.current_node || aw[339] !== aC || aw[340] !== oD || aw[341] !== oH || aw[342] !== a6 || aw[343] !== aB || aw[344] !== rQ || aw[345] !== oO || aw[346] !== sa.length || aw[347] !== rg || aw[348] !== aq || aw[349] !== rx || aw[350] !== iT || aw[351] !== rC ? (nB = !iT || aB || a6 || oH ? null : (0, a.jsx)(tD, {
                conversationId: aC,
                projectId: oO,
                sharedProjectConversation: aq,
                isReady: (null != rg || null != aq) && sa.length > 0 && (rC ?? on?.current_node) != null,
                isRestricted: rx || oD,
                isStreaming: rQ
            }), aw[338] = on?.current_node, aw[339] = aC, aw[340] = oD, aw[341] = oH, aw[342] = a6, aw[343] = aB, aw[344] = rQ, aw[345] = oO, aw[346] = sa.length, aw[347] = rg, aw[348] = aq, aw[349] = rx, aw[350] = iT, aw[351] = rC, aw[352] = nB) : nB = aw[352];
            let iW = nB,
                iU = null != ij ? aC : null;
            aw[353] !== on || aw[354] !== r5 || aw[355] !== aQ || aw[356] !== sY || aw[357] !== a$ || aw[358] !== ob || aw[359] !== a6 || aw[360] !== of ? (nF = of || a6 || a$ || ob || aQ || sY || null == on && !r5 ? null : (0, a.jsx)(E.a, {}), aw[353] = on, aw[354] = r5, aw[355] = aQ, aw[356] = sY, aw[357] = a$, aw[358] = ob, aw[359] = a6, aw[360] = of, aw[361] = nF) : nF = aw[361], aw[362] !== r7.fetchStatus || aw[363] !== s0 || aw[364] !== a$ || aw[365] !== sZ ? (nD = !1, aw[362] = r7.fetchStatus, aw[363] = s0, aw[364] = a$, aw[365] = sZ, aw[366] = nD) : nD = aw[366], aw[367] !== r7.data || aw[368] !== r7.fetchStatus || aw[369] !== on || aw[370] !== aC || aw[371] !== s0 || aw[372] !== r5 || aw[373] !== st || aw[374] !== sY || !1 !== aw[375] || aw[376] !== sa.length ? (nW = null, aw[367] = r7.data, aw[368] = r7.fetchStatus, aw[369] = on, aw[370] = aC, aw[371] = s0, aw[372] = r5, aw[373] = st, aw[374] = sY, aw[375] = !1, aw[376] = sa.length, aw[377] = nW) : nW = aw[377];
            let iq = !a6 && !ob && (0, ee.c)() ? (0, a.jsx)(et.c, {
                callIds: iD,
                hostId: eg.a,
                conversationId: (0, d.Ue)(`chatgpt:${aC}`)
            }) : null;
            aw[378] !== rM || aw[379] !== a$ || aw[380] !== aZ || aw[381] !== aK?.documentTitle ? (nK = a$ ? null : (0, a.jsx)(V.a, {
                title: null == aZ ? aK?.documentTitle ?? rM : null
            }), aw[378] = rM, aw[379] = a$, aw[380] = aZ, aw[381] = aK?.documentTitle, aw[382] = nK) : nK = aw[382], aw[383] !== aC || aw[384] !== a$ || aw[385] !== ow || aw[386] !== a6 || aw[387] !== aB || aw[388] !== of || aw[389] !== ib ? (nV = a$ || of ? null : (0, a.jsx)(no.a, {
                conversationId: aC,
                canCopy: !ow,
                paragenEnabled: !a6,
                turns: ib,
                loadHistory: !aB && !a6
            }), aw[383] = aC, aw[384] = a$, aw[385] = ow, aw[386] = a6, aw[387] = aB, aw[388] = of, aw[389] = ib, aw[390] = nV) : nV = aw[390];
            let iK = null != on || r5;
            aw[391] !== s0 || aw[392] !== of || aw[393] !== iK ? (nQ = (0, a.jsx)(eV.a, {
                isWorkConversation: of,
                hasConversationContent: iK,
                hasLoadError: s0
            }), aw[391] = s0, aw[392] = of, aw[393] = iK, aw[394] = nQ) : nQ = aw[394], aw[395] !== aC || aw[396] !== s0 || aw[397] !== sJ || aw[398] !== a$ || aw[399] !== ou.pathname || aw[400] !== aX || aw[401] !== aL ? (nY = a$ || !sJ || s0 ? null : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(sA, {
                    sharedConversationId: aL
                }), (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(ei.a, {
                        onCommit: () => eo.b.contentCommitted(aX, aC, aL, ou.pathname),
                        onPaint: () => eo.b.pagePainted(aX, aC, aL)
                    }, aL ?? aC)
                })]
            }), aw[395] = aC, aw[396] = s0, aw[397] = sJ, aw[398] = a$, aw[399] = ou.pathname, aw[400] = aX, aw[401] = aL, aw[402] = nY) : nY = aw[402];
            let iV = a$ || null != aK ? null : (0, a.jsxs)(ns.a, {
                    chatIcon: null == oO ? void 0 : oV,
                    header: iG,
                    title: rA,
                    fullScreenTitle: iO,
                    isArchivedPreview: aQ,
                    children: [null == iI ? null : (0, a.jsx)(nH, {
                        children: iI
                    }), aJ?.authMethod === "chatgpt" ? (0, a.jsx)(Y.v, {
                        productExperience: of ? "work" : "chat"
                    }) : null, a6 ? (0, a.jsx)(sR.a, {
                        children: null == ok ? null : (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)(sD, {
                                data: ok
                            })
                        })
                    }) : null, i_ ? (0, a.jsx)(nl, {
                        conversationId: aC,
                        scheduledAutomationId: om ? op?.sidebarAutomationId : void 0
                    }, aC) : null, sz ? (0, a.jsx)(ne.c, {
                        composerActions: iy,
                        conversationId: sV,
                        controlledState: sm ? {
                            isOpen: sj.isOpen,
                            shouldPreventAutoFocus: sj.shouldPreventAutoFocus,
                            onOpenChange: e => {
                                s_({
                                    ...sj,
                                    isOpen: e,
                                    shouldPreventAutoFocus: !e && sj.shouldPreventAutoFocus
                                })
                            }
                        } : void 0,
                        readData: !sm || sj.isOpen ? nu : null,
                        showSources: !sm,
                        shouldBlockExternalEgress: rx
                    }) : null, aB && !a6 && !aQ && null == oP && null == oL && null == oO && !oD && null != sn && (0, u.a)(sn).some(is) ? (0, a.jsx)(_.a.HeaderAction, {
                        actionId: "chatgpt-conversation-save",
                        align: "end",
                        order: 100,
                        children: (0, a.jsx)(sX, {
                            conversationId: aC
                        })
                    }) : null, iT && (0, a.jsx)(nz.b, {
                        hasTitleMenu: ik,
                        menu: iH() ?? (ik && (0, a.jsx)(nG, {
                            title: rM,
                            includePlugins: iA,
                            lockdownConversationId: iM ? aC : null
                        })),
                        children: iW
                    })]
                }),
                iQ = t4.a,
                i$ = !aY || !ip || ih.isHidden || ig || oF || ow || r9 || aQ || ob || oT || oI || oc || rK || rq,
                iY = oO,
                iX = null != oL,
                iJ = eB.c;
            aw[403] !== a$ || aw[404] !== og || aw[405] !== of || aw[406] !== iI || aw[407] !== aK ? (nX = a$ || null != aK ? iI : og && (0, eF.a)() && !of && (0, a.jsx)("div", {
                className: "h-px",
                "aria-hidden": !0
            }), aw[403] = a$, aw[404] = og, aw[405] = of, aw[406] = iI, aw[407] = aK, aw[408] = nX) : nX = aw[408];
            let iZ = null == oJ ? "flex h-full min-h-0 flex-col" : "h-full",
                i0 = oa ?? rM,
                i1 = !ow,
                i2 = !rt && !a$ && !a6 && !ir && !ih.isHidden,
                i3 = rx || oj,
                i4 = od?.isFullWidth === !0,
                i5 = null == od ? sK.contentShift : void 0,
                i6 = oJ?.selectedIndex;
            aw[409] !== iv || aw[410] !== aC || aw[411] !== oJ ? (nJ = null != oJ ? (0, a.jsx)(n4, {
                conversationId: aC,
                placement: "composer",
                canStartSection: iv
            }) : void 0, aw[409] = iv, aw[410] = aC, aw[411] = oJ, aw[412] = nJ) : nJ = aw[412], aw[413] !== aC || aw[414] !== oJ ? (nZ = null != oJ ? (0, a.jsx)(n3, {
                conversationId: aC
            }) : void 0, aw[413] = aC, aw[414] = oJ, aw[415] = nZ) : nZ = aw[415];
            let i7 = !of,
                i8 = oZ ? null : s$;
            aw[416] !== r7 || aw[417] !== s1 ? (n1 = s1 ? () => {
                r7.refetch({
                    cancelRefetch: !1
                })
            } : void 0, aw[416] = r7, aw[417] = s1, aw[418] = n1) : n1 = aw[418];
            let i9 = sa.length > 0,
                le = nC,
                lt = !oD && (null == oO || null != oG),
                ln = null == oJ && !os,
                la = r7.isFetching,
                lr = r8 && !a$ && !a6 && !of && null == oP,
                lo = !oZ && rQ;
            aw[419] !== on?.is_archived || aw[420] !== aC || aw[421] !== aQ || aw[422] !== a$ || aw[423] !== a6 || aw[424] !== aB || aw[425] !== rQ || aw[426] !== of ? (n7 = a$ || !of || a6 || aQ || on?.is_archived === !0 || aB ? null : (0, a.jsx)(m.Suspense, {
                fallback: null,
                children: (0, a.jsx)(n2, {
                    conversationId: aC,
                    isTurnActive: rQ
                })
            }), aw[419] = on?.is_archived, aw[420] = aC, aw[421] = aQ, aw[422] = a$, aw[423] = a6, aw[424] = aB, aw[425] = rQ, aw[426] = of, aw[427] = n7) : n7 = aw[427], aw[428] !== aC || aw[429] !== aQ || aw[430] !== rg ? (n8 = aQ ? (0, a.jsx)(ek, {
                conversationId: rg ?? aC,
                kind: "chatgpt"
            }, rg ?? aC) : void 0, aw[428] = aC, aw[429] = aQ, aw[430] = rg, aw[431] = n8) : n8 = aw[431];
            let ls = !oZ && si;
            aw[432] !== oL ? (n9 = null != oL ? (0, a.jsx)(sc.GptPluginMigrationBanner, {
                gizmoId: oL
            }) : null, aw[432] = oL, aw[433] = n9) : n9 = aw[433], aw[434] !== oN || aw[435] !== s7 || aw[436] !== rd || aw[437] !== aB || aw[438] !== oS || aw[439] !== rZ ? (ae = oS && !aB ? (0, a.jsx)(na, {
                canConvert: oN,
                isChatInstantAvailable: !rZ,
                isConverting: rd,
                onConvert: s7
            }) : null, aw[434] = oN, aw[435] = s7, aw[436] = rd, aw[437] = aB, aw[438] = oS, aw[439] = rZ, aw[440] = ae) : ae = aw[440], aw[441] !== oe || aw[442] !== ob ? (at = oe.bind(null, ob), aw[441] = oe, aw[442] = ob, aw[443] = at) : at = aw[443], aw[444] !== ia || aw[445] !== a6 || aw[446] !== aO ? (an = e => {
                aO?.(e), a6 && ia()
            }, aw[444] = ia, aw[445] = a6, aw[446] = aO, aw[447] = an) : an = aw[447], aw[448] !== r7.isFetching || aw[449] !== oF || aw[450] !== re || aw[451] !== oL || aw[452] !== aD || aw[453] !== aC || aw[454] !== ix || aw[455] !== rn || aw[456] !== aA || aw[457] !== s0 || aw[458] !== aT || aw[459] !== a5 || aw[460] !== ig || aw[461] !== st || aw[462] !== r9 || aw[463] !== sY || aw[464] !== rt || aw[465] !== a$ || aw[466] !== a6 || aw[467] !== aB || aw[468] !== ol || aw[469] !== nC || aw[470] !== aG || aw[471] !== aR || aw[472] !== rw || aw[473] !== aL || aw[474] !== ot || aw[475] !== ip || aw[476] !== aY || aw[477] !== i4 || aw[478] !== i5 || aw[479] !== i6 || aw[480] !== nJ || aw[481] !== nZ || aw[482] !== i7 || aw[483] !== i8 || aw[484] !== n1 || aw[485] !== i9 || aw[486] !== lt || aw[487] !== ln || aw[488] !== lr || aw[489] !== lo || aw[490] !== n7 || aw[491] !== n8 || aw[492] !== ls || aw[493] !== n9 || aw[494] !== ae || aw[495] !== at || aw[496] !== an || aw[497] !== i0 || aw[498] !== i1 || aw[499] !== i2 || aw[500] !== i3 || aw[501] !== ak || aw[502] !== ib || aw[503] !== aK ? (aa = (0, a.jsx)(so, {
                ref: rn,
                printTitle: i0,
                trackShownImpressions: i1,
                trackReadState: i2,
                workspace: aK,
                shouldBlockMcpApps: i3,
                isCoveredByFloatingPanel: i4,
                isFormOnly: rt,
                isInlinePreview: a$,
                hideModelPicker: aT,
                showFilePicker: aY,
                disableAutoFocus: aA,
                transcriptPresentation: ak,
                scrollOrigin: aR,
                composerRef: rr,
                contentX: i5,
                conversationId: aC,
                composerConversationId: re,
                sectionIndex: i6,
                composerLeadingContent: aD,
                aboveComposerContent: nJ,
                historyLoadingContent: nZ,
                requiredSystemHints: aG,
                isChatConversation: i7,
                customGptId: oL,
                conversationLoadingLabel: ix,
                entries: ib,
                errorMessage: i8,
                hasLoadError: s0,
                onRetryLoad: n1,
                hasRenderableTurns: i9,
                isComposerDisabled: ig,
                readOnlyPlaceholder: le,
                moreDetailsEnabled: lt,
                isConversationEmpty: st,
                showEmptyState: ln,
                isConversationFetching: la,
                isConversationLoading: sY,
                isSharedConversation: a6,
                isSubmitDisabled: r9,
                retainLiveModelPicker: lr,
                isTemporaryChat: aB,
                isTurnActive: lo,
                isWorkConversation: ol,
                onboardingPrelude: n7,
                scrollStateConversationId: rw,
                initialResponsePlacementKey: a5,
                sharedConversationId: aL,
                sharedPostRegulatedConnectorKind: ot,
                showComposer: ip,
                archivedPreviewFooter: n8,
                showPendingLoadingMessage: ls,
                gptPluginMigrationBanner: n9,
                awaitingGptContinuation: oF,
                workOnlyConversionBanner: ae,
                onAddSelectedText: at,
                onSubmitAccepted: an
            }), aw[448] = r7.isFetching, aw[449] = oF, aw[450] = re, aw[451] = oL, aw[452] = aD, aw[453] = aC, aw[454] = ix, aw[455] = rn, aw[456] = aA, aw[457] = s0, aw[458] = aT, aw[459] = a5, aw[460] = ig, aw[461] = st, aw[462] = r9, aw[463] = sY, aw[464] = rt, aw[465] = a$, aw[466] = a6, aw[467] = aB, aw[468] = ol, aw[469] = nC, aw[470] = aG, aw[471] = aR, aw[472] = rw, aw[473] = aL, aw[474] = ot, aw[475] = ip, aw[476] = aY, aw[477] = i4, aw[478] = i5, aw[479] = i6, aw[480] = nJ, aw[481] = nZ, aw[482] = i7, aw[483] = i8, aw[484] = n1, aw[485] = i9, aw[486] = lt, aw[487] = ln, aw[488] = lr, aw[489] = lo, aw[490] = n7, aw[491] = n8, aw[492] = ls, aw[493] = n9, aw[494] = ae, aw[495] = at, aw[496] = an, aw[497] = i0, aw[498] = i1, aw[499] = i2, aw[500] = i3, aw[501] = ak, aw[502] = ib, aw[503] = aK, aw[504] = aa) : aa = aw[504], aw[505] !== sj || aw[506] !== nu || aw[507] !== sm || aw[508] !== rx || aw[509] !== sz || aw[510] !== iy || aw[511] !== sV || aw[512] !== sK ? (ar = sz && null != nu && (!sm || sj.isOpen) ? (0, a.jsx)(ne.a, {
                composerActions: iy,
                conversationId: sV,
                readData: nu,
                showSources: !sm,
                display: sK,
                shouldBlockExternalEgress: rx
            }) : null, aw[505] = sj, aw[506] = nu, aw[507] = sm, aw[508] = rx, aw[509] = sz, aw[510] = iy, aw[511] = sV, aw[512] = sK, aw[513] = ar) : ar = aw[513], aw[514] === Symbol.for("react.memo_cache_sentinel") ? (ao = (0, a.jsx)(t2.a, {}), aw[514] = ao) : ao = aw[514], aw[515] !== a$ ? (as = null, aw[515] = a$, aw[516] = as) : as = aw[516], aw[517] !== ow || aw[518] !== aa || aw[519] !== ar || aw[520] !== as || aw[521] !== iZ ? (ai = (0, a.jsxs)("div", {
                className: iZ,
                inert: ow,
                children: [aa, ar, ao, as]
            }), aw[517] = ow, aw[518] = aa, aw[519] = ar, aw[520] = as, aw[521] = iZ, aw[522] = ai) : ai = aw[522];
            let li = !ob && (0, ee.c)() ? (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(s8, {
                    conversationId: aC,
                    shouldBlockExternalEgress: rx || oj,
                    widgets: iz.filter(io)
                }), a6 ? null : (0, a.jsx)(en.a, {
                    blockedWidgetSource: r3 ? void 0 : "descriptor",
                    transcriptMcpAppIds: (0, s6.c)(aC, iz, r3),
                    shouldBlockExternalEgress: rx || oj
                })]
            }) : null;
            aw[523] !== iJ || aw[524] !== aW || aw[525] !== ox || aw[526] !== ai || aw[527] !== li || aw[528] !== nX ? (al = (0, a.jsxs)(iJ, {
                floatingPanelWidth: ox,
                header: nX,
                banner: aW,
                children: [ai, li]
            }), aw[523] = iJ, aw[524] = aW, aw[525] = ox, aw[526] = ai, aw[527] = li, aw[528] = nX, aw[529] = al) : al = aw[529], aw[530] !== iQ || aw[531] !== re || aw[532] !== oi || aw[533] !== aB || aw[534] !== oO || aw[535] !== al || aw[536] !== i$ || aw[537] !== iX ? (ac = (0, a.jsx)(iQ, {
                conversationId: re,
                conversationOrigin: oi,
                disabled: i$,
                isTemporaryChat: aB,
                projectId: iY,
                requiresGizmoId: iX,
                children: al
            }), aw[530] = iQ, aw[531] = re, aw[532] = oi, aw[533] = aB, aw[534] = oO, aw[535] = al, aw[536] = i$, aw[537] = iX, aw[538] = ac) : ac = aw[538], aw[539] !== sT || aw[540] !== ac || aw[541] !== iU || aw[542] !== nF || aw[543] !== nD || aw[544] !== nW || aw[545] !== iq || aw[546] !== nK || aw[547] !== nV || aw[548] !== nQ || aw[549] !== nY || aw[550] !== iV ? (ad = (0, a.jsxs)(sT, {
                courseChatId: iU,
                children: [nF, nD, nW, iq, nK, nV, nQ, nY, iV, null, ac]
            }), aw[539] = sT, aw[540] = ac, aw[541] = iU, aw[542] = nF, aw[543] = nD, aw[544] = nW, aw[545] = iq, aw[546] = nK, aw[547] = nV, aw[548] = nQ, aw[549] = nY, aw[550] = iV, aw[551] = ad) : ad = aw[551];
            let ll = ad,
                lc = !a$ && !ol,
                ld = a6 || !r7.isFetchedAfterMount || r7.isFetching || r8 ? null : r7.error;
            aw[552] !== aC || aw[553] !== a$ || aw[554] !== aX || aw[555] !== aL ? (au = e => {
                a$ || eo.b.loadFailed(aX, aC, aL, e)
            }, aw[552] = aC, aw[553] = a$, aw[554] = aX, aw[555] = aL, aw[556] = au) : au = aw[556];
            let lu = s0 ? r7.error : null,
                lh = null == oi && null == on ? null : of,
                lp = !of && !sY;
            aw[557] !== ra || aw[558] !== re || aw[559] !== aL ? (ah = {
                conversationId: re,
                composer: ra,
                sharedConversationId: aL
            }, aw[557] = ra, aw[558] = re, aw[559] = aL, aw[560] = ah) : ah = aw[560], aw[561] !== aC || aw[562] !== a$ || aw[563] !== rg || aw[564] !== aL ? (ap = a$ ? null : (0, eo.a)(rg ?? aC, aL), aw[561] = aC, aw[562] = a$, aw[563] = rg, aw[564] = aL, aw[565] = ap) : ap = aw[565];
            let lm = !sZ;
            return aw[566] !== lm ? (am = (0, a.jsx)(es.i, {
                name: "conversation data",
                active: lm
            }), aw[566] = lm, aw[567] = am) : am = aw[567], aw[568] !== ow ? (ag = (0, a.jsx)(es.i, {
                name: "workspace policy",
                active: ow
            }), aw[568] = ow, aw[569] = ag) : ag = aw[569], aw[570] !== aS || aw[571] !== aC || aw[572] !== iW || aw[573] !== iH ? (af = aS && (0, a.jsx)(aS, {
                buttons: iW,
                conversationId: aC,
                renderMenu: iH
            }), aw[570] = aS, aw[571] = aC, aw[572] = iW, aw[573] = iH, aw[574] = af) : af = aw[574], aw[575] !== ll || aw[576] !== ap || aw[577] !== am || aw[578] !== ag || aw[579] !== af ? (av = (0, a.jsxs)(es.h, {
                destinationKey: ap,
                children: [am, ag, af, ll]
            }), aw[575] = ll, aw[576] = ap, aw[577] = am, aw[578] = ag, aw[579] = af, aw[580] = av) : av = aw[580], aw[581] !== ah || aw[582] !== av ? (ay = (0, a.jsx)(tC.a, {
                value: ah,
                children: av
            }), aw[581] = ah, aw[582] = av, aw[583] = ay) : ay = aw[583], aw[584] !== lp || aw[585] !== ay ? (ab = (0, a.jsx)(v.a, {
                enabled: lp,
                children: ay
            }), aw[584] = lp, aw[585] = ay, aw[586] = ab) : ab = aw[586], aw[587] !== s1 || aw[588] !== rg || aw[589] !== lc || aw[590] !== ld || aw[591] !== au || aw[592] !== lu || aw[593] !== lh || aw[594] !== ab ? (ax = (0, a.jsx)(k.a, {
                showChatFallback: lc,
                conversationId: rg,
                error: ld,
                onInlineLoadError: au,
                loadError: lu,
                canRetry: s1,
                isWorkConversation: lh,
                children: ab
            }), aw[587] = s1, aw[588] = rg, aw[589] = lc, aw[590] = ld, aw[591] = au, aw[592] = lu, aw[593] = lh, aw[594] = ab, aw[595] = ax) : ax = aw[595], ax
        }

        function io(e) {
            return "chatgpt-hosted-widget" === e.type
        }

        function is(e) {
            return "user" === e.author.role
        }

        function ii(e) {
            return "mcp-tool-call" === e.type ? [e.callId] : []
        }

        function il(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : e
        }

        function ic(e) {
            let {
                turn: t
            } = e;
            return t.items
        }

        function id(e) {
            return "threadId" in e ? e.threadId : e.clientThreadId
        }
    }),
    Ppno: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            o = n("BolX"),
            s = n("zd8w"),
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
                let t, n, m, g, f, v, y, b, x, w, C, _, j, S, I, T, E, P, A = (0, r.c)(68),
                    {
                        initialPlacementKey: M,
                        isActiveVoiceConversation: k,
                        isLoadingHistory: R,
                        latestUserTurnKey: N,
                        conversationId: O,
                        onResponseSpacerStateChange: B,
                        preserveResponseViewport: L
                    } = e,
                    F = void 0 !== k && k,
                    G = void 0 !== R && R,
                    z = (0, i.i)();
                A[0] !== F || A[1] !== z ? (t = F && (0, i.d)(z, "2825211774").get("voice_orb_transcript_clearance_enabled", !1), A[0] = F, A[1] = z, A[2] = t) : t = A[2];
                let D = t,
                    H = (0, s.useRef)(N),
                    W = (0, o.x)(null == O ? 0 : u.b, O ?? ""),
                    U = (0, s.useRef)(W),
                    q = (0, s.useRef)(G),
                    K = (0, s.useRef)(null),
                    V = (0, s.useRef)(null),
                    Q = (0, d.b)();
                A[3] !== Q ? (n = () => new c.a(Q), A[3] = Q, A[4] = n) : n = A[4];
                let [$] = (0, s.useState)(n), {
                    clear: Y,
                    consumeGrowth: X,
                    getHeightPx: J,
                    ensureScrollRoomForAnchor: Z,
                    place: ee,
                    prepareThreadEndContent: et
                } = $, {
                    addScrollListener: en,
                    getScrollElement: ea,
                    responseSpacerController: er
                } = Q;
                A[5] !== ea || A[6] !== ee || A[7] !== L ? (m = e => {
                    L?.(e => {
                        let t = ea();
                        null != t && ee(p(t, e) ?? void 0)
                    }) || ee(e)
                }, A[5] = ea, A[6] = ee, A[7] = L, A[8] = m) : m = A[8];
                let eo = (0, h.a)(m);
                A[9] !== Y || A[10] !== Q ? (g = () => {
                    Y(), Q.scrollToBottom()
                }, A[9] = Y, A[10] = Q, A[11] = g) : g = A[11];
                let es = (0, h.a)(g);
                A[12] !== es || A[13] !== W ? (f = () => {
                    U.current !== W && (U.current = W, es())
                }, v = [W, es], A[12] = es, A[13] = W, A[14] = f, A[15] = v) : (f = A[14], v = A[15]), (0, s.useLayoutEffect)(f, v), A[16] !== X || A[17] !== J || A[18] !== et || A[19] !== $.height || A[20] !== $.holdViewport || A[21] !== er || A[22] !== es ? (y = () => er.register({
                    consumeGrowth: X,
                    getHeightPx: J,
                    holdViewport: $.holdViewport,
                    prepareThreadEndContent: et,
                    scrollToBottom: es
                }, $.height).dispose, A[16] = X, A[17] = J, A[18] = et, A[19] = $.height, A[20] = $.holdViewport, A[21] = er, A[22] = es, A[23] = y) : y = A[23], A[24] !== X || A[25] !== J || A[26] !== et || A[27] !== $ || A[28] !== er || A[29] !== es ? (b = [X, J, et, $, er, es], A[24] = X, A[25] = J, A[26] = et, A[27] = $, A[28] = er, A[29] = es, A[30] = b) : b = A[30], (0, s.useInsertionEffect)(y, b), A[31] === Symbol.for("react.memo_cache_sentinel") ? (x = (e, t) => {
                    K.current = {
                        turnKey: e,
                        element: t
                    }, V.current?.(e, t)
                }, A[31] = x) : x = A[31];
                let ei = (0, h.a)(x);
                A[32] === Symbol.for("react.memo_cache_sentinel") ? (w = e => {
                    V.current = e;
                    let t = K.current;
                    return null != t && e(t.turnKey, t.element), () => {
                        V.current = null
                    }
                }, A[32] = w) : w = A[32];
                let el = (0, h.a)(w);
                A[33] !== ea || A[34] !== N || A[35] !== ee || A[36] !== D ? (C = () => {
                    let e = ea();
                    if (null != e && 0 !== e.clientHeight)
                        if (D && null != N) {
                            let t = p(e, N);
                            if (null == t) return;
                            ee(t)
                        } else ee()
                }, A[33] = ea, A[34] = N, A[35] = ee, A[36] = D, A[37] = C) : C = A[37];
                let ec = (0, s.useEffectEvent)(C);
                return A[38] !== Y || A[39] !== X || A[40] !== Z || A[41] !== J || A[42] !== B || A[43] !== ei || A[44] !== eo || A[45] !== D ? (_ = () => (B({
                    voiceAutoScrollEnabled: D,
                    clear: Y,
                    consumeGrowth: X,
                    getHeightPx: J,
                    ensureScrollRoomForAnchor: Z,
                    onTurnLayoutReady: ei,
                    place: eo
                }), () => {
                    B(null)
                }), j = [Y, X, J, Z, B, ei, eo, D], A[38] = Y, A[39] = X, A[40] = Z, A[41] = J, A[42] = B, A[43] = ei, A[44] = eo, A[45] = D, A[46] = _, A[47] = j) : (_ = A[46], j = A[47]), (0, s.useLayoutEffect)(_, j), A[48] !== ea || A[49] !== G || A[50] !== N || A[51] !== eo || A[52] !== $ || A[53] !== el || A[54] !== D ? (S = () => {
                    let e = H.current,
                        t = q.current;
                    if (H.current = N, q.current = G, D && !G && !t && null != N && N !== e) {
                        var n, a, r, o, s;
                        let e, t, i, l, c;
                        return n = N, a = ea, r = eo, o = el, s = $.getPendingPlacementSignal(), t = null, i = null, l = !1, c = () => {
                            l = !0, null != t && (cancelAnimationFrame(t), t = null), s.removeEventListener("abort", c), e?.()
                        }, s.addEventListener("abort", c, {
                            once: !0
                        }), e = o((e, o) => {
                            l || e !== n || (i = o, null == t && (t = requestAnimationFrame(() => {
                                t = null;
                                let e = a(),
                                    n = i?.querySelector("[data-user-message-bubble]") ?? i;
                                null != e && 0 !== e.clientHeight && null != n && e.contains(n) && !(n.getBoundingClientRect().height <= 0) && (c(), r(n))
                            })))
                        }), c
                    }
                }, I = [ea, G, N, eo, el, $, D], A[48] = ea, A[49] = G, A[50] = N, A[51] = eo, A[52] = $, A[53] = el, A[54] = D, A[55] = S, A[56] = I) : (S = A[55], I = A[56]), (0, s.useLayoutEffect)(S, I), A[57] !== en || A[58] !== M || A[59] !== ec || A[60] !== $ ? (T = () => {
                    if (null == M) return;
                    let e = $.getPendingPlacementSignal();
                    return en(() => {
                        e.aborted || ec()
                    })
                }, A[57] = en, A[58] = M, A[59] = ec, A[60] = $, A[61] = T) : T = A[61], A[62] !== en || A[63] !== M || A[64] !== $ ? (E = [en, M, $], A[62] = en, A[63] = M, A[64] = $, A[65] = E) : E = A[65], (0, s.useLayoutEffect)(T, E), A[66] !== $ ? (P = (0, a.jsx)(l.a, {
                    controller: $
                }), A[66] = $, A[67] = P) : P = A[67], P
            }
        })
    }),
    TRQ3: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            o = n("BolX"),
            s = n("jqIZ"),
            i = n("OWtl"),
            l = n("Ow2S"),
            c = n("wwvo"),
            d = n("x4uR"),
            u = n("u4MG"),
            h = n("OOaz"),
            p = n("dQRk"),
            m = n("jAnS");
        let g = (0, o.d)(i.a, (e, t) => {
            let {
                get: n
            } = t, a = n(p.j, e);
            return null != a ? a : n(p.E, e) || n(l.j, e) || null != n(l.A, e) ? void 0 : null
        });
        n.d(t, {}, {
            a: function(e) {
                let t, n, l, f, v, y, b, x = (0, r.c)(36),
                    {
                        children: w,
                        conversationId: C,
                        routePattern: _,
                        homePath: j
                    } = e,
                    S = void 0 === j ? "/" : j,
                    I = (0, o.y)(i.a),
                    {
                        hash: T,
                        key: E,
                        pathname: P,
                        search: A,
                        state: M
                    } = (0, s.Y)(),
                    {
                        conversationId: k,
                        gizmoId: R
                    } = (0, s.cb)(),
                    N = (0, o.x)(g, C),
                    O = (0, o.x)(p.E, C),
                    B = (0, o.x)(p.T, C),
                    L = O ? B : R;
                x[0] !== L ? (t = null != L && (0, u.a)(L) ? L : null, x[0] = L, x[1] = t) : t = x[1], x[2] === Symbol.for("react.memo_cache_sentinel") ? (n = {
                    enabled: !1
                }, x[2] = n) : n = x[2];
                let {
                    data: F
                } = (0, o.x)(d.b, t, n);
                x[3] !== L ? (l = null == L || (0, u.a)(L) ? null : L, x[3] = L, x[4] = l) : l = x[4], x[5] === Symbol.for("react.memo_cache_sentinel") ? (f = {
                    enabled: !1
                }, x[5] = f) : f = x[5];
                let {
                    data: G
                } = (0, o.x)(c.b, l, f);
                if (null === N || (0, m.i)(A) && null != N && !O) {
                    let e;
                    return x[6] !== S || x[7] !== A ? (e = (0, a.jsx)(s.l, {
                        replace: !0,
                        to: {
                            pathname: S,
                            search: A
                        }
                    }), x[6] = S, x[7] = A, x[8] = e) : e = x[8], e
                }
                x[9] !== C || x[10] !== G || x[11] !== L || x[12] !== F || x[13] !== N || x[14] !== _ ? (v = null != _ ? (0, s.C)(_, {
                    conversationId: N ?? C
                }) : (0, m.c)(N ?? C, {
                    gizmoId: F?.gizmo.short_url ?? G?.gizmo.short_url ?? L
                }), x[9] = C, x[10] = G, x[11] = L, x[12] = F, x[13] = N, x[14] = _, x[15] = v) : v = x[15];
                let z = v;
                if (x[16] !== C || x[17] !== z || x[18] !== k || x[19] !== T || x[20] !== E || x[21] !== P || x[22] !== N || x[23] !== I || x[24] !== A || x[25] !== M) {
                    let e = new URLSearchParams(A),
                        t = null != N && e.has("mfr"),
                        n = I.get(p.y, C),
                        r = M;
                    if (t) {
                        let t, n;
                        if (e.delete("mfr"), x[27] !== M ? (t = M ?? {}, x[27] = M, x[28] = t) : t = x[28], x[29] !== t) {
                            let {
                                modelFirstLanding: e,
                                modelFirstFallback: a,
                                ...r
                            } = t;
                            n = r, x[29] = t, x[30] = n
                        } else n = x[30];
                        r = n
                    }
                    if (null != k && (0, h.e)(k) && null != N) {
                        let e;
                        x[31] !== r ? (e = {
                            ...r,
                            fromChatGptFirstSend: !0
                        }, x[31] = r, x[32] = e) : e = x[32], r = e
                    }
                    y = P !== z || t ? (0, a.jsx)(s.l, {
                        replace: !0,
                        state: "tpp" === n || "flora" === n ? {
                            ...r,
                            workTurnVisit: (0, m.f)(I, E, M?.workTurnVisit)
                        } : r,
                        to: {
                            hash: t ? "" : T,
                            pathname: z,
                            search: t ? e.toString() : A
                        }
                    }) : null, x[16] = C, x[17] = z, x[18] = k, x[19] = T, x[20] = E, x[21] = P, x[22] = N, x[23] = I, x[24] = A, x[25] = M, x[26] = y
                } else y = x[26];
                return x[33] !== w || x[34] !== y ? (b = (0, a.jsxs)(a.Fragment, {
                    children: [y, w]
                }), x[33] = w, x[34] = y, x[35] = b) : b = x[35], b
            }
        })
    }),
    xtkq: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            o = n("BolX"),
            s = n("zd8w"),
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
                    p = (0, o.y)(l.a),
                    m = (0, o.z)(c.e),
                    g = (0, s.useContext)(i.a);
                return h[0] !== p ? (e = () => (p.set(c.f, !0), () => {
                    p.set(c.f, !1), (0, c.a)(p)
                }), t = [p], h[0] = p, h[1] = e, h[2] = t) : (e = h[1], t = h[2]), (0, s.useLayoutEffect)(e, t), h[3] !== g || h[4] !== m ? (n = null == m ? null : (0, a.jsx)(a.Fragment, {
                    children: [...(0, c.b)(m), m.overlay].filter(u).map(e => (0, a.jsx)(d.a.Root, {
                        animateOnMount: e.animateOnMount ?? !0,
                        fillHeight: !0,
                        fullWidth: e.isFullWidth,
                        fullWidthTransition: e.fullWidthTransition,
                        isPIPObstacle: !1,
                        portalContainer: g,
                        reserveToolbarSpace: e.reserveToolbarSpace ?? !0,
                        shouldHideInlineImmediately: e !== m && e !== m.overlay,
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
                }), h[3] = g, h[4] = m, h[5] = n) : n = h[5], n
            }
        })
    }),
    zrki: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            o = n("mBJV"),
            s = n("BolX"),
            i = n("zd8w"),
            l = n("Wf1j"),
            c = n("oyxz"),
            d = n("jqIZ"),
            u = n("Cslg"),
            h = n("kphc"),
            p = n("Sm6l"),
            m = n("bqtn"),
            g = n("Ot7V"),
            f = n("bf6R"),
            v = n("Bbed"),
            y = n("X6Vn"),
            b = n("SGsN"),
            x = n("e2yd"),
            w = n("yGJW"),
            C = n("gBBC"),
            _ = n("OWtl"),
            j = n("hZax"),
            S = n("JYRT"),
            I = n("wwvo"),
            T = n("wrCb"),
            E = n("H7Nt"),
            P = n("vzxm"),
            A = n("jAnS"),
            M = n("BWaN"),
            k = n("Pc6J"),
            R = n("KDcF"),
            N = n("YBQD");
        let O = (0, v.a)(async () => (await Promise.all([n.e(680612), n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(480171), n.e(716164), n.e(74952)]).then(n.bind(n, "eZlv"))).GptHeaderAboutDialog);

        function B(e) {
            let t, n, v, B, L, F, G, z, D, H, W, U, q, K, V, Q, $, Y, X, J, Z = (0, r.c)(56),
                {
                    gizmo: ee
                } = e,
                et = (0, s.y)(_.a),
                en = (0, l.a)(),
                {
                    search: ea
                } = (0, d.Y)(),
                er = (0, d._)(),
                [eo, es] = (0, i.useState)(!1),
                ei = (0, j.f)("2160578039"),
                el = (0, s.x)(S.a, "2513446768"),
                ec = ei && "gpt" === ee.gizmo.gizmo_type && null != ee.gizmo.migrated_plugin_id;
            Z[0] !== el ? (t = el?.get("disable_gpt_updates", !1), Z[0] = el, Z[1] = t) : t = Z[1];
            let ed = t,
                eu = ee.gizmo.current_user_permission?.can_write && !ec && !ed,
                {
                    data: eh
                } = (0, s.z)(I.c);
            Z[2] !== ee.gizmo.id || Z[3] !== eh ? (n = eh?.some(e => {
                let {
                    item: t
                } = e;
                return t.gizmo.id === ee.gizmo.id
            }), Z[2] = ee.gizmo.id, Z[3] = eh, Z[4] = n) : n = Z[4];
            let ep = n;
            Z[5] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, T.a)("/gpts/editor"), Z[5] = v) : v = Z[5];
            let em = `${v}/${encodeURIComponent(ee.gizmo.id)}`;
            Z[6] !== ee.gizmo.id || Z[7] !== ee.gizmo.short_url ? (B = ee.gizmo.short_url?.trim() || ee.gizmo.id, Z[6] = ee.gizmo.id, Z[7] = ee.gizmo.short_url, Z[8] = B) : B = Z[8], Z[9] !== B ? (L = (0, P.c)(B), Z[9] = B, Z[10] = L) : L = Z[10], Z[11] !== ea ? (F = (0, A.e)("", (0, A.i)(ea)), Z[11] = ea, Z[12] = F) : F = Z[12];
            let eg = `${L}${F}`;
            Z[13] !== en ? (G = en.formatMessage({
                id: "chatgptConversations.customGpt.actionsMenu",
                defaultMessage: "GPT actions"
            }), Z[13] = en, Z[14] = G) : G = Z[14];
            let ef = G;
            Z[15] === Symbol.for("react.memo_cache_sentinel") ? (z = (0, a.jsx)(x.a, {
                className: "icon-sm"
            }), Z[15] = z) : z = Z[15], Z[16] !== ef ? (D = (0, a.jsx)(p.a, {
                "aria-label": ef,
                color: "ghost",
                size: "icon",
                children: z
            }), Z[16] = ef, Z[17] = D) : D = Z[17], Z[18] !== ee.gizmo.gizmo_type || Z[19] !== ee.gizmo.id || Z[20] !== er || Z[21] !== eg || Z[22] !== et ? (H = "gpt" === ee.gizmo.gizmo_type ? (0, a.jsxs)(m.c.Item, {
                href: eg,
                onClick: e => {
                    e.defaultPrevented || ((0, w.a)(et, o.rc, {
                        stage: "CHATGPT_NEW_CHAT_ENTRY_STAGE_ENTRY",
                        entryPoint: "CHATGPT_NEW_CHAT_ENTRY_POINT_GPT_MENU",
                        location: "CHATGPT_NEW_CHAT_ENTRY_LOCATION_GIZMO_INFORMATION_DROPDOWN",
                        gizmoId: ee.gizmo.id
                    }), 0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || (e.preventDefault(), es(!1), (0, C.c)(et, null), (0, h.n)(et, "chat"), er(eg, {
                        state: {
                            focusComposerNonce: Date.now()
                        }
                    })))
                },
                children: [(0, a.jsx)(m.c.ItemIcon, {
                    children: (0, a.jsx)(f.Uh, {})
                }), (0, a.jsx)(c.a, {
                    id: "chatgptConversations.customGpt.newChat",
                    defaultMessage: "New chat"
                })]
            }) : null, Z[18] = ee.gizmo.gizmo_type, Z[19] = ee.gizmo.id, Z[20] = er, Z[21] = eg, Z[22] = et, Z[23] = H) : H = Z[23], Z[24] !== ee || Z[25] !== et ? (W = () => (0, y.f)(et, O, {
                accountId: et.get(u.f),
                resource: ee
            }), Z[24] = ee, Z[25] = et, Z[26] = W) : W = Z[26], Z[27] === Symbol.for("react.memo_cache_sentinel") ? (U = (0, a.jsx)(m.c.ItemIcon, {
                children: (0, a.jsx)(f.me, {})
            }), q = (0, a.jsx)(c.a, {
                id: "chatgptConversations.customGpt.about",
                defaultMessage: "About"
            }), Z[27] = U, Z[28] = q) : (U = Z[27], q = Z[28]), Z[29] !== W ? (K = (0, a.jsxs)(m.c.Item, {
                onSelect: W,
                children: [U, q]
            }), Z[29] = W, Z[30] = K) : K = Z[30];
            let ev = ep ? N.a : R.a;
            return Z[31] !== ee || Z[32] !== en || Z[33] !== ep || Z[34] !== et ? (V = () => {
                (0, I.e)(et, ee, !ep).catch(() => {
                    et.get(b.f).danger(en.formatMessage({
                        id: "chatgptConversations.customGpt.pinFailed",
                        defaultMessage: "Couldn't update pinned GPT"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.customGpt.pinFailed"
                        }
                    })
                })
            }, Z[31] = ee, Z[32] = en, Z[33] = ep, Z[34] = et, Z[35] = V) : V = Z[35], Z[36] !== ep ? (Q = ep ? (0, a.jsx)(c.a, {
                id: "chatgptConversations.customGpt.unpin",
                defaultMessage: "Unpin GPT"
            }) : (0, a.jsx)(c.a, {
                id: "chatgptConversations.customGpt.pin",
                defaultMessage: "Pin GPT"
            }), Z[36] = ep, Z[37] = Q) : Q = Z[37], Z[38] !== ev || Z[39] !== V || Z[40] !== Q ? ($ = (0, a.jsx)(m.c.Item, {
                leftIconAsset: ev,
                onSelect: V,
                children: Q
            }), Z[38] = ev, Z[39] = V, Z[40] = Q, Z[41] = $) : $ = Z[41], Z[42] !== eu || Z[43] !== em || Z[44] !== ee.gizmo.current_user_permission?.can_view_config ? (Y = eu || ee.gizmo.current_user_permission?.can_view_config ? (0, a.jsx)(m.c.Item, {
                href: em,
                leftIconAsset: eu ? k.a : M.a,
                onClick: e => {
                    (0, g.e)({
                        event: e,
                        href: em,
                        initiator: "open_in_browser_bridge",
                        openTarget: eu ? "external-browser" : void 0
                    })
                },
                children: eu ? (0, a.jsx)(c.a, {
                    id: "chatgptConversations.customGpt.edit",
                    defaultMessage: "Edit GPT"
                }) : (0, a.jsx)(c.a, {
                    id: "chatgptConversations.customGpt.view",
                    defaultMessage: "View"
                })
            }) : null, Z[42] = eu, Z[43] = em, Z[44] = ee.gizmo.current_user_permission?.can_view_config, Z[45] = Y) : Y = Z[45], Z[46] !== ee ? (X = (0, a.jsx)(E.a, {
                resource: ee
            }), Z[46] = ee, Z[47] = X) : X = Z[47], Z[48] !== eo || Z[49] !== H || Z[50] !== K || Z[51] !== $ || Z[52] !== Y || Z[53] !== X || Z[54] !== D ? (J = (0, a.jsxs)(m.a, {
                align: "start",
                contentWidth: "menu",
                open: eo,
                onOpenChange: es,
                triggerButton: D,
                children: [H, K, $, Y, X]
            }), Z[48] = eo, Z[49] = H, Z[50] = K, Z[51] = $, Z[52] = Y, Z[53] = X, Z[54] = D, Z[55] = J) : J = Z[55], J
        }
        n.d(t, {}, {
            ChatGptGizmoHeader: function(e) {
                let t, n, o, i, l, c = (0, r.c)(12),
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
                } = (0, s.x)(I.b, t);
                if (null == h) return null;
                c[3] !== h.gizmo.display.name ? (n = h.gizmo.display.name.trim(), c[3] = h.gizmo.display.name, c[4] = n) : n = c[4];
                let p = n;
                return c[5] !== p ? (o = p ? (0, a.jsx)("span", {
                    className: "truncate",
                    children: p
                }) : null, c[5] = p, c[6] = o) : o = c[6], c[7] !== h ? (i = (0, a.jsx)(B, {
                    gizmo: h
                }), c[7] = h, c[8] = i) : i = c[8], c[9] !== o || c[10] !== i ? (l = (0, a.jsxs)("div", {
                    className: "flex min-w-0 items-center gap-1 select-none",
                    children: [o, i]
                }), c[9] = o, c[10] = i, c[11] = l) : l = c[11], l
            }
        })
    }),
    pV06: (function(e, t, n) {
        var a = n("JjRy"),
            r = n.n(a),
            o = n("AuIy"),
            s = n("G4E3"),
            i = n("KaH3"),
            l = n("Yz3b"),
            c = n("pqpL"),
            d = n("ghNX"),
            u = n("KvVi"),
            h = n("m250"),
            p = n("H8lk"),
            m = n("Ng4B"),
            g = n("bTKb"),
            f = n("dGDB"),
            v = n("lIsV");

        function y(e) {
            return e.flatMap(e => "chatgpt-reasoning-group" === e.type ? e.items : [e])
        }
        n.d(t, {}, {
            a: function(e) {
                var t;
                let n, a, {
                        automationReferences: b,
                        includePages: x = !1,
                        includeSources: w = !0,
                        messages: C,
                        pendingAttachments: _ = [],
                        resources: j = (0, p.e)(C),
                        turns: S,
                        isTurnActive: I = S.at(-1)?.turn.status === "in_progress"
                    } = e,
                    T = [...j.inputs],
                    E = w ? (0, m.a)(C, S) : [],
                    P = new Map,
                    A = new Map,
                    M = (t = C, -1 !== (n = r()(t, e => e?.recipient === "turn_plan.update_turn_plan" && (0, v.b)(e)?.item?.type === "todo-list")) && t.slice(n + 1).some(e => "assistant" === e.author.role && "final" === e.channel && "all" === e.recipient && "finished_successfully" === e.status)),
                    k = [],
                    R = new Map(C.map(e => [(0, o.g)(e), e])),
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
                    of S) {
                    if (w && "complete" === t.status)
                        for (let n of t.messageIds) {
                            let t = R.get(n);
                            t?.author.role === "assistant" && ("finished_successfully" === t.status || "finished_partial_completion" === t.status) && (0, h.j)(t.metadata) && k.push({
                                messageId: n,
                                turnId: e,
                                deletedMemoryCitationUuids: (0, h.c)(t.metadata)
                            })
                        }
                    for (let n of y(t.items)) {
                        if (x && "mcp-tool-call" === n.type) {
                            let e = (0, d.b)(n);
                            if (null != e && (e.activities.includes("created") || e.activities.includes("updated"))) {
                                let t = (0, s.d)(e.url);
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
                let B = (0, i.b)(S.flatMap(e => {
                    let {
                        turn: t
                    } = e;
                    return y(t.items).filter(e => "mcp-tool-call" === e.type)
                })).at(-1);
                return a = null == B ? [...j.outputs, ...A.values(), ...P.values()] : [{
                    ...B,
                    key: `site:${B.projectId}`,
                    kind: "site"
                }, ...j.outputs.filter(e => null == B.archivePath || ! function(e, t) {
                    if (null != e.sandboxPath) return e.sandboxPath === t;
                    let n = t.split(/[\\/]/u).at(-1)?.toLowerCase();
                    return null != n && e.name.toLowerCase() === n
                }(e, B.archivePath)), ...A.values(), ...P.values()], {
                    automationIds: (0, u.b)(C, b ?? void 0),
                    browserScreenshots: (0, g.d)(C),
                    inputs: T,
                    sourceTurns: k,
                    outputs: a,
                    progressSteps: O,
                    isPlanSummaryUpdating: I && C.slice(N + 1).some(e => "assistant" === e.author.role && u.a.test(e.recipient ?? "") || "tool" === e.author.role && u.a.test(e.author.name ?? "")),
                    planSummaryRefreshKey: `${S.at(-1)?.id??""}:${I}`,
                    sources: w ? [...Array.from(new Map(C.filter(e => "user" === e.author.role).flatMap(e => (0, l.a)((0, o.e)(e))).map(e => [e.projectId, e])).values(), e => ({
                        kind: "site",
                        key: `site:${e.projectId}`,
                        projectId: e.projectId,
                        label: e.title
                    })), ...E.filter(e => "memory" === e.kind), ...new Map(S.flatMap(e => {
                        let {
                            turn: t
                        } = e;
                        return (t.skillSources ?? []).map(e => [e.key, e])
                    })).values(), ...j.pluginSources, ...E.filter(e => "web" === e.kind && "apps" === e.category), ...E.filter(e => "file-source" === e.kind), ...E.filter(e => "web" === e.kind && "apps" !== e.category)] : [],
                    subagents: (0, f.a)(C)?.subagents ?? []
                }
            }
        })
    }),
    rUXL: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            o = n("BolX"),
            s = n("zd8w"),
            i = n("oyxz"),
            l = n("Wf1j"),
            c = n("i7iU"),
            d = n("gbrq"),
            u = n("n5iL"),
            h = n("EFj1"),
            p = n("Bbed"),
            m = n("tSEg"),
            g = n("hZax"),
            f = n("iS3k"),
            v = n("pDUk"),
            y = n("GaCK"),
            b = n("Dofq"),
            x = n("BdYu"),
            w = n("VnEZ");
        let C = (0, p.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(186197)]).then(n.bind(n, "BhAA"))).ChatGptThreadSummaryPanelBody, {
            fallback: (0, a.jsx)(f.a.Content, {
                children: (0, a.jsx)("div", {
                    className: "flex flex-col gap-0.5 px-5",
                    children: (0, a.jsx)("span", {
                        className: "select-none",
                        role: "status",
                        children: (0, a.jsx)(i.a, {
                            id: "chatgptConversations.summaryPanel.loading",
                            defaultMessage: "Loading summary…"
                        })
                    })
                })
            }),
            errorFallback: (0, a.jsx)(f.a.Content, {
                children: (0, a.jsx)("div", {
                    className: "flex flex-col gap-0.5 px-5",
                    children: (0, a.jsx)("span", {
                        className: "select-none",
                        role: "status",
                        children: (0, a.jsx)(i.a, {
                            id: "chatgptConversations.summaryPanel.loadError",
                            defaultMessage: "Summary could not load. Reload the app to try again"
                        })
                    })
                })
            })
        });

        function _(e) {
            let t, n, o, i = (0, r.c)(6);
            i[0] !== e ? ({
                readData: n,
                ...t
            } = e, i[0] = e, i[1] = t, i[2] = n) : (t = i[1], n = i[2]);
            let l = (0, f.b)(),
                [c, d] = (0, s.useState)(null);
            return l && c?.readData !== n && d({
                readData: n,
                data: n()
            }), i[3] !== c || i[4] !== t ? (o = null == c ? null : (0, a.jsx)(C, {
                ...t,
                data: c.data
            }), i[3] = c, i[4] = t, i[5] = o) : o = i[5], o
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, s, i = (0, r.c)(15),
                    {
                        conversationId: l,
                        composerActions: c,
                        readData: d,
                        display: u,
                        shouldBlockExternalEgress: h,
                        showSources: p
                    } = e,
                    v = void 0 === p || p,
                    y = (0, o.y)(m.a),
                    b = (0, g.f)("2903661647"),
                    x = b ? "dynamic-isle" : "summary";
                return i[0] !== y || i[1] !== x ? (t = {
                    scope: y,
                    layout: x
                }, i[0] = y, i[1] = x, i[2] = t) : t = i[2], i[3] !== c || i[4] !== l || i[5] !== b || i[6] !== d || i[7] !== h || i[8] !== v ? (n = (0, a.jsx)(_, {
                    conversationId: l,
                    composerActions: c,
                    readData: d,
                    isUnifiedDynamicIsleEnabled: b,
                    showSources: v,
                    shouldBlockExternalEgress: h
                }, l), i[3] = c, i[4] = l, i[5] = b, i[6] = d, i[7] = h, i[8] = v, i[9] = n) : n = i[9], i[10] !== u.shouldHideInlineImmediately || i[11] !== u.shouldShow || i[12] !== t || i[13] !== n ? (s = (0, a.jsx)(f.a.Root, {
                    analytics: t,
                    shouldHideInlineImmediately: u.shouldHideInlineImmediately,
                    shouldShow: u.shouldShow,
                    children: n
                }), i[10] = u.shouldHideInlineImmediately, i[11] = u.shouldShow, i[12] = t, i[13] = n, i[14] = s) : s = i[14], s
            },
            b: _,
            c: function(e) {
                let t, n, i, p = (0, r.c)(22),
                    {
                        conversationId: C,
                        composerActions: j,
                        controlledState: S,
                        readData: I,
                        shouldBlockExternalEgress: T,
                        showSources: E
                    } = e,
                    P = void 0 === E || E,
                    A = (0, o.y)(m.a),
                    M = (0, s.useContext)(w.a),
                    k = (0, l.a)(),
                    R = (0, g.f)("2903661647"),
                    N = (0, o.z)(null == S ? d.M : null);
                p[0] !== S?.isOpen || p[1] !== N ? (t = S?.isOpen ?? (0, d.y)(N, !0), p[0] = S?.isOpen, p[1] = N, p[2] = t) : t = p[2];
                let O = t,
                    B = (0, o.z)(y.b),
                    L = S?.isOpen ?? B.isPopoverOpen,
                    F = (0, o.x)(u.f, "togglePinnedSummary");
                (0, x.b)(A), p[3] !== S || p[4] !== A ? (n = () => {
                    null != S ? S.onOpenChange(!S.isOpen) : (0, b.b)(A)
                }, p[3] = S, p[4] = A, p[5] = n) : n = p[5];
                let G = n;
                return (0, h.a)("togglePinnedSummary", G), p[6] !== j || p[7] !== M || p[8] !== S || p[9] !== C || p[10] !== k || p[11] !== O || p[12] !== L || p[13] !== R || p[14] !== B.displayMode || p[15] !== I || p[16] !== A || p[17] !== F || p[18] !== T || p[19] !== P || p[20] !== G ? (i = (0, a.jsx)(c.a.HeaderAction, {
                    actionId: "chatgpt-thread-summary-panel-toggle",
                    align: "end",
                    order: 250,
                    unifiedSlotPosition: "threadSummary",
                    children: "overlay" === B.displayMode ? (0, a.jsx)(v.a, {
                        isOpen: L,
                        shouldPreventAutoFocus: S?.shouldPreventAutoFocus,
                        onOpenChange: e => {
                            null != S ? S.onOpenChange(e) : A.set(y.b, t => "overlay" !== t.displayMode || t.isPopoverOpen === e ? t : {
                                ...t,
                                isPopoverOpen: e
                            })
                        },
                        trigger: (0, a.jsx)(f.a.HeaderButton, {
                            analytics: {
                                scope: A
                            },
                            label: k.formatMessage({
                                id: "chatgptConversations.summaryPanel.toggle",
                                defaultMessage: "Toggle summary"
                            }),
                            pressed: L,
                            shortcut: F
                        }),
                        children: null != I ? (0, a.jsx)(w.a, {
                            value: M,
                            children: (0, a.jsx)(f.a.PopoverContent, {
                                analytics: {
                                    scope: A,
                                    layout: R ? "dynamic-isle" : "summary"
                                },
                                children: (0, a.jsx)(_, {
                                    conversationId: C,
                                    composerActions: j,
                                    readData: I,
                                    isUnifiedDynamicIsleEnabled: R,
                                    showSources: P,
                                    shouldBlockExternalEgress: T
                                }, C)
                            })
                        }) : null
                    }) : (0, a.jsx)(f.a.HeaderButton, {
                        analytics: {
                            scope: A
                        },
                        label: k.formatMessage({
                            id: "chatgptConversations.summaryPanel.togglePinned",
                            defaultMessage: "Toggle pinned summary"
                        }),
                        pressed: O,
                        shortcut: F,
                        onClick: G
                    })
                }), p[6] = j, p[7] = M, p[8] = S, p[9] = C, p[10] = k, p[11] = O, p[12] = L, p[13] = R, p[14] = B.displayMode, p[15] = I, p[16] = A, p[17] = F, p[18] = T, p[19] = P, p[20] = G, p[21] = i) : i = p[21], i
            }
        })
    }),
    JlMc: (function(e, t, n) {
        var a = n("QosV"),
            r = n("BolX"),
            o = n("zd8w"),
            s = n("RU3e"),
            i = n("OWtl");
        n("lBzi"), n("XtQP");
        var l = n("dQRk"),
            c = n("UWHW");
        n.d(t, {}, {
            a: function(e) {
                let t, n, d, u, h = (0, a.c)(10),
                    {
                        conversationId: p,
                        isTranscriptVisible: m
                    } = e,
                    g = void 0 === m || m,
                    f = (0, r.y)(i.a),
                    v = (0, o.useId)();
                return h[0] !== p || h[1] !== v || h[2] !== f ? (t = () => (f.set(c.b, e => new Map(e).set(v, p)), f.get(c.a)?.dismissCurrent(), () => {
                    f.set(c.b, e => {
                        let t = new Map(e);
                        return t.delete(v), t
                    })
                }), n = [p, v, f], h[0] = p, h[1] = v, h[2] = f, h[3] = t, h[4] = n) : (t = h[3], n = h[4]), (0, o.useEffect)(t, n), h[5] !== p || h[6] !== g || h[7] !== f ? (d = () => {
                    if (!g) return;
                    let e = f.watch(e => {
                            let {
                                get: t
                            } = e
                        }),
                        t = f.watch(e => {
                            let {
                                get: t
                            } = e, n = !0 === t(s.b);
                            (0, l.cc)(f, p, n)
                        });
                    return () => {
                        e(), t(), (0, l.cc)(f, p, !1)
                    }
                }, u = [p, g, f], h[5] = p, h[6] = g, h[7] = f, h[8] = d, h[9] = u) : (d = h[8], u = h[9]), (0, o.useEffect)(d, u), null
            }
        })
    }),
    fr5e: (function(e, t, n) {
        n.d(t, {
            a: () => B
        });
        var a = n("ABep"),
            r = n("QosV"),
            o = n("iRMi"),
            s = n("D99L"),
            i = n("D015"),
            l = n("BolX"),
            c = n("zd8w"),
            d = n("oyxz"),
            u = n("TDcV"),
            h = n("vF5L"),
            p = n("EFj1"),
            m = n("SGsN"),
            g = n("yGJW"),
            f = n("OWtl"),
            v = n("aepO"),
            y = n("bIvi"),
            b = n("lBzi"),
            x = n("Ga6O"),
            w = n("dQRk"),
            C = n("jfiJ"),
            _ = n("FGJH"),
            j = n("Vcrm"),
            S = n("OCK3"),
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

        function B(e) {
            let t, n, P, B, F, G, z = (0, r.c)(28),
                {
                    conversationId: D,
                    turns: H,
                    loadHistory: W,
                    renderMode: U,
                    paragenEnabled: q,
                    enabled: K,
                    canCopy: V,
                    priority: Q
                } = e,
                $ = void 0 === U ? "conversation" : U,
                Y = void 0 !== q && q,
                X = void 0 === K || K,
                J = void 0 === V || V,
                Z = void 0 === Q ? "fallback" : Q,
                ee = (0, l.y)(f.a),
                et = (0, c.useRef)(null);
            z[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => () => et.current?.abort(), z[0] = t) : t = z[0], z[1] !== J || z[2] !== D || z[3] !== X || z[4] !== W || z[5] !== Y || z[6] !== $ ? (n = [D, X, J, W, $, Y], z[1] = J, z[2] = D, z[3] = X, z[4] = W, z[5] = Y, z[6] = $, z[7] = n) : n = z[7], (0, c.useEffect)(t, n), z[8] !== J || z[9] !== D || z[10] !== Y || z[11] !== $ || z[12] !== ee || z[13] !== H ? (P = () => {
                let e = ee.get(w.j, D),
                    t = ee.query.getData(b.chatGptConversationQueryById$, e),
                    n = t?.conversation_origin ?? ee.get(w.y, D);
                if (!J || "tpp" === n || "flora" === n) return null;
                let a = ee.get(w.N, D),
                    r = Y && "conversation" === $ ? ee.get(j.a, D)?.promptMessageId : void 0,
                    o = function(e) {
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
                                                o = N.d.safeParse(r?.reference);
                                            if (null == r || !o.success || (null == n.data.is_streaming ? !e.completed && (e.contentReferenceMessageStatuses?.[r.index] ?? "in_progress") === "in_progress" : "true" === n.data.is_streaming)) return;
                                            let s = e.contentReferenceMessageIds?.[r.index];
                                            t = {
                                                content: (0, R.a)(o.data.data),
                                                messageId: s ?? e.messageId,
                                                codeBlockIndex: null == s ? r.index : e.contentReferenceMessageIds?.slice(0, r.index).filter(e => e === s).length ?? 0
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
                        threadCurrentNode: r ?? ee.get(w.C, D),
                        conversationOrigin: n,
                        isStreaming: (0, w.Bb)(ee.get(w.ab, D)),
                        mode: $,
                        moderationDisclaimersByMessageId: ee.get(w.O, D),
                        pendingSubmission: null
                    }).renderedTurns);
                if (o?.messageId == null) return {
                    serverId: e,
                    comparisonPromptMessageId: r,
                    content: o?.content
                };
                let s = {
                        conversationId: D,
                        messageId: o.messageId,
                        codeBlockIndex: o.codeBlockIndex
                    },
                    i = (0, I.a)(a?.[o.messageId]?.message?.metadata);
                return {
                    serverId: e,
                    comparisonPromptMessageId: r,
                    content: ee.get(S.b, s) ?? i?.[String(o.codeBlockIndex)]?.content ?? o.content
                }
            }, z[8] = J, z[9] = D, z[10] = Y, z[11] = $, z[12] = ee, z[13] = H, z[14] = P) : P = z[14];
            let en = (0, y.a)(P);
            z[15] !== ee ? (B = (e, t) => {
                let n = e => {
                    (0, g.a)(ee, s.CodexChatgptInteractionCodeCopyRequested, {
                        characterCount: (0, i.a)(e.length),
                        productExperience: o.CodexExpandedSidePanelProductSurface.CODEX_EXPANDED_SIDE_PANEL_PRODUCT_SURFACE_CHAT
                    })
                };
                return (0, v.c)(e, void 0, () => {
                    "string" == typeof e ? n(e) : e.then(n, L)
                }).then(e => {
                    e && !t?.aborted && ee.get(m.f).success((0, a.jsx)(d.a, {
                        id: "chatgpt.codeBlocks.copyLast.success",
                        defaultMessage: "Copied code block to clipboard"
                    }))
                })
            }, z[15] = ee, z[16] = B) : B = z[16];
            let ea = B;
            return z[17] !== D || z[18] !== en || z[19] !== W || z[20] !== Y || z[21] !== $ || z[22] !== ee || z[23] !== ea ? (F = () => {
                if (et.current?.signal.aborted === !1) return;
                let e = en();
                if (null == e) return;
                if (null != e.content) return void ea(e.content);
                let {
                    serverId: t,
                    comparisonPromptMessageId: n
                } = e;
                if (!W || ee.get(w.B, D) || null == t || ee.get(_.c, t)?.complete !== !1) return;
                let a = new AbortController;
                et.current = a;
                let r = ee.get(u.a),
                    o = ee.get(w.C, D),
                    s = ee.get(h.e).copyLastCodeBlock,
                    i = ee.watch(e => {
                        let {
                            get: t
                        } = e;
                        (t(u.a) !== r || t(w.C, D) !== o || Y && "conversation" === $ && t(j.a, D)?.promptMessageId !== n || t(h.e).copyLastCodeBlock !== s) && a.abort()
                    });
                ea((async () => {
                    await (0, C.a)(ee, t, a.signal), a.signal.throwIfAborted();
                    let e = en()?.content;
                    if (null == e) throw Error("No complete code block in this conversation");
                    return e
                })(), a.signal).finally(() => {
                    i(), et.current === a && (et.current = null)
                })
            }, z[17] = D, z[18] = en, z[19] = W, z[20] = Y, z[21] = $, z[22] = ee, z[23] = ea, z[24] = F) : F = z[24], z[25] !== X || z[26] !== Z ? (G = {
                enabled: X,
                priority: Z
            }, z[25] = X, z[26] = Z, z[27] = G) : G = z[27], (0, p.a)("copyLastCodeBlock", F, G), null
        }

        function L() {}
    }),
    LEgg: (function(e, t, n) {
        n.d(t, {
            a: () => C
        });
        var a = n("ABep"),
            r = n("QosV");
        n("slpy");
        var o = n("BolX"),
            s = n("Wf1j"),
            i = n("i7iU"),
            l = n("TdH6"),
            c = n("QcW8");
        n("ZU27"), n("TpEm");
        var d = n("gbrq"),
            u = n("B1XR"),
            h = n("ipGa"),
            p = n("I07G"),
            m = n("zd8w"),
            g = n("tSEg"),
            f = n("YnF4"),
            v = n("dQRk");

        function y() {
            let e, t, n = (0, r.c)(3),
                a = (0, o.y)(g.a);
            return n[0] !== a ? (e = () => {
                if ("chatgpt-thread" !== a.value.routeKind) return;
                let e = a.value.conversationId;
                return a.watch(t => {
                    let {
                        get: n
                    } = t, r = n(v.j, e);
                    if (null != r) return (0, f.a)(a, (0, p.Ue)(`chatgpt:${r}`))
                })
            }, t = [a], n[0] = a, n[1] = e, n[2] = t) : (e = n[1], t = n[2]), (0, m.useLayoutEffect)(e, t), null
        }
        n("n5iL"), n("q3HK"), n("bf6R");
        var b = n("rBfn"),
            x = n("enMl"),
            w = n("PCEr");

        function C(e) {
            let t, n, o, s, l, c, d = (0, r.c)(17),
                {
                    chatIcon: p,
                    header: m,
                    title: g,
                    fullScreenTitle: f,
                    isArchivedPreview: v,
                    children: y
                } = e;
            return d[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(i.a.MainContentLayout, {
                layout: (0, h.a)() ? "default" : "thread-edge-scroll"
            }), d[0] = t) : t = d[0], d[1] !== v ? (n = v ? null : (0, a.jsx)(u.SitePreviewBridge, {}), d[1] = v, d[2] = n) : n = d[2], d[3] !== m ? (o = (0, a.jsx)(i.a.Header, {
                desktopPlacement: "titlebar",
                divider: !1,
                children: m
            }), d[3] = m, d[4] = o) : o = d[4], d[5] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, a.jsx)(i.a.RightPanelOutlet, {
                children: (0, a.jsx)(i.a.RightPanelTabs, {})
            }), d[5] = s) : s = d[5], d[6] !== p || d[7] !== f || d[8] !== m || d[9] !== v || d[10] !== g ? (l = v ? null : (0, a.jsx)(_, {
                chatIcon: p,
                fullScreenTitle: f,
                mainToolbar: m,
                title: g
            }), d[6] = p, d[7] = f, d[8] = m, d[9] = v, d[10] = g, d[11] = l) : l = d[11], d[12] !== y || d[13] !== n || d[14] !== o || d[15] !== l ? (c = (0, a.jsxs)(a.Fragment, {
                children: [t, n, o, y, s, l]
            }), d[12] = y, d[13] = n, d[14] = o, d[15] = l, d[16] = c) : c = d[16], c
        }

        function _(e) {
            let t, n, i, u, p, m, f, v = (0, r.c)(16),
                {
                    chatIcon: C,
                    mainToolbar: _,
                    title: j,
                    fullScreenTitle: S
                } = e,
                I = (0, o.y)(g.a);
            return (0, s.a)(), (0, o.z)(d.h), (0, o.z)(c.t), v[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(l.a, {}), n = (0, a.jsx)(y, {}), v[0] = t, v[1] = n) : (t = v[0], n = v[1]), v[2] !== C || v[3] !== j ? (i = (0, a.jsx)(x.a, {
                title: j,
                icon: C
            }), v[2] = C, v[3] = j, v[4] = i) : i = v[4], v[5] !== S ? (u = (0, a.jsx)("div", {
                className: "max-w-80 min-w-0 truncate empty:hidden focus-within:overflow-visible",
                children: S
            }), v[5] = S, v[6] = u) : u = v[6], v[7] !== _ || v[8] !== u ? (p = (0, a.jsx)(w.a, {
                mainToolbar: _,
                fullScreenChatMenu: u
            }), v[7] = _, v[8] = u, v[9] = p) : p = v[9], v[10] !== I.value.routeKind ? (m = "other" === I.value.routeKind || (0, h.a)() ? null : (0, a.jsx)(b.b, {
                showLauncherButton: !1
            }), v[10] = I.value.routeKind, v[11] = m) : m = v[11], v[12] !== i || v[13] !== p || v[14] !== m ? (f = (0, a.jsxs)(a.Fragment, {
                children: [t, n, i, p, m, null, null]
            }), v[12] = i, v[13] = p, v[14] = m, v[15] = f) : f = v[15], f
        }
    }),
    dLcZ: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV");
        n("slpy"), n("zd8w");
        var o = n("i7iU");
        n("Sm6l"), n("HOLv");
        var s = n("NVRI"),
            i = n("MMlk"),
            l = n("UNoV");
        n.d(t, {}, {
            a: function(e) {
                let t, n, o, c, d, u, h, p, m, g, f = (0, r.c)(20);
                f[0] !== e ? ({
                    hasSectionProgress: d,
                    isTemporaryChat: u,
                    isCloudTask: t,
                    leading: n,
                    startActions: c,
                    ...o
                } = e, f[0] = e, f[1] = t, f[2] = n, f[3] = o, f[4] = c, f[5] = d, f[6] = u) : (t = f[1], n = f[2], o = f[3], c = f[4], d = f[5], u = f[6]);
                let v = void 0 !== u && u,
                    y = void 0 !== d && d ? l.a.Title : void 0;
                return f[7] !== n || null !== f[8] ? (h = (0, a.jsxs)(a.Fragment, {
                    children: [n, null]
                }), f[7] = n, f[8] = null, f[9] = h) : h = f[9], f[10] !== v ? (p = v ? (0, a.jsx)(i.b, {
                    isIndicator: !0,
                    isTemporaryChat: !0
                }) : null, f[10] = v, f[11] = p) : p = f[11], f[12] !== c || f[13] !== p ? (m = (0, a.jsxs)(a.Fragment, {
                    children: [c, p]
                }), f[12] = c, f[13] = p, f[14] = m) : m = f[14], f[15] !== o || f[16] !== y || f[17] !== h || f[18] !== m ? (g = (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(s.a, {
                        ...o,
                        className: y,
                        inset: "tab-strip-flush-start",
                        leading: h,
                        startActions: m
                    })
                }), f[15] = o, f[16] = y, f[17] = h, f[18] = m, f[19] = g) : g = f[19], g
            },
            b: function(e) {
                let t, n, s, i = (0, r.c)(9),
                    {
                        children: l,
                        menu: c,
                        hasTitleMenu: d
                    } = e,
                    u = !d && c;
                return i[0] !== d || i[1] !== c ? (t = d ? (0, a.jsx)(o.a.HeaderAction, {
                    actionId: "chatgpt-conversation-title-menu",
                    align: "start",
                    slotPosition: "threadTitle",
                    children: c
                }) : null, i[0] = d, i[1] = c, i[2] = t) : t = i[2], i[3] !== l ? (n = null == l ? null : (0, a.jsx)(o.a.HeaderAction, {
                    actionId: "chatgpt-conversation-actions",
                    align: "end",
                    order: 100,
                    children: (0, a.jsx)("div", {
                        className: "flex min-w-0 items-center gap-toolbar-action",
                        children: l
                    })
                }), i[3] = l, i[4] = n) : n = i[4], i[5] !== u || i[6] !== t || i[7] !== n ? (s = (0, a.jsxs)(a.Fragment, {
                    children: [u, t, n]
                }), i[5] = u, i[6] = t, i[7] = n, i[8] = s) : s = i[8], s
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
            r = n("BolX"),
            o = n("ASxG"),
            s = n("fDv2"),
            i = n("OWtl"),
            l = n("dQRk");
        let c = o.object({
                epic_patient_label: o.string(),
                epic_patient_name: o.string().nullable().optional(),
                epic_patient_birth_date: s.date().nullable().optional(),
                epic_encounter_label: o.string().nullable().optional()
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
                let o = null,
                    s = () => {
                        r(h(e, o, null))
                    };
                window.addEventListener(a.b, s);
                let i = n.watch(t => {
                    let {
                        get: n
                    } = t;
                    o = n(d, e), s()
                });
                return () => {
                    i(), window.removeEventListener(a.b, s)
                }
            }, {
                autoDispose: !0,
                isEqual: (e, t) => e === t || null != e && null != t && e.labels?.epic_patient_label === t.labels?.epic_patient_label && e.labels?.epic_patient_name === t.labels?.epic_patient_name && e.labels?.epic_patient_birth_date === t.labels?.epic_patient_birth_date && e.labels?.epic_encounter_label === t.labels?.epic_encounter_label && e.snapshot === t.snapshot && e.destination === t.destination
            });

        function h(e, t, n) {
            let a = t?.find(e => c.safeParse(e?.metadata).success),
                r = c.safeParse(a?.metadata),
                o = "u" < typeof window ? void 0 : window.__oaiEpicNativeLaunch,
                s = (null == e ? n : null) ?? (t?.some(e => e?.id != null && o?.ownsMessage(e.id)) ? o?.get() ?? null : null);
            return r.success || null != s ? {
                labels: r.success ? r.data : null,
                snapshot: s,
                destination: null == s ? void 0 : o?.destination()
            } : null
        }
        n.d(t, {}, {
            a: u,
            b: h
        })
    }),
    a4V1: (function(e, t, n) {
        var a = n("BolX"),
            r = n("AuIy"),
            o = n("IgxH"),
            s = n("OWtl"),
            i = n("OMIV"),
            l = n("dQRk");
        let c = (0, a.d)(s.a, (e, t) => {
                let {
                    get: n
                } = t;
                if (null == e) return null;
                let a = n(l.N, e),
                    o = n(l.C, e);
                return null == a || null == o ? null : (0, r.b)({
                    mapping: a,
                    current_node: o
                }).findLast(e => "assistant" === e.author.role && !(0, r.n)(e) && "" !== (0, r.e)(e).trim())
            }),
            d = (0, a.d)(s.a, (e, t) => {
                let {
                    get: n
                } = t;
                if (null == e || n(i.e, "2163293173") && !n(l.K, e)) return null;
                let a = n(c, e);
                return null == a ? null : (0, o.a)((0, r.e)(a)).trim()
            });
        n.d(t, {}, {
            a: d
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
            o = n("BolX"),
            s = n("oyxz"),
            i = n("Cslg"),
            l = n("bqtn"),
            c = n("bf6R"),
            d = n("Bbed"),
            u = n("X6Vn"),
            h = n("OWtl");
        let p = (0, d.a)(async () => (await n.e(306529).then(n.bind(n, "GkN4"))).GptReportDialog);
        n.d(t, {}, {
            a: function(e) {
                let t, n, d, m, g = (0, r.c)(9),
                    {
                        resource: f,
                        onSelect: v
                    } = e,
                    y = (0, o.y)(h.a),
                    b = (0, o.z)(i.f);
                return null == b || f.gizmo.tags?.includes("first_party") || "marketplace" !== f.gizmo.share_recipient && "link" !== f.gizmo.share_recipient ? null : (g[0] !== b || g[1] !== v || g[2] !== f || g[3] !== y ? (t = () => {
                    v?.(), (0, u.f)(y, p, {
                        accountId: b,
                        resource: f
                    })
                }, g[0] = b, g[1] = v, g[2] = f, g[3] = y, g[4] = t) : t = g[4], g[5] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(l.c.ItemIcon, {
                    children: (0, a.jsx)(c.xd, {})
                }), d = (0, a.jsx)(s.a, {
                    id: "chatgptConversations.gpts.report.action",
                    defaultMessage: "Report GPT"
                }), g[5] = n, g[6] = d) : (n = g[5], d = g[6]), g[7] !== t ? (m = (0, a.jsxs)(l.c.Item, {
                    onSelect: t,
                    children: [n, d]
                }), g[7] = t, g[8] = m) : m = g[8], m)
            }
        })
    }),
    alJ6: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            o = n("on57"),
            s = n("BolX"),
            i = n("jqIZ"),
            l = n("Bbed"),
            c = n("OWtl"),
            d = n("OMIV"),
            u = n("tV8b"),
            h = n("u9iS");
        let p = (0, l.a)(async () => (await n.e(901042).then(n.bind(n, "ut8h"))).GptPluginMigrationBannerContent, {
            errorFallback: e => (0, a.jsx)(g, {
                ...e
            })
        });

        function m(e) {
            let t, n = (0, r.c)(3),
                {
                    gizmoId: o
                } = e,
                i = (0, s.x)(d.e, "2160578039");
            return n[0] !== i || n[1] !== o ? (t = i ? (0, a.jsx)(p, {
                gizmoId: o
            }, o) : null, n[0] = i, n[1] = o, n[2] = t) : t = n[2], t
        }

        function g(e) {
            let t, n, o = (0, r.c)(10),
                {
                    gizmoId: l
                } = e,
                d = (0, s.y)(c.a),
                p = (0, i.Y)(),
                m = (0, i._)(),
                {
                    data: g
                } = (0, s.x)(h.f, l);
            o[0] !== l || o[1] !== p.pathname ? (t = {
                gizmoId: l,
                visitKey: p.pathname
            }, o[0] = l, o[1] = p.pathname, o[2] = t) : t = o[2];
            let f = (0, s.x)(h.c, t);
            return o[3] !== f || o[4] !== l || o[5] !== p.pathname || o[6] !== m || o[7] !== g || o[8] !== d ? (n = f && g?.gizmo.migrated_plugin_id ? (0, a.jsx)(u.a, {
                gptName: g.gizmo.display.name,
                accessState: "error",
                onUsePlugin: () => void m("/plugins"),
                onKeepUsingGpt: () => (0, h.a)(d, {
                    gizmoId: l,
                    visitKey: p.pathname
                })
            }) : null, o[3] = f, o[4] = l, o[5] = p.pathname, o[6] = m, o[7] = g, o[8] = d, o[9] = n) : n = o[9], n
        }
        n.d(t, {}, {
            GptPluginMigrationBanner: m,
            GptPluginMigrationHomeBanner: function(e) {
                let t, n, s, i = (0, r.c)(7),
                    {
                        entryPoint: l,
                        gizmoId: c
                    } = e,
                    d = "codex" === l && "electron:mx-[var(--home-composer-inline-inset)]";
                return i[0] !== d ? (t = (0, o.b)("empty:hidden", d), i[0] = d, i[1] = t) : t = i[1], i[2] !== c ? (n = (0, a.jsx)(m, {
                    gizmoId: c
                }), i[2] = c, i[3] = n) : n = i[3], i[4] !== t || i[5] !== n ? (s = (0, a.jsx)("div", {
                    className: t,
                    children: n
                }), i[4] = t, i[5] = n, i[6] = s) : s = i[6], s
            }
        })
    }),
    tV8b: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            o = n("Wf1j"),
            s = n("oyxz"),
            i = n("MM0V"),
            l = n("Sm6l"),
            c = n("HOLv"),
            d = n("hZax"),
            u = n("slBk"),
            h = n("Fmvm");
        n.d(t, {}, {
            a: function(e) {
                let t, n, p, m, g, f, v, y, b, x = (0, r.c)(34),
                    {
                        gptName: w,
                        accessState: C,
                        onUsePlugin: _,
                        onKeepUsingGpt: j,
                        onRetry: S
                    } = e,
                    I = (0, o.a)(),
                    T = (0, d.e)("2513446768");
                x[0] !== T || x[1] !== I ? (t = I.formatDate((0, u.a)(T.get("retirement_date", "")), {
                    month: "long",
                    day: "numeric",
                    timeZone: "UTC"
                }), x[0] = T, x[1] = I, x[2] = t) : t = x[2];
                let E = t;
                if ("error" === C && null != S) {
                    let e;
                    x[3] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceRetry",
                        defaultMessage: "Try again"
                    }), x[3] = e) : e = x[3], n = e
                } else if ("admin" === C) {
                    let e;
                    x[4] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.viewPlugin",
                        defaultMessage: "View Plugin"
                    }), x[4] = e) : e = x[4], n = e
                } else if ("allowed" === C || "pending" === C) {
                    let e;
                    x[5] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceUsePlugin",
                        defaultMessage: "Use plugin"
                    }), x[5] = e) : e = x[5], n = e
                } else {
                    let e;
                    x[6] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceExplorePlugins",
                        defaultMessage: "Explore plugins"
                    }), x[6] = e) : e = x[6], n = e
                }
                if ("error" === C && null == S) {
                    let e;
                    x[7] !== E ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceAccessUnconfirmed",
                        defaultMessage: "We couldn’t check your access to the plugin. You can keep using this GPT until {deadline}.",
                        values: {
                            deadline: E
                        }
                    }), x[7] = E, x[8] = e) : e = x[8], p = e
                } else if ("error" === C) {
                    let e;
                    x[9] !== E ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceAccessError",
                        defaultMessage: "We couldn’t check your access to the plugin. Try again, or keep using this GPT until {deadline}.",
                        values: {
                            deadline: E
                        }
                    }), x[9] = E, x[10] = e) : e = x[10], p = e
                } else if ("denied" === C) {
                    let e;
                    x[11] !== E ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceAccessDenied",
                        defaultMessage: "This plugin isn’t available to you. You can keep using this GPT until {deadline}.",
                        values: {
                            deadline: E
                        }
                    }), x[11] = E, x[12] = e) : e = x[12], p = e
                } else if (w.trim()) {
                    let e;
                    x[13] !== E || x[14] !== w ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceNamedBody",
                        defaultMessage: "{gptName} is now available as a plugin. You can keep using this GPT until {deadline}.",
                        values: {
                            gptName: w,
                            deadline: E
                        }
                    }), x[13] = E, x[14] = w, x[15] = e) : e = x[15], p = e
                } else {
                    let e;
                    x[16] !== E ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceBody",
                        defaultMessage: "This GPT is now available as a plugin. You can keep using this GPT until {deadline}.",
                        values: {
                            deadline: E
                        }
                    }), x[16] = E, x[17] = e) : e = x[17], p = e
                }
                x[18] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, a.jsx)(c.a, {
                    asset: h.a,
                    className: "text-secondary"
                }), x[18] = m) : m = x[18], x[19] !== w ? (g = w.trim() ? (0, a.jsx)(s.a, {
                    id: "chatgptConversations.gpts.migration.chatChoiceNamedTitle",
                    defaultMessage: "{gptName} is now a plugin",
                    values: {
                        gptName: w
                    }
                }) : (0, a.jsx)(s.a, {
                    id: "chatgptConversations.gpts.migration.chatChoiceTitle",
                    defaultMessage: "This GPT is now a plugin"
                }), x[19] = w, x[20] = g) : g = x[20];
                let P = "pending" === C,
                    A = "error" === C && null != S ? S : _;
                return x[21] !== n || x[22] !== P || x[23] !== A ? (f = (0, a.jsx)(l.a, {
                    color: "primary",
                    loading: P,
                    size: "dialog",
                    type: "button",
                    onClick: A,
                    children: n
                }), x[21] = n, x[22] = P, x[23] = A, x[24] = f) : f = x[24], x[25] !== j ? (v = null == j ? null : (0, a.jsx)(l.a, {
                    color: "outline",
                    size: "dialog",
                    type: "button",
                    onClick: j,
                    children: (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceKeepUsing",
                        defaultMessage: "Keep using GPT"
                    })
                }), x[25] = j, x[26] = v) : v = x[26], x[27] !== f || x[28] !== v ? (y = (0, a.jsxs)("div", {
                    className: "flex flex-wrap items-center gap-2",
                    children: [f, v]
                }), x[27] = f, x[28] = v, x[29] = y) : y = x[29], x[30] !== p || x[31] !== g || x[32] !== y ? (b = (0, a.jsx)("div", {
                    className: "mx-auto mb-3 w-full max-w-[var(--thread-content-max-width)]",
                    children: (0, a.jsx)(i.a, {
                        variant: "announcement",
                        icon: m,
                        stackOnNarrow: !0,
                        wrapCtas: !0,
                        title: g,
                        content: p,
                        customCtas: y
                    })
                }), x[30] = p, x[31] = g, x[32] = y, x[33] = b) : b = x[33], b
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
                    o = `https://help.openai.com/${r}/articles/20001519-custom-gpt-retirement-and-migration-faq`;
                try {
                    let e = new URL(t.replaceAll("{lang}", r));
                    return "https:" === e.protocol ? e.href : o
                } catch {
                    return o
                }
            }
        })
    }),
    kHi2: (function(e, t, n) {
        var a = n("BolX"),
            r = n("tSEg"),
            o = n("VnEZ");
        let s = (0, a.c)(r.a, o.b);

        function i(e, t) {
            let n = e.get(s).getSnapshot();
            return n?.conversationId !== t || n.dilActionsPending ? void 0 : n.dil?.prefill_composer
        }
        let l = (0, a.i)(r.a, e => !1, (e, t) => {
            let {
                scope: n,
                get: a,
                set: r
            } = t, o = a(s), l = () => r(null != i(n, e));
            return l(), o.subscribe(l)
        });
        n.d(t, {}, {
            a: l,
            b: s,
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
            o = n("BolX"),
            s = n("ASxG"),
            i = n("OWtl"),
            l = n("OMIV"),
            c = n("b6fw"),
            d = n("YdNM");
        let u = s.object({
                course_id: s.string().trim().min(1),
                title: s.string().trim().nullish().catch(null),
                icon_url_or_emoji: d.a
            }),
            h = s.object({
                course_info: u.nullish()
            }),
            p = (0, o.d)(i.a, (e, t) => {
                let {
                    get: n
                } = t, a = h.safeParse(n(c.h, e)?.view);
                return a.success ? a.data.course_info ?? null : null
            }, {
                isEqual: r()
            }),
            m = (0, o.d)(i.a, (e, t) => {
                let {
                    get: n
                } = t;
                return n(l.e, "4035922817") ? n(p, e) : null
            }),
            g = (0, o.d)(i.a, (e, t) => {
                let {
                    get: n
                } = t;
                return n(m, e)?.course_id ?? null
            });
        n.d(t, {}, {
            a: g,
            b: m
        })
    }),
    wnpN: (function(e, t, n) {
        var a = n("FC5L"),
            r = n("OMIV"),
            o = n("XtQP"),
            s = n("dQRk"),
            i = n("ZniH");
        let l = (0, a.a)({
            conversationIds: (e, t) => [t],
            status: (e, t) => {
                let {
                    get: n
                } = e, a = n(s.w, t);
                return {
                    pending: (0, s.Bb)(n(s.ab, t)),
                    completed: null == a || "completed" === a.result,
                    completionId: n(r.e, "2163293173") ? JSON.stringify([t, a?.requestId, n(s.C, t)]) : void 0,
                    unread: n(s.K, t)
                }
            },
            preview: (e, t) => {
                let {
                    get: n
                } = e, a = n(s.N, t);
                return null == a ? null : (0, i.a)({
                    mapping: a,
                    current_node: n(s.C, t)
                })?.text ?? null
            },
            title: (e, t) => {
                let {
                    get: n
                } = e;
                return n(s.eb, t) || null
            },
            dismiss: (e, t) => {
                (0, s.Xb)(e, t, !1), (0, o.b)(e, t).catch(() => {})
            }
        });
        n.d(t, {}, {
            a: l
        })
    }),
    M3Kf: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            o = n("BolX"),
            s = n("zd8w"),
            i = n("v7qY"),
            l = n("wD9O"),
            c = n("hEYZ"),
            d = n("OWtl"),
            u = n("nMdB"),
            h = n("yLzP"),
            p = n("lsfk"),
            m = n("dQRk"),
            g = n("jfiJ"),
            f = n("FGJH");

        function v(e) {
            return e.isIntersecting
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, y, b, x, w = (0, r.c)(22),
                    {
                        conversationId: C
                    } = e,
                    _ = (0, o.y)(d.a),
                    j = (0, o.z)(c.b),
                    S = (0, o.x)(m.j, C),
                    I = (0, o.x)(f.c, S ?? C),
                    T = (0, p.b)(),
                    E = (0, l.c)(),
                    P = (0, s.useRef)(null);
                w[0] !== T || w[1] !== _ || w[2] !== S || w[3] !== E ? (t = () => {
                    null != S && (0, g.b)(_, S, e => {
                        let t = T.getScrollElement(),
                            n = t?.querySelector("[data-thread-reading-passage]") ?? t?.querySelector("[data-user-message-bubble]");
                        null != n && (0, u.a)(n, E), (0, i.flushSync)(e)
                    })
                }, w[0] = T, w[1] = _, w[2] = S, w[3] = E, w[4] = t) : t = w[4];
                let A = t;
                w[5] !== C || w[6] !== A || w[7] !== _ || w[8] !== S ? (n = () => {
                    let e = _.get(f.c, S ?? C);
                    _.get(c.b) || e?.hasError || A()
                }, w[5] = C, w[6] = A, w[7] = _, w[8] = S, w[9] = n) : n = w[9];
                let M = (0, s.useEffectEvent)(n);
                w[10] !== T || w[11] !== j || w[12] !== M ? (y = () => {
                    if (j) return;
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
                }, w[10] = T, w[11] = j, w[12] = M, w[13] = y) : y = w[13];
                let k = I?.cursor,
                    R = I?.hasError;
                if (w[14] !== T || w[15] !== j || w[16] !== S || w[17] !== k || w[18] !== R ? (b = [T, j, S, k, R], w[14] = T, w[15] = j, w[16] = S, w[17] = k, w[18] = R, w[19] = b) : b = w[19], (0, s.useEffect)(y, b), null == I || I.complete || null == I.cursor) return null;
                let N = I.hasError ? A : null;
                return w[20] !== N ? (x = (0, a.jsx)(h.a, {
                    ref: P,
                    onRetry: N
                }), w[20] = N, w[21] = x) : x = w[21], x
            }
        })
    }),
    lUUH: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            o = n("BolX"),
            s = n("oyxz"),
            i = n("Qgfj"),
            l = n("jqIZ"),
            c = n("bqtn"),
            d = n("bf6R"),
            u = n("SGsN"),
            h = n("svjy"),
            p = n("nlNF"),
            m = n("crAQ"),
            g = n("FR8U"),
            f = n("OWtl"),
            v = n("OtLV"),
            y = n("w7E5"),
            b = n("wVX4"),
            x = n("c5lN"),
            w = n("QmkR"),
            C = n("xEXG"),
            _ = n("KMqT"),
            j = n("J6LI"),
            S = n("FgUr"),
            I = n("WLgA");
        let T = (0, o.u)(f.a, 0);

        function E(e) {
            let {
                scope: t,
                conversation: n,
                project: r,
                projectListQuery: o,
                pinnedProjectsQuery: s,
                showMoveToProject: i = !0,
                showDestinationFetchState: l = !0,
                projectCrudStatus: c,
                navigate: f,
                onCreateProjectDialogCloseAutoFocus: C
            } = e, {
                isWorkConversation: E,
                sourceMemoryBlocked: A
            } = (0, j.c)(n, r), M = A ? v.a.projectOnlyMoveUnavailable : void 0, {
                data: k,
                isPending: R,
                isError: N
            } = o, {
                data: O,
                isPending: B,
                isError: L
            } = s, F = (0, S.a)(O, k, r?.gizmo.id), G = "allowed" === c, z = e => {
                let a = t.get(T) + 1,
                    r = t.get(p.e);
                t.set(T, a), (0, w.S)({
                    scope: t,
                    conversationId: n.id,
                    projectId: e.gizmo.id
                }).then(n => {
                    n && t.get(T) === a && t.get(p.e) === r && f((0, I.c)(e.gizmo.id))
                }).catch(() => {
                    t.get(u.f).danger(t.get(h.a).formatMessage(P.moveFailed), {
                        errorAnalytics: {
                            toastId: "move_conversation_to_snorlax_error"
                        }
                    })
                })
            }, D = [];
            for (let e of (G && (D.push({
                    id: "new-chatgpt-project",
                    icon: d.Gg,
                    message: P.newProject,
                    selectAfterClose: !0,
                    onSelect: () => {
                        t.set(T, e => e + 1), (0, x.a)(t, z, {
                            allowLocalProjectCreation: !1,
                            forceGlobalMemory: E,
                            onCloseAutoFocus: C
                        })
                    }
                }), F.length > 0 && D.push({
                    id: "new-project-separator",
                    type: "separator"
                })), F)) {
                let {
                    targetMemoryBlocked: t
                } = (0, j.c)(n, void 0, e), r = t ? (0, _.a)((0, b.c)(e)) : void 0;
                D.push({
                    id: `move-to-project:${e.gizmo.id}`,
                    icon: (0, a.jsx)(g.a, {
                        className: "icon-xs",
                        size: 16,
                        color: e.gizmo.display.theme,
                        fallbackIcon: (0, a.jsx)(d.Bd, {}),
                        icon: e.gizmo.display.emoji
                    }),
                    nativeIcon: (0, m.b)(e.gizmo.display.emoji),
                    message: P.projectName,
                    messageValues: {
                        projectName: e.gizmo.display.name
                    },
                    enabled: null == r,
                    tooltipMessage: r,
                    onSelect: () => z(e)
                })
            }
            return l && (N || L) ? D.push({
                id: "retry-project-destinations",
                message: P.destinationsFailed,
                closeOnSelect: !1,
                onSelect: () => {
                    Promise.all([t.query.invalidate(y.a), t.query.invalidate(w.m)])
                }
            }) : l && (R || B) ? D.push({
                id: "loading-project-destinations",
                message: P.loading,
                tooltipMessage: P.reopen,
                enabled: !1
            }) : N || L || R || B || 0 !== F.length || G || D.push({
                id: "no-project-destinations",
                message: P.noDestinations,
                enabled: !1
            }), [...i && D.length > 0 ? [{
                id: "move-to-project",
                icon: d.Ed,
                message: P.moveToProject,
                enabled: !A,
                tooltipMessage: M,
                submenu: D
            }] : [], ...null == r ? [] : [{
                id: "remove-from-project",
                icon: d.Id,
                message: P.removeFromProject,
                enabled: !A,
                tooltipMessage: M,
                onSelect: () => {
                    t.set(T, e => e + 1), (0, w.S)({
                        scope: t,
                        conversationId: n.id,
                        projectId: null
                    }).catch(() => {
                        t.get(u.f).danger(t.get(h.a).formatMessage(P.removeFailed), {
                            errorAnalytics: {
                                toastId: "move_conversation_to_snorlax_error"
                            }
                        })
                    })
                }
            }]]
        }
        let P = (0, i.f)({
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
                    m = void 0 === p || p,
                    g = (0, o.y)(f.a),
                    v = (0, l._)(),
                    b = (0, o.z)(y.a),
                    x = (0, o.z)(w.m),
                    _ = (0, C.b)();
                if (i[0] !== d || i[1] !== v || i[2] !== u || i[3] !== x || i[4] !== h || i[5] !== _ || i[6] !== b || i[7] !== g || i[8] !== m) {
                    let e = E({
                            scope: g,
                            conversation: d,
                            project: h,
                            projectListQuery: b,
                            pinnedProjectsQuery: x,
                            showMoveToProject: m,
                            projectCrudStatus: _,
                            navigate: v,
                            onCreateProjectDialogCloseAutoFocus: u
                        }),
                        n = e => {
                            if ("separator" === e.type) return (0, a.jsx)(c.c.Separator, {}, e.id);
                            let t = e.message ? (0, a.jsx)(s.a, {
                                    ...e.message,
                                    values: e.messageValues
                                }) : e.id,
                                r = e.tooltipMessage ? (0, a.jsx)(s.a, {
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
                    t = e.map(n), i[0] = d, i[1] = v, i[2] = u, i[3] = x, i[4] = h, i[5] = _, i[6] = b, i[7] = g, i[8] = m, i[9] = t
                } else t = i[9];
                return i[10] !== t ? (n = (0, a.jsx)(a.Fragment, {
                    children: t
                }), i[10] = t, i[11] = n) : n = i[11], n
            },
            b: E
        })
    }),
    MDmT: (function(e, t, n) {
        var a = n("BolX"),
            r = n("Qgfj"),
            o = n("OWtl"),
            s = n("dQRk"),
            i = n("b6fw");
        let l = (0, a.d)(o.a, (e, t) => {
            let {
                get: n
            } = t, a = n(i.h, e);
            if (null == a) return null;
            let r = n(s.N, e);
            return null == r ? null : c({
                ...a,
                conversation: {
                    mapping: r,
                    current_node: n(s.C, e),
                    conversation_origin: n(s.y, e),
                    context_truncation_continuation: n(s.i, e)?.metadata
                }
            })
        });

        function c(e) {
            let {
                conversation: t,
                view: n,
                selectedSectionId: a,
                entryMessageIds: r,
                entry: o
            } = e, s = n.definition.sections, i = s.findIndex(e => e.id === a), l = s[i], c = [], d = new Set, u = t.current_node ?? null;
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
                m = s[i + 1],
                g = p(l),
                f = p(m),
                v = l?.start_message_id != null && null == g || m?.start_message_id != null && null == f,
                y = o?.status === "sending" && (o.sectionId === l?.id || o.sectionId === m?.id),
                b = null == g || v ? [] : c.slice(g, f ?? c.length),
                x = Object.fromEntries(b.map(e => [e, t.mapping[e]]));
            return {
                selectedIndex: i,
                conversation: {
                    ...t,
                    current_node: b.at(-1) ?? null,
                    mapping: x
                },
                needsOlderMessages: v && !y,
                isReviewing: a !== n.current_section_id && o?.sectionId !== a,
                needsEntry: l?.start_message_id == null,
                isEntering: o?.status === "sending"
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
    JUxu: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            o = n("BolX"),
            s = n("zd8w"),
            i = n("oyxz"),
            l = n("i7iU"),
            c = n("EOo5"),
            d = n("Sm6l"),
            u = n("X6Vn"),
            h = n("OWtl"),
            p = n("j0nn");
        let m = (0, s.lazy)(async () => ({
            default: (await Promise.resolve().then(n.bind(n, "taaw"))).CodexThreadReportDialog
        }));

        function g(e) {
            let t, n, s, l = (0, r.c)(9),
                {
                    imageOnly: u
                } = e,
                m = (0, o.y)(h.a),
                g = (0, o.x)(p.f, (0, c.a)());
            return null == g ? null : (l[0] !== u || l[1] !== m || l[2] !== g.id ? (t = () => f(m, g.id, u), l[0] = u, l[1] = m, l[2] = g.id, l[3] = t) : t = l[3], l[4] !== u ? (n = u ? (0, a.jsx)(i.a, {
                id: "chatgptConversations.sharedPost.webImage.reportButton",
                defaultMessage: "Report image"
            }) : (0, a.jsx)(i.a, {
                id: "chatgptConversations.sharedPost.reportButton",
                defaultMessage: "Report conversation"
            }), l[4] = u, l[5] = n) : n = l[5], l[6] !== t || l[7] !== n ? (s = (0, a.jsx)(d.a, {
                className: "font-semibold",
                color: "ghostActive",
                type: "button",
                onClick: t,
                children: n
            }), l[6] = t, l[7] = n, l[8] = s) : s = l[8], s)
        }

        function f(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            (0, u.f)(e, m, {
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
                        imageOnly: o
                    } = e,
                    s = void 0 !== o && o;
                return n[0] !== s ? (t = (0, a.jsxs)("div", {
                    className: "flex flex-col items-center gap-1 text-center text-xs select-none",
                    children: [(0, a.jsx)("div", {
                        className: "text-secondary",
                        children: s ? (0, a.jsx)(i.a, {
                            id: "chatgptConversations.sharedPost.webImage.disclaimer",
                            defaultMessage: "This is a shared image."
                        }) : (0, a.jsx)(i.a, {
                            id: "chatgptConversations.sharedConversation.copyDisclaimer",
                            defaultMessage: "This is a copy of a shared ChatGPT chat. It won't be added to memory."
                        })
                    }), (0, a.jsx)(g, {
                        imageOnly: s
                    })]
                }), n[0] = s, n[1] = t) : t = n[1], t
            },
            b: function(e) {
                let t, n = (0, r.c)(3),
                    {
                        postId: s
                    } = e,
                    c = (0, o.y)(h.a);
                return n[0] !== s || n[1] !== c ? (t = (0, a.jsx)(l.a.HeaderAction, {
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
                                    onClick: () => f(c, s),
                                    children: e
                                }, "report")
                            }
                        })
                    })
                }), n[0] = s, n[1] = c, n[2] = t) : t = n[2], t
            }
        })
    }),
    JKdL: (function(e, t, n) {
        n.d(t, {
            a: () => u
        });
        var a = n("ABep"),
            r = n("QosV"),
            o = n("BolX"),
            s = n("i7iU"),
            i = n("Cslg"),
            l = n("OFP1"),
            c = n("EOo5"),
            d = n("MMlk");

        function u(e) {
            let t, n, u, h = (0, r.c)(9),
                {
                    children: p
                } = e,
                m = (0, c.a)(),
                g = (0, o.z)(i.l),
                f = (0, o.z)(l.n);
            h[0] !== m.authMethod || h[1] !== g.status || h[2] !== f ? (t = function(e) {
                let {
                    authMethod: t,
                    chatGptAccessStatus: n,
                    isWorkOnlyChatDisabled: a
                } = e;
                return "chatgpt" === t && "allowed" === n && !a
            }({
                authMethod: m.authMethod,
                chatGptAccessStatus: g.status,
                isWorkOnlyChatDisabled: f
            }), h[0] = m.authMethod, h[1] = g.status, h[2] = f, h[3] = t) : t = h[3];
            let v = t;
            return v || null != p ? (h[4] !== v ? (n = v ? (0, a.jsx)(d.a, {}) : null, h[4] = v, h[5] = n) : n = h[5], h[6] !== p || h[7] !== n ? (u = (0, a.jsx)(s.a.HeaderAction, {
                actionId: "chatgpt-shared-post-actions",
                align: "end",
                allowsThreadContentOverlap: !0,
                order: 100,
                children: (0, a.jsxs)("div", {
                    className: "flex items-center gap-2 browser:rounded-lg browser:bg-surface",
                    children: [p, n]
                })
            }), h[6] = p, h[7] = n, h[8] = u) : u = h[8], u) : null
        }
    }),
    vpdG: (function(e, t, n) {
        var a = n("QosV"),
            r = n("HVBu"),
            o = n.n(r),
            s = n("BolX"),
            i = n("I07G"),
            l = n("zd8w"),
            c = n("Gdjn"),
            d = n("xqnZ"),
            u = n("OWtl"),
            h = n("ADAj"),
            p = n("Ow2S"),
            m = n("fDfx"),
            g = n("dQRk");
        n.d(t, {}, {
            a: function(e) {
                let t, n, r, f, v, y, b = (0, a.c)(19);
                b[0] !== e ? (t = void 0 === e ? {} : e, b[0] = e, b[1] = t) : t = b[1];
                let {
                    composerController: x,
                    conversationId: w,
                    draftKey: C,
                    initialPrompt: _,
                    initialPromptKind: j
                } = t, S = void 0 === C ? w : C, I = (0, s.y)(u.a);
                b[2] !== w || b[3] !== S || b[4] !== _ || b[5] !== j || b[6] !== I ? (n = () => o()(() => {
                    let e = null == w ? null : I.get(g.y, w),
                        t = (0, d.e)(_ ?? (null == S ? "" : I.get(p.u, S)), {
                            addInitialContentToHistory: null == _ && null != S,
                            defaultTextKind: j ?? (null == _ && null != S || (0, c.b)(_ ?? "").length > 0 ? "prompt" : "plain"),
                            enableFileMentions: !0,
                            enableRichText: !0,
                            enableSkillMentions: !1,
                            enableSlashCommands: {
                                triggers: ["/"]
                            },
                            plainTextMode: (0, h.b)(I.get, i.vf.composerPlainTextMode),
                            suggestionOptions: {
                                enableInlineSystemHints: "tpp" !== e && "flora" !== e,
                                variant: "tpp" !== e && "flora" !== e ? "chatgpt" : void 0
                            }
                        });
                    return null == _ && null != w && "string" == typeof S && null != (0, m.k)(I, S) && "tpp" !== e && "flora" !== e && (0, p.T)(I, w, t.getChatGptPrompt().systemHints), t
                }), b[2] = w, b[3] = S, b[4] = _, b[5] = j, b[6] = I, b[7] = n) : n = b[7];
                let [T] = (0, l.useState)(n);
                b[8] !== T || b[9] !== x ? (r = x ?? T(), b[8] = T, b[9] = x, b[10] = r) : r = b[10];
                let E = r,
                    P = (0, l.useRef)(null);
                b[11] !== E || b[12] !== S || b[13] !== I ? (f = () => {
                    if (null == S) return;
                    let e = I.get(p.u, S);
                    return null != P.current && P.current !== e && E.restoreDraft(e), () => {
                        P.current = I.get(p.u, S)
                    }
                }, v = [E, S, I], b[11] = E, b[12] = S, b[13] = I, b[14] = f, b[15] = v) : (f = b[14], v = b[15]), (0, l.useLayoutEffect)(f, v), b[16] !== E || b[17] !== x ? (y = () => {
                    null != x || E.view.isDestroyed || E.destroy()
                }, b[16] = E, b[17] = x, b[18] = y) : y = b[18];
                let A = y;
                return (0, d.f)(A, E), E
            }
        })
    }),
    Yrvy: (function(e, t, n) {
        var a = n("QosV"),
            r = n("xSOA"),
            o = n("BolX"),
            s = n("Wf1j"),
            i = n("SGsN"),
            l = n("OWtl"),
            c = n("MRlq"),
            d = n("QmkR");
        n.d(t, {}, {
            a: function(e) {
                let t, n, u, h, p = (0, a.c)(12),
                    m = (0, o.y)(l.a),
                    g = (0, s.a)();
                return p[0] !== e || p[1] !== m ? (t = t => (0, d.u)({
                    scope: m,
                    conversationId: e,
                    deleteArtifacts: t
                }), p[0] = e, p[1] = m, p[2] = t) : t = p[2], p[3] !== m ? (n = () => m.queryClient.invalidateQueries({
                    queryKey: [d.a]
                }), p[3] = m, p[4] = n) : n = p[4], p[5] !== g || p[6] !== m ? (u = () => {
                    m.get(i.f).danger(g.formatMessage(c.a.deleteError), {
                        errorAnalytics: {
                            toastId: "archived_conversations_modal_delete_failed"
                        }
                    })
                }, p[5] = g, p[6] = m, p[7] = u) : u = p[7], p[8] !== t || p[9] !== n || p[10] !== u ? (h = {
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
            o = (0, a.b)("text-default min-h-0 w-full p-0 leading-normal !font-sans", "[&_.ProseMirror]:w-full", "[&_.ProseMirror]:!text-default", "[&_.ProseMirror]:!font-sans", "[&_.ProseMirror]:px-0", "[&_.ProseMirror]:py-0", "[&_.ProseMirror]:!leading-[var(--annotation-comment-line-height,calc(var(--spacing)*6))]", "[&_.ProseMirror_p]:!font-sans", "[&_.ProseMirror_p]:!leading-[var(--annotation-comment-line-height,calc(var(--spacing)*6))]", "[&_.ProseMirror_p_*]:!font-sans", "[&_.ProseMirror_span]:!font-sans", "!min-h-0 text-base", "[&_.ProseMirror]:min-h-[var(--annotation-comment-min-height,calc(var(--spacing)*6))]!");
        n.d(t, {}, {
            a: "absolute inset-x-0 bottom-0 flex h-12 items-center ps-2 pe-3 origin-bottom-left transition-[opacity,transform] duration-basic ease-out motion-reduce:transition-none",
            b: o,
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
            o = n("on57"),
            s = n("JjB1");

        function i(e) {
            let t, n, i, l, c, d, u, h, p, m, g, f, v, y, b = (0, r.c)(30);
            b[0] !== e ? ({
                className: n,
                children: t,
                style: l,
                isRevealingPageComment: c,
                surfaceVariant: d,
                discussion: u,
                hasRecipientControl: h,
                ...i
            } = e, b[0] = e, b[1] = t, b[2] = n, b[3] = i, b[4] = l, b[5] = c, b[6] = d, b[7] = u, b[8] = h) : (t = b[1], n = b[2], i = b[3], l = b[4], c = b[5], d = b[6], u = b[7], h = b[8]);
            let x = void 0 === d ? "default" : d,
                w = void 0 !== u && u,
                C = void 0 !== h && h,
                _ = "default" === x && "bg-surface-elevated-secondary shadow-md",
                j = w && !C && "in-data-[comment-layout=floating]:shadow-none!",
                S = w && "default" === x && "in-data-[comment-layout=floating]:border in-data-[comment-layout=floating]:bg-surface-elevated!",
                I = w && "default" === x && (C ? "in-data-[comment-layout=floating]:border-strong in-data-[comment-layout=floating]:rounded-xl! in-data-[comment-layout=floating]:shadow-[0_2px_10px_rgb(0_0_0/5%)]!" : "in-data-[comment-layout=floating]:border-border"),
                T = void 0 !== c && c ? "transition-none" : "transition-[height,width,opacity]";
            return b[9] !== n || b[10] !== _ || b[11] !== j || b[12] !== S || b[13] !== I || b[14] !== T ? (p = (0, o.b)("surface-AyYLmv", "pointer-events-auto isolate rounded-[22px] ease-enter-snappy motion-reduce:transition-none", _, j, S, I, T, n), b[9] = n, b[10] = _, b[11] = j, b[12] = S, b[13] = I, b[14] = T, b[15] = p) : p = b[15], b[16] !== l ? (m = {
                ...s.d,
                ...l
            }, b[16] = l, b[17] = m) : m = b[17], b[18] === Symbol.for("react.memo_cache_sentinel") ? (g = (0, o.b)("content-Sj8_aX", "overflow-hidden rounded-[inherit] bg-inherit"), b[18] = g) : g = b[18], b[19] !== t ? (f = (0, a.jsx)("div", {
                className: g,
                children: t
            }), b[19] = t, b[20] = f) : f = b[20], b[21] !== w || b[22] !== x ? (v = "default" === x ? (0, a.jsx)("div", {
                "aria-hidden": !0,
                className: (0, o.b)("pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-multiply outline-1 outline-border", w && "in-data-[comment-layout=floating]:hidden")
            }) : null, b[21] = w, b[22] = x, b[23] = v) : v = b[23], b[24] !== i || b[25] !== p || b[26] !== m || b[27] !== f || b[28] !== v ? (y = (0, a.jsxs)("div", {
                ...i,
                className: p,
                style: m,
                children: [f, v]
            }), b[24] = i, b[25] = p, b[26] = m, b[27] = f, b[28] = v, b[29] = y) : y = b[29], y
        }
    }),
    iqo5: (function(e, t, n) {
        n.d(t, {
            a: () => f
        });
        var a = n("ABep"),
            r = n("QosV"),
            o = n("zd8w"),
            s = n("oyxz"),
            i = n("YwjY"),
            l = n("Sm6l"),
            c = n("UIU6"),
            d = n("Bbed"),
            u = n("RNul"),
            h = n("I07G"),
            p = n("T1PX");

        function m(e) {
            let t, n, s, i, l, c, d = (0, r.c)(13),
                {
                    children: u,
                    source: m
                } = e,
                g = (0, o.useRef)(null),
                f = !(0, p.a)() && m.width > 0 && m.height > 0;
            d[0] !== f || d[1] !== m ? (t = () => {
                let e = g.current,
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
                                o = e.offsetHeight / a.height,
                                s = (m.left - a.left) * r,
                                i = (m.top - a.top) * o,
                                l = (a.right - m.right) * r,
                                c = (a.bottom - m.bottom) * o;
                            e.style.setProperty("--entry-inset", `${i}px ${l}px ${c}px ${s}px`), e.style.setProperty("--entry-transform", `translate(${s}px, ${i}px) scale(${m.width/a.width}, ${m.height/a.height})`), e.dataset.phase = "source", n = t.requestAnimationFrame(() => {
                                e.dataset.phase = "open"
                            })
                        })
                    });
                return a.observe(e), () => {
                    a.disconnect(), t.cancelAnimationFrame(n), delete e.dataset.phase, e.style.removeProperty("--entry-inset"), e.style.removeProperty("--entry-transform")
                }
            }, n = [f, m], d[0] = f, d[1] = m, d[2] = t, d[3] = n) : (t = d[2], n = d[3]), (0, o.useLayoutEffect)(t, n);
            let v = f ? "entry-yS3y1e" : void 0;
            return d[4] === Symbol.for("react.memo_cache_sentinel") ? (s = {
                position: "relative",
                maxWidth: "100%",
                width: h.U
            }, d[4] = s) : s = d[4], d[5] !== f ? (i = f ? (0, a.jsx)("div", {
                "aria-hidden": !0,
                className: "surface-Iou1vs pointer-events-none absolute inset-0 rounded-[22px] bg-surface-elevated-secondary shadow-md outline-1 outline-border"
            }) : null, d[5] = f, d[6] = i) : i = d[6], d[7] !== u ? (l = (0, a.jsx)("div", {
                className: "content-ARLCcU",
                children: u
            }), d[7] = u, d[8] = l) : l = d[8], d[9] !== v || d[10] !== i || d[11] !== l ? (c = (0, a.jsxs)("div", {
                ref: g,
                "data-selection-annotation-entry": "",
                className: v,
                style: s,
                children: [i, l]
            }), d[9] = v, d[10] = i, d[11] = l, d[12] = c) : c = d[12], c
        }
        let g = (0, d.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(789716), n.e(633848), n.e(834141), n.e(562525)]).then(n.bind(n, "FQ1K"))).SelectedTextAnnotationEditor, {
            suspendToParent: !0,
            errorFallback: e => (0, a.jsx)(v, {
                failed: !0,
                onClose: e.onCancel
            })
        });

        function f(e) {
            let t, n, s, i, l, d, u, h, p = (0, r.c)(18);
            p[0] !== e ? ({
                entryRect: t,
                ...n
            } = e, p[0] = e, p[1] = t, p[2] = n) : (t = p[1], n = p[2]), p[3] !== n.onCancel ? (s = (0, a.jsx)(v, {
                failed: !0,
                onClose: n.onCancel
            }), p[3] = n.onCancel, p[4] = s) : s = p[4], p[5] !== n.onCancel ? (i = (0, a.jsx)(v, {
                onClose: n.onCancel
            }), p[5] = n.onCancel, p[6] = i) : i = p[6], p[7] !== n ? (l = (0, a.jsx)(g, {
                ...n
            }), p[7] = n, p[8] = l) : l = p[8], p[9] !== i || p[10] !== l ? (d = (0, a.jsx)(o.Suspense, {
                fallback: i,
                children: l
            }), p[9] = i, p[10] = l, p[11] = d) : d = p[11], p[12] !== s || p[13] !== d ? (u = (0, a.jsx)(c.a, {
                name: "ResponseTextAnnotationEditor",
                fallback: s,
                children: d
            }), p[12] = s, p[13] = d, p[14] = u) : u = p[14];
            let f = u;
            return p[15] !== f || p[16] !== t ? (h = null == t ? f : (0, a.jsx)(m, {
                source: t,
                children: f
            }), p[15] = f, p[16] = t, p[17] = h) : h = p[17], h
        }

        function v(e) {
            let t, n, o, c, d = (0, r.c)(9),
                {
                    failed: h,
                    onClose: p
                } = e,
                m = void 0 !== h && h,
                g = m ? "alert" : "status";
            return d[0] !== m ? (t = m ? (0, a.jsx)(s.a, {
                id: "responseTextAnnotationMarkers.editor.loadError",
                defaultMessage: "Couldn't load the editor. Reload to try again"
            }) : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(u.a, {}), (0, a.jsx)(s.a, {
                    id: "responseTextAnnotationMarkers.editor.loading",
                    defaultMessage: "Loading editor…"
                })]
            }), d[0] = m, d[1] = t) : t = d[1], d[2] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(s.a, {
                id: "responseTextAnnotationMarkers.editor.close",
                defaultMessage: "Close"
            }), d[2] = n) : n = d[2], d[3] !== p ? (o = (0, a.jsx)(l.a, {
                color: "secondary",
                onClick: p,
                children: n
            }), d[3] = p, d[4] = o) : o = d[4], d[5] !== g || d[6] !== t || d[7] !== o ? (c = (0, a.jsxs)(i.a, {
                className: "flex flex-col items-center justify-center gap-3 p-4 text-center text-sm text-secondary select-none",
                role: g,
                children: [t, o]
            }), d[5] = g, d[6] = t, d[7] = o, d[8] = c) : c = d[8], c
        }
        f.prefetch = () => g.prefetch()
    }),
    IxWh: (function(e, t, n) {
        var a = n("Vzyk"),
            r = n.n(a);

        function o(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ltr",
                n = Math.max(0, e.scrollWidth - e.clientWidth);
            if ("rtl" === t) return {
                maximum: 0,
                minimum: -n
            };
            let a = e.firstElementChild,
                r = Math.min(n, a instanceof HTMLElement ? Math.max(0, s(e, a, t)) : 0);
            return {
                maximum: n,
                minimum: r
            }
        }

        function s(e, t, n) {
            return "rtl" === n ? t.offsetLeft - e.offsetLeft + t.offsetWidth - e.clientWidth + i(e, n) : t.offsetLeft - e.offsetLeft - i(e, n)
        }

        function i(e, t) {
            let n = Number.parseFloat("rtl" === t ? getComputedStyle(e).scrollPaddingRight : getComputedStyle(e).scrollPaddingLeft);
            return Number.isNaN(n) ? 0 : n
        }
        n.d(t, {}, {
            a: o,
            b: function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ltr",
                    {
                        maximum: a,
                        minimum: l
                    } = o(e, n),
                    c = "rtl" === n ? -t : t,
                    d = r()(e.scrollLeft + c * (e.clientWidth - i(e, n)), l, a),
                    u = e.children;
                for (let o = 1 === t ? 0 : u.length - 1; o >= 0 && o < u.length; o += t) {
                    let t = u.item(o);
                    if (!(t instanceof HTMLElement)) continue;
                    let i = r()(s(e, t, n), l, a);
                    if (1 === c && i >= d - 1 || -1 === c && i <= d + 1) return i
                }
                return 1 === c ? a : l
            }
        })
    }),
    GKsW: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            o = n("BolX"),
            s = n("zd8w"),
            i = n("GaA7"),
            l = n("OWtl"),
            c = n("tSEg"),
            d = n("n5oN");
        let u = (0, o.u)(l.a, () => []);

        function h(e) {
            let t, n, a, c, d, h, f = (0, r.c)(13),
                {
                    title: v,
                    nativeTitle: y
                } = e,
                b = void 0 === y ? v : y,
                x = (0, o.y)(l.a),
                [w] = (0, s.useState)(p);
            return f[0] !== b || f[1] !== w || f[2] !== x || f[3] !== v ? (t = () => {
                if (i.a?.windowTitle == null) return;
                let e = {
                    owner: w,
                    title: null == v ? void 0 : b ?? null
                };
                x.set(u, t => t.some(e => e.owner === w) ? t.map(t => t.owner === w ? e : t) : [...t, e]), g(x)
            }, n = [x, w, v, b], f[0] = b, f[1] = w, f[2] = x, f[3] = v, f[4] = t, f[5] = n) : (t = f[4], n = f[5]), (0, s.useEffect)(t, n), f[6] !== w || f[7] !== x ? (a = () => () => {
                i.a?.windowTitle != null && (x.set(u, e => e.filter(e => e.owner !== w)), g(x))
            }, c = [x, w], f[6] = w, f[7] = x, f[8] = a, f[9] = c) : (a = f[8], c = f[9]), (0, s.useEffect)(a, c), f[10] !== v ? (d = () => {
                if (null == v) return;
                let e = document.title;
                m(v);
                let t = document.title;
                return () => {
                    document.title === t && m(e)
                }
            }, h = [v], f[10] = v, f[11] = d, f[12] = h) : (d = f[11], h = f[12]), (0, s.useEffect)(d, h), null
        }

        function p() {
            return Symbol()
        }

        function m(e) {
            let t = document.head.querySelector("title")?.firstChild;
            t instanceof Text && null == t.nextSibling ? t.data = e : document.title = e
        }

        function g(e) {
            let t = e.get(u).findLast(e => void 0 !== e.title);
            i.a.windowTitle?.setTitle(t?.title ?? null)
        }
        n.d(t, {}, {
            a: h,
            b: function(e) {
                let t, n = (0, r.c)(2),
                    {
                        title: s
                    } = e,
                    i = (0, o.y)(c.a),
                    l = (0, o.x)(d.a, `${i.value.pathname}${i.value.search??""}`),
                    u = s ?? l;
                return n[0] !== u ? (t = (0, a.jsx)(h, {
                    title: u
                }), n[0] = u, n[1] = t) : t = n[1], t
            }
        })
    }),
    SkIz: (function(e, t, n) {
        n.d(t, {
            a: () => w
        });
        var a = n("ABep"),
            r = n("QosV"),
            o = n("BolX"),
            s = n("oyxz"),
            i = n("TjgH"),
            l = n("Sm6l"),
            c = n("X6Vn"),
            d = n("gPv1"),
            u = n("OWtl"),
            h = n("nsrx"),
            p = n("on57"),
            m = n("JNtf"),
            g = n("mUDD"),
            f = n("ZhKl"),
            v = n("qVxm"),
            y = n("a6Zv"),
            b = n("eLmE");

        function x(e) {
            let t, n, i, c, d, x, w, C = (0, r.c)(19),
                {
                    hostId: _,
                    onClose: j,
                    rateLimitStatus: S
                } = e,
                I = (0, o.y)(u.a),
                T = (0, y.a)(),
                E = (0, o.x)(b.b, _),
                P = S.rate_limit_upsell;
            if (!E || null == P) return null;
            let A = !T && "-mb-6";
            C[0] !== A ? (t = (0, p.b)("block w-full scale-105 object-cover", A), C[0] = A, C[1] = t) : t = C[1];
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
                children: (0, a.jsx)(s.a, {
                    id: "codex.lunaReserve.dialog.title",
                    defaultMessage: "Regain access to our most powerful models"
                })
            }), C[5] = i) : i = C[5], C[6] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)(g.e, {
                className: "items-center pb-2",
                children: (0, a.jsx)(g.d, {
                    className: "items-center",
                    titleClassName: "text-center",
                    subtitleTone: "secondary",
                    subtitleClassName: "text-center",
                    title: i,
                    subtitle: (0, a.jsx)(m.d, {
                        className: "contents",
                        children: (0, a.jsx)(s.a, {
                            id: "codex.lunaReserve.dialog.description",
                            defaultMessage: "You are now chatting with Luna. Continue to access our most capable models."
                        })
                    })
                })
            }), C[6] = c) : c = C[6], C[7] !== P.ctas || C[8] !== j || C[9] !== I ? (d = e => (0, a.jsx)("div", {
                className: "self-center",
                children: (0, a.jsx)(g.c, {
                    expandSingleButton: !1,
                    children: P.ctas.map((t, n) => {
                        if (!(0, f.b)(t.action)) return null;
                        let r = e.actions[t.action];
                        return (0, a.jsx)(l.a, {
                            color: 0 === n ? "primary" : "secondary",
                            disabled: r.disabled,
                            size: "large",
                            onClick: e => {
                                (0, h.a)(I, {
                                    action: "CODEX_LUNA_RESERVE_LIFECYCLE_ACTION_MODAL_CTA_CLICKED",
                                    ctaAction: t.action,
                                    source: "details_modal"
                                }), r.log(), j(), r.onClick(e)
                            },
                            children: r.label ?? t.label
                        }, `${t.action}:${n}`)
                    }).reverse()
                })
            }), C[7] = P.ctas, C[8] = j, C[9] = I, C[10] = d) : d = C[10], C[11] !== P || C[12] !== S || C[13] !== d ? (x = (0, a.jsxs)(g.b, {
                children: [c, (0, a.jsx)(g.e, {
                    className: "items-center",
                    children: (0, a.jsx)(v.a, {
                        banner: P,
                        rateLimitStatus: S,
                        renderContent: d
                    })
                })]
            }), C[11] = P, C[12] = S, C[13] = d, C[14] = x) : x = C[14], C[15] !== j || C[16] !== n || C[17] !== x ? (w = (0, a.jsxs)(m.a, {
                open: !0,
                size: "default",
                onOpenChange: j,
                children: [n, x]
            }), C[15] = j, C[16] = n, C[17] = x, C[18] = w) : w = C[18], w
        }

        function w(e) {
            let t, n, p, m, g = (0, r.c)(7),
                {
                    hostId: f
                } = e,
                v = (0, o.y)(u.a);
            return (0, o.x)(b.b, f) ? (g[0] !== f || g[1] !== v ? (t = () => {
                (0, h.a)(v, {
                    action: "CODEX_LUNA_RESERVE_LIFECYCLE_ACTION_HEADER_BUTTON_CLICKED",
                    source: "thread_header"
                });
                let e = v.query.getData(d.b);
                if (null != e) {
                    (0, c.f)(v, x, {
                        hostId: f,
                        rateLimitStatus: e
                    }), (0, h.a)(v, {
                        action: "CODEX_LUNA_RESERVE_LIFECYCLE_ACTION_MODAL_OPENED",
                        source: "details_modal"
                    });
                    return
                }(0, h.a)(v, {
                    action: "CODEX_LUNA_RESERVE_LIFECYCLE_ACTION_ERROR",
                    errorCode: "missing_usage_status",
                    source: "thread_header"
                })
            }, g[0] = f, g[1] = v, g[2] = t) : t = g[2], g[3] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)("span", {
                "aria-hidden": "true",
                className: "text-chart-yellow",
                children: "🌙"
            }), g[3] = n) : n = g[3], g[4] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, a.jsxs)(i.a, {
                variant: "reserve",
                children: [n, (0, a.jsx)("span", {
                    className: "brightness-75 dark:brightness-100",
                    children: (0, a.jsx)(s.a, {
                        id: "codex.lunaReserve.header.label",
                        defaultMessage: "Luna reserve"
                    })
                })]
            }), g[4] = p) : p = g[4], g[5] !== t ? (m = (0, a.jsx)(l.a, {
                color: "ghostMuted",
                size: "inline",
                onClick: t,
                children: p
            }), g[5] = t, g[6] = m) : m = g[6], m) : null
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
        let o = new Set(["auto", "clip", "hidden", "overlay", "scroll"]);

        function s(e) {
            let {
                range: t,
                element: n,
                target: a,
                bottomBoundaryTop: r
            } = e, o = c(n, r);
            if (null == o) return null;
            let s = function(e, t, n, a) {
                let r = Array.from(e.getClientRects()),
                    o = t.getBoundingClientRect(),
                    s = d(r, a);
                if (null != s && (r.length > 1 || null != u(s, o))) return s;
                let i = e.getBoundingClientRect(),
                    l = u(i, a);
                return null != l && null != u(l, o) ? l : r.some(e => e.width > 0 && e.height > 0) || i.width > 0 && i.height > 0 ? null : d(Array.from(t.getClientRects()), a) ?? u(o, a) ?? d(Array.from(n.getClientRects()), a) ?? u(n.getBoundingClientRect(), a)
            }(t, n, a, o);
            return null == s ? null : {
                rect: s,
                bounds: o
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
                    t = (e.overflowX || e.overflow).split(/\s+/).some(e => o.has(e)),
                    r = (e.overflowY || e.overflow).split(/\s+/).some(e => o.has(e));
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
                o = Math.min(e.bottom, t.bottom);
            return n >= r || a >= o ? null : new DOMRect(n, a, r - n, o - a)
        }
        n.d(t, {}, {
            a: c,
            b: s,
            c: function(e) {
                let {
                    bottomBoundarySelector: t,
                    portalTarget: n,
                    targetContainer: o,
                    targetSelector: c,
                    windowZoom: d
                } = e, u = window.getSelection();
                if (null == u || 0 === u.rangeCount || u.isCollapsed) return null;
                let h = function(e, t, n) {
                    var a, r;
                    let o, s, l = i(e.anchorNode, e.anchorOffset, n),
                        c = i(e.focusNode, e.focusOffset, n);
                    if (null != l && null != c && l.target !== c.target) return null;
                    let d = l ?? c;
                    return null == d || null != d.element.closest('[contenteditable="true"]') ? null : {
                        ...d,
                        range: (a = t, r = d.target, (o = document.createRange()).selectNodeContents(r), s = a.cloneRange(), (!r.contains(s.startContainer) || 0 > s.compareBoundaryPoints(Range.START_TO_START, o)) && s.setStart(o.startContainer, o.startOffset), (!r.contains(s.endContainer) || s.compareBoundaryPoints(Range.END_TO_END, o) > 0) && s.setEnd(o.endContainer, o.endOffset), s)
                    }
                }(u, u.getRangeAt(0), c);
                if (null == h || null != o && !o.contains(h.target)) return null;
                let p = (0, a.a)(h.range)?.trim() ?? h.range.toString().trim();
                if (0 === p.length) return null;
                let m = null == t ? null : o?.querySelector(t),
                    g = m instanceof HTMLElement ? m.getBoundingClientRect().top : void 0,
                    f = s({
                        ...h,
                        bottomBoundaryTop: g
                    });
                if (null == f) return null;
                let {
                    rect: v
                } = f, y = n?.contains(h.target) === !0 ? n : void 0, b = y?.getBoundingClientRect(), x = null == b ? {
                    left: 0,
                    right: window.innerWidth
                } : {
                    left: -b.left / d,
                    right: (window.innerWidth - b.left) / d
                }, w = null == b ? v : new DOMRect((v.left - b.left) / d, (v.top - b.top) / d, v.width / d, v.height / d), C = l(h.range.startContainer) ?? h.element;
                return {
                    direction: "rtl" === window.getComputedStyle(C).direction ? "rtl" : "ltr",
                    portalTarget: y,
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
            o = n("on57"),
            s = n("zd8w"),
            i = n("wD9O"),
            l = n("i7gm"),
            c = n("bIvi"),
            d = n("w5yV"),
            u = n("ajVv");

        function h(e) {
            return null != e
        }

        function p(e) {
            return e.current
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, m, g, f, v, y, b, x, w = (0, r.c)(40),
                    {
                        align: C,
                        bottomBoundarySelector: _,
                        children: j,
                        className: S,
                        onOpen: I,
                        portalTargetSelector: T,
                        targetContainer: E,
                        targetContainerRefs: P,
                        targetSelector: A
                    } = e,
                    M = void 0 === A ? u.b : A,
                    k = (0, i.c)(),
                    R = (0, s.useRef)(null),
                    N = (0, s.useRef)(!1),
                    O = (0, s.useRef)(null),
                    B = (0, s.useRef)(null),
                    [L, F] = (0, s.useState)(null);
                w[0] !== I ? (t = e => {
                    I?.(e)
                }, w[0] = I, w[1] = t) : t = w[1];
                let G = (0, s.useEffectEvent)(t);
                w[2] !== L || w[3] !== k ? (n = () => {
                    let e = O.current?.getBoundingClientRect();
                    if (null == L || null == e) return;
                    let t = L.portalTarget?.getBoundingClientRect(),
                        n = null == t ? 1 : k;
                    return {
                        point: {
                            x: e.left + e.width / 2,
                            y: e.bottom
                        },
                        width: e.width,
                        selectionRect: {
                            x: L.rect.left * n + (t?.left ?? 0),
                            y: L.rect.top * n + (t?.top ?? 0),
                            width: L.rect.width * n,
                            height: L.rect.height * n
                        },
                        windowZoom: k
                    }
                }, w[2] = L, w[3] = k, w[4] = n) : n = w[4];
                let z = (0, c.a)(n);
                if (w[5] !== _ || w[6] !== G || w[7] !== T || w[8] !== E || w[9] !== P || w[10] !== M || w[11] !== k ? (m = () => {
                        let e = null,
                            t = () => {
                                null != R.current && (window.cancelAnimationFrame(R.current), R.current = null)
                            },
                            n = () => {
                                t();
                                let e = window.getSelection();
                                null == B.current && (null == e || 0 === e.rangeCount || e.isCollapsed) || (R.current = window.requestAnimationFrame(() => {
                                    R.current = null;
                                    let e = null != E || null == P ? [E] : P.map(p).filter(h),
                                        t = null;
                                    for (let n of e)
                                        if (null != (t = (0, d.c)({
                                                bottomBoundarySelector: _,
                                                portalTarget: null == T ? void 0 : n?.querySelector(T) ?? void 0,
                                                targetContainer: n,
                                                targetSelector: M,
                                                windowZoom: k
                                            }))) break;
                                    (0, d.d)(B.current, t) || (null == B.current && null != t && G(t), B.current = t, F(t))
                                }))
                            },
                            a = () => {
                                let e = window.getSelection();
                                N.current || null == e || 0 === e.rangeCount || e.isCollapsed || n()
                            },
                            r = t => {
                                let r = window.getSelection(),
                                    o = B.current?.portalTarget;
                                if (!N.current && null != r && 0 !== r.rangeCount && !r.isCollapsed) {
                                    if (null != o && o.contains(r.getRangeAt(0).commonAncestorContainer)) {
                                        let n = t.target;
                                        if (!(n instanceof Node && o.contains(n))) return void(null != e && window.clearTimeout(e), e = window.setTimeout(() => {
                                            e = null, a()
                                        }, 100));
                                        if (!r.getRangeAt(0).intersectsNode(n)) return
                                    }
                                    n()
                                }
                            },
                            o = e => {
                                let n = e.target;
                                n instanceof Node && O.current?.contains(n) || (N.current = !0, t(), B.current = null, F(null))
                            },
                            s = () => {
                                N.current = !1, n()
                            },
                            i = () => {
                                if (N.current) {
                                    t(), B.current = null, F(null);
                                    return
                                }
                                n()
                            };
                        return n(), document.addEventListener("selectionchange", i), window.addEventListener("dblclick", n), window.addEventListener("keyup", n), window.addEventListener("pointerdown", o), window.addEventListener("pointerup", s), window.addEventListener("pointercancel", s), window.addEventListener("resize", a), window.addEventListener("scroll", r, !0), () => {
                            null != e && window.clearTimeout(e), t(), document.removeEventListener("selectionchange", i), window.removeEventListener("dblclick", n), window.removeEventListener("keyup", n), window.removeEventListener("pointerdown", o), window.removeEventListener("pointerup", s), window.removeEventListener("pointercancel", s), window.removeEventListener("resize", a), window.removeEventListener("scroll", r, !0)
                        }
                    }, w[5] = _, w[6] = G, w[7] = T, w[8] = E, w[9] = P, w[10] = M, w[11] = k, w[12] = m) : m = w[12], w[13] !== _ || w[14] !== T || w[15] !== E || w[16] !== P || w[17] !== M || w[18] !== k ? (g = [_, T, E, P, M, k], w[13] = _, w[14] = T, w[15] = E, w[16] = P, w[17] = M, w[18] = k, w[19] = g) : g = w[19], (0, s.useEffect)(m, g), null == L) return null;
                let D = .5;
                "start" === (void 0 === C ? "center" : C) && (D = +("rtl" === L.direction));
                let H = L.rect.left + L.rect.width * D,
                    W = L.viewportHorizontalBounds.left + 8 - H,
                    U = L.viewportHorizontalBounds.right - 8 - H,
                    q = L.portalTarget ?? document.body,
                    K = null == L.portalTarget ? "fixed z-50" : "absolute z-[1]";
                w[20] !== S || w[21] !== K ? (f = (0, o.b)("pointer-events-none w-max", K, S), w[20] = S, w[21] = K, w[22] = f) : f = w[22];
                let V = L.viewportHorizontalBounds.right - L.viewportHorizontalBounds.left - 16,
                    Q = L.rect.top - 8,
                    $ = `translateX(clamp(${W}px, ${-100*D}%, calc(${U}px - 100%))) translateY(-100%)`;
                return w[23] !== H || w[24] !== V || w[25] !== Q || w[26] !== $ ? (v = {
                    left: H,
                    maxWidth: V,
                    top: Q,
                    transform: $
                }, w[23] = H, w[24] = V, w[25] = Q, w[26] = $, w[27] = v) : v = w[27], w[28] !== j || w[29] !== z || w[30] !== L || w[31] !== k ? (y = null == L.portalTarget && 1 !== k ? (0, a.jsx)("div", {
                    style: {
                        zoom: k
                    },
                    children: j(L, z)
                }) : j(L, z), w[28] = j, w[29] = z, w[30] = L, w[31] = k, w[32] = y) : y = w[32], w[33] !== v || w[34] !== y || w[35] !== f ? (b = (0, a.jsx)("div", {
                    ref: O,
                    className: f,
                    style: v,
                    children: y
                }), w[33] = v, w[34] = y, w[35] = f, w[36] = b) : b = w[36], w[37] !== b || w[38] !== q ? (x = (0, a.jsx)(l.a, {
                    container: q,
                    children: b
                }), w[37] = b, w[38] = q, w[39] = x) : x = w[39], x
            }
        })
    }),
    JEFL: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            o = n("zd8w"),
            s = n("Wf1j"),
            i = n("oyxz"),
            l = n("iqo5"),
            c = n("Sm6l"),
            d = n("jqmc"),
            u = n("UxN3"),
            h = n("jb3G"),
            p = n("mN6P"),
            m = n("Cvno");
        n.d(t, {}, {
            a: function(e) {
                let t, n, g, f, v, y, b = (0, r.c)(56),
                    {
                        conversationTerminology: x,
                        onAddSelectedText: w,
                        onStartFileAnnotation: C,
                        onDismissFileAnnotation: _,
                        onCommentSelectedText: j,
                        onEditModeChange: S,
                        onEditSelectedText: I,
                        onMoreDetails: T,
                        onOpenSideChat: E,
                        resume: P,
                        selectedText: A
                    } = e,
                    M = void 0 === x ? "task" : x,
                    k = (0, s.a)(),
                    [R, N] = (0, o.useState)(P?.mode === "edit" ? P.instruction : ""),
                    [O, B] = (0, o.useState)(P?.mode ?? "actions"),
                    [L, F] = (0, o.useState)(null);
                if (null != L) {
                    let e, t, n;
                    return b[0] !== _ ? (e = () => _?.(!1), t = () => _?.(!0), b[0] = _, b[1] = e, b[2] = t) : (e = b[1], t = b[2]), b[3] !== L.rect || b[4] !== L.submit || b[5] !== e || b[6] !== t ? (n = (0, a.jsx)(l.a, {
                        entryRect: L.rect,
                        onCancel: e,
                        onEscape: t,
                        onSubmit: L.submit
                    }), b[3] = L.rect, b[4] = L.submit, b[5] = e, b[6] = t, b[7] = n) : n = b[7], n
                }
                if ("pending" === O) return null;
                if ("edit" === O && null != I) {
                    let e, t, n, r, o, s, i, l, d, p;
                    return b[8] !== S ? (e = e => {
                        e.stopPropagation(), "Escape" === e.key && (e.preventDefault(), S?.(!1), B("actions-focused"))
                    }, b[8] = S, b[9] = e) : e = b[9], b[10] !== R || b[11] !== S || b[12] !== I ? (t = e => {
                        e.preventDefault(), 0 !== R.trim().length && (B("pending"), I(R).then(e => {
                            "retry" === e && (S?.(!1), B("actions-focused"))
                        }))
                    }, b[10] = R, b[11] = S, b[12] = I, b[13] = t) : t = b[13], b[14] !== k ? (n = k.formatMessage({
                        id: "selectedTextOverlay.editInput",
                        defaultMessage: "Edit instruction"
                    }), b[14] = k, b[15] = n) : n = b[15], b[16] !== k ? (r = k.formatMessage({
                        id: "selectedTextOverlay.editPlaceholder",
                        defaultMessage: "Describe the edit…"
                    }), b[16] = k, b[17] = r) : r = b[17], b[18] === Symbol.for("react.memo_cache_sentinel") ? (o = e => {
                        N(e.target.value)
                    }, b[18] = o) : o = b[18], b[19] !== R || b[20] !== n || b[21] !== r ? (s = (0, a.jsx)("input", {
                        "aria-label": n,
                        autoComplete: "off",
                        autoFocus: !0,
                        className: "min-w-0 flex-1 bg-transparent text-sm text-default outline-none placeholder:text-codex-description",
                        placeholder: r,
                        required: !0,
                        value: R,
                        onChange: o
                    }), b[19] = R, b[20] = n, b[21] = r, b[22] = s) : s = b[22], b[23] !== k ? (i = k.formatMessage({
                        id: "selectedTextOverlay.editSubmit",
                        defaultMessage: "Submit edit instruction"
                    }), b[23] = k, b[24] = i) : i = b[24], b[25] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, a.jsx)(u.a, {
                        "aria-hidden": !0,
                        asset16: m.a,
                        legacyIcon: h.a,
                        legacyClassName: "icon-2xs"
                    }), b[25] = l) : l = b[25], b[26] !== i ? (d = (0, a.jsx)(c.a, {
                        "aria-label": i,
                        color: "primary",
                        size: "composerSm",
                        type: "submit",
                        uniform: !0,
                        children: l
                    }), b[26] = i, b[27] = d) : d = b[27], b[28] !== d || b[29] !== e || b[30] !== t || b[31] !== s ? (p = (0, a.jsxs)("form", {
                        className: "pointer-events-auto flex w-[27rem] max-w-full items-center gap-1.5 rounded-full border border-default bg-surface p-1 ps-3.5 font-sans shadow-lg",
                        onKeyDown: e,
                        onSubmit: t,
                        children: [s, d]
                    }), b[28] = d, b[29] = e, b[30] = t, b[31] = s, b[32] = p) : p = b[32], p
                }
                return b[33] !== M || b[34] !== w || b[35] !== C || b[36] !== A ? (t = null != w || null != C ? (0, a.jsx)(d.b, {
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
                }) : null, b[33] = M, b[34] = w, b[35] = C, b[36] = A, b[37] = t) : t = b[37], b[38] !== T || b[39] !== A ? (n = null != T ? (0, a.jsx)(d.b, {
                    onClick: () => {
                        window.getSelection()?.removeAllRanges(), T(A)
                    },
                    children: (0, a.jsx)(i.a, {
                        id: "selectedTextOverlay.moreDetails",
                        defaultMessage: "More details"
                    })
                }) : null, b[38] = T, b[39] = A, b[40] = n) : n = b[40], b[41] !== E || b[42] !== A ? (g = null != E ? (0, a.jsx)(d.b, {
                    onClick: e => {
                        window.getSelection()?.removeAllRanges(), E(A, (0, p.b)(e))
                    },
                    children: (0, a.jsx)(i.a, {
                        id: "selectedTextOverlay.askInSideChat",
                        defaultMessage: "Ask in side chat"
                    })
                }) : null, b[41] = E, b[42] = A, b[43] = g) : g = b[43], b[44] !== j ? (f = null != j ? (0, a.jsx)(d.b, {
                    onClick: () => {
                        window.getSelection()?.removeAllRanges(), j()
                    },
                    children: (0, a.jsx)(i.a, {
                        id: "selectedTextOverlay.comment",
                        defaultMessage: "Comment"
                    })
                }) : null, b[44] = j, b[45] = f) : f = b[45], b[46] !== O || b[47] !== S || b[48] !== I ? (v = null != I ? (0, a.jsx)(d.b, {
                    autoFocus: "actions-focused" === O,
                    onClick: () => {
                        S?.(!0), B("edit")
                    },
                    children: (0, a.jsx)(i.a, {
                        id: "selectedTextOverlay.edit",
                        defaultMessage: "Edit"
                    })
                }) : null, b[46] = O, b[47] = S, b[48] = I, b[49] = v) : v = b[49], b[50] !== t || b[51] !== n || b[52] !== g || b[53] !== f || b[54] !== v ? (y = (0, a.jsxs)(d.a, {
                    children: [t, n, g, f, v]
                }), b[50] = t, b[51] = n, b[52] = g, b[53] = f, b[54] = v, b[55] = y) : y = b[55], y
            }
        })
    }),
    vNLk: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            o = n("hwkA"),
            s = n("oyxz"),
            i = n("bf6R"),
            l = n("MRlq");
        n.d(t, {}, {
            a: function(e) {
                let t, n, c, d, u, h, p, m, g, f = (0, r.c)(31),
                    {
                        restored: v,
                        restoring: y,
                        deleting: b,
                        onDelete: x,
                        onUnarchive: w,
                        onDone: C
                    } = e,
                    _ = void 0 !== b && b;
                f[0] !== y ? (t = y ? (0, a.jsx)(s.a, {
                    id: "localConversation.archived.restoringDescription",
                    defaultMessage: "Restoring this chat and its workspace…"
                }) : null, f[0] = y, f[1] = t) : t = f[1], f[2] !== v || f[3] !== y ? (n = !y && v ? (0, a.jsx)(s.a, {
                    id: "localConversation.archived.restoredDescription",
                    defaultMessage: "This chat has been restored"
                }) : null, f[2] = v, f[3] = y, f[4] = n) : n = f[4], f[5] !== v || f[6] !== y ? (c = y || v ? null : (0, a.jsx)(s.a, {
                    id: "localConversation.archived.previewDescription",
                    defaultMessage: "This chat is archived. To continue, unarchive it first"
                }), f[5] = v, f[6] = y, f[7] = c) : c = f[7], f[8] !== t || f[9] !== n || f[10] !== c ? (d = (0, a.jsxs)("span", {
                    className: "text-sm text-secondary select-none",
                    children: [t, n, c]
                }), f[8] = t, f[9] = n, f[10] = c, f[11] = d) : d = f[11], f[12] !== _ || f[13] !== x || f[14] !== v || f[15] !== y ? (u = v || null == x ? null : (0, a.jsx)(o.a, {
                    color: "danger",
                    variant: "solid",
                    disabled: y,
                    loading: _,
                    size: "lg",
                    onClick: x,
                    children: (0, a.jsx)(s.a, {
                        ...l.a.delete
                    })
                }), f[12] = _, f[13] = x, f[14] = v, f[15] = y, f[16] = u) : u = f[16];
                let j = v ? C : w;
                return f[17] !== v || f[18] !== y ? (h = v && !y ? (0, a.jsx)(s.a, {
                    id: "localConversation.archived.previewDone",
                    defaultMessage: "Done"
                }) : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(i.f, {}), (0, a.jsx)(s.a, {
                        ...l.a.unarchive
                    })]
                }), f[17] = v, f[18] = y, f[19] = h) : h = f[19], f[20] !== _ || f[21] !== y || f[22] !== j || f[23] !== h ? (p = (0, a.jsx)(o.a, {
                    color: "primary",
                    variant: "solid",
                    disabled: _,
                    loading: y,
                    size: "lg",
                    onClick: j,
                    children: h
                }), f[20] = _, f[21] = y, f[22] = j, f[23] = h, f[24] = p) : p = f[24], f[25] !== u || f[26] !== p ? (m = (0, a.jsxs)("div", {
                    className: "pointer-events-auto flex items-center gap-2",
                    children: [u, p]
                }), f[25] = u, f[26] = p, f[27] = m) : m = f[27], f[28] !== m || f[29] !== d ? (g = (0, a.jsxs)("div", {
                    className: "flex flex-col items-center gap-4 py-4",
                    children: [d, m]
                }), f[28] = m, f[29] = d, f[30] = g) : g = f[30], g
            }
        })
    }),
    sqqv: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            o = n("slpy"),
            s = n("Wf1j"),
            i = n("oyxz"),
            l = n("Sm6l"),
            c = n("bf6R"),
            d = n("ABl9"),
            u = n("Zt82");
        n.d(t, {}, {
            a: function(e) {
                let t, n, h, p, m, g, f, v, y, b, x, w, C = (0, r.c)(26);
                C[0] !== e ? ({
                    title: p,
                    project: n,
                    onActivate: t,
                    ...h
                } = e, C[0] = e, C[1] = t, C[2] = n, C[3] = h, C[4] = p) : (t = C[1], n = C[2], h = C[3], p = C[4]);
                let _ = (0, s.a)(),
                    j = n?.name;
                return C[5] !== _ || C[6] !== j ? (m = (0, u.a)(_, j), C[5] = _, C[6] = j, C[7] = m) : m = C[7], C[8] !== t || C[9] !== h ? (g = e => {
                    h.onClick?.(e), t?.()
                }, f = e => {
                    h.onKeyDown?.(e), e.defaultPrevented && !e.repeat && ("Enter" === e.key || " " === e.key) && t?.()
                }, C[8] = t, C[9] = h, C[10] = g, C[11] = f) : (g = C[10], f = C[11]), C[12] !== n ? (v = null == n ? null : (0, a.jsx)(o.a, {
                    content: n.name,
                    children: (0, a.jsx)("span", {
                        "aria-hidden": "true",
                        className: "flex shrink-0 items-center",
                        children: n.icon
                    })
                }), C[12] = n, C[13] = v) : v = C[13], C[14] !== p ? (y = "string" == typeof p ? (0, d.d)(p) : p ?? (0, a.jsx)(i.a, {
                    id: "threadWorkspace.chatTitlebar.fallbackTitle",
                    defaultMessage: "Chat"
                }), C[14] = p, C[15] = y) : y = C[15], C[16] !== y ? (b = (0, a.jsx)("span", {
                    className: "min-w-0 truncate",
                    children: y
                }), C[16] = y, C[17] = b) : b = C[17], C[18] === Symbol.for("react.memo_cache_sentinel") ? (x = (0, a.jsx)("span", {
                    className: "grid size-3.5 shrink-0 place-items-center",
                    children: (0, a.jsx)(c.Zb, {})
                }), C[18] = x) : x = C[18], C[19] !== h || C[20] !== m || C[21] !== g || C[22] !== f || C[23] !== v || C[24] !== b ? (w = (0, a.jsxs)(l.a, {
                    "aria-description": m,
                    ...h,
                    onClick: g,
                    onKeyDown: f,
                    className: "max-w-full min-w-0 select-none",
                    color: "ghostActive",
                    size: "conversationTitle",
                    children: [v, b, x]
                }), C[19] = h, C[20] = m, C[21] = g, C[22] = f, C[23] = v, C[24] = b, C[25] = w) : w = C[25], w
            }
        })
    }),
    enMl: (function(e, t, n) {
        var a = n("QosV"),
            r = n("BolX"),
            o = n("zd8w"),
            s = n("tSEg"),
            i = n("giVD");
        n.d(t, {}, {
            a: function(e) {
                let t, n, l, c, d = (0, a.c)(9),
                    {
                        icon: u,
                        isVisible: h,
                        title: p
                    } = e,
                    m = void 0 === u ? null : u,
                    g = void 0 === h || h,
                    f = (0, r.y)(s.a);
                return d[0] !== m || d[1] !== g || d[2] !== f || d[3] !== p ? (t = () => {
                    f.set(i.c, m), f.set(i.e, p), f.set(i.g, g)
                }, n = [m, g, f, p], d[0] = m, d[1] = g, d[2] = f, d[3] = p, d[4] = t, d[5] = n) : (t = d[4], n = d[5]), (0, o.useLayoutEffect)(t, n), d[6] !== f ? (l = () => () => {
                    f.set(i.c, null), f.set(i.e, null), f.set(i.g, !0)
                }, c = [f], d[6] = f, d[7] = l, d[8] = c) : (l = d[7], c = d[8]), (0, o.useLayoutEffect)(l, c), null
            }
        })
    })
};