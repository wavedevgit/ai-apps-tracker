export const __rspack_esm_ids = [751731];
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
            a: () => z,
            ChatSeatAccessScreen: () => L
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
            let t, n, l, c, d, u, p, v, y, k, R, G, L, B, z, F, D, W, H, q, U, K, V = (0, r.c)(70),
                {
                    account: Q,
                    accountId: Y,
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
            let es = "account-owner" === Q.account.account_user_role,
                eo = "account-admin" === Q.account.account_user_role,
                ei = !0 === Q.entitlement.has_active_subscription,
                el = (es || eo) && ei,
                ec = es || el;
            V[2] !== el || V[3] !== es ? (l = "CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_REQUEST_CHANGE", el ? l = "CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_UPDATE_DIRECTLY" : es && (l = "CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_GO_TO_WORKSPACE_AND_UPDATE"), V[2] = el, V[3] = es, V[4] = l) : l = V[4], V[5] !== Q.account.account_user_role || V[6] !== l || V[7] !== ei || V[8] !== X ? (c = (e, t) => {
                (0, M.a)(X, g.sd, {
                    actionType: e,
                    ctaType: void 0 !== t && t ? l : void 0,
                    userRole: Q.account.account_user_role ?? void 0,
                    hasPaidSubscription: ei
                })
            }, V[5] = Q.account.account_user_role, V[6] = l, V[7] = ei, V[8] = X, V[9] = c) : c = V[9];
            let ed = c;
            V[10] !== Z ? (d = () => {
                Z(), (0, E.f)({
                    href: new URL("/codex/cloud", T.h).toString(),
                    initiator: "open_in_browser_bridge"
                })
            }, V[10] = Z, V[11] = d) : d = V[11];
            let eu = d;
            V[12] !== Q.account.subscription_seat_pools_enabled || V[13] !== Y || V[14] !== eu || V[15] !== el || V[16] !== et || V[17] !== ee || V[18] !== es || V[19] !== ed || V[20] !== Z || V[21] !== J || V[22] !== en || V[23] !== X || V[24] !== $ ? (u = async () => {
                if ("requesting" !== en) {
                    if (ed("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_PRIMARY_CTA_CLICKED", !0), es && !el) {
                        let e = new URL("/admin/members", T.h);
                        e.searchParams.set("account_id", Y), et && e.searchParams.set("search", et);
                        let t = e.toString(),
                            n = (0, P.c)(X, t, Y),
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
                            if (Q.account.subscription_seat_pools_enabled ? await w.Request.safePost("/accounts/{account_id}/users/{user_id}/seat/update", {
                                    parameters: {
                                        path: {
                                            account_id: Y,
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
                                            account_id: Y,
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
                            (0, I.e)(X), await (0, x.g)("accounts-check"), await Promise.all([X.query.invalidate(C.b, Y), X.queryClient.invalidateQueries({
                                queryKey: ["accounts", "check"]
                            })]), er.current && Z()
                        } else {
                            if ((0, b.b)(X, Y), await w.Request.safePost("/accounts/{account_id}/invites/request", {
                                    parameters: {
                                        path: {
                                            account_id: Y
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
            }, V[12] = Q.account.subscription_seat_pools_enabled, V[13] = Y, V[14] = eu, V[15] = el, V[16] = et, V[17] = ee, V[18] = es, V[19] = ed, V[20] = Z, V[21] = J, V[22] = en, V[23] = X, V[24] = $, V[25] = u) : u = V[25];
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
            }, V[33] = eh, V[34] = k) : k = V[34], V[35] === Symbol.for("react.memo_cache_sentinel") ? (R = (0, a.jsx)(S.e, {
                className: "heading-lg font-semibold",
                children: ep
            }), V[35] = R) : R = V[35], V[36] !== em ? (G = (0, a.jsxs)("div", {
                className: "flex w-full max-w-md flex-col gap-4",
                children: [R, (0, a.jsx)(S.d, {
                    className: "text-lg leading-6 text-secondary",
                    children: em
                })]
            }), V[36] = em, V[37] = G) : G = V[37];
            let eg = "requesting" === en,
                ef = "requesting" === en;
            return V[38] !== ec ? (L = ec ? (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.updateSeatButton",
                defaultMessage: "Update seat",
                description: "Updates the current user's seat to include ChatGPT"
            }) : (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.requestAccessButton",
                defaultMessage: "Request access",
                description: "Requests ChatGPT access from a workspace administrator"
            }), V[38] = ec, V[39] = L) : L = V[39], V[40] !== eg || V[41] !== ef || V[42] !== L ? (B = (0, a.jsx)(h.a, {
                autoFocus: !0,
                className: "w-full",
                size: "auth",
                type: "submit",
                loading: eg,
                disabled: ef,
                children: L
            }), V[40] = eg, V[41] = ef, V[42] = L, V[43] = B) : B = V[43], V[44] !== eu || V[45] !== ed || V[46] !== Z || V[47] !== J ? (z = () => {
                J ? (Z(), J()) : (ed("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_BACK_TO_CODEX_CLICKED"), eu())
            }, V[44] = eu, V[45] = ed, V[46] = Z, V[47] = J, V[48] = z) : z = V[48], V[49] !== J ? (F = J ? (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.chatWork.switchToWorkButton",
                defaultMessage: "Switch to Work",
                description: "Switches from the Chat access explanation to the available Work surface"
            }) : (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.backToCodexButton",
                defaultMessage: "Back to Codex",
                description: "Returns to Codex from the Chat access explanation"
            }), V[49] = J, V[50] = F) : F = V[50], V[51] !== z || V[52] !== F ? (D = (0, a.jsx)(h.a, {
                className: "w-full",
                color: "outlineGhost",
                size: "auth",
                onClick: z,
                children: F
            }), V[51] = z, V[52] = F, V[53] = D) : D = V[53], V[54] !== B || V[55] !== D ? (W = (0, a.jsxs)("div", {
                className: "flex w-full max-w-xs flex-col gap-3",
                children: [B, D]
            }), V[54] = B, V[55] = D, V[56] = W) : W = V[56], V[57] !== ee || V[58] !== en ? (H = null != en && "requesting" !== en ? (0, a.jsx)("p", {
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
            }) : null, V[57] = ee, V[58] = en, V[59] = H) : H = V[59], V[60] !== G || V[61] !== W || V[62] !== H ? (q = (0, a.jsxs)("div", {
                className: "flex flex-col items-center gap-8 p-10 text-center",
                children: [G, W, H]
            }), V[60] = G, V[61] = W, V[62] = H, V[63] = q) : q = V[63], V[64] !== q || V[65] !== k ? (U = (0, a.jsx)(j.b, {
                as: "form",
                className: "select-none",
                size: "viewport",
                variant: "chatgpt",
                onSubmit: k,
                children: q
            }), V[64] = q, V[65] = k, V[66] = U) : U = V[66], V[67] !== U || V[68] !== y ? (K = (0, a.jsx)(S.b, {
                open: !0,
                size: "wide",
                variant: "chatgpt",
                onOpenChange: y,
                children: U
            }), V[67] = U, V[68] = y, V[69] = K) : K = V[69], K
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

        function L(e) {
            let t, n, o = (0, r.c)(9),
                {
                    modeToggle: i,
                    onSwitchToWork: c
                } = e,
                h = (0, s.y)(m.a),
                p = (0, s.z)(G.a),
                g = (0, s.z)(d.t),
                f = (0, l.Y)();
            if ("restricted" !== p.status) return null;
            let v = `${p.accountId}:${p.userId}`;
            return o[0] !== f || o[1] !== c || o[2] !== h || o[3] !== g.status ? (t = "allowed" === g.status ? c ?? (() => {
                (0, u.l)(h, "work"), f("/")
            }) : void 0, o[0] = f, o[1] = c, o[2] = h, o[3] = g.status, o[4] = t) : t = o[4], o[5] !== i || o[6] !== v || o[7] !== t ? (n = (0, a.jsx)(B, {
                modeToggle: i,
                onSwitchToWork: t
            }, v), o[5] = i, o[6] = v, o[7] = t, o[8] = n) : n = o[8], n
        }

        function B(e) {
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

        function z(e) {
            let t, n, o = (0, r.c)(4),
                {
                    children: i,
                    enabled: l
                } = e;
            o[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                name: "chatgpt.seat-access"
            }, o[0] = t) : t = o[0];
            let d = (0, s.x)(c.a, t);
            return l ? d.isLoading ? null : (o[1] !== d.isCapable || o[2] !== i ? (n = d.isCapable ? (0, a.jsx)(L, {}) : i, o[1] = d.isCapable, o[2] = i, o[3] = n) : n = o[3], n) : i
        }
    }),
    Pyg2: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("iTtm"),
            o = n("rjva"),
            i = n("ZIh4");
        n.d(t, {}, {
            a: function(e) {
                let t, n, l, c, d = (0, r.c)(10);
                d[0] !== e ? ({
                    composerOnly: n,
                    placement: l,
                    ...t
                } = e, d[0] = e, d[1] = t, d[2] = n, d[3] = l) : (t = d[1], n = d[2], l = d[3]);
                let u = void 0 === n || n,
                    h = void 0 === l ? "floating" : l,
                    p = (0, s.z)(i.a),
                    m = p ? "floating" : h,
                    g = !p && t.reserveContent,
                    f = !!p || t.showHeader;
                return d[4] !== u || d[5] !== t || d[6] !== m || d[7] !== g || d[8] !== f ? (c = (0, a.jsx)(o.a, {
                    ...t,
                    composerOnly: u,
                    placement: m,
                    reserveContent: g,
                    showHeader: f
                }), d[4] = u, d[5] = t, d[6] = m, d[7] = g, d[8] = f, d[9] = c) : c = d[9], c
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
            s = n("OMIV"),
            o = n("dQRk"),
            i = n("PsNT"),
            l = n("JtOe");
        let c = (0, a.d)(r.a, (e, t) => {
            let {
                get: n
            } = t;
            if (null == e) return !1;
            let {
                steeredPromptId: a,
                ...r
            } = e;
            if (n(l.f, r)) return !1;
            let c = n(l.g, r);
            if (c?.response.visibility.status !== "allowed" || !(0, i.b)(c.response.content) || !d(c.response.content)) return !1;
            let u = n(o.s, r.conversationId),
                h = u?.at(-1);
            return h === r.userMessageId || null != a && h === a && n(s.d, "1204285073") && u?.includes(r.userMessageId) === !0
        });

        function d(e) {
            return e?.type === "single_advertiser_ad_unit" && "composer_pinned" === e.presentation && e.ad_cards?.length === 1 && "image_card_v2" === e.ad_cards[0].format
        }
        n.d(t, {}, {
            a: c,
            b: d
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
            f = n("PAiv"),
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
            let L = t;
            return P[2] !== O ? (n = e => {
                G(e), e || O?.()
            }, P[2] = O, P[3] = n) : n = P[3], P[4] !== k ? (s = {
                "data-theme": "light",
                onOpenAutoFocus: k
            }, P[4] = k, P[5] = s) : s = P[5], P[6] !== R ? (o = e => {
                e.preventDefault(), G(!1), R?.()
            }, P[6] = R, P[7] = o) : o = P[7], P[8] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(I, {}), P[8] = i) : i = P[8], P[9] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, a.jsx)(m.e, {
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
                children: [l, (0, a.jsx)(m.d, {
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
            }), P[15] = C) : C = P[15], P[16] !== L ? (_ = null == L ? null : (0, a.jsx)(f.a, {
                href: L,
                initiator: "external_link",
                openTarget: "external-browser",
                children: (0, a.jsx)(d.a, {
                    id: "chatgptConversations.businessAgent.privacyPolicy",
                    defaultMessage: "Privacy policy",
                    description: "Link to the business-provided privacy policy in the introductory Business Agent dialog. Opens separately without accepting or dismissing the dialog. Keep the label short."
                })
            }), P[16] = L, P[17] = _) : _ = P[17], P[18] === Symbol.for("react.memo_cache_sentinel") ? (w = (0, a.jsx)("div", {
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
            }), P[21] = T, P[22] = o, P[23] = S) : S = P[23], P[24] !== N || P[25] !== S || P[26] !== n || P[27] !== s ? (A = (0, a.jsx)(m.b, {
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
            r = n("xnQm"),
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
    YGZ3: (function(e, t, n) {
        n.d(t, {
            a: () => oV,
            ChatGptConversationPage: () => oU,
            ChatGptSharedConversationPage: () => oK
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
            m = n("xnQm"),
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
            L = n("ItIk"),
            B = (n("AZW7"), n("jov5")),
            z = n("dQRk"),
            F = n("tSEg"),
            D = n("Ro2M"),
            W = n("bN4H"),
            H = n("TS05");

        function q(e) {
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
                } = (0, _.W)();
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
            return s ? null : (i[6] !== n || i[7] !== l || i[8] !== c || i[9] !== u || i[10] !== d ? (o = (0, a.jsx)(U, {
                automationId: n,
                conversationId: l,
                entries: c,
                turnListApi: d
            }, u), i[6] = n, i[7] = l, i[8] = c, i[9] = u, i[10] = d, i[11] = o) : o = i[11], o)
        }

        function U(e) {
            let t, n, a, s, o = (0, r.c)(25),
                {
                    automationId: i,
                    conversationId: l,
                    entries: c,
                    turnListApi: d
                } = e,
                u = (0, p.y)(F.a),
                h = (0, _.W)(),
                m = (0, p.z)(N.f),
                g = (0, p.x)(z.j, l),
                {
                    data: f
                } = (0, p.x)(D.e, i),
                v = (0, p.z)(B.a),
                b = (0, y.useRef)(null),
                x = (0, y.useRef)(null);
            o[0] !== c ? (t = c.findLast(Q), o[0] = c, o[1] = t) : t = o[1];
            let C = t;
            o[2] !== m || o[3] !== i || o[4] !== v || o[5] !== C || o[6] !== f || o[7] !== h || o[8] !== u || o[9] !== d ? (n = () => {
                null == f || null == m || (v || b.current === m || (b.current = m, (0, W.openAutomationSidePanelTab)({
                    scope: u,
                    automationId: i,
                    title: f.automation.title
                })), null != d && null != C && x.current !== m && (x.current = m, d.scrollToKey(C.turnKey, K, {
                    align: "top"
                }).then(() => {
                    u.set(H.a, {
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

        function Q(e) {
            let {
                turn: t
            } = e;
            return t.items.some(Y)
        }

        function Y(e) {
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
            eE = n("RPqs"),
            eA = n("Ajlz"),
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
            eL = n("FGJH"),
            eB = n("nmN6");
        let ez = new WeakMap;

        function eF(e) {
            let t, n, s = (0, r.c)(6),
                o = (0, p.z)(en.a);
            return s[0] !== o || s[1] !== e.entries[0]?.conversationId ? (t = JSON.stringify([o, e.entries[0]?.conversationId]), s[0] = o, s[1] = e.entries[0]?.conversationId, s[2] = t) : t = s[2], s[3] !== e || s[4] !== t ? (n = (0, a.jsx)(eD, {
                ...e
            }, t), s[3] = e, s[4] = t, s[5] = n) : n = s[5], n
        }

        function eD(e) {
            let t, n, s, o, i, l, c = (0, r.c)(16),
                d = (0, p.y)(F.a),
                u = (0, p.z)(ea.a),
                [h, m] = (0, y.useState)(!1),
                g = (0, y.useRef)(null);
            c[0] !== d ? (t = (e, t) => {
                if (ep(d, e), !e.ctrlKey && !e.metaKey || e.altKey || e.shiftKey || "p" !== e.key.toLowerCase()) return;
                if (e.repeat) return void g.current?.onKeyDown(e, t);
                let n = ez.get(e);
                if (e.defaultPrevented && null == n) return;
                (0, b.flushSync)(() => m(!0));
                let a = n ?? g.current?.onKeyDown(e, t);
                null == a && e.defaultPrevented || Promise.resolve(a).then(() => ez.get(e)).finally(() => {
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
            }, c[5] = x, c[6] = v, c[7] = f, c[8] = d, c[9] = o) : o = c[9], c[10] !== d ? (i = [d], c[10] = d, c[11] = i) : i = c[11], (0, y.useEffect)(o, i), c[12] !== u || c[13] !== e || c[14] !== h ? (l = h || u ? (0, a.jsx)(eW, {
                ...e,
                ref: g,
                printing: u
            }) : null, c[12] = u, c[13] = e, c[14] = h, c[15] = l) : l = c[15], l
        }

        function eW(e) {
            let t, n, s, i, l = (0, r.c)(19),
                {
                    entries: c,
                    title: d,
                    TurnRowComponent: u,
                    printing: h,
                    ref: m
                } = e,
                g = (0, p.y)(F.a),
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
            let w = (0, p.x)(null != c[0] && eS.g, n),
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
                            let a = e.get(z.j, n.conversationId);
                            t = {
                                serverId: a,
                                userResolver: (0, ew.c)(void 0, void 0, void 0, e.get(z.R, n.conversationId) ?? void 0),
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
                                        return (null == n && (n = r || !e.get(eS.g, {
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
                    children: (0, a.jsx)(eB.a, {
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

        function eH(e) {
            let t, n, a, s, i, l, c = (0, r.c)(22),
                {
                    conversationId: d
                } = e,
                u = (0, p.y)(eo.a),
                h = (0, x.a)(),
                m = (0, y.useRef)(null),
                g = (0, p.z)(en.a),
                f = (0, p.x)(z.j, d),
                v = (0, p.z)(eL.b);
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
                if (ep(u, e), e.defaultPrevented || null == f || 0 === v || u.get(eL.c, f)?.complete === !0 || !e.ctrlKey && !e.metaKey || e.altKey || e.shiftKey || "p" !== e.key.toLowerCase() || (e.preventDefault(), e.repeat)) return;
                if (m.current?.signal === t) return void ez.set(e, m.current.preparation);
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
                        }).map(eq)), t.aborted || u.get(en.a) !== g || window.print()
                    }
                }).finally(() => {
                    m.current?.signal === t && (m.current = null)
                });
                m.current = {
                    signal: t,
                    preparation: n
                }, ez.set(e, n)
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

        function eq(e) {
            return e.fetch(void 0, {
                cancelRefetch: !1
            }).catch(eU)
        }

        function eU() {}

        function eK(e) {
            return e.getObserversCount() > 0
        }
        var eV = n("DrWu"),
            eQ = n("x4uR"),
            eY = n("hx97");

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
        let e6 = (0, e3.a)(e2.loadEpicChartIndicator);

        function e5(e) {
            let t, n = (0, r.c)(3),
                {
                    conversationId: s
                } = e,
                o = (0, p.x)(e4.a, s),
                [i, l] = (0, y.useState)(!1);
            return i || null == o || l(!0), n[0] !== s || n[1] !== i ? (t = i ? (0, a.jsx)(e6, {
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
            tC = n("UxN3"),
            t_ = n("GKsW"),
            tw = n("yWTM"),
            tI = n("Z2JT"),
            tT = n("SkIz"),
            tS = n("aNqv"),
            tj = n("ibLK"),
            tE = n("T1PX"),
            tA = n("Fjd0"),
            tP = n("VPBa"),
            tM = n("PWXi"),
            tk = n("zOE4"),
            tR = n("Fm9E"),
            tO = n("Xc94"),
            tN = n("HnT3"),
            tG = n("QSwz"),
            tL = n("ze43"),
            tB = n("KXCj"),
            tz = n("e1xH"),
            tF = n("pAFY");
        n("kErH");
        var tD = n("dJBt"),
            tW = n("FR8U"),
            tH = n("xqnZ"),
            tq = n("UMxD"),
            tU = n("VV6Z"),
            tK = n("JhDO"),
            tV = n("Mbqw"),
            tQ = n("kl6F"),
            tY = n("kfGJ"),
            t$ = n("khOd"),
            tZ = n("RZBv"),
            tJ = n("yzQ9"),
            tX = n("OMIV"),
            t0 = n("JCJj"),
            t1 = n("KkZX"),
            t2 = n("V9K0"),
            t3 = n("ftSl"),
            t4 = n("BdYu"),
            t6 = n("Nyub"),
            t5 = n("jZDY"),
            t8 = n("HgLj"),
            t7 = n("Bc5r"),
            t9 = n("bIvi"),
            ne = n("Elta"),
            nt = n("eW0T"),
            nn = n("hOYb"),
            na = n("eShZ"),
            nr = n("qqut"),
            ns = n("CsbC"),
            no = n("tCyZ"),
            ni = n("JPvk"),
            nl = n("GgLN"),
            nc = n("KdfG"),
            nd = n("AOHi"),
            nu = n("iRMi"),
            nh = n("U2UX"),
            np = n("gbrq"),
            nm = n("K33Q"),
            ng = n("mv4d"),
            nf = n("w7Qu"),
            nv = n("dt5v"),
            ny = n("bWX0"),
            nb = n("smHt"),
            nx = n("aoTb"),
            nC = n("pqpL"),
            n_ = n("TsvN"),
            nw = n("XcRr"),
            nI = n("dk3M"),
            nT = n("WFY2"),
            nS = n("vldH"),
            nj = n("ISgP"),
            nE = n("t2JB"),
            nA = n("DIH2"),
            nP = n("aFoA"),
            nM = n("H8lk"),
            nk = n("f2PP"),
            nR = n("S95W");
        let nO = (0, p.v)(eo.a, e => null);
        var nN = n("DM5G"),
            nG = n("gJe8"),
            nL = n("d2rV"),
            nB = n("Vg3R"),
            nz = n("aLqR"),
            nF = n("VlIB"),
            nD = n("ASxG"),
            nW = n("wD9O"),
            nH = n("lsfk"),
            nq = n("IObw"),
            nU = n("BOYb"),
            nK = n("kQNh"),
            nV = n.n(nK),
            nQ = n("NkEl"),
            nY = n("FW69"),
            n$ = "highlight-x7OnzP",
            nZ = "safari-wcvuzB",
            nJ = "block-t7sxyD";
        let nX = "chatgpt-search-result",
            n0 = "script, style, textarea, input, select, [hidden], [aria-hidden='true'], [data-thread-find-skip]";

        function* n1(e, t) {
            let n = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_TEXT, {
                    acceptNode: e => e.parentElement?.closest(n0) == null ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
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
            let s = RegExp(t.split(/\n+/u).map(nV()).join("\\n*"), "g");
            for (let n = s.exec(r); null != n && n.index < r.length; n = s.exec(r)) {
                let r = n.index;
                s.lastIndex = r + 1;
                let o = r + n[0].length,
                    i = a.find(e => e.end > r),
                    l = a.findLast(e => e.start < o);
                if (null == i || null == l) continue;
                let c = e.ownerDocument.createRange();
                c.setStart(i.node, r - i.start), c.setEnd(l.node, o - l.start), n2(c) && ((0, nY.a)(c) ?? c.toString()).trim() === t && (yield c)
            }
        }

        function n2(e) {
            return Array.from(e.getClientRects()).some(e => e.width > 0 && e.height > 0) && null != e.startContainer.parentElement && "hidden" !== getComputedStyle(e.startContainer.parentElement).visibility
        }
        let n3 = nD.object({
            chatGptSearchNavigation: nD.object({
                key: nD.string(),
                messageId: nD.string()
            })
        });

        function n4(e) {
            let t, n, a, s, o, i, l, c, d, u, h, m, g = (0, r.c)(48),
                {
                    conversationId: f,
                    entries: v,
                    isConversationFetching: b,
                    turnListApi: x
                } = e,
                C = (0, p.y)(eo.a),
                w = (0, p.x)(z.r, f),
                I = (0, nH.b)(),
                T = (0, nW.c)();
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
                            left: (0, nW.b)(a.left + a.width / 2 - r.left - r.width / 2, n),
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
                        h = (0, nW.b)(o.height, n),
                        p = (0, nW.b)(o.top - i.top, n) - c + Math.min(h, u) / 2 - u / 2;
                    t.scrollToDistanceFromBottomPx(t.getLastScrollDistanceFromBottomPx() - p, "instant", "user")
                }(e, I, T)
            }, g[0] = I, g[1] = T, g[2] = t) : t = g[2];
            let S = (0, y.useEffectEvent)(t),
                j = (0, _.W)(),
                E = (0, _.Y)(),
                A = new URLSearchParams(j.search),
                P = A.get("messageId") ?? A.get("message"),
                M = n3.safeParse(j.state).data?.chatGptSearchNavigation,
                k = P ?? M?.messageId,
                R = A.get("selectedTextQuery") ?? "",
                O = (0, p.x)(z.L, f),
                N = !R || null != k && null != O && (O[k]?.message != null || Object.values(O).some(e => e.message?.id === k)),
                G = R || A.get("historySearchQuery") || "",
                L = JSON.stringify([f, null != P ? j.key : M?.key ?? j.key, k]);
            g[3] !== L ? (n = {
                key: L,
                handled: !1,
                positioned: !1
            }, g[3] = L, g[4] = n) : n = g[4];
            let B = (0, y.useRef)(n),
                F = (0, y.useEffectEvent)(e => {
                    B.current.positioned = !0;
                    let t = G.trim().length > 0 ? function(e, t, n) {
                        let a, r, s, o, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "terms",
                            l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                            c = "phrase" === i ? t.trim() : null,
                            d = [...new Set(t.trim().toLowerCase().normalize("NFC").split(/\s+/).map(e => e.replace(/^[^\p{Letter}\p{Number}]+|[^\p{Letter}\p{Number}]+$/gu, "")).filter(e => e.length > 0))],
                            u = new TextEncoder,
                            h = d.filter(e => !/^\p{Letter}+$/u.test(e) || u.encode(e.normalize("NFKD").replace(/\p{Mark}/gu, "")).byteLength >= 3),
                            p = h.length > 0 ? h : d;
                        if (c?.length === 0 || null == c && 0 === p.length) return () => {};
                        let m = new RegExp(null == c ? p.toSorted((e, t) => t.length - e.length).map(nV()).join("|") : nV()(c), null == c ? "giu" : "gu"),
                            g = !1,
                            f = performance.now(),
                            v = !1,
                            y = new WeakSet,
                            b = new Set,
                            x = new MutationObserver(_);

                        function C() {
                            for (let t of (g = !0, x.disconnect(), clearTimeout(r), null != s && cancelAnimationFrame(s), null != a && CSS.highlights.get(nX) === a && CSS.highlights.delete(nX), e.classList.remove(n$, nZ), b)) t.classList.remove(n$, nJ)
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
                            let u = (0, nQ.a)(e);
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
                                for (let e of n1(t, c))
                                    if (!(n++ < l)) {
                                        I.push(e);
                                        break
                                    }
                            } else {
                                let t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_TEXT, {
                                    acceptNode: e => e.parentElement?.closest(n0) != null || u.some(t => {
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
                                        a.setStart(n, t.index), a.setEnd(n, t.index + t[0].length), n2(a) && I.push(a)
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
                            for (let t of (x.disconnect(), clearTimeout(r), "u" > typeof Highlight && null != CSS.highlights ? (a = new Highlight(...I), CSS.highlights.set(nX, a)) : I.length > 0 && T.push(e), e.classList.add(n$), (0, nU.e)() && e.classList.add(nZ), T)) t.classList.add(n$, nJ), b.add(t);
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
            g[5] !== f || g[6] !== b || g[7] !== k || g[8] !== L || g[9] !== C || g[10] !== N ? (a = () => {
                if (B.current.key !== L && (B.current = {
                        key: L,
                        handled: !1,
                        positioned: !1
                    }), null != k && !b && N) return C.watch(e => {
                    !B.current.handled && (0, z.Ob)(e, f, k) && (B.current.handled = !0)
                })
            }, s = [f, b, k, L, C, N], g[5] = f, g[6] = b, g[7] = k, g[8] = L, g[9] = C, g[10] = N, g[11] = a, g[12] = s) : (a = g[11], s = g[12]), (0, y.useLayoutEffect)(a, s), g[13] !== v || g[14] !== k ? (o = null == k ? void 0 : v.find(e => {
                let {
                    turn: t
                } = e;
                return t.messageIds.includes(k)
            }), g[13] = v, g[14] = k, g[15] = o) : o = g[15];
            let D = o;
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
            let W = (0, y.useEffectEvent)(i);
            if (g[21] !== W || g[22] !== w || g[23] !== b || g[24] !== D ? (l = () => {
                    !B.current.positioned || null != D || b || w || W()
                }, g[21] = W, g[22] = w, g[23] = b, g[24] = D, g[25] = l) : l = g[25], g[26] !== w || g[27] !== b || g[28] !== D ? (c = [w, b, D], g[26] = w, g[27] = b, g[28] = D, g[29] = c) : c = g[29], (0, y.useLayoutEffect)(l, c), g[30] !== k || g[31] !== D?.id || g[32] !== D?.turn.items || g[33] !== D?.turnKey) {
                let e = D?.turn.items.findIndex(e => "messageId" in e && e.messageId === k || "assistant-message" === e.type && null != k && e.sourceMessageIds?.includes(k)) ?? -1,
                    t = D?.turn.items[e],
                    n = D?.id;
                u = D?.turnKey, d = null == t || null == n ? void 0 : (0, nq.b)(t, e, n), g[30] = k, g[31] = D?.id, g[32] = D?.turn.items, g[33] = D?.turnKey, g[34] = d, g[35] = u
            } else d = g[34], u = g[35];
            let H = d;
            return g[36] !== F || g[37] !== k || g[38] !== u || g[39] !== x || g[40] !== H ? (h = () => {
                let e;
                if (null == u || null == x) return;
                let t = new AbortController,
                    n = null;
                return x.scrollToKey(u, e => n = (null == k ? null : e.querySelector(`[data-chatgpt-search-message-ids~="${CSS.escape(k)}"]`)) ?? (null == H ? null : e.querySelector(`[data-chatgpt-search-unit-key="${CSS.escape(H)}"]`)) ?? e, {
                    align: "top",
                    signal: t.signal
                }).then(() => {
                    !t.signal.aborted && n?.isConnected && (e = F(n))
                }), () => {
                    t.abort(), e?.()
                }
            }, g[36] = F, g[37] = k, g[38] = u, g[39] = x, g[40] = H, g[41] = h) : h = g[41], g[42] !== k || g[43] !== L || g[44] !== u || g[45] !== x || g[46] !== H ? (m = [L, k, u, x, H], g[42] = k, g[43] = L, g[44] = u, g[45] = x, g[46] = H, g[47] = m) : m = g[47], (0, y.useLayoutEffect)(h, m), null
        }
        var n6 = n("zvAa"),
            n5 = n("SZi8"),
            n8 = n("lBzi"),
            n7 = n("Ga6O"),
            n9 = n("ESlL"),
            ae = n("vknh"),
            at = n("Ppno"),
            an = n("hXcw"),
            aa = n("lA5q"),
            ar = n("wDWo"),
            as = n("IgxH"),
            ao = n("iaTG"),
            ai = n("c3f5"),
            al = n("XpUB"),
            ac = n("xAIC"),
            ad = n("DNYL"),
            au = n("bf6R"),
            ah = n("O666"),
            ap = n("OtLV"),
            am = n("tNq4"),
            ag = n("Skaw"),
            af = n("PYCG");

        function av(e) {
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
                E = (0, p.z)(null == I ? null : ag.a),
                A = (0, p.x)(z.j, f),
                {
                    data: P
                } = (0, p.x)(n8.chatGptConversationQueryById$, null == I ? null : A),
                M = (0, p.x)(nP.a, null == I ? null : A),
                k = (0, p.x)(z.A, M);
            g[0] !== M || g[1] !== P || g[2] !== k || g[3] !== I || g[4] !== A ? (t = null == P && null != M && null != A ? {
                id: A,
                gizmo_id: I,
                is_temporary_chat: k
            } : void 0, g[0] = M, g[1] = P, g[2] = k, g[3] = I, g[4] = A, g[5] = t) : t = g[5];
            let R = t,
                {
                    data: O
                } = (0, p.x)(eQ.b, I),
                G = null == I ? null : (0, ag.b)(E ?? null, y ?? P ?? R, O),
                L = (0, p.x)(am.b, f);
            g[6] !== S ? (n = S.formatMessage(ap.a.headerShare), g[6] = S, g[7] = n) : n = g[7];
            let B = n,
                F = (0, p.x)(null == y ? am.a : null, f),
                D = null != y || null != F,
                W = null;
            if (_ || G?.type === "unavailable") {
                let e;
                g[8] !== S ? (e = S.formatMessage(ap.a.shareDisabledRestricted), g[8] = S, g[9] = e) : e = g[9], W = e
            } else if (w && !D) {
                let e;
                g[10] !== S ? (e = S.formatMessage(ap.a.shareDisabledStreaming), g[10] = S, g[11] = e) : e = g[11], W = e
            } else if (!b || !D) {
                let e;
                g[12] !== S ? (e = S.formatMessage(ap.a.shareDisabledNotReady), g[12] = S, g[13] = e) : e = g[13], W = e
            }
            let H = null != W || L;
            g[14] !== H ? (s = {
                layer: "3087497570",
                parameter: "use_larger_icon",
                disableExposureLog: H
            }, g[14] = H, g[15] = s) : s = g[15];
            let q = (0, p.x)(ah.b, s),
                U = "loaded" === j.status && "personal" === j.structure && (null == G || "snapshot" === G.type),
                K = null != W || L;
            g[16] !== K ? (o = {
                layer: "1823366130",
                parameter: "disable_hover",
                disableExposureLog: K
            }, g[16] = K, g[17] = o) : o = g[17];
            let V = (0, p.x)(U ? ah.b : null, o);
            g[18] !== f || g[19] !== R || g[20] !== I || g[21] !== T || g[22] !== y ? (i = () => {
                let e = null == y ? T.get(am.c, f) : {
                    serverConversationId: y.conversation_id,
                    title: y.title,
                    currentNodeId: y.current_node ?? void 0
                };
                null != e && (0, af.shareChatGptProjectConversation)(T, e.serverConversationId, e.title ?? "", I, e.currentNodeId, "CHATGPT_SHARE_FLOW_SOURCE_SENDER_HEADER", y ?? R)
            }, g[18] = f, g[19] = R, g[20] = I, g[21] = T, g[22] = y, g[23] = i) : i = g[23];
            let Q = i,
                Y = B;
            if ("loaded" === j.status && (null == G || "snapshot" === G.type)) {
                let e;
                g[24] !== j.structure || g[25] !== S ? (e = S.formatMessage("workspace" === j.structure ? ap.a.shareWorkspaceTooltip : ap.a.sharePublicTooltip), g[24] = j.structure, g[25] = S, g[26] = e) : e = g[26], Y = e
            }
            let $ = null == W && !L && !0 === V,
                Z = W ?? Y,
                J = null != W || L;
            return g[27] !== L || g[28] !== q ? (l = !L && (q ? (0, a.jsx)(au.M, {}) : (0, a.jsx)(au.L, {})), g[27] = L, g[28] = q, g[29] = l) : l = g[29], g[30] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)(C.a, {
                ...ap.a.headerShare
            }), g[30] = c) : c = g[30], g[31] !== Q || g[32] !== L || g[33] !== B || g[34] !== J || g[35] !== l ? (d = (0, a.jsxs)(eJ.a, {
                "aria-label": B,
                color: "toolbar",
                disabled: J,
                loading: L,
                radius: "large",
                size: "toolbar",
                onClick: Q,
                children: [l, c]
            }), g[31] = Q, g[32] = L, g[33] = B, g[34] = J, g[35] = l, g[36] = d) : d = g[36], g[37] !== Z || g[38] !== d || g[39] !== $ ? (u = (0, a.jsx)(ad.a, {
                disabled: $,
                content: Z,
                children: d
            }), g[37] = Z, g[38] = d, g[39] = $, g[40] = u) : u = g[40], g[41] !== f || g[42] !== L || g[43] !== I || g[44] !== W || g[45] !== y ? (h = !1, g[41] = f, g[42] = L, g[43] = I, g[44] = W, g[45] = y, g[46] = h) : h = g[46], g[47] !== u || g[48] !== h ? (m = (0, a.jsxs)(a.Fragment, {
                children: [u, h]
            }), g[47] = u, g[48] = h, g[49] = m) : m = g[49], m
        }(0, e3.a)(async () => () => null);
        var ay = n("B0Wx"),
            ab = n("if6d"),
            ax = n("r2mP"),
            aC = n("GYFf"),
            a_ = n("KALm"),
            aw = n("ZhoB"),
            aI = n("RADZ"),
            aT = n("rZzh"),
            aS = n("N9qt");

        function aj(e) {
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
            let b = (0, p.x)(v ? tN.c : null, t),
                x = v && null == b,
                _ = (0, p.x)(h.isMostRecentTurn ? aT.d : null, h.conversationId);
            u[2] !== h.timestampSeparatorAtMs ? (n = null == h.timestampSeparatorAtMs ? null : (0, a.jsx)(ax.b, {
                sentAtMs: h.timestampSeparatorAtMs
            }), u[2] = h.timestampSeparatorAtMs, u[3] = n) : n = u[3];
            let w = null != h.paragen;
            return u[4] !== h.branchingMessageId || u[5] !== h.browserConversationId || u[6] !== h.conversationId || u[7] !== h.enableCloudBrowserActivity || u[8] !== h.feedbackEnabled || u[9] !== h.hasLaterSitesPreview || u[10] !== h.id || u[11] !== h.isMostRecentTurn || u[12] !== h.isReadOnly || u[13] !== h.isTemporaryChat || u[14] !== h.isWorkConversation || u[15] !== h.onEditUserMessage || u[16] !== h.onFork || u[17] !== h.onRegenerateResponse || u[18] !== h.pendingSubmissionAttachments || u[19] !== h.readAloudEnabled || u[20] !== h.referenceImageSuggestionActionInput || u[21] !== h.safetyReview || u[22] !== h.shareEnabled || u[23] !== h.turn || u[24] !== f || u[25] !== x || u[26] !== w ? (s = (0, a.jsx)(a_.a, {
                browserConversationId: h.browserConversationId,
                conversationId: h.conversationId,
                enableCloudBrowserActivity: h.enableCloudBrowserActivity,
                branchingMessageId: h.branchingMessageId,
                hasLaterSitesPreview: h.hasLaterSitesPreview,
                hostId: tY.a,
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
            }), u[4] = h.branchingMessageId, u[5] = h.browserConversationId, u[6] = h.conversationId, u[7] = h.enableCloudBrowserActivity, u[8] = h.feedbackEnabled, u[9] = h.hasLaterSitesPreview, u[10] = h.id, u[11] = h.isMostRecentTurn, u[12] = h.isReadOnly, u[13] = h.isTemporaryChat, u[14] = h.isWorkConversation, u[15] = h.onEditUserMessage, u[16] = h.onFork, u[17] = h.onRegenerateResponse, u[18] = h.pendingSubmissionAttachments, u[19] = h.readAloudEnabled, u[20] = h.referenceImageSuggestionActionInput, u[21] = h.safetyReview, u[22] = h.shareEnabled, u[23] = h.turn, u[24] = f, u[25] = x, u[26] = w, u[27] = s) : s = u[27], u[28] !== h.conversationId || u[29] !== h.isTemporaryChat || u[30] !== h.isWorkConversation || u[31] !== h.paragen || u[32] !== x ? (o = null == h.paragen ? null : (0, a.jsx)(aI.a, {
                comparison: h.paragen,
                conversationId: h.conversationId,
                hostId: tY.a,
                isTemporaryChat: h.isTemporaryChat,
                isWorkConversation: h.isWorkConversation,
                trackTaskViews: x
            }, h.paragen.promptMessageId), u[28] = h.conversationId, u[29] = h.isTemporaryChat, u[30] = h.isWorkConversation, u[31] = h.paragen, u[32] = x, u[33] = o) : o = u[33], u[34] !== h.showSharedConversationPrivateDisclaimer ? (i = h.showSharedConversationPrivateDisclaimer ? (0, a.jsxs)("div", {
                className: "my-2 flex items-center justify-center gap-2 text-size-chat text-secondary select-none",
                children: [(0, a.jsx)(tC.a, {
                    className: "shrink-0",
                    legacyIcon: aC.a,
                    asset16: aS.a,
                    legacyClassName: "icon-2xs",
                    "aria-hidden": !0
                }), (0, a.jsx)(C.a, {
                    id: "chatgptConversations.sharedConversation.privateMessagesDisclaimer",
                    defaultMessage: "Messages beyond this point are only visible to you",
                    description: "Privacy disclaimer shown between the original shared ChatGPT conversation and the reader's new private messages after they continue the shared conversation in Codex Desktop"
                })]
            }) : null, u[34] = h.showSharedConversationPrivateDisclaimer, u[35] = i) : i = u[35], u[36] !== h || u[37] !== _ || u[38] !== y || u[39] !== x ? (l = h.isMostRecentTurn ? (0, a.jsx)(n9.a, {
                conversationId: h.conversationId,
                errorMessage: h.errorMessage,
                isTemporaryChat: h.isTemporaryChat,
                isWorkConversation: h.isWorkConversation,
                onRetry: null == h.onRegenerateResponse || null == _ ? void 0 : async e => {
                    let t = y.get(aT.d, h.conversationId);
                    if (t?.message.id == null || t.isRetryDisabled) return;
                    let n = y.get(z.T, h.conversationId)?.metadata?.errorCode;
                    (0, aw.d)(y.get(eu.c).logProductEvent, {
                        conversationId: y.get(z.j, h.conversationId),
                        messageId: t.message.id,
                        useDefaultModel: t.useDefaultModel,
                        errorCode: n
                    }), await h.onRegenerateResponse?.(t.message.id, {
                        sourceEventTimeStamp: e,
                        source: "model_cap_exceeded" === n ? "rate_limit_retry" : "error_retry",
                        model: (0, aT.e)(t.message, y.get(e7.t, h.conversationId)),
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

        function aE(e) {
            let t, n, s, o = (0, r.c)(8),
                {
                    entries: i,
                    historyLoader: l,
                    isVisible: c
                } = e,
                d = c ? l : null;
            return o[0] !== i ? (t = (0, a.jsx)(ab.a, {
                entries: i,
                preserveMeasuredTurnViewport: !0,
                RowComponent: aA
            }), o[0] = i, o[1] = t) : t = o[1], o[2] !== d || o[3] !== t ? (n = (0, a.jsx)(el.a, {
                value: null,
                children: (0, a.jsxs)(eB.a, {
                    value: null,
                    children: [d, t]
                })
            }), o[2] = d, o[3] = t, o[4] = n) : n = o[4], o[5] !== c || o[6] !== n ? (s = (0, a.jsx)(t2.a, {
                active: c,
                presentation: "panel",
                children: n
            }), o[5] = c, o[6] = n, o[7] = s) : s = o[7], s
        }

        function aA(e) {
            let t, n = (0, r.c)(2),
                {
                    entry: s
                } = e;
            return n[0] !== s ? (t = (0, a.jsx)(aj, {
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
        var aP = n("TRQ3"),
            aM = n("SZCv"),
            ak = n.n(aM),
            aR = n("ALWK"),
            aO = n("PC5z"),
            aN = n("lZ4W"),
            aG = n("ihvi"),
            aL = n("aRto"),
            aB = n("WWSI"),
            az = n("U3Gy"),
            aF = n("mKTJ");
        let aD = (0, p.c)(tQ.a, e => {
                let {
                    get: t
                } = e;
                return t(aR.n)
            }, {
                isEqual: ak()
            }),
            aW = (0, p.c)(tQ.a, e => {
                let {
                    get: t
                } = e;
                return t(aO.i)
            }, {
                isEqual: (e, t) => e.length === t.length && e.every((e, n) => e.messageId === t[n]?.messageId && e.turnId === t[n]?.turnId)
            });

        function aH(e) {
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
                } = (0, _.ab)(),
                g = (0, p.z)(null == m ? null : aD),
                f = (0, p.z)(aW);
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
                b = (0, y.useContext)(aL.a),
                x = c.at(-1);
            if (b?.aboveComposer != null && null != x && v.push(x.turnKey), null != m && g?.size)
                for (let e of c) e.turn.items.flatMap(aK).some(e => "chatgpt-hosted-widget" === e.type && (0, aF.f)(e) && g.has((0, aF.e)(m, e.messageId))) && v.push(e.turnKey);
            let C = c.findLast(aq);
            h?.voiceAutoScrollEnabled && null != C && v.push(C.turnKey);
            let w = (0, p.x)(aG.b, l),
                I = null == w ? void 0 : c.findLast(e => {
                    let {
                        turn: t
                    } = e;
                    return t.messageIds.includes(w)
                }),
                T = null == I ? void 0 : (0, aG.a)(I.turn.items);
            (0, p.x)(aN.a, null == T ? null : {
                conversationId: l,
                userMessageId: T,
                steeredPromptId: I === x ? w : void 0
            }) && null != I && v.push(I.turnKey);
            let S = (0, p.x)(az.b, l);
            i[2] !== l || i[3] !== c || i[4] !== S ? (n = (0, aB.a)(c, S, l), i[2] = l, i[3] = c, i[4] = S, i[5] = n) : n = i[5];
            let j = h?.getHeightPx,
                E = h?.voiceAutoScrollEnabled ? C?.turnKey : void 0,
                A = h?.onTurnLayoutReady;
            return i[6] !== h ? (s = e => {
                let {
                    heightDeltaPx: t
                } = e;
                h?.consumeGrowth(t ?? 0)
            }, i[6] = h, i[7] = s) : s = i[7], i[8] !== d || i[9] !== u || i[10] !== v || i[11] !== n || i[12] !== j || i[13] !== E || i[14] !== A || i[15] !== s ? (o = (0, a.jsx)(ab.a, {
                entries: n,
                getBottomScrollPaddingPx: j,
                layoutReadyTurnKey: E,
                onTurnLayoutReady: A,
                onLatestTurnHeightChange: s,
                onApiChange: d,
                onVisibleContentReady: u,
                preserveMeasuredTurnViewport: !0,
                retainedTurnKeys: v,
                RowComponent: aj
            }), i[8] = d, i[9] = u, i[10] = v, i[11] = n, i[12] = j, i[13] = E, i[14] = A, i[15] = s, i[16] = o) : o = i[16], o
        }

        function aq(e) {
            let {
                turn: t
            } = e;
            return t.items.some(aU)
        }

        function aU(e) {
            return "user-message" === e.type
        }

        function aK(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : [e]
        }
        var aV = n("XAP6"),
            aQ = n("bzoy"),
            aY = n("LYS1"),
            a$ = n("aZoZ"),
            aZ = n("Gv8v"),
            aJ = n("EGpF"),
            aX = n("mTPq"),
            a0 = n("Vcrm"),
            a1 = n("t0mU");
        let a2 = (0, p.d)(eo.a, (e, t) => {
            let {
                get: n
            } = t, a = n(z._, e);
            if (!(0, z.zb)(a)) return !0;
            let r = n(z.L, e),
                s = n(z.B, e);
            if (null == r || null == s) return !1;
            let o = r[s]?.message;
            if (null == o || aY.a.has(o.author.role)) return !1;
            let i = n(z.x, e),
                l = (0, aX.c)({
                    mapping: r,
                    current_node: s
                }, n(z.Q, e)),
                c = n(z.bb, e);
            return "streaming" === a && "tpp" !== i && "flora" !== i && null != n(z.j, e) && !(0, aQ.e)(n(z.o, e)) && null != c && !n(aV.e).has(c) && null != a3(n, e).request.current && (null == l || l.info.num_variants_in_stream <= 1)
        });

        function a3(e, t) {
            let n = e(aJ.a, t),
                a = e(z.j, t);
            return null == n.request.current && null != a ? e(aJ.a, a) : n
        }
        var a4 = n("xtkq"),
            a6 = n("PG5R"),
            a5 = n("aEnb"),
            a8 = n("iLYI"),
            a7 = n("Ipgw"),
            a9 = n("wVX4");

        function re(e) {
            let t, n, s, o, i = (0, r.c)(18),
                {
                    conversationId: l
                } = e,
                c = (0, p.y)(eo.a),
                d = (0, x.a)(),
                u = (0, t5.a)(),
                h = (0, p.x)(z._, l),
                m = (0, p.x)(z.bb, l),
                g = (0, p.x)(z.v, l),
                f = (0, p.x)(z.ab, l),
                v = (0, y.useRef)(null),
                C = (0, y.useRef)(null);
            i[0] !== g || i[1] !== l || i[2] !== d || i[3] !== m || i[4] !== c || i[5] !== h || i[6] !== f ? (t = () => {
                let e = v.current;
                if (null == e) return;
                let t = C.current;
                if ((0, z.zb)(h)) {
                    e.textContent = "", C.current = {
                        conversationId: l,
                        requestId: m ?? ("active-async-turn" === h || "active-tpp-turn" === h ? g?.requestId : null) ?? (t?.conversationId === l ? t.requestId : null)
                    };
                    return
                }
                f || (C.current = null, t?.conversationId === l && "idle" === h && g?.result === "completed" && g.requestId === t.requestId && null == c.get(z.C, l) && (e.textContent = d.formatMessage({
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
        var rt = n("n5iL"),
            rn = n("EFj1"),
            ra = n("iS3k"),
            rr = n("pDUk"),
            rs = n("GaCK"),
            ro = n("Dofq");
        let ri = (0, e3.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(33944)]).then(n.bind(n, "p8Fu"))).ChatGptThreadSummaryPanelBody, {
            fallback: (0, a.jsx)(ra.a.Content, {
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
            errorFallback: (0, a.jsx)(ra.a.Content, {
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

        function rl(e) {
            let t, n, s, o = (0, r.c)(6);
            o[0] !== e ? ({
                readData: n,
                ...t
            } = e, o[0] = e, o[1] = t, o[2] = n) : (t = o[1], n = o[2]);
            let i = (0, ra.b)(),
                [l, c] = (0, y.useState)(null);
            return i && l?.readData !== n && c({
                readData: n,
                data: n()
            }), o[3] !== l || o[4] !== t ? (s = null == l ? null : (0, a.jsx)(ri, {
                ...t,
                data: l.data
            }), o[3] = l, o[4] = t, o[5] = s) : s = o[5], s
        }

        function rc(e) {
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
                g = (0, p.y)(F.a),
                f = (0, ei.h)("2903661647"),
                v = f ? "dynamic-isle" : "summary";
            return o[0] !== g || o[1] !== v ? (t = {
                scope: g,
                layout: v
            }, o[0] = g, o[1] = v, o[2] = t) : t = o[2], o[3] !== l || o[4] !== i || o[5] !== f || o[6] !== c || o[7] !== u || o[8] !== m ? (n = (0, a.jsx)(rl, {
                conversationId: i,
                composerActions: l,
                readData: c,
                isUnifiedDynamicIsleEnabled: f,
                showSources: m,
                shouldBlockExternalEgress: u
            }, i), o[3] = l, o[4] = i, o[5] = f, o[6] = c, o[7] = u, o[8] = m, o[9] = n) : n = o[9], o[10] !== d.shouldHideInlineImmediately || o[11] !== d.shouldShow || o[12] !== t || o[13] !== n ? (s = (0, a.jsx)(ra.a.Root, {
                analytics: t,
                shouldHideInlineImmediately: d.shouldHideInlineImmediately,
                shouldShow: d.shouldShow,
                children: n
            }), o[10] = d.shouldHideInlineImmediately, o[11] = d.shouldShow, o[12] = t, o[13] = n, o[14] = s) : s = o[14], s
        }

        function rd(e) {
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
                b = (0, p.y)(F.a),
                C = (0, y.useContext)(el.a),
                _ = (0, x.a)(),
                w = (0, ei.h)("2903661647"),
                I = (0, p.z)(null == h ? np.N : null);
            l[0] !== h?.isOpen || l[1] !== I ? (t = h?.isOpen ?? (0, np.z)(I, !0), l[0] = h?.isOpen, l[1] = I, l[2] = t) : t = l[2];
            let T = t,
                S = (0, p.z)(rs.b),
                j = h?.isOpen ?? S.isPopoverOpen,
                E = (0, p.x)(rt.f, "togglePinnedSummary");
            (0, t4.b)(b), l[3] !== h || l[4] !== b ? (n = () => {
                null != h ? h.onOpenChange(!h.isOpen) : (0, ro.b)(b)
            }, l[3] = h, l[4] = b, l[5] = n) : n = l[5];
            let P = n;
            (0, rn.a)("togglePinnedSummary", P);
            let M = c ? "browser:rounded-lg browser:bg-surface" : void 0;
            return l[6] !== u || l[7] !== C || l[8] !== h || l[9] !== d || l[10] !== _ || l[11] !== T || l[12] !== j || l[13] !== w || l[14] !== S.displayMode || l[15] !== m || l[16] !== b || l[17] !== E || l[18] !== g || l[19] !== v || l[20] !== P ? (s = "overlay" === S.displayMode ? (0, a.jsx)(rr.a, {
                isOpen: j,
                shouldPreventAutoFocus: h?.shouldPreventAutoFocus,
                onOpenChange: e => {
                    null != h ? h.onOpenChange(e) : b.set(rs.b, t => "overlay" !== t.displayMode || t.isPopoverOpen === e ? t : {
                        ...t,
                        isPopoverOpen: e
                    })
                },
                trigger: (0, a.jsx)(ra.a.HeaderButton, {
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
                    children: (0, a.jsx)(ra.a.PopoverContent, {
                        analytics: {
                            scope: b,
                            layout: w ? "dynamic-isle" : "summary"
                        },
                        children: (0, a.jsx)(rl, {
                            conversationId: d,
                            composerActions: u,
                            readData: m,
                            isUnifiedDynamicIsleEnabled: w,
                            showSources: v,
                            shouldBlockExternalEgress: g
                        }, d)
                    })
                }) : null
            }) : (0, a.jsx)(ra.a.HeaderButton, {
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
        var ru = n("JjRy"),
            rh = n.n(ru),
            rp = n("G4E3"),
            rm = n("KaH3"),
            rg = n("Yz3b"),
            rf = n("ghNX"),
            rv = n("KvVi"),
            ry = n("m250"),
            rb = n("Ng4B"),
            rx = n("bTKb"),
            rC = n("dGDB"),
            r_ = n("lIsV");

        function rw(e) {
            return e.flatMap(e => "chatgpt-reasoning-group" === e.type ? e.items : [e])
        }
        var rI = n("JlMc"),
            rT = n("TUMj"),
            rS = n("f6KK"),
            rj = n("JPXZ"),
            rE = n("zWHk");

        function rA(e) {
            let t, n, a, s, o, i, l, c = (0, r.c)(34),
                {
                    composerController: d,
                    enabled: u
                } = e,
                h = (0, _.W)(),
                p = (0, _.Y)();
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
                if (!u && t && f.current !== g) return (0, rE.b)(d.view, (e, t) => {
                    e && t?.getMeta("addToHistory") !== !1 && d.consumeLocationPromptPrefill(g) && v()
                })
            }, c[10] = v, c[11] = d, c[12] = u, c[13] = g, c[14] = t, c[15] = s) : s = c[15], c[16] !== d || c[17] !== u || c[18] !== g || c[19] !== t ? (o = [d, u, g, t], c[16] = d, c[17] = u, c[18] = g, c[19] = t, c[20] = o) : o = c[20], (0, y.useLayoutEffect)(s, o), c[21] !== v || c[22] !== d || c[23] !== u || c[24] !== g || c[25] !== t || c[26] !== m ? (i = () => {
                if (!u || !t || f.current === g || (f.current = g, v(), !d.consumeLocationPromptPrefill(g))) return;
                let {
                    view: e
                } = d, n = t.replace(/\r\n/g, "\n"), a = "codex-app" === m ? (0, rj.f)({
                    schema: e.state.schema,
                    text: n,
                    restoreOnlySitesAndPluginMentions: !0
                }) : (0, rj.e)({
                    schema: e.state.schema,
                    text: n
                }), r = e.state.tr.replaceWith(0, e.state.doc.content.size, a.content);
                r.setSelection(rS.h.atEnd(r.doc)), e.dispatch(r)
            }, c[21] = v, c[22] = d, c[23] = u, c[24] = g, c[25] = t, c[26] = m, c[27] = i) : i = c[27], c[28] !== d || c[29] !== u || c[30] !== g || c[31] !== t || c[32] !== m ? (l = [d, u, g, t, m], c[28] = d, c[29] = u, c[30] = g, c[31] = t, c[32] = m, c[33] = l) : l = c[33], (0, y.useLayoutEffect)(i, l), null
        }
        var rP = n("zKCW");

        function rM(e) {
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
                children: (0, a.jsx)(rP.a, {
                    ariaLive: "polite",
                    title: t,
                    content: n,
                    customCtas: o
                })
            }), l[8] = n, l[9] = o, l[10] = i) : i = l[10], i
        }
        var rk = n("pgeU");
        let rR = (0, e3.a)(async () => (await Promise.all([n.e(747352), n.e(94193)]).then(n.bind(n, "FKl5"))).ClientDelightPresentation);

        function rO(e) {
            let t, n, s, o = (0, r.c)(7),
                {
                    conversationId: i
                } = e,
                l = (0, p.y)(eo.a),
                c = (0, p.x)(rk.a, i);
            return o[0] !== i || o[1] !== l ? (t = () => {
                let e = () => {
                        let e = l.get(rk.a, i);
                        null != e && (0, rk.b)(l, i, e, "hidden_or_unmounted")
                    },
                    t = () => {
                        "visible" !== document.visibilityState && e()
                    };
                return document.addEventListener("visibilitychange", t), window.addEventListener("pagehide", e), () => {
                    document.removeEventListener("visibilitychange", t), window.removeEventListener("pagehide", e), e()
                }
            }, n = [i, l], o[0] = i, o[1] = l, o[2] = t, o[3] = n) : (t = o[2], n = o[3]), (0, y.useEffect)(t, n), o[4] !== i || o[5] !== c ? (s = null == c ? null : (0, a.jsx)(rR, {
                conversationId: i,
                effect: c
            }, c.id), o[4] = i, o[5] = c, o[6] = s) : s = o[6], s
        }
        var rN = n("fr5e"),
            rG = n("LEgg");
        let rL = (0, e3.a)(async () => (await n.e(432800).then(n.bind(n, "T7hR"))).AutomationPlanHeaderShortcut);

        function rB(e) {
            let t, n = (0, r.c)(3),
                {
                    conversationId: s
                } = e,
                o = (0, ei.h)("2840857813");
            return n[0] !== s || n[1] !== o ? (t = o ? (0, a.jsx)(rL, {
                conversationId: s
            }) : null, n[0] = s, n[1] = o, n[2] = t) : t = n[2], t
        }
        var rz = n("T33u");
        let rF = (0, e3.a)(() => n.e(766350).then(n.bind(n, "wWAQ")).then(e => e.ScheduledGoalNavigationBridge));

        function rD(e) {
            let t, n, s, o = (0, r.c)(10),
                {
                    conversationId: i,
                    scheduledAutomationId: l
                } = e,
                c = (0, p.x)(rz.a, i),
                d = (0, ei.h)("3901104270");
            return o[0] !== i || o[1] !== c ? (t = null == c ? (0, a.jsx)(rB, {
                conversationId: i
            }) : null, o[0] = i, o[1] = c, o[2] = t) : t = o[2], o[3] !== i || o[4] !== d || o[5] !== l ? (n = d && null != l ? (0, a.jsx)(rF, {
                conversationId: i,
                automationId: l
            }) : null, o[3] = i, o[4] = d, o[5] = l, o[6] = n) : n = o[6], o[7] !== t || o[8] !== n ? (s = (0, a.jsxs)(a.Fragment, {
                children: [t, n]
            }), o[7] = t, o[8] = n, o[9] = s) : s = o[9], s
        }
        var rW = n("Qgfj"),
            rH = n("rmk3"),
            rq = n("f38C"),
            rU = n("MRlq"),
            rK = n("fQbA"),
            rV = n("dDDU"),
            rQ = n("soaw"),
            rY = n("ZrYB"),
            r$ = n("X6Vn"),
            rZ = n("Kwur"),
            rJ = n("eKlv"),
            rX = n("MYlA"),
            r0 = n("sfmI"),
            r1 = n("JCtZ"),
            r2 = n("g2p6"),
            r3 = n("oaTv"),
            r4 = n("PME0"),
            r6 = n("lgcP"),
            r5 = n("AcSY"),
            r8 = n("w7E5"),
            r7 = n("QmkR"),
            r9 = n("xEXG"),
            se = n("J6LI"),
            st = n("lUUH"),
            sn = n("ftAl");

        function sa(e) {
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
                } = (0, r5.m)(),
                v = (0, r9.b)();
            return o[0] !== f || o[1] !== l || o[2] !== c || o[3] !== d || o[4] !== u || o[5] !== v || o[6] !== g ? (t = () => {
                let e = g.get(sn.a, l, {
                        enabled: !1
                    }),
                    t = (0, te.a)(e?.gizmo_id) ? e?.gizmo_id ?? null : null,
                    n = null == t ? void 0 : g.query.getData(eQ.b, t);
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
                    } = e, c = (0, te.a)(a?.gizmo_id) ? a?.gizmo_id ?? null : null, d = t.get(r8.a), u = t.get(r7.m), {
                        data: h
                    } = d, p = h?.pages.flatMap(e => e.items).length ?? 0, m = (a?.conversation_origin === "tpp" || a?.conversation_origin === "flora") && ("allowed" === o || h?.pages.some(e => null != e.cursor) === !0), g = t.get(r7.h, n);
                    return null == s || null == a || t.get(r7.g, n) || (0, se.c)(a, r).sourceUnavailable || null == (0, se.b)(t, a, g, !1) || null != c && null == r || null == h || 0 === p && !m ? [] : [...null == r ? [] : [{
                        id: "current-project-name",
                        message: si.projectName,
                        messageValues: {
                            projectName: r.gizmo.display.name
                        },
                        enabled: !1
                    }], ...(0, st.b)({
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
                    let e = g.get(n8.chatGptConversationQueryById$, l, {
                        enabled: !1
                    });
                    null == e.data && e.isFetching && await g.query.getOrFetch(n8.chatGptConversationQueryById$, l).catch(so), null == g.query.getData(n8.chatGptConversationQueryById$, l) && await g.query.getOrFetch(r7.j, [l]).catch(ss)
                })(), h?.()]);
                let e = g.get(sn.a, l, {
                    enabled: !1
                });
                (0, te.a)(e?.gizmo_id) && e?.gizmo_id != null && await g.query.getOrFetch(eQ.b, e.gizmo_id).catch(sr)
            }, o[8] = l, o[9] = h, o[10] = g, o[11] = n) : n = o[11], o[12] !== i || o[13] !== m || o[14] !== t || o[15] !== n ? (s = (0, a.jsx)(rH.a, {
                preserveBrowserContextMenu: !0,
                awaitBeforeOpen: !1,
                getItems: t,
                onBeforeOpen: n,
                onOpenChange: m,
                renderItem: rK.b,
                trigger: "click",
                children: i
            }), o[12] = i, o[13] = m, o[14] = t, o[15] = n, o[16] = s) : s = o[16], s
        }

        function sr() {}

        function ss() {}

        function so() {}
        let si = (0, rW.f)({
            projectName: {
                id: "chatgptConversations.projectActions.projectName",
                defaultMessage: "{projectName}",
                description: "Name of a ChatGPT project offered as a destination for moving a conversation or Work task"
            }
        });

        function sl(e) {
            let t, s, o, i, l, c, d, u, h, m, g, f, v, b, C, w, I, T, E, A = (0, r.c)(70),
                {
                    conversationOrigin: P,
                    conversationId: M,
                    title: k,
                    isHandoffPending: R,
                    isArchived: O,
                    isChatConversation: G,
                    onHandoff: L,
                    onOpenMessage: B,
                    projectId: z,
                    projectName: D,
                    serverConversationId: W
                } = e,
                H = (0, p.y)(F.a),
                q = (0, p.y)(eo.a),
                U = (0, rQ.a)(),
                K = (0, ei.k)();
            A[0] !== K ? (t = K.checkGate("224248639"), A[0] = K, A[1] = t) : t = A[1];
            let V = t;
            A[2] !== K ? (s = K.getLayer("3017902351").get("web_file_library_enabled", !1), A[2] = K, A[3] = s) : s = A[3];
            let Q = s,
                Y = V || Q;
            A[4] !== Y ? (o = {
                enabled: Y
            }, A[4] = Y, A[5] = o) : o = A[5];
            let {
                data: $
            } = (0, p.z)(r2.p, o), Z = Y && $?.fileLibraryEnabledForRegistrationCountry !== !1, J = (0, x.a)(), X = (0, _.Y)(), [ee, et] = (0, y.useState)(null), [en, ea] = (0, y.useState)(!1), es = (0, y.useRef)(null), el = (0, y.useRef)(null);
            A[6] === Symbol.for("react.memo_cache_sentinel") ? (i = [], A[6] = i) : i = A[6];
            let ec = (0, y.useRef)(i);
            A[7] === Symbol.for("react.memo_cache_sentinel") ? (l = {
                name: "chatgpt"
            }, A[7] = l) : l = A[7];
            let {
                isCapable: ed
            } = (0, p.x)(S.a, l), eu = (0, p.x)(r7.g, W);
            A[8] === Symbol.for("react.memo_cache_sentinel") ? (c = () => et("shortcut"), A[8] = c) : c = A[8];
            let eh = G && !eu;
            A[9] !== H || A[10] !== W ? (d = () => (0, r0.a)(H.query.getData(n8.chatGptConversationQueryById$, W), H.get(N.h), H.get(N.g)), A[9] = H, A[10] = W, A[11] = d) : d = A[11], A[12] !== eh || A[13] !== d ? (u = {
                enabled: eh,
                isActive: d
            }, A[12] = eh, A[13] = d, A[14] = u) : u = A[14], (0, rn.a)("deleteChat", c, u), A[15] !== q || A[16] !== eu || A[17] !== X || A[18] !== H || A[19] !== W ? (h = e => {
                !eu && (0, r0.a)(H.query.getData(n8.chatGptConversationQueryById$, W), H.get(N.h), H.get(N.g)) && (et(null), (0, r6.a)(q, W, e), X("/", {
                    replace: !0,
                    state: {
                        leavingDeletedChatGptConversation: !0
                    }
                }))
            }, A[15] = q, A[16] = eu, A[17] = X, A[18] = H, A[19] = W, A[20] = h) : h = A[20];
            let ep = h;
            A[21] !== J ? (m = J.formatMessage(sh.chatActions), A[21] = J, A[22] = m) : m = A[22];
            let em = m;
            A[23] !== H || A[24] !== W ? (g = async () => {
                let e = [];
                ec.current = e, e.push(...await async function(e, t) {
                    let a = await rZ.Request.safeGet("/live/conversations/{conversation_id}/session-sharing", {
                        parameters: {
                            path: {
                                conversation_id: t
                            }
                        }
                    }).catch(() => null);
                    return a?.can_share && 0 !== a.av_sessions.length ? [{
                        id: "share-live-session",
                        icon: au.Yi,
                        message: (0, rW.e)({
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
                                (0, r$.f)(e, r, {
                                    conversationId: t,
                                    sessions: a.av_sessions
                                })
                            })
                        }
                    }] : []
                }(H, W))
            }, A[23] = H, A[24] = W, A[25] = g) : g = A[25];
            let eg = g;
            A[26] !== M || A[27] !== P || A[28] !== Z || A[29] !== J || A[30] !== eu || A[31] !== O || A[32] !== R || A[33] !== U || A[34] !== X || A[35] !== L || A[36] !== B || A[37] !== z || A[38] !== D || A[39] !== H || A[40] !== W || A[41] !== K || A[42] !== k ? (f = e => {
                let t = H.get(N.f),
                    a = H.get(N.k),
                    r = (0, r0.a)(H.query.getData(n8.chatGptConversationQueryById$, W), H.get(N.h), H.get(N.g)),
                    s = (0, rJ.b)(H, W),
                    o = !eu && (0, r0.a)(s, H.get(N.h), H.get(N.g)),
                    i = H.get(j.b).pathname,
                    l = () => U() && i === H.get(j.b).pathname && t === H.get(N.f) && a === H.get(N.k),
                    c = (0, r3.a)(H, M, P, () => (0, r4.a)(X)),
                    d = [];
                return K.getLayer("3732549458").get("enable_conversation_audio_summary", !1) && d.push({
                    id: "chatgpt-audio-summary",
                    message: (0, rW.e)({
                        id: "GizmoInformation.audioSummary",
                        defaultMessage: "Audio summary",
                        description: "Opens the dialog for generating and listening to an audio summary of the current chat"
                    }),
                    icon: au.mg,
                    selectAfterClose: !0,
                    onSelect: () => {
                        (async function() {
                            return (await n.e(600460).then(n.bind(n, "EEPj"))).openAudioSummaryDialog
                        })().then(e => {
                            l() && e(H, W)
                        }).catch(() => {
                            l() && (es.current?.focus({
                                preventScroll: !0
                            }), H.get(er.f).danger(J.formatMessage({
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
                    message: (0, rW.e)({
                        id: "GizmoInformation.viewFiles",
                        defaultMessage: "View files in chat",
                        description: "Opens the side panel listing files referenced in the active saved ChatGPT conversation, even when the list is empty"
                    }),
                    icon: au.rb,
                    onSelect: () => {
                        (async function() {
                            return (await n.e(963775).then(n.bind(n, "fUWe"))).openConversationFiles
                        })().then(e => {
                            l() && e(H, {
                                conversationId: M,
                                serverConversationId: W,
                                onOpenMessage: B
                            })
                        }).catch(() => {
                            l() && H.get(er.f).danger(J.formatMessage({
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
                }), d.push(...(0, rV.a)(H)), (0, r1.a)(H, {
                    organizationItems: (0, rK.a)([]),
                    projectItems: void 0 === e ? [] : e,
                    sharingItems: ec.current,
                    viewItems: d,
                    preferenceItems: null == c ? [] : [c],
                    surface: "header",
                    conversationId: W,
                    stateConversationId: M,
                    conversationOrigin: P,
                    title: k,
                    isHandoffPending: R,
                    canHandoff: null != L,
                    onHandoff: L,
                    projectId: z,
                    projectName: D,
                    onRename: !r || eu || O ? void 0 : () => void(0, rJ.renameActiveChatGptConversation)(H, M),
                    isPinned: H.get(r7.h, W) ?? s?.is_starred === !0,
                    onTogglePin: o ? () => {
                        let e = (0, rJ.b)(H, W);
                        !(null == e || H.get(r7.g, W)) && (0, r0.a)(e, H.get(N.h), H.get(N.g)) && (0, r7.V)({
                            scope: H,
                            conversation: "conversation_id" in e ? {
                                gizmo_id: e.gizmo_id,
                                id: e.conversation_id,
                                is_archived: e.is_archived,
                                is_starred: e.is_starred,
                                title: e.title
                            } : e
                        }).catch(sc)
                    } : void 0,
                    onArchive: !r || eu || O ? void 0 : () => (0, rY.a)(H, W),
                    onUnarchive: r && !eu && O ? () => {
                        (0, r7.W)({
                            scope: H,
                            conversationId: W
                        }).then(() => {
                            H.get(er.f).success(J.formatMessage(rU.a.unarchiveSuccessPlain))
                        }).catch(() => {
                            H.get(er.f).danger(J.formatMessage(ap.a.unarchiveError), {
                                errorAnalytics: {
                                    toastId: "chatgptConversationPage.onUnarchive.unarchiveError"
                                }
                            })
                        })
                    } : void 0,
                    onDelete: !r || eu ? void 0 : () => et("menu")
                })
            }, A[26] = M, A[27] = P, A[28] = Z, A[29] = J, A[30] = eu, A[31] = O, A[32] = R, A[33] = U, A[34] = X, A[35] = L, A[36] = B, A[37] = z, A[38] = D, A[39] = H, A[40] = W, A[41] = K, A[42] = k, A[43] = f) : f = A[43];
            let ef = f;
            A[44] !== em ? (v = (0, a.jsx)(rq.a, {
                ref: es,
                className: "no-drag",
                color: "primary",
                label: em,
                size: "toolbar"
            }), A[44] = em, A[45] = v) : v = A[45], A[46] !== en || A[47] !== em || A[48] !== v ? (b = (0, a.jsx)(ad.a, {
                content: em,
                disabled: en,
                children: v
            }), A[46] = en, A[47] = em, A[48] = v, A[49] = b) : b = A[49];
            let ev = b;
            A[50] !== ef || A[51] !== ev || A[52] !== X || A[53] !== ed || A[54] !== eg || A[55] !== W ? (C = ed ? (0, a.jsx)(sa, {
                conversationId: W,
                getBaseItems: ef,
                menuTriggerRef: es,
                navigate: X,
                onBeforeOpen: eg,
                onOpenChange: ea,
                children: ev
            }) : (0, a.jsx)(rH.a, {
                preserveBrowserContextMenu: !0,
                getItems: () => ef(),
                onBeforeOpen: eg,
                onOpenChange: ea,
                renderItem: rK.b,
                trigger: "click",
                children: ev
            }), A[50] = ef, A[51] = ev, A[52] = X, A[53] = ed, A[54] = eg, A[55] = W, A[56] = C) : C = A[56];
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
            }, A[59] = I) : I = A[59], A[60] !== ep || A[61] !== eu || A[62] !== ey || A[63] !== eb || A[64] !== w || A[65] !== k ? (T = (0, a.jsx)(rX.a, {
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

        function sc() {}

        function sd() {
            let e, t, n, s = (0, r.c)(8),
                o = (0, x.a)(),
                [i, l] = (0, y.useState)(!1);
            s[0] !== o ? (e = o.formatMessage(sh.more), s[0] = o, s[1] = e) : e = s[1];
            let c = e;
            return s[2] !== c ? (t = (0, a.jsx)(rq.a, {
                className: "no-drag",
                color: "primary",
                label: c,
                size: "toolbar"
            }), s[2] = c, s[3] = t) : t = s[3], s[4] !== i || s[5] !== c || s[6] !== t ? (n = (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(rH.a, {
                    preserveBrowserContextMenu: !0,
                    getItems: su,
                    onOpenChange: l,
                    renderItem: rK.b,
                    trigger: "click",
                    children: (0, a.jsx)(ad.a, {
                        content: c,
                        disabled: i,
                        children: t
                    })
                })
            }), s[4] = i, s[5] = c, s[6] = t, s[7] = n) : n = s[7], n
        }

        function su() {
            return (0, rK.a)([])
        }
        let sh = (0, rW.f)({
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
        var sp = n("QRR6"),
            sm = n("WLgA");

        function sg(e) {
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
                children: (0, a.jsx)(_.f, {
                    className: "flex h-9 max-w-full min-w-8 shrink cursor-interaction items-center overflow-hidden rounded-lg px-2 text-start text-base text-secondary transition-colors hover:bg-surface-tertiary hover:text-default",
                    to: (0, sm.c)(c.gizmo.id),
                    children: (0, a.jsxs)("span", {
                        className: "flex min-w-0 items-center gap-1.5",
                        children: [(0, a.jsx)(tW.a, {
                            className: "size-5",
                            color: c.gizmo.display.theme,
                            defaultColor: "secondary",
                            fallbackIcon: (0, a.jsx)(au.vd, {}),
                            icon: c.gizmo.display.emoji,
                            sharedIcon: "shared" === (0, a9.b)(c) ? (0, a.jsx)(sp.a, {}) : void 0
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
        var sf = n("dLcZ"),
            sv = n("W5pg"),
            sy = n("QcW8"),
            sb = n("yC2B");

        function sx(e) {
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
                I = (0, p.z)(sy.$),
                T = (0, p.z)(sy.cb),
                S = (0, x.a)();
            f[0] !== S.locale ? (t = (0, sb.a)(S.locale), f[0] = S.locale, f[1] = t) : t = f[1];
            let j = t,
                E = I?.mode === "split" && "left" === T != ("rtl" === j);
            f[2] !== E || f[3] !== w ? (n = e => E && !w ? e : 0, f[2] = E, f[3] = w, f[4] = n) : n = f[4];
            let M = (0, sv.a)(_, n);
            f[5] !== M || f[6] !== C ? (s = [C, M], f[5] = M, f[6] = C, f[7] = s) : s = f[7];
            let k = (0, sv.a)(s, sC);
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

        function sC(e) {
            let [t, n] = e;
            return `${Math.max(0,t-n)}px`
        }
        var s_ = n("X0li");
        let sw = (0, e3.a)(s_.d),
            sI = (0, e3.a)(async () => (await n.e(328371).then(n.bind(n, "uPMT"))).SectionHistory),
            sT = (0, e3.a)(async () => (await n.e(270015).then(n.bind(n, "r5vN"))).SectionNavigation);
        var sS = n("lX86");
        n("i1of");
        var sj = n("a4V1"),
            sE = n("alJ6"),
            sA = n("u9iS"),
            sP = n("KidQ");
        let sM = {
            addInitialContentToHistory: !0,
            enableCodeBlocks: !1,
            enableSelectedTextLinks: !1,
            enableFileMentions: !0,
            enableSkillMentions: !1,
            enableSlashCommands: {
                triggers: ["/"]
            }
        };

        function sk(e) {
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
            }, l[6] = m, l[7] = s) : s = l[7], l[8] !== c ? (o = e => null == e ? null : c(e), l[8] = c, l[9] = o) : o = l[9], l[10] !== t || l[11] !== n || l[12] !== s || l[13] !== o ? (i = (0, a.jsx)(sP.a, {
                controllerOptions: sM,
                initialSuggestionOptions: t,
                getInitialContent: n,
                getInitialInput: s,
                children: o
            }), l[10] = t, l[11] = n, l[12] = s, l[13] = o, l[14] = i) : i = l[14], i
        }
        var sR = n("ygKd"),
            sO = n("KSir"),
            sN = n("vVgo");
        let sG = (0, e3.a)(async () => (await n.e(642007).then(n.bind(n, "KhUL"))).CourseHeaderShortcut);

        function sL(e) {
            let t, n = (0, r.c)(3),
                {
                    conversationId: s
                } = e,
                o = (0, ei.h)("4035922817");
            return n[0] !== s || n[1] !== o ? (t = o ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(sG, {
                    conversationId: s
                })
            }) : null, n[0] = s, n[1] = o, n[2] = t) : t = n[2], t
        }
        var sB = n("QPeR"),
            sz = n("MgyE"),
            sF = n("gyrn"),
            sD = n("wnpN"),
            sW = n("M3Kf");

        function sH(e) {
            let t, n, s, i, l, c, d = (0, r.c)(21),
                {
                    conversationId: u
                } = e,
                h = (0, p.y)(eo.a),
                m = (0, p.x)(z.j, u),
                g = (0, p.z)(eL.b),
                {
                    search: f
                } = (0, _.W)();
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
                        let e = h.get(z.L, u),
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
        var sq = n("ckwE");

        function sU(e) {
            let t, n = (0, r.c)(3),
                {
                    children: s
                } = e,
                [o] = (0, y.useState)(sK);
            return n[0] !== o || n[1] !== s ? (t = (0, a.jsx)(eB.a, {
                value: o,
                children: s
            }), n[0] = o, n[1] = s, n[2] = t) : t = n[2], t
        }

        function sK() {
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
            let t, n = (0, r.c)(2),
                {
                    children: s
                } = e;
            return n[0] !== s ? (t = (0, a.jsx)(sq.a, {
                children: (0, a.jsx)(sU, {
                    children: s
                })
            }), n[0] = s, n[1] = t) : t = n[1], t
        }
        var sQ = n("MDmT"),
            sY = n("K45w"),
            s$ = n("jCHb"),
            sZ = n("V8uZ");

        function sJ(e) {
            let t = e.querySelector("[data-dil-message-id]") ?? e;
            return t.checkVisibility() && null == t.querySelector("[data-dil-render-failed]") && t.innerText.trim().length > 0
        }
        n("CSxw");
        var sX = n("NqfB"),
            s0 = n("JEFL"),
            s1 = n("moBM");
        let s2 = '[data-markdown-text-style="assistant-message"]',
            s3 = (0, p.d)(eo.a, (e, t) => {
                let {
                    conversationId: n,
                    messageId: a
                } = e, {
                    get: r
                } = t;
                return null == a ? null : r(z.L, n)?.[a]?.message ?? null
            });

        function s4(e) {
            let t, n, s = (0, r.c)(5),
                o = `[data-chatgpt-conversation-selection-target="${e.conversationId}"]`;
            return s[0] !== e ? (t = t => (0, a.jsx)(s6, {
                ...e,
                selection: t
            }), s[0] = e, s[1] = t) : t = s[1], s[2] !== o || s[3] !== t ? (n = (0, a.jsx)(sX.a, {
                align: "start",
                targetSelector: o,
                children: t
            }), s[2] = o, s[3] = t, s[4] = n) : n = s[4], n
        }

        function s6(e) {
            let t, s, o, i, l, c, d, u = (0, r.c)(30),
                {
                    conversationId: h,
                    moreDetailsEnabled: m,
                    onAddSelectedText: g,
                    selection: f
                } = e,
                v = (0, p.y)(F.a),
                y = (0, x.a)(),
                b = (0, ei.h)("4290238484"),
                C = (0, ei.h)("473637331"),
                _ = (0, p.z)(s1.a),
                w = (0, p.x)(z.x, h);
            u[0] !== w || u[1] !== _ || u[2] !== v ? (t = _ && "tpp" === w && "chatgpt-thread" === v.value.routeKind && null == v.value.workSideChat && !0, u[0] = w, u[1] = _, u[2] = v, u[3] = t) : t = u[3];
            let I = t;
            u[4] !== h || u[5] !== f.selectionRange ? (s = function(e) {
                let {
                    conversationId: t,
                    range: n
                } = e, a = n.startContainer instanceof Element ? n.startContainer : n.startContainer.parentElement, r = n.endContainer instanceof Element ? n.endContainer : n.endContainer.parentElement, s = a?.closest(s2);
                if (n.collapsed || null == s || !s.isConnected || s !== r?.closest(s2)) return null;
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
            let j = (0, p.x)(s3, o),
                E = (0, p.x)(z.j, h),
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
                    for (let r of n1(e, n.trim())) {
                        if (0 >= t.compareBoundaryPoints(Range.START_TO_START, r)) break;
                        a++
                    }
                    return a
                }(T.markdownElement, f.selectionRange, e))
            } : void 0, u[13] = A, u[14] = C, u[15] = g, u[16] = f.selectionRange, u[17] = T, u[18] = l) : l = u[18], u[19] !== A || u[20] !== h || u[21] !== y || u[22] !== v || u[23] !== T ? (c = A ? e => {
                Promise.all([n.e(753405), n.e(585419), n.e(877700), n.e(353230), n.e(81461), n.e(828774), n.e(62441), n.e(242986), n.e(331845), n.e(873856), n.e(71918)]).then(n.bind(n, "zRlR")).then(t => {
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
            } : void 0, u[19] = A, u[20] = h, u[21] = y, u[22] = v, u[23] = T, u[24] = c) : c = u[24], u[25] !== f.selectedText || u[26] !== i || u[27] !== l || u[28] !== c ? (d = (0, a.jsx)(s0.a, {
                conversationTerminology: "chat",
                selectedText: f.selectedText,
                onOpenSideChat: i,
                onAddSelectedText: l,
                onMoreDetails: c
            }), u[25] = f.selectedText, u[26] = i, u[27] = l, u[28] = c, u[29] = d) : d = u[29], d
        }
        var s5 = n("Fjze");

        function s8(e) {
            let t, n, a, s = (0, r.c)(7),
                {
                    sharedConversationId: o
                } = e,
                i = (0, p.y)(eo.a),
                l = null != o;
            s[0] !== i || s[1] !== o ? (t = () => {
                null != o && (rZ.Request.safePost("/received-shares/open", {
                    requestBody: {
                        share_kind: "conversation",
                        share_id: o
                    }
                }).then(() => i.queryClient.invalidateQueries({
                    queryKey: ["opened-shared-links"]
                })).catch(s7), (0, eu.a)(i, s5.a, {
                    sharedConversationId: o
                }))
            }, s[0] = i, s[1] = o, s[2] = t) : t = s[2];
            let c = (0, y.useEffectEvent)(t);
            return s[3] !== c ? (n = () => {
                c()
            }, s[3] = c, s[4] = n) : n = s[4], s[5] !== l ? (a = [l], s[5] = l, s[6] = a) : a = s[6], (0, y.useEffect)(n, a), null
        }

        function s7() {}
        var s9 = n("GigQ"),
            oe = n("JKdL"),
            ot = n("HOLv"),
            on = n("FGv0"),
            oa = n("r9i9"),
            or = n("tdfh"),
            os = n("SEBt"),
            oo = n("uQqo"),
            oi = n("vpB7");

        function ol(e) {
            let t, s, o, i, l, c = (0, r.c)(12),
                {
                    data: d
                } = e,
                u = (0, p.y)(eo.a),
                h = (0, x.a)();
            c[0] !== h ? (t = h.formatMessage(ap.a.headerShare), c[0] = h, c[1] = t) : t = c[1];
            let m = t,
                [g, f] = (0, y.useState)(!1);
            return c[2] !== d || c[3] !== g || c[4] !== u ? (s = () => {
                g || (f(!0), (async function(e, t) {
                    let a = t.sharedPost,
                        r = a?.attachments[0]?.kind === "media_generation" ? (0, oo.a)(a, (0, oo.b)(a))[0] : null,
                        s = crypto.randomUUID();
                    (0, os.b)(e, {
                        attachmentType: t.attachmentType,
                        contentType: t.contentType,
                        shareId: t.shareId,
                        shareSessionId: s
                    });
                    let o = t.dialogProps.receiverShareLink;
                    if (o?.contentType === "conversation") {
                        let a = (0, os.a)(e, {
                                actor: "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER",
                                shareId: t.shareId,
                                shareSessionId: s,
                                source: "CHATGPT_SHARE_FLOW_SOURCE_RECEIVER_HEADER",
                                usedExistingLink: !0,
                                omitSheetType: !0
                            }),
                            r = await (0, on.a)(Promise.resolve(o.shareLinkUrl));
                        if (a({
                                result: r ? "link-copied" : "copy-failed",
                                shareId: t.shareId
                            }), r) {
                            let {
                                showConversationShareCopiedToast: t
                            } = await n.e(555532).then(n.bind(n, "euaP"));
                            t(e, null, !0 === o.isWorkspaceOnly)
                        } else(0, r$.f)(e, or.a, {
                            ...t.dialogProps,
                            recoveryShareLink: o,
                            shareSessionId: s
                        });
                        return
                    }(0, r$.f)(e, or.a, {
                        ...t.dialogProps,
                        image: r?.src == null ? void 0 : {
                            alt: t.dialogProps.title ?? "",
                            item: r,
                            previewSrc: r.src
                        },
                        previewTurns: null != r ? void 0 : (0, oa.j)(t.conversation, t.conversation.current_node ?? t.dialogProps.currentNodeId),
                        privacyNotices: (0, oa.k)({
                            conversation: t.conversation,
                            projectId: null
                        }),
                        shareSessionId: s
                    })
                })(u, d).finally(() => f(!1)))
            }, c[2] = d, c[3] = g, c[4] = u, c[5] = s) : s = c[5], c[6] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, a.jsx)(ot.a, {
                asset: oi.a
            }), i = (0, a.jsx)(C.a, {
                ...ap.a.headerShare
            }), c[6] = o, c[7] = i) : (o = c[6], i = c[7]), c[8] !== g || c[9] !== m || c[10] !== s ? (l = (0, a.jsxs)(eJ.a, {
                "aria-label": m,
                color: "ghostActive",
                loading: g,
                size: "toolbar",
                onClick: s,
                children: [o, i]
            }), c[8] = g, c[9] = m, c[10] = s, c[11] = l) : l = c[11], l
        }
        var oc = n("JUxu");
        let od = (0, y.lazy)(async () => ({
            default: (await Promise.resolve().then(n.bind(n, "taaw"))).CodexThreadReportDialog
        }));

        function ou(e) {
            let t, n, s, o, i = (0, r.c)(8),
                {
                    sharedConversationId: l
                } = e,
                c = (0, p.y)(eo.a);
            if (null != (0, p.x)(eS.e, (0, y.useContext)(O.a))) {
                let e;
                return i[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(oc.a, {}), i[0] = e) : e = i[0], e
            }
            return i[1] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)("div", {
                className: "text-secondary",
                children: (0, a.jsx)(C.a, {
                    id: "chatgptConversations.sharedConversation.copyDisclaimer",
                    defaultMessage: "This is a copy of a shared ChatGPT chat. It won't be added to memory.",
                    description: "Informational notice above a shared ChatGPT chat explaining that the copy will not be added to the viewer's memory"
                })
            }), i[1] = t) : t = i[1], i[2] !== c || i[3] !== l ? (n = e => {
                if (null == l) return;
                let t = e.currentTarget;
                (0, r$.f)(c, od, {
                    reportEntityType: "share_link",
                    threadId: l,
                    onCloseAutoFocus: e => {
                        e.preventDefault();
                        let n = t.ownerDocument.activeElement;
                        t.isConnected && (n === t.ownerDocument.body || e.target instanceof HTMLElement && e.target.contains(n)) && t.focus({
                            preventScroll: !0
                        })
                    }
                }), (0, os.c)(c, l)
            }, i[2] = c, i[3] = l, i[4] = n) : n = i[4], i[5] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, a.jsx)(C.a, {
                id: "chatgptConversations.sharedConversation.reportButton",
                defaultMessage: "Report conversation",
                description: "Button above a shared ChatGPT conversation in Codex Desktop that opens ChatGPT's report modal for reporting another person's shared conversation"
            }), i[5] = s) : s = i[5], i[6] !== n ? (o = (0, a.jsxs)("div", {
                className: "flex flex-col items-center gap-1 text-center text-xs select-none",
                children: [t, (0, a.jsx)(eJ.a, {
                    className: "font-semibold",
                    color: "ghostActive",
                    onClick: n,
                    children: s
                })]
            }), i[6] = n, i[7] = o) : o = i[7], o
        }
        var oh = n("zbjM"),
            op = n("MVHH"),
            om = n("xSOA"),
            og = n("rhKI"),
            of = n("PP3M"),
            ov = n("jAnS"),
            oy = n("CFOe"),
            ob = n("JNtf"),
            ox = n("mUDD");

        function oC(e) {
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
            }, f[4] = v, f[5] = _, f[6] = s) : s = f[6], f[7] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, a.jsx)(ob.e, {
                children: (0, a.jsx)(C.a, {
                    id: "chatgptConversations.temporaryChat.save.title",
                    defaultMessage: "Save chat?",
                    description: "Title of the confirmation dialog for converting a temporary ChatGPT conversation into a regular saved chat."
                })
            }), f[7] = o) : o = f[7], f[8] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(ox.e, {
                children: (0, a.jsx)(ox.d, {
                    className: "select-none",
                    title: o,
                    subtitle: (0, a.jsx)(ob.d, {
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
            }), f[17] = y, f[18] = I, f[19] = h) : h = f[19], f[20] !== h || f[21] !== d ? (p = (0, a.jsx)(ox.e, {
                children: (0, a.jsxs)(ox.c, {
                    children: [d, h]
                })
            }), f[20] = h, f[21] = d, f[22] = p) : p = f[22], f[23] !== p || f[24] !== s ? (m = (0, a.jsxs)(ox.b, {
                as: "form",
                onSubmit: s,
                children: [i, p]
            }), f[23] = p, f[24] = s, f[25] = m) : m = f[25], f[26] !== y || f[27] !== m || f[28] !== n || f[29] !== w ? (g = (0, a.jsx)(ob.b, {
                open: !0,
                dialogCloseLabel: t,
                onOpenChange: n,
                shouldIgnoreClickOutside: y,
                showDialogClose: w,
                size: "narrow",
                children: m
            }), f[26] = y, f[27] = m, f[28] = n, f[29] = w, f[30] = g) : g = f[30], g
        }

        function o_(e) {
            (0, n8.e)(e).catch(() => {
                nT.a.warning("Failed to acknowledge temporary chat save coachmark")
            })
        }

        function ow(e) {
            let t, n = (0, r.c)(2),
                {
                    conversationId: s
                } = e;
            return n[0] !== s ? (t = (0, a.jsxs)(a.Fragment, {
                children: [null, (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(oI, {
                        conversationId: s
                    })
                })]
            }), n[0] = s, n[1] = t) : t = n[1], t
        }

        function oI(e) {
            let t, n = (0, r.c)(2),
                {
                    conversationId: s
                } = e;
            return (0, p.z)(of.e) ? (n[0] !== s ? (t = (0, a.jsx)(oT, {
                conversationId: s
            }), n[0] = s, n[1] = t) : t = n[1], t) : null
        }

        function oT(e) {
            let t, n, s, o, i, l, c, d, u, h, m, g, f, v = (0, r.c)(49),
                {
                    conversationId: b
                } = e,
                w = (0, p.y)(eo.a),
                I = (0, x.a)(),
                T = (0, _.Y)(),
                [S, j] = (0, y.useState)(!1),
                [E, A] = (0, y.useState)(!1),
                [P, M] = (0, y.useState)(!1),
                [k, R] = (0, y.useState)(!1),
                O = (0, y.useRef)(!1),
                N = (0, p.z)(r2.p).data,
                G = (0, p.x)(z.j, b),
                L = (0, p.x)(z.W, b),
                B = (0, p.x)(z.H, b),
                F = (0, p.x)(e7.i, b);
            v[0] !== b || v[1] !== w ? (t = {
                mutationFn: e => {
                    let {
                        sourceConversationId: t,
                        selectedLeafId: n
                    } = e;
                    if (w.get(z.H, b) || w.get(e7.i, b) || t !== w.get(z.j, b) || n !== w.get(z.W, b)) throw Error("Cannot save an unavailable temporary chat message");
                    return rZ.Request.safePost("/conversation/{conversation_id}/save", {
                        parameters: {
                            path: {
                                conversation_id: t
                            }
                        },
                        requestBody: {
                            selected_leaf_id: n
                        },
                        isExpectedError: oP
                    }).then(oA)
                },
                retry: oE
            }, v[0] = b, v[1] = w, v[2] = t) : t = v[2];
            let {
                mutateAsync: D,
                isPending: W
            } = (0, om.a)(t), H = null != G && null != L && !B && !F && !W && !E;
            v[3] !== I ? (n = I.formatMessage({
                id: "chatgptConversations.temporaryChat.save.button",
                defaultMessage: "Save chat",
                description: "Tooltip and accessible label for the bookmark button in a temporary ChatGPT conversation. Opens a confirmation dialog to save it to regular history."
            }), v[3] = I, v[4] = n) : n = v[4];
            let q = n;
            v[5] !== N?.eligibleAnnouncements ? (s = N?.eligibleAnnouncements?.includes(r2.h), v[5] = N?.eligibleAnnouncements, v[6] = s) : s = v[6];
            let U = !0 === s,
                K = !k && (P || U && H);
            v[7] !== b || v[8] !== P || v[9] !== w || v[10] !== K ? (o = () => {
                if (!K || P || O.current) return;
                let e = !1;
                return queueMicrotask(() => {
                    e || O.current || (O.current = !0, (0, eu.a)(w, op.Ab, {
                        personalizationMode: (0, og.a)((0, of.k)(w, b))
                    }), M(!0), o_(w))
                }), () => {
                    e = !0
                }
            }, i = [b, P, w, K], v[7] = b, v[8] = P, v[9] = w, v[10] = K, v[11] = o, v[12] = i) : (o = v[11], i = v[12]), (0, y.useEffect)(o, i), v[13] !== w ? (l = () => {
                R(!0), O.current || (O.current = !0, o_(w))
            }, v[13] = w, v[14] = l) : l = v[14];
            let V = l;
            v[15] !== H || v[16] !== b || v[17] !== I || v[18] !== T || v[19] !== D || v[20] !== w || v[21] !== L || v[22] !== G ? (c = async function() {
                let e;
                if (!H || null == G || null == L) return;
                let t = (0, og.a)((0, of.k)(w, b));
                (0, eu.a)(w, op.Bb, {
                    personalizationMode: t
                });
                try {
                    e = (await D({
                        sourceConversationId: G,
                        selectedLeafId: L
                    })).conversation_id
                } catch (e) {
                    (0, eu.a)(w, op.Cb, {
                        personalizationMode: t,
                        failureCategory: (0, og.b)(e)
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
                A(!0), j(!1), (0, r7.H)(w), (0, r7.K)(w, G, "remove"), (0, r7.K)(w, e, "refresh"), T((0, ov.c)(e), {
                    replace: !0
                }), w.get(er.f).success(I.formatMessage({
                    id: "chatgptConversations.temporaryChat.save.success",
                    defaultMessage: "Chat saved. It will now appear in your chat history.",
                    description: "Success toast confirming that a formerly temporary ChatGPT conversation is now saved in regular history."
                })), rZ.Request.safePost("/conversation/gen_title/{conversation_id}", {
                    parameters: {
                        path: {
                            conversation_id: e
                        }
                    },
                    requestBody: {
                        message_id: L
                    }
                }).then(oj).then(t => {
                    (0, z.$b)({
                        scope: w,
                        conversationId: e,
                        title: t
                    }), w.query.setData(n8.chatGptConversationQueryById$, e, e => null == e ? e : {
                        ...e,
                        title: t
                    }), (0, r7.H)(w), (0, r7.K)(w, e, "refresh")
                }).catch(oS)
            }, v[15] = H, v[16] = b, v[17] = I, v[18] = T, v[19] = D, v[20] = w, v[21] = L, v[22] = G, v[23] = c) : c = v[23];
            let Q = c,
                Y = !H;
            v[24] !== b || v[25] !== w || v[26] !== K ? (d = () => {
                (0, eu.a)(w, op.Eb, {
                    personalizationMode: (0, og.a)((0, of.k)(w, b)),
                    coachMarkVisible: K
                }), j(!0)
            }, v[24] = b, v[25] = w, v[26] = K, v[27] = d) : d = v[27], v[28] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, a.jsx)(tC.b, {
                icon: {
                    16: au.pb,
                    20: au.qb
                }
            }), v[28] = u) : u = v[28], v[29] !== q || v[30] !== Y || v[31] !== d ? (h = (0, a.jsx)(eJ.a, {
                "aria-label": q,
                color: "toolbar",
                disabled: Y,
                size: "toolbar",
                uniform: !0,
                onClick: d,
                children: u
            }), v[29] = q, v[30] = Y, v[31] = d, v[32] = h) : h = v[32];
            let $ = h;
            return v[33] !== V || v[34] !== I || v[35] !== q || v[36] !== $ || v[37] !== K ? (m = K ? (0, a.jsx)(oy.a, {
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
            }) : (0, a.jsx)(ad.a, {
                content: q,
                children: $
            }), v[33] = V, v[34] = I, v[35] = q, v[36] = $, v[37] = K, v[38] = m) : m = v[38], v[39] !== H || v[40] !== b || v[41] !== Q || v[42] !== S || v[43] !== W || v[44] !== w ? (g = S ? (0, a.jsx)(oC, {
                canSave: H,
                isPending: W,
                onCancel: () => {
                    (0, eu.a)(w, op.zb, {
                        personalizationMode: (0, og.a)((0, of.k)(w, b))
                    })
                },
                onClose: () => j(!1),
                onSave: () => void Q()
            }) : null, v[39] = H, v[40] = b, v[41] = Q, v[42] = S, v[43] = W, v[44] = w, v[45] = g) : g = v[45], v[46] !== m || v[47] !== g ? (f = (0, a.jsxs)(a.Fragment, {
                children: [m, g]
            }), v[46] = m, v[47] = g, v[48] = f) : f = v[48], f
        }

        function oS() {}

        function oj(e) {
            return nD.object({
                title: nD.string()
            }).parse(e).title
        }

        function oE(e, t) {
            return e < 1 && t instanceof na.a && 412 === t.status && "conversation_precondition_failed" === t.errorCode
        }

        function oA(e) {
            return nD.object({
                conversation_id: nD.string().min(1)
            }).parse(e)
        }

        function oP(e) {
            return 412 === e.status && "conversation_precondition_failed" === e.errorCode
        }
        var oM = n("Sd4O");
        let ok = (0, p.d)(eo.a, (e, t) => {
            let {
                get: n
            } = t, a = n(oM.a, e);
            return null != a && n(D.e, a).data?.automation.plan_type === "language_learning"
        });
        var oR = n("AORd"),
            oO = n("J8FU"),
            oN = n("vpdG"),
            oG = n("OiCI"),
            oL = n("Sd8U"),
            oB = n("FNgK"),
            oz = n("nD1x");

        function oF(e) {
            let t, n, a = (0, r.c)(6),
                {
                    conversationId: s,
                    shouldBlockExternalEgress: o,
                    widgets: i
                } = e,
                l = (0, p.y)(oL.a);
            return a[0] !== s || a[1] !== l || a[2] !== o || a[3] !== i ? (t = () => {
                let e = new Map(i.map(e => [(0, aF.e)(s, e.messageId), e]));
                return l.watch(t => {
                    let {
                        get: n
                    } = t, a = n(oG.b), r = n(N.k);
                    for (let t of n(aR.k).keys()) {
                        let i = e.get(t);
                        if (null == i) continue;
                        let c = !0 === i.metadata.is_widget_closed || n(oz.a, {
                                accountId: a,
                                userId: r,
                                conversationId: s,
                                messageId: i.messageId
                            }),
                            d = "hidden" === i.sessionPresentation,
                            u = "tombstone" === i.sessionPresentation,
                            h = i.replacementMessageId;
                        if (o || c || !d && !u || null == h || n(oz.a, {
                                accountId: a,
                                userId: r,
                                conversationId: s,
                                messageId: h
                            }) || (0, oB.b)(l, t, (0, aF.e)(s, h)), c || d) {
                            (0, aR.z)(l, t);
                            continue
                        }
                        let p = l.get(aR.k).get(t),
                            m = p?.content.mcpAppHostAdapter;
                        null != p && null != m && (m.isTombstone !== u && (0, aR.y)(l, {
                            mcpAppId: t,
                            hostedInThreadScrollLayout: p.hostedInThreadScrollLayout,
                            inlineFrameContainer: p.inlineFrameContainer,
                            ...p.content,
                            mcpAppHostAdapter: {
                                ...m,
                                isTombstone: u
                            }
                        }), u && null != p.sessionId && (0, aR.D)(l, p.sessionId, {
                            displayMode: "inline"
                        }))
                    }
                })
            }, n = [s, l, o, i], a[0] = s, a[1] = l, a[2] = o, a[3] = i, a[4] = t, a[5] = n) : (t = a[4], n = a[5]), (0, y.useLayoutEffect)(t, n), null
        }
        var oD = n("JVSG"),
            oW = {
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
            oH = n("dNAN");
        let oq = (0, p.v)(eo.a, e => null);

        function oU() {
            let e, t, n, s, o, i, l, c, d, u, h, m, g, f, v, b = (0, r.c)(40),
                x = (0, _.Y)(),
                C = (0, y.useContext)(tO.a);
            b[0] === Symbol.for("react.memo_cache_sentinel") ? (e = {
                name: "chatgpt.conversations"
            }, b[0] = e) : e = b[0];
            let w = (0, p.x)(S.a, e),
                T = (0, p.z)(L.a),
                j = (0, _.$)() ?? 0,
                {
                    conversationId: E
                } = (0, _.ab)(),
                {
                    search: A,
                    state: P
                } = (0, _.W)(),
                M = (0, p.x)(nP.a, E ?? null),
                k = (0, p.x)(null == E || eT.d, M ?? E ?? ""),
                R = P?.archivedConversationPreview === !0;
            b[1] !== A ? (t = (0, ov.h)(A), b[1] = A, b[2] = t) : t = b[2];
            let O = t;
            b[3] !== R || b[4] !== O || b[5] !== E ? (n = null == E || (0, eN.e)(E) || O || R ? null : E, b[3] = R, b[4] = O, b[5] = E, b[6] = n) : n = b[6];
            let {
                data: N
            } = (0, p.x)(n8.chatGptConversationQueryById$, n);
            if (null == E) {
                let e;
                return b[7] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(_.k, {
                    to: "/",
                    replace: !0
                }), b[7] = e) : e = b[7], e
            }
            b[8] !== M || b[9] !== E ? (s = M ?? (0, eN.d)(E), b[8] = M, b[9] = E, b[10] = s) : s = b[10];
            let G = s,
                B = w.isCapable && !T && !k && (N?.conversation_origin === "tpp" || N?.conversation_origin === "flora");
            b[11] !== x ? (o = e => (x((0, ov.c)(e)), !0), b[11] = x, b[12] = o) : o = b[12];
            let z = o;
            b[13] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(I.a, {}), l = (0, a.jsx)(tf.a.Surface, {}), b[13] = i, b[14] = l) : (i = b[13], l = b[14]), b[15] !== R ? (c = null, b[15] = R, b[16] = c) : c = b[16], b[17] !== G || b[18] !== R || b[19] !== O ? (d = O || R ? null : (0, a.jsx)(nz.a, {
                conversationId: G
            }), b[17] = G, b[18] = R, b[19] = O, b[20] = d) : d = b[20];
            let F = C ?? (B ? z : null),
                D = `${G}:${O}`;
            b[21] === Symbol.for("react.memo_cache_sentinel") ? (u = void 0, b[21] = u) : u = b[21], b[22] !== G || b[23] !== R || b[24] !== O || b[25] !== D || b[26] !== j ? (h = (0, a.jsx)(oV, {
                conversationId: G,
                viewActivation: j,
                isArchivedPreview: R,
                isReadOnlyPreview: !1,
                banner: u,
                isTemporaryChat: O,
                sharedConversationId: null
            }, D), b[22] = G, b[23] = R, b[24] = O, b[25] = D, b[26] = j, b[27] = h) : h = b[27], b[28] !== h || b[29] !== F ? (m = (0, a.jsx)(tO.a, {
                value: F,
                children: h
            }), b[28] = h, b[29] = F, b[30] = m) : m = b[30], b[31] !== m || b[32] !== c || b[33] !== d ? (g = (0, a.jsxs)(a.Fragment, {
                children: [i, l, c, d, m]
            }), b[31] = m, b[32] = c, b[33] = d, b[34] = g) : g = b[34];
            let W = g;
            return b[35] !== W ? (f = W, b[35] = W, b[36] = f) : f = b[36], b[37] !== G || b[38] !== f ? (v = (0, a.jsx)(aP.a, {
                conversationId: G,
                children: f
            }), b[37] = G, b[38] = f, b[39] = v) : v = b[39], v
        }

        function oK() {
            let e, t, n, s = (0, r.c)(7),
                {
                    sharedConversationId: o
                } = (0, _.ab)();
            if (null == o) {
                let e;
                return s[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(_.k, {
                    to: "/",
                    replace: !0
                }), s[0] = e) : e = s[0], e
            }
            s[1] !== o ? (e = (0, eN.d)(o), s[1] = o, s[2] = e) : e = s[2];
            let i = e;
            return s[3] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(tf.a.Surface, {}), s[3] = t) : t = s[3], s[4] !== i || s[5] !== o ? (n = (0, a.jsxs)(a.Fragment, {
                children: [t, (0, a.jsx)(oV, {
                    conversationId: i,
                    isTemporaryChat: !1,
                    sharedConversationId: o
                }, o)]
            }), s[4] = i, s[5] = o, s[6] = n) : n = s[6], n
        }

        function oV(e) {
            let t, n, i, l, c, d, u, b, C, I, S, k, R, B, D, W, H, q, U, K, V, Q, Y, Z, en, ea, es, eo, el, ec, ed, eh, ep, em, eg, ef, ev, ey, eb, ex, eC, ew, eI, ej, eE, eA, eP, eM, ek, eR, eO, eG, eL, eB, ez, eF, eD, eW, eH, eq, eU, eK, eJ, eX, e0, e1, e2, e3, e4, e6, e5, e8, e9, tn, ta, tr, ts, to, ti, tl, td, tm, tg, tf, tv, ty, tb, tx, tI = (0, r.c)(687),
                {
                    conversationId: tE,
                    viewActivation: tA,
                    isArchivedPreview: tP,
                    isInlinePreview: tM,
                    hideModelPicker: tk,
                    disableAutoFocus: tO,
                    hideInitialUserMessage: tU,
                    transcriptPresentation: tV,
                    scrollOrigin: tJ,
                    isReadOnlyPreview: t2,
                    onSubmitAccepted: t8,
                    isTemporaryChat: nG,
                    sharedConversationId: nB,
                    sharedPostContinuation: nz,
                    requiredSystemHints: nD,
                    routePattern: nW,
                    composerLeadingContent: nH,
                    header: nq,
                    banner: nU,
                    onRetryMissingConversation: nK,
                    sharedProjectConversation: nV,
                    workspace: nQ
                } = e,
                nY = void 0 === tA ? 0 : tA,
                n$ = void 0 !== tP && tP,
                nZ = void 0 !== tM && tM,
                nJ = (0, p.y)(F.a),
                nX = (0, y.useContext)(O.a),
                n0 = (0, p.x)(eS.e, nX),
                n1 = (0, p.z)(!!(void 0 !== nz && nz && null != n0 && (0, eS.b)(n0) && (n0.web_image_attachments?.length ?? 0) > 0) && L.a);
            tI[0] !== nX || tI[1] !== tE ? (t = {
                auth: nX,
                conversationId: tE
            }, tI[0] = nX, tI[1] = tE, tI[2] = t) : t = tI[2];
            let n2 = (0, p.x)(null != nX && !nX.isLoading && null === nX.authMethod && eS.g, t),
                {
                    conversationId: n3
                } = (0, _.ab)();
            tI[3] !== tE || tI[4] !== nZ || tI[5] !== n3 || tI[6] !== nJ || tI[7] !== nQ ? (n = () => (0, eN.e)(nZ || null != nQ || null == nJ.get(z.j, tE) ? tE : n3 ?? ""), tI[3] = tE, tI[4] = nZ, tI[5] = n3, tI[6] = nJ, tI[7] = nQ, tI[8] = n) : n = tI[8];
            let [n4, n9] = (0, y.useState)(n);
            tI[9] !== n4 || tI[10] !== tE ? (i = () => n4 ? tE : null, tI[9] = n4, tI[10] = tE, tI[11] = i) : i = tI[11];
            let [at] = (0, y.useState)(i), an = null != nB || null != n0 && !n1;
            tI[12] !== tE || tI[13] !== n$ || tI[14] !== nZ || tI[15] !== an || tI[16] !== nJ ? (c = () => {
                if (!an && !n$ && !nZ) return function(e, t) {
                    let n = e.get(nP.a, t) ?? t,
                        a = e.get(ee.b, t),
                        r = e.get(nO, n),
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
                        i = e.get(np.i),
                        l = o.observedTurn,
                        c = null;

                    function d(t) {
                        for (let n of t.toReversed())
                            if (!o.initialCreationMessageIds.has(n.messageId) && (0, n_.openSpacePageSidePanelTab)(e, n.pageId, {
                                    title: n.title
                                }).opened) {
                                o.openedCreatedPage = !0;
                                break
                            }
                    }
                    let u = e.watch(n => {
                        let {
                            get: a
                        } = n, r = a(z._, t), s = a(np.i), u = a(z.ab, t);
                        if ((0, z.zb)(r)) {
                            l = !1;
                            let e = a(ee.b, t),
                                n = a(z.bb, t),
                                r = !o.observedTurn || o.attemptId !== e;
                            if (o.attemptId = e, r) {
                                let e = c;
                                c = null, e?.abort(), o.observedTurn = !0, o.activeRequestId = n, o.dismissed = u, o.openedCreatedPage = !1
                            } else o.activeRequestId = n ?? o.activeRequestId, o.dismissed = o.dismissed || u || i && !s;
                            i = s;
                            let h = !u && !o.dismissed && !s && !o.openedCreatedPage && !a(F.j) && !a(z.C, t) && !a(eT.d, t),
                                p = [];
                            if ((r || h) && (p = a(z.P, t) ?? []), r) {
                                o.initialCreationMessageIds = new Set(p.map(e => e.messageId));
                                return
                            }
                            h && d(p);
                            return
                        }
                        if (!o.observedTurn) return;
                        let h = a(z.v, t);
                        if ("idle" !== r || u || null != h && "completed" !== h.result || null != e.get(z.C, t) || e.get(F.j) || e.get(eT.d, t)) {
                            o.observedTurn = !1;
                            return
                        }
                        if (l) {
                            if (o.dismissed || s || o.openedCreatedPage || a(ee.b, t) !== o.attemptId) {
                                o.observedTurn = !1;
                                return
                            }
                            if (h?.result !== "completed") return;
                            d(a(z.P, t) ?? []), o.observedTurn = !o.openedCreatedPage;
                            return
                        }
                        if (o.observedTurn = !1, h?.result !== "completed" || h.requestId !== o.activeRequestId) return;
                        let p = e.get(z.L, t);
                        if (null == p) return;
                        let m = (0, g.b)({
                                mapping: p,
                                current_node: e.get(z.B, t)
                            }),
                            f = m.findLast(nR.b);
                        if (f?.status !== "finished_successfully") return;
                        let v = [...(0, nM.e)(m).outputs, ...m.flatMap(e => (0, nM.c)(e).map(e => e.file))],
                            y = e.get(nj.a, t)?.at(-1);
                        if (y?.turn.status !== "complete") return;
                        let b = [...(0, ng.b)(m), ...y.turn.items.flatMap(e => "chatgpt-reasoning-group" === e.type ? e.items : [e]).filter(e => "mcp-tool-call" === e.type)];
                        if (!((0, nm.a)(e, b, !o.dismissed) || !o.dismissed && !o.openedCreatedPage && (0, nw.a)(e, b)) && !o.dismissed && !s && !o.openedCreatedPage) {
                            for (let t of (0, nC.c)((0, g.e)(f)).toReversed())
                                if ((0, n_.openSpacePageSidePanelTab)(e, t.id, {
                                        blockId: t.blockId
                                    }).opened) return;
                            if ((0, nk.canOpenChatGptFilePreview)({
                                    browserPreview: !0
                                })) {
                                for (let n of y.turn.items)
                                    if ("assistant-message" === n.type && n.completed)
                                        for (let [a, r] of n.contentReferences.entries()) {
                                            let s = (0, nE.a)(r),
                                                o = null == s ? null : (0, nf.a)(s),
                                                i = v.find(e => null != e.fileId && e.fileId === (r.file_id ?? r.id) || null != e.libraryFileId && e.libraryFileId === r.library_file_id);
                                            if ("file" !== r.type || !(0, nh.a)(r) || null == s || null == o || !(0, nf.f)(o) || null == i && null == (0, nA.b)(r.sandbox_path) && !(0, nA.b)(r.matched_text)?.includes("sandbox:") || i?.sizeBytes != null && i.sizeBytes > nb.a) continue;
                                            let l = n.contentReferenceMessageIds?.[a] ?? n.messageId,
                                                d = (0, nS.b)(r, {
                                                    fileName: s,
                                                    messageId: l
                                                });
                                            if (null == d) continue;
                                            if (e.get(tX.f)?.getExperiment("1965446322").get("enable_artifact_preview_auto_open", !1) !== !0) return;
                                            let u = e.get(z.j, t) ?? t,
                                                h = `${l??"message"}:${String(a)}:${s}`,
                                                p = `chatgpt-file:${u}:${h}`,
                                                g = {
                                                    turnId: y.id,
                                                    inputMessageId: m.find(e => "user" === e.author.role)?.id ?? null,
                                                    messageId: l ?? null
                                                },
                                                f = new AbortController,
                                                b = (0, nk.openChatGptFile)(e, {
                                                    conversationId: u,
                                                    fileName: s,
                                                    gizmoId: e.get(z.R, t),
                                                    sharedConversationId: e.get(z.Y, t),
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
                                                        f.signal.aborted || t?.tabId !== p || t.tabType.kind !== nv.a || ((0, eu.a)(e, nu.CodexFileOpened, {
                                                            threadId: u,
                                                            turnId: g.turnId,
                                                            inputMessageId: g.inputMessageId ?? void 0,
                                                            messageId: g.messageId ?? void 0,
                                                            fileExtension: (0, ny.c)(s) ?? void 0,
                                                            openSource: "auto_open",
                                                            openDestination: "codex_preview"
                                                        }), (0, eu.a)(e, nu.CodexWorkspaceFilePreviewAttempted, (0, nx.a)({
                                                            modifiedClick: !1,
                                                            openedSidePanelTarget: "artifact",
                                                            openSource: "auto_open",
                                                            originatingTurn: g,
                                                            path: s,
                                                            threadId: u,
                                                            windowType: "browser"
                                                        })), (0, nI.b)(e, p, "auto_open"))
                                                    },
                                                    onClose: () => f.abort()
                                                });
                                            c = f;
                                            let x = e.watch(e => {
                                                let {
                                                    get: n
                                                } = e;
                                                (n(np.i) && n(M.j.activeTab$)?.tabId !== p || n(eT.d, t)) && f.abort()
                                            });
                                            b.catch(e => {
                                                f.signal.aborted || nT.a.debug("Automatic ChatGPT artifact preview could not open", {
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
                        u(), c?.abort(), null != o.attemptId && e.set(nO, n, {
                            ...o,
                            attemptId: o.attemptId
                        })
                    }
                }(nJ, tE)
            }, l = [tE, n$, nZ, an, nJ], tI[12] = tE, tI[13] = n$, tI[14] = nZ, tI[15] = an, tI[16] = nJ, tI[17] = l, tI[18] = c) : (l = tI[17], c = tI[18]), (0, y.useEffect)(c, l);
            let aa = (0, p.x)(a0.a, tE),
                ar = an ? null : aa;
            tI[19] !== nB ? (d = () => null == nB ? null : (0, eN.b)(), tI[19] = nB, tI[20] = d) : d = tI[20];
            let [as] = (0, y.useState)(d), ao = as ?? tE;
            tI[21] !== ao ? (u = (0, tQ.o)({
                routeKind: "chatgpt-thread",
                conversationId: ao
            }), tI[21] = ao, tI[22] = u) : u = tI[22];
            let ai = null != (0, p.x)(tN.c, u);
            tI[23] !== ao || tI[24] !== nD || tI[25] !== nJ ? (b = () => {
                if (null != nD && 0 !== nD.length) return (0, tt.b)(nJ, ao, nD)
            }, C = [ao, nD, nJ], tI[23] = ao, tI[24] = nD, tI[25] = nJ, tI[26] = b, tI[27] = C) : (b = tI[26], C = tI[27]), (0, y.useEffect)(b, C);
            let al = (0, y.useRef)(null),
                [ac, ad] = (0, y.useState)(null),
                [au, ah] = (0, y.useState)(null),
                [ap, ag] = (0, y.useState)(null),
                af = au?.activation === nY ? au.messageId : null,
                ab = ap === nY,
                ax = (0, y.useRef)(null);
            tI[28] === Symbol.for("react.memo_cache_sentinel") ? (I = () => {
                let e = new AbortController;
                return ax.current = e, () => e.abort()
            }, tI[28] = I) : I = tI[28], tI[29] !== nY ? (S = [nY], tI[29] = nY, tI[30] = S) : S = tI[30], (0, y.useLayoutEffect)(I, S);
            let aC = (0, x.a)(),
                a_ = (0, _.Y)(),
                aI = (0, t7.c)(),
                aS = (0, p.x)(z.j, tE);
            tI[31] !== nJ ? (k = e => {
                (0, nN.c)(nJ, e)
            }, tI[31] = nJ, tI[32] = k) : k = tI[32];
            let aj = (0, y.useEffectEvent)(k);
            tI[33] !== aS || tI[34] !== aj ? (R = () => () => {
                null != aS && aj(aS)
            }, tI[33] = aS, tI[34] = aj, tI[35] = R) : R = tI[35], tI[36] !== aS ? (B = [aS], tI[36] = aS, tI[37] = B) : B = tI[37], (0, y.useEffect)(R, B);
            let aE = (0, p.x)(oh.b, tE),
                aA = (0, p.x)(z.L, tE),
                aP = (0, p.x)(n8.chatGptConversationQueryById$, an || nG && null != aA ? null : aS);
            (0, p.x)(an ? null : ae.a, aS);
            let aM = (0, p.x)(!n2 && !n1 && eT.d, tE),
                aR = aS ?? tE,
                aO = (0, p.x)(z.B, tE),
                aN = (0, p.x)(z.x, tE),
                aG = (0, p.x)(z.R, tE),
                aL = (0, p.x)(z.C, tE),
                aB = (0, p.x)(z.M, tE),
                az = (0, p.x)(z._, tE),
                aD = (0, p.x)(z.V, tE),
                aW = (0, p.x)(z.X, tE),
                aH = (0, p.x)(ay.a, tE),
                aq = (0, p.x)(z.D, tE),
                aU = (0, p.x)(z.cb, tE),
                aK = (0, p.x)(z.db, tE),
                aV = (0, p.x)(n8.n, nB),
                aQ = (0, y.useRef)(null),
                aY = aV.isSuccess && null != aV.data ? nB : null;
            tI[38] !== nJ ? (D = e => {
                (0, eu.a)(nJ, s.h, {
                    actor: "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER",
                    action: "CHATGPT_SHARE_FLOW_ACTION_SHARED_CONTENT_VIEWED",
                    contentType: "CHATGPT_SHARE_FLOW_CONTENT_TYPE_SHARED_CONVERSATION",
                    availability: "CHATGPT_SHARE_FLOW_AVAILABILITY_COMPLETE",
                    shareId: e
                })
            }, tI[38] = nJ, tI[39] = D) : D = tI[39];
            let aJ = (0, y.useEffectEvent)(D);
            tI[40] !== aY || tI[41] !== aJ ? (W = () => {
                null != aY && aQ.current !== aY && (aQ.current = aY, aJ(aY))
            }, tI[40] = aY, tI[41] = aJ, tI[42] = W) : W = tI[42], tI[43] !== aY ? (H = [aY], tI[43] = aY, tI[44] = H) : H = tI[44], (0, y.useEffect)(W, H);
            let aX = (0, p.x)(e7.o, tE),
                a7 = (0, p.x)(e7.p, tE),
                re = (0, p.x)(e7.m, tE),
                rt = (0, p.x)(e7.q, tE),
                rn = (0, p.x)(e7.n, tE),
                ra = (0, p.x)(e7.i, tE),
                rr = (0, p.x)(z.ab, tE),
                rs = (0, p.x)(e7.z, tE);
            tI[45] !== az ? (q = (0, z.zb)(az), tI[45] = az, tI[46] = q) : q = tI[46];
            let ro = q,
                ri = (0, p.x)(a2, tE),
                rl = (0, p.z)(G.t),
                ru = (0, p.z)(G.q),
                rI = (0, p.z)(G.s),
                rT = (0, p.z)(G.l),
                rS = (0, p.z)(G.m),
                rj = (0, p.z)(tz.pagesEnabled$);
            tI[47] === Symbol.for("react.memo_cache_sentinel") ? (U = (0, tR.a)(), tI[47] = U) : U = tI[47];
            let rE = (0, ei.h)(U);
            tI[48] === Symbol.for("react.memo_cache_sentinel") ? (K = (0, tR.b)(), tI[48] = K) : K = tI[48];
            let rA = (0, ei.h)(K),
                rP = null != aA,
                rk = (0, p.z)(sF.f),
                rR = an ? aV : aP;
            n4 && null != rR.data && n9(!1);
            let rO = n4 && rP && null == rR.data,
                rL = rR.isLoading || !rO && rR.isError;
            tI[49] !== ac || tI[50] !== ao || tI[51] !== rL || tI[52] !== an || tI[53] !== nG || tI[54] !== nJ ? (V = (e, t, n, a) => {
                !(e || nJ.get(tK.a)) && ((0, e7.b)(nJ, ao, t, void 0, n, a), ac?.focus(), an || rL || (0, n5.f)(nJ, ao, {
                    isTemporaryChat: nG
                }))
            }, tI[49] = ac, tI[50] = ao, tI[51] = rL, tI[52] = an, tI[53] = nG, tI[54] = nJ, tI[55] = V) : V = tI[55];
            let rB = V,
                rF = null == n0 ? null : (0, s9.a)(n0, tE),
                rW = null == rF ? void 0 : (0, sS.a)(rF),
                rH = rF ?? rR.data,
                rq = aq ? aU : rH?.title,
                rU = (0, p.z)(N.h),
                rK = (0, p.z)(N.g),
                rV = "chatgpt-thread" === nJ.value.routeKind && nJ.value.workSideChat?.conversationId === tE,
                rQ = rH?.conversation_origin ?? aN ?? (null != nQ || rV ? "tpp" : null),
                rY = "tpp" === rQ,
                r$ = rY && "denied" === rl.status && "go-plan" === rl.reason,
                rZ = (0, p.z)(t0.d),
                rJ = (0, _.W)(),
                rX = rJ.state;
            (0, p.z)(t$.b);
            let r0 = (0, p.x)(tX.d, "3901104270") && rX?.openGoalPlan === !0,
                r1 = (0, y.useContext)(P.c),
                r2 = (0, t5.a)(),
                r3 = r1?.hasPageSurface === !0,
                r4 = "tpp" === rQ || "flora" === rQ,
                r6 = (0, ei.h)("2871250183"),
                r5 = (0, p.z)(!!r4 && G.u),
                r8 = void 0 !== t2 && t2 || r5,
                r9 = null == rZ || rZ.isFullWidth ? void 0 : rZ.width ?? 420,
                se = !0 === (0, p.z)(r4 ? null : ns.d),
                st = (0, p.z)(r4 ? tq.b : tq.a),
                sn = !r4 && st,
                sa = !rA || rS && !r4,
                sr = !an && rS && !r4,
                ss = sr && rT,
                so = an && rH?.is_read_only === !0 || nV?.is_read_only === !0;
            tI[56] !== tE || tI[57] !== an || tI[58] !== nJ ? (Q = () => null, tI[56] = tE, tI[57] = an, tI[58] = nJ, tI[59] = Q) : Q = tI[59];
            let [si] = (0, y.useState)(Q), sc = rH?.gizmo_id ?? aG ?? si?.gizmoId ?? null, su = an || null == sc || (0, te.a)(sc) ? null : sc, sh = (0, p.x)(oq, ao), sp = (0, am.d)({
                conversation: rH,
                conversationId: tE,
                conversationTitle: aH,
                pathname: rJ.pathname,
                sharedConversationId: nB,
                sharedPost: n0
            }), sv = !rI && null == rH && null == si, sy = null != aS && !aM && !sv && (rI || ru), sb = null;
            an || (sb = null != rH ? (0, r7.B)(rH) : (0, te.a)(aG) ? aG : si?.projectId ?? null);
            let sC = (0, p.x)(nl.c, an ? null : tE),
                s_ = an || r4 || null != sb || sC || null == sh ? su : sh.id,
                sj = (0, p.x)(sA.d, {
                    gizmoId: s_,
                    conversationId: ao,
                    visitKey: rJ.pathname
                }),
                sP = r3 || r4 || null != sb || null != su || sC || nG,
                {
                    data: sM
                } = (0, o.a)({
                    enabled: null != sb,
                    queryFn: () => {
                        if (null == sb) throw Error("Expected a ChatGPT project id");
                        return (0, eQ.c)(sb)
                    },
                    queryKey: (0, r7.E)(sb ?? ""),
                    staleTime: e_.b.ONE_MINUTE
                }),
                sk = null != sb && (sM?.gizmo.share_recipient !== "private" || (sM?.gizmo.sharing?.subjects?.length ?? 0) > 0),
                sR = rH?.context_scopes?.includes("HEALTH") === !0 || sM?.gizmo.gizmo_snorlax_type === "potion",
                sO = (0, sN.a)(rH?.context_scopes, {
                    projectType: sM?.gizmo.gizmo_snorlax_type,
                    projectId: sb,
                    lockedProjectId: rk?.projectId
                }),
                sG = aM || sk || sR || sO;
            tI[60] !== sM?.gizmo.display.name ? (Y = sM?.gizmo.display.name.trim() || null, tI[60] = sM?.gizmo.display.name, tI[61] = Y) : Y = tI[61];
            let sB = Y,
                sD = sM?.gizmo.display.theme,
                sW = sM?.gizmo.display.emoji;
            tI[62] !== sM ? (Z = "shared" === (0, a9.b)(sM) ? (0, a.jsx)(tC.b, {
                icon: {
                    assets: {
                        16: oW,
                        20: oH.a
                    }
                }
            }) : void 0, tI[62] = sM, tI[63] = Z) : Z = tI[63], tI[64] !== sD || tI[65] !== sW || tI[66] !== Z ? (en = (0, a.jsx)(tW.a, {
                className: "icon-leading",
                size: "leading",
                color: sD,
                icon: sW,
                sharedIcon: Z
            }), tI[64] = sD, tI[65] = sW, tI[66] = Z, tI[67] = en) : en = tI[67];
            let sH = en,
                sq = (0, p.x)(z.i, tE),
                sU = sq?.metadata ?? rH?.context_truncation_continuation,
                sK = an || nG || null != nV || null == rU || rH?.owner?.user_id == null || null == sb || rH.owner.user_id === (rK ? rU.split("__")[0] : rU) ? null : (0, sm.d)(sb, rH.conversation_id, rH.owner.user_id),
                sY = (0, p.x)(an || n$ || r8 ? null : sQ.c, tE),
                s$ = sY?.isReviewing === !0,
                sZ = null == sY ? aA : sY.conversation.mapping,
                sJ = null == sY ? aO : sY.conversation.current_node,
                sX = null == aA ? rH : null,
                s0 = (0, ei.k)();
            tI[68] !== s0 ? (ea = () => (0, ei.f)(s0, "2347981323").get("enabled", !1), tI[68] = s0, tI[69] = ea) : ea = tI[69];
            let s1 = ea,
                s2 = (0, p.z)(nn.h),
                s3 = (0, p.z)(nt.a),
                s4 = (0, p.x)(ne.a, tE);
            tI[70] === Symbol.for("react.memo_cache_sentinel") ? (es = (0, n7.a)(), tI[70] = es) : es = tI[70];
            let s6 = es;
            tI[71] === Symbol.for("react.memo_cache_sentinel") ? (eo = new WeakMap, tI[71] = eo) : eo = tI[71];
            let s5 = eo;
            tI[72] !== st || tI[73] !== sn || tI[74] !== sU || tI[75] !== rQ || tI[76] !== sJ || tI[77] !== sZ || tI[78] !== r6 || tI[79] !== s1 || tI[80] !== sX || tI[81] !== n$ || tI[82] !== an || tI[83] !== ro || tI[84] !== s4 || tI[85] !== r4 || tI[86] !== aB || tI[87] !== re || tI[88] !== rn || tI[89] !== aX || tI[90] !== a7 || tI[91] !== rt || tI[92] !== s$ || tI[93] !== nJ.get || tI[94] !== sY?.isEntering || tI[95] !== aE || tI[96] !== az || tI[97] !== s3 || tI[98] !== s2 ? (el = () => s6({
                conversation: sX,
                contextContinuation: sU,
                clinicalSearchEnabled: sn,
                clinicalCitationsEnabled: st,
                enableCloudBrowserActivity: r6,
                conversationOrigin: rQ,
                enableVoiceImageLoadingFix: s1,
                voiceImageSessionId: s2,
                voiceImageGenerationSpawnIds: !s4 || an || n$ || s$ ? void 0 : s3,
                enableImageGenerationLoadingState: !an && !n$ && !s$ && "error" !== az,
                getRenderTelemetry: e => (0, oO.c)(nJ.get, e),
                isWorkConversation: r4,
                isStreaming: !an && !n$ && !s$ && ro,
                mode: "conversation",
                mcpResponseCache: s5,
                moderationDisclaimersByMessageId: aB,
                streamingOrders: aE,
                pendingSubmission: null == aX || an || s$ || sY?.isEntering ? null : {
                    attachments: re,
                    commentAttachments: rn,
                    prompt: aX,
                    renderMarkdown: a7,
                    selectedTextAttachments: rt
                },
                threadCurrentNode: sJ,
                threadMapping: sZ
            }), tI[72] = st, tI[73] = sn, tI[74] = sU, tI[75] = rQ, tI[76] = sJ, tI[77] = sZ, tI[78] = r6, tI[79] = s1, tI[80] = sX, tI[81] = n$, tI[82] = an, tI[83] = ro, tI[84] = s4, tI[85] = r4, tI[86] = aB, tI[87] = re, tI[88] = rn, tI[89] = aX, tI[90] = a7, tI[91] = rt, tI[92] = s$, tI[93] = nJ.get, tI[94] = sY?.isEntering, tI[95] = aE, tI[96] = az, tI[97] = s3, tI[98] = s2, tI[99] = el) : el = tI[99], sY?.isEntering, tI[100] !== el ? (ec = el(), tI[100] = el, tI[101] = ec) : ec = tI[101];
            let {
                isConversationEmpty: s7,
                renderedConversation: ot,
                renderedTurns: on,
                showPendingLoadingMessage: oa
            } = ec;
            tI[102] !== nZ || tI[103] !== r4 || tI[104] !== ot || tI[105] !== nJ ? (ed = () => {
                if (!nZ && r4) return nJ.set(oD.b, ot), () => {
                    nJ.get(oD.b) === ot && nJ.set(oD.b, null)
                }
            }, eh = [nZ, r4, ot, nJ], tI[102] = nZ, tI[103] = r4, tI[104] = ot, tI[105] = nJ, tI[106] = ed, tI[107] = eh) : (ed = tI[106], eh = tI[107]), (0, y.useEffect)(ed, eh);
            let or = (0, p.x)(nc.g, tE),
                os = oa && null == or,
                oo = !r4 && !an && !nZ && !n$,
                oi = (0, p.x)(sn || nZ || an ? null : X.a, tE),
                oc = (oi?.length ?? 0) > 0,
                od = (0, p.x)(oo ? ee.b : null, tE),
                ou = JSON.stringify([tE, nY]),
                op = (0, p.x)(an || nZ ? null : ok, tE),
                [om, og] = (0, y.useState)(null),
                of = function(e, t) {
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
                    let d = null == n ? [] : (0, g.b)(n, eY.k),
                        u = null == e || e.visitKey !== c,
                        h = d.find(eY.k)?.id ?? (u || i ? null : e.userMessageId),
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
                }(om, {
                    completionAttemptId: od,
                    allowAutoOpen: !(0, tj.a)("(width < 768px)"),
                    suppressAutoOpen: (op ?? !1) || r0,
                    conversation: oo && (rO || !rL) ? ot : null,
                    isTurnActive: ro,
                    hasGoal: oc,
                    isPendingUserTurn: ra && null != aX && !ro,
                    visitKey: ou
                });
            of !== om && og(of);
            let oy = null == nQ && !op && !sn && !nZ && !an && (rY || oo) && !n$,
                ob = oy && ot?.mapping === aA && ot?.current_node === aO,
                ox = (0, p.x)(ob ? z.p : null, tE),
                oC = ot?.mapping,
                o_ = ot?.current_node;
            tI[108] !== oC || tI[109] !== o_ ? (ep = h()(() => {
                let e = null == oC ? [] : (0, g.a)({
                    mapping: oC,
                    current_node: o_
                });
                return {
                    messages: e,
                    resources: (0, nM.e)(e)
                }
            }), tI[108] = oC, tI[109] = o_, tI[110] = ep) : ep = tI[110];
            let oI = ep;
            tI[111] !== oo || tI[112] !== ra || tI[113] !== oy || tI[114] !== ro || tI[115] !== rj || tI[116] !== re || tI[117] !== oI || tI[118] !== on || tI[119] !== ox ? (em = oy ? h()(() => (function(e) {
                var t;
                let n, a, {
                        automationReferences: r,
                        includePages: s = !1,
                        includeSources: o = !0,
                        messages: i,
                        pendingAttachments: l = [],
                        resources: c = (0, nM.e)(i),
                        turns: d,
                        isTurnActive: u = d.at(-1)?.turn.status === "in_progress"
                    } = e,
                    h = [...c.inputs],
                    p = o ? (0, rb.a)(i, d) : [],
                    m = new Map,
                    f = new Map,
                    v = (t = i, -1 !== (n = rh()(t, e => e?.recipient === "turn_plan.update_turn_plan" && (0, r_.b)(e)?.item?.type === "todo-list")) && t.slice(n + 1).some(e => "assistant" === e.author.role && "final" === e.channel && "all" === e.recipient && "finished_successfully" === e.status)),
                    y = [],
                    b = new Map(i.map(e => [(0, g.g)(e), e])),
                    x = rh()(i, e => "user" === e.author.role),
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
                            t?.author.role === "assistant" && ("finished_successfully" === t.status || "finished_partial_completion" === t.status) && (0, ry.j)(t.metadata) && y.push({
                                messageId: n,
                                turnId: e,
                                deletedMemoryCitationUuids: (0, ry.c)(t.metadata)
                            })
                        }
                    for (let n of rw(t.items)) {
                        if (s && "mcp-tool-call" === n.type) {
                            let e = (0, rf.b)(n);
                            if (null != e && (e.activities.includes("created") || e.activities.includes("updated"))) {
                                let t = (0, rp.d)(e.url);
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
                            for (let e of (0, nC.c)(n.content)) f.has(e.id) || f.set(e.id, {
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
                let _ = (0, rm.b)(d.flatMap(e => {
                    let {
                        turn: t
                    } = e;
                    return rw(t.items).filter(e => "mcp-tool-call" === e.type)
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
                    automationIds: (0, rv.b)(i, r ?? void 0),
                    browserScreenshots: (0, rx.c)(i),
                    inputs: h,
                    sourceTurns: y,
                    outputs: a,
                    progressSteps: C,
                    isPlanSummaryUpdating: u && i.slice(x + 1).some(e => "assistant" === e.author.role && rv.a.test(e.recipient ?? "") || "tool" === e.author.role && rv.a.test(e.author.name ?? "")),
                    planSummaryRefreshKey: `${d.at(-1)?.id??""}:${u}`,
                    sources: o ? [...Array.from(new Map(i.filter(e => "user" === e.author.role).flatMap(e => (0, rg.a)((0, g.e)(e))).map(e => [e.projectId, e])).values(), e => ({
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
                    subagents: (0, rC.a)(i, {
                        isTurnLive: d.at(-1)?.turn.status === "in_progress"
                    })?.subagents ?? []
                }
            })({
                automationReferences: ox,
                includePages: rj,
                includeSources: !oo,
                isTurnActive: ro || ra,
                ...oI(),
                pendingAttachments: ra ? re : [],
                turns: on
            })) : null, eg = oo ? em?.() : null, tI[111] = oo, tI[112] = ra, tI[113] = oy, tI[114] = ro, tI[115] = rj, tI[116] = re, tI[117] = oI, tI[118] = on, tI[119] = ox, tI[120] = em, tI[121] = eg) : (em = tI[120], eg = tI[121]);
            let oT = eg,
                oS = oc || null != oT && (oT.outputs.length > 0 || oT.progressSteps.length > 0 || oT.automationIds.length > 0 || oT.subagents.length > 0 || !aM && oT.browserScreenshots.length > 0),
                oj = oy && (!oo || oS),
                oE = oj && null == rZ,
                oA = JSON.stringify([ou, null != rZ]),
                oP = oo ? of.isOpen : void 0,
                oM = oj && !rZ?.isFullWidth;
            tI[122] !== r9 || tI[123] !== oA || tI[124] !== oP || tI[125] !== oM ? (ef = {
                contentShiftResetKey: oA,
                controlledIsOpen: oP,
                isEnabled: oM,
                floatingPanelWidth: r9
            }, tI[122] = r9, tI[123] = oA, tI[124] = oP, tI[125] = oM, tI[126] = ef) : ef = tI[126];
            let oR = (0, t4.a)(ef),
                oN = aS ?? tE,
                oG = rY && null == aK,
                oL = aL ?? rs,
                oB = rR.isLoading && !rP,
                oz = rR.isError && !rO;
            tI[127] !== rR.error || tI[128] !== nZ ? (ev = nZ || (0, na.e)(rR.error) || !(rR.error instanceof na.a && [401, 403, 404].includes(rR.error.status)), tI[127] = rR.error, tI[128] = nZ, tI[129] = ev) : ev = tI[129];
            let oU = ev;
            tI[130] !== rR.error || tI[131] !== tE || tI[132] !== oz || tI[133] !== nZ || tI[134] !== nJ || tI[135] !== nB ? (ey = () => {
                oz && !nZ && tF.a.loadFailed(nJ, tE, nB, rR.error)
            }, eb = [rR.error, tE, oz, nZ, nJ, nB], tI[130] = rR.error, tI[131] = tE, tI[132] = oz, tI[133] = nZ, tI[134] = nJ, tI[135] = nB, tI[136] = ey, tI[137] = eb) : (ey = tI[136], eb = tI[137]), (0, y.useEffect)(ey, eb), tI[138] !== tE || tI[139] !== an || tI[140] !== aS ? (ex = null, an || (ex = aS ?? ((0, eN.e)(tE) ? null : tE)), tI[138] = tE, tI[139] = an, tI[140] = aS, tI[141] = ex) : ex = tI[141], tI[142] !== af || tI[143] !== rH || tI[144] !== rQ || tI[145] !== aC || tI[146] !== nG || tI[147] !== r4 || tI[148] !== r$ || tI[149] !== a_ || tI[150] !== ex || tI[151] !== nW || tI[152] !== nJ || tI[153] !== nY ? (eC = (e, t) => {
                let n = void 0 !== t && t;
                if (null == ex || null != af || r$) return;
                let a = ax.current?.signal;
                null == a || a.aborted || (ah({
                    messageId: e,
                    activation: nY
                }), (0, z.h)(nJ, {
                    conversationId: ex,
                    messageId: e,
                    inWorkMode: n
                }).then(e => {
                    let {
                        clientThreadId: t
                    } = e;
                    a.aborted || (n && (0, no.a)(nJ, "opened"), a_(null == nW ? (0, ov.c)(t, {
                        isTemporaryChat: nG
                    }) : (0, _.B)(nW, {
                        conversationId: t
                    })))
                }).catch(() => {
                    a.aborted || (n && (0, no.a)(nJ, "failed"), ah(null), nJ.get(er.f).danger(aC.formatMessage({
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
                                surface: (0, aw.b)(null == rQ && null == rH ? null : r4),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    }))
                }))
            }, tI[142] = af, tI[143] = rH, tI[144] = rQ, tI[145] = aC, tI[146] = nG, tI[147] = r4, tI[148] = r$, tI[149] = a_, tI[150] = ex, tI[151] = nW, tI[152] = nJ, tI[153] = nY, tI[154] = eC) : eC = tI[154];
            let oK = (0, t9.a)(eC);
            tI[155] !== rH || tI[156] !== tE || tI[157] !== rQ || tI[158] !== aC || tI[159] !== se || tI[160] !== nG || tI[161] !== r4 || tI[162] !== nJ || tI[163] !== aS ? (ew = async (e, t, n, a) => {
                if (!se) try {
                    await async function(e, t) {
                        let {
                            conversationId: n,
                            isTemporaryChat: a = !1,
                            messageId: r,
                            prompt: s,
                            renderFormat: o,
                            inlineSystemHints: i
                        } = t;
                        if (e.get(e7.i, n)) throw new aZ.a("edit_message_busy", "The chat is busy.");
                        let l = e.get(z.x, n);
                        if ("tpp" === l) throw new aZ.a("edit_message_unsupported_conversation", "Work messages cannot be edited with the Chat flow.");
                        if (!e.get(a2, n)) throw new aZ.a("edit_message_busy", "The chat is busy.");
                        let c = e.get(a$.b, {
                            conversationId: n,
                            messageId: r
                        });
                        if (null == c) throw new aZ.a("edit_message_target_unavailable", "The user message could not be edited.");
                        let {
                            selectedModel: d
                        } = c, u = s.trim(), h = (0, a$.c)(c.message, e.get, i), p = (0, a1.c)({
                            message: c.message,
                            prompt: u,
                            renderFormat: o,
                            systemHints: h,
                            inlineSystemHints: i
                        }), m = (0, f.f)(p.message.metadata), g = p.message.content, v = "multimodal_text" === g.content_type && g.parts.some(e => "string" != typeof e);
                        if (0 === u.length && 0 === m.length && !v) throw new aZ.a("edit_message_empty", "The edited message cannot be empty.");
                        if (e.get(tX.d, "3574573347")) {
                            let t = e.get(a$.a, n);
                            t?.messageId === r && t.prompt === s && ak()((0, a$.c)(c.message, e.get, t.inlineSystemHints), h) || (e.set(a$.a, n, {
                                messageId: r,
                                prompt: s,
                                isTemporaryChat: a,
                                inlineSystemHints: i
                            }), (0, n5.f)(e, n, {
                                isTemporaryChat: a
                            }))
                        }
                        let y = a3(e.get, n),
                            b = y.request.current,
                            x = () => a3(e.get, n).request.current === b && ak()(e.get(a$.b, {
                                conversationId: n,
                                messageId: r
                            }), c) && !(0, z.zb)(e.get(z._, n));
                        e.set(e7.i, n, !0);
                        try {
                            if ("flora" !== l && null != b && null == e.get(y.session$) && null == e.get(a0.a, n) && (await b.stop(), await b.closed), !x()) throw new aZ.a("edit_message_target_unavailable", "The edited message or active response changed.");
                            await (0, a1.submitChatGPTCompletion)(e, {
                                isSubmissionCurrent: x,
                                isRequestCurrent: () => e.get(z.B, n) === p.message.id,
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
                        conversationId: tE,
                        isTemporaryChat: nG,
                        messageId: e,
                        prompt: t,
                        inlineSystemHints: a,
                        renderFormat: n
                    })
                } catch (t) {
                    let e = (0, aw.c)(t);
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
                            conversationId: aS ?? void 0,
                            userFacingError: {
                                ...e,
                                surface: (0, aw.b)(null == rQ && null == rH ? null : r4),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    }), t
                }
            }, tI[155] = rH, tI[156] = tE, tI[157] = rQ, tI[158] = aC, tI[159] = se, tI[160] = nG, tI[161] = r4, tI[162] = nJ, tI[163] = aS, tI[164] = ew) : ew = tI[164];
            let oV = (0, t9.a)(ew);
            tI[165] !== ao || tI[166] !== rH || tI[167] !== tE || tI[168] !== rQ || tI[169] !== aC || tI[170] !== se || tI[171] !== nG || tI[172] !== r4 || tI[173] !== r$ || tI[174] !== a_ || tI[175] !== nK || tI[176] !== nJ || tI[177] !== aS ? (eI = async (e, t) => {
                if (!se && !r$) try {
                    let n = nJ.get(aT.d, tE);
                    if (n?.startsNewWorkConversation || null == nJ.get(z.j, tE) || (0, nd.h)(nJ.get(z.T, tE)?.metadata?.errorCode)) {
                        if (n?.message.id !== e) return;
                        let a = (0, g.e)(n.prompt),
                            r = (0, eV.i)(n.prompt.metadata, a, (0, f.e)(n.prompt.metadata), (0, v.w)(a)),
                            s = (0, eZ.a)(n.prompt, a, r),
                            o = nJ.get(e7.s, ao),
                            i = "markdown" === s.renderFormat ? s.message : a,
                            l = o.length > 0 ? o : i,
                            c = o.length > 0 ? void 0 : s.renderFormat ?? "plain";
                        if (null != nK) return void await nK(l, c);
                        if (null == nJ.get(z.j, tE) && "string" == typeof n.prompt.metadata?.model_first_landing_ref) {
                            let e = l;
                            if (null != c) {
                                let t = (0, tH.e)(l, {
                                    defaultTextKind: "plain" === c ? "literal" : "prompt",
                                    enableRichText: !0,
                                    enableFileMentions: !0
                                });
                                e = t.getPersistedText(), t.destroy()
                            }
                            let t = `chatgpt:${tE}`;
                            (0, tu.E)(t, (t, n) => n ? t : e) || (0, e7.S)(nJ, tE, e), (0, tu.e)(t);
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
                        if (r4 && !nG && (0, tc.db)(nJ, (0, tw.b)({
                                entrypoint: "home"
                            }))) return void await a_("/");
                        let d = (0, g.k)(n.prompt.metadata?.system_hints).filter(e => "search" !== e || !1 !== n.forceUseSearch);
                        !0 !== n.forceUseSearch || d.includes("search") || d.push("search");
                        let u = (0, a8.g)(nJ, d);
                        (0, e7.T)(nJ, u, t.model);
                        let h = nJ.get(z.R, tE);
                        (0, th.m)(nJ, r4 ? "work" : "chat"), await a_({
                            pathname: "/",
                            search: (0, ov.e)("", nG)
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
                    await (0, aT.g)(nJ, {
                        conversationId: tE,
                        isTemporaryChat: nG,
                        messageId: e,
                        retry: r4 && "error_retry" === t.source && null == t.model.thinkingEffort ? {
                            ...t,
                            model: nJ.get(e7.t, tE)
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
                            conversationId: aS ?? void 0,
                            userFacingError: {
                                surface: (0, aw.b)(null == rQ && null == rH ? null : r4),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    })
                }
            }, tI[165] = ao, tI[166] = rH, tI[167] = tE, tI[168] = rQ, tI[169] = aC, tI[170] = se, tI[171] = nG, tI[172] = r4, tI[173] = r$, tI[174] = a_, tI[175] = nK, tI[176] = nJ, tI[177] = aS, tI[178] = eI) : eI = tI[178];
            let o1 = (0, t9.a)(eI);
            tI[179] !== rH || tI[180] !== tE || tI[181] !== aH || tI[182] !== aC || tI[183] !== ab || tI[184] !== nG || tI[185] !== a_ || tI[186] !== aI || tI[187] !== sb || tI[188] !== nJ || tI[189] !== aS || tI[190] !== si || tI[191] !== nY ? (ej = () => {
                if (ab || null == aS) return;
                let e = nJ.get(G.s);
                if (!e && !nJ.get(G.q) || !e && null == rH && null == si) return;
                let t = ax.current?.signal;
                null == t || t.aborted || (ag(nY), (e ? (0, nL.f)(nJ, {
                    chatGptThreadId: tE,
                    conversationTitle: aH
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
                    prompt: `Continuing from ${(0,tp.f)({conversationId:aS,title:aH?.trim()||"ChatGPT thread"})}`
                }).then(oX)).then(n => {
                    if (!t.aborted) {
                        if (null != n) return void(e ? aI(n) : a_((0, ov.c)(n, {
                            isTemporaryChat: nG
                        })));
                        throw Error("Unable to create a Work conversation")
                    }
                }).catch(() => {
                    t.aborted || (ag(null), nJ.get(er.f).danger(aC.formatMessage({
                        id: "chatgptConversations.handoffFailed",
                        defaultMessage: "Failed to create chat",
                        description: "Error shown when ChatGPT cannot hand off a conversation to a task"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.handoffFailed"
                        }
                    }))
                }))
            }, tI[179] = rH, tI[180] = tE, tI[181] = aH, tI[182] = aC, tI[183] = ab, tI[184] = nG, tI[185] = a_, tI[186] = aI, tI[187] = sb, tI[188] = nJ, tI[189] = aS, tI[190] = si, tI[191] = nY, tI[192] = ej) : ej = tI[192];
            let o2 = ej;
            tI[193] !== tE || tI[194] !== a_ || tI[195] !== nJ || tI[196] !== as || tI[197] !== nB || tI[198] !== n0 ? (eE = () => {
                if (null != n0) {
                    if ((0, eN.e)(tE)) {
                        let e = (0, eS.a)(nJ, n0, tE);
                        null != e && a_((0, ov.c)(e))
                    }
                    return
                }
                let e = nJ.query.getData(n8.n, nB);
                null != e && null != nB && null != as && ((0, z.mb)(nJ, {
                    conversation: e,
                    conversationId: as,
                    sharedConversationId: nB
                }), a_((0, ov.c)(as)))
            }, tI[193] = tE, tI[194] = a_, tI[195] = nJ, tI[196] = as, tI[197] = nB, tI[198] = n0, tI[199] = eE) : eE = tI[199];
            let o3 = (0, t9.a)(eE);
            tI[200] !== nQ ? (eA = nQ?.mcpAppContext == null ? null : {
                hostId: tY.a,
                server: "codex_apps",
                connectorId: nQ.mcpAppContext.id
            }, tI[200] = nQ, tI[201] = eA) : eA = tI[201];
            let o4 = (0, p.x)(tB.b, eA),
                o6 = nQ?.fullscreenContent != null ? "content" : "workspace",
                o5 = (0, J.a)(nZ ? "embedded" : o6),
                o8 = !o4 && (rO || !rR.isError) && !n$ && !r8 && (null == n0 || nX?.authMethod === "chatgpt" || n1) && (!an || null != rH),
                o7 = r8 || so || ss || r$,
                o9 = o7 || s$ || sY?.needsEntry === !0;
            if (s$) {
                let e;
                tI[202] !== aC ? (e = aC.formatMessage(sQ.d.readOnlyPlaceholder), tI[202] = aC, tI[203] = e) : e = tI[203], eP = e
            } else !o7 && sY?.needsEntry && (eP = !1);
            let ie = o8 && !o7 && !an && !rL && !se && !ro && !ra && !rr && !sj,
                it = !o8 || an || o9 || rL ? null : ac;
            if (tI[204] !== sj || tI[205] !== af || tI[206] !== st || tI[207] !== sn || tI[208] !== rH?.current_node || tI[209] !== tE || tI[210] !== su || tI[211] !== r6 || tI[212] !== oL || tI[213] !== oK || tI[214] !== oV || tI[215] !== o1 || tI[216] !== tU || tI[217] !== n$ || tI[218] !== o9 || tI[219] !== rL || tI[220] !== sG || tI[221] !== r8 || tI[222] !== an || tI[223] !== ra || tI[224] !== nG || tI[225] !== rY || tI[226] !== ro || tI[227] !== r4 || tI[228] !== ss || tI[229] !== r$ || tI[230] !== ar || tI[231] !== re || tI[232] !== ex || tI[233] !== ot || tI[234] !== on || tI[235] !== s$ || tI[236] !== aD || tI[237] !== nJ.get || tI[238] !== aW || tI[239] !== rF?.current_node || tI[240] !== nV || tI[241] !== o8 || tI[242] !== os || tI[243] !== aE || tI[244] !== ri) {
                let e = (0, n7.c)({
                    paragen: ar,
                    hideInitialUserMessage: tU,
                    browserConversationId: void 0,
                    conversationId: tE,
                    enableCloudBrowserActivity: r6,
                    errorMessage: oL,
                    branchingMessageId: af,
                    isReadOnly: n$ || r8 || an || null != nV,
                    isTemporaryChat: nG,
                    isWorkConversation: rY,
                    onRegenerateResponse: sj || an || null != nV || n$ || r8 || ss || r$ || ro || ra ? void 0 : o1,
                    onEditUserMessage: sj || null == ex || rY || n$ || r8 || ss || !ri || ra ? void 0 : oV,
                    onFork: null == ex || nG || ss || r$ || n$ || r8 ? void 0 : oK,
                    pendingSubmissionAttachments: re,
                    shareEnabled: null == su && !nG && !an && !n$ && !r8 && !sG,
                    readAloudEnabled: !an && !r8,
                    feedbackEnabled: !an && !r8 && null == nV,
                    renderedTurns: s$ || null == ar || null == ot ? on : (0, n6.a)({
                        ...ot,
                        current_node: ar.promptMessageId
                    }, {
                        clinicalSearchEnabled: sn,
                        clinicalCitationsEnabled: st,
                        enableCloudBrowserActivity: r6,
                        streamingOrders: aE,
                        isWorkConversation: r4,
                        getRenderTelemetry: e => (0, oO.c)(nJ.get, e)
                    }),
                    safetyReview: aD,
                    sharedConversationLastMessageId: rF?.current_node ?? aW ?? (an ? rH?.current_node : null),
                    showPendingLoadingMessage: os,
                    showRequestUserInputStatus: o8 && !o9 && !rL
                });
                eM = s$ ? (0, sQ.a)(e) : e, tI[204] = sj, tI[205] = af, tI[206] = st, tI[207] = sn, tI[208] = rH?.current_node, tI[209] = tE, tI[210] = su, tI[211] = r6, tI[212] = oL, tI[213] = oK, tI[214] = oV, tI[215] = o1, tI[216] = tU, tI[217] = n$, tI[218] = o9, tI[219] = rL, tI[220] = sG, tI[221] = r8, tI[222] = an, tI[223] = ra, tI[224] = nG, tI[225] = rY, tI[226] = ro, tI[227] = r4, tI[228] = ss, tI[229] = r$, tI[230] = ar, tI[231] = re, tI[232] = ex, tI[233] = ot, tI[234] = on, tI[235] = s$, tI[236] = aD, tI[237] = nJ.get, tI[238] = aW, tI[239] = rF?.current_node, tI[240] = nV, tI[241] = o8, tI[242] = os, tI[243] = aE, tI[244] = ri, tI[245] = eM
            } else eM = tI[245];
            let ia = eM;
            tI[246] !== aC ? (ek = aC.formatMessage({
                id: "chatgptConversations.loadingConversation",
                defaultMessage: "Loading ChatGPT conversation",
                description: "Accessible loading status shown while a ChatGPT conversation is loading in Codex Desktop"
            }), tI[246] = aC, tI[247] = ek) : ek = tI[247];
            let ir = ek;
            tI[248] !== n$ || tI[249] !== an || tI[250] !== rq || tI[251] !== nJ || tI[252] !== aS ? (eR = an || n$ || null == aS ? void 0 : e => {
                (0, r7.R)({
                    scope: nJ,
                    conversationId: aS,
                    previousTitle: rq,
                    title: e
                })
            }, tI[248] = n$, tI[249] = an, tI[250] = rq, tI[251] = nJ, tI[252] = aS, tI[253] = eR) : eR = tI[253];
            let is = aq || null != rH ? rq ?? "" : null;
            tI[254] !== aH || tI[255] !== eR || tI[256] !== is ? (eO = (0, a.jsx)(t3.a, {
                className: "max-w-[320px]",
                variant: "flush-start",
                onRename: eR,
                title: aH,
                titleValue: is
            }), tI[254] = aH, tI[255] = eR, tI[256] = is, tI[257] = eO) : eO = tI[257];
            let io = eO,
                ii = r4 || r3 ? io : null;
            if (null != su) {
                let e;
                tI[258] !== tE || tI[259] !== su ? (e = (0, a.jsx)(a5.ChatGptGizmoHeader, {
                    conversationId: tE,
                    gizmoId: su
                }), tI[258] = tE, tI[259] = su, tI[260] = e) : e = tI[260], ii = e
            } else null != rH || null != si || rP || (ii = null);
            tI[261] !== n$ || tI[262] !== an || tI[263] !== rY ? (eG = !rY || an || n$ ? null : (0, a.jsx)(tT.a, {
                hostId: tY.a
            }), tI[261] = n$, tI[262] = an, tI[263] = rY, tI[264] = eG) : eG = tI[264];
            let il = eG;
            tI[265] !== r4 || tI[266] !== sM || tI[267] !== sb ? (eL = null == sb || r4 ? null : (0, a.jsx)(sg, {
                allowsThreadContentOverlap: !0,
                project: sM
            }), tI[265] = r4, tI[266] = sM, tI[267] = sb, tI[268] = eL) : eL = tI[268];
            let ic = eL;
            tI[269] !== ic || tI[270] !== ii || tI[271] !== tE || tI[272] !== nq || tI[273] !== n$ || tI[274] !== oG || tI[275] !== an || tI[276] !== nG || tI[277] !== il || tI[278] !== sH || tI[279] !== sb || tI[280] !== sB || tI[281] !== sP ? (eB = sP ? (0, a.jsx)(sf.a, {
                isTemporaryChat: nG,
                isCloudTask: oG && !an && !n$,
                breadcrumbHeader: nq ?? ic,
                project: null == sb ? void 0 : {
                    icon: sH,
                    name: sB
                },
                start: nq ?? (an ? ii : (0, a.jsx)(ni.BusinessAgentConversationHeader, {
                    conversationId: tE,
                    fallback: ii
                })),
                startActions: il
            }) : null, tI[269] = ic, tI[270] = ii, tI[271] = tE, tI[272] = nq, tI[273] = n$, tI[274] = oG, tI[275] = an, tI[276] = nG, tI[277] = il, tI[278] = sH, tI[279] = sb, tI[280] = sB, tI[281] = sP, tI[282] = eB) : eB = tI[282];
            let id = eB,
                iu = !an && null == nV && !n$ && !nG && !aM,
                ih = (0, p.x)(iu ? rz.a : null, tE);
            tI[283] !== tE || tI[284] !== ih ? (ez = null != ih ? (0, a.jsx)(sL, {
                conversationId: tE
            }) : null, tI[283] = tE, tI[284] = ih, tI[285] = ez) : ez = tI[285];
            let ip = ez;
            tI[286] !== ie || tI[287] !== tE || tI[288] !== se || tI[289] !== sY ? (eF = null != sY ? (0, a.jsx)("div", {
                className: "max-w-full min-w-0",
                inert: se,
                children: (0, a.jsx)(sT, {
                    conversationId: tE,
                    placement: "progress",
                    canStartSection: ie
                })
            }) : null, tI[286] = ie, tI[287] = tE, tI[288] = se, tI[289] = sY, tI[290] = eF) : eF = tI[290];
            let im = eF;
            if (tI[291] !== rR || tI[292] !== nX?.authMethod || tI[293] !== sj || tI[294] !== nU || tI[295] !== sa || tI[296] !== sy || tI[297] !== oU || tI[298] !== ie || tI[299] !== ao || tI[300] !== s_ || tI[301] !== nH || tI[302] !== rH || tI[303] !== id || tI[304] !== tE || tI[305] !== ir || tI[306] !== rQ || tI[307] !== aH || tI[308] !== ip || tI[309] !== of || tI[310] !== tO || tI[311] !== oL || tI[312] !== rZ || tI[313] !== r9 || tI[314] !== em || tI[315] !== sc || tI[316] !== rB || tI[317] !== o2 || tI[318] !== o3 || tI[319] !== oz || tI[320] !== rP || tI[321] !== tk || tI[322] !== at || tI[323] !== n$ || tI[324] !== oo || tI[325] !== o9 || tI[326] !== s7 || tI[327] !== rL || tI[328] !== oB || tI[329] !== ai || tI[330] !== ab || tI[331] !== sR || tI[332] !== nZ || tI[333] !== sO || tI[334] !== o4 || tI[335] !== rE || tI[336] !== se || tI[337] !== r8 || tI[338] !== r2 || !1 !== tI[339] || tI[340] !== an || tI[341] !== so || tI[342] !== rr || tI[343] !== ra || tI[344] !== nG || tI[345] !== rY || tI[346] !== ro || tI[347] !== r4 || tI[348] !== sr || tI[349] !== rT || tI[350] !== ss || tI[351] !== r$ || tI[352] !== rV || tI[353] !== rJ.pathname || tI[354] !== rk || tI[355] !== rX?.sidebarAutomationId || tI[356] !== t8 || tI[357] !== r0 || tI[358] !== sM || tI[359] !== sH || tI[360] !== sb || tI[361] !== sB || tI[362] !== eP || tI[363] !== sp || tI[364] !== ot || tI[365] !== on || tI[366] !== nD || tI[367] !== s$ || tI[368] !== o5 || tI[369] !== rq || tI[370] !== nJ || tI[371] !== tJ || tI[372] !== aR || tI[373] !== sY || tI[374] !== im || tI[375] !== aS || tI[376] !== og || tI[377] !== nB || tI[378] !== n0 || tI[379] !== rW || tI[380] !== nV || tI[381] !== sK || tI[382] !== aM || tI[383] !== iu || tI[384] !== oE || tI[385] !== o8 || tI[386] !== os || tI[387] !== it || tI[388] !== oN || tI[389] !== oR || tI[390] !== aO || tI[391] !== tV || tI[392] !== ia || tI[393] !== nQ) {
                td = Symbol.for("react.early_return_sentinel");
                e: {
                    let e, t, n, r, s, o, i, l, c, d, u, h, p, f = on.flatMap(oJ).flatMap(oZ),
                        v = f.flatMap(o$);
                    if (!an && (rR.error instanceof na.a && 423 === rR.error.status || sO && null == rk)) {
                        let e;
                        tI[419] !== rR || tI[420] !== tE || tI[421] !== nJ ? (e = (0, a.jsx)(sz.a, {
                            onUnlocked: () => {
                                (0, sF.g)(nJ.get(sF.f)?.projectId, [tE]), rR.refetch()
                            }
                        }), tI[419] = rR, tI[420] = tE, tI[421] = nJ, tI[422] = e) : e = tI[422], td = e;
                        break e
                    }
                    if (null != sK) {
                        let e;
                        tI[423] !== sK ? (e = (0, a.jsx)(_.k, {
                            replace: !0,
                            to: sK
                        }), tI[423] = sK, tI[424] = e) : e = tI[424], td = e;
                        break e
                    }
                    eH = sV,
                    tI[425] !== rH || tI[426] !== rP || tI[427] !== n$ || tI[428] !== oB || tI[429] !== nZ || tI[430] !== r8 || tI[431] !== an || tI[432] !== r4 ? (e5 = r4 || an || nZ || r8 || n$ || oB || null == rH && !rP ? null : (0, a.jsx)($.a, {}), tI[425] = rH, tI[426] = rP, tI[427] = n$, tI[428] = oB, tI[429] = nZ, tI[430] = r8, tI[431] = an, tI[432] = r4, tI[433] = e5) : e5 = tI[433],
                    tI[434] !== rR.fetchStatus || tI[435] !== rH || tI[436] !== oz || tI[437] !== rP || tI[438] !== oB || tI[439] !== nZ ? (e8 = !1, tI[434] = rR.fetchStatus, tI[435] = rH, tI[436] = oz, tI[437] = rP, tI[438] = oB, tI[439] = nZ, tI[440] = e8) : e8 = tI[440],
                    tI[441] !== rR.data || tI[442] !== rR.fetchStatus || tI[443] !== rH || tI[444] !== tE || tI[445] !== oz || tI[446] !== rP || tI[447] !== s7 || tI[448] !== oB || !1 !== tI[449] || tI[450] !== on.length ? (e9 = null, tI[441] = rR.data, tI[442] = rR.fetchStatus, tI[443] = rH, tI[444] = tE, tI[445] = oz, tI[446] = rP, tI[447] = s7, tI[448] = oB, tI[449] = !1, tI[450] = on.length, tI[451] = e9) : e9 = tI[451],
                    tn = !an && !r8 && (0, tR.c)() ? (0, a.jsx)(tL.b, {
                        callIds: v,
                        hostId: tY.a,
                        conversationId: (0, m.Oe)(`chatgpt:${tE}`)
                    }) : null,
                    tI[452] !== aH || tI[453] !== nZ || tI[454] !== n0 || tI[455] !== nQ?.documentTitle ? (ta = nZ ? null : (0, a.jsx)(t_.a, {
                        title: null == n0 ? nQ?.documentTitle ?? aH : null
                    }), tI[452] = aH, tI[453] = nZ, tI[454] = n0, tI[455] = nQ?.documentTitle, tI[456] = ta) : ta = tI[456],
                    tI[457] !== tE || tI[458] !== nZ || tI[459] !== se || tI[460] !== an || tI[461] !== nG || tI[462] !== r4 || tI[463] !== ia ? (tr = nZ || r4 ? null : (0, a.jsx)(rN.a, {
                        conversationId: tE,
                        canCopy: !se,
                        paragenEnabled: !an,
                        turns: ia,
                        loadHistory: !nG && !an
                    }), tI[457] = tE, tI[458] = nZ, tI[459] = se, tI[460] = an, tI[461] = nG, tI[462] = r4, tI[463] = ia, tI[464] = tr) : tr = tI[464];
                    let b = null != rH || rP;tI[465] !== oz || tI[466] !== r4 || tI[467] !== b ? (ts = (0, a.jsx)(nr.a, {
                        isWorkConversation: r4,
                        hasConversationContent: b,
                        hasLoadError: oz
                    }), tI[465] = oz, tI[466] = r4, tI[467] = b, tI[468] = ts) : ts = tI[468],
                    tI[469] !== rH || tI[470] !== tE || tI[471] !== oz || tI[472] !== rP || tI[473] !== oB || tI[474] !== nZ || tI[475] !== rJ.pathname || tI[476] !== nJ || tI[477] !== nB ? (to = nZ || oB || oz || null == rH && !rP ? null : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(s8, {
                            sharedConversationId: nB
                        }), (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)(tD.a, {
                                onCommit: () => tF.a.contentCommitted(nJ, tE, nB, rJ.pathname),
                                onPaint: () => tF.a.contentVisible(nJ, tE, nB)
                            }, nB ?? tE)
                        })]
                    }), tI[469] = rH, tI[470] = tE, tI[471] = oz, tI[472] = rP, tI[473] = oB, tI[474] = nZ, tI[475] = rJ.pathname, tI[476] = nJ, tI[477] = nB, tI[478] = to) : to = tI[478],
                    tI[479] !== nX?.authMethod || tI[480] !== sy || tI[481] !== s_ || tI[482] !== rH || tI[483] !== id || tI[484] !== tE || tI[485] !== rQ || tI[486] !== aH || tI[487] !== ip || tI[488] !== of || tI[489] !== em || tI[490] !== sc || tI[491] !== o2 || tI[492] !== n$ || tI[493] !== oo || tI[494] !== ab || tI[495] !== sR || tI[496] !== nZ || tI[497] !== sO || tI[498] !== r8 || tI[499] !== an || tI[500] !== nG || tI[501] !== rY || tI[502] !== ro || tI[503] !== r4 || tI[504] !== rX?.sidebarAutomationId || tI[505] !== r0 || tI[506] !== sH || tI[507] !== sb || tI[508] !== sB || tI[509] !== sp || tI[510] !== ot || tI[511] !== on.length || tI[512] !== nJ || tI[513] !== im || tI[514] !== aS || tI[515] !== og || tI[516] !== nV || tI[517] !== aM || tI[518] !== iu || tI[519] !== oE || tI[520] !== it || tI[521] !== oN || tI[522] !== aO || tI[523] !== nQ ? (ti = nZ || null != nQ ? null : (0, a.jsxs)(rG.a, {
                        chatIcon: null == sb ? void 0 : sH,
                        conversationId: rY && !an ? tE : null,
                        header: null != ip || null != im ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(a.Fragment, {
                                children: (0, a.jsx)(sx, {
                                    header: id,
                                    courseShortcut: ip,
                                    progress: im
                                })
                            }), null]
                        }) : id,
                        title: aH,
                        isArchivedPreview: n$,
                        children: [null, null, nX?.authMethod === "chatgpt" ? (0, a.jsx)(tS.r, {
                            productExperience: r4 ? "work" : "chat"
                        }) : null, an ? (0, a.jsx)(oe.a, {
                            children: null == sp ? null : (0, a.jsx)(a.Fragment, {
                                children: (0, a.jsx)(ol, {
                                    data: sp
                                })
                            })
                        }) : null, iu ? (0, a.jsx)(rD, {
                            conversationId: tE,
                            scheduledAutomationId: r0 ? rX?.sidebarAutomationId : void 0
                        }, tE) : null, oE ? (0, a.jsx)(rd, {
                            allowsThreadContentOverlap: !r4,
                            composerActions: it,
                            conversationId: oN,
                            controlledState: oo ? {
                                isOpen: of.isOpen,
                                shouldPreventAutoFocus: of.shouldPreventAutoFocus,
                                onOpenChange: e => {
                                    og({
                                        ...of,
                                        isOpen: e,
                                        shouldPreventAutoFocus: !e && of.shouldPreventAutoFocus
                                    })
                                }
                            } : void 0,
                            readData: !oo || of.isOpen ? em : null,
                            showSources: !oo,
                            shouldBlockExternalEgress: aM
                        }) : null, nG && !an && !n$ && null == sc && null == s_ && null == sb && !sR && null != ot && (0, g.a)(ot).some(oY) ? (0, a.jsx)(A.a.HeaderAction, {
                            actionId: "chatgpt-conversation-save",
                            align: "end",
                            order: 100,
                            children: (0, a.jsx)(ow, {
                                conversationId: tE
                            })
                        }) : null, nG || n$ || r8 ? null : (0, a.jsx)(sf.b, {
                            allowsThreadContentOverlap: !r4,
                            menu: an || null == aS ? (0, a.jsx)(sd, {}) : (0, a.jsx)(sl, {
                                conversationId: tE,
                                title: aH,
                                isHandoffPending: ab,
                                isArchived: rH?.is_archived === !0,
                                isChatConversation: null != rH && !r4,
                                onHandoff: sy ? o2 : void 0,
                                onOpenMessage: async e => {
                                    ax.current?.signal.aborted === !1 && nJ.get(j.b)?.pathname === nJ.value.pathname && await al.current?.scrollToMessage(e)
                                },
                                projectId: sb,
                                projectName: sB,
                                serverConversationId: aS,
                                conversationOrigin: rQ
                            }),
                            children: an || sO ? null : (0, a.jsx)(av, {
                                conversationId: tE,
                                projectId: sb,
                                sharedProjectConversation: nV,
                                isReady: (null != aS || null != nV) && on.length > 0 && (aO ?? rH?.current_node) != null,
                                isRestricted: aM || sR,
                                isStreaming: ro
                            })
                        })]
                    }), tI[479] = nX?.authMethod, tI[480] = sy, tI[481] = s_, tI[482] = rH, tI[483] = id, tI[484] = tE, tI[485] = rQ, tI[486] = aH, tI[487] = ip, tI[488] = of, tI[489] = em, tI[490] = sc, tI[491] = o2, tI[492] = n$, tI[493] = oo, tI[494] = ab, tI[495] = sR, tI[496] = nZ, tI[497] = sO, tI[498] = r8, tI[499] = an, tI[500] = nG, tI[501] = rY, tI[502] = ro, tI[503] = r4, tI[504] = rX?.sidebarAutomationId, tI[505] = r0, tI[506] = sH, tI[507] = sb, tI[508] = sB, tI[509] = sp, tI[510] = ot, tI[511] = on.length, tI[512] = nJ, tI[513] = im, tI[514] = aS, tI[515] = og, tI[516] = nV, tI[517] = aM, tI[518] = iu, tI[519] = oE, tI[520] = it, tI[521] = oN, tI[522] = aO, tI[523] = nQ, tI[524] = ti) : ti = tI[524],
                    tl = null,
                    eW = a6.a,
                    e0 = ao,
                    e1 = rQ,
                    e2 = !o8 || o5.isHidden || o9 || sj || se || rL || n$ || r8 || so || ss || r$ || rr || ra,
                    e3 = nG,
                    e4 = sb,
                    e6 = null != s_,
                    eD = t1.c,
                    eq = r9,
                    tI[525] !== nZ || tI[526] !== r2 || tI[527] !== r4 || tI[528] !== im || tI[529] !== nQ ? (eU = nZ || null != nQ ? im : r2 && (0, t6.a)() && !r4 && (0, a.jsx)("div", {
                        className: "h-px",
                        "aria-hidden": !0
                    }), tI[525] = nZ, tI[526] = r2, tI[527] = r4, tI[528] = im, tI[529] = nQ, tI[530] = eU) : eU = tI[530],
                    eK = nU;
                    let x = null == sY ? "flex h-full min-h-0 flex-col" : "h-full",
                        C = rq ?? aH,
                        w = !se,
                        I = !ai && !nZ && !an && !o4 && !o5.isHidden,
                        T = aM || sa,
                        S = rZ?.isFullWidth === !0,
                        E = null == rZ ? oR.contentShift : void 0,
                        P = sY?.selectedIndex;tI[531] !== ie || tI[532] !== tE || tI[533] !== sY ? (e = null != sY ? (0, a.jsx)(sT, {
                        conversationId: tE,
                        placement: "composer",
                        canStartSection: ie
                    }) : void 0, tI[531] = ie, tI[532] = tE, tI[533] = sY, tI[534] = e) : e = tI[534],
                    tI[535] !== tE || tI[536] !== sY ? (t = null != sY ? (0, a.jsx)(sI, {
                        conversationId: tE
                    }) : void 0, tI[535] = tE, tI[536] = sY, tI[537] = t) : t = tI[537];
                    let M = !r4,
                        k = s$ ? null : oL;tI[538] !== rR || tI[539] !== oU ? (n = oU ? () => {
                        rR.refetch({
                            cancelRefetch: !1
                        })
                    } : void 0, tI[538] = rR, tI[539] = oU, tI[540] = n) : n = tI[540];
                    let R = on.length > 0,
                        O = eP,
                        N = !sR && (null == sb || null != sM),
                        G = null == sY && !rV,
                        L = rR.isFetching,
                        B = !s$ && ro;tI[541] !== rH?.is_archived || tI[542] !== tE || tI[543] !== n$ || tI[544] !== nZ || tI[545] !== an || tI[546] !== nG || tI[547] !== ro || tI[548] !== r4 ? (r = nZ || !r4 || an || n$ || rH?.is_archived === !0 || nG ? null : (0, a.jsx)(y.Suspense, {
                        fallback: null,
                        children: (0, a.jsx)(sw, {
                            conversationId: tE,
                            isTurnActive: ro
                        })
                    }), tI[541] = rH?.is_archived, tI[542] = tE, tI[543] = n$, tI[544] = nZ, tI[545] = an, tI[546] = nG, tI[547] = ro, tI[548] = r4, tI[549] = r) : r = tI[549],
                    tI[550] !== tE || tI[551] !== n$ || tI[552] !== aS ? (s = n$ ? (0, a.jsx)(tZ.a, {
                        conversationId: aS ?? tE,
                        kind: "chatgpt"
                    }, aS ?? tE) : void 0, tI[550] = tE, tI[551] = n$, tI[552] = aS, tI[553] = s) : s = tI[553];
                    let z = !s$ && os;tI[554] !== s_ ? (o = null != s_ ? (0, a.jsx)(sE.GptPluginMigrationBanner, {
                        gizmoId: s_
                    }) : null, tI[554] = s_, tI[555] = o) : o = tI[555],
                    tI[556] !== sy || tI[557] !== o2 || tI[558] !== ab || tI[559] !== nG || tI[560] !== sr || tI[561] !== rT ? (i = sr && !nG ? (0, a.jsx)(rM, {
                        canConvert: sy,
                        isChatInstantAvailable: !rT,
                        isConverting: ab,
                        onConvert: o2
                    }) : null, tI[556] = sy, tI[557] = o2, tI[558] = ab, tI[559] = nG, tI[560] = sr, tI[561] = rT, tI[562] = i) : i = tI[562],
                    tI[563] !== rB || tI[564] !== r8 ? (l = rB.bind(null, r8), tI[563] = rB, tI[564] = r8, tI[565] = l) : l = tI[565],
                    tI[566] !== o3 || tI[567] !== an || tI[568] !== t8 ? (c = e => {
                        t8?.(e), an && o3()
                    }, tI[566] = o3, tI[567] = an, tI[568] = t8, tI[569] = c) : c = tI[569],
                    tI[570] !== rR.isFetching || tI[571] !== sj || tI[572] !== ao || tI[573] !== nH || tI[574] !== tE || tI[575] !== ir || tI[576] !== tO || tI[577] !== oz || tI[578] !== tk || tI[579] !== at || tI[580] !== o9 || tI[581] !== s7 || tI[582] !== rL || tI[583] !== oB || tI[584] !== ai || tI[585] !== nZ || tI[586] !== an || tI[587] !== nG || tI[588] !== rY || tI[589] !== eP || tI[590] !== nD || tI[591] !== tJ || tI[592] !== aR || tI[593] !== nB || tI[594] !== rW || tI[595] !== o8 || tI[596] !== n || tI[597] !== R || tI[598] !== N || tI[599] !== G || tI[600] !== B || tI[601] !== r || tI[602] !== s || tI[603] !== z || tI[604] !== o || tI[605] !== i || tI[606] !== l || tI[607] !== c || tI[608] !== C || tI[609] !== w || tI[610] !== I || tI[611] !== T || tI[612] !== S || tI[613] !== E || tI[614] !== P || tI[615] !== e || tI[616] !== t || tI[617] !== M || tI[618] !== k || tI[619] !== tV || tI[620] !== ia || tI[621] !== nQ ? (d = (0, a.jsx)(o0, {
                        ref: al,
                        printTitle: C,
                        trackShownImpressions: w,
                        trackReadState: I,
                        workspace: nQ,
                        shouldBlockMcpApps: T,
                        isCoveredByFloatingPanel: S,
                        isFormOnly: ai,
                        isInlinePreview: nZ,
                        hideModelPicker: tk,
                        disableAutoFocus: tO,
                        transcriptPresentation: tV,
                        scrollOrigin: tJ,
                        composerRef: ad,
                        contentX: E,
                        conversationId: tE,
                        composerConversationId: ao,
                        sectionIndex: P,
                        composerLeadingContent: nH,
                        aboveComposerContent: e,
                        historyLoadingContent: t,
                        requiredSystemHints: nD,
                        isChatConversation: M,
                        conversationLoadingLabel: ir,
                        entries: ia,
                        errorMessage: k,
                        hasLoadError: oz,
                        onRetryLoad: n,
                        hasRenderableTurns: R,
                        isComposerDisabled: o9,
                        readOnlyPlaceholder: O,
                        moreDetailsEnabled: N,
                        isConversationEmpty: s7,
                        showEmptyState: G,
                        isConversationFetching: L,
                        isConversationLoading: oB,
                        isSharedConversation: an,
                        isSubmitDisabled: rL,
                        isTemporaryChat: nG,
                        isTurnActive: B,
                        isWorkConversation: rY,
                        onboardingPrelude: r,
                        scrollStateConversationId: aR,
                        initialResponsePlacementKey: at,
                        sharedConversationId: nB,
                        sharedPostRegulatedConnectorKind: rW,
                        showComposer: o8,
                        archivedPreviewFooter: s,
                        showPendingLoadingMessage: z,
                        gptPluginMigrationBanner: o,
                        awaitingGptContinuation: sj,
                        workOnlyConversionBanner: i,
                        onAddSelectedText: l,
                        onSubmitAccepted: c
                    }), tI[570] = rR.isFetching, tI[571] = sj, tI[572] = ao, tI[573] = nH, tI[574] = tE, tI[575] = ir, tI[576] = tO, tI[577] = oz, tI[578] = tk, tI[579] = at, tI[580] = o9, tI[581] = s7, tI[582] = rL, tI[583] = oB, tI[584] = ai, tI[585] = nZ, tI[586] = an, tI[587] = nG, tI[588] = rY, tI[589] = eP, tI[590] = nD, tI[591] = tJ, tI[592] = aR, tI[593] = nB, tI[594] = rW, tI[595] = o8, tI[596] = n, tI[597] = R, tI[598] = N, tI[599] = G, tI[600] = B, tI[601] = r, tI[602] = s, tI[603] = z, tI[604] = o, tI[605] = i, tI[606] = l, tI[607] = c, tI[608] = C, tI[609] = w, tI[610] = I, tI[611] = T, tI[612] = S, tI[613] = E, tI[614] = P, tI[615] = e, tI[616] = t, tI[617] = M, tI[618] = k, tI[619] = tV, tI[620] = ia, tI[621] = nQ, tI[622] = d) : d = tI[622],
                    tI[623] !== of || tI[624] !== em || tI[625] !== oo || tI[626] !== aM || tI[627] !== oE || tI[628] !== it || tI[629] !== oN || tI[630] !== oR ? (u = oE && null != em && (!oo || of.isOpen) ? (0, a.jsx)(rc, {
                        composerActions: it,
                        conversationId: oN,
                        readData: em,
                        showSources: !oo,
                        display: oR,
                        shouldBlockExternalEgress: aM
                    }) : null, tI[623] = of, tI[624] = em, tI[625] = oo, tI[626] = aM, tI[627] = oE, tI[628] = it, tI[629] = oN, tI[630] = oR, tI[631] = u) : u = tI[631],
                    tI[632] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, a.jsx)(a4.a, {}), tI[632] = h) : h = tI[632],
                    tI[633] !== nZ ? (p = null, tI[633] = nZ, tI[634] = p) : p = tI[634],
                    tI[635] !== se || tI[636] !== d || tI[637] !== u || tI[638] !== p || tI[639] !== x ? (eJ = (0, a.jsxs)("div", {
                        className: x,
                        inert: se,
                        children: [d, u, h, p]
                    }), tI[635] = se, tI[636] = d, tI[637] = u, tI[638] = p, tI[639] = x, tI[640] = eJ) : eJ = tI[640],
                    eX = !an && !r8 && (0, tR.c)() ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(oF, {
                            conversationId: tE,
                            shouldBlockExternalEgress: aM || sa,
                            widgets: f.filter(oQ)
                        }), (0, a.jsx)(tG.a, {
                            blockedWidgetSource: rE ? void 0 : "descriptor",
                            transcriptMcpAppIds: new Set(f.flatMap(e => "mcp-tool-call" === e.type ? rE ? e.callId : [] : "chatgpt-hosted-widget" === e.type ? (0, aF.e)(tE, e.messageId) : [])),
                            shouldBlockExternalEgress: aM || sa
                        })]
                    }) : null
                }
                tI[291] = rR, tI[292] = nX?.authMethod, tI[293] = sj, tI[294] = nU, tI[295] = sa, tI[296] = sy, tI[297] = oU, tI[298] = ie, tI[299] = ao, tI[300] = s_, tI[301] = nH, tI[302] = rH, tI[303] = id, tI[304] = tE, tI[305] = ir, tI[306] = rQ, tI[307] = aH, tI[308] = ip, tI[309] = of, tI[310] = tO, tI[311] = oL, tI[312] = rZ, tI[313] = r9, tI[314] = em, tI[315] = sc, tI[316] = rB, tI[317] = o2, tI[318] = o3, tI[319] = oz, tI[320] = rP, tI[321] = tk, tI[322] = at, tI[323] = n$, tI[324] = oo, tI[325] = o9, tI[326] = s7, tI[327] = rL, tI[328] = oB, tI[329] = ai, tI[330] = ab, tI[331] = sR, tI[332] = nZ, tI[333] = sO, tI[334] = o4, tI[335] = rE, tI[336] = se, tI[337] = r8, tI[338] = r2, tI[339] = !1, tI[340] = an, tI[341] = so, tI[342] = rr, tI[343] = ra, tI[344] = nG, tI[345] = rY, tI[346] = ro, tI[347] = r4, tI[348] = sr, tI[349] = rT, tI[350] = ss, tI[351] = r$, tI[352] = rV, tI[353] = rJ.pathname, tI[354] = rk, tI[355] = rX?.sidebarAutomationId, tI[356] = t8, tI[357] = r0, tI[358] = sM, tI[359] = sH, tI[360] = sb, tI[361] = sB, tI[362] = eP, tI[363] = sp, tI[364] = ot, tI[365] = on, tI[366] = nD, tI[367] = s$, tI[368] = o5, tI[369] = rq, tI[370] = nJ, tI[371] = tJ, tI[372] = aR, tI[373] = sY, tI[374] = im, tI[375] = aS, tI[376] = og, tI[377] = nB, tI[378] = n0, tI[379] = rW, tI[380] = nV, tI[381] = sK, tI[382] = aM, tI[383] = iu, tI[384] = oE, tI[385] = o8, tI[386] = os, tI[387] = it, tI[388] = oN, tI[389] = oR, tI[390] = aO, tI[391] = tV, tI[392] = ia, tI[393] = nQ, tI[394] = eD, tI[395] = eW, tI[396] = eH, tI[397] = eq, tI[398] = eU, tI[399] = eK, tI[400] = eJ, tI[401] = eX, tI[402] = e0, tI[403] = e1, tI[404] = e2, tI[405] = e3, tI[406] = e4, tI[407] = e6, tI[408] = e5, tI[409] = e8, tI[410] = e9, tI[411] = tn, tI[412] = ta, tI[413] = tr, tI[414] = ts, tI[415] = to, tI[416] = ti, tI[417] = tl, tI[418] = td
            } else eD = tI[394], eW = tI[395], eH = tI[396], eq = tI[397], eU = tI[398], eK = tI[399], eJ = tI[400], eX = tI[401], e0 = tI[402], e1 = tI[403], e2 = tI[404], e3 = tI[405], e4 = tI[406], e6 = tI[407], e5 = tI[408], e8 = tI[409], e9 = tI[410], tn = tI[411], ta = tI[412], tr = tI[413], ts = tI[414], to = tI[415], ti = tI[416], tl = tI[417], td = tI[418];
            if (td !== Symbol.for("react.early_return_sentinel")) return td;
            tI[641] !== eD || tI[642] !== eq || tI[643] !== eU || tI[644] !== eK || tI[645] !== eJ || tI[646] !== eX ? (tm = (0, a.jsxs)(eD, {
                floatingPanelWidth: eq,
                header: eU,
                banner: eK,
                children: [eJ, eX]
            }), tI[641] = eD, tI[642] = eq, tI[643] = eU, tI[644] = eK, tI[645] = eJ, tI[646] = eX, tI[647] = tm) : tm = tI[647], tI[648] !== eW || tI[649] !== e0 || tI[650] !== e1 || tI[651] !== e2 || tI[652] !== e3 || tI[653] !== e4 || tI[654] !== e6 || tI[655] !== tm ? (tg = (0, a.jsx)(eW, {
                conversationId: e0,
                conversationOrigin: e1,
                disabled: e2,
                isTemporaryChat: e3,
                projectId: e4,
                requiresGizmoId: e6,
                children: tm
            }), tI[648] = eW, tI[649] = e0, tI[650] = e1, tI[651] = e2, tI[652] = e3, tI[653] = e4, tI[654] = e6, tI[655] = tm, tI[656] = tg) : tg = tI[656], tI[657] !== eH || tI[658] !== e5 || tI[659] !== e8 || tI[660] !== e9 || tI[661] !== tn || tI[662] !== ta || tI[663] !== tr || tI[664] !== ts || tI[665] !== to || tI[666] !== ti || tI[667] !== tl || tI[668] !== tg ? (tf = (0, a.jsxs)(eH, {
                children: [e5, e8, e9, tn, ta, tr, ts, to, ti, tl, tg]
            }), tI[657] = eH, tI[658] = e5, tI[659] = e8, tI[660] = e9, tI[661] = tn, tI[662] = ta, tI[663] = tr, tI[664] = ts, tI[665] = to, tI[666] = ti, tI[667] = tl, tI[668] = tg, tI[669] = tf) : tf = tI[669];
            let ig = tf,
                iv = an || !rR.isFetchedAfterMount || rR.isFetching || rO ? null : rR.error,
                iy = oz ? rR.error : null,
                ib = null == rQ && null == rH ? null : r4,
                ix = !r4 && !oB;
            return tI[670] !== ac || tI[671] !== ao || tI[672] !== nB ? (tv = {
                conversationId: ao,
                composer: ac,
                sharedConversationId: nB
            }, tI[670] = ac, tI[671] = ao, tI[672] = nB, tI[673] = tv) : tv = tI[673], tI[674] !== ig || tI[675] !== tv ? (ty = (0, a.jsx)(nF.a, {
                value: tv,
                children: ig
            }), tI[674] = ig, tI[675] = tv, tI[676] = ty) : ty = tI[676], tI[677] !== ix || tI[678] !== ty ? (tb = (0, a.jsx)(w.a, {
                enabled: ix,
                children: ty
            }), tI[677] = ix, tI[678] = ty, tI[679] = tb) : tb = tI[679], tI[680] !== oU || tI[681] !== aS || tI[682] !== iv || tI[683] !== iy || tI[684] !== ib || tI[685] !== tb ? (tx = (0, a.jsx)(et.a, {
                conversationId: aS,
                error: iv,
                loadError: iy,
                canRetry: oU,
                isWorkConversation: ib,
                children: tb
            }), tI[680] = oU, tI[681] = aS, tI[682] = iv, tI[683] = iy, tI[684] = ib, tI[685] = tb, tI[686] = tx) : tx = tI[686], tx
        }

        function oQ(e) {
            return "chatgpt-hosted-widget" === e.type
        }

        function oY(e) {
            return "user" === e.author.role
        }

        function o$(e) {
            return "mcp-tool-call" === e.type ? [e.callId] : []
        }

        function oZ(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : e
        }

        function oJ(e) {
            let {
                turn: t
            } = e;
            return t.items
        }

        function oX(e) {
            return "threadId" in e ? e.threadId : e.clientThreadId
        }

        function o0(e) {
            let t, n, s, o, c, u, h, m, g, f, v, x, _, w, I, T, S, j, E, A, P, M, k, R, N, G, L, B, D = (0, r.c)(221),
                {
                    ref: W,
                    printTitle: H,
                    trackReadState: U,
                    trackShownImpressions: K,
                    composerRef: V,
                    workspace: Q,
                    shouldBlockMcpApps: Y,
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
                    sharedConversationId: eB,
                    sharedPostRegulatedConnectorKind: ez,
                    showComposer: eD,
                    archivedPreviewFooter: eW,
                    showPendingLoadingMessage: eq,
                    gptPluginMigrationBanner: eU,
                    awaitingGptContinuation: eK,
                    workOnlyConversionBanner: eV,
                    onAddSelectedText: eQ,
                    onSubmitAccepted: eY
                } = e,
                e$ = void 0 === eI || eI,
                eZ = (0, p.y)(F.a),
                eJ = (0, p.x)(eS.e, (0, y.useContext)(O.a)),
                eX = (0, p.z)(tK.a),
                e0 = (0, p.x)(ne.a, Z),
                e2 = Q?.fullscreenContent != null ? "content" : "workspace",
                e3 = (0, J.a)(ei ? "embedded" : e2),
                e4 = (0, p.z)(sB.a),
                e6 = eD && e4?.source.turnContext.conversationId !== ee,
                e8 = "floating" === e3.placement,
                e7 = (0, p.z)(sR.h),
                e9 = eh && null == eB && null == eJ && null == eW,
                te = !ej && !eM && !ef && ew && !ey,
                tt = (0, p.x)(z.i, Z),
                tn = e$ && e9 && te && null == tt && !e0 && !e8,
                ta = e$ && !e0 && (!e9 || !ew),
                tr = (0, y.useRef)(null),
                [ts, to] = (0, y.useState)(null),
                [tl, tc] = (0, y.useState)(!1);
            D[0] !== em || D[1] !== ts ? (t = () => ({
                async scrollToMessage(e) {
                    let t = em.find(t => {
                        let {
                            turn: n
                        } = t;
                        return n.messageIds.includes(e)
                    });
                    null != t && null != ts && await ts.scrollToKey(t.turnKey, void 0, {
                        align: "top"
                    })
                }
            }), n = [em, ts], D[0] = em, D[1] = ts, D[2] = t, D[3] = n) : (t = D[2], n = D[3]), (0, y.useImperativeHandle)(W, t, n), D[4] !== em ? (s = () => em, D[4] = em, D[5] = s) : s = D[5];
            let td = (0, t9.a)(s);
            D[6] !== em || D[7] !== ts ? (o = async e => {
                let t = d()(em, o3);
                if (null == t || e.aborted) return null;
                let n = null;
                return await ts?.scrollToKey(t.turnKey, e => {
                    let t = e.querySelectorAll('[data-conversation-role="assistant"]');
                    return n = t.item(t.length - 1)
                }, {
                    align: "top",
                    signal: e
                }), n
            }, D[6] = em, D[7] = ts, D[8] = o) : o = D[8];
            let tu = o,
                [th, tp] = (0, y.useState)(null);
            D[9] !== ei || D[10] !== eZ || D[11] !== eO ? (c = () => ei ? 0 : eZ.get(an.a, eO), D[9] = ei, D[10] = eZ, D[11] = eO, D[12] = c) : c = D[12];
            let [tf, tC] = (0, y.useState)(c);
            D[13] !== ei || D[14] !== th || D[15] !== eZ || D[16] !== eO ? (u = e => {
                ei || eZ.set(an.a, eO, Math.max(0, e - (th?.getHeightPx() ?? 0)))
            }, D[13] = ei, D[14] = th, D[15] = eZ, D[16] = eO, D[17] = u) : u = D[17];
            let t_ = (0, t9.a)(u);
            D[18] !== em || D[19] !== ts ? (h = async (e, t) => {
                if (t?.signal?.aborted) return;
                if (null == ts) throw Error("ChatGPT conversation search scroll requested before VirtualizedTurnList API was ready");
                let n = em.find(t => {
                    let {
                        id: n
                    } = t;
                    return n === e
                });
                null == n || (await ts.scrollToKey(n.turnKey), t?.signal?.aborted || await (0, tg.b)())
            }, D[18] = em, D[19] = ts, D[20] = h) : h = D[20];
            let tw = (0, t9.a)(h);
            D[21] === Symbol.for("react.memo_cache_sentinel") ? (m = e => tr.current?.querySelector(`[data-content-search-turn-key="${e}"]`) ?? null, D[21] = m) : m = D[21];
            let tI = (0, t9.a)(m);
            D[22] !== Z || D[23] !== em || D[24] !== ts ? (g = async e => {
                let t = em.find(t => {
                    let {
                        turn: n
                    } = t;
                    return n.messageIds.includes(e)
                });
                null != t && null != ts && await ts.scrollToKey(t.turnKey, t => t.querySelector(`[id="${CSS.escape(`delayed-image-gen-${Z}-${e}`)}"]`), {
                    align: "center"
                })
            }, D[22] = Z, D[23] = em, D[24] = ts, D[25] = g) : g = D[25];
            let tT = (0, t9.a)(g);
            D[26] !== tI || D[27] !== tw ? (f = {
                scrollToTurn: tw,
                getTurnContainer: tI
            }, D[26] = tI, D[27] = tw, D[28] = f) : f = D[28];
            let tS = f,
                tj = `chatgpt:${Z}`;
            D[29] !== Z || D[30] !== eP || D[31] !== eZ || D[32] !== eB || D[33] !== eJ ? (v = async e => {
                let t = eZ.get(z.j, Z);
                !eP && null == eB && null == eJ && null != t && eZ.get(eL.b) > 0 && await (0, eG.a)(eZ, t, e)
            }, D[29] = Z, D[30] = eP, D[31] = eZ, D[32] = eB, D[33] = eJ, D[34] = v) : v = D[34], D[35] !== tS || D[36] !== td || D[37] !== tj || D[38] !== v ? (x = function(e) {
                let {
                    getTurns: t,
                    routeContextId: n,
                    scrollAdapter: a,
                    ensureHistory: r
                } = e, s = (0, ao.a)({
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
                                        unitId: (0, nq.a)("user", t),
                                        text: n
                                    }]
                                }
                                if ("assistant-message" === e.type) {
                                    let n = (0, al.a)(e.content, eb.b),
                                        a = [],
                                        r = "";
                                    for (; e.content.includes(r);) r += "";
                                    let s = (0, as.a)(function e(t, n, a, r) {
                                            let s = "",
                                                o = 0;
                                            for (let i of t) {
                                                let t = n.indexOf(i.raw, o); - 1 !== t && (s += n.slice(o, t), s += function(t, n, a) {
                                                    var r, s;
                                                    if ("math" === t.type && "text" in t && "string" == typeof t.text) return a(t.text);
                                                    if ("codexDirective" === (r = t).type && "name" in r && "string" == typeof r.name && "attributes" in r && null != r.attributes && "object" == typeof r.attributes) return function(e, t) {
                                                        if (e.name === eb.a) {
                                                            let n = (0, ac.a)(e.attributes),
                                                                a = (0, ac.b)(e.attributes),
                                                                r = null != n ? t[n] : null == a ? void 0 : t.find(e => (0, eb.l)(e) === a);
                                                            if (null == r) return "";
                                                            let s = (0, eb.i)(r);
                                                            return "hidden" === s || "block" === s ? "" : (0, eb.j)(r) ?? ""
                                                        }
                                                        return e.name === ar.a ? (0, ai.a)(e.attributes, "label") ?? "" : e.name === ar.b || e.name === ar.c ? "" : e.name === aa.a ? e.text ?? "" : null
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
                                        unitId: (0, nq.a)("assistant", t),
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
                getTurns: td,
                routeContextId: tj,
                scrollAdapter: tS,
                ensureHistory: v
            }), D[35] = tS, D[36] = td, D[37] = tj, D[38] = v, D[39] = x) : x = D[39];
            let tA = x;
            D[40] !== tA.contextId ? (_ = {
                containerRef: tr,
                contextId: tA.contextId
            }, D[40] = tA.contextId, D[41] = _) : _ = D[41], (0, tb.a)(_);
            let tP = e6 && null == eW,
                tM = eX && tP && !e8,
                tR = (0, tE.a)();
            D[42] !== Z || D[43] !== ey || D[44] !== es || D[45] !== X || D[46] !== tR ? (w = {
                conversationId: Z,
                sectionIndex: X,
                hasRenderableTurns: ey,
                isCoveredByFloatingPanel: es,
                shouldReduceMotion: tR,
                containerRef: tr
            }, D[42] = Z, D[43] = ey, D[44] = es, D[45] = X, D[46] = tR, D[47] = w) : w = D[47];
            let tO = function(e) {
                    let t, n, a, s = (0, r.c)(12),
                        {
                            conversationId: o,
                            sectionIndex: i,
                            hasRenderableTurns: l,
                            isCoveredByFloatingPanel: c,
                            shouldReduceMotion: d,
                            containerRef: u
                        } = e,
                        h = (0, sY.a)(0);
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
                                Array.from(n.querySelectorAll('[data-markdown-text-style="assistant-message"]')).some(sJ) && 0 !== n.clientWidth && (s.disconnect(), h.set(a * n.clientWidth), e = (0, s$.a)(h, 0, {
                                    duration: .3,
                                    ease: sZ.d
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
                }(w),
                tN = tP && e8,
                [tG, tL] = (0, y.useState)(null),
                [tB, tz] = (0, y.useState)(null),
                [tF, tD] = (0, y.useState)(null),
                tW = eE && tP && !ex && !e8 && !eX,
                [tH, tq] = (0, y.useState)(null);
            D[48] !== eK || D[49] !== Z || D[50] !== ey || D[51] !== eP || D[52] !== ez || D[53] !== eD ? (I = eD && !eK ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(ti.BrowserComposerDisclaimer, {
                    conversationId: Z,
                    hasUserMessage: ey,
                    isTemporaryChat: eP,
                    regulatedConnectorKindOverride: ez
                })
            }) : void 0, D[48] = eK, D[49] = Z, D[50] = ey, D[51] = eP, D[52] = ez, D[53] = eD, D[54] = I) : I = D[54];
            let tQ = I;
            D[55] !== Z || D[56] !== eg || D[57] !== ey || D[58] !== ex || D[59] !== eA || D[60] !== eP || D[61] !== ek || D[62] !== eD || D[63] !== eq ? (T = ey ? null : (0, a.jsx)(n9.a, {
                conversationId: Z,
                errorMessage: eg,
                isTemporaryChat: eP,
                isWorkConversation: ek,
                showPendingLoadingMessage: eq,
                showRequestUserInputStatus: eD && !ex && !eA
            }), D[55] = Z, D[56] = eg, D[57] = ey, D[58] = ex, D[59] = eA, D[60] = eP, D[61] = ek, D[62] = eD, D[63] = eq, D[64] = T) : T = D[64];
            let tY = T;
            D[65] !== Z || D[66] !== ek || D[67] !== eB || D[68] !== eJ ? (S = ek && null == eB && null == eJ ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(e5, {
                    conversationId: Z
                }, Z)
            }) : null, D[65] = Z, D[66] = ek, D[67] = eB, D[68] = eJ, D[69] = S) : S = D[69];
            let t$ = S;
            D[70] !== eW || D[71] !== t$ ? (j = null != eW ? (0, a.jsxs)(a.Fragment, {
                children: [t$, eW]
            }) : null, D[70] = eW, D[71] = t$, D[72] = j) : j = D[72];
            let tZ = j;
            D[73] !== en || D[74] !== tZ || D[75] !== eK || D[76] !== ee || D[77] !== et || D[78] !== V || D[79] !== Z || D[80] !== ec || D[81] !== tQ || D[82] !== tY || D[83] !== em || D[84] !== t$ || D[85] !== tG || D[86] !== eU || D[87] !== ef || D[88] !== ey || D[89] !== el || D[90] !== eX || D[91] !== ex || D[92] !== ej || D[93] !== es || D[94] !== eo || D[95] !== e8 || D[96] !== e7 || D[97] !== ei || D[98] !== eE || D[99] !== eA || D[100] !== eP || D[101] !== ek || D[102] !== eY || D[103] !== eC || D[104] !== tW || D[105] !== er || D[106] !== th || D[107] !== tu || D[108] !== e3.isHidden || D[109] !== eB || D[110] !== eJ || D[111] !== e6 || D[112] !== tN || D[113] !== tM || D[114] !== U || D[115] !== K || D[116] !== eV || D[117] !== Q ? (E = tZ ?? (e6 ? (0, a.jsxs)(rT.a.Provider, {
                value: em.at(-1) ?? null,
                children: [eo || e8 ? null : (0, a.jsx)(tx.a, {
                    onNavigate: tu
                }, Z), e8 ? null : et, (0, a.jsx)(o6, {
                    requiredSystemHints: er,
                    composerRef: V,
                    workspace: Q,
                    isInlinePreview: ei,
                    hideModelPicker: el,
                    disableAutoFocus: ec,
                    conversationId: ee,
                    isImageEditComposer: e7,
                    disabled: ex,
                    readOnlyPlaceholder: eC,
                    awaitingGptContinuation: eK,
                    headerContent: t$,
                    aboveComposerContent: (0, a.jsxs)(a.Fragment, {
                        children: [tW ? (0, a.jsx)("div", {
                            ref: tD,
                            className: "empty:hidden"
                        }) : null, en, !ej && !ef && ey && !eK && eV, eX ? null : eU, tN && tY]
                    }),
                    isFullscreenComposer: e8,
                    isHidden: e3.isHidden,
                    trackReadState: U && !es,
                    trackShownImpressions: K && !es,
                    isSharedConversation: eE,
                    isSubmitDisabled: eA,
                    followupPortalTarget: tG,
                    takeoverDisclaimerRef: tq,
                    showConversationFollowups: null == eB && null == eJ && !eP && !ek && !e8,
                    isTemporaryChat: eP,
                    isWorkConversation: ek,
                    responseSpacerState: th,
                    renderTranscript: e => {
                        let {
                            isVisible: t
                        } = e;
                        return (0, a.jsx)(aE, {
                            entries: em,
                            historyLoader: eP || null != eB || null != eJ ? null : (0, a.jsx)(sW.a, {
                                conversationId: Z
                            }),
                            isVisible: t
                        })
                    },
                    showVoiceStage: !tM,
                    voiceDisclaimer: eX && !tM ? tQ : void 0,
                    onSubmitAccepted: e => {
                        tC(0), eY?.(e)
                    }
                }, `${ee}:${e7?"image-edit":"chat"}`)]
            }) : t$), D[73] = en, D[74] = tZ, D[75] = eK, D[76] = ee, D[77] = et, D[78] = V, D[79] = Z, D[80] = ec, D[81] = tQ, D[82] = tY, D[83] = em, D[84] = t$, D[85] = tG, D[86] = eU, D[87] = ef, D[88] = ey, D[89] = el, D[90] = eX, D[91] = ex, D[92] = ej, D[93] = es, D[94] = eo, D[95] = e8, D[96] = e7, D[97] = ei, D[98] = eE, D[99] = eA, D[100] = eP, D[101] = ek, D[102] = eY, D[103] = eC, D[104] = tW, D[105] = er, D[106] = th, D[107] = tu, D[108] = e3.isHidden, D[109] = eB, D[110] = eJ, D[111] = e6, D[112] = tN, D[113] = tM, D[114] = U, D[115] = K, D[116] = eV, D[117] = Q, D[118] = E) : E = D[118];
            let tX = E,
                t0 = es || void 0;
            D[119] !== Z || D[120] !== es || D[121] !== e8 || D[122] !== U ? (A = !U || e8 || es ? null : (0, a.jsx)(rI.a, {
                conversationId: Z
            }), D[119] = Z, D[120] = es, D[121] = e8, D[122] = U, D[123] = A) : A = D[123], D[124] !== eW || D[125] !== Z || D[126] !== ei || D[127] !== eB || D[128] !== eJ ? (P = ei || null != eB || null != eJ || null != eW ? null : (0, a.jsx)(re, {
                conversationId: Z
            }, Z), D[124] = eW, D[125] = Z, D[126] = ei, D[127] = eB, D[128] = eJ, D[129] = P) : P = D[129], D[130] !== Z || D[131] !== ej || D[132] !== eP || D[133] !== eB || D[134] !== eJ ? (M = ej || eP || null != eB || null != eJ ? null : (0, a.jsx)(sH, {
                conversationId: Z
            }), D[130] = Z, D[131] = ej, D[132] = eP, D[133] = eB, D[134] = eJ, D[135] = M) : M = D[135], D[136] !== Z || D[137] !== em || D[138] !== tl || D[139] !== eT || D[140] !== ej || D[141] !== ei || D[142] !== tu || D[143] !== eB || D[144] !== eJ || D[145] !== ts ? (k = ei || ej || null != eB || null != eJ ? null : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(q, {
                    conversationId: Z,
                    entries: em,
                    turnListApi: ts
                }), (0, a.jsx)(tJ.a, {
                    ready: !eT && tl && null != ts && em.length > 0,
                    onNavigate: tu
                })]
            }), D[136] = Z, D[137] = em, D[138] = tl, D[139] = eT, D[140] = ej, D[141] = ei, D[142] = tu, D[143] = eB, D[144] = eJ, D[145] = ts, D[146] = k) : k = D[146], D[147] !== eW || D[148] !== tn || D[149] !== ee || D[150] !== $ || D[151] !== tt || D[152] !== Z || D[153] !== ep || D[154] !== tA || D[155] !== tQ || D[156] !== tY || D[157] !== em || D[158] !== tX || D[159] !== t_ || D[160] !== ef || D[161] !== ey || D[162] !== ea || D[163] !== eN || D[164] !== tf || D[165] !== eX || D[166] !== e0 || D[167] !== ex || D[168] !== eT || D[169] !== ej || D[170] !== es || D[171] !== eo || D[172] !== e8 || D[173] !== ei || D[174] !== eE || D[175] !== eP || D[176] !== eM || D[177] !== ek || D[178] !== e_ || D[179] !== eQ || D[180] !== ev || D[181] !== eR || D[182] !== H || D[183] !== tW || D[184] !== th || D[185] !== e3.isChatPaneHidden || D[186] !== eZ || D[187] !== eu || D[188] !== tT || D[189] !== tO || D[190] !== eB || D[191] !== eJ || D[192] !== Y || D[193] !== tR || D[194] !== eD || D[195] !== e6 || D[196] !== ta || D[197] !== tN || D[198] !== tM || D[199] !== tH || D[200] !== ed || D[201] !== ts || D[202] !== Q ? (R = Q?.fullscreenContent != null ? (0, a.jsxs)(a.Fragment, {
                children: [!Y && Q.fullscreenContent, tX]
            }) : (0, a.jsxs)(t2.a, {
                viewportOverlay: eo || ei || ek || null != eB || null != eJ || null != eW || es || e8 ? null : (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(rO, {
                        conversationId: Z
                    }, Z)
                }),
                hideTranscript: eo,
                active: !ej && (!ey || null != ts),
                presentation: ed ?? (ei ? "compact" : "default"),
                contentX: $,
                composerFade: !1,
                footerPlacement: tn ? "home" : "bottom",
                initialOffset: tf,
                scrollOrigin: eu,
                onScroll: t_,
                responseSpacer: th,
                scrollToBottomButton: !e6 || e8 || tM ? void 0 : {
                    isWorking: eM
                },
                threadEndContent: eX ? void 0 : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        ref: tL,
                        className: t1.a
                    }), null == tH ? tQ : (0, b.createPortal)(tQ, tH)]
                }),
                footerLeadingContent: tM ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)("div", {
                            className: t1.a,
                            children: (0, a.jsx)(tU.a, {})
                        })
                    }), (0, a.jsx)("div", {
                        className: "overflow-hidden electron:[scrollbar-gutter:stable_both-edges]",
                        children: tQ
                    })]
                }) : void 0,
                footer: tX,
                children: [ei || ej || null != eB ? null : (0, a.jsx)(n4, {
                    conversationId: Z,
                    entries: em,
                    isConversationFetching: eT,
                    turnListApi: ts
                }), (0, a.jsxs)(l.a.div, {
                    ref: tr,
                    style: {
                        x: tO
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
                        fallback: (0, a.jsx)(tk.LoadingPage, {
                            debugName: "ChatGptConversationPage",
                            fillParent: !0
                        }),
                        children: [ei || ej ? null : (0, a.jsx)(tv.a, {
                            conversationSource: tA
                        }), es || e3.isChatPaneHidden || eP || null != eB || null != eJ ? null : ea ?? (0, a.jsx)(sW.a, {
                            conversationId: Z
                        }), (0, a.jsx)(oR.b, {
                            conversationId: Z
                        }), (null != eB || null != eJ) && ey ? (0, a.jsx)(ou, {
                            sharedConversationId: eB
                        }) : null, null == eR ? null : (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)("div", {
                                className: t1.a,
                                children: eR
                            })
                        }), null == tt || ej ? null : (0, a.jsx)(nG.a, {
                            conversationId: Z,
                            branchSource: {
                                conversationId: tt.metadata.source_conversation_id,
                                title: tt.metadata.source_conversation_title,
                                gizmoId: tt.metadata.source_conversation_gizmo_id,
                                ownerId: tt.metadata.source_conversation_owner_id
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
                            children: (0, a.jsx)(tk.LoadingPage, {
                                debugName: "ChatGptConversationPage",
                                fillParent: !0
                            })
                        }) : ey ? (0, a.jsxs)(sO.a, {
                            value: tT,
                            children: [ei || es ? null : (0, a.jsxs)(a.Fragment, {
                                children: [eP || null != eB || null != eJ ? null : (0, a.jsx)(a.Fragment, {
                                    children: (0, a.jsx)(eH, {
                                        conversationId: Z
                                    })
                                }), (0, a.jsx)(eF, {
                                    entries: em,
                                    title: H,
                                    TurnRowComponent: aj
                                })]
                            }), (0, a.jsx)(aH, {
                                conversationId: Z,
                                entries: em,
                                onApiChange: to,
                                onVisibleContentReady: () => tc(!0),
                                responseSpacerState: th
                            }), tW ? (0, a.jsx)("div", {
                                ref: tz,
                                className: "empty:hidden"
                            }) : null]
                        }) : ta && null == tt && (0, a.jsx)("div", {
                            className: "rounded-xl border border-default bg-surface-secondary/92 p-4 text-sm text-codex-description",
                            children: (0, a.jsx)(C.a, {
                                id: "chatgptConversations.emptyConversation",
                                defaultMessage: "No renderable ChatGPT messages were found in this conversation",
                                description: "Empty state when a ChatGPT conversation has no user or assistant text messages"
                            })
                        }), !tN && tY, (0, a.jsx)(a7.a, {
                            conversationId: ee,
                            isWorkConversation: ek
                        }), eD && !ex ? (0, a.jsx)(s4, {
                            conversationId: Z,
                            moreDetailsEnabled: e_,
                            onAddSelectedText: eQ
                        }) : null]
                    }), ei ? null : (0, a.jsx)(at.a, {
                        initialPlacementKey: eN,
                        isActiveVoiceConversation: eX && e0,
                        isLoadingHistory: ej,
                        latestUserTurnKey: em.findLast(o1)?.turnKey,
                        onResponseSpacerStateChange: tp
                    }), tM ? (0, a.jsx)(l.a.div, {
                        className: "pointer-events-none shrink-0",
                        "aria-hidden": !0,
                        initial: {
                            height: 0
                        },
                        animate: {
                            height: 112
                        },
                        transition: tR ? tV.c : tV.b
                    }) : null]
                })]
            }), D[147] = eW, D[148] = tn, D[149] = ee, D[150] = $, D[151] = tt, D[152] = Z, D[153] = ep, D[154] = tA, D[155] = tQ, D[156] = tY, D[157] = em, D[158] = tX, D[159] = t_, D[160] = ef, D[161] = ey, D[162] = ea, D[163] = eN, D[164] = tf, D[165] = eX, D[166] = e0, D[167] = ex, D[168] = eT, D[169] = ej, D[170] = es, D[171] = eo, D[172] = e8, D[173] = ei, D[174] = eE, D[175] = eP, D[176] = eM, D[177] = ek, D[178] = e_, D[179] = eQ, D[180] = ev, D[181] = eR, D[182] = H, D[183] = tW, D[184] = th, D[185] = e3.isChatPaneHidden, D[186] = eZ, D[187] = eu, D[188] = tT, D[189] = tO, D[190] = eB, D[191] = eJ, D[192] = Y, D[193] = tR, D[194] = eD, D[195] = e6, D[196] = ta, D[197] = tN, D[198] = tM, D[199] = tH, D[200] = ed, D[201] = ts, D[202] = Q, D[203] = R) : R = D[203], D[204] !== es || D[205] !== t0 || D[206] !== A || D[207] !== P || D[208] !== M || D[209] !== k || D[210] !== R ? (N = (0, a.jsxs)("div", {
                className: "contents",
                "aria-hidden": t0,
                inert: es,
                children: [A, P, M, k, R]
            }), D[204] = es, D[205] = t0, D[206] = A, D[207] = P, D[208] = M, D[209] = k, D[210] = R, D[211] = N) : N = D[211];
            let t3 = N;
            return D[212] !== tF || D[213] !== tB || D[214] !== tW ? (G = tW ? {
                aboveComposer: tF,
                belowMessage: tB
            } : null, D[212] = tF, D[213] = tB, D[214] = tW, D[215] = G) : G = D[215], D[216] !== t3 ? (L = (0, a.jsx)(tm.a, {
                children: t3
            }), D[216] = t3, D[217] = L) : L = D[217], D[218] !== G || D[219] !== L ? (B = (0, a.jsx)(aL.a, {
                value: G,
                children: L
            }), D[218] = G, D[219] = L, D[220] = B) : B = D[220], B
        }

        function o1(e) {
            let {
                turn: t
            } = e;
            return t.items.some(o2)
        }

        function o2(e) {
            return "user-message" === e.type
        }

        function o3(e) {
            let {
                turn: t
            } = e;
            return t.items.some(o4)
        }

        function o4(e) {
            return "assistant-message" === e.type || "generated-image" === e.type && null != e.src
        }

        function o6(e) {
            let t, n, s, o = (0, r.c)(11),
                i = (0, y.useContext)(td.a);
            if (null == i || i.conversationId !== e.conversationId) {
                let t;
                return o[0] !== e ? (t = (0, a.jsx)(o5, {
                    ...e
                }), o[0] = e, o[1] = t) : t = o[1], t
            }
            o[2] !== e.conversationId || o[3] !== e.isImageEditComposer ? (t = e.isImageEditComposer ? {
                conversationId: e.conversationId,
                surface: "image-edit"
            } : e.conversationId, o[2] = e.conversationId, o[3] = e.isImageEditComposer, o[4] = t) : t = o[4];
            let l = !e.isWorkConversation;
            return o[5] !== e ? (n = t => (0, a.jsx)(o5, {
                ...e,
                initialController: t
            }), o[5] = e, o[6] = n) : n = o[6], o[7] !== t || o[8] !== l || o[9] !== n ? (s = (0, a.jsx)(sk, {
                draftKey: t,
                enableInlineSystemHints: l,
                children: n
            }), o[7] = t, o[8] = l, o[9] = n, o[10] = s) : s = o[10], s
        }

        function o5(e) {
            let t, n, s, o, i, l, c, d, u, h, m, g, f, v, b, C, w, I, T, S = (0, r.c)(81),
                {
                    composerRef: j,
                    initialController: E,
                    ...A
                } = e,
                P = (0, p.y)(F.a),
                O = (0, p.x)(R.b, A.isTemporaryChat),
                {
                    isFullscreenComposer: N
                } = A,
                G = (0, x.a)(),
                {
                    state: L
                } = (0, _.W)(),
                B = (0, p.x)(oq, A.conversationId),
                D = (0, p.x)(z.R, A.conversationId),
                W = !(!A.disabled && !A.isSharedConversation && !A.isWorkConversation && !A.isTemporaryChat && !A.isImageEditComposer && (0, te.a)(D)) ? null : D,
                H = (0, p.x)(null == A.requiredSystemHints ? to : null, W);
            S[0] !== H || S[1] !== A.requiredSystemHints ? (t = A.requiredSystemHints ?? (null == H ? void 0 : [H]), S[0] = H, S[1] = A.requiredSystemHints, S[2] = t) : t = S[2];
            let q = t;
            S[3] !== H || S[4] !== A.conversationId || S[5] !== P ? (n = () => {
                if (null != H) {
                    var e;
                    let t, n;
                    return e = A.conversationId, t = (0, tt.b)(P, e, [H]), n = (0, e9.h)(P, {
                        draftKey: e,
                        isTemporaryChat: !1
                    }), () => {
                        if (t(), P.get(tt.a, e).includes(H)) return;
                        let a = P.get(e7.v, e).filter(e => e !== H && e !== `plugin:${e8.d}`);
                        (0, e7.R)(P, e, a, n)
                    }
                }
            }, s = [P, A.conversationId, H], S[3] = H, S[4] = A.conversationId, S[5] = P, S[6] = n, S[7] = s) : (n = S[6], s = S[7]), (0, y.useEffect)(n, s);
            let U = (0, p.x)(nl.c, A.conversationId);
            S[8] !== U || S[9] !== A.isSharedConversation || S[10] !== A.isWorkConversation || S[11] !== D ? (o = !A.isSharedConversation && !A.isWorkConversation && !(0, te.a)(D) && !U, S[8] = U, S[9] = A.isSharedConversation, S[10] = A.isWorkConversation, S[11] = D, S[12] = o) : o = S[12];
            let K = o,
                V = K && !A.disabled && !A.isSubmitDisabled && !A.isImageEditComposer,
                Q = K ? B : void 0;
            S[13] !== A.conversationId || S[14] !== A.isImageEditComposer ? (i = A.isImageEditComposer ? {
                conversationId: A.conversationId,
                surface: "image-edit"
            } : A.conversationId, S[13] = A.conversationId, S[14] = A.isImageEditComposer, S[15] = i) : i = S[15];
            let Y = i;
            S[16] !== Y || S[17] !== E || S[18] !== A.conversationId ? (l = {
                composerController: E,
                conversationId: A.conversationId,
                draftKey: Y
            }, S[16] = Y, S[17] = E, S[18] = A.conversationId, S[19] = l) : l = S[19];
            let $ = (0, oN.a)(l),
                J = (0, y.useContext)(td.a),
                X = (0, y.useRef)(!1);
            S[20] !== Y || S[21] !== J || S[22] !== E || S[23] !== A.isTemporaryChat || S[24] !== P ? (c = e => {
                null == e || null == E || X.current || (X.current = !0, (0, e7.S)(P, Y, E.getPersistedText(), {
                    isTemporaryChat: A.isTemporaryChat
                }), J?.onAdopt())
            }, S[20] = Y, S[21] = J, S[22] = E, S[23] = A.isTemporaryChat, S[24] = P, S[25] = c) : c = S[25];
            let ee = (0, t9.a)(c);
            S[26] !== ee || S[27] !== j ? (d = (0, t8.a)(j, ee), S[26] = ee, S[27] = j, S[28] = d) : d = S[28];
            let et = d,
                en = (0, y.useContext)(rT.a),
                ea = (0, p.w)(sj.a, A.conversationId),
                er = (0, p.x)(z.cb, A.conversationId),
                es = (0, p.x)(z._, A.conversationId),
                eo = (0, p.x)(e7.i, A.conversationId);
            S[29] !== es ? (u = (0, z.zb)(es), S[29] = es, S[30] = u) : u = S[30];
            let ei = u,
                el = (0, p.z)(M.j.activeTab$);
            if (S[31] !== el || S[32] !== N || S[33] !== ei || S[34] !== en) {
                let e = en?.turn.items.flatMap(ie);
                h = N && el?.tabType.kind === tP.a && "generatedImages" in el.props && null != el.props.generatedImages && !ei && null != en && "in_progress" !== en.turn.status && !en.turn.hasPendingAssistantReply && !en.showPendingLoadingMessage && !e?.some(o9) && (null != en.errorMessage || e?.some(o7)) ? en.turn.messageIds.at(-1) ?? en.turnKey : null, S[31] = el, S[32] = N, S[33] = ei, S[34] = en, S[35] = h
            } else h = S[35];
            let ec = h,
                ed = (0, y.useRef)(null);
            S[36] !== ec || S[37] !== P ? (m = () => {
                null != ec && ec !== ed.current && (ed.current = ec, P.set(tI.a, "expanded"))
            }, g = [ec, P], S[36] = ec, S[37] = P, S[38] = m, S[39] = g) : (m = S[38], g = S[39]), (0, y.useEffect)(m, g);
            let eu = (0, p.w)(sD.a, N ? A.conversationId : null);
            S[40] !== H || S[41] !== W || S[42] !== $ || S[43] !== V || S[44] !== Y || S[45] !== G || S[46] !== N || S[47] !== et || S[48] !== O || S[49] !== A || S[50] !== q || S[51] !== P || S[52] !== Q || S[53] !== L?.libraryFileCreation || S[54] !== D ? (f = e => (0, a.jsxs)(tA.a, {
                children: [N && A.trackReadState && !e?.isHidden ? (0, a.jsx)(rI.a, {
                    conversationId: A.conversationId,
                    isTranscriptVisible: e?.isCompact === !1 && !e.isMinimized
                }) : null, A.aboveComposerContent, (0, a.jsx)(tl.a, {
                    children: (0, a.jsx)(nB.a, {
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
                        requiredSystemHints: q,
                        hideSystemHints: null != A.requiredSystemHints,
                        getSubmissionGuard: null != H ? () => () => P.get(z.R, A.conversationId) === D && P.get(to, W) === H : void 0,
                        draftKey: Y,
                        onPromptChange: O,
                        selectedCustomGpt: Q,
                        targetGizmoId: Q?.id,
                        onCustomGptChange: V ? e => {
                            P.set(oq, A.conversationId, e)
                        } : void 0,
                        onCustomAgentSelected: V ? () => {
                            P.set(oq, A.conversationId, null)
                        } : void 0,
                        disableDraftPrepare: A.isSubmitDisabled || A.isSharedConversation,
                        disableSubmit: A.disabled || A.isSubmitDisabled,
                        voiceInputDisabled: A.disabled,
                        aboveComposerHeaderContent: A.voiceDisclaimer,
                        getExtraDeveloperInstructions: !A.isInlinePreview && L?.libraryFileCreation && !A.isTemporaryChat ? o8 : void 0,
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
            }), S[40] = H, S[41] = W, S[42] = $, S[43] = V, S[44] = Y, S[45] = G, S[46] = N, S[47] = et, S[48] = O, S[49] = A, S[50] = q, S[51] = P, S[52] = Q, S[53] = L?.libraryFileCreation, S[54] = D, S[55] = f) : f = S[55];
            let eh = f;
            S[56] !== P ? (v = () => {
                (0, ty.K)(P, "conversation")
            }, b = () => {
                (0, ty.K)(P, "conversation")
            }, S[56] = P, S[57] = v, S[58] = b) : (v = S[57], b = S[58]);
            let ep = !A.isInlinePreview && !A.disabled && !A.isSubmitDisabled;
            S[59] !== $ || S[60] !== ep ? (C = (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(rA, {
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
        async function o8() {
            return [tM.a]
        }

        function o7(e) {
            return "assistant-message" === e.type && "" !== e.content.trim()
        }

        function o9(e) {
            return "generated-image" === e.type || "chatgpt-delayed-image-gen" === e.type
        }

        function ie(e) {
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
                let t, n, u, h, p, m, g, f, v, y, b, x, C, _ = (0, r.c)(45),
                    {
                        initialPlacementKey: w,
                        isActiveVoiceConversation: I,
                        isLoadingHistory: T,
                        latestUserTurnKey: S,
                        onResponseSpacerStateChange: j
                    } = e,
                    E = void 0 !== I && I,
                    A = void 0 !== T && T,
                    P = (0, o.k)();
                _[0] !== E || _[1] !== P ? (t = E && (0, o.f)(P, "2825211774").get("voice_orb_transcript_clearance_enabled", !1), _[0] = E, _[1] = P, _[2] = t) : t = _[2];
                let M = t,
                    k = (0, s.useRef)(S),
                    R = (0, s.useRef)(A),
                    O = (0, s.useRef)(null),
                    N = (0, s.useRef)(null),
                    G = (0, c.b)();
                _[3] !== G ? (n = () => new l.a(G), _[3] = G, _[4] = n) : n = _[4];
                let [L] = (0, s.useState)(n), {
                    clear: B,
                    consumeGrowth: z,
                    getHeightPx: F,
                    place: D,
                    prepareThreadEndContent: W
                } = L, {
                    addScrollListener: H,
                    getScrollElement: q
                } = G;
                _[5] !== B || _[6] !== G ? (u = () => {
                    B(), G.scrollToBottom()
                }, _[5] = B, _[6] = G, _[7] = u) : u = _[7];
                let U = (0, d.a)(u);
                _[8] === Symbol.for("react.memo_cache_sentinel") ? (h = (e, t) => {
                    O.current = {
                        turnKey: e,
                        element: t
                    }, N.current?.(e, t)
                }, _[8] = h) : h = _[8];
                let K = (0, d.a)(h);
                _[9] === Symbol.for("react.memo_cache_sentinel") ? (p = e => {
                    N.current = e;
                    let t = O.current;
                    return null != t && e(t.turnKey, t.element), () => {
                        N.current = null
                    }
                }, _[9] = p) : p = _[9];
                let V = (0, d.a)(p);
                _[10] !== q || _[11] !== S || _[12] !== D || _[13] !== M ? (m = () => {
                    let e = q();
                    if (null == e || 0 === e.clientHeight) return !1;
                    if (M && null != S) {
                        var t, n;
                        let a, r = (t = e, n = S, a = t.querySelector(`[data-turn-key="${CSS.escape(n)}"]`), a?.querySelector("[data-user-message-bubble]") ?? a);
                        if (null == r) return !1;
                        D(r)
                    } else D();
                    return !0
                }, _[10] = q, _[11] = S, _[12] = D, _[13] = M, _[14] = m) : m = _[14];
                let Q = (0, s.useEffectEvent)(m);
                return _[15] !== B || _[16] !== z || _[17] !== F || _[18] !== j || _[19] !== K || _[20] !== D || _[21] !== W || _[22] !== U || _[23] !== M ? (f = () => (j({
                    voiceAutoScrollEnabled: M,
                    clear: B,
                    consumeGrowth: z,
                    getHeightPx: F,
                    onTurnLayoutReady: K,
                    place: D,
                    prepareThreadEndContent: W,
                    scrollToBottom: U
                }), () => {
                    j(null)
                }), g = [B, z, F, j, K, D, W, U, M], _[15] = B, _[16] = z, _[17] = F, _[18] = j, _[19] = K, _[20] = D, _[21] = W, _[22] = U, _[23] = M, _[24] = g, _[25] = f) : (g = _[24], f = _[25]), (0, s.useLayoutEffect)(f, g), _[26] !== q || _[27] !== A || _[28] !== S || _[29] !== D || _[30] !== V || _[31] !== M ? (v = () => {
                    let e = k.current,
                        t = R.current;
                    if (k.current = S, R.current = A, M && !A && !t && null != S && S !== e) return function(e, t, n, a) {
                        let r, s = new AbortController,
                            o = null,
                            i = null,
                            l = !1,
                            c = () => {
                                l = !0, null != o && (cancelAnimationFrame(o), o = null), s.abort(), r?.()
                            },
                            d = t();
                        for (let e of ["wheel", "touchstart", "pointerdown", "keydown"]) d?.addEventListener(e, c, {
                            capture: !0,
                            passive: !0,
                            signal: s.signal
                        });
                        return r = a((a, r) => {
                            l || a !== e || (i = r, null == o && (o = requestAnimationFrame(() => {
                                o = null;
                                let e = t(),
                                    a = i?.querySelector("[data-user-message-bubble]") ?? i;
                                null != e && 0 !== e.clientHeight && null != a && e.contains(a) && !(a.getBoundingClientRect().height <= 0) && (c(), n(a))
                            })))
                        }), c
                    }(S, q, D, V)
                }, y = [q, A, S, D, V, M], _[26] = q, _[27] = A, _[28] = S, _[29] = D, _[30] = V, _[31] = M, _[32] = v, _[33] = y) : (v = _[32], y = _[33]), (0, s.useLayoutEffect)(v, y), _[34] !== H || _[35] !== q || _[36] !== w || _[37] !== Q ? (b = () => {
                    if (null == w) return;
                    let e = !1;
                    return H(() => {
                        e || null == q() || (e = !0, e = Q())
                    })
                }, _[34] = H, _[35] = q, _[36] = w, _[37] = Q, _[38] = b) : b = _[38], _[39] !== H || _[40] !== q || _[41] !== w ? (x = [H, q, w], _[39] = H, _[40] = q, _[41] = w, _[42] = x) : x = _[42], (0, s.useLayoutEffect)(b, x), _[43] !== L ? (C = (0, a.jsx)(i.a, {
                    controller: L
                }), _[43] = L, _[44] = C) : C = _[44], C
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
            h = n("dQRk"),
            p = n("jAnS");
        let m = (0, s.d)(i.a, (e, t) => {
            let {
                get: n
            } = t, a = n(h.j, e);
            return null != a ? a : n(h.D, e) || n(l.i, e) || null != n(l.y, e) ? void 0 : null
        });
        n.d(t, {}, {
            a: function(e) {
                let t, n, l, g, f, v, y, b = (0, r.c)(33),
                    {
                        children: x,
                        conversationId: C,
                        routePattern: _,
                        homePath: w
                    } = e,
                    I = void 0 === w ? "/" : w,
                    T = (0, s.y)(i.a),
                    {
                        hash: S,
                        key: j,
                        pathname: E,
                        search: A,
                        state: P
                    } = (0, o.W)(),
                    {
                        gizmoId: M
                    } = (0, o.ab)(),
                    k = (0, s.x)(m, C),
                    R = (0, s.x)(h.D, C),
                    O = (0, s.x)(h.R, C),
                    N = R ? O : M;
                b[0] !== N ? (t = null != N && (0, u.a)(N) ? N : null, b[0] = N, b[1] = t) : t = b[1], b[2] === Symbol.for("react.memo_cache_sentinel") ? (n = {
                    enabled: !1
                }, b[2] = n) : n = b[2];
                let {
                    data: G
                } = (0, s.x)(d.b, t, n);
                b[3] !== N ? (l = null == N || (0, u.a)(N) ? null : N, b[3] = N, b[4] = l) : l = b[4], b[5] === Symbol.for("react.memo_cache_sentinel") ? (g = {
                    enabled: !1
                }, b[5] = g) : g = b[5];
                let {
                    data: L
                } = (0, s.x)(c.b, l, g);
                if (null === k || (0, p.h)(A) && null != k && !R) {
                    let e;
                    return b[6] !== I || b[7] !== A ? (e = (0, a.jsx)(o.k, {
                        replace: !0,
                        to: {
                            pathname: I,
                            search: A
                        }
                    }), b[6] = I, b[7] = A, b[8] = e) : e = b[8], e
                }
                b[9] !== C || b[10] !== L?.gizmo || b[11] !== N || b[12] !== G?.gizmo || b[13] !== k || b[14] !== _ ? (f = null != _ ? (0, o.B)(_, {
                    conversationId: k ?? C
                }) : (0, p.c)(k ?? C, {
                    gizmoId: G?.gizmo.short_url ?? L?.gizmo.short_url ?? N
                }), b[9] = C, b[10] = L?.gizmo, b[11] = N, b[12] = G?.gizmo, b[13] = k, b[14] = _, b[15] = f) : f = b[15];
                let B = f;
                if (b[16] !== C || b[17] !== B || b[18] !== S || b[19] !== j || b[20] !== E || b[21] !== k || b[22] !== T || b[23] !== A || b[24] !== P) {
                    let e = new URLSearchParams(A),
                        t = null != k && e.has("mfr"),
                        n = T.get(h.x, C),
                        r = P;
                    if (t) {
                        let t, n;
                        if (e.delete("mfr"), b[26] !== P ? (t = P ?? {}, b[26] = P, b[27] = t) : t = b[27], b[28] !== t) {
                            let {
                                modelFirstLanding: e,
                                modelFirstFallback: a,
                                ...r
                            } = t;
                            n = r, b[28] = t, b[29] = n
                        } else n = b[29];
                        r = n
                    }
                    v = E !== B || t ? (0, a.jsx)(o.k, {
                        replace: !0,
                        state: "tpp" === n || "flora" === n ? {
                            ...r,
                            workTurnVisit: (0, p.f)(T, j, P?.workTurnVisit)
                        } : r,
                        to: {
                            hash: t ? "" : S,
                            pathname: B,
                            search: t ? e.toString() : A
                        }
                    }) : null, b[16] = C, b[17] = B, b[18] = S, b[19] = j, b[20] = E, b[21] = k, b[22] = T, b[23] = A, b[24] = P, b[25] = v
                } else v = b[25];
                return b[30] !== x || b[31] !== v ? (y = (0, a.jsxs)(a.Fragment, {
                    children: [v, x]
                }), b[30] = x, b[31] = v, b[32] = y) : y = b[32], y
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
    aEnb: (function(e, t, n) {
        n.d(t, {
            ChatGptGizmoHeader: () => L
        });
        var a = n("ABep"),
            r = n("QosV"),
            s = n("mBJV"),
            o = n("DNYL"),
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
            C = n("ECDL"),
            _ = n("M33P"),
            w = e => (0, a.jsxs)("svg", {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20",
                fill: "currentColor",
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
                children: [(0, a.jsx)("path", {
                    d: "M5.14518 8.20723C4.81869 8.30403 4.52965 8.56906 4.36686 8.94649C4.16207 9.42187 4.22381 9.91162 4.53873 10.2268L9.77311 15.4611L9.89908 15.5676C10.2102 15.7875 10.6375 15.8122 11.0534 15.633C11.4312 15.4701 11.6961 15.1806 11.7926 14.8537L12.7868 15.8488C12.4904 16.305 12.0507 16.6517 11.5797 16.8547C10.7869 17.1963 9.76213 17.1946 8.98502 16.5412L8.83268 16.4016L6.68521 14.2541L2.97037 17.9709C2.7107 18.2302 2.28855 18.2303 2.02896 17.9709C1.76958 17.7113 1.7697 17.2892 2.02896 17.0295L5.74479 13.3137L3.5983 11.1672C2.80696 10.3756 2.78071 9.26596 3.14518 8.42012C3.34827 7.94906 3.6947 7.50849 4.15104 7.21211L5.14518 8.20723Z"
                }), (0, a.jsx)("path", {
                    d: "M17.1364 16.1965C17.3959 16.4562 17.396 16.8773 17.1364 17.1369C16.8767 17.3964 16.4556 17.3964 16.196 17.1369L17.1364 16.1965Z"
                }), (0, a.jsx)("path", {
                    d: "M2.86197 2.8625C3.08913 2.63535 3.44079 2.60732 3.69889 2.77754L3.80338 2.8625L17.1364 16.1965L16.6657 16.6662L16.196 17.1369L2.86197 3.80391L2.77701 3.69942C2.60677 3.44138 2.63494 3.08969 2.86197 2.8625Z"
                }), (0, a.jsx)("path", {
                    d: "M10.9372 2.70723C11.8014 1.63068 13.4235 1.53079 14.4137 2.52071L17.4792 5.58614L17.5719 5.68379C18.4618 6.68016 18.3344 8.22636 17.2926 9.0627L17.1852 9.14375L14.2799 11.218L13.3268 10.2648L16.4118 8.06172L16.5016 7.98946C16.8967 7.63429 16.9467 7.02804 16.6159 6.6125L16.5387 6.52657L13.4733 3.46114C13.0597 3.04787 12.391 3.07483 12.0104 3.49825L11.9381 3.58809L9.73502 6.67208L8.78092 5.71895L10.8561 2.81465L10.9372 2.70723Z"
                })]
            }),
            I = n("yGJW"),
            T = n("gBBC"),
            S = n("OWtl"),
            j = n("hZax"),
            E = n("JYRT"),
            A = n("wwvo"),
            P = n("wrCb"),
            M = n("H7Nt"),
            k = n("vzxm"),
            R = n("jAnS"),
            O = n("fmMy"),
            N = n("dVzo");
        let G = (0, y.a)(async () => (await Promise.all([n.e(680612), n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(480171), n.e(716164), n.e(74952)]).then(n.bind(n, "eZlv"))).GptHeaderAboutDialog);

        function L(e) {
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
            } = (0, i.x)(A.b, t);
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

        function B(e) {
            let t, n, y, L, B, z, F, D, W, H, q, U, K, V, Q, Y, $, Z, J, X, ee, et = (0, r.c)(60),
                {
                    gizmo: en
                } = e,
                ea = (0, i.y)(S.a),
                er = (0, c.a)(),
                {
                    search: es
                } = (0, u.W)(),
                eo = (0, u.Y)(),
                [ei, el] = (0, l.useState)(!1),
                ec = (0, j.h)("2160578039"),
                ed = (0, i.x)(E.a, "2513446768"),
                eu = ec && "gpt" === en.gizmo.gizmo_type && null != en.gizmo.migrated_plugin_id;
            et[0] !== ed ? (t = ed?.get("disable_gpt_updates", !1), et[0] = ed, et[1] = t) : t = et[1];
            let eh = t,
                ep = en.gizmo.current_user_permission?.can_write && !eu && !eh,
                {
                    data: em
                } = (0, i.z)(A.c);
            et[2] !== en.gizmo.id || et[3] !== em ? (n = em?.some(e => {
                let {
                    item: t
                } = e;
                return t.gizmo.id === en.gizmo.id
            }), et[2] = en.gizmo.id, et[3] = em, et[4] = n) : n = et[4];
            let eg = n;
            et[5] === Symbol.for("react.memo_cache_sentinel") ? (y = (0, P.a)("/gpts/editor"), et[5] = y) : y = et[5];
            let ef = `${y}/${encodeURIComponent(en.gizmo.id)}`;
            et[6] !== en.gizmo.id || et[7] !== en.gizmo.short_url ? (L = en.gizmo.short_url?.trim() || en.gizmo.id, et[6] = en.gizmo.id, et[7] = en.gizmo.short_url, et[8] = L) : L = et[8], et[9] !== L ? (B = (0, k.c)(L), et[9] = L, et[10] = B) : B = et[10], et[11] !== es ? (z = (0, R.e)("", (0, R.h)(es)), et[11] = es, et[12] = z) : z = et[12];
            let ev = `${B}${z}`;
            et[13] !== er ? (F = er.formatMessage({
                id: "chatgptConversations.customGpt.actionsMenu",
                defaultMessage: "GPT actions",
                description: "Accessible label for the compact overflow menu containing actions for the current custom GPT in Codex Desktop"
            }), et[13] = er, et[14] = F) : F = et[14];
            let ey = F;
            et[15] === Symbol.for("react.memo_cache_sentinel") ? (D = (0, a.jsx)(_.a, {
                className: "icon-sm"
            }), et[15] = D) : D = et[15], et[16] !== ey ? (W = (0, a.jsx)(m.a, {
                "aria-label": ey,
                color: "ghost",
                size: "icon",
                children: D
            }), et[16] = ey, et[17] = W) : W = et[17], et[18] !== ey || et[19] !== ei || et[20] !== W ? (H = (0, a.jsx)(o.a, {
                content: ey,
                disabled: ei,
                children: W
            }), et[18] = ey, et[19] = ei, et[20] = W, et[21] = H) : H = et[21], et[22] !== en.gizmo.gizmo_type || et[23] !== en.gizmo.id || et[24] !== eo || et[25] !== ev || et[26] !== ea ? (q = "gpt" === en.gizmo.gizmo_type ? (0, a.jsxs)(g.c.Item, {
                href: ev,
                onClick: e => {
                    e.defaultPrevented || ((0, I.a)(ea, s.pc, {
                        stage: "CHATGPT_NEW_CHAT_ENTRY_STAGE_ENTRY",
                        entryPoint: "CHATGPT_NEW_CHAT_ENTRY_POINT_GPT_MENU",
                        location: "CHATGPT_NEW_CHAT_ENTRY_LOCATION_GIZMO_INFORMATION_DROPDOWN",
                        gizmoId: en.gizmo.id
                    }), 0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || (e.preventDefault(), el(!1), (0, T.c)(ea, null), (0, p.m)(ea, "chat"), eo(ev, {
                        state: {
                            focusComposerNonce: Date.now()
                        }
                    })))
                },
                children: [(0, a.jsx)(g.c.ItemIcon, {
                    children: (0, a.jsx)(v.Jh, {})
                }), (0, a.jsx)(d.a, {
                    id: "chatgptConversations.customGpt.newChat",
                    defaultMessage: "New chat",
                    description: "Short GPT actions menu label that opens a new conversation with the same custom GPT, rather than switching to general ChatGPT"
                })]
            }) : null, et[22] = en.gizmo.gizmo_type, et[23] = en.gizmo.id, et[24] = eo, et[25] = ev, et[26] = ea, et[27] = q) : q = et[27], et[28] !== en || et[29] !== ea ? (U = () => (0, b.f)(ea, G, {
                accountId: ea.get(h.f),
                resource: en
            }), et[28] = en, et[29] = ea, et[30] = U) : U = et[30], et[31] === Symbol.for("react.memo_cache_sentinel") ? (K = (0, a.jsx)(g.c.ItemIcon, {
                children: (0, a.jsx)(v.fe, {})
            }), V = (0, a.jsx)(d.a, {
                id: "chatgptConversations.customGpt.about",
                defaultMessage: "About",
                description: "GPT menu action that opens its details over the current conversation or landing page"
            }), et[31] = K, et[32] = V) : (K = et[31], V = et[32]), et[33] !== U ? (Q = (0, a.jsxs)(g.c.Item, {
                onSelect: U,
                children: [K, V]
            }), et[33] = U, et[34] = Q) : Q = et[34];
            let eb = eg ? w : C.a;
            return et[35] !== en || et[36] !== er || et[37] !== eg || et[38] !== ea ? (Y = () => {
                (0, A.e)(ea, en, !eg).catch(() => {
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
            }, et[35] = en, et[36] = er, et[37] = eg, et[38] = ea, et[39] = Y) : Y = et[39], et[40] !== eg ? ($ = eg ? (0, a.jsx)(d.a, {
                id: "chatgptConversations.customGpt.unpin",
                defaultMessage: "Unpin GPT",
                description: "Compact overflow-menu action that removes the current custom GPT from the user's pinned sidebar items in Codex Desktop"
            }) : (0, a.jsx)(d.a, {
                id: "chatgptConversations.customGpt.pin",
                defaultMessage: "Pin GPT",
                description: "Compact overflow-menu action that adds the current custom GPT to the user's pinned sidebar items in Codex Desktop"
            }), et[40] = eg, et[41] = $) : $ = et[41], et[42] !== eb || et[43] !== Y || et[44] !== $ ? (Z = (0, a.jsx)(g.c.Item, {
                LeftIcon: eb,
                onSelect: Y,
                children: $
            }), et[42] = eb, et[43] = Y, et[44] = $, et[45] = Z) : Z = et[45], et[46] !== ep || et[47] !== ef || et[48] !== en.gizmo.current_user_permission?.can_view_config ? (J = ep || en.gizmo.current_user_permission?.can_view_config ? (0, a.jsx)(g.c.Item, {
                href: ef,
                leftIconAsset: ep ? N.a : O.a,
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
            }) : null, et[46] = ep, et[47] = ef, et[48] = en.gizmo.current_user_permission?.can_view_config, et[49] = J) : J = et[49], et[50] !== en ? (X = (0, a.jsx)(M.a, {
                resource: en
            }), et[50] = en, et[51] = X) : X = et[51], et[52] !== ei || et[53] !== H || et[54] !== q || et[55] !== Q || et[56] !== Z || et[57] !== J || et[58] !== X ? (ee = (0, a.jsxs)(g.a, {
                align: "start",
                contentWidth: "menu",
                open: ei,
                onOpenChange: el,
                triggerButton: H,
                children: [q, Q, Z, J, X]
            }), et[52] = ei, et[53] = H, et[54] = q, et[55] = Q, et[56] = Z, et[57] = J, et[58] = X, et[59] = ee) : ee = et[59], ee
        }
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
                    } = (0, i.p)();
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
                            if (null == a || !0 !== t(d.q, a)) return;
                            let r = (0, u.b)(a);
                            (0, c.j)(x, r, x.get(d.x, r)), _(a)
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
            let t, n, A, G, B, z, F = (0, r.c)(28),
                {
                    conversationId: D,
                    turns: W,
                    loadHistory: H,
                    renderMode: q,
                    paragenEnabled: U,
                    enabled: K,
                    canCopy: V,
                    priority: Q
                } = e,
                Y = void 0 === q ? "conversation" : q,
                $ = void 0 !== U && U,
                Z = void 0 === K || K,
                J = void 0 === V || V,
                X = void 0 === Q ? "fallback" : Q,
                ee = (0, l.y)(f.a),
                et = (0, c.useRef)(null);
            F[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => () => et.current?.abort(), F[0] = t) : t = F[0], F[1] !== J || F[2] !== D || F[3] !== Z || F[4] !== H || F[5] !== $ || F[6] !== Y ? (n = [D, Z, J, H, Y, $], F[1] = J, F[2] = D, F[3] = Z, F[4] = H, F[5] = $, F[6] = Y, F[7] = n) : n = F[7], (0, c.useEffect)(t, n), F[8] !== J || F[9] !== D || F[10] !== $ || F[11] !== Y || F[12] !== ee || F[13] !== W ? (A = () => {
                let e = ee.get(C.j, D),
                    t = ee.query.getData(b.chatGptConversationQueryById$, e),
                    n = t?.conversation_origin ?? ee.get(C.x, D);
                if (!J || "tpp" === n || "flora" === n) return null;
                let a = ee.get(C.L, D),
                    r = $ && "conversation" === Y ? ee.get(I.a, D)?.promptMessageId : void 0,
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
                    }(W ?? (0, x.b)({
                        conversation: t,
                        threadMapping: a,
                        threadCurrentNode: r ?? ee.get(C.B, D),
                        conversationOrigin: n,
                        isStreaming: (0, C.zb)(ee.get(C._, D)),
                        mode: Y,
                        moderationDisclaimersByMessageId: ee.get(C.M, D),
                        pendingSubmission: null
                    }).renderedTurns);
                if (s?.messageId == null) return {
                    serverId: e,
                    comparisonPromptMessageId: r,
                    content: s?.content
                };
                let o = {
                        conversationId: D,
                        messageId: s.messageId,
                        codeBlockIndex: s.codeBlockIndex
                    },
                    i = (0, S.a)(a?.[s.messageId]?.message?.metadata);
                return {
                    serverId: e,
                    comparisonPromptMessageId: r,
                    content: ee.get(T.b, o) ?? i?.[String(s.codeBlockIndex)]?.content ?? s.content
                }
            }, F[8] = J, F[9] = D, F[10] = $, F[11] = Y, F[12] = ee, F[13] = W, F[14] = A) : A = F[14];
            let en = (0, y.a)(A);
            F[15] !== ee ? (G = (e, t) => {
                let n = e => {
                    (0, g.a)(ee, o.CodexChatgptInteractionCodeCopyRequested, {
                        characterCount: (0, i.a)(e.length),
                        productExperience: s.CodexExpandedSidePanelProductSurface.CODEX_EXPANDED_SIDE_PANEL_PRODUCT_SURFACE_CHAT
                    })
                };
                return (0, v.b)(e, void 0, () => {
                    "string" == typeof e ? n(e) : e.then(n, L)
                }).then(e => {
                    e && !t?.aborted && ee.get(m.f).success((0, a.jsx)(d.a, {
                        id: "chatgpt.codeBlocks.copyLast.success",
                        defaultMessage: "Copied code block to clipboard",
                        description: "Success toast after the user copies the last assistant code block using the keyboard shortcut or command menu in Chat mode"
                    }))
                })
            }, F[15] = ee, F[16] = G) : G = F[16];
            let ea = G;
            return F[17] !== D || F[18] !== en || F[19] !== H || F[20] !== $ || F[21] !== Y || F[22] !== ee || F[23] !== ea ? (B = () => {
                if (et.current?.signal.aborted === !1) return;
                let e = en();
                if (null == e) return;
                if (null != e.content) return void ea(e.content);
                let {
                    serverId: t,
                    comparisonPromptMessageId: n
                } = e;
                if (!H || ee.get(C.A, D) || null == t || ee.get(w.c, t)?.complete !== !1) return;
                let a = new AbortController;
                et.current = a;
                let r = ee.get(u.a),
                    s = ee.get(C.B, D),
                    o = ee.get(h.f).copyLastCodeBlock,
                    i = ee.watch(e => {
                        let {
                            get: t
                        } = e;
                        (t(u.a) !== r || t(C.B, D) !== s || $ && "conversation" === Y && t(I.a, D)?.promptMessageId !== n || t(h.f).copyLastCodeBlock !== o) && a.abort()
                    });
                ea((async () => {
                    await (0, _.a)(ee, t, a.signal), a.signal.throwIfAborted();
                    let e = en()?.content;
                    if (null == e) throw Error("No complete code block in this conversation");
                    return e
                })(), a.signal).finally(() => {
                    i(), et.current === a && (et.current = null)
                })
            }, F[17] = D, F[18] = en, F[19] = H, F[20] = $, F[21] = Y, F[22] = ee, F[23] = ea, F[24] = B) : B = F[24], F[25] !== Z || F[26] !== X ? (z = {
                enabled: Z,
                priority: X
            }, F[25] = Z, F[26] = X, F[27] = z) : z = F[27], (0, p.a)("copyLastCodeBlock", B, z), null
        }

        function L() {}
    }),
    LEgg: (function(e, t, n) {
        n.d(t, {
            a: () => _
        });
        var a = n("ABep"),
            r = n("QosV");
        n("DNYL");
        var s = n("iTtm"),
            o = n("Wf1j"),
            i = n("QcFS"),
            l = n("TdH6"),
            c = n("QcW8");
        n("ZU27"), n("TpEm");
        var d = n("gbrq"),
            u = n("fBor"),
            h = n("ipGa"),
            p = n("xnQm"),
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
                    children: (0, a.jsx)(c.qd, {})
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
                m = (0, i.W)(),
                g = (0, i.Y)(),
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
            h = n("UnLw");
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
    T33u: (function(e, t, n) {
        var a = n("czpb"),
            r = n("iTtm"),
            s = n("ASxG"),
            o = n("OWtl"),
            i = n("OMIV"),
            l = n("b6fw");
        let c = s.object({
                course_id: s.string().trim().min(1),
                title: s.string().trim().nullish().catch(null),
                icon_url_or_emoji: s.url({
                    protocol: /^https$/
                }).or(s.emoji()).nullish().catch(null)
            }),
            d = s.object({
                course_info: c.nullish()
            }),
            u = (0, r.d)(o.a, (e, t) => {
                let {
                    get: n
                } = t, a = d.safeParse(n(l.g, e)?.view);
                return a.success ? a.data.course_info ?? null : null
            }, {
                isEqual: a.isEqual
            }),
            h = (0, r.d)(o.a, (e, t) => {
                let {
                    get: n
                } = t;
                return n(i.d, "4035922817") ? n(u, e) : null
            }),
            p = (0, r.d)(o.a, (e, t) => {
                let {
                    get: n
                } = t;
                return n(h, e)?.course_id ?? null
            });
        n.d(t, {}, {
            a: p,
            b: h
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
                isError: L
            } = o, B = (0, T.a)(N, k, r?.gizmo.id), z = "allowed" === c, F = e => {
                let a = t.get(j) + 1,
                    r = t.get(p.d);
                t.set(j, a), (0, C.T)({
                    scope: t,
                    conversationId: n.id,
                    projectId: e.gizmo.id
                }).then(n => {
                    n && t.get(j) === a && t.get(p.d) === r && f((0, S.c)(e.gizmo.id))
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
                    icon: d.ug,
                    message: A.newProject,
                    selectAfterClose: !0,
                    onSelect: () => {
                        t.set(j, e => e + 1), (0, x.a)(t, F, {
                            allowLocalProjectCreation: !1,
                            forceGlobalMemory: E,
                            onCloseAutoFocus: _
                        })
                    }
                }), B.length > 0 && D.push({
                    id: "new-project-separator",
                    type: "separator"
                })), B)) {
                let {
                    targetMemoryBlocked: t
                } = (0, I.c)(n, void 0, e), r = t ? (0, w.a)((0, b.c)(e)) : void 0;
                D.push({
                    id: `move-to-project:${e.gizmo.id}`,
                    icon: (0, a.jsx)(g.a, {
                        className: "icon-xs",
                        size: 16,
                        color: e.gizmo.display.theme,
                        fallbackIcon: (0, a.jsx)(d.ud, {}),
                        icon: e.gizmo.display.emoji
                    }),
                    nativeIcon: (0, m.b)(e.gizmo.display.emoji),
                    message: A.projectName,
                    messageValues: {
                        projectName: e.gizmo.display.name
                    },
                    enabled: null == r,
                    tooltipMessage: r,
                    onSelect: () => F(e)
                })
            }
            return l && (O || L) ? D.push({
                id: "retry-project-destinations",
                message: A.destinationsFailed,
                closeOnSelect: !1,
                onSelect: () => {
                    Promise.all([t.query.invalidate(y.a), t.query.invalidate(C.m)])
                }
            }) : l && (R || G) ? D.push({
                id: "loading-project-destinations",
                message: A.loading,
                tooltipMessage: A.reopen,
                enabled: !1
            }) : O || L || R || G || 0 !== B.length || z || D.push({
                id: "no-project-destinations",
                message: A.noDestinations,
                enabled: !1
            }), [...i && D.length > 0 ? [{
                id: "move-to-project",
                icon: d.ud,
                message: A.moveToProject,
                enabled: !P,
                tooltipMessage: M,
                submenu: D
            }] : [], ...null == r ? [] : [{
                id: "remove-from-project",
                icon: d.Cd,
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
                    v = (0, l.Y)(),
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
                g = (0, s.x)(p.e, (0, c.a)());
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
            i = n("xnQm"),
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
                            plainTextMode: (0, h.b)(S.get, i.qf.composerPlainTextMode),
                            suggestionOptions: {
                                enableInlineSystemHints: "tpp" !== e && "flora" !== e,
                                variant: "tpp" !== e && "flora" !== e ? "chatgpt" : void 0
                            }
                        });
                    return null == w && null != C && "string" == typeof T && null != (0, m.j)(S, T) && "tpp" !== e && "flora" !== e && (0, p.N)(S, C, t.getChatGptPrompt().systemHints), t
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
                    v = (0, o.Y)(),
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
            i = n("Wf1j"),
            l = n("oyxz"),
            c = n("jqIZ"),
            d = n("QmkR"),
            u = n("HOLv"),
            h = n("SGsN"),
            p = n("iGet"),
            m = n("OWtl"),
            g = n("MRlq"),
            f = n("HFSu"),
            v = n("vNLk"),
            y = n("PCxL"),
            b = n("aZgH"),
            x = n("g5lO");
        n.d(t, {}, {
            a: function(e) {
                let t, n, C, _, w, I, T, S, j, E = (0, r.c)(36),
                    {
                        conversationId: A,
                        kind: P
                    } = e,
                    M = (0, o.y)(m.a),
                    k = (0, i.a)(),
                    R = (0, c.W)(),
                    O = (0, c.Y)();
                E[0] !== R.hash || E[1] !== R.pathname || E[2] !== R.search || E[3] !== O || E[4] !== M ? (t = () => {
                    (0, y.e)(M), O({
                        pathname: R.pathname,
                        search: R.search,
                        hash: R.hash
                    }, {
                        replace: !0,
                        state: null
                    })
                }, E[0] = R.hash, E[1] = R.pathname, E[2] = R.search, E[3] = O, E[4] = M, E[5] = t) : t = E[5];
                let N = t,
                    G = (0, o.z)(y.g);
                E[6] !== A || E[7] !== G ? (n = G?.find(e => (0, b.a)(e.task) === `hosted:${A}`), E[6] = A, E[7] = G, E[8] = n) : n = E[8];
                let L = n;
                E[9] !== A || E[10] !== M ? (C = () => {
                    let e = M.get(y.h);
                    return null != e && (0, b.a)(e) === `hosted:${A}` ? (0, y.d)(M, e) : void 0
                }, E[9] = A, E[10] = M, E[11] = C) : C = E[11], E[12] !== A || E[13] !== P || E[14] !== M ? (_ = async () => {
                    if ("cloud" === P) {
                        await f.a.safePost("/wham/tasks/{task_id}/recover", {
                            parameters: {
                                path: {
                                    task_id: A
                                }
                            }
                        }), (0, p.c)(M, A, !1);
                        return
                    }
                    await (0, d.W)({
                        scope: M,
                        conversationId: A
                    })
                }, E[12] = A, E[13] = P, E[14] = M, E[15] = _) : _ = E[15], E[16] !== A || E[17] !== N || E[18] !== P || E[19] !== M ? (w = (e, t, n) => {
                    n?.("restored");
                    let r = M.get(h.f).info((0, a.jsx)(l.a, {
                        ...g.a.unarchiveSuccessPlain
                    }), {
                        leading: (0, a.jsx)(u.a, {
                            "aria-hidden": !1,
                            asset: x.a
                        }),
                        primaryAction: {
                            label: (0, a.jsx)(l.a, {
                                ...g.a.viewNow
                            }),
                            onClick: () => {
                                r.close(), N()
                            }
                        },
                        id: `unarchive-thread-${P}:${A}`
                    })
                }, E[16] = A, E[17] = N, E[18] = P, E[19] = M, E[20] = w) : w = E[20], E[21] !== k || E[22] !== M ? (I = (e, t, n) => {
                    n?.(null), M.get(h.f).danger(k.formatMessage(g.a.unarchiveError), {
                        errorAnalytics: {
                            toastId: "previewFooter.onError.unarchiveError"
                        }
                    })
                }, E[21] = k, E[22] = M, E[23] = I) : I = E[23], E[24] !== C || E[25] !== _ || E[26] !== w || E[27] !== I ? (T = {
                    onMutate: C,
                    mutationFn: _,
                    onSuccess: w,
                    onError: I
                }, E[24] = C, E[25] = _, E[26] = w, E[27] = I, E[28] = T) : T = E[28];
                let {
                    mutate: B,
                    isPending: z,
                    isSuccess: F
                } = (0, s.a)(T), D = F || L?.status === "restored", W = z || L?.status === "restoring";
                return E[29] !== B ? (S = () => B(), E[29] = B, E[30] = S) : S = E[30], E[31] !== N || E[32] !== S || E[33] !== D || E[34] !== W ? (j = (0, a.jsx)(v.a, {
                    restored: D,
                    restoring: W,
                    onUnarchive: S,
                    onDone: N
                }), E[31] = N, E[32] = S, E[33] = D, E[34] = W, E[35] = j) : j = E[35], j
            }
        })
    }),
    uQ18: (function(e, t) {
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