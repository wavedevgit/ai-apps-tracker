export const __rspack_esm_ids = [738474];
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
            e: () => s,
            f: () => h,
            g: () => p,
            h: () => l
        });
        var a = n("ASxG");
        let r = "openai/first-party-plugin-logging",
            s = "openai/logging/message";
        new WeakMap;
        let o = a.enum(["trace", "debug", "info", "warning", "error"]),
            i = a.object({
                component: a.string().min(1).max(200),
                level: o,
                message: a.string().max(2e4),
                metadata: a.record(a.string(), a.unknown()).optional()
            }),
            l = a.object({
                method: a.literal(s),
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
        let s = "openai/message",
            o = r.object({
                target: r.enum(["active", "new"]).optional(),
                send: r.boolean().optional()
            }).strict(),
            i = a.X.shape.params.unwrap().extend({
                role: r.literal("user"),
                content: r.array(a.g),
                _meta: a.X.shape.params.unwrap().shape._meta.unwrap().extend({
                    [s]: o.optional()
                }).optional()
            });
        n.d(t, {}, {
            a: s,
            b: o,
            c: i
        })
    }),
    OppN: (function(e, t, n) {
        var a = n("kSHG"),
            r = n("ASxG");
        let s = "openai/modelContext",
            o = r.string().min(1);
        r.object({
            [s]: r.object({
                updateId: o
            })
        }), r.union([r.object({
            content: r.array(a.g).optional(),
            structuredContent: r.record(r.string(), r.unknown()).optional(),
            updateId: o
        }), r.null()]), n.d(t, {}, {
            a: s
        })
    }),
    bn59: (function(e, t, n) {
        n.d(t, {
            a: () => F,
            ChatSeatAccessScreen: () => B
        });
        var a = n("ABep"),
            r = n("QosV"),
            s = n("iTtm"),
            o = n("zd8w"),
            i = n("oyxz"),
            l = n("jqIZ"),
            c = n("StMt"),
            d = n("OFP1"),
            u = n("kphc"),
            h = n("ygO2"),
            p = n("DVOM"),
            m = n("OWtl"),
            g = n("mBJV"),
            f = n("Wf1j"),
            v = n("ASxG"),
            y = n("fDv2"),
            b = n("rLEB"),
            x = n("Ietk"),
            C = n("twmu"),
            _ = n("EOo5"),
            w = n("Kwur"),
            I = n("udGC"),
            T = n("aTcy"),
            S = n("JNtf"),
            j = n("mUDD"),
            E = n("Ot7V"),
            A = n("SGsN"),
            P = n("DAA7"),
            M = n("yGJW"),
            k = n("GDNt");

        function R(e) {
            let t, n, l, c, d, u, p, v, y, k, R, G, B, z, F, D, L, H, W, U, q, K, V = (0, r.c)(70),
                {
                    account: Y,
                    accountId: Q,
                    userId: $,
                    onClose: Z,
                    onSwitchToWork: J
                } = e,
                X = (0, s.y)(m.a),
                ee = (0, f.a)(),
                {
                    email: et
                } = (0, _.a)(),
                [en, ea] = (0, o.useState)(),
                er = (0, o.useRef)(!0);
            V[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => (er.current = !0, () => {
                er.current = !1
            }), n = [], V[0] = t, V[1] = n) : (t = V[0], n = V[1]), (0, o.useEffect)(t, n);
            let es = "account-owner" === Y.account.account_user_role,
                eo = "account-admin" === Y.account.account_user_role,
                ei = !0 === Y.entitlement.has_active_subscription,
                el = (es || eo) && ei,
                ec = es || el;
            V[2] !== el || V[3] !== es ? (l = "CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_REQUEST_CHANGE", el ? l = "CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_UPDATE_DIRECTLY" : es && (l = "CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_GO_TO_WORKSPACE_AND_UPDATE"), V[2] = el, V[3] = es, V[4] = l) : l = V[4], V[5] !== Y.account.account_user_role || V[6] !== l || V[7] !== ei || V[8] !== X ? (c = (e, t) => {
                (0, M.a)(X, g.sd, {
                    actionType: e,
                    ctaType: void 0 !== t && t ? l : void 0,
                    userRole: Y.account.account_user_role ?? void 0,
                    hasPaidSubscription: ei
                })
            }, V[5] = Y.account.account_user_role, V[6] = l, V[7] = ei, V[8] = X, V[9] = c) : c = V[9];
            let ed = c;
            V[10] !== Z ? (d = () => {
                Z(), (0, E.f)({
                    href: new URL("/codex/cloud", T.h).toString(),
                    initiator: "open_in_browser_bridge"
                })
            }, V[10] = Z, V[11] = d) : d = V[11];
            let eu = d;
            V[12] !== Y.account.subscription_seat_pools_enabled || V[13] !== Q || V[14] !== eu || V[15] !== el || V[16] !== et || V[17] !== ee || V[18] !== es || V[19] !== ed || V[20] !== Z || V[21] !== J || V[22] !== en || V[23] !== X || V[24] !== $ ? (u = async () => {
                if ("requesting" !== en) {
                    if (ed("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_PRIMARY_CTA_CLICKED", !0), es && !el) {
                        let e = new URL("/admin/members", T.h);
                        e.searchParams.set("account_id", Q), et && e.searchParams.set("search", et);
                        let t = e.toString(),
                            n = (0, P.c)(X, t, Q),
                            a = null == n ? null : await n;
                        Z(), (0, E.f)({
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
                                    isExpectedError: O
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
                            (0, I.e)(X), await (0, x.g)("accounts-check"), await Promise.all([X.query.invalidate(C.b, Q), X.queryClient.invalidateQueries({
                                queryKey: ["accounts", "check"]
                            })]), er.current && Z()
                        } else {
                            if ((0, b.b)(X, Q), await w.Request.safePost("/accounts/{account_id}/invites/request", {
                                    parameters: {
                                        path: {
                                            account_id: Q
                                        }
                                    }
                                }), !er.current) return;
                            J ? (Z(), J()) : eu(), X.get(A.f).success(ee.formatMessage({
                                id: "UsageBasedWorkspaceAccessModal.accessRequestSubmittedToast",
                                defaultMessage: "Access request submitted",
                                description: "Success toast shown after requesting ChatGPT access from the modal"
                            }))
                        }
                    } catch (e) {
                        er.current && ea(N(e) ?? "error")
                    }
                }
            }, V[12] = Y.account.subscription_seat_pools_enabled, V[13] = Q, V[14] = eu, V[15] = el, V[16] = et, V[17] = ee, V[18] = es, V[19] = ed, V[20] = Z, V[21] = J, V[22] = en, V[23] = X, V[24] = $, V[25] = u) : u = V[25];
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
            } else if (eo) {
                let e;
                V[29] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(i.a, {
                    id: "UsageBasedWorkspaceAccessModal.chatWork.adminMessage",
                    defaultMessage: "You are assigned Work access only. Ask your workspace owner to buy ChatGPT seats, then update your seat type in Workspace settings.",
                    description: "Explanation for unpaid workspace admins who need an owner to buy ChatGPT seats"
                }), V[29] = e) : e = V[29], em = e
            }
            V[30] !== ed || V[31] !== Z ? (y = e => {
                e || (ed("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_CLOSED"), Z())
            }, V[30] = ed, V[31] = Z, V[32] = y) : y = V[32], V[33] !== eh ? (k = e => {
                e.preventDefault(), eh()
            }, V[33] = eh, V[34] = k) : k = V[34], V[35] === Symbol.for("react.memo_cache_sentinel") ? (R = (0, a.jsx)(S.d, {
                className: "heading-lg font-semibold",
                children: ep
            }), V[35] = R) : R = V[35], V[36] !== em ? (G = (0, a.jsxs)("div", {
                className: "flex w-full max-w-md flex-col gap-4",
                children: [R, (0, a.jsx)(S.c, {
                    className: "text-lg leading-6 text-secondary",
                    children: em
                })]
            }), V[36] = em, V[37] = G) : G = V[37];
            let eg = "requesting" === en,
                ef = "requesting" === en;
            return V[38] !== ec ? (B = ec ? (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.updateSeatButton",
                defaultMessage: "Update seat",
                description: "Updates the current user's seat to include ChatGPT"
            }) : (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.requestAccessButton",
                defaultMessage: "Request access",
                description: "Requests ChatGPT access from a workspace administrator"
            }), V[38] = ec, V[39] = B) : B = V[39], V[40] !== eg || V[41] !== ef || V[42] !== B ? (z = (0, a.jsx)(h.a, {
                autoFocus: !0,
                className: "w-full",
                size: "auth",
                type: "submit",
                loading: eg,
                disabled: ef,
                children: B
            }), V[40] = eg, V[41] = ef, V[42] = B, V[43] = z) : z = V[43], V[44] !== eu || V[45] !== ed || V[46] !== Z || V[47] !== J ? (F = () => {
                J ? (Z(), J()) : (ed("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_BACK_TO_CODEX_CLICKED"), eu())
            }, V[44] = eu, V[45] = ed, V[46] = Z, V[47] = J, V[48] = F) : F = V[48], V[49] !== J ? (D = J ? (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.chatWork.switchToWorkButton",
                defaultMessage: "Switch to Work",
                description: "Switches from the Chat access explanation to the available Work surface"
            }) : (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.backToCodexButton",
                defaultMessage: "Back to Codex",
                description: "Returns to Codex from the Chat access explanation"
            }), V[49] = J, V[50] = D) : D = V[50], V[51] !== F || V[52] !== D ? (L = (0, a.jsx)(h.a, {
                className: "w-full",
                color: "outlineGhost",
                size: "auth",
                onClick: F,
                children: D
            }), V[51] = F, V[52] = D, V[53] = L) : L = V[53], V[54] !== z || V[55] !== L ? (H = (0, a.jsxs)("div", {
                className: "flex w-full max-w-xs flex-col gap-3",
                children: [z, L]
            }), V[54] = z, V[55] = L, V[56] = H) : H = V[56], V[57] !== ee || V[58] !== en ? (W = null != en && "requesting" !== en ? (0, a.jsx)("p", {
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
            }) : null, V[57] = ee, V[58] = en, V[59] = W) : W = V[59], V[60] !== G || V[61] !== H || V[62] !== W ? (U = (0, a.jsxs)("div", {
                className: "flex flex-col items-center gap-8 p-10 text-center",
                children: [G, H, W]
            }), V[60] = G, V[61] = H, V[62] = W, V[63] = U) : U = V[63], V[64] !== U || V[65] !== k ? (q = (0, a.jsx)(j.b, {
                as: "form",
                className: "select-none",
                size: "viewport",
                variant: "chatgpt",
                onSubmit: k,
                children: U
            }), V[64] = U, V[65] = k, V[66] = q) : q = V[66], V[67] !== q || V[68] !== y ? (K = (0, a.jsx)(S.a, {
                open: !0,
                size: "wide",
                variant: "chatgpt",
                onOpenChange: y,
                children: q
            }), V[67] = q, V[68] = y, V[69] = K) : K = V[69], K
        }

        function O(e) {
            return null != N(e)
        }

        function N(e) {
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
        var G = n("pBDs");

        function B(e) {
            let t, n, o = (0, r.c)(9),
                {
                    modeToggle: i,
                    onSwitchToWork: c
                } = e,
                h = (0, s.y)(m.a),
                p = (0, s.z)(G.a),
                g = (0, s.z)(d.t),
                f = (0, l._)();
            if ("restricted" !== p.status) return null;
            let v = `${p.accountId}:${p.userId}`;
            return o[0] !== f || o[1] !== c || o[2] !== h || o[3] !== g.status ? (t = "allowed" === g.status ? c ?? (() => {
                (0, u.l)(h, "work"), f("/")
            }) : void 0, o[0] = f, o[1] = c, o[2] = h, o[3] = g.status, o[4] = t) : t = o[4], o[5] !== i || o[6] !== v || o[7] !== t ? (n = (0, a.jsx)(z, {
                modeToggle: i,
                onSwitchToWork: t
            }, v), o[5] = i, o[6] = v, o[7] = t, o[8] = n) : n = o[8], n
        }

        function z(e) {
            let t, n, l, c, d, u = (0, r.c)(13),
                {
                    modeToggle: m,
                    onSwitchToWork: g
                } = e,
                f = (0, s.z)(G.a),
                [v, y] = (0, o.useState)(!1);
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

        function F(e) {
            let t, n, o = (0, r.c)(4),
                {
                    children: i,
                    enabled: l
                } = e;
            o[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                name: "chatgpt.seat-access"
            }, o[0] = t) : t = o[0];
            let d = (0, s.x)(c.a, t);
            return l ? d.isLoading ? null : (o[1] !== d.isCapable || o[2] !== i ? (n = d.isCapable ? (0, a.jsx)(B, {}) : i, o[1] = d.isCapable, o[2] = i, o[3] = n) : n = o[3], n) : i
        }
    }),
    Pyg2: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("iTtm"),
            o = n("rjva"),
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
                    m = (0, s.y)(i.a),
                    g = (0, s.z)("home" === m.value.routeKind && l.a),
                    f = g ? "floating" : p,
                    v = !g && t.reserveContent,
                    y = !!g || t.showHeader;
                return u[4] !== h || u[5] !== t || u[6] !== f || u[7] !== v || u[8] !== y ? (d = (0, a.jsx)(o.a, {
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
            s = n("zd8w"),
            o = n("fddy"),
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
                    v = (0, s.useRef)(!1),
                    y = (0, s.useRef)(null);
                h[0] !== p ? (t = () => ({
                    name: p,
                    key: crypto.randomUUID(),
                    startedAtMs: performance.timeOrigin + performance.now()
                }), h[0] = p, h[1] = t) : t = h[1];
                let [b] = (0, s.useState)(t);
                return h[2] !== b ? (n = () => (v.current = !0, y.current = y.current ?? o.a.start(b.name, {}, b), y.current.mark("route_entered"), () => {
                    v.current = !1, queueMicrotask(() => {
                        v.current || y.current?.abort("navigation_away")
                    })
                }), l = [b], h[2] = b, h[3] = n, h[4] = l) : (n = h[3], l = h[4]), (0, s.useEffect)(n, l), h[5] !== f || h[6] !== m ? (c = () => {
                    !m && f && y.current?.fail("load_failed")
                }, d = [m, f], h[5] = f, h[6] = m, h[7] = c, h[8] = d) : (c = h[7], d = h[8]), (0, s.useEffect)(c, d), h[9] !== m ? (u = m ? (0, a.jsx)(i.a, {
                    requireVisibleAtPaint: !0,
                    onPaint: () => {
                        y.current?.mark("content_visible"), y.current?.end()
                    }
                }) : null, h[9] = m, h[10] = u) : u = h[10], u
            }
        })
    }),
    lZ4W: (function(e, t, n) {
        var a = n("iTtm"),
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
            let d = n(s.s, r.conversationId),
                u = d?.at(-1);
            return u === r.userMessageId || null != a && u === a && d?.includes(r.userMessageId) === !0
        });

        function c(e) {
            return e?.type === "single_advertiser_ad_unit" && "composer_pinned" === e.presentation && e.ad_cards?.length === 1 && "image_card_v2" === e.ad_cards[0].format
        }
        n.d(t, {}, {
            a: l,
            b: c
        })
    }),
    zpMv: (function(e, t, n) {
        var a = n("SZCv"),
            r = n.n(a),
            s = n("iTtm"),
            o = n("Ro2M"),
            i = n("OWtl"),
            l = n("OMIV"),
            c = n("dQRk"),
            d = n("QkVh");
        let u = (0, s.d)(i.a, (e, t) => {
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
                return 0 === r.length ? [] : (n(o.h, n(o.b)), r.flatMap(e => {
                    let {
                        automationId: t,
                        messageId: a
                    } = e, r = n(o.e, t).data?.automation;
                    if (null == r) return [];
                    let s = /^file-inline-(libfile[_-][^~]+)(?:~.*)?$/.exec(r.plan_file_id ?? "")?.[1];
                    return null == s ? [] : [{
                        automationId: t,
                        planType: r.plan_type ?? null,
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
                        planType: r,
                        messageId: s,
                        libraryFileId: o,
                        query: i
                    }
                    of n(u, e)) {
                    if (a.has(o)) continue;
                    let e = i.data;
                    e?.mime_type === "text/markdown" && "owned" === e.access_kind && a.set(o, {
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
                        messageId: s,
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
                } = t, a = n(h, e).filter(e => "language_learning" !== e.planType), r = n(c.p, e), s = r?.filter(e => "list" !== e.source && a.some(t => t.automationId === e.automationId)), o = s?.at(-1)?.messageId;
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
    Sd4O: (function(e, t, n) {
        var a = n("iTtm"),
            r = n("Ro2M"),
            s = n("OWtl"),
            o = n("OMIV"),
            i = n("dQRk");
        let l = (0, a.d)(s.a, (e, t) => {
                let {
                    get: n
                } = t, a = n(i.p, e), r = a?.at(-1)?.messageId;
                if (null == r) return null;
                let s = new Set(a?.filter(e => {
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
                return 1 === s.size ? [...s][0] ?? null : null
            }),
            c = (0, a.d)(s.a, (e, t) => {
                let {
                    get: n
                } = t;
                if (!n(o.d, "2840857813")) return null;
                let a = n(l, e);
                return null != a && n(r.e, a).data?.automation.plan_type === "language_learning" ? a : null
            }),
            d = (0, a.d)(s.a, (e, t) => {
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
            s = n("zd8w"),
            o = n("VnEZ");

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
                    [c] = (0, s.useState)(i);
                return n[0] !== c || n[1] !== l ? (t = (0, a.jsx)(o.a, {
                    value: c,
                    children: l
                }), n[0] = c, n[1] = l, n[2] = t) : t = n[2], t
            }
        })
    }),
    JPvk: (function(e, t, n) {
        n.d(t, {
            BusinessAgentConversationHeader: () => R,
            BusinessAgentHomeHero: () => O
        });
        var a = n("ABep"),
            r = n("QosV"),
            s = n("iTtm"),
            o = n("OWtl"),
            i = n("dQRk"),
            l = n("nUDt"),
            c = n("zd8w"),
            d = n("oyxz"),
            u = n("L6H2"),
            h = n("zKCW"),
            p = n("ygO2"),
            m = n("JNtf"),
            g = n("mUDD"),
            f = n("ZtSy"),
            v = n("HOLv"),
            y = n("mEbU"),
            b = n("RU3e"),
            x = n("UIU6"),
            C = n("Bbed"),
            _ = n("T1PX");
        let w = (0, C.a)(async () => {
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
                return (0, a.jsx)(S, {})
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
            let d = s.looseObject({
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
                } = t, [r, s] = (0, c.useState)(!1), [o] = (0, c.useState)(() => {
                    let e = structuredClone(d);
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
            errorFallback: (0, a.jsx)(S, {})
        });

        function I(e) {
            let t, n = (0, r.c)(2),
                s = (0, _.a)();
            return n[0] !== s ? (t = (0, a.jsx)("div", {
                "aria-hidden": !0,
                className: "pointer-events-none relative aspect-2/1 w-full shrink-0 overflow-hidden",
                children: s ? (0, a.jsx)(S, {}) : (0, a.jsx)(T, {})
            }), n[0] = s, n[1] = t) : t = n[1], t
        }

        function T(e) {
            let t, n, o, i = (0, r.c)(7),
                l = (0, c.useRef)(null),
                d = (0, y.a)(l),
                u = (0, s.z)(b.a),
                [h, p] = (0, c.useState)(!1);
            if (h) {
                let e;
                return i[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(S, {}), i[0] = e) : e = i[0], e
            }
            return i[1] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(S, {}), i[1] = t) : t = i[1], i[2] !== d || i[3] !== u ? (n = d && !0 === u ? (0, a.jsx)(w, {
                onError: () => p(!0)
            }) : null, i[2] = d, i[3] = u, i[4] = n) : n = i[4], i[5] !== n ? (o = (0, a.jsx)(x.a, {
                name: "BusinessAgentDisclosureHero",
                fallback: t,
                children: (0, a.jsx)("div", {
                    ref: l,
                    className: "absolute inset-0",
                    children: n
                })
            }), i[5] = n, i[6] = o) : o = i[6], o
        }

        function S(e) {
            let t, n = (0, r.c)(1);
            return n[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)("img", {
                className: "absolute inset-0 size-full object-cover",
                alt: "",
                draggable: !1,
                referrerPolicy: "no-referrer",
                src: "https://cdn.openai.com/chatgpt/clients/bazaar/business-agent-disclosure/2026-09-23/business-disclosure-static-ade5a622504d70d9.png"
            }), n[0] = t) : t = n[0], t
        }
        var j = {
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
            E = {
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

        function A(e) {
            let t, n, s, o, i, l = (0, r.c)(11),
                {
                    state: c
                } = e,
                h = "ready" === c.status ? c.context : c,
                p = h.businessName ?? null,
                m = h.logoUrl ?? null;
            return l[0] !== p || l[1] !== m ? (t = (0, a.jsx)(u.a, {
                alt: "",
                name: p,
                size: "md",
                src: m
            }), l[0] = p, l[1] = m, l[2] = t) : t = l[2], l[3] !== h.businessName ? (n = (0, a.jsx)("span", {
                className: "truncate text-sm font-semibold",
                children: (0, a.jsx)(k, {
                    businessName: h.businessName
                })
            }), l[3] = h.businessName, l[4] = n) : n = l[4], l[5] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, a.jsx)("span", {
                className: "truncate text-xs font-normal text-secondary",
                children: (0, a.jsx)(d.a, {
                    id: "chatgpt.ads.business_agent.thread_header.subtitle",
                    defaultMessage: "Business chat",
                    description: "Short subtitle beneath the business name in the header of a Business Agent conversation. It tells an end user that the custom GPT chat represents a business. Keep this compact enough to fit on one line; there are no placeholders or formatting."
                })
            }), l[5] = s) : s = l[5], l[6] !== n ? (o = (0, a.jsxs)("div", {
                className: "flex min-w-0 flex-col text-start",
                children: [n, s]
            }), l[6] = n, l[7] = o) : o = l[7], l[8] !== t || l[9] !== o ? (i = (0, a.jsxs)("div", {
                className: "flex min-w-0 items-center gap-2 select-none",
                children: [t, o]
            }), l[8] = t, l[9] = o, l[10] = i) : i = l[10], i
        }

        function P(e) {
            let t, n = (0, r.c)(14),
                {
                    state: s,
                    onStarterPromptSelect: o
                } = e,
                i = "ready" === s.status ? s.context : s;
            if (n[0] !== i.businessName || n[1] !== i.logoUrl || n[2] !== i.showConversationStarters || n[3] !== o || n[4] !== s.context || n[5] !== s.status) {
                let e, r, l, c = "ready" === s.status && i.showConversationStarters ? s.context.conversationStarters?.slice(0, 4) : void 0,
                    m = i.businessName ?? null,
                    g = i.logoUrl ?? null;
                n[7] !== m || n[8] !== g ? (e = (0, a.jsx)(u.a, {
                    alt: "",
                    name: m,
                    size: "lg",
                    src: g
                }), n[7] = m, n[8] = g, n[9] = e) : e = n[9], n[10] !== i.businessName ? (r = (0, a.jsx)("h1", {
                    className: "heading-xl font-normal text-default select-none",
                    children: (0, a.jsx)(k, {
                        businessName: i.businessName
                    })
                }), n[10] = i.businessName, n[11] = r) : r = n[11], n[12] !== s.status ? (l = "ready" !== s.status ? (0, a.jsx)(h.a, {
                    ariaLive: "polite",
                    role: "failed" === s.status ? "alert" : "status",
                    type: "failed" === s.status ? "error" : "normal",
                    content: "failed" === s.status ? (0, a.jsx)(d.a, {
                        id: "chatgptConversations.businessAgent.unavailable",
                        defaultMessage: "This Business Agent is unavailable. Please return to the ad and try again",
                        description: "Error on a Business Agent chat destination when creating its interaction fails; sending is unavailable and the user can retry from the original ad"
                    }) : (0, a.jsx)(d.a, {
                        id: "chatgptConversations.businessAgent.loading",
                        defaultMessage: "Opening Business Agent…",
                        description: "Loading status on a Business Agent chat destination while its interaction is being created"
                    })
                }) : null, n[12] = s.status, n[13] = l) : l = n[13], t = (0, a.jsxs)("div", {
                    className: "mx-auto flex w-[min(100%,var(--thread-content-max-width))] min-w-0 flex-col items-center gap-3 px-panel text-center",
                    children: [e, r, l, null != c && (c.length > 1 || 1 === c.length && "ready" === s.status && !0 === s.context.disablePrefill) ? (0, a.jsx)("div", {
                        className: "mt-3 flex flex-wrap justify-center gap-2 select-none",
                        children: c.map(e => (0, a.jsx)(p.a, {
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

        function M(e) {
            let t, n, s, o, i, l, u, h, y, b, x, C, _, w, T, S, A, P = (0, r.c)(29),
                {
                    context: M,
                    onPresented: k,
                    onContinue: R,
                    onDismiss: O
                } = e,
                [N, G] = (0, c.useState)(!0 === M.showDisclosureModal);
            P[0] !== M.privacyPolicyUrl ? (t = function(e) {
                if (null == e) return null;
                try {
                    let t = new URL(e);
                    return ("https:" === t.protocol || "http:" === t.protocol) && t.hostname ? t.href : null
                } catch {
                    return null
                }
            }(M.privacyPolicyUrl), P[0] = M.privacyPolicyUrl, P[1] = t) : t = P[1];
            let B = t;
            return P[2] !== O ? (n = e => {
                G(e), e || O?.()
            }, P[2] = O, P[3] = n) : n = P[3], P[4] !== k ? (s = {
                "data-theme": "light",
                onOpenAutoFocus: k
            }, P[4] = k, P[5] = s) : s = P[5], P[6] !== R ? (o = e => {
                e.preventDefault(), G(!1), R?.()
            }, P[6] = R, P[7] = o) : o = P[7], P[8] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(I, {}), P[8] = i) : i = P[8], P[9] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, a.jsx)(m.d, {
                className: "heading-lg text-center leading-7 font-semibold",
                children: (0, a.jsx)(d.a, {
                    id: "chatgptConversations.businessAgent.disclosureTitle",
                    defaultMessage: "About chatting with businesses",
                    description: "Title of the introductory dialog shown when a signed-in person opens an eligible Business Agent chat. It introduces what business AI chats offer and how chat privacy works. Keep it neutral and concise; there are no placeholders."
                })
            }), P[9] = l) : l = P[9], P[10] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, a.jsx)(v.a, {
                className: "shrink-0",
                asset: j
            }), P[10] = u) : u = P[10], P[11] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, a.jsx)("h3", {
                className: "text-base leading-relaxed font-semibold text-default",
                children: (0, a.jsx)(d.a, {
                    id: "chatgptConversations.businessAgent.disclosureQuestionsTitle",
                    defaultMessage: "Ask questions and compare options",
                    description: "Short heading in the introductory dialog shown when a signed-in person opens an eligible Business Agent chat. It explains that they can ask about the business and compare options before deciding. Keep the tone informative; there are no placeholders."
                })
            }), P[11] = h) : h = P[11], P[12] === Symbol.for("react.memo_cache_sentinel") ? (y = (0, a.jsxs)("div", {
                className: "flex items-start gap-3",
                children: [u, (0, a.jsxs)("div", {
                    className: "flex min-w-0 flex-col gap-0.5",
                    children: [h, (0, a.jsx)("p", {
                        className: "text-base leading-snug tracking-tight text-secondary",
                        children: (0, a.jsx)(d.a, {
                            id: "chatgptConversations.businessAgent.disclosureQuestionsBody",
                            defaultMessage: "Learn what the business offers and ask detailed follow-ups as you decide.",
                            description: "Body beneath the questions-and-comparison heading in the introductory dialog shown when a signed-in person opens an eligible Business Agent chat. It explains that they can learn about the business and ask further questions while deciding. Use a neutral tone; there are no placeholders."
                        })
                    })]
                })]
            }), P[12] = y) : y = P[12], P[13] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, a.jsx)(v.a, {
                className: "shrink-0",
                asset: E
            }), P[13] = b) : b = P[13], P[14] === Symbol.for("react.memo_cache_sentinel") ? (x = (0, a.jsx)("h3", {
                className: "text-base leading-relaxed font-semibold text-default",
                children: (0, a.jsx)(d.a, {
                    id: "chatgptConversations.businessAgent.disclosureUsageTrendsTitle",
                    defaultMessage: "Your chats remain private",
                    description: "Short privacy heading in the introductory dialog shown when a signed-in person opens an eligible Business Agent chat. Reassure the person that their conversations with business AI agents remain private from the businesses. There are no placeholders."
                })
            }), P[14] = x) : x = P[14], P[15] === Symbol.for("react.memo_cache_sentinel") ? (C = (0, a.jsxs)("div", {
                className: "flex flex-col gap-4",
                children: [l, (0, a.jsx)(m.c, {
                    asChild: !0,
                    children: (0, a.jsxs)("div", {
                        className: "flex flex-col gap-4",
                        children: [y, (0, a.jsxs)("div", {
                            className: "flex items-start gap-3",
                            children: [b, (0, a.jsxs)("div", {
                                className: "flex min-w-0 flex-col gap-0.5",
                                children: [x, (0, a.jsx)("p", {
                                    className: "text-base leading-snug tracking-tight text-secondary",
                                    children: (0, a.jsx)(d.a, {
                                        id: "chatgptConversations.businessAgent.disclosureUsageTrendsBody",
                                        defaultMessage: "Businesses can’t see your chats or your personal info — just overall usage trends to help improve their AI agent.",
                                        description: "Privacy explanation in the introductory dialog shown when a signed-in person opens an eligible Business Agent chat. The business cannot see the chat or personal information and only receives overall usage trends to improve its AI agent. Use a clear neutral tone; there are no placeholders or links."
                                    })
                                })]
                            })]
                        })]
                    })
                })]
            }), P[15] = C) : C = P[15], P[16] !== B ? (_ = null == B ? null : (0, a.jsx)(f.a, {
                href: B,
                initiator: "external_link",
                openTarget: "external-browser",
                children: (0, a.jsx)(d.a, {
                    id: "chatgptConversations.businessAgent.privacyPolicy",
                    defaultMessage: "Privacy policy",
                    description: "Link to the business-provided privacy policy in the introductory Business Agent dialog. Opens separately without accepting or dismissing the dialog. Keep the label short."
                })
            }), P[16] = B, P[17] = _) : _ = P[17], P[18] === Symbol.for("react.memo_cache_sentinel") ? (w = (0, a.jsx)("div", {
                className: "flex justify-center",
                children: (0, a.jsx)(p.a, {
                    color: "primary",
                    size: "dialogAction",
                    type: "submit",
                    children: (0, a.jsx)(d.a, {
                        id: "chatgptConversations.businessAgent.disclosureStartChat",
                        defaultMessage: "Start chatting",
                        description: "Short button label in the introductory dialog shown when a signed-in person opens an eligible Business Agent chat. Dismisses the information dialog so they can start chatting. It does not send a message or change a privacy setting; there are no placeholders."
                    })
                })
            }), P[18] = w) : w = P[18], P[19] !== _ ? (T = (0, a.jsxs)("div", {
                className: "flex flex-col gap-4 pb-10 select-none",
                children: [i, (0, a.jsxs)("div", {
                    className: "flex flex-col gap-6 px-8",
                    children: [C, _, w]
                })]
            }), P[19] = _, P[20] = T) : T = P[20], P[21] !== T || P[22] !== o ? (S = (0, a.jsx)(g.b, {
                as: "form",
                size: "viewport",
                variant: "chatgpt",
                onSubmit: o,
                children: T
            }), P[21] = T, P[22] = o, P[23] = S) : S = P[23], P[24] !== N || P[25] !== S || P[26] !== n || P[27] !== s ? (A = (0, a.jsx)(m.a, {
                open: N,
                onOpenChange: n,
                size: "beacon",
                variant: "promotional",
                contentProps: s,
                children: S
            }), P[24] = N, P[25] = S, P[26] = n, P[27] = s, P[28] = A) : A = P[28], A
        }

        function k(e) {
            let t, n = (0, r.c)(2),
                {
                    businessName: s
                } = e;
            return n[0] !== s ? (t = s?.trim() ? (0, a.jsx)(a.Fragment, {
                children: s
            }) : (0, a.jsx)(d.a, {
                id: "chatgpt.ads.business_agent.disclosure.fallback_name",
                defaultMessage: "Business Agent",
                description: "Fallback heading in the compact data-sharing disclosure shown at the top of every organic or sponsored Business Agent conversation. Use a short neutral title that fits on one line. This appears when the business has not supplied a display name."
            }), n[0] = s, n[1] = t) : t = n[1], t
        }

        function R(e) {
            let t, n = (0, r.c)(3),
                {
                    conversationId: o,
                    fallback: l
                } = e,
                c = (0, s.x)(i.t, o);
            return n[0] !== l || n[1] !== c ? (t = null == c ? l : (0, a.jsx)(A, {
                state: c
            }), n[0] = l, n[1] = c, n[2] = t) : t = n[2], t
        }

        function O(e) {
            let t, n, o, l = (0, r.c)(11),
                {
                    conversationId: c,
                    fallback: d,
                    onStarterPromptSelect: u
                } = e,
                h = (0, s.x)(i.t, c);
            return null == h ? d : (l[0] !== d || l[1] !== u || l[2] !== h ? (t = "ready" !== h.status || h.context.showConversationStarters ? (0, a.jsx)(P, {
                state: h,
                onStarterPromptSelect: u
            }) : d, l[0] = d, l[1] = u, l[2] = h, l[3] = t) : t = l[3], l[4] !== c || l[5] !== h.context || l[6] !== h.status ? (n = "ready" === h.status ? (0, a.jsx)(N, {
                context: h.context,
                conversationId: c
            }, h.context.interactionId) : null, l[4] = c, l[5] = h.context, l[6] = h.status, l[7] = n) : n = l[7], l[8] !== t || l[9] !== n ? (o = (0, a.jsxs)(a.Fragment, {
                children: [t, n]
            }), l[8] = t, l[9] = n, l[10] = o) : o = l[10], o)
        }

        function N(e) {
            let t, n, i, c = (0, r.c)(11),
                {
                    context: d,
                    conversationId: u
                } = e,
                h = (0, s.y)(o.a),
                p = (0, s.z)(l.b),
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
    nUDt: (function(e, t, n) {
        var a = n("iTtm"),
            r = n("bg18"),
            s = n("Cslg"),
            o = n("nlNF"),
            i = n("OWtl"),
            l = n("Kwur"),
            c = n("g2p6");
        let d = (0, a.u)(i.a, null, {
                onMount: e => {
                    let t = () => e(null);
                    return window.addEventListener("pagehide", t), () => window.removeEventListener("pagehide", t)
                }
            }),
            u = (0, a.v)(i.a, e => 0);
        n.d(t, {}, {
            a: function(e, t) {
                let n = e.get(d);
                n?.conversationId !== t || !n.ready || n.presented || e.get(s.k) !== n.userId || e.get(s.f) !== n.accountId || e.get(c.n) !== n.accountId || (e.set(d, {
                    ...n,
                    presented: !0
                }), e.set(u, n.userId, e => e + 1), null != n.disclosure && l.Request.safePost("/gizmos/business-agents/disclosures/viewed", {
                    expectedIdentity: {
                        accountId: n.accountId,
                        userId: n.userId
                    },
                    additionalHeaders: {
                        "ChatGPT-Account-ID": n.accountId,
                        [r._b]: n.accountId
                    },
                    requestBody: {
                        ..."advertiser_id" in n.disclosure ? {
                            advertiser_id: n.disclosure.advertiser_id
                        } : {},
                        version: n.disclosure.version
                    }
                }).catch(() => {}))
            },
            b: d,
            c: function(e, t) {
                e.get(d)?.conversationId === t && e.set(d, null)
            },
            d: function(e, t) {
                let n;
                if (e.set(d, null == t ? null : {
                        ...t,
                        ready: !1,
                        presented: !1
                    }), null == t) return;
                let a = e.get(o.c)?.key;
                e.when(r => {
                    let {
                        get: i
                    } = r, l = i(d), u = i(o.c);
                    if (null == n && u?.state?.initialChatGptConversationId === t.conversationId && (n = u.key), l?.conversationId !== t.conversationId) return !0;
                    let h = i(s.k) !== t.userId || i(s.f) !== t.accountId || i(c.n) !== t.accountId || u?.key !== a && u?.key !== n || null != n && u?.key !== n;
                    return h && e.set(d, null), h
                })
            },
            e: function(e, t, n, a) {
                let r = e.get(d);
                if (r?.conversationId !== t) return;
                let s = {
                        ...r,
                        disclosure: n?.version === 1 ? n : void 0,
                        ready: !0
                    },
                    o = Math.max(e.get(u, s.userId), n?.global_impression_count ?? 0);
                e.set(u, s.userId, o), e.set(d, o < a ? s : null)
            }
        })
    }),
    KvJW: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("iTtm"),
            o = n("zd8w"),
            i = n("oyxz"),
            l = n("WQca"),
            c = n("yGJW"),
            d = n("OWtl"),
            u = n("eShZ"),
            h = n("ZhoB");
        let p = new WeakSet;

        function m(e) {
            let t, n, a = (0, r.c)(5),
                {
                    error: s,
                    onShown: i
                } = e,
                l = (0, o.useEffectEvent)(i);
            return a[0] !== s || a[1] !== l ? (t = () => {
                if (null != s) {
                    if ((0, u.e)(s)) {
                        if (p.has(s)) return;
                        p.add(s)
                    }
                    l()
                }
            }, a[0] = s, a[1] = l, a[2] = t) : t = a[2], a[3] !== s ? (n = [s], a[3] = s, a[4] = n) : n = a[4], (0, o.useEffect)(t, n), null
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, o, p, g, f, v, y, b = (0, r.c)(24),
                    {
                        conversationId: x,
                        error: C,
                        loadError: _,
                        canRetry: w,
                        isWorkConversation: I,
                        children: T
                    } = e,
                    S = (0, s.y)(d.a);
                b[0] !== x || b[1] !== I || b[2] !== S ? (t = (e, t) => {
                    (0, h.e)(S.get(c.c).logProductEvent, {
                        conversationId: x,
                        error: e,
                        isWorkConversation: I,
                        canRetry: t
                    })
                }, b[0] = x, b[1] = I, b[2] = S, b[3] = t) : t = b[3];
                let j = t;
                b[4] !== w || b[5] !== _ || b[6] !== j ? (n = () => j(_, w), b[4] = w, b[5] = _, b[6] = j, b[7] = n) : n = b[7], b[8] !== _ || b[9] !== n ? (o = (0, a.jsx)(m, {
                    error: _,
                    onShown: n
                }), b[8] = _, b[9] = n, b[10] = o) : o = b[10], b[11] !== T || b[12] !== o ? (p = (0, a.jsxs)(a.Fragment, {
                    children: [o, T]
                }), b[11] = T, b[12] = o, b[13] = p) : p = b[13];
                let E = p;
                return b[14] !== C ? (g = C instanceof u.a && !(0, u.e)(C) && (403 === C.status || 404 === C.status), b[14] = C, b[15] = g) : g = b[15], b[16] !== C || b[17] !== j ? (f = () => j(C, !1), b[16] = C, b[17] = j, b[18] = f) : f = b[18], b[19] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, a.jsx)(i.a, {
                    id: "chatgptConversations.conversationInaccessible",
                    defaultMessage: "You don’t have access to this conversation. Make sure you’re logged in to the right account, or ask the conversation owner to send you a share link.",
                    description: "Info toast shown when a user opens a ChatGPT conversation that does not exist or that they cannot access. The user is returned to Home and can switch accounts or ask the owner for a share link."
                }), b[19] = v) : v = b[19], b[20] !== E || b[21] !== g || b[22] !== f ? (y = (0, a.jsxs)(a.Fragment, {
                    children: [null, (0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)(l.a, {
                            isUnavailable: g,
                            homePath: "/",
                            onUnavailable: f,
                            message: v,
                            children: E
                        })
                    })]
                }), b[20] = E, b[21] = g, b[22] = f, b[23] = y) : y = b[23], y
            }
        })
    }),
    eKlv: (function(e, t, n) {
        var a = n("Cslg"),
            r = n("X6Vn"),
            s = n("SGsN"),
            o = n("svjy"),
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

        function b(e, t) {
            let n = e.get(p.j, t);
            return null == n ? null : e.query.snapshot(h.chatGptConversationQueryById$, n).getData() ?? null
        }
        n.d(t, {}, {
            a: function(e, t) {
                let n = b(e, t);
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
                    e.get(s.f).danger(n || e.get(o.a).formatMessage(d.a.pinError), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.activeChat.pinError"
                        }
                    })
                })
            },
            renameActiveChatGptConversation: function(e, t, n) {
                let a = b(e, t);
                if (null == a || !(0, v.d)(e, a.conversation_id)) {
                    if (null != n) throw Error("Chat is unavailable for renaming.");
                    return
                }
                let s = e.get(p.D, t) ? e.get(p.cb, t) : a.title,
                    o = (0, m.a)(a.context_scopes) ? a.gizmo_id : void 0,
                    l = t => (0, v.R)({
                        scope: e,
                        conversationId: a.conversation_id,
                        previousTitle: s,
                        title: t
                    });
                if (null != n) {
                    if (null != o && e.get(g.f)?.projectId !== o) throw Error("Chat is locked.");
                    return l(n)
                }(0, r.f)(e, i.SidebarRenameDialog, {
                    initialValue: s ?? "",
                    draftKey: a.conversation_id,
                    protectedProjectId: o,
                    onSave: l,
                    requireNonEmpty: !0,
                    trimOnSave: !0
                })
            }
        })
    }),
    aLqR: (function(e, t, n) {
        var a = n("QosV"),
            r = n("iTtm"),
            s = n("Wf1j"),
            o = n("EFj1"),
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
                    C = (0, s.a)();
                return y[0] !== b || y[1] !== C || y[2] !== x ? (t = () => {
                    (0, h.c)(x, b).catch(() => {
                        x.get(i.f).danger(C.formatMessage(u.a.markUnreadError), {
                            errorAnalytics: {
                                toastId: "chatgptConversations.sidebar.markUnreadError"
                            }
                        })
                    })
                }, y[0] = b, y[1] = C, y[2] = x, y[3] = t) : t = y[3], (0, o.a)("markThreadUnread", t), y[4] !== b || y[5] !== x ? (n = () => void(0, d.renameActiveChatGptConversation)(x, b), p = [b, x], y[4] = b, y[5] = x, y[6] = n, y[7] = p) : (n = y[6], p = y[7]), (0, l.d)("rename-thread", n, p), y[8] !== b || y[9] !== x ? (m = () => (0, d.c)(x, b), g = [b, x], y[8] = b, y[9] = x, y[10] = m, y[11] = g) : (m = y[10], g = y[11]), (0, l.d)("toggle-thread-pin", m, g), y[12] !== b || y[13] !== x ? (f = () => (0, d.a)(x, b), v = [b, x], y[12] = b, y[13] = x, y[14] = f, y[15] = v) : (f = y[14], v = y[15]), (0, l.d)("archive-thread", f, v), null
            }
        })
    }),
    yVkU: (function(e, t, n) {
        n.d(t, {
            a: () => o$,
            ChatGptConversationPage: () => oY,
            ChatGptSharedConversationPage: () => oQ
        });
        var a = n("ABep"),
            r = n("QosV"),
            s = n("FS1B"),
            o = n("T0Rc"),
            i = n("on57"),
            l = n("IPUh"),
            c = n("xCr9"),
            d = n.n(c),
            u = n("HVBu"),
            h = n.n(u),
            p = n("iTtm"),
            m = n("bg18"),
            g = n("AuIy"),
            f = n("iqEK"),
            v = n("NRIv"),
            y = n("zd8w"),
            b = n("v7qY"),
            x = n("Wf1j"),
            C = n("oyxz"),
            _ = n("jqIZ"),
            w = n("bn59"),
            I = n("OY84"),
            T = n("Yxds"),
            S = n("StMt"),
            j = n("E8Sp"),
            E = n("z0li"),
            A = n("QcFS"),
            P = n("I7bK"),
            M = n("ZU27"),
            k = n("Pyg2"),
            R = n("ZIh4"),
            O = n("O0M0"),
            N = n("Cslg"),
            G = n("OFP1"),
            B = n("ItIk"),
            z = (n("AZW7"), n("jov5")),
            F = n("dQRk"),
            D = n("tSEg"),
            L = n("Ro2M"),
            H = n("bN4H"),
            W = n("TS05");

        function U(e) {
            let t, n, s, o, i = (0, r.c)(12),
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
            } = (0, p.x)(S.a, t);
            if (i[1] !== g || i[2] !== m?.sidebarArea || i[3] !== h) {
                let e = new URLSearchParams(h);
                n = e.get("automationId"), s = m?.sidebarArea === "scheduled" || !g || !n || "finalAgentTurnStart" !== e.get("messageId"), i[1] = g, i[2] = m?.sidebarArea, i[3] = h, i[4] = n, i[5] = s
            } else n = i[4], s = i[5];
            return s ? null : (i[6] !== n || i[7] !== l || i[8] !== c || i[9] !== u || i[10] !== d ? (o = (0, a.jsx)(q, {
                automationId: n,
                conversationId: l,
                entries: c,
                turnListApi: d
            }, u), i[6] = n, i[7] = l, i[8] = c, i[9] = u, i[10] = d, i[11] = o) : o = i[11], o)
        }

        function q(e) {
            let t, n, a, s, o = (0, r.c)(25),
                {
                    automationId: i,
                    conversationId: l,
                    entries: c,
                    turnListApi: d
                } = e,
                u = (0, p.y)(D.a),
                h = (0, _.Y)(),
                m = (0, p.z)(N.f),
                g = (0, p.x)(F.j, l),
                {
                    data: f
                } = (0, p.x)(L.e, i),
                v = (0, p.z)(z.a),
                b = (0, y.useRef)(null),
                x = (0, y.useRef)(null);
            o[0] !== c ? (t = c.findLast(Y), o[0] = c, o[1] = t) : t = o[1];
            let C = t;
            o[2] !== m || o[3] !== i || o[4] !== v || o[5] !== C || o[6] !== f || o[7] !== h || o[8] !== u || o[9] !== d ? (n = () => {
                null == f || null == m || (v || b.current === m || (b.current = m, (0, H.openAutomationSidePanelTab)({
                    scope: u,
                    automationId: i,
                    title: f.automation.title
                })), null != d && null != C && x.current !== m && (x.current = m, d.scrollToKey(C.turnKey, K, {
                    align: "top"
                }).then(() => {
                    u.set(W.a, {
                        locationKey: h.key,
                        accountId: m
                    }, !0)
                })))
            }, o[2] = m, o[3] = i, o[4] = v, o[5] = C, o[6] = f, o[7] = h, o[8] = u, o[9] = d, o[10] = n) : n = o[10];
            let w = (0, y.useEffectEvent)(n);
            o[11] !== m || o[12] !== l || o[13] !== f?.automation.conversation_id || o[14] !== w || o[15] !== g ? (a = () => {
                null != m && f?.automation.conversation_id === (g ?? l) && w()
            }, o[11] = m, o[12] = l, o[13] = f?.automation.conversation_id, o[14] = w, o[15] = g, o[16] = a) : a = o[16];
            let I = C?.turnKey,
                T = f?.automation.conversation_id;
            return o[17] !== m || o[18] !== v || o[19] !== l || o[20] !== g || o[21] !== I || o[22] !== T || o[23] !== d ? (s = [m, l, I, T, g, v, d], o[17] = m, o[18] = v, o[19] = l, o[20] = g, o[21] = I, o[22] = T, o[23] = d, o[24] = s) : s = o[24], (0, y.useEffect)(a, s), null
        }

        function K(e) {
            let t = e.querySelector("[data-chatgpt-agent-turn-start]");
            if (null == t) return null;
            let n = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                acceptNode: V
            });
            n.currentNode = t;
            let a = n.nextNode();
            return a instanceof HTMLElement ? a : null
        }

        function V(e) {
            return e instanceof HTMLElement && e.getClientRects().length > 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }

        function Y(e) {
            let {
                turn: t
            } = e;
            return t.items.some(Q)
        }

        function Q(e) {
            return "user-message" !== e.type
        }
        var $ = n("uxPT"),
            Z = n("nKJ6"),
            J = n("GMTh"),
            X = n("zpMv"),
            ee = n("PFzG"),
            et = n("KvJW"),
            en = n("TDcV"),
            ea = n("Xvoy"),
            er = n("SGsN"),
            es = n("WAdu"),
            eo = n("OWtl"),
            ei = n("hZax"),
            el = n("VnEZ");
        let ec = {
            $type: "protobuf_analytics_events.v1.ChatgptConversationPrintLifecycle"
        };
        var ed = n("jDEJ"),
            eu = n("yGJW");
        let eh = (0, p.u)(eo.a, null);

        function ep(e, t) {
            if (!e.get(eu.c).isChatgptBrowserReplacement || t.repeat || ((0, ed.a)() ? !t.metaKey || t.ctrlKey : !t.ctrlKey || t.metaKey) || t.altKey || t.shiftKey || "p" !== t.key.toLowerCase() || null != e.get(eh)) return;
            let n = eg("CHATGPT_CONVERSATION_PRINT_ENTRY_POINT_SHORTCUT");
            e.set(eh, n), ef(e, n, "CHATGPT_CONVERSATION_PRINT_STAGE_INTENT_OBSERVED")
        }
        async function em(e, t, n, a) {
            let r = e.get(eh);
            if (!e.get(eu.c).isChatgptBrowserReplacement || null == r) return a();
            let s = n => {
                ef(e, r, n, t)
            };
            s("CHATGPT_CONVERSATION_PRINT_STAGE_PREPARATION_STARTED");
            try {
                let e = await a();
                return n.aborted || s("CHATGPT_CONVERSATION_PRINT_STAGE_PREPARATION_SUCCEEDED"), e
            } catch (a) {
                throw n.aborted || s("CHATGPT_CONVERSATION_PRINT_STAGE_PREPARATION_FAILED"), "CHATGPT_CONVERSATION_PRINT_PREPARATION_HISTORY" !== t || e.get(eh)?.id !== r.id || e.get(eh)?.printing || e.set(eh, null), a
            }
        }

        function eg(e) {
            let t = performance.now();
            return {
                id: crypto.randomUUID(),
                entryPoint: e,
                startedAt: t,
                printing: !1
            }
        }

        function ef(e, t, n, a) {
            (0, eu.a)(e, ec, {
                attemptId: t.id,
                stage: n,
                entryPoint: t.entryPoint,
                elapsedMs: Math.max(0, performance.now() - t.startedAt),
                preparation: a
            })
        }
        var ev = n("CpsU"),
            ey = n.n(ev),
            eb = n("rKAs"),
            ex = n("SqqO"),
            eC = n("zHp1"),
            e_ = n("rvFo"),
            ew = n("taWv");

        function eI() {
            return Object.fromEntries(Array.from(document.images).flatMap(e => {
                if (!e.complete || 0 === e.naturalWidth) return [];
                let t = e.currentSrc || e.src;
                return [e.getAttribute("src"), e.src, t].flatMap(e => e ? [
                    [e, t]
                ] : [])
            }))
        }
        var eT = n("rxj0"),
            eS = n("gsAl"),
            ej = n("AO3k"),
            eE = n("iFmT"),
            eA = n("BGjJ"),
            eP = "printDocument-v_w5Ax";
        let eM = "https://chatgpt.com/download/?utm_source=chatgpt_web&utm_medium=print&utm_campaign=app_install";

        function ek(e) {
            let t, n, s, o, l, c, d, u, h, p, m, g, f = (0, r.c)(22),
                {
                    children: v,
                    title: y
                } = e,
                b = (0, x.a)(),
                {
                    getExperiment: _
                } = (0, ei.j)();
            if (!_("448755449").get("enabled", !1)) {
                let e, t;
                return f[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.b)(eP, "hidden w-full space-y-1.5 bg-surface text-default print:block"), f[0] = e) : e = f[0], f[1] !== v ? (t = (0, a.jsx)("div", {
                    className: e,
                    "data-conversation-print": "",
                    "data-theme": "light",
                    children: v
                }), f[1] = v, f[2] = t) : t = f[2], t
            }
            return f[3] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, i.b)(eP, "formattedPrintDocument-tP74Wl", "group/conversation-print hidden w-full bg-surface text-default print:block"), f[3] = t) : t = f[3], f[4] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(eE.a, {
                className: "h-6 w-auto shrink-0"
            }), f[4] = n) : n = f[4], f[5] !== y ? (s = (0, a.jsxs)("header", {
                className: "mb-6 flex items-center justify-between gap-6",
                children: [n, (0, a.jsx)("p", {
                    className: "min-w-0 text-end text-sm wrap-anywhere text-secondary",
                    children: y
                })]
            }), f[5] = y, f[6] = s) : s = f[6], f[7] !== v ? (o = (0, a.jsx)("div", {
                className: "transcript-XHYu34",
                children: v
            }), f[7] = v, f[8] = o) : o = f[8], f[9] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, i.b)("footer-QEzLbn", "flex items-center gap-3 rounded-2xl border border-default bg-surface-secondary p-2 text-default"), f[9] = l) : l = f[9], f[10] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)("div", {
                className: "flex size-10 shrink-0 items-center justify-center rounded-xl border border-default bg-surface",
                children: (0, a.jsx)(eA.a, {
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
            }), f[12] = u) : u = f[12], f[13] !== b ? (h = b.formatMessage({
                id: "chatgpt.print.downloadApp.qrCode",
                defaultMessage: "Download the ChatGPT app",
                description: "Accessible label for a QR code and link in a printed or PDF-saved conversation. The code and link open the ChatGPT app download page."
            }), f[13] = b, f[14] = h) : h = f[14], f[15] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, a.jsx)(C.a, {
                id: "chatgpt.print.downloadApp.fallback",
                defaultMessage: "Get the app",
                description: "Link to the ChatGPT app download page when its QR code cannot be generated in a printed conversation"
            }), f[15] = p) : p = f[15], f[16] !== h ? (m = (0, a.jsxs)("footer", {
                className: l,
                children: [c, u, (0, a.jsx)("a", {
                    className: "shrink-0",
                    href: `${eM}&utm_content=pdf_link`,
                    children: (0, a.jsx)(ej.a, {
                        value: `${eM}&utm_content=qr`,
                        size: "inline",
                        ariaLabel: h,
                        fallback: p
                    })
                })]
            }), f[16] = h, f[17] = m) : m = f[17], f[18] !== m || f[19] !== s || f[20] !== o ? (g = (0, a.jsxs)("div", {
                className: t,
                "data-conversation-print": "",
                "data-print-formatting": "",
                "data-theme": "light",
                children: [s, o, m]
            }), f[18] = m, f[19] = s, f[20] = o, f[21] = g) : g = f[21], g
        }

        function eR(e) {
            return {
                ...e,
                renderTelemetryMessages: void 0
            }
        }
        var eO = n("zn0A"),
            eN = n("OOaz"),
            eG = n("jfiJ"),
            eB = n("FGJH"),
            ez = n("nmN6");
        let eF = new WeakMap;

        function eD(e) {
            let t, n, s = (0, r.c)(6),
                o = (0, p.z)(en.a);
            return s[0] !== o || s[1] !== e.entries[0]?.conversationId ? (t = JSON.stringify([o, e.entries[0]?.conversationId]), s[0] = o, s[1] = e.entries[0]?.conversationId, s[2] = t) : t = s[2], s[3] !== e || s[4] !== t ? (n = (0, a.jsx)(eL, {
                ...e
            }, t), s[3] = e, s[4] = t, s[5] = n) : n = s[5], n
        }

        function eL(e) {
            let t, n, s, o, i, l, c = (0, r.c)(16),
                d = (0, p.y)(D.a),
                u = (0, p.z)(ea.a),
                [h, m] = (0, y.useState)(!1),
                g = (0, y.useRef)(null);
            c[0] !== d ? (t = (e, t) => {
                if (ep(d, e), !e.ctrlKey && !e.metaKey || e.altKey || e.shiftKey || "p" !== e.key.toLowerCase()) return;
                if (e.repeat) return void g.current?.onKeyDown(e, t);
                let n = eF.get(e);
                if (e.defaultPrevented && null == n) return;
                (0, b.flushSync)(() => m(!0));
                let a = n ?? g.current?.onKeyDown(e, t);
                null == a && e.defaultPrevented || Promise.resolve(a).then(() => eF.get(e)).finally(() => {
                    t.aborted || m(!1)
                })
            }, c[0] = d, c[1] = t) : t = c[1];
            let f = (0, y.useEffectEvent)(t);
            c[2] === Symbol.for("react.memo_cache_sentinel") ? (n = () => {
                (0, b.flushSync)(() => m(!0)), g.current?.onBeforePrint()
            }, c[2] = n) : n = c[2];
            let v = (0, y.useEffectEvent)(n);
            c[3] !== d ? (s = () => {
                d.set(eO.a, null), m(!1)
            }, c[3] = d, c[4] = s) : s = c[4];
            let x = (0, y.useEffectEvent)(s);
            return c[5] !== x || c[6] !== v || c[7] !== f || c[8] !== d ? (o = () => {
                let e, t, n = new AbortController,
                    a = (e = () => {
                        if (!d.get(eu.c).isChatgptBrowserReplacement) return;
                        let e = d.get(eh);
                        if (e?.printing) return;
                        let t = {
                            ...e ?? eg("CHATGPT_CONVERSATION_PRINT_ENTRY_POINT_UNOBSERVED"),
                            printing: !0
                        };
                        d.set(eh, t), ef(d, t, "CHATGPT_CONVERSATION_PRINT_STAGE_BEFORE_PRINT")
                    }, t = () => {
                        let e = d.get(eh);
                        d.get(eu.c).isChatgptBrowserReplacement && e?.printing && (ef(d, e, "CHATGPT_CONVERSATION_PRINT_STAGE_AFTER_PRINT"), d.set(eh, null))
                    }, window.addEventListener("beforeprint", e, !0), window.addEventListener("afterprint", t), () => {
                        window.removeEventListener("beforeprint", e, !0), window.removeEventListener("afterprint", t), d.set(eh, null)
                    }),
                    r = e => f(e, n.signal);
                return window.addEventListener("keydown", r, !0), window.addEventListener("beforeprint", v, !0), window.addEventListener("afterprint", x), () => {
                    n.abort(), window.removeEventListener("keydown", r, !0), window.removeEventListener("beforeprint", v, !0), window.removeEventListener("afterprint", x), d.set(eO.a, null), a()
                }
            }, c[5] = x, c[6] = v, c[7] = f, c[8] = d, c[9] = o) : o = c[9], c[10] !== d ? (i = [d], c[10] = d, c[11] = i) : i = c[11], (0, y.useEffect)(o, i), c[12] !== u || c[13] !== e || c[14] !== h ? (l = h || u ? (0, a.jsx)(eH, {
                ...e,
                ref: g,
                printing: u
            }) : null, c[12] = u, c[13] = e, c[14] = h, c[15] = l) : l = c[15], l
        }

        function eH(e) {
            let t, n, s, i, l = (0, r.c)(19),
                {
                    entries: c,
                    title: d,
                    TurnRowComponent: u,
                    printing: h,
                    ref: m
                } = e,
                g = (0, p.y)(D.a),
                f = (0, y.useContext)(O.a),
                v = (0, y.useContext)(es.a),
                {
                    getExperiment: x
                } = (0, ei.j)(),
                _ = x("448755449", {
                    disableExposureLog: !0
                }).get("enabled", !1);
            l[0] !== c[0]?.conversationId ? (t = c[0]?.conversationId ?? (0, eN.d)(""), l[0] = c[0]?.conversationId, l[1] = t) : t = l[1], l[2] !== f || l[3] !== t ? (n = {
                auth: f,
                conversationId: t
            }, l[2] = f, l[3] = t, l[4] = n) : n = l[4];
            let w = (0, p.x)(null != c[0] && eS.i, n),
                I = (0, p.x)(null == c[0] ? null : eT.d, c[0]?.conversationId ?? "") ?? !0,
                T = (0, y.useRef)(null),
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
                            let a = e.get(F.j, n.conversationId);
                            t = {
                                serverId: a,
                                userResolver: (0, ew.c)(void 0, void 0, void 0, e.get(F.R, n.conversationId) ?? void 0),
                                scopedResolver: (0, ew.c)(a ?? void 0)
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
                            void 0 === t.generatedResolver && (t.generatedResolver = e.get(ew.a, n.conversationId));
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
                                        for (let a of (0, eb.u)(t, e)) {
                                            if (r && (0, ex.d)(a.src)) continue;
                                            let e = a.searchResult?.isProxied && (a.previewSrc === a.searchResult.contentSrc || a.previewSrc === a.searchResult.originalSrc) ? a.src : a.previewSrc;
                                            o.push({
                                                conversationId: n.conversationId,
                                                src: a.src,
                                                previewSrc: null != e && r && (0, ex.d)(e) ? a.src : e
                                            })
                                        }
                            }
                            if (null == s) continue;
                            i.push(...l.contentReferences.flatMap((e, t) => (0, eb.u)(e, t).map(e => {
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
                        return null != t && (0, eC.h)(t) ? [{
                            src: t,
                            resolver: n
                        }] : []
                    });
                    return {
                        queryKey: ["chatgpt-print-assets", e.get(en.a), t[0]?.conversationId, a, r, o, c.map(e => {
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
                        staleTime: e_.b.FIVE_MINUTES,
                        refetchOnWindowFocus: !1,
                        retry: !1,
                        queryFn: t => {
                            let {
                                client: a,
                                signal: i,
                                queryKey: l
                            } = t;
                            return em(e, "CHATGPT_CONVERSATION_PRINT_PREPARATION_IMAGES", i, async () => {
                                let t = {
                                    ...a.getQueryData(l)?.imageSources
                                };
                                for (let e of ey()(c, 6)) i.throwIfAborted(), await Promise.all(e.map(async e => {
                                    let {
                                        src: n,
                                        resolver: r
                                    } = e, s = await (0, eC.a)(a, n, r);
                                    if (i.throwIfAborted(), null != s) {
                                        let e = new Image;
                                        e.referrerPolicy = "no-referrer", e.src = s, await e.decode(), t[n] = s
                                    }
                                }));
                                let d = new Map,
                                    u = o.flatMap(t => {
                                        let n = d.get(t.conversationId);
                                        return (null == n && (n = r || !e.get(eS.i, {
                                            auth: s,
                                            conversationId: t.conversationId
                                        }) && e.get(eT.d, t.conversationId), d.set(t.conversationId, n)), n && (0, ex.d)(t.src)) ? [] : [{
                                            ...t,
                                            previewSrc: n && null != t.previewSrc && (0, ex.d)(t.previewSrc) ? t.src : t.previewSrc
                                        }]
                                    }),
                                    h = n ? t : await async function(e, t, n) {
                                        if (0 === e.length) return t;
                                        let a = eI(),
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
                }(g, c, h, _, "restricted" === v || !w && I, f),
                {
                    data: j,
                    isSuccess: E,
                    isError: A,
                    refetch: P
                } = (0, o.a)(S);
            return l[5] !== S || l[6] !== j || l[7] !== _ || l[8] !== E || l[9] !== P || l[10] !== g ? (s = () => ({
                onKeyDown(e, t) {
                    if (!e.defaultPrevented && (!E || !j.complete) && (e.preventDefault(), !e.repeat && T.current !== t)) return T.current = t, P({
                        cancelRefetch: !1
                    }).then(() => {
                        t.aborted || window.print()
                    }).finally(() => {
                        T.current === t && (T.current = null)
                    })
                },
                onBeforePrint() {
                    if (_) {
                        let e = g.queryClient.getQueryData(S.queryKey),
                            t = {
                                ...eI(),
                                ...e?.imageSources
                            };
                        (0, b.flushSync)(() => g.set(eO.a, t))
                    }
                }
            }), l[5] = S, l[6] = j, l[7] = _, l[8] = E, l[9] = P, l[10] = g, l[11] = s) : s = l[11], (0, y.useImperativeHandle)(m, s), l[12] !== u || l[13] !== c || l[14] !== A || l[15] !== E || l[16] !== h || l[17] !== d ? (i = h ? (0, b.createPortal)((0, a.jsx)(ek, {
                title: d,
                children: (0, a.jsx)(el.a, {
                    value: null,
                    children: (0, a.jsx)(ez.a, {
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
                                        items: t.items.map(e => "chatgpt-reasoning-group" !== e.type ? eR(e) : {
                                            ...e,
                                            items: e.items.map(eR),
                                            activeReasoning: null == e.activeReasoning ? void 0 : eR(e.activeReasoning)
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

        function eW(e) {
            let t, n, a, s, i, l, c = (0, r.c)(22),
                {
                    conversationId: d
                } = e,
                u = (0, p.y)(eo.a),
                h = (0, x.a)(),
                m = (0, y.useRef)(null),
                g = (0, p.z)(en.a),
                f = (0, p.x)(F.j, d),
                v = (0, p.z)(eB.b);
            c[0] !== g || c[1] !== f ? (t = ["chatgpt-print-history", g, f], c[0] = g, c[1] = f, c[2] = t) : t = c[2], c[3] !== u || c[4] !== f ? (n = e => {
                let {
                    signal: t
                } = e;
                return em(u, "CHATGPT_CONVERSATION_PRINT_PREPARATION_HISTORY", t, async () => (null != f && await (0, eG.a)(u, f, t), !0))
            }, c[3] = u, c[4] = f, c[5] = n) : n = c[5], c[6] !== t || c[7] !== n ? (a = {
                queryKey: t,
                enabled: !1,
                staleTime: 0,
                retry: !1,
                refetchOnWindowFocus: !1,
                queryFn: n
            }, c[6] = t, c[7] = n, c[8] = a) : a = c[8];
            let {
                refetch: b
            } = (0, o.a)(a);
            c[9] !== g || c[10] !== d || c[11] !== h || c[12] !== v || c[13] !== b || c[14] !== u || c[15] !== f ? (s = (e, t) => {
                if (ep(u, e), e.defaultPrevented || null == f || 0 === v || u.get(eB.c, f)?.complete === !0 || !e.ctrlKey && !e.metaKey || e.altKey || e.shiftKey || "p" !== e.key.toLowerCase() || (e.preventDefault(), e.repeat)) return;
                if (m.current?.signal === t) return void eF.set(e, m.current.preparation);
                let n = b({
                    cancelRefetch: !1
                }).then(async e => {
                    if (!t.aborted && u.get(en.a) === g) {
                        if (e.isError) return void u.get(er.f).danger(h.formatMessage({
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
                            predicate: eK
                        }).map(eU)), t.aborted || u.get(en.a) !== g || window.print()
                    }
                }).finally(() => {
                    m.current?.signal === t && (m.current = null)
                });
                m.current = {
                    signal: t,
                    preparation: n
                }, eF.set(e, n)
            }, c[9] = g, c[10] = d, c[11] = h, c[12] = v, c[13] = b, c[14] = u, c[15] = f, c[16] = s) : s = c[16];
            let C = (0, y.useEffectEvent)(s);
            return c[17] !== C ? (i = () => {
                let e = new AbortController,
                    t = t => C(t, e.signal);
                return window.addEventListener("keydown", t, !0), () => {
                    e.abort(), window.removeEventListener("keydown", t, !0)
                }
            }, c[17] = C, c[18] = i) : i = c[18], c[19] !== g || c[20] !== f ? (l = [g, f], c[19] = g, c[20] = f, c[21] = l) : l = c[21], (0, y.useEffect)(i, l), null
        }

        function eU(e) {
            return e.fetch(void 0, {
                cancelRefetch: !1
            }).catch(eq)
        }

        function eq() {}

        function eK(e) {
            return e.getObserversCount() > 0
        }
        var eV = n("DrWu"),
            eY = n("x4uR"),
            eQ = n("hx97");

        function e$(e) {
            return "assistant" === e.author.role && e.metadata?.open_thread_summary === !0
        }
        var eZ = n("MrzV"),
            eJ = n("ygO2"),
            eX = n("gbRX");

        function e0(e) {
            let t, n, s = (0, r.c)(4),
                {
                    isFetching: o,
                    isSharedConversation: i,
                    onRetry: l
                } = e,
                c = (0, p.z)(!i && eX.a) || o;
            return s[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(C.a, {
                id: "chatgptConversations.preview.retry",
                defaultMessage: "Try again",
                description: "Retry loading a ChatGPT conversation after its history could not be loaded"
            }), s[0] = t) : t = s[0], s[1] !== l || s[2] !== c ? (n = (0, a.jsx)(eJ.a, {
                color: "ghost",
                disabled: c,
                onClick: l,
                children: t
            }), s[1] = l, s[2] = c, s[3] = n) : n = s[3], n
        }

        function e1(e) {
            let t, n, s, o = (0, r.c)(7),
                {
                    isFetching: i,
                    isSharedConversation: l,
                    onRetry: c
                } = e;
            return o[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(C.a, {
                id: "chatgptConversations.loadError",
                defaultMessage: "Could not load this ChatGPT conversation",
                description: "Error state when a ChatGPT conversation fetch fails"
            }), o[0] = t) : t = o[0], o[1] !== i || o[2] !== l || o[3] !== c ? (n = null != c ? (0, a.jsx)(e0, {
                isFetching: i,
                isSharedConversation: l,
                onRetry: c
            }) : null, o[1] = i, o[2] = l, o[3] = c, o[4] = n) : n = o[4], o[5] !== n ? (s = (0, a.jsxs)("div", {
                className: "rounded-xl border border-default bg-surface-secondary/92 p-4 text-sm text-default",
                children: [t, n]
            }), o[5] = n, o[6] = s) : s = o[6], s
        }
        var e2 = n("FfNP"),
            e3 = n("Bbed"),
            e4 = n("WVag");
        let e5 = (0, e3.a)(e2.loadEpicChartIndicator);

        function e6(e) {
            let t, n = (0, r.c)(3),
                {
                    conversationId: s
                } = e,
                o = (0, p.x)(e4.a, s),
                [i, l] = (0, y.useState)(!1);
            return i || null == o || l(!0), n[0] !== s || n[1] !== i ? (t = i ? (0, a.jsx)(e5, {
                conversationId: s
            }) : null, n[0] = s, n[1] = i, n[2] = t) : t = n[2], t
        }
        var e8 = n("AoaR"),
            e7 = n("Ow2S"),
            e9 = n("fDfx"),
            te = n("u4MG"),
            tt = n("Xslx"),
            tn = n("EEop"),
            ta = n("bxvp"),
            tr = n("VBQS"),
            ts = n("hsIu");
        let to = (0, p.d)(eo.a, (e, t) => {
            let {
                get: n
            } = t;
            if (null == e || !n(ta.c) || null == n(N.f) || null == n(N.k)) return null;
            let {
                data: a,
                isError: r
            } = n(ts.b);
            if (r || a?.project_id !== e) return null;
            let {
                data: s,
                isError: o
            } = n(tn.k, (0, tr.a)());
            return o ? null : (0, tr.b)(s)
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
            tb = n("l0fK"),
            tx = n("hkBU"),
            tC = n("cP1f"),
            t_ = n("UxN3"),
            tw = n("GKsW"),
            tI = n("yWTM"),
            tT = n("Z2JT"),
            tS = n("SkIz"),
            tj = n("aNqv"),
            tE = n("ibLK"),
            tA = n("T1PX"),
            tP = n("Fjd0"),
            tM = n("VPBa"),
            tk = n("PWXi"),
            tR = n("zOE4"),
            tO = n("Fm9E"),
            tN = n("Xc94"),
            tG = n("HnT3"),
            tB = n("QSwz"),
            tz = n("ze43"),
            tF = n("KXCj"),
            tD = n("e1xH"),
            tL = n("pAFY");
        n("kErH");
        var tH = n("dJBt"),
            tW = n("FR8U"),
            tU = n("xqnZ"),
            tq = n("UMxD"),
            tK = n("VV6Z"),
            tV = n("JhDO"),
            tY = n("Mbqw"),
            tQ = n("kl6F"),
            t$ = n("kfGJ"),
            tZ = n("khOd"),
            tJ = n("RZBv"),
            tX = n("yzQ9"),
            t0 = n("OMIV"),
            t1 = n("JCJj"),
            t2 = n("KkZX"),
            t3 = n("uYx2"),
            t4 = n("Gjet"),
            t5 = n("SBcL"),
            t6 = n("ftSl"),
            t8 = n("BdYu"),
            t7 = n("Nyub"),
            t9 = n("jZDY"),
            ne = n("HgLj"),
            nt = n("Bc5r"),
            nn = n("bIvi"),
            na = n("Elta"),
            nr = n("eW0T"),
            ns = n("hOYb"),
            no = n("eShZ"),
            ni = n("qqut"),
            nl = n("CsbC"),
            nc = n("tCyZ"),
            nd = n("JPvk"),
            nu = n("GgLN"),
            nh = n("KdfG"),
            np = n("AOHi"),
            nm = n("iRMi"),
            ng = n("U2UX"),
            nf = n("gbrq"),
            nv = n("K33Q"),
            ny = n("mv4d"),
            nb = n("w7Qu"),
            nx = n("dt5v"),
            nC = n("bWX0"),
            n_ = n("smHt"),
            nw = n("aoTb"),
            nI = n("pqpL"),
            nT = n("sLcB"),
            nS = n("XcRr"),
            nj = n("dk3M"),
            nE = n("WFY2"),
            nA = n("vldH"),
            nP = n("ISgP"),
            nM = n("t2JB"),
            nk = n("DIH2"),
            nR = n("aFoA"),
            nO = n("H8lk"),
            nN = n("f2PP"),
            nG = n("S95W");
        let nB = (0, p.v)(eo.a, e => null);
        var nz = n("DM5G"),
            nF = n("gJe8"),
            nD = n("d2rV"),
            nL = n("Vg3R"),
            nH = n("aLqR"),
            nW = n("VlIB"),
            nU = n("ASxG"),
            nq = n("wD9O"),
            nK = n("lsfk"),
            nV = n("IObw"),
            nY = n("BOYb"),
            nQ = n("kQNh"),
            n$ = n.n(nQ),
            nZ = n("NkEl"),
            nJ = n("FW69"),
            nX = "highlight-x7OnzP",
            n0 = "safari-wcvuzB",
            n1 = "block-t7sxyD";
        let n2 = "chatgpt-search-result",
            n3 = "script, style, textarea, input, select, [hidden], [aria-hidden='true'], [data-thread-find-skip]";

        function* n4(e, t) {
            let n = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_TEXT, {
                    acceptNode: e => e.parentElement?.closest(n3) == null ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
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
            let s = RegExp(t.split(/\n+/u).map(n$()).join("\\n*"), "g");
            for (let n = s.exec(r); null != n && n.index < r.length; n = s.exec(r)) {
                let r = n.index;
                s.lastIndex = r + 1;
                let o = r + n[0].length,
                    i = a.find(e => e.end > r),
                    l = a.findLast(e => e.start < o);
                if (null == i || null == l) continue;
                let c = e.ownerDocument.createRange();
                c.setStart(i.node, r - i.start), c.setEnd(l.node, o - l.start), n5(c) && ((0, nJ.a)(c) ?? c.toString()).trim() === t && (yield c)
            }
        }

        function n5(e) {
            return Array.from(e.getClientRects()).some(e => e.width > 0 && e.height > 0) && null != e.startContainer.parentElement && "hidden" !== getComputedStyle(e.startContainer.parentElement).visibility
        }
        let n6 = nU.object({
            chatGptSearchNavigation: nU.object({
                key: nU.string(),
                messageId: nU.string()
            })
        });

        function n8(e) {
            let t, n, a, s, o, i, l, c, d, u, h, m, g = (0, r.c)(48),
                {
                    conversationId: f,
                    entries: v,
                    isConversationFetching: b,
                    turnListApi: x
                } = e,
                C = (0, p.y)(eo.a),
                w = (0, p.x)(F.r, f),
                I = (0, nK.b)(),
                T = (0, nq.c)();
            g[0] !== I || g[1] !== T ? (t = e => {
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
                            left: (0, nq.b)(a.left + a.width / 2 - r.left - r.width / 2, n),
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
                        h = (0, nq.b)(o.height, n),
                        p = (0, nq.b)(o.top - i.top, n) - c + Math.min(h, u) / 2 - u / 2;
                    t.scrollToDistanceFromBottomPx(t.getLastScrollDistanceFromBottomPx() - p, "instant", "user")
                }(e, I, T)
            }, g[0] = I, g[1] = T, g[2] = t) : t = g[2];
            let S = (0, y.useEffectEvent)(t),
                j = (0, _.Y)(),
                E = (0, _._)(),
                A = new URLSearchParams(j.search),
                P = A.get("messageId") ?? A.get("message"),
                M = n6.safeParse(j.state).data?.chatGptSearchNavigation,
                k = P ?? M?.messageId,
                R = A.get("selectedTextQuery") ?? "",
                O = (0, p.x)(F.L, f),
                N = !R || null != k && null != O && (O[k]?.message != null || Object.values(O).some(e => e.message?.id === k)),
                G = R || A.get("historySearchQuery") || "",
                B = JSON.stringify([f, null != P ? j.key : M?.key ?? j.key, k]);
            g[3] !== B ? (n = {
                key: B,
                handled: !1,
                positioned: !1
            }, g[3] = B, g[4] = n) : n = g[4];
            let z = (0, y.useRef)(n),
                D = (0, y.useEffectEvent)(e => {
                    z.current.positioned = !0;
                    let t = G.trim().length > 0 ? function(e, t, n) {
                        let a, r, s, o, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "terms",
                            l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                            c = "phrase" === i ? t.trim() : null,
                            d = [...new Set(t.trim().toLowerCase().normalize("NFC").split(/\s+/).map(e => e.replace(/^[^\p{Letter}\p{Number}]+|[^\p{Letter}\p{Number}]+$/gu, "")).filter(e => e.length > 0))],
                            u = new TextEncoder,
                            h = d.filter(e => !/^\p{Letter}+$/u.test(e) || u.encode(e.normalize("NFKD").replace(/\p{Mark}/gu, "")).byteLength >= 3),
                            p = h.length > 0 ? h : d;
                        if (c?.length === 0 || null == c && 0 === p.length) return () => {};
                        let m = new RegExp(null == c ? p.toSorted((e, t) => t.length - e.length).map(n$()).join("|") : n$()(c), null == c ? "giu" : "gu"),
                            g = !1,
                            f = performance.now(),
                            v = !1,
                            y = new WeakSet,
                            b = new Set,
                            x = new MutationObserver(_);

                        function C() {
                            for (let t of (g = !0, x.disconnect(), clearTimeout(r), null != s && cancelAnimationFrame(s), null != a && CSS.highlights.get(n2) === a && CSS.highlights.delete(n2), e.classList.remove(nX, n0), b)) t.classList.remove(nX, n1)
                        }

                        function _() {
                            g || null != r || null != s || (r = setTimeout(() => {
                                r = void 0, s = requestAnimationFrame(() => {
                                    s = void 0, w()
                                })
                            }, 50))
                        }

                        function w() {
                            let t;
                            if (g || !e.isConnected || null != s) return;
                            let d = performance.now() - f;
                            if (d < 4e3 && null != e.querySelector("[data-search-result-pending]")) return void _();
                            let u = (0, nZ.a)(e);
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
                                s = requestAnimationFrame(() => {
                                    s = requestAnimationFrame(() => {
                                        s = void 0, w()
                                    })
                                });
                                return
                            }
                            let I = [];
                            if (null != c) {
                                let t = e.querySelector('[data-markdown-text-style="assistant-message"]') ?? e,
                                    n = 0;
                                for (let e of n4(t, c))
                                    if (!(n++ < l)) {
                                        I.push(e);
                                        break
                                    }
                            } else {
                                let t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_TEXT, {
                                    acceptNode: e => e.parentElement?.closest(n3) != null || u.some(t => {
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
                                        a.setStart(n, t.index), a.setEnd(n, t.index + t[0].length), n5(a) && I.push(a)
                                    }
                            }
                            let T = h.flatMap(e => {
                                let {
                                    element: t,
                                    target: n
                                } = e, a = t.getBoundingClientRect(), r = I.some(e => t.contains(e.startContainer));
                                return "terms" === i && a.width > 0 && a.height > 0 && ("block" === n.highlight || "auto" === n.highlight && !r) ? [t] : []
                            });
                            if (0 === I.length && 0 === T.length) {
                                if (d < 800) return void _();
                                T.push(e)
                            }
                            let S = 0,
                                j = 0;
                            for (let e of [...I, ...T]) {
                                let n = e instanceof Range ? e.getClientRects()[0] : e.getBoundingClientRect(),
                                    a = n?.top ?? 0,
                                    r = n?.left ?? 0;
                                (null == t || 0 > (a - S || r - j)) && (t = e, S = a, j = r)
                            }
                            t = t ?? e, v && n?.(t);
                            let E = t instanceof Range ? t.getClientRects()[0] : t.getBoundingClientRect(),
                                A = [E?.top, E?.left, E?.width, E?.height, e.scrollHeight].join(":");
                            if (d < 4e3 && A !== o) {
                                o = A, _();
                                return
                            }
                            if (!v) {
                                v = !0, o = void 0, n?.(t), _();
                                return
                            }
                            for (let t of (x.disconnect(), clearTimeout(r), "u" > typeof Highlight && null != CSS.highlights ? (a = new Highlight(...I), CSS.highlights.set(n2, a)) : I.length > 0 && T.push(e), e.classList.add(nX), (0, nY.e)() && e.classList.add(n0), T)) t.classList.add(nX, n1), b.add(t);
                            r = setTimeout(C, 3600)
                        }
                        return x.observe(e, {
                            childList: !0,
                            characterData: !0,
                            attributes: !0,
                            subtree: !0
                        }), w(), C
                    }(e, G, S, R ? "phrase" : "terms", Number(A.get("selectedTextOccurrence"))) : void 0;
                    return null != P && (A.delete("messageId"), A.delete("message"), A.delete("historySearchQuery"), A.delete("selectedTextQuery"), A.delete("selectedTextOccurrence"), E({
                        pathname: j.pathname,
                        search: A.toString(),
                        hash: j.hash
                    }, {
                        replace: !0,
                        preventScrollReset: !0,
                        state: {
                            ...j.state,
                            chatGptSearchNavigation: {
                                key: j.key,
                                messageId: P
                            }
                        }
                    })), t
                });
            g[5] !== f || g[6] !== b || g[7] !== k || g[8] !== B || g[9] !== C || g[10] !== N ? (a = () => {
                if (z.current.key !== B && (z.current = {
                        key: B,
                        handled: !1,
                        positioned: !1
                    }), null != k && !b && N) return C.watch(e => {
                    !z.current.handled && (0, F.Ob)(e, f, k) && (z.current.handled = !0)
                })
            }, s = [f, b, k, B, C, N], g[5] = f, g[6] = b, g[7] = k, g[8] = B, g[9] = C, g[10] = N, g[11] = a, g[12] = s) : (a = g[11], s = g[12]), (0, y.useLayoutEffect)(a, s), g[13] !== v || g[14] !== k ? (o = null == k ? void 0 : v.find(e => {
                let {
                    turn: t
                } = e;
                return t.messageIds.includes(k)
            }), g[13] = v, g[14] = k, g[15] = o) : o = g[15];
            let L = o;
            g[16] !== j || g[17] !== E || g[18] !== P || g[19] !== M ? (i = () => {
                null == P && null != M && E(j, {
                    replace: !0,
                    preventScrollReset: !0,
                    state: {
                        ...j.state,
                        chatGptSearchNavigation: void 0
                    }
                })
            }, g[16] = j, g[17] = E, g[18] = P, g[19] = M, g[20] = i) : i = g[20];
            let H = (0, y.useEffectEvent)(i);
            if (g[21] !== H || g[22] !== w || g[23] !== b || g[24] !== L ? (l = () => {
                    !z.current.positioned || null != L || b || w || H()
                }, g[21] = H, g[22] = w, g[23] = b, g[24] = L, g[25] = l) : l = g[25], g[26] !== w || g[27] !== b || g[28] !== L ? (c = [w, b, L], g[26] = w, g[27] = b, g[28] = L, g[29] = c) : c = g[29], (0, y.useLayoutEffect)(l, c), g[30] !== k || g[31] !== L?.id || g[32] !== L?.turn.items || g[33] !== L?.turnKey) {
                let e = L?.turn.items.findIndex(e => "messageId" in e && e.messageId === k || "assistant-message" === e.type && null != k && e.sourceMessageIds?.includes(k)) ?? -1,
                    t = L?.turn.items[e],
                    n = L?.id;
                u = L?.turnKey, d = null == t || null == n ? void 0 : (0, nV.b)(t, e, n), g[30] = k, g[31] = L?.id, g[32] = L?.turn.items, g[33] = L?.turnKey, g[34] = d, g[35] = u
            } else d = g[34], u = g[35];
            let W = d;
            return g[36] !== D || g[37] !== k || g[38] !== u || g[39] !== x || g[40] !== W ? (h = () => {
                let e;
                if (null == u || null == x) return;
                let t = new AbortController,
                    n = null;
                return x.scrollToKey(u, e => n = (null == k ? null : e.querySelector(`[data-chatgpt-search-message-ids~="${CSS.escape(k)}"]`)) ?? (null == W ? null : e.querySelector(`[data-chatgpt-search-unit-key="${CSS.escape(W)}"]`)) ?? e, {
                    align: "top",
                    signal: t.signal
                }).then(() => {
                    !t.signal.aborted && n?.isConnected && (e = D(n))
                }), () => {
                    t.abort(), e?.()
                }
            }, g[36] = D, g[37] = k, g[38] = u, g[39] = x, g[40] = W, g[41] = h) : h = g[41], g[42] !== k || g[43] !== B || g[44] !== u || g[45] !== x || g[46] !== W ? (m = [B, k, u, x, W], g[42] = k, g[43] = B, g[44] = u, g[45] = x, g[46] = W, g[47] = m) : m = g[47], (0, y.useLayoutEffect)(h, m), null
        }
        var n7 = n("Nayr"),
            n9 = n("SZi8"),
            ae = n("lBzi"),
            at = n("Ga6O"),
            an = n("ESlL"),
            aa = n("vknh"),
            ar = n("Ppno"),
            as = n("lA5q"),
            ao = n("wDWo"),
            ai = n("IgxH"),
            al = n("iaTG"),
            ac = n("c3f5"),
            ad = n("XpUB"),
            au = n("xAIC"),
            ah = n("slpy"),
            ap = n("bf6R"),
            am = n("O666"),
            ag = n("OtLV"),
            af = n("tNq4"),
            av = n("Skaw"),
            ay = n("PYCG");

        function ab(e) {
            let t, n, s, o, i, l, c, d, u, h, m, g = (0, r.c)(50),
                {
                    conversationId: f,
                    projectId: v,
                    sharedProjectConversation: y,
                    isReady: b,
                    isRestricted: _,
                    isStreaming: w
                } = e,
                I = void 0 === v ? null : v,
                T = (0, p.y)(eo.a),
                S = (0, x.a)(),
                j = (0, p.z)(N.e),
                E = (0, p.z)(null == I ? null : av.a),
                A = (0, p.x)(F.j, f),
                {
                    data: P
                } = (0, p.x)(ae.chatGptConversationQueryById$, null == I ? null : A),
                M = (0, p.x)(nR.a, null == I ? null : A),
                k = (0, p.x)(F.A, M);
            g[0] !== M || g[1] !== P || g[2] !== k || g[3] !== I || g[4] !== A ? (t = null == P && null != M && null != A ? {
                id: A,
                gizmo_id: I,
                is_temporary_chat: k
            } : void 0, g[0] = M, g[1] = P, g[2] = k, g[3] = I, g[4] = A, g[5] = t) : t = g[5];
            let R = t,
                {
                    data: O
                } = (0, p.x)(eY.b, I),
                G = null == I ? null : (0, av.b)(E ?? null, y ?? P ?? R, O),
                B = (0, p.x)(af.b, f);
            g[6] !== S ? (n = S.formatMessage(ag.a.headerShare), g[6] = S, g[7] = n) : n = g[7];
            let z = n,
                D = (0, p.x)(null == y ? af.a : null, f),
                L = null != y || null != D,
                H = null;
            if (_ || G?.type === "unavailable") {
                let e;
                g[8] !== S ? (e = S.formatMessage(ag.a.shareDisabledRestricted), g[8] = S, g[9] = e) : e = g[9], H = e
            } else if (w && !L) {
                let e;
                g[10] !== S ? (e = S.formatMessage(ag.a.shareDisabledStreaming), g[10] = S, g[11] = e) : e = g[11], H = e
            } else if (!b || !L) {
                let e;
                g[12] !== S ? (e = S.formatMessage(ag.a.shareDisabledNotReady), g[12] = S, g[13] = e) : e = g[13], H = e
            }
            let W = null != H || B;
            g[14] !== W ? (s = {
                layer: "3087497570",
                parameter: "use_larger_icon",
                disableExposureLog: W
            }, g[14] = W, g[15] = s) : s = g[15];
            let U = (0, p.x)(am.b, s),
                q = "loaded" === j.status && "personal" === j.structure && (null == G || "snapshot" === G.type),
                K = null != H || B;
            g[16] !== K ? (o = {
                layer: "1823366130",
                parameter: "disable_hover",
                disableExposureLog: K
            }, g[16] = K, g[17] = o) : o = g[17];
            let V = (0, p.x)(q ? am.b : null, o);
            g[18] !== f || g[19] !== R || g[20] !== I || g[21] !== T || g[22] !== y ? (i = () => {
                let e = null == y ? T.get(af.c, f) : {
                    serverConversationId: y.conversation_id,
                    title: y.title,
                    currentNodeId: y.current_node ?? void 0
                };
                null != e && (0, ay.shareChatGptProjectConversation)(T, e.serverConversationId, e.title ?? "", I, e.currentNodeId, "CHATGPT_SHARE_FLOW_SOURCE_SENDER_HEADER", y ?? R)
            }, g[18] = f, g[19] = R, g[20] = I, g[21] = T, g[22] = y, g[23] = i) : i = g[23];
            let Y = i,
                Q = z;
            if ("loaded" === j.status && (null == G || "snapshot" === G.type)) {
                let e;
                g[24] !== j.structure || g[25] !== S ? (e = S.formatMessage("workspace" === j.structure ? ag.a.shareWorkspaceTooltip : ag.a.sharePublicTooltip), g[24] = j.structure, g[25] = S, g[26] = e) : e = g[26], Q = e
            }
            let $ = null == H && !B && !0 === V,
                Z = H ?? Q,
                J = null != H || B;
            return g[27] !== B || g[28] !== U ? (l = !B && (U ? (0, a.jsx)(ap.M, {}) : (0, a.jsx)(ap.L, {})), g[27] = B, g[28] = U, g[29] = l) : l = g[29], g[30] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)(C.a, {
                ...ag.a.headerShare
            }), g[30] = c) : c = g[30], g[31] !== Y || g[32] !== B || g[33] !== z || g[34] !== J || g[35] !== l ? (d = (0, a.jsxs)(eJ.a, {
                "aria-label": z,
                color: "toolbar",
                disabled: J,
                loading: B,
                radius: "large",
                size: "toolbar",
                onClick: Y,
                children: [l, c]
            }), g[31] = Y, g[32] = B, g[33] = z, g[34] = J, g[35] = l, g[36] = d) : d = g[36], g[37] !== Z || g[38] !== d || g[39] !== $ ? (u = (0, a.jsx)(ah.a, {
                disabled: $,
                content: Z,
                children: d
            }), g[37] = Z, g[38] = d, g[39] = $, g[40] = u) : u = g[40], g[41] !== f || g[42] !== B || g[43] !== I || g[44] !== H || g[45] !== y ? (h = !1, g[41] = f, g[42] = B, g[43] = I, g[44] = H, g[45] = y, g[46] = h) : h = g[46], g[47] !== u || g[48] !== h ? (m = (0, a.jsxs)(a.Fragment, {
                children: [u, h]
            }), g[47] = u, g[48] = h, g[49] = m) : m = g[49], m
        }(0, e3.a)(async () => () => null);
        var ax = n("B0Wx"),
            aC = n("if6d"),
            a_ = n("r2mP"),
            aw = n("O1PY"),
            aI = n("KALm"),
            aT = n("ZhoB"),
            aS = n("RADZ"),
            aj = n("rZzh"),
            aE = n("IZ3j");

        function aA(e) {
            let t, n, s, o, i, l, c, d, u = (0, r.c)(50),
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
            let b = (0, p.x)(v ? tG.c : null, t),
                x = v && null == b,
                _ = (0, p.x)(h.isMostRecentTurn ? aj.d : null, h.conversationId);
            u[2] !== h.timestampSeparatorAtMs ? (n = null == h.timestampSeparatorAtMs ? null : (0, a.jsx)(a_.b, {
                sentAtMs: h.timestampSeparatorAtMs
            }), u[2] = h.timestampSeparatorAtMs, u[3] = n) : n = u[3];
            let w = null != h.paragen;
            return u[4] !== h.branchingMessageId || u[5] !== h.browserConversationId || u[6] !== h.conversationId || u[7] !== h.enableCloudBrowserActivity || u[8] !== h.feedbackEnabled || u[9] !== h.hasLaterSitesPreview || u[10] !== h.id || u[11] !== h.isMostRecentTurn || u[12] !== h.isReadOnly || u[13] !== h.isTemporaryChat || u[14] !== h.isWorkConversation || u[15] !== h.onEditUserMessage || u[16] !== h.onFork || u[17] !== h.onRegenerateResponse || u[18] !== h.pendingSubmissionAttachments || u[19] !== h.readAloudEnabled || u[20] !== h.referenceImageSuggestionActionInput || u[21] !== h.safetyReview || u[22] !== h.shareEnabled || u[23] !== h.turn || u[24] !== f || u[25] !== x || u[26] !== w ? (s = (0, a.jsx)(aI.a, {
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
                trackShownImpressions: x,
                turn: h.turn,
                turnId: h.id
            }), u[4] = h.branchingMessageId, u[5] = h.browserConversationId, u[6] = h.conversationId, u[7] = h.enableCloudBrowserActivity, u[8] = h.feedbackEnabled, u[9] = h.hasLaterSitesPreview, u[10] = h.id, u[11] = h.isMostRecentTurn, u[12] = h.isReadOnly, u[13] = h.isTemporaryChat, u[14] = h.isWorkConversation, u[15] = h.onEditUserMessage, u[16] = h.onFork, u[17] = h.onRegenerateResponse, u[18] = h.pendingSubmissionAttachments, u[19] = h.readAloudEnabled, u[20] = h.referenceImageSuggestionActionInput, u[21] = h.safetyReview, u[22] = h.shareEnabled, u[23] = h.turn, u[24] = f, u[25] = x, u[26] = w, u[27] = s) : s = u[27], u[28] !== h.conversationId || u[29] !== h.isTemporaryChat || u[30] !== h.isWorkConversation || u[31] !== h.paragen || u[32] !== x ? (o = null == h.paragen ? null : (0, a.jsx)(aS.a, {
                comparison: h.paragen,
                conversationId: h.conversationId,
                hostId: t$.a,
                isTemporaryChat: h.isTemporaryChat,
                isWorkConversation: h.isWorkConversation,
                trackTaskViews: x
            }, h.paragen.promptMessageId), u[28] = h.conversationId, u[29] = h.isTemporaryChat, u[30] = h.isWorkConversation, u[31] = h.paragen, u[32] = x, u[33] = o) : o = u[33], u[34] !== h.showSharedConversationPrivateDisclaimer ? (i = h.showSharedConversationPrivateDisclaimer ? (0, a.jsxs)("div", {
                className: "my-2 flex items-center justify-center gap-2 text-size-chat text-secondary select-none",
                children: [(0, a.jsx)(t_.a, {
                    className: "shrink-0",
                    legacyIcon: aw.a,
                    asset16: aE.a,
                    legacyClassName: "icon-2xs",
                    "aria-hidden": !0
                }), (0, a.jsx)(C.a, {
                    id: "chatgptConversations.sharedConversation.privateMessagesDisclaimer",
                    defaultMessage: "Messages beyond this point are only visible to you",
                    description: "Privacy disclaimer shown between the original shared ChatGPT conversation and the reader's new private messages after they continue the shared conversation in Codex Desktop"
                })]
            }) : null, u[34] = h.showSharedConversationPrivateDisclaimer, u[35] = i) : i = u[35], u[36] !== h || u[37] !== _ || u[38] !== y || u[39] !== x ? (l = h.isMostRecentTurn ? (0, a.jsx)(an.a, {
                conversationId: h.conversationId,
                errorMessage: h.errorMessage,
                isTemporaryChat: h.isTemporaryChat,
                isWorkConversation: h.isWorkConversation,
                onRetry: null == h.onRegenerateResponse || null == _ ? void 0 : async e => {
                    let t = y.get(aj.d, h.conversationId);
                    if (t?.message.id == null || t.isRetryDisabled) return;
                    let n = y.get(F.T, h.conversationId)?.metadata?.errorCode;
                    (0, aT.d)(y.get(eu.c).logProductEvent, {
                        conversationId: y.get(F.j, h.conversationId),
                        messageId: t.message.id,
                        useDefaultModel: t.useDefaultModel,
                        errorCode: n
                    }), await h.onRegenerateResponse?.(t.message.id, {
                        sourceEventTimeStamp: e,
                        source: "model_cap_exceeded" === n ? "rate_limit_retry" : "error_retry",
                        model: (0, aj.e)(t.message, y.get(e7.t, h.conversationId)),
                        useDefaultModel: t.useDefaultModel,
                        forceUseSearch: t.forceUseSearch
                    })
                },
                showPendingLoadingMessage: h.showPendingLoadingMessage,
                showRequestUserInputStatus: h.showRequestUserInputStatus,
                trackShownImpressions: x,
                useDefaultModel: _?.useDefaultModel,
                isRetryDisabled: _?.isRetryDisabled
            }) : null, u[36] = h, u[37] = _, u[38] = y, u[39] = x, u[40] = l) : l = u[40], u[41] !== s || u[42] !== o || u[43] !== i || u[44] !== l ? (c = (0, a.jsxs)("div", {
                className: "flex flex-col gap-1.5",
                children: [s, o, i, l]
            }), u[41] = s, u[42] = o, u[43] = i, u[44] = l, u[45] = c) : c = u[45], u[46] !== h.id || u[47] !== c || u[48] !== n ? (d = (0, a.jsxs)("div", {
                "data-content-search-turn-key": h.id,
                children: [n, c]
            }), u[46] = h.id, u[47] = c, u[48] = n, u[49] = d) : d = u[49], d
        }

        function aP(e) {
            let t, n, s, o = (0, r.c)(8),
                {
                    entries: i,
                    historyLoader: l,
                    isVisible: c
                } = e,
                d = c ? l : null;
            return o[0] !== i ? (t = (0, a.jsx)(aC.a, {
                entries: i,
                preserveMeasuredTurnViewport: !0,
                RowComponent: aM
            }), o[0] = i, o[1] = t) : t = o[1], o[2] !== d || o[3] !== t ? (n = (0, a.jsx)(el.a, {
                value: null,
                children: (0, a.jsxs)(ez.a, {
                    value: null,
                    children: [d, t]
                })
            }), o[2] = d, o[3] = t, o[4] = n) : n = o[4], o[5] !== c || o[6] !== n ? (s = (0, a.jsx)(t4.a, {
                active: c,
                presentation: "panel",
                children: n
            }), o[5] = c, o[6] = n, o[7] = s) : s = o[7], s
        }

        function aM(e) {
            let t, n = (0, r.c)(2),
                {
                    entry: s
                } = e;
            return n[0] !== s ? (t = (0, a.jsx)(aA, {
                entry: {
                    ...s,
                    onEditUserMessage: void 0,
                    onFork: void 0,
                    readAloudEnabled: !1
                },
                renderMcpApps: !1,
                trackShownImpressions: !1
            }), n[0] = s, n[1] = t) : t = n[1], t
        }
        var ak = n("TRQ3"),
            aR = n("SZCv"),
            aO = n.n(aR),
            aN = n("ALWK"),
            aG = n("PC5z"),
            aB = n("lZ4W"),
            az = n("ihvi"),
            aF = n("aRto"),
            aD = n("WWSI"),
            aL = n("U3Gy"),
            aH = n("mKTJ");
        let aW = (0, p.c)(tQ.a, e => {
                let {
                    get: t
                } = e;
                return t(aN.m)
            }, {
                isEqual: aO()
            }),
            aU = (0, p.c)(tQ.a, e => {
                let {
                    get: t
                } = e;
                return t(aG.i)
            }, {
                isEqual: (e, t) => e.length === t.length && e.every((e, n) => e.messageId === t[n]?.messageId && e.turnId === t[n]?.turnId)
            });

        function aq(e) {
            let t, n, s, o, i = (0, r.c)(17),
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
                g = (0, p.z)(null == m ? null : aW),
                f = (0, p.z)(aU);
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
                b = (0, y.useContext)(aF.a),
                x = c.at(-1);
            if (b?.aboveComposer != null && null != x && v.push(x.turnKey), null != m && g?.size)
                for (let e of c) e.turn.items.flatMap(aY).some(e => "chatgpt-hosted-widget" === e.type && (0, aH.h)(e) && g.has((0, aH.e)(m, e.messageId))) && v.push(e.turnKey);
            let C = c.findLast(aK);
            h?.voiceAutoScrollEnabled && null != C && v.push(C.turnKey);
            let w = (0, p.x)(az.b, l),
                I = null == w ? void 0 : c.findLast(e => {
                    let {
                        turn: t
                    } = e;
                    return t.messageIds.includes(w)
                }),
                T = null == I ? void 0 : (0, az.a)(I.turn.items);
            (0, p.x)(aB.a, null == T ? null : {
                conversationId: l,
                userMessageId: T,
                steeredPromptId: I === x ? w : void 0
            }) && null != I && v.push(I.turnKey);
            let S = (0, p.x)(aL.b, l);
            i[2] !== l || i[3] !== c || i[4] !== S ? (n = (0, aD.a)(c, S, l), i[2] = l, i[3] = c, i[4] = S, i[5] = n) : n = i[5];
            let j = h?.getHeightPx,
                E = h?.voiceAutoScrollEnabled ? C?.turnKey : void 0,
                A = h?.onTurnLayoutReady;
            return i[6] !== h ? (s = e => {
                let {
                    heightDeltaPx: t
                } = e;
                h?.consumeGrowth(t ?? 0)
            }, i[6] = h, i[7] = s) : s = i[7], i[8] !== d || i[9] !== u || i[10] !== v || i[11] !== n || i[12] !== j || i[13] !== E || i[14] !== A || i[15] !== s ? (o = (0, a.jsx)(aC.a, {
                entries: n,
                getBottomScrollPaddingPx: j,
                layoutReadyTurnKey: E,
                onTurnLayoutReady: A,
                onLatestTurnHeightChange: s,
                onApiChange: d,
                onVisibleContentReady: u,
                preserveMeasuredTurnViewport: !0,
                retainedTurnKeys: v,
                RowComponent: aA
            }), i[8] = d, i[9] = u, i[10] = v, i[11] = n, i[12] = j, i[13] = E, i[14] = A, i[15] = s, i[16] = o) : o = i[16], o
        }

        function aK(e) {
            let {
                turn: t
            } = e;
            return t.items.some(aV)
        }

        function aV(e) {
            return "user-message" === e.type
        }

        function aY(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : [e]
        }
        var aQ = n("XAP6"),
            a$ = n("bzoy"),
            aZ = n("LYS1"),
            aJ = n("aZoZ"),
            aX = n("Gv8v"),
            a0 = n("EGpF"),
            a1 = n("mTPq"),
            a2 = n("Vcrm"),
            a3 = n("t0mU");
        let a4 = (0, p.d)(eo.a, (e, t) => {
            let {
                get: n
            } = t, a = n(F._, e);
            if (!(0, F.zb)(a)) return !0;
            let r = n(F.L, e),
                s = n(F.B, e);
            if (null == r || null == s) return !1;
            let o = r[s]?.message;
            if (null == o || aZ.a.has(o.author.role)) return !1;
            let i = n(F.x, e),
                l = (0, a1.c)({
                    mapping: r,
                    current_node: s
                }, n(F.Q, e)),
                c = n(F.bb, e);
            return "streaming" === a && "tpp" !== i && "flora" !== i && null != n(F.j, e) && !(0, a$.e)(n(F.o, e)) && null != c && !n(aQ.e).has(c) && null != a5(n, e).request.current && (null == l || l.info.num_variants_in_stream <= 1)
        });

        function a5(e, t) {
            let n = e(a0.a, t),
                a = e(F.j, t);
            return null == n.request.current && null != a ? e(a0.a, a) : n
        }
        var a6 = n("xtkq"),
            a8 = n("PG5R"),
            a7 = n("zrki"),
            a9 = n("iLYI"),
            re = n("Ipgw"),
            rt = n("wVX4");

        function rn(e) {
            let t, n, s, o, i = (0, r.c)(18),
                {
                    conversationId: l
                } = e,
                c = (0, p.y)(eo.a),
                d = (0, x.a)(),
                u = (0, t9.a)(),
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
            }, i[8] = _, i[9] = n) : n = i[9], i[10] !== g || i[11] !== l || i[12] !== u || i[13] !== m || i[14] !== h || i[15] !== f ? (s = [l, h, m, g, f, u], i[10] = g, i[11] = l, i[12] = u, i[13] = m, i[14] = h, i[15] = f, i[16] = s) : s = i[16], (0, y.useEffect)(n, s), u) ? (i[17] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, b.createPortal)((0, a.jsx)("span", {
                ref: v,
                className: "sr-only select-none",
                "aria-atomic": "true",
                "aria-live": "polite",
                role: "status"
            }), document.body), i[17] = o) : o = i[17], o) : null
        }
        var ra = n("n5iL"),
            rr = n("EFj1"),
            rs = n("iS3k"),
            ro = n("pDUk"),
            ri = n("GaCK"),
            rl = n("Dofq");
        let rc = (0, e3.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(229522), n.e(390575), n.e(33944)]).then(n.bind(n, "p8Fu"))).ChatGptThreadSummaryPanelBody, {
            fallback: (0, a.jsx)(rs.a.Content, {
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
            errorFallback: (0, a.jsx)(rs.a.Content, {
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

        function rd(e) {
            let t, n, s, o = (0, r.c)(6);
            o[0] !== e ? ({
                readData: n,
                ...t
            } = e, o[0] = e, o[1] = t, o[2] = n) : (t = o[1], n = o[2]);
            let i = (0, rs.b)(),
                [l, c] = (0, y.useState)(null);
            return i && l?.readData !== n && c({
                readData: n,
                data: n()
            }), o[3] !== l || o[4] !== t ? (s = null == l ? null : (0, a.jsx)(rc, {
                ...t,
                data: l.data
            }), o[3] = l, o[4] = t, o[5] = s) : s = o[5], s
        }

        function ru(e) {
            let t, n, s, o = (0, r.c)(15),
                {
                    conversationId: i,
                    composerActions: l,
                    readData: c,
                    display: d,
                    shouldBlockExternalEgress: u,
                    showSources: h
                } = e,
                m = void 0 === h || h,
                g = (0, p.y)(D.a),
                f = (0, ei.h)("2903661647"),
                v = f ? "dynamic-isle" : "summary";
            return o[0] !== g || o[1] !== v ? (t = {
                scope: g,
                layout: v
            }, o[0] = g, o[1] = v, o[2] = t) : t = o[2], o[3] !== l || o[4] !== i || o[5] !== f || o[6] !== c || o[7] !== u || o[8] !== m ? (n = (0, a.jsx)(rd, {
                conversationId: i,
                composerActions: l,
                readData: c,
                isUnifiedDynamicIsleEnabled: f,
                showSources: m,
                shouldBlockExternalEgress: u
            }, i), o[3] = l, o[4] = i, o[5] = f, o[6] = c, o[7] = u, o[8] = m, o[9] = n) : n = o[9], o[10] !== d.shouldHideInlineImmediately || o[11] !== d.shouldShow || o[12] !== t || o[13] !== n ? (s = (0, a.jsx)(rs.a.Root, {
                analytics: t,
                shouldHideInlineImmediately: d.shouldHideInlineImmediately,
                shouldShow: d.shouldShow,
                children: n
            }), o[10] = d.shouldHideInlineImmediately, o[11] = d.shouldShow, o[12] = t, o[13] = n, o[14] = s) : s = o[14], s
        }

        function rh(e) {
            let t, n, s, o, i, l = (0, r.c)(28),
                {
                    allowsThreadContentOverlap: c,
                    conversationId: d,
                    composerActions: u,
                    controlledState: h,
                    readData: m,
                    shouldBlockExternalEgress: g,
                    showSources: f
                } = e,
                v = void 0 === f || f,
                b = (0, p.y)(D.a),
                C = (0, y.useContext)(el.a),
                _ = (0, x.a)(),
                w = (0, ei.h)("2903661647"),
                I = (0, p.z)(null == h ? nf.N : null);
            l[0] !== h?.isOpen || l[1] !== I ? (t = h?.isOpen ?? (0, nf.z)(I, !0), l[0] = h?.isOpen, l[1] = I, l[2] = t) : t = l[2];
            let T = t,
                S = (0, p.z)(ri.b),
                j = h?.isOpen ?? S.isPopoverOpen,
                E = (0, p.x)(ra.f, "togglePinnedSummary");
            (0, t8.b)(b), l[3] !== h || l[4] !== b ? (n = () => {
                null != h ? h.onOpenChange(!h.isOpen) : (0, rl.b)(b)
            }, l[3] = h, l[4] = b, l[5] = n) : n = l[5];
            let P = n;
            (0, rr.a)("togglePinnedSummary", P);
            let M = c ? "browser:rounded-lg browser:bg-surface" : void 0;
            return l[6] !== u || l[7] !== C || l[8] !== h || l[9] !== d || l[10] !== _ || l[11] !== T || l[12] !== j || l[13] !== w || l[14] !== S.displayMode || l[15] !== m || l[16] !== b || l[17] !== E || l[18] !== g || l[19] !== v || l[20] !== P ? (s = "overlay" === S.displayMode ? (0, a.jsx)(ro.a, {
                isOpen: j,
                shouldPreventAutoFocus: h?.shouldPreventAutoFocus,
                onOpenChange: e => {
                    null != h ? h.onOpenChange(e) : b.set(ri.b, t => "overlay" !== t.displayMode || t.isPopoverOpen === e ? t : {
                        ...t,
                        isPopoverOpen: e
                    })
                },
                trigger: (0, a.jsx)(rs.a.HeaderButton, {
                    analytics: {
                        scope: b
                    },
                    label: _.formatMessage({
                        id: "chatgptConversations.summaryPanel.toggle",
                        defaultMessage: "Toggle summary",
                        description: "Button label for toggling the ChatGPT summary panel"
                    }),
                    pressed: j,
                    shortcut: E
                }),
                children: null != m ? (0, a.jsx)(el.a, {
                    value: C,
                    children: (0, a.jsx)(rs.a.PopoverContent, {
                        analytics: {
                            scope: b,
                            layout: w ? "dynamic-isle" : "summary"
                        },
                        children: (0, a.jsx)(rd, {
                            conversationId: d,
                            composerActions: u,
                            readData: m,
                            isUnifiedDynamicIsleEnabled: w,
                            showSources: v,
                            shouldBlockExternalEgress: g
                        }, d)
                    })
                }) : null
            }) : (0, a.jsx)(rs.a.HeaderButton, {
                analytics: {
                    scope: b
                },
                label: _.formatMessage({
                    id: "chatgptConversations.summaryPanel.togglePinned",
                    defaultMessage: "Toggle pinned summary",
                    description: "Button label for toggling whether the ChatGPT summary panel reserves layout space"
                }),
                pressed: T,
                shortcut: E,
                onClick: P
            }), l[6] = u, l[7] = C, l[8] = h, l[9] = d, l[10] = _, l[11] = T, l[12] = j, l[13] = w, l[14] = S.displayMode, l[15] = m, l[16] = b, l[17] = E, l[18] = g, l[19] = v, l[20] = P, l[21] = s) : s = l[21], l[22] !== M || l[23] !== s ? (o = (0, a.jsx)("div", {
                className: M,
                children: s
            }), l[22] = M, l[23] = s, l[24] = o) : o = l[24], l[25] !== c || l[26] !== o ? (i = (0, a.jsx)(A.a.HeaderAction, {
                actionId: "chatgpt-thread-summary-panel-toggle",
                align: "end",
                allowsThreadContentOverlap: c,
                order: 250,
                children: o
            }), l[25] = c, l[26] = o, l[27] = i) : i = l[27], i
        }
        var rp = n("JjRy"),
            rm = n.n(rp),
            rg = n("G4E3"),
            rf = n("KaH3"),
            rv = n("Yz3b"),
            ry = n("ghNX"),
            rb = n("KvVi"),
            rx = n("m250"),
            rC = n("Ng4B"),
            r_ = n("bTKb"),
            rw = n("dGDB"),
            rI = n("lIsV");

        function rT(e) {
            return e.flatMap(e => "chatgpt-reasoning-group" === e.type ? e.items : [e])
        }
        var rS = n("JlMc"),
            rj = n("TUMj"),
            rE = n("f6KK"),
            rA = n("JPXZ"),
            rP = n("zWHk");

        function rM(e) {
            let t, n, a, s, o, i, l, c = (0, r.c)(34),
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
            c[3] !== h.hash || c[4] !== h.pathname || c[5] !== h.search || c[6] !== h.state || c[7] !== g || c[8] !== p ? (a = () => {
                let e = new URLSearchParams(h.search);
                e.delete("prompt"), e.delete("promptSource"), p({
                    pathname: h.pathname,
                    search: e.toString(),
                    hash: h.hash
                }, {
                    replace: !0,
                    state: {
                        ...h.state,
                        consumedUrlPromptKey: g
                    }
                })
            }, c[3] = h.hash, c[4] = h.pathname, c[5] = h.search, c[6] = h.state, c[7] = g, c[8] = p, c[9] = a) : a = c[9];
            let v = (0, y.useEffectEvent)(a);
            return c[10] !== v || c[11] !== d || c[12] !== u || c[13] !== g || c[14] !== t ? (s = () => {
                if (!u && t && f.current !== g) return (0, rP.b)(d.view, (e, t) => {
                    e && t?.getMeta("addToHistory") !== !1 && d.consumeLocationPromptPrefill(g) && v()
                })
            }, c[10] = v, c[11] = d, c[12] = u, c[13] = g, c[14] = t, c[15] = s) : s = c[15], c[16] !== d || c[17] !== u || c[18] !== g || c[19] !== t ? (o = [d, u, g, t], c[16] = d, c[17] = u, c[18] = g, c[19] = t, c[20] = o) : o = c[20], (0, y.useLayoutEffect)(s, o), c[21] !== v || c[22] !== d || c[23] !== u || c[24] !== g || c[25] !== t || c[26] !== m ? (i = () => {
                if (!u || !t || f.current === g || (f.current = g, v(), !d.consumeLocationPromptPrefill(g))) return;
                let {
                    view: e
                } = d, n = t.replace(/\r\n/g, "\n"), a = "codex-app" === m ? (0, rA.f)({
                    schema: e.state.schema,
                    text: n,
                    restoreOnlySitesAndPluginMentions: !0
                }) : (0, rA.e)({
                    schema: e.state.schema,
                    text: n
                }), r = e.state.tr.replaceWith(0, e.state.doc.content.size, a.content);
                r.setSelection(rE.h.atEnd(r.doc)), e.dispatch(r)
            }, c[21] = v, c[22] = d, c[23] = u, c[24] = g, c[25] = t, c[26] = m, c[27] = i) : i = c[27], c[28] !== d || c[29] !== u || c[30] !== g || c[31] !== t || c[32] !== m ? (l = [d, u, g, t, m], c[28] = d, c[29] = u, c[30] = g, c[31] = t, c[32] = m, c[33] = l) : l = c[33], (0, y.useLayoutEffect)(i, l), null
        }
        var rk = n("zKCW");

        function rR(e) {
            let t, n, s, o, i, l = (0, r.c)(11),
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
            return l[3] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, a.jsx)(C.a, {
                id: "chatgptConversations.workOnlyConversion.action",
                defaultMessage: "Convert to Work",
                description: "Button that converts a disabled historical Chat conversation to Work in Codex Desktop"
            }), l[3] = s) : s = l[3], l[4] !== u || l[5] !== h || l[6] !== p ? (o = (0, a.jsx)(eJ.a, {
                color: "primary",
                disabled: p,
                loading: u,
                onClick: h,
                children: s
            }), l[4] = u, l[5] = h, l[6] = p, l[7] = o) : o = l[7], l[8] !== n || l[9] !== o ? (i = (0, a.jsx)("div", {
                className: "mx-auto mb-3 w-full max-w-[var(--thread-content-max-width)]",
                children: (0, a.jsx)(rk.a, {
                    ariaLive: "polite",
                    title: t,
                    content: n,
                    customCtas: o
                })
            }), l[8] = n, l[9] = o, l[10] = i) : i = l[10], i
        }
        var rO = n("pgeU");
        let rN = (0, e3.a)(async () => (await Promise.all([n.e(747352), n.e(94193)]).then(n.bind(n, "FKl5"))).ClientDelightPresentation);

        function rG(e) {
            let t, n, s, o = (0, r.c)(7),
                {
                    conversationId: i
                } = e,
                l = (0, p.y)(eo.a),
                c = (0, p.x)(rO.a, i);
            return o[0] !== i || o[1] !== l ? (t = () => {
                let e = () => {
                        let e = l.get(rO.a, i);
                        null != e && (0, rO.b)(l, i, e, "hidden_or_unmounted")
                    },
                    t = () => {
                        "visible" !== document.visibilityState && e()
                    };
                return document.addEventListener("visibilitychange", t), window.addEventListener("pagehide", e), () => {
                    document.removeEventListener("visibilitychange", t), window.removeEventListener("pagehide", e), e()
                }
            }, n = [i, l], o[0] = i, o[1] = l, o[2] = t, o[3] = n) : (t = o[2], n = o[3]), (0, y.useEffect)(t, n), o[4] !== i || o[5] !== c ? (s = null == c ? null : (0, a.jsx)(rN, {
                conversationId: i,
                effect: c
            }, c.id), o[4] = i, o[5] = c, o[6] = s) : s = o[6], s
        }
        var rB = n("fr5e"),
            rz = n("LEgg");
        let rF = (0, e3.a)(async () => (await n.e(432800).then(n.bind(n, "T7hR"))).AutomationPlanHeaderShortcut);

        function rD(e) {
            let t, n = (0, r.c)(3),
                {
                    conversationId: s
                } = e,
                o = (0, ei.h)("2840857813");
            return n[0] !== s || n[1] !== o ? (t = o ? (0, a.jsx)(rF, {
                conversationId: s
            }) : null, n[0] = s, n[1] = o, n[2] = t) : t = n[2], t
        }
        var rL = n("T33u");
        let rH = (0, e3.a)(() => n.e(766350).then(n.bind(n, "wWAQ")).then(e => e.ScheduledGoalNavigationBridge));

        function rW(e) {
            let t, n, s, o = (0, r.c)(10),
                {
                    conversationId: i,
                    scheduledAutomationId: l
                } = e,
                c = (0, p.x)(rL.a, i),
                d = (0, ei.h)("3901104270");
            return o[0] !== i || o[1] !== c ? (t = null == c ? (0, a.jsx)(rD, {
                conversationId: i
            }) : null, o[0] = i, o[1] = c, o[2] = t) : t = o[2], o[3] !== i || o[4] !== d || o[5] !== l ? (n = d && null != l ? (0, a.jsx)(rH, {
                conversationId: i,
                automationId: l
            }) : null, o[3] = i, o[4] = d, o[5] = l, o[6] = n) : n = o[6], o[7] !== t || o[8] !== n ? (s = (0, a.jsxs)(a.Fragment, {
                children: [t, n]
            }), o[7] = t, o[8] = n, o[9] = s) : s = o[9], s
        }
        var rU = n("Qgfj"),
            rq = n("rmk3"),
            rK = n("f38C"),
            rV = n("MRlq"),
            rY = n("fQbA"),
            rQ = n("dDDU"),
            r$ = n("soaw"),
            rZ = n("ZrYB"),
            rJ = n("X6Vn"),
            rX = n("Kwur"),
            r0 = n("eKlv"),
            r1 = n("MYlA"),
            r2 = n("sfmI"),
            r3 = n("JCtZ"),
            r4 = n("g2p6"),
            r5 = n("oaTv"),
            r6 = n("PME0"),
            r8 = n("lgcP"),
            r7 = n("AcSY"),
            r9 = n("w7E5"),
            se = n("QmkR"),
            st = n("xEXG"),
            sn = n("J6LI"),
            sa = n("lUUH"),
            sr = n("ftAl");

        function ss(e) {
            let t, n, s, o = (0, r.c)(17),
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
                } = (0, r7.i)(),
                v = (0, st.b)();
            return o[0] !== f || o[1] !== l || o[2] !== c || o[3] !== d || o[4] !== u || o[5] !== v || o[6] !== g ? (t = () => {
                let e = g.get(sr.a, l, {
                        enabled: !1
                    }),
                    t = (0, te.a)(e?.gizmo_id) ? e?.gizmo_id ?? null : null,
                    n = null == t ? void 0 : g.query.getData(eY.b, t);
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
                    } = e, c = (0, te.a)(a?.gizmo_id) ? a?.gizmo_id ?? null : null, d = t.get(r9.a), u = t.get(se.m), {
                        data: h
                    } = d, p = h?.pages.flatMap(e => e.items).length ?? 0, m = (a?.conversation_origin === "tpp" || a?.conversation_origin === "flora") && ("allowed" === o || h?.pages.some(e => null != e.cursor) === !0), g = t.get(se.h, n);
                    return null == s || null == a || t.get(se.g, n) || (0, sn.c)(a, r).sourceUnavailable || null == (0, sn.b)(t, a, g, !1) || null != c && null == r || null == h || 0 === p && !m ? [] : [...null == r ? [] : [{
                        id: "current-project-name",
                        message: sc.projectName,
                        messageValues: {
                            projectName: r.gizmo.display.name
                        },
                        enabled: !1
                    }], ...(0, sa.b)({
                        scope: t,
                        conversation: a,
                        project: r,
                        showDestinationFetchState: !1,
                        showMoveToProject: null == c || p > 1 || m,
                        projectCrudStatus: o,
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
            }, o[0] = f, o[1] = l, o[2] = c, o[3] = d, o[4] = u, o[5] = v, o[6] = g, o[7] = t) : t = o[7], o[8] !== l || o[9] !== h || o[10] !== g ? (n = async () => {
                await Promise.all([(async () => {
                    let e = g.get(ae.chatGptConversationQueryById$, l, {
                        enabled: !1
                    });
                    null == e.data && e.isFetching && await g.query.getOrFetch(ae.chatGptConversationQueryById$, l).catch(sl), null == g.query.getData(ae.chatGptConversationQueryById$, l) && await g.query.getOrFetch(se.j, [l]).catch(si)
                })(), h?.()]);
                let e = g.get(sr.a, l, {
                    enabled: !1
                });
                (0, te.a)(e?.gizmo_id) && e?.gizmo_id != null && await g.query.getOrFetch(eY.b, e.gizmo_id).catch(so)
            }, o[8] = l, o[9] = h, o[10] = g, o[11] = n) : n = o[11], o[12] !== i || o[13] !== m || o[14] !== t || o[15] !== n ? (s = (0, a.jsx)(rq.a, {
                preserveBrowserContextMenu: !0,
                awaitBeforeOpen: !1,
                getItems: t,
                onBeforeOpen: n,
                onOpenChange: m,
                renderItem: rY.b,
                trigger: "click",
                children: i
            }), o[12] = i, o[13] = m, o[14] = t, o[15] = n, o[16] = s) : s = o[16], s
        }

        function so() {}

        function si() {}

        function sl() {}
        let sc = (0, rU.f)({
            projectName: {
                id: "chatgptConversations.projectActions.projectName",
                defaultMessage: "{projectName}",
                description: "Name of a ChatGPT project offered as a destination for moving a conversation or Work task"
            }
        });

        function sd(e) {
            let t, s, o, i, l, c, d, u, h, m, g, f, v, b, C, w, I, T, E, A = (0, r.c)(70),
                {
                    conversationOrigin: P,
                    conversationId: M,
                    title: k,
                    isHandoffPending: R,
                    isArchived: O,
                    isChatConversation: G,
                    onHandoff: B,
                    onOpenMessage: z,
                    projectId: F,
                    projectName: L,
                    serverConversationId: H
                } = e,
                W = (0, p.y)(D.a),
                U = (0, p.y)(eo.a),
                q = (0, r$.a)(),
                K = (0, ei.k)();
            A[0] !== K ? (t = K.checkGate("224248639"), A[0] = K, A[1] = t) : t = A[1];
            let V = t;
            A[2] !== K ? (s = K.getLayer("3017902351").get("web_file_library_enabled", !1), A[2] = K, A[3] = s) : s = A[3];
            let Y = s,
                Q = V || Y;
            A[4] !== Q ? (o = {
                enabled: Q
            }, A[4] = Q, A[5] = o) : o = A[5];
            let {
                data: $
            } = (0, p.z)(r4.p, o), Z = Q && $?.fileLibraryEnabledForRegistrationCountry !== !1, J = (0, x.a)(), X = (0, _._)(), [ee, et] = (0, y.useState)(null), [en, ea] = (0, y.useState)(!1), es = (0, y.useRef)(null), el = (0, y.useRef)(null);
            A[6] === Symbol.for("react.memo_cache_sentinel") ? (i = [], A[6] = i) : i = A[6];
            let ec = (0, y.useRef)(i);
            A[7] === Symbol.for("react.memo_cache_sentinel") ? (l = {
                name: "chatgpt"
            }, A[7] = l) : l = A[7];
            let {
                isCapable: ed
            } = (0, p.x)(S.a, l), eu = (0, p.x)(se.g, H);
            A[8] === Symbol.for("react.memo_cache_sentinel") ? (c = () => et("shortcut"), A[8] = c) : c = A[8];
            let eh = G && !eu;
            A[9] !== W || A[10] !== H ? (d = () => (0, r2.a)(W.query.getData(ae.chatGptConversationQueryById$, H), W.get(N.h), W.get(N.g)), A[9] = W, A[10] = H, A[11] = d) : d = A[11], A[12] !== eh || A[13] !== d ? (u = {
                enabled: eh,
                isActive: d
            }, A[12] = eh, A[13] = d, A[14] = u) : u = A[14], (0, rr.a)("deleteChat", c, u), A[15] !== U || A[16] !== eu || A[17] !== X || A[18] !== W || A[19] !== H ? (h = e => {
                !eu && (0, r2.a)(W.query.getData(ae.chatGptConversationQueryById$, H), W.get(N.h), W.get(N.g)) && (et(null), (0, r8.a)(U, H, e), X("/", {
                    replace: !0,
                    state: {
                        leavingDeletedChatGptConversation: !0
                    }
                }))
            }, A[15] = U, A[16] = eu, A[17] = X, A[18] = W, A[19] = H, A[20] = h) : h = A[20];
            let ep = h;
            A[21] !== J ? (m = J.formatMessage(sm.chatActions), A[21] = J, A[22] = m) : m = A[22];
            let em = m;
            A[23] !== W || A[24] !== H ? (g = async () => {
                let e = [];
                ec.current = e, e.push(...await async function(e, t) {
                    let a = await rX.Request.safeGet("/live/conversations/{conversation_id}/session-sharing", {
                        parameters: {
                            path: {
                                conversation_id: t
                            }
                        }
                    }).catch(() => null);
                    return a?.can_share && 0 !== a.av_sessions.length ? [{
                        id: "share-live-session",
                        icon: ap.Zi,
                        message: (0, rU.e)({
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
                                (0, rJ.f)(e, r, {
                                    conversationId: t,
                                    sessions: a.av_sessions
                                })
                            })
                        }
                    }] : []
                }(W, H))
            }, A[23] = W, A[24] = H, A[25] = g) : g = A[25];
            let eg = g;
            A[26] !== M || A[27] !== P || A[28] !== Z || A[29] !== J || A[30] !== eu || A[31] !== O || A[32] !== R || A[33] !== q || A[34] !== X || A[35] !== B || A[36] !== z || A[37] !== F || A[38] !== L || A[39] !== W || A[40] !== H || A[41] !== K || A[42] !== k ? (f = e => {
                let t = W.get(N.f),
                    a = W.get(N.k),
                    r = (0, r2.a)(W.query.getData(ae.chatGptConversationQueryById$, H), W.get(N.h), W.get(N.g)),
                    s = (0, r0.b)(W, H),
                    o = !eu && (0, r2.a)(s, W.get(N.h), W.get(N.g)),
                    i = W.get(j.b).pathname,
                    l = () => q() && i === W.get(j.b).pathname && t === W.get(N.f) && a === W.get(N.k),
                    c = (0, r5.a)(W, M, P, () => (0, r6.a)(X)),
                    d = [];
                return K.getLayer("3732549458").get("enable_conversation_audio_summary", !1) && d.push({
                    id: "chatgpt-audio-summary",
                    message: (0, rU.e)({
                        id: "GizmoInformation.audioSummary",
                        defaultMessage: "Audio summary",
                        description: "Opens the dialog for generating and listening to an audio summary of the current chat"
                    }),
                    icon: ap.ng,
                    selectAfterClose: !0,
                    onSelect: () => {
                        (async function() {
                            return (await n.e(600460).then(n.bind(n, "EEPj"))).openAudioSummaryDialog
                        })().then(e => {
                            l() && e(W, H)
                        }).catch(() => {
                            l() && (es.current?.focus({
                                preventScroll: !0
                            }), W.get(er.f).danger(J.formatMessage({
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
                }), Z && d.unshift({
                    id: "chatgpt-conversation-files",
                    message: (0, rU.e)({
                        id: "GizmoInformation.viewFiles",
                        defaultMessage: "View files in chat",
                        description: "Opens the side panel listing files referenced in the active saved ChatGPT conversation, even when the list is empty"
                    }),
                    icon: ap.sb,
                    onSelect: () => {
                        (async function() {
                            return (await n.e(963775).then(n.bind(n, "fUWe"))).openConversationFiles
                        })().then(e => {
                            l() && e(W, {
                                conversationId: M,
                                serverConversationId: H,
                                onOpenMessage: z
                            })
                        }).catch(() => {
                            l() && W.get(er.f).danger(J.formatMessage({
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
                }), d.push(...(0, rQ.a)(W)), (0, r3.a)(W, {
                    organizationItems: (0, rY.a)([]),
                    projectItems: void 0 === e ? [] : e,
                    sharingItems: ec.current,
                    viewItems: d,
                    preferenceItems: null == c ? [] : [c],
                    surface: "header",
                    conversationId: H,
                    stateConversationId: M,
                    conversationOrigin: P,
                    title: k,
                    isHandoffPending: R,
                    canHandoff: null != B,
                    onHandoff: B,
                    projectId: F,
                    projectName: L,
                    onRename: !r || eu || O ? void 0 : () => void(0, r0.renameActiveChatGptConversation)(W, M),
                    isPinned: W.get(se.h, H) ?? s?.is_starred === !0,
                    onTogglePin: o ? () => {
                        let e = (0, r0.b)(W, H);
                        !(null == e || W.get(se.g, H)) && (0, r2.a)(e, W.get(N.h), W.get(N.g)) && (0, se.V)({
                            scope: W,
                            conversation: "conversation_id" in e ? {
                                gizmo_id: e.gizmo_id,
                                id: e.conversation_id,
                                is_archived: e.is_archived,
                                is_starred: e.is_starred,
                                title: e.title
                            } : e
                        }).catch(su)
                    } : void 0,
                    onArchive: !r || eu || O ? void 0 : () => (0, rZ.a)(W, H),
                    onUnarchive: r && !eu && O ? () => {
                        (0, se.W)({
                            scope: W,
                            conversationId: H
                        }).then(() => {
                            W.get(er.f).success(J.formatMessage(rV.a.unarchiveSuccessPlain))
                        }).catch(() => {
                            W.get(er.f).danger(J.formatMessage(ag.a.unarchiveError), {
                                errorAnalytics: {
                                    toastId: "chatgptConversationPage.onUnarchive.unarchiveError"
                                }
                            })
                        })
                    } : void 0,
                    onDelete: !r || eu ? void 0 : () => et("menu")
                })
            }, A[26] = M, A[27] = P, A[28] = Z, A[29] = J, A[30] = eu, A[31] = O, A[32] = R, A[33] = q, A[34] = X, A[35] = B, A[36] = z, A[37] = F, A[38] = L, A[39] = W, A[40] = H, A[41] = K, A[42] = k, A[43] = f) : f = A[43];
            let ef = f;
            A[44] !== em ? (v = (0, a.jsx)(rK.a, {
                ref: es,
                className: "no-drag",
                color: "primary",
                label: em,
                size: "toolbar"
            }), A[44] = em, A[45] = v) : v = A[45], A[46] !== en || A[47] !== em || A[48] !== v ? (b = (0, a.jsx)(ah.a, {
                content: em,
                disabled: en,
                children: v
            }), A[46] = en, A[47] = em, A[48] = v, A[49] = b) : b = A[49];
            let ev = b;
            A[50] !== ef || A[51] !== ev || A[52] !== X || A[53] !== ed || A[54] !== eg || A[55] !== H ? (C = ed ? (0, a.jsx)(ss, {
                conversationId: H,
                getBaseItems: ef,
                menuTriggerRef: es,
                navigate: X,
                onBeforeOpen: eg,
                onOpenChange: ea,
                children: ev
            }) : (0, a.jsx)(rq.a, {
                preserveBrowserContextMenu: !0,
                getItems: () => ef(),
                onBeforeOpen: eg,
                onOpenChange: ea,
                renderItem: rY.b,
                trigger: "click",
                children: ev
            }), A[50] = ef, A[51] = ev, A[52] = X, A[53] = ed, A[54] = eg, A[55] = H, A[56] = C) : C = A[56];
            let ey = "shortcut" === ee,
                eb = null != ee;
            return A[57] !== ee ? (w = () => {
                el.current = "menu" === ee ? es.current : null, et(null)
            }, A[57] = ee, A[58] = w) : w = A[58], A[59] === Symbol.for("react.memo_cache_sentinel") ? (I = e => {
                let t = el.current;
                if (el.current = null, null == t) return;
                e.preventDefault();
                let n = t.ownerDocument.activeElement;
                t.isConnected && (n === t.ownerDocument.body || e.target instanceof HTMLElement && e.target.contains(n)) && t.focus({
                    preventScroll: !0
                })
            }, A[59] = I) : I = A[59], A[60] !== ep || A[61] !== eu || A[62] !== ey || A[63] !== eb || A[64] !== w || A[65] !== k ? (T = (0, a.jsx)(r1.a, {
                allowArtifactDeletion: !0,
                autoFocusConfirm: ey,
                open: eb,
                onOpenChange: w,
                onCloseAutoFocus: I,
                isDeleting: eu,
                onConfirm: ep,
                title: k
            }), A[60] = ep, A[61] = eu, A[62] = ey, A[63] = eb, A[64] = w, A[65] = k, A[66] = T) : T = A[66], A[67] !== C || A[68] !== T ? (E = (0, a.jsxs)(a.Fragment, {
                children: [C, T]
            }), A[67] = C, A[68] = T, A[69] = E) : E = A[69], E
        }

        function su() {}

        function sh() {
            let e, t, n, s = (0, r.c)(8),
                o = (0, x.a)(),
                [i, l] = (0, y.useState)(!1);
            s[0] !== o ? (e = o.formatMessage(sm.more), s[0] = o, s[1] = e) : e = s[1];
            let c = e;
            return s[2] !== c ? (t = (0, a.jsx)(rK.a, {
                className: "no-drag",
                color: "primary",
                label: c,
                size: "toolbar"
            }), s[2] = c, s[3] = t) : t = s[3], s[4] !== i || s[5] !== c || s[6] !== t ? (n = (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(rq.a, {
                    preserveBrowserContextMenu: !0,
                    getItems: sp,
                    onOpenChange: l,
                    renderItem: rY.b,
                    trigger: "click",
                    children: (0, a.jsx)(ah.a, {
                        content: c,
                        disabled: i,
                        children: t
                    })
                })
            }), s[4] = i, s[5] = c, s[6] = t, s[7] = n) : n = s[7], n
        }

        function sp() {
            return (0, rY.a)([])
        }
        let sm = (0, rU.f)({
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
        var sg = n("BecY"),
            sf = n("WLgA");

        function sv(e) {
            let t, n, s, o = (0, r.c)(10),
                {
                    allowsThreadContentOverlap: l,
                    project: c
                } = e,
                d = void 0 !== l && l,
                u = (0, x.a)(),
                h = null == c ? "gap-2 ps-2" : "gap-0.5",
                p = d && "rounded-lg bg-surface";
            o[0] !== h || o[1] !== p ? (t = (0, i.b)("me-2 flex min-w-0 flex-1 items-center text-base select-none", h, p), o[0] = h, o[1] = p, o[2] = t) : t = o[2];
            let m = !!d || void 0;
            return o[3] !== u || o[4] !== c ? (n = null != c ? (0, a.jsx)("nav", {
                "aria-label": u.formatMessage({
                    id: "chatgptConversations.header.projectBreadcrumb",
                    defaultMessage: "Breadcrumb",
                    description: "Accessible label for project conversation breadcrumb navigation"
                }),
                className: "flex min-w-0 items-center gap-1 overflow-hidden whitespace-nowrap",
                children: (0, a.jsx)(_.g, {
                    className: "flex h-9 max-w-full min-w-8 shrink cursor-interaction items-center overflow-hidden rounded-lg px-2 text-start text-base text-secondary transition-colors hover:bg-surface-tertiary hover:text-default",
                    to: (0, sf.c)(c.gizmo.id),
                    children: (0, a.jsxs)("span", {
                        className: "flex min-w-0 items-center gap-1.5",
                        children: [(0, a.jsx)(tW.a, {
                            className: "size-5",
                            color: c.gizmo.display.theme,
                            defaultColor: "secondary",
                            fallbackIcon: (0, a.jsx)(ap.wd, {}),
                            icon: c.gizmo.display.emoji,
                            sharedIcon: "shared" === (0, rt.b)(c) ? (0, a.jsx)(sg.a, {}) : void 0
                        }), (0, a.jsx)("span", {
                            className: "min-w-0 truncate text-default",
                            children: c.gizmo.display.name
                        })]
                    })
                })
            }) : null, o[3] = u, o[4] = c, o[5] = n) : n = o[5], o[6] !== t || o[7] !== m || o[8] !== n ? (s = (0, a.jsx)(A.a.HeaderToolbar, {
                inset: !1,
                children: (0, a.jsx)("div", {
                    className: t,
                    "data-app-shell-thread-content-overlap": m,
                    children: n
                })
            }), o[6] = t, o[7] = m, o[8] = n, o[9] = s) : s = o[9], s
        }
        var sy = n("dLcZ"),
            sb = n("W5pg"),
            sx = n("QcW8"),
            sC = n("yC2B");

        function s_(e) {
            let t, n, s, o, c, d, u, h, m, g, f = (0, r.c)(32),
                {
                    header: v,
                    courseShortcut: y,
                    progress: b
                } = e,
                {
                    titleBarLeftInset: C,
                    rightPanelAnimatedWidth: _,
                    isContentFullWidth: w
                } = (0, P.g)(),
                I = (0, p.z)(sx.$),
                T = (0, p.z)(sx.cb),
                S = (0, x.a)();
            f[0] !== S.locale ? (t = (0, sC.a)(S.locale), f[0] = S.locale, f[1] = t) : t = f[1];
            let j = t,
                E = I?.mode === "split" && "left" === T != ("rtl" === j);
            f[2] !== E || f[3] !== w ? (n = e => E && !w ? e : 0, f[2] = E, f[3] = w, f[4] = n) : n = f[4];
            let M = (0, sb.a)(_, n);
            f[5] !== M || f[6] !== C ? (s = [C, M], f[5] = M, f[6] = C, f[7] = s) : s = f[7];
            let k = (0, sb.a)(s, sw);
            f[8] !== k || f[9] !== M ? (o = {
                "--learning-header-left-inset": k,
                insetInlineStart: M
            }, f[8] = k, f[9] = M, f[10] = o) : o = f[10];
            let R = o;
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
            let O = u;
            if (null == b) return O;
            if (I?.isVisible && "full" === I.mode) {
                let e, t, n;
                return f[18] !== y ? (e = null == y ? null : (0, a.jsx)("div", {
                    className: "flex min-w-0 flex-1",
                    children: y
                }), f[18] = y, f[19] = e) : e = f[19], f[20] !== b ? (t = (0, a.jsx)("div", {
                    className: "min-w-0 flex-1",
                    children: b
                }), f[20] = b, f[21] = t) : t = f[21], f[22] !== t || f[23] !== e ? (n = (0, a.jsx)(A.a.HeaderAction, {
                    actionId: "sectioned-conversation-navigation",
                    align: "center",
                    children: (0, a.jsxs)("div", {
                        className: "flex min-w-0 items-center gap-toolbar-action",
                        children: [e, t]
                    })
                }), f[22] = t, f[23] = e, f[24] = n) : n = f[24], n
            }
            return f[25] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, i.b)("relative flex max-w-[min(var(--learning-progress-max-width),max(0px,calc(100cqw-2*(var(--app-shell-header-end-actions-width)+var(--spacing)*3))))] min-w-0 items-center", "[--learning-progress-max-width:var(--thread-content-max-width)]", "@max-thread-expanded/home-mode-toggle:[--learning-progress-max-width:var(--thread-content-compact-max-width,var(--thread-content-max-width))]"), f[25] = h) : h = f[25], f[26] !== O ? (m = (0, a.jsx)("div", {
                className: "absolute inset-y-0 end-full me-toolbar-action flex w-[max(0px,calc((100cqw-100%)/2-var(--spacing-toolbar-action)-var(--spacing)*2-var(--learning-header-left-inset)))] min-w-0 items-center overflow-hidden",
                "data-app-shell-header-obstacle": !0,
                children: O
            }), f[26] = O, f[27] = m) : m = f[27], f[28] !== b || f[29] !== R || f[30] !== m ? (g = (0, a.jsx)(A.a.HeaderAction, {
                actionId: "sectioned-conversation-navigation",
                align: "center",
                children: (0, a.jsxs)(l.a.div, {
                    className: h,
                    style: R,
                    children: [m, b]
                })
            }), f[28] = b, f[29] = R, f[30] = m, f[31] = g) : g = f[31], g
        }

        function sw(e) {
            let [t, n] = e;
            return `${Math.max(0,t-n)}px`
        }
        var sI = n("X0li");
        let sT = (0, e3.a)(sI.d),
            sS = (0, e3.a)(async () => (await n.e(328371).then(n.bind(n, "uPMT"))).SectionHistory),
            sj = (0, e3.a)(async () => (await n.e(270015).then(n.bind(n, "r5vN"))).SectionNavigation);
        var sE = n("lX86");
        n("i1of");
        var sA = n("a4V1"),
            sP = n("alJ6"),
            sM = n("u9iS"),
            sk = n("KidQ");
        let sR = {
            addInitialContentToHistory: !0,
            enableCodeBlocks: !1,
            enableSelectedTextLinks: !1,
            enableFileMentions: !0,
            enableSkillMentions: !1,
            enableSlashCommands: {
                triggers: ["/"]
            }
        };

        function sO(e) {
            let t, n, s, o, i, l = (0, r.c)(15),
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
            }), l[3] = d, l[4] = h, l[5] = n) : n = l[5], l[6] !== m ? (s = () => {
                let e = m?.input.current ?? document.querySelector("#pending-conversation-input");
                return null == e || null == m ? null : {
                    element: e,
                    locationKey: m.locationKey
                }
            }, l[6] = m, l[7] = s) : s = l[7], l[8] !== c ? (o = e => null == e ? null : c(e), l[8] = c, l[9] = o) : o = l[9], l[10] !== t || l[11] !== n || l[12] !== s || l[13] !== o ? (i = (0, a.jsx)(sk.a, {
                controllerOptions: sR,
                initialSuggestionOptions: t,
                getInitialContent: n,
                getInitialInput: s,
                children: o
            }), l[10] = t, l[11] = n, l[12] = s, l[13] = o, l[14] = i) : i = l[14], i
        }
        var sN = n("ygKd"),
            sG = n("KSir"),
            sB = n("fNPc"),
            sz = n("vVgo");
        let sF = (0, e3.a)(async () => (await n.e(642007).then(n.bind(n, "KhUL"))).CourseHeaderShortcut);

        function sD(e) {
            let t, n = (0, r.c)(3),
                {
                    conversationId: s
                } = e,
                o = (0, ei.h)("4035922817");
            return n[0] !== s || n[1] !== o ? (t = o ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(sF, {
                    conversationId: s
                })
            }) : null, n[0] = s, n[1] = o, n[2] = t) : t = n[2], t
        }
        var sL = n("QPeR"),
            sH = n("MgyE"),
            sW = n("gyrn"),
            sU = n("wnpN"),
            sq = n("M3Kf");

        function sK(e) {
            let t, n, s, i, l, c, d = (0, r.c)(21),
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
            d[3] !== v || d[4] !== t || d[5] !== m ? (s = ["chatgpt-message-target", m, t, v], d[3] = v, d[4] = t, d[5] = m, d[6] = s) : s = d[6];
            let y = null != m && null != t && g > 0,
                b = v ? 0 : 1 / 0;
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
                    await (0, eG.a)(h, m, n)
                }
                return !0
            }, d[7] = u, d[8] = v, d[9] = t, d[10] = h, d[11] = m, d[12] = i) : i = d[12], d[13] !== s || d[14] !== y || d[15] !== b || d[16] !== i ? (l = {
                queryKey: s,
                enabled: y,
                staleTime: b,
                retry: !1,
                queryFn: i
            }, d[13] = s, d[14] = y, d[15] = b, d[16] = i, d[17] = l) : l = d[17];
            let {
                isError: x,
                refetch: w
            } = (0, o.a)(l);
            return d[18] !== x || d[19] !== w ? (c = x ? (0, a.jsx)(eJ.a, {
                color: "secondary",
                onClick: () => void w(),
                children: (0, a.jsx)(C.a, {
                    id: "chatgpt.pagination.retryMessage",
                    defaultMessage: "Retry loading this message",
                    description: "Button to retry loading the full conversation for a link to an older message"
                })
            }) : null, d[18] = x, d[19] = w, d[20] = c) : c = d[20], c
        }
        var sV = n("ckwE");

        function sY(e) {
            let t, n = (0, r.c)(3),
                {
                    children: s
                } = e,
                [o] = (0, y.useState)(sQ);
            return n[0] !== o || n[1] !== s ? (t = (0, a.jsx)(ez.a, {
                value: o,
                children: s
            }), n[0] = o, n[1] = s, n[2] = t) : t = n[2], t
        }

        function sQ() {
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

        function s$(e) {
            let t, n = (0, r.c)(2),
                {
                    children: s
                } = e;
            return n[0] !== s ? (t = (0, a.jsx)(sV.a, {
                children: (0, a.jsx)(sY, {
                    children: s
                })
            }), n[0] = s, n[1] = t) : t = n[1], t
        }
        var sZ = n("MDmT"),
            sJ = n("K45w"),
            sX = n("jCHb"),
            s0 = n("V8uZ");

        function s1(e) {
            let t = e.querySelector("[data-dil-message-id]") ?? e;
            return t.checkVisibility() && null == t.querySelector("[data-dil-render-failed]") && t.innerText.trim().length > 0
        }
        n("CSxw");
        var s2 = n("NqfB"),
            s3 = n("JEFL"),
            s4 = n("moBM");
        let s5 = '[data-markdown-text-style="assistant-message"]',
            s6 = (0, p.d)(eo.a, (e, t) => {
                let {
                    conversationId: n,
                    messageId: a
                } = e, {
                    get: r
                } = t;
                return null == a ? null : r(F.L, n)?.[a]?.message ?? null
            });

        function s8(e) {
            let t, n, s = (0, r.c)(5),
                o = `[data-chatgpt-conversation-selection-target="${e.conversationId}"]`;
            return s[0] !== e ? (t = t => (0, a.jsx)(s7, {
                ...e,
                selection: t
            }), s[0] = e, s[1] = t) : t = s[1], s[2] !== o || s[3] !== t ? (n = (0, a.jsx)(s2.a, {
                align: "start",
                targetSelector: o,
                children: t
            }), s[2] = o, s[3] = t, s[4] = n) : n = s[4], n
        }

        function s7(e) {
            let t, s, o, i, l, c, d, u = (0, r.c)(30),
                {
                    conversationId: h,
                    moreDetailsEnabled: m,
                    onAddSelectedText: g,
                    selection: f
                } = e,
                v = (0, p.y)(D.a),
                y = (0, x.a)(),
                b = (0, ei.h)("4290238484"),
                C = (0, ei.h)("473637331"),
                _ = (0, p.z)(s4.a),
                w = (0, p.x)(F.x, h);
            u[0] !== w || u[1] !== _ || u[2] !== v ? (t = _ && "tpp" === w && "chatgpt-thread" === v.value.routeKind && null == v.value.workSideChat && !0, u[0] = w, u[1] = _, u[2] = v, u[3] = t) : t = u[3];
            let I = t;
            u[4] !== h || u[5] !== f.selectionRange ? (s = function(e) {
                let {
                    conversationId: t,
                    range: n
                } = e, a = n.startContainer instanceof Element ? n.startContainer : n.startContainer.parentElement, r = n.endContainer instanceof Element ? n.endContainer : n.endContainer.parentElement, s = a?.closest(s5);
                if (n.collapsed || null == s || !s.isConnected || s !== r?.closest(s5)) return null;
                let o = s.parentElement,
                    i = o?.getAttribute("data-chatgpt-selection-message-id");
                return !i || o?.getAttribute("data-chatgpt-selection-conversation-id") !== t || [...s.querySelectorAll('[data-writing-block-variant], [data-conversation-component="learning"], [contenteditable="true"], [data-markdown-copy="exclude"]')].some(e => n.intersectsNode(e)) ? null : {
                    markdownElement: s,
                    messageId: i
                }
            }({
                conversationId: h,
                range: f.selectionRange
            }), u[4] = h, u[5] = f.selectionRange, u[6] = s) : s = u[6];
            let T = s,
                S = T?.messageId ?? null;
            u[7] !== h || u[8] !== S ? (o = {
                conversationId: h,
                messageId: S
            }, u[7] = h, u[8] = S, u[9] = o) : o = u[9];
            let j = (0, p.x)(s6, o),
                E = (0, p.x)(F.j, h),
                A = b && m && null != E && null != T && j?.author.role === "assistant";
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
            } : void 0, u[10] = I, u[11] = v, u[12] = i) : i = u[12], u[13] !== A || u[14] !== C || u[15] !== g || u[16] !== f.selectionRange || u[17] !== T ? (l = !A || C ? e => {
                g(e, T?.messageId, null == T ? void 0 : function(e, t, n) {
                    let a = 0;
                    for (let r of n4(e, n.trim())) {
                        if (0 >= t.compareBoundaryPoints(Range.START_TO_START, r)) break;
                        a++
                    }
                    return a
                }(T.markdownElement, f.selectionRange, e))
            } : void 0, u[13] = A, u[14] = C, u[15] = g, u[16] = f.selectionRange, u[17] = T, u[18] = l) : l = u[18], u[19] !== A || u[20] !== h || u[21] !== y || u[22] !== v || u[23] !== T ? (c = A ? e => {
                Promise.all([n.e(753405), n.e(585419), n.e(877700), n.e(353230), n.e(81461), n.e(829706), n.e(62441), n.e(118186), n.e(525669), n.e(830492), n.e(136187)]).then(n.bind(n, "zRlR")).then(t => {
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
                        messageId: T.messageId,
                        query: y.formatMessage({
                            id: "chatgpt.selection.moreDetailsTitle",
                            defaultMessage: "More details",
                            description: "Title of the side panel explaining selected text from an assistant response"
                        }),
                        shouldBlockExternalEgress: v.get(eT.d, h),
                        sourceConversationId: h
                    })
                })
            } : void 0, u[19] = A, u[20] = h, u[21] = y, u[22] = v, u[23] = T, u[24] = c) : c = u[24], u[25] !== f.selectedText || u[26] !== i || u[27] !== l || u[28] !== c ? (d = (0, a.jsx)(s3.a, {
                conversationTerminology: "chat",
                selectedText: f.selectedText,
                onOpenSideChat: i,
                onAddSelectedText: l,
                onMoreDetails: c
            }), u[25] = f.selectedText, u[26] = i, u[27] = l, u[28] = c, u[29] = d) : d = u[29], d
        }
        var s9 = n("Fjze");

        function oe(e) {
            let t, n, a, s = (0, r.c)(7),
                {
                    sharedConversationId: o
                } = e,
                i = (0, p.y)(eo.a),
                l = null != o;
            s[0] !== i || s[1] !== o ? (t = () => {
                null != o && (rX.Request.safePost("/received-shares/open", {
                    requestBody: {
                        share_kind: "conversation",
                        share_id: o
                    }
                }).then(() => i.queryClient.invalidateQueries({
                    queryKey: ["opened-shared-links"]
                })).catch(ot), (0, eu.a)(i, s9.a, {
                    sharedConversationId: o
                }))
            }, s[0] = i, s[1] = o, s[2] = t) : t = s[2];
            let c = (0, y.useEffectEvent)(t);
            return s[3] !== c ? (n = () => {
                c()
            }, s[3] = c, s[4] = n) : n = s[4], s[5] !== l ? (a = [l], s[5] = l, s[6] = a) : a = s[6], (0, y.useEffect)(n, a), null
        }

        function ot() {}
        var on = n("GigQ"),
            oa = n("JKdL"),
            or = n("HOLv"),
            os = n("FGv0"),
            oo = n("r9i9"),
            oi = n("tdfh"),
            ol = n("SEBt"),
            oc = n("uQqo"),
            od = n("Ohm5");

        function ou(e) {
            let t, s, o, i, l, c = (0, r.c)(12),
                {
                    data: d
                } = e,
                u = (0, p.y)(eo.a),
                h = (0, x.a)();
            c[0] !== h ? (t = h.formatMessage(ag.a.headerShare), c[0] = h, c[1] = t) : t = c[1];
            let m = t,
                [g, f] = (0, y.useState)(!1);
            return c[2] !== d || c[3] !== g || c[4] !== u ? (s = () => {
                g || (f(!0), (async function(e, t) {
                    let a = t.sharedPost,
                        r = a?.attachments[0]?.kind === "media_generation" ? (0, oc.a)(a, (0, oc.b)(a))[0] : null,
                        s = crypto.randomUUID();
                    (0, ol.b)(e, {
                        attachmentType: t.attachmentType,
                        contentType: t.contentType,
                        shareId: t.shareId,
                        shareSessionId: s
                    });
                    let o = t.dialogProps.receiverShareLink;
                    if (o?.contentType === "conversation") {
                        let a = (0, ol.a)(e, {
                                actor: "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER",
                                shareId: t.shareId,
                                shareSessionId: s,
                                source: "CHATGPT_SHARE_FLOW_SOURCE_RECEIVER_HEADER",
                                usedExistingLink: !0,
                                omitSheetType: !0
                            }),
                            r = await (0, os.a)(Promise.resolve(o.shareLinkUrl));
                        if (a({
                                result: r ? "link-copied" : "copy-failed",
                                shareId: t.shareId
                            }), r) {
                            let {
                                showConversationShareCopiedToast: t
                            } = await n.e(555532).then(n.bind(n, "euaP"));
                            t(e, null, !0 === o.isWorkspaceOnly)
                        } else(0, rJ.f)(e, oi.a, {
                            ...t.dialogProps,
                            recoveryShareLink: o,
                            shareSessionId: s
                        });
                        return
                    }(0, rJ.f)(e, oi.a, {
                        ...t.dialogProps,
                        image: r?.src == null ? void 0 : {
                            alt: t.dialogProps.title ?? "",
                            item: r,
                            previewSrc: r.src
                        },
                        previewTurns: null != r ? void 0 : (0, oo.j)(t.conversation, t.conversation.current_node ?? t.dialogProps.currentNodeId),
                        privacyNotices: (0, oo.k)({
                            conversation: t.conversation,
                            projectId: null
                        }),
                        shareSessionId: s
                    })
                })(u, d).finally(() => f(!1)))
            }, c[2] = d, c[3] = g, c[4] = u, c[5] = s) : s = c[5], c[6] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, a.jsx)(or.a, {
                asset: od.a
            }), i = (0, a.jsx)(C.a, {
                ...ag.a.headerShare
            }), c[6] = o, c[7] = i) : (o = c[6], i = c[7]), c[8] !== g || c[9] !== m || c[10] !== s ? (l = (0, a.jsxs)(eJ.a, {
                "aria-label": m,
                color: "ghostActive",
                loading: g,
                size: "toolbar",
                onClick: s,
                children: [o, i]
            }), c[8] = g, c[9] = m, c[10] = s, c[11] = l) : l = c[11], l
        }
        var oh = n("JUxu");
        let op = (0, y.lazy)(async () => ({
            default: (await Promise.resolve().then(n.bind(n, "taaw"))).CodexThreadReportDialog
        }));

        function om(e) {
            let t, n, s, o, i = (0, r.c)(11),
                {
                    sharedConversationId: l
                } = e,
                c = (0, p.y)(eo.a),
                d = (0, p.x)(eS.f, (0, y.useContext)(O.a));
            if (null != d) {
                let e, t;
                return i[0] !== d ? (e = (0, eS.b)(d), i[0] = d, i[1] = e) : e = i[1], i[2] !== e ? (t = (0, a.jsx)(oh.a, {
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
                (0, rJ.f)(c, op, {
                    reportEntityType: "share_link",
                    threadId: l,
                    onCloseAutoFocus: e => {
                        e.preventDefault();
                        let n = t.ownerDocument.activeElement;
                        t.isConnected && (n === t.ownerDocument.body || e.target instanceof HTMLElement && e.target.contains(n)) && t.focus({
                            preventScroll: !0
                        })
                    }
                }), (0, ol.c)(c, l)
            }, i[5] = c, i[6] = l, i[7] = n) : n = i[7], i[8] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, a.jsx)(C.a, {
                id: "chatgptConversations.sharedConversation.reportButton",
                defaultMessage: "Report conversation",
                description: "Button above a shared ChatGPT conversation in Codex Desktop that opens ChatGPT's report modal for reporting another person's shared conversation"
            }), i[8] = s) : s = i[8], i[9] !== n ? (o = (0, a.jsxs)("div", {
                className: "flex flex-col items-center gap-1 text-center text-xs select-none",
                children: [t, (0, a.jsx)(eJ.a, {
                    className: "font-semibold",
                    color: "ghostActive",
                    onClick: n,
                    children: s
                })]
            }), i[9] = n, i[10] = o) : o = i[10], o
        }
        var og = n("zbjM"),
            of = n("MVHH"),
            ov = n("xSOA"),
            oy = n("rhKI"),
            ob = n("PP3M"),
            ox = n("jAnS"),
            oC = n("CFOe"),
            o_ = n("JNtf"),
            ow = n("mUDD");

        function oI(e) {
            let t, n, s, o, i, l, c, d, u, h, p, m, g, f = (0, r.c)(31),
                {
                    canSave: v,
                    isPending: y,
                    onCancel: b,
                    onClose: x,
                    onSave: _
                } = e;
            f[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(C.a, {
                id: "chatgptConversations.temporaryChat.save.close",
                defaultMessage: "Close",
                description: "Accessible label for the close button in the temporary chat save confirmation dialog."
            }), f[0] = t) : t = f[0], f[1] !== y || f[2] !== x ? (n = e => {
                e || y || x()
            }, f[1] = y, f[2] = x, f[3] = n) : n = f[3];
            let w = !y;
            f[4] !== v || f[5] !== _ ? (s = e => {
                e.preventDefault(), v && _()
            }, f[4] = v, f[5] = _, f[6] = s) : s = f[6], f[7] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, a.jsx)(o_.d, {
                children: (0, a.jsx)(C.a, {
                    id: "chatgptConversations.temporaryChat.save.title",
                    defaultMessage: "Save chat?",
                    description: "Title of the confirmation dialog for converting a temporary ChatGPT conversation into a regular saved chat."
                })
            }), f[7] = o) : o = f[7], f[8] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(ow.e, {
                children: (0, a.jsx)(ow.d, {
                    className: "select-none",
                    title: o,
                    subtitle: (0, a.jsx)(o_.c, {
                        children: (0, a.jsx)(C.a, {
                            id: "chatgptConversations.temporaryChat.save.description.regularChatSettings",
                            defaultMessage: "This chat will now be included in your history. It will follow your memory and model training settings used for regular chats.",
                            description: "Body of the confirmation dialog shown when a user saves a temporary ChatGPT conversation. Explains before they confirm that the chat will appear in history and follow the memory and model training settings already configured for regular chats."
                        })
                    })
                })
            }), f[8] = i) : i = f[8], f[9] !== b || f[10] !== x ? (l = () => {
                b?.(), x()
            }, f[9] = b, f[10] = x, f[11] = l) : l = f[11], f[12] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)(C.a, {
                id: "chatgptConversations.temporaryChat.save.cancel",
                defaultMessage: "Cancel",
                description: "Secondary button that closes the save confirmation dialog and leaves the ChatGPT conversation temporary."
            }), f[12] = c) : c = f[12], f[13] !== y || f[14] !== l ? (d = (0, a.jsx)(eJ.a, {
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
            }), f[16] = u) : u = f[16], f[17] !== y || f[18] !== I ? (h = (0, a.jsx)(eJ.a, {
                color: "primary",
                disabled: I,
                loading: y,
                type: "submit",
                children: u
            }), f[17] = y, f[18] = I, f[19] = h) : h = f[19], f[20] !== h || f[21] !== d ? (p = (0, a.jsx)(ow.e, {
                children: (0, a.jsxs)(ow.c, {
                    children: [d, h]
                })
            }), f[20] = h, f[21] = d, f[22] = p) : p = f[22], f[23] !== p || f[24] !== s ? (m = (0, a.jsxs)(ow.b, {
                as: "form",
                onSubmit: s,
                children: [i, p]
            }), f[23] = p, f[24] = s, f[25] = m) : m = f[25], f[26] !== y || f[27] !== m || f[28] !== n || f[29] !== w ? (g = (0, a.jsx)(o_.a, {
                open: !0,
                dialogCloseLabel: t,
                onOpenChange: n,
                shouldIgnoreClickOutside: y,
                showDialogClose: w,
                size: "narrow",
                children: m
            }), f[26] = y, f[27] = m, f[28] = n, f[29] = w, f[30] = g) : g = f[30], g
        }

        function oT(e) {
            (0, ae.e)(e).catch(() => {
                nE.a.warning("Failed to acknowledge temporary chat save coachmark")
            })
        }

        function oS(e) {
            let t, n = (0, r.c)(2),
                {
                    conversationId: s
                } = e;
            return n[0] !== s ? (t = (0, a.jsxs)(a.Fragment, {
                children: [null, (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(oj, {
                        conversationId: s
                    })
                })]
            }), n[0] = s, n[1] = t) : t = n[1], t
        }

        function oj(e) {
            let t, n = (0, r.c)(2),
                {
                    conversationId: s
                } = e;
            return (0, p.z)(ob.e) ? (n[0] !== s ? (t = (0, a.jsx)(oE, {
                conversationId: s
            }), n[0] = s, n[1] = t) : t = n[1], t) : null
        }

        function oE(e) {
            let t, n, s, o, i, l, c, d, u, h, m, g, f, v = (0, r.c)(49),
                {
                    conversationId: b
                } = e,
                w = (0, p.y)(eo.a),
                I = (0, x.a)(),
                T = (0, _._)(),
                [S, j] = (0, y.useState)(!1),
                [E, A] = (0, y.useState)(!1),
                [P, M] = (0, y.useState)(!1),
                [k, R] = (0, y.useState)(!1),
                O = (0, y.useRef)(!1),
                N = (0, p.z)(r4.p).data,
                G = (0, p.x)(F.j, b),
                B = (0, p.x)(F.W, b),
                z = (0, p.x)(F.H, b),
                D = (0, p.x)(e7.i, b);
            v[0] !== b || v[1] !== w ? (t = {
                mutationFn: e => {
                    let {
                        sourceConversationId: t,
                        selectedLeafId: n
                    } = e;
                    if (w.get(F.H, b) || w.get(e7.i, b) || t !== w.get(F.j, b) || n !== w.get(F.W, b)) throw Error("Cannot save an unavailable temporary chat message");
                    return rX.Request.safePost("/conversation/{conversation_id}/save", {
                        parameters: {
                            path: {
                                conversation_id: t
                            }
                        },
                        requestBody: {
                            selected_leaf_id: n
                        },
                        isExpectedError: oR
                    }).then(ok)
                },
                retry: oM
            }, v[0] = b, v[1] = w, v[2] = t) : t = v[2];
            let {
                mutateAsync: L,
                isPending: H
            } = (0, ov.a)(t), W = null != G && null != B && !z && !D && !H && !E;
            v[3] !== I ? (n = I.formatMessage({
                id: "chatgptConversations.temporaryChat.save.button",
                defaultMessage: "Save chat",
                description: "Tooltip and accessible label for the bookmark button in a temporary ChatGPT conversation. Opens a confirmation dialog to save it to regular history."
            }), v[3] = I, v[4] = n) : n = v[4];
            let U = n;
            v[5] !== N?.eligibleAnnouncements ? (s = N?.eligibleAnnouncements?.includes(r4.h), v[5] = N?.eligibleAnnouncements, v[6] = s) : s = v[6];
            let q = !0 === s,
                K = !k && (P || q && W);
            v[7] !== b || v[8] !== P || v[9] !== w || v[10] !== K ? (o = () => {
                if (!K || P || O.current) return;
                let e = !1;
                return queueMicrotask(() => {
                    e || O.current || (O.current = !0, (0, eu.a)(w, of.Ab, {
                        personalizationMode: (0, oy.a)((0, ob.k)(w, b))
                    }), M(!0), oT(w))
                }), () => {
                    e = !0
                }
            }, i = [b, P, w, K], v[7] = b, v[8] = P, v[9] = w, v[10] = K, v[11] = o, v[12] = i) : (o = v[11], i = v[12]), (0, y.useEffect)(o, i), v[13] !== w ? (l = () => {
                R(!0), O.current || (O.current = !0, oT(w))
            }, v[13] = w, v[14] = l) : l = v[14];
            let V = l;
            v[15] !== W || v[16] !== b || v[17] !== I || v[18] !== T || v[19] !== L || v[20] !== w || v[21] !== B || v[22] !== G ? (c = async function() {
                let e;
                if (!W || null == G || null == B) return;
                let t = (0, oy.a)((0, ob.k)(w, b));
                (0, eu.a)(w, of.Bb, {
                    personalizationMode: t
                });
                try {
                    e = (await L({
                        sourceConversationId: G,
                        selectedLeafId: B
                    })).conversation_id
                } catch (e) {
                    (0, eu.a)(w, of.Cb, {
                        personalizationMode: t,
                        failureCategory: (0, oy.b)(e)
                    }), w.get(er.f).danger(I.formatMessage({
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
                A(!0), j(!1), (0, se.H)(w), (0, se.K)(w, G, "remove"), (0, se.K)(w, e, "refresh"), T((0, ox.c)(e), {
                    replace: !0
                }), w.get(er.f).success(I.formatMessage({
                    id: "chatgptConversations.temporaryChat.save.success",
                    defaultMessage: "Chat saved. It will now appear in your chat history.",
                    description: "Success toast confirming that a formerly temporary ChatGPT conversation is now saved in regular history."
                })), rX.Request.safePost("/conversation/gen_title/{conversation_id}", {
                    parameters: {
                        path: {
                            conversation_id: e
                        }
                    },
                    requestBody: {
                        message_id: B
                    }
                }).then(oP).then(t => {
                    (0, F.$b)({
                        scope: w,
                        conversationId: e,
                        title: t
                    }), w.query.setData(ae.chatGptConversationQueryById$, e, e => null == e ? e : {
                        ...e,
                        title: t
                    }), (0, se.H)(w), (0, se.K)(w, e, "refresh")
                }).catch(oA)
            }, v[15] = W, v[16] = b, v[17] = I, v[18] = T, v[19] = L, v[20] = w, v[21] = B, v[22] = G, v[23] = c) : c = v[23];
            let Y = c,
                Q = !W;
            v[24] !== b || v[25] !== w || v[26] !== K ? (d = () => {
                (0, eu.a)(w, of.Eb, {
                    personalizationMode: (0, oy.a)((0, ob.k)(w, b)),
                    coachMarkVisible: K
                }), j(!0)
            }, v[24] = b, v[25] = w, v[26] = K, v[27] = d) : d = v[27], v[28] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, a.jsx)(t_.b, {
                icon: {
                    16: ap.qb,
                    20: ap.rb
                }
            }), v[28] = u) : u = v[28], v[29] !== U || v[30] !== Q || v[31] !== d ? (h = (0, a.jsx)(eJ.a, {
                "aria-label": U,
                color: "toolbar",
                disabled: Q,
                size: "toolbar",
                uniform: !0,
                onClick: d,
                children: u
            }), v[29] = U, v[30] = Q, v[31] = d, v[32] = h) : h = v[32];
            let $ = h;
            return v[33] !== V || v[34] !== I || v[35] !== U || v[36] !== $ || v[37] !== K ? (m = K ? (0, a.jsx)(oC.a, {
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
            }) : (0, a.jsx)(ah.a, {
                content: U,
                children: $
            }), v[33] = V, v[34] = I, v[35] = U, v[36] = $, v[37] = K, v[38] = m) : m = v[38], v[39] !== W || v[40] !== b || v[41] !== Y || v[42] !== S || v[43] !== H || v[44] !== w ? (g = S ? (0, a.jsx)(oI, {
                canSave: W,
                isPending: H,
                onCancel: () => {
                    (0, eu.a)(w, of.zb, {
                        personalizationMode: (0, oy.a)((0, ob.k)(w, b))
                    })
                },
                onClose: () => j(!1),
                onSave: () => void Y()
            }) : null, v[39] = W, v[40] = b, v[41] = Y, v[42] = S, v[43] = H, v[44] = w, v[45] = g) : g = v[45], v[46] !== m || v[47] !== g ? (f = (0, a.jsxs)(a.Fragment, {
                children: [m, g]
            }), v[46] = m, v[47] = g, v[48] = f) : f = v[48], f
        }

        function oA() {}

        function oP(e) {
            return nU.object({
                title: nU.string()
            }).parse(e).title
        }

        function oM(e, t) {
            return e < 1 && t instanceof no.a && 412 === t.status && "conversation_precondition_failed" === t.errorCode
        }

        function ok(e) {
            return nU.object({
                conversation_id: nU.string().min(1)
            }).parse(e)
        }

        function oR(e) {
            return 412 === e.status && "conversation_precondition_failed" === e.errorCode
        }
        var oO = n("Sd4O");
        let oN = (0, p.d)(eo.a, (e, t) => {
            let {
                get: n
            } = t, a = n(oO.a, e);
            return null != a && n(L.e, a).data?.automation.plan_type === "language_learning"
        });
        var oG = n("AORd"),
            oB = n("J8FU"),
            oz = n("vpdG"),
            oF = n("OiCI"),
            oD = n("Sd8U"),
            oL = n("FNgK"),
            oH = n("nD1x");

        function oW(e) {
            let t, n, a = (0, r.c)(6),
                {
                    conversationId: s,
                    shouldBlockExternalEgress: o,
                    widgets: i
                } = e,
                l = (0, p.y)(oD.a);
            return a[0] !== s || a[1] !== l || a[2] !== o || a[3] !== i ? (t = () => {
                let e = new Map(i.map(e => [(0, aH.e)(s, e.messageId), e]));
                return l.watch(t => {
                    let {
                        get: n
                    } = t, a = n(oF.b), r = n(N.k);
                    for (let t of n(aN.j).keys()) {
                        let i = e.get(t);
                        if (null == i) continue;
                        let c = !0 === i.metadata.is_widget_closed || n(oH.a, {
                                accountId: a,
                                userId: r,
                                conversationId: s,
                                messageId: i.messageId
                            }),
                            d = "hidden" === i.sessionPresentation,
                            u = "tombstone" === i.sessionPresentation,
                            h = i.replacementMessageId;
                        if (o || c || !d && !u || null == h || n(oH.a, {
                                accountId: a,
                                userId: r,
                                conversationId: s,
                                messageId: h
                            }) || (0, oL.b)(l, t, (0, aH.e)(s, h)), c || d) {
                            (0, aN.y)(l, t);
                            continue
                        }
                        let p = l.get(aN.j).get(t),
                            m = p?.content.mcpAppHostAdapter;
                        null != p && null != m && (m.isTombstone !== u && (0, aN.x)(l, {
                            mcpAppId: t,
                            hostedInThreadScrollLayout: p.hostedInThreadScrollLayout,
                            ...p.content,
                            mcpAppHostAdapter: {
                                ...m,
                                isTombstone: u
                            }
                        }), u && null != p.sessionId && (0, aN.C)(l, p.sessionId, {
                            displayMode: "inline"
                        }))
                    }
                })
            }, n = [s, l, o, i], a[0] = s, a[1] = l, a[2] = o, a[3] = i, a[4] = t, a[5] = n) : (t = a[4], n = a[5]), (0, y.useLayoutEffect)(t, n), null
        }
        var oU = n("JVSG"),
            oq = {
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
            oK = n("nFye");
        let oV = (0, p.v)(eo.a, e => null);

        function oY() {
            let e, t, n, s, o, i, l, c, d, u, h, m, g, f, v, b = (0, r.c)(40),
                x = (0, _._)(),
                C = (0, y.useContext)(tN.a);
            b[0] === Symbol.for("react.memo_cache_sentinel") ? (e = {
                name: "chatgpt.conversations"
            }, b[0] = e) : e = b[0];
            let w = (0, p.x)(S.a, e),
                T = (0, p.z)(B.a),
                j = (0, _.bb)() ?? 0,
                {
                    conversationId: E
                } = (0, _.cb)(),
                {
                    search: A,
                    state: P
                } = (0, _.Y)(),
                M = (0, p.x)(nR.a, E ?? null),
                k = (0, p.x)(null == E || eT.d, M ?? E ?? ""),
                R = P?.archivedConversationPreview === !0;
            b[1] !== A ? (t = (0, ox.i)(A), b[1] = A, b[2] = t) : t = b[2];
            let O = t;
            b[3] !== R || b[4] !== O || b[5] !== E ? (n = null == E || (0, eN.e)(E) || O || R ? null : E, b[3] = R, b[4] = O, b[5] = E, b[6] = n) : n = b[6];
            let {
                data: N
            } = (0, p.x)(ae.chatGptConversationQueryById$, n);
            if (null == E) {
                let e;
                return b[7] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(_.l, {
                    to: "/",
                    replace: !0
                }), b[7] = e) : e = b[7], e
            }
            b[8] !== M || b[9] !== E ? (s = M ?? (0, eN.d)(E), b[8] = M, b[9] = E, b[10] = s) : s = b[10];
            let G = s,
                z = w.isCapable && !T && !k && null != N;
            b[11] !== x ? (o = e => (x((0, ox.c)(e)), !0), b[11] = x, b[12] = o) : o = b[12];
            let F = o;
            b[13] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(I.a, {}), l = (0, a.jsx)(tf.a.Surface, {}), b[13] = i, b[14] = l) : (i = b[13], l = b[14]), b[15] !== R ? (c = null, b[15] = R, b[16] = c) : c = b[16], b[17] !== G || b[18] !== R || b[19] !== O ? (d = O || R ? null : (0, a.jsx)(nH.a, {
                conversationId: G
            }), b[17] = G, b[18] = R, b[19] = O, b[20] = d) : d = b[20];
            let D = C ?? (z ? F : null),
                L = `${G}:${O}`;
            b[21] === Symbol.for("react.memo_cache_sentinel") ? (u = void 0, b[21] = u) : u = b[21], b[22] !== G || b[23] !== R || b[24] !== O || b[25] !== L || b[26] !== j ? (h = (0, a.jsx)(o$, {
                conversationId: G,
                viewActivation: j,
                isArchivedPreview: R,
                isReadOnlyPreview: !1,
                banner: u,
                isTemporaryChat: O,
                sharedConversationId: null
            }, L), b[22] = G, b[23] = R, b[24] = O, b[25] = L, b[26] = j, b[27] = h) : h = b[27], b[28] !== h || b[29] !== D ? (m = (0, a.jsx)(tN.a, {
                value: D,
                children: h
            }), b[28] = h, b[29] = D, b[30] = m) : m = b[30], b[31] !== m || b[32] !== c || b[33] !== d ? (g = (0, a.jsxs)(a.Fragment, {
                children: [i, l, c, d, m]
            }), b[31] = m, b[32] = c, b[33] = d, b[34] = g) : g = b[34];
            let H = g;
            return b[35] !== H ? (f = H, b[35] = H, b[36] = f) : f = b[36], b[37] !== G || b[38] !== f ? (v = (0, a.jsx)(ak.a, {
                conversationId: G,
                children: f
            }), b[37] = G, b[38] = f, b[39] = v) : v = b[39], v
        }

        function oQ() {
            let e, t, n, s = (0, r.c)(7),
                {
                    sharedConversationId: o
                } = (0, _.cb)();
            if (null == o) {
                let e;
                return s[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(_.l, {
                    to: "/",
                    replace: !0
                }), s[0] = e) : e = s[0], e
            }
            s[1] !== o ? (e = (0, eN.d)(o), s[1] = o, s[2] = e) : e = s[2];
            let i = e;
            return s[3] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(tf.a.Surface, {}), s[3] = t) : t = s[3], s[4] !== i || s[5] !== o ? (n = (0, a.jsxs)(a.Fragment, {
                children: [t, (0, a.jsx)(o$, {
                    conversationId: i,
                    isTemporaryChat: !1,
                    sharedConversationId: o
                }, o)]
            }), s[4] = i, s[5] = o, s[6] = n) : n = s[6], n
        }

        function o$(e) {
            let t, n, i, l, c, d, u, b, C, I, S, k, R, z, L, H, W, U, q, K, V, Y, Q, Z, en, ea, es, eo, el, ec, ed, eh, ep, em, eg, ef, ev, ey, eb, ex, eC, ew, eI, ej, eE, eA, eP, eM, ek, eR, eO, eG, eB, ez, eF, eD, eL, eH, eW, eU, eq, eK, eJ, eX, e0, e1, e2, e3, e4, e5, e6, e8, e9, tn, ta, tr, ts, to, ti, tl, td, tm, tg, tf, tv, ty, tb, tx, tC = (0, r.c)(687),
                {
                    conversationId: tT,
                    viewActivation: tA,
                    isArchivedPreview: tP,
                    isInlinePreview: tM,
                    hideModelPicker: tk,
                    disableAutoFocus: tR,
                    hideInitialUserMessage: tN,
                    transcriptPresentation: tK,
                    scrollOrigin: tY,
                    isReadOnlyPreview: tX,
                    onSubmitAccepted: t3,
                    isTemporaryChat: t4,
                    sharedConversationId: t5,
                    sharedPostContinuation: ne,
                    requiredSystemHints: nF,
                    routePattern: nL,
                    composerLeadingContent: nH,
                    header: nU,
                    banner: nq,
                    onRetryMissingConversation: nK,
                    sharedProjectConversation: nV,
                    workspace: nY
                } = e,
                nQ = void 0 === tA ? 0 : tA,
                n$ = void 0 !== tP && tP,
                nZ = void 0 !== tM && tM,
                nJ = (0, p.y)(D.a),
                nX = (0, y.useContext)(O.a),
                n0 = (0, p.x)(eS.f, nX),
                n1 = (0, p.z)(!!(void 0 !== ne && ne && (0, eS.b)(n0)) && B.a);
            tC[0] !== nX || tC[1] !== tT ? (t = {
                auth: nX,
                conversationId: tT
            }, tC[0] = nX, tC[1] = tT, tC[2] = t) : t = tC[2];
            let n2 = (0, p.x)(null != nX && !nX.isLoading && null === nX.authMethod && eS.i, t),
                {
                    conversationId: n3
                } = (0, _.cb)();
            tC[3] !== tT || tC[4] !== nZ || tC[5] !== n3 || tC[6] !== nJ || tC[7] !== nY ? (n = () => (0, eN.e)(nZ || null != nY || null == nJ.get(F.j, tT) ? tT : n3 ?? ""), tC[3] = tT, tC[4] = nZ, tC[5] = n3, tC[6] = nJ, tC[7] = nY, tC[8] = n) : n = tC[8];
            let [n4, n5] = (0, y.useState)(n);
            tC[9] !== n4 || tC[10] !== tT ? (i = () => n4 ? tT : null, tC[9] = n4, tC[10] = tT, tC[11] = i) : i = tC[11];
            let [n6] = (0, y.useState)(i), n8 = null != t5 || null != n0 && !n1;
            tC[12] !== tT || tC[13] !== n$ || tC[14] !== nZ || tC[15] !== n8 || tC[16] !== nJ ? (c = () => {
                if (!n8 && !n$ && !nZ) return function(e, t) {
                    let n = e.get(nR.a, t) ?? t,
                        a = e.get(ee.b, t),
                        r = e.get(nB, n),
                        s = null;
                    null != a && r?.attemptId === a && (s = r);
                    let o = {
                            attemptId: a,
                            observedTurn: s?.observedTurn ?? !1,
                            activeRequestId: s?.activeRequestId ?? null,
                            dismissed: s?.dismissed ?? !1,
                            initialCreationMessageIds: s?.initialCreationMessageIds ?? new Set,
                            openedCreatedPage: s?.openedCreatedPage ?? !1
                        },
                        i = e.get(nf.i),
                        l = o.observedTurn,
                        c = null;

                    function d(t) {
                        for (let n of t.toReversed())
                            if (!o.initialCreationMessageIds.has(n.messageId) && (0, nT.openSpacePageSidePanelTab)(e, n.pageId, {
                                    title: n.title,
                                    openSource: "turn_auto_open"
                                }).opened) {
                                o.openedCreatedPage = !0;
                                break
                            }
                    }
                    let u = e.watch(n => {
                        let {
                            get: a
                        } = n, r = a(F._, t), s = a(nf.i), u = a(F.ab, t);
                        if ((0, F.zb)(r)) {
                            l = !1;
                            let e = a(ee.b, t),
                                n = a(F.bb, t),
                                r = !o.observedTurn || o.attemptId !== e;
                            if (o.attemptId = e, r) {
                                let e = c;
                                c = null, e?.abort(), o.observedTurn = !0, o.activeRequestId = n, o.dismissed = u, o.openedCreatedPage = !1
                            } else o.activeRequestId = n ?? o.activeRequestId, o.dismissed = o.dismissed || u || i && !s;
                            i = s;
                            let h = !u && !o.dismissed && !s && !o.openedCreatedPage && !a(D.j) && !a(F.C, t) && !a(eT.d, t),
                                p = [];
                            if ((r || h) && (p = a(F.P, t) ?? []), r) {
                                o.initialCreationMessageIds = new Set(p.map(e => e.messageId));
                                return
                            }
                            h && d(p);
                            return
                        }
                        if (!o.observedTurn) return;
                        let h = a(F.v, t);
                        if ("idle" !== r || u || null != h && "completed" !== h.result || null != e.get(F.C, t) || e.get(D.j) || e.get(eT.d, t)) {
                            o.observedTurn = !1;
                            return
                        }
                        if (l) {
                            if (o.dismissed || s || o.openedCreatedPage || a(ee.b, t) !== o.attemptId) {
                                o.observedTurn = !1;
                                return
                            }
                            if (h?.result !== "completed") return;
                            d(a(F.P, t) ?? []), o.observedTurn = !o.openedCreatedPage;
                            return
                        }
                        if (o.observedTurn = !1, h?.result !== "completed" || h.requestId !== o.activeRequestId) return;
                        let p = e.get(F.L, t);
                        if (null == p) return;
                        let m = (0, g.b)({
                                mapping: p,
                                current_node: e.get(F.B, t)
                            }),
                            f = m.findLast(nG.b);
                        if (f?.status !== "finished_successfully") return;
                        let v = [...(0, nO.e)(m).outputs, ...m.flatMap(e => (0, nO.c)(e).map(e => e.file))],
                            y = e.get(nP.a, t)?.at(-1);
                        if (y?.turn.status !== "complete") return;
                        let b = [...(0, ny.b)(m), ...y.turn.items.flatMap(e => "chatgpt-reasoning-group" === e.type ? e.items : [e]).filter(e => "mcp-tool-call" === e.type)];
                        if (!((0, nv.a)(e, b, !o.dismissed) || !o.dismissed && !o.openedCreatedPage && (0, nS.a)(e, b)) && !o.dismissed && !s && !o.openedCreatedPage) {
                            for (let t of (0, nI.c)((0, g.e)(f)).toReversed())
                                if ((0, nT.openSpacePageSidePanelTab)(e, t.id, {
                                        openSource: "turn_auto_open",
                                        blockId: t.blockId
                                    }).opened) return;
                            if ((0, nN.canOpenChatGptFilePreview)({
                                    browserPreview: !0
                                })) {
                                for (let n of y.turn.items)
                                    if ("assistant-message" === n.type && n.completed)
                                        for (let [a, r] of n.contentReferences.entries()) {
                                            let s = (0, nM.a)(r),
                                                o = null == s ? null : (0, nb.a)(s),
                                                i = v.find(e => null != e.fileId && e.fileId === (r.file_id ?? r.id) || null != e.libraryFileId && e.libraryFileId === r.library_file_id);
                                            if ("file" !== r.type || !(0, ng.a)(r) || null == s || null == o || !(0, nb.f)(o) || null == i && null == (0, nk.b)(r.sandbox_path) && !(0, nk.b)(r.matched_text)?.includes("sandbox:") || i?.sizeBytes != null && i.sizeBytes > n_.a) continue;
                                            let l = n.contentReferenceMessageIds?.[a] ?? n.messageId,
                                                d = (0, nA.b)(r, {
                                                    fileName: s,
                                                    messageId: l
                                                });
                                            if (null == d) continue;
                                            if (e.get(t0.f)?.getExperiment("1965446322").get("enable_artifact_preview_auto_open", !1) !== !0) return;
                                            let u = e.get(F.j, t) ?? t,
                                                h = `${l??"message"}:${String(a)}:${s}`,
                                                p = `chatgpt-file:${u}:${h}`,
                                                g = {
                                                    turnId: y.id,
                                                    inputMessageId: m.find(e => "user" === e.author.role)?.id ?? null,
                                                    messageId: l ?? null
                                                },
                                                f = new AbortController,
                                                b = (0, nN.openChatGptFile)(e, {
                                                    conversationId: u,
                                                    fileName: s,
                                                    gizmoId: e.get(F.R, t),
                                                    sharedConversationId: e.get(F.Y, t),
                                                    target: d,
                                                    tabKey: h,
                                                    browserPreview: !0,
                                                    isAccessBlocked: e => e.get(eT.d, t),
                                                    downloadFallback: !1,
                                                    openSource: "auto_open",
                                                    originatingTurn: g,
                                                    signal: f.signal,
                                                    onOpened: () => {
                                                        let t = e.get(M.j.activeTab$);
                                                        f.signal.aborted || t?.tabId !== p || t.tabType.kind !== nx.a || ((0, eu.a)(e, nm.CodexFileOpened, {
                                                            threadId: u,
                                                            turnId: g.turnId,
                                                            inputMessageId: g.inputMessageId ?? void 0,
                                                            messageId: g.messageId ?? void 0,
                                                            fileExtension: (0, nC.c)(s) ?? void 0,
                                                            openSource: "auto_open",
                                                            openDestination: "codex_preview"
                                                        }), (0, eu.a)(e, nm.CodexWorkspaceFilePreviewAttempted, (0, nw.a)({
                                                            modifiedClick: !1,
                                                            openedSidePanelTarget: "artifact",
                                                            openSource: "auto_open",
                                                            originatingTurn: g,
                                                            path: s,
                                                            threadId: u,
                                                            windowType: "browser"
                                                        })), (0, nj.b)(e, p, "auto_open"))
                                                    },
                                                    onClose: () => f.abort()
                                                });
                                            c = f;
                                            let x = e.watch(e => {
                                                let {
                                                    get: n
                                                } = e;
                                                (n(nf.i) && n(M.j.activeTab$)?.tabId !== p || n(eT.d, t)) && f.abort()
                                            });
                                            b.catch(e => {
                                                f.signal.aborted || nE.a.debug("Automatic ChatGPT artifact preview could not open", {
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
                        u(), c?.abort(), null != o.attemptId && e.set(nB, n, {
                            ...o,
                            attemptId: o.attemptId
                        })
                    }
                }(nJ, tT)
            }, l = [tT, n$, nZ, n8, nJ], tC[12] = tT, tC[13] = n$, tC[14] = nZ, tC[15] = n8, tC[16] = nJ, tC[17] = l, tC[18] = c) : (l = tC[17], c = tC[18]), (0, y.useEffect)(c, l);
            let an = (0, p.x)(a2.a, tT),
                ar = n8 ? null : an;
            tC[19] !== t5 ? (d = () => null == t5 ? null : (0, eN.b)(), tC[19] = t5, tC[20] = d) : d = tC[20];
            let [as] = (0, y.useState)(d), ao = as ?? tT;
            tC[21] !== ao ? (u = (0, tQ.o)({
                routeKind: "chatgpt-thread",
                conversationId: ao
            }), tC[21] = ao, tC[22] = u) : u = tC[22];
            let ai = null != (0, p.x)(tG.c, u);
            tC[23] !== ao || tC[24] !== nF || tC[25] !== nJ ? (b = () => {
                if (null != nF && 0 !== nF.length) return (0, tt.b)(nJ, ao, nF)
            }, C = [ao, nF, nJ], tC[23] = ao, tC[24] = nF, tC[25] = nJ, tC[26] = b, tC[27] = C) : (b = tC[26], C = tC[27]), (0, y.useEffect)(b, C);
            let al = (0, y.useRef)(null),
                [ac, ad] = (0, y.useState)(null),
                [au, ah] = (0, y.useState)(null),
                [ap, am] = (0, y.useState)(null),
                ag = au?.activation === nQ ? au.messageId : null,
                av = ap === nQ,
                ay = (0, y.useRef)(null);
            tC[28] === Symbol.for("react.memo_cache_sentinel") ? (I = () => {
                let e = new AbortController;
                return ay.current = e, () => e.abort()
            }, tC[28] = I) : I = tC[28], tC[29] !== nQ ? (S = [nQ], tC[29] = nQ, tC[30] = S) : S = tC[30], (0, y.useLayoutEffect)(I, S);
            let aC = (0, x.a)(),
                a_ = (0, _._)(),
                aw = (0, nt.c)(),
                aI = (0, p.x)(F.j, tT);
            tC[31] !== nJ ? (k = e => {
                (0, nz.c)(nJ, e)
            }, tC[31] = nJ, tC[32] = k) : k = tC[32];
            let aS = (0, y.useEffectEvent)(k);
            tC[33] !== aI || tC[34] !== aS ? (R = () => () => {
                null != aI && aS(aI)
            }, tC[33] = aI, tC[34] = aS, tC[35] = R) : R = tC[35], tC[36] !== aI ? (z = [aI], tC[36] = aI, tC[37] = z) : z = tC[37], (0, y.useEffect)(R, z);
            let aE = (0, p.x)(og.b, tT),
                aA = (0, p.x)(F.L, tT),
                aP = (0, p.x)(ae.chatGptConversationQueryById$, n8 || t4 && null != aA ? null : aI);
            (0, p.x)(n8 ? null : aa.a, aI);
            let aM = (0, p.x)(!n2 && eT.d, tT),
                ak = aI ?? tT,
                aR = (0, p.x)(F.B, tT),
                aN = (0, p.x)(F.x, tT),
                aG = (0, p.x)(F.R, tT),
                aB = (0, p.x)(F.C, tT),
                az = (0, p.x)(F.M, tT),
                aF = (0, p.x)(F._, tT),
                aD = (0, p.x)(F.V, tT),
                aL = (0, p.x)(F.X, tT),
                aW = (0, p.x)(ax.a, tT),
                aU = (0, p.x)(F.D, tT),
                aq = (0, p.x)(F.cb, tT),
                aK = (0, p.x)(F.db, tT),
                aV = (0, p.x)(ae.n, t5),
                aY = (0, y.useRef)(null),
                aQ = aV.isSuccess && null != aV.data ? t5 : null;
            tC[38] !== nJ ? (L = e => {
                (0, eu.a)(nJ, s.h, {
                    actor: "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER",
                    action: "CHATGPT_SHARE_FLOW_ACTION_SHARED_CONTENT_VIEWED",
                    contentType: "CHATGPT_SHARE_FLOW_CONTENT_TYPE_SHARED_CONVERSATION",
                    availability: "CHATGPT_SHARE_FLOW_AVAILABILITY_COMPLETE",
                    shareId: e
                })
            }, tC[38] = nJ, tC[39] = L) : L = tC[39];
            let a$ = (0, y.useEffectEvent)(L);
            tC[40] !== aQ || tC[41] !== a$ ? (H = () => {
                null != aQ && aY.current !== aQ && (aY.current = aQ, a$(aQ))
            }, tC[40] = aQ, tC[41] = a$, tC[42] = H) : H = tC[42], tC[43] !== aQ ? (W = [aQ], tC[43] = aQ, tC[44] = W) : W = tC[44], (0, y.useEffect)(H, W);
            let aZ = (0, p.x)(e7.o, tT),
                a0 = (0, p.x)(e7.p, tT),
                a1 = (0, p.x)(e7.m, tT),
                re = (0, p.x)(e7.q, tT),
                rn = (0, p.x)(e7.n, tT),
                ra = (0, p.x)(e7.i, tT),
                rr = (0, p.x)(F.ab, tT),
                rs = (0, p.x)(e7.z, tT);
            tC[45] !== aF ? (U = (0, F.zb)(aF), tC[45] = aF, tC[46] = U) : U = tC[46];
            let ro = U,
                ri = (0, p.x)(a4, tT),
                rl = (0, p.z)(G.t),
                rc = (0, p.z)(G.q),
                rd = (0, p.z)(G.s),
                rp = (0, p.z)(G.l),
                rS = (0, p.z)(G.m),
                rj = (0, p.z)(tD.pagesEnabled$);
            tC[47] === Symbol.for("react.memo_cache_sentinel") ? (q = (0, tO.a)(), tC[47] = q) : q = tC[47];
            let rE = (0, ei.h)(q);
            tC[48] === Symbol.for("react.memo_cache_sentinel") ? (K = (0, tO.b)(), tC[48] = K) : K = tC[48];
            let rA = (0, ei.h)(K),
                rP = null != aA,
                rM = (0, p.z)(sW.f),
                rk = n8 ? aV : aP;
            n4 && null != rk.data && n5(!1);
            let rO = n4 && rP && null == rk.data,
                rN = rk.isLoading || !rO && rk.isError;
            tC[49] !== ac || tC[50] !== ao || tC[51] !== rN || tC[52] !== n8 || tC[53] !== t4 || tC[54] !== nJ ? (V = (e, t, n, a) => {
                !(e || nJ.get(tV.a)) && ((0, e7.b)(nJ, ao, t, void 0, n, a), ac?.focus(), n8 || rN || (0, n9.f)(nJ, ao, {
                    isTemporaryChat: t4
                }))
            }, tC[49] = ac, tC[50] = ao, tC[51] = rN, tC[52] = n8, tC[53] = t4, tC[54] = nJ, tC[55] = V) : V = tC[55];
            let rG = V,
                rF = null == n0 ? null : (0, on.a)(n0, tT),
                rD = null == rF ? void 0 : (0, sE.a)(rF),
                rH = rF ?? rk.data,
                rU = aU ? aq : rH?.title,
                rq = (0, p.z)(N.h),
                rK = (0, p.z)(N.g),
                rV = "chatgpt-thread" === nJ.value.routeKind && nJ.value.workSideChat?.conversationId === tT,
                rY = rH?.conversation_origin ?? aN ?? (null != nY || rV ? "tpp" : null),
                rQ = "tpp" === rY,
                r$ = rQ && "denied" === rl.status && "go-plan" === rl.reason,
                rZ = (0, p.z)(t1.d),
                rJ = (0, _.Y)(),
                rX = rJ.state;
            (0, p.z)(tZ.b);
            let r0 = (0, p.x)(t0.d, "3901104270") && rX?.openGoalPlan === !0,
                r1 = (0, y.useContext)(P.c),
                r2 = (0, t9.a)(),
                r3 = r1?.hasPageSurface === !0,
                r4 = "tpp" === rY || "flora" === rY,
                r5 = (0, ei.h)("2871250183"),
                r6 = (0, p.z)(!!r4 && G.u),
                r8 = void 0 !== tX && tX || r6,
                r7 = null == rZ || rZ.isFullWidth ? void 0 : rZ.width ?? 420,
                r9 = !0 === (0, p.z)(r4 ? null : nl.d),
                st = (0, p.z)(r4 ? tq.b : tq.a),
                sn = !r4 && st,
                sa = !rA || rS && !r4,
                sr = !n8 && rS && !r4,
                ss = sr && rp,
                so = n8 && rH?.is_read_only === !0 || nV?.is_read_only === !0;
            tC[56] !== tT || tC[57] !== n8 || tC[58] !== nJ ? (Y = () => null, tC[56] = tT, tC[57] = n8, tC[58] = nJ, tC[59] = Y) : Y = tC[59];
            let [si] = (0, y.useState)(Y), sl = rH?.gizmo_id ?? aG ?? si?.gizmoId ?? null, sc = n8 || null == sl || (0, te.a)(sl) ? null : sl, su = (0, p.x)(oV, ao), sp = (0, af.d)({
                conversation: rH,
                conversationId: tT,
                conversationTitle: aW,
                pathname: rJ.pathname,
                sharedConversationId: t5,
                sharedPost: n0
            }), sm = !rd && null == rH && null == si, sg = null != aI && !aM && !sm && (rd || rc), sb = null;
            n8 || (sb = null != rH ? (0, se.B)(rH) : (0, te.a)(aG) ? aG : si?.projectId ?? null);
            let sx = (0, p.x)(nu.c, n8 ? null : tT),
                sC = n8 || r4 || null != sb || sx || null == su ? sc : su.id,
                sw = (0, p.x)(sM.d, {
                    gizmoId: sC,
                    conversationId: ao,
                    visitKey: rJ.pathname
                }),
                sI = r3 || r4 || null != sb || null != sc || sx || t4,
                {
                    data: sA
                } = (0, o.a)({
                    enabled: null != sb,
                    queryFn: () => {
                        if (null == sb) throw Error("Expected a ChatGPT project id");
                        return (0, eY.c)(sb)
                    },
                    queryKey: (0, se.E)(sb ?? ""),
                    staleTime: e_.b.ONE_MINUTE
                }),
                sk = null != sb && (sA?.gizmo.share_recipient !== "private" || (sA?.gizmo.sharing?.subjects?.length ?? 0) > 0),
                sR = rH?.context_scopes?.includes("HEALTH") === !0 || sA?.gizmo.gizmo_snorlax_type === "potion",
                sO = (0, sz.a)(rH?.context_scopes, {
                    projectType: sA?.gizmo.gizmo_snorlax_type,
                    projectId: sb,
                    lockedProjectId: rM?.projectId
                }),
                sN = aM || sk || sR || sO;
            tC[60] !== sA?.gizmo.display.name ? (Q = sA?.gizmo.display.name.trim() || null, tC[60] = sA?.gizmo.display.name, tC[61] = Q) : Q = tC[61];
            let sG = Q,
                sF = sA?.gizmo.display.theme,
                sL = sA?.gizmo.display.emoji;
            tC[62] !== sA ? (Z = "shared" === (0, rt.b)(sA) ? (0, a.jsx)(t_.b, {
                icon: {
                    assets: {
                        16: oq,
                        20: oK.a
                    }
                }
            }) : void 0, tC[62] = sA, tC[63] = Z) : Z = tC[63], tC[64] !== sF || tC[65] !== sL || tC[66] !== Z ? (en = (0, a.jsx)(tW.a, {
                className: "icon-leading",
                size: "leading",
                color: sF,
                icon: sL,
                sharedIcon: Z
            }), tC[64] = sF, tC[65] = sL, tC[66] = Z, tC[67] = en) : en = tC[67];
            let sU = en,
                sq = (0, p.x)(F.i, tT),
                sK = sq?.metadata ?? rH?.context_truncation_continuation,
                sV = n8 || t4 || null != nV || null == rq || rH?.owner?.user_id == null || null == sb || rH.owner.user_id === (rK ? rq.split("__")[0] : rq) ? null : (0, sf.d)(sb, rH.conversation_id, rH.owner.user_id),
                sY = (0, p.x)(n8 || n$ || r8 ? null : sZ.c, tT),
                sQ = sY?.isReviewing === !0,
                sJ = null == sY ? aA : sY.conversation.mapping,
                sX = null == sY ? aR : sY.conversation.current_node,
                s0 = null == aA ? rH : null,
                s1 = sJ ?? s0?.mapping,
                s2 = (0, ei.k)();
            tC[68] !== s1 || tC[69] !== s2 ? (ea = function(e, t) {
                if (null != e && Object.values(e).some(e => e?.message != null && (0, sB.b)(e.message))) return () => (0, ei.f)(t, "2347981323").get("enabled", !1)
            }(s1, s2), tC[68] = s1, tC[69] = s2, tC[70] = ea) : ea = tC[70];
            let s3 = ea,
                s4 = (0, p.z)(null != s3 ? ns.h : void 0),
                s5 = (0, p.x)(null != s3 && !n8 && !n$ && !sQ && na.a, tT),
                s6 = (0, p.z)(s5 ? nr.a : void 0);
            tC[71] === Symbol.for("react.memo_cache_sentinel") ? (es = (0, at.a)(), tC[71] = es) : es = tC[71];
            let s8 = es;
            tC[72] === Symbol.for("react.memo_cache_sentinel") ? (eo = new WeakMap, tC[72] = eo) : eo = tC[72];
            let s7 = eo;
            tC[73] !== st || tC[74] !== sn || tC[75] !== sK || tC[76] !== rY || tC[77] !== sX || tC[78] !== sJ || tC[79] !== r5 || tC[80] !== s3 || tC[81] !== s0 || tC[82] !== n$ || tC[83] !== n8 || tC[84] !== ro || tC[85] !== r4 || tC[86] !== az || tC[87] !== a1 || tC[88] !== rn || tC[89] !== aZ || tC[90] !== a0 || tC[91] !== re || tC[92] !== sQ || tC[93] !== nJ.get || tC[94] !== sY?.isEntering || tC[95] !== aE || tC[96] !== aF || tC[97] !== s6 || tC[98] !== s4 ? (el = () => s8({
                conversation: s0,
                contextContinuation: sK,
                clinicalSearchEnabled: sn,
                clinicalCitationsEnabled: st,
                enableCloudBrowserActivity: r5,
                conversationOrigin: rY,
                enableVoiceImageLoadingFix: s3,
                voiceImageSessionId: s4,
                voiceImageGenerationSpawnIds: s6,
                enableImageGenerationLoadingState: !n8 && !n$ && !sQ && "error" !== aF,
                getRenderTelemetry: e => (0, oB.c)(nJ.get, e),
                isWorkConversation: r4,
                isStreaming: !n8 && !n$ && !sQ && ro,
                mode: "conversation",
                mcpResponseCache: s7,
                moderationDisclaimersByMessageId: az,
                streamingOrders: aE,
                pendingSubmission: null == aZ || n8 || sQ || sY?.isEntering ? null : {
                    attachments: a1,
                    commentAttachments: rn,
                    prompt: aZ,
                    renderMarkdown: a0,
                    selectedTextAttachments: re
                },
                threadCurrentNode: sX,
                threadMapping: sJ
            }), tC[73] = st, tC[74] = sn, tC[75] = sK, tC[76] = rY, tC[77] = sX, tC[78] = sJ, tC[79] = r5, tC[80] = s3, tC[81] = s0, tC[82] = n$, tC[83] = n8, tC[84] = ro, tC[85] = r4, tC[86] = az, tC[87] = a1, tC[88] = rn, tC[89] = aZ, tC[90] = a0, tC[91] = re, tC[92] = sQ, tC[93] = nJ.get, tC[94] = sY?.isEntering, tC[95] = aE, tC[96] = aF, tC[97] = s6, tC[98] = s4, tC[99] = el) : el = tC[99], sY?.isEntering, tC[100] !== el ? (ec = el(), tC[100] = el, tC[101] = ec) : ec = tC[101];
            let {
                isConversationEmpty: s9,
                renderedConversation: ot,
                renderedTurns: or,
                showPendingLoadingMessage: os
            } = ec;
            tC[102] !== nZ || tC[103] !== r4 || tC[104] !== ot || tC[105] !== nJ ? (ed = () => {
                if (!nZ && r4) return nJ.set(oU.b, ot), () => {
                    nJ.get(oU.b) === ot && nJ.set(oU.b, null)
                }
            }, eh = [nZ, r4, ot, nJ], tC[102] = nZ, tC[103] = r4, tC[104] = ot, tC[105] = nJ, tC[106] = ed, tC[107] = eh) : (ed = tC[106], eh = tC[107]), (0, y.useEffect)(ed, eh);
            let oo = (0, p.x)(nh.g, tT),
                oi = os && null == oo,
                ol = !r4 && !n8 && !nZ && !n$,
                oc = (0, p.x)(sn || nZ || n8 ? null : X.a, tT),
                od = (oc?.length ?? 0) > 0,
                oh = (0, p.x)(ol ? ee.b : null, tT),
                op = JSON.stringify([tT, nQ]),
                om = (0, p.x)(n8 || nZ ? null : oN, tT),
                [of, ov] = (0, y.useState)(null),
                oy = function(e, t) {
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
                    let d = null == n ? [] : (0, g.b)(n, eQ.k),
                        u = null == e || e.visitKey !== c,
                        h = d.find(eQ.k)?.id ?? (u || i ? null : e.userMessageId),
                        p = i ? null : d.findLast(e$)?.id ?? null,
                        m = !u && (i && !e.isPendingUserTurn || !e.isPendingUserTurn && null != h && (null != e.userMessageId || !e.isTurnActive && null != a && a !== e.completionAttemptId) && e.userMessageId !== h),
                        f = new Set(u ? [] : e.observedSummaryRequestIds),
                        v = !u && !m && e.hasConsumedSummaryRequest,
                        y = !v && !u && null != e.conversation && (o || e.isTurnActive || null != a && e.completionAttemptId !== a) && null != p && !f.has(p);
                    if (null != n && (u || null == e.conversation || !o))
                        for (let e of Object.values(n.mapping)) e?.message?.id != null && e$(e.message) && f.add(e.message.id);
                    else null != p && f.add(p);
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
                        userMessageId: h,
                        hasConsumedSummaryRequest: v || null != p,
                        isOpen: s ? !u && e.suppressAutoOpen && e.isOpen : r && (l && (u || !e.hasGoal) || y) || !u && (!m || l) && (!e.hasGoal || l) && e.isOpen,
                        shouldPreventAutoFocus: u || m || l && !e.hasGoal || y && !e.isOpen || e.shouldPreventAutoFocus
                    }
                }(of, {
                    completionAttemptId: oh,
                    allowAutoOpen: !(0, tE.a)("(width < 768px)"),
                    suppressAutoOpen: (om ?? !1) || r0,
                    conversation: ol && (rO || !rN) ? ot : null,
                    isTurnActive: ro,
                    hasGoal: od,
                    isPendingUserTurn: ra && null != aZ && !ro,
                    visitKey: op
                });
            oy !== of && ov(oy);
            let ob = null == nY && !om && !sn && !nZ && !n8 && (rQ || ol) && !n$,
                oC = ob && ot?.mapping === aA && ot?.current_node === aR,
                o_ = (0, p.x)(oC ? F.p : null, tT),
                ow = ot?.mapping,
                oI = ot?.current_node;
            tC[108] !== ow || tC[109] !== oI ? (ep = h()(() => {
                let e = null == ow ? [] : (0, g.a)({
                    mapping: ow,
                    current_node: oI
                });
                return {
                    messages: e,
                    resources: (0, nO.e)(e)
                }
            }), tC[108] = ow, tC[109] = oI, tC[110] = ep) : ep = tC[110];
            let oT = ep;
            tC[111] !== ol || tC[112] !== ra || tC[113] !== ob || tC[114] !== ro || tC[115] !== rj || tC[116] !== a1 || tC[117] !== oT || tC[118] !== or || tC[119] !== o_ ? (em = ob ? h()(() => (function(e) {
                var t;
                let n, a, {
                        automationReferences: r,
                        includePages: s = !1,
                        includeSources: o = !0,
                        messages: i,
                        pendingAttachments: l = [],
                        resources: c = (0, nO.e)(i),
                        turns: d,
                        isTurnActive: u = d.at(-1)?.turn.status === "in_progress"
                    } = e,
                    h = [...c.inputs],
                    p = o ? (0, rC.a)(i, d) : [],
                    m = new Map,
                    f = new Map,
                    v = (t = i, -1 !== (n = rm()(t, e => e?.recipient === "turn_plan.update_turn_plan" && (0, rI.b)(e)?.item?.type === "todo-list")) && t.slice(n + 1).some(e => "assistant" === e.author.role && "final" === e.channel && "all" === e.recipient && "finished_successfully" === e.status)),
                    y = [],
                    b = new Map(i.map(e => [(0, g.g)(e), e])),
                    x = rm()(i, e => "user" === e.author.role),
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
                    if (o && "complete" === t.status)
                        for (let n of t.messageIds) {
                            let t = b.get(n);
                            t?.author.role === "assistant" && ("finished_successfully" === t.status || "finished_partial_completion" === t.status) && (0, rx.j)(t.metadata) && y.push({
                                messageId: n,
                                turnId: e,
                                deletedMemoryCitationUuids: (0, rx.c)(t.metadata)
                            })
                        }
                    for (let n of rT(t.items)) {
                        if (s && "mcp-tool-call" === n.type) {
                            let e = (0, ry.b)(n);
                            if (null != e && (e.activities.includes("created") || e.activities.includes("updated"))) {
                                let t = (0, rg.d)(e.url);
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
                        if (s && "assistant-message" === n.type && n.completed)
                            for (let e of (0, nI.c)(n.content)) f.has(e.id) || f.set(e.id, {
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
                let _ = (0, rf.b)(d.flatMap(e => {
                    let {
                        turn: t
                    } = e;
                    return rT(t.items).filter(e => "mcp-tool-call" === e.type)
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
                    automationIds: (0, rb.b)(i, r ?? void 0),
                    browserScreenshots: (0, r_.c)(i),
                    inputs: h,
                    sourceTurns: y,
                    outputs: a,
                    progressSteps: C,
                    isPlanSummaryUpdating: u && i.slice(x + 1).some(e => "assistant" === e.author.role && rb.a.test(e.recipient ?? "") || "tool" === e.author.role && rb.a.test(e.author.name ?? "")),
                    planSummaryRefreshKey: `${d.at(-1)?.id??""}:${u}`,
                    sources: o ? [...Array.from(new Map(i.filter(e => "user" === e.author.role).flatMap(e => (0, rv.a)((0, g.e)(e))).map(e => [e.projectId, e])).values(), e => ({
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
                    subagents: (0, rw.a)(i, {
                        isTurnLive: d.at(-1)?.turn.status === "in_progress"
                    })?.subagents ?? []
                }
            })({
                automationReferences: o_,
                includePages: rj,
                includeSources: !ol,
                isTurnActive: ro || ra,
                ...oT(),
                pendingAttachments: ra ? a1 : [],
                turns: or
            })) : null, eg = ol ? em?.() : null, tC[111] = ol, tC[112] = ra, tC[113] = ob, tC[114] = ro, tC[115] = rj, tC[116] = a1, tC[117] = oT, tC[118] = or, tC[119] = o_, tC[120] = em, tC[121] = eg) : (em = tC[120], eg = tC[121]);
            let oj = eg,
                oE = od || null != oj && (oj.outputs.length > 0 || oj.progressSteps.length > 0 || oj.automationIds.length > 0 || oj.subagents.length > 0 || !aM && oj.browserScreenshots.length > 0),
                oA = ob && (!ol || oE),
                oP = oA && null == rZ,
                oM = JSON.stringify([op, null != rZ]),
                ok = ol ? oy.isOpen : void 0,
                oR = oA && !rZ?.isFullWidth;
            tC[122] !== r7 || tC[123] !== oM || tC[124] !== ok || tC[125] !== oR ? (ef = {
                contentShiftResetKey: oM,
                controlledIsOpen: ok,
                isEnabled: oR,
                floatingPanelWidth: r7
            }, tC[122] = r7, tC[123] = oM, tC[124] = ok, tC[125] = oR, tC[126] = ef) : ef = tC[126];
            let oO = (0, t8.a)(ef),
                oG = aI ?? tT,
                oz = rQ && null == aK,
                oF = aB ?? rs,
                oD = rk.isLoading && !rP,
                oL = rk.isError && !rO;
            tC[127] !== rk.error || tC[128] !== nZ ? (ev = nZ || (0, no.e)(rk.error) || !(rk.error instanceof no.a && [401, 403, 404].includes(rk.error.status)), tC[127] = rk.error, tC[128] = nZ, tC[129] = ev) : ev = tC[129];
            let oH = ev;
            tC[130] !== rk.error || tC[131] !== tT || tC[132] !== oL || tC[133] !== nZ || tC[134] !== nJ || tC[135] !== t5 ? (ey = () => {
                oL && !nZ && tL.a.loadFailed(nJ, tT, t5, rk.error)
            }, eb = [rk.error, tT, oL, nZ, nJ, t5], tC[130] = rk.error, tC[131] = tT, tC[132] = oL, tC[133] = nZ, tC[134] = nJ, tC[135] = t5, tC[136] = ey, tC[137] = eb) : (ey = tC[136], eb = tC[137]), (0, y.useEffect)(ey, eb), tC[138] !== tT || tC[139] !== n8 || tC[140] !== aI ? (ex = null, n8 || (ex = aI ?? ((0, eN.e)(tT) ? null : tT)), tC[138] = tT, tC[139] = n8, tC[140] = aI, tC[141] = ex) : ex = tC[141], tC[142] !== ag || tC[143] !== rH || tC[144] !== rY || tC[145] !== aC || tC[146] !== t4 || tC[147] !== r4 || tC[148] !== r$ || tC[149] !== a_ || tC[150] !== ex || tC[151] !== nL || tC[152] !== nJ || tC[153] !== nQ ? (eC = (e, t) => {
                let n = void 0 !== t && t;
                if (null == ex || null != ag || r$) return;
                let a = ay.current?.signal;
                null == a || a.aborted || (ah({
                    messageId: e,
                    activation: nQ
                }), (0, F.h)(nJ, {
                    conversationId: ex,
                    messageId: e,
                    inWorkMode: n
                }).then(e => {
                    let {
                        clientThreadId: t
                    } = e;
                    a.aborted || (n && (0, nc.a)(nJ, "opened"), a_(null == nL ? (0, ox.c)(t, {
                        isTemporaryChat: t4
                    }) : (0, _.C)(nL, {
                        conversationId: t
                    })))
                }).catch(() => {
                    a.aborted || (n && (0, nc.a)(nJ, "failed"), ah(null), nJ.get(er.f).danger(aC.formatMessage({
                        id: "chatgptConversations.branchFailed",
                        defaultMessage: "Failed to create chat",
                        description: "Error shown when ChatGPT cannot continue a conversation in a new chat"
                    }), {
                        errorAnalytics: {
                            toastId: "branch_conversation_failed",
                            operation: "branch_conversation",
                            errorCategory: "conversation",
                            conversationId: ex ?? void 0,
                            retryable: !0,
                            userFacingError: {
                                surface: (0, aT.b)(null == rY && null == rH ? null : r4),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    }))
                }))
            }, tC[142] = ag, tC[143] = rH, tC[144] = rY, tC[145] = aC, tC[146] = t4, tC[147] = r4, tC[148] = r$, tC[149] = a_, tC[150] = ex, tC[151] = nL, tC[152] = nJ, tC[153] = nQ, tC[154] = eC) : eC = tC[154];
            let oY = (0, nn.a)(eC);
            tC[155] !== rH || tC[156] !== tT || tC[157] !== rY || tC[158] !== aC || tC[159] !== r9 || tC[160] !== t4 || tC[161] !== r4 || tC[162] !== nJ || tC[163] !== aI ? (ew = async (e, t, n, a) => {
                if (!r9) try {
                    await async function(e, t) {
                        let {
                            conversationId: n,
                            isTemporaryChat: a = !1,
                            messageId: r,
                            prompt: s,
                            renderFormat: o,
                            inlineSystemHints: i
                        } = t;
                        if (e.get(e7.i, n)) throw new aX.a("edit_message_busy", "The chat is busy.");
                        let l = e.get(F.x, n);
                        if ("tpp" === l) throw new aX.a("edit_message_unsupported_conversation", "Work messages cannot be edited with the Chat flow.");
                        if (!e.get(a4, n)) throw new aX.a("edit_message_busy", "The chat is busy.");
                        let c = e.get(aJ.b, {
                            conversationId: n,
                            messageId: r
                        });
                        if (null == c) throw new aX.a("edit_message_target_unavailable", "The user message could not be edited.");
                        let {
                            selectedModel: d
                        } = c, u = s.trim(), h = (0, aJ.c)(c.message, e.get, i), p = (0, a3.c)({
                            message: c.message,
                            prompt: u,
                            renderFormat: o,
                            systemHints: h,
                            inlineSystemHints: i
                        }), m = (0, f.f)(p.message.metadata), g = p.message.content, v = "multimodal_text" === g.content_type && g.parts.some(e => "string" != typeof e);
                        if (0 === u.length && 0 === m.length && !v) throw new aX.a("edit_message_empty", "The edited message cannot be empty.");
                        if (e.get(t0.d, "3574573347")) {
                            let t = e.get(aJ.a, n);
                            t?.messageId === r && t.prompt === s && aO()((0, aJ.c)(c.message, e.get, t.inlineSystemHints), h) || (e.set(aJ.a, n, {
                                messageId: r,
                                prompt: s,
                                isTemporaryChat: a,
                                inlineSystemHints: i
                            }), (0, n9.f)(e, n, {
                                isTemporaryChat: a
                            }))
                        }
                        let y = a5(e.get, n),
                            b = y.request.current,
                            x = () => a5(e.get, n).request.current === b && aO()(e.get(aJ.b, {
                                conversationId: n,
                                messageId: r
                            }), c) && !(0, F.zb)(e.get(F._, n));
                        e.set(e7.i, n, !0);
                        try {
                            if ("flora" !== l && null != b && null == e.get(y.session$) && null == e.get(a2.a, n) && (await b.stop(), await b.closed), !x()) throw new aX.a("edit_message_target_unavailable", "The edited message or active response changed.");
                            await (0, a3.submitChatGPTCompletion)(e, {
                                isSubmissionCurrent: x,
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
                    }(nJ, {
                        conversationId: tT,
                        isTemporaryChat: t4,
                        messageId: e,
                        prompt: t,
                        inlineSystemHints: a,
                        renderFormat: n
                    })
                } catch (t) {
                    let e = (0, aT.c)(t);
                    throw nJ.get(er.f).danger(aC.formatMessage({
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
                            conversationId: aI ?? void 0,
                            userFacingError: {
                                ...e,
                                surface: (0, aT.b)(null == rY && null == rH ? null : r4),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    }), t
                }
            }, tC[155] = rH, tC[156] = tT, tC[157] = rY, tC[158] = aC, tC[159] = r9, tC[160] = t4, tC[161] = r4, tC[162] = nJ, tC[163] = aI, tC[164] = ew) : ew = tC[164];
            let oQ = (0, nn.a)(ew);
            tC[165] !== ao || tC[166] !== rH || tC[167] !== tT || tC[168] !== rY || tC[169] !== aC || tC[170] !== r9 || tC[171] !== t4 || tC[172] !== r4 || tC[173] !== r$ || tC[174] !== a_ || tC[175] !== nK || tC[176] !== nJ || tC[177] !== aI ? (eI = async (e, t) => {
                if (!r9 && !r$) try {
                    let n = nJ.get(aj.d, tT);
                    if (n?.startsNewWorkConversation || null == nJ.get(F.j, tT) || (0, np.j)(nJ.get(F.T, tT)?.metadata?.errorCode)) {
                        if (n?.message.id !== e) return;
                        let a = (0, g.e)(n.prompt),
                            r = (0, eV.i)(n.prompt.metadata, a, (0, f.e)(n.prompt.metadata), (0, v.w)(a)),
                            s = (0, eZ.a)(n.prompt, a, r),
                            o = nJ.get(e7.s, ao),
                            i = "markdown" === s.renderFormat ? s.message : a,
                            l = o.length > 0 ? o : i,
                            c = o.length > 0 ? void 0 : s.renderFormat ?? "plain";
                        if (null != nK) return void await nK(l, c);
                        if (null == nJ.get(F.j, tT) && "string" == typeof n.prompt.metadata?.model_first_landing_ref) {
                            let e = l;
                            if (null != c) {
                                let t = (0, tU.e)(l, {
                                    defaultTextKind: "plain" === c ? "literal" : "prompt",
                                    enableRichText: !0,
                                    enableFileMentions: !0
                                });
                                e = t.getPersistedText(), t.destroy()
                            }
                            let t = `chatgpt:${tT}`;
                            (0, tu.E)(t, (t, n) => n ? t : e) || (0, e7.U)(nJ, tT, e), (0, tu.e)(t);
                            return
                        }
                        if (n.startsNewWorkConversation) {
                            let e = "user" === n.prompt.author.role ? (0, g.i)((0, g.r)(n.prompt.metadata?.serialization_metadata)?.work_handoff_recovery_prompt) : null,
                                t = null != e && e.length <= 1e3 ? e : (0, v.w)(a);
                            (0, th.m)(nJ, "work"), await a_("/", {
                                state: {
                                    focusComposerNonce: Date.now(),
                                    prefillPrompt: o.length > 0 ? o : t,
                                    prefillPromptFormat: o.length > 0 ? void 0 : "plain",
                                    prefillPromptOnlyIfEmpty: !0
                                }
                            });
                            return
                        }
                        if (r4 && !t4 && (0, tc.fb)(nJ, (0, tI.b)({
                                entrypoint: "home"
                            }))) return void await a_("/");
                        let d = (0, g.k)(n.prompt.metadata?.system_hints).filter(e => "search" !== e || !1 !== n.forceUseSearch);
                        !0 !== n.forceUseSearch || d.includes("search") || d.push("search");
                        let u = (0, a9.g)(nJ, d);
                        (0, e7.V)(nJ, u, t.model);
                        let h = nJ.get(F.R, tT);
                        (0, th.m)(nJ, r4 ? "work" : "chat"), await a_({
                            pathname: "/",
                            search: (0, ox.e)("", t4)
                        }, {
                            state: {
                                initialChatGptConversationId: u,
                                project: null,
                                chatGptProjectId: (0, te.a)(h) ? h : null,
                                chatGptCustomGptId: (0, te.a)(h) ? null : h,
                                focusComposerNonce: Date.now(),
                                prefillPrompt: l,
                                prefillPromptFormat: c,
                                prefillPromptOnlyIfEmpty: r4
                            }
                        });
                        return
                    }
                    await (0, aj.g)(nJ, {
                        conversationId: tT,
                        isTemporaryChat: t4,
                        messageId: e,
                        retry: r4 && "error_retry" === t.source && null == t.model.thinkingEffort ? {
                            ...t,
                            model: nJ.get(e7.t, tT)
                        } : t
                    })
                } catch {
                    nJ.get(er.f).danger(aC.formatMessage({
                        id: "chatgptConversations.regenerate.failed",
                        defaultMessage: "Failed to regenerate response",
                        description: "Error toast shown when generating another version of a ChatGPT response fails"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.regenerate.failed",
                            operation: "regenerate_response",
                            errorCategory: "conversation",
                            conversationId: aI ?? void 0,
                            userFacingError: {
                                surface: (0, aT.b)(null == rY && null == rH ? null : r4),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    })
                }
            }, tC[165] = ao, tC[166] = rH, tC[167] = tT, tC[168] = rY, tC[169] = aC, tC[170] = r9, tC[171] = t4, tC[172] = r4, tC[173] = r$, tC[174] = a_, tC[175] = nK, tC[176] = nJ, tC[177] = aI, tC[178] = eI) : eI = tC[178];
            let o$ = (0, nn.a)(eI);
            tC[179] !== rH || tC[180] !== tT || tC[181] !== aW || tC[182] !== aC || tC[183] !== av || tC[184] !== t4 || tC[185] !== a_ || tC[186] !== aw || tC[187] !== sb || tC[188] !== nJ || tC[189] !== aI || tC[190] !== si || tC[191] !== nQ ? (ej = () => {
                if (av || null == aI) return;
                let e = nJ.get(G.s);
                if (!e && !nJ.get(G.q) || !e && null == rH && null == si) return;
                let t = ay.current?.signal;
                null == t || t.aborted || (am(nQ), (e ? (0, nD.f)(nJ, {
                    chatGptThreadId: tT,
                    conversationTitle: aW
                }).then(e => {
                    if (null == e) return null;
                    let n = (0, E.a)(nJ, e);
                    if ("created" === e.status) return null == n || t.aborted || nJ.get(er.f).danger(n.message, {
                        errorAnalytics: {
                            toastId: "chatgptConversationPage.handleHandoff"
                        }
                    }), e.conversationId;
                    throw (0, E.a)(nJ, e)
                }) : (0, T.a)({
                    scope: nJ,
                    projectId: sb ?? void 0,
                    prompt: `Continuing from ${(0,tp.f)({conversationId:aI,title:aW?.trim()||"ChatGPT thread"})}`
                }).then(o2)).then(n => {
                    if (!t.aborted) {
                        if (null != n) return void(e ? aw(n) : a_((0, ox.c)(n, {
                            isTemporaryChat: t4
                        })));
                        throw Error("Unable to create a Work conversation")
                    }
                }).catch(() => {
                    t.aborted || (am(null), nJ.get(er.f).danger(aC.formatMessage({
                        id: "chatgptConversations.handoffFailed",
                        defaultMessage: "Failed to create chat",
                        description: "Error shown when ChatGPT cannot hand off a conversation to a task"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.handoffFailed"
                        }
                    }))
                }))
            }, tC[179] = rH, tC[180] = tT, tC[181] = aW, tC[182] = aC, tC[183] = av, tC[184] = t4, tC[185] = a_, tC[186] = aw, tC[187] = sb, tC[188] = nJ, tC[189] = aI, tC[190] = si, tC[191] = nQ, tC[192] = ej) : ej = tC[192];
            let o4 = ej;
            tC[193] !== tT || tC[194] !== a_ || tC[195] !== nJ || tC[196] !== as || tC[197] !== t5 || tC[198] !== n0 ? (eE = () => {
                if (null != n0) {
                    if ((0, eN.e)(tT)) {
                        let e = (0, eS.a)(nJ, n0, tT);
                        null != e && a_((0, ox.c)(e))
                    }
                    return
                }
                let e = nJ.query.getData(ae.n, t5);
                null != e && null != t5 && null != as && ((0, F.mb)(nJ, {
                    conversation: e,
                    conversationId: as,
                    sharedConversationId: t5
                }), a_((0, ox.c)(as)))
            }, tC[193] = tT, tC[194] = a_, tC[195] = nJ, tC[196] = as, tC[197] = t5, tC[198] = n0, tC[199] = eE) : eE = tC[199];
            let o5 = (0, nn.a)(eE);
            tC[200] !== nY ? (eA = nY?.mcpAppContext == null ? null : {
                hostId: t$.a,
                server: "codex_apps",
                connectorId: nY.mcpAppContext.id
            }, tC[200] = nY, tC[201] = eA) : eA = tC[201];
            let o6 = (0, p.x)(tF.b, eA),
                o8 = nY?.fullscreenContent != null ? "content" : "workspace",
                o7 = (0, J.a)(nZ ? "embedded" : o8),
                o9 = !o6 && (rO || !rk.isError) && !n$ && !r8 && (null == n0 || nX?.authMethod === "chatgpt" || n1) && (!n8 || null != rH),
                ie = r8 || so || ss || r$,
                it = ie || sQ || sY?.needsEntry === !0;
            if (sQ) {
                let e;
                tC[202] !== aC ? (e = aC.formatMessage(sZ.d.readOnlyPlaceholder), tC[202] = aC, tC[203] = e) : e = tC[203], eP = e
            } else !ie && sY?.needsEntry && (eP = !1);
            let ia = o9 && !ie && !n8 && !rN && !r9 && !ro && !ra && !rr && !sw,
                ir = !o9 || n8 || it || rN ? null : ac;
            if (tC[204] !== sw || tC[205] !== ag || tC[206] !== st || tC[207] !== sn || tC[208] !== rH?.current_node || tC[209] !== tT || tC[210] !== sc || tC[211] !== r5 || tC[212] !== oF || tC[213] !== oY || tC[214] !== oQ || tC[215] !== o$ || tC[216] !== tN || tC[217] !== n$ || tC[218] !== it || tC[219] !== rN || tC[220] !== sN || tC[221] !== r8 || tC[222] !== n8 || tC[223] !== ra || tC[224] !== t4 || tC[225] !== rQ || tC[226] !== ro || tC[227] !== r4 || tC[228] !== ss || tC[229] !== r$ || tC[230] !== ar || tC[231] !== a1 || tC[232] !== ex || tC[233] !== ot || tC[234] !== or || tC[235] !== sQ || tC[236] !== aD || tC[237] !== nJ.get || tC[238] !== aL || tC[239] !== rF?.current_node || tC[240] !== nV || tC[241] !== o9 || tC[242] !== oi || tC[243] !== aE || tC[244] !== ri) {
                let e = (0, at.c)({
                    paragen: ar,
                    hideInitialUserMessage: tN,
                    browserConversationId: void 0,
                    conversationId: tT,
                    enableCloudBrowserActivity: r5,
                    errorMessage: oF,
                    branchingMessageId: ag,
                    isReadOnly: n$ || r8 || n8 || null != nV,
                    isTemporaryChat: t4,
                    isWorkConversation: rQ,
                    onRegenerateResponse: sw || n8 || null != nV || n$ || r8 || ss || r$ || ro || ra ? void 0 : o$,
                    onEditUserMessage: sw || null == ex || rQ || n$ || r8 || ss || !ri || ra ? void 0 : oQ,
                    onFork: null == ex || t4 || ss || r$ || n$ || r8 ? void 0 : oY,
                    pendingSubmissionAttachments: a1,
                    shareEnabled: null == sc && !t4 && !n8 && !n$ && !r8 && !sN,
                    readAloudEnabled: !n8 && !r8,
                    feedbackEnabled: !n8 && !r8 && null == nV,
                    renderedTurns: sQ || null == ar || null == ot ? or : (0, n7.a)({
                        ...ot,
                        current_node: ar.promptMessageId
                    }, {
                        clinicalSearchEnabled: sn,
                        clinicalCitationsEnabled: st,
                        enableCloudBrowserActivity: r5,
                        streamingOrders: aE,
                        isWorkConversation: r4,
                        getRenderTelemetry: e => (0, oB.c)(nJ.get, e)
                    }),
                    safetyReview: aD,
                    sharedConversationLastMessageId: rF?.current_node ?? aL ?? (n8 ? rH?.current_node : null),
                    showPendingLoadingMessage: oi,
                    showRequestUserInputStatus: o9 && !it && !rN
                });
                eM = sQ ? (0, sZ.a)(e) : e, tC[204] = sw, tC[205] = ag, tC[206] = st, tC[207] = sn, tC[208] = rH?.current_node, tC[209] = tT, tC[210] = sc, tC[211] = r5, tC[212] = oF, tC[213] = oY, tC[214] = oQ, tC[215] = o$, tC[216] = tN, tC[217] = n$, tC[218] = it, tC[219] = rN, tC[220] = sN, tC[221] = r8, tC[222] = n8, tC[223] = ra, tC[224] = t4, tC[225] = rQ, tC[226] = ro, tC[227] = r4, tC[228] = ss, tC[229] = r$, tC[230] = ar, tC[231] = a1, tC[232] = ex, tC[233] = ot, tC[234] = or, tC[235] = sQ, tC[236] = aD, tC[237] = nJ.get, tC[238] = aL, tC[239] = rF?.current_node, tC[240] = nV, tC[241] = o9, tC[242] = oi, tC[243] = aE, tC[244] = ri, tC[245] = eM
            } else eM = tC[245];
            let is = eM;
            tC[246] !== aC ? (ek = aC.formatMessage({
                id: "chatgptConversations.loadingConversation",
                defaultMessage: "Loading ChatGPT conversation",
                description: "Accessible loading status shown while a ChatGPT conversation is loading in Codex Desktop"
            }), tC[246] = aC, tC[247] = ek) : ek = tC[247];
            let io = ek;
            tC[248] !== n$ || tC[249] !== n8 || tC[250] !== rU || tC[251] !== nJ || tC[252] !== aI ? (eR = n8 || n$ || null == aI ? void 0 : e => {
                (0, se.R)({
                    scope: nJ,
                    conversationId: aI,
                    previousTitle: rU,
                    title: e
                })
            }, tC[248] = n$, tC[249] = n8, tC[250] = rU, tC[251] = nJ, tC[252] = aI, tC[253] = eR) : eR = tC[253];
            let ii = aU || null != rH ? rU ?? "" : null;
            tC[254] !== aW || tC[255] !== eR || tC[256] !== ii ? (eO = (0, a.jsx)(t6.a, {
                className: "max-w-[320px]",
                variant: "flush-start",
                onRename: eR,
                title: aW,
                titleValue: ii
            }), tC[254] = aW, tC[255] = eR, tC[256] = ii, tC[257] = eO) : eO = tC[257];
            let il = eO,
                ic = r4 || r3 ? il : null;
            if (null != sc) {
                let e;
                tC[258] !== tT || tC[259] !== sc ? (e = (0, a.jsx)(a7.ChatGptGizmoHeader, {
                    conversationId: tT,
                    gizmoId: sc
                }), tC[258] = tT, tC[259] = sc, tC[260] = e) : e = tC[260], ic = e
            } else null != rH || null != si || rP || (ic = null);
            tC[261] !== n$ || tC[262] !== n8 || tC[263] !== rQ ? (eG = !rQ || n8 || n$ ? null : (0, a.jsx)(tS.a, {
                hostId: t$.a
            }), tC[261] = n$, tC[262] = n8, tC[263] = rQ, tC[264] = eG) : eG = tC[264];
            let id = eG;
            tC[265] !== r4 || tC[266] !== sA || tC[267] !== sb ? (eB = null == sb || r4 ? null : (0, a.jsx)(sv, {
                allowsThreadContentOverlap: !0,
                project: sA
            }), tC[265] = r4, tC[266] = sA, tC[267] = sb, tC[268] = eB) : eB = tC[268];
            let iu = eB;
            tC[269] !== iu || tC[270] !== ic || tC[271] !== tT || tC[272] !== nU || tC[273] !== n$ || tC[274] !== oz || tC[275] !== n8 || tC[276] !== t4 || tC[277] !== id || tC[278] !== sU || tC[279] !== sb || tC[280] !== sG || tC[281] !== sI ? (ez = sI ? (0, a.jsx)(sy.a, {
                isTemporaryChat: t4,
                isCloudTask: oz && !n8 && !n$,
                breadcrumbHeader: nU ?? iu,
                project: null == sb ? void 0 : {
                    icon: sU,
                    name: sG
                },
                start: nU ?? (n8 ? ic : (0, a.jsx)(nd.BusinessAgentConversationHeader, {
                    conversationId: tT,
                    fallback: ic
                })),
                startActions: id
            }) : null, tC[269] = iu, tC[270] = ic, tC[271] = tT, tC[272] = nU, tC[273] = n$, tC[274] = oz, tC[275] = n8, tC[276] = t4, tC[277] = id, tC[278] = sU, tC[279] = sb, tC[280] = sG, tC[281] = sI, tC[282] = ez) : ez = tC[282];
            let ih = ez,
                ip = !n8 && null == nV && !n$ && !t4 && !aM,
                im = (0, p.x)(ip ? rL.a : null, tT);
            tC[283] !== tT || tC[284] !== im ? (eF = null != im ? (0, a.jsx)(sD, {
                conversationId: tT
            }) : null, tC[283] = tT, tC[284] = im, tC[285] = eF) : eF = tC[285];
            let ig = eF;
            tC[286] !== ia || tC[287] !== tT || tC[288] !== r9 || tC[289] !== sY ? (eD = null != sY ? (0, a.jsx)("div", {
                className: "max-w-full min-w-0",
                inert: r9,
                children: (0, a.jsx)(sj, {
                    conversationId: tT,
                    placement: "progress",
                    canStartSection: ia
                })
            }) : null, tC[286] = ia, tC[287] = tT, tC[288] = r9, tC[289] = sY, tC[290] = eD) : eD = tC[290];
            let iv = eD;
            if (tC[291] !== rk || tC[292] !== nX?.authMethod || tC[293] !== sw || tC[294] !== nq || tC[295] !== sa || tC[296] !== sg || tC[297] !== oH || tC[298] !== ia || tC[299] !== ao || tC[300] !== sC || tC[301] !== nH || tC[302] !== rH || tC[303] !== ih || tC[304] !== tT || tC[305] !== io || tC[306] !== rY || tC[307] !== aW || tC[308] !== ig || tC[309] !== oy || tC[310] !== tR || tC[311] !== oF || tC[312] !== rZ || tC[313] !== r7 || tC[314] !== em || tC[315] !== sl || tC[316] !== rG || tC[317] !== o4 || tC[318] !== o5 || tC[319] !== oL || tC[320] !== rP || tC[321] !== tk || tC[322] !== n6 || tC[323] !== n$ || tC[324] !== ol || tC[325] !== it || tC[326] !== s9 || tC[327] !== rN || tC[328] !== oD || tC[329] !== ai || tC[330] !== av || tC[331] !== sR || tC[332] !== nZ || tC[333] !== sO || tC[334] !== o6 || tC[335] !== rE || tC[336] !== r9 || tC[337] !== r8 || tC[338] !== r2 || !1 !== tC[339] || tC[340] !== n8 || tC[341] !== so || tC[342] !== rr || tC[343] !== ra || tC[344] !== t4 || tC[345] !== rQ || tC[346] !== ro || tC[347] !== r4 || tC[348] !== sr || tC[349] !== rp || tC[350] !== ss || tC[351] !== r$ || tC[352] !== rV || tC[353] !== rJ.pathname || tC[354] !== rM || tC[355] !== rX?.sidebarAutomationId || tC[356] !== t3 || tC[357] !== r0 || tC[358] !== sA || tC[359] !== sU || tC[360] !== sb || tC[361] !== sG || tC[362] !== eP || tC[363] !== sp || tC[364] !== ot || tC[365] !== or || tC[366] !== nF || tC[367] !== sQ || tC[368] !== o7 || tC[369] !== rU || tC[370] !== nJ || tC[371] !== tY || tC[372] !== ak || tC[373] !== sY || tC[374] !== iv || tC[375] !== aI || tC[376] !== ov || tC[377] !== t5 || tC[378] !== n0 || tC[379] !== rD || tC[380] !== nV || tC[381] !== sV || tC[382] !== aM || tC[383] !== ip || tC[384] !== oP || tC[385] !== o9 || tC[386] !== oi || tC[387] !== ir || tC[388] !== oG || tC[389] !== oO || tC[390] !== aR || tC[391] !== tK || tC[392] !== is || tC[393] !== nY) {
                td = Symbol.for("react.early_return_sentinel");
                e: {
                    let e, t, n, r, s, o, i, l, c, d, u, h, p, f = or.flatMap(o1).flatMap(o0),
                        v = f.flatMap(oX);
                    if (!n8 && (rk.error instanceof no.a && 423 === rk.error.status || sO && null == rM)) {
                        let e;
                        tC[419] !== rk || tC[420] !== tT || tC[421] !== nJ ? (e = (0, a.jsx)(sH.a, {
                            onUnlocked: () => {
                                (0, sW.g)(nJ.get(sW.f)?.projectId, [tT]), rk.refetch()
                            }
                        }), tC[419] = rk, tC[420] = tT, tC[421] = nJ, tC[422] = e) : e = tC[422], td = e;
                        break e
                    }
                    if (null != sV) {
                        let e;
                        tC[423] !== sV ? (e = (0, a.jsx)(_.l, {
                            replace: !0,
                            to: sV
                        }), tC[423] = sV, tC[424] = e) : e = tC[424], td = e;
                        break e
                    }
                    eW = s$,
                    tC[425] !== rH || tC[426] !== rP || tC[427] !== n$ || tC[428] !== oD || tC[429] !== nZ || tC[430] !== r8 || tC[431] !== n8 || tC[432] !== r4 ? (e6 = r4 || n8 || nZ || r8 || n$ || oD || null == rH && !rP ? null : (0, a.jsx)($.a, {}), tC[425] = rH, tC[426] = rP, tC[427] = n$, tC[428] = oD, tC[429] = nZ, tC[430] = r8, tC[431] = n8, tC[432] = r4, tC[433] = e6) : e6 = tC[433],
                    tC[434] !== rk.fetchStatus || tC[435] !== rH || tC[436] !== oL || tC[437] !== rP || tC[438] !== oD || tC[439] !== nZ ? (e8 = !1, tC[434] = rk.fetchStatus, tC[435] = rH, tC[436] = oL, tC[437] = rP, tC[438] = oD, tC[439] = nZ, tC[440] = e8) : e8 = tC[440],
                    tC[441] !== rk.data || tC[442] !== rk.fetchStatus || tC[443] !== rH || tC[444] !== tT || tC[445] !== oL || tC[446] !== rP || tC[447] !== s9 || tC[448] !== oD || !1 !== tC[449] || tC[450] !== or.length ? (e9 = null, tC[441] = rk.data, tC[442] = rk.fetchStatus, tC[443] = rH, tC[444] = tT, tC[445] = oL, tC[446] = rP, tC[447] = s9, tC[448] = oD, tC[449] = !1, tC[450] = or.length, tC[451] = e9) : e9 = tC[451],
                    tn = !n8 && !r8 && (0, tO.c)() ? (0, a.jsx)(tz.b, {
                        callIds: v,
                        hostId: t$.a,
                        conversationId: (0, m.Oe)(`chatgpt:${tT}`)
                    }) : null,
                    tC[452] !== aW || tC[453] !== nZ || tC[454] !== n0 || tC[455] !== nY?.documentTitle ? (ta = nZ ? null : (0, a.jsx)(tw.a, {
                        title: null == n0 ? nY?.documentTitle ?? aW : null
                    }), tC[452] = aW, tC[453] = nZ, tC[454] = n0, tC[455] = nY?.documentTitle, tC[456] = ta) : ta = tC[456],
                    tC[457] !== tT || tC[458] !== nZ || tC[459] !== r9 || tC[460] !== n8 || tC[461] !== t4 || tC[462] !== r4 || tC[463] !== is ? (tr = nZ || r4 ? null : (0, a.jsx)(rB.a, {
                        conversationId: tT,
                        canCopy: !r9,
                        paragenEnabled: !n8,
                        turns: is,
                        loadHistory: !t4 && !n8
                    }), tC[457] = tT, tC[458] = nZ, tC[459] = r9, tC[460] = n8, tC[461] = t4, tC[462] = r4, tC[463] = is, tC[464] = tr) : tr = tC[464];
                    let b = null != rH || rP;tC[465] !== oL || tC[466] !== r4 || tC[467] !== b ? (ts = (0, a.jsx)(ni.a, {
                        isWorkConversation: r4,
                        hasConversationContent: b,
                        hasLoadError: oL
                    }), tC[465] = oL, tC[466] = r4, tC[467] = b, tC[468] = ts) : ts = tC[468],
                    tC[469] !== rH || tC[470] !== tT || tC[471] !== oL || tC[472] !== rP || tC[473] !== oD || tC[474] !== nZ || tC[475] !== rJ.pathname || tC[476] !== nJ || tC[477] !== t5 ? (to = nZ || oD || oL || null == rH && !rP ? null : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(oe, {
                            sharedConversationId: t5
                        }), (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)(tH.a, {
                                onCommit: () => tL.a.contentCommitted(nJ, tT, t5, rJ.pathname),
                                onPaint: () => tL.a.contentVisible(nJ, tT, t5)
                            }, t5 ?? tT)
                        })]
                    }), tC[469] = rH, tC[470] = tT, tC[471] = oL, tC[472] = rP, tC[473] = oD, tC[474] = nZ, tC[475] = rJ.pathname, tC[476] = nJ, tC[477] = t5, tC[478] = to) : to = tC[478],
                    tC[479] !== nX?.authMethod || tC[480] !== sg || tC[481] !== sC || tC[482] !== rH || tC[483] !== ih || tC[484] !== tT || tC[485] !== rY || tC[486] !== aW || tC[487] !== ig || tC[488] !== oy || tC[489] !== em || tC[490] !== sl || tC[491] !== o4 || tC[492] !== n$ || tC[493] !== ol || tC[494] !== av || tC[495] !== sR || tC[496] !== nZ || tC[497] !== sO || tC[498] !== r8 || tC[499] !== n8 || tC[500] !== t4 || tC[501] !== rQ || tC[502] !== ro || tC[503] !== r4 || tC[504] !== rX?.sidebarAutomationId || tC[505] !== r0 || tC[506] !== sU || tC[507] !== sb || tC[508] !== sG || tC[509] !== sp || tC[510] !== ot || tC[511] !== or.length || tC[512] !== nJ || tC[513] !== iv || tC[514] !== aI || tC[515] !== ov || tC[516] !== nV || tC[517] !== aM || tC[518] !== ip || tC[519] !== oP || tC[520] !== ir || tC[521] !== oG || tC[522] !== aR || tC[523] !== nY ? (ti = nZ || null != nY ? null : (0, a.jsxs)(rz.a, {
                        chatIcon: null == sb ? void 0 : sU,
                        conversationId: rQ && !n8 ? tT : null,
                        header: null != ig || null != iv ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(a.Fragment, {
                                children: (0, a.jsx)(s_, {
                                    header: ih,
                                    courseShortcut: ig,
                                    progress: iv
                                })
                            }), null]
                        }) : ih,
                        title: aW,
                        isArchivedPreview: n$,
                        children: [null, null, nX?.authMethod === "chatgpt" ? (0, a.jsx)(tj.s, {
                            productExperience: r4 ? "work" : "chat"
                        }) : null, n8 ? (0, a.jsx)(oa.a, {
                            children: null == sp ? null : (0, a.jsx)(a.Fragment, {
                                children: (0, a.jsx)(ou, {
                                    data: sp
                                })
                            })
                        }) : null, ip ? (0, a.jsx)(rW, {
                            conversationId: tT,
                            scheduledAutomationId: r0 ? rX?.sidebarAutomationId : void 0
                        }, tT) : null, oP ? (0, a.jsx)(rh, {
                            allowsThreadContentOverlap: !r4,
                            composerActions: ir,
                            conversationId: oG,
                            controlledState: ol ? {
                                isOpen: oy.isOpen,
                                shouldPreventAutoFocus: oy.shouldPreventAutoFocus,
                                onOpenChange: e => {
                                    ov({
                                        ...oy,
                                        isOpen: e,
                                        shouldPreventAutoFocus: !e && oy.shouldPreventAutoFocus
                                    })
                                }
                            } : void 0,
                            readData: !ol || oy.isOpen ? em : null,
                            showSources: !ol,
                            shouldBlockExternalEgress: aM
                        }) : null, t4 && !n8 && !n$ && null == sl && null == sC && null == sb && !sR && null != ot && (0, g.a)(ot).some(oJ) ? (0, a.jsx)(A.a.HeaderAction, {
                            actionId: "chatgpt-conversation-save",
                            align: "end",
                            order: 100,
                            children: (0, a.jsx)(oS, {
                                conversationId: tT
                            })
                        }) : null, t4 || n$ || r8 ? null : (0, a.jsx)(sy.b, {
                            allowsThreadContentOverlap: !r4,
                            menu: n8 || null == aI ? (0, a.jsx)(sh, {}) : (0, a.jsx)(sd, {
                                conversationId: tT,
                                title: aW,
                                isHandoffPending: av,
                                isArchived: rH?.is_archived === !0,
                                isChatConversation: null != rH && !r4,
                                onHandoff: sg ? o4 : void 0,
                                onOpenMessage: async e => {
                                    ay.current?.signal.aborted === !1 && nJ.get(j.b)?.pathname === nJ.value.pathname && await al.current?.scrollToMessage(e)
                                },
                                projectId: sb,
                                projectName: sG,
                                serverConversationId: aI,
                                conversationOrigin: rY
                            }),
                            children: n8 || sO ? null : (0, a.jsx)(ab, {
                                conversationId: tT,
                                projectId: sb,
                                sharedProjectConversation: nV,
                                isReady: (null != aI || null != nV) && or.length > 0 && (aR ?? rH?.current_node) != null,
                                isRestricted: aM || sR,
                                isStreaming: ro
                            })
                        })]
                    }), tC[479] = nX?.authMethod, tC[480] = sg, tC[481] = sC, tC[482] = rH, tC[483] = ih, tC[484] = tT, tC[485] = rY, tC[486] = aW, tC[487] = ig, tC[488] = oy, tC[489] = em, tC[490] = sl, tC[491] = o4, tC[492] = n$, tC[493] = ol, tC[494] = av, tC[495] = sR, tC[496] = nZ, tC[497] = sO, tC[498] = r8, tC[499] = n8, tC[500] = t4, tC[501] = rQ, tC[502] = ro, tC[503] = r4, tC[504] = rX?.sidebarAutomationId, tC[505] = r0, tC[506] = sU, tC[507] = sb, tC[508] = sG, tC[509] = sp, tC[510] = ot, tC[511] = or.length, tC[512] = nJ, tC[513] = iv, tC[514] = aI, tC[515] = ov, tC[516] = nV, tC[517] = aM, tC[518] = ip, tC[519] = oP, tC[520] = ir, tC[521] = oG, tC[522] = aR, tC[523] = nY, tC[524] = ti) : ti = tC[524],
                    tl = null,
                    eH = a8.a,
                    e0 = ao,
                    e1 = rY,
                    e2 = !o9 || o7.isHidden || it || sw || r9 || rN || n$ || r8 || so || ss || r$ || rr || ra,
                    e3 = t4,
                    e4 = sb,
                    e5 = null != sC,
                    eL = t2.c,
                    eU = r7,
                    tC[525] !== nZ || tC[526] !== r2 || tC[527] !== r4 || tC[528] !== iv || tC[529] !== nY ? (eq = nZ || null != nY ? iv : r2 && (0, t7.a)() && !r4 && (0, a.jsx)("div", {
                        className: "h-px",
                        "aria-hidden": !0
                    }), tC[525] = nZ, tC[526] = r2, tC[527] = r4, tC[528] = iv, tC[529] = nY, tC[530] = eq) : eq = tC[530],
                    eK = nq;
                    let x = null == sY ? "flex h-full min-h-0 flex-col" : "h-full",
                        C = rU ?? aW,
                        w = !r9,
                        I = !ai && !nZ && !n8 && !o6 && !o7.isHidden,
                        T = aM || sa,
                        S = rZ?.isFullWidth === !0,
                        E = null == rZ ? oO.contentShift : void 0,
                        P = sY?.selectedIndex;tC[531] !== ia || tC[532] !== tT || tC[533] !== sY ? (e = null != sY ? (0, a.jsx)(sj, {
                        conversationId: tT,
                        placement: "composer",
                        canStartSection: ia
                    }) : void 0, tC[531] = ia, tC[532] = tT, tC[533] = sY, tC[534] = e) : e = tC[534],
                    tC[535] !== tT || tC[536] !== sY ? (t = null != sY ? (0, a.jsx)(sS, {
                        conversationId: tT
                    }) : void 0, tC[535] = tT, tC[536] = sY, tC[537] = t) : t = tC[537];
                    let M = !r4,
                        k = sQ ? null : oF;tC[538] !== rk || tC[539] !== oH ? (n = oH ? () => {
                        rk.refetch({
                            cancelRefetch: !1
                        })
                    } : void 0, tC[538] = rk, tC[539] = oH, tC[540] = n) : n = tC[540];
                    let R = or.length > 0,
                        O = eP,
                        N = !sR && (null == sb || null != sA),
                        G = null == sY && !rV,
                        B = rk.isFetching,
                        z = !sQ && ro;tC[541] !== rH?.is_archived || tC[542] !== tT || tC[543] !== n$ || tC[544] !== nZ || tC[545] !== n8 || tC[546] !== t4 || tC[547] !== ro || tC[548] !== r4 ? (r = nZ || !r4 || n8 || n$ || rH?.is_archived === !0 || t4 ? null : (0, a.jsx)(y.Suspense, {
                        fallback: null,
                        children: (0, a.jsx)(sT, {
                            conversationId: tT,
                            isTurnActive: ro
                        })
                    }), tC[541] = rH?.is_archived, tC[542] = tT, tC[543] = n$, tC[544] = nZ, tC[545] = n8, tC[546] = t4, tC[547] = ro, tC[548] = r4, tC[549] = r) : r = tC[549],
                    tC[550] !== tT || tC[551] !== n$ || tC[552] !== aI ? (s = n$ ? (0, a.jsx)(tJ.a, {
                        conversationId: aI ?? tT,
                        kind: "chatgpt"
                    }, aI ?? tT) : void 0, tC[550] = tT, tC[551] = n$, tC[552] = aI, tC[553] = s) : s = tC[553];
                    let F = !sQ && oi;tC[554] !== sC ? (o = null != sC ? (0, a.jsx)(sP.GptPluginMigrationBanner, {
                        gizmoId: sC
                    }) : null, tC[554] = sC, tC[555] = o) : o = tC[555],
                    tC[556] !== sg || tC[557] !== o4 || tC[558] !== av || tC[559] !== t4 || tC[560] !== sr || tC[561] !== rp ? (i = sr && !t4 ? (0, a.jsx)(rR, {
                        canConvert: sg,
                        isChatInstantAvailable: !rp,
                        isConverting: av,
                        onConvert: o4
                    }) : null, tC[556] = sg, tC[557] = o4, tC[558] = av, tC[559] = t4, tC[560] = sr, tC[561] = rp, tC[562] = i) : i = tC[562],
                    tC[563] !== rG || tC[564] !== r8 ? (l = rG.bind(null, r8), tC[563] = rG, tC[564] = r8, tC[565] = l) : l = tC[565],
                    tC[566] !== o5 || tC[567] !== n8 || tC[568] !== t3 ? (c = e => {
                        t3?.(e), n8 && o5()
                    }, tC[566] = o5, tC[567] = n8, tC[568] = t3, tC[569] = c) : c = tC[569],
                    tC[570] !== rk.isFetching || tC[571] !== sw || tC[572] !== ao || tC[573] !== nH || tC[574] !== tT || tC[575] !== io || tC[576] !== tR || tC[577] !== oL || tC[578] !== tk || tC[579] !== n6 || tC[580] !== it || tC[581] !== s9 || tC[582] !== rN || tC[583] !== oD || tC[584] !== ai || tC[585] !== nZ || tC[586] !== n8 || tC[587] !== t4 || tC[588] !== rQ || tC[589] !== eP || tC[590] !== nF || tC[591] !== tY || tC[592] !== ak || tC[593] !== t5 || tC[594] !== rD || tC[595] !== o9 || tC[596] !== n || tC[597] !== R || tC[598] !== N || tC[599] !== G || tC[600] !== z || tC[601] !== r || tC[602] !== s || tC[603] !== F || tC[604] !== o || tC[605] !== i || tC[606] !== l || tC[607] !== c || tC[608] !== C || tC[609] !== w || tC[610] !== I || tC[611] !== T || tC[612] !== S || tC[613] !== E || tC[614] !== P || tC[615] !== e || tC[616] !== t || tC[617] !== M || tC[618] !== k || tC[619] !== tK || tC[620] !== is || tC[621] !== nY ? (d = (0, a.jsx)(o3, {
                        ref: al,
                        printTitle: C,
                        trackShownImpressions: w,
                        trackReadState: I,
                        workspace: nY,
                        shouldBlockMcpApps: T,
                        isCoveredByFloatingPanel: S,
                        isFormOnly: ai,
                        isInlinePreview: nZ,
                        hideModelPicker: tk,
                        disableAutoFocus: tR,
                        transcriptPresentation: tK,
                        scrollOrigin: tY,
                        composerRef: ad,
                        contentX: E,
                        conversationId: tT,
                        composerConversationId: ao,
                        sectionIndex: P,
                        composerLeadingContent: nH,
                        aboveComposerContent: e,
                        historyLoadingContent: t,
                        requiredSystemHints: nF,
                        isChatConversation: M,
                        conversationLoadingLabel: io,
                        entries: is,
                        errorMessage: k,
                        hasLoadError: oL,
                        onRetryLoad: n,
                        hasRenderableTurns: R,
                        isComposerDisabled: it,
                        readOnlyPlaceholder: O,
                        moreDetailsEnabled: N,
                        isConversationEmpty: s9,
                        showEmptyState: G,
                        isConversationFetching: B,
                        isConversationLoading: oD,
                        isSharedConversation: n8,
                        isSubmitDisabled: rN,
                        isTemporaryChat: t4,
                        isTurnActive: z,
                        isWorkConversation: rQ,
                        onboardingPrelude: r,
                        scrollStateConversationId: ak,
                        initialResponsePlacementKey: n6,
                        sharedConversationId: t5,
                        sharedPostRegulatedConnectorKind: rD,
                        showComposer: o9,
                        archivedPreviewFooter: s,
                        showPendingLoadingMessage: F,
                        gptPluginMigrationBanner: o,
                        awaitingGptContinuation: sw,
                        workOnlyConversionBanner: i,
                        onAddSelectedText: l,
                        onSubmitAccepted: c
                    }), tC[570] = rk.isFetching, tC[571] = sw, tC[572] = ao, tC[573] = nH, tC[574] = tT, tC[575] = io, tC[576] = tR, tC[577] = oL, tC[578] = tk, tC[579] = n6, tC[580] = it, tC[581] = s9, tC[582] = rN, tC[583] = oD, tC[584] = ai, tC[585] = nZ, tC[586] = n8, tC[587] = t4, tC[588] = rQ, tC[589] = eP, tC[590] = nF, tC[591] = tY, tC[592] = ak, tC[593] = t5, tC[594] = rD, tC[595] = o9, tC[596] = n, tC[597] = R, tC[598] = N, tC[599] = G, tC[600] = z, tC[601] = r, tC[602] = s, tC[603] = F, tC[604] = o, tC[605] = i, tC[606] = l, tC[607] = c, tC[608] = C, tC[609] = w, tC[610] = I, tC[611] = T, tC[612] = S, tC[613] = E, tC[614] = P, tC[615] = e, tC[616] = t, tC[617] = M, tC[618] = k, tC[619] = tK, tC[620] = is, tC[621] = nY, tC[622] = d) : d = tC[622],
                    tC[623] !== oy || tC[624] !== em || tC[625] !== ol || tC[626] !== aM || tC[627] !== oP || tC[628] !== ir || tC[629] !== oG || tC[630] !== oO ? (u = oP && null != em && (!ol || oy.isOpen) ? (0, a.jsx)(ru, {
                        composerActions: ir,
                        conversationId: oG,
                        readData: em,
                        showSources: !ol,
                        display: oO,
                        shouldBlockExternalEgress: aM
                    }) : null, tC[623] = oy, tC[624] = em, tC[625] = ol, tC[626] = aM, tC[627] = oP, tC[628] = ir, tC[629] = oG, tC[630] = oO, tC[631] = u) : u = tC[631],
                    tC[632] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, a.jsx)(a6.a, {}), tC[632] = h) : h = tC[632],
                    tC[633] !== nZ ? (p = null, tC[633] = nZ, tC[634] = p) : p = tC[634],
                    tC[635] !== r9 || tC[636] !== d || tC[637] !== u || tC[638] !== p || tC[639] !== x ? (eJ = (0, a.jsxs)("div", {
                        className: x,
                        inert: r9,
                        children: [d, u, h, p]
                    }), tC[635] = r9, tC[636] = d, tC[637] = u, tC[638] = p, tC[639] = x, tC[640] = eJ) : eJ = tC[640],
                    eX = !n8 && !r8 && (0, tO.c)() ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(oW, {
                            conversationId: tT,
                            shouldBlockExternalEgress: aM || sa,
                            widgets: f.filter(oZ)
                        }), (0, a.jsx)(tB.a, {
                            blockedWidgetSource: rE ? void 0 : "descriptor",
                            transcriptMcpAppIds: new Set(f.flatMap(e => "mcp-tool-call" === e.type ? rE ? e.callId : [] : "chatgpt-hosted-widget" === e.type ? (0, aH.e)(tT, e.messageId) : [])),
                            shouldBlockExternalEgress: aM || sa
                        })]
                    }) : null
                }
                tC[291] = rk, tC[292] = nX?.authMethod, tC[293] = sw, tC[294] = nq, tC[295] = sa, tC[296] = sg, tC[297] = oH, tC[298] = ia, tC[299] = ao, tC[300] = sC, tC[301] = nH, tC[302] = rH, tC[303] = ih, tC[304] = tT, tC[305] = io, tC[306] = rY, tC[307] = aW, tC[308] = ig, tC[309] = oy, tC[310] = tR, tC[311] = oF, tC[312] = rZ, tC[313] = r7, tC[314] = em, tC[315] = sl, tC[316] = rG, tC[317] = o4, tC[318] = o5, tC[319] = oL, tC[320] = rP, tC[321] = tk, tC[322] = n6, tC[323] = n$, tC[324] = ol, tC[325] = it, tC[326] = s9, tC[327] = rN, tC[328] = oD, tC[329] = ai, tC[330] = av, tC[331] = sR, tC[332] = nZ, tC[333] = sO, tC[334] = o6, tC[335] = rE, tC[336] = r9, tC[337] = r8, tC[338] = r2, tC[339] = !1, tC[340] = n8, tC[341] = so, tC[342] = rr, tC[343] = ra, tC[344] = t4, tC[345] = rQ, tC[346] = ro, tC[347] = r4, tC[348] = sr, tC[349] = rp, tC[350] = ss, tC[351] = r$, tC[352] = rV, tC[353] = rJ.pathname, tC[354] = rM, tC[355] = rX?.sidebarAutomationId, tC[356] = t3, tC[357] = r0, tC[358] = sA, tC[359] = sU, tC[360] = sb, tC[361] = sG, tC[362] = eP, tC[363] = sp, tC[364] = ot, tC[365] = or, tC[366] = nF, tC[367] = sQ, tC[368] = o7, tC[369] = rU, tC[370] = nJ, tC[371] = tY, tC[372] = ak, tC[373] = sY, tC[374] = iv, tC[375] = aI, tC[376] = ov, tC[377] = t5, tC[378] = n0, tC[379] = rD, tC[380] = nV, tC[381] = sV, tC[382] = aM, tC[383] = ip, tC[384] = oP, tC[385] = o9, tC[386] = oi, tC[387] = ir, tC[388] = oG, tC[389] = oO, tC[390] = aR, tC[391] = tK, tC[392] = is, tC[393] = nY, tC[394] = eL, tC[395] = eH, tC[396] = eW, tC[397] = eU, tC[398] = eq, tC[399] = eK, tC[400] = eJ, tC[401] = eX, tC[402] = e0, tC[403] = e1, tC[404] = e2, tC[405] = e3, tC[406] = e4, tC[407] = e5, tC[408] = e6, tC[409] = e8, tC[410] = e9, tC[411] = tn, tC[412] = ta, tC[413] = tr, tC[414] = ts, tC[415] = to, tC[416] = ti, tC[417] = tl, tC[418] = td
            } else eL = tC[394], eH = tC[395], eW = tC[396], eU = tC[397], eq = tC[398], eK = tC[399], eJ = tC[400], eX = tC[401], e0 = tC[402], e1 = tC[403], e2 = tC[404], e3 = tC[405], e4 = tC[406], e5 = tC[407], e6 = tC[408], e8 = tC[409], e9 = tC[410], tn = tC[411], ta = tC[412], tr = tC[413], ts = tC[414], to = tC[415], ti = tC[416], tl = tC[417], td = tC[418];
            if (td !== Symbol.for("react.early_return_sentinel")) return td;
            tC[641] !== eL || tC[642] !== eU || tC[643] !== eq || tC[644] !== eK || tC[645] !== eJ || tC[646] !== eX ? (tm = (0, a.jsxs)(eL, {
                floatingPanelWidth: eU,
                header: eq,
                banner: eK,
                children: [eJ, eX]
            }), tC[641] = eL, tC[642] = eU, tC[643] = eq, tC[644] = eK, tC[645] = eJ, tC[646] = eX, tC[647] = tm) : tm = tC[647], tC[648] !== eH || tC[649] !== e0 || tC[650] !== e1 || tC[651] !== e2 || tC[652] !== e3 || tC[653] !== e4 || tC[654] !== e5 || tC[655] !== tm ? (tg = (0, a.jsx)(eH, {
                conversationId: e0,
                conversationOrigin: e1,
                disabled: e2,
                isTemporaryChat: e3,
                projectId: e4,
                requiresGizmoId: e5,
                children: tm
            }), tC[648] = eH, tC[649] = e0, tC[650] = e1, tC[651] = e2, tC[652] = e3, tC[653] = e4, tC[654] = e5, tC[655] = tm, tC[656] = tg) : tg = tC[656], tC[657] !== eW || tC[658] !== e6 || tC[659] !== e8 || tC[660] !== e9 || tC[661] !== tn || tC[662] !== ta || tC[663] !== tr || tC[664] !== ts || tC[665] !== to || tC[666] !== ti || tC[667] !== tl || tC[668] !== tg ? (tf = (0, a.jsxs)(eW, {
                children: [e6, e8, e9, tn, ta, tr, ts, to, ti, tl, tg]
            }), tC[657] = eW, tC[658] = e6, tC[659] = e8, tC[660] = e9, tC[661] = tn, tC[662] = ta, tC[663] = tr, tC[664] = ts, tC[665] = to, tC[666] = ti, tC[667] = tl, tC[668] = tg, tC[669] = tf) : tf = tC[669];
            let iy = tf,
                ib = n8 || !rk.isFetchedAfterMount || rk.isFetching || rO ? null : rk.error,
                ix = oL ? rk.error : null,
                iC = null == rY && null == rH ? null : r4,
                i_ = !r4 && !oD;
            return tC[670] !== ac || tC[671] !== ao || tC[672] !== t5 ? (tv = {
                conversationId: ao,
                composer: ac,
                sharedConversationId: t5
            }, tC[670] = ac, tC[671] = ao, tC[672] = t5, tC[673] = tv) : tv = tC[673], tC[674] !== iy || tC[675] !== tv ? (ty = (0, a.jsx)(nW.a, {
                value: tv,
                children: iy
            }), tC[674] = iy, tC[675] = tv, tC[676] = ty) : ty = tC[676], tC[677] !== i_ || tC[678] !== ty ? (tb = (0, a.jsx)(w.a, {
                enabled: i_,
                children: ty
            }), tC[677] = i_, tC[678] = ty, tC[679] = tb) : tb = tC[679], tC[680] !== oH || tC[681] !== aI || tC[682] !== ib || tC[683] !== ix || tC[684] !== iC || tC[685] !== tb ? (tx = (0, a.jsx)(et.a, {
                conversationId: aI,
                error: ib,
                loadError: ix,
                canRetry: oH,
                isWorkConversation: iC,
                children: tb
            }), tC[680] = oH, tC[681] = aI, tC[682] = ib, tC[683] = ix, tC[684] = iC, tC[685] = tb, tC[686] = tx) : tx = tC[686], tx
        }

        function oZ(e) {
            return "chatgpt-hosted-widget" === e.type
        }

        function oJ(e) {
            return "user" === e.author.role
        }

        function oX(e) {
            return "mcp-tool-call" === e.type ? [e.callId] : []
        }

        function o0(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : e
        }

        function o1(e) {
            let {
                turn: t
            } = e;
            return t.items
        }

        function o2(e) {
            return "threadId" in e ? e.threadId : e.clientThreadId
        }

        function o3(e) {
            let t, n, s, o, c, u, h, m, g, f, v, x, _, w, I, T, S, j, E, A, P, M, k, R, N, G, B, z, L = (0, r.c)(233),
                {
                    ref: H,
                    printTitle: W,
                    trackReadState: q,
                    trackShownImpressions: K,
                    composerRef: V,
                    workspace: Y,
                    shouldBlockMcpApps: Q,
                    contentX: $,
                    conversationId: Z,
                    sectionIndex: X,
                    composerConversationId: ee,
                    composerLeadingContent: et,
                    aboveComposerContent: en,
                    historyLoadingContent: ea,
                    requiredSystemHints: er,
                    isCoveredByFloatingPanel: es,
                    isFormOnly: eo,
                    isInlinePreview: ei,
                    hideModelPicker: el,
                    disableAutoFocus: ec,
                    transcriptPresentation: ed,
                    scrollOrigin: eu,
                    isChatConversation: eh,
                    conversationLoadingLabel: ep,
                    entries: em,
                    errorMessage: eg,
                    hasLoadError: ef,
                    onRetryLoad: ev,
                    hasRenderableTurns: ey,
                    isComposerDisabled: ex,
                    readOnlyPlaceholder: eC,
                    moreDetailsEnabled: e_,
                    isConversationEmpty: ew,
                    showEmptyState: eI,
                    isConversationFetching: eT,
                    isConversationLoading: ej,
                    isSharedConversation: eE,
                    isSubmitDisabled: eA,
                    isTemporaryChat: eP,
                    isTurnActive: eM,
                    isWorkConversation: ek,
                    onboardingPrelude: eR,
                    scrollStateConversationId: eO,
                    initialResponsePlacementKey: eN,
                    sharedConversationId: ez,
                    sharedPostRegulatedConnectorKind: eF,
                    showComposer: eL,
                    archivedPreviewFooter: eH,
                    showPendingLoadingMessage: eU,
                    gptPluginMigrationBanner: eq,
                    awaitingGptContinuation: eK,
                    workOnlyConversionBanner: eV,
                    onAddSelectedText: eY,
                    onSubmitAccepted: eQ
                } = e,
                e$ = void 0 === eI || eI,
                eZ = (0, p.y)(D.a),
                eJ = (0, p.z)(null),
                eX = (0, p.x)(eS.f, (0, y.useContext)(O.a)),
                e0 = (0, p.z)(tV.a),
                e2 = (0, p.x)(na.a, Z),
                e3 = Y?.fullscreenContent != null ? "content" : "workspace",
                e4 = (0, J.a)(ei ? "embedded" : e3),
                e5 = (0, p.z)(sL.a),
                e8 = eL && e5?.source.turnContext.conversationId !== ee,
                e7 = "floating" === e4.placement,
                e9 = (0, p.z)(sN.h),
                te = eh && null == ez && null == eX && null == eH,
                tt = !ej && !eM && !ef && ew && !ey,
                tn = (0, p.x)(F.i, Z),
                ta = e$ && te && tt && null == tn && !e2 && !e7,
                tr = e$ && !e2 && (!te || !ew),
                ts = (0, y.useRef)(null),
                [to, tl] = (0, y.useState)(null),
                [tc, td] = (0, y.useState)(!1);
            L[0] !== em || L[1] !== to ? (t = () => ({
                async scrollToMessage(e) {
                    let t = em.find(t => {
                        let {
                            turn: n
                        } = t;
                        return n.messageIds.includes(e)
                    });
                    null != t && null != to && await to.scrollToKey(t.turnKey, void 0, {
                        align: "top"
                    })
                }
            }), n = [em, to], L[0] = em, L[1] = to, L[2] = t, L[3] = n) : (t = L[2], n = L[3]), (0, y.useImperativeHandle)(H, t, n), L[4] !== em ? (s = () => em, L[4] = em, L[5] = s) : s = L[5];
            let tu = (0, nn.a)(s);
            L[6] !== em || L[7] !== to?.scrollToKey ? (o = e => {
                let t = d()(em, o6);
                return (0, tC.a)(to?.scrollToKey, t?.turnKey, e)
            }, L[6] = em, L[7] = to?.scrollToKey, L[8] = o) : o = L[8];
            let th = o,
                [tp, tf] = (0, y.useState)(null);
            L[9] !== ei || L[10] !== eZ || L[11] !== eO ? (c = () => ei ? 0 : eZ.get(t5.a, eO), L[9] = ei, L[10] = eZ, L[11] = eO, L[12] = c) : c = L[12];
            let [t_, tw] = (0, y.useState)(c);
            L[13] !== ei || L[14] !== tp || L[15] !== eZ || L[16] !== eO ? (u = e => {
                ei || eZ.set(t5.a, eO, (0, t3.a)(e, tp?.getHeightPx() ?? 0))
            }, L[13] = ei, L[14] = tp, L[15] = eZ, L[16] = eO, L[17] = u) : u = L[17];
            let tI = (0, nn.a)(u);
            L[18] !== em || L[19] !== to ? (h = (e, t) => (0, tg.c)(to, em.find(t => {
                let {
                    id: n
                } = t;
                return n === e
            })?.turnKey, t), L[18] = em, L[19] = to, L[20] = h) : h = L[20];
            let tT = (0, nn.a)(h);
            L[21] !== Z || L[22] !== em || L[23] !== to ? (m = async e => {
                let t = em.find(t => {
                    let {
                        turn: n
                    } = t;
                    return n.messageIds.includes(e)
                });
                null != t && null != to && await to.scrollToKey(t.turnKey, t => t.querySelector(`[id="${CSS.escape(`delayed-image-gen-${Z}-${e}`)}"]`), {
                    align: "center"
                })
            }, L[21] = Z, L[22] = em, L[23] = to, L[24] = m) : m = L[24];
            let tS = (0, nn.a)(m);
            L[25] === Symbol.for("react.memo_cache_sentinel") ? (g = e => (0, tg.a)(ts.current, e), L[25] = g) : g = L[25];
            let tj = (0, nn.a)(g),
                tE = `chatgpt:${Z}`;
            if (L[26] !== Z || L[27] !== tu || L[28] !== tj || L[29] !== eP || L[30] !== eZ || L[31] !== tT || L[32] !== ez || L[33] !== eX || L[34] !== tE) {
                let e;
                L[36] !== Z || L[37] !== eP || L[38] !== eZ || L[39] !== ez || L[40] !== eX ? (e = async e => {
                    let t = eZ.get(F.j, Z);
                    !eP && null == ez && null == eX && null != t && eZ.get(eB.b) > 0 && await (0, eG.a)(eZ, t, e)
                }, L[36] = Z, L[37] = eP, L[38] = eZ, L[39] = ez, L[40] = eX, L[41] = e) : e = L[41], f = function(e) {
                    let {
                        getTurns: t,
                        routeContextId: n,
                        scrollAdapter: a,
                        ensureHistory: r
                    } = e, s = (0, al.a)({
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
                                            unitId: (0, nV.a)("user", t),
                                            text: n
                                        }]
                                    }
                                    if ("assistant-message" === e.type) {
                                        let n = (0, ad.a)(e.content, eb.b),
                                            a = [],
                                            r = "";
                                        for (; e.content.includes(r);) r += "";
                                        let s = (0, ai.a)(function e(t, n, a, r) {
                                                let s = "",
                                                    o = 0;
                                                for (let i of t) {
                                                    let t = n.indexOf(i.raw, o); - 1 !== t && (s += n.slice(o, t), s += function(t, n, a) {
                                                        var r, s;
                                                        if ("math" === t.type && "text" in t && "string" == typeof t.text) return a(t.text);
                                                        if ("codexDirective" === (r = t).type && "name" in r && "string" == typeof r.name && "attributes" in r && null != r.attributes && "object" == typeof r.attributes) return function(e, t) {
                                                            if (e.name === eb.a) {
                                                                let n = (0, au.a)(e.attributes),
                                                                    a = (0, au.b)(e.attributes),
                                                                    r = null != n ? t[n] : null == a ? void 0 : t.find(e => (0, eb.l)(e) === a);
                                                                if (null == r) return "";
                                                                let s = (0, eb.i)(r);
                                                                return "hidden" === s || "block" === s ? "" : (0, eb.j)(r) ?? ""
                                                            }
                                                            return e.name === ao.a ? (0, ac.a)(e.attributes, "label") ?? "" : e.name === ao.b || e.name === ao.c ? "" : e.name === as.a ? e.text ?? "" : null
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
                                            unitId: (0, nV.a)("assistant", t),
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
                    getTurns: tu,
                    routeContextId: tE,
                    scrollAdapter: {
                        scrollToTurn: tT,
                        getTurnContainer: tj
                    },
                    ensureHistory: e
                }), L[26] = Z, L[27] = tu, L[28] = tj, L[29] = eP, L[30] = eZ, L[31] = tT, L[32] = ez, L[33] = eX, L[34] = tE, L[35] = f
            } else f = L[35];
            let tP = f;
            L[42] !== tP.contextId ? (v = {
                containerRef: ts,
                contextId: tP.contextId
            }, L[42] = tP.contextId, L[43] = v) : v = L[43], (0, tb.a)(v);
            let tM = e8 && null == eH,
                tk = e0 && tM && !e7,
                tO = (0, tA.a)();
            L[44] !== Z || L[45] !== ey || L[46] !== es || L[47] !== X || L[48] !== tO ? (x = {
                conversationId: Z,
                sectionIndex: X,
                hasRenderableTurns: ey,
                isCoveredByFloatingPanel: es,
                shouldReduceMotion: tO,
                containerRef: ts
            }, L[44] = Z, L[45] = ey, L[46] = es, L[47] = X, L[48] = tO, L[49] = x) : x = L[49];
            let tN = function(e) {
                    let t, n, a, s = (0, r.c)(12),
                        {
                            conversationId: o,
                            sectionIndex: i,
                            hasRenderableTurns: l,
                            isCoveredByFloatingPanel: c,
                            shouldReduceMotion: d,
                            containerRef: u
                        } = e,
                        h = (0, sJ.a)(0);
                    s[0] !== o || s[1] !== i ? (t = {
                        conversationId: o,
                        sectionIndex: i
                    }, s[0] = o, s[1] = i, s[2] = t) : t = s[2];
                    let p = (0, y.useRef)(t);
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
                                Array.from(n.querySelectorAll('[data-markdown-text-style="assistant-message"]')).some(s1) && 0 !== n.clientWidth && (s.disconnect(), h.set(a * n.clientWidth), e = (0, sX.a)(h, 0, {
                                    duration: .3,
                                    ease: s0.d
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
                    }, a = [o, i, l, d, c, h, u], s[3] = u, s[4] = o, s[5] = l, s[6] = c, s[7] = i, s[8] = h, s[9] = d, s[10] = n, s[11] = a) : (n = s[10], a = s[11]), (0, y.useLayoutEffect)(n, a), h
                }(x),
                tG = tM && e7,
                [tB, tz] = (0, y.useState)(null),
                [tF, tD] = (0, y.useState)(null),
                [tL, tH] = (0, y.useState)(null),
                tW = eE && tM && !ex && !e7 && !e0,
                [tU, tq] = (0, y.useState)(null);
            L[50] !== eK || L[51] !== Z || L[52] !== ey || L[53] !== eP || L[54] !== eF || L[55] !== eL ? (_ = eL && !eK ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(ti.BrowserComposerDisclaimer, {
                    conversationId: Z,
                    hasUserMessage: ey,
                    isTemporaryChat: eP,
                    regulatedConnectorKindOverride: eF
                })
            }) : void 0, L[50] = eK, L[51] = Z, L[52] = ey, L[53] = eP, L[54] = eF, L[55] = eL, L[56] = _) : _ = L[56];
            let tQ = _;
            L[57] !== Z || L[58] !== eg || L[59] !== ey || L[60] !== ex || L[61] !== eA || L[62] !== eP || L[63] !== ek || L[64] !== eL || L[65] !== eU ? (w = ey ? null : (0, a.jsx)(an.a, {
                conversationId: Z,
                errorMessage: eg,
                isTemporaryChat: eP,
                isWorkConversation: ek,
                showPendingLoadingMessage: eU,
                showRequestUserInputStatus: eL && !ex && !eA
            }), L[57] = Z, L[58] = eg, L[59] = ey, L[60] = ex, L[61] = eA, L[62] = eP, L[63] = ek, L[64] = eL, L[65] = eU, L[66] = w) : w = L[66];
            let t$ = w;
            L[67] !== Z || L[68] !== ek || L[69] !== ez || L[70] !== eX ? (I = ek && null == ez && null == eX ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(e6, {
                    conversationId: Z
                }, Z)
            }) : null, L[67] = Z, L[68] = ek, L[69] = ez, L[70] = eX, L[71] = I) : I = L[71];
            let tZ = I;
            L[72] !== eH || L[73] !== tZ ? (T = null != eH ? (0, a.jsxs)(a.Fragment, {
                children: [tZ, eH]
            }) : null, L[72] = eH, L[73] = tZ, L[74] = T) : T = L[74];
            let tJ = T;
            L[75] !== en || L[76] !== tJ || L[77] !== eK || L[78] !== ee || L[79] !== et || L[80] !== V || L[81] !== Z || L[82] !== ec || L[83] !== tQ || L[84] !== t$ || L[85] !== em || L[86] !== tZ || L[87] !== tB || L[88] !== eq || L[89] !== ef || L[90] !== ey || L[91] !== el || L[92] !== e0 || L[93] !== ex || L[94] !== ej || L[95] !== es || L[96] !== eo || L[97] !== e7 || L[98] !== e9 || L[99] !== ei || L[100] !== eE || L[101] !== eA || L[102] !== eP || L[103] !== ek || L[104] !== eQ || L[105] !== eC || L[106] !== tW || L[107] !== er || L[108] !== tp || L[109] !== th || L[110] !== e4.isHidden || L[111] !== ez || L[112] !== eX || L[113] !== e8 || L[114] !== tG || L[115] !== tk || L[116] !== q || L[117] !== K || L[118] !== eV || L[119] !== Y ? (S = tJ ?? (e8 ? (0, a.jsxs)(rj.a.Provider, {
                value: em.at(-1) ?? null,
                children: [eo || e7 ? null : (0, a.jsx)(tx.a, {
                    onNavigate: th
                }, Z), e7 ? null : et, (0, a.jsx)(o7, {
                    requiredSystemHints: er,
                    composerRef: V,
                    workspace: Y,
                    isInlinePreview: ei,
                    hideModelPicker: el,
                    disableAutoFocus: ec,
                    conversationId: ee,
                    isImageEditComposer: e9,
                    disabled: ex,
                    readOnlyPlaceholder: eC,
                    awaitingGptContinuation: eK,
                    headerContent: tZ,
                    aboveComposerContent: (0, a.jsxs)(a.Fragment, {
                        children: [tW ? (0, a.jsx)("div", {
                            ref: tH,
                            className: "empty:hidden"
                        }) : null, en, !ej && !ef && ey && !eK && eV, e0 ? null : eq, tG && t$]
                    }),
                    isFullscreenComposer: e7,
                    isHidden: e4.isHidden,
                    trackReadState: q && !es,
                    trackShownImpressions: K && !es,
                    isSharedConversation: eE,
                    isSubmitDisabled: eA,
                    followupPortalTarget: tB,
                    takeoverDisclaimerRef: tq,
                    showConversationFollowups: null == ez && null == eX && !eP && !ek && !e7,
                    isTemporaryChat: eP,
                    isWorkConversation: ek,
                    responseSpacerState: tp,
                    renderTranscript: e => {
                        let {
                            isVisible: t
                        } = e;
                        return (0, a.jsx)(aP, {
                            entries: em,
                            historyLoader: eP || null != ez || null != eX ? null : (0, a.jsx)(sq.a, {
                                conversationId: Z
                            }),
                            isVisible: t
                        })
                    },
                    showVoiceStage: !tk,
                    voiceDisclaimer: e0 && !tk ? tQ : void 0,
                    onSubmitAccepted: e => {
                        tw(0), eQ?.(e)
                    }
                }, `${ee}:${e9?"image-edit":"chat"}`)]
            }) : tZ), L[75] = en, L[76] = tJ, L[77] = eK, L[78] = ee, L[79] = et, L[80] = V, L[81] = Z, L[82] = ec, L[83] = tQ, L[84] = t$, L[85] = em, L[86] = tZ, L[87] = tB, L[88] = eq, L[89] = ef, L[90] = ey, L[91] = el, L[92] = e0, L[93] = ex, L[94] = ej, L[95] = es, L[96] = eo, L[97] = e7, L[98] = e9, L[99] = ei, L[100] = eE, L[101] = eA, L[102] = eP, L[103] = ek, L[104] = eQ, L[105] = eC, L[106] = tW, L[107] = er, L[108] = tp, L[109] = th, L[110] = e4.isHidden, L[111] = ez, L[112] = eX, L[113] = e8, L[114] = tG, L[115] = tk, L[116] = q, L[117] = K, L[118] = eV, L[119] = Y, L[120] = S) : S = L[120];
            let t0 = S;
            L[121] !== Z || L[122] !== es || L[123] !== ei || L[124] !== eJ || L[125] !== ez || L[126] !== eX ? (j = void 0, L[121] = Z, L[122] = es, L[123] = ei, L[124] = eJ, L[125] = ez, L[126] = eX, L[127] = j) : j = L[127];
            let t1 = j,
                t6 = es || void 0;
            L[128] === Symbol.for("react.memo_cache_sentinel") ? (E = null, L[128] = E) : E = L[128], L[129] !== Z || L[130] !== es || L[131] !== e7 || L[132] !== q ? (A = !q || e7 || es ? null : (0, a.jsx)(rS.a, {
                conversationId: Z
            }), L[129] = Z, L[130] = es, L[131] = e7, L[132] = q, L[133] = A) : A = L[133], L[134] !== eH || L[135] !== Z || L[136] !== ei || L[137] !== ez || L[138] !== eX ? (P = ei || null != ez || null != eX || null != eH ? null : (0, a.jsx)(rn, {
                conversationId: Z
            }, Z), L[134] = eH, L[135] = Z, L[136] = ei, L[137] = ez, L[138] = eX, L[139] = P) : P = L[139], L[140] !== Z || L[141] !== ej || L[142] !== eP || L[143] !== ez || L[144] !== eX ? (M = ej || eP || null != ez || null != eX ? null : (0, a.jsx)(sK, {
                conversationId: Z
            }), L[140] = Z, L[141] = ej, L[142] = eP, L[143] = ez, L[144] = eX, L[145] = M) : M = L[145], L[146] !== Z || L[147] !== em || L[148] !== tc || L[149] !== eT || L[150] !== ej || L[151] !== ei || L[152] !== th || L[153] !== ez || L[154] !== eX || L[155] !== to ? (k = ei || ej || null != ez || null != eX ? null : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(U, {
                    conversationId: Z,
                    entries: em,
                    turnListApi: to
                }), (0, a.jsx)(tX.a, {
                    ready: !eT && tc && null != to && em.length > 0,
                    onNavigate: th
                })]
            }), L[146] = Z, L[147] = em, L[148] = tc, L[149] = eT, L[150] = ej, L[151] = ei, L[152] = th, L[153] = ez, L[154] = eX, L[155] = to, L[156] = k) : k = L[156], L[157] !== eH || L[158] !== ta || L[159] !== ee || L[160] !== $ || L[161] !== tn || L[162] !== Z || L[163] !== ep || L[164] !== tP || L[165] !== tQ || L[166] !== t$ || L[167] !== em || L[168] !== t0 || L[169] !== tI || L[170] !== ef || L[171] !== ey || L[172] !== ea || L[173] !== eN || L[174] !== t_ || L[175] !== e0 || L[176] !== e2 || L[177] !== ex || L[178] !== eT || L[179] !== ej || L[180] !== es || L[181] !== eo || L[182] !== e7 || L[183] !== ei || L[184] !== eE || L[185] !== eP || L[186] !== eM || L[187] !== ek || L[188] !== e_ || L[189] !== t1 || L[190] !== eY || L[191] !== ev || L[192] !== eR || L[193] !== W || L[194] !== tW || L[195] !== tp || L[196] !== e4.isChatPaneHidden || L[197] !== eZ || L[198] !== eu || L[199] !== tS || L[200] !== tN || L[201] !== ez || L[202] !== eX || L[203] !== Q || L[204] !== tO || L[205] !== eL || L[206] !== e8 || L[207] !== tr || L[208] !== tM || L[209] !== tG || L[210] !== tk || L[211] !== tU || L[212] !== ed || L[213] !== to || L[214] !== Y ? (R = Y?.fullscreenContent != null ? (0, a.jsxs)(a.Fragment, {
                children: [!Q && Y.fullscreenContent, t0]
            }) : (0, a.jsxs)(t4.a, {
                viewportOverlay: eo || ei || ek || null != ez || null != eX || null != eH || es || e7 ? null : (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(rG, {
                        conversationId: Z
                    }, Z)
                }),
                hideTranscript: eo,
                active: !ej && (!ey || null != to),
                presentation: ed ?? (ei ? "compact" : "default"),
                contentX: $,
                composerFade: !1,
                supportsComposerExpansion: tM && !e7 && null == Y,
                footerPlacement: ta ? "home" : "bottom",
                initialOffset: t_,
                scrollOrigin: eu,
                onScroll: tI,
                scrollToBottomButton: !e8 || e7 || tk ? void 0 : {
                    isWorking: eM
                },
                threadEndContent: e0 ? void 0 : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        ref: tz,
                        className: t2.a
                    }), null == tU ? tQ : (0, b.createPortal)(tQ, tU)]
                }),
                footerLeadingContent: tk ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)("div", {
                            className: t2.a,
                            children: (0, a.jsx)(tK.a, {})
                        })
                    }), (0, a.jsx)("div", {
                        className: "overflow-hidden electron:[scrollbar-gutter:stable_both-edges]",
                        children: tQ
                    })]
                }) : t1,
                footer: t0,
                children: [ei || ej || null != ez ? null : (0, a.jsx)(n8, {
                    conversationId: Z,
                    entries: em,
                    isConversationFetching: eT,
                    turnListApi: to
                }), (0, a.jsxs)(l.a.div, {
                    ref: ts,
                    style: {
                        x: tN
                    },
                    "data-chatgpt-conversation-selection-target": Z,
                    className: (0, i.b)("flex min-h-full flex-1 flex-col gap-1.5 pb-5", ei && "pt-5"),
                    "data-thread-find-target": "conversation",
                    onFocusCapture: () => {
                        (0, ty.K)(eZ, "conversation")
                    },
                    onMouseDownCapture: () => {
                        (0, ty.K)(eZ, "conversation")
                    },
                    children: [(0, a.jsxs)(y.Suspense, {
                        fallback: (0, a.jsx)(tR.LoadingPage, {
                            debugName: "ChatGptConversationPage",
                            fillParent: !0
                        }),
                        children: [ei || ej ? null : (0, a.jsx)(tv.a, {
                            conversationSource: tP
                        }), es || e4.isChatPaneHidden || eP || null != ez || null != eX ? null : ea ?? (0, a.jsx)(sq.a, {
                            conversationId: Z
                        }), (0, a.jsx)(oG.b, {
                            conversationId: Z
                        }), (null != ez || null != eX) && ey ? (0, a.jsx)(om, {
                            sharedConversationId: ez
                        }) : null, null == eR ? null : (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)("div", {
                                className: t2.a,
                                children: eR
                            })
                        }), null == tn || ej ? null : (0, a.jsx)(nF.a, {
                            conversationId: Z,
                            branchSource: {
                                conversationId: tn.metadata.source_conversation_id,
                                title: tn.metadata.source_conversation_title,
                                gizmoId: tn.metadata.source_conversation_gizmo_id,
                                ownerId: tn.metadata.source_conversation_owner_id
                            }
                        }), ef ? (0, a.jsx)(e1, {
                            isFetching: eT,
                            isSharedConversation: eE,
                            onRetry: ev
                        }) : ej ? (0, a.jsx)("div", {
                            "aria-busy": "true",
                            "aria-label": ep,
                            className: "relative min-h-0 flex-1",
                            role: "status",
                            children: (0, a.jsx)(tR.LoadingPage, {
                                debugName: "ChatGptConversationPage",
                                fillParent: !0
                            })
                        }) : ey ? (0, a.jsxs)(sG.a, {
                            value: tS,
                            children: [ei || es ? null : (0, a.jsxs)(a.Fragment, {
                                children: [eP || null != ez || null != eX ? null : (0, a.jsx)(a.Fragment, {
                                    children: (0, a.jsx)(eW, {
                                        conversationId: Z
                                    })
                                }), (0, a.jsx)(eD, {
                                    entries: em,
                                    title: W,
                                    TurnRowComponent: aA
                                })]
                            }), (0, a.jsx)(aq, {
                                conversationId: Z,
                                entries: em,
                                onApiChange: tl,
                                onVisibleContentReady: () => td(!0),
                                responseSpacerState: tp
                            }), tW ? (0, a.jsx)("div", {
                                ref: tD,
                                className: "empty:hidden"
                            }) : null]
                        }) : tr && null == tn && (0, a.jsx)("div", {
                            className: "rounded-xl border border-default bg-surface-secondary/92 p-4 text-sm text-codex-description",
                            children: (0, a.jsx)(C.a, {
                                id: "chatgptConversations.emptyConversation",
                                defaultMessage: "No renderable ChatGPT messages were found in this conversation",
                                description: "Empty state when a ChatGPT conversation has no user or assistant text messages"
                            })
                        }), !tG && t$, (0, a.jsx)(re.a, {
                            conversationId: ee,
                            isWorkConversation: ek
                        }), eL && !ex ? (0, a.jsx)(s8, {
                            conversationId: Z,
                            moreDetailsEnabled: e_,
                            onAddSelectedText: eY
                        }) : null]
                    }), ei ? null : (0, a.jsx)(ar.a, {
                        initialPlacementKey: eN,
                        isActiveVoiceConversation: e0 && e2,
                        isLoadingHistory: ej,
                        latestUserTurnKey: em.findLast(o4)?.turnKey,
                        onResponseSpacerStateChange: tf
                    }), tk ? (0, a.jsx)(l.a.div, {
                        className: "pointer-events-none shrink-0",
                        "aria-hidden": !0,
                        initial: {
                            height: 0
                        },
                        animate: {
                            height: 112
                        },
                        transition: tO ? tY.c : tY.b
                    }) : null]
                })]
            }), L[157] = eH, L[158] = ta, L[159] = ee, L[160] = $, L[161] = tn, L[162] = Z, L[163] = ep, L[164] = tP, L[165] = tQ, L[166] = t$, L[167] = em, L[168] = t0, L[169] = tI, L[170] = ef, L[171] = ey, L[172] = ea, L[173] = eN, L[174] = t_, L[175] = e0, L[176] = e2, L[177] = ex, L[178] = eT, L[179] = ej, L[180] = es, L[181] = eo, L[182] = e7, L[183] = ei, L[184] = eE, L[185] = eP, L[186] = eM, L[187] = ek, L[188] = e_, L[189] = t1, L[190] = eY, L[191] = ev, L[192] = eR, L[193] = W, L[194] = tW, L[195] = tp, L[196] = e4.isChatPaneHidden, L[197] = eZ, L[198] = eu, L[199] = tS, L[200] = tN, L[201] = ez, L[202] = eX, L[203] = Q, L[204] = tO, L[205] = eL, L[206] = e8, L[207] = tr, L[208] = tM, L[209] = tG, L[210] = tk, L[211] = tU, L[212] = ed, L[213] = to, L[214] = Y, L[215] = R) : R = L[215], L[216] !== es || L[217] !== t6 || L[218] !== A || L[219] !== P || L[220] !== M || L[221] !== k || L[222] !== R ? (N = (0, a.jsxs)("div", {
                className: "contents",
                "aria-hidden": t6,
                inert: es,
                children: [E, A, P, M, k, R]
            }), L[216] = es, L[217] = t6, L[218] = A, L[219] = P, L[220] = M, L[221] = k, L[222] = R, L[223] = N) : N = L[223];
            let t8 = N;
            return L[224] !== tL || L[225] !== tF || L[226] !== tW ? (G = tW ? {
                aboveComposer: tL,
                belowMessage: tF
            } : null, L[224] = tL, L[225] = tF, L[226] = tW, L[227] = G) : G = L[227], L[228] !== t8 ? (B = (0, a.jsx)(tm.a, {
                children: t8
            }), L[228] = t8, L[229] = B) : B = L[229], L[230] !== G || L[231] !== B ? (z = (0, a.jsx)(aF.a, {
                value: G,
                children: B
            }), L[230] = G, L[231] = B, L[232] = z) : z = L[232], z
        }

        function o4(e) {
            let {
                turn: t
            } = e;
            return t.items.some(o5)
        }

        function o5(e) {
            return "user-message" === e.type
        }

        function o6(e) {
            let {
                turn: t
            } = e;
            return t.items.some(o8)
        }

        function o8(e) {
            return "assistant-message" === e.type || "generated-image" === e.type && null != e.src
        }

        function o7(e) {
            let t, n, s, o = (0, r.c)(11),
                i = (0, y.useContext)(td.a);
            if (null == i || i.conversationId !== e.conversationId) {
                let t;
                return o[0] !== e ? (t = (0, a.jsx)(o9, {
                    ...e
                }), o[0] = e, o[1] = t) : t = o[1], t
            }
            o[2] !== e.conversationId || o[3] !== e.isImageEditComposer ? (t = e.isImageEditComposer ? {
                conversationId: e.conversationId,
                surface: "image-edit"
            } : e.conversationId, o[2] = e.conversationId, o[3] = e.isImageEditComposer, o[4] = t) : t = o[4];
            let l = !e.isWorkConversation;
            return o[5] !== e ? (n = t => (0, a.jsx)(o9, {
                ...e,
                initialController: t
            }), o[5] = e, o[6] = n) : n = o[6], o[7] !== t || o[8] !== l || o[9] !== n ? (s = (0, a.jsx)(sO, {
                draftKey: t,
                enableInlineSystemHints: l,
                children: n
            }), o[7] = t, o[8] = l, o[9] = n, o[10] = s) : s = o[10], s
        }

        function o9(e) {
            let t, n, s, o, i, l, c, d, u, h, m, g, f, v, b, C, w, I, T, S = (0, r.c)(81),
                {
                    composerRef: j,
                    initialController: E,
                    ...A
                } = e,
                P = (0, p.y)(D.a),
                O = (0, p.x)(R.d, A.isTemporaryChat),
                {
                    isFullscreenComposer: N
                } = A,
                G = (0, x.a)(),
                {
                    state: B
                } = (0, _.Y)(),
                z = (0, p.x)(oV, A.conversationId),
                L = (0, p.x)(F.R, A.conversationId),
                H = !(!A.disabled && !A.isSharedConversation && !A.isWorkConversation && !A.isTemporaryChat && !A.isImageEditComposer && (0, te.a)(L)) ? null : L,
                W = (0, p.x)(null == A.requiredSystemHints ? to : null, H);
            S[0] !== W || S[1] !== A.requiredSystemHints ? (t = A.requiredSystemHints ?? (null == W ? void 0 : [W]), S[0] = W, S[1] = A.requiredSystemHints, S[2] = t) : t = S[2];
            let U = t;
            S[3] !== W || S[4] !== A.conversationId || S[5] !== P ? (n = () => {
                if (null != W) {
                    var e;
                    let t, n;
                    return e = A.conversationId, t = (0, tt.b)(P, e, [W]), n = (0, e9.h)(P, {
                        draftKey: e,
                        isTemporaryChat: !1
                    }), () => {
                        if (t(), P.get(tt.a, e).includes(W)) return;
                        let a = P.get(e7.v, e).filter(e => e !== W && e !== `plugin:${e8.d}`);
                        (0, e7.T)(P, e, a, n)
                    }
                }
            }, s = [P, A.conversationId, W], S[3] = W, S[4] = A.conversationId, S[5] = P, S[6] = n, S[7] = s) : (n = S[6], s = S[7]), (0, y.useEffect)(n, s);
            let q = (0, p.x)(nu.c, A.conversationId);
            S[8] !== q || S[9] !== A.isSharedConversation || S[10] !== A.isWorkConversation || S[11] !== L ? (o = !A.isSharedConversation && !A.isWorkConversation && !(0, te.a)(L) && !q, S[8] = q, S[9] = A.isSharedConversation, S[10] = A.isWorkConversation, S[11] = L, S[12] = o) : o = S[12];
            let K = o,
                V = K && !A.disabled && !A.isSubmitDisabled && !A.isImageEditComposer,
                Y = K ? z : void 0;
            S[13] !== A.conversationId || S[14] !== A.isImageEditComposer ? (i = A.isImageEditComposer ? {
                conversationId: A.conversationId,
                surface: "image-edit"
            } : A.conversationId, S[13] = A.conversationId, S[14] = A.isImageEditComposer, S[15] = i) : i = S[15];
            let Q = i;
            S[16] !== Q || S[17] !== E || S[18] !== A.conversationId ? (l = {
                composerController: E,
                conversationId: A.conversationId,
                draftKey: Q
            }, S[16] = Q, S[17] = E, S[18] = A.conversationId, S[19] = l) : l = S[19];
            let $ = (0, oz.a)(l),
                J = (0, y.useContext)(td.a),
                X = (0, y.useRef)(!1);
            S[20] !== Q || S[21] !== J || S[22] !== E || S[23] !== A.isTemporaryChat || S[24] !== P ? (c = e => {
                null == e || null == E || X.current || (X.current = !0, (0, e7.U)(P, Q, E.getPersistedText(), {
                    isTemporaryChat: A.isTemporaryChat
                }), J?.onAdopt())
            }, S[20] = Q, S[21] = J, S[22] = E, S[23] = A.isTemporaryChat, S[24] = P, S[25] = c) : c = S[25];
            let ee = (0, nn.a)(c);
            S[26] !== ee || S[27] !== j ? (d = (0, ne.a)(j, ee), S[26] = ee, S[27] = j, S[28] = d) : d = S[28];
            let et = d,
                en = (0, y.useContext)(rj.a),
                ea = (0, p.w)(sA.a, A.conversationId),
                er = (0, p.x)(F.cb, A.conversationId),
                es = (0, p.x)(F._, A.conversationId),
                eo = (0, p.x)(e7.i, A.conversationId);
            S[29] !== es ? (u = (0, F.zb)(es), S[29] = es, S[30] = u) : u = S[30];
            let ei = u,
                el = (0, p.z)(M.j.activeTab$);
            if (S[31] !== el || S[32] !== N || S[33] !== ei || S[34] !== en) {
                let e = en?.turn.items.flatMap(ir);
                h = N && el?.tabType.kind === tM.a && "generatedImages" in el.props && null != el.props.generatedImages && !ei && null != en && "in_progress" !== en.turn.status && !en.turn.hasPendingAssistantReply && !en.showPendingLoadingMessage && !e?.some(ia) && (null != en.errorMessage || e?.some(it)) ? en.turn.messageIds.at(-1) ?? en.turnKey : null, S[31] = el, S[32] = N, S[33] = ei, S[34] = en, S[35] = h
            } else h = S[35];
            let ec = h,
                ed = (0, y.useRef)(null);
            S[36] !== ec || S[37] !== P ? (m = () => {
                null != ec && ec !== ed.current && (ed.current = ec, P.set(tT.a, "expanded"))
            }, g = [ec, P], S[36] = ec, S[37] = P, S[38] = m, S[39] = g) : (m = S[38], g = S[39]), (0, y.useEffect)(m, g);
            let eu = (0, p.w)(sU.a, N ? A.conversationId : null);
            S[40] !== W || S[41] !== H || S[42] !== $ || S[43] !== V || S[44] !== Q || S[45] !== G || S[46] !== N || S[47] !== et || S[48] !== O || S[49] !== A || S[50] !== U || S[51] !== P || S[52] !== Y || S[53] !== B?.libraryFileCreation || S[54] !== L ? (f = e => (0, a.jsxs)(tP.a, {
                children: [N && A.trackReadState && !e?.isHidden ? (0, a.jsx)(rS.a, {
                    conversationId: A.conversationId,
                    isTranscriptVisible: e?.isCompact === !1 && !e.isMinimized
                }) : null, A.aboveComposerContent, (0, a.jsx)(tl.a, {
                    children: (0, a.jsx)(nL.a, {
                        ref: et,
                        trackShownImpressions: A.trackShownImpressions && !A.isHidden && !e?.isHidden && !e?.isMinimized,
                        headerContent: A.headerContent,
                        imageSuggestionsEnabled: !A.disabled && !A.isSharedConversation && !A.isImageEditComposer,
                        allowBackgroundSubmit: A.isInlinePreview,
                        disableAutoFocus: A.disableAutoFocus,
                        conversationOrigin: null == A.workspace ? void 0 : "tpp",
                        mcpAppContext: A.workspace?.mcpAppContext,
                        onServerThreadIdChange: A.workspace?.onServerThreadIdChange,
                        followupPortalTarget: A.followupPortalTarget,
                        takeoverDisclaimerRef: A.takeoverDisclaimerRef,
                        showConversationFollowups: A.showConversationFollowups,
                        autoPrepare: !A.isSubmitDisabled && !A.isSharedConversation,
                        browserConversationId: (0, Z.getThreadBrowserConversationId)(P) ?? A.conversationId,
                        composerController: $,
                        conversationId: A.conversationId,
                        requiredSystemHints: U,
                        hideSystemHints: null != A.requiredSystemHints,
                        getSubmissionGuard: null != W ? () => () => P.get(F.R, A.conversationId) === L && P.get(to, H) === W : void 0,
                        draftKey: Q,
                        onPromptChange: O,
                        selectedCustomGpt: Y,
                        targetGizmoId: Y?.id,
                        onCustomGptChange: V ? e => {
                            P.set(oV, A.conversationId, e)
                        } : void 0,
                        onCustomAgentSelected: V ? () => {
                            P.set(oV, A.conversationId, null)
                        } : void 0,
                        disableDraftPrepare: A.isSubmitDisabled || A.isSharedConversation,
                        disableSubmit: A.disabled || A.isSubmitDisabled,
                        voiceInputDisabled: A.disabled,
                        aboveComposerHeaderContent: A.voiceDisclaimer,
                        getExtraDeveloperInstructions: !A.isInlinePreview && B?.libraryFileCreation && !A.isTemporaryChat ? ie : void 0,
                        isTemporaryChat: A.isTemporaryChat,
                        placeholder: A.disabled && !1 !== A.readOnlyPlaceholder ? A.readOnlyPlaceholder ?? G.formatMessage({
                            id: "chatgptConversations.sharedConversation.readOnlyPlaceholder",
                            defaultMessage: "This conversation is read-only.",
                            description: "Placeholder inside the disabled message composer when someone views a shared ChatGPT Work conversation that cannot be continued in Codex Desktop"
                        }) : void 0,
                        readOnly: A.disabled,
                        hideModelPicker: A.hideModelPicker,
                        modelPickerPending: A.isSubmitDisabled,
                        showFilePicker: !A.disabled && !A.isSubmitDisabled,
                        showPendingFilePicker: !A.disabled && A.isSubmitDisabled,
                        showVoiceStage: A.showVoiceStage,
                        onSubmitAccepted: t => {
                            e?.onSubmitStart(), A.responseSpacerState?.place(), A.onSubmitAccepted?.(t)
                        },
                        onSubmitError: A.responseSpacerState?.clear
                    })
                })]
            }), S[40] = W, S[41] = H, S[42] = $, S[43] = V, S[44] = Q, S[45] = G, S[46] = N, S[47] = et, S[48] = O, S[49] = A, S[50] = U, S[51] = P, S[52] = Y, S[53] = B?.libraryFileCreation, S[54] = L, S[55] = f) : f = S[55];
            let eh = f;
            S[56] !== P ? (v = () => {
                (0, ty.K)(P, "conversation")
            }, b = () => {
                (0, ty.K)(P, "conversation")
            }, S[56] = P, S[57] = v, S[58] = b) : (v = S[57], b = S[58]);
            let ep = !A.isInlinePreview && !A.disabled && !A.isSubmitDisabled;
            S[59] !== $ || S[60] !== ep ? (C = (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(rM, {
                    composerController: $,
                    enabled: ep
                })
            }), S[59] = $, S[60] = ep, S[61] = C) : C = S[61];
            let em = N ? "floating" : "pane",
                eg = A.disabled || A.awaitingGptContinuation,
                ef = null == en && !ei,
                ev = eo || ei ? "loading" : "idle";
            return S[62] !== ev ? (w = {
                type: ev,
                unread: !1
            }, S[62] = ev, S[63] = w) : w = S[63], S[64] !== eu || S[65] !== A.isHidden || S[66] !== A.renderTranscript || S[67] !== eh || S[68] !== ea || S[69] !== em || S[70] !== eg || S[71] !== ef || S[72] !== w || S[73] !== er ? (I = (0, a.jsx)(k.a, {
                notifications: eu,
                isHidden: A.isHidden,
                placement: em,
                responsePreview: ea,
                forceExpanded: eg,
                composerOnly: ef,
                title: er,
                statusState: w,
                renderTranscript: A.renderTranscript,
                children: eh
            }), S[64] = eu, S[65] = A.isHidden, S[66] = A.renderTranscript, S[67] = eh, S[68] = ea, S[69] = em, S[70] = eg, S[71] = ef, S[72] = w, S[73] = er, S[74] = I) : I = S[74], S[75] !== A.conversationId || S[76] !== v || S[77] !== b || S[78] !== C || S[79] !== I ? (T = (0, a.jsxs)("div", {
                className: "contents",
                "data-map-composer-conversation": A.conversationId,
                onMouseDownCapture: v,
                onFocusCapture: b,
                children: [C, I]
            }), S[75] = A.conversationId, S[76] = v, S[77] = b, S[78] = C, S[79] = I, S[80] = T) : T = S[80], T
        }
        async function ie() {
            return [tk.a]
        }

        function it(e) {
            return "assistant-message" === e.type && "" !== e.content.trim()
        }

        function ia(e) {
            return "generated-image" === e.type || "chatgpt-delayed-image-gen" === e.type
        }

        function ir(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : [e]
        }
    }),
    Ppno: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("zd8w"),
            o = n("hZax"),
            i = n("Ho4C"),
            l = n("KFm7"),
            c = n("lsfk"),
            d = n("bIvi");
        n.d(t, {}, {
            a: function(e) {
                let t, n, u, h, p, m, g, f, v, y, b, x, C, _, w, I = (0, r.c)(59),
                    {
                        initialPlacementKey: T,
                        isActiveVoiceConversation: S,
                        isLoadingHistory: j,
                        latestUserTurnKey: E,
                        onResponseSpacerStateChange: A
                    } = e,
                    P = void 0 !== S && S,
                    M = void 0 !== j && j,
                    k = (0, o.k)();
                I[0] !== P || I[1] !== k ? (t = P && (0, o.f)(k, "2825211774").get("voice_orb_transcript_clearance_enabled", !1), I[0] = P, I[1] = k, I[2] = t) : t = I[2];
                let R = t,
                    O = (0, s.useRef)(E),
                    N = (0, s.useRef)(M),
                    G = (0, s.useRef)(null),
                    B = (0, s.useRef)(null),
                    z = (0, c.b)();
                I[3] !== z ? (n = () => new l.a(z), I[3] = z, I[4] = n) : n = I[4];
                let [F] = (0, s.useState)(n), {
                    clear: D,
                    consumeGrowth: L,
                    getHeightPx: H,
                    place: W,
                    prepareThreadEndContent: U
                } = F, {
                    addScrollListener: q,
                    getScrollElement: K,
                    responseSpacerController: V
                } = z;
                I[5] !== D || I[6] !== z ? (u = () => {
                    D(), z.scrollToBottom()
                }, I[5] = D, I[6] = z, I[7] = u) : u = I[7];
                let Y = (0, d.a)(u);
                I[8] !== L || I[9] !== H || I[10] !== U || I[11] !== F.height || I[12] !== F.holdViewport || I[13] !== V || I[14] !== Y ? (h = () => V.register({
                    consumeGrowth: L,
                    getHeightPx: H,
                    holdViewport: F.holdViewport,
                    prepareThreadEndContent: U,
                    scrollToBottom: Y
                }, F.height).dispose, I[8] = L, I[9] = H, I[10] = U, I[11] = F.height, I[12] = F.holdViewport, I[13] = V, I[14] = Y, I[15] = h) : h = I[15], I[16] !== L || I[17] !== H || I[18] !== U || I[19] !== F || I[20] !== V || I[21] !== Y ? (p = [L, H, U, F, V, Y], I[16] = L, I[17] = H, I[18] = U, I[19] = F, I[20] = V, I[21] = Y, I[22] = p) : p = I[22], (0, s.useInsertionEffect)(h, p), I[23] === Symbol.for("react.memo_cache_sentinel") ? (m = (e, t) => {
                    G.current = {
                        turnKey: e,
                        element: t
                    }, B.current?.(e, t)
                }, I[23] = m) : m = I[23];
                let Q = (0, d.a)(m);
                I[24] === Symbol.for("react.memo_cache_sentinel") ? (g = e => {
                    B.current = e;
                    let t = G.current;
                    return null != t && e(t.turnKey, t.element), () => {
                        B.current = null
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
                let Z = (0, s.useEffectEvent)(f);
                return I[30] !== D || I[31] !== L || I[32] !== H || I[33] !== A || I[34] !== Q || I[35] !== W || I[36] !== R ? (v = () => (A({
                    voiceAutoScrollEnabled: R,
                    clear: D,
                    consumeGrowth: L,
                    getHeightPx: H,
                    onTurnLayoutReady: Q,
                    place: W
                }), () => {
                    A(null)
                }), y = [D, L, H, A, Q, W, R], I[30] = D, I[31] = L, I[32] = H, I[33] = A, I[34] = Q, I[35] = W, I[36] = R, I[37] = v, I[38] = y) : (v = I[37], y = I[38]), (0, s.useLayoutEffect)(v, y), I[39] !== K || I[40] !== M || I[41] !== E || I[42] !== W || I[43] !== F || I[44] !== $ || I[45] !== R ? (b = () => {
                    let e = O.current,
                        t = N.current;
                    if (O.current = E, N.current = M, R && !M && !t && null != E && E !== e) {
                        var n, a, r, s, o;
                        let e, t, i, l, c;
                        return n = E, a = K, r = W, s = $, o = F.getPendingPlacementSignal(), t = null, i = null, l = !1, c = () => {
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
                }, x = [K, M, E, W, $, F, R], I[39] = K, I[40] = M, I[41] = E, I[42] = W, I[43] = F, I[44] = $, I[45] = R, I[46] = b, I[47] = x) : (b = I[46], x = I[47]), (0, s.useLayoutEffect)(b, x), I[48] !== q || I[49] !== T || I[50] !== Z || I[51] !== F ? (C = () => {
                    if (null == T) return;
                    let e = F.getPendingPlacementSignal();
                    return q(() => {
                        e.aborted || Z()
                    })
                }, I[48] = q, I[49] = T, I[50] = Z, I[51] = F, I[52] = C) : C = I[52], I[53] !== q || I[54] !== T || I[55] !== F ? (_ = [q, T, F], I[53] = q, I[54] = T, I[55] = F, I[56] = _) : _ = I[56], (0, s.useLayoutEffect)(C, _), I[57] !== F ? (w = (0, a.jsx)(i.a, {
                    controller: F
                }), I[57] = F, I[58] = w) : w = I[58], w
            }
        })
    }),
    TRQ3: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("iTtm"),
            o = n("jqIZ"),
            i = n("OWtl"),
            l = n("Ow2S"),
            c = n("wwvo"),
            d = n("x4uR"),
            u = n("u4MG"),
            h = n("OOaz"),
            p = n("dQRk"),
            m = n("jAnS");
        let g = (0, s.d)(i.a, (e, t) => {
            let {
                get: n
            } = t, a = n(p.j, e);
            return null != a ? a : n(p.D, e) || n(l.i, e) || null != n(l.y, e) ? void 0 : null
        });
        n.d(t, {}, {
            a: function(e) {
                let t, n, l, f, v, y, b, x = (0, r.c)(36),
                    {
                        children: C,
                        conversationId: _,
                        routePattern: w,
                        homePath: I
                    } = e,
                    T = void 0 === I ? "/" : I,
                    S = (0, s.y)(i.a),
                    {
                        hash: j,
                        key: E,
                        pathname: A,
                        search: P,
                        state: M
                    } = (0, o.Y)(),
                    {
                        conversationId: k,
                        gizmoId: R
                    } = (0, o.cb)(),
                    O = (0, s.x)(g, _),
                    N = (0, s.x)(p.D, _),
                    G = (0, s.x)(p.R, _),
                    B = N ? G : R;
                x[0] !== B ? (t = null != B && (0, u.a)(B) ? B : null, x[0] = B, x[1] = t) : t = x[1], x[2] === Symbol.for("react.memo_cache_sentinel") ? (n = {
                    enabled: !1
                }, x[2] = n) : n = x[2];
                let {
                    data: z
                } = (0, s.x)(d.b, t, n);
                x[3] !== B ? (l = null == B || (0, u.a)(B) ? null : B, x[3] = B, x[4] = l) : l = x[4], x[5] === Symbol.for("react.memo_cache_sentinel") ? (f = {
                    enabled: !1
                }, x[5] = f) : f = x[5];
                let {
                    data: F
                } = (0, s.x)(c.b, l, f);
                if (null === O || (0, m.i)(P) && null != O && !N) {
                    let e;
                    return x[6] !== T || x[7] !== P ? (e = (0, a.jsx)(o.l, {
                        replace: !0,
                        to: {
                            pathname: T,
                            search: P
                        }
                    }), x[6] = T, x[7] = P, x[8] = e) : e = x[8], e
                }
                x[9] !== _ || x[10] !== F?.gizmo || x[11] !== B || x[12] !== z?.gizmo || x[13] !== O || x[14] !== w ? (v = null != w ? (0, o.C)(w, {
                    conversationId: O ?? _
                }) : (0, m.c)(O ?? _, {
                    gizmoId: z?.gizmo.short_url ?? F?.gizmo.short_url ?? B
                }), x[9] = _, x[10] = F?.gizmo, x[11] = B, x[12] = z?.gizmo, x[13] = O, x[14] = w, x[15] = v) : v = x[15];
                let D = v;
                if (x[16] !== _ || x[17] !== D || x[18] !== k || x[19] !== j || x[20] !== E || x[21] !== A || x[22] !== O || x[23] !== S || x[24] !== P || x[25] !== M) {
                    let e = new URLSearchParams(P),
                        t = null != O && e.has("mfr"),
                        n = S.get(p.x, _),
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
                    if (null != k && (0, h.e)(k) && null != O) {
                        let e;
                        x[31] !== r ? (e = {
                            ...r,
                            fromChatGptFirstSend: !0
                        }, x[31] = r, x[32] = e) : e = x[32], r = e
                    }
                    y = A !== D || t ? (0, a.jsx)(o.l, {
                        replace: !0,
                        state: "tpp" === n || "flora" === n ? {
                            ...r,
                            workTurnVisit: (0, m.f)(S, E, M?.workTurnVisit)
                        } : r,
                        to: {
                            hash: t ? "" : j,
                            pathname: D,
                            search: t ? e.toString() : P
                        }
                    }) : null, x[16] = _, x[17] = D, x[18] = k, x[19] = j, x[20] = E, x[21] = A, x[22] = O, x[23] = S, x[24] = P, x[25] = M, x[26] = y
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
            s = n("iTtm"),
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
                    m = (0, s.z)(c.d),
                    g = (0, o.useContext)(i.a);
                return h[0] !== p ? (e = () => (p.set(c.e, !0), () => {
                    p.set(c.e, !1), (0, c.a)(p)
                }), t = [p], h[0] = p, h[1] = e, h[2] = t) : (e = h[1], t = h[2]), (0, o.useLayoutEffect)(e, t), h[3] !== g || h[4] !== m ? (n = null == m ? null : (0, a.jsx)(a.Fragment, {
                    children: [m.parent, m, m.overlay].filter(u).map(e => (0, a.jsx)(d.a.Root, {
                        animateOnMount: e.animateOnMount ?? !0,
                        fillHeight: !0,
                        fullWidth: e.isFullWidth,
                        fullWidthTransition: e.fullWidthTransition,
                        isPIPObstacle: !1,
                        portalContainer: g,
                        reserveToolbarSpace: e.reserveToolbarSpace ?? !0,
                        shouldHideInlineImmediately: e === m.parent,
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
            s = n("mBJV"),
            o = n("slpy"),
            i = n("iTtm"),
            l = n("zd8w"),
            c = n("Wf1j"),
            d = n("oyxz"),
            u = n("jqIZ"),
            h = n("Cslg"),
            p = n("kphc"),
            m = n("ygO2"),
            g = n("bqtn"),
            f = n("Ot7V"),
            v = n("bf6R"),
            y = n("Bbed"),
            b = n("X6Vn"),
            x = n("SGsN"),
            C = n("MerI"),
            _ = n("yGJW"),
            w = n("gBBC"),
            I = n("OWtl"),
            T = n("hZax"),
            S = n("JYRT"),
            j = n("wwvo"),
            E = n("wrCb"),
            A = n("H7Nt"),
            P = n("vzxm"),
            M = n("jAnS"),
            k = n("PzQe"),
            R = n("BdXv"),
            O = n("M5pZ"),
            N = n("uY9p");
        let G = (0, y.a)(async () => (await Promise.all([n.e(680612), n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(229522), n.e(390575), n.e(480171), n.e(716164), n.e(74952)]).then(n.bind(n, "eZlv"))).GptHeaderAboutDialog);

        function B(e) {
            let t, n, y, B, z, F, D, L, H, W, U, q, K, V, Y, Q, $, Z, J, X, ee, et = (0, r.c)(60),
                {
                    gizmo: en
                } = e,
                ea = (0, i.y)(I.a),
                er = (0, c.a)(),
                {
                    search: es
                } = (0, u.Y)(),
                eo = (0, u._)(),
                [ei, el] = (0, l.useState)(!1),
                ec = (0, T.h)("2160578039"),
                ed = (0, i.x)(S.a, "2513446768"),
                eu = ec && "gpt" === en.gizmo.gizmo_type && null != en.gizmo.migrated_plugin_id;
            et[0] !== ed ? (t = ed?.get("disable_gpt_updates", !1), et[0] = ed, et[1] = t) : t = et[1];
            let eh = t,
                ep = en.gizmo.current_user_permission?.can_write && !eu && !eh,
                {
                    data: em
                } = (0, i.z)(j.c);
            et[2] !== en.gizmo.id || et[3] !== em ? (n = em?.some(e => {
                let {
                    item: t
                } = e;
                return t.gizmo.id === en.gizmo.id
            }), et[2] = en.gizmo.id, et[3] = em, et[4] = n) : n = et[4];
            let eg = n;
            et[5] === Symbol.for("react.memo_cache_sentinel") ? (y = (0, E.a)("/gpts/editor"), et[5] = y) : y = et[5];
            let ef = `${y}/${encodeURIComponent(en.gizmo.id)}`;
            et[6] !== en.gizmo.id || et[7] !== en.gizmo.short_url ? (B = en.gizmo.short_url?.trim() || en.gizmo.id, et[6] = en.gizmo.id, et[7] = en.gizmo.short_url, et[8] = B) : B = et[8], et[9] !== B ? (z = (0, P.c)(B), et[9] = B, et[10] = z) : z = et[10], et[11] !== es ? (F = (0, M.e)("", (0, M.i)(es)), et[11] = es, et[12] = F) : F = et[12];
            let ev = `${z}${F}`;
            et[13] !== er ? (D = er.formatMessage({
                id: "chatgptConversations.customGpt.actionsMenu",
                defaultMessage: "GPT actions",
                description: "Accessible label for the compact overflow menu containing actions for the current custom GPT in Codex Desktop"
            }), et[13] = er, et[14] = D) : D = et[14];
            let ey = D;
            et[15] === Symbol.for("react.memo_cache_sentinel") ? (L = (0, a.jsx)(C.a, {
                className: "icon-sm"
            }), et[15] = L) : L = et[15], et[16] !== ey ? (H = (0, a.jsx)(m.a, {
                "aria-label": ey,
                color: "ghost",
                size: "icon",
                children: L
            }), et[16] = ey, et[17] = H) : H = et[17], et[18] !== ey || et[19] !== ei || et[20] !== H ? (W = (0, a.jsx)(o.a, {
                content: ey,
                disabled: ei,
                children: H
            }), et[18] = ey, et[19] = ei, et[20] = H, et[21] = W) : W = et[21], et[22] !== en.gizmo.gizmo_type || et[23] !== en.gizmo.id || et[24] !== eo || et[25] !== ev || et[26] !== ea ? (U = "gpt" === en.gizmo.gizmo_type ? (0, a.jsxs)(g.c.Item, {
                href: ev,
                onClick: e => {
                    e.defaultPrevented || ((0, _.a)(ea, s.pc, {
                        stage: "CHATGPT_NEW_CHAT_ENTRY_STAGE_ENTRY",
                        entryPoint: "CHATGPT_NEW_CHAT_ENTRY_POINT_GPT_MENU",
                        location: "CHATGPT_NEW_CHAT_ENTRY_LOCATION_GIZMO_INFORMATION_DROPDOWN",
                        gizmoId: en.gizmo.id
                    }), 0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || (e.preventDefault(), el(!1), (0, w.c)(ea, null), (0, p.m)(ea, "chat"), eo(ev, {
                        state: {
                            focusComposerNonce: Date.now()
                        }
                    })))
                },
                children: [(0, a.jsx)(g.c.ItemIcon, {
                    children: (0, a.jsx)(v.Kh, {})
                }), (0, a.jsx)(d.a, {
                    id: "chatgptConversations.customGpt.newChat",
                    defaultMessage: "New chat",
                    description: "Short GPT actions menu label that opens a new conversation with the same custom GPT, rather than switching to general ChatGPT"
                })]
            }) : null, et[22] = en.gizmo.gizmo_type, et[23] = en.gizmo.id, et[24] = eo, et[25] = ev, et[26] = ea, et[27] = U) : U = et[27], et[28] !== en || et[29] !== ea ? (q = () => (0, b.f)(ea, G, {
                accountId: ea.get(h.f),
                resource: en
            }), et[28] = en, et[29] = ea, et[30] = q) : q = et[30], et[31] === Symbol.for("react.memo_cache_sentinel") ? (K = (0, a.jsx)(g.c.ItemIcon, {
                children: (0, a.jsx)(v.ge, {})
            }), V = (0, a.jsx)(d.a, {
                id: "chatgptConversations.customGpt.about",
                defaultMessage: "About",
                description: "GPT menu action that opens its details over the current conversation or landing page"
            }), et[31] = K, et[32] = V) : (K = et[31], V = et[32]), et[33] !== q ? (Y = (0, a.jsxs)(g.c.Item, {
                onSelect: q,
                children: [K, V]
            }), et[33] = q, et[34] = Y) : Y = et[34];
            let eb = eg ? N.a : O.a;
            return et[35] !== en || et[36] !== er || et[37] !== eg || et[38] !== ea ? (Q = () => {
                (0, j.e)(ea, en, !eg).catch(() => {
                    ea.get(x.f).danger(er.formatMessage({
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
            }), et[40] = eg, et[41] = $) : $ = et[41], et[42] !== eb || et[43] !== Q || et[44] !== $ ? (Z = (0, a.jsx)(g.c.Item, {
                leftIconAsset: eb,
                onSelect: Q,
                children: $
            }), et[42] = eb, et[43] = Q, et[44] = $, et[45] = Z) : Z = et[45], et[46] !== ep || et[47] !== ef || et[48] !== en.gizmo.current_user_permission?.can_view_config ? (J = ep || en.gizmo.current_user_permission?.can_view_config ? (0, a.jsx)(g.c.Item, {
                href: ef,
                leftIconAsset: ep ? R.a : k.a,
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
            }) : null, et[46] = ep, et[47] = ef, et[48] = en.gizmo.current_user_permission?.can_view_config, et[49] = J) : J = et[49], et[50] !== en ? (X = (0, a.jsx)(A.a, {
                resource: en
            }), et[50] = en, et[51] = X) : X = et[51], et[52] !== ei || et[53] !== W || et[54] !== U || et[55] !== Y || et[56] !== Z || et[57] !== J || et[58] !== X ? (ee = (0, a.jsxs)(g.a, {
                align: "start",
                contentWidth: "menu",
                open: ei,
                onOpenChange: el,
                triggerButton: W,
                children: [U, Y, Z, J, X]
            }), et[52] = ei, et[53] = W, et[54] = U, et[55] = Y, et[56] = Z, et[57] = J, et[58] = X, et[59] = ee) : ee = et[59], ee
        }
        n.d(t, {}, {
            ChatGptGizmoHeader: function(e) {
                let t, n, s, o, l, c = (0, r.c)(12),
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
                } = (0, i.x)(j.b, t);
                if (null == h) return null;
                c[3] !== h.gizmo.display.name ? (n = h.gizmo.display.name.trim(), c[3] = h.gizmo.display.name, c[4] = n) : n = c[4];
                let p = n;
                return c[5] !== p ? (s = p ? (0, a.jsx)("span", {
                    className: "truncate",
                    children: p
                }) : null, c[5] = p, c[6] = s) : s = c[6], c[7] !== h ? (o = (0, a.jsx)(B, {
                    gizmo: h
                }), c[7] = h, c[8] = o) : o = c[8], c[9] !== s || c[10] !== o ? (l = (0, a.jsxs)("div", {
                    className: "flex min-w-0 items-center gap-1 select-none",
                    children: [s, o]
                }), c[9] = s, c[10] = o, c[11] = l) : l = c[11], l
            }
        })
    }),
    C6kc: (function(e, t, n) {
        var a = n("mBJV"),
            r = n("MVHH"),
            s = n("D99L"),
            o = n("fVOX"),
            i = n("yGJW"),
            l = n("g2p6");

        function c(e, t, n) {
            "memory_footnote_shown" === t && (0, i.a)(e, s.CodexChatgptInteractionMemoryFootnoteShown, {
                memoryCitationExperiment: n
            }), e.get(o.a).count("default", t, {
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
                    experiment: s,
                    messageId: o,
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
                    messageId: o,
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
                    memoryCitationExperiment: s
                }), "CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ACTION_TYPE_SIDEBAR_OPENED" === n && c(e, "chatgpt_memory_citations_sidebar_open_clicked", s)
            },
            c: function(e, t) {
                "dismissed" === t && (0, i.a)(e, s.CodexChatgptInteractionMemoryIntroductionDismissed, {
                    announcementKey: l.c
                }), "shown" === t && (0, i.a)(e, a.rd, {
                    eventId: `${l.c}_tooltip_shown`,
                    type: "UPSELL_OR_MODAL_TYPE_NUX_TOOLTIP"
                })
            },
            d: c
        })
    }),
    JlMc: (function(e, t, n) {
        var a = n("QosV"),
            r = n("iTtm"),
            s = n("zd8w"),
            o = n("RU3e"),
            i = n("AcSY"),
            l = n("OWtl"),
            c = n("RFDv"),
            d = n("auXZ"),
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
                    b = void 0 === y || y,
                    x = (0, r.y)(l.a),
                    C = (0, s.useId)(),
                    {
                        mutate: _
                    } = (0, i.l)();
                return f[0] !== v || f[1] !== C || f[2] !== x ? (t = () => (x.set(p.b, e => new Map(e).set(C, v)), x.get(p.a)?.dismissCurrent(), () => {
                    x.set(p.b, e => {
                        let t = new Map(e);
                        return t.delete(C), t
                    })
                }), n = [v, C, x], f[0] = v, f[1] = C, f[2] = x, f[3] = t, f[4] = n) : (t = f[3], n = f[4]), (0, s.useEffect)(t, n), f[5] !== v || f[6] !== b || f[7] !== _ || f[8] !== x ? (m = () => {
                    if (!b) return;
                    let e = x.watch(e => {
                            let {
                                get: t
                            } = e
                        }),
                        t = x.watch(e => {
                            let {
                                get: t
                            } = e, n = !0 === t(o.a);
                            if ((0, h.ac)(x, v, n), !n) return;
                            let a = t(h.j, v);
                            if (null == a || !0 !== t(d.r, a)) return;
                            let r = (0, u.b)(a);
                            (0, c.j)(x, r, x.get(d.z, r)), _(a)
                        });
                    return () => {
                        e(), t(), (0, h.ac)(x, v, !1)
                    }
                }, g = [v, b, _, x], f[5] = v, f[6] = b, f[7] = _, f[8] = x, f[9] = m, f[10] = g) : (m = f[9], g = f[10]), (0, s.useEffect)(m, g), null
            }
        })
    }),
    fr5e: (function(e, t, n) {
        n.d(t, {
            a: () => G
        });
        var a = n("ABep"),
            r = n("QosV"),
            s = n("iRMi"),
            o = n("D99L"),
            i = n("D015"),
            l = n("iTtm"),
            c = n("zd8w"),
            d = n("oyxz"),
            u = n("TDcV"),
            h = n("YxWD"),
            p = n("EFj1"),
            m = n("SGsN"),
            g = n("yGJW"),
            f = n("OWtl"),
            v = n("aepO"),
            y = n("bIvi"),
            b = n("lBzi"),
            x = n("Ga6O"),
            C = n("dQRk"),
            _ = n("jfiJ"),
            w = n("FGJH"),
            I = n("Vcrm"),
            T = n("OCK3"),
            S = n("dhxJ"),
            j = n("lsky"),
            E = n("rKAs"),
            A = n("ASxG"),
            P = n("rn0J"),
            M = n("XpUB"),
            k = n("G6mJ"),
            R = n("VB5Q"),
            O = n("VTN2");
        let N = A.record(A.string(), A.union([A.string(), A.literal(!0)]));

        function G(e) {
            let t, n, A, G, z, F, D = (0, r.c)(28),
                {
                    conversationId: L,
                    turns: H,
                    loadHistory: W,
                    renderMode: U,
                    paragenEnabled: q,
                    enabled: K,
                    canCopy: V,
                    priority: Y
                } = e,
                Q = void 0 === U ? "conversation" : U,
                $ = void 0 !== q && q,
                Z = void 0 === K || K,
                J = void 0 === V || V,
                X = void 0 === Y ? "fallback" : Y,
                ee = (0, l.y)(f.a),
                et = (0, c.useRef)(null);
            D[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => () => et.current?.abort(), D[0] = t) : t = D[0], D[1] !== J || D[2] !== L || D[3] !== Z || D[4] !== W || D[5] !== $ || D[6] !== Q ? (n = [L, Z, J, W, Q, $], D[1] = J, D[2] = L, D[3] = Z, D[4] = W, D[5] = $, D[6] = Q, D[7] = n) : n = D[7], (0, c.useEffect)(t, n), D[8] !== J || D[9] !== L || D[10] !== $ || D[11] !== Q || D[12] !== ee || D[13] !== H ? (A = () => {
                let e = ee.get(C.j, L),
                    t = ee.query.getData(b.chatGptConversationQueryById$, e),
                    n = t?.conversation_origin ?? ee.get(C.x, L);
                if (!J || "tpp" === n || "flora" === n) return null;
                let a = ee.get(C.L, L),
                    r = $ && "conversation" === Q ? ee.get(I.a, L)?.promptMessageId : void 0,
                    s = function(e) {
                        for (let {
                                turn: t
                            }
                            of e.toReversed())
                            for (let e of t.items.toReversed()) {
                                if ("assistant-message" !== e.type) continue;
                                let t = null,
                                    n = 0;
                                if ((0, j.h)((0, M.a)(e.content, E.b), a => {
                                        if ("codexDirective" === a.type && a.name === E.a) {
                                            let n = N.safeParse(a.attributes);
                                            if (!n.success) return;
                                            let r = (0, k.a)(n.data, e.contentReferences),
                                                s = O.d.safeParse(r?.reference);
                                            if (null == r || !s.success || (null == n.data.is_streaming ? !e.completed && (e.contentReferenceMessageStatuses?.[r.index] ?? "in_progress") === "in_progress" : "true" === n.data.is_streaming)) return;
                                            let o = e.contentReferenceMessageIds?.[r.index];
                                            t = {
                                                content: (0, R.a)(s.data.data),
                                                messageId: o ?? e.messageId,
                                                codeBlockIndex: null == o ? r.index : e.contentReferenceMessageIds?.slice(0, r.index).filter(e => e === o).length ?? 0
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
                    }(H ?? (0, x.b)({
                        conversation: t,
                        threadMapping: a,
                        threadCurrentNode: r ?? ee.get(C.B, L),
                        conversationOrigin: n,
                        isStreaming: (0, C.zb)(ee.get(C._, L)),
                        mode: Q,
                        moderationDisclaimersByMessageId: ee.get(C.M, L),
                        pendingSubmission: null
                    }).renderedTurns);
                if (s?.messageId == null) return {
                    serverId: e,
                    comparisonPromptMessageId: r,
                    content: s?.content
                };
                let o = {
                        conversationId: L,
                        messageId: s.messageId,
                        codeBlockIndex: s.codeBlockIndex
                    },
                    i = (0, S.a)(a?.[s.messageId]?.message?.metadata);
                return {
                    serverId: e,
                    comparisonPromptMessageId: r,
                    content: ee.get(T.b, o) ?? i?.[String(s.codeBlockIndex)]?.content ?? s.content
                }
            }, D[8] = J, D[9] = L, D[10] = $, D[11] = Q, D[12] = ee, D[13] = H, D[14] = A) : A = D[14];
            let en = (0, y.a)(A);
            D[15] !== ee ? (G = (e, t) => {
                let n = e => {
                    (0, g.a)(ee, o.CodexChatgptInteractionCodeCopyRequested, {
                        characterCount: (0, i.a)(e.length),
                        productExperience: s.CodexExpandedSidePanelProductSurface.CODEX_EXPANDED_SIDE_PANEL_PRODUCT_SURFACE_CHAT
                    })
                };
                return (0, v.b)(e, void 0, () => {
                    "string" == typeof e ? n(e) : e.then(n, B)
                }).then(e => {
                    e && !t?.aborted && ee.get(m.f).success((0, a.jsx)(d.a, {
                        id: "chatgpt.codeBlocks.copyLast.success",
                        defaultMessage: "Copied code block to clipboard",
                        description: "Success toast after the user copies the last assistant code block using the keyboard shortcut or command menu in Chat mode"
                    }))
                })
            }, D[15] = ee, D[16] = G) : G = D[16];
            let ea = G;
            return D[17] !== L || D[18] !== en || D[19] !== W || D[20] !== $ || D[21] !== Q || D[22] !== ee || D[23] !== ea ? (z = () => {
                if (et.current?.signal.aborted === !1) return;
                let e = en();
                if (null == e) return;
                if (null != e.content) return void ea(e.content);
                let {
                    serverId: t,
                    comparisonPromptMessageId: n
                } = e;
                if (!W || ee.get(C.A, L) || null == t || ee.get(w.c, t)?.complete !== !1) return;
                let a = new AbortController;
                et.current = a;
                let r = ee.get(u.a),
                    s = ee.get(C.B, L),
                    o = ee.get(h.f).copyLastCodeBlock,
                    i = ee.watch(e => {
                        let {
                            get: t
                        } = e;
                        (t(u.a) !== r || t(C.B, L) !== s || $ && "conversation" === Q && t(I.a, L)?.promptMessageId !== n || t(h.f).copyLastCodeBlock !== o) && a.abort()
                    });
                ea((async () => {
                    await (0, _.a)(ee, t, a.signal), a.signal.throwIfAborted();
                    let e = en()?.content;
                    if (null == e) throw Error("No complete code block in this conversation");
                    return e
                })(), a.signal).finally(() => {
                    i(), et.current === a && (et.current = null)
                })
            }, D[17] = L, D[18] = en, D[19] = W, D[20] = $, D[21] = Q, D[22] = ee, D[23] = ea, D[24] = z) : z = D[24], D[25] !== Z || D[26] !== X ? (F = {
                enabled: Z,
                priority: X
            }, D[25] = Z, D[26] = X, D[27] = F) : F = D[27], (0, p.a)("copyLastCodeBlock", z, F), null
        }

        function B() {}
    }),
    LEgg: (function(e, t, n) {
        n.d(t, {
            a: () => _
        });
        var a = n("ABep"),
            r = n("QosV");
        n("slpy");
        var s = n("iTtm"),
            o = n("Wf1j"),
            i = n("QcFS"),
            l = n("TdH6"),
            c = n("QcW8");
        n("ZU27"), n("TpEm");
        var d = n("gbrq"),
            u = n("fBor"),
            h = n("ipGa"),
            p = n("bg18"),
            m = n("zd8w"),
            g = n("tSEg"),
            f = n("YnF4"),
            v = n("dQRk");

        function y() {
            let e, t, n = (0, r.c)(3),
                a = (0, s.y)(g.a);
            return n[0] !== a ? (e = () => {
                if ("chatgpt-thread" !== a.value.routeKind) return;
                let e = a.value.conversationId;
                return a.watch(t => {
                    let {
                        get: n
                    } = t, r = n(v.j, e);
                    if (null != r) return (0, f.a)(a, (0, p.Oe)(`chatgpt:${r}`))
                })
            }, t = [a], n[0] = a, n[1] = e, n[2] = t) : (e = n[1], t = n[2]), (0, m.useLayoutEffect)(e, t), null
        }
        n("n5iL"), n("q3HK"), n("bf6R");
        var b = n("rBfn"),
            x = n("enMl"),
            C = n("PCEr");

        function _(e) {
            let t, n, s, o, l, c, d = (0, r.c)(16),
                {
                    chatIcon: p,
                    header: m,
                    title: g,
                    isArchivedPreview: f,
                    children: v
                } = e;
            return d[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(i.a.MainContentLayout, {
                layout: (0, h.a)() ? "default" : "thread-edge-scroll"
            }), d[0] = t) : t = d[0], d[1] !== f ? (n = f ? null : (0, a.jsx)(u.SitePreviewBridge, {}), d[1] = f, d[2] = n) : n = d[2], d[3] !== m ? (s = null == m ? null : (0, a.jsx)(i.a.Header, {
                desktopPlacement: "titlebar",
                divider: !1,
                children: m
            }), d[3] = m, d[4] = s) : s = d[4], d[5] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, a.jsx)(i.a.RightPanelOutlet, {
                children: (0, a.jsx)(i.a.RightPanelTabs, {})
            }), d[5] = o) : o = d[5], d[6] !== p || d[7] !== m || d[8] !== f || d[9] !== g ? (l = f ? null : (0, a.jsx)(w, {
                chatIcon: p,
                mainToolbar: m,
                title: g
            }), d[6] = p, d[7] = m, d[8] = f, d[9] = g, d[10] = l) : l = d[10], d[11] !== v || d[12] !== n || d[13] !== s || d[14] !== l ? (c = (0, a.jsxs)(a.Fragment, {
                children: [t, n, s, v, o, l]
            }), d[11] = v, d[12] = n, d[13] = s, d[14] = l, d[15] = c) : c = d[15], c
        }

        function w(e) {
            let t, n, i, u, p, m, f = (0, r.c)(13),
                {
                    chatIcon: v,
                    mainToolbar: _,
                    title: w
                } = e,
                I = (0, s.y)(g.a);
            (0, o.a)(), (0, s.z)(d.i), (0, s.z)(c.s), f[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(l.a, {}), n = (0, a.jsx)(y, {}), f[0] = t, f[1] = n) : (t = f[0], n = f[1]), f[2] !== v || f[3] !== w ? (i = (0, a.jsx)(x.a, {
                title: w,
                icon: v
            }), f[2] = v, f[3] = w, f[4] = i) : i = f[4];
            let T = _ ?? void 0;
            return f[5] !== T ? (u = (0, a.jsx)(C.a, {
                mainToolbar: T
            }), f[5] = T, f[6] = u) : u = f[6], f[7] !== I.value.routeKind ? (p = "other" === I.value.routeKind || (0, h.a)() ? null : (0, a.jsx)(b.b, {
                showLauncherButton: !1
            }), f[7] = I.value.routeKind, f[8] = p) : p = f[8], f[9] !== i || f[10] !== u || f[11] !== p ? (m = (0, a.jsxs)(a.Fragment, {
                children: [t, n, i, u, p, null, null]
            }), f[9] = i, f[10] = u, f[11] = p, f[12] = m) : m = f[12], m
        }
    }),
    dLcZ: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("on57"),
            o = n("QcFS"),
            i = n("NVRI");
        n.d(t, {}, {
            a: function(e) {
                let t, n, s, o, l, c, d, u, h = (0, r.c)(16);
                if (h[0] !== e ? ({
                        isTemporaryChat: l,
                        isCloudTask: n,
                        breadcrumbHeader: t,
                        startActions: o,
                        ...s
                    } = e, h[0] = e, h[1] = t, h[2] = n, h[3] = s, h[4] = o, h[5] = l) : (t = h[1], n = h[2], s = h[3], o = h[4], l = h[5]), void 0 !== l && l) return null;
                h[6] !== n || h[7] !== o ? (c = null != o || n ? (0, a.jsxs)(a.Fragment, {
                    children: [o, null]
                }) : null, h[6] = n, h[7] = o, h[8] = c) : c = h[8], h[9] !== s || h[10] !== c ? (d = (0, a.jsx)(i.a, {
                    ...s,
                    inset: "tab-strip-flush-start",
                    startActions: c
                }), h[9] = s, h[10] = c, h[11] = d) : d = h[11];
                let p = d;
                if (null != t) {
                    let e;
                    return h[12] !== t ? (e = (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(a.Fragment, {
                            children: t
                        }), null]
                    }), h[12] = t, h[13] = e) : e = h[13], e
                }
                return h[14] !== p ? (u = (0, a.jsx)(a.Fragment, {
                    children: p
                }), h[14] = p, h[15] = u) : u = h[15], u
            },
            b: function(e) {
                let t, n, i, l, c = (0, r.c)(10),
                    {
                        allowsThreadContentOverlap: d,
                        children: u,
                        menu: h
                    } = e,
                    p = void 0 !== d && d;
                return c[0] !== u ? (t = {
                    actionId: "chatgpt-conversation-actions",
                    order: 100,
                    content: u
                }, c[0] = u, c[1] = t) : t = c[1], c[2] !== h ? (n = {
                    actionId: "chatgpt-conversation-overflow",
                    order: 0,
                    content: h
                }, c[2] = h, c[3] = n) : n = c[3], c[4] !== t || c[5] !== n ? (i = [t, n], c[4] = t, c[5] = n, c[6] = i) : i = c[6], c[7] !== p || c[8] !== i ? (l = (0, a.jsx)(a.Fragment, {
                    children: i.map(e => {
                        let {
                            actionId: t,
                            order: n,
                            content: r
                        } = e;
                        return null == r ? null : (0, a.jsx)(o.a.HeaderAction, {
                            actionId: t,
                            align: "end",
                            allowsThreadContentOverlap: p,
                            order: n,
                            children: (0, a.jsx)("div", {
                                className: (0, s.b)("flex items-center gap-toolbar-action", p && "browser:rounded-lg browser:bg-surface"),
                                children: r
                            })
                        }, t)
                    })
                }), c[7] = p, c[8] = i, c[9] = l) : l = c[9], l
            }
        })
    }),
    WVag: (function(e, t, n) {
        var a = n("LwKP"),
            r = n("iTtm"),
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
        var a = n("iTtm"),
            r = n("AuIy"),
            s = n("IgxH"),
            o = n("OWtl"),
            i = n("OMIV"),
            l = n("dQRk");
        let c = (0, a.d)(o.a, (e, t) => {
                let {
                    get: n
                } = t;
                if (null == e) return null;
                let a = n(l.L, e),
                    s = n(l.B, e);
                return null == a || null == s ? null : (0, r.b)({
                    mapping: a,
                    current_node: s
                }).findLast(e => "assistant" === e.author.role && !(0, r.m)(e) && "" !== (0, r.e)(e).trim())
            }),
            d = (0, a.d)(o.a, (e, t) => {
                let {
                    get: n
                } = t;
                if (null == e || n(i.d, "2163293173") && !n(l.I, e)) return null;
                let a = n(c, e);
                return null == a ? null : (0, s.a)((0, r.e)(a)).trim()
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
            s = n("iTtm"),
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
                let t, n, d, m, g = (0, r.c)(9),
                    {
                        resource: f,
                        onSelect: v
                    } = e,
                    y = (0, s.y)(h.a),
                    b = (0, s.z)(i.f);
                return null == b || f.gizmo.tags?.includes("first_party") || "marketplace" !== f.gizmo.share_recipient && "link" !== f.gizmo.share_recipient ? null : (g[0] !== b || g[1] !== v || g[2] !== f || g[3] !== y ? (t = () => {
                    v?.(), (0, u.f)(y, p, {
                        accountId: b,
                        resource: f
                    })
                }, g[0] = b, g[1] = v, g[2] = f, g[3] = y, g[4] = t) : t = g[4], g[5] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(l.c.ItemIcon, {
                    children: (0, a.jsx)(c.rd, {})
                }), d = (0, a.jsx)(o.a, {
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
            s = n("on57"),
            o = n("iTtm"),
            i = n("jqIZ"),
            l = n("Bbed"),
            c = n("OWtl"),
            d = n("OMIV"),
            u = n("wwvo"),
            h = n("tV8b"),
            p = n("u9iS");
        let m = (0, l.a)(async () => (await n.e(901042).then(n.bind(n, "ut8h"))).GptPluginMigrationBannerContent, {
            errorFallback: e => (0, a.jsx)(f, {
                ...e
            })
        });

        function g(e) {
            let t, n = (0, r.c)(3),
                {
                    gizmoId: s
                } = e,
                i = (0, o.x)(d.d, "2160578039");
            return n[0] !== i || n[1] !== s ? (t = i ? (0, a.jsx)(m, {
                gizmoId: s
            }, s) : null, n[0] = i, n[1] = s, n[2] = t) : t = n[2], t
        }

        function f(e) {
            let t, n, s = (0, r.c)(10),
                {
                    gizmoId: l
                } = e,
                d = (0, o.y)(c.a),
                m = (0, i.Y)(),
                g = (0, i._)(),
                {
                    data: f
                } = (0, o.x)(u.b, l);
            s[0] !== l || s[1] !== m.pathname ? (t = {
                gizmoId: l,
                visitKey: m.pathname
            }, s[0] = l, s[1] = m.pathname, s[2] = t) : t = s[2];
            let v = (0, o.x)(p.c, t);
            return s[3] !== v || s[4] !== l || s[5] !== m.pathname || s[6] !== g || s[7] !== f || s[8] !== d ? (n = v && f?.gizmo.migrated_plugin_id ? (0, a.jsx)(h.a, {
                gptName: f.gizmo.display.name,
                accessState: "error",
                onUsePlugin: () => void g("/plugins"),
                onKeepUsingGpt: () => (0, p.a)(d, {
                    gizmoId: l,
                    visitKey: m.pathname
                })
            }) : null, s[3] = v, s[4] = l, s[5] = m.pathname, s[6] = g, s[7] = f, s[8] = d, s[9] = n) : n = s[9], n
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
            i = n("zKCW"),
            l = n("ygO2"),
            c = n("HOLv"),
            d = n("hZax"),
            u = n("slBk"),
            h = n("rt9H");
        n.d(t, {}, {
            a: function(e) {
                let t, n, p, m, g, f, v, y, b, x = (0, r.c)(34),
                    {
                        gptName: C,
                        accessState: _,
                        onUsePlugin: w,
                        onKeepUsingGpt: I,
                        onRetry: T
                    } = e,
                    S = (0, s.a)(),
                    j = (0, d.g)("2513446768");
                x[0] !== j || x[1] !== S ? (t = S.formatDate((0, u.a)(j.get("retirement_date", "")), {
                    month: "long",
                    day: "numeric",
                    timeZone: "UTC"
                }), x[0] = j, x[1] = S, x[2] = t) : t = x[2];
                let E = t;
                if ("error" === _ && null != T) {
                    let e;
                    x[3] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(o.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceRetry",
                        defaultMessage: "Try again",
                        description: "Retry checking access to the migrated plugin"
                    }), x[3] = e) : e = x[3], n = e
                } else if ("admin" === _) {
                    let e;
                    x[4] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(o.a, {
                        id: "chatgptConversations.gpts.migration.viewPlugin",
                        defaultMessage: "View Plugin",
                        description: "Button that opens a migrated plugin in workspace admin settings for an administrator who cannot open its ordinary plugin details; does not start a chat"
                    }), x[4] = e) : e = x[4], n = e
                } else if ("allowed" === _ || "pending" === _) {
                    let e;
                    x[5] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(o.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceUsePlugin",
                        defaultMessage: "Use plugin",
                        description: "Opens the migrated plugin detail page from the initial GPT chat choice."
                    }), x[5] = e) : e = x[5], n = e
                } else {
                    let e;
                    x[6] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(o.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceExplorePlugins",
                        defaultMessage: "Explore plugins",
                        description: "Opens the plugin directory from a migrated GPT chat banner when access to its plugin was denied or could not be verified after a failed request."
                    }), x[6] = e) : e = x[6], n = e
                }
                if ("error" === _ && null == T) {
                    let e;
                    x[7] !== E ? (e = (0, a.jsx)(o.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceAccessUnconfirmed",
                        defaultMessage: "We couldn’t check your access to the plugin. You can keep using this GPT until {deadline}.",
                        description: "Fallback when the migration banner cannot load. Access is unknown; the user can explore plugins or continue using the GPT.",
                        values: {
                            deadline: E
                        }
                    }), x[7] = E, x[8] = e) : e = x[8], p = e
                } else if ("error" === _) {
                    let e;
                    x[9] !== E ? (e = (0, a.jsx)(o.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceAccessError",
                        defaultMessage: "We couldn’t check your access to the plugin. Try again, or keep using this GPT until {deadline}.",
                        description: "Migrated GPT notice after a failed plugin-access check; deadline is the localized retirement date",
                        values: {
                            deadline: E
                        }
                    }), x[9] = E, x[10] = e) : e = x[10], p = e
                } else if ("denied" === _) {
                    let e;
                    x[11] !== E ? (e = (0, a.jsx)(o.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceAccessDenied",
                        defaultMessage: "This plugin isn’t available to you. You can keep using this GPT until {deadline}.",
                        description: "Migrated GPT notice when the destination plugin is inaccessible; deadline is the localized retirement date",
                        values: {
                            deadline: E
                        }
                    }), x[11] = E, x[12] = e) : e = x[12], p = e
                } else if (C.trim()) {
                    let e;
                    x[13] !== E || x[14] !== C ? (e = (0, a.jsx)(o.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceNamedBody",
                        defaultMessage: "{gptName} is now available as a plugin. You can keep using this GPT until {deadline}.",
                        description: "Explains the migrated GPT choice before the composer. gptName is the GPT display name and deadline is a localized month and day.",
                        values: {
                            gptName: C,
                            deadline: E
                        }
                    }), x[13] = E, x[14] = C, x[15] = e) : e = x[15], p = e
                } else {
                    let e;
                    x[16] !== E ? (e = (0, a.jsx)(o.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceBody",
                        defaultMessage: "This GPT is now available as a plugin. You can keep using this GPT until {deadline}.",
                        description: "Explains the migrated GPT choice when the GPT has no display name; deadline is a localized month and day.",
                        values: {
                            deadline: E
                        }
                    }), x[16] = E, x[17] = e) : e = x[17], p = e
                }
                x[18] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, a.jsx)(c.a, {
                    asset: h.a,
                    className: "text-secondary"
                }), x[18] = m) : m = x[18], x[19] !== C ? (g = C.trim() ? (0, a.jsx)(o.a, {
                    id: "chatgptConversations.gpts.migration.chatChoiceNamedTitle",
                    defaultMessage: "{gptName} is now a plugin",
                    description: "Title of the migrated GPT chat choice shown before the composer. gptName is the user-provided GPT name.",
                    values: {
                        gptName: C
                    }
                }) : (0, a.jsx)(o.a, {
                    id: "chatgptConversations.gpts.migration.chatChoiceTitle",
                    defaultMessage: "This GPT is now a plugin",
                    description: "Title of the migrated GPT chat choice when the GPT has no display name."
                }), x[19] = C, x[20] = g) : g = x[20];
                let A = "pending" === _,
                    P = "error" === _ && null != T ? T : w;
                return x[21] !== n || x[22] !== A || x[23] !== P ? (f = (0, a.jsx)(l.a, {
                    color: "primary",
                    loading: A,
                    size: "dialog",
                    type: "button",
                    onClick: P,
                    children: n
                }), x[21] = n, x[22] = A, x[23] = P, x[24] = f) : f = x[24], x[25] !== I ? (v = null == I ? null : (0, a.jsx)(l.a, {
                    color: "outline",
                    size: "dialog",
                    type: "button",
                    onClick: I,
                    children: (0, a.jsx)(o.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceKeepUsing",
                        defaultMessage: "Keep using GPT",
                        description: "Reveals the existing GPT chat composer for this visit only, keeping its draft. The choice is shown again when the GPT is reopened."
                    })
                }), x[25] = I, x[26] = v) : v = x[26], x[27] !== f || x[28] !== v ? (y = (0, a.jsxs)("div", {
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
            r = n("iTtm"),
            s = n("ASxG"),
            o = n("OWtl"),
            i = n("OMIV"),
            l = n("b6fw"),
            c = n("YdNM");
        let d = s.object({
                course_id: s.string().trim().min(1),
                title: s.string().trim().nullish().catch(null),
                icon_url_or_emoji: c.a
            }),
            u = s.object({
                course_info: d.nullish()
            }),
            h = (0, r.d)(o.a, (e, t) => {
                let {
                    get: n
                } = t, a = u.safeParse(n(l.g, e)?.view);
                return a.success ? a.data.course_info ?? null : null
            }, {
                isEqual: a.isEqual
            }),
            p = (0, r.d)(o.a, (e, t) => {
                let {
                    get: n
                } = t;
                return n(i.d, "4035922817") ? n(h, e) : null
            }),
            m = (0, r.d)(o.a, (e, t) => {
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
            s = n("XtQP"),
            o = n("dQRk"),
            i = n("ZniH");
        let l = (0, a.a)({
            conversationIds: (e, t) => [t],
            status: (e, t) => {
                let {
                    get: n
                } = e, a = n(o.v, t);
                return {
                    pending: (0, o.zb)(n(o._, t)),
                    completed: null == a || "completed" === a.result,
                    completionId: n(r.d, "2163293173") ? JSON.stringify([t, a?.requestId, n(o.B, t)]) : void 0,
                    unread: n(o.I, t)
                }
            },
            preview: (e, t) => {
                let {
                    get: n
                } = e, a = n(o.L, t);
                return null == a ? null : (0, i.a)({
                    mapping: a,
                    current_node: n(o.B, t)
                })?.text ?? null
            },
            title: (e, t) => {
                let {
                    get: n
                } = e;
                return n(o.cb, t) || null
            },
            dismiss: (e, t) => {
                (0, o.Vb)(e, t, !1), (0, s.b)(e, t).catch(() => {})
            }
        });
        n.d(t, {}, {
            a: l
        })
    }),
    M3Kf: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("iTtm"),
            o = n("zd8w"),
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
                    C = (0, s.y)(c.a),
                    _ = (0, s.z)(l.b),
                    w = (0, s.x)(h.j, x),
                    I = (0, s.x)(m.c, w ?? x),
                    T = (0, u.b)(),
                    S = (0, o.useRef)(null);
                b[0] !== C || b[1] !== w ? (t = () => {
                    null != w && (0, p.b)(C, w, i.flushSync)
                }, b[0] = C, b[1] = w, b[2] = t) : t = b[2];
                let j = t;
                b[3] !== x || b[4] !== j || b[5] !== C || b[6] !== w ? (n = () => {
                    let e = C.get(m.c, w ?? x);
                    C.get(l.b) || e?.hasError || j()
                }, b[3] = x, b[4] = j, b[5] = C, b[6] = w, b[7] = n) : n = b[7];
                let E = (0, o.useEffectEvent)(n);
                b[8] !== T || b[9] !== _ || b[10] !== E ? (f = () => {
                    if (_) return;
                    let e = S.current,
                        t = T.getScrollElement();
                    if (null == e || null == t) return;
                    let n = new IntersectionObserver(e => {
                        e.some(g) && E()
                    }, {
                        root: t,
                        rootMargin: "80px 0px 0px 0px"
                    });
                    return n.observe(e), () => n.disconnect()
                }, b[8] = T, b[9] = _, b[10] = E, b[11] = f) : f = b[11];
                let A = I?.cursor,
                    P = I?.hasError;
                if (b[12] !== T || b[13] !== _ || b[14] !== w || b[15] !== A || b[16] !== P ? (v = [T, _, w, A, P], b[12] = T, b[13] = _, b[14] = w, b[15] = A, b[16] = P, b[17] = v) : v = b[17], (0, o.useEffect)(f, v), null == I || I.complete || null == I.cursor) return null;
                let M = I.hasError ? j : null;
                return b[18] !== M ? (y = (0, a.jsx)(d.a, {
                    ref: S,
                    onRetry: M
                }), b[18] = M, b[19] = y) : y = b[19], y
            }
        })
    }),
    lUUH: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("iTtm"),
            o = n("oyxz"),
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
            b = n("wVX4"),
            x = n("c5lN"),
            C = n("QmkR"),
            _ = n("xEXG"),
            w = n("KMqT"),
            I = n("J6LI"),
            T = n("FgUr"),
            S = n("WLgA");
        let j = (0, s.u)(f.a, 0);

        function E(e) {
            let {
                scope: t,
                conversation: n,
                project: r,
                projectListQuery: s,
                pinnedProjectsQuery: o,
                showMoveToProject: i = !0,
                showDestinationFetchState: l = !0,
                projectCrudStatus: c,
                navigate: f,
                onCreateProjectDialogCloseAutoFocus: _
            } = e, {
                isWorkConversation: E,
                sourceMemoryBlocked: P
            } = (0, I.c)(n, r), M = P ? v.a.projectOnlyMoveUnavailable : void 0, {
                data: k,
                isPending: R,
                isError: O
            } = s, {
                data: N,
                isPending: G,
                isError: B
            } = o, z = (0, T.a)(N, k, r?.gizmo.id), F = "allowed" === c, D = e => {
                let a = t.get(j) + 1,
                    r = t.get(p.e);
                t.set(j, a), (0, C.T)({
                    scope: t,
                    conversationId: n.id,
                    projectId: e.gizmo.id
                }).then(n => {
                    n && t.get(j) === a && t.get(p.e) === r && f((0, S.c)(e.gizmo.id))
                }).catch(() => {
                    t.get(u.f).danger(t.get(h.a).formatMessage(A.moveFailed), {
                        errorAnalytics: {
                            toastId: "move_conversation_to_snorlax_error"
                        }
                    })
                })
            }, L = [];
            for (let e of (F && (L.push({
                    id: "new-chatgpt-project",
                    icon: d.vg,
                    message: A.newProject,
                    selectAfterClose: !0,
                    onSelect: () => {
                        t.set(j, e => e + 1), (0, x.a)(t, D, {
                            allowLocalProjectCreation: !1,
                            forceGlobalMemory: E,
                            onCloseAutoFocus: _
                        })
                    }
                }), z.length > 0 && L.push({
                    id: "new-project-separator",
                    type: "separator"
                })), z)) {
                let {
                    targetMemoryBlocked: t
                } = (0, I.c)(n, void 0, e), r = t ? (0, w.a)((0, b.c)(e)) : void 0;
                L.push({
                    id: `move-to-project:${e.gizmo.id}`,
                    icon: (0, a.jsx)(g.a, {
                        className: "icon-xs",
                        size: 16,
                        color: e.gizmo.display.theme,
                        fallbackIcon: (0, a.jsx)(d.vd, {}),
                        icon: e.gizmo.display.emoji
                    }),
                    nativeIcon: (0, m.b)(e.gizmo.display.emoji),
                    message: A.projectName,
                    messageValues: {
                        projectName: e.gizmo.display.name
                    },
                    enabled: null == r,
                    tooltipMessage: r,
                    onSelect: () => D(e)
                })
            }
            return l && (O || B) ? L.push({
                id: "retry-project-destinations",
                message: A.destinationsFailed,
                closeOnSelect: !1,
                onSelect: () => {
                    Promise.all([t.query.invalidate(y.a), t.query.invalidate(C.m)])
                }
            }) : l && (R || G) ? L.push({
                id: "loading-project-destinations",
                message: A.loading,
                tooltipMessage: A.reopen,
                enabled: !1
            }) : O || B || R || G || 0 !== z.length || F || L.push({
                id: "no-project-destinations",
                message: A.noDestinations,
                enabled: !1
            }), [...i && L.length > 0 ? [{
                id: "move-to-project",
                icon: d.vd,
                message: A.moveToProject,
                enabled: !P,
                tooltipMessage: M,
                submenu: L
            }] : [], ...null == r ? [] : [{
                id: "remove-from-project",
                icon: d.Dd,
                message: A.removeFromProject,
                enabled: !P,
                tooltipMessage: M,
                onSelect: () => {
                    t.set(j, e => e + 1), (0, C.T)({
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
                    g = (0, s.y)(f.a),
                    v = (0, l._)(),
                    b = (0, s.z)(y.a),
                    x = (0, s.z)(C.m),
                    w = (0, _.b)();
                if (i[0] !== d || i[1] !== v || i[2] !== u || i[3] !== x || i[4] !== h || i[5] !== w || i[6] !== b || i[7] !== g || i[8] !== m) {
                    let e = E({
                            scope: g,
                            conversation: d,
                            project: h,
                            projectListQuery: b,
                            pinnedProjectsQuery: x,
                            showMoveToProject: m,
                            projectCrudStatus: w,
                            navigate: v,
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
                    t = e.map(n), i[0] = d, i[1] = v, i[2] = u, i[3] = x, i[4] = h, i[5] = w, i[6] = b, i[7] = g, i[8] = m, i[9] = t
                } else t = i[9];
                return i[10] !== t ? (n = (0, a.jsx)(a.Fragment, {
                    children: t
                }), i[10] = t, i[11] = n) : n = i[11], n
            },
            b: E
        })
    }),
    MDmT: (function(e, t, n) {
        var a = n("iTtm"),
            r = n("Qgfj"),
            s = n("OWtl"),
            o = n("dQRk"),
            i = n("b6fw");
        let l = (0, a.d)(s.a, (e, t) => {
            let {
                get: n
            } = t, a = n(i.g, e);
            if (null == a) return null;
            let r = n(o.L, e);
            return null == r ? null : c({
                ...a,
                conversation: {
                    mapping: r,
                    current_node: n(o.B, e),
                    conversation_origin: n(o.x, e),
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
                m = o[i + 1],
                g = p(l),
                f = p(m),
                v = l?.start_message_id != null && null == g || m?.start_message_id != null && null == f,
                y = s?.status === "sending" && (s.sectionId === l?.id || s.sectionId === m?.id),
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
                isReviewing: a !== n.current_section_id && s?.sectionId !== a,
                needsEntry: l?.start_message_id == null,
                isEntering: s?.status === "sending"
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
            s = n("iTtm"),
            o = n("zd8w"),
            i = n("oyxz"),
            l = n("QcFS"),
            c = n("EOo5"),
            d = n("ygO2"),
            u = n("X6Vn"),
            h = n("OWtl"),
            p = n("gsAl");
        let m = (0, o.lazy)(async () => ({
            default: (await Promise.resolve().then(n.bind(n, "taaw"))).CodexThreadReportDialog
        }));

        function g(e) {
            let t, n, o, l = (0, r.c)(9),
                {
                    imageOnly: u
                } = e,
                m = (0, s.y)(h.a),
                g = (0, s.x)(p.f, (0, c.a)());
            return null == g ? null : (l[0] !== u || l[1] !== m || l[2] !== g.id ? (t = () => f(m, g.id, u), l[0] = u, l[1] = m, l[2] = g.id, l[3] = t) : t = l[3], l[4] !== u ? (n = u ? (0, a.jsx)(i.a, {
                id: "chatgptConversations.sharedPost.webImage.reportButton",
                defaultMessage: "Report image",
                description: "Button below the shared-image disclosure that opens safety reporting for the image-only Post."
            }) : (0, a.jsx)(i.a, {
                id: "chatgptConversations.sharedPost.reportButton",
                defaultMessage: "Report conversation",
                description: "Button below the shared-chat disclosure that opens safety reporting for the shared ChatGPT image post shown in the conversation."
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
                        imageOnly: s
                    } = e,
                    o = void 0 !== s && s;
                return n[0] !== o ? (t = (0, a.jsxs)("div", {
                    className: "flex flex-col items-center gap-1 text-center text-xs select-none",
                    children: [(0, a.jsx)("div", {
                        className: "text-secondary",
                        children: o ? (0, a.jsx)(i.a, {
                            id: "chatgptConversations.sharedPost.webImage.disclaimer",
                            defaultMessage: "This is a shared image.",
                            description: "Notice above an existing web image shared as an image-only Post. The sender has not shared a conversation."
                        }) : (0, a.jsx)(i.a, {
                            id: "chatgptConversations.sharedConversation.copyDisclaimer",
                            defaultMessage: "This is a copy of a shared ChatGPT chat. It won't be added to memory.",
                            description: "Informational notice above a shared ChatGPT chat explaining that the copy will not be added to the viewer's memory"
                        })
                    }), (0, a.jsx)(g, {
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
                            description: "Notice in the shared prompt header. The reportButton tag opens safety reporting for the original shared post.",
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
            a: () => u
        });
        var a = n("ABep"),
            r = n("QosV"),
            s = n("iTtm"),
            o = n("QcFS"),
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
                g = (0, s.z)(i.l),
                f = (0, s.z)(l.l);
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
            return v || null != p ? (h[4] !== v ? (n = v ? (0, a.jsx)(d.a, {}) : null, h[4] = v, h[5] = n) : n = h[5], h[6] !== p || h[7] !== n ? (u = (0, a.jsx)(o.a.HeaderAction, {
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
            s = n.n(r),
            o = n("iTtm"),
            i = n("bg18"),
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
                    draftKey: _,
                    initialPrompt: w,
                    initialPromptKind: I
                } = t, T = void 0 === _ ? C : _, S = (0, o.y)(u.a);
                b[2] !== C || b[3] !== T || b[4] !== w || b[5] !== I || b[6] !== S ? (n = () => s()(() => {
                    let e = null == C ? null : S.get(g.x, C),
                        t = (0, d.e)(w ?? (null == T ? "" : S.get(p.s, T)), {
                            addInitialContentToHistory: null == w && null != T,
                            defaultTextKind: I ?? (null == w && null != T || (0, c.b)(w ?? "").length > 0 ? "prompt" : "plain"),
                            enableFileMentions: !0,
                            enableRichText: !0,
                            enableSkillMentions: !1,
                            enableSlashCommands: {
                                triggers: ["/"]
                            },
                            plainTextMode: (0, h.b)(S.get, i.pf.composerPlainTextMode),
                            suggestionOptions: {
                                enableInlineSystemHints: "tpp" !== e && "flora" !== e,
                                variant: "tpp" !== e && "flora" !== e ? "chatgpt" : void 0
                            }
                        });
                    return null == w && null != C && "string" == typeof T && null != (0, m.j)(S, T) && "tpp" !== e && "flora" !== e && (0, p.P)(S, C, t.getChatGptPrompt().systemHints), t
                }), b[2] = C, b[3] = T, b[4] = w, b[5] = I, b[6] = S, b[7] = n) : n = b[7];
                let [j] = (0, l.useState)(n);
                b[8] !== j || b[9] !== x ? (r = x ?? j(), b[8] = j, b[9] = x, b[10] = r) : r = b[10];
                let E = r,
                    A = (0, l.useRef)(null);
                b[11] !== E || b[12] !== T || b[13] !== S ? (f = () => {
                    if (null == T) return;
                    let e = S.get(p.s, T);
                    return null != A.current && A.current !== e && E.restoreDraft(e), () => {
                        A.current = S.get(p.s, T)
                    }
                }, v = [E, T, S], b[11] = E, b[12] = T, b[13] = S, b[14] = f, b[15] = v) : (f = b[14], v = b[15]), (0, l.useLayoutEffect)(f, v), b[16] !== E || b[17] !== x ? (y = () => {
                    null != x || E.view.isDestroyed || E.destroy()
                }, b[16] = E, b[17] = x, b[18] = y) : y = b[18];
                let P = y;
                return (0, d.f)(P, E), E
            }
        })
    }),
    Yrvy: (function(e, t, n) {
        var a = n("QosV"),
            r = n("xSOA"),
            s = n("iTtm"),
            o = n("Wf1j"),
            i = n("SGsN"),
            l = n("OWtl"),
            c = n("MRlq"),
            d = n("QmkR");
        n.d(t, {}, {
            a: function(e) {
                let t, n, u, h, p = (0, a.c)(12),
                    m = (0, s.y)(l.a),
                    g = (0, o.a)();
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
    FNgK: (function(e, t, n) {
        var a = n("ZU27");

        function r(e) {
            return e?.tabType.kind === "ecosystem-focused-object"
        }
        n.d(t, {}, {
            a: r,
            b: function(e, t, n) {
                let s = e.get(a.j.tabById$, `ecosystem-focused:${t}`);
                r(s) && (0, a.f)(e, s.tabType, {
                    id: `ecosystem-focused:${n}`,
                    replaceTabId: s.tabId,
                    title: s.title,
                    revealAndFocus: !1,
                    props: {
                        ...s.props,
                        pendingSourceId: n
                    }
                })
            }
        })
    }),
    WQca: (function(e, t, n) {
        var a = n("QosV"),
            r = n("iTtm"),
            s = n("zd8w"),
            o = n("jqIZ"),
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
                    v = (0, o._)(),
                    y = (0, s.useRef)(!1);
                d[0] !== p || d[1] !== h || d[2] !== v || d[3] !== m || d[4] !== f ? (t = () => {
                    m?.(), f.get(i.f).info(h, {
                        id: "conversation-inaccessible",
                        duration: 5
                    }), v(p, {
                        replace: !0
                    })
                }, d[0] = p, d[1] = h, d[2] = v, d[3] = m, d[4] = f, d[5] = t) : t = d[5];
                let b = (0, s.useEffectEvent)(t);
                return d[6] !== u || d[7] !== b ? (n = () => {
                    u && !y.current && (y.current = !0, b())
                }, d[6] = u, d[7] = b, d[8] = n) : n = d[8], d[9] !== u ? (c = [u], d[9] = u, d[10] = c) : c = d[10], (0, s.useEffect)(n, c), u ? null : g
            }
        })
    }),
    IxWh: (function(e, t, n) {
        var a = n("Vzyk"),
            r = n.n(a);

        function s(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ltr",
                n = Math.max(0, e.scrollWidth - e.clientWidth);
            if ("rtl" === t) return {
                maximum: 0,
                minimum: -n
            };
            let a = e.firstElementChild,
                r = Math.min(n, a instanceof HTMLElement ? Math.max(0, o(e, a, t)) : 0);
            return {
                maximum: n,
                minimum: r
            }
        }

        function o(e, t, n) {
            return "rtl" === n ? t.offsetLeft - e.offsetLeft + t.offsetWidth - e.clientWidth + i(e, n) : t.offsetLeft - e.offsetLeft - i(e, n)
        }

        function i(e, t) {
            let n = Number.parseFloat("rtl" === t ? getComputedStyle(e).scrollPaddingRight : getComputedStyle(e).scrollPaddingLeft);
            return Number.isNaN(n) ? 0 : n
        }
        n.d(t, {}, {
            a: s,
            b: function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ltr",
                    {
                        maximum: a,
                        minimum: l
                    } = s(e, n),
                    c = "rtl" === n ? -t : t,
                    d = r()(e.scrollLeft + c * (e.clientWidth - i(e, n)), l, a),
                    u = e.children;
                for (let s = 1 === t ? 0 : u.length - 1; s >= 0 && s < u.length; s += t) {
                    let t = u.item(s);
                    if (!(t instanceof HTMLElement)) continue;
                    let i = r()(o(e, t, n), l, a);
                    if (1 === c && i >= d - 1 || -1 === c && i <= d + 1) return i
                }
                return 1 === c ? a : l
            }
        })
    }),
    GKsW: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("iTtm"),
            o = n("zd8w"),
            i = n("GaA7"),
            l = n("OWtl"),
            c = n("tSEg"),
            d = n("n5oN");
        let u = (0, s.u)(l.a, () => []);

        function h(e) {
            let t, n, a, c, d, h, f = (0, r.c)(13),
                {
                    title: v,
                    nativeTitle: y
                } = e,
                b = void 0 === y ? v : y,
                x = (0, s.y)(l.a),
                [C] = (0, o.useState)(p);
            return f[0] !== b || f[1] !== C || f[2] !== x || f[3] !== v ? (t = () => {
                if (i.appServices?.windowTitle == null) return;
                let e = {
                    owner: C,
                    title: null == v ? void 0 : b ?? null
                };
                x.set(u, t => t.some(e => e.owner === C) ? t.map(t => t.owner === C ? e : t) : [...t, e]), g(x)
            }, n = [x, C, v, b], f[0] = b, f[1] = C, f[2] = x, f[3] = v, f[4] = t, f[5] = n) : (t = f[4], n = f[5]), (0, o.useEffect)(t, n), f[6] !== C || f[7] !== x ? (a = () => () => {
                i.appServices?.windowTitle != null && (x.set(u, e => e.filter(e => e.owner !== C)), g(x))
            }, c = [x, C], f[6] = C, f[7] = x, f[8] = a, f[9] = c) : (a = f[8], c = f[9]), (0, o.useEffect)(a, c), f[10] !== v ? (d = () => {
                if (null == v) return;
                let e = document.title;
                m(v);
                let t = document.title;
                return () => {
                    document.title === t && m(e)
                }
            }, h = [v], f[10] = v, f[11] = d, f[12] = h) : (d = f[11], h = f[12]), (0, o.useEffect)(d, h), null
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
                        title: o
                    } = e,
                    i = (0, s.y)(c.a),
                    l = (0, s.x)(d.a, `${i.value.pathname}${i.value.search??""}`),
                    u = o ?? l;
                return n[0] !== u ? (t = (0, a.jsx)(h, {
                    title: u
                }), n[0] = u, n[1] = t) : t = n[1], t
            }
        })
    }),
    MX3C: (function(e, t, n) {
        var a = n("iTtm"),
            r = n("ASxG"),
            s = n("hOO0"),
            o = n("OWtl"),
            i = n("kpIY"),
            l = n("Nwp9");
        let c = "selected-plugin-links-v1",
            d = r.record(r.string(), r.string().nullable().catch(null)).catch({}),
            u = (0, l.b)(c, {}, {
                coerceStoredValue: e => d.parse(e)
            }),
            h = (0, a.d)(o.a, (e, t) => {
                let {
                    get: n
                } = t;
                return n(u)[p(e)] ?? null
            });

        function p(e) {
            let {
                accountId: t,
                userId: n,
                appId: a
            } = e;
            return JSON.stringify([t, n, a])
        }
        n.d(t, {}, {
            a: function(e, t) {
                let n = (0, s.a)(t);
                return e.filter(e => (0, s.a)(e.connector_id) === n && "HIDDEN" !== e.visibility && !e.id.startsWith("implicit_link::"))
            },
            b: function(e, t, n) {
                return e.some(e => (0, s.c)(e, t) && "OAUTH" === e.auth_type && "DISABLED_BY_ADMIN" !== e.connector_status && null == e.unavailable_reason && e.owners.some(e => "USER" === e.type && e.id === n))
            },
            c: h,
            d: function(e, t, n) {
                (0, i.t)(c, {
                    entries: {
                        [p(t)]: null == n ? null : {
                            value: n
                        }
                    },
                    maxEntries: 100
                }), e.set(u, (0, i.k)(c, {}))
            }
        })
    }),
    RZBv: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("xSOA"),
            o = n("iTtm"),
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
            b = n("nlNF"),
            x = n("iGet"),
            C = n("OWtl"),
            _ = n("MRlq"),
            w = n("HFSu"),
            I = n("vNLk"),
            T = n("PCxL"),
            S = n("aZgH"),
            j = n("ampu");
        n.d(t, {}, {
            a: function(e) {
                let t, n, E, A, P, M, k, R, O, N, G, B, z, F, D = (0, r.c)(59),
                    {
                        conversationId: L,
                        kind: H
                    } = e,
                    W = (0, o.y)(C.a),
                    U = (0, l.a)(),
                    q = (0, d.Y)(),
                    K = (0, d._)(),
                    V = (0, o.z)(T.h),
                    Y = (0, o.z)(u.h),
                    Q = (0, o.z)(u.g);
                D[0] !== Y || D[1] !== L || D[2] !== Q || D[3] !== H || D[4] !== V ? (t = "chatgpt" === H && V?.kind === "chatgpt" && V.conversation.id === L && (0, m.a)(V.conversation, Y, Q) ? V.conversation : null, D[0] = Y, D[1] = L, D[2] = Q, D[3] = H, D[4] = V, D[5] = t) : t = D[5];
                let $ = t,
                    [Z, J] = (0, i.useState)(!1),
                    {
                        mutate: X,
                        isPending: ee
                    } = (0, f.a)(L);
                D[6] !== q.hash || D[7] !== q.pathname || D[8] !== q.search || D[9] !== K || D[10] !== W ? (n = () => {
                    (0, T.e)(W), K({
                        pathname: q.pathname,
                        search: q.search,
                        hash: q.hash
                    }, {
                        replace: !0,
                        state: null
                    })
                }, D[6] = q.hash, D[7] = q.pathname, D[8] = q.search, D[9] = K, D[10] = W, D[11] = n) : n = D[11];
                let et = n,
                    en = (0, o.z)(T.g);
                D[12] !== L || D[13] !== en ? (E = en?.find(e => (0, S.a)(e.task) === `hosted:${L}`), D[12] = L, D[13] = en, D[14] = E) : E = D[14];
                let ea = E;
                D[15] !== L || D[16] !== W ? (A = () => {
                    let e = W.get(T.h);
                    return null != e && (0, S.a)(e) === `hosted:${L}` ? (0, T.d)(W, e) : void 0
                }, D[15] = L, D[16] = W, D[17] = A) : A = D[17], D[18] !== L || D[19] !== H || D[20] !== W ? (P = async () => {
                    if ("cloud" === H) {
                        await w.CodexRequest.safePost("/wham/tasks/{task_id}/recover", {
                            parameters: {
                                path: {
                                    task_id: L
                                }
                            }
                        }), (0, x.c)(W, L, !1);
                        return
                    }
                    await (0, g.W)({
                        scope: W,
                        conversationId: L
                    })
                }, D[18] = L, D[19] = H, D[20] = W, D[21] = P) : P = D[21], D[22] !== L || D[23] !== et || D[24] !== H || D[25] !== W ? (M = (e, t, n) => {
                    n?.("restored");
                    let r = W.get(y.f).info((0, a.jsx)(c.a, {
                        ..._.a.unarchiveSuccessPlain
                    }), {
                        leading: (0, a.jsx)(v.a, {
                            "aria-hidden": !1,
                            asset: j.a
                        }),
                        primaryAction: {
                            label: (0, a.jsx)(c.a, {
                                ..._.a.viewNow
                            }),
                            onClick: () => {
                                r.close(), et()
                            }
                        },
                        id: `unarchive-thread-${H}:${L}`
                    })
                }, D[22] = L, D[23] = et, D[24] = H, D[25] = W, D[26] = M) : M = D[26], D[27] !== U || D[28] !== W ? (k = (e, t, n) => {
                    n?.(null), W.get(y.f).danger(U.formatMessage(_.a.unarchiveError), {
                        errorAnalytics: {
                            toastId: "previewFooter.onError.unarchiveError"
                        }
                    })
                }, D[27] = U, D[28] = W, D[29] = k) : k = D[29], D[30] !== A || D[31] !== P || D[32] !== M || D[33] !== k ? (R = {
                    onMutate: A,
                    mutationFn: P,
                    onSuccess: M,
                    onError: k
                }, D[30] = A, D[31] = P, D[32] = M, D[33] = k, D[34] = R) : R = D[34];
                let {
                    mutate: er,
                    isPending: es,
                    isSuccess: eo
                } = (0, s.a)(R);
                D[35] !== X || D[36] !== K || D[37] !== W ? (O = e => {
                    let t = W.get(T.c),
                        n = W.get(b.c),
                        a = W.get(u.f);
                    X(e, {
                        onSuccess: () => {
                            if (J(!1), t !== W.get(T.c) || n !== W.get(b.c) || a !== W.get(u.f)) return;
                            W.set(T.h, null);
                            let e = t?.pathname === T.a ? t : null;
                            K(e ?? "/", {
                                replace: !0,
                                state: e?.state ?? null
                            })
                        }
                    })
                }, D[35] = X, D[36] = K, D[37] = W, D[38] = O) : O = D[38];
                let ei = O;
                D[39] !== $ ? (N = null == $ ? void 0 : () => J(!0), D[39] = $, D[40] = N) : N = D[40];
                let el = eo || ea?.status === "restored",
                    ec = es || ea?.status === "restoring";
                return D[41] !== er ? (G = () => er(), D[41] = er, D[42] = G) : G = D[42], D[43] !== et || D[44] !== ee || D[45] !== N || D[46] !== el || D[47] !== ec || D[48] !== G ? (B = (0, a.jsx)(I.a, {
                    deleting: ee,
                    onDelete: N,
                    restored: el,
                    restoring: ec,
                    onUnarchive: G,
                    onDone: et
                }), D[43] = et, D[44] = ee, D[45] = N, D[46] = el, D[47] = ec, D[48] = G, D[49] = B) : B = D[49], D[50] !== $ || D[51] !== ei || D[52] !== U || D[53] !== Z || D[54] !== ee ? (z = null != $ && (0, a.jsx)(h.a, {
                    allowArtifactDeletion: !0,
                    title: $.title?.trim() || U.formatMessage(p.a.newChat),
                    open: Z,
                    isDeleting: ee,
                    onOpenChange: J,
                    onConfirm: ei
                }), D[50] = $, D[51] = ei, D[52] = U, D[53] = Z, D[54] = ee, D[55] = z) : z = D[55], D[56] !== B || D[57] !== z ? (F = (0, a.jsxs)(a.Fragment, {
                    children: [B, z]
                }), D[56] = B, D[57] = z, D[58] = F) : F = D[58], F
            }
        })
    }),
    LU2D: (function(e, t) {
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
                    x: -.006836,
                    y: 183e-6,
                    overflows: !1
                },
                composite: {
                    x: -.006836,
                    y: 183e-6,
                    overflows: !1
                }
            }
        }
    }),
    DVyM: (function(e, t) {
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
    YWJW: (function(e, t) {
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
    pqIe: (function(e, t) {
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
    V1R0: (function(e, t) {
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
    emnE: (function(e, t, n) {
        let a = (0, n("nkTT").a)({
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
            body: '<path d="M13.5889 10.9995C15.4857 10.9996 17.0233 12.5373 17.0234 14.4341C17.0234 15.1455 16.806 15.8058 16.4355 16.354L17.9727 17.8921C18.2322 18.1518 18.2323 18.5729 17.9727 18.8325C17.713 19.0919 17.2919 19.092 17.0322 18.8325L15.4912 17.2925C14.9465 17.6557 14.2927 17.8686 13.5889 17.8687C11.6921 17.8685 10.1544 16.3309 10.1543 14.4341C10.1544 12.5373 11.6921 10.9996 13.5889 10.9995ZM13.5889 12.3296C12.4266 12.3297 11.4845 13.2718 11.4844 14.4341C11.4845 15.5963 12.4266 16.5394 13.5889 16.5396C14.7512 16.5395 15.6942 15.5964 15.6943 14.4341C15.6942 13.2718 14.7512 12.3297 13.5889 12.3296Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M11.8125 2.25146C12.6518 2.25146 13.4572 2.58476 14.0508 3.17822L15.9199 5.04736C16.5134 5.6409 16.8467 6.4463 16.8467 7.28564V9.08154C16.8466 9.44878 16.5489 9.74658 16.1816 9.74658C15.8144 9.74658 15.5166 9.44878 15.5166 9.08154V8.58154H13.417C12.1292 8.58154 11.085 7.53726 11.085 6.24951V3.58154H6.18164C5.1682 3.58154 4.34668 4.40306 4.34668 5.4165V14.5835C4.34686 15.5968 5.16831 16.4185 6.18164 16.4185H8.18164C8.54891 16.4185 8.84668 16.7162 8.84668 17.0835C8.8465 17.4506 8.5488 17.7485 8.18164 17.7485H6.18164C4.43377 17.7485 3.01678 16.3313 3.0166 14.5835V5.4165C3.0166 3.66852 4.43366 2.25146 6.18164 2.25146H11.8125ZM12.415 6.24951C12.415 6.80272 12.8638 7.25146 13.417 7.25146H15.5146C15.5058 6.77722 15.3155 6.32384 14.9795 5.98779L13.1104 4.11865C12.9128 3.92113 12.6741 3.77509 12.415 3.68506V6.24951Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
        });
        n.d(t, {}, {
            a: a
        })
    }),
    eBGi: (function(e, t, n) {
        let a = (0, n("nkTT").a)({
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
            body: '<path d="M14.166 12.6682C14.5332 12.6682 14.8309 12.9661 14.8311 13.3333C14.8311 13.7005 14.5333 13.9983 14.166 13.9983H5.83301C5.46591 13.9981 5.16797 13.7004 5.16797 13.3333C5.1681 12.9662 5.46599 12.6684 5.83301 12.6682H14.166Z" fill="currentColor"/> <path d="M8.75 6.0022C9.34724 6.00237 9.83105 6.48695 9.83105 7.08423V9.58423C9.83062 10.1811 9.34697 10.6651 8.75 10.6653H6.25C5.65302 10.6651 5.16841 10.1811 5.16797 9.58423V7.08423C5.16797 6.48694 5.65275 6.00236 6.25 6.0022H8.75ZM6.49805 9.33521H8.50098V7.33228H6.49805V9.33521Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M14.166 9.33521C14.5333 9.33521 14.8311 9.63297 14.8311 10.0002C14.8309 10.3674 14.5332 10.6653 14.166 10.6653H12.083C11.716 10.6651 11.4181 10.3673 11.418 10.0002C11.418 9.6331 11.7159 9.3354 12.083 9.33521H14.166Z" fill="currentColor"/> <path d="M14.166 6.00122C14.5332 6.00122 14.8309 6.2991 14.8311 6.66626C14.8311 7.03353 14.5333 7.3313 14.166 7.3313H12.083C11.7159 7.3311 11.418 7.03341 11.418 6.66626C11.4181 6.29922 11.716 6.00142 12.083 6.00122H14.166Z" fill="currentColor"/> <path d="M15.167 2.66821C16.8227 2.66839 18.1649 4.01058 18.165 5.66626V14.3333C18.165 15.9891 16.8228 17.3311 15.167 17.3313H4.83301C3.17722 17.3311 1.83496 15.9891 1.83496 14.3333V5.66626C1.83514 4.01058 3.17733 2.66839 4.83301 2.66821H15.167ZM4.83301 3.99829C3.91187 3.99847 3.16521 4.74512 3.16504 5.66626V14.3333C3.16504 15.2545 3.91176 16.001 4.83301 16.0012H15.167C16.0882 16.001 16.835 15.2545 16.835 14.3333V5.66626C16.8348 4.74512 16.0881 3.99847 15.167 3.99829H4.83301Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>'
        });
        n.d(t, {}, {
            a: a
        })
    })
};