export const __rspack_esm_ids = [615742];
export const __webpack_modules__ = {
    piij: (function(e, t, n) {
        e.exports = n.p + "assets/space-recovery.105d9c61fe.png"
    }),
    ylLY: (function(e, t, n) {
        let a = (0, n("zd8w").createContext)(null);
        n.d(t, {}, {
            a: a
        })
    }),
    kUij: (function(e, t, n) {
        n.d(t, {
            a: () => c,
            b: () => u,
            c: () => d,
            d: () => r,
            e: () => o,
            f: () => h,
            g: () => p,
            h: () => l
        });
        var a = n("ASxG");
        let r = "openai/first-party-plugin-logging",
            o = "openai/logging/message";
        new WeakMap;
        let s = a.enum(["trace", "debug", "info", "warning", "error"]),
            i = a.object({
                component: a.string().min(1).max(200),
                level: s,
                message: a.string().max(2e4),
                metadata: a.record(a.string(), a.unknown()).optional()
            }),
            l = a.object({
                method: a.literal(o),
                params: a.object({
                    entries: a.array(i).min(1).max(50)
                })
            }),
            c = "openai/first-party-plugin-bridge",
            d = "ui/openai/first-party-plugin-bridge",
            u = "ui/notifications/openai/first-party-plugin-bridge",
            h = a.object({
                message: a.string()
            }),
            p = a.object({
                method: a.literal(d),
                params: h
            })
    }),
    Vlqh: (function(e, t, n) {
        var a = n("ASxG");
        let r = {
            WORKSTREAM_HANDOFF_REQUESTED: "CODEX_PLUGINS_APP_SURFACE_ACTION_WORKSTREAM_HANDOFF_REQUESTED",
            GLOBAL_ENTRYPOINT_VIEWED: "CODEX_PLUGINS_APP_SURFACE_ACTION_GLOBAL_ENTRYPOINT_VIEWED"
        };
        a.object({
            action: a.enum(r),
            tileName: a.enum(["analyze-airway-rnaseq", "compare-pathology-visium", "design-pdl1-nanobodies", "improve-trastuzumab-cdrs", "dock-imatinib-abl1", "design-jak2-binders", "predict-ace-inhibitor-logd-pka", "assess-antibody-developability", "predict-kras-g12c", "map-petase-mutations", "embed-gb1-sequences", "price-pdl1-assays"]).optional()
        }).strict().refine(e => {
            let {
                action: t,
                tileName: n
            } = e;
            return null == n || t === r.WORKSTREAM_HANDOFF_REQUESTED
        }), n.d(t, {}, {
            a: "rosalind@openai-curated-remote"
        })
    }),
    fD5v: (function(e, t, n) {
        n("kSHG");
        var a = n("ASxG");
        let r = a.strictObject({
            path: a.string().min(1)
        });
        n.d(t, {}, {
            a: "openai/files/open",
            b: r
        })
    }),
    WWo4: (function(e, t, n) {
        var a = n("kSHG"),
            r = n("ASxG");
        let o = "openai/message",
            s = r.object({
                target: r.enum(["active", "new"]).optional(),
                send: r.boolean().optional()
            }).strict(),
            i = a.W.shape.params.unwrap().extend({
                role: r.literal("user"),
                content: r.array(a.h),
                _meta: a.W.shape.params.unwrap().shape._meta.unwrap().extend({
                    [o]: s.optional()
                }).optional()
            });
        n.d(t, {}, {
            a: o,
            b: s,
            c: i
        })
    }),
    OppN: (function(e, t, n) {
        var a = n("kSHG"),
            r = n("ASxG");
        let o = "openai/modelContext",
            s = r.string().min(1);
        r.object({
            [o]: r.object({
                updateId: s
            })
        }), r.union([r.object({
            content: r.array(a.h).optional(),
            structuredContent: r.record(r.string(), r.unknown()).optional(),
            updateId: s
        }), r.null()]), n.d(t, {}, {
            a: o
        })
    }),
    bn59: (function(e, t, n) {
        n.d(t, {
            a: () => z,
            ChatSeatAccessScreen: () => G
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
            x = n("rLEB"),
            b = n("Ietk"),
            C = n("twmu"),
            _ = n("EOo5"),
            w = n("Kwur"),
            I = n("udGC"),
            S = n("aTcy"),
            j = n("JNtf"),
            T = n("mUDD"),
            E = n("Ot7V"),
            A = n("SGsN"),
            P = n("DAA7"),
            k = n("yGJW"),
            M = n("GDNt");

        function R(e) {
            let t, n, l, c, d, u, p, v, y, M, R, B, G, F, z, L, D, H, W, q, U, K, V = (0, r.c)(70),
                {
                    account: Y,
                    accountId: Q,
                    userId: $,
                    onClose: X,
                    onSwitchToWork: Z
                } = e,
                J = (0, o.y)(m.a),
                ee = (0, f.a)(),
                {
                    email: et
                } = (0, _.a)(),
                [en, ea] = (0, s.useState)(),
                er = (0, s.useRef)(!0);
            V[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => (er.current = !0, () => {
                er.current = !1
            }), n = [], V[0] = t, V[1] = n) : (t = V[0], n = V[1]), (0, s.useEffect)(t, n);
            let eo = "account-owner" === Y.account.account_user_role,
                es = "account-admin" === Y.account.account_user_role,
                ei = !0 === Y.entitlement.has_active_subscription,
                el = (eo || es) && ei,
                ec = eo || el;
            V[2] !== el || V[3] !== eo ? (l = "CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_REQUEST_CHANGE", el ? l = "CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_UPDATE_DIRECTLY" : eo && (l = "CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_GO_TO_WORKSPACE_AND_UPDATE"), V[2] = el, V[3] = eo, V[4] = l) : l = V[4], V[5] !== Y.account.account_user_role || V[6] !== l || V[7] !== ei || V[8] !== J ? (c = (e, t) => {
                (0, k.a)(J, g.qd, {
                    actionType: e,
                    ctaType: void 0 !== t && t ? l : void 0,
                    userRole: Y.account.account_user_role ?? void 0,
                    hasPaidSubscription: ei
                })
            }, V[5] = Y.account.account_user_role, V[6] = l, V[7] = ei, V[8] = J, V[9] = c) : c = V[9];
            let ed = c;
            V[10] !== X ? (d = () => {
                X(), (0, E.f)({
                    href: new URL("/codex/cloud", S.h).toString(),
                    initiator: "open_in_browser_bridge"
                })
            }, V[10] = X, V[11] = d) : d = V[11];
            let eu = d;
            V[12] !== Y.account.subscription_seat_pools_enabled || V[13] !== Q || V[14] !== eu || V[15] !== el || V[16] !== et || V[17] !== ee || V[18] !== eo || V[19] !== ed || V[20] !== X || V[21] !== Z || V[22] !== en || V[23] !== J || V[24] !== $ ? (u = async () => {
                if ("requesting" !== en) {
                    if (ed("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_PRIMARY_CTA_CLICKED", !0), eo && !el) {
                        let e = new URL("/admin/members", S.h);
                        e.searchParams.set("account_id", Q), et && e.searchParams.set("search", et);
                        let t = e.toString(),
                            n = (0, P.c)(J, t, Q),
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
                            if (Y.account.subscription_seat_pools_enabled ? await w.Request.safePost("/accounts/{account_id}/users/{user_id}/seat/update", {
                                    parameters: {
                                        path: {
                                            account_id: Q,
                                            user_id: $
                                        }
                                    },
                                    requestBody: {
                                        operation: "switch",
                                        seat_type: "default"
                                    },
                                    isExpectedError: N
                                }) : await w.Request.safePatch("/accounts/{account_id}/users/{user_id}", {
                                    parameters: {
                                        path: {
                                            account_id: Q,
                                            user_id: $
                                        }
                                    },
                                    additionalHeaders: {
                                        "X-OpenAI-Account-User-Update-Source": "web_usage_based_workspace_access_modal"
                                    },
                                    requestBody: {
                                        seat_type: "default"
                                    }
                                }), !er.current) return;
                            (0, I.e)(J), await (0, b.g)("accounts-check"), await Promise.all([J.query.invalidate(C.b, Q), J.queryClient.invalidateQueries({
                                queryKey: ["accounts", "check"]
                            })]), er.current && X()
                        } else {
                            if ((0, x.b)(J, Q), await w.Request.safePost("/accounts/{account_id}/invites/request", {
                                    parameters: {
                                        path: {
                                            account_id: Q
                                        }
                                    }
                                }), !er.current) return;
                            Z ? (X(), Z()) : eu(), J.get(A.f).success(ee.formatMessage({
                                id: "UsageBasedWorkspaceAccessModal.accessRequestSubmittedToast",
                                defaultMessage: "Access request submitted",
                                description: "Success toast shown after requesting ChatGPT access from the modal"
                            }))
                        }
                    } catch (e) {
                        er.current && ea(O(e) ?? "error")
                    }
                }
            }, V[12] = Y.account.subscription_seat_pools_enabled, V[13] = Q, V[14] = eu, V[15] = el, V[16] = et, V[17] = ee, V[18] = eo, V[19] = ed, V[20] = X, V[21] = Z, V[22] = en, V[23] = J, V[24] = $, V[25] = u) : u = V[25];
            let eh = u;
            V[26] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.chatWork.title",
                defaultMessage: "You don’t have access to Chat on this plan",
                description: "Title of the seat access explanation on the Chat surface. Chat is a product name."
            }), V[26] = p) : p = V[26];
            let ep = p;
            V[27] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.chatWork.message",
                defaultMessage: "You are assigned Work access only. Reach out to your admin to request access to ChatGPT.",
                description: "Explanation for workspace members who need admin approval for ChatGPT access"
            }), V[27] = v) : v = V[27];
            let em = v;
            if (ec) {
                let e;
                V[28] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(i.a, {
                    id: "UsageBasedWorkspaceAccessModal.chatWork.ownerMessage",
                    defaultMessage: "Your current seat is Work-only. Update your seat type in Workspace settings to start using ChatGPT.",
                    description: "Explanation for workspace owners and paid admins who can update their seat to get ChatGPT access"
                }), V[28] = e) : e = V[28], em = e
            } else if (es) {
                let e;
                V[29] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(i.a, {
                    id: "UsageBasedWorkspaceAccessModal.chatWork.adminMessage",
                    defaultMessage: "You are assigned Work access only. Ask your workspace owner to buy ChatGPT seats, then update your seat type in Workspace settings.",
                    description: "Explanation for unpaid workspace admins who need an owner to buy ChatGPT seats"
                }), V[29] = e) : e = V[29], em = e
            }
            V[30] !== ed || V[31] !== X ? (y = e => {
                e || (ed("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_CLOSED"), X())
            }, V[30] = ed, V[31] = X, V[32] = y) : y = V[32], V[33] !== eh ? (M = e => {
                e.preventDefault(), eh()
            }, V[33] = eh, V[34] = M) : M = V[34], V[35] === Symbol.for("react.memo_cache_sentinel") ? (R = (0, a.jsx)(j.d, {
                className: "heading-lg font-semibold",
                children: ep
            }), V[35] = R) : R = V[35], V[36] !== em ? (B = (0, a.jsxs)("div", {
                className: "flex w-full max-w-md flex-col gap-4",
                children: [R, (0, a.jsx)(j.c, {
                    className: "text-lg leading-6 text-secondary",
                    children: em
                })]
            }), V[36] = em, V[37] = B) : B = V[37];
            let eg = "requesting" === en,
                ef = "requesting" === en;
            return V[38] !== ec ? (G = ec ? (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.updateSeatButton",
                defaultMessage: "Update seat",
                description: "Updates the current user's seat to include ChatGPT"
            }) : (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.requestAccessButton",
                defaultMessage: "Request access",
                description: "Requests ChatGPT access from a workspace administrator"
            }), V[38] = ec, V[39] = G) : G = V[39], V[40] !== eg || V[41] !== ef || V[42] !== G ? (F = (0, a.jsx)(h.a, {
                autoFocus: !0,
                className: "w-full",
                size: "auth",
                type: "submit",
                loading: eg,
                disabled: ef,
                children: G
            }), V[40] = eg, V[41] = ef, V[42] = G, V[43] = F) : F = V[43], V[44] !== eu || V[45] !== ed || V[46] !== X || V[47] !== Z ? (z = () => {
                Z ? (X(), Z()) : (ed("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_BACK_TO_CODEX_CLICKED"), eu())
            }, V[44] = eu, V[45] = ed, V[46] = X, V[47] = Z, V[48] = z) : z = V[48], V[49] !== Z ? (L = Z ? (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.chatWork.switchToWorkButton",
                defaultMessage: "Switch to Work",
                description: "Switches from the Chat access explanation to the available Work surface"
            }) : (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.backToCodexButton",
                defaultMessage: "Back to Codex",
                description: "Returns to Codex from the Chat access explanation"
            }), V[49] = Z, V[50] = L) : L = V[50], V[51] !== z || V[52] !== L ? (D = (0, a.jsx)(h.a, {
                className: "w-full",
                color: "outlineGhost",
                size: "auth",
                onClick: z,
                children: L
            }), V[51] = z, V[52] = L, V[53] = D) : D = V[53], V[54] !== F || V[55] !== D ? (H = (0, a.jsxs)("div", {
                className: "flex w-full max-w-xs flex-col gap-3",
                children: [F, D]
            }), V[54] = F, V[55] = D, V[56] = H) : H = V[56], V[57] !== ee || V[58] !== en ? (W = null != en && "requesting" !== en ? (0, a.jsx)("p", {
                className: "text-sm text-secondary",
                role: "alert",
                children: "error" !== en ? (0, a.jsx)(i.a, {
                    id: "businessSeatRenewal.wait",
                    defaultMessage: "Seat changes are temporarily unavailable. Please try again after {time}.",
                    description: "Error during a Business seat change when billing has not caught up. time is the suggested retry date and time in the user's locale and time zone, not a guaranteed completion time.",
                    values: {
                        time: ee.formatDate(en.retry_at, {
                            dateStyle: "medium",
                            timeStyle: "short"
                        })
                    }
                }) : (0, a.jsx)(i.a, {
                    id: "UsageBasedWorkspaceAccessModal.errorMessage",
                    defaultMessage: "Could not request access. Please contact your workspace administrator to grant ChatGPT access.",
                    description: "Error after a seat update or access request fails. The primary action can be retried."
                })
            }) : null, V[57] = ee, V[58] = en, V[59] = W) : W = V[59], V[60] !== B || V[61] !== H || V[62] !== W ? (q = (0, a.jsxs)("div", {
                className: "flex flex-col items-center gap-8 p-10 text-center",
                children: [B, H, W]
            }), V[60] = B, V[61] = H, V[62] = W, V[63] = q) : q = V[63], V[64] !== q || V[65] !== M ? (U = (0, a.jsx)(T.b, {
                as: "form",
                className: "select-none",
                size: "viewport",
                variant: "chatgpt",
                onSubmit: M,
                children: q
            }), V[64] = q, V[65] = M, V[66] = U) : U = V[66], V[67] !== U || V[68] !== y ? (K = (0, a.jsx)(j.a, {
                open: !0,
                size: "wide",
                variant: "chatgpt",
                onOpenChange: y,
                children: U
            }), V[67] = U, V[68] = y, V[69] = K) : K = V[69], K
        }

        function N(e) {
            return null != O(e)
        }

        function O(e) {
            if (e instanceof M.a && 409 === e.status) try {
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

        function G(e) {
            let t, n, s = (0, r.c)(9),
                {
                    modeToggle: i,
                    onSwitchToWork: c
                } = e,
                h = (0, o.y)(m.a),
                p = (0, o.z)(B.a),
                g = (0, o.z)(d.u),
                f = (0, l._)();
            if ("restricted" !== p.status) return null;
            let v = `${p.accountId}:${p.userId}`;
            return s[0] !== f || s[1] !== c || s[2] !== h || s[3] !== g.status ? (t = "allowed" === g.status ? c ?? (() => {
                (0, u.l)(h, "work"), f("/")
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
                    defaultMessage: "You don’t have access to Chat on this plan",
                    description: "Title of the seat access explanation on the Chat surface. Chat is a product name."
                })
            }), u[2] = n) : n = u[2], u[3] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, a.jsx)("main", {
                className: "flex h-full min-h-0 flex-1 items-center justify-center px-panel",
                children: (0, a.jsxs)("div", {
                    className: "flex w-full max-w-3xl flex-col items-center gap-8 text-center select-none",
                    children: [n, (0, a.jsx)(h.a, {
                        onClick: () => y(!1),
                        children: (0, a.jsx)(i.a, {
                            id: "chatSeatAccess.reviewAccess",
                            defaultMessage: "Review access options",
                            description: "Reopens the Chat seat access dialog after dismissal"
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
            return l ? d.isLoading ? null : (s[1] !== d.isCapable || s[2] !== i ? (n = d.isCapable ? (0, a.jsx)(G, {}) : i, s[1] = d.isCapable, s[2] = i, s[3] = n) : n = s[3], n) : i
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
                let [x] = (0, o.useState)(t);
                return h[2] !== x ? (n = () => (v.current = !0, y.current = y.current ?? s.a.start(x.name, {}, x), y.current.mark("route_entered"), () => {
                    v.current = !1, queueMicrotask(() => {
                        v.current || y.current?.abort("navigation_away")
                    })
                }), l = [x], h[2] = x, h[3] = n, h[4] = l) : (n = h[3], l = h[4]), (0, o.useEffect)(n, l), h[5] !== f || h[6] !== m ? (c = () => {
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
            let d = n(o.s, r.conversationId),
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
                let a = n(c.p, e),
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
                        planType: r.plan_type ?? null,
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
                        planType: r,
                        messageId: o,
                        libraryFileId: s,
                        query: i
                    }
                    of n(u, e)) {
                    if (a.has(s)) continue;
                    let e = i.data;
                    e?.mime_type === "text/markdown" && "owned" === e.access_kind && a.set(s, {
                        automationId: t,
                        planType: r,
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
                        messageId: o,
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
                } = t, a = n(h, e).filter(e => "language_learning" !== e.planType), r = n(c.p, e), o = r?.filter(e => "list" !== e.source && a.some(t => t.automationId === e.automationId)), s = o?.at(-1)?.messageId;
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
    Sd4O: (function(e, t, n) {
        var a = n("BolX"),
            r = n("Ro2M"),
            o = n("OWtl"),
            s = n("OMIV"),
            i = n("dQRk");
        let l = (0, a.d)(o.a, (e, t) => {
                let {
                    get: n
                } = t, a = n(i.p, e), r = a?.at(-1)?.messageId;
                if (null == r) return null;
                let o = new Set(a?.filter(e => {
                    let {
                        messageId: t
                    } = e;
                    return t === r
                }).map(e => {
                    let {
                        automationId: t
                    } = e;
                    return t
                }));
                return 1 === o.size ? [...o][0] ?? null : null
            }),
            c = (0, a.d)(o.a, (e, t) => {
                let {
                    get: n
                } = t;
                if (!n(s.d, "2840857813")) return null;
                let a = n(l, e);
                return null != a && n(r.e, a).data?.automation.plan_type === "language_learning" ? a : null
            }),
            d = (0, a.d)(o.a, (e, t) => {
                let {
                    get: n
                } = t, a = n(c, e);
                return null == a ? null : n(r.e, a).data?.automation.title.trim() || null
            });
        n.d(t, {}, {
            a: l,
            b: c,
            c: d
        })
    }),
    ckwE: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            o = n("zd8w"),
            s = n("VnEZ");

        function i() {
            let e = null,
                t = new Set,
                n = n => {
                    for (let a of (e = n, t)) a()
                };
            return {
                getSnapshot: () => e,
                subscribe: e => (t.add(e), () => {
                    t.delete(e)
                }),
                register: t => (n(t), () => {
                    e === t && n(null)
                })
            }
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n = (0, r.c)(3),
                    {
                        children: l
                    } = e,
                    [c] = (0, o.useState)(i);
                return n[0] !== c || n[1] !== l ? (t = (0, a.jsx)(s.a, {
                    value: c,
                    children: l
                }), n[0] = c, n[1] = l, n[2] = t) : t = n[2], t
            }
        })
    }),
    S0ko: (function(e, t, n) {
        n.d(t, {
            BusinessAgentConversationHeader: () => N,
            BusinessAgentHomeHero: () => O
        });
        var a = n("ABep"),
            r = n("QosV"),
            o = n("BolX"),
            s = n("OWtl"),
            i = n("dQRk"),
            l = n("nUDt"),
            c = n("on57"),
            d = n("zd8w"),
            u = n("oyxz"),
            h = n("L6H2"),
            p = n("zKCW"),
            m = n("Sm6l"),
            g = n("JNtf"),
            f = n("mUDD"),
            v = n("ZtSy"),
            y = n("HOLv"),
            x = n("mEbU"),
            b = n("RU3e"),
            C = n("UIU6"),
            _ = n("Bbed"),
            w = n("T1PX");
        let I = (0, _.a)(async () => {
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
                return (0, a.jsx)(T, {})
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
                } = t, [r, o] = (0, d.useState)(!1), [s] = (0, d.useState)(() => {
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
            errorFallback: (0, a.jsx)(T, {})
        });

        function S(e) {
            let t, n = (0, r.c)(2),
                o = (0, w.a)();
            return n[0] !== o ? (t = (0, a.jsx)("div", {
                "aria-hidden": !0,
                className: "pointer-events-none relative aspect-2/1 w-full shrink-0 overflow-hidden",
                children: o ? (0, a.jsx)(T, {}) : (0, a.jsx)(j, {})
            }), n[0] = o, n[1] = t) : t = n[1], t
        }

        function j(e) {
            let t, n, s, i = (0, r.c)(7),
                l = (0, d.useRef)(null),
                c = (0, x.a)(l),
                u = (0, o.z)(b.a),
                [h, p] = (0, d.useState)(!1);
            if (h) {
                let e;
                return i[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(T, {}), i[0] = e) : e = i[0], e
            }
            return i[1] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(T, {}), i[1] = t) : t = i[1], i[2] !== c || i[3] !== u ? (n = c && !0 === u ? (0, a.jsx)(I, {
                onError: () => p(!0)
            }) : null, i[2] = c, i[3] = u, i[4] = n) : n = i[4], i[5] !== n ? (s = (0, a.jsx)(C.a, {
                name: "BusinessAgentDisclosureHero",
                fallback: t,
                children: (0, a.jsx)("div", {
                    ref: l,
                    className: "absolute inset-0",
                    children: n
                })
            }), i[5] = n, i[6] = s) : s = i[6], s
        }

        function T(e) {
            let t, n = (0, r.c)(1);
            return n[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)("img", {
                className: "absolute inset-0 size-full object-cover",
                alt: "",
                draggable: !1,
                referrerPolicy: "no-referrer",
                src: "https://cdn.openai.com/chatgpt/clients/bazaar/business-agent-disclosure/2026-09-23/business-disclosure-static-ade5a622504d70d9.png"
            }), n[0] = t) : t = n[0], t
        }
        var E = {
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
            A = {
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

        function P(e) {
            let t, n, o, s, i, l, d, p = (0, r.c)(17),
                {
                    compact: m,
                    state: g
                } = e,
                f = void 0 !== m && m,
                v = "ready" === g.status ? g.context : g,
                y = f && "max-w-[60%] shrink-0";
            p[0] !== y ? (t = (0, c.b)("flex min-w-0 items-center gap-2 select-none", y), p[0] = y, p[1] = t) : t = p[1];
            let x = f ? "shrink-0 max-sm:hidden" : "contents",
                b = v.businessName ?? null,
                C = v.logoUrl ?? null;
            return p[2] !== b || p[3] !== C ? (n = (0, a.jsx)(h.a, {
                alt: "",
                name: b,
                size: "md",
                src: C
            }), p[2] = b, p[3] = C, p[4] = n) : n = p[4], p[5] !== x || p[6] !== n ? (o = (0, a.jsx)("div", {
                className: x,
                children: n
            }), p[5] = x, p[6] = n, p[7] = o) : o = p[7], p[8] !== v.businessName ? (s = (0, a.jsx)("span", {
                className: "truncate text-sm font-semibold",
                children: (0, a.jsx)(R, {
                    businessName: v.businessName
                })
            }), p[8] = v.businessName, p[9] = s) : s = p[9], p[10] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)("span", {
                className: "truncate text-xs font-normal text-secondary",
                children: (0, a.jsx)(u.a, {
                    id: "chatgpt.ads.business_agent.thread_header.subtitle",
                    defaultMessage: "Business chat",
                    description: "Short subtitle beneath the business name in the header of a Business Agent conversation. It tells an end user that the custom GPT chat represents a business. Keep this compact enough to fit on one line; there are no placeholders or formatting."
                })
            }), p[10] = i) : i = p[10], p[11] !== s ? (l = (0, a.jsxs)("div", {
                className: "flex min-w-0 flex-col text-start",
                children: [s, i]
            }), p[11] = s, p[12] = l) : l = p[12], p[13] !== l || p[14] !== t || p[15] !== o ? (d = (0, a.jsxs)("div", {
                className: t,
                children: [o, l]
            }), p[13] = l, p[14] = t, p[15] = o, p[16] = d) : d = p[16], d
        }

        function k(e) {
            let t, n = (0, r.c)(14),
                {
                    state: o,
                    onStarterPromptSelect: s
                } = e,
                i = "ready" === o.status ? o.context : o;
            if (n[0] !== i.businessName || n[1] !== i.logoUrl || n[2] !== i.showConversationStarters || n[3] !== s || n[4] !== o.context || n[5] !== o.status) {
                let e, r, l, c = "ready" === o.status && i.showConversationStarters ? o.context.conversationStarters?.slice(0, 4) : void 0,
                    d = i.businessName ?? null,
                    g = i.logoUrl ?? null;
                n[7] !== d || n[8] !== g ? (e = (0, a.jsx)(h.a, {
                    alt: "",
                    name: d,
                    size: "lg",
                    src: g
                }), n[7] = d, n[8] = g, n[9] = e) : e = n[9], n[10] !== i.businessName ? (r = (0, a.jsx)("h1", {
                    className: "heading-xl font-normal text-default select-none",
                    children: (0, a.jsx)(R, {
                        businessName: i.businessName
                    })
                }), n[10] = i.businessName, n[11] = r) : r = n[11], n[12] !== o.status ? (l = "ready" !== o.status ? (0, a.jsx)(p.a, {
                    ariaLive: "polite",
                    role: "failed" === o.status ? "alert" : "status",
                    type: "failed" === o.status ? "error" : "normal",
                    content: "failed" === o.status ? (0, a.jsx)(u.a, {
                        id: "chatgptConversations.businessAgent.unavailable",
                        defaultMessage: "This Business Agent is unavailable. Please return to the ad and try again",
                        description: "Error on a Business Agent chat destination when creating its interaction fails; sending is unavailable and the user can retry from the original ad"
                    }) : (0, a.jsx)(u.a, {
                        id: "chatgptConversations.businessAgent.loading",
                        defaultMessage: "Opening Business Agent…",
                        description: "Loading status on a Business Agent chat destination while its interaction is being created"
                    })
                }) : null, n[12] = o.status, n[13] = l) : l = n[13], t = (0, a.jsxs)("div", {
                    className: "mx-auto flex w-[min(100%,var(--thread-content-max-width))] min-w-0 flex-col items-center gap-3 px-panel text-center",
                    children: [e, r, l, null != c && (c.length > 1 || 1 === c.length && "ready" === o.status && !0 === o.context.disablePrefill) ? (0, a.jsx)("div", {
                        className: "mt-3 flex flex-wrap justify-center gap-2 select-none",
                        children: c.map(e => (0, a.jsx)(m.a, {
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

        function M(e) {
            let t, n, o, s, i, l, c, h, p, x, b, C, _, w, I, j, T, P = (0, r.c)(29),
                {
                    context: k,
                    onPresented: M,
                    onContinue: R,
                    onDismiss: N
                } = e,
                [O, B] = (0, d.useState)(!0 === k.showDisclosureModal);
            P[0] !== k.privacyPolicyUrl ? (t = function(e) {
                if (null == e) return null;
                try {
                    let t = new URL(e);
                    return ("https:" === t.protocol || "http:" === t.protocol) && t.hostname ? t.href : null
                } catch {
                    return null
                }
            }(k.privacyPolicyUrl), P[0] = k.privacyPolicyUrl, P[1] = t) : t = P[1];
            let G = t;
            return P[2] !== N ? (n = e => {
                B(e), e || N?.()
            }, P[2] = N, P[3] = n) : n = P[3], P[4] !== M ? (o = {
                "data-theme": "light",
                onOpenAutoFocus: M
            }, P[4] = M, P[5] = o) : o = P[5], P[6] !== R ? (s = e => {
                e.preventDefault(), B(!1), R?.()
            }, P[6] = R, P[7] = s) : s = P[7], P[8] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(S, {}), P[8] = i) : i = P[8], P[9] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, a.jsx)(g.d, {
                className: "heading-lg text-center leading-7 font-semibold",
                children: (0, a.jsx)(u.a, {
                    id: "chatgptConversations.businessAgent.disclosureTitle",
                    defaultMessage: "About chatting with businesses",
                    description: "Title of the introductory dialog shown when a signed-in person opens an eligible Business Agent chat. It introduces what business AI chats offer and how chat privacy works. Keep it neutral and concise; there are no placeholders."
                })
            }), P[9] = l) : l = P[9], P[10] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)(y.a, {
                className: "shrink-0",
                asset: E
            }), P[10] = c) : c = P[10], P[11] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, a.jsx)("h3", {
                className: "text-base leading-relaxed font-semibold text-default",
                children: (0, a.jsx)(u.a, {
                    id: "chatgptConversations.businessAgent.disclosureQuestionsTitle",
                    defaultMessage: "Ask questions and compare options",
                    description: "Short heading in the introductory dialog shown when a signed-in person opens an eligible Business Agent chat. It explains that they can ask about the business and compare options before deciding. Keep the tone informative; there are no placeholders."
                })
            }), P[11] = h) : h = P[11], P[12] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, a.jsxs)("div", {
                className: "flex items-start gap-3",
                children: [c, (0, a.jsxs)("div", {
                    className: "flex min-w-0 flex-col gap-0.5",
                    children: [h, (0, a.jsx)("p", {
                        className: "text-base leading-snug tracking-tight text-secondary",
                        children: (0, a.jsx)(u.a, {
                            id: "chatgptConversations.businessAgent.disclosureQuestionsBody",
                            defaultMessage: "Learn what the business offers and ask detailed follow-ups as you decide.",
                            description: "Body beneath the questions-and-comparison heading in the introductory dialog shown when a signed-in person opens an eligible Business Agent chat. It explains that they can learn about the business and ask further questions while deciding. Use a neutral tone; there are no placeholders."
                        })
                    })]
                })]
            }), P[12] = p) : p = P[12], P[13] === Symbol.for("react.memo_cache_sentinel") ? (x = (0, a.jsx)(y.a, {
                className: "shrink-0",
                asset: A
            }), P[13] = x) : x = P[13], P[14] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, a.jsx)("h3", {
                className: "text-base leading-relaxed font-semibold text-default",
                children: (0, a.jsx)(u.a, {
                    id: "chatgptConversations.businessAgent.disclosureUsageTrendsTitle",
                    defaultMessage: "Your chats remain private",
                    description: "Short privacy heading in the introductory dialog shown when a signed-in person opens an eligible Business Agent chat. Reassure the person that their conversations with business AI agents remain private from the businesses. There are no placeholders."
                })
            }), P[14] = b) : b = P[14], P[15] === Symbol.for("react.memo_cache_sentinel") ? (C = (0, a.jsxs)("div", {
                className: "flex flex-col gap-4",
                children: [l, (0, a.jsx)(g.c, {
                    asChild: !0,
                    children: (0, a.jsxs)("div", {
                        className: "flex flex-col gap-4",
                        children: [p, (0, a.jsxs)("div", {
                            className: "flex items-start gap-3",
                            children: [x, (0, a.jsxs)("div", {
                                className: "flex min-w-0 flex-col gap-0.5",
                                children: [b, (0, a.jsx)("p", {
                                    className: "text-base leading-snug tracking-tight text-secondary",
                                    children: (0, a.jsx)(u.a, {
                                        id: "chatgptConversations.businessAgent.disclosureUsageTrendsBody",
                                        defaultMessage: "Businesses can’t see your chats or your personal info — just overall usage trends to help improve their AI agent.",
                                        description: "Privacy explanation in the introductory dialog shown when a signed-in person opens an eligible Business Agent chat. The business cannot see the chat or personal information and only receives overall usage trends to improve its AI agent. Use a clear neutral tone; there are no placeholders or links."
                                    })
                                })]
                            })]
                        })]
                    })
                })]
            }), P[15] = C) : C = P[15], P[16] !== G ? (_ = null == G ? null : (0, a.jsx)(v.a, {
                href: G,
                initiator: "external_link",
                openTarget: "external-browser",
                children: (0, a.jsx)(u.a, {
                    id: "chatgptConversations.businessAgent.privacyPolicy",
                    defaultMessage: "Privacy policy",
                    description: "Link to the business-provided privacy policy in the introductory Business Agent dialog. Opens separately without accepting or dismissing the dialog. Keep the label short."
                })
            }), P[16] = G, P[17] = _) : _ = P[17], P[18] === Symbol.for("react.memo_cache_sentinel") ? (w = (0, a.jsx)("div", {
                className: "flex justify-center",
                children: (0, a.jsx)(m.a, {
                    color: "primary",
                    size: "dialogAction",
                    type: "submit",
                    children: (0, a.jsx)(u.a, {
                        id: "chatgptConversations.businessAgent.disclosureStartChat",
                        defaultMessage: "Start chatting",
                        description: "Short button label in the introductory dialog shown when a signed-in person opens an eligible Business Agent chat. Dismisses the information dialog so they can start chatting. It does not send a message or change a privacy setting; there are no placeholders."
                    })
                })
            }), P[18] = w) : w = P[18], P[19] !== _ ? (I = (0, a.jsxs)("div", {
                className: "flex flex-col gap-4 pb-10 select-none",
                children: [i, (0, a.jsxs)("div", {
                    className: "flex flex-col gap-6 px-8",
                    children: [C, _, w]
                })]
            }), P[19] = _, P[20] = I) : I = P[20], P[21] !== I || P[22] !== s ? (j = (0, a.jsx)(f.b, {
                as: "form",
                size: "viewport",
                variant: "chatgpt",
                onSubmit: s,
                children: I
            }), P[21] = I, P[22] = s, P[23] = j) : j = P[23], P[24] !== O || P[25] !== j || P[26] !== n || P[27] !== o ? (T = (0, a.jsx)(g.a, {
                open: O,
                onOpenChange: n,
                size: "beacon",
                variant: "promotional",
                contentProps: o,
                children: j
            }), P[24] = O, P[25] = j, P[26] = n, P[27] = o, P[28] = T) : T = P[28], T
        }

        function R(e) {
            let t, n = (0, r.c)(2),
                {
                    businessName: o
                } = e;
            return n[0] !== o ? (t = o?.trim() ? (0, a.jsx)(a.Fragment, {
                children: o
            }) : (0, a.jsx)(u.a, {
                id: "chatgpt.ads.business_agent.disclosure.fallback_name",
                defaultMessage: "Business Agent",
                description: "Fallback heading in the compact data-sharing disclosure shown at the top of every organic or sponsored Business Agent conversation. Use a short neutral title that fits on one line. This appears when the business has not supplied a display name."
            }), n[0] = o, n[1] = t) : t = n[1], t
        }

        function N(e) {
            let t, n = (0, r.c)(4),
                {
                    compact: s,
                    conversationId: l,
                    fallback: c
                } = e,
                d = (0, o.x)(i.t, l);
            return n[0] !== s || n[1] !== c || n[2] !== d ? (t = null == d ? c : (0, a.jsx)(P, {
                compact: s,
                state: d
            }), n[0] = s, n[1] = c, n[2] = d, n[3] = t) : t = n[3], t
        }

        function O(e) {
            let t, n, s, l = (0, r.c)(11),
                {
                    conversationId: c,
                    fallback: d,
                    onStarterPromptSelect: u
                } = e,
                h = (0, o.x)(i.t, c);
            return null == h ? d : (l[0] !== d || l[1] !== u || l[2] !== h ? (t = "ready" !== h.status || h.context.showConversationStarters ? (0, a.jsx)(k, {
                state: h,
                onStarterPromptSelect: u
            }) : d, l[0] = d, l[1] = u, l[2] = h, l[3] = t) : t = l[3], l[4] !== c || l[5] !== h.context || l[6] !== h.status ? (n = "ready" === h.status ? (0, a.jsx)(B, {
                context: h.context,
                conversationId: c
            }, h.context.interactionId) : null, l[4] = c, l[5] = h.context, l[6] = h.status, l[7] = n) : n = l[7], l[8] !== t || l[9] !== n ? (s = (0, a.jsxs)(a.Fragment, {
                children: [t, n]
            }), l[8] = t, l[9] = n, l[10] = s) : s = l[10], s)
        }

        function B(e) {
            let t, n, i, c = (0, r.c)(11),
                {
                    context: d,
                    conversationId: u
                } = e,
                h = (0, o.y)(s.a),
                p = (0, o.z)(l.b),
                m = p?.conversationId === u && p.ready;
            return m || !0 === d.showDisclosureModal ? (c[0] !== m || c[1] !== d || c[2] !== p ? (t = m ? {
                ...d,
                showDisclosureModal: !p.presented
            } : d, c[0] = m, c[1] = d, c[2] = p, c[3] = t) : t = c[3], c[4] !== m || c[5] !== u || c[6] !== h ? (n = m ? () => (0, l.a)(h, u) : void 0, c[4] = m, c[5] = u, c[6] = h, c[7] = n) : n = c[7], c[8] !== t || c[9] !== n ? (i = (0, a.jsx)(M, {
                context: t,
                onPresented: n
            }), c[8] = t, c[9] = n, c[10] = i) : i = c[10], i) : null
        }
    }),
    KvJW: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            o = n("BolX"),
            s = n("zd8w"),
            i = n("oyxz"),
            l = n("WQca"),
            c = n("IxgT"),
            d = n("yGJW"),
            u = n("OWtl"),
            h = n("eShZ"),
            p = n("ZhoB");
        let m = new WeakSet;

        function g(e) {
            let t, n, a = (0, r.c)(5),
                {
                    error: o,
                    onShown: i
                } = e,
                l = (0, s.useEffectEvent)(i);
            return a[0] !== o || a[1] !== l ? (t = () => {
                if (null != o) {
                    if ((0, h.e)(o)) {
                        if (m.has(o)) return;
                        m.add(o)
                    }
                    l()
                }
            }, a[0] = o, a[1] = l, a[2] = t) : t = a[2], a[3] !== o ? (n = [o], a[3] = o, a[4] = n) : n = a[4], (0, s.useEffect)(t, n), null
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, s, m, f, v, y, x, b = (0, r.c)(24),
                    {
                        conversationId: C,
                        error: _,
                        loadError: w,
                        canRetry: I,
                        isWorkConversation: S,
                        showChatFallback: j,
                        children: T
                    } = e,
                    E = (0, o.y)(u.a),
                    A = (0, o.z)(void 0 !== j && j && !1 === S ? c.b : null);
                if (null != A) return A;
                b[0] !== C || b[1] !== S || b[2] !== E ? (t = (e, t) => {
                    (0, p.e)(E.get(d.c).logProductEvent, {
                        conversationId: C,
                        error: e,
                        isWorkConversation: S,
                        canRetry: t
                    })
                }, b[0] = C, b[1] = S, b[2] = E, b[3] = t) : t = b[3];
                let P = t;
                b[4] !== I || b[5] !== w || b[6] !== P ? (n = () => P(w, I), b[4] = I, b[5] = w, b[6] = P, b[7] = n) : n = b[7], b[8] !== w || b[9] !== n ? (s = (0, a.jsx)(g, {
                    error: w,
                    onShown: n
                }), b[8] = w, b[9] = n, b[10] = s) : s = b[10], b[11] !== T || b[12] !== s ? (m = (0, a.jsxs)(a.Fragment, {
                    children: [s, T]
                }), b[11] = T, b[12] = s, b[13] = m) : m = b[13];
                let k = m;
                return b[14] !== _ ? (f = _ instanceof h.a && !(0, h.e)(_) && (403 === _.status || 404 === _.status), b[14] = _, b[15] = f) : f = b[15], b[16] !== _ || b[17] !== P ? (v = () => P(_, !1), b[16] = _, b[17] = P, b[18] = v) : v = b[18], b[19] === Symbol.for("react.memo_cache_sentinel") ? (y = (0, a.jsx)(i.a, {
                    id: "chatgptConversations.conversationInaccessible",
                    defaultMessage: "You don’t have access to this conversation. Make sure you’re logged in to the right account, or ask the conversation owner to send you a share link.",
                    description: "Info toast shown when a user opens a ChatGPT conversation that does not exist or that they cannot access. The user is returned to Home and can switch accounts or ask the owner for a share link."
                }), b[19] = y) : y = b[19], b[20] !== k || b[21] !== f || b[22] !== v ? (x = (0, a.jsxs)(a.Fragment, {
                    children: [null, (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)(l.a, {
                            isUnavailable: f,
                            homePath: "/",
                            onUnavailable: v,
                            message: y,
                            children: k
                        })
                    })]
                }), b[20] = k, b[21] = f, b[22] = v, b[23] = x) : x = b[23], x
            }
        })
    }),
    eKlv: (function(e, t, n) {
        var a = n("Cslg"),
            r = n("X6Vn"),
            o = n("SGsN"),
            s = n("svjy"),
            i = n("gbnW"),
            l = n("ZrYB"),
            c = n("AOHi"),
            d = n("OtLV"),
            u = n("sfmI"),
            h = n("lBzi"),
            p = n("dQRk"),
            m = n("vVgo"),
            g = n("gyrn"),
            f = n("LOqV"),
            v = n("QmkR");

        function y(e, t) {
            let n = e.query.getData(h.chatGptConversationQueryById$, t) ?? (0, f.g)(e.queryClient, t);
            if (null != n) return n;
            let a = e.get(p.k).find(n => e.get(p.j, n) === t);
            if (!(null == a || e.get(p.A, a))) return {
                id: t,
                conversation_origin: e.get(p.x, a),
                gizmo_id: e.get(p.R, a),
                is_starred: !1,
                title: e.get(p.cb, a)
            }
        }

        function x(e, t) {
            let n = e.get(p.j, t);
            return null == n ? null : e.query.snapshot(h.chatGptConversationQueryById$, n).getData() ?? null
        }
        n.d(t, {}, {
            a: function(e, t) {
                let n = x(e, t);
                null != n && (0, l.a)(e, n.conversation_id)
            },
            b: y,
            c: function(e, t) {
                let n = e.get(p.j, t);
                if (null == n) return;
                let r = y(e, n);
                null != r && (0, v.d)(e, n) && (0, u.a)(r, e.get(a.h), e.get(a.g)) && (0, v.V)({
                    scope: e,
                    conversation: "conversation_id" in r ? {
                        gizmo_id: r.gizmo_id,
                        id: r.conversation_id,
                        is_archived: r.is_archived,
                        is_starred: r.is_starred,
                        title: r.title,
                        context_scopes: r.context_scopes
                    } : r
                }).catch(t => {
                    let n = t instanceof Error ? (0, c.e)(t)?.trim() : null;
                    e.get(o.f).danger(n || e.get(s.a).formatMessage(d.a.pinError), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.activeChat.pinError"
                        }
                    })
                })
            },
            renameActiveChatGptConversation: function(e, t, n) {
                let o = x(e, t);
                if (null == o || !(0, u.b)(o, e.get(a.h), e.get(a.g), e.get(v.g, o.conversation_id))) {
                    if (null != n) throw Error("Chat is unavailable for renaming.");
                    return
                }
                let s = e.get(p.D, t) ? e.get(p.cb, t) : o.title,
                    l = (0, m.a)(o.context_scopes) ? o.gizmo_id : void 0,
                    c = t => (0, v.R)({
                        scope: e,
                        conversationId: o.conversation_id,
                        previousTitle: s,
                        title: t
                    });
                if (null != n) {
                    if (null != l && e.get(g.f)?.projectId !== l) throw Error("Chat is locked.");
                    return c(n)
                }(0, r.f)(e, i.SidebarRenameDialog, {
                    initialValue: s ?? "",
                    draftKey: o.conversation_id,
                    protectedProjectId: l,
                    onSave: c,
                    requireNonEmpty: !0,
                    trimOnSave: !0
                })
            }
        })
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
                        conversationId: x
                    } = e,
                    b = (0, r.y)(c.a),
                    C = (0, o.a)();
                return y[0] !== x || y[1] !== C || y[2] !== b ? (t = () => {
                    (0, h.c)(b, x).catch(() => {
                        b.get(i.f).danger(C.formatMessage(u.a.markUnreadError), {
                            errorAnalytics: {
                                toastId: "chatgptConversations.sidebar.markUnreadError"
                            }
                        })
                    })
                }, y[0] = x, y[1] = C, y[2] = b, y[3] = t) : t = y[3], (0, s.a)("markThreadUnread", t), y[4] !== x || y[5] !== b ? (n = () => void(0, d.renameActiveChatGptConversation)(b, x), p = [x, b], y[4] = x, y[5] = b, y[6] = n, y[7] = p) : (n = y[6], p = y[7]), (0, l.d)("rename-thread", n, p), y[8] !== x || y[9] !== b ? (m = () => (0, d.c)(b, x), g = [x, b], y[8] = x, y[9] = b, y[10] = m, y[11] = g) : (m = y[10], g = y[11]), (0, l.d)("toggle-thread-pin", m, g), y[12] !== x || y[13] !== b ? (f = () => (0, d.a)(b, x), v = [x, b], y[12] = x, y[13] = b, y[14] = f, y[15] = v) : (f = y[14], v = y[15]), (0, l.d)("archive-thread", f, v), null
            }
        })
    }),
    N4WB: (function(e, t, n) {
        n.d(t, {
            a: () => s1,
            ChatGptConversationPage: () => s0
        });
        var a = n("ABep"),
            r = n("QosV"),
            o = n("FS1B"),
            s = n("T0Rc"),
            i = n("on57"),
            l = n("IPUh"),
            c = n("xCr9"),
            d = n.n(c),
            u = n("HVBu"),
            h = n.n(u),
            p = n("BolX"),
            m = n("d0tz"),
            g = n("AuIy"),
            f = n("iqEK"),
            v = n("NRIv"),
            y = n("zd8w"),
            x = n("v7qY"),
            b = n("Wf1j"),
            C = n("oyxz"),
            _ = n("jqIZ"),
            w = n("bn59"),
            I = n("OY84"),
            S = n("Yxds"),
            j = n("StMt"),
            T = n("E8Sp"),
            E = n("z0li"),
            A = n("QcFS"),
            P = n("ZU27"),
            k = n("Pyg2"),
            M = n("ZIh4"),
            R = n("O0M0"),
            N = n("Cslg"),
            O = n("OFP1"),
            B = n("ItIk"),
            G = (n("AZW7"), n("jov5")),
            F = n("dQRk"),
            z = n("tSEg"),
            L = n("Ro2M"),
            D = n("bN4H"),
            H = n("TS05");

        function W(e) {
            let t, n, o, s, i = (0, r.c)(12),
                {
                    conversationId: l,
                    entries: c,
                    turnListApi: d
                } = e,
                {
                    key: u,
                    search: h,
                    state: m
                } = (0, _.Y)();
            i[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                name: "automations.cloud.scheduled-tasks"
            }, i[0] = t) : t = i[0];
            let {
                isCapable: g
            } = (0, p.x)(j.a, t);
            if (i[1] !== g || i[2] !== m?.sidebarArea || i[3] !== h) {
                let e = new URLSearchParams(h);
                n = e.get("automationId"), o = m?.sidebarArea === "scheduled" || !g || !n || "finalAgentTurnStart" !== e.get("messageId"), i[1] = g, i[2] = m?.sidebarArea, i[3] = h, i[4] = n, i[5] = o
            } else n = i[4], o = i[5];
            return o ? null : (i[6] !== n || i[7] !== l || i[8] !== c || i[9] !== u || i[10] !== d ? (s = (0, a.jsx)(q, {
                automationId: n,
                conversationId: l,
                entries: c,
                turnListApi: d
            }, u), i[6] = n, i[7] = l, i[8] = c, i[9] = u, i[10] = d, i[11] = s) : s = i[11], s)
        }

        function q(e) {
            let t, n, a, o, s = (0, r.c)(25),
                {
                    automationId: i,
                    conversationId: l,
                    entries: c,
                    turnListApi: d
                } = e,
                u = (0, p.y)(z.a),
                h = (0, _.Y)(),
                m = (0, p.z)(N.f),
                g = (0, p.x)(F.j, l),
                {
                    data: f
                } = (0, p.x)(L.e, i),
                v = (0, p.z)(G.a),
                x = (0, y.useRef)(null),
                b = (0, y.useRef)(null);
            s[0] !== c ? (t = c.findLast(V), s[0] = c, s[1] = t) : t = s[1];
            let C = t;
            s[2] !== m || s[3] !== i || s[4] !== v || s[5] !== C || s[6] !== f || s[7] !== h || s[8] !== u || s[9] !== d ? (n = () => {
                null == f || null == m || (v || x.current === m || (x.current = m, (0, D.openAutomationSidePanelTab)({
                    scope: u,
                    automationId: i,
                    title: f.automation.title
                })), null != d && null != C && b.current !== m && (b.current = m, d.scrollToKey(C.turnKey, U, {
                    align: "top"
                }).then(() => {
                    u.set(H.a, {
                        locationKey: h.key,
                        accountId: m
                    }, !0)
                })))
            }, s[2] = m, s[3] = i, s[4] = v, s[5] = C, s[6] = f, s[7] = h, s[8] = u, s[9] = d, s[10] = n) : n = s[10];
            let w = (0, y.useEffectEvent)(n);
            s[11] !== m || s[12] !== l || s[13] !== f?.automation.conversation_id || s[14] !== w || s[15] !== g ? (a = () => {
                null != m && f?.automation.conversation_id === (g ?? l) && w()
            }, s[11] = m, s[12] = l, s[13] = f?.automation.conversation_id, s[14] = w, s[15] = g, s[16] = a) : a = s[16];
            let I = C?.turnKey,
                S = f?.automation.conversation_id;
            return s[17] !== m || s[18] !== v || s[19] !== l || s[20] !== g || s[21] !== I || s[22] !== S || s[23] !== d ? (o = [m, l, I, S, g, v, d], s[17] = m, s[18] = v, s[19] = l, s[20] = g, s[21] = I, s[22] = S, s[23] = d, s[24] = o) : o = s[24], (0, y.useEffect)(a, o), null
        }

        function U(e) {
            let t = e.querySelector("[data-chatgpt-agent-turn-start]");
            if (null == t) return null;
            let n = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                acceptNode: K
            });
            n.currentNode = t;
            let a = n.nextNode();
            return a instanceof HTMLElement ? a : null
        }

        function K(e) {
            return e instanceof HTMLElement && e.getClientRects().length > 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }

        function V(e) {
            let {
                turn: t
            } = e;
            return t.items.some(Y)
        }

        function Y(e) {
            return "user-message" !== e.type
        }
        var Q = n("uxPT"),
            $ = n("nKJ6"),
            X = n("GMTh"),
            Z = n("zpMv"),
            J = n("PFzG"),
            ee = n("KvJW"),
            et = n("TDcV"),
            en = n("Xvoy"),
            ea = n("SGsN"),
            er = n("WAdu"),
            eo = n("OWtl"),
            es = n("hZax"),
            ei = n("VnEZ");
        let el = {
            $type: "protobuf_analytics_events.v1.ChatgptConversationPrintLifecycle"
        };
        var ec = n("jDEJ"),
            ed = n("yGJW");
        let eu = (0, p.u)(eo.a, null);

        function eh(e, t) {
            if (!e.get(ed.c).isChatgptBrowserReplacement || t.repeat || ((0, ec.a)() ? !t.metaKey || t.ctrlKey : !t.ctrlKey || t.metaKey) || t.altKey || t.shiftKey || "p" !== t.key.toLowerCase() || null != e.get(eu)) return;
            let n = em("CHATGPT_CONVERSATION_PRINT_ENTRY_POINT_SHORTCUT");
            e.set(eu, n), eg(e, n, "CHATGPT_CONVERSATION_PRINT_STAGE_INTENT_OBSERVED")
        }
        async function ep(e, t, n, a) {
            let r = e.get(eu);
            if (!e.get(ed.c).isChatgptBrowserReplacement || null == r) return a();
            let o = n => {
                eg(e, r, n, t)
            };
            o("CHATGPT_CONVERSATION_PRINT_STAGE_PREPARATION_STARTED");
            try {
                let e = await a();
                return n.aborted || o("CHATGPT_CONVERSATION_PRINT_STAGE_PREPARATION_SUCCEEDED"), e
            } catch (a) {
                throw n.aborted || o("CHATGPT_CONVERSATION_PRINT_STAGE_PREPARATION_FAILED"), "CHATGPT_CONVERSATION_PRINT_PREPARATION_HISTORY" !== t || e.get(eu)?.id !== r.id || e.get(eu)?.printing || e.set(eu, null), a
            }
        }

        function em(e) {
            let t = performance.now();
            return {
                id: crypto.randomUUID(),
                entryPoint: e,
                startedAt: t,
                printing: !1
            }
        }

        function eg(e, t, n, a) {
            (0, ed.a)(e, el, {
                attemptId: t.id,
                stage: n,
                entryPoint: t.entryPoint,
                elapsedMs: Math.max(0, performance.now() - t.startedAt),
                preparation: a
            })
        }
        var ef = n("CpsU"),
            ev = n.n(ef),
            ey = n("rKAs"),
            ex = n("SqqO"),
            eb = n("zHp1"),
            eC = n("rvFo"),
            e_ = n("taWv");

        function ew() {
            return Object.fromEntries(Array.from(document.images).flatMap(e => {
                if (!e.complete || 0 === e.naturalWidth) return [];
                let t = e.currentSrc || e.src;
                return [e.getAttribute("src"), e.src, t].flatMap(e => e ? [
                    [e, t]
                ] : [])
            }))
        }
        var eI = n("rxj0"),
            eS = n("gsAl"),
            ej = n("AO3k"),
            eT = n("aS84"),
            eE = n("Qtjq"),
            eA = "printDocument-v_w5Ax";
        let eP = "https://chatgpt.com/download/?utm_source=chatgpt_web&utm_medium=print&utm_campaign=app_install";

        function ek(e) {
            let t, n, o, s, l, c, d, u, h, p, m, g, f = (0, r.c)(22),
                {
                    children: v,
                    title: y
                } = e,
                x = (0, b.a)(),
                {
                    getExperiment: _
                } = (0, es.j)();
            if (!_("448755449").get("enabled", !1)) {
                let e, t;
                return f[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.b)(eA, "hidden w-full space-y-1.5 bg-surface text-default print:block"), f[0] = e) : e = f[0], f[1] !== v ? (t = (0, a.jsx)("div", {
                    className: e,
                    "data-conversation-print": "",
                    "data-theme": "light",
                    children: v
                }), f[1] = v, f[2] = t) : t = f[2], t
            }
            return f[3] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, i.b)(eA, "formattedPrintDocument-tP74Wl", "group/conversation-print hidden w-full bg-surface text-default print:block"), f[3] = t) : t = f[3], f[4] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(eT.a, {
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
            }), f[7] = v, f[8] = s) : s = f[8], f[9] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, i.b)("footer-QEzLbn", "flex items-center gap-3 rounded-2xl border border-default bg-surface-secondary p-2 text-default"), f[9] = l) : l = f[9], f[10] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)("div", {
                className: "flex size-10 shrink-0 items-center justify-center rounded-xl border border-default bg-surface",
                children: (0, a.jsx)(eE.a, {
                    className: "size-7",
                    "aria-hidden": "true"
                })
            }), f[10] = c) : c = f[10], f[11] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, a.jsx)("p", {
                className: "font-semibold",
                children: (0, a.jsx)(C.a, {
                    id: "chatgpt.print.downloadApp.title",
                    defaultMessage: "Take your curiosity further",
                    description: "Headline in the footer of a printed or PDF-saved ChatGPT conversation, inviting the reader to download the mobile app. Keep it short and encouraging."
                })
            }), f[11] = d) : d = f[11], f[12] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, a.jsxs)("div", {
                className: "min-w-0 flex-1 text-sm",
                children: [d, (0, a.jsx)("p", {
                    className: "mt-1 text-secondary",
                    children: (0, a.jsx)(C.a, {
                        id: "chatgpt.print.downloadApp.description",
                        defaultMessage: "Scan to get the ChatGPT app",
                        description: "Instruction beside the QR code in the footer of a printed or PDF-saved conversation. Scanning the code opens the ChatGPT app download page. Keep it short."
                    })
                })]
            }), f[12] = u) : u = f[12], f[13] !== x ? (h = x.formatMessage({
                id: "chatgpt.print.downloadApp.qrCode",
                defaultMessage: "Download the ChatGPT app",
                description: "Accessible label for a QR code and link in a printed or PDF-saved conversation. The code and link open the ChatGPT app download page."
            }), f[13] = x, f[14] = h) : h = f[14], f[15] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, a.jsx)(C.a, {
                id: "chatgpt.print.downloadApp.fallback",
                defaultMessage: "Get the app",
                description: "Link to the ChatGPT app download page when its QR code cannot be generated in a printed conversation"
            }), f[15] = p) : p = f[15], f[16] !== h ? (m = (0, a.jsxs)("footer", {
                className: l,
                children: [c, u, (0, a.jsx)("a", {
                    className: "shrink-0",
                    href: `${eP}&utm_content=pdf_link`,
                    children: (0, a.jsx)(ej.a, {
                        value: `${eP}&utm_content=qr`,
                        size: "inline",
                        ariaLabel: h,
                        fallback: p
                    })
                })]
            }), f[16] = h, f[17] = m) : m = f[17], f[18] !== m || f[19] !== o || f[20] !== s ? (g = (0, a.jsxs)("div", {
                className: t,
                "data-conversation-print": "",
                "data-print-formatting": "",
                "data-theme": "light",
                children: [o, s, m]
            }), f[18] = m, f[19] = o, f[20] = s, f[21] = g) : g = f[21], g
        }

        function eM(e) {
            return {
                ...e,
                renderTelemetryMessages: void 0
            }
        }
        var eR = n("zn0A"),
            eN = n("OOaz"),
            eO = n("jfiJ"),
            eB = n("FGJH"),
            eG = n("nmN6");
        let eF = new WeakMap;

        function ez(e) {
            let t, n, o = (0, r.c)(6),
                s = (0, p.z)(et.a);
            return o[0] !== s || o[1] !== e.entries[0]?.conversationId ? (t = JSON.stringify([s, e.entries[0]?.conversationId]), o[0] = s, o[1] = e.entries[0]?.conversationId, o[2] = t) : t = o[2], o[3] !== e || o[4] !== t ? (n = (0, a.jsx)(eL, {
                ...e
            }, t), o[3] = e, o[4] = t, o[5] = n) : n = o[5], n
        }

        function eL(e) {
            let t, n, o, s, i, l, c = (0, r.c)(16),
                d = (0, p.y)(z.a),
                u = (0, p.z)(en.a),
                [h, m] = (0, y.useState)(!1),
                g = (0, y.useRef)(null);
            c[0] !== d ? (t = (e, t) => {
                if (eh(d, e), !e.ctrlKey && !e.metaKey || e.altKey || e.shiftKey || "p" !== e.key.toLowerCase()) return;
                if (e.repeat) return void g.current?.onKeyDown(e, t);
                let n = eF.get(e);
                if (e.defaultPrevented && null == n) return;
                (0, x.flushSync)(() => m(!0));
                let a = n ?? g.current?.onKeyDown(e, t);
                null == a && e.defaultPrevented || Promise.resolve(a).then(() => eF.get(e)).finally(() => {
                    t.aborted || m(!1)
                })
            }, c[0] = d, c[1] = t) : t = c[1];
            let f = (0, y.useEffectEvent)(t);
            c[2] === Symbol.for("react.memo_cache_sentinel") ? (n = () => {
                (0, x.flushSync)(() => m(!0)), g.current?.onBeforePrint()
            }, c[2] = n) : n = c[2];
            let v = (0, y.useEffectEvent)(n);
            c[3] !== d ? (o = () => {
                d.set(eR.a, null), m(!1)
            }, c[3] = d, c[4] = o) : o = c[4];
            let b = (0, y.useEffectEvent)(o);
            return c[5] !== b || c[6] !== v || c[7] !== f || c[8] !== d ? (s = () => {
                let e, t, n = new AbortController,
                    a = (e = () => {
                        if (!d.get(ed.c).isChatgptBrowserReplacement) return;
                        let e = d.get(eu);
                        if (e?.printing) return;
                        let t = {
                            ...e ?? em("CHATGPT_CONVERSATION_PRINT_ENTRY_POINT_UNOBSERVED"),
                            printing: !0
                        };
                        d.set(eu, t), eg(d, t, "CHATGPT_CONVERSATION_PRINT_STAGE_BEFORE_PRINT")
                    }, t = () => {
                        let e = d.get(eu);
                        d.get(ed.c).isChatgptBrowserReplacement && e?.printing && (eg(d, e, "CHATGPT_CONVERSATION_PRINT_STAGE_AFTER_PRINT"), d.set(eu, null))
                    }, window.addEventListener("beforeprint", e, !0), window.addEventListener("afterprint", t), () => {
                        window.removeEventListener("beforeprint", e, !0), window.removeEventListener("afterprint", t), d.set(eu, null)
                    }),
                    r = e => f(e, n.signal);
                return window.addEventListener("keydown", r, !0), window.addEventListener("beforeprint", v, !0), window.addEventListener("afterprint", b), () => {
                    n.abort(), window.removeEventListener("keydown", r, !0), window.removeEventListener("beforeprint", v, !0), window.removeEventListener("afterprint", b), d.set(eR.a, null), a()
                }
            }, c[5] = b, c[6] = v, c[7] = f, c[8] = d, c[9] = s) : s = c[9], c[10] !== d ? (i = [d], c[10] = d, c[11] = i) : i = c[11], (0, y.useEffect)(s, i), c[12] !== u || c[13] !== e || c[14] !== h ? (l = h || u ? (0, a.jsx)(eD, {
                ...e,
                ref: g,
                printing: u
            }) : null, c[12] = u, c[13] = e, c[14] = h, c[15] = l) : l = c[15], l
        }

        function eD(e) {
            let t, n, o, i, l = (0, r.c)(19),
                {
                    entries: c,
                    title: d,
                    TurnRowComponent: u,
                    printing: h,
                    ref: m
                } = e,
                g = (0, p.y)(z.a),
                f = (0, y.useContext)(R.a),
                v = (0, y.useContext)(er.a),
                {
                    getExperiment: b
                } = (0, es.j)(),
                _ = b("448755449", {
                    disableExposureLog: !0
                }).get("enabled", !1);
            l[0] !== c[0]?.conversationId ? (t = c[0]?.conversationId ?? (0, eN.d)(""), l[0] = c[0]?.conversationId, l[1] = t) : t = l[1], l[2] !== f || l[3] !== t ? (n = {
                auth: f,
                conversationId: t
            }, l[2] = f, l[3] = t, l[4] = n) : n = l[4];
            let w = (0, p.x)(null != c[0] && eS.h, n),
                I = (0, p.x)(null == c[0] ? null : eI.d, c[0]?.conversationId ?? "") ?? !0,
                S = (0, y.useRef)(null),
                j = function(e, t, n) {
                    let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        r = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
                        o = arguments.length > 5 ? arguments[5] : void 0,
                        s = [],
                        i = [],
                        l = new Map;
                    for (let n of t) {
                        let t = l.get(n.conversationId);
                        if (null == t) {
                            let a = e.get(F.j, n.conversationId);
                            t = {
                                serverId: a,
                                userResolver: (0, e_.c)(void 0, void 0, void 0, e.get(F.R, n.conversationId) ?? void 0),
                                scopedResolver: (0, e_.c)(a ?? void 0)
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
                            void 0 === t.generatedResolver && (t.generatedResolver = e.get(e_.a, n.conversationId));
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
                                        for (let a of (0, ey.u)(t, e)) {
                                            if (r && (0, ex.d)(a.src)) continue;
                                            let e = a.searchResult?.isProxied && (a.previewSrc === a.searchResult.contentSrc || a.previewSrc === a.searchResult.originalSrc) ? a.src : a.previewSrc;
                                            s.push({
                                                conversationId: n.conversationId,
                                                src: a.src,
                                                previewSrc: null != e && r && (0, ex.d)(e) ? a.src : e
                                            })
                                        }
                            }
                            if (null == o) continue;
                            i.push(...l.contentReferences.flatMap((e, t) => (0, ey.u)(e, t).map(e => {
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
                        return null != t && (0, eb.h)(t) ? [{
                            src: t,
                            resolver: n
                        }] : []
                    });
                    return {
                        queryKey: ["chatgpt-print-assets", e.get(et.a), t[0]?.conversationId, a, r, s, c.map(e => {
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
                        staleTime: eC.b.FIVE_MINUTES,
                        refetchOnWindowFocus: !1,
                        retry: !1,
                        queryFn: t => {
                            let {
                                client: a,
                                signal: i,
                                queryKey: l
                            } = t;
                            return ep(e, "CHATGPT_CONVERSATION_PRINT_PREPARATION_IMAGES", i, async () => {
                                let t = {
                                    ...a.getQueryData(l)?.imageSources
                                };
                                for (let e of ev()(c, 6)) i.throwIfAborted(), await Promise.all(e.map(async e => {
                                    let {
                                        src: n,
                                        resolver: r
                                    } = e, o = await (0, eb.a)(a, n, r);
                                    if (i.throwIfAborted(), null != o) {
                                        let e = new Image;
                                        e.referrerPolicy = "no-referrer", e.src = o, await e.decode(), t[n] = o
                                    }
                                }));
                                let d = new Map,
                                    u = s.flatMap(t => {
                                        let n = d.get(t.conversationId);
                                        return (null == n && (n = r || !e.get(eS.h, {
                                            auth: o,
                                            conversationId: t.conversationId
                                        }) && e.get(eI.d, t.conversationId), d.set(t.conversationId, n)), n && (0, ex.d)(t.src)) ? [] : [{
                                            ...t,
                                            previewSrc: n && null != t.previewSrc && (0, ex.d)(t.previewSrc) ? t.src : t.previewSrc
                                        }]
                                    }),
                                    h = n ? t : await async function(e, t, n) {
                                        if (0 === e.length) return t;
                                        let a = ew(),
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
                }(g, c, h, _, "restricted" === v || !w && I, f),
                {
                    data: T,
                    isSuccess: E,
                    isError: A,
                    refetch: P
                } = (0, s.a)(j);
            return l[5] !== j || l[6] !== T || l[7] !== _ || l[8] !== E || l[9] !== P || l[10] !== g ? (o = () => ({
                onKeyDown(e, t) {
                    if (!e.defaultPrevented && (!E || !T.complete) && (e.preventDefault(), !e.repeat && S.current !== t)) return S.current = t, P({
                        cancelRefetch: !1
                    }).then(() => {
                        t.aborted || window.print()
                    }).finally(() => {
                        S.current === t && (S.current = null)
                    })
                },
                onBeforePrint() {
                    if (_) {
                        let e = g.queryClient.getQueryData(j.queryKey),
                            t = {
                                ...ew(),
                                ...e?.imageSources
                            };
                        (0, x.flushSync)(() => g.set(eR.a, t))
                    }
                }
            }), l[5] = j, l[6] = T, l[7] = _, l[8] = E, l[9] = P, l[10] = g, l[11] = o) : o = l[11], (0, y.useImperativeHandle)(m, o), l[12] !== u || l[13] !== c || l[14] !== A || l[15] !== E || l[16] !== h || l[17] !== d ? (i = h ? (0, x.createPortal)((0, a.jsx)(ek, {
                title: d,
                children: (0, a.jsx)(ei.a, {
                    value: null,
                    children: (0, a.jsx)(eG.a, {
                        value: null,
                        children: E ? c.map(e => {
                            var t;
                            return (0, a.jsx)(u, {
                                entry: {
                                    ...e,
                                    timestampSeparatorAtMs: null,
                                    turn: {
                                        ...t = e.turn,
                                        suppressTurnActions: !0,
                                        items: t.items.map(e => "chatgpt-reasoning-group" !== e.type ? eM(e) : {
                                            ...e,
                                            items: e.items.map(eM),
                                            activeReasoning: null == e.activeReasoning ? void 0 : eM(e.activeReasoning)
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
                            children: A ? (0, a.jsx)(C.a, {
                                id: "chatgpt.printAssets.error",
                                defaultMessage: "Some images could not be loaded. Close print and try again.",
                                description: "Printed instead of a partial conversation when its images failed to load"
                            }) : (0, a.jsx)(C.a, {
                                id: "chatgpt.printAssets.loading",
                                defaultMessage: "Images are still loading. Close print and try again.",
                                description: "Printed instead of an incomplete conversation when its images are still loading"
                            })
                        })
                    })
                })
            }), document.body) : null, l[12] = u, l[13] = c, l[14] = A, l[15] = E, l[16] = h, l[17] = d, l[18] = i) : i = l[18], i
        }

        function eH(e) {
            let t, n, a, o, i, l, c = (0, r.c)(22),
                {
                    conversationId: d
                } = e,
                u = (0, p.y)(eo.a),
                h = (0, b.a)(),
                m = (0, y.useRef)(null),
                g = (0, p.z)(et.a),
                f = (0, p.x)(F.j, d),
                v = (0, p.z)(eB.b);
            c[0] !== g || c[1] !== f ? (t = ["chatgpt-print-history", g, f], c[0] = g, c[1] = f, c[2] = t) : t = c[2], c[3] !== u || c[4] !== f ? (n = e => {
                let {
                    signal: t
                } = e;
                return ep(u, "CHATGPT_CONVERSATION_PRINT_PREPARATION_HISTORY", t, async () => (null != f && await (0, eO.a)(u, f, t), !0))
            }, c[3] = u, c[4] = f, c[5] = n) : n = c[5], c[6] !== t || c[7] !== n ? (a = {
                queryKey: t,
                enabled: !1,
                staleTime: 0,
                retry: !1,
                refetchOnWindowFocus: !1,
                queryFn: n
            }, c[6] = t, c[7] = n, c[8] = a) : a = c[8];
            let {
                refetch: x
            } = (0, s.a)(a);
            c[9] !== g || c[10] !== d || c[11] !== h || c[12] !== v || c[13] !== x || c[14] !== u || c[15] !== f ? (o = (e, t) => {
                if (eh(u, e), e.defaultPrevented || null == f || 0 === v || u.get(eB.c, f)?.complete === !0 || !e.ctrlKey && !e.metaKey || e.altKey || e.shiftKey || "p" !== e.key.toLowerCase() || (e.preventDefault(), e.repeat)) return;
                if (m.current?.signal === t) return void eF.set(e, m.current.preparation);
                let n = x({
                    cancelRefetch: !1
                }).then(async e => {
                    if (!t.aborted && u.get(et.a) === g) {
                        if (e.isError) return void u.get(ea.f).danger(h.formatMessage({
                            id: "chatgpt.printHistory.error",
                            defaultMessage: "Couldn't load the full conversation to print",
                            description: "Error toast after printing a conversation fails because its older messages could not be loaded; the user can retry printing"
                        }), {
                            errorAnalytics: {
                                toastId: "chatgpt.printHistory.error"
                            }
                        });
                        await Promise.all(u.queryClient.getQueryCache().findAll({
                            queryKey: ["chatgpt-print-assets", g, d],
                            predicate: eU
                        }).map(eW)), t.aborted || u.get(et.a) !== g || window.print()
                    }
                }).finally(() => {
                    m.current?.signal === t && (m.current = null)
                });
                m.current = {
                    signal: t,
                    preparation: n
                }, eF.set(e, n)
            }, c[9] = g, c[10] = d, c[11] = h, c[12] = v, c[13] = x, c[14] = u, c[15] = f, c[16] = o) : o = c[16];
            let C = (0, y.useEffectEvent)(o);
            return c[17] !== C ? (i = () => {
                let e = new AbortController,
                    t = t => C(t, e.signal);
                return window.addEventListener("keydown", t, !0), () => {
                    e.abort(), window.removeEventListener("keydown", t, !0)
                }
            }, c[17] = C, c[18] = i) : i = c[18], c[19] !== g || c[20] !== f ? (l = [g, f], c[19] = g, c[20] = f, c[21] = l) : l = c[21], (0, y.useEffect)(i, l), null
        }

        function eW(e) {
            return e.fetch(void 0, {
                cancelRefetch: !1
            }).catch(eq)
        }

        function eq() {}

        function eU(e) {
            return e.getObserversCount() > 0
        }
        var eK = n("DrWu"),
            eV = n("x4uR"),
            eY = n("hx97");

        function eQ(e) {
            return "assistant" === e.author.role && e.metadata?.open_thread_summary === !0
        }
        var e$ = n("MrzV"),
            eX = n("Sm6l"),
            eZ = n("gbRX");

        function eJ(e) {
            let t, n, o = (0, r.c)(4),
                {
                    isFetching: s,
                    isSharedConversation: i,
                    onRetry: l
                } = e,
                c = (0, p.z)(!i && eZ.a) || s;
            return o[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(C.a, {
                id: "chatgptConversations.preview.retry",
                defaultMessage: "Try again",
                description: "Retry loading a ChatGPT conversation after its history could not be loaded"
            }), o[0] = t) : t = o[0], o[1] !== l || o[2] !== c ? (n = (0, a.jsx)(eX.a, {
                color: "ghost",
                disabled: c,
                onClick: l,
                children: t
            }), o[1] = l, o[2] = c, o[3] = n) : n = o[3], n
        }

        function e0(e) {
            let t, n, o, s = (0, r.c)(7),
                {
                    isFetching: i,
                    isSharedConversation: l,
                    onRetry: c
                } = e;
            return s[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(C.a, {
                id: "chatgptConversations.loadError",
                defaultMessage: "Could not load this ChatGPT conversation",
                description: "Error state when a ChatGPT conversation fetch fails"
            }), s[0] = t) : t = s[0], s[1] !== i || s[2] !== l || s[3] !== c ? (n = null != c ? (0, a.jsx)(eJ, {
                isFetching: i,
                isSharedConversation: l,
                onRetry: c
            }) : null, s[1] = i, s[2] = l, s[3] = c, s[4] = n) : n = s[4], s[5] !== n ? (o = (0, a.jsxs)("div", {
                className: "rounded-xl border border-default bg-surface-secondary/92 p-4 text-sm text-default",
                children: [t, n]
            }), s[5] = n, s[6] = o) : o = s[6], o
        }
        var e1 = n("FfNP"),
            e2 = n("Bbed"),
            e3 = n("WVag");
        let e4 = (0, e2.a)(e1.loadEpicChartIndicator);

        function e6(e) {
            let t, n = (0, r.c)(3),
                {
                    conversationId: o
                } = e,
                s = (0, p.x)(e3.a, o),
                [i, l] = (0, y.useState)(!1);
            return i || null == s || l(!0), n[0] !== o || n[1] !== i ? (t = i ? (0, a.jsx)(e4, {
                conversationId: o
            }) : null, n[0] = o, n[1] = i, n[2] = t) : t = n[2], t
        }
        var e5 = n("YTsa"),
            e8 = n("AoaR"),
            e7 = n("Ow2S"),
            e9 = n("fDfx"),
            te = n("u4MG"),
            tt = n("Xslx"),
            tn = n("EEop"),
            ta = n("bxvp"),
            tr = n("VBQS"),
            to = n("hsIu");
        let ts = (0, p.d)(eo.a, (e, t) => {
            let {
                get: n
            } = t;
            if (null == e || !n(ta.c) || null == n(N.f) || null == n(N.k)) return null;
            let {
                data: a,
                isError: r
            } = n(to.b);
            if (r || a?.project_id !== e) return null;
            let {
                data: o,
                isError: s
            } = n(tn.l, (0, tr.a)());
            return s ? null : (0, tr.b)(o)
        });
        var ti = n("DWXw"),
            tl = n("FmJi"),
            tc = n("TSib"),
            td = n("sIex"),
            tu = n("jEN2"),
            th = n("kphc"),
            tp = n("YWcr"),
            tm = n("RGWz"),
            tg = n("QxH2"),
            tf = n("mwa5"),
            tv = n("UuVq"),
            ty = n("TwSq"),
            tx = n("l0fK"),
            tb = n("hkBU"),
            tC = n("cP1f"),
            t_ = n("UxN3"),
            tw = n("GKsW"),
            tI = n("yWTM"),
            tS = n("Z2JT"),
            tj = n("SkIz"),
            tT = n("aNqv"),
            tE = n("ibLK"),
            tA = n("T1PX"),
            tP = n("Fjd0"),
            tk = n("VPBa"),
            tM = n("PWXi"),
            tR = n("zOE4"),
            tN = n("Xc94"),
            tO = n("Sgih"),
            tB = n("HwRo"),
            tG = n("qwxA"),
            tF = n("gOnr"),
            tz = n("KXCj"),
            tL = n("e1xH"),
            tD = n("pAFY");
        n("kErH");
        var tH = n("dJBt"),
            tW = n("FR8U"),
            tq = n("xqnZ"),
            tU = n("UMxD"),
            tK = n("VV6Z"),
            tV = n("JhDO"),
            tY = n("Mbqw"),
            tQ = n("kl6F"),
            t$ = n("kfGJ"),
            tX = n("khOd"),
            tZ = n("RZBv"),
            tJ = n("yzQ9"),
            t0 = n("OMIV"),
            t1 = n("JCJj"),
            t2 = n("KkZX"),
            t3 = n("NVRI"),
            t4 = n("uYx2"),
            t6 = n("Gjet"),
            t5 = n("SBcL"),
            t8 = n("ftSl"),
            t7 = n("BdYu"),
            t9 = n("Nyub"),
            ne = n("jZDY"),
            nt = n("HgLj"),
            nn = n("Bc5r"),
            na = n("bIvi"),
            nr = n("Elta"),
            no = n("eW0T"),
            ns = n("hOYb"),
            ni = n("eShZ"),
            nl = n("qqut"),
            nc = n("CsbC"),
            nd = n("tCyZ"),
            nu = n("S0ko"),
            nh = n("GgLN"),
            np = n("KdfG"),
            nm = n("AOHi"),
            ng = n("iRMi"),
            nf = n("U2UX"),
            nv = n("gbrq"),
            ny = n("K33Q"),
            nx = n("mv4d"),
            nb = n("w7Qu"),
            nC = n("dt5v"),
            n_ = n("bWX0"),
            nw = n("smHt"),
            nI = n("aoTb"),
            nS = n("pqpL"),
            nj = n("uqg3"),
            nT = n("XcRr"),
            nE = n("dk3M"),
            nA = n("WFY2"),
            nP = n("vldH"),
            nk = n("ISgP"),
            nM = n("t2JB"),
            nR = n("DIH2"),
            nN = n("aFoA"),
            nO = n("H8lk"),
            nB = n("f2PP"),
            nG = n("S95W");
        let nF = (0, p.v)(eo.a, e => null);
        var nz = n("DM5G"),
            nL = n("gJe8"),
            nD = n("d2rV"),
            nH = n("KyQ2"),
            nW = n("eKlv"),
            nq = n("aLqR"),
            nU = n("VlIB"),
            nK = n("ASxG"),
            nV = n("wD9O"),
            nY = n("lsfk"),
            nQ = n("IObw"),
            n$ = n("BOYb"),
            nX = n("kQNh"),
            nZ = n.n(nX),
            nJ = n("NkEl"),
            n0 = n("FW69"),
            n1 = "highlight-x7OnzP",
            n2 = "safari-wcvuzB",
            n3 = "block-t7sxyD";
        let n4 = "chatgpt-search-result",
            n6 = "script, style, textarea, input, select, [hidden], [aria-hidden='true'], [data-thread-find-skip]";

        function* n5(e, t) {
            let n = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_TEXT, {
                    acceptNode: e => e.parentElement?.closest(n6) == null ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
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
            let o = RegExp(t.split(/\n+/u).map(nZ()).join("\\n*"), "g");
            for (let n = o.exec(r); null != n && n.index < r.length; n = o.exec(r)) {
                let r = n.index;
                o.lastIndex = r + 1;
                let s = r + n[0].length,
                    i = a.find(e => e.end > r),
                    l = a.findLast(e => e.start < s);
                if (null == i || null == l) continue;
                let c = e.ownerDocument.createRange();
                c.setStart(i.node, r - i.start), c.setEnd(l.node, s - l.start), n8(c) && ((0, n0.a)(c) ?? c.toString()).trim() === t && (yield c)
            }
        }

        function n8(e) {
            return Array.from(e.getClientRects()).some(e => e.width > 0 && e.height > 0) && null != e.startContainer.parentElement && "hidden" !== getComputedStyle(e.startContainer.parentElement).visibility
        }
        let n7 = nK.object({
            chatGptSearchNavigation: nK.object({
                key: nK.string(),
                messageId: nK.string()
            })
        });

        function n9(e) {
            let t, n, a, o, s, i, l, c, d, u, h, m, g = (0, r.c)(50),
                {
                    conversationId: f,
                    entries: v,
                    isConversationFetching: x,
                    turnListApi: b
                } = e,
                C = (0, p.y)(eo.a),
                w = (0, p.x)(F.r, f),
                I = (0, nY.b)(),
                S = (0, nV.c)();
            g[0] !== I || g[1] !== S ? (t = e => {
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
                            left: (0, nV.b)(a.left + a.width / 2 - r.left - r.width / 2, n),
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
                        h = (0, nV.b)(s.height, n),
                        p = (0, nV.b)(s.top - i.top, n) - c + Math.min(h, u) / 2 - u / 2;
                    t.scrollToDistanceFromBottomPx(t.getLastScrollDistanceFromBottomPx() - p, "instant", "user")
                }(e, I, S)
            }, g[0] = I, g[1] = S, g[2] = t) : t = g[2];
            let j = (0, y.useEffectEvent)(t),
                T = (0, _.Y)(),
                E = (0, _._)(),
                A = new URLSearchParams(T.search),
                P = A.get("messageId") ?? A.get("message"),
                k = n7.safeParse(T.state).data?.chatGptSearchNavigation,
                M = P ?? k?.messageId,
                R = A.get("selectedTextQuery") ?? "",
                N = (0, p.x)(F.L, f),
                O = !R || null != M && null != N && (N[M]?.message != null || Object.values(N).some(e => e.message?.id === M)),
                B = R || A.get("historySearchQuery") || "",
                G = JSON.stringify([f, null != P ? T.key : k?.key ?? T.key, M]);
            g[3] !== G ? (n = {
                key: G,
                handled: !1,
                positioned: !1
            }, g[3] = G, g[4] = n) : n = g[4];
            let z = (0, y.useRef)(n),
                L = (0, y.useEffectEvent)(e => {
                    z.current.positioned = !0;
                    let t = B.trim().length > 0 ? function(e, t, n) {
                        let a, r, o, s, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "terms",
                            l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                            c = "phrase" === i ? t.trim() : null,
                            d = [...new Set(t.trim().toLowerCase().normalize("NFC").split(/\s+/).map(e => e.replace(/^[^\p{Letter}\p{Number}]+|[^\p{Letter}\p{Number}]+$/gu, "")).filter(e => e.length > 0))],
                            u = new TextEncoder,
                            h = d.filter(e => !/^\p{Letter}+$/u.test(e) || u.encode(e.normalize("NFKD").replace(/\p{Mark}/gu, "")).byteLength >= 3),
                            p = h.length > 0 ? h : d;
                        if (c?.length === 0 || null == c && 0 === p.length) return () => {};
                        let m = new RegExp(null == c ? p.toSorted((e, t) => t.length - e.length).map(nZ()).join("|") : nZ()(c), null == c ? "giu" : "gu"),
                            g = !1,
                            f = performance.now(),
                            v = !1,
                            y = new WeakSet,
                            x = new Set,
                            b = new MutationObserver(_);

                        function C() {
                            for (let t of (g = !0, b.disconnect(), clearTimeout(r), null != o && cancelAnimationFrame(o), null != a && CSS.highlights.get(n4) === a && CSS.highlights.delete(n4), e.classList.remove(n1, n2), x)) t.classList.remove(n1, n3)
                        }

                        function _() {
                            g || null != r || null != o || (r = setTimeout(() => {
                                r = void 0, o = requestAnimationFrame(() => {
                                    o = void 0, w()
                                })
                            }, 50))
                        }

                        function w() {
                            let t;
                            if (g || !e.isConnected || null != o) return;
                            let d = performance.now() - f;
                            if (d < 4e3 && null != e.querySelector("[data-search-result-pending]")) return void _();
                            let u = (0, nJ.a)(e);
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
                                        o = void 0, w()
                                    })
                                });
                                return
                            }
                            let I = [];
                            if (null != c) {
                                let t = e.querySelector('[data-markdown-text-style="assistant-message"]') ?? e,
                                    n = 0;
                                for (let e of n5(t, c))
                                    if (!(n++ < l)) {
                                        I.push(e);
                                        break
                                    }
                            } else {
                                let t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_TEXT, {
                                    acceptNode: e => e.parentElement?.closest(n6) != null || u.some(t => {
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
                                        a.setStart(n, t.index), a.setEnd(n, t.index + t[0].length), n8(a) && I.push(a)
                                    }
                            }
                            let S = h.flatMap(e => {
                                let {
                                    element: t,
                                    target: n
                                } = e, a = t.getBoundingClientRect(), r = I.some(e => t.contains(e.startContainer));
                                return "terms" === i && a.width > 0 && a.height > 0 && ("block" === n.highlight || "auto" === n.highlight && !r) ? [t] : []
                            });
                            if (0 === I.length && 0 === S.length) {
                                if (d < 800) return void _();
                                S.push(e)
                            }
                            let j = 0,
                                T = 0;
                            for (let e of [...I, ...S]) {
                                let n = e instanceof Range ? e.getClientRects()[0] : e.getBoundingClientRect(),
                                    a = n?.top ?? 0,
                                    r = n?.left ?? 0;
                                (null == t || 0 > (a - j || r - T)) && (t = e, j = a, T = r)
                            }
                            t = t ?? e, v && n?.(t);
                            let E = t instanceof Range ? t.getClientRects()[0] : t.getBoundingClientRect(),
                                A = [E?.top, E?.left, E?.width, E?.height, e.scrollHeight].join(":");
                            if (d < 4e3 && A !== s) {
                                s = A, _();
                                return
                            }
                            if (!v) {
                                v = !0, s = void 0, n?.(t), _();
                                return
                            }
                            for (let t of (b.disconnect(), clearTimeout(r), "u" > typeof Highlight && null != CSS.highlights ? (a = new Highlight(...I), CSS.highlights.set(n4, a)) : I.length > 0 && S.push(e), e.classList.add(n1), (0, n$.e)() && e.classList.add(n2), S)) t.classList.add(n1, n3), x.add(t);
                            r = setTimeout(C, 3600)
                        }
                        return b.observe(e, {
                            childList: !0,
                            characterData: !0,
                            attributes: !0,
                            subtree: !0
                        }), w(), C
                    }(e, B, j, R ? "phrase" : "terms", Number(A.get("selectedTextOccurrence"))) : void 0;
                    return null != P && (A.delete("messageId"), A.delete("message"), A.delete("historySearchQuery"), A.delete("selectedTextQuery"), A.delete("selectedTextOccurrence"), E({
                        pathname: T.pathname,
                        search: A.toString(),
                        hash: T.hash
                    }, {
                        replace: !0,
                        preventScrollReset: !0,
                        state: {
                            ...T.state,
                            chatGptSearchNavigation: {
                                key: T.key,
                                messageId: P
                            }
                        }
                    })), t
                });
            g[5] !== f || g[6] !== x || g[7] !== M || g[8] !== G || g[9] !== C || g[10] !== O ? (a = () => {
                if (z.current.key !== G && (z.current = {
                        key: G,
                        handled: !1,
                        positioned: !1
                    }), null != M && !x && O) return C.watch(e => {
                    !z.current.handled && (0, F.Ob)(e, f, M) && (z.current.handled = !0)
                })
            }, o = [f, x, M, G, C, O], g[5] = f, g[6] = x, g[7] = M, g[8] = G, g[9] = C, g[10] = O, g[11] = a, g[12] = o) : (a = g[11], o = g[12]), (0, y.useLayoutEffect)(a, o), g[13] !== v || g[14] !== M ? (s = null == M ? void 0 : v.find(e => {
                let {
                    turn: t
                } = e;
                return t.messageIds.includes(M)
            }), g[13] = v, g[14] = M, g[15] = s) : s = g[15];
            let D = s;
            g[16] !== T || g[17] !== E || g[18] !== P || g[19] !== k ? (i = () => {
                null == P && null != k && E(T, {
                    replace: !0,
                    preventScrollReset: !0,
                    state: {
                        ...T.state,
                        chatGptSearchNavigation: void 0
                    }
                })
            }, g[16] = T, g[17] = E, g[18] = P, g[19] = k, g[20] = i) : i = g[20];
            let H = (0, y.useEffectEvent)(i);
            if (g[21] !== H || g[22] !== w || g[23] !== x || g[24] !== D ? (l = () => {
                    !z.current.positioned || null != D || x || w || H()
                }, g[21] = H, g[22] = w, g[23] = x, g[24] = D, g[25] = l) : l = g[25], g[26] !== w || g[27] !== x || g[28] !== D ? (c = [w, x, D], g[26] = w, g[27] = x, g[28] = D, g[29] = c) : c = g[29], (0, y.useLayoutEffect)(l, c), g[30] !== M || g[31] !== D?.id || g[32] !== D?.turn || g[33] !== D?.turn.items || g[34] !== D?.turn.items.findIndex || g[35] !== D?.turnKey) {
                let e = D?.turn.items.findIndex(e => "messageId" in e && e.messageId === M || "assistant-message" === e.type && null != M && e.sourceMessageIds?.includes(M)) ?? -1,
                    t = D?.turn.items[e],
                    n = D?.id;
                u = D?.turnKey, d = null == t || null == n ? void 0 : (0, nQ.b)(t, e, n), g[30] = M, g[31] = D?.id, g[32] = D?.turn, g[33] = D?.turn.items, g[34] = D?.turn.items.findIndex, g[35] = D?.turnKey, g[36] = d, g[37] = u
            } else d = g[36], u = g[37];
            let W = d;
            return g[38] !== L || g[39] !== M || g[40] !== u || g[41] !== b || g[42] !== W ? (h = () => {
                let e;
                if (null == u || null == b) return;
                let t = new AbortController,
                    n = null;
                return b.scrollToKey(u, e => n = (null == M ? null : e.querySelector(`[data-chatgpt-search-message-ids~="${CSS.escape(M)}"]`)) ?? (null == W ? null : e.querySelector(`[data-chatgpt-search-unit-key="${CSS.escape(W)}"]`)) ?? e, {
                    align: "top",
                    signal: t.signal
                }).then(() => {
                    !t.signal.aborted && n?.isConnected && (e = L(n))
                }), () => {
                    t.abort(), e?.()
                }
            }, g[38] = L, g[39] = M, g[40] = u, g[41] = b, g[42] = W, g[43] = h) : h = g[43], g[44] !== M || g[45] !== G || g[46] !== u || g[47] !== b || g[48] !== W ? (m = [G, M, u, b, W], g[44] = M, g[45] = G, g[46] = u, g[47] = b, g[48] = W, g[49] = m) : m = g[49], (0, y.useLayoutEffect)(h, m), null
        }
        var ae = n("Nayr");
        let at = (0, p.v)(eo.a, e => null);
        var an = n("sfmI"),
            aa = n("SZi8"),
            ar = n("lBzi"),
            ao = n("Ga6O"),
            as = n("ESlL"),
            ai = n("vknh"),
            al = n("Ppno"),
            ac = n("lA5q"),
            ad = n("wDWo"),
            au = n("IgxH"),
            ah = n("iaTG"),
            ap = n("c3f5"),
            am = n("XpUB"),
            ag = n("xAIC"),
            af = n("slpy"),
            av = n("bf6R"),
            ay = n("O666"),
            ax = n("OtLV"),
            ab = n("tNq4"),
            aC = n("Skaw"),
            a_ = n("PYCG");

        function aw(e) {
            let t, n, o, s, i, l, c, d, u, h, m, g = (0, r.c)(50),
                {
                    conversationId: f,
                    projectId: v,
                    sharedProjectConversation: y,
                    isReady: x,
                    isRestricted: _,
                    isStreaming: w
                } = e,
                I = void 0 === v ? null : v,
                S = (0, p.y)(eo.a),
                j = (0, b.a)(),
                T = (0, p.z)(N.e),
                E = (0, p.z)(null == I ? null : aC.a),
                A = (0, p.x)(F.j, f),
                {
                    data: P
                } = (0, p.x)(ar.chatGptConversationQueryById$, null == I ? null : A),
                k = (0, p.x)(nN.a, null == I ? null : A),
                M = (0, p.x)(F.A, k);
            g[0] !== k || g[1] !== P || g[2] !== M || g[3] !== I || g[4] !== A ? (t = null == P && null != k && null != A ? {
                id: A,
                gizmo_id: I,
                is_temporary_chat: M
            } : void 0, g[0] = k, g[1] = P, g[2] = M, g[3] = I, g[4] = A, g[5] = t) : t = g[5];
            let R = t,
                {
                    data: O
                } = (0, p.x)(eV.b, I),
                B = null == I ? null : (0, aC.b)(E ?? null, y ?? P ?? R, O),
                G = (0, p.x)(ab.b, f);
            g[6] !== j ? (n = j.formatMessage(ax.a.headerShare), g[6] = j, g[7] = n) : n = g[7];
            let z = n,
                L = (0, p.x)(null == y ? ab.a : null, f),
                D = null != y || null != L,
                H = null;
            if (_ || B?.type === "unavailable") {
                let e;
                g[8] !== j ? (e = j.formatMessage(ax.a.shareDisabledRestricted), g[8] = j, g[9] = e) : e = g[9], H = e
            } else if (w && !D) {
                let e;
                g[10] !== j ? (e = j.formatMessage(ax.a.shareDisabledStreaming), g[10] = j, g[11] = e) : e = g[11], H = e
            } else if (!x || !D) {
                let e;
                g[12] !== j ? (e = j.formatMessage(ax.a.shareDisabledNotReady), g[12] = j, g[13] = e) : e = g[13], H = e
            }
            let W = null != H || G;
            g[14] !== W ? (o = {
                layer: "3087497570",
                parameter: "use_larger_icon",
                disableExposureLog: W
            }, g[14] = W, g[15] = o) : o = g[15];
            let q = (0, p.x)(ay.b, o),
                U = "loaded" === T.status && "personal" === T.structure && (null == B || "snapshot" === B.type),
                K = null != H || G;
            g[16] !== K ? (s = {
                layer: "1823366130",
                parameter: "disable_hover",
                disableExposureLog: K
            }, g[16] = K, g[17] = s) : s = g[17];
            let V = (0, p.x)(U ? ay.b : null, s);
            g[18] !== f || g[19] !== R || g[20] !== I || g[21] !== S || g[22] !== y ? (i = () => {
                let e = null == y ? S.get(ab.c, f) : {
                    serverConversationId: y.conversation_id,
                    title: y.title,
                    currentNodeId: y.current_node ?? void 0
                };
                null != e && (0, a_.shareChatGptProjectConversation)(S, e.serverConversationId, e.title ?? "", I, e.currentNodeId, "CHATGPT_SHARE_FLOW_SOURCE_SENDER_HEADER", y ?? R)
            }, g[18] = f, g[19] = R, g[20] = I, g[21] = S, g[22] = y, g[23] = i) : i = g[23];
            let Y = i,
                Q = z;
            if ("loaded" === T.status && (null == B || "snapshot" === B.type)) {
                let e;
                g[24] !== T.structure || g[25] !== j ? (e = j.formatMessage("workspace" === T.structure ? ax.a.shareWorkspaceTooltip : ax.a.sharePublicTooltip), g[24] = T.structure, g[25] = j, g[26] = e) : e = g[26], Q = e
            }
            let $ = null == H && !G && !0 === V,
                X = H ?? Q,
                Z = null != H || G;
            return g[27] !== G || g[28] !== q ? (l = !G && (q ? (0, a.jsx)(av.M, {}) : (0, a.jsx)(av.L, {})), g[27] = G, g[28] = q, g[29] = l) : l = g[29], g[30] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)("span", {
                className: "max-sm:hidden",
                children: (0, a.jsx)(C.a, {
                    ...ax.a.headerShare
                })
            }), g[30] = c) : c = g[30], g[31] !== Y || g[32] !== G || g[33] !== z || g[34] !== Z || g[35] !== l ? (d = (0, a.jsxs)(eX.a, {
                "aria-label": z,
                color: "toolbar",
                disabled: Z,
                loading: G,
                radius: "large",
                size: "toolbar",
                onClick: Y,
                children: [l, c]
            }), g[31] = Y, g[32] = G, g[33] = z, g[34] = Z, g[35] = l, g[36] = d) : d = g[36], g[37] !== X || g[38] !== d || g[39] !== $ ? (u = (0, a.jsx)(af.a, {
                disabled: $,
                content: X,
                children: d
            }), g[37] = X, g[38] = d, g[39] = $, g[40] = u) : u = g[40], g[41] !== f || g[42] !== G || g[43] !== I || g[44] !== H || g[45] !== y ? (h = !1, g[41] = f, g[42] = G, g[43] = I, g[44] = H, g[45] = y, g[46] = h) : h = g[46], g[47] !== u || g[48] !== h ? (m = (0, a.jsxs)(a.Fragment, {
                children: [u, h]
            }), g[47] = u, g[48] = h, g[49] = m) : m = g[49], m
        }(0, e2.a)(async () => () => null);
        var aI = n("B0Wx"),
            aS = n("if6d"),
            aj = n("Sd8U");
        let aT = (0, p.t)("ChatGptTranscriptScope", {
            parent: aj.a,
            key: e => e.presentation
        });
        var aE = n("r2mP"),
            aA = n("ag0v"),
            aP = n("c7Gp"),
            ak = n("ZhoB"),
            aM = n("RADZ"),
            aR = n("rZzh"),
            aN = n("hZRx");

        function aO(e) {
            let t, n, o, s, i, l, c, d, u = (0, r.c)(51),
                {
                    entry: h,
                    renderMcpApps: m,
                    trackShownImpressions: g
                } = e,
                f = void 0 === m || m,
                v = void 0 === g || g,
                y = (0, p.y)(eo.a);
            u[0] !== h.conversationId ? (t = (0, tQ.o)({
                routeKind: "chatgpt-thread",
                conversationId: h.conversationId
            }), u[0] = h.conversationId, u[1] = t) : t = u[1];
            let x = (0, p.x)(v ? tO.c : null, t),
                b = v && null == x,
                _ = (0, p.x)(h.isMostRecentTurn ? aR.d : null, h.conversationId);
            u[2] !== h.timestampSeparatorAtMs ? (n = null == h.timestampSeparatorAtMs ? null : (0, a.jsx)(aE.b, {
                sentAtMs: h.timestampSeparatorAtMs
            }), u[2] = h.timestampSeparatorAtMs, u[3] = n) : n = u[3];
            let w = null != h.paragen;
            return u[4] !== h.branchingMessageId || u[5] !== h.browserConversationId || u[6] !== h.conversationId || u[7] !== h.enableCloudBrowserActivity || u[8] !== h.feedbackEnabled || u[9] !== h.hasLaterSitesPreview || u[10] !== h.id || u[11] !== h.isMostRecentTurn || u[12] !== h.isReadOnly || u[13] !== h.isTemporaryChat || u[14] !== h.isWorkConversation || u[15] !== h.onEditUserMessage || u[16] !== h.onFork || u[17] !== h.onRegenerateResponse || u[18] !== h.pendingSubmissionAttachments || u[19] !== h.readAloudEnabled || u[20] !== h.referenceImageSuggestionActionInput || u[21] !== h.safetyReview || u[22] !== h.shareEnabled || u[23] !== h.turn || u[24] !== f || u[25] !== b || u[26] !== w ? (o = (0, a.jsx)(aP.a, {
                browserConversationId: h.browserConversationId,
                conversationId: h.conversationId,
                enableCloudBrowserActivity: h.enableCloudBrowserActivity,
                branchingMessageId: h.branchingMessageId,
                hasLaterSitesPreview: h.hasLaterSitesPreview,
                hostId: t$.a,
                isMostRecentTurn: h.isMostRecentTurn,
                isReadOnly: h.isReadOnly,
                isTemporaryChat: h.isTemporaryChat,
                isParagen: w,
                isWorkConversation: h.isWorkConversation,
                readAloudEnabled: h.readAloudEnabled,
                renderMcpApps: f,
                feedbackEnabled: h.feedbackEnabled,
                onEditUserMessage: h.onEditUserMessage,
                onFork: h.onFork,
                onRegenerateResponse: h.onRegenerateResponse,
                pendingSubmissionAttachments: h.pendingSubmissionAttachments,
                referenceImageSuggestionActionInput: h.referenceImageSuggestionActionInput,
                shareEnabled: h.shareEnabled,
                safetyReview: h.safetyReview,
                trackShownImpressions: b,
                turn: h.turn,
                turnId: h.id
            }), u[4] = h.branchingMessageId, u[5] = h.browserConversationId, u[6] = h.conversationId, u[7] = h.enableCloudBrowserActivity, u[8] = h.feedbackEnabled, u[9] = h.hasLaterSitesPreview, u[10] = h.id, u[11] = h.isMostRecentTurn, u[12] = h.isReadOnly, u[13] = h.isTemporaryChat, u[14] = h.isWorkConversation, u[15] = h.onEditUserMessage, u[16] = h.onFork, u[17] = h.onRegenerateResponse, u[18] = h.pendingSubmissionAttachments, u[19] = h.readAloudEnabled, u[20] = h.referenceImageSuggestionActionInput, u[21] = h.safetyReview, u[22] = h.shareEnabled, u[23] = h.turn, u[24] = f, u[25] = b, u[26] = w, u[27] = o) : o = u[27], u[28] !== h.conversationId || u[29] !== h.isTemporaryChat || u[30] !== h.isWorkConversation || u[31] !== h.paragen || u[32] !== f || u[33] !== b ? (s = null == h.paragen ? null : (0, a.jsx)(aM.a, {
                renderMcpApps: f,
                comparison: h.paragen,
                conversationId: h.conversationId,
                hostId: t$.a,
                isTemporaryChat: h.isTemporaryChat,
                isWorkConversation: h.isWorkConversation,
                trackTaskViews: b
            }, h.paragen.promptMessageId), u[28] = h.conversationId, u[29] = h.isTemporaryChat, u[30] = h.isWorkConversation, u[31] = h.paragen, u[32] = f, u[33] = b, u[34] = s) : s = u[34], u[35] !== h.showSharedConversationPrivateDisclaimer ? (i = h.showSharedConversationPrivateDisclaimer ? (0, a.jsxs)("div", {
                className: "my-2 flex items-center justify-center gap-2 text-size-chat text-secondary select-none",
                children: [(0, a.jsx)(t_.a, {
                    className: "shrink-0",
                    legacyIcon: aA.a,
                    asset16: aN.a,
                    legacyClassName: "icon-2xs",
                    "aria-hidden": !0
                }), (0, a.jsx)(C.a, {
                    id: "chatgptConversations.sharedConversation.privateMessagesDisclaimer",
                    defaultMessage: "Messages beyond this point are only visible to you",
                    description: "Privacy disclaimer shown between the original shared ChatGPT conversation and the reader's new private messages after they continue the shared conversation in Codex Desktop"
                })]
            }) : null, u[35] = h.showSharedConversationPrivateDisclaimer, u[36] = i) : i = u[36], u[37] !== h || u[38] !== _ || u[39] !== y || u[40] !== b ? (l = h.isMostRecentTurn ? (0, a.jsx)(as.a, {
                conversationId: h.conversationId,
                errorMessage: h.errorMessage,
                isWorkConversation: h.isWorkConversation,
                onRetry: null == h.onRegenerateResponse || null == _ ? void 0 : async e => {
                    let t = y.get(aR.d, h.conversationId);
                    if (t?.message.id == null || t.isRetryDisabled) return;
                    let n = y.get(F.T, h.conversationId)?.metadata?.errorCode;
                    (0, ak.d)(y.get(ed.c).logProductEvent, {
                        conversationId: y.get(F.j, h.conversationId),
                        messageId: t.message.id,
                        useDefaultModel: t.useDefaultModel,
                        errorCode: n
                    }), await h.onRegenerateResponse?.(t.message.id, {
                        sourceEventTimeStamp: e,
                        source: "model_cap_exceeded" === n ? "rate_limit_retry" : "error_retry",
                        model: (0, aR.e)(t.message, y.get(e7.t, h.conversationId)),
                        useDefaultModel: t.useDefaultModel,
                        forceUseSearch: t.forceUseSearch
                    })
                },
                showPendingLoadingMessage: h.showPendingLoadingMessage,
                showRequestUserInputStatus: h.showRequestUserInputStatus,
                trackShownImpressions: b,
                useDefaultModel: _?.useDefaultModel,
                isRetryDisabled: _?.isRetryDisabled
            }) : null, u[37] = h, u[38] = _, u[39] = y, u[40] = b, u[41] = l) : l = u[41], u[42] !== o || u[43] !== s || u[44] !== i || u[45] !== l ? (c = (0, a.jsxs)("div", {
                className: "flex flex-col gap-1.5",
                children: [o, s, i, l]
            }), u[42] = o, u[43] = s, u[44] = i, u[45] = l, u[46] = c) : c = u[46], u[47] !== h.id || u[48] !== c || u[49] !== n ? (d = (0, a.jsxs)("div", {
                "data-content-search-turn-key": h.id,
                children: [n, c]
            }), u[47] = h.id, u[48] = c, u[49] = n, u[50] = d) : d = u[50], d
        }

        function aB(e) {
            let t, n, o, s = (0, r.c)(6);
            s[0] !== e ? ({
                renderMcpApps: n,
                ...t
            } = e, s[0] = e, s[1] = t, s[2] = n) : (t = s[1], n = s[2]);
            let i = void 0 === n || n,
                l = (0, p.y)(aT),
                c = i && l.value.rendersWidgets;
            return s[3] !== t || s[4] !== c ? (o = (0, a.jsx)(aO, {
                ...t,
                renderMcpApps: c
            }), s[3] = t, s[4] = c, s[5] = o) : o = s[5], o
        }

        function aG(e) {
            let t, n, o, s, i, l, c, d = (0, r.c)(17),
                {
                    entries: u,
                    historyLoader: h,
                    isVisible: m,
                    rendersWidgets: g,
                    onVisibilityChange: f
                } = e;
            d[0] !== m || d[1] !== f ? (t = () => (f(m), () => f(!1)), n = [m, f], d[0] = m, d[1] = f, d[2] = t, d[3] = n) : (t = d[2], n = d[3]), (0, y.useLayoutEffect)(t, n), d[4] !== g ? (o = {
                presentation: "floating",
                rendersWidgets: g
            }, d[4] = g, d[5] = o) : o = d[5];
            let v = m ? h : null;
            return d[6] !== u ? (s = (0, a.jsx)(aS.a, {
                entries: u,
                preserveMeasuredTurnViewport: !0,
                RowComponent: aF
            }), d[6] = u, d[7] = s) : s = d[7], d[8] !== v || d[9] !== s ? (i = (0, a.jsx)(ei.a, {
                value: null,
                children: (0, a.jsxs)(eG.a, {
                    value: null,
                    children: [v, s]
                })
            }), d[8] = v, d[9] = s, d[10] = i) : i = d[10], d[11] !== m || d[12] !== i ? (l = (0, a.jsx)(t6.a, {
                active: m,
                presentation: "panel",
                children: i
            }), d[11] = m, d[12] = i, d[13] = l) : l = d[13], d[14] !== o || d[15] !== l ? (c = (0, a.jsx)(p.b, {
                scope: aT,
                value: o,
                children: l
            }), d[14] = o, d[15] = l, d[16] = c) : c = d[16], c
        }

        function aF(e) {
            let t, n = (0, r.c)(2),
                {
                    entry: o
                } = e;
            return n[0] !== o ? (t = (0, a.jsx)(aB, {
                entry: {
                    ...o,
                    onEditUserMessage: void 0,
                    onFork: void 0,
                    readAloudEnabled: !1
                },
                trackShownImpressions: !1
            }), n[0] = o, n[1] = t) : t = n[1], t
        }
        var az = n("TRQ3"),
            aL = n("SZCv"),
            aD = n.n(aL),
            aH = n("qZWE"),
            aW = n("PC5z"),
            aq = n("lZ4W"),
            aU = n("ihvi"),
            aK = n("aRto"),
            aV = n("WWSI"),
            aY = n("U3Gy"),
            aQ = n("mKTJ");
        let a$ = (0, p.c)(tQ.a, e => {
                let {
                    get: t
                } = e;
                return t(aH.l)
            }, {
                isEqual: aD()
            }),
            aX = (0, p.c)(tQ.a, e => {
                let {
                    get: t
                } = e;
                return t(aW.i)
            }, {
                isEqual: (e, t) => e.length === t.length && e.every((e, n) => e.messageId === t[n]?.messageId && e.turnId === t[n]?.turnId)
            });

        function aZ(e) {
            let t, n, o, s, i = (0, r.c)(17),
                {
                    conversationId: l,
                    entries: c,
                    onApiChange: d,
                    onVisibleContentReady: u,
                    responseSpacerState: h
                } = e,
                {
                    sharedConversationId: m
                } = (0, _.cb)(),
                g = (0, p.z)(null != m && "u" > typeof Element && "function" != typeof Element.prototype.moveBefore ? a$ : null),
                f = (0, p.z)(aX);
            i[0] !== c ? (t = e => {
                let t = c.find(t => t.turn.items.some(t => "chatgpt-writing-block-patch" === t.type && t.messageId === e.messageId)),
                    n = t?.turnKey ?? c.find(t => {
                        let {
                            id: n
                        } = t;
                        return n === e.turnId
                    })?.turnKey;
                return null == n ? [] : [n]
            }, i[0] = c, i[1] = t) : t = i[1];
            let v = f.flatMap(t),
                x = (0, y.useContext)(aK.a),
                b = c.at(-1);
            if (x?.aboveComposer != null && null != b && v.push(b.turnKey), null != m && g?.size)
                for (let e of c) e.turn.items.flatMap(a1).some(e => "chatgpt-hosted-widget" === e.type && (0, aQ.h)(e) && g.has((0, aQ.e)(m, e.messageId))) && v.push(e.turnKey);
            let C = c.findLast(aJ);
            h?.voiceAutoScrollEnabled && null != C && v.push(C.turnKey);
            let w = (0, p.x)(aU.b, l),
                I = null == w ? void 0 : c.findLast(e => {
                    let {
                        turn: t
                    } = e;
                    return t.messageIds.includes(w)
                }),
                S = null == I ? void 0 : (0, aU.a)(I.turn.items);
            (0, p.x)(aq.a, null == S ? null : {
                conversationId: l,
                userMessageId: S,
                steeredPromptId: I === b ? w : void 0
            }) && null != I && v.push(I.turnKey);
            let j = (0, p.x)(aY.b, l);
            i[2] !== l || i[3] !== c || i[4] !== j ? (n = (0, aV.a)(c, j, l), i[2] = l, i[3] = c, i[4] = j, i[5] = n) : n = i[5];
            let T = h?.getHeightPx,
                E = h?.voiceAutoScrollEnabled ? C?.turnKey : void 0,
                A = h?.onTurnLayoutReady;
            return i[6] !== h ? (o = e => {
                let {
                    heightDeltaPx: t
                } = e;
                h?.consumeGrowth(t ?? 0)
            }, i[6] = h, i[7] = o) : o = i[7], i[8] !== d || i[9] !== u || i[10] !== v || i[11] !== n || i[12] !== T || i[13] !== E || i[14] !== A || i[15] !== o ? (s = (0, a.jsx)(aS.a, {
                entries: n,
                getBottomScrollPaddingPx: T,
                layoutReadyTurnKey: E,
                onTurnLayoutReady: A,
                onLatestTurnHeightChange: o,
                onApiChange: d,
                onVisibleContentReady: u,
                preserveMeasuredTurnViewport: !0,
                retainedTurnKeys: v,
                RowComponent: aB
            }), i[8] = d, i[9] = u, i[10] = v, i[11] = n, i[12] = T, i[13] = E, i[14] = A, i[15] = o, i[16] = s) : s = i[16], s
        }

        function aJ(e) {
            let {
                turn: t
            } = e;
            return t.items.some(a0)
        }

        function a0(e) {
            return "user-message" === e.type
        }

        function a1(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : [e]
        }
        var a2 = n("XAP6"),
            a3 = n("bzoy"),
            a4 = n("LYS1"),
            a6 = n("aZoZ"),
            a5 = n("Gv8v"),
            a8 = n("EGpF"),
            a7 = n("mTPq"),
            a9 = n("Vcrm"),
            re = n("QBVt");
        let rt = (0, p.d)(eo.a, (e, t) => {
            let {
                get: n
            } = t, a = n(F._, e);
            if (!(0, F.zb)(a)) return !0;
            let r = n(F.L, e),
                o = n(F.B, e);
            if (null == r || null == o) return !1;
            let s = r[o]?.message;
            if (null == s || a4.a.has(s.author.role)) return !1;
            let i = n(F.x, e),
                l = (0, a7.c)({
                    mapping: r,
                    current_node: o
                }, n(F.Q, e)),
                c = n(F.bb, e);
            return "streaming" === a && "tpp" !== i && "flora" !== i && null != n(F.j, e) && !(0, a3.e)(n(F.o, e)) && null != c && !n(a2.e).has(c) && null != rn(n, e).request.current && (null == l || l.info.num_variants_in_stream <= 1)
        });

        function rn(e, t) {
            let n = e(a8.a, t),
                a = e(F.j, t);
            return null == n.request.current && null != a ? e(a8.a, a) : n
        }
        var ra = n("xtkq"),
            rr = n("PG5R"),
            ro = n("zrki"),
            rs = n("iLYI"),
            ri = n("Ipgw"),
            rl = n("wVX4");

        function rc(e) {
            let t, n, o, s, i = (0, r.c)(18),
                {
                    conversationId: l
                } = e,
                c = (0, p.y)(eo.a),
                d = (0, b.a)(),
                u = (0, ne.a)(),
                h = (0, p.x)(F._, l),
                m = (0, p.x)(F.bb, l),
                g = (0, p.x)(F.v, l),
                f = (0, p.x)(F.ab, l),
                v = (0, y.useRef)(null),
                C = (0, y.useRef)(null);
            i[0] !== g || i[1] !== l || i[2] !== d || i[3] !== m || i[4] !== c || i[5] !== h || i[6] !== f ? (t = () => {
                let e = v.current;
                if (null == e) return;
                let t = C.current;
                if ((0, F.zb)(h)) {
                    e.textContent = "", C.current = {
                        conversationId: l,
                        requestId: m ?? ("active-async-turn" === h || "active-tpp-turn" === h ? g?.requestId : null) ?? (t?.conversationId === l ? t.requestId : null)
                    };
                    return
                }
                f || (C.current = null, t?.conversationId === l && "idle" === h && g?.result === "completed" && g.requestId === t.requestId && null == c.get(F.C, l) && (e.textContent = d.formatMessage({
                    id: "chatgptConversations.responseComplete",
                    defaultMessage: "Response complete",
                    description: "Polite screen-reader announcement after the ChatGPT response the user was waiting for finishes successfully"
                })))
            }, i[0] = g, i[1] = l, i[2] = d, i[3] = m, i[4] = c, i[5] = h, i[6] = f, i[7] = t) : t = i[7];
            let _ = (0, y.useEffectEvent)(t);
            return (i[8] !== _ ? (n = () => {
                _()
            }, i[8] = _, i[9] = n) : n = i[9], i[10] !== g || i[11] !== l || i[12] !== u || i[13] !== m || i[14] !== h || i[15] !== f ? (o = [l, h, m, g, f, u], i[10] = g, i[11] = l, i[12] = u, i[13] = m, i[14] = h, i[15] = f, i[16] = o) : o = i[16], (0, y.useEffect)(n, o), u) ? (i[17] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, x.createPortal)((0, a.jsx)("span", {
                ref: v,
                className: "sr-only select-none",
                "aria-atomic": "true",
                "aria-live": "polite",
                role: "status"
            }), document.body), i[17] = s) : s = i[17], s) : null
        }
        var rd = n("n5iL"),
            ru = n("EFj1"),
            rh = n("iS3k"),
            rp = n("pDUk"),
            rm = n("GaCK"),
            rg = n("Dofq");
        let rf = (0, e2.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(954244), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(229522), n.e(390575), n.e(353032), n.e(637885), n.e(284470), n.e(954111)]).then(n.bind(n, "YhBP"))).ChatGptThreadSummaryPanelBody, {
            fallback: (0, a.jsx)(rh.a.Content, {
                children: (0, a.jsx)("div", {
                    className: "flex flex-col gap-0.5 px-5",
                    children: (0, a.jsx)("span", {
                        className: "select-none",
                        role: "status",
                        children: (0, a.jsx)(C.a, {
                            id: "chatgptConversations.summaryPanel.loading",
                            defaultMessage: "Loading summary…",
                            description: "Status shown in the Work task summary panel while its interface downloads"
                        })
                    })
                })
            }),
            errorFallback: (0, a.jsx)(rh.a.Content, {
                children: (0, a.jsx)("div", {
                    className: "flex flex-col gap-0.5 px-5",
                    children: (0, a.jsx)("span", {
                        className: "select-none",
                        role: "status",
                        children: (0, a.jsx)(C.a, {
                            id: "chatgptConversations.summaryPanel.loadError",
                            defaultMessage: "Summary could not load. Reload the app to try again",
                            description: "Recovery instructions in the Work task summary panel after its interface fails to download; closing the panel does not retry"
                        })
                    })
                })
            })
        });

        function rv(e) {
            let t, n, o, s = (0, r.c)(6);
            s[0] !== e ? ({
                readData: n,
                ...t
            } = e, s[0] = e, s[1] = t, s[2] = n) : (t = s[1], n = s[2]);
            let i = (0, rh.b)(),
                [l, c] = (0, y.useState)(null);
            return i && l?.readData !== n && c({
                readData: n,
                data: n()
            }), s[3] !== l || s[4] !== t ? (o = null == l ? null : (0, a.jsx)(rf, {
                ...t,
                data: l.data
            }), s[3] = l, s[4] = t, s[5] = o) : o = s[5], o
        }

        function ry(e) {
            let t, n, o, s = (0, r.c)(15),
                {
                    conversationId: i,
                    composerActions: l,
                    readData: c,
                    display: d,
                    shouldBlockExternalEgress: u,
                    showSources: h
                } = e,
                m = void 0 === h || h,
                g = (0, p.y)(z.a),
                f = (0, es.h)("2903661647"),
                v = f ? "dynamic-isle" : "summary";
            return s[0] !== g || s[1] !== v ? (t = {
                scope: g,
                layout: v
            }, s[0] = g, s[1] = v, s[2] = t) : t = s[2], s[3] !== l || s[4] !== i || s[5] !== f || s[6] !== c || s[7] !== u || s[8] !== m ? (n = (0, a.jsx)(rv, {
                conversationId: i,
                composerActions: l,
                readData: c,
                isUnifiedDynamicIsleEnabled: f,
                showSources: m,
                shouldBlockExternalEgress: u
            }, i), s[3] = l, s[4] = i, s[5] = f, s[6] = c, s[7] = u, s[8] = m, s[9] = n) : n = s[9], s[10] !== d.shouldHideInlineImmediately || s[11] !== d.shouldShow || s[12] !== t || s[13] !== n ? (o = (0, a.jsx)(rh.a.Root, {
                analytics: t,
                shouldHideInlineImmediately: d.shouldHideInlineImmediately,
                shouldShow: d.shouldShow,
                children: n
            }), s[10] = d.shouldHideInlineImmediately, s[11] = d.shouldShow, s[12] = t, s[13] = n, s[14] = o) : o = s[14], o
        }

        function rx(e) {
            let t, n, o, s = (0, r.c)(22),
                {
                    conversationId: i,
                    composerActions: l,
                    controlledState: c,
                    readData: d,
                    shouldBlockExternalEgress: u,
                    showSources: h
                } = e,
                m = void 0 === h || h,
                g = (0, p.y)(z.a),
                f = (0, y.useContext)(ei.a),
                v = (0, b.a)(),
                x = (0, es.h)("2903661647"),
                C = (0, p.z)(null == c ? nv.N : null);
            s[0] !== c?.isOpen || s[1] !== C ? (t = c?.isOpen ?? (0, nv.z)(C, !0), s[0] = c?.isOpen, s[1] = C, s[2] = t) : t = s[2];
            let _ = t,
                w = (0, p.z)(rm.b),
                I = c?.isOpen ?? w.isPopoverOpen,
                S = (0, p.x)(rd.f, "togglePinnedSummary");
            (0, t7.b)(g), s[3] !== c || s[4] !== g ? (n = () => {
                null != c ? c.onOpenChange(!c.isOpen) : (0, rg.b)(g)
            }, s[3] = c, s[4] = g, s[5] = n) : n = s[5];
            let j = n;
            return (0, ru.a)("togglePinnedSummary", j), s[6] !== l || s[7] !== f || s[8] !== c || s[9] !== i || s[10] !== v || s[11] !== _ || s[12] !== I || s[13] !== x || s[14] !== w.displayMode || s[15] !== d || s[16] !== g || s[17] !== S || s[18] !== u || s[19] !== m || s[20] !== j ? (o = (0, a.jsx)(A.a.HeaderAction, {
                actionId: "chatgpt-thread-summary-panel-toggle",
                align: "end",
                order: 250,
                children: "overlay" === w.displayMode ? (0, a.jsx)(rp.a, {
                    isOpen: I,
                    shouldPreventAutoFocus: c?.shouldPreventAutoFocus,
                    onOpenChange: e => {
                        null != c ? c.onOpenChange(e) : g.set(rm.b, t => "overlay" !== t.displayMode || t.isPopoverOpen === e ? t : {
                            ...t,
                            isPopoverOpen: e
                        })
                    },
                    trigger: (0, a.jsx)(rh.a.HeaderButton, {
                        analytics: {
                            scope: g
                        },
                        label: v.formatMessage({
                            id: "chatgptConversations.summaryPanel.toggle",
                            defaultMessage: "Toggle summary",
                            description: "Button label for toggling the ChatGPT summary panel"
                        }),
                        pressed: I,
                        shortcut: S
                    }),
                    children: null != d ? (0, a.jsx)(ei.a, {
                        value: f,
                        children: (0, a.jsx)(rh.a.PopoverContent, {
                            analytics: {
                                scope: g,
                                layout: x ? "dynamic-isle" : "summary"
                            },
                            children: (0, a.jsx)(rv, {
                                conversationId: i,
                                composerActions: l,
                                readData: d,
                                isUnifiedDynamicIsleEnabled: x,
                                showSources: m,
                                shouldBlockExternalEgress: u
                            }, i)
                        })
                    }) : null
                }) : (0, a.jsx)(rh.a.HeaderButton, {
                    analytics: {
                        scope: g
                    },
                    label: v.formatMessage({
                        id: "chatgptConversations.summaryPanel.togglePinned",
                        defaultMessage: "Toggle pinned summary",
                        description: "Button label for toggling whether the ChatGPT summary panel reserves layout space"
                    }),
                    pressed: _,
                    shortcut: S,
                    onClick: j
                })
            }), s[6] = l, s[7] = f, s[8] = c, s[9] = i, s[10] = v, s[11] = _, s[12] = I, s[13] = x, s[14] = w.displayMode, s[15] = d, s[16] = g, s[17] = S, s[18] = u, s[19] = m, s[20] = j, s[21] = o) : o = s[21], o
        }
        var rb = n("JjRy"),
            rC = n.n(rb),
            r_ = n("G4E3"),
            rw = n("KaH3"),
            rI = n("Yz3b"),
            rS = n("ghNX"),
            rj = n("KvVi"),
            rT = n("m250"),
            rE = n("Ng4B"),
            rA = n("bTKb"),
            rP = n("dGDB"),
            rk = n("lIsV");

        function rM(e) {
            return e.flatMap(e => "chatgpt-reasoning-group" === e.type ? e.items : [e])
        }
        var rR = n("JlMc"),
            rN = n("TUMj"),
            rO = n("f6KK"),
            rB = n("JPXZ"),
            rG = n("zWHk");

        function rF(e) {
            let t, n, a, o, s, i, l, c = (0, r.c)(34),
                {
                    composerController: d,
                    enabled: u
                } = e,
                h = (0, _.Y)(),
                p = (0, _._)();
            if (c[0] !== h.search) {
                let e = new URLSearchParams(h.search);
                t = e.get("prompt"), n = e.get("promptSource"), c[0] = h.search, c[1] = t, c[2] = n
            } else t = c[1], n = c[2];
            let m = n,
                g = h.key,
                f = (0, y.useRef)(null);
            c[3] !== h.hash || c[4] !== h.pathname || c[5] !== h.search || c[6] !== h.state || c[7] !== g || c[8] !== p ? (a = e => {
                let t = new URLSearchParams(h.search);
                t.delete("prompt"), t.delete("promptSource"), p({
                    pathname: h.pathname,
                    search: t.toString(),
                    hash: h.hash
                }, {
                    replace: !0,
                    state: {
                        ...h.state,
                        consumedUrlPromptKey: g,
                        ...e && "widget" === t.get("site_edit_source") ? {
                            siteEditSource: "widget"
                        } : void 0
                    }
                })
            }, c[3] = h.hash, c[4] = h.pathname, c[5] = h.search, c[6] = h.state, c[7] = g, c[8] = p, c[9] = a) : a = c[9];
            let v = (0, y.useEffectEvent)(a);
            return c[10] !== v || c[11] !== d || c[12] !== u || c[13] !== g || c[14] !== t ? (o = () => {
                if (!u && t && f.current !== g) return (0, rG.b)(d.view, (e, t) => {
                    e && t?.getMeta("addToHistory") !== !1 && d.consumeLocationPromptPrefill(g) && v(!1)
                })
            }, c[10] = v, c[11] = d, c[12] = u, c[13] = g, c[14] = t, c[15] = o) : o = c[15], c[16] !== d || c[17] !== u || c[18] !== g || c[19] !== t ? (s = [d, u, g, t], c[16] = d, c[17] = u, c[18] = g, c[19] = t, c[20] = s) : s = c[20], (0, y.useLayoutEffect)(o, s), c[21] !== v || c[22] !== d || c[23] !== u || c[24] !== g || c[25] !== t || c[26] !== m ? (i = () => {
                if (!u || !t || f.current === g) return;
                f.current = g;
                let e = d.consumeLocationPromptPrefill(g);
                if (v(e), !e) return;
                let {
                    view: n
                } = d, a = t.replace(/\r\n/g, "\n"), r = "codex-app" === m ? (0, rB.f)({
                    schema: n.state.schema,
                    text: a,
                    restoreOnlySitesAndPluginMentions: !0
                }) : (0, rB.e)({
                    schema: n.state.schema,
                    text: a
                }), o = n.state.tr.replaceWith(0, n.state.doc.content.size, r.content);
                o.setSelection(rO.h.atEnd(o.doc)), n.dispatch(o)
            }, c[21] = v, c[22] = d, c[23] = u, c[24] = g, c[25] = t, c[26] = m, c[27] = i) : i = c[27], c[28] !== d || c[29] !== u || c[30] !== g || c[31] !== t || c[32] !== m ? (l = [d, u, g, t, m], c[28] = d, c[29] = u, c[30] = g, c[31] = t, c[32] = m, c[33] = l) : l = c[33], (0, y.useLayoutEffect)(i, l), null
        }
        var rz = n("zKCW");

        function rL(e) {
            let t, n, o, s, i, l = (0, r.c)(11),
                {
                    canConvert: c,
                    isChatInstantAvailable: d,
                    isConverting: u,
                    onConvert: h
                } = e;
            l[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(C.a, {
                id: "chatgptConversations.workOnlyConversion.title",
                defaultMessage: "Continue in Work",
                description: "Banner title shown in a disabled historical Chat conversation for a Work-only member in Codex Desktop"
            }), l[0] = t) : t = l[0], l[1] !== d ? (n = d ? (0, a.jsx)(C.a, {
                id: "chatgptConversations.workOnlyConversion.instantDescription",
                defaultMessage: "Move this chat to Work to use agentic tools and take on more complex tasks. You can still use chat instant for quick questions",
                description: "Banner description shown for a Chat Instant conversation when a Work-only member can continue using Chat Instant in Codex Desktop"
            }) : (0, a.jsx)(C.a, {
                id: "chatgptConversations.workOnlyConversion.description",
                defaultMessage: "Move this chat to Work to use agentic tools and take on more complex tasks",
                description: "Banner description shown when a Work-only member cannot continue a historical Chat conversation in Codex Desktop"
            }), l[1] = d, l[2] = n) : n = l[2];
            let p = !c;
            return l[3] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, a.jsx)(C.a, {
                id: "chatgptConversations.workOnlyConversion.action",
                defaultMessage: "Convert to Work",
                description: "Button that converts a disabled historical Chat conversation to Work in Codex Desktop"
            }), l[3] = o) : o = l[3], l[4] !== u || l[5] !== h || l[6] !== p ? (s = (0, a.jsx)(eX.a, {
                color: "primary",
                disabled: p,
                loading: u,
                onClick: h,
                children: o
            }), l[4] = u, l[5] = h, l[6] = p, l[7] = s) : s = l[7], l[8] !== n || l[9] !== s ? (i = (0, a.jsx)("div", {
                className: "mx-auto mb-3 w-full max-w-[var(--thread-content-max-width)]",
                children: (0, a.jsx)(rz.a, {
                    ariaLive: "polite",
                    title: t,
                    content: n,
                    customCtas: s
                })
            }), l[8] = n, l[9] = s, l[10] = i) : i = l[10], i
        }
        var rD = n("pgeU");
        let rH = (0, e2.a)(async () => (await Promise.all([n.e(747352), n.e(94193)]).then(n.bind(n, "FKl5"))).ClientDelightPresentation);

        function rW(e) {
            let t, n, o, s = (0, r.c)(7),
                {
                    conversationId: i
                } = e,
                l = (0, p.y)(eo.a),
                c = (0, p.x)(rD.a, i);
            return s[0] !== i || s[1] !== l ? (t = () => {
                let e = () => {
                        let e = l.get(rD.a, i);
                        null != e && (0, rD.b)(l, i, e, "hidden_or_unmounted")
                    },
                    t = () => {
                        "visible" !== document.visibilityState && e()
                    };
                return document.addEventListener("visibilitychange", t), window.addEventListener("pagehide", e), () => {
                    document.removeEventListener("visibilitychange", t), window.removeEventListener("pagehide", e), e()
                }
            }, n = [i, l], s[0] = i, s[1] = l, s[2] = t, s[3] = n) : (t = s[2], n = s[3]), (0, y.useEffect)(t, n), s[4] !== i || s[5] !== c ? (o = null == c ? null : (0, a.jsx)(rH, {
                conversationId: i,
                effect: c
            }, c.id), s[4] = i, s[5] = c, s[6] = o) : o = s[6], o
        }
        var rq = n("fr5e"),
            rU = n("V8xe"),
            rK = n("LEgg");
        let rV = (0, e2.a)(async () => (await n.e(432800).then(n.bind(n, "T7hR"))).AutomationPlanHeaderShortcut);

        function rY(e) {
            let t, n = (0, r.c)(3),
                {
                    conversationId: o
                } = e,
                s = (0, es.h)("2840857813");
            return n[0] !== o || n[1] !== s ? (t = s ? (0, a.jsx)(rV, {
                conversationId: o
            }) : null, n[0] = o, n[1] = s, n[2] = t) : t = n[2], t
        }
        var rQ = n("T33u");
        let r$ = (0, e2.a)(() => n.e(766350).then(n.bind(n, "wWAQ")).then(e => e.ScheduledGoalNavigationBridge));

        function rX(e) {
            let t, n, o, s = (0, r.c)(10),
                {
                    conversationId: i,
                    scheduledAutomationId: l
                } = e,
                c = (0, p.x)(rQ.a, i),
                d = (0, es.h)("3901104270");
            return s[0] !== i || s[1] !== c ? (t = null == c ? (0, a.jsx)(rY, {
                conversationId: i
            }) : null, s[0] = i, s[1] = c, s[2] = t) : t = s[2], s[3] !== i || s[4] !== d || s[5] !== l ? (n = d && null != l ? (0, a.jsx)(r$, {
                conversationId: i,
                automationId: l
            }) : null, s[3] = i, s[4] = d, s[5] = l, s[6] = n) : n = s[6], s[7] !== t || s[8] !== n ? (o = (0, a.jsxs)(a.Fragment, {
                children: [t, n]
            }), s[7] = t, s[8] = n, s[9] = o) : o = s[9], o
        }
        var rZ = n("Qgfj"),
            rJ = n("rmk3"),
            r0 = n("f38C"),
            r1 = n("MRlq"),
            r2 = n("fQbA"),
            r3 = n("dDDU"),
            r4 = n("soaw"),
            r6 = n("ZrYB"),
            r5 = n("X6Vn"),
            r8 = n("Kwur"),
            r7 = n("MYlA"),
            r9 = n("JCtZ"),
            oe = n("g2p6"),
            ot = n("oaTv"),
            on = n("PME0"),
            oa = n("lgcP"),
            or = n("AcSY"),
            oo = n("w7E5"),
            os = n("QmkR"),
            oi = n("xEXG"),
            ol = n("J6LI"),
            oc = n("lUUH"),
            od = n("ftAl");

        function ou(e) {
            let t, n, o, s = (0, r.c)(17),
                {
                    children: i,
                    conversationId: l,
                    getBaseItems: c,
                    menuTriggerRef: d,
                    navigate: u,
                    onBeforeOpen: h,
                    onOpenChange: m
                } = e,
                g = (0, p.y)(eo.a),
                {
                    data: f
                } = (0, or.i)(),
                v = (0, oi.b)();
            return s[0] !== f || s[1] !== l || s[2] !== c || s[3] !== d || s[4] !== u || s[5] !== v || s[6] !== g ? (t = () => {
                let e = g.get(od.a, l, {
                        enabled: !1
                    }),
                    t = (0, te.a)(e?.gizmo_id) ? e?.gizmo_id ?? null : null,
                    n = null == t ? void 0 : g.query.getData(eV.b, t);
                return c(function(e) {
                    let {
                        scope: t,
                        conversationId: n,
                        conversation: a,
                        project: r,
                        account: o,
                        projectCrudStatus: s,
                        navigate: i,
                        onCreateProjectDialogCloseAutoFocus: l
                    } = e, c = (0, te.a)(a?.gizmo_id) ? a?.gizmo_id ?? null : null, d = t.get(oo.a), u = t.get(os.m), {
                        data: h
                    } = d, p = h?.pages.flatMap(e => e.items).length ?? 0, m = (a?.conversation_origin === "tpp" || a?.conversation_origin === "flora") && ("allowed" === s || h?.pages.some(e => null != e.cursor) === !0), g = t.get(os.h, n);
                    return null == o || null == a || t.get(os.g, n) || (0, ol.c)(a, r).sourceUnavailable || null == (0, ol.b)(t, a, g, !1) || null != c && null == r || null == h || 0 === p && !m ? [] : [...null == r ? [] : [{
                        id: "current-project-name",
                        message: og.projectName,
                        messageValues: {
                            projectName: r.gizmo.display.name
                        },
                        enabled: !1
                    }], ...(0, oc.b)({
                        scope: t,
                        conversation: a,
                        project: r,
                        showDestinationFetchState: !1,
                        showMoveToProject: null == c || p > 1 || m,
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
                    navigate: u,
                    onCreateProjectDialogCloseAutoFocus: e => {
                        e.preventDefault(), d.current?.focus({
                            preventScroll: !0
                        })
                    }
                }))
            }, s[0] = f, s[1] = l, s[2] = c, s[3] = d, s[4] = u, s[5] = v, s[6] = g, s[7] = t) : t = s[7], s[8] !== l || s[9] !== h || s[10] !== g ? (n = async () => {
                await Promise.all([(async () => {
                    let e = g.get(ar.chatGptConversationQueryById$, l, {
                        enabled: !1
                    });
                    null == e.data && e.isFetching && await g.query.getOrFetch(ar.chatGptConversationQueryById$, l).catch(om), null == g.query.getData(ar.chatGptConversationQueryById$, l) && await g.query.getOrFetch(os.j, [l]).catch(op)
                })(), h?.()]);
                let e = g.get(od.a, l, {
                    enabled: !1
                });
                (0, te.a)(e?.gizmo_id) && e?.gizmo_id != null && await g.query.getOrFetch(eV.b, e.gizmo_id).catch(oh)
            }, s[8] = l, s[9] = h, s[10] = g, s[11] = n) : n = s[11], s[12] !== i || s[13] !== m || s[14] !== t || s[15] !== n ? (o = (0, a.jsx)(rJ.a, {
                preserveBrowserContextMenu: !0,
                awaitBeforeOpen: !1,
                getItems: t,
                onBeforeOpen: n,
                onOpenChange: m,
                renderItem: r2.b,
                trigger: "click",
                children: i
            }), s[12] = i, s[13] = m, s[14] = t, s[15] = n, s[16] = o) : o = s[16], o
        }

        function oh() {}

        function op() {}

        function om() {}
        let og = (0, rZ.f)({
            projectName: {
                id: "chatgptConversations.projectActions.projectName",
                defaultMessage: "{projectName}",
                description: "Name of a ChatGPT project offered as a destination for moving a conversation or Work task"
            }
        });

        function of(e) {
            let t, o, s, i, l, c, d, u, h, m, g, f, v, x, C, w, I, S, E, A = (0, r.c)(70),
                {
                    conversationOrigin: P,
                    conversationId: k,
                    title: M,
                    isHandoffPending: R,
                    isArchived: O,
                    isChatConversation: B,
                    onHandoff: G,
                    onOpenMessage: F,
                    projectId: L,
                    projectName: D,
                    serverConversationId: H
                } = e,
                W = (0, p.y)(z.a),
                q = (0, p.y)(eo.a),
                U = (0, r4.a)(),
                K = (0, es.k)();
            A[0] !== K ? (t = K.checkGate("224248639"), A[0] = K, A[1] = t) : t = A[1];
            let V = t;
            A[2] !== K ? (o = K.getLayer("3017902351").get("web_file_library_enabled", !1), A[2] = K, A[3] = o) : o = A[3];
            let Y = o,
                Q = V || Y;
            A[4] !== Q ? (s = {
                enabled: Q
            }, A[4] = Q, A[5] = s) : s = A[5];
            let {
                data: $
            } = (0, p.z)(oe.p, s), X = Q && $?.fileLibraryEnabledForRegistrationCountry !== !1, Z = (0, b.a)(), J = (0, _._)(), [ee, et] = (0, y.useState)(null), [en, er] = (0, y.useState)(!1), ei = (0, y.useRef)(null), el = (0, y.useRef)(null);
            A[6] === Symbol.for("react.memo_cache_sentinel") ? (i = [], A[6] = i) : i = A[6];
            let ec = (0, y.useRef)(i);
            A[7] === Symbol.for("react.memo_cache_sentinel") ? (l = {
                name: "chatgpt"
            }, A[7] = l) : l = A[7];
            let {
                isCapable: ed
            } = (0, p.x)(j.a, l), eu = (0, p.x)(os.g, H);
            A[8] === Symbol.for("react.memo_cache_sentinel") ? (c = () => et("shortcut"), A[8] = c) : c = A[8];
            let eh = B && !eu;
            A[9] !== W || A[10] !== H ? (d = () => (0, an.a)(W.query.getData(ar.chatGptConversationQueryById$, H), W.get(N.h), W.get(N.g)), A[9] = W, A[10] = H, A[11] = d) : d = A[11], A[12] !== eh || A[13] !== d ? (u = {
                enabled: eh,
                isActive: d
            }, A[12] = eh, A[13] = d, A[14] = u) : u = A[14], (0, ru.a)("deleteChat", c, u), A[15] !== q || A[16] !== eu || A[17] !== J || A[18] !== W || A[19] !== H ? (h = e => {
                !eu && (0, an.a)(W.query.getData(ar.chatGptConversationQueryById$, H), W.get(N.h), W.get(N.g)) && (et(null), (0, oa.a)(q, H, e), J("/", {
                    replace: !0,
                    state: {
                        leavingDeletedChatGptConversation: !0
                    }
                }))
            }, A[15] = q, A[16] = eu, A[17] = J, A[18] = W, A[19] = H, A[20] = h) : h = A[20];
            let ep = h;
            A[21] !== Z ? (m = Z.formatMessage(ob.chatActions), A[21] = Z, A[22] = m) : m = A[22];
            let em = m;
            A[23] !== W || A[24] !== H ? (g = async () => {
                let e = [];
                ec.current = e, e.push(...await async function(e, t) {
                    let a = await r8.Request.safeGet("/live/conversations/{conversation_id}/session-sharing", {
                        parameters: {
                            path: {
                                conversation_id: t
                            }
                        }
                    }).catch(() => null);
                    return a?.can_share && 0 !== a.av_sessions.length ? [{
                        id: "share-live-session",
                        icon: av.dj,
                        message: (0, rZ.e)({
                            id: "chatgptConversations.liveSessionSharing.action",
                            defaultMessage: "Share Live session",
                            description: "Conversation menu action that lets an eligible user create a GPT-Live session viewer link for one of their previous voice calls"
                        }),
                        selectAfterClose: !0,
                        onSelect: () => {
                            n.e(571376).then(n.bind(n, "ATrx")).then(n => {
                                let {
                                    BidiSessionSharingDialog: r
                                } = n;
                                (0, r5.f)(e, r, {
                                    conversationId: t,
                                    sessions: a.av_sessions
                                })
                            })
                        }
                    }] : []
                }(W, H))
            }, A[23] = W, A[24] = H, A[25] = g) : g = A[25];
            let eg = g;
            A[26] !== k || A[27] !== P || A[28] !== X || A[29] !== Z || A[30] !== eu || A[31] !== O || A[32] !== R || A[33] !== U || A[34] !== J || A[35] !== G || A[36] !== F || A[37] !== L || A[38] !== D || A[39] !== W || A[40] !== H || A[41] !== K || A[42] !== M ? (f = e => {
                let t = W.get(N.f),
                    a = W.get(N.k),
                    r = W.query.getData(ar.chatGptConversationQueryById$, H),
                    o = W.get(N.h),
                    s = W.get(N.g),
                    i = (0, an.a)(r, o, s),
                    l = (0, nW.b)(W, H),
                    c = !eu && (0, an.a)(l, o, s),
                    d = W.get(T.b).pathname,
                    u = () => U() && d === W.get(T.b).pathname && t === W.get(N.f) && a === W.get(N.k),
                    h = (0, ot.a)(W, k, P, () => (0, on.a)(J)),
                    p = [];
                return K.getLayer("3732549458").get("enable_conversation_audio_summary", !1) && p.push({
                    id: "chatgpt-audio-summary",
                    message: (0, rZ.e)({
                        id: "GizmoInformation.audioSummary",
                        defaultMessage: "Audio summary",
                        description: "Opens the dialog for generating and listening to an audio summary of the current chat"
                    }),
                    icon: av.sg,
                    selectAfterClose: !0,
                    onSelect: () => {
                        (async function() {
                            return (await n.e(600460).then(n.bind(n, "EEPj"))).openAudioSummaryDialog
                        })().then(e => {
                            u() && e(W, H)
                        }).catch(() => {
                            u() && (ei.current?.focus({
                                preventScroll: !0
                            }), W.get(ea.f).danger(Z.formatMessage({
                                id: "chatgpt.audioSummary.openError",
                                defaultMessage: "Couldn’t open audio summary",
                                description: "Error toast when loading the audio summary dialog fails after selecting its conversation menu action"
                            }), {
                                errorAnalytics: {
                                    toastId: "chatgpt.audioSummary.openError"
                                }
                            }))
                        })
                    }
                }), X && p.unshift({
                    id: "chatgpt-conversation-files",
                    message: (0, rZ.e)({
                        id: "GizmoInformation.viewFiles",
                        defaultMessage: "View files in chat",
                        description: "Opens the side panel listing files referenced in the active saved ChatGPT conversation, even when the list is empty"
                    }),
                    icon: av.sb,
                    onSelect: () => {
                        (async function() {
                            return (await n.e(963775).then(n.bind(n, "fUWe"))).openConversationFiles
                        })().then(e => {
                            u() && e(W, {
                                conversationId: k,
                                serverConversationId: H,
                                onOpenMessage: F
                            })
                        }).catch(() => {
                            u() && W.get(ea.f).danger(Z.formatMessage({
                                id: "chatgptConversations.files.loadPanelError",
                                defaultMessage: "Couldn’t open files in chat",
                                description: "Error toast when loading the Files in chat panel fails after selecting its conversation menu action"
                            }), {
                                errorAnalytics: {
                                    toastId: "chatgptConversations.files.loadPanelError"
                                }
                            })
                        })
                    }
                }), p.push(...(0, r3.a)(W)), (0, r9.a)(W, {
                    organizationItems: (0, r2.a)([]),
                    projectItems: void 0 === e ? [] : e,
                    sharingItems: ec.current,
                    viewItems: p,
                    feedbackItems: [],
                    preferenceItems: null == h ? [] : [h],
                    surface: "header",
                    conversationId: H,
                    stateConversationId: k,
                    conversationOrigin: P,
                    title: M,
                    isHandoffPending: R,
                    canHandoff: null != G,
                    onHandoff: G,
                    projectId: L,
                    projectName: D,
                    onRename: (0, an.b)(r, o, s, eu) ? () => void(0, nW.renameActiveChatGptConversation)(W, k) : void 0,
                    isPinned: W.get(os.h, H) ?? l?.is_starred === !0,
                    onTogglePin: c ? () => {
                        let e = (0, nW.b)(W, H);
                        !(null == e || W.get(os.g, H)) && (0, an.a)(e, W.get(N.h), W.get(N.g)) && (0, os.V)({
                            scope: W,
                            conversation: "conversation_id" in e ? {
                                gizmo_id: e.gizmo_id,
                                id: e.conversation_id,
                                is_archived: e.is_archived,
                                is_starred: e.is_starred,
                                title: e.title
                            } : e
                        }).catch(ov)
                    } : void 0,
                    onArchive: !i || eu || O ? void 0 : () => (0, r6.a)(W, H),
                    onUnarchive: i && !eu && O ? () => {
                        (0, os.W)({
                            scope: W,
                            conversationId: H
                        }).then(() => {
                            W.get(ea.f).success(Z.formatMessage(r1.a.unarchiveSuccessPlain))
                        }).catch(() => {
                            W.get(ea.f).danger(Z.formatMessage(ax.a.unarchiveError), {
                                errorAnalytics: {
                                    toastId: "chatgptConversationPage.onUnarchive.unarchiveError"
                                }
                            })
                        })
                    } : void 0,
                    onDelete: !i || eu ? void 0 : () => et("menu")
                })
            }, A[26] = k, A[27] = P, A[28] = X, A[29] = Z, A[30] = eu, A[31] = O, A[32] = R, A[33] = U, A[34] = J, A[35] = G, A[36] = F, A[37] = L, A[38] = D, A[39] = W, A[40] = H, A[41] = K, A[42] = M, A[43] = f) : f = A[43];
            let ef = f;
            A[44] !== em ? (v = (0, a.jsx)(r0.a, {
                ref: ei,
                className: "no-drag",
                label: em,
                size: "toolbar"
            }), A[44] = em, A[45] = v) : v = A[45], A[46] !== en || A[47] !== em || A[48] !== v ? (x = (0, a.jsx)(af.a, {
                content: em,
                disabled: en,
                children: v
            }), A[46] = en, A[47] = em, A[48] = v, A[49] = x) : x = A[49];
            let ev = x;
            A[50] !== ef || A[51] !== ev || A[52] !== J || A[53] !== ed || A[54] !== eg || A[55] !== H ? (C = ed ? (0, a.jsx)(ou, {
                conversationId: H,
                getBaseItems: ef,
                menuTriggerRef: ei,
                navigate: J,
                onBeforeOpen: eg,
                onOpenChange: er,
                children: ev
            }) : (0, a.jsx)(rJ.a, {
                preserveBrowserContextMenu: !0,
                getItems: () => ef(),
                onBeforeOpen: eg,
                onOpenChange: er,
                renderItem: r2.b,
                trigger: "click",
                children: ev
            }), A[50] = ef, A[51] = ev, A[52] = J, A[53] = ed, A[54] = eg, A[55] = H, A[56] = C) : C = A[56];
            let ey = "shortcut" === ee,
                ex = null != ee;
            return A[57] !== ee ? (w = () => {
                el.current = "menu" === ee ? ei.current : null, et(null)
            }, A[57] = ee, A[58] = w) : w = A[58], A[59] === Symbol.for("react.memo_cache_sentinel") ? (I = e => {
                let t = el.current;
                if (el.current = null, null == t) return;
                e.preventDefault();
                let n = t.ownerDocument.activeElement;
                t.isConnected && (n === t.ownerDocument.body || e.target instanceof HTMLElement && e.target.contains(n)) && t.focus({
                    preventScroll: !0
                })
            }, A[59] = I) : I = A[59], A[60] !== ep || A[61] !== eu || A[62] !== ey || A[63] !== ex || A[64] !== w || A[65] !== M ? (S = (0, a.jsx)(r7.a, {
                allowArtifactDeletion: !0,
                autoFocusConfirm: ey,
                open: ex,
                onOpenChange: w,
                onCloseAutoFocus: I,
                isDeleting: eu,
                onConfirm: ep,
                title: M
            }), A[60] = ep, A[61] = eu, A[62] = ey, A[63] = ex, A[64] = w, A[65] = M, A[66] = S) : S = A[66], A[67] !== C || A[68] !== S ? (E = (0, a.jsxs)(a.Fragment, {
                children: [C, S]
            }), A[67] = C, A[68] = S, A[69] = E) : E = A[69], E
        }

        function ov() {}

        function oy() {
            let e, t, n, o = (0, r.c)(8),
                s = (0, b.a)(),
                [i, l] = (0, y.useState)(!1);
            o[0] !== s ? (e = s.formatMessage(ob.more), o[0] = s, o[1] = e) : e = o[1];
            let c = e;
            return o[2] !== c ? (t = (0, a.jsx)(r0.a, {
                className: "no-drag",
                label: c,
                size: "toolbar"
            }), o[2] = c, o[3] = t) : t = o[3], o[4] !== i || o[5] !== c || o[6] !== t ? (n = (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(rJ.a, {
                    preserveBrowserContextMenu: !0,
                    getItems: ox,
                    onOpenChange: l,
                    renderItem: r2.b,
                    trigger: "click",
                    children: (0, a.jsx)(af.a, {
                        content: c,
                        disabled: i,
                        children: t
                    })
                })
            }), o[4] = i, o[5] = c, o[6] = t, o[7] = n) : n = o[7], n
        }

        function ox() {
            return (0, r2.a)([])
        }
        let ob = (0, rZ.f)({
            chatActions: {
                id: "chatgpt.conversation.header.control.actions.label",
                defaultMessage: "Chat actions",
                description: "Tooltip and accessible name for the icon-only menu of actions for the current chat in the conversation header. Keep this action label concise."
            },
            more: {
                id: "chatgpt.conversation.header.control.more.label",
                defaultMessage: "More",
                description: "Short tooltip and accessible label for the icon-only overflow control in the active ChatGPT conversation header. It opens additional actions for the current chat. Sibling header controls include Share. Keep this single word concise and do not add punctuation. No placeholders."
            }
        });
        var oC = n("dLcZ"),
            o_ = n("W5pg"),
            ow = n("I7bK"),
            oI = n("QcW8"),
            oS = n("yC2B");

        function oj(e) {
            let t, n, o, s, c, d, u, h, m, g, f = (0, r.c)(32),
                {
                    header: v,
                    courseShortcut: y,
                    progress: x
                } = e,
                {
                    titleBarLeftInset: C,
                    rightPanelAnimatedWidth: _,
                    isContentFullWidth: w
                } = (0, ow.g)(),
                I = (0, p.z)(oI.ab),
                S = (0, p.z)(oI.db),
                j = (0, b.a)();
            f[0] !== j.locale ? (t = (0, oS.a)(j.locale), f[0] = j.locale, f[1] = t) : t = f[1];
            let T = t,
                E = I?.mode === "split" && "left" === S != ("rtl" === T);
            f[2] !== E || f[3] !== w ? (n = e => E && !w ? e : 0, f[2] = E, f[3] = w, f[4] = n) : n = f[4];
            let P = (0, o_.a)(_, n);
            f[5] !== P || f[6] !== C ? (o = [C, P], f[5] = P, f[6] = C, f[7] = o) : o = f[7];
            let k = (0, o_.a)(o, oT);
            f[8] !== k || f[9] !== P ? (s = {
                "--learning-header-left-inset": k,
                insetInlineStart: P
            }, f[8] = k, f[9] = P, f[10] = s) : s = f[10];
            let M = s;
            f[11] !== v ? (c = null == v ? null : (0, a.jsx)("div", {
                className: "min-w-0 flex-1",
                children: v
            }), f[11] = v, f[12] = c) : c = f[12], f[13] !== y ? (d = null == y ? null : (0, a.jsx)("div", {
                className: "flex min-w-0 flex-1",
                children: y
            }), f[13] = y, f[14] = d) : d = f[14], f[15] !== c || f[16] !== d ? (u = (0, a.jsxs)("div", {
                className: "flex w-full min-w-0 items-center gap-toolbar-action",
                children: [c, d]
            }), f[15] = c, f[16] = d, f[17] = u) : u = f[17];
            let R = u;
            if (null == x) return R;
            if (I?.isVisible && "full" === I.mode) {
                let e, t, n;
                return f[18] !== y ? (e = null == y ? null : (0, a.jsx)("div", {
                    className: "flex min-w-0 flex-1",
                    children: y
                }), f[18] = y, f[19] = e) : e = f[19], f[20] !== x ? (t = (0, a.jsx)("div", {
                    className: "min-w-0 flex-1",
                    children: x
                }), f[20] = x, f[21] = t) : t = f[21], f[22] !== t || f[23] !== e ? (n = (0, a.jsx)(A.a.HeaderAction, {
                    actionId: "sectioned-conversation-navigation",
                    align: "center",
                    children: (0, a.jsxs)("div", {
                        className: "flex min-w-0 items-center gap-toolbar-action",
                        children: [e, t]
                    })
                }), f[22] = t, f[23] = e, f[24] = n) : n = f[24], n
            }
            return f[25] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, i.b)("relative flex max-w-[min(var(--learning-progress-max-width),max(0px,calc(100cqw-2*(var(--app-shell-header-end-actions-width)+var(--spacing)*3))))] min-w-0 items-center", "[--learning-progress-max-width:var(--thread-content-max-width)]", "@max-thread-expanded/home-mode-toggle:[--learning-progress-max-width:var(--thread-content-compact-max-width,var(--thread-content-max-width))]"), f[25] = h) : h = f[25], f[26] !== R ? (m = (0, a.jsx)("div", {
                className: "absolute inset-y-0 end-full me-toolbar-action flex w-[max(0px,calc((100cqw-100%)/2-var(--spacing-toolbar-action)-var(--spacing)*2-var(--learning-header-left-inset)))] min-w-0 items-center overflow-hidden",
                "data-app-shell-header-obstacle": !0,
                children: R
            }), f[26] = R, f[27] = m) : m = f[27], f[28] !== x || f[29] !== M || f[30] !== m ? (g = (0, a.jsx)(A.a.HeaderAction, {
                actionId: "sectioned-conversation-navigation",
                align: "center",
                children: (0, a.jsxs)(l.a.div, {
                    className: h,
                    style: M,
                    children: [m, x]
                })
            }), f[28] = x, f[29] = M, f[30] = m, f[31] = g) : g = f[31], g
        }

        function oT(e) {
            let [t, n] = e;
            return `${Math.max(0,t-n)}px`
        }
        var oE = n("X0li");
        let oA = (0, e2.a)(oE.d),
            oP = (0, e2.a)(async () => (await n.e(328371).then(n.bind(n, "uPMT"))).SectionHistory),
            ok = (0, e2.a)(async () => (await n.e(270015).then(n.bind(n, "r5vN"))).SectionNavigation);
        var oM = n("lX86");
        n("i1of");
        var oR = n("a4V1"),
            oN = n("alJ6"),
            oO = n("u9iS"),
            oB = n("KidQ");
        let oG = {
            addInitialContentToHistory: !0,
            enableCodeBlocks: !1,
            enableSelectedTextLinks: !1,
            enableFileMentions: !0,
            enableSkillMentions: !1,
            enableSlashCommands: {
                triggers: ["/"]
            }
        };

        function oF(e) {
            let t, n, o, s, i, l = (0, r.c)(15),
                {
                    children: c,
                    draftKey: d,
                    enableInlineSystemHints: u
                } = e,
                h = (0, p.y)(eo.a),
                m = (0, y.useContext)(td.a),
                g = u ? "chatgpt" : void 0;
            return l[0] !== u || l[1] !== g ? (t = {
                enableInlineSystemHints: u,
                variant: g
            }, l[0] = u, l[1] = g, l[2] = t) : t = l[2], l[3] !== d || l[4] !== h ? (n = () => ({
                defaultText: h.get(e7.s, d),
                defaultTextKind: "prompt"
            }), l[3] = d, l[4] = h, l[5] = n) : n = l[5], l[6] !== m ? (o = () => {
                let e = m?.input.current ?? document.querySelector("#pending-conversation-input");
                return null == e || null == m ? null : {
                    element: e,
                    locationKey: m.locationKey
                }
            }, l[6] = m, l[7] = o) : o = l[7], l[8] !== c ? (s = e => null == e ? null : c(e), l[8] = c, l[9] = s) : s = l[9], l[10] !== t || l[11] !== n || l[12] !== o || l[13] !== s ? (i = (0, a.jsx)(oB.a, {
                controllerOptions: oG,
                initialSuggestionOptions: t,
                getInitialContent: n,
                getInitialInput: o,
                children: s
            }), l[10] = t, l[11] = n, l[12] = o, l[13] = s, l[14] = i) : i = l[14], i
        }
        var oz = n("ygKd"),
            oL = n("KSir"),
            oD = n("fNPc"),
            oH = n("vVgo");
        let oW = (0, e2.a)(async () => (await n.e(642007).then(n.bind(n, "KhUL"))).CourseHeaderShortcut);

        function oq(e) {
            let t, n = (0, r.c)(3),
                {
                    conversationId: o
                } = e,
                s = (0, es.h)("4035922817");
            return n[0] !== o || n[1] !== s ? (t = s ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(oW, {
                    conversationId: o
                })
            }) : null, n[0] = o, n[1] = s, n[2] = t) : t = n[2], t
        }
        var oU = n("QPeR"),
            oK = n("MgyE"),
            oV = n("gyrn"),
            oY = n("wnpN"),
            oQ = n("rcFj"),
            o$ = n("M3Kf");

        function oX(e) {
            let t, n, o, i, l, c, d = (0, r.c)(21),
                {
                    conversationId: u
                } = e,
                h = (0, p.y)(eo.a),
                m = (0, p.x)(F.j, u),
                g = (0, p.z)(eB.b),
                {
                    search: f
                } = (0, _.Y)();
            if (d[0] !== f) {
                let e = new URLSearchParams(f);
                t = e.get("messageId") ?? e.get("message"), n = e.has("selectedTextQuery"), d[0] = f, d[1] = t, d[2] = n
            } else t = d[1], n = d[2];
            let v = n;
            d[3] !== v || d[4] !== t || d[5] !== m ? (o = ["chatgpt-message-target", m, t, v], d[3] = v, d[4] = t, d[5] = m, d[6] = o) : o = d[6];
            let y = null != m && null != t && g > 0,
                x = v ? 0 : 1 / 0;
            d[7] !== u || d[8] !== v || d[9] !== t || d[10] !== h || d[11] !== m ? (i = async e => {
                let {
                    signal: n
                } = e;
                if (null != m) {
                    if (null != t && v) {
                        let e = h.get(F.L, u),
                            n = e?.[t] ?? (null == e ? void 0 : Object.values(e).find(e => e.message?.id === t));
                        if (n?.message != null) return !0
                    }
                    await (0, eO.a)(h, m, n)
                }
                return !0
            }, d[7] = u, d[8] = v, d[9] = t, d[10] = h, d[11] = m, d[12] = i) : i = d[12], d[13] !== o || d[14] !== y || d[15] !== x || d[16] !== i ? (l = {
                queryKey: o,
                enabled: y,
                staleTime: x,
                retry: !1,
                queryFn: i
            }, d[13] = o, d[14] = y, d[15] = x, d[16] = i, d[17] = l) : l = d[17];
            let {
                isError: b,
                refetch: w
            } = (0, s.a)(l);
            return d[18] !== b || d[19] !== w ? (c = b ? (0, a.jsx)(eX.a, {
                color: "secondary",
                onClick: () => void w(),
                children: (0, a.jsx)(C.a, {
                    id: "chatgpt.pagination.retryMessage",
                    defaultMessage: "Retry loading this message",
                    description: "Button to retry loading the full conversation for a link to an older message"
                })
            }) : null, d[18] = b, d[19] = w, d[20] = c) : c = d[20], c
        }
        var oZ = n("ckwE");

        function oJ(e) {
            let t, n = (0, r.c)(3),
                {
                    children: o
                } = e,
                [s] = (0, y.useState)(o0);
            return n[0] !== s || n[1] !== o ? (t = (0, a.jsx)(eG.a, {
                value: s,
                children: o
            }), n[0] = s, n[1] = o, n[2] = t) : t = n[2], t
        }

        function o0() {
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

        function o1(e) {
            let t, n = (0, r.c)(2),
                {
                    children: o
                } = e;
            return n[0] !== o ? (t = (0, a.jsx)(oZ.a, {
                children: (0, a.jsx)(oJ, {
                    children: o
                })
            }), n[0] = o, n[1] = t) : t = n[1], t
        }
        var o2 = n("WLgA"),
            o3 = n("TmaW"),
            o4 = n("MDmT"),
            o6 = n("K45w"),
            o5 = n("jCHb"),
            o8 = n("V8uZ");

        function o7(e) {
            let t = e.querySelector("[data-dil-message-id]") ?? e;
            return t.checkVisibility() && null == t.querySelector("[data-dil-render-failed]") && t.innerText.trim().length > 0
        }
        n("CSxw");
        var o9 = n("NqfB"),
            se = n("JEFL"),
            st = n("moBM");
        let sn = '[data-markdown-text-style="assistant-message"]',
            sa = (0, p.d)(eo.a, (e, t) => {
                let {
                    conversationId: n,
                    messageId: a
                } = e, {
                    get: r
                } = t;
                return null == a ? null : r(F.L, n)?.[a]?.message ?? null
            });

        function sr(e) {
            let t, n, o = (0, r.c)(5),
                s = `[data-chatgpt-conversation-selection-target="${e.conversationId}"]`;
            return o[0] !== e ? (t = t => (0, a.jsx)(so, {
                ...e,
                selection: t
            }), o[0] = e, o[1] = t) : t = o[1], o[2] !== s || o[3] !== t ? (n = (0, a.jsx)(o9.a, {
                align: "start",
                targetSelector: s,
                children: t
            }), o[2] = s, o[3] = t, o[4] = n) : n = o[4], n
        }

        function so(e) {
            let t, o, s, i, l, c, d, u = (0, r.c)(30),
                {
                    conversationId: h,
                    moreDetailsEnabled: m,
                    onAddSelectedText: g,
                    selection: f
                } = e,
                v = (0, p.y)(z.a),
                y = (0, b.a)(),
                x = (0, es.h)("4290238484"),
                C = (0, es.h)("473637331"),
                _ = (0, p.z)(st.a),
                w = (0, p.x)(F.x, h);
            u[0] !== w || u[1] !== _ || u[2] !== v ? (t = _ && "tpp" === w && "chatgpt-thread" === v.value.routeKind && null == v.value.workSideChat && !0, u[0] = w, u[1] = _, u[2] = v, u[3] = t) : t = u[3];
            let I = t;
            u[4] !== h || u[5] !== f.selectionRange ? (o = function(e) {
                let {
                    conversationId: t,
                    range: n
                } = e, a = n.startContainer instanceof Element ? n.startContainer : n.startContainer.parentElement, r = n.endContainer instanceof Element ? n.endContainer : n.endContainer.parentElement, o = a?.closest(sn);
                if (n.collapsed || null == o || !o.isConnected || o !== r?.closest(sn)) return null;
                let s = o.parentElement,
                    i = s?.getAttribute("data-chatgpt-selection-message-id");
                return !i || s?.getAttribute("data-chatgpt-selection-conversation-id") !== t || [...o.querySelectorAll('[data-writing-block-variant], [data-conversation-component="learning"], [contenteditable="true"], [data-markdown-copy="exclude"]')].some(e => n.intersectsNode(e)) ? null : {
                    markdownElement: o,
                    messageId: i
                }
            }({
                conversationId: h,
                range: f.selectionRange
            }), u[4] = h, u[5] = f.selectionRange, u[6] = o) : o = u[6];
            let S = o,
                j = S?.messageId ?? null;
            u[7] !== h || u[8] !== j ? (s = {
                conversationId: h,
                messageId: j
            }, u[7] = h, u[8] = j, u[9] = s) : s = u[9];
            let T = (0, p.x)(sa, s),
                E = (0, p.x)(F.j, h),
                A = x && m && null != E && null != S && T?.author.role === "assistant";
            return u[10] !== I || u[11] !== v ? (i = I ? e => {
                n.e(971224).then(n.bind(n, "f8of")).then(t => {
                    let {
                        createAndOpenWorkSideChat: n
                    } = t;
                    return n(v, {
                        target: "right",
                        selectedText: e
                    })
                })
            } : void 0, u[10] = I, u[11] = v, u[12] = i) : i = u[12], u[13] !== A || u[14] !== C || u[15] !== g || u[16] !== f.selectionRange || u[17] !== S ? (l = !A || C ? e => {
                g(e, S?.messageId, null == S ? void 0 : function(e, t, n) {
                    let a = 0;
                    for (let r of n5(e, n.trim())) {
                        if (0 >= t.compareBoundaryPoints(Range.START_TO_START, r)) break;
                        a++
                    }
                    return a
                }(S.markdownElement, f.selectionRange, e))
            } : void 0, u[13] = A, u[14] = C, u[15] = g, u[16] = f.selectionRange, u[17] = S, u[18] = l) : l = u[18], u[19] !== A || u[20] !== h || u[21] !== y || u[22] !== v || u[23] !== S ? (c = A ? e => {
                Promise.all([n.e(753405), n.e(585419), n.e(877700), n.e(353230), n.e(81461), n.e(214652), n.e(789902), n.e(62441), n.e(454441), n.e(877533), n.e(167649), n.e(509282), n.e(142274), n.e(975420), n.e(284782), n.e(771523)]).then(n.bind(n, "zRlR")).then(t => {
                    let {
                        openChatGptEntitySidePanel: n
                    } = t;
                    return n(v, {
                        askSidebarParams: {
                            query: e
                        },
                        category: "ask_sidebar",
                        contentReferenceStartIndex: 0,
                        extraParams: null,
                        locale: y.locale,
                        messageId: S.messageId,
                        query: y.formatMessage({
                            id: "chatgpt.selection.moreDetailsTitle",
                            defaultMessage: "More details",
                            description: "Title of the side panel explaining selected text from an assistant response"
                        }),
                        shouldBlockExternalEgress: v.get(eI.d, h),
                        sourceConversationId: h
                    })
                })
            } : void 0, u[19] = A, u[20] = h, u[21] = y, u[22] = v, u[23] = S, u[24] = c) : c = u[24], u[25] !== f.selectedText || u[26] !== i || u[27] !== l || u[28] !== c ? (d = (0, a.jsx)(se.a, {
                conversationTerminology: "chat",
                selectedText: f.selectedText,
                onOpenSideChat: i,
                onAddSelectedText: l,
                onMoreDetails: c
            }), u[25] = f.selectedText, u[26] = i, u[27] = l, u[28] = c, u[29] = d) : d = u[29], d
        }
        var ss = n("Fjze");

        function si(e) {
            let t, n, a, o = (0, r.c)(7),
                {
                    sharedConversationId: s
                } = e,
                i = (0, p.y)(eo.a),
                l = null != s;
            o[0] !== i || o[1] !== s ? (t = () => {
                null != s && (r8.Request.safePost("/received-shares/open", {
                    requestBody: {
                        share_kind: "conversation",
                        share_id: s
                    }
                }).then(() => i.queryClient.invalidateQueries({
                    queryKey: ["opened-shared-links"]
                })).catch(sl), (0, ed.a)(i, ss.a, {
                    sharedConversationId: s
                }))
            }, o[0] = i, o[1] = s, o[2] = t) : t = o[2];
            let c = (0, y.useEffectEvent)(t);
            return o[3] !== c ? (n = () => {
                c()
            }, o[3] = c, o[4] = n) : n = o[4], o[5] !== l ? (a = [l], o[5] = l, o[6] = a) : a = o[6], (0, y.useEffect)(n, a), null
        }

        function sl() {}
        var sc = n("GigQ"),
            sd = n("JKdL"),
            su = n("d107"),
            sh = n("HOLv"),
            sp = n("FGv0"),
            sm = n("r9i9"),
            sg = n("tdfh"),
            sf = n("SEBt"),
            sv = n("uQqo"),
            sy = n("yi1v"),
            sx = n("hMfc");

        function sb(e) {
            let t, o, s, i, l, c = (0, r.c)(12),
                {
                    data: d
                } = e,
                u = (0, p.y)(eo.a),
                h = (0, b.a)();
            c[0] !== h ? (t = h.formatMessage(ax.a.headerShare), c[0] = h, c[1] = t) : t = c[1];
            let m = t,
                [g, f] = (0, y.useState)(!1);
            return c[2] !== d || c[3] !== g || c[4] !== u ? (o = () => {
                g || (f(!0), (async function(e, t) {
                    let a = t.sharedPost,
                        [r, ...o] = a?.attachments[0]?.kind === "media_generation" ? (0, sv.a)(a, (0, sv.b)(a)) : [],
                        s = crypto.randomUUID();
                    (0, sf.b)(e, {
                        attachmentType: t.attachmentType,
                        contentType: t.contentType,
                        shareId: t.shareId,
                        shareSessionId: s
                    });
                    let i = t.dialogProps.receiverShareLink;
                    if ((0, sy.a)() && null != i && ("conversation" === i.contentType || "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_MESSAGE_SLICE" === t.attachmentType)) {
                        if ("unsupported" !== await (0, sy.b)(e, {
                                url: i.shareLinkUrl,
                                title: t.dialogProps.title ?? void 0
                            }, {
                                actor: "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER",
                                attachmentType: t.attachmentType,
                                contentType: t.contentType,
                                shareId: t.shareId,
                                shareSessionId: s,
                                source: "CHATGPT_SHARE_FLOW_SOURCE_RECEIVER_HEADER"
                            })) return;
                        if ("conversation" === i.contentType) return void(0, r5.f)(e, sg.a, {
                            ...t.dialogProps,
                            shareSessionId: s
                        })
                    }
                    if (i?.contentType === "conversation") {
                        let a = (0, sf.a)(e, {
                                actor: "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER",
                                shareId: t.shareId,
                                shareSessionId: s,
                                source: "CHATGPT_SHARE_FLOW_SOURCE_RECEIVER_HEADER",
                                usedExistingLink: !0,
                                omitSheetType: !0
                            }),
                            r = await (0, sp.a)(Promise.resolve(i.shareLinkUrl));
                        if (a({
                                result: r ? "link-copied" : "copy-failed",
                                shareId: t.shareId
                            }), r) {
                            let {
                                showConversationShareCopiedToast: t
                            } = await n.e(555532).then(n.bind(n, "euaP"));
                            t(e, null, !0 === i.isWorkspaceOnly)
                        } else(0, r5.f)(e, sg.a, {
                            ...t.dialogProps,
                            previewTurns: (0, sm.j)(t.conversation, t.conversation.current_node ?? t.dialogProps.currentNodeId, 1 / 0),
                            recoveryShareLink: i,
                            shareSessionId: s
                        });
                        return
                    }(0, r5.f)(e, sg.a, {
                        ...t.dialogProps,
                        image: r?.src == null ? void 0 : {
                            alt: t.dialogProps.title ?? "",
                            item: r,
                            previewSrc: r.src,
                            additionalPublishedPreviewUrls: o.flatMap(e => null == e.src ? [] : [e.src])
                        },
                        previewTurns: null != r ? void 0 : (0, sm.j)(t.conversation, t.conversation.current_node ?? t.dialogProps.currentNodeId, 1 / 0),
                        privacyNotices: (0, sm.k)({
                            conversation: t.conversation,
                            projectId: null
                        }),
                        shareSessionId: s
                    })
                })(u, d).finally(() => f(!1)))
            }, c[2] = d, c[3] = g, c[4] = u, c[5] = o) : o = c[5], c[6] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, a.jsx)(sh.a, {
                asset: sx.a
            }), i = (0, a.jsx)(C.a, {
                ...ax.a.headerShare
            }), c[6] = s, c[7] = i) : (s = c[6], i = c[7]), c[8] !== g || c[9] !== m || c[10] !== o ? (l = (0, a.jsxs)(eX.a, {
                "aria-label": m,
                color: "ghostActive",
                loading: g,
                size: "toolbar",
                onClick: o,
                children: [s, i]
            }), c[8] = g, c[9] = m, c[10] = o, c[11] = l) : l = c[11], l
        }
        var sC = n("JUxu");
        let s_ = (0, y.lazy)(async () => ({
            default: (await Promise.resolve().then(n.bind(n, "taaw"))).CodexThreadReportDialog
        }));

        function sw(e) {
            let t, n, o, s, i = (0, r.c)(11),
                {
                    sharedConversationId: l
                } = e,
                c = (0, p.y)(eo.a),
                d = (0, p.x)(eS.f, (0, y.useContext)(R.a));
            if (null != d) {
                let e, t;
                return i[0] !== d ? (e = (0, eS.b)(d), i[0] = d, i[1] = e) : e = i[1], i[2] !== e ? (t = (0, a.jsx)(sC.a, {
                    imageOnly: e
                }), i[2] = e, i[3] = t) : t = i[3], t
            }
            return i[4] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)("div", {
                className: "text-secondary",
                children: (0, a.jsx)(C.a, {
                    id: "chatgptConversations.sharedConversation.copyDisclaimer",
                    defaultMessage: "This is a copy of a shared ChatGPT chat. It won't be added to memory.",
                    description: "Informational notice above a shared ChatGPT chat explaining that the copy will not be added to the viewer's memory"
                })
            }), i[4] = t) : t = i[4], i[5] !== c || i[6] !== l ? (n = e => {
                if (null == l) return;
                let t = e.currentTarget;
                (0, r5.f)(c, s_, {
                    reportEntityType: "share_link",
                    threadId: l,
                    onCloseAutoFocus: e => {
                        e.preventDefault();
                        let n = t.ownerDocument.activeElement;
                        t.isConnected && (n === t.ownerDocument.body || e.target instanceof HTMLElement && e.target.contains(n)) && t.focus({
                            preventScroll: !0
                        })
                    }
                }), (0, sf.c)(c, l)
            }, i[5] = c, i[6] = l, i[7] = n) : n = i[7], i[8] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, a.jsx)(C.a, {
                id: "chatgptConversations.sharedConversation.reportButton",
                defaultMessage: "Report conversation",
                description: "Button above a shared ChatGPT conversation in Codex Desktop that opens ChatGPT's report modal for reporting another person's shared conversation"
            }), i[8] = o) : o = i[8], i[9] !== n ? (s = (0, a.jsxs)("div", {
                className: "flex flex-col items-center gap-1 text-center text-xs select-none",
                children: [t, (0, a.jsx)(eX.a, {
                    className: "font-semibold",
                    color: "ghostActive",
                    onClick: n,
                    children: o
                })]
            }), i[9] = n, i[10] = s) : s = i[10], s
        }
        var sI = n("zbjM"),
            sS = n("MVHH"),
            sj = n("xSOA"),
            sT = n("rhKI"),
            sE = n("PP3M"),
            sA = n("jAnS"),
            sP = n("CFOe"),
            sk = n("JNtf"),
            sM = n("mUDD");

        function sR(e) {
            let t, n, o, s, i, l, c, d, u, h, p, m, g, f = (0, r.c)(31),
                {
                    canSave: v,
                    isPending: y,
                    onCancel: x,
                    onClose: b,
                    onSave: _
                } = e;
            f[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(C.a, {
                id: "chatgptConversations.temporaryChat.save.close",
                defaultMessage: "Close",
                description: "Accessible label for the close button in the temporary chat save confirmation dialog."
            }), f[0] = t) : t = f[0], f[1] !== y || f[2] !== b ? (n = e => {
                e || y || b()
            }, f[1] = y, f[2] = b, f[3] = n) : n = f[3];
            let w = !y;
            f[4] !== v || f[5] !== _ ? (o = e => {
                e.preventDefault(), v && _()
            }, f[4] = v, f[5] = _, f[6] = o) : o = f[6], f[7] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, a.jsx)(sk.d, {
                children: (0, a.jsx)(C.a, {
                    id: "chatgptConversations.temporaryChat.save.title",
                    defaultMessage: "Save chat?",
                    description: "Title of the confirmation dialog for converting a temporary ChatGPT conversation into a regular saved chat."
                })
            }), f[7] = s) : s = f[7], f[8] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(sM.e, {
                children: (0, a.jsx)(sM.d, {
                    className: "select-none",
                    title: s,
                    subtitle: (0, a.jsx)(sk.c, {
                        children: (0, a.jsx)(C.a, {
                            id: "chatgptConversations.temporaryChat.save.description.regularChatSettings",
                            defaultMessage: "This chat will now be included in your history. It will follow your memory and model training settings used for regular chats.",
                            description: "Body of the confirmation dialog shown when a user saves a temporary ChatGPT conversation. Explains before they confirm that the chat will appear in history and follow the memory and model training settings already configured for regular chats."
                        })
                    })
                })
            }), f[8] = i) : i = f[8], f[9] !== x || f[10] !== b ? (l = () => {
                x?.(), b()
            }, f[9] = x, f[10] = b, f[11] = l) : l = f[11], f[12] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)(C.a, {
                id: "chatgptConversations.temporaryChat.save.cancel",
                defaultMessage: "Cancel",
                description: "Secondary button that closes the save confirmation dialog and leaves the ChatGPT conversation temporary."
            }), f[12] = c) : c = f[12], f[13] !== y || f[14] !== l ? (d = (0, a.jsx)(eX.a, {
                color: "secondary",
                disabled: y,
                onClick: l,
                children: c
            }), f[13] = y, f[14] = l, f[15] = d) : d = f[15];
            let I = !v;
            return f[16] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, a.jsx)(C.a, {
                id: "chatgptConversations.temporaryChat.save.confirm",
                defaultMessage: "Save",
                description: "Primary button that saves a temporary ChatGPT conversation to regular chat history."
            }), f[16] = u) : u = f[16], f[17] !== y || f[18] !== I ? (h = (0, a.jsx)(eX.a, {
                color: "primary",
                disabled: I,
                loading: y,
                type: "submit",
                children: u
            }), f[17] = y, f[18] = I, f[19] = h) : h = f[19], f[20] !== h || f[21] !== d ? (p = (0, a.jsx)(sM.e, {
                children: (0, a.jsxs)(sM.c, {
                    children: [d, h]
                })
            }), f[20] = h, f[21] = d, f[22] = p) : p = f[22], f[23] !== p || f[24] !== o ? (m = (0, a.jsxs)(sM.b, {
                as: "form",
                onSubmit: o,
                children: [i, p]
            }), f[23] = p, f[24] = o, f[25] = m) : m = f[25], f[26] !== y || f[27] !== m || f[28] !== n || f[29] !== w ? (g = (0, a.jsx)(sk.a, {
                open: !0,
                dialogCloseLabel: t,
                onOpenChange: n,
                shouldIgnoreClickOutside: y,
                showDialogClose: w,
                size: "narrow",
                children: m
            }), f[26] = y, f[27] = m, f[28] = n, f[29] = w, f[30] = g) : g = f[30], g
        }

        function sN(e) {
            (0, ar.e)(e).catch(() => {
                nA.a.warning("Failed to acknowledge temporary chat save coachmark")
            })
        }

        function sO(e) {
            let t, n = (0, r.c)(2),
                {
                    conversationId: o
                } = e;
            return n[0] !== o ? (t = (0, a.jsxs)(a.Fragment, {
                children: [null, (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(sB, {
                        conversationId: o
                    })
                })]
            }), n[0] = o, n[1] = t) : t = n[1], t
        }

        function sB(e) {
            let t, n = (0, r.c)(2),
                {
                    conversationId: o
                } = e;
            return (0, p.z)(sE.e) ? (n[0] !== o ? (t = (0, a.jsx)(sG, {
                conversationId: o
            }), n[0] = o, n[1] = t) : t = n[1], t) : null
        }

        function sG(e) {
            let t, n, o, s, i, l, c, d, u, h, m, g, f, v = (0, r.c)(49),
                {
                    conversationId: x
                } = e,
                w = (0, p.y)(eo.a),
                I = (0, b.a)(),
                S = (0, _._)(),
                [j, T] = (0, y.useState)(!1),
                [E, A] = (0, y.useState)(!1),
                [P, k] = (0, y.useState)(!1),
                [M, R] = (0, y.useState)(!1),
                N = (0, y.useRef)(!1),
                O = (0, p.z)(oe.p).data,
                B = (0, p.x)(F.j, x),
                G = (0, p.x)(F.W, x),
                z = (0, p.x)(F.H, x),
                L = (0, p.x)(e7.i, x);
            v[0] !== x || v[1] !== w ? (t = {
                mutationFn: e => {
                    let {
                        sourceConversationId: t,
                        selectedLeafId: n
                    } = e;
                    if (w.get(F.H, x) || w.get(e7.i, x) || t !== w.get(F.j, x) || n !== w.get(F.W, x)) throw Error("Cannot save an unavailable temporary chat message");
                    return r8.Request.safePost("/conversation/{conversation_id}/save", {
                        parameters: {
                            path: {
                                conversation_id: t
                            }
                        },
                        requestBody: {
                            selected_leaf_id: n
                        },
                        isExpectedError: sH
                    }).then(sD)
                },
                retry: sL
            }, v[0] = x, v[1] = w, v[2] = t) : t = v[2];
            let {
                mutateAsync: D,
                isPending: H
            } = (0, sj.a)(t), W = null != B && null != G && !z && !L && !H && !E;
            v[3] !== I ? (n = I.formatMessage({
                id: "chatgptConversations.temporaryChat.save.button",
                defaultMessage: "Save chat",
                description: "Tooltip and accessible label for the bookmark button in a temporary ChatGPT conversation. Opens a confirmation dialog to save it to regular history."
            }), v[3] = I, v[4] = n) : n = v[4];
            let q = n;
            v[5] !== O?.eligibleAnnouncements ? (o = O?.eligibleAnnouncements?.includes(oe.h), v[5] = O?.eligibleAnnouncements, v[6] = o) : o = v[6];
            let U = !0 === o,
                K = !M && (P || U && W);
            v[7] !== x || v[8] !== P || v[9] !== w || v[10] !== K ? (s = () => {
                if (!K || P || N.current) return;
                let e = !1;
                return queueMicrotask(() => {
                    e || N.current || (N.current = !0, (0, ed.a)(w, sS.Ab, {
                        personalizationMode: (0, sT.a)((0, sE.k)(w, x))
                    }), k(!0), sN(w))
                }), () => {
                    e = !0
                }
            }, i = [x, P, w, K], v[7] = x, v[8] = P, v[9] = w, v[10] = K, v[11] = s, v[12] = i) : (s = v[11], i = v[12]), (0, y.useEffect)(s, i), v[13] !== w ? (l = () => {
                R(!0), N.current || (N.current = !0, sN(w))
            }, v[13] = w, v[14] = l) : l = v[14];
            let V = l;
            v[15] !== W || v[16] !== x || v[17] !== I || v[18] !== S || v[19] !== D || v[20] !== w || v[21] !== G || v[22] !== B ? (c = async function() {
                let e;
                if (!W || null == B || null == G) return;
                let t = (0, sT.a)((0, sE.k)(w, x));
                (0, ed.a)(w, sS.Bb, {
                    personalizationMode: t
                });
                try {
                    e = (await D({
                        sourceConversationId: B,
                        selectedLeafId: G
                    })).conversation_id
                } catch (e) {
                    (0, ed.a)(w, sS.Cb, {
                        personalizationMode: t,
                        failureCategory: (0, sT.b)(e)
                    }), w.get(ea.f).danger(I.formatMessage({
                        id: "chatgptConversations.temporaryChat.save.error",
                        defaultMessage: "Couldn't save this chat. Please try again.",
                        description: "Error toast after saving a temporary ChatGPT conversation fails. The chat remains temporary and the user can retry."
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.temporaryChat.save.error"
                        }
                    });
                    return
                }
                A(!0), T(!1), (0, os.H)(w), (0, os.K)(w, B, "remove"), (0, os.K)(w, e, "refresh"), S((0, sA.c)(e), {
                    replace: !0
                }), w.get(ea.f).success(I.formatMessage({
                    id: "chatgptConversations.temporaryChat.save.success",
                    defaultMessage: "Chat saved. It will now appear in your chat history.",
                    description: "Success toast confirming that a formerly temporary ChatGPT conversation is now saved in regular history."
                })), r8.Request.safePost("/conversation/gen_title/{conversation_id}", {
                    parameters: {
                        path: {
                            conversation_id: e
                        }
                    },
                    requestBody: {
                        message_id: G
                    }
                }).then(sz).then(t => {
                    (0, F.$b)({
                        scope: w,
                        conversationId: e,
                        title: t
                    }), w.query.setData(ar.chatGptConversationQueryById$, e, e => null == e ? e : {
                        ...e,
                        title: t
                    }), (0, os.H)(w), (0, os.K)(w, e, "refresh")
                }).catch(sF)
            }, v[15] = W, v[16] = x, v[17] = I, v[18] = S, v[19] = D, v[20] = w, v[21] = G, v[22] = B, v[23] = c) : c = v[23];
            let Y = c,
                Q = !W;
            v[24] !== x || v[25] !== w || v[26] !== K ? (d = () => {
                (0, ed.a)(w, sS.Eb, {
                    personalizationMode: (0, sT.a)((0, sE.k)(w, x)),
                    coachMarkVisible: K
                }), T(!0)
            }, v[24] = x, v[25] = w, v[26] = K, v[27] = d) : d = v[27], v[28] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, a.jsx)(t_.b, {
                icon: {
                    16: av.qb,
                    20: av.rb
                }
            }), v[28] = u) : u = v[28], v[29] !== q || v[30] !== Q || v[31] !== d ? (h = (0, a.jsx)(eX.a, {
                "aria-label": q,
                color: "toolbar",
                disabled: Q,
                size: "toolbar",
                uniform: !0,
                onClick: d,
                children: u
            }), v[29] = q, v[30] = Q, v[31] = d, v[32] = h) : h = v[32];
            let $ = h;
            return v[33] !== V || v[34] !== I || v[35] !== q || v[36] !== $ || v[37] !== K ? (m = K ? (0, a.jsx)(sP.a, {
                align: "end",
                description: (0, a.jsx)(C.a, {
                    id: "chatgptConversations.temporaryChat.save.coachmark.description",
                    defaultMessage: "Want to keep this chat? You can now save it to your history.",
                    description: "Body of a one-time onboarding coachmark anchored to the Save chat button after a user creates an eligible temporary chat."
                }),
                dismissLabel: I.formatMessage({
                    id: "chatgptConversations.temporaryChat.save.coachmark.dismiss",
                    defaultMessage: "Close tooltip",
                    description: "Accessible label for dismissing the temporary chat save coachmark."
                }),
                onDismiss: V,
                open: !0,
                side: "bottom",
                sideOffset: 10,
                title: (0, a.jsx)(C.a, {
                    id: "chatgptConversations.temporaryChat.save.button",
                    defaultMessage: "Save chat",
                    description: "Title of a one-time onboarding coachmark anchored to the Save chat button in a temporary ChatGPT conversation."
                }),
                tooltipClassName: "w-60",
                children: $
            }) : (0, a.jsx)(af.a, {
                content: q,
                children: $
            }), v[33] = V, v[34] = I, v[35] = q, v[36] = $, v[37] = K, v[38] = m) : m = v[38], v[39] !== W || v[40] !== x || v[41] !== Y || v[42] !== j || v[43] !== H || v[44] !== w ? (g = j ? (0, a.jsx)(sR, {
                canSave: W,
                isPending: H,
                onCancel: () => {
                    (0, ed.a)(w, sS.zb, {
                        personalizationMode: (0, sT.a)((0, sE.k)(w, x))
                    })
                },
                onClose: () => T(!1),
                onSave: () => void Y()
            }) : null, v[39] = W, v[40] = x, v[41] = Y, v[42] = j, v[43] = H, v[44] = w, v[45] = g) : g = v[45], v[46] !== m || v[47] !== g ? (f = (0, a.jsxs)(a.Fragment, {
                children: [m, g]
            }), v[46] = m, v[47] = g, v[48] = f) : f = v[48], f
        }

        function sF() {}

        function sz(e) {
            return nK.object({
                title: nK.string()
            }).parse(e).title
        }

        function sL(e, t) {
            return e < 1 && t instanceof ni.a && 412 === t.status && "conversation_precondition_failed" === t.errorCode
        }

        function sD(e) {
            return nK.object({
                conversation_id: nK.string().min(1)
            }).parse(e)
        }

        function sH(e) {
            return 412 === e.status && "conversation_precondition_failed" === e.errorCode
        }
        var sW = n("Sd4O");
        let sq = (0, p.d)(eo.a, (e, t) => {
            let {
                get: n
            } = t, a = n(sW.a, e);
            return null != a && n(L.e, a).data?.automation.plan_type === "language_learning"
        });
        var sU = n("AORd"),
            sK = n("J8FU"),
            sV = n("vpdG"),
            sY = n("Aluh"),
            sQ = n("mG6J");

        function s$(e) {
            let t, n, o = (0, r.c)(14),
                {
                    conversationId: s,
                    shouldBlockExternalEgress: i,
                    widgets: l
                } = e,
                c = (0, p.z)(sY.b);
            if (i) return null;
            if (o[0] !== c || o[1] !== s || o[2] !== l) {
                let e, n, r;
                o[4] !== c || o[5] !== s ? (e = e => c.has((0, aQ.e)(s, e.messageId)), o[4] = c, o[5] = s, o[6] = e) : e = o[6];
                let i = l.filter(e),
                    d = `chatgpt:${s}`;
                o[7] !== d ? (n = (0, m.Qe)(d), o[7] = d, o[8] = n) : n = o[8];
                let u = n;
                o[9] !== u || o[10] !== s ? (r = e => (0, a.jsx)(sQ.b, {
                    conversationId: u,
                    chatGptConversationId: s,
                    hostId: "local",
                    item: e
                }, e.messageId), o[9] = u, o[10] = s, o[11] = r) : r = o[11], t = i.map(r), o[0] = c, o[1] = s, o[2] = l, o[3] = t
            } else t = o[3];
            return o[12] !== t ? (n = (0, a.jsx)(a.Fragment, {
                children: t
            }), o[12] = t, o[13] = n) : n = o[13], n
        }
        var sX = n("JVSG"),
            sZ = {
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
            sJ = n("ebpE");

        function s0() {
            let e, t, n, o, s, i, l, c, d, u, h, m, g, f, v, x = (0, r.c)(40),
                b = (0, _._)(),
                C = (0, y.useContext)(tN.a);
            x[0] === Symbol.for("react.memo_cache_sentinel") ? (e = {
                name: "chatgpt.conversations"
            }, x[0] = e) : e = x[0];
            let w = (0, p.x)(j.a, e),
                S = (0, p.z)(B.a),
                T = (0, _.bb)() ?? 0,
                {
                    conversationId: E
                } = (0, _.cb)(),
                {
                    search: A,
                    state: P
                } = (0, _.Y)(),
                k = (0, p.x)(nN.a, E ?? null),
                M = (0, p.x)(null == E || eI.d, k ?? E ?? ""),
                R = P?.archivedConversationPreview === !0;
            x[1] !== A ? (t = (0, sA.i)(A), x[1] = A, x[2] = t) : t = x[2];
            let N = t;
            x[3] !== R || x[4] !== N || x[5] !== E ? (n = null == E || (0, eN.e)(E) || N || R ? null : E, x[3] = R, x[4] = N, x[5] = E, x[6] = n) : n = x[6];
            let {
                data: O
            } = (0, p.x)(ar.chatGptConversationQueryById$, n);
            if (null == E) {
                let e;
                return x[7] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(_.l, {
                    to: "/",
                    replace: !0
                }), x[7] = e) : e = x[7], e
            }
            x[8] !== k || x[9] !== E ? (o = k ?? (0, eN.d)(E), x[8] = k, x[9] = E, x[10] = o) : o = x[10];
            let G = o,
                F = w.isCapable && !S && !M && null != O;
            x[11] !== b ? (s = e => (b((0, sA.c)(e)), !0), x[11] = b, x[12] = s) : s = x[12];
            let z = s;
            x[13] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(I.a, {}), l = (0, a.jsx)(tf.a.Surface, {}), x[13] = i, x[14] = l) : (i = x[13], l = x[14]), x[15] !== R ? (c = null, x[15] = R, x[16] = c) : c = x[16], x[17] !== G || x[18] !== R || x[19] !== N ? (d = N || R ? null : (0, a.jsx)(nq.a, {
                conversationId: G
            }), x[17] = G, x[18] = R, x[19] = N, x[20] = d) : d = x[20];
            let L = C ?? (F ? z : null),
                D = `${G}:${N}`;
            x[21] === Symbol.for("react.memo_cache_sentinel") ? (u = void 0, x[21] = u) : u = x[21], x[22] !== G || x[23] !== R || x[24] !== N || x[25] !== D || x[26] !== T ? (h = (0, a.jsx)(s1, {
                conversationId: G,
                viewActivation: T,
                isArchivedPreview: R,
                isReadOnlyPreview: !1,
                banner: u,
                isTemporaryChat: N,
                sharedConversationId: null
            }, D), x[22] = G, x[23] = R, x[24] = N, x[25] = D, x[26] = T, x[27] = h) : h = x[27], x[28] !== h || x[29] !== L ? (m = (0, a.jsx)(tN.a, {
                value: L,
                children: h
            }), x[28] = h, x[29] = L, x[30] = m) : m = x[30], x[31] !== m || x[32] !== c || x[33] !== d ? (g = (0, a.jsxs)(a.Fragment, {
                children: [i, l, c, d, m]
            }), x[31] = m, x[32] = c, x[33] = d, x[34] = g) : g = x[34];
            let H = g;
            return x[35] !== H ? (f = H, x[35] = H, x[36] = f) : f = x[36], x[37] !== G || x[38] !== f ? (v = (0, a.jsx)(az.a, {
                conversationId: G,
                children: f
            }), x[37] = G, x[38] = f, x[39] = v) : v = x[39], v
        }

        function s1(e) {
            let t, n, i, l, c, d, u, x, C, I, j, k, M, G, L, D, H, W, q, U, K, V, Y, $, et, en, er, eo, ei, el, ec, eu, eh, ep, em, eg, ef, ev, ey, ex, eb, e_, ew, ej, eT, eE, eA, eP, ek, eM, eR, eO, eB, eG, eF, ez, eL, eD, eH, eW, eq, eU, eX, eZ, eJ, e0, e1, e2, e3, e4, e6, e8, e9, tn, ta, tr, to, ts, ti, tl, td, tm, tg, tf, tv, ty, tx, tb, tC, tS, tA, tP, tk, tM, tR, tN, tK, tY, tJ, t4, t6 = (0, r.c)(743),
                {
                    conversationId: t5,
                    viewActivation: nt,
                    isArchivedPreview: nL,
                    isInlinePreview: nH,
                    hideModelPicker: nq,
                    showFilePicker: nK,
                    disableAutoFocus: nV,
                    hideInitialUserMessage: nY,
                    transcriptPresentation: nQ,
                    scrollOrigin: n$,
                    isReadOnlyPreview: nX,
                    onSubmitAccepted: nZ,
                    isTemporaryChat: nJ,
                    sharedConversationId: n0,
                    sharedPostContinuation: n1,
                    requiredSystemHints: n2,
                    routePattern: n3,
                    composerLeadingContent: n4,
                    headerLeadingContent: n6,
                    banner: n5,
                    onRetryMissingConversation: n8,
                    sharedProjectConversation: n7,
                    workspace: n9
                } = e,
                as = void 0 === nt ? 0 : nt,
                al = void 0 !== nL && nL,
                ac = void 0 !== nH && nH,
                ad = void 0 === nK || nK,
                au = (0, p.y)(z.a),
                ah = (0, y.useContext)(R.a),
                ap = (0, p.x)(eS.f, ah),
                am = (0, p.z)(null != ap && B.a);
            t6[0] !== ah || t6[1] !== t5 ? (t = {
                auth: ah,
                conversationId: t5
            }, t6[0] = ah, t6[1] = t5, t6[2] = t) : t = t6[2];
            let ag = (0, p.x)(null != ah && !ah.isLoading && null === ah.authMethod && eS.h, t),
                {
                    conversationId: af
                } = (0, _.cb)();
            t6[3] !== t5 || t6[4] !== ac || t6[5] !== af || t6[6] !== au || t6[7] !== n9 ? (n = () => (0, eN.e)(ac || null != n9 || null == au.get(F.j, t5) ? t5 : af ?? ""), t6[3] = t5, t6[4] = ac, t6[5] = af, t6[6] = au, t6[7] = n9, t6[8] = n) : n = t6[8];
            let [av, ay] = (0, y.useState)(n);
            t6[9] !== av || t6[10] !== t5 ? (i = () => av ? t5 : null, t6[9] = av, t6[10] = t5, t6[11] = i) : i = t6[11];
            let [ax] = (0, y.useState)(i), aC = null != n0 || null != ap && !(void 0 !== n1 && n1 && am);
            t6[12] !== t5 || t6[13] !== al || t6[14] !== ac || t6[15] !== aC || t6[16] !== au ? (l = () => {
                if (!aC && !al && !ac) return function(e, t) {
                    let n = e.get(nN.a, t) ?? t,
                        a = e.get(J.b, t),
                        r = e.get(nF, n),
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
                        i = e.get(nv.i),
                        l = s.observedTurn,
                        c = null;

                    function d(t) {
                        for (let n of t.toReversed())
                            if (!s.initialCreationMessageIds.has(n.messageId) && (0, nj.openSpacePageSidePanelTab)(e, n.pageId, {
                                    title: n.title,
                                    openSource: "turn_auto_open"
                                }).opened) {
                                s.openedCreatedPage = !0;
                                break
                            }
                    }
                    let u = e.watch(n => {
                        let {
                            get: a
                        } = n, r = a(F._, t), o = a(nv.i), u = a(F.ab, t);
                        if ((0, F.zb)(r)) {
                            l = !1;
                            let e = a(J.b, t),
                                n = a(F.bb, t),
                                r = !s.observedTurn || s.attemptId !== e;
                            if (s.attemptId = e, r) {
                                let e = c;
                                c = null, e?.abort(), s.observedTurn = !0, s.activeRequestId = n, s.dismissed = u, s.openedCreatedPage = !1
                            } else s.activeRequestId = n ?? s.activeRequestId, s.dismissed = s.dismissed || u || i && !o;
                            i = o;
                            let h = !u && !s.dismissed && !o && !s.openedCreatedPage && !a(z.j) && !a(F.C, t) && !a(eI.d, t),
                                p = [];
                            if ((r || h) && (p = a(F.P, t) ?? []), r) {
                                s.initialCreationMessageIds = new Set(p.map(e => e.messageId));
                                return
                            }
                            h && d(p);
                            return
                        }
                        if (!s.observedTurn) return;
                        let h = a(F.v, t);
                        if ("idle" !== r || u || null != h && "completed" !== h.result || null != e.get(F.C, t) || e.get(z.j) || e.get(eI.d, t)) {
                            s.observedTurn = !1;
                            return
                        }
                        if (l) {
                            if (s.dismissed || o || s.openedCreatedPage || a(J.b, t) !== s.attemptId) {
                                s.observedTurn = !1;
                                return
                            }
                            if (h?.result !== "completed") return;
                            d(a(F.P, t) ?? []), s.observedTurn = !s.openedCreatedPage;
                            return
                        }
                        if (s.observedTurn = !1, h?.result !== "completed" || h.requestId !== s.activeRequestId) return;
                        let p = e.get(F.L, t);
                        if (null == p) return;
                        let m = (0, g.b)({
                                mapping: p,
                                current_node: e.get(F.B, t)
                            }),
                            f = m.findLast(nG.b);
                        if (f?.status !== "finished_successfully") return;
                        let v = [...(0, nO.e)(m).outputs, ...m.flatMap(e => (0, nO.c)(e).map(e => e.file))],
                            y = e.get(nk.a, t)?.at(-1);
                        if (y?.turn.status !== "complete") return;
                        let x = [...(0, nx.b)(m), ...y.turn.items.flatMap(e => "chatgpt-reasoning-group" === e.type ? e.items : [e]).filter(e => "mcp-tool-call" === e.type)];
                        if (!((0, ny.a)(e, x, !s.dismissed) || !s.dismissed && !s.openedCreatedPage && (0, nT.a)(e, x)) && !s.dismissed && !o && !s.openedCreatedPage) {
                            for (let t of (0, nS.c)((0, g.e)(f)).toReversed())
                                if ((0, nj.openSpacePageSidePanelTab)(e, t.id, {
                                        openSource: "turn_auto_open",
                                        blockId: t.blockId
                                    }).opened) return;
                            if ((0, nB.canOpenChatGptFilePreview)({
                                    browserPreview: !0
                                })) {
                                for (let n of y.turn.items)
                                    if ("assistant-message" === n.type && n.completed)
                                        for (let [a, r] of n.contentReferences.entries()) {
                                            let o = (0, nM.a)(r),
                                                s = null == o ? null : (0, nb.a)(o),
                                                i = v.find(e => null != e.fileId && e.fileId === (r.file_id ?? r.id) || null != e.libraryFileId && e.libraryFileId === r.library_file_id);
                                            if ("file" !== r.type || !(0, nf.a)(r) || null == o || null == s || !(0, nb.f)(s) || null == i && null == (0, nR.b)(r.sandbox_path) && !(0, nR.b)(r.matched_text)?.includes("sandbox:") || i?.sizeBytes != null && i.sizeBytes > nw.a) continue;
                                            let l = n.contentReferenceMessageIds?.[a] ?? n.messageId,
                                                d = (0, nP.b)(r, {
                                                    fileName: o,
                                                    messageId: l
                                                });
                                            if (null == d) continue;
                                            if (e.get(t0.f)?.getExperiment("1965446322").get("enable_artifact_preview_auto_open", !1) !== !0) return;
                                            let u = e.get(F.j, t) ?? t,
                                                h = `${l??"message"}:${String(a)}:${o}`,
                                                p = `chatgpt-file:${u}:${h}`,
                                                g = {
                                                    turnId: y.id,
                                                    inputMessageId: m.find(e => "user" === e.author.role)?.id ?? null,
                                                    messageId: l ?? null
                                                },
                                                f = new AbortController,
                                                x = (0, nB.openChatGptFile)(e, {
                                                    conversationId: u,
                                                    fileName: o,
                                                    gizmoId: e.get(F.R, t),
                                                    sharedConversationId: e.get(F.Y, t),
                                                    target: d,
                                                    tabKey: h,
                                                    browserPreview: !0,
                                                    isAccessBlocked: e => e.get(eI.d, t),
                                                    downloadFallback: !1,
                                                    openSource: "auto_open",
                                                    originatingTurn: g,
                                                    signal: f.signal,
                                                    onOpened: () => {
                                                        let t = e.get(P.l.activeTab$);
                                                        f.signal.aborted || t?.tabId !== p || t.tabType.kind !== nC.a || ((0, ed.a)(e, ng.CodexFileOpened, {
                                                            threadId: u,
                                                            turnId: g.turnId,
                                                            inputMessageId: g.inputMessageId ?? void 0,
                                                            messageId: g.messageId ?? void 0,
                                                            fileExtension: (0, n_.c)(o) ?? void 0,
                                                            openSource: "auto_open",
                                                            openDestination: "codex_preview"
                                                        }), (0, ed.a)(e, ng.CodexWorkspaceFilePreviewAttempted, (0, nI.a)({
                                                            modifiedClick: !1,
                                                            openedSidePanelTarget: "artifact",
                                                            openSource: "auto_open",
                                                            originatingTurn: g,
                                                            path: o,
                                                            threadId: u,
                                                            windowType: "browser"
                                                        })), (0, nE.b)(e, p, "auto_open"))
                                                    },
                                                    onClose: () => f.abort()
                                                });
                                            c = f;
                                            let b = e.watch(e => {
                                                let {
                                                    get: n
                                                } = e;
                                                (n(nv.i) && n(P.l.activeTab$)?.tabId !== p || n(eI.d, t)) && f.abort()
                                            });
                                            x.catch(e => {
                                                f.signal.aborted || nA.a.debug("Automatic ChatGPT artifact preview could not open", {
                                                    safe: {},
                                                    sensitive: {
                                                        error: e
                                                    }
                                                })
                                            }).finally(() => {
                                                b(), c === f && (c = null)
                                            });
                                            return
                                        }
                            }
                        }
                    });
                    return () => {
                        u(), c?.abort(), null != s.attemptId && e.set(nF, n, {
                            ...s,
                            attemptId: s.attemptId
                        })
                    }
                }(au, t5)
            }, c = [t5, al, ac, aC, au], t6[12] = t5, t6[13] = al, t6[14] = ac, t6[15] = aC, t6[16] = au, t6[17] = l, t6[18] = c) : (l = t6[17], c = t6[18]), (0, y.useEffect)(l, c);
            let a_ = (0, p.x)(a9.a, t5),
                aS = aC ? null : a_;
            t6[19] !== n0 ? (d = () => null == n0 ? null : (0, eN.b)(), t6[19] = n0, t6[20] = d) : d = t6[20];
            let [aj] = (0, y.useState)(d), aT = aj ?? t5;
            t6[21] !== aT ? (u = (0, tQ.o)({
                routeKind: "chatgpt-thread",
                conversationId: aT
            }), t6[21] = aT, t6[22] = u) : u = t6[22];
            let aE = null != (0, p.x)(tO.c, u);
            t6[23] !== aT || t6[24] !== n2 || t6[25] !== au ? (x = () => {
                if (null != n2 && 0 !== n2.length) return (0, tt.b)(au, aT, n2)
            }, C = [aT, n2, au], t6[23] = aT, t6[24] = n2, t6[25] = au, t6[26] = x, t6[27] = C) : (x = t6[26], C = t6[27]), (0, y.useEffect)(x, C);
            let aA = (0, y.useRef)(null),
                [aP, aM] = (0, y.useState)(null),
                [aN, aO] = (0, y.useState)(null),
                [aB, aG] = (0, y.useState)(null),
                aF = aN?.activation === as ? aN.messageId : null,
                az = aB === as,
                aL = (0, y.useRef)(null);
            t6[28] === Symbol.for("react.memo_cache_sentinel") ? (I = () => {
                let e = new AbortController;
                return aL.current = e, () => e.abort()
            }, t6[28] = I) : I = t6[28], t6[29] !== as ? (j = [as], t6[29] = as, t6[30] = j) : j = t6[30], (0, y.useLayoutEffect)(I, j);
            let aH = (0, b.a)(),
                aW = (0, _._)(),
                aq = (0, nn.c)(),
                aU = (0, p.x)(F.j, t5);
            t6[31] !== au ? (k = e => {
                (0, nz.c)(au, e)
            }, t6[31] = au, t6[32] = k) : k = t6[32];
            let aK = (0, y.useEffectEvent)(k);
            t6[33] !== aU || t6[34] !== aK ? (M = () => () => {
                null != aU && aK(aU)
            }, t6[33] = aU, t6[34] = aK, t6[35] = M) : M = t6[35], t6[36] !== aU ? (G = [aU], t6[36] = aU, t6[37] = G) : G = t6[37], (0, y.useEffect)(M, G);
            let aV = (0, p.x)(sI.b, t5),
                aY = (0, p.x)(F.L, t5),
                aQ = (0, p.x)(ar.chatGptConversationQueryById$, aC || nJ && null != aY ? null : aU);
            (0, p.x)(aC ? null : ai.a, aU);
            let a$ = (0, p.x)(!ag && eI.d, t5),
                aX = aU ?? t5,
                aZ = (0, p.x)(F.B, t5),
                aJ = (0, p.x)(F.x, t5),
                a0 = (0, p.x)(F.R, t5),
                a1 = (0, p.x)(F.C, t5),
                a2 = (0, p.x)(F.M, t5),
                a3 = (0, p.x)(F._, t5),
                a4 = (0, p.x)(F.V, t5),
                a8 = (0, p.x)(F.X, t5),
                a7 = (0, p.x)(aI.a, t5),
                ri = (0, p.x)(F.D, t5),
                rc = (0, p.x)(F.cb, t5),
                rd = (0, p.x)(F.db, t5),
                ru = (0, p.x)(ar.n, n0),
                rh = (0, y.useRef)(null),
                rp = ru.isSuccess && null != ru.data ? n0 : null;
            t6[38] !== au ? (L = e => {
                (0, ed.a)(au, o.h, {
                    actor: "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER",
                    action: "CHATGPT_SHARE_FLOW_ACTION_SHARED_CONTENT_VIEWED",
                    contentType: "CHATGPT_SHARE_FLOW_CONTENT_TYPE_SHARED_CONVERSATION",
                    availability: "CHATGPT_SHARE_FLOW_AVAILABILITY_COMPLETE",
                    shareId: e
                })
            }, t6[38] = au, t6[39] = L) : L = t6[39];
            let rm = (0, y.useEffectEvent)(L);
            t6[40] !== rp || t6[41] !== rm ? (D = () => {
                null != rp && rh.current !== rp && (rh.current = rp, rm(rp))
            }, t6[40] = rp, t6[41] = rm, t6[42] = D) : D = t6[42], t6[43] !== rp ? (H = [rp], t6[43] = rp, t6[44] = H) : H = t6[44], (0, y.useEffect)(D, H);
            let rg = (0, p.x)(e7.o, t5),
                rf = (0, p.x)(e7.p, t5),
                rv = (0, p.x)(e7.m, t5),
                rb = (0, p.x)(e7.q, t5),
                rR = (0, p.x)(e7.n, t5),
                rN = (0, p.x)(e7.i, t5),
                rO = (0, p.x)(F.ab, t5),
                rB = (0, p.x)(e7.z, t5);
            t6[45] !== a3 ? (W = (0, F.zb)(a3), t6[45] = a3, t6[46] = W) : W = t6[46];
            let rG = W,
                rF = (0, p.x)(rt, t5),
                rz = (0, p.z)(O.u),
                rD = (0, p.z)(O.r),
                rH = (0, p.z)(O.t),
                rW = (0, p.z)(O.m),
                rU = (0, p.z)(O.b),
                rV = (0, p.z)(O.n),
                rY = (0, p.z)(tL.pagesEnabled$);
            t6[47] === Symbol.for("react.memo_cache_sentinel") ? (q = (0, e5.a)(), t6[47] = q) : q = t6[47];
            let r$ = (0, es.h)(q);
            t6[48] === Symbol.for("react.memo_cache_sentinel") ? (U = (0, tB.b)(), t6[48] = U) : U = t6[48];
            let rZ = (0, es.h)(U),
                rJ = null != aY,
                r0 = (0, p.z)(oV.f),
                r1 = aC ? ru : aQ;
            av && null != r1.data && ay(!1);
            let r2 = av && rJ && null == r1.data,
                r3 = r1.isLoading || !r2 && r1.isError;
            t6[49] !== aP || t6[50] !== aT || t6[51] !== r3 || t6[52] !== aC || t6[53] !== nJ || t6[54] !== au ? (K = (e, t, n, a) => {
                !(e || au.get(tV.a)) && ((0, e7.b)(au, aT, t, void 0, n, a), aP?.focus(), aC || r3 || (0, aa.f)(au, aT, {
                    isTemporaryChat: nJ
                }))
            }, t6[49] = aP, t6[50] = aT, t6[51] = r3, t6[52] = aC, t6[53] = nJ, t6[54] = au, t6[55] = K) : K = t6[55];
            let r4 = K;
            t6[56] !== t5 || t6[57] !== ap ? (Y = null == (V = null == ap ? null : (0, sc.a)(ap, t5)) ? void 0 : (0, oM.a)(V), t6[56] = t5, t6[57] = ap, t6[58] = V, t6[59] = Y) : (V = t6[58], Y = t6[59]);
            let r6 = Y,
                r5 = V ?? r1.data,
                r8 = ri ? rc : r5?.title,
                r7 = (0, p.z)(N.h),
                r9 = (0, p.z)(N.g),
                oe = "chatgpt-thread" === au.value.routeKind && au.value.workSideChat?.conversationId === t5,
                ot = r5?.conversation_origin ?? aJ ?? (null != n9 || oe ? "tpp" : null),
                on = "tpp" === ot,
                oa = on && "denied" === rz.status && "go-plan" === rz.reason,
                or = (0, p.z)(t1.e),
                oo = (0, _.Y)(),
                oi = oo.state;
            (0, p.z)(tX.b);
            let ol = (0, p.x)(t0.d, "3901104270") && oi?.openGoalPlan === !0,
                oc = (0, ne.a)(),
                od = "tpp" === ot || "flora" === ot,
                ou = (0, es.h)("2871250183"),
                oh = (0, p.z)(!!od && O.v),
                op = void 0 !== nX && nX || oh,
                om = null == or || or.isFullWidth ? void 0 : or.width ?? 420,
                og = !0 === (0, p.z)(od ? null : nc.d),
                ov = (0, p.z)(od ? tU.b : tU.a),
                ox = !od && ov,
                ob = !rZ || rV && !od,
                o_ = !aC && rV && !od,
                ow = o_ && rW,
                oI = aC && r5?.is_read_only === !0 || n7?.is_read_only === !0;
            t6[60] !== t5 || t6[61] !== aC || t6[62] !== au ? ($ = () => null, t6[60] = t5, t6[61] = aC, t6[62] = au, t6[63] = $) : $ = t6[63];
            let [oS] = (0, y.useState)($), oT = r5?.gizmo_id ?? a0 ?? oS?.gizmoId ?? null;
            t6[64] !== oT || t6[65] !== aC ? (et = aC || null == oT || (0, te.a)(oT) ? null : oT, t6[64] = oT, t6[65] = aC, t6[66] = et) : et = t6[66];
            let oE = et,
                oR = (0, p.x)(at, aT);
            t6[67] !== r5 || t6[68] !== t5 || t6[69] !== a7 || t6[70] !== oo.pathname || t6[71] !== n0 || t6[72] !== ap ? (en = (0, ab.d)({
                conversation: r5,
                conversationId: t5,
                conversationTitle: a7,
                pathname: oo.pathname,
                sharedConversationId: n0,
                sharedPost: ap
            }), t6[67] = r5, t6[68] = t5, t6[69] = a7, t6[70] = oo.pathname, t6[71] = n0, t6[72] = ap, t6[73] = en) : en = t6[73];
            let oB = en,
                oG = !rH && null == r5 && null == oS,
                oF = null != aU && !a$ && !oG && (rH || rD),
                oz = null;
            aC || (oz = null != r5 ? (0, os.B)(r5) : (0, te.a)(a0) ? a0 : oS?.projectId ?? null);
            let oL = (0, p.x)(nh.c, aC ? null : t5),
                oW = aC || od || null != oz || oL || null == oR ? oE : oR.id;
            t6[74] !== aT || t6[75] !== oW || t6[76] !== oo.pathname ? (er = {
                gizmoId: oW,
                conversationId: aT,
                visitKey: oo.pathname
            }, t6[74] = aT, t6[75] = oW, t6[76] = oo.pathname, t6[77] = er) : er = t6[77];
            let oU = (0, p.x)(oO.d, er),
                {
                    data: oY
                } = (0, s.a)({
                    enabled: null != oz,
                    queryFn: () => {
                        if (null == oz) throw Error("Expected a ChatGPT project id");
                        return (0, eV.c)(oz)
                    },
                    queryKey: (0, os.E)(oz ?? ""),
                    staleTime: eC.b.ONE_MINUTE
                }),
                oQ = null != oz && (oY?.gizmo.share_recipient !== "private" || (oY?.gizmo.sharing?.subjects?.length ?? 0) > 0);
            t6[78] !== r5?.context_scopes || t6[79] !== oY?.gizmo.gizmo_snorlax_type ? (eo = r5?.context_scopes?.includes("HEALTH") === !0 || oY?.gizmo.gizmo_snorlax_type === "potion", t6[78] = r5?.context_scopes, t6[79] = oY?.gizmo.gizmo_snorlax_type, t6[80] = eo) : eo = t6[80];
            let o$ = eo,
                oX = (0, oH.a)(r5?.context_scopes, {
                    projectType: oY?.gizmo.gizmo_snorlax_type,
                    projectId: oz,
                    lockedProjectId: r0?.projectId
                }),
                oZ = a$ || oQ || o$ || oX;
            t6[81] !== oY?.gizmo.display.name || t6[82] !== oY?.gizmo.display.name.trim ? (ei = oY?.gizmo.display.name.trim() || null, t6[81] = oY?.gizmo.display.name, t6[82] = oY?.gizmo.display.name.trim, t6[83] = ei) : ei = t6[83];
            let oJ = ei,
                o0 = oY?.gizmo.display.theme,
                o3 = oY?.gizmo.display.emoji;
            t6[84] !== oY ? (el = "shared" === (0, rl.b)(oY) ? (0, a.jsx)(t_.b, {
                icon: {
                    assets: {
                        16: sZ,
                        20: sJ.a
                    }
                }
            }) : void 0, t6[84] = oY, t6[85] = el) : el = t6[85], t6[86] !== o0 || t6[87] !== o3 || t6[88] !== el ? (ec = (0, a.jsx)(tW.a, {
                className: "icon-leading",
                size: "leading",
                color: o0,
                icon: o3,
                sharedIcon: el
            }), t6[86] = o0, t6[87] = o3, t6[88] = el, t6[89] = ec) : ec = t6[89];
            let o6 = ec,
                o5 = (0, p.x)(F.i, t5),
                o8 = o5?.metadata ?? r5?.context_truncation_continuation,
                o7 = aC || nJ || null != n7 || null == r7 || r5?.owner?.user_id == null || null == oz || r5.owner.user_id === (r9 ? r7.split("__")[0] : r7) ? null : (0, o2.d)(oz, r5.conversation_id, r5.owner.user_id),
                o9 = (0, p.x)(aC || al || op ? null : o4.c, t5),
                se = o9?.isReviewing === !0,
                st = null == o9 ? aY : o9.conversation.mapping,
                sn = null == o9 ? aZ : o9.conversation.current_node,
                sa = null == aY ? r5 : null,
                sr = st ?? sa?.mapping,
                so = (0, es.k)();
            t6[90] !== sr || t6[91] !== so ? (eu = function(e, t) {
                if (null != e && Object.values(e).some(e => e?.message != null && (0, oD.b)(e.message))) return () => (0, es.f)(t, "2347981323").get("enabled", !1)
            }(sr, so), t6[90] = sr, t6[91] = so, t6[92] = eu) : eu = t6[92];
            let ss = eu,
                sl = (0, p.z)(null != ss ? ns.h : void 0),
                sh = (0, p.x)(null != ss && !aC && !al && !se && nr.a, t5),
                sp = (0, p.z)(sh ? no.a : void 0);
            t6[93] === Symbol.for("react.memo_cache_sentinel") ? (eh = (0, ao.a)(), t6[93] = eh) : eh = t6[93];
            let sm = eh;
            t6[94] === Symbol.for("react.memo_cache_sentinel") ? (ep = new WeakMap, t6[94] = ep) : ep = t6[94];
            let sg = ep;
            t6[95] !== ov || t6[96] !== ox || t6[97] !== o8 || t6[98] !== ot || t6[99] !== sn || t6[100] !== st || t6[101] !== ou || t6[102] !== ss || t6[103] !== sa || t6[104] !== al || t6[105] !== aC || t6[106] !== rG || t6[107] !== od || t6[108] !== a2 || t6[109] !== rv || t6[110] !== rR || t6[111] !== rg || t6[112] !== rf || t6[113] !== rb || t6[114] !== se || t6[115] !== au.get || t6[116] !== o9?.isEntering || t6[117] !== aV || t6[118] !== a3 || t6[119] !== sp || t6[120] !== sl ? (em = () => sm({
                conversation: sa,
                contextContinuation: o8,
                clinicalSearchEnabled: ox,
                clinicalCitationsEnabled: ov,
                enableCloudBrowserActivity: ou,
                conversationOrigin: ot,
                enableVoiceImageLoadingFix: ss,
                voiceImageSessionId: sl,
                voiceImageGenerationSpawnIds: sp,
                enableImageGenerationLoadingState: !aC && !al && !se && "error" !== a3,
                getRenderTelemetry: e => (0, sK.c)(au.get, e),
                isWorkConversation: od,
                isStreaming: !aC && !al && !se && rG,
                mode: "conversation",
                mcpResponseCache: sg,
                moderationDisclaimersByMessageId: a2,
                streamingOrders: aV,
                pendingSubmission: null == rg || aC || se || o9?.isEntering ? null : {
                    attachments: rv,
                    commentAttachments: rR,
                    prompt: rg,
                    renderMarkdown: rf,
                    selectedTextAttachments: rb
                },
                threadCurrentNode: sn,
                threadMapping: st
            }), t6[95] = ov, t6[96] = ox, t6[97] = o8, t6[98] = ot, t6[99] = sn, t6[100] = st, t6[101] = ou, t6[102] = ss, t6[103] = sa, t6[104] = al, t6[105] = aC, t6[106] = rG, t6[107] = od, t6[108] = a2, t6[109] = rv, t6[110] = rR, t6[111] = rg, t6[112] = rf, t6[113] = rb, t6[114] = se, t6[115] = au.get, t6[116] = o9?.isEntering, t6[117] = aV, t6[118] = a3, t6[119] = sp, t6[120] = sl, t6[121] = em) : em = t6[121], o9?.isEntering, t6[122] !== em ? (eg = em(), t6[122] = em, t6[123] = eg) : eg = t6[123];
            let {
                isConversationEmpty: sf,
                renderedConversation: sv,
                renderedTurns: sy,
                showPendingLoadingMessage: sx
            } = eg;
            t6[124] !== ac || t6[125] !== od || t6[126] !== sv || t6[127] !== au ? (ef = () => {
                if (!ac && od) return au.set(sX.b, sv), () => {
                    au.get(sX.b) === sv && au.set(sX.b, null)
                }
            }, ev = [ac, od, sv, au], t6[124] = ac, t6[125] = od, t6[126] = sv, t6[127] = au, t6[128] = ef, t6[129] = ev) : (ef = t6[128], ev = t6[129]), (0, y.useEffect)(ef, ev);
            let sC = (0, p.x)(np.g, t5),
                s_ = sx && null == sC,
                sw = !od && !aC && !ac && !al,
                sS = (0, p.x)(ox || ac || aC ? null : Z.a, t5),
                sj = (sS?.length ?? 0) > 0,
                sT = (0, p.x)(sw ? J.b : null, t5),
                sE = JSON.stringify([t5, as]),
                sP = (0, p.x)(aC || ac ? null : sq, t5),
                [sk, sM] = (0, y.useState)(null),
                sR = function(e, t) {
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
                    let d = null == n ? [] : (0, g.b)(n, eY.k),
                        u = null == e || e.visitKey !== c,
                        h = d.find(eY.k)?.id ?? (u || i ? null : e.userMessageId),
                        p = i ? null : d.findLast(eQ)?.id ?? null,
                        m = !u && (i && !e.isPendingUserTurn || !e.isPendingUserTurn && null != h && (null != e.userMessageId || !e.isTurnActive && null != a && a !== e.completionAttemptId) && e.userMessageId !== h),
                        f = new Set(u ? [] : e.observedSummaryRequestIds),
                        v = !u && !m && e.hasConsumedSummaryRequest,
                        y = !v && !u && null != e.conversation && (s || e.isTurnActive || null != a && e.completionAttemptId !== a) && null != p && !f.has(p);
                    if (null != n && (u || null == e.conversation || !s))
                        for (let e of Object.values(n.mapping)) e?.message?.id != null && eQ(e.message) && f.add(e.message.id);
                    else null != p && f.add(p);
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
                        userMessageId: h,
                        hasConsumedSummaryRequest: v || null != p,
                        isOpen: o ? !u && e.suppressAutoOpen && e.isOpen : r && (l && (u || !e.hasGoal) || y) || !u && (!m || l) && (!e.hasGoal || l) && e.isOpen,
                        shouldPreventAutoFocus: u || m || l && !e.hasGoal || y && !e.isOpen || e.shouldPreventAutoFocus
                    }
                }(sk, {
                    completionAttemptId: sT,
                    allowAutoOpen: !(0, tE.a)("(width < 768px)"),
                    suppressAutoOpen: (sP ?? !1) || ol,
                    conversation: sw && (r2 || !r3) ? sv : null,
                    isTurnActive: rG,
                    hasGoal: sj,
                    isPendingUserTurn: rN && null != rg && !rG,
                    visitKey: sE
                });
            sR !== sk && sM(sR);
            let sN = null == n9 && !sP && !ox && !ac && !aC && (on || sw) && !al,
                sB = sN && sv?.mapping === aY && sv?.current_node === aZ,
                sG = (0, p.x)(sB ? F.p : null, t5),
                sF = sv?.mapping,
                sz = sv?.current_node;
            t6[130] !== sF || t6[131] !== sz ? (ey = h()(() => {
                let e = null == sF ? [] : (0, g.a)({
                    mapping: sF,
                    current_node: sz
                });
                return {
                    messages: e,
                    resources: (0, nO.e)(e)
                }
            }), t6[130] = sF, t6[131] = sz, t6[132] = ey) : ey = t6[132];
            let sL = ey;
            t6[133] !== sw || t6[134] !== rN || t6[135] !== sN || t6[136] !== rG || t6[137] !== rY || t6[138] !== rv || t6[139] !== sL || t6[140] !== sy || t6[141] !== sG ? (ex = sN ? h()(() => (function(e) {
                var t;
                let n, a, {
                        automationReferences: r,
                        includePages: o = !1,
                        includeSources: s = !0,
                        messages: i,
                        pendingAttachments: l = [],
                        resources: c = (0, nO.e)(i),
                        turns: d,
                        isTurnActive: u = d.at(-1)?.turn.status === "in_progress"
                    } = e,
                    h = [...c.inputs],
                    p = s ? (0, rE.a)(i, d) : [],
                    m = new Map,
                    f = new Map,
                    v = (t = i, -1 !== (n = rC()(t, e => e?.recipient === "turn_plan.update_turn_plan" && (0, rk.b)(e)?.item?.type === "todo-list")) && t.slice(n + 1).some(e => "assistant" === e.author.role && "final" === e.channel && "all" === e.recipient && "finished_successfully" === e.status)),
                    y = [],
                    x = new Map(i.map(e => [(0, g.g)(e), e])),
                    b = rC()(i, e => "user" === e.author.role),
                    C = [];
                for (let e of l) h.some(t => t.fileId === e.id || null != e.libraryFileId && t.libraryFileId === e.libraryFileId) || h.push({
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
                            let t = x.get(n);
                            t?.author.role === "assistant" && ("finished_successfully" === t.status || "finished_partial_completion" === t.status) && (0, rT.j)(t.metadata) && y.push({
                                messageId: n,
                                turnId: e,
                                deletedMemoryCitationUuids: (0, rT.c)(t.metadata)
                            })
                        }
                    for (let n of rM(t.items)) {
                        if (o && "mcp-tool-call" === n.type) {
                            let e = (0, rS.b)(n);
                            if (null != e && (e.activities.includes("created") || e.activities.includes("updated"))) {
                                let t = (0, r_.d)(e.url);
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
                            for (let e of (0, nS.c)(n.content)) f.has(e.id) || f.set(e.id, {
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
                            m.set(e, {
                                image: n,
                                key: e,
                                kind: "generated-image"
                            })
                        }
                    }
                }
                let _ = (0, rw.b)(d.flatMap(e => {
                    let {
                        turn: t
                    } = e;
                    return rM(t.items).filter(e => "mcp-tool-call" === e.type)
                })).at(-1);
                return a = null == _ ? [...c.outputs, ...f.values(), ...m.values()] : [{
                    ..._,
                    key: `site:${_.projectId}`,
                    kind: "site"
                }, ...c.outputs.filter(e => null == _.archivePath || ! function(e, t) {
                    if (null != e.sandboxPath) return e.sandboxPath === t;
                    let n = t.split(/[\\/]/u).at(-1)?.toLowerCase();
                    return null != n && e.name.toLowerCase() === n
                }(e, _.archivePath)), ...f.values(), ...m.values()], {
                    automationIds: (0, rj.b)(i, r ?? void 0),
                    browserScreenshots: (0, rA.d)(i),
                    inputs: h,
                    sourceTurns: y,
                    outputs: a,
                    progressSteps: C,
                    isPlanSummaryUpdating: u && i.slice(b + 1).some(e => "assistant" === e.author.role && rj.a.test(e.recipient ?? "") || "tool" === e.author.role && rj.a.test(e.author.name ?? "")),
                    planSummaryRefreshKey: `${d.at(-1)?.id??""}:${u}`,
                    sources: s ? [...Array.from(new Map(i.filter(e => "user" === e.author.role).flatMap(e => (0, rI.a)((0, g.e)(e))).map(e => [e.projectId, e])).values(), e => ({
                        kind: "site",
                        key: `site:${e.projectId}`,
                        projectId: e.projectId,
                        label: e.title
                    })), ...p.filter(e => "memory" === e.kind), ...new Map(d.flatMap(e => {
                        let {
                            turn: t
                        } = e;
                        return (t.skillSources ?? []).map(e => [e.key, e])
                    })).values(), ...c.pluginSources, ...p.filter(e => "web" === e.kind && "apps" === e.category), ...p.filter(e => "file-source" === e.kind), ...p.filter(e => "web" === e.kind && "apps" !== e.category)] : [],
                    subagents: (0, rP.a)(i, {
                        isTurnLive: d.at(-1)?.turn.status === "in_progress"
                    })?.subagents ?? []
                }
            })({
                automationReferences: sG,
                includePages: rY,
                includeSources: !sw,
                isTurnActive: rG || rN,
                ...sL(),
                pendingAttachments: rN ? rv : [],
                turns: sy
            })) : null, eb = sw ? ex?.() : null, t6[133] = sw, t6[134] = rN, t6[135] = sN, t6[136] = rG, t6[137] = rY, t6[138] = rv, t6[139] = sL, t6[140] = sy, t6[141] = sG, t6[142] = ex, t6[143] = eb) : (ex = t6[142], eb = t6[143]);
            let sD = eb,
                sH = sj || null != sD && (sD.outputs.length > 0 || sD.progressSteps.length > 0 || sD.automationIds.length > 0 || sD.subagents.length > 0 || !a$ && sD.browserScreenshots.length > 0),
                sW = sN && (!sw || sH),
                sU = sW && null == or,
                sV = JSON.stringify([sE, null != or]),
                sQ = sw ? sR.isOpen : void 0,
                s0 = sW && !or?.isFullWidth;
            t6[144] !== om || t6[145] !== sV || t6[146] !== sQ || t6[147] !== s0 ? (e_ = {
                contentShiftResetKey: sV,
                controlledIsOpen: sQ,
                isEnabled: s0,
                floatingPanelWidth: om
            }, t6[144] = om, t6[145] = sV, t6[146] = sQ, t6[147] = s0, t6[148] = e_) : e_ = t6[148];
            let s1 = (0, t7.a)(e_),
                s9 = aU ?? t5,
                ie = on && null == rd,
                it = a1 ?? rB,
                ia = r1.isLoading && !rJ,
                ir = r1.isError && !r2;
            t6[149] !== r1.error || t6[150] !== ac ? (ew = ac || (0, ni.e)(r1.error) || !(r1.error instanceof ni.a && [401, 403, 404].includes(r1.error.status)), t6[149] = r1.error, t6[150] = ac, t6[151] = ew) : ew = t6[151];
            let io = ew;
            t6[152] !== r1.error || t6[153] !== t5 || t6[154] !== ir || t6[155] !== ac || t6[156] !== au || t6[157] !== n0 ? (ej = () => {
                ir && !ac && tD.a.loadFailed(au, t5, n0, r1.error)
            }, eT = [r1.error, t5, ir, ac, au, n0], t6[152] = r1.error, t6[153] = t5, t6[154] = ir, t6[155] = ac, t6[156] = au, t6[157] = n0, t6[158] = ej, t6[159] = eT) : (ej = t6[158], eT = t6[159]), (0, y.useEffect)(ej, eT), t6[160] !== t5 || t6[161] !== aC || t6[162] !== aU ? (eE = null, aC || (eE = aU ?? ((0, eN.e)(t5) ? null : t5)), t6[160] = t5, t6[161] = aC, t6[162] = aU, t6[163] = eE) : eE = t6[163], t6[164] !== aF || t6[165] !== r5 || t6[166] !== ot || t6[167] !== aH || t6[168] !== nJ || t6[169] !== od || t6[170] !== oa || t6[171] !== aW || t6[172] !== eE || t6[173] !== n3 || t6[174] !== au || t6[175] !== as ? (eA = (e, t) => {
                let n = void 0 !== t && t;
                if (null == eE || null != aF || oa) return;
                let a = aL.current?.signal;
                null == a || a.aborted || (aO({
                    messageId: e,
                    activation: as
                }), (0, F.h)(au, {
                    conversationId: eE,
                    messageId: e,
                    inWorkMode: n
                }).then(e => {
                    let {
                        clientThreadId: t
                    } = e;
                    a.aborted || (n && (0, nd.a)(au, "opened"), aW(null == n3 ? (0, sA.c)(t, {
                        isTemporaryChat: nJ
                    }) : (0, _.C)(n3, {
                        conversationId: t
                    })))
                }).catch(() => {
                    a.aborted || (n && (0, nd.a)(au, "failed"), aO(null), au.get(ea.f).danger(aH.formatMessage({
                        id: "chatgptConversations.branchFailed",
                        defaultMessage: "Failed to create chat",
                        description: "Error shown when ChatGPT cannot continue a conversation in a new chat"
                    }), {
                        errorAnalytics: {
                            toastId: "branch_conversation_failed",
                            operation: "branch_conversation",
                            errorCategory: "conversation",
                            conversationId: eE ?? void 0,
                            retryable: !0,
                            userFacingError: {
                                surface: (0, ak.b)(null == ot && null == r5 ? null : od),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    }))
                }))
            }, t6[164] = aF, t6[165] = r5, t6[166] = ot, t6[167] = aH, t6[168] = nJ, t6[169] = od, t6[170] = oa, t6[171] = aW, t6[172] = eE, t6[173] = n3, t6[174] = au, t6[175] = as, t6[176] = eA) : eA = t6[176];
            let is = (0, na.a)(eA);
            t6[177] !== r5 || t6[178] !== t5 || t6[179] !== ot || t6[180] !== aH || t6[181] !== og || t6[182] !== nJ || t6[183] !== od || t6[184] !== au || t6[185] !== aU ? (eP = async (e, t, n, a) => {
                if (!og) try {
                    await async function(e, t) {
                        let {
                            conversationId: n,
                            isTemporaryChat: a = !1,
                            messageId: r,
                            prompt: o,
                            renderFormat: s,
                            inlineSystemHints: i
                        } = t;
                        if (e.get(e7.i, n)) throw new a5.a("edit_message_busy", "The chat is busy.");
                        let l = e.get(F.x, n);
                        if ("tpp" === l) throw new a5.a("edit_message_unsupported_conversation", "Work messages cannot be edited with the Chat flow.");
                        if (!e.get(rt, n)) throw new a5.a("edit_message_busy", "The chat is busy.");
                        let c = e.get(a6.b, {
                            conversationId: n,
                            messageId: r
                        });
                        if (null == c) throw new a5.a("edit_message_target_unavailable", "The user message could not be edited.");
                        let {
                            selectedModel: d
                        } = c, u = o.trim(), h = (0, a6.c)(c.message, e.get, i), p = (0, re.c)({
                            message: c.message,
                            prompt: u,
                            renderFormat: s,
                            systemHints: h,
                            inlineSystemHints: i
                        }), m = (0, f.f)(p.message.metadata), g = p.message.content, v = "multimodal_text" === g.content_type && g.parts.some(e => "string" != typeof e);
                        if (0 === u.length && 0 === m.length && !v) throw new a5.a("edit_message_empty", "The edited message cannot be empty.");
                        if (e.get(t0.d, "3574573347")) {
                            let t = e.get(a6.a, n);
                            t?.messageId === r && t.prompt === o && aD()((0, a6.c)(c.message, e.get, t.inlineSystemHints), h) || (e.set(a6.a, n, {
                                messageId: r,
                                prompt: o,
                                isTemporaryChat: a,
                                inlineSystemHints: i
                            }), (0, aa.f)(e, n, {
                                isTemporaryChat: a
                            }))
                        }
                        let y = rn(e.get, n),
                            x = y.request.current,
                            b = () => rn(e.get, n).request.current === x && aD()(e.get(a6.b, {
                                conversationId: n,
                                messageId: r
                            }), c) && !(0, F.zb)(e.get(F._, n));
                        e.set(e7.i, n, !0);
                        try {
                            if ("flora" !== l && null != x && null == e.get(y.session$) && null == e.get(a9.a, n) && (await x.stop(), await x.closed), !b()) throw new a5.a("edit_message_target_unavailable", "The edited message or active response changed.");
                            await (0, re.submitChatGPTCompletion)(e, {
                                isSubmissionCurrent: b,
                                isRequestCurrent: () => e.get(F.B, n) === p.message.id,
                                attachments: m,
                                conversationId: n,
                                isTemporaryChat: a,
                                model: d.slug,
                                parentMessageId: c.parentMessageId,
                                prompt: u,
                                systemHints: h,
                                thinkingEffort: d.thinkingEffort,
                                userCompletionMessages: p
                            })
                        } finally {
                            e.set(e7.i, n, !1)
                        }
                    }(au, {
                        conversationId: t5,
                        isTemporaryChat: nJ,
                        messageId: e,
                        prompt: t,
                        inlineSystemHints: a,
                        renderFormat: n
                    })
                } catch (t) {
                    let e = (0, ak.c)(t);
                    throw au.get(ea.f).danger(aH.formatMessage({
                        id: "chatgptConversations.editMessageFailed",
                        defaultMessage: "Failed to edit message",
                        description: "Toast shown in a Chat mode conversation when submitting an edit to a user message fails"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.editMessageFailed",
                            operation: "edit_message",
                            apiErrorCode: e.errorCode,
                            retryable: !0,
                            errorCategory: "conversation",
                            conversationId: aU ?? void 0,
                            userFacingError: {
                                ...e,
                                surface: (0, ak.b)(null == ot && null == r5 ? null : od),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    }), t
                }
            }, t6[177] = r5, t6[178] = t5, t6[179] = ot, t6[180] = aH, t6[181] = og, t6[182] = nJ, t6[183] = od, t6[184] = au, t6[185] = aU, t6[186] = eP) : eP = t6[186];
            let ii = (0, na.a)(eP);
            t6[187] !== aT || t6[188] !== r5 || t6[189] !== t5 || t6[190] !== ot || t6[191] !== aH || t6[192] !== og || t6[193] !== nJ || t6[194] !== od || t6[195] !== oa || t6[196] !== aW || t6[197] !== n8 || t6[198] !== au || t6[199] !== aU ? (ek = async (e, t) => {
                if (!og && !oa) try {
                    let n = au.get(aR.d, t5);
                    if (n?.startsNewWorkConversation || null == au.get(F.j, t5) || (0, nm.j)(au.get(F.T, t5)?.metadata?.errorCode)) {
                        if (n?.message.id !== e) return;
                        let a = (0, g.e)(n.prompt),
                            r = (0, eK.i)(n.prompt.metadata, a, (0, f.e)(n.prompt.metadata), (0, v.w)(a)),
                            o = (0, e$.a)(n.prompt, a, r),
                            s = au.get(e7.s, aT),
                            i = "markdown" === o.renderFormat ? o.message : a,
                            l = s.length > 0 ? s : i,
                            c = s.length > 0 ? void 0 : o.renderFormat ?? "plain";
                        if (null != n8) return void await n8(l, c);
                        if (null == au.get(F.j, t5) && "string" == typeof n.prompt.metadata?.model_first_landing_ref) {
                            let e = l;
                            if (null != c) {
                                let t = (0, tq.e)(l, {
                                    defaultTextKind: "plain" === c ? "literal" : "prompt",
                                    enableRichText: !0,
                                    enableFileMentions: !0
                                });
                                e = t.getPersistedText(), t.destroy()
                            }
                            let t = `chatgpt:${t5}`;
                            (0, tu.E)(t, (t, n) => n ? t : e) || (0, e7.U)(au, t5, e), (0, tu.e)(t);
                            return
                        }
                        if (n.startsNewWorkConversation) {
                            let e = "user" === n.prompt.author.role ? (0, g.i)((0, g.r)(n.prompt.metadata?.serialization_metadata)?.work_handoff_recovery_prompt) : null,
                                t = null != e && e.length <= 1e3 ? e : (0, v.w)(a);
                            (0, th.m)(au, "work"), await aW("/", {
                                state: {
                                    focusComposerNonce: Date.now(),
                                    prefillPrompt: s.length > 0 ? s : t,
                                    prefillPromptFormat: s.length > 0 ? void 0 : "plain",
                                    prefillPromptOnlyIfEmpty: !0
                                }
                            });
                            return
                        }
                        if (od && !nJ && (0, tc.fb)(au, (0, tI.b)({
                                entrypoint: "home"
                            }))) return void await aW("/");
                        let d = (0, g.k)(n.prompt.metadata?.system_hints).filter(e => "search" !== e || !1 !== n.forceUseSearch);
                        !0 !== n.forceUseSearch || d.includes("search") || d.push("search");
                        let u = (0, rs.g)(au, d);
                        (0, e7.V)(au, u, t.model);
                        let h = au.get(F.R, t5);
                        (0, th.m)(au, od ? "work" : "chat"), await aW({
                            pathname: "/",
                            search: (0, sA.e)("", nJ)
                        }, {
                            state: {
                                initialChatGptConversationId: u,
                                project: null,
                                chatGptProjectId: (0, te.a)(h) ? h : null,
                                chatGptCustomGptId: (0, te.a)(h) ? null : h,
                                focusComposerNonce: Date.now(),
                                prefillPrompt: l,
                                prefillPromptFormat: c,
                                prefillPromptOnlyIfEmpty: od
                            }
                        });
                        return
                    }
                    await (0, aR.g)(au, {
                        conversationId: t5,
                        isTemporaryChat: nJ,
                        messageId: e,
                        retry: od && "error_retry" === t.source && null == t.model.thinkingEffort ? {
                            ...t,
                            model: au.get(e7.t, t5)
                        } : t
                    })
                } catch {
                    au.get(ea.f).danger(aH.formatMessage({
                        id: "chatgptConversations.regenerate.failed",
                        defaultMessage: "Failed to regenerate response",
                        description: "Error toast shown when generating another version of a ChatGPT response fails"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.regenerate.failed",
                            operation: "regenerate_response",
                            errorCategory: "conversation",
                            conversationId: aU ?? void 0,
                            userFacingError: {
                                surface: (0, ak.b)(null == ot && null == r5 ? null : od),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    })
                }
            }, t6[187] = aT, t6[188] = r5, t6[189] = t5, t6[190] = ot, t6[191] = aH, t6[192] = og, t6[193] = nJ, t6[194] = od, t6[195] = oa, t6[196] = aW, t6[197] = n8, t6[198] = au, t6[199] = aU, t6[200] = ek) : ek = t6[200];
            let il = (0, na.a)(ek);
            t6[201] !== r5 || t6[202] !== t5 || t6[203] !== a7 || t6[204] !== aH || t6[205] !== az || t6[206] !== nJ || t6[207] !== aW || t6[208] !== aq || t6[209] !== oz || t6[210] !== au || t6[211] !== aU || t6[212] !== oS || t6[213] !== as ? (eM = () => {
                if (az || null == aU) return;
                let e = au.get(O.t);
                if (!e && !au.get(O.r) || !e && null == r5 && null == oS) return;
                let t = aL.current?.signal;
                null == t || t.aborted || (aG(as), (e ? (0, nD.f)(au, {
                    chatGptThreadId: t5,
                    conversationTitle: a7
                }).then(e => {
                    if (null == e) return null;
                    let n = (0, E.a)(au, e);
                    if ("created" === e.status) return null == n || t.aborted || au.get(ea.f).danger(n.message, {
                        errorAnalytics: {
                            toastId: "chatgptConversationPage.handleHandoff"
                        }
                    }), e.conversationId;
                    throw (0, E.a)(au, e)
                }) : (0, S.a)({
                    scope: au,
                    projectId: oz ?? void 0,
                    prompt: `Continuing from ${(0,tp.f)({conversationId:aU,title:a7?.trim()||"ChatGPT thread"})}`
                }).then(s8)).then(n => {
                    if (!t.aborted) {
                        if (null != n) return void(e ? aq(n) : aW((0, sA.c)(n, {
                            isTemporaryChat: nJ
                        })));
                        throw Error("Unable to create a Work conversation")
                    }
                }).catch(() => {
                    t.aborted || (aG(null), au.get(ea.f).danger(aH.formatMessage({
                        id: "chatgptConversations.handoffFailed",
                        defaultMessage: "Failed to create chat",
                        description: "Error shown when ChatGPT cannot hand off a conversation to a task"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.handoffFailed"
                        }
                    }))
                }))
            }, t6[201] = r5, t6[202] = t5, t6[203] = a7, t6[204] = aH, t6[205] = az, t6[206] = nJ, t6[207] = aW, t6[208] = aq, t6[209] = oz, t6[210] = au, t6[211] = aU, t6[212] = oS, t6[213] = as, t6[214] = eM) : eM = t6[214];
            let ic = eM;
            t6[215] !== t5 || t6[216] !== aW || t6[217] !== au || t6[218] !== aj || t6[219] !== n0 || t6[220] !== ap ? (eR = () => {
                if (null != ap) {
                    if ((0, eN.e)(t5)) {
                        let e = (0, eS.a)(au, ap, t5);
                        null != e && (au.get(B.a) ? au.set(su.a, e) : aW((0, sA.c)(e)))
                    }
                    return
                }
                let e = au.query.getData(ar.n, n0);
                null != e && null != n0 && null != aj && ((0, F.mb)(au, {
                    conversation: e,
                    conversationId: aj,
                    sharedConversationId: n0
                }), au.get(B.a) ? au.set(su.a, aj) : aW((0, sA.c)(aj)))
            }, t6[215] = t5, t6[216] = aW, t6[217] = au, t6[218] = aj, t6[219] = n0, t6[220] = ap, t6[221] = eR) : eR = t6[221];
            let id = (0, na.a)(eR);
            t6[222] !== n9 ? (eO = n9?.mcpAppContext == null ? null : {
                hostId: t$.a,
                server: "codex_apps",
                connectorId: n9.mcpAppContext.id
            }, t6[222] = n9, t6[223] = eO) : eO = t6[223];
            let iu = (0, p.x)(tz.b, eO),
                ih = n9?.fullscreenContent != null ? "content" : "workspace",
                ip = (0, X.a)(ac ? "embedded" : ih),
                im = !iu && (r2 || !r1.isError) && !al && !op && (null == ap || ah?.authMethod === "chatgpt" || am) && (!aC || null != r5),
                ig = rU || op || oI || ow || oa,
                iv = ig || se || o9?.needsEntry === !0;
            if (se) {
                let e;
                t6[224] !== aH ? (e = aH.formatMessage(o4.d.readOnlyPlaceholder), t6[224] = aH, t6[225] = e) : e = t6[225], eB = e
            } else !ig && o9?.needsEntry && (eB = !1);
            let iy = im && !ig && !aC && !r3 && !og && !rG && !rN && !rO && !oU,
                ix = !im || aC || iv || r3 ? null : aP;
            if (t6[226] !== oU || t6[227] !== aF || t6[228] !== ov || t6[229] !== ox || t6[230] !== r5?.current_node || t6[231] !== t5 || t6[232] !== oE || t6[233] !== ou || t6[234] !== it || t6[235] !== is || t6[236] !== ii || t6[237] !== il || t6[238] !== nY || t6[239] !== al || t6[240] !== iv || t6[241] !== r3 || t6[242] !== oZ || t6[243] !== op || t6[244] !== aC || t6[245] !== rN || t6[246] !== nJ || t6[247] !== on || t6[248] !== rG || t6[249] !== od || t6[250] !== ow || t6[251] !== oa || t6[252] !== aS || t6[253] !== rv || t6[254] !== eE || t6[255] !== sv || t6[256] !== sy || t6[257] !== se || t6[258] !== a4 || t6[259] !== au.get || t6[260] !== a8 || t6[261] !== V?.current_node || t6[262] !== n7 || t6[263] !== im || t6[264] !== s_ || t6[265] !== aV || t6[266] !== rF) {
                let e;
                t6[268] !== ov || t6[269] !== ox || t6[270] !== ou || t6[271] !== od || t6[272] !== aS || t6[273] !== sv || t6[274] !== sy || t6[275] !== se || t6[276] !== au.get || t6[277] !== aV ? (e = se || null == aS || null == sv ? sy : (0, ae.a)({
                    ...sv,
                    current_node: aS.promptMessageId
                }, {
                    clinicalSearchEnabled: ox,
                    clinicalCitationsEnabled: ov,
                    enableCloudBrowserActivity: ou,
                    streamingOrders: aV,
                    isWorkConversation: od,
                    getRenderTelemetry: e => (0, sK.c)(au.get, e)
                }), t6[268] = ov, t6[269] = ox, t6[270] = ou, t6[271] = od, t6[272] = aS, t6[273] = sv, t6[274] = sy, t6[275] = se, t6[276] = au.get, t6[277] = aV, t6[278] = e) : e = t6[278];
                let t = (0, ao.c)({
                    paragen: aS,
                    hideInitialUserMessage: nY,
                    browserConversationId: void 0,
                    conversationId: t5,
                    enableCloudBrowserActivity: ou,
                    errorMessage: it,
                    branchingMessageId: aF,
                    isReadOnly: al || op || aC || null != n7,
                    isTemporaryChat: nJ,
                    isWorkConversation: on,
                    onRegenerateResponse: oU || aC || null != n7 || al || op || ow || oa || rG || rN ? void 0 : il,
                    onEditUserMessage: oU || null == eE || on || al || op || ow || !rF || rN ? void 0 : ii,
                    onFork: null == eE || nJ || ow || oa || al || op ? void 0 : is,
                    pendingSubmissionAttachments: rv,
                    shareEnabled: null == oE && !nJ && !aC && !al && !op && !oZ,
                    readAloudEnabled: !aC && !op,
                    feedbackEnabled: !aC && !op && null == n7,
                    renderedTurns: e,
                    safetyReview: a4,
                    sharedConversationLastMessageId: V?.current_node ?? a8 ?? (aC ? r5?.current_node : null),
                    showPendingLoadingMessage: s_,
                    showRequestUserInputStatus: im && !iv && !r3
                });
                eG = se ? (0, o4.a)(t) : t, t6[226] = oU, t6[227] = aF, t6[228] = ov, t6[229] = ox, t6[230] = r5?.current_node, t6[231] = t5, t6[232] = oE, t6[233] = ou, t6[234] = it, t6[235] = is, t6[236] = ii, t6[237] = il, t6[238] = nY, t6[239] = al, t6[240] = iv, t6[241] = r3, t6[242] = oZ, t6[243] = op, t6[244] = aC, t6[245] = rN, t6[246] = nJ, t6[247] = on, t6[248] = rG, t6[249] = od, t6[250] = ow, t6[251] = oa, t6[252] = aS, t6[253] = rv, t6[254] = eE, t6[255] = sv, t6[256] = sy, t6[257] = se, t6[258] = a4, t6[259] = au.get, t6[260] = a8, t6[261] = V?.current_node, t6[262] = n7, t6[263] = im, t6[264] = s_, t6[265] = aV, t6[266] = rF, t6[267] = eG
            } else eG = t6[267];
            let ib = eG;
            t6[279] !== aH ? (eF = aH.formatMessage({
                id: "chatgptConversations.loadingConversation",
                defaultMessage: "Loading ChatGPT conversation",
                description: "Accessible loading status shown while a ChatGPT conversation is loading in Codex Desktop"
            }), t6[279] = aH, t6[280] = eF) : eF = t6[280];
            let iC = eF,
                i_ = (0, p.x)(os.g, aU ?? t5);
            t6[281] !== r7 || t6[282] !== r5 || t6[283] !== i_ || t6[284] !== al || t6[285] !== r9 || t6[286] !== op || t6[287] !== aC || t6[288] !== oI || t6[289] !== nJ || t6[290] !== aU ? (ez = null != aU && !aC && !oI && !al && !op && !nJ && (0, an.b)(r5, r7, r9, i_), t6[281] = r7, t6[282] = r5, t6[283] = i_, t6[284] = al, t6[285] = r9, t6[286] = op, t6[287] = aC, t6[288] = oI, t6[289] = nJ, t6[290] = aU, t6[291] = ez) : ez = t6[291];
            let iw = ez;
            t6[292] !== iw || t6[293] !== t5 || t6[294] !== aH || t6[295] !== au ? (eL = iw ? async e => {
                try {
                    await (0, nW.renameActiveChatGptConversation)(au, t5, e)
                } catch (e) {
                    throw au.get(ea.f).danger(aH.formatMessage({
                        id: "chatgptConversations.header.renameFailed",
                        defaultMessage: "Couldn't rename this chat. Try again.",
                        description: "Error shown when saving an edited chat title fails"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.header.renameFailed"
                        }
                    }), e
                }
            }: void 0, t6[292] = iw, t6[293] = t5, t6[294] = aH, t6[295] = au, t6[296] = eL) : eL = t6[296];
            let iI = ri || null != r5 ? r8 ?? "" : null;
            t6[297] !== a7 || t6[298] !== eL || t6[299] !== iI ? (eD = (0, a.jsx)(t8.a, {
                className: "max-w-full",
                variant: "flush-start",
                onRename: eL,
                title: a7,
                titleValue: iI
            }), t6[297] = a7, t6[298] = eL, t6[299] = iI, t6[300] = eD) : eD = t6[300];
            let iS = eD;
            t6[301] !== t5 || t6[302] !== oE ? (eH = null == oE ? null : (0, a.jsx)(ro.ChatGptGizmoHeader, {
                conversationId: t5,
                gizmoId: oE
            }), t6[301] = t5, t6[302] = oE, t6[303] = eH) : eH = t6[303];
            let ij = eH;
            t6[304] !== al || t6[305] !== aC || t6[306] !== on ? (eW = !on || aC || al ? null : (0, a.jsx)(tj.a, {
                hostId: t$.a
            }), t6[304] = al, t6[305] = aC, t6[306] = on, t6[307] = eW) : eW = t6[307];
            let iT = eW,
                iE = !aC && null == n7 && !al && !nJ && !a$,
                iA = (0, p.x)(iE ? rQ.a : null, t5);
            t6[308] !== t5 || t6[309] !== iA ? (eq = null != iA ? (0, a.jsx)(oq, {
                conversationId: t5
            }) : null, t6[308] = t5, t6[309] = iA, t6[310] = eq) : eq = t6[310];
            let iP = eq;
            t6[311] !== iy || t6[312] !== t5 || t6[313] !== og || t6[314] !== o9 ? (eU = null != o9 ? (0, a.jsx)("div", {
                className: "max-w-full min-w-0",
                inert: og,
                children: (0, a.jsx)(ok, {
                    conversationId: t5,
                    placement: "progress",
                    canStartSection: iy
                })
            }) : null, t6[311] = iy, t6[312] = t5, t6[313] = og, t6[314] = o9, t6[315] = eU) : eU = t6[315];
            let ik = eU;
            t6[316] !== o6 || t6[317] !== oz || t6[318] !== oJ ? (eX = null == oz ? null : (0, a.jsx)(t3.b, {
                project: {
                    icon: o6,
                    name: oJ
                }
            }), t6[316] = o6, t6[317] = oz, t6[318] = oJ, t6[319] = eX) : eX = t6[319];
            let iM = eX;
            t6[320] !== n6 || t6[321] !== od || t6[322] !== iM || t6[323] !== o6 || t6[324] !== oz || t6[325] !== oJ ? (eZ = null == oz || null == oJ || od || null != n6 ? iM : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(t3.b, {
                        project: {
                            icon: (0, a.jsx)(oC.c, {
                                icon: o6,
                                name: oJ,
                                projectId: oz
                            }),
                            iconInteractive: !0,
                            name: oJ
                        }
                    })
                }), null]
            }), t6[320] = n6, t6[321] = od, t6[322] = iM, t6[323] = o6, t6[324] = oz, t6[325] = oJ, t6[326] = eZ) : eZ = t6[326];
            let iR = eZ,
                iN = ie && !aC && !al;
            t6[327] !== t5 || t6[328] !== ij || t6[329] !== aC ? (eJ = aC ? null : (0, a.jsx)(nu.BusinessAgentConversationHeader, {
                compact: !0,
                conversationId: t5,
                fallback: ij
            }), t6[327] = t5, t6[328] = ij, t6[329] = aC, t6[330] = eJ) : eJ = t6[330], t6[331] !== n6 || t6[332] !== iR || t6[333] !== eJ ? (e0 = (0, a.jsxs)(a.Fragment, {
                children: [n6, eJ, iR]
            }), t6[331] = n6, t6[332] = iR, t6[333] = eJ, t6[334] = e0) : e0 = t6[334], t6[335] !== iS || t6[336] !== nJ || t6[337] !== iT || t6[338] !== iN || t6[339] !== e0 ? (e1 = (0, a.jsx)(oC.a, {
                isTemporaryChat: nJ,
                isCloudTask: iN,
                leading: e0,
                start: iS,
                startActions: iT
            }), t6[335] = iS, t6[336] = nJ, t6[337] = iT, t6[338] = iN, t6[339] = e0, t6[340] = e1) : e1 = t6[340];
            let iO = e1;
            t6[341] !== iO || t6[342] !== iP || t6[343] !== ik ? (e2 = null != iP || null != ik ? (0, a.jsx)(oj, {
                header: iO,
                courseShortcut: iP,
                progress: ik
            }) : null, t6[341] = iO, t6[342] = iP, t6[343] = ik, t6[344] = e2) : e2 = t6[344];
            let iB = e2;
            if (t6[345] !== r1 || t6[346] !== ah?.authMethod || t6[347] !== oU || t6[348] !== n5 || t6[349] !== ob || t6[350] !== oF || t6[351] !== io || t6[352] !== iy || t6[353] !== aT || t6[354] !== oW || t6[355] !== n4 || t6[356] !== r5 || t6[357] !== iO || t6[358] !== t5 || t6[359] !== iC || t6[360] !== ot || t6[361] !== a7 || t6[362] !== sR || t6[363] !== nV || t6[364] !== it || t6[365] !== or || t6[366] !== om || t6[367] !== ex || t6[368] !== oT || t6[369] !== r4 || t6[370] !== ic || t6[371] !== id || t6[372] !== ir || t6[373] !== rJ || t6[374] !== nq || t6[375] !== ax || t6[376] !== al || t6[377] !== sw || t6[378] !== iv || t6[379] !== sf || t6[380] !== r3 || t6[381] !== ia || t6[382] !== aE || t6[383] !== az || t6[384] !== o$ || t6[385] !== ac || t6[386] !== oX || t6[387] !== iu || t6[388] !== r$ || t6[389] !== og || t6[390] !== op || t6[391] !== oc || !1 !== t6[392] || t6[393] !== aC || t6[394] !== oI || t6[395] !== rO || t6[396] !== rN || t6[397] !== nJ || t6[398] !== on || t6[399] !== rG || t6[400] !== od || t6[401] !== o_ || t6[402] !== rW || t6[403] !== ow || t6[404] !== oa || t6[405] !== oe || t6[406] !== iB || t6[407] !== oo.pathname || t6[408] !== r0 || t6[409] !== oi?.sidebarAutomationId || t6[410] !== nZ || t6[411] !== ol || t6[412] !== oY || t6[413] !== o6 || t6[414] !== oz || t6[415] !== oJ || t6[416] !== eB || t6[417] !== oB || t6[418] !== sv || t6[419] !== sy || t6[420] !== n2 || t6[421] !== se || t6[422] !== ip || t6[423] !== r8 || t6[424] !== au || t6[425] !== n$ || t6[426] !== aX || t6[427] !== o9 || t6[428] !== ik || t6[429] !== aU || t6[430] !== sM || t6[431] !== n0 || t6[432] !== ap || t6[433] !== r6 || t6[434] !== n7 || t6[435] !== o7 || t6[436] !== a$ || t6[437] !== iE || t6[438] !== sU || t6[439] !== im || t6[440] !== ad || t6[441] !== s_ || t6[442] !== ix || t6[443] !== s9 || t6[444] !== s1 || t6[445] !== aZ || t6[446] !== nQ || t6[447] !== ib || t6[448] !== n9) {
                tk = Symbol.for("react.early_return_sentinel");
                e: {
                    let e, t, n, r, o, s, i, l, c, d, u, h, p, f = sy.flatMap(s5).flatMap(s6),
                        v = f.flatMap(s4);
                    if (!aC && (r1.error instanceof ni.a && 423 === r1.error.status || oX && null == r0)) {
                        let e;
                        t6[474] !== r1 || t6[475] !== t5 || t6[476] !== au ? (e = (0, a.jsx)(oK.a, {
                            onUnlocked: () => {
                                (0, oV.g)(au.get(oV.f)?.projectId, [t5]), r1.refetch()
                            }
                        }), t6[474] = r1, t6[475] = t5, t6[476] = au, t6[477] = e) : e = t6[477], tk = e;
                        break e
                    }
                    if (null != o7) {
                        let e;
                        t6[478] !== o7 ? (e = (0, a.jsx)(_.l, {
                            replace: !0,
                            to: o7
                        }), t6[478] = o7, t6[479] = e) : e = t6[479], tk = e;
                        break e
                    }
                    e6 = o1,
                    t6[480] !== r5 || t6[481] !== rJ || t6[482] !== al || t6[483] !== ia || t6[484] !== ac || t6[485] !== op || t6[486] !== aC || t6[487] !== od ? (tg = od || aC || ac || op || al || ia || null == r5 && !rJ ? null : (0, a.jsx)(Q.a, {}), t6[480] = r5, t6[481] = rJ, t6[482] = al, t6[483] = ia, t6[484] = ac, t6[485] = op, t6[486] = aC, t6[487] = od, t6[488] = tg) : tg = t6[488],
                    t6[489] !== r1.fetchStatus || t6[490] !== r5 || t6[491] !== ir || t6[492] !== rJ || t6[493] !== ia || t6[494] !== ac ? (tf = !1, t6[489] = r1.fetchStatus, t6[490] = r5, t6[491] = ir, t6[492] = rJ, t6[493] = ia, t6[494] = ac, t6[495] = tf) : tf = t6[495],
                    t6[496] !== r1.data || t6[497] !== r1.fetchStatus || t6[498] !== r5 || t6[499] !== t5 || t6[500] !== ir || t6[501] !== rJ || t6[502] !== sf || t6[503] !== ia || !1 !== t6[504] || t6[505] !== sy.length ? (tv = null, t6[496] = r1.data, t6[497] = r1.fetchStatus, t6[498] = r5, t6[499] = t5, t6[500] = ir, t6[501] = rJ, t6[502] = sf, t6[503] = ia, t6[504] = !1, t6[505] = sy.length, t6[506] = tv) : tv = t6[506],
                    ty = !aC && !op && (0, tB.c)() ? (0, a.jsx)(tG.c, {
                        callIds: v,
                        hostId: t$.a,
                        conversationId: (0, m.Qe)(`chatgpt:${t5}`)
                    }) : null,
                    t6[507] !== a7 || t6[508] !== ac || t6[509] !== ap || t6[510] !== n9?.documentTitle ? (tx = ac ? null : (0, a.jsx)(tw.a, {
                        title: null == ap ? n9?.documentTitle ?? a7 : null
                    }), t6[507] = a7, t6[508] = ac, t6[509] = ap, t6[510] = n9?.documentTitle, t6[511] = tx) : tx = t6[511],
                    t6[512] !== t5 || t6[513] !== ac || t6[514] !== og || t6[515] !== aC || t6[516] !== nJ || t6[517] !== od || t6[518] !== ib ? (tb = ac || od ? null : (0, a.jsx)(rq.a, {
                        conversationId: t5,
                        canCopy: !og,
                        paragenEnabled: !aC,
                        turns: ib,
                        loadHistory: !nJ && !aC
                    }), t6[512] = t5, t6[513] = ac, t6[514] = og, t6[515] = aC, t6[516] = nJ, t6[517] = od, t6[518] = ib, t6[519] = tb) : tb = t6[519];
                    let x = null != r5 || rJ;t6[520] !== ir || t6[521] !== od || t6[522] !== x ? (tC = (0, a.jsx)(nl.a, {
                        isWorkConversation: od,
                        hasConversationContent: x,
                        hasLoadError: ir
                    }), t6[520] = ir, t6[521] = od, t6[522] = x, t6[523] = tC) : tC = t6[523],
                    t6[524] !== r5 || t6[525] !== t5 || t6[526] !== ir || t6[527] !== rJ || t6[528] !== ia || t6[529] !== ac || t6[530] !== oo.pathname || t6[531] !== au || t6[532] !== n0 ? (tS = ac || ia || ir || null == r5 && !rJ ? null : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(si, {
                            sharedConversationId: n0
                        }), (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)(tH.a, {
                                onCommit: () => tD.a.contentCommitted(au, t5, n0, oo.pathname),
                                onPaint: () => tD.a.contentVisible(au, t5, n0)
                            }, n0 ?? t5)
                        })]
                    }), t6[524] = r5, t6[525] = t5, t6[526] = ir, t6[527] = rJ, t6[528] = ia, t6[529] = ac, t6[530] = oo.pathname, t6[531] = au, t6[532] = n0, t6[533] = tS) : tS = t6[533],
                    t6[534] !== ah?.authMethod || t6[535] !== oF || t6[536] !== oW || t6[537] !== r5 || t6[538] !== iO || t6[539] !== t5 || t6[540] !== ot || t6[541] !== a7 || t6[542] !== sR || t6[543] !== ex || t6[544] !== oT || t6[545] !== ic || t6[546] !== al || t6[547] !== sw || t6[548] !== az || t6[549] !== o$ || t6[550] !== ac || t6[551] !== oX || t6[552] !== op || t6[553] !== aC || t6[554] !== nJ || t6[555] !== rG || t6[556] !== od || t6[557] !== iB || t6[558] !== oi?.sidebarAutomationId || t6[559] !== ol || t6[560] !== o6 || t6[561] !== oz || t6[562] !== oJ || t6[563] !== oB || t6[564] !== sv || t6[565] !== sy.length || t6[566] !== au || t6[567] !== aU || t6[568] !== sM || t6[569] !== n7 || t6[570] !== a$ || t6[571] !== iE || t6[572] !== sU || t6[573] !== ix || t6[574] !== s9 || t6[575] !== aZ || t6[576] !== n9 ? (tA = ac || null != n9 ? null : (0, a.jsxs)(rK.a, {
                        chatIcon: null == oz ? void 0 : o6,
                        header: null != iB ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(a.Fragment, {
                                children: iB
                            }), null]
                        }) : iO,
                        title: a7,
                        isArchivedPreview: al,
                        children: [null, ah?.authMethod === "chatgpt" ? (0, a.jsx)(tT.s, {
                            productExperience: od ? "work" : "chat"
                        }) : null, aC ? (0, a.jsx)(sd.a, {
                            children: null == oB ? null : (0, a.jsx)(a.Fragment, {
                                children: (0, a.jsx)(sb, {
                                    data: oB
                                })
                            })
                        }) : null, iE ? (0, a.jsx)(rX, {
                            conversationId: t5,
                            scheduledAutomationId: ol ? oi?.sidebarAutomationId : void 0
                        }, t5) : null, sU ? (0, a.jsx)(rx, {
                            composerActions: ix,
                            conversationId: s9,
                            controlledState: sw ? {
                                isOpen: sR.isOpen,
                                shouldPreventAutoFocus: sR.shouldPreventAutoFocus,
                                onOpenChange: e => {
                                    sM({
                                        ...sR,
                                        isOpen: e,
                                        shouldPreventAutoFocus: !e && sR.shouldPreventAutoFocus
                                    })
                                }
                            } : void 0,
                            readData: !sw || sR.isOpen ? ex : null,
                            showSources: !sw,
                            shouldBlockExternalEgress: a$
                        }) : null, nJ && !aC && !al && null == oT && null == oW && null == oz && !o$ && null != sv && (0, g.a)(sv).some(s3) ? (0, a.jsx)(A.a.HeaderAction, {
                            actionId: "chatgpt-conversation-save",
                            align: "end",
                            order: 100,
                            children: (0, a.jsx)(sO, {
                                conversationId: t5
                            })
                        }) : null, nJ || al || op ? null : (0, a.jsx)(oC.b, {
                            menu: aC || null == aU ? (0, a.jsx)(oy, {}) : (0, a.jsx)(of, {
                                conversationId: t5,
                                title: a7,
                                isHandoffPending: az,
                                isArchived: r5?.is_archived === !0,
                                isChatConversation: null != r5 && !od,
                                onHandoff: oF ? ic : void 0,
                                onOpenMessage: async e => {
                                    aL.current?.signal.aborted === !1 && au.get(T.b)?.pathname === au.value.pathname && await aA.current?.scrollToMessage(e)
                                },
                                projectId: oz,
                                projectName: oJ,
                                serverConversationId: aU,
                                conversationOrigin: ot
                            }),
                            children: aC || oX ? null : (0, a.jsx)(aw, {
                                conversationId: t5,
                                projectId: oz,
                                sharedProjectConversation: n7,
                                isReady: (null != aU || null != n7) && sy.length > 0 && (aZ ?? r5?.current_node) != null,
                                isRestricted: a$ || o$,
                                isStreaming: rG
                            })
                        })]
                    }), t6[534] = ah?.authMethod, t6[535] = oF, t6[536] = oW, t6[537] = r5, t6[538] = iO, t6[539] = t5, t6[540] = ot, t6[541] = a7, t6[542] = sR, t6[543] = ex, t6[544] = oT, t6[545] = ic, t6[546] = al, t6[547] = sw, t6[548] = az, t6[549] = o$, t6[550] = ac, t6[551] = oX, t6[552] = op, t6[553] = aC, t6[554] = nJ, t6[555] = rG, t6[556] = od, t6[557] = iB, t6[558] = oi?.sidebarAutomationId, t6[559] = ol, t6[560] = o6, t6[561] = oz, t6[562] = oJ, t6[563] = oB, t6[564] = sv, t6[565] = sy.length, t6[566] = au, t6[567] = aU, t6[568] = sM, t6[569] = n7, t6[570] = a$, t6[571] = iE, t6[572] = sU, t6[573] = ix, t6[574] = s9, t6[575] = aZ, t6[576] = n9, t6[577] = tA) : tA = t6[577],
                    tP = null,
                    e4 = rr.a,
                    to = aT,
                    ts = ot,
                    ti = !ad || !im || ip.isHidden || iv || oU || og || r3 || al || op || oI || ow || oa || rO || rN,
                    tl = nJ,
                    td = oz,
                    tm = null != oW,
                    e3 = t2.c,
                    e8 = om,
                    t6[578] !== ac || t6[579] !== oc || t6[580] !== od || t6[581] !== ik || t6[582] !== n9 ? (e9 = ac || null != n9 ? ik : oc && (0, t9.a)() && !od && (0, a.jsx)("div", {
                        className: "h-px",
                        "aria-hidden": !0
                    }), t6[578] = ac, t6[579] = oc, t6[580] = od, t6[581] = ik, t6[582] = n9, t6[583] = e9) : e9 = t6[583],
                    tn = n5;
                    let b = null == o9 ? "flex h-full min-h-0 flex-col" : "h-full",
                        C = r8 ?? a7,
                        w = !og,
                        I = !aE && !ac && !aC && !iu && !ip.isHidden,
                        S = a$ || ob,
                        j = or?.isFullWidth === !0,
                        E = null == or ? s1.contentShift : void 0,
                        P = o9?.selectedIndex;t6[584] !== iy || t6[585] !== t5 || t6[586] !== o9 ? (e = null != o9 ? (0, a.jsx)(ok, {
                        conversationId: t5,
                        placement: "composer",
                        canStartSection: iy
                    }) : void 0, t6[584] = iy, t6[585] = t5, t6[586] = o9, t6[587] = e) : e = t6[587],
                    t6[588] !== t5 || t6[589] !== o9 ? (t = null != o9 ? (0, a.jsx)(oP, {
                        conversationId: t5
                    }) : void 0, t6[588] = t5, t6[589] = o9, t6[590] = t) : t = t6[590];
                    let k = !od,
                        M = se ? null : it;t6[591] !== r1 || t6[592] !== io ? (n = io ? () => {
                        r1.refetch({
                            cancelRefetch: !1
                        })
                    } : void 0, t6[591] = r1, t6[592] = io, t6[593] = n) : n = t6[593];
                    let R = sy.length > 0,
                        N = eB,
                        O = !o$ && (null == oz || null != oY),
                        B = null == o9 && !oe,
                        G = r1.isFetching,
                        F = !se && rG;t6[594] !== r5?.is_archived || t6[595] !== t5 || t6[596] !== al || t6[597] !== ac || t6[598] !== aC || t6[599] !== nJ || t6[600] !== rG || t6[601] !== od ? (r = ac || !od || aC || al || r5?.is_archived === !0 || nJ ? null : (0, a.jsx)(y.Suspense, {
                        fallback: null,
                        children: (0, a.jsx)(oA, {
                            conversationId: t5,
                            isTurnActive: rG
                        })
                    }), t6[594] = r5?.is_archived, t6[595] = t5, t6[596] = al, t6[597] = ac, t6[598] = aC, t6[599] = nJ, t6[600] = rG, t6[601] = od, t6[602] = r) : r = t6[602],
                    t6[603] !== t5 || t6[604] !== al || t6[605] !== aU ? (o = al ? (0, a.jsx)(tZ.a, {
                        conversationId: aU ?? t5,
                        kind: "chatgpt"
                    }, aU ?? t5) : void 0, t6[603] = t5, t6[604] = al, t6[605] = aU, t6[606] = o) : o = t6[606];
                    let z = !se && s_;t6[607] !== oW ? (s = null != oW ? (0, a.jsx)(oN.GptPluginMigrationBanner, {
                        gizmoId: oW
                    }) : null, t6[607] = oW, t6[608] = s) : s = t6[608],
                    t6[609] !== oF || t6[610] !== ic || t6[611] !== az || t6[612] !== nJ || t6[613] !== o_ || t6[614] !== rW ? (i = o_ && !nJ ? (0, a.jsx)(rL, {
                        canConvert: oF,
                        isChatInstantAvailable: !rW,
                        isConverting: az,
                        onConvert: ic
                    }) : null, t6[609] = oF, t6[610] = ic, t6[611] = az, t6[612] = nJ, t6[613] = o_, t6[614] = rW, t6[615] = i) : i = t6[615],
                    t6[616] !== r4 || t6[617] !== op ? (l = r4.bind(null, op), t6[616] = r4, t6[617] = op, t6[618] = l) : l = t6[618],
                    t6[619] !== id || t6[620] !== aC || t6[621] !== nZ ? (c = e => {
                        nZ?.(e), aC && id()
                    }, t6[619] = id, t6[620] = aC, t6[621] = nZ, t6[622] = c) : c = t6[622],
                    t6[623] !== r1.isFetching || t6[624] !== oU || t6[625] !== aT || t6[626] !== oW || t6[627] !== n4 || t6[628] !== t5 || t6[629] !== iC || t6[630] !== nV || t6[631] !== ir || t6[632] !== nq || t6[633] !== ax || t6[634] !== iv || t6[635] !== sf || t6[636] !== r3 || t6[637] !== ia || t6[638] !== aE || t6[639] !== ac || t6[640] !== aC || t6[641] !== nJ || t6[642] !== on || t6[643] !== eB || t6[644] !== n2 || t6[645] !== n$ || t6[646] !== aX || t6[647] !== n0 || t6[648] !== r6 || t6[649] !== im || t6[650] !== ad || t6[651] !== C || t6[652] !== w || t6[653] !== I || t6[654] !== S || t6[655] !== j || t6[656] !== E || t6[657] !== P || t6[658] !== e || t6[659] !== t || t6[660] !== k || t6[661] !== M || t6[662] !== n || t6[663] !== R || t6[664] !== O || t6[665] !== B || t6[666] !== F || t6[667] !== r || t6[668] !== o || t6[669] !== z || t6[670] !== s || t6[671] !== i || t6[672] !== l || t6[673] !== c || t6[674] !== nQ || t6[675] !== ib || t6[676] !== n9 ? (d = (0, a.jsx)(s7, {
                        ref: aA,
                        printTitle: C,
                        trackShownImpressions: w,
                        trackReadState: I,
                        workspace: n9,
                        shouldBlockMcpApps: S,
                        isCoveredByFloatingPanel: j,
                        isFormOnly: aE,
                        isInlinePreview: ac,
                        hideModelPicker: nq,
                        showFilePicker: ad,
                        disableAutoFocus: nV,
                        transcriptPresentation: nQ,
                        scrollOrigin: n$,
                        composerRef: aM,
                        contentX: E,
                        conversationId: t5,
                        composerConversationId: aT,
                        sectionIndex: P,
                        composerLeadingContent: n4,
                        aboveComposerContent: e,
                        historyLoadingContent: t,
                        requiredSystemHints: n2,
                        isChatConversation: k,
                        customGptId: oW,
                        conversationLoadingLabel: iC,
                        entries: ib,
                        errorMessage: M,
                        hasLoadError: ir,
                        onRetryLoad: n,
                        hasRenderableTurns: R,
                        isComposerDisabled: iv,
                        readOnlyPlaceholder: N,
                        moreDetailsEnabled: O,
                        isConversationEmpty: sf,
                        showEmptyState: B,
                        isConversationFetching: G,
                        isConversationLoading: ia,
                        isSharedConversation: aC,
                        isSubmitDisabled: r3,
                        isTemporaryChat: nJ,
                        isTurnActive: F,
                        isWorkConversation: on,
                        onboardingPrelude: r,
                        scrollStateConversationId: aX,
                        initialResponsePlacementKey: ax,
                        sharedConversationId: n0,
                        sharedPostRegulatedConnectorKind: r6,
                        showComposer: im,
                        archivedPreviewFooter: o,
                        showPendingLoadingMessage: z,
                        gptPluginMigrationBanner: s,
                        awaitingGptContinuation: oU,
                        workOnlyConversionBanner: i,
                        onAddSelectedText: l,
                        onSubmitAccepted: c
                    }), t6[623] = r1.isFetching, t6[624] = oU, t6[625] = aT, t6[626] = oW, t6[627] = n4, t6[628] = t5, t6[629] = iC, t6[630] = nV, t6[631] = ir, t6[632] = nq, t6[633] = ax, t6[634] = iv, t6[635] = sf, t6[636] = r3, t6[637] = ia, t6[638] = aE, t6[639] = ac, t6[640] = aC, t6[641] = nJ, t6[642] = on, t6[643] = eB, t6[644] = n2, t6[645] = n$, t6[646] = aX, t6[647] = n0, t6[648] = r6, t6[649] = im, t6[650] = ad, t6[651] = C, t6[652] = w, t6[653] = I, t6[654] = S, t6[655] = j, t6[656] = E, t6[657] = P, t6[658] = e, t6[659] = t, t6[660] = k, t6[661] = M, t6[662] = n, t6[663] = R, t6[664] = O, t6[665] = B, t6[666] = F, t6[667] = r, t6[668] = o, t6[669] = z, t6[670] = s, t6[671] = i, t6[672] = l, t6[673] = c, t6[674] = nQ, t6[675] = ib, t6[676] = n9, t6[677] = d) : d = t6[677],
                    t6[678] !== sR || t6[679] !== ex || t6[680] !== sw || t6[681] !== a$ || t6[682] !== sU || t6[683] !== ix || t6[684] !== s9 || t6[685] !== s1 ? (u = sU && null != ex && (!sw || sR.isOpen) ? (0, a.jsx)(ry, {
                        composerActions: ix,
                        conversationId: s9,
                        readData: ex,
                        showSources: !sw,
                        display: s1,
                        shouldBlockExternalEgress: a$
                    }) : null, t6[678] = sR, t6[679] = ex, t6[680] = sw, t6[681] = a$, t6[682] = sU, t6[683] = ix, t6[684] = s9, t6[685] = s1, t6[686] = u) : u = t6[686],
                    t6[687] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, a.jsx)(ra.a, {}), t6[687] = h) : h = t6[687],
                    t6[688] !== ac ? (p = null, t6[688] = ac, t6[689] = p) : p = t6[689],
                    t6[690] !== og || t6[691] !== b || t6[692] !== d || t6[693] !== u || t6[694] !== p ? (ta = (0, a.jsxs)("div", {
                        className: b,
                        inert: og,
                        children: [d, u, h, p]
                    }), t6[690] = og, t6[691] = b, t6[692] = d, t6[693] = u, t6[694] = p, t6[695] = ta) : ta = t6[695],
                    tr = !op && (0, tB.c)() ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(s$, {
                            conversationId: t5,
                            shouldBlockExternalEgress: a$ || ob,
                            widgets: f.filter(s2)
                        }), aC ? null : (0, a.jsx)(tF.a, {
                            blockedWidgetSource: r$ ? void 0 : "descriptor",
                            transcriptMcpAppIds: (0, sY.c)(t5, f, r$),
                            shouldBlockExternalEgress: a$ || ob
                        })]
                    }) : null
                }
                t6[345] = r1, t6[346] = ah?.authMethod, t6[347] = oU, t6[348] = n5, t6[349] = ob, t6[350] = oF, t6[351] = io, t6[352] = iy, t6[353] = aT, t6[354] = oW, t6[355] = n4, t6[356] = r5, t6[357] = iO, t6[358] = t5, t6[359] = iC, t6[360] = ot, t6[361] = a7, t6[362] = sR, t6[363] = nV, t6[364] = it, t6[365] = or, t6[366] = om, t6[367] = ex, t6[368] = oT, t6[369] = r4, t6[370] = ic, t6[371] = id, t6[372] = ir, t6[373] = rJ, t6[374] = nq, t6[375] = ax, t6[376] = al, t6[377] = sw, t6[378] = iv, t6[379] = sf, t6[380] = r3, t6[381] = ia, t6[382] = aE, t6[383] = az, t6[384] = o$, t6[385] = ac, t6[386] = oX, t6[387] = iu, t6[388] = r$, t6[389] = og, t6[390] = op, t6[391] = oc, t6[392] = !1, t6[393] = aC, t6[394] = oI, t6[395] = rO, t6[396] = rN, t6[397] = nJ, t6[398] = on, t6[399] = rG, t6[400] = od, t6[401] = o_, t6[402] = rW, t6[403] = ow, t6[404] = oa, t6[405] = oe, t6[406] = iB, t6[407] = oo.pathname, t6[408] = r0, t6[409] = oi?.sidebarAutomationId, t6[410] = nZ, t6[411] = ol, t6[412] = oY, t6[413] = o6, t6[414] = oz, t6[415] = oJ, t6[416] = eB, t6[417] = oB, t6[418] = sv, t6[419] = sy, t6[420] = n2, t6[421] = se, t6[422] = ip, t6[423] = r8, t6[424] = au, t6[425] = n$, t6[426] = aX, t6[427] = o9, t6[428] = ik, t6[429] = aU, t6[430] = sM, t6[431] = n0, t6[432] = ap, t6[433] = r6, t6[434] = n7, t6[435] = o7, t6[436] = a$, t6[437] = iE, t6[438] = sU, t6[439] = im, t6[440] = ad, t6[441] = s_, t6[442] = ix, t6[443] = s9, t6[444] = s1, t6[445] = aZ, t6[446] = nQ, t6[447] = ib, t6[448] = n9, t6[449] = e3, t6[450] = e4, t6[451] = e6, t6[452] = e8, t6[453] = e9, t6[454] = tn, t6[455] = ta, t6[456] = tr, t6[457] = to, t6[458] = ts, t6[459] = ti, t6[460] = tl, t6[461] = td, t6[462] = tm, t6[463] = tg, t6[464] = tf, t6[465] = tv, t6[466] = ty, t6[467] = tx, t6[468] = tb, t6[469] = tC, t6[470] = tS, t6[471] = tA, t6[472] = tP, t6[473] = tk
            } else e3 = t6[449], e4 = t6[450], e6 = t6[451], e8 = t6[452], e9 = t6[453], tn = t6[454], ta = t6[455], tr = t6[456], to = t6[457], ts = t6[458], ti = t6[459], tl = t6[460], td = t6[461], tm = t6[462], tg = t6[463], tf = t6[464], tv = t6[465], ty = t6[466], tx = t6[467], tb = t6[468], tC = t6[469], tS = t6[470], tA = t6[471], tP = t6[472], tk = t6[473];
            if (tk !== Symbol.for("react.early_return_sentinel")) return tk;
            t6[696] !== e3 || t6[697] !== e8 || t6[698] !== e9 || t6[699] !== tn || t6[700] !== ta || t6[701] !== tr ? (tM = (0, a.jsxs)(e3, {
                floatingPanelWidth: e8,
                header: e9,
                banner: tn,
                children: [ta, tr]
            }), t6[696] = e3, t6[697] = e8, t6[698] = e9, t6[699] = tn, t6[700] = ta, t6[701] = tr, t6[702] = tM) : tM = t6[702], t6[703] !== e4 || t6[704] !== tM || t6[705] !== to || t6[706] !== ts || t6[707] !== ti || t6[708] !== tl || t6[709] !== td || t6[710] !== tm ? (tR = (0, a.jsx)(e4, {
                conversationId: to,
                conversationOrigin: ts,
                disabled: ti,
                isTemporaryChat: tl,
                projectId: td,
                requiresGizmoId: tm,
                children: tM
            }), t6[703] = e4, t6[704] = tM, t6[705] = to, t6[706] = ts, t6[707] = ti, t6[708] = tl, t6[709] = td, t6[710] = tm, t6[711] = tR) : tR = t6[711], t6[712] !== e6 || t6[713] !== tR || t6[714] !== tg || t6[715] !== tf || t6[716] !== tv || t6[717] !== ty || t6[718] !== tx || t6[719] !== tb || t6[720] !== tC || t6[721] !== tS || t6[722] !== tA || t6[723] !== tP ? (tN = (0, a.jsxs)(e6, {
                children: [tg, tf, tv, ty, tx, tb, tC, tS, tA, tP, tR]
            }), t6[712] = e6, t6[713] = tR, t6[714] = tg, t6[715] = tf, t6[716] = tv, t6[717] = ty, t6[718] = tx, t6[719] = tb, t6[720] = tC, t6[721] = tS, t6[722] = tA, t6[723] = tP, t6[724] = tN) : tN = t6[724];
            let iG = tN,
                iF = !ac && !on,
                iz = aC || !r1.isFetchedAfterMount || r1.isFetching || r2 ? null : r1.error,
                iL = ir ? r1.error : null,
                iD = null == ot && null == r5 ? null : od,
                iH = !od && !ia;
            return t6[725] !== aP || t6[726] !== aT || t6[727] !== n0 ? (tK = {
                conversationId: aT,
                composer: aP,
                sharedConversationId: n0
            }, t6[725] = aP, t6[726] = aT, t6[727] = n0, t6[728] = tK) : tK = t6[728], t6[729] !== iG || t6[730] !== tK ? (tY = (0, a.jsx)(nU.a, {
                value: tK,
                children: iG
            }), t6[729] = iG, t6[730] = tK, t6[731] = tY) : tY = t6[731], t6[732] !== iH || t6[733] !== tY ? (tJ = (0, a.jsx)(w.a, {
                enabled: iH,
                children: tY
            }), t6[732] = iH, t6[733] = tY, t6[734] = tJ) : tJ = t6[734], t6[735] !== io || t6[736] !== aU || t6[737] !== iF || t6[738] !== iz || t6[739] !== iL || t6[740] !== iD || t6[741] !== tJ ? (t4 = (0, a.jsx)(ee.a, {
                showChatFallback: iF,
                conversationId: aU,
                error: iz,
                loadError: iL,
                canRetry: io,
                isWorkConversation: iD,
                children: tJ
            }), t6[735] = io, t6[736] = aU, t6[737] = iF, t6[738] = iz, t6[739] = iL, t6[740] = iD, t6[741] = tJ, t6[742] = t4) : t4 = t6[742], t4
        }

        function s2(e) {
            return "chatgpt-hosted-widget" === e.type
        }

        function s3(e) {
            return "user" === e.author.role
        }

        function s4(e) {
            return "mcp-tool-call" === e.type ? [e.callId] : []
        }

        function s6(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : e
        }

        function s5(e) {
            let {
                turn: t
            } = e;
            return t.items
        }

        function s8(e) {
            return "threadId" in e ? e.threadId : e.clientThreadId
        }

        function s7(e) {
            let t, n, o, s, c, u, h, m, g, f, v, b, _, w, I, S, j, T, E, A, P, k, M, N, O, B, G, L, D = (0, r.c)(235),
                {
                    ref: H,
                    printTitle: q,
                    trackReadState: U,
                    trackShownImpressions: K,
                    composerRef: V,
                    workspace: Y,
                    shouldBlockMcpApps: Q,
                    contentX: $,
                    conversationId: Z,
                    sectionIndex: J,
                    composerConversationId: ee,
                    composerLeadingContent: et,
                    aboveComposerContent: en,
                    historyLoadingContent: ea,
                    requiredSystemHints: er,
                    isCoveredByFloatingPanel: eo,
                    isFormOnly: es,
                    isInlinePreview: ei,
                    hideModelPicker: el,
                    showFilePicker: ec,
                    disableAutoFocus: ed,
                    transcriptPresentation: eu,
                    scrollOrigin: eh,
                    isChatConversation: ep,
                    customGptId: em,
                    conversationLoadingLabel: eg,
                    entries: ef,
                    errorMessage: ev,
                    hasLoadError: ex,
                    onRetryLoad: eb,
                    hasRenderableTurns: eC,
                    isComposerDisabled: e_,
                    readOnlyPlaceholder: ew,
                    moreDetailsEnabled: eI,
                    isConversationEmpty: ej,
                    showEmptyState: eT,
                    isConversationFetching: eE,
                    isConversationLoading: eA,
                    isSharedConversation: eP,
                    isSubmitDisabled: ek,
                    isTemporaryChat: eM,
                    isTurnActive: eR,
                    isWorkConversation: eN,
                    onboardingPrelude: eG,
                    scrollStateConversationId: eF,
                    initialResponsePlacementKey: eL,
                    sharedConversationId: eD,
                    sharedPostRegulatedConnectorKind: eW,
                    showComposer: eq,
                    archivedPreviewFooter: eU,
                    showPendingLoadingMessage: eK,
                    gptPluginMigrationBanner: eV,
                    awaitingGptContinuation: eY,
                    workOnlyConversionBanner: eQ,
                    onAddSelectedText: e$,
                    onSubmitAccepted: eX
                } = e,
                eZ = void 0 === eT || eT,
                eJ = (0, p.y)(z.a),
                e1 = (0, p.z)(null),
                e2 = (0, p.x)(eS.f, (0, y.useContext)(R.a)),
                e3 = (0, p.z)(tV.a),
                e4 = (0, p.x)(nr.a, Z),
                e5 = Y?.fullscreenContent != null ? "content" : "workspace",
                e8 = (0, X.a)(ei ? "embedded" : e5),
                e7 = (0, p.z)(oU.a),
                e9 = eq && e7?.source.turnContext.conversationId !== ee,
                te = "floating" === e8.placement,
                [tt, tn] = (0, y.useState)(!1),
                ta = Y?.fullscreenContent != null || te && tt && !e8.isHidden && !es ? "floating" : "main",
                tr = (0, p.z)(oz.h),
                to = ep && null == eD && null == e2 && null == eU,
                ts = !eA && !eR && !ex && ej && !eC,
                tl = (0, p.x)(F.i, Z),
                tc = eZ && to && ts && null == tl && !e4 && !te,
                td = null == em ? "centered-home" : "home",
                tu = eZ && !e4 && (!to || !ej),
                th = (0, y.useRef)(null),
                [tp, tf] = (0, y.useState)(null),
                [t_, tw] = (0, y.useState)(!1);
            D[0] !== ef || D[1] !== tp ? (t = () => ({
                async scrollToMessage(e) {
                    let t = ef.find(t => {
                        let {
                            turn: n
                        } = t;
                        return n.messageIds.includes(e)
                    });
                    null != t && null != tp && await tp.scrollToKey(t.turnKey, void 0, {
                        align: "top"
                    })
                }
            }), n = [ef, tp], D[0] = ef, D[1] = tp, D[2] = t, D[3] = n) : (t = D[2], n = D[3]), (0, y.useImperativeHandle)(H, t, n), D[4] !== ef ? (o = () => ef, D[4] = ef, D[5] = o) : o = D[5];
            let tI = (0, na.a)(o);
            D[6] !== ef || D[7] !== tp?.scrollToKey ? (s = e => {
                let t = d()(ef, it);
                return (0, tC.a)(tp?.scrollToKey, t?.turnKey, e)
            }, D[6] = ef, D[7] = tp?.scrollToKey, D[8] = s) : s = D[8];
            let tS = s,
                [tj, tT] = (0, y.useState)(null);
            D[9] !== ei || D[10] !== eJ || D[11] !== eF ? (c = () => ei ? 0 : eJ.get(t5.a, eF), D[9] = ei, D[10] = eJ, D[11] = eF, D[12] = c) : c = D[12];
            let [tE, tP] = (0, y.useState)(c);
            D[13] !== ei || D[14] !== tj || D[15] !== eJ || D[16] !== eF ? (u = e => {
                ei || eJ.set(t5.a, eF, (0, t4.a)(e, tj?.getHeightPx() ?? 0))
            }, D[13] = ei, D[14] = tj, D[15] = eJ, D[16] = eF, D[17] = u) : u = D[17];
            let tk = (0, na.a)(u);
            D[18] !== ef || D[19] !== tp ? (h = (e, t) => (0, tg.c)(tp, ef.find(t => {
                let {
                    id: n
                } = t;
                return n === e
            })?.turnKey, t), D[18] = ef, D[19] = tp, D[20] = h) : h = D[20];
            let tM = (0, na.a)(h);
            D[21] !== Z || D[22] !== ef || D[23] !== tp ? (m = async e => {
                let t = ef.find(t => {
                    let {
                        turn: n
                    } = t;
                    return n.messageIds.includes(e)
                });
                null != t && null != tp && await tp.scrollToKey(t.turnKey, t => t.querySelector(`[id="${CSS.escape(`delayed-image-gen-${Z}-${e}`)}"]`), {
                    align: "center"
                })
            }, D[21] = Z, D[22] = ef, D[23] = tp, D[24] = m) : m = D[24];
            let tN = (0, na.a)(m);
            D[25] === Symbol.for("react.memo_cache_sentinel") ? (g = e => (0, tg.a)(th.current, e), D[25] = g) : g = D[25];
            let tO = (0, na.a)(g),
                tB = `chatgpt:${Z}`;
            if (D[26] !== Z || D[27] !== tI || D[28] !== tO || D[29] !== eM || D[30] !== eJ || D[31] !== tM || D[32] !== eD || D[33] !== e2 || D[34] !== tB) {
                let e;
                D[36] !== Z || D[37] !== eM || D[38] !== eJ || D[39] !== eD || D[40] !== e2 ? (e = async e => {
                    let t = eJ.get(F.j, Z);
                    !eM && null == eD && null == e2 && null != t && eJ.get(eB.b) > 0 && await (0, eO.a)(eJ, t, e)
                }, D[36] = Z, D[37] = eM, D[38] = eJ, D[39] = eD, D[40] = e2, D[41] = e) : e = D[41], f = function(e) {
                    let {
                        getTurns: t,
                        routeContextId: n,
                        scrollAdapter: a,
                        ensureHistory: r
                    } = e, o = (0, ah.a)({
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
                                            unitId: (0, nQ.a)("user", t),
                                            text: n
                                        }]
                                    }
                                    if ("assistant-message" === e.type) {
                                        let n = (0, am.a)(e.content, ey.b),
                                            a = [],
                                            r = "";
                                        for (; e.content.includes(r);) r += "";
                                        let o = (0, au.a)(function e(t, n, a, r) {
                                                let o = "",
                                                    s = 0;
                                                for (let i of t) {
                                                    let t = n.indexOf(i.raw, s); - 1 !== t && (o += n.slice(s, t), o += function(t, n, a) {
                                                        var r, o;
                                                        if ("math" === t.type && "text" in t && "string" == typeof t.text) return a(t.text);
                                                        if ("codexDirective" === (r = t).type && "name" in r && "string" == typeof r.name && "attributes" in r && null != r.attributes && "object" == typeof r.attributes) return function(e, t) {
                                                            if (e.name === ey.a) {
                                                                let n = (0, ag.a)(e.attributes),
                                                                    a = (0, ag.b)(e.attributes),
                                                                    r = null != n ? t[n] : null == a ? void 0 : t.find(e => (0, ey.l)(e) === a);
                                                                if (null == r) return "";
                                                                let o = (0, ey.i)(r);
                                                                return "hidden" === o || "block" === o ? "" : (0, ey.j)(r) ?? ""
                                                            }
                                                            return e.name === ad.a ? (0, ap.a)(e.attributes, "label") ?? "" : e.name === ad.b || e.name === ad.c ? "" : e.name === ac.a ? e.text ?? "" : null
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
                                            unitId: (0, nQ.a)("assistant", t),
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
                    getTurns: tI,
                    routeContextId: tB,
                    scrollAdapter: {
                        scrollToTurn: tM,
                        getTurnContainer: tO
                    },
                    ensureHistory: e
                }), D[26] = Z, D[27] = tI, D[28] = tO, D[29] = eM, D[30] = eJ, D[31] = tM, D[32] = eD, D[33] = e2, D[34] = tB, D[35] = f
            } else f = D[35];
            let tG = f;
            D[42] !== tG.contextId ? (v = {
                containerRef: th,
                contextId: tG.contextId
            }, D[42] = tG.contextId, D[43] = v) : v = D[43], (0, tx.a)(v);
            let tF = e9 && null == eU,
                tz = e3 && tF && !te,
                tL = (0, tA.a)();
            D[44] !== Z || D[45] !== eC || D[46] !== eo || D[47] !== J || D[48] !== tL ? (b = {
                conversationId: Z,
                sectionIndex: J,
                hasRenderableTurns: eC,
                isCoveredByFloatingPanel: eo,
                shouldReduceMotion: tL,
                containerRef: th
            }, D[44] = Z, D[45] = eC, D[46] = eo, D[47] = J, D[48] = tL, D[49] = b) : b = D[49];
            let tD = function(e) {
                    let t, n, a, o = (0, r.c)(12),
                        {
                            conversationId: s,
                            sectionIndex: i,
                            hasRenderableTurns: l,
                            isCoveredByFloatingPanel: c,
                            shouldReduceMotion: d,
                            containerRef: u
                        } = e,
                        h = (0, o6.a)(0);
                    o[0] !== s || o[1] !== i ? (t = {
                        conversationId: s,
                        sectionIndex: i
                    }, o[0] = s, o[1] = i, o[2] = t) : t = o[2];
                    let p = (0, y.useRef)(t);
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
                                Array.from(n.querySelectorAll('[data-markdown-text-style="assistant-message"]')).some(o7) && 0 !== n.clientWidth && (o.disconnect(), h.set(a * n.clientWidth), e = (0, o5.a)(h, 0, {
                                    duration: .3,
                                    ease: o8.d
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
                    }, a = [s, i, l, d, c, h, u], o[3] = u, o[4] = s, o[5] = l, o[6] = c, o[7] = i, o[8] = h, o[9] = d, o[10] = n, o[11] = a) : (n = o[10], a = o[11]), (0, y.useLayoutEffect)(n, a), h
                }(b),
                tH = tF && te,
                [tW, tq] = (0, y.useState)(null),
                [tU, tQ] = (0, y.useState)(null),
                [t$, tX] = (0, y.useState)(null),
                tZ = eP && tF && !e_ && !te && !e3,
                [t0, t1] = (0, y.useState)(null);
            D[50] !== eY || D[51] !== Z || D[52] !== eC || D[53] !== eM || D[54] !== eW || D[55] !== eq ? (_ = eq && !eY ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(ti.BrowserComposerDisclaimer, {
                    supportsMessageDisclosures: !0,
                    conversationId: Z,
                    hasUserMessage: eC,
                    isTemporaryChat: eM,
                    regulatedConnectorKindOverride: eW
                })
            }) : void 0, D[50] = eY, D[51] = Z, D[52] = eC, D[53] = eM, D[54] = eW, D[55] = eq, D[56] = _) : _ = D[56];
            let t3 = _;
            D[57] !== Z || D[58] !== ev || D[59] !== eC || D[60] !== e_ || D[61] !== ek || D[62] !== eN || D[63] !== eq || D[64] !== eK ? (w = eC ? null : (0, a.jsx)(as.a, {
                conversationId: Z,
                errorMessage: ev,
                isWorkConversation: eN,
                showPendingLoadingMessage: eK,
                showRequestUserInputStatus: eq && !e_ && !ek
            }), D[57] = Z, D[58] = ev, D[59] = eC, D[60] = e_, D[61] = ek, D[62] = eN, D[63] = eq, D[64] = eK, D[65] = w) : w = D[65];
            let t8 = w;
            D[66] !== Z || D[67] !== eN || D[68] !== eD || D[69] !== e2 ? (I = eN && null == eD && null == e2 ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(e6, {
                    conversationId: Z
                }, Z)
            }) : null, D[66] = Z, D[67] = eN, D[68] = eD, D[69] = e2, D[70] = I) : I = D[70];
            let t7 = I;
            D[71] !== eU || D[72] !== t7 ? (S = null != eU ? (0, a.jsxs)(a.Fragment, {
                children: [t7, eU]
            }) : null, D[71] = eU, D[72] = t7, D[73] = S) : S = D[73];
            let t9 = S;
            D[74] !== en || D[75] !== t9 || D[76] !== eY || D[77] !== ee || D[78] !== et || D[79] !== V || D[80] !== Z || D[81] !== ed || D[82] !== t3 || D[83] !== t8 || D[84] !== ef || D[85] !== t7 || D[86] !== tW || D[87] !== eV || D[88] !== ex || D[89] !== eC || D[90] !== el || D[91] !== e3 || D[92] !== e_ || D[93] !== eA || D[94] !== eo || D[95] !== es || D[96] !== te || D[97] !== tr || D[98] !== ei || D[99] !== eP || D[100] !== ek || D[101] !== eM || D[102] !== eN || D[103] !== eX || D[104] !== ew || D[105] !== tZ || D[106] !== er || D[107] !== tj || D[108] !== tS || D[109] !== e8.isHidden || D[110] !== eD || D[111] !== e2 || D[112] !== e9 || D[113] !== ec || D[114] !== tH || D[115] !== tz || D[116] !== U || D[117] !== K || D[118] !== ta || D[119] !== eQ || D[120] !== Y ? (j = t9 ?? (e9 ? (0, a.jsxs)(rN.a.Provider, {
                value: ef.at(-1) ?? null,
                children: [es || te ? null : (0, a.jsx)(tb.a, {
                    onNavigate: tS
                }, Z), te ? null : et, (0, a.jsx)(ir, {
                    requiredSystemHints: er,
                    composerRef: V,
                    workspace: Y,
                    isInlinePreview: ei,
                    hideModelPicker: el,
                    showFilePicker: ec,
                    disableAutoFocus: ed,
                    conversationId: ee,
                    isImageEditComposer: tr,
                    disabled: e_,
                    readOnlyPlaceholder: ew,
                    awaitingGptContinuation: eY,
                    headerContent: t7,
                    aboveComposerContent: (0, a.jsxs)(a.Fragment, {
                        children: [tZ ? (0, a.jsx)("div", {
                            ref: tX,
                            className: "empty:hidden"
                        }) : null, en, !eA && !ex && eC && !eY && eQ, e3 ? null : eV, tH && t8]
                    }),
                    isFullscreenComposer: te,
                    isHidden: e8.isHidden,
                    trackReadState: U && !eo,
                    trackShownImpressions: K && !eo,
                    isSharedConversation: eP,
                    isSubmitDisabled: ek,
                    followupPortalTarget: tW,
                    takeoverDisclaimerRef: t1,
                    showConversationFollowups: null == eD && null == e2 && !eM && !eN && !te,
                    isTemporaryChat: eM,
                    isWorkConversation: eN,
                    responseSpacerState: tj,
                    renderTranscript: e => {
                        let {
                            isVisible: t
                        } = e;
                        return (0, a.jsx)(aG, {
                            entries: ef,
                            historyLoader: eM || null != eD || null != e2 ? null : (0, a.jsx)(o$.a, {
                                conversationId: Z
                            }),
                            isVisible: t,
                            rendersWidgets: "floating" === ta,
                            onVisibilityChange: tn
                        }, Z)
                    },
                    showVoiceStage: !tz,
                    voiceDisclaimer: e3 && !tz ? t3 : void 0,
                    onSubmitAccepted: e => {
                        tP(0), eX?.(e)
                    }
                }, `${ee}:${tr?"image-edit":"chat"}`)]
            }) : t7), D[74] = en, D[75] = t9, D[76] = eY, D[77] = ee, D[78] = et, D[79] = V, D[80] = Z, D[81] = ed, D[82] = t3, D[83] = t8, D[84] = ef, D[85] = t7, D[86] = tW, D[87] = eV, D[88] = ex, D[89] = eC, D[90] = el, D[91] = e3, D[92] = e_, D[93] = eA, D[94] = eo, D[95] = es, D[96] = te, D[97] = tr, D[98] = ei, D[99] = eP, D[100] = ek, D[101] = eM, D[102] = eN, D[103] = eX, D[104] = ew, D[105] = tZ, D[106] = er, D[107] = tj, D[108] = tS, D[109] = e8.isHidden, D[110] = eD, D[111] = e2, D[112] = e9, D[113] = ec, D[114] = tH, D[115] = tz, D[116] = U, D[117] = K, D[118] = ta, D[119] = eQ, D[120] = Y, D[121] = j) : j = D[121];
            let ne = j;
            D[122] !== Z || D[123] !== eo || D[124] !== ei || D[125] !== e1 || D[126] !== eD || D[127] !== e2 ? (T = void 0, D[122] = Z, D[123] = eo, D[124] = ei, D[125] = e1, D[126] = eD, D[127] = e2, D[128] = T) : T = D[128];
            let nt = T,
                nn = eo || void 0;
            D[129] === Symbol.for("react.memo_cache_sentinel") ? (E = null, D[129] = E) : E = D[129], D[130] !== Z || D[131] !== eo || D[132] !== te || D[133] !== U ? (A = !U || te || eo ? null : (0, a.jsx)(rR.a, {
                conversationId: Z
            }), D[130] = Z, D[131] = eo, D[132] = te, D[133] = U, D[134] = A) : A = D[134], D[135] !== eU || D[136] !== Z || D[137] !== ei || D[138] !== eD || D[139] !== e2 ? (P = ei || null != eD || null != e2 || null != eU ? null : (0, a.jsx)(rc, {
                conversationId: Z
            }, Z), D[135] = eU, D[136] = Z, D[137] = ei, D[138] = eD, D[139] = e2, D[140] = P) : P = D[140], D[141] !== Z || D[142] !== eA || D[143] !== eM || D[144] !== eD || D[145] !== e2 ? (k = eA || eM || null != eD || null != e2 ? null : (0, a.jsx)(oX, {
                conversationId: Z
            }), D[141] = Z, D[142] = eA, D[143] = eM, D[144] = eD, D[145] = e2, D[146] = k) : k = D[146], D[147] !== Z || D[148] !== ef || D[149] !== t_ || D[150] !== eE || D[151] !== eA || D[152] !== ei || D[153] !== tS || D[154] !== eD || D[155] !== e2 || D[156] !== tp ? (M = ei || eA || null != eD || null != e2 ? null : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(W, {
                    conversationId: Z,
                    entries: ef,
                    turnListApi: tp
                }), (0, a.jsx)(tJ.a, {
                    ready: !eE && t_ && null != tp && ef.length > 0,
                    onNavigate: tS
                })]
            }), D[147] = Z, D[148] = ef, D[149] = t_, D[150] = eE, D[151] = eA, D[152] = ei, D[153] = tS, D[154] = eD, D[155] = e2, D[156] = tp, D[157] = M) : M = D[157], D[158] !== eU || D[159] !== tc || D[160] !== ee || D[161] !== $ || D[162] !== tl || D[163] !== Z || D[164] !== eg || D[165] !== tG || D[166] !== t3 || D[167] !== t8 || D[168] !== ef || D[169] !== ne || D[170] !== tk || D[171] !== ex || D[172] !== eC || D[173] !== ea || D[174] !== td || D[175] !== eL || D[176] !== tE || D[177] !== e3 || D[178] !== e4 || D[179] !== e_ || D[180] !== eE || D[181] !== eA || D[182] !== eo || D[183] !== es || D[184] !== te || D[185] !== ei || D[186] !== eP || D[187] !== eM || D[188] !== eR || D[189] !== eN || D[190] !== eI || D[191] !== nt || D[192] !== e$ || D[193] !== eb || D[194] !== eG || D[195] !== q || D[196] !== t$ || D[197] !== tU || D[198] !== tZ || D[199] !== tj || D[200] !== e8.isChatPaneHidden || D[201] !== eJ || D[202] !== eh || D[203] !== tN || D[204] !== tD || D[205] !== eD || D[206] !== e2 || D[207] !== Q || D[208] !== tL || D[209] !== eq || D[210] !== e9 || D[211] !== tu || D[212] !== tF || D[213] !== tH || D[214] !== tz || D[215] !== t0 || D[216] !== eu || D[217] !== tp || D[218] !== Y ? (N = Y?.fullscreenContent != null ? (0, a.jsxs)(a.Fragment, {
                children: [!Q && Y.fullscreenContent, ne]
            }) : (0, a.jsxs)(t6.a, {
                viewportOverlay: es || ei || eN || null != eD || null != e2 || null != eU || eo || te ? null : (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(rW, {
                        conversationId: Z
                    }, Z)
                }),
                hideTranscript: es,
                active: !eA && (!eC || null != tp),
                presentation: eu ?? (ei ? "compact" : "default"),
                contentX: $,
                composerFade: !1,
                supportsComposerExpansion: tF && !te && null == Y,
                footerPlacement: tc ? td : "bottom",
                initialOffset: tE,
                scrollOrigin: eh,
                onScroll: tk,
                scrollToBottomButton: !e9 || te || tz ? void 0 : {
                    isWorking: eR
                },
                threadEndContent: e3 ? void 0 : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        ref: tq,
                        className: t2.a
                    }), null == t0 ? t3 : (0, x.createPortal)(t3, t0)]
                }),
                footerLeadingContent: tz ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)("div", {
                            className: t2.a,
                            children: (0, a.jsx)(tK.a, {})
                        })
                    }), (0, a.jsx)("div", {
                        className: "overflow-hidden electron:[scrollbar-gutter:stable_both-edges]",
                        children: t3
                    })]
                }) : nt,
                footer: ne,
                children: [ei || eA || null != eD ? null : (0, a.jsx)(n9, {
                    conversationId: Z,
                    entries: ef,
                    isConversationFetching: eE,
                    turnListApi: tp
                }), (0, a.jsxs)(l.a.div, {
                    ref: th,
                    style: {
                        x: tD
                    },
                    "data-chatgpt-conversation-selection-target": Z,
                    className: (0, i.b)("flex min-h-full flex-1 flex-col gap-1.5 pb-5", ei && "pt-5"),
                    "data-thread-find-target": "conversation",
                    onFocusCapture: () => {
                        (0, ty.K)(eJ, "conversation")
                    },
                    onMouseDownCapture: () => {
                        (0, ty.K)(eJ, "conversation")
                    },
                    children: [(0, a.jsxs)(y.Suspense, {
                        fallback: (0, a.jsx)(tR.LoadingPage, {
                            debugName: "ChatGptConversationPage",
                            fillParent: !0
                        }),
                        children: [ei || eA ? null : (0, a.jsx)(tv.a, {
                            conversationSource: tG
                        }), eo || e8.isChatPaneHidden || eM || null != eD || null != e2 ? null : ea ?? (0, a.jsx)(o$.a, {
                            conversationId: Z
                        }), (0, a.jsx)(sU.b, {
                            conversationId: Z
                        }), (null != eD || null != e2) && eC ? (0, a.jsx)(sw, {
                            sharedConversationId: eD
                        }) : null, null == eG ? null : (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)("div", {
                                className: t2.a,
                                children: eG
                            })
                        }), null == tl || eA ? null : (0, a.jsx)(nL.a, {
                            conversationId: Z,
                            branchSource: {
                                conversationId: tl.metadata.source_conversation_id,
                                title: tl.metadata.source_conversation_title,
                                gizmoId: tl.metadata.source_conversation_gizmo_id,
                                ownerId: tl.metadata.source_conversation_owner_id
                            }
                        }), ex ? (0, a.jsx)(e0, {
                            isFetching: eE,
                            isSharedConversation: eP,
                            onRetry: eb
                        }) : eA ? (0, a.jsx)("div", {
                            "aria-busy": "true",
                            "aria-label": eg,
                            className: "relative min-h-0 flex-1",
                            role: "status",
                            children: (0, a.jsx)(tR.LoadingPage, {
                                debugName: "ChatGptConversationPage",
                                fillParent: !0
                            })
                        }) : eC ? (0, a.jsxs)(oL.a, {
                            value: tN,
                            children: [ei || eo ? null : (0, a.jsxs)(a.Fragment, {
                                children: [eM || null != eD || null != e2 ? null : (0, a.jsx)(a.Fragment, {
                                    children: (0, a.jsx)(eH, {
                                        conversationId: Z
                                    })
                                }), (0, a.jsx)(ez, {
                                    entries: ef,
                                    title: q,
                                    TurnRowComponent: aB
                                })]
                            }), (0, a.jsx)(o3.a, {
                                enabled: tZ,
                                aboveComposer: t$,
                                belowMessage: tU,
                                children: (0, a.jsx)(aZ, {
                                    conversationId: Z,
                                    entries: ef,
                                    onApiChange: tf,
                                    onVisibleContentReady: () => tw(!0),
                                    responseSpacerState: tj
                                })
                            }), tZ ? (0, a.jsx)("div", {
                                ref: tQ,
                                className: "empty:hidden"
                            }) : null]
                        }) : tu && null == tl && (0, a.jsx)("div", {
                            className: "rounded-xl border border-default bg-surface-secondary/92 p-4 text-sm text-codex-description",
                            children: (0, a.jsx)(C.a, {
                                id: "chatgptConversations.emptyConversation",
                                defaultMessage: "No renderable ChatGPT messages were found in this conversation",
                                description: "Empty state when a ChatGPT conversation has no user or assistant text messages"
                            })
                        }), !tH && t8, (0, a.jsx)(ri.a, {
                            conversationId: ee,
                            isWorkConversation: eN
                        }), eq && !e_ ? (0, a.jsx)(sr, {
                            conversationId: Z,
                            moreDetailsEnabled: eI,
                            onAddSelectedText: e$
                        }) : null]
                    }), ei ? null : (0, a.jsx)(al.a, {
                        initialPlacementKey: eL,
                        isActiveVoiceConversation: e3 && e4,
                        isLoadingHistory: eA,
                        latestUserTurnKey: ef.findLast(s9)?.turnKey,
                        onResponseSpacerStateChange: tT
                    }), tz ? (0, a.jsx)(l.a.div, {
                        className: "pointer-events-none shrink-0",
                        "aria-hidden": !0,
                        initial: {
                            height: 0
                        },
                        animate: {
                            height: 112
                        },
                        transition: tL ? tY.c : tY.b
                    }) : null]
                })]
            }), D[158] = eU, D[159] = tc, D[160] = ee, D[161] = $, D[162] = tl, D[163] = Z, D[164] = eg, D[165] = tG, D[166] = t3, D[167] = t8, D[168] = ef, D[169] = ne, D[170] = tk, D[171] = ex, D[172] = eC, D[173] = ea, D[174] = td, D[175] = eL, D[176] = tE, D[177] = e3, D[178] = e4, D[179] = e_, D[180] = eE, D[181] = eA, D[182] = eo, D[183] = es, D[184] = te, D[185] = ei, D[186] = eP, D[187] = eM, D[188] = eR, D[189] = eN, D[190] = eI, D[191] = nt, D[192] = e$, D[193] = eb, D[194] = eG, D[195] = q, D[196] = t$, D[197] = tU, D[198] = tZ, D[199] = tj, D[200] = e8.isChatPaneHidden, D[201] = eJ, D[202] = eh, D[203] = tN, D[204] = tD, D[205] = eD, D[206] = e2, D[207] = Q, D[208] = tL, D[209] = eq, D[210] = e9, D[211] = tu, D[212] = tF, D[213] = tH, D[214] = tz, D[215] = t0, D[216] = eu, D[217] = tp, D[218] = Y, D[219] = N) : N = D[219], D[220] !== eo || D[221] !== nn || D[222] !== A || D[223] !== P || D[224] !== k || D[225] !== M || D[226] !== N ? (O = (0, a.jsxs)("div", {
                className: "contents",
                "aria-hidden": nn,
                inert: eo,
                children: [E, A, P, k, M, N]
            }), D[220] = eo, D[221] = nn, D[222] = A, D[223] = P, D[224] = k, D[225] = M, D[226] = N, D[227] = O) : O = D[227];
            let no = O,
                ns = "main" === ta;
            return D[228] !== ns ? (B = {
                presentation: "main",
                rendersWidgets: ns
            }, D[228] = ns, D[229] = B) : B = D[229], D[230] !== no ? (G = (0, a.jsx)(tm.a, {
                children: no
            }), D[230] = no, D[231] = G) : G = D[231], D[232] !== B || D[233] !== G ? (L = (0, a.jsx)(p.b, {
                scope: aT,
                value: B,
                children: G
            }), D[232] = B, D[233] = G, D[234] = L) : L = D[234], L
        }

        function s9(e) {
            let {
                turn: t
            } = e;
            return t.items.some(ie)
        }

        function ie(e) {
            return "user-message" === e.type
        }

        function it(e) {
            let {
                turn: t
            } = e;
            return t.items.some(ia)
        }

        function ia(e) {
            return "assistant-message" === e.type || "generated-image" === e.type && null != e.src
        }

        function ir(e) {
            let t, n, o, s = (0, r.c)(11),
                i = (0, y.useContext)(td.a);
            if (null == i || i.conversationId !== e.conversationId) {
                let t;
                return s[0] !== e ? (t = (0, a.jsx)(io, {
                    ...e
                }), s[0] = e, s[1] = t) : t = s[1], t
            }
            s[2] !== e.conversationId || s[3] !== e.isImageEditComposer ? (t = e.isImageEditComposer ? {
                conversationId: e.conversationId,
                surface: "image-edit"
            } : e.conversationId, s[2] = e.conversationId, s[3] = e.isImageEditComposer, s[4] = t) : t = s[4];
            let l = !e.isWorkConversation;
            return s[5] !== e ? (n = t => (0, a.jsx)(io, {
                ...e,
                initialController: t
            }), s[5] = e, s[6] = n) : n = s[6], s[7] !== t || s[8] !== l || s[9] !== n ? (o = (0, a.jsx)(oF, {
                draftKey: t,
                enableInlineSystemHints: l,
                children: n
            }), s[7] = t, s[8] = l, s[9] = n, s[10] = o) : o = s[10], o
        }

        function io(e) {
            let t, n, o, s, i, l, c, d, u, h, m, g, f, v, x, C, w, I, S, j = (0, r.c)(83),
                {
                    composerRef: T,
                    initialController: E,
                    ...A
                } = e,
                R = (0, p.y)(z.a),
                N = (0, p.x)(M.d, A.isTemporaryChat),
                {
                    conversationId: O,
                    isFullscreenComposer: B
                } = A,
                G = (0, b.a)(),
                {
                    state: L
                } = (0, _.Y)(),
                D = (0, p.x)(at, O),
                H = (0, p.x)(F.R, O),
                W = !(!A.disabled && !A.isSharedConversation && !A.isWorkConversation && !A.isTemporaryChat && !A.isImageEditComposer && (0, te.a)(H)) ? null : H,
                q = (0, p.x)(null == A.requiredSystemHints ? ts : null, W);
            j[0] !== q || j[1] !== A.requiredSystemHints ? (t = A.requiredSystemHints ?? (null == q ? void 0 : [q]), j[0] = q, j[1] = A.requiredSystemHints, j[2] = t) : t = j[2];
            let U = t;
            j[3] !== q || j[4] !== O || j[5] !== R ? (n = () => {
                if (null != q) {
                    let e, t;
                    return e = (0, tt.b)(R, O, [q]), t = (0, e9.h)(R, {
                        draftKey: O,
                        isTemporaryChat: !1
                    }), () => {
                        if (e(), R.get(tt.a, O).includes(q)) return;
                        let n = R.get(e7.v, O).filter(e => e !== q && e !== `plugin:${e8.d}`);
                        (0, e7.T)(R, O, n, t)
                    }
                }
            }, o = [R, O, q], j[3] = q, j[4] = O, j[5] = R, j[6] = n, j[7] = o) : (n = j[6], o = j[7]), (0, y.useEffect)(n, o);
            let K = (0, p.x)(nh.c, O);
            j[8] !== K || j[9] !== A.isSharedConversation || j[10] !== A.isWorkConversation || j[11] !== H ? (s = !A.isSharedConversation && !A.isWorkConversation && !(0, te.a)(H) && !K, j[8] = K, j[9] = A.isSharedConversation, j[10] = A.isWorkConversation, j[11] = H, j[12] = s) : s = j[12];
            let V = s,
                Y = V && !A.disabled && !A.isSubmitDisabled && !A.isImageEditComposer,
                Q = V ? D : void 0;
            j[13] !== O || j[14] !== A.isImageEditComposer ? (i = A.isImageEditComposer ? {
                conversationId: O,
                surface: "image-edit"
            } : O, j[13] = O, j[14] = A.isImageEditComposer, j[15] = i) : i = j[15];
            let X = i;
            j[16] !== O || j[17] !== X || j[18] !== E ? (l = {
                composerController: E,
                conversationId: O,
                draftKey: X
            }, j[16] = O, j[17] = X, j[18] = E, j[19] = l) : l = j[19];
            let Z = (0, sV.a)(l),
                J = (0, oQ.a)(Z, O, !A.isInlinePreview && !A.disabled, A.workspace && "tpp"),
                ee = (0, y.useContext)(td.a),
                et = (0, y.useRef)(!1);
            j[20] !== X || j[21] !== ee || j[22] !== E || j[23] !== A.isTemporaryChat || j[24] !== R ? (c = e => {
                null == e || null == E || et.current || (et.current = !0, (0, e7.U)(R, X, E.getPersistedText(), {
                    isTemporaryChat: A.isTemporaryChat
                }), ee?.onAdopt())
            }, j[20] = X, j[21] = ee, j[22] = E, j[23] = A.isTemporaryChat, j[24] = R, j[25] = c) : c = j[25];
            let en = (0, na.a)(c);
            j[26] !== en || j[27] !== T ? (d = (0, nt.a)(T, en), j[26] = en, j[27] = T, j[28] = d) : d = j[28];
            let ea = d,
                er = (0, y.useContext)(rN.a),
                eo = (0, p.w)(oR.a, O),
                es = (0, p.x)(F.cb, O),
                ei = (0, p.x)(F._, O),
                el = (0, p.x)(e7.i, O);
            j[29] !== ei ? (u = (0, F.zb)(ei), j[29] = ei, j[30] = u) : u = j[30];
            let ec = u,
                ed = (0, p.z)(P.l.activeTab$);
            if (j[31] !== ed || j[32] !== B || j[33] !== ec || j[34] !== er) {
                let e = er?.turn.items.flatMap(ic);
                h = B && ed?.tabType.kind === tk.a && "generatedImages" in ed.props && null != ed.props.generatedImages && !ec && null != er && "in_progress" !== er.turn.status && !er.turn.hasPendingAssistantReply && !er.showPendingLoadingMessage && !e?.some(il) && (null != er.errorMessage || e?.some(ii)) ? er.turn.messageIds.at(-1) ?? er.turnKey : null, j[31] = ed, j[32] = B, j[33] = ec, j[34] = er, j[35] = h
            } else h = j[35];
            let eu = h,
                eh = (0, y.useRef)(null);
            j[36] !== eu || j[37] !== R ? (m = () => {
                null != eu && eu !== eh.current && (eh.current = eu, R.set(tS.a, "expanded"))
            }, g = [eu, R], j[36] = eu, j[37] = R, j[38] = m, j[39] = g) : (m = j[38], g = j[39]), (0, y.useEffect)(m, g);
            let ep = (0, p.w)(oY.a, B ? O : null);
            j[40] !== q || j[41] !== W || j[42] !== Z || j[43] !== O || j[44] !== Y || j[45] !== X || j[46] !== J || j[47] !== G || j[48] !== B || j[49] !== ea || j[50] !== N || j[51] !== A || j[52] !== U || j[53] !== R || j[54] !== Q || j[55] !== L?.libraryFileCreation || j[56] !== H ? (f = e => (0, a.jsxs)(tP.a, {
                children: [B && A.trackReadState && !e?.isHidden ? (0, a.jsx)(rR.a, {
                    conversationId: O,
                    isTranscriptVisible: e?.isCompact === !1 && !e.isMinimized
                }) : null, A.aboveComposerContent, (0, a.jsx)(tl.a, {
                    children: (0, a.jsx)(nH.a, {
                        ref: ea,
                        trackShownImpressions: A.trackShownImpressions && !A.isHidden && !e?.isHidden && !e?.isMinimized,
                        headerContent: A.headerContent,
                        imageSuggestionsEnabled: !A.disabled && !A.isSharedConversation && !A.isImageEditComposer,
                        allowBackgroundSubmit: A.isInlinePreview,
                        ...J,
                        disableAutoFocus: A.disableAutoFocus,
                        conversationOrigin: null == A.workspace ? void 0 : "tpp",
                        mcpAppContext: A.workspace?.mcpAppContext,
                        onServerThreadIdChange: A.workspace?.onServerThreadIdChange,
                        followupPortalTarget: A.followupPortalTarget,
                        takeoverDisclaimerRef: A.takeoverDisclaimerRef,
                        showConversationFollowups: A.showConversationFollowups,
                        autoPrepare: !A.isSubmitDisabled && !A.isSharedConversation,
                        browserConversationId: (0, $.getThreadBrowserConversationId)(R) ?? O,
                        composerController: Z,
                        conversationId: O,
                        requiredSystemHints: U,
                        hideSystemHints: null != A.requiredSystemHints,
                        getSubmissionGuard: null != q ? () => () => R.get(F.R, O) === H && R.get(ts, W) === q : void 0,
                        draftKey: X,
                        onPromptChange: N,
                        selectedCustomGpt: Q,
                        targetGizmoId: Q?.id,
                        onCustomGptChange: Y ? e => {
                            R.set(at, O, e)
                        } : void 0,
                        onCustomAgentSelected: Y ? () => {
                            R.set(at, O, null)
                        } : void 0,
                        disableDraftPrepare: A.isSubmitDisabled || A.isSharedConversation,
                        disableSubmit: A.disabled || A.isSubmitDisabled,
                        voiceInputDisabled: A.disabled,
                        aboveComposerHeaderContent: A.voiceDisclaimer,
                        getExtraDeveloperInstructions: !A.isInlinePreview && L?.libraryFileCreation && !A.isTemporaryChat ? is : void 0,
                        isTemporaryChat: A.isTemporaryChat,
                        placeholder: A.disabled && !1 !== A.readOnlyPlaceholder ? A.readOnlyPlaceholder ?? G.formatMessage(rU.a.readOnlyConversationPlaceholder) : void 0,
                        readOnly: A.disabled,
                        hideModelPicker: A.hideModelPicker,
                        modelPickerPending: A.isSubmitDisabled,
                        showFilePicker: A.showFilePicker && !A.disabled && !A.isSubmitDisabled,
                        showPendingFilePicker: A.showFilePicker && !A.disabled && A.isSubmitDisabled,
                        showVoiceStage: A.showVoiceStage,
                        onSubmitAccepted: t => {
                            e?.onSubmitStart(), A.responseSpacerState?.place(), A.onSubmitAccepted?.(t)
                        },
                        onSubmitError: A.responseSpacerState?.clear
                    })
                })]
            }), j[40] = q, j[41] = W, j[42] = Z, j[43] = O, j[44] = Y, j[45] = X, j[46] = J, j[47] = G, j[48] = B, j[49] = ea, j[50] = N, j[51] = A, j[52] = U, j[53] = R, j[54] = Q, j[55] = L?.libraryFileCreation, j[56] = H, j[57] = f) : f = j[57];
            let em = f;
            j[58] !== R ? (v = () => {
                (0, ty.K)(R, "conversation")
            }, x = () => {
                (0, ty.K)(R, "conversation")
            }, j[58] = R, j[59] = v, j[60] = x) : (v = j[59], x = j[60]);
            let eg = !A.isInlinePreview && !A.disabled && !A.isSubmitDisabled;
            j[61] !== Z || j[62] !== eg ? (C = (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(rF, {
                    composerController: Z,
                    enabled: eg
                })
            }), j[61] = Z, j[62] = eg, j[63] = C) : C = j[63];
            let ef = B ? "floating" : "pane",
                ev = A.disabled || A.awaitingGptContinuation,
                ey = null == er && !ec,
                ex = el || ec ? "loading" : "idle";
            return j[64] !== ex ? (w = {
                type: ex,
                unread: !1
            }, j[64] = ex, j[65] = w) : w = j[65], j[66] !== ep || j[67] !== A.isHidden || j[68] !== A.renderTranscript || j[69] !== em || j[70] !== eo || j[71] !== ef || j[72] !== ev || j[73] !== ey || j[74] !== w || j[75] !== es ? (I = (0, a.jsx)(k.a, {
                notifications: ep,
                isHidden: A.isHidden,
                placement: ef,
                responsePreview: eo,
                forceExpanded: ev,
                composerOnly: ey,
                title: es,
                statusState: w,
                renderTranscript: A.renderTranscript,
                children: em
            }), j[66] = ep, j[67] = A.isHidden, j[68] = A.renderTranscript, j[69] = em, j[70] = eo, j[71] = ef, j[72] = ev, j[73] = ey, j[74] = w, j[75] = es, j[76] = I) : I = j[76], j[77] !== O || j[78] !== v || j[79] !== x || j[80] !== C || j[81] !== I ? (S = (0, a.jsxs)("div", {
                className: "contents",
                "data-map-composer-conversation": O,
                onMouseDownCapture: v,
                onFocusCapture: x,
                children: [C, I]
            }), j[77] = O, j[78] = v, j[79] = x, j[80] = C, j[81] = I, j[82] = S) : S = j[82], S
        }
        async function is() {
            return [tM.a]
        }

        function ii(e) {
            return "assistant-message" === e.type && "" !== e.content.trim()
        }

        function il(e) {
            return "generated-image" === e.type || "chatgpt-delayed-image-gen" === e.type
        }

        function ic(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : [e]
        }
    }),
    Ppno: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            o = n("zd8w"),
            s = n("hZax"),
            i = n("Ho4C"),
            l = n("KFm7"),
            c = n("lsfk"),
            d = n("bIvi");
        n.d(t, {}, {
            a: function(e) {
                let t, n, u, h, p, m, g, f, v, y, x, b, C, _, w, I = (0, r.c)(59),
                    {
                        initialPlacementKey: S,
                        isActiveVoiceConversation: j,
                        isLoadingHistory: T,
                        latestUserTurnKey: E,
                        onResponseSpacerStateChange: A
                    } = e,
                    P = void 0 !== j && j,
                    k = void 0 !== T && T,
                    M = (0, s.k)();
                I[0] !== P || I[1] !== M ? (t = P && (0, s.f)(M, "2825211774").get("voice_orb_transcript_clearance_enabled", !1), I[0] = P, I[1] = M, I[2] = t) : t = I[2];
                let R = t,
                    N = (0, o.useRef)(E),
                    O = (0, o.useRef)(k),
                    B = (0, o.useRef)(null),
                    G = (0, o.useRef)(null),
                    F = (0, c.b)();
                I[3] !== F ? (n = () => new l.a(F), I[3] = F, I[4] = n) : n = I[4];
                let [z] = (0, o.useState)(n), {
                    clear: L,
                    consumeGrowth: D,
                    getHeightPx: H,
                    place: W,
                    prepareThreadEndContent: q
                } = z, {
                    addScrollListener: U,
                    getScrollElement: K,
                    responseSpacerController: V
                } = F;
                I[5] !== L || I[6] !== F ? (u = () => {
                    L(), F.scrollToBottom()
                }, I[5] = L, I[6] = F, I[7] = u) : u = I[7];
                let Y = (0, d.a)(u);
                I[8] !== D || I[9] !== H || I[10] !== q || I[11] !== z.height || I[12] !== z.holdViewport || I[13] !== V || I[14] !== Y ? (h = () => V.register({
                    consumeGrowth: D,
                    getHeightPx: H,
                    holdViewport: z.holdViewport,
                    prepareThreadEndContent: q,
                    scrollToBottom: Y
                }, z.height).dispose, I[8] = D, I[9] = H, I[10] = q, I[11] = z.height, I[12] = z.holdViewport, I[13] = V, I[14] = Y, I[15] = h) : h = I[15], I[16] !== D || I[17] !== H || I[18] !== q || I[19] !== z || I[20] !== V || I[21] !== Y ? (p = [D, H, q, z, V, Y], I[16] = D, I[17] = H, I[18] = q, I[19] = z, I[20] = V, I[21] = Y, I[22] = p) : p = I[22], (0, o.useInsertionEffect)(h, p), I[23] === Symbol.for("react.memo_cache_sentinel") ? (m = (e, t) => {
                    B.current = {
                        turnKey: e,
                        element: t
                    }, G.current?.(e, t)
                }, I[23] = m) : m = I[23];
                let Q = (0, d.a)(m);
                I[24] === Symbol.for("react.memo_cache_sentinel") ? (g = e => {
                    G.current = e;
                    let t = B.current;
                    return null != t && e(t.turnKey, t.element), () => {
                        G.current = null
                    }
                }, I[24] = g) : g = I[24];
                let $ = (0, d.a)(g);
                I[25] !== K || I[26] !== E || I[27] !== W || I[28] !== R ? (f = () => {
                    let e = K();
                    if (null != e && 0 !== e.clientHeight)
                        if (R && null != E) {
                            var t, n;
                            let a, r = (t = e, n = E, a = t.querySelector(`[data-turn-key="${CSS.escape(n)}"]`), a?.querySelector("[data-user-message-bubble]") ?? a);
                            if (null == r) return;
                            W(r)
                        } else W()
                }, I[25] = K, I[26] = E, I[27] = W, I[28] = R, I[29] = f) : f = I[29];
                let X = (0, o.useEffectEvent)(f);
                return I[30] !== L || I[31] !== D || I[32] !== H || I[33] !== A || I[34] !== Q || I[35] !== W || I[36] !== R ? (v = () => (A({
                    voiceAutoScrollEnabled: R,
                    clear: L,
                    consumeGrowth: D,
                    getHeightPx: H,
                    onTurnLayoutReady: Q,
                    place: W
                }), () => {
                    A(null)
                }), y = [L, D, H, A, Q, W, R], I[30] = L, I[31] = D, I[32] = H, I[33] = A, I[34] = Q, I[35] = W, I[36] = R, I[37] = v, I[38] = y) : (v = I[37], y = I[38]), (0, o.useLayoutEffect)(v, y), I[39] !== K || I[40] !== k || I[41] !== E || I[42] !== W || I[43] !== z || I[44] !== $ || I[45] !== R ? (x = () => {
                    let e = N.current,
                        t = O.current;
                    if (N.current = E, O.current = k, R && !k && !t && null != E && E !== e) {
                        var n, a, r, o, s;
                        let e, t, i, l, c;
                        return n = E, a = K, r = W, o = $, s = z.getPendingPlacementSignal(), t = null, i = null, l = !1, c = () => {
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
                }, b = [K, k, E, W, $, z, R], I[39] = K, I[40] = k, I[41] = E, I[42] = W, I[43] = z, I[44] = $, I[45] = R, I[46] = x, I[47] = b) : (x = I[46], b = I[47]), (0, o.useLayoutEffect)(x, b), I[48] !== U || I[49] !== S || I[50] !== X || I[51] !== z ? (C = () => {
                    if (null == S) return;
                    let e = z.getPendingPlacementSignal();
                    return U(() => {
                        e.aborted || X()
                    })
                }, I[48] = U, I[49] = S, I[50] = X, I[51] = z, I[52] = C) : C = I[52], I[53] !== U || I[54] !== S || I[55] !== z ? (_ = [U, S, z], I[53] = U, I[54] = S, I[55] = z, I[56] = _) : _ = I[56], (0, o.useLayoutEffect)(C, _), I[57] !== z ? (w = (0, a.jsx)(i.a, {
                    controller: z
                }), I[57] = z, I[58] = w) : w = I[58], w
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
            return null != a ? a : n(p.D, e) || n(l.i, e) || null != n(l.y, e) ? void 0 : null
        });
        n.d(t, {}, {
            a: function(e) {
                let t, n, l, f, v, y, x, b = (0, r.c)(36),
                    {
                        children: C,
                        conversationId: _,
                        routePattern: w,
                        homePath: I
                    } = e,
                    S = void 0 === I ? "/" : I,
                    j = (0, o.y)(i.a),
                    {
                        hash: T,
                        key: E,
                        pathname: A,
                        search: P,
                        state: k
                    } = (0, s.Y)(),
                    {
                        conversationId: M,
                        gizmoId: R
                    } = (0, s.cb)(),
                    N = (0, o.x)(g, _),
                    O = (0, o.x)(p.D, _),
                    B = (0, o.x)(p.R, _),
                    G = O ? B : R;
                b[0] !== G ? (t = null != G && (0, u.a)(G) ? G : null, b[0] = G, b[1] = t) : t = b[1], b[2] === Symbol.for("react.memo_cache_sentinel") ? (n = {
                    enabled: !1
                }, b[2] = n) : n = b[2];
                let {
                    data: F
                } = (0, o.x)(d.b, t, n);
                b[3] !== G ? (l = null == G || (0, u.a)(G) ? null : G, b[3] = G, b[4] = l) : l = b[4], b[5] === Symbol.for("react.memo_cache_sentinel") ? (f = {
                    enabled: !1
                }, b[5] = f) : f = b[5];
                let {
                    data: z
                } = (0, o.x)(c.b, l, f);
                if (null === N || (0, m.i)(P) && null != N && !O) {
                    let e;
                    return b[6] !== S || b[7] !== P ? (e = (0, a.jsx)(s.l, {
                        replace: !0,
                        to: {
                            pathname: S,
                            search: P
                        }
                    }), b[6] = S, b[7] = P, b[8] = e) : e = b[8], e
                }
                b[9] !== _ || b[10] !== z || b[11] !== G || b[12] !== F || b[13] !== N || b[14] !== w ? (v = null != w ? (0, s.C)(w, {
                    conversationId: N ?? _
                }) : (0, m.c)(N ?? _, {
                    gizmoId: F?.gizmo.short_url ?? z?.gizmo.short_url ?? G
                }), b[9] = _, b[10] = z, b[11] = G, b[12] = F, b[13] = N, b[14] = w, b[15] = v) : v = b[15];
                let L = v;
                if (b[16] !== _ || b[17] !== L || b[18] !== M || b[19] !== T || b[20] !== E || b[21] !== A || b[22] !== N || b[23] !== j || b[24] !== P || b[25] !== k) {
                    let e = new URLSearchParams(P),
                        t = null != N && e.has("mfr"),
                        n = j.get(p.x, _),
                        r = k;
                    if (t) {
                        let t, n;
                        if (e.delete("mfr"), b[27] !== k ? (t = k ?? {}, b[27] = k, b[28] = t) : t = b[28], b[29] !== t) {
                            let {
                                modelFirstLanding: e,
                                modelFirstFallback: a,
                                ...r
                            } = t;
                            n = r, b[29] = t, b[30] = n
                        } else n = b[30];
                        r = n
                    }
                    if (null != M && (0, h.e)(M) && null != N) {
                        let e;
                        b[31] !== r ? (e = {
                            ...r,
                            fromChatGptFirstSend: !0
                        }, b[31] = r, b[32] = e) : e = b[32], r = e
                    }
                    y = A !== L || t ? (0, a.jsx)(s.l, {
                        replace: !0,
                        state: "tpp" === n || "flora" === n ? {
                            ...r,
                            workTurnVisit: (0, m.f)(j, E, k?.workTurnVisit)
                        } : r,
                        to: {
                            hash: t ? "" : T,
                            pathname: L,
                            search: t ? e.toString() : P
                        }
                    }) : null, b[16] = _, b[17] = L, b[18] = M, b[19] = T, b[20] = E, b[21] = A, b[22] = N, b[23] = j, b[24] = P, b[25] = k, b[26] = y
                } else y = b[26];
                return b[33] !== C || b[34] !== y ? (x = (0, a.jsxs)(a.Fragment, {
                    children: [y, C]
                }), b[33] = C, b[34] = y, b[35] = x) : x = b[35], x
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
            s = n("slpy"),
            i = n("BolX"),
            l = n("zd8w"),
            c = n("Wf1j"),
            d = n("oyxz"),
            u = n("jqIZ"),
            h = n("Cslg"),
            p = n("kphc"),
            m = n("Sm6l"),
            g = n("bqtn"),
            f = n("Ot7V"),
            v = n("bf6R"),
            y = n("Bbed"),
            x = n("X6Vn"),
            b = n("SGsN"),
            C = n("ANuo"),
            _ = n("yGJW"),
            w = n("gBBC"),
            I = n("OWtl"),
            S = n("hZax"),
            j = n("JYRT"),
            T = n("wwvo"),
            E = n("wrCb"),
            A = n("H7Nt"),
            P = n("vzxm"),
            k = n("jAnS"),
            M = n("wzUW"),
            R = n("Q9Us"),
            N = n("fwYa"),
            O = n("qfGT");
        let B = (0, y.a)(async () => (await Promise.all([n.e(680612), n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(954244), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(229522), n.e(390575), n.e(353032), n.e(637885), n.e(284470), n.e(480171), n.e(716164), n.e(74952)]).then(n.bind(n, "eZlv"))).GptHeaderAboutDialog);

        function G(e) {
            let t, n, y, G, F, z, L, D, H, W, q, U, K, V, Y, Q, $, X, Z, J, ee, et = (0, r.c)(60),
                {
                    gizmo: en
                } = e,
                ea = (0, i.y)(I.a),
                er = (0, c.a)(),
                {
                    search: eo
                } = (0, u.Y)(),
                es = (0, u._)(),
                [ei, el] = (0, l.useState)(!1),
                ec = (0, S.h)("2160578039"),
                ed = (0, i.x)(j.a, "2513446768"),
                eu = ec && "gpt" === en.gizmo.gizmo_type && null != en.gizmo.migrated_plugin_id;
            et[0] !== ed ? (t = ed?.get("disable_gpt_updates", !1), et[0] = ed, et[1] = t) : t = et[1];
            let eh = t,
                ep = en.gizmo.current_user_permission?.can_write && !eu && !eh,
                {
                    data: em
                } = (0, i.z)(T.c);
            et[2] !== en.gizmo.id || et[3] !== em ? (n = em?.some(e => {
                let {
                    item: t
                } = e;
                return t.gizmo.id === en.gizmo.id
            }), et[2] = en.gizmo.id, et[3] = em, et[4] = n) : n = et[4];
            let eg = n;
            et[5] === Symbol.for("react.memo_cache_sentinel") ? (y = (0, E.a)("/gpts/editor"), et[5] = y) : y = et[5];
            let ef = `${y}/${encodeURIComponent(en.gizmo.id)}`;
            et[6] !== en.gizmo.id || et[7] !== en.gizmo.short_url ? (G = en.gizmo.short_url?.trim() || en.gizmo.id, et[6] = en.gizmo.id, et[7] = en.gizmo.short_url, et[8] = G) : G = et[8], et[9] !== G ? (F = (0, P.c)(G), et[9] = G, et[10] = F) : F = et[10], et[11] !== eo ? (z = (0, k.e)("", (0, k.i)(eo)), et[11] = eo, et[12] = z) : z = et[12];
            let ev = `${F}${z}`;
            et[13] !== er ? (L = er.formatMessage({
                id: "chatgptConversations.customGpt.actionsMenu",
                defaultMessage: "GPT actions",
                description: "Accessible label for the compact overflow menu containing actions for the current custom GPT in Codex Desktop"
            }), et[13] = er, et[14] = L) : L = et[14];
            let ey = L;
            et[15] === Symbol.for("react.memo_cache_sentinel") ? (D = (0, a.jsx)(C.a, {
                className: "icon-sm"
            }), et[15] = D) : D = et[15], et[16] !== ey ? (H = (0, a.jsx)(m.a, {
                "aria-label": ey,
                color: "ghost",
                size: "icon",
                children: D
            }), et[16] = ey, et[17] = H) : H = et[17], et[18] !== ey || et[19] !== ei || et[20] !== H ? (W = (0, a.jsx)(s.a, {
                content: ey,
                disabled: ei,
                children: H
            }), et[18] = ey, et[19] = ei, et[20] = H, et[21] = W) : W = et[21], et[22] !== en.gizmo.gizmo_type || et[23] !== en.gizmo.id || et[24] !== es || et[25] !== ev || et[26] !== ea ? (q = "gpt" === en.gizmo.gizmo_type ? (0, a.jsxs)(g.c.Item, {
                href: ev,
                onClick: e => {
                    e.defaultPrevented || ((0, _.a)(ea, o.nc, {
                        stage: "CHATGPT_NEW_CHAT_ENTRY_STAGE_ENTRY",
                        entryPoint: "CHATGPT_NEW_CHAT_ENTRY_POINT_GPT_MENU",
                        location: "CHATGPT_NEW_CHAT_ENTRY_LOCATION_GIZMO_INFORMATION_DROPDOWN",
                        gizmoId: en.gizmo.id
                    }), 0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || (e.preventDefault(), el(!1), (0, w.c)(ea, null), (0, p.m)(ea, "chat"), es(ev, {
                        state: {
                            focusComposerNonce: Date.now()
                        }
                    })))
                },
                children: [(0, a.jsx)(g.c.ItemIcon, {
                    children: (0, a.jsx)(v.Ph, {})
                }), (0, a.jsx)(d.a, {
                    id: "chatgptConversations.customGpt.newChat",
                    defaultMessage: "New chat",
                    description: "Short GPT actions menu label that opens a new conversation with the same custom GPT, rather than switching to general ChatGPT"
                })]
            }) : null, et[22] = en.gizmo.gizmo_type, et[23] = en.gizmo.id, et[24] = es, et[25] = ev, et[26] = ea, et[27] = q) : q = et[27], et[28] !== en || et[29] !== ea ? (U = () => (0, x.f)(ea, B, {
                accountId: ea.get(h.f),
                resource: en
            }), et[28] = en, et[29] = ea, et[30] = U) : U = et[30], et[31] === Symbol.for("react.memo_cache_sentinel") ? (K = (0, a.jsx)(g.c.ItemIcon, {
                children: (0, a.jsx)(v.je, {})
            }), V = (0, a.jsx)(d.a, {
                id: "chatgptConversations.customGpt.about",
                defaultMessage: "About",
                description: "GPT menu action that opens its details over the current conversation or landing page"
            }), et[31] = K, et[32] = V) : (K = et[31], V = et[32]), et[33] !== U ? (Y = (0, a.jsxs)(g.c.Item, {
                onSelect: U,
                children: [K, V]
            }), et[33] = U, et[34] = Y) : Y = et[34];
            let ex = eg ? O.a : N.a;
            return et[35] !== en || et[36] !== er || et[37] !== eg || et[38] !== ea ? (Q = () => {
                (0, T.e)(ea, en, !eg).catch(() => {
                    ea.get(b.f).danger(er.formatMessage({
                        id: "chatgptConversations.customGpt.pinFailed",
                        defaultMessage: "Couldn't update pinned GPT",
                        description: "Error toast shown when adding or removing a custom GPT from the user's pinned sidebar items fails in Codex Desktop"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.customGpt.pinFailed"
                        }
                    })
                })
            }, et[35] = en, et[36] = er, et[37] = eg, et[38] = ea, et[39] = Q) : Q = et[39], et[40] !== eg ? ($ = eg ? (0, a.jsx)(d.a, {
                id: "chatgptConversations.customGpt.unpin",
                defaultMessage: "Unpin GPT",
                description: "Compact overflow-menu action that removes the current custom GPT from the user's pinned sidebar items in Codex Desktop"
            }) : (0, a.jsx)(d.a, {
                id: "chatgptConversations.customGpt.pin",
                defaultMessage: "Pin GPT",
                description: "Compact overflow-menu action that adds the current custom GPT to the user's pinned sidebar items in Codex Desktop"
            }), et[40] = eg, et[41] = $) : $ = et[41], et[42] !== ex || et[43] !== Q || et[44] !== $ ? (X = (0, a.jsx)(g.c.Item, {
                leftIconAsset: ex,
                onSelect: Q,
                children: $
            }), et[42] = ex, et[43] = Q, et[44] = $, et[45] = X) : X = et[45], et[46] !== ep || et[47] !== ef || et[48] !== en.gizmo.current_user_permission?.can_view_config ? (Z = ep || en.gizmo.current_user_permission?.can_view_config ? (0, a.jsx)(g.c.Item, {
                href: ef,
                leftIconAsset: ep ? R.a : M.a,
                onClick: e => {
                    (0, f.e)({
                        event: e,
                        href: ef,
                        initiator: "open_in_browser_bridge",
                        openTarget: ep ? "external-browser" : void 0
                    })
                },
                children: ep ? (0, a.jsx)(d.a, {
                    id: "chatgptConversations.customGpt.edit",
                    defaultMessage: "Edit GPT",
                    description: "Compact overflow-menu action that opens the current custom GPT in its ChatGPT web editor from Codex Desktop"
                }) : (0, a.jsx)(d.a, {
                    id: "chatgptConversations.customGpt.view",
                    defaultMessage: "View",
                    description: "Short action in the custom GPT overflow menu for users who can view its configuration but cannot edit it, including after migration to a plugin. Opens the read-only GPT configuration page in ChatGPT."
                })
            }) : null, et[46] = ep, et[47] = ef, et[48] = en.gizmo.current_user_permission?.can_view_config, et[49] = Z) : Z = et[49], et[50] !== en ? (J = (0, a.jsx)(A.a, {
                resource: en
            }), et[50] = en, et[51] = J) : J = et[51], et[52] !== ei || et[53] !== W || et[54] !== q || et[55] !== Y || et[56] !== X || et[57] !== Z || et[58] !== J ? (ee = (0, a.jsxs)(g.a, {
                align: "start",
                contentWidth: "menu",
                open: ei,
                onOpenChange: el,
                triggerButton: W,
                children: [q, Y, X, Z, J]
            }), et[52] = ei, et[53] = W, et[54] = q, et[55] = Y, et[56] = X, et[57] = Z, et[58] = J, et[59] = ee) : ee = et[59], ee
        }
        n.d(t, {}, {
            ChatGptGizmoHeader: function(e) {
                let t, n, o, s, l, c = (0, r.c)(12),
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
                } = (0, i.x)(T.b, t);
                if (null == h) return null;
                c[3] !== h.gizmo.display.name ? (n = h.gizmo.display.name.trim(), c[3] = h.gizmo.display.name, c[4] = n) : n = c[4];
                let p = n;
                return c[5] !== p ? (o = p ? (0, a.jsx)("span", {
                    className: "truncate",
                    children: p
                }) : null, c[5] = p, c[6] = o) : o = c[6], c[7] !== h ? (s = (0, a.jsx)(G, {
                    gizmo: h
                }), c[7] = h, c[8] = s) : s = c[8], c[9] !== o || c[10] !== s ? (l = (0, a.jsxs)("div", {
                    className: "flex min-w-0 items-center gap-1 select-none",
                    children: [o, s]
                }), c[9] = o, c[10] = s, c[11] = l) : l = c[11], l
            }
        })
    }),
    C6kc: (function(e, t, n) {
        var a = n("mBJV"),
            r = n("MVHH"),
            o = n("D99L"),
            s = n("fVOX"),
            i = n("yGJW"),
            l = n("g2p6");

        function c(e, t, n) {
            "memory_footnote_shown" === t && (0, i.a)(e, o.CodexChatgptInteractionMemoryFootnoteShown, {
                memoryCitationExperiment: n
            }), e.get(s.a).count("default", t, {
                entrypoint: "turn_sources_button",
                memory_citation_experiment: n,
                target: "search_sources_sidebar"
            })
        }
        n.d(t, {
            a: () => r.X
        }, {
            b: function(e, t) {
                let {
                    actionType: n,
                    conversationId: a,
                    experiment: o,
                    messageId: s,
                    source: l,
                    feedback: d,
                    selectedFeedback: u,
                    surface: h = "sources"
                } = t, p = "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_UNSPECIFIED";
                "positive" === d ? p = "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_POSITIVE" : "negative" === d ? p = "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_NEGATIVE" : Object.is(d, null) && (p = "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_CLEARED");
                let m = null == l ? "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ENTRYPOINT_TURN_SOURCES_BUTTON" : "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ENTRYPOINT_SOURCES_SIDEBAR_ACTION_MENU";
                "explainer" === h && (m = "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ENTRYPOINT_ENTITY_SIDEBAR_FEEDBACK_BUTTON"), (0, i.a)(e, r.W, {
                    actionType: n,
                    conversationId: a ?? void 0,
                    messageId: s,
                    citationUuid: l?.citationUuid ?? void 0,
                    sourceType: function(e) {
                        switch (e?.conversationContextType) {
                            case "user_memory":
                                return "CHATGPT_WEB_MEMORY_CITATION_SOURCE_TYPE_SAVED_MEMORY";
                            case "general_memory":
                                return "CHATGPT_WEB_MEMORY_CITATION_SOURCE_TYPE_GENERAL_MEMORY";
                            case "past_conversation":
                                return "CHATGPT_WEB_MEMORY_CITATION_SOURCE_TYPE_PAST_CONVERSATION";
                            case "user_instructions":
                                return "CHATGPT_WEB_MEMORY_CITATION_SOURCE_TYPE_CUSTOM_INSTRUCTIONS";
                            case null:
                            case void 0:
                                return "CHATGPT_WEB_MEMORY_CITATION_SOURCE_TYPE_UNSPECIFIED"
                        }
                    }(l),
                    feedback: p,
                    selectedFeedback: null == u ? void 0 : ({
                        positive: "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_POSITIVE",
                        negative: "CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_NEGATIVE"
                    })[u],
                    entrypoint: m,
                    target: "explainer" === h || "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ACTION_TYPE_SIDEBAR_CITATION_CLICKED" === n ? "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_TARGET_ENTITY_SIDEBAR" : "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_TARGET_SEARCH_SOURCES_SIDEBAR",
                    memoryCitationExperiment: o
                }), "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ACTION_TYPE_SIDEBAR_OPENED" === n && c(e, "chatgpt_memory_citations_sidebar_open_clicked", o)
            },
            c: function(e, t) {
                "dismissed" === t && (0, i.a)(e, o.CodexChatgptInteractionMemoryIntroductionDismissed, {
                    announcementKey: l.c
                }), "shown" === t && (0, i.a)(e, a.pd, {
                    eventId: `${l.c}_tooltip_shown`,
                    type: "UPSELL_OR_MODAL_TYPE_NUX_TOOLTIP"
                })
            },
            d: c
        })
    }),
    JlMc: (function(e, t, n) {
        var a = n("QosV"),
            r = n("BolX"),
            o = n("zd8w"),
            s = n("RU3e"),
            i = n("AcSY"),
            l = n("OWtl"),
            c = n("RFDv"),
            d = n("r6TF"),
            u = n("d6Ff");
        n("lBzi"), n("XtQP");
        var h = n("dQRk"),
            p = n("UWHW");
        n.d(t, {}, {
            a: function(e) {
                let t, n, m, g, f = (0, a.c)(11),
                    {
                        conversationId: v,
                        isTranscriptVisible: y
                    } = e,
                    x = void 0 === y || y,
                    b = (0, r.y)(l.a),
                    C = (0, o.useId)(),
                    {
                        mutate: _
                    } = (0, i.l)();
                return f[0] !== v || f[1] !== C || f[2] !== b ? (t = () => (b.set(p.b, e => new Map(e).set(C, v)), b.get(p.a)?.dismissCurrent(), () => {
                    b.set(p.b, e => {
                        let t = new Map(e);
                        return t.delete(C), t
                    })
                }), n = [v, C, b], f[0] = v, f[1] = C, f[2] = b, f[3] = t, f[4] = n) : (t = f[3], n = f[4]), (0, o.useEffect)(t, n), f[5] !== v || f[6] !== x || f[7] !== _ || f[8] !== b ? (m = () => {
                    if (!x) return;
                    let e = b.watch(e => {
                            let {
                                get: t
                            } = e
                        }),
                        t = b.watch(e => {
                            let {
                                get: t
                            } = e, n = !0 === t(s.a);
                            if ((0, h.ac)(b, v, n), !n) return;
                            let a = t(h.j, v);
                            if (null == a || !0 !== t(d.r, a)) return;
                            let r = (0, u.b)(a);
                            (0, c.j)(b, r, b.get(d.z, r)), _(a)
                        });
                    return () => {
                        e(), t(), (0, h.ac)(b, v, !1)
                    }
                }, g = [v, x, _, b], f[5] = v, f[6] = x, f[7] = _, f[8] = b, f[9] = m, f[10] = g) : (m = f[9], g = f[10]), (0, o.useEffect)(m, g), null
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
            x = n("lBzi"),
            b = n("Ga6O"),
            C = n("dQRk"),
            _ = n("jfiJ"),
            w = n("FGJH"),
            I = n("Vcrm"),
            S = n("OCK3"),
            j = n("dhxJ"),
            T = n("lsky"),
            E = n("rKAs"),
            A = n("ASxG"),
            P = n("rn0J"),
            k = n("XpUB"),
            M = n("G6mJ"),
            R = n("VB5Q"),
            N = n("VTN2");
        let O = A.record(A.string(), A.union([A.string(), A.literal(!0)]));

        function B(e) {
            let t, n, A, B, F, z, L = (0, r.c)(28),
                {
                    conversationId: D,
                    turns: H,
                    loadHistory: W,
                    renderMode: q,
                    paragenEnabled: U,
                    enabled: K,
                    canCopy: V,
                    priority: Y
                } = e,
                Q = void 0 === q ? "conversation" : q,
                $ = void 0 !== U && U,
                X = void 0 === K || K,
                Z = void 0 === V || V,
                J = void 0 === Y ? "fallback" : Y,
                ee = (0, l.y)(f.a),
                et = (0, c.useRef)(null);
            L[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => () => et.current?.abort(), L[0] = t) : t = L[0], L[1] !== Z || L[2] !== D || L[3] !== X || L[4] !== W || L[5] !== $ || L[6] !== Q ? (n = [D, X, Z, W, Q, $], L[1] = Z, L[2] = D, L[3] = X, L[4] = W, L[5] = $, L[6] = Q, L[7] = n) : n = L[7], (0, c.useEffect)(t, n), L[8] !== Z || L[9] !== D || L[10] !== $ || L[11] !== Q || L[12] !== ee || L[13] !== H ? (A = () => {
                let e = ee.get(C.j, D),
                    t = ee.query.getData(x.chatGptConversationQueryById$, e),
                    n = t?.conversation_origin ?? ee.get(C.x, D);
                if (!Z || "tpp" === n || "flora" === n) return null;
                let a = ee.get(C.L, D),
                    r = $ && "conversation" === Q ? ee.get(I.a, D)?.promptMessageId : void 0,
                    o = function(e) {
                        for (let {
                                turn: t
                            }
                            of e.toReversed())
                            for (let e of t.items.toReversed()) {
                                if ("assistant-message" !== e.type) continue;
                                let t = null,
                                    n = 0;
                                if ((0, T.h)((0, k.a)(e.content, E.b), a => {
                                        if ("codexDirective" === a.type && a.name === E.a) {
                                            let n = O.safeParse(a.attributes);
                                            if (!n.success) return;
                                            let r = (0, M.a)(n.data, e.contentReferences),
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
                                        "code" !== a.type || (null == ("indented" === a.codeBlockStyle ? null : a.raw.split("\n").reduce(P.a, null)) && (t = {
                                            content: e.codeBlocks?.[String(n)]?.content ?? a.text,
                                            codeBlockIndex: n,
                                            messageId: e.messageId
                                        }), n += 1)
                                    }), null != t) return t
                            }
                        return null
                    }(H ?? (0, b.b)({
                        conversation: t,
                        threadMapping: a,
                        threadCurrentNode: r ?? ee.get(C.B, D),
                        conversationOrigin: n,
                        isStreaming: (0, C.zb)(ee.get(C._, D)),
                        mode: Q,
                        moderationDisclaimersByMessageId: ee.get(C.M, D),
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
                    i = (0, j.a)(a?.[o.messageId]?.message?.metadata);
                return {
                    serverId: e,
                    comparisonPromptMessageId: r,
                    content: ee.get(S.b, s) ?? i?.[String(o.codeBlockIndex)]?.content ?? o.content
                }
            }, L[8] = Z, L[9] = D, L[10] = $, L[11] = Q, L[12] = ee, L[13] = H, L[14] = A) : A = L[14];
            let en = (0, y.a)(A);
            L[15] !== ee ? (B = (e, t) => {
                let n = e => {
                    (0, g.a)(ee, s.CodexChatgptInteractionCodeCopyRequested, {
                        characterCount: (0, i.a)(e.length),
                        productExperience: o.CodexExpandedSidePanelProductSurface.CODEX_EXPANDED_SIDE_PANEL_PRODUCT_SURFACE_CHAT
                    })
                };
                return (0, v.b)(e, void 0, () => {
                    "string" == typeof e ? n(e) : e.then(n, G)
                }).then(e => {
                    e && !t?.aborted && ee.get(m.f).success((0, a.jsx)(d.a, {
                        id: "chatgpt.codeBlocks.copyLast.success",
                        defaultMessage: "Copied code block to clipboard",
                        description: "Success toast after the user copies the last assistant code block using the keyboard shortcut or command menu in Chat mode"
                    }))
                })
            }, L[15] = ee, L[16] = B) : B = L[16];
            let ea = B;
            return L[17] !== D || L[18] !== en || L[19] !== W || L[20] !== $ || L[21] !== Q || L[22] !== ee || L[23] !== ea ? (F = () => {
                if (et.current?.signal.aborted === !1) return;
                let e = en();
                if (null == e) return;
                if (null != e.content) return void ea(e.content);
                let {
                    serverId: t,
                    comparisonPromptMessageId: n
                } = e;
                if (!W || ee.get(C.A, D) || null == t || ee.get(w.c, t)?.complete !== !1) return;
                let a = new AbortController;
                et.current = a;
                let r = ee.get(u.a),
                    o = ee.get(C.B, D),
                    s = ee.get(h.e).copyLastCodeBlock,
                    i = ee.watch(e => {
                        let {
                            get: t
                        } = e;
                        (t(u.a) !== r || t(C.B, D) !== o || $ && "conversation" === Q && t(I.a, D)?.promptMessageId !== n || t(h.e).copyLastCodeBlock !== s) && a.abort()
                    });
                ea((async () => {
                    await (0, _.a)(ee, t, a.signal), a.signal.throwIfAborted();
                    let e = en()?.content;
                    if (null == e) throw Error("No complete code block in this conversation");
                    return e
                })(), a.signal).finally(() => {
                    i(), et.current === a && (et.current = null)
                })
            }, L[17] = D, L[18] = en, L[19] = W, L[20] = $, L[21] = Q, L[22] = ee, L[23] = ea, L[24] = F) : F = L[24], L[25] !== X || L[26] !== J ? (z = {
                enabled: X,
                priority: J
            }, L[25] = X, L[26] = J, L[27] = z) : z = L[27], (0, p.a)("copyLastCodeBlock", F, z), null
        }

        function G() {}
    }),
    LEgg: (function(e, t, n) {
        n.d(t, {
            a: () => _
        });
        var a = n("ABep"),
            r = n("QosV");
        n("slpy");
        var o = n("BolX"),
            s = n("Wf1j"),
            i = n("QcFS"),
            l = n("TdH6"),
            c = n("QcW8");
        n("ZU27"), n("TpEm");
        var d = n("gbrq"),
            u = n("fBor"),
            h = n("ipGa"),
            p = n("d0tz"),
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
                    if (null != r) return (0, f.a)(a, (0, p.Qe)(`chatgpt:${r}`))
                })
            }, t = [a], n[0] = a, n[1] = e, n[2] = t) : (e = n[1], t = n[2]), (0, m.useLayoutEffect)(e, t), null
        }
        n("n5iL"), n("q3HK"), n("bf6R");
        var x = n("rBfn"),
            b = n("enMl"),
            C = n("PCEr");

        function _(e) {
            let t, n, o, s, l, c, d = (0, r.c)(16),
                {
                    chatIcon: p,
                    header: m,
                    title: g,
                    isArchivedPreview: f,
                    children: v
                } = e;
            return d[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(i.a.MainContentLayout, {
                layout: (0, h.a)() ? "default" : "thread-edge-scroll"
            }), d[0] = t) : t = d[0], d[1] !== f ? (n = f ? null : (0, a.jsx)(u.SitePreviewBridge, {}), d[1] = f, d[2] = n) : n = d[2], d[3] !== m ? (o = (0, a.jsx)(i.a.Header, {
                desktopPlacement: "titlebar",
                divider: !1,
                children: m
            }), d[3] = m, d[4] = o) : o = d[4], d[5] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, a.jsx)(i.a.RightPanelOutlet, {
                children: (0, a.jsx)(i.a.RightPanelTabs, {})
            }), d[5] = s) : s = d[5], d[6] !== p || d[7] !== m || d[8] !== f || d[9] !== g ? (l = f ? null : (0, a.jsx)(w, {
                chatIcon: p,
                mainToolbar: m,
                title: g
            }), d[6] = p, d[7] = m, d[8] = f, d[9] = g, d[10] = l) : l = d[10], d[11] !== v || d[12] !== n || d[13] !== o || d[14] !== l ? (c = (0, a.jsxs)(a.Fragment, {
                children: [t, n, o, v, s, l]
            }), d[11] = v, d[12] = n, d[13] = o, d[14] = l, d[15] = c) : c = d[15], c
        }

        function w(e) {
            let t, n, i, u, p, m, f = (0, r.c)(13),
                {
                    chatIcon: v,
                    mainToolbar: _,
                    title: w
                } = e,
                I = (0, o.y)(g.a);
            return (0, s.a)(), (0, o.z)(d.i), (0, o.z)(c.s), f[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(l.a, {}), n = (0, a.jsx)(y, {}), f[0] = t, f[1] = n) : (t = f[0], n = f[1]), f[2] !== v || f[3] !== w ? (i = (0, a.jsx)(b.a, {
                title: w,
                icon: v
            }), f[2] = v, f[3] = w, f[4] = i) : i = f[4], f[5] !== _ ? (u = (0, a.jsx)(C.a, {
                mainToolbar: _
            }), f[5] = _, f[6] = u) : u = f[6], f[7] !== I.value.routeKind ? (p = "other" === I.value.routeKind || (0, h.a)() ? null : (0, a.jsx)(x.b, {
                showLauncherButton: !1
            }), f[7] = I.value.routeKind, f[8] = p) : p = f[8], f[9] !== i || f[10] !== u || f[11] !== p ? (m = (0, a.jsxs)(a.Fragment, {
                children: [t, n, i, u, p, null, null]
            }), f[9] = i, f[10] = u, f[11] = p, f[12] = m) : m = f[12], m
        }
    }),
    dLcZ: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            o = n("QcFS"),
            s = n("Sm6l"),
            i = n("NVRI"),
            l = n("MMlk"),
            c = n("WLgA");

        function d(e) {
            let {
                actionId: t,
                order: n,
                content: r
            } = e;
            return null == r ? null : (0, a.jsx)(o.a.HeaderAction, {
                actionId: t,
                align: "end",
                order: n,
                children: (0, a.jsx)("div", {
                    className: "flex items-center gap-toolbar-action",
                    children: r
                })
            }, t)
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, o, s, c, d, u, h = (0, r.c)(14);
                h[0] !== e ? ({
                    isTemporaryChat: s,
                    isCloudTask: t,
                    startActions: o,
                    ...n
                } = e, h[0] = e, h[1] = t, h[2] = n, h[3] = o, h[4] = s) : (t = h[1], n = h[2], o = h[3], s = h[4]);
                let p = void 0 !== s && s;
                return h[5] !== p ? (c = p ? (0, a.jsx)(l.b, {
                    isIndicator: !0,
                    isTemporaryChat: !0
                }) : null, h[5] = p, h[6] = c) : c = h[6], h[7] !== o || h[8] !== c || null !== h[9] ? (d = (0, a.jsxs)(a.Fragment, {
                    children: [o, c, null]
                }), h[7] = o, h[8] = c, h[9] = null, h[10] = d) : d = h[10], h[11] !== n || h[12] !== d ? (u = (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(i.a, {
                        ...n,
                        inset: "tab-strip-flush-start",
                        startActions: d
                    })
                }), h[11] = n, h[12] = d, h[13] = u) : u = h[13], u
            },
            b: function(e) {
                let t, n, o, s = (0, r.c)(7),
                    {
                        children: i,
                        menu: l
                    } = e;
                return s[0] !== i ? (t = {
                    actionId: "chatgpt-conversation-actions",
                    order: 100,
                    content: i
                }, s[0] = i, s[1] = t) : t = s[1], s[2] !== l ? (n = {
                    actionId: "chatgpt-conversation-overflow",
                    order: 0,
                    content: l
                }, s[2] = l, s[3] = n) : n = s[3], s[4] !== t || s[5] !== n ? (o = (0, a.jsx)(a.Fragment, {
                    children: [t, n].map(d)
                }), s[4] = t, s[5] = n, s[6] = o) : o = s[6], o
            },
            c: function(e) {
                let t, n, o = (0, r.c)(6),
                    {
                        icon: i,
                        name: l,
                        projectId: d
                    } = e;
                return o[0] !== d ? (t = (0, c.c)(d), o[0] = d, o[1] = t) : t = o[1], o[2] !== i || o[3] !== l || o[4] !== t ? (n = (0, a.jsx)(s.b, {
                    "aria-label": l,
                    color: "ghost",
                    size: "toolbar",
                    to: t,
                    uniform: !0,
                    children: i
                }), o[2] = i, o[3] = l, o[4] = t, o[5] = n) : n = o[5], n
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
                } = t, a = n(l.L, e);
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
                let a = n(l.L, e),
                    o = n(l.B, e);
                return null == a || null == o ? null : (0, r.b)({
                    mapping: a,
                    current_node: o
                }).findLast(e => "assistant" === e.author.role && !(0, r.m)(e) && "" !== (0, r.e)(e).trim())
            }),
            d = (0, a.d)(s.a, (e, t) => {
                let {
                    get: n
                } = t;
                if (null == e || n(i.d, "2163293173") && !n(l.I, e)) return null;
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
                    x = (0, o.z)(i.f);
                return null == x || f.gizmo.tags?.includes("first_party") || "marketplace" !== f.gizmo.share_recipient && "link" !== f.gizmo.share_recipient ? null : (g[0] !== x || g[1] !== v || g[2] !== f || g[3] !== y ? (t = () => {
                    v?.(), (0, u.f)(y, p, {
                        accountId: x,
                        resource: f
                    })
                }, g[0] = x, g[1] = v, g[2] = f, g[3] = y, g[4] = t) : t = g[4], g[5] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(l.c.ItemIcon, {
                    children: (0, a.jsx)(c.td, {})
                }), d = (0, a.jsx)(s.a, {
                    id: "chatgptConversations.gpts.report.action",
                    defaultMessage: "Report GPT",
                    description: "Menu action to report a publicly shared third-party GPT"
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
            i = n("zKCW"),
            l = n("Sm6l"),
            c = n("HOLv"),
            d = n("hZax"),
            u = n("slBk"),
            h = n("CS9C");
        n.d(t, {}, {
            a: function(e) {
                let t, n, p, m, g, f, v, y, x, b = (0, r.c)(34),
                    {
                        gptName: C,
                        accessState: _,
                        onUsePlugin: w,
                        onKeepUsingGpt: I,
                        onRetry: S
                    } = e,
                    j = (0, o.a)(),
                    T = (0, d.g)("2513446768");
                b[0] !== T || b[1] !== j ? (t = j.formatDate((0, u.a)(T.get("retirement_date", "")), {
                    month: "long",
                    day: "numeric",
                    timeZone: "UTC"
                }), b[0] = T, b[1] = j, b[2] = t) : t = b[2];
                let E = t;
                if ("error" === _ && null != S) {
                    let e;
                    b[3] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceRetry",
                        defaultMessage: "Try again",
                        description: "Retry checking access to the migrated plugin"
                    }), b[3] = e) : e = b[3], n = e
                } else if ("admin" === _) {
                    let e;
                    b[4] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.viewPlugin",
                        defaultMessage: "View Plugin",
                        description: "Button that opens a migrated plugin in workspace admin settings for an administrator who cannot open its ordinary plugin details; does not start a chat"
                    }), b[4] = e) : e = b[4], n = e
                } else if ("allowed" === _ || "pending" === _) {
                    let e;
                    b[5] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceUsePlugin",
                        defaultMessage: "Use plugin",
                        description: "Opens the migrated plugin detail page from the initial GPT chat choice."
                    }), b[5] = e) : e = b[5], n = e
                } else {
                    let e;
                    b[6] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceExplorePlugins",
                        defaultMessage: "Explore plugins",
                        description: "Opens the plugin directory from a migrated GPT chat banner when access to its plugin was denied or could not be verified after a failed request."
                    }), b[6] = e) : e = b[6], n = e
                }
                if ("error" === _ && null == S) {
                    let e;
                    b[7] !== E ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceAccessUnconfirmed",
                        defaultMessage: "We couldn’t check your access to the plugin. You can keep using this GPT until {deadline}.",
                        description: "Fallback when the migration banner cannot load. Access is unknown; the user can explore plugins or continue using the GPT.",
                        values: {
                            deadline: E
                        }
                    }), b[7] = E, b[8] = e) : e = b[8], p = e
                } else if ("error" === _) {
                    let e;
                    b[9] !== E ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceAccessError",
                        defaultMessage: "We couldn’t check your access to the plugin. Try again, or keep using this GPT until {deadline}.",
                        description: "Migrated GPT notice after a failed plugin-access check; deadline is the localized retirement date",
                        values: {
                            deadline: E
                        }
                    }), b[9] = E, b[10] = e) : e = b[10], p = e
                } else if ("denied" === _) {
                    let e;
                    b[11] !== E ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceAccessDenied",
                        defaultMessage: "This plugin isn’t available to you. You can keep using this GPT until {deadline}.",
                        description: "Migrated GPT notice when the destination plugin is inaccessible; deadline is the localized retirement date",
                        values: {
                            deadline: E
                        }
                    }), b[11] = E, b[12] = e) : e = b[12], p = e
                } else if (C.trim()) {
                    let e;
                    b[13] !== E || b[14] !== C ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceNamedBody",
                        defaultMessage: "{gptName} is now available as a plugin. You can keep using this GPT until {deadline}.",
                        description: "Explains the migrated GPT choice before the composer. gptName is the GPT display name and deadline is a localized month and day.",
                        values: {
                            gptName: C,
                            deadline: E
                        }
                    }), b[13] = E, b[14] = C, b[15] = e) : e = b[15], p = e
                } else {
                    let e;
                    b[16] !== E ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceBody",
                        defaultMessage: "This GPT is now available as a plugin. You can keep using this GPT until {deadline}.",
                        description: "Explains the migrated GPT choice when the GPT has no display name; deadline is a localized month and day.",
                        values: {
                            deadline: E
                        }
                    }), b[16] = E, b[17] = e) : e = b[17], p = e
                }
                b[18] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, a.jsx)(c.a, {
                    asset: h.a,
                    className: "text-secondary"
                }), b[18] = m) : m = b[18], b[19] !== C ? (g = C.trim() ? (0, a.jsx)(s.a, {
                    id: "chatgptConversations.gpts.migration.chatChoiceNamedTitle",
                    defaultMessage: "{gptName} is now a plugin",
                    description: "Title of the migrated GPT chat choice shown before the composer. gptName is the user-provided GPT name.",
                    values: {
                        gptName: C
                    }
                }) : (0, a.jsx)(s.a, {
                    id: "chatgptConversations.gpts.migration.chatChoiceTitle",
                    defaultMessage: "This GPT is now a plugin",
                    description: "Title of the migrated GPT chat choice when the GPT has no display name."
                }), b[19] = C, b[20] = g) : g = b[20];
                let A = "pending" === _,
                    P = "error" === _ && null != S ? S : w;
                return b[21] !== n || b[22] !== A || b[23] !== P ? (f = (0, a.jsx)(l.a, {
                    color: "primary",
                    loading: A,
                    size: "dialog",
                    type: "button",
                    onClick: P,
                    children: n
                }), b[21] = n, b[22] = A, b[23] = P, b[24] = f) : f = b[24], b[25] !== I ? (v = null == I ? null : (0, a.jsx)(l.a, {
                    color: "outline",
                    size: "dialog",
                    type: "button",
                    onClick: I,
                    children: (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceKeepUsing",
                        defaultMessage: "Keep using GPT",
                        description: "Reveals the existing GPT chat composer for this visit only, keeping its draft. The choice is shown again when the GPT is reopened."
                    })
                }), b[25] = I, b[26] = v) : v = b[26], b[27] !== f || b[28] !== v ? (y = (0, a.jsxs)("div", {
                    className: "flex flex-wrap items-center gap-2",
                    children: [f, v]
                }), b[27] = f, b[28] = v, b[29] = y) : y = b[29], b[30] !== p || b[31] !== g || b[32] !== y ? (x = (0, a.jsx)("div", {
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
                }), b[30] = p, b[31] = g, b[32] = y, b[33] = x) : x = b[33], x
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
        var a = n("czpb"),
            r = n("BolX"),
            o = n("ASxG"),
            s = n("OWtl"),
            i = n("OMIV"),
            l = n("b6fw"),
            c = n("YdNM");
        let d = o.object({
                course_id: o.string().trim().min(1),
                title: o.string().trim().nullish().catch(null),
                icon_url_or_emoji: c.a
            }),
            u = o.object({
                course_info: d.nullish()
            }),
            h = (0, r.d)(s.a, (e, t) => {
                let {
                    get: n
                } = t, a = u.safeParse(n(l.g, e)?.view);
                return a.success ? a.data.course_info ?? null : null
            }, {
                isEqual: a.isEqual
            }),
            p = (0, r.d)(s.a, (e, t) => {
                let {
                    get: n
                } = t;
                return n(i.d, "4035922817") ? n(h, e) : null
            }),
            m = (0, r.d)(s.a, (e, t) => {
                let {
                    get: n
                } = t;
                return n(p, e)?.course_id ?? null
            });
        n.d(t, {}, {
            a: m,
            b: p
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
                } = e, a = n(s.v, t);
                return {
                    pending: (0, s.zb)(n(s._, t)),
                    completed: null == a || "completed" === a.result,
                    completionId: n(r.d, "2163293173") ? JSON.stringify([t, a?.requestId, n(s.B, t)]) : void 0,
                    unread: n(s.I, t)
                }
            },
            preview: (e, t) => {
                let {
                    get: n
                } = e, a = n(s.L, t);
                return null == a ? null : (0, i.a)({
                    mapping: a,
                    current_node: n(s.B, t)
                })?.text ?? null
            },
            title: (e, t) => {
                let {
                    get: n
                } = e;
                return n(s.cb, t) || null
            },
            dismiss: (e, t) => {
                (0, s.Vb)(e, t, !1), (0, o.b)(e, t).catch(() => {})
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
                let t, n, f, v, y, x = (0, r.c)(20),
                    {
                        conversationId: b
                    } = e,
                    C = (0, o.y)(c.a),
                    _ = (0, o.z)(l.b),
                    w = (0, o.x)(h.j, b),
                    I = (0, o.x)(m.c, w ?? b),
                    S = (0, u.b)(),
                    j = (0, s.useRef)(null);
                x[0] !== C || x[1] !== w ? (t = () => {
                    null != w && (0, p.b)(C, w, i.flushSync)
                }, x[0] = C, x[1] = w, x[2] = t) : t = x[2];
                let T = t;
                x[3] !== b || x[4] !== T || x[5] !== C || x[6] !== w ? (n = () => {
                    let e = C.get(m.c, w ?? b);
                    C.get(l.b) || e?.hasError || T()
                }, x[3] = b, x[4] = T, x[5] = C, x[6] = w, x[7] = n) : n = x[7];
                let E = (0, s.useEffectEvent)(n);
                x[8] !== S || x[9] !== _ || x[10] !== E ? (f = () => {
                    if (_) return;
                    let e = j.current,
                        t = S.getScrollElement();
                    if (null == e || null == t) return;
                    let n = new IntersectionObserver(e => {
                        e.some(g) && E()
                    }, {
                        root: t,
                        rootMargin: "80px 0px 0px 0px"
                    });
                    return n.observe(e), () => n.disconnect()
                }, x[8] = S, x[9] = _, x[10] = E, x[11] = f) : f = x[11];
                let A = I?.cursor,
                    P = I?.hasError;
                if (x[12] !== S || x[13] !== _ || x[14] !== w || x[15] !== A || x[16] !== P ? (v = [S, _, w, A, P], x[12] = S, x[13] = _, x[14] = w, x[15] = A, x[16] = P, x[17] = v) : v = x[17], (0, s.useEffect)(f, v), null == I || I.complete || null == I.cursor) return null;
                let k = I.hasError ? T : null;
                return x[18] !== k ? (y = (0, a.jsx)(d.a, {
                    ref: j,
                    onRetry: k
                }), x[18] = k, x[19] = y) : y = x[19], y
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
            m = n("OcxA"),
            g = n("FR8U"),
            f = n("OWtl"),
            v = n("OtLV"),
            y = n("w7E5"),
            x = n("wVX4"),
            b = n("c5lN"),
            C = n("QmkR"),
            _ = n("xEXG"),
            w = n("KMqT"),
            I = n("J6LI"),
            S = n("FgUr"),
            j = n("WLgA");
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
                onCreateProjectDialogCloseAutoFocus: _
            } = e, {
                isWorkConversation: E,
                sourceMemoryBlocked: P
            } = (0, I.c)(n, r), k = P ? v.a.projectOnlyMoveUnavailable : void 0, {
                data: M,
                isPending: R,
                isError: N
            } = o, {
                data: O,
                isPending: B,
                isError: G
            } = s, F = (0, S.a)(O, M, r?.gizmo.id), z = "allowed" === c, L = e => {
                let a = t.get(T) + 1,
                    r = t.get(p.e);
                t.set(T, a), (0, C.T)({
                    scope: t,
                    conversationId: n.id,
                    projectId: e.gizmo.id
                }).then(n => {
                    n && t.get(T) === a && t.get(p.e) === r && f((0, j.c)(e.gizmo.id))
                }).catch(() => {
                    t.get(u.f).danger(t.get(h.a).formatMessage(A.moveFailed), {
                        errorAnalytics: {
                            toastId: "move_conversation_to_snorlax_error"
                        }
                    })
                })
            }, D = [];
            for (let e of (z && (D.push({
                    id: "new-chatgpt-project",
                    icon: d.Ag,
                    message: A.newProject,
                    selectAfterClose: !0,
                    onSelect: () => {
                        t.set(T, e => e + 1), (0, b.a)(t, L, {
                            allowLocalProjectCreation: !1,
                            forceGlobalMemory: E,
                            onCloseAutoFocus: _
                        })
                    }
                }), F.length > 0 && D.push({
                    id: "new-project-separator",
                    type: "separator"
                })), F)) {
                let {
                    targetMemoryBlocked: t
                } = (0, I.c)(n, void 0, e), r = t ? (0, w.a)((0, x.c)(e)) : void 0;
                D.push({
                    id: `move-to-project:${e.gizmo.id}`,
                    icon: (0, a.jsx)(g.a, {
                        className: "icon-xs",
                        size: 16,
                        color: e.gizmo.display.theme,
                        fallbackIcon: (0, a.jsx)(d.xd, {}),
                        icon: e.gizmo.display.emoji
                    }),
                    nativeIcon: (0, m.b)(e.gizmo.display.emoji),
                    message: A.projectName,
                    messageValues: {
                        projectName: e.gizmo.display.name
                    },
                    enabled: null == r,
                    tooltipMessage: r,
                    onSelect: () => L(e)
                })
            }
            return l && (N || G) ? D.push({
                id: "retry-project-destinations",
                message: A.destinationsFailed,
                closeOnSelect: !1,
                onSelect: () => {
                    Promise.all([t.query.invalidate(y.a), t.query.invalidate(C.m)])
                }
            }) : l && (R || B) ? D.push({
                id: "loading-project-destinations",
                message: A.loading,
                tooltipMessage: A.reopen,
                enabled: !1
            }) : N || G || R || B || 0 !== F.length || z || D.push({
                id: "no-project-destinations",
                message: A.noDestinations,
                enabled: !1
            }), [...i && D.length > 0 ? [{
                id: "move-to-project",
                icon: d.xd,
                message: A.moveToProject,
                enabled: !P,
                tooltipMessage: k,
                submenu: D
            }] : [], ...null == r ? [] : [{
                id: "remove-from-project",
                icon: d.Fd,
                message: A.removeFromProject,
                enabled: !P,
                tooltipMessage: k,
                onSelect: () => {
                    t.set(T, e => e + 1), (0, C.T)({
                        scope: t,
                        conversationId: n.id,
                        projectId: null
                    }).catch(() => {
                        t.get(u.f).danger(t.get(h.a).formatMessage(A.removeFailed), {
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
                defaultMessage: "Move to project",
                description: "Context or overflow submenu that moves a ChatGPT conversation or Work task into a different ChatGPT project"
            },
            projectName: {
                id: "chatgptConversations.projectActions.projectName",
                defaultMessage: "{projectName}",
                description: "Name of a ChatGPT project offered as a destination for moving a conversation or Work task"
            },
            removeFromProject: {
                id: "chatgptProjectHome.chats.projectActions.remove",
                defaultMessage: "Remove from project",
                description: "Action in a conversation header or project-home chat's overflow menu that moves the chat back to general history; the project name appears in the section heading"
            },
            moveFailed: {
                id: "chatgptProjectHome.chats.projectActions.moveFailed",
                defaultMessage: "Failed to move the conversation to the project",
                description: "Error toast after moving a chat from the project-home or conversation-header overflow menu fails; the chat's previous project membership is restored"
            },
            removeFailed: {
                id: "chatgptProjectHome.chats.projectActions.removeFailed",
                defaultMessage: "Failed to remove the conversation from the project",
                description: "Error toast after a chat cannot be removed from its current project; its previous membership is restored"
            },
            newProject: {
                id: "chatgptProjectHome.chats.projectActions.newProject",
                defaultMessage: "New project",
                description: "Action in the project-home or conversation-header Move to project submenu that creates a new cloud project and then moves the chat into it"
            },
            destinationsFailed: {
                id: "chatgptProjectHome.chats.projectActions.destinationsFailed",
                defaultMessage: "Couldn’t load projects. Try again",
                description: "Retry action in the project-home or conversation-header Move to project submenu when project destinations fail to load; already loaded destinations remain available"
            },
            loading: {
                id: "chatgptConversations.projects.loadingMenu",
                defaultMessage: "Loading projects…",
                description: "Disabled menu item while project destinations load"
            },
            reopen: {
                id: "chatgptConversations.projects.reopenMenu",
                defaultMessage: "Reopen this menu to refresh project destinations",
                description: "Native menu hint for refreshing project destinations"
            },
            noDestinations: {
                id: "chatgptProjectHome.chats.projectActions.noDestinations",
                defaultMessage: "No other projects",
                description: "Empty state in a project-home or conversation-header Move to project submenu when no destination projects are available and project creation is not allowed"
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
                    x = (0, o.z)(y.a),
                    b = (0, o.z)(C.m),
                    w = (0, _.b)();
                if (i[0] !== d || i[1] !== v || i[2] !== u || i[3] !== b || i[4] !== h || i[5] !== w || i[6] !== x || i[7] !== g || i[8] !== m) {
                    let e = E({
                            scope: g,
                            conversation: d,
                            project: h,
                            projectListQuery: x,
                            pinnedProjectsQuery: b,
                            showMoveToProject: m,
                            projectCrudStatus: w,
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
                    t = e.map(n), i[0] = d, i[1] = v, i[2] = u, i[3] = b, i[4] = h, i[5] = w, i[6] = x, i[7] = g, i[8] = m, i[9] = t
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
            } = t, a = n(i.g, e);
            if (null == a) return null;
            let r = n(s.L, e);
            return null == r ? null : c({
                ...a,
                conversation: {
                    mapping: r,
                    current_node: n(s.B, e),
                    conversation_origin: n(s.x, e),
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
                x = null == g || v ? [] : c.slice(g, f ?? c.length),
                b = Object.fromEntries(x.map(e => [e, t.mapping[e]]));
            return {
                selectedIndex: i,
                conversation: {
                    ...t,
                    current_node: x.at(-1) ?? null,
                    mapping: b
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
                defaultMessage: "This section is read-only",
                description: "Placeholder in the disabled message composer while reviewing an earlier section of a guided conversation. Users can return to the current section to send messages."
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
            l = n("QcFS"),
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
                defaultMessage: "Report image",
                description: "Button below the shared-image disclosure that opens safety reporting for the image-only Post."
            }) : (0, a.jsx)(i.a, {
                id: "chatgptConversations.sharedPost.reportButton",
                defaultMessage: "Report conversation",
                description: "Button below the shared-chat disclosure that opens safety reporting for the shared ChatGPT image post shown in the conversation."
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
                    defaultMessage: "Report an image",
                    description: "Title of the safety report dialog for an existing web image shared as an image-only Post."
                }) : (0, a.jsx)(i.a, {
                    id: "chatgptConversations.sharedPost.reportTitle",
                    defaultMessage: "Report a conversation",
                    description: "Title of the existing safety report dialog when it is opened for a shared ChatGPT image conversation."
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
                            defaultMessage: "This is a shared image.",
                            description: "Notice above an existing web image shared as an image-only Post. The sender has not shared a conversation."
                        }) : (0, a.jsx)(i.a, {
                            id: "chatgptConversations.sharedConversation.copyDisclaimer",
                            defaultMessage: "This is a copy of a shared ChatGPT chat. It won't be added to memory.",
                            description: "Informational notice above a shared ChatGPT chat explaining that the copy will not be added to the viewer's memory"
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
                            description: "Notice in the shared prompt header. The reportButton tag opens safety reporting for the original shared post.",
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
            s = n("QcFS"),
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
                f = (0, o.z)(l.m);
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
            i = n("d0tz"),
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
                let t, n, r, f, v, y, x = (0, a.c)(19);
                x[0] !== e ? (t = void 0 === e ? {} : e, x[0] = e, x[1] = t) : t = x[1];
                let {
                    composerController: b,
                    conversationId: C,
                    draftKey: _,
                    initialPrompt: w,
                    initialPromptKind: I
                } = t, S = void 0 === _ ? C : _, j = (0, s.y)(u.a);
                x[2] !== C || x[3] !== S || x[4] !== w || x[5] !== I || x[6] !== j ? (n = () => o()(() => {
                    let e = null == C ? null : j.get(g.x, C),
                        t = (0, d.e)(w ?? (null == S ? "" : j.get(p.s, S)), {
                            addInitialContentToHistory: null == w && null != S,
                            defaultTextKind: I ?? (null == w && null != S || (0, c.b)(w ?? "").length > 0 ? "prompt" : "plain"),
                            enableFileMentions: !0,
                            enableRichText: !0,
                            enableSkillMentions: !1,
                            enableSlashCommands: {
                                triggers: ["/"]
                            },
                            plainTextMode: (0, h.b)(j.get, i.rf.composerPlainTextMode),
                            suggestionOptions: {
                                enableInlineSystemHints: "tpp" !== e && "flora" !== e,
                                variant: "tpp" !== e && "flora" !== e ? "chatgpt" : void 0
                            }
                        });
                    return null == w && null != C && "string" == typeof S && null != (0, m.j)(j, S) && "tpp" !== e && "flora" !== e && (0, p.P)(j, C, t.getChatGptPrompt().systemHints), t
                }), x[2] = C, x[3] = S, x[4] = w, x[5] = I, x[6] = j, x[7] = n) : n = x[7];
                let [T] = (0, l.useState)(n);
                x[8] !== T || x[9] !== b ? (r = b ?? T(), x[8] = T, x[9] = b, x[10] = r) : r = x[10];
                let E = r,
                    A = (0, l.useRef)(null);
                x[11] !== E || x[12] !== S || x[13] !== j ? (f = () => {
                    if (null == S) return;
                    let e = j.get(p.s, S);
                    return null != A.current && A.current !== e && E.restoreDraft(e), () => {
                        A.current = j.get(p.s, S)
                    }
                }, v = [E, S, j], x[11] = E, x[12] = S, x[13] = j, x[14] = f, x[15] = v) : (f = x[14], v = x[15]), (0, l.useLayoutEffect)(f, v), x[16] !== E || x[17] !== b ? (y = () => {
                    null != b || E.view.isDestroyed || E.destroy()
                }, x[16] = E, x[17] = b, x[18] = y) : y = x[18];
                let P = y;
                return (0, d.f)(P, E), E
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
            o = (0, a.b)("text-default min-h-0 w-full p-0 leading-normal !font-sans", "[&_.ProseMirror]:w-full", "[&_.ProseMirror]:!text-default", "[&_.ProseMirror]:!font-sans", "[&_.ProseMirror]:px-0", "[&_.ProseMirror]:py-0", "[&_.ProseMirror]:!leading-6", "[&_.ProseMirror_p]:!font-sans", "[&_.ProseMirror_p]:!leading-6", "[&_.ProseMirror_p_*]:!font-sans", "[&_.ProseMirror_span]:!font-sans", "!min-h-0 text-base", "[&_.ProseMirror]:min-h-6");
        n.d(t, {}, {
            a: "absolute inset-x-0 bottom-0 flex h-12 items-center ps-2 pe-3 origin-bottom-left transition-[opacity,transform] duration-basic ease-out motion-reduce:transition-none",
            b: o,
            c: "absolute left-4 min-w-0 overflow-hidden transition-[left,width,top,bottom] duration-[140ms] ease-enter-snappy motion-reduce:transition-none",
            d: {
                "--codex-chat-font-size": "var(--annotation-comment-font-size, 13px)",
                "--composer-top-tray-background": "var(--color-surface)",
                "--composer-top-tray-border": "transparent",
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
            let t, n, i, l, c, d, u, h, p, m, g, f, v = (0, r.c)(24);
            v[0] !== e ? ({
                className: n,
                children: t,
                style: l,
                isRevealingPageComment: c,
                surfaceVariant: d,
                ...i
            } = e, v[0] = e, v[1] = t, v[2] = n, v[3] = i, v[4] = l, v[5] = c, v[6] = d) : (t = v[1], n = v[2], i = v[3], l = v[4], c = v[5], d = v[6]);
            let y = void 0 === d ? "default" : d,
                x = "default" === y && "bg-surface-elevated-secondary shadow-md",
                b = void 0 !== c && c ? "transition-none" : "transition-[height,width,opacity]";
            return v[7] !== n || v[8] !== x || v[9] !== b ? (u = (0, o.b)("surface-AyYLmv", "pointer-events-auto isolate rounded-[22px] ease-enter-snappy motion-reduce:transition-none", x, b, n), v[7] = n, v[8] = x, v[9] = b, v[10] = u) : u = v[10], v[11] !== l ? (h = {
                ...s.d,
                ...l
            }, v[11] = l, v[12] = h) : h = v[12], v[13] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, o.b)("content-Sj8_aX", "overflow-hidden rounded-[inherit] bg-inherit"), v[13] = p) : p = v[13], v[14] !== t ? (m = (0, a.jsx)("div", {
                className: p,
                children: t
            }), v[14] = t, v[15] = m) : m = v[15], v[16] !== y ? (g = "default" === y ? (0, a.jsx)("div", {
                "aria-hidden": !0,
                className: "pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-multiply outline-1 outline-border"
            }) : null, v[16] = y, v[17] = g) : g = v[17], v[18] !== i || v[19] !== u || v[20] !== h || v[21] !== m || v[22] !== g ? (f = (0, a.jsxs)("div", {
                ...i,
                className: u,
                style: h,
                children: [m, g]
            }), v[18] = i, v[19] = u, v[20] = h, v[21] = m, v[22] = g, v[23] = f) : f = v[23], f
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
            h = n("d0tz"),
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
                width: h.R
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
        let g = (0, d.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(954244), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(229522), n.e(390575), n.e(353032), n.e(637885), n.e(284470), n.e(339467), n.e(55068), n.e(633848), n.e(779104)]).then(n.bind(n, "FQ1K"))).SelectedTextAnnotationEditor, {
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
                defaultMessage: "Couldn't load the editor. Reload to try again",
                description: "Error inside the response annotation editor when its code fails to download after retrying. Reloading the app allows another attempt."
            }) : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(u.a, {}), (0, a.jsx)(s.a, {
                    id: "responseTextAnnotationMarkers.editor.loading",
                    defaultMessage: "Loading editor…",
                    description: "Loading status inside the editor for a comment on selected response text"
                })]
            }), d[0] = m, d[1] = t) : t = d[1], d[2] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(s.a, {
                id: "responseTextAnnotationMarkers.editor.close",
                defaultMessage: "Close",
                description: "Button that dismisses a loading or unavailable response annotation editor while preserving the annotation"
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
    WQca: (function(e, t, n) {
        var a = n("QosV"),
            r = n("BolX"),
            o = n("zd8w"),
            s = n("jqIZ"),
            i = n("SGsN"),
            l = n("OWtl");
        n.d(t, {}, {
            a: function(e) {
                let t, n, c, d = (0, a.c)(11),
                    {
                        isUnavailable: u,
                        message: h,
                        homePath: p,
                        onUnavailable: m,
                        children: g
                    } = e,
                    f = (0, r.y)(l.a),
                    v = (0, s._)(),
                    y = (0, o.useRef)(!1);
                d[0] !== p || d[1] !== h || d[2] !== v || d[3] !== m || d[4] !== f ? (t = () => {
                    m?.(), f.get(i.f).info(h, {
                        id: "conversation-inaccessible",
                        duration: 5
                    }), v(p, {
                        replace: !0
                    })
                }, d[0] = p, d[1] = h, d[2] = v, d[3] = m, d[4] = f, d[5] = t) : t = d[5];
                let x = (0, o.useEffectEvent)(t);
                return d[6] !== u || d[7] !== x ? (n = () => {
                    u && !y.current && (y.current = !0, x())
                }, d[6] = u, d[7] = x, d[8] = n) : n = d[8], d[9] !== u ? (c = [u], d[9] = u, d[10] = c) : c = d[10], (0, o.useEffect)(n, c), u ? null : g
            }
        })
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
                x = void 0 === y ? v : y,
                b = (0, o.y)(l.a),
                [C] = (0, s.useState)(p);
            return f[0] !== x || f[1] !== C || f[2] !== b || f[3] !== v ? (t = () => {
                if (i.appServices?.windowTitle == null) return;
                let e = {
                    owner: C,
                    title: null == v ? void 0 : x ?? null
                };
                b.set(u, t => t.some(e => e.owner === C) ? t.map(t => t.owner === C ? e : t) : [...t, e]), g(b)
            }, n = [b, C, v, x], f[0] = x, f[1] = C, f[2] = b, f[3] = v, f[4] = t, f[5] = n) : (t = f[4], n = f[5]), (0, s.useEffect)(t, n), f[6] !== C || f[7] !== b ? (a = () => () => {
                i.appServices?.windowTitle != null && (b.set(u, e => e.filter(e => e.owner !== C)), g(b))
            }, c = [b, C], f[6] = C, f[7] = b, f[8] = a, f[9] = c) : (a = f[8], c = f[9]), (0, s.useEffect)(a, c), f[10] !== v ? (d = () => {
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
            i.appServices.windowTitle?.setTitle(e.get(u).findLast(e => void 0 !== e.title)?.title ?? null)
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
    RZBv: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            o = n("xSOA"),
            s = n("BolX"),
            i = n("zd8w"),
            l = n("Wf1j"),
            c = n("oyxz"),
            d = n("jqIZ"),
            u = n("Cslg"),
            h = n("MYlA"),
            p = n("OtLV"),
            m = n("sfmI"),
            g = n("QmkR"),
            f = n("Yrvy"),
            v = n("HOLv"),
            y = n("SGsN"),
            x = n("nlNF"),
            b = n("iGet"),
            C = n("OWtl"),
            _ = n("MRlq"),
            w = n("HFSu"),
            I = n("vNLk"),
            S = n("PCxL"),
            j = n("aZgH"),
            T = n("CzoK");
        n.d(t, {}, {
            a: function(e) {
                let t, n, E, A, P, k, M, R, N, O, B, G, F, z, L = (0, r.c)(59),
                    {
                        conversationId: D,
                        kind: H
                    } = e,
                    W = (0, s.y)(C.a),
                    q = (0, l.a)(),
                    U = (0, d.Y)(),
                    K = (0, d._)(),
                    V = (0, s.z)(S.h),
                    Y = (0, s.z)(u.h),
                    Q = (0, s.z)(u.g);
                L[0] !== Y || L[1] !== D || L[2] !== Q || L[3] !== H || L[4] !== V ? (t = "chatgpt" === H && V?.kind === "chatgpt" && V.conversation.id === D && (0, m.a)(V.conversation, Y, Q) ? V.conversation : null, L[0] = Y, L[1] = D, L[2] = Q, L[3] = H, L[4] = V, L[5] = t) : t = L[5];
                let $ = t,
                    [X, Z] = (0, i.useState)(!1),
                    {
                        mutate: J,
                        isPending: ee
                    } = (0, f.a)(D);
                L[6] !== U.hash || L[7] !== U.pathname || L[8] !== U.search || L[9] !== K || L[10] !== W ? (n = () => {
                    (0, S.e)(W), K({
                        pathname: U.pathname,
                        search: U.search,
                        hash: U.hash
                    }, {
                        replace: !0,
                        state: null
                    })
                }, L[6] = U.hash, L[7] = U.pathname, L[8] = U.search, L[9] = K, L[10] = W, L[11] = n) : n = L[11];
                let et = n,
                    en = (0, s.z)(S.g);
                L[12] !== D || L[13] !== en ? (E = en?.find(e => (0, j.a)(e.task) === `hosted:${D}`), L[12] = D, L[13] = en, L[14] = E) : E = L[14];
                let ea = E;
                L[15] !== D || L[16] !== W ? (A = () => {
                    let e = W.get(S.h);
                    return null != e && (0, j.a)(e) === `hosted:${D}` ? (0, S.d)(W, e) : void 0
                }, L[15] = D, L[16] = W, L[17] = A) : A = L[17], L[18] !== D || L[19] !== H || L[20] !== W ? (P = async () => {
                    if ("cloud" === H) {
                        await w.CodexRequest.safePost("/wham/tasks/{task_id}/recover", {
                            parameters: {
                                path: {
                                    task_id: D
                                }
                            }
                        }), (0, b.c)(W, D, !1);
                        return
                    }
                    await (0, g.W)({
                        scope: W,
                        conversationId: D
                    })
                }, L[18] = D, L[19] = H, L[20] = W, L[21] = P) : P = L[21], L[22] !== D || L[23] !== et || L[24] !== H || L[25] !== W ? (k = (e, t, n) => {
                    n?.("restored");
                    let r = W.get(y.f).info((0, a.jsx)(c.a, {
                        ..._.a.unarchiveSuccessPlain
                    }), {
                        leading: (0, a.jsx)(v.a, {
                            "aria-hidden": !1,
                            asset: T.a
                        }),
                        primaryAction: {
                            label: (0, a.jsx)(c.a, {
                                ..._.a.viewNow
                            }),
                            onClick: () => {
                                r.close(), et()
                            }
                        },
                        id: `unarchive-thread-${H}:${D}`
                    })
                }, L[22] = D, L[23] = et, L[24] = H, L[25] = W, L[26] = k) : k = L[26], L[27] !== q || L[28] !== W ? (M = (e, t, n) => {
                    n?.(null), W.get(y.f).danger(q.formatMessage(_.a.unarchiveError), {
                        errorAnalytics: {
                            toastId: "previewFooter.onError.unarchiveError"
                        }
                    })
                }, L[27] = q, L[28] = W, L[29] = M) : M = L[29], L[30] !== A || L[31] !== P || L[32] !== k || L[33] !== M ? (R = {
                    onMutate: A,
                    mutationFn: P,
                    onSuccess: k,
                    onError: M
                }, L[30] = A, L[31] = P, L[32] = k, L[33] = M, L[34] = R) : R = L[34];
                let {
                    mutate: er,
                    isPending: eo,
                    isSuccess: es
                } = (0, o.a)(R);
                L[35] !== J || L[36] !== K || L[37] !== W ? (N = e => {
                    let t = W.get(S.c),
                        n = W.get(x.c),
                        a = W.get(u.f);
                    J(e, {
                        onSuccess: () => {
                            if (Z(!1), t !== W.get(S.c) || n !== W.get(x.c) || a !== W.get(u.f)) return;
                            W.set(S.h, null);
                            let e = t?.pathname === S.a ? t : null;
                            K(e ?? "/", {
                                replace: !0,
                                state: e?.state ?? null
                            })
                        }
                    })
                }, L[35] = J, L[36] = K, L[37] = W, L[38] = N) : N = L[38];
                let ei = N;
                L[39] !== $ ? (O = null == $ ? void 0 : () => Z(!0), L[39] = $, L[40] = O) : O = L[40];
                let el = es || ea?.status === "restored",
                    ec = eo || ea?.status === "restoring";
                return L[41] !== er ? (B = () => er(), L[41] = er, L[42] = B) : B = L[42], L[43] !== et || L[44] !== ee || L[45] !== O || L[46] !== el || L[47] !== ec || L[48] !== B ? (G = (0, a.jsx)(I.a, {
                    deleting: ee,
                    onDelete: O,
                    restored: el,
                    restoring: ec,
                    onUnarchive: B,
                    onDone: et
                }), L[43] = et, L[44] = ee, L[45] = O, L[46] = el, L[47] = ec, L[48] = B, L[49] = G) : G = L[49], L[50] !== $ || L[51] !== ei || L[52] !== q || L[53] !== X || L[54] !== ee ? (F = null != $ && (0, a.jsx)(h.a, {
                    allowArtifactDeletion: !0,
                    title: $.title?.trim() || q.formatMessage(p.a.newChat),
                    open: X,
                    isDeleting: ee,
                    onOpenChange: Z,
                    onConfirm: ei
                }), L[50] = $, L[51] = ei, L[52] = q, L[53] = X, L[54] = ee, L[55] = F) : F = L[55], L[56] !== G || L[57] !== F ? (z = (0, a.jsxs)(a.Fragment, {
                    children: [G, F]
                }), L[56] = G, L[57] = F, L[58] = z) : z = L[58], z
            }
        })
    }),
    p7j6: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "chevron-right-md-light-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20"
            },
            href: "#codex-icon-chevron-right-md-light-20",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: -.580201,
                    y: 0,
                    overflows: !1
                },
                composite: {
                    x: -.580201,
                    y: 0,
                    overflows: !1
                }
            }
        }
    }),
    Asyc: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "circle-grid-2x2-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-circle-grid-2x2-light-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 122e-6,
                    y: .00116,
                    overflows: !1
                },
                composite: {
                    x: 122e-6,
                    y: .00116,
                    overflows: !1
                }
            }
        }
    }),
    EWcN: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "clock-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24"
            },
            href: "#codex-icon-clock-light-24",
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
    ARKs: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "exclamation-mark-triangle-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24"
            },
            href: "#codex-icon-exclamation-mark-triangle-light-24",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 244e-6,
                    y: .081786,
                    overflows: !1
                },
                composite: {
                    x: 244e-6,
                    y: .081786,
                    overflows: !1
                }
            }
        }
    }),
    LhhT: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "list-circle-light-12",
            canvas: {
                width: 12,
                height: 12,
                viewBox: "0 0 12 12"
            },
            href: "#codex-icon-list-circle-light-12",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: .041015,
                    y: -.003174,
                    overflows: !1
                },
                composite: {
                    x: .041015,
                    y: -.003174,
                    overflows: !1
                }
            }
        }
    }),
    WwEY: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "list-circle-light-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-list-circle-light-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: .054688,
                    y: -.003906,
                    overflows: !1
                },
                composite: {
                    x: .054688,
                    y: -.003906,
                    overflows: !1
                }
            }
        }
    }),
    G6nH: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "list-circle-light-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20"
            },
            href: "#codex-icon-list-circle-light-20",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: .068115,
                    y: -.005127,
                    overflows: !1
                },
                composite: {
                    x: .068115,
                    y: -.005127,
                    overflows: !1
                }
            }
        }
    }),
    wmA0: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "map-point-of-interest-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24"
            },
            href: "#codex-icon-map-point-of-interest-light-24",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 0,
                    y: .027343,
                    overflows: !1
                },
                composite: {
                    x: 0,
                    y: .027343,
                    overflows: !1
                }
            }
        }
    }),
    VQnT: (function(e, t, n) {
        n.d(t, {
            a: () => a
        });
        var a = {
            kind: "inline",
            preset: (0, n("iJY0").a)({
                name: "multicolor-verified-checkmark-light-20",
                canvas: {
                    width: 20,
                    height: 20,
                    viewBox: "0 0 20 20",
                    frame: {
                        x: 0,
                        y: 0,
                        width: 20,
                        height: 20
                    },
                    inkBounds: {
                        x: 2.236328,
                        y: 1.665039,
                        width: 15.526855,
                        height: 16.669434
                    },
                    visualBounds: {
                        x: 2.236328,
                        y: 1.665039,
                        width: 15.526855,
                        height: 16.669434
                    }
                },
                paint: {
                    kind: "multicolor",
                    layers: [{
                        role: "fixed",
                        color: "#00B1FF",
                        bounds: {
                            x: 2.236328,
                            y: 1.665039,
                            width: 15.526855,
                            height: 16.669434
                        },
                        wideGamut: "color(display-p3 0.0000 0.6941 1.0000)"
                    }, {
                        role: "fixed",
                        color: "#FFFFFF",
                        bounds: {
                            x: 6.599609,
                            y: 6.730957,
                            width: 6.698242,
                            height: 6.538574
                        }
                    }]
                },
                optical: {
                    shape: "non-circular",
                    bounds: {
                        x: 2.236328,
                        y: 1.665039,
                        width: 15.526855,
                        height: 16.669434
                    },
                    center: {
                        x: 9.999756,
                        y: 9.999756
                    },
                    insets: {
                        top: 1.665039,
                        right: 2.236817,
                        bottom: 1.665527,
                        left: 2.236328
                    },
                    anchors: {
                        frame: {
                            x: 10,
                            y: 10
                        },
                        ink: {
                            x: 9.999756,
                            y: 9.999756
                        }
                    }
                },
                capabilities: ["icon"],
                body: '<path d="M9.99996 1.66504C11.5465 1.66508 12.8908 2.52904 13.5781 3.80034C15.0232 3.75936 16.4445 4.49251 17.2181 5.83241C17.9915 7.17206 17.9155 8.76888 17.1578 9.9998C17.9155 11.2308 17.9915 12.8275 17.2181 14.1672C16.4445 15.5071 15.0232 16.2395 13.578 16.1985C12.8909 17.4702 11.5467 18.3346 9.99988 18.3347C8.45288 18.3347 7.10815 17.4704 6.42099 16.1986C4.97605 16.2394 3.55521 15.507 2.78175 14.1673C2.00838 12.8277 2.08378 11.2309 2.84132 9.99988C2.0838 8.76896 2.0084 7.17208 2.78179 5.8325C3.55527 4.49276 4.97613 3.75964 6.42107 3.80038C7.10834 2.52891 8.4533 1.66505 9.99996 1.66504Z" fill="#00B1FF"/> <path d="M11.7608 7.11839C12.007 6.72964 12.5218 6.61415 12.9107 6.86042C13.2993 7.10672 13.4148 7.62155 13.1686 8.01032L10.2308 12.6482C10.1994 12.6977 10.1472 12.782 10.0933 12.8525C10.0355 12.9279 9.91808 13.0675 9.723 13.1633C9.49192 13.2766 9.22675 13.3004 8.97917 13.23C8.76992 13.1705 8.6295 13.0539 8.55925 12.99C8.49342 12.93 8.42633 12.8565 8.38675 12.8134L6.81933 11.1101C6.50778 10.7715 6.53042 10.2441 6.86897 9.93254C7.20768 9.62095 7.73495 9.64262 8.04654 9.98137L9.172 11.2045L11.7608 7.11839Z" fill="white"/>'
            })
        }
    }),
    aImb: (function(e, t, n) {
        n.d(t, {
            a: () => a
        });
        var a = {
            kind: "inline",
            preset: (0, n("iJY0").a)({
                name: "multicolor-verified-checkmark-light-24",
                canvas: {
                    width: 24,
                    height: 24,
                    viewBox: "0 0 24 24",
                    frame: {
                        x: 0,
                        y: 0,
                        width: 24,
                        height: 24
                    },
                    inkBounds: {
                        x: 2.684082,
                        y: 1.998047,
                        width: 18.632324,
                        height: 20.003418
                    },
                    visualBounds: {
                        x: 2.684082,
                        y: 1.998047,
                        width: 18.632324,
                        height: 20.003418
                    }
                },
                paint: {
                    kind: "multicolor",
                    layers: [{
                        role: "fixed",
                        color: "#00B1FF",
                        bounds: {
                            x: 2.684082,
                            y: 1.998047,
                            width: 18.632324,
                            height: 20.003418
                        },
                        wideGamut: "color(display-p3 0.0000 0.6941 1.0000)"
                    }, {
                        role: "fixed",
                        color: "#FFFFFF",
                        bounds: {
                            x: 7.919434,
                            y: 8.077148,
                            width: 8.038086,
                            height: 7.84668
                        }
                    }]
                },
                optical: {
                    shape: "non-circular",
                    bounds: {
                        x: 2.684082,
                        y: 1.998047,
                        width: 18.632324,
                        height: 20.003418
                    },
                    center: {
                        x: 12.000244,
                        y: 11.999756
                    },
                    insets: {
                        top: 1.998047,
                        right: 2.683594,
                        bottom: 1.998535,
                        left: 2.684082
                    },
                    anchors: {
                        frame: {
                            x: 12,
                            y: 12
                        },
                        ink: {
                            x: 12.000244,
                            y: 11.999756
                        }
                    }
                },
                capabilities: ["icon"],
                body: '<path d="M12.0004 1.99805C13.8563 1.9981 15.4694 3.03485 16.2942 4.56041C18.0283 4.51124 19.7339 5.39101 20.6622 6.9989C21.5903 8.60648 21.499 10.5227 20.5898 11.9998C21.499 13.477 21.5902 15.3931 20.6622 17.0007C19.7339 18.6086 18.0283 19.4875 16.2941 19.4383C15.4695 20.9643 13.8565 22.0016 12.0003 22.0017C10.1439 22.0017 8.53027 20.9645 7.70568 19.4384C5.97175 19.4873 4.26674 18.6085 3.33858 17.0008C2.41054 15.3933 2.50102 13.4771 3.41007 11.9999C2.50104 10.5228 2.41057 8.6065 3.33864 6.999C4.26681 5.39132 5.97184 4.51157 7.70577 4.56046C8.53049 3.0347 10.1444 1.99806 12.0004 1.99805Z" fill="#00B1FF"/> <path d="M14.1128 8.54207C14.4083 8.07557 15.0261 7.93698 15.4927 8.2325C15.9591 8.52806 16.0977 9.14586 15.8022 9.61238L12.2768 15.1778C12.2392 15.2372 12.1765 15.3383 12.1118 15.4229C12.0425 15.5134 11.9016 15.681 11.6675 15.7959C11.3902 15.9319 11.072 15.9604 10.7749 15.876C10.5238 15.8046 10.3553 15.6646 10.271 15.5879C10.192 15.516 10.1115 15.4277 10.064 15.376L8.18309 13.3321C7.80924 12.9257 7.8364 12.2929 8.24266 11.919C8.64911 11.5451 9.28184 11.5711 9.65575 11.9776L11.0063 13.4453L14.1128 8.54207Z" fill="white"/>'
            })
        }
    }),
    Vp8q: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "package-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24"
            },
            href: "#codex-icon-package-light-24",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 488e-6,
                    y: -488e-6,
                    overflows: !1
                },
                composite: {
                    x: 488e-6,
                    y: -488e-6,
                    overflows: !1
                }
            }
        }
    }),
    PpZH: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "phone-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24"
            },
            href: "#codex-icon-phone-light-24",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 366e-6,
                    y: 488e-6,
                    overflows: !1
                },
                composite: {
                    x: 366e-6,
                    y: 488e-6,
                    overflows: !1
                }
            }
        }
    }),
    eVLy: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "star-fill-regular-16",
            canvas: {
                width: 16,
                height: 16,
                viewBox: "0 0 16 16"
            },
            href: "#codex-icon-star-fill-regular-16",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 61e-6,
                    y: .065124,
                    overflows: !1
                },
                composite: {
                    x: 61e-6,
                    y: .065124,
                    overflows: !1
                }
            }
        }
    }),
    Ff4E: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "truck-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24"
            },
            href: "#codex-icon-truck-light-24",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 214e-6,
                    y: 0,
                    overflows: !1
                },
                composite: {
                    x: 214e-6,
                    y: 0,
                    overflows: !1
                }
            }
        }
    }),
    iYVU: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "verified-badge-checkmark-light-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20"
            },
            href: "#codex-icon-verified-badge-checkmark-light-20",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 306e-6,
                    y: -.012817,
                    overflows: !1
                },
                composite: {
                    x: 306e-6,
                    y: -.012817,
                    overflows: !1
                }
            }
        }
    }),
    XxTS: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "verified-checkmark-light-24",
            canvas: {
                width: 24,
                height: 24,
                viewBox: "0 0 24 24"
            },
            href: "#codex-icon-verified-checkmark-light-24",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: -183e-6,
                    y: -.016297,
                    overflows: !1
                },
                composite: {
                    x: -183e-6,
                    y: -.016297,
                    overflows: !1
                }
            }
        }
    }),
    hIm6: (function(e, t, n) {
        let a = (0, n("iJY0").a)({
            name: "document-badge-magnifyingglass-light-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20",
                frame: {
                    x: 0,
                    y: 0,
                    width: 20,
                    height: 20
                },
                inkBounds: {
                    x: 3.016602,
                    y: 2.251465,
                    width: 15.150635,
                    height: 16.775635
                },
                visualBounds: {
                    x: 3.016602,
                    y: 2.251465,
                    width: 15.150635,
                    height: 16.775635
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 3.016602,
                    y: 2.251465,
                    width: 15.150635,
                    height: 16.775635
                },
                center: {
                    x: 10.59192,
                    y: 10.639283
                },
                insets: {
                    top: 2.251465,
                    right: 1.832763,
                    bottom: .9729,
                    left: 3.016602
                },
                anchors: {
                    frame: {
                        x: 10,
                        y: 10
                    },
                    ink: {
                        x: 10.59192,
                        y: 10.639283
                    },
                    foreground: {
                        x: 10.59192,
                        y: 10.639283
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5889 10.9995C15.4857 10.9996 17.0233 12.5373 17.0234 14.4341C17.0234 15.1455 16.806 15.8058 16.4355 16.354L17.9727 17.8921C18.2322 18.1518 18.2323 18.5729 17.9727 18.8325C17.713 19.0919 17.2919 19.092 17.0322 18.8325L15.4912 17.2925C14.9465 17.6557 14.2927 17.8686 13.5889 17.8687C11.6921 17.8685 10.1544 16.3309 10.1543 14.4341C10.1544 12.5373 11.6921 10.9996 13.5889 10.9995ZM13.5889 12.3296C12.4266 12.3297 11.4845 13.2718 11.4844 14.4341C11.4845 15.5963 12.4266 16.5394 13.5889 16.5396C14.7512 16.5395 15.6942 15.5964 15.6943 14.4341C15.6942 13.2718 14.7512 12.3297 13.5889 12.3296Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8125 2.25146C12.6518 2.25146 13.4572 2.58476 14.0508 3.17822L15.9199 5.04736C16.5134 5.6409 16.8467 6.4463 16.8467 7.28564V9.08154C16.8466 9.44878 16.5489 9.74658 16.1816 9.74658C15.8144 9.74658 15.5166 9.44878 15.5166 9.08154V8.58154H13.417C12.1292 8.58154 11.085 7.53726 11.085 6.24951V3.58154H6.18164C5.1682 3.58154 4.34668 4.40306 4.34668 5.4165V14.5835C4.34686 15.5968 5.16831 16.4185 6.18164 16.4185H8.18164C8.54891 16.4185 8.84668 16.7162 8.84668 17.0835C8.8465 17.4506 8.5488 17.7485 8.18164 17.7485H6.18164C4.43377 17.7485 3.01678 16.3313 3.0166 14.5835V5.4165C3.0166 3.66852 4.43366 2.25146 6.18164 2.25146H11.8125ZM12.415 6.24951C12.415 6.80272 12.8638 7.25146 13.417 7.25146H15.5146C15.5058 6.77722 15.3155 6.32384 14.9795 5.98779L13.1104 4.11865C12.9128 3.92113 12.6741 3.77509 12.415 3.68506V6.24951Z" fill="currentColor"/>'
        });
        n.d(t, {}, {
            a: a
        })
    }),
    vq4Q: (function(e, t, n) {
        let a = (0, n("iJY0").a)({
            name: "newspaper-light-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20",
                frame: {
                    x: 0,
                    y: 0,
                    width: 20,
                    height: 20
                },
                inkBounds: {
                    x: 1.834961,
                    y: 2.668213,
                    width: 16.330078,
                    height: 14.663086
                },
                visualBounds: {
                    x: 1.834961,
                    y: 2.668213,
                    width: 16.330078,
                    height: 14.663086
                }
            },
            paint: {
                kind: "monochrome"
            },
            optical: {
                shape: "non-circular",
                bounds: {
                    x: 1.834961,
                    y: 2.668213,
                    width: 16.330078,
                    height: 14.663086
                },
                center: {
                    x: 10,
                    y: 9.999756
                },
                insets: {
                    top: 2.668213,
                    right: 1.834961,
                    bottom: 2.668701,
                    left: 1.834961
                },
                anchors: {
                    frame: {
                        x: 10,
                        y: 10
                    },
                    ink: {
                        x: 10,
                        y: 9.999756
                    },
                    foreground: {
                        x: 10,
                        y: 9.999756
                    }
                }
            },
            capabilities: ["icon"],
            body: '<path d="M14.166 12.6682C14.5332 12.6682 14.8309 12.9661 14.8311 13.3333C14.8311 13.7005 14.5333 13.9983 14.166 13.9983H5.83301C5.46591 13.9981 5.16797 13.7004 5.16797 13.3333C5.1681 12.9662 5.46599 12.6684 5.83301 12.6682H14.166Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 6.0022C9.34724 6.00237 9.83105 6.48695 9.83105 7.08423V9.58423C9.83062 10.1811 9.34697 10.6651 8.75 10.6653H6.25C5.65302 10.6651 5.16841 10.1811 5.16797 9.58423V7.08423C5.16797 6.48694 5.65275 6.00236 6.25 6.0022H8.75ZM6.49805 9.33521H8.50098V7.33228H6.49805V9.33521Z" fill="currentColor"/> <path d="M14.166 9.33521C14.5333 9.33521 14.8311 9.63297 14.8311 10.0002C14.8309 10.3674 14.5332 10.6653 14.166 10.6653H12.083C11.716 10.6651 11.4181 10.3673 11.418 10.0002C11.418 9.6331 11.7159 9.3354 12.083 9.33521H14.166Z" fill="currentColor"/> <path d="M14.166 6.00122C14.5332 6.00122 14.8309 6.2991 14.8311 6.66626C14.8311 7.03353 14.5333 7.3313 14.166 7.3313H12.083C11.7159 7.3311 11.418 7.03341 11.418 6.66626C11.4181 6.29922 11.716 6.00142 12.083 6.00122H14.166Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M15.167 2.66821C16.8227 2.66839 18.1649 4.01058 18.165 5.66626V14.3333C18.165 15.9891 16.8228 17.3311 15.167 17.3313H4.83301C3.17722 17.3311 1.83496 15.9891 1.83496 14.3333V5.66626C1.83514 4.01058 3.17733 2.66839 4.83301 2.66821H15.167ZM4.83301 3.99829C3.91187 3.99847 3.16521 4.74512 3.16504 5.66626V14.3333C3.16504 15.2545 3.91176 16.001 4.83301 16.0012H15.167C16.0882 16.001 16.835 15.2545 16.835 14.3333V5.66626C16.8348 4.74512 16.0881 3.99847 15.167 3.99829H4.83301Z" fill="currentColor"/>'
        });
        n.d(t, {}, {
            a: a
        })
    })
};