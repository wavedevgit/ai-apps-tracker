export const __rspack_esm_ids = [539056];
export const __webpack_modules__ = {
    lKDl: (function(e, t) {
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
            a: () => z,
            ChatSeatAccessScreen: () => F
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
            C = n("twmu"),
            w = n("EOo5"),
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
            let t, n, l, c, d, u, p, v, y, k, R, B, F, L, z, D, G, H, W, q, K, U, V = (0, r.c)(70),
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
                } = (0, w.a)(),
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
                            (0, j.e)(Z), await (0, x.g)("accounts-check"), await Promise.all([Z.query.invalidate(C.b, $), Z.queryClient.invalidateQueries({
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
            return V[38] !== ec ? (F = ec ? (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.updateSeatButton",
                defaultMessage: "Update seat"
            }) : (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.requestAccessButton",
                defaultMessage: "Request access"
            }), V[38] = ec, V[39] = F) : F = V[39], V[40] !== eg || V[41] !== ef || V[42] !== F ? (L = (0, a.jsx)(h.a, {
                autoFocus: !0,
                className: "w-full",
                size: "auth",
                type: "submit",
                loading: eg,
                disabled: ef,
                children: F
            }), V[40] = eg, V[41] = ef, V[42] = F, V[43] = L) : L = V[43], V[44] !== eu || V[45] !== ed || V[46] !== X || V[47] !== J ? (z = () => {
                J ? (X(), J()) : (ed("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_BACK_TO_CODEX_CLICKED"), eu())
            }, V[44] = eu, V[45] = ed, V[46] = X, V[47] = J, V[48] = z) : z = V[48], V[49] !== J ? (D = J ? (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.chatWork.switchToWorkButton",
                defaultMessage: "Switch to Work"
            }) : (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.backToCodexButton",
                defaultMessage: "Back to Codex"
            }), V[49] = J, V[50] = D) : D = V[50], V[51] !== z || V[52] !== D ? (G = (0, a.jsx)(h.a, {
                className: "w-full",
                color: "outlineGhost",
                size: "auth",
                onClick: z,
                children: D
            }), V[51] = z, V[52] = D, V[53] = G) : G = V[53], V[54] !== L || V[55] !== G ? (H = (0, a.jsxs)("div", {
                className: "flex w-full max-w-xs flex-col gap-3",
                children: [L, G]
            }), V[54] = L, V[55] = G, V[56] = H) : H = V[56], V[57] !== ee || V[58] !== en ? (W = null != en && "requesting" !== en ? (0, a.jsx)("p", {
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
            }) : null, V[57] = ee, V[58] = en, V[59] = W) : W = V[59], V[60] !== B || V[61] !== H || V[62] !== W ? (q = (0, a.jsxs)("div", {
                className: "flex flex-col items-center gap-8 p-10 text-center",
                children: [B, H, W]
            }), V[60] = B, V[61] = H, V[62] = W, V[63] = q) : q = V[63], V[64] !== q || V[65] !== k ? (K = (0, a.jsx)(T.b, {
                as: "form",
                className: "select-none",
                size: "viewport",
                variant: "chatgpt",
                onSubmit: k,
                children: q
            }), V[64] = q, V[65] = k, V[66] = K) : K = V[66], V[67] !== K || V[68] !== y ? (U = (0, a.jsx)(I.a, {
                open: !0,
                size: "wide",
                variant: "chatgpt",
                onOpenChange: y,
                children: K
            }), V[67] = K, V[68] = y, V[69] = U) : U = V[69], U
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

        function F(e) {
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
            }) : void 0, s[0] = f, s[1] = c, s[2] = h, s[3] = g.status, s[4] = t) : t = s[4], s[5] !== i || s[6] !== v || s[7] !== t ? (n = (0, a.jsx)(L, {
                modeToggle: i,
                onSwitchToWork: t
            }, v), s[5] = i, s[6] = v, s[7] = t, s[8] = n) : n = s[8], n
        }

        function L(e) {
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

        function z(e) {
            let t, n, s = (0, r.c)(4),
                {
                    children: i,
                    enabled: l
                } = e;
            s[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                name: "chatgpt.seat-access"
            }, s[0] = t) : t = s[0];
            let d = (0, o.x)(c.a, t);
            return l ? d.isLoading ? null : (s[1] !== d.isCapable || s[2] !== i ? (n = d.isCapable ? (0, a.jsx)(F, {}) : i, s[1] = d.isCapable, s[2] = i, s[3] = n) : n = s[3], n) : i
        }
    }),
    fBor: (function(e, t, n) {
        n.d(t, {
            SitePreviewBridge: () => x
        });
        var a = n("ABep"),
            r = n("QosV"),
            o = n("BolX"),
            s = n("aFoA"),
            i = n("Bbed"),
            l = n("tSEg"),
            c = n("zd8w"),
            d = n("QcW8"),
            u = n("ZU27"),
            h = n("gbrq"),
            p = n("rxj0"),
            m = n("uk1V"),
            g = n("PIpC"),
            f = n("UejO");

        function v() {
            let e, t, a, i, v = (0, r.c)(6),
                b = (0, o.y)(l.a);
            return v[0] !== b ? (e = () => {
                let e = null;
                return b.watch(t => {
                    let a = t.get(g.c),
                        r = t.get(d.h),
                        o = t.get(f.b),
                        i = t.get(s.a, o?.hostId == null ? o?.conversationId ?? null : null),
                        l = t.get(h.h),
                        c = t.get(u.l.tabs$),
                        v = "chatgpt-thread" === t.value.routeKind && t.get(p.e, t.value.conversationId);
                    if (null == a || !r || v || e === a || (e = a, (0, f.a)(o, t.value, i, t.value.clientThreadId) || l || c.length > 0)) return;
                    let b = (0, g.a)(a);
                    if (!b?.isOpen) return;
                    let x = !1;
                    return Promise.resolve().then(n.bind(n, "SQbA")).then(e => {
                        let {
                            appgenProjectQuery$: n
                        } = e;
                        return x ? null : t.query.fetch(n, b.projectId)
                    }).then(e => {
                        let n = (0, g.a)(a);
                        x || null == e || !n?.isOpen || n.projectId !== b.projectId || "active" !== e.status || null == e.current_live_url || "chatgpt-thread" === t.value.routeKind && t.get(p.e, t.value.conversationId) || (0, m.a)(t, {
                            type: "appgen-app",
                            projectId: e.id,
                            title: e.title,
                            url: e.current_live_url
                        })
                    }, y), () => {
                        x = !0
                    }
                })
            }, t = [b], v[0] = b, v[1] = e, v[2] = t) : (e = v[1], t = v[2]), (0, c.useEffect)(e, t), v[3] !== b ? (a = () => {
                let e = b.get(h.i),
                    t = null;
                return b.watch(n => {
                    let a = n.get(h.i),
                        r = n.get(u.l.activeTab$),
                        o = n.get(g.c);
                    (a !== e || null == t && null != o) && null != o && r?.tabId.startsWith("site-preview:") && (0, g.b)(o, r.tabId.slice(13), a), e = a, t = o
                })
            }, i = [b], v[3] = b, v[4] = a, v[5] = i) : (a = v[4], i = v[5]), (0, c.useEffect)(a, i), null
        }

        function y() {}
        let b = (0, i.a)(async () => (await n.e(402037).then(n.bind(n, "U1Pf"))).OpenPendingSitePreview);

        function x() {
            let e, t, n, i, c = (0, r.c)(12),
                d = (0, o.y)(l.a),
                u = (0, o.z)(f.b),
                h = (0, o.x)(s.a, u?.hostId == null ? u?.conversationId ?? null : null);
            if ("home" !== d.value.routeKind && "chatgpt-thread" !== d.value.routeKind && "local-thread" !== d.value.routeKind) return null;
            c[0] !== u || c[1] !== h || c[2] !== d ? (e = u?.url != null && (0, f.a)(u, d.value, h, d.value.clientThreadId), c[0] = u, c[1] = h, c[2] = d, c[3] = e) : e = c[3];
            let p = e;
            return c[4] !== d ? (t = "home" !== d.value.routeKind ? (0, a.jsx)(v, {}) : null, c[4] = d, c[5] = t) : t = c[5], c[6] !== p || c[7] !== u ? (n = p ? (0, a.jsx)(b, {
                pending: u
            }) : null, c[6] = p, c[7] = u, c[8] = n) : n = c[8], c[9] !== t || c[10] !== n ? (i = (0, a.jsxs)(a.Fragment, {
                children: [t, n]
            }), c[9] = t, c[10] = n, c[11] = i) : i = c[11], i
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
                if (!n(l.d, "3901104270")) return [];
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
            BusinessAgentConversationHeader: () => F,
            BusinessAgentHomeHero: () => L
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
            C = n("mEbU"),
            w = n("RU3e"),
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
                c = (0, C.a)(l),
                d = (0, o.z)(w.b),
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
            let t, n, o, s, i, l, c, d, u, m, g, C, w, _, j, S, I, E = (0, r.c)(29),
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
            let F = t;
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
            }), E[14] = g) : g = E[14], E[15] === Symbol.for("react.memo_cache_sentinel") ? (C = (0, a.jsxs)("div", {
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
            }), E[15] = C) : C = E[15], E[16] !== F ? (w = null == F ? null : (0, a.jsx)(b.a, {
                href: F,
                initiator: "external_link",
                openTarget: "external-browser",
                children: (0, a.jsx)(p.a, {
                    id: "chatgptConversations.businessAgent.privacyPolicy",
                    defaultMessage: "Privacy policy"
                })
            }), E[16] = F, E[17] = w) : w = E[17], E[18] === Symbol.for("react.memo_cache_sentinel") ? (_ = (0, a.jsx)("div", {
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
            }), E[18] = _) : _ = E[18], E[19] !== w ? (j = (0, a.jsxs)("div", {
                className: "flex flex-col gap-4 pb-10 select-none",
                children: [i, (0, a.jsxs)("div", {
                    className: "flex flex-col gap-6 px-8",
                    children: [C, w, _]
                })]
            }), E[19] = w, E[20] = j) : j = E[20], E[21] !== j || E[22] !== s ? (S = (0, a.jsx)(y.b, {
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

        function F(e) {
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

        function L(e) {
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
            }) : m, h[7] = m, h[8] = g, h[9] = v, h[10] = t) : t = h[10], h[11] !== p || h[12] !== v.context || h[13] !== v.status ? (n = "ready" === v.status ? (0, a.jsx)(z, {
                context: v.context,
                conversationId: p
            }, v.context.interactionId) : null, h[11] = p, h[12] = v.context, h[13] = v.status, h[14] = n) : n = h[14], h[15] !== t || h[16] !== n ? (d = (0, a.jsxs)(a.Fragment, {
                children: [t, n]
            }), h[15] = t, h[16] = n, h[17] = d) : d = h[17], d)
        }

        function z(e) {
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
                    conversationId: C,
                    error: w,
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
            x[0] !== C || x[1] !== S || x[2] !== P ? (t = (e, t) => {
                (0, f.e)(P.get(m.c).logProductEvent, {
                    conversationId: C,
                    error: e,
                    isWorkConversation: S,
                    canRetry: t
                })
            }, x[0] = C, x[1] = S, x[2] = P, x[3] = t) : t = x[3];
            let M = t;
            x[4] !== j || x[5] !== _ || x[6] !== M ? (n = () => M(_, j), x[4] = j, x[5] = _, x[6] = M, x[7] = n) : n = x[7], x[8] !== _ || x[9] !== T || x[10] !== n ? (s = (0, a.jsx)(b, {
                error: _,
                onInlineLoadError: T,
                onShown: n
            }), x[8] = _, x[9] = T, x[10] = n, x[11] = s) : s = x[11], x[12] !== E || x[13] !== s ? (l = (0, a.jsxs)(a.Fragment, {
                children: [s, E]
            }), x[12] = E, x[13] = s, x[14] = l) : l = x[14];
            let k = l;
            return x[15] !== w ? (c = w instanceof g.FetchError && !(0, g.e)(w) && (403 === w.status || 404 === w.status), x[15] = w, x[16] = c) : c = x[16], x[17] !== w || x[18] !== M ? (d = () => M(w, !1), x[17] = w, x[18] = M, x[19] = d) : d = x[19], x[20] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, a.jsx)(i.a, {
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
                    C = (0, o.a)();
                return y[0] !== b || y[1] !== C || y[2] !== x ? (t = () => {
                    (0, h.c)(x, b).catch(() => {
                        x.get(i.f).danger(C.formatMessage(u.a.markUnreadError), {
                            errorAnalytics: {
                                toastId: "chatgptConversations.sidebar.markUnreadError"
                            }
                        })
                    })
                }, y[0] = b, y[1] = C, y[2] = x, y[3] = t) : t = y[3], (0, s.a)("markThreadUnread", t), y[4] !== b || y[5] !== x ? (n = () => void(0, d.renameActiveChatGptConversation)(x, b), p = [b, x], y[4] = b, y[5] = x, y[6] = n, y[7] = p) : (n = y[6], p = y[7]), (0, l.d)("rename-thread", n, p), y[8] !== b || y[9] !== x ? (m = () => (0, d.d)(x, b), g = [b, x], y[8] = b, y[9] = x, y[10] = m, y[11] = g) : (m = y[10], g = y[11]), (0, l.d)("toggle-thread-pin", m, g), y[12] !== b || y[13] !== x ? (f = () => (0, d.a)(x, b), v = [b, x], y[12] = b, y[13] = x, y[14] = f, y[15] = v) : (f = y[14], v = y[15]), (0, l.d)("archive-thread", f, v), null
            }
        })
    }),
    eFZ7: (function(e, t, n) {
        n.d(t, {
            a: () => iS,
            ChatGptConversationPage: () => ij
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
            C = n("E8Sp"),
            w = n("z0li"),
            _ = n("Ouov"),
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
        var F = n("MrzV"),
            L = n("YTsa"),
            z = n("TSib"),
            D = n("jEN2"),
            G = n("kphc"),
            H = n("YWcr"),
            W = n("mwa5"),
            q = n("UxN3"),
            K = n("SGsN"),
            U = n("XcNx"),
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
            eC = n("sfmI"),
            ew = n("QmkR"),
            e_ = n("Yrvy"),
            ej = n("HOLv"),
            eS = n("nlNF"),
            eI = n("OWtl"),
            eT = n("MRlq"),
            eE = n("vNLk"),
            eP = n("PCxL"),
            eA = n("aZgH"),
            eM = n("CzoK");

        function ek(e) {
            let t, n, o, s, i, l, d, u, h, p, v, y, b, x, C = (0, r.c)(56),
                {
                    conversationId: w,
                    kind: _
                } = e,
                j = (0, c.y)(eI.a),
                I = (0, g.a)(),
                T = (0, f.Y)(),
                E = (0, f._)(),
                P = (0, c.z)(eP.l),
                A = (0, c.z)(S.h),
                M = (0, c.z)(S.g);
            C[0] !== A || C[1] !== w || C[2] !== M || C[3] !== _ || C[4] !== P ? (t = "chatgpt" === _ && P?.kind === "chatgpt" && P.conversation.id === w && (0, eC.a)(P.conversation, A, M) ? P.conversation : null, C[0] = A, C[1] = w, C[2] = M, C[3] = _, C[4] = P, C[5] = t) : t = C[5];
            let k = t,
                [R, N] = (0, m.useState)(!1),
                {
                    mutate: O,
                    isPending: B
                } = (0, e_.a)(w);
            C[6] !== T.hash || C[7] !== T.pathname || C[8] !== T.search || C[9] !== E || C[10] !== j ? (n = () => {
                (0, eP.e)(j), E({
                    pathname: T.pathname,
                    search: T.search,
                    hash: T.hash
                }, {
                    replace: !0,
                    state: null
                })
            }, C[6] = T.hash, C[7] = T.pathname, C[8] = T.search, C[9] = E, C[10] = j, C[11] = n) : n = C[11];
            let F = n,
                L = (0, c.z)(eP.k);
            C[12] !== w || C[13] !== L ? (o = L?.find(e => (0, eA.a)(e.task) === `hosted:${w}`), C[12] = w, C[13] = L, C[14] = o) : o = C[14];
            let z = o;
            C[15] !== w || C[16] !== j ? (s = () => {
                let e = j.get(eP.l);
                return null != e && (0, eA.a)(e) === `hosted:${w}` ? (0, eP.d)(j, e) : void 0
            }, i = async () => {
                await (0, ew.V)({
                    scope: j,
                    conversationId: w
                })
            }, C[15] = w, C[16] = j, C[17] = s, C[18] = i) : (s = C[17], i = C[18]), C[19] !== w || C[20] !== F || C[21] !== _ || C[22] !== j ? (l = (e, t, n) => {
                n?.("restored");
                let r = j.get(K.f).info((0, a.jsx)(ey.a, {
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
                            r.close(), F()
                        }
                    },
                    id: `unarchive-thread-${_}:${w}`
                })
            }, C[19] = w, C[20] = F, C[21] = _, C[22] = j, C[23] = l) : l = C[23], C[24] !== I || C[25] !== j ? (d = (e, t, n) => {
                n?.(null), j.get(K.f).danger(I.formatMessage(eT.a.unarchiveError), {
                    errorAnalytics: {
                        toastId: "previewFooter.onError.unarchiveError"
                    }
                })
            }, C[24] = I, C[25] = j, C[26] = d) : d = C[26], C[27] !== s || C[28] !== i || C[29] !== l || C[30] !== d ? (u = {
                onMutate: s,
                mutationFn: i,
                onSuccess: l,
                onError: d
            }, C[27] = s, C[28] = i, C[29] = l, C[30] = d, C[31] = u) : u = C[31];
            let {
                mutate: D,
                isPending: G,
                isSuccess: H
            } = (0, ev.a)(u);
            C[32] !== O || C[33] !== E || C[34] !== j ? (h = e => {
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
            }, C[32] = O, C[33] = E, C[34] = j, C[35] = h) : h = C[35];
            let W = h;
            C[36] !== k ? (p = null == k ? void 0 : () => N(!0), C[36] = k, C[37] = p) : p = C[37];
            let q = H || z?.status === "restored",
                U = G || z?.status === "restoring";
            return C[38] !== D ? (v = () => D(), C[38] = D, C[39] = v) : v = C[39], C[40] !== F || C[41] !== B || C[42] !== p || C[43] !== q || C[44] !== U || C[45] !== v ? (y = (0, a.jsx)(eE.a, {
                deleting: B,
                onDelete: p,
                restored: q,
                restoring: U,
                onUnarchive: v,
                onDone: F
            }), C[40] = F, C[41] = B, C[42] = p, C[43] = q, C[44] = U, C[45] = v, C[46] = y) : y = C[46], C[47] !== k || C[48] !== W || C[49] !== I || C[50] !== R || C[51] !== B ? (b = null != k && (0, a.jsx)(eb.a, {
                allowArtifactDeletion: !0,
                title: k.title?.trim() || I.formatMessage(ex.a.newChat),
                open: R,
                isDeleting: B,
                onOpenChange: N,
                onConfirm: W
            }), C[47] = k, C[48] = W, C[49] = I, C[50] = R, C[51] = B, C[52] = b) : b = C[52], C[53] !== y || C[54] !== b ? (x = (0, a.jsxs)(a.Fragment, {
                children: [y, b]
            }), C[53] = y, C[54] = b, C[55] = x) : x = C[55], x
        }
        var eR = n("hZax"),
            eN = n("OMIV"),
            eO = n("JCJj"),
            eB = n("KkZX"),
            eF = n("BdYu"),
            eL = n("Nyub"),
            ez = n("rvFo"),
            eD = n("jZDY"),
            eG = n("Bc5r"),
            eH = n("bIvi"),
            eW = n("Elta"),
            eq = n("eW0T"),
            eK = n("hOYb"),
            eU = n("eShZ"),
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
            tC = n("aLqR"),
            tw = n("VlIB"),
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
            tR = n("Sm6l"),
            tN = n("bf6R"),
            tO = n("Bbed"),
            tB = n("O666"),
            tF = n("tNq4"),
            tL = n("Skaw"),
            tz = n("PYCG");

        function tD(e) {
            let t, n, o, s, i, l, d, u, h, p, m = (0, r.c)(48),
                {
                    conversationId: f,
                    projectId: v,
                    sharedProjectConversation: y,
                    isReady: b,
                    isRestricted: x,
                    isStreaming: C
                } = e,
                w = void 0 === v ? null : v,
                _ = (0, c.y)(eI.a),
                j = (0, g.a)(),
                I = (0, c.z)(S.e),
                T = (0, c.z)(null == w ? null : tL.a),
                E = (0, c.x)(tm.j, f),
                {
                    data: P
                } = (0, c.x)(tP.chatGptConversationQueryById$, null == w ? null : E),
                A = (0, c.x)(th.a, null == w ? null : E),
                M = (0, c.x)(tm.B, A);
            m[0] !== A || m[1] !== P || m[2] !== M || m[3] !== w || m[4] !== E ? (t = null == P && null != A && null != E ? {
                id: E,
                gizmo_id: w,
                is_temporary_chat: M
            } : void 0, m[0] = A, m[1] = P, m[2] = M, m[3] = w, m[4] = E, m[5] = t) : t = m[5];
            let k = t,
                {
                    data: R
                } = (0, c.x)(N.b, w),
                O = null == w ? null : (0, tL.b)(T ?? null, y ?? P ?? k, R),
                B = (0, c.x)(tF.b, f);
            m[6] !== j ? (n = j.formatMessage(ex.a.headerShare), m[6] = j, m[7] = n) : n = m[7];
            let F = n,
                L = (0, c.x)(null == y ? tF.a : null, f),
                z = null != y || null != L,
                D = null;
            if (x || O?.type === "unavailable") {
                let e;
                m[8] !== j ? (e = j.formatMessage(ex.a.shareDisabledRestricted), m[8] = j, m[9] = e) : e = m[9], D = e
            } else if (C && !z) {
                let e;
                m[10] !== j ? (e = j.formatMessage(ex.a.shareDisabledStreaming), m[10] = j, m[11] = e) : e = m[11], D = e
            } else if (!b || !z) {
                let e;
                m[12] !== j ? (e = j.formatMessage(ex.a.shareDisabledNotReady), m[12] = j, m[13] = e) : e = m[13], D = e
            }
            let G = null != D || B;
            m[14] !== G ? (o = {
                layer: "3087497570",
                parameter: "use_larger_icon",
                disableExposureLog: G
            }, m[14] = G, m[15] = o) : o = m[15];
            let H = (0, c.x)(tB.b, o),
                W = "loaded" === I.status && "personal" === I.structure && (null == O || "snapshot" === O.type),
                q = null != D || B;
            m[16] !== q ? (s = {
                layer: "1823366130",
                parameter: "disable_hover",
                disableExposureLog: q
            }, m[16] = q, m[17] = s) : s = m[17];
            let K = (0, c.x)(W ? tB.b : null, s);
            m[18] !== f || m[19] !== k || m[20] !== w || m[21] !== _ || m[22] !== y ? (i = () => {
                let e = null == y ? _.get(tF.c, f) : {
                    serverConversationId: y.conversation_id,
                    title: y.title,
                    currentNodeId: y.current_node ?? void 0
                };
                null != e && (0, tz.shareChatGptProjectConversation)(_, e.serverConversationId, e.title ?? "", w, e.currentNodeId, "CHATGPT_SHARE_FLOW_SOURCE_SENDER_HEADER", y ?? k)
            }, m[18] = f, m[19] = k, m[20] = w, m[21] = _, m[22] = y, m[23] = i) : i = m[23];
            let U = i,
                V = F;
            if (!K && "loaded" === I.status && (null == O || "snapshot" === O.type)) {
                let e;
                m[24] !== I.structure || m[25] !== j ? (e = j.formatMessage("workspace" === I.structure ? ex.a.shareWorkspaceTooltip : ex.a.sharePublicTooltip), m[24] = I.structure, m[25] = j, m[26] = e) : e = m[26], V = e
            }
            let Q = D ?? V,
                $ = null != D || void 0,
                Y = null == D ? U : void 0;
            return m[27] !== B || m[28] !== H ? (l = !B && (H ? (0, a.jsx)(tN.M, {}) : (0, a.jsx)(tN.L, {})), m[27] = B, m[28] = H, m[29] = l) : l = m[29], m[30] !== B || m[31] !== F || m[32] !== $ || m[33] !== Y || m[34] !== l ? (d = (0, a.jsx)(tR.a, {
                "aria-disabled": $,
                "aria-label": F,
                color: "ghostActive",
                loading: B,
                className: "browser:[&_[data-loading-indicator]>svg]:size-6",
                radius: "large",
                size: "toolbar",
                uniform: !0,
                onClick: Y,
                children: l
            }), m[30] = B, m[31] = F, m[32] = $, m[33] = Y, m[34] = l, m[35] = d) : d = m[35], m[36] !== d || m[37] !== Q ? (u = (0, a.jsx)(tk.a, {
                content: Q,
                children: d
            }), m[36] = d, m[37] = Q, m[38] = u) : u = m[38], m[39] !== f || m[40] !== B || m[41] !== w || m[42] !== D || m[43] !== y ? (h = !1, m[39] = f, m[40] = B, m[41] = w, m[42] = D, m[43] = y, m[44] = h) : h = m[44], m[45] !== u || m[46] !== h ? (p = (0, a.jsxs)(a.Fragment, {
                children: [u, h]
            }), m[45] = u, m[46] = h, m[47] = p) : p = m[47], p
        }(0, tO.a)(async () => () => null);
        var tG = n("TRQ3"),
            tH = n("SZCv"),
            tW = n.n(tH),
            tq = n("XAP6"),
            tK = n("bzoy"),
            tU = n("LYS1"),
            tV = n("aZoZ"),
            tQ = n("Gv8v"),
            t$ = n("EGpF"),
            tY = n("mTPq"),
            tX = n("Vcrm"),
            tJ = n("DF0c");
        let tZ = (0, c.d)(eI.a, (e, t) => {
            let {
                get: n
            } = t, a = n(tm.ab, e);
            if (!(0, tm.Bb)(a)) return !0;
            let r = n(tm.N, e),
                o = n(tm.C, e);
            if (null == r || null == o) return !1;
            let s = r[o]?.message;
            if (null == s || tU.a.has(s.author.role)) return !1;
            let i = n(tm.y, e),
                l = (0, tY.c)({
                    mapping: r,
                    current_node: o
                }, n(tm.S, e)),
                c = n(tm.db, e);
            return "streaming" === a && "tpp" !== i && "flora" !== i && null != n(tm.j, e) && !(0, tK.e)(n(tm.p, e)) && null != c && !n(tq.e).has(c) && null != t0(n, e).request.current && (null == l || l.info.num_variants_in_stream <= 1)
        });

        function t0(e, t) {
            let n = e(t$.a, t),
                a = e(tm.j, t);
            return null == n.request.current && null != a ? e(t$.a, a) : n
        }
        var t1 = n("xtkq"),
            t2 = n("ZhoB"),
            t3 = n("PG5R"),
            t4 = n("zrki"),
            t5 = n("iLYI"),
            t6 = n("u4MG"),
            t7 = n("wVX4"),
            t8 = n("OOaz"),
            t9 = n("n5iL"),
            ne = n("EFj1"),
            nt = n("iS3k"),
            nn = n("pDUk"),
            na = n("GaCK"),
            nr = n("Dofq"),
            no = n("VnEZ");
        let ns = (0, tO.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(186197)]).then(n.bind(n, "BhAA"))).ChatGptThreadSummaryPanelBody, {
            fallback: (0, a.jsx)(nt.a.Content, {
                children: (0, a.jsx)("div", {
                    className: "flex flex-col gap-0.5 px-5",
                    children: (0, a.jsx)("span", {
                        className: "select-none",
                        role: "status",
                        children: (0, a.jsx)(ey.a, {
                            id: "chatgptConversations.summaryPanel.loading",
                            defaultMessage: "Loading summary…"
                        })
                    })
                })
            }),
            errorFallback: (0, a.jsx)(nt.a.Content, {
                children: (0, a.jsx)("div", {
                    className: "flex flex-col gap-0.5 px-5",
                    children: (0, a.jsx)("span", {
                        className: "select-none",
                        role: "status",
                        children: (0, a.jsx)(ey.a, {
                            id: "chatgptConversations.summaryPanel.loadError",
                            defaultMessage: "Summary could not load. Reload the app to try again"
                        })
                    })
                })
            })
        });

        function ni(e) {
            let t, n, o, s = (0, r.c)(6);
            s[0] !== e ? ({
                readData: n,
                ...t
            } = e, s[0] = e, s[1] = t, s[2] = n) : (t = s[1], n = s[2]);
            let i = (0, nt.b)(),
                [l, c] = (0, m.useState)(null);
            return i && l?.readData !== n && c({
                readData: n,
                data: n()
            }), s[3] !== l || s[4] !== t ? (o = null == l ? null : (0, a.jsx)(ns, {
                ...t,
                data: l.data
            }), s[3] = l, s[4] = t, s[5] = o) : o = s[5], o
        }

        function nl(e) {
            let t, n, o, s = (0, r.c)(15),
                {
                    conversationId: i,
                    composerActions: l,
                    readData: d,
                    display: u,
                    shouldBlockExternalEgress: h,
                    showSources: p
                } = e,
                m = void 0 === p || p,
                g = (0, c.y)(ep.a),
                f = (0, eR.f)("2903661647"),
                v = f ? "dynamic-isle" : "summary";
            return s[0] !== g || s[1] !== v ? (t = {
                scope: g,
                layout: v
            }, s[0] = g, s[1] = v, s[2] = t) : t = s[2], s[3] !== l || s[4] !== i || s[5] !== f || s[6] !== d || s[7] !== h || s[8] !== m ? (n = (0, a.jsx)(ni, {
                conversationId: i,
                composerActions: l,
                readData: d,
                isUnifiedDynamicIsleEnabled: f,
                showSources: m,
                shouldBlockExternalEgress: h
            }, i), s[3] = l, s[4] = i, s[5] = f, s[6] = d, s[7] = h, s[8] = m, s[9] = n) : n = s[9], s[10] !== u.shouldHideInlineImmediately || s[11] !== u.shouldShow || s[12] !== t || s[13] !== n ? (o = (0, a.jsx)(nt.a.Root, {
                analytics: t,
                shouldHideInlineImmediately: u.shouldHideInlineImmediately,
                shouldShow: u.shouldShow,
                children: n
            }), s[10] = u.shouldHideInlineImmediately, s[11] = u.shouldShow, s[12] = t, s[13] = n, s[14] = o) : o = s[14], o
        }

        function nc(e) {
            let t, n, o, s = (0, r.c)(22),
                {
                    conversationId: i,
                    composerActions: l,
                    controlledState: d,
                    readData: u,
                    shouldBlockExternalEgress: h,
                    showSources: p
                } = e,
                f = void 0 === p || p,
                v = (0, c.y)(ep.a),
                y = (0, m.useContext)(no.a),
                b = (0, g.a)(),
                x = (0, eR.f)("2903661647"),
                C = (0, c.z)(null == d ? e3.M : null);
            s[0] !== d?.isOpen || s[1] !== C ? (t = d?.isOpen ?? (0, e3.y)(C, !0), s[0] = d?.isOpen, s[1] = C, s[2] = t) : t = s[2];
            let w = t,
                j = (0, c.z)(na.b),
                S = d?.isOpen ?? j.isPopoverOpen,
                I = (0, c.x)(t9.f, "togglePinnedSummary");
            (0, eF.b)(v), s[3] !== d || s[4] !== v ? (n = () => {
                null != d ? d.onOpenChange(!d.isOpen) : (0, nr.b)(v)
            }, s[3] = d, s[4] = v, s[5] = n) : n = s[5];
            let T = n;
            return (0, ne.a)("togglePinnedSummary", T), s[6] !== l || s[7] !== y || s[8] !== d || s[9] !== i || s[10] !== b || s[11] !== w || s[12] !== S || s[13] !== x || s[14] !== j.displayMode || s[15] !== u || s[16] !== v || s[17] !== I || s[18] !== h || s[19] !== f || s[20] !== T ? (o = (0, a.jsx)(_.a.HeaderAction, {
                actionId: "chatgpt-thread-summary-panel-toggle",
                align: "end",
                order: 250,
                children: "overlay" === j.displayMode ? (0, a.jsx)(nn.a, {
                    isOpen: S,
                    shouldPreventAutoFocus: d?.shouldPreventAutoFocus,
                    onOpenChange: e => {
                        null != d ? d.onOpenChange(e) : v.set(na.b, t => "overlay" !== t.displayMode || t.isPopoverOpen === e ? t : {
                            ...t,
                            isPopoverOpen: e
                        })
                    },
                    trigger: (0, a.jsx)(nt.a.HeaderButton, {
                        analytics: {
                            scope: v
                        },
                        label: b.formatMessage({
                            id: "chatgptConversations.summaryPanel.toggle",
                            defaultMessage: "Toggle summary"
                        }),
                        pressed: S,
                        shortcut: I
                    }),
                    children: null != u ? (0, a.jsx)(no.a, {
                        value: y,
                        children: (0, a.jsx)(nt.a.PopoverContent, {
                            analytics: {
                                scope: v,
                                layout: x ? "dynamic-isle" : "summary"
                            },
                            children: (0, a.jsx)(ni, {
                                conversationId: i,
                                composerActions: l,
                                readData: u,
                                isUnifiedDynamicIsleEnabled: x,
                                showSources: f,
                                shouldBlockExternalEgress: h
                            }, i)
                        })
                    }) : null
                }) : (0, a.jsx)(nt.a.HeaderButton, {
                    analytics: {
                        scope: v
                    },
                    label: b.formatMessage({
                        id: "chatgptConversations.summaryPanel.togglePinned",
                        defaultMessage: "Toggle pinned summary"
                    }),
                    pressed: w,
                    shortcut: I,
                    onClick: T
                })
            }), s[6] = l, s[7] = y, s[8] = d, s[9] = i, s[10] = b, s[11] = w, s[12] = S, s[13] = x, s[14] = j.displayMode, s[15] = u, s[16] = v, s[17] = I, s[18] = h, s[19] = f, s[20] = T, s[21] = o) : o = s[21], o
        }
        var nd = n("JjRy"),
            nu = n.n(nd),
            nh = n("G4E3"),
            np = n("KaH3"),
            nm = n("Yz3b"),
            ng = n("ghNX"),
            nf = n("KvVi"),
            nv = n("m250"),
            ny = n("Ng4B"),
            nb = n("bTKb"),
            nx = n("dGDB"),
            nC = n("lIsV");

        function nw(e) {
            return e.flatMap(e => "chatgpt-reasoning-group" === e.type ? e.items : [e])
        }
        var n_ = n("MM0V");

        function nj(e) {
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
            }), l[3] = o) : o = l[3], l[4] !== u || l[5] !== h || l[6] !== p ? (s = (0, a.jsx)(tR.a, {
                color: "primary",
                disabled: p,
                loading: u,
                onClick: h,
                children: o
            }), l[4] = u, l[5] = h, l[6] = p, l[7] = s) : s = l[7], l[8] !== n || l[9] !== s ? (i = (0, a.jsx)("div", {
                className: "mx-auto mb-3 w-full max-w-[var(--thread-content-max-width)]",
                children: (0, a.jsx)(n_.a, {
                    ariaLive: "polite",
                    title: t,
                    content: n,
                    customCtas: s
                })
            }), l[8] = n, l[9] = s, l[10] = i) : i = l[10], i
        }
        var nS = n("oGhM"),
            nI = n("fr5e"),
            nT = n("LEgg");
        let nE = (0, tO.a)(() => n.e(766350).then(n.bind(n, "wWAQ")).then(e => e.ScheduledGoalNavigationBridge));

        function nP(e) {
            let t, n, o = (0, r.c)(6),
                {
                    conversationId: s,
                    scheduledAutomationId: i
                } = e,
                l = (0, eR.f)("3901104270");
            return o[0] !== s || o[1] !== l || o[2] !== i ? (t = l && null != i ? (0, a.jsx)(nE, {
                conversationId: s,
                automationId: i
            }) : null, o[0] = s, o[1] = l, o[2] = i, o[3] = t) : t = o[3], o[4] !== t ? (n = (0, a.jsx)(a.Fragment, {
                children: t
            }), o[4] = t, o[5] = n) : n = o[5], n
        }
        var nA = n("Bs4i"),
            nM = n("Qgfj"),
            nk = n("rmk3"),
            nR = n("sqqv"),
            nN = n("fQbA"),
            nO = n("dDDU"),
            nB = n("soaw"),
            nF = n("ZrYB"),
            nL = n("X6Vn"),
            nz = n("Kwur"),
            nD = n("eKlv"),
            nG = n("JCtZ"),
            nH = n("g2p6"),
            nW = n("oaTv"),
            nq = n("PME0"),
            nK = n("lgcP"),
            nU = n("AcSY"),
            nV = n("w7E5"),
            nQ = n("xEXG"),
            n$ = n("J6LI"),
            nY = n("lUUH"),
            nX = n("ftAl");

        function nJ(e) {
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
                } = (0, nU.d)(),
                v = (0, nQ.b)();
            return s[0] !== f || s[1] !== l || s[2] !== d || s[3] !== u || s[4] !== h || s[5] !== v || s[6] !== g ? (t = () => {
                let e = g.get(nX.a, l, {
                        enabled: !1
                    }),
                    t = (0, t6.a)(e?.gizmo_id) ? e?.gizmo_id ?? null : null,
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
                    } = e, c = (0, t6.a)(a?.gizmo_id) ? a?.gizmo_id ?? null : null, d = t.get(nV.a), u = t.get(ew.m), {
                        data: h
                    } = d, p = h?.pages.flatMap(e => e.items).length ?? 0, m = a?.conversation_origin === "tpp" || a?.conversation_origin === "flora", g = "allowed" === s || m && h?.pages.some(e => null != e.cursor) === !0, f = t.get(ew.h, n);
                    return null == o || null == a || t.get(ew.g, n) || (0, n$.c)(a, r).sourceUnavailable || null == (0, n$.b)(t, a, f, !1) || null != c && null == r || null == h || 0 === p && !g ? [] : [...null == r ? [] : [{
                        id: "current-project-name",
                        message: n2.projectName,
                        messageValues: {
                            projectName: r.gizmo.display.name
                        },
                        enabled: !1
                    }], ...(0, nY.b)({
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
                    null == e.data && e.isFetching && await g.query.getOrFetch(tP.chatGptConversationQueryById$, l).catch(n1), null == g.query.getData(tP.chatGptConversationQueryById$, l) && await g.query.getOrFetch(ew.j, [l]).catch(n0)
                })(), p?.()]);
                let e = g.get(nX.a, l, {
                    enabled: !1
                });
                (0, t6.a)(e?.gizmo_id) && e?.gizmo_id != null && await g.query.getOrFetch(N.b, e.gizmo_id).catch(nZ)
            }, s[8] = l, s[9] = p, s[10] = g, s[11] = n) : n = s[11], s[12] !== i || s[13] !== m || s[14] !== t || s[15] !== n ? (o = (0, a.jsx)(nk.a, {
                preserveBrowserContextMenu: !0,
                awaitBeforeOpen: !1,
                getItems: t,
                onBeforeOpen: n,
                renderItem: nN.b,
                renderDropdown: m,
                trigger: "click",
                children: i
            }), s[12] = i, s[13] = m, s[14] = t, s[15] = n, s[16] = o) : o = s[16], o
        }

        function nZ() {}

        function n0() {}

        function n1() {}
        let n2 = (0, nM.f)({
            projectName: {
                id: "chatgptConversations.projectActions.projectName",
                defaultMessage: "{projectName}"
            }
        });

        function n3(e) {
            let t, o, s, i, l, d, u, h, p, v, y, b, w, _, j, I, T, E = (0, r.c)(68),
                {
                    onTitleClick: P,
                    showMenu: A,
                    triggerButton: M,
                    renderDropdown: k,
                    conversationOrigin: R,
                    conversationId: N,
                    title: O,
                    isHandoffPending: B,
                    isArchived: F,
                    isChatConversation: L,
                    onHandoff: z,
                    onOpenMessage: D,
                    projectId: G,
                    projectName: H,
                    serverConversationId: W
                } = e,
                q = (0, c.y)(ep.a),
                U = (0, c.y)(eI.a),
                V = (0, nB.a)(),
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
            } = (0, c.z)(nH.p, s), Z = X && J?.fileLibraryEnabledForRegistrationCountry !== !1, ee = (0, g.a)(), et = (0, f._)(), [en, ea] = (0, m.useState)(null), er = (0, m.useRef)(null), eo = (0, m.useRef)(null);
            E[6] === Symbol.for("react.memo_cache_sentinel") ? (i = [], E[6] = i) : i = E[6];
            let es = (0, m.useRef)(i);
            E[7] === Symbol.for("react.memo_cache_sentinel") ? (l = {
                name: "chatgpt"
            }, E[7] = l) : l = E[7];
            let {
                isCapable: ei
            } = (0, c.x)(x.a, l), el = (0, c.x)(ew.g, W);
            E[8] === Symbol.for("react.memo_cache_sentinel") ? (d = () => ea("shortcut"), E[8] = d) : d = E[8];
            let ec = L && !el;
            E[9] !== q || E[10] !== W ? (u = () => (0, eC.a)(q.query.getData(tP.chatGptConversationQueryById$, W), q.get(S.h), q.get(S.g)), E[9] = q, E[10] = W, E[11] = u) : u = E[11], E[12] !== ec || E[13] !== u ? (h = {
                enabled: ec,
                isActive: u
            }, E[12] = ec, E[13] = u, E[14] = h) : h = E[14], (0, ne.a)("deleteChat", d, h), E[15] !== U || E[16] !== el || E[17] !== et || E[18] !== q || E[19] !== W ? (p = e => {
                !el && (0, eC.a)(q.query.getData(tP.chatGptConversationQueryById$, W), q.get(S.h), q.get(S.g)) && (ea(null), (0, nK.a)(U, W, e), et("/", {
                    replace: !0,
                    state: {
                        leavingDeletedChatGptConversation: !0
                    }
                }))
            }, E[15] = U, E[16] = el, E[17] = et, E[18] = q, E[19] = W, E[20] = p) : p = E[20];
            let ed = p;
            E[21] !== q || E[22] !== W ? (v = async () => {
                let e = [];
                es.current = e, e.push(...await async function(e, t) {
                    let a = await nz.Request.safeGet("/live/conversations/{conversation_id}/session-sharing", {
                        parameters: {
                            path: {
                                conversation_id: t
                            }
                        }
                    }).catch(() => null);
                    return a?.can_share && 0 !== a.av_sessions.length ? [{
                        id: "share-live-session",
                        icon: tN.ij,
                        message: (0, nM.e)({
                            id: "chatgptConversations.liveSessionSharing.action",
                            defaultMessage: "Share Live session"
                        }),
                        selectAfterClose: !0,
                        onSelect: () => {
                            n.e(571376).then(n.bind(n, "ATrx")).then(n => {
                                let {
                                    BidiSessionSharingDialog: r
                                } = n;
                                (0, nL.f)(e, r, {
                                    conversationId: t,
                                    sessions: a.av_sessions
                                })
                            })
                        }
                    }] : []
                }(q, W))
            }, E[21] = q, E[22] = W, E[23] = v) : v = E[23];
            let eu = v;
            E[24] !== N || E[25] !== R || E[26] !== Z || E[27] !== ee || E[28] !== el || E[29] !== F || E[30] !== B || E[31] !== V || E[32] !== et || E[33] !== z || E[34] !== D || E[35] !== G || E[36] !== H || E[37] !== q || E[38] !== W || E[39] !== Q || E[40] !== O ? (y = e => {
                let t = q.get(S.f),
                    a = q.get(S.k),
                    r = q.query.getData(tP.chatGptConversationQueryById$, W),
                    o = q.get(S.h),
                    s = q.get(S.g),
                    i = (0, eC.a)(r, o, s),
                    l = (0, nD.b)(q, W),
                    c = !el && (0, eC.a)(l, o, s),
                    d = q.get(C.b).pathname,
                    u = () => V() && d === q.get(C.b).pathname && t === q.get(S.f) && a === q.get(S.k),
                    h = (0, nW.a)(q, N, R, () => (0, nq.a)(et)),
                    p = [];
                return Q.getLayer("3732549458").get("enable_conversation_audio_summary", !1) && p.push({
                    id: "chatgpt-audio-summary",
                    message: (0, nM.e)({
                        id: "GizmoInformation.audioSummary",
                        defaultMessage: "Audio summary"
                    }),
                    icon: tN.yg,
                    selectAfterClose: !0,
                    onSelect: () => {
                        (async function() {
                            return (await n.e(600460).then(n.bind(n, "EEPj"))).openAudioSummaryDialog
                        })().then(e => {
                            u() && e(q, W)
                        }).catch(() => {
                            u() && (er.current?.focus({
                                preventScroll: !0
                            }), q.get(K.f).danger(ee.formatMessage({
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
                    message: (0, nM.e)({
                        id: "GizmoInformation.viewFiles",
                        defaultMessage: "View files in chat"
                    }),
                    icon: tN.sb,
                    onSelect: () => {
                        (async function() {
                            return (await n.e(368308).then(n.bind(n, "LFUX"))).openConversationFiles
                        })().then(e => {
                            u() && e(q, {
                                conversationId: N,
                                serverConversationId: W,
                                onOpenMessage: D
                            })
                        }).catch(() => {
                            u() && q.get(K.f).danger(ee.formatMessage({
                                id: "chatgptConversations.files.loadPanelError",
                                defaultMessage: "Couldn’t open files in chat"
                            }), {
                                errorAnalytics: {
                                    toastId: "chatgptConversations.files.loadPanelError"
                                }
                            })
                        })
                    }
                }), p.push(...(0, nO.a)(q)), (0, nG.a)(q, {
                    organizationItems: (0, nN.a)([]),
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
                    canHandoff: null != z,
                    onHandoff: z,
                    projectId: G,
                    projectName: H,
                    onRename: (0, eC.b)(r, o, s, el) ? () => void(0, nD.renameActiveChatGptConversation)(q, N) : void 0,
                    isPinned: q.get(ew.h, W) ?? l?.is_starred === !0,
                    onTogglePin: c ? () => {
                        let e = (0, nD.b)(q, W);
                        !(null == e || q.get(ew.g, W)) && (0, eC.a)(e, q.get(S.h), q.get(S.g)) && (0, ew.U)({
                            scope: q,
                            conversation: "conversation_id" in e ? {
                                gizmo_id: e.gizmo_id,
                                id: e.conversation_id,
                                is_archived: e.is_archived,
                                is_starred: e.is_starred,
                                title: e.title
                            } : e
                        }).catch(n4)
                    } : void 0,
                    onArchive: !i || el || F ? void 0 : () => (0, nF.a)(q, W),
                    onUnarchive: i && !el && F ? () => {
                        (0, ew.V)({
                            scope: q,
                            conversationId: W
                        }).then(() => {
                            q.get(K.f).success(ee.formatMessage(eT.a.unarchiveSuccessPlain))
                        }).catch(() => {
                            q.get(K.f).danger(ee.formatMessage(ex.a.unarchiveError), {
                                errorAnalytics: {
                                    toastId: "chatgptConversationPage.onUnarchive.unarchiveError"
                                }
                            })
                        })
                    } : void 0,
                    onDelete: !i || el ? void 0 : () => ea("menu")
                })
            }, E[24] = N, E[25] = R, E[26] = Z, E[27] = ee, E[28] = el, E[29] = F, E[30] = B, E[31] = V, E[32] = et, E[33] = z, E[34] = D, E[35] = G, E[36] = H, E[37] = q, E[38] = W, E[39] = Q, E[40] = O, E[41] = y) : y = E[41];
            let eh = y;
            E[42] !== P || E[43] !== O || E[44] !== M ? (b = null == M ? (0, a.jsx)(nR.a, {
                ref: er,
                onActivate: P,
                title: O
            }) : (0, a.jsx)(nA.b, {
                ref: er,
                children: M
            }), E[42] = P, E[43] = O, E[44] = M, E[45] = b) : b = E[45];
            let em = b;
            E[46] !== eh || E[47] !== em || E[48] !== et || E[49] !== ei || E[50] !== eu || E[51] !== k || E[52] !== W || E[53] !== A ? (w = A && (ei ? (0, a.jsx)(nJ, {
                conversationId: W,
                getBaseItems: eh,
                menuTriggerRef: er,
                navigate: et,
                onBeforeOpen: eu,
                renderDropdown: k,
                children: em
            }) : (0, a.jsx)(nk.a, {
                preserveBrowserContextMenu: !0,
                getItems: () => eh(),
                onBeforeOpen: eu,
                renderItem: nN.b,
                renderDropdown: k,
                trigger: "click",
                children: em
            })), E[46] = eh, E[47] = em, E[48] = et, E[49] = ei, E[50] = eu, E[51] = k, E[52] = W, E[53] = A, E[54] = w) : w = E[54];
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
            }), E[58] = ed, E[59] = el, E[60] = eg, E[61] = ef, E[62] = _, E[63] = O, E[64] = I) : I = E[64], E[65] !== w || E[66] !== I ? (T = (0, a.jsxs)(a.Fragment, {
                children: [w, I]
            }), E[65] = w, E[66] = I, E[67] = T) : T = E[67], T
        }

        function n4() {}

        function n5(e) {
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
                let e = null == d ? null : (0, nW.a)(p, d, null, () => (0, nq.a)(m)),
                    t = null == e ? [] : [e];
                return l ? (0, nN.a)(t) : t
            }, s[0] = l, s[1] = d, s[2] = m, s[3] = p, s[4] = t) : t = s[4], s[5] !== i || s[6] !== u ? (n = u ?? (0, a.jsx)(nR.a, {
                title: i
            }), s[5] = i, s[6] = u, s[7] = n) : n = s[7], s[8] !== h || s[9] !== t || s[10] !== n ? (o = (0, a.jsx)(nk.a, {
                preserveBrowserContextMenu: !0,
                getItems: t,
                renderItem: nN.b,
                renderDropdown: h,
                trigger: "click",
                children: n
            }), s[8] = h, s[9] = t, s[10] = n, s[11] = o) : o = s[11], o
        }
        var n6 = n("dLcZ"),
            n7 = n("lKDl");

        function n8(e) {
            let t, n = (0, r.c)(2),
                {
                    children: o
                } = e;
            return n[0] !== o ? (t = (0, a.jsx)(_.a.HeaderAction, {
                actionId: "sectioned-conversation-navigation",
                align: "center",
                children: (0, a.jsx)("div", {
                    className: n7.a.Progress,
                    children: o
                })
            }), n[0] = o, n[1] = t) : t = n[1], t
        }
        var n9 = n("NVRI"),
            ae = n("WLgA");

        function at(e) {
            let t, n, o = (0, r.c)(9),
                {
                    icon: s,
                    name: i,
                    projectId: l,
                    linkToProject: c
                } = e;
            o[0] !== s || o[1] !== c || o[2] !== i || o[3] !== l ? (t = c && null != i ? (0, a.jsx)(tR.b, {
                "aria-label": i,
                color: "ghostActive",
                size: "toolbar",
                to: (0, ae.c)(l),
                uniform: !0,
                children: s
            }) : null, o[0] = s, o[1] = c, o[2] = i, o[3] = l, o[4] = t) : t = o[4];
            let d = t,
                u = d ?? s,
                h = null != d;
            return o[5] !== i || o[6] !== u || o[7] !== h ? (n = (0, a.jsx)(n9.b, {
                project: {
                    icon: u,
                    iconInteractive: h,
                    name: i
                }
            }), o[5] = i, o[6] = u, o[7] = h, o[8] = n) : n = o[8], n
        }
        var an = n("ftSl"),
            aa = n("u9Jt"),
            ar = n("Xoyl");

        function ao(e) {
            let t, n = (0, r.c)(7),
                {
                    hasTitleMenu: o,
                    onClick: s,
                    project: i,
                    title: l
                } = e;
            if (null == l) {
                let e;
                return n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(ar.a, {}), n[0] = e) : e = n[0], e
            }
            if (o) {
                let e;
                return n[1] !== s || n[2] !== i || n[3] !== l ? (e = (0, a.jsx)(aa.a, {
                    triggerButton: (0, a.jsx)(nR.a, {
                        onActivate: s,
                        project: i,
                        title: l
                    })
                }), n[1] = s, n[2] = i, n[3] = l, n[4] = e) : e = n[4], e
            }
            return n[5] !== l ? (t = (0, a.jsx)(an.a, {
                className: "max-w-full",
                variant: "flush-start",
                title: l
            }), n[5] = l, n[6] = t) : t = n[6], t
        }
        var as = n("B5Qz"),
            ai = n("E7pP"),
            al = n("oU3c"),
            ac = n("B0Wx");
        let ad = (0, c.d)(eI.a, (e, t) => {
            let {
                get: n
            } = t, a = n(ac.b, e);
            if (null != a) return a;
            let r = n(tm.j, e);
            if (null == r) return null;
            let o = n(ew.j, [r], {
                    enabled: !1
                }).data?.[0],
                s = (0, al.a)(o?.title, o?.mapping);
            if (null != s) return s;
            let i = n(ai.a),
                l = null == i ? null : n(as.e, {
                    hostId: i,
                    threadId: r
                });
            return l?.sourceKind === "chatgpt" ? (0, al.c)(l.displayTitle) : null
        });
        var au = n("X0li");
        let ah = (0, tO.a)(au.d),
            ap = (0, tO.a)(async () => (await n.e(328371).then(n.bind(n, "uPMT"))).SectionHistory),
            am = (0, tO.a)(async () => (await n.e(270015).then(n.bind(n, "r5vN"))).SectionNavigation);
        var ag = n("lX86"),
            af = n("sQ4r"),
            av = n("on57"),
            ay = n("IPUh"),
            ab = n("v7qY"),
            ax = n("wD9O"),
            aC = n("jov5"),
            aw = n("Ro2M"),
            a_ = n("bN4H"),
            aj = n("TS05");

        function aS(e) {
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
            return o ? null : (i[6] !== n || i[7] !== l || i[8] !== d || i[9] !== h || i[10] !== u ? (s = (0, a.jsx)(aI, {
                automationId: n,
                conversationId: l,
                entries: d,
                turnListApi: u
            }, h), i[6] = n, i[7] = l, i[8] = d, i[9] = h, i[10] = u, i[11] = s) : s = i[11], s)
        }

        function aI(e) {
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
                } = (0, c.x)(aw.e, i),
                b = (0, c.z)(aC.a),
                x = (0, m.useRef)(null),
                C = (0, m.useRef)(null);
            s[0] !== d ? (t = d.findLast(aP), s[0] = d, s[1] = t) : t = s[1];
            let w = t;
            s[2] !== g || s[3] !== i || s[4] !== b || s[5] !== w || s[6] !== y || s[7] !== p || s[8] !== h || s[9] !== u ? (n = () => {
                null == y || null == g || (b || x.current === g || (x.current = g, (0, a_.openAutomationSidePanelTab)({
                    scope: h,
                    automationId: i,
                    title: y.automation.title
                })), null != u && null != w && C.current !== g && (C.current = g, u.scrollToKey(w.turnKey, aT, {
                    align: "top"
                }).then(() => {
                    h.set(aj.a, {
                        locationKey: p.key,
                        accountId: g
                    }, !0)
                })))
            }, s[2] = g, s[3] = i, s[4] = b, s[5] = w, s[6] = y, s[7] = p, s[8] = h, s[9] = u, s[10] = n) : n = s[10];
            let _ = (0, m.useEffectEvent)(n);
            s[11] !== g || s[12] !== l || s[13] !== y?.automation.conversation_id || s[14] !== _ || s[15] !== v ? (a = () => {
                null != g && y?.automation.conversation_id === (v ?? l) && _()
            }, s[11] = g, s[12] = l, s[13] = y?.automation.conversation_id, s[14] = _, s[15] = v, s[16] = a) : a = s[16];
            let j = w?.turnKey,
                I = y?.automation.conversation_id;
            return s[17] !== g || s[18] !== b || s[19] !== l || s[20] !== v || s[21] !== j || s[22] !== I || s[23] !== u ? (o = [g, l, j, I, v, b, u], s[17] = g, s[18] = b, s[19] = l, s[20] = v, s[21] = j, s[22] = I, s[23] = u, s[24] = o) : o = s[24], (0, m.useEffect)(a, o), null
        }

        function aT(e) {
            let t = e.querySelector("[data-chatgpt-agent-turn-start]");
            if (null == t) return null;
            let n = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                acceptNode: aE
            });
            n.currentNode = t;
            let a = n.nextNode();
            return a instanceof HTMLElement ? a : null
        }

        function aE(e) {
            return e instanceof HTMLElement && e.getClientRects().length > 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }

        function aP(e) {
            let {
                turn: t
            } = e;
            return t.items.some(aA)
        }

        function aA(e) {
            return "user-message" !== e.type
        }
        var aM = n("TDcV"),
            ak = n("Xvoy"),
            aR = n("WAdu");
        let aN = {
            $type: "protobuf_analytics_events.v1.ChatgptConversationPrintLifecycle"
        };
        var aO = n("jDEJ");
        let aB = (0, c.u)(eI.a, null);

        function aF(e, t) {
            if (!e.get(el.c).isChatgptBrowserReplacement || t.repeat || ((0, aO.a)() ? !t.metaKey || t.ctrlKey : !t.ctrlKey || t.metaKey) || t.altKey || t.shiftKey || "p" !== t.key.toLowerCase() || null != e.get(aB)) return;
            let n = az("CHATGPT_CONVERSATION_PRINT_ENTRY_POINT_SHORTCUT");
            e.set(aB, n), aD(e, n, "CHATGPT_CONVERSATION_PRINT_STAGE_INTENT_OBSERVED")
        }
        async function aL(e, t, n, a) {
            let r = e.get(aB);
            if (!e.get(el.c).isChatgptBrowserReplacement || null == r) return a();
            let o = n => {
                aD(e, r, n, t)
            };
            o("CHATGPT_CONVERSATION_PRINT_STAGE_PREPARATION_STARTED");
            try {
                let e = await a();
                return n.aborted || o("CHATGPT_CONVERSATION_PRINT_STAGE_PREPARATION_SUCCEEDED"), e
            } catch (a) {
                throw n.aborted || o("CHATGPT_CONVERSATION_PRINT_STAGE_PREPARATION_FAILED"), "CHATGPT_CONVERSATION_PRINT_PREPARATION_HISTORY" !== t || e.get(aB)?.id !== r.id || e.get(aB)?.printing || e.set(aB, null), a
            }
        }

        function az(e) {
            let t = performance.now();
            return {
                id: crypto.randomUUID(),
                entryPoint: e,
                startedAt: t,
                printing: !1
            }
        }

        function aD(e, t, n, a) {
            (0, el.a)(e, aN, {
                attemptId: t.id,
                stage: n,
                entryPoint: t.entryPoint,
                elapsedMs: Math.max(0, performance.now() - t.startedAt),
                preparation: a
            })
        }
        var aG = n("CpsU"),
            aH = n.n(aG),
            aW = n("rKAs"),
            aq = n("SqqO"),
            aK = n("zHp1"),
            aU = n("taWv");

        function aV() {
            return Object.fromEntries(Array.from(document.images).flatMap(e => {
                if (!e.complete || 0 === e.naturalWidth) return [];
                let t = e.currentSrc || e.src;
                return [e.getAttribute("src"), e.src, t].flatMap(e => e ? [
                    [e, t]
                ] : [])
            }))
        }
        var aQ = n("gsAl"),
            a$ = n("AO3k"),
            aY = n("aS84"),
            aX = n("Qtjq"),
            aJ = "printDocument-v_w5Ax";
        let aZ = "https://chatgpt.com/download/?utm_source=chatgpt_web&utm_medium=print&utm_campaign=app_install";

        function a0(e) {
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
                return f[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, av.b)(aJ, "hidden w-full space-y-1.5 bg-surface text-default print:block"), f[0] = e) : e = f[0], f[1] !== v ? (t = (0, a.jsx)("div", {
                    className: e,
                    "data-conversation-print": "",
                    "data-theme": "light",
                    children: v
                }), f[1] = v, f[2] = t) : t = f[2], t
            }
            return f[3] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, av.b)(aJ, "formattedPrintDocument-tP74Wl", "group/conversation-print hidden w-full bg-surface text-default print:block"), f[3] = t) : t = f[3], f[4] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(aY.a, {
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
            }), f[7] = v, f[8] = s) : s = f[8], f[9] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, av.b)("footer-QEzLbn", "flex items-center gap-3 rounded-2xl border border-default bg-surface-secondary p-2 text-default"), f[9] = i) : i = f[9], f[10] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, a.jsx)("div", {
                className: "flex size-10 shrink-0 items-center justify-center rounded-xl border border-default bg-surface",
                children: (0, a.jsx)(aX.a, {
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
                    href: `${aZ}&utm_content=pdf_link`,
                    children: (0, a.jsx)(a$.a, {
                        value: `${aZ}&utm_content=qr`,
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

        function a1(e) {
            return {
                ...e,
                renderTelemetryMessages: void 0
            }
        }
        var a2 = n("zn0A"),
            a3 = n("jfiJ"),
            a4 = n("FGJH"),
            a5 = n("nmN6");
        let a6 = new WeakMap;

        function a7(e) {
            let t, n, o = (0, r.c)(6),
                s = (0, c.z)(aM.a);
            return o[0] !== s || o[1] !== e.entries[0]?.conversationId ? (t = JSON.stringify([s, e.entries[0]?.conversationId]), o[0] = s, o[1] = e.entries[0]?.conversationId, o[2] = t) : t = o[2], o[3] !== e || o[4] !== t ? (n = (0, a.jsx)(a8, {
                ...e
            }, t), o[3] = e, o[4] = t, o[5] = n) : n = o[5], n
        }

        function a8(e) {
            let t, n, o, s, i, l, d = (0, r.c)(16),
                u = (0, c.y)(ep.a),
                h = (0, c.z)(ak.a),
                [p, g] = (0, m.useState)(!1),
                f = (0, m.useRef)(null);
            d[0] !== u ? (t = (e, t) => {
                if (aF(u, e), !e.ctrlKey && !e.metaKey || e.altKey || e.shiftKey || "p" !== e.key.toLowerCase()) return;
                if (e.repeat) return void f.current?.onKeyDown(e, t);
                let n = a6.get(e);
                if (e.defaultPrevented && null == n) return;
                (0, ab.flushSync)(() => g(!0));
                let a = n ?? f.current?.onKeyDown(e, t);
                null == a && e.defaultPrevented || Promise.resolve(a).then(() => a6.get(e)).finally(() => {
                    t.aborted || g(!1)
                })
            }, d[0] = u, d[1] = t) : t = d[1];
            let v = (0, m.useEffectEvent)(t);
            d[2] === Symbol.for("react.memo_cache_sentinel") ? (n = () => {
                (0, ab.flushSync)(() => g(!0)), f.current?.onBeforePrint()
            }, d[2] = n) : n = d[2];
            let y = (0, m.useEffectEvent)(n);
            d[3] !== u ? (o = () => {
                u.set(a2.a, null), g(!1)
            }, d[3] = u, d[4] = o) : o = d[4];
            let b = (0, m.useEffectEvent)(o);
            return d[5] !== b || d[6] !== y || d[7] !== v || d[8] !== u ? (s = () => {
                let e, t, n = new AbortController,
                    a = (e = () => {
                        if (!u.get(el.c).isChatgptBrowserReplacement) return;
                        let e = u.get(aB);
                        if (e?.printing) return;
                        let t = {
                            ...e ?? az("CHATGPT_CONVERSATION_PRINT_ENTRY_POINT_UNOBSERVED"),
                            printing: !0
                        };
                        u.set(aB, t), aD(u, t, "CHATGPT_CONVERSATION_PRINT_STAGE_BEFORE_PRINT")
                    }, t = () => {
                        let e = u.get(aB);
                        u.get(el.c).isChatgptBrowserReplacement && e?.printing && (aD(u, e, "CHATGPT_CONVERSATION_PRINT_STAGE_AFTER_PRINT"), u.set(aB, null))
                    }, window.addEventListener("beforeprint", e, !0), window.addEventListener("afterprint", t), () => {
                        window.removeEventListener("beforeprint", e, !0), window.removeEventListener("afterprint", t), u.set(aB, null)
                    }),
                    r = e => v(e, n.signal);
                return window.addEventListener("keydown", r, !0), window.addEventListener("beforeprint", y, !0), window.addEventListener("afterprint", b), () => {
                    n.abort(), window.removeEventListener("keydown", r, !0), window.removeEventListener("beforeprint", y, !0), window.removeEventListener("afterprint", b), u.set(a2.a, null), a()
                }
            }, d[5] = b, d[6] = y, d[7] = v, d[8] = u, d[9] = s) : s = d[9], d[10] !== u ? (i = [u], d[10] = u, d[11] = i) : i = d[11], (0, m.useEffect)(s, i), d[12] !== h || d[13] !== e || d[14] !== p ? (l = p || h ? (0, a.jsx)(a9, {
                ...e,
                ref: f,
                printing: h
            }) : null, d[12] = h, d[13] = e, d[14] = p, d[15] = l) : l = d[15], l
        }

        function a9(e) {
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
                y = (0, m.useContext)(aR.a),
                {
                    getExperiment: b
                } = (0, eR.h)(),
                x = b("448755449", {
                    disableExposureLog: !0
                }).get("enabled", !1);
            l[0] !== d[0]?.conversationId ? (t = d[0]?.conversationId ?? (0, t8.d)(""), l[0] = d[0]?.conversationId, l[1] = t) : t = l[1], l[2] !== v || l[3] !== t ? (n = {
                auth: v,
                conversationId: t
            }, l[2] = v, l[3] = t, l[4] = n) : n = l[4];
            let C = (0, c.x)(null != d[0] && aQ.h, n),
                w = (0, c.x)(null == d[0] ? null : tg.e, d[0]?.conversationId ?? "") ?? !0,
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
                                userResolver: (0, aU.c)(void 0, void 0, void 0, e.get(tm.T, n.conversationId) ?? void 0),
                                scopedResolver: (0, aU.c)(a ?? void 0)
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
                            void 0 === t.generatedResolver && (t.generatedResolver = e.get(aU.a, n.conversationId));
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
                                        for (let a of (0, aW.u)(t, e)) {
                                            if (r && (0, aq.d)(a.src)) continue;
                                            let e = a.searchResult?.isProxied && (a.previewSrc === a.searchResult.contentSrc || a.previewSrc === a.searchResult.originalSrc) ? a.src : a.previewSrc;
                                            s.push({
                                                conversationId: n.conversationId,
                                                src: a.src,
                                                previewSrc: null != e && r && (0, aq.d)(e) ? a.src : e
                                            })
                                        }
                            }
                            if (null == o) continue;
                            i.push(...l.contentReferences.flatMap((e, t) => (0, aW.u)(e, t).map(e => {
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
                        return null != t && (0, aK.h)(t) ? [{
                            src: t,
                            resolver: n
                        }] : []
                    });
                    return {
                        queryKey: ["chatgpt-print-assets", e.get(aM.a), t[0]?.conversationId, a, r, s, c.map(e => {
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
                        staleTime: ez.b.FIVE_MINUTES,
                        refetchOnWindowFocus: !1,
                        retry: !1,
                        queryFn: t => {
                            let {
                                client: a,
                                signal: i,
                                queryKey: l
                            } = t;
                            return aL(e, "CHATGPT_CONVERSATION_PRINT_PREPARATION_IMAGES", i, async () => {
                                let t = {
                                    ...a.getQueryData(l)?.imageSources
                                };
                                for (let e of aH()(c, 6)) i.throwIfAborted(), await Promise.all(e.map(async e => {
                                    let {
                                        src: n,
                                        resolver: r
                                    } = e, o = await (0, aK.a)(a, n, r);
                                    if (i.throwIfAborted(), null != o) {
                                        let e = new Image;
                                        e.referrerPolicy = "no-referrer", e.src = o, await e.decode(), t[n] = o
                                    }
                                }));
                                let d = new Map,
                                    u = s.flatMap(t => {
                                        let n = d.get(t.conversationId);
                                        return (null == n && (n = r || !e.get(aQ.h, {
                                            auth: o,
                                            conversationId: t.conversationId
                                        }) && e.get(tg.e, t.conversationId), d.set(t.conversationId, n)), n && (0, aq.d)(t.src)) ? [] : [{
                                            ...t,
                                            previewSrc: n && null != t.previewSrc && (0, aq.d)(t.previewSrc) ? t.src : t.previewSrc
                                        }]
                                    }),
                                    h = n ? t : await async function(e, t, n) {
                                        if (0 === e.length) return t;
                                        let a = aV(),
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
                }(f, d, p, x, "restricted" === y || !C && w, v),
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
                                ...aV(),
                                ...e?.imageSources
                            };
                        (0, ab.flushSync)(() => f.set(a2.a, t))
                    }
                }
            }), l[5] = S, l[6] = I, l[7] = x, l[8] = T, l[9] = P, l[10] = f, l[11] = o) : o = l[11], (0, m.useImperativeHandle)(g, o), l[12] !== h || l[13] !== d || l[14] !== E || l[15] !== T || l[16] !== p || l[17] !== u ? (i = p ? (0, ab.createPortal)((0, a.jsx)(a0, {
                title: u,
                children: (0, a.jsx)(no.a, {
                    value: null,
                    children: (0, a.jsx)(a5.a, {
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
                                        items: t.items.map(e => "chatgpt-reasoning-group" !== e.type ? a1(e) : {
                                            ...e,
                                            items: e.items.map(a1),
                                            activeReasoning: null == e.activeReasoning ? void 0 : a1(e.activeReasoning)
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

        function re(e) {
            let t, n, a, o, i, l, d = (0, r.c)(22),
                {
                    conversationId: u
                } = e,
                h = (0, c.y)(eI.a),
                p = (0, g.a)(),
                f = (0, m.useRef)(null),
                v = (0, c.z)(aM.a),
                y = (0, c.x)(tm.j, u),
                b = (0, c.z)(a4.b);
            d[0] !== v || d[1] !== y ? (t = ["chatgpt-print-history", v, y], d[0] = v, d[1] = y, d[2] = t) : t = d[2], d[3] !== h || d[4] !== y ? (n = e => {
                let {
                    signal: t
                } = e;
                return aL(h, "CHATGPT_CONVERSATION_PRINT_PREPARATION_HISTORY", t, async () => (null != y && await (0, a3.a)(h, y, t), !0))
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
                if (aF(h, e), e.defaultPrevented || null == y || 0 === b || h.get(a4.c, y)?.complete === !0 || !e.ctrlKey && !e.metaKey || e.altKey || e.shiftKey || "p" !== e.key.toLowerCase() || (e.preventDefault(), e.repeat)) return;
                if (f.current?.signal === t) return void a6.set(e, f.current.preparation);
                let n = x({
                    cancelRefetch: !1
                }).then(async e => {
                    if (!t.aborted && h.get(aM.a) === v) {
                        if (e.isError) return void h.get(K.f).danger(p.formatMessage({
                            id: "chatgpt.printHistory.error",
                            defaultMessage: "Couldn't load the full conversation to print"
                        }), {
                            errorAnalytics: {
                                toastId: "chatgpt.printHistory.error"
                            }
                        });
                        await Promise.all(h.queryClient.getQueryCache().findAll({
                            queryKey: ["chatgpt-print-assets", v, u],
                            predicate: ra
                        }).map(rt)), t.aborted || h.get(aM.a) !== v || window.print()
                    }
                }).finally(() => {
                    f.current?.signal === t && (f.current = null)
                });
                f.current = {
                    signal: t,
                    preparation: n
                }, a6.set(e, n)
            }, d[9] = v, d[10] = u, d[11] = p, d[12] = b, d[13] = x, d[14] = h, d[15] = y, d[16] = o) : o = d[16];
            let C = (0, m.useEffectEvent)(o);
            return d[17] !== C ? (i = () => {
                let e = new AbortController,
                    t = t => C(t, e.signal);
                return window.addEventListener("keydown", t, !0), () => {
                    e.abort(), window.removeEventListener("keydown", t, !0)
                }
            }, d[17] = C, d[18] = i) : i = d[18], d[19] !== v || d[20] !== y ? (l = [v, y], d[19] = v, d[20] = y, d[21] = l) : l = d[21], (0, m.useEffect)(i, l), null
        }

        function rt(e) {
            return e.fetch(void 0, {
                cancelRefetch: !1
            }).catch(rn)
        }

        function rn() {}

        function ra(e) {
            return e.getObserversCount() > 0
        }
        var rr = n("gbRX");

        function ro(e) {
            let t, n, o = (0, r.c)(4),
                {
                    isFetching: s,
                    isSharedConversation: i,
                    onRetry: l
                } = e,
                d = (0, c.z)(!i && rr.a) || s;
            return o[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(ey.a, {
                id: "chatgptConversations.preview.retry",
                defaultMessage: "Try again"
            }), o[0] = t) : t = o[0], o[1] !== l || o[2] !== d ? (n = (0, a.jsx)(tR.a, {
                color: "ghost",
                disabled: d,
                onClick: l,
                children: t
            }), o[1] = l, o[2] = d, o[3] = n) : n = o[3], n
        }

        function rs(e) {
            let t, n, o, s = (0, r.c)(7),
                {
                    isFetching: i,
                    isSharedConversation: l,
                    onRetry: c
                } = e;
            return s[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(ey.a, {
                id: "chatgptConversations.loadError",
                defaultMessage: "Could not load this ChatGPT conversation"
            }), s[0] = t) : t = s[0], s[1] !== i || s[2] !== l || s[3] !== c ? (n = null != c ? (0, a.jsx)(ro, {
                isFetching: i,
                isSharedConversation: l,
                onRetry: c
            }) : null, s[1] = i, s[2] = l, s[3] = c, s[4] = n) : n = s[4], s[5] !== n ? (o = (0, a.jsxs)("div", {
                className: "rounded-xl border border-default bg-surface-secondary/92 p-4 text-sm text-default",
                children: [t, n]
            }), s[5] = n, s[6] = o) : o = s[6], o
        }
        var ri = n("FfNP"),
            rl = n("WVag");
        let rc = (0, tO.a)(ri.loadEpicChartIndicator);

        function rd(e) {
            let t, n = (0, r.c)(3),
                {
                    conversationId: o
                } = e,
                s = (0, c.x)(rl.a, o),
                [i, l] = (0, m.useState)(!1);
            return i || null == s || l(!0), n[0] !== o || n[1] !== i ? (t = i ? (0, a.jsx)(rc, {
                conversationId: o
            }) : null, n[0] = o, n[1] = i, n[2] = t) : t = n[2], t
        }
        var ru = n("DWXw"),
            rh = n("RGWz"),
            rp = n("QxH2"),
            rm = n("UuVq"),
            rg = n("TwSq"),
            rf = n("l0fK"),
            rv = n("hkBU"),
            ry = n("T1PX"),
            rb = n("guID"),
            rx = n("Mbqw"),
            rC = n("yzQ9"),
            rw = n("Gjet"),
            r_ = n("gJe8"),
            rj = n("ASxG"),
            rS = n("lsfk"),
            rI = n("IObw"),
            rT = n("BOYb"),
            rE = n("kQNh"),
            rP = n.n(rE),
            rA = n("NkEl"),
            rM = n("FW69"),
            rk = "highlight-x7OnzP",
            rR = "safari-wcvuzB",
            rN = "block-t7sxyD";
        let rO = "chatgpt-search-result",
            rB = "script, style, textarea, input, select, [hidden], [aria-hidden='true'], [data-thread-find-skip]";

        function* rF(e, t) {
            let n = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_TEXT, {
                    acceptNode: e => e.parentElement?.closest(rB) == null ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
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
            let o = RegExp(t.split(/\n+/u).map(rP()).join("\\n*"), "g");
            for (let n = o.exec(r); null != n && n.index < r.length; n = o.exec(r)) {
                let r = n.index;
                o.lastIndex = r + 1;
                let s = r + n[0].length,
                    i = a.find(e => e.end > r),
                    l = a.findLast(e => e.start < s);
                if (null == i || null == l) continue;
                let c = e.ownerDocument.createRange();
                c.setStart(i.node, r - i.start), c.setEnd(l.node, s - l.start), rL(c) && ((0, rM.a)(c) ?? c.toString()).trim() === t && (yield c)
            }
        }

        function rL(e) {
            return Array.from(e.getClientRects()).some(e => e.width > 0 && e.height > 0) && null != e.startContainer.parentElement && "hidden" !== getComputedStyle(e.startContainer.parentElement).visibility
        }
        let rz = rj.object({
            chatGptSearchNavigation: rj.object({
                key: rj.string(),
                messageId: rj.string()
            })
        });

        function rD(e) {
            let t, n, a, o, s, i, l, d, u, h, p, g, v = (0, r.c)(50),
                {
                    conversationId: y,
                    entries: b,
                    isConversationFetching: x,
                    turnListApi: C
                } = e,
                w = (0, c.y)(eI.a),
                _ = (0, c.x)(tm.s, y),
                j = (0, rS.b)(),
                S = (0, ax.c)();
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
                            left: (0, ax.b)(a.left + a.width / 2 - r.left - r.width / 2, n),
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
                        h = (0, ax.b)(s.height, n),
                        p = (0, ax.b)(s.top - i.top, n) - c + Math.min(h, u) / 2 - u / 2;
                    t.scrollToDistanceFromBottomPx(t.getLastScrollDistanceFromBottomPx() - p, "instant", "user")
                }(e, j, S)
            }, v[0] = j, v[1] = S, v[2] = t) : t = v[2];
            let I = (0, m.useEffectEvent)(t),
                T = (0, f.Y)(),
                E = (0, f._)(),
                P = new URLSearchParams(T.search),
                A = P.get("messageId") ?? P.get("message"),
                M = rz.safeParse(T.state).data?.chatGptSearchNavigation,
                k = A ?? M?.messageId,
                R = P.get("selectedTextQuery") ?? "",
                N = (0, c.x)(tm.N, y),
                O = !R || null != k && null != N && (N[k]?.message != null || Object.values(N).some(e => e.message?.id === k)),
                B = R || P.get("historySearchQuery") || "",
                F = JSON.stringify([y, null != A ? T.key : M?.key ?? T.key, k]);
            v[3] !== F ? (n = {
                key: F,
                handled: !1,
                positioned: !1
            }, v[3] = F, v[4] = n) : n = v[4];
            let L = (0, m.useRef)(n),
                z = (0, m.useEffectEvent)(e => {
                    L.current.positioned = !0;
                    let t = B.trim().length > 0 ? function(e, t, n) {
                        let a, r, o, s, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "terms",
                            l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                            c = "phrase" === i ? t.trim() : null,
                            d = [...new Set(t.trim().toLowerCase().normalize("NFC").split(/\s+/).map(e => e.replace(/^[^\p{Letter}\p{Number}]+|[^\p{Letter}\p{Number}]+$/gu, "")).filter(e => e.length > 0))],
                            u = new TextEncoder,
                            h = d.filter(e => !/^\p{Letter}+$/u.test(e) || u.encode(e.normalize("NFKD").replace(/\p{Mark}/gu, "")).byteLength >= 3),
                            p = h.length > 0 ? h : d;
                        if (c?.length === 0 || null == c && 0 === p.length) return () => {};
                        let m = new RegExp(null == c ? p.toSorted((e, t) => t.length - e.length).map(rP()).join("|") : rP()(c), null == c ? "giu" : "gu"),
                            g = !1,
                            f = performance.now(),
                            v = !1,
                            y = new WeakSet,
                            b = new Set,
                            x = new MutationObserver(w);

                        function C() {
                            for (let t of (g = !0, x.disconnect(), clearTimeout(r), null != o && cancelAnimationFrame(o), null != a && CSS.highlights.get(rO) === a && CSS.highlights.delete(rO), e.classList.remove(rk, rR), b)) t.classList.remove(rk, rN)
                        }

                        function w() {
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
                            if (d < 4e3 && null != e.querySelector("[data-search-result-pending]")) return void w();
                            let u = (0, rA.a)(e);
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
                                for (let e of rF(t, c))
                                    if (!(n++ < l)) {
                                        j.push(e);
                                        break
                                    }
                            } else {
                                let t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_TEXT, {
                                    acceptNode: e => e.parentElement?.closest(rB) != null || u.some(t => {
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
                                        a.setStart(n, t.index), a.setEnd(n, t.index + t[0].length), rL(a) && j.push(a)
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
                                if (d < 800) return void w();
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
                                s = P, w();
                                return
                            }
                            if (!v) {
                                v = !0, s = void 0, n?.(t), w();
                                return
                            }
                            for (let t of (x.disconnect(), clearTimeout(r), "u" > typeof Highlight && null != CSS.highlights ? (a = new Highlight(...j), CSS.highlights.set(rO, a)) : j.length > 0 && S.push(e), e.classList.add(rk), (0, rT.e)() && e.classList.add(rR), S)) t.classList.add(rk, rN), b.add(t);
                            r = setTimeout(C, 3600)
                        }
                        return x.observe(e, {
                            childList: !0,
                            characterData: !0,
                            attributes: !0,
                            subtree: !0
                        }), _(), C
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
            v[5] !== y || v[6] !== x || v[7] !== k || v[8] !== F || v[9] !== w || v[10] !== O ? (a = () => {
                if (L.current.key !== F && (L.current = {
                        key: F,
                        handled: !1,
                        positioned: !1
                    }), null != k && !x && O) return w.watch(e => {
                    !L.current.handled && (0, tm.Qb)(e, y, k) && (L.current.handled = !0)
                })
            }, o = [y, x, k, F, w, O], v[5] = y, v[6] = x, v[7] = k, v[8] = F, v[9] = w, v[10] = O, v[11] = a, v[12] = o) : (a = v[11], o = v[12]), (0, m.useLayoutEffect)(a, o), v[13] !== b || v[14] !== k ? (s = null == k ? void 0 : b.find(e => {
                let {
                    turn: t
                } = e;
                return t.messageIds.includes(k)
            }), v[13] = b, v[14] = k, v[15] = s) : s = v[15];
            let D = s;
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
            let G = (0, m.useEffectEvent)(i);
            if (v[21] !== G || v[22] !== _ || v[23] !== x || v[24] !== D ? (l = () => {
                    !L.current.positioned || null != D || x || _ || G()
                }, v[21] = G, v[22] = _, v[23] = x, v[24] = D, v[25] = l) : l = v[25], v[26] !== _ || v[27] !== x || v[28] !== D ? (d = [_, x, D], v[26] = _, v[27] = x, v[28] = D, v[29] = d) : d = v[29], (0, m.useLayoutEffect)(l, d), v[30] !== k || v[31] !== D?.id || v[32] !== D?.turn || v[33] !== D?.turn.items || v[34] !== D?.turn.items.findIndex || v[35] !== D?.turnKey) {
                let e = D?.turn.items.findIndex(e => "messageId" in e && e.messageId === k || "assistant-message" === e.type && null != k && e.sourceMessageIds?.includes(k)) ?? -1,
                    t = D?.turn.items[e],
                    n = D?.id;
                h = D?.turnKey, u = null == t || null == n ? void 0 : (0, rI.b)(t, e, n), v[30] = k, v[31] = D?.id, v[32] = D?.turn, v[33] = D?.turn.items, v[34] = D?.turn.items.findIndex, v[35] = D?.turnKey, v[36] = u, v[37] = h
            } else u = v[36], h = v[37];
            let H = u;
            return v[38] !== z || v[39] !== k || v[40] !== h || v[41] !== C || v[42] !== H ? (p = () => {
                let e;
                if (null == h || null == C) return;
                let t = new AbortController,
                    n = null;
                return C.scrollToKey(h, e => n = (null == k ? null : e.querySelector(`[data-chatgpt-search-message-ids~="${CSS.escape(k)}"]`)) ?? (null == H ? null : e.querySelector(`[data-chatgpt-search-unit-key="${CSS.escape(H)}"]`)) ?? e, {
                    align: "top",
                    signal: t.signal
                }).then(() => {
                    !t.signal.aborted && n?.isConnected && (e = z(n))
                }), () => {
                    t.abort(), e?.()
                }
            }, v[38] = z, v[39] = k, v[40] = h, v[41] = C, v[42] = H, v[43] = p) : p = v[43], v[44] !== k || v[45] !== F || v[46] !== h || v[47] !== C || v[48] !== H ? (g = [F, k, h, C, H], v[44] = k, v[45] = F, v[46] = h, v[47] = C, v[48] = H, v[49] = g) : g = v[49], (0, m.useLayoutEffect)(p, g), null
        }
        var rG = n("ESlL"),
            rH = n("Ppno"),
            rW = n("lA5q"),
            rq = n("wDWo"),
            rK = n("IgxH"),
            rU = n("iaTG"),
            rV = n("c3f5"),
            rQ = n("XpUB"),
            r$ = n("xAIC"),
            rY = n("if6d"),
            rX = n("Sd8U");
        let rJ = (0, c.t)("ChatGptTranscriptScope", {
            parent: rX.a,
            key: e => e.presentation
        });
        var rZ = n("r2mP"),
            r0 = n("ag0v"),
            r1 = n("No7k"),
            r2 = n("RADZ"),
            r3 = n("rZzh"),
            r4 = n("hZRx");

        function r5(e) {
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
            let C = (0, c.x)(b ? Z.c : null, t),
                w = b && null == C,
                _ = (0, c.x)(g.isMostRecentTurn ? r3.e : null, g.conversationId);
            m[2] !== g.timestampSeparatorAtMs ? (n = null == g.timestampSeparatorAtMs ? null : (0, a.jsx)(rZ.b, {
                sentAtMs: g.timestampSeparatorAtMs
            }), m[2] = g.timestampSeparatorAtMs, m[3] = n) : n = m[3];
            let j = null != g.paragen;
            m[4] !== g.branchingMessageId || m[5] !== g.browserConversationId || m[6] !== g.conversationId || m[7] !== g.dilEditDisclosure || m[8] !== g.enableCloudBrowserActivity || m[9] !== g.feedbackEnabled || m[10] !== g.hasLaterSitesPreview || m[11] !== g.id || m[12] !== g.isMostRecentTurn || m[13] !== g.isReadOnly || m[14] !== g.isTemporaryChat || m[15] !== g.isWorkConversation || m[16] !== g.onEditUserMessage || m[17] !== g.onFork || m[18] !== g.onRegenerateResponse || m[19] !== g.pendingSubmissionAttachments || m[20] !== g.readAloudEnabled || m[21] !== g.referenceImageSuggestionActionInput || m[22] !== g.safetyReview || m[23] !== g.shareEnabled || m[24] !== g.turn || m[25] !== y || m[26] !== w || m[27] !== j ? (o = (0, a.jsx)(r1.a, {
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
                trackShownImpressions: w,
                turn: g.turn,
                turnId: g.id
            }), m[4] = g.branchingMessageId, m[5] = g.browserConversationId, m[6] = g.conversationId, m[7] = g.dilEditDisclosure, m[8] = g.enableCloudBrowserActivity, m[9] = g.feedbackEnabled, m[10] = g.hasLaterSitesPreview, m[11] = g.id, m[12] = g.isMostRecentTurn, m[13] = g.isReadOnly, m[14] = g.isTemporaryChat, m[15] = g.isWorkConversation, m[16] = g.onEditUserMessage, m[17] = g.onFork, m[18] = g.onRegenerateResponse, m[19] = g.pendingSubmissionAttachments, m[20] = g.readAloudEnabled, m[21] = g.referenceImageSuggestionActionInput, m[22] = g.safetyReview, m[23] = g.shareEnabled, m[24] = g.turn, m[25] = y, m[26] = w, m[27] = j, m[28] = o) : o = m[28], m[29] !== g.conversationId || m[30] !== g.isTemporaryChat || m[31] !== g.isWorkConversation || m[32] !== g.paragen || m[33] !== y || m[34] !== w ? (s = null == g.paragen ? null : (0, a.jsx)(r2.a, {
                renderMcpApps: y,
                comparison: g.paragen,
                conversationId: g.conversationId,
                hostId: eg.a,
                isTemporaryChat: g.isTemporaryChat,
                isWorkConversation: g.isWorkConversation,
                trackTaskViews: w
            }, g.paragen.promptMessageId), m[29] = g.conversationId, m[30] = g.isTemporaryChat, m[31] = g.isWorkConversation, m[32] = g.paragen, m[33] = y, m[34] = w, m[35] = s) : s = m[35], m[36] !== g.showSharedConversationPrivateDisclaimer ? (i = g.showSharedConversationPrivateDisclaimer ? (0, a.jsxs)("div", {
                className: "my-2 flex items-center justify-center gap-2 text-size-chat text-secondary select-none",
                children: [(0, a.jsx)(q.a, {
                    className: "shrink-0",
                    legacyIcon: r0.a,
                    asset16: r4.a,
                    legacyClassName: "icon-2xs",
                    "aria-hidden": !0
                }), (0, a.jsx)(ey.a, {
                    id: "chatgptConversations.sharedConversation.privateMessagesDisclaimer",
                    defaultMessage: "Messages beyond this point are only visible to you"
                })]
            }) : null, m[36] = g.showSharedConversationPrivateDisclaimer, m[37] = i) : i = m[37], m[38] !== g || m[39] !== _ || m[40] !== x || m[41] !== w ? (l = g.isMostRecentTurn ? (0, a.jsx)(rG.a, {
                conversationId: g.conversationId,
                errorMessage: g.errorMessage,
                isWorkConversation: g.isWorkConversation,
                onRetry: null == g.onRegenerateResponse || null == _ ? void 0 : async e => {
                    let t = x.get(r3.e, g.conversationId);
                    if (t?.message.id == null || t.isRetryDisabled) return;
                    let n = x.get(tm.V, g.conversationId)?.metadata?.errorCode;
                    (0, t2.d)(x.get(el.c).logProductEvent, {
                        conversationId: x.get(tm.j, g.conversationId),
                        messageId: t.message.id,
                        useDefaultModel: t.useDefaultModel,
                        errorCode: n
                    }), await g.onRegenerateResponse?.(t.message.id, {
                        sourceEventTimeStamp: e,
                        source: "model_cap_exceeded" === n ? "rate_limit_retry" : "error_retry",
                        model: (0, r3.f)(t.message, x.get(t_.v, g.conversationId)),
                        useDefaultModel: t.useDefaultModel,
                        forceUseSearch: t.forceUseSearch
                    })
                },
                showPendingLoadingMessage: g.showPendingLoadingMessage,
                showRequestUserInputStatus: g.showRequestUserInputStatus,
                trackShownImpressions: w,
                useDefaultModel: _?.useDefaultModel,
                isRetryDisabled: _?.isRetryDisabled
            }) : null, m[38] = g, m[39] = _, m[40] = x, m[41] = w, m[42] = l) : l = m[42], m[43] !== o || m[44] !== s || m[45] !== i || m[46] !== l ? (d = (0, a.jsxs)("div", {
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

        function r6(e) {
            let t, n, o, s = (0, r.c)(6);
            s[0] !== e ? ({
                renderMcpApps: n,
                ...t
            } = e, s[0] = e, s[1] = t, s[2] = n) : (t = s[1], n = s[2]);
            let i = void 0 === n || n,
                l = (0, c.y)(rJ),
                d = i && l.value.rendersWidgets;
            return s[3] !== t || s[4] !== d ? (o = (0, a.jsx)(r5, {
                ...t,
                renderMcpApps: d
            }), s[3] = t, s[4] = d, s[5] = o) : o = s[5], o
        }

        function r7(e) {
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
            return u[6] !== h ? (s = (0, a.jsx)(rY.b, {
                entries: h,
                preserveMeasuredTurnViewport: !0,
                RowComponent: r8
            }), u[6] = h, u[7] = s) : s = u[7], u[8] !== y || u[9] !== s ? (i = (0, a.jsx)(no.a, {
                value: null,
                children: (0, a.jsxs)(a5.a, {
                    value: null,
                    children: [y, s]
                })
            }), u[8] = y, u[9] = s, u[10] = i) : i = u[10], u[11] !== g || u[12] !== i ? (l = (0, a.jsx)(rw.a, {
                active: g,
                presentation: "panel",
                children: i
            }), u[11] = g, u[12] = i, u[13] = l) : l = u[13], u[14] !== o || u[15] !== l ? (d = (0, a.jsx)(c.b, {
                scope: rJ,
                value: o,
                children: l
            }), u[14] = o, u[15] = l, u[16] = d) : d = u[16], d
        }

        function r8(e) {
            let t, n = (0, r.c)(2),
                {
                    entry: o
                } = e;
            return n[0] !== o ? (t = (0, a.jsx)(r6, {
                entry: {
                    ...o,
                    onEditUserMessage: void 0,
                    onFork: void 0,
                    readAloudEnabled: !1
                },
                trackShownImpressions: !1
            }), n[0] = o, n[1] = t) : t = n[1], t
        }
        var r9 = n("qZWE"),
            oe = n("IBS2"),
            ot = n("PC5z"),
            on = n("lZ4W"),
            oa = n("ihvi"),
            or = n("nMdB"),
            oo = n("uYx2");
        let os = "[data-d-component]:not([data-d-text-flow])";
        class oi extends m.Component {
            static contextType = ax.a;
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
                let r = a.querySelector(os) ?? a,
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
                e.body.isConnected || (e.body = e.element.querySelector(os) ?? e.element);
                let n = () => (0, ax.b)(e.body.getBoundingClientRect().top - e.top, this.context),
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
                    this.held && a > 0 && this.props.ensureScrollRoomForAnchor?.(a), t.holdViewport(), t.compensateScrollToDistanceFromBottomPx(Math.max(0, (0, oo.b)(e.scrollElement) - a)), this.stopLayoutCorrection?.(), this.stopLayoutCorrection = (0, or.a)(e.body, this.context)
                }
            }
            render() {
                return this.shouldAnimateFold() ? this.presented.children : this.props.children
            }
        }
        var ol = n("aRto"),
            oc = n("WWSI"),
            od = n("U3Gy"),
            ou = n("mKTJ");
        let oh = (0, c.c)(em.a, e => {
                let {
                    get: t
                } = e;
                return t(r9.l)
            }, {
                isEqual: tW()
            }),
            op = (0, c.c)(em.a, e => {
                let {
                    get: t
                } = e;
                return t(ot.i)
            }, {
                isEqual: (e, t) => e.length === t.length && e.every((e, n) => e.messageId === t[n]?.messageId && e.turnId === t[n]?.turnId)
            });

        function om(e) {
            let t, n, o, s, i, l, d, u, h, p, g, v = (0, r.c)(50),
                {
                    conversationId: y,
                    entries: b,
                    viewportRef: x,
                    isTurnActive: C,
                    isInlinePreview: w,
                    readingPosition: _,
                    onVisibleContentReady: j,
                    responseSpacerState: S
                } = e,
                I = (0, c.z)(_.restoreState$),
                {
                    sharedConversationId: T
                } = (0, f.cb)(),
                E = (0, c.z)(null != T && "u" > typeof Element && "function" != typeof Element.prototype.moveBefore ? oh : null),
                P = (0, c.z)(op),
                A = (0, rS.b)(),
                M = (0, m.useContext)(oe.a);
            v[0] !== M || v[1] !== w || v[2] !== _ || v[3] !== A ? (t = () => {
                if (null != M && !w) return M(() => _.captureBeforeHide(A))
            }, n = [M, w, _, A], v[0] = M, v[1] = w, v[2] = _, v[3] = A, v[4] = t, v[5] = n) : (t = v[4], n = v[5]), (0, m.useLayoutEffect)(t, n), v[6] !== _ || v[7] !== A ? (o = () => _.restoreReadingPosition(A), v[6] = _, v[7] = A, v[8] = o) : o = v[8];
            let k = (0, eH.a)(o),
                [R, N] = (0, m.useState)(ov);
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
                B = b.findLastIndex(of),
                F = b[B]?.dilVisualSlotId,
                L = (0, ry.a)(null != F),
                z = b[B]?.turn.items[0];
            v[11] !== b || v[12] !== S?.voiceAutoScrollEnabled || v[13] !== F ? (i = null != F || S?.voiceAutoScrollEnabled ? b.findLastIndex(oy) : -1, v[11] = b, v[12] = S?.voiceAutoScrollEnabled, v[13] = F, v[14] = i) : i = v[14];
            let D = i,
                G = b[D],
                H = B > D;
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
                q = (0, m.useContext)(ol.a),
                K = b.at(-1),
                U = C || K?.turn.status === "in_progress";
            if (q?.aboveComposer != null && null != K && W.push(K.turnKey), null != T && E?.size)
                for (let e of b) e.turn.items.flatMap(og).some(e => "chatgpt-hosted-widget" === e.type && (0, ou.h)(e) && E.has((0, ou.e)(T, e.messageId))) && W.push(e.turnKey);
            let V = null == F ? void 0 : O.find(e => e.dilEditDisclosure?.slotId === F);
            V && W.push(V.turnKey, b[B].turnKey);
            let Q = H ? V : void 0;
            S?.voiceAutoScrollEnabled && null != G && W.push(G.turnKey);
            let $ = (0, c.x)(oa.b, y),
                Y = null == $ ? void 0 : b.findLast(e => {
                    let {
                        turn: t
                    } = e;
                    return t.messageIds.includes($)
                }),
                X = null == Y ? void 0 : (0, oa.a)(Y.turn.items);
            (0, c.x)(on.a, null == X ? null : {
                conversationId: y,
                userMessageId: X,
                steeredPromptId: Y === K ? $ : void 0
            }) && null != Y && W.push(Y.turnKey);
            let J = (0, c.x)(od.b, y);
            v[17] === Symbol.for("react.memo_cache_sentinel") ? (d = (e, t, n) => "adjacent-user-prompts" === (0, tA.d)(n[t - 1], e) ? {
                ...e,
                gapBeforePx: 4
            } : e, v[17] = d) : d = v[17];
            let Z = (0, oc.a)(O, J, y).map(d),
                ee = G?.turnKey,
                et = z?.type === "assistant-message" ? z.messageId : void 0,
                en = S?.ensureScrollRoomForAnchor,
                ea = K?.hasStreamingFinalText === !0,
                er = K?.streamingDilFinalId,
                eo = S?.getHeightPx,
                es = Q?.turnKey,
                ei = Q?.dilEditDisclosure?.count,
                el = Q?.turnKey ?? (null != F || S?.voiceAutoScrollEnabled ? G?.turnKey : void 0);
            v[18] !== S || v[19] !== x ? (u = (e, t) => {
                S?.onTurnLayoutReady(e, t), x.current?.restoreAfterMeasurement()
            }, v[18] = S, v[19] = x, v[20] = u) : u = v[20], v[21] !== S ? (h = e => {
                let {
                    heightDeltaPx: t
                } = e;
                S?.consumeGrowth(t ?? 0)
            }, v[21] = S, v[22] = h) : h = v[22];
            let ec = null == M || w ? void 0 : _.onRestoreStateChange;
            return v[23] !== I || v[24] !== j || v[25] !== _.onApiChange || v[26] !== k || v[27] !== W || v[28] !== eo || v[29] !== es || v[30] !== ei || v[31] !== el || v[32] !== u || v[33] !== h || v[34] !== ec || v[35] !== Z ? (p = (0, a.jsx)(rY.b, {
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
                RowComponent: r6
            }), v[23] = I, v[24] = j, v[25] = _.onApiChange, v[26] = k, v[27] = W, v[28] = eo, v[29] = es, v[30] = ei, v[31] = el, v[32] = u, v[33] = h, v[34] = ec, v[35] = Z, v[36] = p) : p = v[36], v[37] !== H || v[38] !== L || v[39] !== U || v[40] !== A || v[41] !== et || v[42] !== en || v[43] !== ea || v[44] !== er || v[45] !== p || v[46] !== ee || v[47] !== x || v[48] !== F ? (g = (0, a.jsx)(oi, {
                ref: x,
                exchangeKey: ee,
                visualId: F,
                visualOwnerId: et,
                active: H,
                ensureScrollRoomForAnchor: en,
                hasStreamingFinalText: ea,
                streamingDilFinalId: er,
                replyPending: U,
                reducedMotion: L,
                scrollController: A,
                children: p
            }), v[37] = H, v[38] = L, v[39] = U, v[40] = A, v[41] = et, v[42] = en, v[43] = ea, v[44] = er, v[45] = p, v[46] = ee, v[47] = x, v[48] = F, v[49] = g) : g = v[49], g
        }

        function og(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : [e]
        }

        function of(e) {
            return null != e.dilVisualSlotId
        }

        function ov() {
            return new Map
        }

        function oy(e) {
            return e.turn.items.some(e => "user-message" === e.type)
        }
        var ob = n("Ipgw"),
            ox = n("SBcL");

        function oC(e) {
            let t, n, o, s, i = (0, r.c)(18),
                {
                    conversationId: l
                } = e,
                d = (0, c.y)(eI.a),
                u = (0, g.a)(),
                h = (0, eD.a)(),
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
            let C = (0, m.useEffectEvent)(t);
            return (i[8] !== C ? (n = () => {
                C()
            }, i[8] = C, i[9] = n) : n = i[9], i[10] !== v || i[11] !== l || i[12] !== h || i[13] !== f || i[14] !== p || i[15] !== y ? (o = [l, p, f, v, y, h], i[10] = v, i[11] = l, i[12] = h, i[13] = f, i[14] = p, i[15] = y, i[16] = o) : o = i[16], (0, m.useEffect)(n, o), h) ? (i[17] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, ab.createPortal)((0, a.jsx)("span", {
                ref: b,
                className: "sr-only select-none",
                "aria-atomic": "true",
                "aria-live": "polite",
                role: "status"
            }), document.body), i[17] = s) : s = i[17], s) : null
        }
        var ow = n("JlMc"),
            o_ = n("TUMj"),
            oj = n("pgeU");
        let oS = (0, tO.a)(async () => (await Promise.all([n.e(747352), n.e(94193)]).then(n.bind(n, "FKl5"))).ClientDelightPresentation);

        function oI(e) {
            let t, n, o, s = (0, r.c)(7),
                {
                    conversationId: i
                } = e,
                l = (0, c.y)(eI.a),
                d = (0, c.x)(oj.a, i);
            return s[0] !== i || s[1] !== l ? (t = () => {
                let e = () => {
                        let e = l.get(oj.a, i);
                        null != e && (0, oj.b)(l, i, e, "hidden_or_unmounted")
                    },
                    t = () => {
                        "visible" !== document.visibilityState && e()
                    };
                return document.addEventListener("visibilitychange", t), window.addEventListener("pagehide", e), () => {
                    document.removeEventListener("visibilitychange", t), window.removeEventListener("pagehide", e), e()
                }
            }, n = [i, l], s[0] = i, s[1] = l, s[2] = t, s[3] = n) : (t = s[2], n = s[3]), (0, m.useEffect)(t, n), s[4] !== i || s[5] !== d ? (o = null == d ? null : (0, a.jsx)(oS, {
                conversationId: i,
                effect: d
            }, d.id), s[4] = i, s[5] = d, s[6] = o) : o = s[6], o
        }
        var oT = n("Pyg2"),
            oE = n("ZIh4"),
            oP = n("nKJ6"),
            oA = n("AoaR"),
            oM = n("fDfx"),
            ok = n("Xslx"),
            oR = n("EEop"),
            oN = n("bxvp"),
            oO = n("VBQS"),
            oB = n("hsIu");
        let oF = (0, c.d)(eI.a, (e, t) => {
            let {
                get: n
            } = t;
            if (null == e || !n(oN.c) || null == n(S.f) || null == n(S.k)) return null;
            let {
                data: a,
                isError: r
            } = n(oB.b);
            if (r || a?.project_id !== e) return null;
            let {
                data: o,
                isError: s
            } = n(oR.l, (0, oO.a)());
            return s ? null : (0, oO.b)(o)
        });
        var oL = n("FmJi"),
            oz = n("sIex"),
            oD = n("Z2JT"),
            oG = n("Fjd0"),
            oH = n("VPBa"),
            oW = n("PWXi"),
            oq = n("HgLj"),
            oK = n("hNLE"),
            oU = n("f6KK"),
            oV = n("JPXZ"),
            oQ = n("zWHk");

        function o$(e) {
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
                if (!u && t && y.current !== v) return (0, oQ.b)(d.view, (e, t) => {
                    e && t?.getMeta("addToHistory") !== !1 && d.consumeLocationPromptPrefill(v) && b(!1)
                })
            }, c[10] = b, c[11] = d, c[12] = u, c[13] = v, c[14] = t, c[15] = o) : o = c[15], c[16] !== d || c[17] !== u || c[18] !== v || c[19] !== t ? (s = [d, u, v, t], c[16] = d, c[17] = u, c[18] = v, c[19] = t, c[20] = s) : s = c[20], (0, m.useLayoutEffect)(o, s), c[21] !== b || c[22] !== d || c[23] !== u || c[24] !== v || c[25] !== t || c[26] !== g ? (i = () => {
                if (!u || !t || y.current === v) return;
                y.current = v;
                let e = d.consumeLocationPromptPrefill(v);
                if (b(e), !e) return;
                let {
                    view: n
                } = d, a = t.replace(/\r\n/g, "\n"), r = "codex-app" === g ? (0, oV.f)({
                    schema: n.state.schema,
                    text: a,
                    restoreOnlySitesAndPluginMentions: !0
                }) : (0, oV.e)({
                    schema: n.state.schema,
                    text: a
                }), o = n.state.tr.replaceWith(0, n.state.doc.content.size, r.content);
                o.setSelection(oU.h.atEnd(o.doc)), n.dispatch(o)
            }, c[21] = b, c[22] = d, c[23] = u, c[24] = v, c[25] = t, c[26] = g, c[27] = i) : i = c[27], c[28] !== d || c[29] !== u || c[30] !== v || c[31] !== t || c[32] !== g ? (l = [d, u, v, t, g], c[28] = d, c[29] = u, c[30] = v, c[31] = t, c[32] = g, c[33] = l) : l = c[33], (0, m.useLayoutEffect)(i, l), null
        }
        var oY = n("a4V1"),
            oX = n("KidQ");
        let oJ = {
            addInitialContentToHistory: !0,
            enableCodeBlocks: !1,
            enableSelectedTextLinks: !1,
            enableFileMentions: !0,
            enableSkillMentions: !1,
            enableSlashCommands: {
                triggers: ["/"]
            }
        };

        function oZ(e) {
            let t, n, o, s, i, l = (0, r.c)(15),
                {
                    children: d,
                    draftKey: u,
                    enableInlineSystemHints: h
                } = e,
                p = (0, c.y)(eI.a),
                g = (0, m.useContext)(oz.a),
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
            }, l[6] = g, l[7] = o) : o = l[7], l[8] !== d ? (s = e => null == e ? null : d(e), l[8] = d, l[9] = s) : s = l[9], l[10] !== t || l[11] !== n || l[12] !== o || l[13] !== s ? (i = (0, a.jsx)(oX.a, {
                controllerOptions: oJ,
                initialSuggestionOptions: t,
                getInitialContent: n,
                getInitialInput: o,
                children: s
            }), l[10] = t, l[11] = n, l[12] = o, l[13] = s, l[14] = i) : i = l[14], i
        }
        var o0 = n("wnpN"),
            o1 = n("rcFj"),
            o2 = n("vpdG"),
            o3 = n("V8xe");

        function o4(e) {
            let t, n, o, s = (0, r.c)(11),
                i = (0, m.useContext)(oz.a);
            if (null == i || i.conversationId !== e.conversationId) {
                let t;
                return s[0] !== e ? (t = (0, a.jsx)(o5, {
                    ...e
                }), s[0] = e, s[1] = t) : t = s[1], t
            }
            s[2] !== e.conversationId || s[3] !== e.isImageEditComposer ? (t = e.isImageEditComposer ? {
                conversationId: e.conversationId,
                surface: "image-edit"
            } : e.conversationId, s[2] = e.conversationId, s[3] = e.isImageEditComposer, s[4] = t) : t = s[4];
            let l = !e.isWorkConversation;
            return s[5] !== e ? (n = t => (0, a.jsx)(o5, {
                ...e,
                initialController: t
            }), s[5] = e, s[6] = n) : n = s[6], s[7] !== t || s[8] !== l || s[9] !== n ? (o = (0, a.jsx)(oZ, {
                draftKey: t,
                enableInlineSystemHints: l,
                children: n
            }), s[7] = t, s[8] = l, s[9] = n, s[10] = o) : o = s[10], o
        }

        function o5(e) {
            let t, n, o, s, i, l, d, u, h, p, v, y, b, x, C, w, _, j, S, I = (0, r.c)(84),
                {
                    composerRef: T,
                    initialController: E,
                    ...P
                } = e,
                A = (0, c.y)(ep.a),
                M = (0, c.x)(oE.d, P.isTemporaryChat),
                {
                    conversationId: k,
                    isFullscreenComposer: R
                } = P,
                N = (0, g.a)(),
                {
                    state: O
                } = (0, f.Y)(),
                B = (0, c.x)(tS, k),
                F = (0, c.x)(tm.T, k),
                L = !(!P.disabled && !P.isSharedConversation && !P.isWorkConversation && !P.isTemporaryChat && !P.isImageEditComposer && (0, t6.a)(F)) ? null : F,
                z = (0, c.x)(null == P.requiredSystemHints ? oF : null, L);
            I[0] !== z || I[1] !== P.requiredSystemHints ? (t = P.requiredSystemHints ?? (null == z ? void 0 : [z]), I[0] = z, I[1] = P.requiredSystemHints, I[2] = t) : t = I[2];
            let D = t;
            I[3] !== z || I[4] !== k || I[5] !== A ? (n = () => {
                if (null != z) {
                    let e, t;
                    return e = (0, ok.b)(A, k, [z]), t = (0, oM.i)(A, {
                        draftKey: k,
                        isTemporaryChat: !1
                    }), () => {
                        if (e(), A.get(ok.a, k).includes(z)) return;
                        let n = A.get(t_.x, k).filter(e => e !== z && e !== `plugin:${oA.d}`);
                        (0, t_.X)(A, k, n, t)
                    }
                }
            }, o = [A, k, z], I[3] = z, I[4] = k, I[5] = A, I[6] = n, I[7] = o) : (n = I[6], o = I[7]), (0, m.useEffect)(n, o);
            let G = (0, c.x)(eX.c, k);
            I[8] !== G || I[9] !== P.isSharedConversation || I[10] !== P.isWorkConversation || I[11] !== F ? (s = !P.isSharedConversation && !P.isWorkConversation && !(0, t6.a)(F) && !G, I[8] = G, I[9] = P.isSharedConversation, I[10] = P.isWorkConversation, I[11] = F, I[12] = s) : s = I[12];
            let H = s,
                W = H && !P.disabled && !P.isSubmitDisabled && !P.isImageEditComposer,
                q = H ? B : void 0;
            I[13] !== k || I[14] !== P.isImageEditComposer ? (i = P.isImageEditComposer ? {
                conversationId: k,
                surface: "image-edit"
            } : k, I[13] = k, I[14] = P.isImageEditComposer, I[15] = i) : i = I[15];
            let K = i;
            I[16] !== k || I[17] !== K || I[18] !== E ? (l = {
                composerController: E,
                conversationId: k,
                draftKey: K
            }, I[16] = k, I[17] = K, I[18] = E, I[19] = l) : l = I[19];
            let U = (0, o2.a)(l),
                V = (0, o1.a)(U, k, !P.isInlinePreview && !P.disabled, P.workspace && "tpp", q?.id ?? F),
                Q = (0, m.useContext)(oz.a),
                $ = (0, m.useRef)(!1);
            I[20] !== K || I[21] !== Q || I[22] !== E || I[23] !== P.isTemporaryChat || I[24] !== A ? (d = e => {
                null == e || null == E || $.current || ($.current = !0, (0, t_.Y)(A, K, E.getPersistedText(), {
                    isTemporaryChat: P.isTemporaryChat
                }), Q?.onAdopt())
            }, I[20] = K, I[21] = Q, I[22] = E, I[23] = P.isTemporaryChat, I[24] = A, I[25] = d) : d = I[25];
            let Y = (0, eH.a)(d);
            I[26] !== Y || I[27] !== T ? (u = (0, oq.a)(T, Y), I[26] = Y, I[27] = T, I[28] = u) : u = I[28];
            let X = u,
                J = (0, m.useContext)(o_.a),
                Z = (0, c.w)(oY.a, k),
                ee = (0, c.x)(tm.eb, k),
                et = (0, c.x)(tm.ab, k),
                en = (0, c.x)(t_.j, k);
            I[29] !== et ? (h = (0, tm.Bb)(et), I[29] = et, I[30] = h) : h = I[30];
            let ea = h,
                er = (0, c.z)(e2.l.activeTab$);
            if (I[31] !== er || I[32] !== R || I[33] !== ea || I[34] !== J) {
                let e = J?.turn.items.flatMap(o9);
                p = R && er?.tabType.kind === oH.a && "generatedImages" in er.props && null != er.props.generatedImages && !ea && null != J && "in_progress" !== J.turn.status && !J.turn.hasPendingAssistantReply && !J.showPendingLoadingMessage && !e?.some(o8) && (null != J.errorMessage || e?.some(o7)) ? J.turn.messageIds.at(-1) ?? J.turnKey : null, I[31] = er, I[32] = R, I[33] = ea, I[34] = J, I[35] = p
            } else p = I[35];
            let eo = p,
                es = (0, m.useRef)(null);
            I[36] !== eo || I[37] !== A ? (v = () => {
                null != eo && eo !== es.current && (es.current = eo, A.set(oD.a, "expanded"))
            }, y = [eo, A], I[36] = eo, I[37] = A, I[38] = v, I[39] = y) : (v = I[38], y = I[39]), (0, m.useEffect)(v, y);
            let ei = (0, c.w)(o0.a, R ? k : null);
            I[40] !== z || I[41] !== L || I[42] !== U || I[43] !== k || I[44] !== W || I[45] !== K || I[46] !== V || I[47] !== N || I[48] !== R || I[49] !== X || I[50] !== M || I[51] !== P || I[52] !== D || I[53] !== A || I[54] !== q || I[55] !== O?.libraryFileCreation || I[56] !== F ? (b = e => (0, a.jsxs)(oG.a, {
                children: [R && P.trackReadState && !e?.isHidden ? (0, a.jsx)(ow.a, {
                    conversationId: k,
                    isTranscriptVisible: e?.isCompact === !1 && !e.isMinimized
                }) : null, P.aboveComposerContent, (0, a.jsx)(oL.a, {
                    children: (0, a.jsx)(oK.a, {
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
                        browserConversationId: (0, oP.getThreadBrowserConversationId)(A) ?? k,
                        composerController: U,
                        conversationId: k,
                        requiredSystemHints: D,
                        hideSystemHints: null != P.requiredSystemHints,
                        getSubmissionGuard: null != z ? () => () => A.get(tm.T, k) === F && A.get(oF, L) === z : void 0,
                        draftKey: K,
                        onPromptChange: M,
                        selectedCustomGpt: q,
                        targetGizmoId: q?.id,
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
                        getExtraDeveloperInstructions: !P.isInlinePreview && O?.libraryFileCreation && !P.isTemporaryChat ? o6 : void 0,
                        isTemporaryChat: P.isTemporaryChat,
                        placeholder: P.disabled && !1 !== P.readOnlyPlaceholder ? P.readOnlyPlaceholder ?? N.formatMessage(o3.a.readOnlyConversationPlaceholder) : void 0,
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
            }), I[40] = z, I[41] = L, I[42] = U, I[43] = k, I[44] = W, I[45] = K, I[46] = V, I[47] = N, I[48] = R, I[49] = X, I[50] = M, I[51] = P, I[52] = D, I[53] = A, I[54] = q, I[55] = O?.libraryFileCreation, I[56] = F, I[57] = b) : b = I[57];
            let el = b;
            I[58] !== A ? (x = () => {
                (0, rg.K)(A, "conversation")
            }, C = () => {
                (0, rg.K)(A, "conversation")
            }, I[58] = A, I[59] = x, I[60] = C) : (x = I[59], C = I[60]);
            let ec = !P.isInlinePreview && !P.disabled && !P.isSubmitDisabled;
            I[61] !== U || I[62] !== ec ? (w = (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(o$, {
                    composerController: U,
                    enabled: ec
                })
            }), I[61] = U, I[62] = ec, I[63] = w) : w = I[63];
            let ed = R ? "floating" : "pane",
                eu = P.disabled || P.awaitingGptContinuation,
                eh = null == J && !ea,
                em = !P.isInlinePreview && null == P.workspace,
                eg = en || ea ? "loading" : "idle";
            return I[64] !== eg ? (_ = {
                type: eg,
                unread: !1
            }, I[64] = eg, I[65] = _) : _ = I[65], I[66] !== ei || I[67] !== P.isHidden || I[68] !== P.renderTranscript || I[69] !== el || I[70] !== Z || I[71] !== ed || I[72] !== eu || I[73] !== eh || I[74] !== em || I[75] !== _ || I[76] !== ee ? (j = (0, a.jsx)(oT.a, {
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
            }), I[66] = ei, I[67] = P.isHidden, I[68] = P.renderTranscript, I[69] = el, I[70] = Z, I[71] = ed, I[72] = eu, I[73] = eh, I[74] = em, I[75] = _, I[76] = ee, I[77] = j) : j = I[77], I[78] !== k || I[79] !== x || I[80] !== C || I[81] !== w || I[82] !== j ? (S = (0, a.jsxs)("div", {
                className: "contents",
                "data-map-composer-conversation": k,
                onMouseDownCapture: x,
                onFocusCapture: C,
                children: [w, j]
            }), I[78] = k, I[79] = x, I[80] = C, I[81] = w, I[82] = j, I[83] = S) : S = I[83], S
        }

        function o6() {
            return [oW.a]
        }

        function o7(e) {
            return "assistant-message" === e.type && "" !== e.content.trim()
        }

        function o8(e) {
            return "generated-image" === e.type || "chatgpt-delayed-image-gen" === e.type
        }

        function o9(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : [e]
        }
        var se = n("ygKd"),
            st = n("KSir"),
            sn = n("QPeR"),
            sa = n("M3Kf");

        function sr(e) {
            let t, n, o, i, l, d, u = (0, r.c)(21),
                {
                    conversationId: h
                } = e,
                p = (0, c.y)(eI.a),
                m = (0, c.x)(tm.j, h),
                g = (0, c.z)(a4.b),
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
                    await (0, a3.a)(p, m, n)
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
                isError: C,
                refetch: w
            } = (0, s.a)(l);
            return u[18] !== C || u[19] !== w ? (d = C ? (0, a.jsx)(tR.a, {
                color: "secondary",
                onClick: () => void w(),
                children: (0, a.jsx)(ey.a, {
                    id: "chatgpt.pagination.retryMessage",
                    defaultMessage: "Retry loading this message"
                })
            }) : null, u[18] = C, u[19] = w, u[20] = d) : d = u[20], d
        }
        var so = n("TmaW"),
            ss = n("K45w"),
            si = n("jCHb"),
            sl = n("V8uZ");

        function sc(e) {
            let t = e.querySelector("[data-dil-message-id]") ?? e;
            return t.checkVisibility() && null == t.querySelector("[data-dil-render-failed]") && t.innerText.trim().length > 0
        }
        n("CSxw");
        var sd = n("NqfB"),
            su = n("JEFL"),
            sh = n("moBM");
        let sp = '[data-markdown-text-style="assistant-message"]',
            sm = (0, c.d)(eI.a, (e, t) => {
                let {
                    conversationId: n,
                    messageId: a
                } = e, {
                    get: r
                } = t;
                return null == a ? null : r(tm.N, n)?.[a]?.message ?? null
            });

        function sg(e) {
            let t, n, o = (0, r.c)(5),
                s = `[data-chatgpt-conversation-selection-target="${e.conversationId}"]`;
            return o[0] !== e ? (t = t => (0, a.jsx)(sf, {
                ...e,
                selection: t
            }), o[0] = e, o[1] = t) : t = o[1], o[2] !== s || o[3] !== t ? (n = (0, a.jsx)(sd.a, {
                align: "start",
                targetSelector: s,
                children: t
            }), o[2] = s, o[3] = t, o[4] = n) : n = o[4], n
        }

        function sf(e) {
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
                C = (0, eR.f)("473637331"),
                w = (0, c.z)(sh.b),
                _ = (0, c.x)(tm.y, p);
            h[0] !== _ || h[1] !== w || h[2] !== y ? (t = w && "tpp" === _ && "chatgpt-thread" === y.value.routeKind && null == y.value.workSideChat && !0, h[0] = _, h[1] = w, h[2] = y, h[3] = t) : t = h[3];
            let j = t;
            h[4] !== p || h[5] !== v.selectionRange ? (o = function(e) {
                let {
                    conversationId: t,
                    range: n
                } = e, a = n.startContainer instanceof Element ? n.startContainer : n.startContainer.parentElement, r = n.endContainer instanceof Element ? n.endContainer : n.endContainer.parentElement, o = a?.closest(sp);
                if (n.collapsed || null == o || !o.isConnected || o !== r?.closest(sp)) return null;
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
            let T = (0, c.x)(sm, s),
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
            } : void 0, h[10] = j, h[11] = y, h[12] = i) : i = h[12], h[13] !== P || h[14] !== C || h[15] !== f || h[16] !== v.selectionRange || h[17] !== S ? (l = !P || C ? e => {
                f(e, S?.messageId, null == S ? void 0 : function(e, t, n) {
                    let a = 0;
                    for (let r of rF(e, n.trim())) {
                        if (0 >= t.compareBoundaryPoints(Range.START_TO_START, r)) break;
                        a++
                    }
                    return a
                }(S.markdownElement, v.selectionRange, e))
            } : void 0, h[13] = P, h[14] = C, h[15] = f, h[16] = v.selectionRange, h[17] = S, h[18] = l) : l = h[18], h[19] !== P || h[20] !== p || h[21] !== b || h[22] !== y || h[23] !== S ? (d = P ? e => {
                Promise.all([n.e(753405), n.e(321957), n.e(585419), n.e(877700), n.e(353230), n.e(81461), n.e(882456), n.e(145049), n.e(744644), n.e(909395), n.e(212487), n.e(17983), n.e(167649), n.e(509282), n.e(523433), n.e(987463), n.e(282285)]).then(n.bind(n, "zRlR")).then(t => {
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
            } : void 0, h[19] = P, h[20] = p, h[21] = b, h[22] = y, h[23] = S, h[24] = d) : d = h[24], h[25] !== v.selectedText || h[26] !== i || h[27] !== l || h[28] !== d ? (u = (0, a.jsx)(su.a, {
                conversationTerminology: "chat",
                selectedText: v.selectedText,
                onOpenSideChat: i,
                onAddSelectedText: l,
                onMoreDetails: d
            }), h[25] = v.selectedText, h[26] = i, h[27] = l, h[28] = d, h[29] = u) : u = h[29], u
        }
        var sv = n("SEBt"),
            sy = n("JUxu");
        let sb = (0, m.lazy)(async () => ({
            default: (await Promise.resolve().then(n.bind(n, "taaw"))).CodexThreadReportDialog
        }));

        function sx(e) {
            let t, n, o, s, i = (0, r.c)(11),
                {
                    sharedConversationId: l
                } = e,
                d = (0, c.y)(eI.a),
                u = (0, c.x)(aQ.f, (0, m.useContext)(j.a));
            if (null != u) {
                let e, t;
                return i[0] !== u ? (e = (0, aQ.b)(u), i[0] = u, i[1] = e) : e = i[1], i[2] !== e ? (t = (0, a.jsx)(sy.a, {
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
                (0, nL.f)(d, sb, {
                    reportEntityType: "share_link",
                    threadId: l,
                    onCloseAutoFocus: e => {
                        e.preventDefault();
                        let n = t.ownerDocument.activeElement;
                        t.isConnected && (n === t.ownerDocument.body || e.target instanceof HTMLElement && e.target.contains(n)) && t.focus({
                            preventScroll: !0
                        })
                    }
                }), (0, sv.d)(d, l)
            }, i[5] = d, i[6] = l, i[7] = n) : n = i[7], i[8] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, a.jsx)(ey.a, {
                id: "chatgptConversations.sharedConversation.reportButton",
                defaultMessage: "Report conversation"
            }), i[8] = o) : o = i[8], i[9] !== n ? (s = (0, a.jsxs)("div", {
                className: "flex flex-col items-center gap-1 text-center text-xs select-none",
                children: [t, (0, a.jsx)(tR.a, {
                    className: "font-semibold",
                    color: "ghostActive",
                    onClick: n,
                    children: o
                })]
            }), i[9] = n, i[10] = s) : s = i[10], s
        }
        var sC = n("AORd"),
            sw = n("cP1f");

        function s_(e) {
            let {
                turn: t
            } = e;
            return t.items.some(sj)
        }

        function sj(e) {
            return "assistant-message" === e.type || "generated-image" === e.type && null != e.src
        }

        function sS(e) {
            let t, n, o, s, i, l, d, u, h, p, g, f, v, y, b, x, C, w, _, S, I, T, E, A, M, k, R, N, O, B, F, L, z, D, G = (0, r.c)(228),
                {
                    ref: H,
                    printTitle: W,
                    trackReadState: q,
                    trackShownImpressions: K,
                    composerRef: U,
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
                    onRetryLoad: eC,
                    hasRenderableTurns: ew,
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
                    isWorkConversation: eF,
                    onboardingPrelude: eL,
                    scrollStateConversationId: ez,
                    initialResponsePlacementKey: eD,
                    sharedConversationId: eG,
                    sharedPostRegulatedConnectorKind: eq,
                    showComposer: eK,
                    archivedPreviewFooter: eU,
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
                e3 = (0, c.x)(aQ.f, (0, m.useContext)(j.a)),
                e4 = (0, c.z)(eh.a),
                e5 = (0, c.x)(eW.a, Y),
                e6 = V?.fullscreenContent != null ? "content" : "workspace",
                e7 = (0, P.a)(eo ? "embedded" : e6),
                e8 = (0, c.z)(sn.a),
                e9 = eK && e8?.source.turnContext.conversationId !== J,
                te = "floating" === e7.placement,
                [tt, tn] = (0, m.useState)(!1),
                ta = tt && !e7.isHidden && !er,
                tr = V?.fullscreenContent != null || te && ta ? "floating" : "main",
                to = (0, c.z)(se.h),
                ts = em && null == eG && null == e3 && null == eU,
                ti = !eA && !eO && !ex && eT && !ew,
                tl = (0, c.x)(tm.i, Y),
                tc = eZ && ts && ti && null == tl && !e5 && !te,
                td = null == eg ? "centered-home" : "home",
                tu = eZ && !e5 && (!ts || !eT),
                th = (0, m.useRef)(null),
                tp = (0, m.useRef)(null),
                [tg, tf] = (0, m.useState)(null),
                tv = (0, ax.c)(),
                ty = eo ? null : ez;
            G[0] !== ty || G[1] !== tg || G[2] !== tv ? (t = () => ({
                conversationKey: ty,
                responseSpacer: tg,
                windowZoom: tv
            }), G[0] = ty, G[1] = tg, G[2] = tv, G[3] = t) : t = G[3];
            let tb = (0, eH.a)(t);
            G[4] !== e0 || G[5] !== ty || G[6] !== tb ? (n = () => (function(e, t, n) {
                let a = (0, c.u)(eI.a, null == t ? 0 : e.get(ox.a, t)),
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
                        null != a && e.set(ox.a, a, (0, oo.a)(t, r?.getHeightPx() ?? 0))
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
                            if ((0, ax.b)(c.height, e) <= Math.max(0, -s.offset)) return;
                            d = o.scrollTop + (0, ax.b)(c.top - o.getBoundingClientRect().top, e) - s.offset
                        }
                        let u = o.scrollHeight - o.clientHeight;
                        d <= u && ((null == s || null != c || e.get(r)?.getEntryGeometry(s.key) == null) && l(), t.compensateScrollToDistanceFromBottomPx(u - Math.max(0, d)))
                    },
                    captureBeforeHide: function(e) {
                        let t = e.getScrollElement();
                        return null != t && t.clientHeight > 0 && (s = i ?? (e.shouldFollowContentGrowth() && 1 >= (0, oo.b)(t) ? "bottom" : function(e, t) {
                            let n = e.scrollTop,
                                a = e.getBoundingClientRect();
                            for (let r of e.querySelectorAll("[data-turn-key]")) {
                                let e = r.getBoundingClientRect(),
                                    o = r.dataset.turnKey;
                                if (null != o && e.height > 0 && e.bottom > a.top && e.top < a.bottom) return {
                                    top: n,
                                    turn: {
                                        key: o,
                                        offset: (0, ax.b)(e.top - a.top, t)
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
            })(e0, ty, tb), G[4] = e0, G[5] = ty, G[6] = tb, G[7] = n) : n = G[7];
            let [tx] = (0, m.useState)(n), tC = (0, c.z)(tx.api$), tw = (0, c.z)(tx.restoreState$), t_ = (0, c.z)(tx.initialOffset$), {
                cancelPendingRestore: tj
            } = tx, tS = null == tw ? eD : null, [tT, tE] = (0, m.useState)(!1);
            G[8] !== ev ? (o = () => ev, G[8] = ev, G[9] = o) : o = G[9];
            let tP = (0, eH.a)(o),
                {
                    revealLatestResponse: tA,
                    scrollToSearchTurn: tM,
                    scrollToDelayedImageCard: tk
                } = ((F = (0, r.c)(18))[0] !== tC || F[1] !== ev ? (M = () => ({
                    async scrollToMessage(e) {
                        let t = ev.find(t => {
                            let {
                                turn: n
                            } = t;
                            return n.messageIds.includes(e)
                        });
                        null != t && null != tC && await tC.scrollToKey(t.turnKey, void 0, {
                            align: "top"
                        })
                    }
                }), k = [ev, tC], F[0] = tC, F[1] = ev, F[2] = M, F[3] = k) : (M = F[2], k = F[3]), (0, m.useImperativeHandle)(H, M, k), F[4] !== tC || F[5] !== ev ? (R = (e, t) => (0, rp.c)(tC, ev.find(t => {
                    let {
                        id: n
                    } = t;
                    return n === e
                })?.turnKey, t), F[4] = tC, F[5] = ev, F[6] = R) : R = F[6], L = (0, eH.a)(R), F[7] !== tC || F[8] !== Y || F[9] !== ev ? (N = async e => {
                    let t = ev.find(t => {
                        let {
                            turn: n
                        } = t;
                        return n.messageIds.includes(e)
                    });
                    null != t && null != tC && await tC.scrollToKey(t.turnKey, t => t.querySelector(`[id="${CSS.escape(`delayed-image-gen-${Y}-${e}`)}"]`), {
                        align: "center"
                    })
                }, F[7] = tC, F[8] = Y, F[9] = ev, F[10] = N) : N = F[10], z = (0, eH.a)(N), F[11] !== tC?.scrollToKey || F[12] !== ev ? (O = function(e) {
                    let t = ev.findLast(s_);
                    return (0, sw.a)(tC?.scrollToKey, t?.turnKey, e)
                }, F[11] = tC?.scrollToKey, F[12] = ev, F[13] = O) : O = F[13], D = O, F[14] !== D || F[15] !== z || F[16] !== L ? (B = {
                    revealLatestResponse: D,
                    scrollToSearchTurn: L,
                    scrollToDelayedImageCard: z
                }, F[14] = D, F[15] = z, F[16] = L, F[17] = B) : B = F[17], B);
            G[10] === Symbol.for("react.memo_cache_sentinel") ? (s = e => (0, rp.a)(tp.current, e), G[10] = s) : s = G[10];
            let tR = (0, eH.a)(s),
                tN = `chatgpt:${Y}`;
            if (G[11] !== tj || G[12] !== Y || G[13] !== tP || G[14] !== tR || G[15] !== eN || G[16] !== e1 || G[17] !== tM || G[18] !== eG || G[19] !== e3 || G[20] !== tN) {
                let e;
                G[22] !== Y || G[23] !== eN || G[24] !== e1 || G[25] !== eG || G[26] !== e3 ? (e = async e => {
                    let t = e1.get(tm.j, Y);
                    !eN && null == eG && null == e3 && null != t && e1.get(a4.b) > 0 && await (0, a3.a)(e1, t, e)
                }, G[22] = Y, G[23] = eN, G[24] = e1, G[25] = eG, G[26] = e3, G[27] = e) : e = G[27], i = function(e) {
                    let {
                        getTurns: t,
                        routeContextId: n,
                        scrollAdapter: a,
                        ensureHistory: r
                    } = e, o = (0, rU.a)({
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
                                            unitId: (0, rI.a)("user", t),
                                            text: n
                                        }]
                                    }
                                    if ("assistant-message" === e.type) {
                                        let n = (0, rQ.a)(e.content, aW.b),
                                            a = [],
                                            r = "";
                                        for (; e.content.includes(r);) r += "";
                                        let o = (0, rK.a)(function e(t, n, a, r) {
                                                let o = "",
                                                    s = 0;
                                                for (let i of t) {
                                                    let t = n.indexOf(i.raw, s); - 1 !== t && (o += n.slice(s, t), o += function(t, n, a) {
                                                        var r, o;
                                                        if ("math" === t.type && "text" in t && "string" == typeof t.text) return a(t.text);
                                                        if ("codexDirective" === (r = t).type && "name" in r && "string" == typeof r.name && "attributes" in r && null != r.attributes && "object" == typeof r.attributes) return function(e, t) {
                                                            if (e.name === aW.a) {
                                                                let n = (0, r$.a)(e.attributes),
                                                                    a = (0, r$.b)(e.attributes),
                                                                    r = null != n ? t[n] : null == a ? void 0 : t.find(e => (0, aW.l)(e) === a);
                                                                if (null == r) return "";
                                                                let o = (0, aW.i)(r);
                                                                return "hidden" === o || "block" === o ? "" : (0, aW.j)(r) ?? ""
                                                            }
                                                            return e.name === rq.a ? (0, rV.a)(e.attributes, "label") ?? "" : e.name === rq.b || e.name === rq.c ? "" : e.name === rW.a ? e.text ?? "" : null
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
                                            unitId: (0, rI.a)("assistant", t),
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
                }), G[11] = tj, G[12] = Y, G[13] = tP, G[14] = tR, G[15] = eN, G[16] = e1, G[17] = tM, G[18] = eG, G[19] = e3, G[20] = tN, G[21] = i
            } else i = G[21];
            let tO = i;
            G[28] !== tO.contextId ? (l = {
                containerRef: tp,
                contextId: tO.contextId
            }, G[28] = tO.contextId, G[29] = l) : l = G[29], (0, rf.a)(l);
            let tB = e9 && null == eU,
                tF = e4 && tB && !te,
                tL = (0, ry.a)();
            G[30] !== Y || G[31] !== ew || G[32] !== ea || G[33] !== X || G[34] !== tL ? (d = {
                conversationId: Y,
                sectionIndex: X,
                hasRenderableTurns: ew,
                isCoveredByFloatingPanel: ea,
                shouldReduceMotion: tL,
                containerRef: tp
            }, G[30] = Y, G[31] = ew, G[32] = ea, G[33] = X, G[34] = tL, G[35] = d) : d = G[35];
            let tz = function(e) {
                    let t, n, a, o = (0, r.c)(12),
                        {
                            conversationId: s,
                            sectionIndex: i,
                            hasRenderableTurns: l,
                            isCoveredByFloatingPanel: c,
                            shouldReduceMotion: d,
                            containerRef: u
                        } = e,
                        h = (0, ss.a)(0);
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
                                Array.from(n.querySelectorAll('[data-markdown-text-style="assistant-message"]')).some(sc) && 0 !== n.clientWidth && (o.disconnect(), h.set(a * n.clientWidth), e = (0, si.a)(h, 0, {
                                    duration: .3,
                                    ease: sl.d
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
                tD = tB && te,
                [tG, tH] = (0, m.useState)(null),
                [tW, tq] = (0, m.useState)(null),
                [tK, tU] = (0, m.useState)(null),
                tV = eM && tB && !e_ && !te && !e4,
                [tQ, t$] = (0, m.useState)(null);
            G[36] !== e$ || G[37] !== Y || G[38] !== ew || G[39] !== eN || G[40] !== eq || G[41] !== eK ? (u = eK && !e$ ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(ru.BrowserComposerDisclaimer, {
                    supportsMessageDisclosures: !0,
                    conversationId: Y,
                    hasUserMessage: ew,
                    isTemporaryChat: eN,
                    regulatedConnectorKindOverride: eq
                })
            }) : void 0, G[36] = e$, G[37] = Y, G[38] = ew, G[39] = eN, G[40] = eq, G[41] = eK, G[42] = u) : u = G[42];
            let tY = u;
            G[43] !== Y || G[44] !== eb || G[45] !== ew || G[46] !== e_ || G[47] !== ek || G[48] !== eF || G[49] !== eK || G[50] !== eV ? (h = ew ? null : (0, a.jsx)(rG.a, {
                conversationId: Y,
                errorMessage: eb,
                isWorkConversation: eF,
                showPendingLoadingMessage: eV,
                showRequestUserInputStatus: eK && !e_ && !ek
            }), G[43] = Y, G[44] = eb, G[45] = ew, G[46] = e_, G[47] = ek, G[48] = eF, G[49] = eK, G[50] = eV, G[51] = h) : h = G[51];
            let tX = h;
            G[52] !== Y || G[53] !== eF || G[54] !== eG || G[55] !== e3 ? (p = eF && null == eG && null == e3 ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(rd, {
                    conversationId: Y
                }, Y)
            }) : null, G[52] = Y, G[53] = eF, G[54] = eG, G[55] = e3, G[56] = p) : p = G[56];
            let tJ = p;
            G[57] !== eU || G[58] !== tJ ? (g = null != eU ? (0, a.jsxs)(a.Fragment, {
                children: [tJ, eU]
            }) : null, G[57] = eU, G[58] = tJ, G[59] = g) : g = G[59];
            let tZ = g;
            G[60] !== ee || G[61] !== tZ || G[62] !== e$ || G[63] !== J || G[64] !== Z || G[65] !== U || G[66] !== Y || G[67] !== ec || G[68] !== tY || G[69] !== tX || G[70] !== ev || G[71] !== tJ || G[72] !== tG || G[73] !== eQ || G[74] !== ex || G[75] !== ew || G[76] !== ei || G[77] !== e4 || G[78] !== e_ || G[79] !== eA || G[80] !== ea || G[81] !== er || G[82] !== te || G[83] !== to || G[84] !== eo || G[85] !== eM || G[86] !== ek || G[87] !== eN || G[88] !== eF || G[89] !== eJ || G[90] !== ej || G[91] !== tx || G[92] !== tV || G[93] !== en || G[94] !== tg || G[95] !== eR || G[96] !== tA || G[97] !== e7.isHidden || G[98] !== eG || G[99] !== e3 || G[100] !== e9 || G[101] !== el || G[102] !== tD || G[103] !== tF || G[104] !== q || G[105] !== K || G[106] !== tr || G[107] !== eY || G[108] !== V ? (f = tZ ?? (e9 ? (0, a.jsxs)(o_.a.Provider, {
                value: ev.at(-1) ?? null,
                children: [er || te ? null : (0, a.jsx)(rv.a, {
                    onNavigate: tA
                }, Y), te ? null : Z, (0, a.jsx)(o4, {
                    requiredSystemHints: en,
                    composerRef: U,
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
                            ref: tU,
                            className: "empty:hidden"
                        }) : null, ee, !eA && !ex && ew && !e$ && eY, e4 ? null : eQ, tD && tX]
                    }),
                    isFullscreenComposer: te,
                    isHidden: e7.isHidden,
                    trackReadState: q && !ea,
                    trackShownImpressions: K && !ea,
                    isSharedConversation: eM,
                    isSubmitDisabled: ek,
                    retainLiveModelPicker: eR && !to,
                    followupPortalTarget: tG,
                    takeoverDisclaimerRef: t$,
                    showConversationFollowups: null == eG && null == e3 && !eN && !eF && !te,
                    isTemporaryChat: eN,
                    isWorkConversation: eF,
                    responseSpacerState: tg,
                    renderTranscript: e => {
                        let {
                            isVisible: t
                        } = e;
                        return (0, a.jsx)(r7, {
                            entries: ev,
                            historyLoader: eN || null != eG || null != e3 ? null : (0, a.jsx)(sa.a, {
                                conversationId: Y
                            }),
                            isVisible: t,
                            rendersWidgets: "floating" === tr,
                            onVisibilityChange: tn
                        }, Y)
                    },
                    showVoiceStage: !tF,
                    voiceDisclaimer: e4 && !tF ? tY : void 0,
                    onSubmitAccepted: e => {
                        tx.acceptSubmit(), eJ?.(e)
                    }
                }, `${J}:${to?"image-edit":"chat"}`)]
            }) : tJ), G[60] = ee, G[61] = tZ, G[62] = e$, G[63] = J, G[64] = Z, G[65] = U, G[66] = Y, G[67] = ec, G[68] = tY, G[69] = tX, G[70] = ev, G[71] = tJ, G[72] = tG, G[73] = eQ, G[74] = ex, G[75] = ew, G[76] = ei, G[77] = e4, G[78] = e_, G[79] = eA, G[80] = ea, G[81] = er, G[82] = te, G[83] = to, G[84] = eo, G[85] = eM, G[86] = ek, G[87] = eN, G[88] = eF, G[89] = eJ, G[90] = ej, G[91] = tx, G[92] = tV, G[93] = en, G[94] = tg, G[95] = eR, G[96] = tA, G[97] = e7.isHidden, G[98] = eG, G[99] = e3, G[100] = e9, G[101] = el, G[102] = tD, G[103] = tF, G[104] = q, G[105] = K, G[106] = tr, G[107] = eY, G[108] = V, G[109] = f) : f = G[109];
            let t0 = f;
            G[110] !== Y || G[111] !== ea || G[112] !== eo || G[113] !== e2 || G[114] !== eG || G[115] !== e3 ? (v = void 0, G[110] = Y, G[111] = ea, G[112] = eo, G[113] = e2, G[114] = eG, G[115] = e3, G[116] = v) : v = G[116];
            let t1 = v,
                t2 = ea || void 0;
            G[117] === Symbol.for("react.memo_cache_sentinel") ? (y = null, G[117] = y) : y = G[117], G[118] !== Y || G[119] !== ea || G[120] !== te || G[121] !== q ? (b = !q || te || ea ? null : (0, a.jsx)(ow.a, {
                conversationId: Y
            }), G[118] = Y, G[119] = ea, G[120] = te, G[121] = q, G[122] = b) : b = G[122], G[123] !== eU || G[124] !== Y || G[125] !== eo || G[126] !== eG || G[127] !== e3 ? (x = eo || null != eG || null != e3 || null != eU ? null : (0, a.jsx)(oC, {
                conversationId: Y
            }, Y), G[123] = eU, G[124] = Y, G[125] = eo, G[126] = eG, G[127] = e3, G[128] = x) : x = G[128], G[129] !== Y || G[130] !== eA || G[131] !== eo || G[132] !== eN || G[133] !== eG || G[134] !== e3 ? (C = eo || eA || eN || null != eG || null != e3 ? null : (0, a.jsx)(sr, {
                conversationId: Y
            }), G[129] = Y, G[130] = eA, G[131] = eo, G[132] = eN, G[133] = eG, G[134] = e3, G[135] = C) : C = G[135], G[136] !== Y || G[137] !== ev || G[138] !== tT || G[139] !== eP || G[140] !== eA || G[141] !== eo || G[142] !== tA || G[143] !== eG || G[144] !== e3 || G[145] !== tC ? (w = eo || eA || null != eG || null != e3 ? null : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(aS, {
                    conversationId: Y,
                    entries: ev,
                    turnListApi: tC
                }), (0, a.jsx)(rC.a, {
                    ready: !eP && tT && null != tC && ev.length > 0,
                    onNavigate: tA
                })]
            }), G[136] = Y, G[137] = ev, G[138] = tT, G[139] = eP, G[140] = eA, G[141] = eo, G[142] = tA, G[143] = eG, G[144] = e3, G[145] = tC, G[146] = w) : w = G[146], G[147] !== eU || G[148] !== tj || G[149] !== tc || G[150] !== J || G[151] !== $ || G[152] !== tl || G[153] !== Y || G[154] !== ef || G[155] !== tO || G[156] !== tY || G[157] !== tX || G[158] !== ev || G[159] !== t0 || G[160] !== ex || G[161] !== ew || G[162] !== et || G[163] !== td || G[164] !== t_ || G[165] !== tS || G[166] !== e4 || G[167] !== e5 || G[168] !== e_ || G[169] !== eP || G[170] !== eA || G[171] !== ea || G[172] !== er || G[173] !== te || G[174] !== eo || G[175] !== eM || G[176] !== eN || G[177] !== eO || G[178] !== eF || G[179] !== eS || G[180] !== t1 || G[181] !== eX || G[182] !== eC || G[183] !== eL || G[184] !== W || G[185] !== tx || G[186] !== tK || G[187] !== tW || G[188] !== tV || G[189] !== tg || G[190] !== e7.isChatPaneHidden || G[191] !== e1 || G[192] !== eu || G[193] !== tk || G[194] !== tz || G[195] !== eG || G[196] !== e3 || G[197] !== Q || G[198] !== tL || G[199] !== eK || G[200] !== e9 || G[201] !== tu || G[202] !== tB || G[203] !== tD || G[204] !== tF || G[205] !== tQ || G[206] !== ed || G[207] !== tC || G[208] !== V ? (_ = V?.fullscreenContent != null ? (0, a.jsxs)(a.Fragment, {
                children: [!Q && V.fullscreenContent, t0]
            }) : (0, a.jsxs)(rw.a, {
                viewportOverlay: er || eo || eF || null != eG || null != e3 || null != eU || ea || te ? null : (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(oI, {
                        conversationId: Y
                    }, Y)
                }),
                hideTranscript: er,
                active: !eA && (!ew || null != tC),
                presentation: ed ?? (eo ? "compact" : "default"),
                contentX: $,
                supportsComposerExpansion: tB && !te && null == V,
                footerPlacement: tc ? td : "bottom",
                initialOffset: t_,
                scrollOrigin: eu,
                onScroll: tx.onScroll,
                onUserScrollIntent: tj,
                scrollToBottomButton: !e9 || te || tF ? void 0 : {
                    isWorking: eO
                },
                threadEndContent: e4 ? void 0 : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        ref: tH,
                        className: eB.a
                    }), null == tQ ? tY : (0, ab.createPortal)(tY, tQ)]
                }),
                footerLeadingContent: tF ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)("div", {
                            className: eB.a,
                            children: (0, a.jsx)(rb.a, {})
                        })
                    }), (0, a.jsx)("div", {
                        className: "overflow-hidden electron:[scrollbar-gutter:stable_both-edges]",
                        children: tY
                    })]
                }) : t1,
                footer: t0,
                children: [eo || eA || null != eG ? null : (0, a.jsx)(rD, {
                    conversationId: Y,
                    entries: ev,
                    isConversationFetching: eP,
                    turnListApi: tC
                }), (0, a.jsxs)(ay.a.div, {
                    ref: tp,
                    style: {
                        x: tz
                    },
                    "data-chatgpt-conversation-selection-target": Y,
                    className: (0, av.b)("flex min-h-full flex-1 flex-col gap-1.5 pb-5", eo && "pt-5"),
                    "data-thread-find-target": "conversation",
                    onFocusCapture: () => {
                        (0, rg.K)(e1, "conversation")
                    },
                    onMouseDownCapture: () => {
                        (0, rg.K)(e1, "conversation")
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
                        children: [eo || eA ? null : (0, a.jsx)(rm.a, {
                            conversationSource: tO
                        }), ea || e7.isChatPaneHidden || eN || null != eG || null != e3 ? null : et ?? (0, a.jsx)(sa.a, {
                            conversationId: Y
                        }), (0, a.jsx)(sC.b, {
                            conversationId: Y
                        }), (null != eG || null != e3) && ew ? (0, a.jsx)(sx, {
                            sharedConversationId: eG
                        }) : null, null == eL ? null : (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)("div", {
                                className: eB.a,
                                children: eL
                            })
                        }), null == tl || eA ? null : (0, a.jsx)(r_.a, {
                            conversationId: Y,
                            branchSource: {
                                conversationId: tl.metadata.source_conversation_id,
                                title: tl.metadata.source_conversation_title,
                                gizmoId: tl.metadata.source_conversation_gizmo_id,
                                ownerId: tl.metadata.source_conversation_owner_id
                            }
                        }), ex ? (0, a.jsx)(rs, {
                            isFetching: eP,
                            isSharedConversation: eM,
                            onRetry: eC
                        }) : eA ? (0, a.jsx)("div", {
                            "aria-busy": "true",
                            "aria-label": ef,
                            className: "relative min-h-0 flex-1",
                            role: "status",
                            children: (0, a.jsx)(tI.LoadingPage, {
                                debugName: "ChatGptConversationPage",
                                fillParent: !0
                            })
                        }) : ew ? (0, a.jsxs)(st.a, {
                            value: tk,
                            children: [eo || ea ? null : (0, a.jsxs)(a.Fragment, {
                                children: [eN || null != eG || null != e3 ? null : (0, a.jsx)(a.Fragment, {
                                    children: (0, a.jsx)(re, {
                                        conversationId: Y
                                    })
                                }), (0, a.jsx)(a7, {
                                    entries: ev,
                                    title: W,
                                    TurnRowComponent: r6
                                })]
                            }), (0, a.jsx)(so.a, {
                                enabled: tV,
                                aboveComposer: tK,
                                belowMessage: tW,
                                children: (0, a.jsx)(om, {
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
                                ref: tq,
                                className: "empty:hidden"
                            }) : null]
                        }) : tu && null == tl && (0, a.jsx)("div", {
                            className: "rounded-xl border border-default bg-surface-secondary/92 p-4 text-sm text-codex-description",
                            children: (0, a.jsx)(ey.a, {
                                id: "chatgptConversations.emptyConversation",
                                defaultMessage: "No renderable ChatGPT messages were found in this conversation"
                            })
                        }), !tD && tX, (0, a.jsx)(ob.a, {
                            conversationId: J,
                            isWorkConversation: eF
                        }), eK && !e_ ? (0, a.jsx)(sg, {
                            conversationId: Y,
                            moreDetailsEnabled: eS,
                            onAddSelectedText: eX
                        }) : null]
                    }), eo ? null : (0, a.jsx)(rH.a, {
                        preserveResponseViewport: e => th.current?.holdForResponse(e) ?? !1,
                        conversationId: Y,
                        initialPlacementKey: tS,
                        isActiveVoiceConversation: e4 && e5,
                        isLoadingHistory: eA,
                        latestUserTurnKey: ev.findLast(sI)?.turnKey,
                        onResponseSpacerStateChange: tf
                    }), tF ? (0, a.jsx)(ay.a.div, {
                        className: "pointer-events-none shrink-0",
                        "aria-hidden": !0,
                        initial: {
                            height: 0
                        },
                        animate: {
                            height: 112
                        },
                        transition: tL ? rx.c : rx.b
                    }) : null]
                })]
            }), G[147] = eU, G[148] = tj, G[149] = tc, G[150] = J, G[151] = $, G[152] = tl, G[153] = Y, G[154] = ef, G[155] = tO, G[156] = tY, G[157] = tX, G[158] = ev, G[159] = t0, G[160] = ex, G[161] = ew, G[162] = et, G[163] = td, G[164] = t_, G[165] = tS, G[166] = e4, G[167] = e5, G[168] = e_, G[169] = eP, G[170] = eA, G[171] = ea, G[172] = er, G[173] = te, G[174] = eo, G[175] = eM, G[176] = eN, G[177] = eO, G[178] = eF, G[179] = eS, G[180] = t1, G[181] = eX, G[182] = eC, G[183] = eL, G[184] = W, G[185] = tx, G[186] = tK, G[187] = tW, G[188] = tV, G[189] = tg, G[190] = e7.isChatPaneHidden, G[191] = e1, G[192] = eu, G[193] = tk, G[194] = tz, G[195] = eG, G[196] = e3, G[197] = Q, G[198] = tL, G[199] = eK, G[200] = e9, G[201] = tu, G[202] = tB, G[203] = tD, G[204] = tF, G[205] = tQ, G[206] = ed, G[207] = tC, G[208] = V, G[209] = _) : _ = G[209], G[210] !== ea || G[211] !== t2 || G[212] !== b || G[213] !== x || G[214] !== C || G[215] !== w || G[216] !== _ ? (S = (0, a.jsxs)("div", {
                className: "contents",
                "aria-hidden": t2,
                inert: ea,
                children: [y, b, x, C, w, _]
            }), G[210] = ea, G[211] = t2, G[212] = b, G[213] = x, G[214] = C, G[215] = w, G[216] = _, G[217] = S) : S = G[217];
            let t3 = S,
                t4 = "main" === tr;
            G[218] !== t4 ? (I = {
                presentation: "main",
                rendersWidgets: t4
            }, G[218] = t4, G[219] = I) : I = G[219];
            let t5 = !ta && (er || ea || e7.isChatPaneHidden || V?.fullscreenContent != null);
            return G[220] !== t5 ? (T = (0, a.jsx)(es.i, {
                name: "conversation hidden",
                active: t5
            }), G[220] = t5, G[221] = T) : T = G[221], G[222] !== t3 ? (E = (0, a.jsx)(rh.a, {
                children: t3
            }), G[222] = t3, G[223] = E) : E = G[223], G[224] !== I || G[225] !== T || G[226] !== E ? (A = (0, a.jsxs)(c.b, {
                scope: rJ,
                value: I,
                children: [T, E]
            }), G[224] = I, G[225] = T, G[226] = E, G[227] = A) : A = G[227], A
        }

        function sI(e) {
            let {
                turn: t
            } = e;
            return t.items.some(sT)
        }

        function sT(e) {
            return "user-message" === e.type
        }
        var sE = n("gCr7");
        n("i1of");
        var sP = n("alJ6"),
            sA = n("u9iS"),
            sM = n("fNPc"),
            sk = n("vVgo"),
            sR = n("T33u"),
            sN = n("EpL9"),
            sO = n("svjy");

        function sB(e) {
            let {
                conversationId: t,
                courseId: n
            } = e;
            return `chatgpt-learning-course:${JSON.stringify([t,n])}`
        }
        let sF = (0, c.d)(ep.a, (e, t) => {
                let {
                    get: n
                } = t;
                return n(e3.h) && n(e3.i) && n(e2.l.activeTab$)?.tabId === sB(e)
            }),
            sL = (0, tO.a)(async () => {
                let {
                    CoursePanelTab: e
                } = await Promise.all([n.e(753405), n.e(321957), n.e(585419), n.e(877700), n.e(353230), n.e(81461), n.e(882456), n.e(145049), n.e(744644), n.e(148673), n.e(688740), n.e(909395), n.e(212487), n.e(17983), n.e(167649), n.e(509282), n.e(802614)]).then(n.bind(n, "lbEC"));
                return e
            }, {
                propagateLoadError: !0
            }),
            sz = (0, sN.j)("chatgpt-learning-course", sL, {
                dropDestinations: ["right"],
                isAvailable: (e, t) => "chatgpt-thread" === e.value.routeKind && (null == t || e.value.conversationId === t.conversationId),
                paneWidth: () => ({
                    defaultWidth: 480,
                    storageKey: "app-shell:learning-course-width"
                }),
                showInNewTabLauncher: !1,
                open: sD
            });

        function sD(e, t) {
            let {
                conversationId: n,
                courseId: r
            } = t, {
                preserveFocus: o = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, s = e.get(S.f), i = e.get(S.j), l = () => "chatgpt-thread" === e.value.routeKind && e.value.conversationId === n && e.get(eS.c)?.pathname === e.value.pathname && e.get(S.f) === s && e.get(S.j) === i;
            if (!l() || "" === r) return;
            let c = sB({
                conversationId: n,
                courseId: r
            });
            e.get(sF, {
                conversationId: n,
                courseId: r
            }) ? e2.l.closeTab(e, c) : (0, e2.h)(e, sz, {
                target: "right",
                revealAndFocus: !0,
                preserveFocus: o,
                shouldOpen: l,
                id: c,
                icon: (0, a.jsx)(tN.ob, {}),
                title: e.get(sO.a).formatMessage({
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
        var sG = n("MgyE"),
            sH = n("gyrn"),
            sW = n("ckwE"),
            sq = n("kHi2");

        function sK(e) {
            let t, n = (0, r.c)(3),
                {
                    children: o
                } = e,
                [s] = (0, m.useState)(sU);
            return n[0] !== s || n[1] !== o ? (t = (0, a.jsx)(a5.a, {
                value: s,
                children: o
            }), n[0] = s, n[1] = o, n[2] = t) : t = n[2], t
        }

        function sU() {
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

        function sV(e) {
            let t, n, o, s = (0, r.c)(8),
                {
                    children: i,
                    courseChatId: l
                } = e,
                d = (0, c.y)(ep.a);
            s[0] !== l || s[1] !== d ? (t = "chatgpt-thread" === d.value.routeKind && d.value.conversationId === l ? d.get(sq.b) : void 0, s[0] = l, s[1] = d, s[2] = t) : t = s[2];
            let u = t;
            return s[3] !== i ? (n = (0, a.jsx)(sK, {
                children: i
            }), s[3] = i, s[4] = n) : n = s[4], s[5] !== u || s[6] !== n ? (o = (0, a.jsx)(sW.a, {
                binding: u,
                children: n
            }), s[5] = u, s[6] = n, s[7] = o) : o = s[7], o
        }
        var sQ = n("MDmT"),
            s$ = n("Fjze");

        function sY(e) {
            let t, n, a, o = (0, r.c)(7),
                {
                    sharedConversationId: s
                } = e,
                i = (0, c.y)(eI.a),
                l = null != s;
            o[0] !== i || o[1] !== s ? (t = () => {
                null != s && (nz.Request.safePost("/received-shares/open", {
                    requestBody: {
                        share_kind: "conversation",
                        share_id: s
                    }
                }).then(() => i.queryClient.invalidateQueries({
                    queryKey: ["opened-shared-links"]
                })).catch(sX), (0, el.a)(i, s$.a, {
                    sharedConversationId: s
                }))
            }, o[0] = i, o[1] = s, o[2] = t) : t = o[2];
            let d = (0, m.useEffectEvent)(t);
            return o[3] !== d ? (n = () => {
                d()
            }, o[3] = d, o[4] = n) : n = o[4], o[5] !== l ? (a = [l], o[5] = l, o[6] = a) : a = o[6], (0, m.useEffect)(n, a), null
        }

        function sX() {}
        var sJ = n("GigQ"),
            sZ = n("JKdL"),
            s0 = n("d107"),
            s1 = n("FGv0"),
            s2 = n("r9i9"),
            s3 = n("tdfh"),
            s4 = n("uQqo"),
            s5 = n("yi1v"),
            s6 = n("hMfc");

        function s7(e) {
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
                        [r, ...o] = a?.attachments[0]?.kind === "media_generation" ? (0, s4.a)(a, (0, s4.b)(a)) : [],
                        s = () => (0, s2.j)(t.conversation, t.conversation.current_node ?? t.dialogProps.currentNodeId, 1 / 0, void 0, (0, af.b)(e.get, t.dialogProps.serverConversationId)),
                        i = crypto.randomUUID();
                    (0, sv.c)(e, {
                        attachmentType: t.attachmentType,
                        contentType: t.contentType,
                        shareId: t.shareId,
                        shareSessionId: i
                    });
                    let l = t.dialogProps.receiverShareLink;
                    if ((0, s5.a)() && null != l && ("conversation" === l.contentType || "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_MESSAGE_SLICE" === t.attachmentType)) {
                        if ("unsupported" !== await (0, s5.b)(e, {
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
                        if ("conversation" === l.contentType) return void(0, nL.f)(e, s3.a, {
                            ...t.dialogProps,
                            shareSessionId: i
                        })
                    }
                    if (l?.contentType === "conversation") {
                        let a = (0, sv.b)(e, {
                                actor: "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER",
                                shareId: t.shareId,
                                shareSessionId: i,
                                source: "CHATGPT_SHARE_FLOW_SOURCE_RECEIVER_HEADER",
                                usedExistingLink: !0,
                                omitSheetType: !0
                            }),
                            r = await (0, s1.a)(Promise.resolve(l.shareLinkUrl));
                        if (a({
                                result: r ? "link-copied" : "copy-failed",
                                shareId: t.shareId
                            }), r) {
                            let {
                                showConversationShareCopiedToast: t
                            } = await n.e(555532).then(n.bind(n, "euaP"));
                            t(e, null, !0 === l.isWorkspaceOnly)
                        } else(0, nL.f)(e, s3.a, {
                            ...t.dialogProps,
                            previewTurns: s(),
                            recoveryShareLink: l,
                            shareSessionId: i
                        });
                        return
                    }(0, nL.f)(e, s3.a, {
                        ...t.dialogProps,
                        image: r?.src == null ? void 0 : {
                            alt: t.dialogProps.title ?? "",
                            item: r,
                            previewSrc: r.src,
                            additionalPublishedPreviewUrls: o.flatMap(e => null == e.src ? [] : [e.src])
                        },
                        previewTurns: null != r ? void 0 : s(),
                        privacyNotices: (0, s2.k)({
                            conversation: t.conversation,
                            projectId: null
                        }),
                        shareSessionId: i
                    })
                })(h, u).finally(() => y(!1)))
            }, d[2] = u, d[3] = v, d[4] = h, d[5] = o) : o = d[5], d[6] !== v ? (s = v ? null : (0, a.jsx)(ej.a, {
                asset: s6.a
            }), d[6] = v, d[7] = s) : s = d[7], d[8] !== v || d[9] !== f || d[10] !== o || d[11] !== s ? (i = (0, a.jsx)(tR.a, {
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
        var s8 = n("MVHH"),
            s9 = n("rhKI"),
            ie = n("PP3M"),
            it = n("jAnS"),
            ia = n("CFOe"),
            ir = n("JNtf"),
            io = n("mUDD");

        function is(e) {
            let t, n, o, s, i, l, c, d, u, h, p, m, g, f = (0, r.c)(31),
                {
                    canSave: v,
                    isPending: y,
                    onCancel: b,
                    onClose: x,
                    onSave: C
                } = e;
            f[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(ey.a, {
                id: "chatgptConversations.temporaryChat.save.close",
                defaultMessage: "Close"
            }), f[0] = t) : t = f[0], f[1] !== y || f[2] !== x ? (n = e => {
                e || y || x()
            }, f[1] = y, f[2] = x, f[3] = n) : n = f[3];
            let w = !y;
            f[4] !== v || f[5] !== C ? (o = e => {
                e.preventDefault(), v && C()
            }, f[4] = v, f[5] = C, f[6] = o) : o = f[6], f[7] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, a.jsx)(ir.e, {
                children: (0, a.jsx)(ey.a, {
                    id: "chatgptConversations.temporaryChat.save.title",
                    defaultMessage: "Save chat?"
                })
            }), f[7] = s) : s = f[7], f[8] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(io.e, {
                children: (0, a.jsx)(io.d, {
                    className: "select-none",
                    title: s,
                    subtitle: (0, a.jsx)(ir.d, {
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
            }), f[12] = c) : c = f[12], f[13] !== y || f[14] !== l ? (d = (0, a.jsx)(tR.a, {
                color: "secondary",
                disabled: y,
                onClick: l,
                children: c
            }), f[13] = y, f[14] = l, f[15] = d) : d = f[15];
            let _ = !v;
            return f[16] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, a.jsx)(ey.a, {
                id: "chatgptConversations.temporaryChat.save.confirm",
                defaultMessage: "Save"
            }), f[16] = u) : u = f[16], f[17] !== y || f[18] !== _ ? (h = (0, a.jsx)(tR.a, {
                color: "primary",
                disabled: _,
                loading: y,
                type: "submit",
                children: u
            }), f[17] = y, f[18] = _, f[19] = h) : h = f[19], f[20] !== h || f[21] !== d ? (p = (0, a.jsx)(io.e, {
                children: (0, a.jsxs)(io.c, {
                    children: [d, h]
                })
            }), f[20] = h, f[21] = d, f[22] = p) : p = f[22], f[23] !== p || f[24] !== o ? (m = (0, a.jsxs)(io.b, {
                as: "form",
                onSubmit: o,
                children: [i, p]
            }), f[23] = p, f[24] = o, f[25] = m) : m = f[25], f[26] !== y || f[27] !== m || f[28] !== n || f[29] !== w ? (g = (0, a.jsx)(ir.a, {
                open: !0,
                dialogCloseLabel: t,
                onOpenChange: n,
                shouldIgnoreClickOutside: y,
                showDialogClose: w,
                size: "narrow",
                children: m
            }), f[26] = y, f[27] = m, f[28] = n, f[29] = w, f[30] = g) : g = f[30], g
        }

        function ii(e) {
            (0, tP.e)(e).catch(() => {
                ti.a.warning("Failed to acknowledge temporary chat save coachmark")
            })
        }

        function il(e) {
            let t, n = (0, r.c)(2),
                {
                    conversationId: o
                } = e;
            return n[0] !== o ? (t = (0, a.jsxs)(a.Fragment, {
                children: [null, (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(ic, {
                        conversationId: o
                    })
                })]
            }), n[0] = o, n[1] = t) : t = n[1], t
        }

        function ic(e) {
            let t, n = (0, r.c)(2),
                {
                    conversationId: o
                } = e;
            return (0, c.z)(ie.e) ? (n[0] !== o ? (t = (0, a.jsx)(id, {
                conversationId: o
            }), n[0] = o, n[1] = t) : t = n[1], t) : null
        }

        function id(e) {
            let t, n, o, s, i, l, d, u, h, p, v, y, b, x = (0, r.c)(49),
                {
                    conversationId: C
                } = e,
                w = (0, c.y)(eI.a),
                _ = (0, g.a)(),
                j = (0, f._)(),
                [S, I] = (0, m.useState)(!1),
                [T, E] = (0, m.useState)(!1),
                [P, A] = (0, m.useState)(!1),
                [M, k] = (0, m.useState)(!1),
                R = (0, m.useRef)(!1),
                N = (0, c.z)(nH.p).data,
                O = (0, c.x)(tm.j, C),
                B = (0, c.x)(tm.Y, C),
                F = (0, c.x)(tm.J, C),
                L = (0, c.x)(t_.j, C);
            x[0] !== C || x[1] !== w ? (t = {
                mutationFn: e => {
                    let {
                        sourceConversationId: t,
                        selectedLeafId: n
                    } = e;
                    if (w.get(tm.J, C) || w.get(t_.j, C) || t !== w.get(tm.j, C) || n !== w.get(tm.Y, C)) throw Error("Cannot save an unavailable temporary chat message");
                    return nz.Request.safePost("/conversation/{conversation_id}/save", {
                        parameters: {
                            path: {
                                conversation_id: t
                            }
                        },
                        requestBody: {
                            selected_leaf_id: n
                        },
                        isExpectedError: ig
                    }).then(im)
                },
                retry: ip
            }, x[0] = C, x[1] = w, x[2] = t) : t = x[2];
            let {
                mutateAsync: z,
                isPending: D
            } = (0, ev.a)(t), G = null != O && null != B && !F && !L && !D && !T;
            x[3] !== _ ? (n = _.formatMessage({
                id: "chatgptConversations.temporaryChat.save.button",
                defaultMessage: "Save chat"
            }), x[3] = _, x[4] = n) : n = x[4];
            let H = n;
            x[5] !== N?.eligibleAnnouncements ? (o = N?.eligibleAnnouncements?.includes(nH.h), x[5] = N?.eligibleAnnouncements, x[6] = o) : o = x[6];
            let W = !0 === o,
                U = !M && (P || W && G);
            x[7] !== C || x[8] !== P || x[9] !== w || x[10] !== U ? (s = () => {
                if (!U || P || R.current) return;
                let e = !1;
                return queueMicrotask(() => {
                    e || R.current || (R.current = !0, (0, el.a)(w, s8.Bb, {
                        personalizationMode: (0, s9.a)((0, ie.k)(w, C))
                    }), A(!0), ii(w))
                }), () => {
                    e = !0
                }
            }, i = [C, P, w, U], x[7] = C, x[8] = P, x[9] = w, x[10] = U, x[11] = s, x[12] = i) : (s = x[11], i = x[12]), (0, m.useEffect)(s, i), x[13] !== w ? (l = () => {
                k(!0), R.current || (R.current = !0, ii(w))
            }, x[13] = w, x[14] = l) : l = x[14];
            let V = l;
            x[15] !== G || x[16] !== C || x[17] !== _ || x[18] !== j || x[19] !== z || x[20] !== w || x[21] !== B || x[22] !== O ? (d = async function() {
                let e;
                if (!G || null == O || null == B) return;
                let t = (0, s9.a)((0, ie.k)(w, C));
                (0, el.a)(w, s8.Cb, {
                    personalizationMode: t
                });
                try {
                    e = (await z({
                        sourceConversationId: O,
                        selectedLeafId: B
                    })).conversation_id
                } catch (e) {
                    (0, el.a)(w, s8.Db, {
                        personalizationMode: t,
                        failureCategory: (0, s9.b)(e)
                    }), w.get(K.f).danger(_.formatMessage({
                        id: "chatgptConversations.temporaryChat.save.error",
                        defaultMessage: "Couldn't save this chat. Please try again."
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.temporaryChat.save.error"
                        }
                    });
                    return
                }
                E(!0), I(!1), (0, ew.G)(w), (0, ew.J)(w, O, "remove"), (0, ew.J)(w, e, "refresh"), j((0, it.c)(e), {
                    replace: !0
                }), w.get(K.f).success(_.formatMessage({
                    id: "chatgptConversations.temporaryChat.save.success",
                    defaultMessage: "Chat saved. It will now appear in your chat history."
                })), nz.Request.safePost("/conversation/gen_title/{conversation_id}", {
                    parameters: {
                        path: {
                            conversation_id: e
                        }
                    },
                    requestBody: {
                        message_id: B
                    }
                }).then(ih).then(t => {
                    (0, tm.bc)({
                        scope: w,
                        conversationId: e,
                        title: t
                    }), w.query.setData(tP.chatGptConversationQueryById$, e, e => null == e ? e : {
                        ...e,
                        title: t
                    }), (0, ew.G)(w), (0, ew.J)(w, e, "refresh")
                }).catch(iu)
            }, x[15] = G, x[16] = C, x[17] = _, x[18] = j, x[19] = z, x[20] = w, x[21] = B, x[22] = O, x[23] = d) : d = x[23];
            let Q = d,
                $ = !G;
            x[24] !== C || x[25] !== w || x[26] !== U ? (u = () => {
                (0, el.a)(w, s8.Fb, {
                    personalizationMode: (0, s9.a)((0, ie.k)(w, C)),
                    coachMarkVisible: U
                }), I(!0)
            }, x[24] = C, x[25] = w, x[26] = U, x[27] = u) : u = x[27], x[28] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, a.jsx)(q.b, {
                icon: {
                    16: tN.qb,
                    20: tN.rb
                }
            }), x[28] = h) : h = x[28], x[29] !== H || x[30] !== $ || x[31] !== u ? (p = (0, a.jsx)(tR.a, {
                "aria-label": H,
                color: "toolbar",
                disabled: $,
                size: "toolbar",
                uniform: !0,
                onClick: u,
                children: h
            }), x[29] = H, x[30] = $, x[31] = u, x[32] = p) : p = x[32];
            let Y = p;
            return x[33] !== V || x[34] !== _ || x[35] !== H || x[36] !== Y || x[37] !== U ? (v = U ? (0, a.jsx)(ia.a, {
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
            }), x[33] = V, x[34] = _, x[35] = H, x[36] = Y, x[37] = U, x[38] = v) : v = x[38], x[39] !== G || x[40] !== C || x[41] !== Q || x[42] !== S || x[43] !== D || x[44] !== w ? (y = S ? (0, a.jsx)(is, {
                canSave: G,
                isPending: D,
                onCancel: () => {
                    (0, el.a)(w, s8.Ab, {
                        personalizationMode: (0, s9.a)((0, ie.k)(w, C))
                    })
                },
                onClose: () => I(!1),
                onSave: () => void Q()
            }) : null, x[39] = G, x[40] = C, x[41] = Q, x[42] = S, x[43] = D, x[44] = w, x[45] = y) : y = x[45], x[46] !== v || x[47] !== y ? (b = (0, a.jsxs)(a.Fragment, {
                children: [v, y]
            }), x[46] = v, x[47] = y, x[48] = b) : b = x[48], b
        }

        function iu() {}

        function ih(e) {
            return rj.object({
                title: rj.string()
            }).parse(e).title
        }

        function ip(e, t) {
            return e < 1 && t instanceof eU.FetchError && 412 === t.status && "conversation_precondition_failed" === t.errorCode
        }

        function im(e) {
            return rj.object({
                conversation_id: rj.string().min(1)
            }).parse(e)
        }

        function ig(e) {
            return 412 === e.status && "conversation_precondition_failed" === e.errorCode
        }
        var iv = n("J8FU"),
            iy = n("Aluh"),
            ib = n("mG6J");

        function ix(e) {
            let t, n, o = (0, r.c)(14),
                {
                    conversationId: s,
                    shouldBlockExternalEgress: i,
                    widgets: l
                } = e,
                u = (0, c.z)(iy.b);
            if (i) return null;
            if (o[0] !== u || o[1] !== s || o[2] !== l) {
                let e, n, r;
                o[4] !== u || o[5] !== s ? (e = e => u.has((0, ou.e)(s, e.messageId)), o[4] = u, o[5] = s, o[6] = e) : e = o[6];
                let i = l.filter(e),
                    c = `chatgpt:${s}`;
                o[7] !== c ? (n = (0, d.Se)(c), o[7] = c, o[8] = n) : n = o[8];
                let h = n;
                o[9] !== h || o[10] !== s ? (r = e => (0, a.jsx)(ib.b, {
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
        var iC = n("JVSG"),
            iw = {
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
            i_ = n("ebpE");

        function ij() {
            let e, t, n, o, s, i, l, d, u, h, p, g, v, b, C, w, _ = (0, r.c)(46),
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
            _[1] !== M ? (t = (0, it.i)(M), _[1] = M, _[2] = t) : t = _[2];
            let B = t;
            _[3] !== O || _[4] !== B || _[5] !== A ? (n = null == A || (0, t8.e)(A) || B || O ? null : A, _[3] = O, _[4] = B, _[5] = A, _[6] = n) : n = _[6];
            let {
                data: F
            } = (0, c.x)(tP.chatGptConversationQueryById$, n);
            if (null == A) {
                let e;
                return _[7] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(f.l, {
                    to: "/",
                    replace: !0
                }), _[7] = e) : e = _[7], e
            }
            _[8] !== R || _[9] !== A ? (o = R ?? (0, t8.d)(A), _[8] = R, _[9] = A, _[10] = o) : o = _[10];
            let L = o,
                z = I.isCapable && !E && !N && null != F;
            _[11] !== j ? (s = e => (j((0, it.c)(e)), !0), _[11] = j, _[12] = s) : s = _[12];
            let D = s;
            _[13] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(y.a, {}), l = (0, a.jsx)(W.a.Surface, {}), _[13] = i, _[14] = l) : (i = _[13], l = _[14]), _[15] !== O ? (d = null, _[15] = O, _[16] = d) : d = _[16], _[17] !== L || _[18] !== O || _[19] !== B ? (u = B || O ? null : (0, a.jsx)(tC.a, {
                conversationId: L
            }), _[17] = L, _[18] = O, _[19] = B, _[20] = u) : u = _[20];
            let G = S ?? (z ? D : null),
                H = `${L}:${B}`;
            _[21] === Symbol.for("react.memo_cache_sentinel") ? (h = void 0, _[21] = h) : h = _[21], _[22] !== L || _[23] !== O || _[24] !== B || _[25] !== H || _[26] !== P ? (p = (0, a.jsx)(iS, {
                conversationId: L,
                viewActivation: P,
                isArchivedPreview: O,
                isReadOnlyPreview: !1,
                banner: h,
                isTemporaryChat: B,
                sharedConversationId: null
            }, H), _[22] = L, _[23] = O, _[24] = B, _[25] = H, _[26] = P, _[27] = p) : p = _[27], _[28] !== p || _[29] !== G ? (g = (0, a.jsx)(J.a, {
                value: G,
                children: p
            }), _[28] = p, _[29] = G, _[30] = g) : g = _[30], _[31] !== g || _[32] !== d || _[33] !== u ? (v = (0, a.jsxs)(a.Fragment, {
                children: [i, l, d, u, g]
            }), _[31] = g, _[32] = d, _[33] = u, _[34] = v) : v = _[34];
            let q = v;
            _[35] !== q || _[36] !== L || _[37] !== O || _[38] !== B ? (b = B || O ? q : (0, a.jsx)(tT, {
                conversationId: L,
                children: q
            }), _[35] = q, _[36] = L, _[37] = O, _[38] = B, _[39] = b) : b = _[39];
            let K = b;
            return _[40] !== q || _[41] !== K ? (C = K, _[40] = q, _[41] = K, _[42] = C) : C = _[42], _[43] !== L || _[44] !== C ? (w = (0, a.jsx)(tG.a, {
                conversationId: L,
                children: C
            }), _[43] = L, _[44] = C, _[45] = w) : w = _[45], w
        }

        function iS(e) {
            let t, n, i, y, x, W, J, ev, ey, eb, eC, e_, ej, eS, eI, eT, eE, eP, eA, eM, tC, tI, tT, tk, tR, tN, tO, tB, tL, tz, tG, tH, tq, tK, tU, t$, tY, t9, ne, nt, nn, na, nr, no, ns, ni, nd, n_, nE, nA, nM, nk, nR, nN, nO, nB, nF, nL, nz, nD, nG, nH, nW, nq, nK, nU, nV, nQ, n$, nY, nX, nJ, nZ, n0, n1, n2, n4, n7, n9, an, aa, ar, as, ai, al, ac, au, av, ay, ab, ax, aC, aw, a_, aj, aS, aI, aT, aE, aP, aA, aM, ak, aR, aN, aO = (0, r.c)(767),
                {
                    conversationId: aB,
                    viewActivation: aF,
                    isArchivedPreview: aL,
                    isInlinePreview: az,
                    hideModelPicker: aD,
                    showFilePicker: aG,
                    disableAutoFocus: aH,
                    hideInitialUserMessage: aW,
                    transcriptPresentation: aq,
                    scrollOrigin: aK,
                    isReadOnlyPreview: aU,
                    onSubmitAccepted: aV,
                    isTemporaryChat: a$,
                    sharedConversationId: aY,
                    sharedPostContinuation: aX,
                    requiredSystemHints: aJ,
                    routePattern: aZ,
                    composerLeadingContent: a0,
                    headerLeadingContent: a1,
                    banner: a2,
                    onRetryMissingConversation: a3,
                    sharedProjectConversation: a4,
                    workspace: a5
                } = e,
                a6 = void 0 === aF ? 0 : aF,
                a7 = void 0 !== aL && aL,
                a8 = void 0 !== az && az,
                a9 = void 0 === aG || aG,
                re = (0, c.y)(ep.a),
                rt = (0, m.useContext)(j.a),
                rn = (0, c.x)(aQ.f, rt),
                ra = (0, c.z)(null != rn && T.a);
            aO[0] !== rt || aO[1] !== aB ? (t = {
                auth: rt,
                conversationId: aB
            }, aO[0] = rt, aO[1] = aB, aO[2] = t) : t = aO[2];
            let rr = (0, c.x)(null != rt && !rt.isLoading && null === rt.authMethod && aQ.h, t),
                {
                    conversationId: ro
                } = (0, f.cb)();
            aO[3] !== aB || aO[4] !== a8 || aO[5] !== ro || aO[6] !== re || aO[7] !== a5 ? (n = () => (0, t8.e)(a8 || null != a5 || null == re.get(tm.j, aB) ? aB : ro ?? ""), aO[3] = aB, aO[4] = a8, aO[5] = ro, aO[6] = re, aO[7] = a5, aO[8] = n) : n = aO[8];
            let [rs, ri] = (0, m.useState)(n);
            aO[9] !== rs || aO[10] !== aB || aO[11] !== re ? (i = () => rs && !re.get(sE.b, aB) ? aB : null, aO[9] = rs, aO[10] = aB, aO[11] = re, aO[12] = i) : i = aO[12];
            let [rl] = (0, m.useState)(i), rc = null != aY || null != rn && !(void 0 !== aX && aX && ra);
            aO[13] !== aB || aO[14] !== a7 || aO[15] !== a8 || aO[16] !== rc || aO[17] !== re ? (y = () => {
                if (!rc && !a7 && !a8) return function(e, t) {
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
                                                if (e.get(eN.f)?.getExperiment("1965446322").get("enable_artifact_preview_auto_open", !1) !== !0) return;
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
                }(re, aB)
            }, x = [aB, a7, a8, rc, re], aO[13] = aB, aO[14] = a7, aO[15] = a8, aO[16] = rc, aO[17] = re, aO[18] = y, aO[19] = x) : (y = aO[18], x = aO[19]), (0, m.useEffect)(y, x);
            let rd = (0, c.x)(tX.a, aB),
                ru = rc ? null : rd;
            aO[20] !== aY ? (W = () => null == aY ? null : (0, t8.b)(), aO[20] = aY, aO[21] = W) : W = aO[21];
            let [rh] = (0, m.useState)(W), rp = rh ?? aB;
            aO[22] !== rp ? (J = (0, em.o)({
                routeKind: "chatgpt-thread",
                conversationId: rp
            }), aO[22] = rp, aO[23] = J) : J = aO[23];
            let rm = null != (0, c.x)(Z.c, J);
            aO[24] !== rp || aO[25] !== aJ || aO[26] !== re ? (ev = () => {
                if (null != aJ && 0 !== aJ.length) return (0, ok.b)(re, rp, aJ)
            }, ey = [rp, aJ, re], aO[24] = rp, aO[25] = aJ, aO[26] = re, aO[27] = ev, aO[28] = ey) : (ev = aO[27], ey = aO[28]), (0, m.useEffect)(ev, ey);
            let rg = (0, m.useRef)(null),
                [rf, rv] = (0, m.useState)(null),
                [ry, rb] = (0, m.useState)(null);
            aO[29] === Symbol.for("react.memo_cache_sentinel") ? (eb = () => () => rb(null), aO[29] = eb) : eb = aO[29], aO[30] !== a6 ? (eC = [a6], aO[30] = a6, aO[31] = eC) : eC = aO[31], (0, m.useLayoutEffect)(eb, eC);
            let [rx, rC] = (0, m.useState)(null), rw = ry?.activation === a6 ? ry.messageId : null, r_ = rx === a6, rj = (0, m.useRef)(null);
            aO[32] === Symbol.for("react.memo_cache_sentinel") ? (e_ = () => {
                let e = new AbortController;
                return rj.current = e, () => e.abort()
            }, aO[32] = e_) : e_ = aO[32], aO[33] !== a6 ? (ej = [a6], aO[33] = a6, aO[34] = ej) : ej = aO[34], (0, m.useLayoutEffect)(e_, ej);
            let rS = (0, g.a)(),
                rI = (0, f._)(),
                rT = (0, eG.d)(),
                rE = (0, c.x)(tm.j, aB);
            aO[35] !== re ? (eS = e => {
                (0, tb.c)(re, e)
            }, aO[35] = re, aO[36] = eS) : eS = aO[36];
            let rP = (0, m.useEffectEvent)(eS);
            aO[37] !== rE || aO[38] !== rP ? (eI = () => () => {
                null != rE && rP(rE)
            }, aO[37] = rE, aO[38] = rP, aO[39] = eI) : eI = aO[39], aO[40] !== rE ? (eT = [rE], aO[40] = rE, aO[41] = eT) : eT = aO[41], (0, m.useEffect)(eI, eT);
            let rA = (0, c.x)(af.a, aB),
                rM = (0, c.x)(tm.N, aB),
                rk = (0, c.x)(tP.chatGptConversationQueryById$, rc || a$ && null != rM ? null : rE);
            (0, c.x)(rc ? null : tM.a, rE);
            let rR = (0, c.x)(!rr && tg.e, aB),
                rN = rE ?? aB,
                rO = (0, c.x)(tm.C, aB),
                rB = (0, c.x)(tm.y, aB),
                rF = (0, c.x)(tm.T, aB),
                rL = (0, c.x)(tm.D, aB),
                rz = (0, c.x)(tm.O, aB),
                rD = (0, c.x)(tm.ab, aB),
                rG = (0, c.x)(tm.X, aB),
                rH = (0, c.x)(tm.Z, aB),
                rW = (0, c.x)(ad, aB);
            aO[42] !== rS || aO[43] !== rW ? (eE = rW ?? rS.formatMessage(ex.a.newChat), aO[42] = rS, aO[43] = rW, aO[44] = eE) : eE = aO[44];
            let rq = eE,
                rK = (0, c.x)(tm.E, aB),
                rU = (0, c.x)(tm.eb, aB),
                rV = (0, c.x)(tm.fb, aB),
                rQ = (0, c.x)(tP.n, aY),
                r$ = (0, m.useRef)(null),
                rY = rQ.isSuccess && null != rQ.data ? aY : null;
            aO[45] !== re ? (eP = e => {
                (0, el.a)(re, o.i, {
                    actor: "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER",
                    action: "CHATGPT_SHARE_FLOW_ACTION_SHARED_CONTENT_VIEWED",
                    contentType: "CHATGPT_SHARE_FLOW_CONTENT_TYPE_SHARED_CONVERSATION",
                    availability: "CHATGPT_SHARE_FLOW_AVAILABILITY_COMPLETE",
                    shareId: e
                })
            }, aO[45] = re, aO[46] = eP) : eP = aO[46];
            let rX = (0, m.useEffectEvent)(eP);
            aO[47] !== rY || aO[48] !== rX ? (eA = () => {
                null != rY && r$.current !== rY && (r$.current = rY, rX(rY))
            }, aO[47] = rY, aO[48] = rX, aO[49] = eA) : eA = aO[49], aO[50] !== rY ? (eM = [rY], aO[50] = rY, aO[51] = eM) : eM = aO[51], (0, m.useEffect)(eA, eM);
            let rJ = (0, c.x)(t_.q, aB),
                rZ = (0, c.x)(t_.p, aB),
                r0 = (0, c.x)(t_.n, aB),
                r1 = (0, c.x)(t_.r, aB),
                r2 = (0, c.x)(t_.o, aB),
                r4 = (0, c.x)(t_.j, aB),
                r5 = (0, c.x)(tm.cb, aB),
                r6 = (0, c.x)(t_.B, aB);
            aO[52] !== rD ? (tC = (0, tm.Bb)(rD), aO[52] = rD, aO[53] = tC) : tC = aO[53];
            let r7 = tC,
                r8 = (0, c.x)(tZ, aB),
                r9 = (0, c.z)(I.v),
                oe = (0, c.z)(I.s),
                ot = (0, c.z)(I.u),
                on = (0, c.z)(I.n),
                oa = (0, c.z)(I.b),
                or = (0, c.z)(I.o),
                oo = (0, c.z)(er.pagesEnabled$);
            aO[54] === Symbol.for("react.memo_cache_sentinel") ? (tI = (0, L.a)(), aO[54] = tI) : tI = aO[54];
            let os = (0, eR.f)(tI);
            aO[55] === Symbol.for("react.memo_cache_sentinel") ? (tT = (0, ee.b)(), aO[55] = tT) : tT = aO[55];
            let oi = (0, eR.f)(tT),
                ol = null != rM,
                oc = (0, c.z)(sH.f),
                od = rc ? rQ : rk;
            rs && null != od.data && ri(!1);
            let ou = rs && ol && null == od.data,
                oh = od.isLoading || !ou && od.isError;
            aO[56] !== rf || aO[57] !== rp || aO[58] !== oh || aO[59] !== rc || aO[60] !== a$ || aO[61] !== re ? (tk = (e, t, n, a) => {
                !(e || re.get(eh.a)) && ((0, t_.b)(re, rp, t, void 0, n, a), rf?.focus(), rc || oh || (0, tE.f)(re, rp, {
                    isTemporaryChat: a$
                }))
            }, aO[56] = rf, aO[57] = rp, aO[58] = oh, aO[59] = rc, aO[60] = a$, aO[61] = re, aO[62] = tk) : tk = aO[62];
            let op = tk;
            aO[63] !== aB || aO[64] !== rn ? (tN = null == (tR = null == rn ? null : (0, sJ.a)(rn, aB)) ? void 0 : (0, ag.a)(tR), aO[63] = aB, aO[64] = rn, aO[65] = tR, aO[66] = tN) : (tR = aO[65], tN = aO[66]);
            let om = tN,
                og = tR ?? od.data,
                of = rK ? rU : og?.title,
                ov = (0, c.z)(S.h),
                oy = (0, c.z)(S.g),
                ob = "chatgpt-thread" === re.value.routeKind && re.value.workSideChat?.conversationId === aB,
                ox = og?.conversation_origin ?? rB ?? (null != a5 || ob ? "tpp" : null),
                oC = "tpp" === ox,
                ow = oC && "denied" === r9.status && "go-plan" === r9.reason,
                o_ = (0, c.z)(eO.e),
                oj = (0, f.Y)(),
                oS = oj.state;
            (0, c.z)(ef.b);
            let oI = (0, c.x)(eN.d, "3901104270") && oS?.openGoalPlan === !0,
                oT = (0, eD.a)(),
                oE = "tpp" === ox || "flora" === ox,
                oP = (0, c.z)(nS.b),
                oA = (0, c.z)(!!oE && I.w),
                oM = void 0 !== aU && aU || oA,
                oR = null == o_ || o_.isFullWidth ? void 0 : o_.width ?? 420,
                oN = !0 === (0, c.z)(oE ? null : eQ.d),
                oO = (0, c.z)(oE ? eu.b : eu.a),
                oB = !oE && oO,
                oF = !oi || or && !oE,
                oL = !rc && or && !oE,
                oz = oL && on,
                oD = rc && og?.is_read_only === !0 || a4?.is_read_only === !0;
            aO[67] !== aB || aO[68] !== rc || aO[69] !== re ? (tO = () => null, aO[67] = aB, aO[68] = rc, aO[69] = re, aO[70] = tO) : tO = aO[70];
            let [oG] = (0, m.useState)(tO), oH = og?.gizmo_id ?? rF ?? oG?.gizmoId ?? null;
            aO[71] !== oH || aO[72] !== rc ? (tB = rc || null == oH || (0, t6.a)(oH) ? null : oH, aO[71] = oH, aO[72] = rc, aO[73] = tB) : tB = aO[73];
            let oW = tB,
                oq = (0, c.x)(tS, rp);
            aO[74] !== og || aO[75] !== aB || aO[76] !== rq || aO[77] !== oj.pathname || aO[78] !== aY || aO[79] !== rn ? (tL = (0, tF.d)({
                conversation: og,
                conversationId: aB,
                conversationTitle: rq,
                pathname: oj.pathname,
                sharedConversationId: aY,
                sharedPost: rn
            }), aO[74] = og, aO[75] = aB, aO[76] = rq, aO[77] = oj.pathname, aO[78] = aY, aO[79] = rn, aO[80] = tL) : tL = aO[80];
            let oK = tL,
                oU = !ot && null == og && null == oG,
                oV = null != rE && !rR && !oU && (ot || oe),
                oQ = null;
            rc || (oQ = null != og ? (0, ew.A)(og) : (0, t6.a)(rF) ? rF : oG?.projectId ?? null);
            let o$ = (0, c.x)(eX.c, rc ? null : aB),
                oY = rc || oE || null != oQ || o$ || null == oq ? oW : oq.id;
            aO[81] !== rp || aO[82] !== oY || aO[83] !== oj.pathname ? (tz = {
                gizmoId: oY,
                conversationId: rp,
                visitKey: oj.pathname
            }, aO[81] = rp, aO[82] = oY, aO[83] = oj.pathname, aO[84] = tz) : tz = aO[84];
            let oX = (0, c.x)(sA.d, tz),
                {
                    data: oJ
                } = (0, s.a)({
                    enabled: null != oQ,
                    queryFn: () => {
                        if (null == oQ) throw Error("Expected a ChatGPT project id");
                        return (0, N.c)(oQ)
                    },
                    queryKey: (0, ew.D)(oQ ?? ""),
                    staleTime: ez.b.ONE_MINUTE
                }),
                oZ = null != oQ && (oJ?.gizmo.share_recipient !== "private" || (oJ?.gizmo.sharing?.subjects?.length ?? 0) > 0);
            aO[85] !== og?.context_scopes || aO[86] !== oJ?.gizmo.gizmo_snorlax_type ? (tG = og?.context_scopes?.includes("HEALTH") === !0 || oJ?.gizmo.gizmo_snorlax_type === "potion", aO[85] = og?.context_scopes, aO[86] = oJ?.gizmo.gizmo_snorlax_type, aO[87] = tG) : tG = aO[87];
            let o0 = tG,
                o1 = (0, sk.a)(og?.context_scopes, {
                    projectType: oJ?.gizmo.gizmo_snorlax_type,
                    projectId: oQ,
                    lockedProjectId: oc?.projectId
                }),
                o2 = rR || oZ || o0 || o1;
            aO[88] !== oJ?.gizmo.display.name || aO[89] !== oJ?.gizmo.display.name.trim ? (tH = oJ?.gizmo.display.name.trim() || null, aO[88] = oJ?.gizmo.display.name, aO[89] = oJ?.gizmo.display.name.trim, aO[90] = tH) : tH = aO[90];
            let o3 = tH,
                o4 = oJ?.gizmo.display.theme,
                o5 = oJ?.gizmo.display.emoji;
            aO[91] !== oJ ? (tq = "shared" === (0, t7.b)(oJ) ? (0, a.jsx)(q.b, {
                icon: {
                    assets: {
                        16: iw,
                        20: i_.a
                    }
                }
            }) : void 0, aO[91] = oJ, aO[92] = tq) : tq = aO[92], aO[93] !== o4 || aO[94] !== o5 || aO[95] !== tq ? (tK = (0, a.jsx)(ec.a, {
                className: "icon-leading",
                size: "leading",
                color: o4,
                icon: o5,
                sharedIcon: tq
            }), aO[93] = o4, aO[94] = o5, aO[95] = tq, aO[96] = tK) : tK = aO[96];
            let o6 = tK,
                o7 = (0, c.x)(tm.i, aB),
                o8 = o7?.metadata ?? og?.context_truncation_continuation,
                o9 = rc || a$ || null != a4 || null == ov || og?.owner?.user_id == null || null == oQ || og.owner.user_id === (oy ? ov.split("__")[0] : ov) ? null : (0, ae.d)(oQ, og.conversation_id, og.owner.user_id),
                se = !rc && !a7 && !oM,
                st = (0, c.x)(se ? sQ.c : null, aB),
                sn = st?.isReviewing === !0,
                sa = null == st ? rM : st.conversation.mapping,
                sr = null == st ? rO : st.conversation.current_node,
                so = null == rM ? og : null,
                ss = sa ?? so?.mapping,
                si = (0, eR.i)();
            aO[97] !== ss || aO[98] !== si ? (tU = function(e, t) {
                if (null != e && Object.values(e).some(e => e?.message != null && (0, sM.b)(e.message))) return () => (0, eR.d)(t, "2347981323").get("enabled", !1)
            }(ss, si), aO[97] = ss, aO[98] = si, aO[99] = tU) : tU = aO[99];
            let sl = tU,
                sc = (0, c.z)(null != sl ? eK.h : void 0),
                sd = (0, c.x)(null != sl && !rc && !a7 && !sn && eW.a, aB),
                su = (0, c.z)(sd ? eq.a : void 0);
            aO[100] === Symbol.for("react.memo_cache_sentinel") ? (t$ = (0, tA.a)(), aO[100] = t$) : t$ = aO[100];
            let sh = t$;
            aO[101] === Symbol.for("react.memo_cache_sentinel") ? (tY = new WeakMap, aO[101] = tY) : tY = aO[101];
            let sp = tY;
            aO[102] !== oO || aO[103] !== oB || aO[104] !== o8 || aO[105] !== ox || aO[106] !== sr || aO[107] !== sa || aO[108] !== oP || aO[109] !== sl || aO[110] !== so || aO[111] !== a7 || aO[112] !== rc || aO[113] !== r7 || aO[114] !== oE || aO[115] !== rz || aO[116] !== r0 || aO[117] !== r2 || aO[118] !== rZ || aO[119] !== rJ || aO[120] !== r1 || aO[121] !== sn || aO[122] !== re.get || aO[123] !== st?.isEntering || aO[124] !== rA || aO[125] !== rD || aO[126] !== su || aO[127] !== sc ? (t9 = () => sh({
                conversation: so,
                contextContinuation: o8,
                clinicalSearchEnabled: oB,
                clinicalCitationsEnabled: oO,
                enableCloudBrowserActivity: oP,
                conversationOrigin: ox,
                enableVoiceImageLoadingFix: sl,
                voiceImageSessionId: sc,
                voiceImageGenerationSpawnIds: su,
                enableImageGenerationLoadingState: !rc && !a7 && !sn && "error" !== rD,
                getRenderTelemetry: e => (0, iv.c)(re.get, e),
                isWorkConversation: oE,
                isStreaming: !rc && !a7 && !sn && r7,
                mode: "conversation",
                mcpResponseCache: sp,
                moderationDisclaimersByMessageId: rz,
                ...rA,
                pendingSubmission: null == rJ || rc || sn || st?.isEntering ? null : {
                    attachments: r0,
                    commentAttachments: r2,
                    prompt: rJ,
                    ...rZ,
                    selectedTextAttachments: r1
                },
                threadCurrentNode: sr,
                threadMapping: sa
            }), aO[102] = oO, aO[103] = oB, aO[104] = o8, aO[105] = ox, aO[106] = sr, aO[107] = sa, aO[108] = oP, aO[109] = sl, aO[110] = so, aO[111] = a7, aO[112] = rc, aO[113] = r7, aO[114] = oE, aO[115] = rz, aO[116] = r0, aO[117] = r2, aO[118] = rZ, aO[119] = rJ, aO[120] = r1, aO[121] = sn, aO[122] = re.get, aO[123] = st?.isEntering, aO[124] = rA, aO[125] = rD, aO[126] = su, aO[127] = sc, aO[128] = t9) : t9 = aO[128], st?.isEntering, aO[129] !== t9 ? (ne = t9(), aO[129] = t9, aO[130] = ne) : ne = aO[130];
            let {
                isConversationEmpty: sm,
                renderedConversation: sg,
                renderedTurns: sf,
                showPendingLoadingMessage: sv
            } = ne;
            aO[131] !== a8 || aO[132] !== oE || aO[133] !== sg || aO[134] !== re ? (nt = () => {
                if (!a8 && oE) return re.set(iC.b, sg), () => {
                    re.get(iC.b) === sg && re.set(iC.b, null)
                }
            }, nn = [a8, oE, sg, re], aO[131] = a8, aO[132] = oE, aO[133] = sg, aO[134] = re, aO[135] = nt, aO[136] = nn) : (nt = aO[135], nn = aO[136]), (0, m.useEffect)(nt, nn);
            let sy = (0, c.x)(eJ.g, aB),
                sb = sv && null == sy,
                sx = !oE && !rc && !a8 && !a7,
                sC = (0, c.x)(oB || a8 || rc ? null : A.a, aB),
                sw = (sC?.length ?? 0) > 0,
                s_ = (0, c.x)(sx ? M.b : null, aB),
                sj = JSON.stringify([aB, a6]),
                [sI, sT] = (0, m.useState)(null),
                sN = function(e, t) {
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
                }(sI, {
                    completionAttemptId: s_,
                    allowAutoOpen: !(0, X.a)("(width < 768px)"),
                    suppressAutoOpen: oI,
                    conversation: sx && (ou || !oh) ? sg : null,
                    isTurnActive: r7,
                    hasGoal: sw,
                    isPendingUserTurn: r4 && null != rJ && !r7,
                    visitKey: sj
                });
            sN !== sI && sT(sN);
            let sO = null == a5 && !oB && !a8 && !rc && (oC || sx) && !a7,
                sB = sO && sg?.mapping === rM && sg?.current_node === rO,
                sF = (0, c.x)(sB ? tm.q : null, aB),
                sL = sg?.mapping,
                sz = sg?.current_node;
            aO[137] !== sL || aO[138] !== sz ? (na = l()(() => {
                let e = null == sL ? [] : (0, u.a)({
                    mapping: sL,
                    current_node: sz
                });
                return {
                    messages: e,
                    resources: (0, tp.e)(e)
                }
            }), aO[137] = sL, aO[138] = sz, aO[139] = na) : na = aO[139];
            let sW = na;
            aO[140] !== sx || aO[141] !== r4 || aO[142] !== sO || aO[143] !== r7 || aO[144] !== oo || aO[145] !== r0 || aO[146] !== sW || aO[147] !== sf || aO[148] !== sF ? (nr = sO ? l()(() => (function(e) {
                var t;
                let n, a, {
                        automationReferences: r,
                        includePages: o = !1,
                        includeSources: s = !0,
                        messages: i,
                        pendingAttachments: l = [],
                        resources: c = (0, tp.e)(i),
                        turns: d,
                        isTurnActive: h = d.at(-1)?.turn.status === "in_progress"
                    } = e,
                    p = [...c.inputs],
                    m = s ? (0, ny.a)(i, d) : [],
                    g = new Map,
                    f = new Map,
                    v = (t = i, -1 !== (n = nu()(t, e => e?.recipient === "turn_plan.update_turn_plan" && (0, nC.b)(e)?.item?.type === "todo-list")) && t.slice(n + 1).some(e => "assistant" === e.author.role && "final" === e.channel && "all" === e.recipient && "finished_successfully" === e.status)),
                    y = [],
                    b = new Map(i.map(e => [(0, u.g)(e), e])),
                    x = nu()(i, e => "user" === e.author.role),
                    C = [];
                for (let e of l) p.some(t => t.fileId === e.id || null != e.libraryFileId && t.libraryFileId === e.libraryFileId) || p.push({
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
                    of d) {
                    if (s && "complete" === t.status)
                        for (let n of t.messageIds) {
                            let t = b.get(n);
                            t?.author.role === "assistant" && ("finished_successfully" === t.status || "finished_partial_completion" === t.status) && (0, nv.j)(t.metadata) && y.push({
                                messageId: n,
                                turnId: e,
                                deletedMemoryCitationUuids: (0, nv.c)(t.metadata)
                            })
                        }
                    for (let n of nw(t.items)) {
                        if (o && "mcp-tool-call" === n.type) {
                            let e = (0, ng.b)(n);
                            if (null != e && (e.activities.includes("created") || e.activities.includes("updated"))) {
                                let t = (0, nh.d)(e.url);
                                if (t?.kind === "page") {
                                    let n = f.get(t.id);
                                    f.set(t.id, {
                                        key: `page:${t.id}`,
                                        kind: "page",
                                        pageId: t.id,
                                        title: e.title ?? n?.title ?? null
                                    })
                                }
                            }
                        }
                        if (o && "assistant-message" === n.type && n.completed)
                            for (let e of (0, tn.c)(n.content)) f.has(e.id) || f.set(e.id, {
                                key: `page:${e.id}`,
                                kind: "page",
                                pageId: e.id,
                                title: null
                            });
                        if ("todo-list" === n.type) {
                            C = n.plan.map((t, n) => ({
                                key: `progress:${e}:${String(n)}`,
                                label: t.step,
                                status: v ? "completed" : t.status
                            }));
                            continue
                        }
                        if ("generated-image" === n.type && "completed" === n.status && null != n.src) {
                            let e = `image:${n.id}`;
                            g.set(e, {
                                image: n,
                                key: e,
                                kind: "generated-image"
                            })
                        }
                    }
                }
                let w = (0, np.b)(d.flatMap(e => {
                    let {
                        turn: t
                    } = e;
                    return nw(t.items).filter(e => "mcp-tool-call" === e.type)
                })).at(-1);
                return a = null == w ? [...c.outputs, ...f.values(), ...g.values()] : [{
                    ...w,
                    key: `site:${w.projectId}`,
                    kind: "site"
                }, ...c.outputs.filter(e => null == w.archivePath || ! function(e, t) {
                    if (null != e.sandboxPath) return e.sandboxPath === t;
                    let n = t.split(/[\\/]/u).at(-1)?.toLowerCase();
                    return null != n && e.name.toLowerCase() === n
                }(e, w.archivePath)), ...f.values(), ...g.values()], {
                    automationIds: (0, nf.b)(i, r ?? void 0),
                    browserScreenshots: (0, nb.d)(i),
                    inputs: p,
                    sourceTurns: y,
                    outputs: a,
                    progressSteps: C,
                    isPlanSummaryUpdating: h && i.slice(x + 1).some(e => "assistant" === e.author.role && nf.a.test(e.recipient ?? "") || "tool" === e.author.role && nf.a.test(e.author.name ?? "")),
                    planSummaryRefreshKey: `${d.at(-1)?.id??""}:${h}`,
                    sources: s ? [...Array.from(new Map(i.filter(e => "user" === e.author.role).flatMap(e => (0, nm.a)((0, u.e)(e))).map(e => [e.projectId, e])).values(), e => ({
                        kind: "site",
                        key: `site:${e.projectId}`,
                        projectId: e.projectId,
                        label: e.title
                    })), ...m.filter(e => "memory" === e.kind), ...new Map(d.flatMap(e => {
                        let {
                            turn: t
                        } = e;
                        return (t.skillSources ?? []).map(e => [e.key, e])
                    })).values(), ...c.pluginSources, ...m.filter(e => "web" === e.kind && "apps" === e.category), ...m.filter(e => "file-source" === e.kind), ...m.filter(e => "web" === e.kind && "apps" !== e.category)] : [],
                    subagents: (0, nx.a)(i)?.subagents ?? []
                }
            })({
                automationReferences: sF,
                includePages: oo,
                includeSources: !sx,
                isTurnActive: r7 || r4,
                ...sW(),
                pendingAttachments: r4 ? r0 : [],
                turns: sf
            })) : null, no = sx ? nr?.() : null, aO[140] = sx, aO[141] = r4, aO[142] = sO, aO[143] = r7, aO[144] = oo, aO[145] = r0, aO[146] = sW, aO[147] = sf, aO[148] = sF, aO[149] = nr, aO[150] = no) : (nr = aO[149], no = aO[150]);
            let sq = no,
                sK = sw || null != sq && (sq.outputs.length > 0 || sq.progressSteps.length > 0 || sq.automationIds.length > 0 || sq.subagents.length > 0 || !rR && sq.browserScreenshots.length > 0),
                sU = sO && (!sx || sK),
                s$ = sU && null == o_,
                sX = JSON.stringify([sj, null != o_]),
                s1 = sx ? sN.isOpen : void 0,
                s2 = sU && !o_?.isFullWidth;
            aO[151] !== oR || aO[152] !== sX || aO[153] !== s1 || aO[154] !== s2 ? (ns = {
                contentShiftResetKey: sX,
                controlledIsOpen: s1,
                isEnabled: s2,
                floatingPanelWidth: oR
            }, aO[151] = oR, aO[152] = sX, aO[153] = s1, aO[154] = s2, aO[155] = ns) : ns = aO[155];
            let s3 = (0, eF.a)(ns),
                s4 = rE ?? aB,
                s5 = oC && null == rV,
                s6 = rL ?? r6,
                s8 = od.isLoading && !ol,
                s9 = !s8 && (null != og || ol),
                ie = s9 && (ou || !oh),
                ia = od.isError && !ou;
            aO[156] !== od.error || aO[157] !== a8 ? (ni = a8 || (0, eU.e)(od.error) || !(od.error instanceof eU.FetchError && [401, 403, 404].includes(od.error.status)), aO[156] = od.error, aO[157] = a8, aO[158] = ni) : ni = aO[158];
            let ir = ni;
            aO[159] !== aB || aO[160] !== rc || aO[161] !== rE ? (nd = null, rc || (nd = rE ?? ((0, t8.e)(aB) ? null : aB)), aO[159] = aB, aO[160] = rc, aO[161] = rE, aO[162] = nd) : nd = aO[162], aO[163] !== rw || aO[164] !== og || aO[165] !== ox || aO[166] !== rS || aO[167] !== a$ || aO[168] !== oE || aO[169] !== ow || aO[170] !== rI || aO[171] !== nd || aO[172] !== aZ || aO[173] !== re || aO[174] !== a6 ? (n_ = (e, t) => {
                let n = void 0 !== t && t;
                if (null == nd || null != rw || ow) return;
                let a = rj.current?.signal;
                null == a || a.aborted || (rb({
                    messageId: e,
                    activation: a6
                }), (0, tm.h)(re, {
                    conversationId: nd,
                    messageId: e,
                    inWorkMode: n
                }).then(e => {
                    let {
                        clientThreadId: t
                    } = e;
                    a.aborted || (n && (0, e$.a)(re, "opened"), rI(null == aZ ? (0, it.c)(t, {
                        isTemporaryChat: a$
                    }) : (0, f.C)(aZ, {
                        conversationId: t
                    })))
                }).catch(() => {
                    a.aborted || (n && (0, e$.a)(re, "failed"), rb(null), re.get(K.f).danger(rS.formatMessage({
                        id: "chatgptConversations.branchFailed",
                        defaultMessage: "Failed to create chat"
                    }), {
                        errorAnalytics: {
                            toastId: "branch_conversation_failed",
                            operation: "branch_conversation",
                            errorCategory: "conversation",
                            conversationId: nd ?? void 0,
                            retryable: !0,
                            userFacingError: {
                                surface: (0, t2.b)(null == ox && null == og ? null : oE),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    }))
                }))
            }, aO[163] = rw, aO[164] = og, aO[165] = ox, aO[166] = rS, aO[167] = a$, aO[168] = oE, aO[169] = ow, aO[170] = rI, aO[171] = nd, aO[172] = aZ, aO[173] = re, aO[174] = a6, aO[175] = n_) : n_ = aO[175];
            let io = (0, eH.a)(n_);
            aO[176] !== og || aO[177] !== aB || aO[178] !== ox || aO[179] !== rS || aO[180] !== oN || aO[181] !== a$ || aO[182] !== oE || aO[183] !== re || aO[184] !== rE ? (nE = async (e, t, n, a) => {
                if (!oN) try {
                    await async function(e, t) {
                        let {
                            conversationId: n,
                            isTemporaryChat: a = !1,
                            messageId: r,
                            prompt: o,
                            renderFormat: s,
                            inlineSystemHints: i
                        } = t;
                        if (e.get(t_.j, n)) throw new tQ.a("edit_message_busy", "The chat is busy.");
                        let l = e.get(tm.y, n);
                        if ("tpp" === l) throw new tQ.a("edit_message_unsupported_conversation", "Work messages cannot be edited with the Chat flow.");
                        if (!e.get(tZ, n)) throw new tQ.a("edit_message_busy", "The chat is busy.");
                        let c = e.get(tV.b, {
                            conversationId: n,
                            messageId: r
                        });
                        if (null == c) throw new tQ.a("edit_message_target_unavailable", "The user message could not be edited.");
                        let {
                            selectedModel: d
                        } = c, u = o.trim(), p = (0, tV.c)(c.message, e.get, i), m = (0, tJ.c)({
                            message: c.message,
                            prompt: u,
                            renderFormat: s,
                            systemHints: p,
                            inlineSystemHints: i
                        }), g = (0, h.f)(m.message.metadata), f = m.message.content, v = "multimodal_text" === f.content_type && f.parts.some(e => "string" != typeof e);
                        if (0 === u.length && 0 === g.length && !v) throw new tQ.a("edit_message_empty", "The edited message cannot be empty.");
                        if (e.get(eN.d, "3574573347")) {
                            let t = e.get(tV.a, n);
                            t?.messageId === r && t.prompt === o && tW()((0, tV.c)(c.message, e.get, t.inlineSystemHints), p) || (e.set(tV.a, n, {
                                messageId: r,
                                prompt: o,
                                isTemporaryChat: a,
                                inlineSystemHints: i
                            }), (0, tE.f)(e, n, {
                                isTemporaryChat: a
                            }))
                        }
                        let y = t0(e.get, n),
                            b = y.request.current,
                            x = () => t0(e.get, n).request.current === b && tW()(e.get(tV.b, {
                                conversationId: n,
                                messageId: r
                            }), c) && !(0, tm.Bb)(e.get(tm.ab, n));
                        e.set(t_.j, n, !0);
                        try {
                            if ("flora" !== l && null != b && null == e.get(y.session$) && null == e.get(tX.a, n) && (await b.stop(), await b.closed), !x()) throw new tQ.a("edit_message_target_unavailable", "The edited message or active response changed.");
                            await (0, tJ.submitChatGPTCompletion)(e, {
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
                    }(re, {
                        conversationId: aB,
                        isTemporaryChat: a$,
                        messageId: e,
                        prompt: t,
                        inlineSystemHints: a,
                        renderFormat: n
                    })
                } catch (t) {
                    let e = (0, t2.c)(t);
                    throw re.get(K.f).danger(rS.formatMessage({
                        id: "chatgptConversations.editMessageFailed",
                        defaultMessage: "Failed to edit message"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.editMessageFailed",
                            operation: "edit_message",
                            apiErrorCode: e.errorCode,
                            retryable: !0,
                            errorCategory: "conversation",
                            conversationId: rE ?? void 0,
                            userFacingError: {
                                ...e,
                                surface: (0, t2.b)(null == ox && null == og ? null : oE),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    }), t
                }
            }, aO[176] = og, aO[177] = aB, aO[178] = ox, aO[179] = rS, aO[180] = oN, aO[181] = a$, aO[182] = oE, aO[183] = re, aO[184] = rE, aO[185] = nE) : nE = aO[185];
            let is = (0, eH.a)(nE);
            aO[186] !== rp || aO[187] !== og || aO[188] !== aB || aO[189] !== ox || aO[190] !== rS || aO[191] !== oN || aO[192] !== a$ || aO[193] !== oE || aO[194] !== ow || aO[195] !== rI || aO[196] !== a3 || aO[197] !== re || aO[198] !== rE ? (nA = async (e, t) => {
                if (!oN && !ow) try {
                    let n = re.get(r3.e, aB);
                    if (n?.startsNewWorkConversation || null == re.get(tm.j, aB) || (0, eZ.j)(re.get(tm.V, aB)?.metadata?.errorCode)) {
                        if (n?.message.id !== e) return;
                        let a = (0, u.e)(n.prompt),
                            r = (0, R.i)(n.prompt.metadata, a, (0, h.e)(n.prompt.metadata), (0, p.x)(a)),
                            o = (0, F.a)(n.prompt, a, r),
                            s = re.get(t_.u, rp),
                            i = null != o.renderFormat ? o.message : a,
                            l = s.length > 0 ? s : i,
                            c = s.length > 0 ? void 0 : o.renderFormat ?? "plain";
                        if (null != a3) return void await a3(l, c);
                        if (null == re.get(tm.j, aB) && "string" == typeof n.prompt.metadata?.model_first_landing_ref) {
                            let e = l;
                            if (null != c) {
                                let t = (0, ed.e)(l, {
                                    defaultTextKind: "plain" === c ? "literal" : "prompt",
                                    enableRichText: !0,
                                    enableFileMentions: !0
                                });
                                e = t.getPersistedText(), t.destroy()
                            }
                            let t = `chatgpt:${aB}`;
                            (0, D.E)(t, (t, n) => n ? t : e) || (0, t_.Y)(re, aB, e), (0, D.e)(t);
                            return
                        }
                        if (n.startsNewWorkConversation) {
                            let e = "user" === n.prompt.author.role ? (0, u.i)((0, u.s)(n.prompt.metadata?.serialization_metadata)?.work_handoff_recovery_prompt) : null,
                                t = null != e && e.length <= 1e3 ? e : (0, p.x)(a);
                            (0, G.n)(re, "work"), await rI("/", {
                                state: {
                                    focusComposerNonce: Date.now(),
                                    prefillPrompt: s.length > 0 ? s : t,
                                    prefillPromptFormat: s.length > 0 ? void 0 : "plain",
                                    prefillPromptOnlyIfEmpty: !0
                                }
                            });
                            return
                        }
                        if (oE && !a$ && (0, z.cb)(re, (0, Q.b)({
                                entrypoint: "home"
                            }))) return void await rI("/");
                        let d = (0, u.l)(n.prompt.metadata?.system_hints).filter(e => "search" !== e || !1 !== n.forceUseSearch);
                        !0 !== n.forceUseSearch || d.includes("search") || d.push("search");
                        let m = (0, t5.g)(re, d);
                        (0, t_.Z)(re, m, t.model);
                        let g = re.get(tm.T, aB);
                        (0, G.n)(re, oE ? "work" : "chat"), await rI({
                            pathname: "/",
                            search: (0, it.e)("", a$)
                        }, {
                            state: {
                                initialChatGptConversationId: m,
                                project: null,
                                chatGptProjectId: (0, t6.a)(g) ? g : null,
                                chatGptCustomGptId: (0, t6.a)(g) ? null : g,
                                focusComposerNonce: Date.now(),
                                prefillPrompt: l,
                                prefillPromptFormat: c,
                                prefillPromptOnlyIfEmpty: oE
                            }
                        });
                        return
                    }
                    await (0, r3.h)(re, {
                        conversationId: aB,
                        isTemporaryChat: a$,
                        messageId: e,
                        retry: oE && "error_retry" === t.source && null == t.model.thinkingEffort ? {
                            ...t,
                            model: re.get(t_.v, aB)
                        } : t
                    })
                } catch {
                    re.get(K.f).danger(rS.formatMessage({
                        id: "chatgptConversations.regenerate.failed",
                        defaultMessage: "Failed to regenerate response"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.regenerate.failed",
                            operation: "regenerate_response",
                            errorCategory: "conversation",
                            conversationId: rE ?? void 0,
                            userFacingError: {
                                surface: (0, t2.b)(null == ox && null == og ? null : oE),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    })
                }
            }, aO[186] = rp, aO[187] = og, aO[188] = aB, aO[189] = ox, aO[190] = rS, aO[191] = oN, aO[192] = a$, aO[193] = oE, aO[194] = ow, aO[195] = rI, aO[196] = a3, aO[197] = re, aO[198] = rE, aO[199] = nA) : nA = aO[199];
            let ii = (0, eH.a)(nA);
            aO[200] !== og || aO[201] !== aB || aO[202] !== rq || aO[203] !== rS || aO[204] !== r_ || aO[205] !== a$ || aO[206] !== rI || aO[207] !== rT || aO[208] !== oQ || aO[209] !== re || aO[210] !== rE || aO[211] !== oG || aO[212] !== a6 ? (nM = () => {
                if (r_ || null == rE) return;
                let e = re.get(I.u);
                if (!e && !re.get(I.s) || !e && null == og && null == oG) return;
                let t = rj.current?.signal;
                null == t || t.aborted || (rC(a6), (e ? (0, tx.f)(re, {
                    chatGptThreadId: aB,
                    conversationTitle: rq
                }).then(e => {
                    if (null == e) return null;
                    let n = (0, w.a)(re, e);
                    if ("created" === e.status) return null == n || t.aborted || re.get(K.f).danger(n.message, {
                        errorAnalytics: {
                            toastId: "chatgptConversationPage.handleHandoff"
                        }
                    }), e.conversationId;
                    throw (0, w.a)(re, e)
                }) : (0, b.a)({
                    scope: re,
                    projectId: oQ ?? void 0,
                    prompt: `Continuing from ${(0,H.f)({conversationId:rE,title:rq?.trim()||"ChatGPT thread"})}`
                }).then(iM)).then(n => {
                    if (!t.aborted) {
                        if (null != n) return void(e ? rT(n) : rI((0, it.c)(n, {
                            isTemporaryChat: a$
                        })));
                        throw Error("Unable to create a Work conversation")
                    }
                }).catch(() => {
                    t.aborted || (rC(null), re.get(K.f).danger(rS.formatMessage({
                        id: "chatgptConversations.handoffFailed",
                        defaultMessage: "Failed to create chat"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.handoffFailed"
                        }
                    }))
                }))
            }, aO[200] = og, aO[201] = aB, aO[202] = rq, aO[203] = rS, aO[204] = r_, aO[205] = a$, aO[206] = rI, aO[207] = rT, aO[208] = oQ, aO[209] = re, aO[210] = rE, aO[211] = oG, aO[212] = a6, aO[213] = nM) : nM = aO[213];
            let ic = nM;
            aO[214] !== aB || aO[215] !== rI || aO[216] !== re || aO[217] !== rh || aO[218] !== aY || aO[219] !== rn ? (nk = () => {
                if (null != rn) {
                    if ((0, t8.e)(aB)) {
                        let e = (0, aQ.a)(re, rn, aB);
                        null != e && (re.get(T.a) ? re.set(s0.a, e) : rI((0, it.c)(e)))
                    }
                    return
                }
                let e = re.query.getData(tP.n, aY);
                null != e && null != aY && null != rh && ((0, tm.ob)(re, {
                    conversation: e,
                    conversationId: rh,
                    sharedConversationId: aY
                }), re.get(T.a) ? re.set(s0.a, rh) : rI((0, it.c)(rh)))
            }, aO[214] = aB, aO[215] = rI, aO[216] = re, aO[217] = rh, aO[218] = aY, aO[219] = rn, aO[220] = nk) : nk = aO[220];
            let id = (0, eH.a)(nk);
            aO[221] !== a5 ? (nR = a5?.mcpAppContext == null ? null : {
                hostId: eg.a,
                server: "codex_apps",
                connectorId: a5.mcpAppContext.id
            }, aO[221] = a5, aO[222] = nR) : nR = aO[222];
            let iu = (0, c.x)(ea.b, nR),
                ih = a5?.fullscreenContent != null ? "content" : "workspace",
                ip = (0, P.a)(a8 ? "embedded" : ih),
                im = !iu && (ou || !od.isError) && !a7 && !oM && (null == rn || rt?.authMethod === "chatgpt" || ra) && (!rc || null != og),
                ig = oa || oM || oD || oz || ow,
                ib = ig || sn || st?.needsEntry === !0;
            if (sn) {
                let e;
                aO[223] !== rS ? (e = rS.formatMessage(sQ.d.readOnlyPlaceholder), aO[223] = rS, aO[224] = e) : e = aO[224], nN = e
            } else !ig && st?.needsEntry && (nN = !1);
            let ij = im && !ig && !rc && !oh && !oN && !r7 && !r4 && !r5 && !oX,
                iS = !im || rc || ib || oh ? null : rf;
            if (aO[225] !== oX || aO[226] !== rw || aO[227] !== oO || aO[228] !== oB || aO[229] !== og?.current_node || aO[230] !== aB || aO[231] !== oW || aO[232] !== oP || aO[233] !== s6 || aO[234] !== io || aO[235] !== is || aO[236] !== ii || aO[237] !== aW || aO[238] !== a7 || aO[239] !== ib || aO[240] !== oh || aO[241] !== o2 || aO[242] !== oM || aO[243] !== rc || aO[244] !== r4 || aO[245] !== a$ || aO[246] !== oC || aO[247] !== r7 || aO[248] !== oE || aO[249] !== oz || aO[250] !== ow || aO[251] !== ru || aO[252] !== r0 || aO[253] !== nd || aO[254] !== sg || aO[255] !== sf || aO[256] !== sn || aO[257] !== rG || aO[258] !== re.get || aO[259] !== rH || aO[260] !== tR?.current_node || aO[261] !== a4 || aO[262] !== im || aO[263] !== sb || aO[264] !== rA || aO[265] !== r8) {
                let e;
                aO[267] !== oO || aO[268] !== oB || aO[269] !== oP || aO[270] !== oE || aO[271] !== ru || aO[272] !== sg || aO[273] !== sf || aO[274] !== sn || aO[275] !== re.get || aO[276] !== rA ? (e = sn || null == ru || null == sg ? sf : (0, tj.a)({
                    ...sg,
                    current_node: ru.promptMessageId
                }, {
                    clinicalSearchEnabled: oB,
                    clinicalCitationsEnabled: oO,
                    enableCloudBrowserActivity: oP,
                    ...rA,
                    isWorkConversation: oE,
                    getRenderTelemetry: e => (0, iv.c)(re.get, e)
                }), aO[267] = oO, aO[268] = oB, aO[269] = oP, aO[270] = oE, aO[271] = ru, aO[272] = sg, aO[273] = sf, aO[274] = sn, aO[275] = re.get, aO[276] = rA, aO[277] = e) : e = aO[277];
                let t = (0, tA.c)({
                    paragen: ru,
                    hideInitialUserMessage: aW,
                    browserConversationId: void 0,
                    conversationId: aB,
                    enableCloudBrowserActivity: oP,
                    errorMessage: s6,
                    branchingMessageId: rw,
                    isReadOnly: a7 || oM || rc || null != a4,
                    isTemporaryChat: a$,
                    isWorkConversation: oC,
                    onRegenerateResponse: oX || rc || null != a4 || a7 || oM || oz || ow || r7 || r4 ? void 0 : ii,
                    onEditUserMessage: oX || null == nd || oC || a7 || oM || oz || !r8 || r4 ? void 0 : is,
                    onFork: null == nd || a$ || oz || ow || a7 || oM ? void 0 : io,
                    pendingSubmissionAttachments: r0,
                    shareEnabled: null == oW && !a$ && !rc && !a7 && !oM && !o2,
                    readAloudEnabled: !rc && !oM,
                    feedbackEnabled: !rc && !oM && null == a4,
                    renderedTurns: e,
                    safetyReview: rG,
                    sharedConversationLastMessageId: tR?.current_node ?? rH ?? (rc ? og?.current_node : null),
                    showPendingLoadingMessage: sb,
                    showRequestUserInputStatus: im && !ib && !oh
                });
                nO = sn ? (0, sQ.a)(t) : t, aO[225] = oX, aO[226] = rw, aO[227] = oO, aO[228] = oB, aO[229] = og?.current_node, aO[230] = aB, aO[231] = oW, aO[232] = oP, aO[233] = s6, aO[234] = io, aO[235] = is, aO[236] = ii, aO[237] = aW, aO[238] = a7, aO[239] = ib, aO[240] = oh, aO[241] = o2, aO[242] = oM, aO[243] = rc, aO[244] = r4, aO[245] = a$, aO[246] = oC, aO[247] = r7, aO[248] = oE, aO[249] = oz, aO[250] = ow, aO[251] = ru, aO[252] = r0, aO[253] = nd, aO[254] = sg, aO[255] = sf, aO[256] = sn, aO[257] = rG, aO[258] = re.get, aO[259] = rH, aO[260] = tR?.current_node, aO[261] = a4, aO[262] = im, aO[263] = sb, aO[264] = rA, aO[265] = r8, aO[266] = nO
            } else nO = aO[266];
            let ik = nO;
            aO[278] !== rS ? (nB = rS.formatMessage({
                id: "chatgptConversations.loadingConversation",
                defaultMessage: "Loading ChatGPT conversation"
            }), aO[278] = rS, aO[279] = nB) : nB = aO[279];
            let iR = nB;
            aO[280] !== aB || aO[281] !== oW ? (nF = null == oW ? null : (0, a.jsx)(t4.ChatGptGizmoHeader, {
                conversationId: aB,
                gizmoId: oW
            }), aO[280] = aB, aO[281] = oW, aO[282] = nF) : nF = aO[282];
            let iN = nF;
            aO[283] !== a7 || aO[284] !== rc || aO[285] !== oC ? (nL = !oC || rc || a7 ? null : (0, a.jsx)($.a, {
                hostId: eg.a
            }), aO[283] = a7, aO[284] = rc, aO[285] = oC, aO[286] = nL) : nL = aO[286];
            let iO = nL,
                iB = !rc && null == a4 && !a7 && !a$ && !rR,
                iF = (0, c.x)(!iB || a8 || oM ? null : sR.a, aB);
            aO[287] !== aB || aO[288] !== re || aO[289] !== iB ? (nz = iB ? () => {
                let e = re.get(sR.b, aB);
                e?.title && sD(re, {
                    conversationId: aB,
                    courseId: e.course_id
                }, {
                    preserveFocus: !0
                })
            } : void 0, aO[287] = aB, aO[288] = re, aO[289] = iB, aO[290] = nz) : nz = aO[290];
            let iL = nz;
            aO[291] !== ij || aO[292] !== aB || aO[293] !== oN || aO[294] !== st ? (nD = null != st ? (0, a.jsx)("div", {
                className: "max-w-full min-w-0",
                inert: oN,
                children: (0, a.jsx)(am, {
                    conversationId: aB,
                    placement: "progress",
                    canStartSection: ij
                })
            }) : null, aO[291] = ij, aO[292] = aB, aO[293] = oN, aO[294] = st, aO[295] = nD) : nD = aO[295];
            let iz = nD,
                iD = !o$ && !a7 && !oM,
                iG = !a$ && !rc && null != rE,
                iH = iD && null != rW;
            aO[296] !== a$ ? (nG = !a$ && (0, U.a)({
                browser: !0
            }), aO[296] = a$, aO[297] = nG) : nG = aO[297];
            let iW = nG,
                iq = (0, c.x)(!!iH && !iG && !rc && !oE && !!im && !ib && tg.d, aB),
                iK = iH && (iG || iW || iq);
            aO[298] !== a1 || aO[299] !== oE || aO[300] !== o3 ? (nH = (0, U.a)({
                browser: !0
            }) && !oE && null != o3 && null == a1, aO[298] = a1, aO[299] = oE, aO[300] = o3, aO[301] = nH) : nH = aO[301];
            let iU = nH;
            aO[302] !== iK || aO[303] !== iU || aO[304] !== o6 || aO[305] !== oQ || aO[306] !== o3 ? (nW = iK && null != oQ && !iU ? {
                icon: o6,
                name: o3
            } : void 0, aO[302] = iK, aO[303] = iU, aO[304] = o6, aO[305] = oQ, aO[306] = o3, aO[307] = nW) : nW = aO[307];
            let iV = nW;
            aO[308] !== aB || aO[309] !== o$ || aO[310] !== iK || aO[311] !== rW || aO[312] !== iL || aO[313] !== iV ? (nq = o$ ? (0, a.jsx)(eY.BusinessAgentConversationHeader, {
                conversationId: aB,
                fallback: null
            }) : (0, a.jsx)(ao, {
                onClick: iL,
                hasTitleMenu: iK,
                project: iV,
                title: rW
            }), aO[308] = aB, aO[309] = o$, aO[310] = iK, aO[311] = rW, aO[312] = iL, aO[313] = iV, aO[314] = nq) : nq = aO[314];
            let iQ = nq,
                i$ = null != st,
                iY = s5 && !rc && !a7,
                iX = o$ ? null : iN;
            aO[315] !== iU || aO[316] !== o6 || aO[317] !== oQ || aO[318] !== o3 || aO[319] !== iV ? (nK = null != oQ && null == iV ? (0, a.jsx)(at, {
                projectId: oQ,
                name: o3,
                icon: o6,
                linkToProject: iU
            }) : null, aO[315] = iU, aO[316] = o6, aO[317] = oQ, aO[318] = o3, aO[319] = iV, aO[320] = nK) : nK = aO[320], aO[321] !== a1 || aO[322] !== iX || aO[323] !== nK ? (nU = (0, a.jsxs)(a.Fragment, {
                children: [a1, iX, nK]
            }), aO[321] = a1, aO[322] = iX, aO[323] = nK, aO[324] = nU) : nU = aO[324], aO[325] !== iQ || aO[326] !== a$ || aO[327] !== iO || aO[328] !== i$ || aO[329] !== iY || aO[330] !== nU ? (nV = (0, a.jsx)(n6.a, {
                hasSectionProgress: i$,
                isTemporaryChat: a$,
                isCloudTask: iY,
                leading: nU,
                start: iQ,
                startActions: iO
            }), aO[325] = iQ, aO[326] = a$, aO[327] = iO, aO[328] = i$, aO[329] = iY, aO[330] = nU, aO[331] = nV) : nV = aO[331];
            let iJ = nV;
            if (aO[332] !== od || aO[333] !== rt?.authMethod || aO[334] !== oX || aO[335] !== a2 || aO[336] !== oF || aO[337] !== oV || aO[338] !== ir || aO[339] !== ij || aO[340] !== ou || aO[341] !== rp || aO[342] !== oY || aO[343] !== a0 || aO[344] !== og || aO[345] !== iJ || aO[346] !== aB || aO[347] !== iR || aO[348] !== ox || aO[349] !== rq || aO[350] !== iF || aO[351] !== sN || aO[352] !== aH || aO[353] !== s6 || aO[354] !== o_ || aO[355] !== oR || aO[356] !== nr || aO[357] !== oH || aO[358] !== op || aO[359] !== ic || aO[360] !== id || aO[361] !== ia || aO[362] !== iG || aO[363] !== ol || aO[364] !== iK || aO[365] !== iQ || aO[366] !== aD || aO[367] !== s9 || aO[368] !== iq || aO[369] !== iW || aO[370] !== rl || aO[371] !== a7 || aO[372] !== sx || aO[373] !== ib || aO[374] !== sm || aO[375] !== oh || aO[376] !== s8 || aO[377] !== rm || aO[378] !== r_ || aO[379] !== o0 || aO[380] !== a8 || aO[381] !== o1 || aO[382] !== iu || aO[383] !== os || aO[384] !== oN || aO[385] !== oM || aO[386] !== oT || !1 !== aO[387] || aO[388] !== rc || aO[389] !== oD || aO[390] !== r5 || aO[391] !== r4 || aO[392] !== a$ || aO[393] !== oC || aO[394] !== r7 || aO[395] !== oE || aO[396] !== oL || aO[397] !== on || aO[398] !== oz || aO[399] !== ow || aO[400] !== ob || aO[401] !== rW || aO[402] !== oj.pathname || aO[403] !== oc || aO[404] !== ie || aO[405] !== oS?.sidebarAutomationId || aO[406] !== aV || aO[407] !== iL || aO[408] !== oI || aO[409] !== oJ || aO[410] !== o6 || aO[411] !== oQ || aO[412] !== o3 || aO[413] !== nN || aO[414] !== oK || aO[415] !== sg || aO[416] !== sf || aO[417] !== aJ || aO[418] !== sn || aO[419] !== ip || aO[420] !== of || aO[421] !== re || aO[422] !== aK || aO[423] !== rN || aO[424] !== st || aO[425] !== iz || aO[426] !== rE || aO[427] !== sT || aO[428] !== aY || aO[429] !== rn || aO[430] !== om || aO[431] !== a4 || aO[432] !== o9 || aO[433] !== rR || aO[434] !== iB || aO[435] !== s$ || aO[436] !== im || aO[437] !== a9 || aO[438] !== iD || aO[439] !== sb || aO[440] !== iS || aO[441] !== s4 || aO[442] !== s3 || aO[443] !== rO || aO[444] !== aq || aO[445] !== ik || aO[446] !== a5) {
                nX = Symbol.for("react.early_return_sentinel");
                e: {
                    let e, t, n, r, o, s, i, l, c, h, p, g, v, y = sf.flatMap(iA).flatMap(iP),
                        b = y.flatMap(iE);
                    if (!rc && (od.error instanceof eU.FetchError && 423 === od.error.status || o1 && null == oc)) {
                        let e;
                        aO[473] !== od || aO[474] !== aB || aO[475] !== re ? (e = (0, a.jsx)(sG.a, {
                            onUnlocked: () => {
                                (0, sH.g)(re.get(sH.f)?.projectId, [aB]), od.refetch()
                            }
                        }), aO[473] = od, aO[474] = aB, aO[475] = re, aO[476] = e) : e = aO[476], nX = e;
                        break e
                    }
                    if (null != o9) {
                        let e;
                        aO[477] !== o9 ? (e = (0, a.jsx)(f.l, {
                            replace: !0,
                            to: o9
                        }), aO[477] = o9, aO[478] = e) : e = aO[478], nX = e;
                        break e
                    }
                    nY = sV,
                    as = null != iF ? aB : null,
                    aO[479] !== og || aO[480] !== ol || aO[481] !== a7 || aO[482] !== s8 || aO[483] !== a8 || aO[484] !== oM || aO[485] !== rc || aO[486] !== oE ? (ai = oE || rc || a8 || oM || a7 || s8 || null == og && !ol ? null : (0, a.jsx)(E.a, {}), aO[479] = og, aO[480] = ol, aO[481] = a7, aO[482] = s8, aO[483] = a8, aO[484] = oM, aO[485] = rc, aO[486] = oE, aO[487] = ai) : ai = aO[487],
                    aO[488] !== od.fetchStatus || aO[489] !== ia || aO[490] !== a8 || aO[491] !== ie ? (al = !1, aO[488] = od.fetchStatus, aO[489] = ia, aO[490] = a8, aO[491] = ie, aO[492] = al) : al = aO[492],
                    aO[493] !== od.data || aO[494] !== od.fetchStatus || aO[495] !== og || aO[496] !== aB || aO[497] !== ia || aO[498] !== ol || aO[499] !== sm || aO[500] !== s8 || !1 !== aO[501] || aO[502] !== sf.length ? (ac = null, aO[493] = od.data, aO[494] = od.fetchStatus, aO[495] = og, aO[496] = aB, aO[497] = ia, aO[498] = ol, aO[499] = sm, aO[500] = s8, aO[501] = !1, aO[502] = sf.length, aO[503] = ac) : ac = aO[503],
                    au = !rc && !oM && (0, ee.c)() ? (0, a.jsx)(et.c, {
                        callIds: b,
                        hostId: eg.a,
                        conversationId: (0, d.Se)(`chatgpt:${aB}`)
                    }) : null,
                    aO[504] !== rq || aO[505] !== a8 || aO[506] !== rn || aO[507] !== a5?.documentTitle ? (av = a8 ? null : (0, a.jsx)(V.a, {
                        title: null == rn ? a5?.documentTitle ?? rq : null
                    }), aO[504] = rq, aO[505] = a8, aO[506] = rn, aO[507] = a5?.documentTitle, aO[508] = av) : av = aO[508],
                    aO[509] !== aB || aO[510] !== a8 || aO[511] !== oN || aO[512] !== rc || aO[513] !== a$ || aO[514] !== oE || aO[515] !== ik ? (ay = a8 || oE ? null : (0, a.jsx)(nI.a, {
                        conversationId: aB,
                        canCopy: !oN,
                        paragenEnabled: !rc,
                        turns: ik,
                        loadHistory: !a$ && !rc
                    }), aO[509] = aB, aO[510] = a8, aO[511] = oN, aO[512] = rc, aO[513] = a$, aO[514] = oE, aO[515] = ik, aO[516] = ay) : ay = aO[516];
                    let x = null != og || ol;aO[517] !== ia || aO[518] !== oE || aO[519] !== x ? (ab = (0, a.jsx)(eV.a, {
                        isWorkConversation: oE,
                        hasConversationContent: x,
                        hasLoadError: ia
                    }), aO[517] = ia, aO[518] = oE, aO[519] = x, aO[520] = ab) : ab = aO[520],
                    aO[521] !== aB || aO[522] !== ia || aO[523] !== s9 || aO[524] !== a8 || aO[525] !== oj.pathname || aO[526] !== re || aO[527] !== aY ? (ax = a8 || !s9 || ia ? null : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(sY, {
                            sharedConversationId: aY
                        }), (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)(ei.a, {
                                onCommit: () => eo.b.contentCommitted(re, aB, aY, oj.pathname),
                                onPaint: () => eo.b.pagePainted(re, aB, aY)
                            }, aY ?? aB)
                        })]
                    }), aO[521] = aB, aO[522] = ia, aO[523] = s9, aO[524] = a8, aO[525] = oj.pathname, aO[526] = re, aO[527] = aY, aO[528] = ax) : ax = aO[528],
                    aO[529] !== rt?.authMethod || aO[530] !== oV || aO[531] !== oY || aO[532] !== og || aO[533] !== iJ || aO[534] !== aB || aO[535] !== ox || aO[536] !== rq || aO[537] !== sN || aO[538] !== nr || aO[539] !== oH || aO[540] !== ic || aO[541] !== iG || aO[542] !== iK || aO[543] !== iQ || aO[544] !== iq || aO[545] !== iW || aO[546] !== a7 || aO[547] !== sx || aO[548] !== r_ || aO[549] !== o0 || aO[550] !== a8 || aO[551] !== o1 || aO[552] !== rc || aO[553] !== a$ || aO[554] !== r7 || aO[555] !== oE || aO[556] !== rW || aO[557] !== oS?.sidebarAutomationId || aO[558] !== iL || aO[559] !== oI || aO[560] !== o6 || aO[561] !== oQ || aO[562] !== o3 || aO[563] !== oK || aO[564] !== sg || aO[565] !== sf.length || aO[566] !== re || aO[567] !== iz || aO[568] !== rE || aO[569] !== sT || aO[570] !== a4 || aO[571] !== rR || aO[572] !== iB || aO[573] !== s$ || aO[574] !== iD || aO[575] !== iS || aO[576] !== s4 || aO[577] !== rO || aO[578] !== a5 ? (aC = a8 || null != a5 ? null : (0, a.jsxs)(nT.a, {
                        chatIcon: null == oQ ? void 0 : o6,
                        header: iJ,
                        title: rW,
                        fullScreenTitle: iQ,
                        isArchivedPreview: a7,
                        children: [null == iz ? null : (0, a.jsx)(n8, {
                            children: iz
                        }), rt?.authMethod === "chatgpt" ? (0, a.jsx)(Y.v, {
                            productExperience: oE ? "work" : "chat"
                        }) : null, rc ? (0, a.jsx)(sZ.a, {
                            children: null == oK ? null : (0, a.jsx)(a.Fragment, {
                                children: (0, a.jsx)(s7, {
                                    data: oK
                                })
                            })
                        }) : null, iB ? (0, a.jsx)(nP, {
                            conversationId: aB,
                            scheduledAutomationId: oI ? oS?.sidebarAutomationId : void 0
                        }, aB) : null, s$ ? (0, a.jsx)(nc, {
                            composerActions: iS,
                            conversationId: s4,
                            controlledState: sx ? {
                                isOpen: sN.isOpen,
                                shouldPreventAutoFocus: sN.shouldPreventAutoFocus,
                                onOpenChange: e => {
                                    sT({
                                        ...sN,
                                        isOpen: e,
                                        shouldPreventAutoFocus: !e && sN.shouldPreventAutoFocus
                                    })
                                }
                            } : void 0,
                            readData: !sx || sN.isOpen ? nr : null,
                            showSources: !sx,
                            shouldBlockExternalEgress: rR
                        }) : null, a$ && !rc && !a7 && null == oH && null == oY && null == oQ && !o0 && null != sg && (0, u.a)(sg).some(iT) ? (0, a.jsx)(_.a.HeaderAction, {
                            actionId: "chatgpt-conversation-save",
                            align: "end",
                            order: 100,
                            children: (0, a.jsx)(il, {
                                conversationId: aB
                            })
                        }) : null, iD ? (0, a.jsx)(n6.b, {
                            hasTitleMenu: iK,
                            menu: iG ? (0, a.jsx)(n3, {
                                onTitleClick: iL,
                                showMenu: iK,
                                conversationId: aB,
                                title: rq,
                                isHandoffPending: r_,
                                isArchived: og?.is_archived === !0,
                                isChatConversation: null != og && !oE,
                                onHandoff: oV ? ic : void 0,
                                onOpenMessage: async e => {
                                    rj.current?.signal.aborted === !1 && re.get(C.b)?.pathname === re.value.pathname && await rg.current?.scrollToMessage(e)
                                },
                                projectId: oQ,
                                projectName: o3,
                                serverConversationId: rE,
                                conversationOrigin: ox
                            }) : iK && (0, a.jsx)(n5, {
                                title: rq,
                                includePlugins: iW,
                                lockdownConversationId: iq ? aB : null
                            }),
                            children: a$ || rc || o1 ? null : (0, a.jsx)(tD, {
                                conversationId: aB,
                                projectId: oQ,
                                sharedProjectConversation: a4,
                                isReady: (null != rE || null != a4) && sf.length > 0 && (rO ?? og?.current_node) != null,
                                isRestricted: rR || o0,
                                isStreaming: r7
                            })
                        }) : null]
                    }), aO[529] = rt?.authMethod, aO[530] = oV, aO[531] = oY, aO[532] = og, aO[533] = iJ, aO[534] = aB, aO[535] = ox, aO[536] = rq, aO[537] = sN, aO[538] = nr, aO[539] = oH, aO[540] = ic, aO[541] = iG, aO[542] = iK, aO[543] = iQ, aO[544] = iq, aO[545] = iW, aO[546] = a7, aO[547] = sx, aO[548] = r_, aO[549] = o0, aO[550] = a8, aO[551] = o1, aO[552] = rc, aO[553] = a$, aO[554] = r7, aO[555] = oE, aO[556] = rW, aO[557] = oS?.sidebarAutomationId, aO[558] = iL, aO[559] = oI, aO[560] = o6, aO[561] = oQ, aO[562] = o3, aO[563] = oK, aO[564] = sg, aO[565] = sf.length, aO[566] = re, aO[567] = iz, aO[568] = rE, aO[569] = sT, aO[570] = a4, aO[571] = rR, aO[572] = iB, aO[573] = s$, aO[574] = iD, aO[575] = iS, aO[576] = s4, aO[577] = rO, aO[578] = a5, aO[579] = aC) : aC = aO[579],
                    aw = null,
                    n$ = t3.a,
                    n4 = rp,
                    n7 = ox,
                    n9 = !a9 || !im || ip.isHidden || ib || oX || oN || oh || a7 || oM || oD || oz || ow || r5 || r4,
                    an = a$,
                    aa = oQ,
                    ar = null != oY,
                    nQ = eB.c,
                    nJ = oR,
                    aO[580] !== a8 || aO[581] !== oT || aO[582] !== oE || aO[583] !== iz || aO[584] !== a5 ? (nZ = a8 || null != a5 ? iz : oT && (0, eL.a)() && !oE && (0, a.jsx)("div", {
                        className: "h-px",
                        "aria-hidden": !0
                    }), aO[580] = a8, aO[581] = oT, aO[582] = oE, aO[583] = iz, aO[584] = a5, aO[585] = nZ) : nZ = aO[585],
                    n0 = a2;
                    let w = null == st ? "flex h-full min-h-0 flex-col" : "h-full",
                        j = of ?? rq,
                        S = !oN,
                        I = !rm && !a8 && !rc && !iu && !ip.isHidden,
                        T = rR || oF,
                        P = o_?.isFullWidth === !0,
                        A = null == o_ ? s3.contentShift : void 0,
                        M = st?.selectedIndex;aO[586] !== ij || aO[587] !== aB || aO[588] !== st ? (e = null != st ? (0, a.jsx)(am, {
                        conversationId: aB,
                        placement: "composer",
                        canStartSection: ij
                    }) : void 0, aO[586] = ij, aO[587] = aB, aO[588] = st, aO[589] = e) : e = aO[589],
                    aO[590] !== aB || aO[591] !== st ? (t = null != st ? (0, a.jsx)(ap, {
                        conversationId: aB
                    }) : void 0, aO[590] = aB, aO[591] = st, aO[592] = t) : t = aO[592];
                    let k = !oE,
                        R = sn ? null : s6;aO[593] !== od || aO[594] !== ir ? (n = ir ? () => {
                        od.refetch({
                            cancelRefetch: !1
                        })
                    } : void 0, aO[593] = od, aO[594] = ir, aO[595] = n) : n = aO[595];
                    let N = sf.length > 0,
                        O = nN,
                        B = !o0 && (null == oQ || null != oJ),
                        F = null == st && !ob,
                        L = od.isFetching,
                        z = ou && !a8 && !rc && !oE && null == oH,
                        D = !sn && r7;aO[596] !== og?.is_archived || aO[597] !== aB || aO[598] !== a7 || aO[599] !== a8 || aO[600] !== rc || aO[601] !== a$ || aO[602] !== r7 || aO[603] !== oE ? (r = a8 || !oE || rc || a7 || og?.is_archived === !0 || a$ ? null : (0, a.jsx)(m.Suspense, {
                        fallback: null,
                        children: (0, a.jsx)(ah, {
                            conversationId: aB,
                            isTurnActive: r7
                        })
                    }), aO[596] = og?.is_archived, aO[597] = aB, aO[598] = a7, aO[599] = a8, aO[600] = rc, aO[601] = a$, aO[602] = r7, aO[603] = oE, aO[604] = r) : r = aO[604],
                    aO[605] !== aB || aO[606] !== a7 || aO[607] !== rE ? (o = a7 ? (0, a.jsx)(ek, {
                        conversationId: rE ?? aB,
                        kind: "chatgpt"
                    }, rE ?? aB) : void 0, aO[605] = aB, aO[606] = a7, aO[607] = rE, aO[608] = o) : o = aO[608];
                    let G = !sn && sb;aO[609] !== oY ? (s = null != oY ? (0, a.jsx)(sP.GptPluginMigrationBanner, {
                        gizmoId: oY
                    }) : null, aO[609] = oY, aO[610] = s) : s = aO[610],
                    aO[611] !== oV || aO[612] !== ic || aO[613] !== r_ || aO[614] !== a$ || aO[615] !== oL || aO[616] !== on ? (i = oL && !a$ ? (0, a.jsx)(nj, {
                        canConvert: oV,
                        isChatInstantAvailable: !on,
                        isConverting: r_,
                        onConvert: ic
                    }) : null, aO[611] = oV, aO[612] = ic, aO[613] = r_, aO[614] = a$, aO[615] = oL, aO[616] = on, aO[617] = i) : i = aO[617],
                    aO[618] !== op || aO[619] !== oM ? (l = op.bind(null, oM), aO[618] = op, aO[619] = oM, aO[620] = l) : l = aO[620],
                    aO[621] !== id || aO[622] !== rc || aO[623] !== aV ? (c = e => {
                        aV?.(e), rc && id()
                    }, aO[621] = id, aO[622] = rc, aO[623] = aV, aO[624] = c) : c = aO[624],
                    aO[625] !== od.isFetching || aO[626] !== oX || aO[627] !== rp || aO[628] !== oY || aO[629] !== a0 || aO[630] !== aB || aO[631] !== iR || aO[632] !== aH || aO[633] !== ia || aO[634] !== aD || aO[635] !== rl || aO[636] !== ib || aO[637] !== sm || aO[638] !== oh || aO[639] !== s8 || aO[640] !== rm || aO[641] !== a8 || aO[642] !== rc || aO[643] !== a$ || aO[644] !== oC || aO[645] !== nN || aO[646] !== aJ || aO[647] !== aK || aO[648] !== rN || aO[649] !== aY || aO[650] !== om || aO[651] !== im || aO[652] !== a9 || aO[653] !== j || aO[654] !== S || aO[655] !== I || aO[656] !== T || aO[657] !== P || aO[658] !== A || aO[659] !== M || aO[660] !== e || aO[661] !== t || aO[662] !== k || aO[663] !== R || aO[664] !== n || aO[665] !== N || aO[666] !== B || aO[667] !== F || aO[668] !== z || aO[669] !== D || aO[670] !== r || aO[671] !== o || aO[672] !== G || aO[673] !== s || aO[674] !== i || aO[675] !== l || aO[676] !== c || aO[677] !== aq || aO[678] !== ik || aO[679] !== a5 ? (h = (0, a.jsx)(sS, {
                        ref: rg,
                        printTitle: j,
                        trackShownImpressions: S,
                        trackReadState: I,
                        workspace: a5,
                        shouldBlockMcpApps: T,
                        isCoveredByFloatingPanel: P,
                        isFormOnly: rm,
                        isInlinePreview: a8,
                        hideModelPicker: aD,
                        showFilePicker: a9,
                        disableAutoFocus: aH,
                        transcriptPresentation: aq,
                        scrollOrigin: aK,
                        composerRef: rv,
                        contentX: A,
                        conversationId: aB,
                        composerConversationId: rp,
                        sectionIndex: M,
                        composerLeadingContent: a0,
                        aboveComposerContent: e,
                        historyLoadingContent: t,
                        requiredSystemHints: aJ,
                        isChatConversation: k,
                        customGptId: oY,
                        conversationLoadingLabel: iR,
                        entries: ik,
                        errorMessage: R,
                        hasLoadError: ia,
                        onRetryLoad: n,
                        hasRenderableTurns: N,
                        isComposerDisabled: ib,
                        readOnlyPlaceholder: O,
                        moreDetailsEnabled: B,
                        isConversationEmpty: sm,
                        showEmptyState: F,
                        isConversationFetching: L,
                        isConversationLoading: s8,
                        isSharedConversation: rc,
                        isSubmitDisabled: oh,
                        retainLiveModelPicker: z,
                        isTemporaryChat: a$,
                        isTurnActive: D,
                        isWorkConversation: oC,
                        onboardingPrelude: r,
                        scrollStateConversationId: rN,
                        initialResponsePlacementKey: rl,
                        sharedConversationId: aY,
                        sharedPostRegulatedConnectorKind: om,
                        showComposer: im,
                        archivedPreviewFooter: o,
                        showPendingLoadingMessage: G,
                        gptPluginMigrationBanner: s,
                        awaitingGptContinuation: oX,
                        workOnlyConversionBanner: i,
                        onAddSelectedText: l,
                        onSubmitAccepted: c
                    }), aO[625] = od.isFetching, aO[626] = oX, aO[627] = rp, aO[628] = oY, aO[629] = a0, aO[630] = aB, aO[631] = iR, aO[632] = aH, aO[633] = ia, aO[634] = aD, aO[635] = rl, aO[636] = ib, aO[637] = sm, aO[638] = oh, aO[639] = s8, aO[640] = rm, aO[641] = a8, aO[642] = rc, aO[643] = a$, aO[644] = oC, aO[645] = nN, aO[646] = aJ, aO[647] = aK, aO[648] = rN, aO[649] = aY, aO[650] = om, aO[651] = im, aO[652] = a9, aO[653] = j, aO[654] = S, aO[655] = I, aO[656] = T, aO[657] = P, aO[658] = A, aO[659] = M, aO[660] = e, aO[661] = t, aO[662] = k, aO[663] = R, aO[664] = n, aO[665] = N, aO[666] = B, aO[667] = F, aO[668] = z, aO[669] = D, aO[670] = r, aO[671] = o, aO[672] = G, aO[673] = s, aO[674] = i, aO[675] = l, aO[676] = c, aO[677] = aq, aO[678] = ik, aO[679] = a5, aO[680] = h) : h = aO[680],
                    aO[681] !== sN || aO[682] !== nr || aO[683] !== sx || aO[684] !== rR || aO[685] !== s$ || aO[686] !== iS || aO[687] !== s4 || aO[688] !== s3 ? (p = s$ && null != nr && (!sx || sN.isOpen) ? (0, a.jsx)(nl, {
                        composerActions: iS,
                        conversationId: s4,
                        readData: nr,
                        showSources: !sx,
                        display: s3,
                        shouldBlockExternalEgress: rR
                    }) : null, aO[681] = sN, aO[682] = nr, aO[683] = sx, aO[684] = rR, aO[685] = s$, aO[686] = iS, aO[687] = s4, aO[688] = s3, aO[689] = p) : p = aO[689],
                    aO[690] === Symbol.for("react.memo_cache_sentinel") ? (g = (0, a.jsx)(t1.a, {}), aO[690] = g) : g = aO[690],
                    aO[691] !== a8 ? (v = null, aO[691] = a8, aO[692] = v) : v = aO[692],
                    aO[693] !== oN || aO[694] !== w || aO[695] !== h || aO[696] !== p || aO[697] !== v ? (n1 = (0, a.jsxs)("div", {
                        className: w,
                        inert: oN,
                        children: [h, p, g, v]
                    }), aO[693] = oN, aO[694] = w, aO[695] = h, aO[696] = p, aO[697] = v, aO[698] = n1) : n1 = aO[698],
                    n2 = !oM && (0, ee.c)() ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(ix, {
                            conversationId: aB,
                            shouldBlockExternalEgress: rR || oF,
                            widgets: y.filter(iI)
                        }), rc ? null : (0, a.jsx)(en.a, {
                            blockedWidgetSource: os ? void 0 : "descriptor",
                            transcriptMcpAppIds: (0, iy.c)(aB, y, os),
                            shouldBlockExternalEgress: rR || oF
                        })]
                    }) : null
                }
                aO[332] = od, aO[333] = rt?.authMethod, aO[334] = oX, aO[335] = a2, aO[336] = oF, aO[337] = oV, aO[338] = ir, aO[339] = ij, aO[340] = ou, aO[341] = rp, aO[342] = oY, aO[343] = a0, aO[344] = og, aO[345] = iJ, aO[346] = aB, aO[347] = iR, aO[348] = ox, aO[349] = rq, aO[350] = iF, aO[351] = sN, aO[352] = aH, aO[353] = s6, aO[354] = o_, aO[355] = oR, aO[356] = nr, aO[357] = oH, aO[358] = op, aO[359] = ic, aO[360] = id, aO[361] = ia, aO[362] = iG, aO[363] = ol, aO[364] = iK, aO[365] = iQ, aO[366] = aD, aO[367] = s9, aO[368] = iq, aO[369] = iW, aO[370] = rl, aO[371] = a7, aO[372] = sx, aO[373] = ib, aO[374] = sm, aO[375] = oh, aO[376] = s8, aO[377] = rm, aO[378] = r_, aO[379] = o0, aO[380] = a8, aO[381] = o1, aO[382] = iu, aO[383] = os, aO[384] = oN, aO[385] = oM, aO[386] = oT, aO[387] = !1, aO[388] = rc, aO[389] = oD, aO[390] = r5, aO[391] = r4, aO[392] = a$, aO[393] = oC, aO[394] = r7, aO[395] = oE, aO[396] = oL, aO[397] = on, aO[398] = oz, aO[399] = ow, aO[400] = ob, aO[401] = rW, aO[402] = oj.pathname, aO[403] = oc, aO[404] = ie, aO[405] = oS?.sidebarAutomationId, aO[406] = aV, aO[407] = iL, aO[408] = oI, aO[409] = oJ, aO[410] = o6, aO[411] = oQ, aO[412] = o3, aO[413] = nN, aO[414] = oK, aO[415] = sg, aO[416] = sf, aO[417] = aJ, aO[418] = sn, aO[419] = ip, aO[420] = of, aO[421] = re, aO[422] = aK, aO[423] = rN, aO[424] = st, aO[425] = iz, aO[426] = rE, aO[427] = sT, aO[428] = aY, aO[429] = rn, aO[430] = om, aO[431] = a4, aO[432] = o9, aO[433] = rR, aO[434] = iB, aO[435] = s$, aO[436] = im, aO[437] = a9, aO[438] = iD, aO[439] = sb, aO[440] = iS, aO[441] = s4, aO[442] = s3, aO[443] = rO, aO[444] = aq, aO[445] = ik, aO[446] = a5, aO[447] = nQ, aO[448] = n$, aO[449] = nY, aO[450] = nX, aO[451] = nJ, aO[452] = nZ, aO[453] = n0, aO[454] = n1, aO[455] = n2, aO[456] = n4, aO[457] = n7, aO[458] = n9, aO[459] = an, aO[460] = aa, aO[461] = ar, aO[462] = as, aO[463] = ai, aO[464] = al, aO[465] = ac, aO[466] = au, aO[467] = av, aO[468] = ay, aO[469] = ab, aO[470] = ax, aO[471] = aC, aO[472] = aw
            } else nQ = aO[447], n$ = aO[448], nY = aO[449], nX = aO[450], nJ = aO[451], nZ = aO[452], n0 = aO[453], n1 = aO[454], n2 = aO[455], n4 = aO[456], n7 = aO[457], n9 = aO[458], an = aO[459], aa = aO[460], ar = aO[461], as = aO[462], ai = aO[463], al = aO[464], ac = aO[465], au = aO[466], av = aO[467], ay = aO[468], ab = aO[469], ax = aO[470], aC = aO[471], aw = aO[472];
            if (nX !== Symbol.for("react.early_return_sentinel")) return nX;
            aO[699] !== nQ || aO[700] !== nJ || aO[701] !== nZ || aO[702] !== n0 || aO[703] !== n1 || aO[704] !== n2 ? (a_ = (0, a.jsxs)(nQ, {
                floatingPanelWidth: nJ,
                header: nZ,
                banner: n0,
                children: [n1, n2]
            }), aO[699] = nQ, aO[700] = nJ, aO[701] = nZ, aO[702] = n0, aO[703] = n1, aO[704] = n2, aO[705] = a_) : a_ = aO[705], aO[706] !== n$ || aO[707] !== a_ || aO[708] !== n4 || aO[709] !== n7 || aO[710] !== n9 || aO[711] !== an || aO[712] !== aa || aO[713] !== ar ? (aj = (0, a.jsx)(n$, {
                conversationId: n4,
                conversationOrigin: n7,
                disabled: n9,
                isTemporaryChat: an,
                projectId: aa,
                requiresGizmoId: ar,
                children: a_
            }), aO[706] = n$, aO[707] = a_, aO[708] = n4, aO[709] = n7, aO[710] = n9, aO[711] = an, aO[712] = aa, aO[713] = ar, aO[714] = aj) : aj = aO[714], aO[715] !== nY || aO[716] !== aj || aO[717] !== as || aO[718] !== ai || aO[719] !== al || aO[720] !== ac || aO[721] !== au || aO[722] !== av || aO[723] !== ay || aO[724] !== ab || aO[725] !== ax || aO[726] !== aC || aO[727] !== aw ? (aS = (0, a.jsxs)(nY, {
                courseChatId: as,
                children: [ai, al, ac, au, av, ay, ab, ax, aC, aw, aj]
            }), aO[715] = nY, aO[716] = aj, aO[717] = as, aO[718] = ai, aO[719] = al, aO[720] = ac, aO[721] = au, aO[722] = av, aO[723] = ay, aO[724] = ab, aO[725] = ax, aO[726] = aC, aO[727] = aw, aO[728] = aS) : aS = aO[728];
            let iZ = aS,
                i0 = !a8 && !oC,
                i1 = rc || !od.isFetchedAfterMount || od.isFetching || ou ? null : od.error;
            aO[729] !== aB || aO[730] !== a8 || aO[731] !== re || aO[732] !== aY ? (aI = e => {
                a8 || eo.b.loadFailed(re, aB, aY, e)
            }, aO[729] = aB, aO[730] = a8, aO[731] = re, aO[732] = aY, aO[733] = aI) : aI = aO[733];
            let i2 = ia ? od.error : null,
                i3 = null == ox && null == og ? null : oE,
                i4 = !oE && !s8;
            aO[734] !== rf || aO[735] !== rp || aO[736] !== aY ? (aT = {
                conversationId: rp,
                composer: rf,
                sharedConversationId: aY
            }, aO[734] = rf, aO[735] = rp, aO[736] = aY, aO[737] = aT) : aT = aO[737], aO[738] !== aB || aO[739] !== a8 || aO[740] !== rE || aO[741] !== aY ? (aE = a8 ? null : (0, eo.a)(rE ?? aB, aY), aO[738] = aB, aO[739] = a8, aO[740] = rE, aO[741] = aY, aO[742] = aE) : aE = aO[742];
            let i5 = !ie;
            return aO[743] !== i5 ? (aP = (0, a.jsx)(es.i, {
                name: "conversation data",
                active: i5
            }), aO[743] = i5, aO[744] = aP) : aP = aO[744], aO[745] !== oN ? (aA = (0, a.jsx)(es.i, {
                name: "workspace policy",
                active: oN
            }), aO[745] = oN, aO[746] = aA) : aA = aO[746], aO[747] !== iZ || aO[748] !== aE || aO[749] !== aP || aO[750] !== aA ? (aM = (0, a.jsxs)(es.h, {
                destinationKey: aE,
                children: [aP, aA, iZ]
            }), aO[747] = iZ, aO[748] = aE, aO[749] = aP, aO[750] = aA, aO[751] = aM) : aM = aO[751], aO[752] !== aT || aO[753] !== aM ? (ak = (0, a.jsx)(tw.a, {
                value: aT,
                children: aM
            }), aO[752] = aT, aO[753] = aM, aO[754] = ak) : ak = aO[754], aO[755] !== i4 || aO[756] !== ak ? (aR = (0, a.jsx)(v.a, {
                enabled: i4,
                children: ak
            }), aO[755] = i4, aO[756] = ak, aO[757] = aR) : aR = aO[757], aO[758] !== ir || aO[759] !== rE || aO[760] !== i0 || aO[761] !== i1 || aO[762] !== aI || aO[763] !== i2 || aO[764] !== i3 || aO[765] !== aR ? (aN = (0, a.jsx)(k.a, {
                showChatFallback: i0,
                conversationId: rE,
                error: i1,
                onInlineLoadError: aI,
                loadError: i2,
                canRetry: ir,
                isWorkConversation: i3,
                children: aR
            }), aO[758] = ir, aO[759] = rE, aO[760] = i0, aO[761] = i1, aO[762] = aI, aO[763] = i2, aO[764] = i3, aO[765] = aR, aO[766] = aN) : aN = aO[766], aN
        }

        function iI(e) {
            return "chatgpt-hosted-widget" === e.type
        }

        function iT(e) {
            return "user" === e.author.role
        }

        function iE(e) {
            return "mcp-tool-call" === e.type ? [e.callId] : []
        }

        function iP(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : e
        }

        function iA(e) {
            let {
                turn: t
            } = e;
            return t.items
        }

        function iM(e) {
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
                let t, n, m, g, f, v, y, b, x, C, w, _, j, S, I, T, E, P, A = (0, r.c)(68),
                    {
                        initialPlacementKey: M,
                        isActiveVoiceConversation: k,
                        isLoadingHistory: R,
                        latestUserTurnKey: N,
                        conversationId: O,
                        onResponseSpacerStateChange: B,
                        preserveResponseViewport: F
                    } = e,
                    L = void 0 !== k && k,
                    z = void 0 !== R && R,
                    D = (0, i.i)();
                A[0] !== L || A[1] !== D ? (t = L && (0, i.d)(D, "2825211774").get("voice_orb_transcript_clearance_enabled", !1), A[0] = L, A[1] = D, A[2] = t) : t = A[2];
                let G = t,
                    H = (0, s.useRef)(N),
                    W = (0, o.x)(null == O ? 0 : u.b, O ?? ""),
                    q = (0, s.useRef)(W),
                    K = (0, s.useRef)(z),
                    U = (0, s.useRef)(null),
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
                A[5] !== ea || A[6] !== ee || A[7] !== F ? (m = e => {
                    F?.(e => {
                        let t = ea();
                        null != t && ee(p(t, e) ?? void 0)
                    }) || ee(e)
                }, A[5] = ea, A[6] = ee, A[7] = F, A[8] = m) : m = A[8];
                let eo = (0, h.a)(m);
                A[9] !== Y || A[10] !== Q ? (g = () => {
                    Y(), Q.scrollToBottom()
                }, A[9] = Y, A[10] = Q, A[11] = g) : g = A[11];
                let es = (0, h.a)(g);
                A[12] !== es || A[13] !== W ? (f = () => {
                    q.current !== W && (q.current = W, es())
                }, v = [W, es], A[12] = es, A[13] = W, A[14] = f, A[15] = v) : (f = A[14], v = A[15]), (0, s.useLayoutEffect)(f, v), A[16] !== X || A[17] !== J || A[18] !== et || A[19] !== $.height || A[20] !== $.holdViewport || A[21] !== er || A[22] !== es ? (y = () => er.register({
                    consumeGrowth: X,
                    getHeightPx: J,
                    holdViewport: $.holdViewport,
                    prepareThreadEndContent: et,
                    scrollToBottom: es
                }, $.height).dispose, A[16] = X, A[17] = J, A[18] = et, A[19] = $.height, A[20] = $.holdViewport, A[21] = er, A[22] = es, A[23] = y) : y = A[23], A[24] !== X || A[25] !== J || A[26] !== et || A[27] !== $ || A[28] !== er || A[29] !== es ? (b = [X, J, et, $, er, es], A[24] = X, A[25] = J, A[26] = et, A[27] = $, A[28] = er, A[29] = es, A[30] = b) : b = A[30], (0, s.useInsertionEffect)(y, b), A[31] === Symbol.for("react.memo_cache_sentinel") ? (x = (e, t) => {
                    U.current = {
                        turnKey: e,
                        element: t
                    }, V.current?.(e, t)
                }, A[31] = x) : x = A[31];
                let ei = (0, h.a)(x);
                A[32] === Symbol.for("react.memo_cache_sentinel") ? (C = e => {
                    V.current = e;
                    let t = U.current;
                    return null != t && e(t.turnKey, t.element), () => {
                        V.current = null
                    }
                }, A[32] = C) : C = A[32];
                let el = (0, h.a)(C);
                A[33] !== ea || A[34] !== N || A[35] !== ee || A[36] !== G ? (w = () => {
                    let e = ea();
                    if (null != e && 0 !== e.clientHeight)
                        if (G && null != N) {
                            let t = p(e, N);
                            if (null == t) return;
                            ee(t)
                        } else ee()
                }, A[33] = ea, A[34] = N, A[35] = ee, A[36] = G, A[37] = w) : w = A[37];
                let ec = (0, s.useEffectEvent)(w);
                return A[38] !== Y || A[39] !== X || A[40] !== Z || A[41] !== J || A[42] !== B || A[43] !== ei || A[44] !== eo || A[45] !== G ? (_ = () => (B({
                    voiceAutoScrollEnabled: G,
                    clear: Y,
                    consumeGrowth: X,
                    getHeightPx: J,
                    ensureScrollRoomForAnchor: Z,
                    onTurnLayoutReady: ei,
                    place: eo
                }), () => {
                    B(null)
                }), j = [Y, X, J, Z, B, ei, eo, G], A[38] = Y, A[39] = X, A[40] = Z, A[41] = J, A[42] = B, A[43] = ei, A[44] = eo, A[45] = G, A[46] = _, A[47] = j) : (_ = A[46], j = A[47]), (0, s.useLayoutEffect)(_, j), A[48] !== ea || A[49] !== z || A[50] !== N || A[51] !== eo || A[52] !== $ || A[53] !== el || A[54] !== G ? (S = () => {
                    let e = H.current,
                        t = K.current;
                    if (H.current = N, K.current = z, G && !z && !t && null != N && N !== e) {
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
                }, I = [ea, z, N, eo, el, $, G], A[48] = ea, A[49] = z, A[50] = N, A[51] = eo, A[52] = $, A[53] = el, A[54] = G, A[55] = S, A[56] = I) : (S = A[55], I = A[56]), (0, s.useLayoutEffect)(S, I), A[57] !== en || A[58] !== M || A[59] !== ec || A[60] !== $ ? (T = () => {
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
                        children: C,
                        conversationId: w,
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
                    N = (0, o.x)(g, w),
                    O = (0, o.x)(p.E, w),
                    B = (0, o.x)(p.T, w),
                    F = O ? B : R;
                x[0] !== F ? (t = null != F && (0, u.a)(F) ? F : null, x[0] = F, x[1] = t) : t = x[1], x[2] === Symbol.for("react.memo_cache_sentinel") ? (n = {
                    enabled: !1
                }, x[2] = n) : n = x[2];
                let {
                    data: L
                } = (0, o.x)(d.b, t, n);
                x[3] !== F ? (l = null == F || (0, u.a)(F) ? null : F, x[3] = F, x[4] = l) : l = x[4], x[5] === Symbol.for("react.memo_cache_sentinel") ? (f = {
                    enabled: !1
                }, x[5] = f) : f = x[5];
                let {
                    data: z
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
                x[9] !== w || x[10] !== z || x[11] !== F || x[12] !== L || x[13] !== N || x[14] !== _ ? (v = null != _ ? (0, s.C)(_, {
                    conversationId: N ?? w
                }) : (0, m.c)(N ?? w, {
                    gizmoId: L?.gizmo.short_url ?? z?.gizmo.short_url ?? F
                }), x[9] = w, x[10] = z, x[11] = F, x[12] = L, x[13] = N, x[14] = _, x[15] = v) : v = x[15];
                let D = v;
                if (x[16] !== w || x[17] !== D || x[18] !== k || x[19] !== T || x[20] !== E || x[21] !== P || x[22] !== N || x[23] !== I || x[24] !== A || x[25] !== M) {
                    let e = new URLSearchParams(A),
                        t = null != N && e.has("mfr"),
                        n = I.get(p.y, w),
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
                    y = P !== D || t ? (0, a.jsx)(s.l, {
                        replace: !0,
                        state: "tpp" === n || "flora" === n ? {
                            ...r,
                            workTurnVisit: (0, m.f)(I, E, M?.workTurnVisit)
                        } : r,
                        to: {
                            hash: t ? "" : T,
                            pathname: D,
                            search: t ? e.toString() : A
                        }
                    }) : null, x[16] = w, x[17] = D, x[18] = k, x[19] = T, x[20] = E, x[21] = P, x[22] = N, x[23] = I, x[24] = A, x[25] = M, x[26] = y
                } else y = x[26];
                return x[33] !== C || x[34] !== y ? (b = (0, a.jsxs)(a.Fragment, {
                    children: [y, C]
                }), x[33] = C, x[34] = y, x[35] = b) : b = x[35], b
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
            x = n("ANuo"),
            C = n("yGJW"),
            w = n("gBBC"),
            _ = n("OWtl"),
            j = n("hZax"),
            S = n("JYRT"),
            I = n("wwvo"),
            T = n("wrCb"),
            E = n("H7Nt"),
            P = n("vzxm"),
            A = n("jAnS"),
            M = n("wzUW"),
            k = n("Q9Us"),
            R = n("fwYa"),
            N = n("qfGT");
        let O = (0, v.a)(async () => (await Promise.all([n.e(680612), n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(480171), n.e(716164), n.e(74952)]).then(n.bind(n, "eZlv"))).GptHeaderAboutDialog);

        function B(e) {
            let t, n, v, B, F, L, z, D, G, H, W, q, K, U, V, Q, $, Y, X, J, Z = (0, r.c)(56),
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
            Z[6] !== ee.gizmo.id || Z[7] !== ee.gizmo.short_url ? (B = ee.gizmo.short_url?.trim() || ee.gizmo.id, Z[6] = ee.gizmo.id, Z[7] = ee.gizmo.short_url, Z[8] = B) : B = Z[8], Z[9] !== B ? (F = (0, P.c)(B), Z[9] = B, Z[10] = F) : F = Z[10], Z[11] !== ea ? (L = (0, A.e)("", (0, A.i)(ea)), Z[11] = ea, Z[12] = L) : L = Z[12];
            let eg = `${F}${L}`;
            Z[13] !== en ? (z = en.formatMessage({
                id: "chatgptConversations.customGpt.actionsMenu",
                defaultMessage: "GPT actions"
            }), Z[13] = en, Z[14] = z) : z = Z[14];
            let ef = z;
            Z[15] === Symbol.for("react.memo_cache_sentinel") ? (D = (0, a.jsx)(x.a, {
                className: "icon-sm"
            }), Z[15] = D) : D = Z[15], Z[16] !== ef ? (G = (0, a.jsx)(p.a, {
                "aria-label": ef,
                color: "ghost",
                size: "icon",
                children: D
            }), Z[16] = ef, Z[17] = G) : G = Z[17], Z[18] !== ee.gizmo.gizmo_type || Z[19] !== ee.gizmo.id || Z[20] !== er || Z[21] !== eg || Z[22] !== et ? (H = "gpt" === ee.gizmo.gizmo_type ? (0, a.jsxs)(m.c.Item, {
                href: eg,
                onClick: e => {
                    e.defaultPrevented || ((0, C.a)(et, o.rc, {
                        stage: "CHATGPT_NEW_CHAT_ENTRY_STAGE_ENTRY",
                        entryPoint: "CHATGPT_NEW_CHAT_ENTRY_POINT_GPT_MENU",
                        location: "CHATGPT_NEW_CHAT_ENTRY_LOCATION_GIZMO_INFORMATION_DROPDOWN",
                        gizmoId: ee.gizmo.id
                    }), 0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || (e.preventDefault(), es(!1), (0, w.c)(et, null), (0, h.n)(et, "chat"), er(eg, {
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
            }), Z[24] = ee, Z[25] = et, Z[26] = W) : W = Z[26], Z[27] === Symbol.for("react.memo_cache_sentinel") ? (q = (0, a.jsx)(m.c.ItemIcon, {
                children: (0, a.jsx)(f.me, {})
            }), K = (0, a.jsx)(c.a, {
                id: "chatgptConversations.customGpt.about",
                defaultMessage: "About"
            }), Z[27] = q, Z[28] = K) : (q = Z[27], K = Z[28]), Z[29] !== W ? (U = (0, a.jsxs)(m.c.Item, {
                onSelect: W,
                children: [q, K]
            }), Z[29] = W, Z[30] = U) : U = Z[30];
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
            }), Z[46] = ee, Z[47] = X) : X = Z[47], Z[48] !== eo || Z[49] !== H || Z[50] !== U || Z[51] !== $ || Z[52] !== Y || Z[53] !== X || Z[54] !== G ? (J = (0, a.jsxs)(m.a, {
                align: "start",
                contentWidth: "menu",
                open: eo,
                onOpenChange: es,
                triggerButton: G,
                children: [H, U, $, Y, X]
            }), Z[48] = eo, Z[49] = H, Z[50] = U, Z[51] = $, Z[52] = Y, Z[53] = X, Z[54] = G, Z[55] = J) : J = Z[55], J
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
            C = n("dQRk"),
            w = n("jfiJ"),
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
            let t, n, P, B, L, z, D = (0, r.c)(28),
                {
                    conversationId: G,
                    turns: H,
                    loadHistory: W,
                    renderMode: q,
                    paragenEnabled: K,
                    enabled: U,
                    canCopy: V,
                    priority: Q
                } = e,
                $ = void 0 === q ? "conversation" : q,
                Y = void 0 !== K && K,
                X = void 0 === U || U,
                J = void 0 === V || V,
                Z = void 0 === Q ? "fallback" : Q,
                ee = (0, l.y)(f.a),
                et = (0, c.useRef)(null);
            D[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => () => et.current?.abort(), D[0] = t) : t = D[0], D[1] !== J || D[2] !== G || D[3] !== X || D[4] !== W || D[5] !== Y || D[6] !== $ ? (n = [G, X, J, W, $, Y], D[1] = J, D[2] = G, D[3] = X, D[4] = W, D[5] = Y, D[6] = $, D[7] = n) : n = D[7], (0, c.useEffect)(t, n), D[8] !== J || D[9] !== G || D[10] !== Y || D[11] !== $ || D[12] !== ee || D[13] !== H ? (P = () => {
                let e = ee.get(C.j, G),
                    t = ee.query.getData(b.chatGptConversationQueryById$, e),
                    n = t?.conversation_origin ?? ee.get(C.y, G);
                if (!J || "tpp" === n || "flora" === n) return null;
                let a = ee.get(C.N, G),
                    r = Y && "conversation" === $ ? ee.get(j.a, G)?.promptMessageId : void 0,
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
                        threadCurrentNode: r ?? ee.get(C.C, G),
                        conversationOrigin: n,
                        isStreaming: (0, C.Bb)(ee.get(C.ab, G)),
                        mode: $,
                        moderationDisclaimersByMessageId: ee.get(C.O, G),
                        pendingSubmission: null
                    }).renderedTurns);
                if (o?.messageId == null) return {
                    serverId: e,
                    comparisonPromptMessageId: r,
                    content: o?.content
                };
                let s = {
                        conversationId: G,
                        messageId: o.messageId,
                        codeBlockIndex: o.codeBlockIndex
                    },
                    i = (0, I.a)(a?.[o.messageId]?.message?.metadata);
                return {
                    serverId: e,
                    comparisonPromptMessageId: r,
                    content: ee.get(S.b, s) ?? i?.[String(o.codeBlockIndex)]?.content ?? o.content
                }
            }, D[8] = J, D[9] = G, D[10] = Y, D[11] = $, D[12] = ee, D[13] = H, D[14] = P) : P = D[14];
            let en = (0, y.a)(P);
            D[15] !== ee ? (B = (e, t) => {
                let n = e => {
                    (0, g.a)(ee, s.CodexChatgptInteractionCodeCopyRequested, {
                        characterCount: (0, i.a)(e.length),
                        productExperience: o.CodexExpandedSidePanelProductSurface.CODEX_EXPANDED_SIDE_PANEL_PRODUCT_SURFACE_CHAT
                    })
                };
                return (0, v.c)(e, void 0, () => {
                    "string" == typeof e ? n(e) : e.then(n, F)
                }).then(e => {
                    e && !t?.aborted && ee.get(m.f).success((0, a.jsx)(d.a, {
                        id: "chatgpt.codeBlocks.copyLast.success",
                        defaultMessage: "Copied code block to clipboard"
                    }))
                })
            }, D[15] = ee, D[16] = B) : B = D[16];
            let ea = B;
            return D[17] !== G || D[18] !== en || D[19] !== W || D[20] !== Y || D[21] !== $ || D[22] !== ee || D[23] !== ea ? (L = () => {
                if (et.current?.signal.aborted === !1) return;
                let e = en();
                if (null == e) return;
                if (null != e.content) return void ea(e.content);
                let {
                    serverId: t,
                    comparisonPromptMessageId: n
                } = e;
                if (!W || ee.get(C.B, G) || null == t || ee.get(_.c, t)?.complete !== !1) return;
                let a = new AbortController;
                et.current = a;
                let r = ee.get(u.a),
                    o = ee.get(C.C, G),
                    s = ee.get(h.e).copyLastCodeBlock,
                    i = ee.watch(e => {
                        let {
                            get: t
                        } = e;
                        (t(u.a) !== r || t(C.C, G) !== o || Y && "conversation" === $ && t(j.a, G)?.promptMessageId !== n || t(h.e).copyLastCodeBlock !== s) && a.abort()
                    });
                ea((async () => {
                    await (0, w.a)(ee, t, a.signal), a.signal.throwIfAborted();
                    let e = en()?.content;
                    if (null == e) throw Error("No complete code block in this conversation");
                    return e
                })(), a.signal).finally(() => {
                    i(), et.current === a && (et.current = null)
                })
            }, D[17] = G, D[18] = en, D[19] = W, D[20] = Y, D[21] = $, D[22] = ee, D[23] = ea, D[24] = L) : L = D[24], D[25] !== X || D[26] !== Z ? (z = {
                enabled: X,
                priority: Z
            }, D[25] = X, D[26] = Z, D[27] = z) : z = D[27], (0, p.a)("copyLastCodeBlock", L, z), null
        }

        function F() {}
    }),
    LEgg: (function(e, t, n) {
        n.d(t, {
            a: () => w
        });
        var a = n("ABep"),
            r = n("QosV");
        n("slpy");
        var o = n("BolX"),
            s = n("Wf1j"),
            i = n("Ouov"),
            l = n("TdH6"),
            c = n("QcW8");
        n("ZU27"), n("TpEm");
        var d = n("gbrq"),
            u = n("fBor"),
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
                    if (null != r) return (0, f.a)(a, (0, p.Se)(`chatgpt:${r}`))
                })
            }, t = [a], n[0] = a, n[1] = e, n[2] = t) : (e = n[1], t = n[2]), (0, m.useLayoutEffect)(e, t), null
        }
        n("n5iL"), n("q3HK"), n("bf6R");
        var b = n("rBfn"),
            x = n("enMl"),
            C = n("PCEr");

        function w(e) {
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
                    chatIcon: w,
                    mainToolbar: _,
                    title: j,
                    fullScreenTitle: S
                } = e,
                I = (0, o.y)(g.a);
            return (0, s.a)(), (0, o.z)(d.h), (0, o.z)(c.u), v[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(l.a, {}), n = (0, a.jsx)(y, {}), v[0] = t, v[1] = n) : (t = v[0], n = v[1]), v[2] !== w || v[3] !== j ? (i = (0, a.jsx)(x.a, {
                title: j,
                icon: w
            }), v[2] = w, v[3] = j, v[4] = i) : i = v[4], v[5] !== S ? (u = (0, a.jsx)("div", {
                className: "max-w-80 min-w-0 truncate empty:hidden focus-within:overflow-visible",
                children: S
            }), v[5] = S, v[6] = u) : u = v[6], v[7] !== _ || v[8] !== u ? (p = (0, a.jsx)(C.a, {
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
        var o = n("Ouov");
        n("Sm6l"), n("HOLv");
        var s = n("NVRI"),
            i = n("MMlk"),
            l = n("lKDl");
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
                if (null == e || n(i.d, "2163293173") && !n(l.K, e)) return null;
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
                i = (0, s.x)(d.d, "2160578039");
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
            h = n("CS9C");
        n.d(t, {}, {
            a: function(e) {
                let t, n, p, m, g, f, v, y, b, x = (0, r.c)(34),
                    {
                        gptName: C,
                        accessState: w,
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
                if ("error" === w && null != S) {
                    let e;
                    x[3] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceRetry",
                        defaultMessage: "Try again"
                    }), x[3] = e) : e = x[3], n = e
                } else if ("admin" === w) {
                    let e;
                    x[4] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.viewPlugin",
                        defaultMessage: "View Plugin"
                    }), x[4] = e) : e = x[4], n = e
                } else if ("allowed" === w || "pending" === w) {
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
                if ("error" === w && null == S) {
                    let e;
                    x[7] !== E ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceAccessUnconfirmed",
                        defaultMessage: "We couldn’t check your access to the plugin. You can keep using this GPT until {deadline}.",
                        values: {
                            deadline: E
                        }
                    }), x[7] = E, x[8] = e) : e = x[8], p = e
                } else if ("error" === w) {
                    let e;
                    x[9] !== E ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceAccessError",
                        defaultMessage: "We couldn’t check your access to the plugin. Try again, or keep using this GPT until {deadline}.",
                        values: {
                            deadline: E
                        }
                    }), x[9] = E, x[10] = e) : e = x[10], p = e
                } else if ("denied" === w) {
                    let e;
                    x[11] !== E ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceAccessDenied",
                        defaultMessage: "This plugin isn’t available to you. You can keep using this GPT until {deadline}.",
                        values: {
                            deadline: E
                        }
                    }), x[11] = E, x[12] = e) : e = x[12], p = e
                } else if (C.trim()) {
                    let e;
                    x[13] !== E || x[14] !== C ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceNamedBody",
                        defaultMessage: "{gptName} is now available as a plugin. You can keep using this GPT until {deadline}.",
                        values: {
                            gptName: C,
                            deadline: E
                        }
                    }), x[13] = E, x[14] = C, x[15] = e) : e = x[15], p = e
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
                }), x[18] = m) : m = x[18], x[19] !== C ? (g = C.trim() ? (0, a.jsx)(s.a, {
                    id: "chatgptConversations.gpts.migration.chatChoiceNamedTitle",
                    defaultMessage: "{gptName} is now a plugin",
                    values: {
                        gptName: C
                    }
                }) : (0, a.jsx)(s.a, {
                    id: "chatgptConversations.gpts.migration.chatChoiceTitle",
                    defaultMessage: "This GPT is now a plugin"
                }), x[19] = C, x[20] = g) : g = x[20];
                let P = "pending" === w,
                    A = "error" === w && null != S ? S : _;
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
                return n(l.d, "4035922817") ? n(p, e) : null
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
                    completionId: n(r.d, "2163293173") ? JSON.stringify([t, a?.requestId, n(s.C, t)]) : void 0,
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
            l = n("hEYZ"),
            c = n("OWtl"),
            d = n("yLzP"),
            u = n("lsfk"),
            h = n("dQRk"),
            p = n("jfiJ"),
            m = n("FGJH");

        function g(e) {
            return e.isIntersecting
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, f, v, y, b = (0, r.c)(20),
                    {
                        conversationId: x
                    } = e,
                    C = (0, o.y)(c.a),
                    w = (0, o.z)(l.b),
                    _ = (0, o.x)(h.j, x),
                    j = (0, o.x)(m.c, _ ?? x),
                    S = (0, u.b)(),
                    I = (0, s.useRef)(null);
                b[0] !== C || b[1] !== _ ? (t = () => {
                    null != _ && (0, p.b)(C, _, i.flushSync)
                }, b[0] = C, b[1] = _, b[2] = t) : t = b[2];
                let T = t;
                b[3] !== x || b[4] !== T || b[5] !== C || b[6] !== _ ? (n = () => {
                    let e = C.get(m.c, _ ?? x);
                    C.get(l.b) || e?.hasError || T()
                }, b[3] = x, b[4] = T, b[5] = C, b[6] = _, b[7] = n) : n = b[7];
                let E = (0, s.useEffectEvent)(n);
                b[8] !== S || b[9] !== w || b[10] !== E ? (f = () => {
                    if (w) return;
                    let e = I.current,
                        t = S.getScrollElement();
                    if (null == e || null == t) return;
                    let n = new IntersectionObserver(e => {
                        e.some(g) && E()
                    }, {
                        root: t,
                        rootMargin: "80px 0px 0px 0px"
                    });
                    return n.observe(e), () => n.disconnect()
                }, b[8] = S, b[9] = w, b[10] = E, b[11] = f) : f = b[11];
                let P = j?.cursor,
                    A = j?.hasError;
                if (b[12] !== S || b[13] !== w || b[14] !== _ || b[15] !== P || b[16] !== A ? (v = [S, w, _, P, A], b[12] = S, b[13] = w, b[14] = _, b[15] = P, b[16] = A, b[17] = v) : v = b[17], (0, s.useEffect)(f, v), null == j || j.complete || null == j.cursor) return null;
                let M = j.hasError ? T : null;
                return b[18] !== M ? (y = (0, a.jsx)(d.a, {
                    ref: I,
                    onRetry: M
                }), b[18] = M, b[19] = y) : y = b[19], y
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
            C = n("QmkR"),
            w = n("xEXG"),
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
                onCreateProjectDialogCloseAutoFocus: w
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
                isError: F
            } = s, L = (0, S.a)(O, k, r?.gizmo.id), z = "allowed" === c, D = e => {
                let a = t.get(T) + 1,
                    r = t.get(p.e);
                t.set(T, a), (0, C.S)({
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
            }, G = [];
            for (let e of (z && (G.push({
                    id: "new-chatgpt-project",
                    icon: d.Gg,
                    message: P.newProject,
                    selectAfterClose: !0,
                    onSelect: () => {
                        t.set(T, e => e + 1), (0, x.a)(t, D, {
                            allowLocalProjectCreation: !1,
                            forceGlobalMemory: E,
                            onCloseAutoFocus: w
                        })
                    }
                }), L.length > 0 && G.push({
                    id: "new-project-separator",
                    type: "separator"
                })), L)) {
                let {
                    targetMemoryBlocked: t
                } = (0, j.c)(n, void 0, e), r = t ? (0, _.a)((0, b.c)(e)) : void 0;
                G.push({
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
                    onSelect: () => D(e)
                })
            }
            return l && (N || F) ? G.push({
                id: "retry-project-destinations",
                message: P.destinationsFailed,
                closeOnSelect: !1,
                onSelect: () => {
                    Promise.all([t.query.invalidate(y.a), t.query.invalidate(C.m)])
                }
            }) : l && (R || B) ? G.push({
                id: "loading-project-destinations",
                message: P.loading,
                tooltipMessage: P.reopen,
                enabled: !1
            }) : N || F || R || B || 0 !== L.length || z || G.push({
                id: "no-project-destinations",
                message: P.noDestinations,
                enabled: !1
            }), [...i && G.length > 0 ? [{
                id: "move-to-project",
                icon: d.Ed,
                message: P.moveToProject,
                enabled: !A,
                tooltipMessage: M,
                submenu: G
            }] : [], ...null == r ? [] : [{
                id: "remove-from-project",
                icon: d.Id,
                message: P.removeFromProject,
                enabled: !A,
                tooltipMessage: M,
                onSelect: () => {
                    t.set(T, e => e + 1), (0, C.S)({
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
                    x = (0, o.z)(C.m),
                    _ = (0, w.b)();
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
            l = n("Ouov"),
            c = n("EOo5"),
            d = n("Sm6l"),
            u = n("X6Vn"),
            h = n("OWtl"),
            p = n("gsAl");
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
            s = n("Ouov"),
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
                    conversationId: C,
                    draftKey: w,
                    initialPrompt: _,
                    initialPromptKind: j
                } = t, S = void 0 === w ? C : w, I = (0, s.y)(u.a);
                b[2] !== C || b[3] !== S || b[4] !== _ || b[5] !== j || b[6] !== I ? (n = () => o()(() => {
                    let e = null == C ? null : I.get(g.y, C),
                        t = (0, d.e)(_ ?? (null == S ? "" : I.get(p.u, S)), {
                            addInitialContentToHistory: null == _ && null != S,
                            defaultTextKind: j ?? (null == _ && null != S || (0, c.b)(_ ?? "").length > 0 ? "prompt" : "plain"),
                            enableFileMentions: !0,
                            enableRichText: !0,
                            enableSkillMentions: !1,
                            enableSlashCommands: {
                                triggers: ["/"]
                            },
                            plainTextMode: (0, h.b)(I.get, i.tf.composerPlainTextMode),
                            suggestionOptions: {
                                enableInlineSystemHints: "tpp" !== e && "flora" !== e,
                                variant: "tpp" !== e && "flora" !== e ? "chatgpt" : void 0
                            }
                        });
                    return null == _ && null != C && "string" == typeof S && null != (0, m.k)(I, S) && "tpp" !== e && "flora" !== e && (0, p.T)(I, C, t.getChatGptPrompt().systemHints), t
                }), b[2] = C, b[3] = S, b[4] = _, b[5] = j, b[6] = I, b[7] = n) : n = b[7];
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
                C = void 0 !== u && u,
                w = void 0 !== h && h,
                _ = "default" === x && "bg-surface-elevated-secondary shadow-md",
                j = C && !w && "in-data-[comment-layout=floating]:shadow-none!",
                S = C && "default" === x && "in-data-[comment-layout=floating]:border in-data-[comment-layout=floating]:bg-surface-elevated!",
                I = C && "default" === x && (w ? "in-data-[comment-layout=floating]:border-strong in-data-[comment-layout=floating]:rounded-xl! in-data-[comment-layout=floating]:shadow-[0_2px_10px_rgb(0_0_0/5%)]!" : "in-data-[comment-layout=floating]:border-border"),
                T = void 0 !== c && c ? "transition-none" : "transition-[height,width,opacity]";
            return b[9] !== n || b[10] !== _ || b[11] !== j || b[12] !== S || b[13] !== I || b[14] !== T ? (p = (0, o.b)("surface-AyYLmv", "pointer-events-auto isolate rounded-[22px] ease-enter-snappy motion-reduce:transition-none", _, j, S, I, T, n), b[9] = n, b[10] = _, b[11] = j, b[12] = S, b[13] = I, b[14] = T, b[15] = p) : p = b[15], b[16] !== l ? (m = {
                ...s.d,
                ...l
            }, b[16] = l, b[17] = m) : m = b[17], b[18] === Symbol.for("react.memo_cache_sentinel") ? (g = (0, o.b)("content-Sj8_aX", "overflow-hidden rounded-[inherit] bg-inherit"), b[18] = g) : g = b[18], b[19] !== t ? (f = (0, a.jsx)("div", {
                className: g,
                children: t
            }), b[19] = t, b[20] = f) : f = b[20], b[21] !== C || b[22] !== x ? (v = "default" === x ? (0, a.jsx)("div", {
                "aria-hidden": !0,
                className: (0, o.b)("pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-multiply outline-1 outline-border", C && "in-data-[comment-layout=floating]:hidden")
            }) : null, b[21] = C, b[22] = x, b[23] = v) : v = b[23], b[24] !== i || b[25] !== p || b[26] !== m || b[27] !== f || b[28] !== v ? (y = (0, a.jsxs)("div", {
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
                width: h.T
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
        let g = (0, d.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(789716), n.e(633848), n.e(836555), n.e(625656)]).then(n.bind(n, "FQ1K"))).SelectedTextAnnotationEditor, {
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
                [C] = (0, s.useState)(p);
            return f[0] !== b || f[1] !== C || f[2] !== x || f[3] !== v ? (t = () => {
                if (i.a?.windowTitle == null) return;
                let e = {
                    owner: C,
                    title: null == v ? void 0 : b ?? null
                };
                x.set(u, t => t.some(e => e.owner === C) ? t.map(t => t.owner === C ? e : t) : [...t, e]), g(x)
            }, n = [x, C, v, b], f[0] = b, f[1] = C, f[2] = x, f[3] = v, f[4] = t, f[5] = n) : (t = f[4], n = f[5]), (0, s.useEffect)(t, n), f[6] !== C || f[7] !== x ? (a = () => () => {
                i.a?.windowTitle != null && (x.set(u, e => e.filter(e => e.owner !== C)), g(x))
            }, c = [x, C], f[6] = C, f[7] = x, f[8] = a, f[9] = c) : (a = f[8], c = f[9]), (0, s.useEffect)(a, c), f[10] !== v ? (d = () => {
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
            a: () => C
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
            let t, n, i, c, d, x, C, w = (0, r.c)(19),
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
            w[0] !== A ? (t = (0, p.b)("block w-full scale-105 object-cover", A), w[0] = A, w[1] = t) : t = w[1];
            let M = T ? "https://persistent.oaistatic.com/chatgpt/tpp/luna-reserve-modal-hero-dark.png" : "https://persistent.oaistatic.com/chatgpt/tpp/luna-reserve-modal-hero-light.png";
            return w[2] !== t || w[3] !== M ? (n = (0, a.jsx)("div", {
                className: "overflow-hidden",
                children: (0, a.jsx)("img", {
                    alt: "",
                    "aria-hidden": "true",
                    className: t,
                    src: M
                })
            }), w[2] = t, w[3] = M, w[4] = n) : n = w[4], w[5] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(m.e, {
                className: "contents",
                children: (0, a.jsx)(s.a, {
                    id: "codex.lunaReserve.dialog.title",
                    defaultMessage: "Regain access to our most powerful models"
                })
            }), w[5] = i) : i = w[5], w[6] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)(g.e, {
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
            }), w[6] = c) : c = w[6], w[7] !== P.ctas || w[8] !== j || w[9] !== I ? (d = e => (0, a.jsx)("div", {
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
            }), w[7] = P.ctas, w[8] = j, w[9] = I, w[10] = d) : d = w[10], w[11] !== P || w[12] !== S || w[13] !== d ? (x = (0, a.jsxs)(g.b, {
                children: [c, (0, a.jsx)(g.e, {
                    className: "items-center",
                    children: (0, a.jsx)(v.a, {
                        banner: P,
                        rateLimitStatus: S,
                        renderContent: d
                    })
                })]
            }), w[11] = P, w[12] = S, w[13] = d, w[14] = x) : x = w[14], w[15] !== j || w[16] !== n || w[17] !== x ? (C = (0, a.jsxs)(m.a, {
                open: !0,
                size: "default",
                onOpenChange: j,
                children: [n, x]
            }), w[15] = j, w[16] = n, w[17] = x, w[18] = C) : C = w[18], C
        }

        function C(e) {
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
                }, C = null == b ? v : new DOMRect((v.left - b.left) / d, (v.top - b.top) / d, v.width / d, v.height / d), w = l(h.range.startContainer) ?? h.element;
                return {
                    direction: "rtl" === window.getComputedStyle(w).direction ? "rtl" : "ltr",
                    portalTarget: y,
                    rect: C,
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
                let t, n, m, g, f, v, y, b, x, C = (0, r.c)(40),
                    {
                        align: w,
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
                    [F, L] = (0, s.useState)(null);
                C[0] !== I ? (t = e => {
                    I?.(e)
                }, C[0] = I, C[1] = t) : t = C[1];
                let z = (0, s.useEffectEvent)(t);
                C[2] !== F || C[3] !== k ? (n = () => {
                    let e = O.current?.getBoundingClientRect();
                    if (null == F || null == e) return;
                    let t = F.portalTarget?.getBoundingClientRect(),
                        n = null == t ? 1 : k;
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
                        windowZoom: k
                    }
                }, C[2] = F, C[3] = k, C[4] = n) : n = C[4];
                let D = (0, c.a)(n);
                if (C[5] !== _ || C[6] !== z || C[7] !== T || C[8] !== E || C[9] !== P || C[10] !== M || C[11] !== k ? (m = () => {
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
                                    (0, d.d)(B.current, t) || (null == B.current && null != t && z(t), B.current = t, L(t))
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
                                n instanceof Node && O.current?.contains(n) || (N.current = !0, t(), B.current = null, L(null))
                            },
                            s = () => {
                                N.current = !1, n()
                            },
                            i = () => {
                                if (N.current) {
                                    t(), B.current = null, L(null);
                                    return
                                }
                                n()
                            };
                        return n(), document.addEventListener("selectionchange", i), window.addEventListener("dblclick", n), window.addEventListener("keyup", n), window.addEventListener("pointerdown", o), window.addEventListener("pointerup", s), window.addEventListener("pointercancel", s), window.addEventListener("resize", a), window.addEventListener("scroll", r, !0), () => {
                            null != e && window.clearTimeout(e), t(), document.removeEventListener("selectionchange", i), window.removeEventListener("dblclick", n), window.removeEventListener("keyup", n), window.removeEventListener("pointerdown", o), window.removeEventListener("pointerup", s), window.removeEventListener("pointercancel", s), window.removeEventListener("resize", a), window.removeEventListener("scroll", r, !0)
                        }
                    }, C[5] = _, C[6] = z, C[7] = T, C[8] = E, C[9] = P, C[10] = M, C[11] = k, C[12] = m) : m = C[12], C[13] !== _ || C[14] !== T || C[15] !== E || C[16] !== P || C[17] !== M || C[18] !== k ? (g = [_, T, E, P, M, k], C[13] = _, C[14] = T, C[15] = E, C[16] = P, C[17] = M, C[18] = k, C[19] = g) : g = C[19], (0, s.useEffect)(m, g), null == F) return null;
                let G = .5;
                "start" === (void 0 === w ? "center" : w) && (G = +("rtl" === F.direction));
                let H = F.rect.left + F.rect.width * G,
                    W = F.viewportHorizontalBounds.left + 8 - H,
                    q = F.viewportHorizontalBounds.right - 8 - H,
                    K = F.portalTarget ?? document.body,
                    U = null == F.portalTarget ? "fixed z-50" : "absolute z-[1]";
                C[20] !== S || C[21] !== U ? (f = (0, o.b)("pointer-events-none w-max", U, S), C[20] = S, C[21] = U, C[22] = f) : f = C[22];
                let V = F.viewportHorizontalBounds.right - F.viewportHorizontalBounds.left - 16,
                    Q = F.rect.top - 8,
                    $ = `translateX(clamp(${W}px, ${-100*G}%, calc(${q}px - 100%))) translateY(-100%)`;
                return C[23] !== H || C[24] !== V || C[25] !== Q || C[26] !== $ ? (v = {
                    left: H,
                    maxWidth: V,
                    top: Q,
                    transform: $
                }, C[23] = H, C[24] = V, C[25] = Q, C[26] = $, C[27] = v) : v = C[27], C[28] !== j || C[29] !== D || C[30] !== F || C[31] !== k ? (y = null == F.portalTarget && 1 !== k ? (0, a.jsx)("div", {
                    style: {
                        zoom: k
                    },
                    children: j(F, D)
                }) : j(F, D), C[28] = j, C[29] = D, C[30] = F, C[31] = k, C[32] = y) : y = C[32], C[33] !== v || C[34] !== y || C[35] !== f ? (b = (0, a.jsx)("div", {
                    ref: O,
                    className: f,
                    style: v,
                    children: y
                }), C[33] = v, C[34] = y, C[35] = f, C[36] = b) : b = C[36], C[37] !== b || C[38] !== K ? (x = (0, a.jsx)(l.a, {
                    container: K,
                    children: b
                }), C[37] = b, C[38] = K, C[39] = x) : x = C[39], x
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
            h = n("O3CG"),
            p = n("mN6P"),
            m = n("zD54");
        n.d(t, {}, {
            a: function(e) {
                let t, n, g, f, v, y, b = (0, r.c)(56),
                    {
                        conversationTerminology: x,
                        onAddSelectedText: C,
                        onStartFileAnnotation: w,
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
                    [F, L] = (0, o.useState)(null);
                if (null != F) {
                    let e, t, n;
                    return b[0] !== _ ? (e = () => _?.(!1), t = () => _?.(!0), b[0] = _, b[1] = e, b[2] = t) : (e = b[1], t = b[2]), b[3] !== F.rect || b[4] !== F.submit || b[5] !== e || b[6] !== t ? (n = (0, a.jsx)(l.a, {
                        entryRect: F.rect,
                        onCancel: e,
                        onEscape: t,
                        onSubmit: F.submit
                    }), b[3] = F.rect, b[4] = F.submit, b[5] = e, b[6] = t, b[7] = n) : n = b[7], n
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
                return b[33] !== M || b[34] !== C || b[35] !== w || b[36] !== A ? (t = null != C || null != w ? (0, a.jsx)(d.b, {
                    onClick: e => {
                        null != w ? L({
                            rect: (e.currentTarget.parentElement ?? e.currentTarget).getBoundingClientRect(),
                            submit: w()
                        }) : (window.getSelection()?.removeAllRanges(), C?.(A))
                    },
                    children: "chat" === M ? (0, a.jsx)(i.a, {
                        id: "selectedTextOverlay.addToChat",
                        defaultMessage: "Ask ChatGPT"
                    }) : (0, a.jsx)(i.a, {
                        id: "selectedTextOverlay.addToCodex",
                        defaultMessage: "Add to chat"
                    })
                }) : null, b[33] = M, b[34] = C, b[35] = w, b[36] = A, b[37] = t) : t = b[37], b[38] !== T || b[39] !== A ? (n = null != T ? (0, a.jsx)(d.b, {
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
                        onUnarchive: C,
                        onDone: w
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
                let j = v ? w : C;
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
                let t, n, h, p, m, g, f, v, y, b, x, C, w = (0, r.c)(26);
                w[0] !== e ? ({
                    title: p,
                    project: n,
                    onActivate: t,
                    ...h
                } = e, w[0] = e, w[1] = t, w[2] = n, w[3] = h, w[4] = p) : (t = w[1], n = w[2], h = w[3], p = w[4]);
                let _ = (0, s.a)(),
                    j = n?.name;
                return w[5] !== _ || w[6] !== j ? (m = (0, u.a)(_, j), w[5] = _, w[6] = j, w[7] = m) : m = w[7], w[8] !== t || w[9] !== h ? (g = e => {
                    h.onClick?.(e), t?.()
                }, f = e => {
                    h.onKeyDown?.(e), e.defaultPrevented && !e.repeat && ("Enter" === e.key || " " === e.key) && t?.()
                }, w[8] = t, w[9] = h, w[10] = g, w[11] = f) : (g = w[10], f = w[11]), w[12] !== n ? (v = null == n ? null : (0, a.jsx)(o.a, {
                    content: n.name,
                    children: (0, a.jsx)("span", {
                        "aria-hidden": "true",
                        className: "flex shrink-0 items-center",
                        children: n.icon
                    })
                }), w[12] = n, w[13] = v) : v = w[13], w[14] !== p ? (y = "string" == typeof p ? (0, d.d)(p) : p ?? (0, a.jsx)(i.a, {
                    id: "threadWorkspace.chatTitlebar.fallbackTitle",
                    defaultMessage: "Chat"
                }), w[14] = p, w[15] = y) : y = w[15], w[16] !== y ? (b = (0, a.jsx)("span", {
                    className: "min-w-0 truncate",
                    children: y
                }), w[16] = y, w[17] = b) : b = w[17], w[18] === Symbol.for("react.memo_cache_sentinel") ? (x = (0, a.jsx)("span", {
                    className: "grid size-3.5 shrink-0 place-items-center",
                    children: (0, a.jsx)(c.Zb, {})
                }), w[18] = x) : x = w[18], w[19] !== h || w[20] !== m || w[21] !== g || w[22] !== f || w[23] !== v || w[24] !== b ? (C = (0, a.jsxs)(l.a, {
                    "aria-description": m,
                    ...h,
                    onClick: g,
                    onKeyDown: f,
                    className: "max-w-full min-w-0 select-none",
                    color: "ghostActive",
                    size: "conversationTitle",
                    children: [v, b, x]
                }), w[19] = h, w[20] = m, w[21] = g, w[22] = f, w[23] = v, w[24] = b, w[25] = C) : C = w[25], C
            }
        })
    }),
    fQbA: (function(e, t, n) {
        var a = n("ABep"),
            r = n("lIZs");
        n.d(t, {}, {
            a: function(e) {
                let t = e.findIndex(e => "move-to-project" === e.id),
                    n = e.findIndex(e => "separator" === e.type),
                    a = -1 === t ? n : t + 1;
                return e.toSpliced(-1 === a ? e.length : a, 0, {
                    id: "open-app"
                })
            },
            b: function(e, t) {
                return "open-app" === e.id ? (0, a.jsx)(r.a, {
                    onSelect: t
                }) : void 0
            }
        })
    }),
    pDUk: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            o = n("suct"),
            s = n("iodE"),
            i = n("IPUh"),
            l = n("BolX"),
            c = n("zd8w"),
            d = n("I7bK"),
            u = n("Q2Qp"),
            h = n("QcW8"),
            p = n("wD9O"),
            m = n("nzx4"),
            g = n("eGPX"),
            f = n("KWzM");

        function v(e) {
            e.target instanceof Element && null != e.target.closest('[data-app-shell-tab-strip-controller="right"]') && e.preventDefault()
        }

        function y(e) {
            let t, n, o, h, v, y, b, C, w, _, j = (0, r.c)(25);
            j[0] !== e ? ({
                animate: t,
                children: n,
                className: o,
                ...h
            } = e, j[0] = e, j[1] = t, j[2] = n, j[3] = o, j[4] = h) : (t = j[1], n = j[2], o = j[3], h = j[4]);
            let S = (0, s.a)(),
                I = (0, l.z)(g.c),
                T = t && !I,
                E = (0, c.useContext)(u.a),
                P = (0, c.useContext)(d.c)?.chatPaneElement,
                A = (0, p.c)(),
                M = (0, c.useRef)(null),
                k = (0, c.useRef)(T);
            j[5] !== P || j[6] !== E || j[7] !== A ? (v = () => {
                let e = M.current,
                    t = x(E, P);
                if (null == e || null == t || !k.current) return;
                let n = t.getBoundingClientRect(),
                    a = e.getBoundingClientRect();
                e.style.clipPath = `inset(${(n.top-a.top)/A}px ${(a.right-n.right)/A}px ${(a.bottom-n.bottom)/A}px ${(n.left-a.left)/A}px)`
            }, j[5] = P, j[6] = E, j[7] = A, j[8] = v) : v = j[8];
            let R = v,
                N = !S,
                O = !S;
            j[9] !== R ? (y = () => {
                k.current = !0, requestAnimationFrame(R)
            }, j[9] = R, j[10] = y) : y = j[10], j[11] === Symbol.for("react.memo_cache_sentinel") ? (b = () => {
                k.current = !1, M.current?.style.removeProperty("clip-path")
            }, j[11] = b) : b = j[11];
            let B = !!T && f.b.hidden;
            return j[12] !== T ? (C = T ? f.a : {
                duration: 0
            }, j[12] = T, j[13] = C) : C = j[13], j[14] !== n || j[15] !== y || j[16] !== B || j[17] !== C ? (w = (0, a.jsx)(i.a.div, {
                onAnimationStart: y,
                onAnimationComplete: b,
                initial: B,
                animate: f.b.visible,
                exit: f.b.hidden,
                transition: C,
                children: n
            }), j[14] = n, j[15] = y, j[16] = B, j[17] = C, j[18] = w) : w = j[18], j[19] !== o || j[20] !== h || j[21] !== N || j[22] !== O || j[23] !== w ? (_ = (0, a.jsx)(m.c, {
                ...h,
                ref: M,
                className: o,
                forceMount: !0,
                "aria-hidden": N,
                inert: O,
                children: w
            }), j[19] = o, j[20] = h, j[21] = N, j[22] = O, j[23] = w, j[24] = _) : _ = j[24], _
        }

        function b(e) {
            return e instanceof Element && null != e.closest('[data-app-shell-workspace-layout-toggle="right-panel"]')
        }

        function x(e, t) {
            return void 0 !== t ? t ?? e : e?.querySelector("[data-app-shell-main-content-layout]") ?? e
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, s, i, l, g, f = (0, r.c)(27),
                    {
                        animate: C,
                        children: w,
                        floatingCardAnchor: _,
                        isOpen: j,
                        isSideChatSplit: S,
                        onOpenChange: I,
                        returnFocusId: T,
                        shouldPreventAutoFocus: E,
                        trigger: P
                    } = e,
                    A = void 0 === C || C,
                    M = void 0 !== S && S,
                    k = void 0 !== E && E,
                    R = (0, c.useContext)(u.a),
                    N = (0, c.useContext)(d.c)?.chatPaneElement,
                    [O, B] = (0, c.useState)(null),
                    F = (0, c.useRef)(!1),
                    L = (0, c.useRef)(j && M),
                    z = 8 * (0, p.c)(),
                    D = _ ?? O ?? void 0;
                f[0] !== N || f[1] !== _ || f[2] !== R || f[3] !== D || f[4] !== O ? (t = {
                    contextElement: D,
                    getBoundingClientRect() {
                        if (_?.isConnected) return _.getBoundingClientRect();
                        let e = O?.closest("[data-thread-floating-chat-actions], [data-app-shell-main-titlebar]") ?? O?.closest("[data-app-shell-header-toolbar], [data-app-shell-titlebar]"),
                            t = (e ?? O)?.getBoundingClientRect() ?? new DOMRect,
                            n = x(R, N);
                        if (null == n) return t;
                        let a = n.getBoundingClientRect();
                        return new DOMRect(a.left, t.top, a.width, t.height)
                    }
                }, f[0] = N, f[1] = _, f[2] = R, f[3] = D, f[4] = O, f[5] = t) : t = f[5];
                let G = t;
                return f[6] !== G ? (n = (0, a.jsx)(m.b, {
                    virtualRef: {
                        current: G
                    }
                }), f[6] = G, f[7] = n) : n = f[7], f[8] !== P ? (s = (0, a.jsx)(m.e, {
                    ref: B,
                    asChild: !0,
                    children: P
                }), f[8] = P, f[9] = s) : s = f[9], f[10] !== A || f[11] !== w || f[12] !== _ || f[13] !== j || f[14] !== M || f[15] !== z || f[16] !== T || f[17] !== k ? (i = j && (0, a.jsx)(y, {
                    className: "z-50 flex flex-col text-default outline-hidden",
                    animate: A,
                    align: "end",
                    alignOffset: null == _ ? z : 0,
                    collisionPadding: z,
                    side: "bottom",
                    sideOffset: null == _ ? z : 0,
                    unstyled: !0,
                    onOpenAutoFocus: e => {
                        F.current = !1, (k || L.current) && e.preventDefault(), L.current = !1
                    },
                    onCloseAutoFocus: e => {
                        if (k) e.preventDefault();
                        else if (!F.current && null != T) {
                            let t = document.getElementById(T);
                            t?.focus({
                                preventScroll: !0
                            }), null != t && document.activeElement === t && e.preventDefault()
                        }
                    },
                    onInteractOutside: e => {
                        e.target instanceof Node && _?.contains(e.target) && e.preventDefault(), M && b(e.target) && e.preventDefault(), e.defaultPrevented || (F.current = !0)
                    },
                    onFocusOutside: e => {
                        let t = e.detail.originalEvent.relatedTarget;
                        M && (null == t || b(t)) && "composer" === (0, h.r)(e.target) && e.preventDefault(), e.target instanceof Element && e.target.matches('[role="tabpanel"][data-app-shell-tab-panel-controller="right"]') && e.preventDefault()
                    },
                    onPointerDownOutside: v,
                    style: {
                        maxHeight: "none",
                        maxWidth: "none"
                    },
                    children: w
                }), f[10] = A, f[11] = w, f[12] = _, f[13] = j, f[14] = M, f[15] = z, f[16] = T, f[17] = k, f[18] = i) : i = f[18], f[19] !== i ? (l = (0, a.jsx)(o.a, {
                    children: i
                }), f[19] = i, f[20] = l) : l = f[20], f[21] !== j || f[22] !== I || f[23] !== n || f[24] !== s || f[25] !== l ? (g = (0, a.jsxs)(m.a, {
                    open: j,
                    onOpenChange: I,
                    children: [n, s, l]
                }), f[21] = j, f[22] = I, f[23] = n, f[24] = s, f[25] = l, f[26] = g) : g = f[26], g
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
    }),
    dDDU: (function(e, t, n) {
        var a = n("Qgfj"),
            r = n("Kyn2"),
            o = n("nnol"),
            s = n("QcW8"),
            i = n("ZU27"),
            l = n("gbrq"),
            c = n("bf6R"),
            d = n("GaA7"),
            u = n("dt6g"),
            h = n("Vhua"),
            p = n("WwnD"),
            m = n("NkWL"),
            g = n("pZMh");
        n.d(t, {}, {
            a: function(e) {
                let t = e.get(s.eb);
                return e.get(s.db) || t?.isVisible !== !0 || "split" !== t.mode && !e.get(m.c) ? [] : function(e, t) {
                    let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.l,
                        f = e.get(i.l.activeTab$),
                        v = e.get(g.k),
                        y = null;
                    s === i.a ? y = "bottom" : "split" === v.mode && (e.get(g.i) ? (y = v.contentSide, "chat" !== t && t.tabId === e.get(g.n) && (y = "left" === v.contentSide ? "right" : "left")) : "chat" === t ? y = "left" === v.contentSide ? "right" : "left" : t.tabId === f?.tabId && (y = v.contentSide));
                    let b = e.get(h.i),
                        x = !b && ("chat" !== t || null != f),
                        C = [{
                            enabled: x && "left" !== y && (0, p.a)(e, t, "left"),
                            id: "unified-workspace-move-left",
                            icon: c.w,
                            message: (0, a.e)({
                                id: "threadWorkspace.contextMenu.moveToLeftPane",
                                defaultMessage: "Move to left pane"
                            }),
                            onSelect: () => (0, u.a)(e, "context_menu", () => (0, p.b)(e, t, "left", s))
                        }, {
                            enabled: x && "right" !== y && (0, p.a)(e, t, "right"),
                            id: "unified-workspace-move-right",
                            icon: c.y,
                            message: (0, a.e)({
                                id: "threadWorkspace.contextMenu.moveToRightPane",
                                defaultMessage: "Move to right pane"
                            }),
                            onSelect: () => (0, u.a)(e, "context_menu", () => (0, p.b)(e, t, "right", s))
                        }].filter(e => !1 !== e.enabled);
                    return !b && s !== i.a && e.get(l.b) && (0, p.a)(e, t, "bottom") && C.push({
                        id: "unified-workspace-move-bottom",
                        icon: c.p,
                        message: (0, a.e)({
                            id: "threadWorkspace.contextMenu.moveToBottomPane",
                            defaultMessage: "Move to bottom pane"
                        }),
                        onSelect: () => (0, u.a)(e, "context_menu", () => (0, p.b)(e, t, "bottom", s))
                    }), "chat" === t || t.isWorkspaceHome || null == t.tabType.windowTransfer || null == d.a.detachedWindows || C.push({
                        id: "unified-workspace-move-new-window",
                        enabled: !b && !(0, o.c)(e, t.tabId) && t.tabType.windowTransfer.canTransfer(e, t.props),
                        icon: c.Og,
                        message: (0, a.e)({
                            id: "threadWorkspace.contextMenu.moveToNewWindow",
                            defaultMessage: "Move to new window"
                        }),
                        onSelect: () => {
                            (0, r.a)(e, Promise.resolve().then(n.bind(n, "K3jS")).then(n => {
                                let {
                                    moveTabToNewWindow: a
                                } = n;
                                return a(e, s, t, null)
                            }))
                        }
                    }), "chat" === t && e.get(m.c) && C.push({
                        id: "close-tab",
                        icon: c.wj,
                        message: (0, a.e)({
                            id: "codex.tabs.contextMenu.close",
                            defaultMessage: "Close"
                        }),
                        onSelect: () => (0, m.a)(e)
                    }), C
                }(e, "chat")
            }
        })
    }),
    NBTh: (function(e, t) {
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
        let o = () => new r;
        n.d(t, {}, {
            a: function() {
                return (0, a.a)(o)
            }
        })
    })
};